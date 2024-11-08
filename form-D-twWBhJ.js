import {
    r as e
} from "./index-klX-IjEm.js";
import {
    o as t
} from "./render-UAkLgEPn.js";

function r(r, n, u) {
    let [o, i] = e.useState(u), s = void 0 !== r, f = e.useRef(s), l = e.useRef(!1), c = e.useRef(!1);
    return !s || f.current || l.current ? !s && f.current && !c.current && (c.current = !0, f.current = s) : (l.current = !0, f.current = s), [s ? r : o, t((e => (s || i(e), null == n ? void 0 : n(e))))]
}

function n(e = {}, t = null, r = []) {
    for (let [n, i] of Object.entries(e)) o(r, u(t, n), i);
    return r
}

function u(e, t) {
    return e ? e + "[" + t + "]" : t
}

function o(e, t, r) {
    if (Array.isArray(r))
        for (let [n, i] of r.entries()) o(e, u(t, n.toString()), i);
    else r instanceof Date ? e.push([t, r.toISOString()]) : "boolean" == typeof r ? e.push([t, r ? "1" : "0"]) : "string" == typeof r ? e.push([t, r]) : "number" == typeof r ? e.push([t, `${r}`]) : null == r ? e.push([t, ""]) : n(r, t, e)
}

function i(e) {
    var t, r;
    let n = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
    if (n) {
        for (let t of n.elements)
            if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) return void t.click();
        null == (r = n.requestSubmit) || r.call(n)
    }
}
export {
    r as T, n as e, i as p
};