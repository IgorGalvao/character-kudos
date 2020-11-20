import React from 'react'
import Chart from "react-google-charts";
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 20px 20px 20px;
`

const PieChart = (props) => {
  return (
    <Wrapper>
      <h2>Selos recebidos:</h2>
      <div>Pie Chart will go here...</div>
    </Wrapper>
  )
}

export default PieChart