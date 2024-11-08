import {
    r as e,
    R as t
} from "./index-klX-IjEm.js";
import {
    r as o
} from "./index-X1TvMjHs.js";
import {
    i as n
} from "./use-computed-D-wzkSI6.js";
import {
    T as i,
    e as r
} from "./form-D-twWBhJ.js";
import {
    p as l,
    o as s
} from "./use-disposables-CvOh9Ink.js";
import {
    O as a,
    U as u,
    o as c,
    u as d,
    l as p,
    x as h,
    C as f,
    y as m,
    a as v
} from "./render-UAkLgEPn.js";
import {
    I as b,
    o as g,
    r as x
} from "./keyboard-DOoxlA9V.js";
import {
    y as O,
    n as I,
    I as S
} from "./use-outside-click-B7s0MmFf.js";
import {
    n as R
} from "./use-owner-CYU9lXCh.js";
import {
    T as C
} from "./use-resolve-button-type-BOJkepan.js";
import {
    u as T,
    c as y,
    f as E
} from "./calculate-active-index-C0Wh14hk.js";
import {
    F as M
} from "./use-tree-walker-D0Lygo_6.js";
import {
    m as w,
    t as P
} from "./dialog-B_dWq_K-.js";
import {
    u as z,
    s as k
} from "./hidden-AZzL84Q1.js";
import {
    s as F,
    d as D,
    u as A
} from "./open-closed-DP-48t2G.js";

function j(e, t, o) {
    let n, i = o.initialDeps ? ? [];
    return () => {
        var r, l, s, a;
        let u;
        o.key && (null == (r = o.debug) ? void 0 : r.call(o)) && (u = Date.now());
        const c = e();
        if (c.length === i.length && !c.some(((e, t) => i[t] !== e))) return n;
        let d;
        return i = c, o.key && (null == (l = o.debug) ? void 0 : l.call(o)) && (d = Date.now()), n = t(...c), o.key && (null == (s = o.debug) ? void 0 : s.call(o)) && (Math.round(100 * (Date.now() - u)), Math.round(100 * (Date.now() - d))), null == (a = null == o ? void 0 : o.onChange) || a.call(o, n), n
    }
}

