import React from "react";
import "./FlexContainer.scss";

export default function FlexContainer({
  children,
  style = {},
}: {
  style?: Object;
  children: React.ReactNode;
}) {
  return (
    <div style={style} className="flex-container">
      {children}
    </div>
  );
}
