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
            fontSize: 64,
            background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%), url(${projectImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '60px',
            color: 'white',
          }}
        >
          {project.Naam}
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
