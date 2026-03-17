import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

export default function AchievementSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-safety.mp4" overlayOpacity={0.68} />
      <SlideHeader page={8} centerText="주요성과" />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(20px, 2vw, 36px)' }}>
          <span className="accent-tag">KEY ACHIEVEMENT</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            컨소시엄 주요성과
          </h2>
        </div>

        {/* BIG HERO STATS */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(12px, 1.3vw, 22px)',
          marginBottom: 'clamp(18px, 1.8vw, 32px)',
        }}>
          {[
            { value: '119', unit: '%', label: '목표달성률', sub: '목표 500명 → 수료 599명', color: '#00A86B', glow: true },
            { value: '100', unit: '%', label: '수료율', sub: '전원 수료 달성', color: '#0072CE', glow: false },
            { value: '53', unit: '개', label: '신규 협약기업', sub: '2025년도 협력사 확보', color: '#00B4D8', glow: false },
            { value: '4.72', unit: '/5', label: '만족도', sub: '역대 최고 기록', color: '#00A86B', glow: true },
          ].map((item, i) => (
            <div key={i} className={`glass-card entrance entrance-d${i + 1} ${item.glow ? 'pulse-glow elevated' : ''}`} style={{
              padding: 'clamp(20px, 2vw, 36px)', textAlign: 'center',
              borderBottom: `3px solid ${item.color}`,
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-big-stat count-up" style={{
                  color: item.glow ? undefined : '#fff',
                  ...(item.glow ? {} : {}),
                }}>
                  <span className={item.glow ? 'gradient-text accent-glow' : ''}>{item.value}</span>
                  <span style={{ fontSize: '45%', color: 'rgba(255,255,255,0.35)', marginLeft: 2 }}>{item.unit}</span>
                </div>
                <div style={{
                  fontSize: 'clamp(18px, 1.6vw, 30px)', fontWeight: 700,
                  color: '#fff', marginTop: 'clamp(6px, 0.6vw, 12px)',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: 'clamp(14px, 1.1vw, 20px)',
                  color: item.color, marginTop: 4, fontWeight: 500, opacity: 0.7,
                }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px, 1.3vw, 22px)' }}>
          <div className="glass-card entrance entrance-d5" style={{ padding: 'clamp(18px, 1.8vw, 32px)', borderLeft: '4px solid #00A86B' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ color: '#fff', marginBottom: 'clamp(8px, 0.8vw, 14px)', fontSize: 'clamp(20px, 1.6vw, 30px)', fontWeight: 700 }}>
                교육과정 평가기준 상향
              </h3>
              <p style={{ fontSize: 'clamp(15px, 1.2vw, 22px)', color: 'rgba(255,255,255,0.55)', marginBottom: 'clamp(12px, 1vw, 18px)' }}>
                교육몰입도 및 참여도 향상을 위한 평가방법 다양화
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(6px, 0.5vw, 10px)' }}>
                {['필기시험', '토의', '과제 발표', '실습', '현장평가'].map((item, j) => (
                  <span key={j} style={{
                    padding: '5px 16px', borderRadius: 100,
                    background: 'rgba(0,168,107,0.12)', border: '1px solid rgba(0,168,107,0.25)',
                    fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.75)', fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card entrance entrance-d6" style={{ padding: 'clamp(18px, 1.8vw, 32px)', borderLeft: '4px solid #0072CE' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ color: '#fff', marginBottom: 'clamp(8px, 0.8vw, 14px)', fontSize: 'clamp(20px, 1.6vw, 30px)', fontWeight: 700 }}>
                사업운영 체계 안정화
              </h3>
              <p style={{ fontSize: 'clamp(15px, 1.2vw, 22px)', color: 'rgba(255,255,255,0.55)', marginBottom: 'clamp(12px, 1vw, 18px)' }}>
                지속적인 사업운영 안정화를 위한 체계 구축
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(6px, 0.5vw, 10px)' }}>
                {['업무매뉴얼', '절차 표준화', '회계정산 체계화', '전문가 자문', '성과관리'].map((item, j) => (
                  <span key={j} style={{
                    padding: '5px 16px', borderRadius: 100,
                    background: 'rgba(0,114,206,0.12)', border: '1px solid rgba(0,114,206,0.25)',
                    fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.75)', fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
