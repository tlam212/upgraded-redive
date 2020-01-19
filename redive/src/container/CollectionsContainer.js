import React from 'react'
import ImagesContainer from '../container/ImagesContainer'


const CollectionsContainer = ({ images }) => {
  return (
    <div>
      <ImagesContainer collectionMode={true} images={images} />
    </div>
  )
}
export default CollectionsContainer
