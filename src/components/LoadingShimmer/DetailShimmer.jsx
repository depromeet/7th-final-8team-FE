import React from 'react';
import {ArticlePlaceDetail, DivInfoTab, NavTabs} from '../DetailModal/DetailModal';
import styled from 'styled-components';

const DivText = styled.div`
  margin: 0 auto;
  background:#777;
  width:${(props)=>props.width};
  height:${(props)=>props.height};
  &+&{
    margin-top:15px
  }
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
`
const DivTextLeft = styled.div`
  margin:30px 0 30px 20px;
  background:#777;
  width:${(props)=>props.width};
  height:${(props)=>props.height};
  &+&{
    margin-top:15px
  }
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
function DetailShimmer() {
  return (
    <ArticlePlaceDetail>
      <DivInfoTab>
        <DivText width='10%' height='20px'/>
        <DivText width='20%' height='38px'/>
        <DivText width='40%' height='27px'/>
        <DivText width='30%' height='28px'/>
      </DivInfoTab>
      <NavTabs>
        <DivText width='50%' height='27px'/>
      </NavTabs>
      <section>
        <DivTextLeft width='20%' height='20px'/>
        <DivTextLeft width='50%' height='20px'/>
        <DivTextLeft width='15%' height='20px'/>
        <DivTextLeft width='30%' height='20px'/>
        <DivTextLeft width='10%' height='20px'/>
        <DivTextLeft width='25%' height='20px'/>
        <DivTextLeft width='10%' height='20px'/>
        <DivTextLeft width='50%' height='20px'/>
      </section>
    </ArticlePlaceDetail>

  )
}

export default DetailShimmer;