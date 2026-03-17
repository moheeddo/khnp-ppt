import VideoBackground from '../components/VideoBackground'

export default function CoverSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-cover.mp4" overlayOpacity={0.5} />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 45%, transparent 25%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* Decorative rings */}
      {[260, 380, 520, 680].map((size, i) => (
        <div key={i} style={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 2,
          width: `clamp(${size * 0.5}px, ${size / 14}vw, ${size}px)`,
          height: `clamp(${size * 0.5}px, ${size / 14}vw, ${size}px)`,
          borderRadius: '50%',
          border: `1px solid rgba(0,168,107,${0.18 - i * 0.04})`,
          animation: `ringPulse ${5 + i * 1.5}s ease-in-out infinite ${i * 0.4}s`,
        }} />
      ))}

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100%', padding: 'clamp(32px, 4vw, 80px)', textAlign: 'center',
      }}>
        {/* KHNP Symbol Logo */}
        <div className="entrance" style={{ marginBottom: 'clamp(32px, 3.5vw, 64px)' }}>
          <img
            src="/khnp-symbol.png"
            alt="한국수력원자력"
            style={{
              height: 'clamp(64px, 7vw, 120px)',
              filter: 'brightness(0) invert(1)',
              opacity: 0.9,
            }}
          />
        </div>

        {/* Tag */}
        <div className="entrance entrance-d1 accent-tag" style={{ marginBottom: 'clamp(24px, 2.5vw, 44px)' }}>
          한국수력원자력 인재개발원
        </div>

        {/* Title */}
        <h1 className="entrance entrance-d2 text-hero" style={{ marginBottom: 'clamp(16px, 1.5vw, 28px)' }}>
          <span style={{ color: 'white' }}>국가인적자원개발</span><br />
          <span className="gradient-text">컨소시엄 사업운영 현황</span>
        </h1>

        {/* Divider */}
        <div className="entrance entrance-d3" style={{
          width: 'clamp(140px, 14vw, 280px)', height: '3px',
          background: 'linear-gradient(90deg, transparent, #00A86B, #00B4D8, #0072CE, transparent)',
          borderRadius: 100, marginBottom: 'clamp(32px, 3.5vw, 60px)',
          boxShadow: '0 0 20px rgba(0,168,107,0.4)',
        }} />

        {/* Presenter */}
        <div className="entrance entrance-d4" style={{
          padding: 'clamp(14px, 1.2vw, 24px) clamp(32px, 3vw, 60px)',
          borderRadius: 100,
          background: 'rgba(0,168,107,0.08)',
          border: '1px solid rgba(0,168,107,0.15)',
          backdropFilter: 'blur(12px)',
        }}>
          <p className="text-subtitle" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>
            인재개발원 SAT운영부
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: 4, fontSize: 'clamp(16px, 1.3vw, 24px)' }}>
            유청일 과장 · 윤연주 대리
          </p>
        </div>
      </div>
    </div>
  )
}
