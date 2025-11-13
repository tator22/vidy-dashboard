export type BodyShapeType = "body1";
export type FrameShapeType = "frame1";
export type BallShapeType = "ball1";
export type BackgroundType = "none";
export type FlipDirection = "horizontal" | "vertical";
export type PositionType = "topLeft" | "topRight" | "bottomLeft";

export type FindingPostingType = {
  row: number;
  col: number;
  eyeColor: string;
  ballColor: string;
};

export interface LogoRendererProps {
  logo: string;
  size: number;
  logoSizeRatio?: number;
  mode?: "default" | "clean";
}

export type FunctionArgumentType = (
  r: number,
  c: number,
  cellSize: number,
  fill: string,
  modules: boolean[][],
  flipArray?: FlipDirection[] | undefined
) => JSX.Element;

export type BackgroundFunctionArgumentType = (
  fill: string,
  backgroundColor?: string
) => JSX.Element;

export interface QRMonkeyConfig {
  topName?: string;
  bottomName?: string;
  body: BodyShapeType;
  frame: FrameShapeType;
  ball: BallShapeType;
  bodyColor: string;
  bgColor: string;
  gradientColor1: string;
  gradientColor2: string;
  gradientType: "linear" | "radial";
  gradientOnEyes: "true" | "false";
  logo: string;
  logoMode: "default" | "clean";
  frameFlips: Record<PositionType, FlipDirection[]>;
  ballFlips: Record<PositionType, FlipDirection[]>;
  frameColors: Record<PositionType, string>;
  ballColors: Record<PositionType, string>;
  background: {
    type: BackgroundType;
    fill?: string;
    qrSizeScale: number;
    backgroundColor?: string;
  };
  border?: {
    isBorder?: boolean;
    borderColor?: string;
    borderWidthMultiplier: number;
    borderRadius?: string;
    isAddFrame?: boolean;
    frameType?: "circle" | "square";
  };
}

export interface QRDataType {
  value: string;
  config: QRMonkeyConfig;
}

export interface CustomQRCodeProps {
  value: string;
  size?: number;
  config: QRMonkeyConfig;
}
