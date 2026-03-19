"use client";

import type { FormEvent } from "react";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { ContactData } from "@/types/portfolio";

interface ContactSectionProps {
  contact: ContactData;
}

function buildMailToLink(email: string, name: string, senderEmail: string, message: string) {
  const subject = encodeURIComponent(`Portfolio Contact: ${name || "New inquiry"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\n${message}`);
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const mailtoLink = buildMailToLink(contact.email, name, senderEmail, message);
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-block pb-14">
      <div className="section-container">
        <SectionTitle
          title="Let's Connect"
          subtitle="Interested in collaborating or discussing a project? My inbox is always open."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="text-2xl font-extrabold text-slate-800">Reach Out</h3>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="contact-link-item"
                aria-label={`Send email to ${contact.email}`}
              >
                <span className="icon-tile">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">{contact.email}</span>
                </span>
              </a>

              <div className="contact-link-item" role="presentation">
                <span className="icon-tile">
                  <Icon name="mapPin" className="h-5 w-5" />
                </span>
                <span>
                  <span className="contact-link-label">Location</span>
                  <span className="contact-link-value">{contact.location}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="social-bubble"
              >
                <Icon name="github" className="h-6 w-6" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="social-bubble social-bubble-linkedin"
              >
                <Icon name="linkedin" className="h-6 w-6" />
              </a>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input id="name" name="name" type="text" className="form-input" placeholder="Jane Doe" required />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input min-h-28 resize-y"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </form>
          </GlassCard>
        </div>

        <footer className="mt-16 border-t border-slate-200/70 pt-8 text-center text-sm font-semibold text-slate-600">
          © {new Date().getFullYear()} Hemanta Regmi. Designed and built with Next.js and Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
