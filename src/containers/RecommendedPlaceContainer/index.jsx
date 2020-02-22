import React, { useState } from 'react';
import styled from 'styled-components';
import RecommendedPlace from '../../components/RecommendedPlace';
import Categories from '../../components/Categories';
import DefaultCard from '../../components/DefaultCard/DefaultCard';

import { useDataState } from '../../util/DataContext';
import { useEffect,useRef } from 'react';

function RecommendedPlaceContainer (props) {
  const state = useDataState();
  const {loading, data:locations, error} = state.locations;
  const [locationList, setLocationList] = useState(locations);
  const [isSelectedTouristAttraction, setIsSelectedTouristAttraction] = useState(false);
  const [isSelectedRestaurant, setIsSelectedRestaurant] = useState(false);
  const [isSelectedCafe, setIsSelectedCafe] = useState(false);
  const [isSelectedAllList, setIsSelectedAllList] = useState(true);

  const myRef = useRef();
  // setLocationList(state.locations.data);
  // const dispatch = useDataDispatch();
  useEffect(_=>{setLocationList(locations)},[locations])

  // const handleInfiniteScroll = () => {
  //   const scrollTop = myRef.current.scrollTop;
  //   const clientHeight = myRef.current.clientHeight;
  //   const scrollHeight = myRef.current.scrollHeight;

  //   // 스크롤이 맨 아래에 도달한 경우
  //   if (scrollHeight === scrollTop + clientHeight) {
  //     // TODO: 전체, 관광지, 카페에도 무한스크롤 적용해야 함.
  //     // fakeRestaurantList 배열에 다음 데이터 추가
      
  //     const originalData = locationList.content.splice(0);
  //     originalData.push(
  //       {locationId: 4, name: "아오", description: "설명이다.", category: "ATTRACTIONS", subCategory: null, address: "제주특별자치도 서귀포시 중정로 22", latitude: 130, longitude: 210, phoneNumber: null, businessHours: null, detail: null, images: "https://img1.daumcdn.net/thumb/T680x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F6B250958205C498F8CEFBACD1B991C1A", rating: 4, reviewCount: 0, bookmarking: true}
  //     );
  //     setLocationList(originalData);
  //   }
  // }

  const handleAllList = () => {
    setIsSelectedTouristAttraction(false);
    setIsSelectedRestaurant(false);
    setIsSelectedCafe(false);
    setIsSelectedAllList(true);
  }
  const handleTouristAttraction = () => {
    setIsSelectedTouristAttraction(true);
    setIsSelectedRestaurant(false);
    setIsSelectedCafe(false);
    setIsSelectedAllList(false);
  }
  const handleRestaurant = () => {
    setIsSelectedTouristAttraction(false);
    setIsSelectedRestaurant(true);
    setIsSelectedCafe(false);
    setIsSelectedAllList(false);
  }
  const handleCafe = () => {
    setIsSelectedTouristAttraction(false);
    setIsSelectedRestaurant(false);
    setIsSelectedCafe(true);
    setIsSelectedAllList(false);
  }
  console.log('locationList', locationList)
  if(loading) return <div>로딩중</div>
  if(error) return <div>에러발생!</div>
  if(!locationList) return (
    <DefaultCard msg={"현재 노노플랜은 제주도 지역만을 서비스하고 있습니다. 이용에 참고 부탁드려요. ☺️"}/>
  )
  if (locationList) return (
    <>
      <Categories
        isSelectedTouristAttraction={isSelectedTouristAttraction}
        isSelectedRestaurant={isSelectedRestaurant}
        isSelectedCafe={isSelectedCafe}
        isSelectedAllList={isSelectedAllList}

        handleTouristAttraction={handleTouristAttraction}
        handleRestaurant={handleRestaurant}
        handleCafe={handleCafe}
        handleAllList={handleAllList}
      />
      <RecommendedPlaces 
        // onScroll={handleInfiniteScroll}
        ref={myRef}
        // originalHeight={scrollHeight}
      >
        {isSelectedAllList && 
        locationList.content.map((item, idx) => 
          <RecommendedPlace 
            placeData={item}
            size={"big"}
            // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
            key={idx}
        />)}
        {isSelectedTouristAttraction && 
        locationList.content.map((item, idx) => 
          <RecommendedPlace 
            placeData={item}
            size={"big"}
            // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
            key={idx}
        />)}
      </RecommendedPlaces>
    </>
  );
}

// class RecommendedPlaceContainer1 extends Component {
//   constructor(props) {
//     super(props);
    
//     this.myRef = React.createRef();
    
