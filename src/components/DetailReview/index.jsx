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
              <Number>{this.props.rating}</Number>
              <Stars>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Stars>
            </Rating>
            <Sentence>{this.props.sentence}</Sentence>
          </Contents>
        </Review>
    )
  }
}

// 리뷰

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
`

const Star = styled.div`
  width: 19px;
  height: 19px;
  background-image: url("https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png");
  background-size: cover;
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
  width: 59px;
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #191919;
`

export default DetailReview;
