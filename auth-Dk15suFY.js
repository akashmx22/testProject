import {
    B as s
} from "./BaseApi-4_v6cvNs.js";
const o = s.injectEndpoints({
        endpoints: s => ({
            register: s.mutation({
                query: ({
                    email: s,
                    password: o,
                    firstName: e,
                    lastName: a
                }) => ({
                    url: "/accounts/register/",
                    method: "POST",
                    body: {
                        username: s,
                        email: s,
                        password1: o,
                        password2: o,
                        first_name: e,
                        last_name: a
                    }
                })
            }),
            login: s.mutation({
                query: ({
                    email: s,
                    password: o
                }) => ({
                    url: "/accounts/login/",
                    method: "POST",
                    body: {
                        email: s,
                        password: o
                    }
                }),
                invalidatesTags: ["User", "Equipment", "Difficulty", "Muscles", "Exercises", "Exercise", "ExerciseDirectory", "OriginalWorkouts", "WorkoutGoals", "WorkoutCategories"]
            }),
            logout: s.mutation({
                query: () => ({
                    url: "/accounts/logout/",
                    method: "POST"
                }),
                invalidatesTags: ["User", "Equipment", "Difficulty", "Muscles", "Exercises", "Exercise", "ExerciseDirectory", "OriginalWorkouts", "WorkoutGoals", "WorkoutCategories"]
            }),
            updatePassword: s.mutation({
                query: ({
                    old_password: s,
                    new_password1: o,
                    new_password2: e
                }) => ({
                    url: "/accounts/password/change/",
                    method: "POST",
                    body: {
                        old_password: s,
                        new_password1: o,
                        new_password2: e
                    }
                })
            }),
            forgotPassword: s.mutation({
                query: ({
                    email: s
                }) => ({
                    url: "/accounts/password/reset/",
                    method: "POST",
                    body: {
                        email: s
                    }
                })
            }),
            resetPassword: s.mutation({
                query: ({
                    uid: s,
                    token: o,
                    new_password1: e,
                    new_password2: a
                }) => ({
                    url: "/accounts/password/reset/confirm/",
                    method: "POST",
                    body: {
                        uid: s,
                        token: o,
                        new_password1: e,
                        new_password2: a
                    }
                })
            }),
            ssoCreatePassword: s.mutation({
                query: ({
                    new_password1: s,
                    new_password2: o,
                    user: e
                }) => ({
                    url: `/accounts/user/${e.pk}/create_password/`,
                    method: "POST",
                    body: {
                        new_password1: s,
                        new_password2: o
                    }
                })
            }),
            ssoDisconnect: s.mutation({
                query: s => ({
                    url: `/accounts/socialaccounts/${s}/disconnect/`,
                    method: "POST",
                    body: {
                        id_token: s
                    }
                }),
                invalidatesTags: ["User"]
            }),
            ssoLogin: s.mutation({
                query: ({
                    code: s,
                    provider: o
                }) => ({
                    url: `/accounts/${o}web/`,
                    method: "POST",
                    body: {
                        code: s
                    }
                }),
                invalidatesTags: ["User"]
            }),
            facebookLogin: s.mutation({
                query: ({
                    access_token: s
                }) => ({
                    url: "/accounts/facebookweb/",
                    method: "POST",
                    body: {
                        access_token: s
                    }
                }),
                invalidatesTags: ["User"]
            })
        })
    }),
    {
        useLoginMutation: e,
        useLogoutMutation: a,
        useRegisterMutation: t,
        useResetPasswordMutation: r,
        useUpdatePasswordMutation: u,
        useForgotPasswordMutation: i,
        useSsoCreatePasswordMutation: n,
        useSsoDisconnectMutation: d,
        useSsoLoginMutation: c,
        useFacebookLoginMutation: w
    } = o;
export {
    o as a, e as b, a as c, c as d, d as e, n as f, u as g, r as h, i as u
};