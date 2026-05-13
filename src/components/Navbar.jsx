import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Eden
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg">

          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-8 py-6">

          <ul className="flex flex-col gap-6 text-lg">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar