
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { profile } from '../data'

export default function LookAt({
  className = '',
  label = 'Portrait',
}) {
  const imageRef = useRef(null)

  useGSAP(() => {
    const image = imageRef.current
    if (!image) return

    const move = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12
      const y = (event.clientY / window.innerHeight - 0.5) * 8

      gsap.to(image, {
        rotationY: x,
        rotationX: -y,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const reset = () => {
      gsap.to(image, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('blur', reset)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('blur', reset)
    }
  }, [])

  return (
    <img
      ref={imageRef}
      className={className}
      src={`/${profile.avatar}`}
      alt={label === 'Portrait' ? `Illustration of ${profile.full}` : label}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    />
  )
}
