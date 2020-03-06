import styled from 'styled-components';

export default styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  letter-spacing: 0.4px;

  color: #363837;

  svg {
    height: 24px;
    width: 24px;
  }

  ${({ adjust }) =>
    adjust &&
    `
    :nth-child(even) {
      margin-right: 0
    }
    :last-child {
      margin-bottom: 0;
    }
  `}

  ${({ children, ...rest }) => {
    return { ...rest };
  }}
`;
