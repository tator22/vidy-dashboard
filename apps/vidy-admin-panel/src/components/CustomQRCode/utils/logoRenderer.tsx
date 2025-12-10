import { LogoRendererProps } from "../types";

export const LogoRenderer: React.FC<LogoRendererProps> = ({
  logo,
  size,
  logoSizeRatio = 0.2,
  mode = "default",
  color,
  isDefaultLogo,
}) => {
  if (!logo) return null;

  const logoSize = size * logoSizeRatio;
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;

  return (
    <>
      {mode === "clean" && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={logoSize / 1.45}
          fill="#ffffff"
        />
      )}
      {isDefaultLogo ? (
        <svg
          width={logoSize}
          height={logoSize}
          viewBox="0 0 46 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          x={x}
          y={y}
        >
          <path
            d="M8.16241 1.10246C3.65462 -1.48327 0 0.634993 0 5.82994V44.1664C0 49.3665 3.65462 51.4821 8.16241 48.8988L41.6704 29.6822C46.1797 27.0955 46.1797 22.9048 41.6704 20.3187L8.16241 1.10246Z"
            fill={color}
          />
        </svg>
      ) : (
        <image
          href={logo}
          x={x}
          y={y}
          width={logoSize}
          height={logoSize}
          preserveAspectRatio="xMidYMid meet"
        />
      )}
    </>
  );
};
