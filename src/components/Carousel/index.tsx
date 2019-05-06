import React from "react";
import {data} from '../../configs/carousel'
import './carousel.scss';
import CarouselSlider from 'react-carousel-slider';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import { MDBCol } from "mdbreact";

const Carousel = () => {
  let manner = {
    autoSliding: {interval: "3s"},
    duration: "2s"
};

let accEleSetting;

// let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
// // if (mobileRegx.test(navigator.userAgent)) {
// //   //@ts-ignore
// //   accEleSetting.button = false;
// // }

let buttonSetting = {
    placeOn: "middle-inside",
    hoverEvent: true,
    style: {
        left: {
            height: "50px",
            width: "50px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        },
        right: {
            height: "50px",
            width: "50px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        }
    }
};

const datas = data.map((img) =>
//@ts-ignore
  <Link to = {'/galerie' } >
    <img src = {img.imgSrc} ></img>
  </Link>
)
  return (
    <MDBCol md="12">
      <CarouselSlider
        slideCpnts = {datas}  
        manner = {manner} 
        buttonSetting = {buttonSetting} 
      />
    </MDBCol>
  );
}

export default Carousel;