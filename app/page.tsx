import Background3D from "@/components/Background3D"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#080b12]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-wide">
            KASHI<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
             </a>
            <a href="#architecture" className="transition hover:text-cyan-400">
             Architecture
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Hire Me
          </a>
        </div>
      </nav>

       {/* Hero */}
      <section className="relative overflow-hidden">
        {/* 3D Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Background3D />
        </div>

        {/* Background glow */}
        <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center px-6 py-20">
          <div className="max-w-4xl">
            {/* Terminal-style label */}
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

            {/* Buttons */}
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

            {/* Tech stack */}
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
      </section>{/* About */}
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
          <p className="mt-2 text-sm text-gray-400">
            Years Experience
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-bold text-cyan-400">AWS</p>
          <p className="mt-2 text-sm text-gray-400">
            Cloud Infrastructure
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-bold text-cyan-400">CI/CD</p>
          <p className="mt-2 text-sm text-gray-400">
            Deployment Automation
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-bold text-cyan-400">24/7</p>
          <p className="mt-2 text-sm text-gray-400">
            Production Mindset
          </p>
        </div>
      </div>
    </div>
  </div>
</section> {/* Skills */}
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
          {["AWS", "EC2", "VPC", "IAM", "S3", "RDS", "Load Balancer", "CloudWatch"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
              >
                {skill}
              </span>
            )
          )}
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
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
            >
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
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
            >
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
          {["Ubuntu", "Linux Administration", "NGINX", "Apache", "PM2"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
              >
                {skill}
              </span>
            )
          )}
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
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
            >
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
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>{/* Experience */}
<section
  id="experience"
  className="border-t border-white/10 bg-[#0b0f18]"
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="mb-14">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        Experience
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Where I&apos;ve worked.
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        My experience building, deploying and maintaining production
        infrastructure and application environments.
      </p>
    </div>

    <div className="relative ml-3 border-l border-white/10 pl-8 md:ml-6 md:pl-10">

      {/* Moshi Moshi */}
      <div className="relative pb-16">
        {/* Timeline dot */}
        <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#0b0f18] bg-cyan-400 md:-left-[49px]" />

        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold">
            DevOps Engineer
          </h3>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-400">
            Sep 2023 — Present
          </span>
        </div>

        <p className="mb-6 text-gray-500">
          Moshi Moshi · Bengaluru, India
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <ul className="space-y-4 text-gray-400 leading-7">
            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Delivered and supported scalable production web
                applications using MERN and WordPress stacks.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Automated CI/CD pipelines and infrastructure provisioning
                using Jenkins, Git and Ansible.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Deployed and managed applications on AWS EC2 with VPC,
                IAM, Security Groups, Load Balancers and Auto Scaling.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Managed MongoDB and MySQL/RDS environments including
                backups, access control and performance monitoring.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Implemented monitoring and alerting using AWS CloudWatch,
                PM2, NGINX/Apache logs and Linux system metrics.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>
                Improved application performance and security through
                reverse proxy configuration, caching and SSL/TLS setup.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Besant Technologies */}
      <div className="relative">
        {/* Timeline dot */}
        <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#0b0f18] bg-gray-500 md:-left-[49px]" />

        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold">
            Junior DevOps Engineer
          </h3>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-400">
            Jan 2023 — Aug 2023
          </span>
        </div>

        <p className="mb-6 text-gray-500">
          Besant Technologies · Bengaluru, India
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <ul className="space-y-4 text-gray-400 leading-7">
            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
              <span>
                Managed AWS infrastructure using EC2, S3 and RDS for
                application deployment and daily operations.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
              <span>
                Administered Ubuntu Linux servers including application
                hosting, system updates, user management and security
                hardening.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
              <span>
                Implemented and maintained Jenkins CI/CD pipelines for
                reliable application deployments.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
              <span>
                Developed Bash/Shell scripts to automate routine
                operational tasks and reduce manual effort.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>{/* Projects */}
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
            <span className="font-mono text-sm text-cyan-400">
              PROJECT_01
            </span>

            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
              Production
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold">
            AWS Production Infrastructure
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Production infrastructure for web applications using AWS
            services, Linux servers, reverse proxies, monitoring and
            application deployment workflows.
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "AWS EC2",
              "VPC",
              "IAM",
              "Load Balancer",
              "CloudWatch",
              "NGINX",
              "Linux",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Architecture →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              Case Study →
            </a>
          </div>
        </div>
      </article>

      {/* Project 2 */}
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="border-b border-white/10 bg-[#0d131f] p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-cyan-400">
              PROJECT_02
            </span>

            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-400">
              DevOps
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold">
            CI/CD Automation Pipeline
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Automated application deployment workflow using source
            control, Jenkins, Docker and deployment automation to
            improve release consistency.
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Jenkins",
              "Git",
              "Docker",
              "Ansible",
              "Linux",
              "CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Pipeline →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              GitHub →
            </a>
          </div>
        </div>
      </article>

      {/* Project 3 */}
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="border-b border-white/10 bg-[#0d131f] p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-cyan-400">
              PROJECT_03
            </span>

            <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs text-orange-400">
              Containers
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold">
            Dockerized Web Application
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Containerized web applications with Docker, focusing on
            reproducible environments, resource management and
            production deployment.
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Docker",
              "Docker Compose",
              "Node.js",
              "Next.js",
              "Linux",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-orange-400/10 px-3 py-1.5 text-xs text-orange-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Dockerfile →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              GitHub →
            </a>
          </div>
        </div>
      </article>

      {/* Project 4 */}
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="border-b border-white/10 bg-[#0d131f] p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-cyan-400">
              PROJECT_04
            </span>

            <span className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs text-red-400">
              Security
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold">
            Production Monitoring & Security
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Monitoring and security practices for Linux and cloud
            environments using system metrics, application logs,
            CloudWatch, access controls and SSL/TLS.
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "CloudWatch",
              "Linux",
              "AWS IAM",
              "Security Groups",
              "SSL/TLS",
              "Logs",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-red-400/10 px-3 py-1.5 text-xs text-red-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Monitoring →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              Details →
            </a>
          </div>
        </div>
      </article>

      </div>
  </div>
