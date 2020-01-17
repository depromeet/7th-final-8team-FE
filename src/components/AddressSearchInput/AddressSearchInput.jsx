import React, {useState} from 'react';
import InputText from '../InputText';
import Button from '../Button';

function AddressSearchInput() {
  const [address, setAddress] = useState('');

  const onChange=e=>setAddress(e.target.value);
  const kakao = window.kakao;
  const ps = new kakao.maps.services.Places();  
  const searchPlaces=_=>{
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      console.log('address',address)
      ps.keywordSearch(address, placesSearchCB); 
  }
  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  const placesSearchCB=(data, status, pagination)=>{
      if (status === kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          console.log("data",data);
          console.log("pagination",pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
  }
  return (
    <div>
      <InputText placeholder={"갈 여행지 주소를 입력해주세요🛫"} label={"ADDRESS"} size={"medium"} name="address"
        onChange={onChange}
      />

      <Button color={"pink"} onClick={searchPlaces}>검색</Button>
    </div>
  )
}

export default AddressSearchInput;