import React from "react";
import styled from "styled-components";

const StyledTitle = styled.p`
  font-family: "NotoSans";
  font-weight: ${(props) => props.weight || 700};
  font-size: ${(props) => props.size || 18}px;
  line-height: ${(props) => props.lineHeight || 26.06}px;
  color: ${(props) => props.color || "black"};
  display: inline-block;
  margin-right: ${(props) => props.marginLeft || 0}px;
`;

const Title = ({ children, weight, size, lineHeight, color, marginLeft }) => {
  return (
    <StyledTitle
      weight={weight}
      size={size}
      lineHeight={lineHeight}
      color={color}
      marginLeft={marginLeft}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
