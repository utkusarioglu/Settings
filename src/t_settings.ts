
/* ////////////////////////////////////////////////////////////////////////////
 *
 *	IMPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

import { Book } from "@utkusarioglu/library";



/* ////////////////////////////////////////////////////////////////////////////
 *
 *	EXPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

/**
 * Alias for any for denoting class settings
 */
export type t_settingsStack = any;

export type t_Settings = new (...args: any[]) => {
    get_AllSettings(): Book
    get_Settings(setting_key: string): t_settingsStack,
};



/*
 * ======================================================= Boundary 1 =========
 *
 *	STAND IN TYPES
 *
 * ============================================================================
 */

/**
 * Stand in types from Storage service
 */
export type t_absoluteFilePath = string;
export type t_filename = string;
export type t_relativeDirectory = string;