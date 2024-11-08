import {
    j as e
} from "../Calculator/Calorie/Background-DfcXoiEQ.js";
import {
    r as t
} from "../index-klX-IjEm.js";
import {
    u as s
} from "../WorkoutDetails/Muscles-CckQPQyV.js";
import {
    P as a
} from "../index-BWUEYic3.js";
import {
    a as r
} from "../exercises-DYI2AmxR.js";
import o from "../BodyMaps/MaleFront-C2lDqXCN.js";
import i from "../BodyMaps/MaleBack-BBsQzoHo.js";
import n from "../BodyMaps/FemaleFront-oRYVY5TE.js";
import l from "../BodyMaps/FemaleBack-BG-km4qq.js";
import {
    b as m
} from "../appSlice-Dcw5Kvni.js";
import {
    a as c
} from "../WorkoutGenerator/utils-COOLYrnq.js";
import {
    u as d
} from "../useIsMobile-DOnWrmyE.js";
import "../index-X1TvMjHs.js";
import "../hoist-non-react-statics.cjs-DVqnxkis.js";
import "../BaseApi-4_v6cvNs.js";
import "../defaultValues-BLppXe-R.js";
import "../app-store-badge-BrMVwmgi.js";
import "../utils-Bb9d0K1R.js";
import "../purify.es-DwuV7rY0.js";
import "../icons/musclewiki/MobileLogoIcon-BATBCrlM.js";
import "../definitions-CfT5K3z1.js";
import "../utils-C3fXrxDZ.js";
import "../index.esm-BpY5Xmnc.js";
import "../iconBase-DF9T6fYP.js";
import "../auth-Dk15suFY.js";
import "../userSlice-BsTRG5vv.js";
import "../Profile/useUpdateNewsLetter-BXvgjt8Y.js";

function u(a) {
    const {
        buttonClass: u,
        mapClass: x,
        setTargetted: p,
        targetted: j
    } = a, [f, g] = t.useState(!0), y = d(), {
        data: h,
        isSuccess: w
    } = r(), {
        advanced: C,
        gender: b
    } = s(m), k = t.useRef(!1), v = t.useCallback((() => {
        j.forEach((e => c(e.url_name.toLowerCase())), 150, !1, y)
    }), [j, y]);
    t.useEffect((() => {
        k.current && v()
    }), [f]), t.useEffect((() => {
        k.current || (v(), k.current = !0)
    }), [j, v]);
    const N = t.useCallback((e => {
        const t = e.target.parentElement.id;
        if ("hands" !== t && w && t.length > 1 && h.results.some((e => e.url_name.toLowerCase() === t))) {
            const e = h.results.find((e => e.url_name.toLowerCase() === t));
            j.some((e => e.url_name.toLowerCase() === t)) ? p(j.filter((t => t.id !== e.id))) : p([...j, e])
        }
    }), [C, w, null == h ? void 0 : h.results, p, j]);
    return e.jsxs("div", {
        className: "flex justify-center relative",
        children: ["male" === b ? e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "sm:hidden flex flex-col gap-y-4 justify-center items-center",
                children: [f ? function() {
                    const t = `${x} animate-fade-in`;
                    return e.jsx(o, {
                        className: t,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })
                }() : function() {
                    const t = `${x} animate-fade-in`;
                    return e.jsx(i, {
                        className: t,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })
                }(), e.jsx("div", {
                    className: "absolute bottom-0 right-3",
                    children: f ? e.jsx("button", {
                        type: "button",
                        onClick: () => g(!f),
                        children: e.jsx(i, {
                            className: "h-28 animate-fade-in",
                            bodyMapClass: "text-mw-gray"
                        })
                    }) : e.jsx("button", {
                        type: "button",
                        onClick: () => g(!f),
                        children: e.jsx(o, {
                            className: "h-28 animate-fade-in",
                            bodyMapClass: "text-mw-gray"
                        })
                    })
                })]
            }), e.jsx("div", {
                className: "hidden sm:flex",
                children: e.jsxs("div", {
                    className: u,
                    children: [e.jsx(o, {
                        className: x,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    }), e.jsx(i, {
                        className: x,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })]
                })
            })]
        }) : e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "sm:hidden flex flex-col gap-y-4 justify-center items-center",
                children: [f ? function() {
                    const t = `${x} animate-fade-in`;
                    return e.jsx(n, {
                        className: t,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })
                }() : function() {
                    const t = `${x} animate-fade-in`;
                    return e.jsx(l, {
                        className: t,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })
                }(), e.jsx("div", {
                    className: "absolute bottom-0 right-3",
                    children: e.jsx("button", {
                        type: "button",
                        onClick: () => g(!f),
                        children: f ? e.jsx(l, {
                            className: "h-28 animate-fade-in",
                            bodyMapClass: "text-mw-gray",
                            isWorkoutGenerator: !0
                        }) : e.jsx(n, {
                            className: "h-28 animate-fade-in",
                            bodyMapClass: "text-mw-gray",
                            isWorkoutGenerator: !0
                        })
                    })
                })]
            }), e.jsx("div", {
                className: "hidden sm:flex space-x-4",
                children: e.jsxs("div", {
                    className: u,
                    children: [e.jsx(n, {
                        className: x,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    }), e.jsx(l, {
                        className: x,
                        bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
                        onClick: e => N(e),
                        isWorkoutGenerator: !0
                    })]
                })
            })]
        }), e.jsx("style", {
            children: "\n        @keyframes fade-in {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n\n        .animate-fade-in {\n          animation: fade-in 0.3s ease-in-out; /* Adjust duration and timing function as needed */\n        }\n        "
        })]
    })
}
u.defaultProps = {
    buttonClass: "lg:flex sm:gap-x-[24px] lg:justify-center lg:flex-nowrap ",
    mapClass: "w-screen lg:w-full  h-[50vh] sm:mx-auto object-fit "
}, u.propTypes = {
    buttonClass: a.string,
    mapClass: a.string,
    setTargetted: a.func.isRequired,
    targetted: a.shape([]).isRequired
};
export {
    u as W
};