import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { LinkedInPosts } from "@/components/LinkedInPosts";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <LinkedInPosts />
      <Contact />

      {/* Footer (Simplified inside Contact, but we add a bottom bar) */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ali Kaan Özoğlu</p>
      </footer>
    </main>
  );
}
