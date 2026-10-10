import { useState, type PointerEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, BookOpen, Check, Mail, Menu, X } from 'lucide-react'
import { achievementExhibits, leadershipEducation, profiles, projects, skillGroups } from './content'
import { ProjectPresentation } from './ProjectPresentations'
import { projectPresentationMotion } from './projectPresentationMotion'
import './App.css'

const navItems = [
  { id: 'work', label: 'Work' }, { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Achievements' }, { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Aniket Kodgirwar, home"><span className="brand-mark" aria-hidden="true"/><span>ANIKET KODGIRWAR<small>COMPUTER SCIENCE · PUNE</small></span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">{navItems.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <a className="header-contact" href={`mailto:${profiles.email}`}>LET'S TALK <ArrowUpRight size={14} /></a>
  </header>
}

function JournalDrawing() {
  return <svg className="journal-drawing" viewBox="0 0 360 220" role="img" aria-label="Blue ink sketch connecting a signal to an action">
    <path className="draw-path" d="M34 112h67m0 0 43-53m-43 53 43 53m0-106h62m-62 106h62m0-106 50 53m-50 53 50-53h75" />
    <path className="draw-path draw-path-light" d="M36 124h39m107-77h45m-45 139h44m50-73h62" />
    <circle cx="32" cy="112" r="8"/><circle cx="101" cy="112" r="8"/><circle cx="144" cy="59" r="8"/><circle cx="144" cy="165" r="8"/><circle cx="206" cy="59" r="8"/><circle cx="206" cy="165" r="8"/><circle cx="256" cy="112" r="10"/><circle cx="331" cy="112" r="8"/>
    <path className="draw-loop" d="M180 76c20 0 36 16 36 36s-16 36-36 36-36-16-36-36 16-36 36-36Z" />
    <text x="18" y="91">SIGNAL</text><text x="130" y="32">MODEL</text><text x="231" y="83">DECISION</text><text x="292" y="145">ACTION</text><text x="162" y="120" className="loop-label">OBSERVE</text>
  </svg>
}

function JournalHero() {
  const reduced = useReducedMotion()
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced || event.pointerType !== 'mouse' || innerWidth < 900) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    event.currentTarget.style.setProperty('--tilt-x', `${(x * 1.2).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${(-y * .9).toFixed(2)}deg`)
  }
  const resetPointer = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }
  return <section className="hero" id="top" aria-labelledby="hero-title" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
    <div className="desk-grain" aria-hidden="true" />
    <div className="hero-topline"><span>FIELD JOURNAL <i>NO. 01</i></span><span>MIT-WPU · PUNE, INDIA</span></div>
    <motion.div className="open-journal" initial={reduced ? false : { opacity: 0, y: 25, scale: .99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : .8, ease: [.2,.7,.2,1] }}>
      <div className="page-stack" aria-hidden="true" /><div className="journal-spine" aria-hidden="true" />
      <article className="journal-page journal-page-left">
        <div className="page-meta"><span>01 — INTRODUCTION</span><span>AK / 2026</span></div>
        <div className="hero-copy">
          <p className="ink-label">NOTES FROM A CURIOUS BUILDER</p>
          <h1 id="hero-title"><span className="headline-mask"><motion.span initial={reduced ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ duration: reduced ? 0 : .72, delay: reduced ? 0 : .18, ease: [.2,.75,.25,1] }}>Aniket</motion.span></span><span className="headline-mask"><motion.span className="hero-name-accent" initial={reduced ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ duration: reduced ? 0 : .76, delay: reduced ? 0 : .28, ease: [.2,.75,.25,1] }}>Kodgirwar</motion.span></span></h1>
          <h2 className="hero-subheading">Building things worth writing about.</h2>
          <motion.p className="hero-intro" initial={reduced ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .4, delay: reduced ? 0 : .52 }}>I'm Aniket — a computer science student exploring cybersecurity, intelligent systems, and the curious space between them.</motion.p>
          <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .36, delay: reduced ? 0 : .68 }}><a className="button-primary" href="#work">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#about">A little about me <ArrowDown size={14} /></a></motion.div>
        </div>
        <div className="margin-note">build · test · understand</div><div className="page-number">01</div>
      </article>
      <article className="journal-page journal-page-right" aria-label="Journal sketch and working principles">
        <div className="page-meta"><span>WORKING MODEL</span><span>FIG. A</span></div>
        <div className="diagram-paper"><JournalDrawing /><span className="diagram-caption">A rough map of how I like to work</span></div>
        <div className="pinned-note"><span className="pin" aria-hidden="true"/><span className="ink-label">CURRENT CURIOSITIES</span><p>Security tools<br />Agentic systems<br />Developer experience</p><span className="hand-note">follow the questions ↗</span></div>
        <div className="paperclip" aria-hidden="true"/><div className="page-number">02</div>
      </article>
    </motion.div>
    <div className="hero-foot"><span><BookOpen size={13} /> A living record of projects, experiments & ideas</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
  </section>
}

function SectionHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>
}

function ProjectArchive() {
  const [active, setActive] = useState(projects[0].name)
  const [expanded, setExpanded] = useState<string | null>(null)
  const reduced = useReducedMotion()
  const selected = projects.find(project => project.name === active) ?? projects[0]
  const caseProject = projects.find(project => project.name === expanded) ?? selected
  const presentationMotion = projectPresentationMotion[selected.name]
  return <section className="section work-section" id="work">
    <div className="section-wrap"><SectionHeading label="01 / SELECTED WORK" title="Projects, in progress." intro="A small archive of systems and tools I've been building, from security experiments to practical developer tooling." />
      <div className="project-archive">
        <div className="project-list" role="list" aria-label="Project archive">{projects.map((project, i) => {
          const isActive = project.name === active
          const isExpanded = expanded === project.name
          return <article className={`project-row${isActive ? ' active' : ''}${isExpanded ? ' expanded' : ''}`} key={project.name} role="listitem">
            <button className="project-trigger" aria-expanded={isExpanded} aria-controls={isExpanded ? 'project-case-study' : undefined} onPointerEnter={() => setActive(project.name)} onFocus={() => setActive(project.name)} onClick={() => { setActive(project.name); setExpanded(isExpanded ? null : project.name) }}>
              <span className="project-number">0{i + 1}</span><span className="project-title-block"><span className="eyebrow">{project.discipline}</span><strong>{project.name}</strong><span className="project-subtitle">{project.title}</span></span><span className="project-summary">{project.description}</span><motion.span className="project-arrow" aria-hidden="true" animate={{ x: isActive ? 3 : 0, rotate: isExpanded ? 45 : 0 }} transition={{ duration: reduced ? 0 : .22 }}><ArrowDownRight size={20} /></motion.span>
            </button>
          </article>
        })}</div>
        <div className="project-preview" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.div className="preview-inner" key={selected.name} initial={reduced ? false : presentationMotion.initial} animate={{ opacity: 1, x: 0, y: 0, scale: 1, clipPath: 'inset(0 0 0)' }} exit={reduced ? undefined : presentationMotion.exit} transition={{ duration: reduced ? 0 : .28 }}>
          <div className="preview-label"><span>{selected.discipline}</span><span>0{projects.indexOf(selected) + 1}</span></div><ProjectPresentation project={selected} /><div className="preview-caption"><strong>{selected.name}</strong><span>{selected.title}</span></div>
        </motion.div></AnimatePresence></div>
      </div>
      <p className="archive-note">Focus or select an entry to explore its project presentation. Select again to open the full case note.</p>
      <AnimatePresence initial={false}>{expanded && <motion.div id="project-case-study" className="case-study" key={expanded} initial={reduced ? false : { opacity: 0, y: 10, clipPath: 'inset(4% 0 0)' }} animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0)' }} exit={{ opacity: 0, y: -5 }} transition={{ duration: reduced ? 0 : .3 }}>
        <div className="case-study-heading"><button className="case-return" onClick={() => setExpanded(null)}><X size={13} /> CLOSE CASE NOTE</button><p className="eyebrow">FIELD CASE / {caseProject.discipline}</p><h3>{caseProject.name === 'CONTAINERCRAFT' ? 'CONTAINER CRAFT' : caseProject.name}<span>{caseProject.title}</span></h3><p>{caseProject.description}</p></div>
        <div className={`case-study-visual case-visual-${caseProject.name.toLowerCase()}`}><ProjectPresentation project={caseProject} /></div>
        <div className="case-study-columns"><div><p className="eyebrow">BUILD NOTES</p><ul>{caseProject.notes.map(note => <li key={note}>{note}</li>)}</ul></div><div><p className="eyebrow">TOOLS & TECHNOLOGIES</p><div className="tag-list">{caseProject.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{caseProject.repository && <a href={caseProject.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={14} /></a>}{caseProject.demo && <a href={caseProject.demo} target="_blank" rel="noreferrer">Demo <ArrowUpRight size={14} /></a>}{caseProject.documentation && <a href={caseProject.documentation} target="_blank" rel="noreferrer">Documentation <ArrowUpRight size={14} /></a>}{caseProject.submission && <a href={caseProject.submission} target="_blank" rel="noreferrer">FOSS Hack submission <ArrowUpRight size={14} /></a>}</div></div></div>
        <p className="case-caption">Project details reflect the verified material currently available.</p>
      </motion.div>}</AnimatePresence>
    </div>
  </section>
}

function Skills() {
  const reduced = useReducedMotion()
  return <section className="section skills-section" id="skills"><div className="section-wrap"><SectionHeading label="02 / TOOLKIT" title="Things I reach for." intro="A practical set of languages, frameworks, and disciplines that keep changing as I build." /><motion.div className="skills-grid" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduced ? 0 : .45 }}>{skillGroups.map((group, i) => <article className="skill-group" key={group.name}><span className="eyebrow">0{i + 1} / {group.name}</span><p>{group.items.map((item, j) => <span key={item}>{item}{j < group.items.length - 1 && <i> · </i>}</span>)}</p></article>)}</motion.div></div></section>
}

