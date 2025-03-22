
import { useAuth } from '@/context/AuthContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { RoleBasedDashboard } from '@/components/dashboard/RoleBasedDashboard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const Index = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <MainLayout>
        <RoleBasedDashboard />
      </MainLayout>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/1d6a4e0d-192f-449f-80fb-480b7f1da56e.png" 
              alt="Great Highway Academy" 
              className="h-10 w-auto"
            />
            <span className="hidden font-bold sm:inline-block">
              Great Highway Academy
            </span>
          </div>
          <div>
            <Link to="/login">
              <Button className="bg-gha-blue hover:bg-gha-blue/90 transition-all duration-300">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-gha-blue/10 to-gha-purple/10 py-20 md:py-32">
          <div className="container flex flex-col items-center text-center">
            <div className="animate-fade-in space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to <span className="text-gha-blue">Great Highway Academy</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                A comprehensive school management system designed for students, parents, teachers, and administrators.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
                <Link to="/login">
                  <Button size="lg" className="w-full bg-gha-blue hover:bg-gha-blue/90 transition-all duration-300 sm:w-auto">
                    Access Your Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Our platform offers a comprehensive suite of tools to manage all aspects of school operations.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Secure Access Control</h3>
                <p className="text-muted-foreground">
                  Role-based access ensures users only see information relevant to them, with robust security measures.
                </p>
              </div>

              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Academic Management</h3>
                <p className="text-muted-foreground">
                  Track student progress, manage grades, and organize curriculum materials in one central location.
                </p>
              </div>

              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Student Records</h3>
                <p className="text-muted-foreground">
                  Comprehensive student profiles with academic history, attendance records, and performance analytics.
                </p>
              </div>

              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                    <path d="M13 5v2"/>
                    <path d="M13 17v2"/>
                    <path d="M13 11v2"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Fee Management</h3>
                <p className="text-muted-foreground">
                  Streamlined fee collection, payment tracking, and financial reporting for school administrators.
                </p>
              </div>

              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2"/>
                    <path d="M17 11H7a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4Z"/>
                    <path d="M10 11v3a2 2 0 1 0 4 0v-3"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Communication Tools</h3>
                <p className="text-muted-foreground">
                  Integrated messaging system connecting administrators, teachers, students, and parents seamlessly.
                </p>
              </div>

              <div className="group rounded-lg border p-6 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10h18"/>
                    <path d="M6 14h2"/>
                    <path d="M16 14h2"/>
                    <path d="M10 14h4"/>
                    <rect height="16" rx="2" width="20" x="2" y="3"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Library Management</h3>
                <p className="text-muted-foreground">
                  Digital catalog, borrowing system, and inventory management for school libraries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
              Access your portal to view academic records, manage fees, communicate with teachers, and more.
            </p>
            <div className="mt-8">
              <Link to="/login">
                <Button size="lg" className="animate-pulse bg-gha-blue hover:bg-gha-blue/90">
                  Access Your Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/95 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Great Highway Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="underline-offset-4 hover:text-primary hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="underline-offset-4 hover:text-primary hover:underline">
              Terms of Service
            </a>
            <a href="#" className="underline-offset-4 hover:text-primary hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
