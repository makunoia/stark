var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import "remixicon/fonts/remixicon.css";
const RemixIcon = (_a) => {
    var { name, className = "" } = _a, otherProps = __rest(_a, ["name", "className"]);
    return React.createElement("i", Object.assign({ className: `ri-${name} ${className}` }, otherProps));
};
export default RemixIcon;
//# sourceMappingURL=RemixIcon.js.map