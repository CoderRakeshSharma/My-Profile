import React from "react";
import { PublicLayout } from "components/Layouts";
import ContactMeSection from "components/Contact Me/ContactMeSection";

const ContactMe = () => {
  return (
    <div>
      <PublicLayout>
        <ContactMeSection />
      </PublicLayout>
    </div>
  );
};

export default ContactMe;
