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
