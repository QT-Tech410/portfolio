# Portfolio Toan Nguyen Quang — Implementation Plan

> **For agentic workers.** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng trang Portfolio cá nhân one-page song ngữ (VI/EN) cho Toan Nguyen Quang theo spec `docs/superpowers/specs/2026-11-06-portfolio-design.md`.

**Architecture:** SPA one-page bằng React 18 + Vite, cuộn giữa các section (không router). Toàn bộ dữ liệu cá nhân nằm trong `src/config/` (contact, projects, i18n). Song ngữ qua Context (`LanguageProvider` + `useLanguage`), mặc định tiếng Việt, lưu lựa chọn vào `localStorage` key `lang`.

**Tech Stack:** React 18, Vite 5, Bootstrap 5.3 (CSS only), react-icons 5, Vitest + @testing-library/react + jsdom.

**Spec:** `docs/superpowers/specs/2026-11-06-portfolio-design.md`

## Global Constraints

- Node 18+, npm. Môi trường Windows — chạy lệnh qua **Bash tool** (Git Bash).
- Không dùng React Router — điều hướng bằng anchor `#section`.
- Không gọi API ngoài khi chạy (dữ liệu tĩnh trong `src/config/`).
- Ngôn ngữ mặc định: `vi`. localStorage key: `lang` (giá trị `'vi'` | `'en'`).
- Dark theme, font Poppins (Google Fonts), đã khai báo trong `index.html`.
- Style tập trung toàn bộ trong `src/App.css` (viết 1 lần ở Task 1, các task sau không sửa CSS).
- Mọi commit message kết thúc dòng: `Co-Authored-By: Claude Code <noreply@anthropic.com>`.
- Deploy target: Vercel (static build từ `vite build`).

---

### Task 1: Khởi tạo project: git, Vite, Vitest, theme CSS

**Files.**
- Create: `.gitignore`, `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.css`, `src/test/setup.js`, `src/App.test.jsx`

**Interfaces.**
- Produces: `App` component (default export) từ `src/App.jsx`. Dev server chạy được, `npm test` chạy được.

- [ ] **Step 1: Khởi tạo git repo**

```bash
cd "D:/2_Portfolio" && git init && git branch -m main
```

- [ ] **Step 2: Tạo `package.json`**

```json
{
  "name": "toan-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.0",
    "@vitejs/plugin-react": "^4.3.2",
    "jsdom": "^25.0.0",
    "vite": "^5.4.8",
    "vitest": "^2.1.2"
  }
}
```

Rồi chạy `npm install`.

- [ ] **Step 3: Tạo `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true
  }
})
```

- [ ] **Step 4: Tạo `index.html`**

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;text y='.9em' font-size='90'&gt;💻&lt;/text&gt;&lt;/svg&gt;" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio của Toan Nguyen Quang — Full-stack Developer" />
    <title>Toan Nguyen Quang | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Tạo `.gitignore`**

```
node_modules
dist
.vercel
```

- [ ] **Step 6: Tạo `src/test/setup.js`**

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 7: Tạo `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- [ ] **Step 8: Tạo `src/App.jsx` skeleton (test dùng)**

```jsx
export default function App() {
  return (
    <div>
      <p>Portfolio skeleton</p>
    </div>
  )
}
```

- [ ] **Step 9: Viết test đầu tiên `src/App.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Portfolio skeleton')).toBeInTheDocument()
  })
})
```

- [ ] **Step 10: Chạy test kiểm tra pass**

```bash
npm test
```

Expected: 1 test pass.

- [ ] **Step 11: Tạo `src/App.css` — toàn bộ theme dark + style cho mọi section**

Toàn bộ nội dung CSS theme tối (biến màu, reset, các class `.section`, `.hero`, `.skill-card`, `.project-card`, `.modal-overlay`, responsive). Khoảng 400 dòng, gồm: `:root` variables (`--bg: #0d1b2a`, `--card: #132639`, `--accent: #4fc3f7`, `--text: #e0e6ed`, v.v.), navbar, hero, about, skills, projects grid, contact, footer, animations.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "chore: init Vite + Vitest project with dark theme CSS

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 2: Config liên hệ + i18n (VI/EN)

