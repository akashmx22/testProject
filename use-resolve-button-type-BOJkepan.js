import {
    r as t
} from "./index-klX-IjEm.js";
import {
    l as e
} from "./render-UAkLgEPn.js";

function r(t) {
    var e;
    if (t.type) return t.type;
    let r = null != (e = t.as) ? e : "button";
    return "string" == typeof r && "button" === r.toLowerCase() ? "button" : void 0
}

function n(n, o) {
    let [u, s] = t.useState((() => r(n)));
    return e((() => {
        s(r(n))
    }), [n.type, n.as]), e((() => {
        u || o.current && o.current instanceof HTMLButtonElement && !o.current.hasAttribute("type") && s("button")
    }), [u, o]), u
}
export {
    n as T
};