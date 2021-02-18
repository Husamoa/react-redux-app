import {withMobileDialog} from "@material-ui/core";

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

    static getDataFromServer() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => {
                return res;
            });
    }
}