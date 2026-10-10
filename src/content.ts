export type JournalSection = {
  id: string
  title: string
  short: string
  leftPage: number
}

export const sections: JournalSection[] = [
  { id: 'index', title: 'Index & introduction', short: 'INDEX', leftPage: 2 },
  { id: 'projects', title: 'Selected projects', short: 'PROJECTS', leftPage: 4 },
  { id: 'experience', title: 'Education & experience', short: 'EDUCATION', leftPage: 6 },
  { id: 'skills', title: 'Skills & interests', short: 'SKILLS', leftPage: 8 },
  { id: 'achievements', title: 'Achievements & activities', short: 'MILESTONES', leftPage: 10 },
  { id: 'notes', title: 'Field notes & writing', short: 'FIELD NOTES', leftPage: 12 },
  { id: 'about', title: 'About Aniket', short: 'ABOUT', leftPage: 14 },
  { id: 'contact', title: 'Contact', short: 'CONTACT', leftPage: 16 },
]

export type PortfolioProject = {
  name: string
  title: string
  discipline: string
  description: string
  notes: string[]
  stack: string[]
  repository?: string
  demo?: string
  documentation?: string
  submission?: string
}

export const projects: PortfolioProject[] = [
  {
    name: 'AEGIS', title: 'Personal Cybersecurity Dashboard', discipline: 'SECURITY / ANALYSIS',
    description: 'An AI-assisted security dashboard for evaluating URLs, phishing emails, password strength, and practical security recommendations.',
    notes: ['URL and phishing-email analysis', 'Password strength feedback', 'Security recommendations'],
    stack: ['Cybersecurity', 'AI-assisted analysis'],
    repository: 'https://github.com/dhruv-gupta-0311/AEGIS',
  },
  {
    name: 'KIRA', title: 'Autonomous Penetration-Testing Agent', discipline: 'AGENTIC AI / SECURITY',
    description: 'An agentic security project organized around an observe–think–act workflow and security-tool orchestration.',
    notes: ['Observe–think–act workflow', 'Security-tool orchestration'],
    stack: ['Python', 'LLMs', 'Agentic AI'],
    repository: 'https://github.com/Kur00o/Kira',
    documentation: 'https://kira-documentation.vercel.app/',
  },
  {
    name: 'WILHELM', title: 'Enterprise Knowledge-Base Agent', discipline: 'INTELLIGENT SYSTEMS',
    description: 'A multi-turn knowledge-base system with domain routing, grounded retrieval-augmented generation, and structured outputs.',
    notes: ['Domain-aware routing', 'Grounded retrieval-augmented generation', 'Structured outputs'],
    stack: ['Agentic AI', 'RAG'],
    repository: 'https://github.com/anikod25/wilhelm',
    demo: 'https://www.youtube.com/watch?v=u8KGFWQlJhs',
  },
  {
    name: 'SECURENITE', title: 'Site-Specific Password Extension', discipline: 'SECURITY / BROWSER TOOL',
    description: 'A zero-storage browser extension for site-specific masked passwords.',
    notes: ['Zero-storage approach', 'Site-specific masked passwords'],
    stack: ['JavaScript', 'HTML', 'Cryptography'],
    repository: 'https://github.com/anikod25/securenite',
  },
  {
    name: 'CONTAINERCRAFT', title: 'Visual Docker Compose Builder', discipline: 'DEVELOPER TOOLING',
    description: 'A visual way to compose services and export Docker configuration as YAML.',
    notes: ['Compose services visually', 'Export YAML'],
    stack: ['React', 'Node.js', 'Docker', 'SVG'],
    repository: 'https://github.com/anikod25/containercraft',
    demo: 'https://youtu.be/NSRWm1DW1f4',
    submission: 'https://fossunited.org/hack/fosshack26/p/0d8p2p3fi6',
  },
]

export const skillGroups = [
  { name: 'PROGRAMMING', items: ['C', 'C++', 'Python', 'JavaScript', 'HTML'] },
  { name: 'WEB & BACKEND', items: ['React', 'Node.js', 'HTML', 'JavaScript'] },
  { name: 'CYBERSECURITY', items: ['Nmap', 'Wireshark', 'Metasploit', 'Cryptography', 'Network security', 'Secure coding', 'OWASP'] },
  { name: 'AI & AGENTIC SYSTEMS', items: ['LLMs', 'Agentic AI', 'RAG'] },
  { name: 'INFRASTRUCTURE & TOOLS', items: ['Git & GitHub', 'Linux', 'VS Code', 'Docker'] },
  { name: 'DATA & FOUNDATIONS', items: ['MySQL', 'DSA', 'OOP', 'Blockchain basics'] },
]

export type AchievementExhibit = {
  id: string
  title: string
  category: string
  date?: string
  caption: string
  detail: string
  artwork: 'laurel' | 'signal' | 'route' | 'code' | 'practice'
}

export const achievementExhibits: AchievementExhibit[] = [
  { id: 'hackerrank', title: '5★', category: 'TECHNICAL MILESTONE', caption: 'HackerRank', detail: 'Five-star HackerRank ratings in Python, C, and C++.', artwork: 'code' },
  {
    id: 'hackmit', title: 'Top 10', category: 'HACKATHON', date: '2025',
    caption: "HackMIT · among 100 teams", detail: "Placed in the top 10 at HackMIT '25, among 100 teams.", artwork: 'signal',
  },
  { id: 'csi-fusion', title: '1st', category: 'COMPETITION', caption: 'CSI Fusion · Agentic Sprint', detail: 'First place at the CSI Fusion Agentic AI Sprint.', artwork: 'laurel' },
  { id: 'sih', title: 'R3', category: 'HACKATHON', date: '2025', caption: 'SIH · all internal rounds', detail: 'Reached Round 3 of Smart India Hackathon through its internal rounds.', artwork: 'route' },
  { id: 'leetcode', title: '150+', category: 'TECHNICAL MILESTONE', caption: 'LeetCode · C/C++ · core DSA', detail: 'More than 150 LeetCode problems completed in C/C++ and core data structures and algorithms.', artwork: 'practice' },
]

export const leadershipEducation = [
  { id: 'leadership', label: 'LEADERSHIP / INSIGHT AI CLUB', title: 'President', description: 'Insight AI Club' },
  { id: 'education', label: 'EDUCATION / CURRENT', title: 'B.Tech · Computer Science Engineering', description: 'MIT World Peace University · Pune' },
]

export const profiles = {
  email: 'Aniket.Kodgirwar2507@gmail.com',
  github: 'https://github.com/anikod25',
  linkedin: 'https://linkedin.com/in/aniket-kodgirwar/',
  leetcode: 'https://leetcode.com/u/Anikod/',
}
