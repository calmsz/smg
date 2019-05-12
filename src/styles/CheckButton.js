import styled from 'styled-components'

export const CheckButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em;
  padding: 0.25em;
  &::before {
    content: '▶';
  }
`
