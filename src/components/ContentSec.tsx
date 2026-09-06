import { Button, Prose, Reveal, Section, SectionHead } from './ui'

export function ContentSec() {
  return (
    <Section id="content">
      <SectionHead index="10" label="Content" title="I also talk about what I build." />
      <Reveal className="mt-12">
        <Prose className="max-w-3xl">
          <p>
            I create content around AI, software, technology, and the changing way products are
            built. My audience is primarily made up of people who want to understand what new
            technology actually allows them to do. Not just:
          </p>
        </Prose>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              Not just
            </p>
            <p className="mt-4 font-display text-xl font-semibold text-zinc-500 md:text-2xl">
              “Here’s a new AI tool.”
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-2xl border border-accent/40 bg-accent/5 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">But</p>
            <p className="mt-4 font-display text-xl font-semibold text-white md:text-2xl">
              “What becomes possible because this exists?”
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-8">
        <Prose className="max-w-3xl">
          <p>
            That might mean testing a new model. Reverse-engineering an AI product. Building
            something with an agent. Exploring a new interface. Or asking how someone could build a
            business around a new capability.
          </p>
        </Prose>
      </Reveal>
      <Reveal className="mt-10">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                100 Days of AI
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                One of my recurring content experiments — exploring tools, systems, workflows, and
                emerging capabilities across the AI ecosystem. The goal is simple:{' '}
                <strong className="font-semibold text-white">
                  make complicated technology understandable without making it boring.
                </strong>
              </p>
            </div>
            {/* TODO: point at the real content channel */}
            <Button href="#" variant="ghost" arrow="up">
              Watch my content
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

const questions = [
  'Can I build with it?',
  'Where does it fail?',
  'What changes because of it?',
  'Can a business be built around it?',
  'Does it actually save time?',
  'Is it infrastructure or just a feature?',
]

export function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHead
        index="11"
        label="Content philosophy"
        title="Build it. Break it. Then explain it."
        lead="There’s already enough AI commentary on the internet. I’m more interested in experimentation. When something interesting launches, I want to know:"
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {questions.map((q, i) => (
          <Reveal key={q} delay={i * 60} className="h-full">
            <div className="flex h-full items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <span className="font-mono text-xs text-accent">
                ?{String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-display text-lg font-semibold leading-snug text-white">{q}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
