import { Metadata } from 'next';
import AuthForm from '@/components/AuthForm';

export const metadata: Metadata = {
  title: 'Subscribe',
  description: 'Create your Bankertimes.org account.',
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
