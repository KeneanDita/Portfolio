"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/portfolio";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await res.json().catch(() => ({}))) as
        | { ok?: boolean; error?: string; details?: string; hint?: string }
        | undefined;

      if (!res.ok) {
        if (process.env.NODE_ENV !== "production" && data?.details) {
          console.error("Contact form error:", data.details);
        }

        setStatus({
          state: "error",
          message: [data?.error, data?.hint].filter(Boolean).join(" ") || "Something went wrong.",
        });
        return;
      }

      setStatus({ state: "success" });
      form.reset();
    } catch {
      setStatus({ state: "error", message: "Network error." });
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me what you're building (or the role you're hiring for)"
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending..." : "Submit"}
        </Button>

        <p className="text-xs text-muted-foreground" aria-live="polite">
          {status.state === "success" ? "Message sent." : null}
          {status.state === "error" ? status.message : null}
        </p>

        {status.state === "error" ? (
          <p className="text-xs text-muted-foreground">
            Email not working? Send directly to{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
