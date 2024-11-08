import {
    r as e
} from "./index-klX-IjEm.js";
import {
    h as t
} from "./hoist-non-react-statics.cjs-DVqnxkis.js";
var r = function(e, t) {
    return (r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        })(e, t)
};

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
        this.constructor = e
    }
    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var i, o, a, s, h, u, c = function() {
    return c = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, c.apply(this, arguments)
};

function l(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
    }
    return r
}

function f(e, t, r) {
    if (r || 2 === arguments.length)
        for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
    return e.concat(n || Array.prototype.slice.call(t))
}

function p(e, t, r) {
    if (void 0 === r && (r = Error), !e) throw new r(t)
}

function m(e) {
    return e.type === a.literal
}

function E(e) {
    return e.type === a.argument
}

function g(e) {
    return e.type === a.number
}

function b(e) {
    return e.type === a.date
}

function d(e) {
    return e.type === a.time
}

function T(e) {
    return e.type === a.select
}

function v(e) {
    return e.type === a.plural
}

function y(e) {
    return e.type === a.pound
}

function H(e) {
    return e.type === a.tag
}

function _(e) {
    return !(!e || "object" != typeof e || e.type !== h.number)
}

function B(e) {
    return !(!e || "object" != typeof e || e.type !== h.dateTime)
}
"function" == typeof SuppressedError && SuppressedError, (o = i || (i = {}))[o.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", o[o.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", o[o.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", o[o.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", o[o.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", o[o.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", o[o.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", o[o.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", o[o.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", o[o.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", o[o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", o[o.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", o[o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", o[o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", o[o.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", o[o.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", o[o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", o[o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", o[o.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", o[o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", o[o.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", o[o.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", o[o.INVALID_TAG = 23] = "INVALID_TAG", o[o.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", o[o.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", o[o.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (s = a || (a = {}))[s.literal = 0] = "literal", s[s.argument = 1] = "argument", s[s.number = 2] = "number", s[s.date = 3] = "date", s[s.time = 4] = "time", s[s.select = 5] = "select", s[s.plural = 6] = "plural", s[s.pound = 7] = "pound", s[s.tag = 8] = "tag", (u = h || (h = {}))[u.number = 0] = "number", u[u.dateTime = 1] = "dateTime";
var A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    N = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

function L(e) {
    var t = {};
    return e.replace(N, (function(e) {
        var r = e.length;
        switch (e[0]) {
            case "G":
                t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
            case "y":
                t.year = 2 === r ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                t.day = ["numeric", "2-digit"][r - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
            case "e":
                if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
            case "c":
                if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
            case "a":
                t.hour12 = !0;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                break;
            case "H":
                t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                break;
            case "K":
                t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                break;
            case "k":
                t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                t.minute = ["numeric", "2-digit"][r - 1];
                break;
            case "s":
                t.second = ["numeric", "2-digit"][r - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                t.timeZoneName = r < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
        }
        return ""
    })), t
}
var P = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
    S = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    I = /^(@+)?(\+|#+)?[rs]?$/g,
    R = /(\*)(0+)|(#+)(0+)|(0+)/g,
    C = /^(0+)$/;

function O(e) {
    var t = {};
    return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(I, (function(e, r, n) {
        return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
    })), t
}

function M(e) {
    switch (e) {
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            }
    }
}

function U(e) {
    var t;
    if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
        }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
        }, e = e.slice(1)), t) {
        var r = e.slice(0, 2);
        if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !C.test(e)) throw new Error("Malformed concise eng/scientific notation");
        t.minimumIntegerDigits = e.length
    }
    return t
}

function w(e) {
    return M(e) || {}
}

function D(e) {
    for (var t = {}, r = 0, n = e; r < n.length; r++) {
        var i = n[r];
        switch (i.stem) {
            case "percent":
            case "%":
                t.style = "percent";
                continue;
            case "%x100":
                t.style = "percent", t.scale = 100;
                continue;
            case "currency":
                t.style = "currency", t.currency = i.options[0];
                continue;
            case "group-off":
            case ",_":
                t.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                t.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                t.style = "unit", t.unit = i.options[0].replace(/^(.*?)-/, "");
                continue;
            case "compact-short":
            case "K":
                t.notation = "compact", t.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                t.notation = "compact", t.compactDisplay = "long";
                continue;
            case "scientific":
                t = c(c(c({}, t), {
                    notation: "scientific"
                }), i.options.reduce((function(e, t) {
                    return c(c({}, e), w(t))
                }), {}));
                continue;
            case "engineering":
                t = c(c(c({}, t), {
                    notation: "engineering"
                }), i.options.reduce((function(e, t) {
                    return c(c({}, e), w(t))
                }), {}));
                continue;
            case "notation-simple":
                t.notation = "standard";
                continue;
            case "unit-width-narrow":
                t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                t.currencyDisplay = "code", t.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                t.currencyDisplay = "name", t.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                t.currencyDisplay = "symbol";
                continue;
            case "scale":
                t.scale = parseFloat(i.options[0]);
                continue;
            case "rounding-mode-floor":
                t.roundingMode = "floor";
                continue;
            case "rounding-mode-ceiling":
                t.roundingMode = "ceil";
                continue;
            case "rounding-mode-down":
                t.roundingMode = "trunc";
                continue;
            case "rounding-mode-up":
                t.roundingMode = "expand";
                continue;
            case "rounding-mode-half-even":
                t.roundingMode = "halfEven";
                continue;
            case "rounding-mode-half-down":
                t.roundingMode = "halfTrunc";
                continue;
            case "rounding-mode-half-up":
                t.roundingMode = "halfExpand";
                continue;
            case "integer-width":
                if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                i.options[0].replace(R, (function(e, r, n, i, o, a) {
                    if (r) t.minimumIntegerDigits = n.length;
                    else {
                        if (i && o) throw new Error("We currently do not support maximum integer digits");
                        if (a) throw new Error("We currently do not support exact integer digits")
                    }
                    return ""
                }));
                continue
        }
        if (C.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
        else if (S.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(S, (function(e, r, n, i, o, a) {
                return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && a ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var o = i.options[0];
            "w" === o ? t = c(c({}, t), {
                trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = c(c({}, t), O(o)))
        } else if (I.test(i.stem)) t = c(c({}, t), O(i.stem));
        else {
            var a = M(i.stem);
            a && (t = c(c({}, t), a));
            var s = U(i.stem);
            s && (t = c(c({}, t), s))
        }
    }
    return t
}
var G, F = {
    "001": ["H", "h"],
    AC: ["H", "h", "hb", "hB"],
    AD: ["H", "hB"],
    AE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AI: ["H", "h", "hb", "hB"],
    AL: ["h", "H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AR: ["H", "h", "hB", "hb"],
    AS: ["h", "H"],
    AT: ["H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    AW: ["H", "hB"],
    AX: ["H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BB: ["h", "hb", "H", "hB"],
    BD: ["h", "hB", "H"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BG: ["H", "hB", "h"],
    BH: ["h", "hB", "hb", "H"],
    BI: ["H", "h"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BN: ["hb", "hB", "h", "H"],
    BO: ["H", "hB", "h", "hb"],
    BQ: ["H"],
    BR: ["H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    BT: ["h", "H"],
    BW: ["H", "h", "hb", "hB"],
    BY: ["H", "h"],
    BZ: ["H", "h", "hb", "hB"],
    CA: ["h", "hb", "H", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CD: ["hB", "H"],
    CF: ["H", "h", "hB"],
    CG: ["H", "hB"],
    CH: ["H", "hB", "h"],
    CI: ["H", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CL: ["H", "h", "hB", "hb"],
    CM: ["H", "h", "hB"],
    CN: ["H", "hB", "hb", "h"],
    CO: ["h", "H", "hB", "hb"],
    CP: ["H"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    CV: ["H", "hB"],
    CW: ["H", "hB"],
    CX: ["H", "h", "hb", "hB"],
    CY: ["h", "H", "hb", "hB"],
    CZ: ["H"],
    DE: ["H", "hB"],
    DG: ["H", "h", "hb", "hB"],
    DJ: ["h", "H"],
    DK: ["H"],
    DM: ["h", "hb", "H", "hB"],
    DO: ["h", "H", "hB", "hb"],
    DZ: ["h", "hB", "hb", "H"],
    EA: ["H", "h", "hB", "hb"],
    EC: ["H", "hB", "h", "hb"],
    EE: ["H", "hB"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    ER: ["h", "H"],
    ES: ["H", "hB", "h", "hb"],
    ET: ["hB", "hb", "h", "H"],
    FI: ["H"],
    FJ: ["h", "hb", "H", "hB"],
    FK: ["H", "h", "hb", "hB"],
    FM: ["h", "hb", "H", "hB"],
    FO: ["H", "h"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GE: ["H", "hB", "h"],
    GF: ["H", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GH: ["h", "H"],
    GI: ["H", "h", "hb", "hB"],
    GL: ["H", "h"],
    GM: ["h", "hb", "H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GQ: ["H", "hB", "h", "hb"],
    GR: ["h", "H", "hb", "hB"],
    GT: ["H", "h", "hB", "hb"],
    GU: ["h", "hb", "H", "hB"],
    GW: ["H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    HK: ["h", "hB", "hb", "H"],
    HN: ["H", "h", "hB", "hb"],
    HR: ["H", "hB"],
    HU: ["H", "h"],
    IC: ["H", "h", "hB", "hb"],
    ID: ["H"],
    IE: ["H", "h", "hb", "hB"],
    IL: ["H", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IN: ["h", "H"],
    IO: ["H", "h", "hb", "hB"],
    IQ: ["h", "hB", "hb", "H"],
    IR: ["hB", "H"],
    IS: ["H"],
    IT: ["H", "hB"],
    JE: ["H", "h", "hb", "hB"],
    JM: ["h", "hb", "H", "hB"],
    JO: ["h", "hB", "hb", "H"],
    JP: ["H", "K", "h"],
    KE: ["hB", "hb", "H", "h"],
    KG: ["H", "h", "hB", "hb"],
    KH: ["hB", "h", "H", "hb"],
    KI: ["h", "hb", "H", "hB"],
    KM: ["H", "h", "hB", "hb"],
    KN: ["h", "hb", "H", "hB"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    KW: ["h", "hB", "hb", "H"],
    KY: ["h", "hb", "H", "hB"],
    KZ: ["H", "hB"],
    LA: ["H", "hb", "hB", "h"],
    LB: ["h", "hB", "hb", "H"],
    LC: ["h", "hb", "H", "hB"],
    LI: ["H", "hB", "h"],
    LK: ["H", "h", "hB", "hb"],
    LR: ["h", "hb", "H", "hB"],
    LS: ["h", "H"],
    LT: ["H", "h", "hb", "hB"],
    LU: ["H", "h", "hB"],
    LV: ["H", "hB", "hb", "h"],
    LY: ["h", "hB", "hb", "H"],
    MA: ["H", "h", "hB", "hb"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    ME: ["H", "hB", "h"],
    MF: ["H", "hB"],
    MG: ["H", "h"],
    MH: ["h", "hb", "H", "hB"],
    MK: ["H", "h", "hb", "hB"],
    ML: ["H"],
    MM: ["hB", "hb", "H", "h"],
    MN: ["H", "h", "hb", "hB"],
    MO: ["h", "hB", "hb", "H"],
    MP: ["h", "hb", "H", "hB"],
    MQ: ["H", "hB"],
    MR: ["h", "hB", "hb", "H"],
    MS: ["H", "h", "hb", "hB"],
    MT: ["H", "h"],
    MU: ["H", "h"],
    MV: ["H", "h"],
    MW: ["h", "hb", "H", "hB"],
    MX: ["H", "h", "hB", "hb"],
    MY: ["hb", "hB", "h", "H"],
    MZ: ["H", "hB"],
    NA: ["h", "H", "hB", "hb"],
    NC: ["H", "hB"],
    NE: ["H"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NI: ["H", "h", "hB", "hb"],
    NL: ["H", "hB"],
    NO: ["H", "h"],
    NP: ["H", "h", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    OM: ["h", "hB", "hb", "H"],
    PA: ["h", "H", "hB", "hb"],
    PE: ["H", "hB", "h", "hb"],
    PF: ["H", "h", "hB"],
    PG: ["h", "H"],
    PH: ["h", "hB", "hb", "H"],
    PK: ["h", "hB", "H"],
    PL: ["H", "h"],
    PM: ["H", "hB"],
    PN: ["H", "h", "hb", "hB"],
    PR: ["h", "H", "hB", "hb"],
    PS: ["h", "hB", "hb", "H"],
    PT: ["H", "hB"],
    PW: ["h", "H"],
    PY: ["H", "h", "hB", "hb"],
    QA: ["h", "hB", "hb", "H"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    RS: ["H", "hB", "h"],
    RU: ["H"],
    RW: ["H", "h"],
    SA: ["h", "hB", "hb", "H"],
    SB: ["h", "hb", "H", "hB"],
    SC: ["H", "h", "hB"],
    SD: ["h", "hB", "hb", "H"],
    SE: ["H"],
    SG: ["h", "hb", "H", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SI: ["H", "hB"],
    SJ: ["H"],
    SK: ["H"],
    SL: ["h", "hb", "H", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    SO: ["h", "H"],
    SR: ["H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    ST: ["H", "hB"],
    SV: ["H", "h", "hB", "hb"],
    SX: ["H", "h", "hb", "hB"],
    SY: ["h", "hB", "hb", "H"],
    SZ: ["h", "hb", "H", "hB"],
    TA: ["H", "h", "hb", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TD: ["h", "H", "hB"],
    TF: ["H", "h", "hB"],
    TG: ["H", "hB"],
    TH: ["H", "h"],
    TJ: ["H", "h"],
    TL: ["H", "hB", "hb", "h"],
    TM: ["H", "h"],
    TN: ["h", "hB", "hb", "H"],
    TO: ["h", "H"],
    TR: ["H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    TW: ["hB", "hb", "h", "H"],
    TZ: ["hB", "hb", "H", "h"],
    UA: ["H", "hB", "h"],
    UG: ["hB", "hb", "H", "h"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    UY: ["H", "h", "hB", "hb"],
    UZ: ["H", "hB", "h"],
    VA: ["H", "h", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VE: ["h", "H", "hB", "hb"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    VN: ["H", "h"],
    VU: ["h", "H"],
    WF: ["H", "hB"],
    WS: ["h", "H"],
    XK: ["H", "hB", "h"],
    YE: ["h", "hB", "hb", "H"],
    YT: ["H", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    ZW: ["H", "h"],
    "af-ZA": ["H", "h", "hB", "hb"],
    "ar-001": ["h", "hB", "hb", "H"],
    "ca-ES": ["H", "h", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "hi-IN": ["hB", "h", "H"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    "ta-IN": ["hB", "h", "hb", "H"],
    "te-IN": ["hB", "h", "H"],
    "zu-ZA": ["H", "hB", "hb", "h"]
};

function k(e) {
    var t = e.hourCycle;
    if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle")
    }
    var r, n = e.language;
    return "root" !== n && (r = e.maximize().region), (F[r || ""] || F[n || ""] || F["".concat(n, "-001")] || F["001"])[0]
}
var V = new RegExp("^".concat(A.source, "*")),
    X = new RegExp("".concat(A.source, "*$"));

function x(e, t) {
    return {
        start: e,
        end: t
    }
}
var j = !!String.prototype.startsWith && "_a".startsWith("a", 1),
    K = !!String.fromCodePoint,
    Y = !!Object.fromEntries,
    Z = !!String.prototype.codePointAt,
    W = !!String.prototype.trimStart,
    z = !!String.prototype.trimEnd,
    J = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
    },
    Q = !0;
try {
    Q = "a" === (null === (G = oe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === G ? void 0 : G[0])
} catch (lt) {
    Q = !1
}
var q, $ = j ? function(e, t, r) {
        return e.startsWith(t, r)
    } : function(e, t, r) {
        return e.slice(r, r + t.length) === t
    },
    ee = K ? String.fromCodePoint : function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var r, n = "", i = e.length, o = 0; i > o;) {
            if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
        }
        return n
    },
    te = Y ? Object.fromEntries : function(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var i = n[r],
                o = i[0],
                a = i[1];
            t[o] = a
        }
        return t
    },
    re = Z ? function(e, t) {
        return e.codePointAt(t)
    } : function(e, t) {
        var r = e.length;
        if (!(t < 0 || t >= r)) {
            var n, i = e.charCodeAt(t);
            return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536
        }
    },
    ne = W ? function(e) {
        return e.trimStart()
    } : function(e) {
        return e.replace(V, "")
    },
    ie = z ? function(e) {
        return e.trimEnd()
    } : function(e) {
        return e.replace(X, "")
    };

function oe(e, t) {
    return new RegExp(e, t)
}
if (Q) {
    var ae = oe("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    q = function(e, t) {
        var r;
        return ae.lastIndex = t, null !== (r = ae.exec(e)[1]) && void 0 !== r ? r : ""
    }
} else q = function(e, t) {
    for (var r = [];;) {
        var n = re(e, t);
        if (void 0 === n || ue(n) || ce(n)) break;
        r.push(n), t += n >= 65536 ? 2 : 1
    }
    return ee.apply(void 0, r)
};
var se = function() {
    function e(e, t) {
        void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
        }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
    }
    return e.prototype.parse = function() {
        if (0 !== this.offset()) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1)
    }, e.prototype.parseMessage = function(e, t, r) {
        for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
                if ((s = this.parseArgument(e, r)).err) return s;
                n.push(s.val)
            } else {
                if (125 === o && e > 0) break;
                if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                    if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                        if (r) break;
                        return this.error(i.UNMATCHED_CLOSING_TAG, x(this.clonePosition(), this.clonePosition()))
                    }
                    if (60 === o && !this.ignoreTag && he(this.peek() || 0)) {
                        if ((s = this.parseTag(e, t)).err) return s;
                        n.push(s.val)
                    } else {
                        var s;
                        if ((s = this.parseLiteral(e, t)).err) return s;
                        n.push(s.val)
                    }
                } else {
                    var h = this.clonePosition();
                    this.bump(), n.push({
                        type: a.pound,
                        location: x(h, this.clonePosition())
                    })
                }
            }
        }
        return {
            val: n,
            err: null
        }
    }, e.prototype.parseTag = function(e, t) {
        var r = this.clonePosition();
        this.bump();
        var n = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
                type: a.literal,
                value: "<".concat(n, "/>"),
                location: x(r, this.clonePosition())
            },
            err: null
        };
        if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var s = o.val,
                h = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !he(this.char())) return this.error(i.INVALID_TAG, x(h, this.clonePosition()));
                var u = this.clonePosition();
                return n !== this.parseTagName() ? this.error(i.UNMATCHED_CLOSING_TAG, x(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                    val: {
                        type: a.tag,
                        value: n,
                        children: s,
                        location: x(r, this.clonePosition())
                    },
                    err: null
                } : this.error(i.INVALID_TAG, x(h, this.clonePosition())))
            }
            return this.error(i.UNCLOSED_TAG, x(r, this.clonePosition()))
        }
        return this.error(i.INVALID_TAG, x(r, this.clonePosition()))
    }, e.prototype.parseTagName = function() {
        var e, t = this.offset();
        for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
        return this.message.slice(t, this.offset())
    }, e.prototype.parseLiteral = function(e, t) {
        for (var r = this.clonePosition(), n = "";;) {
            var i = this.tryParseQuote(t);
            if (i) n += i;
            else {
                var o = this.tryParseUnquoted(e, t);
                if (o) n += o;
                else {
                    var s = this.tryParseLeftAngleBracket();
                    if (!s) break;
                    n += s
                }
            }
        }
        var h = x(r, this.clonePosition());
        return {
            val: {
                type: a.literal,
                value: n,
                location: h
            },
            err: null
        }
    }, e.prototype.tryParseLeftAngleBracket = function() {
        return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (he(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
        var e
    }, e.prototype.tryParseQuote = function(e) {
        if (this.isEOF() || 39 !== this.char()) return null;
        switch (this.peek()) {
            case 39:
                return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
            default:
                return null
        }
        this.bump();
        var t = [this.char()];
        for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
                if (39 !== this.peek()) {
                    this.bump();
                    break
                }
                t.push(39), this.bump()
            } else t.push(r);
            this.bump()
        }
        return ee.apply(void 0, t)
    }, e.prototype.tryParseUnquoted = function(e, t) {
        if (this.isEOF()) return null;
        var r = this.char();
        return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), ee(r))
    }, e.prototype.parseArgument = function(e, t) {
        var r = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, x(r, this.clonePosition()));
        if (125 === this.char()) return this.bump(), this.error(i.EMPTY_ARGUMENT, x(r, this.clonePosition()));
        var n = this.parseIdentifierIfPossible().value;
        if (!n) return this.error(i.MALFORMED_ARGUMENT, x(r, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, x(r, this.clonePosition()));
        switch (this.char()) {
            case 125:
                return this.bump(), {
                    val: {
                        type: a.argument,
                        value: n,
                        location: x(r, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, x(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
                return this.error(i.MALFORMED_ARGUMENT, x(r, this.clonePosition()))
        }
    }, e.prototype.parseIdentifierIfPossible = function() {
        var e = this.clonePosition(),
            t = this.offset(),
            r = q(this.message, t),
            n = t + r.length;
        return this.bumpTo(n), {
            value: r,
            location: x(e, this.clonePosition())
        }
    }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
        var o, s = this.clonePosition(),
            u = this.parseIdentifierIfPossible().value,
            l = this.clonePosition();
        switch (u) {
            case "":
                return this.error(i.EXPECT_ARGUMENT_TYPE, x(s, l));
            case "number":
            case "date":
            case "time":
                this.bumpSpace();
                var f = null;
                if (this.bumpIf(",")) {
                    this.bumpSpace();
                    var p = this.clonePosition();
                    if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                    if (0 === (b = ie(y.val)).length) return this.error(i.EXPECT_ARGUMENT_STYLE, x(this.clonePosition(), this.clonePosition()));
                    f = {
                        style: b,
                        styleLocation: x(p, this.clonePosition())
                    }
                }
                if ((H = this.tryParseArgumentClose(n)).err) return H;
                var m = x(n, this.clonePosition());
                if (f && $(null == f ? void 0 : f.style, "::", 0)) {
                    var E = ne(f.style.slice(2));
                    if ("number" === u) return (y = this.parseNumberSkeletonFromString(E, f.styleLocation)).err ? y : {
                        val: {
                            type: a.number,
                            value: r,
                            location: m,
                            style: y.val
                        },
                        err: null
                    };
                    if (0 === E.length) return this.error(i.EXPECT_DATE_TIME_SKELETON, m);
                    var g = E;
                    this.locale && (g = function(e, t) {
                        for (var r = "", n = 0; n < e.length; n++) {
                            var i = e.charAt(n);
                            if ("j" === i) {
                                for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                var a = 1 + (1 & o),
                                    s = o < 2 ? 1 : 3 + (o >> 1),
                                    h = k(t);
                                for ("H" != h && "k" != h || (s = 0); s-- > 0;) r += "a";
                                for (; a-- > 0;) r = h + r
                            } else r += "J" === i ? "H" : i
                        }
                        return r
                    }(E, this.locale));
                    var b = {
                        type: h.dateTime,
                        pattern: g,
                        location: f.styleLocation,
                        parsedOptions: this.shouldParseSkeletons ? L(g) : {}
                    };
                    return {
                        val: {
                            type: "date" === u ? a.date : a.time,
                            value: r,
                            location: m,
                            style: b
                        },
                        err: null
                    }
                }
                return {
                    val: {
                        type: "number" === u ? a.number : "date" === u ? a.date : a.time,
                        value: r,
                        location: m,
                        style: null !== (o = null == f ? void 0 : f.style) && void 0 !== o ? o : null
                    },
                    err: null
                };
            case "plural":
            case "selectordinal":
            case "select":
                var d = this.clonePosition();
                if (this.bumpSpace(), !this.bumpIf(",")) return this.error(i.EXPECT_SELECT_ARGUMENT_OPTIONS, x(d, c({}, d)));
                this.bumpSpace();
                var T = this.parseIdentifierIfPossible(),
                    v = 0;
                if ("select" !== u && "offset" === T.value) {
                    if (!this.bumpIf(":")) return this.error(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, x(this.clonePosition(), this.clonePosition()));
                    var y;
                    if (this.bumpSpace(), (y = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                    this.bumpSpace(), T = this.parseIdentifierIfPossible(), v = y.val
                }
                var H, _ = this.tryParsePluralOrSelectOptions(e, u, t, T);
                if (_.err) return _;
                if ((H = this.tryParseArgumentClose(n)).err) return H;
                var B = x(n, this.clonePosition());
                return "select" === u ? {
                    val: {
                        type: a.select,
                        value: r,
                        options: te(_.val),
                        location: B
                    },
                    err: null
                } : {
                    val: {
                        type: a.plural,
                        value: r,
                        options: te(_.val),
                        offset: v,
                        pluralType: "plural" === u ? "cardinal" : "ordinal",
                        location: B
                    },
                    err: null
                };
            default:
                return this.error(i.INVALID_ARGUMENT_TYPE, x(s, l))
        }
    }, e.prototype.tryParseArgumentClose = function(e) {
        return this.isEOF() || 125 !== this.char() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, x(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
        })
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
                this.bump();
                var r = this.clonePosition();
                if (!this.bumpUntil("'")) return this.error(i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, x(r, this.clonePosition()));
                this.bump();
                break;
            case 123:
                e += 1, this.bump();
                break;
            case 125:
                if (!(e > 0)) return {
                    val: this.message.slice(t.offset, this.offset()),
                    err: null
                };
                e -= 1;
                break;
            default:
                this.bump()
        }
        return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
        }
    }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
        var r = [];
        try {
            r = function(e) {
                if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                for (var t = [], r = 0, n = e.split(P).filter((function(e) {
                        return e.length > 0
                    })); r < n.length; r++) {
                    var i = n[r].split("/");
                    if (0 === i.length) throw new Error("Invalid number skeleton");
                    for (var o = i[0], a = i.slice(1), s = 0, h = a; s < h.length; s++)
                        if (0 === h[s].length) throw new Error("Invalid number skeleton");
                    t.push({
                        stem: o,
                        options: a
                    })
                }
                return t
            }(e)
        } catch (n) {
            return this.error(i.INVALID_NUMBER_SKELETON, t)
        }
        return {
            val: {
                type: h.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? D(r) : {}
            },
            err: null
        }
    }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
        for (var o, a = !1, s = [], h = new Set, u = n.value, c = n.location;;) {
            if (0 === u.length) {
                var l = this.clonePosition();
                if ("select" === t || !this.bumpIf("=")) break;
                var f = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_SELECTOR, i.INVALID_PLURAL_ARGUMENT_SELECTOR);
                if (f.err) return f;
                c = x(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
            }
            if (h.has(u)) return this.error("select" === t ? i.DUPLICATE_SELECT_ARGUMENT_SELECTOR : i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === u && (a = !0), this.bumpSpace();
            var p = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, x(this.clonePosition(), this.clonePosition()));
            var m = this.parseMessage(e + 1, t, r);
            if (m.err) return m;
            var E = this.tryParseArgumentClose(p);
            if (E.err) return E;
            s.push([u, {
                value: m.val,
                location: x(p, this.clonePosition())
            }]), h.add(u), this.bumpSpace(), u = (o = this.parseIdentifierIfPossible()).value, c = o.location
        }
        return 0 === s.length ? this.error("select" === t ? i.EXPECT_SELECT_ARGUMENT_SELECTOR : i.EXPECT_PLURAL_ARGUMENT_SELECTOR, x(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(i.MISSING_OTHER_CLAUSE, x(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
        }
    }, e.prototype.tryParseDecimalInteger = function(e, t) {
        var r = 1,
            n = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (r = -1);
        for (var i = !1, o = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            i = !0, o = 10 * o + (a - 48), this.bump()
        }
        var s = x(n, this.clonePosition());
        return i ? J(o *= r) ? {
            val: o,
            err: null
        } : this.error(t, s) : this.error(e, s)
    }, e.prototype.offset = function() {
        return this.position.offset
    }, e.prototype.isEOF = function() {
        return this.offset() === this.message.length
    }, e.prototype.clonePosition = function() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        }
    }, e.prototype.char = function() {
        var e = this.position.offset;
        if (e >= this.message.length) throw Error("out of bound");
        var t = re(this.message, e);
        if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        return t
    }, e.prototype.error = function(e, t) {
        return {
            val: null,
            err: {
                kind: e,
                message: this.message,
                location: t
            }
        }
    }, e.prototype.bump = function() {
        if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
        }
    }, e.prototype.bumpIf = function(e) {
        if ($(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
        }
        return !1
    }, e.prototype.bumpUntil = function(e) {
        var t = this.offset(),
            r = this.message.indexOf(e, t);
        return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
    }, e.prototype.bumpTo = function(e) {
        if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
        }
    }, e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && ue(this.char());) this.bump()
    }, e.prototype.peek = function() {
        if (this.isEOF()) return null;
        var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
        return null != r ? r : null
    }, e
}();

function he(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function ue(e) {
    return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
}

function ce(e) {
    return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
}

function le(e) {
    e.forEach((function(e) {
        if (delete e.location, T(e) || v(e))
            for (var t in e.options) delete e.options[t].location, le(e.options[t].value);
        else g(e) && _(e.style) || (b(e) || d(e)) && B(e.style) ? delete e.style.location : H(e) && le(e.children)
    }))
}

function fe(e, t) {
    void 0 === t && (t = {}), t = c({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
    }, t);
    var r = new se(e, t).parse();
    if (r.err) {
        var n = SyntaxError(i[r.err.kind]);
        throw n.location = r.err.location, n.originalMessage = r.err.message, n
    }
    return (null == t ? void 0 : t.captureLocation) || le(r.val), r.val
}

function pe(e, t) {
    var r = t && t.cache ? t.cache : He,
        n = t && t.serializer ? t.serializer : de;
    return (t && t.strategy ? t.strategy : be)(e, {
        cache: r,
        serializer: n
    })
}

function me(e, t, r, n) {
    var i, o = null == (i = n) || "number" == typeof i || "boolean" == typeof i ? n : r(n),
        a = t.get(o);
    return void 0 === a && (a = e.call(this, n), t.set(o, a)), a
}

function Ee(e, t, r) {
    var n = Array.prototype.slice.call(arguments, 3),
        i = r(n),
        o = t.get(i);
    return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
}

function ge(e, t, r, n, i) {
    return r.bind(t, e, n, i)
}

function be(e, t) {
    return ge(e, this, 1 === e.length ? me : Ee, t.cache.create(), t.serializer)
}
var de = function() {
    return JSON.stringify(arguments)
};

function Te() {
    this.cache = Object.create(null)
}
Te.prototype.get = function(e) {
    return this.cache[e]
}, Te.prototype.set = function(e, t) {
    this.cache[e] = t
};
var ve, ye, He = {
        create: function() {
            return new Te
        }
    },
    _e = {
        variadic: function(e, t) {
            return ge(e, this, Ee, t.cache.create(), t.serializer)
        },
        monadic: function(e, t) {
            return ge(e, this, me, t.cache.create(), t.serializer)
        }
    };
(ye = ve || (ve = {})).MISSING_VALUE = "MISSING_VALUE", ye.INVALID_VALUE = "INVALID_VALUE", ye.MISSING_INTL_API = "MISSING_INTL_API";
var Be, Ae, Ne = function(e) {
        function t(t, r, n) {
            var i = e.call(this, t) || this;
            return i.code = r, i.originalMessage = n, i
        }
        return n(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
        }, t
    }(Error),
    Le = function(e) {
        function t(t, r, n, i) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), ve.INVALID_VALUE, i) || this
        }
        return n(t, e), t
    }(Ne),
    Pe = function(e) {
        function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), ve.INVALID_VALUE, n) || this
        }
        return n(t, e), t
    }(Ne),
    Se = function(e) {
        function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), ve.MISSING_VALUE, r) || this
        }
        return n(t, e), t
    }(Ne);

function Ie(e) {
    return "function" == typeof e
}

function Re(e, t, r, n, i, o, a) {
    if (1 === e.length && m(e[0])) return [{
        type: Be.literal,
        value: e[0].value
    }];
    for (var s = [], h = 0, u = e; h < u.length; h++) {
        var c = u[h];
        if (m(c)) s.push({
            type: Be.literal,
            value: c.value
        });
        else if (y(c)) "number" == typeof o && s.push({
            type: Be.literal,
            value: r.getNumberFormat(t).format(o)
        });
        else {
            var l = c.value;
            if (!i || !(l in i)) throw new Se(l, a);
            var f = i[l];
            if (E(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
                type: "string" == typeof f ? Be.literal : Be.object,
                value: f
            });
            else if (b(c)) {
                var p = "string" == typeof c.style ? n.date[c.style] : B(c.style) ? c.style.parsedOptions : void 0;
                s.push({
                    type: Be.literal,
                    value: r.getDateTimeFormat(t, p).format(f)
                })
            } else if (d(c)) p = "string" == typeof c.style ? n.time[c.style] : B(c.style) ? c.style.parsedOptions : n.time.medium, s.push({
                type: Be.literal,
                value: r.getDateTimeFormat(t, p).format(f)
            });
            else if (g(c))(p = "string" == typeof c.style ? n.number[c.style] : _(c.style) ? c.style.parsedOptions : void 0) && p.scale && (f *= p.scale || 1), s.push({
                type: Be.literal,
                value: r.getNumberFormat(t, p).format(f)
            });
            else {
                if (H(c)) {
                    var A = c.children,
                        N = c.value,
                        L = i[N];
                    if (!Ie(L)) throw new Pe(N, "function", a);
                    var P = L(Re(A, t, r, n, i, o).map((function(e) {
                        return e.value
                    })));
                    Array.isArray(P) || (P = [P]), s.push.apply(s, P.map((function(e) {
                        return {
                            type: "string" == typeof e ? Be.literal : Be.object,
                            value: e
                        }
                    })))
                }
                if (T(c)) {
                    if (!(S = c.options[f] || c.options.other)) throw new Le(c.value, f, Object.keys(c.options), a);
                    s.push.apply(s, Re(S.value, t, r, n, i))
                } else if (v(c)) {
                    var S;
                    if (!(S = c.options["=".concat(f)])) {
                        if (!Intl.PluralRules) throw new Ne('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ve.MISSING_INTL_API, a);
                        var I = r.getPluralRules(t, {
                            type: c.pluralType
                        }).select(f - (c.offset || 0));
                        S = c.options[I] || c.options.other
                    }
                    if (!S) throw new Le(c.value, f, Object.keys(c.options), a);
                    s.push.apply(s, Re(S.value, t, r, n, i, f - (c.offset || 0)))
                }
            }
        }
    }
    return (R = s).length < 2 ? R : R.reduce((function(e, t) {
        var r = e[e.length - 1];
        return r && r.type === Be.literal && t.type === Be.literal ? r.value += t.value : e.push(t), e
    }), []);
    var R
}

function Ce(e) {
    return {
        create: function() {
            return {
                get: function(t) {
                    return e[t]
                },
                set: function(t, r) {
                    e[t] = r
                }
            }
        }
    }
}(Ae = Be || (Be = {}))[Ae.literal = 0] = "literal", Ae[Ae.object = 1] = "object";
var Oe, Me, Ue = function() {
    function e(t, r, n, i) {
        var o, a, s, h = this;
        if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }, this.format = function(e) {
                var t = h.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var r = t.reduce((function(e, t) {
                    return e.length && t.type === Be.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                }), []);
                return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
                return Re(h.ast, h.locales, h.formatters, h.formats, e, void 0, h.message)
            }, this.resolvedOptions = function() {
                var e;
                return {
                    locale: (null === (e = h.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(h.locales)[0]
                }
            }, this.getAst = function() {
                return h.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = i || {};
            u.formatters;
            var p = l(u, ["formatters"]);
            this.ast = e.__parse(t, c(c({}, p), {
                locale: this.resolvedLocale
            }))
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = (a = e.formats, (s = n) ? Object.keys(a).reduce((function(e, t) {
            var r, n;
            return e[t] = (r = a[t], (n = s[t]) ? c(c(c({}, r || {}), n || {}), Object.keys(r).reduce((function(e, t) {
                return e[t] = c(c({}, r[t]), n[t] || {}), e
            }), {})) : r), e
        }), c({}, a)) : a), this.formatters = i && i.formatters || (void 0 === (o = this.formatterCache) && (o = {
            number: {},
            dateTime: {},
            pluralRules: {}
        }), {
            getNumberFormat: pe((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, f([void 0], t, !1)))
            }), {
                cache: Ce(o.number),
                strategy: _e.variadic
            }),
            getDateTimeFormat: pe((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, f([void 0], t, !1)))
            }), {
                cache: Ce(o.dateTime),
                strategy: _e.variadic
            }),
            getPluralRules: pe((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, f([void 0], t, !1)))
            }), {
                cache: Ce(o.pluralRules),
                strategy: _e.variadic
            })
        })
    }
    return Object.defineProperty(e, "defaultLocale", {
        get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
        },
        enumerable: !1,
        configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
        if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
        }
    }, e.__parse = fe, e.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: "currency"
            },
            percent: {
                style: "percent"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    }, e
}();
(Me = Oe || (Oe = {})).FORMAT_ERROR = "FORMAT_ERROR", Me.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", Me.INVALID_CONFIG = "INVALID_CONFIG", Me.MISSING_DATA = "MISSING_DATA", Me.MISSING_TRANSLATION = "MISSING_TRANSLATION";
var we = function(e) {
        function t(r, n, i) {
            var o = this,
                a = i ? i instanceof Error ? i : new Error(String(i)) : void 0;
            return (o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, t), o
        }
        return n(t, e), t
    }(Error),
    De = function(e) {
        function t(t, r) {
            return e.call(this, Oe.UNSUPPORTED_FORMATTER, t, r) || this
        }
        return n(t, e), t
    }(we),
    Ge = function(e) {
        function t(t, r) {
            return e.call(this, Oe.INVALID_CONFIG, t, r) || this
        }
        return n(t, e), t
    }(we),
    Fe = function(e) {
        function t(t, r) {
            return e.call(this, Oe.MISSING_DATA, t, r) || this
        }
        return n(t, e), t
    }(we),
    ke = function(e) {
        function t(t, r, n) {
            var i = e.call(this, Oe.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return i.locale = r, i
        }
        return n(t, e), t
    }(we),
    Ve = function(e) {
        function t(t, r, n, i) {
            var o = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, i) || this;
            return o.descriptor = n, o.locale = r, o
        }
        return n(t, e), t
    }(ke),
    Xe = function(e) {
        function t(t, r) {
            var n = e.call(this, Oe.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
                var t;
                return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
        }
        return n(t, e), t
    }(we);

function xe(e, t, r) {
    return void 0 === r && (r = {}), t.reduce((function(t, n) {
        return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
    }), {})
}
var je = {
    formats: {},
    messages: {},
    timeZone: void 0,
    defaultLocale: "en",
    defaultFormats: {},
    fallbackOnEmptyString: !0,
    onError: function(e) {},
    onWarn: function(e) {}
};

function Ke() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    }
}

function Ye(e) {
    return {
        create: function() {
            return {
                get: function(t) {
                    return e[t]
                },
                set: function(t, r) {
                    e[t] = r
                }
            }
        }
    }
}

function Ze(e) {
    void 0 === e && (e = {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    });
    var t = Intl.RelativeTimeFormat,
        r = Intl.ListFormat,
        n = Intl.DisplayNames,
        i = pe((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.DateTimeFormat).bind.apply(e, f([void 0], t, !1)))
        }), {
            cache: Ye(e.dateTime),
            strategy: _e.variadic
        }),
        o = pe((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.NumberFormat).bind.apply(e, f([void 0], t, !1)))
        }), {
            cache: Ye(e.number),
            strategy: _e.variadic
        }),
        a = pe((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.PluralRules).bind.apply(e, f([void 0], t, !1)))
        }), {
            cache: Ye(e.pluralRules),
            strategy: _e.variadic
        });
    return {
        getDateTimeFormat: i,
        getNumberFormat: o,
        getMessageFormat: pe((function(e, t, r, n) {
            return new Ue(e, t, r, c({
                formatters: {
                    getNumberFormat: o,
                    getDateTimeFormat: i,
                    getPluralRules: a
                }
            }, n || {}))
        }), {
            cache: Ye(e.message),
            strategy: _e.variadic
        }),
        getRelativeTimeFormat: pe((function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new(t.bind.apply(t, f([void 0], e, !1)))
        }), {
            cache: Ye(e.relativeTime),
            strategy: _e.variadic
        }),
        getPluralRules: a,
        getListFormat: pe((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(r.bind.apply(r, f([void 0], e, !1)))
        }), {
            cache: Ye(e.list),
            strategy: _e.variadic
        }),
        getDisplayNames: pe((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(n.bind.apply(n, f([void 0], e, !1)))
        }), {
            cache: Ye(e.displayNames),
            strategy: _e.variadic
        })
    }
}

