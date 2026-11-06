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
  fireEvent.click(screen.getAllByText('Chi tiết')[0])
  expect(screen.getByText(/Công nghệ/i)).toBeInTheDocument()
  expect(screen.getByText('Xem trên GitHub')).toHaveAttribute(
    'href',
    'https://github.com/QT-Tech410/DriverSafeIoT'
  )
})
