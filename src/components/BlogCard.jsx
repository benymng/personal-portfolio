import React from "react";
import { useCallback } from "react";

export const BlogCard = (props) => {
  const handleOnLoad = useCallback(() => {
    props.setImageCount(props.imageCount + 1);
  }, []);

  return (
    <div>
      <a href={props.href}>
        <div class="card w-96 object-cover bg-base-100 shadow-xl">
          <figure>
            <img class="w-full h-72" src={props.image} onLoad={handleOnLoad} />
          </figure>
          <div class="card-body opacity-75">
            <h2 class="card-title text-blue-200">{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </a>
    </div>
  );
};
