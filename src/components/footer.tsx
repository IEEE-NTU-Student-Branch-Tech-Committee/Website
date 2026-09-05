import Link from 'next/link';
import { navigation, siteConfig } from '@/data/site';
import { Brand } from './brand';
import { Icon } from './icon';

export function Footer() {
  const hasContact = siteConfig.contactEmail || siteConfig.socialLinks.length > 0;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>
              Engineering ideas. Building communities.
              <br />
              Creating opportunities.
            </p>
            <span className="footer-location">Nanyang Technological University · Singapore</span>
          </div>
          <nav aria-label="Footer navigation">
            <span className="eyebrow">Explore</span>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          {hasContact && (
            <div className="footer-contact">
              <span className="eyebrow">Connect</span>
              {siteConfig.contactEmail && (
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              )}
              {siteConfig.socialLinks.map((social) => (
                <a key={social.url} href={social.url}>
                  {social.label}
                  <Icon name="diagonal" />
                </a>
              ))}
            </div>
          )}
          <div className="footer-signoff">
            Built on curiosity.
            <br />
            <span>Since 1991.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a href="#top" className="back-top">
            Back to top
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
