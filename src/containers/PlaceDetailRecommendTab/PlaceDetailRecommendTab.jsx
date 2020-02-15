import React from 'react';
import RecommendedPlace from '../../components/RecommendedPlace';

function PlaceDetailRecommendTab({datas}) {
  const cards = datas.map((data,idx)=>(<RecommendedPlace size="small" placeData={data} key={idx}/>))
  return (
    <>
    {cards}
    </>
  )
}

PlaceDetailRecommendTab.defaultProps = {
  datas: [
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10" },
  ]
}
export default PlaceDetailRecommendTab;