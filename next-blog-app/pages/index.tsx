import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { BlogCard } from '../components/BlogCard'
import { ThemeSwitch } from '../components/ThemeSwitch'
import { GoogleLoginButton } from '../components/GoogleLoginButton'

const prisma = new PrismaClient()

export default function Home({ blogs }) {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Head>
        <title>Next.js Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-8">
        <h1 className="text-3xl font-bold">Next.js Blog App</h1>
        <div className="flex items-center">
          <GoogleLoginButton />
          <ThemeSwitch />
        </div>
      </header>

      <main className="p-8">
        <h2 className="text-2xl font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      author: true,
    },
  })

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  }
}