import {
    r as e
} from "./index-klX-IjEm.js";
import {
    R as t,
    a as n,
    c as r,
    u as i
} from "./WorkoutDetails/Muscles-CckQPQyV.js";
import "./hoist-non-react-statics.cjs-DVqnxkis.js";
import {
    r as o
} from "./index-X1TvMjHs.js";
import {
    e as u
} from "./defaultValues-BLppXe-R.js";

function a(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
}

function c(e, t) {
    if (a(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
        if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
    return !0
}

function s(e = t) {
    const i = e === t ? n : r(e);
    return function() {
        const {
            store: e
        } = i();
        return e
    }
}
const f = s();

function l(e = t) {
    const n = e === t ? f : s(e);
    return function() {
        return n().dispatch
    }
}
const d = l();

function p(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
        return "'" + e + "'"
    })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function v(e) {
    return !!e && !!e[te]
}

function y(e) {
    var t;
    return !!e && (function(e) {
        if (!e || "object" != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return n === Object || "function" == typeof n && Function.toString.call(n) === ne
    }(e) || Array.isArray(e) || !!e[ee] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[ee]) || S(e) || j(e))
}

function h(e, t, n) {
    void 0 === n && (n = !1), 0 === g(e) ? (n ? Object.keys : re)(e).forEach((function(r) {
        n && "symbol" == typeof r || t(r, e[r], e)
    })) : e.forEach((function(n, r) {
        return t(r, n, e)
    }))
}

function g(e) {
    var t = e[te];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : S(e) ? 2 : j(e) ? 3 : 0
}

function m(e, t) {
    return 2 === g(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function b(e, t) {
    return 2 === g(e) ? e.get(t) : e[t]
}

function O(e, t, n) {
    var r = g(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
}

function w(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
}

function S(e) {
    return X && e instanceof Map
}

function j(e) {
    return $ && e instanceof Set
}

function A(e) {
    return e.o || e.t
}

function q(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = ie(e);
    delete t[te];
    for (var n = re(t), r = 0; r < n.length; r++) {
        var i = n[r],
            o = t[i];
        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: e[i]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}

function P(e, t) {
    return void 0 === t && (t = !1), k(e) || v(e) || !y(e) || (g(e) > 1 && (e.set = e.add = e.clear = e.delete = R), Object.freeze(e), t && h(e, (function(e, t) {
        return P(t, !0)
    }), !0)), e
}

function R() {
    p(2)
}

function k(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e)
}

function E(e) {
    var t = oe[e];
    return t || p(18, e), t
}

function T(e, t) {
    oe[e] || (oe[e] = t)
}

function x() {
    return J
}

function I(e, t) {
    t && (E("Patches"), e.u = [], e.s = [], e.v = t)
}

function C(e) {
    D(e), e.p.forEach(Q), e.p = null
}

function D(e) {
    e === J && (J = e.l)
}

function M(e) {
    return J = {
        p: [],
        l: J,
        h: e,
        m: !0,
        _: 0
    }
}

function Q(e) {
    var t = e[te];
    0 === t.i || 1 === t.i ? t.j() : t.g = !0
}

function N(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = void 0 !== e && e !== n;
    return t.h.O || E("ES5").S(t, e, r), r ? (n[te].P && (C(t), p(4)), y(e) && (e = _(t, e), t.l || z(t, e)), t.u && E("Patches").M(n[te].t, e, t.u, t.s)) : e = _(t, n, []), C(t), t.u && t.v(t.u, t.s), e !== Z ? e : void 0
}

function _(e, t, n) {
    if (k(t)) return t;
    var r = t[te];
    if (!r) return h(t, (function(i, o) {
        return K(e, r, t, i, o, n)
    }), !0), t;
    if (r.A !== e) return t;
    if (!r.P) return z(e, r.t, !0), r.t;
    if (!r.I) {
        r.I = !0, r.A._--;
        var i = 4 === r.i || 5 === r.i ? r.o = q(r.k) : r.o,
            o = i,
            u = !1;
        3 === r.i && (o = new Set(i), i.clear(), u = !0), h(o, (function(t, o) {
            return K(e, r, i, t, o, n, u)
        })), z(e, i, !1), n && e.u && E("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}

function K(e, t, n, r, i, o, u) {
    if (v(i)) {
        var a = _(e, i, o && t && 3 !== t.i && !m(t.R, r) ? o.concat(r) : void 0);
        if (O(n, r, a), !v(a)) return;
        e.m = !1
    } else u && n.add(i);
    if (y(i) && !k(i)) {
        if (!e.h.D && e._ < 1) return;
        _(e, i), t && t.A.l || z(e, i)
    }
}

function z(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && P(t, n)
}

function F(e, t) {
    var n = e[te];
    return (n ? A(n) : e)[t]
}

function L(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n)
        }
}

function U(e) {
    e.P || (e.P = !0, e.l && U(e.l))
}

function W(e) {
    e.o || (e.o = q(e.t))
}

function B(e, t, n) {
    var r = S(t) ? E("MapSet").F(t, n) : j(t) ? E("MapSet").T(t, n) : e.O ? function(e, t) {
        var n = Array.isArray(e),
            r = {
                i: n ? 1 : 0,
                A: t ? t.A : x(),
                P: !1,
                I: !1,
                R: {},
                l: t,
                t: e,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            i = r,
            o = ue;
        n && (i = [r], o = ae);
        var u = Proxy.revocable(i, o),
            a = u.revoke,
            c = u.proxy;
        return r.k = c, r.j = a, c
    }(t, n) : E("ES5").J(t, n);
    return (n ? n.A : x()).p.push(r), r
}

function H(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e)
    }
    return q(e)
}
var V, J, G = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    $ = "undefined" != typeof Set,
    Y = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    Z = G ? Symbol.for("immer-nothing") : ((V = {})["immer-nothing"] = !0, V),
    ee = G ? Symbol.for("immer-draftable") : "__$immer_draftable",
    te = G ? Symbol.for("immer-state") : "__$immer_state",
    ne = "" + Object.prototype.constructor,
    re = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Object.getOwnPropertyNames,
    ie = Object.getOwnPropertyDescriptors || function(e) {
        var t = {};
        return re(e).forEach((function(n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n)
        })), t
    },
    oe = {},
    ue = {
        get: function(e, t) {
            if (t === te) return e;
            var n, r, i, o = A(e);
            if (!m(o, t)) return n = e, (i = L(o, t)) ? "value" in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(n.k) : void 0;
            var u = o[t];
            return e.I || !y(u) ? u : u === F(e.t, t) ? (W(e), e.o[t] = B(e.A.h, u, e)) : u
        },
        has: function(e, t) {
            return t in A(e)
        },
        ownKeys: function(e) {
            return Reflect.ownKeys(A(e))
        },
        set: function(e, t, n) {
            var r = L(A(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = F(A(e), t),
                    o = null == i ? void 0 : i[te];
                if (o && o.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                if (w(n, i) && (void 0 !== n || m(e.t, t))) return !0;
                W(e), U(e)
            }
            return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
        },
        deleteProperty: function(e, t) {
            return void 0 !== F(e.t, t) || t in e.t ? (e.R[t] = !1, W(e), U(e)) : delete e.R[t], e.o && delete e.o[t], !0
        },
        getOwnPropertyDescriptor: function(e, t) {
            var n = A(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r ? {
                writable: !0,
                configurable: 1 !== e.i || "length" !== t,
                enumerable: r.enumerable,
                value: n[t]
            } : r
        },
        defineProperty: function() {
            p(11)
        },
        getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t)
        },
        setPrototypeOf: function() {
            p(12)
        }
    },
    ae = {};
h(ue, (function(e, t) {
    ae[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
})), ae.deleteProperty = function(e, t) {
    return ae.set.call(this, e, t, void 0)
}, ae.set = function(e, t, n) {
    return ue.set.call(this, e[0], t, n, e[0])
};
var ce = new(function() {
        function e(e) {
            var t = this;
            this.O = Y, this.D = !0, this.produce = function(e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                    var i = n;
                    n = e;
                    var o = t;
                    return function(e) {
                        var t = this;
                        void 0 === e && (e = i);
                        for (var r = arguments.length, u = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) u[a - 1] = arguments[a];
                        return o.produce(e, (function(e) {
                            var r;
                            return (r = n).call.apply(r, [t, e].concat(u))
                        }))
                    }
                }
                var u;
                if ("function" != typeof n && p(6), void 0 !== r && "function" != typeof r && p(7), y(e)) {
                    var a = M(t),
                        c = B(t, e, void 0),
                        s = !0;
                    try {
                        u = n(c), s = !1
                    } finally {
                        s ? C(a) : D(a)
                    }
                    return "undefined" != typeof Promise && u instanceof Promise ? u.then((function(e) {
                        return I(a, r), N(e, a)
                    }), (function(e) {
                        throw C(a), e
                    })) : (I(a, r), N(u, a))
                }
                if (!e || "object" != typeof e) {
                    if (void 0 === (u = n(e)) && (u = e), u === Z && (u = void 0), t.D && P(u, !0), r) {
                        var f = [],
                            l = [];
                        E("Patches").M(e, u, f, l), r(f, l)
                    }
                    return u
                }
                p(21, e)
            }, this.produceWithPatches = function(e, n) {
                if ("function" == typeof e) return function(n) {
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                    return t.produceWithPatches(n, (function(t) {
                        return e.apply(void 0, [t].concat(i))
                    }))
                };
                var r, i, o = t.produce(e, n, (function(e, t) {
                    r = e, i = t
                }));
                return "undefined" != typeof Promise && o instanceof Promise ? o.then((function(e) {
                    return [e, r, i]
                })) : [o, r, i]
            }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
        }
        var t = e.prototype;
        return t.createDraft = function(e) {
            y(e) || p(8), v(e) && (e = function(e) {
                return v(e) || p(22, e),
                    function e(t) {
                        if (!y(t)) return t;
                        var n, r = t[te],
                            i = g(t);
                        if (r) {
                            if (!r.P && (r.i < 4 || !E("ES5").K(r))) return r.t;
                            r.I = !0, n = H(t, i), r.I = !1
                        } else n = H(t, i);
                        return h(n, (function(t, i) {
                            r && b(r.t, t) === i || O(n, t, e(i))
                        })), 3 === i ? new Set(n) : n
                    }(e)
            }(e));
            var t = M(this),
                n = B(this, e, void 0);
            return n[te].C = !0, D(t), n
        }, t.finishDraft = function(e, t) {
            var n = (e && e[te]).A;
            return I(n, t), N(void 0, n)
        }, t.setAutoFreeze = function(e) {
            this.D = e
        }, t.setUseProxies = function(e) {
            e && !Y && p(20), this.O = e
        }, t.applyPatches = function(e, t) {
            var n;
            for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                    e = r.value;
                    break
                }
            }
            n > -1 && (t = t.slice(n + 1));
            var i = E("Patches").$;
            return v(e) ? i(e, t) : this.produce(e, (function(e) {
                return i(e, t)
            }))
        }, e
    }()),
    se = ce.produce,
    fe = ce.produceWithPatches.bind(ce);
ce.setAutoFreeze.bind(ce), ce.setUseProxies.bind(ce);
var le = ce.applyPatches.bind(ce);
ce.createDraft.bind(ce), ce.finishDraft.bind(ce);
const de = se;

function pe(e) {
    return (pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function ve(e, t, n) {
    return (t = function(e) {
        var t = function(e) {
            if ("object" != pe(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != pe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == pe(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ye(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function he(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ye(Object(n), !0).forEach((function(t) {
            ve(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function ge(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var me = "function" == typeof Symbol && Symbol.observable || "@@observable",
    be = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    },
    Oe = {
        INIT: "@@redux/INIT" + be(),
        REPLACE: "@@redux/REPLACE" + be(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + be()
        }
    };

function we(e, t, n) {
    var r;
    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(ge(0));
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error(ge(1));
        return n(we)(e, t)
    }
    if ("function" != typeof e) throw new Error(ge(2));
    var i = e,
        o = t,
        u = [],
        a = u,
        c = !1;

    function s() {
        a === u && (a = u.slice())
    }

    function f() {
        if (c) throw new Error(ge(3));
        return o
    }

    function l(e) {
        if ("function" != typeof e) throw new Error(ge(4));
        if (c) throw new Error(ge(5));
        var t = !0;
        return s(), a.push(e),
            function() {
                if (t) {
                    if (c) throw new Error(ge(6));
                    t = !1, s();
                    var n = a.indexOf(e);
                    a.splice(n, 1), u = null
                }
            }
    }

    function d(e) {
        if (! function(e) {
                if ("object" != typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }(e)) throw new Error(ge(7));
        if (void 0 === e.type) throw new Error(ge(8));
        if (c) throw new Error(ge(9));
        try {
            c = !0, o = i(o, e)
        } finally {
            c = !1
        }
        for (var t = u = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return d({
        type: Oe.INIT
    }), (r = {
        dispatch: d,
        subscribe: l,
        getState: f,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error(ge(10));
            i = e, d({
                type: Oe.REPLACE
            })
        }
    })[me] = function() {
        var e, t = l;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e || null === e) throw new Error(ge(11));

                function n() {
                    e.next && e.next(f())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[me] = function() {
            return this
        }, e
    }, r
}

function Se(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        "function" == typeof e[i] && (n[i] = e[i])
    }
    var o, u = Object.keys(n);
    try {
        ! function(e) {
            Object.keys(e).forEach((function(t) {
                var n = e[t];
                if (void 0 === n(void 0, {
                        type: Oe.INIT
                    })) throw new Error(ge(12));
                if (void 0 === n(void 0, {
                        type: Oe.PROBE_UNKNOWN_ACTION()
                    })) throw new Error(ge(13))
            }))
        }(n)
    } catch (a) {
        o = a
    }
    return function(e, t) {
        if (void 0 === e && (e = {}), o) throw o;
        for (var r = !1, i = {}, a = 0; a < u.length; a++) {
            var c = u[a],
                s = n[c],
                f = e[c],
                l = s(f, t);
            if (void 0 === l) throw t && t.type, new Error(ge(14));
            i[c] = l, r = r || l !== f
        }
        return (r = r || u.length !== Object.keys(e).length) ? i : e
    }
}

function je(e, t) {
    return function() {
        return t(e.apply(this, arguments))
    }
}

function Ae(e, t) {
    if ("function" == typeof e) return je(e, t);
    if ("object" != typeof e || null === e) throw new Error(ge(16));
    var n = {};
    for (var r in e) {
        var i = e[r];
        "function" == typeof i && (n[r] = je(i, t))
    }
    return n
}

function qe() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}

function Pe() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function() {
            var n = e.apply(void 0, arguments),
                r = function() {
                    throw new Error(ge(15))
                },
                i = {
                    getState: n.getState,
                    dispatch: function() {
                        return r.apply(void 0, arguments)
                    }
                },
                o = t.map((function(e) {
                    return e(i)
                }));
            return r = qe.apply(void 0, o)(n.dispatch), he(he({}, n), {}, {
                dispatch: r
            })
        }
    }
}
var Re = "NOT_FOUND",
    ke = function(e, t) {
        return e === t
    };

function Ee(e, t) {
    var n, r, i = "object" == typeof t ? t : {
            equalityCheck: t
        },
        o = i.equalityCheck,
        u = void 0 === o ? ke : o,
        a = i.maxSize,
        c = void 0 === a ? 1 : a,
        s = i.resultEqualityCheck,
        f = function(e) {
            return function(t, n) {
                if (null === t || null === n || t.length !== n.length) return !1;
                for (var r = t.length, i = 0; i < r; i++)
                    if (!e(t[i], n[i])) return !1;
                return !0
            }
        }(u),
        l = 1 === c ? (n = f, {
            get: function(e) {
                return r && n(r.key, e) ? r.value : Re
            },
            put: function(e, t) {
                r = {
                    key: e,
                    value: t
                }
            },
            getEntries: function() {
                return r ? [r] : []
            },
            clear: function() {
                r = void 0
            }
        }) : function(e, t) {
            var n = [];

            function r(e) {
                var r = n.findIndex((function(n) {
                    return t(e, n.key)
                }));
                if (r > -1) {
                    var i = n[r];
                    return r > 0 && (n.splice(r, 1), n.unshift(i)), i.value
                }
                return Re
            }
            return {
                get: r,
                put: function(t, i) {
                    r(t) === Re && (n.unshift({
                        key: t,
                        value: i
                    }), n.length > e && n.pop())
                },
                getEntries: function() {
                    return n
                },
                clear: function() {
                    n = []
                }
            }
        }(c, f);

    function d() {
        var t = l.get(arguments);
        if (t === Re) {
            if (t = e.apply(null, arguments), s) {
                var n = l.getEntries().find((function(e) {
                    return s(e.value, t)
                }));
                n && (t = n.value)
            }
            l.put(arguments, t)
        }
        return t
    }
    return d.clearCache = function() {
        return l.clear()
    }, d
}

function Te(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return function() {
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        var o, u = 0,
            a = {
                memoizeOptions: void 0
            },
            c = r.pop();
        if ("object" == typeof c && (a = c, c = r.pop()), "function" != typeof c) throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof c + "]");
        var s = a.memoizeOptions,
            f = void 0 === s ? n : s,
            l = Array.isArray(f) ? f : [f],
            d = function(e) {
                var t = Array.isArray(e[0]) ? e[0] : e;
                if (!t.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var n = t.map((function(e) {
                        return "function" == typeof e ? "function " + (e.name || "unnamed") + "()" : typeof e
                    })).join(", ");
                    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + n + "]")
                }
                return t
            }(r),
            p = e.apply(void 0, [function() {
                return u++, c.apply(null, arguments)
            }].concat(l)),
            v = e((function() {
                for (var e = [], t = d.length, n = 0; n < t; n++) e.push(d[n].apply(null, arguments));
                return o = p.apply(null, e)
            }));
        return Object.assign(v, {
            resultFunc: c,
            memoizedResultFunc: p,
            dependencies: d,
            lastResult: function() {
                return o
            },
            recomputations: function() {
                return u
            },
            resetRecomputations: function() {
                return u = 0
            }
        }), v
    }
}
var xe = Te(Ee);

function Ie(e) {
    return function(t) {
        var n = t.dispatch,
            r = t.getState;
        return function(t) {
            return function(i) {
                return "function" == typeof i ? i(n, r, e) : t(i)
            }
        }
    }
}
var Ce = Ie();
Ce.withExtraArgument = Ie;
var De = function() {
        var e = function(t, n) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(t, n)
        };
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }(),
    Me = function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
        return e
    },
    Qe = Object.defineProperty,
    Ne = Object.defineProperties,
    _e = Object.getOwnPropertyDescriptors,
    Ke = Object.getOwnPropertySymbols,
    ze = Object.prototype.hasOwnProperty,
    Fe = Object.prototype.propertyIsEnumerable,
    Le = function(e, t, n) {
        return t in e ? Qe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    Ue = function(e, t) {
        for (var n in t || (t = {})) ze.call(t, n) && Le(e, n, t[n]);
        if (Ke)
            for (var r = 0, i = Ke(t); r < i.length; r++) n = i[r], Fe.call(t, n) && Le(e, n, t[n]);
        return e
    },
    We = function(e, t) {
        return Ne(e, _e(t))
    },
    Be = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (0 !== arguments.length) return "object" == typeof arguments[0] ? qe : qe.apply(null, arguments)
    };

function He(e) {
    if ("object" != typeof e || null === e) return !1;
    var t = Object.getPrototypeOf(e);
    if (null === t) return !0;
    for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
    return t === n
}

function Ve(e, t) {
    function n() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        if (t) {
            var i = t.apply(void 0, n);
            if (!i) throw new Error("prepareAction did not return an object");
            return Ue(Ue({
                type: e,
                payload: i.payload
            }, "meta" in i && {
                meta: i.meta
            }), "error" in i && {
                error: i.error
            })
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }, n.type = e, n.match = function(t) {
        return t.type === e
    }, n
}
var Je = function(e) {
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return De(t, e), Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return e.prototype.concat.apply(this, t)
        }, t.prototype.prepend = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return 1 === e.length && Array.isArray(e[0]) ? new(t.bind.apply(t, Me([void 0], e[0].concat(this)))) : new(t.bind.apply(t, Me([void 0], e.concat(this))))
        }, t
    }(Array),
    Ge = function(e) {
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return De(t, e), Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return e.prototype.concat.apply(this, t)
        }, t.prototype.prepend = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return 1 === e.length && Array.isArray(e[0]) ? new(t.bind.apply(t, Me([void 0], e[0].concat(this)))) : new(t.bind.apply(t, Me([void 0], e.concat(this))))
        }, t
    }(Array);

function Xe(e) {
    return y(e) ? de(e, (function() {})) : e
}

function $e(e) {
    var t, n = function(e) {
            return function(e) {
                void 0 === e && (e = {});
                var t = e.thunk,
                    n = void 0 === t || t;
                e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
                var r = new Je;
                return n && ("boolean" == typeof n ? r.push(Ce) : r.push(Ce.withExtraArgument(n.extraArgument))), r
            }(e)
        },
        r = e || {},
        i = r.reducer,
        o = void 0 === i ? void 0 : i,
        u = r.middleware,
        a = void 0 === u ? n() : u,
        c = r.devTools,
        s = void 0 === c || c,
        f = r.preloadedState,
        l = void 0 === f ? void 0 : f,
        d = r.enhancers,
        p = void 0 === d ? void 0 : d;
    if ("function" == typeof o) t = o;
    else {
        if (!He(o)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
        t = Se(o)
    }
    var v = a;
    "function" == typeof v && (v = v(n));
    var y = Pe.apply(void 0, v),
        h = qe;
    s && (h = Be(Ue({
        trace: !1
    }, "object" == typeof s && s)));
    var g = new Ge(y),
        m = g;
    return Array.isArray(p) ? m = Me([y], p) : "function" == typeof p && (m = p(g)), we(t, l, h.apply(void 0, m))
}

function Ye(e) {
    var t, n = {},
        r = [],
        i = {
            addCase: function(e, t) {
                var r = "string" == typeof e ? e : e.type;
                if (!r) throw new Error("`builder.addCase` cannot be called with an empty action type");
                if (r in n) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
                return n[r] = t, i
            },
            addMatcher: function(e, t) {
                return r.push({
                    matcher: e,
                    reducer: t
                }), i
            },
            addDefaultCase: function(e) {
                return t = e, i
            }
        };
    return e(i), [n, r, t]
}

function Ze(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    var n, r = "function" == typeof e.initialState ? e.initialState : Xe(e.initialState),
        i = e.reducers || {},
        o = Object.keys(i),
        u = {},
        a = {},
        c = {};

    function s() {
        var t = "function" == typeof e.extraReducers ? Ye(e.extraReducers) : [e.extraReducers],
            n = t[0],
            i = void 0 === n ? {} : n,
            o = t[1],
            u = void 0 === o ? [] : o,
            c = t[2],
            s = void 0 === c ? void 0 : c,
            f = Ue(Ue({}, i), a);
        return function(e, t, n) {
            void 0 === n && (n = []);
            var r, i = Ye(t),
                o = i[0],
                u = i[1],
                a = i[2];
            if ("function" == typeof e) r = function() {
                return Xe(e())
            };
            else {
                var c = Xe(e);
                r = function() {
                    return c
                }
            }

            function s(e, t) {
                void 0 === e && (e = r());
                var n = Me([o[t.type]], u.filter((function(e) {
                    return (0, e.matcher)(t)
                })).map((function(e) {
                    return e.reducer
                })));
                return 0 === n.filter((function(e) {
                    return !!e
                })).length && (n = [a]), n.reduce((function(e, n) {
                    if (n) {
                        var r;
                        if (v(e)) return void 0 === (r = n(e, t)) ? e : r;
                        if (y(e)) return de(e, (function(e) {
                            return n(e, t)
                        }));
                        if (void 0 === (r = n(e, t))) {
                            if (null === e) return e;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return r
                    }
                    return e
                }), e)
            }
            return s.getInitialState = r, s
        }(r, (function(e) {
            for (var t in f) e.addCase(t, f[t]);
            for (var n = 0, r = u; n < r.length; n++) {
                var i = r[n];
                e.addMatcher(i.matcher, i.reducer)
            }
            s && e.addDefaultCase(s)
        }))
    }
    return o.forEach((function(e) {
        var n, r, o = i[e],
            s = t + "/" + e;
        "reducer" in o ? (n = o.reducer, r = o.prepare) : n = o, u[e] = n, a[s] = n, c[e] = r ? Ve(s, r) : Ve(s)
    })), {
        name: t,
        reducer: function(e, t) {
            return n || (n = s()), n(e, t)
        },
        actions: c,
        caseReducers: u,
        getInitialState: function() {
            return n || (n = s()), n.getInitialState()
        }
    }
}
var et = function(e) {
        void 0 === e && (e = 21);
        for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
        return t
    },
    tt = ["name", "message", "stack", "code"],
    nt = function() {
        return function(e, t) {
            this.payload = e, this.meta = t
        }
    }(),
    rt = function() {
        return function(e, t) {
            this.payload = e, this.meta = t
        }
    }(),
    it = function(e) {
        if ("object" == typeof e && null !== e) {
            for (var t = {}, n = 0, r = tt; n < r.length; n++) {
                var i = r[n];
                "string" == typeof e[i] && (t[i] = e[i])
            }
            return t
        }
        return {
            message: String(e)
        }
    },
    ot = function() {
        function e(e, t, n) {
            var r = Ve(e + "/fulfilled", (function(e, t, n, r) {
                    return {
                        payload: e,
                        meta: We(Ue({}, r || {}), {
                            arg: n,
                            requestId: t,
                            requestStatus: "fulfilled"
                        })
                    }
                })),
                i = Ve(e + "/pending", (function(e, t, n) {
                    return {
                        payload: void 0,
                        meta: We(Ue({}, n || {}), {
                            arg: t,
                            requestId: e,
                            requestStatus: "pending"
                        })
                    }
                })),
                o = Ve(e + "/rejected", (function(e, t, r, i, o) {
                    return {
                        payload: i,
                        error: (n && n.serializeError || it)(e || "Rejected"),
                        meta: We(Ue({}, o || {}), {
                            arg: r,
                            requestId: t,
                            rejectedWithValue: !!i,
                            requestStatus: "rejected",
                            aborted: "AbortError" === (null == e ? void 0 : e.name),
                            condition: "ConditionError" === (null == e ? void 0 : e.name)
                        })
                    }
                })),
                u = "undefined" != typeof AbortController ? AbortController : function() {
                    function e() {
                        this.signal = {
                            aborted: !1,
                            addEventListener: function() {},
                            dispatchEvent: function() {
                                return !1
                            },
                            onabort: function() {},
                            removeEventListener: function() {},
                            reason: void 0,
                            throwIfAborted: function() {}
                        }
                    }
                    return e.prototype.abort = function() {}, e
                }();
            return Object.assign((function(e) {
                return function(a, c, s) {
                    var f, l = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : et(),
                        d = new u;

                    function p(e) {
                        f = e, d.abort()
                    }
                    var v = function() {
                        return u = this, v = function() {
                            var u, v, y, h, g, m;
                            return function(e, t) {
                                var n, r, i, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(o) {
                                    return function(a) {
                                        return function(o) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; u;) try {
                                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = o;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: o[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, r = o[1], o = [0];
                                                        continue;
                                                    case 7:
                                                        o = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                            u.label = o[1];
                                                            break
                                                        }
                                                        if (6 === o[0] && u.label < i[1]) {
                                                            u.label = i[1], i = o;
                                                            break
                                                        }
                                                        if (i && u.label < i[2]) {
                                                            u.label = i[2], u.ops.push(o);
                                                            break
                                                        }
                                                        i[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                o = t.call(e, u)
                                            } catch (a) {
                                                o = [6, a], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & o[0]) throw o[1];
                                            return {
                                                value: o[0] ? o[1] : void 0,
                                                done: !0
                                            }
                                        }([o, a])
                                    }
                                }
                            }(this, (function(b) {
                                switch (b.label) {
                                    case 0:
                                        return b.trys.push([0, 4, , 5]), null === (O = h = null == (u = null == n ? void 0 : n.condition) ? void 0 : u.call(n, e, {
                                            getState: c,
                                            extra: s
                                        })) || "object" != typeof O || "function" != typeof O.then ? [3, 2] : [4, h];
                                    case 1:
                                        h = b.sent(), b.label = 2;
                                    case 2:
                                        if (!1 === h || d.signal.aborted) throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                        return g = new Promise((function(e, t) {
                                            return d.signal.addEventListener("abort", (function() {
                                                return t({
                                                    name: "AbortError",
                                                    message: f || "Aborted"
                                                })
                                            }))
                                        })), a(i(l, e, null == (v = null == n ? void 0 : n.getPendingMeta) ? void 0 : v.call(n, {
                                            requestId: l,
                                            arg: e
                                        }, {
                                            getState: c,
                                            extra: s
                                        }))), [4, Promise.race([g, Promise.resolve(t(e, {
                                            dispatch: a,
                                            getState: c,
                                            extra: s,
                                            requestId: l,
                                            signal: d.signal,
                                            abort: p,
                                            rejectWithValue: function(e, t) {
                                                return new nt(e, t)
                                            },
                                            fulfillWithValue: function(e, t) {
                                                return new rt(e, t)
                                            }
                                        })).then((function(t) {
                                            if (t instanceof nt) throw t;
                                            return t instanceof rt ? r(t.payload, l, e, t.meta) : r(t, l, e)
                                        }))])];
                                    case 3:
                                        return y = b.sent(), [3, 5];
                                    case 4:
                                        return m = b.sent(), y = m instanceof nt ? o(null, l, e, m.payload, m.meta) : o(m, l, e), [3, 5];
                                    case 5:
                                        return n && !n.dispatchConditionRejection && o.match(y) && y.meta.condition || a(y), [2, y]
                                }
                                var O
                            }))
                        }, new Promise((function(e, t) {
                            var n = function(e) {
                                    try {
                                        i(v.next(e))
                                    } catch (n) {
                                        t(n)
                                    }
                                },
                                r = function(e) {
                                    try {
                                        i(v.throw(e))
                                    } catch (n) {
                                        t(n)
                                    }
                                },
                                i = function(t) {
                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                                };
                            i((v = v.apply(u, null)).next())
                        }));
                        var u, v
                    }();
                    return Object.assign(v, {
                        abort: p,
                        requestId: l,
                        arg: e,
                        unwrap: function() {
                            return v.then(ut)
                        }
                    })
                }
            }), {
                pending: i,
                rejected: o,
                fulfilled: r,
                typePrefix: e
            })
        }
        return e.withTypes = function() {
            return e
        }, e
    }();

function ut(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload
}
var at = function(e, t) {
    return (n = e) && "function" == typeof n.match ? e.match(t) : e(t);
    var n
};

function ct() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function(t) {
        return e.some((function(e) {
            return at(e, t)
        }))
    }
}

function st() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function(t) {
        return e.every((function(e) {
            return at(e, t)
        }))
    }
}

function ft(e, t) {
    if (!e || !e.meta) return !1;
    var n = "string" == typeof e.meta.requestId,
        r = t.indexOf(e.meta.requestStatus) > -1;
    return n && r
}

function lt(e) {
    return "function" == typeof e[0] && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0]
}

function dt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return 0 === e.length ? function(e) {
        return ft(e, ["pending"])
    } : lt(e) ? function(t) {
        var n = e.map((function(e) {
            return e.pending
        }));
        return ct.apply(void 0, n)(t)
    } : dt()(e[0])
}

function pt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return 0 === e.length ? function(e) {
        return ft(e, ["rejected"])
    } : lt(e) ? function(t) {
        var n = e.map((function(e) {
            return e.rejected
        }));
        return ct.apply(void 0, n)(t)
    } : pt()(e[0])
}

function vt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = function(e) {
        return e && e.meta && e.meta.rejectedWithValue
    };
    return 0 === e.length || lt(e) ? function(t) {
        return st(pt.apply(void 0, e), n)(t)
    } : vt()(e[0])
}

function yt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return 0 === e.length ? function(e) {
        return ft(e, ["fulfilled"])
    } : lt(e) ? function(t) {
        var n = e.map((function(e) {
            return e.fulfilled
        }));
        return ct.apply(void 0, n)(t)
    } : yt()(e[0])
}

