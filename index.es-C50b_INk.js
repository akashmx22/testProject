import {
    r as e,
    R as n
} from "./index-klX-IjEm.js";
var t = function(e) {
        var n = "";
        if (e) {
            var t = Object.keys(e);
            t.forEach((function(t) {
                e[t] && e[t].toString().length && (n += t + "=" + e[t] + "&")
            })), t.length > 0 && "&" === n[n.length - 1] && (n = n.slice(0, -1))
        }
        return n
    },
    o = [];
const r = function(r) {
    var i = r.clientId,
        c = r.redirectURI,
        a = r.state,
        u = void 0 === a ? "" : a,
        l = r.render,
        s = r.designProp,
        p = void 0 === s ? {
            locale: "en_US"
        } : s,
        d = r.responseMode,
        f = void 0 === d ? "query" : d,
        h = r.responseType,
        v = void 0 === h ? "code" : h,
        y = r.nonce,
        m = r.callback,
        b = r.scope,
        w = r.autoLoad,
        g = void 0 !== w && w,
        E = r.usePopup,
        x = void 0 !== E && E,
        I = function(n) {
            var t = e.useState({
                    loaded: !1,
                    error: !1
                }),
                r = t[0],
                i = t[1];
            return e.useEffect((function() {
                if (o.includes(n)) return i({
                        loaded: !0,
                        error: !1
                    }),
                    function() {};
                o.push(n);
                var e = document.createElement("script");
                e.src = n, e.async = !0;
                var t = function() {
                        i({
                            loaded: !0,
                            error: !1
                        })
                    },
                    r = function() {
                        var t = o.indexOf(n);
                        t >= 0 && o.splice(t, 1), e.remove(), i({
                            loaded: !0,
                            error: !0
                        })
                    };
                return e.addEventListener("load", t), e.addEventListener("error", r), document.body.appendChild(e),
                    function() {
                        e.removeEventListener("load", t), e.removeEventListener("error", r)
                    }
            }), [n]), [r.loaded, r.error]
        }("https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/" + (r && r.designProp && r.designProp.locale || "en_US") + "/appleid.auth.js")[0],
        k = function(e) {
            return void 0 === e && (e = null), o = function() {
                var n, o;
                return function(n, t) {
                    var o, r, i, c, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return c = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function u(c) {
                        return function(u) {
                            return function(c) {
                                if (o) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (o = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                                    switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            i = c;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                                a.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && a.label < i[1]) {
                                                a.label = i[1], i = c;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(c);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    c = t.call(n, a)
                                } catch (e) {
                                    c = [6, e], r = 0
                                } finally {
                                    o = i = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, u])
                        }
                    }
                }(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return e && e.preventDefault(), x ? [3, 1] : (window.location.href = "https://appleid.apple.com/auth/authorize?" + t({
                                response_type: v,
                                response_mode: f,
                                client_id: i,
                                redirect_uri: encodeURIComponent(c),
                                state: u,
                                nonce: y,
                                scope: "query" === f ? "" : b
                            }), [3, 4]);
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, AppleID.auth.signIn()];
                        case 2:
                            return n = r.sent(), "function" == typeof m && n && m(n), [3, 4];
                        case 3:
                            return o = r.sent(), "function" == typeof m && m({
                                error: o
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                }))
            }, new((n = void 0) || (n = Promise))((function(t, r) {
                function i(n) {
                    try {
                        a(o.next(n))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(n) {
                    try {
                        a(o.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    e.done ? t(e.value) : new n((function(n) {
                        n(e.value)
                    })).then(i, c)
                }
                a((o = o.apply(void 0, [])).next())
            }));
            var n, o
        };
    return e.useEffect((function() {
        if (!x && (g && k(), "function" == typeof m && "query" === f && "code" === v && window && window.location)) {
            for (var e = void 0, n = /\+/g, t = /([^&=]+)=?([^&]*)/g, o = function(e) {
                    return decodeURIComponent(e.replace(n, " "))
                }, r = window.location.search.substring(1), i = {}; e = t.exec(r);) i[o(e[1])] = o(e[2]);
            i.code && m({
                code: i.code
            })
        }
        return function() {}
    }), []), e.useEffect((function() {
        return x && I && (AppleID.auth.init({
                clientId: i,
                scope: b,
                redirectURI: c || location.protocol + "//" + location.host + location.pathname,
                state: u,
                nonce: y,
                usePopup: x
            }), g && k()),
            function() {}
    }), [I, x]), "function" == typeof l ? l({
        onClick: k
    }) : n.createElement("div", {
        id: "appleid-signin",
        onClick: k
    }, n.createElement("img", {
        src: "https://appleid.cdn-apple.com/appleid/button?" + t(p)
    }))
};
export {
    r as A
};