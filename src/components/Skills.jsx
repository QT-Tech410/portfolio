import {
  FaReact,
  FaNodeJs,
  FaTools,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaServer,
  FaCode
} from 'react-icons/fa'
import { useLanguage } from '../config/i18n'

const GROUPS = [
  {
    titleKey: 'skills.frontend',
    noteKey: 'skills.langNote',
    icon: FaReact,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    titleKey: 'skills.backend',
    noteKey: 'skills.techNote',
    icon: FaNodeJs,
    skills: ['Node.js', 'Express.js', 'Socket.IO', 'Spring Boot', 'Laravel/PHP', 'MySQL', 'MongoDB', 'RESTful API', 'JWT & bcrypt']
  },
  {
    titleKey: 'skills.other',
    noteKey: 'skills.toolsNote',
    icon: FaTools,
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'Linux', 'SQL', 'Python', 'C++', 'IoT']
  }
]

const TECH_TILES = [
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'Express.js', icon: FaServer },
  { label: 'React', icon: FaReact },
  { label: 'TypeScript', icon: FaCode },
  { label: 'JavaScript', icon: FaJsSquare },
  { label: 'HTML5', icon: FaHtml5 },
  { label: 'CSS3 / Tailwind', icon: FaCss3Alt },
  { label: 'MySQL / MongoDB', icon: FaDatabase },
  { label: 'Laravel / PHP', icon: FaPhp },
  { label: 'Python', icon: FaPython },
  { label: 'Git & GitHub', icon: FaGitAlt },
  { label: 'Linux / VS Code', icon: FaLinux }
]

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t('skills.title')}</h2>
      <p className="section-subtitle">{t('skills.subtitle')}</p>

      <div className="skills-grid">
        {GROUPS.map((g) => {
          const Icon = g.icon
          return (
            <div key={g.titleKey} className="skill-card">
              <div className="skill-card-head">
                <Icon className="skill-icon" aria-hidden="true" />
                <h3>{t(g.titleKey)}</h3>
              </div>
              <p className="skill-note">{t(g.noteKey)}</p>
              <div className="skill-tags">
                {g.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          )
        })}
      </div>

      <div className="tech-tiles-grid" aria-label={t('skills.techTitle')}>
        {TECH_TILES.map((item) => {
          const TileIcon = item.icon
          return (
            <div key={item.label} className="tech-tile">
              <TileIcon className="tech-tile-icon" aria-hidden="true" />
              <span className="tech-tile-label">{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
