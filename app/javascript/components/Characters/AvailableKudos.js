import React, { useState, useEffect } from 'react'
import KudoCircle from './KudoCircle'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const AvailableKudos = (props) => {
  const [availableKudos, setAvailableKudos] = useState([])

  useEffect( () => {
    axios.get('/api/v1/kudo_types/available.json')
    .then( resp => setAvailableKudos(resp.data) )
    .catch( resp => console.log(resp) )
  }, [])

  const kudos = availableKudos.map( item => {
    return (
      <KudoCircle
        key={item.name}
        attributes={item}
      />
    )
  })


  return (
    <Wrapper>
      <h2>Selos disponíveis</h2>
      {kudos}
    </Wrapper>
  )
}

export default AvailableKudos