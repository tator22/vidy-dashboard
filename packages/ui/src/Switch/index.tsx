import { ASSET_PATHS } from "@repo/assets";
import { FC, InputHTMLAttributes, LabelHTMLAttributes, useId } from "react";
import { Label } from "../Label";
import "./style.css";

export const Switch: FC<{
  containerProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  uncheckIcon?: string;
  checkedIcon?: string;
}> = ({
  containerProps,
  inputProps,
  label,
  checkedIcon,
  uncheckIcon,
}): JSX.Element => {
  // Hooks
  const id = useId();

  return (
    <label
      {...containerProps}
      htmlFor={id}
      className={`Switch  ${containerProps?.className || ""}`}
      aria-disabled={inputProps?.disabled}
    >
      {label && (
        <Label
          text={label}
          isOptional={!inputProps?.required}
          containerProps={{
            className: "label",
          }}
        />
      )}

      <input
        {...inputProps}
        id={id}
        type="checkbox"
        className={`input ${inputProps?.className || ""}`}
      />

      <img
        className="icon"
        src={
          inputProps?.checked
            ? checkedIcon || ASSET_PATHS?.SVGS?.SWITCH_ON
            : uncheckIcon || ASSET_PATHS?.SVGS?.SWITCH_OFF
        }
        alt={inputProps?.checked ? "switch on" : "switch off"}
      />
    </label>
  );
};
