
const projects = [
  {
    id: "PROJECT_01",
    title: "AWS Production Infrastructure",
    status: "Production",
    color: "green",
    description:
      "Production infrastructure for web applications using AWS services, Linux servers, reverse proxies, monitoring and application deployment workflows.",
    technologies: [
      "AWS EC2", "VPC", "IAM", "Load Balancer",
      "CloudWatch", "NGINX", "Linux",
    ],
    details: ["Architecture →", "Case Study →"],
  },
  {
    id: "PROJECT_02",
    title: "CI/CD Automation Pipeline",
    status: "DevOps",
    color: "purple",
    description:
      "Automated application deployment workflow using source control, Jenkins, Docker and deployment automation to improve release consistency.",
    technologies: [
      "Jenkins", "Git", "Docker", "Ansible", "Linux", "CI/CD",
    ],
    details: ["Pipeline →", "GitHub →"],
  },
  {
    id: "PROJECT_03",
    title: "Dockerized Web Application",
    status: "Containers",
    color: "orange",
    description:
      "Containerized web applications with Docker, focusing on reproducible environments, resource management and production deployment.",
    technologies: [
      "Docker", "Docker Compose", "Node.js", "Next.js", "Linux",
    ],
    details: ["Dockerfile →", "GitHub →"],
  },
  {
    id: "PROJECT_04",
    title: "Production Monitoring & Security",
    status: "Security",
    color: "red",
    description:
      "Monitoring and security practices for Linux and cloud environments using system metrics, application logs, CloudWatch, access controls and SSL/TLS.",
    technologies: [
      "CloudWatch", "Linux", "AWS IAM", "Security Groups", "SSL/TLS", "Logs",
    ],
    details: ["Monitoring →", "Details →"],
  },
  {
    id: "PROJECT_05",
    title: "Grafana Observability Stack",
    status: "Monitoring",
    color: "cyan",
    description:
      "Monitoring and centralized logging using Prometheus, Grafana and Loki. Collecting Linux system metrics, visualizing infrastructure performance and querying application logs.",
    technologies: [
      "Grafana", "Prometheus", "Loki", "Promtail",
      "Node Exporter", "Docker", "Linux",
    ],
    details: ["Monitoring Stack →", "Implementation →"],
  },
  {
    id: "PROJECT_06",
    title: "Vijayavani – Production Troubleshooting",
    status: "Case Study",
    color: "green",
    description:
      "Investigated a production logging issue where PM2 logs were missing from Loki. Identified a mismatch between the PM2 log directory and the Docker volume mount, corrected the mapping and verified log visibility.",
    technologies: [
      "Linux", "PM2", "Docker", "Loki", "Promtail",
      "Grafana", "Log Troubleshooting",
    ],
    details: ["Root Cause →", "Resolution →"],
  },
];

const colorStyles: Record<string, string> = {
  green: "border-green-400/20 bg-green-400/10 text-green-400",
  purple: "border-purple-400/20 bg-purple-400/10 text-purple-400",
  orange: "border-orange-400/20 bg-orange-400/10 text-orange-400",
  red: "border-red-400/20 bg-red-400/10 text-red-400",
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-400",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-white/10 bg-[#080b12]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects & Production Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things I&apos;ve built & solved.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Hands-on infrastructure, automation, observability and real-world
            production troubleshooting focused on reliability, scalability and security.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="border-b border-white/10 bg-[#0d131f] p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-cyan-400">
                    {project.id}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      colorStyles[project.color]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="p-6">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.details.map((detail) => (
                    <span
                      key={detail}
                      className="cursor-default text-sm font-medium text-gray-400 transition group-hover:text-white"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}