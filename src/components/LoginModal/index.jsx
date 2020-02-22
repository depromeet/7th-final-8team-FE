import React, { Component } from 'react';
import styled from 'styled-components';
import KakaoLogin from '../../components/KakaoLogin';
import IsLoggedInUserInfo from '../IsLoggedInUserInfo';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickedLoginBtn: false,
      isAuthorization: false,
      isClickedUserInfo: false,
    }
  }

  handleLogin = () => {
    this.setState({ isClickedLoginBtn: true });
  }

  handleLoginToFalse = () => {
    this.setState({ isClickedLoginBtn: false });
  }

  handleUserInfo = () => {
    this.setState({ isClickedUserInfo: true });
  }

  handleUserInfoToFalse = () => {
    this.setState({ isClickedUserInfo: false });
  }

  login = () => {
    this.setState({ isAuthorization: true});
  }

  logout = () => {
    this.setState({ isAuthorization: false });
  }

  loginBtn = () => {
    return (
      <LoginContainer isUsedMainPage={this.props.isMainPage} onClick={this.handleLogin}>
        <Login>로그인</Login>
      </LoginContainer>
    )
  }

  userInfo = () => {
    return (
      <UserProfilePictureContainer isMainPage={this.props.isMainPage}>
        <ProfilePicture />
        {this.state.isClickedUserInfo ?
        <UserInfoCloseBtn onClick={this.handleUserInfoToFalse} /> 
        : 
        <UserInfoOpenBtn onClick={this.handleUserInfo} />}
      </UserProfilePictureContainer>
    )
  }
  
  render() {
    return (
      <Wrapper>
        {this.state.isAuthorization ? this.userInfo() : this.loginBtn()}
        <ModalContainer isClickedLoginBtn={this.state.isClickedLoginBtn}>
          <Modal>
            <CloseBtn onClick={this.handleLoginToFalse}>x</CloseBtn>
            <Text>로그인</Text>
            <KakaoLoginContainer>
              <KakaoLogin />
            </KakaoLoginContainer>
          </Modal>
        </ModalContainer>
        {this.state.isAuthorization && this.state.isClickedUserInfo && 
        <IsLoggedInUserInfo logout={this.logout} />}
      </Wrapper>
    );
  }
}

const UserProfilePictureContainer = styled.div`
  width: 44px;
  height: 30px;
  position: ${props => props.isMainPage ? "absolute" : ""};
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
`

const ProfilePicture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #efefef;
`

const UserInfoOpenBtn = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #111111;
  margin: auto 0;
  cursor: pointer;
`

const UserInfoCloseBtn = styled(UserInfoOpenBtn)`
  transform: rotate(180deg);
`

const Wrapper = styled.div`
  margin: auto 0;
`

const LoginContainer = styled.div`
  position: ${props => props.isUsedMainPage ? "absolute" : ""};
  top: 20px;
  right: 20px;
  width: 70px;
  height: 36px;
  border-radius: 36px;
  background-color: rgb(118, 78, 245);
  display: flex;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
`

const Login = styled.div`
  margin: auto 0;
  color: white;
`

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.16);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  display: ${props => props.isClickedLoginBtn ? "flex" : "none"};
`

const Modal = styled.div`
  width: 360px;
  height: 346px;
  margin: auto 0;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 65px 52px 112px 52px;
  z-index: 1;
`

const CloseBtn = styled.span`
  width: fit-content;
  position: relative;
  top: -50px;
  right: -280px;
  color: rgb(211, 211, 211);
  cursor: pointer;
`

const Text = styled.div`
  font-size: 32px;
  margin: 0 auto;
`

const KakaoLoginContainer = styled.div`
  margin: 0 auto;
  position: relative;
  top: 60px;
`

export default LoginModal;
