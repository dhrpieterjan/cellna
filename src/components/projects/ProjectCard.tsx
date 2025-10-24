import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageUrl = `https://api.cellna.be${project.Hoofdfoto.url}`;
  
  return (
    <Link 
      href={`/project/${project.id}`}
      className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2"
    >
      <div className="relative">
        <div className="relative h-56 bg-gray-200 overflow-hidden">
          <Image
            src={imageUrl}
            alt={project.Naam}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {project.Aantalverkocht > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-brandon-medium shadow-lg">
              {project.Aantalverkocht} verkocht
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-brandon-bold text-gray-900 mb-5 group-hover:text-primary-600 transition-colors duration-300">
            {project.Naam}
          </h3>
          
          <div className="space-y-4">
            {project.Locatie && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                  <Image
                    src="/icons/location.png"
                    alt="Locatie"
                    width={24}
                    height={24}
                    className="opacity-60"
                  />
                </div>
                <p className="text-base text-gray-600 font-brandon leading-relaxed">
                  <span className="font-brandon-medium text-gray-700">Locatie:</span> {project.Locatie}
                </p>
              </div>
            )}
            
            {project.Type && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                  <Image
                    src="/icons/type.png"
                    alt="Type"
                    width={24}
                    height={24}
                    className="opacity-60"
                  />
                </div>
                <p className="text-base text-gray-600 font-brandon leading-relaxed">
                  <span className="font-brandon-medium text-gray-700">{project.Type}:</span> {project.Aantalvantype}
                </p>
              </div>
            )}
            
            {project.Fase && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                  <Image
                    src="/icons/state.png"
                    alt="Fase"
                    width={24}
                    height={24}
                    className="opacity-60"
                  />
                </div>
                <p className="text-base text-gray-600 font-brandon leading-relaxed">
                  <span className="font-brandon-medium text-gray-700">Fase:</span> {project.Fase}
                </p>
              </div>
            )}
            
            {project.Prijs && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                  <Image
                    src="/icons/money.png"
                    alt="Prijs"
                    width={24}
                    height={24}
                    className="opacity-60"
                  />
                </div>
                <p className="text-base text-gray-600 font-brandon leading-relaxed">
                  <span className="font-brandon-medium text-gray-700">Prijs:</span> 
                  <span className="font-brandon-bold text-primary-600 ml-1">{project.Prijs}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;