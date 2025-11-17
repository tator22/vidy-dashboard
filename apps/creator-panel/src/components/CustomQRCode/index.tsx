import React from "react";
import { backgrounds } from "./shapes/backgroundShapes";
import { ballShapes } from "./shapes/ballShapes";
import { bodyShapes } from "./shapes/bodyShapes";
import { frameShapes } from "./shapes/frameShapes";
import styles from "./style.module.css";
import { QRMonkeyConfig } from "./types";
import { generateMatrix } from "./utils/generateMatrix";
import { GradientDefs } from "./utils/gradientDefs";
import { finderSize, finderZoneType } from "./utils/isFinder";
import { LogoRenderer } from "./utils/logoRenderer";
import { getColor, getFlipDirections } from "./utils/qrRelatedFunctions";

interface CustomQRCodeProps {
  value: string;
  size?: number;
  config: QRMonkeyConfig;
}

export const CustomQRCode: React.FC<CustomQRCodeProps> = ({
  value,
  size = 100,
  config,
}) => {
  const qrSizeScale = config.background.qrSizeScale;
  const qrSize = size * qrSizeScale;
  const { modules, count } = generateMatrix(value, "H");
  const cellSize = qrSize / count;

  // Fill colors
  const bodyFill =
    config.gradientColor1 && config.gradientColor2
      ? "url(#bodyGradient)"
      : config.bodyColor;

  const eyeFill = (eyeColor: string) =>
    config.gradientColor1 &&
    config.gradientColor2 &&
    config.gradientOnEyes === "true"
      ? "url(#eyeGradient)"
      : eyeColor;

  const ballFill = (ballColor: string) =>
    config.gradientColor1 &&
    config.gradientColor2 &&
    config.gradientOnEyes === "true"
      ? "url(#eyeGradient)"
      : ballColor;

  // Finder positions (3 corners)
  const finderPositions = [
    { row: 0, col: 0, position: "topLeft" },
    { row: 0, col: count - finderSize, position: "topRight" },
    { row: count - finderSize, col: 0, position: "bottomLeft" },
  ];

  return (
    <div className={styles.renderQrCodeBody}>
      {/* Render Background */}
      {qrSizeScale === 1
        ? null
        : backgrounds[config.background.type](
            String(config.background.fill),
            String(config.background.backgroundColor),
            config.background.isAddFrame
          )}

      {config.background?.isAddFrame &&
      config.background.type === "borderSquare" ? (
        <>
          <p className={styles.topName}>{config.topName}</p>
          <p className={styles.bottomName}>{config.bottomName}</p>
        </>
      ) : null}

      {config.background?.isAddFrame &&
      config.background.type === "borderCircle" ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          className={styles.bandSvg}
        >
          <defs>
            <path
              id="topArc"
              d="M 43 250 A 200 200 0 0 1 450 250"
              fill="none"
            />

            <path
              id="bottomArc"
              d="M 41 260 A 200 200 0 0 0 460 270"
              fill="none"
            />
          </defs>

          <text className={styles.topNameSvg} fontSize={"30px"} fill="white">
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              {config.topName}
            </textPath>
          </text>

          <text className={styles.bottomNameSvg} fontSize={"30px"} fill="white">
            <textPath
              href="#bottomArc"
              startOffset="50%"
              textAnchor="middle"
              fontSize={"inherit"}
            >
              {config.bottomName}
            </textPath>
          </text>
        </svg>
      ) : null}

      <div className={styles.qrContainer}>
        <svg
          width={qrSize}
          height={qrSize}
          viewBox={`0 0 ${qrSize} ${qrSize}`}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          style={{
            backgroundColor: ["borderCircle"].includes(config.background.type)
              ? "transparent"
              : config.bgColor,
          }}
          className={styles.mainQrCodeContainer}
        >
          {/* Gradients */}
          <GradientDefs
            gradients={[
              ...(config.gradientColor1 && config.gradientColor2
                ? [
                    {
                      id: "bodyGradient",
                      color1: config.gradientColor1,
                      color2: config.gradientColor2,
                      type: config.gradientType,
                    },
                  ]
                : []),
              ...(config.gradientColor1 &&
              config.gradientColor2 &&
              config.gradientOnEyes === "true"
                ? [
                    {
                      id: "eyeGradient",
                      color1: config.gradientColor1,
                      color2: config.gradientColor2,
                      type: config.gradientType,
                    },
                  ]
                : []),
            ]}
          />

          {/* Render QR modules */}
          {modules.map((row, r) =>
            row.map((isDark, c) => {
              if (!isDark) return null;

              const finderIndex = finderPositions.findIndex(
                (pos) =>
                  r >= pos.row &&
                  r < pos.row + finderSize &&
                  c >= pos.col &&
                  c < pos.col + finderSize
              );

              if (finderIndex >= 0) {
                const pos = finderPositions[finderIndex];
                const zoneType = finderZoneType(r, c, pos.row, pos.col);

                if (zoneType === "frame") {
                  if (r === pos.row && c === pos.col) {
                    const frameColor = getColor({
                      finderIndex,
                      config,
                      target: "frameColors",
                      defaultColor: "#000000",
                    });
                    const flipArray = getFlipDirections({
                      finderIndex,
                      config,
                      target: "frameFlips",
                    });

                    return frameShapes[config.frame](
                      r,
                      c,
                      cellSize,
                      eyeFill(frameColor),
                      modules,
                      flipArray
                    );
                  }
                  return null;
                }

                if (zoneType === "ball") {
                  if (r === pos.row + 2 && c === pos.col + 2) {
                    // Center of 3x3 ball zone
                    const ballColor = getColor({
                      finderIndex,
                      config,
                      target: "ballColors",
                      defaultColor: "#000000",
                    });
                    const flipArray = getFlipDirections({
                      finderIndex,
                      config,
                      target: "ballFlips",
                    });

                    return ballShapes[config.ball](
                      r,
                      c,
                      cellSize,
                      ballFill(ballColor),
                      modules,
                      flipArray
                    );
                  }
                  return null;
                }

                return null;
              }

              // Body cell
              return bodyShapes[config.body](
                r,
                c,
                cellSize,
                bodyFill,
                modules,
                []
              );
            })
          )}

          {/* Logo */}
          {config.logo && (
            <LogoRenderer
              logo={config.logo}
              size={qrSize}
              logoSizeRatio={0.2}
              mode={config.logoMode}
              color={config.ballColors.bottomLeft as string}
              isDefaultLogo={config.isDefaultLogo}
            />
          )}
        </svg>
      </div>
    </div>
  );
};
