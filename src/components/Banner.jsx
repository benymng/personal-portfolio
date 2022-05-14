import React from 'react';

export const Banner = () => {
  return (
    <div>
      <section class="bg-gray-50">
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-font-color">
              Infusion Energy
              <strong class="font-extrabold text-secondary-color sm:block">
                Fuels from CO2
              </strong>
            </h1>
            <p class="mt-4 sm:leading-relaxed sm:text-xl font-text-color">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="flex flex-wrap justify-center gap-4 mt-8">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white bg-secondary-color rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
