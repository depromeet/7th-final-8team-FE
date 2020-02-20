import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import bookmark from '../../images/bookmark.png';

function RecommendedPlace({ placeData, size, ...rest }) {
  // const { type, name, rating, numberOfReviews, km, picture, } = placeData;
  const { category, name, rating, reviewCount, images} = placeData
  const km = 5;
  // locationId: 1
  // name: "동백키친"
  // description: null
  // category: "RESTAURANT"
  // subCategory: null
  // address: "제주특자치도 제주시 한림 수원7 42"
  // latitude: 100
  // longitude: 200
  // phoneNumber: "064-796-1015"
  // businessHours: "월,화,수,금,토,일 11:00 ~ 20:00↵월,화,수,금 브레이크타임 15:00 ~ 16:00"
  // detail: null
  // images: (2) ["http://img1.daumcdn.net/thumb/T680x420/?fname=http…aumcdn.net%2Flocalfiy%2Fsearchregister_1505814184", "http://img1.daumcdn.net/thumb/T680x420/?fname=http…aumcdn.net%2Flocalfiy%2Fsearchregister_1505814184"]
  // rating: 4.3
  // reviewCount: 0
  // bookmarking: false
	return (
    <Wrapper size={size} {...rest}>
      <Wrap>
        <FirstRow>
          <Type>{category}</Type>
          <BookMark />
        </FirstRow>
        <Name>{name}</Name>
        <Row>
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
          <NumberRating>{rating}</NumberRating>
          <NumberOfReviews>{`| 리뷰 ${reviewCount}건`}</NumberOfReviews>
        </Row>
        <SecondRow>
          <FromMyLocation>{`내 위치에서 ${km}km`}</FromMyLocation>
          <ViewDetails>{`상세보기 >`}</ViewDetails>
        </SecondRow>
      </Wrap>
      <Picture
        url={images[0]}
        // color={picture}
        type={category}
      />
    </Wrapper>
	)
}
const sizes = {
  big: {width:'360px', height:'346px', margin:'3px 20px 30px 20px'},
  medium: {width:'346px', height:'268px', margin:'3px 20px 30px 20px'},
  small: {width:'227px', height:'268px', margin:'3px 10px 30px 10px'},
};
const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
		width:${sizes[size].width};
		height: ${sizes[size].height};
    margin: ${sizes[size].margin};
  `}
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  ${sizeStyles}
  
  /* margin: 3px 20px 30px 20px; */
  /* width: ${props => {
    if (props.size === "big") return "360px";
    else if (props.size === "medium") return "320px";
    else if (props.size === "small") return "227px";
    else console.log("사이즈를 잘못 넣으셨습니다. big, medium, small만 가능합니다.");
  }};
  height: ${props => {
    if (props.size === "big") return "346px";
    else if (props.size === "medium" || "small") return "268px";
    else console.log("사이즈를 잘못 넣으셨습니다. big, medium, small만 가능합니다.");
  }};
  margin: ${props=>{
    if (props.size === "small") return "3px 10px 30px 10px";
  }} */
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
  overflow: hidden;
`

const Wrap = styled.div`
  padding: 20px;
`

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const BookMark = styled.div`
  width: 20px;
  height: 24px;
  background-image: url(${bookmark});
  background-size: cover;
  cursor: pointer;
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
    if (props.type === "ATTRACTIONS") return "80%";
    else if (props.type === "RESTAURANT") return "117.5%";
    else if (props.type === "CAFE") return "122.5%";
  }};
  height: ${props => {
    if (props.type === "CAFE") return "221px";
    else return "208px";
  }};
  background-color: ${props => props.color};
  background: url(${props=>props.url});
  background-size: cover;
  margin-top: auto;
  border-radius: ${props => {
    if (props.type === "ATTRACTIONS") return "20px 0px";
    else if (props.type === "RESTAURANT") return "211.5px 211.5px 0 0";
    else if (props.type === "CAFE") return "20px 0 220.5px 220.5px";
  }};
  position: relative;
  left: 20.5%;
`

export default RecommendedPlace;
