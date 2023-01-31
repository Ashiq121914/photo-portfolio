import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import React from "react";

function contact(props) {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form bellow for more work and quotes"
      ></Hero>
      <Contact />
    </div>
  );
}

export default contact;
