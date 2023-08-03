import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Next Blog App. All rights reserved.
        </p>
        <p>
          Built with <a href="https://nextjs.org/" className="underline">Next.js</a>, styled with <a href="https://tailwindcss.com/" className="underline">Tailwind</a>, and powered by <a href="https://www.prisma.io/" className="underline">Prisma</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;