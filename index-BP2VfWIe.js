import {
    r as e,
    e as t
} from "./index-klX-IjEm.js";
import {
    R as n
} from "./index-X1TvMjHs.js";
import {
    N as a,
    s as i,
    u as r,
    a as o,
    b as s,
    D as l,
    c,
    d as u,
    i as f,
    m as v,
    e as d,
    f as h,
    g as p,
    E as m,
    h as w,
    R as g,
    j as y
} from "./index-sNgo0IRq.js";

function b() {
    return b = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
        }
        return e
    }, b.apply(this, arguments)
}

function S(e, t) {
    if (null == e) return {};
    var n, a, i = {},
        r = Object.keys(e);
    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
}

function T(e) {
    return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce(((t, n) => {
        let a = e[n];
        return t.concat(Array.isArray(a) ? a.map((e => [n, e])) : [
            [n, a]
        ])
    }), []))
}
const L = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    R = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"];
try {
    window.__reactRouterVersion = "6"
} catch (G) {}

function _(e, t) {
    return d({
        basename: void 0,
        future: b({}, void 0, {
            v7_prependBasename: !0
        }),
        history: h({
            window: void 0
        }),
        hydrationData: E(),
        routes: e,
        mapRouteProperties: p,
        unstable_dataStrategy: void 0,
        unstable_patchRoutesOnNavigation: void 0,
        window: void 0
    }).initialize()
}

function E() {
    var e;
    let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = b({}, t, {
        errors: x(t.errors)
    })), t
}

function x(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [a, i] of t)
        if (i && "RouteErrorResponse" === i.__type) n[a] = new m(i.status, i.statusText, i.data, !0 === i.internal);
        else if (i && "Error" === i.__type) {
        if (i.__subType) {
            let e = window[i.__subType];
            if ("function" == typeof e) try {
                let t = new e(i.message);
                t.stack = "", n[a] = t
            } catch (G) {}
        }
        if (null == n[a]) {
            let e = new Error(i.message);
            e.stack = "", n[a] = e
        }
    } else n[a] = i;
    return n
}
const C = e.createContext({
        isTransitioning: !1
    }),
    k = e.createContext(new Map),
    P = t.startTransition,
    j = n.flushSync;

function U(e) {
    j ? j(e) : e()
}
class F {
    constructor() {
        this.status = "pending", this.promise = new Promise(((e, t) => {
            this.resolve = t => {
                "pending" === this.status && (this.status = "resolved", e(t))
            }, this.reject = e => {
                "pending" === this.status && (this.status = "rejected", t(e))
            }
        }))
    }
}

