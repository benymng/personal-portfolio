import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export const BlogPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateToEdit = () => {
    let editLink = `/edit/${slug}`
    navigate(editLink)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://backendtesting1234.herokuapp.com/api/${slug}`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);
  console.log(data);
  if (isLoading) {
    return <div> Loading ... </div>;
  }

  return (
    <div class="flex justify-center h-auto w-full">
      <div class="my-10">
        <button onClick={navigateToEdit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</button>
      </div>
      <div
        class="lg:shadow-lg lg:w-1/3 lg:rounded sm:w-full lg:px-10 lg:py-10 my-10 mx-10 space-y-4"
        dangerouslySetInnerHTML={{ __html: data.sanitizedHtml }}
      ></div>
      {/* <h1>Test</h1> */}
    </div>
  );
};
