import { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { upcomingEvents } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Banking conferences, summits, forums, and awards from Bankertimes.org.',
};

const typeColors: Record<string, string> = {
  Conference: 'bg-blue-100 text-blue-800',
  Awards: 'bg-yellow-100 text-yellow-800',
  Forum: 'bg-teal-100 text-teal-800',
  Summit: 'bg-purple-100 text-purple-800',
  Roundtable: 'bg-gray-100 text-gray-700',
};

export default function EventsPage() {
  return (
    <>
      <div className="bg-banker-navy py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-banker-gold text-xs font-bold uppercase tracking-widest mb-2">Connect & Engage</p>
          <h1 className="text-white text-4xl font-bold mb-3">Events Calendar 2026</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Join the global banking community at our exclusive conferences, awards ceremonies, summits, and roundtables throughout the year.
          </p>
        </div>
      </div>

      {/* Event type filters */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 py-3 overflow-x-auto">
          {['All Events', 'Conference', 'Awards', 'Forum', 'Summit', 'Roundtable'].map((t, i) => (
            <button
              key={t}
              className={`px-4 py-1.5 text-xs font-semibold whitespace-nowrap rounded-sm transition-colors ${
                i === 0 ? 'bg-banker-red text-white' : 'text-gray-600 hover:bg-white border border-transparent hover:border-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-card-hover transition-shadow group"
            >
              {/* Event colour bar */}
              <div className="h-2 bg-banker-red" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${typeColors[event.type] || 'bg-gray-100 text-gray-700'}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="font-bold text-banker-navy text-base leading-snug mb-2 group-hover:text-banker-red transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="space-y-1.5 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-banker-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-banker-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-banker-navy hover:bg-banker-navy-light text-white text-xs font-bold rounded-sm transition-colors">
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Annual events strip */}
        <CTASection variant="events" />
      </div>
    </>
  );
}
