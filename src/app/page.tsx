import { MainService } from '@/services/main.service';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';
import Events from '@/components/sections/Events';
import ProjectGrid from '@/components/projects/ProjectGrid';
import AboutUs from '@/components/sections/AboutUs';
import Investment from '@/components/sections/Investment';
import PhotoGallery from '@/components/sections/PhotoGallery';

export default async function HomePage() {
  const data = await MainService.getHomepageData();
  
  const homepage = data.homepages[0];
  const projects = data.projects;
  
  if (!homepage) {
    return (
      <Layout>
        <Container>
          <div className="py-12 text-center">
            <p className="text-gray-600">Geen gegevens beschikbaar.</p>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Event Section */}
      {homepage.event && (
        <Container color="#3C4146">
          <Events
            naam={homepage.event.Eventnaam}
            datum={homepage.event.Subtitel}
            uur={homepage.event.Subtitel2}
            img="/imagedummy.png"
          />
        </Container>
      )}

      {/* Projects Grid */}
      <ProjectGrid projects={projects} />

      {/* Spacer */}
      <Container color="#3C4146" minHeight="200px">
        <div></div>
      </Container>

      {/* About Us Section */}
      <AboutUs
        text={homepage.Wiezijnwe}
        imageUrl={homepage.Wiezijnwefoto.url}
        id="wzw"
      />

      {/* Investment Section */}
      <Container color="#F3F5F6">
        <div id="wiiv">
          <Investment
            title="Waarom investeren in vastgoed?"
            text={homepage.Waarominvestereninvastgoed}
          />
        </div>
      </Container>

      {/* Photo Gallery */}
      <Container>
        <PhotoGallery photos={homepage.fotogallerij} />
      </Container>

      {/* Building Ground Section */}
      <Container color="#3C4146">
        <Investment
          title="Bouwgrond te koop?"
          text={homepage.Bouwgrondtekoop}
          textColor="white"
        />
      </Container>
    </Layout>
  );
}