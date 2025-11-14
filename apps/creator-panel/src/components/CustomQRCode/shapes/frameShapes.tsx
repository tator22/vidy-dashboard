import { FrameShapeType, FunctionArgumentType } from "../types";

export const frameShapes: Record<FrameShapeType, FunctionArgumentType> = {
  frame1: (row, col, cellSize, fill = "#000000") => {
    const finderSizePx = cellSize * 7;
    const cornerRadius = finderSizePx * 0.15;
    const strokeWidth = cellSize * 0.8;

    return (
      <g transform={`translate(${col * cellSize}, ${row * cellSize})`}>
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={finderSizePx - strokeWidth}
          height={finderSizePx - strokeWidth}
          rx={cornerRadius}
          ry={cornerRadius}
          stroke={fill}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </g>
    );
  },
};
