import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import logoNonoPlan from '../../assets/logoNonoPlan.gif';
import LoginModal from '../../components/LoginModal';

const HeaderContainer = styled.header`
  height:88px;
  max-width:1280px;
  display:flex;
  justify-content:space-around;
  margin: 0 auto;
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
const palette = {
  purple: '#764ef5',
	gray: '#496057',
	pink: '#f06595'
}
function Header() {
  return (
    <HeaderContainer>
        <ImgLogo src={logoNonoPlan} alt="Nonoplan 로고"/>
        <DivSearchInput>
          <InputText isLabel={false} size="default"
            style={{minWidth:"100px",maxWidth:"460px",width:"100%",margin:"0 auto"}}/>
        </DivSearchInput>
        
        {/* <ThemeProvider theme={{palette}}>
          <Button color="purple" style={{margin:"auto 0"}}>로그인</Button>
        </ThemeProvider> */}
        <LoginModal />
    </HeaderContainer>
  )
}

export default Header;