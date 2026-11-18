
import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP, ScrollTrigger } from '../lib/motion'
import { journey, profile } from '../data'
import { Squiggle } from './Bits'

export default function Journey() {
  const root = useRef(null)
  const list = useRef(null)
  const trail = useRef(null)
  const walker = useRef(null)

  const [d, setD] = useState('')
  const [box, setBox] = useState({ w: 0, h: 0 })

  // Convert public image paths into root-relative URLs.
  const imagePath = (src) =>
    src.startsWith('/') ? src : `/${src}`

  // Build the winding road through the timeline dots.
  useEffect(() => {
    const build = () => {
      const element = list.current
      if (!element) return

      const rect = element.getBoundingClientRect()

      const points = [
        ...element.querySelectorAll('.jr-dot'),
      ].map((dot) => {
        const bounds = dot.getBoundingClientRect()

        return [
          bounds.left - rect.left + bounds.width / 2,
          bounds.top - rect.top + bounds.height / 2,
        ]
      })

      if (!points.length) return

      const mobile = window.innerWidth < 760
      const amplitude = mobile
        ? 22
        : Math.min(260, rect.width * 0.2)

      const start = [points[0][0], 0]

      let path = `M ${start[0]} ${start[1]} `
      let previous = start

      points
        .concat([[points[points.length - 1][0], rect.height]])
        .forEach((point, index) => {
          const direction = index % 2 ? 1 : -1
          const dy = (point[1] - previous[1]) / 2

          path += `C ${
            previous[0] + amplitude * direction
          } ${
            previous[1] + dy
          }, ${
            point[0] + amplitude * direction
          } ${
            point[1] - dy
          }, ${
            point[0]
          } ${
            point[1]
          } `

          previous = point
        })

      setBox({
        w: rect.width,
        h: rect.height,
      })

      setD(path)
    }

    build()

    const observer = new ResizeObserver(build)

    if (list.current) {
      observer.observe(list.current)
    }

    window.addEventListener('load', build)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', build)
    }
  }, [])

  // Animate the road and avatar while scrolling.
  useEffect(() => {
    if (!d || !trail.current || !walker.current) return

    const path = trail.current
    const avatar = walker.current

    const length = path.getTotalLength()

    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    const updatePosition = (progress) => {
      const position = path.getPointAtLength(
        length * progress
      )

      path.style.strokeDashoffset = `${
        length * (1 - progress)
      }`

      avatar.style.transform = `translate(${position.x}px, ${position.y}px)`
    }

    updatePosition(0)

    const trigger = ScrollTrigger.create({
      trigger: list.current,
      start: 'top 65%',
      end: 'bottom 65%',
      scrub: 0.4,

      onUpdate: (self) => {
        updatePosition(self.progress)
      },
    })

    ScrollTrigger.refresh()

    return () => {
      trigger.kill()
    }
  }, [d])

  // Entrance animations for the journey cards.
  useGSAP(() => {
    gsap.to('.jr-title .squiggle path', {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',

      scrollTrigger: {
        trigger: '.jr-title',
        start: 'top 80%',
      },
    })

    gsap.utils
      .toArray('.jr-item', root.current)
      .forEach((item, index) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 78%',
          },
        })

        timeline
          .from(item.querySelector('.polaroid'), {
            y: 60,
            rotate: index % 2 ? 14 : -14,
            scale: 0.8,
            opacity: 0,
            duration: 1.1,
            ease: 'back.out(1.6)',
          })
          .from(item.querySelector('.jr-card'), {
            x: index % 2 ? -50 : 50,
            opacity: 0,
            duration: 1,
          }, 0.15)
          .from(item.querySelector('.jr-dot'), {
            scale: 0,
            duration: 0.6,
            ease: 'back.out(3)',
          }, 0.1)
      })
  }, { scope: root })

  return (
    <section
      className="journey section"
      id="journey"
      ref={root}
    >
      <div className="wrap">

        {/* SECTION HEADING */}
        <div className="sec-head center">
          <span className="pill">
            My journey
          </span>

          <h2 className="h2 jr-title">
            The story{' '}
            <span className="hl">
              so far
              <Squiggle />
            </span>
          </h2>

          <p className="hand sec-note">
            follow the road ↓
          </p>
        </div>

        {/* JOURNEY TIMELINE */}
        <ol className="jr-list" ref={list}>

          <svg
            className="jr-map"
            width={box.w}
            height={box.h}
            viewBox={`0 0 ${box.w || 1} ${box.h || 1}`}
            aria-hidden="true"
          >
            <path
              d={d}
              className="jr-road"
            />

            <path
              ref={trail}
              d={d}
              className="jr-trail"
            />
          </svg>

          {/* YOUR ILLUSTRATED AVATAR */}
          <span
            className="jr-walker"
            ref={walker}
            aria-hidden="true"
          >
            <img
              src={imagePath(profile.avatar)}
              alt=""
            />
          </span>

          {/* JOURNEY CARDS */}
          {journey.map((item, index) => (
            <li
              className={`jr-item ${
                index % 2 ? 'flip' : ''
              }`}
              key={`${item.year}-${item.title}`}
            >
              <figure
                className="polaroid"
                style={{
                  '--r': `${
                    index % 2 ? 4 : -4
                  }deg`,
                }}
              >
                <span className="tape" />

                <img
                  src={imagePath(
                    item.photo || profile.avatar
                  )}
                  alt={`${item.title} at ${item.org}`}
                  loading="lazy"
                />

                <figcaption className="hand">
                  {item.note}
                </figcaption>
              </figure>

              <span className="jr-dot" />

              <div className="jr-card">
                <span className="jr-year hand">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <span className="jr-org">
                  {item.org}
                </span>

                <p>{item.text}</p>
              </div>
            </li>
          ))}

        </ol>
      </div>
    </section>
  )
}
