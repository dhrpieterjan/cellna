import { notFound } from 'next/navigation';
import { PayloadService } from '@/services/payload.service';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';
import Events from '@/components/sections/Events';
import ProjectGrid from '@/components/projects/ProjectGrid';
import AboutUs from '@/components/sections/AboutUs';
import Investment from '@/components/sections/Investment';
import PhotoGallery from '@/components/sections/PhotoGallery';
import { Homepage, Media, Project } from '@/payload-types';
import { getMediaUrl, createPhotoObject } from '@/lib/utils';

export async function generateMetadata() {
  return {
    title: 'Cellna - Vastgoedontwikkeling | V2',
    description: 'Ontdek onze nieuwste projecten en investeringsmogelijkheden in vastgoed. Cellna biedt kwalitatieve projectontwikkeling en bouwgrond te koop.',
  };
}

export default async function V2HomePage() {
  try {
    // Fetch data from Payload CMS
    const [homepageData, projectsData] = await Promise.all([
      PayloadService.getHomepageData() as Promise<Homepage>,
      PayloadService.getProjects() as Promise<{ docs: Project[] }>,
    ]);

    if (!homepageData) {
      notFound();
    }

    return (
      <Layout>
        {/* Event Section */}
        {homepageData.event && (
          <Container color="#3C4146">
            <Events
              naam={homepageData.event.Eventnaam || ''}
              datum={homepageData.event.Subtitel || ''}
              uur={homepageData.event.Subtitel2 || ''}
              img={getMediaUrl(homepageData.event.Eventfoto)}
            />
          </Container>
        )}

        {/* Projects Grid */}
        <ProjectGrid projects={projectsData.docs || []} />

        {/* Spacer */}
        <Container color="#3C4146" minHeight="200px">
          <div></div>
        </Container>

        {/* About Us Section */}
        <AboutUs
          text={homepageData.Wiezijnwe ? `<p>${homepageData.Wiezijnwe}</p>` : ''}
          imageUrl={getMediaUrl(homepageData.Wiezijnwefoto)}
          id="wzw"
        />

        {/* Investment Section */}
        <Container color="#F3F5F6">
          <div id="wiiv">
            <Investment
              title="Waarom investeren in vastgoed?"
              text={homepageData.Waarominvestereninvastgoed ? `<p>${homepageData.Waarominvestereninvastgoed}</p>` : ''}
            />
          </div>
        </Container>

        {/* Photo Gallery */}
        <Container>
          <PhotoGallery photos={homepageData.fotogallerij}/>
        </Container>

        {/* Building Ground Section */}
        <Container color="#3C4146">
          <Investment
            title="Bouwgrond te koop?"
            text={homepageData.Bouwgrondtekoop ? `<p>${homepageData.Bouwgrondtekoop}</p>` : ''}
            textColor="white"
          />
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error('Error fetching Payload data:', error);
    notFound();
  }
}