function AchievementsExperience() {
  const reduced = useReducedMotion()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = achievementExhibits.find(item => item.id === selectedId)
  return <section className="section gallery-section" id="experience"><div className="gallery-wrap">
    <div className="gallery-heading"><SectionHeading label="03 / ACHIEVEMENTS" title="A record of progress." intro="Five milestones across competition and technical practice."/><p className="gallery-instruction">SELECT A MILESTONE <span>&#8599;</span></p></div>
    <ol className="achievement-record-list" aria-label="Verified achievements">
      {achievementExhibits.map((exhibit, index) => {
        const isSelected = selectedId === exhibit.id
        return <li className={`achievement-record${isSelected ? ' is-selected' : ''}`} key={exhibit.id}>
          <button className="achievement-record-button" type="button" aria-expanded={isSelected} aria-controls={isSelected ? 'achievement-detail' : undefined} onClick={() => setSelectedId(isSelected ? null : exhibit.id)}>
            <span className="achievement-record-index">0{index + 1}</span>
            <span className="achievement-record-main"><span className="achievement-record-category">{exhibit.category}{exhibit.date && <i> · {exhibit.date}</i>}</span><strong>{exhibit.title}</strong><span className="achievement-record-caption">{exhibit.caption}</span></span>
            <span className="achievement-record-arrow" aria-hidden="true">{isSelected ? '−' : '+'}</span>
          </button>
        </li>
      })}
    </ol>
    <AnimatePresence initial={false}>{selected && <motion.aside id="achievement-detail" className="achievement-detail" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reduced ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : .24 }} aria-live="polite">
      <div><p className="eyebrow">MILESTONE NOTE / {selected.category}</p><h3>{selected.title}<span>{selected.caption}</span></h3></div><p>{selected.detail}</p>{selected.id === 'leetcode' && <a href={profiles.leetcode} target="_blank" rel="noreferrer">View LeetCode profile <ArrowUpRight size={14}/></a>}<button className="achievement-detail-close" type="button" onClick={() => setSelectedId(null)} aria-label="Close milestone details"><X size={16}/></button>
    </motion.aside>}</AnimatePresence>
    <div className="achievement-context" aria-labelledby="achievement-context-title">
      <div className="achievement-context-heading"><p className="eyebrow">ALSO PART OF THE JOURNEY</p><h3 id="achievement-context-title">Leadership &amp; education</h3></div>
      {leadershipEducation.map(item => <article className="achievement-context-item" key={item.id}><span>{item.label}</span><h4>{item.title}</h4><p>{item.description}</p></article>)}
    </div>
  </div></section>
}
function About() {
  return <section className="section about-section" id="about">
    <div className="section-wrap about-grid"><SectionHeading label="04 / ABOUT ANIKET" title="Curiosity, with a practical streak." /><div className="about-copy"><p className="about-lead">I'm a Computer Science Engineering student at MIT-WPU in Pune, drawn to cybersecurity, agentic AI, and the systems people rely on.</p><p>I like turning questions into working software, and learning from the details that surface along the way.</p>
      <article className="about-writing" aria-labelledby="life-poem-title">
        <p className="eyebrow">IN THE MARGINS</p><h3 id="life-poem-title">Life</h3>
        <div className="poem-lines"><p>An open canvas soon to be filled up with memories</p><p>waiting for the stories to make it interesting</p><p>Warm like the sunshine, soothing as the rain</p><p>Chaotic as the storm, calm as the sea</p><p>Life is mysterious but a journey full of stories</p></div>
      </article>
      <div className="about-signature">Aniket <span>— learning by making</span></div></div></div>
  </section>
}

