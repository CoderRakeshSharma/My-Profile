import React from "react";
import { PublicLayout } from "components/Layouts";
import AboutMeSection from "components/About Me/AboutMeSection";

const AboutMe = () => {
  return (
    <div>
      <PublicLayout>
        <AboutMeSection />
      </PublicLayout>
    </div>
  );
};

export default AboutMe;
