import {
    a as t,
    T as r,
    b as e,
    M as n,
    c as a,
    I as o,
    d as i,
    f as l,
    g as s,
    F as m,
    E as u,
    e as c,
    D as f,
    h as g,
    j as d,
    _ as p,
    k as y,
    l as v,
    m as h,
    n as _,
    o as E,
    s as b,
    p as T,
    P as I,
    q as D
} from "./index-DVP_cETW.js";
import {
    r as w
} from "./index-klX-IjEm.js";
import {
    _ as S
} from "./preload-helper-CNuZRjjb.js";

function j(t, r) {
    return Object.keys(t).reduce((function(n, a) {
        return n[a] = e({
            timeZone: r
        }, t[a]), n
    }), {})
}

function L(t, r) {
    return Object.keys(e(e({}, t), r)).reduce((function(n, a) {
        return n[a] = e(e({}, t[a] || {}), r[a] || {}), n
    }), {})
}

function P(t, r) {
    if (!r) return t;
    var n = o.formats;
    return e(e(e({}, n), t), {
        date: L(j(n.date, r), j(t.date || {}, r)),
        time: L(j(n.time, r), j(t.time || {}, r))
    })
}
var R = function(o, i, l, s, m) {
        var u = o.locale,
            c = o.formats,
            f = o.messages,
            g = o.defaultLocale,
            d = o.defaultFormats,
            p = o.fallbackOnEmptyString,
            y = o.onError,
            v = o.timeZone,
            h = o.defaultRichTextElements;
        void 0 === l && (l = {
            id: ""
        });
        var _ = l.id,
            E = l.defaultMessage;
        t(!!_, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
        var b = String(_),
            T = f && Object.prototype.hasOwnProperty.call(f, b) && f[b];
        if (Array.isArray(T) && 1 === T.length && T[0].type === r.literal) return T[0].value;
        if (!s && T && "string" == typeof T && !h) return T.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (s = e(e({}, h), s || {}), c = P(c, v), d = P(d, v), !T) {
            if (!1 === p && "" === T) return T;
            if ((!E || u && u.toLowerCase() !== g.toLowerCase()) && y(new n(l, u)), E) try {
                return i.getMessageFormat(E, g, d, m).format(s)
            } catch (I) {
                return y(new a('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'), u, l, I)), "string" == typeof E ? E : b
            }
            return b
        }
        try {
            return i.getMessageFormat(T, u, c, e({
                formatters: i
            }, m || {})).format(s)
        } catch (I) {
            y(new a('Error formatting message: "'.concat(b, '", using ').concat(E ? "default message" : "id", " as fallback."), u, l, I))
        }
        if (E) try {
            return i.getMessageFormat(E, g, d, m).format(s)
        } catch (I) {
            y(new a('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'), u, l, I))
        }
        return "string" == typeof T ? T : "string" == typeof E ? E : b
    },
    F = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

function O(t, r, n, a) {
    var o = t.locale,
        i = t.formats,
        m = t.onError,
        u = t.timeZone;
    void 0 === a && (a = {});
    var c = a.format,
        f = e(e({}, u && {
            timeZone: u
        }), c && s(i, r, c, m)),
        g = l(a, F, f);
    return "time" !== r || g.hour || g.minute || g.second || g.timeStyle || g.dateStyle || (g = e(e({}, g), {
        hour: "numeric",
        minute: "numeric"
    })), n(o, g)
}

function A(t, r) {
    for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
    var a = e[0],
        o = e[1],
        l = void 0 === o ? {} : o,
        s = "string" == typeof a ? new Date(a || 0) : a;
    try {
        return O(t, "date", r, l).format(s)
    } catch (m) {
        t.onError(new i("Error formatting date.", t.locale, m))
    }
    return String(s)
}

function N(t, r) {
    for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
    var a = e[0],
        o = e[1],
        l = void 0 === o ? {} : o,
        s = "string" == typeof a ? new Date(a || 0) : a;
    try {
        return O(t, "time", r, l).format(s)
    } catch (m) {
        t.onError(new i("Error formatting time.", t.locale, m))
    }
    return String(s)
}

function x(t, r) {
    for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
    var a = e[0],
        o = e[1],
        s = e[2],
        m = void 0 === s ? {} : s,
        u = t.timeZone,
        c = t.locale,
        f = t.onError,
        g = l(m, F, u ? {
            timeZone: u
        } : {});
    try {
        return r(c, g).formatRange(a, o)
    } catch (d) {
        f(new i("Error formatting date time range.", t.locale, d))
    }
    return String(a)
}

function k(t, r) {
    for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
    var a = e[0],
        o = e[1],
        l = void 0 === o ? {} : o,
        s = "string" == typeof a ? new Date(a || 0) : a;
    try {
        return O(t, "date", r, l).formatToParts(s)
    } catch (m) {
        t.onError(new i("Error formatting date.", t.locale, m))
    }
    return []
}

