
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gha-blue/10 to-gha-purple/10 p-4">
      <div className="w-full max-w-md">
        <div className="glass rounded-xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
