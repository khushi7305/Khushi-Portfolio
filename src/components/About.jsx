
import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { about, profile } from '../data'
import { Squiggle } from './Bits'
import Wave from './Wave'

function PhotoStack() {
  const stackRef = useRef(null)
  const [active, setActive] = useState(0)

  const roles = about.roles

  const nextCard = () => {
    setActive((previous) => (previous + 1) % roles.length)
  }

  return (
    <div className="stack" ref={stackRef}>
      {roles.map((role, index) => {
        const position =
          (index - active + roles.length) % roles.length

        return (
          <figure
            key={role}
            className={`stack-card ${
              position === 0 ? 'is-top' : ''
            }`}
            onClick={nextCard}
            style={{
              zIndex: roles.length - position,
              transform: `
                translate(
                  ${position * 8}px,
                  ${position * -8}px
                )
                rotate(${position * 5 - 5}deg)
                scale(${1 - position * 0.035})
              `,
              cursor: 'pointer',
              transition:
                'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img
              src={`/${profile.avatar}`}
              alt={`${profile.full} - ${role}`}
              loading="lazy"
            />

            <figcaption>
              <span className="role-kicker hand">
                I'm a
              </span>

              <span className="role-name">
                {role}
              </span>
            </figcaption>
          </figure>
        )
      })}

      <p
        className="hand"
        style={{
          textAlign: 'center',
          marginTop: '24px',
          fontSize: '14px',
        }}
      >
        ✦ click the cards to explore my roles
      </p>
    </div>
  )
}

export default function About() {
  const root = useRef(null)

  useGSAP(() => {
    gsap.from('.stack-card', {
      y: 80,
      opacity: 0,
      scale: 0.85,
      stagger: 0.12,
      duration: 1,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.stack',
        start: 'top 75%',
      },
    })

    gsap.from('.ab-copy > *', {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: '.ab-copy',
        start: 'top 80%',
      },
    })

    gsap.to('.ab-title .squiggle path', {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.ab-title',
        start: 'top 80%',
      },
    })

    gsap.from('.ab-stat', {
      y: 40,
      opacity: 0,
      scale: 0.9,
      stagger: 0.08,
      duration: 0.9,
      ease: 'back.out(1.8)',
      scrollTrigger: {
        trigger: '.ab-stats',
        start: 'top 88%',
      },
    })
  }, { scope: root })

  return (
    <section
      className="about section tint"
      id="about"
      ref={root}
    >
      <Wave />

      <div className="wrap ab-grid">

        {/* ANIMATED PHOTO FLASHCARDS */}
        <PhotoStack />

        {/* ABOUT ME CONTENT */}
        <div className="ab-copy">

          <span className="pill">About me</span>

          <h2 className="h2 ab-title">
            A little{' '}
            <span className="hl">
              about me
              <Squiggle />
            </span>
          </h2>

          {about.paragraphs.map((paragraph, index) => (
            <p className="lead" key={index}>
              {paragraph}
            </p>
          ))}

          <div className="ab-stats">
            {about.stats.map((stat) => (
              <div className="ab-stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
