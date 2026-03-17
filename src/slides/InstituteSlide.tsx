import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'
import KoreaMap from '../components/KoreaMap'

// 인재개발원 본원 (경주시 양북면)
const HQ = { lat: 35.8347, lng: 129.2122 }

// 정확한 좌표 기반 교육훈련센터 위치 (4-decimal precision, 공공데이터 기준)
const TRAINING_CENTERS = [
  { name: '인재개발원 본원', lat: 35.8347, lng: 129.2122, type: 'training' as const, delay: 0.3 },
  { name: '월성 교육훈련센터', lat: 35.7097, lng: 129.4781, type: 'training' as const, delay: 0.8 },
  { name: '고리/새울 교육훈련센터', lat: 35.3160, lng: 129.2750, type: 'training' as const, delay: 1.1 },
  { name: '한빛 교육훈련센터', lat: 35.4089, lng: 126.4195, type: 'training' as const, delay: 1.4 },
  { name: '한울 교육훈련센터', lat: 37.0889, lng: 129.3812, type: 'training' as const, delay: 1.7 },
  { name: '수력연구교육센터', lat: 37.8756, lng: 127.7342, type: 'training' as const, delay: 2.0 },
]

// 본원에서 각 센터로 뻗어나가는 연결선 (순차 발사 효과)
const CONNECTIONS = TRAINING_CENTERS
  .filter(c => !(c.lat === HQ.lat && c.lng === HQ.lng))
  .map((c, i) => ({
    from: HQ,
    to: { lat: c.lat, lng: c.lng },
    delay: 0.3 + i * 0.25, // 빠른 순차 발사 (0.3, 0.55, 0.8, 1.05, 1.3)
  }))

// 원전 본부 - 교육센터와 겹치므로 이 슬라이드에서는 표시하지 않음
// (BusinessSlide에서 별도 표시)

const HISTORY = [
  { year: '1978', event: '고리원전 1호기 준공 · 교육과 신설', sub: '국내 최초 상업용 원전' },
  { year: '1991', event: '원자력연수원 독립사업소 발족', sub: '전문 교육기관 독립' },
  { year: '2009', event: '국가인적자원개발 컨소시엄 사업 승인', sub: '고용노동부 승인' },
  { year: '2010', event: '컨소시엄 사업 개시', sub: '협력사 전문인력 양성 시작' },
  { year: '2025', event: '컨소시엄 16년 연속 운영', sub: '누적 참가인원 4,000명+' },
]

const OVERVIEW_STATS = [
  { label: '교육장', value: '45', unit: '실', color: '#00A86B' },
  { label: '전임교수', value: '120', unit: '명+', color: '#00B4D8' },
  { label: '연간 교육인원', value: '15,000', unit: '명+', color: '#0072CE' },
]

export default function InstituteSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-quote.mp4" overlayOpacity={0.7} />
      <SlideHeader page={4} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(10px, 1vw, 18px)' }}>
          <span className="accent-tag">INSTITUTE</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            인재개발원 현황
          </h2>
        </div>

        {/* Overview stats bar */}
        <div className="glass-card entrance entrance-d1" style={{
          padding: 'clamp(10px, 0.8vw, 16px) clamp(16px, 1.5vw, 28px)',
          marginBottom: 'clamp(10px, 1vw, 16px)',
        }}>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            {OVERVIEW_STATS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</span>
                <span className="count-up" style={{ fontWeight: 800, fontSize: 'clamp(30px, 3vw, 50px)', color: s.color }}>{s.value}</span>
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.4)' }}>{s.unit}</span>
                {i < OVERVIEW_STATS.length - 1 && (
                  <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.08)', marginLeft: 'clamp(12px, 1.5vw, 24px)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(12px, 1.5vw, 24px)', flex: 1, minHeight: 0 }}>
          {/* Map with connection lines */}
          <div className="glass-card entrance entrance-d2" style={{ padding: 'clamp(10px, 0.8vw, 16px)' }}>
            <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
              <div style={{ marginBottom: 'clamp(8px, 0.6vw, 12px)', padding: '0 6px' }}>
                <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 30px)', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                  전국 <span className="gradient-text" style={{ fontWeight: 900 }}>6개</span> 교육훈련센터
                </h3>
                <p style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                  본원 → 각 센터 실시간 네트워크
                </p>
              </div>
              <KoreaMap
                markers={TRAINING_CENTERS}
                connections={CONNECTIONS}
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-card entrance entrance-d3" style={{ padding: 'clamp(16px, 1.8vw, 32px)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="text-label" style={{ color: '#fff', marginBottom: 'clamp(16px, 1.8vw, 32px)' }}>
                주요 연혁
              </h3>

              {HISTORY.map((h, i) => (
                <div key={i} className={`entrance entrance-d${i + 4}`} style={{
                  display: 'flex', gap: 'clamp(12px, 1.2vw, 22px)',
                  marginBottom: i < HISTORY.length - 1 ? 'clamp(16px, 1.8vw, 32px)' : 0,
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 18 }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                      background: i === HISTORY.length - 1
                        ? 'linear-gradient(135deg, #00A86B, #00B4D8)'
                        : 'linear-gradient(135deg, #00A86B, #0072CE)',
                      boxShadow: i === HISTORY.length - 1 ? '0 0 20px rgba(0,168,107,0.6)' : '0 0 12px rgba(0,168,107,0.3)',
                    }} />
                    {i < HISTORY.length - 1 && (
                      <div style={{ width: 2, flexGrow: 1, background: 'linear-gradient(to bottom, rgba(0,168,107,0.3), rgba(0,168,107,0.05))', marginTop: 6 }} />
                    )}
                  </div>
                  <div>
                    <span className="gradient-text" style={{
                      fontWeight: 800,
                      fontSize: i === HISTORY.length - 1 ? 'clamp(20px, 2vw, 36px)' : 'clamp(18px, 1.6vw, 28px)',
                      display: 'block', lineHeight: 1.2,
                    }}>
                      {h.year}
                    </span>
                    <p style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', color: 'rgba(255,255,255,0.6)', marginTop: 3 }}>
                      {h.event}
                    </p>
                    <p style={{ fontSize: 'clamp(11px, 0.8vw, 15px)', color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
                      {h.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
