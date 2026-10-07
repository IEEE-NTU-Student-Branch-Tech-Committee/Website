import type { Metadata } from 'next';
import { SingaporeSkyline } from '@/components/singapore-skyline';
import { siteConfig } from '@/data/site';
import { Metrics } from '@/components/metrics';
import {
  HomeAbout,
  HomeEvents,
  HomeTeam,
  HomeJoin,
  HomePartnerships,
} from '@/components/home-sections';

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  alternates: { canonical: `${siteConfig.url}/` },
};

export default function HomePage() {
  return (
    <>
      <section id="home" className="home-landing" aria-labelledby="home-title">
        <div className="home-plane" aria-hidden="true" />
        <div className="container home-heading-wrap">
          <h1 id="home-title" className="home-title">
            <span className="home-title-ieee">IEEE</span>{' '}
            <span className="home-title-branch">NTU Student Branch</span>
            <span className="home-title-university">Nanyang Technological University</span>
          </h1>
        </div>
        <SingaporeSkyline />
        <a className="home-scroll" href="#about" aria-label="Explore IEEE NTU">
          <span aria-hidden="true">↓</span>
        </a>
      </section>
      <HomeAbout />
      <Metrics />
      <HomeEvents />
      <HomeTeam />
      <HomeJoin />
      <HomePartnerships />
    </>
  );
}
