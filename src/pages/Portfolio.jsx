import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Work from '../sections/Work'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function Portfolio() {
  return (
    <div className="relative bg-white selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}
