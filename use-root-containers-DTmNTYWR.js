import {
    r as e,
    R as r
} from "./index-klX-IjEm.js";
import {
    a as t,
    o as n,
    U as u,
    y as l,
    T as o,
    s,
    b as i,
    l as a,
    C as c
} from "./render-UAkLgEPn.js";
import {
    s as d
} from "./use-outside-click-B7s0MmFf.js";
import {
    r as f
} from "./index-X1TvMjHs.js";
import {
    t as m
} from "./use-disposables-CvOh9Ink.js";
import {
    n as p
} from "./use-owner-CYU9lXCh.js";
import {
    u as v,
    s as h
} from "./hidden-AZzL84Q1.js";

function E(r, n, u, l) {
    let o = t(u);
    e.useEffect((() => {
        function e(e) {
            o.current(e)
        }
        return (r = null != r ? r : window).addEventListener(n, e, l), () => r.removeEventListener(n, e, l)
    }), [r, n, l])
}

function g(r) {
    let t = n(r),
        u = e.useRef(!1);
    e.useEffect((() => (u.current = !1, () => {
        u.current = !0, m((() => {
            u.current && t()
        }))
    })), [t])
}
var C, b = ((C = b || {})[C.Forwards = 0] = "Forwards", C[C.Backwards = 1] = "Backwards", C);

function x() {
    let r = e.useRef(0);
    return d("keydown", (e => {
        "Tab" === e.key && (r.current = e.shiftKey ? 1 : 0)
    }), !0), r
}
let y = e.createContext(!1);

function R(e) {
    return r.createElement(y.Provider, {
        value: e.force
    }, e.children)
}
let T = e.Fragment,
    P = e.Fragment,
    M = e.createContext(null),
    j = e.createContext(null);

function w() {
    let t = e.useContext(j),
        u = e.useRef([]),
        l = n((e => (u.current.push(e), t && t.register(e), () => o(e)))),
        o = n((e => {
            let r = u.current.indexOf(e); - 1 !== r && u.current.splice(r, 1), t && t.unregister(e)
        })),
        s = e.useMemo((() => ({
            register: l,
            unregister: o,
            portals: u
        })), [l, o, u]);
    return [u, e.useMemo((() => function({
        children: e
    }) {
        return r.createElement(j.Provider, {
            value: s
        }, e)
    }), [s])]
}
let N = u((function(r, t) {
        let n = r,
            u = e.useRef(null),
            d = l(o((e => {
                u.current = e
            })), t),
            m = p(u),
            v = function(r) {
                let t = e.useContext(y),
                    n = e.useContext(M),
                    u = p(r),
                    [l, o] = e.useState((() => {
                        if (!t && null !== n || s.isServer) return null;
                        let e = null == u ? void 0 : u.getElementById("headlessui-portal-root");
                        if (e) return e;
                        if (null === u) return null;
                        let r = u.createElement("div");
                        return r.setAttribute("id", "headlessui-portal-root"), u.body.appendChild(r)
                    }));
                return e.useEffect((() => {
                    null !== l && (null != u && u.body.contains(l) || null == u || u.body.appendChild(l))
                }), [l, u]), e.useEffect((() => {
                    t || null !== n && o(n.current)
                }), [n, o, t]), l
            }(u),
            [h] = e.useState((() => {
                var e;
                return s.isServer ? null : null != (e = null == m ? void 0 : m.createElement("div")) ? e : null
            })),
            E = e.useContext(j),
            C = i();
        return a((() => {
            !v || !h || v.contains(h) || (h.setAttribute("data-headlessui-portal", ""), v.appendChild(h))
        }), [v, h]), a((() => {
            if (h && E) return E.register(h)
        }), [E, h]), g((() => {
            var e;
            !v || !h || (h instanceof Node && v.contains(h) && v.removeChild(h), v.childNodes.length <= 0 && (null == (e = v.parentElement) || e.removeChild(v)))
        })), C && v && h ? f.createPortal(c({
            ourProps: {
                ref: d
            },
            theirProps: n,
            defaultTag: T,
            name: "Portal"
        }), h) : null
    })),
    k = u((function(e, t) {
        let {
            target: n,
            ...u
        } = e, o = {
            ref: l(t)
        };
        return r.createElement(M.Provider, {
            value: n
        }, c({
            ourProps: o,
            theirProps: u,
            defaultTag: P,
            name: "Popover.Group"
        }))
    })),
    H = Object.assign(N, {
        Group: k
    });

function L({
    defaultContainers: t = [],
    portals: u,
    mainTreeNodeRef: l
} = {}) {
    var o;
    let s = e.useRef(null != (o = null == l ? void 0 : l.current) ? o : null),
        i = p(s),
        a = n((() => {
            var e, r, n;
            let l = [];
            for (let u of t) null !== u && (u instanceof HTMLElement ? l.push(u) : "current" in u && u.current instanceof HTMLElement && l.push(u.current));
            if (null != u && u.current)
                for (let t of u.current) l.push(t);
            for (let t of null != (e = null == i ? void 0 : i.querySelectorAll("html > *, body > *")) ? e : []) t !== document.body && t !== document.head && t instanceof HTMLElement && "headlessui-portal-root" !== t.id && (t.contains(s.current) || t.contains(null == (n = null == (r = s.current) ? void 0 : r.getRootNode()) ? void 0 : n.host) || l.some((e => t.contains(e))) || l.push(t));
            return l
        }));
    return {
        resolveContainers: a,
        contains: n((e => a().some((r => r.contains(e))))),
        mainTreeNodeRef: s,
        MainTreeNode: e.useMemo((() => function() {
            return null != l ? null : r.createElement(v, {
                features: h.Hidden,
                ref: s
            })
        }), [s, l])
    }
}

function S() {
    let t = e.useRef(null);
    return {
        mainTreeNodeRef: t,
        MainTreeNode: e.useMemo((() => function() {
            return r.createElement(v, {
                features: h.Hidden,
                ref: t
            })
        }), [t])
    }
}
export {
    E,
    L as N,
    g as c,
    w as e,
    R as l,
    x as n,
    b as s,
    H as t,
    S as y
};