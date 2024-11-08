import {
    r as e
} from "./index-klX-IjEm.js";

function r(e) {
    return [e.screenX, e.screenY]
}

function t() {
    let t = e.useRef([-1, -1]);
    return {
        wasMoved(e) {
            let n = r(e);
            return (t.current[0] !== n[0] || t.current[1] !== n[1]) && (t.current = n, !0)
        },
        update(e) {
            t.current = r(e)
        }
    }
}
var n, s = ((n = s || {})[n.First = 0] = "First", n[n.Previous = 1] = "Previous", n[n.Next = 2] = "Next", n[n.Last = 3] = "Last", n[n.Specific = 4] = "Specific", n[n.Nothing = 5] = "Nothing", n);

function u(e, r) {
    let t = r.resolveItems();
    if (t.length <= 0) return null;
    let n = r.resolveActiveIndex(),
        s = null != n ? n : -1;
    switch (e.focus) {
        case 0:
            for (let e = 0; e < t.length; ++e)
                if (!r.resolveDisabled(t[e], e, t)) return e;
            return n;
        case 1:
            for (let e = s - 1; e >= 0; --e)
                if (!r.resolveDisabled(t[e], e, t)) return e;
            return n;
        case 2:
            for (let e = s + 1; e < t.length; ++e)
                if (!r.resolveDisabled(t[e], e, t)) return e;
            return n;
        case 3:
            for (let e = t.length - 1; e >= 0; --e)
                if (!r.resolveDisabled(t[e], e, t)) return e;
            return n;
        case 4:
            for (let n = 0; n < t.length; ++n)
                if (r.resolveId(t[n], n, t) === e.id) return n;
            return n;
        case 5:
            return null;
        default:
            ! function(e) {
                throw new Error("Unexpected object: " + e)
            }(e)
    }
}
export {
    s as c, u as f, t as u
};