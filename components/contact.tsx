"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import * as z from "zod";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSection } from "@/hooks/use-section";
import { useToast } from "@/components/ui/use-toast";
import { useActiveSectionStore } from "@/hooks/use-active-section-store";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import SubmitButton from "@/components/submit-button";
import SectionHeading from "@/components/section-heading";

const formSchema = z.object({
  senderEmail: z
    .string()
    .min(1, { message: "Please enter a valid email address" })
    .email(),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export default function Contact() {
  const router = useRouter();
  const { toast } = useToast();
  const ref = useSection("Contact");
  const { setActiveSection, setLastClicked } = useActiveSectionStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { senderEmail: "", message: "" },
  });

  const { isSubmitting } = useMemo(() => form.formState, [form.formState]);

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      try {
        await axios.post("/api/contact", values);

        toast({ description: "Your message has been sent." });
        form.reset();
        router.push("#home");
        setLastClicked(Date.now());
        setActiveSection("Home");
      } catch {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    },
    [toast, form, router, setActiveSection, setLastClicked],
  );

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading title="Contact me" />
      <p className="-mt-6 text-center text-gray-700 dark:text-gray-200">
        You can contact me directly at{" "}
        <a href="mailto:knavinavadhani@gmail.com" className="underline">
          knavinavadhani@gmail.com
        </a>{" "}
        or via the form below.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 space-y-4"
        >
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    {...field}
                    className="dark:bg-white/20"
                  />
                </FormControl>
                <FormMessage className="dark:text-rose-500" />
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
                    placeholder="Write your message here"
                    {...field}
                    className="min-h-[15rem] dark:bg-white/20"
                  />
                </FormControl>
                <FormMessage className="dark:text-rose-500" />
              </FormItem>
            )}
          />
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </motion.section>
  );
}
