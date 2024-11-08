import {
    r as e
} from "./index-klX-IjEm.js";

function n() {
    const [n, t] = e.useState(window.innerWidth);
    return e.useEffect((() => {
        const e = () => {
            t(window.innerWidth)
        };
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }), []), n < 1024
}
export {
    n as u
};