interface InvestmentProps {
  title: string;
  text: string;
  textColor?: string;
}

const Investment = ({ title, text, textColor = 'text-gray-900' }: InvestmentProps) => {
  const colorClass = textColor === 'white' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${colorClass}`}>
        {title}
      </h2>
      <div 
        className={`text-lg leading-relaxed ${colorClass === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Investment;