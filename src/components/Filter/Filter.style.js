import styled from 'styled-components';

export const InputName = styled.label`
  //   margin-right: auto;
  //   color: ${({ theme }) => theme.colors.titleColor};
  //   font-weight: 600;
  //   font-size: 14px;
  //   line-height: 1.11;
  //   letter-spacing: 0.72px;
`;

export const Input = styled.input`
  margin-bottom: 25px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;

  /* border-radius: 5px; */

  /* background-color: transparent; */
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;
