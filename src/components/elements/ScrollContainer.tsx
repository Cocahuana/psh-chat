import React from "react";
import styled from "styled-components";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const StyledScrollableContainer = styled.div`
  max-height: 300px; /* Altura máxima del contenedor */
  overflow-y: auto; /* Habilitar desplazamiento vertical */
  border: 1px solid #ccc; /* Estilo de borde opcional */
  padding: 10px; /* Espaciado interior opcional */
`;
const ScrollableContainer: React.FC<ScrollProps> = ({ children, ...rest }) => {
  return (
    <StyledScrollableContainer {...rest}>{children}</StyledScrollableContainer>
  );
};

export default ScrollableContainer;
