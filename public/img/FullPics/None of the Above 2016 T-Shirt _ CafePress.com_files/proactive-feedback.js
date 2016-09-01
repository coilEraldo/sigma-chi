try {
    (function() {
        var version = "0.0.1",
            requirejs, require, define;
        (function(e) {
            function c(e, t) {
                return f.call(e, t)
            }

            function h(e, t) {
                var n, r, i, s, o, a, f, l, c, h, p = t && t.split("/"),
                    d = u.map,
                    v = d && d["*"] || {};
                if (e && e.charAt(0) === ".")
                    if (t) {
                        p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                        for (l = 0; l < e.length; l += 1) {
                            h = e[l];
                            if (h === ".") e.splice(l, 1), l -= 1;
                            else if (h === "..") {
                                if (l === 1 && (e[2] === ".." || e[0] === "..")) break;
                                l > 0 && (e.splice(l - 1, 2), l -= 2)
                            }
                        }
                        e = e.join("/")
                    } else e.indexOf("./") === 0 && (e = e.substring(2));
                if ((p || v) && d) {
                    n = e.split("/");
                    for (l = n.length; l > 0; l -= 1) {
                        r = n.slice(0, l).join("/");
                        if (p)
                            for (c = p.length; c > 0; c -= 1) {
                                i = d[p.slice(0, c).join("/")];
                                if (i) {
                                    i = i[r];
                                    if (i) {
                                        s = i, o = l;
                                        break
                                    }
                                }
                            }
                        if (s) break;
                        !a && v && v[r] && (a = v[r], f = l)
                    }!s && a && (s = a, o = f), s && (n.splice(0, o, s), e = n.join("/"))
                }
                return e
            }

            function p(t, r) {
                return function() {
                    return n.apply(e, l.call(arguments, 0).concat([t, r]))
                }
            }

            function d(e) {
                return function(t) {
                    return h(t, e)
                }
            }

            function v(e) {
                return function(t) {
                    s[e] = t
                }
            }

            function m(n) {
                if (c(o, n)) {
                    var r = o[n];
                    delete o[n], a[n] = !0, t.apply(e, r)
                }
                if (!c(s, n) && !c(a, n)) throw new Error("No " + n);
                return s[n]
            }

            function g(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function y(e) {
                return function() {
                    return u && u.config && u.config[e] || {}
                }
            }
            var t, n, r, i, s = {},
                o = {},
                u = {},
                a = {},
                f = Object.prototype.hasOwnProperty,
                l = [].slice;
            r = function(e, t) {
                var n, r = g(e),
                    i = r[0];
                return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {
                    f: i ? i + "!" + e : e,
                    n: e,
                    pr: i,
                    p: n
                }
            }, i = {
                require: function(e) {
                    return p(e)
                },
                exports: function(e) {
                    var t = s[e];
                    return typeof t != "undefined" ? t : s[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: s[e],
                        config: y(e)
                    }
                }
            }, t = function(t, n, u, f) {
                var l, h, d, g, y, b = [],
                    w = typeof u,
                    E;
                f = f || t;
                if (w === "undefined" || w === "function") {
                    n = !n.length && u.length ? ["require", "exports", "module"] : n;
                    for (y = 0; y < n.length; y += 1) {
                        g = r(n[y], f), h = g.f;
                        if (h === "require") b[y] = i.require(t);
                        else if (h === "exports") b[y] = i.exports(t), E = !0;
                        else if (h === "module") l = b[y] = i.module(t);
                        else if (c(s, h) || c(o, h) || c(a, h)) b[y] = m(h);
                        else {
                            if (!g.p) throw new Error(t + " missing " + h);
                            g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                        }
                    }
                    d = u ? u.apply(s[t], b) : undefined;
                    if (t)
                        if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                        else if (d !== e || !E) s[t] = d
                } else t && (s[t] = u)
            }, requirejs = require = n = function(s, o, a, f, l) {
                return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || function() {}, typeof a == "function" && (a = f, f = l), f ? t(e, s, o, a) : setTimeout(function() {
                    t(e, s, o, a)
                }, 4), n)
            }, n.config = function(e) {
                return u = e, u.deps && n(u.deps, u.callback), n
            }, requirejs._defined = s, define = function(e, t, n) {
                t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
            }, define.amd = {
                jQuery: !0
            }
        })(), define("bower_components/almond/almond.js", function() {}), define("js/plugins/less", {
            load: function(e) {
                throw new Error("Dynamic load not allowed: " + e)
            }
        }), define("qcommon/json2", [], function() {
            var JSON = {};
            return function() {
                function f(e) {
                    return e < 10 ? "0" + e : e
                }

                function quote(e) {
                    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                        var t = meta[e];
                        return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function stringifyDate(e) {
                    return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                }

                function str(e, t) {
                    var n, r, i, s, o = gap,
                        u, a = t[e];
                    if (a instanceof Date) a = stringifyDate(a);
                    else if (a instanceof String || a instanceof Number || a instanceof Boolean) a = a.valueOf();
                    typeof rep == "function" && (a = rep.call(t, e, a));
                    switch (typeof a) {
                        case "string":
                            return quote(a);
                        case "number":
                            return isFinite(a) ? String(a) : "null";
                        case "boolean":
                        case "null":
                            return String(a);
                        case "object":
                            if (!a) return "null";
                            gap += indent, u = [];
                            if (Object.prototype.toString.apply(a) === "[object Array]") {
                                s = a.length;
                                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                            }
                            if (rep && typeof rep == "object") {
                                s = rep.length;
                                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                            } else
                                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
                    }
                }
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = {
                        "\b": "\\b",
                        "   ": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    rep;
                typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
                    var r;
                    gap = "", indent = "";
                    if (typeof n == "number")
                        for (r = 0; r < n; r += 1) indent += " ";
                    else typeof n == "string" && (indent = n);
                    rep = t;
                    if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                        "": e
                    });
                    throw new Error("JSON.stringify")
                }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
                    function walk(e, t) {
                        var n, r, i = e[t];
                        if (i && typeof i == "object")
                            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                        return reviver.call(e, t, i)
                    }
                    var j;
                    text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }));
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                        "": j
                    }, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }(), JSON
        }), define("qcommon/cookie", [], function() {
            var e = {};
            return e.maxCookieLength = 3e3, e.token = "_x_c_", e.separator = "_", e.readCookie = function(t, n) {
                var r, i, s, o, u, a, f, l;
                u = t + (n ? e.separator + n : "") + "=", o = document.cookie.split(";"), r = /^\s+|\s+$/g;
                for (a = 0, f = o.length; a < f; a += 1) {
                    i = o[a].replace(r, "");
                    if (i.indexOf(u) === 0) return s = unescape(i.substring(u.length)), s.length === 0 ? null : (l = s.indexOf(e.token), l >= 0 && (s = s.substring(0, l), s += e.readExtraValues(t, n, o, r)), s)
                }
                return null
            }, e.readExtraValues = function(t, n, r, i) {
                var s, o, u, a, f, l, c, h;
                u = {};
                for (s = 0, o = r.length; s < o; s += 1) a = r[s].split("="), u[a[0].replace(i, "")] = unescape(a[1]);
                l = n ? n + 1 : 1, h = "";
                for (;;) {
                    c = u[t + e.separator + l];
                    if (!c) break;
                    f = c.indexOf(e.token);
                    if (f === -1) {
                        h += c;
                        break
                    }
                    h += c.substring(0, f), l += 1
                }
                return h
            }, e.writeCookie = function(t, n, r, i, s) {
                var o, u, a, f, l, c;
                if (n.length >= e.maxCookieLength * 50) throw "value to big to store";
                r ? (o = new Date, o.setTime(o.getTime() + r * 864e5), u = "; expires=" + o.toGMTString()) : u = "", f = t + (s ? e.separator + s : ""), a = escape(f) + "=" + escape(n) + u + "; path=/;", i && (a += " domain=" + i), s ? c = s + 1 : c = 1;
                if (a.length > e.maxCookieLength) l = e.maxCookieLength - e.token.length - (escape(f) + "=" + u + "; path=/;").length, l = e.getEscapeSafeLength(n, l), a = escape(f) + "=" + escape(n).substring(0, l) + e.token + u + "; path=/;", e.writeCookie(t, unescape(escape(n).substring(l)), r, i, c);
                else
                    while (e.readCookie(t, c)) e.writeCookie(t, "", r, i, c), c += 1;
                document.cookie = a
            }, e.getEscapeSafeLength = function(e, t) {
                var n = !0,
                    r, i = 0;
                while (n && i < 10) r = escape(e), n = unescape(r.substring(0, t)) + unescape(r.substring(t)) !== e, n && (t -= 1), i += 1;
                return t
            }, e.canWriteCookie = function(t, n, r) {
                var i, s;
                return i = r || "cw_test_" + Math.round(Math.random() * 1e3), e.writeCookie(i, "a", t ? 1 : null, n), s = "a" === e.readCookie(i), s && e.writeCookie(i, "a", -1, n), s
            }, e
        }), define("qcommon/generate-id", [], function() {
            var e = function() {
                var e, t;
                return t = function() {
                    return Math.floor(1 + Math.random() * 65536).toString(36).substring(1)
                }, e = (new Date).getTime().toString(36), e + t() + t() + t()
            };
            return e
        }), define("qcommon/page-view", ["require", "qcommon/generate-id"], function(e) {
            var t = e("qcommon/generate-id"),
                n = {};
            return n.update = function() {
                return window.__pageViewId__ || (window.__pageViewId__ = t()), window.__pageViewId__
            }, n.reset = function() {
                return window.__pageViewId__ = null, n.update()
            }, n
        }), define("qcommon/session-counter", ["require", "qcommon/cookie", "qcommon/json2", "qcommon/page-view"], function(e) {
            var t = e("qcommon/cookie"),
                n = e("qcommon/json2"),
                r = e("qcommon/page-view"),
                i = {};
            i._cookieName = "_qst", i._sessionCookie = "_qsst", i._gaCookie = "__utma", i._pageCookieName = "_qPageNum", i._sessionLengthMins = 30, i.update = function(e, r) {
                var o, u, a;
                return o = t.readCookie(i._cookieName), a = l(), u = s(), o ? (o = n.parse(o), typeof o == "string" && (o = n.parse(o)), a && (o[0] += 1)) : o = [1, u], o = n.stringify(o), t.writeCookie(i._cookieName, o, 365, e), i.getPageViewCount(e, r), t.writeCookie(i._sessionCookie, (new Date).getTime().toString(), null, e), o
            };
            var s = function() {
                var e = t.readCookie(i._gaCookie);
                if (e) try {
                    e = e.split("."), e[5] ? e = parseInt(e[5], 10) : e = 0
                } catch (n) {
                    e = 0
                } else e = 0;
                return e
            };
            i.getPageViewCount = function(e, t) {
                return t ? (o() && c(e, t), u() && a(e, t), h(t)) : null
            };
            var o = function() {
                    return !window[f()]
                },
                u = function() {
                    return l()
                },
                a = function(e, t) {
                    p(0, e, t), window[f()] = !0
                },
                f = function() {
                    var e = r.update();
                    return e + "_page_view_set"
                },
                l = function() {
                    var e = t.readCookie(i._sessionCookie),
                        n = i._sessionLengthMins * 60 * 1e3,
                        r = !e || parseInt(e, 10) < (new Date).getTime() - n;
                    return r
                },
                c = function(e, t) {
                    var n = h(t);
                    n += 1, p(n, e, t), window[f()] = !0
                },
                h = function(e) {
                    var n;
                    n = t.readCookie(d(e)), n === null && (n = t.readCookie(i._pageCookieName));
                    try {
                        n && (n = parseInt(n, 10))
                    } catch (r) {
                        n = null
                    }
                    return n === null && (n = -1), n
                },
                p = function(e, n, r) {
                    t.writeCookie(d(r), e, null, n)
                },
                d = function(e) {
                    return i._pageCookieName + "_" + e
                };
            return i
        }), define("qcommon/file-loader", [], function() {
            var e = {};
            return e.load = function(t, n, r, i, s, o) {
                var u, a, f, l, c;
                c = !1, l = function(e) {
                    return function() {
                        c || (c = !0, e && !f && (f = {
                            url: document.location.href
                        }), r(t, f, e))
                    }
                };
                try {
                    n && (a = n(t))
                } catch (h) {
                    a = !1, r(t, "Exception loading pre", !0)
                } finally {
                    a !== !1 && (u = e.createScriptEl(t, s, !1, o), r && (u.onload = l(!1), u.onerror = l(!0), u.onreadystatechange = function() {
                        (this.readyState === "complete" || this.readyState === "loaded") && setTimeout(function() {
                            l(!1)()
                        }, 1)
                    }), i || (i = window.document.getElementsByTagName("head")[0]), i.appendChild(u))
                }
            }, e.createScriptEl = function(t, n, r, i) {
                var s, o = document.createElement("script");
                o.type = "text/javascript", o.src = e.tidyUrl(t) + (r ? "?" + (new Date).getTime() : ""), n !== !1 ? (o.async = "true", o.defer = "true") : (o.async = "false", o.async !== !1 && (o.async = !1), o.defer = "false");
                for (s in i) i.hasOwnProperty(s) && o.setAttribute(s, i[s]);
                return o
            }, e.tidyUrl = function(e) {
                return e.substring(0, 5) === "http:" ? e : e.substring(0, 6) === "https:" ? e : "//" + e
            }, e
        }), define("mout/lang/kindOf", [], function() {
            function r(r) {
                return r === null ? "Null" : r === n ? "Undefined" : e.exec(t.call(r))[1]
            }
            var e = /^\[object (.*)\]$/,
                t = Object.prototype.toString,
                n;
            return r
        }), define("mout/lang/isKind", ["./kindOf"], function(e) {
            function t(t, n) {
                return e(t) === n
            }
            return t
        }), define("mout/lang/isObject", ["./isKind"], function(e) {
            function t(t) {
                return e(t, "Object")
            }
            return t
        }), define("mout/object/hasOwn", [], function() {
            function e(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            return e
        }), define("mout/object/forIn", [], function() {
            function n() {
                t = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], e = !0;
                for (var n in {
                    toString: null
                }) e = !1
            }

            function r(r, s, o) {
                var u, a = 0;
                e == null && n();
                for (u in r)
                    if (i(s, r, u, o) === !1) break;
                if (e)
                    while (u = t[a++])
                        if (r[u] !== Object.prototype[u] && i(s, r, u, o) === !1) break
            }

            function i(e, t, n, r) {
                return e.call(r, t[n], n, t)
            }
            var e, t;
            return r
        }), define("mout/object/forOwn", ["./hasOwn", "./forIn"], function(e, t) {
            function n(n, r, i) {
                t(n, function(t, s) {
                    if (e(n, s)) return r.call(i, n[s], s, n)
                })
            }
            return n
        }), define("mout/object/mixIn", ["./forOwn"], function(e) {
            function t(t, r) {
                var i = 0,
                    s = arguments.length,
                    o;
                while (++i < s) o = arguments[i], o != null && e(o, n, t);
                return t
            }

            function n(e, t) {
                this[t] = e
            }
            return t
        }), define("qcommon/args-to-array", [], function() {
            function e(e) {
                return Array.prototype.slice.call(e, 0)
            }
            return e
        }), define("qcommon/events-mixin", ["require", "mout/object/mixIn", "qcommon/args-to-array"], function(e) {
            function r(e) {
                return t(e, i), e
            }
            var t = e("mout/object/mixIn"),
                n = e("qcommon/args-to-array"),
                i = {
                    on: function(e, t, n) {
                        return this._listeners || (this._listeners = {}), this._listeners[e] = this._listeners[e] || [], this._listeners[e].push({
                            callback: t,
                            context: n || !1
                        }), this
                    },
                    off: function(e, t) {
                        this._listeners || (this._listeners = {});
                        if (!this._listeners[e]) return this;
                        if (!e) this._listeners = {};
                        else if (!t) this._listeners[e] = [];
                        else {
                            this._listeners[e] = this._listeners[e] || [];
                            var n = this._listeners[e].length,
                                r;
                            for (r = n - 1; r >= 0; r--) t === this._listeners[e][r].callback && this._listeners[e].splice(r, 1)
                        }
                        return this
                    },
                    trigger: function(e) {
                        var t = n(arguments).slice(1);
                        this._listeners || (this._listeners = {});
                        if (this._listeners[e]) {
                            var r, i, s, o = this._listeners[e].length,
                                u = !1;
                            for (r = 0; r < o; r += 1) i = this._listeners[e][r], s = i.callback.apply(i.context || this, t || []), s === !1 && (u = !0);
                            return !u
                        }
                    }
                };
            return r
        }), define("qcommon/post-data", ["require", "qcommon/file-loader", "mout/lang/isObject", "qcommon/events-mixin"], function(e) {
            function i(e, i) {
                function v() {
                    return (new Date).getTime()
                }

                function m() {
                    t.load(a, null, function(e, t, n) {
                        n ? (f.expired = !0, l.trigger("error", f)) : (f.responseTimestamp = v(), l.trigger("success", f))
                    })
                }

                function g() {
                    var e;
                    try {
                        p && typeof XDomainRequest != "undefined" ? e = new XDomainRequest : e = new XMLHttpRequest, e.open(o, a);
                        try {
                            e.withCredentials = !1
                        } catch (t) {}
                        e.setRequestHeader && e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), e.onload = function() {
                            c = !0, f.responseTimestamp = v(), l.trigger("success", f)
                        }, e.onreadystatechange = function() {}, e.ontimeout = function() {}, e.onerror = function() {}, e.onprogress = function() {}, e.send(s)
                    } catch (t) {
                        try {
                            m()
                        } catch (n) {}
                    }
                    f.requestTimestamp = v(), setTimeout(function() {
                        c || (f.expired = !0, l.trigger("error", f))
                    }, u)
                }
                n(e) && (i = e, e = i.url);
                var s = i.data || null,
                    o = i.method || "POST",
                    u = i.timeout || 2e3,
                    a = ("https:" === document.location.protocol ? "https:" : "http:") + e,
                    f = {
                        expired: !1,
                        pingSize: a.length,
                        method: o,
                        dataSize: s ? s.length : 0
                    },
                    l = r({}),
                    c = !1,
                    h = navigator.userAgent.toLowerCase(),
                    p = h.indexOf("msie") !== -1,
                    d = h.indexOf("msie 7") !== -1 || h.indexOf("msie 6") !== -1;
                return d ? m() : g(), l
            }
            var t = e("qcommon/file-loader"),
                n = e("mout/lang/isObject"),
                r = e("qcommon/events-mixin");
            return i
        }), define("qcommon/tracker", ["require", "qcommon/cookie"], function(e) {
            var t = e("qcommon/cookie"),
                n = {};
            return n._cookieName = "_qubitTracker", n._cookieSessionName = "_qubitTracker_s", n.getVisitorId = function(e) {
                return window.__qb_visitorid__ || n._setValues(e), window.__qb_visitorid__.global
            }, n.getVisitorMetaData = function(e) {
                return window.__qb_visitorid__ || n._setValues(e), window.__qb_visitorid__
            }, n._setValues = function(e) {
                var r, i, s, o, u, a;
                r = t.canWriteCookie(e), u = t.readCookie(n._cookieName), a = t.readCookie(n._cookieSessionName), r && !u ? (a ? s = a : s = n._getRandomId(), t.writeCookie(n._cookieName, s, 365, e)) : r ? t.writeCookie(n._cookieName, u, 365, e) : s = null, r && !a ? (u ? o = u : o = n._getRandomId(), t.writeCookie(n._cookieSessionName, o, null, e)) : o = null, i = u || s || a || o || n._getRandomId(), window.__qb_visitorid__ = {
                    global: i,
                    persist: u || s || "",
                    session: a || o || "",
                    canCookie: r
                }
            }, n._getRandomId = function() {
                var e = (new Date).getTime().toString();
                return e = e + "." + Math.floor(Math.random() * 999999), e
            }, n
        }), define("qcommon/browser", [], function() {
            var e = {
                userAgent: window.navigator.userAgent,
                init: function() {
                    return this.details = this._getDetails(), this
                },
                _getDetails: function() {
                    var e, t;
                    try {
                        return /Chrome/.test(this.userAgent) ? (e = "Chrome", t = Number(this.userAgent.match(/(Chrome)[ \/](\d+\.\d+)/)[2])) : /Opera/.test(this.userAgent) ? (e = "Opera", t = Number(this.userAgent.match(/(Opera)[ \/](\d+\.\d+)/)[2])) : (e = this.userAgent.match(/(Safari|Firefox|Opera|IE)( |\/)/)[1], t = Number(this.userAgent.match(/(Safari|Firefox|Opera|IE)[ \/](\d+\.\d+)/)[2])), {
                            type: e,
                            version: t
                        }
                    } catch (n) {}
                    return !1
                },
                is: function(e) {
                    var t = !1;
                    return this.details ? (t = this.details.type === e.type, t && e.version && (t = this.details.version === e.version, t || (t = Math.floor(this.details.version) === e.version))) : t = !1, t
                }
            };
            return e.init()
        }), define("mout/lang/isPlainObject", [], function() {
            function e(e) {
                return !!e && typeof e == "object" && e.constructor === Object
            }
            return e
        }), define("mout/lang/clone", ["./kindOf", "./isPlainObject", "../object/mixIn"], function(e, t, n) {
            function r(t) {
                switch (e(t)) {
                    case "Object":
                        return i(t);
                    case "Array":
                        return u(t);
                    case "RegExp":
                        return s(t);
                    case "Date":
                        return o(t);
                    default:
                        return t
                }
            }

            function i(e) {
                return t(e) ? n({}, e) : e
            }

            function s(e) {
                var t = "";
                return t += e.multiline ? "m" : "", t += e.global ? "g" : "", t += e.ignorecase ? "i" : "", new RegExp(e.source, t)
            }

            function o(e) {
                return new Date(+e)
            }

            function u(e) {
                return e.slice()
            }
            return r
        }), define("mout/lang/deepClone", ["./clone", "../object/forOwn", "./kindOf", "./isPlainObject"], function(e, t, n, r) {
            function i(t, r) {
                switch (n(t)) {
                    case "Object":
                        return s(t, r);
                    case "Array":
                        return o(t, r);
                    default:
                        return e(t)
                }
            }

            function s(e, n) {
                if (r(e)) {
                    var s = {};
                    return t(e, function(e, t) {
                        this[t] = i(e, n)
                    }, s), s
                }
                return n ? n(e) : e
            }

            function o(e, t) {
                var n = [],
                    r = -1,
                    s = e.length,
                    o;
                while (++r < s) n[r] = i(e[r], t);
                return n
            }
            return i
        }), define("mout/object/deepMixIn", ["./forOwn", "../lang/isPlainObject"], function(e, t) {
            function n(t, n) {
                var i = 0,
                    s = arguments.length,
                    o;
                while (++i < s) o = arguments[i], o && e(o, r, t);
                return t
            }

            function r(e, r) {
                var i = this[r];
                t(e) && t(i) ? n(i, e) : this[r] = e
            }
            return n
        }), define("mout/collection/make_", [], function() {
            function e(e, t, n) {
                return function() {
                    var r = Array.prototype.slice.call(arguments);
                    return r[0] == null ? n : typeof r[0].length == "number" ? e.apply(null, r) : t.apply(null, r)
                }
            }
            return e
        }), define("mout/array/forEach", [], function() {
            function e(e, t, n) {
                if (e == null) return;
                var r = -1,
                    i = e.length;
                while (++r < i)
                    if (t.call(n, e[r], r, e) === !1) break
            }
            return e
        }), define("mout/collection/forEach", ["./make_", "../array/forEach", "../object/forOwn"], function(e, t, n) {
            return e(t, n)
        }), define("mout/lang/isArray", ["./isKind"], function(e) {
            var t = Array.isArray || function(t) {
                return e(t, "Array")
            };
            return t
        }), define("js/plugins/less!less/main", [], function() {
            return 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,hr,a,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}\nh1,h2,h3,h4,h5,h6{font-size:100%}\ntable{border-collapse:collapse;border-spacing:0}\nstrong,b,mark{font-weight:bold;font-style:inherit}\nem,i,cite,q,address,dfn,var{font-style:italic;font-weight:inherit}\nabbr[title],dfn[title]{cursor:help;border-bottom:1px dotted}\nins{border-bottom:1px solid}\na,u,ins{text-decoration:none}\ndel,s{text-decoration:line-through}\npre,code,samp,kbd{font-family:monospace}\nsmall{font-size:0.75em}\nimg{border:none;font-style:italic}\ninput,select,option,optgroup,textarea{font:inherit}\ninput[type="submit"]{border:0}\n.clearfix{*zoom:1}.clearfix:before,.clearfix:after{display:table;content:"";line-height:0}\n.clearfix:after{clear:both}\n.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}\n*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\nhtml{-webkit-font-smoothing:antialiased}\n.ie8 .left-img{margin-right:2px}\n.ie8 .inner{width:100%}\n.ie8 textarea{font-family:ProximaNova, Arial, sans-serif}\n.feedback-exit-box-wrap{box-shadow:0 0 10px rgba(0,0,0,0.5);margin:20px;background:#fff;position:relative;height:360px;overflow:hidden;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.feedback-exit-box-wrap .left-img{display:block;float:left;-webkit-border-top-left-radius:6px;-moz-border-radius-topleft:6px;border-top-left-radius:6px;-webkit-border-bottom-left-radius:6px;-moz-border-radius-bottomleft:6px;border-bottom-left-radius:6px;margin-bottom:100px}\n.feedback-exit-box-wrap .inner{padding:20px;position:relative;overflow:hidden;height:100%}\n.feedback-exit-box-wrap .close-btn{position:absolute;top:22px;right:20px;display:block;width:10px;height:11px;background:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQ0QxM0JGOTRDRjMxMUUyOTQ4REU5NkM2QTAwM0I4NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQ0QxM0JGQTRDRjMxMUUyOTQ4REU5NkM2QTAwM0I4NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRDRDEzQkY3NENGMzExRTI5NDhERTk2QzZBMDAzQjg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRDRDEzQkY4NENGMzExRTI5NDhERTk2QzZBMDAzQjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TwOCbAAAAY1JREFUeNqMkr1OwlAcxW+JC1CV8JFKieAAgw8Ar0BiogmLA26Kk848AU+hs9Wxsjm0OMAMWyGBQAILgfQV8JymJbekJN7kn/zvOb/70XsqhBC3KHW324mowjhF3cVWq9VNOp2+VxSFQmhQo0eGq0rr9dqE8MjV8k7U6JEJjihK8BlLgoreQuk+l5vNhvBLJpN5ZU8t8BX/GG8YhnE9n8+Ner0ulstls9FoOHtTutN5Lpd7cl33h5XNZlvU9r4PpTRNa22322/MdVSBvQ+nglM9CLsQykt31gF34T2TEZVKpQmoC+Mi4sHz9Mrl8gMnbyjtWDL+Bu8neH0vBPnrD9LxgNhwOFTj8fgH5vkISKc3Go1UL0LHcXoQLHi69FyELHqhCMfjse3DBRZ7apERTiYTwv1EItFnL0cY+sJ2u12rVquuaZpup9Ophf5L6U7FZDJpz2azwWKxGKDvUTuMsKSqag+QFUQ4nU5tHy4FT3dFCH+NdRghFtrwfskIBP+Jo6xjEWIDG8zXvyP8E2AAqS7BoI3RMhEAAAAASUVORK5CYII=\');background-position:0px 0px;cursor:pointer;font-size:0px}\n.feedback-exit-box-wrap .close-btn:hover,.feedback-exit-box-wrap .close-btn:active{background-position:0 -11px}\n.feedback-exit-box-wrap .divider-line{background:#e1e1e4;height:2px;width:100%;font-size:0px}\n.feedback-exit-box-wrap textarea{-webkit-box-shadow:0 1px 3px rgba(0, 0, 0, 0.2) inset, 0 1px 0 #FFFFFF;-moz-box-shadow:0 1px 3px rgba(0, 0, 0, 0.2) inset, 0 1px 0 #FFFFFF;box-shadow:0 1px 3px rgba(0, 0, 0, 0.2) inset, 0 1px 0 #FFFFFF;color:#777777;height:65px;margin:19px auto auto;padding:5px;resize:none;width:100%;background:none repeat scroll 0 0 #fafafa;border:1px solid #D6D6D6;display:inline-block;height:159px;outline:medium none;padding-left:10px;padding-right:10px;vertical-align:middle;margin-bottom:13px;box-shadow:0 1px 2px rgba(0,0,0,0.05) inset}\n.feedback-exit-box-wrap .message{margin-top:17px}\n.feedback-exit-box-wrap .logo{display:block;float:left;margin-top:-54px;margin-left:20px}\n.feedback-exit-box-wrap .submit-btn{float:right}\nbody{font-family:ProximaNova,Arial,sans-serif;font-size:16px;line-height:22px;color:#828282;font-weight:300;text-shadow:0 1px 0 #fff}\np{margin-bottom:0px}\na{color:#08c}a:hover{color:#005580}\nh1{font-family:ProximaNova,Arial,sans-serif;color:#6a6a6a;font-weight:300;font-size:24px;line-height:24px;margin-bottom:20px}\n.btn,a.btn{text-align:center;font-family:ProximaNova,Arial,sans-serif;font-size:14px;font-weight:bold;vertical-align:middle;cursor:pointer;display:inline-block;padding:0 50px;height:44px;line-height:46px;background-position:0 0px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.3);background-color:#464646;background-image:-moz-linear-gradient(top, #505050, #373737);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#505050), to(#373737));background-image:-webkit-linear-gradient(top, #505050, #373737);background-image:-o-linear-gradient(top, #505050, #373737);background-image:linear-gradient(to bottom, #505050, #373737);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ff505050\', endColorstr=\'#ff373737\', GradientType=0);border-color:#373737 #373737 #101010;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);*background-color:#373737;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);-webkit-box-shadow:0px 1px 0px rgba(255,255,255,.3) inset, 0 1px 2px rgba(0,0,0,.3);-moz-box-shadow:0px 1px 0px rgba(255,255,255,.3) inset, 0 1px 2px rgba(0,0,0,.3);box-shadow:0px 1px 0px rgba(255,255,255,.3) inset, 0 1px 2px rgba(0,0,0,.3)}.btn:hover,a.btn:hover,.btn:active,a.btn:active,.btn.active,a.btn.active,.btn.disabled,a.btn.disabled,.btn[disabled],a.btn[disabled]{color:#fff;background-color:#373737;*background-color:#2a2a2a}\n.btn:active,a.btn:active,.btn.active,a.btn.active{background-color:#1d1d1d \\9}\n.btn:hover,a.btn:hover{text-decoration:none;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}\n.btn.active,a.btn.active,.btn:active,a.btn:active{background-color:#373737;background-image:none;outline:0;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.9), 0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.9), 0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 2px rgba(0,0,0,.9), 0 1px 2px rgba(0,0,0,.05)}\ninput[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block{width:100%}\nbutton.btn,input[type="submit"].btn{*padding-top:3px;*padding-bottom:3px}button.btn::-moz-focus-inner,input[type="submit"].btn::-moz-focus-inner{padding:0;border:0}\n.inputContainer{position:relative;float:left}\n.ajaxSubmit{padding:20px;background:#55ea55;border:1px solid #999;display:none}\n.placeholder{color:#aaa}\n.pull-right{float:right}\n.pull-left{float:left}\n.hide{display:none}\n.show{display:block}\n.invisible{visibility:hidden}\n.no-margin-top{margin-top:0}\n.no-margin-btm{margin-bottom:0}\n'
        }), define("js/defaults", ["require", "./plugins/less!../less/main"], function(e) {
            var t = e("./plugins/less!../less/main"),
                n = {
                    version: 2,
                    trackingId: "",
                    clientId: 0,
                    profileId: 0,
                    configId: 1,
                    debugMode: !1,
                    domain: "",
                    submitCountDays: 30,
                    pongUrl: "//pong.qubitproducts.com",
                    statsPath: "/s",
                    feedbackPath: "/f",
                    showInIframe: !1,
                    sendUVEvents: !0,
                    resendUVOnEvent: !1,
                    overlay: {
                        color: "#fff",
                        opacity: .96,
                        closes: !0,
                        fadeInDuration: 200
                    },
                    images: [],
                    container: {
                        width: 710,
                        height: 390,
                        top: 20,
                        "z-index": 16777269,
                        contentClass: "inner",
                        template: " <div class='feedback-exit-box-wrap'>{{sideImage}}<div class='inner'></div>{{logo}}</div>",
                        data: {
                            sideImage: "",
                            logo: ""
                        },
                        on: {
                            "click .close-btn": function(e, t) {
                                e = e.v1, t.preventDefault(), e.hideFeedback()
                            }
                        }
                    },
                    firstPage: "getFeedback",
                    pages: {
                        getFeedback: {
                            template: " <span href='#' class='close-btn'></span><h1>{{title}}</h1><div class='divider-line'></div><p class=\"message\">{{message}}</p><textarea tabindex='1' class='text'>{{placeholder}}</textarea><a href='#' tabindex='2' class='send'>Share your feedback</a>",
                            on: {
                                load: function(e, t) {
                                    var n, r;
                                    e = e.v1, n = e.getBoxBody().find(".text"), r = n.val(), n.on("focus", function() {
                                        n.val() === r && n.val("")
                                    }).on("blur", function() {
                                        n.val() === "" && n.val(r)
                                    }).on("keyup", function() {
                                        n.val() === "" || n.val() === r ? e.getBoxBody().removeClass("enabled") : e.getBoxBody().addClass("enabled")
                                    })
                                },
                                "click .send": function(e, t) {
                                    t.preventDefault(), e = e.v1;
                                    if (e.getBoxBody().hasClass("enabled")) {
                                        var n = e.getBoxBody().find(".text").val();
                                        e.nextPage(), e.sendFeedback(n), setTimeout(function() {
                                            e.hideFeedback()
                                        }, 2000)
                                    }
                                }
                            },
                            data: {
                                title: "Help us improve",
                                message: "What do you like about our site and what can we improve on?",
                                placeholder: "Type your message here"
                            },
                            nextPage: "thankYou"
                        },
                        thankYou: {
                            template: " <h1>{{title}}</h1><p>{{message}}</p>",
                            data: {
                                title: "Thank You!",
                                message: "We really appreciate your feedback."
                            }
                        }
                    },
                    cssBase: t,
                    cssExtra: ""
                };
            return n
        }), define("js/feedback", ["require", "js/defaults", "qcommon/json2", "qcommon/cookie", "qcommon/session-counter", "qcommon/page-view", "qcommon/post-data", "qcommon/tracker", "qcommon/file-loader", "qcommon/browser", "mout/lang/deepClone", "mout/object/deepMixIn", "mout/collection/forEach", "mout/lang/isArray"], function(e) {
            var t = e("js/defaults"),
                n = e("qcommon/json2"),
                r = e("qcommon/cookie"),
                i = e("qcommon/session-counter"),
                s = e("qcommon/page-view"),
                o = e("qcommon/post-data"),
                u = e("qcommon/tracker"),
                a = e("qcommon/file-loader"),
                f = e("qcommon/browser"),
                l = e("mout/lang/deepClone"),
                c = e("mout/object/deepMixIn"),
                h = e("mout/collection/forEach"),
                p = e("mout/lang/isArray"),
                d = function(e) {
                    var a;
                    return a = {
                        cookieName: "qbef",
                        trackerCookie: "qbeft",
                        referrerCookie: "qbefr",
                        closeCountName: "cc",
                        submitCountName: "sc",
                        options: l(t),
                        lastMoves: [],
                        reason: {
                            mouseMoved: 1,
                            debug: 2,
                            explicit: 3,
                            proactive: 4
                        },
                        initialize: function() {
                            return a.setConfig(e), this
                        },
                        start: function() {
                            return a.shouldShow() && (a.track(), a.preloadResources(), a.startTime = (new Date).getTime(), a.$(function() {
                                a.attachHandler(a.$trigger)
                            })), this
                        },
                        track: function() {
                            u.getVisitorId(a.options.domain), i.update(a.options.domain), a.trackJourney()
                        },
                        trackJourney: function() {
                            var e, t, n, r;
                            t = (new Date).getTime(), n = encodeURIComponent(s.update()), a.storeTrackingCookie(t, n, a.trackerCookie, document.location.href), r = a.getReferrer(), r && a.storeTrackingCookie(t, n, a.referrerCookie, r)
                        },
                        getReferrer: function() {
                            var e, t;
                            e = document.referrer.indexOf("://");
                            if (e === -1) return document.referrer;
                            e += 3;
                            try {
                                return document.referrer.substring(e).indexOf(document.location.host) !== 0 ? document.referrer : null
                            } catch (n) {
                                return document.referrer
                            }
                        },
                        storeTrackingCookie: function(e, t, r, i) {
                            var s = a.getTrackingCookie(r);
                            typeof s == "string" && (s = n.parse(s)), s.push({
                                url: encodeURIComponent(i),
                                time: e,
                                pv_id: t
                            }), a.saveTrackingValue(r, s, a.options.domain)
                        },
                        getTrackingCookie: function(e) {
                            var t;
                            try {
                                t = n.parse(window.sessionStorage.getItem(e))
                            } catch (r) {
                                t = []
                            }
                            return t || (t = []), t
                        },
                        saveTrackingValue: function(e, t, r) {
                            window.sessionStorage.setItem(e, n.stringify(t))
                        },
                        shouldShow: function() {
                            var e, t;
                            return a.initCookies(), t = a.isUnsupported(navigator.userAgent, window), e = window.self !== window.top && !a.options.showInIframe, !e && !t
                        },
                        isUnsupported: function(e, t) {
                            return !t.sessionStorage || /(tablet|msie 6)/i.test(e)
                        },
                        attachHandler: function(e) {
                            e.length && e.on && e.on("click", function() {
                                a.showFeedback(a.reason.proactive), window.q_ef_disable = !0
                            })
                        },
                        setConfig: function(e) {
                            c(a.options, e), a.$ = a.options.$;
                            var t = a.options.triggerElement;
                            t instanceof a.$ || (t = a.$(t)), a.$trigger = t
                        },
                        setDefault: function(e, t) {
                            a.options[e] === undefined && (a.options[e] = t)
                        },
                        getUrl: function() {
                            return document.location.href
                        },
                        preloadResources: function() {
                            this.preloadResourcesCalled || (a.preloadImages(), this.preloadResourcesCalled = !0)
                        },
                        initCookies: function() {
                            var e, t;
                            return e = r.readCookie(a.cookieName), e ? (t = n.parse(e), a.writeCountCookie(e), t[a.closeCountName] === 0 && t[a.submitCountName] === 0) : (t = {}, t[a.closeCountName] = 0, t[a.submitCountName] = 0, e = n.stringify(t), a.writeCountCookie(e), e === r.readCookie(a.cookieName))
                        },
                        writeCountCookie: function(e) {
                            r.writeCookie(a.cookieName, e, -1), r.writeCookie(a.cookieName, e, a.options.closeCountDays, a.options.domain)
                        },
                        incrementSubmitCount: function() {
                            var e, t, i = r.readCookie(a.cookieName);
                            t = n.parse(i), t[a.submitCountName] += 1, t = n.stringify(t), r.writeCookie(a.cookieName, t, a.options.submitCountDays, a.options.domain)
                        },
                        sendShowFeedbackPing: function() {
                            a.sendStats("fb_show")
                        },
                        hideFeedback: function(e) {
                            a.sendStats("fb_hide"), a.hideBox(e)
                        },
                        hideBox: function(e) {
                            e && e === "slide" ? a.iframe.animate({
                                top: -a.options.container.height
                            }, 400, function() {
                                a.overlay.delay(100).fadeOut(1000, a.removeBox)
                            }) : a.boxBody.fadeOut(1000, a.removeBox); a.overlay.delay(100).fadeOut(1000);
                        },
                        removeBox: function() {
                            a.overlay && a.overlay.remove(), a.boxBody && a.boxBody.empty(), a.iframe && a.iframe.remove(), delete a.overlay, delete a.boxBody, delete a.iframe
                        },
                        sendUVEvent: function(e, t) {
                            var n = window.universal_variable || {};
                            n.events = n.events || [], n.events.push({
                                category: "qubit-proactive-feedback",
                                action: e
                            }), t === !0 && (window._qtd = window._qtd || [], window._qtd.push({
                                resendUniversalVariables: 1
                            }))
                        },
                        getPingData: function(e) {
                            return {
                                pv_id: encodeURIComponent(s.update()),
                                tid: encodeURIComponent(a.options.trackingId),
                                vid: encodeURIComponent(u.getVisitorId(a.options.domain)),
                                url: encodeURIComponent(window.location.href),
                                time: encodeURIComponent((new Date).getTime()),
                                tz: (new Date).getTimezoneOffset(),
                                r: a.activeReason,
                                type: e,
                                configId: a.options.configId
                            }
                        },
                        sendFeedback: function(e) {
                            a.incrementSubmitCount(), a.sendStats("fb_send"), a.$trigger.hide(), a.sendOldFeedback(e)
                        },
                        sendStats: function(e) {
                            a.options.sendUVEvents && a.sendUVEvent(e, a.options.resendUVOnEvent);
                            var t = a.getPingData(e),
                                n, r = [];
                            h(t, function(e, t) {
                                r.push(t + "=" + e)
                            }), this._postData(a.options.pongUrl + a.options.statsPath + "?" + r.join("&"), "", "GET")
                        },
                        sendOldFeedback: function(e) {
                            var t = [],
                                r = function(e, n) {
                                    if (n === void 0) return;
                                    t.push(e + "=" + encodeURIComponent(n))
                                },
                                o = function() {
                                    return t.join("&")
                                };
                            r("commentdetail", e), r("client_id", a.options.trackingId), r("client_code", a.options.clientId), r("profile_code", a.options.profileId), r("domain", a.options.domain), r("feedback_id", s.update()), r("current_url", n.stringify(a.getTrackingCookie(a.trackerCookie))), r("referrer_url", n.stringify(a.getTrackingCookie(a.referrerCookie))), r("time_before_feedback", a.showTime - a.startTime), r("screen_res", ""), r("chrome_size", ""), r("current_point", ""), r("proactive", "1"), r("num_of_visits", n.parse(i.update(a.options.domain))[0]), r("global_user_id", u.getVisitorId(a.options.domain)), r("session_counter", i.update(a.options.domain)), r("pv_id", s.update()), this._postData({
                                url: a.options.pongUrl + a.options.feedbackPath,
                                data: encodeURIComponent(o())
                            })
                        },
                        _postData: o,
                        preloadImages: function() {
                            var e = a.options.images;
                            p(e) && h(e, function(e) {
                                var t = new Image;
                                t.src = e
                            })
                        },
                        showFeedback: function(e) {
                            e = e || a.reason.debug, a.preloadResources(), a.activeReason = e, a.showTime = (new Date).getTime(), a.sendShowFeedbackPing(), a.doShowFeedback()
                        },
                        doShowFeedback: function() {
                            a.options.overlay && a.showOverlay(), a.loadIframe()
                        },
                        loadIframe: function() {
                            var e, t;
                            e = Math.round(-a.options.container.width / 2), a.options.version === 2 ? t = -a.options.container.height : (t = (a.$(window).height() - a.options.container.height) / 2, t = t < 10 ? 0 : t), a.iframe = a.$("<iframe/>", {
                                id: "qb_proactive_feedback_frame",
                                frameborder: 0,
                                noresize: !0,
                                border: 0,
                                scrolling: "no",
                                allowtransparency: !0,
                                css: {
                                    display: "none",
                                    position: "fixed",
                                    left: 0,
                                    top: t,
                                    width: a.options.container.width,
                                    height: a.options.container.height,
                                    background: "transparent",
                                    zIndex: a.options.container["z-index"],
                                    marginLeft: e
                                }
                            }), a.iframe.on("load", a.loadBox), a.$("body").append(a.iframe)
                        },
                        loadBox: function() {
                            var e, t, n, r, i;
                            t = "<style>" + (a.options.cssBase + a.options.cssExtra) + "</style>", a.boxBody = a.iframe.contents().find("body"), a.boxBody.css("background", "transparent"), a.iframe.contents().find("head").append(t), e = a.$(a.iframe.contents().get(0).createElement("div")).html(a.template(a.options.container.template, a.options.container.data)).appendTo(a.boxBody), a.delegateEvents(e, a.options.container.on), a.openPage(a.options.firstPage), a.iframe.show(), a.options.version === 2 && (a.iframe.delay(200).animate({
                                top: a.options.container.top
                            }, 400), f.is({
                                type: "IE",
                                version: 8
                            }) && a.options.version > 1 && (a.boxBody.addClass("ie8"), r = a.boxBody.find(".inner"), r.width("auto"), i = a.boxBody.find(".text"), i.width(i.outerWidth())))
                        },
                        showOverlay: function() {
                            a.overlay = a.$("<div/>", {
                                css: {
                                    width: "100%",
                                    height: "100%",
                                    position: "fixed",
                                    background: a.options.overlay.color,
                                    opacity: a.options.overlay.opacity,
                                    filter: "alpha(opacity=" + a.options.overlay.opacity * 100 + ")",
                                    top: 0,
                                    left: 0,
                                    display: "none",
                                    "z-index": a.options.container["z-index"] - 1
                                }
                            }), a.options.overlay.closes && a.overlay.on("click", a.hideFeedback), a.$("body").append(a.overlay), a.overlay.fadeIn(a.options.overlay.fadeInDuration)
                        },
                        makeDelegate: function(e) {
                            return function(t) {
                                e(a.getAPI(), t)
                            }
                        },
                        delegateEvents: function(e, t) {
                            if (!t) return;
                            var n, r, i;
                            h(t, function(s, o) {
                                o.split(" ").length === 2 && (r = o.split(" ")[0], i = o.split(" ")[1], n = t[o], e.on(r, i, a.makeDelegate(n)))
                            }), t.load && t.load(a.getAPI())
                        },
                        openPage: function(e) {
                            var t, n;
                            a.options.pages[e] ? (t = a.options.pages[e], n = a.$(a.iframe.contents().get(0).createElement("div")), n.html(a.template(t.template, t.data)), a.boxBody.find("." + a.options.container.contentClass).empty().removeClass(a.currentPageName ? a.currentPageName : "").addClass(e).append(n), t.on && a.delegateEvents(n, t.on), a.currentPageName = e) : a.hideFeedback()
                        },
                        nextPage: function() {
                            a.openPage(a.options.pages[a.currentPageName].nextPage)
                        },
                        template: function(e, t) {
                            var n, r, i = {
                                interpolate: /\{\{(.+?)\}\}/g
                            };
                            return n = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(i.interpolate, function(e, t) {
                                return "'," + t.replace(/\\'/g, "'") + ",'"
                            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", r = new Function("obj", n), r(t)
                        },
                        getAPI: function() {
                            return {
                                v1: {
                                    $: a.$,
                                    openPage: a.openPage,
                                    hideFeedback: a.hideFeedback,
                                    nextPage: a.nextPage,
                                    sendFeedback: a.sendFeedback,
                                    template: a.template,
                                    getIframe: function() {
                                        return a.iframe
                                    },
                                    getBoxBody: function() {
                                        return a.boxBody
                                    },
                                    getCurrentPageName: function() {
                                        return a.currentPageName
                                    }
                                }
                            }
                        }
                    }, a.initialize()
                };
            return d
        }), window.__qubit = window.__qubit || {}, window.__qubit.ProactiveFeedback = require("js/feedback")
    })()
} catch (e) {
    window.debug && console.debug(e)
};