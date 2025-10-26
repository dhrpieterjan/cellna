'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { getMediaUrl, getMediaAlt } from '@/lib/utils';
import { Media } from '@/payload-types';

interface PhotoGalleryProps {
  photos: {
    foto: string | Media;
    id?: string | null;
  }[] | null | undefined;
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section id="fotos" className="py-16">
      <div className="px-6 mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl text-center text-gray-900 md:text-4xl font-brandon-bold">
          Fotogalerij
        </h2>
        
        <PhotoProvider>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {photos?.map((item, index) => {
              const photo = item.foto;
              const photoUrl = getMediaUrl(photo);
              const photoAlt = getMediaAlt(photo as Media | null | undefined);
              
              
              if (!photoUrl) return null;
              
              return (
                <PhotoView 
                  key={index}
                  src={photoUrl}
                >
                  <div className="overflow-hidden relative rounded-lg cursor-pointer aspect-square group">
                    <Image
                      src={photoUrl}
                      alt={photoAlt || `Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />
                    
                    {/* Zoom icon overlay */}
                    <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white/90">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </PhotoView>
              );
            })}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default PhotoGallery;