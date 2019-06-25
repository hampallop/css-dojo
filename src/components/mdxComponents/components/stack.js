import styled, { css } from 'react-emotion'
import { parseUnit } from './styles'

const stackStyle = ({ gap = 16 }) => css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${parseUnit(gap)};
  margin-top: -${parseUnit(gap)};

  > * {
    margin-left: ${parseUnit(gap)};
    margin-top: ${parseUnit(gap)};
  }
`

export const Stack = styled('div')`
  ${stackStyle};
`

export const SimpleStack = styled('div')`
  display: flex;
  > * {
    margin: 0;

   + * {
    margin-left: 16px;
   }
  }
`

export const WrapableStack = styled('div')`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 0;

   + * {
    margin-left: 16px;
   }
  }
`

export const GridStack = styled('div')`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

export default Stack
