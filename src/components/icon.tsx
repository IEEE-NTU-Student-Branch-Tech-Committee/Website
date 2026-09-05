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
