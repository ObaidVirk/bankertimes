import Link from 'next/link';

type Props = {
  variant?: 'subscribe' | 'awards' | 'events';
};

const content = {
  subscribe: {
    bg: 'bg-banker-navy',
    label: 'Premium Access',
    heading: 'Unlock exclusive banking intelligence',
    subheading: 'Join 48,000+ finance professionals who rely on Bankertimes.org for analysis, research, and insights that move markets.',
    cta: 'Subscribe Now',
    ctaHref: '/signup',
    secondary: 'View Plans',
    secondaryHref: '/signup',
    features: [
      'Unlimited access to all articles',
      'Deep-dive research reports',
      'Daily market briefing newsletter',
      'Exclusive award coverage',
    ],
  },
  awards: {
    bg: 'bg-gradient-to-r from-banker-navy to-banker-navy-light',
    label: '2026 Awards Season',
    heading: 'Bankertimes Awards for Excellence',
    subheading: 'Recognising the world\'s best banks across 80+ categories. Nominations are now open for the 2026 Global Banking Awards.',
    cta: 'Nominate Now',
    ctaHref: '#',
    secondary: 'View Past Winners',
    secondaryHref: '#',
    features: [
      'Best Global Bank',
      'Best Investment Bank',
      'Best Digital Bank',
      'Best Sustainable Finance',
    ],
  },
  events: {
    bg: 'bg-gradient-to-br from-banker-red to-banker-red-dark',
    label: 'Upcoming Events',
    heading: 'Connect with the global banking community',
    subheading: 'Attend our exclusive conferences, summits, and roundtables — bringing together the world\'s leading financial professionals.',
    cta: 'View All Events',
    ctaHref: '/events',
    secondary: 'Register Interest',
    secondaryHref: '#',
    features: [
      'Banker Summit — London, Apr 2026',
      'Global Transaction Banking Awards',
      'ESG & Sustainable Finance Forum',
      'Asia Pacific Banking Leaders Summit',
    ],
  },
};

export default function CTASection({ variant = 'subscribe' }: Props) {
  const c = content[variant];

  return (
    <section className={`${c.bg} py-14`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
              {c.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {c.heading}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              {c.subheading}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href={c.ctaHref}
                className="px-6 py-3 bg-banker-gold text-banker-navy text-sm font-bold rounded-sm hover:bg-banker-gold-light transition-colors"
              >
                {c.cta}
              </Link>
              <Link
                href={c.secondaryHref}
                className="px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                {c.secondary}
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-72">
            <ul className="space-y-3">
              {c.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
                  <svg className="w-4 h-4 text-banker-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
