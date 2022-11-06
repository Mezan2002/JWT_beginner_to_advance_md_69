import React from "react";
import bannerImage1 from "../../../assets/images/banner/1.jpg";
import bannerImage2 from "../../../assets/images/banner/2.jpg";
import bannerImage3 from "../../../assets/images/banner/3.jpg";
import bannerImage4 from "../../../assets/images/banner/4.jpg";
import bannerImage5 from "../../../assets/images/banner/5.jpg";
import bannerImage6 from "../../../assets/images/banner/6.jpg";
import SliderItems from "./SliderItems/SliderItems";
const Banner = () => {
  const carouselData = [
    {
      image: bannerImage1,
      id: 1,
      pre: 6,
      next: 2,
    },
    {
      image: bannerImage2,
      id: 2,
      pre: 1,
      next: 3,
    },
    {
      image: bannerImage3,
      id: 3,
      pre: 2,
      next: 4,
    },
    {
      image: bannerImage4,
      id: 4,
      pre: 3,
      next: 5,
    },
    {
      image: bannerImage5,
      id: 5,
      pre: 4,
      next: 6,
    },
    {
      image: bannerImage6,
      id: 6,
      pre: 5,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full rounded-xl my-10">
      {carouselData.map((carousel) => (
        <SliderItems key={carousel.id} carousel={carousel}></SliderItems>
      ))}
    </div>
  );
};

export default Banner;
