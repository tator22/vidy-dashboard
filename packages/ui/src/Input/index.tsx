import { FC, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { CounterText } from "../CounterText";
import { ErrorText } from "../ErrorText";
import { HelperText } from "../HelperText";
import { Label } from "../Label";
import "./style.css";
import clsx from "clsx";

export const Input: FC<{
  containerProps?: HTMLAttributes<HTMLDivElement>;
  label?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputFieldBoxProps?: HTMLAttributes<HTMLDivElement>;
  helperText?: string;
  errorText?: string;
  showCounter?: boolean;
  helperTextIcon?: string;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}> = ({
  containerProps,
  label,
  inputProps,
  helperText,
  errorText,
  showCounter,
  helperTextIcon,
  inputFieldBoxProps,
  leftNode,
  rightNode,
}): JSX.Element => {
  return (
    <div
      {...containerProps}
      className={`InputMainContainer ${containerProps?.className || ""}`}
      style={{
        ...containerProps?.style,
        opacity:
          containerProps?.style?.opacity || (inputProps?.disabled ? 0.5 : 1),
      }}
    >
      {label ? (
        <Label
          text={label}
          isOptional={!inputProps?.required}
          containerProps={{ className: "labelContainer" }}
        />
      ) : null}

      <div
        {...inputFieldBoxProps}
        className={clsx("inputFieldBox", inputFieldBoxProps?.className)}
        style={{
          ...inputFieldBoxProps?.style,
          borderColor: errorText ? "rgb(var(--error))" : "",
        }}
      >
        {leftNode}
        <input
          {...inputProps}
          className={`input ${inputProps?.className || ""}`}
          style={{
            ...inputProps?.style,
            // borderColor: errorText ? "rgb(var(--error))" : "",
          }}
        />
        {rightNode}
      </div>

      {errorText || showCounter ? (
        <div className="errorTextAndCounterContainer">
          {errorText ? (
            <ErrorText
              text={errorText}
              containerProps={{ className: "errorText" }}
            />
          ) : (
            <div />
          )}

          {showCounter ? (
            <CounterText
              value={inputProps?.value}
              maximumCharacters={inputProps?.maxLength}
              containerProps={{
                className: "counterText",
                style: {
                  width: !errorText ? "100%" : "unset",
                },
              }}
            />
          ) : null}
        </div>
      ) : null}
      {helperText ? (
        <HelperText
          icon={helperTextIcon}
          text={helperText}
          containerProps={{ className: "helperText" }}
        />
      ) : null}
    </div>
  );
};
