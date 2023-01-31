import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio";
import React from "react";

function work(props) {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent traveling the world"
      ></Hero>
      <div>
        <Portfolio />
      </div>
    </div>
  );
}

export default work;
