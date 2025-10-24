'use client';

import { useState, useTransition } from 'react';
import { submitProjectInquiry } from '@/lib/actions';

interface ProjectInquiryProps {
  projectId: string;
  projectName: string;
}

const ProjectInquiry = ({ projectId, projectName }: ProjectInquiryProps) => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const name = formData.get('name') as string | null;
      const email = formData.get('email') as string | null;
      const phone = formData.get('phone') as string | null;
      const message = formData.get('message') as string | null;
      
      const result = await submitProjectInquiry({
        projectId,
        name: name || '',
        email: email || '',
        phone: phone || '',
        message: message || '',
      } as any);

      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Aanvraag succesvol verzonden!' });
        // Reset form
        const form = document.getElementById('project-inquiry-form') as HTMLFormElement;
        if (form) form.reset();
      } else {
        setMessage({ type: 'error', text: result.error || 'Er is een fout opgetreden.' });
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Interesse in {projectName}?
      </h3>
      <p className="text-gray-600 mb-6">
        Vul het onderstaande formulier in en wij nemen zo snel mogelijk contact met u op.
      </p>
      
      <form id="project-inquiry-form" action={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-2">
              Naam *
            </label>
            <input
              type="text"
              id="inquiry-name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Uw naam"
            />
          </div>
          
          <div>
            <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="inquiry-email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="uw.email@voorbeeld.be"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefoon
          </label>
          <input
            type="tel"
            id="inquiry-phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Uw telefoonnummer"
          />
        </div>
        
        <div>
          <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 mb-2">
            Bericht *
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Vertel ons over uw interesse in dit project..."
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Versturen...
              </>
            ) : (
              'Interesse tonen'
            )}
          </button>
        </div>
        
        {message && (
          <div className={`text-center p-4 rounded-lg ${
            message.type === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {message.text}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProjectInquiry;
