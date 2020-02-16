import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import PlaceDetailInfoTab from '../PlaceDetailInfoTab/PlaceDetailInfoTab';
import DetailReviews from '../../components/DetailReviews';
import PlaceDetailRecommendTab from '../PlaceDetailRecommendTab/PlaceDetailRecommendTab';

const ArticlePlaceDetail = styled.article`
  align-items: center; 
  border-radius:20px;
  box-shadow: 0px 3px 5px rgba(196, 196, 196, 0.2), 0px 1px 18px rgba(34, 34, 34, 0.12), 0px 6px 10px rgba(196, 196, 196, 0.14);
  width:800px;
  margin: -60px auto 120px auto;
  /* 자식요소 DivInfoTab의 마진 붕괴(margin collapse)를 막기 위해 */
  /* 부모 요소인 ArticlePlaceDetail에 padding 삽입 */
  /* display:inline-block; */;
  padding-top:1px;
  background:#fff;
  position:relative;
  z-index:1
`;

const DivInfoTab = styled.div`
  text-align:center;
  line-height:42px;
  position:relative;
  /* 마진 붕괴 방지 위해 margin-top 부분에 1px 빠짐 */
  margin:39px 20px 40px 20px;

  span {
    /* 타입 */
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.55px;
    color: #764EF5;
  }
  h1{
    /* 이름 */
    font-weight: bold;
    font-size: 32px;
    letter-spacing: -0.55px;
    color: #191919;
  }
  div {
    /* 거리 */
    font-size: 18px;
    letter-spacing: -0.55px;
    color: #5F5F5F;
  }
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

const ButtonBookmark = styled.button`
  position:absolute;
  top:0;
  right:0;
  width:42px;
  height:42px;
  border:0;
  background:red;
`;

const NavTabs = styled.nav`
  ul{
    display:flex;
  }
  li {
    flex:1;
    flex-basis:0;
  }
  button {
    width:100%;
    height:51px;
    background:none;
    border:0;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.25px;
    cursor: pointer;
  }
  /* 클릭에 따른 focus, active 스타일만 이렇게 되어있는데 향후 tab 상태값에 따라서 밑줄 줘야함 */
  button:focus, button:active{
    background:none;
    border:0;
    outline:none;
    box-shadow:0 1px #191919;
  }
`;

const SectionTabBody = styled.section`
  padding:40px 39px 40px 40px;
`;

function PlaceDetail({type, name, rating, numberOfReviews, km,}) {
  const [tab, setTab] = useState('info') // info, review, recommend
  let tabBody;
  if (tab === 'info'){
    tabBody = (<PlaceDetailInfoTab/>);
  } else if (tab === 'review'){
    // review 탭
    tabBody = (<DetailReviews/>)
  } else {
    // recommend 탭
    tabBody = (<PlaceDetailRecommendTab/>)
  }
  const onClick=e=>{
    setTab(e.target.dataset.tab);
  }
  return (
    <ArticlePlaceDetail>
      <DivInfoTab>
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
      </DivInfoTab>
      <NavTabs>
        <ul>
          <li>
            {/* 정보 탭 버튼 */}
            <button data-tab="info" onClick={e=>onClick(e)}>정보</button>
          </li>
          <li>
            {/* 리뷰 탭 버튼 */}
            <button data-tab="review" onClick={e=>onClick(e)}>리뷰</button>
          </li>
          <li>
            {/* 추천 탭 버튼 */}
            <button data-tab="recommend" onClick={e=>onClick(e)}>추천</button>
          </li>
        </ul>
      </NavTabs>
      <SectionTabBody>
        {tabBody}
      </SectionTabBody>
    </ArticlePlaceDetail>
  )
};

PlaceDetail.defaultProps = {
  type:"관광",
  name:"와인키키절벽",
  rating:"3.9",
  numberOfReviews:"7",
  km:"10"
}

export default PlaceDetail;