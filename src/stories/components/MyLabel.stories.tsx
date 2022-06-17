import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel, Props } from "../../components/MyLabel";

export default {
    title: "Example/MyLabel",
    component: MyLabel,
    argTypes: {
        size: { control: "select" },
        fontColor:{control:'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    size: "normal",
    allCaps:false
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size:"normal",
    allCaps:true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    color:"secondary"
}
export const Terciary = Template.bind({});
Secondary.args = {
    size: "normal",
    color:"terciary"
}