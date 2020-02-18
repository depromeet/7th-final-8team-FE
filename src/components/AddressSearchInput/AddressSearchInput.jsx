import React, {useState} from 'react';
import InputText from '../InputText';
import searchIcon from '../../assets/icon_search.svg'
import styled from 'styled-components';

const SearchResultUL = styled.ul`
  width:100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 4px 5px rgba(196, 196, 196, 0.14);
  border-radius: 20px;
  border-radius:${props=> props.isSearching ? '0 0 20px 20px' : '20px' }
  position:absolute;
  cursor:pointer;
  background:#fff;
  display:${props => (props.isSearching ? 'static' : 'none')};
  z-index:999;
`;
const LiResult = styled.li`
  width:100%;
  height:36px;
  display:inline-block;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.55px;
  padding: 7px 12px;
  box-sizing:border-box
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


function AddressSearchInput() {
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
  const [place, setPlace] = useState(null);
  

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
    setPlace(result);
  }
  return (
    <div style={{
      margin:"16px 1rem  20px 1rem",
      position:"relative",
    }}>
      <InputText placeholder={placeholder} label={label} size={size} isLabel={isLabel} style={{padding:'0 20px'}}
        autoComplete="off" name="address"
        onChange={onChange} onKeyUp={searchPlaces} isSearching={!!resultList && !(address.length===0)}/>
      {/* <InputText placeholder={"갈 여행지 주소를 입력해주세요🛫"} label={"ADDRESS"} size={"medium"} name="address"
        onChange={onChange} onKeyUp={searchPlaces}
      /> */}
      {/* <Button color={"pink"} onClick={searchPlaces}>검색</Button> */}
      <ButtonSearch onClick={searchPlaces}></ButtonSearch>
      <SearchResultUL isSearching={!!resultList && !(address.length===0)}>
        {!!isViewResultList && !!resultList && resultList.map(result=>{
          return <LiResult key={result.id} onClick={e=>{onPlace(e,result)}}>{result.place_name} | {result.address_name}</LiResult>
        })}
      </SearchResultUL>
      {!!place && (<><h1>{place.place_name}</h1>{place.category_name} | x: {place.x} | y: {place.y}</>)}
    </div>
  )
}

export default AddressSearchInput;