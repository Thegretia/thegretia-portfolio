"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="flex items-center gap-3 rounded-lg border border-emerald-800/60 bg-emerald-950/40 p-4 text-emerald-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <div className="text-sm">
            <p className="font-semibold text-emerald-200">
              Subscription confirmed!
            </p>
            <p className="text-emerald-400/80 text-xs">
              You will receive deep dives into Data Engineering & AI systems.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="engineer@company.com"
              aria-label="Email address for newsletter"
              required
              disabled={status === "loading"}
              className="flex-1 rounded-lg border border-slate-800 bg-surface-100 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-60 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors disabled:opacity-50 font-mono shrink-0 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
