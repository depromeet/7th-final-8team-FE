import React from 'react';
import SideBar from 'components/SideBar';
import Map from 'containers/KakaoMapContainer';
import LoginModal from 'components/LoginModal';
import { DataProvider } from '../../util/DataContext';

function Home() {
  return (
    <>
      <DataProvider>
        <SideBar/>
        {/* TODO: 환경변수에 키 설정 */}
        <Map />
      </DataProvider>
      <LoginModal isMainPage={true}/>
    </>
  );
}

export default Home;
