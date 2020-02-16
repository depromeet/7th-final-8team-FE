import React, { useRef } from 'react'
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const DivContainer = styled.div`
  position:relative;
  height:420px;
  width:2100px;
  margin:0 auto;
`;

const DivImageItem = styled.div`
  width:420px;
  height:420px;
  display:inline-block;
  background: url(${props => !props.url ? "" : props.url});
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
  const imgSlider = sliderItems.map((item,idx)=><DivImageItem key={idx} onDragStart={handleOnDragStart} url={item}>{idx}</DivImageItem>)
  const carousel = useRef();
    return (
      <DivContainer>
        <AliceCarousel
          mouseTrackingEnabled
          items={imgSlider}
          responsive={ {0: { items: 5 }} }
          dotsDisabled={true}
          ref={carousel}
        />
        <button onClick={() => carousel.current.slidePrev()}>Prev button</button>
        <button onClick={() => carousel.current.slideNext()}>Next button</button>
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