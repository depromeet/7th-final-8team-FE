import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RecommendedPlace from 'components/RecommendedPlace';
import Categories from 'components/Categories';

class RecommendedPlaceContainer extends Component {
  constructor(props) {
    super(props);
    
    this.myRef = React.createRef();
    
    // TODO: API call로 데이터 얻어야 함.
    this.state = {
      fakeRestaurantList : [
        {type: '자연명소', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
        {type: '이탈리안', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
        {type: '하나', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
        {type: '둘', name: '저런 곳', rating: 3.7, numberOfReviews: 4, picture:'#9b59b6'}, 
        {type: '셋', name: '그런 곳', rating: 3.5, numberOfReviews: 3, picture:'#34495e'}, 
      ] 
    } 
  }

  handleInfiniteScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    const clientHeight = this.myRef.current.clientHeight;
    const scrollHeight = this.myRef.current.scrollHeight;

    // 스크롤이 맨 아래에 도달한 경우
    if (scrollHeight === scrollTop + clientHeight) {
      // fakeRestaurantList 배열에 다음 데이터 추가
      const originalData = this.state.fakeRestaurantList.splice(0);
      originalData.push(
        {type: '무', name: '한', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
        {type: '스', name: '크', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
        {type: '롤', name: '로', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
        {type: '생', name: '성', rating: 3.7, numberOfReviews: 4, picture:'#9b59b6'}, 
        {type: '된', name: '데이터', rating: 3.5, numberOfReviews: 3, picture:'#34495e'}, 
      );
      this.setState({
        fakeRestaurantList: originalData
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Categories /> {/* View: 관굉지, 맛집, 카페 */}
        <RecommendedPlaces 
          onScroll={this.handleInfiniteScroll}
          ref={this.myRef}
        >
          {this.state.fakeRestaurantList.map((item, idx) => 
            <RecommendedPlace 
              type={item.type}
              name={item.name}
              rating={item.rating}
              numberOfReviews={item.numberOfReviews}
              
              // TODO: 색깔에서 이미지 주소로 수정
              picture={item.picture}
  
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
  height: 698px;
  overflow: scroll;
`