import Image from 'next/image';

interface EventsProps {
  naam?: string;
  datum?: string;
  uur?: string;
  img?: string;
}

const Events = ({ naam, datum, uur, img }: EventsProps) => {
  if (!naam) return null;

  return (
    <div className="text-white py-6">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-center gap-4">
            {img && (
              <div className="flex-shrink-0">
                <Image
                  src={img}
                  alt="Event afbeelding"
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                {naam}
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm opacity-90">
                {datum && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {datum}
                  </span>
                )}
                
                {uur && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {uur}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;