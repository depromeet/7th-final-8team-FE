import React from 'react';
import KakaoMap from '../components/KakaoMap';

function KakaoMapContainer({ clickedId, center, markers }) {
  // 추천된 관광지를 선택한 화면(center:클릭한 관광지의 latlng. markers:BackAPI가 주는 리스트(변화없음), clickedId:클릭한 관광지의 id)
  if(!!clickedId) {
    const centerLatLng = markers.filter(marker=>marker.id === clickedId)[0];
    center = centerLatLng;
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
  center: { lat:33.506676, lng:126.493211 }, // 제주공항(기본값)
  markers: [ // 제주공항 근처 아무 3곳
    { id: 1, lat: "33.504550", lng: "126.501114",},
    { id: 2, lat: "33.505440", lng: "126.494536",},
    { id: 3, lat: "33.500328", lng: "126.496778",},
  ]
}

export default KakaoMapContainer;