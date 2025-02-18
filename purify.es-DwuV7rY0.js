const {
    entries: e,
    setPrototypeOf: t,
    isFrozen: n,
    getPrototypeOf: o,
    getOwnPropertyDescriptor: r
} = Object;
let {
    freeze: i,
    seal: a,
    create: l
} = Object, {
    apply: c,
    construct: s
} = "undefined" != typeof Reflect && Reflect;
i || (i = function(e) {
    return e
}), a || (a = function(e) {
    return e
}), c || (c = function(e, t, n) {
    return e.apply(t, n)
}), s || (s = function(e, t) {
    return new e(...t)
});
const u = b(Array.prototype.forEach),
    m = b(Array.prototype.pop),
    p = b(Array.prototype.push),
    f = b(String.prototype.toLowerCase),
    d = b(String.prototype.toString),
    h = b(String.prototype.match),
    g = b(String.prototype.replace),
    T = b(String.prototype.indexOf),
    y = b(String.prototype.trim),
    E = b(Object.prototype.hasOwnProperty),
    _ = b(RegExp.prototype.test),
    A = (N = TypeError, function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return s(N, t)
    });
var N;

function b(e) {
    return function(t) {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
        return c(e, t, o)
    }
}

function S(e, o) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
    t && t(e, null);
    let i = o.length;
    for (; i--;) {
        let t = o[i];
        if ("string" == typeof t) {
            const e = r(t);
            e !== t && (n(o) || (o[i] = e), t = e)
        }
        e[t] = !0
    }
    return e
}

function R(e) {
    for (let t = 0; t < e.length; t++) E(e, t) || (e[t] = null);
    return e
}

function w(t) {
    const n = l(null);
    for (const [o, r] of e(t)) E(t, o) && (Array.isArray(r) ? n[o] = R(r) : r && "object" == typeof r && r.constructor === Object ? n[o] = w(r) : n[o] = r);
    return n
}

