
import { useEffect, useRef, useState } from 'react'
import { gsap, goTo } from '../lib/motion'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Journey', '#journey'],
  ['Toolbox', '#skills'],
  ['Milestones', '#milestones'],
]

export default function Nav({ ready }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!ready || !ref.current) return

    const animation = gsap.from(ref.current, {
      y: -80,
      opacity: 0,
      duration: 1.1,
      delay: 0.3,
    })

    return () => animation.kill()
  }, [ready])

  const go = (event, href) => {
    event.preventDefault()
    setOpen(false)
    goTo(href)
  }

  return (
    <header
      className={`nav ${open ? 'is-open' : ''}`}
      ref={ref}
    >
      {/* LOGO AND NAME */}
      <a
        href="#top"
        className="nav-brand"
        onClick={(event) => go(event, '#top')}
      >
        <img
          src={`/${profile.avatar}`}
          alt=""
        />

        <span>
          {profile.name.toLowerCase()}
          <em>.</em>
        </span>
      </a>

      {/* DESKTOP NAVIGATION */}
      <nav
        className="nav-links"
        aria-label="Primary"
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={(event) => go(event, href)}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CONTACT BUTTON */}
      <a
        href="#contact"
        className="btn btn-coral nav-cta"
        onClick={(event) => go(event, '#contact')}
      >
        Let's chat <span>✦</span>
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="nav-burger"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <i />
        <i />
      </button>

      {/* MOBILE NAVIGATION */}
      <div className="nav-sheet">
        {[
          ...links,
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={(event) => go(event, href)}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
