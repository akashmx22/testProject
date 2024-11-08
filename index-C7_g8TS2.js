import {
    g as r
} from "./index-klX-IjEm.js";
var t, n = {
    exports: {}
};
t = n,
    function() {
        var r = {}.hasOwnProperty;

        function n() {
            for (var r = "", t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                n && (r = e(r, o(n)))
            }
            return r
        }

        function o(t) {
            if ("string" == typeof t || "number" == typeof t) return t;
            if ("object" != typeof t) return "";
            if (Array.isArray(t)) return n.apply(null, t);
            if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
            var o = "";
            for (var i in t) r.call(t, i) && t[i] && (o = e(o, i));
            return o
        }

        function e(r, t) {
            return t ? r ? r + " " + t : r + t : r
        }
        t.exports ? (n.default = n, t.exports = n) : window.classNames = n
    }();
const o = r(n.exports);
export {
    o as c
};