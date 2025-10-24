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
    <div className="text-white py-3">
      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="flex items-center gap-3">
            {img && (
              <div className="flex-shrink-0">
                <Image
                  src={img}
                  alt="Event afbeelding"
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            
            <div className="flex-1 text-left">
              <h3 className="text-lg font-brandon-bold mb-1 leading-tight">
                {naam}
              </h3>
              
              <div className="flex flex-col gap-1 text-sm">
                {datum && (
                  <span className="flex items-center gap-1 opacity-90">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {datum}
                  </span>
                )}
                
                {uur && (
                  <span className="flex items-center gap-1 opacity-90">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
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