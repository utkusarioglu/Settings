import * as Fs from "fs";
export class M_SettingsFs {
    read_set_AllSettingsFromFile(config_file_relative_directory, config_filename) {
        console.log("read starts");
        const settings_file = config_filename;
        const config_dir = config_file_relative_directory;
        const settings_file_absolute_path = Path.Root + config_dir + Separator.Directory + settings_file;
        const settings = JSON.parse(Fs.readFileSync(settings_file_absolute_path, { encoding: "utf8" })
            .toString().trim());
        console.log("settings retrieved");
        this.set_AllSettings(settings);
        return this;
    }
}
//# sourceMappingURL=m_settings_fs.js.map