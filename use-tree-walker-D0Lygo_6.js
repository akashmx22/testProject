import {
    r as e
} from "./index-klX-IjEm.js";
import {
    o as r
} from "./owner-Di38_1KB.js";
import {
    l as t
} from "./render-UAkLgEPn.js";

function n({
    container: n,
    accept: o,
    walk: c,
    enabled: f = !0
}) {
    let u = e.useRef(o),
        i = e.useRef(c);
    e.useEffect((() => {
        u.current = o, i.current = c
    }), [o, c]), t((() => {
        if (!n || !f) return;
        let e = r(n);
        if (!e) return;
        let t = u.current,
            o = i.current,
            c = Object.assign((e => t(e)), {
                acceptNode: t
            }),
            s = e.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, c, !1);
        for (; s.nextNode();) o(s.currentNode)
    }), [n, f, u, i])
}
export {
    n as F
};