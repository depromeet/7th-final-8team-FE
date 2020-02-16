import React from 'react';
import Header from '../../containers/Header/Header'
import PlaceDetail from '../../containers/PlaceDetail/PlaceDetail';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

function Details() {
  return (
    <>
      <Header></Header>
      <ImageSlider />
      <PlaceDetail></PlaceDetail>
    </>
  );
}

export default Details;
