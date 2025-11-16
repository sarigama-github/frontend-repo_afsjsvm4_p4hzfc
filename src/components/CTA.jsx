export default function CTA() {
  return (
    <section id="register" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-black to-black p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-200">Ready to enter the grid?</h2>
          <p className="mt-3 text-emerald-100/80 max-w-2xl">
            RSVP to secure your spot. Participants will receive the agenda, workshop access, and entry to giveaways.
          </p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Full name" className="w-full rounded-md border border-emerald-500/30 bg-black px-4 py-3 text-emerald-100 placeholder:text-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            <input type="email" placeholder="Email address" className="w-full rounded-md border border-emerald-500/30 bg-black px-4 py-3 text-emerald-100 placeholder:text-emerald-100/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            <button type="button" className="rounded-md bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition-colors">
              RSVP Free
            </button>
          </form>

          <p className="mt-4 text-xs text-emerald-100/60">No spam. We respect your inbox.</p>
        </div>
      </div>
    </section>
  )
}
