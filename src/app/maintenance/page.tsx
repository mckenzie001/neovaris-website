export default function MaintenanceLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Website update in progress
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Neovaris Technologies</p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Welcome to our digital home.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Our official website is currently being crafted to better showcase our work,
              services, and vision. We&apos;re polishing a few things behind the scenes and will
              be live soon.
            </p>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">What to expect</p>
                <p className="mt-2 text-white/90">Modern solutions, creative execution, and reliable tech services.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Current status</p>
                <p className="mt-2 text-white/90">Under maintenance and development.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Launch note</p>
                <p className="mt-2 text-white/90">A stronger online experience is on the way.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <a
                href="mailto:hello@neovaristechnologies.com"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Contact Us
              </a>
              <a target="_blank"
                href="https://x.com/neovaris_tech?s=21"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Follow for updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
