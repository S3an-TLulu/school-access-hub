
import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavigationPanel } from './NavigationPanel';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex flex-1">
        {isAuthenticated && (
          <>
            {/* Desktop Navigation */}
            <aside className="hidden w-64 border-r md:block">
              <NavigationPanel />
            </aside>
            
            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-4 left-4 z-50">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full shadow-lg">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <NavigationPanel />
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};
