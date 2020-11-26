import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Card = styled.div`
  padding: 20px 5px;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #fff;
`

const CharacterImage = styled.div`
  position: relative;
  height: 120px;
  width: 160px;
  margin-left: auto;
  margin-right: auto;

  img {
    height: 120px;
    width: 160px;
    border-radius: 4px;
    border: 1px solid #000;
    object-fit: cover;
  }
`

const SendKudoOverlay = styled.div`
  z-index: 1;
  height: 120px;
  width: 160px;
  border-radius: 4px;
  border: 1px solid #000;
  position: absolute;
  background: rgba(0, 0, 0, .7);
  top: 10px;
  opacity: 0;
  transition: all .3s ease;

  &:hover {
    top: 0;
    opacity: 1;
  }

  p {
    margin: 10px 0;
  }

  .small-text {
    color: #fff;
    font-size: 12px;
  }

  .character-name {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`

const Circle = styled.div`
  height: 40px;
  width: 40px;
  margin: 0 5px;
  line-height: 38px;
  display: inline-block;
  border-radius: 50%;
  transition: all .2s;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `};
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`

const LinkWrapper = styled.div`
  margin: 10px 0;
  height: 20px;

  a {
    color: #fff;
    background: #000;
    font-size: 12px;
    border-radius: 4px;
    padding: 5px 15px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const Character = (props) => {
  const [kudoTypes, setKudoTypes] = useState([])

  useEffect( () => {
    axios.get('/api/v1/kudo_types.json')
    .then( resp => setKudoTypes(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [kudoTypes.length])

  const kudo_circles = kudoTypes.map( item => {
    return (
      <Circle
        key={item.attributes.name}
        color={item.attributes.color}>
        {item.attributes.icon}
      </Circle>
    )
  })

  return (
    <Card>
      <CharacterImage>
        <img src={props.attributes.image_url} alt={props.attributes.name}></img>
        <SendKudoOverlay>
          <p className="small-text">Dê um kudo para</p>
          <p className="character-name">{props.attributes.name}</p>
          {kudo_circles}
        </SendKudoOverlay>
      </CharacterImage>
      <LinkWrapper>
        <Link to={`/characters/${props.attributes.slug}`}>Selos recebidos</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Character