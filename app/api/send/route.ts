import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { data } = await resend.emails.send({
            from: 'info@ozsmarthome.com.au',
            to: 'ghiasinejad.jamshid@gmail.com',
            subject: 'Hello World',
            html: '<h1>HELLO HELLO</h1>'
        })
        return NextResponse.json({data})
    }catch(error) {
        return NextResponse.json({ error})
    }
}