import { ImageResponse } from 'next/og';
import { MainService } from '@/services/main.service';

export const alt = 'Cellna - Vastgoed & Projectontwikkeling';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  try {
    const data = await MainService.getHomepageData();
    const projects = data.projects;
    
    // Get the first project with an image
    const featuredProject = projects.find(project => project.Hoofdfoto?.url);
    
    if (!featuredProject) {
      // Fallback to logo-based design
      return new ImageResponse(
        (
          <div
            style={{
              background: 'linear-gradient(135deg, #3C4146 0%, #1a1d20 100%)',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'system-ui',
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                marginBottom: 16,
                textAlign: 'center',
              }}
            >
              CELLNA
            </div>
            <div
              style={{
                fontSize: 32,
                opacity: 0.9,
                textAlign: 'center',
                maxWidth: '80%',
              }}
            >
              Vastgoed & Projectontwikkeling
            </div>
          </div>
        ),
        { ...size }
      );
    }

    // Create project-based OG image
    const projectImageUrl = `https://api.cellna.be${featuredProject.Hoofdfoto.url}`;
    
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%), url(${projectImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '60px',
            color: 'white',
          }}
        >
          {/* Project name - matches the h1 styling */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 24,
              lineHeight: 1.1,
              maxWidth: '90%',
            }}
          >
            {featuredProject.Naam}
          </div>
          
          {/* Tags row - matches the actual header design */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: 16,
            }}
          >
            {featuredProject.Aantalverkocht > 0 && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 1)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                {featuredProject.Aantalverkocht} verkocht
              </div>
            )}
            {featuredProject.Fase && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: 16,
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {featuredProject.Fase}
              </div>
            )}
            {featuredProject.Locatie && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: 16,
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                📍 {featuredProject.Locatie}
              </div>
            )}
            {featuredProject.Type && featuredProject.Aantalvantype && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: 16,
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {featuredProject.Aantalvantype} {featuredProject.Type}
              </div>
            )}
          </div>
          
          {/* Cellna branding */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              opacity: 0.9,
            }}
          >
            CELLNA - Vastgoed & Projectontwikkeling
          </div>
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    // Fallback error image
    return new ImageResponse(
      (
        <div
          style={{
            background: '#3C4146',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 48,
            fontFamily: 'system-ui',
          }}
        >
          CELLNA
        </div>
      ),
      { ...size }
    );
  }
}
