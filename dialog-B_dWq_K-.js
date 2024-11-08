import {
    r as e,
    R as t,
    e as n
} from "./index-klX-IjEm.js";
import {
    p as r,
    t as o,
    o as a
} from "./use-disposables-CvOh9Ink.js";
import {
    o as l,
    U as i,
    y as u,
    b as s,
    u as c,
    C as d,
    l as f,
    O as p
} from "./render-UAkLgEPn.js";
import {
    n as m,
    s as g,
    c as v,
    E as h,
    e as E,
    N as w,
    l as b,
    t as y
} from "./use-root-containers-DTmNTYWR.js";
import {
    f as T
} from "./transition-8lqKkFqB.js";
import {
    n as L
} from "./use-owner-CYU9lXCh.js";
import {
    u as D,
    s as S
} from "./hidden-AZzL84Q1.js";
import {
    O as R,
    M as P,
    a as C,
    N as k,
    t as O,
    y as M
} from "./use-outside-click-B7s0MmFf.js";
import {
    I as F,
    o as A,
    r as j
} from "./keyboard-DOoxlA9V.js";
import {
    u as B,
    d as H
} from "./open-closed-DP-48t2G.js";
import {
    G as x,
    w as I
} from "./description-CB07AjJP.js";

function N(t, n) {
    let r = e.useRef([]),
        o = l(t);
    e.useEffect((() => {
        let e = [...r.current];
        for (let [t, a] of n.entries())
            if (r.current[t] !== a) {
                let t = o(n, e);
                return r.current = n, t
            }
    }), [o, ...n])
}
let W = [];

