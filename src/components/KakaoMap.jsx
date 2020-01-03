import React, {useEffect} from 'react';

function KakaoMap({datas}) {
	useEffect(()=>{
		// ...마운트시 실행할 함수
		// ...deps 값이 존재한다면 deps값이 설정, 변경될 때마다 실행할 함수
		const kakao = window.kakao;
		const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		const options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 3 //지도의 레벨(확대, 축소 정도)
		};
		
		const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
		
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
      <div id="map" style={{width:'500px',height:'400px'}}></div>
    </>
  )
}

export default KakaoMap;