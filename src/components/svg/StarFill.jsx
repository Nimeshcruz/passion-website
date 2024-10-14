import * as React from "react";

function StarFill(props) {
  return (
    <svg viewBox="0 0 20 19" className={props.class}>
      <g data-name="Layer 2">
        <path
          fill={props.fill}
          d="M3.83 19l1.62-7.03L0 7.25l7.2-.62L10 0l2.8 6.63 7.2.62-5.45 4.72L16.18 19 10 15.28 3.83 19z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoStarFill = React.memo(StarFill);
export default MemoStarFill;
