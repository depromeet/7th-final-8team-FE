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
  const _center = !locations ? defalutCenter : {lat:locations.content[0].latitude, lng:locations.content[0].longitude}
  useEffect(_=>{setCenter(_center)},[locations])
  // 추천된 관광지를 선택한 화면(center:클릭한 관광지의 latlng. markers:BackAPI가 주는 리스트(변화없음), clickedId:클릭한 관광지의 id)
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