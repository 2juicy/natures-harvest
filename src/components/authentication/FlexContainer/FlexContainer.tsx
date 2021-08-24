import React from "react";
import "./FlexContainer.css";

export default function FlexContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-container">{children}</div>;
}
