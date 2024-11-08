import {
    B as e
} from "./BaseApi-4_v6cvNs.js";
const s = e.injectEndpoints({
        endpoints: e => ({
            search: e.query({
                query: e => `/api/search/exercises/suggest/?q=${e}&size=100`,
                providesTags: ["Search"]
            }),
            getEquipments: e.query({
                query: () => "/newapi/exercise/categories/?enable=true",
                providesTags: ["Equipment"]
            }),
            getEquipmentsWorkoutGenerator: e.query({
                query: () => "/newapi/exercise/categories/?include_in_workout_generator=true&enable=true",
                providesTags: ["Equipment"]
            }),
            getDifficulties: e.query({
                query: () => "/newapi/exercise/difficulties/",
                providesTags: ["Difficulty"]
            }),
            getMuscles: e.query({
                query: () => "/newapi/muscle/muscles/",
                providesTags: ["Muscles"]
            }),
            getExercises: e.query({
                query: ({
                    equipment: e,
                    muscles: s,
                    limit: r,
                    offset: i,
                    ordering: u,
                    isCardio: t = !1,
                    joints: c = ""
                }) => {
                    let n = `/newapi/exercise/exercises/?limit=${r}&offset=${i}&category=${e}&status=Published&ordering=${u}`;
                    return t || (n = "" === c ? `${n}&muscles=${s}` : `${n}&joints=${c}`), n
                },
                providesTags: ["Exercises"]
            }),
            getExerciseBySlug: e.query({
                query: ({
                    exerciseSlug: e
                }) => `/newapi/exercise/exercises/?slug=${e}`,
                providesTags: ["Exercise"]
            }),
            getExerciseById: e.query({
                query: ({
                    id: e
                }) => `/newapi/exercise/exercises/${e}/`,
                providesTags: ["Exercise"]
            }),
            getDirectory: e.query({
                query: ({
                    muscles: e,
                    equipment: s,
                    difficulty: r,
                    fitness_level: i = "",
                    gender: u = "",
                    sets: t = ""
                }) => {
                    const c = new URLSearchParams({});
                    return e && c.append("muscles", e), s && c.append("equipment", s), r && c.append("difficulty", r), i && c.append("fitness_level", i), u && c.append("gender", u), t && c.append("sets", t), `/newapi/exercise/exercises/directory/?${c.toString()}`
                },
                providesTags: ["ExerciseDirectory"]
            }),
            getQrCode: e.query({
                query: ({
                    id: e,
                    gender: s,
                    locale: r
                }) => `/newapi/exercise/exercises/${e}/qrcode/?gender=${s}&locale=${r}`
            }),
            getGenders: e.query({
                query: () => "/newapi/exercise/gender/"
            }),
            shuffle: e.mutation({
                query: ({
                    id: e,
                    equipment_id_list: s,
                    fitness_level: r,
                    gender: i,
                    sets: u
                }) => ({
                    url: `newapi/exercise/exercises/${e}/shuffle/`,
                    method: "POST",
                    body: {
                        equipment_id_list: s,
                        fitness_level: r,
                        gender: i,
                        sets: u
                    }
                })
            })
        })
    }),
    {
        useSearchQuery: r,
        useGetEquipmentsQuery: i,
        useGetEquipmentsWorkoutGeneratorQuery: u,
        useGetDifficultiesQuery: t,
        useGetMusclesQuery: c,
        useGetExercisesQuery: n,
        useGetSearchExercisesQuery: a,
        useGetExerciseBySlugQuery: o,
        useGetExerciseByIdQuery: p,
        useGetDirectoryQuery: d,
        useGetQrCodeQuery: y,
        useGetGendersQuery: l,
        useShuffleMutation: g
    } = s;
export {
    c as a, d as b, i as c, t as d, o as e, l as f, n as g, y as h, r as i, g as j, u
};