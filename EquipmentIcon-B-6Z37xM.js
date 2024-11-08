import {
    j as i
} from "./Calculator/Calorie/Background-DfcXoiEQ.js";
import "./index-klX-IjEm.js";
import {
    P as o
} from "./index-BWUEYic3.js";
import {
    B as s
} from "./icons/musclewiki/BarbellIcon-DgDnhHCp.js";
import {
    B as c
} from "./icons/musclewiki/BandIcon-e_X6DLOG.js";
import {
    B as e
} from "./icons/musclewiki/BodyWeightIcon-Drg14enq.js";
import {
    C as m
} from "./icons/musclewiki/CablesIcon-LlfFuk5n.js";
import {
    D as r
} from "./icons/musclewiki/DumbbellsIcon-Bwu-bTA1.js";
import {
    K as n
} from "./icons/musclewiki/KettlebellIcon-RckLpPCI.js";
import {
    S as l
} from "./icons/musclewiki/StretchesIcon-CMHyrKq_.js";
import {
    T as t
} from "./icons/musclewiki/TRXIcon-CybW1BfG.js";
import {
    Y as a
} from "./icons/musclewiki/YogaIcon-DvqQcHLM.js";
import {
    P as u
} from "./icons/musclewiki/PlateIcon-D3JYupv6.js";
import {
    M as p
} from "./icons/musclewiki/MedicineBallIcon-CUNApawP.js";
import {
    B as j
} from "./icons/musclewiki/BosuBallIcon-BlPT4i39.js";
import {
    V as f
} from "./icons/musclewiki/VitruvianIcon-Brukj5S3.js";
import {
    S as w
} from "./icons/musclewiki/SmithMachineIcon-IdvLqXA0.js";
import {
    C as k
} from "./icons/musclewiki/CardioIcon-uhBP46xX.js";
import {
    R as b
} from "./icons/musclewiki/RecoveryIcon-DEbVLMyk.js";
const I = {
    band: c,
    barbell: s,
    bodyweight: e,
    cables: m,
    dumbbells: r,
    kettlebells: n,
    stretches: l,
    trx: t,
    yoga: a,
    plate: u,
    "medicine-ball": p,
    medicineball: p,
    "bosu-ball": j,
    vitruvian: f,
    "smith-machine": w,
    cardio: k,
    recovery: b
};

function d({
    equipment: o,
    ...c
}) {
    const e = (null == o ? void 0 : o.toLowerCase()) || "equipment",
        m = I[e] || s;
    return i.jsx(m, { ...c
    })
}
d.propTypes = {
    equipment: o.string.isRequired
};
export {
    d as E
};