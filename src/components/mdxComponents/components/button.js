import styled, { css } from 'react-emotion'
import { lighten } from 'polished'
import { dynamicMargin } from './styles'

const baseColor = '#005aff'

const buttonStyle = ({ color = baseColor }) => css`
  padding: 0.6em 1em;
  border-radius: 0.25em;
  transition: all .3s ease;
  font-weight: 500;
  color: #fff;
  background-color: ${color};
  border: 1px solid ${color};
  min-width: 8.75rem;

  ::after {
    content: 'content';
  }

  :disabled {
    ::after {
      content: 'disabled';
    }
    cursor: not-allowed;
    background-color: #f1f1f1;
    border-color: #f1f1f1;
    color: #999;
  }

  :enabled {
    :focus:active {
      ::after {
        content: 'focus & active';
      }

      transform: scale(0.98);
    }

    :hover {
      ::after {
        content: 'hover';
      }

      background-color: ${lighten(0.1, color)};
      border-color: ${lighten(0.1, color)};
    }
  }
`
const Button = styled('button')`
  ${buttonStyle};
  ${dynamicMargin};
`

export default Button
