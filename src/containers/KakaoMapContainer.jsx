import React, { useState, useContext } from 'react';
import KakaoMap from '../components/KakaoMap';
import { useDataState } from '../util/DataContext';
import { useEffect } from 'react';
import {CenterIdContext} from '../pages/Home/index';
function KakaoMapContainer({ defalutCenter, defaultMarkers }) {
  // Context API에서 검색한 데이터를 받아옴
  const state = useDataState();
  const {loading, data:locations, error} = state.locations;

  const [center, setCenter] = useState(defalutCenter);
  const [markers, setMarkers] = useState(defaultMarkers);
  // 현재 그냥 첫번째를 찍어주지만 향후 검색결과들의 중간쯤의 위치로 변경할 예정
  useEffect(_=>{setCenter((!locations ? defaultMarkers : locations.content.map(item=>{return {id:item.locationId, lat:item.latitude, lng:item.longitude }}))[0])},[locations, defaultMarkers])
  useEffect(_=>{setMarkers(!locations ? defaultMarkers : locations.content.map(item=>{return {id:item.locationId, lat:item.latitude, lng:item.longitude }}))},[locations,defaultMarkers])
  
  // RecommenedPlace를 클릭해 받아온 centerId 값이 있는지에 따라 KakaoMap 리렌더
  const clickedId = useContext(CenterIdContext).centerId;
  useEffect(_=>{(!clickedId) ? setCenter(defalutCenter) : setCenter(markers.filter(marker=>marker.id === clickedId)[0])},[markers,defalutCenter,clickedId])
  return (
    <>
      <KakaoMap datas={markers} centerLatLng={center}/>
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