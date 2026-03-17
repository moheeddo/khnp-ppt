import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const ITEMS = [
  { num: '01', title: '기관 및 사업개요', desc: '인재개발원 현황 · 컨소시엄 교육 운영현황', color: '#00A86B' },
  { num: '02', title: '컨소시엄 주요성과', desc: '교육 성과 및 운영 실적 분석', color: '#0072CE' },
  { num: '03', title: '한수원만의 차별성', desc: '특화된 전문 교육의 강점', color: '#00B4D8' },
  { num: '04', title: '향후 발전 방향', desc: '미래 비전과 전략 방향', color: '#7C4DFF' },
]

export default function AgendaSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-agenda.mp4" overlayOpacity={0.65} />
      <SlideHeader page={2} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(36px, 3.5vw, 68px)' }}>
          <span className="accent-tag">AGENDA</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(12px, 1vw, 20px)', color: '#fff' }}>
            발표내용
          </h2>
        </div>

        {/* Connection line */}
        <div style={{ position: 'relative' }}>
          <div className="entrance entrance-d1" style={{
            position: 'absolute', top: 'clamp(36px, 3vw, 56px)', left: '10%', right: '10%',
            height: 2,
            background: 'linear-gradient(90deg, #00A86B, #0072CE, #00B4D8, #7C4DFF)',
            opacity: 0.12, borderRadius: 100,
          }} />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(12px, 1.5vw, 28px)',
          }}>
            {ITEMS.map((item, i) => (
              <div key={i} className={`glass-card entrance entrance-d${i + 2}`} style={{
                padding: 'clamp(28px, 2.8vw, 48px) clamp(18px, 1.8vw, 32px)',
                borderTop: `3px solid ${item.color}`,
                boxShadow: `0 4px 24px ${item.color}15, 0 0 0 0.5px ${item.color}20`,
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Number */}
                  <div style={{
                    fontSize: 'clamp(56px, 5.5vw, 96px)', fontWeight: 900,
                    color: item.color, opacity: 0.18, lineHeight: 1,
                    marginBottom: 'clamp(8px, 0.8vw, 16px)',
                    textShadow: `0 0 40px ${item.color}30`,
                  }}>
                    {item.num}
                  </div>

                  {/* Accent line */}
                  <div style={{
                    width: 'clamp(32px, 3vw, 48px)', height: 3, borderRadius: 100,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}60)`,
                    marginBottom: 'clamp(14px, 1.2vw, 22px)',
                    boxShadow: `0 0 8px ${item.color}40`,
                  }} />

                  <h3 style={{
                    color: '#fff', marginBottom: 'clamp(8px, 0.7vw, 12px)',
                    fontSize: 'clamp(20px, 1.8vw, 34px)', fontWeight: 700,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 'clamp(14px, 1.1vw, 22px)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
