"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { site } from "@/../content/site";
import { Reveal, SectionHeader } from "@/components/motion/reveal";
import { Icon } from "@/lib/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honey: z.string().max(0).optional(), // honeypot
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honey: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setStatusMsg("Sending...");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const json = await res.json();
      
      if (!res.ok) {
        if (res.status === 503) {
          setStatusMsg("Contact form is not connected yet.");
          toast.error("Contact form is not connected yet.");
        } else {
          setStatusMsg(json.error || "Failed to send.");
          toast.error(json.error || "Failed to send message.");
        }
      } else {
        setStatusMsg("Message sent successfully.");
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (err) {
      setStatusMsg("An error occurred.");
      toast.error("An error occurred while sending.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-[max(5vw,20px)] pt-[110px] pb-[10px]">
      <SectionHeader index="05" title="Contact" />
      
      <Reveal>
        <h2 className="font-serif text-[clamp(3rem,10vw,7.5rem)] tracking-tight mb-[34px] leading-[1.05]">
          {site.contact.heading.before}
          <em className="text-accent not-italic italic">{site.contact.heading.em}</em>
        </h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        <Reveal delay={0.1}>
          <p className="text-muted-foreground mt-0 mb-0">{site.person.email}</p>
          <div className="flex gap-[12px] mt-[22px]">
            {site.contact.socials.map((social, i) => {
              if (!social.href) return null;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-[44px] h-[44px] border border-border rounded-full grid place-items-center transition-all duration-250 hover:border-accent hover:text-accent hover:-translate-y-1"
                >
                  <Icon name={social.icon as any} className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-[14px]">
              <div className="hidden">
                <FormField
                  control={form.control}
                  name="honey"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input tabIndex={-1} autoComplete="off" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="w-full bg-transparent border-0 border-b border-border text-foreground font-inherit p-0 py-[12px] rounded-none focus-visible:ring-0 focus-visible:border-b-accent transition-colors duration-250 h-auto"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-accent-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="w-full bg-transparent border-0 border-b border-border text-foreground font-inherit p-0 py-[12px] rounded-none focus-visible:ring-0 focus-visible:border-b-accent transition-colors duration-250 h-auto"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-accent-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Your message"
                        className="w-full bg-transparent border-0 border-b border-border text-foreground font-inherit p-0 py-[12px] rounded-none focus-visible:ring-0 focus-visible:border-b-accent transition-colors duration-250 resize-none min-h-[auto]"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-accent-2" />
                  </FormItem>
                )}
              />
              <div className="mt-2 flex items-center gap-[10px] flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-[8px] px-[20px] py-[10px] border border-foreground rounded-full no-underline text-[0.86rem] bg-foreground text-background transition-all duration-250 hover:bg-accent hover:border-accent hover:text-white disabled:opacity-50"
                >
                  Send message <Icon name="send" className="w-[16px] h-[16px]" />
                </button>
                {statusMsg && <span className="text-muted-foreground text-[0.85rem]">{statusMsg}</span>}
              </div>
            </form>
          </Form>
        </Reveal>
      </div>
    </section>
  );
}
