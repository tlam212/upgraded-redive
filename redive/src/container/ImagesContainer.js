import React from 'react';
import ImageCard from '../presentation/ImageCard'


const ImagesContainer =({ images, addToCollection, collectionMode, removeImg })=>{


    return(
      <div className="imgDiv">

        {images.map(image => {
          return <ImageCard
          collectionMode={collectionMode}
          key={image.id}
          image={image}
          addToCollection={addToCollection}
          removeImg={removeImg}
          />
        })}
    </div>
    )

}
export default ImagesContainer
