import React from 'react';
import Header from '../../containers/Header/Header'
import PlaceDetail1 from '../../containers/PlaceDetail/PlaceDetail1';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

function Details() {
  return (
    <>
      <Header></Header>
      <ImageSlider />
      <PlaceDetail1></PlaceDetail1>
    </>
  );
}

export default Details;
