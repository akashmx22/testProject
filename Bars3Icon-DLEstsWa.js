import {
    r as e
} from "./index-klX-IjEm.js";

function t({
    title: t,
    titleId: a,
    ...l
}, r) {
    return e.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": a
    }, l), t ? e.createElement("title", {
        id: a
    }, t) : null, e.createElement("path", {
        fillRule: "evenodd",
        d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
        clipRule: "evenodd"
    }))
}
const a = e.forwardRef(t);
export {
    a as F
};