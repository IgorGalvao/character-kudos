import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from "react-google-charts";
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 20px 20px 20px;
`

const PieChart = (props) => {

  const [TypeList, setTypeList] = useState([])

  useEffect(() => {
    axios.get('/api/v1/kudo_types.json')
    .then( resp => {
      setTypeList(resp.data)
      // console.log(resp.data)
    })
    .catch( resp => console.log(resp) )

    // const chartData = [];
    // chartData.push(['Kudo', 'Quantidade']);
  
    // const countBytype = (item) => {
    //   debugger
    // }
  
    // const compileData = (props) => {
    //   props.received_kudos.forEach(countBytype);
    //   return;
    // }
    // compileData(props);  
  }, [])

  return (
    <Wrapper>
      <h2>Selos recebidos:</h2>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2]
        ]}
        options={{
          is3D: true
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </Wrapper>
  )
}

export default PieChart