import React from 'react';
import { useState } from 'react';
// const newFetch = require('node-fetch');

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [imageURL, setimageURL] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    let newArticle = JSON.stringify({
      title: title,
      description: description,
      markdown: markdown,
      slug: 'sadfasjdlf',
      sanitizedHtml: 'asldfjaskdlfjaksdjf',
      imageUrl: imageURL,
    });
    console.log(newArticle);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: newArticle,
    };
    let res = await fetch(
      'https://backendtesting1234.herokuapp.com/api/',
      requestOptions
    );
    if (res.status === 200) {
      setTitle('');
    }
    console.log('success');
  };

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let newArticle = JSON.stringify({
  //     title: title,
  //     description: description,
  //     markdown: markdown,
  //     slug: 'df',
  //     sanitizedHtml: 'asldfjaskdlfjaksdjf',
  //   });
  //   console.log(newArticle);
  //   try {
  //     let res = await fetch(
  //       'https://backendtesting1234.herokuapp.com/api/articles',
  //       {
  //         method: 'POST',
  //         body: newArticle,
  //       }
  //     );
  //     if (res.status === 200) {
  //       setTitle('');
  //       setDescription('');
  //       setMarkdown('');
  //       console.log('success');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     console.log('isdfasdfjk');
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Markdown</label>
          <input
            type="text"
            name="markdown"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={'https://source.unsplash.com/' + imageURL}
            onChange={(e) => setimageURL(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
