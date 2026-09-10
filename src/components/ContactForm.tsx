"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try sending a direct email.");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-surface/80 p-6 sm:p-8 backdrop-blur-sm">
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. I have received your message and will get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5"
              >
                Your Name <span className="text-emerald-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                required
                disabled={status === "loading"}
                className="w-full rounded-lg border border-slate-800 bg-surface-100 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-60 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5"
              >
                Email Address <span className="text-emerald-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                required
                disabled={status === "loading"}
                className="w-full rounded-lg border border-slate-800 bg-surface-100 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-60 transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5"
            >
              Subject / Project Type
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Data Pipeline Architecture / Freelance Opportunity"
              disabled={status === "loading"}
              className="w-full rounded-lg border border-slate-800 bg-surface-100 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-60 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5"
            >
              Message / Project Requirements <span className="text-emerald-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide a brief overview of your project requirements, technical challenges, or job opportunity..."
              required
              disabled={status === "loading"}
              className="w-full rounded-lg border border-slate-800 bg-surface-100 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-60 transition-colors resize-y"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-xs text-red-400 p-3 rounded-lg bg-red-950/40 border border-red-800/40">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors disabled:opacity-50 font-mono cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
