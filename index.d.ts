// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../@utkusarioglu/library
//   ../@utkusarioglu/namespace
//   ../@utkusarioglu/state

declare module '@utkusarioglu/settings' {
    export { M_Settings } from "@utkusarioglu/settings/m_settings";
    export { M_SettingsFs } from "@utkusarioglu/settings/m_settings_fs";
}

declare module '@utkusarioglu/settings/m_settings' {
    import { Book } from "@utkusarioglu/library";
    import { M_Namespace } from "@utkusarioglu/namespace";
    import { M_State } from "@utkusarioglu/state";
    import { t_settingsStack } from "@utkusarioglu/settings/t_settings";
    export interface M_Settings extends M_State, M_Namespace {
    }
    export class M_Settings {
        protected get_AllSettings(): Book;
        protected set_AllSettings(settings_stack: t_settingsStack): this;
        protected get_Setting(settings_subproperty: string): t_settingsStack;
        protected has_Setting(setting_key: string): boolean;
        protected check_set_LocalNamespace(): void;
    }
}

declare module '@utkusarioglu/settings/m_settings_fs' {
    import { M_Settings } from "@utkusarioglu/settings/m_settings";
    import { t_filename, t_relativeDirectory } from "@utkusarioglu/settings/t_settings";
    export interface M_SettingsFs extends M_Settings {
    }
    export abstract class M_SettingsFs {
        protected read_set_AllSettingsFromFile(config_file_relative_directory: t_relativeDirectory, config_filename: t_filename): this;
    }
}

declare module '@utkusarioglu/settings/t_settings' {
    import { Book } from "@utkusarioglu/library";
    export type t_settingsStack = any;
    export type t_Settings = new (...args: any[]) => {
        get_AllSettings(): Book;
        get_Settings(setting_key: string): t_settingsStack;
    };
    export type t_absoluteFilePath = string;
    export type t_filename = string;
    export type t_relativeDirectory = string;
}

