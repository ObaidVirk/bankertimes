import { Metadata } from 'next';
import AdminLoginForm from '@/components/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Sign in to your Bankertimes.org account.',
};

export default function LoginPage() {
  return <AdminLoginForm />;
}
