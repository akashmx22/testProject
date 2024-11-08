import {
    r as e,
    R as t
} from "./index-klX-IjEm.js";
import {
    o as r,
    p as n
} from "./use-disposables-CvOh9Ink.js";
import {
    l,
    u as i,
    a,
    O as s,
    U as u,
    y as o,
    v as c,
    b as d,
    o as f,
    t as v,
    C as m
} from "./render-UAkLgEPn.js";
import {
    s as p,
    d as h,
    u as b
} from "./open-closed-DP-48t2G.js";

function g() {
    let t = e.useRef(!1);
    return l((() => (t.current = !0, () => {
        t.current = !1
    })), []), t
}

function E(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function T(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function F(e = "") {
    return e.split(/\s+/).filter((e => e.length > 1))
}
let C = e.createContext(null);
C.displayName = "TransitionContext";
var w, R = ((w = R || {}).Visible = "visible", w.Hidden = "hidden", w);
let L = e.createContext(null);

function S(e) {
    return "children" in e ? S(e.children) : e.current.filter((({
        el: e
    }) => null !== e.current)).filter((({
        state: e
    }) => "visible" === e)).length > 0
}

function x(t, r) {
    let l = a(t),
        s = e.useRef([]),
        u = g(),
        o = n(),
        d = f(((e, t = c.Hidden) => {
            let r = s.current.findIndex((({
                el: t
            }) => t === e)); - 1 !== r && (i(t, {
                [c.Unmount]() {
                    s.current.splice(r, 1)
                },
                [c.Hidden]() {
                    s.current[r].state = "hidden"
                }
            }), o.microTask((() => {
                var e;
                !S(s) && u.current && (null == (e = l.current) || e.call(l))
            })))
        })),
        v = f((e => {
            let t = s.current.find((({
                el: t
            }) => t === e));
            return t ? "visible" !== t.state && (t.state = "visible") : s.current.push({
                el: e,
                state: "visible"
            }), () => d(e, c.Unmount)
        })),
        m = e.useRef([]),
        p = e.useRef(Promise.resolve()),
        h = e.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        b = f(((e, t, n) => {
            m.current.splice(0), r && (r.chains.current[t] = r.chains.current[t].filter((([t]) => t !== e))), null == r || r.chains.current[t].push([e, new Promise((e => {
                m.current.push(e)
            }))]), null == r || r.chains.current[t].push([e, new Promise((e => {
                Promise.all(h.current[t].map((([e, t]) => t))).then((() => e()))
            }))]), "enter" === t ? p.current = p.current.then((() => null == r ? void 0 : r.wait.current)).then((() => n(t))) : n(t)
        })),
        E = f(((e, t, r) => {
            Promise.all(h.current[t].splice(0).map((([e, t]) => t))).then((() => {
                var e;
                null == (e = m.current.shift()) || e()
            })).then((() => r(t)))
        }));
    return e.useMemo((() => ({
        children: s,
        register: v,
        unregister: d,
        onStart: b,
        onStop: E,
        wait: p,
        chains: h
    })), [v, d, s, b, E, h, p])
}

function P() {}
L.displayName = "NestingContext";
let N = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function y(e) {
    var t;
    let r = {};
    for (let n of N) r[n] = null != (t = e[n]) ? t : P;
    return r
}
let O = s.RenderStrategy,
    j = u((function(r, n) {
        let {
            show: i,
            appear: a = !1,
            unmount: s = !0,
            ...u
        } = r, c = e.useRef(null), v = o(c, n);
        d();
        let p = b();
        if (void 0 === i && null !== p && (i = (p & h.Open) === h.Open), ![!0, !1].includes(i)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
        let [g, E] = e.useState(i ? "visible" : "hidden"), T = x((() => {
            E("hidden")
        })), [F, w] = e.useState(!0), R = e.useRef([i]);
        l((() => {
            !1 !== F && R.current[R.current.length - 1] !== i && (R.current.push(i), w(!1))
        }), [R, i]);
        let P = e.useMemo((() => ({
            show: i,
            appear: a,
            initial: F
        })), [i, a, F]);
        e.useEffect((() => {
            if (i) E("visible");
            else if (S(T)) {
                let e = c.current;
                if (!e) return;
                let t = e.getBoundingClientRect();
                0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && E("hidden")
            } else E("hidden")
        }), [i, T]);
        let N = {
                unmount: s
            },
            y = f((() => {
                var e;
                F && w(!1), null == (e = r.beforeEnter) || e.call(r)
            })),
            j = f((() => {
                var e;
                F && w(!1), null == (e = r.beforeLeave) || e.call(r)
            }));
        return t.createElement(L.Provider, {
            value: T
        }, t.createElement(C.Provider, {
            value: P
        }, m({
            ourProps: { ...N,
                as: e.Fragment,
                children: t.createElement(k, {
                    ref: v,
                    ...N,
                    ...u,
                    beforeEnter: y,
                    beforeLeave: j
                })
            },
            theirProps: {},
            defaultTag: e.Fragment,
            features: O,
            visible: "visible" === g,
            name: "Transition"
        })))
    })),
    k = u((function(s, u) {
        var b, w;
        let {
            beforeEnter: R,
            afterEnter: P,
            beforeLeave: N,
            afterLeave: j,
            enter: k,
            enterFrom: H,
            enterTo: U,
            entered: A,
            leave: D,
            leaveFrom: B,
            leaveTo: M,
            ...V
        } = s, q = e.useRef(null), I = o(q, u), W = null == (b = V.unmount) || b ? c.Unmount : c.Hidden, {
            show: z,
            appear: G,
            initial: J
        } = function() {
            let t = e.useContext(C);
            if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
            return t
        }(), [K, Q] = e.useState(z ? "visible" : "hidden"), X = function() {
            let t = e.useContext(L);
            if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
            return t
        }(), {
            register: Y,
            unregister: Z
        } = X;
        e.useEffect((() => Y(q)), [Y, q]), e.useEffect((() => {
            if (W === c.Hidden && q.current) return z && "visible" !== K ? void Q("visible") : i(K, {
                hidden: () => Z(q),
                visible: () => Y(q)
            })
        }), [K, q, Y, Z, z, W]);
        let $ = a({
                base: F(V.className),
                enter: F(k),
                enterFrom: F(H),
                enterTo: F(U),
                entered: F(A),
                leave: F(D),
                leaveFrom: F(B),
                leaveTo: F(M)
            }),
            _ = function(t) {
                let r = e.useRef(y(t));
                return e.useEffect((() => {
                    r.current = y(t)
                }), [t]), r
            }({
                beforeEnter: R,
                afterEnter: P,
                beforeLeave: N,
                afterLeave: j
            }),
            ee = d();
        e.useEffect((() => {
            if (ee && "visible" === K && null === q.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
        }), [q, K, ee]);
        let te = J && !G,
            re = G && z && J,
            ne = (() => !ee || te ? "idle" : z ? "enter" : "leave")(),
            le = function(t = 0) {
                let [r, n] = e.useState(t), l = g(), i = e.useCallback((e => {
                    l.current && n((t => t | e))
                }), [r, l]), a = e.useCallback((e => Boolean(r & e)), [r]), s = e.useCallback((e => {
                    l.current && n((t => t & ~e))
                }), [n, l]), u = e.useCallback((e => {
                    l.current && n((t => t ^ e))
                }), [n]);
                return {
                    flags: r,
                    addFlag: i,
                    hasFlag: a,
                    removeFlag: s,
                    toggleFlag: u
                }
            }(0),
            ie = f((e => i(e, {
                enter: () => {
                    le.addFlag(h.Opening), _.current.beforeEnter()
                },
                leave: () => {
                    le.addFlag(h.Closing), _.current.beforeLeave()
                },
                idle: () => {}
            }))),
            ae = f((e => i(e, {
                enter: () => {
                    le.removeFlag(h.Opening), _.current.afterEnter()
                },
                leave: () => {
                    le.removeFlag(h.Closing), _.current.afterLeave()
                },
                idle: () => {}
            }))),
            se = x((() => {
                Q("hidden"), Z(q)
            }), X),
            ue = e.useRef(!1);
        ! function({
            immediate: e,
            container: t,
            direction: s,
            classes: u,
            onStart: o,
            onStop: c
        }) {
            let d = g(),
                f = n(),
                v = a(s);
            l((() => {
                e && (v.current = "enter")
            }), [e]), l((() => {
                let e = r();
                f.add(e.dispose);
                let n = t.current;
                if (n && "idle" !== v.current && d.current) return e.dispose(), o.current(v.current), e.add(function(e, t, n, l) {
                    let a = n ? "enter" : "leave",
                        s = r(),
                        u = void 0 !== l ? function(e) {
                            let t = {
                                called: !1
                            };
                            return (...r) => {
                                if (!t.called) return t.called = !0, e(...r)
                            }
                        }(l) : () => {};
                    "enter" === a && (e.removeAttribute("hidden"), e.style.display = "");
                    let o = i(a, {
                            enter: () => t.enter,
                            leave: () => t.leave
                        }),
                        c = i(a, {
                            enter: () => t.enterTo,
                            leave: () => t.leaveTo
                        }),
                        d = i(a, {
                            enter: () => t.enterFrom,
                            leave: () => t.leaveFrom
                        });
                    return T(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), E(e, ...t.base, ...o, ...d), s.nextFrame((() => {
                        T(e, ...t.base, ...o, ...d), E(e, ...t.base, ...o, ...c),
                            function(e, t) {
                                let n = r();
                                if (!e) return n.dispose;
                                let {
                                    transitionDuration: l,
                                    transitionDelay: i
                                } = getComputedStyle(e), [a, s] = [l, i].map((e => {
                                    let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                    return t
                                })), u = a + s;
                                if (0 !== u) {
                                    n.group((r => {
                                        r.setTimeout((() => {
                                            t(), r.dispose()
                                        }), u), r.addEventListener(e, "transitionrun", (e => {
                                            e.target === e.currentTarget && r.dispose()
                                        }))
                                    }));
                                    let r = n.addEventListener(e, "transitionend", (e => {
                                        e.target === e.currentTarget && (t(), r())
                                    }))
                                } else t();
                                n.add((() => t())), n.dispose
                            }(e, (() => (T(e, ...t.base, ...o), E(e, ...t.base, ...t.entered), u())))
                    })), s.dispose
                }(n, u.current, "enter" === v.current, (() => {
                    e.dispose(), c.current(v.current)
                }))), e.dispose
            }), [s])
        }({
            immediate: re,
            container: q,
            classes: $,
            direction: ne,
            onStart: a((e => {
                ue.current = !0, se.onStart(q, e, ie)
            })),
            onStop: a((e => {
                ue.current = !1, se.onStop(q, e, ae), "leave" === e && !S(se) && (Q("hidden"), Z(q))
            }))
        });
        let oe = V,
            ce = {
                ref: I
            };
        return re ? oe = { ...oe,
            className: v(V.className, ...$.current.enter, ...$.current.enterFrom)
        } : ue.current && (oe.className = v(V.className, null == (w = q.current) ? void 0 : w.className), "" === oe.className && delete oe.className), t.createElement(L.Provider, {
            value: se
        }, t.createElement(p, {
            value: i(K, {
                visible: h.Open,
                hidden: h.Closed
            }) | le.flags
        }, m({
            ourProps: ce,
            theirProps: oe,
            defaultTag: "div",
            features: O,
            visible: "visible" === K,
            name: "Transition.Child"
        })))
    })),
    H = u((function(r, n) {
        let l = null !== e.useContext(C),
            i = null !== b();
        return t.createElement(t.Fragment, null, !l && i ? t.createElement(j, {
            ref: n,
            ...r
        }) : t.createElement(k, {
            ref: n,
            ...r
        }))
    })),
    U = Object.assign(j, {
        Child: H,
        Root: j
    });
export {
    g as f, U as q
};