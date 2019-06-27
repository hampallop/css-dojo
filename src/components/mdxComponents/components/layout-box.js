import styled from 'react-emotion'

export const LayoutBox = styled('div')`
  border: 2px solid #666;
  padding: 1rem;
`

export const BoxTemplate = styled('div')`
  width: 150px;
  height: 150px;
  border-radius: 0.25rem;

  background-image: linear-gradient(to bottom right, #283c86, #45a247);
  color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
`

export const BoxAutoWideTemplate = styled('div')`
  min-width: 150px;
  width: 100%;
  height: 150px;
  border-radius: 0.25rem;

  background-image: linear-gradient(to bottom right, #283c86, #45a247);
  color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
`

export default LayoutBox
