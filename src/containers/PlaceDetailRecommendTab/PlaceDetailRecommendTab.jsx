import React from 'react';
import RecommendedPlace from '../../components/RecommendedPlace';

function PlaceDetailRecommendTab({datas}) {
  const cards = datas.map((data,idx)=>{
    let marginObj;
    if(idx%3 === 2) {marginObj = {marginRight:'0'}}
    else if(idx%3 === 0) {marginObj = {marginLeft:'0'}}
    return <RecommendedPlace size="small" placeData={data} key={idx} style={marginObj}/>
  })
  return (
    <>
    {cards}
    </>
  )
}

PlaceDetailRecommendTab.defaultProps = {
  datas: [
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red" },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red"  },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red"  },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red"  },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red"  },
    { type:"관광", name:"와인키키절벽", rating:"3.9", numberOfReviews:"7", km:"10", picture:"red"  },
  ]
}
export default PlaceDetailRecommendTab;