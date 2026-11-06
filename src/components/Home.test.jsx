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
