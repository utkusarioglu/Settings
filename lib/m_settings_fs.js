"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fs = require("fs");
class M_SettingsFs {
    read_set_AllSettingsFromFile(config_file_relative_directory, config_filename) {
        const settings_file = config_filename;
        const config_dir = config_file_relative_directory;
        const settings_file_absolute_path = Path.Root + config_dir + Separator.Directory + settings_file;
        const settings = JSON.parse(Fs.readFileSync(settings_file_absolute_path, { encoding: "utf8" })
            .toString().trim());
        this.set_AllSettings(settings);
        return this;
    }
}
exports.M_SettingsFs = M_SettingsFs;
//# sourceMappingURL=m_settings_fs.js.map