function M(t, r) {
    for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
    var a = e[0],
        o = e[1],
        l = void 0 === o ? {} : o,
        s = "string" == typeof a ? new Date(a || 0) : a;
    try {
        return O(t, "time", r, l).formatToParts(s)
    } catch (m) {
        t.onError(new i("Error formatting time.", t.locale, m))
    }
    return []
}
var C = ["style", "type", "fallback", "languageDisplay"];

function Z(t, r, e, n) {
    var a = t.locale,
        o = t.onError;
    Intl.DisplayNames || o(new m('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', u.MISSING_INTL_API));
    var s = l(n, C);
    try {
        return r(a, s).of(e)
    } catch (c) {
        o(new i("Error formatting display name.", a, c))
    }
}
var V = ["type", "style"],
    G = Date.now();

function W(t, r, e, n) {
    void 0 === n && (n = {});
    var a = $(t, r, e, n).reduce((function(t, r) {
        var e = r.value;
        return "string" != typeof e ? t.push(e) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += e : t.push(e), t
    }), []);
    return 1 === a.length ? a[0] : 0 === a.length ? "" : a
}

function $(t, r, n, a) {
    var o = t.locale,
        s = t.onError;
    void 0 === a && (a = {}), Intl.ListFormat || s(new m('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', u.MISSING_INTL_API));
    var c = l(a, V);
    try {
        var f = {},
            g = n.map((function(t, r) {
                if ("object" == typeof t) {
                    var e = function(t) {
                        return "".concat(G, "_").concat(t, "_").concat(G)
                    }(r);
                    return f[e] = t, e
                }
                return String(t)
            }));
        return r(o, c).formatToParts(g).map((function(t) {
            return "literal" === t.type ? t : e(e({}, t), {
                value: f[t.value] || t.value
            })
        }))
    } catch (d) {
        s(new i("Error formatting list.", o, d))
    }
    return n
}
var q = ["type"];

function U(t, r, e, n) {
    var a = t.locale,
        o = t.onError;
    void 0 === n && (n = {}), Intl.PluralRules || o(new m('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', u.MISSING_INTL_API));
    var s = l(n, q);
    try {
        return r(a, s).select(e)
    } catch (c) {
        o(new i("Error formatting plural.", a, c))
    }
    return "other"
}
var B = ["numeric", "style"];

function Y(t, r, e, n, a) {
    void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || t.onError(new m('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', u.MISSING_INTL_API));
    try {
        return function(t, r, e) {
            var n = t.locale,
                a = t.formats,
                o = t.onError;
            void 0 === e && (e = {});
            var i = e.format,
                m = !!i && s(a, "relative", i, o) || {};
            return r(n, l(e, B, m))
        }(t, r, a).format(e, n)
    } catch (o) {
        t.onError(new i("Error formatting relative time.", t.locale, o))
    }
    return String(e)
}
var z = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

function H(t, r, e) {
    var n = t.locale,
        a = t.formats,
        o = t.onError;
    void 0 === e && (e = {});
    var i = e.format,
        m = i && s(a, "number", i, o) || {};
    return r(n, l(e, z, m))
}

function J(t, r, e, n) {
    void 0 === n && (n = {});
    try {
        return H(t, r, n).format(e)
    } catch (a) {
        t.onError(new i("Error formatting number.", t.locale, a))
    }
    return String(e)
}

function K(t, r, e, n) {
    void 0 === n && (n = {});
    try {
        return H(t, r, n).formatToParts(e)
    } catch (a) {
        t.onError(new i("Error formatting number.", t.locale, a))
    }
    return []
}

