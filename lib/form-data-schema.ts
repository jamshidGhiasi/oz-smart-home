import { z } from "zod"

const ContactFormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(6, { message: 'Email must be at least 6 characters' }).email('Email is not valid'),
    items: z.array(z.string()),
    message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
  })

  export default ContactFormSchema
