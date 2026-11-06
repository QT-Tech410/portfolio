import { LanguageProvider } from './config/i18n'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Home />
      <main>
        <About />
        <Skills />
        <p>Portfolio skeleton</p>
      </main>
    </LanguageProvider>
  )
}
