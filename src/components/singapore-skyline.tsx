import { asset } from '@/data/site';

// Original generated architectural linework. Luminance exposes only the ink,
// allowing the same drawing to inherit both the light and dark palette.
export function SingaporeSkyline() {
  return (
    <svg className="singapore-skyline" viewBox="0 0 2172 724" aria-hidden="true" focusable="false">
      <defs>
        <mask
          id="city-linework"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="2172"
          height="724"
          style={{ maskType: 'luminance' }}
        >
          <image href={asset('/images/ntu-singapore-linework.webp')} width="2172" height="724" />
        </mask>
      </defs>
      <rect width="2172" height="724" fill="var(--skyline-stroke)" mask="url(#city-linework)" />
    </svg>
  );
}
