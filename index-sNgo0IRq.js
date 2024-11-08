import {
    r as e
} from "./index-klX-IjEm.js";

function t() {
    return t = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, t.apply(this, arguments)
}
var r, a;
(a = r || (r = {})).Pop = "POP", a.Push = "PUSH", a.Replace = "REPLACE";
const n = "popstate";

function o(e) {
    return void 0 === e && (e = {}),
        function(e, a, o, l) {
            void 0 === l && (l = {});
            let {
                window: d = document.defaultView,
                v5Compat: h = !1
            } = l, f = d.history, p = r.Pop, m = null, v = y();

            function y() {
                return (f.state || {
                    idx: null
                }).idx
            }

            function g() {
                p = r.Pop;
                let e = y(),
                    t = null == e ? null : e - v;
                v = e, m && m({
                    action: p,
                    location: w.location,
                    delta: t
                })
            }

            function b(e) {
                let t = "null" !== d.location.origin ? d.location.origin : d.location.href,
                    r = "string" == typeof e ? e : c(e);
                return r = r.replace(/ $/, "%20"), i(t, "No window.location.(origin|href) available to create URL for href: " + r), new URL(r, t)
            }
            null == v && (v = 0, f.replaceState(t({}, f.state, {
                idx: v
            }), ""));
            let w = {
                get action() {
                    return p
                },
                get location() {
                    return function(e, t) {
                        let {
                            pathname: r,
                            search: a,
                            hash: n
                        } = e.location;
                        return u("", {
                            pathname: r,
                            search: a,
                            hash: n
                        }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                    }(d, f)
                },
                listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return d.addEventListener(n, g), m = e, () => {
                        d.removeEventListener(n, g), m = null
                    }
                },
                createHref: e => function(e, t) {
                    return "string" == typeof t ? t : c(t)
                }(0, e),
                createURL: b,
                encodeLocation(e) {
                    let t = b(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(e, t) {
                    p = r.Push;
                    let a = u(w.location, e, t);
                    v = y() + 1;
                    let n = s(a, v),
                        o = w.createHref(a);
                    try {
                        f.pushState(n, "", o)
                    } catch (i) {
                        if (i instanceof DOMException && "DataCloneError" === i.name) throw i;
                        d.location.assign(o)
                    }
                    h && m && m({
                        action: p,
                        location: w.location,
                        delta: 1
                    })
                },
                replace: function(e, t) {
                    p = r.Replace;
                    let a = u(w.location, e, t);
                    v = y();
                    let n = s(a, v),
                        o = w.createHref(a);
                    f.replaceState(n, "", o), h && m && m({
                        action: p,
                        location: w.location,
                        delta: 0
                    })
                },
                go: e => f.go(e)
            };
            return w
        }(0, 0, 0, e)
}

function i(e, t) {
    if (!1 === e || null == e) throw new Error(t)
}

function l(e, t) {
    if (!e) try {
        throw new Error(t)
    } catch (r) {}
}

function s(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function u(e, r, a, n) {
    return void 0 === a && (a = null), t({
        pathname: "string" == typeof e ? e : e.pathname,
        search: "",
        hash: ""
    }, "string" == typeof r ? d(r) : r, {
        state: a,
        key: r && r.key || n || Math.random().toString(36).substr(2, 8)
    })
}

function c(e) {
    let {
        pathname: t = "/",
        search: r = "",
        hash: a = ""
    } = e;
    return r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r), a && "#" !== a && (t += "#" === a.charAt(0) ? a : "#" + a), t
}

function d(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
        let a = e.indexOf("?");
        a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
    }
    return t
}
var h, f;
(f = h || (h = {})).data = "data", f.deferred = "deferred", f.redirect = "redirect", f.error = "error";
const p = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function m(e, r, a, n) {
    return void 0 === a && (a = []), void 0 === n && (n = {}), e.map(((e, o) => {
        let l = [...a, String(o)],
            s = "string" == typeof e.id ? e.id : l.join("-");
        if (i(!0 !== e.index || !e.children, "Cannot specify children on an index route"), i(!n[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
                return !0 === e.index
            }(e)) {
            let a = t({}, e, r(e), {
                id: s
            });
            return n[s] = a, a
        } {
            let a = t({}, e, r(e), {
                id: s,
                children: void 0
            });
            return n[s] = a, e.children && (a.children = m(e.children, r, l, n)), a
        }
    }))
}

function v(e, t, r) {
    return void 0 === r && (r = "/"), y(e, t, r, !1)
}

function y(e, t, r, a) {
    let n = A(("string" == typeof t ? d(t) : t).pathname || "/", r);
    if (null == n) return null;
    let o = g(e);
    ! function(e) {
        e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            return e.length === t.length && e.slice(0, -1).every(((e, r) => e === t[r])) ? e[e.length - 1] - t[t.length - 1] : 0
        }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
    }(o);
    let i = null;
    for (let l = 0; null == i && l < o.length; ++l) {
        let e = L(n);
        i = P(o[l], e, a)
    }
    return i
}

function g(e, t, r, a) {
    void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = "");
    let n = (e, n, o) => {
        let l = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: n,
            route: e
        };
        l.relativePath.startsWith("/") && (i(l.relativePath.startsWith(a), 'Absolute route path "' + l.relativePath + '" nested under path "' + a + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), l.relativePath = l.relativePath.slice(a.length));
        let s = O([a, l.relativePath]),
            u = r.concat(l);
        e.children && e.children.length > 0 && (i(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), g(e.children, t, u, s)), (null != e.path || e.index) && t.push({
            path: s,
            score: M(s, e.index),
            routesMeta: u
        })
    };
    return e.forEach(((e, t) => {
        var r;
        if ("" !== e.path && null != (r = e.path) && r.includes("?"))
            for (let a of b(e.path)) n(e, t, a);
        else n(e, t)
    })), t
}

function b(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
    if (0 === a.length) return n ? [o, ""] : [o];
    let i = b(a.join("/")),
        l = [];
    return l.push(...i.map((e => "" === e ? o : [o, e].join("/")))), n && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
}
const w = /^:[\w-]+$/,
    E = 3,
    x = 2,
    S = 1,
    D = 10,
    R = -2,
    C = e => "*" === e;

function M(e, t) {
    let r = e.split("/"),
        a = r.length;
    return r.some(C) && (a += R), t && (a += x), r.filter((e => !C(e))).reduce(((e, t) => e + (w.test(t) ? E : "" === t ? S : D)), a)
}

function P(e, t, r) {
    void 0 === r && (r = !1);
    let {
        routesMeta: a
    } = e, n = {}, o = "/", i = [];
    for (let l = 0; l < a.length; ++l) {
        let e = a[l],
            s = l === a.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = k({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: s
            }, u),
            d = e.route;
        if (!c && s && r && !a[a.length - 1].route.index && (c = k({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: !1
            }, u)), !c) return null;
        Object.assign(n, c.params), i.push({
            params: n,
            pathname: O([o, c.pathname]),
            pathnameBase: B(O([o, c.pathnameBase])),
            route: d
        }), "/" !== c.pathnameBase && (o = O([o, c.pathnameBase]))
    }
    return i
}

