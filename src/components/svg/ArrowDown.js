import * as React from "react";

function ArrowDown(props) {
  return (
    <svg viewBox="0 0 17 15" className={props.class}>
      <g data-name="Layer 2">
        <path fill={props.fill} d="M8.5 15L0 0h17L8.5 15z" data-name="Layer 1" />
      </g>
    </svg>
  );
}

const MemoArrowDown = React.memo(ArrowDown);
export default MemoArrowDown;
