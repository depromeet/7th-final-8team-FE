import React from 'react';
import styled from 'styled-components';

const LiInfo = styled.li`
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    align-items: center;
    letter-spacing: -0.25px;
    height:42px;
    padding: 8px 0 7px 0;
    box-sizing:border-box;
  }
  div {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.55px;
    height:42px;
    padding: 7px 0;
    box-sizing:border-box;
  }
  & + & {margin-top:20px}
`;

function PlaceDetailInfoTab({address, tel, operationHour, info, facilities, url}) {
  // 반복이 너무 많은데 방법이 없나... props를 배열로 보내주면 딱 좋긴 한데... 서버에서 그렇게 보내줄지 의문이네...
  // 일단은 Object로 온다고 가정하고 제작
  return (
    <>
      <ul>
        { address &&
          <LiInfo>
            <h3>가는 길</h3>
            <div>{address}</div>
          </LiInfo>}
        { tel &&
          <LiInfo>
            <h3>전화번호</h3>
            <div>{tel}</div>
          </LiInfo>}
        { operationHour &&
          <LiInfo>
            <h3>영업시간</h3>
            <div>{operationHour}</div>
          </LiInfo>}
        { info &&
          <LiInfo>
            <h3>소개</h3>
            <div>{info}</div>
          </LiInfo>}
        { facilities &&
          <LiInfo>
            <h3>시설</h3>
            <div>{facilities}</div>
          </LiInfo>}
        { url &&
          <LiInfo>
            <h3>홈페이지</h3>
            <div>{url}</div>
          </LiInfo>}
      </ul>
      
    </>
  )
}
PlaceDetailInfoTab.defaultProps = {
  address:"제주특별자치도 서귀포시 특별자치도 태평로 436 KR",
  tel:"064-221-1245",
  operationHour:"월~금 09:00 ~ 18:00",
  info:"제주맛집, 활전복 해물탕, 활전복뚝배기, 전복죽, 조림, 구이전문, SBS방영 맛집<12.04.29> 아침식사 예약시 9시가능 *예약 필수입니다.",
  facilities:"주차가능",
  url:"www.rock.com"
}

export default PlaceDetailInfoTab;