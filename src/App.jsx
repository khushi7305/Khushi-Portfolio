
import { useEffect, useState } from 'react'
import { startScroll, lenis, ScrollTrigger } from './lib/motion'
import { profile } from './data'

import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Milestones from './components/Milestones'
import Contact from './components/Contact'

// Load an image before displaying the portfolio.
const loadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image()

    image.onload = resolve
    image.onerror = resolve

    image.src = src
  })

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Initialize smooth scrolling.
    startScroll()

    const startTime = performance.now()

    // Wait for fonts and your illustrated avatar.
    Promise.all([
      document.fonts?.ready,
      loadImage(
        `${import.meta.env.BASE_URL}${profile.avatar.replace(/^\/+/, '')}`
      ),
    ]).then(() => {
      const elapsed = performance.now() - startTime
      const remaining = Math.max(0, 1500 - elapsed)

      setTimeout(() => {
        setLoaded(true)
      }, remaining)
    })
  }, [])

  // Reveal the website after the loading animation.
  const finish = () => {
    setReady(true)
    lenis?.start()
    ScrollTrigger.refresh()
  }

  return (
    <>
      {/* LOADING SCREEN */}
      <Loader
        done={loaded}
        onFinish={finish}
      />

      {/* NAVIGATION */}
      <Nav ready={ready} />

      {/* PORTFOLIO SECTIONS */}
      <main>
        <Hero ready={ready} />
        <About />
        <Work />
        <Journey />
        <Skills />
        <Milestones />
        <Contact />
      </main>
    </>
  )
}
