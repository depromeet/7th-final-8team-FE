import React, { Fragment, Component } from 'react';
import RecommendedPlaceContainer from 'containers/RecommendedPlaceContainer';
import styled from 'styled-components';

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
        <FoldButton onClick={this.handleFoldBtn}>{"<<"}</FoldButton>
        {this.state.isClickedFoldBtn && <MoreButton onClick={this.handleMoreBtn}>{">>"}</MoreButton>}
        <RecommendedPlaceContainer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 400px;
  height: fit-content;
  border: 1px solid black;
  position: relative;
  left: ${props => props.isFolded ? "-400px" : ""};
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
