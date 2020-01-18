import React, { Fragment } from 'react';
import SideBar from 'components/SideBar';
import Map from 'containers/KakaoMapContainer';

function Home() {
  return (
    <Fragment>
      <SideBar />
      {/* TODO: 환경변수에 키 설정 */}
      {/* <Map /> */}
    </Fragment>
  );
}

export default Home;
