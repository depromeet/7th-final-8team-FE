import React from 'react';
import styled from 'styled-components';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import logoNonoPlan from '../../assets/logoNonoPlan.gif';

const HeaderContainer = styled.header`
  height:88px;
  display:flex;
  justify-content:space-around;
`;
const ImgLogo = styled.img`
  height: 24px;
  margin:auto 0;
`;
const DivSearchInput = styled.div`
  left:0;
  right:0;
  display:inline-block;
  width:100%;
  margin:auto 0;
  vertical-align:middle;
`;
function Header() {
  return (
    <HeaderContainer>
        <ImgLogo src={logoNonoPlan} alt="Nonoplan 로고"/>
        <DivSearchInput>
          <InputText isLabel={false} style={{minWidth:"100px",maxWidth:"750px",width:"100%",
    margin:"0 auto"}}/>
        </DivSearchInput>
        <Button color="#764ef5" style={{margin:"auto 0"}}>로그인</Button>
    </HeaderContainer>
  )
}

export default Header;