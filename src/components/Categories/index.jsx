import React, { Fragment } from 'react';
import styled from 'styled-components';

function Categories() {
	return (
    <Wrapper>
      <Category>관광지</Category>
      <Category>맛집</Category>
      <Category>카페</Category>
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
