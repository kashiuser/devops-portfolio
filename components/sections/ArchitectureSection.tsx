
export default function ArchitectureSection() {
  return (
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
    </section>
  );
}
