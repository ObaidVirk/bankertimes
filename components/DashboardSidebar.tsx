'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoutButton from './LogoutButton';

const navItems = [
  {
    label: 'Overview',
    href: '/admin',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Users',
    href: '/admin#users',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: 'Content',
    href: '/admin#content',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: 'Analytics',
    href: '/admin#analytics',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Settings',
    href: '/admin#settings',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    label: 'Back to Site',
    href: '/',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    ),
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@example.com';

  return (
    <aside className="w-60 bg-banker-navy flex-shrink-0 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <Link href="/">
          <Image
            src="/adminpanel.png"
            alt="Admin panel"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <p className="text-gray-400 text-xs mt-0.5">Admin Console</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest px-3 py-2">
          Management
        </p>
        {navItems.map((item) => {
          const isActive = item.href === '/admin' ? pathname === '/admin' : false;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-banker-red text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/10 space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
        <LogoutButton />

        {/* Admin user pill */}
        <div className="flex items-center gap-3 px-3 py-2 mt-2 bg-white/5 rounded-sm">
          <div className="w-7 h-7 rounded-full bg-banker-red flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate">Admin User</p>
            <p className="text-gray-500 text-xs truncate">{adminEmail}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
