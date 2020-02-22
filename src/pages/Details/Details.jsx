import React, { createContext, useEffect } from 'react';
import Header from '../../containers/Header/Header'
import PlaceDetail from '../../containers/PlaceDetail/PlaceDetail';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { DataProvider } from '../../util/DataContext';
import { useParams } from 'react-router-dom';

export const locationIdContext = createContext(null);

function Details() {
  let { locationId } = useParams();
  console.log('locationId',locationId); return (
    <>
      <Header></Header>
      <DataProvider>
        <locationIdContext.Provider value={locationId}>
          <ImageSlider />
          <PlaceDetail></PlaceDetail>
        </locationIdContext.Provider>
      </DataProvider>
    </>
  );
}

export default Details;
