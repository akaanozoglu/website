import { NextResponse } from 'next/server';

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = 'harvestapi~linkedin-profile-posts';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kaanozglu/';

export async function GET() {
    try {
        if (!APIFY_TOKEN) {
            return NextResponse.json({ error: 'API token missing' }, { status: 500 });
        }

        const runResponse = await fetch(
            `https://api.apify.com/v2/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    targetUrls: [LINKEDIN_URL],
                    maxPosts: 6,
                    scrapeReactions: false,
                    scrapeComments: false,
                    includeQuotePosts: true,
                    includeReposts: false,
                }),
                next: {
                    revalidate: 3600 // 1 saatte bir arka planda günceller
                }
            }
        );

        if (!runResponse.ok) {
            const errorText = await runResponse.text();
            console.error('Apify error:', errorText);
            return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
        }

        const posts = await runResponse.json();

        // Harvest API response binding
        const cleanPosts = posts
            .filter((p: Record<string, unknown>) => p.type === 'post')
            .slice(0, 6)
            .map((post: any) => ({
                id: post.id,
                content: post.content,
                linkedinUrl: post.linkedinUrl,
                postedAt: post.postedAt,
                postImages: post.postImages,
                engagement: post.engagement,
                author: post.author ? {
                    name: post.author.name,
                    info: post.author.info,
                    avatar: post.author.avatar,
                } : null,
            }));

        return NextResponse.json(cleanPosts, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
            },
        });
    } catch (error) {
        console.error('LinkedIn posts fetch error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