function We(e, t, r, n) {
    var i, o = e && e[t];
    if (o && (i = o[r]), i) return i;
    n(new De("No ".concat(t, " format named: ").concat(r)))
}

function ze(e) {
    p(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
}
var Je = c(c({}, je), {
    textComponent: e.Fragment
});

function Qe(t) {
    return function(r) {
        return t(e.Children.toArray(r))
    }
}

function qe(e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    var r = Object.keys(e),
        n = Object.keys(t),
        i = r.length;
    if (n.length !== i) return !1;
    for (var o = 0; o < i; o++) {
        var a = r[o];
        if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
    }
    return !0
}
var $e, et, tt, rt, nt = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? e.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = e.createContext(null)),
    it = nt.Consumer,
    ot = nt.Provider,
    at = nt;

function st(r, n) {
    var i, o = n || {},
        a = o.intlPropName,
        s = void 0 === a ? "intl" : a,
        h = o.forwardRef,
        u = void 0 !== h && h,
        l = o.enforceContext,
        f = void 0 === l || l,
        p = function(t) {
            return e.createElement(it, null, (function(n) {
                var i;
                f && ze(n);
                var o = ((i = {})[s] = n, i);
                return e.createElement(r, c({}, t, o, {
                    ref: u ? t.forwardedRef : null
                }))
            }))
        };
    return p.displayName = "injectIntl(".concat((i = r).displayName || i.name || "Component", ")"), p.WrappedComponent = r, t(u ? e.forwardRef((function(t, r) {
        return e.createElement(p, c({}, t, {
            forwardedRef: r
        }))
    })) : p, r)
}

