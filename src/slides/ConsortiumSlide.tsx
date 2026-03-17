import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const DATA = [
  { year: "'20", sessions: 21, participants: 382 },
  { year: "'21", sessions: 21, participants: 435 },
  { year: "'22", sessions: 24, participants: 462 },
  { year: "'23", sessions: 28, participants: 550 },
  { year: "'24", sessions: 35, participants: 638 },
  { year: "'25", sessions: 32, participants: 599 },
]

export default function ConsortiumSlide() {
  const maxP = 700
  const maxS = 40

  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-cover.mp4" overlayOpacity={0.72} />
      <SlideHeader page={6} centerText="컨소시엄 교육현황" />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        {/* Section Title */}
        <div className="entrance" style={{ marginBottom: 'clamp(14px, 1.4vw, 24px)' }}>
          <span className="accent-tag">CONSORTIUM EDUCATION</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            컨소시엄 교육현황
          </h2>
        </div>

        {/* Hero KPIs - 3 columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 1vw, 18px)', marginBottom: 'clamp(14px, 1.4vw, 24px)',
        }}>
          {[
            { value: '599', unit: '명', label: '2025 참가인원', sub: '500명+ 대규모 교육', color: '#00A86B', glow: true },
            { value: '35', unit: '회', label: '최대 시행횟수 (2024)', sub: '역대 최고 기록', color: '#0072CE', glow: false },
            { value: '4.72', unit: '/5.0', label: '교육생 만족도', sub: '3년 연속 상승', color: '#00B4D8', glow: false },
          ].map((item, i) => (
            <div key={i} className={`glass-card entrance entrance-d${i + 1} ${item.glow ? 'pulse-glow' : ''}`} style={{
              padding: 'clamp(16px, 1.5vw, 28px)', textAlign: 'center',
              borderBottom: `3px solid ${item.color}`,
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: 'rgba(255,255,255,0.45)', marginBottom: 4, fontWeight: 500 }}>{item.label}</div>
                <div className="count-up" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                  <span className="text-stat accent-glow" style={{ color: item.color }}>{item.value}</span>
                  <span style={{ fontSize: 'clamp(18px, 1.6vw, 28px)', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{item.unit}</span>
                </div>
                <div style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: item.color, marginTop: 4, fontWeight: 600, opacity: 0.7 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row - both vertical bar charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(10px, 1.2vw, 20px)', flex: 1, minHeight: 0 }}>

          {/* LEFT: 참가인원 vertical bar chart */}
          <div className="glass-card entrance entrance-d4" style={{ padding: 'clamp(16px, 1.5vw, 28px)' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                <span className="text-label" style={{ color: '#fff' }}>참가인원 추이</span>
                <span style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: 'rgba(255,255,255,0.3)' }}>(단위: 명)</span>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: 'clamp(6px, 0.8vw, 14px)', alignItems: 'flex-end', paddingBottom: 4 }}>
                {DATA.map((d, i) => {
                  const barH = (d.participants / maxP) * 80
                  const isRecent = i >= 3
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                      <span style={{
                        fontSize: 'clamp(14px, 1.2vw, 22px)', fontWeight: 800,
                        color: isRecent ? '#00B4D8' : 'rgba(255,255,255,0.35)',
                        marginBottom: 6,
                      }}>
                        {d.participants}
                      </span>
                      <div style={{
                        width: '100%', maxWidth: 'clamp(36px, 3.5vw, 56px)',
                        borderRadius: '8px 8px 2px 2px',
                        height: `${barH}%`,
                        background: isRecent
                          ? 'linear-gradient(to top, #00A86B, #00B4D8)'
                          : 'linear-gradient(to top, rgba(0,168,107,0.2), rgba(0,180,216,0.2))',
                        transformOrigin: 'bottom', transform: 'scaleY(0)',
                        animation: 'barGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${0.4 + i * 0.12}s`,
                        boxShadow: isRecent ? '0 -4px 24px rgba(0,168,107,0.4), inset 0 1px 0 rgba(255,255,255,0.15)' : 'none',
                        border: isRecent ? '1px solid rgba(0,168,107,0.2)' : 'none',
                        borderBottom: 'none',
                      }} />
                      <span style={{
                        fontSize: 'clamp(14px, 1.1vw, 18px)', fontWeight: 600,
                        color: isRecent ? '#fff' : 'rgba(255,255,255,0.35)',
                        marginTop: 8,
                      }}>
                        {d.year}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div style={{
                marginTop: 'clamp(8px, 0.8vw, 14px)',
                padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 20px)',
                borderRadius: 8, background: 'rgba(0,180,216,0.08)',
                border: '1px solid rgba(0,180,216,0.15)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.5)' }}>
                  6년간 <span style={{ color: '#00B4D8', fontWeight: 800, fontSize: '120%' }}>+57%</span> 성장
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: 시행횟수 vertical bar chart (was horizontal, now vertical) */}
          <div className="glass-card entrance entrance-d5" style={{ padding: 'clamp(16px, 1.5vw, 28px)' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                <span className="text-label" style={{ color: '#fff' }}>시행횟수 추이</span>
                <span style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: 'rgba(255,255,255,0.3)' }}>(단위: 회)</span>
              </div>

              <div style={{ flex: 1, display: 'flex', gap: 'clamp(6px, 0.8vw, 14px)', alignItems: 'flex-end', paddingBottom: 4 }}>
                {DATA.map((d, i) => {
                  const barH = (d.sessions / maxS) * 80
                  const isRecent = i >= 3
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                      <span style={{
                        fontSize: 'clamp(14px, 1.2vw, 22px)', fontWeight: 800,
                        color: isRecent ? '#0072CE' : 'rgba(255,255,255,0.35)',
                        marginBottom: 6,
                      }}>
                        {d.sessions}
                      </span>
                      <div style={{
                        width: '100%', maxWidth: 'clamp(36px, 3.5vw, 56px)',
                        borderRadius: '8px 8px 2px 2px',
                        height: `${barH}%`,
                        background: isRecent
                          ? 'linear-gradient(to top, #0072CE, #00B4D8)'
                          : 'linear-gradient(to top, rgba(0,114,206,0.2), rgba(0,180,216,0.2))',
                        transformOrigin: 'bottom', transform: 'scaleY(0)',
                        animation: 'barGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${0.4 + i * 0.12}s`,
                        boxShadow: isRecent ? '0 -4px 24px rgba(0,114,206,0.4), inset 0 1px 0 rgba(255,255,255,0.15)' : 'none',
                        border: isRecent ? '1px solid rgba(0,114,206,0.2)' : 'none',
                        borderBottom: 'none',
                      }} />
                      <span style={{
                        fontSize: 'clamp(14px, 1.1vw, 18px)', fontWeight: 600,
                        color: isRecent ? '#fff' : 'rgba(255,255,255,0.35)',
                        marginTop: 8,
                      }}>
                        {d.year}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div style={{
                marginTop: 'clamp(8px, 0.8vw, 14px)',
                padding: 'clamp(6px, 0.5vw, 10px) clamp(12px, 1vw, 20px)',
                borderRadius: 8, background: 'rgba(0,114,206,0.08)',
                border: '1px solid rgba(0,114,206,0.15)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.5)' }}>
                  6년간 <span style={{ color: '#0072CE', fontWeight: 800, fontSize: '120%' }}>+67%</span> 증가
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 만족도 trend - bottom bar */}
        <div className="glass-card entrance entrance-d6 pulse-glow" style={{
          marginTop: 'clamp(10px, 1vw, 18px)',
          padding: 'clamp(12px, 1.2vw, 22px) clamp(24px, 2.5vw, 44px)',
          borderLeft: '4px solid #00A86B',
        }}>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 'clamp(24px, 3vw, 48px)' }}>
            <span className="text-label" style={{ color: '#fff', whiteSpace: 'nowrap' }}>만족도 추이</span>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              {[
                { year: '2023', val: '4.63' },
                { year: '2024', val: '4.66' },
                { year: '2025', val: '4.72' },
              ].map((s, i) => {
                const isLast = i === 2
                return (
                  <div key={i} style={{ textAlign: 'center', display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.year}</span>
                    <span className={`count-up ${isLast ? 'gradient-text accent-glow' : ''}`} style={{
                      fontWeight: 900,
                      fontSize: isLast ? 'clamp(32px, 3vw, 52px)' : 'clamp(22px, 2vw, 36px)',
                      color: !isLast ? 'rgba(255,255,255,0.45)' : undefined,
                      lineHeight: 1.1,
                    }}>
                      {s.val}
                    </span>
                    {i < 2 && (
                      <span style={{ fontSize: 'clamp(18px, 1.6vw, 28px)', color: 'rgba(255,255,255,0.15)', margin: '0 clamp(4px, 0.5vw, 10px)' }}>→</span>
                    )}
                  </div>
                )
              })}
            </div>
            <span style={{
              fontSize: 'clamp(14px, 1.1vw, 20px)', fontWeight: 700,
              color: '#00A86B',
              padding: '4px 14px', borderRadius: 6,
              background: 'rgba(0,168,107,0.12)',
              whiteSpace: 'nowrap',
            }}>
              3년 연속 상승
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
