
/* ////////////////////////////////////////////////////////////////////////////
 *
 *	IMPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

/*
 *	COMMON CLASSES
 */
import { Book } from "@utkusarioglu/library";

/*
 *	MIXINS
 */
import { M_Namespace } from "@utkusarioglu/namespace";
import { M_State } from "@utkusarioglu/state";

/*
 *	CONSTANTS
 */
import { C_Settings } from "./c_settings";

/*
 *	DATATYPES
 */
import { t_settingsStack } from "./t_settings";




/* ////////////////////////////////////////////////////////////////////////////
 *
 *	EXPORTS
 *
 * ///////////////////////////////////////////////////////////////////////// */

/**
 * Interface for M_Settings
 */
export interface M_Settings extends M_State, M_Namespace {}



/**
 * Provides management functionality for class settings
 * 
 * @requires M_State, M_Namespace
 *
 * @remarks
 * Service: Settings
 */
export abstract class M_Settings {

/*
 * ======================================================= Boundary 1 =========
 *
 *	DECLARATION
 *
 * ============================================================================
 */

/* --------------------------------------------------------- Use Case ---------
 *	HANDLE SETTINGS
 */

    /**
     * Returns all class settings
     *
     * @remarks
     * Class: M_Settings
     * Service: Settings
     */
    protected get_AllSettings(): Book {

        const settings = this.get_State().get_Var("Settings"); 

        if (settings === undefined) {
            throw new Error(C_Settings.E_CalledBeforeDeclaration);
        }

        return settings;
    }

    /**
     * Sets or overwrites entire settings
     * 
     * @param settings_stack
     *
     * @remarks
     * Class: M_Settings
     * Service: Settings
     */
    protected set_AllSettings(settings_stack: t_settingsStack): this {

        this.get_State()
            .set_Var(
                "Settings",
                new Book(`${this.get_GlobalNamespace()}/Settings`
            )
            .add_BookContent(settings_stack),
        ); 

        // TODO: Local Namespace setting needs a better home
        this.check_set_LocalNamespace();

        return this;
    }



/* ---------------------------------------------------------- Use Case ---------
 *	HANDLE SETTING
 */

    /**
     * Returns speficied class settings
     *
     * @remarks
     * Class: M_Settings
     * Service: Settings
     */
    protected get_Setting(settings_subproperty: string): t_settingsStack {
        return this.get_AllSettings().get_Chapter(settings_subproperty);
    }

    /**
     * Returns true if the settings contain the setting with the specified name
     * 
     * @param setting_key
     *
     * @remarks
     * Class: M_Settings
     * Service: Settings
     */
    protected has_Setting(setting_key: string): boolean {
        return this.get_AllSettings().has_Chapter(setting_key);
    }



/* ---------------------------------------------------------- Use Case ---------
 *	HANDLE LOCALNAMESPACE ASSIGNMENT
 */

    /**
     * Checks if settings contain a setting for LocalNamespace
     * Sets LocalNamespace if available in settings
     *
     * @remarks
     * Class: M_Settings
     * Service: Settings
     */
    protected check_set_LocalNamespace() {
        if (this.has_Setting("LocalNamespace")) {
            this.set_LocalNamespace(this.get_Setting("LocalNamespace"));
        }
    }


}