function Y(e) {
    if (!e) return new Set;
    if ("function" == typeof e) return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}! function() {
    function e() {
        "loading" !== document.readyState && ((() => {
            function e(e) {
                e.target instanceof HTMLElement && e.target !== document.body && W[0] !== e.target && (W.unshift(e.target), W = W.filter((e => null != e && e.isConnected)), W.splice(10))
            }
            window.addEventListener("click", e, {
                capture: !0
            }), window.addEventListener("mousedown", e, {
                capture: !0
            }), window.addEventListener("focus", e, {
                capture: !0
            }), document.body.addEventListener("click", e, {
                capture: !0
            }), document.body.addEventListener("mousedown", e, {
                capture: !0
            }), document.body.addEventListener("focus", e, {
                capture: !0
            })
        })(), document.removeEventListener("DOMContentLoaded", e))
    }
    "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", e), e())
}();
var $, V = (($ = V || {})[$.None = 1] = "None", $[$.InitialFocus = 2] = "InitialFocus", $[$.TabLock = 4] = "TabLock", $[$.FocusLock = 8] = "FocusLock", $[$.RestoreFocus = 16] = "RestoreFocus", $[$.All = 30] = "All", $);
let _ = i((function(n, a) {
        let i = e.useRef(null),
            f = u(i, a),
            {
                initialFocus: p,
                containers: E,
                features: w = 30,
                ...b
            } = n;
        s() || (w = 1);
        let y = L(i);
        ! function({
            ownerDocument: t
        }, n) {
            let r = function(t = !0) {
                let n = e.useRef(W.slice());
                return N((([e], [t]) => {
                    !0 === t && !1 === e && o((() => {
                        n.current.splice(0)
                    })), !1 === t && !0 === e && (n.current = W.slice())
                }), [t, W, n]), l((() => {
                    var e;
                    return null != (e = n.current.find((e => null != e && e.isConnected))) ? e : null
                }))
            }(n);
            N((() => {
                n || (null == t ? void 0 : t.activeElement) === (null == t ? void 0 : t.body) && C(r())
            }), [n]), v((() => {
                n && C(r())
            }))
        }({
            ownerDocument: y
        }, Boolean(16 & w));
        let O = function({
            ownerDocument: t,
            container: n,
            initialFocus: r
        }, a) {
            let l = e.useRef(null),
                i = T();
            return N((() => {
                if (!a) return;
                let e = n.current;
                e && o((() => {
                    if (!i.current) return;
                    let n = null == t ? void 0 : t.activeElement;
                    if (null != r && r.current) {
                        if ((null == r ? void 0 : r.current) === n) return void(l.current = n)
                    } else if (e.contains(n)) return void(l.current = n);
                    null != r && r.current ? C(r.current) : (R(e, P.First), k.Error), l.current = null == t ? void 0 : t.activeElement
                }))
            }), [a]), l
        }({
            ownerDocument: y,
            container: i,
            initialFocus: p
        }, Boolean(2 & w));
        ! function({
            ownerDocument: e,
            container: t,
            containers: n,
            previousActiveElement: r
        }, o) {
            let a = T();
            h(null == e ? void 0 : e.defaultView, "focus", (e => {
                if (!o || !a.current) return;
                let l = Y(n);
                t.current instanceof HTMLElement && l.add(t.current);
                let i = r.current;
                if (!i) return;
                let u = e.target;
                u && u instanceof HTMLElement ? q(l, u) ? (r.current = u, C(u)) : (e.preventDefault(), e.stopPropagation(), C(i)) : C(r.current)
            }), !0)
        }({
            ownerDocument: y,
            container: i,
            containers: E,
            previousActiveElement: O
        }, Boolean(8 & w));
        let M = m(),
            F = l((e => {
                let t = i.current;
                t && c(M.current, {
                    [g.Forwards]: () => {
                        R(t, P.First, {
                            skipElements: [e.relatedTarget]
                        })
                    },
                    [g.Backwards]: () => {
                        R(t, P.Last, {
                            skipElements: [e.relatedTarget]
                        })
                    }
                })
            })),
            A = r(),
            j = e.useRef(!1),
            B = {
                ref: f,
                onKeyDown(e) {
                    "Tab" == e.key && (j.current = !0, A.requestAnimationFrame((() => {
                        j.current = !1
                    })))
                },
                onBlur(e) {
                    let t = Y(E);
                    i.current instanceof HTMLElement && t.add(i.current);
                    let n = e.relatedTarget;
                    n instanceof HTMLElement && "true" !== n.dataset.headlessuiFocusGuard && (q(t, n) || (j.current ? R(i.current, c(M.current, {
                        [g.Forwards]: () => P.Next,
                        [g.Backwards]: () => P.Previous
                    }) | P.WrapAround, {
                        relativeTo: e.target
                    }) : e.target instanceof HTMLElement && C(e.target)))
                }
            };
        return t.createElement(t.Fragment, null, Boolean(4 & w) && t.createElement(D, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: F,
            features: S.Focusable
        }), d({
            ourProps: B,
            theirProps: b,
            defaultTag: "div",
            name: "FocusTrap"
        }), Boolean(4 & w) && t.createElement(D, {
            as: "button",
            type: "button",
            "data-headlessui-focus-guard": !0,
            onFocus: F,
            features: S.Focusable
        }))
    })),
    U = Object.assign(_, {
        features: V
    });

function q(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
const G = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    {
        useState: z,
        useEffect: K,
        useLayoutEffect: Z,
        useDebugValue: J
    } = n;

function Q(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const e = t();
        return !G(n, e)
    } catch {
        return !0
    }
}
const X = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, n) {
        return t()
    } : function(e, t, n) {
        const r = t(),
            [{
                inst: o
            }, a] = z({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            });
        return Z((() => {
            o.value = r, o.getSnapshot = t, Q(o) && a({
                inst: o
            })
        }), [e, r, t]), K((() => (Q(o) && a({
            inst: o
        }), e((() => {
            Q(o) && a({
                inst: o
            })
        })))), [e]), J(r), r
    },
    ee = "useSyncExternalStore" in n ? n.useSyncExternalStore : X;

function te() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = (null != (n = t.defaultView) ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                o = r.clientWidth - r.offsetWidth,
                a = e - o;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}

