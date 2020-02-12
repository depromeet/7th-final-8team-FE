import React from 'react';
import RecommendedPlace from '../../components/RecommendedPlace';

const initialData = [
  {type:'관광', name:'관광1', rating:3.5, numberOfReviews:3, km:13, picture:'https://picsum.photos/200'},
  {type:'맛집', name:'맛집1', rating:3, numberOfReviews:145, km:11, picture:'https://picsum.photos/200'},
  {type:'카페', name:'카페2', rating:4, numberOfReviews:2, km:10, picture:'https://picsum.photos/200'},
  {type:'관광', name:'관광1', rating:3.2, numberOfReviews:0, km:2, picture:'https://picsum.photos/200'},
]

function PlaceDetailRecommendTab() {
  return (
    <>
      {
        initialData.map(placeData=><RecommendedPlace placeData={placeData} size="small"/>)
      }
    </>
  )
}

export default PlaceDetailRecommendTab;