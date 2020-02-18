import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
  width: 100%;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
  padding:20px;
  margin:20px auto;
  box-sizing: border-box;
  width:360px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.55px;
  color:#5f5f5f;
`;
function DefaultCard({msg}) {
  return (
    <DivCard>
      {msg}
    </DivCard>
  )
}

export default DefaultCard;