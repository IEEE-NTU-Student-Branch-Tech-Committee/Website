import Image from 'next/image';
import Link from 'next/link';
import { asset, siteConfig } from '@/data/site';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
      <span className="brand-mark">
        <Image src={asset('/images/ieee-white.png')} width={400} height={116} alt="" priority />
      </span>
      <span className="brand-divider" />
      <span className="brand-name">
        NTU<span>STUDENT BRANCH</span>
      </span>
    </Link>
  );
}
