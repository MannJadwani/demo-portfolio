import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Intro, ProofStrip } from './components/IntroAbout'
import { HowIBuild, NeuralArc } from './components/NeuralArc'
import Work from './components/Work'
import { Ai, Fintech, Thesis } from './components/Thinking'
import Stack from './components/Stack'
import { ContentSec, Philosophy } from './components/ContentSec'
import { BuildingToward, Principles } from './components/BuildingToward'
import { ContactSec, Footer, WorkWithMe } from './components/ContactSec'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ProofStrip />
        <About />
        <NeuralArc />
        <HowIBuild />
        <Work />
        <Fintech />
        <Ai />
        <Thesis />
        <Stack />
        <ContentSec />
        <Philosophy />
        <Principles />
        <BuildingToward />
        <WorkWithMe />
        <ContactSec />
      </main>
      <Footer />
    </div>
  )
}
