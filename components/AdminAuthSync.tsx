'use client';

import { useEffect } from 'react';

/**
 * Syncs the server-authenticated session (cookie) to localStorage so that
 * client-side components (e.g. Navbar) can read the login state without
 * accessing a server resource.
 * Rendered only inside the /admin route (which is protected by middleware).
 */
export default function AdminAuthSync() {
  useEffect(() => {
    localStorage.setItem('adminLoggedIn', 'true');
  }, []);

  return null;
}
