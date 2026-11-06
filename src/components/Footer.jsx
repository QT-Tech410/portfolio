import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#home" className="footer-logo">ToanNQ.</a>
        <div className="footer-social">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub aria-hidden="true" /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {CONTACT.name} — {t('footer.madeWith')} <FaHeart className="footer-heart" aria-hidden="true" />
        </p>
      </div>
    </footer>
  )
}
