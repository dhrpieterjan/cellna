import { ImageResponse } from 'next/og';
import { ProjectsService } from '@/services/projects.service';

export const alt = 'Cellna Project';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const data = await ProjectsService.getProjectById(id);
    
    if (!data?.project) {
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
            Project niet gevonden
          </div>
        ),
        { ...size }
      );
    }

    const project = data.project;
    const projectImageUrl = `https://api.cellna.be${project.Hoofdfoto.url}`;
    
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
            {project.Naam}
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
            {project.Aantalverkocht > 0 && (
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
                {project.Aantalverkocht} verkocht
              </div>
            )}
            {project.Fase && (
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
                {project.Fase}
              </div>
            )}
            {project.Locatie && (
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
                📍 {project.Locatie}
              </div>
            )}
            {project.Type && project.Aantalvantype && (
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
                {project.Aantalvantype} {project.Type}
              </div>
            )}
          </div>
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error('Error generating project OG image:', error);
    
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
