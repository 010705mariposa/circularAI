import React from "react";
import Feed from "@components/Feed";
import VoiceFeed from "@components/VoiceFeed";
import Feature from "@components/Feature";
import SearchBar from "@components/SearchBar";

const page = () => {
  return (
    <div className="w-full py-24">
      <h1 className="head_text text-center">
        Discover & Create
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Voice cloning speech</span>
      </h1>

      <SearchBar />
      
      <Feed />
      
      <VoiceFeed />

      <Feature />
    </div>
  );
};

export default page;
