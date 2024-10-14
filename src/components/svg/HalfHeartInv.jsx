import * as React from "react";

function HalfHeartInv(props) {
  return (
    <svg viewBox="0 0 1543.03 467.84" className={props.class}>
      <g data-name="Layer 2">
        <path
          fill={props.fill}
          d="M381.53 467.84l392.6-257.89 382.65 251.99 386.25-251.99V0H0v212.31l381.53 255.53z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoHalfHeartInv = React.memo(HalfHeartInv);
export default MemoHalfHeartInv;
