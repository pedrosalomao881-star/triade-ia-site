'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IAParaRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/blog/ia-para-negocios/clinicas');
  }, [router]);

  return null;
}
