
export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 bg-[#0b0f18]">
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
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#0b0f18] bg-cyan-400 md:-left-[49px]" />

            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold">DevOps Engineer</h3>

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
    </section>
  );
}
