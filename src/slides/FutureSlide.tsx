import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const DIRECTIONS = [
  {
    title: '현장 교육수요의\n신속한 반영',
    items: [
      '수요조사 및 동반성장아카데미 의견수렴',
      '수시 과정 운영 · 신규과정 개설 · 정원 조정 등 탄력적 운영',
    ],
    color: '#00A86B',
  },
  {
    title: '현장 중심\n교육과정 운영',
    items: [
      '발전소 견학 프로그램 확대 실시',
      '각 교육과정 현장교육 확대 시행',
    ],
    color: '#0072CE',
  },
  {
    title: '홍보활동 강화 및\n수요조사 다각화',
    items: [
      '다양한 채널을 통한 홍보활동 강화',
      '수요조사 방법의 다각화로 현장 밀착 교육 실현',
    ],
    color: '#00B4D8',
  },
]

export default function FutureSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-closing.mp4" overlayOpacity={0.65} />
      <SlideHeader page={10} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(24px, 2.5vw, 44px)', textAlign: 'center' }}>
          <span className="accent-tag">FUTURE DIRECTION</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            향후 발전 방향
          </h2>
        </div>

        {/* 3 cards horizontal */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(12px, 1.5vw, 24px)',
          flex: 1, minHeight: 0,
        }}>
          {DIRECTIONS.map((d, i) => (
            <div key={i} className={`glass-card entrance entrance-d${i + 2}`} style={{
              padding: 'clamp(20px, 2vw, 36px)',
              borderTop: `4px solid ${d.color}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Number circle */}
                <div className="float-y" style={{
                  width: 'clamp(52px, 4.5vw, 76px)', height: 'clamp(52px, 4.5vw, 76px)',
                  borderRadius: '50%', flexShrink: 0,
                  margin: '0 auto clamp(14px, 1.4vw, 24px)',
                  background: `${d.color}15`,
                  border: `2px solid ${d.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 30px ${d.color}20`,
                  animationDelay: `${i * 0.5}s`,
                }}>
                  <span style={{ fontWeight: 900, fontSize: 'clamp(22px, 2vw, 36px)', color: d.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  color: '#fff', textAlign: 'center',
                  marginBottom: 'clamp(14px, 1.4vw, 24px)',
                  fontSize: 'clamp(20px, 1.8vw, 34px)', fontWeight: 700,
                  lineHeight: 1.3, whiteSpace: 'pre-line',
                }}>
                  {d.title}
                </h3>

                {/* Divider */}
                <div style={{
                  width: 'clamp(36px, 3vw, 52px)', height: 3, borderRadius: 100,
                  background: `linear-gradient(90deg, ${d.color}, ${d.color}60)`,
                  margin: '0 auto clamp(14px, 1.4vw, 24px)',
                  boxShadow: `0 0 8px ${d.color}40`,
                }} />

                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                  {d.items.map((item, j) => (
                    <li key={j} style={{
                      fontSize: 'clamp(14px, 1.2vw, 22px)', color: 'rgba(255,255,255,0.6)',
                      paddingLeft: 'clamp(16px, 1.4vw, 24px)',
                      position: 'relative',
                      marginBottom: 'clamp(8px, 0.8vw, 14px)',
                      lineHeight: 1.5,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '0.55em',
                        width: 7, height: 7, borderRadius: '50%',
                        background: d.color,
                        boxShadow: `0 0 8px ${d.color}60`,
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vision statement */}
        <div className="entrance entrance-d6" style={{ marginTop: 'clamp(20px, 2vw, 36px)', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: 'clamp(18px, 1.8vw, 32px) clamp(36px, 4vw, 72px)',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(0,168,107,0.12), rgba(0,114,206,0.12))',
            border: '1px solid rgba(0,168,107,0.25)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 24px rgba(0,168,107,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}>
            <p style={{
              color: 'rgba(255,255,255,0.9)', fontWeight: 600,
              fontSize: 'clamp(22px, 2vw, 38px)',
            }}>
              원자력 산업 생태계의 <span className="gradient-text" style={{ fontWeight: 900 }}>동반성장</span>을 지원하며
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginTop: 8,
              fontSize: 'clamp(22px, 2vw, 38px)',
            }}>
              현장 맞춤형 <span className="gradient-text" style={{ fontWeight: 900 }}>전문인력 양성</span>에 기여
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
