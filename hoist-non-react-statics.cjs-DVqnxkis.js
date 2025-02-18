import {
    g as e
} from "./index-klX-IjEm.js";
var t = {
        exports: {}
    },
    r = {},
    o = "function" == typeof Symbol && Symbol.for,
    n = o ? Symbol.for("react.element") : 60103,
    c = o ? Symbol.for("react.portal") : 60106,
    f = o ? Symbol.for("react.fragment") : 60107,
    a = o ? Symbol.for("react.strict_mode") : 60108,
    s = o ? Symbol.for("react.profiler") : 60114,
    p = o ? Symbol.for("react.provider") : 60109,
    y = o ? Symbol.for("react.context") : 60110,
    i = o ? Symbol.for("react.async_mode") : 60111,
    u = o ? Symbol.for("react.concurrent_mode") : 60111,
    l = o ? Symbol.for("react.forward_ref") : 60112,
    m = o ? Symbol.for("react.suspense") : 60113,
    d = o ? Symbol.for("react.suspense_list") : 60120,
    b = o ? Symbol.for("react.memo") : 60115,
    $ = o ? Symbol.for("react.lazy") : 60116,
    S = o ? Symbol.for("react.block") : 60121,
    g = o ? Symbol.for("react.fundamental") : 60117,
    P = o ? Symbol.for("react.responder") : 60118,
    v = o ? Symbol.for("react.scope") : 60119;

function x(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case n:
                switch (e = e.type) {
                    case i:
                    case u:
                    case f:
                    case s:
                    case a:
                    case m:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case y:
                            case l:
                            case $:
                            case b:
                            case p:
                                return e;
                            default:
                                return t
                        }
                }
            case c:
                return t
        }
    }
}

function O(e) {
    return x(e) === u
}
r.AsyncMode = i, r.ConcurrentMode = u, r.ContextConsumer = y, r.ContextProvider = p, r.Element = n, r.ForwardRef = l, r.Fragment = f, r.Lazy = $, r.Memo = b, r.Portal = c, r.Profiler = s, r.StrictMode = a, r.Suspense = m, r.isAsyncMode = function(e) {
    return O(e) || x(e) === i
}, r.isConcurrentMode = O, r.isContextConsumer = function(e) {
    return x(e) === y
}, r.isContextProvider = function(e) {
    return x(e) === p
}, r.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === n
}, r.isForwardRef = function(e) {
    return x(e) === l
}, r.isFragment = function(e) {
    return x(e) === f
}, r.isLazy = function(e) {
    return x(e) === $
}, r.isMemo = function(e) {
    return x(e) === b
}, r.isPortal = function(e) {
    return x(e) === c
}, r.isProfiler = function(e) {
    return x(e) === s
}, r.isStrictMode = function(e) {
    return x(e) === a
}, r.isSuspense = function(e) {
    return x(e) === m
}, r.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === f || e === u || e === s || e === a || e === m || e === d || "object" == typeof e && null !== e && (e.$$typeof === $ || e.$$typeof === b || e.$$typeof === p || e.$$typeof === y || e.$$typeof === l || e.$$typeof === g || e.$$typeof === P || e.$$typeof === v || e.$$typeof === S)
}, r.typeOf = x, t.exports = r;
var j = t.exports,
    w = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    M = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    C = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    h = {};

function F(e) {
    return j.isMemo(e) ? C : h[e.$$typeof] || w
}
h[j.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, h[j.Memo] = C;
var T = Object.defineProperty,
    _ = Object.getOwnPropertyNames,
    D = Object.getOwnPropertySymbols,
    E = Object.getOwnPropertyDescriptor,
    N = Object.getPrototypeOf,
    z = Object.prototype;
const R = e((function e(t, r, o) {
    if ("string" != typeof r) {
        if (z) {
            var n = N(r);
            n && n !== z && e(t, n, o)
        }
        var c = _(r);
        D && (c = c.concat(D(r)));
        for (var f = F(t), a = F(r), s = 0; s < c.length; ++s) {
            var p = c[s];
            if (!(M[p] || o && o[p] || a && a[p] || f && f[p])) {
                var y = E(r, p);
                try {
                    T(t, p, y)
                } catch (i) {}
            }
        }
    }
    return t
}));
export {
    R as h
};