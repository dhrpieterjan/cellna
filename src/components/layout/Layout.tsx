import Header from './Header';
import Footer from './Footer';
import ContactForm from '@/components/sections/ContactForm';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header />
      </div>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;