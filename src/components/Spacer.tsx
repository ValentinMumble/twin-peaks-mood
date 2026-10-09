import styled from 'styled-components';

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer = styled.div<SpacerProps>`
  display: flex;
  width: ${({width = 1}) => width}px;
  height: ${({height = 1}) => height}px;
`;

export {Spacer};
