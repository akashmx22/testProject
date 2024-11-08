import {
    U as e,
    C as d
} from "./render-UAkLgEPn.js";
var i, r = ((i = r || {})[i.None = 1] = "None", i[i.Focusable = 2] = "Focusable", i[i.Hidden = 4] = "Hidden", i);
let o = e((function(e, i) {
    var r;
    let {
        features: o = 1,
        ...n
    } = e, t = {
        ref: i,
        "aria-hidden": !(2 & ~o) || (null != (r = n["aria-hidden"]) ? r : void 0),
        hidden: !(4 & ~o) || void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...!(4 & ~o) && !!(2 & ~o) && {
                display: "none"
            }
        }
    };
    return d({
        ourProps: t,
        theirProps: n,
        slot: {},
        defaultTag: "div",
        name: "Hidden"
    })
}));
export {
    r as s, o as u
};