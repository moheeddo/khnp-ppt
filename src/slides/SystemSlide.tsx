import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const STEPS = [
  { num: '01', title: '수요조사', desc: '협약기업 교육 수요 파악 · 동반성장아카데미 의견수렴', color: '#00A86B', details: ['기업 니즈 분석', '수시 조사 실시'] },
  { num: '02', title: '과정설계', desc: '현장 맞춤형 교육과정 개발 · 전문가 자문 반영', color: '#0072CE', details: ['커리큘럼 개발', '교재 제작'] },
  { num: '03', title: '교육운영', desc: '전문교수진 실습 중심 교육 · 현장 견학 병행', color: '#00B4D8', details: ['이론 + 실습', '발전소 견학'] },
  { num: '04', title: '평가환류', desc: '교육 효과 분석 및 차기 과정 개선 반영', color: '#7C4DFF', details: ['만족도 조사', '과정 개선'] },
]

export default function SystemSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-quote.mp4" overlayOpacity={0.72} />
      <SlideHeader page={7} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(24px, 2.5vw, 44px)' }}>
          <span className="accent-tag">SYSTEM</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            컨소시엄 교육체계
          </h2>
          <p className="text-caption entrance entrance-d1" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>
            수요 기반 순환적 교육 운영 시스템
          </p>
        </div>

        {/* Process Flow */}
        <div style={{ position: 'relative' }}>
          {/* Connection arrow line */}
          <div className="entrance entrance-d1" style={{
            position: 'absolute', top: 'clamp(40px, 3.5vw, 60px)', left: '12%', right: '12%',
            height: 3, zIndex: 1,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: 100,
              background: 'linear-gradient(90deg, #00A86B, #0072CE, #00B4D8, #7C4DFF)',
              opacity: 0.2,
            }} />
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '3px' }}>
              <line x1="0" y1="1.5" x2="100%" y2="1.5" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="8 6" style={{ animation: 'dashFlow 1.5s linear infinite' }} />
              <defs>
                <linearGradient id="lineGrad2">
                  <stop offset="0%" stopColor="#00A86B" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#0072CE" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Arrows between cards */}
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', top: -6,
                left: `${25 + i * 25}%`,
                transform: 'translateX(-50%)',
                fontSize: 'clamp(14px, 1.2vw, 22px)',
                color: STEPS[i + 1].color,
                opacity: 0.5,
              }}>
                ▸
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(10px, 1.2vw, 20px)',
          }}>
            {STEPS.map((step, i) => (
              <div key={i} className={`glass-card entrance entrance-d${i + 2}`} style={{
                padding: 'clamp(24px, 2.5vw, 44px) clamp(14px, 1.3vw, 24px)',
                textAlign: 'center',
                borderTop: `3px solid ${step.color}`,
                boxShadow: `0 4px 24px ${step.color}12`,
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Circle number */}
                  <div className="float-y" style={{
                    width: 'clamp(52px, 5vw, 84px)', height: 'clamp(52px, 5vw, 84px)',
                    borderRadius: '50%', margin: '0 auto clamp(14px, 1.3vw, 24px)',
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 30px ${step.color}20`,
                    animationDelay: `${i * 0.5}s`,
                  }}>
                    <span style={{
                      fontWeight: 900, fontSize: 'clamp(18px, 1.8vw, 32px)',
                      color: step.color,
                    }}>
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-label" style={{ color: '#fff', marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(13px, 1vw, 20px)', color: 'rgba(255,255,255,0.5)', marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                    {step.desc}
                  </p>
                  {/* Detail tags */}
                  <div style={{ display: 'flex', gap: 'clamp(4px, 0.4vw, 8px)', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {step.details.map((d, j) => (
                      <span key={j} style={{
                        padding: '4px 14px', borderRadius: 100,
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}25`,
                        fontSize: 'clamp(11px, 0.8vw, 16px)',
                        color: step.color, fontWeight: 600,
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle indicator */}
        <div className="entrance entrance-d7" style={{
          marginTop: 'clamp(24px, 2.5vw, 44px)', textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 'clamp(10px, 1vw, 18px)',
            padding: 'clamp(12px, 1vw, 20px) clamp(24px, 2.5vw, 44px)',
            borderRadius: 100,
            background: 'linear-gradient(135deg, rgba(0,168,107,0.08), rgba(124,77,255,0.08))',
            border: '1px solid rgba(0,168,107,0.15)',
            backdropFilter: 'blur(12px)',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" stroke="url(#cycleGrad)" strokeWidth="2.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="4s" repeatCount="indefinite" />
              </path>
              <defs>
                <linearGradient id="cycleGrad" x1="0" y1="0" x2="24" y2="24">
                  <stop stopColor="#00A86B" /><stop offset="1" stopColor="#7C4DFF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-body" style={{ color: 'rgba(255,255,255,0.6)' }}>
              수요 → 설계 → 운영 → 환류의 <strong className="gradient-text">순환적 교육체계</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
