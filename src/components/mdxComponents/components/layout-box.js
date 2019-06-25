import styled from 'react-emotion'

export const LayoutBox = styled('div')`
  border: 2px solid #666;
  padding: 1rem;
`

export const BoxTemplate = styled('div')`
  width: 150px;
  height: 150px;
  background: #999;
  border-radius: 0.25rem;
`

export const BoxAutoWideTemplate = styled('div')`
  min-width: 150px;
  width: 100%;
  height: 150px;
  background: #999;
  border-radius: 0.25rem;
`

export default LayoutBox
