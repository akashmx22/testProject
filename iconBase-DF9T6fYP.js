import {
    R as t
} from "./index-klX-IjEm.js";
var e = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    r = t.createContext && t.createContext(e),
    n = function() {
        return n = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }, n.apply(this, arguments)
    },
    o = function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
        }
        return r
    };

function l(e) {
    return e && e.map((function(e, r) {
        return t.createElement(e.tag, n({
            key: r
        }, e.attr), l(e.child))
    }))
}

function a(e) {
    return function(r) {
        return t.createElement(c, n({
            attr: n({}, e.attr)
        }, r), l(e.child))
    }
}

function c(l) {
    var a = function(e) {
        var r, a = l.attr,
            c = l.size,
            i = l.title,
            s = o(l, ["attr", "size", "title"]),
            u = c || e.size || "1em";
        return e.className && (r = e.className), l.className && (r = (r ? r + " " : "") + l.className), t.createElement("svg", n({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, e.attr, a, s, {
            className: r,
            style: n(n({
                color: l.color || e.color
            }, e.style), l.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && t.createElement("title", null, i), l.children)
    };
    return void 0 !== r ? t.createElement(r.Consumer, null, (function(t) {
        return a(t)
    })) : a(e)
}
export {
    a as G
};