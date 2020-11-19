import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;

  img {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #000;    
  }
`

const Header = (props) => {
  const {name, image_url} = props.attributes

  return (
    <Wrapper>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
    </Wrapper>
  )
}

export default Header