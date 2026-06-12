import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/imgfolder/worldwidebizlogo.png'
import phoneIcon from '../assets/imgfolder/phoneicon.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isPolicy = pathname === '/privacy-policy' || pathname === '/terms'

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isPolicy) {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.body.classList.toggle('menu-open', menuOpen)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    close()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`header${isPolicy ? ' header--policy' : ''}`}>
        <div className="container header__inner">
          <a href="/" className="header__logo" onClick={handleLogoClick}>
            <img src={logo} alt="Worldwide Biz Consultants Inc" />
          </a>

          {!isPolicy && (
            <nav className="header__nav">
              <a href="#home"     className="header__nav-link active" onClick={scrollTo('home')}>Home</a>
              <a href="#about"    className="header__nav-link"        onClick={scrollTo('about')}>About</a>
              <a href="#services" className="header__nav-link"        onClick={scrollTo('services')}>Services</a>
              <a href="#packages" className="header__nav-link"        onClick={scrollTo('packages')}>Packages</a>
              <a href="#faqs"     className="header__nav-link"        onClick={scrollTo('faqs')}>FAQs</a>
            </nav>
          )}

          <a href="#get-started" className="header__cta" onClick={scrollTo('get-started')}>
            <img src={phoneIcon} alt="" className="header__cta-icon" />
            Book a Call
          </a>

          {!isPolicy && (
            <button
              className={`header__hamburger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </header>

      {!isPolicy && (
        <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
          <button className="mobile-menu__close" onClick={close} aria-label="Close menu">
            <span></span>
            <span></span>
          </button>
          <a href="#home"     className="mobile-menu__link" onClick={scrollTo('home')}>Home</a>
          <a href="#about"    className="mobile-menu__link" onClick={scrollTo('about')}>About</a>
          <a href="#services" className="mobile-menu__link" onClick={scrollTo('services')}>Services</a>
          <a href="#packages" className="mobile-menu__link" onClick={scrollTo('packages')}>Packages</a>
          <a href="#faqs"     className="mobile-menu__link" onClick={scrollTo('faqs')}>FAQs</a>
          <a href="#get-started" className="header__cta header__cta--mobile" onClick={scrollTo('get-started')}>
            <img src={phoneIcon} alt="" className="header__cta-icon" />
            Book a Call
          </a>
        </div>
      )}

      {!isPolicy && menuOpen && <div className="mobile-menu__backdrop" onClick={close} />}
    </>
  )
}
