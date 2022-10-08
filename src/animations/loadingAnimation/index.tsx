import React from 'react'
import Lottier, { LottieProps } from 'react-lottie-player'
import * as animationData from './loading-paperplane.json'

import styled from 'styled-components'


const Div = styled.div`
    height: 300px;
    width: 300px;
`

function AnimationLoading() {
  const defaultOptions: LottieProps = {
    loop: true,
    play: true,
    animationData: animationData,
  }
  return (
    <Div>
      <Lottier {...defaultOptions}  />
    </Div>
  )
}

export default AnimationLoading
