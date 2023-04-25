var _tmr = _tmr || [];
(function() {
    function w(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function H(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function Oa(a, b) {
        try {
            if (a.nodeName.toLowerCase() === b.toLowerCase()) return a;
            if (a.parentNode) return Oa(a.parentNode, b)
        } catch (c) {
            p && console.warn("[TopMailRu] Error#1.25", c)
        }
        return null
    }

    function Pa(a, b) {
        if (null === a.offsetParent || (0 == a.offsetHeight || 0 == a.offsetWidth || 0 == a.clientHeight ||
                0 == a.clientWidth) || b && (0 == a.offsetLeft || 0 == a.offsetTop)) return !1;
        if (void 0 !== l.getComputedStyle) {
            var c = l.getComputedStyle(a, null);
            return "none" !== c.display && "hidden" !== c.visibility
        }
        return !0
    }

    function da(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
        return !1
    }

    function T(a) {
        var b = typeof a;
        return !("number" === b || "boolean" === b || "string" === b || a.nodeType || a === a.window)
    }

    function K(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function U() {
        var a = arguments,
            b = a[0] || {},
            c = !1,
            d = 1,
            f = a.length,
            g, e, h, t, k;
        "boolean" === typeof b && (c = b, b = a[d++] || {});
        for (T(b) || (b = {}); d < f; d++)
            if (null != (g = a[d]))
                for (e in g) h = b[e], t = g[e], b !== t && (c && t && (T(t) || (k = K(t))) ? (k ? (k = !1, h = h && K(h) ? h : []) : h = h && T(h) ? h : {}, b[e] = U(c, h, t)) : void 0 !== t && (b[e] = t));
        return b
    }

    function vb(a, b, c) {
        if (!a) return null;
        var d = a.match(b),
            f = 2 < arguments.length ? c : 0;
        return d && d.length > f ? d[f] : null
    }

    function Qa(a) {
        return ("" + a).replace(/[\/\^\$\*\+\?\.\|\(\)\[\]\{\}\\]/g, "\\$&")
    }

    function Ra(a) {
        var b = "";
        try {
            var c = new Uint8Array(a);
            l.crypto.getRandomValues(c);
            for (var d = 0; d < a; d++) b += (c[d] % 16).toString(16)
        } catch (f) {
            b = "";
            for (d = 0; d < a; d++) c = Math.floor(16 * Math.random()), b += c.toString(16)
        }
        return b
    }

    function y() {
        return (new Date).getTime()
    }

    function F(a, b) {
        var c = {
            data: b,
            raw: a,
            url: "https://top-fwz1.mail.ru" + a
        };
        if (void 0 === b) c.dataSplitter = ";", c.open = wb, c.connect = xb, c.startListen = yb, c.stopListen = zb, c.open(c), c.connect(c);
        else {
            var d;
            "function" === typeof l.XMLHttpRequest ? (c.dataSplitter = ";", c.open = Ab, c.connect = Bb, c.startListen = Cb, c.stopListen = Db, c.open(c), c.connect(c),
                d = !0) : d = !1;
            d || Eb(c)
        }
    }

    function Eb(a) {
        var b = k.createElement("iframe"),
            c = k.createElement("div");
        c.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
        c.appendChild(b);
        k.body.appendChild(c);
        try {
            var d = b.contentWindow.document,
                f = d.createElement("div"),
                g;
            for (g in a.data)
                if (a.data.hasOwnProperty(g)) {
                    var e = a.data[g],
                        h = typeof e;
                    if ("string" === h || "number" === h) {
                        var t = d.createElement("input");
                        t.setAttribute("type",
                            "hidden");
                        t.setAttribute("name", g);
                        t.value = e;
                        f.appendChild(t)
                    }
                }
            var l = d.createElement("form");
            l.setAttribute("action", a.url);
            l.setAttribute("method", Sa);
            l.setAttribute("enctype", Ta);
            l.appendChild(f);
            var m = d.createElement("div");
            m.appendChild(l);
            d.body.appendChild(m);
            var q = function() {
                try {
                    H(b, "load", q), k.body.removeChild(c)
                } catch (a) {
                    p && console.warn("[TopMailRu] Error#1.2", a)
                }
            };
            w(b, "load", q);
            l.submit()
        } catch (n) {
            p && console.warn("[TopMailRu] Error#1.3", n)
        }
    }

    function Ab(a) {
        a._connection = new l.XMLHttpRequest
    }

    function Bb(a) {
        a._connection.open(Sa, a.url);
        a._connection.setRequestHeader("Content-Type", Ta);
        a._connection.send(ya(a.data, a.dataSplitter))
    }

    function Cb(a) {
        w(a._connection, "load", a._onload);
        w(a._connection, "error", a._onerror)
    }

    function Db(a) {
        H(a._connection, "load", a._onload);
        H(a._connection, "error", a._onerror)
    }

    function wb(a) {
        a._connection = new Image
    }

    function xb(a) {
        a._connection.src = a.url + ya(a.data, a.dataSplitter)
    }

    function yb(a) {
        a._connection.onload = a._onload;
        a._connection.onerror = a._onerror
    }

    function zb(a) {
        a._connection.onload =
            null;
        a._connection.onerror = null
    }

    function ya(a, b) {
        var c = b || ";",
            d = "",
            f;
        for (f in a)
            if (a.hasOwnProperty(f)) {
                var g = a[f],
                    e = typeof g;
                if ("string" === e || "number" === e) d += c + escape(f) + "=" + escape(g)
            }
        return d
    }

    function V(a) {
        return (a = k.cookie.match(RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : null
    }

    function ea(a, b, c) {
        c = c || {};
        var d = c.expires;
        "number" === typeof c.expires && (d = new Date, d.setTime(d.getTime() + c.expires));
        d && d.toUTCString && (d = d.toUTCString());
        c.expires =
            d;
        a = a + "=" + encodeURIComponent(b);
        for (var f in c)
            if ((b = c[f]) || 0 === b) a += "; " + f, !0 !== b && (a += "=" + b);
        k.cookie = a
    }

    function za(a, b) {
        var c = b || {};
        c.expires = -1;
        ea(a, "", c)
    }

    function Fb() {
        var a = "tmr" + ("" + Math.random()).slice(2);
        try {
            return W = l.localStorage || null, W.setItem(a, a), W.removeItem(a), !0
        } catch (b) {
            return W = null, p && console.warn("[TopMailRu] Error#1.4", b), !1
        }
    }

    function Aa(a) {
        try {
            return W.getItem(a)
        } catch (b) {
            p && console.warn("[TopMailRu] Error#1.5", b)
        }
        return null
    }

    function Ba(a, b) {
        try {
            W.setItem(a, b)
        } catch (c) {
            p &&
                console.warn("[TopMailRu] Error#1.6", c)
        }
    }

    function Gb() {
        if (!X) return null;
        for (var a = C.hostname.split(".").reverse(), b, c = 1, d = a.length; c < d; c++) {
            b = a[0];
            for (var f = 1; f <= c; f++) b = a[f] + "." + b;
            var f = "" + y(),
                g = {
                    domain: b,
                    path: "/",
                    expires: 3E5
                };
            try {
                ea("tmr_tcdhn", f, g);
                var e = V("tmr_tcdhn");
                za("tmr_tcdhn", g);
                if (e === f) return b
            } catch (h) {
                p && console.warn("[TopMailRu] Error#1.8", h)
            }
        }
        return null
    }

    function Ua(a, b) {
        X && ea(a, b, Ca);
        P && Ba(a, b)
    }

    function Va(a) {
        var b = ";e=" + escape("detect");
        F(I(a, "/tracker", !1, !1) + b)
    }

    function Wa(a,
        b) {
        if (a.length && null !== b.ecom_data) {
            var c = fa(b.ecom_data),
                c = c ? ("" + c).substring(1, c.length - 1) : "";
            if (!(4096 < c.length || -1 === c.search(/\S/))) {
                var d = Da("_m", b.ecom_method),
                    f = Da("_t", b.ecom_type),
                    g = Da("_jst", Xa()),
                    c = "{" + c + d + f + g + "}";
                F(I({
                    id: a[0]
                }, "/datalayer", !1, !0) + (";ids=" + escape(a.join())) + (";e=" + escape(c)))
            }
        }
    }

    function Da(a, b) {
        var c = ',"' + a + '":';
        if (!b || !b.length) return c + "[]";
        try {
            return c + '["' + b.join('","') + '"]'
        } catch (d) {}
        return c + "false"
    }

    function Hb() {
        var a = V(Ya);
        if (null === a) return null;
        a = a.split("|");
        if (3 !== a.length) return null;
        var b = a[2],
            b = y() - b;
        return 0 > b || b > Za ? null : {
            id: a[0],
            version: a[1]
        }
    }

    function m() {}

    function ga(a) {
        a && "object" === typeof a && (!M && "id" in a) && (M = a.id)
    }

    function Ib(a) {
        return (a = !N ? void 0 : N[a]) && Ea ? a - Ea : void 0
    }

    function $a() {
        if (N) {
            for (var a = 0, b = "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "), c = 0; c < b.length; c++) {
                var d = !N ? void 0 : N[b[c]];
                if (0 < d && (d < a || 0 == a)) a = d
            }
            return a ? a : void 0
        }
    }

    function ha(a) {
        return a && "object" ===
            typeof a && ("id" in a && a.id || M)
    }

    function I(a, b, c, d) {
        P && Ba(ia, ++z);
        var f = "id" in a ? a.id : M,
            g = "url" in a ? a.url : C.href,
            e = "referrer" in a ? a.referrer : k.referrer,
            h = "title" in a ? a.title : k.title,
            t;
        t = Fa;
        null === t && (t = Jb());
        t = null !== t ? t ? 1 : 0 : null;
        var m = "userid" in a ? a.userid : J || 0 === J ? J : void 0,
            qa = Q ? Q : void 0,
            q;
        q = [];
        M && f !== M && q.push("sec");
        "dataLayer" in l && q.push("dl");
        D && q.push(["ecom"].concat(D).join("-"));
        var n = Kb();
        n && n.length && q.push(["jst"].concat(n).join("-"));
        q = q.join(",");
        var r = l.screen,
            s, n = (new Date).getTimezoneOffset();
        s = "";
        if (l.Intl) try {
            s = l.Intl.DateTimeFormat().resolvedOptions().timeZone || ""
        } catch (Lb) {
            p && console.warn("[TopMailRu] Error#1.1", Lb)
        }
        s = n + "/" + s;
        n = ab;
        n = null !== n ? n : Hb();
        a.start = $a();
        b = b + "?js=13" + (f ? ";id=" + escape(f) : "") + (g ? ";u=" + escape(g) : "") + (e ? ";r=" + escape(e) : "") + (a.start ? ";st=" + escape(a.start) : "") + ("gender" in a ? ";gender=" + escape(a.gender) : "") + ("age" in a ? ";age=" + escape(a.age) : "") + ("pid" in a ? ";pid=" + escape(a.pid) : "") + (void 0 !== m ? ";userid=" + escape(m) : "") + (void 0 !== qa ? ";uparams=" + escape(fa(qa)) : "") + (d && h ?
            ";title=" + encodeURIComponent(h) : "") + (r ? ";s=" + r.width + "*" + r.height : "") + ";vp=";
        f = d = 0;
        k.documentElement && (k.documentElement.clientWidth || k.documentElement.clientHeight) ? (d = k.documentElement.clientWidth, f = k.documentElement.clientHeight) : "number" == typeof l.innerWidth && (d = l.innerWidth, f = l.innerHeight);
        b = b + ("" + d + "*" + f) + ";touch=" + Mb + ";hds=" + Nb + ";frame=" + Ob + ";flash=";
        if (null === ja)
            if (ja = "", O.plugins && O.plugins["Shockwave Flash"]) ja = O.plugins["Shockwave Flash"].description.split(" ")[2];
            else if (l.ActiveXObject) try {
            var v =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                v = v.GetVariable("$version"),
                v = v.split(" ")[1].split(",");
            ja = v[0] + "." + v[1]
        } catch (Pb) {
            p && console.warn("[TopMailRu] Error#1.12", Pb)
        }
        v = b + ja + ";sid=" + bb + ";ver=" + cb + ";tz=" + encodeURIComponent(s);
        if (c) {
            if (!N || !Ga) c = "";
            else {
                c = [];
                c.push(Ga.type);
                c.push(Ga.redirectCount);
                c.push(Ea);
                for (b = 0; b < db.length; b++) c.push(Ib(db[b]));
                c = c.join("/")
            }
            c = ";nt=" + c
        } else c = "";
        c = v + c + ("device" in a ? ";device=" + escape(a.device) : "") + ";ni=";
        if (!O || !O.connection) v = "";
        else {
            v = O.connection;
            b = [];
            for (f = 0; f < eb.length; f++) {
                d = v[eb[f]];
                if (void 0 !== d) switch (d) {
                    case !0:
                        d = 1;
                        break;
                    case !1:
                        d = 0;
                        break;
                    default:
                        d = ("" + d).replace(/\//g, "_")
                }
                b.push(d)
            }
            v = b.join("/")
        }
        return c + v + ("params" in a ? ";params=" + escape(fa(a.params)) : "") + (null !== t ? ";detect=" + t : "") + (X || P ? ";lvid=" + escape([ka, y(), z, Y].join(":")) : "") + (q ? ";opts=" + escape(q) : "") + (n ? ";flocid=" + escape(n.id) + ";flocv=" + escape(n.version) : "") + ("version" in a ? ";appver=" + escape(a.version) : "") + (Z.support ? ";visible=" + Z.getValue() : "") + ";_=" + Math.random()
    }

    function fb(a) {
        a =
            ";e=" + escape("PVT/" + a);
        for (var b = 0; b < B.length; b++) F(I(B[b], "/tracker", !1, !0) + a)
    }

    function Qb() {
        Fa = !0;
        gb(1);
        if (!Ha && !la) {
            la = !0;
            for (var a = 0; a < B.length; a++) Va(B[a])
        }
    }

    function Rb() {
        gb(0);
        Fa = !1
    }

    function Jb() {
        var a = V(hb);
        if (null === a) return null;
        a = a.split("|");
        if (2 !== a.length) return null;
        var b = a[1],
            b = y() - b;
        if (0 > b || b > ib) return null;
        a = parseInt(a[0], 10);
        return isNaN(a) ? null : a
    }

    function gb(a) {
        var b = y();
        a = [a, b].join("|");
        ea(hb, a, {
            path: "/",
            expires: ib
        })
    }

    function Sb(a, b, c, d) {
        if (!b || !d || d === Ia && b === Ia && c === Ia) return null;
        b = {
            goal: Tb + b,
            value: c || 0,
            params: {
                product_id: d
            }
        };
        a && (b.id = a);
        return b
    }

    function ra() {
        k.addEventListener ? (H(k, "DOMContentLoaded", ra), _tmr.onready()) : k.attachEvent && "complete" === k.readyState && (H(k, "readystatechange", ra), _tmr.onready())
    }

    function jb() {
        H(l, "load", jb);
        _tmr.onready();
        _tmr.onload()
    }

    function sa() {
        H(l, "unload", sa);
        H(l, "beforeunload", sa);
        _tmr.unload()
    }
    if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
        var l = window,
            O = navigator,
            k = document,
            C = location,
            $ = "string" === typeof C.hostname ? C.hostname :
            "",
            ma = -1 != $.search(/(^|\.)odnoklassniki\.ru$/) || -1 != $.search(/(^|\.)ok\.ru$/),
            na = -1 != $.search(/(^|\.)vk\.com$/);
        $.search(/(^|\.)mail\.ru$/);
        var Ub = -1 != $.search(/(^|\.)lamoda\.ru$/),
            Vb = -1 != $.search(/(^|\.)kommersant\.ru$/),
            Wb = "string" === typeof C.search && -1 != C.search.search(/[?&]rb_clickid=/),
            p = "string" === typeof C.search && -1 != C.search.search(/[?&]tmr_debug=1(?:&|$)/),
            kb = ma || na || Ub || Vb,
            Xb = !Wb,
            Yb = ma || na,
            Zb = ma || na,
            lb = ma || na,
            Ha = !1,
            $b = !(ma || na),
            fa = l.JSON && JSON.stringify ? JSON.stringify.bind(JSON) : function(a) {
                return ""
            },
            Sa = "POST",
            Ta = "application/x-www-form-urlencoded",
            X = !(0 === C.hostname.search(/^(\d+.)+\d+$/g) || -1 !== C.hostname.search(/:/g)),
            W = null,
            P = Fb(),
            Ca = {
                domain: Gb(),
                path: "/",
                expires: 287712E5
            };
        (function() {
            var a;
            if (a = k.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g"))) {
                for (var b = [], c, d = 0, f = a.length; d < f; d++) c = a[d], (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) && b.push(c.slice(1));
                a = b
            } else a = null;
            if (a) {
                d = 0;
                for (f = a.length; d < f; d++) b = a[d][0], za(b, Ca)
            }
        })();
        var la = !1,
            Fa = null,
            ib = 864E5,
            hb = "tmr_detect",
            ac = function() {
                function a(a,
                    b) {
                    for (var c = a.length, e, h, k = 0; k < b; k++) h = Math.floor(Math.random() * c), e = a[k], a[k] = a[h], a[h] = e;
                    return a.slice(0, b)
                }

                function b(b, f) {
                    var g = k.createElement("div"),
                        e = String.fromCharCode(97, 100, 118, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 98, 108, 111, 99, 107, 32, 97, 100, 118, 101, 114, 116, 66, 108, 111, 99, 107, 32, 98, 45, 114, 98, 32, 98, 97, 110, 110, 101, 114, 95, 50, 52, 48, 32, 112, 45, 116, 97, 114, 103, 101, 116, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 32, 112, 117, 98, 95, 51, 48, 48, 120, 50, 53, 48, 109, 32, 112, 117, 98, 95, 55, 50, 56, 120, 57, 48, 32,
                            114, 98, 95, 98, 111, 100, 121, 32, 114, 98, 45, 102, 108, 111, 97, 116, 105, 110, 103, 32, 114, 98, 45, 115, 108, 111, 116, 32, 114, 98, 45, 118, 105, 100, 101, 111, 45, 119, 105, 100, 103, 101, 116, 32, 116, 101, 120, 116, 45, 97, 100, 32, 116, 101, 120, 116, 45, 97, 100, 45, 108, 105, 110, 107, 115, 32, 116, 101, 120, 116, 45, 97, 100, 115, 32, 116, 101, 120, 116, 45, 98, 97, 110, 110, 101, 114, 32, 116, 101, 120, 116, 95, 97, 100, 32, 116, 101, 120, 116, 95, 97, 100, 115, 32, 116, 101, 120, 116, 65, 100, 32, 116, 101, 120, 116, 97, 100, 32, 116, 101, 120, 116, 65, 100, 115, 32, 116, 101, 120, 116, 97, 100, 115, 32, 116, 103,
                            98, 45, 98, 97, 110, 110, 101, 114, 32, 116, 114, 103, 45, 98, 45, 98, 97, 110, 110, 101, 114, 45, 98, 108, 111, 99, 107).split(" "),
                        e = a(e, c);
                    g.setAttribute("class", e.join(" "));
                    g.setAttribute("style", "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
                    g.setAttribute("id", "trg-b-banners-1");
                    g.setAttribute("data-view", "SlotView.mimic");
                    this.bait = k.body.appendChild(g);
                    this.bait.offsetParent;
                    this.bait.offsetHeight;
                    this.bait.offsetLeft;
                    this.bait.offsetTop;
                    this.bait.offsetWidth;
                    this.bait.clientHeight;
                    this.bait.clientWidth;
                    this.loopNumber = 0;
                    this.fnPositive = b || null;
                    this.fnNegative = f || null;
                    var h = this;
                    setTimeout(function() {
                        h._checkBait.call(h)
                    }, 1)
                }
                var c = 7;
                b.prototype._checkBait = function() {
                    if (la) this._stop();
                    else {
                        var a = null !== k.body.getAttribute("abp") || !Pa(this.bait, !0);
                        (!0 === a || 10 <= ++this.loopNumber) && this._stop();
                        var b;
                        if (a && this.fnPositive) try {
                            b = this.fnPositive, b()
                        } catch (c) {
                            p && console.warn("[TopMailRu] Error#1.9", c)
                        } else if (!a && 10 > this.loopNumber) {
                            var e =
                                this;
                            setTimeout(function() {
                                e._checkBait.call(e)
                            }, 50 * this.loopNumber)
                        } else try {
                            b = this.fnNegative, b()
                        } catch (h) {
                            p && console.warn("[TopMailRu] Error#1.10", h)
                        }
                    }
                };
                b.prototype._stop = function() {
                    try {
                        k.body.removeChild(this.bait)
                    } catch (a) {
                        p && console.warn("[TopMailRu] Error#1.11", a)
                    }
                };
                return function(a, c) {
                    new b(a, c)
                }
            }(),
            D = null,
            mb = "ecommerce",
            G = "dataLayer",
            aa = null,
            Ja = !1,
            ta = [],
            bc = [36383, 2540645, 3171181, 3074137, 2057653],
            cc = [],
            Ka;
        (function() {
            function a(a, b) {
                for (var c = 0, d = b.length; c < d; c++) - 1 === a.indexOf(b[c]) && a.push(b[c])
            }

            function b(b, c, d) {
                for (var f = {
                        ecom_method: [],
                        ecom_type: [],
                        ecom_data: {
                            events: []
                        }
                    }, n = 0, e = b.length; n < e; n++) {
                    var g = s[b[n]];
                    if (g) {
                        a(f.ecom_method, [b[n]]);
                        for (var h = 0, k = g.length; h < k; h++)
                            for (var r = 0, l = d.length; r < l; r++) {
                                var t = g[h][d[r]];
                                if (t)
                                    for (var u = 0, q = c.length; u < q; u++)
                                        if (-1 !== g[h].type.indexOf(c[u])) {
                                            a(f.ecom_type, [c[u]]);
                                            a(f.ecom_data.events, t);
                                            break
                                        }
                            }
                    }
                }
                return f
            }

            function c(a, b, c) {
                if (!a || !c || !(b in s)) return null;
                for (var d, f = 0, n = s[b].length; f < n; f++)
                    if (d = s[b][f], c in d && -1 !== d[c].indexOf(a)) return {
                        ecom_method: [b],
                        ecom_type: d.type.slice(),
                        ecom_data: {}
                    };
                return null
            }

            function d(a) {
                for (var d = [], e, s, l = 0, dc = a.length; l < dc; l++)
                    if (s = a[l]) {
                        e = null;
                        try {
                            if (s.ecommerce) e = f(s) || g(s);
                            else if (null === s.ecommerce) e = null;
                            else if (s.event) {
                                var q = {
                                    event: s.event,
                                    ecommerce: {}
                                };
                                e = f(q) || g(q)
                            } else if ("event" === s[0]) {
                                var nb = s[1],
                                    ec = s[2],
                                    A = c(nb, k, n);
                                A && (A.ecom_data[nb] = ec);
                                e = A
                            } else if (s.event === mb) a: {
                                for (var oa = b([h], [m], [r]), E = 0, u = oa.ecom_data.events.length; E < u; E++)
                                    if (!s.hasOwnProperty(oa.ecom_data.events[E])) {
                                        e = null;
                                        break a
                                    }
                                delete oa.ecom_data.events;
                                oa.ecom_data[mb] = s;e = oa
                            }
                        } catch (fc) {
                            p && console.warn("[TopMailRu] Error#1.23", fc), e = null
                        }
                        e && (d.push(e), ta.push(e))
                    }
                if (d.length) {
                    a = 0;
                    for (e = d.length; a < e; a++) Wa(ua, d[a]);
                    D || (D = [0, 0, G]);
                    D[0] += d.length;
                    e = a = 0;
                    for (l = d.length; e < l; e++) a += fa(d[e].ecom_data).length;
                    D[1] += a
                }
            }

            function f(a) {
                var b, d;
                for (d in a.ecommerce)
                    if (a.ecommerce.hasOwnProperty(d) && (b = c(d, h, qa))) {
                        if (a.event && (d = c(a.event, h, q)))
                            for (var e = 0, f = b.ecom_type.length; e < f; e++) - 1 === d.ecom_type.indexOf(b.ecom_type[e]) && (b.ecom_type.splice(e, 1), f--, e--);
                        b.ecom_data = a.ecommerce;
                        return b
                    }
                return null
            }

            function g(a) {
                var b = a.event,
                    d = c(b, h, q);
                d && (d.ecom_data[b] = a.ecommerce);
                return d
            }

            function e(a) {
                if ((a = l[a]) && "function" === typeof a.push) d(a), aa = a.push, a.push = function() {
                    var a = aa.apply(this, arguments);
                    d([].slice.call(arguments, 0));
                    return a
                }
            }
            var h = "push",
                k = "gtag",
                m = "gse",
                qa = "inner",
                q = "outer",
                n = "external",
                r = "required",
                s = {};
            s[k] = [{
                    type: ["gee"],
                    external: "add checkout checkout_option checkout_progress click detail promo_click remove select_content set_checkout_option view_refund".split(" ")
                },
                {
                    type: ["ga4"],
                    external: "earn_virtual_currency join_group level_end level_start level_up post_score select_content spend_virtual_currency tutorial_begin tutorial_complete unlock_achievement ad_impression login search share sign_up add_payment_info add_shipping_info add_to_wishlist generate_lead select_item select_promotion view_cart view_item_list".split(" ")
                }, {
                    type: ["gee", "ga4"],
                    external: "add_to_cart begin_checkout purchase refund remove_from_cart view_item view_promotion".split(" ")
                }
            ];
            s[h] = [{
                type: [m],
                required: ["transactionId", "transactionTotal"]
            }, {
                type: ["ga4"],
                outer: b([k], ["ga4"], [n]).ecom_data.events
            }, {
                type: ["gee"],
                inner: "click checkout checkout_option impressions promoClick promoView refund".split(" "),
                outer: "addToCart checkout checkoutOption productClick productDetail ProductImpressions promotionClick promotionView removeFromCart transactionPush".split(" ")
            }, {
                type: ["ym", "gee"],
                inner: ["add", "detail", "purchase", "remove"]
            }];
            Ka = function(a) {
                if (!(a === G && aa)) {
                    a !== G && (ta = []);
                    var b = l[G];
                    b && "function" ===
                        typeof b.push && aa && (b.push = aa, aa = null);
                    e(a);
                    Ja = !0
                }
            }
        })();
        var Xa = function() {
                var a = [{
                        id: "gtag",
                        globalVars: ["google_tag_manager"]
                    }, {
                        id: "ga",
                        globalVars: ["GoogleAnalyticsObject"]
                    }, {
                        id: "ym",
                        globalVars: ["Ya", {
                            re: "yaCounter\\d+"
                        }]
                    }, {
                        id: "vk",
                        globalVars: ["VK"]
                    }, {
                        id: "vk",
                        globalVars: ["vkAsyncInit"]
                    }],
                    b = {};
                return function() {
                    var c;
                    try {
                        c = Object.keys(l).join(",")
                    } catch (d) {
                        c = null
                    }
                    for (var f = [], g, e = 0, h = a.length; e < h; e++) {
                        g = b[a[e].id];
                        if (void 0 === g) a: {
                            g = a[e].globalVars;
                            for (var k = c, m = 0, p = g.length; m < p; m++) {
                                var q = g[m];
                                if ("string" ===
                                    typeof q && !(q in l) || "string" === typeof q.re && (k && -1 === k.search(RegExp("($|,)" + q.re + "(,|^)", "m")) || 1 === p)) {
                                    g = !1;
                                    break a
                                }
                            }
                            g = !0
                        }
                        g && (b[a[e].id] = !0, da(a[e].id, f) || f.push(a[e].id))
                    }
                    return f
                }
            }(),
            Kb = Xa,
            Za = 864E5,
            Ya = "tmr_floc",
            ab = null;
        (function(a) {
            try {
                k.interestCohort && "function" === typeof k.interestCohort && k.interestCohort().then(function(a) {
                    ab = {
                        id: a.id,
                        version: a.version
                    };
                    a = [a.id, a.version];
                    var b = y();
                    a = a.concat(b).join("|");
                    ea(Ya, a, {
                        path: "/",
                        expires: Za
                    })
                }, function() {})
            } catch (b) {}
        })();
        var Z = {
                support: !1
            },
            Z = function() {
                function a() {
                    d(g)
                }

                function b() {
                    d(g, x)
                }

                function c() {
                    return e ? !k[e] : null
                }

                function d(a, b) {
                    var d = y(),
                        e = "undefined" === typeof b ? c() : b;
                    if (null === q[a]) q[a] = {
                        ts: d,
                        state: e,
                        total: 0
                    };
                    else {
                        var g = q[a];
                        if (g.state !== e) {
                            var h = d - g.ts,
                                k = g.state;
                            g.ts = d;
                            g.state = e;
                            h < f || (k === m ? (g.total += h, n && n(d, h)) : k === p && r && r(d, h))
                        }
                    }
                }
                var f = 5,
                    g = "auto",
                    e = null,
                    h = null,
                    m = !0,
                    p = !1,
                    x = null;
                "hidden" in k ? (e = "hidden", h = "visibilitychange") : "mozHidden" in k ? (e = "mozHidden", h = "mozvisibilitychange") : "webkitHidden" in k ? (e = "webkitHidden", h = "webkitvisibilitychange") : "msHidden" in
                    k && (e = "msHidden", h = "msvisibilitychange");
                var q = {};
                q[g] = null;
                var n = q.user = null,
                    r = null;
                return {
                    support: !!e,
                    auto: function(c, d) {
                        n = c || null;
                        r = d || null;
                        e && (a(), w(k, h, a));
                        w(l, "beforeunload", b);
                        w(l, "unload", b)
                    },
                    set: function(a) {
                        d("user", !!a)
                    },
                    getLog: function() {
                        var a = y(),
                            b = {},
                            c, d;
                        for (d in q) c = q[d], b[d] = c ? c.total : 0, c && c.state && (b[d] += a - c.ts);
                        return b
                    },
                    getValue: c
                }
            }();
        Z.auto();
        var ob = {
                enabled: !1
            },
            ba = function() {
                function a(a, b) {
                    var c = ("" + a).match(f),
                        d = {};
                    d[e] = c;
                    for (var g = 0, h = c.length; g < h; g++) c[g] && (d[k[g]] = c[g]);
                    c =
                        1 < arguments.length && void 0 !== b;
                    delete d[e];
                    return c && !0 !== b ? d[b] || null : d
                }

                function b(a, b) {
                    var d;
                    d = ("" + a).match(g) || [];
                    var f = {};
                    f[e] = d;
                    if (d.length) {
                        for (var h = 0, k = d.length; h < k; h++) d[h] && (f[l[h]] = d[h]);
                        d = f
                    } else d = null;
                    if (!d) return null;
                    if ((f = 1 < arguments.length && void 0 !== b) && (-1 !== m.indexOf(b) || !0 === b))
                        for (var h = d, p = 0, t = m.length; p < t; p++)(k = c(q[p] || "", h, p)) && (h[m[p]] = k);
                    delete d[e];
                    return f && !0 !== b ? d[b] || null : d
                }

                function c(a, b, d) {
                    var e = "",
                        f;
                    if (T(a) && "data" in a) e = "index" in a ? (b[a.data] || [])[a.index] || "" :
                        c(a.data, b, d), "re" in a && (e = vb(e, a.re, a.reMatchIndex) || ""), e && (f = c(a.pre || "", b, d), a = c(a.post || "", b, d), e = f + e + a);
                    else if (K(a)) {
                        f = 0;
                        for (var g = a.length; f < g; f++) e += c(a[f], b, d)
                    } else e = l.indexOf(a), -1 === e && (e = m.indexOf(a), e >= d && (e = -1)), e = -1 !== e ? b[a] || "" : "" + a;
                    return e
                }

                function d(a) {
                    var b;
                    if (K(a)) {
                        b = [];
                        for (var c = 0, e = a.length; c < e; c++) b.push(d(a[c]));
                        return b
                    }
                    b = a instanceof RegExp ? a : RegExp("^" + Qa(a) + "$");
                    return b.test(ba.parse(C.href, "domain")) ? null : b
                }
                var f = /^((mailto|tel|fax|modem)\:)(.*)$/,
                    g = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?(?:((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5]))))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i,
                    e = "_raw",
                    h = "hash",
                    h = "hash",
                    k = ["href", "protocol", "contactBy", "contactTo"],
                    l = ["href", "scheme", "subscheme", "user", "pass", "hostname", "port", "pathname", "query", h],
                    m = ["protocol", "auth", "host", "domain", "path", "search", h, "fileExtension"],
                    q = [{
                            data: ["scheme", {
                                pre: ":",
                                data: "subscheme"
                            }],
                            post: ":"
                        },
                        [{
                            data: "user",
                            post: {
                                pre: ":",
                                data: "pass"
                            }
                        }],
                        [{
                            data: e,
                            index: 5,
                            post: {
                                pre: ":",
                                data: "port"
                            }
                        }], {
                            data: "host",
                            re: /^(?:w{3}.)?(.*)$/,
                            reMatchIndex: 1
                        },
                        ["pathname", {
                            pre: "?",
                            data: "query"
                        }], {
                            pre: "?",
                            data: "query"
                        }, {
                            pre: "#",
                            data: h
                        },
                        {
                            data: "pathname",
                            re: /.\.([^\.]+)$/,
                            reMatchIndex: 1
                        }
                    ];
                return {
                    parse: function(c, d) {
                        return !c ? null : f.test("" + c) ? a(c, d) : b(c, d)
                    },
                    getIsDomainRE: d,
                    getDomainMask: function(a, b, c) {
                        b = (b && 0 < b ? b : 2) - 1;
                        var d = 1;
                        a = ("" + a).replace(RegExp("^.*(?:\\.((?:[^\\.]+\\.){" + b + "}[^\\.]+$))"), "$1");
                        if (d = a.match(/\./g)) d = d.length;
                        a = "(?:^|\\.{" + (b - d + 1) + "})" + Qa(a) + "$";
                        return RegExp(c ? "^((?!" + a + ").)*$" : a)
                    }
                }
            }(),
            pb = function() {
                var a = "checkbox color date datetime-local email file month number password radio range search tel text time url week".split(" ");
                return {
                    analyze: function(b) {
                        if (!b) return null;
                        for (var c = [].slice.apply(b.elements), d = [], f = [], g = 0, e = c.length; g < e; g++) {
                            var h;
                            a: switch (h = c[g], h.tagName.toLowerCase()) {
                                case "button":
                                    h = !1;
                                    break a;
                                case "input":
                                    var k = h.type.toLowerCase();
                                    if (k && -1 === a.indexOf(k)) {
                                        h = !1;
                                        break a
                                    }
                                default:
                                    h = Pa(h, !1) && h.name && !1 === h.disabled
                            }
                            h && (d.push(c[g].name), f.push(c[g].type))
                        }
                        return {
                            node: b,
                            inputsName: d.length ? d : null,
                            inputsType: f.length ? f : null
                        }
                    },
                    getFormByInput: function(a) {
                        if (!a) return null;
                        a = a.form || a.getAttribute("form");
                        return "string" === typeof a ? document.getElementById(a) || null : a instanceof HTMLElement ? a : null
                    }
                }
            }(),
            ob = function() {
                function a(a) {
                    a = a || l.event;
                    var c = (a.which || a.keyCode) === I;
                    if ("which" in a && a.which === D || "button" in a && a.button & D || c) {
                        a: {
                            a = a.target || a.srcElement;
                            for (var c = 0, d = e.length; c < d; c++) {
                                var k;
                                b: {
                                    k = a;
                                    for (var A = e[c], n = 0, E = A.types.length; n < E; n++) {
                                        var u;
                                        c: {
                                            var s = k;u = A.types[n];
                                            var r = null;
                                            if (u.filter.tagName)
                                                for (var L = 0, v = u.filter.tagName.length; L < v && !(r = Oa(s, u.filter.tagName[L])); L++);
                                            else r = s;
                                            if (r) {
                                                if (u.filter.attr)
                                                    for (s in s =
                                                        void 0, u.filter.attr)
                                                        if (u.filter.attr.hasOwnProperty(s) && (L = u.filter.attr[s], v = r[s], !0 === L && !v || !1 === L && v || K(L) && -1 === L.indexOf(v))) {
                                                            u = null;
                                                            break c
                                                        }
                                                u = {
                                                    source: r,
                                                    type: u.type,
                                                    detail: r.tagName
                                                }
                                            } else u = null
                                        }
                                        if (u) {
                                            u.category = A.category;
                                            k = u;
                                            break b
                                        }
                                    }
                                    k = null
                                }
                                if (k) {
                                    a = k;
                                    break a
                                }
                            }
                            a = null
                        }
                        if (a) {
                            if (a.category === f) {
                                if (a.data = ba.parse(a.source.href, !0), !a.data) return
                            } else if (a.category === g) {
                                if (a.data = pb.analyze(pb.getFormByInput(a.source)), !a.data) return
                            } else return;
                            c = F;
                            if (c.enabled && c.modes) {
                                d = 0;
                                for (k = c.modes.length; d <
                                    k; d++)
                                    if (A = a, n = c.modes[d], A.category === n.mode)
                                        if (A.category === f || A.category === g) {
                                            if (n = n.categories, A.data) {
                                                E = void 0;
                                                c: {
                                                    E = 0;
                                                    for (u = n.length; E < u; E++) {
                                                        for (var r = A, s = n[E], L = {
                                                                category: A.category
                                                            }, v = [], w = 0, C = s.types.length; w < C; w++) {
                                                            var z = s.types[w],
                                                                G = U({
                                                                    type: s.category
                                                                }, L),
                                                                J = q in z,
                                                                H;
                                                            y in z ? H = b(r, z, G, y) : J && (H = U({
                                                                source: r.source,
                                                                data: r.data,
                                                                detail: z.type
                                                            }, G));
                                                            if (H && (!J || !b(r, z, G, q)))
                                                                if (v.push(H), (z.rule & B) !== B) break
                                                        }
                                                        if (r = v.length ? v : null) {
                                                            E = r;
                                                            break c
                                                        }
                                                    }
                                                    E = null
                                                }
                                                if (E) {
                                                    A = 0;
                                                    for (n = E.length; A < n; A++) c: {
                                                        u = E[A];r = {
                                                            type: "sendEvent",
                                                            category: "_" + u.category,
                                                            action: u.detail
                                                        };
                                                        if (u.category === f && (u.type === h || u.type === m)) {
                                                            if (r.label = u.data.href, !r.label) break c
                                                        } else if (u.category === x && (r.label = u.data.node.action, !r.label)) break c;_tmr.push(r)
                                                    }
                                                }
                                            }
                                        } else p && console.warn("[TopMailRu] Error#1.24", "Not found tracking for type", A.type)
                            }
                        }
                    }
                }

                function b(a, b, d, e) {
                    var f = !1,
                        g = b[e];
                    if (K(g)) {
                        var h = b[e + "Rule"] || v;
                        e = (h & n) === n;
                        for (var h = (h & r) === r, k = 0, l = g.length; k < l && !(f = c(a, g[k]), e && f); k++)
                            if (h && !f) return null
                    } else f = c(a, g);
                    return !f ? null : U({
                        source: a.source,
                        data: a.data,
                        detail: b.type
                    }, d)
                }

                function c(a, b) {
                    var c = b.rule || v,
                        e = (c & n) === n,
                        c = (c & r) === r,
                        f = !1,
                        g;
                    for (g in b)
                        if (b.hasOwnProperty(g) && "rule" !== g) {
                            var f = b[g],
                                h = a.data[g],
                                f = !0 === f ? !!(K(h) ? h.length : h) : !1 === f ? !(K(h) ? h.length : h) : d(h, f);
                            if (e && f) break;
                            else if (c && !f) return !1
                        }
                    return f
                }

                function d(a, b) {
                    var c = a;
                    if (c)
                        if (K(c)) {
                            if (!c.length) return !1
                        } else c = [c];
                    else return !1;
                    var d = b,
                        e = v;
                    if (T(d) && !K(d)) {
                        if (!K(d.value)) return !1;
                        e = d.rule || e;
                        d = d.value
                    }
                    a: {
                        for (var f = (e & s) === s, g = (e & n) === n, e = (e & r) === r, h = !1, k = 0, l = d.length; k < l; k++) {
                            var m =
                                d[k];
                            if (m) {
                                var p = "string" === typeof m;
                                p && !f && (m = m.toLowerCase());
                                var q = m instanceof RegExp;
                                if (p || q) {
                                    var h = !0,
                                        t;
                                    b: {
                                        t = c;
                                        for (var x = f, w = 0, y = t.length; w < y; w++) {
                                            var z = x ? t[w] : t[w].toLowerCase();
                                            if (q && m.test(z) || p && m === z) {
                                                t = !0;
                                                break b
                                            }
                                        }
                                        t = !1
                                    }
                                    if (g && t) {
                                        c = !0;
                                        break a
                                    } else if (e && !t) {
                                        c = !1;
                                        break a
                                    }
                                }
                            }
                        }
                        c = g ? !1 : e ? h ? !0 : !1 : void 0
                    }
                    return c
                }
                var f = "click",
                    g = "submit",
                    e = [{
                        category: g,
                        types: [{
                            type: "button",
                            filter: {
                                tagName: ["input", "button"],
                                attr: {
                                    type: ["submit", "image"]
                                }
                            }
                        }]
                    }, {
                        category: f,
                        types: [{
                            type: "a",
                            filter: {
                                tagName: ["a"],
                                attr: {
                                    href: !0
                                }
                            }
                        }]
                    }],
                    h = "file",
                    m = "resource",
                    x = "submit",
                    y = "filter",
                    q = "stop",
                    n = 1,
                    r = 2,
                    s = 4,
                    B = 8,
                    v = n,
                    F = {
                        enabled: !0,
                        modes: [{
                            mode: g,
                            categories: [{
                                category: x,
                                types: [{
                                    type: "lead",
                                    filter: [{
                                        inputsName: ["phone"],
                                        inputsType: ["tel"],
                                        rule: n
                                    }, {
                                        inputsName: ["email"],
                                        inputsType: ["email"],
                                        rule: n
                                    }],
                                    filterRule: r,
                                    stop: {
                                        inputsName: {
                                            value: ["password"]
                                        }
                                    }
                                }, {
                                    type: "form",
                                    filter: {
                                        inputsName: !0
                                    }
                                }]
                            }]
                        }, {
                            mode: f,
                            categories: [{
                                category: "contact",
                                types: [{
                                    type: "email",
                                    filter: {
                                        contactBy: ["mailto"]
                                    }
                                }, {
                                    type: "phone",
                                    filter: {
                                        contactBy: ["tel"]
                                    }
                                }]
                            }, {
                                category: h,
                                types: [{
                                    type: "file",
                                    filter: {
                                        fileExtension: "7z bz2 gz apk iso cab dmg msi rar tar zip exe txt doc docx ppt pptx xls xlsx csv pdf psd rtf ods djvu eps 3gp aac ac3 avi flac flv divx midi mka mkv mp3 mp4 mpeg mpg mov ogg vob wav webm wma wmf wmv torrent".split(" ")
                                    }
                                }]
                            }, {
                                category: m,
                                types: [{
                                    type: "outgoing",
                                    rule: B,
                                    stop: {
                                        domain: [ba.getDomainMask(ba.parse(C.href, "domain"), 3, !1)],
                                        href: [/password/]
                                    }
                                }, {
                                    type: "messenger",
                                    filter: {
                                        domain: ba.getIsDomainRE("vk.me t.me telegram.me telegram.im web.telegram.org m.me web.whatsapp.com api.whatsapp.com chat.whatsapp.com wa.me".split(" "))
                                    },
                                    stop: {
                                        href: [/password/]
                                    }
                                }, {
                                    type: "social",
                                    filter: {
                                        domain: ba.getIsDomainRE("vk.com vkontakte.ru m.vk.com vk.ru ok.ru m.ok.ru odnoklassniki.ru facebook.com m.facebook.com fb.com twitter.com linkedin.com instagram.com tiktok.com youtube.com youtu.be m.youtube.com".split(" "))
                                    },
                                    stop: {
                                        href: [/password/]
                                    }
                                }]
                            }]
                        }]
                    },
                    D = 1,
                    I = 13;
                return {
                    enabled: !0,
                    start: function() {
                        w(k, "click", a);
                        w(k, "keypress", a)
                    }
                }
            }();
        $b && ob.start();
        var cb = "60.3.0",
            La = 0,
            va = 0,
            bb = Ra(16),
            J = null,
            Q = null,
            wa = 0,
            ia = "tmr_reqNum",
            z = null;
        X && (z = V(ia) || null, null !==
            z && za(ia, Ca));
        P && null === z && (z = Aa(ia) || null);
        z = null === z ? 0 : parseInt(z, 10);
        P && Ba(ia, z);
        var Y = (X ? V("tmr_lvid") : null) || (P ? Aa("tmr_lvid") : null),
            ka = (X ? V("tmr_lvidTS") : null) || (P ? Aa("tmr_lvidTS") : null);
        if (null === Y || -1 === Y.search(/^[0-9a-fA-F]+$/)) Y = Ra(32);
        Ua("tmr_lvid", Y);
        if (null === ka || -1 === ka.search(/^\d+$/)) ka = "" + y();
        Ua("tmr_lvidTS", ka);
        var M = 0,
            B = [],
            Ma = [],
            xa = [],
            ua = [],
            Mb = "ontouchstart" in l || 1 < (O.maxTouchPoints || O.msMaxTouchPoints) ? "1" : "0",
            Nb = l.devicePixelRatio || 0,
            Ob = l.top === l ? 0 : 1,
            ja = null,
            qb = l.performance ||
            l.mozPerformance || l.msPerformance || l.webkitPerformance || {},
            N = qb.timing || {},
            Ga = qb.navigation || {},
            db = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
            Ea = !N ? void 0 : N.navigationStart,
            eb = "downlink downlinkMax effectiveType rtt saveData type".split(" "),
            R, Na;
        R = function(a, b, c) {
            if (b && "object" === typeof b) {
                var d = "id" in b && b.id || M,
                    f = c.title || null,
                    g, e = Na(b, {
                        params: c.required,
                        fn: c.fn
                    });
                if (e.missed.length) console.warn("[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14", "Unspecified " + (1 < e.missed.length && e.missed.slice(0, -1).join(", ") + " and " || "") + e.missed.slice(-1) + " in " + a);
                else {
                    var h = Na(b, {
                        params: c.optional,
                        fn: c.fn
                    });
                    g = [].concat(e.values).concat(h.values);
                    e = [].concat(e.missed).concat(h.missed);
                    c.value && (b = "value" in b && b.value, !0 !== c.value && (b = b || c.value), b ?
                        g.push("value: " + b) : e.push("value"));
                    c = g.length ? "{ " + g.join(", ") + " }" : "";
                    g = e.length ? "(" + (1 < e.length ? e.slice(0, -1).join(", ") + " and " + e.slice(-1) + " are" : e.slice(-1) + " is") + " empty)" : "";
                    d ? console.info("[TopMailRu][" + d + "]: " + (f || a) + " " + c + " " + g) : console.warn("[TopMailRu] Error#1.15", "Undefined counter ID of " + a + " " + c)
                }
            } else console.warn("[TopMailRu][][" + a + "] Error#1.13")
        };
        Na = function(a, b) {
            var c = [],
                d = [],
                f, g, e;
            if (b.params)
                for (f in b.params)
                    if (b.params.hasOwnProperty(f) && !1 !== b.params[f])
                        if (g = f in a && a[f], !0 !== b.params[f] && (g = g || b.params[f]), g) try {
                            e = b.fn ? b.fn : null, c.push(f + ': "' + (e ? e(f, g) : g) + '"')
                        } catch (h) {
                            console.warn("[TopMailRu] Error#1.16", h)
                        } else d && d.push(f);
            return {
                values: c,
                missed: d
            }
        };
        m.prototype.callbackOnReady = function(a) {
            p && R("onReady", a, {
                title: "OnReady callback"
            });
            a && "object" === typeof a && "function" === typeof a.callback && a.callback.call(a.context || null)
        };
        m.prototype.pageView = function(a) {
            ga(a);
            a: if (a && "object" === typeof a && a.id) {
                5 > Ma.length && !da(a.id, Ma) && (Ma.push(a.id), !1 !== a.beat && xa.push(a.id),
                    B.push(a), la && Va(a));
                "detectBlocker" in a && !a.detectBlocker && (Ha = !0);
                var b = "string" === typeof a.ecom,
                    c = b && -1 !== a.ecom.search(/\S/);
                if (5 > ua.length && !da(a.id, ua) && (!0 === a.ecom || b && !c || b && c || !1 !== a.ecom && !b && (da(a.id, bc) || !da(a.id, cc)))) {
                    ua.push(a.id);
                    if (b && c) {
                        if (Ja && (Ka(a.ecom), G !== a.ecom)) {
                            G = a.ecom;
                            D && (D = [0, 0, G]);
                            break a
                        }
                        G = a.ecom;
                        D && (D = [0, 0, G])
                    }
                    b = [a.id];
                    if (Ja)
                        for (var c = 0, d = ta.length; c < d; c++) Wa(b, ta[c])
                }
            }
            p && R("pageView", a, {
                title: "Page view",
                optional: {
                    url: C.href
                }
            });
            ha(a) && (F(I(a, "/counter", !1, !0)), va =
                y())
        };
        m.prototype.reachGoal = function(a) {
            ga(a);
            p && R("reachGoal", a, {
                title: "Reach goal",
                value: !0,
                required: {
                    goal: !0
                }
            });
            if (ha(a) && "goal" in a && a.goal) {
                var b = "value" in a && a.value ? parseInt(a.value) || "" : "";
                F(I(a, "/tracker", !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal)))
            }
        };
        var Ia = "VALUE";
        m.prototype.itemView = function(a) {
            p && R("itemView", a, {
                title: "Item view",
                optional: {
                    list: !0,
                    pagetype: !0,
                    productid: !0,
                    totalvalue: !0
                },
                fn: function(a, b) {
                    return ("" + b).replace(/;/g, " ")
                }
            });
            if (ha(a)) {
                var b = a.list || "",
                    c = a.productid || "",
                    d = a.pagetype ||
                    "",
                    f = a.totalvalue || 0,
                    g = Sb(a.id, d, f, c);
                g && this.reachGoal(g);
                (new Image).src = "https://ad.mail.ru/retarget/?counter=" + (a.id || M) + "&list=" + b + "&productid=" + c + "&pagetype=" + d + "&totalvalue=" + f + "&_=" + Math.random();
                b = "IV:" + f + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                F(I(a, "/tracker", !1, !0) + (";e=" + escape(b)))
            }
        };
        var Tb = "vk_ecom_";
        m.prototype.sendEvent = function(a) {
            ga(a);
            p && R("sendEvent", a, {
                title: "Send event",
                value: !0,
                required: {
                    category: !0,
                    action: !0
                },
                optional: {
                    label: !0
                },
                fn: function(a, b) {
                    return ("" + b).substring(0, 300).replace(/;/g, " ")
                }
            });
            if (ha(a) && "category" in a && a.category && "action" in a && a.action) {
                var b = ("" + a.category).substring(0, 300),
                    c = ("" + a.action).substring(0, 300),
                    d = "label" in a && a.label ? ("" + a.label).substring(0, 300) : "",
                    b = "CE:" + ("value" in a && a.value ? parseInt(a.value) || "" : "") + "/" + ("" + b).replace(/;/g, " ") + ";" + ("" + c).replace(/;/g, " ") + ";" + ("" + d).replace(/;/g, " ");
                F(I(a, "/tracker", !1, !0) + (";e=" + escape(b)))
            }
        };
        m.prototype.setUserID = function(a) {
            if (null === a || !1 === a ||
                void 0 === a) this.deleteUserID();
            else {
                var b = typeof a;
                "number" !== b && "string" !== b ? p && console.warn("[TopMailRu] Error#1.17", "Invalid user ID in setUserID") : (J = a, p && console.info("[TopMailRu]: Global user ID = " + J))
            }
        };
        m.prototype.getUserID = function() {
            return J || 0 === J ? J : void 0
        };
        m.prototype.deleteUserID = function() {
            J = null;
            p && console.info("[TopMailRu]: Reset global user ID to null")
        };
        m.prototype.setUserParams = function(a) {
            if (null === a || !1 === a || void 0 === a) this.deleteUserParams();
            else if (T(a)) {
                try {
                    Q = U(!0, {}, a)
                } catch (b) {
                    p &&
                        console.warn("[TopMailRu] Error#1.22", "Invalid user params in setUserParams");
                    return
                }
                p && console.info("[TopMailRu]: Global user params = " + fa(Q))
            } else p && console.warn("[TopMailRu] Error#1.21", "Invalid user params in setUserParams")
        };
        m.prototype.getUserParams = function() {
            var a = Q ? Q : void 0;
            return a ? U(!0, {}, a) : void 0
        };
        m.prototype.deleteUserParams = function() {
            Q = null;
            p && console.info("[TopMailRu]: Reset global user params to null")
        };
        m.prototype.getClientID = function() {
            var a = Y;
            return a || 0 === a ? a : void 0
        };
        m.prototype._MT_event =
            function(a, b, c) {
                ga(a);
                p && R(b, a, {
                    title: c
                });
                ha(a) && F(I(a, "/tracker", !1, !0) + (";e=" + escape("MT:/" + b)))
            };
        m.prototype.miniAppEvent = function(a) {
            this._MT_event(a, "miniAppEvent", "VK Mini App Event")
        };
        m.prototype.processEvent = function(a, b) {
            if (a && "object" === typeof a)
                if ("type" in a) {
                    if ("onready" === a.type) {
                        if (b && 0 > b) return;
                        this.callbackOnReady(a)
                    } else if (b && 0 < b) return;
                    switch (a.type) {
                        case "pageView":
                            this.pageView(a);
                            break;
                        case "reachGoal":
                            this.reachGoal(a);
                            break;
                        case "itemView":
                            this.itemView(a);
                            break;
                        case "sendEvent":
                            this.sendEvent(a);
                            break;
                        case "setUserID":
                            "userid" in a && this.setUserID(a.userid);
                            break;
                        case "deleteUserID":
                            this.deleteUserID();
                            break;
                        case "setUserParams":
                            "params" in a && this.setUserParams(a.params);
                            break;
                        case "deleteUserParams":
                            this.deleteUserParams();
                            break;
                        case "miniAppEvent":
                            this.miniAppEvent(a)
                    }
                } else p && console.warn("[TopMailRu] Error#1.19", "Unspecified type of push event");
            else p && console.warn("[TopMailRu] Error#1.18", "Invalid push event")
        };
        m.prototype.push = function(a) {
            for (var b = 0, c = arguments.length; b < c; b++) this.processEvent(arguments[b])
        };
        var rb = !1;
        m.prototype.onready = function() {
            rb || (rb = !0, !Ha && !la && ac(Qb, Rb), Ka(G))
        };
        var sb = !1;
        m.prototype.onload = function() {
            if (!sb) {
                sb = !0;
                wa = y();
                if (!Zb && 0 < B.length) {
                    for (var a = ";e=" + escape("RT/load") + ";et=" + wa, b = 0; b < B.length; b++) F(I(B[b], "/tracker", !0, !0) + a);
                    va = wa
                }
                Xb || setTimeout(function() {
                    fb(2)
                }, 2E3);
                Yb || setTimeout(function() {
                    fb(15)
                }, 15E3)
            }
        };
        m.prototype.beat = function() {
            if (!kb && La) {
                var a = y();
                if (!(12E4 < a - La)) {
                    if (12E4 < a - va)
                        for (var b = ";e=" + escape("RT/resend") + ";et=" + wa, c = 0; c < B.length; c++) !1 !== B[c].beat &&
                            F(I(B[c], "/tracker", !1, !0) + b);
                    else 0 < xa.length && F("/tracker?" + ya({
                        js: "13",
                        id: xa[0],
                        e: "RT/beat",
                        sid: bb,
                        ids: xa.join(),
                        ver: cb,
                        _: Math.random()
                    }, ";"));
                    va = a
                }
            }
        };
        var tb = !1;
        m.prototype.unload = function() {
            if (!tb && (tb = !0, !lb)) {
                var a;
                a = (a = $a()) ? y() - a : void 0;
                a = ";e=" + escape("RT/unload") + ";et=" + y() + (a ? ";pvt=" + escape(a) : "");
                if (Z.support) {
                    var b = Z.getLog();
                    a += ";vtauto=" + b.auto
                }
                for (b = 0; b < B.length; b++) F(I(B[b], "/tracker", !1, !0) + a)
            }
        };
        m.prototype.activity = function(a) {
            La = y()
        };
        var ca = _tmr;
        _tmr = new m;
        for (var x = 0, pa = ca.length,
                S; x < pa; x++)(S = ca[x]) && "object" === typeof S && ga(S);
        x = 0;
        for (pa = ca.length; x < pa; x++) S = ca[x], _tmr.processEvent(S, 1);
        x = 0;
        for (pa = ca.length; x < pa; x++) S = ca[x], _tmr.processEvent(S, -1);
        if ("complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll) _tmr.onready();
        else k.addEventListener ? w(k, "DOMContentLoaded", ra) : k.attachEvent && w(k, "readystatechange", ra);
        if ("complete" === k.readyState) _tmr.onload();
        else w(l, "load", jb);
        lb || (w(l, "unload", sa), w(l, "beforeunload", sa));
        if (!kb) {
            setInterval(function() {
                    _tmr.beat()
                },
                6E4);
            try {
                for (var ub = "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" "), gc = function(a) {
                        w(k, a, function() {
                            _tmr.activity(a)
                        })
                    }, x = 0; x < ub.length; x++) gc(ub[x]);
                w(l, "scroll", function() {
                    _tmr.activity("scallback")
                })
            } catch (hc) {
                p && console.warn("[TopMailRu] Error#1.20", hc)
            }
        }
    }
})();