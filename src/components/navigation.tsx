'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/data/site';
import { Brand } from './brand';
import { ThemeToggle } from './theme-toggle';
import { Icon } from './icon';

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (open && !header.current?.contains(event.target as Node)) setOpen(false);
    }
    const media = matchMedia('(min-width: 900px)');
    const close = () => setOpen(false);
    media.addEventListener('change', close);
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => {
      media.removeEventListener('change', close);
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="nav-inner container">
        <Brand />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`nav-links ${open ? 'is-open' : ''}`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-toggle"
            ref={menuButton}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
