import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import InsightCard from '@/components/InsightCard';
import AnalysisCard from '@/components/AnalysisCard';
import CTASection from '@/components/CTASection';
import { newsArticles, insightArticles, analysisArticles, upcomingEvents } from '@/lib/mockData';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Main content body */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Latest News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-heading">Latest News</h2>
                <Link href="/news" className="text-sm font-semibold text-banker-red hover:underline flex items-center gap-1">
                  View all <span>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newsArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Market Insights */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-heading">Market Insights</h2>
                <Link href="/insights" className="text-sm font-semibold text-banker-red hover:underline flex items-center gap-1">
                  View all <span>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {insightArticles.slice(0, 4).map((article) => (
                  <InsightCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Deep Analysis */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-heading">Deep Analysis</h2>
                <Link href="/analysis" className="text-sm font-semibold text-banker-red hover:underline flex items-center gap-1">
                  View all <span>→</span>
                </Link>
              </div>
              <div className="space-y-4">
                {analysisArticles.map((article, i) => (
                  <AnalysisCard key={article.id} article={article} index={i} />
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">

            {/* Trending now */}
            <div>
              <h3 className="text-banker-navy font-bold text-base border-b-2 border-banker-red pb-2 mb-4 uppercase tracking-wide text-sm">
                Trending Now
              </h3>
              <div className="space-y-0">
                {newsArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="compact" />
                ))}
              </div>
            </div>

            {/* Markets ticker */}
            <div className="bg-banker-navy rounded-sm p-4">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
                Market Snapshot
              </h3>
              {[
                { name: 'S&P 500', val: '5,842.34', chg: '+0.82%', up: true },
                { name: 'FTSE 100', val: '8,124.60', chg: '-0.14%', up: false },
                { name: 'DAX', val: '18,234.12', chg: '+0.55%', up: true },
                { name: 'USD/EUR', val: '0.9217', chg: '+0.03%', up: true },
                { name: 'Gold', val: '$2,348', chg: '+1.21%', up: true },
                { name: '10Y UST', val: '4.62%', chg: '-0.04%', up: false },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                  <span className="text-gray-300 text-xs">{m.name}</span>
                  <div className="text-right">
                    <span className="text-white text-xs font-mono font-semibold block">{m.val}</span>
                    <span className={`text-xs font-medium ${m.up ? 'text-green-400' : 'text-red-400'}`}>
                      {m.chg}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming events mini */}
            <div>
              <h3 className="text-banker-navy font-bold text-sm border-b-2 border-banker-red pb-2 mb-4 uppercase tracking-wide">
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <Link key={event.id} href="/events" className="block group p-3 border border-gray-100 rounded-sm hover:border-banker-red transition-colors">
                    <span className="text-xs font-bold text-banker-red uppercase tracking-wider">
                      {event.type}
                    </span>
                    <h4 className="text-sm font-semibold text-banker-navy mt-0.5 line-clamp-2 group-hover:text-banker-red transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400">
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                      <span>•</span>
                      {event.location}
                    </div>
                  </Link>
                ))}
                <Link href="/events" className="block text-xs font-semibold text-banker-red hover:underline text-center pt-1">
                  View all events →
                </Link>
              </div>
            </div>

            {/* Newsletter promo */}
            <div className="bg-banker-red text-white rounded-sm p-5">
              <h3 className="font-bold text-base mb-2">Daily Briefing</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the top banking and finance stories every morning, curated by our editors.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-sm focus:outline-none focus:bg-white/30 mb-2"
              />
              <button className="w-full py-2 bg-white text-banker-red font-bold text-sm rounded-sm hover:bg-gray-100 transition-colors">
                Subscribe Free
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Sections */}
      <CTASection variant="awards" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-heading">Research & Reports</h2>
            <Link href="/research" className="text-sm font-semibold text-banker-red hover:underline flex items-center gap-1">
              All research <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={{ ...article, category: 'Research' }} />
            ))}
          </div>
        </section>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
