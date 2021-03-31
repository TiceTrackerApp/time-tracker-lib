import React from "react";
import { Motion, spring } from "react-motion";

interface Props {
  x: number;
  y: number;
  zIndex?: number;
}

const PosAbsoluteAnimated: React.FC<Props> = ({
  x,
  y,
  zIndex = 1,
  children,
}) => {
  return (
    <Motion
      style={{ x: spring(x, { damping: 40 }), y: spring(y, { damping: 40 }) }}
    >
      {({ x, y }) => (
        <div style={{ position: "absolute", left: x, top: y, zIndex }}>
          {children}
        </div>
      )}
    </Motion>
  );
};

export default PosAbsoluteAnimated;
