import React, { Fragment, Component } from 'react';
import RecommendedPlaceContainer from 'containers/RecommendedPlaceContainer';
import styled from 'styled-components';
import logo from 'images/logo.gif';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickedFoldBtn: false, 
    }
  }

  handleFoldBtn = () => {
    this.setState({ isClickedFoldBtn: true });
  }

  handleMoreBtn = () => {
    this.setState({ isClickedFoldBtn: false });
  }

  render() {
    return (
      <Wrapper isFolded={this.state.isClickedFoldBtn}>
        <Wrap>
          <Logo />
          <FoldButton onClick={this.handleFoldBtn}>{"<<"}</FoldButton>
        </Wrap>
        {this.state.isClickedFoldBtn && <MoreButton onClick={this.handleMoreBtn}>{">>"}</MoreButton>}
        <RecommendedPlaceContainer />
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  position: relative;
  padding-top: 20px;
  left: ${props => props.isFolded ? "-400px" : ""};
  box-sizing: border-box;
`
const Wrap = styled.div`
  width: 360px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Logo = styled.div`
  width: 108px;
  height: 28px;
  background-image: url(${logo});
  background-size: cover;
`

const FoldButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
`

const MoreButton = styled.div`
  position: relative;
  left: 405px;
  cursor: pointer;
`

export default SideBar;
