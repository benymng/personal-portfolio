import React, { useEffect } from "react";
import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

export const AdminTestimonials = () => {
  const [isLoading, setLoading] = useState(true);
  const serverLink =
    "https://backendtesting1234.herokuapp.com/api/testimonials";
  const [testimonials, setTestimonials] = useState([]);
  // when the second component is an empty that means that the fetch happens when you click the blog button
  // if you want to refetch with a button you should create a function that you can use onclick and useEffect
  useEffect(() => {
    fetch(serverLink)
      .then((res) => res.json())
      .then((json) => {
        setTestimonials(json);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);
  console.log(testimonials);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <section class="bg-gray-100">
        <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div class="items-end justify-between sm:flex">
            <div class="max-w-xl">
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                Read trusted reviews from our customers
              </h2>

              <p class="max-w-lg mt-8 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur praesentium natus sapiente commodi. Aliquid sunt
                tempore iste repellendus explicabo dignissimos placeat, autem
                harum dolore reprehenderit quis! Quo totam dignissimos earum.
              </p>
            </div>

            <a
              class="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
              href=""
            >
              Read all reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                header={testimonial.header}
                stars={testimonial.rating}
                name={testimonial.name}
                description={testimonial.description}
              />
            ))}
            {/* <TestimonialCard
              description="Testing"
              header="Lorem ipsum dolor sit amet."
              name="tesjkljsf"
              stars="4"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};
