import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
        this.state={spans:0,loaded:0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        const height=this.imageRef.current.clientHeight;
        console.log('Height: ',height);
        const spans=Math.ceil(height/10);
        console.log('Spans: ',spans);

        this.setState({spans});
    }

    render(){
        const {urls,description}=this.props.image;
        return(

            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;