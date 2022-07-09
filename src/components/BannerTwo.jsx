import React from "react";
import forest from "../assets/test2.jpg";
import backgroundImage from "../assets/background-image.jpg";
import { useNavigate } from "react-router-dom";
import { bounce, bounceInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";

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
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("testing")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("again")
                  .start();
              }}
              wrapper="h1"
            />
            <BounceInUp>
              <h1 class="text-5xl font-bold">Hello there</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button onClick={navigateToContacts} class="btn btn-primary">
                Contact
              </button>
            </BounceInUp>
          </div>
        </div>
      </div>
    </div>
  );
};
