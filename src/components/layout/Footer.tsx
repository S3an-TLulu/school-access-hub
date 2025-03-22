
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {currentYear} Great Highway Academy. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/privacy" className="underline-offset-4 hover:text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="underline-offset-4 hover:text-primary hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact" className="underline-offset-4 hover:text-primary hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
