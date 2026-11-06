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
