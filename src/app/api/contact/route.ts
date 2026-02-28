import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Nodemailer aktarımı - Gmail SMTP kullanarak e-posta gönderimi
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Sizin veya sitenin gmail adresi
                pass: process.env.EMAIL_APP_PASSWORD, // Gmail Uygulama Şifresi
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Gelişmiş SPF önlemi
            to: process.env.EMAIL_USER, // Nereye düşeceği (Yine sizin adresiniz)
            replyTo: email, // Yanıtla dendiğinde form sahibine gitsin
            subject: `Web Sitesi İletişim: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Gönderen:</strong> ${name}</p>
          <p><strong>E-Posta:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Konu:</strong> ${subject}</p>
          <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 20px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
