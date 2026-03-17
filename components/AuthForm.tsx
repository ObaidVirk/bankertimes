'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/context/TranslationContext';

type Props = {
  mode: 'login' | 'signup';
};

export default function AuthForm({ mode }: Props) {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission — no backend
    alert(mode === 'login' ? 'Login submitted (mock)' : 'Account created (mock)');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-14 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/bankertimes.org.png"
              alt="Bankertimes.org"
              width={220}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <p className="text-gray-500 text-sm mt-2">
            {mode === 'login' ? t('login.title') : t('signup.title')}
          </p>
        </div>

        <div className="bg-white rounded-sm shadow-card border border-gray-200 p-8">
          <h1 className="text-xl font-bold text-banker-navy mb-6">
            {mode === 'login' ? t('login.heading') : t('signup.heading')}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('signup.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-banker-red focus:border-transparent transition"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {mode === 'login' ? t('login.email') : t('signup.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-banker-red focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {mode === 'login' ? t('login.password') : t('signup.password')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-banker-red focus:border-transparent transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Toggle password visibility"
                >
                  {showPass ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('signup.confirmPassword')}
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-banker-red focus:border-transparent transition"
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-banker-red focus:ring-banker-red" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-banker-red hover:underline font-medium">
                  {t('login.forgotPassword')}
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-banker-red hover:bg-banker-red-dark text-white font-bold text-sm rounded-sm transition-colors"
            >
              {mode === 'login' ? t('login.submit') : t('signup.submit')}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
            {mode === 'login' ? (
              <>
                {t('login.noAccount')}{' '}
                <Link href="/signup" className="text-banker-red font-semibold hover:underline">
                  {t('login.signupLink')}
                </Link>
              </>
            ) : (
              <>
                {t('signup.hasAccount')}{' '}
                <Link href="/login" className="text-banker-red font-semibold hover:underline">
                  {t('signup.loginLink')}
                </Link>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our{' '}
          <a href="#" className="underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
