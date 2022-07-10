import React from "react";
import { Banner } from "../components/Banner";
import { Banner2 } from "../components/Banner2";
import { BannerTwo } from "../components/BannerTwo";
import { BlogCard } from "../components/BlogCard";
import { SocialMedia } from "../components/SocialMedia";

const Home = () => {
  return (
    <div>
      <BannerTwo />
      <SocialMedia />
      {/* <Banner /> */}
    </div>
  );
};

export default Home;
