import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class IsLoggedInUserInfo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    // const activeStyle = {
    //   margin: "auto 0",
    //   fontFamily: "SpoqaHanSans",
    //   fontSize: "14px",
    //   fontWeight: "bold",
    //   letterSpacing: "-0.55px",
    //   color: "#5f5f5f",
    // };
    return (
      <Wrapper>
        <UserInfoWrapper>
          <UserInfo>
            <Picture />
            <TextWrapper>
              <Logout>
                <LogoutText onClick={this.props.logout}>로그아웃</LogoutText>
              </Logout>
              <UserName>노노플랜👻</UserName>
              <UserEmail>nonoplan@gamil.com</UserEmail>
            </TextWrapper>
          </UserInfo>
        </UserInfoWrapper>
        <BookMarkAndReview>
          <BookMarkBtnWrapper>
            <Link to="/mypage">스크랩</Link>
          </BookMarkBtnWrapper>
          <ReivewBtnWrapper>
            <Link to="/mypage">리뷰</Link>
          </ReivewBtnWrapper>
        </BookMarkAndReview>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 316px;
  height: 165px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(34, 34, 34, 0.2), 0 1px 10px 0 rgba(34, 34, 34, 0.12), 0 4px 5px 0 rgba(196, 196, 196, 0.14);
  position: absolute;
  top: 62px;
  right: 20px;
  z-index: 999;
`

const UserInfoWrapper = styled.div`
  width: 316px;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
`

const UserInfo = styled.div`
  display: flex;
`

const Picture = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #efefef;
`

const TextWrapper = styled.div`
  width: 196px;
  height: 80px;
  padding-left: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Logout = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const LogoutText = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #999999;
  width: fit-content;
  cursor: pointer;
`

const UserName = styled.div`
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #000000;
`

const UserEmail = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #5f5f5f;
`

const BookMarkAndReview = styled.div`
  width: 316px;
  height: 45px;
  display: flex;
  cursor: pointer;
`

const BookMarkBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 158px;
  height: 45px;
  border-top: 1px solid #efefef;
`

const ReivewBtnWrapper = styled(BookMarkBtnWrapper)`
  border-left: 1px solid #efefef;
`;

const Button = styled.div`
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: #5f5f5f;
`

export default IsLoggedInUserInfo;
