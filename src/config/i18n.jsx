import { createContext, useContext, useState, useEffect } from 'react'

export const dict = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    'home.hello': 'Xin chào, tôi là',
    'home.type1': 'Full-stack Developer',
    'home.type2': 'React Developer',
    'home.type3': 'Laravel Developer',
    'home.btnProjects': 'Xem dự án',
    'home.btnContact': 'Liên hệ',
    'about.title': 'Giới thiệu',
    'about.p1': 'Tôi là Toan Nguyen Quang, lập trình viên full-stack đam mê xây dựng các ứng dụng web hoàn chỉnh từ giao diện đến server.',
    'about.p2': 'Tôi có kinh nghiệm thực chiến với React, Laravel, Node.js và các hệ thống IoT.',
    'about.location': 'Việt Nam',
    'about.openToWork': 'Sẵn sàng nhận việc',
    'skills.title': 'Kỹ năng',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Công cụ khác',
    'projects.title': 'Dự án',
    'projects.github': 'Xem trên GitHub',
    'projects.details': 'Chi tiết',
    'projects.close': 'Đóng',
    'projects.tech': 'Công nghệ',
    'contact.title': 'Liên hệ',
    'contact.namePh': 'Tên của bạn',
    'contact.emailPh': 'Email của bạn',
    'contact.msgPh': 'Tin nhắn',
    'contact.send': 'Gửi',
    'contact.copyEmail': 'Nhấn để copy email',
    'footer.madeWith': 'Được xây dựng với React',
    'lang.toggle': 'EN'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'home.hello': "Hello, I'm",
    'home.type1': 'Full-stack Developer',
    'home.type2': 'React Developer',
    'home.type3': 'Laravel Developer',
    'home.btnProjects': 'View Projects',
    'home.btnContact': 'Contact Me',
    'about.title': 'About Me',
    'about.p1': "I'm Toan Nguyen Quang, a full-stack developer passionate about building complete web applications from UI to server.",
    'about.p2': 'I have hands-on experience with React, Laravel, Node.js and IoT systems.',
    'about.location': 'Vietnam',
    'about.openToWork': 'Open to work',
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Other Tools',
    'projects.title': 'Projects',
    'projects.github': 'View on GitHub',
    'projects.details': 'Details',
    'projects.close': 'Close',
    'projects.tech': 'Tech',
    'contact.title': 'Contact',
    'contact.namePh': 'Your name',
    'contact.emailPh': 'Your email',
    'contact.msgPh': 'Message',
    'contact.send': 'Send',
    'contact.copyEmail': 'Click to copy email',
    'footer.madeWith': 'Built with React',
    'lang.toggle': 'VI'
  }
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      return saved === 'en' ? 'en' : 'vi'
    } catch {
      return 'vi'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable (e.g. SSR, private mode) — language still works in-memory
    }
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang
      }
    } catch {
      // document unavailable (e.g. SSR) — language still works in-memory
    }
  }, [lang])

  const t = (key) => dict[lang][key] ?? key
  const toggle = () => setLang((l) => (l === 'vi' ? 'en' : 'vi'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
