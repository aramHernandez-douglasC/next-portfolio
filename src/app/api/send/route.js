import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.USER_EMAIL;

export async function POST(req, res) {
    const { email, subject, emailBody } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ["crypticmorning@outlook.com", email],
            subject: subject,
            // TODO: Modified this with a professional email template
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for submitting your request!</p>
                    <p>{emailBody}</p>
                </>
            ),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}