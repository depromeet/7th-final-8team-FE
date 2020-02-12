import React, { Component } from 'react';
import styled from 'styled-components';

class DetailWriteReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewContents: "",
      reviewLength: 0,
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

  render() {
    return (
      <Box>
        <Title>
          <FirstText>와이키키 절벽</FirstText>
        </Title>
        <Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Stars>
        <Pharse>
          <SecondText>방문한 장소를 평가해주세요!</SecondText>
        </Pharse>
        <Contents>
          <Input value={this.state.reviewContents} onChange={e => {this.handleReivewContentsChange(e)}} placeholder={"와이키키 절벽에 다녀온 경험을 공유해주세요."}/>
        </Contents>
        <TextLength>{`${this.state.reviewLength}자 | 최소 20자`}</TextLength>
        <Footer>
          <Cancel>
            <CancelText>취소</CancelText>
          </Cancel>
          <Confirm>
            <ConfirmText>확인</ConfirmText>
          </Confirm>
        </Footer>
      </Box>
    )
  }
}

const Box = styled.div`
  width: 580px;
  height: 600px;
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.22);
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
  background-color: #efefef;
  margin-right: 4px;
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
