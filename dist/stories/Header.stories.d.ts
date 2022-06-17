/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderProps } from "./Header";
declare const _default: ComponentMeta<({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element>;
export default _default;
export declare const LoggedIn: ComponentStory<({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element>;
export declare const LoggedOut: ComponentStory<({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element>;
