import VideoBackground from '../components/VideoBackground'

export default function ClosingSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-closing.mp4" overlayOpacity={0.5} />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 45%, transparent 20%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Rings with gradient borders */}
      {[220, 340, 480, 640, 820].map((size, i) => (
        <div key={i} style={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 2,
          width: `clamp(${size * 0.5}px, ${size / 14}vw, ${size}px)`,
          height: `clamp(${size * 0.5}px, ${size / 14}vw, ${size}px)`,
          borderRadius: '50%',
          border: `1.5px solid rgba(0,168,107,${0.16 - i * 0.03})`,
          animation: `ringPulse ${4.5 + i * 1.2}s ease-in-out infinite ${i * 0.3}s`,
        }} />
      ))}

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100%', textAlign: 'center', padding: 'clamp(32px, 4vw, 80px)',
      }}>
        {/* KHNP Symbol */}
        <div className="entrance" style={{ marginBottom: 'clamp(36px, 4vw, 72px)' }}>
          <img
            src="/khnp-symbol.png"
            alt="한국수력원자력"
            style={{
              height: 'clamp(72px, 8vw, 130px)',
              filter: 'brightness(0) invert(1)',
              opacity: 0.85,
            }}
          />
        </div>

        <h1 className="entrance entrance-d1 gradient-text" style={{
          fontSize: 'clamp(56px, 8vw, 140px)', fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 'clamp(20px, 2vw, 36px)',
          filter: 'drop-shadow(0 0 40px rgba(0,168,107,0.3))',
        }}>
          감사합니다
        </h1>

        <div className="entrance entrance-d2" style={{
          width: 'clamp(140px, 14vw, 280px)', height: 3,
          background: 'linear-gradient(90deg, transparent, #00A86B, #00B4D8, #0072CE, transparent)',
          borderRadius: 100,
          marginBottom: 'clamp(32px, 3.5vw, 60px)',
          boxShadow: '0 0 20px rgba(0,168,107,0.4)',
        }} />

        <p className="entrance entrance-d3" style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: 'clamp(22px, 2.2vw, 40px)', fontWeight: 500,
        }}>
          한국수력원자력 인재개발원
        </p>
        <p className="entrance entrance-d4" style={{
          color: 'rgba(255,255,255,0.4)', marginTop: 8,
          fontSize: 'clamp(16px, 1.4vw, 26px)',
        }}>
          국가인적자원개발 컨소시엄 사업운영 현황
        </p>

        <div className="entrance entrance-d5" style={{
          marginTop: 'clamp(40px, 4.5vw, 80px)',
          padding: 'clamp(16px, 1.4vw, 28px) clamp(36px, 4vw, 68px)',
          borderRadius: 100,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 'clamp(16px, 1.3vw, 24px)', fontWeight: 500,
          }}>
            SAT운영부 · 유청일 과장 · 윤연주 대리
          </span>
        </div>
      </div>
    </div>
  )
}
