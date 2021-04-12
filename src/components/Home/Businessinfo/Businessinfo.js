import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const businessDetails = [
  {
    title: "Opening Hours",
    description: "We Are Open 24/7",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Janata Tower, Dhaka-Bangladesh",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact Us Now",
    description: "+8801632321051",
    icon: faPhoneAlt,
    background: "primary",
  },
];
const Businessinfo = () => {
  return (
    <section>
      <div className='w-75 row m-auto'>
        {businessDetails.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default Businessinfo;
