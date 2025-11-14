import { BodyShapeType, FunctionArgumentType } from "../types";

export const bodyShapes: Record<BodyShapeType, FunctionArgumentType> = {
  body1: (r, c, cellSize, fill) => (
    <circle
      key={`${r}-${c}`}
      cx={c * cellSize + cellSize / 2} // center X
      cy={r * cellSize + cellSize / 2} // center Y
      r={cellSize / 3} // full size, no spacing
      fill={fill}
    />
  ),
};
