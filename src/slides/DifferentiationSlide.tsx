import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const STRENGTHS = [
  {
    title: '특화된 전문 교육',
    desc: '원자력발전 산업 특화 교육 · 타 기관 미보유 고유 커리큘럼',
    detail: '국내 유일 원전운영 전문교육기관',
    color: '#00A86B',
  },
  {
    title: '전문교수진 직강',
    desc: '발전소 현장경험 20년+ 전문교수진 직접 강의',
    detail: '이론과 실무를 겸비한 강의',
    color: '#0072CE',
  },
  {
    title: '실습 중심 기술 교육',
    desc: 'HPO센터, KPS정비훈련동, 수처리시설, 발전소 현장 견학',
    detail: '실제 설비 기반 체험형 교육',
    color: '#00B4D8',
  },
  {
    title: '맞춤형 교육과정',
    desc: '정기 수요조사 및 동반성장아카데미 의견수렴 후 과정 조정',
    detail: '기업별 니즈 반영 커리큘럼',
    color: '#7C4DFF',
  },
]

const INFRA = [
  { name: 'HPO센터', desc: '인적성능최적화', color: '#00A86B' },
  { name: 'KPS정비훈련동', desc: '기기정비 실습', color: '#0072CE' },
  { name: '수처리시설', desc: '수화학 실습', color: '#00B4D8' },
  { name: '발전소 현장', desc: '현장 견학', color: '#7C4DFF' },
]

export default function DifferentiationSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-agenda.mp4" overlayOpacity={0.7} />
      <SlideHeader page={9} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(16px, 1.8vw, 32px)' }}>
          <span className="accent-tag">DIFFERENTIATION</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            한수원만의 <span className="gradient-text">차별성</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(10px, 1.2vw, 20px)',
          marginBottom: 'clamp(14px, 1.3vw, 24px)',
        }}>
          {STRENGTHS.map((s, i) => (
            <div key={i} className={`glass-card entrance entrance-d${i + 2}`} style={{
              padding: 'clamp(16px, 1.5vw, 28px)',
              borderLeft: `4px solid ${s.color}`,
              boxShadow: `0 4px 20px ${s.color}10`,
            }}>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 'clamp(12px, 1.2vw, 20px)', alignItems: 'flex-start' }}>
                {/* Number indicator */}
                <div className="float-y" style={{
                  width: 'clamp(40px, 3vw, 56px)', height: 'clamp(40px, 3vw, 56px)',
                  borderRadius: 12, flexShrink: 0,
                  background: `${s.color}18`,
                  border: `1.5px solid ${s.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  animationDelay: `${i * 0.4}s`,
                }}>
                  <span style={{ fontWeight: 800, fontSize: 'clamp(14px, 1.3vw, 22px)', color: s.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#fff', marginBottom: 'clamp(4px, 0.4vw, 8px)', fontSize: 'clamp(20px, 1.8vw, 34px)', fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 1vw, 20px)', color: 'rgba(255,255,255,0.55)', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                    {s.desc}
                  </p>
                  <span style={{
                    display: 'inline-block', padding: '3px 14px', borderRadius: 6,
                    background: `${s.color}15`, color: s.color,
                    fontSize: 'clamp(11px, 0.8vw, 16px)', fontWeight: 600,
                  }}>
                    {s.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure bar */}
        <div className="entrance entrance-d7">
          <div className="glass-card" style={{
            padding: 'clamp(12px, 1vw, 20px) clamp(20px, 2vw, 36px)',
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 'clamp(10px, 0.8vw, 16px)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                실습 인프라
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(8px, 0.8vw, 16px)' }}>
                {INFRA.map((item, i) => (
                  <div key={i} style={{
                    padding: 'clamp(14px, 1.2vw, 24px)',
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                    border: `1px solid ${item.color}30`,
                    textAlign: 'center',
                    boxShadow: `0 2px 12px ${item.color}10`,
                  }}>
                    <div style={{ fontSize: 'clamp(16px, 1.3vw, 24px)', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: 'clamp(11px, 0.8vw, 16px)', color: item.color, fontWeight: 500 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
