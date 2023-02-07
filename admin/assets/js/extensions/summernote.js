/*! For license information please see summernote.js.LICENSE.txt */
(() => {
  var e = {
      9755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (o, i) {
          "use strict";
          var r = [],
            a = Object.getPrototypeOf,
            s = r.slice,
            l = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            c = r.push,
            u = r.indexOf,
            d = {},
            f = d.toString,
            h = d.hasOwnProperty,
            p = h.toString,
            v = p.call(Object),
            m = {},
            g = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            b = function (e) {
              return null != e && e === e.window;
            },
            y = o.document,
            k = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var o,
              i,
              r = (n = n || y).createElement("script");
            if (((r.text = e), t))
              for (o in k)
                (i = t[o] || (t.getAttribute && t.getAttribute(o))) &&
                  r.setAttribute(o, i);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function w(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[f.call(e)] || "object"
              : typeof e;
          }
          var C = "3.5.1",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = w(e);
            return (
              !g(e) &&
              !b(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: C,
              constructor: T,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: r.sort,
              splice: r.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  o,
                  i,
                  r,
                  a = arguments[0] || {},
                  s = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || g(a) || (a = {}),
                    s === l && ((a = this), s--);
                  s < l;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (o = e[t]),
                        "__proto__" !== t &&
                          a !== o &&
                          (c &&
                          o &&
                          (T.isPlainObject(o) || (i = Array.isArray(o)))
                            ? ((n = a[t]),
                              (r =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = T.extend(c, r, o)))
                            : void 0 !== o && (a[t] = o));
                return a;
              }),
            T.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== f.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = h.call(t, "constructor") && t.constructor) &&
                      p.call(n) === v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  o = 0;
                if (S(e))
                  for (
                    n = e.length;
                    o < n && !1 !== t.call(e[o], o, e[o]);
                    o++
                  );
                else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, o = 0, i = e.length; o < n; o++)
                  e[i++] = t[o];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var o = [], i = 0, r = e.length, a = !n; i < r; i++)
                  !t(e[i], i) !== a && o.push(e[i]);
                return o;
              },
              map: function (e, t, n) {
                var o,
                  i,
                  r = 0,
                  a = [];
                if (S(e))
                  for (o = e.length; r < o; r++)
                    null != (i = t(e[r], r, n)) && a.push(i);
                else for (r in e) null != (i = t(e[r], r, n)) && a.push(i);
                return l(a);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = r[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var E = (function (e) {
            var t,
              n,
              o,
              i,
              r,
              a,
              s,
              l,
              c,
              u,
              d,
              f,
              h,
              p,
              v,
              m,
              g,
              b,
              y,
              k = "sizzle" + 1 * new Date(),
              x = e.document,
              w = 0,
              C = 0,
              T = le(),
              S = le(),
              E = le(),
              N = le(),
              A = function (e, t) {
                return e === t && (d = !0), 0;
              },
              L = {}.hasOwnProperty,
              $ = [],
              I = $.pop,
              P = $.push,
              D = $.push,
              R = $.slice,
              F = function (e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              H =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              j = "[\\x20\\t\\r\\n\\f]",
              O =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                O +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                O +
                "))|)" +
                j +
                "*\\]",
              M =
                ":(" +
                O +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
              z = new RegExp(j + "+", "g"),
              q = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              U = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              W = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              _ = new RegExp(j + "|>"),
              K = new RegExp(M),
              V = new RegExp("^" + O + "$"),
              G = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              X = /HTML$/i,
              Y = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              Z = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                f();
              },
              ae = ke(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply(($ = R.call(x.childNodes)), x.childNodes),
                $[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: $.length
                  ? function (e, t) {
                      P.apply(e, R.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, o, i) {
              var r,
                s,
                c,
                u,
                d,
                p,
                g,
                b = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((o = o || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return o;
              if (!i && (f(t), (t = t || h), v)) {
                if (11 !== x && (d = J.exec(e)))
                  if ((r = d[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(r))) return o;
                      if (c.id === r) return o.push(c), o;
                    } else if (
                      b &&
                      (c = b.getElementById(r)) &&
                      y(t, c) &&
                      c.id === r
                    )
                      return o.push(c), o;
                  } else {
                    if (d[2]) return D.apply(o, t.getElementsByTagName(e)), o;
                    if (
                      (r = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(o, t.getElementsByClassName(r)), o;
                  }
                if (
                  n.qsa &&
                  !N[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((g = e), (b = t), 1 === x && (_.test(e) || W.test(e)))) {
                    for (
                      ((b = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(oe, ie))
                          : t.setAttribute("id", (u = k))),
                        s = (p = a(e)).length;
                      s--;

                    )
                      p[s] = (u ? "#" + u : ":scope") + " " + ye(p[s]);
                    g = p.join(",");
                  }
                  try {
                    return D.apply(o, b.querySelectorAll(g)), o;
                  } catch (t) {
                    N(e, !0);
                  } finally {
                    u === k && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(q, "$1"), t, o, i);
            }
            function le() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > o.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ce(e) {
              return (e[k] = !0), e;
            }
            function ue(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                o.attrHandle[n[i]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                o =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (o) return o;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function he(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function pe(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, o) {
                    for (var i, r = e([], n.length, t), a = r.length; a--; )
                      n[(i = r[a])] && (n[i] = !(o[i] = n[i]));
                  })
                );
              });
            }
            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (r = se.isXML =
              function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !X.test(t || (n && n.nodeName) || "HTML");
              }),
            (f = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : x;
                return a != h && 9 === a.nodeType && a.documentElement
                  ? ((p = (h = a).documentElement),
                    (v = !r(h)),
                    x != h &&
                      (i = h.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", re, !1)
                        : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.scope = ue(function (e) {
                      return (
                        p.appendChild(e).appendChild(h.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Z.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (p.appendChild(e).id = k),
                        !h.getElementsByName || !h.getElementsByName(k).length
                      );
                    })),
                    n.getById
                      ? ((o.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (o.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((o.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (o.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              o,
                              i,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                i = t.getElementsByName(e), o = 0;
                                (r = i[o++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (o.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            o = [],
                            i = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = r[i++]); )
                              1 === n.nodeType && o.push(n);
                            return o;
                          }
                          return r;
                        }),
                    (o.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (g = []),
                    (m = []),
                    (n.qsa = Z.test(h.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (p.appendChild(e).innerHTML =
                          "<a id='" +
                          k +
                          "'></a><select id='" +
                          k +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")"
                            ),
                          e.querySelectorAll("[id~=" + k + "-]").length ||
                            m.push("~="),
                          (t = h.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + k + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (p.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = Z.test(
                      (b =
                        p.matches ||
                        p.webkitMatchesSelector ||
                        p.mozMatchesSelector ||
                        p.oMatchesSelector ||
                        p.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = b.call(e, "*")),
                          b.call(e, "[s!='']:x"),
                          g.push("!=", M);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (g = g.length && new RegExp(g.join("|"))),
                    (t = Z.test(p.compareDocumentPosition)),
                    (y =
                      t || Z.test(p.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              o = t && t.parentNode;
                            return (
                              e === o ||
                              !(
                                !o ||
                                1 !== o.nodeType ||
                                !(n.contains
                                  ? n.contains(o)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(o))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (A = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var o =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            o ||
                            (1 &
                              (o =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === o)
                              ? e == h || (e.ownerDocument == x && y(x, e))
                                ? -1
                                : t == h || (t.ownerDocument == x && y(x, t))
                                ? 1
                                : u
                                ? F(u, e) - F(u, t)
                                : 0
                              : 4 & o
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            o = 0,
                            i = e.parentNode,
                            r = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !r)
                            return e == h
                              ? -1
                              : t == h
                              ? 1
                              : i
                              ? -1
                              : r
                              ? 1
                              : u
                              ? F(u, e) - F(u, t)
                              : 0;
                          if (i === r) return fe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[o] === s[o]; ) o++;
                          return o
                            ? fe(a[o], s[o])
                            : a[o] == x
                            ? -1
                            : s[o] == x
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (f(e),
                n.matchesSelector &&
                  v &&
                  !N[t + " "] &&
                  (!g || !g.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var o = b.call(e, t);
                  if (
                    o ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return o;
                } catch (e) {
                  N(t, !0);
                }
              return se(t, h, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != h && f(e), y(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != h && f(e);
              var i = o.attrHandle[t.toLowerCase()],
                r =
                  i && L.call(o.attrHandle, t.toLowerCase())
                    ? i(e, t, !v)
                    : void 0;
              return void 0 !== r
                ? r
                : n.attributes || !v
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(oe, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                o = [],
                i = 0,
                r = 0;
              if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(A),
                d)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (i = o.push(r));
                for (; i--; ) e.splice(o[i], 1);
              }
              return (u = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = "",
                  o = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[o++]); ) n += i(t);
                return n;
              }),
            ((o = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            K.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)"
                      )) &&
                        T(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (o) {
                      var i = se.attr(o, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, o, i) {
                    var r = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === o && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            f,
                            h,
                            p,
                            v = r !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            b = !l && !s,
                            y = !1;
                          if (m) {
                            if (r) {
                              for (; v; ) {
                                for (f = t; (f = f[v]); )
                                  if (
                                    s
                                      ? f.nodeName.toLowerCase() === g
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                p = v = "only" === e && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((p = [a ? m.firstChild : m.lastChild]), a && b)
                            ) {
                              for (
                                y =
                                  (h =
                                    (c =
                                      (u =
                                        (d = (f = m)[k] || (f[k] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] ||
                                      [])[0] === w && c[1]) && c[2],
                                  f = h && m.childNodes[h];
                                (f =
                                  (++h && f && f[v]) || (y = h = 0) || p.pop());

                              )
                                if (1 === f.nodeType && ++y && f === t) {
                                  u[e] = [w, h, y];
                                  break;
                                }
                            } else if (
                              (b &&
                                (y = h =
                                  (c =
                                    (u =
                                      (d = (f = t)[k] || (f[k] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === w && c[1]),
                              !1 === y)
                            )
                              for (
                                ;
                                (f =
                                  (++h && f && f[v]) ||
                                  (y = h = 0) ||
                                  p.pop()) &&
                                ((s
                                  ? f.nodeName.toLowerCase() !== g
                                  : 1 !== f.nodeType) ||
                                  !++y ||
                                  (b &&
                                    ((u =
                                      (d = f[k] || (f[k] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[e] = [w, y]),
                                  f !== t));

                              );
                            return (y -= i) === o || (y % o == 0 && y / o >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        o.pseudos[e] ||
                        o.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return i[k]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        o.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var o, r = i(e, t), a = r.length; a--; )
                                e[(o = F(e, r[a]))] = !(n[o] = r[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      o = s(e.replace(q, "$1"));
                    return o[k]
                      ? ce(function (e, t, n, i) {
                          for (
                            var r, a = o(e, null, i, []), s = e.length;
                            s--;

                          )
                            (r = a[s]) && (e[s] = !(t[s] = r));
                        })
                      : function (e, i, r) {
                          return (
                            (t[0] = e),
                            o(t, null, r, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      V.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === p;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !o.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return Y.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; )
                      e.push(o);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                    return e;
                  }),
                },
              }).pseudos.nth = o.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              o.pseudos[t] = he(t);
            for (t in { submit: !0, reset: !0 }) o.pseudos[t] = pe(t);
            function be() {}
            function ye(e) {
              for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
              return o;
            }
            function ke(e, t, n) {
              var o = t.dir,
                i = t.next,
                r = i || o,
                a = n && "parentNode" === r,
                s = C++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[o]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      f = [w, s];
                    if (l) {
                      for (; (t = t[o]); )
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[o]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((u =
                              (d = t[k] || (t[k] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[o] || t;
                          else {
                            if ((c = u[r]) && c[0] === w && c[1] === s)
                              return (f[2] = c[2]);
                            if (((u[r] = f), (f[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, o) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, o)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function we(e, t, n, o, i) {
              for (
                var r, a = [], s = 0, l = e.length, c = null != t;
                s < l;
                s++
              )
                (r = e[s]) &&
                  ((n && !n(r, o, i)) || (a.push(r), c && t.push(s)));
              return a;
            }
            function Ce(e, t, n, o, i, r) {
              return (
                o && !o[k] && (o = Ce(o)),
                i && !i[k] && (i = Ce(i, r)),
                ce(function (r, a, s, l) {
                  var c,
                    u,
                    d,
                    f = [],
                    h = [],
                    p = a.length,
                    v =
                      r ||
                      (function (e, t, n) {
                        for (var o = 0, i = t.length; o < i; o++)
                          se(e, t[o], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || (!r && t) ? v : we(v, f, e, s, l),
                    g = n ? (i || (r ? e : p || o) ? [] : a) : m;
                  if ((n && n(m, g, s, l), o))
                    for (c = we(g, h), o(c, [], s, l), u = c.length; u--; )
                      (d = c[u]) && (g[h[u]] = !(m[h[u]] = d));
                  if (r) {
                    if (i || e) {
                      if (i) {
                        for (c = [], u = g.length; u--; )
                          (d = g[u]) && c.push((m[u] = d));
                        i(null, (g = []), c, l);
                      }
                      for (u = g.length; u--; )
                        (d = g[u]) &&
                          (c = i ? F(r, d) : f[u]) > -1 &&
                          (r[c] = !(a[c] = d));
                    }
                  } else (g = we(g === a ? g.splice(p, g.length) : g)), i ? i(null, a, g, l) : D.apply(a, g);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  i,
                  r = e.length,
                  a = o.relative[e[0].type],
                  s = a || o.relative[" "],
                  l = a ? 1 : 0,
                  u = ke(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  d = ke(
                    function (e) {
                      return F(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  f = [
                    function (e, n, o) {
                      var i =
                        (!a && (o || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, o) : d(e, n, o));
                      return (t = null), i;
                    },
                  ];
                l < r;
                l++
              )
                if ((n = o.relative[e[l].type])) f = [ke(xe(f), n)];
                else {
                  if ((n = o.filter[e[l].type].apply(null, e[l].matches))[k]) {
                    for (i = ++l; i < r && !o.relative[e[i].type]; i++);
                    return Ce(
                      l > 1 && xe(f),
                      l > 1 &&
                        ye(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(q, "$1"),
                      n,
                      l < i && Te(e.slice(l, i)),
                      i < r && Te((e = e.slice(i))),
                      i < r && ye(e)
                    );
                  }
                  f.push(n);
                }
              return xe(f);
            }
            return (
              (be.prototype = o.filters = o.pseudos),
              (o.setFilters = new be()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u = S[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (s = e, l = [], c = o.preFilter; s; ) {
                    for (a in ((n && !(i = U.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), l.push((r = []))),
                    (n = !1),
                    (i = W.exec(s)) &&
                      ((n = i.shift()),
                      r.push({ value: n, type: i[0].replace(q, " ") }),
                      (s = s.slice(n.length))),
                    o.filter))
                      !(i = G[a].exec(s)) ||
                        (c[a] && !(i = c[a](i))) ||
                        ((n = i.shift()),
                        r.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    r = [],
                    s = E[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Te(t[n]))[k] ? i.push(s) : r.push(s);
                    (s = E(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          r = function (r, a, s, l, u) {
                            var d,
                              p,
                              m,
                              g = 0,
                              b = "0",
                              y = r && [],
                              k = [],
                              x = c,
                              C = r || (i && o.find.TAG("*", u)),
                              T = (w += null == x ? 1 : Math.random() || 0.1),
                              S = C.length;
                            for (
                              u && (c = a == h || a || u);
                              b !== S && null != (d = C[b]);
                              b++
                            ) {
                              if (i && d) {
                                for (
                                  p = 0,
                                    a ||
                                      d.ownerDocument == h ||
                                      (f(d), (s = !v));
                                  (m = e[p++]);

                                )
                                  if (m(d, a || h, s)) {
                                    l.push(d);
                                    break;
                                  }
                                u && (w = T);
                              }
                              n && ((d = !m && d) && g--, r && y.push(d));
                            }
                            if (((g += b), n && b !== g)) {
                              for (p = 0; (m = t[p++]); ) m(y, k, a, s);
                              if (r) {
                                if (g > 0)
                                  for (; b--; )
                                    y[b] || k[b] || (k[b] = I.call(l));
                                k = we(k);
                              }
                              D.apply(l, k),
                                u &&
                                  !r &&
                                  k.length > 0 &&
                                  g + t.length > 1 &&
                                  se.uniqueSort(l);
                            }
                            return u && ((w = T), (c = x)), y;
                          };
                        return n ? ce(r) : r;
                      })(r, i)
                    )).selector = e;
                  }
                  return s;
                }),
              (l = se.select =
                function (e, t, n, i) {
                  var r,
                    l,
                    c,
                    u,
                    d,
                    f = "function" == typeof e && e,
                    h = !i && a((e = f.selector || e));
                  if (((n = n || []), 1 === h.length)) {
                    if (
                      (l = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      o.relative[l[1].type]
                    ) {
                      if (
                        !(t = (o.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      f && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      r = G.needsContext.test(e) ? 0 : l.length;
                      r-- && ((c = l[r]), !o.relative[(u = c.type)]);

                    )
                      if (
                        (d = o.find[u]) &&
                        (i = d(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ge(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = i.length && ye(l))))
                          return D.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (f || s(e, h))(
                      i,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && ge(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = k.split("").sort(A).join("") === k),
              (n.detectDuplicates = !!d),
              f(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(H, function (e, t, n) {
                  var o;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (o = e.getAttributeNode(t)) && o.specified
                      ? o.value
                      : null;
                }),
              se
            );
          })(o);
          (T.find = E),
            (T.expr = E.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = E.uniqueSort),
            (T.text = E.getText),
            (T.isXMLDoc = E.isXML),
            (T.contains = E.contains),
            (T.escapeSelector = E.escape);
          var N = function (e, t, n) {
              for (
                var o = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && T(e).is(n)) break;
                  o.push(e);
                }
              return o;
            },
            A = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            L = T.expr.match.needsContext;
          function $(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var I =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function P(e, t, n) {
            return g(t)
              ? T.grep(e, function (e, o) {
                  return !!t.call(e, o, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var o = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === o.nodeType
                ? T.find.matchesSelector(o, e)
                  ? [o]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  o = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < o; t++)
                        if (T.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < o; t++)
                  T.find(e, i[t], n);
                return o > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(P(this, e || [], !0));
              },
              is: function (e) {
                return !!P(
                  this,
                  "string" == typeof e && L.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var o, i;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(o =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : R.exec(e)) ||
                (!o[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (o[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      o[1],
                      t && t.nodeType ? t.ownerDocument || t : y,
                      !0
                    )
                  ),
                  I.test(o[1]) && T.isPlainObject(t))
                )
                  for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this;
              }
              return (
                (i = y.getElementById(o[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : g(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (D = T(y));
          var F = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function j(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                o = 0,
                i = this.length,
                r = [],
                a = "string" != typeof e && T(e);
              if (!L.test(e))
                for (; o < i; o++)
                  for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(T(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return N(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return N(e, "parentNode", n);
                },
                next: function (e) {
                  return j(e, "nextSibling");
                },
                prev: function (e) {
                  return j(e, "previousSibling");
                },
                nextAll: function (e) {
                  return N(e, "nextSibling");
                },
                prevAll: function (e) {
                  return N(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return N(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return N(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return A((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return A(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : ($(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, o) {
                  var i = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (o = n),
                    o && "string" == typeof o && (i = T.filter(o, i)),
                    this.length > 1 &&
                      (H[e] || T.uniqueSort(i), F.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var O = /[^\x20\t\r\n\f]+/g;
          function B(e) {
            return e;
          }
          function M(e) {
            throw e;
          }
          function z(e, t, n, o) {
            var i;
            try {
              e && g((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && g((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(o));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(O) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              o,
              i,
              r = [],
              a = [],
              s = -1,
              l = function () {
                for (i = i || e.once, o = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < r.length; )
                    !1 === r[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (r = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((s = r.length - 1), a.push(n)),
                      (function t(n) {
                        T.each(n, function (n, o) {
                          g(o)
                            ? (e.unique && c.has(o)) || r.push(o)
                            : o && o.length && "string" !== w(o) && t(o);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (i = a = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (i = a = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!o;
                },
              };
            return c;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, o) {
                          var i = g(e[o[4]]) && e[o[4]];
                          r[o[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && g(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[o[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var r = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            l = arguments,
                            c = function () {
                              var o, c;
                              if (!(e < r)) {
                                if ((o = n.apply(s, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  o &&
                                  ("object" == typeof o ||
                                    "function" == typeof o) &&
                                  o.then),
                                  g(c)
                                    ? i
                                      ? c.call(o, a(r, t, B, i), a(r, t, M, i))
                                      : (r++,
                                        c.call(
                                          o,
                                          a(r, t, B, i),
                                          a(r, t, M, i),
                                          a(r, t, B, t.notifyWith)
                                        ))
                                    : (n !== B && ((s = void 0), (l = [o])),
                                      (i || t.resolveWith)(s, l));
                              }
                            },
                            u = i
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (o) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(o, u.stackTrace),
                                      e + 1 >= r &&
                                        (n !== M && ((s = void 0), (l = [o])),
                                        t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? u()
                            : (T.Deferred.getStackHook &&
                                (u.stackTrace = T.Deferred.getStackHook()),
                              o.setTimeout(u));
                        };
                      }
                      return T.Deferred(function (o) {
                        t[0][3].add(a(0, o, g(i) ? i : B, o.notifyWith)),
                          t[1][3].add(a(0, o, g(e) ? e : B)),
                          t[2][3].add(a(0, o, g(n) ? n : M));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, i) : i;
                    },
                  },
                  r = {};
                return (
                  T.each(t, function (e, o) {
                    var a = o[2],
                      s = o[5];
                    (i[o[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(o[3].fire),
                      (r[o[0]] = function () {
                        return (
                          r[o[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[o[0] + "With"] = a.fireWith);
                  }),
                  i.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  o = Array(n),
                  i = s.call(arguments),
                  r = T.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (o[e] = this),
                        (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || r.resolveWith(o, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (z(e, r.done(a(n)).resolve, r.reject, !t),
                  "pending" === r.state() || g(i[n] && i[n].then))
                )
                  return r.then();
                for (; n--; ) z(i[n], a(n), r.reject);
                return r.promise();
              },
            });
          var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            o.console &&
              o.console.warn &&
              e &&
              q.test(e.name) &&
              o.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              o.setTimeout(function () {
                throw e;
              });
            });
          var U = T.Deferred();
          function W() {
            y.removeEventListener("DOMContentLoaded", W),
              o.removeEventListener("load", W),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              U.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || U.resolveWith(y, [T]));
              },
            }),
            (T.ready.then = U.then),
            "complete" === y.readyState ||
            ("loading" !== y.readyState && !y.documentElement.doScroll)
              ? o.setTimeout(T.ready)
              : (y.addEventListener("DOMContentLoaded", W),
                o.addEventListener("load", W));
          var _ = function (e, t, n, o, i, r, a) {
              var s = 0,
                l = e.length,
                c = null == n;
              if ("object" === w(n))
                for (s in ((i = !0), n)) _(e, t, s, n[s], !0, r, a);
              else if (
                void 0 !== o &&
                ((i = !0),
                g(o) || (a = !0),
                c &&
                  (a
                    ? (t.call(e, o), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(T(e), n);
                      }))),
                t)
              )
                for (; s < l; s++)
                  t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
              return i ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            },
            K = /^-ms-/,
            V = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(K, "ms-").replace(V, G);
          }
          var Y = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = T.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Y(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var o,
                  i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (o in t) i[X(o)] = t[o];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  o = e[this.expando];
                if (void 0 !== o) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in o
                      ? [t]
                      : t.match(O) || []).length;
                    for (; n--; ) delete o[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(o)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var Z = new Q(),
            J = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var o;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((o = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(o)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return J.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  o,
                  i,
                  r = this[0],
                  a = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = J.get(r)),
                    1 === r.nodeType && !Z.get(r, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (o = a[n].name).indexOf("data-") &&
                        ((o = X(o.slice(5))), ne(r, o, i[o]));
                    Z.set(r, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : _(
                      this,
                      function (t) {
                        var n;
                        if (r && void 0 === t)
                          return void 0 !== (n = J.get(r, e)) ||
                            void 0 !== (n = ne(r, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          J.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  J.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var o;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (o = Z.get(e, t)),
                    n &&
                      (!o || Array.isArray(n)
                        ? (o = Z.access(e, t, T.makeArray(n)))
                        : o.push(n)),
                    o || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  o = n.length,
                  i = n.shift(),
                  r = T._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), o--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    i.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      r
                    )),
                  !o && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  o = 1,
                  i = T.Deferred(),
                  r = this,
                  a = this.length,
                  s = function () {
                    --o || i.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = Z.get(r[a], e + "queueHooks")) &&
                    n.empty &&
                    (o++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            ae = y.documentElement,
            se = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function ue(e, t, n, o) {
            var i,
              r,
              a = 20,
              s = o
                ? function () {
                    return o.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = s(),
              c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                ie.exec(T.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; a--; )
                T.style(e, t, u + c),
                  (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
                  (u /= r);
              (u *= 2), T.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                o && ((o.unit = c), (o.start = u), (o.end = i))),
              i
            );
          }
          var de = {};
          function fe(e) {
            var t,
              n = e.ownerDocument,
              o = e.nodeName,
              i = de[o];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(o))),
              (i = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (de[o] = i),
              i)
            );
          }
          function he(e, t) {
            for (var n, o, i = [], r = 0, a = e.length; r < a; r++)
              (o = e[r]).style &&
                ((n = o.style.display),
                t
                  ? ("none" === n &&
                      ((i[r] = Z.get(o, "display") || null),
                      i[r] || (o.style.display = "")),
                    "" === o.style.display && ce(o) && (i[r] = fe(o)))
                  : "none" !== n && ((i[r] = "none"), Z.set(o, "display", n)));
            for (r = 0; r < a; r++) null != i[r] && (e[r].style.display = i[r]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return he(this, !0);
            },
            hide: function () {
              return he(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var pe,
            ve,
            me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            be = /^$|^module$|\/(?:java|ecma)script/i;
          (pe = y.createDocumentFragment().appendChild(y.createElement("div"))),
            (ve = y.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            pe.appendChild(ve),
            (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (pe.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
            (pe.innerHTML = "<option></option>"),
            (m.option = !!pe.lastChild);
          var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function ke(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && $(e, t)) ? T.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, o = e.length; n < o; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
            (ye.th = ye.td),
            m.option ||
              (ye.optgroup = ye.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var we = /<|&#?\w+;/;
          function Ce(e, t, n, o, i) {
            for (
              var r,
                a,
                s,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                f = [],
                h = 0,
                p = e.length;
              h < p;
              h++
            )
              if ((r = e[h]) || 0 === r)
                if ("object" === w(r)) T.merge(f, r.nodeType ? [r] : r);
                else if (we.test(r)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                      l = ye[s] || ye._default,
                      a.innerHTML = l[1] + T.phpPrefilter(r) + l[2],
                      u = l[0];
                    u--;

                  )
                    a = a.lastChild;
                  T.merge(f, a.childNodes),
                    ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(r));
            for (d.textContent = "", h = 0; (r = f[h++]); )
              if (o && T.inArray(r, o) > -1) i && i.push(r);
              else if (
                ((c = se(r)),
                (a = ke(d.appendChild(r), "script")),
                c && xe(a),
                n)
              )
                for (u = 0; (r = a[u++]); ) be.test(r.type || "") && n.push(r);
            return d;
          }
          var Te = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ee = /^([^.]*)(?:\.(.+)|)/;
          function Ne() {
            return !0;
          }
          function Ae() {
            return !1;
          }
          function Le(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return y.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function $e(e, t, n, o, i, r) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((o = o || n), (n = void 0)),
              t))
                $e(e, s, n, o, t[s], r);
              return e;
            }
            if (
              (null == o && null == i
                ? ((i = n), (o = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = o), (o = void 0))
                    : ((i = o), (o = n), (n = void 0))),
              !1 === i)
            )
              i = Ae;
            else if (!i) return e;
            return (
              1 === r &&
                ((a = i),
                ((i = function (e) {
                  return T().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, i, o, n);
              })
            );
          }
          function Ie(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var o,
                      i,
                      r = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = s.call(arguments)),
                        Z.set(this, t, r),
                        (o = n(this, t)),
                        this[t](),
                        r !== (i = Z.get(this, t)) || o
                          ? Z.set(this, t, !1)
                          : (i = {}),
                        r !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i.value
                        );
                    } else
                      r.length &&
                        (Z.set(this, t, {
                          value: T.event.trigger(
                            T.extend(r[0], T.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Z.get(e, t) && T.event.add(e, t, Ne);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, o, i) {
              var r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                v,
                m = Z.get(e);
              if (Y(e))
                for (
                  n.handler && ((n = (r = n).handler), (i = r.selector)),
                    i && T.find.matchesSelector(ae, i),
                    n.guid || (n.guid = T.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (a = m.handle) ||
                      (a = m.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(O) || [""]).length;
                  c--;

                )
                  (h = v = (s = Ee.exec(t[c]) || [])[1]),
                    (p = (s[2] || "").split(".").sort()),
                    h &&
                      ((d = T.event.special[h] || {}),
                      (h = (i ? d.delegateType : d.bindType) || h),
                      (d = T.event.special[h] || {}),
                      (u = T.extend(
                        {
                          type: h,
                          origType: v,
                          data: o,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && T.expr.match.needsContext.test(i),
                          namespace: p.join("."),
                        },
                        r
                      )),
                      (f = l[h]) ||
                        (((f = l[h] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, o, p, a)) ||
                          (e.addEventListener && e.addEventListener(h, a))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                      (T.event.global[h] = !0));
            },
            remove: function (e, t, n, o, i) {
              var r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                v,
                m = Z.hasData(e) && Z.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--; )
                  if (
                    ((h = v = (s = Ee.exec(t[c]) || [])[1]),
                    (p = (s[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      d = T.event.special[h] || {},
                        f =
                          l[(h = (o ? d.delegateType : d.bindType) || h)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = r = f.length;
                      r--;

                    )
                      (u = f[r]),
                        (!i && v !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (s && !s.test(u.namespace)) ||
                          (o &&
                            o !== u.selector &&
                            ("**" !== o || !u.selector)) ||
                          (f.splice(r, 1),
                          u.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                        T.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) T.event.remove(e, h + t[c], n, o, !0);
                T.isEmptyObject(l) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                o,
                i,
                r,
                a,
                s = new Array(arguments.length),
                l = T.event.fix(e),
                c =
                  (Z.get(this, "events") || Object.create(null))[l.type] || [],
                u = T.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  a = T.event.handlers.call(this, l, c), t = 0;
                  (i = a[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = i.elem, n = 0;
                    (r = i.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (o = (
                          (T.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(i.elem, s)) &&
                        !1 === (l.result = o) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                o,
                i,
                r,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (r = [], a = {}, n = 0; n < l; n++)
                      void 0 === a[(i = (o = t[n]).selector + " ")] &&
                        (a[i] = o.needsContext
                          ? T(i, this).index(c) > -1
                          : T.find(i, this, null, [c]).length),
                        a[i] && r.push(o);
                    r.length && s.push({ elem: c, handlers: r });
                  }
              return (
                (c = this),
                l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Ie(t, "click", Ne),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Ie(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Z.get(t, "click")) ||
                    $(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ne
                      : Ae),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Ae,
              isPropagationStopped: Ae,
              isImmediatePropagationStopped: Ae,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ne),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ne),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ne),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Te.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && Se.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Ie(this, e, Le), !1;
                },
                trigger: function () {
                  return Ie(this, e), !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      o = this,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === o || T.contains(o, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, o) {
                return $e(this, e, t, n, o);
              },
              one: function (e, t, n, o) {
                return $e(this, e, t, n, o, 1);
              },
              off: function (e, t, n) {
                var o, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (o = e.handleObj),
                    T(e.delegateTarget).off(
                      o.namespace ? o.origType + "." + o.namespace : o.origType,
                      o.selector,
                      o.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ae),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Pe = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Fe(e, t) {
            return (
              ($(e, "table") &&
                $(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function He(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function je(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Oe(e, t) {
            var n, o, i, r, a, s;
            if (1 === t.nodeType) {
              if (Z.hasData(e) && (s = Z.get(e).events))
                for (i in (Z.remove(t, "handle events"), s))
                  for (n = 0, o = s[i].length; n < o; n++)
                    T.event.add(t, i, s[i][n]);
              J.hasData(e) &&
                ((r = J.access(e)), (a = T.extend({}, r)), J.set(t, a));
            }
          }
          function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, o) {
            t = l(t);
            var i,
              r,
              a,
              s,
              c,
              u,
              d = 0,
              f = e.length,
              h = f - 1,
              p = t[0],
              v = g(p);
            if (
              v ||
              (f > 1 && "string" == typeof p && !m.checkClone && De.test(p))
            )
              return e.each(function (i) {
                var r = e.eq(i);
                v && (t[0] = p.call(this, i, r.php())), Me(r, t, n, o);
              });
            if (
              f &&
              ((r = (i = Ce(t, e[0].ownerDocument, !1, e, o)).firstChild),
              1 === i.childNodes.length && (i = r),
              r || o)
            ) {
              for (s = (a = T.map(ke(i, "script"), He)).length; d < f; d++)
                (c = i),
                  d !== h &&
                    ((c = T.clone(c, !0, !0)),
                    s && T.merge(a, ke(c, "script"))),
                  n.call(e[d], c, d);
              if (s)
                for (
                  u = a[a.length - 1].ownerDocument, T.map(a, je), d = 0;
                  d < s;
                  d++
                )
                  (c = a[d]),
                    be.test(c.type || "") &&
                      !Z.access(c, "globalEval") &&
                      T.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !c.noModule &&
                          T._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : x(c.textContent.replace(Re, ""), c, u));
            }
            return e;
          }
          function ze(e, t, n) {
            for (
              var o, i = t ? T.filter(t, e) : e, r = 0;
              null != (o = i[r]);
              r++
            )
              n || 1 !== o.nodeType || T.cleanData(ke(o)),
                o.parentNode &&
                  (n && se(o) && xe(ke(o, "script")),
                  o.parentNode.removeChild(o));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var o,
                i,
                r,
                a,
                s = e.cloneNode(!0),
                l = se(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (a = ke(s), o = 0, i = (r = ke(e)).length; o < i; o++)
                  Be(r[o], a[o]);
              if (t)
                if (n)
                  for (
                    r = r || ke(e), a = a || ke(s), o = 0, i = r.length;
                    o < i;
                    o++
                  )
                    Oe(r[o], a[o]);
                else Oe(e, s);
              return (
                (a = ke(s, "script")).length > 0 &&
                  xe(a, !l && ke(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, o, i = T.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (Y(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (o in t.events)
                        i[o]
                          ? T.event.remove(n, o)
                          : T.removeEvent(n, o, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return ze(this, e, !0);
              },
              remove: function (e) {
                return ze(this, e);
              },
              text: function (e) {
                return _(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Me(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Fe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Me(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Fe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(ke(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return _(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      o = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Pe.test(e) &&
                      !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.phpPrefilter(e);
                      try {
                        for (; n < o; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(ke(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Me(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(ke(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, o = [], i = T(e), r = i.length - 1, a = 0;
                    a <= r;
                    a++
                  )
                    (n = a === r ? this : this.clone(!0)),
                      T(i[a])[t](n),
                      c.apply(o, n.get());
                  return this.pushStack(o);
                };
              }
            );
          var qe = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
            Ue = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = o), t.getComputedStyle(e);
            },
            We = function (e, t, n) {
              var o,
                i,
                r = {};
              for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((o = n.call(e)), t)) e.style[i] = r[i];
              return o;
            },
            _e = new RegExp(re.join("|"), "i");
          function Ke(e, t, n) {
            var o,
              i,
              r,
              a,
              s = e.style;
            return (
              (n = n || Ue(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = T.style(e, t)),
                !m.pixelBoxStyles() &&
                  qe.test(a) &&
                  _e.test(t) &&
                  ((o = s.width),
                  (i = s.minWidth),
                  (r = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = o),
                  (s.minWidth = i),
                  (s.maxWidth = r))),
              void 0 !== a ? a + "" : a
            );
          }
          function Ve(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(c).appendChild(u);
                var e = o.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (r = 12 === t(u.offsetWidth / 3)),
                  ae.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              r,
              a,
              s,
              l,
              c = y.createElement("div"),
              u = y.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
              T.extend(m, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == s &&
                      ((e = y.createElement("table")),
                      (t = y.createElement("tr")),
                      (n = y.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (i = o.getComputedStyle(t)),
                      (s = parseInt(i.height) > 3),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Xe = y.createElement("div").style,
            Ye = {};
          function Qe(e) {
            var t = T.cssProps[e] || Ye[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Ze = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var o = ie.exec(t);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
          }
          function ot(e, t, n, o, i, r) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (o ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += T.css(e, n + re[a], !0, i)),
                o
                  ? ("content" === n &&
                      (l -= T.css(e, "padding" + re[a], !0, i)),
                    "margin" !== n &&
                      (l -= T.css(e, "border" + re[a] + "Width", !0, i)))
                  : ((l += T.css(e, "padding" + re[a], !0, i)),
                    "padding" !== n
                      ? (l += T.css(e, "border" + re[a] + "Width", !0, i))
                      : (s += T.css(e, "border" + re[a] + "Width", !0, i)));
            return (
              !o &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        s -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, n) {
            var o = Ue(e),
              i =
                (!m.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, o),
              r = i,
              a = Ke(e, t, o),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && $(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === T.css(e, "display", !1, o))) &&
                e.getClientRects().length &&
                ((i = "border-box" === T.css(e, "boxSizing", !1, o)),
                (r = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                ot(e, t, n || (i ? "border" : "content"), r, o, a) +
                "px"
            );
          }
          function rt(e, t, n, o, i) {
            return new rt.prototype.init(e, t, n, o, i);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ke(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, o) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  r,
                  a,
                  s = X(t),
                  l = Je.test(t),
                  c = e.style;
                if (
                  (l || (t = Qe(s)),
                  (a = T.cssHooks[t] || T.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, o))
                    ? i
                    : c[t];
                "string" === (r = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = ue(e, t, i)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      l ||
                      (n += (i && i[3]) || (T.cssNumber[s] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, o))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, o) {
              var i,
                r,
                a,
                s = X(t);
              return (
                Je.test(t) || (t = Qe(s)),
                (a = T.cssHooks[t] || T.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = Ke(e, t, o)),
                "normal" === i && t in tt && (i = tt[t]),
                "" === n || n
                  ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i)
                  : i
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, o) {
                  if (n)
                    return !Ze.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, o)
                      : We(e, et, function () {
                          return it(e, t, o);
                        });
                },
                set: function (e, n, o) {
                  var i,
                    r = Ue(e),
                    a = !m.scrollboxSize() && "absolute" === r.position,
                    s =
                      (a || o) && "border-box" === T.css(e, "boxSizing", !1, r),
                    l = o ? ot(e, t, o, s, r) : 0;
                  return (
                    s &&
                      a &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          ot(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    nt(0, n, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ke(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      We(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var o = 0,
                        i = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      o < 4;
                      o++
                    )
                      i[e + re[o] + t] = r[o] || r[o - 2] || r[0];
                    return i;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = nt);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return _(
                  this,
                  function (e, t, n) {
                    var o,
                      i,
                      r = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (o = Ue(e), i = t.length; a < i; a++)
                        r[t[a]] = T.css(e, t[a], !1, o);
                      return r;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, o, i, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = o),
                  (this.unit = r || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = rt.prototype.init),
            (T.fx.step = {});
          var at,
            st,
            lt = /^(?:toggle|show|hide)$/,
            ct = /queueHooks$/;
          function ut() {
            st &&
              (!1 === y.hidden && o.requestAnimationFrame
                ? o.requestAnimationFrame(ut)
                : o.setTimeout(ut, T.fx.interval),
              T.fx.tick());
          }
          function dt() {
            return (
              o.setTimeout(function () {
                at = void 0;
              }),
              (at = Date.now())
            );
          }
          function ft(e, t) {
            var n,
              o = 0,
              i = { height: e };
            for (t = t ? 1 : 0; o < 4; o += 2 - t)
              i["margin" + (n = re[o])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function ht(e, t, n) {
            for (
              var o,
                i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                r = 0,
                a = i.length;
              r < a;
              r++
            )
              if ((o = i[r].call(n, t, e))) return o;
          }
          function pt(e, t, n) {
            var o,
              i,
              r = 0,
              a = pt.prefilters.length,
              s = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (i) return !1;
                for (
                  var t = at || dt(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    o = 1 - (n / c.duration || 0),
                    r = 0,
                    a = c.tweens.length;
                  r < a;
                  r++
                )
                  c.tweens[r].run(o);
                return (
                  s.notifyWith(e, [c, o, n]),
                  o < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [c, 1, 0]),
                      s.resolveWith(e, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: at || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var o = T.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(o), o;
                },
                stop: function (t) {
                  var n = 0,
                    o = t ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < o; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                      : s.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, o, i, r, a;
                for (n in e)
                  if (
                    ((i = t[(o = X(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((i = r[1]), (r = e[n] = r[0])),
                    n !== o && ((e[o] = r), delete e[n]),
                    (a = T.cssHooks[o]) && ("expand" in a))
                  )
                    for (n in ((r = a.expand(r)), delete e[o], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = i));
                  else t[o] = i;
              })(u, c.opts.specialEasing);
              r < a;
              r++
            )
              if ((o = pt.prefilters[r].call(c, e, u, c.opts)))
                return (
                  g(o.stop) &&
                    (T._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)),
                  o
                );
            return (
              T.map(u, ht, c),
              g(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (T.Animation = T.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              g(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
              for (var n, o = 0, i = e.length; o < i; o++)
                (n = e[o]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var o,
                  i,
                  r,
                  a,
                  s,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  f = this,
                  h = {},
                  p = e.style,
                  v = e.nodeType && ce(e),
                  m = Z.get(e, "fxshow");
                for (o in (n.queue ||
                  (null == (a = T._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[o]), lt.test(i))) {
                    if (
                      (delete t[o],
                      (r = r || "toggle" === i),
                      i === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[o]) continue;
                      v = !0;
                    }
                    h[o] = (m && m[o]) || T.style(e, o);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
                  for (o in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (c = m && m.display) && (c = Z.get(e, "display")),
                    "none" === (u = T.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (he([e], !0),
                          (c = e.style.display || c),
                          (u = T.css(e, "display")),
                          he([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === T.css(e, "float") &&
                      (l ||
                        (f.done(function () {
                          p.display = c;
                        }),
                        null == c &&
                          ((u = p.display), (c = "none" === u ? "" : u))),
                      (p.display = "inline-block"))),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    f.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (v = m.hidden)
                        : (m = Z.access(e, "fxshow", { display: c })),
                      r && (m.hidden = !v),
                      v && he([e], !0),
                      f.done(function () {
                        for (o in (v || he([e]), Z.remove(e, "fxshow"), h))
                          T.style(e, o, h[o]);
                      })),
                      (l = ht(v ? m[o] : 0, o, f)),
                      o in m ||
                        ((m[o] = l.start),
                        v && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var o =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (g(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !g(t) && t),
                    };
              return (
                T.fx.off
                  ? (o.duration = 0)
                  : "number" != typeof o.duration &&
                    (o.duration in T.fx.speeds
                      ? (o.duration = T.fx.speeds[o.duration])
                      : (o.duration = T.fx.speeds._default)),
                (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
                (o.old = o.complete),
                (o.complete = function () {
                  g(o.old) && o.old.call(this),
                    o.queue && T.dequeue(this, o.queue);
                }),
                o
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, o) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, o);
              },
              animate: function (e, t, n, o) {
                var i = T.isEmptyObject(e),
                  r = T.speed(t, n, o),
                  a = function () {
                    var t = pt(this, T.extend({}, e), r);
                    (i || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                );
              },
              stop: function (e, t, n) {
                var o = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      r = T.timers,
                      a = Z.get(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && ct.test(i) && o(a[i]);
                    for (i = r.length; i--; )
                      r[i].elem !== this ||
                        (null != e && r[i].queue !== e) ||
                        (r[i].anim.stop(n), (t = !1), r.splice(i, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      o = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      r = T.timers,
                      a = o ? o.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++)
                      o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ft(t, !0), e, o, i);
              };
            }),
            T.each(
              {
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, o) {
                  return this.animate(t, e, n, o);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (at = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              st || ((st = !0), ut());
            }),
            (T.fx.stop = function () {
              st = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = o.setTimeout(t, e);
                  n.stop = function () {
                    o.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = y.createElement("input"),
                t = y
                  .createElement("select")
                  .appendChild(y.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = y.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var vt,
            mt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return _(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var o,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === r && T.isXMLDoc(e)) ||
                        (i =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? vt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (o = i.set(e, n, t))
                          ? o
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (o = i.get(e, t))
                        ? o
                        : null == (o = T.find.attr(e, t))
                        ? void 0
                        : o);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && $(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  o = 0,
                  i = t && t.match(O);
                if (i && 1 === e.nodeType)
                  for (; (n = i[o++]); ) e.removeAttribute(n);
              },
            }),
            (vt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = mt[t] || T.find.attr;
              mt[t] = function (e, t, o) {
                var i,
                  r,
                  a = t.toLowerCase();
                return (
                  o ||
                    ((r = mt[a]),
                    (mt[a] = i),
                    (i = null != n(e, t, o) ? a : null),
                    (mt[a] = r)),
                  i
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            bt = /^(?:a|area)$/i;
          function yt(e) {
            return (e.match(O) || []).join(" ");
          }
          function kt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(O)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return _(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var o,
                  i,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                        ? o
                        : (e[t] = n)
                      : i && "get" in i && null !== (o = i.get(e, t))
                      ? o
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  o,
                  i,
                  r,
                  a,
                  s,
                  l = 0;
                if (g(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, kt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = kt(n)), (o = 1 === n.nodeType && " " + yt(i) + " "))
                    ) {
                      for (a = 0; (r = t[a++]); )
                        o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                      i !== (s = yt(o)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  o,
                  i,
                  r,
                  a,
                  s,
                  l = 0;
                if (g(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, kt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = kt(n)), (o = 1 === n.nodeType && " " + yt(i) + " "))
                    ) {
                      for (a = 0; (r = t[a++]); )
                        for (; o.indexOf(" " + r + " ") > -1; )
                          o = o.replace(" " + r + " ", " ");
                      i !== (s = yt(o)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  o = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && o
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : g(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, kt(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, r, a;
                      if (o)
                        for (i = 0, r = T(this), a = xt(e); (t = a[i++]); )
                          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = kt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  o = 0;
                for (t = " " + e + " "; (n = this[o++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + yt(kt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                o,
                i = this[0];
              return arguments.length
                ? ((o = g(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = o ? e.call(this, n, T(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = T.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    T.valHooks[i.type] ||
                    T.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : yt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      o,
                      i = e.options,
                      r = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      l = a ? r + 1 : i.length;
                    for (o = r < 0 ? l : a ? r : 0; o < l; o++)
                      if (
                        ((n = i[o]).selected || o === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, o, i = e.options, r = T.makeArray(t), a = i.length;
                      a--;

                    )
                      ((o = i[a]).selected =
                        T.inArray(T.valHooks.option.get(o), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in o);
          var Ct = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, i) {
              var r,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                p = [n || y],
                v = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = s = n = n || y),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Ct.test(v + T.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((m = v.split(".")), (v = m.shift()), m.sort()),
                  (c = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(v, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (d = T.event.special[v] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!i && !d.noBubble && !b(n)) {
                  for (
                    l = d.delegateType || v,
                      Ct.test(l + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    p.push(a), (s = a);
                  s === (n.ownerDocument || y) &&
                    p.push(s.defaultView || s.parentWindow || o);
                }
                for (r = 0; (a = p[r++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = r > 1 ? l : d.bindType || v),
                    (u =
                      (Z.get(a, "events") || Object.create(null))[e.type] &&
                      Z.get(a, "handle")) && u.apply(a, t),
                    (u = c && a[c]) &&
                      u.apply &&
                      Y(a) &&
                      ((e.result = u.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  i ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                    !Y(n) ||
                    (c &&
                      g(n[v]) &&
                      !b(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (T.event.triggered = v),
                      e.isPropagationStopped() && f.addEventListener(v, Tt),
                      n[v](),
                      e.isPropagationStopped() && f.removeEventListener(v, Tt),
                      (T.event.triggered = void 0),
                      s && (n[c] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var o = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(o, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var o = this.ownerDocument || this.document || this,
                      i = Z.access(o, t);
                    i || o.addEventListener(e, n, !0),
                      Z.access(o, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var o = this.ownerDocument || this.document || this,
                      i = Z.access(o, t) - 1;
                    i
                      ? Z.access(o, t, i)
                      : (o.removeEventListener(e, n, !0), Z.remove(o, t));
                  },
                };
              });
          var St = o.location,
            Et = { guid: Date.now() },
            Nt = /\?/;
          T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new o.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                T.error("Invalid XML: " + e),
              t
            );
          };
          var At = /\[\]$/,
            Lt = /\r?\n/g,
            $t = /^(?:submit|button|image|reset|file)$/i,
            It = /^(?:input|select|textarea|keygen)/i;
          function Pt(e, t, n, o) {
            var i;
            if (Array.isArray(t))
              T.each(t, function (t, i) {
                n || At.test(e)
                  ? o(e, i)
                  : Pt(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      o
                    );
              });
            else if (n || "object" !== w(t)) o(e, t);
            else for (i in t) Pt(e + "[" + i + "]", t[i], n, o);
          }
          (T.param = function (e, t) {
            var n,
              o = [],
              i = function (e, t) {
                var n = g(t) ? t() : t;
                o[o.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Pt(n, e[n], t, i);
            return o.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      It.test(this.nodeName) &&
                      !$t.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(Lt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Lt, "\r\n") };
                  })
                  .get();
              },
            });
          var Dt = /%20/g,
            Rt = /#.*$/,
            Ft = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            jt = /^(?:GET|HEAD)$/,
            Ot = /^\/\//,
            Bt = {},
            Mt = {},
            zt = "*/".concat("*"),
            qt = y.createElement("a");
          function Ut(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var o,
                i = 0,
                r = t.toLowerCase().match(O) || [];
              if (g(n))
                for (; (o = r[i++]); )
                  "+" === o[0]
                    ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n))
                    : (e[o] = e[o] || []).push(n);
            };
          }
          function Wt(e, t, n, o) {
            var i = {},
              r = e === Mt;
            function a(s) {
              var l;
              return (
                (i[s] = !0),
                T.each(e[s] || [], function (e, s) {
                  var c = s(t, n, o);
                  return "string" != typeof c || r || i[c]
                    ? r
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function _t(e, t) {
            var n,
              o,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
            return o && T.extend(!0, e, o), e;
          }
          (qt.href = St.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    St.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": zt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? _t(_t(e, T.ajaxSettings), t) : _t(T.ajaxSettings, e);
              },
              ajaxPrefilter: Ut(Bt),
              ajaxTransport: Ut(Mt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  r,
                  a,
                  s,
                  l,
                  c,
                  u,
                  d,
                  f,
                  h = T.ajaxSetup({}, t),
                  p = h.context || h,
                  v = h.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                  m = T.Deferred(),
                  g = T.Callbacks("once memory"),
                  b = h.statusCode || {},
                  k = {},
                  x = {},
                  w = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!a)
                          for (a = {}; (t = Ht.exec(r)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (k[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) b[t] = [b[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || w;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (m.promise(C),
                  (h.url = ((e || h.url || St.href) + "").replace(
                    Ot,
                    St.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = y.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        qt.protocol + "//" + qt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = T.param(h.data, h.traditional)),
                  Wt(Bt, h, t, C),
                  c)
                )
                  return C;
                for (d in ((u = T.event && h.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !jt.test(h.type)),
                (i = h.url.replace(Rt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(Dt, "+"))
                  : ((f = h.url.slice(i.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((i += (Nt.test(i) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((i = i.replace(Ft, "$1")),
                      (f = (Nt.test(i) ? "&" : "?") + "_=" + Et.guid++ + f)),
                    (h.url = i + f)),
                h.ifModified &&
                  (T.lastModified[i] &&
                    C.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                  T.etag[i] && C.setRequestHeader("If-None-Match", T.etag[i])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  C.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || c))
                  return C.abort();
                if (
                  ((w = "abort"),
                  g.add(h.complete),
                  C.done(h.success),
                  C.fail(h.error),
                  (n = Wt(Mt, h, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), u && v.trigger("ajaxSend", [C, h]), c)
                  )
                    return C;
                  h.async &&
                    h.timeout > 0 &&
                    (s = o.setTimeout(function () {
                      C.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(k, S);
                  } catch (e) {
                    if (c) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, a, l) {
                  var d,
                    f,
                    y,
                    k,
                    x,
                    w = t;
                  c ||
                    ((c = !0),
                    s && o.clearTimeout(s),
                    (n = void 0),
                    (r = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (k = (function (e, t, n) {
                        for (
                          var o, i, r, a, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === o &&
                              (o =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (o)
                          for (i in s)
                            if (s[i] && s[i].test(o)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              r = i;
                              break;
                            }
                            a || (a = i);
                          }
                          r = r || a;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(h, C, a)),
                    !d &&
                      T.inArray("script", h.dataTypes) > -1 &&
                      (h.converters["text script"] = function () {}),
                    (k = (function (e, t, n, o) {
                      var i,
                        r,
                        a,
                        s,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (a in e.converters)
                          c[a.toLowerCase()] = e.converters[a];
                      for (r = u.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            o &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = u.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(a = c[l + " " + r] || c["* " + r]))
                              for (i in c)
                                if (
                                  (s = i.split(" "))[1] === r &&
                                  (a = c[l + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[i])
                                    : !0 !== c[i] &&
                                      ((r = s[0]), u.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, k, C, d)),
                    d
                      ? (h.ifModified &&
                          ((x = C.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[i] = x),
                          (x = C.getResponseHeader("etag")) && (T.etag[i] = x)),
                        204 === e || "HEAD" === h.type
                          ? (w = "nocontent")
                          : 304 === e
                          ? (w = "notmodified")
                          : ((w = k.state), (f = k.data), (d = !(y = k.error))))
                      : ((y = w),
                        (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || w) + ""),
                    d
                      ? m.resolveWith(p, [f, w, C])
                      : m.rejectWith(p, [C, w, y]),
                    C.statusCode(b),
                    (b = void 0),
                    u &&
                      v.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        C,
                        h,
                        d ? f : y,
                      ]),
                    g.fireWith(p, [C, w]),
                    u &&
                      (v.trigger("ajaxComplete", [C, h]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, o, i) {
                return (
                  g(n) && ((i = i || o), (o = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: i, data: n, success: o },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (g(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return g(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new o.XMLHttpRequest();
              } catch (e) {}
            });
          var Kt = { 0: 200, 1223: 204 },
            Vt = T.ajaxSettings.xhr();
          (m.cors = !!Vt && "withCredentials" in Vt),
            (m.ajax = Vt = !!Vt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Vt && !e.crossDomain))
                return {
                  send: function (i, r) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? r(0, "error")
                              : r(s.status, s.statusText)
                            : r(
                                Kt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              o.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (o, i) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      y.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || T.expando + "_" + Et.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                r,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Yt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || T.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = o[i]),
                  (o[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? T(o).removeProp(i) : (o[i] = r),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(i)),
                      a && g(r) && r(a[0]),
                      (a = r = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Gt = y.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Gt.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((o = (t =
                          y.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = y.location.href),
                        t.head.appendChild(o))
                      : (t = y)),
                  (r = !n && []),
                  (i = I.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ce([e], t, r)),
                      r && r.length && T(r).remove(),
                      T.merge([], i.childNodes)));
              var o, i, r;
            }),
            (T.fn.load = function (e, t, n) {
              var o,
                i,
                r,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((o = yt(e.slice(s))), (e = e.slice(0, s))),
                g(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  T.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        a.php(
                          o ? T("<div>").append(T.parseHTML(e)).find(o) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var o,
                  i,
                  r,
                  a,
                  s,
                  l,
                  c = T.css(e, "position"),
                  u = T(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (s = u.offset()),
                  (r = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (r + l).indexOf("auto") > -1
                    ? ((a = (o = u.position()).top), (i = o.left))
                    : ((a = parseFloat(r) || 0), (i = parseFloat(l) || 0)),
                  g(t) && (t = t.call(e, n, T.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + i),
                  "using" in t
                    ? t.using.call(e, d)
                    : ("number" == typeof d.top && (d.top += "px"),
                      "number" == typeof d.left && (d.left += "px"),
                      u.css(d));
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  o = this[0];
                return o
                  ? o.getClientRects().length
                    ? ((t = o.getBoundingClientRect()),
                      (n = o.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    o = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === T.css(o, "position"))
                    t = o.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = o.ownerDocument,
                        e = o.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== o &&
                      1 === e.nodeType &&
                      (((i = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - T.css(o, "marginTop", !0),
                    left: t.left - i.left - T.css(o, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (o) {
                  return _(
                    this,
                    function (e, o, i) {
                      var r;
                      if (
                        (b(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === i)
                      )
                        return r ? r[t] : e[o];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : i,
                            n ? i : r.pageYOffset
                          )
                        : (e[o] = i);
                    },
                    e,
                    o,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = Ve(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ke(e, t)), qe.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, o) {
                  T.fn[o] = function (i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === r ? "margin" : "border");
                    return _(
                      this,
                      function (t, n, i) {
                        var r;
                        return b(t)
                          ? 0 === o.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === i
                          ? T.css(t, n, s)
                          : T.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, o) {
                return this.on(t, e, n, o);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, o, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
              return (
                (o = s.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, o.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || T.guid++),
                i
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = $),
            (T.isFunction = g),
            (T.isWindow = b),
            (T.camelCase = X),
            (T.type = w),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(Qt, "");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var Zt = o.jQuery,
            Jt = o.$;
          return (
            (T.noConflict = function (e) {
              return (
                o.$ === T && (o.$ = Jt),
                e && o.jQuery === T && (o.jQuery = Zt),
                T
              );
            }),
            void 0 === i && (o.jQuery = o.$ = T),
            T
          );
        });
      },
      5769: (e, t, n) => {
        var o;
        window,
          (o = function (e) {
            return (function (e) {
              var t = {};
              function n(o) {
                if (t[o]) return t[o].exports;
                var i = (t[o] = { i: o, l: !1, exports: {} });
                return (
                  e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
                );
              }
              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, o) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: o });
                }),
                (n.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (n.t = function (e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                  var o = Object.create(null);
                  if (
                    (n.r(o),
                    Object.defineProperty(o, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var i in e)
                      n.d(
                        o,
                        i,
                        function (t) {
                          return e[t];
                        }.bind(null, i)
                      );
                  return o;
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 51))
              );
            })({
              0: function (t, n) {
                t.exports = e;
              },
              1: function (e, t, n) {
                "use strict";
                var o = n(0),
                  i = n.n(o);
                function r(e) {
                  return (r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function a(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var s = (function () {
                  function e(t, n, o, i) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.markup = t),
                      (this.children = n),
                      (this.options = o),
                      (this.callback = i);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "render",
                        value: function (e) {
                          var t = i()(this.markup);
                          if (
                            (this.options &&
                              this.options.contents &&
                              t.php(this.options.contents),
                            this.options &&
                              this.options.className &&
                              t.addClass(this.options.className),
                            this.options &&
                              this.options.data &&
                              i.a.each(this.options.data, function (e, n) {
                                t.attr("data-" + e, n);
                              }),
                            this.options &&
                              this.options.click &&
                              t.on("click", this.options.click),
                            this.children)
                          ) {
                            var n = t.find(".note-children-container");
                            this.children.forEach(function (e) {
                              e.render(n.length ? n : t);
                            });
                          }
                          return (
                            this.callback && this.callback(t, this.options),
                            this.options &&
                              this.options.callback &&
                              this.options.callback(t),
                            e && e.append(t),
                            t
                          );
                        },
                      },
                    ]) && a(t.prototype, n),
                    o && a(t, o),
                    e
                  );
                })();
                t.a = {
                  create: function (e, t) {
                    return function () {
                      var n =
                          "object" === r(arguments[1])
                            ? arguments[1]
                            : arguments[0],
                        o = Array.isArray(arguments[0]) ? arguments[0] : [];
                      return (
                        n && n.children && (o = n.children), new s(e, o, n, t)
                      );
                    };
                  },
                };
              },
              2: function (e, t) {
                (function (t) {
                  e.exports = t;
                }.call(this, {}));
              },
              3: function (e, t, n) {
                "use strict";
                var o = n(0),
                  i = n.n(o);
                (i.a.summernote = i.a.summernote || { lang: {} }),
                  i.a.extend(i.a.summernote.lang, {
                    "en-US": {
                      font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family",
                        strikethrough: "Strikethrough",
                        subscript: "Subscript",
                        superscript: "Superscript",
                        size: "Font Size",
                        sizeunit: "Font Size Unit",
                      },
                      image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize full",
                        resizeHalf: "Resize half",
                        resizeQuarter: "Resize quarter",
                        resizeNone: "Original size",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Remove float",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image",
                        original: "Original",
                      },
                      video: {
                        video: "Video",
                        videoLink: "Video Link",
                        insert: "Insert Video",
                        url: "Video URL",
                        providers:
                          "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)",
                      },
                      link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: "Open in new window",
                        useProtocol: "Use default protocol",
                      },
                      table: {
                        table: "Table",
                        addRowAbove: "Add row above",
                        addRowBelow: "Add row below",
                        addColLeft: "Add column left",
                        addColRight: "Add column right",
                        delRow: "Delete row",
                        delCol: "Delete column",
                        delTable: "Delete table",
                      },
                      hr: { insert: "Insert Horizontal Rule" },
                      style: {
                        style: "Style",
                        p: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6",
                      },
                      lists: {
                        unordered: "Unordered list",
                        ordered: "Ordered list",
                      },
                      options: {
                        help: "Help",
                        fullscreen: "Full Screen",
                        codeview: "Code View",
                      },
                      paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full",
                      },
                      color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Text Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default",
                        cpSelect: "Select",
                      },
                      shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys",
                      },
                      help: {
                        escape: "Escape",
                        insertParagraph: "Insert Paragraph",
                        undo: "Undo the last command",
                        redo: "Redo the last command",
                        tab: "Tab",
                        untab: "Untab",
                        bold: "Set a bold style",
                        italic: "Set a italic style",
                        underline: "Set a underline style",
                        strikethrough: "Set a strikethrough style",
                        removeFormat: "Clean a style",
                        justifyLeft: "Set left align",
                        justifyCenter: "Set center align",
                        justifyRight: "Set right align",
                        justifyFull: "Set full align",
                        insertUnorderedList: "Toggle unordered list",
                        insertOrderedList: "Toggle ordered list",
                        outdent: "Outdent on current paragraph",
                        indent: "Indent on current paragraph",
                        formatPara:
                          "Change current block's format as a paragraph(P tag)",
                        formatH1: "Change current block's format as H1",
                        formatH2: "Change current block's format as H2",
                        formatH3: "Change current block's format as H3",
                        formatH4: "Change current block's format as H4",
                        formatH5: "Change current block's format as H5",
                        formatH6: "Change current block's format as H6",
                        insertHorizontalRule: "Insert horizontal rule",
                        "linkDialog.show": "Show Link Dialog",
                      },
                      history: { undo: "Undo", redo: "Redo" },
                      specialChar: {
                        specialChar: "SPECIAL CHARACTERS",
                        select: "Select Special characters",
                      },
                      output: { noSelection: "No Selection Made!" },
                    },
                  });
                var r = n(2),
                  a = [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "cursive",
                    "fantasy",
                  ];
                function s(e) {
                  return -1 === i.a.inArray(e.toLowerCase(), a)
                    ? "'".concat(e, "'")
                    : e;
                }
                var l,
                  c = navigator.userAgent,
                  u = /MSIE|Trident/i.test(c);
                if (u) {
                  var d = /MSIE (\d+[.]\d+)/.exec(c);
                  d && (l = parseFloat(d[1])),
                    (d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)) &&
                      (l = parseFloat(d[1]));
                }
                var f = /Edge\/\d+/.test(c),
                  h =
                    "ontouchstart" in window ||
                    navigator.MaxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0,
                  p = u
                    ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted"
                    : "input",
                  v = {
                    isMac: navigator.appVersion.indexOf("Mac") > -1,
                    isMSIE: u,
                    isEdge: f,
                    isFF: !f && /firefox/i.test(c),
                    isPhantom: /PhantomJS/i.test(c),
                    isWebkit: !f && /webkit/i.test(c),
                    isChrome: !f && /chrome/i.test(c),
                    isSafari: !f && /safari/i.test(c) && !/chrome/i.test(c),
                    browserVersion: l,
                    jqueryVersion: parseFloat(i.a.fn.jquery),
                    isSupportAmd: r,
                    isSupportTouch: h,
                    isFontInstalled: function (e) {
                      var t =
                          "Comic Sans MS" === e
                            ? "Courier New"
                            : "Comic Sans MS",
                        n = "mmmmmmmmmmwwwww",
                        o = document.createElement("canvas").getContext("2d");
                      o.font = "200px '" + t + "'";
                      var i = o.measureText(n).width;
                      return (
                        (o.font = "200px " + s(e) + ', "' + t + '"'),
                        i !== o.measureText(n).width
                      );
                    },
                    isW3CRangeSupport: !!document.createRange,
                    inputEventName: p,
                    genericFontFamilies: a,
                    validFontName: s,
                  },
                  m = 0,
                  g = {
                    eq: function (e) {
                      return function (t) {
                        return e === t;
                      };
                    },
                    eq2: function (e, t) {
                      return e === t;
                    },
                    peq2: function (e) {
                      return function (t, n) {
                        return t[e] === n[e];
                      };
                    },
                    ok: function () {
                      return !0;
                    },
                    fail: function () {
                      return !1;
                    },
                    self: function (e) {
                      return e;
                    },
                    not: function (e) {
                      return function () {
                        return !e.apply(e, arguments);
                      };
                    },
                    and: function (e, t) {
                      return function (n) {
                        return e(n) && t(n);
                      };
                    },
                    invoke: function (e, t) {
                      return function () {
                        return e[t].apply(e, arguments);
                      };
                    },
                    resetUniqueId: function () {
                      m = 0;
                    },
                    uniqueId: function (e) {
                      var t = ++m + "";
                      return e ? e + t : t;
                    },
                    rect2bnd: function (e) {
                      var t = i()(document);
                      return {
                        top: e.top + t.scrollTop(),
                        left: e.left + t.scrollLeft(),
                        width: e.right - e.left,
                        height: e.bottom - e.top,
                      };
                    },
                    invertObject: function (e) {
                      var t = {};
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[e[n]] = n);
                      return t;
                    },
                    namespaceToCamel: function (e, t) {
                      return (
                        (t = t || "") +
                        e
                          .split(".")
                          .map(function (e) {
                            return (
                              e.substring(0, 1).toUpperCase() + e.substring(1)
                            );
                          })
                          .join("")
                      );
                    },
                    debounce: function (e, t, n) {
                      var o;
                      return function () {
                        var i = this,
                          r = arguments,
                          a = function () {
                            (o = null), n || e.apply(i, r);
                          },
                          s = n && !o;
                        clearTimeout(o),
                          (o = setTimeout(a, t)),
                          s && e.apply(i, r);
                      };
                    },
                    isValidUrl: function (e) {
                      return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
                        e
                      );
                    },
                  };
                function b(e) {
                  return e[0];
                }
                function y(e) {
                  return e[e.length - 1];
                }
                function k(e) {
                  return e.slice(1);
                }
                function x(e, t) {
                  if (e && e.length && t) {
                    if (e.indexOf) return -1 !== e.indexOf(t);
                    if (e.contains) return e.contains(t);
                  }
                  return !1;
                }
                var w = {
                    head: b,
                    last: y,
                    initial: function (e) {
                      return e.slice(0, e.length - 1);
                    },
                    tail: k,
                    prev: function (e, t) {
                      if (e && e.length && t) {
                        var n = e.indexOf(t);
                        return -1 === n ? null : e[n - 1];
                      }
                      return null;
                    },
                    next: function (e, t) {
                      if (e && e.length && t) {
                        var n = e.indexOf(t);
                        return -1 === n ? null : e[n + 1];
                      }
                      return null;
                    },
                    find: function (e, t) {
                      for (var n = 0, o = e.length; n < o; n++) {
                        var i = e[n];
                        if (t(i)) return i;
                      }
                    },
                    contains: x,
                    all: function (e, t) {
                      for (var n = 0, o = e.length; n < o; n++)
                        if (!t(e[n])) return !1;
                      return !0;
                    },
                    sum: function (e, t) {
                      return (
                        (t = t || g.self),
                        e.reduce(function (e, n) {
                          return e + t(n);
                        }, 0)
                      );
                    },
                    from: function (e) {
                      for (var t = [], n = e.length, o = -1; ++o < n; )
                        t[o] = e[o];
                      return t;
                    },
                    isEmpty: function (e) {
                      return !e || !e.length;
                    },
                    clusterBy: function (e, t) {
                      return e.length
                        ? k(e).reduce(
                            function (e, n) {
                              var o = y(e);
                              return (
                                t(y(o), n)
                                  ? (o[o.length] = n)
                                  : (e[e.length] = [n]),
                                e
                              );
                            },
                            [[b(e)]]
                          )
                        : [];
                    },
                    compact: function (e) {
                      for (var t = [], n = 0, o = e.length; n < o; n++)
                        e[n] && t.push(e[n]);
                      return t;
                    },
                    unique: function (e) {
                      for (var t = [], n = 0, o = e.length; n < o; n++)
                        x(t, e[n]) || t.push(e[n]);
                      return t;
                    },
                  },
                  C = String.fromCharCode(160);
                function T(e) {
                  return e && i()(e).hasClass("note-editable");
                }
                function S(e) {
                  return (
                    (e = e.toUpperCase()),
                    function (t) {
                      return t && t.nodeName.toUpperCase() === e;
                    }
                  );
                }
                function E(e) {
                  return e && 3 === e.nodeType;
                }
                function N(e) {
                  return (
                    e &&
                    /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(
                      e.nodeName.toUpperCase()
                    )
                  );
                }
                function A(e) {
                  return (
                    !T(e) &&
                    e &&
                    /^DIV|^P|^LI|^H[1-7]/.test(e.nodeName.toUpperCase())
                  );
                }
                var L = S("PRE"),
                  $ = S("LI"),
                  I = S("TABLE"),
                  P = S("DATA");
                function D(e) {
                  return !(
                    O(e) ||
                    R(e) ||
                    F(e) ||
                    A(e) ||
                    I(e) ||
                    j(e) ||
                    P(e)
                  );
                }
                function R(e) {
                  return e && /^UL|^OL/.test(e.nodeName.toUpperCase());
                }
                var F = S("HR");
                function H(e) {
                  return e && /^TD|^TH/.test(e.nodeName.toUpperCase());
                }
                var j = S("BLOCKQUOTE");
                function O(e) {
                  return H(e) || j(e) || T(e);
                }
                var B = S("A"),
                  M = S("BODY"),
                  z = v.isMSIE && v.browserVersion < 11 ? "&nbsp;" : "<br>";
                function q(e) {
                  return E(e)
                    ? e.nodeValue.length
                    : e
                    ? e.childNodes.length
                    : 0;
                }
                function U(e) {
                  var t = q(e);
                  return (
                    0 === t ||
                    (!E(e) && 1 === t && e.innerHTML === z) ||
                    !(!w.all(e.childNodes, E) || "" !== e.innerHTML)
                  );
                }
                function W(e) {
                  N(e) || q(e) || (e.innerHTML = z);
                }
                function _(e, t) {
                  for (; e; ) {
                    if (t(e)) return e;
                    if (T(e)) break;
                    e = e.parentNode;
                  }
                  return null;
                }
                function K(e, t) {
                  t = t || g.fail;
                  var n = [];
                  return (
                    _(e, function (e) {
                      return T(e) || n.push(e), t(e);
                    }),
                    n
                  );
                }
                function V(e, t) {
                  t = t || g.fail;
                  for (var n = []; e && !t(e); ) n.push(e), (e = e.nextSibling);
                  return n;
                }
                function G(e, t) {
                  var n = t.nextSibling,
                    o = t.parentNode;
                  return n ? o.insertBefore(e, n) : o.appendChild(e), e;
                }
                function X(e, t) {
                  return (
                    i.a.each(t, function (t, n) {
                      e.appendChild(n);
                    }),
                    e
                  );
                }
                function Y(e) {
                  return 0 === e.offset;
                }
                function Q(e) {
                  return e.offset === q(e.node);
                }
                function Z(e) {
                  return Y(e) || Q(e);
                }
                function J(e, t) {
                  for (; e && e !== t; ) {
                    if (0 !== te(e)) return !1;
                    e = e.parentNode;
                  }
                  return !0;
                }
                function ee(e, t) {
                  if (!t) return !1;
                  for (; e && e !== t; ) {
                    if (te(e) !== q(e.parentNode) - 1) return !1;
                    e = e.parentNode;
                  }
                  return !0;
                }
                function te(e) {
                  for (var t = 0; (e = e.previousSibling); ) t += 1;
                  return t;
                }
                function ne(e) {
                  return !!(e && e.childNodes && e.childNodes.length);
                }
                function oe(e, t) {
                  var n, o;
                  if (0 === e.offset) {
                    if (T(e.node)) return null;
                    (n = e.node.parentNode), (o = te(e.node));
                  } else
                    ne(e.node)
                      ? (o = q((n = e.node.childNodes[e.offset - 1])))
                      : ((n = e.node), (o = t ? 0 : e.offset - 1));
                  return { node: n, offset: o };
                }
                function ie(e, t) {
                  var n, o;
                  if (q(e.node) === e.offset) {
                    if (T(e.node)) return null;
                    var i = ae(e.node);
                    i
                      ? ((n = i), (o = 0))
                      : ((n = e.node.parentNode), (o = te(e.node) + 1));
                  } else
                    ne(e.node)
                      ? ((n = e.node.childNodes[e.offset]), (o = 0))
                      : ((n = e.node), (o = t ? q(e.node) : e.offset + 1));
                  return { node: n, offset: o };
                }
                function re(e, t) {
                  var n, o;
                  if (U(e.node))
                    return { node: (n = e.node.nextSibling), offset: (o = 0) };
                  if (q(e.node) === e.offset) {
                    if (T(e.node)) return null;
                    var i = ae(e.node);
                    i
                      ? ((n = i), (o = 0))
                      : ((n = e.node.parentNode), (o = te(e.node) + 1)),
                      T(n) && ((n = e.node.nextSibling), (o = 0));
                  } else if (ne(e.node)) {
                    if (((o = 0), U((n = e.node.childNodes[e.offset]))))
                      return null;
                  } else if (
                    ((n = e.node), (o = t ? q(e.node) : e.offset + 1), U(n))
                  )
                    return null;
                  return { node: n, offset: o };
                }
                function ae(e) {
                  if (e.nextSibling && e.parent === e.nextSibling.parent)
                    return E(e.nextSibling) ? e.nextSibling : ae(e.nextSibling);
                }
                function se(e, t) {
                  return e.node === t.node && e.offset === t.offset;
                }
                function le(e, t) {
                  var n = t && t.isSkipPaddingBlankHTML,
                    o = t && t.isNotSplitEdgePoint,
                    i = t && t.isDiscardEmptySplits;
                  if ((i && (n = !0), Z(e) && (E(e.node) || o))) {
                    if (Y(e)) return e.node;
                    if (Q(e)) return e.node.nextSibling;
                  }
                  if (E(e.node)) return e.node.splitText(e.offset);
                  var r = e.node.childNodes[e.offset],
                    a = G(e.node.cloneNode(!1), e.node);
                  return (
                    X(a, V(r)),
                    n || (W(e.node), W(a)),
                    i && (U(e.node) && de(e.node), U(a))
                      ? (de(a), e.node.nextSibling)
                      : a
                  );
                }
                function ce(e, t, n) {
                  var o = K(t.node, g.eq(e));
                  return o.length
                    ? 1 === o.length
                      ? le(t, n)
                      : o.reduce(function (e, o) {
                          return (
                            e === t.node && (e = le(t, n)),
                            le({ node: o, offset: e ? te(e) : q(o) }, n)
                          );
                        })
                    : null;
                }
                function ue(e) {
                  return document.createElement(e);
                }
                function de(e, t) {
                  if (e && e.parentNode) {
                    if (e.removeNode) return e.removeNode(t);
                    var n = e.parentNode;
                    if (!t) {
                      for (
                        var o = [], i = 0, r = e.childNodes.length;
                        i < r;
                        i++
                      )
                        o.push(e.childNodes[i]);
                      for (var a = 0, s = o.length; a < s; a++)
                        n.insertBefore(o[a], e);
                    }
                    n.removeChild(e);
                  }
                }
                var fe = S("TEXTAREA");
                function he(e, t) {
                  var n = fe(e[0]) ? e.val() : e.php();
                  return t ? n.replace(/[\n\r]/g, "") : n;
                }
                var pe = {
                  NBSP_CHAR: C,
                  ZERO_WIDTH_NBSP_CHAR: "\ufeff",
                  blank: z,
                  emptyPara: "<p>".concat(z, "</p>"),
                  makePredByNodeName: S,
                  isEditable: T,
                  isControlSizing: function (e) {
                    return e && i()(e).hasClass("note-control-sizing");
                  },
                  isText: E,
                  isElement: function (e) {
                    return e && 1 === e.nodeType;
                  },
                  isVoid: N,
                  isPara: A,
                  isPurePara: function (e) {
                    return A(e) && !$(e);
                  },
                  isHeading: function (e) {
                    return e && /^H[1-7]/.test(e.nodeName.toUpperCase());
                  },
                  isInline: D,
                  isBlock: g.not(D),
                  isBodyInline: function (e) {
                    return D(e) && !_(e, A);
                  },
                  isBody: M,
                  isParaInline: function (e) {
                    return D(e) && !!_(e, A);
                  },
                  isPre: L,
                  isList: R,
                  isTable: I,
                  isData: P,
                  isCell: H,
                  isBlockquote: j,
                  isBodyContainer: O,
                  isAnchor: B,
                  isDiv: S("DIV"),
                  isLi: $,
                  isBR: S("BR"),
                  isSpan: S("SPAN"),
                  isB: S("B"),
                  isU: S("U"),
                  isS: S("S"),
                  isI: S("I"),
                  isImg: S("IMG"),
                  isTextarea: fe,
                  deepestChildIsEmpty: function (e) {
                    do {
                      if (
                        null === e.firstElementChild ||
                        "" === e.firstElementChild.innerHTML
                      )
                        break;
                    } while ((e = e.firstElementChild));
                    return U(e);
                  },
                  isEmpty: U,
                  isEmptyAnchor: g.and(B, U),
                  isClosestSibling: function (e, t) {
                    return e.nextSibling === t || e.previousSibling === t;
                  },
                  withClosestSiblings: function (e, t) {
                    t = t || g.ok;
                    var n = [];
                    return (
                      e.previousSibling &&
                        t(e.previousSibling) &&
                        n.push(e.previousSibling),
                      n.push(e),
                      e.nextSibling &&
                        t(e.nextSibling) &&
                        n.push(e.nextSibling),
                      n
                    );
                  },
                  nodeLength: q,
                  isLeftEdgePoint: Y,
                  isRightEdgePoint: Q,
                  isEdgePoint: Z,
                  isLeftEdgeOf: J,
                  isRightEdgeOf: ee,
                  isLeftEdgePointOf: function (e, t) {
                    return Y(e) && J(e.node, t);
                  },
                  isRightEdgePointOf: function (e, t) {
                    return Q(e) && ee(e.node, t);
                  },
                  prevPoint: oe,
                  nextPoint: ie,
                  nextPointWithEmptyNode: re,
                  isSamePoint: se,
                  isVisiblePoint: function (e) {
                    if (E(e.node) || !ne(e.node) || U(e.node)) return !0;
                    var t = e.node.childNodes[e.offset - 1],
                      n = e.node.childNodes[e.offset];
                    return !((t && !N(t)) || (n && !N(n)));
                  },
                  prevPointUntil: function (e, t) {
                    for (; e; ) {
                      if (t(e)) return e;
                      e = oe(e);
                    }
                    return null;
                  },
                  nextPointUntil: function (e, t) {
                    for (; e; ) {
                      if (t(e)) return e;
                      e = ie(e);
                    }
                    return null;
                  },
                  isCharPoint: function (e) {
                    if (!E(e.node)) return !1;
                    var t = e.node.nodeValue.charAt(e.offset - 1);
                    return t && " " !== t && t !== C;
                  },
                  isSpacePoint: function (e) {
                    if (!E(e.node)) return !1;
                    var t = e.node.nodeValue.charAt(e.offset - 1);
                    return " " === t || t === C;
                  },
                  walkPoint: function (e, t, n, o) {
                    for (var i = e; i && (n(i), !se(i, t)); )
                      i = re(i, o && e.node !== i.node && t.node !== i.node);
                  },
                  ancestor: _,
                  singleChildAncestor: function (e, t) {
                    for (e = e.parentNode; e && 1 === q(e); ) {
                      if (t(e)) return e;
                      if (T(e)) break;
                      e = e.parentNode;
                    }
                    return null;
                  },
                  listAncestor: K,
                  lastAncestor: function (e, t) {
                    var n = K(e);
                    return w.last(n.filter(t));
                  },
                  listNext: V,
                  listPrev: function (e, t) {
                    t = t || g.fail;
                    for (var n = []; e && !t(e); )
                      n.push(e), (e = e.previousSibling);
                    return n;
                  },
                  listDescendant: function (e, t) {
                    var n = [];
                    return (
                      (t = t || g.ok),
                      (function o(i) {
                        e !== i && t(i) && n.push(i);
                        for (var r = 0, a = i.childNodes.length; r < a; r++)
                          o(i.childNodes[r]);
                      })(e),
                      n
                    );
                  },
                  commonAncestor: function (e, t) {
                    for (var n = K(e), o = t; o; o = o.parentNode)
                      if (n.indexOf(o) > -1) return o;
                    return null;
                  },
                  wrap: function (e, t) {
                    var n = e.parentNode,
                      o = i()("<" + t + ">")[0];
                    return n.insertBefore(o, e), o.appendChild(e), o;
                  },
                  insertAfter: G,
                  appendChildNodes: X,
                  position: te,
                  hasChildren: ne,
                  makeOffsetPath: function (e, t) {
                    return K(t, g.eq(e)).map(te).reverse();
                  },
                  fromOffsetPath: function (e, t) {
                    for (var n = e, o = 0, i = t.length; o < i; o++)
                      n =
                        n.childNodes.length <= t[o]
                          ? n.childNodes[n.childNodes.length - 1]
                          : n.childNodes[t[o]];
                    return n;
                  },
                  splitTree: ce,
                  splitPoint: function (e, t) {
                    var n,
                      o,
                      i = t ? A : O,
                      r = K(e.node, i),
                      a = w.last(r) || e.node;
                    i(a)
                      ? ((n = r[r.length - 2]), (o = a))
                      : (o = (n = a).parentNode);
                    var s =
                      n &&
                      ce(n, e, {
                        isSkipPaddingBlankHTML: t,
                        isNotSplitEdgePoint: t,
                      });
                    return (
                      s || o !== e.node || (s = e.node.childNodes[e.offset]),
                      { rightNode: s, container: o }
                    );
                  },
                  create: ue,
                  createText: function (e) {
                    return document.createTextNode(e);
                  },
                  remove: de,
                  removeWhile: function (e, t) {
                    for (; e && !T(e) && t(e); ) {
                      var n = e.parentNode;
                      de(e), (e = n);
                    }
                  },
                  replace: function (e, t) {
                    if (e.nodeName.toUpperCase() === t.toUpperCase()) return e;
                    var n = ue(t);
                    return (
                      e.style.cssText && (n.style.cssText = e.style.cssText),
                      X(n, w.from(e.childNodes)),
                      G(n, e),
                      de(e),
                      n
                    );
                  },
                  html: function (e, t) {
                    var n = he(e);
                    return (
                      t &&
                        (n = (n = n.replace(
                          /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,
                          function (e, t, n) {
                            n = n.toUpperCase();
                            var o =
                                /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!t,
                              i =
                                /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(
                                  n
                                );
                            return e + (o || i ? "\n" : "");
                          }
                        )).trim()),
                      n
                    );
                  },
                  value: he,
                  posFromPlaceholder: function (e) {
                    var t = i()(e),
                      n = t.offset(),
                      o = t.outerHeight(!0);
                    return { left: n.left, top: n.top + o };
                  },
                  attachEvents: function (e, t) {
                    Object.keys(t).forEach(function (n) {
                      e.on(n, t[n]);
                    });
                  },
                  detachEvents: function (e, t) {
                    Object.keys(t).forEach(function (n) {
                      e.off(n, t[n]);
                    });
                  },
                  isCustomStyleTag: function (e) {
                    return (
                      e && !E(e) && w.contains(e.classList, "note-styletag")
                    );
                  },
                };
                function ve(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var me = (function () {
                  function e(t, n) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.$note = t),
                      (this.memos = {}),
                      (this.modules = {}),
                      (this.layoutInfo = {}),
                      (this.options = i.a.extend(!0, {}, n)),
                      (i.a.summernote.ui = i.a.summernote.ui_template(
                        this.options
                      )),
                      (this.ui = i.a.summernote.ui),
                      this.initialize();
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          return (
                            (this.layoutInfo = this.ui.createLayout(
                              this.$note
                            )),
                            this._initialize(),
                            this.$note.hide(),
                            this
                          );
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this._destroy(),
                            this.$note.removeData("summernote"),
                            this.ui.removeLayout(this.$note, this.layoutInfo);
                        },
                      },
                      {
                        key: "reset",
                        value: function () {
                          var e = this.isDisabled();
                          this.code(pe.emptyPara),
                            this._destroy(),
                            this._initialize(),
                            e && this.disable();
                        },
                      },
                      {
                        key: "_initialize",
                        value: function () {
                          var e = this;
                          (this.options.id = g.uniqueId(i.a.now())),
                            (this.options.container =
                              this.options.container || this.layoutInfo.editor);
                          var t = i.a.extend({}, this.options.buttons);
                          Object.keys(t).forEach(function (n) {
                            e.memo("button." + n, t[n]);
                          });
                          var n = i.a.extend(
                            {},
                            this.options.modules,
                            i.a.summernote.plugins || {}
                          );
                          Object.keys(n).forEach(function (t) {
                            e.module(t, n[t], !0);
                          }),
                            Object.keys(this.modules).forEach(function (t) {
                              e.initializeModule(t);
                            });
                        },
                      },
                      {
                        key: "_destroy",
                        value: function () {
                          var e = this;
                          Object.keys(this.modules)
                            .reverse()
                            .forEach(function (t) {
                              e.removeModule(t);
                            }),
                            Object.keys(this.memos).forEach(function (t) {
                              e.removeMemo(t);
                            }),
                            this.triggerEvent("destroy", this);
                        },
                      },
                      {
                        key: "code",
                        value: function (e) {
                          var t = this.invoke("codeview.isActivated");
                          if (void 0 === e)
                            return (
                              this.invoke("codeview.sync"),
                              t
                                ? this.layoutInfo.codable.val()
                                : this.layoutInfo.editable.php()
                            );
                          t
                            ? this.invoke("codeview.sync", e)
                            : this.layoutInfo.editable.php(e),
                            this.$note.val(e),
                            this.triggerEvent(
                              "change",
                              e,
                              this.layoutInfo.editable
                            );
                        },
                      },
                      {
                        key: "isDisabled",
                        value: function () {
                          return (
                            "false" ===
                            this.layoutInfo.editable.attr("contenteditable")
                          );
                        },
                      },
                      {
                        key: "enable",
                        value: function () {
                          this.layoutInfo.editable.attr("contenteditable", !0),
                            this.invoke("toolbar.activate", !0),
                            this.triggerEvent("disable", !1),
                            (this.options.editing = !0);
                        },
                      },
                      {
                        key: "disable",
                        value: function () {
                          this.invoke("codeview.isActivated") &&
                            this.invoke("codeview.deactivate"),
                            this.layoutInfo.editable.attr(
                              "contenteditable",
                              !1
                            ),
                            (this.options.editing = !1),
                            this.invoke("toolbar.deactivate", !0),
                            this.triggerEvent("disable", !0);
                        },
                      },
                      {
                        key: "triggerEvent",
                        value: function () {
                          var e = w.head(arguments),
                            t = w.tail(w.from(arguments)),
                            n =
                              this.options.callbacks[
                                g.namespaceToCamel(e, "on")
                              ];
                          n && n.apply(this.$note[0], t),
                            this.$note.trigger("summernote." + e, t);
                        },
                      },
                      {
                        key: "initializeModule",
                        value: function (e) {
                          var t = this.modules[e];
                          (t.shouldInitialize = t.shouldInitialize || g.ok),
                            t.shouldInitialize() &&
                              (t.initialize && t.initialize(),
                              t.events &&
                                pe.attachEvents(this.$note, t.events));
                        },
                      },
                      {
                        key: "module",
                        value: function (e, t, n) {
                          if (1 === arguments.length) return this.modules[e];
                          (this.modules[e] = new t(this)),
                            n || this.initializeModule(e);
                        },
                      },
                      {
                        key: "removeModule",
                        value: function (e) {
                          var t = this.modules[e];
                          t.shouldInitialize() &&
                            (t.events && pe.detachEvents(this.$note, t.events),
                            t.destroy && t.destroy()),
                            delete this.modules[e];
                        },
                      },
                      {
                        key: "memo",
                        value: function (e, t) {
                          if (1 === arguments.length) return this.memos[e];
                          this.memos[e] = t;
                        },
                      },
                      {
                        key: "removeMemo",
                        value: function (e) {
                          this.memos[e] &&
                            this.memos[e].destroy &&
                            this.memos[e].destroy(),
                            delete this.memos[e];
                        },
                      },
                      {
                        key: "createInvokeHandlerAndUpdateState",
                        value: function (e, t) {
                          var n = this;
                          return function (o) {
                            n.createInvokeHandler(e, t)(o),
                              n.invoke("buttons.updateCurrentStyle");
                          };
                        },
                      },
                      {
                        key: "createInvokeHandler",
                        value: function (e, t) {
                          var n = this;
                          return function (o) {
                            o.preventDefault();
                            var r = i()(o.target);
                            n.invoke(
                              e,
                              t || r.closest("[data-value]").data("value"),
                              r
                            );
                          };
                        },
                      },
                      {
                        key: "invoke",
                        value: function () {
                          var e = w.head(arguments),
                            t = w.tail(w.from(arguments)),
                            n = e.split("."),
                            o = n.length > 1,
                            i = o && w.head(n),
                            r = o ? w.last(n) : w.head(n),
                            a = this.modules[i || "editor"];
                          return !i && this[r]
                            ? this[r].apply(this, t)
                            : a && a[r] && a.shouldInitialize()
                            ? a[r].apply(a, t)
                            : void 0;
                        },
                      },
                    ]) && ve(t.prototype, n),
                    o && ve(t, o),
                    e
                  );
                })();
                function ge(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                function be(e, t) {
                  var n,
                    o,
                    i = e.parentElement(),
                    r = document.body.createTextRange(),
                    a = w.from(i.childNodes);
                  for (n = 0; n < a.length; n++)
                    if (!pe.isText(a[n])) {
                      if (
                        (r.moveToElementText(a[n]),
                        r.compareEndPoints("StartToStart", e) >= 0)
                      )
                        break;
                      o = a[n];
                    }
                  if (0 !== n && pe.isText(a[n - 1])) {
                    var s = document.body.createTextRange(),
                      l = null;
                    s.moveToElementText(o || i),
                      s.collapse(!o),
                      (l = o ? o.nextSibling : i.firstChild);
                    var c = e.duplicate();
                    c.setEndPoint("StartToStart", s);
                    for (
                      var u = c.text.replace(/[\r\n]/g, "").length;
                      u > l.nodeValue.length && l.nextSibling;

                    )
                      (u -= l.nodeValue.length), (l = l.nextSibling);
                    l.nodeValue,
                      t &&
                        l.nextSibling &&
                        pe.isText(l.nextSibling) &&
                        u === l.nodeValue.length &&
                        ((u -= l.nodeValue.length), (l = l.nextSibling)),
                      (i = l),
                      (n = u);
                  }
                  return { cont: i, offset: n };
                }
                function ye(e) {
                  var t = document.body.createTextRange(),
                    n = (function e(t, n) {
                      var o, i;
                      if (pe.isText(t)) {
                        var r = pe.listPrev(t, g.not(pe.isText)),
                          a = w.last(r).previousSibling;
                        (o = a || t.parentNode),
                          (n += w.sum(w.tail(r), pe.nodeLength)),
                          (i = !a);
                      } else {
                        if (((o = t.childNodes[n] || t), pe.isText(o)))
                          return e(o, 0);
                        (n = 0), (i = !1);
                      }
                      return { node: o, collapseToStart: i, offset: n };
                    })(e.node, e.offset);
                  return (
                    t.moveToElementText(n.node),
                    t.collapse(n.collapseToStart),
                    t.moveStart("character", n.offset),
                    t
                  );
                }
                i.a.fn.extend({
                  summernote: function () {
                    var e = i.a.type(w.head(arguments)),
                      t = "string" === e,
                      n = "object" === e,
                      o = i.a.extend(
                        {},
                        i.a.summernote.options,
                        n ? w.head(arguments) : {}
                      );
                    (o.langInfo = i.a.extend(
                      !0,
                      {},
                      i.a.summernote.lang["en-US"],
                      i.a.summernote.lang[o.lang]
                    )),
                      (o.icons = i.a.extend(
                        !0,
                        {},
                        i.a.summernote.options.icons,
                        o.icons
                      )),
                      (o.tooltip =
                        "auto" === o.tooltip ? !v.isSupportTouch : o.tooltip),
                      this.each(function (e, t) {
                        var n = i()(t);
                        if (!n.data("summernote")) {
                          var r = new me(n, o);
                          n.data("summernote", r),
                            n
                              .data("summernote")
                              .triggerEvent("init", r.layoutInfo);
                        }
                      });
                    var r = this.first();
                    if (r.length) {
                      var a = r.data("summernote");
                      if (t) return a.invoke.apply(a, w.from(arguments));
                      o.focus && a.invoke("editor.focus");
                    }
                    return this;
                  },
                });
                var ke = (function () {
                    function e(t, n, o, i) {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.sc = t),
                        (this.so = n),
                        (this.ec = o),
                        (this.eo = i),
                        (this.isOnEditable = this.makeIsOn(pe.isEditable)),
                        (this.isOnList = this.makeIsOn(pe.isList)),
                        (this.isOnAnchor = this.makeIsOn(pe.isAnchor)),
                        (this.isOnCell = this.makeIsOn(pe.isCell)),
                        (this.isOnData = this.makeIsOn(pe.isData));
                    }
                    var t, n, o;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "nativeRange",
                          value: function () {
                            if (v.isW3CRangeSupport) {
                              var e = document.createRange();
                              return (
                                e.setStart(this.sc, this.so),
                                e.setEnd(this.ec, this.eo),
                                e
                              );
                            }
                            var t = ye({ node: this.sc, offset: this.so });
                            return (
                              t.setEndPoint(
                                "EndToEnd",
                                ye({ node: this.ec, offset: this.eo })
                              ),
                              t
                            );
                          },
                        },
                        {
                          key: "getPoints",
                          value: function () {
                            return {
                              sc: this.sc,
                              so: this.so,
                              ec: this.ec,
                              eo: this.eo,
                            };
                          },
                        },
                        {
                          key: "getStartPoint",
                          value: function () {
                            return { node: this.sc, offset: this.so };
                          },
                        },
                        {
                          key: "getEndPoint",
                          value: function () {
                            return { node: this.ec, offset: this.eo };
                          },
                        },
                        {
                          key: "select",
                          value: function () {
                            var e = this.nativeRange();
                            if (v.isW3CRangeSupport) {
                              var t = document.getSelection();
                              t.rangeCount > 0 && t.removeAllRanges(),
                                t.addRange(e);
                            } else e.select();
                            return this;
                          },
                        },
                        {
                          key: "scrollIntoView",
                          value: function (e) {
                            var t = i()(e).height();
                            return (
                              e.scrollTop + t < this.sc.offsetTop &&
                                (e.scrollTop += Math.abs(
                                  e.scrollTop + t - this.sc.offsetTop
                                )),
                              this
                            );
                          },
                        },
                        {
                          key: "normalize",
                          value: function () {
                            var t = function (e, t) {
                                if (!e) return e;
                                if (
                                  pe.isVisiblePoint(e) &&
                                  (!pe.isEdgePoint(e) ||
                                    (pe.isRightEdgePoint(e) && !t) ||
                                    (pe.isLeftEdgePoint(e) && t) ||
                                    (pe.isRightEdgePoint(e) &&
                                      t &&
                                      pe.isVoid(e.node.nextSibling)) ||
                                    (pe.isLeftEdgePoint(e) &&
                                      !t &&
                                      pe.isVoid(e.node.previousSibling)) ||
                                    (pe.isBlock(e.node) && pe.isEmpty(e.node)))
                                )
                                  return e;
                                var n = pe.ancestor(e.node, pe.isBlock),
                                  o = !1;
                                if (!o) {
                                  var i = pe.prevPoint(e) || { node: null };
                                  o =
                                    (pe.isLeftEdgePointOf(e, n) ||
                                      pe.isVoid(i.node)) &&
                                    !t;
                                }
                                var r = !1;
                                if (!r) {
                                  var a = pe.nextPoint(e) || { node: null };
                                  r =
                                    (pe.isRightEdgePointOf(e, n) ||
                                      pe.isVoid(a.node)) &&
                                    t;
                                }
                                if (o || r) {
                                  if (pe.isVisiblePoint(e)) return e;
                                  t = !t;
                                }
                                return (
                                  (t
                                    ? pe.nextPointUntil(
                                        pe.nextPoint(e),
                                        pe.isVisiblePoint
                                      )
                                    : pe.prevPointUntil(
                                        pe.prevPoint(e),
                                        pe.isVisiblePoint
                                      )) || e
                                );
                              },
                              n = t(this.getEndPoint(), !1),
                              o = this.isCollapsed()
                                ? n
                                : t(this.getStartPoint(), !0);
                            return new e(o.node, o.offset, n.node, n.offset);
                          },
                        },
                        {
                          key: "nodes",
                          value: function (e, t) {
                            e = e || g.ok;
                            var n = t && t.includeAncestor,
                              o = t && t.fullyContains,
                              i = this.getStartPoint(),
                              r = this.getEndPoint(),
                              a = [],
                              s = [];
                            return (
                              pe.walkPoint(
                                i,
                                r,
                                function (t) {
                                  var i;
                                  pe.isEditable(t.node) ||
                                    (o
                                      ? (pe.isLeftEdgePoint(t) &&
                                          s.push(t.node),
                                        pe.isRightEdgePoint(t) &&
                                          w.contains(s, t.node) &&
                                          (i = t.node))
                                      : (i = n
                                          ? pe.ancestor(t.node, e)
                                          : t.node),
                                    i && e(i) && a.push(i));
                                },
                                !0
                              ),
                              w.unique(a)
                            );
                          },
                        },
                        {
                          key: "commonAncestor",
                          value: function () {
                            return pe.commonAncestor(this.sc, this.ec);
                          },
                        },
                        {
                          key: "expand",
                          value: function (t) {
                            var n = pe.ancestor(this.sc, t),
                              o = pe.ancestor(this.ec, t);
                            if (!n && !o)
                              return new e(this.sc, this.so, this.ec, this.eo);
                            var i = this.getPoints();
                            return (
                              n && ((i.sc = n), (i.so = 0)),
                              o && ((i.ec = o), (i.eo = pe.nodeLength(o))),
                              new e(i.sc, i.so, i.ec, i.eo)
                            );
                          },
                        },
                        {
                          key: "collapse",
                          value: function (t) {
                            return t
                              ? new e(this.sc, this.so, this.sc, this.so)
                              : new e(this.ec, this.eo, this.ec, this.eo);
                          },
                        },
                        {
                          key: "splitText",
                          value: function () {
                            var t = this.sc === this.ec,
                              n = this.getPoints();
                            return (
                              pe.isText(this.ec) &&
                                !pe.isEdgePoint(this.getEndPoint()) &&
                                this.ec.splitText(this.eo),
                              pe.isText(this.sc) &&
                                !pe.isEdgePoint(this.getStartPoint()) &&
                                ((n.sc = this.sc.splitText(this.so)),
                                (n.so = 0),
                                t &&
                                  ((n.ec = n.sc), (n.eo = this.eo - this.so))),
                              new e(n.sc, n.so, n.ec, n.eo)
                            );
                          },
                        },
                        {
                          key: "deleteContents",
                          value: function () {
                            if (this.isCollapsed()) return this;
                            var t = this.splitText(),
                              n = t.nodes(null, { fullyContains: !0 }),
                              o = pe.prevPointUntil(
                                t.getStartPoint(),
                                function (e) {
                                  return !w.contains(n, e.node);
                                }
                              ),
                              r = [];
                            return (
                              i.a.each(n, function (e, t) {
                                var n = t.parentNode;
                                o.node !== n &&
                                  1 === pe.nodeLength(n) &&
                                  r.push(n),
                                  pe.remove(t, !1);
                              }),
                              i.a.each(r, function (e, t) {
                                pe.remove(t, !1);
                              }),
                              new e(
                                o.node,
                                o.offset,
                                o.node,
                                o.offset
                              ).normalize()
                            );
                          },
                        },
                        {
                          key: "makeIsOn",
                          value: function (e) {
                            return function () {
                              var t = pe.ancestor(this.sc, e);
                              return !!t && t === pe.ancestor(this.ec, e);
                            };
                          },
                        },
                        {
                          key: "isLeftEdgeOf",
                          value: function (e) {
                            if (!pe.isLeftEdgePoint(this.getStartPoint()))
                              return !1;
                            var t = pe.ancestor(this.sc, e);
                            return t && pe.isLeftEdgeOf(this.sc, t);
                          },
                        },
                        {
                          key: "isCollapsed",
                          value: function () {
                            return this.sc === this.ec && this.so === this.eo;
                          },
                        },
                        {
                          key: "wrapBodyInlineWithPara",
                          value: function () {
                            if (
                              pe.isBodyContainer(this.sc) &&
                              pe.isEmpty(this.sc)
                            )
                              return (
                                (this.sc.innerHTML = pe.emptyPara),
                                new e(
                                  this.sc.firstChild,
                                  0,
                                  this.sc.firstChild,
                                  0
                                )
                              );
                            var t,
                              n = this.normalize();
                            if (pe.isParaInline(this.sc) || pe.isPara(this.sc))
                              return n;
                            if (pe.isInline(n.sc)) {
                              var o = pe.listAncestor(n.sc, g.not(pe.isInline));
                              (t = w.last(o)),
                                pe.isInline(t) ||
                                  (t =
                                    o[o.length - 2] || n.sc.childNodes[n.so]);
                            } else t = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
                            if (t) {
                              var i = pe.listPrev(t, pe.isParaInline).reverse();
                              if (
                                (i = i.concat(
                                  pe.listNext(t.nextSibling, pe.isParaInline)
                                )).length
                              ) {
                                var r = pe.wrap(w.head(i), "p");
                                pe.appendChildNodes(r, w.tail(i));
                              }
                            }
                            return this.normalize();
                          },
                        },
                        {
                          key: "insertNode",
                          value: function (e) {
                            var t = this;
                            (pe.isText(e) || pe.isInline(e)) &&
                              (t =
                                this.wrapBodyInlineWithPara().deleteContents());
                            var n = pe.splitPoint(
                              t.getStartPoint(),
                              pe.isInline(e)
                            );
                            return (
                              n.rightNode
                                ? (n.rightNode.parentNode.insertBefore(
                                    e,
                                    n.rightNode
                                  ),
                                  pe.isEmpty(n.rightNode) &&
                                    pe.isPara(e) &&
                                    n.rightNode.parentNode.removeChild(
                                      n.rightNode
                                    ))
                                : n.container.appendChild(e),
                              e
                            );
                          },
                        },
                        {
                          key: "pasteHTML",
                          value: function (e) {
                            e = i.a.trim(e);
                            var t = i()("<div></div>").php(e)[0],
                              n = w.from(t.childNodes),
                              o = this,
                              r = !1;
                            return (
                              o.so >= 0 && ((n = n.reverse()), (r = !0)),
                              (n = n.map(function (e) {
                                return o.insertNode(e);
                              })),
                              r && (n = n.reverse()),
                              n
                            );
                          },
                        },
                        {
                          key: "toString",
                          value: function () {
                            var e = this.nativeRange();
                            return v.isW3CRangeSupport ? e.toString() : e.text;
                          },
                        },
                        {
                          key: "getWordRange",
                          value: function (t) {
                            var n = this.getEndPoint();
                            if (!pe.isCharPoint(n)) return this;
                            var o = pe.prevPointUntil(n, function (e) {
                              return !pe.isCharPoint(e);
                            });
                            return (
                              t &&
                                (n = pe.nextPointUntil(n, function (e) {
                                  return !pe.isCharPoint(e);
                                })),
                              new e(o.node, o.offset, n.node, n.offset)
                            );
                          },
                        },
                        {
                          key: "getWordsRange",
                          value: function (t) {
                            var n = this.getEndPoint(),
                              o = function (e) {
                                return (
                                  !pe.isCharPoint(e) && !pe.isSpacePoint(e)
                                );
                              };
                            if (o(n)) return this;
                            var i = pe.prevPointUntil(n, o);
                            return (
                              t && (n = pe.nextPointUntil(n, o)),
                              new e(i.node, i.offset, n.node, n.offset)
                            );
                          },
                        },
                        {
                          key: "getWordsMatchRange",
                          value: function (t) {
                            var n = this.getEndPoint(),
                              o = pe.prevPointUntil(n, function (o) {
                                if (!pe.isCharPoint(o) && !pe.isSpacePoint(o))
                                  return !0;
                                var i = new e(
                                    o.node,
                                    o.offset,
                                    n.node,
                                    n.offset
                                  ),
                                  r = t.exec(i.toString());
                                return r && 0 === r.index;
                              }),
                              i = new e(o.node, o.offset, n.node, n.offset),
                              r = i.toString(),
                              a = t.exec(r);
                            return a && a[0].length === r.length ? i : null;
                          },
                        },
                        {
                          key: "bookmark",
                          value: function (e) {
                            return {
                              s: {
                                path: pe.makeOffsetPath(e, this.sc),
                                offset: this.so,
                              },
                              e: {
                                path: pe.makeOffsetPath(e, this.ec),
                                offset: this.eo,
                              },
                            };
                          },
                        },
                        {
                          key: "paraBookmark",
                          value: function (e) {
                            return {
                              s: {
                                path: w.tail(
                                  pe.makeOffsetPath(w.head(e), this.sc)
                                ),
                                offset: this.so,
                              },
                              e: {
                                path: w.tail(
                                  pe.makeOffsetPath(w.last(e), this.ec)
                                ),
                                offset: this.eo,
                              },
                            };
                          },
                        },
                        {
                          key: "getClientRects",
                          value: function () {
                            return this.nativeRange().getClientRects();
                          },
                        },
                      ]) && ge(t.prototype, n),
                      o && ge(t, o),
                      e
                    );
                  })(),
                  xe = {
                    create: function (e, t, n, o) {
                      if (4 === arguments.length) return new ke(e, t, n, o);
                      if (2 === arguments.length)
                        return new ke(e, t, (n = e), (o = t));
                      var i = this.createFromSelection();
                      if (!i && 1 === arguments.length) {
                        var r = arguments[0];
                        return (
                          pe.isEditable(r) && (r = r.lastChild),
                          this.createFromBodyElement(
                            r,
                            pe.emptyPara === arguments[0].innerHTML
                          )
                        );
                      }
                      return i;
                    },
                    createFromBodyElement: function (e) {
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        n = this.createFromNode(e);
                      return n.collapse(t);
                    },
                    createFromSelection: function () {
                      var e, t, n, o;
                      if (v.isW3CRangeSupport) {
                        var i = document.getSelection();
                        if (!i || 0 === i.rangeCount) return null;
                        if (pe.isBody(i.anchorNode)) return null;
                        var r = i.getRangeAt(0);
                        (e = r.startContainer),
                          (t = r.startOffset),
                          (n = r.endContainer),
                          (o = r.endOffset);
                      } else {
                        var a = document.selection.createRange(),
                          s = a.duplicate();
                        s.collapse(!1);
                        var l = a;
                        l.collapse(!0);
                        var c = be(l, !0),
                          u = be(s, !1);
                        pe.isText(c.node) &&
                          pe.isLeftEdgePoint(c) &&
                          pe.isTextNode(u.node) &&
                          pe.isRightEdgePoint(u) &&
                          u.node.nextSibling === c.node &&
                          (c = u),
                          (e = c.cont),
                          (t = c.offset),
                          (n = u.cont),
                          (o = u.offset);
                      }
                      return new ke(e, t, n, o);
                    },
                    createFromNode: function (e) {
                      var t = e,
                        n = 0,
                        o = e,
                        i = pe.nodeLength(o);
                      return (
                        pe.isVoid(t) &&
                          ((n = pe.listPrev(t).length - 1), (t = t.parentNode)),
                        pe.isBR(o)
                          ? ((i = pe.listPrev(o).length - 1),
                            (o = o.parentNode))
                          : pe.isVoid(o) &&
                            ((i = pe.listPrev(o).length), (o = o.parentNode)),
                        this.create(t, n, o, i)
                      );
                    },
                    createFromNodeBefore: function (e) {
                      return this.createFromNode(e).collapse(!0);
                    },
                    createFromNodeAfter: function (e) {
                      return this.createFromNode(e).collapse();
                    },
                    createFromBookmark: function (e, t) {
                      var n = pe.fromOffsetPath(e, t.s.path),
                        o = t.s.offset,
                        i = pe.fromOffsetPath(e, t.e.path),
                        r = t.e.offset;
                      return new ke(n, o, i, r);
                    },
                    createFromParaBookmark: function (e, t) {
                      var n = e.s.offset,
                        o = e.e.offset,
                        i = pe.fromOffsetPath(w.head(t), e.s.path),
                        r = pe.fromOffsetPath(w.last(t), e.e.path);
                      return new ke(i, n, r, o);
                    },
                  },
                  we = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESCAPE: 27,
                    SPACE: 32,
                    DELETE: 46,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    NUM0: 48,
                    NUM1: 49,
                    NUM2: 50,
                    NUM3: 51,
                    NUM4: 52,
                    NUM5: 53,
                    NUM6: 54,
                    NUM7: 55,
                    NUM8: 56,
                    B: 66,
                    E: 69,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    R: 82,
                    S: 83,
                    U: 85,
                    V: 86,
                    Y: 89,
                    Z: 90,
                    SLASH: 191,
                    LEFTBRACKET: 219,
                    BACKSLASH: 220,
                    RIGHTBRACKET: 221,
                    HOME: 36,
                    END: 35,
                    PAGEUP: 33,
                    PAGEDOWN: 34,
                  },
                  Ce = {
                    isEdit: function (e) {
                      return w.contains(
                        [we.BACKSPACE, we.TAB, we.ENTER, we.SPACE, we.DELETE],
                        e
                      );
                    },
                    isMove: function (e) {
                      return w.contains([we.LEFT, we.UP, we.RIGHT, we.DOWN], e);
                    },
                    isNavigation: function (e) {
                      return w.contains(
                        [we.HOME, we.END, we.PAGEUP, we.PAGEDOWN],
                        e
                      );
                    },
                    nameFromCode: g.invertObject(we),
                    code: we,
                  };
                function Te(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Se = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.stack = []),
                      (this.stackOffset = -1),
                      (this.context = t),
                      (this.$editable = t.layoutInfo.editable),
                      (this.editable = this.$editable[0]);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "makeSnapshot",
                        value: function () {
                          var e = xe.create(this.editable);
                          return {
                            contents: this.$editable.php(),
                            bookmark:
                              e && e.isOnEditable()
                                ? e.bookmark(this.editable)
                                : {
                                    s: { path: [], offset: 0 },
                                    e: { path: [], offset: 0 },
                                  },
                          };
                        },
                      },
                      {
                        key: "applySnapshot",
                        value: function (e) {
                          null !== e.contents && this.$editable.php(e.contents),
                            null !== e.bookmark &&
                              xe
                                .createFromBookmark(this.editable, e.bookmark)
                                .select();
                        },
                      },
                      {
                        key: "rewind",
                        value: function () {
                          this.$editable.php() !==
                            this.stack[this.stackOffset].contents &&
                            this.recordUndo(),
                            (this.stackOffset = 0),
                            this.applySnapshot(this.stack[this.stackOffset]);
                        },
                      },
                      {
                        key: "commit",
                        value: function () {
                          (this.stack = []),
                            (this.stackOffset = -1),
                            this.recordUndo();
                        },
                      },
                      {
                        key: "reset",
                        value: function () {
                          (this.stack = []),
                            (this.stackOffset = -1),
                            this.$editable.php(""),
                            this.recordUndo();
                        },
                      },
                      {
                        key: "undo",
                        value: function () {
                          this.$editable.php() !==
                            this.stack[this.stackOffset].contents &&
                            this.recordUndo(),
                            this.stackOffset > 0 &&
                              (this.stackOffset--,
                              this.applySnapshot(this.stack[this.stackOffset]));
                        },
                      },
                      {
                        key: "redo",
                        value: function () {
                          this.stack.length - 1 > this.stackOffset &&
                            (this.stackOffset++,
                            this.applySnapshot(this.stack[this.stackOffset]));
                        },
                      },
                      {
                        key: "recordUndo",
                        value: function () {
                          this.stackOffset++,
                            this.stack.length > this.stackOffset &&
                              (this.stack = this.stack.slice(
                                0,
                                this.stackOffset
                              )),
                            this.stack.push(this.makeSnapshot()),
                            this.stack.length >
                              this.context.options.historyLimit &&
                              (this.stack.shift(), (this.stackOffset -= 1));
                        },
                      },
                    ]) && Te(t.prototype, n),
                    o && Te(t, o),
                    e
                  );
                })();
                function Ee(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ne = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "jQueryCSS",
                        value: function (e, t) {
                          if (v.jqueryVersion < 1.9) {
                            var n = {};
                            return (
                              i.a.each(t, function (t, o) {
                                n[o] = e.css(o);
                              }),
                              n
                            );
                          }
                          return e.css(t);
                        },
                      },
                      {
                        key: "fromNode",
                        value: function (e) {
                          var t =
                              this.jQueryCSS(e, [
                                "font-family",
                                "font-size",
                                "text-align",
                                "list-style-type",
                                "line-height",
                              ]) || {},
                            n = e[0].style.fontSize || t["font-size"];
                          return (
                            (t["font-size"] = parseInt(n, 10)),
                            (t["font-size-unit"] = n.match(/[a-z%]+$/)),
                            t
                          );
                        },
                      },
                      {
                        key: "stylePara",
                        value: function (e, t) {
                          i.a.each(
                            e.nodes(pe.isPara, { includeAncestor: !0 }),
                            function (e, n) {
                              i()(n).css(t);
                            }
                          );
                        },
                      },
                      {
                        key: "styleNodes",
                        value: function (e, t) {
                          e = e.splitText();
                          var n = (t && t.nodeName) || "SPAN",
                            o = !(!t || !t.expandClosestSibling),
                            r = !(!t || !t.onlyPartialContains);
                          if (e.isCollapsed())
                            return [e.insertNode(pe.create(n))];
                          var a = pe.makePredByNodeName(n),
                            s = e
                              .nodes(pe.isText, { fullyContains: !0 })
                              .map(function (e) {
                                return (
                                  pe.singleChildAncestor(e, a) || pe.wrap(e, n)
                                );
                              });
                          if (o) {
                            if (r) {
                              var l = e.nodes();
                              a = g.and(a, function (e) {
                                return w.contains(l, e);
                              });
                            }
                            return s.map(function (e) {
                              var t = pe.withClosestSiblings(e, a),
                                n = w.head(t),
                                o = w.tail(t);
                              return (
                                i.a.each(o, function (e, t) {
                                  pe.appendChildNodes(n, t.childNodes),
                                    pe.remove(t);
                                }),
                                w.head(t)
                              );
                            });
                          }
                          return s;
                        },
                      },
                      {
                        key: "current",
                        value: function (e) {
                          var t = i()(
                              pe.isElement(e.sc) ? e.sc : e.sc.parentNode
                            ),
                            n = this.fromNode(t);
                          try {
                            n = i.a.extend(n, {
                              "font-bold": document.queryCommandState("bold")
                                ? "bold"
                                : "normal",
                              "font-italic": document.queryCommandState(
                                "italic"
                              )
                                ? "italic"
                                : "normal",
                              "font-underline": document.queryCommandState(
                                "underline"
                              )
                                ? "underline"
                                : "normal",
                              "font-subscript": document.queryCommandState(
                                "subscript"
                              )
                                ? "subscript"
                                : "normal",
                              "font-superscript": document.queryCommandState(
                                "superscript"
                              )
                                ? "superscript"
                                : "normal",
                              "font-strikethrough": document.queryCommandState(
                                "strikethrough"
                              )
                                ? "strikethrough"
                                : "normal",
                              "font-family":
                                document.queryCommandValue("fontname") ||
                                n["font-family"],
                            });
                          } catch (e) {}
                          if (e.isOnList()) {
                            var o =
                              [
                                "circle",
                                "disc",
                                "disc-leading-zero",
                                "square",
                              ].indexOf(n["list-style-type"]) > -1;
                            n["list-style"] = o ? "unordered" : "ordered";
                          } else n["list-style"] = "none";
                          var r = pe.ancestor(e.sc, pe.isPara);
                          if (r && r.style["line-height"])
                            n["line-height"] = r.style.lineHeight;
                          else {
                            var a =
                              parseInt(n["line-height"], 10) /
                              parseInt(n["font-size"], 10);
                            n["line-height"] = a.toFixed(1);
                          }
                          return (
                            (n.anchor =
                              e.isOnAnchor() && pe.ancestor(e.sc, pe.isAnchor)),
                            (n.ancestors = pe.listAncestor(
                              e.sc,
                              pe.isEditable
                            )),
                            (n.range = e),
                            n
                          );
                        },
                      },
                    ]) && Ee(t.prototype, n),
                    o && Ee(t, o),
                    e
                  );
                })();
                function Ae(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Le = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "insertOrderedList",
                        value: function (e) {
                          this.toggleList("OL", e);
                        },
                      },
                      {
                        key: "insertUnorderedList",
                        value: function (e) {
                          this.toggleList("UL", e);
                        },
                      },
                      {
                        key: "indent",
                        value: function (e) {
                          var t = this,
                            n = xe.create(e).wrapBodyInlineWithPara(),
                            o = n.nodes(pe.isPara, { includeAncestor: !0 }),
                            r = w.clusterBy(o, g.peq2("parentNode"));
                          i.a.each(r, function (e, n) {
                            var o = w.head(n);
                            if (pe.isLi(o)) {
                              var r = t.findList(o.previousSibling);
                              r
                                ? n.map(function (e) {
                                    return r.appendChild(e);
                                  })
                                : (t.wrapList(n, o.parentNode.nodeName),
                                  n
                                    .map(function (e) {
                                      return e.parentNode;
                                    })
                                    .map(function (e) {
                                      return t.appendToPrevious(e);
                                    }));
                            } else
                              i.a.each(n, function (e, t) {
                                i()(t).css("marginLeft", function (e, t) {
                                  return (parseInt(t, 10) || 0) + 25;
                                });
                              });
                          }),
                            n.select();
                        },
                      },
                      {
                        key: "outdent",
                        value: function (e) {
                          var t = this,
                            n = xe.create(e).wrapBodyInlineWithPara(),
                            o = n.nodes(pe.isPara, { includeAncestor: !0 }),
                            r = w.clusterBy(o, g.peq2("parentNode"));
                          i.a.each(r, function (e, n) {
                            var o = w.head(n);
                            pe.isLi(o)
                              ? t.releaseList([n])
                              : i.a.each(n, function (e, t) {
                                  i()(t).css("marginLeft", function (e, t) {
                                    return (t = parseInt(t, 10) || 0) > 25
                                      ? t - 25
                                      : "";
                                  });
                                });
                          }),
                            n.select();
                        },
                      },
                      {
                        key: "toggleList",
                        value: function (e, t) {
                          var n = this,
                            o = xe.create(t).wrapBodyInlineWithPara(),
                            r = o.nodes(pe.isPara, { includeAncestor: !0 }),
                            a = o.paraBookmark(r),
                            s = w.clusterBy(r, g.peq2("parentNode"));
                          if (w.find(r, pe.isPurePara)) {
                            var l = [];
                            i.a.each(s, function (t, o) {
                              l = l.concat(n.wrapList(o, e));
                            }),
                              (r = l);
                          } else {
                            var c = o
                              .nodes(pe.isList, { includeAncestor: !0 })
                              .filter(function (t) {
                                return !i.a.nodeName(t, e);
                              });
                            c.length
                              ? i.a.each(c, function (t, n) {
                                  pe.replace(n, e);
                                })
                              : (r = this.releaseList(s, !0));
                          }
                          xe.createFromParaBookmark(a, r).select();
                        },
                      },
                      {
                        key: "wrapList",
                        value: function (e, t) {
                          var n = w.head(e),
                            o = w.last(e),
                            i =
                              pe.isList(n.previousSibling) && n.previousSibling,
                            r = pe.isList(o.nextSibling) && o.nextSibling,
                            a = i || pe.insertAfter(pe.create(t || "UL"), o);
                          return (
                            (e = e.map(function (e) {
                              return pe.isPurePara(e) ? pe.replace(e, "LI") : e;
                            })),
                            pe.appendChildNodes(a, e),
                            r &&
                              (pe.appendChildNodes(a, w.from(r.childNodes)),
                              pe.remove(r)),
                            e
                          );
                        },
                      },
                      {
                        key: "releaseList",
                        value: function (e, t) {
                          var n = this,
                            o = [];
                          return (
                            i.a.each(e, function (e, r) {
                              var a = w.head(r),
                                s = w.last(r),
                                l = t
                                  ? pe.lastAncestor(a, pe.isList)
                                  : a.parentNode,
                                c = l.parentNode;
                              if ("LI" === l.parentNode.nodeName)
                                r.map(function (e) {
                                  var t = n.findNextSiblings(e);
                                  c.nextSibling
                                    ? c.parentNode.insertBefore(
                                        e,
                                        c.nextSibling
                                      )
                                    : c.parentNode.appendChild(e),
                                    t.length &&
                                      (n.wrapList(t, l.nodeName),
                                      e.appendChild(t[0].parentNode));
                                }),
                                  0 === l.children.length && c.removeChild(l),
                                  0 === c.childNodes.length &&
                                    c.parentNode.removeChild(c);
                              else {
                                var u =
                                    l.childNodes.length > 1
                                      ? pe.splitTree(
                                          l,
                                          {
                                            node: s.parentNode,
                                            offset: pe.position(s) + 1,
                                          },
                                          { isSkipPaddingBlankHTML: !0 }
                                        )
                                      : null,
                                  d = pe.splitTree(
                                    l,
                                    {
                                      node: a.parentNode,
                                      offset: pe.position(a),
                                    },
                                    { isSkipPaddingBlankHTML: !0 }
                                  );
                                (r = t
                                  ? pe.listDescendant(d, pe.isLi)
                                  : w.from(d.childNodes).filter(pe.isLi)),
                                  (!t && pe.isList(l.parentNode)) ||
                                    (r = r.map(function (e) {
                                      return pe.replace(e, "P");
                                    })),
                                  i.a.each(
                                    w.from(r).reverse(),
                                    function (e, t) {
                                      pe.insertAfter(t, l);
                                    }
                                  );
                                var f = w.compact([l, d, u]);
                                i.a.each(f, function (e, t) {
                                  var n = [t].concat(
                                    pe.listDescendant(t, pe.isList)
                                  );
                                  i.a.each(n.reverse(), function (e, t) {
                                    pe.nodeLength(t) || pe.remove(t, !0);
                                  });
                                });
                              }
                              o = o.concat(r);
                            }),
                            o
                          );
                        },
                      },
                      {
                        key: "appendToPrevious",
                        value: function (e) {
                          return e.previousSibling
                            ? pe.appendChildNodes(e.previousSibling, [e])
                            : this.wrapList([e], "LI");
                        },
                      },
                      {
                        key: "findList",
                        value: function (e) {
                          return e
                            ? w.find(e.children, function (e) {
                                return ["OL", "UL"].indexOf(e.nodeName) > -1;
                              })
                            : null;
                        },
                      },
                      {
                        key: "findNextSiblings",
                        value: function (e) {
                          for (var t = []; e.nextSibling; )
                            t.push(e.nextSibling), (e = e.nextSibling);
                          return t;
                        },
                      },
                    ]) && Ae(t.prototype, n),
                    o && Ae(t, o),
                    e
                  );
                })();
                function $e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ie = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.bullet = new Le()),
                      (this.options = t.options);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "insertTab",
                        value: function (e, t) {
                          var n = pe.createText(
                            new Array(t + 1).join(pe.NBSP_CHAR)
                          );
                          (e = e.deleteContents()).insertNode(n, !0),
                            (e = xe.create(n, t)).select();
                        },
                      },
                      {
                        key: "insertParagraph",
                        value: function (e, t) {
                          t = (t = (t =
                            t ||
                            xe.create(
                              e
                            )).deleteContents()).wrapBodyInlineWithPara();
                          var n,
                            o = pe.ancestor(t.sc, pe.isPara);
                          if (o) {
                            if (
                              pe.isLi(o) &&
                              (pe.isEmpty(o) || pe.deepestChildIsEmpty(o))
                            )
                              return void this.bullet.toggleList(
                                o.parentNode.nodeName
                              );
                            var r = null;
                            if (
                              (1 === this.options.blockquoteBreakingLevel
                                ? (r = pe.ancestor(o, pe.isBlockquote))
                                : 2 === this.options.blockquoteBreakingLevel &&
                                  (r = pe.lastAncestor(o, pe.isBlockquote)),
                              r)
                            ) {
                              (n = i()(pe.emptyPara)[0]),
                                pe.isRightEdgePoint(t.getStartPoint()) &&
                                  pe.isBR(t.sc.nextSibling) &&
                                  i()(t.sc.nextSibling).remove();
                              var a = pe.splitTree(r, t.getStartPoint(), {
                                isDiscardEmptySplits: !0,
                              });
                              a
                                ? a.parentNode.insertBefore(n, a)
                                : pe.insertAfter(n, r);
                            } else {
                              n = pe.splitTree(o, t.getStartPoint());
                              var s = pe.listDescendant(o, pe.isEmptyAnchor);
                              (s = s.concat(
                                pe.listDescendant(n, pe.isEmptyAnchor)
                              )),
                                i.a.each(s, function (e, t) {
                                  pe.remove(t);
                                }),
                                (pe.isHeading(n) ||
                                  pe.isPre(n) ||
                                  pe.isCustomStyleTag(n)) &&
                                  pe.isEmpty(n) &&
                                  (n = pe.replace(n, "p"));
                            }
                          } else {
                            var l = t.sc.childNodes[t.so];
                            (n = i()(pe.emptyPara)[0]),
                              l ? t.sc.insertBefore(n, l) : t.sc.appendChild(n);
                          }
                          xe.create(n, 0)
                            .normalize()
                            .select()
                            .scrollIntoView(e);
                        },
                      },
                    ]) && $e(t.prototype, n),
                    o && $e(t, o),
                    e
                  );
                })();
                function Pe(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var De = function e(t, n, o, i) {
                  var r = { colPos: 0, rowPos: 0 },
                    a = [],
                    s = [];
                  function l(e, t, n, o, i, r, s) {
                    var l = {
                      baseRow: n,
                      baseCell: o,
                      isRowSpan: i,
                      isColSpan: r,
                      isVirtual: s,
                    };
                    a[e] || (a[e] = []), (a[e][t] = l);
                  }
                  function c(e, t, n, o) {
                    return {
                      baseCell: e.baseCell,
                      action: t,
                      virtualTable: { rowIndex: n, cellIndex: o },
                    };
                  }
                  function u(e, t) {
                    if (!a[e]) return t;
                    if (!a[e][t]) return t;
                    for (var n = t; a[e][n]; ) if ((n++, !a[e][n])) return n;
                  }
                  function d(e, t) {
                    var n = u(e.rowIndex, t.cellIndex),
                      o = t.colSpan > 1,
                      i = t.rowSpan > 1,
                      a = e.rowIndex === r.rowPos && t.cellIndex === r.colPos;
                    l(e.rowIndex, n, e, t, i, o, !1);
                    var s = t.attributes.rowSpan
                      ? parseInt(t.attributes.rowSpan.value, 10)
                      : 0;
                    if (s > 1)
                      for (var c = 1; c < s; c++) {
                        var d = e.rowIndex + c;
                        f(d, n, t, a), l(d, n, e, t, !0, o, !0);
                      }
                    var h = t.attributes.colSpan
                      ? parseInt(t.attributes.colSpan.value, 10)
                      : 0;
                    if (h > 1)
                      for (var p = 1; p < h; p++) {
                        var v = u(e.rowIndex, n + p);
                        f(e.rowIndex, v, t, a),
                          l(e.rowIndex, v, e, t, i, !0, !0);
                      }
                  }
                  function f(e, t, n, o) {
                    e === r.rowPos &&
                      r.colPos >= n.cellIndex &&
                      n.cellIndex <= t &&
                      !o &&
                      r.colPos++;
                  }
                  function h(t) {
                    switch (n) {
                      case e.where.Column:
                        if (t.isColSpan)
                          return e.resultAction.SubtractSpanCount;
                        break;
                      case e.where.Row:
                        if (!t.isVirtual && t.isRowSpan)
                          return e.resultAction.AddCell;
                        if (t.isRowSpan)
                          return e.resultAction.SubtractSpanCount;
                    }
                    return e.resultAction.RemoveCell;
                  }
                  function p(t) {
                    switch (n) {
                      case e.where.Column:
                        if (t.isColSpan) return e.resultAction.SumSpanCount;
                        if (t.isRowSpan && t.isVirtual)
                          return e.resultAction.Ignore;
                        break;
                      case e.where.Row:
                        if (t.isRowSpan) return e.resultAction.SumSpanCount;
                        if (t.isColSpan && t.isVirtual)
                          return e.resultAction.Ignore;
                    }
                    return e.resultAction.AddCell;
                  }
                  (this.getActionList = function () {
                    for (
                      var t = n === e.where.Row ? r.rowPos : -1,
                        i = n === e.where.Column ? r.colPos : -1,
                        l = 0,
                        u = !0;
                      u;

                    ) {
                      var d = t >= 0 ? t : l,
                        f = i >= 0 ? i : l,
                        v = a[d];
                      if (!v) return (u = !1), s;
                      var m = v[f];
                      if (!m) return (u = !1), s;
                      var g = e.resultAction.Ignore;
                      switch (o) {
                        case e.requestAction.Add:
                          g = p(m);
                          break;
                        case e.requestAction.Delete:
                          g = h(m);
                      }
                      s.push(c(m, g, d, f)), l++;
                    }
                    return s;
                  }),
                    t &&
                      t.tagName &&
                      ("td" === t.tagName.toLowerCase() ||
                        "th" === t.tagName.toLowerCase()) &&
                      ((r.colPos = t.cellIndex),
                      t.parentElement &&
                        t.parentElement.tagName &&
                        "tr" === t.parentElement.tagName.toLowerCase() &&
                        (r.rowPos = t.parentElement.rowIndex)),
                    (function () {
                      for (var e = i.rows, t = 0; t < e.length; t++)
                        for (var n = e[t].cells, o = 0; o < n.length; o++)
                          d(e[t], n[o]);
                    })();
                };
                (De.where = { Row: 0, Column: 1 }),
                  (De.requestAction = { Add: 0, Delete: 1 }),
                  (De.resultAction = {
                    Ignore: 0,
                    SubtractSpanCount: 1,
                    RemoveCell: 2,
                    AddCell: 3,
                    SumSpanCount: 4,
                  });
                var Re = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "tab",
                        value: function (e, t) {
                          var n = pe.ancestor(e.commonAncestor(), pe.isCell),
                            o = pe.ancestor(n, pe.isTable),
                            i = pe.listDescendant(o, pe.isCell),
                            r = w[t ? "prev" : "next"](i, n);
                          r && xe.create(r, 0).select();
                        },
                      },
                      {
                        key: "addRow",
                        value: function (e, t) {
                          for (
                            var n = pe.ancestor(e.commonAncestor(), pe.isCell),
                              o = i()(n).closest("tr"),
                              r = this.recoverAttributes(o),
                              a = i()("<tr" + r + "></tr>"),
                              s = new De(
                                n,
                                De.where.Row,
                                De.requestAction.Add,
                                i()(o).closest("table")[0]
                              ).getActionList(),
                              l = 0;
                            l < s.length;
                            l++
                          ) {
                            var c = s[l],
                              u = this.recoverAttributes(c.baseCell);
                            switch (c.action) {
                              case De.resultAction.AddCell:
                                a.append("<td" + u + ">" + pe.blank + "</td>");
                                break;
                              case De.resultAction.SumSpanCount:
                                if (
                                  "top" === t &&
                                  (c.baseCell.parent
                                    ? c.baseCell.closest("tr").rowIndex
                                    : 0) <= o[0].rowIndex
                                ) {
                                  var d = i()("<div></div>")
                                    .append(
                                      i()(
                                        "<td" + u + ">" + pe.blank + "</td>"
                                      ).removeAttr("rowspan")
                                    )
                                    .php();
                                  a.append(d);
                                  break;
                                }
                                var f = parseInt(c.baseCell.rowSpan, 10);
                                f++, c.baseCell.setAttribute("rowSpan", f);
                            }
                          }
                          if ("top" === t) o.before(a);
                          else {
                            if (n.rowSpan > 1) {
                              var h = o[0].rowIndex + (n.rowSpan - 2);
                              return void i()(
                                i()(o).parent().find("tr")[h]
                              ).after(i()(a));
                            }
                            o.after(a);
                          }
                        },
                      },
                      {
                        key: "addCol",
                        value: function (e, t) {
                          var n = pe.ancestor(e.commonAncestor(), pe.isCell),
                            o = i()(n).closest("tr");
                          i()(o).siblings().push(o);
                          for (
                            var r = new De(
                                n,
                                De.where.Column,
                                De.requestAction.Add,
                                i()(o).closest("table")[0]
                              ).getActionList(),
                              a = 0;
                            a < r.length;
                            a++
                          ) {
                            var s = r[a],
                              l = this.recoverAttributes(s.baseCell);
                            switch (s.action) {
                              case De.resultAction.AddCell:
                                "right" === t
                                  ? i()(s.baseCell).after(
                                      "<td" + l + ">" + pe.blank + "</td>"
                                    )
                                  : i()(s.baseCell).before(
                                      "<td" + l + ">" + pe.blank + "</td>"
                                    );
                                break;
                              case De.resultAction.SumSpanCount:
                                if ("right" === t) {
                                  var c = parseInt(s.baseCell.colSpan, 10);
                                  c++, s.baseCell.setAttribute("colSpan", c);
                                } else
                                  i()(s.baseCell).before(
                                    "<td" + l + ">" + pe.blank + "</td>"
                                  );
                            }
                          }
                        },
                      },
                      {
                        key: "recoverAttributes",
                        value: function (e) {
                          var t = "";
                          if (!e) return t;
                          for (
                            var n = e.attributes || [], o = 0;
                            o < n.length;
                            o++
                          )
                            "id" !== n[o].name.toLowerCase() &&
                              n[o].specified &&
                              (t += " " + n[o].name + "='" + n[o].value + "'");
                          return t;
                        },
                      },
                      {
                        key: "deleteRow",
                        value: function (e) {
                          for (
                            var t = pe.ancestor(e.commonAncestor(), pe.isCell),
                              n = i()(t).closest("tr"),
                              o = n.children("td, th").index(i()(t)),
                              r = n[0].rowIndex,
                              a = new De(
                                t,
                                De.where.Row,
                                De.requestAction.Delete,
                                i()(n).closest("table")[0]
                              ).getActionList(),
                              s = 0;
                            s < a.length;
                            s++
                          )
                            if (a[s]) {
                              var l = a[s].baseCell,
                                c = a[s].virtualTable,
                                u = l.rowSpan && l.rowSpan > 1,
                                d = u ? parseInt(l.rowSpan, 10) : 0;
                              switch (a[s].action) {
                                case De.resultAction.Ignore:
                                  continue;
                                case De.resultAction.AddCell:
                                  var f = n.next("tr")[0];
                                  if (!f) continue;
                                  var h = n[0].cells[o];
                                  u &&
                                    (d > 2
                                      ? (d--,
                                        f.insertBefore(h, f.cells[o]),
                                        f.cells[o].setAttribute("rowSpan", d),
                                        (f.cells[o].innerHTML = ""))
                                      : 2 === d &&
                                        (f.insertBefore(h, f.cells[o]),
                                        f.cells[o].removeAttribute("rowSpan"),
                                        (f.cells[o].innerHTML = "")));
                                  continue;
                                case De.resultAction.SubtractSpanCount:
                                  u &&
                                    (d > 2
                                      ? (d--,
                                        l.setAttribute("rowSpan", d),
                                        c.rowIndex !== r &&
                                          l.cellIndex === o &&
                                          (l.innerHTML = ""))
                                      : 2 === d &&
                                        (l.removeAttribute("rowSpan"),
                                        c.rowIndex !== r &&
                                          l.cellIndex === o &&
                                          (l.innerHTML = "")));
                                  continue;
                                case De.resultAction.RemoveCell:
                                  continue;
                              }
                            }
                          n.remove();
                        },
                      },
                      {
                        key: "deleteCol",
                        value: function (e) {
                          for (
                            var t = pe.ancestor(e.commonAncestor(), pe.isCell),
                              n = i()(t).closest("tr"),
                              o = n.children("td, th").index(i()(t)),
                              r = new De(
                                t,
                                De.where.Column,
                                De.requestAction.Delete,
                                i()(n).closest("table")[0]
                              ).getActionList(),
                              a = 0;
                            a < r.length;
                            a++
                          )
                            if (r[a])
                              switch (r[a].action) {
                                case De.resultAction.Ignore:
                                  continue;
                                case De.resultAction.SubtractSpanCount:
                                  var s = r[a].baseCell;
                                  if (s.colSpan && s.colSpan > 1) {
                                    var l = s.colSpan
                                      ? parseInt(s.colSpan, 10)
                                      : 0;
                                    l > 2
                                      ? (l--,
                                        s.setAttribute("colSpan", l),
                                        s.cellIndex === o && (s.innerHTML = ""))
                                      : 2 === l &&
                                        (s.removeAttribute("colSpan"),
                                        s.cellIndex === o &&
                                          (s.innerHTML = ""));
                                  }
                                  continue;
                                case De.resultAction.RemoveCell:
                                  pe.remove(r[a].baseCell, !0);
                                  continue;
                              }
                        },
                      },
                      {
                        key: "createTable",
                        value: function (e, t, n) {
                          for (var o, r = [], a = 0; a < e; a++)
                            r.push("<td>" + pe.blank + "</td>");
                          o = r.join("");
                          for (var s, l = [], c = 0; c < t; c++)
                            l.push("<tr>" + o + "</tr>");
                          s = l.join("");
                          var u = i()("<table>" + s + "</table>");
                          return (
                            n &&
                              n.tableClassName &&
                              u.addClass(n.tableClassName),
                            u[0]
                          );
                        },
                      },
                      {
                        key: "deleteTable",
                        value: function (e) {
                          var t = pe.ancestor(e.commonAncestor(), pe.isCell);
                          i()(t).closest("table").remove();
                        },
                      },
                    ]) && Pe(t.prototype, n),
                    o && Pe(t, o),
                    e
                  );
                })();
                function Fe(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var He = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$note = t.layoutInfo.note),
                      (this.$editor = t.layoutInfo.editor),
                      (this.$editable = t.layoutInfo.editable),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo),
                      (this.editable = this.$editable[0]),
                      (this.lastRange = null),
                      (this.snapshot = null),
                      (this.style = new Ne()),
                      (this.table = new Re()),
                      (this.typing = new Ie(t)),
                      (this.bullet = new Le()),
                      (this.history = new Se(t)),
                      this.context.memo("help.escape", this.lang.help.escape),
                      this.context.memo("help.undo", this.lang.help.undo),
                      this.context.memo("help.redo", this.lang.help.redo),
                      this.context.memo("help.tab", this.lang.help.tab),
                      this.context.memo("help.untab", this.lang.help.untab),
                      this.context.memo(
                        "help.insertParagraph",
                        this.lang.help.insertParagraph
                      ),
                      this.context.memo(
                        "help.insertOrderedList",
                        this.lang.help.insertOrderedList
                      ),
                      this.context.memo(
                        "help.insertUnorderedList",
                        this.lang.help.insertUnorderedList
                      ),
                      this.context.memo("help.indent", this.lang.help.indent),
                      this.context.memo("help.outdent", this.lang.help.outdent),
                      this.context.memo(
                        "help.formatPara",
                        this.lang.help.formatPara
                      ),
                      this.context.memo(
                        "help.insertHorizontalRule",
                        this.lang.help.insertHorizontalRule
                      ),
                      this.context.memo(
                        "help.fontName",
                        this.lang.help.fontName
                      );
                    for (
                      var o = [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "superscript",
                          "subscript",
                          "justifyLeft",
                          "justifyCenter",
                          "justifyRight",
                          "justifyFull",
                          "formatBlock",
                          "removeFormat",
                          "backColor",
                        ],
                        r = 0,
                        a = o.length;
                      r < a;
                      r++
                    )
                      (this[o[r]] = (function (e) {
                        return function (t) {
                          n.beforeCommand(),
                            document.execCommand(e, !1, t),
                            n.afterCommand(!0);
                        };
                      })(o[r])),
                        this.context.memo("help." + o[r], this.lang.help[o[r]]);
                    (this.fontName = this.wrapCommand(function (e) {
                      return n.fontStyling("font-family", v.validFontName(e));
                    })),
                      (this.fontSize = this.wrapCommand(function (e) {
                        var t = n.currentStyle()["font-size-unit"];
                        return n.fontStyling("font-size", e + t);
                      })),
                      (this.fontSizeUnit = this.wrapCommand(function (e) {
                        var t = n.currentStyle()["font-size"];
                        return n.fontStyling("font-size", t + e);
                      }));
                    for (var s = 1; s <= 6; s++)
                      (this["formatH" + s] = (function (e) {
                        return function () {
                          n.formatBlock("H" + e);
                        };
                      })(s)),
                        this.context.memo(
                          "help.formatH" + s,
                          this.lang.help["formatH" + s]
                        );
                    (this.insertParagraph = this.wrapCommand(function () {
                      n.typing.insertParagraph(n.editable);
                    })),
                      (this.insertOrderedList = this.wrapCommand(function () {
                        n.bullet.insertOrderedList(n.editable);
                      })),
                      (this.insertUnorderedList = this.wrapCommand(function () {
                        n.bullet.insertUnorderedList(n.editable);
                      })),
                      (this.indent = this.wrapCommand(function () {
                        n.bullet.indent(n.editable);
                      })),
                      (this.outdent = this.wrapCommand(function () {
                        n.bullet.outdent(n.editable);
                      })),
                      (this.insertNode = this.wrapCommand(function (e) {
                        n.isLimited(i()(e).text().length) ||
                          (n.getLastRange().insertNode(e),
                          n.setLastRange(xe.createFromNodeAfter(e).select()));
                      })),
                      (this.insertText = this.wrapCommand(function (e) {
                        if (!n.isLimited(e.length)) {
                          var t = n.getLastRange().insertNode(pe.createText(e));
                          n.setLastRange(
                            xe.create(t, pe.nodeLength(t)).select()
                          );
                        }
                      })),
                      (this.pasteHTML = this.wrapCommand(function (e) {
                        if (!n.isLimited(e.length)) {
                          e = n.context.invoke("codeview.purify", e);
                          var t = n.getLastRange().pasteHTML(e);
                          n.setLastRange(
                            xe.createFromNodeAfter(w.last(t)).select()
                          );
                        }
                      })),
                      (this.formatBlock = this.wrapCommand(function (e, t) {
                        var o = n.options.callbacks.onApplyCustomStyle;
                        o
                          ? o.call(n, t, n.context, n.onFormatBlock)
                          : n.onFormatBlock(e, t);
                      })),
                      (this.insertHorizontalRule = this.wrapCommand(
                        function () {
                          var e = n.getLastRange().insertNode(pe.create("HR"));
                          e.nextSibling &&
                            n.setLastRange(
                              xe.create(e.nextSibling, 0).normalize().select()
                            );
                        }
                      )),
                      (this.lineHeight = this.wrapCommand(function (e) {
                        n.style.stylePara(n.getLastRange(), { lineHeight: e });
                      })),
                      (this.createLink = this.wrapCommand(function (e) {
                        var t = e.url,
                          o = e.text,
                          r = e.isNewWindow,
                          a = e.checkProtocol,
                          s = e.range || n.getLastRange(),
                          l = o.length - s.toString().length;
                        if (!(l > 0 && n.isLimited(l))) {
                          var c = s.toString() !== o;
                          "string" == typeof t && (t = t.trim()),
                            n.options.onCreateLink
                              ? (t = n.options.onCreateLink(t))
                              : a &&
                                (t = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(t)
                                  ? t
                                  : n.options.defaultProtocol + t);
                          var u = [];
                          if (c) {
                            var d = (s = s.deleteContents()).insertNode(
                              i()("<A>" + o + "</A>")[0]
                            );
                            u.push(d);
                          } else
                            u = n.style.styleNodes(s, {
                              nodeName: "A",
                              expandClosestSibling: !0,
                              onlyPartialContains: !0,
                            });
                          i.a.each(u, function (e, n) {
                            i()(n).attr("href", t),
                              r
                                ? i()(n).attr("target", "_blank")
                                : i()(n).removeAttr("target");
                          }),
                            n.setLastRange(n.createRangeFromList(u).select());
                        }
                      })),
                      (this.color = this.wrapCommand(function (e) {
                        var t = e.foreColor,
                          n = e.backColor;
                        t && document.execCommand("foreColor", !1, t),
                          n && document.execCommand("backColor", !1, n);
                      })),
                      (this.foreColor = this.wrapCommand(function (e) {
                        document.execCommand("foreColor", !1, e);
                      })),
                      (this.insertTable = this.wrapCommand(function (e) {
                        var t = e.split("x");
                        n.getLastRange()
                          .deleteContents()
                          .insertNode(
                            n.table.createTable(t[0], t[1], n.options)
                          );
                      })),
                      (this.removeMedia = this.wrapCommand(function () {
                        var e = i()(n.restoreTarget()).parent();
                        e.closest("figure").length
                          ? e.closest("figure").remove()
                          : (e = i()(n.restoreTarget()).detach()),
                          n.context.triggerEvent(
                            "media.delete",
                            e,
                            n.$editable
                          );
                      })),
                      (this.floatMe = this.wrapCommand(function (e) {
                        var t = i()(n.restoreTarget());
                        t.toggleClass("note-float-left", "left" === e),
                          t.toggleClass("note-float-right", "right" === e),
                          t.css("float", "none" === e ? "" : e);
                      })),
                      (this.resize = this.wrapCommand(function (e) {
                        var t = i()(n.restoreTarget());
                        0 === (e = parseFloat(e))
                          ? t.css("width", "")
                          : t.css({ width: 100 * e + "%", height: "" });
                      }));
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          this.$editable
                            .on("keydown", function (t) {
                              if (
                                (t.keyCode === Ce.code.ENTER &&
                                  e.context.triggerEvent("enter", t),
                                e.context.triggerEvent("keydown", t),
                                (e.snapshot = e.history.makeSnapshot()),
                                (e.hasKeyShortCut = !1),
                                t.isDefaultPrevented() ||
                                  (e.options.shortcuts
                                    ? (e.hasKeyShortCut = e.handleKeyMap(t))
                                    : e.preventDefaultEditableShortCuts(t)),
                                e.isLimited(1, t))
                              ) {
                                var n = e.getLastRange();
                                if (n.eo - n.so == 0) return !1;
                              }
                              e.setLastRange(),
                                e.options.recordEveryKeystroke &&
                                  !1 === e.hasKeyShortCut &&
                                  e.history.recordUndo();
                            })
                            .on("keyup", function (t) {
                              e.setLastRange(),
                                e.context.triggerEvent("keyup", t);
                            })
                            .on("focus", function (t) {
                              e.setLastRange(),
                                e.context.triggerEvent("focus", t);
                            })
                            .on("blur", function (t) {
                              e.context.triggerEvent("blur", t);
                            })
                            .on("mousedown", function (t) {
                              e.context.triggerEvent("mousedown", t);
                            })
                            .on("mouseup", function (t) {
                              e.setLastRange(),
                                e.history.recordUndo(),
                                e.context.triggerEvent("mouseup", t);
                            })
                            .on("scroll", function (t) {
                              e.context.triggerEvent("scroll", t);
                            })
                            .on("paste", function (t) {
                              e.setLastRange(),
                                e.context.triggerEvent("paste", t);
                            })
                            .on("input", function () {
                              e.isLimited(0) &&
                                e.snapshot &&
                                e.history.applySnapshot(e.snapshot);
                            }),
                            this.$editable.attr(
                              "spellcheck",
                              this.options.spellCheck
                            ),
                            this.$editable.attr(
                              "autocorrect",
                              this.options.spellCheck
                            ),
                            this.options.disableGrammar &&
                              this.$editable.attr("data-gramm", !1),
                            this.$editable.php(
                              pe.php(this.$note) || pe.emptyPara
                            ),
                            this.$editable.on(
                              v.inputEventName,
                              g.debounce(function () {
                                e.context.triggerEvent(
                                  "change",
                                  e.$editable.php(),
                                  e.$editable
                                );
                              }, 10)
                            ),
                            this.$editable
                              .on("focusin", function (t) {
                                e.context.triggerEvent("focusin", t);
                              })
                              .on("focusout", function (t) {
                                e.context.triggerEvent("focusout", t);
                              }),
                            this.options.airMode
                              ? this.options.overrideContextMenu &&
                                this.$editor.on("contextmenu", function (t) {
                                  return (
                                    e.context.triggerEvent("contextmenu", t), !1
                                  );
                                })
                              : (this.options.width &&
                                  this.$editor.outerWidth(this.options.width),
                                this.options.height &&
                                  this.$editable.outerHeight(
                                    this.options.height
                                  ),
                                this.options.maxHeight &&
                                  this.$editable.css(
                                    "max-height",
                                    this.options.maxHeight
                                  ),
                                this.options.minHeight &&
                                  this.$editable.css(
                                    "min-height",
                                    this.options.minHeight
                                  )),
                            this.history.recordUndo(),
                            this.setLastRange();
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$editable.off();
                        },
                      },
                      {
                        key: "handleKeyMap",
                        value: function (e) {
                          var t = this.options.keyMap[v.isMac ? "mac" : "pc"],
                            n = [];
                          e.metaKey && n.push("CMD"),
                            e.ctrlKey && !e.altKey && n.push("CTRL"),
                            e.shiftKey && n.push("SHIFT");
                          var o = Ce.nameFromCode[e.keyCode];
                          o && n.push(o);
                          var i = t[n.join("+")];
                          if ("TAB" !== o || this.options.tabDisable)
                            if (i) {
                              if (!1 !== this.context.invoke(i))
                                return e.preventDefault(), !0;
                            } else Ce.isEdit(e.keyCode) && this.afterCommand();
                          else this.afterCommand();
                          return !1;
                        },
                      },
                      {
                        key: "preventDefaultEditableShortCuts",
                        value: function (e) {
                          (e.ctrlKey || e.metaKey) &&
                            w.contains([66, 73, 85], e.keyCode) &&
                            e.preventDefault();
                        },
                      },
                      {
                        key: "isLimited",
                        value: function (e, t) {
                          return (
                            (e = e || 0),
                            (void 0 === t ||
                              !(
                                Ce.isMove(t.keyCode) ||
                                Ce.isNavigation(t.keyCode) ||
                                t.ctrlKey ||
                                t.metaKey ||
                                w.contains(
                                  [Ce.code.BACKSPACE, Ce.code.DELETE],
                                  t.keyCode
                                )
                              )) &&
                              this.options.maxTextLength > 0 &&
                              this.$editable.text().length + e >
                                this.options.maxTextLength
                          );
                        },
                      },
                      {
                        key: "createRange",
                        value: function () {
                          return (
                            this.focus(),
                            this.setLastRange(),
                            this.getLastRange()
                          );
                        },
                      },
                      {
                        key: "createRangeFromList",
                        value: function (e) {
                          var t = xe
                              .createFromNodeBefore(w.head(e))
                              .getStartPoint(),
                            n = xe.createFromNodeAfter(w.last(e)).getEndPoint();
                          return xe.create(t.node, t.offset, n.node, n.offset);
                        },
                      },
                      {
                        key: "setLastRange",
                        value: function (e) {
                          e
                            ? (this.lastRange = e)
                            : ((this.lastRange = xe.create(this.editable)),
                              0 ===
                                i()(this.lastRange.sc).closest(".note-editable")
                                  .length &&
                                (this.lastRange = xe.createFromBodyElement(
                                  this.editable
                                )));
                        },
                      },
                      {
                        key: "getLastRange",
                        value: function () {
                          return (
                            this.lastRange || this.setLastRange(),
                            this.lastRange
                          );
                        },
                      },
                      {
                        key: "saveRange",
                        value: function (e) {
                          e && this.getLastRange().collapse().select();
                        },
                      },
                      {
                        key: "restoreRange",
                        value: function () {
                          this.lastRange &&
                            (this.lastRange.select(), this.focus());
                        },
                      },
                      {
                        key: "saveTarget",
                        value: function (e) {
                          this.$editable.data("target", e);
                        },
                      },
                      {
                        key: "clearTarget",
                        value: function () {
                          this.$editable.removeData("target");
                        },
                      },
                      {
                        key: "restoreTarget",
                        value: function () {
                          return this.$editable.data("target");
                        },
                      },
                      {
                        key: "currentStyle",
                        value: function () {
                          var e = xe.create();
                          return (
                            e && (e = e.normalize()),
                            e
                              ? this.style.current(e)
                              : this.style.fromNode(this.$editable)
                          );
                        },
                      },
                      {
                        key: "styleFromNode",
                        value: function (e) {
                          return this.style.fromNode(e);
                        },
                      },
                      {
                        key: "undo",
                        value: function () {
                          this.context.triggerEvent(
                            "before.command",
                            this.$editable.php()
                          ),
                            this.history.undo(),
                            this.context.triggerEvent(
                              "change",
                              this.$editable.php(),
                              this.$editable
                            );
                        },
                      },
                      {
                        key: "commit",
                        value: function () {
                          this.context.triggerEvent(
                            "before.command",
                            this.$editable.php()
                          ),
                            this.history.commit(),
                            this.context.triggerEvent(
                              "change",
                              this.$editable.php(),
                              this.$editable
                            );
                        },
                      },
                      {
                        key: "redo",
                        value: function () {
                          this.context.triggerEvent(
                            "before.command",
                            this.$editable.php()
                          ),
                            this.history.redo(),
                            this.context.triggerEvent(
                              "change",
                              this.$editable.php(),
                              this.$editable
                            );
                        },
                      },
                      {
                        key: "beforeCommand",
                        value: function () {
                          this.context.triggerEvent(
                            "before.command",
                            this.$editable.php()
                          ),
                            document.execCommand(
                              "styleWithCSS",
                              !1,
                              this.options.styleWithCSS
                            ),
                            this.focus();
                        },
                      },
                      {
                        key: "afterCommand",
                        value: function (e) {
                          this.normalizeContent(),
                            this.history.recordUndo(),
                            e ||
                              this.context.triggerEvent(
                                "change",
                                this.$editable.php(),
                                this.$editable
                              );
                        },
                      },
                      {
                        key: "tab",
                        value: function () {
                          var e = this.getLastRange();
                          if (e.isCollapsed() && e.isOnCell())
                            this.table.tab(e);
                          else {
                            if (0 === this.options.tabSize) return !1;
                            this.isLimited(this.options.tabSize) ||
                              (this.beforeCommand(),
                              this.typing.insertTab(e, this.options.tabSize),
                              this.afterCommand());
                          }
                        },
                      },
                      {
                        key: "untab",
                        value: function () {
                          var e = this.getLastRange();
                          if (e.isCollapsed() && e.isOnCell())
                            this.table.tab(e, !0);
                          else if (0 === this.options.tabSize) return !1;
                        },
                      },
                      {
                        key: "wrapCommand",
                        value: function (e) {
                          return function () {
                            this.beforeCommand(),
                              e.apply(this, arguments),
                              this.afterCommand();
                          };
                        },
                      },
                      {
                        key: "insertImage",
                        value: function (e, t) {
                          var n,
                            o = this;
                          return ((n = e),
                          i.a
                            .Deferred(function (e) {
                              var t = i()("<img>");
                              t.one("load", function () {
                                t.off("error abort"), e.resolve(t);
                              })
                                .one("error abort", function () {
                                  t.off("load").detach(), e.reject(t);
                                })
                                .css({ display: "none" })
                                .appendTo(document.body)
                                .attr("src", n);
                            })
                            .promise())
                            .then(function (e) {
                              o.beforeCommand(),
                                "function" == typeof t
                                  ? t(e)
                                  : ("string" == typeof t &&
                                      e.attr("data-filename", t),
                                    e.css(
                                      "width",
                                      Math.min(o.$editable.width(), e.width())
                                    )),
                                e.show(),
                                o.getLastRange().insertNode(e[0]),
                                o.setLastRange(
                                  xe.createFromNodeAfter(e[0]).select()
                                ),
                                o.afterCommand();
                            })
                            .fail(function (e) {
                              o.context.triggerEvent("image.upload.error", e);
                            });
                        },
                      },
                      {
                        key: "insertImagesAsDataURL",
                        value: function (e) {
                          var t = this;
                          i.a.each(e, function (e, n) {
                            var o = n.name;
                            t.options.maximumImageFileSize &&
                            t.options.maximumImageFileSize < n.size
                              ? t.context.triggerEvent(
                                  "image.upload.error",
                                  t.lang.image.maximumFileSizeError
                                )
                              : (function (e) {
                                  return i.a
                                    .Deferred(function (t) {
                                      i.a
                                        .extend(new FileReader(), {
                                          onload: function (e) {
                                            var n = e.target.result;
                                            t.resolve(n);
                                          },
                                          onerror: function (e) {
                                            t.reject(e);
                                          },
                                        })
                                        .readAsDataURL(e);
                                    })
                                    .promise();
                                })(n)
                                  .then(function (e) {
                                    return t.insertImage(e, o);
                                  })
                                  .fail(function () {
                                    t.context.triggerEvent(
                                      "image.upload.error"
                                    );
                                  });
                          });
                        },
                      },
                      {
                        key: "insertImagesOrCallback",
                        value: function (e) {
                          this.options.callbacks.onImageUpload
                            ? this.context.triggerEvent("image.upload", e)
                            : this.insertImagesAsDataURL(e);
                        },
                      },
                      {
                        key: "getSelectedText",
                        value: function () {
                          var e = this.getLastRange();
                          return (
                            e.isOnAnchor() &&
                              (e = xe.createFromNode(
                                pe.ancestor(e.sc, pe.isAnchor)
                              )),
                            e.toString()
                          );
                        },
                      },
                      {
                        key: "onFormatBlock",
                        value: function (e, t) {
                          if (
                            (document.execCommand(
                              "FormatBlock",
                              !1,
                              v.isMSIE ? "<" + e + ">" : e
                            ),
                            t &&
                              t.length &&
                              (t[0].tagName.toUpperCase() !== e.toUpperCase() &&
                                (t = t.find(e)),
                              t && t.length))
                          ) {
                            var n = t[0].className || "";
                            if (n) {
                              var o = this.createRange();
                              i()([o.sc, o.ec]).closest(e).addClass(n);
                            }
                          }
                        },
                      },
                      {
                        key: "formatPara",
                        value: function () {
                          this.formatBlock("P");
                        },
                      },
                      {
                        key: "fontStyling",
                        value: function (e, t) {
                          var n = this.getLastRange();
                          if ("" !== n) {
                            var o = this.style.styleNodes(n);
                            if (
                              (this.$editor.find(".note-status-output").php(""),
                              i()(o).css(e, t),
                              n.isCollapsed())
                            ) {
                              var r = w.head(o);
                              r &&
                                !pe.nodeLength(r) &&
                                ((r.innerHTML = pe.ZERO_WIDTH_NBSP_CHAR),
                                xe.createFromNode(r.firstChild).select(),
                                this.setLastRange(),
                                this.$editable.data("bogus", r));
                            } else
                              this.setLastRange(
                                this.createRangeFromList(o).select()
                              );
                          } else {
                            var a = i.a.now();
                            this.$editor
                              .find(".note-status-output")
                              .php(
                                '<div id="note-status-output-' +
                                  a +
                                  '" class="alert alert-info">' +
                                  this.lang.output.noSelection +
                                  "</div>"
                              ),
                              setTimeout(function () {
                                i()("#note-status-output-" + a).remove();
                              }, 5e3);
                          }
                        },
                      },
                      {
                        key: "unlink",
                        value: function () {
                          var e = this.getLastRange();
                          if (e.isOnAnchor()) {
                            var t = pe.ancestor(e.sc, pe.isAnchor);
                            (e = xe.createFromNode(t)).select(),
                              this.setLastRange(),
                              this.beforeCommand(),
                              document.execCommand("unlink"),
                              this.afterCommand();
                          }
                        },
                      },
                      {
                        key: "getLinkInfo",
                        value: function () {
                          var e = this.getLastRange().expand(pe.isAnchor),
                            t = i()(w.head(e.nodes(pe.isAnchor))),
                            n = {
                              range: e,
                              text: e.toString(),
                              url: t.length ? t.attr("href") : "",
                            };
                          return (
                            t.length &&
                              (n.isNewWindow = "_blank" === t.attr("target")),
                            n
                          );
                        },
                      },
                      {
                        key: "addRow",
                        value: function (e) {
                          var t = this.getLastRange(this.$editable);
                          t.isCollapsed() &&
                            t.isOnCell() &&
                            (this.beforeCommand(),
                            this.table.addRow(t, e),
                            this.afterCommand());
                        },
                      },
                      {
                        key: "addCol",
                        value: function (e) {
                          var t = this.getLastRange(this.$editable);
                          t.isCollapsed() &&
                            t.isOnCell() &&
                            (this.beforeCommand(),
                            this.table.addCol(t, e),
                            this.afterCommand());
                        },
                      },
                      {
                        key: "deleteRow",
                        value: function () {
                          var e = this.getLastRange(this.$editable);
                          e.isCollapsed() &&
                            e.isOnCell() &&
                            (this.beforeCommand(),
                            this.table.deleteRow(e),
                            this.afterCommand());
                        },
                      },
                      {
                        key: "deleteCol",
                        value: function () {
                          var e = this.getLastRange(this.$editable);
                          e.isCollapsed() &&
                            e.isOnCell() &&
                            (this.beforeCommand(),
                            this.table.deleteCol(e),
                            this.afterCommand());
                        },
                      },
                      {
                        key: "deleteTable",
                        value: function () {
                          var e = this.getLastRange(this.$editable);
                          e.isCollapsed() &&
                            e.isOnCell() &&
                            (this.beforeCommand(),
                            this.table.deleteTable(e),
                            this.afterCommand());
                        },
                      },
                      {
                        key: "resizeTo",
                        value: function (e, t, n) {
                          var o;
                          if (n) {
                            var i = e.y / e.x,
                              r = t.data("ratio");
                            o = {
                              width: r > i ? e.x : e.y / r,
                              height: r > i ? e.x * r : e.y,
                            };
                          } else o = { width: e.x, height: e.y };
                          t.css(o);
                        },
                      },
                      {
                        key: "hasFocus",
                        value: function () {
                          return this.$editable.is(":focus");
                        },
                      },
                      {
                        key: "focus",
                        value: function () {
                          this.hasFocus() || this.$editable.focus();
                        },
                      },
                      {
                        key: "isEmpty",
                        value: function () {
                          return (
                            pe.isEmpty(this.$editable[0]) ||
                            pe.emptyPara === this.$editable.php()
                          );
                        },
                      },
                      {
                        key: "empty",
                        value: function () {
                          this.context.invoke("code", pe.emptyPara);
                        },
                      },
                      {
                        key: "normalizeContent",
                        value: function () {
                          this.$editable[0].normalize();
                        },
                      },
                    ]) && Fe(t.prototype, n),
                    o && Fe(t, o),
                    e
                  );
                })();
                function je(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Oe = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$editable = t.layoutInfo.editable);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          this.$editable.on(
                            "paste",
                            this.pasteByEvent.bind(this)
                          );
                        },
                      },
                      {
                        key: "pasteByEvent",
                        value: function (e) {
                          var t = this,
                            n = e.originalEvent.clipboardData;
                          if (n && n.items && n.items.length) {
                            var o =
                              n.items.length > 1 ? n.items[1] : w.head(n.items);
                            "file" === o.kind && -1 !== o.type.indexOf("image/")
                              ? (this.context.invoke(
                                  "editor.insertImagesOrCallback",
                                  [o.getAsFile()]
                                ),
                                e.preventDefault())
                              : "string" === o.kind &&
                                this.context.invoke(
                                  "editor.isLimited",
                                  n.getData("Text").length
                                ) &&
                                e.preventDefault();
                          } else if (window.clipboardData) {
                            var i = window.clipboardData.getData("text");
                            this.context.invoke("editor.isLimited", i.length) &&
                              e.preventDefault();
                          }
                          setTimeout(function () {
                            t.context.invoke("editor.afterCommand");
                          }, 10);
                        },
                      },
                    ]) && je(t.prototype, n),
                    o && je(t, o),
                    e
                  );
                })();
                function Be(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Me = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$eventListener = i()(document)),
                      (this.$editor = t.layoutInfo.editor),
                      (this.$editable = t.layoutInfo.editable),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo),
                      (this.documentEventHandlers = {}),
                      (this.$dropzone = i()(
                        [
                          '<div class="note-dropzone">',
                          '<div class="note-dropzone-message"></div>',
                          "</div>",
                        ].join("")
                      ).prependTo(this.$editor));
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          this.options.disableDragAndDrop
                            ? ((this.documentEventHandlers.onDrop = function (
                                e
                              ) {
                                e.preventDefault();
                              }),
                              (this.$eventListener = this.$dropzone),
                              this.$eventListener.on(
                                "drop",
                                this.documentEventHandlers.onDrop
                              ))
                            : this.attachDragAndDropEvent();
                        },
                      },
                      {
                        key: "attachDragAndDropEvent",
                        value: function () {
                          var e = this,
                            t = i()(),
                            n = this.$dropzone.find(".note-dropzone-message");
                          (this.documentEventHandlers.onDragenter = function (
                            o
                          ) {
                            var i = e.context.invoke("codeview.isActivated"),
                              r =
                                e.$editor.width() > 0 && e.$editor.height() > 0;
                            i ||
                              t.length ||
                              !r ||
                              (e.$editor.addClass("dragover"),
                              e.$dropzone.width(e.$editor.width()),
                              e.$dropzone.height(e.$editor.height()),
                              n.text(e.lang.image.dragImageHere)),
                              (t = t.add(o.target));
                          }),
                            (this.documentEventHandlers.onDragleave = function (
                              n
                            ) {
                              ((t = t.not(n.target)).length &&
                                "BODY" !== n.target.nodeName) ||
                                ((t = i()()),
                                e.$editor.removeClass("dragover"));
                            }),
                            (this.documentEventHandlers.onDrop = function () {
                              (t = i()()), e.$editor.removeClass("dragover");
                            }),
                            this.$eventListener
                              .on(
                                "dragenter",
                                this.documentEventHandlers.onDragenter
                              )
                              .on(
                                "dragleave",
                                this.documentEventHandlers.onDragleave
                              )
                              .on("drop", this.documentEventHandlers.onDrop),
                            this.$dropzone
                              .on("dragenter", function () {
                                e.$dropzone.addClass("hover"),
                                  n.text(e.lang.image.dropImage);
                              })
                              .on("dragleave", function () {
                                e.$dropzone.removeClass("hover"),
                                  n.text(e.lang.image.dragImageHere);
                              }),
                            this.$dropzone
                              .on("drop", function (t) {
                                var n = t.originalEvent.dataTransfer;
                                t.preventDefault(),
                                  n && n.files && n.files.length
                                    ? (e.$editable.focus(),
                                      e.context.invoke(
                                        "editor.insertImagesOrCallback",
                                        n.files
                                      ))
                                    : i.a.each(n.types, function (t, o) {
                                        if (
                                          !(
                                            o.toLowerCase().indexOf("_moz_") >
                                            -1
                                          )
                                        ) {
                                          var r = n.getData(o);
                                          o.toLowerCase().indexOf("text") > -1
                                            ? e.context.invoke(
                                                "editor.pasteHTML",
                                                r
                                              )
                                            : i()(r).each(function (t, n) {
                                                e.context.invoke(
                                                  "editor.insertNode",
                                                  n
                                                );
                                              });
                                        }
                                      });
                              })
                              .on("dragover", !1);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          var e = this;
                          Object.keys(this.documentEventHandlers).forEach(
                            function (t) {
                              e.$eventListener.off(
                                t.substr(2).toLowerCase(),
                                e.documentEventHandlers[t]
                              );
                            }
                          ),
                            (this.documentEventHandlers = {});
                        },
                      },
                    ]) && Be(t.prototype, n),
                    o && Be(t, o),
                    e
                  );
                })();
                function ze(e) {
                  if (
                    "undefined" == typeof Symbol ||
                    null == e[Symbol.iterator]
                  ) {
                    if (
                      Array.isArray(e) ||
                      (e = (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return qe(e, t);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(n)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? qe(e, t)
                              : void 0
                          );
                        }
                      })(e))
                    ) {
                      var t = 0,
                        n = function () {};
                      return {
                        s: n,
                        n: function () {
                          return t >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[t++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: n,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    i,
                    r = !0,
                    a = !1;
                  return {
                    s: function () {
                      o = e[Symbol.iterator]();
                    },
                    n: function () {
                      var e = o.next();
                      return (r = e.done), e;
                    },
                    e: function (e) {
                      (a = !0), (i = e);
                    },
                    f: function () {
                      try {
                        r || null == o.return || o.return();
                      } finally {
                        if (a) throw i;
                      }
                    },
                  };
                }
                function qe(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                  return o;
                }
                function Ue(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var We = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$editor = t.layoutInfo.editor),
                      (this.$editable = t.layoutInfo.editable),
                      (this.$codable = t.layoutInfo.codable),
                      (this.options = t.options),
                      (this.CodeMirrorConstructor = window.CodeMirror),
                      this.options.codemirror.CodeMirrorConstructor &&
                        (this.CodeMirrorConstructor =
                          this.options.codemirror.CodeMirrorConstructor);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "sync",
                        value: function (e) {
                          var t = this.isActivated(),
                            n = this.CodeMirrorConstructor;
                          t &&
                            (e
                              ? n
                                ? this.$codable
                                    .data("cmEditor")
                                    .getDoc()
                                    .setValue(e)
                                : this.$codable.val(e)
                              : n && this.$codable.data("cmEditor").save());
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          this.$codable.on("keyup", function (t) {
                            t.keyCode === Ce.code.ESCAPE && e.deactivate();
                          });
                        },
                      },
                      {
                        key: "isActivated",
                        value: function () {
                          return this.$editor.hasClass("codeview");
                        },
                      },
                      {
                        key: "toggle",
                        value: function () {
                          this.isActivated()
                            ? this.deactivate()
                            : this.activate(),
                            this.context.triggerEvent("codeview.toggled");
                        },
                      },
                      {
                        key: "purify",
                        value: function (e) {
                          if (
                            this.options.codeviewFilter &&
                            ((e = e.replace(
                              this.options.codeviewFilterRegex,
                              ""
                            )),
                            this.options.codeviewIframeFilter)
                          ) {
                            var t =
                              this.options.codeviewIframeWhitelistSrc.concat(
                                this.options.codeviewIframeWhitelistSrcBase
                              );
                            e = e.replace(
                              /(<iframe.*?>.*?(?:<\/iframe>)?)/gi,
                              function (e) {
                                if (
                                  /<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(
                                    e
                                  )
                                )
                                  return "";
                                var n,
                                  o = ze(t);
                                try {
                                  for (o.s(); !(n = o.n()).done; ) {
                                    var i = n.value;
                                    if (
                                      new RegExp(
                                        'src="(https?:)?//' +
                                          i.replace(
                                            /[-\/\\^$*+?.()|[\]{}]/g,
                                            "\\$&"
                                          ) +
                                          '/(.+)"'
                                      ).test(e)
                                    )
                                      return e;
                                  }
                                } catch (e) {
                                  o.e(e);
                                } finally {
                                  o.f();
                                }
                                return "";
                              }
                            );
                          }
                          return e;
                        },
                      },
                      {
                        key: "activate",
                        value: function () {
                          var e = this,
                            t = this.CodeMirrorConstructor;
                          if (
                            (this.$codable.val(
                              pe.php(this.$editable, this.options.prettifyHtml)
                            ),
                            this.$codable.height(this.$editable.height()),
                            this.context.invoke("toolbar.updateCodeview", !0),
                            this.context.invoke(
                              "airPopover.updateCodeview",
                              !0
                            ),
                            this.$editor.addClass("codeview"),
                            this.$codable.focus(),
                            t)
                          ) {
                            var n = t.fromTextArea(
                              this.$codable[0],
                              this.options.codemirror
                            );
                            if (this.options.codemirror.tern) {
                              var o = new t.TernServer(
                                this.options.codemirror.tern
                              );
                              (n.ternServer = o),
                                n.on("cursorActivity", function (e) {
                                  o.updateArgHints(e);
                                });
                            }
                            n.on("blur", function (t) {
                              e.context.triggerEvent(
                                "blur.codeview",
                                n.getValue(),
                                t
                              );
                            }),
                              n.on("change", function () {
                                e.context.triggerEvent(
                                  "change.codeview",
                                  n.getValue(),
                                  n
                                );
                              }),
                              n.setSize(null, this.$editable.outerHeight()),
                              this.$codable.data("cmEditor", n);
                          } else
                            this.$codable.on("blur", function (t) {
                              e.context.triggerEvent(
                                "blur.codeview",
                                e.$codable.val(),
                                t
                              );
                            }),
                              this.$codable.on("input", function () {
                                e.context.triggerEvent(
                                  "change.codeview",
                                  e.$codable.val(),
                                  e.$codable
                                );
                              });
                        },
                      },
                      {
                        key: "deactivate",
                        value: function () {
                          if (this.CodeMirrorConstructor) {
                            var e = this.$codable.data("cmEditor");
                            this.$codable.val(e.getValue()), e.toTextArea();
                          }
                          var t = this.purify(
                              pe.value(
                                this.$codable,
                                this.options.prettifyHtml
                              ) || pe.emptyPara
                            ),
                            n = this.$editable.php() !== t;
                          this.$editable.php(t),
                            this.$editable.height(
                              this.options.height
                                ? this.$codable.height()
                                : "auto"
                            ),
                            this.$editor.removeClass("codeview"),
                            n &&
                              this.context.triggerEvent(
                                "change",
                                this.$editable.php(),
                                this.$editable
                              ),
                            this.$editable.focus(),
                            this.context.invoke("toolbar.updateCodeview", !1),
                            this.context.invoke(
                              "airPopover.updateCodeview",
                              !1
                            );
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.isActivated() && this.deactivate();
                        },
                      },
                    ]) && Ue(t.prototype, n),
                    o && Ue(t, o),
                    e
                  );
                })();
                function _e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ke = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.$document = i()(document)),
                      (this.$statusbar = t.layoutInfo.statusbar),
                      (this.$editable = t.layoutInfo.editable),
                      (this.options = t.options);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          this.options.airMode ||
                          this.options.disableResizeEditor
                            ? this.destroy()
                            : this.$statusbar.on("mousedown", function (t) {
                                t.preventDefault(), t.stopPropagation();
                                var n =
                                    e.$editable.offset().top -
                                    e.$document.scrollTop(),
                                  o = function (t) {
                                    var o = t.clientY - (n + 24);
                                    (o =
                                      e.options.minheight > 0
                                        ? Math.max(o, e.options.minheight)
                                        : o),
                                      (o =
                                        e.options.maxHeight > 0
                                          ? Math.min(o, e.options.maxHeight)
                                          : o),
                                      e.$editable.height(o);
                                  };
                                e.$document
                                  .on("mousemove", o)
                                  .one("mouseup", function () {
                                    e.$document.off("mousemove", o);
                                  });
                              });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$statusbar.off(),
                            this.$statusbar.addClass("locked");
                        },
                      },
                    ]) && _e(t.prototype, n),
                    o && _e(t, o),
                    e
                  );
                })();
                function Ve(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ge = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$editor = t.layoutInfo.editor),
                      (this.$toolbar = t.layoutInfo.toolbar),
                      (this.$editable = t.layoutInfo.editable),
                      (this.$codable = t.layoutInfo.codable),
                      (this.$window = i()(window)),
                      (this.$scrollbar = i()("html, body")),
                      (this.onResize = function () {
                        n.resizeTo({
                          h: n.$window.height() - n.$toolbar.outerHeight(),
                        });
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "resizeTo",
                        value: function (e) {
                          this.$editable.css("height", e.h),
                            this.$codable.css("height", e.h),
                            this.$codable.data("cmeditor") &&
                              this.$codable.data("cmeditor").setsize(null, e.h);
                        },
                      },
                      {
                        key: "toggle",
                        value: function () {
                          this.$editor.toggleClass("fullscreen"),
                            this.isFullscreen()
                              ? (this.$editable.data(
                                  "orgHeight",
                                  this.$editable.css("height")
                                ),
                                this.$editable.data(
                                  "orgMaxHeight",
                                  this.$editable.css("maxHeight")
                                ),
                                this.$editable.css("maxHeight", ""),
                                this.$window
                                  .on("resize", this.onResize)
                                  .trigger("resize"),
                                this.$scrollbar.css("overflow", "hidden"))
                              : (this.$window.off("resize", this.onResize),
                                this.resizeTo({
                                  h: this.$editable.data("orgHeight"),
                                }),
                                this.$editable.css(
                                  "maxHeight",
                                  this.$editable.css("orgMaxHeight")
                                ),
                                this.$scrollbar.css("overflow", "visible")),
                            this.context.invoke(
                              "toolbar.updateFullscreen",
                              this.isFullscreen()
                            );
                        },
                      },
                      {
                        key: "isFullscreen",
                        value: function () {
                          return this.$editor.hasClass("fullscreen");
                        },
                      },
                    ]) && Ve(t.prototype, n),
                    o && Ve(t, o),
                    e
                  );
                })();
                function Xe(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ye = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$document = i()(document)),
                      (this.$editingArea = t.layoutInfo.editingArea),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo),
                      (this.events = {
                        "summernote.mousedown": function (e, t) {
                          n.update(t.target, t) && t.preventDefault();
                        },
                        "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":
                          function () {
                            n.update();
                          },
                        "summernote.disable summernote.blur": function () {
                          n.hide();
                        },
                        "summernote.codeview.toggled": function () {
                          n.update();
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          (this.$handle = i()(
                            [
                              '<div class="note-handle">',
                              '<div class="note-control-selection">',
                              '<div class="note-control-selection-bg"></div>',
                              '<div class="note-control-holder note-control-nw"></div>',
                              '<div class="note-control-holder note-control-ne"></div>',
                              '<div class="note-control-holder note-control-sw"></div>',
                              '<div class="',
                              this.options.disableResizeImage
                                ? "note-control-holder"
                                : "note-control-sizing",
                              ' note-control-se"></div>',
                              this.options.disableResizeImage
                                ? ""
                                : '<div class="note-control-selection-info"></div>',
                              "</div>",
                              "</div>",
                            ].join("")
                          ).prependTo(this.$editingArea)),
                            this.$handle.on("mousedown", function (t) {
                              if (pe.isControlSizing(t.target)) {
                                t.preventDefault(), t.stopPropagation();
                                var n = e.$handle
                                    .find(".note-control-selection")
                                    .data("target"),
                                  o = n.offset(),
                                  i = e.$document.scrollTop(),
                                  r = function (t) {
                                    e.context.invoke(
                                      "editor.resizeTo",
                                      {
                                        x: t.clientX - o.left,
                                        y: t.clientY - (o.top - i),
                                      },
                                      n,
                                      !t.shiftKey
                                    ),
                                      e.update(n[0], t);
                                  };
                                e.$document
                                  .on("mousemove", r)
                                  .one("mouseup", function (t) {
                                    t.preventDefault(),
                                      e.$document.off("mousemove", r),
                                      e.context.invoke("editor.afterCommand");
                                  }),
                                  n.data("ratio") ||
                                    n.data("ratio", n.height() / n.width());
                              }
                            }),
                            this.$handle.on("wheel", function (t) {
                              t.preventDefault(), e.update();
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$handle.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function (e, t) {
                          if (this.context.isDisabled()) return !1;
                          var n = pe.isImg(e),
                            o = this.$handle.find(".note-control-selection");
                          if (
                            (this.context.invoke("imagePopover.update", e, t),
                            n)
                          ) {
                            var r = i()(e),
                              a = r.position(),
                              s = {
                                left:
                                  a.left + parseInt(r.css("marginLeft"), 10),
                                top: a.top + parseInt(r.css("marginTop"), 10),
                              },
                              l = { w: r.outerWidth(!1), h: r.outerHeight(!1) };
                            o.css({
                              display: "block",
                              left: s.left,
                              top: s.top,
                              width: l.w,
                              height: l.h,
                            }).data("target", r);
                            var c = new Image();
                            c.src = r.attr("src");
                            var u =
                              l.w +
                              "x" +
                              l.h +
                              " (" +
                              this.lang.image.original +
                              ": " +
                              c.width +
                              "x" +
                              c.height +
                              ")";
                            o.find(".note-control-selection-info").text(u),
                              this.context.invoke("editor.saveTarget", e);
                          } else this.hide();
                          return n;
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.context.invoke("editor.clearTarget"),
                            this.$handle.children().hide();
                        },
                      },
                    ]) && Xe(t.prototype, n),
                    o && Xe(t, o),
                    e
                  );
                })();
                function Qe(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ze =
                    /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
                  Je = (function () {
                    function e(t) {
                      var n = this;
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.context = t),
                        (this.options = t.options),
                        (this.events = {
                          "summernote.keyup": function (e, t) {
                            t.isDefaultPrevented() || n.handleKeyup(t);
                          },
                          "summernote.keydown": function (e, t) {
                            n.handleKeydown(t);
                          },
                        });
                    }
                    var t, n, o;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "initialize",
                          value: function () {
                            this.lastWordRange = null;
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.lastWordRange = null;
                          },
                        },
                        {
                          key: "replace",
                          value: function () {
                            if (this.lastWordRange) {
                              var e = this.lastWordRange.toString(),
                                t = e.match(Ze);
                              if (t && (t[1] || t[2])) {
                                var n = t[1] ? e : "http://" + e,
                                  o = this.options.showDomainOnlyForAutolink
                                    ? e
                                        .replace(
                                          /^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i,
                                          ""
                                        )
                                        .split("/")[0]
                                    : e,
                                  r = i()("<a />").php(o).attr("href", n)[0];
                                this.context.options.linkTargetBlank &&
                                  i()(r).attr("target", "_blank"),
                                  this.lastWordRange.insertNode(r),
                                  (this.lastWordRange = null),
                                  this.context.invoke("editor.focus");
                              }
                            }
                          },
                        },
                        {
                          key: "handleKeydown",
                          value: function (e) {
                            if (
                              w.contains(
                                [Ce.code.ENTER, Ce.code.SPACE],
                                e.keyCode
                              )
                            ) {
                              var t = this.context
                                .invoke("editor.createRange")
                                .getWordRange();
                              this.lastWordRange = t;
                            }
                          },
                        },
                        {
                          key: "handleKeyup",
                          value: function (e) {
                            w.contains(
                              [Ce.code.ENTER, Ce.code.SPACE],
                              e.keyCode
                            ) && this.replace();
                          },
                        },
                      ]) && Qe(t.prototype, n),
                      o && Qe(t, o),
                      e
                    );
                  })();
                function et(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var tt = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.$note = t.layoutInfo.note),
                      (this.events = {
                        "summernote.change": function () {
                          n.$note.val(t.invoke("code"));
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return pe.isTextarea(this.$note[0]);
                        },
                      },
                    ]) && et(t.prototype, n),
                    o && et(t, o),
                    e
                  );
                })();
                function nt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var ot = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.options = t.options.replace || {}),
                      (this.keys = [
                        Ce.code.ENTER,
                        Ce.code.SPACE,
                        Ce.code.PERIOD,
                        Ce.code.COMMA,
                        Ce.code.SEMICOLON,
                        Ce.code.SLASH,
                      ]),
                      (this.previousKeydownCode = null),
                      (this.events = {
                        "summernote.keyup": function (e, t) {
                          t.isDefaultPrevented() || n.handleKeyup(t);
                        },
                        "summernote.keydown": function (e, t) {
                          n.handleKeydown(t);
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !!this.options.match;
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          this.lastWord = null;
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.lastWord = null;
                        },
                      },
                      {
                        key: "replace",
                        value: function () {
                          if (this.lastWord) {
                            var e = this,
                              t = this.lastWord.toString();
                            this.options.match(t, function (t) {
                              if (t) {
                                var n = "";
                                if (
                                  ("string" == typeof t
                                    ? (n = pe.createText(t))
                                    : t instanceof jQuery
                                    ? (n = t[0])
                                    : t instanceof Node && (n = t),
                                  !n)
                                )
                                  return;
                                e.lastWord.insertNode(n),
                                  (e.lastWord = null),
                                  e.context.invoke("editor.focus");
                              }
                            });
                          }
                        },
                      },
                      {
                        key: "handleKeydown",
                        value: function (e) {
                          if (
                            this.previousKeydownCode &&
                            w.contains(this.keys, this.previousKeydownCode)
                          )
                            this.previousKeydownCode = e.keyCode;
                          else {
                            if (w.contains(this.keys, e.keyCode)) {
                              var t = this.context
                                .invoke("editor.createRange")
                                .getWordRange();
                              this.lastWord = t;
                            }
                            this.previousKeydownCode = e.keyCode;
                          }
                        },
                      },
                      {
                        key: "handleKeyup",
                        value: function (e) {
                          w.contains(this.keys, e.keyCode) && this.replace();
                        },
                      },
                    ]) && nt(t.prototype, n),
                    o && nt(t, o),
                    e
                  );
                })();
                function it(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var rt = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$editingArea = t.layoutInfo.editingArea),
                      (this.options = t.options),
                      !0 === this.options.inheritPlaceholder &&
                        (this.options.placeholder =
                          this.context.$note.attr("placeholder") ||
                          this.options.placeholder),
                      (this.events = {
                        "summernote.init summernote.change": function () {
                          n.update();
                        },
                        "summernote.codeview.toggled": function () {
                          n.update();
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !!this.options.placeholder;
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          (this.$placeholder = i()(
                            '<div class="note-placeholder">'
                          )),
                            this.$placeholder
                              .on("click", function () {
                                e.context.invoke("focus");
                              })
                              .php(this.options.placeholder)
                              .prependTo(this.$editingArea),
                            this.update();
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$placeholder.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          var e =
                            !this.context.invoke("codeview.isActivated") &&
                            this.context.invoke("editor.isEmpty");
                          this.$placeholder.toggle(e);
                        },
                      },
                    ]) && it(t.prototype, n),
                    o && it(t, o),
                    e
                  );
                })();
                function at(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var st = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.ui = i.a.summernote.ui),
                      (this.context = t),
                      (this.$toolbar = t.layoutInfo.toolbar),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo),
                      (this.invertedKeyMap = g.invertObject(
                        this.options.keyMap[v.isMac ? "mac" : "pc"]
                      ));
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "representShortcut",
                        value: function (e) {
                          var t = this.invertedKeyMap[e];
                          return this.options.shortcuts && t
                            ? (v.isMac &&
                                (t = t
                                  .replace("CMD", "⌘")
                                  .replace("SHIFT", "⇧")),
                              " (" +
                                (t = t
                                  .replace("BACKSLASH", "\\")
                                  .replace("SLASH", "/")
                                  .replace("LEFTBRACKET", "[")
                                  .replace("RIGHTBRACKET", "]")) +
                                ")")
                            : "";
                        },
                      },
                      {
                        key: "button",
                        value: function (e) {
                          return (
                            !this.options.tooltip &&
                              e.tooltip &&
                              delete e.tooltip,
                            (e.container = this.options.container),
                            this.ui.button(e)
                          );
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          this.addToolbarButtons(),
                            this.addImagePopoverButtons(),
                            this.addLinkPopoverButtons(),
                            this.addTablePopoverButtons(),
                            (this.fontInstalledMap = {});
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          delete this.fontInstalledMap;
                        },
                      },
                      {
                        key: "isFontInstalled",
                        value: function (e) {
                          return (
                            Object.prototype.hasOwnProperty.call(
                              this.fontInstalledMap,
                              e
                            ) ||
                              (this.fontInstalledMap[e] =
                                v.isFontInstalled(e) ||
                                w.contains(
                                  this.options.fontNamesIgnoreCheck,
                                  e
                                )),
                            this.fontInstalledMap[e]
                          );
                        },
                      },
                      {
                        key: "isFontDeservedToAdd",
                        value: function (e) {
                          return (
                            "" !== (e = e.toLowerCase()) &&
                            this.isFontInstalled(e) &&
                            -1 === v.genericFontFamilies.indexOf(e)
                          );
                        },
                      },
                      {
                        key: "colorPalette",
                        value: function (e, t, n, o) {
                          var r = this;
                          return this.ui
                            .buttonGroup({
                              className: "note-color " + e,
                              children: [
                                this.button({
                                  className: "note-current-color-button",
                                  contents: this.ui.icon(
                                    this.options.icons.font +
                                      " note-recent-color"
                                  ),
                                  tooltip: t,
                                  click: function (e) {
                                    var t = i()(e.currentTarget);
                                    n && o
                                      ? r.context.invoke("editor.color", {
                                          backColor: t.attr("data-backColor"),
                                          foreColor: t.attr("data-foreColor"),
                                        })
                                      : n
                                      ? r.context.invoke("editor.color", {
                                          backColor: t.attr("data-backColor"),
                                        })
                                      : o &&
                                        r.context.invoke("editor.color", {
                                          foreColor: t.attr("data-foreColor"),
                                        });
                                  },
                                  callback: function (e) {
                                    var t = e.find(".note-recent-color");
                                    n &&
                                      (t.css(
                                        "background-color",
                                        r.options.colorButton.backColor
                                      ),
                                      e.attr(
                                        "data-backColor",
                                        r.options.colorButton.backColor
                                      )),
                                      o
                                        ? (t.css(
                                            "color",
                                            r.options.colorButton.foreColor
                                          ),
                                          e.attr(
                                            "data-foreColor",
                                            r.options.colorButton.foreColor
                                          ))
                                        : t.css("color", "transparent");
                                  },
                                }),
                                this.button({
                                  className: "dropdown-toggle",
                                  contents: this.ui.dropdownButtonContents(
                                    "",
                                    this.options
                                  ),
                                  tooltip: this.lang.color.more,
                                  data: { toggle: "dropdown" },
                                }),
                                this.ui.dropdown({
                                  items:
                                    (n
                                      ? [
                                          '<div class="note-palette">',
                                          '<div class="note-palette-title">' +
                                            this.lang.color.background +
                                            "</div>",
                                          "<div>",
                                          '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',
                                          this.lang.color.transparent,
                                          "</button>",
                                          "</div>",
                                          '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',
                                          "<div>",
                                          '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker">',
                                          this.lang.color.cpSelect,
                                          "</button>",
                                          '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' +
                                            this.options.colorButton.backColor +
                                            '" data-event="backColorPalette">',
                                          "</div>",
                                          '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"></div>',
                                          "</div>",
                                        ].join("")
                                      : "") +
                                    (o
                                      ? [
                                          '<div class="note-palette">',
                                          '<div class="note-palette-title">' +
                                            this.lang.color.foreground +
                                            "</div>",
                                          "<div>",
                                          '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',
                                          this.lang.color.resetToDefault,
                                          "</button>",
                                          "</div>",
                                          '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',
                                          "<div>",
                                          '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker">',
                                          this.lang.color.cpSelect,
                                          "</button>",
                                          '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' +
                                            this.options.colorButton.foreColor +
                                            '" data-event="foreColorPalette">',
                                          "</div>",
                                          '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"></div>',
                                          "</div>",
                                        ].join("")
                                      : ""),
                                  callback: function (e) {
                                    e.find(".note-holder").each(function (
                                      e,
                                      t
                                    ) {
                                      var n = i()(t);
                                      n.append(
                                        r.ui
                                          .palette({
                                            colors: r.options.colors,
                                            colorsName: r.options.colorsName,
                                            eventName: n.data("event"),
                                            container: r.options.container,
                                            tooltip: r.options.tooltip,
                                          })
                                          .render()
                                      );
                                    });
                                    var t = [
                                      [
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                        "#FFFFFF",
                                      ],
                                    ];
                                    e
                                      .find(".note-holder-custom")
                                      .each(function (e, n) {
                                        var o = i()(n);
                                        o.append(
                                          r.ui
                                            .palette({
                                              colors: t,
                                              colorsName: t,
                                              eventName: o.data("event"),
                                              container: r.options.container,
                                              tooltip: r.options.tooltip,
                                            })
                                            .render()
                                        );
                                      }),
                                      e
                                        .find("input[type=color]")
                                        .each(function (t, n) {
                                          i()(n).change(function () {
                                            var t = e
                                                .find(
                                                  "#" + i()(this).data("event")
                                                )
                                                .find(".note-color-btn")
                                                .first(),
                                              n = this.value.toUpperCase();
                                            t
                                              .css("background-color", n)
                                              .attr("aria-label", n)
                                              .attr("data-value", n)
                                              .attr("data-original-title", n),
                                              t.click();
                                          });
                                        });
                                  },
                                  click: function (t) {
                                    t.stopPropagation();
                                    var n = i()("." + e).find(
                                        ".note-dropdown-menu"
                                      ),
                                      o = i()(t.target),
                                      a = o.data("event"),
                                      s = o.attr("data-value");
                                    if ("openPalette" === a) {
                                      var l = n.find("#" + s),
                                        c = i()(
                                          n
                                            .find("#" + l.data("event"))
                                            .find(".note-color-row")[0]
                                        ),
                                        u = c
                                          .find(".note-color-btn")
                                          .last()
                                          .detach(),
                                        d = l.val();
                                      u
                                        .css("background-color", d)
                                        .attr("aria-label", d)
                                        .attr("data-value", d)
                                        .attr("data-original-title", d),
                                        c.prepend(u),
                                        l.click();
                                    } else {
                                      if (
                                        w.contains(
                                          ["backColor", "foreColor"],
                                          a
                                        )
                                      ) {
                                        var f =
                                            "backColor" === a
                                              ? "background-color"
                                              : "color",
                                          h = o
                                            .closest(".note-color")
                                            .find(".note-recent-color"),
                                          p = o
                                            .closest(".note-color")
                                            .find(".note-current-color-button");
                                        h.css(f, s), p.attr("data-" + a, s);
                                      }
                                      r.context.invoke("editor." + a, s);
                                    }
                                  },
                                }),
                              ],
                            })
                            .render();
                        },
                      },
                      {
                        key: "addToolbarButtons",
                        value: function () {
                          var e = this;
                          this.context.memo("button.style", function () {
                            return e.ui
                              .buttonGroup([
                                e.button({
                                  className: "dropdown-toggle",
                                  contents: e.ui.dropdownButtonContents(
                                    e.ui.icon(e.options.icons.magic),
                                    e.options
                                  ),
                                  tooltip: e.lang.style.style,
                                  data: { toggle: "dropdown" },
                                }),
                                e.ui.dropdown({
                                  className: "dropdown-style",
                                  items: e.options.styleTags,
                                  title: e.lang.style.style,
                                  template: function (t) {
                                    "string" == typeof t &&
                                      (t = {
                                        tag: t,
                                        title:
                                          Object.prototype.hasOwnProperty.call(
                                            e.lang.style,
                                            t
                                          )
                                            ? e.lang.style[t]
                                            : t,
                                      });
                                    var n = t.tag,
                                      o = t.title;
                                    return (
                                      "<" +
                                      n +
                                      (t.style
                                        ? ' style="' + t.style + '" '
                                        : "") +
                                      (t.className
                                        ? ' class="' + t.className + '"'
                                        : "") +
                                      ">" +
                                      o +
                                      "</" +
                                      n +
                                      ">"
                                    );
                                  },
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.formatBlock"
                                    ),
                                }),
                              ])
                              .render();
                          });
                          for (
                            var t = function (t, n) {
                                var o = e.options.styleTags[t];
                                e.context.memo(
                                  "button.style." + o,
                                  function () {
                                    return e
                                      .button({
                                        className: "note-btn-style-" + o,
                                        contents:
                                          '<div data-value="' +
                                          o +
                                          '">' +
                                          o.toUpperCase() +
                                          "</div>",
                                        tooltip: e.lang.style[o],
                                        click:
                                          e.context.createInvokeHandler(
                                            "editor.formatBlock"
                                          ),
                                      })
                                      .render();
                                  }
                                );
                              },
                              n = 0,
                              o = this.options.styleTags.length;
                            n < o;
                            n++
                          )
                            t(n);
                          this.context.memo("button.bold", function () {
                            return e
                              .button({
                                className: "note-btn-bold",
                                contents: e.ui.icon(e.options.icons.bold),
                                tooltip:
                                  e.lang.font.bold +
                                  e.representShortcut("bold"),
                                click:
                                  e.context.createInvokeHandlerAndUpdateState(
                                    "editor.bold"
                                  ),
                              })
                              .render();
                          }),
                            this.context.memo("button.italic", function () {
                              return e
                                .button({
                                  className: "note-btn-italic",
                                  contents: e.ui.icon(e.options.icons.italic),
                                  tooltip:
                                    e.lang.font.italic +
                                    e.representShortcut("italic"),
                                  click:
                                    e.context.createInvokeHandlerAndUpdateState(
                                      "editor.italic"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.underline", function () {
                              return e
                                .button({
                                  className: "note-btn-underline",
                                  contents: e.ui.icon(
                                    e.options.icons.underline
                                  ),
                                  tooltip:
                                    e.lang.font.underline +
                                    e.representShortcut("underline"),
                                  click:
                                    e.context.createInvokeHandlerAndUpdateState(
                                      "editor.underline"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.clear", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.eraser),
                                  tooltip:
                                    e.lang.font.clear +
                                    e.representShortcut("removeFormat"),
                                  click: e.context.createInvokeHandler(
                                    "editor.removeFormat"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo(
                              "button.strikethrough",
                              function () {
                                return e
                                  .button({
                                    className: "note-btn-strikethrough",
                                    contents: e.ui.icon(
                                      e.options.icons.strikethrough
                                    ),
                                    tooltip:
                                      e.lang.font.strikethrough +
                                      e.representShortcut("strikethrough"),
                                    click:
                                      e.context.createInvokeHandlerAndUpdateState(
                                        "editor.strikethrough"
                                      ),
                                  })
                                  .render();
                              }
                            ),
                            this.context.memo(
                              "button.superscript",
                              function () {
                                return e
                                  .button({
                                    className: "note-btn-superscript",
                                    contents: e.ui.icon(
                                      e.options.icons.superscript
                                    ),
                                    tooltip: e.lang.font.superscript,
                                    click:
                                      e.context.createInvokeHandlerAndUpdateState(
                                        "editor.superscript"
                                      ),
                                  })
                                  .render();
                              }
                            ),
                            this.context.memo("button.subscript", function () {
                              return e
                                .button({
                                  className: "note-btn-subscript",
                                  contents: e.ui.icon(
                                    e.options.icons.subscript
                                  ),
                                  tooltip: e.lang.font.subscript,
                                  click:
                                    e.context.createInvokeHandlerAndUpdateState(
                                      "editor.subscript"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.fontname", function () {
                              var t = e.context.invoke("editor.currentStyle");
                              return (
                                e.options.addDefaultFonts &&
                                  i.a.each(
                                    t["font-family"].split(","),
                                    function (t, n) {
                                      (n = n.trim().replace(/['"]+/g, "")),
                                        e.isFontDeservedToAdd(n) &&
                                          -1 ===
                                            e.options.fontNames.indexOf(n) &&
                                          e.options.fontNames.push(n);
                                    }
                                  ),
                                e.ui
                                  .buttonGroup([
                                    e.button({
                                      className: "dropdown-toggle",
                                      contents: e.ui.dropdownButtonContents(
                                        '<span class="note-current-fontname"></span>',
                                        e.options
                                      ),
                                      tooltip: e.lang.font.name,
                                      data: { toggle: "dropdown" },
                                    }),
                                    e.ui.dropdownCheck({
                                      className: "dropdown-fontname",
                                      checkClassName: e.options.icons.menuCheck,
                                      items: e.options.fontNames.filter(
                                        e.isFontInstalled.bind(e)
                                      ),
                                      title: e.lang.font.name,
                                      template: function (e) {
                                        return (
                                          '<span style="font-family: ' +
                                          v.validFontName(e) +
                                          '">' +
                                          e +
                                          "</span>"
                                        );
                                      },
                                      click:
                                        e.context.createInvokeHandlerAndUpdateState(
                                          "editor.fontName"
                                        ),
                                    }),
                                  ])
                                  .render()
                              );
                            }),
                            this.context.memo("button.fontsize", function () {
                              return e.ui
                                .buttonGroup([
                                  e.button({
                                    className: "dropdown-toggle",
                                    contents: e.ui.dropdownButtonContents(
                                      '<span class="note-current-fontsize"></span>',
                                      e.options
                                    ),
                                    tooltip: e.lang.font.size,
                                    data: { toggle: "dropdown" },
                                  }),
                                  e.ui.dropdownCheck({
                                    className: "dropdown-fontsize",
                                    checkClassName: e.options.icons.menuCheck,
                                    items: e.options.fontSizes,
                                    title: e.lang.font.size,
                                    click:
                                      e.context.createInvokeHandlerAndUpdateState(
                                        "editor.fontSize"
                                      ),
                                  }),
                                ])
                                .render();
                            }),
                            this.context.memo(
                              "button.fontsizeunit",
                              function () {
                                return e.ui
                                  .buttonGroup([
                                    e.button({
                                      className: "dropdown-toggle",
                                      contents: e.ui.dropdownButtonContents(
                                        '<span class="note-current-fontsizeunit"></span>',
                                        e.options
                                      ),
                                      tooltip: e.lang.font.sizeunit,
                                      data: { toggle: "dropdown" },
                                    }),
                                    e.ui.dropdownCheck({
                                      className: "dropdown-fontsizeunit",
                                      checkClassName: e.options.icons.menuCheck,
                                      items: e.options.fontSizeUnits,
                                      title: e.lang.font.sizeunit,
                                      click:
                                        e.context.createInvokeHandlerAndUpdateState(
                                          "editor.fontSizeUnit"
                                        ),
                                    }),
                                  ])
                                  .render();
                              }
                            ),
                            this.context.memo("button.color", function () {
                              return e.colorPalette(
                                "note-color-all",
                                e.lang.color.recent,
                                !0,
                                !0
                              );
                            }),
                            this.context.memo("button.forecolor", function () {
                              return e.colorPalette(
                                "note-color-fore",
                                e.lang.color.foreground,
                                !1,
                                !0
                              );
                            }),
                            this.context.memo("button.backcolor", function () {
                              return e.colorPalette(
                                "note-color-back",
                                e.lang.color.background,
                                !0,
                                !1
                              );
                            }),
                            this.context.memo("button.ul", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(
                                    e.options.icons.unorderedlist
                                  ),
                                  tooltip:
                                    e.lang.lists.unordered +
                                    e.representShortcut("insertUnorderedList"),
                                  click: e.context.createInvokeHandler(
                                    "editor.insertUnorderedList"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.ol", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(
                                    e.options.icons.orderedlist
                                  ),
                                  tooltip:
                                    e.lang.lists.ordered +
                                    e.representShortcut("insertOrderedList"),
                                  click: e.context.createInvokeHandler(
                                    "editor.insertOrderedList"
                                  ),
                                })
                                .render();
                            });
                          var r = this.button({
                              contents: this.ui.icon(
                                this.options.icons.alignLeft
                              ),
                              tooltip:
                                this.lang.paragraph.left +
                                this.representShortcut("justifyLeft"),
                              click:
                                this.context.createInvokeHandler(
                                  "editor.justifyLeft"
                                ),
                            }),
                            a = this.button({
                              contents: this.ui.icon(
                                this.options.icons.alignCenter
                              ),
                              tooltip:
                                this.lang.paragraph.center +
                                this.representShortcut("justifyCenter"),
                              click: this.context.createInvokeHandler(
                                "editor.justifyCenter"
                              ),
                            }),
                            s = this.button({
                              contents: this.ui.icon(
                                this.options.icons.alignRight
                              ),
                              tooltip:
                                this.lang.paragraph.right +
                                this.representShortcut("justifyRight"),
                              click: this.context.createInvokeHandler(
                                "editor.justifyRight"
                              ),
                            }),
                            l = this.button({
                              contents: this.ui.icon(
                                this.options.icons.alignJustify
                              ),
                              tooltip:
                                this.lang.paragraph.justify +
                                this.representShortcut("justifyFull"),
                              click:
                                this.context.createInvokeHandler(
                                  "editor.justifyFull"
                                ),
                            }),
                            c = this.button({
                              contents: this.ui.icon(
                                this.options.icons.outdent
                              ),
                              tooltip:
                                this.lang.paragraph.outdent +
                                this.representShortcut("outdent"),
                              click:
                                this.context.createInvokeHandler(
                                  "editor.outdent"
                                ),
                            }),
                            u = this.button({
                              contents: this.ui.icon(this.options.icons.indent),
                              tooltip:
                                this.lang.paragraph.indent +
                                this.representShortcut("indent"),
                              click:
                                this.context.createInvokeHandler(
                                  "editor.indent"
                                ),
                            });
                          this.context.memo(
                            "button.justifyLeft",
                            g.invoke(r, "render")
                          ),
                            this.context.memo(
                              "button.justifyCenter",
                              g.invoke(a, "render")
                            ),
                            this.context.memo(
                              "button.justifyRight",
                              g.invoke(s, "render")
                            ),
                            this.context.memo(
                              "button.justifyFull",
                              g.invoke(l, "render")
                            ),
                            this.context.memo(
                              "button.outdent",
                              g.invoke(c, "render")
                            ),
                            this.context.memo(
                              "button.indent",
                              g.invoke(u, "render")
                            ),
                            this.context.memo("button.paragraph", function () {
                              return e.ui
                                .buttonGroup([
                                  e.button({
                                    className: "dropdown-toggle",
                                    contents: e.ui.dropdownButtonContents(
                                      e.ui.icon(e.options.icons.alignLeft),
                                      e.options
                                    ),
                                    tooltip: e.lang.paragraph.paragraph,
                                    data: { toggle: "dropdown" },
                                  }),
                                  e.ui.dropdown([
                                    e.ui.buttonGroup({
                                      className: "note-align",
                                      children: [r, a, s, l],
                                    }),
                                    e.ui.buttonGroup({
                                      className: "note-list",
                                      children: [c, u],
                                    }),
                                  ]),
                                ])
                                .render();
                            }),
                            this.context.memo("button.height", function () {
                              return e.ui
                                .buttonGroup([
                                  e.button({
                                    className: "dropdown-toggle",
                                    contents: e.ui.dropdownButtonContents(
                                      e.ui.icon(e.options.icons.textHeight),
                                      e.options
                                    ),
                                    tooltip: e.lang.font.height,
                                    data: { toggle: "dropdown" },
                                  }),
                                  e.ui.dropdownCheck({
                                    items: e.options.lineHeights,
                                    checkClassName: e.options.icons.menuCheck,
                                    className: "dropdown-line-height",
                                    title: e.lang.font.height,
                                    click:
                                      e.context.createInvokeHandler(
                                        "editor.lineHeight"
                                      ),
                                  }),
                                ])
                                .render();
                            }),
                            this.context.memo("button.table", function () {
                              return e.ui
                                .buttonGroup(
                                  [
                                    e.button({
                                      className: "dropdown-toggle",
                                      contents: e.ui.dropdownButtonContents(
                                        e.ui.icon(e.options.icons.table),
                                        e.options
                                      ),
                                      tooltip: e.lang.table.table,
                                      data: { toggle: "dropdown" },
                                    }),
                                    e.ui.dropdown({
                                      title: e.lang.table.table,
                                      className: "note-table",
                                      items: [
                                        '<div class="note-dimension-picker">',
                                        '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                                        '<div class="note-dimension-picker-highlighted"></div>',
                                        '<div class="note-dimension-picker-unhighlighted"></div>',
                                        "</div>",
                                        '<div class="note-dimension-display">1 x 1</div>',
                                      ].join(""),
                                    }),
                                  ],
                                  {
                                    callback: function (t) {
                                      t.find(
                                        ".note-dimension-picker-mousecatcher"
                                      )
                                        .css({
                                          width:
                                            e.options.insertTableMaxSize.col +
                                            "em",
                                          height:
                                            e.options.insertTableMaxSize.row +
                                            "em",
                                        })
                                        .mousedown(
                                          e.context.createInvokeHandler(
                                            "editor.insertTable"
                                          )
                                        )
                                        .on(
                                          "mousemove",
                                          e.tableMoveHandler.bind(e)
                                        );
                                    },
                                  }
                                )
                                .render();
                            }),
                            this.context.memo("button.link", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.link),
                                  tooltip:
                                    e.lang.link.link +
                                    e.representShortcut("linkDialog.show"),
                                  click:
                                    e.context.createInvokeHandler(
                                      "linkDialog.show"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.picture", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.picture),
                                  tooltip: e.lang.image.image,
                                  click:
                                    e.context.createInvokeHandler(
                                      "imageDialog.show"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.video", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.video),
                                  tooltip: e.lang.video.video,
                                  click:
                                    e.context.createInvokeHandler(
                                      "videoDialog.show"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.hr", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.minus),
                                  tooltip:
                                    e.lang.hr.insert +
                                    e.representShortcut("insertHorizontalRule"),
                                  click: e.context.createInvokeHandler(
                                    "editor.insertHorizontalRule"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.fullscreen", function () {
                              return e
                                .button({
                                  className:
                                    "btn-fullscreen note-codeview-keep",
                                  contents: e.ui.icon(
                                    e.options.icons.arrowsAlt
                                  ),
                                  tooltip: e.lang.options.fullscreen,
                                  click:
                                    e.context.createInvokeHandler(
                                      "fullscreen.toggle"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.codeview", function () {
                              return e
                                .button({
                                  className: "btn-codeview note-codeview-keep",
                                  contents: e.ui.icon(e.options.icons.code),
                                  tooltip: e.lang.options.codeview,
                                  click:
                                    e.context.createInvokeHandler(
                                      "codeview.toggle"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.redo", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.redo),
                                  tooltip:
                                    e.lang.history.redo +
                                    e.representShortcut("redo"),
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.redo"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.undo", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.undo),
                                  tooltip:
                                    e.lang.history.undo +
                                    e.representShortcut("undo"),
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.undo"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.help", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.question),
                                  tooltip: e.lang.options.help,
                                  click:
                                    e.context.createInvokeHandler(
                                      "helpDialog.show"
                                    ),
                                })
                                .render();
                            });
                        },
                      },
                      {
                        key: "addImagePopoverButtons",
                        value: function () {
                          var e = this;
                          this.context.memo("button.resizeFull", function () {
                            return e
                              .button({
                                contents:
                                  '<span class="note-fontsize-10">100%</span>',
                                tooltip: e.lang.image.resizeFull,
                                click: e.context.createInvokeHandler(
                                  "editor.resize",
                                  "1"
                                ),
                              })
                              .render();
                          }),
                            this.context.memo("button.resizeHalf", function () {
                              return e
                                .button({
                                  contents:
                                    '<span class="note-fontsize-10">50%</span>',
                                  tooltip: e.lang.image.resizeHalf,
                                  click: e.context.createInvokeHandler(
                                    "editor.resize",
                                    "0.5"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo(
                              "button.resizeQuarter",
                              function () {
                                return e
                                  .button({
                                    contents:
                                      '<span class="note-fontsize-10">25%</span>',
                                    tooltip: e.lang.image.resizeQuarter,
                                    click: e.context.createInvokeHandler(
                                      "editor.resize",
                                      "0.25"
                                    ),
                                  })
                                  .render();
                              }
                            ),
                            this.context.memo("button.resizeNone", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.rollback),
                                  tooltip: e.lang.image.resizeNone,
                                  click: e.context.createInvokeHandler(
                                    "editor.resize",
                                    "0"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.floatLeft", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(
                                    e.options.icons.floatLeft
                                  ),
                                  tooltip: e.lang.image.floatLeft,
                                  click: e.context.createInvokeHandler(
                                    "editor.floatMe",
                                    "left"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.floatRight", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(
                                    e.options.icons.floatRight
                                  ),
                                  tooltip: e.lang.image.floatRight,
                                  click: e.context.createInvokeHandler(
                                    "editor.floatMe",
                                    "right"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.floatNone", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.rollback),
                                  tooltip: e.lang.image.floatNone,
                                  click: e.context.createInvokeHandler(
                                    "editor.floatMe",
                                    "none"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo(
                              "button.removeMedia",
                              function () {
                                return e
                                  .button({
                                    contents: e.ui.icon(e.options.icons.trash),
                                    tooltip: e.lang.image.remove,
                                    click:
                                      e.context.createInvokeHandler(
                                        "editor.removeMedia"
                                      ),
                                  })
                                  .render();
                              }
                            );
                        },
                      },
                      {
                        key: "addLinkPopoverButtons",
                        value: function () {
                          var e = this;
                          this.context.memo(
                            "button.linkDialogShow",
                            function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.link),
                                  tooltip: e.lang.link.edit,
                                  click:
                                    e.context.createInvokeHandler(
                                      "linkDialog.show"
                                    ),
                                })
                                .render();
                            }
                          ),
                            this.context.memo("button.unlink", function () {
                              return e
                                .button({
                                  contents: e.ui.icon(e.options.icons.unlink),
                                  tooltip: e.lang.link.unlink,
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.unlink"
                                    ),
                                })
                                .render();
                            });
                        },
                      },
                      {
                        key: "addTablePopoverButtons",
                        value: function () {
                          var e = this;
                          this.context.memo("button.addRowUp", function () {
                            return e
                              .button({
                                className: "btn-md",
                                contents: e.ui.icon(e.options.icons.rowAbove),
                                tooltip: e.lang.table.addRowAbove,
                                click: e.context.createInvokeHandler(
                                  "editor.addRow",
                                  "top"
                                ),
                              })
                              .render();
                          }),
                            this.context.memo("button.addRowDown", function () {
                              return e
                                .button({
                                  className: "btn-md",
                                  contents: e.ui.icon(e.options.icons.rowBelow),
                                  tooltip: e.lang.table.addRowBelow,
                                  click: e.context.createInvokeHandler(
                                    "editor.addRow",
                                    "bottom"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo("button.addColLeft", function () {
                              return e
                                .button({
                                  className: "btn-md",
                                  contents: e.ui.icon(
                                    e.options.icons.colBefore
                                  ),
                                  tooltip: e.lang.table.addColLeft,
                                  click: e.context.createInvokeHandler(
                                    "editor.addCol",
                                    "left"
                                  ),
                                })
                                .render();
                            }),
                            this.context.memo(
                              "button.addColRight",
                              function () {
                                return e
                                  .button({
                                    className: "btn-md",
                                    contents: e.ui.icon(
                                      e.options.icons.colAfter
                                    ),
                                    tooltip: e.lang.table.addColRight,
                                    click: e.context.createInvokeHandler(
                                      "editor.addCol",
                                      "right"
                                    ),
                                  })
                                  .render();
                              }
                            ),
                            this.context.memo("button.deleteRow", function () {
                              return e
                                .button({
                                  className: "btn-md",
                                  contents: e.ui.icon(
                                    e.options.icons.rowRemove
                                  ),
                                  tooltip: e.lang.table.delRow,
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.deleteRow"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo("button.deleteCol", function () {
                              return e
                                .button({
                                  className: "btn-md",
                                  contents: e.ui.icon(
                                    e.options.icons.colRemove
                                  ),
                                  tooltip: e.lang.table.delCol,
                                  click:
                                    e.context.createInvokeHandler(
                                      "editor.deleteCol"
                                    ),
                                })
                                .render();
                            }),
                            this.context.memo(
                              "button.deleteTable",
                              function () {
                                return e
                                  .button({
                                    className: "btn-md",
                                    contents: e.ui.icon(e.options.icons.trash),
                                    tooltip: e.lang.table.delTable,
                                    click:
                                      e.context.createInvokeHandler(
                                        "editor.deleteTable"
                                      ),
                                  })
                                  .render();
                              }
                            );
                        },
                      },
                      {
                        key: "build",
                        value: function (e, t) {
                          for (var n = 0, o = t.length; n < o; n++) {
                            for (
                              var i = t[n],
                                r = Array.isArray(i) ? i[0] : i,
                                a = Array.isArray(i)
                                  ? 1 === i.length
                                    ? [i[0]]
                                    : i[1]
                                  : [i],
                                s = this.ui
                                  .buttonGroup({ className: "note-" + r })
                                  .render(),
                                l = 0,
                                c = a.length;
                              l < c;
                              l++
                            ) {
                              var u = this.context.memo("button." + a[l]);
                              u &&
                                s.append(
                                  "function" == typeof u ? u(this.context) : u
                                );
                            }
                            s.appendTo(e);
                          }
                        },
                      },
                      {
                        key: "updateCurrentStyle",
                        value: function (e) {
                          var t = this,
                            n = e || this.$toolbar,
                            o = this.context.invoke("editor.currentStyle");
                          if (
                            (this.updateBtnStates(n, {
                              ".note-btn-bold": function () {
                                return "bold" === o["font-bold"];
                              },
                              ".note-btn-italic": function () {
                                return "italic" === o["font-italic"];
                              },
                              ".note-btn-underline": function () {
                                return "underline" === o["font-underline"];
                              },
                              ".note-btn-subscript": function () {
                                return "subscript" === o["font-subscript"];
                              },
                              ".note-btn-superscript": function () {
                                return "superscript" === o["font-superscript"];
                              },
                              ".note-btn-strikethrough": function () {
                                return (
                                  "strikethrough" === o["font-strikethrough"]
                                );
                              },
                            }),
                            o["font-family"])
                          ) {
                            var r = o["font-family"]
                                .split(",")
                                .map(function (e) {
                                  return e
                                    .replace(/[\'\"]/g, "")
                                    .replace(/\s+$/, "")
                                    .replace(/^\s+/, "");
                                }),
                              a = w.find(r, this.isFontInstalled.bind(this));
                            n
                              .find(".dropdown-fontname a")
                              .each(function (e, t) {
                                var n = i()(t),
                                  o = n.data("value") + "" == a + "";
                                n.toggleClass("checked", o);
                              }),
                              n
                                .find(".note-current-fontname")
                                .text(a)
                                .css("font-family", a);
                          }
                          if (o["font-size"]) {
                            var s = o["font-size"];
                            n
                              .find(".dropdown-fontsize a")
                              .each(function (e, t) {
                                var n = i()(t),
                                  o = n.data("value") + "" == s + "";
                                n.toggleClass("checked", o);
                              }),
                              n.find(".note-current-fontsize").text(s);
                            var l = o["font-size-unit"];
                            n
                              .find(".dropdown-fontsizeunit a")
                              .each(function (e, t) {
                                var n = i()(t),
                                  o = n.data("value") + "" == l + "";
                                n.toggleClass("checked", o);
                              }),
                              n.find(".note-current-fontsizeunit").text(l);
                          }
                          if (o["line-height"]) {
                            var c = o["line-height"];
                            n.find(".dropdown-line-height li a").each(function (
                              e,
                              n
                            ) {
                              var o = i()(n).data("value") + "" == c + "";
                              t.className = o ? "checked" : "";
                            });
                          }
                        },
                      },
                      {
                        key: "updateBtnStates",
                        value: function (e, t) {
                          var n = this;
                          i.a.each(t, function (t, o) {
                            n.ui.toggleBtnActive(e.find(t), o());
                          });
                        },
                      },
                      {
                        key: "tableMoveHandler",
                        value: function (e) {
                          var t,
                            n = i()(e.target.parentNode),
                            o = n.next(),
                            r = n.find(".note-dimension-picker-mousecatcher"),
                            a = n.find(".note-dimension-picker-highlighted"),
                            s = n.find(".note-dimension-picker-unhighlighted");
                          if (void 0 === e.offsetX) {
                            var l = i()(e.target).offset();
                            t = { x: e.pageX - l.left, y: e.pageY - l.top };
                          } else t = { x: e.offsetX, y: e.offsetY };
                          var c = Math.ceil(t.x / 18) || 1,
                            u = Math.ceil(t.y / 18) || 1;
                          a.css({ width: c + "em", height: u + "em" }),
                            r.data("value", c + "x" + u),
                            c > 3 &&
                              c < this.options.insertTableMaxSize.col &&
                              s.css({ width: c + 1 + "em" }),
                            u > 3 &&
                              u < this.options.insertTableMaxSize.row &&
                              s.css({ height: u + 1 + "em" }),
                            o.php(c + " x " + u);
                        },
                      },
                    ]) && at(t.prototype, n),
                    o && at(t, o),
                    e
                  );
                })();
                function lt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var ct = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.$window = i()(window)),
                      (this.$document = i()(document)),
                      (this.ui = i.a.summernote.ui),
                      (this.$note = t.layoutInfo.note),
                      (this.$editor = t.layoutInfo.editor),
                      (this.$toolbar = t.layoutInfo.toolbar),
                      (this.$editable = t.layoutInfo.editable),
                      (this.$statusbar = t.layoutInfo.statusbar),
                      (this.options = t.options),
                      (this.isFollowing = !1),
                      (this.followScroll = this.followScroll.bind(this));
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !this.options.airMode;
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          (this.options.toolbar = this.options.toolbar || []),
                            this.options.toolbar.length
                              ? this.context.invoke(
                                  "buttons.build",
                                  this.$toolbar,
                                  this.options.toolbar
                                )
                              : this.$toolbar.hide(),
                            this.options.toolbarContainer &&
                              this.$toolbar.appendTo(
                                this.options.toolbarContainer
                              ),
                            this.changeContainer(!1),
                            this.$note.on(
                              "summernote.keyup summernote.mouseup summernote.change",
                              function () {
                                e.context.invoke("buttons.updateCurrentStyle");
                              }
                            ),
                            this.context.invoke("buttons.updateCurrentStyle"),
                            this.options.followingToolbar &&
                              this.$window.on(
                                "scroll resize",
                                this.followScroll
                              );
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$toolbar.children().remove(),
                            this.options.followingToolbar &&
                              this.$window.off(
                                "scroll resize",
                                this.followScroll
                              );
                        },
                      },
                      {
                        key: "followScroll",
                        value: function () {
                          if (this.$editor.hasClass("fullscreen")) return !1;
                          var e = this.$editor.outerHeight(),
                            t = this.$editor.width(),
                            n = this.$toolbar.height(),
                            o = this.$statusbar.height(),
                            r = 0;
                          this.options.otherStaticBar &&
                            (r = i()(
                              this.options.otherStaticBar
                            ).outerHeight());
                          var a = this.$document.scrollTop(),
                            s = this.$editor.offset().top,
                            l = s - r,
                            c = s + e - r - n - o;
                          !this.isFollowing && a > l && a < c - n
                            ? ((this.isFollowing = !0),
                              this.$editable.css({
                                marginTop: this.$toolbar.outerHeight(),
                              }),
                              this.$toolbar.css({
                                position: "fixed",
                                top: r,
                                width: t,
                                zIndex: 1e3,
                              }))
                            : this.isFollowing &&
                              (a < l || a > c) &&
                              ((this.isFollowing = !1),
                              this.$toolbar.css({
                                position: "relative",
                                top: 0,
                                width: "100%",
                                zIndex: "auto",
                              }),
                              this.$editable.css({ marginTop: "" }));
                        },
                      },
                      {
                        key: "changeContainer",
                        value: function (e) {
                          e
                            ? this.$toolbar.prependTo(this.$editor)
                            : this.options.toolbarContainer &&
                              this.$toolbar.appendTo(
                                this.options.toolbarContainer
                              ),
                            this.options.followingToolbar &&
                              this.followScroll();
                        },
                      },
                      {
                        key: "updateFullscreen",
                        value: function (e) {
                          this.ui.toggleBtnActive(
                            this.$toolbar.find(".btn-fullscreen"),
                            e
                          ),
                            this.changeContainer(e);
                        },
                      },
                      {
                        key: "updateCodeview",
                        value: function (e) {
                          this.ui.toggleBtnActive(
                            this.$toolbar.find(".btn-codeview"),
                            e
                          ),
                            e ? this.deactivate() : this.activate();
                        },
                      },
                      {
                        key: "activate",
                        value: function (e) {
                          var t = this.$toolbar.find("button");
                          e || (t = t.not(".note-codeview-keep")),
                            this.ui.toggleBtn(t, !0);
                        },
                      },
                      {
                        key: "deactivate",
                        value: function (e) {
                          var t = this.$toolbar.find("button");
                          e || (t = t.not(".note-codeview-keep")),
                            this.ui.toggleBtn(t, !1);
                        },
                      },
                    ]) && lt(t.prototype, n),
                    o && lt(t, o),
                    e
                  );
                })();
                function ut(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var dt = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.$body = i()(document.body)),
                      (this.$editor = t.layoutInfo.editor),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo),
                      t.memo(
                        "help.linkDialog.show",
                        this.options.langInfo.help["linkDialog.show"]
                      );
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this.options.dialogsInBody
                              ? this.$body
                              : this.options.container,
                            t = [
                              '<div class="form-group note-form-group">',
                              '<label for="note-dialog-link-txt-'
                                .concat(
                                  this.options.id,
                                  '" class="note-form-label">'
                                )
                                .concat(
                                  this.lang.link.textToDisplay,
                                  "</label>"
                                ),
                              '<input id="note-dialog-link-txt-'.concat(
                                this.options.id,
                                '" class="note-link-text form-control note-form-control note-input" type="text"/>'
                              ),
                              "</div>",
                              '<div class="form-group note-form-group">',
                              '<label for="note-dialog-link-url-'
                                .concat(
                                  this.options.id,
                                  '" class="note-form-label">'
                                )
                                .concat(this.lang.link.url, "</label>"),
                              '<input id="note-dialog-link-url-'.concat(
                                this.options.id,
                                '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'
                              ),
                              "</div>",
                              this.options.disableLinkTarget
                                ? ""
                                : i()("<div/>")
                                    .append(
                                      this.ui
                                        .checkbox({
                                          className:
                                            "sn-checkbox-open-in-new-window",
                                          text: this.lang.link.openInNewWindow,
                                          checked: !0,
                                        })
                                        .render()
                                    )
                                    .php(),
                              i()("<div/>")
                                .append(
                                  this.ui
                                    .checkbox({
                                      className: "sn-checkbox-use-protocol",
                                      text: this.lang.link.useProtocol,
                                      checked: !0,
                                    })
                                    .render()
                                )
                                .php(),
                            ].join(""),
                            n = '<input type="button" href="#" class="'
                              .concat(
                                "btn btn-primary note-btn note-btn-primary note-link-btn",
                                '" value="'
                              )
                              .concat(this.lang.link.insert, '" disabled>');
                          this.$dialog = this.ui
                            .dialog({
                              className: "link-dialog",
                              title: this.lang.link.insert,
                              fade: this.options.dialogsFade,
                              body: t,
                              footer: n,
                            })
                            .render()
                            .appendTo(e);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.ui.hideDialog(this.$dialog),
                            this.$dialog.remove();
                        },
                      },
                      {
                        key: "bindEnterKey",
                        value: function (e, t) {
                          e.on("keypress", function (e) {
                            e.keyCode === Ce.code.ENTER &&
                              (e.preventDefault(), t.trigger("click"));
                          });
                        },
                      },
                      {
                        key: "toggleLinkBtn",
                        value: function (e, t, n) {
                          this.ui.toggleBtn(e, t.val() && n.val());
                        },
                      },
                      {
                        key: "showLinkDialog",
                        value: function (e) {
                          var t = this;
                          return i.a
                            .Deferred(function (n) {
                              var o = t.$dialog.find(".note-link-text"),
                                i = t.$dialog.find(".note-link-url"),
                                r = t.$dialog.find(".note-link-btn"),
                                a = t.$dialog.find(
                                  ".sn-checkbox-open-in-new-window input[type=checkbox]"
                                ),
                                s = t.$dialog.find(
                                  ".sn-checkbox-use-protocol input[type=checkbox]"
                                );
                              t.ui.onDialogShown(t.$dialog, function () {
                                t.context.triggerEvent("dialog.shown"),
                                  !e.url &&
                                    g.isValidUrl(e.text) &&
                                    (e.url = e.text),
                                  o
                                    .on(
                                      "input paste propertychange",
                                      function () {
                                        (e.text = o.val()),
                                          t.toggleLinkBtn(r, o, i);
                                      }
                                    )
                                    .val(e.text),
                                  i
                                    .on(
                                      "input paste propertychange",
                                      function () {
                                        e.text || o.val(i.val()),
                                          t.toggleLinkBtn(r, o, i);
                                      }
                                    )
                                    .val(e.url),
                                  v.isSupportTouch || i.trigger("focus"),
                                  t.toggleLinkBtn(r, o, i),
                                  t.bindEnterKey(i, r),
                                  t.bindEnterKey(o, r);
                                var l =
                                  void 0 !== e.isNewWindow
                                    ? e.isNewWindow
                                    : t.context.options.linkTargetBlank;
                                a.prop("checked", l);
                                var c = !e.url && t.context.options.useProtocol;
                                s.prop("checked", c),
                                  r.one("click", function (r) {
                                    r.preventDefault(),
                                      n.resolve({
                                        range: e.range,
                                        url: i.val(),
                                        text: o.val(),
                                        isNewWindow: a.is(":checked"),
                                        checkProtocol: s.is(":checked"),
                                      }),
                                      t.ui.hideDialog(t.$dialog);
                                  });
                              }),
                                t.ui.onDialogHidden(t.$dialog, function () {
                                  o.off(),
                                    i.off(),
                                    r.off(),
                                    "pending" === n.state() && n.reject();
                                }),
                                t.ui.showDialog(t.$dialog);
                            })
                            .promise();
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          var e = this,
                            t = this.context.invoke("editor.getLinkInfo");
                          this.context.invoke("editor.saveRange"),
                            this.showLinkDialog(t)
                              .then(function (t) {
                                e.context.invoke("editor.restoreRange"),
                                  e.context.invoke("editor.createLink", t);
                              })
                              .fail(function () {
                                e.context.invoke("editor.restoreRange");
                              });
                        },
                      },
                    ]) && ut(t.prototype, n),
                    o && ut(t, o),
                    e
                  );
                })();
                function ft(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var ht = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.options = t.options),
                      (this.events = {
                        "summernote.keyup summernote.mouseup summernote.change summernote.scroll":
                          function () {
                            n.update();
                          },
                        "summernote.disable summernote.dialog.shown summernote.blur":
                          function () {
                            n.hide();
                          },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !w.isEmpty(this.options.popover.link);
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          this.$popover = this.ui
                            .popover({
                              className: "note-link-popover",
                              callback: function (e) {
                                e.find(
                                  ".popover-content,.note-popover-content"
                                ).prepend(
                                  '<span><a target="_blank"></a>&nbsp;</span>'
                                );
                              },
                            })
                            .render()
                            .appendTo(this.options.container);
                          var e = this.$popover.find(
                            ".popover-content,.note-popover-content"
                          );
                          this.context.invoke(
                            "buttons.build",
                            e,
                            this.options.popover.link
                          ),
                            this.$popover.on("mousedown", function (e) {
                              e.preventDefault();
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$popover.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          if (this.context.invoke("editor.hasFocus")) {
                            var e = this.context.invoke("editor.getLastRange");
                            if (e.isCollapsed() && e.isOnAnchor()) {
                              var t = pe.ancestor(e.sc, pe.isAnchor),
                                n = i()(t).attr("href");
                              this.$popover.find("a").attr("href", n).text(n);
                              var o = pe.posFromPlaceholder(t),
                                r = i()(this.options.container).offset();
                              (o.top -= r.top),
                                (o.left -= r.left),
                                this.$popover.css({
                                  display: "block",
                                  left: o.left,
                                  top: o.top,
                                });
                            } else this.hide();
                          } else this.hide();
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.$popover.hide();
                        },
                      },
                    ]) && ft(t.prototype, n),
                    o && ft(t, o),
                    e
                  );
                })();
                function pt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var vt = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.$body = i()(document.body)),
                      (this.$editor = t.layoutInfo.editor),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = "";
                          if (this.options.maximumImageFileSize) {
                            var t = Math.floor(
                                Math.log(this.options.maximumImageFileSize) /
                                  Math.log(1024)
                              ),
                              n =
                                1 *
                                  (
                                    this.options.maximumImageFileSize /
                                    Math.pow(1024, t)
                                  ).toFixed(2) +
                                " " +
                                " KMGTP"[t] +
                                "B";
                            e = "<small>".concat(
                              this.lang.image.maximumFileSize + " : " + n,
                              "</small>"
                            );
                          }
                          var o = this.options.dialogsInBody
                              ? this.$body
                              : this.options.container,
                            i = [
                              '<div class="form-group note-form-group note-group-select-from-files">',
                              '<label for="note-dialog-image-file-' +
                                this.options.id +
                                '" class="note-form-label">' +
                                this.lang.image.selectFromFiles +
                                "</label>",
                              '<input id="note-dialog-image-file-' +
                                this.options.id +
                                '" class="note-image-input form-control-file note-form-control note-input" ',
                              ' type="file" name="files" accept="image/*" multiple="multiple"/>',
                              e,
                              "</div>",
                              '<div class="form-group note-group-image-url">',
                              '<label for="note-dialog-image-url-' +
                                this.options.id +
                                '" class="note-form-label">' +
                                this.lang.image.url +
                                "</label>",
                              '<input id="note-dialog-image-url-' +
                                this.options.id +
                                '" class="note-image-url form-control note-form-control note-input" type="text"/>',
                              "</div>",
                            ].join(""),
                            r = '<input type="button" href="#" class="'
                              .concat(
                                "btn btn-primary note-btn note-btn-primary note-image-btn",
                                '" value="'
                              )
                              .concat(this.lang.image.insert, '" disabled>');
                          this.$dialog = this.ui
                            .dialog({
                              title: this.lang.image.insert,
                              fade: this.options.dialogsFade,
                              body: i,
                              footer: r,
                            })
                            .render()
                            .appendTo(o);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.ui.hideDialog(this.$dialog),
                            this.$dialog.remove();
                        },
                      },
                      {
                        key: "bindEnterKey",
                        value: function (e, t) {
                          e.on("keypress", function (e) {
                            e.keyCode === Ce.code.ENTER &&
                              (e.preventDefault(), t.trigger("click"));
                          });
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          var e = this;
                          this.context.invoke("editor.saveRange"),
                            this.showImageDialog()
                              .then(function (t) {
                                e.ui.hideDialog(e.$dialog),
                                  e.context.invoke("editor.restoreRange"),
                                  "string" == typeof t
                                    ? e.options.callbacks.onImageLinkInsert
                                      ? e.context.triggerEvent(
                                          "image.link.insert",
                                          t
                                        )
                                      : e.context.invoke(
                                          "editor.insertImage",
                                          t
                                        )
                                    : e.context.invoke(
                                        "editor.insertImagesOrCallback",
                                        t
                                      );
                              })
                              .fail(function () {
                                e.context.invoke("editor.restoreRange");
                              });
                        },
                      },
                      {
                        key: "showImageDialog",
                        value: function () {
                          var e = this;
                          return i.a.Deferred(function (t) {
                            var n = e.$dialog.find(".note-image-input"),
                              o = e.$dialog.find(".note-image-url"),
                              i = e.$dialog.find(".note-image-btn");
                            e.ui.onDialogShown(e.$dialog, function () {
                              e.context.triggerEvent("dialog.shown"),
                                n.replaceWith(
                                  n
                                    .clone()
                                    .on("change", function (e) {
                                      t.resolve(
                                        e.target.files || e.target.value
                                      );
                                    })
                                    .val("")
                                ),
                                o
                                  .on(
                                    "input paste propertychange",
                                    function () {
                                      e.ui.toggleBtn(i, o.val());
                                    }
                                  )
                                  .val(""),
                                v.isSupportTouch || o.trigger("focus"),
                                i.click(function (e) {
                                  e.preventDefault(), t.resolve(o.val());
                                }),
                                e.bindEnterKey(o, i);
                            }),
                              e.ui.onDialogHidden(e.$dialog, function () {
                                n.off(),
                                  o.off(),
                                  i.off(),
                                  "pending" === t.state() && t.reject();
                              }),
                              e.ui.showDialog(e.$dialog);
                          });
                        },
                      },
                    ]) && pt(t.prototype, n),
                    o && pt(t, o),
                    e
                  );
                })();
                function mt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var gt = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.editable = t.layoutInfo.editable[0]),
                      (this.options = t.options),
                      (this.events = {
                        "summernote.disable summernote.blur": function () {
                          n.hide();
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !w.isEmpty(this.options.popover.image);
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          this.$popover = this.ui
                            .popover({ className: "note-image-popover" })
                            .render()
                            .appendTo(this.options.container);
                          var e = this.$popover.find(
                            ".popover-content,.note-popover-content"
                          );
                          this.context.invoke(
                            "buttons.build",
                            e,
                            this.options.popover.image
                          ),
                            this.$popover.on("mousedown", function (e) {
                              e.preventDefault();
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$popover.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function (e, t) {
                          if (pe.isImg(e)) {
                            var n = i()(e).offset(),
                              o = i()(this.options.container).offset(),
                              r = {};
                            this.options.popatmouse
                              ? ((r.left = t.pageX - 20), (r.top = t.pageY))
                              : (r = n),
                              (r.top -= o.top),
                              (r.left -= o.left),
                              this.$popover.css({
                                display: "block",
                                left: r.left,
                                top: r.top,
                              });
                          } else this.hide();
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.$popover.hide();
                        },
                      },
                    ]) && mt(t.prototype, n),
                    o && mt(t, o),
                    e
                  );
                })();
                function bt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var yt = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.options = t.options),
                      (this.events = {
                        "summernote.mousedown": function (e, t) {
                          n.update(t.target);
                        },
                        "summernote.keyup summernote.scroll summernote.change":
                          function () {
                            n.update();
                          },
                        "summernote.disable summernote.blur": function () {
                          n.hide();
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return !w.isEmpty(this.options.popover.table);
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          this.$popover = this.ui
                            .popover({ className: "note-table-popover" })
                            .render()
                            .appendTo(this.options.container);
                          var e = this.$popover.find(
                            ".popover-content,.note-popover-content"
                          );
                          this.context.invoke(
                            "buttons.build",
                            e,
                            this.options.popover.table
                          ),
                            v.isFF &&
                              document.execCommand(
                                "enableInlineTableEditing",
                                !1,
                                !1
                              ),
                            this.$popover.on("mousedown", function (e) {
                              e.preventDefault();
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$popover.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function (e) {
                          if (this.context.isDisabled()) return !1;
                          var t = pe.isCell(e);
                          if (t) {
                            var n = pe.posFromPlaceholder(e),
                              o = i()(this.options.container).offset();
                            (n.top -= o.top),
                              (n.left -= o.left),
                              this.$popover.css({
                                display: "block",
                                left: n.left,
                                top: n.top,
                              });
                          } else this.hide();
                          return t;
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.$popover.hide();
                        },
                      },
                    ]) && bt(t.prototype, n),
                    o && bt(t, o),
                    e
                  );
                })();
                function kt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var xt = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.$body = i()(document.body)),
                      (this.$editor = t.layoutInfo.editor),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this.options.dialogsInBody
                              ? this.$body
                              : this.options.container,
                            t = [
                              '<div class="form-group note-form-group row-fluid">',
                              '<label for="note-dialog-video-url-'
                                .concat(
                                  this.options.id,
                                  '" class="note-form-label">'
                                )
                                .concat(
                                  this.lang.video.url,
                                  ' <small class="text-muted">'
                                )
                                .concat(
                                  this.lang.video.providers,
                                  "</small></label>"
                                ),
                              '<input id="note-dialog-video-url-'.concat(
                                this.options.id,
                                '" class="note-video-url form-control note-form-control note-input" type="text"/>'
                              ),
                              "</div>",
                            ].join(""),
                            n = '<input type="button" href="#" class="'
                              .concat(
                                "btn btn-primary note-btn note-btn-primary note-video-btn",
                                '" value="'
                              )
                              .concat(this.lang.video.insert, '" disabled>');
                          this.$dialog = this.ui
                            .dialog({
                              title: this.lang.video.insert,
                              fade: this.options.dialogsFade,
                              body: t,
                              footer: n,
                            })
                            .render()
                            .appendTo(e);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.ui.hideDialog(this.$dialog),
                            this.$dialog.remove();
                        },
                      },
                      {
                        key: "bindEnterKey",
                        value: function (e, t) {
                          e.on("keypress", function (e) {
                            e.keyCode === Ce.code.ENTER &&
                              (e.preventDefault(), t.trigger("click"));
                          });
                        },
                      },
                      {
                        key: "createVideoNode",
                        value: function (e) {
                          var t,
                            n = e.match(
                              /\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/
                            ),
                            o = e.match(
                              /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/
                            ),
                            r = e.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                            a = e.match(
                              /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/
                            ),
                            s = e.match(
                              /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/
                            ),
                            l = e.match(
                              /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.php/
                            ),
                            c = e.match(/\/\/v\.qq\.com.*?vid=(.+)/),
                            u = e.match(
                              /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.php\??.*/
                            ),
                            d = e.match(/^.+.(mp4|m4v)$/),
                            f = e.match(/^.+.(ogg|ogv)$/),
                            h = e.match(/^.+.(webm)$/),
                            p = e.match(
                              /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/
                            );
                          if (n && 11 === n[1].length) {
                            var v = n[1],
                              m = 0;
                            if (void 0 !== n[2]) {
                              var g = n[2].match(
                                /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/
                              );
                              if (g)
                                for (
                                  var b = [3600, 60, 1], y = 0, k = b.length;
                                  y < k;
                                  y++
                                )
                                  m +=
                                    void 0 !== g[y + 1]
                                      ? b[y] * parseInt(g[y + 1], 10)
                                      : 0;
                            }
                            t = i()("<iframe>")
                              .attr("frameborder", 0)
                              .attr(
                                "src",
                                "//www.youtube.com/embed/" +
                                  v +
                                  (m > 0 ? "?start=" + m : "")
                              )
                              .attr("width", "640")
                              .attr("height", "360");
                          } else if (o && o[0].length)
                            t = i()("<iframe>")
                              .attr("frameborder", 0)
                              .attr(
                                "src",
                                "https://instagram.com/p/" + o[1] + "/embed/"
                              )
                              .attr("width", "612")
                              .attr("height", "710")
                              .attr("scrolling", "no")
                              .attr("allowtransparency", "true");
                          else if (r && r[0].length)
                            t = i()("<iframe>")
                              .attr("frameborder", 0)
                              .attr("src", r[0] + "/embed/simple")
                              .attr("width", "600")
                              .attr("height", "600")
                              .attr("class", "vine-embed");
                          else if (a && a[3].length)
                            t = i()(
                              "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                            )
                              .attr("frameborder", 0)
                              .attr("src", "//player.vimeo.com/video/" + a[3])
                              .attr("width", "640")
                              .attr("height", "360");
                          else if (s && s[2].length)
                            t = i()("<iframe>")
                              .attr("frameborder", 0)
                              .attr(
                                "src",
                                "//www.dailymotion.com/embed/video/" + s[2]
                              )
                              .attr("width", "640")
                              .attr("height", "360");
                          else if (l && l[1].length)
                            t = i()(
                              "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                            )
                              .attr("frameborder", 0)
                              .attr("height", "498")
                              .attr("width", "510")
                              .attr("src", "//player.youku.com/embed/" + l[1]);
                          else if ((c && c[1].length) || (u && u[2].length)) {
                            var x = c && c[1].length ? c[1] : u[2];
                            t = i()(
                              "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                            )
                              .attr("frameborder", 0)
                              .attr("height", "310")
                              .attr("width", "500")
                              .attr(
                                "src",
                                "https://v.qq.com/txp/iframe/player.php?vid=" +
                                  x +
                                  "&amp;auto=0"
                              );
                          } else if (d || f || h)
                            t = i()("<video controls>")
                              .attr("src", e)
                              .attr("width", "640")
                              .attr("height", "360");
                          else {
                            if (!p || !p[0].length) return !1;
                            t = i()("<iframe>")
                              .attr("frameborder", 0)
                              .attr(
                                "src",
                                "https://www.facebook.com/plugins/video.php?href=" +
                                  encodeURIComponent(p[0]) +
                                  "&show_text=0&width=560"
                              )
                              .attr("width", "560")
                              .attr("height", "301")
                              .attr("scrolling", "no")
                              .attr("allowtransparency", "true");
                          }
                          return t.addClass("note-video-clip"), t[0];
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          var e = this,
                            t = this.context.invoke("editor.getSelectedText");
                          this.context.invoke("editor.saveRange"),
                            this.showVideoDialog(t)
                              .then(function (t) {
                                e.ui.hideDialog(e.$dialog),
                                  e.context.invoke("editor.restoreRange");
                                var n = e.createVideoNode(t);
                                n && e.context.invoke("editor.insertNode", n);
                              })
                              .fail(function () {
                                e.context.invoke("editor.restoreRange");
                              });
                        },
                      },
                      {
                        key: "showVideoDialog",
                        value: function () {
                          var e = this;
                          return i.a.Deferred(function (t) {
                            var n = e.$dialog.find(".note-video-url"),
                              o = e.$dialog.find(".note-video-btn");
                            e.ui.onDialogShown(e.$dialog, function () {
                              e.context.triggerEvent("dialog.shown"),
                                n.on("input paste propertychange", function () {
                                  e.ui.toggleBtn(o, n.val());
                                }),
                                v.isSupportTouch || n.trigger("focus"),
                                o.click(function (e) {
                                  e.preventDefault(), t.resolve(n.val());
                                }),
                                e.bindEnterKey(n, o);
                            }),
                              e.ui.onDialogHidden(e.$dialog, function () {
                                n.off(),
                                  o.off(),
                                  "pending" === t.state() && t.reject();
                              }),
                              e.ui.showDialog(e.$dialog);
                          });
                        },
                      },
                    ]) && kt(t.prototype, n),
                    o && kt(t, o),
                    e
                  );
                })();
                function wt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Ct = (function () {
                  function e(t) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.$body = i()(document.body)),
                      (this.$editor = t.layoutInfo.editor),
                      (this.options = t.options),
                      (this.lang = this.options.langInfo);
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this.options.dialogsInBody
                              ? this.$body
                              : this.options.container,
                            t = [
                              '<p class="text-center">',
                              '<a href="http://summernote.org/" target="_blank">Summernote 0.8.18</a> · ',
                              '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
                              '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
                              "</p>",
                            ].join("");
                          this.$dialog = this.ui
                            .dialog({
                              title: this.lang.options.help,
                              fade: this.options.dialogsFade,
                              body: this.createShortcutList(),
                              footer: t,
                              callback: function (e) {
                                e.find(".modal-body,.note-modal-body").css({
                                  "max-height": 300,
                                  overflow: "scroll",
                                });
                              },
                            })
                            .render()
                            .appendTo(e);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.ui.hideDialog(this.$dialog),
                            this.$dialog.remove();
                        },
                      },
                      {
                        key: "createShortcutList",
                        value: function () {
                          var e = this,
                            t = this.options.keyMap[v.isMac ? "mac" : "pc"];
                          return Object.keys(t)
                            .map(function (n) {
                              var o = t[n],
                                r = i()(
                                  '<div><div class="help-list-item"></div></div>'
                                );
                              return (
                                r
                                  .append(
                                    i()(
                                      "<label><kbd>" + n + "</kdb></label>"
                                    ).css({ width: 180, "margin-right": 10 })
                                  )
                                  .append(
                                    i()("<span/>").php(
                                      e.context.memo("help." + o) || o
                                    )
                                  ),
                                r.php()
                              );
                            })
                            .join("");
                        },
                      },
                      {
                        key: "showHelpDialog",
                        value: function () {
                          var e = this;
                          return i.a
                            .Deferred(function (t) {
                              e.ui.onDialogShown(e.$dialog, function () {
                                e.context.triggerEvent("dialog.shown"),
                                  t.resolve();
                              }),
                                e.ui.showDialog(e.$dialog);
                            })
                            .promise();
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          var e = this;
                          this.context.invoke("editor.saveRange"),
                            this.showHelpDialog().then(function () {
                              e.context.invoke("editor.restoreRange");
                            });
                        },
                      },
                    ]) && wt(t.prototype, n),
                    o && wt(t, o),
                    e
                  );
                })();
                function Tt(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var St = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.options = t.options),
                      (this.hidable = !0),
                      (this.onContextmenu = !1),
                      (this.pageX = null),
                      (this.pageY = null),
                      (this.events = {
                        "summernote.contextmenu": function (e) {
                          n.options.editing &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            (n.onContextmenu = !0),
                            n.update(!0));
                        },
                        "summernote.mousedown": function (e, t) {
                          (n.pageX = t.pageX), (n.pageY = t.pageY);
                        },
                        "summernote.keyup summernote.mouseup summernote.scroll":
                          function (e, t) {
                            n.options.editing &&
                              !n.onContextmenu &&
                              ((n.pageX = t.pageX),
                              (n.pageY = t.pageY),
                              n.update()),
                              (n.onContextmenu = !1);
                          },
                        "summernote.disable summernote.change summernote.dialog.shown summernote.blur":
                          function () {
                            n.hide();
                          },
                        "summernote.focusout": function () {
                          n.$popover.is(":active,:focus") || n.hide();
                        },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return (
                            this.options.airMode &&
                            !w.isEmpty(this.options.popover.air)
                          );
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          this.$popover = this.ui
                            .popover({ className: "note-air-popover" })
                            .render()
                            .appendTo(this.options.container);
                          var t = this.$popover.find(".popover-content");
                          this.context.invoke(
                            "buttons.build",
                            t,
                            this.options.popover.air
                          ),
                            this.$popover.on("mousedown", function () {
                              e.hidable = !1;
                            }),
                            this.$popover.on("mouseup", function () {
                              e.hidable = !0;
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$popover.remove();
                        },
                      },
                      {
                        key: "update",
                        value: function (e) {
                          var t = this.context.invoke("editor.currentStyle");
                          if (!t.range || (t.range.isCollapsed() && !e))
                            this.hide();
                          else {
                            var n = { left: this.pageX, top: this.pageY },
                              o = i()(this.options.container).offset();
                            (n.top -= o.top),
                              (n.left -= o.left),
                              this.$popover.css({
                                display: "block",
                                left: Math.max(n.left, 0) + -5,
                                top: n.top + 5,
                              }),
                              this.context.invoke(
                                "buttons.updateCurrentStyle",
                                this.$popover
                              );
                          }
                        },
                      },
                      {
                        key: "updateCodeview",
                        value: function (e) {
                          this.ui.toggleBtnActive(
                            this.$popover.find(".btn-codeview"),
                            e
                          ),
                            e && this.hide();
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.hidable && this.$popover.hide();
                        },
                      },
                    ]) && Tt(t.prototype, n),
                    o && Tt(t, o),
                    e
                  );
                })();
                function Et(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var Nt = (function () {
                  function e(t) {
                    var n = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.context = t),
                      (this.ui = i.a.summernote.ui),
                      (this.$editable = t.layoutInfo.editable),
                      (this.options = t.options),
                      (this.hint = this.options.hint || []),
                      (this.direction = this.options.hintDirection || "bottom"),
                      (this.hints = Array.isArray(this.hint)
                        ? this.hint
                        : [this.hint]),
                      (this.events = {
                        "summernote.keyup": function (e, t) {
                          t.isDefaultPrevented() || n.handleKeyup(t);
                        },
                        "summernote.keydown": function (e, t) {
                          n.handleKeydown(t);
                        },
                        "summernote.disable summernote.dialog.shown summernote.blur":
                          function () {
                            n.hide();
                          },
                      });
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "shouldInitialize",
                        value: function () {
                          return this.hints.length > 0;
                        },
                      },
                      {
                        key: "initialize",
                        value: function () {
                          var e = this;
                          (this.lastWordRange = null),
                            (this.matchingWord = null),
                            (this.$popover = this.ui
                              .popover({
                                className: "note-hint-popover",
                                hideArrow: !0,
                                direction: "",
                              })
                              .render()
                              .appendTo(this.options.container)),
                            this.$popover.hide(),
                            (this.$content = this.$popover.find(
                              ".popover-content,.note-popover-content"
                            )),
                            this.$content.on(
                              "click",
                              ".note-hint-item",
                              function (t) {
                                e.$content
                                  .find(".active")
                                  .removeClass("active"),
                                  i()(t.currentTarget).addClass("active"),
                                  e.replace();
                              }
                            ),
                            this.$popover.on("mousedown", function (e) {
                              e.preventDefault();
                            });
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.$popover.remove();
                        },
                      },
                      {
                        key: "selectItem",
                        value: function (e) {
                          this.$content.find(".active").removeClass("active"),
                            e.addClass("active"),
                            (this.$content[0].scrollTop =
                              e[0].offsetTop - this.$content.innerHeight() / 2);
                        },
                      },
                      {
                        key: "moveDown",
                        value: function () {
                          var e = this.$content.find(".note-hint-item.active"),
                            t = e.next();
                          if (t.length) this.selectItem(t);
                          else {
                            var n = e.parent().next();
                            n.length ||
                              (n = this.$content
                                .find(".note-hint-group")
                                .first()),
                              this.selectItem(
                                n.find(".note-hint-item").first()
                              );
                          }
                        },
                      },
                      {
                        key: "moveUp",
                        value: function () {
                          var e = this.$content.find(".note-hint-item.active"),
                            t = e.prev();
                          if (t.length) this.selectItem(t);
                          else {
                            var n = e.parent().prev();
                            n.length ||
                              (n = this.$content
                                .find(".note-hint-group")
                                .last()),
                              this.selectItem(n.find(".note-hint-item").last());
                          }
                        },
                      },
                      {
                        key: "replace",
                        value: function () {
                          var e = this.$content.find(".note-hint-item.active");
                          if (e.length) {
                            var t = this.nodeFromItem(e);
                            if (
                              null !== this.matchingWord &&
                              0 === this.matchingWord.length
                            )
                              this.lastWordRange.so = this.lastWordRange.eo;
                            else if (
                              null !== this.matchingWord &&
                              this.matchingWord.length > 0 &&
                              !this.lastWordRange.isCollapsed()
                            ) {
                              var n =
                                this.lastWordRange.eo -
                                this.lastWordRange.so -
                                this.matchingWord.length;
                              n > 0 && (this.lastWordRange.so += n);
                            }
                            if (
                              (this.lastWordRange.insertNode(t),
                              "next" === this.options.hintSelect)
                            ) {
                              var o = document.createTextNode("");
                              i()(t).after(o),
                                xe.createFromNodeBefore(o).select();
                            } else xe.createFromNodeAfter(t).select();
                            (this.lastWordRange = null),
                              this.hide(),
                              this.context.invoke("editor.focus");
                          }
                        },
                      },
                      {
                        key: "nodeFromItem",
                        value: function (e) {
                          var t = this.hints[e.data("index")],
                            n = e.data("item"),
                            o = t.content ? t.content(n) : n;
                          return (
                            "string" == typeof o && (o = pe.createText(o)), o
                          );
                        },
                      },
                      {
                        key: "createItemTemplates",
                        value: function (e, t) {
                          var n = this.hints[e];
                          return t.map(function (t) {
                            var o = i()('<div class="note-hint-item"/>');
                            return (
                              o.append(n.template ? n.template(t) : t + ""),
                              o.data({ index: e, item: t }),
                              o
                            );
                          });
                        },
                      },
                      {
                        key: "handleKeydown",
                        value: function (e) {
                          this.$popover.is(":visible") &&
                            (e.keyCode === Ce.code.ENTER
                              ? (e.preventDefault(), this.replace())
                              : e.keyCode === Ce.code.UP
                              ? (e.preventDefault(), this.moveUp())
                              : e.keyCode === Ce.code.DOWN &&
                                (e.preventDefault(), this.moveDown()));
                        },
                      },
                      {
                        key: "searchKeyword",
                        value: function (e, t, n) {
                          var o = this.hints[e];
                          if (o && o.match.test(t) && o.search) {
                            var i = o.match.exec(t);
                            (this.matchingWord = i[0]), o.search(i[1], n);
                          } else n();
                        },
                      },
                      {
                        key: "createGroup",
                        value: function (e, t) {
                          var n = this,
                            o = i()(
                              '<div class="note-hint-group note-hint-group-' +
                                e +
                                '"></div>'
                            );
                          return (
                            this.searchKeyword(e, t, function (t) {
                              (t = t || []).length &&
                                (o.php(n.createItemTemplates(e, t)), n.show());
                            }),
                            o
                          );
                        },
                      },
                      {
                        key: "handleKeyup",
                        value: function (e) {
                          var t = this;
                          if (
                            !w.contains(
                              [Ce.code.ENTER, Ce.code.UP, Ce.code.DOWN],
                              e.keyCode
                            )
                          ) {
                            var n,
                              o,
                              r = this.context.invoke("editor.getLastRange");
                            if ("words" === this.options.hintMode) {
                              if (
                                ((n = r.getWordsRange(r)),
                                (o = n.toString()),
                                this.hints.forEach(function (e) {
                                  if (e.match.test(o))
                                    return (
                                      (n = r.getWordsMatchRange(e.match)), !1
                                    );
                                }),
                                !n)
                              )
                                return void this.hide();
                              o = n.toString();
                            } else (n = r.getWordRange()), (o = n.toString());
                            if (this.hints.length && o) {
                              this.$content.empty();
                              var a = g.rect2bnd(w.last(n.getClientRects())),
                                s = i()(this.options.container).offset();
                              a &&
                                ((a.top -= s.top),
                                (a.left -= s.left),
                                this.$popover.hide(),
                                (this.lastWordRange = n),
                                this.hints.forEach(function (e, n) {
                                  e.match.test(o) &&
                                    t.createGroup(n, o).appendTo(t.$content);
                                }),
                                this.$content
                                  .find(".note-hint-item:first")
                                  .addClass("active"),
                                "top" === this.direction
                                  ? this.$popover.css({
                                      left: a.left,
                                      top:
                                        a.top - this.$popover.outerHeight() - 5,
                                    })
                                  : this.$popover.css({
                                      left: a.left,
                                      top: a.top + a.height + 5,
                                    }));
                            } else this.hide();
                          }
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          this.$popover.show();
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.$popover.hide();
                        },
                      },
                    ]) && Et(t.prototype, n),
                    o && Et(t, o),
                    e
                  );
                })();
                i.a.summernote = i.a.extend(i.a.summernote, {
                  version: "0.8.18",
                  plugins: {},
                  dom: pe,
                  range: xe,
                  lists: w,
                  options: {
                    langInfo: i.a.summernote.lang["en-US"],
                    editing: !0,
                    modules: {
                      editor: He,
                      clipboard: Oe,
                      dropzone: Me,
                      codeview: We,
                      statusbar: Ke,
                      fullscreen: Ge,
                      handle: Ye,
                      hintPopover: Nt,
                      autoLink: Je,
                      autoSync: tt,
                      autoReplace: ot,
                      placeholder: rt,
                      buttons: st,
                      toolbar: ct,
                      linkDialog: dt,
                      linkPopover: ht,
                      imageDialog: vt,
                      imagePopover: gt,
                      tablePopover: yt,
                      videoDialog: xt,
                      helpDialog: Ct,
                      airPopover: St,
                    },
                    buttons: {},
                    lang: "en-US",
                    followingToolbar: !1,
                    toolbarPosition: "top",
                    otherStaticBar: "",
                    codeviewKeepButton: !1,
                    toolbar: [
                      ["style", ["style"]],
                      ["font", ["bold", "underline", "clear"]],
                      ["fontname", ["fontname"]],
                      ["color", ["color"]],
                      ["para", ["ul", "ol", "paragraph"]],
                      ["table", ["table"]],
                      ["insert", ["link", "picture", "video"]],
                      ["view", ["fullscreen", "codeview", "help"]],
                    ],
                    popatmouse: !0,
                    popover: {
                      image: [
                        [
                          "resize",
                          [
                            "resizeFull",
                            "resizeHalf",
                            "resizeQuarter",
                            "resizeNone",
                          ],
                        ],
                        ["float", ["floatLeft", "floatRight", "floatNone"]],
                        ["remove", ["removeMedia"]],
                      ],
                      link: [["link", ["linkDialogShow", "unlink"]]],
                      table: [
                        [
                          "add",
                          [
                            "addRowDown",
                            "addRowUp",
                            "addColLeft",
                            "addColRight",
                          ],
                        ],
                        ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
                      ],
                      air: [
                        ["color", ["color"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["para", ["ul", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture"]],
                        ["view", ["fullscreen", "codeview"]],
                      ],
                    },
                    airMode: !1,
                    overrideContextMenu: !1,
                    width: null,
                    height: null,
                    linkTargetBlank: !0,
                    useProtocol: !0,
                    defaultProtocol: "http://",
                    focus: !1,
                    tabDisabled: !1,
                    tabSize: 4,
                    styleWithCSS: !1,
                    shortcuts: !0,
                    textareaAutoSync: !0,
                    tooltip: "auto",
                    container: null,
                    maxTextLength: 0,
                    blockquoteBreakingLevel: 2,
                    spellCheck: !0,
                    disableGrammar: !1,
                    placeholder: null,
                    inheritPlaceholder: !1,
                    recordEveryKeystroke: !1,
                    historyLimit: 200,
                    showDomainOnlyForAutolink: !1,
                    hintMode: "word",
                    hintSelect: "after",
                    hintDirection: "bottom",
                    styleTags: [
                      "p",
                      "blockquote",
                      "pre",
                      "h1",
                      "h2",
                      "h3",
                      "h4",
                      "h5",
                      "h6",
                    ],
                    fontNames: [
                      "Arial",
                      "Arial Black",
                      "Comic Sans MS",
                      "Courier New",
                      "Helvetica Neue",
                      "Helvetica",
                      "Impact",
                      "Lucida Grande",
                      "Tahoma",
                      "Times New Roman",
                      "Verdana",
                    ],
                    fontNamesIgnoreCheck: [],
                    addDefaultFonts: !0,
                    fontSizes: [
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "14",
                      "18",
                      "24",
                      "36",
                    ],
                    fontSizeUnits: ["px", "pt"],
                    colors: [
                      [
                        "#000000",
                        "#424242",
                        "#636363",
                        "#9C9C94",
                        "#CEC6CE",
                        "#EFEFEF",
                        "#F7F7F7",
                        "#FFFFFF",
                      ],
                      [
                        "#FF0000",
                        "#FF9C00",
                        "#FFFF00",
                        "#00FF00",
                        "#00FFFF",
                        "#0000FF",
                        "#9C00FF",
                        "#FF00FF",
                      ],
                      [
                        "#F7C6CE",
                        "#FFE7CE",
                        "#FFEFC6",
                        "#D6EFD6",
                        "#CEDEE7",
                        "#CEE7F7",
                        "#D6D6E7",
                        "#E7D6DE",
                      ],
                      [
                        "#E79C9C",
                        "#FFC69C",
                        "#FFE79C",
                        "#B5D6A5",
                        "#A5C6CE",
                        "#9CC6EF",
                        "#B5A5D6",
                        "#D6A5BD",
                      ],
                      [
                        "#E76363",
                        "#F7AD6B",
                        "#FFD663",
                        "#94BD7B",
                        "#73A5AD",
                        "#6BADDE",
                        "#8C7BC6",
                        "#C67BA5",
                      ],
                      [
                        "#CE0000",
                        "#E79439",
                        "#EFC631",
                        "#6BA54A",
                        "#4A7B8C",
                        "#3984C6",
                        "#634AA5",
                        "#A54A7B",
                      ],
                      [
                        "#9C0000",
                        "#B56308",
                        "#BD9400",
                        "#397B21",
                        "#104A5A",
                        "#085294",
                        "#311873",
                        "#731842",
                      ],
                      [
                        "#630000",
                        "#7B3900",
                        "#846300",
                        "#295218",
                        "#083139",
                        "#003163",
                        "#21104A",
                        "#4A1031",
                      ],
                    ],
                    colorsName: [
                      [
                        "Black",
                        "Tundora",
                        "Dove Gray",
                        "Star Dust",
                        "Pale Slate",
                        "Gallery",
                        "Alabaster",
                        "White",
                      ],
                      [
                        "Red",
                        "Orange Peel",
                        "Yellow",
                        "Green",
                        "Cyan",
                        "Blue",
                        "Electric Violet",
                        "Magenta",
                      ],
                      [
                        "Azalea",
                        "Karry",
                        "Egg White",
                        "Zanah",
                        "Botticelli",
                        "Tropical Blue",
                        "Mischka",
                        "Twilight",
                      ],
                      [
                        "Tonys Pink",
                        "Peach Orange",
                        "Cream Brulee",
                        "Sprout",
                        "Casper",
                        "Perano",
                        "Cold Purple",
                        "Careys Pink",
                      ],
                      [
                        "Mandy",
                        "Rajah",
                        "Dandelion",
                        "Olivine",
                        "Gulf Stream",
                        "Viking",
                        "Blue Marguerite",
                        "Puce",
                      ],
                      [
                        "Guardsman Red",
                        "Fire Bush",
                        "Golden Dream",
                        "Chelsea Cucumber",
                        "Smalt Blue",
                        "Boston Blue",
                        "Butterfly Bush",
                        "Cadillac",
                      ],
                      [
                        "Sangria",
                        "Mai Tai",
                        "Buddha Gold",
                        "Forest Green",
                        "Eden",
                        "Venice Blue",
                        "Meteorite",
                        "Claret",
                      ],
                      [
                        "Rosewood",
                        "Cinnamon",
                        "Olive",
                        "Parsley",
                        "Tiber",
                        "Midnight Blue",
                        "Valentino",
                        "Loulou",
                      ],
                    ],
                    colorButton: { foreColor: "#000000", backColor: "#FFFF00" },
                    lineHeights: [
                      "1.0",
                      "1.2",
                      "1.4",
                      "1.5",
                      "1.6",
                      "1.8",
                      "2.0",
                      "3.0",
                    ],
                    tableClassName: "table table-bordered",
                    insertTableMaxSize: { col: 10, row: 10 },
                    dialogsInBody: !1,
                    dialogsFade: !1,
                    maximumImageFileSize: null,
                    callbacks: {
                      onBeforeCommand: null,
                      onBlur: null,
                      onBlurCodeview: null,
                      onChange: null,
                      onChangeCodeview: null,
                      onDialogShown: null,
                      onEnter: null,
                      onFocus: null,
                      onImageLinkInsert: null,
                      onImageUpload: null,
                      onImageUploadError: null,
                      onInit: null,
                      onKeydown: null,
                      onKeyup: null,
                      onMousedown: null,
                      onMouseup: null,
                      onPaste: null,
                      onScroll: null,
                    },
                    codemirror: {
                      mode: "text/html",
                      htmlMode: !0,
                      lineNumbers: !0,
                    },
                    codeviewFilter: !1,
                    codeviewFilterRegex:
                      /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
                    codeviewIframeFilter: !0,
                    codeviewIframeWhitelistSrc: [],
                    codeviewIframeWhitelistSrcBase: [
                      "www.youtube.com",
                      "www.youtube-nocookie.com",
                      "www.facebook.com",
                      "vine.co",
                      "instagram.com",
                      "player.vimeo.com",
                      "www.dailymotion.com",
                      "player.youku.com",
                      "v.qq.com",
                    ],
                    keyMap: {
                      pc: {
                        ESC: "escape",
                        ENTER: "insertParagraph",
                        "CTRL+Z": "undo",
                        "CTRL+Y": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CTRL+B": "bold",
                        "CTRL+I": "italic",
                        "CTRL+U": "underline",
                        "CTRL+SHIFT+S": "strikethrough",
                        "CTRL+BACKSLASH": "removeFormat",
                        "CTRL+SHIFT+L": "justifyLeft",
                        "CTRL+SHIFT+E": "justifyCenter",
                        "CTRL+SHIFT+R": "justifyRight",
                        "CTRL+SHIFT+J": "justifyFull",
                        "CTRL+SHIFT+NUM7": "insertUnorderedList",
                        "CTRL+SHIFT+NUM8": "insertOrderedList",
                        "CTRL+LEFTBRACKET": "outdent",
                        "CTRL+RIGHTBRACKET": "indent",
                        "CTRL+NUM0": "formatPara",
                        "CTRL+NUM1": "formatH1",
                        "CTRL+NUM2": "formatH2",
                        "CTRL+NUM3": "formatH3",
                        "CTRL+NUM4": "formatH4",
                        "CTRL+NUM5": "formatH5",
                        "CTRL+NUM6": "formatH6",
                        "CTRL+ENTER": "insertHorizontalRule",
                        "CTRL+K": "linkDialog.show",
                      },
                      mac: {
                        ESC: "escape",
                        ENTER: "insertParagraph",
                        "CMD+Z": "undo",
                        "CMD+SHIFT+Z": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CMD+B": "bold",
                        "CMD+I": "italic",
                        "CMD+U": "underline",
                        "CMD+SHIFT+S": "strikethrough",
                        "CMD+BACKSLASH": "removeFormat",
                        "CMD+SHIFT+L": "justifyLeft",
                        "CMD+SHIFT+E": "justifyCenter",
                        "CMD+SHIFT+R": "justifyRight",
                        "CMD+SHIFT+J": "justifyFull",
                        "CMD+SHIFT+NUM7": "insertUnorderedList",
                        "CMD+SHIFT+NUM8": "insertOrderedList",
                        "CMD+LEFTBRACKET": "outdent",
                        "CMD+RIGHTBRACKET": "indent",
                        "CMD+NUM0": "formatPara",
                        "CMD+NUM1": "formatH1",
                        "CMD+NUM2": "formatH2",
                        "CMD+NUM3": "formatH3",
                        "CMD+NUM4": "formatH4",
                        "CMD+NUM5": "formatH5",
                        "CMD+NUM6": "formatH6",
                        "CMD+ENTER": "insertHorizontalRule",
                        "CMD+K": "linkDialog.show",
                      },
                    },
                    icons: {
                      align: "note-icon-align",
                      alignCenter: "note-icon-align-center",
                      alignJustify: "note-icon-align-justify",
                      alignLeft: "note-icon-align-left",
                      alignRight: "note-icon-align-right",
                      rowBelow: "note-icon-row-below",
                      colBefore: "note-icon-col-before",
                      colAfter: "note-icon-col-after",
                      rowAbove: "note-icon-row-above",
                      rowRemove: "note-icon-row-remove",
                      colRemove: "note-icon-col-remove",
                      indent: "note-icon-align-indent",
                      outdent: "note-icon-align-outdent",
                      arrowsAlt: "note-icon-arrows-alt",
                      bold: "note-icon-bold",
                      caret: "note-icon-caret",
                      circle: "note-icon-circle",
                      close: "note-icon-close",
                      code: "note-icon-code",
                      eraser: "note-icon-eraser",
                      floatLeft: "note-icon-float-left",
                      floatRight: "note-icon-float-right",
                      font: "note-icon-font",
                      frame: "note-icon-frame",
                      italic: "note-icon-italic",
                      link: "note-icon-link",
                      unlink: "note-icon-chain-broken",
                      magic: "note-icon-magic",
                      menuCheck: "note-icon-menu-check",
                      minus: "note-icon-minus",
                      orderedlist: "note-icon-orderedlist",
                      pencil: "note-icon-pencil",
                      picture: "note-icon-picture",
                      question: "note-icon-question",
                      redo: "note-icon-redo",
                      rollback: "note-icon-rollback",
                      square: "note-icon-square",
                      strikethrough: "note-icon-strikethrough",
                      subscript: "note-icon-subscript",
                      superscript: "note-icon-superscript",
                      table: "note-icon-table",
                      textHeight: "note-icon-text-height",
                      trash: "note-icon-trash",
                      underline: "note-icon-underline",
                      undo: "note-icon-undo",
                      unorderedlist: "note-icon-unorderedlist",
                      video: "note-icon-video",
                    },
                  },
                });
              },
              51: function (e, t, n) {
                "use strict";
                n.r(t);
                var o = n(0),
                  i = n.n(o),
                  r = n(1);
                function a(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var s = (function () {
                  function e(t, n) {
                    if (
                      ((function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (this.$node = t),
                      (this.options = i.a.extend(
                        {},
                        {
                          title: "",
                          target: n.container,
                          trigger: "hover focus",
                          placement: "bottom",
                        },
                        n
                      )),
                      (this.$tooltip = i()(
                        [
                          '<div class="note-tooltip">',
                          '<div class="note-tooltip-arrow"></div>',
                          '<div class="note-tooltip-content"></div>',
                          "</div>",
                        ].join("")
                      )),
                      "manual" !== this.options.trigger)
                    ) {
                      var o = this.show.bind(this),
                        r = this.hide.bind(this),
                        a = this.toggle.bind(this);
                      this.options.trigger.split(" ").forEach(function (e) {
                        "hover" === e
                          ? (t.off("mouseenter mouseleave"),
                            t.on("mouseenter", o).on("mouseleave", r))
                          : "click" === e
                          ? t.on("click", a)
                          : "focus" === e && t.on("focus", o).on("blur", r);
                      });
                    }
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "show",
                        value: function () {
                          var e = this.$node,
                            t = e.offset(),
                            n = i()(this.options.target).offset();
                          (t.top -= n.top), (t.left -= n.left);
                          var o = this.$tooltip,
                            r =
                              this.options.title ||
                              e.attr("title") ||
                              e.data("title"),
                            a = this.options.placement || e.data("placement");
                          o.addClass(a),
                            o.find(".note-tooltip-content").text(r),
                            o.appendTo(this.options.target);
                          var s = e.outerWidth(),
                            l = e.outerHeight(),
                            c = o.outerWidth(),
                            u = o.outerHeight();
                          "bottom" === a
                            ? o.css({
                                top: t.top + l,
                                left: t.left + (s / 2 - c / 2),
                              })
                            : "top" === a
                            ? o.css({
                                top: t.top - u,
                                left: t.left + (s / 2 - c / 2),
                              })
                            : "left" === a
                            ? o.css({
                                top: t.top + (l / 2 - u / 2),
                                left: t.left - c,
                              })
                            : "right" === a &&
                              o.css({
                                top: t.top + (l / 2 - u / 2),
                                left: t.left + s,
                              }),
                            o.addClass("in");
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          var e = this;
                          this.$tooltip.removeClass("in"),
                            setTimeout(function () {
                              e.$tooltip.remove();
                            }, 200);
                        },
                      },
                      {
                        key: "toggle",
                        value: function () {
                          this.$tooltip.hasClass("in")
                            ? this.hide()
                            : this.show();
                        },
                      },
                    ]) && a(t.prototype, n),
                    o && a(t, o),
                    e
                  );
                })();
                function l(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var c = (function () {
                  function e(t, n) {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.$button = t),
                      (this.options = i.a.extend(
                        {},
                        { target: n.container },
                        n
                      )),
                      this.setEvent();
                  }
                  var t, n, o;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "setEvent",
                        value: function () {
                          var e = this;
                          this.$button.on("click", function (t) {
                            e.toggle(), t.stopImmediatePropagation();
                          });
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          var e = i()(".note-btn-group.open");
                          e.find(".note-btn.active").removeClass("active"),
                            e.removeClass("open");
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          this.$button.addClass("active"),
                            this.$button.parent().addClass("open");
                          var e = this.$button.next(),
                            t = e.offset(),
                            n = e.outerWidth(),
                            o = i()(window).width(),
                            r = parseFloat(
                              i()(this.options.target).css("margin-right")
                            );
                          t.left + n > o - r
                            ? e.css("margin-left", o - r - (t.left + n))
                            : e.css("margin-left", "");
                        },
                      },
                      {
                        key: "hide",
                        value: function () {
                          this.$button.removeClass("active"),
                            this.$button.parent().removeClass("open");
                        },
                      },
                      {
                        key: "toggle",
                        value: function () {
                          var e = this.$button.parent().hasClass("open");
                          this.clear(), e ? this.hide() : this.show();
                        },
                      },
                    ]) && l(t.prototype, n),
                    o && l(t, o),
                    e
                  );
                })();
                i()(document).on("click", function (e) {
                  i()(e.target).closest(".note-btn-group").length ||
                    (i()(".note-btn-group.open").removeClass("open"),
                    i()(".note-btn-group .note-btn.active").removeClass(
                      "active"
                    ));
                }),
                  i()(document).on("click.note-dropdown-menu", function (e) {
                    i()(e.target)
                      .closest(".note-dropdown-menu")
                      .parent()
                      .removeClass("open"),
                      i()(e.target)
                        .closest(".note-dropdown-menu")
                        .parent()
                        .find(".note-btn.active")
                        .removeClass("active");
                  });
                var u = c;
                function d(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                var f = (function () {
                    function e(t) {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.$modal = t),
                        (this.$backdrop = i()(
                          '<div class="note-modal-backdrop"/>'
                        ));
                    }
                    var t, n, o;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "show",
                          value: function () {
                            var e = this;
                            this.$backdrop.appendTo(document.body).show(),
                              this.$modal.addClass("open").show(),
                              this.$modal.trigger("note.modal.show"),
                              this.$modal
                                .off("click", ".close")
                                .on("click", ".close", this.hide.bind(this)),
                              this.$modal.on("keydown", function (t) {
                                27 === t.which &&
                                  (t.preventDefault(), e.hide());
                              });
                          },
                        },
                        {
                          key: "hide",
                          value: function () {
                            this.$modal.removeClass("open").hide(),
                              this.$backdrop.hide(),
                              this.$modal.trigger("note.modal.hide"),
                              this.$modal.off("keydown");
                          },
                        },
                      ]) && d(t.prototype, n),
                      o && d(t, o),
                      e
                    );
                  })(),
                  h = r.a.create('<div class="note-editor note-frame"/>'),
                  p = r.a.create('<div class="note-toolbar" role="toolbar"/>'),
                  v = r.a.create('<div class="note-editing-area"/>'),
                  m = r.a.create(
                    '<textarea class="note-codable" aria-multiline="true"/>'
                  ),
                  g = r.a.create(
                    '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>'
                  ),
                  b = r.a.create(
                    [
                      '<output class="note-status-output" role="status" aria-live="polite"></output>',
                      '<div class="note-statusbar" role="status">',
                      '<div class="note-resizebar" aria-label="resize">',
                      '<div class="note-icon-bar"></div>',
                      '<div class="note-icon-bar"></div>',
                      '<div class="note-icon-bar"></div>',
                      "</div>",
                      "</div>",
                    ].join("")
                  ),
                  y = r.a.create('<div class="note-editor note-airframe"/>'),
                  k = r.a.create(
                    [
                      '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>',
                      '<output class="note-status-output" role="status" aria-live="polite"></output>',
                    ].join("")
                  ),
                  x = r.a.create('<div class="note-btn-group">'),
                  w = r.a.create(
                    '<button type="button" class="note-btn" tabindex="-1">',
                    function (e, t) {
                      t &&
                        t.tooltip &&
                        (e.attr({ "aria-label": t.tooltip }),
                        e
                          .data(
                            "_lite_tooltip",
                            new s(e, {
                              title: t.tooltip,
                              container: t.container,
                            })
                          )
                          .on("click", function (e) {
                            i()(e.currentTarget).data("_lite_tooltip").hide();
                          })),
                        t.contents && e.php(t.contents),
                        t &&
                          t.data &&
                          "dropdown" === t.data.toggle &&
                          e.data(
                            "_lite_dropdown",
                            new u(e, { container: t.container })
                          ),
                        t &&
                          t.codeviewKeepButton &&
                          e.addClass("note-codeview-keep");
                    }
                  ),
                  C = r.a.create(
                    '<div class="note-dropdown-menu" role="list">',
                    function (e, t) {
                      var n = Array.isArray(t.items)
                        ? t.items.map(function (e) {
                            var n = "string" == typeof e ? e : e.value || "",
                              o = t.template ? t.template(e) : e,
                              r = i()(
                                '<a class="note-dropdown-item" href="#" data-value="' +
                                  n +
                                  '" role="listitem" aria-label="' +
                                  n +
                                  '"></a>'
                              );
                            return r.php(o).data("item", e), r;
                          })
                        : t.items;
                      e.php(n).attr({ "aria-label": t.title }),
                        e.on("click", "> .note-dropdown-item", function (e) {
                          var n = i()(this),
                            o = n.data("item"),
                            r = n.data("value");
                          o.click
                            ? o.click(n)
                            : t.itemClick && t.itemClick(e, o, r);
                        }),
                        t &&
                          t.codeviewKeepButton &&
                          e.addClass("note-codeview-keep");
                    }
                  ),
                  T = r.a.create(
                    '<div class="note-dropdown-menu note-check" role="list">',
                    function (e, t) {
                      var n = Array.isArray(t.items)
                        ? t.items.map(function (e) {
                            var n = "string" == typeof e ? e : e.value || "",
                              o = t.template ? t.template(e) : e,
                              r = i()(
                                '<a class="note-dropdown-item" href="#" data-value="' +
                                  n +
                                  '" role="listitem" aria-label="' +
                                  e +
                                  '"></a>'
                              );
                            return (
                              r
                                .php([O(t.checkClassName), " ", o])
                                .data("item", e),
                              r
                            );
                          })
                        : t.items;
                      e.php(n).attr({ "aria-label": t.title }),
                        e.on("click", "> .note-dropdown-item", function (e) {
                          var n = i()(this),
                            o = n.data("item"),
                            r = n.data("value");
                          o.click
                            ? o.click(n)
                            : t.itemClick && t.itemClick(e, o, r);
                        }),
                        t &&
                          t.codeviewKeepButton &&
                          e.addClass("note-codeview-keep");
                    }
                  ),
                  S = function (e, t) {
                    return e + " " + O(t.icons.caret, "span");
                  },
                  E = function (e, t) {
                    return x(
                      [
                        w({
                          className: "dropdown-toggle",
                          contents: e.title + " " + O("note-icon-caret"),
                          tooltip: e.tooltip,
                          data: { toggle: "dropdown" },
                        }),
                        C({
                          className: e.className,
                          items: e.items,
                          template: e.template,
                          itemClick: e.itemClick,
                        }),
                      ],
                      { callback: t }
                    ).render();
                  },
                  N = function (e, t) {
                    return x(
                      [
                        w({
                          className: "dropdown-toggle",
                          contents: e.title + " " + O("note-icon-caret"),
                          tooltip: e.tooltip,
                          data: { toggle: "dropdown" },
                        }),
                        T({
                          className: e.className,
                          checkClassName: e.checkClassName,
                          items: e.items,
                          template: e.template,
                          itemClick: e.itemClick,
                        }),
                      ],
                      { callback: t }
                    ).render();
                  },
                  A = function (e) {
                    return x([
                      w({
                        className: "dropdown-toggle",
                        contents: e.title + " " + O("note-icon-caret"),
                        tooltip: e.tooltip,
                        data: { toggle: "dropdown" },
                      }),
                      C([
                        x({ className: "note-align", children: e.items[0] }),
                        x({ className: "note-list", children: e.items[1] }),
                      ]),
                    ]).render();
                  },
                  L = function (e) {
                    return x(
                      [
                        w({
                          className: "dropdown-toggle",
                          contents: e.title + " " + O("note-icon-caret"),
                          tooltip: e.tooltip,
                          data: { toggle: "dropdown" },
                        }),
                        C({
                          className: "note-table",
                          items: [
                            '<div class="note-dimension-picker">',
                            '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                            '<div class="note-dimension-picker-highlighted"></div>',
                            '<div class="note-dimension-picker-unhighlighted"></div>',
                            "</div>",
                            '<div class="note-dimension-display">1 x 1</div>',
                          ].join(""),
                        }),
                      ],
                      {
                        callback: function (t) {
                          t.find(".note-dimension-picker-mousecatcher")
                            .css({ width: e.col + "em", height: e.row + "em" })
                            .mousedown(e.itemClick)
                            .mousemove(function (t) {
                              !(function (e, t, n) {
                                var o,
                                  r = i()(e.target.parentNode),
                                  a = r.next(),
                                  s = r.find(
                                    ".note-dimension-picker-mousecatcher"
                                  ),
                                  l = r.find(
                                    ".note-dimension-picker-highlighted"
                                  ),
                                  c = r.find(
                                    ".note-dimension-picker-unhighlighted"
                                  );
                                if (void 0 === e.offsetX) {
                                  var u = i()(e.target).offset();
                                  o = {
                                    x: e.pageX - u.left,
                                    y: e.pageY - u.top,
                                  };
                                } else o = { x: e.offsetX, y: e.offsetY };
                                var d = Math.ceil(o.x / 18) || 1,
                                  f = Math.ceil(o.y / 18) || 1;
                                l.css({ width: d + "em", height: f + "em" }),
                                  s.data("value", d + "x" + f),
                                  d > 3 &&
                                    d < t &&
                                    c.css({ width: d + 1 + "em" }),
                                  f > 3 &&
                                    f < n &&
                                    c.css({ height: f + 1 + "em" }),
                                  a.php(d + " x " + f);
                              })(t, e.col, e.row);
                            });
                        },
                      }
                    ).render();
                  },
                  $ = r.a.create(
                    '<div class="note-color-palette"/>',
                    function (e, t) {
                      for (var n = [], o = 0, r = t.colors.length; o < r; o++) {
                        for (
                          var a = t.eventName,
                            l = t.colors[o],
                            c = t.colorsName[o],
                            u = [],
                            d = 0,
                            f = l.length;
                          d < f;
                          d++
                        ) {
                          var h = l[d],
                            p = c[d];
                          u.push(
                            [
                              '<button type="button" class="note-btn note-color-btn"',
                              'style="background-color:',
                              h,
                              '" ',
                              'data-event="',
                              a,
                              '" ',
                              'data-value="',
                              h,
                              '" ',
                              'data-title="',
                              p,
                              '" ',
                              'aria-label="',
                              p,
                              '" ',
                              'data-toggle="button" tabindex="-1"></button>',
                            ].join("")
                          );
                        }
                        n.push(
                          '<div class="note-color-row">' + u.join("") + "</div>"
                        );
                      }
                      e.php(n.join("")),
                        e.find(".note-color-btn").each(function () {
                          i()(this).data(
                            "_lite_tooltip",
                            new s(i()(this), { container: t.container })
                          );
                        });
                    }
                  ),
                  I = function (e, t) {
                    return x({
                      className: "note-color",
                      children: [
                        w({
                          className: "note-current-color-button",
                          contents: e.title,
                          tooltip: e.lang.color.recent,
                          click: e.currentClick,
                          callback: function (e) {
                            var n = e.find(".note-recent-color");
                            "foreColor" !== t &&
                              (n.css("background-color", "#FFFF00"),
                              e.attr("data-backColor", "#FFFF00"));
                          },
                        }),
                        w({
                          className: "dropdown-toggle",
                          contents: O("note-icon-caret"),
                          tooltip: e.lang.color.more,
                          data: { toggle: "dropdown" },
                        }),
                        C({
                          items: [
                            "<div>",
                            '<div class="note-btn-group btn-background-color">',
                            '<div class="note-palette-title">' +
                              e.lang.color.background +
                              "</div>",
                            "<div>",
                            '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="backColor" data-value="transparent">',
                            e.lang.color.transparent,
                            "</button>",
                            "</div>",
                            '<div class="note-holder" data-event="backColor"></div>',
                            '<div class="btn-sm">',
                            '<input type="color" id="html5bcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">',
                            '<button type="button" class="note-color-reset btn" data-event="backColor" data-value="cpbackColor">',
                            e.lang.color.cpSelect,
                            "</button>",
                            "</div>",
                            "</div>",
                            '<div class="note-btn-group btn-foreground-color">',
                            '<div class="note-palette-title">' +
                              e.lang.color.foreground +
                              "</div>",
                            "<div>",
                            '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="removeFormat" data-value="foreColor">',
                            e.lang.color.resetToDefault,
                            "</button>",
                            "</div>",
                            '<div class="note-holder" data-event="foreColor"></div>',
                            '<div class="btn-sm">',
                            '<input type="color" id="html5fcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">',
                            '<button type="button" class="note-color-reset btn" data-event="foreColor" data-value="cpforeColor">',
                            e.lang.color.cpSelect,
                            "</button>",
                            "</div>",
                            "</div>",
                            "</div>",
                          ].join(""),
                          callback: function (n) {
                            n.find(".note-holder").each(function () {
                              var t = i()(this);
                              t.append(
                                $({
                                  colors: e.colors,
                                  eventName: t.data("event"),
                                }).render()
                              );
                            }),
                              "fore" === t
                                ? (n.find(".btn-background-color").hide(),
                                  n.css({ "min-width": "210px" }))
                                : "back" === t &&
                                  (n.find(".btn-foreground-color").hide(),
                                  n.css({ "min-width": "210px" }));
                          },
                          click: function (n) {
                            var o = i()(n.target),
                              r = o.data("event"),
                              a = o.data("value"),
                              s = document.getElementById("html5fcp").value,
                              l = document.getElementById("html5bcp").value;
                            if (
                              ("cp" === a
                                ? n.stopPropagation()
                                : "cpbackColor" === a
                                ? (a = l)
                                : "cpforeColor" === a && (a = s),
                              r && a)
                            ) {
                              var c =
                                  "backColor" === r
                                    ? "background-color"
                                    : "color",
                                u = o
                                  .closest(".note-color")
                                  .find(".note-recent-color"),
                                d = o
                                  .closest(".note-color")
                                  .find(".note-current-color-button");
                              u.css(c, a),
                                d.attr("data-" + r, a),
                                "fore" === t
                                  ? e.itemClick("foreColor", a)
                                  : "back" === t
                                  ? e.itemClick("backColor", a)
                                  : e.itemClick(r, a);
                            }
                          },
                        }),
                      ],
                    }).render();
                  },
                  P = r.a.create(
                    '<div class="note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>',
                    function (e, t) {
                      t.fade && e.addClass("fade"),
                        e.attr({ "aria-label": t.title }),
                        e.php(
                          [
                            '<div class="note-modal-content">',
                            t.title
                              ? '<div class="note-modal-header"><button type="button" class="close" aria-label="Close" aria-hidden="true"><i class="note-icon-close"></i></button><h4 class="note-modal-title">' +
                                t.title +
                                "</h4></div>"
                              : "",
                            '<div class="note-modal-body">' + t.body + "</div>",
                            t.footer
                              ? '<div class="note-modal-footer">' +
                                t.footer +
                                "</div>"
                              : "",
                            "</div>",
                          ].join("")
                        ),
                        e.data("modal", new f(e, t));
                    }
                  ),
                  D = function (e) {
                    var t =
                        '<div class="note-form-group"><label for="note-dialog-video-url-' +
                        e.id +
                        '" class="note-form-label">' +
                        e.lang.video.url +
                        ' <small class="text-muted">' +
                        e.lang.video.providers +
                        '</small></label><input id="note-dialog-video-url-' +
                        e.id +
                        '" class="note-video-url note-input" type="text"/></div>',
                      n = [
                        '<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>',
                        e.lang.video.insert,
                        "</button>",
                      ].join("");
                    return P({
                      title: e.lang.video.insert,
                      fade: e.fade,
                      body: t,
                      footer: n,
                    }).render();
                  },
                  R = function (e) {
                    var t =
                        '<div class="note-form-group note-group-select-from-files"><label for="note-dialog-image-file-' +
                        e.id +
                        '" class="note-form-label">' +
                        e.lang.image.selectFromFiles +
                        '</label><input id="note-dialog-image-file-' +
                        e.id +
                        '" class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple"/>' +
                        e.imageLimitation +
                        '</div><div class="note-form-group"><label for="note-dialog-image-url-' +
                        e.id +
                        '" class="note-form-label">' +
                        e.lang.image.url +
                        '</label><input id="note-dialog-image-url-' +
                        e.id +
                        '" class="note-image-url note-input" type="text"/></div>',
                      n = [
                        '<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>',
                        e.lang.image.insert,
                        "</button>",
                      ].join("");
                    return P({
                      title: e.lang.image.insert,
                      fade: e.fade,
                      body: t,
                      footer: n,
                    }).render();
                  },
                  F = function (e) {
                    var t =
                        '<div class="note-form-group"><label for="note-dialog-link-txt-' +
                        e.id +
                        '" class="note-form-label">' +
                        e.lang.link.textToDisplay +
                        '</label><input id="note-dialog-link-txt-' +
                        e.id +
                        '" class="note-link-text note-input" type="text"/></div><div class="note-form-group"><label for="note-dialog-link-url-' +
                        e.id +
                        '" class="note-form-label">' +
                        e.lang.link.url +
                        '</label><input id="note-dialog-link-url-' +
                        e.id +
                        '" class="note-link-url note-input" type="text" value="http://"/></div>' +
                        (e.disableLinkTarget
                          ? ""
                          : '<div class="checkbox"><label for="note-dialog-link-nw-' +
                            e.id +
                            '"><input id="note-dialog-link-nw-' +
                            e.id +
                            '" type="checkbox" checked> ' +
                            e.lang.link.openInNewWindow +
                            "</label></div>") +
                        '<div class="checkbox"><label for="note-dialog-link-up-' +
                        e.id +
                        '"><input id="note-dialog-link-up-' +
                        e.id +
                        '" type="checkbox" checked> ' +
                        e.lang.link.useProtocol +
                        "</label></div>",
                      n = [
                        '<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>',
                        e.lang.link.insert,
                        "</button>",
                      ].join("");
                    return P({
                      className: "link-dialog",
                      title: e.lang.link.insert,
                      fade: e.fade,
                      body: t,
                      footer: n,
                    }).render();
                  },
                  H = r.a.create(
                    [
                      '<div class="note-popover bottom">',
                      '<div class="note-popover-arrow"></div>',
                      '<div class="popover-content note-children-container"></div>',
                      "</div>",
                    ].join(""),
                    function (e, t) {
                      var n = void 0 !== t.direction ? t.direction : "bottom";
                      e.addClass(n).hide(),
                        t.hideArrow && e.find(".note-popover-arrow").hide();
                    }
                  ),
                  j = r.a.create(
                    '<div class="checkbox"></div>',
                    function (e, t) {
                      e.php(
                        [
                          "<label" +
                            (t.id ? ' for="note-' + t.id + '"' : "") +
                            ">",
                          '<input role="checkbox" type="checkbox"' +
                            (t.id ? ' id="note-' + t.id + '"' : ""),
                          t.checked ? " checked" : "",
                          ' aria-checked="' +
                            (t.checked ? "true" : "false") +
                            '"/>',
                          t.text ? t.text : "",
                          "</label>",
                        ].join("")
                      );
                    }
                  ),
                  O = function (e, t) {
                    return "<" + (t = t || "i") + ' class="' + e + '"/>';
                  },
                  B = function (e) {
                    return {
                      editor: h,
                      toolbar: p,
                      editingArea: v,
                      codable: m,
                      editable: g,
                      statusbar: b,
                      airEditor: y,
                      airEditable: k,
                      buttonGroup: x,
                      button: w,
                      dropdown: C,
                      dropdownCheck: T,
                      dropdownButton: E,
                      dropdownButtonContents: S,
                      dropdownCheckButton: N,
                      paragraphDropdownButton: A,
                      tableDropdownButton: L,
                      colorDropdownButton: I,
                      palette: $,
                      dialog: P,
                      videoDialog: D,
                      imageDialog: R,
                      linkDialog: F,
                      popover: H,
                      checkbox: j,
                      icon: O,
                      options: e,
                      toggleBtn: function (e, t) {
                        e.toggleClass("disabled", !t), e.attr("disabled", !t);
                      },
                      toggleBtnActive: function (e, t) {
                        e.toggleClass("active", t);
                      },
                      check: function (e, t) {
                        e.find(".checked").removeClass("checked"),
                          e
                            .find('[data-value="' + t + '"]')
                            .addClass("checked");
                      },
                      onDialogShown: function (e, t) {
                        e.one("note.modal.show", t);
                      },
                      onDialogHidden: function (e, t) {
                        e.one("note.modal.hide", t);
                      },
                      showDialog: function (e) {
                        e.data("modal").show();
                      },
                      hideDialog: function (e) {
                        e.data("modal").hide();
                      },
                      getPopoverContent: function (e) {
                        return e.find(".note-popover-content");
                      },
                      getDialogBody: function (e) {
                        return e.find(".note-modal-body");
                      },
                      createLayout: function (t) {
                        var n = (
                          e.airMode
                            ? y([v([m(), k()])])
                            : "bottom" === e.toolbarPosition
                            ? h([v([m(), g()]), p(), b()])
                            : h([p(), v([m(), g()]), b()])
                        ).render();
                        return (
                          n.insertAfter(t),
                          {
                            note: t,
                            editor: n,
                            toolbar: n.find(".note-toolbar"),
                            editingArea: n.find(".note-editing-area"),
                            editable: n.find(".note-editable"),
                            codable: n.find(".note-codable"),
                            statusbar: n.find(".note-statusbar"),
                          }
                        );
                      },
                      removeLayout: function (e, t) {
                        e.php(t.editable.php()),
                          t.editor.remove(),
                          e.off("summernote"),
                          e.show();
                      },
                    };
                  };
                n(3),
                  n(6),
                  (i.a.summernote = i.a.extend(i.a.summernote, {
                    ui_template: B,
                    interface: "lite",
                  }));
              },
              6: function (e, t, n) {},
            });
          }),
          (e.exports = o(n(9755)));
      },
    },
    t = {};
  function n(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { exports: {} });
    return e[o].call(r.exports, r, r.exports, n), r.exports;
  }
  ($ = n(9755)),
    n(5769),
    $("#summernote").summernote({ tabsize: 2, height: 120 }),
    $("#hint").summernote({
      height: 100,
      toolbar: !1,
      placeholder: "type with apple, orange, watermelon and lemon",
      hint: {
        words: ["apple", "orange", "watermelon", "lemon"],
        match: /\b(\w{1,})$/,
        search: function (e, t) {
          t(
            $.grep(this.words, function (t) {
              return 0 === t.indexOf(e);
            })
          );
        },
      },
    });
})();