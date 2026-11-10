import { useState, useEffect } from 'react'
import { FaGithub, FaCalendarAlt, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa'
import { PROJECTS } from '../config/projects'
import { useLanguage } from '../config/i18n'

export default function Projects() {
  const { t, lang } = useLanguage()
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!selected) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selected])

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>

      <div className="project-filters">
        <button
          type="button"
          className={`filter-chip ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t('projects.filterAll')}
        </button>
        <button
          type="button"
          className={`filter-chip ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          {t('projects.filterFullstack')}
        </button>
        <button
          type="button"
          className={`filter-chip ${filter === 'backend' ? 'active' : ''}`}
          onClick={() => setFilter('backend')}
        >
          {t('projects.filterBackend')}
        </button>
        <button
          type="button"
          className={`filter-chip ${filter === 'iot' ? 'active' : ''}`}
          onClick={() => setFilter('iot')}
        >
          {t('projects.filterIot')}
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p) => {
          const highlights = lang === 'vi' ? p.highlightsVi : p.highlightsEn
          return (
            <article
              key={p.id}
              className="project-card"
              onClick={() => setSelected(p)}
            >
              <div className="project-thumb">
                {p.image ? (
                  <img src={p.image} alt={p.title} />
                ) : (
                  <div className="project-thumb-fallback">
                    <span className="thumb-monogram">{p.title.charAt(0)}</span>
                    <div className="thumb-meta">
                      {p.featured && (
                        <span className="thumb-cv-badge">
                          <FaStar aria-hidden="true" /> {t('projects.cvHighlight')}
                        </span>
                      )}
                      {p.period && (
                        <span className="thumb-period">
                          <FaCalendarAlt aria-hidden="true" /> {p.period}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="project-body">
                <div className="project-head-row">
                  <h3>{p.title}</h3>
                  {(p.subtitleVi || p.subtitleEn) && (
                    <span className="project-role-tag">
                      <FaUsers aria-hidden="true" />{' '}
                      {lang === 'vi' ? p.subtitleVi : p.subtitleEn}
                    </span>
                  )}
                </div>
                <p className="project-summary">{lang === 'vi' ? p.descVi : p.descEn}</p>
                {highlights && highlights.length > 0 && (
                  <ul className="project-card-bullets">
                    {highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="project-tags">
                  {p.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-card-actions">
                  <button type="button" className="btn-details">{t('projects.details')}</button>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-github"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-meta">
              {(selected.subtitleVi || selected.subtitleEn) && (
                <span className="project-role-tag">
                  {lang === 'vi' ? selected.subtitleVi : selected.subtitleEn}
                </span>
              )}
              {selected.period && (
                <span className="modal-period">
                  <FaCalendarAlt aria-hidden="true" /> {selected.period}
                </span>
              )}
            </div>
            <h3>{selected.title}</h3>
            <p>{lang === 'vi' ? selected.longVi : selected.longEn}</p>

            {(selected.highlightsVi || selected.highlightsEn) && (
              <>
                <h4>{t('projects.highlights')}</h4>
                <ul className="modal-highlights">
                  {(lang === 'vi' ? selected.highlightsVi : selected.highlightsEn).map((bullet, idx) => (
                    <li key={idx}>
                      <FaCheckCircle aria-hidden="true" className="bullet-ico" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4>{t('projects.tech')}</h4>
            <div className="project-tags">
              {selected.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <a
              href={selected.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <FaGithub /> {t('projects.github')}
            </a>
            <button className="btn-close" onClick={() => setSelected(null)}>
              {t('projects.close')}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
