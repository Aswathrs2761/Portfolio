import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navbar py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="text-accent" size={16} fill="currentColor" /> by Aswath
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
