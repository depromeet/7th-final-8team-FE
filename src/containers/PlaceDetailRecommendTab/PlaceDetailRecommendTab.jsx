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
    <div style={{padding:"40px 39px 40px 40px"}}>
    {cards}
    </div>
  )
}

PlaceDetailRecommendTab.defaultProps = {
  datas: [
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/421"] },
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/422"]  },
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/423"]  },
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/424"]  },
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/425"]  },
    { locationId:10, category:"ATTRACTIONS", name:"와인키키절벽", rating:"3.9", reviewCount:"7", km:"10", images:["https://picsum.photos/420/426"]  },
  ]
}
export default PlaceDetailRecommendTab;