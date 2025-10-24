import Container from '@/components/ui/Container';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-8">
      <Container>
        <div className="text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Cellna. Alle rechten voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;