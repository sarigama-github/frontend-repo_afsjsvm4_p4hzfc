import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.20),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.20),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-24 md:pt-44 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Isipathana College • Science Day 2025
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-200">
              Dive into the Matrix of Discovery
            </h1>
            <p className="mt-6 text-emerald-100/80 text-lg leading-relaxed">
              A futuristic celebration of innovation, experiments, and ideas. Step into a world of green code rain, cyber circuits, and mind-bending science.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#register" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors">
                Register Now
              </a>
              <a href="#highlights" className="inline-flex items-center justify-center rounded-md border border-emerald-400/40 bg-transparent px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/10 transition-colors">
                Explore Highlights
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
