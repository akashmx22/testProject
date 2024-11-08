import {
    r as e
} from "./index-klX-IjEm.js";

function t(e) {
    "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
        throw e
    }))))
}

function r() {
    let e = [],
        n = {
            addEventListener: (e, t, r, s) => (e.addEventListener(t, r, s), n.add((() => e.removeEventListener(t, r, s)))),
            requestAnimationFrame(...e) {
                let t = requestAnimationFrame(...e);
                return n.add((() => cancelAnimationFrame(t)))
            },
            nextFrame: (...e) => n.requestAnimationFrame((() => n.requestAnimationFrame(...e))),
            setTimeout(...e) {
                let t = setTimeout(...e);
                return n.add((() => clearTimeout(t)))
            },
            microTask(...e) {
                let r = {
                    current: !0
                };
                return t((() => {
                    r.current && e[0]()
                })), n.add((() => {
                    r.current = !1
                }))
            },
            style(e, t, r) {
                let n = e.style.getPropertyValue(t);
                return Object.assign(e.style, {
                    [t]: r
                }), this.add((() => {
                    Object.assign(e.style, {
                        [t]: n
                    })
                }))
            },
            group(e) {
                let t = r();
                return e(t), this.add((() => t.dispose()))
            },
            add: t => (e.push(t), () => {
                let r = e.indexOf(t);
                if (r >= 0)
                    for (let t of e.splice(r, 1)) t()
            }),
            dispose() {
                for (let t of e.splice(0)) t()
            }
        };
    return n
}

function n() {
    let [t] = e.useState(r);
    return e.useEffect((() => () => t.dispose()), [t]), t
}
export {
    r as o, n as p, t
};