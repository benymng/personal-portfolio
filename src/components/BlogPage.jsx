import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export const BlogPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

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
    <div>
      {parse(data.sanitizedHtml)}
      {/* <h1>Test</h1> */}
    </div>
  );
};
