import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { planId, planName, unitAmount } = (await request.json()) as {
      planId: string;
      planName: string;
      unitAmount: number; // in cents
    };

    const baseUrl = request.headers.get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Bankertimes.org — ${planName}`,
              description: `Monthly subscription to the ${planName} plan`,
            },
            unit_amount: unitAmount,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: { planId },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[Stripe] checkout session error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session.' },
      { status: 500 }
    );
  }
}
