import { mockContent } from '@/lib/mockData';

const statusStyles: Record<string, string> = {
  Published: 'bg-green-50 text-green-700 border border-green-200',
  Draft: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Under Review': 'bg-blue-50 text-blue-700 border border-blue-200',
};

const typeStyles: Record<string, string> = {
  Article: 'bg-gray-100 text-gray-700',
  Analysis: 'bg-purple-50 text-purple-700',
  Research: 'bg-teal-50 text-teal-700',
  Insight: 'bg-blue-50 text-blue-700',
  Regulation: 'bg-red-50 text-red-700',
};

export default function ContentTable() {
  return (
    <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-banker-navy">Content Management</h2>
        <div className="flex items-center gap-2">
          <select className="px-3 py-1.5 text-xs border border-gray-200 rounded-sm focus:outline-none bg-white">
            <option>All Types</option>
            <option>Article</option>
            <option>Analysis</option>
            <option>Research</option>
            <option>Insight</option>
          </select>
          <button className="px-3 py-1.5 bg-banker-red text-white text-xs font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
            + New Article
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-3 font-semibold">Title</th>
              <th className="text-left px-5 py-3 font-semibold">Type</th>
              <th className="text-left px-5 py-3 font-semibold">Author</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
              <th className="text-left px-5 py-3 font-semibold">Date</th>
              <th className="text-right px-5 py-3 font-semibold">Views</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockContent.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3">
                  <span className="font-medium text-gray-800 line-clamp-1 max-w-xs block">{item.title}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-medium ${typeStyles[item.type] || 'bg-gray-100 text-gray-600'}`}>
                    {item.type}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs text-gray-500">{item.author}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-medium ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs text-gray-400">{item.date}</td>
                <td className="px-5 py-3 text-right">
                  <span className="text-xs font-mono text-gray-600">
                    {item.views > 0 ? item.views.toLocaleString() : '—'}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-xs text-blue-600 hover:underline">Edit</button>
                    <button className="text-xs text-red-500 hover:underline">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
        <span>Showing {mockContent.length} items</span>
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 disabled:opacity-40" disabled>Prev</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm bg-banker-red text-white border-banker-red">1</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50">2</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
}
