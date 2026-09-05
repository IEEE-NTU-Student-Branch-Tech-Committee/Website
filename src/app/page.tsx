import type { Metadata } from 'next';
import { SingaporeSkyline } from '@/components/singapore-skyline';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  alternates: { canonical: `${siteConfig.url}/` },
};

export default function HomePage() {
  return (
    <section className="home-landing" aria-labelledby="home-title">
      <div className="home-plane" aria-hidden="true" />
      <div className="container home-heading-wrap">
        <h1 id="home-title" className="home-title">
          <span className="home-title-ieee">IEEE</span>{' '}
          <span className="home-title-branch">NTU Student Branch</span>
        </h1>
      </div>
      <SingaporeSkyline />
    </section>
  );
}
