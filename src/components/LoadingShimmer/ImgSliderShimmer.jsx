import React from 'react';
import {DivContainer, DivSlider } from '../ImageSlider/ImageSlider'
import styled from 'styled-components';

const DivImageItemShimmer = styled.div`
  width:420px;
  height:420px;
  display:inline-block;
  background: #777;
  @keyframes fullView {
    100% {
      width: 100%;
    }
  }
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
function ImgSliderShimmer() {
  return (
    <DivContainer>
      <DivSlider>
        <DivImageItemShimmer/>
        <DivImageItemShimmer/>
        <DivImageItemShimmer/>
        <DivImageItemShimmer/>
        <DivImageItemShimmer/>
      </DivSlider>
    </DivContainer>
  )
}

export default ImgSliderShimmer;