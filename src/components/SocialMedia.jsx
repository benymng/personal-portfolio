import React from "react";
import { SocialIcon } from "react-social-icons";

export const SocialMedia = () => {
  return (
    <div>
      <div class="fixed left-0 top-1/4 z-50 px-5 py-8 bg-transparent bg flex flex-col space-y-3">
        <a href="#" title="Github">
          <SocialIcon url="https://github.com/benymng" />
        </a>
      </div>
      <div class="fixed left-0 top-1/4 z-50 px-5 my-24 bg-transparent flex flex-col space-y-3">
        <a href="#" title="Share on WhatsApp">
          <SocialIcon url="https://www.instagram.com/ben_nng/" />
        </a>
        <a class="my-2" href="#" title="Share on WhatsApp">
          <SocialIcon url="https://www.facebook.com/benjamin.ng.9085" />
        </a>
      </div>
    </div>
  );
};
