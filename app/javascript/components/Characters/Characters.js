import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Character from './Character'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`
const KudoBox = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect( () => {
    axios.get('/api/v1/characters.json')
    .then( resp => setCharacters(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [characters.length])


  const grid = characters.map( item => {
    return (
      <Character
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Dê um kudo!</h1>
        <KudoBox>Selos disponíveis</KudoBox>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Characters