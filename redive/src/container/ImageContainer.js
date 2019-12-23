import React from 'react'
import ImageCard from '../presentation/ImageCard'


class ImageContainer extends React.Component{
  render(){
    return(
      <div className="imgDiv">
        {this.props.images.map(image => {
          return <ImageCard key={image.id}image={image} />
        })}
    </div>
    )
  }
}
export default ImageContainer
