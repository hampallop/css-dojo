import styled from 'react-emotion'

export const Input = styled('input')`
  padding: 0.5em 1em;
  border-radius: 0.25em;
  transition: border-color 0.3s ease;
  border: 1px solid rgba(0,0,0,0.1);
  outline: none;

  :valid {
    :hover {
      border-color: rgba(0,0,0,0.3);
    }
    :focus {
      border-color: rgba(0,0,0,0.7);
    }
  }

  :invalid {
    border-color: rgba(255,0,0,0.9);

    :hover {
      border-color: rgba(255,0,0,0.5);
    }
    :focus {
      border-color: rgba(0,0,0,0.7);
    }
  }

  ::placeholder {
    color: #999;
  }
`