**Files.**
- Create: `src/config/contact.js`, `src/config/i18n.jsx`, `src/config/i18n.test.jsx`

**Interfaces.**
- Consumes: không.
- Produces: `CONTACT` (object const, các key `name`, `email`, `phone`, `phoneDisplay`, `linkedin`, `github`, `githubUser`, `avatar`, `role`); `LanguageProvider` (default), `useLanguage()` trả về `{ lang, t, toggle }` — `lang` là `'vi'|'en'`, `t(key)` trả string.

- [ ] **Step 1: Viết test `src/config/i18n.test.jsx`**

```jsx
import { describe, test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './i18n'

function Probe() {
  const { lang, t, toggle } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="txt">{t('nav.about')}</span>
      <button onClick={toggle}>switch</button>
    </div>
  )
}

describe('i18n', () => {
  test('defaults to Vietnamese', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('vi')
    expect(screen.getByTestId('txt')).toHaveTextContent(/Giới thiệu/i)
  })

  test('toggle switches to English', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    act(() => { screen.getByText('switch').click() })
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('txt')).toHaveTextContent(/About/i)
  })
})
```

- [ ] **Step 2: Chạy test — fail (chưa có file)**

```bash
npm test
```

Expected: FAIL — cannot resolve `./i18n`.

- [ ] **Step 3: Tạo `src/config/contact.js`**

```js
export const CONTACT = {
  name: 'Toan Nguyen Quang',
  email: 'quangtoan2005.work@gmail.com',
  phone: '+84362156059',
  phoneDisplay: '(+84) 362156059',
  linkedin: 'https://linkedin.com/in/toan-nguyen-quang',
  github: 'https://github.com/QT-Tech410',
  githubUser: 'QT-Tech410',
  avatar: 'https://avatars.githubusercontent.com/u/206489880?v=4',
  role: { vi: 'Full-stack Developer', en: 'Full-stack Developer' }
}
```

- [ ] **Step 4: Tạo `src/config/i18n.jsx`**

```jsx
import { createContext, useContext, useState } from 'react'

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
```

- [ ] **Step 5: Chạy test — pass**

```bash
npm test
```

Expected: 3 test pass (1 App + 2 i18n).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add contact config and VI/EN i18n with Context

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 3: Navbar + Language Toggle

**Files.**
- Create: `src/components/Navbar.jsx`, `src/components/Navbar.test.jsx`
- Modify: `src/App.jsx` (bọc `LanguageProvider`, render Navbar)

**Interfaces.**
- Consumes: `useLanguage()` từ Task 2, `CONTACT` từ Task 2.
- Produces: `Navbar` default export. App render `<LanguageProvider><Navbar /></LanguageProvider>`.

- [ ] **Step 1: Viết test `src/components/Navbar.test.jsx`**

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import Navbar from './Navbar'

test('renders logo and language toggle', () => {
  render(<LanguageProvider><Navbar /></LanguageProvider>)
  expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument()
})

test('toggle switches nav language', () => {
  render(<LanguageProvider><Navbar /></LanguageProvider>)
  fireEvent.click(screen.getByRole('button', { name: 'EN' }))
  expect(screen.getByText('About')).toBeInTheDocument()
})
```

- [ ] **Step 2: Chạy test — fail**

Expected: FAIL — Navbar chưa tồn tại.

- [ ] **Step 3: Tạo `src/components/Navbar.jsx`**

```jsx
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
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{t(l.key)}</a>
        ))}
        <button className="lang-btn" onClick={toggle} aria-label="Switch language">
          {t('lang.toggle')}
        </button>
      </div>
      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}
```

- [ ] **Step 4: Cập nhật `src/App.jsx`**

```jsx
import { LanguageProvider } from './config/i18n'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <p>Portfolio skeleton</p>
      </main>
    </LanguageProvider>
  )
}
```

Lưu ý: sửa `src/App.test.jsx` — bọc `<App />` không cần gì thêm vì `LanguageProvider` đã nằm trong App. Text "Portfolio skeleton" vẫn render nên test Task 1 vẫn pass.

- [ ] **Step 5: Chạy test — pass**

```bash
npm test
```

Expected: 5 test pass (1 App + 2 i18n + 2 Navbar).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Navbar with VI/EN language toggle

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 4: Home (Hero) với Typewriter

**Files.**
- Create: `src/components/Home.jsx`, `src/components/Home.test.jsx`
- Modify: `src/App.jsx`

**Interfaces.**
- Consumes: `useLanguage()`, `CONTACT`.
- Produces: `Home` default export.

- [ ] **Step 1: Viết test `src/components/Home.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import Home from './Home'

