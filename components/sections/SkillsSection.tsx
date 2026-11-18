
export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/10 bg-[#080b12]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tools I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build, deploy, monitor and
            maintain production applications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Cloud */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">☁️ Cloud & Infrastructure</h3>
              <span className="font-mono text-xs text-cyan-400">01</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["AWS", "EC2", "VPC", "IAM", "S3", "RDS", "Load Balancer", "CloudWatch"].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Containers */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">🐳 Containers</h3>
              <span className="font-mono text-xs text-cyan-400">02</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "Docker Compose"].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CI/CD */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">⚙️ CI/CD & Automation</h3>
              <span className="font-mono text-xs text-cyan-400">03</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Jenkins", "Ansible", "Git", "GitHub", "Bash / Shell"].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Linux */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">🐧 Linux & Servers</h3>
              <span className="font-mono text-xs text-cyan-400">04</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Ubuntu", "Linux Administration", "NGINX", "Apache", "PM2"].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">🗄️ Databases</h3>
              <span className="font-mono text-xs text-cyan-400">05</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "MongoDB Atlas", "MySQL", "Amazon RDS"].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Monitoring */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">📊 Monitoring & Security</h3>
              <span className="font-mono text-xs text-cyan-400">06</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "CloudWatch",
                "Application Logs",
                "SSL/TLS",
                "Security Groups",
                "Linux Hardening",
              ].map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
