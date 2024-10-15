import * as React from "react";

function BgShapeRed(props) {
  return (
    <svg viewBox="0 0 2029.1 658.7" {...props}>
      <path
        fill="#ff1f1f"
        d="M2029.1 35.5l-6.7 623.2H11.3L0 657.3l97.2-183.6L736 0l1012.3 393.5z"
      />
    </svg>
  );
}

const MemoBgShapeRed = React.memo(BgShapeRed);
export default MemoBgShapeRed;
