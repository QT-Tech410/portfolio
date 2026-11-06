import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { PROJECTS } from '../config/projects'
import { useLanguage } from '../config/i18n'

export default function Projects() {
  const { t, lang } = useLanguage()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="project-card"
            onClick={() => setSelected(p)}
          >
            <div className="project-thumb">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="project-thumb-fallback">{p.title.charAt(0)}</div>
              )}
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{lang === 'vi' ? p.descVi : p.descEn}</p>
              <div className="project-tags">
                {p.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <button className="btn-details">{t('projects.details')}</button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selected.title}</h3>
            <p>{lang === 'vi' ? selected.longVi : selected.longEn}</p>
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
