import React from 'react';

const ImageCard = ({ image, addToCollection, collectionMode, removeImg }) => {
  return(
    // <div className="imgcontainer">
        <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={image.img_url} alt={image.title} />
            <div className="content-details fadeIn-bottom">
              <h4 className="content-title">{image.title}</h4>
              <p className="content-text">Artist: {image.artist_name}</p>
              {collectionMode ? <button onClick={() => removeImg(image.id)}>x</button> :
              // If on Collection page add button will be replaced with a delete button
              <button className="content-text" onClick={() => addToCollection(image)}>+</button>
              }
            </div>
        </div>
      // </div>
  )
}
export default ImageCard
