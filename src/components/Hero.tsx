import { Button, Reveal } from './ui'

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            {'//'} Mann Jadwani
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
            I build software at <span className="text-accent">unreasonable speed</span>.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            AI builder, founder, creator, and former fintech CTO. I build AI systems, software
            products, and digital experiences that turn complicated business problems into things
            people can actually use.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 md:text-sm">
            Founder, NeuralARC <span className="text-accent">·</span> Former Fintech CTO{' '}
            <span className="text-accent">·</span> AI Creator <span className="text-accent">·</span>{' '}
            Product Builder
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact" arrow="down">
              Build something with me
            </Button>
            <Button href="#work" variant="ghost" arrow="down">
              Explore my work
            </Button>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Scroll
        </span>
        <span className="scroll-cue block h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </div>
  )
}
