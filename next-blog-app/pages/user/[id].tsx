import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'
import UserProfile from '../../components/UserProfile'
import BlogCard from '../../components/BlogCard'
import Layout from '../../components/Layout'

const prisma = new PrismaClient()

const UserPage = ({ user, blogs }) => {
  return (
    <Layout>
      <UserProfile user={user} />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { blogs: true },
  })

  return {
    props: { user, blogs: user.blogs },
  }
}

export default UserPage