import {
    r as e
} from "./index-klX-IjEm.js";
import {
    o as t
} from "./render-UAkLgEPn.js";
let r = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function n(e) {
    var t, n;
    let u = null != (t = e.innerText) ? t : "",
        l = e.cloneNode(!0);
    if (!(l instanceof HTMLElement)) return u;
    let i = !1;
    for (let r of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) r.remove(), i = !0;
    let o = i ? null != (n = l.innerText) ? n : "" : u;
    return r.test(o) && (o = o.replace(r, "")), o
}

function u(r) {
    let u = e.useRef(""),
        l = e.useRef("");
    return t((() => {
        let e = r.current;
        if (!e) return "";
        let t = e.innerText;
        if (u.current === t) return l.current;
        let i = function(e) {
            let t = e.getAttribute("aria-label");
            if ("string" == typeof t) return t.trim();
            let r = e.getAttribute("aria-labelledby");
            if (r) {
                let e = r.split(" ").map((e => {
                    let t = document.getElementById(e);
                    if (t) {
                        let e = t.getAttribute("aria-label");
                        return "string" == typeof e ? e.trim() : n(t).trim()
                    }
                    return null
                })).filter(Boolean);
                if (e.length > 0) return e.join(", ")
            }
            return n(e).trim()
        }(e).trim().toLowerCase();
        return u.current = t, l.current = i, i
    }))
}
export {
    u as s
};