function Q(t) {
    return t ? Object.keys(t).reduce((function(r, e) {
        var n = t[e];
        return r[e] = v(n) ? h(n) : n, r
    }), {}) : t
}
var X = function(t, r, e, n) {
        for (var a = [], o = 4; o < arguments.length; o++) a[o - 4] = arguments[o];
        var i = Q(n),
            l = R.apply(void 0, _([t, r, e, i], a, !1));
        return Array.isArray(l) ? w.Children.toArray(l) : l
    },
    tt = function(t, r) {
        var n = t.defaultRichTextElements,
            a = p(t, ["defaultRichTextElements"]),
            o = Q(n),
            i = function(t, r) {
                var n = c(r),
                    a = e(e({}, f), t),
                    o = a.locale,
                    i = a.defaultLocale,
                    l = a.onError;
                return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && l ? l(new d('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && l && l(new d('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new g('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"),
                    function(t) {
                        var r;
                        t.onWarn && t.defaultRichTextElements && "string" == typeof((r = t.messages || {}) ? r[Object.keys(r)[0]] : void 0) && t.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                    }(a), e(e({}, a), {
                        formatters: n,
                        formatNumber: J.bind(null, a, n.getNumberFormat),
                        formatNumberToParts: K.bind(null, a, n.getNumberFormat),
                        formatRelativeTime: Y.bind(null, a, n.getRelativeTimeFormat),
                        formatDate: A.bind(null, a, n.getDateTimeFormat),
                        formatDateToParts: k.bind(null, a, n.getDateTimeFormat),
                        formatTime: N.bind(null, a, n.getDateTimeFormat),
                        formatDateTimeRange: x.bind(null, a, n.getDateTimeFormat),
                        formatTimeToParts: M.bind(null, a, n.getDateTimeFormat),
                        formatPlural: U.bind(null, a, n.getPluralRules),
                        formatMessage: R.bind(null, a, n),
                        $t: R.bind(null, a, n),
                        formatList: W.bind(null, a, n.getListFormat),
                        formatListToParts: $.bind(null, a, n.getListFormat),
                        formatDisplayName: Z.bind(null, a, n.getDisplayNames)
                    })
            }(e(e(e({}, y), a), {
                defaultRichTextElements: o
            }), r),
            l = {
                locale: i.locale,
                timeZone: i.timeZone,
                fallbackOnEmptyString: i.fallbackOnEmptyString,
                formats: i.formats,
                defaultLocale: i.defaultLocale,
                defaultFormats: i.defaultFormats,
                messages: i.messages,
                onError: i.onError,
                defaultRichTextElements: o
            };
        return e(e({}, i), {
            formatMessage: X.bind(null, l, i.formatters),
            $t: X.bind(null, l, i.formatters)
        })
    };

function rt(t) {
    return {
        locale: t.locale,
        timeZone: t.timeZone,
        fallbackOnEmptyString: t.fallbackOnEmptyString,
        formats: t.formats,
        textComponent: t.textComponent,
        messages: t.messages,
        defaultLocale: t.defaultLocale,
        defaultFormats: t.defaultFormats,
        onError: t.onError,
        onWarn: t.onWarn,
        wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
        defaultRichTextElements: t.defaultRichTextElements
    }
}
var et = function(t) {
    function r() {
        var r = null !== t && t.apply(this, arguments) || this;
        return r.cache = D(), r.state = {
            cache: r.cache,
            intl: tt(rt(r.props), r.cache),
            prevConfig: rt(r.props)
        }, r
    }
    return E(r, t), r.getDerivedStateFromProps = function(t, r) {
        var e = r.prevConfig,
            n = r.cache,
            a = rt(t);
        return b(e, a) ? null : {
            intl: tt(a, n),
            prevConfig: a
        }
    }, r.prototype.render = function() {
        return T(this.state.intl), w.createElement(I, {
            value: this.state.intl
        }, this.props.children)
    }, r.displayName = "IntlProvider", r.defaultProps = y, r
}(w.PureComponent);
const nt = ["ar-sa", "fa-ir"];

function at(t) {
    return nt.find((r => r === t.id)) ? "rtl" : "ltr"
}

function ot(t) {
    const [r, e] = w.useState(null), [n, a] = w.useState(!0);
    return w.useEffect((() => {
        (async () => {
            a(!0);
            try {
                const r = await async function(t) {
                    return {
                        messages: { ...(await async function(t) {
                                switch (t) {
                                    case "en-us":
                                    default:
                                        return S((() =>
                                            import ("./en_US-BcNZCryL.js")), []);
                                    case "pt-br":
                                        return S((() =>
                                            import ("./pt_BR-CBlwdZh9.js")), []);
                                    case "es-es":
                                        return S((() =>
                                            import ("./es_ES-Cof1SIQM.js")), []);
                                    case "hi-in":
                                        return S((() =>
                                            import ("./hi_IN-jPAFtPR_.js")), []);
                                    case "de-de":
                                        return S((() =>
                                            import ("./de_DE-DoR247DO.js")), []);
                                    case "ar-sa":
                                        return S((() =>
                                            import ("./ar_SA-DugLnewo.js")), []);
                                    case "fr-fr":
                                        return S((() =>
                                            import ("./fr_FR-DhnZCbzz.js")), []);
                                    case "tr-tr":
                                        return S((() =>
                                            import ("./tr_TR-Dbt5FImL.js")), []);
                                    case "it-it":
                                        return S((() =>
                                            import ("./it_IT-BwONcOa9.js")), []);
                                    case "fa-ir":
                                        return S((() =>
                                            import ("./fa_IR-Cf7MQg2l.js")), []);
                                    case "pl-pl":
                                        return S((() =>
                                            import ("./pl_PL-Dez6hYDr.js")), [])
                                }
                            }(t)).default
                        },
                        locale: t
                    }
                }(t);
                e(r)
            } catch (r) {} finally {
                a(!1)
            }
        })()
    }), [t]), {
        currentAppLocale: r,
        initialLocale: t,
        loading: n
    }
}
export {
    et as I, at as g, ot as u
};