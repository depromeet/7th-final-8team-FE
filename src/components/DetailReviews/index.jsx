import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DetailReview from '../../components/DetailReview';
import select from '../../images/select.png';
import DetailWriteReviewForm from '../DetailWriteReivewForm';
import writeReviewIcon from '../../images/writeReview.png';

class DetailReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Reviews: [],
      sortBySelected: "", // 평점높은순, 최신순
      isClickedWriteReivew: false,
    }
  }

  // locationId에 등록 되어있는 리뷰 불러오기
  getLocationReivews = (id) => {
    const endpoint = `http://34.97.253.140/locations/${id}/reviews`;
    const config = { headers: { 'Content-Type': 'application/json'} };
    const getLocationReivews = axios.get(endpoint, config);
    getLocationReivews.then(res => {
      console.log(res.data.content);
      this.setState({ Reviews: res.data.content });
    }).catch(err => console.log(err));
  }

  componentDidMount() {
    this.getLocationReivews(0);
  }

  // setState가 비동기라서 정렬하는 기능을 여기서 처리함. 이렇게 하는게 좋은건지 잘 모르겠음.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBySelected !== this.state.sortBySelected) {
      this.sort(this.state.sortBySelected);
    }
  }

  handleChangeSelected = (e) => {
    this.setState({ sortBySelected: e.target.value });
  }

  handleWriteReivew = () => {
    this.setState({ isClickedWriteReivew: true });
  }

  handleToFalseWriteReivew = () => {
    this.setState({ isClickedWriteReivew: false });
  }

  // sort = (selected) => {
  //   let tempData = this.state.Reviews.splice(0);

  //   if (selected === "평점높은순") {
  //     tempData = tempData.sort((a, b) => a.Rating < b.Rating ? 1 : -1);
      
  //     this.setState({ Reviews: tempData });
  //   } 
  //   else if (selected === "최신순") {
  //     tempData = tempData.sort((a, b) => Number(a.Date) < Number(b.Date) ? 1 : -1);
  //                                         // 2020.01.01 < 2020.02.01
  //     this.setState({ Reviews: tempData });
  //   }
  // }

  // 임시로 가짜 데이터 추가
  handleViewMore = () => {
    let tempData = this.state.Reviews.splice(0);
    tempData.push(
      {Name: "안뇽안뇽안뇽", Date: "2020.01.23", Rating: 9.9, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
    );
    this.setState({ Reviews: tempData });
  }

  writeReviewBtn = () => {
    return (
      !this.props.isMyPage &&
      <PuppleCircle onClick={this.handleWriteReivew}>
        <WriteReivew>
          <Icon />
          {"리뷰쓰기"}
        </WriteReivew>
      </PuppleCircle>
    )
  }

  selectOfDetails = () => {
    return (
      <Select>
        <Sort>
          <Option value={"평점높은순"}>평점높은순</Option>
          <Option value={"최신순"}>최신순</Option>
        </Sort>
        <SortBtn />
      </Select>
    )
  }

  selectOfMypage = () => {
    return (
      <Select>
        <Sort>
          <Option value={"전체"}>전체</Option>
          <Option value={"관광지"}>관광지</Option>
          <Option value={"맛집"}>맛집</Option>
          <Option value={"카페"}>카페</Option>
        </Sort>
        <SortBtn />
      </Select>
    )
  }

  render() {
    return (
      <Wrapper>
        <Header>
          {this.props.isMyPage ? this.selectOfMypage() : this.selectOfDetails()}
          {this.writeReviewBtn()}
        </Header>
        {this.state.Reviews.map((review, idx) => 
          <DetailReview 
            name={review.username}
            date={review.lastUpdateAt.substr(0, 10)}
            rating={review.rating}
            sentence={review.content}
            key={idx}
          />
        )}
        <ViewMore>
          <MoreButton onClick={this.handleViewMore}>리뷰 전체보기</MoreButton>
        </ViewMore>
        {this.state.isClickedWriteReivew &&
        <DetailWriteReviewForm handleToFalseWriteReivew={this.handleToFalseWriteReivew} />}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 800px;
  height: fit-content;
  margin-top: 41px;
`

// 헤더

const Header = styled.div`
  display: flex;
  width: 760px;
  height: 42px;
  justify-content: space-between;
  box-sizing: border-box;
`

const Sort = styled.select`
  width: 74px;
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.55px;
  color: #808080;
  border: 0;
  background-color: white;
  position: relative;
  top: 8px;
  margin-left: 40px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  outline: none;
`

const SortBtn = styled.div`
  width: 10px;
  height: 5px;
  background-image: url(${select});
  background-size: cover;
  position: relative;
  top: 14px;
`

const Select = styled.div`
  display: flex;
`

const PuppleCircle = styled.div`
  width: 104px;
  height: 37px;
  border-radius: 100px;
  box-shadow: inset 0 2px 4px 0 rgba(255, 255, 255, 0.24), 0 1px 10px 0 rgba(72, 80, 176, 0.12), 0 4px 5px 0 rgba(72, 80, 176, 0.14), 0 4px 4px 0 rgba(72, 80, 176, 0.25);
  background-color: #764ef5;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Option = styled.option`
`

const Icon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${writeReviewIcon});
  background-size: cover;
  margin-right: 6px;
`

const WriteReivew = styled.div`
  margin: auto 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: white;
  display: flex;
`

const ViewMore = styled.div`
  height: 53px;
  display: flex;
  justify-content: center;
`

const MoreButton = styled.div`
  margin: auto 0;
  cursor: pointer;
  width: 78px;
  height: 21px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.55px;
  color: #7a7a7a;
`

export default DetailReviews;