function Contact() {
  const reduced = useReducedMotion()
  return <section className="contact-section" id="contact"><div className="contact-desk" aria-hidden="true" />
    <motion.div className="contact-paper" initial={reduced ? false : { opacity: 0, y: 18, rotate: .6 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: reduced ? 0 : .48, ease: [.2,.7,.2,1] }}>
      <div className="contact-paperclip" aria-hidden="true"/><div className="contact-content"><p className="eyebrow">THE NEXT ENTRY STARTS HERE</p><h2>Have something<br /><em>in mind?</em></h2><p className="contact-copy">Have a project, an idea, or a problem worth solving? Let's talk.</p><span className="ink-underline" aria-hidden="true"><svg viewBox="0 0 450 18" preserveAspectRatio="none"><path d="M3 12C93 4 201 14 293 8c53-3 104-2 154 1" /></svg></span>
        <a className="contact-email" href={`mailto:${profiles.email}`}>{profiles.email}<ArrowUpRight /></a>
        <div className="social-links"><a href={profiles.github} target="_blank" rel="noreferrer"><span className="social-mark">GH</span> GitHub <ArrowUpRight size={13} /></a><a href={profiles.linkedin} target="_blank" rel="noreferrer"><span className="social-mark">in</span> LinkedIn <ArrowUpRight size={13} /></a><a href={profiles.leetcode} target="_blank" rel="noreferrer"><Check size={15} /> LeetCode <ArrowUpRight size={13} /></a></div>
      </div><div className="contact-envelope" aria-hidden="true"><span>AK</span></div>
    </motion.div>
    <footer className="site-footer"><span>ANIKET KODGIRWAR · FIELD NOTES</span><a href="#top">BACK TO THE BEGINNING <ArrowUpRight size={12} /></a><span>MADE WITH CURIOSITY <Mail size={12} /></span></footer>
  </section>
}

export default function App() {
  return <div className="portfolio-app"><Navigation /><main><JournalHero /><ProjectArchive /><Skills /><AchievementsExperience /><About /><Contact /></main></div>
}
