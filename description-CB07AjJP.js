import {
    r as e,
    R as r
} from "./index-klX-IjEm.js";
import {
    U as t,
    y as o,
    l as n,
    C as s,
    o as i
} from "./render-UAkLgEPn.js";
import {
    I as a
} from "./keyboard-DOoxlA9V.js";
let l = e.createContext(null);

function u() {
    let r = e.useContext(l);
    if (null === r) {
        let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(e, u), e
    }
    return r
}

function p() {
    let [t, o] = e.useState([]);
    return [t.length > 0 ? t.join(" ") : void 0, e.useMemo((() => function(t) {
        let n = i((e => (o((r => [...r, e])), () => o((r => {
                let t = r.slice(),
                    o = t.indexOf(e);
                return -1 !== o && t.splice(o, 1), t
            }))))),
            s = e.useMemo((() => ({
                register: n,
                slot: t.slot,
                name: t.name,
                props: t.props
            })), [n, t.slot, t.name, t.props]);
        return r.createElement(l.Provider, {
            value: s
        }, t.children)
    }), [o])]
}
let c = t((function(e, r) {
        let t = a(),
            {
                id: i = `headlessui-description-${t}`,
                ...l
            } = e,
            p = u(),
            c = o(r);
        n((() => p.register(i)), [i, p.register]);
        let m = {
            ref: c,
            ...p.props,
            id: i
        };
        return s({
            ourProps: m,
            theirProps: l,
            slot: p.slot || {},
            defaultTag: "p",
            name: p.name || "Description"
        })
    })),
    m = Object.assign(c, {});
export {
    m as G, p as w
};