import { useEffect, useState } from 'react'
import { CONTACT } from '../config/contact'
import { useLanguage } from '../config/i18n'

function useTypewriter(words, speed = 120) {
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
  const { t } = useLanguage()
  const roles = [t('home.type1'), t('home.type2'), t('home.type3')]
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      <h2 className="hero-hello">{t('home.hello')}</h2>
      <h1 className="hero-name">{CONTACT.name}</h1>
      <div className="hero-type">
        <span className="accent">{typed}</span>
        <span className="cursor">|</span>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary-cta">{t('home.btnProjects')}</a>
        <a href="#contact" className="btn-outline-cta">{t('home.btnContact')}</a>
      </div>
    </section>
  )
}
