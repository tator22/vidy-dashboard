import { ReactNode } from "react";
import { BallShapeType, FunctionArgumentType } from "../types";

// Variables
const originalSize = 100; // SVG viewBox size

interface BallShapeWrapperType {
  row: number;
  col: number;
  cellSize: number;
  module: boolean[][];
  flipArray?: string[];
  children: ReactNode;
}

const BallShapeWrapper = ({
  row,
  col,
  cellSize,
  flipArray,
  children,
}: BallShapeWrapperType) => {
  const shapeSize = cellSize * 3;
  const scale = shapeSize / originalSize;

  const x = col * cellSize;
  const y = row * cellSize;

  // Base transform
  let transform = `translate(${x}, ${y}) scale(${scale})`;

  // Handle flipping
  if (flipArray?.includes("horizontal") && flipArray?.includes("vertical")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, -1) translate(-${originalSize}, -${originalSize})`;
  } else if (flipArray?.includes("horizontal")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(-1, 1) translate(-${originalSize}, 0)`;
  } else if (flipArray?.includes("vertical")) {
    transform = `translate(${x}, ${y}) scale(${scale}, ${scale}) scale(1, -1) translate(0, -${originalSize})`;
  }

  return <g transform={transform.trim()}>{children}</g>;
};

export const ballShapes: Record<BallShapeType, FunctionArgumentType> = {
  ball1: (row, col, cellSize, fill, module, flipArray) => {
    return (
      <BallShapeWrapper
        cellSize={cellSize}
        row={row}
        col={col}
        flipArray={flipArray}
        module={module}
      >
        <path
          d="M83.3333 0H16.6667C7.46192 0 0 7.46192 0 16.6667V83.3333C0 92.5381 7.46192 100 16.6667 100H83.3333C92.5381 100 100 92.5381 100 83.3333V16.6667C100 7.46192 92.5381 0 83.3333 0Z"
          fill={fill}
        />
      </BallShapeWrapper>
    );
  },
};
