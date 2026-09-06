import { Prose, Reveal, Section, SectionHead, Tag } from './ui'

const considerations = [
  'Cost',
  'Risk',
  'Operations',
  'People',
  'Infrastructure',
  'Security',
  'Speed',
  'Maintenance',
  'Revenue',
]

export function Fintech() {
  return (
    <Section id="fintech">
      <SectionHead index="06" label="Fintech" title="From developer to technology leadership." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              When you’re only responsible for code
            </p>
            <p className="mt-4 font-display text-2xl font-semibold text-zinc-300">
              “How should we build this?”
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-2xl border border-accent/40 bg-accent/5 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              When you’re responsible for technology
            </p>
            <p className="mt-4 font-display text-2xl font-semibold text-white">
              “Should we build this at all?”
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-10">
        <Prose className="max-w-3xl">
          <p>
            Working as a CTO / Head of Tech in fintech changed the way I approached engineering. You
            begin thinking about:
          </p>
        </Prose>
        <div className="mt-5 flex flex-wrap gap-2">
          {considerations.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
        <Prose className="mt-8 max-w-3xl">
          <p>
            …and whether software actually improves the underlying business. That mindset stayed
            with me. Today, I rarely look at a product as just an interface.{' '}
            <strong className="font-semibold text-white">I look at the system behind it.</strong>
          </p>
        </Prose>
      </Reveal>
    </Section>
  )
}

const capabilities = [
  'Use tools',
  'Browse',
  'Write code',
  'Read company data',
  'Operate interfaces',
  'Coordinate with other agents',
  'Maintain memory',
  'Execute workflows',
]

export function Ai() {
  return (
    <Section id="ai">
      <SectionHead index="07" label="AI" title="I’m interested in AI after the chatbot." />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            Most people currently experience AI through a text box. I think that’s temporary. The
            more interesting future is AI that can interact with software.
          </p>
        </Prose>
        <div className="mt-5 flex flex-wrap gap-2">
          {capabilities.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
        <Prose className="mt-8 max-w-3xl">
          <p>
            That changes AI from something you{' '}
            <strong className="font-semibold text-white">talk to</strong> into something you{' '}
            <strong className="font-semibold text-accent">work with</strong>. And eventually,
            something that can perform meaningful parts of a company’s operations.
          </p>
          <p>That is the area I spend most of my time exploring.</p>
        </Prose>
      </Reveal>
    </Section>
  )
}

export function Thesis() {
  return (
    <Section id="thesis">
      <SectionHead index="08" label="AI thesis" title="AI will change company architecture." />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            Software today is built around organizations designed for humans. Departments.
            Meetings. Dashboards. Emails. Approval chains. Reporting structures. These systems
            exist partly because humans have limited attention, memory, communication bandwidth,
            and working hours.
          </p>
          <p>
            AI agents have different constraints. They can consume enormous amounts of information,
            operate continuously, interact directly with software, share structured context, execute
            tasks, and potentially coordinate in ways humans never could.
          </p>
          <p>So I don’t think the biggest AI opportunity is the first one. I think it is the second:</p>
        </Prose>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">Not this</p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-zinc-500 md:text-2xl">
              “Add an AI feature to existing software.”
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-2xl border border-accent/40 bg-accent/5 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">This</p>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
              “Redesign the system assuming intelligence is native to it.”
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
