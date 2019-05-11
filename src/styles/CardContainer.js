import styled from 'styled-components'

export const CardContainer = styled.div`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  border: 1px solid lightgray;
  background: white;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
  position: relative;
  text-align: center;
  
  &:hover {
    box-shadow: 0 0 0 5px lightgreen;
  }
`
