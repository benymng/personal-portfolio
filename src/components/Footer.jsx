import React from "react";
import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-50">
        <div class="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div class="lg:flex lg:items-end lg:justify-between">
            <div>
              <div class="flex justify-center text-teal-300 lg:justify-start">
                {/* <img src={Logo} alt="infusion logo" class="inline-block h-10" /> */}
              </div>

              <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
              <h2 class="sr-only" id="footer-navigation">
                Footer navigation
              </h2>

              <ul class="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
                <li>
                  <a
                    class="text-font-color transition hover:text-font-color/75"
                    href="/admin"
                  >
                    Admin
                  </a>
                </li>

                <li>
                  <a
                    class="text-font-color transition hover:text-font-color/75"
                    href="/add-testimonial"
                  >
                    Add Testimonial
                  </a>
                </li>

                <li>
                  <a
                    class="text-font-color transition hover:text-font-color/75"
                    href="/add-blog"
                  >
                    Add Blog Article
                  </a>
                </li>

                <li>
                  <a
                    class="text-font-color transition hover:text-font-color/75"
                    href="/admin-signup"
                  >
                    Admin Signup
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p class="mt-12 text-sm text-center text-gray-400 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
