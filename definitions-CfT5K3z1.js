import {
    P as e
} from "./index-BWUEYic3.js";
const s = e.bool,
    i = e.shape({
        price: e.string,
        old_price: e.string,
        free_trial_days: e.number,
        bg_color: e.string,
        id: e.number,
        header: e.shape({
            text: e.string,
            color: e.string
        }),
        subheader: e.shape({
            text: e.string,
            color: e.string
        }),
        period: e.shape({
            text: e.string,
            color: e.string
        }),
        button: e.shape({
            text: e.string,
            color: e.string,
            bg_color: e.string
        }),
        features: e.arrayOf(e.shape({
            text: e.string,
            color: e.string
        })),
        featured: e.bool
    }),
    r = e.shape({
        id: e.string.isRequired,
        mapping: e.string.isRequired,
        slot: e.string.isRequired
    }),
    a = e.arrayOf(r);
e.bool, e.func;
const t = {
        isDimissable: e.bool
    },
    n = e.shape({
        id: e.number,
        name: e.string,
        slug: e.string,
        target_url: e.shape({
            male: e.string,
            female: e.string
        }),
        male_images: e.arrayOf(e.shape({
            og_image: e.string,
            branded_video: e.string
        })),
        female_images: e.arrayOf(e.shape({
            og_image: e.string
        })),
        difficulty: e.shape({
            name: e.string
        }),
        category: e.shape({
            name: e.string,
            name_en_us: e.string
        }),
        muscles_primary: e.arrayOf(e.shape({
            name: e.string
        })),
        muscles_secondary: e.arrayOf(e.shape({
            name: e.string
        })),
        muscles_tertiary: e.arrayOf(e.shape({
            name: e.string
        }))
    }),
    u = e.shape({
        exercise: n.isRequired,
        fatigue: e.shape({
            muscle_name: e.string.isRequired,
            fatigue: e.number.isRequired,
            daily_gradient: e.string.isRequired,
            weekly_gradient: e.string.isRequired
        })
    }),
    g = {
        filters: e.arrayOf(e.shape({
            id: e.string,
            name: e.string,
            options: e.arrayOf(e.shape({
                name: e.string
            })),
            selectedItems: e.shape({
                id: e.oneOfType([e.string, e.number]),
                name: e.string
            }),
            callback: e.func
        })).isRequired,
        advanced: e.bool.isRequired,
        showJoints: e.bool.isRequired,
        equipmentClicked: e.func.isRequired,
        equipment: e.shape({
            id: e.oneOfType([e.string, e.number]),
            name: e.string
        }).isRequired
    },
    d = {
        bodyMapClass: e.string,
        className: e.string.isRequired,
        isJoints: e.bool,
        jointClass: e.string,
        isWorkoutGenerator: e.string
    },
    o = {
        bodyMapClass: "body-map__muscle",
        isJoints: !1,
        isWorkoutGenerator: !1
    },
    m = {
        shouldNavigate: e.bool
    },
    l = {
        shouldNavigate: !0
    },
    p = {
        src: e.string.isRequired,
        alt: e.string.isRequired,
        style: e.object,
        className: e.string
    },
    c = {
        className: e.string.isRequired
    },
    h = {
        slides: e.shape({
            length: e.number,
            map: e.func
        }).isRequired,
        selectedItems: e.shape([]).isRequired,
        setSelectedItems: e.func.isRequired
    },
    q = {
        article: e.shape({
            author: e.shape({
                name: e.string,
                id: e.number,
                author_role: e.string,
                profile_image: e.string,
                url: e.string
            }).isRequired,
            category: e.shape({
                name: e.string,
                id: e.number
            }).isRequired,
            title: e.string.isRequired,
            description: e.string.isRequired,
            body: e.string.isRequired,
            citations: e.string,
            created_at: e.string,
            id: e.number.isRequired,
            image: e.string,
            slug: e.string.isRequired,
            featured_article: e.bool.isRequired,
            seo_tags: e.shape([]).isRequired
        }).isRequired,
        selectedItems: e.shape([]).isRequired,
        setSelectedItems: e.func.isRequired,
        selectedSearchTags: e.shape([]).isRequired
    },
    R = {
        article: e.shape({
            author: e.shape({
                name: e.string,
                id: e.number,
                author_role: e.string,
                profile_image: e.string,
                url: e.string
            }).isRequired,
            category: e.shape({
                name: e.string,
                id: e.number
            }).isRequired,
            title: e.string.isRequired,
            description: e.string.isRequired,
            body: e.string.isRequired,
            citations: e.string,
            created_at: e.string,
            id: e.number.isRequired,
            image: e.string,
            slug: e.string.isRequired,
            featured_article: e.bool.isRequired,
            seo_tags: e.shape([]).isRequired
        }).isRequired,
        selectedItems: e.shape([]).isRequired,
        setSelectedItems: e.func.isRequired,
        selectedSearchTags: e.shape([]).isRequired,
        setSelectedTags: e.func
    },
    f = {
        workout: e.shape({
            description: e.string.isRequired,
            name: e.string.isRequired,
            difficulty: e.number,
            equipment: e.arrayOf(e.number).isRequired,
            exercises: e.arrayOf(e.shape({
                exercise: e.arrayOf(e.shape({
                    id: e.number,
                    name: e.string,
                    male_images: e.arrayOf(e.shape({
                        og_image: e.string
                    })),
                    female_images: e.arrayOf(e.shape({
                        og_image: e.string
                    })),
                    difficulty: e.shape({
                        name: e.string
                    }),
                    muscles_primary: e.arrayOf(e.shape({
                        name: e.string
                    })),
                    muscles_secondary: e.arrayOf(e.shape({
                        name: e.string
                    })),
                    muscles_tertiary: e.arrayOf(e.shape({
                        name: e.string
                    })),
                    target_url: e.arrayOf(e.shape({
                        male: e.string,
                        female: e.string
                    }))
                })),
                reps_or_duration_count: e.string,
                sets: e.string
            })),
            goalType: e.shape({
                name: e.string
            }).isRequired,
            id: e.number.isRequired,
            slug: e.string.isRequired,
            src_image: e.string
        }).isRequired,
        difficulties: e.arrayOf(e.shape({
            id: e.number,
            name: e.string
        })).isRequired,
        equipments: e.arrayOf(e.shape({
            id: e.number,
            name: e.string
        })).isRequired,
        favorite: e.shape({
            id: e.number,
            workout: e.number
        }).isRequired,
        inMyWorkouts: e.shape({
            id: e.number,
            workout: e.number
        }).isRequired,
        setUpdateCards: e.func.isRequired,
        myWorkouts: e.arrayOf(e.shape({
            id: e.number,
            name: e.string
        })).isRequired
    };
export {
    R as A, d as B, h as C, g as E, q as F, s as G, p as L, c as M, i as S, m as T, u as W, a as Y, o as a, l as b, t as c, f as d, n as e
};