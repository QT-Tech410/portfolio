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
