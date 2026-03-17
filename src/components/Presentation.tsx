import { useState, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'

interface Props {
  children: ReactElement[]
}

export default function Presentation({ children }: Props) {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const total = children.length

  const goto = useCallback((index: number) => {
    if (transitioning || index < 0 || index >= total) return
    setTransitioning(true)
    setCurrent(index)
    setTimeout(() => setTransitioning(false), 600)
  }, [transitioning, total])

  const next = useCallback(() => goto(current + 1), [goto, current])
  const prev = useCallback(() => goto(current - 1), [goto, current])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen()
        else document.exitFullscreen()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const onMove = () => {
      setControlsVisible(true)
      clearTimeout(timer)
      timer = setTimeout(() => setControlsVisible(false), 3000)
    }
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); clearTimeout(timer) }
  }, [])

  // Slide-specific transitions
  const getTransition = (slideIndex: number) => {
    if (slideIndex === 0 || slideIndex === total - 1) return { duration: 700, type: 'zoom' }
    if (slideIndex === 7) return { duration: 600, type: 'zoom' } // Achievement
    return { duration: 500, type: 'default' }
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
      {children.map((child, i) => {
        const offset = i - current
        const isActive = i === current
        const isAdjacent = Math.abs(offset) <= 1
        const { duration, type } = getTransition(i)

        let transform: string
        let opacity: number
        if (isActive) {
          transform = 'scale(1)'; opacity = 1
        } else if (type === 'zoom') {
          transform = offset < 0 ? 'scale(1.1)' : 'scale(0.85)'
          opacity = 0
        } else {
          transform = offset < 0 ? 'scale(0.95) translateY(-3%)' : 'scale(0.95) translateY(3%)'
          opacity = 0
        }

        return (
          <div
            key={i}
            data-slide-active={isActive}
            data-slide-preload={isAdjacent}
            style={{
              position: 'absolute', inset: 0,
              transform, opacity,
              transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 10 : 0,
            }}
          >
            {child}
          </div>
        )
      })}

      {/* Progress */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '3px',
        background: 'rgba(255,255,255,0.05)', zIndex: 100,
      }}>
        <div style={{
          height: '100%', width: `${((current + 1) / total) * 100}%`,
          background: 'linear-gradient(90deg, #00A86B, #00B4D8)',
          transition: 'width 0.5s ease',
          boxShadow: '0 0 16px rgba(0,168,107,0.4)',
        }} />
      </div>

      {/* Controls */}
      <div style={{
        position: 'fixed', bottom: 'clamp(16px, 2vw, 32px)',
        left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 16px)',
        zIndex: 100,
        opacity: controlsVisible ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: controlsVisible ? 'auto' : 'none',
      }}>
        <button onClick={prev} disabled={current === 0} style={{
          width: 36, height: 36, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          cursor: current === 0 ? 'default' : 'pointer',
          opacity: current === 0 ? 0.3 : 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 16, fontWeight: 600, transition: 'all 0.3s',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>

        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {Array.from({ length: total }, (_, i) => (
            <button key={i} onClick={() => goto(i)} style={{
              width: i === current ? 22 : 6, height: 6, borderRadius: 100,
              border: 'none',
              background: i === current ? 'linear-gradient(90deg, #00A86B, #00B4D8)' : 'rgba(255,255,255,0.15)',
              cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: i === current ? '0 0 8px rgba(0,168,107,0.4)' : 'none',
            }} />
          ))}
        </div>

        <div style={{
          padding: '3px 10px', borderRadius: 100,
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>

        <button onClick={next} disabled={current === total - 1} style={{
          width: 36, height: 36, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          background: current === total - 1 ? 'rgba(255,255,255,0.08)' : 'linear-gradient(135deg, #00A86B, #0072CE)',
          backdropFilter: 'blur(12px)',
          cursor: current === total - 1 ? 'default' : 'pointer',
          opacity: current === total - 1 ? 0.3 : 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 16, fontWeight: 600, transition: 'all 0.3s',
          boxShadow: current < total - 1 ? '0 0 16px rgba(0,168,107,0.3)' : 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  )
}
