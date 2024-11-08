import {
    c as a,
    a as e,
    B as o
} from "./BaseApi-4_v6cvNs.js";
const t = [{
        name: "navbar.sort_default",
        href: "#",
        value: "-weight"
    }, {
        name: "navbar.sort_new",
        href: "#",
        value: "-id"
    }, {
        name: "navbar.sort_difficulty",
        href: "#",
        value: "difficulty"
    }],
    i = t[0],
    s = ({
        filter: a,
        data: e,
        state: o
    }) => {
        const t = ((a, e, o) => a.filters[o].filter((a => a.id === e.id && a.name === e.name)))(o, e, a);
        t.length > 0 ? (o.filters[a] = o.filters[a].filter((a => !(a.id === e.id && a.name === e.name))), "activeFilters" !== a && (o.filters.activeFilters = o.filters.activeFilters.filter((a => !(a.id === e.id && a.name === e.name))))) : (o.filters[a] = [e, ...o.filters[a]], "activeFilters" !== a && (o.filters.activeFilters = [e, ...o.filters.activeFilters]))
    },
    d = ({
        filter: a,
        data: e,
        state: o
    }) => {
        if (s({
                filter: a,
                data: e,
                state: o
            }), "activeFilters" === a) {
            let t = null;
            Object.keys(o.filters).forEach((i => {
                i === a || t || o.filters[i].find((a => a.id === e.id && a.name === e.name)) && (t = i)
            })), t && s({
                filter: t,
                data: e,
                state: o
            })
        }
    },
    r = a({
        name: "app",
        initialState: {
            showNotification: !1,
            notificationMessage: "login",
            mobileSideBarOpen: !1,
            gender: "male",
            goPremium: !1,
            selectedSubscription: null,
            mobileRightBarOpen: !1,
            desktopSideBarOpen: !1,
            menuSelected: "menu.home",
            searchIsOpen: !1,
            mobileSearchIsOpen: !1,
            openLoginModal: !1,
            openRegisterModal: !1,
            openSocialConnectedModal: !1,
            openForgotPasswordModal: !1,
            openCreatePasswordModal: !1,
            openUnsavedChangesModal: !1,
            searchQuery: "",
            openAlmostDoneModal: !1,
            openSSOModal: !1,
            provider: "google",
            myWorkouToggleSorting: !1,
            ssoConnect: !1,
            showFrontBodyMap: !0,
            locale: {
                id: "en-us",
                label: "English",
                previous: ""
            },
            articles: {
                selectedCategory: ""
            },
            workoutsOriginal: {
                filters: {
                    activeFilters: [],
                    equipments: [],
                    difficulties: [],
                    muscles: [],
                    goals: []
                },
                ordering: i,
                currentExercise: null,
                currentWorkout: null,
                currentWorkoutExercise: null
            },
            routinesOriginal: {
                filters: {
                    activeFilters: [],
                    equipments: [],
                    difficulties: [],
                    muscles: [],
                    goals: []
                },
                ordering: i,
                currentExercise: null,
                currentWorkout: null,
                currentWorkoutExercise: null
            },
            exercises: {
                filters: {
                    activeFilters: [],
                    equipments: [],
                    difficulties: [],
                    muscles: [],
                    goals: []
                },
                ordering: i,
                currentExercise: null,
                currentWorkout: null,
                currentWorkoutExercise: null
            },
            bodyMap: {
                advanced: !1,
                joints: !1,
                muscle: "",
                advanced_muscle: "mid-lower-pectoralis",
                simple_muscle: "chest",
                joints_muscle: "scapula",
                side: "",
                equipment: {
                    id: "",
                    name: ""
                },
                gender: "male"
            },
            calculators: {
                calories: 1200
            },
            monetization: {
                takeOverBottomUpOpen: !1,
                advancedClicks: 0,
                navigate: "/"
            },
            showNotificationTimerId: null,
            workoutGenerator: {
                fitness_level: {
                    id: "",
                    name: "",
                    excluded_categories: [],
                    difficulties: []
                },
                muscles_id_list: [],
                equipment_id_list: [],
                age: 13,
                mobile: !1,
                gender: "male",
                progress: 0,
                goal: 3,
                generated_workout: null
            }
        },
        reducers: {
            updateSettings: (a, e) => {
                const {
                    field: o,
                    value: t
                } = e.payload;
                a[o] = t
            },
            updateShowNotification: (a, e) => {
                a.showNotification = e.payload
            },
            updateShowNotificationTimerId: (a, e) => {
                a.showNotificationTimerId = e.payload
            },
            updateNoticationMessage: (a, e) => {
                a.notificationMessage = e.payload
            },
            updateCalculatorCalories: (a, e) => {
                a.calculators.calories = e.payload
            },
            updateLoginModal: (a, e) => {
                a.openLoginModal = e.payload
            },
            updateShowFrontBodyMap(a, e) {
                const {
                    payload: o
                } = e;
                o !== a.showFrontBodyMap && (a.showFrontBodyMap = o)
            },
            updateUnsavedChangesModal: (a, e) => {
                a.unsavedChangesModalState = e.payload
            },
            updateRegisterModal: (a, e) => {
                a.openRegisterModal = e.payload
            },
            updateAlmostDoneModal: (a, e) => {
                a.openAlmostDoneModal = e.payload
            },
            updateForgotPasswordModal: (a, e) => {
                a.openForgotPasswordModal = e.payload
            },
            updateCreatePasswordModal: (a, e) => {
                a.openCreatePasswordModal = e.payload
            },
            updateSSOModal: (a, e) => {
                a.openSSOModal = e.payload
            },
            updateSocialConnectedModal: (a, e) => {
                a.openSocialConnectedModal = e.payload
            },
            updateGoPremium: (a, e) => {
                a.goPremium = e.payload
            },
            updateSelectedSubscription: (a, e) => {
                a.selectedSubscription = e.payload
            },
            updateSearchQuery: (a, e) => {
                a.searchQuery = e.payload
            },
            updateMyWorkouToggleSorting: (a, e) => {
                a.myWorkouToggleSorting = e.payload
            },
            updateWorkoutOriginalsFilters: (a, e) => {
                const {
                    data: o,
                    filter: t
                } = e.payload;
                d({
                    filter: t,
                    data: o,
                    state: a.workoutsOriginal
                })
            },
            updateRoutineOriginalsFilters: (a, e) => {
                const {
                    data: o,
                    filter: t
                } = e.payload;
                d({
                    filter: t,
                    data: o,
                    state: a.routinesOriginal
                })
            },
            updateWorkoutOriginalsOrdering: (a, e) => {
                a.workoutsOriginal.ordering = e.payload
            },
            updateRoutineOriginalsOrdering: (a, e) => {
                a.routinesOriginal.ordering = e.payload
            },
            updateWorkoutOriginalsCurrentExercise: (a, e) => {
                a.workoutsOriginal.currentExercise = e.payload
            },
            updateWorkoutOriginalsCurrentWorkout: (a, e) => {
                a.workoutsOriginal.currentWorkout = e.payload
            },
            updateWorkoutOriginalsCurrentWorkoutExercise: (a, e) => {
                a.workoutsOriginal.currentWorkoutExercise = e.payload
            },
            updateExercisesCurrentExercise: (a, e) => {
                a.exercises.currentExercise = e.payload
            },
            updateExercisesOrdering: (a, e) => {
                a.exercises.ordering = e.payload
            },
            updateExercisesFilters: (a, e) => {
                const {
                    data: o,
                    filter: t
                } = e.payload;
                a.exercises.filters[t].find((a => a.name === o.name)) ? a.exercises.filters[t] = [] : a.exercises.filters[t] = [o]
            },
            updateMobileSideBarOpen: (a, e) => {
                a.mobileSideBarOpen = e.payload
            },
            updateMobileRightBarOpen: (a, e) => {
                a.mobileRightBarOpen = e.payload
            },
            updateDesktopSideBarOpen: (a, e) => {
                a.desktopSideBarOpen = e.payload
            },
            updateMenuSelected: (a, e) => {
                a.menuSelected = e.payload
            },
            updateLocale: (a, e) => {
                const t = "en-us" === a.locale.id ? "" : a.locale.id;
                let i = e.payload || {
                    id: "en-us",
                    label: "English"
                };
                i = { ...i,
                    previous: t
                }, a.locale = i, e.asyncDispatch(o.util.resetApiState());
                try {
                    const e = a.locale.id.replace("-", "_");
                    a.bodyMap.equipment.name = a.bodyMap.equipment[`name_${e}`]
                } catch (s) {}
            },
            updateProvider: (a, e) => {
                a.provider = e.payload
            },
            updateSsoConnect: (a, e) => {
                a.ssoConnect = e.payload
            },
            updateBodyMap: (a, e) => {
                a.bodyMap.advanced = e.payload, !0 === e.payload ? (a.bodyMap.joints ? (a.bodyMap.joints = !1, a.bodyMap.joints_muscle = "" === a.bodyMap.muscle ? "scapula" : a.bodyMap.muscle) : a.bodyMap.simple_muscle = "" === a.bodyMap.muscle ? "chest" : a.bodyMap.muscle, a.bodyMap.muscle = a.bodyMap.advanced_muscle, a.monetization.advancedClicks += 1) : a.bodyMap.muscle = a.bodyMap.simple_muscle
            },
            updateBodyMapMuscle: (a, e) => {
                a.bodyMap.muscle = e.payload
            },
            updateMusclesGenerator: (a, e) => {
                a.musclesGenerator = e.payload
            },
            updateBodyMapEquipment: (a, e) => {
                "" !== a.bodyMap.equipment.id && a.bodyMap.equipment.id === e.payload.id || "" === e.payload ? a.bodyMap.equipment = {
                    id: "",
                    name: ""
                } : a.bodyMap.equipment = e.payload
            },
            updateGender: (a, e) => {
                !0 === e.payload ? a.bodyMap.gender = "male" : !1 === e.payload ? a.bodyMap.gender = "female" : a.bodyMap.gender = e.payload.toLowerCase()
            },
            updateSearchState: (a, e) => {
                a.searchIsOpen = e.payload
            },
            updateMobileSearchState: (a, e) => {
                a.mobileSearchIsOpen = e.payload
            },
            updateArticleCategory: (a, e) => {
                a.articles.selectedCategory = e.payload
            },
            updateMonetizationBottomUp: (a, e) => {
                a.monetization.takeOverBottomUpOpen = e.payload
            },
            updateMonetizationNavigate: (a, e) => {
                a.monetization.navigate = e.payload
            },
            updateAdvancedClicks: (a, e) => {
                0 === e.payload ? a.monetization.advancedClicks = 0 : a.monetization.advancedClicks += e.payload
            },
            updateWorkoutGenerator: (a, e) => {
                const {
                    field: o,
                    value: t
                } = e.payload;
                a.workoutGenerator[o] = t
            },
            updateShowJoints: (a, e) => {
                a.bodyMap.joints = e.payload, a.bodyMap.joints && (a.monetization.advancedClicks += 1)
            },
            toggleShowJoints: a => {
                a.bodyMap.joints = !a.bodyMap.joints, a.bodyMap.joints ? (a.monetization.advancedClicks += 1, a.bodyMap.muscle = a.bodyMap.joints_muscle) : (a.bodyMap.joints_muscle = a.bodyMap.muscle, a.bodyMap.muscle = a.bodyMap.simple_muscle)
            }
        }
    }),
    {
        updateSettings: p,
        updateLoginModal: l,
        updateMobileSideBarOpen: n,
        updateDesktopSideBarOpen: u,
        updateWorkoutOriginalsFilters: c,
        updateWorkoutOriginalsOrdering: m,
        updateLocale: y,
        updateWorkoutOriginalsCurrentExercise: g,
        updateWorkoutOriginalsCurrentWorkout: M,
        updateWorkoutOriginalsCurrentWorkoutExercise: S,
        updateMobileRightBarOpen: f,
        updateGender: b,
        updateBodyMap: O,
        updateBodyMapMuscle: k,
        updateBodyMapEquipment: h,
        updateSearchState: v,
        updateMobileSearchState: w,
        updateCalculatorCalories: C,
        updateRegisterModal: B,
        updateGoPremium: W,
        updateSelectedSubscription: F,
        updateForgotPasswordModal: x,
        updateCreatePasswordModal: E,
        updateProvider: _,
        updateSSOModal: P,
        updateSsoConnect: j,
        updateSocialConnectedModal: q,
        updateShowNotification: z,
        updateNoticationMessage: N,
        updateAlmostDoneModal: G,
        updateSearchQuery: R,
        updateRoutineOriginalsFilters: A,
        updateRoutineOriginalsOrdering: I,
        updateArticleCategory: T,
        updateMonetizationBottomUp: D,
        updateAdvancedClicks: L,
        updateShowNotificationTimerId: U,
        updateMonetizationNavigate: Q,
        updateMusclesGenerator: J,
        updateWorkoutGenerator: $,
        updateUnsavedChangesModal: H,
        updateMyWorkouToggleSorting: K,
        updateShowFrontBodyMap: V,
        updateShowJoints: X,
        toggleShowJoints: Y
    } = r.actions,
    Z = a => a.app.desktopSideBarOpen,
    aa = a => a.app.mobileSideBarOpen,
    ea = a => a.app.workoutsOriginal,
    oa = a => a.app.routinesOriginal,
    ta = a => a.app.routinesOriginal.filters,
    ia = a => a.app.locale,
    sa = a => a.app.searchIsOpen,
    da = a => a.app.mobileSearchIsOpen,
    ra = a => a.app.calculators,
    pa = a => a.app.bodyMap,
    la = a => a.app.openLoginModal,
    na = a => a.app.openRegisterModal,
    ua = a => a.app.openAlmostDoneModal,
    ca = a => a.app.openForgotPasswordModal,
    ma = a => a.app.openCreatePasswordModal,
    ya = a => a.app.openSSOModal,
    ga = a => a.app.openSocialConnectedModal,
    Ma = a => a.app.unsavedChangesModalState,
    Sa = a => a.app.goPremium,
    fa = a => a.app.selectedSubscription,
    ba = a => a.app.provider,
    Oa = a => a.app.ssoConnect,
    ka = a => a.app.showNotification,
    ha = a => a.app.showNotificationTimerId,
    va = a => a.app.notificationMessage,
    wa = a => a.app.searchQuery,
    Ca = a => a.app.articles.selectedCategory,
    Ba = a => a.app.monetization.takeOverBottomUpOpen,
    Wa = a => a.app.monetization.navigate,
    Fa = a => a.app.monetization.advancedClicks,
    xa = a => a.app.workoutGenerator,
    Ea = a => a.app.myWorkouToggleSorting,
    _a = a => a.app.showFrontBodyMap,
    Pa = a => a.app.bodyMap.joints,
    ja = e(Z, (a => a));
