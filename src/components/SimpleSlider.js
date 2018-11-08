import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: this.props.items.length > 15 ? false : true,
      infinite: false,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      className: 'slider-width'
    };
    return (
      <div>
        <Slider {...settings}>
        {this.props.items.map( (item, i) =>  (
            <div key={i}>
                <p className="text-center">{item.caption}</p>
                <img key={item.src} src={`https://s3.amazonaws.com/www.domdecarlo.com/files/gimgs/${item.src}`}/>
            </div>
        ))}
        </Slider>
      </div>
    );
  }
}