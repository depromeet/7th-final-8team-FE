import React from 'react';
import styled from 'styled-components';

const DivImageItem = styled.div`
  width:420px;
  height:420px;
  float:left;
  background: url(${props => props.url ? props.url : "https://picsum.photos/420/420"});
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
  const imgSlider = imgUrlList.map(url=><DivImageItem url={url}/>);
  return (
    <>
      {imgSlider}
    </>
  )
}

export default ImageSlider;