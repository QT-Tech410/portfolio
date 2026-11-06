import { useLanguage } from '../config/i18n'

const GROUPS = [
  { titleKey: 'skills.frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Tailwind'] },
  { titleKey: 'skills.backend', skills: ['Laravel/PHP', 'Node.js', 'MySQL'] },
  { titleKey: 'skills.other', skills: ['Python', 'Git', 'REST API', 'IoT'] }
]

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t('skills.title')}</h2>
      <div className="skills-grid">
        {GROUPS.map((g) => (
          <div key={g.titleKey} className="skill-card">
            <h3>{t(g.titleKey)}</h3>
            <div className="skill-tags">
              {g.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
