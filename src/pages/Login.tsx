
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/authentication/LoginForm';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gha-blue/5 to-gha-purple/5 dark:from-gha-blue/10 dark:to-gha-purple/20 p-4">
      <div className="w-full max-w-md">
        <div className="bg-background/80 dark:bg-background/30 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-border">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
