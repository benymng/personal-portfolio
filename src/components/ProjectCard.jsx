import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubButton from "react-github-btn";
import { bounce, bounceInUp, bounceInRight } from "react-animations";
import styled, { keyframes } from "styled-components";

export const ProjectCard = (props) => {
  const navigate = useNavigate();

  const navigateToUrl = (url) => {
    navigate(url);
  };

  const BounceInRight = styled.div`
    animation: 2s ${keyframes`${bounceInRight}`};
  `;

  return (
    <div>
      <BounceInRight>
        <a href={props.href}>
          <div class="card lg:card-side bg-base-100 shadow-2xl h-full">
            <figure>
              <img
                class="min-h-full h-96 w-80 object-cover"
                src={props.image}
                alt="Album"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-blue-200 card-title">{props.title}</h2>
              <p>{props.description}</p>
              <p>{props.description2}</p>
              <div class="card-actions justify-end"></div>
              <button class="btn btn-primary bg-blue-400">Visit Website</button>
              <div class="mt-5">
                <GitHubButton href={props.github}>Github</GitHubButton>
              </div>
            </div>
          </div>
        </a>
      </BounceInRight>
    </div>
  );
};
