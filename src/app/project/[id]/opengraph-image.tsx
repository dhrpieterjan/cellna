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
            background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url(${projectImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: '60px',
            color: 'white',
          }}
        >
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
