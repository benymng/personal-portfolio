import React from "react";
import forest from "../assets/test2.jpg";
import backgroundImage from "../assets/background-image.jpg";
import { useNavigate } from "react-router-dom";
import { bounce, bounceInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Test from "../assets/website-development.svg";

export const BannerTwo = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact");
  };
  const BounceInUp = styled.div`
    animation: 2s ${keyframes`${bounceInUp}`};
  `;

  return (
    <div>
      <div class="hero h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <BounceInUp>
              <img src={Test} />
              <h1 class="text-5xl font-bold">Hi, I'm Ben!</h1>
              <p class="py-6">
                I'm a full stack developer studying software engineering at the
                University of Waterloo
              </p>
              <p class="pt-6">I'm also a </p>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Squash Player")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Hiker")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Foodie")
                    .deleteAll()
                    .pauseFor(2000)
                    .start();
                }}
                wrapper="h1"
              />
              <button onClick={navigateToContacts} class="btn btn-primary my-6">
                Contact
              </button>
            </BounceInUp>
          </div>
        </div>
      </div>
    </div>
  );
};
