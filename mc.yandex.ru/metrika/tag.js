(function() {
    try {
        (function() {
            function We(a, c, b, d) {
                var e = this;
                return C(window, "c.i", function() {
                    function f(x) {
                        (x = Xe(k, l, "", x)(k, l)) && (S(x.then) ? x.then(g) : g(x));
                        return x
                    }

                    function g(x) {
                        x && (S(x) ? m.push(x) : Ma(x) && z(function(I) {
                            var Z = I[0];
                            I = I[1];
                            S(I) && ("u" === Z ? m.push(I) : h(I, Z))
                        }, ya(x)))
                    }

                    function h(x, I, Z) {
                        e[I] = yl(k, l, Z || p, I, x)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && Ye();
                    var l = zl(a, Ze, c, b, d),
                        m = [],
                        p = [mh, Xe, nh];
                    p.unshift(Al);
                    var q = A(O, zb),
                        r = M(l);
                    l.id || Wa(hc("Invalid Metrika id: " + l.id, !0));
                    var t = Yc.o("counters", {});
                    if (t[r]) return Ab(k,
                        r, "Duplicate counter " + r + " initialization"), t[r];
                    t[r] = e;
                    Yc.C("counters", t);
                    Yc.Ta("counter", e);
                    z(function(x) {
                        x(k, l)
                    }, Td);
                    z(f, Ac);
                    f(Bl);
                    h(Cl(k, l, m), "destruct", [mh, nh]);
                    Hb(k, F([k, q, f, 1, "a.i"], oh));
                    z(f, X)
                })()
            }

            function Dl(a, c) {
                var b = El(a),
                    d = [Fl(a) || Gl(a)];
                ph(a) && d.push(b);
                var e = ha(a);
                b = Qa(a);
                var f = b.o("synced", {});
                d = Y(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(jb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.C("synced", f);
                return A(function(g) {
                    return {
                        Ej: c[g],
                        Qi: g
                    }
                }, d)
            }

            function Gl(a) {
                a = Hl(a);
                return Il[a] || a
            }

            function El(a) {
                a =
                    qh(a);
                return Jl[a] || "ru"
            }

            function Kl(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ca: "0"
                    },
                    e = Ll(b);
                e ? d.id = e : -1 === b.indexOf(":") ? (b = Ga(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ga(b[0]), d.ca = $e(e) ? "1" : "0");
                return [Ha(a, d), d]
            }

            function Ml(a, c) {
                Zc[a] || (Zc[a] = []);
                Zc[a].push(c)
            }

            function Nl(a, c, b, d) {
                var e = b.H;
                if (c.$j || !e) d();
                else {
                    var f = Ud(a),
                        g = Bc(a, "");
                    e = function() {
                        var t = rh(f);
                        t = "" + t + Ol(t, g);
                        Vd(b, "gdpr", t);
                        d()
                    };
                    if (3 === c.id) e();
                    else {
                        var h = G(a),
                            k = h.o("f1");
                        if (k) k(e);
                        else if (k = (k = rh(f)) ? A(v(Wd, n), k.split(",")) : [], sh(k)) e();
                        else {
                            var l =
                                Xd(a),
                                m = R(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                Rf: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "),
                                $f: "_inversed_buttons"
                            } : void 0;
                            var q = (l = l || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", Cc, 525600)) : l ? H(m, Vb) ? m === af ? k.push("12") : k.push("3") : bf(a) || Pl(a) ? k.push("17") : Ql(a) && k.push("28") : k.push("14");
                            var r = v(f, Rl);
                            sh(k) ? (z(r, k), e()) : (Yd.push(e), h.C("f1", function(t, x) {
                                var I = 0;
                                if (x) {
                                    var Z = kb(a, x) || "";
                                    I += Z.length
                                }
                                Yd.push(t);
                                1E6 >= I && Yd.push(t)
                            }), (0, cf[0])(a).then(T("params.eu")).then(function(t) {
                                if (t || q) {
                                    g.C("gdpr_popup", af);
                                    Sl(a, c);
                                    if (cb(a)) return Tl(a, r, c);
                                    var x = th(a, f);
                                    if (x) return t = Ul(a, r, x, c, p), t.then(F([a, c], Vl)), t
                                }
                                t || r("8");
                                return K.resolve({
                                    value: Cc,
                                    $d: !0
                                })
                            }).then(function(t) {
                                g.Pb("gdpr_popup");
                                if (t) {
                                    var x = t.value;
                                    t = t.$d;
                                    H(x, Vb) && g.C("gdpr", x, t ? void 0 : 525600)
                                }
                                x = ic(Yd, ia);
                                jc(a, x, 20)(Ra(C(a,
                                    "gdr"), B));
                                h.C("f1", ia)
                            })["catch"](C(a, "gdp.a")))
                        }
                    }
                }
            }

            function Vl(a, c) {
                if (Xd(a)) {
                    var b = Ud(a),
                        d = Ha(a, c);
                    d = d && d.params;
                    b = A(v(Wl, n), df(b));
                    d && b.length && d("gdpr", Y(Boolean, b))
                }
            }

            function Tl(a, c, b) {
                var d = Zd(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.ba,
                            h = u(v("4", c), v(null, e)),
                            k = U(a, h, 2E3, "gdp.f.t");
                        d.rg((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.D(wa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ef), function(m) {
                                e({
                                    value: uh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(F([a,
                            k
                        ], ma))
                    } else e({
                        value: af,
                        $d: !0
                    })
                })
            }

            function Sl(a, c) {
                var b = Zd(a, c);
                b && b.ba.D(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = Xd(a), d
                });
                return b
            }

            function Ul(a, c, b, d, e) {
                var f = void 0 === e ? Xl : e;
                e = f.url;
                var g = f.$f;
                f = Yl(a, f.Rf, d.ak);
                var h = Zd(a, d);
                if (!h) return K.resolve({
                    value: Cc,
                    $d: !0
                });
                var k = kc(a, {
                    src: "" + e + f + g + ".js"
                });
                return new K(function(l, m) {
                    k ? (c("7"), k.onerror = function() {
                        var p;
                        c("9");
                        h.qg((p = {}, p.type = "GDPR-ok-view-default", p));
                        l(null)
                    }, k.onload = function() {
                        c("10");
                        b.D(wa(["GDPR-ok-view-default",
                            "GDPR-ok-view-detailed"
                        ], ef), function(p) {
                            var q;
                            p = p.type;
                            h.qg((q = {}, q.type = p, q));
                            l({
                                value: uh(p)
                            })
                        })
                    }) : (c("9"), m(Sa("gdp.e")))
                })
            }

            function Yl(a, c, b) {
                a = b || qh(a);
                return H(a, c) ? a : "en"
            }

            function uh(a) {
                if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Cc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return H(a, Vb) ? a : Cc
            }

            function vh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    E(e, d)(kb(a, c))
                } catch (f) {} else wh = U(a, F([a, c, 2 * b], vh), b, "ai.d");
                return function() {
                    return ma(a, wh)
                }
            }

            function Zl(a) {
                var c =
                    n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = E(c, a.speechSynthesis);
                return lc(function(b) {
                    return A(v(b, n), $l)
                }, a())
            }

            function am(a, c, b) {
                return L("x", A(u(O, pa("concat", "" + a), v(b, n)), c))
            }

            function bm(a, c) {
                var b = c.nh;
                if (!cm(a, b)) return "";
                var d = [];
                a: {
                    var e = dm(a, b);
                    try {
                        var f = F(e, u)()();
                        break a
                    } catch (I) {
                        if ("ccf" === I.message) {
                            f = null;
                            break a
                        }
                        Wa(I)
                    }
                    f = void 0
                }
                if (Ta(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (I) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = Ka(b.getSupportedExtensions, "getSupportedExtensions") ?
                        b.getSupportedExtensions() || [] : []
                } catch (I) {
                    k = []
                }
                k = L(";", k);
                f = ff(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = ff(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    qk: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": ff(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                gf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var x = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (I) {}
                    x = {}
                }
                gf(d, x);
                if (!b.getShaderPrecisionFormat) return L("~", d);
                gf(d, em(b));
                return L("~", d)
            }

            function gf(a, c, b) {
                void 0 === b && (b = ":");
                z(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, ya(c))
            }

            function fm(a, c, b, d) {
                c = d.o("cc");
                d = F(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ga(e)) && 1440 < ha(a)(jb) - e) return d();
                    b.C("cc", c)
                } else la(0)(c) || d()
            }

            function gm(a, c, b, d) {
                return qa(c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !$c(a))
                        if (e = d.o("zzlc"), V(e) || Ta(e) || "na" === e) {
                            e = "ru";
                            var f = hf(a, 68),
                                g = jf(a, 79);
                            if (f || g) e = "md";
                            if (f = $a(a)) {
                                var h = f("iframe");
                                y(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + xh("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Wb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ja(a).D(a, ["message"], C(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (mc(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), ma(a, k))
                                        }));
                                    k = U(a, u(l, v(h, mc)), 3E3)
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function hm(a, c, b) {
                var d, e;
                c = db(v(a, n), im);
                c = V(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") &&
                    c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    S(a) && (E(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) && !a.length && (a = E(a, f)(), d = n(a, "then"), S(d) && E(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        S(h) && E(h, f, g, B, B)()
                    })(), y(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (S(h)) {
                            h = E(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = B;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = nc(k[1]), b.C("pp", g));
                            f.onicecandidate = B;
                            h()
                        }
                    }, e))))
                }
            }

            function jm(a, c, b) {
                var d, e = ad(a, c);
                if (e) {
                    e.ba.D(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = U(a, F([a, c, b], yh), 200, "pu.m");
                        e.He(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ma(a, g), b.C("pu", l))
                        })
                    } else yh(a, c, b)
                }
            }

            function yh(a, c, b) {
                var d = n(a, "location.host");
                a = $d(a, c);
                b.C("pu", "" + nc(d) + a)
            }

            function zh(a, c, b) {
                c = Bc(a, void 0, c);
                c = Ah(a, c.o("phc_settings") ||
                    "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? km(a, b.tc, {
                    Fg: lm
                }).eg(g).then(function(h) {
                    return mm(b, {
                        Nb: d,
                        Xb: e,
                        vg: f
                    }, h.oa, g, h.za)
                })["catch"](function() {}) : K.resolve()
            }

            function lm(a, c, b) {
                a = nm(b.ad);
                if ("href" === b.Ee) {
                    var d = b.Ab;
                    c = d.href;
                    b = c.replace(a, b.fb);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.Ab.textContent) || void 0 === d ? void 0 : d.replace(a, b.fb)) && a !== b.Ab.textContent) return b.Ab.textContent = a, !0;
                return !1
            }

            function mm(a, c, b, d, e) {
                var f;
                c.Nb && c.Xb && (c.Nb === a.Nb && c.Xb === a.Xb || y(a, c, {
                    oa: {},
                    kb: !0
                }), 0 < e && Na(a.za, [e]), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.oa[l] && a.oa[l][g] ? a.oa[l][g] : 0);
                    y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.oa[l] ? a.oa[l][g] : 0);
                    y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Of && (a.kb || b.length) && ((c = Ha(a.l, a.tc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Nb, f.orderId = a.Xb, f.service_id = a.vg, f.phones = a.oa, f.performance = a.za, f)), a.kb = !1))
            }

            function om(a) {
                a = $a(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = pa("canPlayType", a),
                        b = lc(function(d) {
                            return A(u(O, pa("concat", d + "; codecs=")), pm)
                        }, Bh);
                    return A(c, [].concat(Bh, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function qm(a) {
                var c = n(a, "matchMedia");
                if (c && Ea("matchMedia", c)) {
                    var b = pa("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, rm)
                }
            }

            function em(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") ||
                        "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
                    ],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function dm(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Ea("getParameter", c.getParameter) || kf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(sm);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Mi = 3;
                    b.Yi = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || kf();
                    return {
                        Ce: d,
                        Yj: e,
                        Xj: b
                    }
                }, function(b) {
                    var d = b.Ce,
                        e = b.Yj;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || kf();
                    return y(b, {
                        Vh: d
                    })
                }, function(b) {
                    var d = b.Ce,
                        e = b.Vh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.Ce;
                    b = b.Xj;
                    d.Wj = c.getAttribLocation(d, "attrVertex");
                    d.$i = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Sk);
                    c.vertexAttribPointer(d.Wj,
                        b.Mi, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.$i, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.Yi);
                    return c.canvas
                }]
            }

            function cm(a, c) {
                if (!S(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ea("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function ff(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function tm(a, c, b) {
                function d(q) {
                    return function() {
                        var r = b.o("scip", "") + q;
                        b.C("scip", r)
                    }
                }
                var e, f = bd(a, "ci");
                f = Bb(a, f);
                var g = lf(a),
                    h = ha(a)(jb),
                    k = ["sync.cook.int"],
                    l = Ch(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"),
                        p = Dc(a, c);
                    return f({
                        Y: {
                            Da: k,
                            Fb: 1500,
                            nd: !0
                        },
                        G: (e = {}, e.duid = p, e.hid = "" + Ib(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"]).then(function(q) {
                        q = n(q.cd, "CookieMatchUrls");
                        ea(q) || (q = []);
                        Oa(q) ? d("1")() : m();
                        var r = bd(a, "c"),
                            t = Bb(a, r);
                        q = A(function(x, I) {
                                var Z = "" + x + (oc(x, "?") ? "&" : "?") + "duid=" + p;
                                return t({
                                    Y: {
                                        Da: k,
                                        Fb: 1500
                                    }
                                }, ["https://" + Z]).then(B, u(d("b"), d("" + I)))
                            },
                            Y(za, q));
                        return K.all(q)
                    }, m).then(function() {
                        var q = b.o("scip");
                        !q || oc(q, "a") || oc(q, "b") || (g.C("sci", h), d("2")())
                    }, B)
                }
                return K.resolve()
            }

            function Dh(a) {
                return {
                    aa: function(c, b) {
                        if (!c.H) return b();
                        var d = G(a).o("fid");
                        !Eh && d && (Vd(c, "fid", d), Eh = !0);
                        return b()
                    }
                }
            }

            function um(a, c) {
                var b = a.document;
                if (H(b.readyState, ["interactive", "complete"])) Hb(a, c);
                else {
                    var d = ja(a),
                        e = d.D,
                        f = d.fc,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function mf(a) {
                return {
                    aa: function(c,
                        b) {
                        var d = c.H;
                        if (d) {
                            var e = G(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            }

            function vm(a) {
                var c = C(a, "i.clch", wm);
                ja(a).D(a.document, ["click"], E(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = ra.Wa,
                        e = a.Ya[ra.qc],
                        f = !!e._informer;
                    e._informer = y({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || kc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function xm(a, c) {
                var b = Qa(a);
                if ("" === b.o("cc")) {
                    var d = v("cc", b.C);
                    d(0);
                    var e = ha(a),
                        f = G(a);
                    f = u(T(cd({
                        cd: 1
                    }) + ".c"), dd(function(g) {
                        d(g + "&" + e(jb))
                    }), v("cc", f.C));
                    Aa(a, "6",
                        c)({
                        Y: {
                            nd: !0,
                            Og: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](u(dd(function() {
                        var g = e(jb);
                        b.C("cc", "&" + g)
                    }), C(a, "cc")))
                }
            }

            function ae(a, c) {
                if (!c) return !1;
                var b = R(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function zm(a, c) {
                return qa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Dh: Am(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Bm(a, c, b, d, e) {
                b = nf(a.document.body, b);
                d = nf(a.document.body, d);
                H(e.target, [b, d]) && of (a, c)
            }

            function Fh(a, c, b, d) {
                (b = Cm(a, d, b)) && of (a, c, b)
            }

            function Gh(a,
                c) {
                var b = Hh(a, c);
                return Dm(a, b)
            }

            function Hh(a, c) {
                var b = nf(a.document.body, c);
                return b ? Em(a, b) : ""
            }

            function of (a, c, b) {
                if (c = Ha(a, c)) a = Ec(["dr", b || "" + Ua(a, 10, 99)]), c.params(Ec(["__ym", a]))
            }

            function nf(a, c) {
                var b = null;
                try {
                    b = c ? pc(c, a) : b
                } catch (d) {}
                return b
            }

            function Ih(a) {
                a = sa(xh(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Jh("0", 8, c)
                }, a)
            }

            function Em(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                pf(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ?
                        f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function Fm(a, c, b) {
                a = Ba(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    zc: b
                })
            }

            function Gm(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Hm, d + "." + b.zc)) && (c && H(b, Im) || a("ym-" + b + "-" + d))
                }
            }

            function Jm(a, c, b) {
                var d, e = Kh(a, c),
                    f = R(a);
                f = be(f.protocol + "//" + f.hostname + f.pathname);
                c = $d(a, c);
                var g = "";
                do g += Ua(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) +
                    g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function Km(a, c, b) {
                var d = n(b, "data");
                if (za(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function Lm(a, c) {
                var b = Qa(a),
                    d = "wv2rf:" + M(c),
                    e = c.oc,
                    f = qf(a),
                    g = b.o(d),
                    h = c.Pj;
                return V(f) || Ta(g) ? xa(function(k, l) {
                    qa(c, function(m) {
                        var p =
                            n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = qf(a) || n(m, "settings.eu");
                        b.C(d, ed(p));
                        l({
                            oc: e,
                            Mf: !!f,
                            cg: p,
                            Hg: h
                        })
                    })
                }) : rf({
                    oc: e,
                    Mf: f,
                    cg: !!Ga(g),
                    Hg: h
                })
            }

            function Mm() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        ud: 0,
                        lh: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    eh: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.ud * e.lh)
                            }, 0, ba(a))
                        }
                    },
                    aj: function(c) {
                        c && (c = a[c.data.type]) && (c.ud += 1)
                    }
                }
            }

            function Nm(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c = a.data,
                            b = c.Ia,
                            d = c.hd,
                            e = c.content;
                        delete c.Ia;
                        delete c.hd;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                M: a.M || 0,
                                content: e,
                                Ia: b,
                                hd: d,
                                $: c
                            }
                        };
                        a.L && (c.L = a.L);
                        return c;
                    case "event":
                        a: {
                            c = {
                                type: "event",
                                L: a.L,
                                data: {
                                    M: a.M,
                                    type: a.event,
                                    $: {}
                                }
                            };b = y({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    c.data.$ = {
                                        Pg: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        Rg: b,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    c.data.$ = b.Pc;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    c.data.$ = b;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    c.data.target = b.target;
                                    c.data.$ = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    c.data.target = b.target;
                                    delete b.target;
                                    c.data.$ = b;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        L: a.L,
                                        data: {
                                            M: a.M,
                                            $: {
                                                Ma: [{
                                                    sd: [{
                                                        id: b.target,
                                                        Mb: {
                                                            src: {
                                                                Tc: "",
                                                                n: b.value,
                                                                r: !1
                                                            }
                                                        },
                                                        Fa: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = c
                        }
                        break;
                    case "mutation":
                        return Om(a)
                }
                return a
            }

            function Om(a) {
                var c = y({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                wc: {
                                    Tc: "",
                                    n: c.value
                                },
                                Fa: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            sd: [{
                                id: c.target,
                                Mb: N(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        Tc: "",
                                        n: f,
                                        r: na(f)
                                    };
                                    return d
                                }, {}, ya(c.attributes)),
                                Fa: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            af: A(function(d) {
                                    return {
                                        id: d,
                                        Fa: c.index
                                    }
                                },
                                c.ma)
                        }];
                        break;
                    case "ad":
                        b = [{
                            ef: A(function(d) {
                                return {
                                    id: d.id,
                                    Vf: d.name,
                                    Wf: d.Uf,
                                    se: d.parent,
                                    ve: d.xe,
                                    le: d.next,
                                    Mb: d.attributes,
                                    Fa: c.index,
                                    wc: d.content,
                                    Oa: d.hidden
                                }
                            }, c.ma)
                        }]
                }
                return {
                    type: "mutation",
                    L: a.L,
                    data: {
                        M: a.M,
                        $: {
                            Ma: b,
                            index: c.index
                        }
                    }
                }
            }

            function Pm(a) {
                return {
                    Xh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    Zh: function() {
                        if (a.document.doctype) {
                            var c = y({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " +
                                L("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    },
                    li: function() {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"),
                                b = !1;
                            try {
                                var d = a.opener ? a.opener.sessionStorage : null;
                                b = !!d && c === d.getItem("__vw_tab_guid")
                            } catch (e) {
                                b = !0
                            }
                            if (!c || b) c = Lh(), a.sessionStorage.setItem("__vw_tab_guid", c);
                            return c
                        } catch (e) {
                            return null
                        }
                    }
                }
            }

            function Qm(a, c, b) {
                var d = fd(a),
                    e = ja(a),
                    f = cb(a),
                    g = c.Md(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = v(d,
                        O);
                if (h) {
                    if (!g) return U(a, E(d.O, d, "i", {
                        wa: !1
                    }), 10), {
                        Ld: k,
                        og: B,
                        stop: B
                    };
                    Wa(Sa())
                }
                d.D(["sr"], function(r) {
                    var t, x = Mh(a, r.source);
                    x && sf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ua().Z(x), t))
                });
                d.D(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || Mh(a, r)) && d.O("sdr", {
                        data: t.data,
                        M: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            sf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = U(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.na(["\u043d"], q);
                        ma(a, m);
                        var t = Fc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId ||
                            "about:blank" !== R(a).host && !H(t, b) || (l = !0, d.O("i", {
                                M: r.data.frameId,
                                wa: !0
                            }))
                    };
                    d.D(["\u043d"], q);
                    U(a, function() {
                        d.na(["\u043d"], q);
                        ma(a, m);
                        l || (l = !0, d.O("i", {
                            wa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.D(a, ["message"], function(r) {
                    var t = rb(a, r.data);
                    t && t.type && H(t.type, Rm) && d.O(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    Ld: k,
                    og: function(r) {
                        var t;
                        return sf(a, a.parent, (t = {}, t.frameId = c.Md(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function Mh(a, c) {
                try {
                    return db(u(T("contentWindow"), la(c)), sa(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function sf(a, c, b) {
                a = kb(a, b);
                c.postMessage(a, "*")
            }

            function Lh() {
                return Xb() + Xb() + "-" + Xb() + "-" + Xb() + "-" + Xb() + "-" + Xb() + Xb() + Xb()
            }

            function Xb() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function Sm(a, c) {
                if (za(c)) return c;
                var b = a.textContent;
                if (za(b)) return b;
                b = a.data;
                if (za(b)) return b;
                b = a.nodeValue;
                return za(b) ? b : ""
            }

            function Tm(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ia(c));
                var f = y(N(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, sa(c.attributes)), d);
                y(f, Um(c, e, f));
                var g =
                    (d = N(function(h, k) {
                        var l = k[0],
                            m = ce(a, c, l, k[1], b, e),
                            p = m.value;
                        na(p) ? delete f[l] : f[l] = p;
                        return h || m.rb
                    }, !1, ya(f))) && Gc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    rb: d,
                    hh: f
                }
            }

            function Um(a, c, b) {
                var d = {};
                tf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function ce(a, c, b, d, e, f) {
                void 0 === f && (f = Ia(c));
                var g = {
                    rb: !1,
                    value: d
                };
                if (tf(c)) "value" === b ? !na(d) && "" !== d && (b = e.Mf, f = e.cg, e = gd(a, c), f ? (b = hd(a, c, b), a = b.Zd, c = b.Id, b = b.vb, g.rb = !c && (e || a)) : (g.rb = e, b = !de(c)), b || e) && (g.value = L("", A(v("\u2022",
                    O), ("" + d).split("")))) : "checked" === b && H((c.getAttribute("type") || "").toLowerCase(), Vm) ? g.value = c.checked ? "checked" : null : Wm.test(b) && uf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = gd(a, c)) ? (g.rb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (H(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length &&
                    0 === ee(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && H(b, ["src", "type"])) g.value = null;
                return g
            }

            function vf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    J: function(e, f) {
                        return C(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function Xm(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.Ib) return K.resolve(B);
                var g = Aa(a, "4", c),
                    h = {
                        H: Ca()
                    };
                b = new Ym(a, b, function(l, m, p) {
                    var q;
                    if (!g) return K.resolve();
                    m = "wv-data=" + Nh(l, !0);
                    return g(y({}, h, {
                        Y: {
                            fa: m
                        },
                        G: (q = {}, q["wv-check"] = "" + Zm(l), q["wv-type"] = "0", q)
                    }), c, p)["catch"](C(a, "m.n.m.s"))
                });
                var k = $m(a, b, d, e);
                return qa(c, function(l) {
                    l && G(a).C("isEU", n(l, "settings.eu"));
                    G(a).o("oo") || k && Oh(a, l) && k.start();
                    return f
                })
            }

            function $m(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ja(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = E(c.flush, c),
                    m = ka(function(r, t) {
                        C(a, "hfv." + r, function() {
                            try {
                                var x = t.type
                            } catch (I) {
                                return
                            }
                            x = H(x, d);
                            c.push(t, {
                                type: r
                            });
                            x && l()
                        })()
                    }),
                    p = C(a, "sfv", function() {
                        var r = b(a),
                            t = an(a);
                        z(function(x) {
                            f.push(g.D(x.target, [x.event], m(x.type)))
                        }, r);
                        z(function(x) {
                            f.push(g.D(x.target, [x.event], C(a, "hff." + x.type +
                                "." + x.event,
                                function(I) {
                                    z(xa({
                                        l: a,
                                        sa: I,
                                        flush: l
                                    }), x.N)
                                })))
                        }, t);
                        k = Ph(a, "form", e);
                        e.attachEvent && (r = Ph(a, "form *", e), z(function(x) {
                            f.push(g.D(x, ["submit"], m("form")))
                        }, k), z(function(x) {
                            wf(x) && f.push(g.D(x, ["change"], m("formInput")))
                        }, r));
                        z(function(x) {
                            var I = x.submit;
                            if (S(I) || "object" === typeof I && bn.test("" + I)) x[h] = I, x.submit = C(a, "fv", function() {
                                var Z = {
                                    target: x,
                                    type: "submit"
                                };
                                m("document")(Z);
                                return x[h]()
                            })
                        }, k)
                    }),
                    q = C(a, "ufv", function() {
                        z(ia, f);
                        z(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function cn(a, c) {
                var b = Y(function(e) {
                        return 0 < e.N.length
                    }, c),
                    d = Qh({
                        target: a.document,
                        type: "document"
                    });
                return A(u(O, d, dn(a)), b)
            }

            function Rh(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Va] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        fe(h) && !h[Va] && Na(d, qc(b, h))
                    }
                } else Na(d, qc(b, c));
                return d
            }

            function xf(a) {
                if (id) {
                    id = !1;
                    var c = sb(a.l),
                        b = [];
                    eb(a.l, b, 15) ? a = [] : (Q(b, c), a = b);
                    return a
                }
            }

            function Sh(a) {
                if (!id) {
                    id = !0;
                    a = sb(a.l);
                    var c = [];
                    Jb(c, 14);
                    Q(c, a);
                    return c
                }
            }

            function en(a, c, b) {
                var d = c[Va];
                if (d) {
                    a: {
                        var e = sb(a),
                            f = c[Va];
                        if (0 < f) {
                            var g = [];
                            c = yf(a, c);
                            var h = rc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Zf) {
                                h.Zf = k;
                                if (eb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[0]);
                                Q(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (eb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[2]);
                                Q(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Na(b, a)
                }
                return d
            }

            function hd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {
                    vb: !1,
                    Id: !1,
                    Zd: !1
                };
                var d = de(c),
                    e = zf(c);
                a = Af(a, c) || b && e;
                return {
                    vb: !(d || !a),
                    Id: d,
                    Zd: e
                }
            }

            function Af(a, c) {
                return uf(a,
                    c) || jd(a, c) ? !0 : gd(a, c)
            }

            function zf(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = Y(Th, [a.className, a.id, a.name]);
                return b && H(b, fn) || La(Xa(gn), a) || Th(c) && hn.test(c)
            }

            function Th(a) {
                return !!(a && 2 < a.length)
            }

            function tf(a) {
                try {
                    var c = Ia(a);
                    if (H(c, Bf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || H(b.toLocaleLowerCase(), jn)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function Uh(a, c) {
                return c && sc("(ym-disable-submit|-metrika-noform)", c)
            }

            function de(a) {
                return a && sc("ym-record-keys", a)
            }

            function kn(a, c) {
                return L("", A(function(b) {
                    return a.isNaN(b) ?
                        ln.test(b) ? (b = b.toUpperCase() === b ? mn : nn, String.fromCharCode(Ua(a, b[0], b[1]))) : b : "" + Ua(a, 0, 9)
                }, c.split("")))
            }

            function gd(a, c) {
                if (na(c)) return !1;
                if (Cf(c)) {
                    var b = c.parentNode;
                    return (na(b) ? 0 : 11 === b.nodeType) ? !1 : gd(a, c.parentNode)
                }
                if (on.test(c.className)) return !0;
                b = Vh(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (pn.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Oh(a, c) {
                var b = Yb(a),
                    d = b.o("visorc");
                H(d, ["w", "b"]) || (d = "");
                Wh(a) && Xh(a, ge, "visorc") && !qn.test(lb(a) ||
                    "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = G(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.C("visorc", d, 30);
                return "w" === d
            }

            function Yh(a) {
                var c = Df(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return Ef(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
            }

            function Ff(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return ic([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function he(a, c, b) {
                a = c(b);
                c = [B, 0, 0];
                var d = [0, c, c, void 0];
                return ic(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) tc(d, mb(l)), h = k(h), l & 2 && tc(d, mb(h[1])), tc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Gf]);
                            m.push([0, mb(l), tc]);
                            m.unshift([0, 0, Hf]);
                            f.push.apply(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ba(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Hf],
                                [q, h[m], r],
                                [k, m, p],
                                [0,
                                    0, Gf
                                ],
                                [0, mb(l), tc]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Gf]), m.push([0, mb(l), tc]), m.unshift([0, 0, Hf]), f.push.apply(f, m);
                    return d
                })
            }

            function Hf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [B, 0, 0], a[2] = a[1]);
                tc(a, mb(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Gf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [B, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function tc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function If(a) {
                return [
                    [385, a.dh, mb],
                    [336, a.pj, rn],
                    [272, a.fh, sn],
                    [208,
                        a.event, tn
                    ],
                    [144, a.Ui, un],
                    [80, a.page, vn]
                ]
            }

            function wn(a) {
                return [
                    [321, a.end, Kb],
                    [273, a.th, xn],
                    [193, a.page, J],
                    [144, a.data, If],
                    [65, a.L, J]
                ]
            }

            function Zh(a) {
                return [
                    [84, a.buffer, wn]
                ]
            }

            function yn(a) {
                return [
                    [129, a.position, J],
                    [81, a.name, P]
                ]
            }

            function zn(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function An(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function sn(a) {
                return [
                    [593, a.Tj, P],
                    [532, a.uj, yn],
                    [449, a.hf, J],
                    [401, a.oj, P],
                    [340, a.Ij, zn],
                    [276, a.ih, An],
                    [209, a.kj, P],
                    [145, a.lj, P],
                    [65, a.id, mb]
                ]
            }

            function Bn(a) {
                return [
                    [513, a.hf, J],
                    [489, a.Ri, kd],
                    [385,
                        a.Pa, J
                    ],
                    [321, a.height, J],
                    [257, a.width, J],
                    [193, a.y, J],
                    [129, a.x, J],
                    [65, a.id, mb]
                ]
            }

            function rn(a) {
                return [
                    [129, a.Pa, J],
                    [84, a.gh, Bn]
                ]
            }

            function Cn(a) {
                return [
                    [81, a.hash, P]
                ]
            }

            function Dn(a) {
                return [
                    [209, a.stack, P],
                    [145, a.Ih, P],
                    [81, a.code, P]
                ]
            }

            function En(a) {
                return [
                    [193, a.orientation, J],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function Fn(a) {
                return [
                    [84, a.Pc, Gn]
                ]
            }

            function Gn(a) {
                return [
                    [273, a.Qc, P],
                    [193, a.Nf, Kb],
                    [145, a.key, P],
                    [65, a.id, J]
                ]
            }

            function Hn(a) {
                return [
                    [145, a.value, P],
                    [81, a.Hk, P]
                ]
            }

            function In(a) {
                return [
                    [149, a.Lb,
                        P
                    ],
                    [81, a.method, P]
                ]
            }

            function Jn(a) {
                return [
                    [257, a.xb, J],
                    [193, a.yb, J],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function Kn(a) {
                return [
                    [144, a.Rg, $h],
                    [80, a.Pg, $h]
                ]
            }

            function $h(a) {
                return [
                    [193, a.y, J],
                    [129, a.x, J],
                    [105, a.level, kd]
                ]
            }

            function Ln(a) {
                return [
                    [84, a.touches, Mn]
                ]
            }

            function Mn(a) {
                return [
                    [297, a.force, kd],
                    [233, a.y, kd],
                    [169, a.x, kd],
                    [81, a.id, P]
                ]
            }

            function Nn(a) {
                return [
                    [193, a.hidden, Kb],
                    [129, a.checked, Kb],
                    [81, a.value, P]
                ]
            }

            function On(a) {
                return [
                    [257, a.lf, J],
                    [193, a.xg, J],
                    [129, a.end, J],
                    [65, a.start, J]
                ]
            }

            function Pn() {
                return []
            }

            function Qn(a) {
                return [
                    [193, a.page, Kb],
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function Rn(a) {
                return [
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function Sn(a) {
                return [
                    [84, a.Ma, Tn]
                ]
            }

            function Tn(a) {
                return [
                    [257, a.index, J],
                    [209, a.qe, P],
                    [145, a.style, P],
                    [65, a.target, J]
                ]
            }

            function tn(a) {
                return [
                    [1168, a.Bj, Sn],
                    [1104, a.zi, Cn],
                    [1040, a.Lh, Dn],
                    [976, a.Bh, En],
                    [912, a.Oi, Fn],
                    [848, a.rj, Jn],
                    [784, a.bk, Kn],
                    [720, a.Ik, Hn],
                    [656, a.Ek, In],
                    [592, a.Jj, Ln],
                    [528, a.oh, Nn],
                    [464, a.xj, On],
                    [400, a.Zj, Pn],
                    [336, a.vj, Qn],
                    [272, a.Si, Rn],
                    [193, a.M, ie],
                    [129, a.target, ie],
                    [65, a.type,
                        mb
                    ]
                ]
            }

            function un(a) {
                return [
                    [257, a.M, ie],
                    [208, a.$, Un],
                    [129, a.L, J],
                    [65, a.target, J]
                ]
            }

            function Un(a) {
                return [
                    [148, a.Ma, Vn],
                    [65, a.index, J]
                ]
            }

            function Vn(a) {
                return [
                    [276, a.d, Wn],
                    [212, a.sd, Xn],
                    [148, a.ef, Yn],
                    [84, a.af, Zn]
                ]
            }

            function Wn(a) {
                return [
                    [193, a.Fa, J],
                    [144, a.wc, ai],
                    [65, a.id, J]
                ]
            }

            function Xn(a) {
                return [
                    [193, a.Fa, J],
                    [146, a.Mb, 81, P, 144, ai],
                    [65, a.id, J]
                ]
            }

            function ai(a) {
                return [
                    [193, a.r, Kb],
                    [145, a.n, P],
                    [81, a.Tc, P]
                ]
            }

            function Yn(a) {
                return [
                    [641, a.Oa, Kb],
                    [577, a.Fa, J],
                    [513, a.le, J],
                    [465, a.wc, P],
                    [402, a.Mb, 81, P, 145, P],
                    [321, a.ve, J],
                    [273, a.Wf, P],
                    [193, a.se, J],
                    [145, a.Vf, P],
                    [65, a.id, J]
                ]
            }

            function Zn(a) {
                return [
                    [321, a.Fa, J],
                    [257, a.se, J],
                    [193, a.le, J],
                    [129, a.ve, J],
                    [65, a.id, J]
                ]
            }

            function vn(a) {
                return [
                    [321, a.Ia, $n],
                    [273, a.hd, P],
                    [193, a.M, ie],
                    [148, a.content, ao],
                    [80, a.$, bo]
                ]
            }

            function ao(a) {
                return [
                    [513, a.hidden, Kb],
                    [449, a.xe, J],
                    [385, a.next, J],
                    [337, a.content, P],
                    [257, a.parent, J],
                    [210, a.attributes, 81, P, 145, P],
                    [145, a.name, P],
                    [65, a.id, J]
                ]
            }

            function bo(a) {
                return [
                    [724, a.Ak, co],
                    [656, a.location, eo],
                    [592, a.viewport, bi],
                    [528, a.screen, bi],
                    [449, a.Hf, Kb],
                    [401, a.ff, P],
                    [337, a.referrer, P],
                    [273, a.Ig, P],
                    [209, a.cf, P],
                    [145, a.title, P],
                    [81, a.doctype, P]
                ]
            }

            function co(a) {
                return [
                    [133, a.scroll, J],
                    [65, a.target, J]
                ]
            }

            function eo(a) {
                return [
                    [209, a.path, P],
                    [145, a.protocol, P],
                    [81, a.host, P]
                ]
            }

            function bi(a) {
                return [
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function P(a) {
                var c = fo({}, a, [], 0);
                return c ? [go, c, a] : [ci, 0, 0]
            }

            function xn(a) {
                return [ho, a.length, a]
            }

            function Kb(a) {
                return [ci, 1, a ? 1 : 0]
            }

            function $n(a) {
                a = di(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [ei, 0 ===
                    c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a
                ]
            }

            function kd(a) {
                return [io, 4, a]
            }

            function ie(a) {
                return mb((a << 1 ^ a >> 31) >>> 0)
            }

            function J(a) {
                return 0 > a ? [ei, 10, di(a)] : mb(a)
            }

            function mb(a) {
                return [jo, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function jo(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function ci(a, c, b, d) {
                b[d] = c
            }

            function ho(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function fi(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c =
                            b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function io(a, c, b, d) {
                return ko(a)(a, c, b, d)
            }

            function lo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) ld(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) ld(2143289344, b, d);
                else if (3.4028234663852886E38 < c) ld((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) ld((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    ld((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function ld(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function ei(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function di(a) {
                if (!a) return [0,
                    0
                ];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function je(a) {
                return ea(a) ? A(je, a) : na(a) || "object" !== typeof a ? a : N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = mo[d];
                    V(f) && (f = d);
                    e = H(f, no) ? e : je(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, ya(a))
            }

            function gi(a, c, b) {
                return function(d, e, f) {
                    var g;
                    d = y({
                        H: Ca()
                    }, d);
                    d.H.cc("we", Cb(e.Ib));
                    d.G || (d.G = {});
                    var h = d.G,
                        k = d.Ra;
                    k = void 0 === k ? {} : k;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" +
                        Ib(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Ua(a);
                    h["wv-type"] || (h["wv-type"] = k.Xd ? "3" : "2");
                    f = {
                        ra: {
                            Ja: "webvisor/" + e.id
                        },
                        Y: y(d.Y, {
                            zb: (g = {}, g["Content-Type"] = "text/plain", g),
                            Xe: "POST"
                        }),
                        G: h
                    };
                    e = Na(Jf(a, "wv", e), b);
                    return ke(a, c, e)(y(d, f))
                }
            }

            function oo(a, c) {
                return qa(c, function(b) {
                    var d = G(a);
                    M(c);
                    if (!d.o("dSync", !1)) return d.C("dSync", !0), hi(a, b, {
                        hb: c,
                        Zc: "s",
                        ee: "ds",
                        Dj: function(e, f, g) {
                            var h = e.cd;
                            e = e.host;
                            if (n(h, "settings")) return Wa(Sa("ds.e"));
                            f = f(aa) - g;
                            g = e[1];
                            var k, l;
                            h = Ca((k = {},
                                k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = R(a).href, l);
                            return Aa(a, "S", ii)({
                                H: h,
                                G: k
                            }, ii)["catch"](C(a, "ds.rs"))
                        }
                    })
                })
            }

            function hi(a, c, b) {
                var d = b.hb,
                    e = ha(a),
                    f = po(a, c.userData, d),
                    g = qo(a);
                return g.length ? ro(a, e, f, c, b).then(function() {
                    return so(a, g, f, e, b)
                }, B) : K.resolve()
            }

            function qo(a) {
                var c = md(a);
                a = u(Kf, uc(["iPhone", "iPad"]))(a);
                return c ? to : a ? uo : []
            }

            function so(a, c, b, d, e) {
                var f = e.Dj,
                    g = void 0 === f ? B : f,
                    h = e.ee,
                    k = d(aa);
                return vo(a, c, e)(Ra(function(l) {
                    z(function(m) {
                        m && le(a, h + ".s", m)
                    }, l);
                    l = d(jb);
                    b.C(h,
                        l)
                }, function(l) {
                    b.C(h, d(jb));
                    g(l, d, k)
                }))
            }

            function ro(a, c, b, d, e) {
                var f = e.ee,
                    g = e.hb;
                return new K(function(h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(jb) - l ? k() : wo(a) ? h(void 0) : ji(d) ? k() : h(xo(a, g))
                })
            }

            function vo(a, c, b) {
                var d = b.Zc,
                    e = b.data,
                    f = Aa(a, d, b.hb);
                a = y({}, ki);
                e && y(a.G, e);
                return yo(A(function(g) {
                    return zo(f(y({
                        Y: {
                            Og: !1,
                            tj: !0
                        }
                    }, ki), A(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = L("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" +
                            Ao[d]
                    }, g)).then(function(h) {
                        return y({}, h, {
                            host: g[h.Kg]
                        })
                    }))
                }, c))
            }

            function po(a, c, b) {
                var d = c || {},
                    e = Aa(a, "u", b),
                    f = Qa(a);
                return {
                    o: function(g, h) {
                        return V(d[g]) ? f.o(g, h) : d[g]
                    },
                    C: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({
                            G: (k = {}, k.key = g, k.value = l, k)
                        }, [ra.Wa + "//" + Zb + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s"))
                    }
                }
            }

            function Bo(a) {
                return {
                    aa: function(c, b) {
                        G(a).o("oo") || b()
                    }
                }
            }

            function Co(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return K.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] = Do, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = kb(a, e)) ? d(Eo, {
                        Zb: g,
                        Da: [],
                        fa: "site-info=" + be(e)
                    })["catch"](B) : K.resolve()
                }
            }

            function Fo(a, c) {
                if (a["disableYaCounter" + c.id]) {
                    var b = M(c);
                    delete G(a).o("counters", {})[b];
                    Wa(Sa("oo.e"))
                }
            }

            function Go(a) {
                if (nd(a)) return null;
                var c = Ho(a),
                    b = c.bg;
                V(b) && (c.bg = null, Io(a).then(function(d) {
                    c.bg = d
                }));
                return b ? 1 : null
            }

            function Jo(a, c, b) {
                b = b.G;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Lf(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") &&
                    (d = n(a.getEntriesByType("navigation"), "0")) && (b = Ko);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Lo, d = e)
                }
                if (!b) return null;
                a = Mo(a, d, b);
                c = M(c);
                c = No(c);
                return (c = Oo(c, a)) && L(",", c)
            }

            function Oo(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                z(u(O, pa("push", a)), c);
                return Y(la(null), b).length === a.length ? null : b
            }

            function Mo(a, c, b) {
                return A(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (S(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] &&
                        0 === c[f]) && (g = d[1], g = !(li[d[0]] || li[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Nh(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g &
                        63
                    ])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ?
                    mi(e, !0) : e
            }

            function xh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = mi(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f ||
                        0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function mi(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Po[b] || b
                }) : ""
            }

            function Qo(a) {
                try {
                    var c = Oa(a) ? a : [];
                    return L(",", [a.name, a.description, u(sa, Hc(Boolean), fb(Ro), od(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Ro(a) {
                return L(",", [a.description, a.suffixes, a.type])
            }

            function So(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function To(a, c, b, d, e, f, g, h) {
                var k = b.o(f);
                na(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g));
                V(h) || h.cc(f, "" + k);
                return k
            }

            function Uo(a, c) {
                if (pd(a)) {
                    var b = lb(a).match(Vo);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function me(a, c, b) {
                return function(d) {
                    var e, f, g = Ha(c, b);
                    g && Wo(a, d, c) && (g = E(g.params, g), (d = Mf({
                        event: a,
                        Gb: "products",
                        sb: Ic,
                        ri: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Wo(a, c, b) {
                var d = !1,
                    e = "";
                if (!Ma(c)) return Ab(b, "",
                    "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ea(f) && f.length ? (d = Ef(function(g) {
                            return Ma(g) && (za(g.id) || ne(b, g.id) || za(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        ne(b, c.id) || za(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                Ab(b, "", e);
                return d
            }

            function qd(a, c) {
                return {
                    aa: function(b, d) {
                        Nf(b) ?
                            d() : qa(c, function(e) {
                                var f;
                                if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.G = y(b.G || {}, e);
                                d()
                            })
                    }
                }
            }

            function Xo(a, c) {
                function b() {
                    q.hidden ? y(k.style, rd(["top", "right", "left", "background"], "initial")) : y(k.style, rd(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    x.parentNode || (r.appendChild(p), r.appendChild(x));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    t.hidden = !t.hidden
                }

                function d(W) {
                    var oa = g();
                    y(oa.style, vc("2px", "18px"), Jc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    oa.style.transform = "rotate(" + W + "deg)";
                    return oa
                }

                function e(W, oa, ta, tb, sd) {
                    var oe = g();
                    y(oe.style, vc(oa + "px", ta + "px"), Jc, {
                        left: W + "px",
                        bottom: 0,
                        background: tb,
                        borderTopLeftRadius: sd
                    });
                    return oe
                }
                var f = $a(a);
                if (!f) return B;
                var g = v("div", f),
                    h = v("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                y(k.style, ni, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                y(m.style, vc("24px"), Jc, Of, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                y(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Of, Jc, vc("48px"), rd(["top", "left"], "calc(50% - 24px)"), rd(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                y(q.style, vc("46px", "48px"), ni, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var r = g();
                y(r.style, Jc, rd(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                y(t.style, vc("32px"), Jc, Of, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var x = h();
                y(x.style, vc("100%"), {
                    border: "none"
                });
                x.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(t);
                var I = ["click", "touchstart"];
                h = ja(a);
                m = a.document.body;
                l = [h.D(q, I, b), h.D(t, I, b), h.D(f, ["load"], F([ia, [E(r.removeChild, r, f), E(l.appendChild, l, q)]], z)), h.D(x, ["load"], E(r.removeChild, r, p)), E(m.removeChild, m, k)];
                var Z = F([ia, l], z);
                l.push(h.D(a, ["securitypolicyviolation"], function(W) {
                    (W = n(W, "blockedURI")) && 0 <= W.indexOf("https://metrika.yandex.ru") && Z()
                }));
                m.appendChild(k);
                return Z
            }

            function rd(a, c) {
                return N(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function vc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function Yo(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && La(u(Xa, xa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = rb(a, c.data), "appendremote" ===
                    n(b, "action") && Zo(a, c, b))
            }

            function oi(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = G(a),
                    l = {};
                l.getCachedTags = Pf;
                l.form = (e = {}, e.closest = v(a, pi), e.select = $o, e.getData = v(a, qi), e);
                l.button = (f = {}, f.closest = v(a, Qf), f.select = Rf, f.getData = v(a, Sf), f);
                l.phone = (g = {}, g.hidePhones = F([a, null, [d]], ri), g);
                l.status = (h = {}, h.checkStatus = F([a, Ga(b)], ap), h);
                k.C("_u", l);
                c && kc(a, {
                    src: c
                })
            }

            function si(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" :
                    d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = L(".", u(fb(u(O, Ga)), Hc(Boolean))(b.split(".")));
                if (!H(d, bp) || !H(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return ti(c) ? c : ""
            }

            function cp(a, c) {
                var b = $a(a);
                if (b) {
                    var d = b("div"),
                        e = Wb(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            kc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer =
                            f)
                    }
                }
            }

            function ap(a) {
                var c, b = ui(a);
                a = G(a).o("getCounters", td)();
                a = A(T("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && H(b, a), c
            }

            function ri(a, c, b) {
                var d;
                c = vi(a, c, {
                    Fg: dp,
                    Wi: (d = {}, d.href = !0, d)
                });
                b = Y(Boolean, A(function(f) {
                    return "*" === f ? f : Lb(f)
                }, b));
                var e = A(u(O, pa("concat", [""]), wi("reverse"), ia), b);
                b = ud(a);
                d = xi(a, b, 1E3);
                c = E(c.eg, c, e);
                d.D(c);
                ep(a, b);
                yi(a, b);
                c()
            }

            function dp(a, c, b) {
                var d = $a(a),
                    e = b.Ab,
                    f = b.ad,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.Ee && h && d && g) {
                    b = d("small");
                    zi(b);
                    var k = h.split(""),
                        l = Ai(h).length;
                    z(pa("appendChild", b), N(function(m, p) {
                        var q = m.ma,
                            r = m.Ng,
                            t = d("small");
                        t.innerHTML = p;
                        var x = fp.test(p);
                        zi(t);
                        x && (t.style.opacity = "" + (l - r - 1) / l);
                        q.push(t);
                        return {
                            ma: q,
                            Ng: r + (x ? 1 : 0)
                        }
                    }, {
                        ma: [],
                        Ng: 0
                    }, k).ma);
                    gp(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function gp(a, c, b, d) {
                function e() {
                    z(v(["style", "opacity", ""], Ec), sa(b.childNodes));
                    if (c) {
                        var k = Ha(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ja(a),
                    g = B,
                    h = B;
                g = f.D(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = U(a, e, 200, "ph.h.e");
                        (h ||
                            B)();
                        h = f.D(b, ["mouseleave"], function(m) {
                            m.target === b && ma(a, l)
                        })
                    }
                })
            }

            function yi(a, c) {
                $b(a)(Ra(B, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Ea("MutationObserver", a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
                }))
            }

            function ep(a, c) {
                return ja(a).D(a, ["load"], c.O)
            }

            function vi(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.ad]) || void 0 === l ? void 0 : l.kd : null
                }
                var e, f = b.Fg;
                b = b.Wi;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    eg: function(k) {
                        return new K(function(l,
                            m) {
                            k && k.length || m();
                            h = Bi()(k);
                            $b(a)(Ra(v({
                                oa: [],
                                za: 0
                            }, l), function() {
                                var p = ha(a),
                                    q = p(aa),
                                    r = g.href ? hp(a, h) : [],
                                    t = g.text ? Ci(a, h) : [];
                                l({
                                    oa: Y(ea, Y(Boolean, A(d, r.concat(t)))),
                                    za: p(aa) - q
                                })
                            }))
                        })
                    }
                }
            }

            function hp(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Di(c);
                return N(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Lb(k) : "",
                            m = c[l];
                        V(m) || !l && "*" !== m.kd[0] || (e.push({
                                Ee: "href",
                                Ab: f,
                                ad: l,
                                fb: Ei(k, c[l].fb),
                                Fj: g
                            }), g = Lb(h.slice(4)),
                            l = Bi()([l ? m.kd : [g, ""]]), e.push.apply(e, Ci(a, l, f)))
                    }
                    return e
                }, [], sa(b.querySelectorAll("a")))
            }

            function Ci(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = Di(c);
                pf(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = Y(Boolean, e.exec(f.textContent || "") || []);
                        z(function(h) {
                            var k = Lb(h);
                            V(c[k]) || d.push({
                                Ee: "text",
                                Ab: f,
                                ad: k,
                                fb: Ei(h, c[k].fb),
                                Fj: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Bi() {
                return vd(function(a, c) {
                    var b = A(Lb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        fb: b,
                        kd: c
                    };
                    var e = Fi(d);
                    e !== d && (a[e] = {
                        fb: Fi(b),
                        kd: c
                    });
                    return a
                }, {})
            }

            function Ei(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return L("", b) + c.slice(f + 1)
            }

            function Fi(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Di(a) {
                return new RegExp("(?:" + L("|", A(Gi, ba(a))) + ")")
            }

            function Hi(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? pf(a, c, pa("push", e), d) : Na(e, Ii(a, c, d)));
                    z(b, e)
                }
            }

            function pf(a, c, b, d, e) {
                function f(g) {
                    return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Cf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Ii(a, c, b) {
                var d = [],
                    e = u(O, pa("push", d));
                S(b) ? (b = b(c), (na(b) || b === a.NodeFilter.FILTER_ACCEPT) &&
                    e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Ii(a, c[b]);
                        z(e, g)
                    }
                }
                return d
            }

            function Ji(a, c, b) {
                var d;
                a = [Ki(a, c, function(e) {
                    d = e;
                    e.ya.D(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return F([Li, a], z)
            }

            function ip(a, c, b, d) {
                var e, f;
                if (b) {
                    var g = n(d, "ecommerce") || {};
                    var h = n(d, "event") || "";
                    g = Ma(g) && za(h) ? Mf(h, g) : void 0;
                    if (!g) a: {
                        var k = d;!ea(d) && ne(a, Oa(d)) && (k = Ba(k));
                        if (ea(k) && (g = k[0], h = k[1], k = k[2], za(h) && Ma(k) && "event" === g)) {
                            g = Mf(h, k);
                            break a
                        }
                        g = void 0
                    }
                    if (d =
                        g || jp(d)) gb(a, {
                        da: c,
                        name: "ecommerce",
                        data: d
                    }), b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
                }
            }

            function jp(a) {
                var c = n(a, "ecommerce");
                if (Ma(c)) return a = Y(uc(kp), ba(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === ba(a).length ? void 0 : a
            }

            function Mf(a, c) {
                var b, d, e = za(a) ? lp[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Gb,
                        h = e.ri,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(v(e.sb, mp), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ba(l);
                        g && 1 < b.length && (m[f].actionField = N(function(p, q) {
                            if (q === k) return p;
                            if ("currency" ===
                                q) return m.currencyCode = l.currency, p;
                            p[np[q] || Tf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function mp(a, c) {
                var b = {};
                z(function(d) {
                    var e = a[d] || Tf[d] || d; - 1 !== d.indexOf("item_category") ? (e = Tf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ba(c));
                return b
            }

            function op(a, c, b) {
                if (b && (b = Qf(a, b), b = Sf(a, b))) {
                    b = "?" + wd(b);
                    var d = Db(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    pe(a, c, "btn", d).reachGoal(b)
                }
            }

            function pp(a, c, b, d) {
                d = n(d, "target");
                (d = ac("button,input", a, d)) && "submit" === d.type && (d = pi(a,
                    d)) && (b.push(d), U(a, F([!1, a, c, b, d], Mi), 300))
            }

            function Mi(a, c, b, d, e) {
                var f = Mb(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = qi(c, e), a = "?" + wd(a), d = F([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Ni), pe(c, b, "form", d).reachGoal(a)
            }

            function Ni(a, c, b) {
                return qp(a, c).then(function(d) {
                    d && Db(a, c, b)()
                })
            }

            function qi(a, c, b) {
                return Oi(a, c, ["i", "n", "p"], void 0, b)
            }

            function rp(a, c) {
                var b;
                a((b = {}, b.clickmap = V(c) ? !0 : c, b))
            }

            function sp(a, c, b, d, e) {
                var f;
                c = {
                    H: Ca(),
                    G: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f),
                    ra: {
                        Ja: "clmap/" +
                            e.id
                    }
                };
                d(c, e)["catch"](C(a, "c.s.c"))
            }

            function tp(a, c, b, d, e) {
                if (xd(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ia(c.element);
                if (e && !e(c.element, a) || H(c.button, [2, 3]) && "A" !== a || La(la(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (up(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function vp(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument &&
                        b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function wp(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function Pi(a, c) {
                var b = Wb(a),
                    d = Uf(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function qe(a, c) {
                return {
                    aa: function(b, d) {
                        var e, f = b.H,
                            g = b.Ka,
                            h = b.G,
                            k = b.Y;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ha(a);
                            f.cc("rqnl", 1);
                            for (var m = yd(a), p = 1; m[p];) p += 1;
                            b.V || (b.V = {});
                            b.V.$b =
                                p;
                            m[p] = (e = {}, e.protocol = ra.Wa, e.host = Zb, e.resource = b.ra.Ja, e.postParams = k.fa, e.time = l(aa), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Ib(a), e);
                            g && (m[p].telemetry = g.l());
                            Vf(a)
                        }
                        d()
                    },
                    Ca: function(b, d) {
                        Qi(a, b);
                        d()
                    }
                }
            }

            function Qi(a, c) {
                var b = yd(a);
                c.H && !Ta(b) && c.V && (delete b[c.V.$b], Vf(a))
            }

            function Vf(a) {
                var c = yd(a);
                Qa(a).C("retryReqs", c)
            }

            function xp(a, c) {
                if (a.Nj()) {
                    var b = Ri(c);
                    if (b && !sc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.yh,
                            f = a.hb,
                            g = a.sender,
                            h = a.Mh,
                            k = f.Dc,
                            l = b.href;
                        var m =
                            nb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? nb(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        if (sc("ym-external-link", b)) re(d, f, {
                            url: l,
                            qb: !0,
                            title: m,
                            sender: g
                        });
                        else {
                            k = k ? Fc(d, k).hostname : R(d).hostname;
                            h = RegExp("\\.(" + L("|", A(yp, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = Si.test(p) || Si.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            se(k) === se(b) ? h ? re(d, f, {
                                    url: l,
                                    Mc: !0,
                                    title: m,
                                    sender: g
                                }) : m && e.C("il", nb(m).slice(0, 100)) : l && zp.test(l) ||
                                re(d, f, {
                                    url: l,
                                    Rc: !0,
                                    qb: !0,
                                    Mc: h,
                                    title: m,
                                    sender: g
                                })
                        }
                    }
                }
            }

            function re(a, c, b) {
                var d, e = Ca();
                b.Mc && e.C("dl", 1);
                b.qb && e.C("ln", 1);
                var f = b.Mg || {};
                e = {
                    H: e,
                    V: {
                        title: f.title || b.title,
                        Rc: !!b.Rc,
                        ea: f.params
                    },
                    G: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.Dc || R(a).href, d)
                };
                d = "Link";
                b.Mc ? d = b.qb ? "Ext link - File" : "File" : b.qb && (d = "Ext link");
                gb(a, {
                    da: M(c),
                    name: "event",
                    data: {
                        Bb: "Link click",
                        name: (b.qb ? "external" : "interlal") + " url: " + b.url
                    }
                });
                c = b.sender(e, c).then(Db(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.Mg));
                return Kc(a,
                    "cl.p.s", c, f.callback || B, f.ctx)
            }

            function Ap(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Bp(a, c, b, d) {
                var e = R(a),
                    f = e.hostname;
                e = e.href;
                if (c = zd(c).url) a = Fc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Ti(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Cp(a, c, b, d) {
                var e;
                if (a = Ha(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    H(b, g) || !a.params ||
                        d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.rg((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function th(a, c, b) {
                void 0 === b && (b = O);
                var d = fd(a);
                b(d);
                var e = v(d, Dp);
                te(a, c, function(f) {
                    f.ya.D(e)
                });
                return d
            }

            function Dp(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.O(n(b, "type"), b)
            }

            function te(a, c, b, d) {
                void 0 === b && (b = B);
                void 0 === d && (d = !1);
                var e = ud(a);
                if (c && S(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Ba(arguments),
                            h = g[0];
                        d && e.O(h);
                        g = f.apply(c, g);
                        d || e.O(h);
                        return g
                    };
                    a = {
                        ya: e,
                        unsubscribe: function() {
                            c.push =
                                f
                        }
                    };
                    b(a);
                    z(e.O, c);
                    return a
                }
            }

            function Ud(a) {
                a = G(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function Rl(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function Ui(a, c) {
                var b = ad(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = F([a, b.He], Ep),
                    g = v(f, Fp);
                b.ba.D(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).D(["parentConnect"], function(h) {
                    g(e, b.Ha[h[1].counterId])
                });
                return {
                    ba: b.ba,
                    Mk: function(h, k) {
                        return new K(function(l, m) {
                            b.He(h, k, function(p, q) {
                                l([p, q])
                            });
                            U(a, v(Sa(),
                                m), 5100, "is.o")
                        })
                    },
                    qg: function(h) {
                        var k = {
                            ug: [],
                            Se: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    rg: function(h) {
                        var k = {
                            ug: [],
                            Se: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ha, k, h)
                    }
                }
            }

            function Fp(a, c, b) {
                c = Y(function(d) {
                    return !H(b.info.counterId, d.Se)
                }, c);
                z(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function Ep(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = ba(b),
                        k = u(d.resolve ? d.resolve : O, dd(f)),
                        l = u(d.reject ? d.reject : O, dd(g));
                    d.resolve = k;
                    d.reject = l;
                    z(function(m) {
                        var p;
                        d.Se.push(+m);
                        var q = b[m],
                            r = U(a, v(Sa(), l), 5100, "is.m");
                        c(q.window, y(e, (p = {}, p.toCounter = Ga(m), p)), function(t, x) {
                            ma(a, r);
                            d.ug.push(m);
                            d.resolve && d.resolve(x)
                        })
                    }, h)
                }))["catch"](C(a, "if.b"))
            }

            function Gp(a) {
                var c = B,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    S(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    S(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        zh: b,
                        kc: c,
                        ea: 1 === d.length ? a[0] : Ec(d)
                    }
                }
            }

            function Kc(a, c, b, d, e) {
                var f = F([a, d, e], Wf);
                return b.then(f, function(g) {
                    f();
                    le(a, c, g)
                })
            }

            function Vi(a, c) {
                return {
                    aa: function(b,
                        d) {
                        var e = (b.V || {}).ea,
                            f = b.Y;
                        f = void 0 === f ? {} : f;
                        if (e && (Wi(c, e), !f.fa && b.H && b.G)) {
                            var g = kb(a, e),
                                h = Xi(a),
                                k = b.H.o("pv");
                            g && !b.G.nohit && (gb(a, {
                                da: M(c),
                                name: "params",
                                data: {
                                    Rk: e
                                }
                            }), k ? encodeURIComponent(g).length > ra.Vg ? h.push([b.H, e]) : b.G["site-info"] = g : (f.fa = g, b.Y = f, b.Ra || (b.Ra = {}), b.Ra.Xi = !0))
                        }
                        d()
                    },
                    Ca: function(b, d) {
                        var e = Xi(a),
                            f = Ha(a, c),
                            g = f && f.params;
                        g && (f = Y(u(Lc, la(b.H)), e), z(function(h) {
                            g(h[1]);
                            h = ue(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function ve(a, c) {
                return function(b) {
                    Xf(a, c, b)
                }
            }

            function Hp(a, c) {
                Yf(a)(function(b) {
                    delete b[c]
                })
            }

            function Xf(a, c, b) {
                Yf(a)(function(d) {
                    d[c] = y(d[c] || {}, b)
                })
            }

            function Yf(a) {
                a = G(a);
                var c = a.o("dsjf") || xa({});
                a.Ta("dsjf", c);
                return c
            }

            function Ip(a, c) {
                return function(b) {
                    var d, e, f = Ha(a, c);
                    f && (Ma(b) ? Oa(ba(b)) ? (b = Yi(b)) && Oa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : Db(a, c, "First party params error. Empty object.")() : Db(a, c, "First party params error. Not an object.")())
                }
            }

            function Yi(a) {
                a = ya(a);
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Ma(e);
                    if (!za(e) && !f) return c;
                    e = f ? Yi(e) : e;
                    Oa(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function Zi(a, c, b) {
                void 0 === b && (b = 0);
                c = ya(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = Ma(g);
                    if (!za(g) && !h) return d;
                    h ? g = Zi(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Jp(g) : "email" === f && (g = Kp(g)), g = $i(a, g)) : g = K.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function Kp(a) {
                var c = nb(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                aj(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(Zf, "-") : "gmail.com" ===
                    c && (b = b.replace(Zf, ""));
                a = ee(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function Jp(a) {
                a = Lb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function $i(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(hc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Ha(a, c) {
                var b =
                    G(a).o("counters", {}),
                    d = M(c);
                return b[d]
            }

            function bj(a, c) {
                G(a).C("dce:" + c, !0);
                var b = G(a).o("dclq:" + c);
                b && (z(function(d) {
                    var e = d[0];
                    d = d[1];
                    ia.apply(void 0, wa([Ad(a, c)[e]], d))
                }, b), Bd(b))
            }

            function Db(a, c, b, d) {
                return $f(c) ? B : v(F(wa([a, M(c)], d ? [b + ". Params:", d] : [b]), Ab), ia)
            }

            function Ab() {
                var a = Ba(arguments),
                    c = a.slice(2);
                Ad(a[0], a[1]).log.apply(Ab, c)
            }

            function Df(a) {
                var c = "1" === Yb(a).o("debug"),
                    b = ag(a, "1");
                a = a._ym_debug;
                return {
                    xi: c,
                    Hi: a || b,
                    isEnabled: La(Boolean, [c, a, b])
                }
            }

            function ag(a, c) {
                return -1 < R(a).href.indexOf("_ym_debug=" +
                    c)
            }

            function Lp(a, c) {
                return {
                    log: Mc(a, "log", c, B),
                    warn: Mc(a, "log", c, B),
                    error: Mc(a, "log", c, B)
                }
            }

            function Mc(a, c, b, d) {
                return function() {
                    var e = Ba(arguments);
                    gb(a, {
                        da: b,
                        name: "log",
                        data: {
                            Lb: e,
                            type: c
                        }
                    });
                    return d.apply(void 0, e)
                }
            }

            function qa(a, c) {
                var b = M(a);
                return cj()(Mp(b)).then(c)
            }

            function Np(a, c, b) {
                c = M(c);
                var d = bg(a);
                b = y({
                    Oh: d(aa)
                }, b);
                gb(a, {
                    da: c,
                    name: "counterSettings",
                    data: {
                        Ok: b
                    }
                });
                return cj()(Op(c, b))
            }

            function Op(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.qj = c, d.hg = !0, d.gg ? d.gg(c) : d.cb = K.resolve(c)) : b[a] = {
                        cb: K.resolve(c),
                        qj: c,
                        hg: !0
                    }
                }
            }

            function Eb(a) {
                return A(function(c) {
                    return !c || H(c, a) ? c : 0
                }, bc)
            }

            function dj(a) {
                return !nd(a) && ej(a)
            }

            function cg(a) {
                return $a(a) ? v(a, Pp) : !1
            }

            function ej(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ea("sendBeacon", c) ? F([a, E(c, n(a, "navigator"))], Qp) : !1
            }

            function Qp(a, c, b, d) {
                return new K(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = y(d.Zb, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + wd(h) + (d.fa ? "&" + d.fa : "");
                    return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Pp(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Ua(a),
                        k = y((f = {}, f.callback = h, f), b.Zb),
                        l = F([a, h], Rp);
                    a[h] = function(p) {
                        try {
                            l(), mc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = kc(a, (g = {}, g.src = fj(c, b, k), g));
                    if (!m) return l(), e(hc("jp.s"));
                    f = v(m, mc);
                    f = u(f, v(Sa(b.Da), e));
                    g = we(a, f, b.Fb || 1E4);
                    g = F([a, g], ma);
                    m.onload = g;
                    m.onerror = u(l, g, f)
                })
            }

            function Rp(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Cd(a) {
                var c = $a(a);
                return c ? F([a, c], Sp) : !1
            }

            function Sp(a, c, b, d) {
                return new K(function(e, f) {
                    var g =
                        Wb(a),
                        h = c("img"),
                        k = u(v(h, mc), v(Sa(d.Da), f)),
                        l = we(a, k, d.Fb || 3E3);
                    h.onerror = k;
                    h.onload = u(v(h, mc), v(null, e), F([a, l], ma));
                    k = y({}, d.Zb);
                    delete k.wmode;
                    h.src = fj(b, d, k);
                    pd(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Nb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Tp.test(a.location.host) && a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? v(a, Up) : !1
            }

            function Up(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.fa,
                    g = y(b.nd ? (d = {}, d.wmode = "7", d) : {}, b.Zb);
                return new K(function(h, k) {
                    e.open(b.Xe || "GET", c + "?" + wd(g), !0);
                    e.withCredentials = !1 !== b.Og;
                    b.Fb && (e.timeout = b.Fb);
                    gj(ya, fb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.zb);
                    var l = F([a, e, Sa(b.Da), b.nd, b.tj, h, k], Vp);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function Vp(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(hc("http." +
                        c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = rb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function fj(a, c, b) {
                (b = wd(b)) && (a += "?" + b);
                c.fa && (a += (b ? "&" : "?") + c.fa);
                return a
            }

            function Wp(a, c, b) {
                var d = A(Lc, Ob[c] || Pb);
                z(function(e) {
                    return d.unshift(e)
                }, xe);
                return A(u(Nc([a, b]), ia), d)
            }

            function hj(a, c) {
                var b = R(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!za(c) || V(c)) return d;
                b = c.replace(ij, "");
                if (-1 !== b.search(Xp)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, L("/", d);
                return ""
            }

            function ye(a, c) {
                return {
                    aa: function(b, d) {
                        var e = jj(c);
                        e = F([b, e, d], Yp);
                        Zp(a, c, e)
                    },
                    Ca: function(b, d) {
                        var e = b.H,
                            f = jj(c);
                        if (e) {
                            var g = f.va;
                            f.tf === e && g && (z(ia, g), f.va = null)
                        }
                        d()
                    }
                }
            }

            function Yp(a, c, b) {
                var d = a.H;
                d ? Nf(a) ? (c.tf = d, b()) : c.va ? c.va.push(b) : b() : b()
            }

            function Nf(a) {
                return (a = a.H) && a.o("pv") &&
                    !a.o("ar")
            }

            function Zp(a, c, b) {
                if (dg(a) && cb(a)) {
                    var d = $p(c);
                    if (!d.Ji) {
                        d.Ji = !0;
                        c = ad(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.va = [];
                        var e = function() {
                            d.va && (z(ia, d.va), d.va = null)
                        };
                        U(a, e, 3E3);
                        c.ba.D(["initToChild"], e)
                    }
                    d.va ? d.va.push(b) : b()
                } else b()
            }

            function kj(a, c) {
                return {
                    aa: function(b, d) {
                        var e = b.H;
                        if (e && (!c || c.pg)) {
                            var f = a.document.title;
                            b.V && b.V.title && (f = b.V.title);
                            var g = cc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, ra.Wg);
                            e.C("t", f)
                        }
                        d()
                    }
                }
            }

            function Fb(a) {
                return function(c,
                    b) {
                    return {
                        aa: function(d, e) {
                            var f = d.H,
                                g = d.G;
                            f && g && z(function(h) {
                                var k = eg[h],
                                    l = "bi",
                                    m = f;
                                k || (k = fg[h], l = "tel", m = Vd(d));
                                k && (k = D(l + ":" + h, k, null)(c, b, d), m.cc(h, k))
                            }, a || aq());
                            e()
                        }
                    }
                }
            }

            function bq(a, c) {
                var b = Dd(a);
                c.D(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).D(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.O("parentConnect", [e, d])
                }).D(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ha[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function cq(a) {
                if (Ea("MutationObserver", a.MutationObserver)) {
                    var c = Dd(a).children,
                        b = new a.MutationObserver(function() {
                            z(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ba(c))
                        });
                    $b(a)(Ra(B, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function dq(a, c) {
                return function(b, d) {
                    var e, f = {
                        xc: ha(a)(aa),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.xc = Ga(b[0]), f.key = parseFloat(b[1]), f.dir = Ga(b[2]));
                    y(d, c);
                    var g = (e = {
                            data: d
                        }, e.__yminfo = L(":", ["__yminfo", f.xc, f.key, f.dir]),
                        e);
                    return {
                        $: f,
                        zg: kb(a, g) || ""
                    }
                }
            }

            function $b(a, c) {
                function b(e) {
                    n(c, d) ? e() : U(a, v(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return xa(function(e, f) {
                    b(f)
                })
            }

            function Dc(a, c) {
                var b = c.fe,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Yb(a),
                    f = Qa(a),
                    g = ha(a)(gg),
                    h = lj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.o("d");
                mj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = L("", [g, Ua(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ga(l)) m = !0;
                m && !c.tb && (e.C(d, h, 525600, b), e.C("d", "" + g, 525600, b));
                f.C(d,
                    h);
                return h
            }

            function eq(a, c) {
                return !c.tb && mj(a, c)
            }

            function lj(a, c) {
                var b = Qa(a),
                    d = Yb(a),
                    e = c.fe || "uid";
                return [b.o(e), d.o(e)]
            }

            function Wh(a, c, b) {
                hg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = nj(a);
                (d = d && d.metrika_enabled) && oj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function hg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Xh(a, ge, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + fq(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(gq, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie =
                            h + ("path=" + (f || "/")), g || (pj(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ge(a, c) {
                var b = pj(a);
                return b ? b[c] || null : null
            }

            function nj(a) {
                try {
                    var c = a.document.cookie;
                    if (!na(c)) {
                        var b = {};
                        z(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[nb(d[0])] = nb(qj(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function Xh(a, c, b) {
                return !ig.length || H(b, jg) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, ig)
            }

            function Ib(a) {
                var c = G(a),
                    b = c.o("hitId");
                b || (b = Ua(a), c.C("hitId", b));
                return b
            }

            function aj(a) {
                var c = a.match(rj);
                if (c) {
                    a = c[1];
                    if (c =
                        c[2]) return H(c, kg) ? c : !1;
                    if (a) return kg[0]
                }
                return !1
            }

            function R(a) {
                return N(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, hq)
            }

            function Sf(a, c, b) {
                var d = Ia(c);
                return d && Oi(a, c, Y(Boolean, ["p", iq[d], "c"]), Rf, b)
            }

            function Qf(a, c) {
                var b = ac(lg, a, c);
                if (!b) {
                    var d = ac("div", a, c);
                    d && (ub(lg + ",div", d).length || (b = d))
                }
                return b
            }

            function Oi(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in sj ? h = c.getAttribute && c.getAttribute(sj[g]) : g in Oc && (h = "p" === g ? Oc[g](a, c, e) : "c" === g ? Oc[g](a, c, d) : Oc[g](a, c));
                    h && (h = h.slice(0, tj[g] || 100), f[g] = mg[g] ? "" + nc(h) : h);
                    return f
                }, {}, b)
            }

            function Ph(a, c, b) {
                if (Ed(a)) return sa(b.querySelectorAll(c));
                var d = uj(c.split(" "), b);
                return Y(function(e, f) {
                    return Mb(a)(e, d) === f
                }, d)
            }

            function uj(a, c) {
                var b = wa(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? lc(v(b, uj), sa(d)) : sa(d)
            }

            function pc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = ub(a, c);
                return b && b.length ? b[0] : null
            }

            function ub(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? sa(b) : []
            }

            function Ri(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function kc(a, c) {
                var b = a.document,
                    d = y({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = $a(a);
                if (e) {
                    var f = e("script");
                    gj(ya, fb(function(l) {
                        var m =
                            l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = cc("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function jq(a, c, b) {
                var d = vj(c);
                H(b, d.wb) || d.wb.push(b);
                if (Ta(d.lb)) {
                    b = $a(a);
                    if (!b) return null;
                    b = b("iframe");
                    y(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Wb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.lb = b
                } else(a = n(d.lb, "contentWindow")) && a.postMessage("frameReinit",
                    "*");
                return d.lb
            }

            function kq(a, c) {
                var b = ea(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = L(", ", A(function(e) {
                        return "." + e
                    }, b));
                    return sa(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return lc(u(pa("getElementsByClassName", c), sa), b);
                d = c.getElementsByTagName("*");
                b = "(" + L("|", b) + ")";
                return Y(v(b, sc), sa(d))
            }

            function ng(a, c, b) {
                for (var d = "", e = Pf(), f = Ia(c) || "*"; c && c.parentNode && !H(f, ["BODY", "HTML"]);) d += e[f] || "*", d += wj(a, c, b) || "", c = c.parentElement, f = Ia(c) || "*";
                return nb(d, 128)
            }

            function wj(a,
                c, b) {
                if (a = ze(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function ze(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === wc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function yf(a, c) {
                var b = og(a, c),
                    d = b.left;
                b = b.top;
                var e = Ae(a, c);
                return [d, b, e[0], e[1]]
            }

            function Ae(a, c) {
                var b = n(a, "document");
                if (c === wc(a) || c === b.documentElement) {
                    b = Wb(a);
                    var d = Pc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Gc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function og(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ia(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === wc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Gc(b)) return b = Uf(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function nb(a, c) {
                if (a) {
                    var b = xj ? xj.call(a) : ("" + a).replace(ij,
                        "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function ac(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Ea("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Vh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Ed(c)) {
                    for (a = sa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Mb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Ed(a) {
                return !(!Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function yj(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.md;
                b = b.Oa;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function zj(a) {
                return Be(a) && !La(la(a.type), lq) ? Ce(a) ? !a.checked : !a.value : mq(a) ? !a.value : nq(a) ? 0 > a.selectedIndex : !0
            }

            function Ia(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (za(c)) return c;
                    c = a.tagName;
                    if (za(c)) return c
                } catch (b) {}
            }

            function Aj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Mb(a)(c, sa(b))
            }

            function oq(a, c, b) {
                b = cc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Ea("(Event|Object|constructor)", e) || pg(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = cc("createEvent", n(a, "document"))) && S(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Gc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" ===
                        typeof c && null !== c && 16389 === (c.Xf && c.Xf & 65535) ? {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            right: 0
                        } : null
                }
            }

            function Uf(a) {
                var c = wc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Pc(a) {
                var c = De(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Wb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function De(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return na(c) || na(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Wb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : wc(a) || b
            }

            function wc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function sc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function xc(a) {
                var c;
                try {
                    if (c =
                        a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function mc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Qb(a) {
                return a ? a.innerText || "" : ""
            }

            function Cf(a) {
                if (na(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function lf(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Yd: pq(a),
                    o: function(e, f) {
                        var g = Bj(a, "" + d + e);
                        return Ta(g) && !V(f) ? f : g
                    },
                    C: function(e, f) {
                        Cj(a, "" + d + e, f);
                        return this
                    },
                    Pb: function(e) {
                        Dj(a,
                            "" + d + e);
                        return this
                    }
                }
            }

            function Cj(a, c, b) {
                var d = qg(a);
                a = kb(a, b);
                if (!Ta(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Bj(a, c) {
                var b = qg(a);
                try {
                    return rb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Dj(a, c) {
                var b = qg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function qg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function kb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function Vd(a, c, b) {
                void 0 === b && (b = null);
                a.Ka || (a.Ka = rg());
                c && a.Ka.cc(c, b);
                return a.Ka
            }

            function Ee(a) {
                return {
                    aa: function(c,
                        b) {
                        var d = a.document,
                            e = c.H;
                        if (e && sg(a)) {
                            var f = ja(a),
                                g = function(h) {
                                    sg(a) || (f.fc(d, Ej, g), b());
                                    return h
                                };
                            f.D(d, Ej, g);
                            e.C("pr", "1")
                        } else b()
                    }
                }
            }

            function tg(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = Na(Jf(c, a, f), d);
                        return ke(c, b, g)(e)
                    }
                }
            }

            function ke(a, c, b) {
                var d = Bb(a, c);
                return function(e) {
                    return Fj(b, e, !0).then(function() {
                        var f = e.ra || {},
                            g = f.Ai,
                            h = void 0 === g ? "" : g;
                        g = f.Ja;
                        var k = void 0 === g ? "" : g;
                        f = f.Bi;
                        f = A(function(l) {
                            return ra.Wa + "//" + ("" + h + l || Zb) + "/" + k
                        }, void 0 === f ? [Zb] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g =
                            f.cd;
                        f = f.Kg;
                        e.sj = g;
                        e.Lk = f;
                        return Fj(b, e).then(v(g, O))
                    })
                }
            }

            function Bb(a, c) {
                return function(b, d) {
                    return Gj(a, c, d, b)
                }
            }

            function Gj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({
                        Da: []
                    }, d.Y),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.zb && h.zb["Content-Type"] || !h.fa || (h.zb = y({}, h.zb, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.fa = "site-info=" + be(h.fa));
                h.Xe = h.fa ? "POST" : "GET";
                h.Zb = qq(a, d, l);
                h.Da.push(l);
                y(d.Y, h);
                g = "" + m + (d.Ra && d.Ra.Xi ? "/1" : "");
                var p = 0;
                p = rq(a, g, h);
                return k(g, h).then(function(q) {
                    gb(a, {
                        name: "requestSuccess",
                        data: {
                            body: q,
                            requestId: p
                        }
                    });
                    return {
                        cd: q,
                        Kg: e
                    }
                })["catch"](function(q) {
                    gb(a, {
                        name: "requestFail",
                        data: {
                            error: q,
                            requestId: p
                        }
                    });
                    var r = f + 1 >= c.length,
                        t = e + 1 >= b.length;
                    r && t && Wa(q);
                    return Gj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function qq(a, c, b) {
                var d = y({}, c.G);
                a = ha(a);
                c.H && (d["browser-info"] = Ca(c.H.l()).C("st", a(gg)).Aa());
                !d.t && (c = c.Ka) && (c.C("ti", b), d.t = c.Aa());
                return d
            }

            function rq(a, c, b) {
                var d = Ua(a);
                gb(a, {
                    name: "request",
                    data: {
                        url: c,
                        requestId: d,
                        Nk: b
                    }
                });
                return d
            }

            function wd(a) {
                return a ?
                    u(ya, vd(function(c, b) {
                        var d = b[0],
                            e = b[1];
                        V(e) || na(e) || c.push(d + "=" + be(e));
                        return c
                    }, []), od("&"))(a) : ""
            }

            function sq(a) {
                return a ? u(fb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], na(b) ? void 0 : qj(b)]
                }), vd(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function qj(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function be(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = L("", Y(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function Jf(a,
                c, b) {
                return A(u(Lc, Nc([a, b]), ia), Hj[c] || [])
            }

            function Ij(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !na(d) && Jj(a[c], b, d)
            }

            function Jj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function dc(a) {
                z(function(c) {
                    var b = c[1];
                    Ze[c[0]] = {
                        ia: b.ia,
                        $a: b.$a
                    }
                }, ya(a))
            }

            function Fj(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        aa: f,
                        Ca: f
                    });
                    var h = ic(g, function(k, l) {
                        var m = b ? k.aa :
                            k.Ca;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(tq), e(p)
                        } else l()
                    });
                    h(Kj)
                })
            }

            function Hb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ja(a);
                    var e = "__ym__promise_" + Ua(a) + "_" + Ua(a),
                        f = B;
                    d = C(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.D(a, ["message"], d);
                    a.postMessage(e, "*")
                } else U(a, c, 0, d)
            }

            function oh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = ic(c, b);
                jc(a, c, d)(Ra(C(a, e), B))
            }

            function jc(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Lj);
                ug = Infinity === b;
                return xa(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(uq);
                        if (c(Fd)) return f(h), Mj(a);
                        ug ? (c(d(a, 1E4)), f(h), Mj(a)) : U(a, g, 100)
                    }
                    var h = [];
                    vq(g)
                })
            }

            function Mj(a) {
                if (vg.length) {
                    var c = vg.shift();
                    ug ? c() : U(a, c, 100)
                } else wg = !1
            }

            function vq(a) {
                wg ? vg.push(a) : (wg = !0, a())
            }

            function rf(a) {
                return xa(function(c, b) {
                    b(a)
                })
            }

            function zo(a) {
                return xa(function(c, b) {
                    a.then(b, c)
                })
            }

            function wq(a) {
                var c = [],
                    b = 0;
                return xa(function(d, e) {
                    z(function(f, g) {
                        f(Ra(d, function(h) {
                            try {
                                c[g] =
                                    h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function yo(a) {
                var c = [],
                    b = !1;
                return xa(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    z(function(g) {
                        g(Ra(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ra(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function ic(a, c) {
                void 0 === c && (c = O);
                return xa({
                    Za: a,
                    ae: c,
                    Me: !1,
                    xa: 0
                })
            }

            function Kj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.xa += 1
                    }
                    b = !1;
                    a.ae(a.Za[a.xa], function() {
                        d()
                    });
                    b || (a.xa += 1, d = v(a, Kj))
                }
                for (var b = !0; !Fd(a) && b;) c()
            }

            function Lj(a, c) {
                return function(b) {
                    var d =
                        ha(a),
                        e = d(aa);
                    return Nj(function(f, g) {
                        d(aa) - e >= c && g(Oj)
                    })(b)
                }
            }

            function Fe(a, c) {
                return function(b) {
                    var d = ha(a),
                        e = d(aa);
                    return Ge(function(f) {
                        d(aa) - e >= c && Oj(f)
                    })(b)
                }
            }

            function Ge(a) {
                return function(c) {
                    for (var b; c.Za.length && !Fd(c);) b = c.Za.pop(), b = c.ae(b, c.Za), a(c);
                    return b
                }
            }

            function xq(a) {
                Fd(a) && Wa(hc("i"));
                var c = a.ae(a.Za[a.xa]);
                a.xa += 1;
                return c
            }

            function uq(a) {
                a.Me = !1
            }

            function Oj(a) {
                a.Me = !0
            }

            function tq(a) {
                a.xa = a.Za.length
            }

            function Fd(a) {
                return a.Me || a.Za.length <= a.xa
            }

            function sb(a) {
                a = ha(a);
                return Math.round(a(xg) /
                    50)
            }

            function xg(a) {
                var c = a.za,
                    b = c[1];
                a = c[0] && b ? b() : aa(a) - a.Ci;
                return Math.round(a)
            }

            function gg(a) {
                return Math.round(aa(a) / 1E3)
            }

            function jb(a) {
                return Math.floor(aa(a) / 1E3 / 60)
            }

            function aa(a) {
                var c = a.Ue;
                return 0 !== c ? c : yg(a.l, a.za)
            }

            function bg(a) {
                var c = ja(a),
                    b = Pj(a),
                    d = {
                        l: a,
                        Ue: 0,
                        za: b,
                        Ci: yg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                    0 === d.Ue && (d.Ue = yg(a, d.za))
                });
                return xa(d)
            }

            function yq(a) {
                return (10 > a ? "0" : "") + a
            }

            function xi(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = U(a, d, b), e.O(h))
                }
                var e =
                    ud(a),
                    f, g = !1,
                    h;
                c.D(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return B
                });
                return e
            }

            function zq(a, c) {
                return a.clearInterval(c)
            }

            function Aq(a, c, b, d) {
                return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
            }

            function U(a, c, b, d) {
                return we(a, C(a, "d.err." + (d || "def"), c), b)
            }

            function fd(a) {
                var c = {};
                return {
                    D: function(b, d) {
                        z(function(e) {
                            n(c, e) || (c[e] = ud(a));
                            c[e].D(d)
                        }, b);
                        return this
                    },
                    na: function(b, d) {
                        z(function(e) {
                            n(c, e) && c[e].na(d)
                        }, b);
                        return this
                    },
                    O: function(b, d) {
                        return n(c, b) ? C(a, "e." + d, c[b].O)(d) : []
                    }
                }
            }

            function ud(a) {
                var c = [],
                    b = {};
                b.Dk = c;
                b.D = u(pa("push", c), v(b, O));
                b.na = u(Gb(Mb(a))(c), Gb(pa("splice", c))(1), v(b, O));
                b.O = u(O, Gb(ia), Bq(c));
                return b
            }

            function Qj(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function D(a, c, b) {
                return function() {
                    return C(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function C(a, c, b, d, e) {
                var f = Wa,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h =
                            g.apply(e || null, arguments)
                    } catch (k) {
                        le(a, c, k)
                    }
                    return h
                }
            }

            function yg(a, c) {
                var b = c || Pj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Pj(a) {
                a = Lf(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = E(b, a));
                return [c, b]
            }

            function Lf(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function le(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") ||
                    "n.s.e.s") : d = "" + b);
                Cq(d) || La(u(pa("indexOf", d), la(-1), Rb), Dq) || Eq(d) && .1 <= a.Math.random() || z(u(O, Nc(["jserrs", d, c, e]), ia), Rj)
            }

            function Ye() {
                var a = Ba(arguments);
                return Wa(Sa(a))
            }

            function Sa(a) {
                var c = "";
                ea(a) ? c = L(".", a) : za(a) && (c = a);
                return hc("err.kn(" + ra.gb + ")" + c)
            }

            function Fq(a) {
                this.message = a
            }

            function gb(a, c) {
                var b = c.da;
                if (b) {
                    var d = b.split(":");
                    b = d[1];
                    d = Sj(Ch(d[0]));
                    if ("1" === b || d) return
                }
                b = Gq(a);
                1E3 === b.length && b.shift();
                b.push(c)
            }

            function zl(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    ca: d,
                    sc: e,
                    ea: b
                };
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.$a;
                    k = f[k.ia];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, ya(c));
                Wi(a, a.ea || {});
                return a
            }

            function Hq(a, c) {
                return N(function(b, d) {
                    b[c[d[0]].ia] = d[1];
                    return b
                }, {}, ya(a))
            }

            function Tj(a) {
                a = M(a);
                return ec[a] && ec[a].Lj
            }

            function Wi(a, c) {
                var b = M(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                ec[b] || (ec[b] = {});
                if (d || e) ec[b].Lj = d, ec[b].Mj = e
            }

            function Uj(a) {
                return He(a) || md(a) || /mobile/i.test(lb(a)) || !V(n(a, "orientation"))
            }

            function hf(a, c) {
                if (Gd(a) && c) {
                    var b = lb(a).match(zg);
                    if (b &&
                        b.length) return +b[1] >= c
                }
                return !1
            }

            function jf(a, c) {
                var b = lb(a);
                return b && (b = b.match(Iq)) && 1 < b.length ? Ga(b[1]) >= c : !1
            }

            function sg(a) {
                return H("prerender", A(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Ua(a, c, b) {
                var d = V(b);
                V(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Jq() {
                var a = Ba(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) xd(b, d) && (c[d] = b[d]);
                    xd(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Vj(a) {
                return V(a) ? [] : Hd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Wj(a))
            }

            function Wj(a) {
                var c = [],
                    b;
                for (b in a) xd(a, b) && c.push(b);
                return c
            }

            function Ch(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function ne(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Ag(c)
            }

            function Kq(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Na(a, c) {
                z(u(O, pa("push", a)), c);
                return a
            }

            function Bg(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Bd(a) {
                return a.splice(0,
                    a.length)
            }

            function sa(a) {
                return a ? ea(a) ? a : Ie ? Ie(a) : "number" === typeof a.length && 0 <= a.length ? Xj(a) : [] : []
            }

            function Cg(a, c, b) {
                return b ? a : c
            }

            function Lq(a, c) {
                return Hd(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ea(d) ? d : [d])
                }, [], c)
            }

            function Yj(a, c) {
                return Hd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Mq(a, c) {
                if (!Gd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function ea(a) {
                if (Id) return Id(a);
                (Id = Ka(Array.isArray, "isArray")) || (Id = Nq);
                return Id(a)
            }

            function Oq(a, c) {
                return 1 <= Zj(la(a), c).length
            }

            function Pq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function Zj(a, c) {
                return Hd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Wf(a, c, b) {
                try {
                    if (S(c)) {
                        var d = Ba(arguments).slice(3);
                        na(b) ? c.apply(void 0, d) : E.apply(void 0, wa([c, b], d))()
                    }
                } catch (e) {
                    we(a, v(e, Wa), 0)
                }
            }

            function Wa(a) {
                throw a;
            }

            function we(a, c, b) {
                return cc("setTimeout", a)(c, b)
            }

            function ma(a, c) {
                return cc("clearTimeout", a)(c)
            }

            function td() {
                return []
            }

            function yc() {
                return {}
            }

            function cc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function vb(a, c, b) {
                return function() {
                    var d = Ba(arguments),
                        e = d[0];
                    d = d.slice(1);
                    var f = G(e),
                        g = b ? "global" : "m1011",
                        h = f.o(g, {}),
                        k = n(h, a);
                    k || (k = w(c), h[a] = k, f.C(g, h));
                    return k.apply(void 0, wa([e], d))
                }
            }

            function Ec(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                N(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (na(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Jd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ta: function(b, d) {
                        Dg.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return Dg.call(c, b) || V(d) ? e : d
                    }
                }
            }

            function xd(a, c) {
                return na(a) ? !1 : Dg.call(a, c)
            }

            function w(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : O;
                return function() {
                    var f = Ba(arguments),
                        g = e.apply(void 0,
                            f),
                        h = ak(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Mb(a) {
                if (Eg) return Eg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && Ka(a.Array.prototype.indexOf, "indexOf");
                return Eg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : Qq
            }

            function Qq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ia(a, c) {
                return c ? a(c) : a()
            }

            function u() {
                var a = Ba(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0,
                        arguments);
                    return N(bk, b, a)
                }
            }

            function vd(a, c) {
                return F([a, c], N)
            }

            function Hd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function Xa(a) {
                return pa("test", a)
            }

            function pa(a, c) {
                return E(c[a], c)
            }

            function v(a, c) {
                return E(c, null, a)
            }

            function F(a, c) {
                return E.apply(void 0, wa([c, null], a))
            }

            function Rq() {
                var a = Ba(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = wa(d, Ba(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, wa([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f +=
                            "_" + f.length;
                        b[f] = c;
                        e = b[f] && ck(f, e, b);
                        delete b[f];
                        return e
                    }
                    return ck(c, e)
                }
            }

            function ck(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                S(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Ba(a) {
                if (Ie) try {
                    return Ie(a)
                } catch (c) {}
                return Xj(a)
            }

            function Xj(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Ma(a) {
                return !Ta(a) && !V(a) && "[object Object]" === Ag(a)
            }

            function na(a) {
                return V(a) ||
                    Ta(a)
            }

            function S(a) {
                return "function" === typeof a
            }

            function Gb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function ka(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function bk(a, c) {
                return c(a)
            }

            function Sq(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function yp(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Zf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g,
                    "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Tq(a) {
                return "" + a
            }

            function oc(a, c) {
                return !(!a || -1 === ee(a, c))
            }

            function ee(a, c) {
                if (dk) var b = dk.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function za(a) {
                return "string" === typeof a
            }

            function Ag(a) {
                return Object.prototype.toString.call(a)
            }

            function Fg(a, c) {
                Fg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                    function(b, d) {
                        b.__proto__ = d
                    } || function(b, d) {
                        for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                    };
                return Fg(a, c)
            }

            function Ka(a, c) {
                return Ea(c, a) && a
            }

            function Ea(a, c) {
                var b = Je(a, c);
                c && !b && Gg.push([a, c]);
                return b
            }

            function Je(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function B() {}

            function Rb(a) {
                return !a
            }

            function wb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function Ja(a, c) {
                function b() {
                    this.constructor = a
                }
                Fg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function wa() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function Uq() {}

            function Vq(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Fa(a) {
                if (!(this instanceof Fa)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.La = 0;
                this.Ze = !1;
                this.Va = void 0;
                this.Jb = [];
                ek(a, this)
            }

            function fk(a, c) {
                for (; 3 === a.La;) a = a.Va;
                0 === a.La ? a.Jb.push(c) : (a.Ze = !0, Fa.$e(function() {
                    var b = 1 === a.La ? c.bj : c.fj;
                    if (null === b)(1 === a.La ? Hg : Kd)(c.cb, a.Va);
                    else {
                        try {
                            var d = b(a.Va)
                        } catch (e) {
                            Kd(c.cb, e);
                            return
                        }
                        Hg(c.cb, d)
                    }
                }))
            }

            function Hg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof Fa) {
                            a.La = 3;
                            a.Va = c;
                            Ig(a);
                            return
                        }
                        if ("function" === typeof b) {
                            ek(Vq(b, c), a);
                            return
                        }
                    }
                    a.La = 1;
                    a.Va = c;
                    Ig(a)
                } catch (d) {
                    Kd(a, d)
                }
            }

            function Kd(a, c) {
                a.La = 2;
                a.Va = c;
                Ig(a)
            }

            function Ig(a) {
                2 === a.La && 0 === a.Jb.length && Fa.$e(function() {
                    a.Ze || Fa.bh(a.Va)
                });
                for (var c = 0, b = a.Jb.length; c < b; c++) fk(a, a.Jb[c]);
                a.Jb = null
            }

            function Wq(a, c, b) {
                this.bj = "function" === typeof a ? a : null;
                this.fj = "function" === typeof c ? c : null;
                this.cb = b
            }

            function ek(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Hg(c, d))
                    }, function(d) {
                        b || (b = !0, Kd(c, d))
                    })
                } catch (d) {
                    b ||
                        (b = !0, Kd(c, d))
                }
            }

            function Zm(a) {
                for (var c = a.length, b = 0, d = 255, e = 255, f, g, h; c;) {
                    f = 21 < c ? 21 : c;
                    c -= f;
                    do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
                    d = (d & 255) + (d >> 8);
                    e = (e & 255) + (e >> 8)
                }
                a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
                return 65535 === a ? 0 : a
            }

            function rb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function nc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>>
                    0
            }

            function oj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return hg(a, c, "", -100, b, d, e)
            }

            function Bc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Xq(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Pb: function(g, h, k) {
                        oj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    o: function(g) {
                        return ge(a, "" + c + g + f)
                    },
                    C: function(g, h, k, l, m) {
                        hg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Al(a, c, b, d) {
                var e = gk[b];
                return e ? function() {
                    var f = Ba(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = G(a);
                        h.Ta("mt", {});
                        var k = h.o("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Wa(m)
                    }
                    return g
                } : d
            }

            function Fc(a, c) {
                var b = Yq(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function hk(a) {
                return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Zq(a, c) {
                var b = hk(a);
                ik = Aq(a, function() {
                    var d = hk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return E(zq, null, a, ik)
            }

            function $q(a, c, b) {
                var d, e,
                    f = c.ca,
                    g = c.We,
                    h = c.Dc,
                    k = G(a),
                    l = Ca((d = {}, d.wh = 1, d.pv = 1, d));
                $e(f) && a.Ya && a.Ya.Direct && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = R(a).href;
                h = {
                    G: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    H: l
                };
                b(h, c)["catch"](C(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function ar(a, c, b) {
                function d() {
                    ma(a, h);
                    g(!1)
                }

                function e() {
                    k = !0;
                    g(!1);
                    c()
                }

                function f() {
                    ma(a, h);
                    if (k) g(!1);
                    else {
                        var Z = Math.max(0, b - (q ? r : r + l(aa) - t));
                        Z ? h = U(a, e, Z, "u.t.d.c") : e()
                    }
                }

                function g(Z) {
                    z(function(W) {
                        var oa = W[0],
                            ta = W[1];
                        W = W[2];
                        Z ? x.D(oa, ta, W) : x.fc(oa,
                            ta, W)
                    }, I)
                }
                var h = 0,
                    k = !1;
                if (pg(a)) return h = U(a, c, b, "u.t.d"), d;
                var l = ha(a),
                    m = !1,
                    p = !1,
                    q = !0,
                    r = 0,
                    t = l(aa),
                    x = ja(a),
                    I = [
                        [a, ["blur"], function() {
                            q = m = p = !0;
                            r += l(aa) - t;
                            t = l(aa);
                            f()
                        }],
                        [a, ["focus"], function() {
                            m || p || (r = 0);
                            t = l(aa);
                            m = p = !0;
                            q = !1;
                            f()
                        }],
                        [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                            p || (m = !0, q = !1, p = !0, f())
                        }]
                    ];
                g(!0);
                f();
                return d
            }

            function Xe(a, c, b, d) {
                return function() {
                    if (Ha(a, c)) {
                        var e = Ba(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function ob(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function fc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535,
                    c[1] >>> 16, c[1] & 65535
                ];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Qc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function hb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ua(a, c) {
                return [a[0] ^
                    c[0], a[1] ^ c[1]
                ]
            }

            function jk(a) {
                a = ua(a, [0, a[0] >>> 1]);
                a = ob(a, [4283543511, 3981806797]);
                a = ua(a, [0, a[0] >>> 1]);
                a = ob(a, [3301882366, 444984403]);
                return a = ua(a, [0, a[0] >>> 1])
            }

            function br(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    R: [0, d],
                    T: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) <<
                            24
                        ],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = ob(h, Ke);
                    h = Qc(h, 31);
                    h = ob(h, Le);
                    g.R = ua(g.R, h);
                    g.R = Qc(g.R, 27);
                    g.R = fc(g.R, g.T);
                    g.R = fc(ob(g.R, [0, 5]), [0, 1390208809]);
                    k = ob(k, Le);
                    k = Qc(k, 33);
                    k = ob(k, Ke);
                    g.T = ua(g.T, k);
                    g.T = Qc(g.T, 31);
                    g.T = fc(g.T, g.R);
                    g.T = fc(ob(g.T, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h =
                            ua(h, hb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ua(h, hb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ua(h, hb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ua(h, hb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ua(h, hb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ua(h, hb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ua(h, [0, b.charCodeAt(f + 8)]), h = ob(h, Le), h = Qc(h, 33), h = ob(h, Ke), d.T = ua(d.T, h);
                    case 8:
                        g = ua(g, hb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ua(g, hb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ua(g, hb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ua(g, hb([0, b.charCodeAt(f +
                            4)], 32));
                    case 4:
                        g = ua(g, hb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ua(g, hb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ua(g, hb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ua(g, [0, b.charCodeAt(f)]), g = ob(g, Ke), g = Qc(g, 31), g = ob(g, Le), d.R = ua(d.R, g)
                }
                d.R = ua(d.R, [0, b.length]);
                d.T = ua(d.T, [0, b.length]);
                d.R = fc(d.R, d.T);
                d.T = fc(d.T, d.R);
                d.R = jk(d.R);
                d.T = jk(d.T);
                d.R = fc(d.R, d.T);
                d.T = fc(d.T, d.R);
                return ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
            }

            function Ld(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = ub('[itemprop~="' + b + '"]', c);
                return d ? Y(function(e) {
                    return e.parentNode && ac("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function ab(a, c, b) {
                return (a = Ld(a, c, b)) && a.length ? a[0] : null
            }

            function Ya(a) {
                if (!a) return "";
                a = ea(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Qb(a[0]) : ""
            }

            function kk(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ya(a) : ""
            }

            function jd(a, c, b) {
                a = c &&
                    (oc(c.className, "ym-disable-keys") || oc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!kq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function uf(a, c) {
                return Be(c) ? "password" === c.type || c.name && H(c.name.toLowerCase(), lk) || c.id && H(c.id.toLowerCase(), lk) : !1
            }

            function mk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Na(a, [b >> 8, b & 255])
            }

            function Jb(a, c) {
                Na(a, [c & 255])
            }

            function eb(a, c, b) {
                return -1 !== Mb(a)(b, cr) ? (Jb(c, b), !1) : !0
            }

            function Q(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Na(a, [b & 127 | 128]), b >>= 7;
                Na(a, [b])
            }

            function Jg(a, c) {
                Q(a, c.length);
                for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b))
            }

            function Kg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) mk(a, b.charCodeAt(d))
            }

            function dr(a, c) {
                var b = [];
                if (eb(a, b, 27)) return [];
                Q(b, c);
                return b
            }

            function er(a, c) {
                var b = Ia(c);
                if (!b) return c[Va] = -1, null;
                var d = +c[Va];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.hk) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = ze(a, c),
                    g = f && f[Va] ? f[Va] : 0;
                0 > g &&
                    (g = 0);
                b = (b || "").toUpperCase();
                var h = fr()[b];
                h || (e |= 2);
                var k = wj(a, c);
                k || (e |= 4);
                var l = yf(a, c);
                (f = f ? yf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                rc[d].Zf = l[0] + "x" + l[1];
                rc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (eb(a, f, 1)) return null;
                Q(f, d);
                Jb(f, e);
                Q(f, g);
                h ? Jb(f, h) : Kg(f, b);
                k && Q(f, k);
                e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
                e & 32 && Kg(f, c.id);
                Jb(f, 0);
                return f
            }

            function gr(a, c) {
                var b = c[Va];
                if (!b || 0 > b || !wf(c) || !c.form || Uh(a, c.form)) return [];
                var d =
                    Aj(a, c.form);
                if (0 > d) return [];
                if (Be(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        xc: 0,
                        pk: 0,
                        "datetime-local": 0,
                        email: 0,
                        Xf: 0,
                        Kk: 0,
                        search: 0,
                        Qk: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Tk: 0,
                        password: 2,
                        Jk: 3,
                        lk: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        ek: 1,
                        fk: 5
                    };
                    var f = Ia(c);
                    e = V(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (eb(a, g, 7)) return [];
                Q(g, b);
                Q(g, d);
                Q(g, e);
                Jg(g, c.name || "");
                Q(g, f);
                return g
            }

            function hr(a, c, b) {
                var d =
                    Aj(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!zj(e[g])) {
                        var h = e[g][Va];
                        h && 0 < h && b.push(h)
                    }
                e = [];
                if (eb(a, e, 11)) return [];
                Q(e, c);
                Q(e, d);
                Q(e, b.length);
                for (a = 0; a < b.length; a += 1) Q(e, b[a]);
                return e
            }

            function qc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !en(a, c, b); c = ze(a, c)) d.push(c);
                z(function(e) {
                    rc.yd += 1;
                    var f = rc.yd;
                    e[Va] = f;
                    rc[f] = {};
                    f = er(a, e);
                    e = gr(a, e);
                    f && e && (Na(b, f), Na(b, e))
                }, ir(d));
                return b
            }

            function jr(a) {
                var c = a.sa;
                if (!id || c && !c.fromElement) return Sh(a)
            }

            function kr(a) {
                var c =
                    a.sa;
                if (c && !c.toElement) return xf(a)
            }

            function nk(a) {
                var c = xc(a.sa);
                if (c && fe(c)) {
                    var b = Rh(a, c);
                    var d = sb(a.l),
                        e = [];
                    eb(a.l, e, 17) ? a = [] : (Q(e, d), Q(e, c[Va]), a = e);
                    return wa(b, a)
                }
            }

            function ok(a) {
                var c = a.l,
                    b = a.sa.target;
                if (b && fe(b)) {
                    c = qc(c, b);
                    var d = sb(a.l),
                        e = [];
                    eb(a.l, e, 18) ? a = [] : (Q(e, d), Q(e, b[Va]), a = e);
                    return wa(c, a)
                }
            }

            function pk(a) {
                var c = a.l,
                    b = xc(a.sa);
                if (!b || uf(c, b) || jd(c, b)) return [];
                if (wf(b)) {
                    var d = G(c).o("isEU"),
                        e = hd(c, b, d),
                        f = e.vb;
                    d = e.Zd;
                    e = e.Id;
                    if (Ce(b)) var g = b.checked;
                    else g = b.value, g = f ? L("", qk(g.split(""))) :
                        g;
                    c = qc(c, b);
                    f = sb(a.l);
                    d = d && !e;
                    e = [];
                    eb(a.l, e, 39) ? a = [] : (Q(e, f), Q(e, b[Va]), Kg(e, String(g)), Jb(e, d ? 1 : 0), a = e);
                    return wa(c, a)
                }
            }

            function Me(a) {
                var c = a.l,
                    b = a.sa,
                    d = xc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = v(e, Na);
                d && fe(d) ? f(Rh(a, d)) : f(qc(c, d));
                var g = Pi(c, b);
                a = sb(a.l);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = Ae(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = ze(c, d)) l = Ae(c, d), m = l[0], l = l[1];
                d ? (m = d[Va], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup =
                    30, k.touch = 12, k)[f]) ? (k = [], d = og(c, d), eb(c, k, l) ? c = [] : (Q(k, a), Q(k, m), Q(k, Math.max(0, h[0] - d.left)), Q(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Jb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return wa(e, c)
            }

            function lr(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ta(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !==
                    typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = hd(b, c).vb || jd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = hd(b, d).vb || jd(b, d, !0), f += 1;
                if (e !== Lg) return Lg = e, d = d ? L("", qk(e.split(""))) : e, e = sb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], eb(a.l, c, 29) ? a = [] : (Q(c, e), Jg(c, b), Jg(c, d), a = c), a
            }

            function mr(a) {
                return wa(Me(a), lr(a) || [])
            }

            function rk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function sk(a) {
                var c = [];
                Mg || (Mg = !0, Lg && c.push.apply(c, dr(a.l, sb(a.l))), Hb(a.l, function() {
                    Mg = !1
                }, "fv.c"));
                return c
            }

            function tk(a, c, b, d) {
                var e = xc(c);
                if (!e || Af(a, e)) return [];
                var f = de(e),
                    g = zf(e);
                c = hd(a, e).vb;
                var h = G(a);
                if (!f && (g && h.o("isEU") || jd(a, e))) a = [];
                else {
                    f = qc(a, e);
                    h = sb(a);
                    g = [];
                    if (eb(a, g, 38)) a = [];
                    else {
                        Q(g, h);
                        mk(g, b);
                        Jb(g, d);
                        a = e[Va];
                        if (!a || 0 > a) a = 0;
                        Q(g, a);
                        Jb(g, c ? 1 : 0);
                        a = g
                    }
                    a = wa(f, a)
                }
                return a
            }

            function nr(a) {
                var c = a.l,
                    b = a.sa,
                    d = b.keyCode,
                    e = rk(b),
                    f = [],
                    g = v(f, Na);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(tk(c, b, d, e | 16)), Ng = !1, Hb(c, function() {
                    Ng = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(sk(a));
                return f
            }

            function or(a) {
                var c = a.l;
                a = a.sa;
                var b = [];
                Ng && !Og && 0 !== a.which && (b.push.apply(b, tk(c, a, a.charCode || a.keyCode, rk(a))), Og = !0, Hb(c, function() {
                    Og = !1
                }, "fv.kp"));
                return b
            }

            function uk(a) {
                var c = a.l,
                    b = xc(a.sa);
                if (!b || Uh(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) zj(e[f]) || d.push.apply(d, qc(c, e[f]));
                    d.push.apply(d, hr(c, sb(a.l), b))
                }
                return d
            }

            function pr(a) {
                var c = a.flush;
                a = xc(a.sa);
                "BODY" === Ia(a) && c()
            }

            function wm(a, c) {
                var b, d = xc(c),
                    e = ra.qc,
                    f = Jd(a);
                if (d && sc("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ga(d.getAttribute("data-cid") ||
                        "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function nh(a, c, b, d) {
                return function() {
                    var e = Ba(arguments);
                    e = d.apply(void 0, e);
                    return V(e) ? Ha(a, c) : e
                }
            }

            function mh(a, c, b, d) {
                return C(a, "cm." + b, d)
            }

            function yl(a, c, b, d, e) {
                return b.length && e ? F(N(function(f, g, h) {
                    return b[h] ? f.concat(F([a, c, d], g)) : f
                }, [], b), u)()(e) : e
            }
            var Rc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "ihb4q796484i93absudza7",
                    host: "mc.yandex.ru"
                },
                Gg = [],
                Zf = /\./g,
                dk = Ka(String.prototype.indexOf, "indexOf"),
                vk = Ka(Array.prototype.join, "join"),
                L = vk ? function(a, c) {
                    return vk.call(c, a)
                } : Sq,
                la = ka(function(a, c) {
                    return a === c
                }),
                dd = ka(function(a, c) {
                    a(c);
                    return c
                }),
                od = ka(L),
                xa = ka(bk),
                Ta = la(null),
                V = la(void 0),
                Ie = Ka(Array.from, "from"),
                wk = Ka(Function.prototype.bind, "bind"),
                E = wk ? function() {
                    var a = Ba(arguments);
                    return wk.apply(a[0], wa([a[1]], a.slice(2)))
                } : Rq,
                Nc = ka(F),
                wi = ka(pa),
                xk = Ka(Array.prototype.reduce, "reduce"),
                N = xk ? function(a, c, b) {
                    return xk.call(b,
                        a, c)
                } : Hd,
                gj = u,
                Li = u(O, ia),
                Eg, ak = Mb(window),
                qr = Gb(ak),
                Dg = Object.prototype.hasOwnProperty,
                G = w(Jd),
                T = Gb(n),
                Oa = T("length"),
                Ef = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return N(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                yk = Ka(Array.prototype.filter, "filter"),
                Y = yk ? function(a, c) {
                    return yk.call(c, a)
                } : Zj,
                Hc = ka(Y),
                db = Ea("find", Array.prototype.find) ? function(a, c) {
                    return Array.prototype.find.call(c, a)
                } : Pq,
                H = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c,
                        a)
                } : Oq,
                uc = Gb(H),
                zk = w(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        Lf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        Lg: c
                    }
                }),
                lb = w(T("navigator.userAgent")),
                zg = /Firefox\/([0-9]+)/i,
                Gd = w(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(zg);
                    zg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || na(b)) || a
                }),
                Id, Nq = u(Ag, la("[object Array]")),
                Ak = Ka(Array.prototype.map, "map"),
                A = Ak && Mq(window, Array.prototype.map) ?
                function(a, c) {
                    return c && 0 < c.length ? Ak.call(c, a) : []
                } : Yj,
                z = A,
                lc = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : Lq,
                fb = ka(A),
                Bq = Gb(A),
                La = Cg(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, Ea("some", Array.prototype.some)),
                ue = w(Mb),
                Lc = T("0"),
                rr = ka(Bg),
                Bk = Ka(Array.prototype.reverse, "reverse"),
                ir = Bk ? function(a) {
                    return Bk.call(a)
                } : Kq,
                Ck = Gb(parseInt),
                Ga = Ck(10),
                Pg = Ck(2),
                ya = Object.entries ?
                function(a) {
                    return a ? Object.entries(a) : []
                } : Vj,
                ba = Object.keys ? Object.keys : Wj,
                sr = u(Vj, v(T("1"), Yj)),
                tr = Object.values ? Object.values : sr,
                y = Object.assign || Jq,
                Qh = ka(function(a, c) {
                    return y({}, a, c)
                }),
                $c = w(u(T("String.fromCharCode"), v("fromCharCode", Ea), Rb)),
                He = w(u(lb, Xa(/ipad|iphone|ipod/i))),
                Kf = w(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                pd = w(function(a) {
                    a = zk(a);
                    var c = a.Lg;
                    return a.Lf && !c.match("CriOS")
                }),
                ur = Xa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                vr = Xa(/; wv\)/),
                nd = w(function(a) {
                    a = lb(a);
                    return vr(a) || ur(a)
                }),
                wr = /Chrome\/(\d+)\./,
                xr = w(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(wr)) && a.length ? 76 <= Ga(a[1]) : !1
                }),
                md = w(function(a) {
                    var c = (lb(a) || "").toLowerCase();
                    a = Kf(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                yr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                zr = w(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (V(c)) return null;
                    a = ue(a)(c,
                        yr);
                    return -1 === a ? c : "" + a
                }),
                pg = w(u(T("document.addEventListener"), Rb)),
                Dk = w(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                qh = w(function(a) {
                    var c = n(a, "navigator") || {};
                    a = Dk(a);
                    za(a) || (a = "", c = n(c, "languages.0"), za(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                cb = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                Ar = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                Br =
                w(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Cr = w(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(La(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || La(v(n(a, "document"), n), c) || b || d && La(E(d.getAttribute, d), e))
                }),
                Dr = w(function(a) {
                    return !!(La(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Er = w(function(a) {
                    return Ef(v(a, n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                Fr = new RegExp(L("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                Ql = w(u(T("navigator.userAgent"), Xa(Fr))),
                Md = w(function(a) {
                    var c = lb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (He(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && pd(a)
                }),
                Iq = /Edg\/(\d+)\./,
                dg = w(function(a) {
                    return Md(a) || hf(a, 68) || jf(a, 79)
                }),
                Gr = Rc.construct,
                Zb = Rc.host,
                Qg = pg(window),
                ra = {
                    Yg: 24226447,
                    Sg: 26302566,
                    ah: 51533966,
                    ck: 65446441,
                    Wa: "https:",
                    gb: "1011",
                    qc: Gr,
                    Xg: Qg ? 512 : 2048,
                    Vg: Qg ? 512 : 2048,
                    Wg: Qg ? 100 : 400,
                    dk: 100,
                    Zg: "noindex"
                },
                ec = {},
                M = w(function(a) {
                    return a.id + ":" + a.ca
                }),
                $e = la("1"),
                Hr = setTimeout;
            Fa.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Fa.prototype.then = function(a, c) {
                var b = new this.constructor(Uq);
                fk(this, new Wq(a, c, b));
                return b
            };
            Fa.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Fa.all = function(a) {
                return new Fa(function(c, b) {
                    function d(h,
                        k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Fa.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Fa ? a : new Fa(function(c) {
                    c(a)
                })
            };
            Fa.reject = function(a) {
                return new Fa(function(c,
                    b) {
                    b(a)
                })
            };
            Fa.race = function(a) {
                return new Fa(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Fa.resolve(a[d]).then(c, b)
                })
            };
            Fa.$e = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Hr(a, 0)
            };
            Fa.bh = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                Ir = Ka(K, "Promise"),
                Ek = Ka(n(K, "resolve"), "resolve"),
                Fk = Ka(n(K,
                    "reject"), "reject"),
                Gk = Ka(n(K, "all"), "all");
            if (H(!1, [Ir, Ek, Fk, Gk])) K = Fa;
            else {
                var Ne = function(a) {
                    return new Promise(a)
                };
                Ne.resolve = E(Ek, K);
                Ne.reject = E(Fk, K);
                Ne.all = E(Gk, K);
                K = Ne
            }
            var Sj = uc([26812653]),
                $f = w(u(T("id"), Sj), M),
                zb = [],
                X = [],
                Ac = [],
                Td = [],
                Rg = [],
                Oe = [],
                Gq = vb("debuggerEvents", td),
                Dq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Nd, hc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (Nd) var d = new Nd(c);
                        else Ea("Error", a.Error) ? (Nd = a.Error,
                            d = new a.Error(c)) : (Nd = Fq, d = new Nd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                Eq = Xa(/^http./),
                Cq = Xa(/^err.kn/),
                Rj = [],
                Jr = w(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", B, b)
                    } catch (d) {}
                    return c
                }),
                Kr = ka(function(a, c) {
                    return a ? y({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ja = w(function(a) {
                    a = Jr(a);
                    var c = Kr(a),
                        b = {};
                    return y(b, {
                        D: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Qj(d, h, f, k, !1)
                            }, e);
                            return E(b.fc, b, d,
                                e, f, g)
                        },
                        fc: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Qj(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                ha = w(bg),
                Nj = ka(function(a, c) {
                    for (var b = []; !Fd(c);) {
                        var d = xq(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Sg = ka(function(a, c) {
                    return xa(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Pe = ka(function(a, c) {
                    return xa(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ra(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                vg = [],
                wg = !1,
                ug = !1,
                Sb = {
                    id: "id",
                    We: "ut",
                    ca: "type",
                    fe: "ldc",
                    tb: "nck",
                    Dc: "url",
                    Uh: "referrer"
                },
                Lr = /^\d+$/,
                Sc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Lr.test(a) || (a = "0");
                        try {
                            var c = Ga(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ca: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    tb: Boolean,
                    We: Boolean
                };
            Sb.sc = "defer";
            Sc.sc = Boolean;
            Sb.ea = "params";
            Sc.ea = function(a) {
                return Ma(a) || ea(a) ? a : null
            };
            Sb.Ve = "userParams";
            Sb.Gg = "triggerEvent";
            Sc.Gg = Boolean;
            Sb.pg = "sendTitle";
            Sc.pg = function(a) {
                return !!a || V(a)
            };
            Sb.Re = "trackHash";
            Sc.Re = Boolean;
            Sb.Eg = "trackLinks";
            Sb.Eh = "enableAll";
            var Ze = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ia: c[1],
                        $a: Sc[b]
                    };
                    return a
                }, {}, ya(Sb)),
                Hk =
                ka(function(a, c) {
                    var b = c || {};
                    return {
                        l: v(b, O),
                        o: function(d, e) {
                            var f = b[d];
                            return V(f) && !V(e) ? e : f
                        },
                        C: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        cc: function(d, e) {
                            return "" === e || na(e) ? this : this.C(d, e)
                        },
                        Aa: v(b, a)
                    }
                }),
                Ca = Hk(function(a) {
                    var c = "";
                    a = N(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], ya(a));
                    c && a.push(c);
                    return L(":", a)
                }),
                Tg, Hj = (Tg = {}, Tg.w = [
                    [function(a, c) {
                        return {
                            aa: function(b, d) {
                                var e, f = b.G;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.ca && (f["cnt-class"] =
                                    c.ca);
                                b.H || (b.H = Ca());
                                e = b.H;
                                var g = b.Y;
                                f = {
                                    ra: {
                                        Ja: "watch/" + c.id
                                    },
                                    Y: y(void 0 === g ? {} : g, {
                                        nd: !(!e.o("pv") || e.o("ar") || e.o("wh"))
                                    }),
                                    G: y(b.G || {}, f)
                                };
                                y(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Tg),
                Ik = v(Hj, Ij),
                ib = tg("w"),
                Ej = ["webkitvisibilitychange", "visibilitychange"],
                rg = Hk(function(a) {
                    a = ya(a);
                    return L("", A(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Ta(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Jk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                zp = /^ *(data|javascript):/i,
                Si = new RegExp(L("", ["\\.(" + L("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Pa, gk = (Pa = {}, Pa.hit = "h", Pa.params = "p", Pa.reachGoal = "g", Pa.userParams = "up",
                    Pa.trackHash = "th", Pa.accurateTrackBounce = "atb", Pa.notBounce = "nb", Pa.addFileExtension = "fe", Pa.extLink = "el", Pa.file = "fc", Pa.trackLinks = "tl", Pa.destruct = "d", Pa.setUserID = "ui", Pa.getClientID = "ci", Pa.clickmap = "cm", Pa.enableAll = "ea", Pa),
                Mr = w(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Nr = u(M, Mr, ia),
                fg = {
                    mc: function(a) {
                        a = Jd(a).o("mt", {});
                        a = ya(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = G(a).o("cls", {
                                pc: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.pc,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.G;
                        return !a || a.nohit ? null : Nr(c)
                    }
                },
                Cb = F([1, null], Cg),
                ed = F([1, 0], Cg),
                pq = w(function(a) {
                    Cj(a, "_ymBRC", "1");
                    var c = "1" !== Bj(a, "_ymBRC");
                    c || Dj(a, "_ymBRC");
                    return c
                }),
                Qa = w(lf),
                Tc = w(lf, function(a, c, b) {
                    return "" + c + b
                }),
                Or = w(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                $a = w(u(T("document"), v("createElement", cc))),
                Vh = w(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = db(function(b) {
                            return Ea(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                Pr = la("INPUT"),
                Be = u(Ia, Pr),
                Qr = la("TEXTAREA"),
                mq = u(Ia, Qr),
                Rr = la("SELECT"),
                nq = u(Ia, Rr),
                Ce = u(T("type"), Xa(/^(checkbox|radio)$/)),
                wf = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA$/)),
                fe = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Bf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                lq = ["submit", "image", "hidden"],
                ij = /^\s+|\s+$/g,
                xj = Ka(String.prototype.trim, "trim"),
                Kk = ka(function(a, c) {
                    return c.replace(a, "")
                }),
                Ai = Kk(/\s/g),
                Lb = Kk(/\D/g),
                Pf = w(function() {
                    for (var a = 59, c = {}, b = 0; b < Jk.length; b += 1) c[Jk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                vj = w(function(a) {
                    return {
                        vk: a,
                        lb: null,
                        wb: []
                    }
                }),
                tj = {},
                mg = {};
            tj.p = 500;
            var sj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            mg.h = !0;
            mg.c = !0;
            var Oc = {};
            Oc.p = ng;
            Oc.c = function(a, c, b) {
                (a = nb(n(c, "textContent"))) && b && (b = b(c), b.length && La(u(T("textContent"), nb, la(a)), b) && (a = ""));
                Be(c) && (a = nb(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var Uc, lg = "button," + A(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") + ",a",
                Rf = v(lg, ub),
                iq = (Uc = {}, Uc.A = "h", Uc.BUTTON = "i", Uc.DIV = "i", Uc.INPUT = "ty", Uc),
                hq = "hash host hostname href pathname port protocol search".split(" "),
                kg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                rj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                se = w(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Sr = w(function(a) {
                    a =
                        R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(rj));
                    return c
                }),
                Lk = u(R, T("protocol"), la("https:")),
                Mk = /\/$/,
                Tr = w(u(ha, xa(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Ur = u(ha, xa(function(a) {
                    a = new a.l.Date;
                    return L("", A(yq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Vr = u(ha, xa(gg)),
                Nk = w(u(ha, xa(function(a) {
                    return a.za[0]
                }))),
                Wr = w(yc),
                fq = w(function(a) {
                    return xr(a) && Lk(a) ? "SameSite=None;Secure;" : ""
                }),
                jg = ["metrika_enabled"],
                ig = [],
                pj = vb("gsc", nj),
                gq = /:\d+$/,
                Xq = w(function(a) {
                    var c = (R(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = L(".", c.slice(-e)), Wh(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Yb = w(Bc),
                mj = vb("r", function(a, c) {
                    var b = lj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Dd = w(function() {
                    return {
                        Ha: {},
                        pending: {},
                        children: {}
                    }
                }),
                Ug = T("postMessage"),
                Xr = D("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Dd(a),
                        g = L(":", [c.$.xc, c.$.key]);
                    if (Ug(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.zg, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        U(a, function() {
                                delete f.pending[g]
                            },
                            5E3, "if.s")
                    }
                }),
                Yr = D("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Dd(a),
                        l = null;
                    try {
                        g = rb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!na(h) && h.substring && "__yminfo" === h.substring(0, 8) && !na(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ea(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Ta(k) && Ug(k) && (f = d.O(l.type, [f, l]), e = A(u(O, Qh(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.zg, "*"))
                            }
                        } else g === "" + h && ea(l) &&
                            Y(function(m) {
                                return !(!m.hid || !m.counterId)
                            }, l).length === l.length && (b = k.pending[L(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                ad = w(function(a, c) {
                    var b, d = cc("getElementsByTagName", n(a, "document")),
                        e = Dd(a),
                        f = Ug(a),
                        g = fd(a),
                        h = ja(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Ib(a), b);
                    dg(a) && (f.duid = Dc(a, c));
                    bq(a, g);
                    cq(a);
                    b = dq(a, f);
                    var k = F([a, v([], b)], Xr);
                    z(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.O("initToParent", [p, q])
                        })
                    }, d);
                    cb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.O("parentConnect", [l, m])
                    });
                    h.D(a, ["message"], F([a, c, b, g, f], Yr));
                    return {
                        ba: g,
                        Ha: e.Ha,
                        children: e.children,
                        He: k
                    }
                }, u(wb, M)),
                $d = w(function(a, c) {
                    if (!dg(a) || !cb(a)) return Dc(a, c);
                    var b = ad(a, c);
                    return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Dc(a, c) : Dc(a, c)
                }, function(a, c) {
                    return "{" + c.fe + c.tb
                }),
                Zr = w(function(a) {
                    a = G(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, u(wb, M)),
                fa, eg = (fa = {}, fa.vf = v(Rc.version, O), fa.nt = zr, fa.fp = function(a,
                    c, b) {
                    if (b.G && b.G.nohit) return null;
                    c = M(c);
                    b = Wr(a);
                    if (b[c]) return null;
                    a: {
                        var d = Nk(a),
                            e = n(a, "performance.getEntriesByType");
                        if (S(e)) {
                            if (a = Y(u(O, T("name"), la("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) : null
                }, fa.fu = function(a, c, b) {
                    var d = b.G;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Mk, "");
                    b = (d["page-ref"] || "").replace(Mk, "");
                    d = d["page-url"];
                    a = R(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, fa.en = Or, fa.la = Dk, fa.ut = function(a, c, b) {
                    var d = b.V;
                    b = b.G;
                    d = d && d.Rc;
                    b && (Sr(a) || c.We || d) && (b.ut = ra.Zg);
                    return null
                }, fa.v = v(ra.gb, O), fa.cn = Zr, fa.dp = function(a) {
                    var c = G(a),
                        b = c.o("bt", {});
                    if (V(c.o("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.C("bt", b);
                        b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function(e) {
                            b.Vj =
                                n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return ed(b.Vj)
                }, fa.ls = w(function(a, c) {
                    var b = Tc(a, c.id),
                        d = ha(a),
                        e = b.o("lsid");
                    return +e ? e : (d = Ua(a, 0, d(aa)), b.C("lsid", d), d)
                }, wb), fa.hid = Ib, fa.phid = function(a, c) {
                    if (!cb(a)) return null;
                    var b = ad(a, c);
                    if (!b) return null;
                    var d = ba(b.Ha);
                    return d.length ? b.Ha[d[0]].info.hid : null
                }, fa.z = Tr, fa.i = Ur, fa.et = Vr, fa.c = u(T("navigator.cookieEnabled"), Cb), fa.rn = u(O, Ua), fa.rqn = function(a, c, b) {
                    b = b.G;
                    if (!b || b.nohit) return null;
                    c = M(c);
                    a = Tc(a, c);
                    c = (a.o("reqNum", 0) || 0) + 1;
                    a.C("reqNum",
                        c);
                    if (a.o("reqNum") === c) return c;
                    a.Pb("reqNum");
                    return null
                }, fa.u = $d, fa.tp = u(wb, Tj, Cb), fa.tpid = u(wb, function(a) {
                    a = M(a);
                    return ec[a] && ec[a].Mj || null
                }), fa.w = function(a) {
                    a = Pc(a);
                    return a[0] + "x" + a[1]
                }, fa.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return L("x", [a, b, c])
                    }
                    return null
                }, fa.sk = T("devicePixelRatio"), fa.ifr = u(cb, Cb), fa.j = u(Br, Cb), fa.sti = function(a) {
                    return cb(a) ? Ar(a) ? "1" : null : null
                }, fa),
                aq = w(function() {
                    return Na(ba(eg), ba(fg))
                }),
                $p = w(yc, M),
                jj = w(function() {
                    return {
                        tf: null,
                        va: []
                    }
                }, M),
                Xp = /^[a-z][\w.+-]+:/i,
                Vg, Pb = [
                    [Ee, 1],
                    [ye, 2],
                    [Fb(), 3],
                    [kj, 4]
                ],
                xe = [],
                xb = v(Pb, Jj),
                Ob = (Vg = {}, Vg.h = Pb, Vg),
                ca = v(Ob, Ij);
            xb(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.G;
                        if (!c.H || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = hj(a, e) : delete d["page-ref"];
                        d["page-url"] = hj(a, f).slice(0, ra.Xg);
                        return b()
                    }
                }
            }, -100);
            var Tp = /[^a-z0-9.:-]/,
                Wg, bc = [],
                Xg = {};
            bc.push(dj, 0, Nb, cg, Cd);
            var Ok = [Nb];
            Ok.push(cg);
            var Pk = Eb(Ok),
                Vc = Eb([Cd]),
                $r = Eb([dj,
                    Cd
                ]),
                Qe = Eb([0, Nb, cg, Cd]),
                va = (Wg = {}, Wg.h = Pk, Wg),
                bd = w(function(a, c) {
                    var b = Xg["*"] ? Xg["*"] : c && Xg[c];
                    b || (b = c ? va[c] || [] : bc);
                    b = N(function(d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || Ye();
                    return b
                }, wb),
                Yg, as = E(K.reject, K, Sa()),
                Da = (Yg = {}, Yg.h = ib, Yg),
                Aa = D("g.sen", function(a, c, b) {
                    var d = bd(a, c);
                    b = b ? Wp(a, c, b) : [];
                    var e = Da[c],
                        f = e ? e(a, d, b) : ib(a, d, b);
                    return function() {
                        var g = Ba(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.Y;
                        h = y(h, {
                            Y: y(void 0 === k ? {} : k, {
                                Da: [c]
                            })
                        });
                        return f.apply(void 0, wa([h], g))
                    }
                }, as),
                Mp =
                ka(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            gg: b,
                            cb: d,
                            hg: !1
                        }
                    }
                    return c[a].cb
                }),
                cj = w(u(yc, xa)),
                Od = w(function(a, c) {
                    var b = n(a, "console"),
                        d = n(b, "log");
                    d = Je("log", d) ? E(d, b) : B;
                    var e = n(b, "warn");
                    e = Je("warn", e) ? E(e, b) : d;
                    var f = n(b, "error");
                    b = Je("error", f) ? E(f, b) : d;
                    return {
                        log: Mc(a, "log", c, d),
                        error: Mc(a, "error", c, b),
                        warn: Mc(a, "warn", c, e)
                    }
                }),
                bs = D("dc.init", function(a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m - 1] = arguments[m];
                        G(a).o("dce:" + c, !1) && e[k].apply(e, l);
                        G(a).o("dclq:" +
                            c).push([k, l])
                    }
                    var d = R(a),
                        e = Od(a, c);
                    G(a).Ta("dclq:" + c, []);
                    var f = Yb(a),
                        g = Df(a),
                        h = g.Hi;
                    g = g.xi;
                    h && !g && f.C("debug", "1", void 0, d.host);
                    return h || g ? {
                        log: v("log", b),
                        warn: v("warn", b),
                        error: v("error", b)
                    } : Lp(a, c)
                }),
                Ad = w(bs, wb),
                cs = D("p.dc", function(a, c) {
                    var b = M(c);
                    bj(a, "");
                    bj(a, b)
                }),
                Bl = C(window, "h.p", function(a, c) {
                    var b, d, e = Aa(a, "h", c),
                        f = c.Dc || "" + R(a).href,
                        g = c.Uh || a.document.referrer,
                        h = {
                            H: Ca((b = {}, b.pv = 1, b)),
                            G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            V: {}
                        };
                    h.V.ea = c.ea;
                    h.V.Ve = c.Ve;
                    c.sc && h.G && (h.G.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.sc || Db(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.ea)(), Hb(a, F([a, c, k], Np)))
                    })["catch"](C(a, "h.g.s"))
                }),
                Zg = ["yandex_metrika_callback" + Rc.callbackPostfix, "yandex_metrika_callbacks" + Rc.callbackPostfix],
                ds = D("cb.i", function(a) {
                    var c = Zg[0],
                        b = Zg[1];
                    if (S(a[c])) a[c]();
                    "object" === typeof a[b] && z(function(d, e) {
                        a[b][e] = null;
                        Wf(a, d)
                    }, a[b]);
                    z(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Zg)
                }),
                Qk = w(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a,
                        "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                es = D("fpm", function(a, c) {
                    if (!Lk(a)) return B;
                    var b = M(c);
                    if (!Qk(a)) return Ab(a, b, "Not supported"), B;
                    var d = Ha(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return Ma(e) ? ba(e).length ? f(Zi(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, B)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                        }))["catch"](C(a, "fpm.en"))
                    } : B
                }),
                Re = ka(function(a, c) {
                    var b = {};
                    Yf(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                fs = D("c.c.cc", function(a) {
                    var c = G(a),
                        b = u(Re(a), function(d) {
                            var e;
                            return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                        });
                    return C(a, "g.c.cc", u(E(c.o, c, "counters", {}), ba, fb(b)))
                }),
                gs = D("gt.c.rs", function(a, c) {
                    var b, d = M(c),
                        e = c.id,
                        f = c.ca,
                        g = c.uh,
                        h = c.Re,
                        k = F([a, d], Hp);
                    Xf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                Xi = w(td),
                zd = w(yc, M),
                hs = ["ecommerce", "user_id", "fpp"],
                is = D("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f = Ba(arguments),
                            g = Gp(f);
                        if (!g) return null;
                        f = g.zh;
                        var h = g.ea;
                        g = g.kc;
                        if (!Ma(h) && !ea(h)) return null;
                        var k = Aa(a, "1", c),
                            l = zd(c).url,
                            m = n(h, "__ym.user_id"),
                            p = ba(h),
                            q = H("__ymu", p),
                            r = H("__ym", p) && m;
                        p = !$f(c);
                        var t = h;
                        t.__ym && (t = y({}, h), t.__ym = N(function(x, I) {
                            var Z = n(h, "__ym." + I);
                            Z && (x[I] = Z);
                            return x
                        }, {}, hs), ba(t.__ym).length || delete t.__ym, p = !!ba(t).length);
                        m = Db(a, c, r ? "Set user id " + m : (q ? "User p" : "P") + "arams. Counter " + c.id, r ? void 0 : JSON.stringify(t));
                        k = k({
                            V: {
                                ea: h
                            },
                            H: Ca((d = {}, d.pa = 1, d.ar = 1, d)),
                            G: (e = {}, e["page-url"] = l || R(a).href, e)
                        }, c).then(p ? m : B);
                        return Kc(a, "p.s", k,
                            g, f)
                    }, b
                }),
                Zd = w(Ui, u(wb, M)),
                js = D("y.p", function(a, c) {
                    var b = Ui(a, c);
                    if (b) {
                        var d = Ud(a),
                            e = F([a, b, c], Cp);
                        th(a, d, function(f) {
                            f.D(["params"], e)
                        });
                        b.ba.D(["params"], u(T("1"), e))
                    }
                }),
                Yq = w(function(a) {
                    if (a = $a(a)) return a("a")
                }),
                Rk = {
                    yk: Xa(/[/&=?#]/)
                },
                pe = D("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m;
                        if (!f || Rk[b] && Rk[b](f)) return null;
                        var p = g,
                            q = h || B;
                        S(g) && (q = g, p = void 0, k = h);
                        var r = Db(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                            t = "goal" === b;
                        g = Aa(a,
                            "g", c);
                        var x = Bp(a, c, f, b);
                        h = x[0];
                        x = x[1];
                        p = g({
                            V: {
                                ea: p
                            },
                            H: Ca((l = {}, l.ar = 1, l)),
                            G: (m = {}, m["page-url"] = h, m["page-ref"] = x, m)
                        }, c).then(function() {
                            t && r();
                            gb(a, {
                                da: M(c),
                                name: "event",
                                data: {
                                    Bb: b,
                                    name: f
                                }
                            });
                            d && d()
                        });
                        return Kc(a, "g.s", p, q, k)
                    }, e
                }),
                ks = D("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Dc(a, c);
                        d && Wf(a, d, null, e);
                        return e
                    }, b
                }),
                ik, ls = D("th.e", function(a, c) {
                    function b() {
                        g || (k = xd(a, "onhashchange") ? ja(a).D(a, ["hashchange"], h) : Zq(a, h))
                    }
                    var d, e = Aa(a, "t", c),
                        f = ve(a, M(c)),
                        g = !1,
                        h = C(a,
                            "h.h.ch", E($q, null, a, c, e)),
                        k = B;
                    c.Re && (b(), g = !0);
                    e = C(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                ms = ka(function(a, c) {
                    za(c) ? a.push(c) : z(u(O, pa("push", a)), c)
                }),
                ns = D("cl.p", function(a, c) {
                    function b(p, q, r, t) {
                        void 0 === t && (t = {});
                        r ? re(a, c, {
                            url: r,
                            qb: !0,
                            Mc: p,
                            Rc: q,
                            sender: e,
                            Mg: t
                        }) : g.warn("Empty link")
                    }
                    var d, e = Aa(a, "2", c),
                        f = [],
                        g = Od(a, M(c)),
                        h = M(c),
                        k = C(a, "s.s.tr", v(ve(a, h), Ap));
                    h = {
                        l: a,
                        hb: c,
                        Mh: f,
                        sender: e,
                        globalStorage: G(a),
                        yh: Tc(a, c.id),
                        zk: Ib(a),
                        Nj: v(v(h,
                            Re(a)), u(ia, T("trackLinks")))
                    };
                    h = C(a, "cl.p.c", v(h, xp));
                    h = ja(a).D(a, ["click"], h);
                    c.Eg && k(c.Eg);
                    var l = C(a, "file.clc", F([!0, !1], b)),
                        m = C(a, "e.l.l.clc", F([!1, !0], b));
                    f = C(a, "add.f.e.clc", ms(f));
                    return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                }),
                yd = vb("retryReqs", function(a) {
                    return Qa(a).o("retryReqs", {})
                }, !0),
                Sk = Gb(u(ee, la(0))),
                os = [Sk("watch"), Sk("clmap")],
                ps = D("g.r", function(a) {
                    var c = ha(a),
                        b = yd(a),
                        d = c(aa),
                        e = Ib(a);
                    return N(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && La(xa(k.resource),
                            os) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ja: k.resource,
                            mj: k.postParams,
                            ea: k.params,
                            kh: k.browserInfo,
                            xk: k.ghid,
                            time: k.time,
                            $b: Ga(h),
                            xh: k.counterId,
                            ca: k.counterType
                        }, k.telemetry && (h.Ka = k.telemetry), f.push(h));
                        return f
                    }, [], ya(b))
                }),
                qs = D("nb.p", function(a, c) {
                    function b(I) {
                        l() || (I = "number" === typeof I ? I : 15E3, x = ar(a, d(!1), I), m())
                    }

                    function d(I) {
                        return function(Z) {
                            var W, oa, ta;
                            void 0 === Z && (Z = (W = {}, W.ctx = {}, W.callback =
                                B, W));
                            if (I || !r && !k.Yd) {
                                r = !0;
                                m();
                                x && x();
                                var tb = p(aa);
                                W = (Ga(k.o("lastHit")) || 0) < tb - 18E5;
                                var sd = .1 > Math.random();
                                k.C("lastHit", tb);
                                tb = Ca((oa = {}, oa.nb = 1, oa.cl = t, oa.ar = 1, oa));
                                oa = zd(c);
                                oa = {
                                    G: (ta = {}, ta["page-url"] = oa.url || R(a).href, ta),
                                    H: tb,
                                    V: {
                                        force: I
                                    }
                                };
                                ta = Od(a, M(c)).warn;
                                !Z.callback && Z.ctx && ta('"callback" argument missing');
                                (ta = I || W || sd) || (ta = a.location.href, W = a.document.referrer, ta = !(ta && W ? Ti(ta) === Ti(W) : !ta && !W));
                                if (ta) return ta = g(oa, c), Kc(a, "l.o.l", ta, Z.callback, Z.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = Aa(a, "n",
                            c),
                        h = M(c),
                        k = Tc(a, c.id),
                        l = v(v(h, Re(a)), u(ia, T("accurateTrackBounce"))),
                        m = v((e = {}, e.accurateTrackBounce = !0, e), ve(a, h)),
                        p = ha(a),
                        q = p(aa),
                        r = !1,
                        t = 0,
                        x;
                    qa(c, function(I) {
                        t = I.Oh - q
                    });
                    c.bf && b(c.bf);
                    e = (f = {}, f.notBounce = d(!0), f.u = x, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                up = ka(sc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                rs = D("clm.p", function(a, c) {
                    if ($c(a)) return B;
                    var b = Aa(a, "m", c),
                        d = M(c),
                        e = ha(a),
                        f = e(aa),
                        g = v(v(d, Re(a)), u(ia, T("clickmap"))),
                        h, k = null;
                    d = C(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = G(a),
                                q = p.o("cls", {
                                    pc: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.C("cls", {
                                pc: q.pc + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function(x) {
                                return ("" + x).toUpperCase()
                            }, p.ignoreTags || []);
                            V(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: vp(a, l),
                                position: Pi(a, l),
                                button: wp(l),
                                time: e(aa)
                            };
                            p = R(a).href;
                            if (tp(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = Ae(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = og(a, l.element);
                                q = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) /
                                    (r || 1)), "t", Math.floor((l.time - f) / 100), "p", ng(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = L(":", q);
                                m && (q += ":wh:1");
                                sp(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ja(a).D(n(a, "document"), ["click"], d)
                }),
                ss = D("trigger.in", function(a, c) {
                    c.Gg && Hb(a, F([a, "yacounter" + c.id + "inited"], oq), "t.i")
                }),
                ts = D("c.m.p", function(a, c) {
                    var b, d = M(c);
                    return b = {}, b.clickmap = v(ve(a, d), rp), b
                }),
                pi = v("form", ac),
                $o = v("form", ub),
                qp = w(function(a, c) {
                    return qa(c, T("settings.form_goals"))
                }, wb),
                us = v(!0, Mi),
                vs = D("s.f.i", function(a, c) {
                    var b = [];
                    ja(a).D(a, ["click"], C(a, "s.f.c", F([a, c, b], pp)));
                    ja(a).D(a, ["submit"], C(a, "s.f.e", u(T("target"), F([a, c, b], us))));
                    Ni(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                ws = D("s.f.i", function(a, c) {
                    return qa(c, function(b) {
                        if (n(b, "settings.button_goals") || -1 !== R(a).href.indexOf("yagoalsbuttons=1")) ja(a).D(a, ["click"], C(a, "c.t.c", u(T("target"), F([a, c], Xe(a, c, "", op))))), Db(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }),
                Tb, Pd, $g, zc, Tf = (Tb = {}, Tb.transaction_id = "id", Tb.item_brand = "brand", Tb.index = "position", Tb.item_variant =
                    "variant", Tb.value = "revenue", Tb.item_category = "category", Tb.item_list_name = "list", Tb),
                Ic = (Pd = {}, Pd.item_id = "id", Pd.item_name = "name", Pd.promotion_name = "coupon", Pd),
                np = ($g = {}, $g.promotion_name = "name", $g),
                kp = "currencyCode add delete remove purchase checkout detail".split(" "),
                lp = (zc = {}, zc.view_item = {
                    event: "detail",
                    sb: Ic,
                    Gb: "products"
                }, zc.add_to_cart = {
                    event: "add",
                    sb: Ic,
                    Gb: "products"
                }, zc.remove_from_cart = {
                    event: "remove",
                    sb: Ic,
                    Gb: "products"
                }, zc.begin_checkout = {
                    event: "checkout",
                    sb: Ic,
                    Gb: "products"
                }, zc.purchase = {
                    event: "purchase",
                    sb: Ic,
                    Gb: "products"
                }, zc),
                Ki = D("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = ea(g) && te(a, g, b)) || (f = U(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return ma(a, f)
                    }
                }),
                xs = D("p.e", function(a, c) {
                    var b = Ha(a, c);
                    if (b) {
                        var d = G(a);
                        b = b.params;
                        var e = C(a, "h.ee", F([a, M(c), b], ip));
                        return c.Ed ? (d.C("ecs", 0), Ji(a, c.Ed, e)) : qa(c, function(f) {
                            if (f = n(f, "settings.ecommerce")) return d.C("ecs", 1), Ji(a, f, e)
                        })
                    }
                }),
                Gi = w(function(a) {
                    return L("[^\\d<>]*", a.split(""))
                }),
                nm = w(function(a) {
                    return new RegExp(Gi(a),
                        "g")
                }),
                fp = /\S/,
                zi = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ec),
                Tk = w(function(a) {
                    return $c(a) || !Ed(a)
                }),
                ys = D("phc.h", function(a, c) {
                    return Uj(a) || Tk(a) ? null : qa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Bc(a, "").o("yaHidePhones");
                            d = d ? rb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && ri(a, c, b)
                        }
                    })
                }),
                Uk = w(function(a) {
                    a = R(a);
                    a = sq(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                ui = u(Uk,
                    T("_ym_status-check"), Ga),
                zs = u(Uk, T("_ym_lang")),
                ti = Xa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                bp = ["form", "button", "phone", "status"],
                ah = [],
                Zo = w(function(a, c, b) {
                    z(u(Nc([a, c, b]), ia), ah);
                    if (b.inline) {
                        c = si(b);
                        var d = b.data;
                        b = b.id;
                        oi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && ti(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage =
                        b.initMessage, cp(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                As = D("cs.init", function(a, c) {
                    var b, d = ui(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = si((b = {}, b.lang = zs(a), b.fileId = "status", b));
                        U(a, F([a, e, "" + d], oi), 0, "cs")
                    }
                }),
                Bs = D("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (za(d) || ne(a, d)) {
                            var g = Ha(a, c);
                            d = Ec(["__ym", "user_id", d]);
                            g.params(d, e || B, f)
                        } else Od(a, M(c)).error("Incorrect user ID")
                    }, b
                }),
                Jc = {
                    position: "absolute"
                },
                ni = {
                    position: "fixed"
                },
                Of = {
                    borderRadius: "50%"
                },
                Cs = u(T("settings.sm"),
                    la(1)),
                Ds = vb("siteStatistics", function(a, c) {
                    if (!Uj(a)) return $b(a)(Ra(B, F([c, function(b) {
                        return Cs(b) ? Xo(a, c.id) : B
                    }], qa)))
                }),
                Es = D("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = C(a, "up.c", function(d, e, f) {
                        var g, h = Ha(a, c),
                            k = Ad(a, M(c)).warn;
                        h ? Ma(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || B, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                Fs = /[\*\.\?\(\)]/g,
                Gs = w(function(a, c, b) {
                        try {
                            var d = b.replace("\\s", " ").replace(Fs, "");
                            Ad(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                        } catch (e) {}
                    },
                    wb),
                Hs = D("r.nn", function(a) {
                    Df(a).isEnabled && te(a, Gg, function(c) {
                        c.ya.D(function(b) {
                            Gs(a, b[1], b[0]);
                            Gg.splice(100)
                        })
                    })
                }),
                Is = D("e.a.p", function(a, c) {
                    var b, d = Ha(a, c);
                    d = F([u(O, xa(!0)), Y(Boolean, A(v(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
                    c.Eh && d();
                    return b = {}, b.enableAll = d, b
                }),
                Js = v("add", me),
                Ks = v("remove", me),
                Ls = v("detail", me),
                Ms = v("purchase", me),
                Ns = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                bf = w(function(a) {
                    var c = zk(a);
                    a = c.Lg;
                    if (!c.Lf) return !1;
                    c = pa("indexOf", a);
                    c = La(u(c, la(-1), Rb), Ns);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                Os = ["YangoEats"],
                Pl = w(function(a) {
                    var c = lb(a);
                    if (!c) return !1;
                    c = pa("indexOf", c);
                    return La(u(c, la(-1), Rb), Os) || nd(a)
                }),
                Vo = /([0-9\\.]+) Safari/,
                Ps = /\sYptp\/\d\.(\d+)\s/,
                Vk = w(function(a) {
                    var c;
                    a: {
                        if ((c = lb(a)) && (c = Ps.exec(c)) && 1 < c.length) {
                            c = Ga(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || jf(a,
                        79) ? !1 : !Md(a) || bf(a)
                }),
                Wk = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Qs = w(function(a) {
                    a = $a(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = E(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Xk = Ka(String.prototype.repeat, "repeat"),
                Rs = Xk ? function(a, c) {
                    return Xk.call(a, c)
                } : So,
                Jh = v(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = Rs(c, b);
                    return a ? c + d : d + c
                }),
                Ke = [2277735313, 289559509],
                Le = [1291169091,
                    658871167
                ],
                Ss = D("p.cd", function(a, c) {
                    if (md(a) || He(a)) {
                        var b = Qa(a);
                        if (na(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.mk || pd(a) ? function() {} : /./,
                                e = Od(a, M(c));
                            d.toString = function() {
                                b.C("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                Ts = w(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Oa(a) && La(u(T("name"), Xa(/Chrome PDF Viewer/)), a))
                }),
                Po = {
                    "*": "+",
                    "-": "/",
                    gk: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                gc = ka(function(a, c) {
                    return G(c).o(a, null)
                }),
                Us = w(function(a) {
                    return S(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                Lo = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                pb, Ko = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                li = (pb = {}, pb.responseEnd = 1, pb.domInteractive = 1, pb.domContentLoadedEventStart =
                    1, pb.domContentLoadedEventEnd = 1, pb.domComplete = 1, pb.loadEventStart = 1, pb.loadEventEnd = 1, pb.unloadEventStart = 1, pb.unloadEventEnd = 1, pb.secureConnectionStart = 1, pb),
                No = w(td),
                Ho = w(yc),
                Io = w(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (S(c) && !md(a)) return (new K(E(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](v(!0, O));
                    if (Gd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(V(c));
                    c = n(a,
                        "openDatabase");
                    if (pd(a) && S(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Vs = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Ws = w(function(a, c) {
                    var b = Yb(a),
                        d = R(a).search.match(Vs);
                    return d && 2 <= d.length ? (d = d[2], c.tb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Xs = D("pa.plgn", function(a, c) {
                    var b = Zd(a, c);
                    b && b.ba.D(["pluginInfo"], C(a, "c.plgn", function() {
                        var d = G(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return Hq(c,
                            Ze)
                    }))
                }),
                Yk = Zb.split("."),
                Ys = Yk.pop(),
                Zk = L(".", Yk),
                Hl = w(function(a) {
                    a = R(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                ph = w(function(a) {
                    return -1 !== R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                Zs = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Xd = w(function(a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Zs));
                    return c
                }),
                $s = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                wo = w(function(a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search($s));
                    return c
                }),
                $k = ra.Wa + "//" + Zb + "/metrika",
                al = $k + "/metrika_match.html",
                qb, bb, Il = (qb = {}, qb.am = "com.am", qb.tr = "com.tr", qb.ge = "com.ge", qb.il = "co.il", qb["\u0440\u0444"] = "ru", qb["xn--p1ai"] = "ru", qb["\u0443\u043a\u0440"] = "ua", qb["xn--j1amh"] = "ua", qb["\u0431\u0435\u043b"] = "by", qb["xn--90ais"] = "by", qb),
                bl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Jl = (bb = {}, bb.ka = "ge", bb.ro = "md", bb.tg = "tj", bb.tk = "tm", bb.et = "ee", bb.hy = "com.am", bb.he = "co.li", bb.ky = "kg", bb.uk = "ua", bb.be = "by", bb.tr = "com.tr", bb.kk = "kz", bb),
                Do = "ar:1:pv:1:v:" + ra.gb + ":vf:" + Rc.version,
                Eo = ra.Wa + "//" + Zb + "/watch/" + ra.Sg,
                cl = {},
                at = D("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                            var g, h;
                            void 0 === e && (e = B);
                            if (d && 0 < d.length) {
                                var k = Aa(a, "e", c),
                                    l = zd(c).url;
                                d = k({
                                    H: Ca((g = {}, g.ex = 1, g.ar = 1, g)),
                                    G: (h = {}, h["page-url"] = l || R(a).href, h.exp = d, h)
                                }, c);
                                return Kc(a, "exps.s", d, e, f)
                            }
                        },
                        b
                }),
                cf = [],
                bt = D("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Qa(a),
                        f = ha(a),
                        g = e.o("wasSynced"),
                        h = {
                            id: 3,
                            ca: "0"
                        };
                    return c && g && g.time + 864E5 > f(aa) ? K.resolve(g) : Aa(a, "f", h)({
                        H: Ca((b = {}, b.pv = 1, b)),
                        G: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(aa), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.C("wasSynced", k);
                        return k
                    })["catch"](C(a, "f.h"))
                }),
                ct = ka(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.ie.C("ymoo" + a.da,
                        a.Dg(jb)), a.zd && a.zd.destruct && a.zd.destruct())
                }),
                ji = u(T("settings.pcs"), la("1")),
                to = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                uo = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                ki = {
                    G: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                ii = {
                    id: 42822899,
                    ca: "0"
                },
                Se, Ao = (Se = {}, Se.s = "p", Se["8"] = "i", Se),
                xo = vb("csp", function(a, c) {
                    return Aa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                bh = "et w v z i u vf".split(" "),
                mo = {
                    L: "stamp",
                    M: "frameId",
                    $: "meta",
                    ff: "base",
                    Hf: "hasBase",
                    cf: "address",
                    Ig: "ua",
                    xe: "prev",
                    Uf: "namespace",
                    Pc: "keystrokes",
                    Nf: "isMeta",
                    Qc: "modifier",
                    yb: "pageWidth",
                    xb: "pageHeight",
                    xg: "startNode",
                    lf: "endNode",
                    Pg: "zoomFrom",
                    Rg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    Fa: "i",
                    Tc: "o",
                    n: "n",
                    r: "r",
                    wc: "ct",
                    Mb: "at",
                    Vf: "nm",
                    Wf: "ns",
                    se: "pa",
                    ve: "pr",
                    le: "nx",
                    Oa: "h",
                    Ma: "changes",
                    af: "a",
                    ef: "b",
                    sd: "c",
                    qe: "op"
                },
                no = ["attributes", "attrs"],
                Te = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.prototype.Aa = function(c) {
                        var b = je(c);
                        c = A(E(this.Sa, this),
                            b);
                        return rf(kb(this.l, A(function(d, e) {
                            var f;
                            return y({}, b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.Sa = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = kb(this.l, je(c.data)));
                        return b
                    };
                    a.prototype.Xa = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.gd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.l.JSON
                    };
                    return a
                }(),
                ko = w(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k +
                            2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return lo;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                go = fi(!1),
                fo = fi(!0),
                dt = {
                    Ij: "topics",
                    oj: "publicationDate",
                    lj: "pageUrlCanonical",
                    Tj: "updateDate",
                    ih: "authors",
                    fh: "articleInfo",
                    uj: "rubric",
                    pj: "publishersHeader",
                    Pa: "involvedTime",
                    kj: "pageTitle",
                    Ri: "maxScrolled",
                    hf: "chars",
                    gh: "articleMeta"
                },
                et = function() {
                    function a(c) {
                        this.l =
                            c;
                        this.Ub = u(ya, vd(function(b, d) {
                            b[d[1]] = d[0];
                            return b
                        }, {}))(dt)
                    }
                    a.prototype.Bg = function(c) {
                        var b, d = this.we(c.data);
                        return {
                            L: ha(this.l)(xg),
                            data: (b = {}, b[this.Ub[c.type]] = d, b)
                        }
                    };
                    a.prototype.we = function(c) {
                        var b = this;
                        return ea(c) ? A(E(this.we, this), c) : Ma(c) ? u(ya, vd(function(d, e) {
                            var f = e[0];
                            d[b.Ub[f] || f] = b.we(e[1]);
                            return d
                        }, {}))(c) : c
                    };
                    a.prototype.Sa = function(c) {
                        return he(this.l, If, this.Bg(c))(Ge(B))
                    };
                    a.prototype.Xa = function(c) {
                        return c[0]
                    };
                    a.prototype.gd = function(c) {
                        return [c]
                    };
                    a.prototype.Aa = function(c) {
                        var b =
                            this;
                        c = he(this.l, Zh, {
                            buffer: A(E(this.Bg, this), c)
                        });
                        return jc(this.l, c, 20, Fe)(Pe(function(d) {
                            d = Ff(b.l, d.slice(-4));
                            return jc(b.l, d, 20, Fe)
                        }))(Sg(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    a.prototype.isEnabled = function() {
                        return Yh(this.l)
                    };
                    return a
                }(),
                Qd, ch = (Qd = {}, Qd[1] = 500, Qd[2] = 500, Qd[3] = 0, Qd),
                dh = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Wd = !1;
                        this.Qb = {};
                        this.Cb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Yf: ["article"]
                        };
                        this.Te = (d = {}, d.Answer = 3,
                            d.Review = 2, d);
                        this.vh = w(function(f, g) {
                            Ab(e.l, e.da, "Warning: content has only " + g.chars + " chars. Required " + ch[g.type], g)
                        });
                        this.l = c;
                        this.root = Wb(c);
                        this.da = b
                    }
                    a.prototype.Na = function(c) {
                        return c.element
                    };
                    a.prototype.Af = function(c, b) {
                        var d = this,
                            e;
                        C(this.l, "P.s." + b, function() {
                            e = d.Qb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.nj = function(c) {
                        var b = y({}, c);
                        this.Wd && !b.id && H(c.type, [3, 2]) && (c = L(", ", A(T("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.mi(b.rc));
                        b.pageUrlCanonical ||
                            (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.ji());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ea = function(c) {
                        var b = this,
                            d = {},
                            e = this.Na(c);
                        if (!e) return null;
                        d.type = c.type;
                        z(function(g) {
                            d[g] = b.Af(c, g)
                        }, ba(this.Qb));
                        var f = ha(this.l);
                        d.stamp = f(xg);
                        d.element = c.element;
                        d.rc = e;
                        d = this.nj(d);
                        d.id = d.id ? nc(d.id) : 1;
                        d.update = function(g) {
                            return b.Na(c) ? b.Af(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.mi = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Ya(pc("h" + b,
                                c));
                            if (d) return d
                        }
                    };
                    a.prototype.ji = function() {
                        var c = pc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.Ff = function() {
                        return 1
                    };
                    a.prototype.Cc = function() {
                        return []
                    };
                    a.prototype.Nh = function() {
                        var c = this,
                            b = this.Cc(),
                            d = 1;
                        return N(function(e, f) {
                            var g = c.Ea({
                                element: f,
                                type: c.Ff(f)
                            }) || [];
                            ea(g) || (g = [g]);
                            g = N(function(h, k) {
                                var l = h.values,
                                    m = h.If;
                                k && k.chars > ch[k.type] && !H(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= ch[k.type] && c.vh(k.id, k);
                                return {
                                    values: l,
                                    If: m
                                }
                            }, {
                                values: [],
                                If: A(T("id"), e)
                            }, g).values;
                            return e.concat(A(function(h) {
                                var k;
                                h = y((k = {
                                    index: d,
                                    sg: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                dl = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Wd = !0;
                        d.jf = L(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Qb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" ===
                                typeof e.data.text ? e.data.text.length : Qb(this.Na(e)).length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.Bc(e.data, "author"));
                            f = f.concat(this.Bc(e.data.mainEntity, "author"));
                            return f.concat(this.Bc(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.ik && (f += " " + e.data.alternativeHeadline);
                            "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified ||
                                ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.Bc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.Na(e);
                            e = Y(Boolean, A(function(h) {
                                if (h = rb(f.l, Qb(h))) {
                                    var k = f.Bf(h);
                                    if (k) return N(function(l, m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(ub(this.jf, document.body === g ? document.documentElement :
                                g))));
                            return e.length && (e = e[0].itemListElement, ea(e)) ? Y(Boolean, A(function(h) {
                                return Ma(h) && h.item && Ma(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.Bc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ea(b[d]) ? b[d] : [b[d]];
                        b = Y(O, A(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return A(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Na = function(b) {
                        var d =
                            b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.sf(f));
                        !b && e && "string" === typeof e && (b = this.sf(e));
                        b || (b = e = d.parentNode, !ac("head", this.l, d) && e && 0 !== Qb(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.sf = function(b) {
                        try {
                            var d = Fc(this.l, b).hash;
                            if (d) {
                                var e = pc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.te = function(b) {
                        return this.Te[b["@type"]] || 1
                    };
                    c.prototype.Ea = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = rb(this.l, Qb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ea(b.data))) return null;
                        var f = this.Bf(b.data);
                        if (f) return A(function(h) {
                            if (!H(h["@type"], d.Cb["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.te(h)
                            };
                            return a.prototype.Ea.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = lc(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(h) {
                            var k;
                            if (!h || !H(h["@type"], d.Cb["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.te(h),
                                data: y((k = {}, k.parentItem = g, k), h)
                            };
                            return a.prototype.Ea.call(d, h)
                        }, b)) : H(b.data["@type"], this.Cb["schema.org"]) ? a.prototype.Ea.call(this, y(b, {
                            type: this.te(b.data)
                        })) : null
                    };
                    c.prototype.Cc = function() {
                        return ub(this.jf, this.root)
                    };
                    c.prototype.Bf = function(b) {
                        return ea(b) && b || b && ea(b["@graph"]) && b["@graph"]
                    };
                    return c
                }(dh),
                eh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Wd = !0;
                        d.Qj = pa("exec", new RegExp("schema.org\\/(" + L("|", ba(d.Te)) + ")$"));
                        d.Qb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = ab(this.l, e, "identifier");
                            return f ? Ya(f) : (f = ab(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = ab(this.l, e, g[h]);
                                if (k) {
                                    f = Ya(k).length;
                                    break
                                }
                            }
                            e = Qb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Ld(this.l, e.element, "about");
                            return A(function(h) {
                                var k = {
                                    name: Ya(h)
                                };
                                if (g = ab(f.l, h, "name")) k.name = Ya(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = pc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = pc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? A(function(g) {
                                return {
                                    name: Ya(ab(f.l, g, "name")),
                                    position: Ya(ab(f.l, g, "position"))
                                }
                            }, Ld(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = ab(this.l, e.element, "dateModified")) ? kk(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = ab(this.l, e.element, "datePublished")) ?
                                kk(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Ld(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Ya(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = ab(this.l, g, "headline");
                            h && (f += Ya(h));
                            (h = ab(this.l, g, "alternativeHeadline")) && (f += " " + Ya(h));
                            "" === f && ((h = ab(this.l, g, "name")) || (h = ab(this.l, g, "itemReviewed")), h && (f += Ya(h)));
                            3 === e.type && (e = ac('[itemtype$="schema.org/Question"]', this.l, g)) && (e = ab(this.l, e, "text")) && (f += Ya(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e =
                                Ld(this.l, e.element, "author");
                            return A(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = ab(f.l, g, "name")) && (k.name = Ya(h));
                                k.name || (k.name = g.getAttribute("content") || Qb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.Ff = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Qj(b)) ? this.Te[b[1]] : 1
                    };
                    c.prototype.Ea = function(b) {
                        return b.element && Qb(b.element).length ? a.prototype.Ea.call(this, b) : null
                    };
                    c.prototype.Cc =
                        function() {
                            var b = L(",", A(function(d) {
                                return '[itemtype$="schema.org/' + d + '"]'
                            }, this.Cb["schema.org"]));
                            return ub(b, this.root)
                        };
                    return c
                }(dh),
                el = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Qb = (e = {}, e.chars = function(g) {
                                g = this.Na(g);
                                return Qb(g).length
                            }, e.authors = function(g) {
                                return this.Kd(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.Hc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.Hc(g.data.modified_time)
                            }, e.publicationDate = function(g) {
                                return this.Hc(g.data.published_time)
                            },
                            e.pageUrlCanonical = function(g) {
                                return this.Hc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.Kd(g.data.section)
                            }, e.topics = function(g) {
                                return this.Kd(g.data.tag)
                            }, e);
                        f.Fh = new RegExp("^(og:)?((" + L("|", f.Cb.Yf) + "):)?");
                        return f
                    }
                    Ja(c, a);
                    c.prototype.Kd = function(b) {
                        var d;
                        return b ? ea(b) ? A(function(e) {
                            var f;
                            return f = {}, f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.Hc = function(b) {
                        return ea(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.Cc = function() {
                        var b = ub('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.$h = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Na(b);
                        e = ub("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) z(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Fh, ""),
                                        l = Ya(h);
                                    f[k] ? ea(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                le(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return H(f.type, this.Cb.Yf) ? y(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Na = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ea = function(b) {
                        return (b = this.$h(b)) ? a.prototype.Ea.call(this, b) : null
                    };
                    return c
                }(dh),
                fl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                ft = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                gt = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Nc = !1;
                        this.$ = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Pa = this.Sf = 0;
                        this.je = this.ag = "";
                        this.ha = [];
                        this.Ie = this.Ua = 0;
                        this.Hb = {
                            Oa: 0,
                            md: 0
                        };
                        this.buffer = [];
                        this.Tg = ft;
                        this.flush = function() {
                            g.Ie = U(g.l, g.flush, 2500);
                            var h = g.Od();
                            if (g.buffer.length || h) {
                                var k = Bd(g.buffer);
                                h && k.push(h);
                                g.ag = g.je;
                                g.qa.Aa(k)(Ra(C(g.l, "p.b.st"), function(l) {
                                    l && g.bc(l)
                                }))
                            }
                        };
                        this.bc = e;
                        this.qa = d;
                        this.jc = E(this.jc, this);
                        this.Od = E(this.Od, this);
                        this.flush = E(this.flush, this);
                        this.l = c;
                        this.da = f;
                        this.Bb = b;
                        this.ce = "pai" + b.id;
                        this.Rb();
                        this.pf = ja(this.l);
                        this.time = ha(this.l);
                        this.Jg();
                        this.Rd = G(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Ie = U(this.l, this.flush,
                            2500);
                        if (!this.Nc) {
                            this.Cj();
                            var b = this.Rd.o(this.ce, []),
                                d = !b.length;
                            b.push(E(this.Ni, this));
                            this.Rd.Ta(this.ce, b);
                            d && this.jg();
                            var e = function(f, g) {
                                return (f.Fe || 0) <= (g.Fe || 0) ? g : f
                            };
                            ja(this.l).D(this.l, ["click"], function(f) {
                                if (c.ha.length) {
                                    f = Ri(f);
                                    var g = R(c.l).hostname,
                                        h;
                                    if (h = f) h = se(f.hostname) === se(g);
                                    h && (f = N(e, c.ha[0], c.ha).id, g = Ib(c.l), Tc(c.l, c.da.split(":")[0]).C("pai", f + "-" + g))
                                }
                            });
                            this.jc({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Rj();
                        this.Nc = !0;
                        this.flush();
                        ma(this.l, this.Ie)
                    };
                    a.prototype.Pf = function(c) {
                        return ac("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.jg = function() {
                        var c = this;
                        C(this.l, "p.ic" + this.Bb.id, function() {
                            if (!c.Nc) {
                                var b = c.Rd.o(c.ce),
                                    d = c.Bb.Nh();
                                z(function(e) {
                                    var f = A(function(g) {
                                        return y({}, g)
                                    }, d);
                                    S(e) && e(f)
                                }, b);
                                c.Ua = U(c.l, E(c.jg, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Ni = function(c) {
                        this.Nc || (this.Sj(c), this.Uj(), this.ph())
                    };
                    a.prototype.jc = function(c) {
                        var b = this;
                        C(this.l, "p.ec." + this.Bb.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f =
                                "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, wc(b.l)];
                                H(e, g) && b.Rb()
                            }("resize" === d || f) && b.Jg();
                            d = b.time(aa);
                            var h = Math.min(d - b.Sf, 5E3);
                            b.Pa += Math.round(h);
                            b.Sf = d;
                            if (b.$ && b.scroll && b.Hb) {
                                var k = b.Hb.Oa * b.Hb.md;
                                b.ha = A(function(l) {
                                    var m = y({}, l),
                                        p = b.$[m.id],
                                        q = Gc(l.rc);
                                    if (!p || b.Pf(m.element) || !q) return m;
                                    l = b.l.Math;
                                    p = l.max((b.scroll.y + b.Hb.Oa - p.y) / p.height, 0);
                                    var r = q.height * q.width;
                                    q = yj(b.l, q, b.Hb);
                                    m.Fe = q / k;
                                    m.visibility = q / r;
                                    if (.9 <= m.visibility || .1 <= m.Fe) m.involvedTime +=
                                        h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.ha);
                                gb(b.l, {
                                    name: "publishers",
                                    da: b.da,
                                    data: {
                                        Pa: b.Pa,
                                        ha: b.ha
                                    }
                                })
                            }
                        })()
                    };
                    a.prototype.Sj = function(c) {
                        var b = A(function(d) {
                            return d.id
                        }, this.ha);
                        this.ha = this.ha.concat(Y(function(d) {
                            return !H(d.id, b)
                        }, c))
                    };
                    a.prototype.Jg = function() {
                        var c = De(this.l) || Pc(this.l);
                        this.Hb = {
                            md: c[0],
                            Oa: c[1]
                        }
                    };
                    a.prototype.Uj = function() {
                        var c = this;
                        C(this.l, "p.um." + this.Bb.id, function() {
                            var b = [];
                            c.Rb();
                            c.$ = N(function(d, e) {
                                var f;
                                if (c.Pf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.rc && (f = Gc(e.rc)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.ha);
                            z(function(d) {
                                d = ue(c.l)(d, c.ha);
                                c.ha.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Od = function() {
                        var c, b, d = A(v(this.$, n), ba(this.$));
                        return d.length && (this.je = kb(this.l, d), this.ag !== this.je) ?
                            (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Pa, b), c) : null
                    };
                    a.prototype.ph = function() {
                        var c = this;
                        if (this.ha.length) {
                            var b = A(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.Tg);
                                d.sg = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, Y(function(d) {
                                return !d.sg
                            }, this.ha));
                            b.length && (this.buffer = this.buffer.concat(b), Ab(this.l, this.da, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.Cj = function() {
                        this.pf.D(this.l, fl, this.jc)
                    };
                    a.prototype.Rj = function() {
                        this.pf.fc(this.l, fl, this.jc)
                    };
                    a.prototype.Rb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Rd = {};
            dl && (Rd.json_ld = dl);
            eh && (Rd.schema = eh, Rd.microdata = eh);
            el && (Rd.opengraph = el);
            var ht = D("p.p", function(a, c) {
                    function b(l) {
                        var m = y({}, k);
                        m.Y.fa = l;
                        return e(m, c)["catch"](C(a, "s.ww.p"))
                    }
                    if (!Ea("querySelectorAll", a.document.querySelectorAll)) return K.resolve();
                    var d = [new Te(a)];
                    d.unshift(new et(a));
                    var e = Aa(a, "p", c),
                        f = db(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = Ca();
                    var g = Tc(a, c.id),
                        h = g.o("pai");
                    h && (g.Pb("pai"), d.C("pai", h));
                    var k = {
                        G: {},
                        H: d,
                        Ra: {
                            Xd: !(f instanceof Te)
                        },
                        Y: {}
                    };
                    return qa(c, C(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Tj(c) ? "microdata" : l;
                            var m = Rd[l];
                            if (m && f) {
                                var p = M(c);
                                m = new m(a, p);
                                (new gt(a, m, f, b, p)).start();
                                Ab(a, p, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                it = function() {
                    function a(c, b) {
                        this.l = c;
                        this.Yh = b
                    }
                    a.prototype.Aa =
                        function(c) {
                            return rf(lc(E(this.Sa, this), c))
                        };
                    a.prototype.Sa = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Yh(this.l, b && b.type, c.type);
                        f && (e = lc(function(g) {
                            return g({
                                l: d.l,
                                sa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Xa = function(c) {
                        return c.length
                    };
                    a.prototype.gd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                gl = function() {
                    function a(c, b, d) {
                        this.kf = 0;
                        this.ue = 1;
                        this.od = 5E3;
                        this.l = c;
                        this.qa = b;
                        this.bc = d
                    }
                    a.prototype.fd = function() {
                        this.kf = U(this.l, u(E(this.flush, this), E(this.fd, this)), this.od,
                            "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.bc(c, b || [], this.ue);
                        this.ue += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                Ym = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.Ug = 7500;
                        b.od = 3E4;
                        b.fd();
                        return b
                    }
                    Ja(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.qa.Sa(b, d);
                        Na(this.buffer, e);
                        this.qa.Xa(this.buffer) > this.Ug && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(gl),
                qn =
                /opera mini/i,
                hl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                fn = ["email", "tel"],
                on = /ym-hide-content/,
                pn = /ym-show-content/,
                ln = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                mn = [65, 90],
                nn = [97, 122],
                jn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                gn = new RegExp("(" + L("|", hl) + ")", "i"),
                lk = ["password", "passwd", "pswd"],
                hn = new RegExp("(" + L("|", hl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Va = "metrikaId_" + Math.random(),
                rc = {
                    yd: 0
                },
                fr = w(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                cr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                jt = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        wk: new RegExp("(" + L("|", a) + ")", "i"),
                        Gk: new RegExp("(" + L("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        rk: /ym-record-keys/i,
                        Zi: "\u2022",
                        Fk: 88
                    }
                }(),
                qk = fb(v(jt.Zi, O)),
                id = !0,
                Lg = "",
                Mg = !1,
                Ng = !0,
                Og = !1,
                dn = ka(function(a, c) {
                    var b = F([a, "efv." + c.event], C);
                    c.N = A(u(O, b), c.N);
                    return c
                }),
                il = w(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(xf), b.push(jr), b.push(kr));
                    a.document.addEventListener ? c.push(ok) : (b.push(nk), d.push(ok));
                    c = wa([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [B]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [B]
                    }, {
                        event: "click",
                        N: [Me]
                    }, {
                        event: "dblclick",
                        N: [Me]
                    }, {
                        event: "mousedown",
                        N: [Me]
                    }, {
                        event: "mouseup",
                        N: [mr]
                    }, {
                        event: "keydown",
                        N: [nr]
                    }, {
                        event: "keypress",
                        N: [or]
                    }, {
                        event: "copy",
                        N: [sk]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [Sh]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [xf]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        N: [nk]
                    }, {
                        event: "change",
                        N: [pk]
                    }, {
                        event: "submit",
                        N: [uk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [pk]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [uk]
                    }]);
                    return cn(a, c)
                }),
                an =
                w(function(a) {
                    return wa(wc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [pr]
                    }] : [])
                }),
                kt = ["submit", "beforeunload", "unload"],
                lt = w(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                mt = v(il, function(a, c, b, d) {
                    return lt(c, a)[b + ":" + d] || []
                }),
                bn = /^\s*function submit\(\)/,
                nt = D("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Ch || !c.Ib)) {
                        var d = G(a),
                            e = !1;
                        b = d.o("hitParam", {});
                        var f = M(c);
                        b[f] && (d = d.o("counters", {}), e = !(!$e(c.ca) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(B);
                    b = new it(a,
                        mt);
                    return Xm(a, c, b, il, kt)
                }),
                fh, jl = (fh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Qe = 0;
                        d.Kb = 0;
                        d.Pe = 0;
                        d.buffer = [];
                        d.od = 2E3;
                        d.ba = fd(b);
                        d.fd();
                        d.Pe = f;
                        return d
                    }
                    Ja(c, a);
                    c.prototype.yf = function(b) {
                        return Y(Boolean, this.ba.O("ag", b))
                    };
                    c.prototype.xf = function(b, d) {
                        var e = this;
                        b(Ra(C(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Aj = function(b, d) {
                        var e = this;
                        ma(this.l, this.kf);
                        var f = Math.ceil(this.qa.Xa(d) / 63E4),
                            g = this.qa.gd(d, f);
                        z(function(h, k) {
                            var l, m = y({}, b,
                                (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.qa.Aa([m], !1);
                            e.xf(l, [m])
                        }, g);
                        this.fd()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.ba.O("se", d);
                        return a.prototype.send.call(this, b, d).then(O, function() {
                            e.ba.O("see", d)
                        })
                    };
                    c.zf = function(b, d, e, f, g) {
                        c.qd["" + b + d] || (this.qd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.qd[d]
                    };
                    c.prototype.Li = function() {
                        return this.Pe && this.Qe >= this.Pe
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Li()) {
                            this.ba.O("p", b);
                            var e = this.qa.Sa(b),
                                f = this.qa.Xa(e);
                            7E5 <
                                f ? this.Aj(b, e) : (e = this.yf(this.buffer.concat([b])), e = N(function(g, h) {
                                    return g + d.qa.Xa(d.qa.Sa(h))
                                }, 0, e), this.Kb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Kb += f)
                        }
                    };
                    c.prototype.D = function(b, d) {
                        this.ba.D([b], d)
                    };
                    c.prototype.na = function(b, d) {
                        this.ba.na([b], d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.yf(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.Qe += this.Kb;
                            this.Kb = 0;
                            var d = this.qa.Aa(b);
                            this.xf(d, b)
                        }
                    };
                    return c
                }(gl), fh.qd = {}, fh),
                Za = function() {
                    function a(c, b, d) {
                        this.Pi = "wv2.c";
                        this.Wb = [];
                        this.ja = [];
                        this.l = c;
                        this.K = vf(c, this, d, this.Pi);
                        this.F = b;
                        this.ib = this.F.bi();
                        this.start = this.K.J(this.start, "st");
                        this.stop = this.K.J(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Wb = A(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = E(c.K.J(b[1], d[0]), c);
                            return c.ib.D(e || c.l, d, b)
                        }, this.ja)
                    };
                    a.prototype.stop = function() {
                        z(ia, this.Wb)
                    };
                    a.prototype.Z = function(c) {
                        return this.F.ua().Z(c)
                    };
                    return a
                }(),
                Vm = ["checkbox", "radio"],
                Wm = /pwd|value|password/i,
                gh = T("location.href"),
                ot = function(a) {
                    function c(b,
                        d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ta = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.me = d.K.J(d.me, "o");
                        d.Ad = d.K.J(d.Ad, "io");
                        d.pd = d.K.J(d.pd, "ao");
                        d.Ae = d.K.J(d.Ae, "a");
                        d.ye = d.K.J(d.ye, "at");
                        d.Be = d.K.J(d.Be, "r");
                        d.ze = d.K.J(d.ze, "c");
                        d.ya = new b.MutationObserver(d.me);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.ya.disconnect()
                    };
                    c.prototype.pd = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.ta.elements.indexOf(d); - 1 === e && (e = this.ta.elements.push(d) - 1, this.ta.attributes[e] = {});
                        this.ta.attributes[e] || (this.ta.attributes[e] = {});
                        e = this.ta.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = ce(this.l, d, b, f, this.F.Fc()).value
                    };
                    c.prototype.Ad = function(b) {
                        function d(k) {
                            var l = Mb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                Hd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        z(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.pd(k);
                                    var x = d(q);
                                    x.Hd[l] || (x.Hd[l] = ce(e.l, q, l, p, e.F.Fc()).value);
                                    break;
                                case "childList":
                                    m && z(function(I) {
                                        x = d(I);
                                        x.uf || y(x, {
                                            uf: q,
                                            Sh: r ? r : void 0,
                                            Th: t ? t : void 0
                                        })
                                    }, sa(m));
                                    break;
                                case "characterData":
                                    x = d(q), x.wf || (x.wf = p)
                            }
                        }, b);
                        var h = this.F.ua();
                        z(function(k, l) {
                            h.Je(k, g[l])
                        }, f)
                    };
                    c.prototype.me = function(b) {
                        var d = this;
                        if (gh(this.l)) {
                            var e = this.F.L();
                            this.Ad(b);
                            z(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h &&
                                            h.length && d.Be(sa(h), e);
                                        g && g.length && d.Ae(sa(g), e);
                                        break;
                                    case "characterData":
                                        d.ze(k, e)
                                }
                            }, b);
                            this.ye(e)
                        } else this.stop()
                    };
                    c.prototype.ye = function(b) {
                        var d = this;
                        z(function(e, f) {
                            var g = d.Ec();
                            d.F.X("mutation", {
                                index: g,
                                attributes: d.ta.attributes[f],
                                target: d.Z(e)
                            }, "ac", b)
                        }, this.ta.elements);
                        this.ta.elements = [];
                        this.ta.attributes = []
                    };
                    c.prototype.Ae = function(b, d) {
                        var e = this,
                            f = this.Ec();
                        this.F.ua().Jc({
                            ma: b,
                            ed: function(g) {
                                g = A(function(h) {
                                    h = y({}, h);
                                    delete h.node;
                                    return h
                                }, g);
                                e.F.X("mutation", {
                                        index: f,
                                        ma: g
                                    },
                                    "ad", d)
                            }
                        })
                    };
                    c.prototype.Be = function(b, d) {
                        var e = this,
                            f = this.Ec(),
                            g = this.F.ua(),
                            h = A(function(k) {
                                var l = g.removeNode(k);
                                Hi(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.F.X("mutation", {
                            index: f,
                            ma: h
                        }, "re", d)
                    };
                    c.prototype.ze = function(b, d) {
                        var e = this.Ec();
                        this.F.X("mutation", {
                            value: b.textContent,
                            target: this.Z(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.Ec = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Za),
                pt = function() {
                    function a(c, b) {
                        var d = this;
                        this.Ac = [];
                        this.jb = [];
                        this.ke = 1;
                        this.Ua = 0;
                        this.ub = {};
                        this.Lc = {};
                        this.Td = function(f) {
                            return d.jb.length ? H(f, d.jb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Z(f),
                                h = Ia(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Td(h) && d.ba.O(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.ob = function(f) {
                            var g = Ia(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                h || (h = d.ke, f.__ym_indexer = h, d.ke += 1, g = "NA:" + g.toLowerCase(), d.Td(g) && d.ba.O(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }));
                                return h
                            }
                            return null
                        };
                        this.l = c;
                        var e = vf(c, this, "i");
                        this.ba = fd(c);
                        this.options = b;
                        this.start = e.J(this.start, "st");
                        this.stop = e.J(this.stop, "sp");
                        this.Z =
                            e.J(this.Z, "i");
                        this.Je = e.J(this.Je, "o");
                        this.Jc = e.J(this.Jc, "a");
                        this.removeNode = e.J(this.removeNode, "r");
                        this.ga = e.J(this.ga, "s")
                    }
                    a.prototype.Je = function(c, b) {
                        var d = this.ob(c);
                        Ta(d) || (this.Lc[d] && this.Z(c), this.Lc[d] = b)
                    };
                    a.prototype.D = function(c, b, d) {
                        c = "" + b + c;
                        this.jb.push(c);
                        this.Td(c) || this.jb.push(c);
                        this.ba.D([c], d)
                    };
                    a.prototype.na = function(c, b, d) {
                        var e = "" + b + c;
                        this.jb = Y(function(f) {
                            return f !== e
                        }, this.jb);
                        this.ba.na([e], d)
                    };
                    a.prototype.start = function() {
                        this.Ua = U(this.l, u(E(this.ga, this, !1), this.start),
                            50, "i.s")
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ma(this.l, this.Ua);
                        this.Ac = []
                    };
                    a.prototype.Jc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                ed: c.ed,
                                result: [],
                                Kc: 0,
                                ma: d
                            };
                        this.Ac.push(f);
                        z(function(g) {
                            Hi(b.l, g, function(h) {
                                var k = b.ob(h);
                                Ta(k) || (d.push(h), b.ub[k] && b.Z(h), b.ub[k] = {
                                    node: h,
                                    event: f,
                                    Oj: e
                                }, e += 1)
                            })
                        }, c.ma)
                    };
                    a.prototype.Z = function(c) {
                        if (c === this.l) return 0;
                        var b = this.ob(c),
                            d = this.ub[b],
                            e = this.Wh(b),
                            f = e.uf,
                            g = e.Hd,
                            h = e.wf,
                            k = e.Sh,
                            l = e.Th;
                        if (d) {
                            e = d.event;
                            d = d.Oj;
                            var m = this.l.document.documentElement === c;
                            k =
                                k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ob(k) : null;
                            p = !m && p ? this.ob(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.ob(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ia(c));
                            if (V(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    xe: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Cf(c)) {
                                    if (h = Sm(c, h), g.attributes = {}, g.content = h)
                                        if (c = gd(m, c)) g.content = "" !== h.trim() ? kn(m, h) : h, g.hidden = c
                                } else h = Tm(m, c, k, q, r), m = h.rb,
                                    g.attributes = h.hh, m && (g.hidden = m), c.namespaceURI && oc(c.namespaceURI, "svg") && (g.Uf = c.namespaceURI);
                                c = g
                            }
                            if (V(c)) return;
                            delete this.ub[b];
                            e.result[d] = c;
                            e.Kc += 1;
                            e.ma.length === e.Kc && e.ed(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.ga(!0)
                    };
                    a.prototype.ga = function(c) {
                        var b = this;
                        if (gh(this.l)) {
                            var d = ba(this.ub);
                            d = A(function(e) {
                                return b.ub[e].node
                            }, d);
                            d = ic(d, this.Z);
                            c = c ? Nj(B) : Lj(this.l, 20);
                            d(c);
                            this.Ac = Y(function(e) {
                                return e.Kc !== e.result.length
                            }, this.Ac)
                        }
                    };
                    a.prototype.Wh = function(c) {
                        if (Ta(c)) return {};
                        var b = this.Lc[c];
                        return b ? (delete this.Lc[c], b) : {}
                    };
                    return a
                }(),
                qt = ["input", "change", "keyup", "paste", "cut"],
                rt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.Dd = !1;
                        b.Uc = b.K.J(b.Uc, "ii");
                        b.Vc = b.K.J(b.Vc, "ir");
                        b.$c = b.K.J(b.$c, "ri");
                        b.ld = b.K.J(b.ld, "ur");
                        b.Sd = b.K.J(b.Sd, "ce");
                        b.Ic = b.K.J(b.Ic, "vc");
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.F.ua();
                        this.Dd = this.qh();
                        z(function(e) {
                            e = e.toLowerCase();
                            d.D(e, "NA:", E(b.Uc, b));
                            d.D(e, "NR:", E(b.Vc, b))
                        }, Bf);
                        this.Wb = [this.ib.D(this.l.document,
                            qt, E(this.Sd, this)), function() {
                            z(function(e) {
                                e = e.toLowerCase();
                                d.na(e, "NA:", b.Uc);
                                d.na(e, "NR:", b.Vc)
                            }, Bf);
                            z(b.ld, ba(b.inputs))
                        }]
                    };
                    c.prototype.ld = function(b) {
                        if (this.Dd) {
                            var d = this.inputs[b];
                            d && (b = d.ij, d = d.element, b && this.l.Object.defineProperty(d, this.Gc(d), b))
                        }
                    };
                    c.prototype.Vc = function(b) {
                        b && this.ld(b.data.id)
                    };
                    c.prototype.Uc = function(b) {
                        b && (b = b.data, this.$c(b.node, b.id))
                    };
                    c.prototype.Gc = function(b) {
                        return Ce(b) ? "checked" : "value"
                    };
                    c.prototype.Sd = function(b) {
                        if (b = b.target) {
                            var d = this.Gc(b);
                            this.Ic(b[d],
                                b)
                        }
                    };
                    c.prototype.Ic = function(b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && (f = this.$c(f, e), !f)) return;
                        e = f.sh;
                        var g = f.value,
                            h = this.Gc(d);
                        b && !H(typeof b, ["string", "boolean", "number"]) || b === g || (g = ce(this.l, d, h, b, this.F.Fc()).value, e ? this.F.X("event", {
                            target: this.Z(d),
                            checked: !!b
                        }, "change") : (e = de(d), h = zf(d), this.F.X("event", {
                            value: g,
                            hidden: h && !e,
                            target: this.Z(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.$c = function(b, d) {
                        var e = this;
                        if (!tf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Ce(b),
                            g = this.Gc(b),
                            h = {
                                element: b,
                                sh: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.Dd && Hb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = y({}, k, l);
                            if (Ea("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, y({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.Ic(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.ij = m
                            }
                        });
                        return h
                    };
                    c.prototype.qh = function() {
                        var b = !0,
                            d = $a(this.l)("input");
                        try {
                            d = $a(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = y({}, e, f);
                            this.l.Object.defineProperty(d, "value", y({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(Za),
                st = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.bb = {
                            width: 0,
                            height: 0,
                            xb: 0,
                            yb: 0,
                            orientation: 0
                        };
                        b.ja.push([
                            ["resize"], b.gj
                        ]);
                        b.ja.push([
                            ["orientationchange"], b.ej
                        ]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.mg()
                    };
                    c.prototype.gj = function() {
                        var b = this.Qd();
                        this.yi(b) && (this.bb = b, this.ng(b))
                    };
                    c.prototype.ej = function() {
                        var b = this.Qd();
                        this.bb.orientation !== b.orientation && (this.bb = b, this.yj(b))
                    };
                    c.prototype.Qf = function(b) {
                        return !b.height ||
                            !b.width || !b.yb || !b.xb
                    };
                    c.prototype.yi = function(b) {
                        return b.height !== this.bb.height || b.width !== this.bb.width
                    };
                    c.prototype.Qd = function() {
                        var b = this.F.mb(),
                            d = Pc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Pd();
                        return {
                            width: e,
                            height: d,
                            yb: b ? b.scrollWidth : 0,
                            xb: b ? b.scrollHeight : 0,
                            orientation: this.F.mb().gi()
                        }
                    };
                    c.prototype.yj = function(b) {
                        var d;
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.ng = function(b, d) {
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            yb: b.yb,
                            xb: b.xb
                        }, "resize", d)
                    };
                    c.prototype.mg = function() {
                        var b = this.Qd();
                        this.Qf(b) ? U(this.l, E(this.mg, this), 300) : (this.Qf(this.bb) && (this.bb = b), this.ng(b, 0))
                    };
                    return c
                }(Za),
                Ue = function() {
                    function a(c) {
                        this.index = 0;
                        this.Eb = {};
                        this.l = c
                    }
                    a.prototype.vc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ha(this.l),
                            f = this.index;
                        this.index += 1;
                        this.Eb[f] = {
                            Ua: 0,
                            ac: !1,
                            Qh: c,
                            Lb: [],
                            de: e(aa)
                        };
                        var g = this;
                        return function() {
                            var h = Ba(arguments),
                                k = d.kb && !g.Eb[f].ac,
                                l = g.Eb[f];
                            ma(g.l, l.Ua);
                            l.Lb = h;
                            l.ac = !0;
                            var m = e(aa);
                            if (k || m - l.de >= b) c.apply(void 0, h), l.de = m;
                            l.Ua = U(g.l, function() {
                                k || (c.apply(void 0, h), l.de = e(aa));
                                l.ac = !1;
                                l.Lb = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        z(function(b) {
                            var d = c.Eb[b],
                                e = d.Ua,
                                f = d.Qh,
                                g = d.Lb;
                            d.ac && (c.Eb[b].ac = !1, f.apply(void 0, g), ma(c.l, e))
                        }, ba(this.Eb))
                    };
                    return a
                }(),
                tt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Cg = [];
                        d.Ye = {
                            x: 0,
                            y: 0
                        };
                        d.Ba = new Ue(b);
                        d.Yc = d.K.J(d.Yc, "o");
                        d.ja.push([
                            ["scroll"], d.hj
                        ]);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.X("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.hj = function(b) {
                        if (this.F.mb().Kf()) this.Yc(b);
                        else {
                            var d = b.target,
                                e = Y(function(f) {
                                    return f[0] === d
                                }, this.Cg).pop();
                            e ? e = e[1] : (e = this.Ba.vc(E(this.Yc, this), 100, {
                                kb: !0
                            }), this.Cg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Yc = function(b) {
                        var d = this.F.mb().Pd();
                        b = b.target;
                        var e = this.Rb(b);
                        d = La(la(b), [d, this.l, this.l.document]);
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ye.x === f && this.Ye.y === e) return;
                            this.Ye = {
                                x: f,
                                y: e
                            }
                        }
                        this.F.X("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Z(b)
                        }, "scroll")
                    };
                    c.prototype.Rb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.F.mb().Pd(), b) ? H(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop ||
                                0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Za),
                ut = ["mousemove", "mousedown", "mouseup", "click"],
                vt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ja.push([ut, d.dj]);
                        d.Ba = new Ue(b);
                        d.Sc = d.K.J(d.Sc, "n");
                        d.Gj = d.K.J(d.Ba.vc(E(d.Sc, d), 100), "t");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.dj = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Gj(b) : this.Sc(b)
                    };
                    c.prototype.Sc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 ===
                            e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.F.X("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Z(b)
                        }, d)
                    };
                    return c
                }(Za),
                wt = ["focus", "blur"],
                xt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ja.push([wt, b.Rh]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.Rh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.F.X("event", {
                            target: this.Z(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(Za),
                yt = w(function(a) {
                    var c = Ka(a.getSelection, "getSelection");
                    return c ? E(c, a) :
                        B
                }),
                zt = u(yt, ia),
                At = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Bt = /text|search|password|tel|url/,
                Ct = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Ud = !1;
                        b.ja.push([At, b.vi]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.vi = function(b) {
                        var d = this.F,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.ki(b) : this.ii()) && e.start !== e.end ? (this.Ud = !0, d.X("event", e, "selection")) : this.Ud && (this.Ud = !1, d.X("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.ii = function() {
                        var b =
                            zt(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!V(d) && !V(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                xg: d,
                                lf: e
                            }
                        }
                    };
                    c.prototype.ki = function(b) {
                        if (Bt.test(b.type || "")) {
                            var d = this.Z(b);
                            if (!V(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Za),
                Dt = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Et = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        V(b.l.document.hidden) ?
                            V(b.l.document.msHidden) ? V(b.l.document.webkitHidden) || (b.visibility = {
                                hidden: "webkitHidden",
                                event: "webkitvisibilitychange"
                            }) : b.visibility = {
                                hidden: "msHidden",
                                event: "msvisibilitychange"
                            } : b.visibility = {
                                hidden: "hidden",
                                event: "visibilitychange"
                            };
                        b.handleEvent = b.K.J(b.handleEvent, "e");
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        this.Wb = [this.ib.D(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], E(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.F.X("event", {}, Dt[this.visibility ?
                            this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Za),
                Ft = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Gt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.jd = {};
                        d.scrolling = !1;
                        d.kg = 0;
                        d.ja.push([
                            ["scroll"], d.wj, d.l.document
                        ]);
                        d.ja.push([Ft, d.Kj, d.l.document]);
                        d.Ba = new Ue(b);
                        d.Vb = d.K.J(d.Vb, "nh");
                        d.Hj = d.K.J(d.Ba.vc(d.Vb, d.F.mb().Kf() ? 0 : 50, {
                            kb: !0
                        }), "th");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.wj = function() {
                        var b = this;
                        this.scrolling = !0;
                        ma(this.l, this.kg);
                        this.kg = U(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Kj = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && z(function(f) {
                            var g = d.ni(f);
                            f.__ym_touch_id = g;
                            e && delete d.jd[f.identifier]
                        }, sa(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Vb(b) : this.Hj(b, this.F.L()) : this.Vb(b)
                    };
                    c.prototype.ni = function(b) {
                        this.jd[b.identifier] || (this.jd[b.identifier] = Lh());
                        return this.jd[b.identifier]
                    };
                    c.prototype.Vb = function(b, d) {
                        void 0 ===
                            d && (d = this.F.L());
                        var e = b.type,
                            f = A(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, sa(b.changedTouches));
                        0 < f.length && this.F.X("event", {
                            touches: f,
                            target: this.Z(b.target)
                        }, e, d)
                    };
                    return c
                }(Za),
                Ht = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ja.push([
                            ["load"], b.cj, b.l.document
                        ]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.cj = function(b) {
                        b = b.target;
                        "IMG" === Ia(b) && b.getAttribute("srcset") && this.F.X("event", {
                            target: this.Z(b),
                            value: b.currentSrc
                        }, "srcset")
                    };
                    return c
                }(Za),
                It = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Qg = 1;
                        d.Ba = new Ue(b);
                        d.nc = d.K.J(d.nc, "z");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        if (this.Gf()) {
                            a.prototype.start.call(this);
                            this.nc();
                            var b = this.ib.D(n(this.l, "visualViewport"), ["resize"], this.Ba.vc(this.nc, 10));
                            this.Wb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.nc = function() {
                        var b = this.Gf();
                        b && b !== this.Qg && (this.Qg = b, this.zj(b))
                    };
                    c.prototype.Gf = function() {
                        var b = De(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.zj = function(b) {
                        var d = Uf(this.l);
                        this.F.X("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(Za),
                Sd, Ve = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                kl = {
                    "super": 1,
                    nk: 2,
                    alt: 3,
                    shift: 4,
                    Pk: 5,
                    "delete": 6,
                    jk: 6
                },
                Jt = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                ll = (Sd = {}, Sd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Sd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Sd.Ti = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Sd),
                Kt = /flash/,
                Lt = /ym-disable-keys/,
                Mt = /^&#/,
                Nt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.pb = {};
                        d.Qa = 0;
                        d.Ga = [];
                        d.Ag = [];
                        d.yc = 0;
                        d.fg = 0;
                        d.ja.push([
                            ["keydown"], d.si
                        ]);
                        d.ja.push([
                            ["keyup"], d.ti
                        ]);
                        d.$g = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                        d.Oc = d.K.J(d.Oc, "v");
                        d.Fd = d.K.J(d.Fd, "ec");
                        d.dd = d.K.J(d.dd, "sk");
                        d.Nd = d.K.J(d.Nd, "gk");
                        d.Ke =
                            d.K.J(d.Ke, "sc");
                        d.lc = d.K.J(d.lc, "cc");
                        d.reset = d.K.J(d.reset, "r");
                        d.bd = d.K.J(d.bd, "rs");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.si = function(b) {
                        if (this.Oc(b) && !this.Ki(b)) {
                            var d = b.keyCode;
                            b.repeat || this.pb[d] || (this.pb[b.keyCode] = !0, Ve[b.keyCode] && !this.Qa ? (this.Qa += 1, this.Ke(b), this.reset(300)) : this.Qa ? (this.mh(), this.De(b), this.Fd()) : (this.reset(), this.De(b)))
                        }
                    };
                    c.prototype.ti = function(b) {
                        if (this.Oc(b)) {
                            var d = b.keyCode,
                                e = Ve[b.keyCode];
                            this.pb[b.keyCode] && (this.pb[d] = !1);
                            e && this.Qa && (this.Qa = 0, this.pb = {});
                            1 ===
                                this.Ga.length && (b = this.Ga[0], H(b.keyCode, Jt) && (this.dd([b], !0), this.reset()));
                            this.Ga = Y(u(la(d), Rb), this.Ga);
                            ma(this.l, this.yc)
                        }
                    };
                    c.prototype.Oc = function(b) {
                        var d = this.l.document.activeElement;
                        b = b.target;
                        return !La(Boolean, [d && "OBJECT" === d.nodeName && Kt.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Lt.test(b.className)])
                    };
                    c.prototype.Fd = function() {
                        this.Ag = this.Ga.slice(0);
                        ma(this.l, this.yc);
                        this.yc = U(this.l, v(this.Ag, E(this.dd, this)), 0, "e.c")
                    };
                    c.prototype.dd =
                        function(b, d) {
                            void 0 === d && (d = !1);
                            if (1 < b.length || d) {
                                var e = this.Nd(b);
                                this.F.X("event", {
                                    Pc: e
                                }, "keystroke")
                            }
                        };
                    c.prototype.Nd = function(b) {
                        var d = this;
                        b = A(function(e) {
                            e = e.keyCode;
                            var f = Ve[e],
                                g = d.ei(e);
                            return {
                                id: e,
                                key: g,
                                Nf: !!f && Mt.test(g),
                                Qc: f
                            }
                        }, b);
                        return Bg(function(e, f) {
                            return (kl[e.Qc] || 100) - (kl[f.Qc] || 100)
                        }, b)
                    };
                    c.prototype.ei = function(b) {
                        return ll[this.$g][b] || ll.Ti[b] || String.fromCharCode(b)
                    };
                    c.prototype.De = function(b) {
                        H(b, this.Ga) || this.Ga.push(b)
                    };
                    c.prototype.Ke = function(b) {
                        this.De(b);
                        this.lc()
                    };
                    c.prototype.lc =
                        function() {
                            this.Qa ? U(this.l, this.lc, 100) : this.Ga = []
                        };
                    c.prototype.mh = function() {
                        ma(this.l, this.fg)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.fg = U(this.l, E(this.bd, this), b) : this.bd()
                    };
                    c.prototype.bd = function() {
                        this.Qa = 0;
                        this.Ga = [];
                        this.pb = {};
                        ma(this.l, this.yc)
                    };
                    c.prototype.Ki = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Ve[b.keyCode] : !1
                    };
                    return c
                }(Za),
                Rm = ["sr", "sd", "\u043d"],
                Ot = /allow-same-origin/,
                Pt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.dc = [];
                        d.Jd = {};
                        d.ne = d.K.J(d.ne, "fi");
                        d.oe = d.K.J(d.oe, "sd");
                        d.pe = d.K.J(d.pe, "src");
                        d.ya = new b.MutationObserver(d.pe);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.Fc().oc && this.F.ua().D("iframe", "NA:", E(this.ne, this));
                        this.F.Cf().Ld().D(["sdr"], E(this.oe, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        z(function(b) {
                            b.F.stop()
                        }, this.dc)
                    };
                    c.prototype.pe = function(b) {
                        var d = b.pop().target;
                        if (b = db(function(f) {
                                return f.Jf === d
                            }, this.dc)) {
                            this.dc = Y(function(f) {
                                return f.Jf !==
                                    d
                            }, this.dc);
                            var e = b.F.Md();
                            try {
                                b.F.stop()
                            } catch (f) {}
                            this.uc(d, e)
                        }
                    };
                    c.prototype.ne = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.uc(d, b.data.id)
                        }
                    };
                    c.prototype.uc = function(b, d) {
                        var e = this;
                        this.Gi(b) && $b(this.l, b)(Ra(B, function() {
                            var f = e.F.uc(b.contentWindow, d);
                            e.dc.push({
                                F: f,
                                Jf: b
                            })
                        }))
                    };
                    c.prototype.oe = function(b) {
                        var d = this,
                            e = b.M;
                        b = b.data;
                        this.Jd[e] || (this.Jd[e] = {
                            data: []
                        });
                        var f = this.Jd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.Cd) && z(function(g) {
                            "page" ===
                            g.type && (f.Cd = g.data.Ia - d.F.Df())
                        }, f.data);
                        this.l.isNaN(f.Cd) || (this.F.ga(A(function(g) {
                            g.L += f.Cd;
                            g.L = d.l.Math.max(0, g.L);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Gi = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(Ot) || d && "about:blank" !== d && (d = Fc(this.l, d).host) && R(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(Za),
                Qt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Ge = b.K.J(b.Ge, "ps");
                        return b
                    }
                    Ja(c,
                        a);
                    c.prototype.start = function() {
                        this.F.ua().Jc({
                            ma: [this.l.document.documentElement],
                            ed: this.Ge
                        })
                    };
                    c.prototype.Ge = function(b) {
                        var d = this.F.hi(),
                            e = d.Xh(),
                            f = R(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Pc(this.l),
                            l = k[0];
                        k = k[1];
                        this.F.X("page", {
                            content: A(function(m) {
                                m = y({}, m);
                                delete m.node;
                                return m
                            }, b),
                            ff: e || "",
                            Hf: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.Zh() || "",
                            cf: this.l.location.href,
                            Ig: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            Ia: this.F.Df(),
                            hd: d.li()
                        }, "page", 0)
                    };
                    return c
                }(Za),
                Rt = ["addRule", "removeRule", "insertRule", "deleteRule"],
                hh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.eb = {};
                            b.ec = {};
                            b.df = 0;
                            b.Wc = b.K.J(b.Wc, "a");
                            b.Db = b.K.J(b.Db, "sr");
                            b.Xc = b.K.J(b.Xc, "r");
                            b.ga = b.K.J(b.ga, "d");
                            return b
                        }
                        Ja(c, a);
                        c.prototype.start = function() {
                            var b = this.F.ua();
                            b.D("style", "NA:", this.Wc);
                            b.D("style", "NR:", this.Xc);
                            this.ga()
                        };
                        c.prototype.stop = function() {
                            var b =
                                this;
                            a.prototype.stop.call(this);
                            var d = this.F.ua();
                            d.na("style", "NA:", this.Wc);
                            d.na("style", "NR:", this.Xc);
                            this.ga();
                            ma(this.l, this.df);
                            z(function(e) {
                                b.eb[e].sheet && b.ig(b.eb[e].sheet)
                            }, ba(this.eb));
                            this.eb = {}
                        };
                        c.prototype.ga = function() {
                            var b = this;
                            z(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.L;
                                        delete l.L;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && z(function(p) {
                                        b.F.X("event", {
                                                target: Ga(e),
                                                Ma: p
                                            }, "stylechange",
                                            g)
                                    }, h);
                                    delete b.ec[e]
                                }
                            }, ya(this.ec));
                            this.df = U(this.l, this.ga, 100)
                        };
                        c.prototype.Db = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.ec[b] || (this.ec[b] = []);
                            this.ec[b].push({
                                qe: d,
                                style: f,
                                index: g,
                                L: e
                            })
                        };
                        c.prototype.jj = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            S(f) && (b.addRule = function(l, m, p) {
                                e.Db(d, "a", e.F.L(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            S(g) && (b.removeRule = function(l) {
                                e.Db(d, "r", e.F.L(), "", l);
                                return g.call(b, l)
                            });
                            S(h) && (b.insertRule =
                                function(l, m) {
                                    e.Db(d, "a", e.F.L(), l, m);
                                    return h.call(b, l, m)
                                });
                            S(k) && (b.deleteRule = function(l) {
                                e.Db(d, "r", e.F.L(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.ig = function(b) {
                            var d = this;
                            z(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                S(f) && (b[e] = E(f, b))
                            }, Rt)
                        };
                        c.prototype.Jh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Wc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Jh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h <
                                        f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        qe: "a"
                                    });
                                    this.F.X("event", {
                                        Ma: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.jj(e, b);
                                this.eb[b] = d
                            }
                        };
                        c.prototype.Xc = function(b) {
                            b = b.data.id;
                            var d = this.eb[b];
                            d && (delete this.eb[b], d.sheet && this.ig(d.sheet))
                        };
                        return c
                    }(Za), "ss"],
                    [rt, "in"],
                    [ot, "mu"],
                    [st, "r"],
                    [tt, "sc"],
                    [vt, "mo"],
                    [xt, "f"],
                    [Ct, "se"],
                    [Et, "wf"],
                    [Gt, "t"],
                    [Ht, "src"],
                    [It, "z"],
                    [Nt, "ks"]
                ];
            hh.push([Pt, "if"]);
            hh.push([Qt, "pa"]);
            var St = w(function(a) {
                    var c = a.document;
                    return {
                        Pd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        gi: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = db(v(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Ck: v(a, cb),
                        Kf: v(a, md),
                        Bk: v(a, He)
                    }
                }),
                Tt = function() {
                    function a(c, b) {
                        var d = this;
                        this.Tb = 0;
                        this.Bd = [];
                        this.Sb = null;
                        this.wa = this.ic = this.yg = !1;
                        this.Ia = 0;
                        this.hi = function() {
                            return d.page
                        };
                        this.Md = function() {
                            return d.Tb
                        };
                        this.Df = function() {
                            return d.Ia
                        };
                        this.bi = function() {
                            return d.ib
                        };
                        this.Cf = function() {
                            return d.Sb
                        };
                        this.ua = function() {
                            return d.Vd
                        };
                        this.L = function() {
                            return d.Oe ? d.l.Math.max(d.Oe(aa) - d.Ia, 0) : 0
                        };
                        this.Fc = function() {
                            return d.options
                        };
                        this.mb = function() {
                            return d.jh
                        };
                        this.X = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            f = d.ai(f, g, h, k);
                            d.ga(f)
                        };
                        this.ai = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            return {
                                type: f,
                                data: g,
                                L: k,
                                M: d.Tb,
                                event: h
                            }
                        };
                        this.ga = function(f) {
                            f = ea(f) ? f : [f];
                            d.yg && !d.ic ? d.wa ? (f = A(function(g) {
                                    return g.M ? g : y(g, {
                                        M: d.Tb
                                    })
                                }, f), d.Cf().og(f)) :
                                (z(function(g) {
                                    gb(d.l, {
                                        name: "webvisorData",
                                        data: g
                                    })
                                }, f), f = A(Nm, f), d.bc(f)) : d.Bd = d.Bd.concat(f)
                        };
                        this.l = c;
                        var e = vf(c, this, "R");
                        this.Le = e.J(this.Le, "s");
                        this.ga = e.J(this.ga, "sd");
                        e = G(c);
                        e.o("wv2e") && Ye();
                        e.C("wv2e", !0);
                        this.options = b;
                        this.ib = ja(c);
                        this.Vd = new pt(this.l, b);
                        this.jh = St(c);
                        this.gf = A(function(f) {
                            return new f[0](c, d, f[1])
                        }, hh);
                        this.Ei();
                        this.page = Pm(this.l);
                        this.Le()
                    }
                    a.prototype.start = function(c) {
                        this.yg = !0;
                        this.bc = c;
                        this.lg()
                    };
                    a.prototype.stop = function() {
                        gh(this.l) && (z(function(c) {
                                return c.stop()
                            },
                            this.gf), this.Vd.stop(), this.Sb && this.Sb.stop(), this.wa || this.X("event", {}, "eof"))
                    };
                    a.prototype.uc = function(c, b) {
                        var d = new a(c, y({}, this.options, {
                            M: b
                        }));
                        d.start(B);
                        return d
                    };
                    a.prototype.Ei = function() {
                        var c = this;
                        this.wa = !!this.options.M;
                        this.Tb = this.options.M || 0;
                        this.ic = !this.wa;
                        var b = this.options.Hg || [];
                        b.push(R(this.l).host);
                        this.Sb = Qm(this.l, this, b);
                        b = this.Sb.Ld();
                        cb(this.l) ? this.ic && b.D(["i"], function(d) {
                            c.wa = d.wa;
                            c.ic = !1;
                            d.M && (c.Tb = d.M);
                            c.lg()
                        }) : this.ic = this.wa = !1
                    };
                    a.prototype.lg = function() {
                        var c =
                            Bd(this.Bd);
                        this.ga(c)
                    };
                    a.prototype.Le = function() {
                        this.Oe = bg(this.l);
                        this.Ia = this.Oe(aa);
                        z(function(c) {
                            c.start()
                        }, this.gf);
                        this.Vd.start()
                    };
                    return a
                }(),
                cd = u(ba, Lc),
                da, Ut = (da = {}, da.mousemove = 0, da.mouseup = 1, da.mousedown = 2, da.click = 3, da.scroll = 4, da.windowblur = 5, da.windowfocus = 6, da.focus = 7, da.blur = 8, da.eof = 9, da.selection = 10, da.change = 11, da.input = 12, da.touchmove = 13, da.touchstart = 14, da.touchend = 15, da.touchcancel = 16, da.touchforcechange = 17, da.canvasMethod = 18, da.canvasProperty = 19, da.zoom = 20, da.resize = 21, da.mediaMethod =
                    22, da.mediaProperty = 23, da.keystroke = 24, da.deviceRotation = 25, da.fatalError = 26, da.hashchange = 27, da.stylechange = 28, da),
                ih = ka(function(a, c) {
                    var b;
                    return b = {}, b[cd(a)] = c, b
                }),
                Vt = function() {
                    function a(c) {
                        var b;
                        this.isSync = !1;
                        this.Ob = [];
                        this.qf = [];
                        this.l = c;
                        this.Ub = (b = {}, b.event = E(this.Gh, this), b.page = ih({
                            page: 1
                        }), b.mutation = ih({
                            Ui: 1
                        }), b.activity = ih({
                            dh: 1
                        }), b);
                        this.qf = [
                            [
                                ["scroll"], {
                                    vj: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    xj: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    oh: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Oi: 1
                                }, {
                                    Pc: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    bk: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    rj: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    Zj: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Si: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    Bh: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    Lh: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                                    Jj: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    zi: 1
                                }
                            ],
                            [
                                ["stylechange"], {
                                    Bj: 1
                                }, {
                                    Ma: 1
                                }, {
                                    Ma: 1
                                }
                            ]
                        ]
                    }
                    a.prototype.Gh = function(c) {
                        var b, d, e = c.type,
                            f = db(u(Lc, v(e, H)), this.qf);
                        f || Wa(hc("vem." + e));
                        "eof" === e && (this.isSync = !0);
                        var g = f[1],
                            h = f[2];
                        f = f[3];
                        var k = c.$;
                        return {
                            event: (b = {
                                type: Ut[e],
                                target: c.target,
                                M: c.M
                            }, b[cd(g)] = h ? (d = {}, d[cd(h)] = f ? k[cd(f)] : k, d) : k, b)
                        }
                    };
                    a.prototype.Aa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = ic(c, function(h) {
                                var k = !V(h.partNum);
                                return {
                                    data: k ? void 0 : d.Ub[h.type](h.data),
                                    th: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    L: h.L
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = jc(this.l, e, f);
                        var g = [e];
                        this.Ob.push(e);
                        return e(Pe(function(h) {
                            h = he(d.l, Zh, {
                                buffer: h
                            });
                            h = jc(d.l, h, f, Fe);
                            g.push(h);
                            d.Ob.push(h);
                            return h
                        }))(Pe(function(h) {
                            h = Ff(d.l, h.slice(-4));
                            h = jc(d.l, h,
                                f, Fe);
                            g.push(h);
                            d.Ob.push(h);
                            return h
                        }))(Sg(function(h) {
                            h = h[h.length - 1];
                            z(function(k) {
                                k = ue(d.l)(k, d.Ob);
                                d.Ob.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.Sa = function(c) {
                        return he(this.l, If, this.Ub[c.type](c.data))(Ge(B))
                    };
                    a.prototype.Xa = function(c) {
                        return c[0]
                    };
                    a.prototype.gd = function(c, b) {
                        for (var d = Ff(this.l, c)(Ge(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.prototype.isEnabled = function() {
                        return Yh(this.l)
                    };
                    return a
                }(),
                Wt = function() {
                    return function(a, c, b, d) {
                        var e =
                            this;
                        this.rd = this.Yb = !1;
                        this.ab = [];
                        this.Tf = [];
                        this.nf = [];
                        this.send = function(f, g, h, k) {
                            f = e.sender(f, e.tc, g);
                            h && k && f.then(h, k);
                            return f
                        };
                        this.Ne = function(f, g, h, k) {
                            return new K(function(l, m) {
                                f.push([g, h, l, m, k])
                            })
                        };
                        this.wi = function() {
                            e.ab = Bg(function(h, k) {
                                return h[4].partNum - k[4].partNum
                            }, e.ab);
                            var f = N(function(h, k, l) {
                                    k = k[4];
                                    return h && l + 1 === k.partNum
                                }, !0, e.ab),
                                g = !!e.ab[e.ab.length - 1][4].end;
                            return f && g
                        };
                        this.Gd = function(f) {
                            oh(e.l, f.slice(), function(g) {
                                e.send(g[0], g[1], g[2], g[3])
                            }, 20, "s.w2.sf.fes");
                            Bd(f)
                        };
                        this.Ph = function() {
                            e.rd || (e.rd = !0, e.Gd(e.Tf), e.Gd(e.nf))
                        };
                        this.rh = function(f) {
                            return N(function(g, h) {
                                var k = "page" === h.type && !h.M,
                                    l = "eof" === h.data.type,
                                    m = k && !!h.partNum;
                                return {
                                    xd: g.xd || m,
                                    wd: g.wd || k,
                                    vd: g.vd || l
                                }
                            }, {
                                wd: !1,
                                vd: !1,
                                xd: !1
                            }, f)
                        };
                        this.ui = function(f, g, h, k) {
                            k ? (f = e.Ne(e.ab, f, g, h[0]), e.wi() && (e.Gd(e.ab), e.Yb = !0)) : (e.Yb = !0, f = e.send(f, g));
                            return f
                        };
                        this.oi = function(f) {
                            var g;
                            return e.Ii ? (g = {}, g["wv-type"] = La(function(h) {
                                return "eof" === n(h, "data.type")
                            }, f) ? "2" : "8", g) : {}
                        };
                        this.Ef = function(f, g, h) {
                            g = {
                                G: e.oi(h),
                                H: Ca(),
                                Y: {
                                    fa: g
                                },
                                Ra: {
                                    Xd: e.Fi
                                }
                            };
                            f && g.H.C("bt", 1);
                            return g
                        };
                        this.Hh = function(f, g, h) {
                            f = e.Ef(!1, f, g);
                            return e.Yb ? e.send(f, h) : e.Ne(e.nf, f, h, g)
                        };
                        this.Vi = function(f, g, h) {
                            f = e.Ef(!0, f, g);
                            if (e.Yb) return e.send(f, h);
                            var k = e.rh(g),
                                l = k.wd,
                                m = k.vd;
                            k = k.xd;
                            var p;
                            l && (p = e.ui(f, h, g, k));
                            e.rd ? l || (p = e.send(f, h)) : (l || (p = e.Ne(e.Tf, f, h, g)), (e.Yb || m) && e.Ph());
                            return p
                        };
                        this.Ii = d;
                        this.l = a;
                        this.Fi = b;
                        this.sender = Aa(a, "W", c);
                        this.tc = c
                    }
                }(),
                ml = w(function(a) {
                    var c = G(a),
                        b = c.o("isEU");
                    if (V(b)) {
                        var d = Ga(ge(a, "is_gdpr") || "");
                        if (H(d, [0,
                                1
                            ])) c.C("isEU", d), b = !!d;
                        else if (a = Qa(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return G(a).o("isEU")
                }),
                qf = D("i.e", ml),
                Xt = D("i.ep", function(a) {
                    ml(a)
                }),
                Yt = D("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = G(a),
                        e = M(c);
                    if (!c.Ib || $c(a) || !a.MutationObserver || !Ea("Element", a.Element)) return B;
                    Ea("MutationObserver", a.MutationObserver) || Ad(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                    var f = xa(function(k, l) {
                            qa(c, l)["catch"](k)
                        }),
                        g = $b(a)(Pe(F([a, c], Lm)))(Sg(function(k) {
                            return new Tt(a, k)
                        })),
                        h = !1;
                    wq([g, f])(Ra(C(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.o("wv2Counter");
                            if (!Oh(a, k) || m) b();
                            else if (ja(a).D(a, ["beforeunload", "unload"], b), d.C("wv2Counter", e), d.C("stopRecorder", b), k = [new Te(a)], k.unshift(new Vt(a)), k = db(function(t) {
                                    return t.isEnabled()
                                }, k)) {
                                m = new Wt(a, c, !(k instanceof Te), 0);
                                var p = jl.zf(e, "m", E(m.Vi, m), k, a),
                                    q = jl.zf(e, "e", E(m.Hh, m), k, a);
                                k = Mm();
                                m = k.aj;
                                q.D("ag", k.eh);
                                q.D("p", m);
                                p.D("see", function(t) {
                                    var x = !1;
                                    z(function(I) {
                                        "page" === I.type && (x = !0)
                                    }, t);
                                    x && (h || q.push({
                                        type: "event",
                                        data: {
                                            type: "fatalError",
                                            $: {
                                                code: "invalid-snapshot",
                                                Ih: "p.s.f",
                                                stack: ""
                                            }
                                        }
                                    }), b())
                                });
                                var r = fb(function(t) {
                                    "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t)
                                });
                                U(a, b, 864E5);
                                Hb(a, function() {
                                    gb(a, {
                                        da: e,
                                        name: "webvisor",
                                        data: {
                                            version: 2
                                        }
                                    });
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                Zt = D("w2.cs", function(a, c) {
                    var b, d = M(c);
                    Xf(a, d, (b = {}, b.webvisor = !!c.Ib, b))
                }),
                nl = w(yc, M),
                Kh = u($d, nc),
                ol = B,
                $t = vb("isp.stat", function(a, c) {
                    return new K(function(b, d) {
                        if (jq(a, al, "isp")) {
                            var e = function(f) {
                                ("1" === f ? b : d)();
                                ol();
                                f = vj(al);
                                H("isp", f.wb) && (f.wb = Y(u(la("isp"), Rb), f.wb), f.wb.length || (mc(f.lb), f.lb = null))
                            };
                            ol = ja(a).D(a, ["message"], F([c, e], C(a, "isp.stat.m", Km)));
                            U(a, e, 1500)
                        } else d()
                    })
                }),
                au = vb("isp", function(a, c) {
                    qa(c, function(b) {
                        var d = db(function(g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && Md(a)) {
                            var e = ji(b) && !Xd(a),
                                f = nl(c);
                            y(f, {
                                Zc: d,
                                status: e ? 3 : 4
                            });
                            if (!e) return d =
                                Jm(a, c, d), e = function(g) {
                                    f.status = g
                                }, $t(a, d).then(v(1, e))["catch"](v(2, e))
                        }
                    })["catch"](C(a, "l.isp"))
                }),
                pl = D("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Ba(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        y(e, d);
                        b && z(c, b);
                        a.fbq = e
                    } else var f = U(a, F([a, c, wa(sa(d && d.queue))], pl), 1E3, "fbq.d");
                    return E(ma, null, a, f)
                }),
                Wc, yb, Xc, jh = (Wc = {}, Wc.add_to_wishlist = "add-to-wishlist", Wc.begin_checkout = "begin-checkout", Wc.generate_lead = "submit-lead", Wc.add_payment_info = "add-payment-info",
                    Wc),
                kh = (yb = {}, yb.AddToCart = "add-to-cart", yb.Lead = "submit-lead", yb.InitiateCheckout = "begin-checkout", yb.Purchase = "purchase", yb.CompleteRegistration = "register", yb.Contact = "submit-contact", yb.AddPaymentInfo = "add-payment-info", yb.AddToWishlist = "add-to-wishlist", yb.Subscribe = "subscribe", yb),
                Hm = (Xc = {}, Xc["1"] = jh, Xc["2"] = jh, Xc["3"] = jh, Xc["0"] = kh, Xc),
                Im = [kh.AddToCart, kh.Purchase],
                bu = ka(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            zc: d
                        })) a: {
                        if (ea(c) || Oa(c))
                            if (b = Ba(c), d =
                                b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    zc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        zc: L(",", ba(b))
                    });
                    b && a(b)
                }),
                cu = D("ag.e", function(a, c) {
                    var b = [],
                        d = C(a, "ag.s", F([ia, b], z));
                    "0" === c.ca && qa(c, function(e) {
                        if (n(e, "settings.auto_goals") && Ha(a, c) && (e = pe(a, c, "autogoal").reachGoal)) {
                            e = F([e, c.Ed], Gm);
                            var f = bu(e);
                            e = F([a, e], Fm);
                            b.push(pl(a, e));
                            b.push(Ki(a, "dataLayer", function(g) {
                                g.ya.D(f)
                            }))
                        }
                    });
                    return d
                }),
                du = /[^\d.,]/g,
                eu = /[.,]$/,
                Dm = D("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(du,
                            "").replace(eu, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (H(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Lb(b[0]) + "." + Lb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                fu = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                        "398"
                    ],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                gu = w(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                hu = D("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Ai(a);
                    return (a = db(function(b) {
                        return gu(b[0]).test(c)
                    }, fu)) ? a[1] : "643"
                }),
                iu = w(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h +
                            "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = Ih("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Am = D("ep.dec", function(a, c) {
                    if (!c || $c(a)) return [];
                    var b = Ih(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Pg(b[0])) return [];
                    b = iu();
                    f = f.join("");
                    e = Pg(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Pg(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = rb(a, b);
                    return ea(d) ? A(Tq, d) : []
                }),
                Cm = D("ep.ent", function(a, c, b) {
                    a = "" + Ua(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Oa(b)) return "";
                    b = Jh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                ql = u(Hh, hu),
                rl = D("ep.ctp", function(a, c, b, d) {
                    var e = ql(a, b),
                        f = Gh(a, d);
                    Fh(a, c, e, f);
                    Ea("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = ql(a, b),
                            h = Gh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Fh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                ju = D("ep.chp", function(a, c, b, d, e) {
                    b && of (a, c);
                    return d || e ? ja(a).D(a.document, ["click"], C(a, "ep.chp.cl", F([a, c, d, e], Bm))) : B
                }),
                nu = D("ep.i", function(a, c) {
                    return Ed(a) ? zm(a, c).then(function(b) {
                        var d = b.Dh,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            x = d[11],
                            I = d[12],
                            Z = d[13],
                            W = d[14],
                            oa = d[15];
                        if (!b.isEnabled) return K.resolve(B);
                        var ta = ae(a, e),
                            tb = ae(a, h),
                            sd = ae(a, m),
                            oe = ae(a, q),
                            ku = "" + e + f + g === "" + h + k + l;
                        return new K(function(lu,
                            mu) {
                            $b(a)(Ra(mu, function() {
                                ta && rl(a, c, f, g, t, x, I);
                                tb && !ku && rl(a, c, k, l, Z, W, oa);
                                lu(ju(a, c, sd || oe, p, r))
                            }))
                        })
                    }) : K.resolve(B)
                }),
                im = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                ou = D("cc.i", function(a, c) {
                    var b = F([a, c], xm);
                    b = F([a, b, 300, void 0], U);
                    qa(c, b)
                }),
                pu = v("9-d5ve+.r%7", O),
                qu = D("ad", function(a, c) {
                    if (!c.tb) {
                        var b = G(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function(m) {
                                    H(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                                },
                                e = Yb(a),
                                f = e.o("isad");
                            if (f) d(f);
                            else {
                                var g = v("adStatus", b.C),
                                    h = function(m) {
                                        m =
                                            m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.C("isad", m, 1200);
                                        return m
                                    },
                                    k = Aa(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + pu().replace(/[^a-v]+/g, "") + "t.gif";
                                    um(a, function() {
                                        return k({
                                            ra: {
                                                Ja: l
                                            }
                                        }).then(v(!1, h))["catch"](v(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                ru = D("pr.p", function(a, c) {
                    var b, d;
                    if (sg(a)) {
                        var e = Aa(a, "5", c),
                            f = Ca((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            H: f,
                            G: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](C(a, "pr.p.s"))
                    }
                }),
                Eh = !1,
                su = D("fid", function(a) {
                    var c, b = B;
                    if (!S(a.PerformanceObserver)) return b;
                    var d = G(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(C(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                sl = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                tu = w(function() {
                    return N(function(a, c) {
                        var b = nc(c + "/tag.js");
                        sl[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                uu = D("p.sci", function(a, c) {
                    var b = G(a);
                    return b.o("scip") ? K.resolve() : qa(c, O).then(function(d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? tm(a, c, b) : null
                    }, C(a, "ins.cs"))
                }),
                vu = D("lt.p", vb("lt.p", function(a) {
                    var c;
                    if (Ea("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(C(a,
                                "lt.o",
                                function(e) {
                                    e && e.getEntries && (e = e.getEntries(), b = N(function(f, g) {
                                        return f + g.duration
                                    }, b, e), Jd(a).C("lt", b))
                                }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return B
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return B
                })),
                wu = w(u(T("performance.memory.jsHeapSizeLimit"), pa("concat", ""))),
                xu = ["availWidth", "availHeight", "availTop"],
                yu = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                zu = ["webgl", "experimental-webgl"],
                sm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                kf = v(Sa("ccf"), Wa),
                rm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Bh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                pm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                km = w(vi),
                Ah = w(rb, wb),
                Au = D("phc.p", function(a, c) {
                    return Tk(a) ? B : qa(c, function(b) {
                        var d = c.id,
                            e = Bc(a, void 0, d),
                            f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = kb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = Ah(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Nb: "",
                            Xb: "",
                            vg: 0,
                            oa: {},
                            za: [],
                            Of: !1,
                            kb: !0,
                            l: a,
                            tc: c
                        }, y(f, {
                            Of: !0
                        }), zh(a, d, f), b = ud(a), e = xi(a, b, 1E3), d = E(zh, null, a, d, f), e.D(d), yi(a,
                            b))
                    })
                }),
                lh = w(function(a, c) {
                    var b = G(a),
                        d = Qa(a),
                        e = [],
                        f = F([a, c, b, d], To);
                    nd(a) || Uo(a, "14.1") || e.push(F([hm, "pp", ""], f));
                    var g = Vk(a) && !hf(a, 68);
                    g || e.push(F([jm, "pu", ""], f));
                    g || d.Yd || Md(a) || (e.push(F([gm, "zzlc", "na"], f)), e.push(F([fm, "cc", ""], f)));
                    return e.length ? {
                        Ca: function(h, k) {
                            if (0 === b.o("isEU")) try {
                                z(Li, e)
                            } catch (l) {}
                            k()
                        },
                        aa: function(h, k) {
                            var l = h.H;
                            if (l && 0 === b.o("isEU")) try {
                                z(xa(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return M(c)
                }),
                Bu = u(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Oa(a) ? u(sa, Hc(Boolean),
                        rr(function(c, b) {
                            return c.name > b.name ? 1 : 2
                        }), fb(Qo))(a) : ""
                }, od(",")),
                Cu = function(a) {
                    return function(c) {
                        var b = $a(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Kh;
                        e = e.Ah;
                        try {
                            var g = pa("getContext", b);
                            d = A(u(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = db(O, d)) ? f(c, {
                            canvas: b,
                            nh: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Ah: zu,
                        Kh: bm
                    }
                }),
                $l = ["name", "lang", "localService", "voiceURI", "default"],
                Du = D("p.tfs", function(a) {
                    var c = G(a);
                    if (!c.o("tfs")) {
                        c.C("tfs", !0);
                        c = ja(a);
                        var b = B;
                        b = c.D(a, ["message"], function(d) {
                            try {
                                var e = d.origin
                            } catch (h) {}
                            if (e &&
                                "https://iframe-toloka.com" === e && (d = rb(a, d.data), Ma(d) && "appendremote" === d.action))
                                if (d = Qa(a), d.o("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.C("tfsc",
                                        1);
                                    var f, g;
                                    G(a).C("_u", (f = {}, f.getCachedTags = Pf, f.button = (g = {}, g.closest = v(a, Qf), g.select = Rf, g.getData = v(a, Sf), g), f));
                                    kc(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                Eu = Xa(/[a-z\u0430-\u044f,.]/gi),
                Fu = D("ice", function(a, c, b) {
                    var d = Ha(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = nb(c)) && !(100 <= Oa(c)))) {
                            b = Lb(c);
                            var f = 0 < c.indexOf("@"),
                                g = "tel" === n(e, "type") || !f && Oa(b);
                            if (f || g) {
                                if (g) {
                                    if (Eu(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h &&
                                        "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[Oa(c) - 1];
                                    g = b[Oa(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                Oa(c) < b || Oa(c) > g || $i(a, c).then(function(l) {
                                    var m, p, q, r = ng(a, e);
                                    d.params((m = {}, m.__ym = (p = {}, p.fi = rg((q = {}, q.a = f ? 1 : 0, q.b = r, q.c = l, q)).Aa(), p), m))
                                }, C(a, "ice.s"))
                            }
                        }
                    }
                }),
                Gu = ["text", "email", "tel"],
                Hu = ["cc-", "name", "shipping"],
                Iu = D("icei", function(a, c) {
                    if (Ed(a) && Qk(a)) {
                        var b = !1,
                            d = [];
                        $b(a)(Ra(B, F([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = qf(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = ja(a);
                                f =
                                    ub("input", a.document.body);
                                z(function(h) {
                                    Af(a, h) || !H(h.type, Gu) || La(O, A(v(h.autocomplete, oc), Hu)) || d.push(g.D(h, ["blur"], F([a, c], Fu)))
                                }, sa(f))
                            }
                        }], qa)));
                        return function() {
                            z(ia, d);
                            b = !0
                        }
                    }
                }),
                Ju = vb("gic", Iu),
                wh, Ku = D("p.ai", function(a, c) {
                    return new K(function(b) {
                        (nd(a) || bf(a)) && b(qa(c, function(d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? vh(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : B
                        }));
                        b(B)
                    })
                }),
                Vb = ["0", "1", "2", "3"],
                Cc = Vb[0],
                af = Vb[1],
                Lu = Vb[2],
                ef = A(u(O, pa("concat", "GDPR-ok-view-detailed-")), Vb),
                Wd = wa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "),
                    ef, ["28", "29", "30"]),
                Mu = "3 13 14 15 16 17 28".split(" "),
                df = u(fb(T("ymetrikaEvent.type")), Hc(uc(Wd))),
                Xl = {
                    url: "https://yastatic.net/s3/gdpr/popup/v2/",
                    Rf: "ru en et fi lt lv pl fr no sr".split(" "),
                    $f: "_two_main_buttons"
                },
                Ub, Wl = (Ub = {}, Ub["GDPR-ok"] = "ok", Ub["GDPR-ok-view-default"] = "ok-default", Ub["GDPR-ok-view-detailed"] = "ok-detailed", Ub["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Ub["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Ub["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Ub["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Ub),
                Yd = [],
                rh = u(df, fb(qr(Wd)), od(",")),
                sh = u(Hc(uc(Wd)), Oa, Boolean),
                Ol = w(function(a, c) {
                    var b = c.o("gdpr");
                    return H(b, Vb) ? "-" + b : ""
                }),
                Zc = {},
                tl = w(yc),
                Ll = u(pa("exec", /counterID=(\d+)/), T("1")),
                ul = ka(function(a, c) {
                    var b = tl(a),
                        d = sa(c),
                        e = d[0],
                        f = d[1],
                        g = d.slice(2);
                    if (f) {
                        d = Kl(a, e);
                        var h = d[0],
                            k = d[1];
                        d = M(k);
                        b[d] || (b[d] = {});
                        b = b[d];
                        c.rf || Zc[f] && N(function(l, m) {
                            return l || !!m(a, k, g, h)
                        }, !1, Zc[f]) || ("init" === f ? (c.rf = !0, h ? Ab(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] =
                            new a.Ya[ra.qc](y({}, g[0], k))) : h && h[f] && b.Di ? (h[f].apply(h, g), c.rf = !0) : (d = b.wg, d || (d = [], b.wg = d), d.push(wa([e, f], g))))
                    }
                }),
                Nu = vb("is", function(a) {
                    var c = Yb(a);
                    if (ag(a, "0")) c.Pb("debug_build");
                    else {
                        var b = ag(a, "200500"),
                            d = c.o("debug_build") === ra.gb;
                        if (b || d) return c.C("debug_build", ra.gb), kc(a, {
                            src: $k + "/tag_debug.js"
                        })
                    }
                });
            "function" == typeof Promise && Promise.resolve();
            var vl = w(td),
                Ou = w(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Zk + "." + b);
                        return c
                    }, {}, kg);
                    z(function(c) {
                        a[c] = c
                    }, ba(bl));
                    return a
                }),
                Fl =
                w(function(a) {
                    a = R(a).hostname;
                    return (a = db(u(T("1"), wi("test"), Gb(ia)(a)), ya(bl))) && a[0]
                }),
                wl = function(a, c) {
                    return function(b, d) {
                        var e = M(d);
                        e = Ou(e);
                        var f = Dl(b, e),
                            g = G(b),
                            h = cb(b);
                        return Md(b) || Gd(b) ? {} : {
                            aa: function(k, l) {
                                var m = k.H,
                                    p = ph(b);
                                m = !(m && m.o("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.o("startSync")) vl(b).push(l);
                                else {
                                    g.C("startSync", !0);
                                    p = F([b, f, B, !1], a);
                                    m = cf[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, u(dd(l), C(b, c)))["catch"](B)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ha(a),
                        f = G(a),
                        g = Qa(a);
                    b = bd(a, "c");
                    var h =
                        Bb(a, b);
                    return N(function(k, l) {
                        function m() {
                            var r = g.o("synced");
                            f.C("startSync", !1);
                            r && (r[l.Qi] = p, g.C("synced", r));
                            r = vl(a);
                            z(ia, r);
                            Bd(r)
                        }
                        var p, q = h({
                            Y: {
                                Da: ["sync.cook"],
                                Fb: 1500
                            }
                        }, [ra.Wa + "//" + l.Ej + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(jb);
                            m()
                        })["catch"](function() {
                            p = e(jb) - 1435;
                            m()
                        });
                        q = v(q, O);
                        return k.then(q)
                    }, K.resolve(), c)["catch"](C(a, "ctl"))
                }, "sy.c"),
                Cl = D("destruct.e", function(a, c, b) {
                    return function() {
                        var d = G(a),
                            e = c.id;
                        z(function(f, g) {
                            return S(f) && C(a, "dest.fr." + g,
                                f)()
                        }, b);
                        delete d.o("counters")[M(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Yc = G(window);
            Yc.Ta("hitParam", {});
            Yc.Ta("lastReferrer", window.location.href);
            (function() {
                X.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = es(a, c), b.firstPartyParamsHashed = Ip(a, c), b
                })
            })();
            (function() {
                var a = G(window);
                a.Ta("getCounters", fs(window));
                Ac.push(gs);
                Rg.push(function(c, b) {
                    b.counters = a.o("getCounters")
                })
            })();
            (function() {
                X.push(function(a, c) {
                    gb(a, {
                        da: M(c),
                        name: "counter",
                        data: c
                    })
                })
            })();
            Da["1"] = ib;
            X.push(is);
            va["1"] = Qe;
            xb(Vi, -1);
            Ob["1"] = [
                [Vi, -1],
                [Ee, 1],
                [ye, 2],
                [Fb(), 3]
            ];
            X.push(js);
            X.push(function(a, c) {
                var b, d = Aa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q = {
                        G: {},
                        H: Ca((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = Ma(f) ? {
                        title: f.title,
                        dg: f.referer,
                        ea: f.params,
                        kc: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        dg: g,
                        ea: h,
                        kc: k,
                        l: l
                    }, g = zd(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || R(a).href, g = f.dg || g.ref || a.document.referrer, h = Db(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.ea), k = y(q.V || {}, {
                        ea: f.ea,
                        title: f.title
                    }), q = d(y(q, {
                        V: k,
                        G: y(q.G || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), Kc(a, "p.ar.s", q, f.kc || B, f.l)
                }, b
            });
            Da.a = ib;
            Ob.a = Pb;
            va.a = Qe;
            X.push(pe);
            Da.g = ib;
            va.g = Qe;
            Ob.g = Pb;
            X.push(ks);
            X.push(ls);
            Ob.t = Pb;
            Da.t = ib;
            va.t = bc;
            X.push(ns);
            Ob["2"] = Pb;
            Da["2"] = ib;
            va["2"] = bc;
            Da.r = tg("r");
            va.r = Qe;
            zb.push(function(a, c) {
                var b = ps(a),
                    d = Aa(a, "r", c),
                    e = C(a, "rts.p");
                return qa(c, F([function(f, g) {
                    var h = {
                            id: g.xh,
                            ca: g.ca
                        },
                        k = {
                            Y: {
                                fa: g.mj
                            },
                            H: Ca(g.kh),
                            G: g.ea,
                            V: {
                                $b: g.$b
                            },
                            ra: {
                                Ja: g.Ja
                            }
                        };
                    g.Ka && (k.Ka = rg(g.Ka));
                    h = d(k, h)["catch"](e);
                    return f.then(v(h,
                        O))
                }, K.resolve(), b], N))["catch"](e)
            });
            ca("r", function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.H,
                            e = void 0 === d ? Ca() : d,
                            f = c.V.$b,
                            g = yd(a);
                        d = e.o("rqnl", 0) + 1;
                        e.C("rqnl", d);
                        if (e = n(g, L(".", [f, "browserInfo"]))) e.rqnl = d, Vf(a);
                        b()
                    },
                    Ca: function(c, b) {
                        Qi(a, c);
                        b()
                    }
                }
            }, 1);
            xb(qe, 100);
            ca("1", qe, 100);
            X.push(qs);
            ca("n", Ee, 1);
            ca("n", ye, 2);
            ca("n", Fb(), 3);
            ca("n", qe, 100);
            Da.n = ib;
            va.n = bc;
            dc({
                bf: {
                    ia: "accurateTrackBounce"
                }
            });
            X.push(rs);
            Da.m = tg("cm");
            va.m = $r;
            ca("m", Fb(["u", "v", "vf"]), 1);
            ca("m", qe, 2);
            dc({
                uh: {
                    ia: "clickmap"
                }
            });
            X.push(ss);
            X.push(ts);
            X.push(vs);
            X.push(ws);
            (function() {
                X.push(xs);
                dc({
                    Ed: {
                        ia: "ecommerce",
                        $a: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            X.push(ys);
            zb.push(As);
            X.push(Bs);
            Ac.push(Ds);
            X.push(Es);
            xb(function(a, c) {
                return {
                    Ca: function(b, d) {
                        var e = Ha(a, c);
                        e = e && e.userParams;
                        var f = (b.V || {}).Ve;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Td.push(cs);
            X.push(Hs);
            X.push(Is);
            Oe.push(function(a) {
                var c = G(a);
                c.o("i") || (c.C("i", !0), ja(a).D(a, ["message"], v(a, Yo)))
            });
            xb(qd, 20);
            ca("n", qd, 20);
            ca("1", qd, 20);
            X.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = D("ecm.a", Js(a, c)), b.ecommerceRemove = D("ecm.r", Ks(a, c)), b.ecommerceDetail = D("ecm.d", Ls(a, c)), b.ecommercePurchase = D("ecm.p", Ms(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = Us;
                c.pri = Go;
                c.wv = v(2, O);
                c.ds = Jo;
                c.co = function(b) {
                    return ed(G(b).o("jn"))
                };
                c.td = Ws;
                y(c, (a = {}, a.iss = u(Cr, Cb), a.hdl = u(Dr, Cb), a.iia = u(Er, Cb), a.cpf = u(Ts, Cb), a.ntf = w(function(b) {
                        a: switch (n(b, "Notification.permission")) {
                            case "denied":
                                b = !1;
                                break a;
                            case "granted":
                                b = !0;
                                break a;
                            default:
                                b = null
                        }
                        return Ta(b) ? null : b ? 2 : 1
                    }), a.eu = gc("isEU"),
                    a.ns = Nk, a.np = function(b) {
                        if (Ua(b, 0, 100)) b = null;
                        else {
                            b = nb(Kf(b), 100);
                            for (var d = [], e = 0; e < b.length; e++) {
                                var f = b.charCodeAt(e);
                                128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                            }
                            b = Nh(d)
                        }
                        return b
                    }, a));
                y(eg, c)
            })();
            (function() {
                var a = {};
                a.hc = gc("hc");
                a.oo = gc("oo");
                a.pmc = gc("cmc");
                a.lt = function(c) {
                    var b = Jd(c).o("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = u(eq, Cb);
                a.aw = function(c) {
                    c = db(u(na, Rb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return na(c) ? null : ed(!c)
                };
                a.yu = function(c) {
                    var b = R(c).hostname;
                    return H(b, ["dzen.ru", "ya.ru"]) ? (Bc(c, "").o("yandexuid") || "").substring(0, 25) : null
                };
                a.ifc = gc("ifc");
                a.ifb = gc("ifb");
                a.ecs = gc("ecs");
                a.csi = gc("scip");
                y(fg, a)
            })();
            va.er = Vc;
            (function(a) {
                try {
                    var c = bd(a, "er"),
                        b = Co(a, c);
                    Rj.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ra.gb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                Td.push(Fo);
                xe.unshift(Bo);
                ah.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    G(a).C("oo", c)
                })
            })();
            xb(function(a, c) {
                return {
                    aa: function(b, d) {
                        var e = b.G,
                            f = b.H;
                        !cl[c.id] && f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, cl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push(at);
            Ob.e = Pb;
            Da.e = ib;
            va.e = bc;
            dc({
                exp: {
                    ia: "experiments"
                }
            });
            gk.experiments = "ex";
            (function() {
                var a;
                cf.push(bt);
                Da.f = ib;
                y(va, (a = {}, a.f = Pk, a));
                ca("f", Fb(), 1);
                ca("f", kj, 2);
                ca("f", qd, 20)
            })();
            Td.push(function(a, c) {
                var b = {
                        da: M(c),
                        zd: Ha(a, c),
                        Dg: ha(a),
                        ie: Qa(a)
                    },
                    d = b.Dg(jb);
                if (!b.ie.Yd) {
                    var e = b.ie.o("ymoo" +
                        b.da);
                    if (e && 30 > d - e) b = b.da, delete G(a).o("counters", {})[b], Wa(Sa("uws"));
                    else qa(c, ct(b))["catch"](C(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = Eb([Nb]);
                y(va, (a = {}, a.s = b, a.S = b, a.u = Vc, a));
                y(Da, (c = {}, c.s = Bb, c.S = ib, c.u = Bb, c));
                ca("s");
                ca("u");
                ca("S", Fb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(D("s", oo))
            })();
            Da["8"] = Bb;
            va["8"] = [ej];
            X.push(function(a, c) {
                return qa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    return e && hi(a, b, {
                        hb: c,
                        Zc: "8",
                        data: y({}, e, (d = {}, d.c = c.id, d)),
                        ee: "cs"
                    })
                })
            });
            ca("p", Fb(bh), 1);
            Da.p = function(a, c, b) {
                return function(d,
                    e) {
                    var f, g = y({
                        H: Ca()
                    }, d);
                    g.G || (g.G = {});
                    var h = g.G,
                        k = g.Ra;
                    k = void 0 === k ? {} : k;
                    h["wv-hit"] = h["wv-hit"] || "" + Ib(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.wmode = "0";
                    h["wv-part"] = "0";
                    h["page-url"] = h["page-url"] || a.location.href;
                    h["wv-type"] || (h["wv-type"] = k.Xd ? "5" : "4");
                    h = {
                        ra: {
                            Ja: "webvisor/" + e.id
                        },
                        Y: y(g.Y, {
                            zb: (f = {}, f["Content-Type"] = "text/plain", f),
                            Xe: "POST"
                        }),
                        G: h
                    };
                    f = Na(Jf(a, "pub", e), b);
                    return ke(a, c, f)(y(g, h))
                }
            };
            va.p = Eb([0, Nb]);
            zb.push(ht);
            dc({
                Ib: {
                    ia: "webvisor",
                    $a: Boolean
                },
                Ch: {
                    ia: "disableFormAnalytics",
                    $a: Boolean
                }
            });
            ca("4", Fb(bh), 1);
            Da["4"] = gi;
            va["4"] = Eb([0, Nb, Cd]);
            zb.push(nt);
            (function() {
                ca("W", Fb(bh), 1);
                va.W = Eb([0, Nb]);
                Da.W = gi;
                zb.push(Yt);
                X.push(Zt);
                dc({
                    Ib: {
                        ia: "webvisor"
                    }
                });
                dc({
                    Pj: {
                        ia: "trustedDomains"
                    },
                    oc: {
                        ia: "childIframe",
                        $a: Boolean
                    }
                });
                ah.push(function(a) {
                    G(a).o("stopRecorder", B)()
                });
                Ik("wv")
            })();
            X.push(au);
            ca("pi");
            Da.pi = Bb;
            va.pi = Vc;
            Ik("w", function(a, c) {
                    return {
                        aa: function(b, d) {
                            if (b.H) {
                                var e = nl(c),
                                    f = e.status;
                                "rt" === e.Zc && f && (b.H.C("rt", f), b.ra || (b.ra = {}), b.ra.Ai = 1 === f ? Kh(a, c) + "." : "")
                            }
                            d()
                        }
                    }
                },
                2);
            X.push(cu);
            X.push(nu);
            va["6"] = Eb([0, Nb]);
            Da["6"] = Bb;
            X.push(ou);
            X.push(Xs);
            (function() {
                Rg.push(function(a, c) {
                    c.informer = vm(a)
                })
            })();
            xb(mf, 6);
            ca("1", mf, 6);
            ca("adb");
            ca("n", mf, 4);
            va.adb = Vc;
            Da.adb = ke;
            Ac.push(qu);
            va["5"] = bc;
            Da["5"] = ib;
            Ob["5"] = Y(u(Lc, uc([Ee, ye]), Rb), Pb);
            X.push(ru);
            ca("5", qd, 20);
            xb(Dh, 7);
            ca("n", Dh, 6);
            zb.push(su);
            Da.d = ib;
            ca("d", Fb(["hid", "u", "v", "vf"]), 1);
            va.d = Vc;
            ca("n", function(a, c) {
                return {
                    Ca: function(b, d) {
                        if (!b.V || !b.V.force) {
                            var e = .002,
                                f = c.id === ra.Yg ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e =
                                1);
                            void 0 === f && (f = 1);
                            var p = Lf(a);
                            if (p && S(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, x = tu(a), I = R(a).href, Z = 0; Z < p.length; Z += 1) {
                                    var W = p[Z],
                                        oa = W.name.replace(/^https?:\/\//, "").split("?")[0],
                                        ta = nc(oa),
                                        tb = (g = {}, g.dns = Math.round(W.domainLookupEnd - W.domainLookupStart), g.tcp = Math.round(W.connectEnd - W.connectStart), g.duration = Math.round(W.duration), g.response = Math.round(W.responseEnd - W.requestStart), g);
                                    "script" !== W.initiatorType ||
                                        e || (r[oa] = y(tb, (h = {}, h.name = W.name, h.decodedBodySize = W.decodedBodySize, h)));
                                    !sl[ta] && !x[ta] || q[oa] || f || (q[oa] = y(tb, (k = {}, k.pages = I, k)))
                                }
                                ba(q).length && (t.timings8 = q);
                                ba(r).length && (t.scripts = r);
                                if (ba(t).length) Aa(a, "d", c)({
                                    H: Ca((l = {}, l.ar = 1, l.pv = 1, l)),
                                    Y: {
                                        fa: kb(a, t) || void 0
                                    },
                                    G: (m = {}, m["page-url"] = I, m)
                                }, {
                                    id: ra.ah,
                                    ca: "0"
                                })["catch"](C(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            va.ci = Eb([Nb]);
            zb.push(uu);
            X.push(vu);
            zb.push(Ss);
            X.push(Au);
            xb(lh, 8);
            ca("f", lh, 3);
            ca("n", lh, 5);
            Ac.push(function(a) {
                return D("fip", function(c) {
                    if (!Vk(c) ||
                        Gd(c)) {
                        var b = Qa(c);
                        if (!b.o("fip")) {
                            var d = u(fb(u(function(e, f) {
                                return D("fip." + f, e)(c)
                            }, E(br, null))), od("-"))(a);
                            b.C("fip", d)
                        }
                    }
                })
            }([Cu, Bu, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = R(a).protocol;
                a = c && "https:" === b && !cb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (S(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = Qs(a)) try {
                    for (var c = [], b = 0; b < Wk.length; b += 1) {
                        var d = a(Wk[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? L("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = yu);
                var b = n(a, "navigator") || {};
                c = A(v(b, n), c);
                c = L("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = Ka(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Oa(e)
            }, wu, function(a) {
                a = n(a, "screen") || {};
                return L("x", A(v(a, n), xu))
            }, function(a) {
                return L("x", Zl(a) || [])
            }, function(a) {
                a = om(a);
                return ea(a) ? L("x", a) : a
            }, function(a) {
                return (a = qm(a)) ?
                    u(tr, Hc(O), fb(F(["", ["matches", "media"]], am)), v("x", L))(a) : ""
            }]));
            xb(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.H,
                            e = Qa(a).o("fip");
                        e && d && (d.C("fip", e), Vd(c, "fip", ed(e)));
                        b()
                    }
                }
            }, 9);
            ca("h", function(a) {
                return {
                    Ca: function(c, b) {
                        var d = c.sj;
                        Nf(c) && d && G(a).C("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Ac.push(Xt);
            Oe.push(Du);
            zb.push(Ju);
            X.push(Ku);
            dc({
                $j: {
                    ia: "yaDisableGDPR"
                },
                ak: {
                    ia: "yaGDPRLang"
                }
            });
            xe.push(function(a, c) {
                return {
                    aa: F([a, c], Nl)
                }
            });
            jg.push("gdpr", "gdpr_popup");
            ig.push(function(a, c) {
                var b = Ud(a);
                b = df(b);
                if (Y(uc(Mu), b).length) return !0;
                b = c(a, "gdpr");
                return H(b, [Cc, Lu])
            });
            xe.push(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.ra || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Fc(a, e).host, e = aj(e), e = Zk + "." + (e || Ys)) : e = Zb;
                        c.ra = y(d, {
                            Bi: [e]
                        });
                        b()
                    }
                }
            });
            (function() {
                jg.push("_ym_debug_build");
                Ml("init", function(a, c) {
                    var b = "1" === c.ca,
                        d = $f(c);
                    return cb(a) || b || d || !Nu(a) ? !1 : !0
                })
            })();
            xb(wl, 5);
            ca("1", wl, 6);
            va.c = Vc;
            Da.c = Bb;
            (function() {
                function a(c) {
                    var b = pc("canvas", c.document);
                    if (b && (b = Gc(b))) {
                        var d = De(c) || Pc(c),
                            e = d[0];
                        d = d[1];
                        if (.3 <= yj(c, b, {
                                Oa: d,
                                md: e
                            }) / d * e) return G(c).C("hc", 1), !0
                    }
                    return !1
                }
                X.push(D("hcp", function(c) {
                    a(c) || U(c, v(c, a), 3E3)
                }))
            })();
            X.push(function(a, c) {
                var b = tl(a),
                    d = M(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Di = !0;
                if (b = e.wg) d = ul(a), z(d, b)
            });
            Oe.push(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = ul(a);
                    te(a, b, function(e) {
                        e.ya.D(d)
                    }, !0)
                }
            });
            if (window.Ya && We) {
                var xl = ra.qc;
                window.Ya[xl] = We;
                ds(window);
                z(u(Nc([window, window.Ya[xl]]), ia), Rg)
            }
            z(u(Nc([window]), ia), Oe)
        })()
    } catch (We) {};
}).call(this)