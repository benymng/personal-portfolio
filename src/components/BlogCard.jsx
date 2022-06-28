import React from "react";
import { useCallback } from "react";

export const BlogCard = (props) => {
  const handleOnLoad = useCallback(() => {
    props.setImageCount(props.imageCount + 1);
  }, []);

  return (
    <div>
      <a href={props.href} class="block overflow-hidden rounded-2xl">
        <img
          class="object-cover w-full h-56"
          src={props.image}
          alt=""
          onLoad={handleOnLoad}
        />

        <div class="p-4 bg-gray-900">
          <h5 class="text-sm text-white">{props.title}</h5>
          <h6 class="text-xs text-gray-500 mt-1">{props.date}</h6>
          <p class="mt-1 text-xs text-gray-500">{props.description}</p>
        </div>
      </a>
    </div>
  );
};
