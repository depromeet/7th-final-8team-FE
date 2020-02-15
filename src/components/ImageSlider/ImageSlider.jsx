import React from 'react';
import styled from 'styled-components';

const LiImageItem = styled.li`
    width:420px;
  div {
    height:420px;
    background: url(${props => props.url ? props.url : "https://picsum.photos/420/420"});
  }
`;

const UlImageList = styled.ul`
  /* overflow:hidden; */
  height:420px;
  display: flex;
  flex-direction: column;
  justify-content:center;
`;

function ImageSlider() {
  // 사진 랜덤 제공 url
  // https://picsum.photos/420/420
  const imgUrlList = [
    "https://picsum.photos/420/420",
    "https://picsum.photos/420/420",
    "https://picsum.photos/420/420",
    "https://picsum.photos/420/420",
    "https://picsum.photos/420/420",
  ];
  const imgSlider = imgUrlList.map((url,idx)=><LiImageItem key={idx}><div></div></LiImageItem>);
  return (
    <UlImageList>
      {imgSlider}
    </UlImageList>
  )
}

export default ImageSlider;