import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const { slug } = useParams();

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

    setTitle(data.title);
    console.log(title)
    setDescription(data.description);
    setMarkdown(data.markdown);
    setimageURL(data.imageUrl);

  }, []);

  // renders this until the useEffect has finished
  if (isLoading) {
    return <div> Loading ... </div>;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let updatedArticle = JSON.stringify({
      title: title,
      description: description,
      markdown: markdown,
      imageUrl: imageURL,
    });
    console.log("updated article: ");
    console.log(updatedArticle);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: updatedArticle,
    };
    fetch(`http://localhost:3000/api/edit/${slug}`, requestOptions)
    .catch(error => {
        console.error('There was an error!', error);
    });

    //reset form
    setTitle("");
    setDescription("");
    setMarkdown("");
    setimageURL("");
    console.log("success");
  };

  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p class="text-lg font-medium">Edit Article</p>

            <div>
              <div class="relative mt-1">
                <input
                  type="text"
                  id="title"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Title"
                  // value={title}
                  defaultValue={data.title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </span>
              </div>
            </div>

            <div>
              <div class="relative mt-1">
                <input
                  type="text"
                  id="description"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Description"
                  // value={description}
                  defaultValue={data.description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </span>
              </div>
            </div>

            <div>
              <div class="relative mt-1">
                <textarea
                  type="text"
                  id="Markdown"
                  class="w-full p-4 pr-12 h-96 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Markdown"
                  // value={markdown}
                  defaultValue={data.markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </span>
              </div>
            </div>

            <div>
              <div class="relative mt-1">
                <input
                  type="text"
                  id="imageUrl"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Image URL (https://source.unsplash.com/...)"
                  // value={imageURL}
                  defaultValue={data.imageUrl}
                  onChange={(e) => setimageURL(e.target.value)}
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
