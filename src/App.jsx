import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Schedule from './components/Schedule'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Schedule />
        <CTA />
      </main>
      <footer className="bg-black/95 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-emerald-100/60 text-sm">
            © {new Date().getFullYear()} Isipathana College • Science Day — Built with a Matrix-inspired vibe
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
