import React, { Component } from 'react'
import gimgs from './gimgs'
import alphasort from 'alphanum-sort'
import SimpleSlider from './SimpleSlider';
import NukaSlider from './NukaSlider'


const ImageMap = (props) => (
        <div>
            {props.items.map((item, i) => {
                return (
                <div key={item}>
                    <img key={i} src={`https://s3.amazonaws.com/www.domdecarlo.com/files/gimgs/${item.src}`} />
                </div>)
            })}
        </div>
)



export default class ContentMap extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const { caption } = this.props;
        const images = gimgs.filter(img=>img.substr(0,4).includes(`${this.props.setNumber}_`))
        const sorted = alphasort(images)
        const re = /([0-9]|[0-9][0-9])(?=_)/g;
        console.log(`sfdkjlsdflkjsfdkjl`)
        const CarouselItems = sorted.map((item, idx) => {

            return {
                "src": `${item}`,
                "caption": `${caption ? caption : ``}`
            }
            
        })
        const DailyItems = sorted.reverse().map((item, idx) => {
            return {
                "src": `${item}`,
                "caption": `${``}`
        }})   
    
        if (this.props.slideshow === 'true') {
            if (this.props.setNumber === `31`) { //daily photos set is #31
                return (
                    <div>
                    <SimpleSlider items={DailyItems} />
                    </div>
                )
            } else {
            return (
                <div>
                    <span className="lg-scrn">
                        <SimpleSlider items={CarouselItems} />
                    </span>
                    <span className="sm-scrn">
                        <ImageMap items={CarouselItems} />
                    </span>
                </div>

            )
            }
        } else if (this.props.setNumber.length) {
            return (
            <ImageMap items={CarouselItems} />
            )
        } else {
            return (<div></div>)
        }

    }
}


