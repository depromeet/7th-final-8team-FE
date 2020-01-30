import React from 'react';
import {styled} from 'styled-components';

const ArticleCard = styled.article`
`;
const DivPicture = styled.div`
`;
const SpanLabel = styled.span`
`;
const SpanRating = styled.span`
`;
const DivStars = styled.div`
`;
const SpanReviews = styled.span`
`;
const SpanDistance = styled.span`
`;

function PlaceCard({ type, name, rating, numberOfReviews, picture, distance }) {
  return (
    <ArticleCard>
      <h2>{name}</h2>
      <DivPicture></DivPicture>
      <SpanLabel>{type}</SpanLabel>
      <SpanRating>{rating}</SpanRating>
      <DivStars></DivStars>
      <SpanReviews>리뷰 {numberOfReviews} 건</SpanReviews>
      <SpanDistance>내 위치에서 {distance}</SpanDistance>
    </ArticleCard>
  )
}

PlaceCard.defaultProps = {
  type:"관광", name:"관광관광", rating:"8.2", numberOfReviews:"7",
  picture:"https://picsum.photos/seed/picsum/200/300",
  distance:'10km',
}
export default PlaceCard;