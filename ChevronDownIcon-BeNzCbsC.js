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
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
    }))
}
const l = e.forwardRef(t);
export {
    l as F
};