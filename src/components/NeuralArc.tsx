import { Button, Prose, Reveal, Section, SectionHead } from './ui'

const builds = [
  'AI products',
  'SaaS platforms',
  'Internal business software',
  'High-performance websites',
  'AI agents',
  'Workflow automation',
  'Dashboards',
  'Custom business systems',
  'AI infrastructure',
]

export function NeuralArc() {
  return (
    <Section id="neuralarc">
      <SectionHead
        index="03"
        label="NeuralARC"
        title="An AI-native software company built around speed."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <Prose>
            <p>
              I started NeuralARC around a simple observation:{' '}
              <strong className="font-semibold text-white">
                software development has changed, but most agencies still operate like it hasn’t.
              </strong>
            </p>
            <p>
              Traditional development often involves long handoffs between strategists, designers,
              developers, managers, testers, and clients. We try to compress that entire loop.
            </p>
            <p>
              At NeuralARC, we use AI-native development, tight product thinking, reusable
              infrastructure, and small technical teams to move from problem to prototype to product
              as quickly as possible.
            </p>
            <p>We don’t sell AI for the sake of AI. We build systems that create leverage.</p>
          </Prose>
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 font-mono text-xs uppercase tracking-widest text-zinc-400 md:text-sm">
            <span>Problem</span>
            <span className="text-accent">→</span>
            <span>Prototype</span>
            <span className="text-accent">→</span>
            <span className="text-white">Product</span>
          </div>
          <div className="mt-8">
            <Button href="#contact">Work with NeuralARC</Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              What we build
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {builds.map((b) => (
                <div
                  key={b}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

const steps = [
  {
    n: '01',
    title: 'Understand the real problem',
    text: 'Before writing software, figure out what actually needs to change.',
  },
  {
    n: '02',
    title: 'Build the smallest useful system',
    text: 'Avoid architecture designed for imaginary problems.',
  },
  {
    n: '03',
    title: 'Use AI aggressively',
    text: 'Research, architecture, development, debugging, testing, documentation, and iteration can all move faster.',
  },
  {
    n: '04',
    title: 'Keep decision-makers close to the code',
    text: 'Less translation. Fewer meetings. Faster feedback.',
  },
  {
    n: '05',
    title: 'Ship.',
    text: 'Software becomes valuable when someone starts using it.',
  },
]

export function HowIBuild() {
  return (
    <Section id="how">
      <SectionHead
        index="04"
        label="How I build"
        title="Speed is a technical advantage."
        lead="Moving fast does not mean blindly generating code. Real speed comes from reducing unnecessary complexity."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 60} className="h-full">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-zinc-600 md:p-8">
              <p className="font-mono text-xs text-accent">{s.n}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={300} className="h-full">
          <a
            href="#contact"
            className="flex h-full flex-col justify-between rounded-2xl border border-accent/30 bg-accent/5 p-6 transition hover:border-accent/60 md:p-8"
          >
            <div>
              <p className="font-mono text-xs text-accent">NEXT</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                Your problem here?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                The most interesting projects start with “we currently do this manually.”
              </p>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
              Build something with me →
            </p>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
