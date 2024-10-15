import * as React from "react";

function HeartIcon(props) {
  return (
    <svg viewBox="0 0 25.72 34.5" {...props}>
      <g data-name="Layer 2">
        <path
          d="M5.22 0h9l11.5 17.33-11.5 17.17h-9L0 26.06l5.33-8.73L0 8.44 5.22 0z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

const MemoHeartIcon = React.memo(HeartIcon);
export default MemoHeartIcon;
