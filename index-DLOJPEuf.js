import {
    j as s
} from "../Calculator/Calorie/Background-DfcXoiEQ.js";
import {
    r as e
} from "../index-klX-IjEm.js";
import {
    u as a
} from "../WorkoutDetails/Muscles-CckQPQyV.js";
import {
    P as t
} from "../index-BWUEYic3.js";
import {
    a as o
} from "../exercises-DYI2AmxR.js";
import {
    e as n,
    b as i,
    l as r,
    A as l,
    ao as m,
    ap as c
} from "../appSlice-Dcw5Kvni.js";
import {
    a as d
} from "../WorkoutGenerator/utils-COOLYrnq.js";
import {
    u as p
} from "../useIsMobile-DOnWrmyE.js";
import {
    B as f,
    u
} from "../BaseApi-4_v6cvNs.js";
import {
    B as j
} from "../utils-Bb9d0K1R.js";
import x from "../BodyMaps/MaleFront-C2lDqXCN.js";
import y from "../BodyMaps/MaleBack-BBsQzoHo.js";
import g from "../BodyMaps/FemaleFront-oRYVY5TE.js";
import b from "../BodyMaps/FemaleBack-BG-km4qq.js";
import {
    A as h
} from "../BodyMaps/AdvancedMaleFront-eUSD3p67.js";
import {
    A as C
} from "../BodyMaps/AdvancedMaleBack-CzVWQFBd.js";
import {
    A as M
} from "../BodyMaps/AdvancedFemaleFront-B6BSBVSV.js";
import {
    A as v
} from "../BodyMaps/AdvancedFemaleBack-Ci4GdQHv.js";
import {
    c as w
} from "../index-sNgo0IRq.js";
import "../index-X1TvMjHs.js";
import "../hoist-non-react-statics.cjs-DVqnxkis.js";
import "../index.esm-BpY5Xmnc.js";
import "../iconBase-DF9T6fYP.js";
import "../auth-Dk15suFY.js";
import "../userSlice-BsTRG5vv.js";
import "../Profile/useUpdateNewsLetter-BXvgjt8Y.js";
import "../defaultValues-BLppXe-R.js";
import "../app-store-badge-BrMVwmgi.js";
import "../purify.es-DwuV7rY0.js";
import "../icons/musclewiki/MobileLogoIcon-BATBCrlM.js";
import "../definitions-CfT5K3z1.js";
import "../utils-C3fXrxDZ.js";
import "../index-C7_g8TS2.js";
const N = f.injectEndpoints({
        endpoints: s => ({
            getJoints: s.query({
                query: () => "/newapi/joint/joints/",
                providesTags: ["Muscles"]
            }),
            getJointsById: s.query({
                query: ({
                    id: s
                }) => `/newapi/joint/joints/${s}`
            })
        })
    }),
    {
        useGetJointsQuery: k,
        useGetJointsByIdQuery: B
    } = N;

function J() {
    const [s, a] = e.useState([]), {
        data: t,
        isSuccess: o,
        isLoading: n
    } = k();
    return e.useEffect((() => {
        o && a(t.results)
    }), [null == t ? void 0 : t.results, o]), {
        joints: s,
        isSuccess: o,
        isLoading: n
    }
}

