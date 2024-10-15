import * as React from "react";

function BgShapeBlack(props) {
  return (
    <svg viewBox="0 0 329.09 99.78" {...props}>
      <g data-name="Layer 2">
        <path
          d="M247.72 0l-83.13 56.6L82.38 1.26 0 55v44.78h329.08V54.5L247.72 0z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoBgShapeBlack = React.memo(BgShapeBlack);
export default MemoBgShapeBlack;
