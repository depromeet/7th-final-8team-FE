import React, { Component } from 'react';
import styled from 'styled-components';
import DetailReview from 'components/DetailReview';

class DetailReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fakeReviews: [
        {Name: "안뇽안뇽안뇽", Date: "2020.01.23", Rating: 10.0, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
        {Name: "삼다수", Date: "2020.03.06", Rating: 6.0, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
        {Name: "홍길동", Date: "2020.02.15", Rating: 8.0, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
        {Name: "맥북", Date: "2020.05.07", Rating: 2.0, Sentence: "밝은 가슴에 인류의 끓는다. 없으면, 용기가 내려온 교향악이다. 발휘하기 목숨이 이상 구하지 행복스럽고 같이 얼음이 그들은 희망의 부패뿐이다. 품으며, 얼마나 무엇을 온갖 황금시대의 아름다우냐? 뜨거운지라, 고동을 지혜는 오직 구하지 위하여서 이것이다. 있는 얼음에 소금이라 보는 불어 불러 있는가? 이것이야말로 속에 그들은 청춘이 눈이 얼음에 것이다.보라, 가진 청춘의 이것이다. 광야에서 관현악이며, 때에, 가는 인간의 같이, 그것을 것은 따뜻한 이것이다. 없는 아니더면, 것이다.보라, 과실이 무엇을 듣기만 약동하다. 밝은 가슴에 인류의 끓는다. 없으면, 용기가 내려온 교향악이다. 발휘하기 목숨이 이상 구하지 행복스럽고 같이 얼음이 그들은 희망의 부패뿐이다. 밝은 가슴에 인류의 끓는다. 없으면, 용기가 내려온 교향악이"}, 
        {Name: "필통", Date: "2020.04.10", Rating: 4.0, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
      ],
      sortBySelected: "", // 평점높은순, 최신순
    }
  }

  componentDidMount() {
    // 컴포넌트 마운트 되면 평점높은순으로 우선 정렬
    this.sort("평점높은순");
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

  sort = (selected) => {
    let tempData = this.state.fakeReviews.splice(0);

    if (selected === "평점높은순") {
      tempData = tempData.sort((a, b) => a.Rating < b.Rating ? 1 : -1);
      
      this.setState({ fakeReviews: tempData });
    } 
    else if (selected === "최신순") {
      tempData = tempData.sort((a, b) => Number(a.Date) < Number(b.Date) ? 1 : -1);
                                          // 2020.01.01 < 2020.02.01
      this.setState({ fakeReviews: tempData });
    }
  }

  // 임시로 가짜 데이터 추가
  handleViewMore = () => {
    let tempData = this.state.fakeReviews.splice(0);
    tempData.push(
      {Name: "안뇽안뇽안뇽", Date: "2020.01.23", Rating: 10.0, Sentence: "발휘하기 목숨이 이상 구하지 행복스럽"}, 
    );
    this.setState({ fakeReviews: tempData });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Sort onChange={e => this.handleChangeSelected(e)}>
            <Option value={"평점높은순"}>평점높은순</Option>
            <Option value={"최신순"}>최신순</Option>
          </Sort>
          <WriteReivew>리뷰쓰기</WriteReivew>
        </Header>
        {this.state.fakeReviews.map((review, idx) => 
          <DetailReview 
            name={review.Name}
            date={review.Date}
            rating={review.Rating}
            sentence={review.Sentence}
            key={idx}
          />
        )}
        <ViewMore>
          <MoreButton onClick={this.handleViewMore}>리뷰 전체보기</MoreButton>
        </ViewMore>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 800px;
  height: 1416px;
`

// 헤더

const Header = styled.div`
  display: flex;
  width: 760px;
  height: 42px;
  justify-content: space-between;
`

const Sort = styled.select`
`

const Option = styled.option`
`

const WriteReivew = styled.div`
  display: flex;
  justify-self: center;
`

const ViewMore = styled.div`
  height: 53px;
  display: flex;
  justify-content: center;
`

const MoreButton = styled.div`
  width: fit-content;
  margin: auto 0;
  cursor: pointer;
`

export default DetailReviews;
