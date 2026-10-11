import { asset } from '@/data/site';

export function SingaporeSkyline() {
  return (
    <svg className="singapore-skyline" viewBox="0 0 944 288" aria-hidden="true" focusable="false">
      <defs>
        <mask
          id="city-linework"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="944"
          height="288"
          style={{ maskType: 'alpha' }}
        >
          <image href={asset('/images/singapore-pen-lineart.svg')} width="944" height="288" />
        </mask>
      </defs>
      <g mask="url(#city-linework)">
        <rect width="472" height="288" fill="var(--hero-left-ink)" />
        <rect x="472" width="472" height="288" fill="var(--hero-right-ink)" />
      </g>
    </svg>
  );
}
