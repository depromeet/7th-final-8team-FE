import React from 'react';
import KakaoMap from '../components/KakaoMap';

const initialState = [
  {lat:33.450701, lng:126.570667},
  {lat:34.450701, lng:126.570667},
  {lat:35.450701, lng:126.570667}
]
function KakaoMapContainer() {
  return (
    <>
      <KakaoMap datas={initialState}/>
    </>
  )
}

export default KakaoMapContainer;