function ht() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return 0 === e.length ? function(e) {
        return ft(e, ["pending", "fulfilled", "rejected"])
    } : lt(e) ? function(t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            n.push(o.pending, o.rejected, o.fulfilled)
        }
        return ct.apply(void 0, n)(t)
    } : ht()(e[0])
}
var gt = "listenerMiddleware";
Ve(gt + "/add"), Ve(gt + "/removeAll"), Ve(gt + "/remove");
var mt = "RTK_autoBatch",
    bt = function() {
        return function(e) {
            var t;
            return {
                payload: e,
                meta: (t = {}, t[mt] = !0, t)
            }
        }
    };
"function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof global ? global : globalThis),
    function() {
        function e(e, t) {
            var n = i[e];
            return n ? n.enumerable = t : i[e] = n = {
                configurable: !0,
                enumerable: t,
                get: function() {
                    var t = this[te];
                    return ue.get(t, e)
                },
                set: function(t) {
                    var n = this[te];
                    ue.set(n, e, t)
                }
            }, n
        }

        function t(e) {
            for (var t = e.length - 1; t >= 0; t--) {
                var i = e[t][te];
                if (!i.P) switch (i.i) {
                    case 5:
                        r(i) && U(i);
                        break;
                    case 4:
                        n(i) && U(i)
                }
            }
        }

        function n(e) {
            for (var t = e.t, n = e.k, r = re(n), i = r.length - 1; i >= 0; i--) {
                var o = r[i];
                if (o !== te) {
                    var u = t[o];
                    if (void 0 === u && !m(t, o)) return !0;
                    var a = n[o],
                        c = a && a[te];
                    if (c ? c.t !== u : !w(a, u)) return !0
                }
            }
            var s = !!t[te];
            return r.length !== re(t).length + (s ? 0 : 1)
        }

        function r(e) {
            var t = e.k;
            if (t.length !== e.t.length) return !0;
            var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
            if (n && !n.get) return !0;
            for (var r = 0; r < t.length; r++)
                if (!t.hasOwnProperty(r)) return !0;
            return !1
        }
        var i = {};
        T("ES5", {
            J: function(t, n) {
                var r = Array.isArray(t),
                    i = function(t, n) {
                        if (t) {
                            for (var r = Array(n.length), i = 0; i < n.length; i++) Object.defineProperty(r, "" + i, e(i, !0));
                            return r
                        }
                        var o = ie(n);
                        delete o[te];
                        for (var u = re(o), a = 0; a < u.length; a++) {
                            var c = u[a];
                            o[c] = e(c, t || !!o[c].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(n), o)
                    }(r, t),
                    o = {
                        i: r ? 5 : 4,
                        A: n ? n.A : x(),
                        P: !1,
                        I: !1,
                        R: {},
                        l: n,
                        t: t,
                        k: i,
                        o: null,
                        g: !1,
                        C: !1
                    };
                return Object.defineProperty(i, te, {
                    value: o,
                    writable: !0
                }), i
            },
            S: function(e, n, i) {
                i ? v(n) && n[te].A === e && t(e.p) : (e.u && function e(t) {
                    if (t && "object" == typeof t) {
                        var n = t[te];
                        if (n) {
                            var i = n.t,
                                o = n.k,
                                u = n.R,
                                a = n.i;
                            if (4 === a) h(o, (function(t) {
                                t !== te && (void 0 !== i[t] || m(i, t) ? u[t] || e(o[t]) : (u[t] = !0, U(n)))
                            })), h(i, (function(e) {
                                void 0 !== o[e] || m(o, e) || (u[e] = !1, U(n))
                            }));
                            else if (5 === a) {
                                if (r(n) && (U(n), u.length = !0), o.length < i.length)
                                    for (var c = o.length; c < i.length; c++) u[c] = !1;
                                else
                                    for (var s = i.length; s < o.length; s++) u[s] = !0;
                                for (var f = Math.min(o.length, i.length), l = 0; l < f; l++) o.hasOwnProperty(l) || (u[l] = !0), void 0 === u[l] && e(o[l])
                            }
                        }
                    }
                }(e.p[0]), t(e.p))
            },
            K: function(e) {
                return 4 === e.i ? n(e) : r(e)
            }
        })
    }();
var Ot, wt, St = function(e, t) {
        var n, r, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!((i = (i = u.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = t.call(e, u)
                    } catch (a) {
                        o = [6, a], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    },
    jt = function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
        return e
    },
    At = Object.defineProperty,
    qt = Object.defineProperties,
    Pt = Object.getOwnPropertyDescriptors,
    Rt = Object.getOwnPropertySymbols,
    kt = Object.prototype.hasOwnProperty,
    Et = Object.prototype.propertyIsEnumerable,
    Tt = function(e, t, n) {
        return t in e ? At(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    xt = function(e, t) {
        for (var n in t || (t = {})) kt.call(t, n) && Tt(e, n, t[n]);
        if (Rt)
            for (var r = 0, i = Rt(t); r < i.length; r++) n = i[r], Et.call(t, n) && Tt(e, n, t[n]);
        return e
    },
    It = function(e, t) {
        return qt(e, Pt(t))
    },
    Ct = function(e, t) {
        var n = {};
        for (var r in e) kt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && Rt)
            for (var i = 0, o = Rt(e); i < o.length; i++) r = o[i], t.indexOf(r) < 0 && Et.call(e, r) && (n[r] = e[r]);
        return n
    },
    Dt = function(e, t, n) {
        return new Promise((function(r, i) {
            var o = function(e) {
                    try {
                        a(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                },
                u = function(e) {
                    try {
                        a(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                },
                a = function(e) {
                    return e.done ? r(e.value) : Promise.resolve(e.value).then(o, u)
                };
            a((n = n.apply(e, t)).next())
        }))
    };
(wt = Ot || (Ot = {})).uninitialized = "uninitialized", wt.pending = "pending", wt.fulfilled = "fulfilled", wt.rejected = "rejected";
var Mt = function(e) {
        return [].concat.apply([], e)
    },
    Qt = He;

function Nt(e, t) {
    if (e === t || !(Qt(e) && Qt(t) || Array.isArray(e) && Array.isArray(t))) return t;
    for (var n = Object.keys(t), r = Object.keys(e), i = n.length === r.length, o = Array.isArray(t) ? [] : {}, u = 0, a = n; u < a.length; u++) {
        var c = a[u];
        o[c] = Nt(e[c], t[c]), i && (i = e[c] === o[c])
    }
    return i ? e : o
}
var _t = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return fetch.apply(void 0, e)
    },
    Kt = function(e) {
        return e.status >= 200 && e.status <= 299
    },
    zt = function(e) {
        return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
    };

function Ft(e) {
    if (!He(e)) return e;
    for (var t = xt({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
        var i = r[n],
            o = i[0];
        void 0 === i[1] && delete t[o]
    }
    return t
}
var Lt, Ut, Wt = function() {
        return function(e, t) {
            void 0 === t && (t = void 0), this.value = e, this.meta = t
        }
    }(),
    Bt = Ve("__rtkq/focused"),
    Ht = Ve("__rtkq/unfocused"),
    Vt = Ve("__rtkq/online"),
    Jt = Ve("__rtkq/offline"),
    Gt = !1;

function Xt(e, t) {
    return n = function() {
            return e(Bt())
        }, r = function() {
            return e(Vt())
        }, i = function() {
            return e(Jt())
        }, o = function() {
            "visible" === window.document.visibilityState ? n() : e(Ht())
        }, Gt || "undefined" != typeof window && window.addEventListener && (window.addEventListener("visibilitychange", o, !1), window.addEventListener("focus", n, !1), window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), Gt = !0),
        function() {
            window.removeEventListener("focus", n), window.removeEventListener("visibilitychange", o), window.removeEventListener("online", r), window.removeEventListener("offline", i), Gt = !1
        };
    var n, r, i, o
}

function $t(e) {
    return e.type === Lt.query
}

function Yt(e, t, n, r, i, o) {
    return "function" == typeof e ? e(t, n, r, i).map(Zt).map(o) : Array.isArray(e) ? e.map(Zt).map(o) : []
}

function Zt(e) {
    return "string" == typeof e ? {
        type: e
    } : e
}

function en(e) {
    return null != e
}(Ut = Lt || (Lt = {})).query = "query", Ut.mutation = "mutation";
var tn = Symbol("forceQueryFn"),
    nn = function(e) {
        return "function" == typeof e[tn]
    };

function rn(e) {
    return e
}

function on(e, t, n, r) {
    return Yt(n[e.meta.arg.endpointName][t], yt(e) ? e.payload : void 0, vt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r)
}

function un(e, t, n) {
    var r = e[t];
    r && n(r)
}

function an(e) {
    var t;
    return null != (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ? t : e.requestId
}

function cn(e, t, n) {
    var r = e[an(t)];
    r && n(r)
}
var sn = {};

function fn(e) {
    var t = e.reducerPath,
        n = e.queryThunk,
        r = e.mutationThunk,
        i = e.context,
        o = i.endpointDefinitions,
        u = i.apiUid,
        a = i.extractRehydrationInfo,
        c = i.hasRehydrationInfo,
        s = e.assertTagType,
        f = e.config,
        l = Ve(t + "/resetApiState"),
        d = Ze({
            name: t + "/queries",
            initialState: sn,
            reducers: {
                removeQueryResult: {
                    reducer: function(e, t) {
                        delete e[t.payload.queryCacheKey]
                    },
                    prepare: bt()
                },
                queryResultPatched: {
                    reducer: function(e, t) {
                        var n = t.payload,
                            r = n.queryCacheKey,
                            i = n.patches;
                        un(e, r, (function(e) {
                            e.data = le(e.data, i.concat())
                        }))
                    },
                    prepare: bt()
                }
            },
            extraReducers: function(e) {
                e.addCase(n.pending, (function(e, t) {
                    var n, r = t.meta,
                        i = t.meta.arg,
                        o = nn(i);
                    (i.subscribe || o) && (null != e[n = i.queryCacheKey] || (e[n] = {
                        status: Ot.uninitialized,
                        endpointName: i.endpointName
                    })), un(e, i.queryCacheKey, (function(e) {
                        e.status = Ot.pending, e.requestId = o && e.requestId ? e.requestId : r.requestId, void 0 !== i.originalArgs && (e.originalArgs = i.originalArgs), e.startedTimeStamp = r.startedTimeStamp
                    }))
                })).addCase(n.fulfilled, (function(e, t) {
                    var n = t.meta,
                        r = t.payload;
                    un(e, n.arg.queryCacheKey, (function(e) {
                        var t;
                        if (e.requestId === n.requestId || nn(n.arg)) {
                            var i, u = o[n.arg.endpointName].merge;
                            if (e.status = Ot.fulfilled, u)
                                if (void 0 !== e.data) {
                                    var a = n.fulfilledTimeStamp,
                                        c = n.arg,
                                        s = n.baseQueryMeta,
                                        f = n.requestId,
                                        l = de(e.data, (function(e) {
                                            return u(e, r, {
                                                arg: c.originalArgs,
                                                baseQueryMeta: s,
                                                fulfilledTimeStamp: a,
                                                requestId: f
                                            })
                                        }));
                                    e.data = l
                                } else e.data = r;
                            else e.data = null == (t = o[n.arg.endpointName].structuralSharing) || t ? Nt(v(e.data) ? (v(i = e.data) || p(23, i), i[te].t) : e.data, r) : r;
                            delete e.error, e.fulfilledTimeStamp = n.fulfilledTimeStamp
                        }
                    }))
                })).addCase(n.rejected, (function(e, t) {
                    var n = t.meta,
                        r = n.condition,
                        i = n.arg,
                        o = n.requestId,
                        u = t.error,
                        a = t.payload;
                    un(e, i.queryCacheKey, (function(e) {
                        if (r);
                        else {
                            if (e.requestId !== o) return;
                            e.status = Ot.rejected, e.error = null != a ? a : u
                        }
                    }))
                })).addMatcher(c, (function(e, t) {
                    for (var n = a(t).queries, r = 0, i = Object.entries(n); r < i.length; r++) {
                        var o = i[r],
                            u = o[0],
                            c = o[1];
                        (null == c ? void 0 : c.status) !== Ot.fulfilled && (null == c ? void 0 : c.status) !== Ot.rejected || (e[u] = c)
                    }
                }))
            }
        }),
        y = Ze({
            name: t + "/mutations",
            initialState: sn,
            reducers: {
                removeMutationResult: {
                    reducer: function(e, t) {
                        var n = an(t.payload);
                        n in e && delete e[n]
                    },
                    prepare: bt()
                }
            },
            extraReducers: function(e) {
                e.addCase(r.pending, (function(e, t) {
                    var n = t.meta,
                        r = t.meta,
                        i = r.requestId,
                        o = r.arg,
                        u = r.startedTimeStamp;
                    o.track && (e[an(n)] = {
                        requestId: i,
                        status: Ot.pending,
                        endpointName: o.endpointName,
                        startedTimeStamp: u
                    })
                })).addCase(r.fulfilled, (function(e, t) {
                    var n = t.payload,
                        r = t.meta;
                    r.arg.track && cn(e, r, (function(e) {
                        e.requestId === r.requestId && (e.status = Ot.fulfilled, e.data = n, e.fulfilledTimeStamp = r.fulfilledTimeStamp)
                    }))
                })).addCase(r.rejected, (function(e, t) {
                    var n = t.payload,
                        r = t.error,
                        i = t.meta;
                    i.arg.track && cn(e, i, (function(e) {
                        e.requestId === i.requestId && (e.status = Ot.rejected, e.error = null != n ? n : r)
                    }))
                })).addMatcher(c, (function(e, t) {
                    for (var n = a(t).mutations, r = 0, i = Object.entries(n); r < i.length; r++) {
                        var o = i[r],
                            u = o[0],
                            c = o[1];
                        (null == c ? void 0 : c.status) !== Ot.fulfilled && (null == c ? void 0 : c.status) !== Ot.rejected || u === (null == c ? void 0 : c.requestId) || (e[u] = c)
                    }
                }))
            }
        }),
        h = Ze({
            name: t + "/invalidation",
            initialState: sn,
            reducers: {
                updateProvidedBy: {
                    reducer: function(e, t) {
                        for (var n, r, i, o, u = t.payload, a = u.queryCacheKey, c = u.providedTags, s = 0, f = Object.values(e); s < f.length; s++)
                            for (var l = f[s], d = 0, p = Object.values(l); d < p.length; d++) {
                                var v = p[d],
                                    y = v.indexOf(a); - 1 !== y && v.splice(y, 1)
                            }
                        for (var h = 0, g = c; h < g.length; h++) {
                            var m = g[h],
                                b = m.type,
                                O = m.id,
                                w = null != (o = (r = null != (n = e[b]) ? n : e[b] = {})[i = O || "__internal_without_id"]) ? o : r[i] = [];
                            w.includes(a) || w.push(a)
                        }
                    },
                    prepare: bt()
                }
            },
            extraReducers: function(e) {
                e.addCase(d.actions.removeQueryResult, (function(e, t) {
                    for (var n = t.payload.queryCacheKey, r = 0, i = Object.values(e); r < i.length; r++)
                        for (var o = i[r], u = 0, a = Object.values(o); u < a.length; u++) {
                            var c = a[u],
                                s = c.indexOf(n); - 1 !== s && c.splice(s, 1)
                        }
                })).addMatcher(c, (function(e, t) {
                    for (var n, r, i, o, u = a(t).provided, c = 0, s = Object.entries(u); c < s.length; c++)
                        for (var f = s[c], l = f[0], d = f[1], p = 0, v = Object.entries(d); p < v.length; p++)
                            for (var y = v[p], h = y[0], g = y[1], m = null != (o = (r = null != (n = e[l]) ? n : e[l] = {})[i = h || "__internal_without_id"]) ? o : r[i] = [], b = 0, O = g; b < O.length; b++) {
                                var w = O[b];
                                m.includes(w) || m.push(w)
                            }
                })).addMatcher(ct(yt(n), vt(n)), (function(e, t) {
                    var n = on(t, "providesTags", o, s),
                        r = t.meta.arg.queryCacheKey;
                    h.caseReducers.updateProvidedBy(e, h.actions.updateProvidedBy({
                        queryCacheKey: r,
                        providedTags: n
                    }))
                }))
            }
        }),
        g = Ze({
            name: t + "/subscriptions",
            initialState: sn,
            reducers: {
                updateSubscriptionOptions: function(e, t) {},
                unsubscribeQueryResult: function(e, t) {},
                internal_probeSubscription: function(e, t) {}
            }
        }),
        m = Ze({
            name: t + "/internalSubscriptions",
            initialState: sn,
            reducers: {
                subscriptionsUpdated: {
                    reducer: function(e, t) {
                        return le(e, t.payload)
                    },
                    prepare: bt()
                }
            }
        }),
        b = Ze({
            name: t + "/config",
            initialState: xt({
                online: "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine,
                focused: "undefined" == typeof document || "hidden" !== document.visibilityState,
                middlewareRegistered: !1
            }, f),
            reducers: {
                middlewareRegistered: function(e, t) {
                    var n = t.payload;
                    e.middlewareRegistered = "conflict" !== e.middlewareRegistered && u === n || "conflict"
                }
            },
            extraReducers: function(e) {
                e.addCase(Vt, (function(e) {
                    e.online = !0
                })).addCase(Jt, (function(e) {
                    e.online = !1
                })).addCase(Bt, (function(e) {
                    e.focused = !0
                })).addCase(Ht, (function(e) {
                    e.focused = !1
                })).addMatcher(c, (function(e) {
                    return xt({}, e)
                }))
            }
        }),
        O = Se({
            queries: d.reducer,
            mutations: y.reducer,
            provided: h.reducer,
            subscriptions: m.reducer,
            config: b.reducer
        });
    return {
        reducer: function(e, t) {
            return O(l.match(t) ? void 0 : e, t)
        },
        actions: It(xt(xt(xt(xt(xt(xt({}, b.actions), d.actions), g.actions), m.actions), y.actions), h.actions), {
            unsubscribeMutationResult: y.actions.removeMutationResult,
            resetApiState: l
        })
    }
}
var ln = Symbol.for("RTKQ/skipToken"),
    dn = {
        status: Ot.uninitialized
    },
    pn = de(dn, (function() {})),
    vn = de(dn, (function() {})),
    yn = WeakMap ? new WeakMap : void 0,
    hn = function(e) {
        var t = e.endpointName,
            n = e.queryArgs,
            r = "",
            i = null == yn ? void 0 : yn.get(n);
        if ("string" == typeof i) r = i;
        else {
            var o = JSON.stringify(n, (function(e, t) {
                return He(t) ? Object.keys(t).sort().reduce((function(e, n) {
                    return e[n] = t[n], e
                }), {}) : t
            }));
            He(n) && (null == yn || yn.set(n, o)), r = o
        }
        return t + "(" + r + ")"
    };

function gn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function(t) {
        var n = Ee((function(e) {
                var n, r;
                return null == (r = t.extractRehydrationInfo) ? void 0 : r.call(t, e, {
                    reducerPath: null != (n = t.reducerPath) ? n : "api"
                })
            })),
            r = It(xt({
                reducerPath: "api",
                keepUnusedDataFor: 60,
                refetchOnMountOrArgChange: !1,
                refetchOnFocus: !1,
                refetchOnReconnect: !1
            }, t), {
                extractRehydrationInfo: n,
                serializeQueryArgs: function(e) {
                    var n = hn;
                    if ("serializeQueryArgs" in e.endpointDefinition) {
                        var r = e.endpointDefinition.serializeQueryArgs;
                        n = function(e) {
                            var t = r(e);
                            return "string" == typeof t ? t : hn(It(xt({}, e), {
                                queryArgs: t
                            }))
                        }
                    } else t.serializeQueryArgs && (n = t.serializeQueryArgs);
                    return n(e)
                },
                tagTypes: jt([], t.tagTypes || [])
            }),
            i = {
                endpointDefinitions: {},
                batch: function(e) {
                    e()
                },
                apiUid: et(),
                extractRehydrationInfo: n,
                hasRehydrationInfo: Ee((function(e) {
                    return null != n(e)
                }))
            },
            o = {
                injectEndpoints: function(e) {
                    for (var t = e.endpoints({
                            query: function(e) {
                                return It(xt({}, e), {
                                    type: Lt.query
                                })
                            },
                            mutation: function(e) {
                                return It(xt({}, e), {
                                    type: Lt.mutation
                                })
                            }
                        }), n = 0, r = Object.entries(t); n < r.length; n++) {
                        var a = r[n],
                            c = a[0],
                            s = a[1];
                        if (e.overrideExisting || !(c in i.endpointDefinitions)) {
                            i.endpointDefinitions[c] = s;
                            for (var f = 0, l = u; f < l.length; f++) l[f].injectEndpoint(c, s)
                        }
                    }
                    return o
                },
                enhanceEndpoints: function(e) {
                    var t = e.addTagTypes,
                        n = e.endpoints;
                    if (t)
                        for (var u = 0, a = t; u < a.length; u++) {
                            var c = a[u];
                            r.tagTypes.includes(c) || r.tagTypes.push(c)
                        }
                    if (n)
                        for (var s = 0, f = Object.entries(n); s < f.length; s++) {
                            var l = f[s],
                                d = l[0],
                                p = l[1];
                            "function" == typeof p ? p(i.endpointDefinitions[d]) : Object.assign(i.endpointDefinitions[d] || {}, p)
                        }
                    return o
                }
            },
            u = e.map((function(e) {
                return e.init(o, r, i)
            }));
        return o.injectEndpoints({
            endpoints: t.endpoints
        })
    }
}
var mn, bn = function(e) {
        var t = e.reducerPath,
            n = e.api,
            r = e.context,
            i = e.internalState,
            o = n.internalActions,
            u = o.removeQueryResult,
            a = o.unsubscribeQueryResult;

        function c(e) {
            var t = i.currentSubscriptions[e];
            return !!t && ! function(e) {
                for (var t in e) return !1;
                return !0
            }(t)
        }
        var s = {};

        function f(e, t, n, i) {
            var o, a = r.endpointDefinitions[t],
                f = null != (o = null == a ? void 0 : a.keepUnusedDataFor) ? o : i.keepUnusedDataFor;
            if (f !== 1 / 0) {
                var l = Math.max(0, Math.min(f, 2147482.647));
                if (!c(e)) {
                    var d = s[e];
                    d && clearTimeout(d), s[e] = setTimeout((function() {
                        c(e) || n.dispatch(u({
                            queryCacheKey: e
                        })), delete s[e]
                    }), 1e3 * l)
                }
            }
        }
        return function(e, i, o) {
            var u;
            if (a.match(e)) {
                var c = i.getState()[t];
                f(O = e.payload.queryCacheKey, null == (u = c.queries[O]) ? void 0 : u.endpointName, i, c.config)
            }
            if (n.util.resetApiState.match(e))
                for (var l = 0, d = Object.entries(s); l < d.length; l++) {
                    var p = d[l],
                        v = p[0],
                        y = p[1];
                    y && clearTimeout(y), delete s[v]
                }
            if (r.hasRehydrationInfo(e)) {
                c = i.getState()[t];
                for (var h = r.extractRehydrationInfo(e).queries, g = 0, m = Object.entries(h); g < m.length; g++) {
                    var b = m[g],
                        O = b[0],
                        w = b[1];
                    f(O, null == w ? void 0 : w.endpointName, i, c.config)
                }
            }
        }
    },
    On = function(e) {
        var t = e.reducerPath,
            n = e.context,
            r = e.context.endpointDefinitions,
            i = e.mutationThunk,
            o = e.api,
            u = e.assertTagType,
            a = e.refetchQuery,
            c = o.internalActions.removeQueryResult,
            s = ct(yt(i), vt(i));

        function f(e, r) {
            var i = r.getState(),
                u = i[t],
                s = o.util.selectInvalidatedBy(i, e);
            n.batch((function() {
                for (var e, t = 0, n = Array.from(s.values()); t < n.length; t++) {
                    var i = n[t].queryCacheKey,
                        o = u.queries[i],
                        f = null != (e = u.subscriptions[i]) ? e : {};
                    o && (0 === Object.keys(f).length ? r.dispatch(c({
                        queryCacheKey: i
                    })) : o.status !== Ot.uninitialized && r.dispatch(a(o, i)))
                }
            }))
        }
        return function(e, t) {
            s(e) && f(on(e, "invalidatesTags", r, u), t), o.util.invalidateTags.match(e) && f(Yt(e.payload, void 0, void 0, void 0, void 0, u), t)
        }
    },
    wn = function(e) {
        var t = e.reducerPath,
            n = e.queryThunk,
            r = e.api,
            i = e.refetchQuery,
            o = e.internalState,
            u = {};

        function a(e, n) {
            var r = e.queryCacheKey,
                a = n.getState()[t].queries[r],
                c = o.currentSubscriptions[r];
            if (a && a.status !== Ot.uninitialized) {
                var s = f(c);
                if (Number.isFinite(s)) {
                    var l = u[r];
                    (null == l ? void 0 : l.timeout) && (clearTimeout(l.timeout), l.timeout = void 0);
                    var d = Date.now() + s,
                        p = u[r] = {
                            nextPollTimestamp: d,
                            pollingInterval: s,
                            timeout: setTimeout((function() {
                                p.timeout = void 0, n.dispatch(i(a, r))
                            }), s)
                        }
                }
            }
        }

        function c(e, n) {
            var r = e.queryCacheKey,
                i = n.getState()[t].queries[r],
                c = o.currentSubscriptions[r];
            if (i && i.status !== Ot.uninitialized) {
                var l = f(c);
                if (Number.isFinite(l)) {
                    var d = u[r],
                        p = Date.now() + l;
                    (!d || p < d.nextPollTimestamp) && a({
                        queryCacheKey: r
                    }, n)
                } else s(r)
            }
        }

        function s(e) {
            var t = u[e];
            (null == t ? void 0 : t.timeout) && clearTimeout(t.timeout), delete u[e]
        }

        function f(e) {
            void 0 === e && (e = {});
            var t = Number.POSITIVE_INFINITY;
            for (var n in e) e[n].pollingInterval && (t = Math.min(e[n].pollingInterval, t));
            return t
        }
        return function(e, t) {
            (r.internalActions.updateSubscriptionOptions.match(e) || r.internalActions.unsubscribeQueryResult.match(e)) && c(e.payload, t), (n.pending.match(e) || n.rejected.match(e) && e.meta.condition) && c(e.meta.arg, t), (n.fulfilled.match(e) || n.rejected.match(e) && !e.meta.condition) && a(e.meta.arg, t), r.util.resetApiState.match(e) && function() {
                for (var e = 0, t = Object.keys(u); e < t.length; e++) s(t[e])
            }()
        }
    },
    Sn = new Error("Promise never resolved before cacheEntryRemoved."),
    jn = function(e) {
        var t = e.api,
            n = e.reducerPath,
            r = e.context,
            i = e.queryThunk,
            o = e.mutationThunk;
        e.internalState;
        var u = ht(i),
            a = ht(o),
            c = yt(i, o),
            s = {};

        function f(e, n, i, o, u) {
            var a = r.endpointDefinitions[e],
                c = null == a ? void 0 : a.onCacheEntryAdded;
            if (c) {
                var f = {},
                    l = new Promise((function(e) {
                        f.cacheEntryRemoved = e
                    })),
                    d = Promise.race([new Promise((function(e) {
                        f.valueResolved = e
                    })), l.then((function() {
                        throw Sn
                    }))]);
                d.catch((function() {})), s[i] = f;
                var p = t.endpoints[e].select(a.type === Lt.query ? n : i),
                    v = o.dispatch((function(e, t, n) {
                        return n
                    })),
                    y = It(xt({}, o), {
                        getCacheEntry: function() {
                            return p(o.getState())
                        },
                        requestId: u,
                        extra: v,
                        updateCachedData: a.type === Lt.query ? function(r) {
                            return o.dispatch(t.util.updateQueryData(e, n, r))
                        } : void 0,
                        cacheDataLoaded: d,
                        cacheEntryRemoved: l
                    }),
                    h = c(n, y);
                Promise.resolve(h).catch((function(e) {
                    if (e !== Sn) throw e
                }))
            }
        }
        return function(e, r, l) {
            var d = function(e) {
                return u(e) ? e.meta.arg.queryCacheKey : a(e) ? e.meta.requestId : t.internalActions.removeQueryResult.match(e) ? e.payload.queryCacheKey : t.internalActions.removeMutationResult.match(e) ? an(e.payload) : ""
            }(e);
            if (i.pending.match(e)) {
                var p = l[n].queries[d],
                    v = r.getState()[n].queries[d];
                !p && v && f(e.meta.arg.endpointName, e.meta.arg.originalArgs, d, r, e.meta.requestId)
            } else if (o.pending.match(e))(v = r.getState()[n].mutations[d]) && f(e.meta.arg.endpointName, e.meta.arg.originalArgs, d, r, e.meta.requestId);
            else if (c(e))(null == (b = s[d]) ? void 0 : b.valueResolved) && (b.valueResolved({
                data: e.payload,
                meta: e.meta.baseQueryMeta
            }), delete b.valueResolved);
            else if (t.internalActions.removeQueryResult.match(e) || t.internalActions.removeMutationResult.match(e))(b = s[d]) && (delete s[d], b.cacheEntryRemoved());
            else if (t.util.resetApiState.match(e))
                for (var y = 0, h = Object.entries(s); y < h.length; y++) {
                    var g = h[y],
                        m = g[0],
                        b = g[1];
                    delete s[m], b.cacheEntryRemoved()
                }
        }
    },
    An = function(e) {
        var t = e.api,
            n = e.context,
            r = e.queryThunk,
            i = e.mutationThunk,
            o = dt(r, i),
            u = pt(r, i),
            a = yt(r, i),
            c = {};
        return function(e, r) {
            var i, s, f;
            if (o(e)) {
                var l = e.meta,
                    d = l.requestId,
                    p = l.arg,
                    v = p.endpointName,
                    y = p.originalArgs,
                    h = n.endpointDefinitions[v],
                    g = null == h ? void 0 : h.onQueryStarted;
                if (g) {
                    var m = {},
                        b = new Promise((function(e, t) {
                            m.resolve = e, m.reject = t
                        }));
                    b.catch((function() {})), c[d] = m;
                    var O = t.endpoints[v].select(h.type === Lt.query ? y : d),
                        w = r.dispatch((function(e, t, n) {
                            return n
                        })),
                        S = It(xt({}, r), {
                            getCacheEntry: function() {
                                return O(r.getState())
                            },
                            requestId: d,
                            extra: w,
                            updateCachedData: h.type === Lt.query ? function(e) {
                                return r.dispatch(t.util.updateQueryData(v, y, e))
                            } : void 0,
                            queryFulfilled: b
                        });
                    g(y, S)
                }
            } else if (a(e)) {
                var j = e.meta,
                    A = (d = j.requestId, j.baseQueryMeta);
                null == (i = c[d]) || i.resolve({
                    data: e.payload,
                    meta: A
                }), delete c[d]
            } else if (u(e)) {
                var q = e.meta,
                    P = (d = q.requestId, q.rejectedWithValue);
                A = q.baseQueryMeta, null == (f = c[d]) || f.reject({
                    error: null != (s = e.payload) ? s : e.error,
                    isUnhandledError: !P,
                    meta: A
                }), delete c[d]
            }
        }
    },
    qn = function(e) {
        var t = e.api,
            n = e.context.apiUid;
        return e.reducerPath,
            function(e, r) {
                t.util.resetApiState.match(e) && r.dispatch(t.internalActions.middlewareRegistered(n))
            }
    },
    Pn = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof global ? global : globalThis) : function(e) {
        return (mn || (mn = Promise.resolve())).then(e).catch((function(e) {
            return setTimeout((function() {
                throw e
            }), 0)
        }))
    };

function Rn(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    Object.assign.apply(Object, jt([e], t))
}
var kn = Symbol(),
    En = Object.defineProperty,
    Tn = Object.defineProperties,
    xn = Object.getOwnPropertyDescriptors,
    In = Object.getOwnPropertySymbols,
    Cn = Object.prototype.hasOwnProperty,
    Dn = Object.prototype.propertyIsEnumerable,
    Mn = function(e, t, n) {
        return t in e ? En(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    Qn = function(e, t) {
        for (var n in t || (t = {})) Cn.call(t, n) && Mn(e, n, t[n]);
        if (In)
            for (var r = 0, i = In(t); r < i.length; r++) n = i[r], Dn.call(t, n) && Mn(e, n, t[n]);
        return e
    },
    Nn = function(e, t) {
        return Tn(e, xn(t))
    };

function _n(t, n, r, i) {
    var o = e.useMemo((function() {
            return {
                queryArgs: t,
                serialized: "object" == typeof t ? n({
                    queryArgs: t,
                    endpointDefinition: r,
                    endpointName: i
                }) : t
            }
        }), [t, n, r, i]),
        u = e.useRef(o);
    return e.useEffect((function() {
        u.current.serialized !== o.serialized && (u.current = o)
    }), [o]), u.current.serialized === o.serialized ? u.current.queryArgs : t
}
var Kn = Symbol();

function zn(t) {
    var n = e.useRef(t);
    return e.useEffect((function() {
        c(n.current, t) || (n.current = t)
    }), [t]), c(n.current, t) ? n.current : t
}
var Fn, Ln = WeakMap ? new WeakMap : void 0,
    Un = function(e) {
        var t = e.endpointName,
            n = e.queryArgs,
            r = "",
            i = null == Ln ? void 0 : Ln.get(n);
        if ("string" == typeof i) r = i;
        else {
            var o = JSON.stringify(n, (function(e, t) {
                return He(t) ? Object.keys(t).sort().reduce((function(e, n) {
                    return e[n] = t[n], e
                }), {}) : t
            }));
            He(n) && (null == Ln || Ln.set(n, o)), r = o
        }
        return t + "(" + r + ")"
    },
    Wn = "undefined" != typeof window && window.document && window.document.createElement ? e.useLayoutEffect : e.useEffect,
    Bn = function(e) {
        return e
    },
    Hn = function(e) {
        return e.isUninitialized ? Nn(Qn({}, e), {
            isUninitialized: !1,
            isFetching: !0,
            isLoading: void 0 === e.data,
            status: Ot.pending
        }) : e
    };

function Vn(e) {
    return e.replace(e[0], e[0].toUpperCase())
}

function Jn(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    Object.assign.apply(Object, function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
        return e
    }([e], t))
}! function(e) {
    e.query = "query", e.mutation = "mutation"
}(Fn || (Fn = {}));
var Gn, Xn, $n, Yn, Zn, er, tr, nr, rr, ir, or, ur = Symbol(),
    ar = gn({
        name: kn,
        init: function(e, t, n) {
            var r = t.baseQuery,
                i = (t.tagTypes, t.reducerPath),
                o = t.serializeQueryArgs,
                u = t.keepUnusedDataFor,
                a = t.refetchOnMountOrArgChange,
                c = t.refetchOnFocus,
                s = t.refetchOnReconnect;
            ! function() {
                function e(t) {
                    if (!y(t)) return t;
                    if (Array.isArray(t)) return t.map(e);
                    if (S(t)) return new Map(Array.from(t.entries()).map((function(t) {
                        return [t[0], e(t[1])]
                    })));
                    if (j(t)) return new Set(Array.from(t).map(e));
                    var n = Object.create(Object.getPrototypeOf(t));
                    for (var r in t) n[r] = e(t[r]);
                    return m(t, ee) && (n[ee] = t[ee]), n
                }

                function t(t) {
                    return v(t) ? e(t) : t
                }
                var n = "add";
                T("Patches", {
                    $: function(t, r) {
                        return r.forEach((function(r) {
                            for (var i = r.path, o = r.op, u = t, a = 0; a < i.length - 1; a++) {
                                var c = g(u),
                                    s = i[a];
                                "string" != typeof s && "number" != typeof s && (s = "" + s), 0 !== c && 1 !== c || "__proto__" !== s && "constructor" !== s || p(24), "function" == typeof u && "prototype" === s && p(24), "object" != typeof(u = b(u, s)) && p(15, i.join("/"))
                            }
                            var f = g(u),
                                l = e(r.value),
                                d = i[i.length - 1];
                            switch (o) {
                                case "replace":
                                    switch (f) {
                                        case 2:
                                            return u.set(d, l);
                                        case 3:
                                            p(16);
                                        default:
                                            return u[d] = l
                                    }
                                case n:
                                    switch (f) {
                                        case 1:
                                            return "-" === d ? u.push(l) : u.splice(d, 0, l);
                                        case 2:
                                            return u.set(d, l);
                                        case 3:
                                            return u.add(l);
                                        default:
                                            return u[d] = l
                                    }
                                case "remove":
                                    switch (f) {
                                        case 1:
                                            return u.splice(d, 1);
                                        case 2:
                                            return u.delete(d);
                                        case 3:
                                            return u.delete(r.value);
                                        default:
                                            return delete u[d]
                                    }
                                default:
                                    p(17, o)
                            }
                        })), t
                    },
                    N: function(e, r, i, o) {
                        switch (e.i) {
                            case 0:
                            case 4:
                            case 2:
                                return a = r, c = i, s = o, f = (u = e).t, l = u.o, void h(u.R, (function(e, r) {
                                    var i = b(f, e),
                                        o = b(l, e),
                                        u = r ? m(f, e) ? "replace" : n : "remove";
                                    if (i !== o || "replace" !== u) {
                                        var d = a.concat(e);
                                        c.push("remove" === u ? {
                                            op: u,
                                            path: d
                                        } : {
                                            op: u,
                                            path: d,
                                            value: o
                                        }), s.push(u === n ? {
                                            op: "remove",
                                            path: d
                                        } : "remove" === u ? {
                                            op: n,
                                            path: d,
                                            value: t(i)
                                        } : {
                                            op: "replace",
                                            path: d,
                                            value: t(i)
                                        })
                                    }
                                }));
                            case 5:
                            case 1:
                                return function(e, r, i, o) {
                                    var u = e.t,
                                        a = e.R,
                                        c = e.o;
                                    if (c.length < u.length) {
                                        var s = [c, u];
                                        u = s[0], c = s[1];
                                        var f = [o, i];
                                        i = f[0], o = f[1]
                                    }
                                    for (var l = 0; l < u.length; l++)
                                        if (a[l] && c[l] !== u[l]) {
                                            var d = r.concat([l]);
                                            i.push({
                                                op: "replace",
                                                path: d,
                                                value: t(c[l])
                                            }), o.push({
                                                op: "replace",
                                                path: d,
                                                value: t(u[l])
                                            })
                                        }
                                    for (var p = u.length; p < c.length; p++) {
                                        var v = r.concat([p]);
                                        i.push({
                                            op: n,
                                            path: v,
                                            value: t(c[p])
                                        })
                                    }
                                    u.length < c.length && o.push({
                                        op: "replace",
                                        path: r.concat(["length"]),
                                        value: u.length
                                    })
                                }(e, r, i, o);
                            case 3:
                                return function(e, t, r, i) {
                                    var o = e.t,
                                        u = e.o,
                                        a = 0;
                                    o.forEach((function(e) {
                                        if (!u.has(e)) {
                                            var o = t.concat([a]);
                                            r.push({
                                                op: "remove",
                                                path: o,
                                                value: e
                                            }), i.unshift({
                                                op: n,
                                                path: o,
                                                value: e
                                            })
                                        }
                                        a++
                                    })), a = 0, u.forEach((function(e) {
                                        if (!o.has(e)) {
                                            var u = t.concat([a]);
                                            r.push({
                                                op: n,
                                                path: u,
                                                value: e
                                            }), i.unshift({
                                                op: "remove",
                                                path: u,
                                                value: e
                                            })
                                        }
                                        a++
                                    }))
                                }(e, r, i, o)
                        }
                        var u, a, c, s, f, l
                    },
                    M: function(e, t, n, r) {
                        n.push({
                            op: "replace",
                            path: [],
                            value: t === Z ? void 0 : t
                        }), r.push({
                            op: "replace",
                            path: [],
                            value: e
                        })
                    }
                })
            }();
            var f = function(e) {
                return e
            };
            Object.assign(e, {
                reducerPath: i,
                endpoints: {},
                internalActions: {
                    onOnline: Vt,
                    onOffline: Jt,
                    onFocus: Bt,
                    onFocusLost: Ht
                },
                util: {}
            });
            var l = function(e) {
                    var t = this,
                        n = e.reducerPath,
                        r = e.baseQuery,
                        i = e.context.endpointDefinitions,
                        o = e.serializeQueryArgs,
                        u = e.api,
                        a = e.assertTagType,
                        c = function(e, n) {
                            return Dt(t, [e, n], (function(e, t) {
                                var n, o, u, a, c, f, l, d, p, v, y, h, g, m = t.signal,
                                    b = t.abort,
                                    O = t.rejectWithValue,
                                    w = t.fulfillWithValue,
                                    S = t.dispatch,
                                    j = t.getState,
                                    A = t.extra;
                                return St(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            n = i[e.endpointName], t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 8, , 13]), o = rn, u = void 0, a = {
                                                signal: m,
                                                abort: b,
                                                dispatch: S,
                                                getState: j,
                                                extra: A,
                                                endpoint: e.endpointName,
                                                type: e.type,
                                                forced: "query" === e.type ? s(e, j()) : void 0
                                            }, (c = "query" === e.type ? e[tn] : void 0) ? (u = c(), [3, 6]) : [3, 2];
                                        case 2:
                                            return n.query ? [4, r(n.query(e.originalArgs), a, n.extraOptions)] : [3, 4];
                                        case 3:
                                            return u = t.sent(), n.transformResponse && (o = n.transformResponse), [3, 6];
                                        case 4:
                                            return [4, n.queryFn(e.originalArgs, a, n.extraOptions, (function(e) {
                                                return r(e, a, n.extraOptions)
                                            }))];
                                        case 5:
                                            u = t.sent(), t.label = 6;
                                        case 6:
                                            if (u.error) throw new Wt(u.error, u.meta);
                                            return f = w, [4, o(u.data, u.meta, e.originalArgs)];
                                        case 7:
                                            return [2, f.apply(void 0, [t.sent(), (h = {
                                                fulfilledTimeStamp: Date.now(),
                                                baseQueryMeta: u.meta
                                            }, h[mt] = !0, h)])];
                                        case 8:
                                            if (l = t.sent(), !((d = l) instanceof Wt)) return [3, 12];
                                            p = rn, n.query && n.transformErrorResponse && (p = n.transformErrorResponse), t.label = 9;
                                        case 9:
                                            return t.trys.push([9, 11, , 12]), v = O, [4, p(d.value, d.meta, e.originalArgs)];
                                        case 10:
                                            return [2, v.apply(void 0, [t.sent(), (g = {
                                                baseQueryMeta: d.meta
                                            }, g[mt] = !0, g)])];
                                        case 11:
                                            return y = t.sent(), d = y, [3, 12];
                                        case 12:
                                            throw d;
                                        case 13:
                                            return [2]
                                    }
                                }))
                            }))
                        };

                    function s(e, t) {
                        var r, i, o, u, a = null == (i = null == (r = t[n]) ? void 0 : r.queries) ? void 0 : i[e.queryCacheKey],
                            c = null == (o = t[n]) ? void 0 : o.config.refetchOnMountOrArgChange,
                            s = null == a ? void 0 : a.fulfilledTimeStamp,
                            f = null != (u = e.forceRefetch) ? u : e.subscribe && c;
                        return !!f && (!0 === f || (Number(new Date) - Number(s)) / 1e3 >= f)
                    }

                    function f(e) {
                        return function(t) {
                            var n, r;
                            return (null == (r = null == (n = null == t ? void 0 : t.meta) ? void 0 : n.arg) ? void 0 : r.endpointName) === e
                        }
                    }
                    return {
                        queryThunk: ot(n + "/executeQuery", c, {
                            getPendingMeta: function() {
                                var e;
                                return (e = {
                                    startedTimeStamp: Date.now()
                                })[mt] = !0, e
                            },
                            condition: function(e, t) {
                                var r, o, u, a = (0, t.getState)(),
                                    c = null == (o = null == (r = a[n]) ? void 0 : r.queries) ? void 0 : o[e.queryCacheKey],
                                    f = null == c ? void 0 : c.fulfilledTimeStamp,
                                    l = e.originalArgs,
                                    d = null == c ? void 0 : c.originalArgs,
                                    p = i[e.endpointName];
                                return !(!nn(e) && ("pending" === (null == c ? void 0 : c.status) || !s(e, a) && (!$t(p) || !(null == (u = null == p ? void 0 : p.forceRefetch) ? void 0 : u.call(p, {
                                    currentArg: l,
                                    previousArg: d,
                                    endpointState: c,
                                    state: a
                                }))) && f))
                            },
                            dispatchConditionRejection: !0
                        }),
                        mutationThunk: ot(n + "/executeMutation", c, {
                            getPendingMeta: function() {
                                var e;
                                return (e = {
                                    startedTimeStamp: Date.now()
                                })[mt] = !0, e
                            }
                        }),
                        prefetch: function(e, t, n) {
                            return function(r, i) {
                                var o = function(e) {
                                        return "force" in e
                                    }(n) && n.force,
                                    a = function(e) {
                                        return "ifOlderThan" in e
                                    }(n) && n.ifOlderThan,
                                    c = function(n) {
                                        return void 0 === n && (n = !0), u.endpoints[e].initiate(t, {
                                            forceRefetch: n
                                        })
                                    },
                                    s = u.endpoints[e].select(t)(i());
                                if (o) r(c());
                                else if (a) {
                                    var f = null == s ? void 0 : s.fulfilledTimeStamp;
                                    if (!f) return void r(c());
                                    (Number(new Date) - Number(new Date(f))) / 1e3 >= a && r(c())
                                } else r(c(!1))
                            }
                        },
                        updateQueryData: function(e, t, n, r) {
                            return void 0 === r && (r = !0),
                                function(i, o) {
                                    var a, c, s, f = u.endpoints[e].select(t)(o()),
                                        l = {
                                            patches: [],
                                            inversePatches: [],
                                            undo: function() {
                                                return i(u.util.patchQueryData(e, t, l.inversePatches, r))
                                            }
                                        };
                                    if (f.status === Ot.uninitialized) return l;
                                    if ("data" in f)
                                        if (y(f.data)) {
                                            var d = fe(f.data, n),
                                                p = d[0],
                                                v = d[1],
                                                h = d[2];
                                            (a = l.patches).push.apply(a, v), (c = l.inversePatches).push.apply(c, h), s = p
                                        } else s = n(f.data), l.patches.push({
                                            op: "replace",
                                            path: [],
                                            value: s
                                        }), l.inversePatches.push({
                                            op: "replace",
                                            path: [],
                                            value: f.data
                                        });
                                    return i(u.util.patchQueryData(e, t, l.patches, r)), l
                                }
                        },
                        upsertQueryData: function(e, t, n) {
                            return function(r) {
                                var i;
                                return r(u.endpoints[e].initiate(t, ((i = {
                                    subscribe: !1,
                                    forceRefetch: !0
                                })[tn] = function() {
                                    return {
                                        data: n
                                    }
                                }, i)))
                            }
                        },
                        patchQueryData: function(e, t, n, r) {
                            return function(c, s) {
                                var f = i[e],
                                    l = o({
                                        queryArgs: t,
                                        endpointDefinition: f,
                                        endpointName: e
                                    });
                                if (c(u.internalActions.queryResultPatched({
                                        queryCacheKey: l,
                                        patches: n
                                    })), r) {
                                    var d = u.endpoints[e].select(t)(s()),
                                        p = Yt(f.providesTags, d.data, void 0, t, {}, a);
                                    c(u.internalActions.updateProvidedBy({
                                        queryCacheKey: l,
                                        providedTags: p
                                    }))
                                }
                            }
                        },
                        buildMatchThunkActions: function(e, t) {
                            return {
                                matchPending: st(dt(e), f(t)),
                                matchFulfilled: st(yt(e), f(t)),
                                matchRejected: st(pt(e), f(t))
                            }
                        }
                    }
                }({
                    baseQuery: r,
                    reducerPath: i,
                    context: n,
                    api: e,
                    serializeQueryArgs: o,
                    assertTagType: f
                }),
                d = l.queryThunk,
                O = l.mutationThunk,
                w = l.patchQueryData,
                A = l.updateQueryData,
                q = l.upsertQueryData,
                P = l.prefetch,
                R = l.buildMatchThunkActions,
                k = fn({
                    context: n,
                    queryThunk: d,
                    mutationThunk: O,
                    reducerPath: i,
                    assertTagType: f,
                    config: {
                        refetchOnFocus: c,
                        refetchOnReconnect: s,
                        refetchOnMountOrArgChange: a,
                        keepUnusedDataFor: u,
                        reducerPath: i
                    }
                }),
                E = k.reducer,
                x = k.actions;
            Rn(e.util, {
                patchQueryData: w,
                updateQueryData: A,
                upsertQueryData: q,
                prefetch: P,
                resetApiState: x.resetApiState
            }), Rn(e.internalActions, x);
            var I = function(e) {
                    var t = e.reducerPath,
                        n = e.queryThunk,
                        r = e.api,
                        i = e.context,
                        o = i.apiUid,
                        u = {
                            invalidateTags: Ve(t + "/invalidateTags")
                        },
                        a = [qn, bn, On, wn, jn, An];
                    return {
                        middleware: function(n) {
                            var u = !1,
                                s = It(xt({}, e), {
                                    internalState: {
                                        currentSubscriptions: {}
                                    },
                                    refetchQuery: c
                                }),
                                f = a.map((function(e) {
                                    return e(s)
                                })),
                                l = function(e) {
                                    var t = e.api,
                                        n = e.queryThunk,
                                        r = e.internalState,
                                        i = t.reducerPath + "/subscriptions",
                                        o = null,
                                        u = !1,
                                        a = t.internalActions,
                                        c = a.updateSubscriptionOptions,
                                        s = a.unsubscribeQueryResult;
                                    return function(e, a) {
                                        var f, l;
                                        if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), t.util.resetApiState.match(e)) return o = r.currentSubscriptions = {}, [!0, !1];
                                        if (t.internalActions.internal_probeSubscription.match(e)) {
                                            var d = e.payload,
                                                p = d.queryCacheKey,
                                                v = d.requestId;
                                            return [!1, !!(null == (f = r.currentSubscriptions[p]) ? void 0 : f[v])]
                                        }
                                        var y = function(e, r) {
                                            var i, o, u, a, f, l, d, p, v;
                                            if (c.match(r)) {
                                                var y = r.payload,
                                                    h = y.queryCacheKey,
                                                    g = y.requestId,
                                                    m = y.options;
                                                return (null == (i = null == e ? void 0 : e[h]) ? void 0 : i[g]) && (e[h][g] = m), !0
                                            }
                                            if (s.match(r)) {
                                                var b = r.payload;
                                                return h = b.queryCacheKey, g = b.requestId, e[h] && delete e[h][g], !0
                                            }
                                            if (t.internalActions.removeQueryResult.match(r)) return delete e[r.payload.queryCacheKey], !0;
                                            if (n.pending.match(r)) {
                                                var O = r.meta,
                                                    w = O.arg;
                                                if (g = O.requestId, w.subscribe) return (S = null != (u = e[o = w.queryCacheKey]) ? u : e[o] = {})[g] = null != (f = null != (a = w.subscriptionOptions) ? a : S[g]) ? f : {}, !0
                                            }
                                            if (n.rejected.match(r)) {
                                                var S, j = r.meta,
                                                    A = j.condition;
                                                if (w = j.arg, g = j.requestId, A && w.subscribe) return (S = null != (d = e[l = w.queryCacheKey]) ? d : e[l] = {})[g] = null != (v = null != (p = w.subscriptionOptions) ? p : S[g]) ? v : {}, !0
                                            }
                                            return !1
                                        }(r.currentSubscriptions, e);
                                        if (y) {
                                            u || (Pn((function() {
                                                var e = JSON.parse(JSON.stringify(r.currentSubscriptions)),
                                                    n = fe(o, (function() {
                                                        return e
                                                    }))[1];
                                                a.next(t.internalActions.subscriptionsUpdated(n)), o = e, u = !1
                                            })), u = !0);
                                            var h = !!(null == (l = e.type) ? void 0 : l.startsWith(i)),
                                                g = n.rejected.match(e) && e.meta.condition && !!e.meta.arg.subscribe;
                                            return [!h && !g, !1]
                                        }
                                        return [!0, !1]
                                    }
                                }(s),
                                d = function(e) {
                                    var t = e.reducerPath,
                                        n = e.context,
                                        r = e.api,
                                        i = e.refetchQuery,
                                        o = e.internalState,
                                        u = r.internalActions.removeQueryResult;

                                    function a(e, r) {
                                        var a = e.getState()[t],
                                            c = a.queries,
                                            s = o.currentSubscriptions;
                                        n.batch((function() {
                                            for (var t = 0, n = Object.keys(s); t < n.length; t++) {
                                                var o = n[t],
                                                    f = c[o],
                                                    l = s[o];
                                                l && f && (Object.values(l).some((function(e) {
                                                    return !0 === e[r]
                                                })) || Object.values(l).every((function(e) {
                                                    return void 0 === e[r]
                                                })) && a.config[r]) && (0 === Object.keys(l).length ? e.dispatch(u({
                                                    queryCacheKey: o
                                                })) : f.status !== Ot.uninitialized && e.dispatch(i(f, o)))
                                            }
                                        }))
                                    }
                                    return function(e, t) {
                                        Bt.match(e) && a(t, "refetchOnFocus"), Vt.match(e) && a(t, "refetchOnReconnect")
                                    }
                                }(s);
                            return function(e) {
                                return function(a) {
                                    u || (u = !0, n.dispatch(r.internalActions.middlewareRegistered(o)));
                                    var c, s = It(xt({}, n), {
                                            next: e
                                        }),
                                        p = n.getState(),
                                        v = l(a, s, p),
                                        y = v[0],
                                        h = v[1];
                                    if (c = y ? e(a) : h, n.getState()[t] && (d(a, s, p), function(e) {
                                            return !!e && "string" == typeof e.type && e.type.startsWith(t + "/")
                                        }(a) || i.hasRehydrationInfo(a)))
                                        for (var g = 0, m = f; g < m.length; g++)(0, m[g])(a, s, p);
                                    return c
                                }
                            }
                        },
                        actions: u
                    };

                    function c(e, t, r) {
                        return void 0 === r && (r = {}), n(xt({
                            type: "query",
                            endpointName: e.endpointName,
                            originalArgs: e.originalArgs,
                            subscribe: !1,
                            forceRefetch: !0,
                            queryCacheKey: t
                        }, r))
                    }
                }({
                    reducerPath: i,
                    context: n,
                    queryThunk: d,
                    mutationThunk: O,
                    api: e,
                    assertTagType: f
                }),
                C = I.middleware,
                D = I.actions;
            Rn(e.util, D), Rn(e, {
                reducer: E,
                middleware: C
            });
            var M = function(e) {
                    var t = e.serializeQueryArgs,
                        n = e.reducerPath,
                        r = function(e) {
                            return pn
                        },
                        i = function(e) {
                            return vn
                        };
                    return {
                        buildQuerySelector: function(e, n) {
                            return function(i) {
                                var a = t({
                                    queryArgs: i,
                                    endpointDefinition: n,
                                    endpointName: e
                                });
                                return xe(i === ln ? r : function(e) {
                                    var t, n, r;
                                    return null != (r = null == (n = null == (t = u(e)) ? void 0 : t.queries) ? void 0 : n[a]) ? r : pn
                                }, o)
                            }
                        },
                        buildMutationSelector: function() {
                            return function(e) {
                                var t, n;
                                return n = "object" == typeof e ? null != (t = an(e)) ? t : ln : e, xe(n === ln ? i : function(e) {
                                    var t, r, i;
                                    return null != (i = null == (r = null == (t = u(e)) ? void 0 : t.mutations) ? void 0 : r[n]) ? i : vn
                                }, o)
                            }
                        },
                        selectInvalidatedBy: function(e, t) {
                            for (var r, i = e[n], o = new Set, u = 0, a = t.map(Zt); u < a.length; u++) {
                                var c = a[u],
                                    s = i.provided[c.type];
                                if (s)
                                    for (var f = 0, l = null != (r = void 0 !== c.id ? s[c.id] : Mt(Object.values(s))) ? r : []; f < l.length; f++) {
                                        var d = l[f];
                                        o.add(d)
                                    }
                            }
                            return Mt(Array.from(o.values()).map((function(e) {
                                var t = i.queries[e];
                                return t ? [{
                                    queryCacheKey: e,
                                    endpointName: t.endpointName,
                                    originalArgs: t.originalArgs
                                }] : []
                            })))
                        }
                    };

                    function o(e) {
                        return xt(xt({}, e), {
                            status: t = e.status,
                            isUninitialized: t === Ot.uninitialized,
                            isLoading: t === Ot.pending,
                            isSuccess: t === Ot.fulfilled,
                            isError: t === Ot.rejected
                        });
                        var t
                    }

                    function u(e) {
                        return e[n]
                    }
                }({
                    serializeQueryArgs: o,
                    reducerPath: i
                }),
                Q = M.buildQuerySelector,
                N = M.buildMutationSelector,
                _ = M.selectInvalidatedBy;
            Rn(e.util, {
                selectInvalidatedBy: _
            });
            var K = function(e) {
                    var t = e.serializeQueryArgs,
                        n = e.queryThunk,
                        r = e.mutationThunk,
                        i = e.api,
                        o = e.context,
                        u = new Map,
                        a = new Map,
                        c = i.internalActions,
                        s = c.unsubscribeQueryResult,
                        f = c.removeMutationResult,
                        l = c.updateSubscriptionOptions;
                    return {
                        buildInitiateQuery: function(e, r) {
                            var o = function(a, c) {
                                var f = void 0 === c ? {} : c,
                                    d = f.subscribe,
                                    p = void 0 === d || d,
                                    v = f.forceRefetch,
                                    y = f.subscriptionOptions,
                                    h = f[tn];
                                return function(c, f) {
                                    var d, g, m = t({
                                            queryArgs: a,
                                            endpointDefinition: r,
                                            endpointName: e
                                        }),
                                        b = n(((d = {
                                            type: "query",
                                            subscribe: p,
                                            forceRefetch: v,
                                            subscriptionOptions: y,
                                            endpointName: e,
                                            originalArgs: a,
                                            queryCacheKey: m
                                        })[tn] = h, d)),
                                        O = i.endpoints[e].select(a),
                                        w = c(b),
                                        S = O(f()),
                                        j = w.requestId,
                                        A = w.abort,
                                        q = S.requestId !== j,
                                        P = null == (g = u.get(c)) ? void 0 : g[m],
                                        R = function() {
                                            return O(f())
                                        },
                                        k = Object.assign(h ? w.then(R) : q && !P ? Promise.resolve(S) : Promise.all([P, w]).then(R), {
                                            arg: a,
                                            requestId: j,
                                            subscriptionOptions: y,
                                            queryCacheKey: m,
                                            abort: A,
                                            unwrap: function() {
                                                return Dt(this, null, (function() {
                                                    var e;
                                                    return St(this, (function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return [4, k];
                                                            case 1:
                                                                if ((e = t.sent()).isError) throw e.error;
                                                                return [2, e.data]
                                                        }
                                                    }))
                                                }))
                                            },
                                            refetch: function() {
                                                return c(o(a, {
                                                    subscribe: !1,
                                                    forceRefetch: !0
                                                }))
                                            },
                                            unsubscribe: function() {
                                                p && c(s({
                                                    queryCacheKey: m,
                                                    requestId: j
                                                }))
                                            },
                                            updateSubscriptionOptions: function(t) {
                                                k.subscriptionOptions = t, c(l({
                                                    endpointName: e,
                                                    requestId: j,
                                                    queryCacheKey: m,
                                                    options: t
                                                }))
                                            }
                                        });
                                    if (!P && !q && !h) {
                                        var E = u.get(c) || {};
                                        E[m] = k, u.set(c, E), k.then((function() {
                                            delete E[m], Object.keys(E).length || u.delete(c)
                                        }))
                                    }
                                    return k
                                }
                            };
                            return o
                        },
                        buildInitiateMutation: function(e) {
                            return function(t, n) {
                                var i = void 0 === n ? {} : n,
                                    o = i.track,
                                    u = void 0 === o || o,
                                    c = i.fixedCacheKey;
                                return function(n, i) {
                                    var o = r({
                                            type: "mutation",
                                            endpointName: e,
                                            originalArgs: t,
                                            track: u,
                                            fixedCacheKey: c
                                        }),
                                        s = n(o),
                                        l = s.requestId,
                                        d = s.abort,
                                        p = s.unwrap,
                                        v = s.unwrap().then((function(e) {
                                            return {
                                                data: e
                                            }
                                        })).catch((function(e) {
                                            return {
                                                error: e
                                            }
                                        })),
                                        y = function() {
                                            n(f({
                                                requestId: l,
                                                fixedCacheKey: c
                                            }))
                                        },
                                        h = Object.assign(v, {
                                            arg: s.arg,
                                            requestId: l,
                                            abort: d,
                                            unwrap: p,
                                            unsubscribe: y,
                                            reset: y
                                        }),
                                        g = a.get(n) || {};
                                    return a.set(n, g), g[l] = h, h.then((function() {
                                        delete g[l], Object.keys(g).length || a.delete(n)
                                    })), c && (g[c] = h, h.then((function() {
                                        g[c] === h && (delete g[c], Object.keys(g).length || a.delete(n))
                                    }))), h
                                }
                            }
                        },
                        getRunningQueryThunk: function(e, n) {
                            return function(r) {
                                var i, a = o.endpointDefinitions[e],
                                    c = t({
                                        queryArgs: n,
                                        endpointDefinition: a,
                                        endpointName: e
                                    });
                                return null == (i = u.get(r)) ? void 0 : i[c]
                            }
                        },
                        getRunningMutationThunk: function(e, t) {
                            return function(e) {
                                var n;
                                return null == (n = a.get(e)) ? void 0 : n[t]
                            }
                        },
                        getRunningQueriesThunk: function() {
                            return function(e) {
                                return Object.values(u.get(e) || {}).filter(en)
                            }
                        },
                        getRunningMutationsThunk: function() {
                            return function(e) {
                                return Object.values(a.get(e) || {}).filter(en)
                            }
                        },
                        getRunningOperationPromises: function() {
                            var e = function(e) {
                                return Array.from(e.values()).flatMap((function(e) {
                                    return e ? Object.values(e) : []
                                }))
                            };
                            return jt(jt([], e(u)), e(a)).filter(en)
                        },
                        removalWarning: function() {
                            throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.")
                        }
                    }
                }({
                    queryThunk: d,
                    mutationThunk: O,
                    api: e,
                    serializeQueryArgs: o,
                    context: n
                }),
                z = K.buildInitiateQuery,
                F = K.buildInitiateMutation,
                L = K.getRunningMutationThunk,
                U = K.getRunningMutationsThunk,
                W = K.getRunningQueriesThunk,
                B = K.getRunningQueryThunk,
                H = K.getRunningOperationPromises,
                V = K.removalWarning;
            return Rn(e.util, {
                getRunningOperationPromises: H,
                getRunningOperationPromise: V,
                getRunningMutationThunk: L,
                getRunningMutationsThunk: U,
                getRunningQueryThunk: B,
                getRunningQueriesThunk: W
            }), {
                name: kn,
                injectEndpoint: function(t, n) {
                    var r, i = e;
                    null != (r = i.endpoints)[t] || (r[t] = {}), $t(n) ? Rn(i.endpoints[t], {
                        name: t,
                        select: Q(t, n),
                        initiate: z(t, n)
                    }, R(d, t)) : n.type === Lt.mutation && Rn(i.endpoints[t], {
                        name: t,
                        select: N(),
                        initiate: F(t)
                    }, R(O, t))
                }
            }
        }
    }, ($n = void 0 === (Xn = (Gn = {}).batch) ? o.unstable_batchedUpdates : Xn, Zn = void 0 === (Yn = Gn.useDispatch) ? d : Yn, tr = void 0 === (er = Gn.useSelector) ? i : er, rr = void 0 === (nr = Gn.useStore) ? f : nr, or = void 0 !== (ir = Gn.unstable__sideEffectsInRender) && ir, {
        name: ur,
        init: function(t, n, r) {
            var i = n.serializeQueryArgs,
                o = t,
                u = function(t) {
                    var n = t.api,
                        r = t.moduleOptions,
                        i = r.batch,
                        o = r.useDispatch,
                        u = r.useSelector,
                        a = r.useStore,
                        s = r.unstable__sideEffectsInRender,
                        f = t.serializeQueryArgs,
                        l = t.context,
                        d = s ? function(e) {
                            return e()
                        } : e.useEffect;
                    return {
                        buildQueryHooks: function(t) {
                            var r = function(r, i) {
                                    var u = void 0 === i ? {} : i,
                                        a = u.refetchOnReconnect,
                                        c = u.refetchOnFocus,
                                        s = u.refetchOnMountOrArgChange,
                                        f = u.skip,
                                        p = void 0 !== f && f,
                                        v = u.pollingInterval,
                                        y = void 0 === v ? 0 : v,
                                        h = n.endpoints[t].initiate,
                                        g = o(),
                                        m = _n(p ? ln : r, Un, l.endpointDefinitions[t], t),
                                        b = zn({
                                            refetchOnReconnect: a,
                                            refetchOnFocus: c,
                                            pollingInterval: y
                                        }),
                                        O = e.useRef(!1),
                                        w = e.useRef(),
                                        S = w.current || {},
                                        j = S.queryCacheKey,
                                        A = S.requestId,
                                        q = !1;
                                    if (j && A) {
                                        var P = g(n.internalActions.internal_probeSubscription({
                                            queryCacheKey: j,
                                            requestId: A
                                        }));
                                        q = !!P
                                    }
                                    var R = !q && O.current;
                                    return d((function() {
                                        O.current = q
                                    })), d((function() {
                                        R && (w.current = void 0)
                                    }), [R]), d((function() {
                                        var e, t = w.current;
                                        if (m === ln) return null == t || t.unsubscribe(), void(w.current = void 0);
                                        var n = null == (e = w.current) ? void 0 : e.subscriptionOptions;
                                        if (t && t.arg === m) b !== n && t.updateSubscriptionOptions(b);
                                        else {
                                            null == t || t.unsubscribe();
                                            var r = g(h(m, {
                                                subscriptionOptions: b,
                                                forceRefetch: s
                                            }));
                                            w.current = r
                                        }
                                    }), [g, h, s, m, b, R]), e.useEffect((function() {
                                        return function() {
                                            var e;
                                            null == (e = w.current) || e.unsubscribe(), w.current = void 0
                                        }
                                    }), []), e.useMemo((function() {
                                        return {
                                            refetch: function() {
                                                var e;
                                                if (!w.current) throw new Error("Cannot refetch a query that has not been started yet.");
                                                return null == (e = w.current) ? void 0 : e.refetch()
                                            }
                                        }
                                    }), [])
                                },
                                s = function(r) {
                                    var u = void 0 === r ? {} : r,
                                        a = u.refetchOnReconnect,
                                        c = u.refetchOnFocus,
                                        s = u.pollingInterval,
                                        f = void 0 === s ? 0 : s,
                                        l = n.endpoints[t].initiate,
                                        p = o(),
                                        v = e.useState(Kn),
                                        y = v[0],
                                        h = v[1],
                                        g = e.useRef(),
                                        m = zn({
                                            refetchOnReconnect: a,
                                            refetchOnFocus: c,
                                            pollingInterval: f
                                        });
                                    d((function() {
                                        var e, t, n = null == (e = g.current) ? void 0 : e.subscriptionOptions;
                                        m !== n && (null == (t = g.current) || t.updateSubscriptionOptions(m))
                                    }), [m]);
                                    var b = e.useRef(m);
                                    d((function() {
                                        b.current = m
                                    }), [m]);
                                    var O = e.useCallback((function(e, t) {
                                        var n;
                                        return void 0 === t && (t = !1), i((function() {
                                            var r;
                                            null == (r = g.current) || r.unsubscribe(), g.current = n = p(l(e, {
                                                subscriptionOptions: b.current,
                                                forceRefetch: !t
                                            })), h(e)
                                        })), n
                                    }), [p, l]);
                                    return e.useEffect((function() {
                                        return function() {
                                            var e;
                                            null == (e = null == g ? void 0 : g.current) || e.unsubscribe()
                                        }
                                    }), []), e.useEffect((function() {
                                        y === Kn || g.current || O(y, !0)
                                    }), [y, O]), e.useMemo((function() {
                                        return [O, y]
                                    }), [O, y])
                                },
                                v = function(r, i) {
                                    var o = void 0 === i ? {} : i,
                                        s = o.skip,
                                        d = void 0 !== s && s,
                                        v = o.selectFromResult,
                                        y = n.endpoints[t].select,
                                        h = _n(d ? ln : r, f, l.endpointDefinitions[t], t),
                                        g = e.useRef(),
                                        m = e.useMemo((function() {
                                            return xe([y(h), function(e, t) {
                                                return t
                                            }, function(e) {
                                                return h
                                            }], p)
                                        }), [y, h]),
                                        b = e.useMemo((function() {
                                            return v ? xe([m], v) : m
                                        }), [m, v]),
                                        O = u((function(e) {
                                            return b(e, g.current)
                                        }), c),
                                        w = a(),
                                        S = m(w.getState(), g.current);
                                    return Wn((function() {
                                        g.current = S
                                    }), [S]), O
                                };
                            return {
                                useQueryState: v,
                                useQuerySubscription: r,
                                useLazyQuerySubscription: s,
                                useLazyQuery: function(t) {
                                    var n = s(t),
                                        r = n[0],
                                        i = n[1],
                                        o = v(i, Nn(Qn({}, t), {
                                            skip: i === Kn
                                        })),
                                        u = e.useMemo((function() {
                                            return {
                                                lastArg: i
                                            }
                                        }), [i]);
                                    return e.useMemo((function() {
                                        return [r, o, u]
                                    }), [r, o, u])
                                },
                                useQuery: function(t, n) {
                                    var i = r(t, n),
                                        o = v(t, Qn({
                                            selectFromResult: t === ln || (null == n ? void 0 : n.skip) ? void 0 : Hn
                                        }, n)),
                                        u = o.data,
                                        a = o.status,
                                        c = o.isLoading,
                                        s = o.isSuccess,
                                        f = o.isError,
                                        l = o.error;
                                    return e.useDebugValue({
                                        data: u,
                                        status: a,
                                        isLoading: c,
                                        isSuccess: s,
                                        isError: f,
                                        error: l
                                    }), e.useMemo((function() {
                                        return Qn(Qn({}, o), i)
                                    }), [o, i])
                                }
                            }
                        },
                        buildMutationHook: function(t) {
                            return function(r) {
                                var a = void 0 === r ? {} : r,
                                    s = a.selectFromResult,
                                    f = void 0 === s ? Bn : s,
                                    l = a.fixedCacheKey,
                                    d = n.endpoints[t],
                                    p = d.select,
                                    v = d.initiate,
                                    y = o(),
                                    h = e.useState(),
                                    g = h[0],
                                    m = h[1];
                                e.useEffect((function() {
                                    return function() {
                                        (null == g ? void 0 : g.arg.fixedCacheKey) || null == g || g.reset()
                                    }
                                }), [g]);
                                var b = e.useCallback((function(e) {
                                        var t = y(v(e, {
                                            fixedCacheKey: l
                                        }));
                                        return m(t), t
                                    }), [y, v, l]),
                                    O = (g || {}).requestId,
                                    w = e.useMemo((function() {
                                        return xe([p({
                                            fixedCacheKey: l,
                                            requestId: null == g ? void 0 : g.requestId
                                        })], f)
                                    }), [p, g, f, l]),
                                    S = u(w, c),
                                    j = null == l ? null == g ? void 0 : g.arg.originalArgs : void 0,
                                    A = e.useCallback((function() {
                                        i((function() {
                                            g && m(void 0), l && y(n.internalActions.removeMutationResult({
                                                requestId: O,
                                                fixedCacheKey: l
                                            }))
                                        }))
                                    }), [y, l, g, O]),
                                    q = S.endpointName,
                                    P = S.data,
                                    R = S.status,
                                    k = S.isLoading,
                                    E = S.isSuccess,
                                    T = S.isError,
                                    x = S.error;
                                e.useDebugValue({
                                    endpointName: q,
                                    data: P,
                                    status: R,
                                    isLoading: k,
                                    isSuccess: E,
                                    isError: T,
                                    error: x
                                });
                                var I = e.useMemo((function() {
                                    return Nn(Qn({}, S), {
                                        originalArgs: j,
                                        reset: A
                                    })
                                }), [S, j, A]);
                                return e.useMemo((function() {
                                    return [b, I]
                                }), [b, I])
                            }
                        },
                        usePrefetch: function(t, r) {
                            var i = o(),
                                u = zn(r);
                            return e.useCallback((function(e, r) {
                                return i(n.util.prefetch(t, e, Qn(Qn({}, u), r)))
                            }), [t, i, u])
                        }
                    };

                    function p(e, t, n) {
                        if ((null == t ? void 0 : t.endpointName) && e.isUninitialized) {
                            var r = t.endpointName,
                                i = l.endpointDefinitions[r];
                            f({
                                queryArgs: t.originalArgs,
                                endpointDefinition: i,
                                endpointName: r
                            }) === f({
                                queryArgs: n,
                                endpointDefinition: i,
                                endpointName: r
                            }) && (t = void 0)
                        }
                        var o = e.isSuccess ? e.data : null == t ? void 0 : t.data;
                        void 0 === o && (o = e.data);
                        var u = void 0 !== o,
                            a = e.isLoading,
                            c = !u && a,
                            s = e.isSuccess || a && u;
                        return Nn(Qn({}, e), {
                            data: o,
                            currentData: e.data,
                            isFetching: a,
                            isLoading: c,
                            isSuccess: s
                        })
                    }
                }({
                    api: t,
                    moduleOptions: {
                        batch: $n,
                        useDispatch: Zn,
                        useSelector: tr,
                        useStore: rr,
                        unstable__sideEffectsInRender: or
                    },
                    serializeQueryArgs: i,
                    context: r
                }),
                a = u.buildQueryHooks,
                s = u.buildMutationHook,
                f = u.usePrefetch;
            return Jn(o, {
                usePrefetch: f
            }), Jn(r, {
                batch: $n
            }), {
                injectEndpoint: function(e, n) {
                    if (n.type === Fn.query) {
                        var r = a(e),
                            i = r.useQuery,
                            u = r.useLazyQuery,
                            c = r.useLazyQuerySubscription,
                            f = r.useQueryState,
                            l = r.useQuerySubscription;
                        Jn(o.endpoints[e], {
                            useQuery: i,
                            useLazyQuery: u,
                            useLazyQuerySubscription: c,
                            useQueryState: f,
                            useQuerySubscription: l
                        }), t["use" + Vn(e) + "Query"] = i, t["useLazy" + Vn(e) + "Query"] = u
                    } else if (n.type === Fn.mutation) {
                        var d = s(e);
                        Jn(o.endpoints[e], {
                            useMutation: d
                        }), t["use" + Vn(e) + "Mutation"] = d
                    }
                }
            }
        }
    }));
