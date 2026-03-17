import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import CTASection from '@/components/CTASection';
import { newsArticles, featuredArticles } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest banking and financial news from around the world.',
};

const categories = ['All', 'Monetary Policy', 'Earnings', 'CBDC', 'Regulation', 'Expansion', 'Markets', 'Cybersecurity'];

export default function NewsPage() {
  const allArticles = [...newsArticles, ...featuredArticles.slice(3)];

  return (
    <>
      {/* Page header */}
      <div className="bg-banker-navy py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-banker-red text-xs font-bold uppercase tracking-widest mb-2">Our Coverage</p>
          <h1 className="text-white text-4xl font-bold mb-3">Banking News</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Breaking news, market-moving stories, and comprehensive coverage of the global banking industry — updated throughout the day.
          </p>
        </div>
      </div>

      {/* Category filter bar */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 text-xs font-semibold whitespace-nowrap rounded-sm transition-colors ${
                  i === 0
                    ? 'bg-banker-red text-white'
                    : 'text-gray-600 hover:bg-white hover:text-banker-navy border border-transparent hover:border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load more */}
            <div className="mt-10 text-center">
              <button className="px-8 py-3 border-2 border-banker-navy text-banker-navy font-bold text-sm rounded-sm hover:bg-banker-navy hover:text-white transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-banker-navy rounded-sm p-5">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Most Read Today</h3>
              <ol className="space-y-3">
                {newsArticles.slice(0, 5).map((a, i) => (
                  <li key={a.id} className="flex gap-3 items-start">
                    <span className="text-2xl font-black text-white/20 leading-none w-6 flex-shrink-0">{i + 1}</span>
                    <p className="text-gray-300 text-xs leading-snug hover:text-white transition-colors cursor-pointer">{a.title}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-gray-200 rounded-sm p-5">
              <h3 className="text-banker-navy font-bold text-sm mb-4 uppercase tracking-wider">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Basel IV', 'Central Banks', 'Digital Assets', 'ESG', 'Fintech', 'M&A', 'Private Equity', 'Regulation', 'Wealth Management', 'Transaction Banking'].map(t => (
                  <a key={t} href="#" className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs text-gray-600 hover:bg-banker-red hover:text-white hover:border-banker-red transition-colors rounded-sm">
                    {t}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
