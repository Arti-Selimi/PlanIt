"use client";

import ArrowDown from "@/components/arrowDown/arrowDown";

export default function ClientLayout({ children }) {
  return (
    <>
      <div id="main">
        <div id="container">
          {children}
          <ArrowDown />
        </div>
      </div>
    </>
  );
}
