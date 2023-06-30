import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;
  font-size: 28px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-transform: capitalize;
  text-align: center;
`;

export const Wrap = styled.div`
  border: 2px solid black;
`;
