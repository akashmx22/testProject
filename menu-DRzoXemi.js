import {
    r as e,
    R as t
} from "./index-klX-IjEm.js";
import {
    p as r,
    o as n
} from "./use-disposables-CvOh9Ink.js";
import {
    O as a,
    U as o,
    y as u,
    o as i,
    u as s,
    C as l,
    l as c
} from "./render-UAkLgEPn.js";
import {
    I as d,
    o as m,
    r as p
} from "./keyboard-DOoxlA9V.js";
import {
    y as f,
    h as v,
    T as I,
    _ as y,
    M as g,
    D as x,
    I as R
} from "./use-outside-click-B7s0MmFf.js";
import {
    n as b
} from "./use-owner-CYU9lXCh.js";
import {
    T as S
} from "./use-resolve-button-type-BOJkepan.js";
import {
    s as h
} from "./use-text-value-BNdgXLM8.js";
import {
    u as P,
    c as M,
    f as T
} from "./calculate-active-index-C0Wh14hk.js";
import {
    F as D
} from "./use-tree-walker-D0Lygo_6.js";
import {
    s as k,
    d as w,
    u as E
} from "./open-closed-DP-48t2G.js";
var C, F, _ = ((F = _ || {})[F.Open = 0] = "Open", F[F.Closed = 1] = "Closed", F),
    j = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(j || {}),
    O = ((C = O || {})[C.OpenMenu = 0] = "OpenMenu", C[C.CloseMenu = 1] = "CloseMenu", C[C.GoToItem = 2] = "GoToItem", C[C.Search = 3] = "Search", C[C.ClearSearch = 4] = "ClearSearch", C[C.RegisterItem = 5] = "RegisterItem", C[C.UnregisterItem = 6] = "UnregisterItem", C);

function A(e, t = e => e) {
    let r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
        n = R(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
        a = r ? n.indexOf(r) : null;
    return -1 === a && (a = null), {
        items: n,
        activeItemIndex: a
    }
}
let L = {
        1: e => 1 === e.menuState ? e : { ...e,
            activeItemIndex: null,
            menuState: 1
        },
        0: e => 0 === e.menuState ? e : { ...e,
            __demoMode: !1,
            menuState: 0
        },
        2: (e, t) => {
            var r;
            let n = A(e),
                a = T(t, {
                    resolveItems: () => n.items,
                    resolveActiveIndex: () => n.activeItemIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                });
            return { ...e,
                ...n,
                searchQuery: "",
                activeItemIndex: a,
                activationTrigger: null != (r = t.trigger) ? r : 1
            }
        },
        3: (e, t) => {
            let r = "" !== e.searchQuery ? 0 : 1,
                n = e.searchQuery + t.value.toLowerCase(),
                a = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find((e => {
                    var t;
                    return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n)) && !e.dataRef.current.disabled
                })),
                o = a ? e.items.indexOf(a) : -1;
            return -1 === o || o === e.activeItemIndex ? { ...e,
                searchQuery: n
            } : { ...e,
                searchQuery: n,
                activeItemIndex: o,
                activationTrigger: 1
            }
        },
        4: e => "" === e.searchQuery ? e : { ...e,
            searchQuery: "",
            searchActiveItemIndex: null
        },
        5: (e, t) => {
            let r = A(e, (e => [...e, {
                id: t.id,
                dataRef: t.dataRef
            }]));
            return { ...e,
                ...r
            }
        },
        6: (e, t) => {
            let r = A(e, (e => {
                let r = e.findIndex((e => e.id === t.id));
                return -1 !== r && e.splice(r, 1), e
            }));
            return { ...e,
                ...r,
                activationTrigger: 1
            }
        }
    },
    Q = e.createContext(null);

