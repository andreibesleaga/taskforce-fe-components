import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import { Label } from "../label/label";

export const Input = ({
  disabled,
  label,
  secondaryLabel,
  type,
  name,
  size,
  color,
  rounded,
  usePlaceholder,
  loading,
  defaultValue,
  children,
  hasAddons,
  required,
  onChange,
  min,
  max,
  minLength,
  maxLength,
  pattern,
  title,
  step
}) => {
  const inputClassNames = ["input"];
  const fieldClassNames = ["field"];
  const controlClassNames = ["control is-expanded"];
  if (hasAddons) fieldClassNames.push("has-addons");
  if (size) inputClassNames.push(`is-${size}`);
  if (color) inputClassNames.push(`is-${color}`);
  if (rounded) inputClassNames.push("is-rounded");
  if (loading) controlClassNames.push("is-loading");
  const inputClasses = inputClassNames.join(" ");

  return (
    <div className={fieldClassNames.join(" ")}>
      {!usePlaceholder && <Label text={label} />}
      {secondaryLabel && <Label text={secondaryLabel} isSecondary={true} />}
      <div className={controlClassNames.join(" ")}>
        <input
          className={inputClasses}
          type={type}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={usePlaceholder ? label : ""}
          onChange={onChange}
          required={required}
          min={type === "number" && min ? min : void 0}
          max={type === "number" && max ? max : void 0}
          step={type === "number" && step ? step : void 0}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          title={title}
        />
      </div>
      {children}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "tel", "number"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  hasAddons: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  required: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  usePlaceholder: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  min: PropTypes.number,
  max: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  title: PropTypes.string,
  step: PropTypes.number
};

Input.defaultProps = {
  label: "Input",
  type: "text",
  disabled: false,
  loading: false,
  rounded: false,
  usePlaceholder: false,
  required: false
};
