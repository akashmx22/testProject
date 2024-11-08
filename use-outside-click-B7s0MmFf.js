import {
    r as e
} from "./index-klX-IjEm.js";
import {
    o as t
} from "./use-disposables-CvOh9Ink.js";
import {
    u as n,
    a as r
} from "./render-UAkLgEPn.js";
import {
    o
} from "./owner-Di38_1KB.js";
let u = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
var i, l, s, a = ((s = a || {})[s.First = 1] = "First", s[s.Previous = 2] = "Previous", s[s.Next = 4] = "Next", s[s.Last = 8] = "Last", s[s.WrapAround = 16] = "WrapAround", s[s.NoScroll = 32] = "NoScroll", s),
    c = ((l = c || {})[l.Error = 0] = "Error", l[l.Overflow = 1] = "Overflow", l[l.Success = 2] = "Success", l[l.Underflow = 3] = "Underflow", l),
    d = ((i = d || {})[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i);

function f(e = document.body) {
    return null == e ? [] : Array.from(e.querySelectorAll(u)).sort(((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))))
}
var m = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(m || {});

function v(e, t = 0) {
    var r;
    return e !== (null == (r = o(e)) ? void 0 : r.body) && n(t, {
        0: () => e.matches(u),
        1() {
            let t = e;
            for (; null !== t;) {
                if (t.matches(u)) return !0;
                t = t.parentElement
            }
            return !1
        }
    })
}

function E(e) {
    let n = o(e);
    t().nextFrame((() => {
        n && !v(n.activeElement, 0) && p(e)
    }))
}
var w = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(w || {});

function p(e) {
    null == e || e.focus({
        preventScroll: !0
    })
}
"undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", (e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}), !0), document.addEventListener("click", (e => {
    1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
}), !0));
let h = ["textarea", "input"].join(",");

function b(e, t = e => e) {
    return e.slice().sort(((e, n) => {
        let r = t(e),
            o = t(n);
        if (null === r || null === o) return 0;
        let u = r.compareDocumentPosition(o);
        return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    }))
}

function g(e, t) {
    return x(f(), t, {
        relativeTo: e
    })
}

function x(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: o = []
} = {}) {
    let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        i = Array.isArray(e) ? n ? b(e) : e : f(e);
    o.length > 0 && i.length > 1 && (i = i.filter((e => !o.includes(e)))), r = null != r ? r : u.activeElement;
    let l, s = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        a = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, i.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, i.indexOf(r)) + 1;
            if (8 & t) return i.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        c = 32 & t ? {
            preventScroll: !0
        } : {},
        d = 0,
        m = i.length;
    do {
        if (d >= m || d + m <= 0) return 0;
        let e = a + d;
        if (16 & t) e = (e + m) % m;
        else {
            if (e < 0) return 3;
            if (e >= m) return 1
        }
        l = i[e], null == l || l.focus(c), d += s
    } while (l !== u.activeElement);
    return 6 & t && function(e) {
        var t, n;
        return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, h)) && n
    }(l) && l.select(), 2
}

function F() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function N() {
    return F() || /Android/gi.test(window.navigator.userAgent)
}

function y(t, n, o) {
    let u = r(n);
    e.useEffect((() => {
        function e(e) {
            u.current(e)
        }
        return document.addEventListener(t, e, o), () => document.removeEventListener(t, e, o)
    }), [t, o])
}

function L(t, n, o) {
    let u = r(n);
    e.useEffect((() => {
        function e(e) {
            u.current(e)
        }
        return window.addEventListener(t, e, o), () => window.removeEventListener(t, e, o)
    }), [t, o])
}

function A(t, n, r = !0) {
    let o = e.useRef(!1);

    function u(e, r) {
        if (!o.current || e.defaultPrevented) return;
        let u = r(e);
        if (null === u || !u.getRootNode().contains(u) || !u.isConnected) return;
        let i = function e(t) {
            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
        }(t);
        for (let t of i) {
            if (null === t) continue;
            let n = t instanceof HTMLElement ? t : t.current;
            if (null != n && n.contains(u) || e.composed && e.composedPath().includes(n)) return
        }
        return !v(u, m.Loose) && -1 !== u.tabIndex && e.preventDefault(), n(e, u)
    }
    e.useEffect((() => {
        requestAnimationFrame((() => {
            o.current = r
        }))
    }), [r]);
    let i = e.useRef(null);
    y("pointerdown", (e => {
        var t, n;
        o.current && (i.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
    }), !0), y("mousedown", (e => {
        var t, n;
        o.current && (i.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
    }), !0), y("click", (e => {
        N() || i.current && (u(e, (() => i.current)), i.current = null)
    }), !0), y("touchend", (e => u(e, (() => e.target instanceof HTMLElement ? e.target : null))), !0), L("blur", (e => u(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
}
export {
    E as D, b as I, a as M, c as N, x as O, m as T, g as _, p as a, f, v as h, N as n, L as s, F as t, A as y
};