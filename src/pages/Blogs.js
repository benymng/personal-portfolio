import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { useState } from 'react';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  fetch('https://backendtesting1234.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((json) => {
      setArticles(json);
    });
  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto lg:items-center lg:flex">
        <div class="max-w-xl mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {articles.map((article) => (
              <BlogCard
                title={article.title}
                description={article.description}
                image={article.imageUrl}
                date={article.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
