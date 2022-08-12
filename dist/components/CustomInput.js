var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./CustomInput.css";
export var CustomInput = function (_a) {
    var placeholder = _a.placeholder, _b = _a.roundedSize, roundedSize = _b === void 0 ? "medium" : _b, _c = _a.borderColor, borderColor = _c === void 0 ? "rgb(229 231 235,1)" : _c, _d = _a.borderSize, borderSize = _d === void 0 ? "medium" : _d, _e = _a.size, size = _e === void 0 ? "medium" : _e, _f = _a.usePlaceholderAnimation, usePlaceholderAnimation = _f === void 0 ? true : _f;
    var labelInitialState = {
        position: "absolute",
        top: size === "medium" ? "4.5%" : size === "large" ? "5%" : "3.5%",
        color: "rgb(75,85,99)",
    };
    var labelUpState = {
        top: "0.5%",
        backgroundColor: "white",
        color: "rgb(31,41,55) ",
    };
    //States
    var _g = useState(labelInitialState), labelStyle = _g[0], setlabelStyle = _g[1];
    var _h = useState(""), value = _h[0], setValue = _h[1];
    //Classes Values
    var roundedClass = "rounded-" +
        (roundedSize === "medium" ? "md" : roundedSize === "large" ? "lg" : "sm");
    var borderWidth = borderSize === "medium" ? "1px" : borderSize === "large" ? "2px" : "0";
    var sizeClass = size === "medium"
        ? "px-3 py-2"
        : size === "large"
            ? "px-4 py-4"
            : "px-3 py-1";
    var handleOnInput = function (inputObject) {
        setValue(inputObject.target.value);
    };
    var handleOnBlur = function () {
        if (usePlaceholderAnimation &&
            labelStyle.top === labelUpState.top &&
            value === "")
            setlabelStyle(__assign({}, labelInitialState));
    };
    var handleOnFocus = function () {
        if (usePlaceholderAnimation && labelStyle.top === labelInitialState.top)
            setlabelStyle(__assign({}, labelUpState));
    };
    return (_jsxs("div", __assign({ className: "input-box" }, { children: [usePlaceholderAnimation && (_jsx("label", __assign({ htmlFor: "customInput", style: __assign({}, labelStyle), className: "ml-3 px-2 absolute pointer-events-none" }, { children: placeholder }))), _jsx("input", { onFocus: handleOnFocus, onBlur: handleOnBlur, onInput: handleOnInput, id: "customInput", placeholder: usePlaceholderAnimation ? undefined : placeholder, type: "text", style: { borderColor: borderColor, borderWidth: borderWidth, width: "100%" }, className: "".concat(roundedClass, " ").concat(sizeClass, " ") +
                    "text-gray-800 font-semibold shadow-sm " })] })));
};
