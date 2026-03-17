import { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Bankertimes.org — the global banking and finance intelligence platform.',
};

const team = [
  { name: 'Richard Maxwell', title: 'Editor-in-Chief', bio: 'Former FT banking correspondent with 20+ years covering global financial markets.' },
  { name: 'Caroline Dubois', title: 'Managing Editor', bio: 'Award-winning journalist and author of two books on European banking regulation.' },
  { name: 'Wei Zhang', title: 'Asia Pacific Bureau Chief', bio: 'Based in Hong Kong, Wei leads our coverage across Greater China and Southeast Asia.' },
  { name: 'Ahmed Al-Rashid', title: 'Middle East Correspondent', bio: 'Former MENA analyst at a top-tier investment bank, now covering GCC financial markets.' },
  { name: 'Sarah Chen', title: 'Technology & Fintech Editor', bio: 'Expert in digital banking, payments, and the intersection of technology and financial services.' },
  { name: 'Thomas Liu', title: 'ESG & Sustainability Editor', bio: 'Specialist in sustainable finance, green bonds, and climate-related financial disclosure frameworks.' },
];

const stats = [
  { value: '1.2M+', label: 'Monthly Readers' },
  { value: '180+', label: 'Countries Reached' },
  { value: '48K+', label: 'Subscribers' },
  { value: '25+', label: 'Years of Excellence' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-banker-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-banker-gold text-xs font-bold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            The World&apos;s Leading<br />Banking Intelligence Platform
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Bankertimes.org has been the definitive source of banking and finance intelligence for professionals worldwide since 1999.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-banker-red">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-red-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <h2 className="section-heading mb-5">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bankertimes.org exists to inform, analyse, and connect the global banking community. We produce authoritative journalism, original research, and unparalleled data that help banking professionals navigate an increasingly complex financial landscape.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From central bank policy shifts to emerging market opportunities, from fintech innovation to regulatory change — we cover the stories that matter to financial professionals at all levels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of specialist journalists, analysts, and editors span 15 countries, ensuring comprehensive global coverage with deep local expertise.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 space-y-4">
            {[
              { icon: '📰', heading: 'Journalism', text: 'Breaking news, in-depth features, and investigative reporting on global banking and finance.' },
              { icon: '📊', heading: 'Research', text: 'Original surveys, data analysis, and benchmarking studies conducted by specialist researchers.' },
              { icon: '🏆', heading: 'Awards', text: 'Recognising excellence across banking categories through our prestigious annual award programmes.' },
              { icon: '🌐', heading: 'Events', text: 'World-class conferences and summits bringing together the global banking community.' },
            ].map((item) => (
              <div key={item.heading} className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-banker-navy text-sm">{item.heading}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial team */}
        <section className="mb-16">
          <h2 className="section-heading mb-8">Editorial Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-5 border border-gray-200 rounded-sm hover:shadow-card transition-shadow">
                <div className="w-14 h-14 rounded-full bg-banker-navy-light flex items-center justify-center text-white font-bold text-xl mb-3">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-banker-navy text-sm">{member.name}</h3>
                <p className="text-banker-red text-xs font-medium mb-2">{member.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 border border-gray-200 rounded-sm p-8">
          <h2 className="text-xl font-bold text-banker-navy mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { heading: 'Editorial', email: 'editorial@bankertimes.org', note: 'News tips, press releases, and editorial queries' },
              { heading: 'Advertising', email: 'advertising@bankertimes.org', note: 'Sponsorship, branded content, and display advertising' },
              { heading: 'Subscriptions', email: 'subscriptions@bankertimes.org', note: 'Account queries, renewals, and institutional licences' },
            ].map((c) => (
              <div key={c.heading}>
                <h4 className="font-bold text-banker-navy text-sm mb-1">{c.heading}</h4>
                <a href={`mailto:${c.email}`} className="text-banker-red text-sm hover:underline">{c.email}</a>
                <p className="text-gray-500 text-xs mt-1">{c.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection variant="subscribe" />
    </>
  );
}
