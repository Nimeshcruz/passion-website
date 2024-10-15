import * as React from "react";

function StarOutline(props) {
  return (
    <svg viewBox="0 0 20 19" className={props.class}>
      <g data-name="Layer 2">
        <path
          d="M3.82 19l1.63-7L0 7.25l7.2-.63L10 0l2.8 6.62 7.2.63L14.55 12l1.62 7L10 15.27zm3-4.18l3.18-1.9 3.15 1.93-.83-3.6 2.78-2.4-3.65-.33L10 5.12 8.55 8.5l-3.65.32 2.77 2.43z"
          fill={props.fill}
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoStarOutline = React.memo(StarOutline);
export default MemoStarOutline;
