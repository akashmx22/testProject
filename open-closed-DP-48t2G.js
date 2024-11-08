import {
    r as e,
    R as n
} from "./index-klX-IjEm.js";
let t = e.createContext(null);
t.displayName = "OpenClosedContext";
var o, r = ((o = r || {})[o.Open = 1] = "Open", o[o.Closed = 2] = "Closed", o[o.Closing = 4] = "Closing", o[o.Opening = 8] = "Opening", o);

function l() {
    return e.useContext(t)
}

function i({
    value: e,
    children: o
}) {
    return n.createElement(t.Provider, {
        value: e
    }, o)
}
export {
    r as d, i as s, l as u
};