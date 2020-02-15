import React, { Component } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'components/KakaoLogin';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickedLoginBtn: false,
    }
  }

  handleLogin = () => {
    this.setState({ isClickedLoginBtn: true });
  }

  handleLoginToFalse = () => {
    this.setState({ isClickedLoginBtn: false });
  }
  
  render() {
    return (
      <Wrapper>
        <LoginContainer isUsedMainPage={this.props.isMainPage}>
          <Login onClick={this.handleLogin}>로그인</Login>
        </LoginContainer>
        <ModalContainer isClickedLoginBtn={this.state.isClickedLoginBtn}>
          <Modal>
            <CloseBtn onClick={this.handleLoginToFalse}>x</CloseBtn>
            <Text>로그인</Text>
            <KakaoLoginContainer>
              <KakaoLogin />
            </KakaoLoginContainer>
          </Modal>
        </ModalContainer>
      </Wrapper>
    );
  }
}

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
