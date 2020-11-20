import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import PieChart from './PieChart'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: Lato;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
  background: #DCDCDC;
  height: 95vh;
  overflow: hidden;

  &:last-child {
    background: #efefef;
  }
`

const Character = (props) => {
  const [character, setCharacter] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/characters/${slug}`

    axios.get(url)
    .then( resp => {
      setCharacter(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Column>
            <Header
              attributes={character.data.attributes}
              />
          </Column>
          <Column>
            <PieChart
              received_kudos={character.included}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Character