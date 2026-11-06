import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../config/i18n'

const LINKS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' }
]

export default function Navbar() {
  const { t, toggle, lang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar-portfolio">
      <a href="#home" className="nav-logo">ToanNQ.</a>
      <div id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{t(l.key)}</a>
        ))}
        <button className="lang-btn" onClick={toggle} aria-label={t('lang.toggle')}>
          {t('lang.toggle')}
        </button>
      </div>
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}
