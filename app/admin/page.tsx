import { Metadata } from 'next';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import UsersTable from '@/components/UsersTable';
import ContentTable from '@/components/ContentTable';
import { analyticsStats, mockContent, mockUsers } from '@/lib/mockData';
import AdminAuthSync from '@/components/AdminAuthSync';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Bankertimes.org',
  description: 'Bankertimes.org admin console.',
};

const statColors: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  gold: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

const statIcons: Record<string, React.ReactNode> = {
  FileText: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  UserCheck: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  DollarSign: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// Mini chart bar data
const chartData = [40, 65, 50, 80, 55, 90, 75, 95, 70, 85, 60, 100];

export default function AdminPage() {
  const publishedCount = mockContent.filter(c => c.status === 'Published').length;
  const draftCount = mockContent.filter(c => c.status === 'Draft').length;
  const reviewCount = mockContent.filter(c => c.status === 'Under Review').length;
  const activeUsers = mockUsers.filter(u => u.status === 'Active').length;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminAuthSync />
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader title="Dashboard Overview" />

        <main className="flex-1 overflow-auto p-6 space-y-8">

          {/* Analytics cards */}
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Key Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {analyticsStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-gray-200 rounded-sm p-5 flex items-center justify-between hover:shadow-card transition-shadow"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-banker-navy">{stat.value}</p>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-1 px-2 py-0.5 rounded-sm border ${statColors[stat.color]}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      {stat.change}
                    </span>
                  </div>
                  <div className={`p-3 rounded-sm ${statColors[stat.color]}`}>
                    {statIcons[stat.icon]}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Traffic chart + content status */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Traffic mini chart */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-banker-navy text-sm">Monthly Traffic (2026)</h3>
                <select className="text-xs border border-gray-200 rounded-sm px-2 py-1 text-gray-600 focus:outline-none">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                </select>
              </div>
              <div className="flex items-end gap-1.5 h-28">
                {chartData.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-banker-red rounded-sm opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Content status */}
            <div className="bg-white border border-gray-200 rounded-sm p-5">
              <h3 className="font-bold text-banker-navy text-sm mb-4">Content Status</h3>
              <div className="space-y-3">
                {[
                  { label: 'Published', count: publishedCount, color: 'bg-green-500', pct: Math.round((publishedCount / mockContent.length) * 100) },
                  { label: 'Under Review', count: reviewCount, color: 'bg-blue-400', pct: Math.round((reviewCount / mockContent.length) * 100) },
                  { label: 'Draft', count: draftCount, color: 'bg-yellow-400', pct: Math.round((draftCount / mockContent.length) * 100) },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-600 font-medium">{item.label}</span>
                      <span className="text-gray-400">{item.count} items ({item.pct}%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Active Users</span>
                    <span className="font-semibold text-green-600">{activeUsers}/{mockUsers.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick stats row */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Avg. Read Time', value: '4m 32s', sub: 'Per article' },
              { label: 'Bounce Rate', value: '38.2%', sub: '↓ 2.1% vs last month' },
              { label: 'Newsletter CTR', value: '22.4%', sub: '↑ 1.8% vs last month' },
              { label: 'Subscription Conv.', value: '3.8%', sub: 'From free readers' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-sm p-4 text-center">
                <p className="text-2xl font-black text-banker-navy">{s.value}</p>
                <p className="text-xs font-semibold text-gray-600 mt-0.5">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </section>

          {/* Users table */}
          <section id="users">
            <UsersTable />
          </section>

          {/* Content table */}
          <section id="content">
            <ContentTable />
          </section>

          {/* Settings panel */}
          <section id="settings" className="bg-white border border-gray-200 rounded-sm">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-banker-navy">Site Settings</h2>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">General</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Site Name', value: 'Bankertimes.org' },
                    { label: 'Site URL', value: 'https://www.bankertimes.org' },
                    { label: 'Contact Email', value: 'info@bankertimes.org' },
                    { label: 'Articles per Page', value: '12' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-medium text-gray-500 mb-1">{f.label}</label>
                      <input
                        defaultValue={f.value}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-banker-red bg-gray-50"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Feature Toggles</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Enable Newsletter Signup', on: true },
                    { label: 'Show Breaking News Ticker', on: true },
                    { label: 'Enable Paywall', on: false },
                    { label: 'Allow User Comments', on: false },
                    { label: 'Maintenance Mode', on: false },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0">
                      <span className="text-sm text-gray-600">{t.label}</span>
                      <button
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${t.on ? 'bg-banker-red' : 'bg-gray-200'}`}
                        aria-label={t.label}
                      >
                        <span
                          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow ${t.on ? 'translate-x-5' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-gray-100 flex justify-end gap-2">
              <button className="px-4 py-2 border border-gray-200 text-gray-600 text-sm rounded-sm hover:bg-gray-50 transition-colors">
                Discard
              </button>
              <button className="px-5 py-2 bg-banker-red text-white text-sm font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
                Save Changes
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
