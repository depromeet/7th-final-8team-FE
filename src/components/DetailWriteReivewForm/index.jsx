import React, { Component } from 'react';
import styled from 'styled-components';

class DetailWriteReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewContents: "",
      reviewLength: 0,
      rating: 0,
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.reviewContents !== this.state.reviewContents) {
      this.setState({ reviewLength: this.state.reviewContents.length });
    }
    else {
      return false;
    }
  }

  handleReivewContentsChange = (e) => {
    this.setState({ reviewContents: e.target.value });
  }

  setRatingOne = () => {
    this.setState({ rating: 1 })
  }

  setRatingTwo = () => {
    this.setState({ rating: 2 })
  }

  setRatingThree = () => {
    this.setState({ rating: 3 })
  }

  setRatingFour = () => {
    this.setState({ rating: 4 })
  }

  setRatingFive = () => {
    this.setState({ rating: 5 })
  }

  render() {
    return (
      <>
        <Background />
        <Wrapper>
          <Box>
            <Title>
              <FirstText>와이키키 절벽</FirstText>
            </Title>
            <Stars>
              <FirstStar rating={this.state.rating} onClick={this.setRatingOne}>★</FirstStar>
              <SecondStar rating={this.state.rating} onClick={this.setRatingTwo}>★</SecondStar>
              <ThirdStar rating={this.state.rating} onClick={this.setRatingThree}>★</ThirdStar>
              <FourthStar rating={this.state.rating} onClick={this.setRatingFour}>★</FourthStar>
              <FifthStar rating={this.state.rating} onClick={this.setRatingFive}>★</FifthStar>
            </Stars>
            <Pharse>
              <SecondText>방문한 장소를 평가해주세요!</SecondText>
            </Pharse>
            <Contents>
              <Input value={this.state.reviewContents} onChange={e => {this.handleReivewContentsChange(e)}} placeholder={"와이키키 절벽에 다녀온 경험을 공유해주세요."}/>
            </Contents>
            <TextLength>{`${this.state.reviewLength}자 | 최소 20자`}</TextLength>
            <Footer>
              <Cancel onClick={() => {this.props.handleToFalseWriteReivew()}}>
                <CancelText>취소</CancelText>
              </Cancel>
              <Confirm>
                <ConfirmText>확인</ConfirmText>
              </Confirm>
            </Footer>
          </Box>
        </Wrapper>
      </>
    )
  }
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  opacity: 0.22;
  background-color: #000000;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Box = styled.div`
  margin: auto 0;
  width: 580px;
  height: 600px;
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.22);
  opacity: 1;
  background-color: white;
`

const Title = styled.div`
  width: 580px;
  height: 42px;
  margin-top: 20px;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
`

const FirstText = styled.div`
  display: flex;
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 24px;
  font-weight: bold;
  line-height: 0.83;
  letter-spacing: -0.55px;
`

const SecondText = styled.div`
  display: flex;
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.55px;
  color: #5f5f5f;
`

const Stars = styled.div`
  display: flex;
  justify-content: center;
`

const Star = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 4px;
  text-align: center;
  font-size: 44px;
  color: #efefef;
  cursor: pointer;
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

const Pharse = styled.div`
  width: 580px;
  height: 42px;
  display: flex;
  justify-content: center;
`

const Contents = styled.div`
  width: 540px;
  height: 308px;
  margin-top: 20px;
  margin-bottom: 6px;
  padding: 16px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #fbfbfb;
`

const Input = styled.textarea`
  width: 508px;
  height: 276px;
  border: 0;
  padding: 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 2;
  letter-spacing: -0.55px;
  resize: none;
  background-color: #fbfbfb;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #999999;
  }
`

const TextLength = styled.div`
  width: 90px;
  height: 20px;
  margin-top: 6px;
  margin-right: 20px;
  margin-bottom: 20px;
  float: right;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #5f5f5f;
`

const Footer = styled.div`
  width: 580px;
  height: 60px;
  display: flex;
  cursor: pointer;
`

const Cancel = styled.div`
  display: flex;
  justify-content: center;
  width: 290px;
  border-top: 1px solid #efefef;
  border-right: 1px solid #efefef;
`

const Confirm = styled.div`
  display: flex;
  justify-content: center;
  width: 290px;
  border-top: 1px solid #efefef;
`

const CancelText = styled.div`
  display: flex;
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: #7a7a7a;
`

const ConfirmText = styled.div`
  display: flex;
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: #2f80ed;
`

export default DetailWriteReviewForm;
