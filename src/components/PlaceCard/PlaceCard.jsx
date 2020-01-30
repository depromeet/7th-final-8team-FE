import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.article`
  width:227px;
  height:268px;
  position:relative;
  h2 {
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
`;
const SpanLabel = styled.span`
  background:pink;
  display:block;
`;
const SpanRating = styled.span`
  background:red;
  display:inline-block;
  margin:32px 8px 0 0;
`;
const DivStars = styled.div`
  background:blue;
  display:inline-block;
  margin-left:16px;

`;
const SpanReviews = styled.span`
  background:gray;
  display:inline-block;
`;
const SpanDistance = styled.span`
  background:greenyellow;
  margin-top:6px
  display:block;
  line-height:20px
`;

function PlaceCard({ type, name, rating, numberOfReviews, picture, distance }) {
  return (
    <ArticleCard>
      <h2>{name}</h2>
      <DivPicture img={picture}></DivPicture>
      <SectionInfo>
        <SpanLabel>{type}</SpanLabel>
        <SpanRating>{rating}</SpanRating>
        <DivStars>별별별별별</DivStars>
        <SpanReviews>리뷰 {numberOfReviews} 건</SpanReviews>
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