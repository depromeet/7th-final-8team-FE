import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const DarkBackground = styled.div`
	position:fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	background:rgba(0,0,0,0.8);
`;

// Modal 스타일
const ModalBlock = styled.div`
	width:320px;
	padding: 1.5rem;
	background:white;
	border-radius:2px;
  /* Modal내 h3 스타일 */
	h3 {
		margin:0;
		font-size:1.5rem;
	}
  /* Modal내 p 스타일 */
	p {
		font-size:1.125rem;
	}
`;

// Modal내 Button 레이아웃
const ButtonGroup = styled.div`
	margin-top:3rem;
	display:flex;
	justify-content:flex-end;
`;

// styled 함수를 사용하면 Button을 상속받아서 새로운 컴포넌트를 만들 수 있음
// Button으로부터 상속받은 margin을 커스텀하여 새로운 컴포넌트 생성
const ShortMarginButton = styled(Button)`
	& + & {
		margin-left:0.5rem;
	}
`;

function Modal({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }){
  if(!visible) return null;
	return (
		<DarkBackground>
			<ModalBlock>
				<h3>{title}</h3>
				<p>{children}</p>
				<ButtonGroup>
					<ShortMarginButton color="gray" onClick={onConfirm}>{cancelText}</ShortMarginButton>
					<ShortMarginButton color="pink" onClick={onCancel}>{confirmText}</ShortMarginButton>
				</ButtonGroup>
			</ModalBlock>
		</DarkBackground>
	)
}

// Modal의 기본 버튼값
Modal.defaultProps = {
	cancelText: 'Cancel',
	confirmText: 'Confirm',
};

export default Modal;