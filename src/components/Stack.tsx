import { Reveal, Section, SectionHead } from './ui'

const columns = [
  {
    label: 'Product',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Supabase',
      'APIs',
      'Serverless architecture',
    ],
  },
  {
    label: 'AI',
    items: [
      'LLM applications',
      'Agent architecture',
      'RAG',
      'Vector search',
      'Tool use',
      'MCP',
      'Computer-use agents',
      'Multi-model systems',
      'AI workflows',
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      'Docker',
      'Containers',
      'Cloud infrastructure',
      'Caching',
      'Deployment systems',
      'Database architecture',
      'Scalable backend systems',
    ],
  },
]

export default function Stack() {
  return (
    <Section id="tech">
      <SectionHead index="09" label="Tech" title="Things I like working with." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {columns.map((col, ci) => (
          <Reveal key={col.label} delay={ci * 80} className="h-full">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {col.label}
              </p>
              <ul className="mt-6">
                {col.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-zinc-800/70 py-3 text-sm text-zinc-300 last:border-0"
                  >
                    <span className="font-mono text-[10px] text-zinc-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <p className="text-center text-lg text-zinc-400">
          Technology changes constantly. The important skill is understanding{' '}
          <strong className="font-semibold text-white">how the pieces fit together</strong>.
        </p>
      </Reveal>
    </Section>
  )
}
