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
        d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
        clipRule: "evenodd"
    }))
}
const l = e.forwardRef(t);
export {
    l as F
};