export default class Utils {
    static getClassName(baseName = null, prefix = null) {
        let className = "";
        if (prefix) {
            className += prefix;
        }

        if (baseName) {
            className += baseName;
        }

        return className;
    }
}