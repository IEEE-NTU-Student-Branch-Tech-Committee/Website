export function GeometricArt({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`geometric-art ${compact ? 'compact-art' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 600 590" fill="none" className="geometry-svg">
        <defs>
          <linearGradient
            id={compact ? 'plane-small' : 'plane'}
            x1="130"
            y1="170"
            x2="450"
            y2="440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#447dff" stopOpacity=".75" />
            <stop offset="1" stopColor="#114bff" stopOpacity=".08" />
          </linearGradient>
          <linearGradient
            id={compact ? 'edge-small' : 'edge'}
            x1="100"
            y1="160"
            x2="510"
            y2="450"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b7d7ff" />
            <stop offset=".55" stopColor="#3972ff" />
            <stop offset="1" stopColor="#114bff" stopOpacity=".35" />
          </linearGradient>
        </defs>
        <g className="geometry-grid" stroke="currentColor" strokeWidth=".7">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <path
              key={i}
              d={`M${-120 + i * 90} 150 600 ${550 - i * 55}M${-40 + i * 90} 580 600 ${190 + i * 55}`}
            />
          ))}
        </g>
        <g stroke="var(--art-stroke)" strokeWidth="1" opacity=".32">
          <path d="m300 62 223 130v258L300 580 77 450V192Z" />
          <path d="m77 192 223 130 223-130M300 322v258M300 62v260" strokeDasharray="4 7" />
          <path d="M77 450 300 322l223 128" />
        </g>
        <g
          className="diamond-stack"
          stroke={`url(#${compact ? 'edge-small' : 'edge'})`}
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          <path d="m300 239 174 101-174 101-174-101Z" fill="var(--art-fill)" fillOpacity=".22" />
          <path d="m300 198 174 101-174 101-174-101Z" fill="var(--art-fill)" fillOpacity=".35" />
          <path
            d="m300 157 174 101-174 101-174-101Z"
            fill={`url(#${compact ? 'plane-small' : 'plane'})`}
          />
          <path d="m300 115 174 101-174 101-174-101Z" fill="var(--art-fill)" fillOpacity=".16" />
          <path d="M126 216v124m348-124v124M300 317v124" opacity=".6" />
          <path d="m300 158 99 58-99 58-99-58Z" fill="var(--primary)" fillOpacity=".65" />
          <path d="m300 179 63 37-63 37-63-37Z" stroke="#bfd8ff" />
          <path d="m300 195 36 21-36 21-36-21Z" fill="#b7d7ff" fillOpacity=".8" stroke="none" />
        </g>
        <g fill="var(--accent)">
          <circle cx="77" cy="192" r="3" />
          <circle cx="523" cy="450" r="3" />
          <circle cx="300" cy="580" r="3" />
        </g>
        <g stroke="var(--art-stroke)" opacity=".5">
          <path d="M68 78h16m-8-8v16M520 92h16m-8-8v16M42 490h16m-8-8v16" />
        </g>
      </svg>
      {!compact && (
        <>
          <span className="art-label art-label-top">
            <span className="live-dot" />
            Ideas into impact
          </span>
          <span className="art-label art-label-bottom">
            CONNECTED BY POSSIBILITY<span>ENGINEERING · COMMUNITY · OPPORTUNITY</span>
          </span>
        </>
      )}
    </div>
  );
}
