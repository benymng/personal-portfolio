import React from "react";

import Dropdown from "./Dropdown";
import Logo from "../assets/logo.png";

export const Navigation = () => {
  function myFunction() {
    let x = document.getElementById("myDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>
      <header class="border-b border-gray-100">
        <div class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div class="flex items-center">
            <Dropdown />
            <a href="/" class="flex ">
              <img src={Logo} alt="infusion logo" class="inline-block h-10" />
              {/* <span class="inline-block w-32 h-10 bg-gray-200 rounded-lg">
                Infusion
              </span> */}
            </a>
          </div>

          <div class="flex items-center justify-end flex-1">
            <nav class="hidden lg:uppercase lg:text-font-color lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
              <a
                href="/about"
                class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-accent-color hover:border-current"
              >
                About
              </a>
              <a
                href="/blogs"
                class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-accent-color hover:border-current"
              >
                Blogs
              </a>

              <a
                href="/testimonials"
                class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-accent-color hover:border-current"
              >
                Testimonials
              </a>

              <a
                href="/contact"
                class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-accent-color hover:border-current"
              >
                Contact
              </a>
            </nav>

            <div class="items-center ml-8 hidden md:block">
              <div class="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
                <span>
                  <a
                    href="/cart"
                    class="block p-6 border-b-4 border-transparent hover:border-accent-color"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span class="sr-only">Cart</span>
                  </a>
                </span>

                <span>
                  <a
                    href="/account"
                    class="block p-6 border-b-4 border-transparent hover:border-accent-color"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="sr-only"> Account </span>
                  </a>
                </span>

                <span class="hidden sm:block">
                  <a
                    href="/search"
                    class="block p-6 border-b-4 border-transparent hover:border-accent-color"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>

                    <span class="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
