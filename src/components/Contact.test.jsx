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
