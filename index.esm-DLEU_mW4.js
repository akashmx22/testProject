import {
    r as e,
    R as r
} from "./index-klX-IjEm.js";
const o = e.createContext(null);

function n({
    clientId: n,
    nonce: c,
    onScriptLoadSuccess: t,
    onScriptLoadError: u,
    children: i
}) {
    const l = function(r = {}) {
            const {
                nonce: o,
                onScriptLoadSuccess: n,
                onScriptLoadError: c
            } = r, [t, u] = e.useState(!1), i = e.useRef(n);
            i.current = n;
            const l = e.useRef(c);
            return l.current = c, e.useEffect((() => {
                const e = document.createElement("script");
                return e.src = "https://accounts.google.com/gsi/client", e.async = !0, e.defer = !0, e.nonce = o, e.onload = () => {
                    var e;
                    u(!0), null === (e = i.current) || void 0 === e || e.call(i)
                }, e.onerror = () => {
                    var e;
                    u(!1), null === (e = l.current) || void 0 === e || e.call(l)
                }, document.body.appendChild(e), () => {
                    document.body.removeChild(e)
                }
            }), [o]), t
        }({
            nonce: c,
            onScriptLoadSuccess: t,
            onScriptLoadError: u
        }),
        s = e.useMemo((() => ({
            clientId: n,
            scriptLoadedSuccessfully: l
        })), [n, l]);
    return r.createElement(o.Provider, {
        value: s
    }, i)
}

function c({
    flow: r = "implicit",
    scope: n = "",
    onSuccess: c,
    onError: t,
    onNonOAuthError: u,
    overrideScope: i,
    state: l,
    ...s
}) {
    const {
        clientId: d,
        scriptLoadedSuccessfully: a
    } = function() {
        const r = e.useContext(o);
        if (!r) throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
        return r
    }(), v = e.useRef(), f = e.useRef(c);
    f.current = c;
    const p = e.useRef(t);
    p.current = t;
    const m = e.useRef(u);
    m.current = u, e.useEffect((() => {
        var e;
        if (!a) return;
        const o = "implicit" === r ? "initTokenClient" : "initCodeClient",
            c = null === (e = null === window || void 0 === window ? void 0 : window.google) || void 0 === e ? void 0 : e.accounts.oauth2[o]({
                client_id: d,
                scope: i ? n : `openid profile email ${n}`,
                callback: e => {
                    var r, o;
                    if (e.error) return null === (r = p.current) || void 0 === r ? void 0 : r.call(p, e);
                    null === (o = f.current) || void 0 === o || o.call(f, e)
                },
                error_callback: e => {
                    var r;
                    null === (r = m.current) || void 0 === r || r.call(m, e)
                },
                state: l,
                ...s
            });
        v.current = c
    }), [d, a, r, n, l]);
    const S = e.useCallback((e => {
            var r;
            return null === (r = v.current) || void 0 === r ? void 0 : r.requestAccessToken(e)
        }), []),
        h = e.useCallback((() => {
            var e;
            return null === (e = v.current) || void 0 === e ? void 0 : e.requestCode()
        }), []);
    return "implicit" === r ? S : h
}
export {
    n as G, c as u
};