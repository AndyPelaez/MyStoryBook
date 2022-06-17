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
import { jsxs as _jsxs } from "react/jsx-runtime";
import "./mylabel.css";
export var MyLabel = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? "normal" : _b, allCaps = _a.allCaps, color = _a.color, fontColor = _a.fontColor;
    var text = allCaps && label ? label.toUpperCase() : label;
    return _jsxs("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor } }, { children: [text, " "] }));
};
