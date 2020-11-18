import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`
const CharacterImage = styled.div`
  img {
    height: 120px;
    width: 160px;
    border-radius: 4px;
    border: 1px solid #000;
    object-fit: cover;
  }
`
const CharacterName = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Character = (props) => {
  return (
    <Card>
      <CharacterImage>
        <img src={props.attributes.image_url} alt={props.attributes.name}></img>
      </CharacterImage>
      <CharacterName>
        {props.attributes.name}
      </CharacterName>
      <LinkWrapper>
        <Link to={`/characters/${props.attributes.slug}`}>Selos obtidos</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Character