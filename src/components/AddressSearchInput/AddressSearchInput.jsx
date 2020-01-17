import React from 'react';
import InputText from '../InputText';


function AddressSearchInput() {
  return (
    <div>
      <InputText placeholder={"갈 여행지 주소를 입력해주세요🛫"} label={"ADDRESS"} size={"medium"}/>
    </div>
  )
}

export default AddressSearchInput;