e(aa, (a => a));
const qa = e((a => a.app.workoutsOriginal.filters), (a => a));
e(ea, (a => a)), e(oa, (a => a)), e(ta, (a => a));
const za = e(ia, (a => a));
e(sa, (a => a)), e(da, (a => a));
const Na = e((a => a.app.bodyMap.equipment), (a => a));
e(ra, (a => a));
const Ga = e(pa, (a => a));
e(la, (a => a)), e(na, (a => a)), e(ua, (a => a)), e(ca, (a => a)), e(ma, (a => a)), e(ya, (a => a)), e(ga, (a => a)), e(Sa, (a => a)), e(fa, (a => a)), e(ba, (a => a)), e(Oa, (a => a)), e(ka, (a => a)), e(ha, (a => a)), e(va, (a => a)), e(wa, (a => a)), e((a => a.app.musclesGenerator), (a => a)), e(Ca, (a => a));
const Ra = e(Ba, (a => a));
e(Wa, (a => a)), e(Fa, (a => a)), e(xa, (a => a)), e(Ea, (a => a)), e(_a, (a => a));
const Aa = e(Pa, (a => a)),
    Ia = r.reducer;
export {
    t as $, k as A, Sa as B, f as C, na as D, fa as E, L as F, la as G, aa as H, Z as I, n as J, P as K, B as L, da as M, w as N, M as O, Oa as P, Ca as Q, T as R, ra as S, C as T, ma as U, E as V, R as W, Ba as X, Fa as Y, ca as Z, W as _, b as a, ua as a0, G as a1, F as a2, oa as a3, ta as a4, I as a5, A as a6, H as a7, ya as a8, g as a9, S as aa, Ma as ab, Ea as ac, ea as ad, qa as ae, K as af, c as ag, m as ah, v as ai, wa as aj, sa as ak, ja as al, za as am, Ra as an, _a as ao, V as ap, ka as aq, ha as ar, va as as, U as at, Ia as au, i as av, $ as aw, pa as b, q as c, j as d, Pa as e, O as f, x as g, X as h, Ga as i, Na as j, Aa as k, ia as l, h as m, Wa as n, D as o, ba as p, y as q, l as r, ga as s, Y as t, u, z as v, xa as w, N as x, Q as y, _ as z
};