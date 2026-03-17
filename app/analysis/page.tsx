import { Metadata } from 'next';
import AnalysisCard from '@/components/AnalysisCard';
import CTASection from '@/components/CTASection';
import { analysisArticles, featuredArticles } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Analysis',
  description: 'Deep-dive analysis on banking, finance, and macroeconomic trends.',
};

export default function AnalysisPage() {
  const allAnalysis = [...analysisArticles, ...featuredArticles.slice(0, 3).map(a => ({ ...a, category: 'Analysis' }))];

  return (
    <>
      <div className="bg-banker-navy-mid border-b-4 border-banker-red py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-banker-red text-xs font-bold uppercase tracking-widest mb-2">Data-Driven</p>
          <h1 className="text-white text-4xl font-bold mb-3">Deep Analysis</h1>
          <p className="text-gray-400 text-base max-w-2xl">
            Authoritative, data-driven analysis of banking sector trends, macroeconomic shifts, and regulatory developments — written by industry experts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Lead analysis */}
            <section>
              <h2 className="section-heading mb-6">Latest Analysis</h2>
              <div className="space-y-5">
                {allAnalysis.map((article, i) => (
                  <AnalysisCard key={article.id} article={article} index={i < 2 ? i : i} />
                ))}
              </div>
            </section>

            {/* Charts placeholder */}
            <section className="bg-gray-50 border border-gray-200 rounded-sm p-6">
              <h3 className="text-banker-navy font-bold text-base mb-4">Data Spotlight: Banking Sector NPL Ratios</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {['US +1.8%', 'EU +2.3%', 'UK +1.4%', 'APAC +0.9%'].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 p-4 rounded-sm">
                    <div className="text-2xl font-black text-banker-navy mb-1">{item.split(' ')[1]}</div>
                    <div className="text-xs text-gray-500">{item.split(' ')[0]} Average NPL</div>
                    <div className="text-xs text-red-500 font-medium mt-1">YoY Change</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-banker-navy rounded-sm p-5">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Analyst Notes</h3>
              {[
                { note: 'Basel IV RWA floors will require significant capital reallocation for most G-SIBs.', author: 'David Webster' },
                { note: 'European CRE NPLs could reach 8% in stressed scenarios — well above historical averages.', author: 'Robert Stern' },
                { note: 'QT pace appears sustainable but bond market volatility remains a key risk for H2 2026.', author: 'Sophie Laurent' },
              ].map((n, i) => (
                <div key={i} className="py-3 border-b border-white/10 last:border-b-0">
                  <p className="text-gray-300 text-xs italic leading-relaxed">&quot;{n.note}&quot;</p>
                  <p className="text-gray-500 text-xs mt-1">— {n.author}</p>
                </div>
              ))}
            </div>

            <div className="border border-gray-200 rounded-sm p-4">
              <h3 className="text-banker-navy font-bold text-sm mb-3">Analysis Topics</h3>
              {['Macroeconomics', 'Credit Risk', 'M&A', 'Capital Markets', 'Regulation', 'Stress Testing'].map(t => (
                <a key={t} href="#" className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0 text-sm text-gray-600 hover:text-banker-red transition-colors">
                  <span>{t}</span>
                  <span className="text-gray-300">→</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
