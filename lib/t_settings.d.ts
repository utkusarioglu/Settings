import { Book } from "@utkusarioglu/library";
export declare type t_settingsStack = any;
export declare type t_Settings = new (...args: any[]) => {
    get_AllSettings(): Book;
    get_Settings(setting_key: string): t_settingsStack;
};
export declare type t_absoluteFilePath = string;
export declare type t_filename = string;
export declare type t_relativeDirectory = string;
