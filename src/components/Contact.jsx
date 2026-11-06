import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

export default function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${CONTACT.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-lead">{t('contact.lead')}</p>
          <ul className="contact-list">
            <li>
              <span className="contact-ico"><FaEnvelope aria-hidden="true" /></span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span className="contact-ico"><FaPhone aria-hidden="true" /></span>
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <span className="contact-ico"><FaLinkedin aria-hidden="true" /></span>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <span className="contact-ico"><FaGithub aria-hidden="true" /></span>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
          <button onClick={copyEmail} className="copy-btn">
            <FaCopy aria-hidden="true" /> {copied ? '✓ ' : ''}{t('contact.copyEmail')}
          </button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            placeholder={t('contact.namePh')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={t('contact.emailPh')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder={t('contact.msgPh')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
          <button type="submit" className="btn-primary-cta">{t('contact.send')}</button>
        </form>
      </div>
    </section>
  )
}
