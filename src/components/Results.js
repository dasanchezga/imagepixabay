import React, { Component } from 'react';
import Image from "./Image";
import Pages from "./Pages";

class Results extends Component {
    showImages = () =>{

        const imagen = this.props.images;
        if(imagen.length === 0)return null;

        return(
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    {imagen.map(img =>(
                        <Image
                            key = {img.id}
                            img = {img}
                        />

                    ))}
                </div>
                <Pages
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }
    render(){
        return (
            <React.Fragment>
                {this.showImages() } 
            </React.Fragment>
        )
    }
    
}

export default Results;