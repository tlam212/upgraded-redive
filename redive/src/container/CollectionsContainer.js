import React from 'react'
import ImagesContainer from '../container/ImagesContainer'


const CollectionsContainer = ({ images, removeImg }) => {
  return (
    <div>
      <ImagesContainer
      collectionMode={true}
      images={images}
      removeImg={removeImg}
      />
    </div>
  )
}
export default CollectionsContainer
