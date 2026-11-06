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
  expect(screen.getByText(/Laravel/)).toBeInTheDocument()
})
