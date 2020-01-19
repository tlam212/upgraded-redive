import React from 'react';

const ImageCard = ({ image, addToCollection, collectionMode }) => {
  return(
    // <div className="imgcontainer">
        <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={image.img_url} alt={image.title} />
            <div className="content-details fadeIn-bottom">
              <h4 className="content-title">{image.title}</h4>
              <p className="content-text">Artist: {image.artist_name}</p>
              // if on collection page, add to collection button will be replaced by a delete button
              {collectionMode ? <button>x</button> :
              <button className="content-text" onClick={() => addToCollection(image)}>+</button>
              }
            </div>
        </div>
      // </div>
  )
}
export default ImageCard
