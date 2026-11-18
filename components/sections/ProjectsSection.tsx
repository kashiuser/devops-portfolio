
export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-white/10 bg-[#080b12]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Hands-on infrastructure and automation projects focused on
            deployment, scalability, reliability and security.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Project 1 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="border-b border-white/10 bg-[#0d131f] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">PROJECT_01</span>
                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                  Production
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">AWS Production Infrastructure</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Production infrastructure for web applications using AWS
                services, Linux servers, reverse proxies, monitoring and
                application deployment workflows.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {["AWS EC2", "VPC", "IAM", "Load Balancer", "CloudWatch", "NGINX", "Linux"].map((tech) => (
                  <span key={tech} className="rounded-md bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-white transition hover:text-cyan-400">
                  Architecture →
                </a>
                <a href="#" className="text-sm font-medium text-gray-400 transition hover:text-cyan-400">
                  Case Study →
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="border-b border-white/10 bg-[#0d131f] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">PROJECT_02</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-400">
                  DevOps
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">CI/CD Automation Pipeline</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Automated application deployment workflow using source
                control, Jenkins, Docker and deployment automation to
                improve release consistency.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {["Jenkins", "Git", "Docker", "Ansible", "Linux", "CI/CD"].map((tech) => (
                  <span key={tech} className="rounded-md bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-white transition hover:text-cyan-400">
                  Pipeline →
                </a>
                <a href="#" className="text-sm font-medium text-gray-400 transition hover:text-cyan-400">
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="border-b border-white/10 bg-[#0d131f] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">PROJECT_03</span>
                <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs text-orange-400">
                  Containers
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">Dockerized Web Application</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Containerized web applications with Docker, focusing on
                reproducible environments, resource management and
                production deployment.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {["Docker", "Docker Compose", "Node.js", "Next.js", "Linux"].map((tech) => (
                  <span key={tech} className="rounded-md bg-orange-400/10 px-3 py-1.5 text-xs text-orange-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-white transition hover:text-cyan-400">
                  Dockerfile →
                </a>
                <a href="#" className="text-sm font-medium text-gray-400 transition hover:text-cyan-400">
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* Project 4 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="border-b border-white/10 bg-[#0d131f] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">PROJECT_04</span>
                <span className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs text-red-400">
                  Security
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">Production Monitoring & Security</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Monitoring and security practices for Linux and cloud
                environments using system metrics, application logs,
                CloudWatch, access controls and SSL/TLS.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {["CloudWatch", "Linux", "AWS IAM", "Security Groups", "SSL/TLS", "Logs"].map((tech) => (
                  <span key={tech} className="rounded-md bg-red-400/10 px-3 py-1.5 text-xs text-red-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-white transition hover:text-cyan-400">
                  Monitoring →
                </a>
                <a href="#" className="text-sm font-medium text-gray-400 transition hover:text-cyan-400">
                  Details →
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
