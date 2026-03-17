import { Metadata } from 'next';
import PricingPageClient from '@/components/PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the Bankertimes.org subscription plan that fits your needs.',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
