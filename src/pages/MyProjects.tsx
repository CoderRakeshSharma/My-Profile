import React from "react";
import { PublicLayout } from "components/Layouts";
import MyProjectsSection from "components/My Projects/MyProjectsSection";

const MyProjects = () => {
  return (
    <div>
      <PublicLayout>
        <MyProjectsSection />
      </PublicLayout>
    </div>
  );
};

export default MyProjects;
