import React, { Fragment } from 'react';
import styled from 'styled-components';

function Categories({ handleTouristAttraction, handleRestaurant, handleCafe}) {
	return (
    <Wrapper>
      <Category onClick={handleTouristAttraction}>관광지</Category>
      <Category onClick={handleRestaurant}>맛집</Category>
      <Category onClick={handleCafe}>카페</Category>
    </Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
`

const Category = styled.div`
  margin-right: 50px;
`

export default Categories;
