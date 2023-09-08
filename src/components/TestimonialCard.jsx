import React from "react";

export const TestimonialCard = (props) => {
  let reviewStars = (numStars) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div class="flex space-x-0.5 text-yellow-500">{stars}</div>;
  };

  return (
    <div>
      <div class="card bg-base-200 h-full shadow-xl">
        <div class="card-body">
          {reviewStars(props.stars)}
          <h2 class="card-title">{props.header}</h2>
          <p>{props.description}</p>
          <div class="card-actions justify-end">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </div>
    // <blockquote class="flex flex-col justify-between h-full p-12 bg-white">
    //   <div>
    //     {reviewStars(props.stars)}

    //     <div class="mt-4">
    //       <h5 class="text-xl font-bold text-font-color sm:text-2xl">
    //         {props.header}
    //       </h5>

    //       <p class="mt-4 text-gray-600">{props.description}</p>
    //     </div>
    //   </div>

    //   <footer class="mt-8 text-gray-500">{props.name}</footer>
    // </blockquote>
  );
};
