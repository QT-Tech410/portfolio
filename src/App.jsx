import { LanguageProvider } from './config/i18n'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Home />
      <main>
        <p>Portfolio skeleton</p>
      </main>
    </LanguageProvider>
  )
}
