import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';


const labelSizes = {
  large: {fontSize:'1rem',},
  medium: {fontSize:'0.875rem',},
  small: {fontSize:'0.65rem',},
}
const labelSizesStyles = css`
  /* 크기 */
  ${({ size }) => css`
		font-size: ${labelSizes[size].fontSize};
  `}
`;
const sizes = {
  large: {height:'3rem',fontSize:'1.25rem',},
  medium: {height:'2.25rem',fontSize:'1rem',},
  small: {height:'1.75rem',fontSize:'0.875rem',},
};
const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
		height:${sizes[size].height};
		font-size: ${sizes[size].fontSize};
  `}
`;
const StyledInput = styled.input.attrs({
  type: 'text'
})`
  /* 공통 스타일 */
  width:100%;
  box-sizing:border-box;
  display: block;
  border: 1px solid #242729;
  outline:none;
  border-radius: 4px;
  color: #242729;
  font-weight: bold;
  margin-top:0.1rem
  padding-left: 1rem;
  padding-right: 1rem;
  ${sizeStyles}
`;

const StyledLabel = styled.label`
  display:block;
  ${labelSizesStyles}
`;

function InputText({placeholder, label, ...rest}) {
  return (
    <StyledLabel {...rest}>
      {label}
      <StyledInput placeholder={placeholder} {...rest}/>
    </StyledLabel>
  )
}

export default InputText;