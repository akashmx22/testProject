import {
    r as e,
    R as t
} from "./index-klX-IjEm.js";
import {
    T as r,
    p as l
} from "./form-D-twWBhJ.js";
import {
    p as n
} from "./use-disposables-CvOh9Ink.js";
import {
    U as o,
    y as a,
    l as i,
    C as s,
    o as u,
    x as c
} from "./render-UAkLgEPn.js";
import {
    I as d,
    r as p,
    o as m
} from "./keyboard-DOoxlA9V.js";
import {
    T as f
} from "./use-resolve-button-type-BOJkepan.js";
import {
    u as b,
    s as h
} from "./hidden-AZzL84Q1.js";
import {
    G as v,
    w as k
} from "./description-CB07AjJP.js";
let g = e.createContext(null);

function y() {
    let t = e.useContext(g);
    if (null === t) {
        let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(e, y), e
    }
    return t
}
let C = o((function(e, t) {
        let r = d(),
            {
                id: l = `headlessui-label-${r}`,
                passive: n = !1,
                ...o
            } = e,
            u = y(),
            c = a(t);
        i((() => u.register(l)), [l, u.register]);
        let p = {
            ref: c,
            ...u.props,
            id: l
        };
        return n && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in o && delete o.onClick), s({
            ourProps: p,
            theirProps: o,
            slot: u.slot || {},
            defaultTag: "label",
            name: u.name || "Label"
        })
    })),
    E = Object.assign(C, {}),
    w = e.createContext(null);
w.displayName = "GroupContext";
let x = e.Fragment,
    S = o((function(o, i) {
        var v;
        let k = d(),
            {
                id: g = `headlessui-switch-${k}`,
                checked: y,
                defaultChecked: C = !1,
                onChange: E,
                disabled: x = !1,
                name: S,
                value: j,
                form: P,
                ...T
            } = o,
            D = e.useContext(w),
            L = e.useRef(null),
            F = a(L, i, null === D ? null : D.setSwitch),
            [M, O] = r(y, E, C),
            G = u((() => null == O ? void 0 : O(!M))),
            I = u((e => {
                if (p(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), G()
            })),
            K = u((e => {
                e.key === m.Space ? (e.preventDefault(), G()) : e.key === m.Enter && l(e.currentTarget)
            })),
            N = u((e => e.preventDefault())),
            R = e.useMemo((() => ({
                checked: M
            })), [M]),
            U = {
                id: g,
                ref: F,
                role: "switch",
                type: f(o, L),
                tabIndex: -1 === o.tabIndex ? 0 : null != (v = o.tabIndex) ? v : 0,
                "aria-checked": M,
                "aria-labelledby": null == D ? void 0 : D.labelledby,
                "aria-describedby": null == D ? void 0 : D.describedby,
                disabled: x,
                onClick: I,
                onKeyUp: K,
                onKeyPress: N
            },
            $ = n();
        return e.useEffect((() => {
            var e;
            let t = null == (e = L.current) ? void 0 : e.closest("form");
            t && void 0 !== C && $.addEventListener(t, "reset", (() => {
                O(C)
            }))
        }), [L, O]), t.createElement(t.Fragment, null, null != S && M && t.createElement(b, {
            features: h.Hidden,
            ...c({
                as: "input",
                type: "checkbox",
                hidden: !0,
                readOnly: !0,
                disabled: x,
                form: P,
                checked: M,
                name: S,
                value: j
            })
        }), s({
            ourProps: U,
            theirProps: T,
            slot: R,
            defaultTag: "button",
            name: "Switch"
        }))
    })),
    j = Object.assign(S, {
        Group: function(r) {
            var l;
            let [n, o] = e.useState(null), [a, i] = function() {
                let [r, l] = e.useState([]);
                return [r.length > 0 ? r.join(" ") : void 0, e.useMemo((() => function(r) {
                    let n = u((e => (l((t => [...t, e])), () => l((t => {
                            let r = t.slice(),
                                l = r.indexOf(e);
                            return -1 !== l && r.splice(l, 1), r
                        }))))),
                        o = e.useMemo((() => ({
                            register: n,
                            slot: r.slot,
                            name: r.name,
                            props: r.props
                        })), [n, r.slot, r.name, r.props]);
                    return t.createElement(g.Provider, {
                        value: o
                    }, r.children)
                }), [l])]
            }(), [c, d] = k(), p = e.useMemo((() => ({
                switch: n,
                setSwitch: o,
                labelledby: a,
                describedby: c
            })), [n, o, a, c]), m = r;
            return t.createElement(d, {
                name: "Switch.Description"
            }, t.createElement(i, {
                name: "Switch.Label",
                props: {
                    htmlFor: null == (l = p.switch) ? void 0 : l.id,
                    onClick(e) {
                        n && ("LABEL" === e.currentTarget.tagName && e.preventDefault(), n.click(), n.focus({
                            preventScroll: !0
                        }))
                    }
                }
            }, t.createElement(w.Provider, {
                value: p
            }, s({
                ourProps: {},
                theirProps: m,
                defaultTag: x,
                name: "Switch.Group"
            }))))
        },
        Label: E,
        Description: v
    });
export {
    j as _
};