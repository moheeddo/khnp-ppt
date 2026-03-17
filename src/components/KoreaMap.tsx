import { useEffect, useRef, useState } from 'react'

interface PlantMarker {
  name: string
  lat: number
  lng: number
  type: 'nuclear' | 'hydro' | 'pumped' | 'training'
  capacityMW?: number
  delay?: number
}

interface ConnectionLine {
  from: { lat: number; lng: number }
  to: { lat: number; lng: number }
  delay: number
}

interface Props {
  markers: PlantMarker[]
  style?: React.CSSProperties
  showLegend?: boolean
  compact?: boolean
  connections?: ConnectionLine[]
}

const GEO = {
  lonMin: 125.384480,
  lonMax: 130.921968,
  latMin: 33.194037,
  latMax: 38.612150,
}

const SVG_W = 524.23737
const SVG_H = 630.5871

function geoToPercent(lat: number, lng: number) {
  return {
    x: ((lng - GEO.lonMin) / (GEO.lonMax - GEO.lonMin)) * 100,
    y: ((GEO.latMax - lat) / (GEO.latMax - GEO.latMin)) * 100,
  }
}

const TYPE_CONFIG = {
  nuclear: { color: '#00E676', label: '원자력', dotSize: 14, glowSize: 24 },
  hydro: { color: '#00B4D8', label: '수력', dotSize: 8, glowSize: 14 },
  pumped: { color: '#7C4DFF', label: '양수', dotSize: 9, glowSize: 16 },
  training: { color: '#FF6D00', label: '교육센터', dotSize: 13, glowSize: 22 },
}

/**
 * Enhanced SVG connection beam with multi-layer glow + SMIL animations.
 * Uses SVG filters for proper glow rendering.
 */
