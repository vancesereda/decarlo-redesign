import React, { Component } from 'react'
import script_images from './scriptImages'
import Draggable from 'react-draggable'

export default class RandomPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zIndex: 0,
            click: -1,
            width: 0,
            height: 0,

        };
        this.onClick = this.onClick.bind(this);
        this.newPicture = this.newPicture.bind(this);
        
    }

    newPicture() {
        const { zIndex } = this.state;
        this.setState({zIndex: zIndex+1})
    }

    onStart(e) {
        e.preventDefault();
    }

    onClick(val) {
        this.setState({click: val})
    }

    componentDidMount() {
        requestAnimationFrame(() => { // requestAnimationFrame necessary for setInterval to work properly on Firefox. 
                this.interval = setInterval(()=>this.newPicture(), 5000)
            })
        this.handleWindow(window.innerWidth, window.innerHeight)
    }

    handleWindow = (width, height) => {
            this.setState({
                width: width, 
                height: height,
            })
            this.handleCoords(width, height);
    }
    handleCoords = (width, height) => {
        this.setState({
            left: Array.apply(null, Array(101)).map(()=> {
                if (width > 600) {
                    return Math.random()*(width/2)+300;
                } else {
                    return Math.random()*(width/2);
                }
            }),
            top: Array.apply(null, Array(101)).map(()=>{
                if (height < 850) {
                    return  Math.random()*(height-500) + 350
                } else {
                    return Math.random()*height/2;
                }
            })
        })
    }

    render() {
        const { zIndex , click, left, top , width} = this.state;
        console.log(top)
        return (
            <div onClick={this.newPicture} className="random-photo">
                    <div className="center-twenties">
                        <img src={`https://s3.amazonaws.com/www.domdecarlo.com/files/gimgs/1_background_twenties.jpg`} />
                    </div>
                <Draggable onStart={this.onStart} >
                <div className="front-page-text"><strong>Click and drag the images that appear.</strong></div>
                </Draggable>
                    {script_images.map((img, i) => {
                        return (
                                <Draggable onStart={this.onStart} onDrag = {()=>this.onClick(i)}>
                                    <div className="draggable-content"
                                        style={{
                                        'position': 'fixed',
                                        'z-index': `${click === i ? zIndex+2 : i}`,
                                        'left':`${width > 0 ? left[i] : 500}px`,
                                        'top':`${width > 0 ? top[i] : 500}px`,
                                        'height': 'auto' 
                                        }} key={i} className={zIndex > i ? `img display` : `img nodisplay`}>
                                        <img src={`https://s3.amazonaws.com/www.domdecarlo.com/files/script_images/art/${img}`} key={i} />
                                    </div>
                                </Draggable>
                        )
                    })}
            
            </div>
        )
    }
}

