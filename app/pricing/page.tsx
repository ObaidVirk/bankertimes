import { Metadata } from 'next';
import PricingCard, { type PricingPlan } from '@/components/PricingCard';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the Bankertimes.org subscription plan that fits your needs.',
};

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    unitAmount: 0,
    period: 'month',
    description: 'Get started with essential banking news and public articles.',
    isFree: true,
    ctaLabel: 'Current Plan',
    features: [
      'Access to public news articles',
      'Weekly newsletter digest',
      'Limited market data',
      '1 saved article',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$29',
    unitAmount: 2900,
    period: 'month',
    description: 'Full access to premium analysis, insights, and research reports.',
    highlighted: true,
    features: [
      'Everything in Free',
      'Unlimited premium articles',
      'Deep-dive analysis reports',
      'Market intelligence briefings',
      'Regulatory updates',
      'Daily email digest',
      'Unlimited saved articles',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    unitAmount: 9900,
    period: 'month',
    description: 'Team access with advanced features for financial organisations.',
    features: [
      'Everything in Professional',
      'Up to 10 team seats',
      'Priority customer support',
      'Custom content briefings',
      'API data access',
      'White-label reports',
      'Dedicated account manager',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-banker-navy py-14 px-4 text-center">
        <p className="text-banker-red text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Intelligence that powers better decisions
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Choose the plan that fits your role. Cancel or upgrade at any time.
        </p>
      </div>

      {/* Plan cards */}
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Test-mode notice */}
        <p className="text-center text-xs text-gray-400 mt-10">
          Payments are in <span className="font-semibold text-yellow-600">Stripe test mode</span>. Use card{' '}
          <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-600">4242 4242 4242 4242</span>{' '}
          with any future expiry and CVC to test.
        </p>

        {/* FAQ teaser */}
        <div className="mt-14 border-t border-gray-200 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-sm text-gray-600">
          {[
            { q: 'Can I cancel anytime?', a: 'Yes. Cancel your subscription at any time — no questions asked.' },
            { q: 'Is there a free trial?', a: 'Start on the Free plan with no credit card required.' },
            { q: 'What payment methods are accepted?', a: 'All major credit and debit cards via Stripe.' },
            { q: 'Do you offer team discounts?', a: 'Contact us for custom Enterprise pricing for larger teams.' },
          ].map(({ q, a }) => (
            <div key={q}>
              <p className="font-semibold text-banker-navy mb-1">{q}</p>
              <p className="text-gray-500">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
