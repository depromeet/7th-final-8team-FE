import React, { useRef, useContext, useEffect } from 'react'
import styled, {css, ThemeProvider} from 'styled-components';
import { getLocation } from '../../util/DataContext';

import {locationIdContext} from '../../pages/Details/Details.jsx'
import {darken, lighten} from 'polished';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useDataState, useDataDispatch } from '../../util/DataContext';
import ImgSliderShimmer from '../LoadingShimmer/ImgSliderShimmer';

export const DivContainer = styled.div`
  position:relative;
  width:100%;
  height:420px;
`;

export const DivSlider = styled.div`
  position:absolute;
  top:0;
  left:calc((100% - 2100px) / 2);
  right:calc((100% - 2100px) / 2);
  bottom:0;
  width:2100px;
`;

const DivImageItem = styled.div`
  width:420px;
  height:420px;
  display:inline-block;
  background: url(${props => !props.url ? "" : props.url});
`;

const directions = {
  left: {left:'655px'},
  right:{right:'655px'}
}
const directionsStyles = css`
  /* 크기 */
  ${({ direction }) => css`
		left:${directions[direction].left};
		right:${directions[direction].right};
  `}
`;

// ---------
// 버튼 스타일
// ---------
const palette = {
	default: 'rgba(26, 26, 26, 0.22)',
}
const colorStyles = css`
	/* 색상 */
  ${({ theme, color }) => {
		let selected;
		// ThemeProvider를 쓰지 않거나 color에 임의의 색상값을 직접 넣는 경우 대비
		(theme.palette && theme.palette[color]) ? selected = theme.palette[color] : selected = color;
		return css`
			background: ${selected};
			&:hover {
				background:${lighten(0.2, selected)};
			};
			&:active {
				background:${darken(0.5, selected)};
			};
		`;
	}}
`;
const ButtonArrow = styled.button`
  width:34px;
  height:34px;
  border-radius:100%;
  border:0;
  position:absolute;
  top:198px;
  cursor: pointer;
  ${directionsStyles}
  &:focus, &:active{
    outline:none
  }
  ${colorStyles}
  &::after{
    content:'';
    width:8px;
    height:8px;
    display:inline-block;
    border:0;
    border-left:1px solid #fff;
    border-top:1px solid #fff;
    transform: ${props=> props.direction==="left" ? 'translateX(25%) rotate(-45deg) ' : 'translateX(-12%) rotate(135deg)'}
  }
`;

const ImageSlider = ({datas}) =>{
  const locationId = useContext(locationIdContext);
  console.log(locationId);

  const state = useDataState();
  const dispatch = useDataDispatch();
  const {loading, data:location, error} = state.location;
  const fetchData = () =>{
    getLocation(dispatch,locationId);
  }
  useEffect(_=>{getLocation(dispatch,locationId)},[])

  const carousel = useRef();

  let arrInit = [null,null,null,null,null];
  let sliderItems;
  console.log('location',location)
  // const datas = location.images;
  if (datas.length < 5) {
    sliderItems = arrInit.map((item,idx)=>!datas[idx] ? datas[idx-datas.length] : datas[idx])
  } else {
    sliderItems = datas;
  }
  console.log('sliderItems',sliderItems)
  const handleOnDragStart = (e) => e.preventDefault()
  
	if(loading) return <ImgSliderShimmer/>;
	if(error) return <div>에러가 발생했습니다.</div>;
	if(!location) return <button onClick={fetchData}>불러오기</button>;
  return (
    <DivContainer>
      <DivSlider>
        <AliceCarousel
          mouseTrackingEnabled
          items={
            ((location.images.length < 5)
              ? arrInit.map((item,idx,arr)=>location.images[idx%location.images.length])
              : location.images
            ).map((item,idx)=><DivImageItem key={idx} onDragStart={handleOnDragStart} url={item}></DivImageItem>)
          }
          responsive={ {0: { items: 5 }} }
          dotsDisabled={true}
          buttonsDisabled={true}
          ref={carousel}
        />
        <ThemeProvider theme={{palette}}>
          <ButtonArrow direction="left" color="default" onClick={() => carousel.current.slidePrev()}/>
          <ButtonArrow direction="right" color="default" onClick={() => carousel.current.slideNext()}/>
        </ThemeProvider>
      </DivSlider>
    </DivContainer>
  )
}

ImageSlider.defaultProps = {
  datas: [
    "https://picsum.photos/420/420",
    "https://picsum.photos/420/421",
    "https://picsum.photos/420/422",
    "https://picsum.photos/420/423",
    "https://picsum.photos/420/424",
    // "https://picsum.photos/420/420",
    // "https://picsum.photos/420/420",
    // "https://picsum.photos/420/420",
    // "https://picsum.photos/420/420",
  ]
};

export default ImageSlider;