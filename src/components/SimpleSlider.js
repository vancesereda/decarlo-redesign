import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: this.props.items.length > 15 ? false : true,
      infinite: false,
      speed: 350,
      lazyload: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      animate: true,
      className:'slider-width'
    };
    return (
      <div>
        <Slider {...settings}>
        {this.props.items.map( (item, i) =>  (
          <div>
                <p>{item.caption}</p>
                <img key={item.src} src={`https://s3.amazonaws.com/www.domdecarlo.com/files/gimgs/${item.src}`}
                onLoad={() => i === 0 
                  ? window.dispatchEvent(new Event('resize'))
                  : null}/>
          </div>
        ))}
        </Slider>
      </div>
    );
  }
}