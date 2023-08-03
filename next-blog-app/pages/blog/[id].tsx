import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';
import BlogCard from '../../components/BlogCard';
import UserProfile from '../../components/UserProfile';

const prisma = new PrismaClient();

const BlogPage = ({ blog, user }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <UserProfile user={user} />
      <BlogCard blog={blog} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const blog = await prisma.blog.findUnique({
    where: { id: Number(context.params.id) },
    include: { author: true },
  });

  if (!session || session.user.id !== blog.authorId) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { blog, user: session.user },
  };
};

export default BlogPage;