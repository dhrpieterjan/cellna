import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';

export default function Loading() {
  return (
    <Layout>
      <Container>
        <div className="py-16 text-center">
          <div className="inline-flex justify-center items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 animate-spin border-primary-200 border-t-primary-500"></div>
              <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent animate-spin border-r-secondary-300" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium animate-pulse text-primary-600">
            Pagina wordt geladen...
          </p>
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 rounded-full animate-bounce bg-primary-400" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full animate-bounce bg-primary-400" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full animate-bounce bg-primary-400" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}