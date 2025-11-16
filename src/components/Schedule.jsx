export default function Schedule() {
  const schedule = [
    { time: '08:30', title: 'Opening Ceremony', note: 'Welcome and theme reveal' },
    { time: '09:00', title: 'Keynote: Future of Green Tech', note: 'Guest scientist' },
    { time: '10:00', title: 'Lab Tracks Begin', note: 'Physics • Chemistry • Biology' },
    { time: '12:30', title: 'Break', note: 'Snacks & Club booths' },
    { time: '13:30', title: 'Workshops', note: 'Robotics • Coding • Astronomy' },
    { time: '15:30', title: 'Project Expo & Judging', note: 'Innovation showcase' },
    { time: '17:00', title: 'Awards & Closing', note: 'Raffles and best-dressed' },
  ]

  return (
    <section id="schedule" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-200">Schedule</h2>
          <p className="mt-3 text-emerald-100/70">Plan your day in the grid.</p>
        </div>

        <ol className="mt-10 space-y-4">
          {schedule.map((item, idx) => (
            <li key={idx} className="grid grid-cols-12 items-start gap-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
              <span className="col-span-3 md:col-span-2 text-emerald-400 font-mono text-sm">{item.time}</span>
              <div className="col-span-9 md:col-span-10">
                <p className="text-emerald-200 font-semibold">{item.title}</p>
                <p className="text-emerald-100/70 text-sm">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
