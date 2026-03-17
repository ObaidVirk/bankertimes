import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import stripe from '@/lib/stripe';

type BillingCycle = 'monthly' | 'yearly';
type PaidPlanId = 'professional' | 'enterprise';

const PLAN_CATALOG: Record<PaidPlanId, {
  name: string;
  monthlyAmount: number;
  yearlyAmount: number;
  monthlyPriceEnv?: string;
  yearlyPriceEnv?: string;
}> = {
  professional: {
    name: 'Professional',
    monthlyAmount: 2900,
    yearlyAmount: 28800,
    monthlyPriceEnv: process.env.STRIPE_PRICE_PROFESSIONAL_MONTHLY,
    yearlyPriceEnv: process.env.STRIPE_PRICE_PROFESSIONAL_YEARLY,
  },
  enterprise: {
    name: 'Enterprise',
    monthlyAmount: 9900,
    yearlyAmount: 94800,
    monthlyPriceEnv: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    yearlyPriceEnv: process.env.STRIPE_PRICE_ENTERPRISE_YEARLY,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { planId, billingCycle = 'monthly' } = (await request.json()) as {
      planId?: string;
      billingCycle?: BillingCycle;
    };

    if (!planId || !(planId in PLAN_CATALOG)) {
      return NextResponse.json({ error: 'Invalid plan selected.' }, { status: 400 });
    }

    if (billingCycle !== 'monthly' && billingCycle !== 'yearly') {
      return NextResponse.json({ error: 'Invalid billing cycle.' }, { status: 400 });
    }

    const selectedPlan = PLAN_CATALOG[planId as PaidPlanId];
    const selectedPriceId =
      billingCycle === 'yearly' ? selectedPlan.yearlyPriceEnv : selectedPlan.monthlyPriceEnv;
    const unitAmount = billingCycle === 'yearly' ? selectedPlan.yearlyAmount : selectedPlan.monthlyAmount;
    const interval: Stripe.PriceCreateParams.Recurring.Interval =
      billingCycle === 'yearly' ? 'year' : 'month';

    const baseUrl = (
      request.headers.get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    ).replace(/\/$/, '');

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = selectedPriceId
      ? {
          price: selectedPriceId,
          quantity: 1,
        }
      : {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Bankertimes.org - ${selectedPlan.name}`,
              description: `${billingCycle === 'yearly' ? 'Yearly' : 'Monthly'} subscription to the ${selectedPlan.name} plan`,
            },
            unit_amount: unitAmount,
            recurring: {
              interval,
            },
          },
          quantity: 1,
        };

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [lineItem],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=1`,
      metadata: { planId, billingCycle },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('[Stripe] checkout session error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session.' },
      { status: 500 }
    );
  }
}
