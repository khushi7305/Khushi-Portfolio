
import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'
import { profile } from '../data'

export default function Loader({ done, onFinish }) {
  const root = useRef(null)
  const finish = useRef(onFinish)

  finish.current = onFinish

  // Animate the avatar, greeting, and loading bar.
  useEffect(() => {
    const element = root.current
    if (!element) return

    gsap.fromTo(
      element.querySelector('.ld-face'),
      {
        scale: 0,
        rotate: -20,
      },
      {
        scale: 1,
        rotate: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.55)',
      }
    )

    gsap.fromTo(
      element.querySelector('.ld-bubble'),
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: 0.5,
        duration: 0.8,
        ease: 'back.out(2.5)',
      }
    )

    gsap.fromTo(
      element.querySelector('.ld-bar i'),
      {
        scaleX: 0,
      },
      {
        scaleX: 0.85,
        duration: 2,
        ease: 'power2.out',
      }
    )
  }, [])

  // Finish loading and reveal the website.
  useEffect(() => {
    if (!done || !root.current) return

    const element = root.current

    const timeline = gsap.timeline()

    timeline
      .to(element.querySelector('.ld-bar i'), {
        scaleX: 1,
        duration: 0.3,
      })
      .to(
        element.querySelectorAll(
          '.ld-face, .ld-bubble, .ld-bar'
        ),
        {
          scale: 0.6,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.in(2)',
        }
      )
      .add(() => finish.current?.())
      .to(
        element,
        {
          yPercent: -100,
          duration: 0.9,
          ease: 'expo.inOut',
        },
        '-=0.1'
      )
      .set(element, {
        display: 'none',
      })

    return () => {
      timeline.kill()
    }
  }, [done])

  return (
    <div
      className="loader"
      ref={root}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="ld-stack">

        {/* PERSONALIZED GREETING */}
        <span className="ld-bubble hand">
          hi, it's {profile.name}! 👋
        </span>

        {/* YOUR ILLUSTRATED AVATAR */}
        <img
          className="ld-face"
          src={`/${profile.avatar}`}
          alt={`Illustration of ${profile.full}`}
        />

        {/* ANIMATED LOADING BAR */}
        <div className="ld-bar">
          <i />
        </div>

      </div>
    </div>
  )
}
