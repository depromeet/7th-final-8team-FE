import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class KakaoLogin extends Component {
  componentDidMount() {
    const APPKEY = `${process.env.REACT_APP_KAKAO_KEY}`;
    if (window.Kakao === undefined) {
      window.Kakao.init(APPKEY);
      // 카카오 로그인 버튼을 생성합니다.
      window.Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: function(authObj) {
          console.log(JSON.stringify(authObj));
          alert(JSON.stringify(authObj));
        },
        fail: function(err) {
          console.log(JSON.stringify(err));
          alert(JSON.stringify(err));
        }
      });
    }
  }
  render() {
    return (
      <Fragment>
        <A id="kakao-login-btn"></A>
        <LoginBtnViewWrapper>
          <Btn>카카오계정으로 로그인</Btn>
        </LoginBtnViewWrapper>
        <a href="http://developers.kakao.com/logout"></a>
      </Fragment>
    );
  }
}

const A = styled.a`
  opacity: 0;
  z-index: 2;
  position: relative;
  left: 20px;
`

const LoginBtnViewWrapper = styled.div`
  width: 256px;
  height: 52px;
  border-radius: 100px;
  box-shadow: 0 2px 4px 0 rgba(34, 34, 34, 0.2), 0 1px 10px 0 rgba(34, 34, 34, 0.12), 0 4px 5px 0 rgba(196, 196, 196, 0.14);
  background-color: #ffd338;
  display: flex;
  justify-content: center;
  position: relative;
  top: -55px;
  z-index: -1;
`

const Btn = styled.div`
  width: fit-content;
  height: fit-content;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: #191919;
  display: flex;
  margin: auto 0;
`

export default KakaoLogin;
