import React from "react";
import { Card } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Card className=" text-white border-0 ">
      <Card.Img
        src="https://i.ibb.co/Lz6DkPw/bike-banner.jpg"
        alt="banner image"
      />
      <Card.ImgOverlay className="text-black   img-fluid"></Card.ImgOverlay>
    </Card>
  );
};

export default Banner;
