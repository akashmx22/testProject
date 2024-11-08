import {
    c as e
} from "./BaseApi-4_v6cvNs.js";
import {
    a as s
} from "./auth-Dk15suFY.js";
import {
    u as r
} from "./Profile/useUpdateNewsLetter-BXvgjt8Y.js";
const t = e({
        name: "user",
        initialState: {
            user: null,
            login: {
                status: "idle",
                error: null
            },
            register: {
                status: "idle",
                error: null
            }
        },
        reducers: {
            setUser: (e, s) => {
                const {
                    user: r
                } = s.payload;
                e.user = r
            },
            updateProfile: (e, s) => {
                const {
                    field: r,
                    value: t
                } = s.payload;
                e.user.profile[r] = t
            },
            removeUser: e => {
                e.user = null
            }
        },
        extraReducers: e => {
            e.addMatcher(s.endpoints.login.matchFulfilled, ((e, {
                payload: s
            }) => {
                const {
                    user: r
                } = s;
                e.user = r, e.login.status = "success"
            })), e.addMatcher(s.endpoints.login.matchRejected, ((e, {
                payload: s
            }) => {
                e.login.status = "failed", e.login.error = s.data.detail
            })), e.addMatcher(r.endpoints.getUser.matchFulfilled, ((e, {
                payload: s
            }) => {
                e.user = s
            })), e.addMatcher(s.endpoints.register.matchFulfilled, ((e, {
                payload: s
            }) => {
                e.register.status = "success";
                const {
                    user: r
                } = s;
                e.login.status = "success", e.user = r
            })), e.addMatcher(s.endpoints.register.matchRejected, ((e, {
                payload: s
            }) => {
                e.register.status = "failed", e.register.error = s.data.detail
            }))
        }
    }),
    {
        setUser: a,
        removeUser: l,
        updateSettings: d
    } = t.actions,
    o = e => e.user.user,
    i = t.reducer;
export {
    i as a, l as r, a as s, o as u
};