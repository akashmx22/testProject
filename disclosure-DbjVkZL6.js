import {
    R as e,
    r as t
} from "./index-klX-IjEm.js";
import {
    O as n,
    U as l,
    y as r,
    T as o,
    o as s,
    u as a,
    C as u,
    I as i
} from "./render-UAkLgEPn.js";
import {
    I as c,
    o as d,
    r as p
} from "./keyboard-DOoxlA9V.js";
import {
    T as f
} from "./use-resolve-button-type-BOJkepan.js";
import {
    s as m,
    d as P,
    u as y
} from "./open-closed-DP-48t2G.js";
import {
    o as I
} from "./owner-Di38_1KB.js";
var S;
let g = null != (S = e.startTransition) ? S : function(e) {
    e()
};
var k, D, b = ((D = b || {})[D.Open = 0] = "Open", D[D.Closed = 1] = "Closed", D),
    v = ((k = v || {})[k.ToggleDisclosure = 0] = "ToggleDisclosure", k[k.CloseDisclosure = 1] = "CloseDisclosure", k[k.SetButtonId = 2] = "SetButtonId", k[k.SetPanelId = 3] = "SetPanelId", k[k.LinkPanel = 4] = "LinkPanel", k[k.UnlinkPanel = 5] = "UnlinkPanel", k);
let E = {
        0: e => ({ ...e,
            disclosureState: a(e.disclosureState, {
                0: 1,
                1: 0
            })
        }),
        1: e => 1 === e.disclosureState ? e : { ...e,
            disclosureState: 1
        },
        4: e => !0 === e.linkedPanel ? e : { ...e,
            linkedPanel: !0
        },
        5: e => !1 === e.linkedPanel ? e : { ...e,
            linkedPanel: !1
        },
        2: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
            buttonId: t.buttonId
        },
        3: (e, t) => e.panelId === t.panelId ? e : { ...e,
            panelId: t.panelId
        }
    },
    C = t.createContext(null);

function R(e) {
    let n = t.useContext(C);
    if (null === n) {
        let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, R), t
    }
    return n
}
C.displayName = "DisclosureContext";
let T = t.createContext(null);

function x(e) {
    let n = t.useContext(T);
    if (null === n) {
        let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, x), t
    }
    return n
}
T.displayName = "DisclosureAPIContext";
let h = t.createContext(null);

function w(e, t) {
    return a(t.type, E, e, t)
}
h.displayName = "DisclosurePanelContext";
let j = t.Fragment,
    B = n.RenderStrategy | n.Static,
    O = l((function(n, l) {
        let {
            defaultOpen: i = !1,
            ...c
        } = n, d = t.useRef(null), p = r(l, o((e => {
            d.current = e
        }), void 0 === n.as || n.as === t.Fragment)), f = t.useRef(null), y = t.useRef(null), S = t.useReducer(w, {
            disclosureState: i ? 0 : 1,
            linkedPanel: !1,
            buttonRef: y,
            panelRef: f,
            buttonId: null,
            panelId: null
        }), [{
            disclosureState: g,
            buttonId: k
        }, D] = S, b = s((e => {
            D({
                type: 1
            });
            let t = I(d);
            if (!t || !k) return;
            let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(k) : t.getElementById(k);
            null == n || n.focus()
        })), v = t.useMemo((() => ({
            close: b
        })), [b]), E = t.useMemo((() => ({
            open: 0 === g,
            close: b
        })), [g, b]), R = {
            ref: p
        };
        return e.createElement(C.Provider, {
            value: S
        }, e.createElement(T.Provider, {
            value: v
        }, e.createElement(m, {
            value: a(g, {
                0: P.Open,
                1: P.Closed
            })
        }, u({
            ourProps: R,
            theirProps: c,
            slot: E,
            defaultTag: j,
            name: "Disclosure"
        }))))
    })),
    M = l((function(e, n) {
        let l = c(),
            {
                id: o = `headlessui-disclosure-button-${l}`,
                ...a
            } = e,
            [m, P] = R("Disclosure.Button"),
            y = t.useContext(h),
            I = null !== y && y === m.panelId,
            S = t.useRef(null),
            g = r(S, n, I ? null : m.buttonRef),
            k = i();
        t.useEffect((() => {
            if (!I) return P({
                type: 2,
                buttonId: o
            }), () => {
                P({
                    type: 2,
                    buttonId: null
                })
            }
        }), [o, P, I]);
        let D = s((e => {
                var t;
                if (I) {
                    if (1 === m.disclosureState) return;
                    switch (e.key) {
                        case d.Space:
                        case d.Enter:
                            e.preventDefault(), e.stopPropagation(), P({
                                type: 0
                            }), null == (t = m.buttonRef.current) || t.focus()
                    }
                } else switch (e.key) {
                    case d.Space:
                    case d.Enter:
                        e.preventDefault(), e.stopPropagation(), P({
                            type: 0
                        })
                }
            })),
            b = s((e => {
                e.key === d.Space && e.preventDefault()
            })),
            v = s((t => {
                var n;
                p(t.currentTarget) || e.disabled || (I ? (P({
                    type: 0
                }), null == (n = m.buttonRef.current) || n.focus()) : P({
                    type: 0
                }))
            })),
            E = t.useMemo((() => ({
                open: 0 === m.disclosureState
            })), [m]),
            C = f(e, S),
            T = I ? {
                ref: g,
                type: C,
                onKeyDown: D,
                onClick: v
            } : {
                ref: g,
                id: o,
                type: C,
                "aria-expanded": 0 === m.disclosureState,
                "aria-controls": m.linkedPanel ? m.panelId : void 0,
                onKeyDown: D,
                onKeyUp: b,
                onClick: v
            };
        return u({
            mergeRefs: k,
            ourProps: T,
            theirProps: a,
            slot: E,
            defaultTag: "button",
            name: "Disclosure.Button"
        })
    })),
    L = l((function(n, l) {
        let o = c(),
            {
                id: s = `headlessui-disclosure-panel-${o}`,
                ...a
            } = n,
            [d, p] = R("Disclosure.Panel"),
            {
                close: f
            } = x("Disclosure.Panel"),
            m = i(),
            I = r(l, d.panelRef, (e => {
                g((() => p({
                    type: e ? 4 : 5
                })))
            }));
        t.useEffect((() => (p({
            type: 3,
            panelId: s
        }), () => {
            p({
                type: 3,
                panelId: null
            })
        })), [s, p]);
        let S = y(),
            k = null !== S ? (S & P.Open) === P.Open : 0 === d.disclosureState,
            D = t.useMemo((() => ({
                open: 0 === d.disclosureState,
                close: f
            })), [d, f]),
            b = {
                ref: I,
                id: s
            };
        return e.createElement(h.Provider, {
            value: d.panelId
        }, u({
            mergeRefs: m,
            ourProps: b,
            theirProps: a,
            slot: D,
            defaultTag: "div",
            features: B,
            visible: k,
            name: "Disclosure.Panel"
        }))
    })),
    $ = Object.assign(O, {
        Button: M,
        Panel: L
    });
export {
    $ as A
};