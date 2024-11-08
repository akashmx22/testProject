var a = {};
! function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.install = a.initDataLayer = a.gtag = a.default = void 0;
    var t = a.initDataLayer = function() {
        window.dataLayer = window.dataLayer || []
    };
    a.install = function(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = "ga-gtag";
        if (!document.getElementById(i)) {
            var o = document.head,
                d = document.createElement("script");
            d.id = i, d.async = !0, d.src = "https://www.googletagmanager.com/gtag/js?id=".concat(a), o.insertBefore(d, o.firstChild), t(), e("js", new Date), e("config", a, n)
        }
    };
    var e = a.gtag = function() {
        window.dataLayer.push(arguments)
    };
    a.default = e
}(a);
export {
    a as l
};