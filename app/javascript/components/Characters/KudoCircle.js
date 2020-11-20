import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  margin: 10px;
  position: relative;
`

const Circle = styled.div`
  height: 50px;
  width: 50px;
  line-height: 45px;
  border-radius: 50%;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `};
  }
`

const CountCircle = styled.div`
  background: #000;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
`

const KudoCircle = (props) => {
  return (
    <Wrapper>
      <Circle color={props.attributes.color}>
        {props.attributes.icon}
      </Circle>
      <CountCircle>
        {props.attributes.count}
      </CountCircle>
    </Wrapper>
  )
}

export default KudoCircle