const cr = Ze({
        name: "auth",
        initialState: {
            tokens: {
                access: null,
                refresh: ""
            }
        },
        reducers: {
            setTokens: (e, t) => {
                e.tokens.access = t.payload.access_token, e.tokens.refresh = t.payload.refresh_token
            },
            setAccessToken: (e, t) => {
                e.tokens.access = t.payload.access
            },
            removeTokens: e => {
                e.tokens = {
                    access: null,
                    refresh: ""
                }
            }
        }
    }),
    {
        setAccessToken: sr,
        setTokens: fr,
        removeTokens: lr
    } = cr.actions,
    dr = cr.reducer,
    pr = function(e) {
        var t = this;
        void 0 === e && (e = {});
        var n = e,
            r = n.baseUrl,
            i = n.prepareHeaders,
            o = void 0 === i ? function(e) {
                return e
            } : i,
            u = n.fetchFn,
            a = void 0 === u ? _t : u,
            c = n.paramsSerializer,
            s = n.isJsonContentType,
            f = void 0 === s ? zt : s,
            l = n.jsonContentType,
            d = void 0 === l ? "application/json" : l,
            p = n.jsonReplacer,
            v = n.timeout,
            y = n.responseHandler,
            h = n.validateStatus,
            g = Ct(n, ["baseUrl", "prepareHeaders", "fetchFn", "paramsSerializer", "isJsonContentType", "jsonContentType", "jsonReplacer", "timeout", "responseHandler", "validateStatus"]);
        return function(e, n) {
            return Dt(t, null, (function() {
                var t, i, u, s, l, b, O, w, S, j, A, q, P, R, k, E, T, x, I, C, D, M, Q, N, _, K, z, F, L, U, W, B, H, V, J, G;
                return St(this, (function(X) {
                    switch (X.label) {
                        case 0:
                            return t = n.signal, i = n.getState, u = n.extra, s = n.endpoint, l = n.forced, b = n.type, S = (w = "string" == typeof e ? {
                                url: e
                            } : e).url, j = w.headers, A = void 0 === j ? new Headers(g.headers) : j, q = w.params, P = void 0 === q ? void 0 : q, R = w.responseHandler, k = void 0 === R ? null != y ? y : "json" : R, E = w.validateStatus, T = void 0 === E ? null != h ? h : Kt : E, x = w.timeout, I = void 0 === x ? v : x, C = Ct(w, ["url", "headers", "params", "responseHandler", "validateStatus", "timeout"]), D = xt(It(xt({}, g), {
                                signal: t
                            }), C), A = new Headers(Ft(A)), M = D, [4, o(A, {
                                getState: i,
                                extra: u,
                                endpoint: s,
                                forced: l,
                                type: b
                            })];
                        case 1:
                            M.headers = X.sent() || A, Q = function(e) {
                                return "object" == typeof e && (He(e) || Array.isArray(e) || "function" == typeof e.toJSON)
                            }, !D.headers.has("content-type") && Q(D.body) && D.headers.set("content-type", d), Q(D.body) && f(D.headers) && (D.body = JSON.stringify(D.body, p)), P && (N = ~S.indexOf("?") ? "&" : "?", _ = c ? c(P) : new URLSearchParams(Ft(P)), S += N + _), S = function(e, t) {
                                if (!e) return t;
                                if (!t) return e;
                                if (function(e) {
                                        return new RegExp("(^|:)//").test(e)
                                    }(t)) return t;
                                var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
                                return "" + (e = function(e) {
                                    return e.replace(/\/$/, "")
                                }(e)) + n + function(e) {
                                    return e.replace(/^\//, "")
                                }(t)
                            }(r, S), K = new Request(S, D), z = new Request(S, D), O = {
                                request: z
                            }, L = !1, U = I && setTimeout((function() {
                                L = !0, n.abort()
                            }), I), X.label = 2;
                        case 2:
                            return X.trys.push([2, 4, 5, 6]), [4, a(K)];
                        case 3:
                            return F = X.sent(), [3, 6];
                        case 4:
                            return W = X.sent(), [2, {
                                error: {
                                    status: L ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                                    error: String(W)
                                },
                                meta: O
                            }];
                        case 5:
                            return U && clearTimeout(U), [7];
                        case 6:
                            B = F.clone(), O.response = B, V = "", X.label = 7;
                        case 7:
                            return X.trys.push([7, 9, , 10]), [4, Promise.all([m(F, k).then((function(e) {
                                return H = e
                            }), (function(e) {
                                return J = e
                            })), B.text().then((function(e) {
                                return V = e
                            }), (function() {}))])];
                        case 8:
                            if (X.sent(), J) throw J;
                            return [3, 10];
                        case 9:
                            return G = X.sent(), [2, {
                                error: {
                                    status: "PARSING_ERROR",
                                    originalStatus: F.status,
                                    data: V,
                                    error: String(G)
                                },
                                meta: O
                            }];
                        case 10:
                            return [2, T(F, H) ? {
                                data: H,
                                meta: O
                            } : {
                                error: {
                                    status: F.status,
                                    data: H
                                },
                                meta: O
                            }]
                    }
                }))
            }))
        };

        function m(e, t) {
            return Dt(this, null, (function() {
                var n;
                return St(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return "function" == typeof t ? [2, t(e)] : ("content-type" === t && (t = f(e.headers) ? "json" : "text"), "json" !== t ? [3, 2] : [4, e.text()]);
                        case 1:
                            return [2, (n = r.sent()).length ? JSON.parse(n) : null];
                        case 2:
                            return [2, e.text()]
                    }
                }))
            }))
        }
    }({
        baseUrl: u,
        credentials: "same-origin",
        prepareHeaders: (e, {
            getState: t
        }) => {
            const {
                tokens: n
            } = t().auth, {
                locale: r
            } = t().app;
            return e.set("Accept-Language", r.id), e.set("Django-Language", r.id), n.access && e.set("authorization", `Bearer ${n.access}`), e
        }
    }),
    vr = ar({
        baseQuery: async (e, t, n) => {
            let r = await pr(e, t, n);
            if ("login" === t.endpoint && r.data && t.dispatch(fr(r.data)), r.error && 401 === r.error.status) {
                const {
                    tokens: i
                } = t.getState().auth, o = await pr({
                    url: "/accounts/token/refresh/",
                    method: "POST",
                    body: {
                        refresh: i.refresh
                    }
                }, t, n);
                o.data ? (t.dispatch(sr(o.data)), r = await pr(e, t, n)) : t.dispatch(lr())
            }
            return r
        },
        tagTypes: ["User", "Exercise", "Equipment", "Difficulty", "OriginalWorkouts", "Muscles", "Search", "ExerciseDirectory", "FavoriteWorkouts", "FavoriteExercises", "Subscription"],
        endpoints: () => ({})
    });
export {
    vr as B, xe as a, we as b, Ze as c, Se as d, dr as e, $e as f, Xt as g, Ae as h, Pe as i, qe as j, lr as r, fr as s, d as u
};