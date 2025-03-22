
import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavigationPanel } from './NavigationPanel';
import { useAuth } from '@/context/AuthContext';

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
          <aside className="hidden w-64 border-r md:block">
            <NavigationPanel />
          </aside>
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