function ht() {
    var t = e.useContext(at);
    return ze(t), t
}

function ut(e) {
    var t = function(t) {
        var r = ht(),
            n = t.value,
            i = t.children,
            o = l(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
        return i("formatDate" === e ? r.formatDateToParts(a, o) : r.formatTimeToParts(a, o))
    };
    return t.displayName = tt[e], t
}

function ct(t) {
    var r = function(r) {
        var n = ht(),
            i = r.value,
            o = r.children,
            a = l(r, ["value", "children"]),
            s = n[t](i, a);
        if ("function" == typeof o) return o(s);
        var h = n.textComponent || e.Fragment;
        return e.createElement(h, null, s)
    };
    return r.displayName = $e[t], r
}(et = $e || ($e = {})).formatDate = "FormattedDate", et.formatTime = "FormattedTime", et.formatNumber = "FormattedNumber", et.formatList = "FormattedList", et.formatDisplayName = "FormattedDisplayName", (rt = tt || (tt = {})).formatDate = "FormattedDateParts", rt.formatTime = "FormattedTimeParts", rt.formatNumber = "FormattedNumberParts", rt.formatList = "FormattedListParts", ct("formatDate"), ct("formatTime"), ct("formatNumber"), ct("formatList"), ct("formatDisplayName"), ut("formatDate"), ut("formatTime");
export {
    je as D, ve as E, Ne as F, Ue as I, Xe as M, ot as P, a as T, l as _, p as a, c as b, Ve as c, ke as d, Ze as e, xe as f, We as g, Ge as h, st as i, Fe as j, Je as k, Ie as l, Qe as m, f as n, n as o, ze as p, Ke as q, qe as s, ht as u
};