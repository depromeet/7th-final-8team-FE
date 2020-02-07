import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

class Cramp extends Component {
  render() {
    return (
      <>
        <CrampWrap>
          <CrampBlack />
          <CrampWhite />
        </CrampWrap>
        <CrampBlack />
        <CrampWhite />
      </>
    )
  }
}

const CrampBlack = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid black;
  border-bottom: 5px solid transparent;
`

const CrampWhite = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid white;
  border-bottom: 5px solid transparent;
  position: relative;
  right: 3px;
`

const CrampWrap = styled.div`
  display: flex;
  position: relative;
  left: 3px;
`

export default Cramp;
