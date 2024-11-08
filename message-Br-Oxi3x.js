import {
    _ as e,
    s as a,
    u as r
} from "./index-DVP_cETW.js";
import {
    r as s
} from "./index-klX-IjEm.js";

function t(e) {
    var a = r(),
        t = a.formatMessage,
        n = a.textComponent,
        i = void 0 === n ? s.Fragment : n,
        o = e.id,
        m = e.description,
        d = e.defaultMessage,
        l = e.values,
        u = e.children,
        g = e.tagName,
        v = void 0 === g ? i : g,
        f = t({
            id: o,
            description: m,
            defaultMessage: d
        }, l, {
            ignoreTag: e.ignoreTag
        });
    return "function" == typeof u ? u(Array.isArray(f) ? f : [f]) : v ? s.createElement(v, null, s.Children.toArray(f)) : s.createElement(s.Fragment, null, f)
}
t.displayName = "FormattedMessage";
var n = s.memo(t, (function(r, s) {
    var t = r.values,
        n = e(r, ["values"]),
        i = s.values,
        o = e(s, ["values"]);
    return a(i, t) && a(n, o)
}));
n.displayName = "MemoizedFormattedMessage";
export {
    n as M
};