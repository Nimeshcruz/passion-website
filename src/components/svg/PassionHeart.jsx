import * as React from "react";

function PassionHeart(props) {
  return (
    <svg viewBox="0 0 291.28 263.67" {...props}>
      <defs>
        <style>{".prefix__cls-1{fill:#ff0037}"}</style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <path
            className="prefix__cls-1"
            d="M0 55.65h44.72v91.67H0zM61.64 0h44.72v205.48H61.64zM123.28 56.27v207.4l44.72-.2V56.27h-44.72zM184.92 0h44.72v205.48h-44.72zM246.56 55.65h44.72v91.67h-44.72z"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoPassionHeart = React.memo(PassionHeart);
export default MemoPassionHeart;
