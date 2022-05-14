import React from 'react';
import { BlogCard } from '../components/BlogCard';

const Blogs = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-6 px-24">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
