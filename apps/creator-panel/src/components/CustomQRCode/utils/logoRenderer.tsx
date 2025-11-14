import { useEffect, useState } from "react";
import { LogoRendererProps } from "../types";

const convertToBase64 = async (fileUrl: string) => {
  const res = await fetch(fileUrl);
  const blob = await res.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export const LogoRenderer: React.FC<LogoRendererProps> = ({
  logo,
  size,
  logoSizeRatio = 0.2,
  mode = "default",
}) => {
  if (!logo) return null;

  // Variables
  const logoSize = size * logoSizeRatio;
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;

  const padding = 6; // adjust as needed
  const circleRadius = logoSize / 2 + padding;

  const [base64Logo, setBase64Logo] = useState<string | null>(null);

  useEffect(() => {
    if (!logo) return;

    convertToBase64(logo).then((data) => {
      setBase64Logo(data as string);
    });
  }, [logo]);

  return (
    <g>
      {mode === "clean" && (
        <circle cx={size / 2} cy={size / 2} r={circleRadius} fill="white" />
      )}
      <image
        href={base64Logo as string}
        x={x}
        y={y}
        width={logoSize}
        height={logoSize}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};