function O(t) {
    let {
        fallbackElement: n,
        router: a,
        future: i
    } = t, [r, o] = e.useState(a.state), [s, c] = e.useState(), [u, f] = e.useState({
        isTransitioning: !1
    }), [v, d] = e.useState(), [h, p] = e.useState(), [m, y] = e.useState(), b = e.useRef(new Map), {
        v7_startTransition: S
    } = i || {}, T = e.useCallback((e => {
        S ? function(e) {
            P ? P(e) : e()
        }(e) : e()
    }), [S]), L = e.useCallback(((e, t) => {
        let {
            deletedFetchers: n,
            unstable_flushSync: i,
            unstable_viewTransitionOpts: r
        } = t;
        n.forEach((e => b.current.delete(e))), e.fetchers.forEach(((e, t) => {
            void 0 !== e.data && b.current.set(t, e.data)
        }));
        let s = null == a.window || null == a.window.document || "function" != typeof a.window.document.startViewTransition;
        if (r && !s) {
            if (i) {
                U((() => {
                    h && (v && v.resolve(), h.skipTransition()), f({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: r.currentLocation,
                        nextLocation: r.nextLocation
                    })
                }));
                let t = a.window.document.startViewTransition((() => {
                    U((() => o(e)))
                }));
                return t.finished.finally((() => {
                    U((() => {
                        d(void 0), p(void 0), c(void 0), f({
                            isTransitioning: !1
                        })
                    }))
                })), void U((() => p(t)))
            }
            h ? (v && v.resolve(), h.skipTransition(), y({
                state: e,
                currentLocation: r.currentLocation,
                nextLocation: r.nextLocation
            })) : (c(e), f({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: r.currentLocation,
                nextLocation: r.nextLocation
            }))
        } else i ? U((() => o(e))) : T((() => o(e)))
    }), [a.window, h, v, b, T]);
    e.useLayoutEffect((() => a.subscribe(L)), [a, L]), e.useEffect((() => {
        u.isTransitioning && !u.flushSync && d(new F)
    }), [u]), e.useEffect((() => {
        if (v && s && a.window) {
            let e = s,
                t = v.promise,
                n = a.window.document.startViewTransition((async () => {
                    T((() => o(e))), await t
                }));
            n.finished.finally((() => {
                d(void 0), p(void 0), c(void 0), f({
                    isTransitioning: !1
                })
            })), p(n)
        }
    }), [T, s, v, a.window]), e.useEffect((() => {
        v && s && r.location.key === s.location.key && v.resolve()
    }), [v, h, r.location, s]), e.useEffect((() => {
        !u.isTransitioning && m && (c(m.state), f({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: m.currentLocation,
            nextLocation: m.nextLocation
        }), y(void 0))
    }), [u.isTransitioning, m]), e.useEffect((() => {}), []);
    let R = e.useMemo((() => ({
            createHref: a.createHref,
            encodeLocation: a.encodeLocation,
            go: e => a.navigate(e),
            push: (e, t, n) => a.navigate(e, {
                state: t,
                preventScrollReset: null == n ? void 0 : n.preventScrollReset
            }),
            replace: (e, t, n) => a.navigate(e, {
                replace: !0,
                state: t,
                preventScrollReset: null == n ? void 0 : n.preventScrollReset
            })
        })), [a]),
        _ = a.basename || "/",
        E = e.useMemo((() => ({
            router: a,
            navigator: R,
            static: !1,
            basename: _
        })), [a, R, _]),
        x = e.useMemo((() => ({
            v7_relativeSplatPath: a.future.v7_relativeSplatPath
        })), [a.future.v7_relativeSplatPath]);
    return e.createElement(e.Fragment, null, e.createElement(w.Provider, {
        value: E
    }, e.createElement(l.Provider, {
        value: r
    }, e.createElement(k.Provider, {
        value: b.current
    }, e.createElement(C.Provider, {
        value: u
    }, e.createElement(g, {
        basename: _,
        location: r.location,
        navigationType: r.historyAction,
        navigator: R,
        future: x
    }, r.initialized || a.future.v7_partialHydration ? e.createElement(A, {
        routes: a.routes,
        future: a.future,
        state: r
    }) : n))))), null)
}
const A = e.memo(V);

