/// <reference types="react" />
import "./CustomInput.css";
export interface CustomInputProps {
    placeholder?: string;
    size?: "small" | "medium" | "large";
    borderSize?: "small" | "medium" | "large";
    roundedSize?: "small" | "medium" | "large";
    borderColor?: string;
    usePlaceholderAnimation: boolean;
}
export declare const CustomInput: ({ placeholder, roundedSize, borderColor, borderSize, size, usePlaceholderAnimation, }: CustomInputProps) => JSX.Element;
