const e = {},
    t = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const t = document.querySelector("meta[property=csp-nonce]"),
                r = (null == t ? void 0 : t.nonce) || (null == t ? void 0 : t.getAttribute("nonce"));
            o = Promise.all(n.map((t => {
                if ((t = function(e) {
                        return "/" + e
                    }(t)) in e) return;
                e[t] = !0;
                const n = t.endsWith(".css"),
                    o = n ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${t}"]${o}`)) return;
                const l = document.createElement("link");
                return l.rel = n ? "stylesheet" : "modulepreload", n || (l.as = "script"), l.crossOrigin = "", l.href = t, r && l.setAttribute("nonce", r), document.head.appendChild(l), n ? new Promise(((e, n) => {
                    l.addEventListener("load", e), l.addEventListener("error", (() => n(new Error(`Unable to preload CSS for ${t}`))))
                })) : void 0
            })))
        }
        return o.then((() => t())).catch((e => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        }))
    };
export {
    t as _
};