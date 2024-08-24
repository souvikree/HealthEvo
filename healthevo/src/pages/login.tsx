import LoginForm from '@/components/Auth/LoginForm';
import React from 'react';


const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
