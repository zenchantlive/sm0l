import { signIn } from 'next-auth/client';
import { FaGoogle } from 'react-icons/fa';

const GoogleLoginButton = () => {
  return (
    <button
      className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700"
      onClick={() => signIn('google')}
    >
      <FaGoogle className="w-5 h-5 mr-3" />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;