'use client';

import { useMemo, useState } from 'react';
import PricingCard, { type BillingCycle, type PricingPlan } from '@/components/PricingCard';

type PlanSeed = {
  id: PricingPlan['id'];
  name: string;
  description: string;
  highlighted?: boolean;
  isFree?: boolean;
  ctaLabel?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
};

const PLAN_SEEDS: PlanSeed[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Get started with essential banking news and public articles.',
    isFree: true,
    ctaLabel: 'Current Plan',
    monthlyPrice: 0,
    yearlyPrice: 0,
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
    description: 'Full access to premium analysis, insights, and research reports.',
    highlighted: true,
    monthlyPrice: 29,
    yearlyPrice: 24,
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
    description: 'Team access with advanced features for financial organisations.',
    monthlyPrice: 99,
    yearlyPrice: 79,
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

export default function PricingPageClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const plans = useMemo<PricingPlan[]>(() => {
    return PLAN_SEEDS.map((seed) => {
      if (seed.isFree) {
        return {
          id: seed.id,
          name: seed.name,
          price: '$0',
          period: 'month',
          description: seed.description,
          features: seed.features,
          highlighted: seed.highlighted,
          isFree: true,
          ctaLabel: seed.ctaLabel,
        };
      }

      const cyclePrice = billingCycle === 'yearly' ? seed.yearlyPrice : seed.monthlyPrice;
      const yearlyTotal = seed.yearlyPrice * 12;

      return {
        id: seed.id,
        name: seed.name,
        price: `$${cyclePrice}`,
        period: 'month',
        description: seed.description,
        features: seed.features,
        highlighted: seed.highlighted,
        billingNote:
          billingCycle === 'yearly'
            ? `Billed yearly ($${yearlyTotal}/year).`
            : 'Billed monthly.',
      };
    });
  }, [billingCycle]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-banker-navy py-14 px-4 text-center">
        <p className="text-banker-red text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Intelligence that powers better decisions
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Choose the plan that fits your role. Cancel, switch, or upgrade at any time.
        </p>

        <div className="mt-8 inline-flex rounded-full border border-banker-navy-light p-1 bg-banker-navy-light/60">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-white text-banker-navy'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-white text-banker-navy'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        <section className="mt-14 bg-white border border-gray-200 rounded-sm overflow-hidden shadow-card">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-banker-navy">Plan Comparison</h2>
            <p className="text-sm text-gray-500 mt-1">See what each subscription unlocks.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-left px-5 py-3 font-semibold">Feature</th>
                  <th className="text-left px-5 py-3 font-semibold">Free</th>
                  <th className="text-left px-5 py-3 font-semibold">Professional</th>
                  <th className="text-left px-5 py-3 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Public news access', 'Yes', 'Yes', 'Yes'],
                  ['Premium analysis', 'No', 'Unlimited', 'Unlimited'],
                  ['Saved articles', '1', 'Unlimited', 'Unlimited'],
                  ['Team seats', '1', '1', 'Up to 10'],
                  ['Priority support', 'No', 'No', 'Yes'],
                  ['API access', 'No', 'No', 'Yes'],
                ].map(([feature, free, pro, enterprise]) => (
                  <tr key={feature} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700 font-medium">{feature}</td>
                    <td className="px-5 py-3 text-gray-500">{free}</td>
                    <td className="px-5 py-3 text-gray-500">{pro}</td>
                    <td className="px-5 py-3 text-gray-500">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-center text-xs text-gray-400 mt-10">
          Payments are processed securely by Stripe. In test mode, use card{' '}
          <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-600">4242 4242 4242 4242</span>{' '}
          with any future expiry and CVC.
        </p>

        <div className="mt-14 border-t border-gray-200 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-sm text-gray-600">
          {[
            { q: 'Can I cancel anytime?', a: 'Yes. You can cancel your subscription at any time from your account.' },
            { q: 'Can I switch billing cycles?', a: 'Yes. Upgrade or downgrade between monthly and yearly billing whenever needed.' },
            { q: 'What payment methods are accepted?', a: 'All major credit and debit cards through Stripe Checkout.' },
            { q: 'Need more than 10 seats?', a: 'Contact us for custom Enterprise pricing and support options.' },
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
