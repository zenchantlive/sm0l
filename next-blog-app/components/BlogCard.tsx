import { FC } from 'react';
import Link from 'next/link';
import { Blog } from '../prismaClient';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={blog.image} alt={blog.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blog.category}</div>
          <Link href={`/blog/${blog.id}`}>
            <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{blog.title}</a>
          </Link>
          <p className="mt-2 text-gray-500">{blog.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;