function ConnectionBeam({ from, to, delay, index }: {
  from: { x: number; y: number }
  to: { x: number; y: number }
  delay: number
  index: number
}) {
  const filterId = `beam-glow-${index}`
  const gradId = `beam-grad-${index}`

  return (
    <g>
      {/* Per-beam filter for glow */}
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
        </filter>
        <linearGradient id={gradId} x1={from.x} y1={from.y} x2={to.x} y2={to.y} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6D00" />
          <stop offset="40%" stopColor="#FF9100" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>

      {/* Layer 1: Wide glow line (blurred) */}
      <line
        x1={from.x} y1={from.y} x2={from.x} y2={from.y}
        stroke="#FF6D00" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"
        filter={`url(#${filterId})`}
      >
        <animate attributeName="x2" to={to.x} dur="0.9s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
        <animate attributeName="y2" to={to.y} dur="0.9s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
      </line>

      {/* Layer 2: Sharp bright center line */}
      <line
        x1={from.x} y1={from.y} x2={from.x} y2={from.y}
        stroke={`url(#${gradId})`} strokeWidth="0.6" strokeLinecap="round" opacity="1"
      >
        <animate attributeName="x2" to={to.x} dur="0.8s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
        <animate attributeName="y2" to={to.y} dur="0.8s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
      </line>

      {/* Layer 3: Thin white core */}
      <line
        x1={from.x} y1={from.y} x2={from.x} y2={from.y}
        stroke="#fff" strokeWidth="0.2" strokeLinecap="round" opacity="0.7"
      >
        <animate attributeName="x2" to={to.x} dur="0.75s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
        <animate attributeName="y2" to={to.y} dur="0.75s" begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" keyTimes="0;1" />
      </line>

      {/* Layer 4: Flowing energy dashes (appear after line arrives) */}
      <line
        x1={from.x} y1={from.y} x2={to.x} y2={to.y}
        stroke="#FF9100" strokeWidth="0.35" strokeDasharray="2 3" strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" values="0;0.7" dur="0.2s" begin={`${delay + 0.8}s`} fill="freeze" />
        <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="2s" begin={`${delay + 0.8}s`} repeatCount="indefinite" />
      </line>

      {/* Layer 5: Main traveling energy orb */}
      <circle r="1.2" fill="#FF6D00" opacity="0" filter={`url(#${filterId})`}>
        <animate attributeName="opacity" values="0;1;1;0.3" keyTimes="0;0.1;0.8;1" dur="1.8s" begin={`${delay + 0.6}s`} repeatCount="indefinite" />
        <animateMotion dur="1.8s" begin={`${delay + 0.6}s`} repeatCount="indefinite" path={`M${from.x},${from.y} L${to.x},${to.y}`} />
      </circle>

      {/* Layer 6: White core dot (inner) */}
      <circle r="0.5" fill="#fff" opacity="0">
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.8;1" dur="1.8s" begin={`${delay + 0.6}s`} repeatCount="indefinite" />
        <animateMotion dur="1.8s" begin={`${delay + 0.6}s`} repeatCount="indefinite" path={`M${from.x},${from.y} L${to.x},${to.y}`} />
      </circle>

      {/* Layer 7: Trail particle (behind main dot) */}
      <circle r="0.7" fill="#FF9100" opacity="0">
        <animate attributeName="opacity" values="0;0.5;0.5;0" dur="1.8s" begin={`${delay + 0.8}s`} repeatCount="indefinite" />
        <animateMotion dur="1.8s" begin={`${delay + 0.8}s`} repeatCount="indefinite" path={`M${from.x},${from.y} L${to.x},${to.y}`} />
      </circle>

      {/* Layer 8: Endpoint arrival burst - expanding ring */}
      <circle cx={to.x} cy={to.y} r="0.8" fill="none" stroke="#00E5FF" strokeWidth="0.4" opacity="0">
        <animate attributeName="opacity" values="0;0;0.9;0" keyTimes="0;0.3;0.5;1" dur="2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
        <animate attributeName="r" values="0.8;4;6" dur="2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
        <animate attributeName="stroke-width" values="0.4;0.2;0.05" dur="2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
      </circle>

      {/* Layer 9: Endpoint arrival flash */}
      <circle cx={to.x} cy={to.y} r="1.5" fill="#00E5FF" opacity="0">
        <animate attributeName="opacity" values="0;0;0.6;0" keyTimes="0;0.35;0.5;1" dur="2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
        <animate attributeName="r" values="0.5;1.5;0.5" dur="2s" begin={`${delay + 1}s`} repeatCount="indefinite" />
      </circle>
    </g>
  )
}

