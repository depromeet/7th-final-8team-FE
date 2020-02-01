import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

function RecommendedPlace({ type, name, rating, numberOfReviews, picture, km }) {
	return (
    <Wrapper>
      <Wrap>
        <Type>{type}</Type>
        <Name>{name}</Name>
        <Row>
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
          <NumberRating>{rating}</NumberRating>
          <NumberOfReviews>{`| 리뷰 ${numberOfReviews}건`}</NumberOfReviews>
        </Row>
        <SecondRow>
          <FromMyLocation>{`내 위치에서 ${km}km`}</FromMyLocation>
          <ViewDetails>{`상세보기 >`}</ViewDetails>
        </SecondRow>
      </Wrap>
      <Picture color={picture} type={type}/>
    </Wrapper>
	)
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 360px;
  height: 346px;
  display: flex;
  flex-direction: column;
  margin: 3px auto 30px auto;
  /* margin-top: 3px;
  margin-bottom: 30px;
  margin: 0 auto; */
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
  overflow: hidden;
`

const Wrap = styled.div`
  padding: 20px;
`

const Type = styled.div`
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.25px;
  color: #764EF5;
  align-items: center;
  display: flex;
  margin-bottom: 6px;
`

const Name = styled.div`
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.25px;
  color: #191919;
  height: 20px;
  margin-bottom: 10px;
`

const Row = styled.div`
  display: flex;
  height: 20px;
`

const NumberRating = styled.div`
  width: 18px;
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: -0.2px;
`

const StarRating = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ffd338;
  margin-right: 4px;
`

const NumberOfReviews = styled.div`
  width: 44px;
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
`

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`

const FromMyLocation = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.55px;
  color: #5F5F5F;
`

const ViewDetails = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.55px;
  color: #7A7A7A;
  cursor: pointer;
`

const Picture = styled.div`
  width: ${props => {
    if (props.type === "관광") return "288px";
    else if (props.type === "맛집") return "423px";
    else if (props.type === "카페") return "441px";
  }};
  height: ${props => {
    if (props.type === "카페") return "221px";
    else return "208px";
  }};
  background-color: ${props => props.color};
  background-size: cover;
  margin-top: auto;
  border-radius: ${props => {
    if (props.type === "관광") return "20px 0px";
    else if (props.type === "맛집") return "211.5px 211.5px 0 0";
    else if (props.type === "카페") return "20px 0 220.5px 220.5px";
  }};
  position: relative;
  left: 72px;
`

export default RecommendedPlace;
