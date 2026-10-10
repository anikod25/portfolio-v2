import type { PortfolioProject } from './content'

function AegisPresentation() {
  return <div className="project-art aegis-art" role="img" aria-label="Illustrative AEGIS security dashboard showing its URL, email, password, and recommendation modules">
    <div className="aegis-rail"><b>AEGIS</b><span>SECURITY WORKSPACE</span><i>01</i><i>02</i><i>03</i><i>04</i></div>
    <div className="aegis-screen"><div className="art-topline"><span>PERSONAL SECURITY</span><span>MODULE OVERVIEW</span></div><div className="aegis-title">A clearer view<br/>of your security.</div>
      <div className="aegis-modules"><div><i>01 / URL</i><strong>Link analysis</strong><span>Inspect a URL</span></div><div><i>02 / EMAIL</i><strong>Phishing analysis</strong><span>Review an email</span></div><div><i>03 / PASSWORD</i><strong>Strength check</strong><span>Evaluate a password</span></div><div className="aegis-recommend"><i>04 / GUIDANCE</i><strong>AI-assisted<br/>recommendations</strong><span>Practical next steps</span></div></div>
    </div><span className="art-note">ILLUSTRATIVE INTERFACE · MODULES REFLECT DESCRIBED FEATURES</span>
  </div>
}

function KiraPresentation() {
  return <div className="project-art kira-art" role="img" aria-label="KIRA autonomous-agent workflow: observe, think, and act with security-tool orchestration">
    <div className="kira-heading"><span>AGENT LOOP / CONCEPTUAL WORKFLOW</span><b>01—03</b></div>
    <div className="kira-loop"><div className="kira-stage kira-observe"><i>01</i><strong>OBSERVE</strong><span>Collect target context</span></div><div className="kira-stage kira-think"><i>02</i><strong>THINK</strong><span>Choose a next step</span></div><div className="kira-stage kira-act"><i>03</i><strong>ACT</strong><span>Invoke a security tool</span></div></div>
    <div className="kira-tools"><span>TOOLING</span><b>Nmap</b><b>Gobuster</b><b>Metasploit</b><b>Searchsploit</b></div>
    <div className="kira-return"><span>OBSERVATIONS INFORM THE NEXT CYCLE</span><i>↶</i></div>
  </div>
}

function WilhelmPresentation() {
  return <div className="project-art wilhelm-art" role="img" aria-label="WILHELM knowledge flow from a request through domain routing and grounded retrieval to a structured answer">
    <div className="wilhelm-request"><span>USER REQUEST</span><strong>Ask a question<br/>of the knowledge base</strong><i>INPUT</i></div>
    <div className="wilhelm-flow"><div className="wilhelm-route"><small>01 / ROUTE</small><b>Domain<br/>selection</b><span>Match request to domain</span></div><div className="wilhelm-retrieve"><small>02 / RETRIEVE</small><b>Grounded<br/>context</b><span>Retrieve relevant knowledge</span></div><div className="wilhelm-answer"><small>03 / RESPOND</small><b>Useful<br/>answer</b><span>Multi-turn response</span></div></div>
    <div className="wilhelm-formats"><span>STRUCTURED OUTPUTS</span><b>JSON</b><b>XML</b><b>SPREADSHEET</b><b>EMAIL</b></div>
    <p className="art-note">CONCEPTUAL KNOWLEDGE FLOW · FORMATS SHOWN AS SUPPORTED OUTPUT TYPES</p>
  </div>
}

function SecurenitePresentation() {
  return <div className="project-art securenite-art" role="img" aria-label="Securenite conceptual password derivation: site and user input lead to a site-specific masked password, without stored credentials">
    <div className="secure-heading"><span>LOCAL DERIVATION / CONCEPTUAL</span><b>NO CREDENTIAL VAULT</b></div>
    <div className="secure-inputs"><div><small>01 / SITE</small><strong>Current website</strong></div><div><small>02 / USER INPUT</small><strong>Secret phrase</strong></div></div>
    <div className="secure-derive"><span>DERIVE LOCALLY</span><i>↓</i></div>
    <div className="secure-output"><div className="secure-symbol">••••••••••••</div><strong>Site-specific masked password</strong><small>ZERO-STORAGE APPROACH</small></div>
    <p className="art-note">CONCEPTUAL DIAGRAM · NO PASSWORD OR CRYPTOGRAPHIC RESULT DISPLAYED</p>
  </div>
}

function ContainerCraftPresentation() {
  return <div className="project-art container-art" role="img" aria-label="ContainerCraft visual composition canvas paired with a Docker Compose YAML export preview">
    <div className="container-canvas"><div className="container-top"><span>COMPOSE CANVAS</span><span>VISUAL BUILDER</span></div><div className="compose-node compose-web"><i>01</i><b>Service</b><span>Container</span></div><div className="compose-node compose-db"><i>02</i><b>Service</b><span>Container</span></div><svg viewBox="0 0 250 150" aria-hidden="true"><path d="M95 78h57M124 78v39"/></svg><span className="compose-add">+</span></div>
    <div className="container-export"><div className="export-heading"><span>EXPORT</span><b>YAML</b></div><div className="yaml-lines"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="export-foot">DOCKER COMPOSE</div></div>
    <p className="art-note">ILLUSTRATIVE BUILDER CANVAS · YAML STRUCTURE PREVIEW</p>
  </div>
}

const presentations: Record<string, () => React.JSX.Element> = {
  AEGIS: AegisPresentation,
  KIRA: KiraPresentation,
  WILHELM: WilhelmPresentation,
  SECURENITE: SecurenitePresentation,
  CONTAINERCRAFT: ContainerCraftPresentation,
}

export function ProjectPresentation({ project }: { project: PortfolioProject }) {
  const Presentation = presentations[project.name]
  return Presentation ? <Presentation /> : <div className="project-art"><p>{project.description}</p></div>
}
