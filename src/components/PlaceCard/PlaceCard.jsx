import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.article`
  width:227px;
  height:268px;
  position:relative;
  box-shadow: 4px 4px 12px rgba(34,34,34,0.14);
  h2 {
    font-family:'SpoqaHanSans-Bold';
    font-size:18px;
    position:absolute;
    bottom:72px;
    margin-left:20px;
  }
`;
const DivPicture = styled.div`
  width:100%;
  height:130px;
  float:left;
  background-image: url(${props => props.img});
`;
const SectionInfo = styled.section`
  float:left;
  padding: 20px;
  width:100%;
  box-sizing: border-box;
`;
const SpanLabel = styled.span`
  /* background:pink; */
  display:block;
  color:rgb(36, 216, 176);
  font-size:14px;
  line-height:20px;
`;
const SpanRating = styled.span`
  /* background:red; */
  display:inline-block;
  margin:32px 8px 0 0;
  line-height:20px;
`;
const DivStars = styled.div`
  /* background:blue; */
  display:inline-block;
  max-width:88px;
  font-size:12px;
  line-height:20px;
`;
const SpanReviews = styled.span`
  /* background:gray; */
  display:inline-block;
  font-size:12px;
`;
const SpanDistance = styled.span`
  /* background:greenyellow; */
  font-size:12px;
  margin-top:6px;
  display:block;
  line-height:20px;
`;

function PlaceCard({ type, name, rating, numberOfReviews, picture, distance }) {
  return (
    <ArticleCard>
      <h2>{name}</h2>
      <DivPicture img={picture}></DivPicture>
      <SectionInfo>
        <SpanLabel>{type}</SpanLabel>
        <SpanRating>{rating}</SpanRating>
        <DivStars>⭐⭐⭐⭐⭐</DivStars>
        <SpanReviews>리뷰{numberOfReviews}건</SpanReviews>
        <SpanDistance>내 위치에서 {distance}</SpanDistance>
      </SectionInfo>
    </ArticleCard>
  )
}

PlaceCard.defaultProps = {
  type:"관광", name:"관광관광", rating:"8.2", numberOfReviews:"7",
  picture:"https://picsum.photos/227/130",
  distance:'10km',
}
export default PlaceCard;