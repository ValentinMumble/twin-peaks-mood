import styled from 'styled-components';

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer = styled.div<SpacerProps>`
  display: flex;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

Spacer.defaultProps = {
  width: 1,
  height: 1
};

export {Spacer};
