import type { CSSProperties } from 'react';

const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  diagonal: 'M6 18 18 6M6 6h12v12',
  down: 'M12 4v16m-6-6 6 6 6-6',
  sun: 'M12 3V1m0 22v-2M3 12H1m22 0h-2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4m0-15.6-1.4 1.4M5.6 18.4l-1.4 1.4M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0',
  moon: 'M20.5 13a8.5 8.5 0 1 1-9.5-9.5A7 7 0 0 0 20.5 13Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'm6 6 12 12M6 18 18 6',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18',
  connections: 'M8 5h8M5 8v8m3 3h8m3-11v8M2 2h6v6H2zm14 0h6v6h-6zM2 16h6v6H2zm14 0h6v6h-6z',
  spark: 'm12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z',
  layers: 'm12 2 10 6-10 6L2 8Zm-10 10 10 6 10-6M2 17l10 6 10-6',
  compass: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM16 8l-3 5-5 3 3-5Z',
  mail: 'M3 5h18v14H3Zm0 0 9 8 9-8',
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm.5-5.5h.01',
  linkedin: 'M5 9v11M5 4v.01M10 20V9m0 5c0-7 9-7 9 0v6',
  github:
    'M9 19c-4 1-4-2-6-2m13 5v-4a3.5 3.5 0 0 0-1-2.7c3.4-.4 7-1.7 7-7.5A5.8 5.8 0 0 0 20.4 4a5.4 5.4 0 0 0-.1-3.8S19 .8 16 2.2a13.4 13.4 0 0 0-8 0C5 .8 3.7 1.2 3.7 1.2A5.4 5.4 0 0 0 3.6 5a5.8 5.8 0 0 0-1.6 4c0 5.8 3.6 7.1 7 7.5A3.5 3.5 0 0 0 8 19.2V22',
};

export function Icon({
  name = 'arrow',
  className,
  style,
}: {
  name?: keyof typeof paths;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={paths[name]} />
    </svg>
  );
}
