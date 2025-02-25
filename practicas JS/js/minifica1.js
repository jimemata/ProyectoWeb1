! function(e, t) {
    var n, r, a = e.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        i = "_html5shiv",
        l = 0,
        s = {};

    function m() { var e = f.elements; return "string" == typeof e ? e.split(" ") : e }

    function d(e) { var t = s[e[i]]; return t || (t = {}, l++, e[i] = l, s[l] = t), t }

    function h(e, n, a) { var i; return (n || (n = t), r) ? n.createElement(e) : (a || (a = d(n)), !(i = a.cache[e] ? a.cache[e].cloneNode() : c.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e)).canHaveChildren || o.test(e) || i.tagUrn ? i : a.frag.appendChild(i)) }

    function u(e) { e || (e = t); var a, o, c, i, l, s = d(e); if (f.shivCSS && !n && !s.hasCSS) { s.hasCSS = (o = (a = e).createElement("p"), c = a.getElementsByTagName("head")[0] || a.documentElement, o.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", !!c.insertBefore(o.lastChild, c.firstChild)) } return !r && (i = e, (l = s).cache || (l.cache = {}, l.createElem = i.createElement, l.createFrag = i.createDocumentFragment, l.frag = l.createFrag()), i.createElement = function(e) { return f.shivMethods ? h(e, i, l) : l.createElem(e) }, i.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-:]+/g, function(e) { return l.createElem(e), l.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(f, l.frag)), e }! function() {
        try {
            var e, a = t.createElement("a");
            a.innerHTML = "<xyz></xyz>", n = "hidden" in a, r = 1 == a.childNodes.length || (t.createElement("a"), e = t.createDocumentFragment(), void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement)
        } catch (o) { n = !0, r = !0 }
    }();
    var f = { elements: a.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: "3.7.3-pre", shivCSS: !1 !== a.shivCSS, supportsUnknownElements: r, shivMethods: !1 !== a.shivMethods, type: "default", shivDocument: u, createElement: h, createDocumentFragment: function e(n, a) { if (n || (n = t), r) return n.createDocumentFragment(); for (var o = (a = a || d(n)).frag.cloneNode(), c = 0, i = m(), l = i.length; c < l; c++) o.createElement(i[c]); return o }, addElements: function e(t, n) { var r = f.elements; "string" != typeof r && (r = r.join(" ")), "string" != typeof t && (t = t.join(" ")), f.elements = r + " " + t, u(n) } };
    e.html5 = f, u(t), "object" == typeof module && module.exports && (module.exports = f)
}("undefined" != typeof window ? window : this, document);