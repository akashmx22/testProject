import {
    j as e
} from "./Calculator/Calorie/Background-DfcXoiEQ.js";
import "./index-klX-IjEm.js";
import {
    c as s
} from "./index-C7_g8TS2.js";
import {
    I as a,
    a as t
} from "./index.esm-BpY5Xmnc.js";
import {
    u as r
} from "./WorkoutDetails/Muscles-CckQPQyV.js";
import "./index-DVP_cETW.js";
import {
    b as i,
    a as n
} from "./appSlice-Dcw5Kvni.js";
import {
    M as l
} from "./message-Br-Oxi3x.js";
import {
    u as o
} from "./BaseApi-4_v6cvNs.js";
import {
    _ as m
} from "./switch-CKYmlb11.js";

function c() {
    const {
        gender: c
    } = r(i), d = "male" === c, x = o(), u = "male" === c ? "bodymap.male" : "bodymap.female";
    return e.jsxs(m.Group, {
        as: "div",
        className: s("male" === c ? "ml-0" : "", "flex items-center lg:scale-90 flex-col text-xs 2xl:text-base  space-y-1"),
        children: [e.jsxs(m, {
            checked: d,
            onChange: e => x(n(e)),
            className: s(d ? "bg-mw-blue-200" : "bg-mw-red-400", "disabled:bg-gray-500 relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ring-2 ring-mw-blue-600 ring-offset-2"),
            children: [e.jsx("span", {
                className: "sr-only",
                children: "Gender Selector"
            }), e.jsxs("span", {
                className: s(d ? "translate-x-0" : "translate-x-7 rtl:-translate-x-7", "pointer-events-none block h-6 w-6 transform rounded-full bg-white dark:bg-gray-900 shadow ring-0 transition duration-200 ease-in-out"),
                children: [e.jsx("span", {
                    className: s(d ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                    "aria-hidden": "true",
                    children: e.jsx(a, {
                        className: "xl:h-4 xl:w-4 h-3.5 w-3.5 text-mw-red-800"
                    })
                }), e.jsx("span", {
                    className: s(d ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                    "aria-hidden": "true",
                    children: e.jsx(t, {
                        className: "xl:h-4 xl:w-4 h-3.5 w-3.5 text-mw-blue-600"
                    })
                })]
            })]
        }), e.jsx(m.Label, {
            as: "span",
            className: "text-xs xl:text-sm 2xl:text-base",
            children: e.jsx("span", {
                className: "font-medium text-white",
                children: e.jsx(l, {
                    id: u
                })
            })
        })]
    })
}
export {
    c as G
};