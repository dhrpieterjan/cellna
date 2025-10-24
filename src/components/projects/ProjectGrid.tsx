import Container from '@/components/ui/Container';
import ProjectCard from './ProjectCard';
import { Project } from '@/payload-types';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (!projects || projects.length === 0) {
    return (
      <Container>
        <div className="py-12 text-center">
          <p className="text-gray-600">Geen projecten beschikbaar.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Onze Projecten
        </h2>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.filter((project) => project.Actief).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectGrid;