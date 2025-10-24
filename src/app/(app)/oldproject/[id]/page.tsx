import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ProjectsService } from '@/services/projects.service';
import Layout from '@/components/layout/Layout';
import Container from '@/components/ui/Container';
import PhotoGallery from '@/components/sections/PhotoGallery';
import ProjectInquiry from '@/components/sections/ProjectInquiry';
import InteractiveMap from '@/components/ui/InteractiveMap';
import ClickableImage from '@/components/ui/ClickableImage';
import { getMediaUrl } from '@/lib/utils';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return await ProjectsService.getAllProjectIds();
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = await ProjectsService.getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project niet gevonden',
      description: 'Het gevraagde project kon niet worden gevonden.',
    };
  }

  return {
    title: project.Naam,
    description: project.Projectomschrijving 
      ? project.Projectomschrijving.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
      : `Ontdek ${project.Naam} - ${project.Locatie || 'Nieuwe projectontwikkeling'}`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await ProjectsService.getProjectById(id);
  
  if (!project) {
    notFound();
  }

  const imageUrl = getMediaUrl(project.Hoofdfoto);
  
  // Function to generate Google Maps URL
  const getGoogleMapsUrl = (location: string) => {
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  };

  return (
    <Layout>
      {/* Hero Section with Project Image */}
      <div className="relative h-[40vh] min-h-[300px] sm:h-[50vh] sm:min-h-[350px] lg:h-[60vh] lg:min-h-[450px] xl:h-[70vh] xl:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={project.Naam}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70 via-black/20"></div>
        
        <div className="flex relative items-end h-full">
          <Container>
            <div className="px-4 pb-8 mx-auto max-w-7xl sm:pb-12 lg:pb-16 sm:px-6 lg:px-8">
              <div className="text-white">
                <div className="max-w-3xl">
                  <h1 className="mb-4 text-3xl leading-tight sm:mb-6 font-brandon-bold sm:text-4xl md:text-5xl lg:text-6xl">
                    {project.Naam}
                  </h1>
                  
                  <div className="flex flex-wrap gap-2 items-center mb-6 sm:gap-3 sm:mb-8">
                    {project.Aantalverkocht && project.Aantalverkocht > 0 && (
                      <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white bg-red-500 rounded-full font-brandon-medium">
                        {project.Aantalverkocht} verkocht
                      </div>
                    )}
                    {project.Fase && (
                      <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white rounded-full backdrop-blur-sm bg-white/20 font-brandon-medium">
                        {project.Fase}
                      </div>
                    )}
                    {project.Locatie && (
                      <a 
                        href={getGoogleMapsUrl(project.Locatie)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white rounded-full backdrop-blur-sm bg-white/20 font-brandon-medium hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        <svg className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">{project.Locatie}</span>
                        <span className="sm:hidden">{project.Locatie.length > 20 ? project.Locatie.substring(0, 20) + '...' : project.Locatie}</span>
                      </a>
                    )}
                    {project.Type && project.Aantalvantype && (
                      <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white rounded-full backdrop-blur-sm bg-white/20 font-brandon-medium">
                        {project.Aantalvantype} {project.Type}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Description and Map Section */}
          <div className="grid gap-8 mb-16 lg:grid-cols-2">
            {/* Project Description */}
            <div>
              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-xl">
                {project.Projectomschrijving && (
                  <div>
                    <h2 className="mb-6 text-2xl text-gray-900 font-brandon-bold">
                      Over dit project
                    </h2>
                    <div 
                      className="max-w-none text-lg leading-relaxed text-gray-600 font-brandon prose prose-lg prose-headings:font-brandon-bold prose-headings:text-gray-900"
                      dangerouslySetInnerHTML={{ __html: project.Projectomschrijving }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Map */}
            {project.LocatieCoordinaten && (
              <div>
                <div className="p-8 h-full bg-white rounded-2xl border border-gray-100 shadow-xl">
                  <h3 className="mb-6 text-2xl text-gray-900 font-brandon-bold">
                    Locatie
                  </h3>
                  <InteractiveMap
                    longitude={project.LocatieCoordinaten[0]}
                    latitude={project.LocatieCoordinaten[1]}
                    projectName={project.Naam}
                    className="overflow-hidden h-80 rounded-xl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Project Details and Inquiry */}
          <div className="grid gap-8 mb-16 lg:grid-cols-2">
            {/* Project Inquiry Form */}
            <div className="lg:col-span-2">
              <ProjectInquiry 
                projectId={project.id} 
                projectName={project.Naam} 
              />
            </div>
          </div>

          {/* Price Information */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-3xl text-gray-900 font-brandon-bold">
                Prijsinformatie
              </h3>
              <p className="text-gray-600 font-brandon">Bekijk de gedetailleerde prijzen voor dit project</p>
            </div>
            
            {project.prijsImage ? (
              <div className="flex justify-center">
                <div className="p-6 max-w-5xl bg-white rounded-2xl border border-gray-100 shadow-xl">
                  <ClickableImage
                    src={getMediaUrl(project.prijsImage)}
                    alt="Prijsinformatie"
                    width={800}
                    height={600}
                    className="max-w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="p-12 max-w-2xl text-center bg-white rounded-2xl border border-gray-100 shadow-xl">
                  <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full bg-primary-100">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl text-gray-900 font-brandon-bold">
                    Prijzen nog niet beschikbaar
                  </h4>
                  <p className="mb-6 text-gray-600 font-brandon">
                    De gedetailleerde prijsinformatie voor dit project wordt binnenkort gepubliceerd. 
                    Neem contact met ons op voor meer informatie over de prijzen en beschikbaarheid.
                  </p>
                  <a 
                    href="tel:+32474533971" 
                    className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-colors bg-primary-600 font-brandon-medium hover:bg-primary-700"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact opnemen
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Photo Gallery */}
      {project.Fotosvhp && project.Fotosvhp.length > 0 && (
        <Container>
            <PhotoGallery photos={ project.Fotosvhp} />
        </Container>
      )}
    </Layout>
  );
}