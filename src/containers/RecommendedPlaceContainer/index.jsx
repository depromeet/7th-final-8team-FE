import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RecommendedPlace from '../../components/RecommendedPlace';
import Categories from '../../components/Categories';

class RecommendedPlaceContainer extends Component {
  constructor(props) {
    super(props);
    
    this.myRef = React.createRef();
    
    // TODO: API call로 데이터 얻어야 함.
    this.state = {
      fakeAllList : [
        {type: '관광', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c', km: 10,}, 
        {type: '관광', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#1abc9c', km: 10,}, 
        {type: '관광', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#1abc9c', km: 10,}, 
        {type: '맛집', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#2ecc71', km: 10,}, 
        {type: '맛집', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71', km: 10,}, 
        {type: '맛집', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#2ecc71', km: 10,}, 
        {type: '카페', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#3498db', km: 10,}, 
        {type: '카페', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#3498db', km: 10,}, 
        {type: '카페', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#3498db', km: 10,}, 
      ], 
      fakeTouristAttractionList : [
        {type: '관광', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
        {type: '관광', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#1abc9c'}, 
        {type: '관광', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#1abc9c'}, 
      ],
      fakeRestaurantList : [
        {type: '맛집', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#2ecc71'}, 
        {type: '맛집', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
        {type: '맛집', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#2ecc71'}, 
      ],
      fakeCafeList : [
        {type: '카페', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#3498db'}, 
        {type: '카페', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#3498db'}, 
        {type: '카페', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
      ],
      isSelectedTouristAttraction: false,
      isSelectedRestaurant: false,
      isSelectedCafe: false,
      isSelectedAllList: true,
    } 
  }
  
  componentDidMount() {
    this.setState({ scrollHeight: this.myRef.current.clientHeight });
  }

  handleInfiniteScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    const clientHeight = this.myRef.current.clientHeight;
    const scrollHeight = this.myRef.current.scrollHeight;

    // 스크롤이 맨 아래에 도달한 경우
    if (scrollHeight === scrollTop + clientHeight) {
      // TODO: 전체, 관광지, 카페에도 무한스크롤 적용해야 함.
      // fakeRestaurantList 배열에 다음 데이터 추가
      const originalData = this.state.fakeTouristAttractionList.splice(0);
      originalData.push(
        {type: '맛집', name: '라델리', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
        {type: '관광', name: '돌바위', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
        {type: '카페', name: '투썸', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
      );
      this.setState({ fakeTouristAttractionList: originalData });
    }
  }

  handleAllList = () => {
    this.setState({ isSelectedTouristAttraction: false });
    this.setState({ isSelectedRestaurant: false });
    this.setState({ isSelectedCafe: false });
    this.setState({ isSelectedAllList: true });
  }

  handleTouristAttraction = () => {
    this.setState({ isSelectedTouristAttraction: true });
    this.setState({ isSelectedRestaurant: false });
    this.setState({ isSelectedCafe: false });
    this.setState({ isSelectedAllList: false });
  }

  handleRestaurant = () => {
    this.setState({ isSelectedTouristAttraction: false });
    this.setState({ isSelectedRestaurant: true });
    this.setState({ isSelectedCafe: false });
    this.setState({ isSelectedAllList: false });
  }

  handleCafe = () => {
    this.setState({ isSelectedTouristAttraction: false });
    this.setState({ isSelectedRestaurant: false });
    this.setState({ isSelectedCafe: true });
    this.setState({ isSelectedAllList: false });
  }

  render() {
    return (
      <Fragment>
        <Categories
          isSelectedTouristAttraction={this.state.isSelectedTouristAttraction}
          isSelectedRestaurant={this.state.isSelectedRestaurant}
          isSelectedCafe={this.state.isSelectedCafe}
          isSelectedAllList={this.state.isSelectedAllList}

          handleTouristAttraction={this.handleTouristAttraction}
          handleRestaurant={this.handleRestaurant}
          handleCafe={this.handleCafe}
          handleAllList={this.handleAllList}
        />
        <RecommendedPlaces 
          onScroll={this.handleInfiniteScroll}
          ref={this.myRef}
          originalHeight={this.state.scrollHeight}
        >
          {this.state.isSelectedAllList && 
          this.state.fakeAllList.map((item, idx) => 
            <RecommendedPlace 
              placeData={item}
              size={"big"}

              // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
              key={idx}
          />)}
          {this.state.isSelectedTouristAttraction && 
          this.state.fakeTouristAttractionList.map((item, idx) => 
            <RecommendedPlace 
              placeData={item}
              size={"big"}
  
              // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
              key={idx}
          />)}
        </RecommendedPlaces>
      </Fragment>
    )
  }
}

export default RecommendedPlaceContainer;

const RecommendedPlaces = styled.div`
  height: 100vh;
  height: ${props => `${props.originalHeight - 142}` + "px"};
  overflow: scroll;
  overflow-x: hidden;
`