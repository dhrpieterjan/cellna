import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <div className="py-16 text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Pagina niet gevonden
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 font-medium text-white rounded-lg transition-colors bg-primary-500 hover:bg-primary-600"
          >
            Terug naar home
          </Link>
        </div>
      </Container>
    </Layout>
  );
}