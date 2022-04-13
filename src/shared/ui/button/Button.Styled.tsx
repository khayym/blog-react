import styled from 'styled-components';

export const ModalButtonStyled = styled.div`
  background-color: #000;
  cursor: pointer;
  border-radius: 8px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out 0s;
  .plus-icon {
    transition: all 0.2s ease-in-out 0s;
    color: #fff !important;
  }
  :hover {
    background: #fff;
    border: 1px solid #000;
    .plus-icon {
      color: #000 !important;
    }
  }
`;
