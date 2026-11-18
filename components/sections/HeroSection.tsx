
import Background3D from "@/components/Background3D";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Background3D />
      </div>

      {/* Background glow */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for DevOps opportunities
          </div>

          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            DevOps Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building
            <span className="text-cyan-400"> reliable </span>
            <br />
            cloud infrastructure.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m Kashi Diggi, a DevOps Engineer with 3+ years of
            experience working with AWS, Docker, Kubernetes, CI/CD,
            Linux and production infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              View My Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16">
            <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
              Core Technologies
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "AWS",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "Ansible",
                "Linux",
                "NGINX",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
