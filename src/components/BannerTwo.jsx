import React from "react";
import forest from "../assets/test2.jpg";
import backgroundImage from "../assets/background-image.jpg";
import { useNavigate } from "react-router-dom";

export const BannerTwo = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div class="hero h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={navigateToContacts} class="btn btn-primary">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
