import React from 'react';

export const BlogCard = (props) => {
  const startingLink = 'http://localhost:3000/blogs/';
  return (
    <div>
      <a
        href={startingLink + props.href}
        class="block overflow-hidden rounded-2xl"
      >
        <img class="object-cover w-full h-56" src={props.image} alt="" />

        <div class="p-4 bg-gray-900">
          <h5 class="text-sm text-white">{props.title}</h5>
          <h6 class="text-xs text-gray-500 mt-1">{props.date}</h6>
          <p class="mt-1 text-xs text-gray-500">{props.description}</p>
        </div>
      </a>
    </div>
  );
};
