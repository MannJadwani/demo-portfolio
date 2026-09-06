import { Prose, Reveal, Section, SectionHead, Tag } from './ui'

const principles = [
  {
    title: 'Solve the actual problem.',
    text: 'The client rarely needs what they initially ask for. Understand why they are asking.',
  },
  {
    title: 'Simple beats impressive.',
    text: 'Complex architecture does not automatically mean good architecture.',
  },
  {
    title: 'AI should create leverage.',
    text: 'Adding a chatbot to something does not make it an AI product.',
  },
  {
    title: 'Distribution matters.',
    text: 'A great product nobody knows about is still a failed product.',
  },
  {
    title: 'Ship before you’re comfortable.',
    text: 'You learn more from users interacting with imperfect software than from another week of internal discussion.',
  },
  {
    title: 'Architecture should earn its complexity.',
    text: 'Don’t build infrastructure for millions of users when you have twelve.',
  },
]

export function Principles() {
  return (
    <Section id="principles">
      <SectionHead index="12" label="Principles" title="A few rules I build by." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 60} className="h-full">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-zinc-600 md:p-8">
              <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const interests = [
  'Agent operating systems',
  'AI-native company infrastructure',
  'Autonomous software development',
  'AI interfaces',
  'Foundation models',
  'Human + AI workflows',
  'One-person companies',
  'Systems that dramatically increase individual leverage',
]

export function BuildingToward() {
  return (
    <Section id="toward">
      <SectionHead
        index="13"
        label="What I’m building toward"
        title="Bigger than software projects."
      />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            Long term, I want to build AI-native companies and infrastructure from India that
            compete globally. I’m particularly interested in:
          </p>
        </Prose>
        <div className="mt-6 flex flex-wrap gap-2">
          {interests.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-14">
        <div className="border-t border-zinc-800 pt-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            The direction behind almost everything I build
          </p>
          <p className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
            Reduce the distance between <span className="text-accent">an idea</span> and{' '}
            <span className="text-accent">execution</span>.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
