import React from 'react'
import ImageCard from '../presentation/ImageCard'


class ImageContainer extends React.Component{
  render(){
    return(
      <div className="imgDiv">
      <div className="headers">
      <h1> New York City</h1>
      <br/>
      <h3>Stunning images of the city that never sleeps.</h3>
      </div>
        {this.props.images.map(image => {
          return <ImageCard key={image.id}image={image} />
        })}
    </div>
    )
  }
}
export default ImageContainer
