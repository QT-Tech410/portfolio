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
