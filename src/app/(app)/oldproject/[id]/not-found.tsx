import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project niet gevonden
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Het project dat u zoekt bestaat niet of is niet meer beschikbaar.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            Terug naar home
          </Link>
        </div>
      </Container>
    </Layout>
  );
}