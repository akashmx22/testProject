import {
    r as e
} from "./index-klX-IjEm.js";

function t({
    title: t,
    titleId: l,
    ...a
}, r) {
    return e.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": l
    }, a), t ? e.createElement("title", {
        id: l
    }, t) : null, e.createElement("path", {
        fillRule: "evenodd",
        d: "M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z",
        clipRule: "evenodd"
    }))
}
const l = e.forwardRef(t);
export {
    l as F
};