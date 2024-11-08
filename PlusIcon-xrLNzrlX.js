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
        d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
        clipRule: "evenodd"
    }))
}
const l = e.forwardRef(t);

function a({
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
        d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
    }))
}
const r = e.forwardRef(a);
export {
    l as F, r as a
};