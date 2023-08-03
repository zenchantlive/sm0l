import { FC } from 'react';
import { useSession } from 'next-auth/client';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

const UserProfile: FC = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('/api/auth/signin');
    return null;
  }

  const user = prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center space-x-2 mb-4">
        <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Your Blogs</h3>
        {user.blogs.map((blog) => (
          <div key={blog.id} className="p-4 shadow rounded bg-white mb-4">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-500">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;