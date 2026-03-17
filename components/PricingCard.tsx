'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export type PricingPlan = {
  id: string;
  name: string;
  price: string;           // display label e.g. "$29"
  unitAmount: number;      // in cents e.g. 2900
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel?: string;
  isFree?: boolean;
};

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (plan.isFree) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          planName: plan.name,
          unitAmount: plan.unitAmount,
        }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? 'Unexpected error');
      }

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(false);
    }
  };

  const btnBase =
    'w-full py-3 rounded-sm text-sm font-bold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const btnStyle = plan.highlighted
    ? `${btnBase} bg-banker-red hover:bg-banker-red-dark text-white focus:ring-banker-red`
    : plan.isFree
    ? `${btnBase} bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-default`
    : `${btnBase} bg-banker-navy hover:bg-banker-navy-light text-white focus:ring-banker-navy`;

  return (
    <div
      className={`relative flex flex-col bg-white border rounded-sm p-7 ${
        plan.highlighted
          ? 'border-banker-red shadow-card-hover ring-2 ring-banker-red'
          : 'border-gray-200 shadow-card'
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-banker-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <div className="mb-5">
        <p className="text-xs font-bold text-banker-red uppercase tracking-widest mb-1">{plan.name}</p>
        <div className="flex items-end gap-1 mt-1">
          <span className="text-4xl font-black text-banker-navy">{plan.price}</span>
          {!plan.isFree && (
            <span className="text-gray-400 text-sm mb-1.5">/{plan.period}</span>
          )}
        </div>
        <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
      </div>

      <ul className="space-y-2.5 mb-7 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubscribe}
        disabled={loading || plan.isFree}
        className={`${btnStyle} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? 'Redirecting to Stripe…' : (plan.ctaLabel ?? 'Subscribe Now')}
      </button>

      {error && (
        <p className="mt-2 text-xs text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
