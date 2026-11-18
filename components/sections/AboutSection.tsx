
export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#0b0f18]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            DevOps focused on reliability.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6 text-gray-400 leading-8">
            <p>
              I&apos;m a DevOps Engineer with 3+ years of hands-on experience
              designing, deploying and maintaining production infrastructure
              on AWS.
            </p>

            <p>
              My experience includes containerized applications, CI/CD
              automation, Linux server administration, cloud infrastructure,
              monitoring, reverse proxy configuration and production
              troubleshooting.
            </p>

            <p>
              I enjoy solving infrastructure problems, automating repetitive
              tasks and building deployment workflows that are reliable,
              secure and easy to maintain.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-cyan-400">3+</p>
              <p className="mt-2 text-sm text-gray-400">Years Experience</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-cyan-400">AWS</p>
              <p className="mt-2 text-sm text-gray-400">Cloud Infrastructure</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-cyan-400">CI/CD</p>
              <p className="mt-2 text-sm text-gray-400">Deployment Automation</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-cyan-400">24/7</p>
              <p className="mt-2 text-sm text-gray-400">Production Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
