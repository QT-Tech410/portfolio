import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>© {new Date().getFullYear()} {CONTACT.name} — {t('footer.madeWith')}</p>
    </footer>
  )
}
