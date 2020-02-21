import React, { useState } from 'react';
import KakaoMap from '../components/KakaoMap';
import { useDataState } from '../util/DataContext';
import { useEffect } from 'react';

function KakaoMapContainer({ clickedId, defalutCenter, defaultMarkers }) {
  // Context API에서 검색한 데이터를 받아옴
  const state = useDataState();
  const {loading, data:locations, error} = state.locations;

  const [center, setCenter] = useState(defalutCenter);
  const [markers, setMarkers] = useState(defaultMarkers);
  const _site = !locations ? defaultMarkers : locations.content.map(item=>{return {id:item.id, lat:item.latitude, lng:item.longitude }})
  // 현재 그냥 첫번째를 찍어주지만 향후 검색결과들의 중간쯤의 위치로 변경할 예정
  useEffect(_=>{setCenter(_site[0])},[locations])
  useEffect(_=>{setMarkers(_site)},[locations])
  if(!!clickedId) {
    const centerLatLng = markers.filter(marker=>marker.id === clickedId)[0];
    setCenter(centerLatLng);
    console.log('clickedId가 있을 때',center);
  }
  return (
    <>
      <KakaoMap datas={markers} centerLatLng={center}/>
      {/* <KakaoMap /> */}
    </>
  )
}
KakaoMapContainer.defaultProps = {
  defalutCenter: { lat:33.506676, lng:126.493211 }, // 제주공항(기본값)
  defaultMarkers: [ // 제주공항 근처 아무 3곳
    { id: 1, lat: "33.504550", lng: "126.501114",},
    { id: 2, lat: "33.505440", lng: "126.494536",},
    { id: 3, lat: "33.500328", lng: "126.496778",},
  ]
}

export default KakaoMapContainer;