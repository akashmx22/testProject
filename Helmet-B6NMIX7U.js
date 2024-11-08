import {
    P as e
} from "./index-BWUEYic3.js";
import {
    g as t,
    r,
    R as n
} from "./index-klX-IjEm.js";
var o, i = r,
    a = (o = i) && "object" == typeof o && "default" in o ? o.default : o;

function u(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var c = !("undefined" == typeof window || !window.document || !window.document.createElement);
const s = t((function(e, t, r) {
    if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
    if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (void 0 !== r && "function" != typeof r) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    return function(n) {
        if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
        var o, s = [];

        function f() {
            o = e(s.map((function(e) {
                return e.props
            }))), l.canUseDOM ? t(o) : r && (o = r(o))
        }
        var l = function(e) {
            var t, r;

            function i() {
                return e.apply(this, arguments) || this
            }
            r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.peek = function() {
                return o
            }, i.rewind = function() {
                if (i.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var e = o;
                return o = void 0, s = [], e
            };
            var u = i.prototype;
            return u.UNSAFE_componentWillMount = function() {
                s.push(this), f()
            }, u.componentDidUpdate = function() {
                f()
            }, u.componentWillUnmount = function() {
                var e = s.indexOf(this);
                s.splice(e, 1), f()
            }, u.render = function() {
                return a.createElement(n, this.props)
            }, i
        }(i.PureComponent);
        return u(l, "displayName", "SideEffect(" + function(e) {
            return e.displayName || e.name || "Component"
        }(n) + ")"), u(l, "canUseDOM", c), l
    }
}));
var f = "undefined" != typeof Element,
    l = "function" == typeof Map,
    p = "function" == typeof Set,
    d = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

function y(e, t) {
    if (e === t) return !0;
    if (e && t && "object" == typeof e && "object" == typeof t) {
        if (e.constructor !== t.constructor) return !1;
        var r, n, o, i;
        if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--;)
                if (!y(e[n], t[n])) return !1;
            return !0
        }
        if (l && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!y(n.value[1], t.get(n.value[0]))) return !1;
            return !0
        }
        if (p && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            return !0
        }
        if (d && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--;)
                if (e[n] !== t[n]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof t.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof t.toString) return e.toString() === t.toString();
        if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (n = r; 0 != n--;)
            if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
        if (f && e instanceof Element) return !1;
        for (n = r; 0 != n--;)
            if (("_owner" !== o[n] && "__v" !== o[n] && "__o" !== o[n] || !e.$$typeof) && !y(e[o[n]], t[o[n]])) return !1;
        return !0
    }
    return e != e && t != t
}
const h = t((function(e, t) {
    try {
        return y(e, t)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return !1;
        throw r
    }
}));
var b = Object.getOwnPropertySymbols,
    m = Object.prototype.hasOwnProperty,
    T = Object.prototype.propertyIsEnumerable;
