import styled, { css } from 'react-emotion'
import { dynamicMargin } from './styles'

const buttonStyle = ({ color }) => css`
  padding: 0.6em 1em;
  border-radius: 0.25em;
  transition: all .3s ease;
  background-color: #ff69b4;
  border: 1px solid #ff69b4;
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

      background-color: #dc4b93;
      border-color: #dc4b93;
    }

    :hover {
      ::after {
        content: 'hover';
      }

      background-color: #ff82c0;
      border-color: #ff82c0;
    }
  }
`
const Button = styled('button')`
  ${buttonStyle};
  ${dynamicMargin};
`

export default Button
