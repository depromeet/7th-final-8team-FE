import React, { Component, Fragment } from 'react';

class KakaoLogin extends Component {
  componentDidMount() {
    const APPKEY = `${process.env.REACT_APP_APP_KEY}`;
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
  render() {
    return (
      <Fragment>
        <a id="kakao-login-btn"></a>
        <a href="http://developers.kakao.com/logout"></a>
      </Fragment>
    );
  }
}

export default KakaoLogin;
