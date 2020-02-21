import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const ArticlePlaceDetail = styled.article`
  align-items: center; 
  border-radius:20px;
  box-shadow: 0px 3px 5px rgba(196, 196, 196, 0.2), 0px 1px 18px rgba(34, 34, 34, 0.12), 0px 6px 10px rgba(196, 196, 196, 0.14);
  width:800px;
  min-height: 750px;
  /* 마이페이지의 북마크, 리뷰가 없는 경우에도 최소 750px 유지해야 함. */
  margin: -60px auto 120px auto;
  /* 자식요소 DivInfoTab의 마진 붕괴(margin collapse)를 막기 위해 */
  /* 부모 요소인 ArticlePlaceDetail에 padding 삽입 */
  /* display:inline-block; */;
  padding-top:1px;
  background:#fff;
  position:relative;
  z-index:1;
`;

const DivInfoTab = styled.div`
  text-align:center;
  line-height:42px;
  position:relative;
  /* 마진 붕괴 방지 위해 margin-top 부분에 1px 빠짐 */
  margin:39px 20px 40px 20px;

  span {
    /* 타입 */
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.55px;
    color: #764EF5;
  }
  h1{
    /* 이름 */
    font-weight: bold;
    font-size: 32px;
    letter-spacing: -0.55px;
    color: #191919;
  }
  div {
    /* 거리 */
    font-size: 18px;
    letter-spacing: -0.55px;
    color: #5F5F5F;
  }
`;
const NavTabs = styled.nav`
  ul{
    display:flex;
  }
  li {
    flex:1;
    flex-basis:0;
  }
  `;
  const ButtonNav = styled.button`
    width:100%;
    height:51px;
    background:none;
    border:0;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.25px;
    cursor: pointer;
    &::after{
      content:'';
      visibility: ${props=>(props['data-tab'] === props.currTab) ? 'visible' : 'hidden'};
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      border-bottom:#191919 1px solid;
      border-top:#191919 1px solid;
      border-radius:10px;
    }
    &:active, &:focus{
      background:none;
      border:0;
      outline:none;
    }
  `;

// 내부에서 패딩을 주는 것으로 정책 변경
// const SectionTabBody = styled.section`
//   /* padding:40px 39px 40px 40px; */
//   padding: ${(props)=> props.isMyPage ? "40px 0 0 0" : "40px 39px 40px 40px"};
// `;

function DetailModal({infoHeader,tabList, tabBodyList, isMyPage}) {
  // tabList: [ {key:'info',btnValue:'정보'}, {key:'review',btnValue:'리뷰'},]  
  // tabBodyList: [<PlaceDetailInfoTab/>, <DetailReviews/>,]
  console.log(tabList);
  console.log(tabBodyList);
  const [currTab, setCurrTab] = useState(tabList[0].key) // info, review, recommend
  let tabBody;
  for(let i=0; i<tabList.length;i++){
    if(currTab === tabList[i].key) {tabBody = tabBodyList[i]}
  }
  console.log(tabBody)
  
  const onClick=e=>{
    setCurrTab(e.target.dataset.tab);
  }

  const genTab=(tabList)=>{
    return (
      <ul>
        {tabList.map(tab=>(
          <li style={{position:'relative'}}>
            <ButtonNav data-tab={tab.key} currTab={currTab} onClick={e=>onClick(e)}>
              {tab.btnValue}
            </ButtonNav>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <ArticlePlaceDetail>
      <DivInfoTab>
        {infoHeader}
      </DivInfoTab>
      <NavTabs>
        {genTab(tabList)}
      </NavTabs>
      <section>
        {tabBody}
      </section>
    </ArticlePlaceDetail>
  )
};

export default DetailModal;