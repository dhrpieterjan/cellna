'use client';

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <Container>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Er is iets misgegaan
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Er is een onverwachte fout opgetreden. Probeer het opnieuw.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            Probeer opnieuw
          </button>
        </div>
      </Container>
    </Layout>
  );
}