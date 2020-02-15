import React from 'react';
import SideBar from '../../components/SideBar';
import Map from '../../containers/KakaoMapContainer';
import LoginModal from '../../components/LoginModal';

function Home() {
  return (
    <>
      <SideBar/>
      {/* TODO: 환경변수에 키 설정 */}
      <Map />
      <LoginModal />
    </>
  );
}

export default Home;
