import { useEffect, useMemo, useState } from 'react'
import { FaFileAlt, FaGithub, FaLinkedin, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

function useTypewriter(words, speed = 110) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const word = words[i % words.length]
    let timeout
    if (!del && text === word) {
      timeout = setTimeout(() => setDel(true), 1500)
    } else if (del && text === '') {
      setDel(false)
      setI((v) => v + 1)
    } else {
      timeout = setTimeout(() => {
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }, speed)
    }
    return () => clearTimeout(timeout)
  }, [text, del, i, words, speed])

  return text
}

export default function Home() {
  const { t, lang } = useLanguage()
  const roles = useMemo(
    () => [t('home.type1'), t('home.type2'), t('home.type3'), t('home.type4')],
    [t, lang]
  )
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>{t('home.badge')}</span>
          </div>
          <p className="hero-hello">{t('home.hello')}</p>
          <h1 className="hero-name">{CONTACT.name}</h1>
          <div className="hero-type" aria-live="polite">
            <span className="typed-accent">{typed}</span>
          </div>
          <p className="hero-desc">{t('home.desc')}</p>

          <div className="hero-quick-facts">
            <div className="quick-fact">
              <span className="quick-fact-label">{t('home.quickFocusLabel')}</span>
              <strong className="quick-fact-val">{t('home.quickFocusVal')}</strong>
            </div>
            <div className="quick-fact">
              <span className="quick-fact-label">{t('home.quickGpaLabel')}</span>
              <strong className="quick-fact-val">{t('home.quickGpaVal')}</strong>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary-cta">{t('home.btnProjects')}</a>
            {CONTACT.cvUrl && (
              <a
                href={CONTACT.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cv-cta"
              >
                <FaFileAlt aria-hidden="true" /> {t('home.btnCv')}
              </a>
            )}
            <a href="#contact" className="btn-outline-cta">{t('home.btnContact')}</a>
          </div>

          <div className="hero-social-strip">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-social-icon"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-social-icon"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-ring" />
          <div className="hero-terminal">
            <div className="hero-terminal-bar">
              <span className="term-dot term-dot--red" />
              <span className="term-dot term-dot--amber" />
              <span className="term-dot term-dot--green" />
              <span className="term-title">{t('home.termTitle')}</span>
            </div>
            <div className="hero-terminal-body">
              <div className="term-line">
                <span className="term-key">candidate</span>: <span className="term-str">&quot;Nguyễn Quang Toàn&quot;</span>,
              </div>
              <div className="term-line">
                <span className="term-key">role</span>: <span className="term-str">&quot;Full-stack Web (Node.js)&quot;</span>,
              </div>
              <div className="term-line">
                <span className="term-key">education</span>: <span className="term-str">&quot;HUNRE · Software Eng.&quot;</span>,
              </div>
              <div className="term-line">
                <span className="term-key">gpa</span>: <span className="term-num">3.7</span> / <span className="term-num">4.0</span>,
              </div>
              <div className="term-line">
                <span className="term-key">backend</span>: [<span className="term-str">&quot;Node.js&quot;</span>, <span className="term-str">&quot;Express&quot;</span>, <span className="term-str">&quot;Spring Boot&quot;</span>, <span className="term-str">&quot;Laravel&quot;</span>],
              </div>
              <div className="term-line">
                <span className="term-key">frontend</span>: [<span className="term-str">&quot;React&quot;</span>, <span className="term-str">&quot;TypeScript&quot;</span>, <span className="term-str">&quot;Tailwind&quot;</span>],
              </div>
              <div className="term-line">
                <span className="term-key">database</span>: [<span className="term-str">&quot;MySQL&quot;</span>, <span className="term-str">&quot;MongoDB&quot;</span>]
              </div>
            </div>
          </div>
          <div className="hero-chip hero-chip--react"><FaReact /> React · TS</div>
          <div className="hero-chip hero-chip--node"><FaNodeJs /> Node.js</div>
          <div className="hero-chip hero-chip--db"><FaDatabase /> SQL · Mongo</div>
        </div>
      </div>
    </section>
  )
}