</section>{/* Architecture */}
<section
  id="architecture"
  className="border-t border-white/10 bg-[#0b0f18]"
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="mb-14">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        Architecture
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        How I think about infrastructure.
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        A high-level view of how a modern web application can be
        deployed, secured, monitored and maintained in AWS.
      </p>
    </div>

    {/* Architecture diagram */}
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#070a10] p-6 md:p-10">
      <div className="min-w-[700px]">

        {/* Internet */}
        <div className="mx-auto w-fit rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-8 py-4 text-center">
          <p className="font-mono text-xs text-cyan-400">01</p>
          <p className="mt-1 font-semibold">Internet / Users</p>
        </div>

        <div className="mx-auto h-10 w-px bg-white/20" />

        {/* Cloudflare */}
        <div className="mx-auto w-fit rounded-xl border border-orange-400/30 bg-orange-400/5 px-8 py-4 text-center">
          <p className="font-mono text-xs text-orange-400">02</p>
          <p className="mt-1 font-semibold">Cloudflare / DNS</p>
        </div>

        <div className="mx-auto h-10 w-px bg-white/20" />

        {/* AWS */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-gray-500">
            AWS Infrastructure
          </p>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-2xl">⚖️</p>
              <p className="mt-3 font-semibold">Load Balancer</p>
              <p className="mt-2 text-xs text-gray-500">
                Traffic distribution
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-2xl">🖥️</p>
              <p className="mt-3 font-semibold">EC2 / Containers</p>
              <p className="mt-2 text-xs text-gray-500">
                Application workloads
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <p className="text-2xl">🗄️</p>
              <p className="mt-3 font-semibold">Database</p>
              <p className="mt-2 text-xs text-gray-500">
                MongoDB / MySQL
              </p>
            </div>

          </div>
        </div>

        <div className="mx-auto h-10 w-px bg-white/20" />

        {/* Monitoring */}
        <div className="mx-auto max-w-xl rounded-xl border border-green-400/30 bg-green-400/5 p-5 text-center">
          <p className="text-2xl">📊</p>
          <p className="mt-2 font-semibold">Monitoring & Logging</p>
          <p className="mt-2 text-sm text-gray-500">
            CloudWatch • Application Logs • Linux Metrics
          </p>
        </div>

      </div>
    </div>

    {/* Architecture principles */}
    <div className="mt-8 grid gap-5 md:grid-cols-3">

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-cyan-400">01</p>
        <h3 className="mt-3 font-semibold">Security First</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          IAM, security groups, SSL/TLS and controlled network access.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-cyan-400">02</p>
        <h3 className="mt-3 font-semibold">Automation</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          CI/CD and infrastructure automation to reduce repetitive
          manual operations.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-cyan-400">03</p>
        <h3 className="mt-3 font-semibold">Observability</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Metrics, logs and alerts to identify and troubleshoot
          production issues.
        </p>
      </div>

    </div>
  </div>
</section>{/* Contact */}
<section
  id="contact"
  className="border-t border-white/10 bg-[#080b12]"
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
        Let&apos;s build something reliable.
      </h2>

      <p className="mt-6 leading-7 text-gray-400">
        I&apos;m open to DevOps, Cloud and Infrastructure opportunities.
        If you&apos;re looking for someone who enjoys automation,
        troubleshooting and production infrastructure, let&apos;s connect.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:kdiggi73@gmail.com"
          className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/kashi-diggi-/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub
        </a>
      </div>

      {/* Terminal contact card */}
      <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#05070b] text-left shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-gray-500">
            kashi@devops:~
          </span>
        </div>

        <div className="p-6 font-mono text-sm leading-8">
          <p>
            <span className="text-green-400">$</span>{" "}
            <span className="text-gray-300">whoami</span>
          </p>

          <p className="text-cyan-400">
            kashi-diggi / devops-engineer
          </p>

          <p className="mt-3">
            <span className="text-green-400">$</span>{" "}
            <span className="text-gray-300">status</span>
          </p>

          <p className="text-green-400">
            ● Open to opportunities
          </p>

          <p className="mt-3">
            <span className="text-green-400">$</span>{" "}
            <span className="text-gray-300">location</span>
          </p>

          <p className="text-gray-400">
            Bengaluru, India
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="border-t border-white/10 bg-[#05070b]">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row">
    <p>
      © {new Date().getFullYear()} Kashi Diggi. All rights reserved.
    </p>

    <p className="font-mono">
      Built with Next.js + Tailwind CSS
    </p>
  </div>
</footer>
    </main>
  );
}