function k(e, t) {
    "string" == typeof e && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [r, a] = function(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !0), l("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
        let a = [],
            n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, r) => (a.push({
                paramName: t,
                isOptional: null != r
            }), r ? "/?([^\\/]+)?" : "/([^\\/]+)")));
        return e.endsWith("*") ? (a.push({
            paramName: "*"
        }), n += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : "" !== e && "/" !== e && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a]
    }(e.path, e.caseSensitive, e.end), n = t.match(r);
    if (!n) return null;
    let o = n[0],
        i = o.replace(/(.)\/+$/, "$1"),
        s = n.slice(1);
    return {
        params: a.reduce(((e, t, r) => {
            let {
                paramName: a,
                isOptional: n
            } = t;
            if ("*" === a) {
                let e = s[r] || "";
                i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const l = s[r];
            return e[a] = n && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
        }), {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}

function L(e) {
    try {
        return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
    } catch (t) {
        return l(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
    }
}

function A(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        a = e.charAt(r);
    return a && "/" !== a ? null : e.slice(r) || "/"
}

function U(e, t, r, a) {
    return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the `to." + r + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
}

function j(e) {
    return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
}

function T(e, t) {
    let r = j(e);
    return t ? r.map(((e, t) => t === r.length - 1 ? e.pathname : e.pathnameBase)) : r.map((e => e.pathnameBase))
}

function _(e, r, a, n) {
    let o;
    void 0 === n && (n = !1), "string" == typeof e ? o = d(e) : (o = t({}, e), i(!o.pathname || !o.pathname.includes("?"), U("?", "pathname", "search", o)), i(!o.pathname || !o.pathname.includes("#"), U("#", "pathname", "hash", o)), i(!o.search || !o.search.includes("#"), U("#", "search", "hash", o)));
    let l, s = "" === e || "" === o.pathname,
        u = s ? "/" : o.pathname;
    if (null == u) l = a;
    else {
        let e = r.length - 1;
        if (!n && u.startsWith("..")) {
            let t = u.split("/");
            for (;
                ".." === t[0];) t.shift(), e -= 1;
            o.pathname = t.join("/")
        }
        l = e >= 0 ? r[e] : "/"
    }
    let c = function(e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: r,
                search: a = "",
                hash: n = ""
            } = "string" == typeof e ? d(e) : e, o = r ? r.startsWith("/") ? r : function(e, t) {
                let r = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach((e => {
                    ".." === e ? r.length > 1 && r.pop() : "." !== e && r.push(e)
                })), r.length > 1 ? r.join("/") : "/"
            }(r, t) : t;
            return {
                pathname: o,
                search: I(a),
                hash: N(n)
            }
        }(o, l),
        h = u && "/" !== u && u.endsWith("/"),
        f = (s || "." === u) && a.endsWith("/");
    return c.pathname.endsWith("/") || !h && !f || (c.pathname += "/"), c
}
const O = e => e.join("/").replace(/\/\/+/g, "/"),
    B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    I = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
    N = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
    F = function(e, r) {
        void 0 === r && (r = 302);
        let a = r;
        "number" == typeof a ? a = {
            status: a
        } : void 0 === a.status && (a.status = 302);
        let n = new Headers(a.headers);
        return n.set("Location", e), new Response(null, t({}, a, {
            headers: n
        }))
    };
class z {
    constructor(e, t, r, a) {
        void 0 === a && (a = !1), this.status = e, this.statusText = t || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function H(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
}
const W = ["post", "put", "patch", "delete"],
    $ = new Set(W),
    J = ["get", ...W],
    q = new Set(J),
    Y = new Set([301, 302, 303, 307, 308]),
    V = new Set([307, 308]),
    X = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    G = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    K = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    Q = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Z = e => ({
        hasErrorBoundary: Boolean(e.hasErrorBoundary)
    }),
    ee = "remix-router-transitions";

function te(e) {
    const a = e.window ? e.window : "undefined" != typeof window ? window : void 0,
        n = void 0 !== a && void 0 !== a.document && void 0 !== a.document.createElement,
        o = !n;
    let s;
    if (i(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) s = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let t = e.detectErrorBoundary;
        s = e => ({
            hasErrorBoundary: t(e)
        })
    } else s = Z;
    let c, d, f, p = {},
        g = m(e.routes, s, void 0, p),
        b = e.basename || "/",
        w = e.unstable_dataStrategy || ce,
        E = e.unstable_patchRoutesOnNavigation,
        x = t({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
        }, e.future),
        S = null,
        D = new Set,
        R = 1e3,
        C = new Set,
        M = null,
        P = null,
        k = null,
        L = null != e.hydrationData,
        U = v(g, e.history.location, b),
        j = null;
    if (null == U && !E) {
        let t = Ee(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: r,
                route: a
            } = we(g);
        U = r, j = {
            [a.id]: t
        }
    }
    if (U && !e.hydrationData && ft(U, g, e.history.location.pathname).active && (U = null), U)
        if (U.some((e => e.route.lazy))) d = !1;
        else if (U.some((e => e.route.loader)))
        if (x.v7_partialHydration) {
            let t = e.hydrationData ? e.hydrationData.loaderData : null,
                r = e.hydrationData ? e.hydrationData.errors : null,
                a = e => !e.route.loader || ("function" != typeof e.route.loader || !0 !== e.route.loader.hydrate) && (t && void 0 !== t[e.route.id] || r && void 0 !== r[e.route.id]);
            if (r) {
                let e = U.findIndex((e => void 0 !== r[e.route.id]));
                d = U.slice(0, e + 1).every(a)
            } else d = U.every(a)
        } else d = null != e.hydrationData;
    else d = !0;
    else if (d = !1, U = [], x.v7_partialHydration) {
        let t = ft(null, g, e.history.location.pathname);
        t.active && t.matches && (U = t.matches)
    }
    let T, _ = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: U,
            initialized: d,
            navigation: X,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || j,
            fetchers: new Map,
            blockers: new Map
        },
        O = r.Pop,
        B = !1,
        I = !1,
        N = new Map,
        F = null,
        W = !1,
        $ = !1,
        J = [],
        q = new Set,
        te = new Map,
        oe = 0,
        ie = -1,
        pe = new Map,
        me = new Set,
        Se = new Map,
        Ue = new Map,
        Ie = new Set,
        Ne = new Map,
        Fe = new Map,
        ze = new Map,
        He = !1;

    function We(e, r) {
        void 0 === r && (r = {}), _ = t({}, _, e);
        let a = [],
            n = [];
        x.v7_fetcherPersist && _.fetchers.forEach(((e, t) => {
            "idle" === e.state && (Ie.has(t) ? n.push(t) : a.push(t))
        })), [...D].forEach((e => e(_, {
            deletedFetchers: n,
            unstable_viewTransitionOpts: r.viewTransitionOpts,
            unstable_flushSync: !0 === r.flushSync
        }))), x.v7_fetcherPersist && (a.forEach((e => _.fetchers.delete(e))), n.forEach((e => et(e))))
    }

    function $e(a, n, o) {
        var i, l;
        let s, {
                flushSync: u
            } = void 0 === o ? {} : o,
            d = null != _.actionData && null != _.navigation.formMethod && ke(_.navigation.formMethod) && "loading" === _.navigation.state && !0 !== (null == (i = a.state) ? void 0 : i._isRedirect);
        s = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : d ? _.actionData : null;
        let h = n.loaderData ? ye(_.loaderData, n.loaderData, n.matches || [], n.errors) : _.loaderData,
            f = _.blockers;
        f.size > 0 && (f = new Map(f), f.forEach(((e, t) => f.set(t, K))));
        let p, m = !0 === B || null != _.navigation.formMethod && ke(_.navigation.formMethod) && !0 !== (null == (l = a.state) ? void 0 : l._isRedirect);
        if (c && (g = c, c = void 0), W || O === r.Pop || (O === r.Push ? e.history.push(a, a.state) : O === r.Replace && e.history.replace(a, a.state)), O === r.Pop) {
            let e = N.get(_.location.pathname);
            e && e.has(a.pathname) ? p = {
                currentLocation: _.location,
                nextLocation: a
            } : N.has(a.pathname) && (p = {
                currentLocation: a,
                nextLocation: _.location
            })
        } else if (I) {
            let e = N.get(_.location.pathname);
            e ? e.add(a.pathname) : (e = new Set([a.pathname]), N.set(_.location.pathname, e)), p = {
                currentLocation: _.location,
                nextLocation: a
            }
        }
        We(t({}, n, {
            actionData: s,
            loaderData: h,
            historyAction: O,
            location: a,
            initialized: !0,
            navigation: X,
            revalidation: "idle",
            restoreScrollPosition: ht(a, n.matches || _.matches),
            preventScrollReset: m,
            blockers: f
        }), {
            viewTransitionOpts: p,
            flushSync: !0 === u
        }), O = r.Pop, B = !1, I = !1, W = !1, $ = !1, J = []
    }
    async function Je(a, n, o) {
        T && T.abort(), T = null, O = a, W = !0 === (o && o.startUninterruptedRevalidation),
            function(e, t) {
                if (M && k) {
                    let r = dt(e, t);
                    M[r] = k()
                }
            }(_.location, _.matches), B = !0 === (o && o.preventScrollReset), I = !0 === (o && o.enableViewTransition);
        let i = c || g,
            l = o && o.overrideNavigation,
            s = v(i, n, b),
            u = !0 === (o && o.flushSync),
            d = ft(s, i, n.pathname);
        if (d.active && d.matches && (s = d.matches), !s) {
            let {
                error: e,
                notFoundMatches: t,
                route: r
            } = st(n.pathname);
            return void $e(n, {
                matches: t,
                loaderData: {},
                errors: {
                    [r.id]: e
                }
            }, {
                flushSync: u
            })
        }
        if (_.initialized && !$ && (p = n, (f = _.location).pathname === p.pathname && f.search === p.search && ("" === f.hash ? "" !== p.hash : f.hash === p.hash || "" !== p.hash)) && !(o && o.submission && ke(o.submission.formMethod))) return void $e(n, {
            matches: s
        }, {
            flushSync: u
        });
        var f, p;
        T = new AbortController;
        let m, y = fe(e.history, n, T.signal, o && o.submission);
        if (o && o.pendingError) m = [be(s).route.id, {
            type: h.error,
            error: o.pendingError
        }];
        else if (o && o.submission && ke(o.submission.formMethod)) {
            let t = await async function(e, t, a, n, o, i) {
                void 0 === i && (i = {}), Ge();
                let l, s = function(e, t) {
                    return {
                        state: "submitting",
                        location: e,
                        formMethod: t.formMethod,
                        formAction: t.formAction,
                        formEncType: t.formEncType,
                        formData: t.formData,
                        json: t.json,
                        text: t.text
                    }
                }(t, a);
                if (We({
                        navigation: s
                    }, {
                        flushSync: !0 === i.flushSync
                    }), o) {
                    let r = await pt(n, t.pathname, e.signal);
                    if ("aborted" === r.type) return {
                        shortCircuited: !0
                    };
                    if ("error" === r.type) {
                        let {
                            boundaryId: e,
                            error: a
                        } = ut(t.pathname, r);
                        return {
                            matches: r.partialMatches,
                            pendingActionResult: [e, {
                                type: h.error,
                                error: a
                            }]
                        }
                    }
                    if (!r.matches) {
                        let {
                            notFoundMatches: e,
                            error: r,
                            route: a
                        } = st(t.pathname);
                        return {
                            matches: e,
                            pendingActionResult: [a.id, {
                                type: h.error,
                                error: r
                            }]
                        }
                    }
                    n = r.matches
                }
                let u = je(n, t);
                if (u.route.action || u.route.lazy) {
                    if (l = (await Ve("action", e, [u], n))[0], e.signal.aborted) return {
                        shortCircuited: !0
                    }
                } else l = {
                    type: h.error,
                    error: Ee(405, {
                        method: e.method,
                        pathname: t.pathname,
                        routeId: u.route.id
                    })
                };
                if (Ce(l)) {
                    let t;
                    return t = i && null != i.replace ? i.replace : he(l.response.headers.get("Location"), new URL(e.url), b) === _.location.pathname + _.location.search, await Ye(e, l, {
                        submission: a,
                        replace: t
                    }), {
                        shortCircuited: !0
                    }
                }
                if (De(l)) throw Ee(400, {
                    type: "defer-action"
                });
                if (Re(l)) {
                    let e = be(n, u.route.id);
                    return !0 !== (i && i.replace) && (O = r.Push), {
                        matches: n,
                        pendingActionResult: [e.route.id, l]
                    }
                }
                return {
                    matches: n,
                    pendingActionResult: [u.route.id, l]
                }
            }(y, n, o.submission, s, d.active, {
                replace: o.replace,
                flushSync: u
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
                let [e, r] = t.pendingActionResult;
                if (Re(r) && H(r.error) && 404 === r.error.status) return T = null, void $e(n, {
                    matches: t.matches,
                    loaderData: {},
                    errors: {
                        [e]: r.error
                    }
                })
            }
            s = t.matches || s, m = t.pendingActionResult, l = _e(n, o.submission), u = !1, d.active = !1, y = fe(e.history, y.url, y.signal)
        }
        let {
            shortCircuited: w,
            matches: E,
            loaderData: S,
            errors: D
        } = await async function(r, a, n, o, i, l, s, u, d, h, f) {
            let p = i || _e(a, l),
                m = l || s || Te(p),
                v = !(W || x.v7_partialHydration && d);
            if (o) {
                if (v) {
                    let e = qe(f);
                    We(t({
                        navigation: p
                    }, void 0 !== e ? {
                        actionData: e
                    } : {}), {
                        flushSync: h
                    })
                }
                let e = await pt(n, a.pathname, r.signal);
                if ("aborted" === e.type) return {
                    shortCircuited: !0
                };
                if ("error" === e.type) {
                    let {
                        boundaryId: t,
                        error: r
                    } = ut(a.pathname, e);
                    return {
                        matches: e.partialMatches,
                        loaderData: {},
                        errors: {
                            [t]: r
                        }
                    }
                }
                if (!e.matches) {
                    let {
                        error: e,
                        notFoundMatches: t,
                        route: r
                    } = st(a.pathname);
                    return {
                        matches: t,
                        loaderData: {},
                        errors: {
                            [r.id]: e
                        }
                    }
                }
                n = e.matches
            }
            let y = c || g,
                [w, E] = ne(e.history, _, n, m, a, x.v7_partialHydration && !0 === d, x.v7_skipActionErrorRevalidation, $, J, q, Ie, Se, me, y, b, f);
            if (ct((e => !(n && n.some((t => t.route.id === e))) || w && w.some((t => t.route.id === e)))), ie = ++oe, 0 === w.length && 0 === E.length) {
                let e = at();
                return $e(a, t({
                    matches: n,
                    loaderData: {},
                    errors: f && Re(f[1]) ? {
                        [f[0]]: f[1].error
                    } : null
                }, ge(f), e ? {
                    fetchers: new Map(_.fetchers)
                } : {}), {
                    flushSync: h
                }), {
                    shortCircuited: !0
                }
            }
            if (v) {
                let e = {};
                if (!o) {
                    e.navigation = p;
                    let t = qe(f);
                    void 0 !== t && (e.actionData = t)
                }
                E.length > 0 && (e.fetchers = function(e) {
                    return e.forEach((e => {
                        let t = _.fetchers.get(e.key),
                            r = Oe(void 0, t ? t.data : void 0);
                        _.fetchers.set(e.key, r)
                    })), new Map(_.fetchers)
                }(E)), We(e, {
                    flushSync: h
                })
            }
            E.forEach((e => {
                te.has(e.key) && tt(e.key), e.controller && te.set(e.key, e.controller)
            }));
            let S = () => E.forEach((e => tt(e.key)));
            T && T.signal.addEventListener("abort", S);
            let {
                loaderResults: D,
                fetcherResults: R
            } = await Xe(_.matches, n, w, E, r);
            if (r.signal.aborted) return {
                shortCircuited: !0
            };
            T && T.signal.removeEventListener("abort", S), E.forEach((e => te.delete(e.key)));
            let C = xe([...D, ...R]);
            if (C) {
                if (C.idx >= w.length) {
                    let e = E[C.idx - w.length].key;
                    me.add(e)
                }
                return await Ye(r, C.result, {
                    replace: u
                }), {
                    shortCircuited: !0
                }
            }
            let {
                loaderData: M,
                errors: P
            } = ve(_, n, w, D, f, E, R, Ne);
            Ne.forEach(((e, t) => {
                e.subscribe((r => {
                    (r || e.done) && Ne.delete(t)
                }))
            })), x.v7_partialHydration && d && _.errors && Object.entries(_.errors).filter((e => {
                let [t] = e;
                return !w.some((e => e.route.id === t))
            })).forEach((e => {
                let [t, r] = e;
                P = Object.assign(P || {}, {
                    [t]: r
                })
            }));
            let k = at(),
                L = nt(ie),
                A = k || L || E.length > 0;
            return t({
                matches: n,
                loaderData: M,
                errors: P
            }, A ? {
                fetchers: new Map(_.fetchers)
            } : {})
        }(y, n, s, d.active, l, o && o.submission, o && o.fetcherSubmission, o && o.replace, o && !0 === o.initialHydration, u, m);
        w || (T = null, $e(n, t({
            matches: E || s
        }, ge(m), {
            loaderData: S,
            errors: D
        })))
    }

    function qe(e) {
        return e && !Re(e[1]) ? {
            [e[0]]: e[1].data
        } : _.actionData ? 0 === Object.keys(_.actionData).length ? null : _.actionData : void 0
    }
    async function Ye(o, l, s) {
        let {
            submission: c,
            fetcherSubmission: d,
            replace: h
        } = void 0 === s ? {} : s;
        l.response.headers.has("X-Remix-Revalidate") && ($ = !0);
        let f = l.response.headers.get("Location");
        i(f, "Expected a Location header on the redirect Response"), f = he(f, new URL(o.url), b);
        let p = u(_.location, f, {
            _isRedirect: !0
        });
        if (n) {
            let t = !1;
            if (l.response.headers.has("X-Remix-Reload-Document")) t = !0;
            else if (Q.test(f)) {
                const r = e.history.createURL(f);
                t = r.origin !== a.location.origin || null == A(r.pathname, b)
            }
            if (t) return void(h ? a.location.replace(f) : a.location.assign(f))
        }
        T = null;
        let m = !0 === h || l.response.headers.has("X-Remix-Replace") ? r.Replace : r.Push,
            {
                formMethod: v,
                formAction: y,
                formEncType: g
            } = _.navigation;
        !c && !d && v && y && g && (c = Te(_.navigation));
        let w = c || d;
        if (V.has(l.response.status) && w && ke(w.formMethod)) await Je(m, p, {
            submission: t({}, w, {
                formAction: f
            }),
            preventScrollReset: B
        });
        else {
            let e = _e(p, c);
            await Je(m, p, {
                overrideNavigation: e,
                fetcherSubmission: d,
                preventScrollReset: B
            })
        }
    }
    async function Ve(e, r, a, n) {
        try {
            let o = await async function(e, r, a, n, o, l, s, u) {
                let c = n.reduce(((e, t) => e.add(t.route.id)), new Set),
                    d = new Set,
                    f = await e({
                        matches: o.map((e => {
                            let n = c.has(e.route.id);
                            return t({}, e, {
                                shouldLoad: n,
                                resolve: t => (d.add(e.route.id), n ? async function(e, t, r, a, n, o, l) {
                                    let s, u, c = a => {
                                        let n, i = new Promise(((e, t) => n = t));
                                        u = () => n(), t.signal.addEventListener("abort", u);
                                        let s, c = n => "function" != typeof a ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + r.route.id + "]")) : a({
                                            request: t,
                                            params: r.params,
                                            context: l
                                        }, ...void 0 !== n ? [n] : []);
                                        return s = o ? o((e => c(e))) : (async () => {
                                            try {
                                                return {
                                                    type: "data",
                                                    result: await c()
                                                }
                                            } catch (e) {
                                                return {
                                                    type: "error",
                                                    result: e
                                                }
                                            }
                                        })(), Promise.race([s, i])
                                    };
                                    try {
                                        let o = r.route[e];
                                        if (r.route.lazy)
                                            if (o) {
                                                let e, [t] = await Promise.all([c(o).catch((t => {
                                                    e = t
                                                })), ue(r.route, n, a)]);
                                                if (void 0 !== e) throw e;
                                                s = t
                                            } else {
                                                if (await ue(r.route, n, a), o = r.route[e], !o) {
                                                    if ("action" === e) {
                                                        let e = new URL(t.url),
                                                            a = e.pathname + e.search;
                                                        throw Ee(405, {
                                                            method: t.method,
                                                            pathname: a,
                                                            routeId: r.route.id
                                                        })
                                                    }
                                                    return {
                                                        type: h.data,
                                                        result: void 0
                                                    }
                                                }
                                                s = await c(o)
                                            }
                                        else {
                                            if (!o) {
                                                let e = new URL(t.url);
                                                throw Ee(404, {
                                                    pathname: e.pathname + e.search
                                                })
                                            }
                                            s = await c(o)
                                        }
                                        i(void 0 !== s.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + r.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
                                    } catch (d) {
                                        return {
                                            type: h.error,
                                            result: d
                                        }
                                    } finally {
                                        u && t.signal.removeEventListener("abort", u)
                                    }
                                    return s
                                }(r, a, e, l, s, t, u) : Promise.resolve({
                                    type: h.data,
                                    result: void 0
                                }))
                            })
                        })),
                        request: a,
                        params: o[0].params,
                        context: u
                    });
                return o.forEach((e => i(d.has(e.route.id), '`match.resolve()` was not called for route id "' + e.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'))), f.filter(((e, t) => c.has(o[t].route.id)))
            }(w, e, r, a, n, p, s);
            return await Promise.all(o.map(((e, t) => {
                if (function(e) {
                        return Pe(e.result) && Y.has(e.result.status)
                    }(e)) {
                    let o = e.result;
                    return {
                        type: h.redirect,
                        response: de(o, r, a[t].route.id, n, b, x.v7_relativeSplatPath)
                    }
                }
                return async function(e) {
                    let {
                        result: t,
                        type: r
                    } = e;
                    if (Pe(t)) {
                        let e;
                        try {
                            let r = t.headers.get("Content-Type");
                            e = r && /\bapplication\/json\b/.test(r) ? null == t.body ? null : await t.json() : await t.text()
                        } catch (u) {
                            return {
                                type: h.error,
                                error: u
                            }
                        }
                        return r === h.error ? {
                            type: h.error,
                            error: new z(t.status, t.statusText, e),
                            statusCode: t.status,
                            headers: t.headers
                        } : {
                            type: h.data,
                            data: e,
                            statusCode: t.status,
                            headers: t.headers
                        }
                    }
                    if (r === h.error) {
                        if (Me(t)) {
                            var a, n;
                            if (t.data instanceof Error) return {
                                type: h.error,
                                error: t.data,
                                statusCode: null == (n = t.init) ? void 0 : n.status
                            };
                            t = new z((null == (a = t.init) ? void 0 : a.status) || 500, void 0, t.data)
                        }
                        return {
                            type: h.error,
                            error: t,
                            statusCode: H(t) ? t.status : void 0
                        }
                    }
                    var o, i, l, s;
                    return function(e) {
                        let t = e;
                        return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
                    }(t) ? {
                        type: h.deferred,
                        deferredData: t,
                        statusCode: null == (o = t.init) ? void 0 : o.status,
                        headers: (null == (i = t.init) ? void 0 : i.headers) && new Headers(t.init.headers)
                    } : Me(t) ? {
                        type: h.data,
                        data: t.data,
                        statusCode: null == (l = t.init) ? void 0 : l.status,
                        headers: null != (s = t.init) && s.headers ? new Headers(t.init.headers) : void 0
                    } : {
                        type: h.data,
                        data: t
                    }
                }(e)
            })))
        } catch (o) {
            return a.map((() => ({
                type: h.error,
                error: o
            })))
        }
    }
    async function Xe(t, r, a, n, o) {
        let [i, ...l] = await Promise.all([a.length ? Ve("loader", o, a, r) : [], ...n.map((t => t.matches && t.match && t.controller ? Ve("loader", fe(e.history, t.path, t.controller.signal), [t.match], t.matches).then((e => e[0])) : Promise.resolve({
            type: h.error,
            error: Ee(404, {
                pathname: t.path
            })
        })))]);
        return await Promise.all([Le(t, a, i, i.map((() => o.signal)), !1, _.loaderData), Le(t, n.map((e => e.match)), l, n.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            loaderResults: i,
            fetcherResults: l
        }
    }

    function Ge() {
        $ = !0, J.push(...ct()), Se.forEach(((e, t) => {
            te.has(t) && (q.add(t), tt(t))
        }))
    }

    function Ke(e, t, r) {
        void 0 === r && (r = {}), _.fetchers.set(e, t), We({
            fetchers: new Map(_.fetchers)
        }, {
            flushSync: !0 === (r && r.flushSync)
        })
    }

    function Qe(e, t, r, a) {
        void 0 === a && (a = {});
        let n = be(_.matches, t);
        et(e), We({
            errors: {
                [n.route.id]: r
            },
            fetchers: new Map(_.fetchers)
        }, {
            flushSync: !0 === (a && a.flushSync)
        })
    }

    function Ze(e) {
        return x.v7_fetcherPersist && (Ue.set(e, (Ue.get(e) || 0) + 1), Ie.has(e) && Ie.delete(e)), _.fetchers.get(e) || G
    }

    function et(e) {
        let t = _.fetchers.get(e);
        !te.has(e) || t && "loading" === t.state && pe.has(e) || tt(e), Se.delete(e), pe.delete(e), me.delete(e), Ie.delete(e), q.delete(e), _.fetchers.delete(e)
    }

    function tt(e) {
        let t = te.get(e);
        i(t, "Expected fetch controller: " + e), t.abort(), te.delete(e)
    }

    function rt(e) {
        for (let t of e) {
            let e = Be(Ze(t).data);
            _.fetchers.set(t, e)
        }
    }

    function at() {
        let e = [],
            t = !1;
        for (let r of me) {
            let a = _.fetchers.get(r);
            i(a, "Expected fetcher: " + r), "loading" === a.state && (me.delete(r), e.push(r), t = !0)
        }
        return rt(e), t
    }

    function nt(e) {
        let t = [];
        for (let [r, a] of pe)
            if (a < e) {
                let e = _.fetchers.get(r);
                i(e, "Expected fetcher: " + r), "loading" === e.state && (tt(r), pe.delete(r), t.push(r))
            }
        return rt(t), t.length > 0
    }

    function ot(e) {
        _.blockers.delete(e), Fe.delete(e)
    }

    function it(e, t) {
        let r = _.blockers.get(e) || K;
        i("unblocked" === r.state && "blocked" === t.state || "blocked" === r.state && "blocked" === t.state || "blocked" === r.state && "proceeding" === t.state || "blocked" === r.state && "unblocked" === t.state || "proceeding" === r.state && "unblocked" === t.state, "Invalid blocker state transition: " + r.state + " -> " + t.state);
        let a = new Map(_.blockers);
        a.set(e, t), We({
            blockers: a
        })
    }

    function lt(e) {
        let {
            currentLocation: t,
            nextLocation: r,
            historyAction: a
        } = e;
        if (0 === Fe.size) return;
        Fe.size > 1 && l(!1, "A router only supports one blocker at a time");
        let n = Array.from(Fe.entries()),
            [o, i] = n[n.length - 1],
            s = _.blockers.get(o);
        return s && "proceeding" === s.state ? void 0 : i({
            currentLocation: t,
            nextLocation: r,
            historyAction: a
        }) ? o : void 0
    }

    function st(e) {
        let t = Ee(404, {
                pathname: e
            }),
            r = c || g,
            {
                matches: a,
                route: n
            } = we(r);
        return ct(), {
            notFoundMatches: a,
            route: n,
            error: t
        }
    }

    function ut(e, t) {
        return {
            boundaryId: be(t.partialMatches).route.id,
            error: Ee(400, {
                type: "route-discovery",
                pathname: e,
                message: null != t.error && "message" in t.error ? t.error : String(t.error)
            })
        }
    }

    function ct(e) {
        let t = [];
        return Ne.forEach(((r, a) => {
            e && !e(a) || (r.cancel(), t.push(a), Ne.delete(a))
        })), t
    }

    function dt(e, t) {
        return P && P(e, t.map((e => function(e, t) {
            let {
                route: r,
                pathname: a,
                params: n
            } = e;
            return {
                id: r.id,
                pathname: a,
                params: n,
                data: t[r.id],
                handle: r.handle
            }
        }(e, _.loaderData)))) || e.key
    }

    function ht(e, t) {
        if (M) {
            let r = dt(e, t),
                a = M[r];
            if ("number" == typeof a) return a
        }
        return null
    }

    function ft(e, t, r) {
        if (E) {
            if (C.has(r)) return {
                active: !1,
                matches: e
            };
            if (!e) return {
                active: !0,
                matches: y(t, r, b, !0) || []
            };
            if (Object.keys(e[0].params).length > 0) return {
                active: !0,
                matches: y(t, r, b, !0)
            }
        }
        return {
            active: !1,
            matches: null
        }
    }
    async function pt(e, t, r) {
        let a = e;
        for (;;) {
            let e = null == c,
                o = c || g;
            try {
                await le(E, t, a, o, p, s, ze, r)
            } catch (n) {
                return {
                    type: "error",
                    error: n,
                    partialMatches: a
                }
            } finally {
                e && (g = [...g])
            }
            if (r.aborted) return {
                type: "aborted"
            };
            let i = v(o, t, b);
            if (i) return mt(t, C), {
                type: "success",
                matches: i
            };
            let l = y(o, t, b, !0);
            if (!l || a.length === l.length && a.every(((e, t) => e.route.id === l[t].route.id))) return mt(t, C), {
                type: "success",
                matches: null
            };
            a = l
        }
    }

    function mt(e, t) {
        if (t.size >= R) {
            let e = t.values().next().value;
            t.delete(e)
        }
        t.add(e)
    }
    return f = {
        get basename() {
            return b
        },
        get future() {
            return x
        },
        get state() {
            return _
        },
        get routes() {
            return g
        },
        get window() {
            return a
        },
        initialize: function() {
            if (S = e.history.listen((t => {
                    let {
                        action: r,
                        location: a,
                        delta: n
                    } = t;
                    if (He) return void(He = !1);
                    l(0 === Fe.size || null != n, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                    let o = lt({
                        currentLocation: _.location,
                        nextLocation: a,
                        historyAction: r
                    });
                    return o && null != n ? (He = !0, e.history.go(-1 * n), void it(o, {
                        state: "blocked",
                        location: a,
                        proceed() {
                            it(o, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: a
                            }), e.history.go(n)
                        },
                        reset() {
                            let e = new Map(_.blockers);
                            e.set(o, K), We({
                                blockers: e
                            })
                        }
                    })) : Je(r, a)
                })), n) {
                ! function(e, t) {
                    try {
                        let r = e.sessionStorage.getItem(ee);
                        if (r) {
                            let e = JSON.parse(r);
                            for (let [r, a] of Object.entries(e || {})) a && Array.isArray(a) && t.set(r, new Set(a || []))
                        }
                    } catch (r) {}
                }(a, N);
                let e = () => function(e, t) {
                    if (t.size > 0) {
                        let a = {};
                        for (let [e, r] of t) a[e] = [...r];
                        try {
                            e.sessionStorage.setItem(ee, JSON.stringify(a))
                        } catch (r) {
                            l(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
                        }
                    }
                }(a, N);
                a.addEventListener("pagehide", e), F = () => a.removeEventListener("pagehide", e)
            }
            return _.initialized || Je(r.Pop, _.location, {
                initialHydration: !0
            }), f
        },
        subscribe: function(e) {
            return D.add(e), () => D.delete(e)
        },
        enableScrollRestoration: function(e, t, r) {
            if (M = e, k = t, P = r || null, !L && _.navigation === X) {
                L = !0;
                let e = ht(_.location, _.matches);
                null != e && We({
                    restoreScrollPosition: e
                })
            }
            return () => {
                M = null, k = null, P = null
            }
        },
        navigate: async function a(n, o) {
            if ("number" == typeof n) return void e.history.go(n);
            let i = re(_.location, _.matches, b, x.v7_prependBasename, n, x.v7_relativeSplatPath, null == o ? void 0 : o.fromRouteId, null == o ? void 0 : o.relative),
                {
                    path: l,
                    submission: s,
                    error: c
                } = ae(x.v7_normalizeFormMethod, !1, i, o),
                d = _.location,
                h = u(_.location, l, o && o.state);
            h = t({}, h, e.history.encodeLocation(h));
            let f = o && null != o.replace ? o.replace : void 0,
                p = r.Push;
            !0 === f ? p = r.Replace : !1 === f || null != s && ke(s.formMethod) && s.formAction === _.location.pathname + _.location.search && (p = r.Replace);
            let m = o && "preventScrollReset" in o ? !0 === o.preventScrollReset : void 0,
                v = !0 === (o && o.unstable_flushSync),
                y = lt({
                    currentLocation: d,
                    nextLocation: h,
                    historyAction: p
                });
            if (!y) return await Je(p, h, {
                submission: s,
                pendingError: c,
                preventScrollReset: m,
                replace: o && o.replace,
                enableViewTransition: o && o.unstable_viewTransition,
                flushSync: v
            });
            it(y, {
                state: "blocked",
                location: h,
                proceed() {
                    it(y, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: h
                    }), a(n, o)
                },
                reset() {
                    let e = new Map(_.blockers);
                    e.set(y, K), We({
                        blockers: e
                    })
                }
            })
        },
        fetch: function(t, r, a, n) {
            if (o) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            te.has(t) && tt(t);
            let l = !0 === (n && n.unstable_flushSync),
                s = c || g,
                u = re(_.location, _.matches, b, x.v7_prependBasename, a, x.v7_relativeSplatPath, r, null == n ? void 0 : n.relative),
                d = v(s, u, b),
                h = ft(d, s, u);
            if (h.active && h.matches && (d = h.matches), !d) return void Qe(t, r, Ee(404, {
                pathname: u
            }), {
                flushSync: l
            });
            let {
                path: f,
                submission: p,
                error: m
            } = ae(x.v7_normalizeFormMethod, !0, u, n);
            if (m) return void Qe(t, r, m, {
                flushSync: l
            });
            let y = je(d, f);
            B = !0 === (n && n.preventScrollReset), p && ke(p.formMethod) ? async function(t, r, a, n, o, l, s, u) {
                function d(e) {
                    if (!e.route.action && !e.route.lazy) {
                        let e = Ee(405, {
                            method: u.formMethod,
                            pathname: a,
                            routeId: r
                        });
                        return Qe(t, r, e, {
                            flushSync: s
                        }), !0
                    }
                    return !1
                }
                if (Ge(), Se.delete(t), !l && d(n)) return;
                let h = _.fetchers.get(t);
                Ke(t, function(e, t) {
                    return {
                        state: "submitting",
                        formMethod: e.formMethod,
                        formAction: e.formAction,
                        formEncType: e.formEncType,
                        formData: e.formData,
                        json: e.json,
                        text: e.text,
                        data: t ? t.data : void 0
                    }
                }(u, h), {
                    flushSync: s
                });
                let f = new AbortController,
                    p = fe(e.history, a, f.signal, u);
                if (l) {
                    let e = await pt(o, a, p.signal);
                    if ("aborted" === e.type) return;
                    if ("error" === e.type) {
                        let {
                            error: n
                        } = ut(a, e);
                        return void Qe(t, r, n, {
                            flushSync: s
                        })
                    }
                    if (!e.matches) return void Qe(t, r, Ee(404, {
                        pathname: a
                    }), {
                        flushSync: s
                    });
                    if (d(n = je(o = e.matches, a))) return
                }
                te.set(t, f);
                let m = oe,
                    y = (await Ve("action", p, [n], o))[0];
                if (p.signal.aborted) return void(te.get(t) === f && te.delete(t));
                if (x.v7_fetcherPersist && Ie.has(t)) {
                    if (Ce(y) || Re(y)) return void Ke(t, Be(void 0))
                } else {
                    if (Ce(y)) return te.delete(t), ie > m ? void Ke(t, Be(void 0)) : (me.add(t), Ke(t, Oe(u)), Ye(p, y, {
                        fetcherSubmission: u
                    }));
                    if (Re(y)) return void Qe(t, r, y.error)
                }
                if (De(y)) throw Ee(400, {
                    type: "defer-action"
                });
                let w = _.navigation.location || _.location,
                    E = fe(e.history, w, f.signal),
                    S = c || g,
                    D = "idle" !== _.navigation.state ? v(S, _.navigation.location, b) : _.matches;
                i(D, "Didn't find any matches after fetcher action");
                let R = ++oe;
                pe.set(t, R);
                let C = Oe(u, y.data);
                _.fetchers.set(t, C);
                let [M, P] = ne(e.history, _, D, u, w, !1, x.v7_skipActionErrorRevalidation, $, J, q, Ie, Se, me, S, b, [n.route.id, y]);
                P.filter((e => e.key !== t)).forEach((e => {
                    let t = e.key,
                        r = _.fetchers.get(t),
                        a = Oe(void 0, r ? r.data : void 0);
                    _.fetchers.set(t, a), te.has(t) && tt(t), e.controller && te.set(t, e.controller)
                })), We({
                    fetchers: new Map(_.fetchers)
                });
                let k = () => P.forEach((e => tt(e.key)));
                f.signal.addEventListener("abort", k);
                let {
                    loaderResults: L,
                    fetcherResults: A
                } = await Xe(_.matches, D, M, P, E);
                if (f.signal.aborted) return;
                f.signal.removeEventListener("abort", k), pe.delete(t), te.delete(t), P.forEach((e => te.delete(e.key)));
                let U = xe([...L, ...A]);
                if (U) {
                    if (U.idx >= M.length) {
                        let e = P[U.idx - M.length].key;
                        me.add(e)
                    }
                    return Ye(E, U.result)
                }
                let {
                    loaderData: j,
                    errors: B
                } = ve(_, _.matches, M, L, void 0, P, A, Ne);
                if (_.fetchers.has(t)) {
                    let e = Be(y.data);
                    _.fetchers.set(t, e)
                }
                nt(R), "loading" === _.navigation.state && R > ie ? (i(O, "Expected pending action"), T && T.abort(), $e(_.navigation.location, {
                    matches: D,
                    loaderData: j,
                    errors: B,
                    fetchers: new Map(_.fetchers)
                })) : (We({
                    errors: B,
                    loaderData: ye(_.loaderData, j, D, B),
                    fetchers: new Map(_.fetchers)
                }), $ = !1)
            }(t, r, f, y, d, h.active, l, p) : (Se.set(t, {
                routeId: r,
                path: f
            }), async function(t, r, a, n, o, l, s, u) {
                let c = _.fetchers.get(t);
                Ke(t, Oe(u, c ? c.data : void 0), {
                    flushSync: s
                });
                let d = new AbortController,
                    h = fe(e.history, a, d.signal);
                if (l) {
                    let e = await pt(o, a, h.signal);
                    if ("aborted" === e.type) return;
                    if ("error" === e.type) {
                        let {
                            error: n
                        } = ut(a, e);
                        return void Qe(t, r, n, {
                            flushSync: s
                        })
                    }
                    if (!e.matches) return void Qe(t, r, Ee(404, {
                        pathname: a
                    }), {
                        flushSync: s
                    });
                    n = je(o = e.matches, a)
                }
                te.set(t, d);
                let f = oe,
                    p = (await Ve("loader", h, [n], o))[0];
                if (De(p) && (p = await Ae(p, h.signal, !0) || p), te.get(t) === d && te.delete(t), !h.signal.aborted) {
                    if (!Ie.has(t)) return Ce(p) ? ie > f ? void Ke(t, Be(void 0)) : (me.add(t), void(await Ye(h, p))) : void(Re(p) ? Qe(t, r, p.error) : (i(!De(p), "Unhandled fetcher deferred data"), Ke(t, Be(p.data))));
                    Ke(t, Be(void 0))
                }
            }(t, r, f, y, d, h.active, l, p))
        },
        revalidate: function() {
            Ge(), We({
                revalidation: "loading"
            }), "submitting" !== _.navigation.state && ("idle" !== _.navigation.state ? Je(O || _.historyAction, _.navigation.location, {
                overrideNavigation: _.navigation
            }) : Je(_.historyAction, _.location, {
                startUninterruptedRevalidation: !0
            }))
        },
        createHref: t => e.history.createHref(t),
        encodeLocation: t => e.history.encodeLocation(t),
        getFetcher: Ze,
        deleteFetcher: function(e) {
            if (x.v7_fetcherPersist) {
                let t = (Ue.get(e) || 0) - 1;
                t <= 0 ? (Ue.delete(e), Ie.add(e)) : Ue.set(e, t)
            } else et(e);
            We({
                fetchers: new Map(_.fetchers)
            })
        },
        dispose: function() {
            S && S(), F && F(), D.clear(), T && T.abort(), _.fetchers.forEach(((e, t) => et(t))), _.blockers.forEach(((e, t) => ot(t)))
        },
        getBlocker: function(e, t) {
            let r = _.blockers.get(e) || K;
            return Fe.get(e) !== t && Fe.set(e, t), r
        },
        deleteBlocker: ot,
        patchRoutes: function(e, t) {
            let r = null == c;
            se(e, t, c || g, p, s), r && (g = [...g], We({}))
        },
        _internalFetchControllers: te,
        _internalActiveDeferreds: Ne,
        _internalSetRoutes: function(e) {
            p = {}, c = m(e, s, void 0, p)
        }
    }, f
}

function re(e, t, r, a, n, o, i, l) {
    let s, u;
    if (i) {
        s = [];
        for (let e of t)
            if (s.push(e), e.route.id === i) {
                u = e;
                break
            }
    } else s = t, u = t[t.length - 1];
    let d = _(n || ".", T(s, o), A(e.pathname, r) || e.pathname, "path" === l);
    return null == n && (d.search = e.search, d.hash = e.hash), null != n && "" !== n && "." !== n || !u || !u.route.index || Ue(d.search) || (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), a && "/" !== r && (d.pathname = "/" === d.pathname ? r : O([r, d.pathname])), c(d)
}

function ae(e, t, r, a) {
    if (!a || ! function(e) {
            return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body)
        }(a)) return {
        path: r
    };
    if (a.formMethod && (n = a.formMethod, !q.has(n.toLowerCase()))) return {
        path: r,
        error: Ee(405, {
            method: a.formMethod
        })
    };
    var n;
    let o, l, s = () => ({
            path: r,
            error: Ee(400, {
                type: "invalid-body"
            })
        }),
        u = a.formMethod || "get",
        h = e ? u.toUpperCase() : u.toLowerCase(),
        f = Se(r);
    if (void 0 !== a.body) {
        if ("text/plain" === a.formEncType) {
            if (!ke(h)) return s();
            let e = "string" == typeof a.body ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? Array.from(a.body.entries()).reduce(((e, t) => {
                let [r, a] = t;
                return "" + e + r + "=" + a + "\n"
            }), "") : String(a.body);
            return {
                path: r,
                submission: {
                    formMethod: h,
                    formAction: f,
                    formEncType: a.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: e
                }
            }
        }
        if ("application/json" === a.formEncType) {
            if (!ke(h)) return s();
            try {
                let e = "string" == typeof a.body ? JSON.parse(a.body) : a.body;
                return {
                    path: r,
                    submission: {
                        formMethod: h,
                        formAction: f,
                        formEncType: a.formEncType,
                        formData: void 0,
                        json: e,
                        text: void 0
                    }
                }
            } catch (v) {
                return s()
            }
        }
    }
    if (i("function" == typeof FormData, "FormData is not available in this environment"), a.formData) o = pe(a.formData), l = a.formData;
    else if (a.body instanceof FormData) o = pe(a.body), l = a.body;
    else if (a.body instanceof URLSearchParams) o = a.body, l = me(o);
    else if (null == a.body) o = new URLSearchParams, l = new FormData;
    else try {
        o = new URLSearchParams(a.body), l = me(o)
    } catch (v) {
        return s()
    }
    let p = {
        formMethod: h,
        formAction: f,
        formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
        formData: l,
        json: void 0,
        text: void 0
    };
    if (ke(p.formMethod)) return {
        path: r,
        submission: p
    };
    let m = d(r);
    return t && m.search && Ue(m.search) && o.append("index", ""), m.search = "?" + o, {
        path: c(m),
        submission: p
    }
}

function ne(e, r, a, n, o, i, l, s, u, c, d, h, f, p, m, y) {
    let g = y ? Re(y[1]) ? y[1].error : y[1].data : void 0,
        b = e.createURL(r.location),
        w = e.createURL(o),
        E = y && Re(y[1]) ? y[0] : void 0,
        x = E ? function(e, t) {
            let r = e;
            if (t) {
                let a = e.findIndex((e => e.route.id === t));
                a >= 0 && (r = e.slice(0, a))
            }
            return r
        }(a, E) : a,
        S = y ? y[1].statusCode : void 0,
        D = l && S && S >= 400,
        R = x.filter(((e, a) => {
            let {
                route: o
            } = e;
            if (o.lazy) return !0;
            if (null == o.loader) return !1;
            if (i) return !("function" == typeof o.loader && !o.loader.hydrate && (void 0 !== r.loaderData[o.id] || r.errors && void 0 !== r.errors[o.id]));
            if (function(e, t, r) {
                    let a = !t || r.route.id !== t.route.id,
                        n = void 0 === e[r.route.id];
                    return a || n
                }(r.loaderData, r.matches[a], e) || u.some((t => t === e.route.id))) return !0;
            let l = r.matches[a],
                c = e;
            return ie(e, t({
                currentUrl: b,
                currentParams: l.params,
                nextUrl: w,
                nextParams: c.params
            }, n, {
                actionResult: g,
                actionStatus: S,
                defaultShouldRevalidate: !D && (s || b.pathname + b.search === w.pathname + w.search || b.search !== w.search || oe(l, c))
            }))
        })),
        C = [];
    return h.forEach(((e, o) => {
        if (i || !a.some((t => t.route.id === e.routeId)) || d.has(o)) return;
        let l = v(p, e.path, m);
        if (!l) return void C.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
        });
        let u = r.fetchers.get(o),
            h = je(l, e.path),
            y = !1;
        f.has(o) ? y = !1 : c.has(o) ? (c.delete(o), y = !0) : y = u && "idle" !== u.state && void 0 === u.data ? s : ie(h, t({
            currentUrl: b,
            currentParams: r.matches[r.matches.length - 1].params,
            nextUrl: w,
            nextParams: a[a.length - 1].params
        }, n, {
            actionResult: g,
            actionStatus: S,
            defaultShouldRevalidate: !D && s
        })), y && C.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: l,
            match: h,
            controller: new AbortController
        })
    })), [R, C]
}

function oe(e, t) {
    let r = e.route.path;
    return e.pathname !== t.pathname || null != r && r.endsWith("*") && e.params["*"] !== t.params["*"]
}

function ie(e, t) {
    if (e.route.shouldRevalidate) {
        let r = e.route.shouldRevalidate(t);
        if ("boolean" == typeof r) return r
    }
    return t.defaultShouldRevalidate
}
async function le(e, t, r, a, n, o, i, l) {
    let s = [t, ...r.map((e => e.route.id))].join("-");
    try {
        let c = i.get(s);
        c || (c = e({
            path: t,
            matches: r,
            patch: (e, t) => {
                l.aborted || se(e, t, a, n, o)
            }
        }), i.set(s, c)), c && "object" == typeof(u = c) && null != u && "then" in u && await c
    } finally {
        i.delete(s)
    }
    var u
}

function se(e, t, r, a, n) {
    if (e) {
        var o;
        let r = a[e];
        i(r, "No route found to patch children into: routeId = " + e);
        let l = m(t, n, [e, "patch", String((null == (o = r.children) ? void 0 : o.length) || "0")], a);
        r.children ? r.children.push(...l) : r.children = l
    } else {
        let e = m(t, n, ["patch", String(r.length || "0")], a);
        r.push(...e)
    }
}
async function ue(e, r, a) {
    if (!e.lazy) return;
    let n = await e.lazy();
    if (!e.lazy) return;
    let o = a[e.id];
    i(o, "No route found in manifest");
    let s = {};
    for (let t in n) {
        let e = void 0 !== o[t] && "hasErrorBoundary" !== t;
        l(!e, 'Route "' + o.id + '" has a static property "' + t + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + t + '" will be ignored.'), e || p.has(t) || (s[t] = n[t])
    }
    Object.assign(o, s), Object.assign(o, t({}, r(o), {
        lazy: void 0
    }))
}

function ce(e) {
    return Promise.all(e.matches.map((e => e.resolve())))
}

function de(e, t, r, a, n, o) {
    let l = e.headers.get("Location");
    if (i(l, "Redirects returned/thrown from loaders/actions must have a Location header"), !Q.test(l)) {
        let i = a.slice(0, a.findIndex((e => e.route.id === r)) + 1);
        l = re(new URL(t.url), i, n, !0, l, o), e.headers.set("Location", l)
    }
    return e
}

function he(e, t, r) {
    if (Q.test(e)) {
        let a = e,
            n = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a),
            o = null != A(n.pathname, r);
        if (n.origin === t.origin && o) return n.pathname + n.search + n.hash
    }
    return e
}

function fe(e, t, r, a) {
    let n = e.createURL(Se(t)).toString(),
        o = {
            signal: r
        };
    if (a && ke(a.formMethod)) {
        let {
            formMethod: e,
            formEncType: t
        } = a;
        o.method = e.toUpperCase(), "application/json" === t ? (o.headers = new Headers({
            "Content-Type": t
        }), o.body = JSON.stringify(a.json)) : "text/plain" === t ? o.body = a.text : "application/x-www-form-urlencoded" === t && a.formData ? o.body = pe(a.formData) : o.body = a.formData
    }
    return new Request(n, o)
}

function pe(e) {
    let t = new URLSearchParams;
    for (let [r, a] of e.entries()) t.append(r, "string" == typeof a ? a : a.name);
    return t
}

function me(e) {
    let t = new FormData;
    for (let [r, a] of e.entries()) t.append(r, a);
    return t
}

function ve(e, r, a, n, o, l, s, u) {
    let {
        loaderData: c,
        errors: d
    } = function(e, t, r, a, n) {
        let o, l = {},
            s = null,
            u = !1,
            c = {},
            d = a && Re(a[1]) ? a[1].error : void 0;
        return r.forEach(((r, a) => {
            let h = t[a].route.id;
            if (i(!Ce(r), "Cannot handle redirect results in processLoaderData"), Re(r)) {
                let t = r.error;
                void 0 !== d && (t = d, d = void 0), s = s || {}; {
                    let r = be(e, h);
                    null == s[r.route.id] && (s[r.route.id] = t)
                }
                l[h] = void 0, u || (u = !0, o = H(r.error) ? r.error.status : 500), r.headers && (c[h] = r.headers)
            } else De(r) ? (n.set(h, r.deferredData), l[h] = r.deferredData.data, null == r.statusCode || 200 === r.statusCode || u || (o = r.statusCode), r.headers && (c[h] = r.headers)) : (l[h] = r.data, r.statusCode && 200 !== r.statusCode && !u && (o = r.statusCode), r.headers && (c[h] = r.headers))
        })), void 0 !== d && a && (s = {
            [a[0]]: d
        }, l[a[0]] = void 0), {
            loaderData: l,
            errors: s,
            statusCode: o || 200,
            loaderHeaders: c
        }
    }(r, a, n, o, u);
    for (let h = 0; h < l.length; h++) {
        let {
            key: r,
            match: a,
            controller: n
        } = l[h];
        i(void 0 !== s && void 0 !== s[h], "Did not find corresponding fetcher result");
        let o = s[h];
        if (!n || !n.signal.aborted)
            if (Re(o)) {
                let n = be(e.matches, null == a ? void 0 : a.route.id);
                d && d[n.route.id] || (d = t({}, d, {
                    [n.route.id]: o.error
                })), e.fetchers.delete(r)
            } else if (Ce(o)) i(!1, "Unhandled fetcher revalidation redirect");
        else if (De(o)) i(!1, "Unhandled fetcher deferred data");
        else {
            let t = Be(o.data);
            e.fetchers.set(r, t)
        }
    }
    return {
        loaderData: c,
        errors: d
    }
}

function ye(e, r, a, n) {
    let o = t({}, r);
    for (let t of a) {
        let a = t.route.id;
        if (r.hasOwnProperty(a) ? void 0 !== r[a] && (o[a] = r[a]) : void 0 !== e[a] && t.route.loader && (o[a] = e[a]), n && n.hasOwnProperty(a)) break
    }
    return o
}

function ge(e) {
    return e ? Re(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function be(e, t) {
    return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
}

function we(e) {
    let t = 1 === e.length ? e[0] : e.find((e => e.index || !e.path || "/" === e.path)) || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Ee(e, t) {
    let {
        pathname: r,
        routeId: a,
        method: n,
        type: o,
        message: i
    } = void 0 === t ? {} : t, l = "Unknown Server Error", s = "Unknown @remix-run/router error";
    return 400 === e ? (l = "Bad Request", "route-discovery" === o ? s = 'Unable to match URL "' + r + '" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n' + i : n && r && a ? s = "You made a " + n + ' request to "' + r + '" but did not provide a `loader` for route "' + a + '", so there is no way to handle the request.' : "defer-action" === o ? s = "defer() is not supported in actions" : "invalid-body" === o && (s = "Unable to encode submission body")) : 403 === e ? (l = "Forbidden", s = 'Route "' + a + '" does not match URL "' + r + '"') : 404 === e ? (l = "Not Found", s = 'No route matches URL "' + r + '"') : 405 === e && (l = "Method Not Allowed", n && r && a ? s = "You made a " + n.toUpperCase() + ' request to "' + r + '" but did not provide an `action` for route "' + a + '", so there is no way to handle the request.' : n && (s = 'Invalid request method "' + n.toUpperCase() + '"')), new z(e || 500, l, new Error(s), !0)
}

function xe(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        if (Ce(r)) return {
            result: r,
            idx: t
        }
    }
}

function Se(e) {
    return c(t({}, "string" == typeof e ? d(e) : e, {
        hash: ""
    }))
}

function De(e) {
    return e.type === h.deferred
}

function Re(e) {
    return e.type === h.error
}

function Ce(e) {
    return (e && e.type) === h.redirect
}

function Me(e) {
    return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type
}

function Pe(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body
}

function ke(e) {
    return $.has(e.toLowerCase())
}
async function Le(e, t, r, a, n, o) {
    for (let l = 0; l < r.length; l++) {
        let s = r[l],
            u = t[l];
        if (!u) continue;
        let c = e.find((e => e.route.id === u.route.id)),
            d = null != c && !oe(c, u) && void 0 !== (o && o[u.route.id]);
        if (De(s) && (n || d)) {
            let e = a[l];
            i(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await Ae(s, e, n).then((e => {
                e && (r[l] = e || r[l])
            }))
        }
    }
}
async function Ae(e, t, r) {
    if (void 0 === r && (r = !1), !(await e.deferredData.resolveData(t))) {
        if (r) try {
            return {
                type: h.data,
                data: e.deferredData.unwrappedData
            }
        } catch (a) {
            return {
                type: h.error,
                error: a
            }
        }
        return {
            type: h.data,
            data: e.deferredData.data
        }
    }
}

function Ue(e) {
    return new URLSearchParams(e).getAll("index").some((e => "" === e))
}

function je(e, t) {
    let r = "string" == typeof t ? d(t).search : t.search;
    if (e[e.length - 1].route.index && Ue(r || "")) return e[e.length - 1];
    let a = j(e);
    return a[a.length - 1]
}

function Te(e) {
    let {
        formMethod: t,
        formAction: r,
        formEncType: a,
        text: n,
        formData: o,
        json: i
    } = e;
    if (t && r && a) return null != n ? {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: void 0,
        text: n
    } : null != o ? {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: o,
        json: void 0,
        text: void 0
    } : void 0 !== i ? {
        formMethod: t,
        formAction: r,
        formEncType: a,
        formData: void 0,
        json: i,
        text: void 0
    } : void 0
}

function _e(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function Oe(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function Be(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function Ie() {
    return Ie = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, Ie.apply(this, arguments)
}
const Ne = e.createContext(null),
    Fe = e.createContext(null),
    ze = e.createContext(null),
    He = e.createContext(null),
    We = e.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    $e = e.createContext(null);

function Je(t, r) {
    let {
        relative: a
    } = void 0 === r ? {} : r;
    qe() || i(!1);
    let {
        basename: n,
        navigator: o
    } = e.useContext(ze), {
        hash: l,
        pathname: s,
        search: u
    } = Qe(t, {
        relative: a
    }), c = s;
    return "/" !== n && (c = "/" === s ? n : O([n, s])), o.createHref({
        pathname: c,
        search: u,
        hash: l
    })
}

function qe() {
    return null != e.useContext(He)
}

function Ye() {
    return qe() || i(!1), e.useContext(He).location
}

function Ve(t) {
    e.useContext(ze).static || e.useLayoutEffect(t)
}

function Xe() {
    let {
        isDataRoute: t
    } = e.useContext(We);
    return t ? function() {
        let {
            router: t
        } = function() {
            let t = e.useContext(Ne);
            return t || i(!1), t
        }(nt.UseNavigateStable), r = it(ot.UseNavigateStable), a = e.useRef(!1);
        return Ve((() => {
            a.current = !0
        })), e.useCallback((function(e, n) {
            void 0 === n && (n = {}), a.current && ("number" == typeof e ? t.navigate(e) : t.navigate(e, Ie({
                fromRouteId: r
            }, n)))
        }), [t, r])
    }() : function() {
        qe() || i(!1);
        let t = e.useContext(Ne),
            {
                basename: r,
                future: a,
                navigator: n
            } = e.useContext(ze),
            {
                matches: o
            } = e.useContext(We),
            {
                pathname: l
            } = Ye(),
            s = JSON.stringify(T(o, a.v7_relativeSplatPath)),
            u = e.useRef(!1);
        return Ve((() => {
            u.current = !0
        })), e.useCallback((function(e, a) {
            if (void 0 === a && (a = {}), !u.current) return;
            if ("number" == typeof e) return void n.go(e);
            let o = _(e, JSON.parse(s), l, "path" === a.relative);
            null == t && "/" !== r && (o.pathname = "/" === o.pathname ? r : O([r, o.pathname])), (a.replace ? n.replace : n.push)(o, a.state, a)
        }), [r, n, s, l, t])
    }()
}
const Ge = e.createContext(null);

function Ke() {
    let {
        matches: t
    } = e.useContext(We), r = t[t.length - 1];
    return r ? r.params : {}
}

function Qe(t, r) {
    let {
        relative: a
    } = void 0 === r ? {} : r, {
        future: n
    } = e.useContext(ze), {
        matches: o
    } = e.useContext(We), {
        pathname: i
    } = Ye(), l = JSON.stringify(T(o, n.v7_relativeSplatPath));
    return e.useMemo((() => _(t, JSON.parse(l), i, "path" === a)), [t, l, i, a])
}

function Ze(t, r, a, n) {
    qe() || i(!1);
    let {
        navigator: o
    } = e.useContext(ze), {
        matches: l
    } = e.useContext(We), s = l[l.length - 1], u = s ? s.params : {};
    !s || s.pathname;
    let c, d = s ? s.pathnameBase : "/";
    s && s.route, c = Ye();
    let h = c.pathname || "/",
        f = h;
    if ("/" !== d) {
        let e = d.replace(/^\//, "").split("/");
        f = "/" + h.replace(/^\//, "").split("/").slice(e.length).join("/")
    }
    let p = v(t, {
            pathname: f
        }),
        m = function(t, r, a, n) {
            var o;
            if (void 0 === r && (r = []), void 0 === a && (a = null), void 0 === n && (n = null), null == t) {
                var l;
                if (!a) return null;
                if (a.errors) t = a.matches;
                else {
                    if (!(null != (l = n) && l.v7_partialHydration && 0 === r.length && !a.initialized && a.matches.length > 0)) return null;
                    t = a.matches
                }
            }
            let s = t,
                u = null == (o = a) ? void 0 : o.errors;
            if (null != u) {
                let e = s.findIndex((e => e.route.id && void 0 !== (null == u ? void 0 : u[e.route.id])));
                e >= 0 || i(!1), s = s.slice(0, Math.min(s.length, e + 1))
            }
            let c = !1,
                d = -1;
            if (a && n && n.v7_partialHydration)
                for (let e = 0; e < s.length; e++) {
                    let t = s[e];
                    if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id) {
                        let {
                            loaderData: e,
                            errors: r
                        } = a, n = t.route.loader && void 0 === e[t.route.id] && (!r || void 0 === r[t.route.id]);
                        if (t.route.lazy || n) {
                            c = !0, s = d >= 0 ? s.slice(0, d + 1) : [s[0]];
                            break
                        }
                    }
                }
            return s.reduceRight(((t, n, o) => {
                let i, l = !1,
                    h = null,
                    f = null;
                a && (i = u && n.route.id ? u[n.route.id] : void 0, h = n.route.errorElement || tt, c && (d < 0 && 0 === o ? (l = !0, f = null) : d === o && (l = !0, f = n.route.hydrateFallbackElement || null)));
                let p = r.concat(s.slice(0, o + 1)),
                    m = () => {
                        let r;
                        return r = i ? h : l ? f : n.route.Component ? e.createElement(n.route.Component, null) : n.route.element ? n.route.element : t, e.createElement(at, {
                            match: n,
                            routeContext: {
                                outlet: t,
                                matches: p,
                                isDataRoute: null != a
                            },
                            children: r
                        })
                    };
                return a && (n.route.ErrorBoundary || n.route.errorElement || 0 === o) ? e.createElement(rt, {
                    location: a.location,
                    revalidation: a.revalidation,
                    component: h,
                    error: i,
                    children: m(),
                    routeContext: {
                        outlet: null,
                        matches: p,
                        isDataRoute: !0
                    }
                }) : m()
            }), null)
        }(p && p.map((e => Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: O([d, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? d : O([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        }))), l, a, n);
    return m
}

function et() {
    let t = lt(),
        r = H(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        a = t instanceof Error ? t.stack : null;
    return e.createElement(e.Fragment, null, e.createElement("h2", null, "Unexpected Application Error!"), e.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), a ? e.createElement("pre", {
        style: {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        }
    }, a) : null, null)
}
const tt = e.createElement(et, null);
class rt extends e.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {}
    render() {
        return void 0 !== this.state.error ? e.createElement(We.Provider, {
            value: this.props.routeContext
        }, e.createElement($e.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function at(t) {
    let {
        routeContext: r,
        match: a,
        children: n
    } = t, o = e.useContext(Ne);
    return o && o.static && o.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = a.route.id), e.createElement(We.Provider, {
        value: r
    }, n)
}
var nt = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(nt || {}),
    ot = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(ot || {});

function it(t) {
    let r = function() {
            let t = e.useContext(We);
            return t || i(!1), t
        }(),
        a = r.matches[r.matches.length - 1];
    return a.route.id || i(!1), a.route.id
}

function lt() {
    var t;
    let r = e.useContext($e),
        a = function() {
            let t = e.useContext(Fe);
            return t || i(!1), t
        }(ot.UseRouteError),
        n = it(ot.UseRouteError);
    return void 0 !== r ? r : null == (t = a.errors) ? void 0 : t[n]
}

function st(t) {
    let {
        to: r,
        replace: a,
        state: n,
        relative: o
    } = t;
    qe() || i(!1);
    let {
        future: l,
        static: s
    } = e.useContext(ze), {
        matches: u
    } = e.useContext(We), {
        pathname: c
    } = Ye(), d = Xe(), h = _(r, T(u, l.v7_relativeSplatPath), c, "path" === o), f = JSON.stringify(h);
    return e.useEffect((() => d(JSON.parse(f), {
        replace: a,
        state: n,
        relative: o
    })), [d, f, o, a, n]), null
}

function ut(t) {
    return function(t) {
        let r = e.useContext(We).outlet;
        return r ? e.createElement(Ge.Provider, {
            value: t
        }, r) : r
    }(t.context)
}

function ct(t) {
    let {
        basename: a = "/",
        children: n = null,
        location: o,
        navigationType: l = r.Pop,
        navigator: s,
        static: u = !1,
        future: c
    } = t;
    qe() && i(!1);
    let h = a.replace(/^\/*/, "/"),
        f = e.useMemo((() => ({
            basename: h,
            navigator: s,
            static: u,
            future: Ie({
                v7_relativeSplatPath: !1
            }, c)
        })), [h, c, s, u]);
    "string" == typeof o && (o = d(o));
    let {
        pathname: p = "/",
        search: m = "",
        hash: v = "",
        state: y = null,
        key: g = "default"
    } = o, b = e.useMemo((() => {
        let e = A(p, h);
        return null == e ? null : {
            location: {
                pathname: e,
                search: m,
                hash: v,
                state: y,
                key: g
            },
            navigationType: l
        }
    }), [h, p, m, v, y, g, l]);
    return null == b ? null : e.createElement(ze.Provider, {
        value: f
    }, e.createElement(He.Provider, {
        children: n,
        value: b
    }))
}

function dt(t) {
    let r = {
        hasErrorBoundary: null != t.ErrorBoundary || null != t.errorElement
    };
    return t.Component && Object.assign(r, {
        element: e.createElement(t.Component),
        Component: void 0
    }), t.HydrateFallback && Object.assign(r, {
        hydrateFallbackElement: e.createElement(t.HydrateFallback),
        HydrateFallback: void 0
    }), t.ErrorBoundary && Object.assign(r, {
        errorElement: e.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0
    }), r
}
new Promise((() => {}));
export {
    Fe as D, z as E, ze as N, ut as O, ct as R, Qe as a, Ye as b, Xe as c, c as d, te as e, o as f, dt as g, Ne as h, i, Ze as j, Ke as k, lt as l, k as m, st as n, F as r, A as s, Je as u
};