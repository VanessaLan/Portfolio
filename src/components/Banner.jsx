import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Banner = ({ image, title_banner, text_banner }) => {
  return (
    <div className="banner">
      <div className="banner_content">
        <FontAwesomeIcon className="laptop_icon" icon={faLaptopCode} />
        <h2>{title_banner}</h2>
        <p>{text_banner}</p>
      </div>
    </div>
  );
};

export default Banner;
