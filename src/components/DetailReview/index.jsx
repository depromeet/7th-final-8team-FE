import React, { Component } from 'react';
import styled from 'styled-components';

class DetailReview extends Component {
  render() {
    return (
        <Review>
          <Profile>
            <Picture></Picture>
            <ReviewerInfo>
              <UserName>{this.props.name}</UserName>
              <BeWrittenDate>{this.props.date}</BeWrittenDate>
            </ReviewerInfo>
          </Profile>
          <Contents>
            <Rating>
              <Stars>
                <FirstStar rating={this.props.rating}>★</FirstStar>
                <SecondStar rating={this.props.rating}>★</SecondStar>
                <ThirdStar rating={this.props.rating}>★</ThirdStar>
                <FourthStar rating={this.props.rating}>★</FourthStar>
                <FifthStar rating={this.props.rating}>★</FifthStar>
              </Stars>
              <Number>{this.props.rating}</Number>
            </Rating>
            <Sentence>{this.props.sentence}</Sentence>
          </Contents>
        </Review>
    )
  }
}

const Star = styled.div`
  width: 19px;
  height: 19px;
  margin-right: 2px;
  text-align: center;
  font-size: 22px;
  color: #efefef;
  transition: 0.5s;
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

const Review = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
  padding-left: 40px;
  padding-right: 40px;
`

const Profile = styled.div`
  display: flex;
  min-width: 247px;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`

const Rating = styled.div`
  display: flex;
`

const Number = styled.div`
  width: 27px;
  height: 27px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: var(--00-background-dark);
`

const Stars = styled.div`
  display: flex;
  margin-right: 9px;
`

const Sentence = styled.div`
  max-width: 513px;
  margin-top: 20px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.55px;
  color: var(--00-background-dark);
`

const Picture = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #efefef;
  margin-right: 16px;
`

const ReviewerInfo = styled.div`
  margin-top: 10px;
`

const UserName = styled.div`
  width: fit-content;
  height: fit-content;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #191919;
  margin-bottom: 5px;
`

const BeWrittenDate = styled.div`
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #191919;
`

export default DetailReview;
