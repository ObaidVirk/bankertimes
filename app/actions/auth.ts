'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export type AuthState = { error: string } | null;

export async function loginAdmin(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;
  const adminEmail = process.env.ADMIN_EMAIL ?? process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD ?? process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (
    email === adminEmail &&
    password === adminPassword
  ) {
    cookies().set('adminLoggedIn', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    redirect('/admin');
  }

  return { error: 'Invalid admin credentials' };
}

export async function logoutAdmin(): Promise<void> {
  cookies().delete('adminLoggedIn');
  redirect('/');
}
