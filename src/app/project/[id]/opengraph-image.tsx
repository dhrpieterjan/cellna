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
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Project name */}
            <div
              style={{
                fontSize: 56,
                fontWeight: 'bold',
                marginBottom: 16,
                lineHeight: 1.1,
                maxWidth: '90%',
              }}
            >
              {project.Naam}
            </div>
            
            {/* Tags row */}
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
                    background: 'rgba(239, 68, 68, 0.9)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: 18,
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
                    fontSize: 18,
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
                    fontSize: 18,
                    fontWeight: 'bold',
                    backdropFilter: 'blur(10px)',
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
                    fontSize: 18,
                    fontWeight: 'bold',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {project.Aantalvantype} {project.Type}
                </div>
              )}
            </div>
            
            {/* Cellna branding */}
            <div
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                opacity: 0.9,
              }}
            >
              CELLNA
            </div>
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
