import { Prose, Reveal, Section, SectionHead } from './ui'

export function Intro() {
  return (
    <Section id="intro">
      <SectionHead
        index="01"
        label="Intro"
        title="I like problems that should probably take a bigger team."
      />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            Most companies don’t have a technology problem. They have a{' '}
            <strong className="font-semibold text-white">
              workflow problem, speed problem, information problem, or execution problem
            </strong>{' '}
            — and software happens to be the best way to solve it. That’s the kind of work I enjoy.
          </p>
          <p>
            I’ve built AI products, internal systems, financial platforms, automation workflows,
            websites, agentic applications, and experimental software. Sometimes that means building
            a product from scratch. Sometimes it means taking a process that lives inside
            spreadsheets, emails, WhatsApp messages, and people’s heads — and turning it into
            software.
          </p>
        </Prose>
      </Reveal>
      <Reveal className="mt-10">
        <div className="max-w-3xl rounded-2xl border border-accent/25 bg-accent/5 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            My default question is simple
          </p>
          <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
            Can this be made faster, simpler, or automated entirely?
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

const proof = [
  { value: 'FOUNDER', label: 'NeuralARC' },
  { value: 'FORMER CTO', label: 'Fintech · Head of Tech' },
  { value: '80K+', label: 'Audience across my content ecosystem' },
  { value: 'AI-NATIVE', label: 'Software development' },
  { value: 'PRODUCTS > PRESENTATIONS', label: 'I prefer shipping' },
]

/** Full-bleed stat band between the intro and about sections. */
export function ProofStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-px border-y border-zinc-800 bg-zinc-800/70 md:grid-cols-5">
        {proof.map((s) => (
          <div key={s.value} className="bg-zinc-950 p-6 md:p-8">
            <p className="font-mono text-sm font-semibold tracking-wider text-white">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">{s.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export function About() {
  return (
    <Section id="about">
      <SectionHead index="02" label="About" title="Builder first." />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            I’m interested in technology because of what it allows one person or a small team to
            accomplish. I don’t particularly care whether the solution uses AI, a database, an
            agent, an API, a cron job, or fifty lines of boring backend code. I care whether it{' '}
            <strong className="font-semibold text-white">solves the problem</strong>.
          </p>
          <p>
            Over the last few years, I’ve worked across software engineering, AI systems, product
            development, fintech, automation, and content. That mix has shaped how I build.
          </p>
        </Prose>
      </Reveal>
      <Reveal className="mt-8">
        <p className="max-w-3xl font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
          I think like an engineer. I evaluate like a business owner.{' '}
          <span className="text-accent">And I ship like the deadline was yesterday.</span>
        </p>
      </Reveal>
    </Section>
  )
}
