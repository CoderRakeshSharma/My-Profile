import React from "react";
import { PublicLayout } from "components/Layouts";
import AchievementsSection from "components/Achievements/AchievementsSection";

const Achievements = () => {
  return (
    <div>
      <PublicLayout>
        <AchievementsSection />
      </PublicLayout>
    </div>
  );
};

export default Achievements;
