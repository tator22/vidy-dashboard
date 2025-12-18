import { CSSProperties, FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link } from "../Link";
import { Text } from "../Text";
import "./style.css";

export const InfoCard: FC<{
  title?: string;
  value?: string;
  children?: ReactNode;
  additionalTitleAsChildren?: ReactNode;
  style?: CSSProperties;
  valueStyle?: CSSProperties;
  isBoolean?: boolean;
  booleanValue?: boolean;
  isLink?: boolean;
  linkValue?: string;
  link?: string;
  isTextWithLink?: boolean;
  linkTarget?: HTMLAttributeAnchorTarget;
}> = ({
  title,
  value,
  children,
  additionalTitleAsChildren,
  style,
  valueStyle,
  isBoolean,
  booleanValue,
  isLink,
  linkValue,
  link,
  isTextWithLink,
  linkTarget,
}) => {
  return (
    <div className="detailCard" style={{ ...style }}>
      <Text
        tag="h6"
        maximumNumberOfLines={1}
        containerProps={{
          className: "description detailCardTitle",
          style: {
            ...valueStyle,
          },
        }}
      >
        {title}
        {additionalTitleAsChildren}
      </Text>
      {!isBoolean && !isLink && !children && (
        <Text
          tag="h6"
          containerProps={{
            className: "description detailCardValue",
            style: {
              ...valueStyle,
            },
          }}
        >
          {value ? value : "-"}{" "}
          {isTextWithLink && (
            <Link
              containerProps={{
                href: link as string,
                className: "description link",
                style: { marginLeft: "0.75rem" },
              }}
            >
              {linkValue}
            </Link>
          )}
        </Text>
      )}
      {children && <span>{children}</span>}
      {isBoolean && (
        <span className="description boolean" style={{ ...valueStyle }}>
          {booleanValue ? "Yes" : "No"}
        </span>
      )}
      {isLink && (
        <Link
          containerProps={{
            href: link as string,
            target: linkTarget,
            className: "description link",
            style: { ...valueStyle },
          }}
        >
          {linkValue ? linkValue : "-"}
        </Link>
      )}
    </div>
  );
};
