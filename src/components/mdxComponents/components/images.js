import React from 'react'
import styled from 'react-emotion'

export const Images = () => (
  <img
    sizes="(max-width: 1380px) 100vw, 1380px"
    srcSet="
    https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_400/v1451080425/dog.jpg 400w,
    https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_832/v1451080425/dog.jpg 832w,
    https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1146/v1451080425/dog.jpg 1146w,
    https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1380/v1451080425/dog.jpg 1380w"
    src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1380/v1451080425/dog.jpg"
    alt=""
  />
)


export const CoverImage = styled('div')`
  background: url("https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg") center center / cover no-repeat scroll;
  min-height: 200px;
`

export default Images
