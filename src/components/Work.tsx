import { type ReactNode } from 'react'
import { ArrowUpRight, Reveal, Section, SectionHead, Tag } from './ui'

type ProjectProps = {
  index: string
  name: string
  tagline: string
  link?: { label: string; href: string }
  focus?: string[]
  children: ReactNode
}

function Project({ index, name, tagline, link, focus, children }: ProjectProps) {
  return (
    <Reveal>
      <article className="grid gap-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-zinc-600 md:p-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="font-mono text-xs text-accent">{index}</p>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
            {name}
          </h3>
          <p className="mt-3 text-lg leading-snug text-zinc-300">{tagline}</p>
          {link && (
            <a
              href={link.href}
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent transition hover:text-amber-300"
            >
              {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <div>
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">{children}</div>
          {focus && (
            <div className="mt-6 flex flex-wrap gap-2">
              {focus.map((f) => (
                <Tag key={f}>{f}</Tag>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

function Fragments({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-zinc-800 pl-4 font-mono text-sm leading-relaxed text-zinc-500">
      {children}
    </p>
  )
}

export default function Work() {
  return (
    <Section id="work">
      <SectionHead
        index="05"
        label="Selected work"
        title={
          <>
            Things I’ve built, explored,
            <br className="hidden md:block" /> or helped create.
          </>
        }
      />
      <div className="mt-12 space-y-5">
        <Project
          index="P.01"
          name="DoZero"
          tagline="What if one person could operate an entire company with AI?"
          link={{ label: 'Explore DoZero', href: '#' }}
          focus={[
            'Agent orchestration',
            'Tool use',
            'Memory',
            'Browser execution',
            'Research systems',
            'Software development agents',
            'Task planning',
            'Multi-agent workflows',
          ]}
        >
          <p>
            DoZero explores the idea of a <strong className="font-semibold text-white">one-person company operating system</strong>.
            Instead of AI simply answering questions, the system is designed around AI agents that
            can participate in actual execution.
          </p>
          <Fragments>
            Research. Planning. Writing. Development. Operations. Launching. Iteration.
          </Fragments>
          <p>
            The interesting problem isn’t generating text. It’s building infrastructure that allows
            agents to{' '}
            <strong className="font-semibold text-white">
              understand objectives, access tools, retain context, make decisions, and execute work
            </strong>
            .
          </p>
        </Project>

        <Project
          index="P.02"
          name="AccessAllGPT"
          tagline="Multiple AI models. One interface."
          link={{ label: 'Explore AccessAllGPT', href: '#' }}
          focus={[
            'Multi-model architecture',
            'AI infrastructure',
            'Usage management',
            'Model economics',
            'Product UX',
            'Scalable backend systems',
          ]}
        >
          <p>
            AccessAllGPT was built around a simple idea: users shouldn’t have to maintain
            subscriptions and workflows across a dozen different AI platforms. The product explored
            a unified interface for accessing multiple leading language models.
          </p>
          <p>
            But the more interesting engineering challenge sits underneath the chat box:{' '}
            <strong className="font-semibold text-white">model routing, usage economics, rate limits, caching, infrastructure</strong>,
            subscription design, model availability, cost per request.
          </p>
          <p>
            Scaling a multi-model platform requires thinking about AI as infrastructure, not simply
            as an API.
          </p>
        </Project>

        <Project
          index="P.03"
          name="AI Full-Stack Builder"
          tagline="Software that builds software."
          link={{ label: 'Explore the builder', href: '#' }}
          focus={[
            'Next.js',
            'Node.js',
            'Agent tool systems',
            'MCP',
            'File manipulation',
            'Terminal execution',
            'Containers',
            'AI coding interfaces',
            'Database generation',
            'Deployment workflows',
          ]}
        >
          <p>
            One of the areas I’m most interested in is AI-native development environments. Not AI
            that merely generates a code snippet —{' '}
            <strong className="font-semibold text-white">
              AI that can actually work inside a software project
            </strong>
            .
          </p>
          <Fragments>
            Read files. Create files. Modify code. Run commands. Understand documentation. Interact
            with databases. Debug errors. Build interfaces. Deploy applications.
          </Fragments>
          <p>
            The long-term idea is simple:{' '}
            <strong className="font-semibold text-white">
              describe what you want to build, and give the AI enough tools to actually build it.
            </strong>
          </p>
        </Project>

        <Project
          index="P.04"
          name="Equivision"
          tagline="Making financial research easier to navigate."
          link={{ label: 'Explore Equivision', href: '#' }}
          focus={[
            'IPO databases',
            'SME research',
            'Financial data extraction',
            'AI-assisted analysis',
            'Research dashboards',
            'Structured financial workflows',
          ]}
        >
          <p>
            Equivision explores how software and AI can improve investment and equity research.
            Financial information is often fragmented across reports, filings, websites,
            spreadsheets, and databases.
          </p>
          <p>
            The opportunity is not simply summarizing that information. It is{' '}
            <strong className="font-semibold text-white">
              structuring it. Extracting it. Comparing it.
            </strong>{' '}
            And presenting it in a form that makes decision-making faster.
          </p>
        </Project>

        <Project index="P.05" name="DebtCircle" tagline="Building technology around financial operations.">
          <p>
            During my time working in fintech, I worked on technology designed around real financial
            workflows rather than isolated software features — taking processes involving documents,
            compliance, data, approvals, reporting, and manual coordination and turning them into
            structured systems.
          </p>
          <p>
            My role extended across technology architecture, product development, internal tooling,
            automation, and AI adoption. That experience heavily influenced the way I think about
            software today.
          </p>
          <p className="border-l-2 border-accent pl-4 font-display text-lg font-semibold leading-snug text-white md:text-xl">
            Technology should not sit next to the business. It should become part of how the
            business operates.
          </p>
        </Project>
      </div>
    </Section>
  )
}
