import VideoBackground from '../components/VideoBackground'
import SlideHeader from '../components/SlideHeader'
import KoreaMap from '../components/KoreaMap'

// 정확한 좌표 기반 전체 발전소 데이터 (공공데이터 기준)
const ALL_PLANTS = [
  // 원자력 5개 본부
  { name: '고리', lat: 35.3208, lng: 129.2783, type: 'nuclear' as const, capacityMW: 3137 },
  { name: '새울', lat: 35.3214, lng: 129.2839, type: 'nuclear' as const, capacityMW: 5600 },
  { name: '한빛', lat: 35.4131, lng: 126.4239, type: 'nuclear' as const, capacityMW: 5900 },
  { name: '월성', lat: 35.7128, lng: 129.4747, type: 'nuclear' as const, capacityMW: 4779 },
  { name: '한울', lat: 37.0928, lng: 129.3847, type: 'nuclear' as const, capacityMW: 10700 },
  // 수력 10개소
  { name: '화천', lat: 38.1064, lng: 127.7267, type: 'hydro' as const, capacityMW: 108 },
  { name: '춘천', lat: 37.8813, lng: 127.7297, type: 'hydro' as const, capacityMW: 62 },
  { name: '의암', lat: 37.8500, lng: 127.7600, type: 'hydro' as const, capacityMW: 48 },
  { name: '청평', lat: 37.7167, lng: 127.4333, type: 'hydro' as const, capacityMW: 140 },
  { name: '팔당', lat: 37.5208, lng: 127.2817, type: 'hydro' as const, capacityMW: 120 },
  { name: '충주', lat: 36.9900, lng: 128.0500, type: 'hydro' as const, capacityMW: 412 },
  { name: '괴산', lat: 36.8100, lng: 127.7900, type: 'hydro' as const, capacityMW: 3 },
  { name: '보성강', lat: 34.8200, lng: 127.1100, type: 'hydro' as const, capacityMW: 5 },
  { name: '칠보', lat: 35.5530, lng: 127.2710, type: 'hydro' as const, capacityMW: 5 },
  { name: '강릉', lat: 37.7200, lng: 128.7560, type: 'hydro' as const, capacityMW: 1 },
  // 양수 7개소
  { name: '청평양수', lat: 37.7333, lng: 127.4500, type: 'pumped' as const, capacityMW: 400 },
  { name: '삼랑진', lat: 35.4167, lng: 128.8333, type: 'pumped' as const, capacityMW: 600 },
  { name: '무주', lat: 35.9000, lng: 127.6667, type: 'pumped' as const, capacityMW: 600 },
  { name: '산청', lat: 35.4167, lng: 127.8833, type: 'pumped' as const, capacityMW: 700 },
  { name: '양양', lat: 38.0750, lng: 128.6190, type: 'pumped' as const, capacityMW: 1000 },
  { name: '예천', lat: 36.6833, lng: 128.4667, type: 'pumped' as const, capacityMW: 800 },
  { name: '청송', lat: 36.4333, lng: 129.0500, type: 'pumped' as const, capacityMW: 600 },
]

