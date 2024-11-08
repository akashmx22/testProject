import {
    r as e
} from "./index-klX-IjEm.js";
var r = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const t = (t, o) => {
    const s = e.forwardRef((({
        color: s = "currentColor",
        size: i = 24,
        strokeWidth: a = 2,
        absoluteStrokeWidth: n,
        children: l,
        ...c
    }, d) => {
        return e.createElement("svg", {
            ref: d,
            ...r,
            width: i,
            height: i,
            stroke: s,
            strokeWidth: n ? 24 * Number(a) / Number(i) : a,
            className: `lucide lucide-${h=t,h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,
            ...c
        }, [...o.map((([r, t]) => e.createElement(r, t))), ...(Array.isArray(l) ? l : [l]) || []]);
        var h
    }));
    return s.displayName = `${t}`, s
};
export {
    t as c
};