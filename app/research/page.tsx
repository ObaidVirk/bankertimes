import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import CTASection from '@/components/CTASection';
import { researchArticles, newsArticles } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Original research reports, surveys, and data from Bankertimes.org.',
};

export default function ResearchPage() {
  const allResearch = [...researchArticles, ...newsArticles.slice(0, 4).map(a => ({ ...a, category: 'Research' }))];

  return (
    <>
      <div className="bg-gradient-to-br from-banker-navy via-banker-navy-mid to-banker-navy-light py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-banker-gold text-xs font-bold uppercase tracking-widest mb-2">Original Research</p>
          <h1 className="text-white text-4xl font-bold mb-3">Research & Reports</h1>
          <p className="text-gray-300 text-base max-w-2xl mb-6">
            Proprietary research, data surveys, and industry benchmarking studies published exclusively by the Bankertimes.org research team.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 bg-banker-red text-white text-sm font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
              All Reports
            </button>
            <button className="px-5 py-2 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors">
              Annual Rankings
            </button>
            <button className="px-5 py-2 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors">
              Special Reports
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Featured report banner */}
        <div className="mb-10 flex flex-col md:flex-row items-center gap-6 bg-gray-50 border border-gray-200 rounded-sm p-6">
          <div className="w-full md:w-24 h-32 bg-banker-navy rounded-sm flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-banker-gold text-3xl font-black">26</span>
            <span className="text-white text-xs uppercase font-bold">Report</span>
          </div>
          <div className="flex-1">
            <span className="bg-banker-red text-white text-xs font-bold px-2 py-0.5 uppercase tracking-wider mb-2 inline-block">
              Featured Report
            </span>
            <h2 className="text-banker-navy font-bold text-xl mb-2">
              The State of Open Banking Globally: 2026 Annual Report
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Our flagship annual report covers open banking adoption, API standardisation, and consumer data frameworks across 40 global markets.
            </p>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-banker-navy text-white text-xs font-bold rounded-sm hover:bg-banker-navy-light transition-colors">
                Download PDF
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-600 text-xs font-medium rounded-sm hover:border-gray-400 transition-colors">
                Read Online
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="section-heading mb-6">All Research</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allResearch.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-banker-navy p-5 rounded-sm">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Research Categories</h3>
              {[
                { label: 'Global Banking Surveys', count: 14 },
                { label: 'Trade Finance', count: 8 },
                { label: 'ESG & Sustainability', count: 11 },
                { label: 'Digital Transformation', count: 9 },
                { label: 'Retail Banking', count: 7 },
                { label: 'Transaction Banking', count: 6 },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                  <span className="text-gray-300 text-sm hover:text-white cursor-pointer transition-colors">{cat.label}</span>
                  <span className="bg-white/10 text-gray-300 text-xs px-2 py-0.5 rounded-sm">{cat.count}</span>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 p-4 rounded-sm text-center">
              <p className="text-banker-navy font-bold text-sm mb-2">Commission Bespoke Research</p>
              <p className="text-gray-500 text-xs mb-4">Work with our research team to produce custom benchmarking and analysis for your organisation.</p>
              <button className="px-5 py-2 bg-banker-red text-white text-xs font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
                Get in Touch
              </button>
            </div>
          </aside>
        </div>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
