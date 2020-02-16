import React, { useRef } from 'react'
import styled, {css} from 'styled-components';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const DivContainer = styled.div`
  position:relative;
  width:100%;
  height:420px;
`;

const DivSlider = styled.div`
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
const ButtonArrow = styled.button`
  width:34px;
  height:34px;
  border-radius:100%;
  background:rgba(26, 26, 26, 0.22);
  border:0;
  position:absolute;
  top:198px;
  cursor: pointer;
  ${directionsStyles}
  &:focus, &:active{outline:none}
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
  let arrInit = [null,null,null,null,null];
  let sliderItems;
  if (datas.length < 5) {
    sliderItems = arrInit.map((item,idx)=>!datas[idx] ? datas[idx-datas.length] : datas[idx])
  } else {
    sliderItems = datas;
  }
  console.log('sliderItems',sliderItems)
  const handleOnDragStart = (e) => e.preventDefault()
  const imgSlider = sliderItems.map((item,idx)=><DivImageItem key={idx} onDragStart={handleOnDragStart} url={item}></DivImageItem>)
  const carousel = useRef();
    return (
      <DivContainer>
        <DivSlider>
          <AliceCarousel
            mouseTrackingEnabled
            items={imgSlider}
            responsive={ {0: { items: 5 }} }
            dotsDisabled={true}
            buttonsDisabled={true}
            ref={carousel}
          />
        <ButtonArrow direction="left" onClick={() => carousel.current.slidePrev()}/>
        <ButtonArrow direction="right" onClick={() => carousel.current.slideNext()}/>
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