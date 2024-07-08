import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default Box;
