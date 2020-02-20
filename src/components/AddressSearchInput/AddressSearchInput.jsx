import React, {useState} from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import {darken, lighten} from 'polished';
import InputText from '../InputText';
import searchIcon from '../../assets/icon_search.svg'

const SearchResultUL = styled.ul`
  width:100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
  border-radius:${props=> props.isSearching ? '0 0 20px 20px' : '20px' }
  position:absolute;
  top:46px;
  cursor:pointer;
  background:#fff;
  display:${props => (props.isSearching ? 'static' : 'none')};
  z-index:999;
`;
// list hover, active 스타일
const palette = {
	default: '#DCDCDC',
}
const colorStyles = css`
	/* 색상 */
  ${({ theme, color }) => {
		let selected;
		// ThemeProvider를 쓰지 않거나 color에 임의의 색상값을 직접 넣는 경우 대비
		(theme.palette && theme.palette[color]) ? selected = theme.palette[color] : selected = color;
		return css`
			&:hover {
				background:${lighten(0.1, selected)};
			};
			&:active {
				background:${darken(0.1, selected)};
			};
		`;
	}}
`;
const LiResult = styled.li`
  width:100%;
  height:36px;
  display:inline-block;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.55px;
  padding: 7px 12px;
  box-sizing:border-box;
  ${colorStyles}
`;

const ButtonSearch = styled.button`
  position:absolute;
  right:20px;
  top:0
  width:48px;
  height:48px;
  padding:0;
  background-color:transparent;
  border:0;
  background-image:url(${searchIcon});
  background-size: 24px 24px
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;


function AddressSearchInput({onSearch}) {
  const defaultValue = {
    placeholder: '여행할 장소를 입력해주세요 🛫',
    label: null,
    size:'default',
    isLabel: '',
  }
  const {placeholder,label,size,isLabel} = defaultValue;
  
  const [address, setAddress] = useState('');
  const [resultList, setResultList] = useState(null);
  const [isViewResultList, setIsViewResultList] = useState(false);
  

  const onChange=e=>{
    setAddress(e.target.value);
    if(e.target.value.length === 0){
      setResultList(null);
    }
  }
  const kakao = window.kakao;
  const ps = new kakao.maps.services.Places();  
  const searchPlaces=e=>{
      if(e.keyCode === 13){
        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        console.log('address',address)
        ps.keywordSearch(address, placesSearchFunc); 
      } else {
        return;
      }
  }
  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  const placesSearchFunc=(data, status, pagination)=>{
      if (status === kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          console.log("data",data);
          console.log("pagination",pagination);
          setResultList(data);
          setIsViewResultList(true);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
  }
  // 검색 결과를 클릭했을때
  const onPlace = (e, result) =>{
    setIsViewResultList(false);
    setAddress('');
    // API 통신 로직 필요
    onSearch(result);
  }
  return (
    <div style={{
      margin:"16px 1rem  20px 1rem",
      position:"relative",
    }}>
      <InputText placeholder={placeholder} label={label} size={size} isLabel={isLabel} style={{padding:'0 20px'}}
        autoComplete="off" name="address" value={address}
        onChange={onChange} onKeyUp={searchPlaces} isSearching={!!resultList && !(address.length===0)}/>
      <ButtonSearch onClick={searchPlaces}></ButtonSearch>
      <SearchResultUL isSearching={!!resultList && !(address.length===0)} >
        {!!isViewResultList && !!resultList && resultList.map(result=>{
          return (
          <ThemeProvider key={result.id} theme={{palette}}>
            <LiResult color="default" onClick={e=>{onPlace(e,result)}}>{result.place_name}</LiResult>
          </ThemeProvider>
          )
        })}
      </SearchResultUL>
    </div>
  )
}

export default AddressSearchInput;