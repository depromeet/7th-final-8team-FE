import React,{useEffect,useRef, useState} from 'react';
import styled from 'styled-components';

function KakaoMap({datas, centerLatLng}) {
	console.log(datas);
	const kakao = window.kakao;
	const kakaoMap = useRef();
	const [map,setMap] = useState(null);
	
	useEffect(()=>{
		// ...마운트시 실행할 함수
		// ...deps 값이 존재한다면 deps값이 설정, 변경될 때마다 실행할 함수
		// const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		
		// 지도를 생성할 때 필요한 기본 옵션 중 level
		const options = {
			 //지도의 레벨(확대, 축소 정도)}
			center: new kakao.maps.LatLng(centerLatLng.lat, centerLatLng.lng),
			level: 9
		}
		const initMap = new kakao.maps.Map(kakaoMap.current, options)
		setMap(initMap); //지도 생성 및 객체 리턴
		
	},[kakaoMap])
	useEffect(()=>{	
		// // 커스텀 마커 이미지를 사용합니다.
		// const imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
		// imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
		// imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		
		// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
		// const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		// markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

		datas.map(data=>{
			// 마커를 생성합니다.
			const markerPosition  = new kakao.maps.LatLng(data.lat,data.lng);
			// 마커가 지도 위에 표시되도록 설정합니다
			const marker = new kakao.maps.Marker({position: markerPosition})
			marker.setMap(map);
		})
	});
	
  return (
    <>
      <DivMap id="map" ref={kakaoMap}/>
    </>
  )
}
const DivMap = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	z-index: 0
`;

KakaoMap.defaultProps = {
	datas:[{ id: 1, lat: "37.546622", lng: "126.949685"}],
	centerLatLng: {lat: "37.546622", lng: "126.949685"},
}
export default KakaoMap;