function _(e, t) {
    if (void 0 === e) throw new Error("Unexpected undefined");
    return e
}
const L = (e, t, o) => {
        let n;
        return function(...i) {
            e.clearTimeout(n), n = e.setTimeout((() => t.apply(this, i)), o)
        }
    },
    B = e => e,
    V = e => {
        const t = Math.max(e.startIndex - e.overscan, 0),
            o = Math.min(e.endIndex + e.overscan, e.count - 1),
            n = [];
        for (let i = t; i <= o; i++) n.push(i);
        return n
    },
    W = (e, t) => {
        const o = e.scrollElement;
        if (!o) return;
        const n = e.targetWindow;
        if (!n) return;
        const i = e => {
            const {
                width: o,
                height: n
            } = e;
            t({
                width: Math.round(o),
                height: Math.round(n)
            })
        };
        if (i(o.getBoundingClientRect()), !n.ResizeObserver) return () => {};
        const r = new n.ResizeObserver((e => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
                const e = t.borderBoxSize[0];
                if (e) return void i({
                    width: e.inlineSize,
                    height: e.blockSize
                })
            }
            i(o.getBoundingClientRect())
        }));
        return r.observe(o, {
            box: "border-box"
        }), () => {
            r.unobserve(o)
        }
    },
    N = {
        passive: !0
    },
    $ = "undefined" == typeof window || "onscrollend" in window,
    K = (e, t) => {
        const o = e.scrollElement;
        if (!o) return;
        const n = e.targetWindow;
        if (!n) return;
        let i = 0;
        const r = $ ? () => {} : L(n, (() => {
                t(i, !1)
            }), e.options.isScrollingResetDelay),
            l = n => () => {
                const {
                    horizontal: l,
                    isRtl: s
                } = e.options;
                i = l ? o.scrollLeft * (s ? -1 : 1) : o.scrollTop, r(), t(i, n)
            },
            s = l(!0),
            a = l(!1);
        return a(), o.addEventListener("scroll", s, N), o.addEventListener("scrollend", a, N), () => {
            o.removeEventListener("scroll", s), o.removeEventListener("scrollend", a)
        }
    },
    U = (e, t, o) => {
        if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) return Math.round(e[o.options.horizontal ? "inlineSize" : "blockSize"])
        }
        return Math.round(e.getBoundingClientRect()[o.options.horizontal ? "width" : "height"])
    },
    q = (e, {
        adjustments: t = 0,
        behavior: o
    }, n) => {
        var i, r;
        const l = e + t;
        null == (r = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || r.call(i, {
            [n.options.horizontal ? "left" : "top"]: l,
            behavior: o
        })
    };
class H {
    constructor(e) {
        this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (() => {
            let e = null;
            const t = () => e || (this.targetWindow && this.targetWindow.ResizeObserver ? e = new this.targetWindow.ResizeObserver((e => {
                e.forEach((e => {
                    this._measureElement(e.target, e)
                }))
            })) : null);
            return {
                disconnect: () => {
                    var o;
                    null == (o = t()) || o.disconnect(), e = null
                },
                observe: e => {
                    var o;
                    return null == (o = t()) ? void 0 : o.observe(e, {
                        box: "border-box"
                    })
                },
                unobserve: e => {
                    var o;
                    return null == (o = t()) ? void 0 : o.unobserve(e)
                }
            }
        })(), this.range = null, this.setOptions = e => {
            Object.entries(e).forEach((([t, o]) => {
                void 0 === o && delete e[t]
            })), this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: B,
                rangeExtractor: V,
                onChange: () => {},
                measureElement: U,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                ...e
            }
        }, this.notify = e => {
            var t, o;
            null == (o = (t = this.options).onChange) || o.call(t, this, e)
        }, this.maybeNotify = j((() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null])), (e => {
            this.notify(e)
        }), {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
        }), this.cleanup = () => {
            this.unsubs.filter(Boolean).forEach((e => e())), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null
        }, this._didMount = () => () => {
            this.cleanup()
        }, this._willUpdate = () => {
            var e;
            const t = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== t) {
                if (this.cleanup(), !t) return void this.maybeNotify();
                this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ? ? null, this.elementsCache.forEach((e => {
                    this.observer.observe(e)
                })), this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                }), this.unsubs.push(this.options.observeElementRect(this, (e => {
                    this.scrollRect = e, this.maybeNotify()
                }))), this.unsubs.push(this.options.observeElementOffset(this, ((e, t) => {
                    this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this.maybeNotify()
                })))
            }
        }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? ("function" == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
            const o = new Map,
                n = new Map;
            for (let i = t - 1; i >= 0; i--) {
                const t = e[i];
                if (o.has(t.lane)) continue;
                const r = n.get(t.lane);
                if (null == r || t.end > r.end ? n.set(t.lane, t) : t.end < r.end && o.set(t.lane, !0), o.size === this.options.lanes) break
            }
            return n.size === this.options.lanes ? Array.from(n.values()).sort(((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end))[0] : void 0
        }, this.getMeasurementOptions = j((() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled]), ((e, t, o, n, i) => (this.pendingMeasuredCacheIndexes = [], {
            count: e,
            paddingStart: t,
            scrollMargin: o,
            getItemKey: n,
            enabled: i
        })), {
            key: !1
        }), this.getMeasurements = j((() => [this.getMeasurementOptions(), this.itemSizeCache]), (({
            count: e,
            paddingStart: t,
            scrollMargin: o,
            getItemKey: n,
            enabled: i
        }, r) => {
            if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
            0 === this.measurementsCache.length && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e => {
                this.itemSizeCache.set(e.key, e.size)
            })));
            const l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const s = this.measurementsCache.slice(0, l);
            for (let a = l; a < e; a++) {
                const e = n(a),
                    i = 1 === this.options.lanes ? s[a - 1] : this.getFurthestMeasurement(s, a),
                    l = i ? i.end + this.options.gap : t + o,
                    u = r.get(e),
                    c = "number" == typeof u ? u : this.options.estimateSize(a),
                    d = l + c,
                    p = i ? i.lane : a % this.options.lanes;
                s[a] = {
                    index: a,
                    start: l,
                    size: c,
                    end: d,
                    key: e,
                    lane: p
                }
            }
            return this.measurementsCache = s, s
        }), {
            key: !1,
            debug: () => this.options.debug
        }), this.calculateRange = j((() => [this.getMeasurements(), this.getSize(), this.getScrollOffset()]), ((e, t, o) => this.range = e.length > 0 && t > 0 ? function({
            measurements: e,
            outerSize: t,
            scrollOffset: o
        }) {
            const n = e.length - 1,
                i = G(0, n, (t => e[t].start), o);
            let r = i;
            for (; r < n && e[r].end < o + t;) r++;
            return {
                startIndex: i,
                endIndex: r
            }
        }({
            measurements: e,
            outerSize: t,
            scrollOffset: o
        }) : null), {
            key: !1,
            debug: () => this.options.debug
        }), this.getIndexes = j((() => [this.options.rangeExtractor, this.calculateRange(), this.options.overscan, this.options.count]), ((e, t, o, n) => null === t ? [] : e({
            startIndex: t.startIndex,
            endIndex: t.endIndex,
            overscan: o,
            count: n
        })), {
            key: !1,
            debug: () => this.options.debug
        }), this.indexFromElement = e => {
            const t = this.options.indexAttribute,
                o = e.getAttribute(t);
            return o ? parseInt(o, 10) : -1
        }, this._measureElement = (e, t) => {
            const o = this.indexFromElement(e),
                n = this.measurementsCache[o];
            if (!n) return;
            const i = n.key,
                r = this.elementsCache.get(i);
            r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(i, e)), e.isConnected && this.resizeItem(o, this.options.measureElement(e, t, this))
        }, this.resizeItem = (e, t) => {
            const o = this.measurementsCache[e];
            if (!o) return;
            const n = t - (this.itemSizeCache.get(o.key) ? ? o.size);
            0 !== n && ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(o, n, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += n,
                behavior: void 0
            }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, t)), this.notify(!1))
        }, this.measureElement = e => {
            e ? this._measureElement(e, void 0) : this.elementsCache.forEach(((e, t) => {
                e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t))
            }))
        }, this.getVirtualItems = j((() => [this.getIndexes(), this.getMeasurements()]), ((e, t) => {
            const o = [];
            for (let n = 0, i = e.length; n < i; n++) {
                const i = t[e[n]];
                o.push(i)
            }
            return o
        }), {
            key: !1,
            debug: () => this.options.debug
        }), this.getVirtualItemForOffset = e => {
            const t = this.getMeasurements();
            if (0 !== t.length) return _(t[G(0, t.length - 1, (e => _(t[e]).start), e)])
        }, this.getOffsetForAlignment = (e, t) => {
            const o = this.getSize(),
                n = this.getScrollOffset();
            "auto" === t && (t = e <= n ? "start" : e >= n + o ? "end" : "start"), "start" === t || ("end" === t ? e -= o : "center" === t && (e -= o / 2));
            const i = this.options.horizontal ? "scrollWidth" : "scrollHeight",
                r = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i] : this.scrollElement[i] : 0) - o;
            return Math.max(Math.min(r, e), 0)
        }, this.getOffsetForIndex = (e, t = "auto") => {
            e = Math.max(0, Math.min(e, this.options.count - 1));
            const o = this.measurementsCache[e];
            if (!o) return;
            const n = this.getSize(),
                i = this.getScrollOffset();
            if ("auto" === t)
                if (o.end >= i + n - this.options.scrollPaddingEnd) t = "end";
                else {
                    if (!(o.start <= i + this.options.scrollPaddingStart)) return [i, t];
                    t = "start"
                }
            const r = "end" === t ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(r, t), t]
        }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
            null !== this.scrollToIndexTimeoutId && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null)
        }, this.scrollToOffset = (e, {
            align: t = "start",
            behavior: o
        } = {}) => {
            this.cancelScrollToIndex(), "smooth" === o && this.isDynamicMode(), this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                adjustments: void 0,
                behavior: o
            })
        }, this.scrollToIndex = (e, {
            align: t = "auto",
            behavior: o
        } = {}) => {
            e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), "smooth" === o && this.isDynamicMode();
            const n = this.getOffsetForIndex(e, t);
            if (!n) return;
            const [i, r] = n;
            this._scrollToOffset(i, {
                adjustments: void 0,
                behavior: o
            }), "smooth" !== o && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout((() => {
                if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(this.options.getItemKey(e))) {
                    const [i] = _(this.getOffsetForIndex(e, r));
                    t = i, n = this.getScrollOffset(), Math.abs(t - n) < 1 || this.scrollToIndex(e, {
                        align: r,
                        behavior: o
                    })
                } else this.scrollToIndex(e, {
                    align: r,
                    behavior: o
                });
                var t, n
            })))
        }, this.scrollBy = (e, {
            behavior: t
        } = {}) => {
            this.cancelScrollToIndex(), "smooth" === t && this.isDynamicMode(), this._scrollToOffset(this.getScrollOffset() + e, {
                adjustments: void 0,
                behavior: t
            })
        }, this.getTotalSize = () => {
            var e;
            const t = this.getMeasurements();
            let o;
            return o = 0 === t.length ? this.options.paddingStart : 1 === this.options.lanes ? (null == (e = t[t.length - 1]) ? void 0 : e.end) ? ? 0 : Math.max(...t.slice(-this.options.lanes).map((e => e.end))), o - this.options.scrollMargin + this.options.paddingEnd
        }, this._scrollToOffset = (e, {
            adjustments: t,
            behavior: o
        }) => {
            this.options.scrollToFn(e, {
                behavior: o,
                adjustments: t
            }, this)
        }, this.measure = () => {
            this.itemSizeCache = new Map, this.notify(!1)
        }, this.setOptions(e)
    }
}
const G = (e, t, o, n) => {
        for (; e <= t;) {
            const i = (e + t) / 2 | 0,
                r = o(i);
            if (r < n) e = i + 1;
            else {
                if (!(r > n)) return i;
                t = i - 1
            }
        }
        return e > 0 ? e - 1 : 0
    },
    J = "undefined" != typeof document ? e.useLayoutEffect : e.useEffect;
