import React, { Fragment } from 'react';
import styled from 'styled-components';

function Categories({ handleTouristAttraction, handleRestaurant, handleCafe, handleAllList, 
  isSelectedTouristAttraction, isSelectedRestaurant, isSelectedCafe, isSelectedAllList}) {
	return (
    <Wrapper>
      <Category isSelected={isSelectedAllList} onClick={handleAllList}>전체</Category>
      <Category isSelected={isSelectedTouristAttraction} onClick={handleTouristAttraction}>관광</Category>
      <Category isSelected={isSelectedRestaurant} onClick={handleRestaurant}>맛집</Category>
      <Category isSelected={isSelectedCafe} onClick={handleCafe}>카페</Category>
    </Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 82px;
  box-sizing: border-box;
  padding: 22px;
`

const Category = styled.div`
  margin-right: 36px;
  cursor: pointer;
  height: 25px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: ${props => props.isSelected ? "#333333" : "#bdbdbd;"};
  border-bottom: ${props => props.isSelected ? "2px solid #333333" : ""};
`

export default Categories;
