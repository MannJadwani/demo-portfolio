import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#neuralarc', label: 'NeuralARC' },
  { href: '#work', label: 'Work' },
  { href: '#ai', label: 'AI' },
  { href: '#content', label: 'Content' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-zinc-800/80 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
          MJ<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-950 transition hover:bg-amber-300"
          >
            Build with me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-2xl text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? '×' : '≡'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800/80 bg-ink/95 px-6 py-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm uppercase tracking-widest text-zinc-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-accent px-4 py-3 text-center font-mono text-sm font-semibold uppercase tracking-widest text-zinc-950"
          >
            Build with me
          </a>
        </div>
      )}
    </header>
  )
}
