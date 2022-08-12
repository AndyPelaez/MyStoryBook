import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { CSSProperties, FormEvent, useState } from "react";
import "./CustomInput.css";

export interface CustomInputProps {
  placeholder?: string;
  size?: "small" | "medium" | "large";
  borderSize?: "small" | "medium" | "large";
  roundedSize?: "small" | "medium" | "large";
  borderColor?: string;
  // /**
  //  *Usar animación de subir el placeholder
  //  */
  usePlaceholderAnimation: boolean;
}

export const CustomInput = ({
  placeholder,
  roundedSize = "medium",
  borderColor = "rgb(229 231 235,1)",
  borderSize = "medium",
  size = "medium",
  usePlaceholderAnimation = true,
}: CustomInputProps) => {
  const labelInitialState: CSSProperties = {
    position: "absolute",
    top: size === "medium" ? "4.5%" : size === "large" ? "5%" : "3.5%",
    color: "rgb(75,85,99)",
  };
  const labelUpState: CSSProperties = {
    top: "0.5%",
    backgroundColor: "white",
    color: "rgb(31,41,55) ",
  };
  //States
  const [labelStyle, setlabelStyle] =
    useState<CSSProperties>(labelInitialState);
  const [value, setValue] = useState("");

  //Classes Values
  const roundedClass =
    "rounded-" +
    (roundedSize === "medium" ? "md" : roundedSize === "large" ? "lg" : "sm");
  const borderWidth =
    borderSize === "medium" ? "1px" : borderSize === "large" ? "2px" : "0";
  const sizeClass =
    size === "medium"
      ? "px-3 py-2"
      : size === "large"
      ? "px-4 py-4"
      : "px-3 py-1";

  const handleOnInput = (inputObject: FormEvent) => {
    setValue((inputObject.target as any).value);
  };
  const handleOnBlur = () => {
    if (
      usePlaceholderAnimation &&
      labelStyle.top === labelUpState.top &&
      value === ""
    )
      setlabelStyle({
        ...labelInitialState,
      });
  };
  const handleOnFocus = () => {
    if (usePlaceholderAnimation && labelStyle.top === labelInitialState.top)
      setlabelStyle({
        ...labelUpState,
      });
  };
  return (
    <div className="input-box">
      {usePlaceholderAnimation && (
        <label
          htmlFor="customInput"
          style={{ ...labelStyle }}
          className="ml-3 px-2 absolute pointer-events-none"
        >
          {placeholder}
        </label>
      )}
      <input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onInput={handleOnInput}
        id="customInput"
        placeholder={usePlaceholderAnimation ? undefined : placeholder}
        type="text"
        style={{ borderColor, borderWidth, width: "100%" }}
        className={
          `${roundedClass} ${sizeClass} ` +
          "text-gray-800 font-semibold shadow-sm "
        }
      />
    </div>
  );
};
