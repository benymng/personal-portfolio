import React from "react";
import forest from "../assets/test2.jpg";
import backgroundImage from "../assets/background-image.jpg";

export const BannerTwo = () => {
  return (
    <div>
      <section class="relative bg-white">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100 z-0"
          src={backgroundImage}
          alt="Couple on a bed with a dog"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Infusion Energy
              <br></br>
              <strong class="font-extrabold text-accent-color sm:block">
                Fuels From CO<sub>2</sub>
              </strong>
            </h1>

            <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Recycling effluent CO<sub>2</sub> into low-Carbon-Intensity (CI)
              liquid fuel for a greener future.
            </p>

            <div class="flex flex-wrap gap-4 mt-8 text-center">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-accent-color sm:w-auto active:bg-rose-500 hover:bg-hover-color focus:outline-none focus:ring"
                href="/contact"
              >
                Contact
              </a>

              <a
                class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-accent-color sm:w-auto hover:text-hover-color active:text-rose-500 focus:outline-none focus:ring"
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