function C(e, t) {
    for (; null !== e;) {
        const n = r(e, t);
        if (n) {
            if (n.get) return b(n.get);
            if ("function" == typeof n.value) return b(n.value)
        }
        e = o(e)
    }
    return function() {
        return null
    }
}
const L = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    D = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    v = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    O = i(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    x = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    k = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    I = i(["#text"]),
    M = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    U = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    P = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    F = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    H = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    z = a(/<%[\w\W]*|[\w\W]*%>/gm),
    B = a(/\${[\w\W]*}/gm),
    W = a(/^data-[\-\w.\u00B7-\uFFFF]/),
    G = a(/^aria-[\-\w]+$/),
    Y = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    j = a(/^(?:\w+script|data):/i),
    X = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    q = a(/^html$/i),
    $ = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
var K = Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: H,
        ERB_EXPR: z,
        TMPLIT_EXPR: B,
        DATA_ATTR: W,
        ARIA_ATTR: G,
        IS_ALLOWED_URI: Y,
        IS_SCRIPT_OR_DATA: j,
        ATTR_WHITESPACE: X,
        DOCTYPE_NAME: q,
        CUSTOM_ELEMENT: $
    }),
    V = function t() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window;
        const o = e => t(e);
        if (o.version = "3.1.6", o.removed = [], !n || !n.document || 9 !== n.document.nodeType) return o.isSupported = !1, o;
        let {
            document: r
        } = n;
        const a = r,
            c = a.currentScript,
            {
                DocumentFragment: s,
                HTMLTemplateElement: N,
                Node: b,
                Element: R,
                NodeFilter: H,
                NamedNodeMap: z = n.NamedNodeMap || n.MozNamedAttrMap,
                HTMLFormElement: B,
                DOMParser: W,
                trustedTypes: G
            } = n,
            j = R.prototype,
            X = C(j, "cloneNode"),
            $ = C(j, "remove"),
            V = C(j, "nextSibling"),
            Z = C(j, "childNodes"),
            J = C(j, "parentNode");
        if ("function" == typeof N) {
            const e = r.createElement("template");
            e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
        }
        let Q, ee = "";
        const {
            implementation: te,
            createNodeIterator: ne,
            createDocumentFragment: oe,
            getElementsByTagName: re
        } = r, {
            importNode: ie
        } = a;
        let ae = {};
        o.isSupported = "function" == typeof e && "function" == typeof J && te && void 0 !== te.createHTMLDocument;
        const {
            MUSTACHE_EXPR: le,
            ERB_EXPR: ce,
            TMPLIT_EXPR: se,
            DATA_ATTR: ue,
            ARIA_ATTR: me,
            IS_SCRIPT_OR_DATA: pe,
            ATTR_WHITESPACE: fe,
            CUSTOM_ELEMENT: de
        } = K;
        let {
            IS_ALLOWED_URI: he
        } = K, ge = null;
        const Te = S({}, [...L, ...D, ...v, ...x, ...I]);
        let ye = null;
        const Ee = S({}, [...M, ...U, ...P, ...F]);
        let _e = Object.seal(l(null, {
                tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1
                }
            })),
            Ae = null,
            Ne = null,
            be = !0,
            Se = !0,
            Re = !1,
            we = !0,
            Ce = !1,
            Le = !0,
            De = !1,
            ve = !1,
            Oe = !1,
            xe = !1,
            ke = !1,
            Ie = !1,
            Me = !0,
            Ue = !1,
            Pe = !0,
            Fe = !1,
            He = {},
            ze = null;
        const Be = S({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        let We = null;
        const Ge = S({}, ["audio", "video", "img", "source", "image", "track"]);
        let Ye = null;
        const je = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            Xe = "http://www.w3.org/1998/Math/MathML",
            qe = "http://www.w3.org/2000/svg",
            $e = "http://www.w3.org/1999/xhtml";
        let Ke = $e,
            Ve = !1,
            Ze = null;
        const Je = S({}, [Xe, qe, $e], d);
        let Qe = null;
        const et = ["application/xhtml+xml", "text/html"];
        let tt = null,
            nt = null;
        const ot = r.createElement("form"),
            rt = function(e) {
                return e instanceof RegExp || e instanceof Function
            },
            it = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!nt || nt !== e) {
                    if (e && "object" == typeof e || (e = {}), e = w(e), Qe = -1 === et.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, tt = "application/xhtml+xml" === Qe ? d : f, ge = E(e, "ALLOWED_TAGS") ? S({}, e.ALLOWED_TAGS, tt) : Te, ye = E(e, "ALLOWED_ATTR") ? S({}, e.ALLOWED_ATTR, tt) : Ee, Ze = E(e, "ALLOWED_NAMESPACES") ? S({}, e.ALLOWED_NAMESPACES, d) : Je, Ye = E(e, "ADD_URI_SAFE_ATTR") ? S(w(je), e.ADD_URI_SAFE_ATTR, tt) : je, We = E(e, "ADD_DATA_URI_TAGS") ? S(w(Ge), e.ADD_DATA_URI_TAGS, tt) : Ge, ze = E(e, "FORBID_CONTENTS") ? S({}, e.FORBID_CONTENTS, tt) : Be, Ae = E(e, "FORBID_TAGS") ? S({}, e.FORBID_TAGS, tt) : {}, Ne = E(e, "FORBID_ATTR") ? S({}, e.FORBID_ATTR, tt) : {}, He = !!E(e, "USE_PROFILES") && e.USE_PROFILES, be = !1 !== e.ALLOW_ARIA_ATTR, Se = !1 !== e.ALLOW_DATA_ATTR, Re = e.ALLOW_UNKNOWN_PROTOCOLS || !1, we = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ce = e.SAFE_FOR_TEMPLATES || !1, Le = !1 !== e.SAFE_FOR_XML, De = e.WHOLE_DOCUMENT || !1, xe = e.RETURN_DOM || !1, ke = e.RETURN_DOM_FRAGMENT || !1, Ie = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, Me = !1 !== e.SANITIZE_DOM, Ue = e.SANITIZE_NAMED_PROPS || !1, Pe = !1 !== e.KEEP_CONTENT, Fe = e.IN_PLACE || !1, he = e.ALLOWED_URI_REGEXP || Y, Ke = e.NAMESPACE || $e, _e = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (_e.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (_e.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (_e.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ce && (Se = !1), ke && (xe = !0), He && (ge = S({}, I), ye = [], !0 === He.html && (S(ge, L), S(ye, M)), !0 === He.svg && (S(ge, D), S(ye, U), S(ye, F)), !0 === He.svgFilters && (S(ge, v), S(ye, U), S(ye, F)), !0 === He.mathMl && (S(ge, x), S(ye, P), S(ye, F))), e.ADD_TAGS && (ge === Te && (ge = w(ge)), S(ge, e.ADD_TAGS, tt)), e.ADD_ATTR && (ye === Ee && (ye = w(ye)), S(ye, e.ADD_ATTR, tt)), e.ADD_URI_SAFE_ATTR && S(Ye, e.ADD_URI_SAFE_ATTR, tt), e.FORBID_CONTENTS && (ze === Be && (ze = w(ze)), S(ze, e.FORBID_CONTENTS, tt)), Pe && (ge["#text"] = !0), De && S(ge, ["html", "head", "body"]), ge.table && (S(ge, ["tbody"]), delete Ae.tbody), e.TRUSTED_TYPES_POLICY) {
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        Q = e.TRUSTED_TYPES_POLICY, ee = Q.createHTML("")
                    } else void 0 === Q && (Q = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null;
                        const o = "data-tt-policy-suffix";
                        t && t.hasAttribute(o) && (n = t.getAttribute(o));
                        const r = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(r, {
                                createHTML: e => e,
                                createScriptURL: e => e
                            })
                        } catch (i) {
                            return null
                        }
                    }(G, c)), null !== Q && "string" == typeof ee && (ee = Q.createHTML(""));
                    i && i(e), nt = e
                }
            },
            at = S({}, ["mi", "mo", "mn", "ms", "mtext"]),
            lt = S({}, ["foreignobject", "annotation-xml"]),
            ct = S({}, ["title", "style", "font", "a", "script"]),
            st = S({}, [...D, ...v, ...O]),
            ut = S({}, [...x, ...k]),
            mt = function(e) {
                p(o.removed, {
                    element: e
                });
                try {
                    J(e).removeChild(e)
                } catch (t) {
                    $(e)
                }
            },
            pt = function(e, t) {
                try {
                    p(o.removed, {
                        attribute: t.getAttributeNode(e),
                        from: t
                    })
                } catch (n) {
                    p(o.removed, {
                        attribute: null,
                        from: t
                    })
                }
                if (t.removeAttribute(e), "is" === e && !ye[e])
                    if (xe || ke) try {
                        mt(t)
                    } catch (n) {} else try {
                        t.setAttribute(e, "")
                    } catch (n) {}
            },
            ft = function(e) {
                let t = null,
                    n = null;
                if (Oe) e = "<remove></remove>" + e;
                else {
                    const t = h(e, /^[\r\n\t ]+/);
                    n = t && t[0]
                }
                "application/xhtml+xml" === Qe && Ke === $e && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                const o = Q ? Q.createHTML(e) : e;
                if (Ke === $e) try {
                    t = (new W).parseFromString(o, Qe)
                } catch (a) {}
                if (!t || !t.documentElement) {
                    t = te.createDocument(Ke, "template", null);
                    try {
                        t.documentElement.innerHTML = Ve ? ee : o
                    } catch (a) {}
                }
                const i = t.body || t.documentElement;
                return e && n && i.insertBefore(r.createTextNode(n), i.childNodes[0] || null), Ke === $e ? re.call(t, De ? "html" : "body")[0] : De ? t.documentElement : i
            },
            dt = function(e) {
                return ne.call(e.ownerDocument || e, e, H.SHOW_ELEMENT | H.SHOW_COMMENT | H.SHOW_TEXT | H.SHOW_PROCESSING_INSTRUCTION | H.SHOW_CDATA_SECTION, null)
            },
            ht = function(e) {
                return e instanceof B && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof z) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            gt = function(e) {
                return "function" == typeof b && e instanceof b
            },
            Tt = function(e, t, n) {
                ae[e] && u(ae[e], (e => {
                    e.call(o, t, n, nt)
                }))
            },
            yt = function(e) {
                let t = null;
                if (Tt("beforeSanitizeElements", e, null), ht(e)) return mt(e), !0;
                const n = tt(e.nodeName);
                if (Tt("uponSanitizeElement", e, {
                        tagName: n,
                        allowedTags: ge
                    }), e.hasChildNodes() && !gt(e.firstElementChild) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent)) return mt(e), !0;
                if (7 === e.nodeType) return mt(e), !0;
                if (Le && 8 === e.nodeType && _(/<[/\w]/g, e.data)) return mt(e), !0;
                if (!ge[n] || Ae[n]) {
                    if (!Ae[n] && _t(n)) {
                        if (_e.tagNameCheck instanceof RegExp && _(_e.tagNameCheck, n)) return !1;
                        if (_e.tagNameCheck instanceof Function && _e.tagNameCheck(n)) return !1
                    }
                    if (Pe && !ze[n]) {
                        const t = J(e) || e.parentNode,
                            n = Z(e) || e.childNodes;
                        if (n && t)
                            for (let o = n.length - 1; o >= 0; --o) {
                                const r = X(n[o], !0);
                                r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, V(e))
                            }
                    }
                    return mt(e), !0
                }
                return e instanceof R && ! function(e) {
                    let t = J(e);
                    t && t.tagName || (t = {
                        namespaceURI: Ke,
                        tagName: "template"
                    });
                    const n = f(e.tagName),
                        o = f(t.tagName);
                    return !!Ze[e.namespaceURI] && (e.namespaceURI === qe ? t.namespaceURI === $e ? "svg" === n : t.namespaceURI === Xe ? "svg" === n && ("annotation-xml" === o || at[o]) : Boolean(st[n]) : e.namespaceURI === Xe ? t.namespaceURI === $e ? "math" === n : t.namespaceURI === qe ? "math" === n && lt[o] : Boolean(ut[n]) : e.namespaceURI === $e ? !(t.namespaceURI === qe && !lt[o]) && !(t.namespaceURI === Xe && !at[o]) && !ut[n] && (ct[n] || !st[n]) : !("application/xhtml+xml" !== Qe || !Ze[e.namespaceURI]))
                }(e) ? (mt(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !_(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ce && 3 === e.nodeType && (t = e.textContent, u([le, ce, se], (e => {
                    t = g(t, e, " ")
                })), e.textContent !== t && (p(o.removed, {
                    element: e.cloneNode()
                }), e.textContent = t)), Tt("afterSanitizeElements", e, null), !1) : (mt(e), !0)
            },
            Et = function(e, t, n) {
                if (Me && ("id" === t || "name" === t) && (n in r || n in ot)) return !1;
                if (Se && !Ne[t] && _(ue, t));
                else if (be && _(me, t));
                else if (!ye[t] || Ne[t]) {
                    if (!(_t(e) && (_e.tagNameCheck instanceof RegExp && _(_e.tagNameCheck, e) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(e)) && (_e.attributeNameCheck instanceof RegExp && _(_e.attributeNameCheck, t) || _e.attributeNameCheck instanceof Function && _e.attributeNameCheck(t)) || "is" === t && _e.allowCustomizedBuiltInElements && (_e.tagNameCheck instanceof RegExp && _(_e.tagNameCheck, n) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(n)))) return !1
                } else if (Ye[t]);
                else if (_(he, g(n, fe, "")));
                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== T(n, "data:") || !We[e])
                    if (Re && !_(pe, g(n, fe, "")));
                    else if (n) return !1;
                return !0
            },
            _t = function(e) {
                return "annotation-xml" !== e && h(e, de)
            },
            At = function(e) {
                Tt("beforeSanitizeAttributes", e, null);
                const {
                    attributes: t
                } = e;
                if (!t) return;
                const n = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: ye
                };
                let r = t.length;
                for (; r--;) {
                    const a = t[r],
                        {
                            name: l,
                            namespaceURI: c,
                            value: s
                        } = a,
                        p = tt(l);
                    let f = "value" === l ? s : y(s);
                    if (n.attrName = p, n.attrValue = f, n.keepAttr = !0, n.forceKeepAttr = void 0, Tt("uponSanitizeAttribute", e, n), f = n.attrValue, Le && _(/((--!?|])>)|<\/(style|title)/i, f)) {
                        pt(l, e);
                        continue
                    }
                    if (n.forceKeepAttr) continue;
                    if (pt(l, e), !n.keepAttr) continue;
                    if (!we && _(/\/>/i, f)) {
                        pt(l, e);
                        continue
                    }
                    Ce && u([le, ce, se], (e => {
                        f = g(f, e, " ")
                    }));
                    const d = tt(e.nodeName);
                    if (Et(d, p, f)) {
                        if (!Ue || "id" !== p && "name" !== p || (pt(l, e), f = "user-content-" + f), Q && "object" == typeof G && "function" == typeof G.getAttributeType)
                            if (c);
                            else switch (G.getAttributeType(d, p)) {
                                case "TrustedHTML":
                                    f = Q.createHTML(f);
                                    break;
                                case "TrustedScriptURL":
                                    f = Q.createScriptURL(f)
                            }
                        try {
                            c ? e.setAttributeNS(c, l, f) : e.setAttribute(l, f), ht(e) ? mt(e) : m(o.removed)
                        } catch (i) {}
                    }
                }
                Tt("afterSanitizeAttributes", e, null)
            },
            Nt = function e(t) {
                let n = null;
                const o = dt(t);
                for (Tt("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) Tt("uponSanitizeShadowNode", n, null), yt(n) || (n.content instanceof s && e(n.content), At(n));
                Tt("afterSanitizeShadowDOM", t, null)
            };
        return o.sanitize = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = null,
                r = null,
                i = null,
                l = null;
            if (Ve = !e, Ve && (e = "\x3c!--\x3e"), "string" != typeof e && !gt(e)) {
                if ("function" != typeof e.toString) throw A("toString is not a function");
                if ("string" != typeof(e = e.toString())) throw A("dirty is not a string, aborting")
            }
            if (!o.isSupported) return e;
            if (ve || it(t), o.removed = [], "string" == typeof e && (Fe = !1), Fe) {
                if (e.nodeName) {
                    const t = tt(e.nodeName);
                    if (!ge[t] || Ae[t]) throw A("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (e instanceof b) n = ft("\x3c!----\x3e"), r = n.ownerDocument.importNode(e, !0), 1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? n = r : n.appendChild(r);
            else {
                if (!xe && !Ce && !De && -1 === e.indexOf("<")) return Q && Ie ? Q.createHTML(e) : e;
                if (n = ft(e), !n) return xe ? null : Ie ? ee : ""
            }
            n && Oe && mt(n.firstChild);
            const c = dt(Fe ? e : n);
            for (; i = c.nextNode();) yt(i) || (i.content instanceof s && Nt(i.content), At(i));
            if (Fe) return e;
            if (xe) {
                if (ke)
                    for (l = oe.call(n.ownerDocument); n.firstChild;) l.appendChild(n.firstChild);
                else l = n;
                return (ye.shadowroot || ye.shadowrootmode) && (l = ie.call(a, l, !0)), l
            }
            let m = De ? n.outerHTML : n.innerHTML;
            return De && ge["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && _(q, n.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + m), Ce && u([le, ce, se], (e => {
                m = g(m, e, " ")
            })), Q && Ie ? Q.createHTML(m) : m
        }, o.setConfig = function() {
            it(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), ve = !0
        }, o.clearConfig = function() {
            nt = null, ve = !1
        }, o.isValidAttribute = function(e, t, n) {
            nt || it({});
            const o = tt(e),
                r = tt(t);
            return Et(o, r, n)
        }, o.addHook = function(e, t) {
            "function" == typeof t && (ae[e] = ae[e] || [], p(ae[e], t))
        }, o.removeHook = function(e) {
            if (ae[e]) return m(ae[e])
        }, o.removeHooks = function(e) {
            ae[e] && (ae[e] = [])
        }, o.removeAllHooks = function() {
            ae = {}
        }, o
    }();
export {
    V as p
};