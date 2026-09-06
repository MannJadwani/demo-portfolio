import { useEffect, useRef, type ReactNode } from 'react'

/** Scroll-reveal wrapper: fades content in the first time it enters the viewport. */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            io.disconnect()
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHead({
  index,
  label,
  title,
  lead,
}: {
  index: string
  label: string
  title: ReactNode
  lead?: ReactNode
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {index} <span className="text-zinc-600">/</span> {label}
      </p>
      <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">{lead}</p>
      ) : null}
    </Reveal>
  )
}

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg ${className}`}>
      {children}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-zinc-300">
      {children}
    </span>
  )
}

export function ArrowUpRight({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowDown({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}

export function Button({
  href,
  variant = 'primary',
  arrow = 'none',
  children,
  className = '',
}: {
  href: string
  variant?: 'primary' | 'ghost'
  arrow?: 'up' | 'down' | 'none'
  children: ReactNode
  className?: string
}) {
  const styles =
    variant === 'primary'
      ? 'bg-accent text-zinc-950 hover:bg-amber-300'
      : 'border border-zinc-700 text-zinc-200 hover:border-accent/70 hover:text-white'
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
      {arrow === 'up' && <ArrowUpRight />}
      {arrow === 'down' && <ArrowDown />}
    </a>
  )
}
