"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactDetails = [
  { icon: MapPin, label: "Address", value: "123 Veterinary Lane, Bangalore, Karnataka 560001" },
  { icon: Phone, label: "Phone", value: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: Mail, label: "Email", value: "info@samanvayavet.in", href: "mailto:info@samanvayavet.in" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 7:00 PM" },
];

export default function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted (no backend yet):", data);
    reset();
    alert("Thank you for reaching out. We will get back to you shortly. (This is a demo — no message was sent.)");
  };

  return (
    <>
      {/* Header */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Get in Touch
          </span>
          <hr className="mt-2 mb-5 w-10 border-secondary/40" />
          <h1 className="font-heading font-semibold text-primary text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight mb-6">
            We&rsquo;d Love to Hear from You
          </h1>
          <p className="text-primary/65 max-w-xl leading-relaxed">
            Whether you have a question about our services, want to schedule a
            visit, or just need advice — our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Details */}
            <div className="lg:col-span-2 space-y-10">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-surface-soft shrink-0">
                      <Icon className="size-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-body text-xs font-medium uppercase tracking-wider text-primary/50 mb-1">
                        {item.label}
                      </div>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="font-heading font-medium text-primary hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-heading font-medium text-primary">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-medium text-primary mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-primary/15 bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm font-medium text-primary mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-primary/15 bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-colors"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-sm font-medium text-primary mb-1.5"
                  >
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-primary/15 bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block font-body text-sm font-medium text-primary mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-2.5 rounded-[6px] border border-primary/15 bg-white text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/60 transition-colors resize-y"
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="special-link-btn inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider disabled:opacity-60"
                  >
                    <Send className="size-4" strokeWidth={1.5} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
