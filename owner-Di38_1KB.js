import {
    s as e
} from "./render-UAkLgEPn.js";

function n(n) {
    return e.isServer ? null : n instanceof Node ? n.ownerDocument : null != n && n.hasOwnProperty("current") && n.current instanceof Node ? n.current.ownerDocument : document
}
export {
    n as o
};