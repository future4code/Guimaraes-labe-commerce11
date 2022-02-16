import styled from "styled-components";

export const ImgLogo = styled.img`
  width: 160px;
  height: 160px;
`;

export const ImgCarrinho = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
  &:hover{
        background-color: #fff;
        cursor: pointer;
        border-radius: 50%;
        padding: 2px;
    }
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2196f3;
  align-items: center;
  padding: 20px;
  height: 90px;
  box-shadow: 2px 2px 12px darkgray;
`;

export const Input = styled.input`
  border: 0;
  padding: 10px;
  width: 200px;
  border-radius: 20px;
  outline: 0;
  box-shadow: 2px 2px 12px rgb(0, 0, 0, 0.3);
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  
`;
