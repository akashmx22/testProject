import {
    r as s
} from "./index-klX-IjEm.js";
import {
    u as e
} from "./WorkoutDetails/Muscles-CckQPQyV.js";
import {
    u as o,
    r as a
} from "./userSlice-BsTRG5vv.js";
import {
    G as i,
    H as t,
    I as r,
    w as n,
    r as p,
    u,
    J as m,
    v as l,
    x as c,
    y as d
} from "./appSlice-Dcw5Kvni.js";
import {
    u as f,
    r as g
} from "./BaseApi-4_v6cvNs.js";
import {
    c as j
} from "./auth-Dk15suFY.js";
import {
    c as S
} from "./index-sNgo0IRq.js";

function b() {
    const b = f(),
        M = S(),
        O = e(o),
        h = e(i),
        k = e(t),
        w = e(r),
        [x, {
            isSuccess: _
        }] = j(),
        {
            muscles_id_list: v,
            equipment_id_list: N
        } = e(n),
        y = s => e => b(s(e)),
        B = y(p),
        D = y(u),
        E = y(m),
        H = y(l),
        I = y(c),
        L = 0 === v.length && 0 === N.length,
        q = y(d);
    return s.useEffect((() => {
        _ && (b(g()), b(a()), I("logout"), H(!0), M("/"))
    }), [_]), {
        user: O,
        openLoginModal: h,
        setOpenLoginModal: B,
        mobileSidebarOpen: k,
        deskSidebarOpen: w,
        navigate: M,
        logoutHandler: x,
        setNotificationMessage: I,
        showNotification: H,
        setDeskSidebarOpen: D,
        setMobileSidebarOpen: E,
        workoutIsEmpty: L,
        setMonetizationNavigate: q
    }
}
export {
    b as u
};