import React, { PropsWithChildren } from "react";

export const AppHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "0vh",
      overflowY: "scroll",
    }}
  >
    {children}
  </div>
);
