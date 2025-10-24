import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/payload-types';
import { getMediaUrl } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageUrl = getMediaUrl(project.Hoofdfoto);
  
  return (
    <Link 
      href={`/project/${project.id}`}
      className="block overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-xl transition-all duration-500 group hover:shadow-2xl hover:-translate-y-3"
    >
      <div className="relative">
        {/* Hero Image Section - like project header */}
        <div className="overflow-hidden relative h-64 bg-gray-200">
          <Image
            src={imageUrl}
            alt={project.Naam}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Gradient overlay - matches project header */}
          <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60 via-black/20"></div>
          
          {/* Tags overlay - like project header */}
          <div className="absolute right-4 bottom-4 left-4">
            <div className="flex flex-wrap gap-2 items-center">
              {project.Fase && (
                <div className="inline-flex items-center px-3 py-1.5 text-xs text-white rounded-full backdrop-blur-sm bg-white/20 font-brandon-medium">
                  {project.Fase}
                </div>
              )}
              {project.Type && project.Aantalvantype && (
                <div className="inline-flex items-center px-3 py-1.5 text-xs text-white rounded-full backdrop-blur-sm bg-white/20 font-brandon-medium">
                  {project.Aantalvantype} {project.Type}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h3 className="mb-4 text-2xl leading-tight text-gray-900 transition-colors duration-300 font-brandon-bold group-hover:text-primary-600">
            {project.Naam}
          </h3>
          
          {/* Price highlight */}
          {project.Prijs && (
            <div className="p-4 mb-4 rounded-xl border bg-primary-50 border-primary-100">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-5 h-5">
                  <Image
                    src="/icons/money.png"
                    alt="Prijs"
                    width={20}
                    height={20}
                    className="opacity-70"
                  />
                </div>
                <p className="text-lg font-brandon-bold text-primary-700">
                  {project.Prijs}
                </p>
              </div>
            </div>
          )}
          
          {/* Additional details */}
          <div className="space-y-3">
            {project.Locatie && (
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="flex-shrink-0 w-4 h-4">
                  <Image
                    src="/icons/location.png"
                    alt="Locatie"
                    width={16}
                    height={16}
                    className="opacity-60"
                  />
                </div>
                <p className="text-sm font-brandon">
                  {project.Locatie}
                </p>
              </div>
            )}
            
          </div>
          
          {/* Call to action */}
          <div className="pt-4 mt-6 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm transition-colors font-brandon-medium text-primary-600 group-hover:text-primary-700">
                Bekijk project
              </span>
              <svg className="w-5 h-5 transition-transform duration-300 text-primary-600 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;