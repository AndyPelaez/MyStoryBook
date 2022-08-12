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
import { jsx as _jsx } from "react/jsx-runtime";
import { CustomInput } from "../../components/CustomInput";
export default {
    title: "Example/Input",
    component: CustomInput,
    argTypes: {
        size: { control: "select" },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return _jsx(CustomInput, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    roundedSize: "medium",
    usePlaceholderAnimation: true,
};
// export const AllCaps = Template.bind({});
// AllCaps.args = {
//     size:"normal",
//     allCaps:true
// }
export var Secondary = Template.bind({});
Secondary.args = {
    roundedSize: "medium",
    usePlaceholderAnimation: true,
};
