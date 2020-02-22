import React from 'react';
import RecommendedPlaceContainer from '../../containers/RecommendedPlaceContainer';
import styled from 'styled-components';
import logo from '../../images/logo.gif';
import Cramp from '../Cramp';
// import SearchInput from '../../containers/SearchInput/SearchInput';
import AddressSearchInput from '../AddressSearchInput/AddressSearchInput';
import { useDataState, useDataDispatch, getLocations } from '../../util/DataContext';
import { useState } from 'react';

function SideBar(props) {
  const [isClickedFoldBtn, SetIsClickedFoldBtn] = useState(false)
  const handleFoldBtn = () => SetIsClickedFoldBtn(true)
  const handleMoreBtn = () => SetIsClickedFoldBtn(false)


  // 데이터 통신
  const state = useDataState();
  const dispatch = useDataDispatch();
  const {loading, data:locations, error} = state.locations;


  const onGetLocations = ({x,y}) =>{
    console.log(x,y)
    getLocations(dispatch,x,y)
  }

  return (
    <Wrapper isFolded={isClickedFoldBtn}>
      <Wrap>
        <Logo />
          <FoldBtn onClick={handleFoldBtn}>
            <Cramp />
          </FoldBtn>
      </Wrap>
      {isClickedFoldBtn && 
      <MoreBtn onClick={handleMoreBtn}>
        <Cramp />
      </MoreBtn>}
      {/* <SearchInput/> */}
      <AddressSearchInput onSearch={onGetLocations}/>
      <RecommendedPlaceContainer/>
    </Wrapper>
  )
}

// class SideBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isClickedFoldBtn: false,
//     }
//   }

//   handleFoldBtn = () => {
//     this.setState({ isClickedFoldBtn: true });
//   }

//   handleMoreBtn = () => {
//     this.setState({ isClickedFoldBtn: false });
//   }

//   render() {
//     return (
//       <Wrapper isFolded={this.state.isClickedFoldBtn}>
//         <Wrap>
//           <Logo />
//             <FoldBtn onClick={this.handleFoldBtn}>
//               <Cramp />
//             </FoldBtn>
//         </Wrap>
//         {this.state.isClickedFoldBtn && 
//         <MoreBtn onClick={this.handleMoreBtn}>
//           <Cramp />
//         </MoreBtn>}
//         {/* <SearchInput/> */}
//         <AddressSearchInput/>
//         <RecommendedPlaceContainer />
//       </Wrapper>
//     )
//   }
// }


const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  position: relative;
  padding-top: 20px;
  left: ${props => props.isFolded ? "-400px" : ""};
  box-sizing: border-box;
  background-color: white;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.22);
  z-index: 1;
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

const FoldBtn = styled.div`
  display: flex;
  height: fit-content;
  cursor: pointer;
`

const MoreBtn = styled.div`
  position: relative;
  left: 400px;
  bottom: 54px;
  padding-top: 22px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  transform: rotate(180deg);
  width: 24px;
  height: 52px;
  justify-content: center;
  background-color: #fefefe;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.22);
  border-radius: 2px 0 0 2px;
`

export default SideBar;
