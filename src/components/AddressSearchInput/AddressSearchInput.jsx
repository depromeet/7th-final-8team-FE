import React, {useState} from 'react';
import InputText from '../InputText';
import Button from '../Button';
import styled from 'styled-components';

const SearchResultUL = styled.ul`
  width:100%;
  position:absolute;
  top:3.5rem;
  left:1rem;
  cursor:pointer;
  background:#fff;
`;

function AddressSearchInput() {
  const [address, setAddress] = useState('');
  const [resultList, setResultList] = useState(null);
  const [isViewResultList, setIsViewResultList] = useState(false);
  const [place, setPlace] = useState(null);

  const onChange=e=>setAddress(e.target.value);
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
    <div>
      <InputText placeholder={"갈 여행지 주소를 입력해주세요🛫"} label={"ADDRESS"} size={"medium"} name="address"
        onChange={onChange} onKeyUp={searchPlaces}
      />
      <Button color={"pink"} onClick={searchPlaces}>검색</Button>
      <SearchResultUL>
        {!!isViewResultList && !!resultList && resultList.map(result=>{
          return <li key={result.id} onClick={e=>{onPlace(e,result)}}>{result.place_name} | {result.address_name}</li>
        })}
      </SearchResultUL>
      {!!place && (<><h1>{place.place_name}</h1>{place.category_name} | x: {place.x} | y: {place.y}</>)}
    </div>
  )
}

export default AddressSearchInput;