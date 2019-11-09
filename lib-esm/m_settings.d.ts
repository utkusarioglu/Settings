import { Book } from "@utkusarioglu/library";
import { M_Namespace } from "@utkusarioglu/namespace";
import { M_State } from "@utkusarioglu/state";
import { t_settingsStack } from "./t_settings";
export interface M_Settings extends M_State, M_Namespace {
}
export declare class M_Settings {
    protected get_AllSettings(): Book;
    protected set_AllSettings(settings_stack: t_settingsStack): this;
    protected get_Setting(settings_subproperty: string): t_settingsStack;
    protected has_Setting(setting_key: string): boolean;
    protected check_set_LocalNamespace(): void;
}
