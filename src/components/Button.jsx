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
  small: {height:'70px',fontSize:'14px',lineHeight:'21px'},
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
	border-radius: 100px;
	box-shadow: 0px 1px 10px rgba(72, 80, 176, 0.12), 0px 4px 5px rgba(72, 80, 176, 0.14), 0px 4px 4px rgba(72, 80, 176, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding: 8px 16px;
	white-space:nowrap;
	letter-spacing: -0.55px;


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