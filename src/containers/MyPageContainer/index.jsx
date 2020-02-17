import React, { Component } from 'react';
import styled from 'styled-components';
import DetailModal from '../../components/DetailModal/DetailModal';
import DetailReviews from '../../components/DetailReviews';
import PlaceDetailRecommendTab from '../PlaceDetailRecommendTab/PlaceDetailRecommendTab';

class MyPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExistBookmark: true,
      isExistReview: true,
    }
  }
  render() {
    const placeInfo = 
      <Wrapper>
        <ProfilePicture />
        <UserName>노노플랜👻</UserName>
        <UserEmail>nonoplan@gmail.com</UserEmail>
      </Wrapper>
  
    const tabList = [
      {key:'bookmark',btnValue:'북마크'},
      {key:'review',btnValue:'리뷰'},
    ];
  
    const noContents = (firstRow, secondRow) => {
      return (
        <NoContentsWrapper>
          <NoContents>
            {firstRow}<br />{secondRow}
          </NoContents>
        </NoContentsWrapper>  
      )
    }

    const tabBodyList = [
      this.state.isExistBookmark  ? <PlaceDetailRecommendTab /> : noContents("북마크한 장소가 없습니다.", "마음에 드는 장소를 스크랩 해주세요."),
      this.state.isExistReview    ? <DetailReviews isMyPage={true} /> : noContents("작성한 리뷰가 없습니다.", "리뷰를 작성해주세요."),
    ]
  
    return (
      <>
        <HeaderBackgroundColor />
        <BackgroundColor />
        <DetailModealContainer>
          <DetailModal 
            infoHeader={placeInfo}
            tabList={tabList}
            tabBodyList={tabBodyList}
          />
        </DetailModealContainer>
      </>
    );
  }
}

const HeaderBackgroundColor = styled.div`
  width: 100vw;
  height: 88px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -998;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const NoContentsWrapper = styled.div`
  display: flex;
  min-height: 372px;
`

const UserName = styled.h1`
  width: 148px;
  height: 38px;
  margin: 0 auto;
`

const UserEmail = styled.div`
  width: 177px;
  height: 28px;
  margin: 0 auto;
`

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #efefef;
  margin: 0 auto;
  margin-bottom: 22px;
`

const BackgroundColor = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -999;
  background-color: #efefef;
  position: fixed;
  top: 0;
`

const DetailModealContainer = styled.div`
  position: relative;
  top: 110px;
`

const NoContents = styled.div`
  height: 100%;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #333333;
  margin: auto auto;
  text-align: center;
`

export default MyPageContainer;
