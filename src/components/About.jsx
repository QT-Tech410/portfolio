import { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaTrophy,
  FaBullseye,
  FaRocket
} from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

export default function About() {
  const { t } = useLanguage()
  const [avatarOk, setAvatarOk] = useState(true)

  return (
    <section id="about" className="section">
      <h2 className="section-title">{t('about.title')}</h2>
      <p className="section-subtitle">{t('about.subtitle')}</p>

      <div className="about-grid">
        <div className="about-avatar">
          {avatarOk ? (
            <img
              src={CONTACT.avatar}
              alt={CONTACT.name}
              onError={() => setAvatarOk(false)}
            />
          ) : (
            <div className="avatar-fallback">{CONTACT.name.charAt(0)}</div>
          )}
        </div>
        <div className="about-text">
          <p className="about-role">{t('about.role')}</p>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <ul className="about-meta">
            <li><FaMapMarkerAlt aria-hidden="true" /> {t('about.location')}</li>
            <li className="open-to-work"><FaCheckCircle aria-hidden="true" /> {t('about.openToWork')}</li>
          </ul>
        </div>
      </div>

      <div className="cv-highlights-grid">
        <article className="cv-panel">
          <div className="cv-panel-header">
            <span className="cv-panel-icon"><FaGraduationCap aria-hidden="true" /></span>
            <h3>{t('about.eduTitle')}</h3>
          </div>
          <p className="cv-school">{t('about.eduSchool')}</p>
          <div className="cv-edu-badges">
            <span className="cv-badge-pill">{t('about.eduMajor')}</span>
            <span className="cv-badge-pill cv-badge-pill--gpa">{t('about.eduGpa')}</span>
          </div>
          <p className="cv-courses">
            <strong>{t('about.eduCoursesLabel')}</strong> {t('about.eduCourses')}
          </p>
        </article>

        <article className="cv-panel">
          <div className="cv-panel-header">
            <span className="cv-panel-icon"><FaTrophy aria-hidden="true" /></span>
            <h3>{t('about.awardsTitle')}</h3>
          </div>
          <ul className="cv-award-list">
            <li>{t('about.award1')}</li>
            <li>{t('about.award2')}</li>
            <li className="cv-award-highlight">{t('about.award3')}</li>
          </ul>
        </article>
      </div>

      <div className="cv-goals-grid">
        <article className="cv-goal-card">
          <div className="cv-panel-header">
            <span className="cv-panel-icon"><FaBullseye aria-hidden="true" /></span>
            <h3>{t('about.shortTermTitle')}</h3>
          </div>
          <p>{t('about.shortTermDesc')}</p>
        </article>

        <article className="cv-goal-card">
          <div className="cv-panel-header">
            <span className="cv-panel-icon"><FaRocket aria-hidden="true" /></span>
            <h3>{t('about.longTermTitle')}</h3>
          </div>
          <p>{t('about.longTermDesc')}</p>
        </article>
      </div>
    </section>
  )
}
