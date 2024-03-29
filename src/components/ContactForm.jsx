import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_nz746jv";
const TEMPLATE_ID = "template_8lf95ps";
const PUBLIC_KEY = "OY47pSEhckBwSInLH";

export const ContactForm = () => {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
    form.current.reset();
  };

  return (
    <div>
      <section class="">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:py-12 lg:col-span-2">
              <p class="max-w-xl text-lg">
                Interested in connecting? Feel free to reach out!
              </p>

              <div class="mt-8">

              </div>
            </div>

            <div class="p-8 rounded-lg shadow-2xl lg:p-12 lg:col-span-3">
              <form ref={form} onSubmit={handleOnSubmit} class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <div>
                    <div class="relative mt-1">
                      <input
                        type="text"
                        id="Name"
                        placeholder="Name"
                        class="input w-full max-w-xl border-gray-500"
                      />

                      <span class="absolute inset-y-0 inline-flex items-center right-4">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>

                    <div class="relative mt-1">
                      <input
                        type="text"
                        id="Email"
                        placeholder="Email"
                        class="input w-full max-w-xl border-gray-500"
                      />

                      <span class="absolute inset-y-0 inline-flex items-center right-4">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </span>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>

                    <div class="relative mt-1">
                      <input
                        type="tel"
                        id="Phone Number"
                        placeholder="Phone Number"
                        class="input w-full max-w-xl border-gray-500"
                      />

                      <span class="absolute inset-y-0 inline-flex items-center right-4">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    class="h-36 w-full p-3 textarea border-gray-500"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span class="font-medium">Send Email</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
