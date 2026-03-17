import { Metadata } from 'next';
import InsightCard from '@/components/InsightCard';
import CTASection from '@/components/CTASection';
import { insightArticles, newsArticles } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Expert insights and commentary on global banking trends and market developments.',
};

const topics = ['All', 'Wealth Management', 'Fintech', 'Treasury', 'ESG', 'Digital Banking', 'Risk Management'];

export default function InsightsPage() {
  const allInsights = [...insightArticles, ...newsArticles.slice(0, 4).map(a => ({ ...a, category: 'Insights' }))];

  return (
    <>
      <div className="bg-gradient-to-r from-banker-navy to-banker-navy-light py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-banker-gold text-xs font-bold uppercase tracking-widest mb-2">Expert Perspective</p>
          <h1 className="text-white text-4xl font-bold mb-3">Market Insights</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            In-depth expert commentary, strategic perspectives, and forward-looking analysis curated for senior banking executives.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 py-2 overflow-x-auto">
          {topics.map((t, i) => (
            <button
              key={t}
              className={`px-4 py-1.5 text-xs font-semibold whitespace-nowrap rounded-sm transition-colors ${
                i === 0 ? 'bg-banker-navy text-white' : 'text-gray-600 hover:bg-white border border-transparent hover:border-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Featured insight — large */}
        <div className="mb-10 p-6 bg-banker-navy-light rounded-sm border-l-4 border-banker-gold">
          <p className="text-banker-gold text-xs font-bold uppercase tracking-widest mb-2">Editor&apos;s Pick</p>
          <h2 className="text-white text-2xl font-bold mb-2">{insightArticles[0].title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{insightArticles[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span className="font-medium text-gray-200">{insightArticles[0].author}</span>
              <span>•</span>
              <span>{insightArticles[0].date}</span>
              <span>•</span>
              <span>{insightArticles[0].readTime}</span>
            </div>
            <button className="px-4 py-1.5 bg-banker-gold text-banker-navy text-xs font-bold rounded-sm hover:bg-banker-gold-light transition-colors">
              Read Full Insight →
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="section-heading mb-6">All Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {allInsights.map((article) => (
                <InsightCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="bg-banker-gold px-4 py-3">
                <h3 className="text-banker-navy font-bold text-sm uppercase tracking-wider">Featured Authors</h3>
              </div>
              {[
                { name: 'Oliver Hartmann', title: 'Senior Banking Analyst', articles: 24 },
                { name: 'Priya Sharma', title: 'Fintech Correspondent', articles: 18 },
                { name: 'Michael Brandt', title: 'Treasury Expert', articles: 15 },
                { name: 'Alice Beaumont', title: 'ESG Specialist', articles: 12 },
              ].map((a) => (
                <div key={a.name} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-banker-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {a.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-banker-navy">{a.name}</p>
                    <p className="text-xs text-gray-400">{a.title} · {a.articles} articles</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
