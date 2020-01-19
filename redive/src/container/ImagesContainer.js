import React from 'react';
import ImageCard from '../presentation/ImageCard'


const ImagesContainer =({ images, addToCollection, collectionMode })=>{


    return(
      <div className="imgDiv">

        {images.map(image => {
          return <ImageCard collectionMode={collectionMode} key={image.id} image={image} addToCollection={addToCollection}/>
        })}
    </div>
    )

}
export default ImagesContainer
