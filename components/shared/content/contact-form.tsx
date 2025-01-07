'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import toast from 'react-hot-toast';
const items = [
  {
    id: "smart-lighting",
    label: "Smart Lighting",
  },
  {
    id: "smart-blinds-and-curtains",
    label: "Smart Blind & Curtains",
  },
  {
    id: "access-and-intercom",
    label: "Smart Access and Intercom",
  },
  {
    id: "cctv-security-alarm",
    label: "CCT, Security & Alarm",
  },
  {
    id: "entertainment-and-av",
    label: "Entertainment & AV",
  },
  {
    id: "network",
    label: "Network",
  },
  {
    id: "automation",
    label: "Home Automation",
  },
  {
    id: "other",
    label: "Other",
  },
] as const
import { Textarea } from "@/components/ui/textarea"
import { useFormState, useFormStatus } from "react-dom"
import sendEmail from "@/app/_actions"
import ContactFormSchema from "@/lib/form-data-schema"
import { useState } from "react"
import React from "react";
export function ProfileForm() {
  const [data, setData] = useState<z.infer<typeof ContactFormSchema>>()
  const [pending, setPending] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      items: [], 
      message: ""
    },
  })
  const { formState } = form;
  const processForm: SubmitHandler<z.infer<typeof ContactFormSchema>> = async data => {
    setPending(true)
    const result = await sendEmail(data);
    if (!result) {
      toast.error('Something went wrong, Please try again!', { duration: 5000});
      setPending(false)
      return;
    }
    if (result.error) {
      toast.error(result.error.toString(), { duration: 5000});
      setPending(false)
      return;
    }
    toast.success('Happy Days', { duration: 5000});
    form.reset();
    setPending(false)
    setData(data);
  }
  return (
    <GoogleReCaptchaProvider
            reCaptchaKey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
            }>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processForm)}  className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-md font-bold">Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-md font-bold">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="abc@xyz.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-white text-md font-bold">Services</FormLabel>
                <FormDescription>
                 Which service you are interested in?
                </FormDescription>
              </div>
              <div className="flex flex-col space-y-2 ">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-2 space-y-0 text-white    "
                      >
                        <FormControl className=" ">
                          <Checkbox
                            className="border-white   data-[state=checked]:bg-white data-[state=checked]:text-black peer "
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-md font-normal text-[hsl(240,5%,64.9%)] peer-data-[state=checked]:text-white peer-data-[state=checked]:font-bold ">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-md font-bold">Let us know how we can assist you today</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you need..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" className="w-full disabled:cursor-not-allowed" variant="secondary" disabled={pending}  >Submit</Button>
      </form>
    </Form>
    </GoogleReCaptchaProvider>
  )
}
function Submit() {
  const {pending} = useFormStatus();
  return <Button disabled={pending}>
    {pending ? " Submitting " : "Submit"}
  </Button>
}
export default ProfileForm;