import React from 'react';
import Carousel from 'nuka-carousel';


export default class NukaSlider extends React.Component {

  
  render() {
    return (
      <div className="">
        <Carousel 
          renderBottomCenterControls = {
            this.props.items.length > 20 ? null :
            Carousel.defaultProps.renderBottomCenterControls
          }
          wrapAround = {true}
        >
        {console.log(Carousel.defaultProps.renderBottomCenterControls)}

          {this.props.items.map( (item, i) =>  (
            <div className="carousel-width">
                  <img key={item.src} src={`https://s3.amazonaws.com/www.domdecarlo.com/files/gimgs/${item.src}`}
                  onLoad={() => i === 0 
                    ? window.dispatchEvent(new Event('resize'))
                    : null}
                  />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}