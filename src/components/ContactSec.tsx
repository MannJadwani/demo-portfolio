import { ArrowUpRight, Button, Prose, Reveal, Section, SectionHead, Tag } from './ui'

const painPoints = [
  '“We currently do this manually.”',
  '“This takes our team three days.”',
  '“We have all this data but can’t use it.”',
  '“We want to build this, but every agency says it’ll take three months.”',
  '“We know AI could help here. We just don’t know how.”',
]

export function WorkWithMe() {
  return (
    <Section id="work-with-me">
      <SectionHead
        index="14"
        label="Work with me"
        title="Have a difficult software problem? Good."
      />
      <Reveal className="mt-12">
        <p className="max-w-2xl text-lg text-zinc-400">
          The projects I find most interesting usually start with:
        </p>
        <div className="mt-6 max-w-2xl divide-y divide-zinc-800/80 rounded-2xl border border-zinc-800 bg-zinc-900/30">
          {painPoints.map((p) => (
            <p key={p} className="px-6 py-4 font-mono text-sm text-zinc-300">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-8">
        <Prose className="max-w-3xl">
          <p>
            Those are interesting problems. If you’re building something ambitious — or have a
            painfully inefficient workflow that should probably be software —{' '}
            <strong className="font-semibold text-white">I’d like to hear about it.</strong>
          </p>
        </Prose>
        <div className="mt-8">
          <Button href="#contact" arrow="down">
            Build something with me
          </Button>
        </div>
      </Reveal>
      <Reveal className="mt-12">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-6 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">NeuralARC</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">
            Need a team instead?
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I also run <strong className="font-semibold text-white">NeuralARC</strong>, where we
            design and build AI products, SaaS platforms, internal systems, and high-performance
            digital experiences for companies. Small team. High velocity. Very little bureaucracy.
          </p>
          <div className="mt-6">
            <Button href="#contact">Work with NeuralARC</Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

const topics = [
  'AI',
  'Software',
  'Products',
  'Startups',
  'Content',
  'Agents',
  'Interesting business problems',
  'Something that probably shouldn’t be possible yet',
]

// TODO: Replace placeholder handles + hrefs with real links.
const channels = [
  { label: 'Email', handle: '[your email]', href: '#' },
  { label: 'LinkedIn', handle: 'Mann Jadwani', href: '#' },
  { label: 'Instagram', handle: '[your instagram]', href: '#' },
  { label: 'YouTube', handle: '[your youtube]', href: '#' },
  { label: 'GitHub', handle: '[your github]', href: '#' },
]

export function ContactSec() {
  return (
    <Section id="contact">
      <SectionHead
        index="15"
        label="Contact"
        title="Internet strangers build companies together all the time."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg text-zinc-400">If you want to talk about:</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-8 max-w-md text-lg text-zinc-400">
            …or something that probably shouldn’t be possible yet. Reach out.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="divide-y divide-zinc-800/80 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center justify-between px-6 py-5 transition hover:bg-zinc-900/70"
              >
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {c.label}
                </span>
                <span className="flex items-center gap-2 text-sm text-zinc-200 transition group-hover:text-white">
                  {c.handle}
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition group-hover:text-accent" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Mann Jadwani<span className="text-accent">.</span>
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Builder · Founder · AI Engineer · Creator — Mumbai, India
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-zinc-400">
            Building things faster than they probably should be built.
          </p>
          <p className="mt-2 font-mono text-xs text-zinc-600">
            © {new Date().getFullYear()} Mann Jadwani · Built at unreasonable speed
          </p>
        </div>
      </div>
    </footer>
  )
}
