import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import PieChart from './PieChart'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
  background: #DCDCDC;
  height: 100vh;
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
              attributes={character.data.received_kudos} // TODO: CHECK LATER!!
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Character