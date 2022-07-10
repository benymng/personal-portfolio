import React from "react";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto lg:items-center flex">
        <div class="mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            <ProjectCard
              title="Captain Chef"
              description="Frontend: React, TailwindCSS, NextJS and Typescript."
              description2="Backend: Clarifai to identify the ingredients, Spoonacular API for finding recipes, and Google Mediapipe for hand gesture recognition. "
              href="https://captain-chef.benng.tech/"
              github="https://github.com/benymng/captain-chef"
            />
            <ProjectCard
              title="Infusion Energy"
              description="Full stack web app using MongoDB, ExpressJS, ReactJS and NodeJS stack with markdown blog functionality"
              href="https://infusion-energy.benng.tech"
              github="https://github.com/benymng/Infusion-Frontend"
            />
            <ProjectCard
              title="Real Times"
              description="Web app that tracks how long you expect to spend on a task and compares it to the actual time"
              href="https://real-times.herokuapp.com"
              github="https://github.com/benymng/Real-Times"
            />
            <ProjectCard
              title="PopQ!"
              description="An all-in-one webpage designed for facilitating social distancing by directing users to less busy stores as well as providing a remote queue system so that users may stay in their cars."
              href="https://drive.google.com/file/d/1T_EUTfL4Vxr-2CFCptyMnkComfYJYBSz/view"
              github="https://github.com/stanleyjzheng/IOhackHackathon2020"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
