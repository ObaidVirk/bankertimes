import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  'News & Analysis': [
    { label: 'Latest News', href: '/news' },
    { label: 'Market Insights', href: '/insights' },
    { label: 'Deep Analysis', href: '/analysis' },
    { label: 'Research Reports', href: '/research' },
    { label: 'Opinion', href: '#' },
    { label: 'Regulation', href: '#' },
  ],
  'Banking Sectors': [
    { label: 'Global Banking', href: '#' },
    { label: 'Investment Banking', href: '#' },
    { label: 'Retail Banking', href: '#' },
    { label: 'Transaction Banking', href: '#' },
    { label: 'Wealth Management', href: '#' },
    { label: 'Fintech', href: '#' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Awards', href: '#' },
    { label: 'Advertise', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  'Account': [
    { label: 'Subscribe', href: '/signup' },
    { label: 'Log In', href: '/login' },
    { label: 'Newsletter', href: '#' },
    { label: 'Digital Edition', href: '#' },
    { label: 'Admin Dashboard', href: '/admin' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { label: 'Twitter/X', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
];

export default function Footer() {
  return (
    <footer className="bg-banker-navy text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/bankertimes.org.png"
                alt="Bankertimes.org"
                width={165}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              The definitive source of banking and finance intelligence for professionals worldwide. Trusted by 1.2M+ readers globally.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-banker-red rounded-sm transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="mt-12 p-6 bg-banker-navy-light rounded-sm border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base">Subscribe to our daily briefing</h4>
              <p className="text-gray-400 text-sm mt-1">Get the most important banking stories delivered to your inbox each morning.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-banker-red rounded-sm"
              />
              <button className="px-5 py-2 bg-banker-red hover:bg-banker-red-dark text-white text-sm font-bold rounded-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bankertimes.org. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