//     // TODO: API call로 데이터 얻어야 함.
//     this.state = {
//       fakeAllList : [
//         {type: '관광', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c', km: 10,}, 
//         {type: '관광', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#1abc9c', km: 10,}, 
//         {type: '관광', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#1abc9c', km: 10,}, 
//         {type: '맛집', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#2ecc71', km: 10,}, 
//         {type: '맛집', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71', km: 10,}, 
//         {type: '맛집', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#2ecc71', km: 10,}, 
//         {type: '카페', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#3498db', km: 10,}, 
//         {type: '카페', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#3498db', km: 10,}, 
//         {type: '카페', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#3498db', km: 10,}, 
//       ], 
//       fakeTouristAttractionList : [
//         {type: '관광', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
//         {type: '관광', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#1abc9c'}, 
//         {type: '관광', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#1abc9c'}, 
//       ],
//       fakeRestaurantList : [
//         {type: '맛집', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#2ecc71'}, 
//         {type: '맛집', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
//         {type: '맛집', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#2ecc71'}, 
//       ],
//       fakeCafeList : [
//         {type: '카페', name: '섭지코지', rating: 4.3, numberOfReviews: 7, picture:'#3498db'}, 
//         {type: '카페', name: '동백키친', rating: 4.1, numberOfReviews: 6, picture:'#3498db'}, 
//         {type: '카페', name: '이런 곳', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
//       ],
//       isSelectedTouristAttraction: false,
//       isSelectedRestaurant: false,
//       isSelectedCafe: false,
//       isSelectedAllList: true,
//     } 
//   }
  
//   componentDidMount() {
//     this.setState({ scrollHeight: this.myRef.current.clientHeight });
//   }

//   handleInfiniteScroll = () => {
//     const scrollTop = this.myRef.current.scrollTop;
//     const clientHeight = this.myRef.current.clientHeight;
//     const scrollHeight = this.myRef.current.scrollHeight;

//     // 스크롤이 맨 아래에 도달한 경우
//     if (scrollHeight === scrollTop + clientHeight) {
//       // TODO: 전체, 관광지, 카페에도 무한스크롤 적용해야 함.
//       // fakeRestaurantList 배열에 다음 데이터 추가
//       const originalData = this.state.fakeTouristAttractionList.splice(0);
//       originalData.push(
//         {type: '맛집', name: '라델리', rating: 4.3, numberOfReviews: 7, picture:'#1abc9c'}, 
//         {type: '관광', name: '돌바위', rating: 4.1, numberOfReviews: 6, picture:'#2ecc71'}, 
//         {type: '카페', name: '투썸', rating: 3.9, numberOfReviews: 5, picture:'#3498db'}, 
//       );
//       this.setState({ fakeTouristAttractionList: originalData });
//     }
//   }

//   handleAllList = () => {
//     this.setState({ isSelectedTouristAttraction: false });
//     this.setState({ isSelectedRestaurant: false });
//     this.setState({ isSelectedCafe: false });
//     this.setState({ isSelectedAllList: true });
//   }

//   handleTouristAttraction = () => {
//     this.setState({ isSelectedTouristAttraction: true });
//     this.setState({ isSelectedRestaurant: false });
//     this.setState({ isSelectedCafe: false });
//     this.setState({ isSelectedAllList: false });
//   }

//   handleRestaurant = () => {
//     this.setState({ isSelectedTouristAttraction: false });
//     this.setState({ isSelectedRestaurant: true });
//     this.setState({ isSelectedCafe: false });
//     this.setState({ isSelectedAllList: false });
//   }

//   handleCafe = () => {
//     this.setState({ isSelectedTouristAttraction: false });
//     this.setState({ isSelectedRestaurant: false });
//     this.setState({ isSelectedCafe: true });
//     this.setState({ isSelectedAllList: false });
//   }

//   render() {
//     return (
//       <Fragment>
//         <Categories
//           isSelectedTouristAttraction={this.state.isSelectedTouristAttraction}
//           isSelectedRestaurant={this.state.isSelectedRestaurant}
//           isSelectedCafe={this.state.isSelectedCafe}
//           isSelectedAllList={this.state.isSelectedAllList}

//           handleTouristAttraction={this.handleTouristAttraction}
//           handleRestaurant={this.handleRestaurant}
//           handleCafe={this.handleCafe}
//           handleAllList={this.handleAllList}
//         />
//         <RecommendedPlaces 
//           onScroll={this.handleInfiniteScroll}
//           ref={this.myRef}
//           originalHeight={this.state.scrollHeight}
//         >
//           {this.state.isSelectedAllList && 
//           this.state.locationList.map((item, idx) => 
//             <RecommendedPlace 
//               placeData={item}
//               size={"big"}

//               // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
//               key={idx}
//           />)}
//           {this.state.isSelectedTouristAttraction && 
//           this.state.fakeTouristAttractionList.map((item, idx) => 
//             <RecommendedPlace 
//               placeData={item}
//               size={"big"}
  
//               // TODO: 원래 키값에 인덱스 넣으면 안됨. 바꿔야함.
//               key={idx}
//           />)}
//         </RecommendedPlaces>
//       </Fragment>
//     )
//   }
// }

export default RecommendedPlaceContainer;

const RecommendedPlaces = styled.div`
  height: 100vh;
  height: ${props => `${props.originalHeight - 190}` + "px"};
  overflow: scroll;
  overflow-x: hidden;
`