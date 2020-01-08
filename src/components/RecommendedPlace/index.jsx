import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

function RecommendedPlace({ type, name, rating, numberOfReviews, picture }) {
	return (
    <Wrapper>
      <Wrap>
        <Type>{type}</Type>
        <Name>{name}</Name>
        <Row>
          <NumberRating>{rating}</NumberRating>
          <StarRating />
          <NumberOfReviews>리뷰 {numberOfReviews}건</NumberOfReviews>
          <ViewDetails>상세보기</ViewDetails>
        </Row>
      </Wrap>
      <Picture color={picture}/>
    </Wrapper>
	)
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 380px;
  height: 360px;
  display: flex;
  flex-direction: column;
`

const Wrap = styled.div`
  padding: 27px;
`

const Type = styled.div`

`

const Name = styled.div`

`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const NumberRating = styled.div`

`

const StarRating = styled.div`

`

const NumberOfReviews = styled.div`

`

const ViewDetails = styled.div`

`

const Picture = styled.div`
  width: 100%;
  height: 218px;
  background-color: ${props => props.color};
  margin-top: auto;
`

export default RecommendedPlace;
