import { Atom, FlaskConical, Microscope, Rocket, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Atom,
    title: 'Live Experiments',
    desc: 'Watch real-time demos in physics, chemistry, and biology with safety-first setups.',
  },
  {
    icon: Microscope,
    title: 'Lab Tours',
    desc: 'Guided walkthroughs of modern labs with hands-on micro sessions.',
  },
  {
    icon: Rocket,
    title: 'Innovation Expo',
    desc: 'Student-built projects featuring robotics, AI, and green tech initiatives.',
  },
  {
    icon: FlaskConical,
    title: 'Workshops',
    desc: 'Quick sessions to build, test, and take home science gizmos.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-grid-emerald/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-200">Event Highlights</h2>
          <p className="mt-3 text-emerald-100/70">A cyber-green lineup designed to spark curiosity.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="group rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 hover:bg-emerald-500/10 transition-colors">
              <div className="h-11 w-11 rounded-md border border-emerald-500/30 bg-black/60 grid place-items-center">
                <item.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-200">{item.title}</h3>
              <p className="mt-2 text-sm text-emerald-100/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-emerald-500/20 p-6 bg-gradient-to-tr from-emerald-500/10 to-transparent">
          <div className="flex items-start gap-4">
            <Sparkles className="h-6 w-6 text-emerald-400 mt-1" />
            <p className="text-emerald-100/80">
              Theme: Matrix-inspired. Dress code suggestions: green accents, neon lines, or circuit patterns. Best-dressed wins a prize!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
