import React, { Fragment } from 'react';
import styled from 'styled-components';

function Categories({ handleTouristAttraction, handleRestaurant, handleCafe, handleAllList, 
  isSelectedTouristAttraction, isSelectedRestaurant, isSelectedCafe, isSelectedAllList}) {
	return (
    <Wrapper>
      <Category isSelected={isSelectedAllList} onClick={handleAllList}>전체</Category>
      <Category isSelected={isSelectedTouristAttraction} onClick={handleTouristAttraction}>관광지</Category>
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
  margin-right: 50px;
  cursor: pointer;
  height: 25px;
  /* TODO: css 나오는대로 하단의 black, gray 수정 */
  color: ${props => props.isSelected ? "black" : "gray"};
  border-bottom: ${props => props.isSelected ? "1px solid black" : ""};
`

export default Categories;
