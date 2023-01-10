import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import LoopImage from "../assets/projectPictures/loop5.png";
import CaptainChefImage from "../assets/projectPictures/captain-chef.png";
import InfusionImage from "../assets/projectPictures/infusion.png";
import RealTimesImages from "../assets/projectPictures/realtimes.png";
import BlueSkyImage from "../assets/projectPictures/bluesky.png";
import GainsImage from "../assets/projectPictures/4gains.png";
import PopQImage from "../assets/projectPictures/popq.png";

export const Projects = () => {
  return (
    <div>
      <div class="max-w-screen-xl px-4 py-16 mx-auto lg:items-center flex">
        <div class="mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            <ProjectCard
              title="Loop Education"
              description="Full stack web app which centralizes the process of high school club event sign up and organization"
              href="https://loopedu.ca"
              github="https://github.com/benymng/Loop-Frontend"
              image={LoopImage}
            />
            <ProjectCard
              title="4GAINS"
              description="Fitness application which tracks the consistency of repetitions and the accceleration of gym exercises."
              href="https://4fun.benjaminng.ca/"
              github="https://github.com/benymng/4FUN"
              image={GainsImage}
            />
            <ProjectCard
              title="Captain Chef"
              description="Frontend: React, TailwindCSS, NextJS and Typescript."
              description2="Backend: Clarifai to identify the ingredients, Spoonacular API for finding recipes, and Google Mediapipe for hand gesture recognition. "
              href="https://captain-chef.benjaminng.ca/"
              github="https://github.com/benymng/captain-chef"
              image={CaptainChefImage}
            />
            <ProjectCard
              title="Infusion Energy"
              description="Full stack web app using MongoDB, ExpressJS, ReactJS and NodeJS stack with markdown blog functionality"
              href="https://infusion-energy.benjaminng.ca"
              github="https://github.com/benymng/Infusion-Frontend"
              image={InfusionImage}
            />
            <ProjectCard
              title="Real Times"
              description="Web app that tracks how long you expect to spend on a task and compares it to the actual time"
              href="https://real-times.herokuapp.com"
              github="https://github.com/benymng/Real-Times"
              image={RealTimesImages}
            />
            <ProjectCard
              title="Blue Sky AI"
              description="Taking only the latitude, longitude, start cause, and discovery date, Wildfire-AI uses advanced machine learning to predict the acreage and date the wildfire will be under control"
              href="https://devpost.com/software/bluesky-ai"
              github="https://github.com/stanleyjzheng/BlueSky-AI"
              image={BlueSkyImage}
            />

            <ProjectCard
              title="PopQ!"
              description="An all-in-one webpage designed for facilitating social distancing by directing users to less busy stores as well as providing a remote queue system so that users may stay in their cars."
              href="https://drive.google.com/file/d/1T_EUTfL4Vxr-2CFCptyMnkComfYJYBSz/view"
              github="https://github.com/stanleyjzheng/IOhackHackathon2020"
              image={PopQImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
