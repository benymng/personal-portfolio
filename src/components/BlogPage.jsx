import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { ReactSession } from "react-client-session";

export const BlogPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://backend-virid-zeta.vercel.app/portfolio/articles/${slug}`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  return (
    <div class="bg-base-200">
      <div class="flex justify-center h-auto">
        <div
          class="lg:shadow-lg lg:w-3/5 lg:rounded sm:w-full lg:px-10 lg:py-10 mx-10 space-y-4 white prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: data.sanitizedHtml }}
        ></div>
        {/* <h1>Test</h1> */}
      </div>
    </div>
  );
};
