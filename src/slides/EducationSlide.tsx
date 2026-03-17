import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'

const STATS = [
  { year: '2023', courses: 598, sessions: 1430, participants: 15683, satisfaction: 97.0 },
  { year: '2024', courses: 533, sessions: 1361, participants: 16271, satisfaction: 97.0 },
  { year: '2025', courses: 612, sessions: 1410, participants: 15327, satisfaction: 99.1 },
]

const FIELDS = [
  { field: '직무전문', courses: '발전소보호설비, 발전실무, SMR 사업실무', count: 280, color: '#00B4D8' },
  { field: '공통', courses: '찾아가는 팀소통, 원자력안전문화 역량 향상', count: 120, color: '#00A86B' },
  { field: '리더십', courses: '발전부장·신임차장 리더십, 신입사원 입문', count: 85, color: '#0072CE' },
  { field: '글로벌', courses: '체코·루마니아·이집트 원전 파견전 교육', count: 67, color: '#7C4DFF' },
  { field: '수탁/컨소시엄', courses: '컨소시엄 및 수탁 교육과정', count: 60, color: '#FF6D00' },
]

const maxFieldCount = 300

export default function EducationSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-agenda.mp4" overlayOpacity={0.7} />
      <SlideHeader page={5} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        {/* Title */}
        <div className="entrance" style={{ marginBottom: 'clamp(14px, 1.4vw, 24px)' }}>
          <span className="accent-tag">EDUCATION</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            인재개발원 교육현황
          </h2>
        </div>

        {/* TOP: 4 Hero KPIs - bigger numbers */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(8px, 1vw, 16px)',
          marginBottom: 'clamp(14px, 1.4vw, 24px)',
        }}>
          {[
            { value: '612', unit: '개', label: '교육과정', sub: '2025년 기준', color: '#00A86B' },
            { value: '1,410', unit: '회', label: '시행횟수', sub: '연간 교육 운영', color: '#0072CE' },
            { value: '15,327', unit: '명', label: '참가인원', sub: '연간 교육 이수', color: '#00B4D8' },
            { value: '99.1', unit: '%', label: '교육만족도', sub: '역대 최고 기록', color: '#00A86B', highlight: true },
          ].map((item, i) => (
            <div key={i} className={`glass-card entrance entrance-d${i + 1} ${item.highlight ? 'pulse-glow' : ''}`} style={{
              padding: 'clamp(14px, 1.3vw, 24px)', textAlign: 'center',
              borderBottom: `3px solid ${item.color}`,
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: 'rgba(255,255,255,0.45)', marginBottom: 4, fontWeight: 600 }}>{item.label}</div>
                <div className="count-up" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 3 }}>
                  <span className={`accent-glow ${item.highlight ? 'gradient-text' : ''}`} style={{
                    fontWeight: 900,
                    fontSize: 'clamp(36px, 4vw, 68px)',
                    color: item.highlight ? undefined : item.color,
                    lineHeight: 1,
                  }}>{item.value}</span>
                  <span style={{ fontSize: 'clamp(16px, 1.4vw, 24px)', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{item.unit}</span>
                </div>
                <div style={{ fontSize: 'clamp(11px, 0.8vw, 14px)', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM: Table + Fields side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(10px, 1.2vw, 20px)', flex: 1, minHeight: 0 }}>

          {/* 3개년 실적 비교 테이블 */}
          <div className="glass-card entrance entrance-d5" style={{ padding: 'clamp(16px, 1.5vw, 28px)' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                <span className="text-label" style={{ color: '#fff' }}>3개년 실적 비교</span>
              </div>
              <div style={{ flex: 1 }}>
                <table className="data-table">
                  <thead>
                    <tr><th>년도</th><th>과정수</th><th>시행횟수</th><th>참가인원</th><th>만족도</th></tr>
                  </thead>
                  <tbody>
                    {STATS.map((s, i) => {
                      const isLatest = i === STATS.length - 1
                      return (
                        <tr key={i}>
                          <td style={{ fontWeight: 700, color: isLatest ? '#00B4D8' : '#fff', fontSize: 'clamp(14px, 1.1vw, 20px)' }}>{s.year}</td>
                          <td style={{ fontWeight: isLatest ? 700 : 400, fontSize: 'clamp(14px, 1.1vw, 20px)' }}>{s.courses}</td>
                          <td style={{ fontSize: 'clamp(14px, 1.1vw, 20px)' }}>{s.sessions.toLocaleString()}</td>
                          <td style={{ fontWeight: 700, color: isLatest ? '#00A86B' : 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px, 1.1vw, 20px)' }}>{s.participants.toLocaleString()}</td>
                          <td>
                            <span className={isLatest ? 'gradient-text' : ''} style={{ fontWeight: 800, fontSize: isLatest ? 'clamp(18px, 1.5vw, 26px)' : 'clamp(14px, 1.1vw, 20px)' }}>
                              {s.satisfaction}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div style={{
                marginTop: 'clamp(8px, 0.8vw, 14px)',
                padding: 'clamp(8px, 0.6vw, 12px) clamp(14px, 1.2vw, 22px)',
                borderRadius: 8, background: 'rgba(0,168,107,0.08)',
                border: '1px solid rgba(0,168,107,0.15)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.5)' }}>
                  3년간 만족도 <span style={{ color: '#00A86B', fontWeight: 800 }}>97.0%</span> → <span className="gradient-text" style={{ fontWeight: 800 }}>99.1%</span> 지속 상승
                </span>
              </div>
            </div>
          </div>

          {/* 교육분야별 과정 현황 - bigger bars and text */}
          <div className="glass-card entrance entrance-d6" style={{ padding: 'clamp(16px, 1.5vw, 28px)' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                <span className="text-label" style={{ color: '#fff' }}>교육분야별 현황</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1vw, 16px)', flex: 1, justifyContent: 'center' }}>
                {FIELDS.map((f, i) => (
                  <div key={i} className={`entrance entrance-d${i + 5}`}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{
                        fontSize: 'clamp(14px, 1.1vw, 20px)',
                        color: f.color, fontWeight: 700,
                      }}>
                        {f.field}
                      </span>
                      <span style={{
                        fontSize: 'clamp(18px, 1.6vw, 28px)', fontWeight: 900,
                        color: f.color,
                      }}>{f.count}<span style={{ fontSize: '60%', color: 'rgba(255,255,255,0.3)', marginLeft: 2 }}>개</span></span>
                    </div>
                    <div style={{ height: 'clamp(14px, 1.2vw, 22px)', borderRadius: 6, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                      <div style={{
                        width: `${(f.count / maxFieldCount) * 100}%`, height: '100%', borderRadius: 6,
                        background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
                        transform: 'scaleX(0)', transformOrigin: 'left',
                        animation: 'progressGrow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: `${0.6 + i * 0.1}s`,
                        ['--progress' as string]: 1,
                        boxShadow: `0 0 12px ${f.color}40`,
                      }} />
                    </div>
                    <div style={{ fontSize: 'clamp(11px, 0.8vw, 14px)', color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>
                      {f.courses}
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
