import RegistrationForm from '@/components/Auth/RegistrationForm';
import React from 'react';


const RegisterPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
