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
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            backgroundImage: `url(${projectImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
            }}
          />
          
          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              padding: '60px',
              color: 'white',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 8,
                opacity: 0.9,
              }}
            >
              CELLNA
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 'bold',
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              {featuredProject.Naam}
            </div>
            <div
              style={{
                fontSize: 28,
                opacity: 0.9,
                maxWidth: '80%',
              }}
            >
              Vastgoed & Projectontwikkeling
            </div>
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