var X, Y, Z, Q = {},
    ee = ((Z = ee || {})[Z.Open = 0] = "Open", Z[Z.Closed = 1] = "Closed", Z),
    te = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(te || {}),
    oe = ((Y = oe || {})[Y.Pointer = 0] = "Pointer", Y[Y.Focus = 1] = "Focus", Y[Y.Other = 2] = "Other", Y),
    ne = ((X = ne || {})[X.OpenCombobox = 0] = "OpenCombobox", X[X.CloseCombobox = 1] = "CloseCombobox", X[X.GoToOption = 2] = "GoToOption", X[X.RegisterOption = 3] = "RegisterOption", X[X.UnregisterOption = 4] = "UnregisterOption", X[X.RegisterLabel = 5] = "RegisterLabel", X[X.SetActivationTrigger = 6] = "SetActivationTrigger", X[X.UpdateVirtualOptions = 7] = "UpdateVirtualOptions", X);

function ie(e, t = e => e) {
    let o = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
        n = t(e.options.slice()),
        i = n.length > 0 && null !== n[0].dataRef.current.order ? n.sort(((e, t) => e.dataRef.current.order - t.dataRef.current.order)) : S(n, (e => e.dataRef.current.domRef.current)),
        r = o ? i.indexOf(o) : null;
    return -1 === r && (r = null), {
        options: i,
        activeOptionIndex: r
    }
}
let re = {
        1(e) {
            var t;
            return null != (t = e.dataRef.current) && t.disabled || 1 === e.comboboxState ? e : { ...e,
                activeOptionIndex: null,
                comboboxState: 1
            }
        },
        0(e) {
            var t, o;
            if (null != (t = e.dataRef.current) && t.disabled || 0 === e.comboboxState) return e;
            if (null != (o = e.dataRef.current) && o.value) {
                let t = e.dataRef.current.calculateIndex(e.dataRef.current.value);
                if (-1 !== t) return { ...e,
                    activeOptionIndex: t,
                    comboboxState: 0
                }
            }
            return { ...e,
                comboboxState: 0
            }
        },
        2(e, t) {
            var o, n, i, r, l;
            if (null != (o = e.dataRef.current) && o.disabled || null != (n = e.dataRef.current) && n.optionsRef.current && (null == (i = e.dataRef.current) || !i.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
            if (e.virtual) {
                let o = t.focus === y.Specific ? t.idx : E(t, {
                        resolveItems: () => e.virtual.options,
                        resolveActiveIndex: () => {
                            var t, o;
                            return null != (o = null != (t = e.activeOptionIndex) ? t : e.virtual.options.findIndex((t => !e.virtual.disabled(t)))) ? o : null
                        },
                        resolveDisabled: e.virtual.disabled,
                        resolveId() {
                            throw new Error("Function not implemented.")
                        }
                    }),
                    n = null != (r = t.trigger) ? r : 2;
                return e.activeOptionIndex === o && e.activationTrigger === n ? e : { ...e,
                    activeOptionIndex: o,
                    activationTrigger: n
                }
            }
            let s = ie(e);
            if (null === s.activeOptionIndex) {
                let e = s.options.findIndex((e => !e.dataRef.current.disabled)); - 1 !== e && (s.activeOptionIndex = e)
            }
            let a = t.focus === y.Specific ? t.idx : E(t, {
                    resolveItems: () => s.options,
                    resolveActiveIndex: () => s.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                }),
                u = null != (l = t.trigger) ? l : 2;
            return e.activeOptionIndex === a && e.activationTrigger === u ? e : { ...e,
                ...s,
                activeOptionIndex: a,
                activationTrigger: u
            }
        },
        3: (e, t) => {
            var o, n, i;
            if (null != (o = e.dataRef.current) && o.virtual) return { ...e,
                options: [...e.options, t.payload]
            };
            let r = t.payload,
                l = ie(e, (e => (e.push(r), e)));
            null === e.activeOptionIndex && null != (n = e.dataRef.current) && n.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(r));
            let s = { ...e,
                ...l,
                activationTrigger: 2
            };
            return null != (i = e.dataRef.current) && i.__demoMode && void 0 === e.dataRef.current.value && (s.activeOptionIndex = 0), s
        },
        4: (e, t) => {
            var o;
            if (null != (o = e.dataRef.current) && o.virtual) return { ...e,
                options: e.options.filter((e => e.id !== t.id))
            };
            let n = ie(e, (e => {
                let o = e.findIndex((e => e.id === t.id));
                return -1 !== o && e.splice(o, 1), e
            }));
            return { ...e,
                ...n,
                activationTrigger: 2
            }
        },
        5: (e, t) => e.labelId === t.id ? e : { ...e,
            labelId: t.id
        },
        6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e,
            activationTrigger: t.trigger
        },
        7: (e, t) => {
            var o;
            if ((null == (o = e.virtual) ? void 0 : o.options) === t.options) return e;
            let n = e.activeOptionIndex;
            if (null !== e.activeOptionIndex) {
                let o = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
                n = -1 !== o ? o : null
            }
            return { ...e,
                activeOptionIndex: n,
                virtual: Object.assign({}, e.virtual, {
                    options: t.options
                })
            }
        }
    },
    le = e.createContext(null);

