import React from 'react';
import styled, { css } from 'styled-components';
import {CenterIdContext} from '../../pages/Home/index';
import bookmark from '../../images/noBookmark.png';
import { useHistory } from 'react-router-dom';

function RecommendedPlace({ placeData, size,...rest }) {
  // const { type, name, rating, numberOfReviews, km, picture, } = placeData;
  const { locationId, category, name, rating, reviewCount=0, picture, images} = placeData
  const km = 5;
  const history = useHistory();
  const handleClick=(id)=>{
    history.push(`/details/${id}`);
  }
	return (
    // 검색결과 나타난 추천 관광지를 클릭하면 지도를 해당 관광지를 중심으로 잡아주는 작업을 해야함(21일 1:04 PM)
    <CenterIdContext.Consumer>
      {({centerId, setCenterId})=>(
        <Wrapper size={size} {...rest} onClick={_=>setCenterId(locationId)}>
          <Wrap>
            <FirstRow>
              <Type>{category}</Type>
              {size === "medium" ? <Triangle /> : null}
              {size === "medium" ? <CloseBtn><Xbtn>x</Xbtn></CloseBtn> : <BookMark />}
            </FirstRow>
            <Name>{name}</Name>
            <Row>
              <Stars>
                <FirstStar rating={rating}>★</FirstStar>
                <SecondStar rating={rating}>★</SecondStar>
                <ThirdStar rating={rating}>★</ThirdStar>
                <FourthStar rating={rating}>★</FourthStar>
                <FifthStar rating={rating}>★</FifthStar>
              </Stars>
              <NumberRating>{rating}</NumberRating>
              <NumberOfReviews>{`| 리뷰 ${reviewCount}건`}</NumberOfReviews>
            </Row>
            <SecondRow>
              <FromMyLocation>{`내 위치에서 ${km}km`}</FromMyLocation>
              <ViewDetails
                onClick={_=>handleClick(locationId)}
              >{`상세보기 >`}</ViewDetails>
            </SecondRow>
          </Wrap>
          <PictureWrapper size={size}>
            <Picture
              url={images[0]}
              // color={picture}
              category={category}
            />
          </PictureWrapper>
        </Wrapper>
        )
      }
    </CenterIdContext.Consumer>
	)
}

const sizes = {
  big: {width:'360px', height:'346px', margin:'3px 20px 30px 20px'},
  medium: {width:'320px', height:'268px', margin:'3px 20px 30px 20px'},
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

const Star = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 2px;
  text-align: center;
  font-size: 19px;
  color: #efefef;
  transition: 0.5s;
`

const Stars = styled.div`
  display: flex;
  margin-right: 8px;
`

const FirstStar = styled(Star)`
  color: ${props => props.rating >= 1 ? "#ffd338" : "#efefef"};
`

const SecondStar = styled(Star)`
  color: ${props => props.rating >= 2 ? "#ffd338" : "#efefef"};
`

const ThirdStar = styled(Star)`
  color: ${props => props.rating >= 3 ? "#ffd338" : "#efefef"};
`

const FourthStar = styled(Star)`
  color: ${props => props.rating >= 4 ? "#ffd338" : "#efefef"};
`

const FifthStar = styled(Star)`
  color: ${props => props.rating >= 5 ? "#ffd338" : "#efefef"};
`

const Triangle = styled.span`
  width: 0; 
  height: 0; 
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 22px solid #ffffff;
  position: relative;
  bottom: 42px;
`

const PictureWrapper = styled.div`
  max-height: ${props => {
    if (props.size === "big") return "205px";
    else return "127px";
  }};
  overflow: hidden;
  border-bottom-right-radius: 20px;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  ${sizeStyles}
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
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

const CloseBtn = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.24);
  cursor: pointer;
  display: flex;
  justify-content: center;
`

const Xbtn = styled.div`
  margin: auto 0;
  color: #ffffff;
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

const NumberOfReviews = styled.div`
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
    if (props.category === "ATTRACTIONS") return "80%";
    else if (props.category === "RESTAURANT") return "117.5%";
    else if (props.category === "CAFE") return "122.5%";
  }};
  height: ${props => {
    if (props.category === "CAFE") return "221px";
    else return "208px";
  }};
  background-color: ${props => props.color};
  background: url(${props=>props.url});
  background-size: cover;
  margin-top: auto;
  border-radius: ${props => {
    if (props.category === "ATTRACTIONS") return "20px 0px";
    else if (props.category === "RESTAURANT") return "211.5px 211.5px 0 0";
    else if (props.category === "CAFE") return "20px 0 220.5px 220.5px";
  }};
  position: relative;
  left: 20.5%;
`

export default RecommendedPlace;
