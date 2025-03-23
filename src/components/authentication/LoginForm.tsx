
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/types';
import { toast } from '@/components/ui/use-toast';

type LoginCredentials = {
  role: UserRole;
  email: string;
};

// Demo credentials for each role
const DEMO_CREDENTIALS: LoginCredentials[] = [
  { role: 'admin', email: 'admin@gha.edu' },
  { role: 'teacher', email: 'teacher@gha.edu' },
  { role: 'finance', email: 'finance@gha.edu' },
  { role: 'parent', email: 'parent@gha.edu' },
  { role: 'student', email: 'student@gha.edu' },
  { role: 'librarian', email: 'librarian@gha.edu' },
];

export const LoginForm = () => {
  const [email, setEmail] = useState('admin@gha.edu');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: 'Logged in successfully',
        description: 'Welcome to the Great Highway Academy portal',
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (credentials: LoginCredentials) => {
    setEmail(credentials.email);
    setPassword('password');
    
    try {
      await login(credentials.email, 'password');
      toast({
        title: 'Demo login successful',
        description: `Logged in as ${credentials.role}`,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Demo login failed',
        description: 'An error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6 animate-fade-in">
      <div className="text-center">
        <img 
          src="/lovable-uploads/1d6a4e0d-192f-449f-80fb-480b7f1da56e.png" 
          alt="Great Highway Academy" 
          className="h-20 w-auto mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Log in to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="admin@gha.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 dark:bg-background/10"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="text-xs text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toast({
                  title: 'Password Reset',
                  description: 'This feature is not available in the demo',
                });
              }}
            >
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-background/50 dark:bg-background/10"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background dark:bg-background/20 px-2 text-muted-foreground">
            Demo Accounts
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {DEMO_CREDENTIALS.map((cred) => (
          <Button
            key={cred.role}
            variant="outline"
            size="sm"
            onClick={() => handleDemoLogin(cred)}
            className="text-xs capitalize bg-background/50 dark:bg-background/10 dark:hover:bg-background/20"
          >
            {cred.role}
          </Button>
        ))}
      </div>
    </div>
  );
};
