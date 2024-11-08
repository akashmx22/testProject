import {
    r as e,
    R as t,
    e as n
} from "./index-klX-IjEm.js";
var r = Object.defineProperty,
    o = (e, t, n) => (((e, t, n) => {
        t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    })(e, "symbol" != typeof t ? t + "" : t, n), n);
let a = new class {
        constructor() {
            o(this, "current", this.detect()), o(this, "handoffState", "pending"), o(this, "currentId", 0)
        }
        set(e) {
            this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return "server" === this.current
        }
        get isClient() {
            return "client" === this.current
        }
        detect() {
            return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
        }
        handoff() {
            "pending" === this.handoffState && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return "complete" === this.handoffState
        }
    },
    i = (t, n) => {
        a.isServer ? e.useEffect(t, n) : e.useLayoutEffect(t, n)
    };

function s(t) {
    let n = e.useRef(t);
    return i((() => {
        n.current = t
    }), [t]), n
}
let l = function(e) {
    let n = s(e);
    return t.useCallback(((...e) => n.current(...e)), [n])
};

function f() {
    let t = function() {
            let e = "undefined" == typeof document;
            return "useSyncExternalStore" in n && n.useSyncExternalStore((() => () => {}), (() => !1), (() => !e))
        }(),
        [r, o] = e.useState(a.isHandoffComplete);
    return r && !1 === a.isHandoffComplete && o(!1), e.useEffect((() => {
        !0 !== r && o(!0)
    }), [r]), e.useEffect((() => a.handoff()), []), !t && r
}

function u(e, t, ...n) {
    if (e in t) {
        let r = t[e];
        return "function" == typeof r ? r(...n) : r
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, u), r
}
let c = Symbol();

function d(e, t = !0) {
    return Object.assign(e, {
        [c]: t
    })
}

function p(...t) {
    let n = e.useRef(t);
    e.useEffect((() => {
        n.current = t
    }), [t]);
    let r = l((e => {
        for (let t of n.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
    }));
    return t.every((e => null == e || (null == e ? void 0 : e[c]))) ? void 0 : r
}

function m(...e) {
    return Array.from(new Set(e.flatMap((e => "string" == typeof e ? e.split(" ") : [])))).filter(Boolean).join(" ")
}
var h, y, g = ((y = g || {})[y.None = 0] = "None", y[y.RenderStrategy = 1] = "RenderStrategy", y[y.Static = 2] = "Static", y),
    b = ((h = b || {})[h.Unmount = 0] = "Unmount", h[h.Hidden = 1] = "Hidden", h);

function v({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: o,
    visible: a = !0,
    name: i,
    mergeRefs: s
}) {
    s = null != s ? s : E;
    let l = w(t, e);
    if (a) return j(l, n, r, i, s);
    let f = null != o ? o : 0;
    if (2 & f) {
        let {
            static: e = !1,
            ...t
        } = l;
        if (e) return j(t, n, r, i, s)
    }
    if (1 & f) {
        let {
            unmount: e = !0,
            ...t
        } = l;
        return u(e ? 0 : 1, {
            0: () => null,
            1: () => j({ ...t,
                hidden: !0,
                style: {
                    display: "none"
                }
            }, n, r, i, s)
        })
    }
    return j(l, n, r, i, s)
}

function j(t, n = {}, r, o, a) {
    let {
        as: i = r,
        children: s,
        refName: l = "ref",
        ...f
    } = R(t, ["unmount", "static"]), u = void 0 !== t.ref ? {
        [l]: t.ref
    } : {}, c = "function" == typeof s ? s(n) : s;
    "className" in f && f.className && "function" == typeof f.className && (f.className = f.className(n));
    let d = {};
    if (n) {
        let e = !1,
            t = [];
        for (let [r, o] of Object.entries(n)) "boolean" == typeof o && (e = !0), !0 === o && t.push(r);
        e && (d["data-headlessui-state"] = t.join(" "))
    }
    if (i === e.Fragment && Object.keys(O(f)).length > 0) {
        if (!e.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(f).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
        let t = c.props,
            n = "function" == typeof(null == t ? void 0 : t.className) ? (...e) => m(null == t ? void 0 : t.className(...e), f.className) : m(null == t ? void 0 : t.className, f.className),
            r = n ? {
                className: n
            } : {};
        return e.cloneElement(c, Object.assign({}, w(c.props, O(R(f, ["ref"]))), d, u, {
            ref: a(c.ref, u.ref)
        }, r))
    }
    return e.createElement(i, Object.assign({}, R(f, ["ref"]), i !== e.Fragment && u, i !== e.Fragment && d), c)
}

function S() {
    let t = e.useRef([]),
        n = e.useCallback((e => {
            for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
        }), []);
    return (...e) => {
        if (!e.every((e => null == e))) return t.current = e, n
    }
}

function E(...e) {
    return e.every((e => null == e)) ? void 0 : t => {
        for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
    }
}

function w(...e) {
    if (0 === e.length) return {};
    if (1 === e.length) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
    for (let r in n) Object.assign(t, {
        [r](e, ...t) {
            let o = n[r];
            for (let n of o) {
                if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                n(e, ...t)
            }
        }
    });
    return t
}

function N(t) {
    var n;
    return Object.assign(e.forwardRef(t), {
        displayName: null != (n = t.displayName) ? n : t.name
    })
}

function O(e) {
    let t = Object.assign({}, e);
    for (let n in t) void 0 === t[n] && delete t[n];
    return t
}

function R(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}
export {
    v as C, S as I, g as O, d as T, N as U, s as a, f as b, i as l, l as o, a as s, m as t, u, b as v, O as x, p as y
};