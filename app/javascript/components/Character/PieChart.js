import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from "react-google-charts";
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 20px 20px 20px;

  h2 {
    margin-top: 100px;
  }
`

const PieChart = (props) => {

  const [ReceivedKudos, setReceivedKudos] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get(`/api/v1/characters/${props.character_slug}/aggregate_received_kudos.json`)
    .then( resp => {
      setReceivedKudos(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return (
    <Wrapper>
      <h2>Selos recebidos:</h2>

      {
        loaded &&
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={ReceivedKudos}
          options={{
            is3D: true
          }}
          rootProps={{ 'data-testid': '2' }}
        />
    }
    </Wrapper>
  )
}

export default PieChart