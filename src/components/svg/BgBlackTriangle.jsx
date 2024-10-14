import * as React from "react";

function BgBlackTriangle(props) {
  return (
    <svg viewBox="0 0 772.3 256.7" className={props.class}>
      <path fill={props.fill} d="M772.3 0L381.5 256.7 0 1.2z" />
    </svg>
  );
}

const MemoBgBlackTriangle = React.memo(BgBlackTriangle);
export default MemoBgBlackTriangle;
