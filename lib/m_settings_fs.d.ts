import { M_Settings } from "./m_settings";
import { t_filename, t_relativeDirectory } from "./t_settings";
export interface M_SettingsFs extends M_Settings {
}
export declare abstract class M_SettingsFs {
    protected read_set_AllSettingsFromFile(config_file_relative_directory: t_relativeDirectory, config_filename: t_filename): this;
}
