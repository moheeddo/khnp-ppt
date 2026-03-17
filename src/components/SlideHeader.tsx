interface Props {
  page: number
  centerText?: string
}

export default function SlideHeader({ page, centerText = '컨소시엄 사업운영 현황' }: Props) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'clamp(16px, 1.5vw, 28px) clamp(24px, 3vw, 56px)',
      zIndex: 20,
    }}>
      {/* KHNP Symbol + Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 0.8vw, 14px)' }}>
        <img
          src="/khnp-symbol.png"
          alt="KHNP"
          style={{
            height: 'clamp(24px, 2.2vw, 38px)',
            filter: 'brightness(0) invert(1)',
            opacity: 0.85,
          }}
        />
        <span style={{
          fontWeight: 700, fontSize: 'clamp(11px, 0.85vw, 16px)',
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '0.02em',
        }}>
          한국수력원자력 인재개발원
        </span>
      </div>
      <span style={{
        fontWeight: 500, fontSize: 'clamp(10px, 0.75vw, 14px)',
        color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em',
      }}>
        {centerText}
      </span>
      <span style={{
        fontWeight: 500, fontSize: 'clamp(10px, 0.75vw, 14px)',
        color: 'rgba(255,255,255,0.25)',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(page).padStart(2, '0')} / 11
      </span>
    </div>
  )
}
