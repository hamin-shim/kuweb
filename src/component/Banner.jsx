import { Carousel } from "bootstrap";
import React from "react";
import { CarouselItem } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";

export default function Banner() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings} style={{ paddingLeft: "5%" }}>
      <EachSlide>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
          alt="/"
        />
        <p>title</p>
      </EachSlide>
      <EachSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMqSaJ-TPUDQHH42cwlJmextlIt8Q_F3Ug_TDvq_nPsW8Uevry3ZgQ_JH6tBL-_H-frM&usqp=CAU"
          alt="/"
        />
        <p>title</p>
      </EachSlide>
      <EachSlide>
        <img
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
          alt="/"
        />
        <p>title</p>
      </EachSlide>
    </Slider>
  );
}
const EachSlide = styled.div`
  padding: 30px;
  margin: auto;
  /* border: 1px solid black; */
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
  }
`;
