import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';

// 라벨 사이즈
const labelSizes = {
  large: {fontSize:'1rem',},
  medium: {fontSize:'0.875rem',},
  small: {fontSize:'0.65rem',},
  default: {fontSize:'12px'}
}
const labelSizesStyles = css`
  /* 크기 */
  ${({ size }) => css`
		font-size: ${labelSizes[size].fontSize};
  `}
`;
// 라벨 컴포넌트
const StyledLabel = styled.label`
  display:block;
  ${labelSizesStyles}
  /* margin-left:1rem;
  margin-right:1rem; */
  & + & {
		margin-top: 0.5rem;
	}
`;

// 입력창 사이즈
const sizes = {
  large: {height:'3rem',fontSize:'1.25rem',lineHeight:'1.25rem'},
  medium: {height:'2.25rem',fontSize:'1rem',lineHeight:'1rem'},
  small: {height:'1.75rem',fontSize:'0.875rem',lineHeight:'0.875rem'},
  default: {height:'48px',fontSize:'18px',lineHeight:'27px' }
};
const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
		height:${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    line-height:${sizes[size].lineHeight};
  `}
`;

// 입력창 컴포넌트
const StyledInput = styled.input.attrs({
  type: 'text'
})`
  /* 공통 스타일 */
  width:100%;
  box-sizing:border-box;
  display: block;
  outline:none;
  /* box-shadow: 0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14); */
  border: 0;
  border-radius: 100px;
  color: #242729;
  letter-spacing:-0.25px;
  margin-top:0.1rem;
  padding:0 1rem 0 1rem;
  vertical-align:bottom;
  &::placeholder {
    color: 	#A9A9A9;
  }
  &:hover {
    border-color:${darken(0.4, '#A9A9A9')};
  };
  &:focus {
    border-color:${darken(0.8, '#A9A9A9')};
  };
  ${sizeStyles}
  /* 검색 결과 ul이 붙었을 때 */
  border-radius:${props=> props.isSearching ? '25px 25px 0 0' : '100px' }
  box-shadow:${props=> props.isSearching
    ? '0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);'
    : '0px 2px 4px rgba(34, 34, 34, 0.2), 0px 1px 10px rgba(34, 34, 34, 0.12), 0px 4px 5px rgba(196, 196, 196, 0.14);' }
`;


const InputText = ({placeholder, label, size, isLabel, ...rest}) => {
  let inputLabel;
  if(isLabel === false) { inputLabel = null }
  else { inputLabel = label }
  return (
    <StyledLabel size={size}>
        {inputLabel}
      <StyledInput placeholder={placeholder} size={size} {...rest}/>
    </StyledLabel>
  )
}

InputText.defaultProps = { placeholder: '입력해주세요', label:'라벨', size:'medium' };

export default InputText;