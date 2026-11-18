
"use client";

import Contact3D from "@/components/Contact3D";
import type { FormEvent } from "react";

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));
    const message = String(data.get("message"));

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href =
      `mailto:kdiggi73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080b12]"
    >
      {/* Subtle 3D background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.10]">
        <Contact3D />
      </div>

      {/* Dark overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#080b12]/70 via-[#080b12]/75 to-[#080b12]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Let&apos;s work
            <span className="text-cyan-400"> together.</span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            Looking for a DevOps Engineer or want to discuss cloud
            infrastructure, automation and deployment? Feel free to connect.
          </p>
        </div>

        {/* Contact information */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+918151855447"
            className="group rounded-xl border border-white/10 bg-[#0b1421]/75 p-6 backdrop-blur-sm transition hover:border-cyan-400/50"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              <span className="text-xl">☎</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Phone
            </p>
            <h3 className="mt-2 font-semibold text-white transition group-hover:text-cyan-400">
              +91 81518 55447
            </h3>
            <p className="mt-2 text-xs text-gray-500">Call me directly</p>
          </a>

          <a
            href="mailto:kdiggi73@gmail.com"
            className="group rounded-xl border border-white/10 bg-[#0b1421]/75 p-6 backdrop-blur-sm transition hover:border-cyan-400/50"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              <span className="text-xl">✉</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Email
            </p>
            <h3 className="mt-2 break-all font-semibold text-white transition group-hover:text-cyan-400">
              kdiggi73@gmail.com
            </h3>
            <p className="mt-2 text-xs text-gray-500">Send me an email</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kashi-diggi-/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-[#0b1421]/75 p-6 backdrop-blur-sm transition hover:border-cyan-400/50"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 font-bold text-cyan-400">
              in
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              LinkedIn
            </p>
            <h3 className="mt-2 font-semibold text-white transition group-hover:text-cyan-400">
              Connect with me
            </h3>
            <p className="mt-2 text-xs text-gray-500">Professional profile</p>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-[#0b1421]/75 p-6 backdrop-blur-sm transition hover:border-cyan-400/50"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              <span className="text-xl">⌘</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              GitHub
            </p>
            <h3 className="mt-2 font-semibold text-white transition group-hover:text-cyan-400">
              View my projects
            </h3>
            <p className="mt-2 text-xs text-gray-500">Code and repositories</p>
          </a>
        </div>

        {/* Location and availability */}
        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-[#0b1421]/75 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl text-cyan-400">⌖</span>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Bengaluru, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
            <p className="text-sm text-gray-300">
              Open to DevOps & Cloud opportunities
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
              Send a message
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h3>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Let&apos;s discuss how we can build, automate and maintain
              reliable infrastructure together.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#0b1421]/80 p-6 backdrop-blur-md sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-gray-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can I help?"
                required
                className="w-full rounded-lg border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-lg border border-white/10 bg-[#080b12] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Send Message →
            </button>

            <p className="text-center text-xs text-gray-500">
              Your default email application will open to send the message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
