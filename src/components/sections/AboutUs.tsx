import Image from 'next/image';

interface AboutUsProps {
  text: string;
  imageUrl: string;
  id?: string;
}

const AboutUs = ({ text, imageUrl, id = 'wzw' }: AboutUsProps) => {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wie zijn we?
            </h2>
            <div 
              className="text-lg text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          
          <div className="relative">
            <Image
              src={imageUrl}
              alt="Wie zijn we"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;