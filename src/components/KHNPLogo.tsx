interface Props {
  size?: number
  white?: boolean
}

export default function KHNPLogo({ size = 40, white = true }: Props) {
  const color = white ? '#ffffff' : '#00A86B'
  const scale = size / 40

  return (
    <svg width={size * 2.8} height={size} viewBox="0 0 112 40" fill="none" style={{ display: 'block' }}>
      {/* Symbol mark - two overlapping circles with diagonal lines */}
      <g transform={`scale(${scale * 0.95})`}>
        {/* Left circle */}
        <circle cx="16" cy="20" r="14" fill={color} opacity={white ? 0.9 : 1} />
        {/* Right circle with diagonal lines (creating the stripe effect) */}
        <clipPath id="rightClip">
          <circle cx="30" cy="20" r="14" />
        </clipPath>
        <circle cx="30" cy="20" r="14" fill={color} opacity={white ? 0.9 : 1} />
        {/* Diagonal white stripes over right circle */}
        <g clipPath="url(#rightClip)">
          {[-4, 0, 4, 8, 12, 16, 20, 24].map((offset, i) => (
            <line
              key={i}
              x1={16 + offset}
              y1={4}
              x2={36 + offset}
              y2={36}
              stroke={white ? '#000' : '#fff'}
              strokeWidth="1.8"
              opacity={0.25}
            />
          ))}
        </g>
        {/* White stripes in overlap zone */}
        <clipPath id="overlapClip">
          <path d="M 23 6 A 14 14 0 0 1 23 34 A 14 14 0 0 1 23 6" />
        </clipPath>
      </g>

      {/* Text: KHNP */}
      <text x="50" y="24" fill={color} fontFamily="'Pretendard Variable', sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.08em" opacity={white ? 0.95 : 1}>
        KHNP
      </text>
      {/* Subtext */}
      <text x="50" y="34" fill={color} fontFamily="'Pretendard Variable', sans-serif" fontWeight="400" fontSize="7" letterSpacing="0.05em" opacity={0.5}>
        인재개발원
      </text>
    </svg>
  )
}