function V(e) {
    let {
        routes: t,
        future: n,
        state: a
    } = e;
    return y(t, void 0, a, n)
}
const D = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    M = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    N = e.forwardRef((function(t, n) {
        let l, {
                onClick: f,
                relative: v,
                reloadDocument: d,
                replace: h,
                state: p,
                target: m,
                to: w,
                preventScrollReset: g,
                unstable_viewTransition: y
            } = t,
            T = S(t, L),
            {
                basename: R
            } = e.useContext(a),
            _ = !1;
        if ("string" == typeof w && M.test(w) && (l = w, D)) try {
            let e = new URL(window.location.href),
                t = w.startsWith("//") ? new URL(e.protocol + w) : new URL(w),
                n = i(t.pathname, R);
            t.origin === e.origin && null != n ? w = n + t.search + t.hash : _ = !0
        } catch (G) {}
        let E = r(w, {
                relative: v
            }),
            x = function(t, n) {
                let {
                    target: a,
                    replace: i,
                    state: r,
                    preventScrollReset: l,
                    relative: f,
                    unstable_viewTransition: v
                } = void 0 === n ? {} : n, d = c(), h = s(), p = o(t, {
                    relative: f
                });
                return e.useCallback((e => {
                    if (function(e, t) {
                            return !(0 !== e.button || t && "_self" !== t || function(e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e))
                        }(e, a)) {
                        e.preventDefault();
                        let n = void 0 !== i ? i : u(h) === u(p);
                        d(t, {
                            replace: n,
                            state: r,
                            preventScrollReset: l,
                            relative: f,
                            unstable_viewTransition: v
                        })
                    }
                }), [h, d, p, i, r, a, t, l, f, v])
            }(w, {
                replace: h,
                state: p,
                target: m,
                preventScrollReset: g,
                relative: v,
                unstable_viewTransition: y
            });
        return e.createElement("a", b({}, T, {
            href: l || E,
            onClick: _ || d ? f : function(e) {
                f && f(e), e.defaultPrevented || x(e)
            },
            ref: n,
            target: m
        }))
    })),
    K = e.forwardRef((function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: c = !1,
            className: u = "",
            end: d = !1,
            style: h,
            to: p,
            unstable_viewTransition: m,
            children: g
        } = t, y = S(t, R), T = o(p, {
            relative: y.relative
        }), L = s(), _ = e.useContext(l), {
            navigator: E,
            basename: x
        } = e.useContext(a), k = null != _ && function(t, n) {
            void 0 === n && (n = {});
            let a = e.useContext(C);
            null == a && f(!1);
            let {
                basename: r
            } = function() {
                let t = e.useContext(w);
                return t || f(!1), t
            }(z.useViewTransitionState), s = o(t, {
                relative: n.relative
            });
            if (!a.isTransitioning) return !1;
            let l = i(a.currentLocation.pathname, r) || a.currentLocation.pathname,
                c = i(a.nextLocation.pathname, r) || a.nextLocation.pathname;
            return null != v(s.pathname, c) || null != v(s.pathname, l)
        }(T) && !0 === m, P = E.encodeLocation ? E.encodeLocation(T).pathname : T.pathname, j = L.pathname, U = _ && _.navigation && _.navigation.location ? _.navigation.location.pathname : null;
        c || (j = j.toLowerCase(), U = U ? U.toLowerCase() : null, P = P.toLowerCase()), U && x && (U = i(U, x) || U);
        const F = "/" !== P && P.endsWith("/") ? P.length - 1 : P.length;
        let O, A = j === P || !d && j.startsWith(P) && "/" === j.charAt(F),
            V = null != U && (U === P || !d && U.startsWith(P) && "/" === U.charAt(P.length)),
            D = {
                isActive: A,
                isPending: V,
                isTransitioning: k
            },
            M = A ? r : void 0;
        O = "function" == typeof u ? u(D) : [u, A ? "active" : null, V ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" ");
        let K = "function" == typeof h ? h(D) : h;
        return e.createElement(N, b({}, y, {
            "aria-current": M,
            className: O,
            ref: n,
            style: K,
            to: p,
            unstable_viewTransition: m
        }), "function" == typeof g ? g(D) : g)
    }));
var z, H, W, B;

function q(t) {
    let n = e.useRef(T(t)),
        a = e.useRef(!1),
        i = s(),
        r = e.useMemo((() => function(e, t) {
            let n = T(e);
            return t && t.forEach(((e, a) => {
                n.has(a) || t.getAll(a).forEach((e => {
                    n.append(a, e)
                }))
            })), n
        }(i.search, a.current ? null : n.current)), [i.search]),
        o = c(),
        l = e.useCallback(((e, t) => {
            const n = T("function" == typeof e ? e(r) : e);
            a.current = !0, o("?" + n, t)
        }), [o, r]);
    return [r, l]
}(H = z || (z = {})).UseScrollRestoration = "useScrollRestoration", H.UseSubmit = "useSubmit", H.UseSubmitFetcher = "useSubmitFetcher", H.UseFetcher = "useFetcher", H.useViewTransitionState = "useViewTransitionState", (B = W || (W = {})).UseFetcher = "useFetcher", B.UseFetchers = "useFetchers", B.UseScrollRestoration = "useScrollRestoration";
export {
    N as L, K as N, O as R, _ as c, q as u
};