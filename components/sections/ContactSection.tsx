
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
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#070b14]"
    >
      {/* Full section 3D background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <Contact3D />
      </div>

      {/* Cinematic dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#070b14]/65 via-[#070b14]/55 to-[#070b14]/95" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Foreground content */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 py-28">

        {/* Main heading */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-mono text-sm uppercase tracking-[0.4em] text-cyan-400">
            CONTACT / CONNECT
          </p>

          <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s create
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              something amazing.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Great infrastructure starts with a conversation.
            Let&apos;s connect and build something reliable together.
          </p>

          {/* Phone number - prominent */}
          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gray-400">
              CALL ME DIRECTLY
            </p>

            <a
              href="tel:+918151855447"
              className="inline-block text-2xl font-bold tracking-wide text-white transition hover:text-cyan-400 sm:text-4xl"
            >
              +91 81518 55447
            </a>

            <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          {/* Contact buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:kdiggi73@gmail.com"
              className="rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
            >
              Let&apos;s Talk →
            </a>

            <a
              href="https://www.linkedin.com/in/kashi-diggi-/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub ↗
            </a>
          </div>

        </div>

        {/* Contact details */}
        <div className="mx-auto mt-24 grid max-w-4xl gap-4 border-y border-white/10 py-8 sm:grid-cols-3">

          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
              Email
            </p>
            <a
              href="mailto:kdiggi73@gmail.com"
              className="mt-3 inline-block text-sm text-gray-200 transition hover:text-cyan-400"
            >
              kdiggi73@gmail.com
            </a>
          </div>

          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
              Location
            </p>
            <p className="mt-3 text-sm text-gray-200">
              Bengaluru, India
            </p>
          </div>

          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
              Availability
            </p>
            <p className="mt-3 text-sm text-green-400">
              ● Open to opportunities
            </p>
          </div>

        </div>

        {/* Message form */}
        <div className="mx-auto mt-24 max-w-2xl">

          <div className="mb-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              SEND A MESSAGE
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Have something in mind?
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Drop me a message. I&apos;d love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#0b1220]/80 p-6 backdrop-blur-xl sm:p-8"
          >

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/10 bg-[#080b12]/80 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full rounded-lg border border-white/10 bg-[#080b12]/80 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-white/10 bg-[#080b12]/80 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-lg border border-white/10 bg-[#080b12]/80 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Send Message →
            </button>

            <p className="text-center text-xs text-gray-500">
              Opens your default email application.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