export default function BusinessSlide() {
  return (
    <div className="slide">
      <VideoBackground src="/videos/bg-safety.mp4" overlayOpacity={0.72} />
      <SlideHeader page={3} />

      <div className="relative z-10" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(80px, 8vw, 130px) clamp(40px, 5vw, 80px)',
      }}>
        <div className="entrance" style={{ marginBottom: 'clamp(14px, 1.4vw, 24px)' }}>
          <span className="accent-tag">OVERVIEW</span>
          <h2 className="text-title" style={{ marginTop: 'clamp(8px, 0.8vw, 14px)', color: '#fff' }}>
            한수원 사업현황
          </h2>
          <p className="text-body entrance entrance-d1" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>
            2025년 기준 · 국내 발전량 비중 <span className="gradient-text" style={{ fontWeight: 700 }}>32.6%</span> · 원전 <span style={{ color: '#00E676', fontWeight: 700 }}>5</span>본부 + 수력 <span style={{ color: '#00B4D8', fontWeight: 700 }}>10</span>개소 + 양수 <span style={{ color: '#7C4DFF', fontWeight: 700 }}>7</span>개소
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(14px, 1.5vw, 24px)', flex: 1, minHeight: 0 }}>
          {/* Korea map - all plants */}
          <div className="glass-card entrance entrance-d2" style={{ padding: 'clamp(10px, 0.8vw, 16px)' }}>
            <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
              <KoreaMap markers={ALL_PLANTS} compact />
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.8vw, 14px)' }}>
            {/* Nuclear hero stat */}
            <div className="glass-card entrance entrance-d3" style={{ padding: 'clamp(14px, 1.4vw, 24px)' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-caption" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>원자력 발전소</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span className="text-stat gradient-text accent-glow count-up">32</span>
                    <span className="text-label" style={{ color: 'rgba(255,255,255,0.5)' }}>기</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'clamp(6px, 0.5vw, 10px)' }}>
                    {[
                      { label: '운전중', value: '26', color: '#00E676' },
                      { label: '건설중', value: '4', color: '#0072CE' },
                      { label: '해체', value: '2', color: '#64748b' },
                    ].map((item, j) => (
                      <div key={j} style={{
                        textAlign: 'center', padding: 'clamp(6px, 0.5vw, 10px) clamp(10px, 1vw, 18px)',
                        borderRadius: 8, background: 'rgba(255,255,255,0.04)',
                        borderBottom: `2px solid ${item.color}`,
                      }}>
                        <div style={{ fontWeight: 800, fontSize: 'clamp(20px, 2vw, 36px)', color: item.color }}>{item.value}</div>
                        <div style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: 'rgba(255,255,255,0.4)' }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="glass-card entrance entrance-d4" style={{ padding: 'clamp(12px, 1vw, 20px)' }}>
              <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(6px, 0.5vw, 10px)' }}>
                {[
                  { label: '총 설비용량', value: '26', unit: 'GW', color: '#00A86B' },
                  { label: '이용률', value: '87', unit: '%', color: '#00B4D8' },
                  { label: '월발전량', value: '15,440', unit: 'GWh', color: '#0072CE' },
                ].map((s, j) => (
                  <div key={j} style={{ textAlign: 'center', padding: 'clamp(4px, 0.4vw, 8px) 0' }}>
                    <div style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{s.label}</div>
                    <span style={{ fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 40px)', color: s.color }}>{s.value}</span>
                    <span style={{ fontSize: 'clamp(10px, 0.7vw, 14px)', color: 'rgba(255,255,255,0.4)', marginLeft: 3 }}>{s.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hydro & Pumped Storage summary */}
            <div className="glass-card entrance entrance-d5" style={{ padding: 'clamp(12px, 1vw, 20px)' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(8px, 0.8vw, 14px)' }}>
                  <div style={{ padding: 'clamp(8px, 0.7vw, 14px)', borderRadius: 10, background: 'rgba(0,180,216,0.08)', borderLeft: '3px solid #00B4D8' }}>
                    <div style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: '#00B4D8', fontWeight: 600, marginBottom: 4 }}>수력발전소</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontWeight: 800, fontSize: 'clamp(24px, 2.2vw, 40px)', color: '#fff' }}>10</span>
                      <span style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: 'rgba(255,255,255,0.4)' }}>개소</span>
                      <span style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: '#00B4D8', marginLeft: 'auto', fontWeight: 600 }}>903MW</span>
                    </div>
                  </div>
                  <div style={{ padding: 'clamp(8px, 0.7vw, 14px)', borderRadius: 10, background: 'rgba(124,77,255,0.08)', borderLeft: '3px solid #7C4DFF' }}>
                    <div style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: '#7C4DFF', fontWeight: 600, marginBottom: 4 }}>양수발전소</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontWeight: 800, fontSize: 'clamp(24px, 2.2vw, 40px)', color: '#fff' }}>7</span>
                      <span style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: 'rgba(255,255,255,0.4)' }}>개소</span>
                      <span style={{ fontSize: 'clamp(10px, 0.7vw, 13px)', color: '#7C4DFF', marginLeft: 'auto', fontWeight: 600 }}>4,700MW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generation table */}
            <div className="glass-card entrance entrance-d6" style={{ padding: 'clamp(10px, 0.8vw, 16px)', flex: 1 }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <table className="data-table">
                  <thead><tr><th>구분</th><th>설비용량</th><th>이용률</th><th>월발전량</th></tr></thead>
                  <tbody>
                    {[
                      ['수력', '903MW', '14%', '66,291MWh'],
                      ['양수', '4,700MW', '10%', '334,289MWh'],
                      ['태양광', '87MW', '10%', '6,835MWh'],
                      ['연료전지', '-', '-', '184,239MWh'],
                    ].map((row, j) => (
                      <tr key={j}>{row.map((c, k) => <td key={k} style={{ fontWeight: k === 0 ? 600 : 400 }}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