export default function KoreaMap({ markers, style, showLegend = true, compact = false, connections }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current?.closest('[data-slide-active]')
    if (!el) return
    const check = () => setActive(el.getAttribute('data-slide-active') === 'true')
    check()
    const obs = new MutationObserver(check)
    obs.observe(el, { attributes: true, attributeFilter: ['data-slide-active'] })
    return () => obs.disconnect()
  }, [])

  const types = [...new Set(markers.map(m => m.type))]

  const getLabelPosition = (m: PlantMarker, i: number) => {
    const dotSize = compact ? Math.round(TYPE_CONFIG[m.type].dotSize * 0.75) : TYPE_CONFIG[m.type].dotSize
    const sameTypeIdx = markers.filter((om, oi) => om.type === m.type && oi <= i).length - 1
    return sameTypeIdx % 2 === 0 ? -(dotSize + 22) : dotSize + 6
  }

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'relative',
          height: '100%',
          aspectRatio: `${SVG_W} / ${SVG_H}`,
          maxWidth: '100%',
        }}>
          {/* Map SVG base */}
          <img src="/korea-map.svg" alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'fill', opacity: 0.35,
            filter: 'brightness(0.6) sepia(1) saturate(3) hue-rotate(100deg)',
          }} />
          {/* Glow layer */}
          <img src="/korea-map.svg" alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'fill', opacity: 0.12,
            filter: 'brightness(0.5) sepia(1) saturate(5) hue-rotate(100deg) blur(20px)',
          }} />
          {/* Edge highlight */}
          <img src="/korea-map.svg" alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'fill', opacity: 0.08,
            filter: 'brightness(2) sepia(1) saturate(3) hue-rotate(100deg) blur(1px)',
          }} />

          {/* === SVG Connection Lines Overlay === */}
          {connections && connections.length > 0 && active && (
            <svg
              key="conn-active"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                zIndex: 3, pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              <defs>
                {/* Global glow filter for HQ burst */}
                <filter id="hqGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
                </filter>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                </filter>
              </defs>

              {/* HQ origin burst - multiple layers */}
              {(() => {
                const hq = geoToPercent(connections[0].from.lat, connections[0].from.lng)
                return (
                  <g>
                    {/* Outer pulsing glow */}
                    <circle cx={hq.x} cy={hq.y} r="1" fill="#FF6D00" opacity="0.3" filter="url(#hqGlow)">
                      <animate attributeName="r" values="2;8;2" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Middle ring */}
                    <circle cx={hq.x} cy={hq.y} r="1" fill="none" stroke="#FF6D00" strokeWidth="0.3" opacity="0.6">
                      <animate attributeName="r" values="1;5;1" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Core bright dot */}
                    <circle cx={hq.x} cy={hq.y} r="1.5" fill="#FF6D00" opacity="0.9">
                      <animate attributeName="r" values="1.2;1.8;1.2" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0.6;0.9" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    {/* White core */}
                    <circle cx={hq.x} cy={hq.y} r="0.6" fill="#fff" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )
              })()}

              {/* Connection beams */}
              {connections.map((conn, i) => {
                const from = geoToPercent(conn.from.lat, conn.from.lng)
                const to = geoToPercent(conn.to.lat, conn.to.lng)
                return <ConnectionBeam key={i} from={from} to={to} delay={conn.delay} index={i} />
              })}
            </svg>
          )}

          {/* HQ origin CSS effects (properly aspect-ratio handled) */}
          {connections && connections.length > 0 && active && (() => {
            const hq = geoToPercent(connections[0].from.lat, connections[0].from.lng)
            return (
              <div style={{
                position: 'absolute',
                left: `${hq.x}%`, top: `${hq.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 4, pointerEvents: 'none',
              }}>
                {/* Multiple expanding rings */}
                {[0, 1, 2].map(ring => (
                  <div key={ring} style={{
                    position: 'absolute',
                    inset: -(20 + ring * 14),
                    borderRadius: '50%',
                    border: `2px solid rgba(255,109,0,${0.6 - ring * 0.15})`,
                    animation: `mapPing ${1.8 + ring * 0.4}s ease-out infinite ${ring * 0.4}s`,
                  }} />
                ))}
                {/* Glowing center orb */}
                <div style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: 'radial-gradient(circle, #fff 20%, #FF6D00 60%, transparent 100%)',
                  boxShadow: '0 0 20px rgba(255,109,0,1), 0 0 40px rgba(255,109,0,0.6), 0 0 60px rgba(255,109,0,0.3)',
                  transform: 'translate(-9px, -9px)',
                  animation: 'pulseGlow 2s ease-in-out infinite',
                }} />
              </div>
            )
          })()}

          {/* Endpoint CSS glow effects */}
          {connections && connections.length > 0 && active && connections.map((conn, i) => {
            const to = geoToPercent(conn.to.lat, conn.to.lng)
            return (
              <div key={`ep-${i}`} style={{
                position: 'absolute',
                left: `${to.x}%`, top: `${to.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 4, pointerEvents: 'none',
              }}>
                {/* Outer glow ring */}
                <div style={{
                  position: 'absolute',
                  inset: -16,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0,229,255,0.4)',
                  opacity: 0,
                  animation: `connEndGlow 2.5s ease-in-out infinite ${conn.delay + 1}s`,
                }} />
                {/* Inner glow */}
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  transform: 'translate(-12px, -12px)',
                  background: 'radial-gradient(circle, rgba(0,229,255,0.6) 0%, rgba(0,229,255,0.2) 40%, transparent 70%)',
                  opacity: 0,
                  animation: `connEndGlow 2.5s ease-in-out infinite ${conn.delay + 1.2}s`,
                }} />
              </div>
            )
          })}

          {/* Markers */}
          {markers.map((m, i) => {
            const { x, y } = geoToPercent(m.lat, m.lng)
            const cfg = TYPE_CONFIG[m.type]
            const delay = m.delay ?? i * 0.08
            const dotSize = compact ? Math.round(cfg.dotSize * 0.75) : cfg.dotSize

            return (
              <div key={`${m.type}-${m.name}-${i}`} style={{
                position: 'absolute', left: `${x}%`, top: `${y}%`,
                transform: active ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.5)',
                opacity: active ? 1 : 0,
                transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
                zIndex: m.type === 'nuclear' ? 10 : m.type === 'training' ? 9 : 5,
              }}>
                {(m.type === 'nuclear' || m.type === 'training') && (
                  <div style={{
                    position: 'absolute',
                    inset: -(dotSize * 1.1),
                    borderRadius: '50%',
                    border: `2px solid ${cfg.color}`,
                    opacity: 0.6,
                    animation: active ? `mapPing 2.5s ease-out infinite ${delay}s` : 'none',
                  }} />
                )}
                <div style={{
                  position: 'absolute',
                  inset: -(cfg.glowSize * 1.2),
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${cfg.color}40, transparent 65%)`,
                }} />
                <div style={{
                  width: dotSize, height: dotSize, borderRadius: '50%',
                  background: m.type === 'nuclear'
                    ? `linear-gradient(135deg, ${cfg.color}, #00A86B)`
                    : m.type === 'training'
                    ? `linear-gradient(135deg, ${cfg.color}, #FFab00)`
                    : cfg.color,
                  border: `2px solid rgba(255,255,255,${m.type === 'nuclear' || m.type === 'training' ? 0.6 : 0.35})`,
                  boxShadow: `0 0 ${cfg.glowSize}px ${cfg.color}90`,
                  position: 'relative', zIndex: 2,
                }} />
                {(!compact || m.type === 'nuclear' || m.type === 'training') && (
                  <div style={{
                    position: 'absolute',
                    top: getLabelPosition(m, i),
                    left: '50%', transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap', padding: '3px 10px', borderRadius: 6,
                    background: 'rgba(0,0,0,0.75)', border: `1px solid ${cfg.color}60`,
                    backdropFilter: 'blur(8px)',
                    fontSize: compact ? 'clamp(10px, 0.75vw, 14px)' : 'clamp(11px, 0.85vw, 16px)',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.95)', zIndex: 3,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}>
                    {m.name}
                    {m.capacityMW && !compact && (
                      <span style={{ color: cfg.color, fontWeight: 800, marginLeft: 4, fontSize: '90%' }}>
                        {m.capacityMW >= 1000 ? `${(m.capacityMW / 1000).toFixed(1)}GW` : `${m.capacityMW}MW`}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })}

          {/* Legend */}
          {showLegend && (
            <div style={{
              position: 'absolute', bottom: compact ? 4 : 8, left: compact ? 4 : 8,
              display: 'flex', gap: compact ? 8 : 12, flexWrap: 'wrap',
              padding: compact ? '4px 8px' : '6px 12px',
              borderRadius: 8,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 20,
            }}>
              {types.map(t => {
                const cfg = TYPE_CONFIG[t]
                const count = markers.filter(m => m.type === t).length
                return (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{
                      width: compact ? 6 : 8, height: compact ? 6 : 8, borderRadius: '50%',
                      background: cfg.color, boxShadow: `0 0 8px ${cfg.color}`,
                    }} />
                    <span style={{
                      fontSize: compact ? 'clamp(8px, 0.5vw, 10px)' : 'clamp(10px, 0.7vw, 13px)',
                      color: 'rgba(255,255,255,0.7)', fontWeight: 600,
                    }}>
                      {cfg.label} {count}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
