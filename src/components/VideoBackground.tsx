import { useRef, useEffect, useState } from 'react'

interface Props {
  src: string
  overlay?: boolean
  overlayOpacity?: number
}

export default function VideoBackground({ src, overlay = true, overlayOpacity = 0.55 }: Props) {
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const activeRef = useRef<'A' | 'B'>('A')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const slideWrapper = container.closest('[data-slide-active]') || container.closest('[data-slide-preload]')
    if (!slideWrapper) return

    const videoA = videoARef.current
    const videoB = videoBRef.current
    if (!videoA || !videoB) return

    const crossfadeDuration = 1.5 // seconds before end to start crossfade

    const handleTimeUpdate = () => {
      const current = activeRef.current === 'A' ? videoA : videoB
      const next = activeRef.current === 'A' ? videoB : videoA

      if (current.duration && current.currentTime >= current.duration - crossfadeDuration) {
        // Start crossfade
        const progress = (current.duration - current.currentTime) / crossfadeDuration
        current.style.opacity = String(Math.max(0, progress))

        if (next.paused) {
          next.currentTime = 0
          next.style.opacity = '0'
          next.play().catch(() => {})
        }
        next.style.opacity = String(Math.max(0, 1 - progress))
      }
    }

    const handleEnded = () => {
      const current = activeRef.current === 'A' ? videoA : videoB
      const next = activeRef.current === 'A' ? videoB : videoA
      current.style.opacity = '0'
      current.pause()
      next.style.opacity = '1'
      next.currentTime = 0
      next.play().catch(() => {})
      activeRef.current = activeRef.current === 'A' ? 'B' : 'A'
    }

    const initVideos = () => {
      if (!loaded) {
        videoA.src = src
        videoB.src = src
        videoA.load()
        videoB.load()
        setLoaded(true)
      }
    }

    const startPlayback = () => {
      videoA.playbackRate = 0.7
      videoB.playbackRate = 0.7
      videoA.style.opacity = '1'
      videoB.style.opacity = '0'
      activeRef.current = 'A'
      videoA.currentTime = 0
      videoA.play().catch(() => {})
    }

    const observer = new MutationObserver(() => {
      const isActive = slideWrapper.getAttribute('data-slide-active') === 'true'
      const isPreload = slideWrapper.getAttribute('data-slide-preload') === 'true'

      if (isActive || isPreload) {
        initVideos()
        if (isActive) startPlayback()
      } else {
        videoA.pause()
        videoB.pause()
      }
    })

    observer.observe(slideWrapper, { attributes: true, attributeFilter: ['data-slide-active', 'data-slide-preload'] })

    videoA.addEventListener('timeupdate', handleTimeUpdate)
    videoA.addEventListener('ended', handleEnded)
    videoB.addEventListener('timeupdate', handleTimeUpdate)
    videoB.addEventListener('ended', handleEnded)

    // Initial check
    if (slideWrapper.getAttribute('data-slide-active') === 'true') {
      initVideos()
      startPlayback()
    }

    return () => {
      observer.disconnect()
      videoA.removeEventListener('timeupdate', handleTimeUpdate)
      videoA.removeEventListener('ended', handleEnded)
      videoB.removeEventListener('timeupdate', handleTimeUpdate)
      videoB.removeEventListener('ended', handleEnded)
    }
  }, [src, loaded])

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%', height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',
  }

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <video ref={videoARef} muted playsInline style={{ ...videoStyle, opacity: 1 }} />
      <video ref={videoBRef} muted playsInline style={{ ...videoStyle, opacity: 0 }} />
      {overlay && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(0,0,0,${overlayOpacity * 0.8}) 0%, rgba(0,0,0,${overlayOpacity}) 50%, rgba(0,0,0,${overlayOpacity * 1.1}) 100%)`,
        }} />
      )}
    </div>
  )
}
