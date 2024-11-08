import {
    r as e
} from "./index-klX-IjEm.js";
import {
    u as r
} from "./useGetUser-DjKwPlcU.js";

function s() {
    const [s, o] = e.useState(""), t = r();
    return e.useEffect((() => {
        t ? t.profile.premium || t.profile.premium_cancelled ? o("premium") : o("registered") : o("non-logged")
    }), [t]), s
}
export {
    s as u
};