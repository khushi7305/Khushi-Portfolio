
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { projects } from '../data'
import Art from './Art'
import { Squiggle } from './Bits'
import Wave from './Wave'

// Original scattered-card positions
const scatter = [
  { x: 90, y: 60, r: -9 },
  { x: 0, y: 140, r: 7 },
  { x: -90, y: 40, r: -5 },
]

// Individual project card
function ProjectCard({ p, i }) {
  const github = p.github || (
    p.link && !p.live ? p.link : ''
  )

  const live = p.live || ''

  return (
    <article className="wk-card">

      {/* PROJECT ARTWORK */}
      <div
        className="wk-window"
        style={{ background: p.color }}
      >
        <div className="wk-bar">
          <i />
          <i />
          <i />

          <span>
            {p.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')}
            .app
          </span>
        </div>

        <div className="wk-art">
          {p.image ? (
            <img
              src={p.image.startsWith('/')
                ? p.image
                : `/${p.image}`}
              alt={`${p.title} project preview`}
              loading="lazy"
            />
          ) : (
            <Art kind={p.visual} />
          )}
        </div>
      </div>

      {/* PROJECT DETAILS */}
      <div className="wk-body">

        <div className="wk-top">
          <span className="wk-no">
            {String(i + 1).padStart(2, '0')}
          </span>

          <span className="wk-tag">
            {p.tag}
          </span>
        </div>

        <h3>{p.title}</h3>

        <p>{p.text}</p>

        {/* TECHNOLOGIES */}
        <div className="chips">
          {p.tech.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT LINKS */}
        <div
          className="wk-actions"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginTop: '22px',
          }}
        >

          {github && (
            <a
              className="wk-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>
          )}

          {live && (
            <a
              className="wk-link"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span>↗</span>
            </a>
          )}

          {!github && !live && (
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                opacity: 0.65,
              }}
            >
              Internal Project
            </span>
          )}

        </div>
      </div>
    </article>
  )
}

/**
 * Featured project cards begin scattered
 * and settle into a tidy grid on scroll.
 */
export default function Work() {
  const root = useRef(null)

  useGSAP(() => {
    // Animate heading underline
    gsap.to('.wk-title .squiggle path', {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',

      scrollTrigger: {
        trigger: '.wk-title',
        start: 'top 80%',
      },
    })

    const mm = gsap.matchMedia()

    // Desktop: scattered cards settle into position
    mm.add('(min-width: 1001px)', () => {
      gsap.utils
        .toArray('.wk-card', root.current)
        .forEach((card, index) => {
          const position = scatter[index % scatter.length]

          gsap.fromTo(
            card,
            {
              x: position.x,
              y: position.y,
              rotate: position.r,
            },
            {
              x: 0,
              y: 0,
              rotate: 0,
              ease: 'none',

              scrollTrigger: {
                trigger: '.wk-cards',
                start: 'top 95%',
                end: 'top 35%',
                scrub: 0.6,
              },
            }
          )
        })
    })

    // Tablet/mobile: fade cards upward
    mm.add('(max-width: 1000px)', () => {
      gsap.utils
        .toArray('.wk-card', root.current)
        .forEach((card, index) => {
          gsap.from(card, {
            y: 60,
            rotate: index % 2 ? 4 : -4,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          })
        })
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <section
      className="work section"
      id="work"
      ref={root}
    >
      <Wave flip />

      <div className="wrap">

        {/* SECTION HEADER */}
        <div className="sec-head">
          <span className="pill">
            Selected work
          </span>

          <h2 className="h2 wk-title">
            Things I've{' '}
            <span className="hl">
              made
              <Squiggle />
            </span>
          </h2>

          <p className="hand sec-note">
            scroll to tidy up the table ↓
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="wk-cards">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              p={project}
              i={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
