import {
    B as e
} from "./BaseApi-4_v6cvNs.js";
const s = e.injectEndpoints({
        endpoints: e => ({
            getMuscles: e.query({
                query: () => "/newapi/muscle/muscles/",
                providesTags: ["Muscles"]
            }),
            getFitnessLevel: e.query({
                query: () => "/newapi/muscle/fitness_level/"
            }),
            getSetDifficulty: e.query({
                query: () => "/newapi/muscle/set_difficulty/"
            }),
            getMusclesGroup: e.query({
                query: () => "/newapi/muscle/musclegroups/"
            })
        })
    }),
    {
        useGetMusclesQuery: u,
        useGetFitnessLevelQuery: t,
        useGetSetDifficultyQuery: i,
        useGetMusclesGroupQuery: r
    } = s;
export {
    t as a, r as u
};