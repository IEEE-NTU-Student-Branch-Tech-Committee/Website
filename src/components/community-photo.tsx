import Image from 'next/image';
import { asset } from '@/data/site';

export function CommunityPhoto({ alt, sizes }: { alt: string; sizes: string }) {
  return (
    <picture className="responsive-image">
      <source
        type="image/webp"
        srcSet={`${asset('/images/community-480.webp')} 480w, ${asset('/images/community-800.webp')} 800w`}
        sizes={sizes}
      />
      <Image
        src={asset('/images/community-800.webp')}
        alt={alt}
        width={800}
        height={480}
        sizes={sizes}
      />
    </picture>
  );
}