test('renders greeting with name', () => {
  render(<LanguageProvider><Home /></LanguageProvider>)
  expect(screen.getByText('Toan Nguyen Quang')).toBeInTheDocument()
  expect(screen.getByText(/Xin chào, tôi là/i)).toBeInTheDocument()
})

test('renders CTA buttons', () => {
  render(
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
  expect(screen.getByRole('link', { name: 'Xem dự án' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Liên hệ' })).toBeInTheDocument()
})
```

- [ ] **Step 2: Chạy test — fail**

- [ ] **Step 3: Tạo `src/components/Home.jsx`**

```jsx
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
```

- [ ] **Step 4: Thêm Home vào App**

Trong `src/App.jsx`, thêm `import Home from './components/Home'` và render `<Home />` ngay sau `<Navbar />`.

- [ ] **Step 5: Chạy test — pass (7 tests)**

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Home hero with typewriter effect

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 5: About section

**Files.**
- Create: `src/components/About.jsx`, `src/components/About.test.jsx`
- Modify: `src/App.jsx`

**Interfaces.**
- Consumes: `useLanguage()`, `CONTACT`.
- Produces: `About` default export.

- [ ] **Step 1: Viết test `src/components/About.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import About from './About'

test('renders avatar image with fallback', () => {
  render(<LanguageProvider><About /></LanguageProvider>)
  const img = screen.getByRole('img')
  expect(img).toHaveAttribute('src', expect.stringContaining('avatars.githubusercontent'))
})

test('renders open to work badge', () => {
  render(<LanguageProvider><About /></LanguageProvider>)
  expect(screen.getByText(/Sẵn sàng nhận việc/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Chạy test — fail**

- [ ] **Step 3: Tạo `src/components/About.jsx`**

```jsx
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
```

- [ ] **Step 4: Thêm About vào App. Chạy test — pass (9 tests)**

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add About section with avatar fallback

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 6: Skills section

**Files.**
- Create: `src/components/Skills.jsx`, `src/components/Skills.test.jsx`
- Modify: `src/App.jsx`

**Interfaces.**
- Consumes: `useLanguage()`.
- Produces: `Skills` default export.

- [ ] **Step 1: Viết test `src/components/Skills.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import Skills from './Skills'

test('renders three skill groups', () => {
  render(<LanguageProvider><Skills /></LanguageProvider>)
  expect(screen.getByText('Frontend')).toBeInTheDocument()
  expect(screen.getByText('Backend')).toBeInTheDocument()
  expect(screen.getByText(/Công cụ khác/i)).toBeInTheDocument()
})

test('renders skill items', () => {
  render(<LanguageProvider><Skills /></LanguageProvider>)
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Laravel')).toBeInTheDocument()
})
```

- [ ] **Step 2: Chạy test — fail**

- [ ] **Step 3: Tạo `src/components/Skills.jsx`**

```jsx
import { useLanguage } from '../config/i18n'

const GROUPS = [
  { titleKey: 'skills.frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Tailwind'] },
  { titleKey: 'skills.backend', skills: ['Laravel/PHP', 'Node.js', 'MySQL'] },
  { titleKey: 'skills.other', skills: ['Python', 'Git', 'REST API', 'IoT'] }
]

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t('skills.title')}</h2>
      <div className="skills-grid">
        {GROUPS.map((g) => (
          <div key={g.titleKey} className="skill-card">
            <h3>{t(g.titleKey)}</h3>
            <div className="skill-tags">
              {g.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              {g.skills.length === 0 && <span>{s}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Lưu ý dòng `{g.skills.length === 0 && ...}` là vô nghĩa — xóa bỏ, chỉ giữ `{g.skills.map(...)}`.

- [ ] **Step 4: Thêm Skills vào App. Chạy test — pass (11 tests)**

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Skills section with 3 groups

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 7: Projects section + Modal chi tiết

**Files.**
- Create: `src/config/projects.js`, `src/components/Projects.jsx`, `src/components/Projects.test.jsx`
- Modify: `src/App.jsx`

**Interfaces.**
- Consumes: `useLanguage()`.
- Produces: `PROJECTS` (array các object `{ id, title, titleVi, titleEn, descVi, descEn, longVi, longEn, tech, github, image }`), `Projects` default export.

- [ ] **Step 1: Viết test `src/components/Projects.test.jsx`**

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import Projects from './Projects'

test('renders 4 project cards', () => {
  render(<LanguageProvider><Projects /></LanguageProvider>)
  expect(screen.getByText('DriverSafeIoT')).toBeInTheDocument()
  expect(screen.getByText('ChatApp')).toBeInTheDocument()
  expect(screen.getByText('Sports Booking')).toBeInTheDocument()
  expect(screen.getByText('Banh My King')).toBeInTheDocument()
})

test('opens modal with details and GitHub link', () => {
  render(<LanguageProvider><Projects /></LanguageProvider>)
  fireEvent.click(screen.getByText('Chi tiết'))
  expect(screen.getByText(/Công nghệ/i)).toBeInTheDocument()
  expect(screen.getByText('Xem trên GitHub')).toHaveAttribute(
    'href',
    'https://github.com/QT-Tech410/DriverSafeIoT'
  )
})
```

- [ ] **Step 2: Chạy test — fail**

- [ ] **Step 3: Tạo `src/config/projects.js`**

```js
export const PROJECTS = [
  {
    id: 'driversafeiot',
    title: 'DriverSafeIoT',
    descVi: 'Hệ thống IoT giám sát an toàn lái xe',
    descEn: 'IoT system for driver safety monitoring',
    longVi: 'DriverSafeIoT thu thập dữ liệu từ cảm biến để phát hiện và cảnh báo các tình huống lái xe không an toàn như buồn ngủ hoặc mất tập trung, giúp giảm thiểu tai nạn.',
    longEn: 'DriverSafeIoT collects sensor data to detect and alert unsafe driving situations such as drowsiness or distraction, helping reduce accidents.',
    tech: ['Python', 'IoT', 'Embedded'],
    github: 'https://github.com/QT-Tech410/DriverSafeIoT',
    image: ''
  },
  {
    id: 'chatapp',
    title: 'ChatApp',
    descVi: 'Ứng dụng chat thời gian thực',
    descEn: 'Real-time chat application',
    longVi: 'ChatApp là ứng dụng nhắn tin thời gian thực với các phòng chat, chia sẻ tin nhắn tức thì và giao diện hiện đại xây dựng bằng TypeScript.',
    longEn: 'ChatApp is a real-time messaging app with chat rooms, instant message sharing and a modern UI built with TypeScript.',
    tech: ['TypeScript', 'React', 'WebSocket'],
    github: 'https://github.com/QT-Tech410/ChatApp',
    image: ''
  },
  {
    id: 'sports-booking',
    title: 'Sports Booking',
    descVi: 'Nền tảng đặt sân thể thao',
    descEn: 'Sports venue booking platform',
    longVi: 'Nền tảng đặt sân thể thao cho phép người dùng tìm kiếm, xem lịch trống và đặt sân nhanh chóng, xây dựng trên Laravel với giao diện Blade.',
    longEn: 'A sports venue booking platform that lets users search venues, check availability and book instantly, built on Laravel with Blade.',
    tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
    github: 'https://github.com/QT-Tech410/sports-booking-laravel',
    image: ''
  },
  {
    id: 'banhmyking',
    title: 'Banh My King',
    descVi: 'Website thương mại điện tử',
    descEn: 'E-commerce website',
    longVi: 'Website thương mại điện tử bán bánh mì với danh mục sản phẩm, giỏ hàng và quy trình đặt hàng trực tuyến thân thiện.',
    longEn: 'An e-commerce website for banh mi selling with product catalog, cart and a friendly online ordering flow.',
    tech: ['Web', 'E-commerce', 'Laravel'],
    github: 'https://github.com/QT-Tech410/banhmyking',
    image: ''
  }
]
```

- [ ] **Step 4: Tạo `src/components/Projects.jsx`**

```jsx
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { PROJECTS } from '../config/projects'
import { useLanguage } from '../config/i18n'

export default function Projects() {
  const { t, lang } = useLanguage()
  const [selected, setSelected] = useState(null)

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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
```

- [ ] **Step 5: Thêm Projects vào App. Chạy test — pass (13 tests)**

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Projects section with detail modal

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 8: Contact section + Footer

**Files.**
- Create: `src/components/Contact.jsx`, `src/components/Contact.test.jsx`, `src/components/Footer.jsx`
- Modify: `src/App.jsx`

**Interfaces.**
- Consumes: `useLanguage()`, `CONTACT`.
- Produces: `Contact`, `Footer` default export.

- [ ] **Step 1: Viết test `src/components/Contact.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../config/i18n'
import Contact from './Contact'

test('renders contact channels', () => {
  render(<LanguageProvider><Contact /></LanguageProvider>)
  expect(screen.getByText('quangtoan2005.work@gmail.com')).toBeInTheDocument()
  expect(screen.getByText('(+84) 362156059')).toBeInTheDocument()
})

test('renders form fields', () => {
  render(<LanguageProvider><Contact /></LanguageProvider>)
  expect(screen.getByPlaceholderText('Tên của bạn')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Email của bạn')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Tin nhắn')).toBeInTheDocument()
})
```

- [ ] **Step 2: Chạy test — fail**

- [ ] **Step 3: Tạo `src/components/Contact.jsx`**

```jsx
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
          <a href={`mailto:${CONTACT.email}`}><FaEnvelope /> {CONTACT.email}</a>
          <a href={`tel:${CONTACT.phone}`}><FaPhone /> {CONTACT.phoneDisplay}</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <button onClick={copyEmail} className="copy-btn">
            <FaCopy /> {copied ? '✓' : ''} {t('contact.copyEmail')}
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
```

- [ ] **Step 4: Tạo `src/components/Footer.jsx`**

```jsx
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
```

- [ ] **Step 5: Thêm Contact + Footer vào App. Chạy test — pass (15 tests)**

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Contact section with mailto form and Footer

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 9: Hoàn thiện + Build + Kiểm tra hoàn tất

**Files.**
- Modify: `src/App.jsx` (thứ tự section cuối cùng)

**Interfaces.**
- Consumes: tất cả components.

- [ ] **Step 1: Kiểm tra App.jsx cuối cùng**

`src/App.jsx` cuối cùng phải là:

```jsx
import { LanguageProvider } from './config/i18n'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
```

- [ ] **Step 2: Chạy toàn bộ test**

```bash
npm test
```

Expected: 15 test pass.

- [ ] **Step 3: Build production**

```bash
npm run build
```

Expected: build thành công không lỗi.

- [ ] **Step 4: Kiểm tra thủ công với dev server**

```bash
npm run dev
```

Kiểm tra tại `http://localhost:5173`:
- Toggle VI/EN chuyển toàn bộ text, refresh giữ lựa chọn
- Mọi link GitHub/LinkedIn/email/phone hoạt động
- Responsive ở 375px (menu hamburger), 768px, 1440px
- Click card dự án mở modal, click overlay hoặc nút Đóng để đóng

- [ ] **Step 5: Commit cuối**

```bash
git add -A
git commit -m "feat: complete Portfolio with all sections

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

## Tổng kết tự review

- **Spec coverage:** Cả 7 section (Navbar, Home, About, Skills, Projects, Contact, Footer) + i18n + config đều có task. Avatar fallback (spec mục 7) ở Task 5; project placeholder ảnh (mục 7) ở Task 7; mailto + copy email (mục 7) ở Task 8.
- **Type consistency:** `useLanguage()` trả `{ lang, t, toggle }` nhất quán mọi task. `CONTACT` key `phoneDisplay` dùng ở Contact. `PROJECTS` field `descVi/descEn/longVi/longEn` nhất quán.
- **Placeholder scan:** Task 1 Step 11 mô tả CSS bằng yêu cầu thay vì code đầy đủ — đây là điểm duy nhất cần người thực thi tự viết CSS chi tiết, đã mô tả rõ biến màu và các class bắt buộc. Sửa: khi thực thi, viết CSS đầy đủ.
