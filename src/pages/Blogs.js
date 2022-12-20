import React from "react";
import { BlogCard } from "../components/BlogCard";
import { useState } from "react";
import { useEffect } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ReactSession } from "react-client-session";

const Blogs = () => {
  const [isLoading, setLoading] = useState(true);
  const serverLink = "https://backend-virid-zeta.vercel.app/portfolio/articles";
  const [articles, setArticles] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  // when the second component is an empty that means that the fetch happens when you click the blog button
  // if you want to refetch with a button you should create a function that you can use onclick and useEffect

  useEffect(() => {
    if (imageCount == articles.length) {
      setLoading(false);
    }
  }, [imageCount]);

  useEffect(() => {
    fetch(serverLink)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
      });
  }, []);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // If the admin is not logged in, the url path is different
  let startPath = "/blogs/";
  const admin = ReactSession.get("admin");

  if (admin == "LoggedIn") {
    startPath = "/admin/blogs/";
  }

  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto lg:items-center flex">
        <div class="mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            {articles.map((article) => (
              <BlogCard
                title={article.title}
                description={article.description}
                image={article.imageUrl}
                date={article.createdAt}
                href={startPath + article.slug}
                setImageCount={setImageCount}
                imageCount={imageCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
