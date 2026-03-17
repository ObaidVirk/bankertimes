'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/context/TranslationContext';

const navLinkDefs = [
  { tKey: 'news',     href: '/news' },
  { tKey: 'insights', href: '/insights' },
  { tKey: 'analysis', href: '/analysis' },
  { tKey: 'research', href: '/research' },
  { tKey: 'events',   href: '/events' },
  { tKey: 'pricing',  href: '/pricing' },
  { tKey: 'about',    href: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsAdmin(localStorage.getItem('adminLoggedIn') === 'true');
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-banker-navy-mid border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9 text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <span>Tuesday, March 11, 2026</span>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Subscribe</a>
            <a href="#" className="hover:text-white transition-colors">Newsletter</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Digital Edition</a>
            <a href="#" className="hover:text-white transition-colors">Awards</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-banker-navy sticky top-0 z-50 shadow-nav">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/bankertimes.org.png"
                alt="Bankertimes.org"
                width={220}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinkDefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link px-3 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors relative"
                >
                  {t(`nav.${link.tKey}`)}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <LanguageSelector />

              {isAdmin && (
                <Link
                  href="/admin"
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-banker-gold text-banker-navy text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-banker-gold-light transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                  <span className="hidden lg:inline">{t('nav.dashboard')}</span>
                </Link>
              )}

              <Link
                href="/login"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-white border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-sm transition-colors"
              >
                {t('nav.login')}
              </Link>

              <Link
                href="/pricing"
                className="hidden md:inline-flex px-3 py-1.5 text-sm font-semibold text-white border border-banker-red/70 bg-banker-red/20 hover:bg-banker-red hover:border-banker-red rounded-sm transition-colors"
              >
                {t('nav.pricing')}
              </Link>

              <Link
                href="/signup"
                className="inline-flex px-3 py-1.5 text-sm font-bold text-white bg-banker-red hover:bg-banker-red-dark rounded-sm transition-colors"
              >
                {t('nav.signup')}
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden ml-1 p-2 text-white hover:text-gray-300"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary nav (categories) */}
        <div className="hidden lg:block bg-banker-navy-light border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-0 h-9 text-xs font-medium">
              {['Global Banking', 'Regulation', 'Markets', 'Technology', 'ESG', 'Investment Banking', 'Transaction Banking', 'Wealth Management', 'Awards'].map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="px-3 h-full flex items-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-16 bg-banker-navy overflow-auto">
          <nav className="p-4 flex flex-col gap-1">
            {navLinkDefs.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-gray-100 hover:bg-white/10 rounded transition-colors border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {t(`nav.${link.tKey}`)}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-banker-gold text-banker-navy font-bold rounded-sm text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('nav.dashboard')}
                </Link>
              )}
              <Link
                href="/login"
                className="flex items-center justify-center px-4 py-2.5 border border-white/30 text-white font-medium rounded-sm text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.login')}
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center px-4 py-2.5 border border-banker-red/70 text-white bg-banker-red/20 font-semibold rounded-sm text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center px-4 py-2.5 bg-banker-red text-white font-bold rounded-sm text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.signup')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
