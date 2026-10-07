import Link from 'next/link';
import { navigation, siteConfig } from '@/data/site';
import { Brand } from './brand';
import { SocialLinks } from './social-links';
import { Icon } from './icon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-identity">
            <Brand />
            <p>
              Nanyang Technological University
              <br />
              Singapore
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Explore</h2>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <h2>Connect</h2>
            <SocialLinks />
          </div>
          <div className="footer-friends">
            <h2>Friends</h2>
            {siteConfig.friends.map((friend) => (
              <a key={friend.url} href={friend.url} target="_blank" rel="noopener noreferrer">
                {friend.label}
                <Icon name="diagonal" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a href="#top" className="back-top">
            Back to top <Icon name="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