function U(t) {
    let r = e.useContext(Q);
    if (null === r) {
        let e = new Error(`<${t} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, U), e
    }
    return r
}

function N(e, t) {
    return s(t.type, L, e, t)
}
Q.displayName = "MenuContext";
let K = e.Fragment,
    $ = a.RenderStrategy | a.Static,
    V = e.Fragment,
    q = o((function(r, n) {
        let {
            __demoMode: a = !1,
            ...o
        } = r, c = e.useReducer(N, {
            __demoMode: a,
            menuState: a ? 0 : 1,
            buttonRef: e.createRef(),
            itemsRef: e.createRef(),
            items: [],
            searchQuery: "",
            activeItemIndex: null,
            activationTrigger: 1
        }), [{
            menuState: d,
            itemsRef: m,
            buttonRef: p
        }, y] = c, g = u(n);
        f([p, m], ((e, t) => {
            var r;
            y({
                type: 1
            }), v(t, I.Loose) || (e.preventDefault(), null == (r = p.current) || r.focus())
        }), 0 === d);
        let x = i((() => {
                y({
                    type: 1
                })
            })),
            R = e.useMemo((() => ({
                open: 0 === d,
                close: x
            })), [d, x]),
            b = {
                ref: g
            };
        return t.createElement(Q.Provider, {
            value: c
        }, t.createElement(k, {
            value: s(d, {
                0: w.Open,
                1: w.Closed
            })
        }, l({
            ourProps: b,
            theirProps: o,
            slot: R,
            defaultTag: K,
            name: "Menu"
        })))
    })),
    B = o((function(t, n) {
        var a;
        let o = d(),
            {
                id: s = `headlessui-menu-button-${o}`,
                ...c
            } = t,
            [f, v] = U("Menu.Button"),
            I = u(f.buttonRef, n),
            y = r(),
            g = i((e => {
                switch (e.key) {
                    case m.Space:
                    case m.Enter:
                    case m.ArrowDown:
                        e.preventDefault(), e.stopPropagation(), v({
                            type: 0
                        }), y.nextFrame((() => v({
                            type: 2,
                            focus: M.First
                        })));
                        break;
                    case m.ArrowUp:
                        e.preventDefault(), e.stopPropagation(), v({
                            type: 0
                        }), y.nextFrame((() => v({
                            type: 2,
                            focus: M.Last
                        })))
                }
            })),
            x = i((e => {
                e.key === m.Space && e.preventDefault()
            })),
            R = i((e => {
                if (p(e.currentTarget)) return e.preventDefault();
                t.disabled || (0 === f.menuState ? (v({
                    type: 1
                }), y.nextFrame((() => {
                    var e;
                    return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }))) : (e.preventDefault(), v({
                    type: 0
                })))
            })),
            b = e.useMemo((() => ({
                open: 0 === f.menuState
            })), [f]),
            h = {
                ref: I,
                id: s,
                type: S(t, f.buttonRef),
                "aria-haspopup": "menu",
                "aria-controls": null == (a = f.itemsRef.current) ? void 0 : a.id,
                "aria-expanded": 0 === f.menuState,
                onKeyDown: g,
                onKeyUp: x,
                onClick: R
            };
        return l({
            ourProps: h,
            theirProps: c,
            slot: b,
            defaultTag: "button",
            name: "Menu.Button"
        })
    })),
    G = o((function(t, a) {
        var o, s;
        let c = d(),
            {
                id: p = `headlessui-menu-items-${c}`,
                ...f
            } = t,
            [v, I] = U("Menu.Items"),
            R = u(v.itemsRef, a),
            S = b(v.itemsRef),
            h = r(),
            P = E(),
            T = null !== P ? (P & w.Open) === w.Open : 0 === v.menuState;
        e.useEffect((() => {
            let e = v.itemsRef.current;
            e && 0 === v.menuState && e !== (null == S ? void 0 : S.activeElement) && e.focus({
                preventScroll: !0
            })
        }), [v.menuState, v.itemsRef, S]), D({
            container: v.itemsRef.current,
            enabled: 0 === v.menuState,
            accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
            walk(e) {
                e.setAttribute("role", "none")
            }
        });
        let k = i((e => {
                var t, r;
                switch (h.dispose(), e.key) {
                    case m.Space:
                        if ("" !== v.searchQuery) return e.preventDefault(), e.stopPropagation(), I({
                            type: 3,
                            value: e.key
                        });
                    case m.Enter:
                        if (e.preventDefault(), e.stopPropagation(), I({
                                type: 1
                            }), null !== v.activeItemIndex) {
                            let {
                                dataRef: e
                            } = v.items[v.activeItemIndex];
                            null == (r = null == (t = e.current) ? void 0 : t.domRef.current) || r.click()
                        }
                        x(v.buttonRef.current);
                        break;
                    case m.ArrowDown:
                        return e.preventDefault(), e.stopPropagation(), I({
                            type: 2,
                            focus: M.Next
                        });
                    case m.ArrowUp:
                        return e.preventDefault(), e.stopPropagation(), I({
                            type: 2,
                            focus: M.Previous
                        });
                    case m.Home:
                    case m.PageUp:
                        return e.preventDefault(), e.stopPropagation(), I({
                            type: 2,
                            focus: M.First
                        });
                    case m.End:
                    case m.PageDown:
                        return e.preventDefault(), e.stopPropagation(), I({
                            type: 2,
                            focus: M.Last
                        });
                    case m.Escape:
                        e.preventDefault(), e.stopPropagation(), I({
                            type: 1
                        }), n().nextFrame((() => {
                            var e;
                            return null == (e = v.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }));
                        break;
                    case m.Tab:
                        e.preventDefault(), e.stopPropagation(), I({
                            type: 1
                        }), n().nextFrame((() => {
                            y(v.buttonRef.current, e.shiftKey ? g.Previous : g.Next)
                        }));
                        break;
                    default:
                        1 === e.key.length && (I({
                            type: 3,
                            value: e.key
                        }), h.setTimeout((() => I({
                            type: 4
                        })), 350))
                }
            })),
            C = i((e => {
                e.key === m.Space && e.preventDefault()
            })),
            F = e.useMemo((() => ({
                open: 0 === v.menuState
            })), [v]),
            _ = {
                "aria-activedescendant": null === v.activeItemIndex || null == (o = v.items[v.activeItemIndex]) ? void 0 : o.id,
                "aria-labelledby": null == (s = v.buttonRef.current) ? void 0 : s.id,
                id: p,
                onKeyDown: k,
                onKeyUp: C,
                role: "menu",
                tabIndex: 0,
                ref: R
            };
        return l({
            ourProps: _,
            theirProps: f,
            slot: F,
            defaultTag: "div",
            features: $,
            visible: T,
            name: "Menu.Items"
        })
    })),
    W = o((function(t, r) {
        let a = d(),
            {
                id: o = `headlessui-menu-item-${a}`,
                disabled: s = !1,
                ...m
            } = t,
            [p, f] = U("Menu.Item"),
            v = null !== p.activeItemIndex && p.items[p.activeItemIndex].id === o,
            I = e.useRef(null),
            y = u(r, I);
        c((() => {
            if (p.__demoMode || 0 !== p.menuState || !v || 0 === p.activationTrigger) return;
            let e = n();
            return e.requestAnimationFrame((() => {
                var e, t;
                null == (t = null == (e = I.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                    block: "nearest"
                })
            })), e.dispose
        }), [p.__demoMode, I, v, p.menuState, p.activationTrigger, p.activeItemIndex]);
        let g = h(I),
            R = e.useRef({
                disabled: s,
                domRef: I,
                get textValue() {
                    return g()
                }
            });
        c((() => {
            R.current.disabled = s
        }), [R, s]), c((() => (f({
            type: 5,
            id: o,
            dataRef: R
        }), () => f({
            type: 6,
            id: o
        }))), [R, o]);
        let b = i((() => {
                f({
                    type: 1
                })
            })),
            S = i((e => {
                if (s) return e.preventDefault();
                f({
                    type: 1
                }), x(p.buttonRef.current)
            })),
            T = i((() => {
                if (s) return f({
                    type: 2,
                    focus: M.Nothing
                });
                f({
                    type: 2,
                    focus: M.Specific,
                    id: o
                })
            })),
            D = P(),
            k = i((e => D.update(e))),
            w = i((e => {
                D.wasMoved(e) && (s || v || f({
                    type: 2,
                    focus: M.Specific,
                    id: o,
                    trigger: 0
                }))
            })),
            E = i((e => {
                D.wasMoved(e) && (s || v && f({
                    type: 2,
                    focus: M.Nothing
                }))
            })),
            C = e.useMemo((() => ({
                active: v,
                disabled: s,
                close: b
            })), [v, s, b]);
        return l({
            ourProps: {
                id: o,
                ref: y,
                role: "menuitem",
                tabIndex: !0 === s ? void 0 : -1,
                "aria-disabled": !0 === s || void 0,
                disabled: void 0,
                onClick: S,
                onFocus: T,
                onPointerEnter: k,
                onMouseEnter: k,
                onPointerMove: w,
                onMouseMove: w,
                onPointerLeave: E,
                onMouseLeave: E
            },
            theirProps: m,
            slot: C,
            defaultTag: V,
            name: "Menu.Item"
        })
    })),
    z = Object.assign(q, {
        Button: B,
        Items: G,
        Item: W
    });
export {
    z as q
};