
export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-[#080b12]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-bold tracking-wide">
          KASHI<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-cyan-400">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
          <a href="#architecture" className="transition hover:text-cyan-400">
            Architecture
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
