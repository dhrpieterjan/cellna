'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface ClickableImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  showZoomIcon?: boolean;
  zoomIconPosition?: 'top-right' | 'center';
}

const ClickableImage = ({ 
  src, 
  alt, 
  fill = false, 
  width, 
  height, 
  className = '', 
  priority = false,
  sizes,
  showZoomIcon = true,
  zoomIconPosition = 'center'
}: ClickableImageProps) => {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <div className="relative cursor-pointer group">
          <Image
            src={src}
            alt={alt}
            fill={fill}
            width={width}
            height={height}
            className={`${className} ${fill ? 'object-cover' : ''} transition-transform duration-500 group-hover:scale-105`}
            priority={priority}
            sizes={sizes}
          />
          
          {showZoomIcon && (
            <div className={`absolute ${
              zoomIconPosition === 'top-right' 
                ? 'top-4 right-4' 
                : 'inset-0 flex items-center justify-center'
            } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white/90">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </PhotoView>
    </PhotoProvider>
  );
};

export default ClickableImage;
