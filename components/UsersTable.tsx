import { mockUsers } from '@/lib/mockData';

const statusStyles: Record<string, string> = {
  Active: 'bg-green-50 text-green-700 border border-green-200',
  Inactive: 'bg-gray-100 text-gray-500 border border-gray-200',
};

const roleStyles: Record<string, string> = {
  Admin: 'bg-red-50 text-red-700',
  Editor: 'bg-blue-50 text-blue-700',
  Journalist: 'bg-purple-50 text-purple-700',
  Analyst: 'bg-amber-50 text-amber-700',
  Contributor: 'bg-teal-50 text-teal-700',
};

export default function UsersTable() {
  return (
    <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-banker-navy">Team Members</h2>
        <div className="flex items-center gap-2">
          <input
            type="search"
            placeholder="Search users..."
            className="px-3 py-1.5 text-xs border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-banker-red"
          />
          <button className="px-3 py-1.5 bg-banker-red text-white text-xs font-bold rounded-sm hover:bg-banker-red-dark transition-colors">
            + Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-3 font-semibold">Name</th>
              <th className="text-left px-5 py-3 font-semibold">Email</th>
              <th className="text-left px-5 py-3 font-semibold">Role</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
              <th className="text-left px-5 py-3 font-semibold">Joined</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-banker-navy-light flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-500 text-xs">{user.email}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-semibold ${roleStyles[user.role] || 'bg-gray-100 text-gray-600'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-medium ${statusStyles[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs text-gray-400">{user.joined}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-xs text-blue-600 hover:underline">Edit</button>
                    <button className="text-xs text-red-500 hover:underline">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
        <span>Showing {mockUsers.length} of {mockUsers.length} users</span>
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 disabled:opacity-40" disabled>Prev</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 bg-banker-red text-white border-banker-red">1</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 disabled:opacity-40" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
