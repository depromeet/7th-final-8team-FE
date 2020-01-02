import React, {useEffect} from 'react';



function KakaoMap() {
	useEffect(()=>{
		// ...마운트시 실행할 함수
		// ...deps 값이 존재한다면 deps값이 설정, 변경될 때마다 실행할 함수
		
		const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		const options = { //지도를 생성할 때 필요한 기본 옵션
			center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 3 //지도의 레벨(확대, 축소 정도)
		};
		
		const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	})
  return (
    <>
      <div id="map" style={{width:'500px',height:'400px'}}></div>
    </>
  )
}

export default KakaoMap;