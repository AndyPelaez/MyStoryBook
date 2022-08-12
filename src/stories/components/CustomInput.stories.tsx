import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomInput } from "../../components/CustomInput";
import {  MyLabelProps } from "../../components/MyLabel";

export default {
    title: "Example/Input",
    component: CustomInput,
    argTypes: {
        size: { control: "select" },
        fontColor:{control:'color'}
    }
} as ComponentMeta<typeof CustomInput>

const Template:ComponentStory<typeof CustomInput> = (args) => <CustomInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    roundedSize: "medium",
    usePlaceholderAnimation: true,
}
// export const AllCaps = Template.bind({});
// AllCaps.args = {
//     size:"normal",
//     allCaps:true
// }
export const Secondary = Template.bind({});
Secondary.args = {
    roundedSize: "medium",
    usePlaceholderAnimation: true,
}
// export const Terciary = Template.bind({});
// Secondary.args = {
//     size: "normal",
//     color:"terciary"
// }