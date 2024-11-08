import {
    r as e
} from "./index-klX-IjEm.js";

function t({
    title: t,
    titleId: r,
    ...n
}, o) {
    return e.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, n), t ? e.createElement("title", {
        id: r
    }, t) : null, e.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18 18 6M6 6l12 12"
    }))
}
const r = e.forwardRef(t);
export {
    r as F
};