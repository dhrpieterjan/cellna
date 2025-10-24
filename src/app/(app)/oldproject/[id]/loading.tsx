import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';

export default function Loading() {
  return (
    <Layout>
      <Container>
        <div className="max-w-6xl mx-auto animate-pulse">
          {/* Title skeleton */}
          <div className="h-10 bg-gray-300 rounded-lg w-3/4 mb-8"></div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content skeleton */}
            <div className="lg:col-span-2 space-y-4">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>

            {/* Sidebar skeleton */}
            <div className="space-y-6">
              <div className="bg-gray-200 p-6 rounded-lg">
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}