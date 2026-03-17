import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment Successful',
  description: 'Your Bankertimes.org subscription is now active.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="bg-white border border-gray-200 rounded-sm shadow-card max-w-md w-full p-10 text-center">

        {/* Check icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-black text-banker-navy mb-2">Payment Successful</h1>
        <p className="text-gray-500 text-sm mb-8">
          Thank you for subscribing to Bankertimes.org. Your account has been upgraded and you now have full access to
          your plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-banker-red hover:bg-banker-red-dark text-white text-sm font-bold rounded-sm transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/pricing"
            className="px-5 py-2.5 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-sm transition-colors"
          >
            View Plans
          </Link>
        </div>

      </div>
    </div>
  );
}
