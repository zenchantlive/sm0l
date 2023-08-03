import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
  const [session, loading] = useSession();

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Next Blog</a>
      </Link>
      <div className="flex items-center">
        <ThemeSwitch />
        {!loading && (
          <>
            {session ? (
              <Link href={`/user/${session.user.id}`}>
                <a className="ml-4">{session.user.name}</a>
              </Link>
            ) : (
              <Link href="/api/auth/signin">
                <a className="ml-4">Sign In</a>
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;