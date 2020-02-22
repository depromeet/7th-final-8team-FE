import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import DetailModal from '../../components/DetailModal/DetailModal';
import PlaceDetailInfoTab from '../PlaceDetailInfoTab/PlaceDetailInfoTab';
import DetailReviews from '../../components/DetailReviews';
import PlaceDetailRecommendTab from '../PlaceDetailRecommendTab/PlaceDetailRecommendTab';
import { locationIdContext } from '../../pages/Details/Details';
import { useDataState, useDataDispatch, getLocation } from '../../util/DataContext';

const ButtonBookmark = styled.button`
  position:absolute;
  top:0;
  right:0;
  width:42px;
  height:42px;
  border:0;
  background:red;
`;
const DivStarReviewCnt = styled.div`
  margin: 0 auto;
  div {
    display:inline-block;
    position:relative;
    padding:0 10px;
  }
  div + div:before {
    /* 짧은 border를 만들기 위한 가상요소 */
    content: "";
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translateY(40%);
    height: 17px;
    width: 1px;  /* or 100px */
    border-left:1px solid #191919;
  }
  span {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.25px;
  }
`;
const PlaceInfoHeader =({type, name, rating, numberOfReviews, km,})=> (<>
  <span>{type}</span>
  <h1>{name}</h1>
  <DivStarReviewCnt>
    {/* 별점 */}
    <div>
      <span>{rating}</span>
    </div>
    {/* 리뷰수 */}
    <div>리뷰 <span>{numberOfReviews}</span>개</div>
  </DivStarReviewCnt>
  <div>내 위치에서 {km}km</div>
  <ButtonBookmark />
</>);

function PlaceDetail({type, name, rating, numberOfReviews, km,}) {
  const locationId = useContext(locationIdContext);
  console.log(locationId);

  const state = useDataState();
  const dispatch = useDataDispatch();
  const {loading, data:location, error} = state.location;
  useEffect(_=>{getLocation(dispatch,locationId)},[])

	if(loading) return <div>로딩중...</div>;
	if(error) return <div>에러가 발생했습니다.</div>;
	if(!location) return <></>;
  // const tabList= [{key:'info',btnValue:'정보'}, {key:'review',btnValue:'리뷰'},{key:'recommend',btnValue:'추천'}]  
  // const tabBodyList= [<PlaceDetailInfoTab/>, <DetailReviews/>, <PlaceDetailRecommendTab/>]
  // const placeInfo = <PlaceInfoHeader type={type} name={name} rating={rating} numberOfReviews={numberOfReviews} km={km}/>
  console.log(location)
  return (
    <DetailModal
      infoHeader={
        <PlaceInfoHeader type={location.category} name={location.name} rating={location.rating} numberOfReviews={location.reviewCount} km={5}/>
      }
      tabList={[{key:'info',btnValue:'정보'}, {key:'review',btnValue:'리뷰'},{key:'recommend',btnValue:'추천'}]  }
      tabBodyList={
        [<PlaceDetailInfoTab
          address={location.address}
          tel={location.phoneNumber}
          operationHour={location.businessHours}
          info={location.description}
          facilities={location.detail}
          url={undefined}
        />, <DetailReviews/>, <PlaceDetailRecommendTab/>]
      }
    />
  )
}

PlaceDetail.defaultProps = {
  type:"관광",
  name:"와인키키절벽",
  rating:"3.9",
  numberOfReviews:"7",
  km:"10"
}

export default PlaceDetail;