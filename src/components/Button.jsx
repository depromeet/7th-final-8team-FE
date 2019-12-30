import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';

const colorStyles = css`
	/* 색상 */
  ${({ theme, color }) => {
		let selected;
		// ThemeProvider를 쓰지 않거나 color에 임의의 색상값을 직접 넣는 경우 대비
		(theme.palette && theme.palette[color]) ? selected = theme.palette[color] : selected = color;
		return css`
			background: ${selected};
			&:hover {
				background:${lighten(0.1, selected)};
			};
			&:active {
				background:${darken(0.1, selected)};
			};
		`;
	}}
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

const StyledButton = styled.button`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding-left: 1rem;
	padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}
  /* 색상 */
	${colorStyles}

	/* 기타 */
	& + & {
		margin-left: 1rem;
	}
`;

const Button=({ children, color, ...rest })=>{
	return <StyledButton color={color} {...rest}>{children}</StyledButton>;
}
Button.defaultProps = { color: 'blue', size:'medium' };

export default Button;