function ne(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let re = function(e, t) {
    let n = new Map,
        r = new Set;
    return {
        getSnapshot: () => n,
        subscribe: e => (r.add(e), () => r.delete(e)),
        dispatch(e, ...o) {
            let a = t[e].call(n, ...o);
            a && (n = a, r.forEach((e => e())))
        }
    }
}(0, {
    PUSH(e, t) {
        var n;
        let r = null != (n = this.get(e)) ? n : {
            doc: e,
            count: 0,
            d: a(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: ne(n)
            },
            o = [O() ? {
                before({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    function r(e) {
                        return n.containers.flatMap((e => e())).some((t => t.contains(e)))
                    }
                    t.microTask((() => {
                        var n;
                        if ("auto" !== window.getComputedStyle(e.documentElement).scrollBehavior) {
                            let n = a();
                            n.style(e.documentElement, "scrollBehavior", "auto"), t.add((() => t.microTask((() => n.dispose()))))
                        }
                        let o = null != (n = window.scrollY) ? n : window.pageYOffset,
                            l = null;
                        t.addEventListener(e, "click", (t => {
                            if (t.target instanceof HTMLElement) try {
                                let n = t.target.closest("a");
                                if (!n) return;
                                let {
                                    hash: o
                                } = new URL(n.href), a = e.querySelector(o);
                                a && !r(a) && (l = a)
                            } catch {}
                        }), !0), t.addEventListener(e, "touchstart", (e => {
                            if (e.target instanceof HTMLElement)
                                if (r(e.target)) {
                                    let n = e.target;
                                    for (; n.parentElement && r(n.parentElement);) n = n.parentElement;
                                    t.style(n, "overscrollBehavior", "contain")
                                } else t.style(e.target, "touchAction", "none")
                        })), t.addEventListener(e, "touchmove", (e => {
                            if (e.target instanceof HTMLElement)
                                if (r(e.target)) {
                                    let t = e.target;
                                    for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                                    "" === t.dataset.headlessuiPortal && e.preventDefault()
                                } else e.preventDefault()
                        }), {
                            passive: !1
                        }), t.add((() => {
                            var e;
                            let t = null != (e = window.scrollY) ? e : window.pageYOffset;
                            o !== t && window.scrollTo(0, o), l && l.isConnected && (l.scrollIntoView({
                                block: "nearest"
                            }), l = null)
                        }))
                    }))
                }
            } : {}, te(), {
                before({
                    doc: e,
                    d: t
                }) {
                    t.style(e.documentElement, "overflow", "hidden")
                }
            }];
        o.forEach((({
            before: e
        }) => null == e ? void 0 : e(r))), o.forEach((({
            after: e
        }) => null == e ? void 0 : e(r)))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
re.subscribe((() => {
    let e = re.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
        (r && !e || !r && e) && re.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && re.dispatch("TEARDOWN", n)
    }
}));
let oe = new Map,
    ae = new Map;

function le(e, t = !0) {
    f((() => {
        var n;
        if (!t) return;
        let r = "function" == typeof e ? e() : e.current;
        if (!r) return;
        let o = null != (n = ae.get(r)) ? n : 0;
        return ae.set(r, o + 1), 0 !== o || (oe.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert
            }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
            function() {
                var e;
                if (!r) return;
                let t = null != (e = ae.get(r)) ? e : 1;
                if (1 === t ? ae.delete(r) : ae.set(r, t - 1), 1 !== t) return;
                let n = oe.get(r);
                n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, oe.delete(r))
            }
    }), [e, t])
}
let ie = e.createContext((() => {}));
ie.displayName = "StackContext";
var ue, se = ((ue = se || {})[ue.Add = 0] = "Add", ue[ue.Remove = 1] = "Remove", ue);

function ce({
    children: n,
    onUpdate: r,
    type: o,
    element: a,
    enabled: i
}) {
    let u = e.useContext(ie),
        s = l(((...e) => {
            null == r || r(...e), u(...e)
        }));
    return f((() => {
        let e = void 0 === i || !0 === i;
        return e && s(0, o, a), () => {
            e && s(1, o, a)
        }
    }), [s, o, a, i]), t.createElement(ie.Provider, {
        value: s
    }, n)
}
var de = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(de || {}),
    fe = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(fe || {});
let pe = {
        0: (e, t) => e.titleId === t.id ? e : { ...e,
            titleId: t.id
        }
    },
    me = e.createContext(null);

function ge(t) {
    let n = e.useContext(me);
    if (null === n) {
        let e = new Error(`<${t} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, ge), e
    }
    return n
}

function ve(e, t) {
    return c(t.type, pe, e, t)
}
me.displayName = "DialogContext";
let he = p.RenderStrategy | p.Static,
    Ee = i((function(n, r) {
        let o = F(),
            {
                id: a = `headlessui-dialog-${o}`,
                open: i,
                onClose: p,
                initialFocus: m,
                role: g = "dialog",
                __demoMode: v = !1,
                ...T
            } = n,
            [D, S] = e.useState(0),
            R = e.useRef(!1);
        g = "dialog" === g || "alertdialog" === g ? g : (R.current || (R.current = !0), "dialog");
        let P = B();
        void 0 === i && null !== P && (i = (P & H.Open) === H.Open);
        let C = e.useRef(null),
            k = u(C, r),
            O = L(C),
            j = n.hasOwnProperty("open") || null !== P,
            x = n.hasOwnProperty("onClose");
        if (!j && !x) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
        if (!j) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
        if (!x) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
        if ("boolean" != typeof i) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
        if ("function" != typeof p) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${p}`);
        let N = i ? 0 : 1,
            [W, Y] = e.useReducer(ve, {
                titleId: null,
                descriptionId: null,
                panelRef: e.createRef()
            }),
            $ = l((() => p(!1))),
            V = l((e => Y({
                type: 0,
                id: e
            }))),
            _ = !!s() && !v && 0 === N,
            q = D > 1,
            G = null !== e.useContext(me),
            [z, K] = E(),
            Z = {
                get current() {
                    var e;
                    return null != (e = W.panelRef.current) ? e : C.current
                }
            },
            {
                resolveContainers: J,
                mainTreeNodeRef: Q,
                MainTreeNode: X
            } = w({
                portals: z,
                defaultContainers: [Z]
            }),
            te = q ? "parent" : "leaf",
            ne = null !== P && (P & H.Closing) === H.Closing,
            oe = (() => !G && !ne && _)();
        le(e.useCallback((() => {
            var e, t;
            return null != (t = Array.from(null != (e = null == O ? void 0 : O.querySelectorAll("body > *")) ? e : []).find((e => "headlessui-portal-root" !== e.id && e.contains(Q.current) && e instanceof HTMLElement))) ? t : null
        }), [Q]), oe);
        let ae = (() => !!q || _)();
        le(e.useCallback((() => {
            var e, t;
            return null != (t = Array.from(null != (e = null == O ? void 0 : O.querySelectorAll("[data-headlessui-portal]")) ? e : []).find((e => e.contains(Q.current) && e instanceof HTMLElement))) ? t : null
        }), [Q]), ae), M(J, (e => {
            e.preventDefault(), $()
        }), (() => !(!_ || q))());
        let ie = (() => !(q || 0 !== N))();
        h(null == O ? void 0 : O.defaultView, "keydown", (e => {
                ie && (e.defaultPrevented || e.key === A.Escape && (e.preventDefault(), e.stopPropagation(), $()))
            })),
            function(e, t, n = () => [document.body]) {
                ! function(e, t, n) {
                    let r = ee((a = re).subscribe, a.getSnapshot, a.getSnapshot),
                        o = e ? r.get(e) : void 0;
                    var a;
                    o && o.count, f((() => {
                        if (e && t) return re.dispatch("PUSH", e, n), () => re.dispatch("POP", e, n)
                    }), [t, e])
                }(e, t, (e => {
                    var t;
                    return {
                        containers: [...null != (t = e.containers) ? t : [], n]
                    }
                }))
            }(O, (() => !(ne || 0 !== N || G))(), J), e.useEffect((() => {
                if (0 !== N || !C.current) return;
                let e = new ResizeObserver((e => {
                    for (let t of e) {
                        let e = t.target.getBoundingClientRect();
                        0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && $()
                    }
                }));
                return e.observe(C.current), () => e.disconnect()
            }), [N, C, $]);
        let [ue, de] = I(), fe = e.useMemo((() => [{
            dialogState: N,
            close: $,
            setTitleId: V
        }, W]), [N, W, $, V]), pe = e.useMemo((() => ({
            open: 0 === N
        })), [N]), ge = {
            ref: k,
            id: a,
            role: g,
            "aria-modal": 0 === N || void 0,
            "aria-labelledby": W.titleId,
            "aria-describedby": ue
        };
        return t.createElement(ce, {
            type: "Dialog",
            enabled: 0 === N,
            element: C,
            onUpdate: l(((e, t) => {
                "Dialog" === t && c(e, {
                    [se.Add]: () => S((e => e + 1)),
                    [se.Remove]: () => S((e => e - 1))
                })
            }))
        }, t.createElement(b, {
            force: !0
        }, t.createElement(y, null, t.createElement(me.Provider, {
            value: fe
        }, t.createElement(y.Group, {
            target: C
        }, t.createElement(b, {
            force: !1
        }, t.createElement(de, {
            slot: pe,
            name: "Dialog.Description"
        }, t.createElement(U, {
            initialFocus: m,
            containers: J,
            features: _ ? c(te, {
                parent: U.features.RestoreFocus,
                leaf: U.features.All & ~U.features.FocusLock
            }) : U.features.None
        }, t.createElement(K, null, d({
            ourProps: ge,
            theirProps: T,
            slot: pe,
            defaultTag: "div",
            features: he,
            visible: 0 === N,
            name: "Dialog"
        }))))))))), t.createElement(X, null))
    })),
    we = i((function(n, r) {
        let o = F(),
            {
                id: a = `headlessui-dialog-backdrop-${o}`,
                ...l
            } = n,
            [{
                dialogState: i
            }, s] = ge("Dialog.Backdrop"),
            c = u(r);
        e.useEffect((() => {
            if (null === s.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
        }), [s.panelRef]);
        let f = e.useMemo((() => ({
            open: 0 === i
        })), [i]);
        return t.createElement(b, {
            force: !0
        }, t.createElement(y, null, d({
            ourProps: {
                ref: c,
                id: a,
                "aria-hidden": !0
            },
            theirProps: l,
            slot: f,
            defaultTag: "div",
            name: "Dialog.Backdrop"
        })))
    })),
    be = i((function(t, n) {
        let r = F(),
            {
                id: o = `headlessui-dialog-panel-${r}`,
                ...a
            } = t,
            [{
                dialogState: i
            }, s] = ge("Dialog.Panel"),
            c = u(n, s.panelRef),
            f = e.useMemo((() => ({
                open: 0 === i
            })), [i]),
            p = l((e => {
                e.stopPropagation()
            }));
        return d({
            ourProps: {
                ref: c,
                id: o,
                onClick: p
            },
            theirProps: a,
            slot: f,
            defaultTag: "div",
            name: "Dialog.Panel"
        })
    })),
    ye = i((function(t, n) {
        let r = F(),
            {
                id: o = `headlessui-dialog-overlay-${r}`,
                ...a
            } = t,
            [{
                dialogState: i,
                close: s
            }] = ge("Dialog.Overlay"),
            c = u(n),
            f = l((e => {
                if (e.target === e.currentTarget) {
                    if (j(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), s()
                }
            })),
            p = e.useMemo((() => ({
                open: 0 === i
            })), [i]);
        return d({
            ourProps: {
                ref: c,
                id: o,
                "aria-hidden": !0,
                onClick: f
            },
            theirProps: a,
            slot: p,
            defaultTag: "div",
            name: "Dialog.Overlay"
        })
    })),
    Te = i((function(t, n) {
        let r = F(),
            {
                id: o = `headlessui-dialog-title-${r}`,
                ...a
            } = t,
            [{
                dialogState: l,
                setTitleId: i
            }] = ge("Dialog.Title"),
            s = u(n);
        e.useEffect((() => (i(o), () => i(null))), [o, i]);
        let c = e.useMemo((() => ({
            open: 0 === l
        })), [l]);
        return d({
            ourProps: {
                ref: s,
                id: o
            },
            theirProps: a,
            slot: c,
            defaultTag: "h2",
            name: "Dialog.Title"
        })
    })),
    Le = Object.assign(Ee, {
        Backdrop: we,
        Panel: be,
        Overlay: ye,
        Title: Te,
        Description: x
    });
export {
    Le as _, N as m, W as t
};