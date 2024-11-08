function e(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if ("string" != typeof n && !Array.isArray(n))
            for (const t in n)
                if ("default" !== t && !(t in e)) {
                    const r = Object.getOwnPropertyDescriptor(n, t);
                    r && Object.defineProperty(e, t, r.get ? r : {
                        enumerable: !0,
                        get: () => n[t]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function r(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function n(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
        var r = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach((function(t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    })), r
}
var o = {
        exports: {}
    },
    u = {},
    a = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    s = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    h = Symbol.iterator,
    v = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    m = Object.assign,
    S = {};

function g(e, t, r) {
    this.props = e, this.context = t, this.refs = S, this.updater = r || v
}

function w() {}

function j(e, t, r) {
    this.props = e, this.context = t, this.refs = S, this.updater = r || v
}
g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}, g.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, w.prototype = g.prototype;
var E = j.prototype = new w;
E.constructor = j, m(E, g.prototype), E.isPureReactComponent = !0;
var O = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    $ = {
        current: null
    },
    k = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function C(e, t, r) {
    var n, o = {},
        u = null,
        c = null;
    if (null != t)
        for (n in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (u = "" + t.key), t) R.call(t, n) && !k.hasOwnProperty(n) && (o[n] = t[n]);
    var f = arguments.length - 2;
    if (1 === f) o.children = r;
    else if (1 < f) {
        for (var i = Array(f), l = 0; l < f; l++) i[l] = arguments[l + 2];
        o.children = i
    }
    if (e && e.defaultProps)
        for (n in f = e.defaultProps) void 0 === o[n] && (o[n] = f[n]);
    return {
        $$typeof: a,
        type: e,
        key: u,
        ref: c,
        props: o,
        _owner: $.current
    }
}

function P(e) {
    return "object" == typeof e && null !== e && e.$$typeof === a
}
var x = /\/+/g;

function I(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? function(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, (function(e) {
            return t[e]
        }))
    }("" + e.key) : t.toString(36)
}

function T(e, t, r, n, o) {
    var u = typeof e;
    "undefined" !== u && "boolean" !== u || (e = null);
    var f = !1;
    if (null === e) f = !0;
    else switch (u) {
        case "string":
        case "number":
            f = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case a:
                case c:
                    f = !0
            }
    }
    if (f) return o = o(f = e), e = "" === n ? "." + I(f, 0) : n, O(o) ? (r = "", null != e && (r = e.replace(x, "$&/") + "/"), T(o, t, r, "", (function(e) {
        return e
    }))) : null != o && (P(o) && (o = function(e, t) {
        return {
            $$typeof: a,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }(o, r + (!o.key || f && f.key === o.key ? "" : ("" + o.key).replace(x, "$&/") + "/") + e)), t.push(o)), 1;
    if (f = 0, n = "" === n ? "." : n + ":", O(e))
        for (var i = 0; i < e.length; i++) {
            var l = n + I(u = e[i], i);
            f += T(u, t, r, l, o)
        } else if (l = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof l)
            for (e = l.call(e), i = 0; !(u = e.next()).done;) f += T(u = u.value, t, r, l = n + I(u, i++), o);
        else if ("object" === u) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f
}

function A(e, t, r) {
    if (null == e) return e;
    var n = [],
        o = 0;
    return T(e, n, "", "", (function(e) {
        return t.call(r, e, o++)
    })), n
}

function D(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then((function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
        }), (function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
        })), -1 === e._status && (e._status = 0, e._result = t)
    }
    if (1 === e._status) return e._result.default;
    throw e._result
}
var M = {
        current: null
    },
    V = {
        transition: null
    },
    U = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: $
    };

function q() {
    throw Error("act(...) is not supported in production builds of React.")
}
u.Children = {
    map: A,
    forEach: function(e, t, r) {
        A(e, (function() {
            t.apply(this, arguments)
        }), r)
    },
    count: function(e) {
        var t = 0;
        return A(e, (function() {
            t++
        })), t
    },
    toArray: function(e) {
        return A(e, (function(e) {
            return e
        })) || []
    },
    only: function(e) {
        if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
}, u.Component = g, u.Fragment = f, u.Profiler = l, u.PureComponent = j, u.StrictMode = i, u.Suspense = d, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, u.act = q, u.cloneElement = function(e, t, r) {
    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = m({}, e.props),
        o = e.key,
        u = e.ref,
        c = e._owner;
    if (null != t) {
        if (void 0 !== t.ref && (u = t.ref, c = $.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var f = e.type.defaultProps;
        for (i in t) R.call(t, i) && !k.hasOwnProperty(i) && (n[i] = void 0 === t[i] && void 0 !== f ? f[i] : t[i])
    }
    var i = arguments.length - 2;
    if (1 === i) n.children = r;
    else if (1 < i) {
        f = Array(i);
        for (var l = 0; l < i; l++) f[l] = arguments[l + 2];
        n.children = f
    }
    return {
        $$typeof: a,
        type: e.type,
        key: o,
        ref: u,
        props: n,
        _owner: c
    }
}, u.createContext = function(e) {
    return (e = {
        $$typeof: p,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }).Provider = {
        $$typeof: s,
        _context: e
    }, e.Consumer = e
}, u.createElement = C, u.createFactory = function(e) {
    var t = C.bind(null, e);
    return t.type = e, t
}, u.createRef = function() {
    return {
        current: null
    }
}, u.forwardRef = function(e) {
    return {
        $$typeof: y,
        render: e
    }
}, u.isValidElement = P, u.lazy = function(e) {
    return {
        $$typeof: b,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: D
    }
}, u.memo = function(e, t) {
    return {
        $$typeof: _,
        type: e,
        compare: void 0 === t ? null : t
    }
}, u.startTransition = function(e) {
    var t = V.transition;
    V.transition = {};
    try {
        e()
    } finally {
        V.transition = t
    }
}, u.unstable_act = q, u.useCallback = function(e, t) {
    return M.current.useCallback(e, t)
}, u.useContext = function(e) {
    return M.current.useContext(e)
}, u.useDebugValue = function() {}, u.useDeferredValue = function(e) {
    return M.current.useDeferredValue(e)
}, u.useEffect = function(e, t) {
    return M.current.useEffect(e, t)
}, u.useId = function() {
    return M.current.useId()
}, u.useImperativeHandle = function(e, t, r) {
    return M.current.useImperativeHandle(e, t, r)
}, u.useInsertionEffect = function(e, t) {
    return M.current.useInsertionEffect(e, t)
}, u.useLayoutEffect = function(e, t) {
    return M.current.useLayoutEffect(e, t)
}, u.useMemo = function(e, t) {
    return M.current.useMemo(e, t)
}, u.useReducer = function(e, t, r) {
    return M.current.useReducer(e, t, r)
}, u.useRef = function(e) {
    return M.current.useRef(e)
}, u.useState = function(e) {
    return M.current.useState(e)
}, u.useSyncExternalStore = function(e, t, r) {
    return M.current.useSyncExternalStore(e, t, r)
}, u.useTransition = function() {
    return M.current.useTransition()
}, u.version = "18.3.1", o.exports = u;
var F = o.exports;
const L = r(F),
    N = e({
        __proto__: null,
        default: L
    }, [F]);
export {
    L as R, n as a, t as c, N as e, r as g, F as r
};