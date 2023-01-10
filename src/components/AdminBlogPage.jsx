import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { ReactSession } from "react-client-session";
import { OnlyForAdmin } from "./OnlyForAdmin";

export const AdminBlogPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateToEdit = () => {
    let editLink = `/edit/${slug}`;
    navigate(editLink);
  };

  const deleteFunction = () => {
    fetch(`https://backend-virid-zeta.vercel.app/portfolio/articles/${slug}`, {
      method: "DELETE",
    }).catch((error) => console.log(error));
    console.log("success");
    navigate("/blogs");
  };

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

  console.log(data);

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  const admin = ReactSession.get("admin");
  if (admin !== "LoggedIn") {
    return (
      <div>
        <OnlyForAdmin />
      </div>
    );
  }

  return (
    <div>
      <div class="mt-10 mb-5 mx-10">
        <button
          id="editButton"
          onClick={navigateToEdit}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Edit
        </button>
      </div>
      <div class="mx-10 mb-10">
        <button
          onClick={deleteFunction}
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
      </div>
      <div class="flex justify-center h-auto w-full">
        <div
          class="lg:shadow-lg lg:w-2/3 lg:rounded sm:w-full lg:px-10 lg:py-10 mx-10 space-y-4 white"
          dangerouslySetInnerHTML={{ __html: data.sanitizedHtml }}
        ></div>
        {/* <h1>Test</h1> */}
      </div>
    </div>
  );
};