const g = t(function() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                return t[e]
            })).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
            n[e] = e
        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
    } catch (o) {
        return !1
    }
}() ? Object.assign : function(e, t) {
    for (var r, n, o = function(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }(e), i = 1; i < arguments.length; i++) {
        for (var a in r = Object(arguments[i])) m.call(r, a) && (o[a] = r[a]);
        if (b) {
            n = b(r);
            for (var u = 0; u < n.length; u++) T.call(r, n[u]) && (o[n[u]] = r[n[u]])
        }
    }
    return o
});
var v = "bodyAttributes",
    w = "htmlAttributes",
    O = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(O).map((function(e) {
    return O[e]
}));
var A, C, S, E, j = "cssText",
    P = "href",
    k = "innerHTML",
    L = "itemprop",
    x = "rel",
    I = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    M = Object.keys(I).reduce((function(e, t) {
        return e[I[t]] = t, e
    }), {}),
    N = [O.NOSCRIPT, O.SCRIPT, O.STYLE],
    R = "data-react-helmet",
    _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    q = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    H = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    B = function(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    },
    D = function(e) {
        return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    Y = function(e) {
        var t = V(e, O.TITLE),
            r = V(e, "titleTemplate");
        if (r && t) return r.replace(/%s/g, (function() {
            return Array.isArray(t) ? t.join("") : t
        }));
        var n = V(e, "defaultTitle");
        return t || n || void 0
    },
    F = function(e) {
        return V(e, "onChangeClientState") || function() {}
    },
    U = function(e, t) {
        return t.filter((function(t) {
            return void 0 !== t[e]
        })).map((function(t) {
            return t[e]
        })).reduce((function(e, t) {
            return H({}, e, t)
        }), {})
    },
    z = function(e, t) {
        return t.filter((function(e) {
            return void 0 !== e[O.BASE]
        })).map((function(e) {
            return e[O.BASE]
        })).reverse().reduce((function(t, r) {
            if (!t.length)
                for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                    var i = n[o].toLowerCase();
                    if (-1 !== e.indexOf(i) && r[i]) return t.concat(r)
                }
            return t
        }), [])
    },
    K = function(e, t, r) {
        var n = {};
        return r.filter((function(t) {
            return !!Array.isArray(t[e]) || (void 0 !== t[e] && Q("Helmet: " + e + ' should be of type "Array". Instead found type "' + _(t[e]) + '"'), !1)
        })).map((function(t) {
            return t[e]
        })).reverse().reduce((function(e, r) {
            var o = {};
            r.filter((function(e) {
                for (var r = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                    var u = i[a],
                        c = u.toLowerCase(); - 1 === t.indexOf(c) || r === x && "canonical" === e[r].toLowerCase() || c === x && "stylesheet" === e[c].toLowerCase() || (r = c), -1 === t.indexOf(u) || u !== k && u !== j && u !== L || (r = u)
                }
                if (!r || !e[r]) return !1;
                var s = e[r].toLowerCase();
                return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][s] && (o[r][s] = !0, !0)
            })).reverse().forEach((function(t) {
                return e.push(t)
            }));
            for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                var u = i[a],
                    c = g({}, n[u], o[u]);
                n[u] = c
            }
            return e
        }), []).reverse()
    },
    V = function(e, t) {
        for (var r = e.length - 1; r >= 0; r--) {
            var n = e[r];
            if (n.hasOwnProperty(t)) return n[t]
        }
        return null
    },
    W = (A = Date.now(), function(e) {
        var t = Date.now();
        t - A > 16 ? (A = t, e(t)) : setTimeout((function() {
            W(e)
        }), 0)
    }),
    $ = function(e) {
        return clearTimeout(e)
    },
    G = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || W : global.requestAnimationFrame || W,
    J = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || $ : global.cancelAnimationFrame || $,
    Q = function(e) {
        return console && "function" == typeof console.warn && void 0
    },
    X = null,
    Z = function(e, t) {
        var r = e.baseTag,
            n = e.bodyAttributes,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            u = e.noscriptTags,
            c = e.onChangeClientState,
            s = e.scriptTags,
            f = e.styleTags,
            l = e.title,
            p = e.titleAttributes;
        re(O.BODY, n), re(O.HTML, o), te(l, p);
        var d = {
                baseTag: ne(O.BASE, r),
                linkTags: ne(O.LINK, i),
                metaTags: ne(O.META, a),
                noscriptTags: ne(O.NOSCRIPT, u),
                scriptTags: ne(O.SCRIPT, s),
                styleTags: ne(O.STYLE, f)
            },
            y = {},
            h = {};
        Object.keys(d).forEach((function(e) {
            var t = d[e],
                r = t.newTags,
                n = t.oldTags;
            r.length && (y[e] = r), n.length && (h[e] = d[e].oldTags)
        })), t && t(), c(e, y, h)
    },
    ee = function(e) {
        return Array.isArray(e) ? e.join("") : e
    },
    te = function(e, t) {
        void 0 !== e && document.title !== e && (document.title = ee(e)), re(O.TITLE, t)
    },
    re = function(e, t) {
        var r = document.getElementsByTagName(e)[0];
        if (r) {
            for (var n = r.getAttribute(R), o = n ? n.split(",") : [], i = [].concat(o), a = Object.keys(t), u = 0; u < a.length; u++) {
                var c = a[u],
                    s = t[c] || "";
                r.getAttribute(c) !== s && r.setAttribute(c, s), -1 === o.indexOf(c) && o.push(c);
                var f = i.indexOf(c); - 1 !== f && i.splice(f, 1)
            }
            for (var l = i.length - 1; l >= 0; l--) r.removeAttribute(i[l]);
            o.length === i.length ? r.removeAttribute(R) : r.getAttribute(R) !== a.join(",") && r.setAttribute(R, a.join(","))
        }
    },
    ne = function(e, t) {
        var r = document.head || document.querySelector(O.HEAD),
            n = r.querySelectorAll(e + "[" + R + "]"),
            o = Array.prototype.slice.call(n),
            i = [],
            a = void 0;
        return t && t.length && t.forEach((function(t) {
            var r = document.createElement(e);
            for (var n in t)
                if (t.hasOwnProperty(n))
                    if (n === k) r.innerHTML = t.innerHTML;
                    else if (n === j) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
            else {
                var u = void 0 === t[n] ? "" : t[n];
                r.setAttribute(n, u)
            }
            r.setAttribute(R, "true"), o.some((function(e, t) {
                return a = t, r.isEqualNode(e)
            })) ? o.splice(a, 1) : i.push(r)
        })), o.forEach((function(e) {
            return e.parentNode.removeChild(e)
        })), i.forEach((function(e) {
            return r.appendChild(e)
        })), {
            oldTags: o,
            newTags: i
        }
    },
    oe = function(e) {
        return Object.keys(e).reduce((function(t, r) {
            var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
            return t ? t + " " + n : n
        }), "")
    },
    ie = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.keys(e).reduce((function(t, r) {
            return t[I[r] || r] = e[r], t
        }), t)
    },
    ae = function(e, t, r) {
        switch (e) {
            case O.TITLE:
                return {
                    toComponent: function() {
                        return e = t.title, r = t.titleAttributes, (o = {
                            key: e
                        })[R] = !0, i = ie(r, o), [n.createElement(O.TITLE, i, e)];
                        var e, r, o, i
                    },
                    toString: function() {
                        return function(e, t, r, n) {
                            var o = oe(r),
                                i = ee(t);
                            return o ? "<" + e + " " + R + '="true" ' + o + ">" + D(i, n) + "</" + e + ">" : "<" + e + " " + R + '="true">' + D(i, n) + "</" + e + ">"
                        }(e, t.title, t.titleAttributes, r)
                    }
                };
            case v:
            case w:
                return {
                    toComponent: function() {
                        return ie(t)
                    },
                    toString: function() {
                        return oe(t)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return function(e, t) {
                            return t.map((function(t, r) {
                                var o, i = ((o = {
                                    key: r
                                })[R] = !0, o);
                                return Object.keys(t).forEach((function(e) {
                                    var r = I[e] || e;
                                    if (r === k || r === j) {
                                        var n = t.innerHTML || t.cssText;
                                        i.dangerouslySetInnerHTML = {
                                            __html: n
                                        }
                                    } else i[r] = t[e]
                                })), n.createElement(e, i)
                            }))
                        }(e, t)
                    },
                    toString: function() {
                        return function(e, t, r) {
                            return t.reduce((function(t, n) {
                                var o = Object.keys(n).filter((function(e) {
                                        return !(e === k || e === j)
                                    })).reduce((function(e, t) {
                                        var o = void 0 === n[t] ? t : t + '="' + D(n[t], r) + '"';
                                        return e ? e + " " + o : o
                                    }), ""),
                                    i = n.innerHTML || n.cssText || "",
                                    a = -1 === N.indexOf(e);
                                return t + "<" + e + " " + R + '="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                            }), "")
                        }(e, t, r)
                    }
                }
        }
    },
    ue = function(e) {
        var t = e.baseTag,
            r = e.bodyAttributes,
            n = e.encode,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            u = e.noscriptTags,
            c = e.scriptTags,
            s = e.styleTags,
            f = e.title,
            l = void 0 === f ? "" : f,
            p = e.titleAttributes;
        return {
            base: ae(O.BASE, t, n),
            bodyAttributes: ae(v, r, n),
            htmlAttributes: ae(w, o, n),
            link: ae(O.LINK, i, n),
            meta: ae(O.META, a, n),
            noscript: ae(O.NOSCRIPT, u, n),
            script: ae(O.SCRIPT, c, n),
            style: ae(O.STYLE, s, n),
            title: ae(O.TITLE, {
                title: l,
                titleAttributes: p
            }, n)
        }
    },
    ce = s((function(e) {
        return {
            baseTag: z([P, "target"], e),
            bodyAttributes: U(v, e),
            defer: V(e, "defer"),
            encode: V(e, "encodeSpecialCharacters"),
            htmlAttributes: U(w, e),
            linkTags: K(O.LINK, [x, P], e),
            metaTags: K(O.META, ["name", "charset", "http-equiv", "property", L], e),
            noscriptTags: K(O.NOSCRIPT, [k], e),
            onChangeClientState: F(e),
            scriptTags: K(O.SCRIPT, ["src", k], e),
            styleTags: K(O.STYLE, [j], e),
            title: Y(e),
            titleAttributes: U("titleAttributes", e)
        }
    }), (function(e) {
        X && J(X), e.defer ? X = G((function() {
            Z(e, (function() {
                X = null
            }))
        })) : (Z(e), X = null)
    }), ue)((function() {
        return null
    })),
    se = (C = ce, E = S = function(e) {
        function t() {
            return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.apply(this, arguments))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), t.prototype.shouldComponentUpdate = function(e) {
            return !h(this.props, e)
        }, t.prototype.mapNestedChildrenToProps = function(e, t) {
            if (!t) return null;
            switch (e.type) {
                case O.SCRIPT:
                case O.NOSCRIPT:
                    return {
                        innerHTML: t
                    };
                case O.STYLE:
                    return {
                        cssText: t
                    }
            }
            throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
        }, t.prototype.flattenArrayTypeChildren = function(e) {
            var t, r = e.child,
                n = e.arrayTypeChildren,
                o = e.newChildProps,
                i = e.nestedChildren;
            return H({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [H({}, o, this.mapNestedChildrenToProps(r, i))]), t))
        }, t.prototype.mapObjectTypeChildren = function(e) {
            var t, r, n = e.child,
                o = e.newProps,
                i = e.newChildProps,
                a = e.nestedChildren;
            switch (n.type) {
                case O.TITLE:
                    return H({}, o, ((t = {})[n.type] = a, t.titleAttributes = H({}, i), t));
                case O.BODY:
                    return H({}, o, {
                        bodyAttributes: H({}, i)
                    });
                case O.HTML:
                    return H({}, o, {
                        htmlAttributes: H({}, i)
                    })
            }
            return H({}, o, ((r = {})[n.type] = H({}, i), r))
        }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
            var r = H({}, t);
            return Object.keys(e).forEach((function(t) {
                var n;
                r = H({}, r, ((n = {})[t] = e[t], n))
            })), r
        }, t.prototype.warnOnInvalidChildren = function(e, t) {
            return !0
        }, t.prototype.mapChildrenToProps = function(e, t) {
            var r = this,
                o = {};
            return n.Children.forEach(e, (function(e) {
                if (e && e.props) {
                    var n = e.props,
                        i = n.children,
                        a = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return Object.keys(e).reduce((function(t, r) {
                                return t[M[r] || r] = e[r], t
                            }), t)
                        }(B(n, ["children"]));
                    switch (r.warnOnInvalidChildren(e, i), e.type) {
                        case O.LINK:
                        case O.META:
                        case O.NOSCRIPT:
                        case O.SCRIPT:
                        case O.STYLE:
                            o = r.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: o,
                                newChildProps: a,
                                nestedChildren: i
                            });
                            break;
                        default:
                            t = r.mapObjectTypeChildren({
                                child: e,
                                newProps: t,
                                newChildProps: a,
                                nestedChildren: i
                            })
                    }
                }
            })), t = this.mapArrayTypeChildrenToProps(o, t)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.children,
                r = B(e, ["children"]),
                o = H({}, r);
            return t && (o = this.mapChildrenToProps(t, o)), n.createElement(C, o)
        }, q(t, null, [{
            key: "canUseDOM",
            set: function(e) {
                C.canUseDOM = e
            }
        }]), t
    }(n.Component), S.propTypes = {
        base: e.object,
        bodyAttributes: e.object,
        children: e.oneOfType([e.arrayOf(e.node), e.node]),
        defaultTitle: e.string,
        defer: e.bool,
        encodeSpecialCharacters: e.bool,
        htmlAttributes: e.object,
        link: e.arrayOf(e.object),
        meta: e.arrayOf(e.object),
        noscript: e.arrayOf(e.object),
        onChangeClientState: e.func,
        script: e.arrayOf(e.object),
        style: e.arrayOf(e.object),
        title: e.string,
        titleAttributes: e.object,
        titleTemplate: e.string
    }, S.defaultProps = {
        defer: !0,
        encodeSpecialCharacters: !0
    }, S.peek = C.peek, S.rewind = function() {
        var e = C.rewind();
        return e || (e = ue({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        })), e
    }, E);
se.renderStatic = se.rewind;
export {
    se as H
};