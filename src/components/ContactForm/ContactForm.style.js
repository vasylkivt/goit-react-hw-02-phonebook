import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 25px;
`;

export const InputName = styled.label`
  margin-left: auto;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;

export const Input = styled.input`
  margin-bottom: 25px;
  margin-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;

export const ButtonSubmit = styled.button`
  margin-left: auto;
  margin-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;
