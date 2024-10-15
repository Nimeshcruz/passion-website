import * as React from "react";

function HalfHeartRed(props) {
  return (
    <svg viewBox="0 0 714.54 216.65" className={props.class}>
      <g data-name="Layer 2">
        <path
          fill={props.fill}
          d="M537.86 0l-180.5 122.89L178.86 2.73 0 119.42v97.23h714.54v-98.32L537.86 0z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoHalfHeartRed = React.memo(HalfHeartRed);
export default MemoHalfHeartRed;
