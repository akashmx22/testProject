import {
    R as e
} from "./index-klX-IjEm.js";
import {
    b as n,
    s as t,
    l as r
} from "./render-UAkLgEPn.js";
var l;
let o = null != (l = e.useId) ? l : function() {
    let l = n(),
        [o, a] = e.useState(l ? () => t.nextId() : null);
    return r((() => {
        null === o && a(t.nextId())
    }), [o]), null != o ? "" + o : void 0
};

function a(e) {
    let n = e.parentElement,
        t = null;
    for (; n && !(n instanceof HTMLFieldSetElement);) n instanceof HTMLLegendElement && (t = n), n = n.parentElement;
    let r = "" === (null == n ? void 0 : n.getAttribute("disabled"));
    return (!r || ! function(e) {
        if (!e) return !1;
        let n = e.previousElementSibling;
        for (; null !== n;) {
            if (n instanceof HTMLLegendElement) return !1;
            n = n.previousElementSibling
        }
        return !0
    }(t)) && r
}
var i, u = ((i = u || {}).Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i);
export {
    o as I, u as o, a as r
};