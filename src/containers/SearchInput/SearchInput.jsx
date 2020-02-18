import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icon_search.svg'
import InputText from '../../components/InputText'

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

function SearchInput() {
  const defaultValue = {
    placeholder: '분위기 좋은 카페는 어때요?',
    label: null,
    size:'default',
    isLabel: '',
  }
  const {placeholder,label,size,isLabel} = defaultValue;
  return (
    <div style={{
      margin:"16px 0 20px 0",
      position:"relative"
    }}>
      <InputText placeholder={placeholder} label={label} size={size} isLabel={isLabel} style={{padding:'0 20px'}}/>
      <ButtonSearch></ButtonSearch>
    </div>
  )
}

export default SearchInput;