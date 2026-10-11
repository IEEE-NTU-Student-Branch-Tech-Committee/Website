import { asset } from '@/data/site';

export function SingaporeSkyline() {
  return (
    <svg className="singapore-skyline" viewBox="0 0 944 288" aria-hidden="true" focusable="false">
      <defs>
        <filter id="city-ink" colorInterpolationFilters="sRGB">
          {/* Paper becomes transparent; every ink tone, including source marks, remains. */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.2126 -0.7152 -0.0722 1 0"
          />
          <feMorphology operator="dilate" radius="0.45" />
        </filter>
        <mask
          id="city-linework"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="944"
          height="288"
          style={{ maskType: 'alpha' }}
        >
          <image
            href={asset('/images/singapore-handdrawn-lineart.jpg')}
            width="944"
            height="288"
            filter="url(#city-ink)"
          />
        </mask>
      </defs>
      <g mask="url(#city-linework)">
        <rect width="472" height="288" fill="var(--hero-background)" />
        <rect x="472" width="472" height="288" fill="#fff" />
      </g>
    </svg>
  );
}
