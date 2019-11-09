"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("@utkusarioglu/library");
const c_settings_1 = require("./c_settings");
class M_Settings {
    get_AllSettings() {
        const settings = this.get_State().get_Var("Settings");
        if (settings === undefined) {
            throw new Error(c_settings_1.C_Settings.E_CalledBeforeDeclaration);
        }
        return settings;
    }
    set_AllSettings(settings_stack) {
        this.get_State()
            .set_Var("Settings", new library_1.Book(`${this.get_GlobalNamespace()}/Settings`)
            .add_BookContent(settings_stack));
        this.check_set_LocalNamespace();
        return this;
    }
    get_Setting(settings_subproperty) {
        return this.get_AllSettings().get_Chapter(settings_subproperty);
    }
    has_Setting(setting_key) {
        return this.get_AllSettings().has_Chapter(setting_key);
    }
    check_set_LocalNamespace() {
        if (this.has_Setting("LocalNamespace")) {
            this.set_LocalNamespace(this.get_Setting("LocalNamespace"));
        }
    }
}
exports.M_Settings = M_Settings;
//# sourceMappingURL=m_settings.js.map