function se(t) {
    let o = e.useContext(le);
    if (null === o) {
        let e = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, se), e
    }
    return o
}
le.displayName = "ComboboxActionsContext";
let ae = e.createContext(null);

function ue(n) {
    var i;
    let r = de("VirtualProvider"),
        [l, s] = e.useMemo((() => {
            let e = r.optionsRef.current;
            if (!e) return [0, 0];
            let t = window.getComputedStyle(e);
            return [parseFloat(t.paddingBlockStart || t.paddingTop), parseFloat(t.paddingBlockEnd || t.paddingBottom)]
        }), [r.optionsRef.current]),
        a = (d = {
            scrollPaddingStart: l,
            scrollPaddingEnd: s,
            count: r.virtual.options.length,
            estimateSize: () => 40,
            getScrollElement() {
                var e;
                return null != (e = r.optionsRef.current) ? e : null
            },
            overscan: 12
        }, function(t) {
            const n = e.useReducer((() => ({})), {})[1],
                i = { ...t,
                    onChange: (e, i) => {
                        var r;
                        i ? o.flushSync(n) : n(), null == (r = t.onChange) || r.call(t, e, i)
                    }
                },
                [r] = e.useState((() => new H(i)));
            return r.setOptions(i), e.useEffect((() => r._didMount()), []), J((() => r._willUpdate())), r
        }({
            observeElementRect: W,
            observeElementOffset: K,
            scrollToFn: q,
            ...d
        })),
        [u, c] = e.useState(0);
    var d;
    return p((() => {
        c((e => e + 1))
    }), [null == (i = r.virtual) ? void 0 : i.options]), t.createElement(ae.Provider, {
        value: a
    }, t.createElement("div", {
        style: {
            position: "relative",
            width: "100%",
            height: `${a.getTotalSize()}px`
        },
        ref: e => {
            if (e) {
                if ("undefined" != typeof process && void 0 !== Q.JEST_WORKER_ID || 0 === r.activationTrigger) return;
                null !== r.activeOptionIndex && r.virtual.options.length > r.activeOptionIndex && a.scrollToIndex(r.activeOptionIndex)
            }
        }
    }, a.getVirtualItems().map((o => {
        var i;
        return t.createElement(e.Fragment, {
            key: o.key
        }, t.cloneElement(null == (i = n.children) ? void 0 : i.call(n, {
            option: r.virtual.options[o.index],
            open: 0 === r.comboboxState
        }), {
            key: `${u}-${o.key}`,
            "data-index": o.index,
            "aria-setsize": r.virtual.options.length,
            "aria-posinset": o.index + 1,
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translateY(${o.start}px)`,
                overflowAnchor: "none"
            }
        }))
    }))))
}
let ce = e.createContext(null);

function de(t) {
    let o = e.useContext(ce);
    if (null === o) {
        let e = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(e, de), e
    }
    return o
}

function pe(e, t) {
    return d(t.type, re, e, t)
}
ce.displayName = "ComboboxDataContext";
let he = e.Fragment,
    fe = a.RenderStrategy | a.Static,
    me = u((function(o, n) {
        let {
            value: s,
            defaultValue: a,
            onChange: u,
            form: m,
            name: v,
            by: b = null,
            disabled: g = !1,
            __demoMode: x = !1,
            nullable: I = !1,
            multiple: S = !1,
            immediate: R = !1,
            virtual: C = null,
            ...T
        } = o, [E = (S ? [] : void 0), M] = i(s, u, a), [w, P] = e.useReducer(pe, {
            dataRef: e.createRef(),
            comboboxState: x ? 0 : 1,
            options: [],
            virtual: null,
            activeOptionIndex: null,
            activationTrigger: 2,
            labelId: null
        }), A = e.useRef(!1), j = e.useRef({
            static: !1,
            hold: !1
        }), _ = e.useRef(null), L = e.useRef(null), B = e.useRef(null), V = e.useRef(null), W = c("string" == typeof b ? (e, t) => {
            let o = b;
            return (null == e ? void 0 : e[o]) === (null == t ? void 0 : t[o])
        } : null != b ? b : (e, t) => e === t), N = c((e => w.options.findIndex((t => W(t.dataRef.current.value, e))))), $ = e.useCallback((e => d(U.mode, {
            1: () => E.some((t => W(t, e))),
            0: () => W(E, e)
        })), [E]), K = c((e => w.activeOptionIndex === N(e))), U = e.useMemo((() => ({ ...w,
            immediate: !1,
            optionsPropsRef: j,
            labelRef: _,
            inputRef: L,
            buttonRef: B,
            optionsRef: V,
            value: E,
            defaultValue: a,
            disabled: g,
            mode: S ? 1 : 0,
            virtual: w.virtual,
            get activeOptionIndex() {
                if (A.current && null === w.activeOptionIndex && w.options.length > 0) {
                    let e = w.options.findIndex((e => !e.dataRef.current.disabled));
                    if (-1 !== e) return e
                }
                return w.activeOptionIndex
            },
            calculateIndex: N,
            compare: W,
            isSelected: $,
            isActive: K,
            nullable: I,
            __demoMode: x
        })), [E, a, g, S, I, x, w, null]);
        p((() => {}), [null, void 0]), p((() => {
            w.dataRef.current = U
        }), [U]), O([U.buttonRef, U.inputRef, U.optionsRef], (() => te.closeCombobox()), 0 === U.comboboxState);
        let q = e.useMemo((() => {
                var e, t, o;
                return {
                    open: 0 === U.comboboxState,
                    disabled: g,
                    activeIndex: U.activeOptionIndex,
                    activeOption: null === U.activeOptionIndex ? null : U.virtual ? U.virtual.options[null != (e = U.activeOptionIndex) ? e : 0] : null != (o = null == (t = U.options[U.activeOptionIndex]) ? void 0 : t.dataRef.current.value) ? o : null,
                    value: E
                }
            }), [U, g, E]),
            H = c((() => {
                if (null !== U.activeOptionIndex) {
                    if (U.virtual) Q(U.virtual.options[U.activeOptionIndex]);
                    else {
                        let {
                            dataRef: e
                        } = U.options[U.activeOptionIndex];
                        Q(e.current.value)
                    }
                    te.goToOption(y.Specific, U.activeOptionIndex)
                }
            })),
            G = c((() => {
                P({
                    type: 0
                }), A.current = !0
            })),
            J = c((() => {
                P({
                    type: 1
                }), A.current = !1
            })),
            X = c(((e, t, o) => (A.current = !1, e === y.Specific ? P({
                type: 2,
                focus: y.Specific,
                idx: t,
                trigger: o
            }) : P({
                type: 2,
                focus: e,
                trigger: o
            })))),
            Y = c(((e, t) => (P({
                type: 3,
                payload: {
                    id: e,
                    dataRef: t
                }
            }), () => {
                U.isActive(t.current.value) && (A.current = !0), P({
                    type: 4,
                    id: e
                })
            }))),
            Z = c((e => (P({
                type: 5,
                id: e
            }), () => P({
                type: 5,
                id: null
            })))),
            Q = c((e => d(U.mode, {
                0: () => null == M ? void 0 : M(e),
                1() {
                    let t = U.value.slice(),
                        o = t.findIndex((t => W(t, e)));
                    return -1 === o ? t.push(e) : t.splice(o, 1), null == M ? void 0 : M(t)
                }
            }))),
            ee = c((e => {
                P({
                    type: 6,
                    trigger: e
                })
            })),
            te = e.useMemo((() => ({
                onChange: Q,
                registerOption: Y,
                registerLabel: Z,
                goToOption: X,
                closeCombobox: J,
                openCombobox: G,
                setActivationTrigger: ee,
                selectActiveOption: H
            })), []),
            oe = null === n ? {} : {
                ref: n
            },
            ne = e.useRef(null),
            ie = l();
        return e.useEffect((() => {
            ne.current && void 0 !== a && ie.addEventListener(ne.current, "reset", (() => {
                null == M || M(a)
            }))
        }), [ne, M]), t.createElement(le.Provider, {
            value: te
        }, t.createElement(ce.Provider, {
            value: U
        }, t.createElement(F, {
            value: d(U.comboboxState, {
                0: D.Open,
                1: D.Closed
            })
        }, null != v && null != E && r({
            [v]: E
        }).map((([e, o], n) => t.createElement(z, {
            features: k.Hidden,
            ref: 0 === n ? e => {
                var t;
                ne.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
            } : void 0,
            ...h({
                key: e,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: m,
                disabled: g,
                name: e,
                value: o
            })
        }))), f({
            ourProps: oe,
            theirProps: T,
            slot: q,
            defaultTag: he,
            name: "Combobox"
        }))))
    })),
    ve = u((function(t, o) {
        var i;
        let r = de("Combobox.Button"),
            s = se("Combobox.Button"),
            a = m(r.buttonRef, o),
            u = b(),
            {
                id: d = `headlessui-combobox-button-${u}`,
                ...p
            } = t,
            h = l(),
            v = c((e => {
                switch (e.key) {
                    case g.ArrowDown:
                        return e.preventDefault(), e.stopPropagation(), 1 === r.comboboxState && s.openCombobox(), h.nextFrame((() => {
                            var e;
                            return null == (e = r.inputRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }));
                    case g.ArrowUp:
                        return e.preventDefault(), e.stopPropagation(), 1 === r.comboboxState && (s.openCombobox(), h.nextFrame((() => {
                            r.value || s.goToOption(y.Last)
                        }))), h.nextFrame((() => {
                            var e;
                            return null == (e = r.inputRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }));
                    case g.Escape:
                        return 0 !== r.comboboxState ? void 0 : (e.preventDefault(), r.optionsRef.current && !r.optionsPropsRef.current.static && e.stopPropagation(), s.closeCombobox(), h.nextFrame((() => {
                            var e;
                            return null == (e = r.inputRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })));
                    default:
                        return
                }
            })),
            O = c((e => {
                if (x(e.currentTarget)) return e.preventDefault();
                0 === r.comboboxState ? s.closeCombobox() : (e.preventDefault(), s.openCombobox()), h.nextFrame((() => {
                    var e;
                    return null == (e = r.inputRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }))
            })),
            I = n((() => {
                if (r.labelId) return [r.labelId, d].join(" ")
            }), [r.labelId, d]),
            S = e.useMemo((() => ({
                open: 0 === r.comboboxState,
                disabled: r.disabled,
                value: r.value
            })), [r]),
            R = {
                ref: a,
                id: d,
                type: C(t, r.buttonRef),
                tabIndex: -1,
                "aria-haspopup": "listbox",
                "aria-controls": null == (i = r.optionsRef.current) ? void 0 : i.id,
                "aria-expanded": 0 === r.comboboxState,
                "aria-labelledby": I,
                disabled: r.disabled,
                onClick: O,
                onKeyDown: v
            };
        return f({
            ourProps: R,
            theirProps: p,
            slot: S,
            defaultTag: "button",
            name: "Combobox.Button"
        })
    })),
    be = u((function(t, o) {
        var i, r, s, a, u;
        let p = b(),
            {
                id: h = `headlessui-combobox-input-${p}`,
                onChange: v,
                displayValue: x,
                type: O = "text",
                ...I
            } = t,
            S = de("Combobox.Input"),
            C = se("Combobox.Input"),
            T = m(S.inputRef, o),
            E = R(S.inputRef),
            M = e.useRef(!1),
            z = l(),
            k = c((() => {
                C.onChange(null), S.optionsRef.current && (S.optionsRef.current.scrollTop = 0), C.goToOption(y.Nothing)
            })),
            F = "function" == typeof x && void 0 !== S.value ? null != (D = x(S.value)) ? D : "" : "string" == typeof S.value ? S.value : "";
        var D;
        w((([e, t], [o, n]) => {
            if (M.current) return;
            let i = S.inputRef.current;
            i && ((0 === n && 1 === t || e !== o) && (i.value = e), requestAnimationFrame((() => {
                if (M.current || !i || (null == E ? void 0 : E.activeElement) !== i) return;
                let {
                    selectionStart: e,
                    selectionEnd: t
                } = i;
                0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) && 0 === e && i.setSelectionRange(i.value.length, i.value.length)
            })))
        }), [F, S.comboboxState, E]), w((([e], [t]) => {
            if (0 === e && 1 === t) {
                if (M.current) return;
                let e = S.inputRef.current;
                if (!e) return;
                let t = e.value,
                    {
                        selectionStart: o,
                        selectionEnd: n,
                        selectionDirection: i
                    } = e;
                e.value = "", e.value = t, null !== i ? e.setSelectionRange(o, n, i) : e.setSelectionRange(o, n)
            }
        }), [S.comboboxState]);
        let A = e.useRef(!1),
            j = c((() => {
                A.current = !0
            })),
            _ = c((() => {
                z.nextFrame((() => {
                    A.current = !1
                }))
            })),
            L = c((e => {
                switch (M.current = !0, e.key) {
                    case g.Enter:
                        if (M.current = !1, 0 !== S.comboboxState || A.current) return;
                        if (e.preventDefault(), e.stopPropagation(), null === S.activeOptionIndex) return void C.closeCombobox();
                        C.selectActiveOption(), 0 === S.mode && C.closeCombobox();
                        break;
                    case g.ArrowDown:
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), d(S.comboboxState, {
                            0: () => C.goToOption(y.Next),
                            1: () => C.openCombobox()
                        });
                    case g.ArrowUp:
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), d(S.comboboxState, {
                            0: () => C.goToOption(y.Previous),
                            1: () => {
                                C.openCombobox(), z.nextFrame((() => {
                                    S.value || C.goToOption(y.Last)
                                }))
                            }
                        });
                    case g.Home:
                        if (e.shiftKey) break;
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(y.First);
                    case g.PageUp:
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(y.First);
                    case g.End:
                        if (e.shiftKey) break;
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(y.Last);
                    case g.PageDown:
                        return M.current = !1, e.preventDefault(), e.stopPropagation(), C.goToOption(y.Last);
                    case g.Escape:
                        return M.current = !1, 0 !== S.comboboxState ? void 0 : (e.preventDefault(), S.optionsRef.current && !S.optionsPropsRef.current.static && e.stopPropagation(), S.nullable && 0 === S.mode && null === S.value && k(), C.closeCombobox());
                    case g.Tab:
                        if (M.current = !1, 0 !== S.comboboxState) return;
                        0 === S.mode && 1 !== S.activationTrigger && C.selectActiveOption(), C.closeCombobox()
                }
            })),
            B = c((e => {
                null == v || v(e), S.nullable && 0 === S.mode && "" === e.target.value && k(), C.openCombobox()
            })),
            V = c((e => {
                var t, o, n;
                let i = null != (t = e.relatedTarget) ? t : P.find((t => t !== e.currentTarget));
                if (M.current = !1, !(null != (o = S.optionsRef.current) && o.contains(i) || null != (n = S.buttonRef.current) && n.contains(i) || 0 !== S.comboboxState)) return e.preventDefault(), 0 === S.mode && (S.nullable && null === S.value ? k() : 1 !== S.activationTrigger && C.selectActiveOption()), C.closeCombobox()
            })),
            W = c((e => {
                var t, o, n;
                let i = null != (t = e.relatedTarget) ? t : P.find((t => t !== e.currentTarget));
                null != (o = S.buttonRef.current) && o.contains(i) || null != (n = S.optionsRef.current) && n.contains(i) || S.disabled || S.immediate && 0 !== S.comboboxState && (C.openCombobox(), z.nextFrame((() => {
                    C.setActivationTrigger(1)
                })))
            })),
            N = n((() => {
                if (S.labelId) return [S.labelId].join(" ")
            }), [S.labelId]),
            $ = e.useMemo((() => ({
                open: 0 === S.comboboxState,
                disabled: S.disabled
            })), [S]),
            K = {
                ref: T,
                id: h,
                role: "combobox",
                type: O,
                "aria-controls": null == (i = S.optionsRef.current) ? void 0 : i.id,
                "aria-expanded": 0 === S.comboboxState,
                "aria-activedescendant": null === S.activeOptionIndex ? void 0 : S.virtual ? null == (r = S.options.find((e => {
                    var t;
                    return !(null != (t = S.virtual) && t.disabled(e.dataRef.current.value)) && S.compare(e.dataRef.current.value, S.virtual.options[S.activeOptionIndex])
                }))) ? void 0 : r.id : null == (s = S.options[S.activeOptionIndex]) ? void 0 : s.id,
                "aria-labelledby": N,
                "aria-autocomplete": "list",
                defaultValue: null != (u = null != (a = t.defaultValue) ? a : void 0 !== S.defaultValue ? null == x ? void 0 : x(S.defaultValue) : null) ? u : S.defaultValue,
                disabled: S.disabled,
                onCompositionStart: j,
                onCompositionEnd: _,
                onKeyDown: L,
                onChange: B,
                onFocus: W,
                onBlur: V
            };
        return f({
            ourProps: K,
            theirProps: I,
            slot: $,
            defaultTag: "input",
            name: "Combobox.Input"
        })
    })),
    ge = u((function(t, o) {
        let n = b(),
            {
                id: i = `headlessui-combobox-label-${n}`,
                ...r
            } = t,
            l = de("Combobox.Label"),
            s = se("Combobox.Label"),
            a = m(l.labelRef, o);
        p((() => s.registerLabel(i)), [i]);
        let u = c((() => {
                var e;
                return null == (e = l.inputRef.current) ? void 0 : e.focus({
                    preventScroll: !0
                })
            })),
            d = e.useMemo((() => ({
                open: 0 === l.comboboxState,
                disabled: l.disabled
            })), [l]);
        return f({
            ourProps: {
                ref: a,
                id: i,
                onClick: u
            },
            theirProps: r,
            slot: d,
            defaultTag: "label",
            name: "Combobox.Label"
        })
    })),
    xe = u((function(o, i) {
        let r = b(),
            {
                id: l = `headlessui-combobox-options-${r}`,
                hold: s = !1,
                ...a
            } = o,
            u = de("Combobox.Options"),
            c = m(u.optionsRef, i),
            d = A(),
            h = null !== d ? (d & D.Open) === D.Open : 0 === u.comboboxState;
        p((() => {
            var e;
            u.optionsPropsRef.current.static = null != (e = o.static) && e
        }), [u.optionsPropsRef, o.static]), p((() => {
            u.optionsPropsRef.current.hold = s
        }), [u.optionsPropsRef, s]), M({
            container: u.optionsRef.current,
            enabled: 0 === u.comboboxState,
            accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
            walk(e) {
                e.setAttribute("role", "none")
            }
        });
        let v = n((() => {
                var e, t;
                return null != (t = u.labelId) ? t : null == (e = u.buttonRef.current) ? void 0 : e.id
            }), [u.labelId, u.buttonRef.current]),
            g = e.useMemo((() => ({
                open: 0 === u.comboboxState,
                option: void 0
            })), [u]),
            x = {
                "aria-labelledby": v,
                role: "listbox",
                "aria-multiselectable": 1 === u.mode || void 0,
                id: l,
                ref: c
            };
        return u.virtual && 0 === u.comboboxState && Object.assign(a, {
            children: t.createElement(ue, null, a.children)
        }), f({
            ourProps: x,
            theirProps: a,
            slot: g,
            defaultTag: "ul",
            features: fe,
            visible: h,
            name: "Combobox.Options"
        })
    })),
    Oe = u((function(t, o) {
        var n;
        let i = b(),
            {
                id: r = `headlessui-combobox-option-${i}`,
                disabled: l = !1,
                value: a,
                order: u = null,
                ...d
            } = t,
            h = de("Combobox.Option"),
            g = se("Combobox.Option"),
            x = h.virtual ? h.activeOptionIndex === h.calculateIndex(a) : null !== h.activeOptionIndex && (null == (n = h.options[h.activeOptionIndex]) ? void 0 : n.id) === r,
            O = h.isSelected(a),
            S = e.useRef(null),
            R = v({
                disabled: l,
                value: a,
                domRef: S,
                order: u
            }),
            C = e.useContext(ae),
            E = m(o, S, C ? C.measureElement : null),
            M = c((() => g.onChange(a)));
        p((() => g.registerOption(r, R)), [R, r]);
        let w = e.useRef(!(h.virtual || h.__demoMode));
        p((() => {
            if (!h.virtual || !h.__demoMode) return;
            let e = s();
            return e.requestAnimationFrame((() => {
                w.current = !0
            })), e.dispose
        }), [h.virtual, h.__demoMode]), p((() => {
            if (!w.current || 0 !== h.comboboxState || !x || 0 === h.activationTrigger) return;
            let e = s();
            return e.requestAnimationFrame((() => {
                var e, t;
                null == (t = null == (e = S.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                    block: "nearest"
                })
            })), e.dispose
        }), [S, x, h.comboboxState, h.activationTrigger, h.activeOptionIndex]);
        let P = c((e => {
                var t;
                if (l || null != (t = h.virtual) && t.disabled(a)) return e.preventDefault();
                M(), I() || requestAnimationFrame((() => {
                    var e;
                    return null == (e = h.inputRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                })), 0 === h.mode && requestAnimationFrame((() => g.closeCombobox()))
            })),
            z = c((() => {
                var e;
                if (l || null != (e = h.virtual) && e.disabled(a)) return g.goToOption(y.Nothing);
                let t = h.calculateIndex(a);
                g.goToOption(y.Specific, t)
            })),
            k = T(),
            F = c((e => k.update(e))),
            D = c((e => {
                var t;
                if (!k.wasMoved(e) || l || null != (t = h.virtual) && t.disabled(a) || x) return;
                let o = h.calculateIndex(a);
                g.goToOption(y.Specific, o, 0)
            })),
            A = c((e => {
                var t;
                k.wasMoved(e) && (l || null != (t = h.virtual) && t.disabled(a) || x && (h.optionsPropsRef.current.hold || g.goToOption(y.Nothing)))
            })),
            j = e.useMemo((() => ({
                active: x,
                selected: O,
                disabled: l
            })), [x, O, l]);
        return f({
            ourProps: {
                id: r,
                ref: E,
                role: "option",
                tabIndex: !0 === l ? void 0 : -1,
                "aria-disabled": !0 === l || void 0,
                "aria-selected": O,
                disabled: void 0,
                onClick: P,
                onFocus: z,
                onPointerEnter: F,
                onMouseEnter: F,
                onPointerMove: D,
                onMouseMove: D,
                onPointerLeave: A,
                onMouseLeave: A
            },
            theirProps: d,
            slot: j,
            defaultTag: "li",
            name: "Combobox.Option"
        })
    })),
    Ie = Object.assign(me, {
        Input: be,
        Button: ve,
        Label: ge,
        Options: xe,
        Option: Oe
    });
export {
    Ie as q
};