function F(t) {
    const {
        buttonClass: f,
        mapClass: N,
        noNav: k,
        frontBodyMapRef: B,
        backBodyMapRef: F,
        loading: A,
        bodyMapClass: S,
        isHome: $,
        generator: E
    } = t, _ = u(), {
        data: L,
        isSuccess: O
    } = o(), {
        joints: R
    } = J(), q = w(), I = a(n), {
        advanced: T,
        equipment: G,
        gender: H,
        muscle: P
    } = a(i), [z, D] = e.useState(T), Q = a(r), W = p(), K = e.useCallback((s => _(l(s))), [_]);
    e.useEffect((() => {
        z !== T && D(T)
    }), [T, z]);
    const U = a(m),
        [V, Y] = e.useState(U);
    e.useEffect((() => {
        V !== U && _(c(V))
    }), [V]), e.useEffect((() => {
        !W || $ || E || d(P, 1, I)
    }), [$, W, V, I, E]);
    const Z = e.useCallback((s => {
            var e;
            if (k) return;
            if (I && !(s => s.target.parentElement.classList.contains("joints"))(s)) return;
            const a = s.target.parentElement.id,
                t = !I && L.results.find((s => s.url_name.toLowerCase() === a)),
                o = I && R.find((s => s.name.toLowerCase() === a));
            if (O && a.length > 1 && (t || o)) {
                $ || d(P, 150, I), K(a);
                const s = T ? "" : (null == (e = null == G ? void 0 : G.name_en_us) ? void 0 : e.toLowerCase()) || "featured";
                let t = "featured" === s || "" === s ? `/exercises/${H}/${a}` : `/${s.replaceAll(" ","-")}/${H}/${a}`;
                "en-us" !== Q.id && (t = `/${Q.id}${t}`), q(t)
            }
        }), [z, T, P, null == G ? void 0 : G.name_en_us, H, O, Q.id, null == L ? void 0 : L.results, q, k, K, I, R, I]),
        X = e.useMemo((() => {
            const e = "male" === H ? V ? x : y : V ? g : b,
                a = "male" === H ? V ? h : C : V ? M : v,
                t = I ? "text-mw-gray" : S;
            return z ? s.jsx(a, {
                className: N,
                bodyMapClass: t,
                onClick: Z,
                ref: V ? B : F,
                isJoints: I
            }) : s.jsx(e, {
                className: `${N} animate-fade-in menor`,
                bodyMapClass: t,
                onClick: Z,
                isJoints: I,
                ref: V ? B : F
            })
        }), [H, V, W, $, P, I, S, z, N, Z, B, F]);
    return s.jsx(e.Suspense, {
        fallback: s.jsxs("div", {
            className: "min-h-full h-[100vh]",
            children: [" ", s.jsx(j, {})]
        }),
        children: s.jsxs("div", {
            className: "flex justify-center relative",
            children: ["male" === H ? s.jsxs(s.Fragment, {
                children: [s.jsxs("div", {
                    className: "lg:hidden flex flex-col gap-y-4 justify-center items-center",
                    children: [X, s.jsx("div", {
                        className: "absolute bottom-0 right-3",
                        children: V ? s.jsx("button", {
                            type: "button",
                            onClick: () => Y(!V),
                            name: "body-side-switch",
                            "aria-label": "Show Back",
                            children: z ? s.jsx(C, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: "text-mw-gray",
                                ref: F
                            }) : s.jsx(y, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: I ? "text-mw-gray" : S,
                                ref: F,
                                isJoints: I
                            })
                        }) : s.jsx("button", {
                            type: "button",
                            onClick: () => Y(!V),
                            name: "body-side-switch",
                            "aria-label": "Show Front",
                            children: z ? s.jsx(h, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: "text-mw-gray",
                                ref: B,
                                isJoints: I
                            }) : s.jsx(x, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: I ? "text-mw-gray" : S,
                                ref: B,
                                isJoints: I
                            })
                        })
                    })]
                }), s.jsx("div", {
                    className: "hidden lg:flex w-full justify-center",
                    children: s.jsx("div", {
                        className: f,
                        children: z ? s.jsxs(s.Fragment, {
                            children: [s.jsx(h, {
                                className: N,
                                bodyMapClass: S,
                                onClick: s => Z(s),
                                ref: B
                            }), s.jsx(C, {
                                className: N,
                                bodyMapClass: S,
                                onClick: s => Z(s),
                                ref: F,
                                isJoints: I
                            })]
                        }) : s.jsxs(s.Fragment, {
                            children: [s.jsx(x, {
                                className: `${N} menor `,
                                bodyMapClass: I ? "text-mw-gray" : S,
                                onClick: s => Z(s),
                                loading: A,
                                ref: B,
                                isJoints: I
                            }), s.jsx(y, {
                                className: `${N} menor `,
                                bodyMapClass: I ? "text-mw-gray" : S,
                                onClick: s => Z(s),
                                ref: F,
                                isJoints: I
                            })]
                        })
                    })
                })]
            }) : s.jsxs(s.Fragment, {
                children: [s.jsxs("div", {
                    className: "lg:hidden flex flex-col gap-y-4 justify-center items-center",
                    children: [X, s.jsx("div", {
                        className: "absolute bottom-0 right-3",
                        children: V ? s.jsx("button", {
                            type: "button",
                            onClick: () => Y(!V),
                            children: z ? s.jsx(v, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: "text-mw-gray",
                                ref: F
                            }) : s.jsx(b, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: I ? "text-mw-gray" : S,
                                isJoints: I,
                                ref: F
                            })
                        }) : s.jsx("button", {
                            type: "button",
                            onClick: () => Y(!V),
                            children: z ? s.jsx(M, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: "text-mw-gray",
                                ref: B
                            }) : s.jsx(g, {
                                className: "h-28 animate-fade-in",
                                bodyMapClass: I ? "text-mw-gray" : S,
                                isJoints: I,
                                ref: B
                            })
                        })
                    })]
                }), s.jsx("div", {
                    className: "hidden lg:flex w-full  justify-center",
                    children: s.jsx("div", {
                        className: f,
                        children: z ? s.jsxs(s.Fragment, {
                            children: [s.jsx(M, {
                                className: N,
                                bodyMapClass: S,
                                onClick: s => Z(s),
                                ref: B
                            }), s.jsx(v, {
                                className: N,
                                bodyMapClass: S,
                                onClick: s => Z(s),
                                ref: F
                            })]
                        }) : s.jsxs(s.Fragment, {
                            children: [s.jsx(g, {
                                className: N,
                                bodyMapClass: I ? "text-mw-gray" : S,
                                onClick: s => Z(s),
                                ref: B,
                                isJoints: I
                            }), s.jsx(b, {
                                className: N,
                                bodyMapClass: I ? "text-mw-gray" : S,
                                onClick: s => Z(s),
                                ref: F,
                                isJoints: I
                            })]
                        })
                    })
                })]
            }), s.jsx("style", {
                children: "\n          @keyframes fade-in {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n\n          .animate-fade-in {\n            animation: fade-in 0.3s ease-in-out; /* Adjust duration and timing function as needed */\n          }\n          "
            })]
        })
    })
}
F.defaultProps = {
    buttonClass: "lg:flex sm:gap-x-[24px] lg:justify-center lg:flex-nowrap ",
    mapClass: "w-screen lg:w-full mc:h-[700px] 2xl:h-[90vh] 3xl:h-[95vh] 4xl:h-screen sm:mx-auto object-fit ",
    noNav: !1,
    loading: !1,
    frontBodyMapRef: null,
    backBodyMapRef: null,
    bodyMapClass: "text-mw-gray active:text-mw-red-700 lg:hover:text-mw-red-100",
    isHome: !1,
    generator: !1
}, F.propTypes = {
    buttonClass: t.string,
    mapClass: t.string,
    noNav: t.bool,
    generator: t.bool,
    bodyMapClass: t.string,
    frontBodyMapRef: t.oneOfType([t.func, t.shape({
        current: t.instanceOf(Element)
    })]),
    backBodyMapRef: t.oneOfType([t.func, t.shape({
        current: t.instanceOf(Element)
    })]),
    loading: t.bool,
    isHome: t.bool
};
const A = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: F
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    F as B, A as i, J as u
};