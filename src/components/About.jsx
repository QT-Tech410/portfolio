import { useState } from 'react'
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

export default function About() {
  const { t } = useLanguage()
  const [avatarOk, setAvatarOk] = useState(true)

  return (
    <section id="about" className="section">
      <h2 className="section-title">{t('about.title')}</h2>
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
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <ul className="about-meta">
            <li><FaMapMarkerAlt /> {t('about.location')}</li>
            <li className="open-to-work"><FaCheckCircle /> {t('about.openToWork')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
