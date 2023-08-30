import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Content = styled.p`
  color: #625f5f;
  font-size: 1.2rem;
`;

const Popup = ({ onClose }) => {
  return (
    <PopupContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Content>
        Checkout admin dashboard demo&nbsp;
        <a href="https://www.youtube.com/watch?v=EiSnWGlXK3w&ab_channel=AkshaySawant" target="_blank">
          here
        </a>
      </Content>
    </PopupContainer>
  );
};

export default Popup;
