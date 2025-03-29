'use server'
import ContactFormSchema from "@/lib/form-data-schema"
import { z } from "zod"
import { Resend } from "resend";
import OSHContactReceiptEmail from "@/components/email/email-reciept-template";

export default async function sendEmail(formData: z.infer<typeof ContactFormSchema>) {
    const result = ContactFormSchema.safeParse(formData)

    if (result.success) {
        const { name, email, items, message } = result.data;
        const resend = new Resend(process.env.RESEND_API_KEY);
        try {
            const { data } = await resend.emails.send({
                from: 'leads@ozsmarthome.com.au',
                to: 'info@ozsmarthome.com.au',
                subject: 'Potential Lead',
                html: `${name} <br/> ${email} <br/> ${items.flat()} <br/> ${message}`,

            })

            if (data?.id) {
                const { data } = await resend.emails.send({
                    from: 'OZ SMART HOME <info@ozsmarthome.com.au>',
                    to: email,
                    subject: 'Thanks for your inquiry.',
                    react: <OSHContactReceiptEmail username={name} />,

                })
            }

            return { success: true, data: data?.id }

        } catch (error) {
            return { success: false, error: error }
        }

    }
    if (result.error) {
        console.error(result.error.format())
        return { success: false, error: result.error.format() }
    }

}