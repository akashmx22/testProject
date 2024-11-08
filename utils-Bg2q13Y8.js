const e = {
        Novice: "text-gray-50 from-[#fcba03] to-[#a87c02] ring-yellow-800/20 ",
        Beginner: "text-gray-50 from-mw-green to-mw-green-900 ring-mw-green-800 ",
        Intermediate: "text-gray-50 from-mw-blue to-mw-blue-900 ring-mw-blue-800",
        Advanced: "text-gray-50 from-mw-red to-mw-red-900 ring-mw-red-800"
    },
    r = ({
        gender: e,
        genders: r
    }) => {
        let t = "",
            s = "";
        return r.results.forEach((r => {
            t = (null == r ? void 0 : r.name_en_us.toLowerCase()) || r.name.toLowerCase(), Object.values(r).forEach((r => {
                try {
                    r.toLowerCase() === e.toLowerCase() && (s = "male" === t)
                } catch (a) {}
            }))
        })), s
    };

function t(e, r, t, s) {
    const a = (e, r, t) => {
        var s, a;
        const n = [];
        if (e.sets.regular)
            for (let o = 0; o < e.sets.regular; o += 1) n.push({
                order: o,
                range: r * ((null == (s = e.reps) ? void 0 : s.includes("min")) ? 60 : 1),
                load: t
            });
        else
            for (let o = 0; o < e.sets; o += 1) n.push({
                order: o,
                range: r * ((null == (a = e.reps) ? void 0 : a.includes("min")) ? 60 : 1),
                load: t
            });
        return n
    };
    return {
        exercises: e.map(((e, t) => {
            let s = 0;
            e.reps ? s = Math.max(...e.reps.replaceAll("s", "").replaceAll("-min", "").split("-").map(Number)) : e.reps_or_duration_count && (s = Math.max(...e.reps_or_duration_count.split("-").map(Number)));
            let n = 0;
            return e.sets.regular ? n = e.sets.regular : e.sets && (n = e.sets), {
                user: r,
                sets: a(e, s, 0),
                order: t,
                rest: 120,
                total_load: 0 * s * n,
                exercise: e.exercise.id,
                category: e.exercise.category.name
            }
        })),
        name: t,
        user: r,
        is_template: !0,
        source: s,
        created_utm: "W"
    }
}

function s() {
    function e() {
        return (65536 * (1 + Math.random()) * (new Date).getMilliseconds() | 0).toString(16).substring(1)
    }
    return `${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`
}
export {
    r as a, t as c, s as g, e as s
};