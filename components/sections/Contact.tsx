"use client";

import * as React from "react";
import { socials } from "../../data/socials";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../animations/Reveal";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const Contact = () => {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section id="contact" className="relative w-full pt-[88px] pb-[88px] max-md:py-[56px] overflow-hidden">
      {/* Ambient glow */}
      <div 
        className="absolute w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "var(--accent)",
          opacity: 0.08,
          filter: "blur(120px)",
          right: "-140px",
          top: "-160px",
          zIndex: -1
        }}
      />

      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[48px] 2xl:px-[96px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-[64px]">
          
          {/* Left Column */}
          <div className="lg:w-[600px] flex flex-col justify-between">
            <Reveal>
              <Eyebrow>07 / Contact</Eyebrow>
              <h2 className="font-serif font-normal text-[clamp(40px,5vw,52px)] leading-[1.05] tracking-[-0.01em] text-text mb-16">
                Have a product or engineering challenge in mind? Let's talk.
              </h2>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-col">
              {[
                { label: "EMAIL", value: socials.email },
                { label: "LINKEDIN", value: socials.linkedin },
                { label: "GITHUB", value: socials.github.replace("https://", "") }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-6 border-t border-border group">
                  <span className="font-mono text-[12px] uppercase tracking-wider text-muted">
                    {row.label}
                  </span>
                  <span className="font-sans text-[15px] font-medium text-text group-hover:text-accent transition-colors">
                    {row.value}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:w-[560px]">
            <Reveal delay={0.3}>
              <Card className="p-[32px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans text-[13px] font-medium text-text">Name</label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="h-[48px] rounded-[10px] bg-bg border border-border-strong px-4 text-[15px] text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans text-[13px] font-medium text-text">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-[48px] rounded-[10px] bg-bg border border-border-strong px-4 text-[15px] text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-sans text-[13px] font-medium text-text">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="h-[48px] rounded-[10px] bg-bg border border-border-strong px-4 text-[15px] text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans text-[13px] font-medium text-text">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="min-h-[120px] rounded-[10px] bg-bg border border-border-strong p-4 text-[15px] text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow resize-y"
                      placeholder="Tell me about the problem you are solving"
                    />
                  </div>

                  {/* Honeypot */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div aria-live="polite" className="mt-2">
                    {status === "error" && (
                      <p className="text-red-500 text-[14px]">{errorMessage}</p>
                    )}
                    {status === "success" && (
                      <p className="text-success text-[14px]">Message sent successfully!</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="self-start mt-2 gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send message"}
                    <span aria-hidden="true">→</span>
                  </Button>
                </form>
              </Card>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};
