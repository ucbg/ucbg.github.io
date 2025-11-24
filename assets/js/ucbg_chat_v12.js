(function () {
  "use strict";
  function Nf(g) {
    return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
  }
  var oi = { exports: {} },
    Ja = {};
  var Bf;
  function Jd() {
    if (Bf) return Ja;
    Bf = 1;
    var g = Symbol.for("react.transitional.element"),
      R = Symbol.for("react.fragment");
    function x(r, G, Z) {
      var J = null;
      if ((Z !== void 0 && (J = "" + Z), G.key !== void 0 && (J = "" + G.key), "key" in G)) {
        Z = {};
        for (var $ in G) $ !== "key" && (Z[$] = G[$]);
      } else Z = G;
      return (G = Z.ref), { $$typeof: g, type: r, key: J, ref: G !== void 0 ? G : null, props: Z };
    }
    return (Ja.Fragment = R), (Ja.jsx = x), (Ja.jsxs = x), Ja;
  }
  var jf;
  function wd() {
    return jf || ((jf = 1), (oi.exports = Jd())), oi.exports;
  }
  var O = wd(),
    ri = { exports: {} },
    K = {};
  var qf;
  function kd() {
    if (qf) return K;
    qf = 1;
    var g = Symbol.for("react.transitional.element"),
      R = Symbol.for("react.portal"),
      x = Symbol.for("react.fragment"),
      r = Symbol.for("react.strict_mode"),
      G = Symbol.for("react.profiler"),
      Z = Symbol.for("react.consumer"),
      J = Symbol.for("react.context"),
      $ = Symbol.for("react.forward_ref"),
      M = Symbol.for("react.suspense"),
      z = Symbol.for("react.memo"),
      V = Symbol.for("react.lazy"),
      q = Symbol.for("react.activity"),
      k = Symbol.iterator;
    function I(o) {
      return o === null || typeof o != "object" ? null : ((o = (k && o[k]) || o["@@iterator"]), typeof o == "function" ? o : null);
    }
    var cl = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Yl = Object.assign,
      lt = {};
    function Gl(o, T, _) {
      (this.props = o), (this.context = T), (this.refs = lt), (this.updater = _ || cl);
    }
    (Gl.prototype.isReactComponent = {}),
      (Gl.prototype.setState = function (o, T) {
        if (typeof o != "object" && typeof o != "function" && o != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, T, "setState");
      }),
      (Gl.prototype.forceUpdate = function (o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      });
    function Ut() {}
    Ut.prototype = Gl.prototype;
    function jl(o, T, _) {
      (this.props = o), (this.context = T), (this.refs = lt), (this.updater = _ || cl);
    }
    var $l = (jl.prototype = new Ut());
    ($l.constructor = jl), Yl($l, Gl.prototype), ($l.isPureReactComponent = !0);
    var rt = Array.isArray;
    function _l() {}
    var ll = { H: null, A: null, T: null, S: null },
      Il = Object.prototype.hasOwnProperty;
    function tt(o, T, _) {
      var D = _.ref;
      return { $$typeof: g, type: o, key: T, ref: D !== void 0 ? D : null, props: _ };
    }
    function Vt(o, T) {
      return tt(o.type, T, o.props);
    }
    function Zl(o) {
      return typeof o == "object" && o !== null && o.$$typeof === g;
    }
    function Ul(o) {
      var T = { "=": "=0", ":": "=2" };
      return (
        "$" +
        o.replace(/[=:]/g, function (_) {
          return T[_];
        })
      );
    }
    var et = /\/+/g;
    function Rt(o, T) {
      return typeof o == "object" && o !== null && o.key != null ? Ul("" + o.key) : T.toString(36);
    }
    function El(o) {
      switch (o.status) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw o.reason;
        default:
          switch (
            (typeof o.status == "string"
              ? o.then(_l, _l)
              : ((o.status = "pending"),
                o.then(
                  function (T) {
                    o.status === "pending" && ((o.status = "fulfilled"), (o.value = T));
                  },
                  function (T) {
                    o.status === "pending" && ((o.status = "rejected"), (o.reason = T));
                  }
                )),
            o.status)
          ) {
            case "fulfilled":
              return o.value;
            case "rejected":
              throw o.reason;
          }
      }
      throw o;
    }
    function p(o, T, _, D, Q) {
      var B = typeof o;
      (B === "undefined" || B === "boolean") && (o = null);
      var P = !1;
      if (o === null) P = !0;
      else
        switch (B) {
          case "bigint":
          case "string":
          case "number":
            P = !0;
            break;
          case "object":
            switch (o.$$typeof) {
              case g:
              case R:
                P = !0;
                break;
              case V:
                return (P = o._init), p(P(o._payload), T, _, D, Q);
            }
        }
      if (P)
        return (
          (Q = Q(o)),
          (P = D === "" ? "." + Rt(o, 0) : D),
          rt(Q)
            ? ((_ = ""),
              P != null && (_ = P.replace(et, "$&/") + "/"),
              p(Q, T, _, "", function (Be) {
                return Be;
              }))
            : Q != null && (Zl(Q) && (Q = Vt(Q, _ + (Q.key == null || (o && o.key === Q.key) ? "" : ("" + Q.key).replace(et, "$&/") + "/") + P)), T.push(Q)),
          1
        );
      P = 0;
      var Al = D === "" ? "." : D + ":";
      if (rt(o)) for (var xl = 0; xl < o.length; xl++) (D = o[xl]), (B = Al + Rt(D, xl)), (P += p(D, T, _, B, Q));
      else if (((xl = I(o)), typeof xl == "function")) for (o = xl.call(o), xl = 0; !(D = o.next()).done; ) (D = D.value), (B = Al + Rt(D, xl++)), (P += p(D, T, _, B, Q));
      else if (B === "object") {
        if (typeof o.then == "function") return p(El(o), T, _, D, Q);
        throw ((T = String(o)), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."));
      }
      return P;
    }
    function A(o, T, _) {
      if (o == null) return o;
      var D = [],
        Q = 0;
      return (
        p(o, D, "", "", function (B) {
          return T.call(_, B, Q++);
        }),
        D
      );
    }
    function Y(o) {
      if (o._status === -1) {
        var T = o._result;
        (T = T()),
          T.then(
            function (_) {
              (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = _));
            },
            function (_) {
              (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = _));
            }
          ),
          o._status === -1 && ((o._status = 0), (o._result = T));
      }
      if (o._status === 1) return o._result.default;
      throw o._result;
    }
    var il =
        typeof reportError == "function"
          ? reportError
          : function (o) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var T = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o), error: o });
                if (!window.dispatchEvent(T)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", o);
                return;
              }
              console.error(o);
            },
      W = {
        map: A,
        forEach: function (o, T, _) {
          A(
            o,
            function () {
              T.apply(this, arguments);
            },
            _
          );
        },
        count: function (o) {
          var T = 0;
          return (
            A(o, function () {
              T++;
            }),
            T
          );
        },
        toArray: function (o) {
          return (
            A(o, function (T) {
              return T;
            }) || []
          );
        },
        only: function (o) {
          if (!Zl(o)) throw Error("React.Children.only expected to receive a single React element child.");
          return o;
        },
      };
    return (
      (K.Activity = q),
      (K.Children = W),
      (K.Component = Gl),
      (K.Fragment = x),
      (K.Profiler = G),
      (K.PureComponent = jl),
      (K.StrictMode = r),
      (K.Suspense = M),
      (K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ll),
      (K.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (o) {
          return ll.H.useMemoCache(o);
        },
      }),
      (K.cache = function (o) {
        return function () {
          return o.apply(null, arguments);
        };
      }),
      (K.cacheSignal = function () {
        return null;
      }),
      (K.cloneElement = function (o, T, _) {
        if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
        var D = Yl({}, o.props),
          Q = o.key;
        if (T != null) for (B in (T.key !== void 0 && (Q = "" + T.key), T)) !Il.call(T, B) || B === "key" || B === "__self" || B === "__source" || (B === "ref" && T.ref === void 0) || (D[B] = T[B]);
        var B = arguments.length - 2;
        if (B === 1) D.children = _;
        else if (1 < B) {
          for (var P = Array(B), Al = 0; Al < B; Al++) P[Al] = arguments[Al + 2];
          D.children = P;
        }
        return tt(o.type, Q, D);
      }),
      (K.createContext = function (o) {
        return (o = { $$typeof: J, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null }), (o.Provider = o), (o.Consumer = { $$typeof: Z, _context: o }), o;
      }),
      (K.createElement = function (o, T, _) {
        var D,
          Q = {},
          B = null;
        if (T != null) for (D in (T.key !== void 0 && (B = "" + T.key), T)) Il.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (Q[D] = T[D]);
        var P = arguments.length - 2;
        if (P === 1) Q.children = _;
        else if (1 < P) {
          for (var Al = Array(P), xl = 0; xl < P; xl++) Al[xl] = arguments[xl + 2];
          Q.children = Al;
        }
        if (o && o.defaultProps) for (D in ((P = o.defaultProps), P)) Q[D] === void 0 && (Q[D] = P[D]);
        return tt(o, B, Q);
      }),
      (K.createRef = function () {
        return { current: null };
      }),
      (K.forwardRef = function (o) {
        return { $$typeof: $, render: o };
      }),
      (K.isValidElement = Zl),
      (K.lazy = function (o) {
        return { $$typeof: V, _payload: { _status: -1, _result: o }, _init: Y };
      }),
      (K.memo = function (o, T) {
        return { $$typeof: z, type: o, compare: T === void 0 ? null : T };
      }),
      (K.startTransition = function (o) {
        var T = ll.T,
          _ = {};
        ll.T = _;
        try {
          var D = o(),
            Q = ll.S;
          Q !== null && Q(_, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(_l, il);
        } catch (B) {
          il(B);
        } finally {
          T !== null && _.types !== null && (T.types = _.types), (ll.T = T);
        }
      }),
      (K.unstable_useCacheRefresh = function () {
        return ll.H.useCacheRefresh();
      }),
      (K.use = function (o) {
        return ll.H.use(o);
      }),
      (K.useActionState = function (o, T, _) {
        return ll.H.useActionState(o, T, _);
      }),
      (K.useCallback = function (o, T) {
        return ll.H.useCallback(o, T);
      }),
      (K.useContext = function (o) {
        return ll.H.useContext(o);
      }),
      (K.useDebugValue = function () {}),
      (K.useDeferredValue = function (o, T) {
        return ll.H.useDeferredValue(o, T);
      }),
      (K.useEffect = function (o, T) {
        return ll.H.useEffect(o, T);
      }),
      (K.useEffectEvent = function (o) {
        return ll.H.useEffectEvent(o);
      }),
      (K.useId = function () {
        return ll.H.useId();
      }),
      (K.useImperativeHandle = function (o, T, _) {
        return ll.H.useImperativeHandle(o, T, _);
      }),
      (K.useInsertionEffect = function (o, T) {
        return ll.H.useInsertionEffect(o, T);
      }),
      (K.useLayoutEffect = function (o, T) {
        return ll.H.useLayoutEffect(o, T);
      }),
      (K.useMemo = function (o, T) {
        return ll.H.useMemo(o, T);
      }),
      (K.useOptimistic = function (o, T) {
        return ll.H.useOptimistic(o, T);
      }),
      (K.useReducer = function (o, T, _) {
        return ll.H.useReducer(o, T, _);
      }),
      (K.useRef = function (o) {
        return ll.H.useRef(o);
      }),
      (K.useState = function (o) {
        return ll.H.useState(o);
      }),
      (K.useSyncExternalStore = function (o, T, _) {
        return ll.H.useSyncExternalStore(o, T, _);
      }),
      (K.useTransition = function () {
        return ll.H.useTransition();
      }),
      (K.version = "19.2.0"),
      K
    );
  }
  var Yf;
  function di() {
    return Yf || ((Yf = 1), (ri.exports = kd())), ri.exports;
  }
  var j = di();
  const Wd = Nf(j);
  var yi = { exports: {} },
    wa = {},
    hi = { exports: {} },
    mi = {};
  var Gf;
  function Fd() {
    return (
      Gf ||
        ((Gf = 1),
        (function (g) {
          function R(p, A) {
            var Y = p.length;
            p.push(A);
            l: for (; 0 < Y; ) {
              var il = (Y - 1) >>> 1,
                W = p[il];
              if (0 < G(W, A)) (p[il] = A), (p[Y] = W), (Y = il);
              else break l;
            }
          }
          function x(p) {
            return p.length === 0 ? null : p[0];
          }
          function r(p) {
            if (p.length === 0) return null;
            var A = p[0],
              Y = p.pop();
            if (Y !== A) {
              p[0] = Y;
              l: for (var il = 0, W = p.length, o = W >>> 1; il < o; ) {
                var T = 2 * (il + 1) - 1,
                  _ = p[T],
                  D = T + 1,
                  Q = p[D];
                if (0 > G(_, Y)) D < W && 0 > G(Q, _) ? ((p[il] = Q), (p[D] = Y), (il = D)) : ((p[il] = _), (p[T] = Y), (il = T));
                else if (D < W && 0 > G(Q, Y)) (p[il] = Q), (p[D] = Y), (il = D);
                else break l;
              }
            }
            return A;
          }
          function G(p, A) {
            var Y = p.sortIndex - A.sortIndex;
            return Y !== 0 ? Y : p.id - A.id;
          }
          if (((g.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
            var Z = performance;
            g.unstable_now = function () {
              return Z.now();
            };
          } else {
            var J = Date,
              $ = J.now();
            g.unstable_now = function () {
              return J.now() - $;
            };
          }
          var M = [],
            z = [],
            V = 1,
            q = null,
            k = 3,
            I = !1,
            cl = !1,
            Yl = !1,
            lt = !1,
            Gl = typeof setTimeout == "function" ? setTimeout : null,
            Ut = typeof clearTimeout == "function" ? clearTimeout : null,
            jl = typeof setImmediate < "u" ? setImmediate : null;
          function $l(p) {
            for (var A = x(z); A !== null; ) {
              if (A.callback === null) r(z);
              else if (A.startTime <= p) r(z), (A.sortIndex = A.expirationTime), R(M, A);
              else break;
              A = x(z);
            }
          }
          function rt(p) {
            if (((Yl = !1), $l(p), !cl))
              if (x(M) !== null) (cl = !0), _l || ((_l = !0), Ul());
              else {
                var A = x(z);
                A !== null && El(rt, A.startTime - p);
              }
          }
          var _l = !1,
            ll = -1,
            Il = 5,
            tt = -1;
          function Vt() {
            return lt ? !0 : !(g.unstable_now() - tt < Il);
          }
          function Zl() {
            if (((lt = !1), _l)) {
              var p = g.unstable_now();
              tt = p;
              var A = !0;
              try {
                l: {
                  (cl = !1), Yl && ((Yl = !1), Ut(ll), (ll = -1)), (I = !0);
                  var Y = k;
                  try {
                    t: {
                      for ($l(p), q = x(M); q !== null && !(q.expirationTime > p && Vt()); ) {
                        var il = q.callback;
                        if (typeof il == "function") {
                          (q.callback = null), (k = q.priorityLevel);
                          var W = il(q.expirationTime <= p);
                          if (((p = g.unstable_now()), typeof W == "function")) {
                            (q.callback = W), $l(p), (A = !0);
                            break t;
                          }
                          q === x(M) && r(M), $l(p);
                        } else r(M);
                        q = x(M);
                      }
                      if (q !== null) A = !0;
                      else {
                        var o = x(z);
                        o !== null && El(rt, o.startTime - p), (A = !1);
                      }
                    }
                    break l;
                  } finally {
                    (q = null), (k = Y), (I = !1);
                  }
                  A = void 0;
                }
              } finally {
                A ? Ul() : (_l = !1);
              }
            }
          }
          var Ul;
          if (typeof jl == "function")
            Ul = function () {
              jl(Zl);
            };
          else if (typeof MessageChannel < "u") {
            var et = new MessageChannel(),
              Rt = et.port2;
            (et.port1.onmessage = Zl),
              (Ul = function () {
                Rt.postMessage(null);
              });
          } else
            Ul = function () {
              Gl(Zl, 0);
            };
          function El(p, A) {
            ll = Gl(function () {
              p(g.unstable_now());
            }, A);
          }
          (g.unstable_IdlePriority = 5),
            (g.unstable_ImmediatePriority = 1),
            (g.unstable_LowPriority = 4),
            (g.unstable_NormalPriority = 3),
            (g.unstable_Profiling = null),
            (g.unstable_UserBlockingPriority = 2),
            (g.unstable_cancelCallback = function (p) {
              p.callback = null;
            }),
            (g.unstable_forceFrameRate = function (p) {
              0 > p || 125 < p ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (Il = 0 < p ? Math.floor(1e3 / p) : 5);
            }),
            (g.unstable_getCurrentPriorityLevel = function () {
              return k;
            }),
            (g.unstable_next = function (p) {
              switch (k) {
                case 1:
                case 2:
                case 3:
                  var A = 3;
                  break;
                default:
                  A = k;
              }
              var Y = k;
              k = A;
              try {
                return p();
              } finally {
                k = Y;
              }
            }),
            (g.unstable_requestPaint = function () {
              lt = !0;
            }),
            (g.unstable_runWithPriority = function (p, A) {
              switch (p) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  p = 3;
              }
              var Y = k;
              k = p;
              try {
                return A();
              } finally {
                k = Y;
              }
            }),
            (g.unstable_scheduleCallback = function (p, A, Y) {
              var il = g.unstable_now();
              switch ((typeof Y == "object" && Y !== null ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? il + Y : il)) : (Y = il), p)) {
                case 1:
                  var W = -1;
                  break;
                case 2:
                  W = 250;
                  break;
                case 5:
                  W = 1073741823;
                  break;
                case 4:
                  W = 1e4;
                  break;
                default:
                  W = 5e3;
              }
              return (W = Y + W), (p = { id: V++, callback: A, priorityLevel: p, startTime: Y, expirationTime: W, sortIndex: -1 }), Y > il ? ((p.sortIndex = Y), R(z, p), x(M) === null && p === x(z) && (Yl ? (Ut(ll), (ll = -1)) : (Yl = !0), El(rt, Y - il))) : ((p.sortIndex = W), R(M, p), cl || I || ((cl = !0), _l || ((_l = !0), Ul()))), p;
            }),
            (g.unstable_shouldYield = Vt),
            (g.unstable_wrapCallback = function (p) {
              var A = k;
              return function () {
                var Y = k;
                k = A;
                try {
                  return p.apply(this, arguments);
                } finally {
                  k = Y;
                }
              };
            });
        })(mi)),
      mi
    );
  }
  var Xf;
  function $d() {
    return Xf || ((Xf = 1), (hi.exports = Fd())), hi.exports;
  }
  var vi = { exports: {} },
    Fl = {};
  var Qf;
  function Id() {
    if (Qf) return Fl;
    Qf = 1;
    var g = di();
    function R(M) {
      var z = "https://react.dev/errors/" + M;
      if (1 < arguments.length) {
        z += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var V = 2; V < arguments.length; V++) z += "&args[]=" + encodeURIComponent(arguments[V]);
      }
      return "Minified React error #" + M + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function x() {}
    var r = {
        d: {
          f: x,
          r: function () {
            throw Error(R(522));
          },
          D: x,
          C: x,
          L: x,
          m: x,
          X: x,
          S: x,
          M: x,
        },
        p: 0,
        findDOMNode: null,
      },
      G = Symbol.for("react.portal");
    function Z(M, z, V) {
      var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: G, key: q == null ? null : "" + q, children: M, containerInfo: z, implementation: V };
    }
    var J = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function $(M, z) {
      if (M === "font") return "";
      if (typeof z == "string") return z === "use-credentials" ? z : "";
    }
    return (
      (Fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
      (Fl.createPortal = function (M, z) {
        var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!z || (z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)) throw Error(R(299));
        return Z(M, z, null, V);
      }),
      (Fl.flushSync = function (M) {
        var z = J.T,
          V = r.p;
        try {
          if (((J.T = null), (r.p = 2), M)) return M();
        } finally {
          (J.T = z), (r.p = V), r.d.f();
        }
      }),
      (Fl.preconnect = function (M, z) {
        typeof M == "string" && (z ? ((z = z.crossOrigin), (z = typeof z == "string" ? (z === "use-credentials" ? z : "") : void 0)) : (z = null), r.d.C(M, z));
      }),
      (Fl.prefetchDNS = function (M) {
        typeof M == "string" && r.d.D(M);
      }),
      (Fl.preinit = function (M, z) {
        if (typeof M == "string" && z && typeof z.as == "string") {
          var V = z.as,
            q = $(V, z.crossOrigin),
            k = typeof z.integrity == "string" ? z.integrity : void 0,
            I = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
          V === "style" ? r.d.S(M, typeof z.precedence == "string" ? z.precedence : void 0, { crossOrigin: q, integrity: k, fetchPriority: I }) : V === "script" && r.d.X(M, { crossOrigin: q, integrity: k, fetchPriority: I, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
        }
      }),
      (Fl.preinitModule = function (M, z) {
        if (typeof M == "string")
          if (typeof z == "object" && z !== null) {
            if (z.as == null || z.as === "script") {
              var V = $(z.as, z.crossOrigin);
              r.d.M(M, { crossOrigin: V, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
            }
          } else z == null && r.d.M(M);
      }),
      (Fl.preload = function (M, z) {
        if (typeof M == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
          var V = z.as,
            q = $(V, z.crossOrigin);
          r.d.L(M, V, {
            crossOrigin: q,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0,
            type: typeof z.type == "string" ? z.type : void 0,
            fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
            referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
            imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
            imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
            media: typeof z.media == "string" ? z.media : void 0,
          });
        }
      }),
      (Fl.preloadModule = function (M, z) {
        if (typeof M == "string")
          if (z) {
            var V = $(z.as, z.crossOrigin);
            r.d.m(M, { as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0, crossOrigin: V, integrity: typeof z.integrity == "string" ? z.integrity : void 0 });
          } else r.d.m(M);
      }),
      (Fl.requestFormReset = function (M) {
        r.d.r(M);
      }),
      (Fl.unstable_batchedUpdates = function (M, z) {
        return M(z);
      }),
      (Fl.useFormState = function (M, z, V) {
        return J.H.useFormState(M, z, V);
      }),
      (Fl.useFormStatus = function () {
        return J.H.useHostTransitionStatus();
      }),
      (Fl.version = "19.2.0"),
      Fl
    );
  }
  var Lf;
  function Zf() {
    if (Lf) return vi.exports;
    Lf = 1;
    function g() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
        } catch (R) {
          console.error(R);
        }
    }
    return g(), (vi.exports = Id()), vi.exports;
  }
  var Vf;
  function Pd() {
    if (Vf) return wa;
    Vf = 1;
    var g = $d(),
      R = di(),
      x = Zf();
    function r(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function G(l) {
      return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
    }
    function Z(l) {
      var t = l,
        e = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
        while (l);
      }
      return t.tag === 3 ? e : null;
    }
    function J(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function $(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function M(l) {
      if (Z(l) !== l) throw Error(r(188));
    }
    function z(l) {
      var t = l.alternate;
      if (!t) {
        if (((t = Z(l)), t === null)) throw Error(r(188));
        return t !== l ? null : l;
      }
      for (var e = l, a = t; ; ) {
        var u = e.return;
        if (u === null) break;
        var n = u.alternate;
        if (n === null) {
          if (((a = u.return), a !== null)) {
            e = a;
            continue;
          }
          break;
        }
        if (u.child === n.child) {
          for (n = u.child; n; ) {
            if (n === e) return M(u), l;
            if (n === a) return M(u), t;
            n = n.sibling;
          }
          throw Error(r(188));
        }
        if (e.return !== a.return) (e = u), (a = n);
        else {
          for (var i = !1, c = u.child; c; ) {
            if (c === e) {
              (i = !0), (e = u), (a = n);
              break;
            }
            if (c === a) {
              (i = !0), (a = u), (e = n);
              break;
            }
            c = c.sibling;
          }
          if (!i) {
            for (c = n.child; c; ) {
              if (c === e) {
                (i = !0), (e = n), (a = u);
                break;
              }
              if (c === a) {
                (i = !0), (a = n), (e = u);
                break;
              }
              c = c.sibling;
            }
            if (!i) throw Error(r(189));
          }
        }
        if (e.alternate !== a) throw Error(r(190));
      }
      if (e.tag !== 3) throw Error(r(188));
      return e.stateNode.current === e ? l : t;
    }
    function V(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (((t = V(l)), t !== null)) return t;
        l = l.sibling;
      }
      return null;
    }
    var q = Object.assign,
      k = Symbol.for("react.element"),
      I = Symbol.for("react.transitional.element"),
      cl = Symbol.for("react.portal"),
      Yl = Symbol.for("react.fragment"),
      lt = Symbol.for("react.strict_mode"),
      Gl = Symbol.for("react.profiler"),
      Ut = Symbol.for("react.consumer"),
      jl = Symbol.for("react.context"),
      $l = Symbol.for("react.forward_ref"),
      rt = Symbol.for("react.suspense"),
      _l = Symbol.for("react.suspense_list"),
      ll = Symbol.for("react.memo"),
      Il = Symbol.for("react.lazy"),
      tt = Symbol.for("react.activity"),
      Vt = Symbol.for("react.memo_cache_sentinel"),
      Zl = Symbol.iterator;
    function Ul(l) {
      return l === null || typeof l != "object" ? null : ((l = (Zl && l[Zl]) || l["@@iterator"]), typeof l == "function" ? l : null);
    }
    var et = Symbol.for("react.client.reference");
    function Rt(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === et ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case Yl:
          return "Fragment";
        case Gl:
          return "Profiler";
        case lt:
          return "StrictMode";
        case rt:
          return "Suspense";
        case _l:
          return "SuspenseList";
        case tt:
          return "Activity";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case cl:
            return "Portal";
          case jl:
            return l.displayName || "Context";
          case Ut:
            return (l._context.displayName || "Context") + ".Consumer";
          case $l:
            var t = l.render;
            return (l = l.displayName), l || ((l = t.displayName || t.name || ""), (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")), l;
          case ll:
            return (t = l.displayName || null), t !== null ? t : Rt(l.type) || "Memo";
          case Il:
            (t = l._payload), (l = l._init);
            try {
              return Rt(l(t));
            } catch {}
        }
      return null;
    }
    var El = Array.isArray,
      p = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Y = { pending: !1, data: null, method: null, action: null },
      il = [],
      W = -1;
    function o(l) {
      return { current: l };
    }
    function T(l) {
      0 > W || ((l.current = il[W]), (il[W] = null), W--);
    }
    function _(l, t) {
      W++, (il[W] = l.current), (l.current = t);
    }
    var D = o(null),
      Q = o(null),
      B = o(null),
      P = o(null);
    function Al(l, t) {
      switch ((_(B, t), _(Q, l), _(D, null), t.nodeType)) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? md(l) : 0;
          break;
        default:
          if (((l = t.tagName), (t = t.namespaceURI))) (t = md(t)), (l = vd(t, l));
          else
            switch (l) {
              case "svg":
                l = 1;
                break;
              case "math":
                l = 2;
                break;
              default:
                l = 0;
            }
      }
      T(D), _(D, l);
    }
    function xl() {
      T(D), T(Q), T(B);
    }
    function Be(l) {
      l.memoizedState !== null && _(P, l);
      var t = D.current,
        e = vd(t, l.type);
      t !== e && (_(Q, l), _(D, e));
    }
    function ea(l) {
      Q.current === l && (T(D), T(Q)), P.current === l && (T(P), (Qu._currentValue = Y));
    }
    var $a, Ju;
    function Kt(l) {
      if ($a === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ($a = (t && t[1]) || ""),
            (Ju =
              -1 <
              e.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
        }
      return (
        `
` +
        $a +
        l +
        Ju
      );
    }
    var aa = !1;
    function Ht(l, t) {
      if (!l || aa) return "";
      aa = !0;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var E = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(E.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(E, []);
                  } catch (v) {
                    var m = v;
                  }
                  Reflect.construct(l, [], E);
                } else {
                  try {
                    E.call();
                  } catch (v) {
                    m = v;
                  }
                  l.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  m = v;
                }
                (E = l()) && typeof E.catch == "function" && E.catch(function () {});
              }
            } catch (v) {
              if (v && m && typeof v.stack == "string") return [v.stack, m.stack];
            }
            return [null, null];
          },
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var n = a.DetermineComponentFrameRoot(),
          i = n[0],
          c = n[1];
        if (i && c) {
          var f = i.split(`
`),
            h = c.split(`
`);
          for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (a === f.length || u === h.length) for (a = f.length - 1, u = h.length - 1; 1 <= a && 0 <= u && f[a] !== h[u]; ) u--;
          for (; 1 <= a && 0 <= u; a--, u--)
            if (f[a] !== h[u]) {
              if (a !== 1 || u !== 1)
                do
                  if ((a--, u--, 0 > u || f[a] !== h[u])) {
                    var S =
                      `
` + f[a].replace(" at new ", " at ");
                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                  }
                while (1 <= a && 0 <= u);
              break;
            }
        }
      } finally {
        (aa = !1), (Error.prepareStackTrace = e);
      }
      return (e = l ? l.displayName || l.name : "") ? Kt(e) : "";
    }
    function wu(l, t) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return Kt(l.type);
        case 16:
          return Kt("Lazy");
        case 13:
          return l.child !== t && t !== null ? Kt("Suspense Fallback") : Kt("Suspense");
        case 19:
          return Kt("SuspenseList");
        case 0:
        case 15:
          return Ht(l.type, !1);
        case 11:
          return Ht(l.type.render, !1);
        case 1:
          return Ht(l.type, !0);
        case 31:
          return Kt("Activity");
        default:
          return "";
      }
    }
    function Nt(l) {
      try {
        var t = "",
          e = null;
        do (t += wu(l, e)), (e = l), (l = l.return);
        while (l);
        return t;
      } catch (a) {
        return (
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack
        );
      }
    }
    var ua = Object.prototype.hasOwnProperty,
      Ia = g.unstable_scheduleCallback,
      na = g.unstable_cancelCallback,
      Si = g.unstable_shouldYield,
      pi = g.unstable_requestPaint,
      Vl = g.unstable_now,
      bi = g.unstable_getCurrentPriorityLevel,
      ku = g.unstable_ImmediatePriority,
      Wu = g.unstable_UserBlockingPriority,
      je = g.unstable_NormalPriority,
      Pa = g.unstable_LowPriority,
      ia = g.unstable_IdlePriority,
      C = g.log,
      U = g.unstable_setDisableYieldValue,
      dl = null,
      fl = null;
    function at(l) {
      if ((typeof C == "function" && U(l), fl && typeof fl.setStrictMode == "function"))
        try {
          fl.setStrictMode(dl, l);
        } catch {}
    }
    var Sl = Math.clz32 ? Math.clz32 : Xl,
      Jt = Math.log,
      pt = Math.LN2;
    function Xl(l) {
      return (l >>>= 0), l === 0 ? 32 : (31 - ((Jt(l) / pt) | 0)) | 0;
    }
    var bt = 256,
      Bt = 262144,
      ca = 4194304;
    function qe(l) {
      var t = l & 42;
      if (t !== 0) return t;
      switch (l & -l) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function Fu(l, t, e) {
      var a = l.pendingLanes;
      if (a === 0) return 0;
      var u = 0,
        n = l.suspendedLanes,
        i = l.pingedLanes;
      l = l.warmLanes;
      var c = a & 134217727;
      return c !== 0 ? ((a = c & ~n), a !== 0 ? (u = qe(a)) : ((i &= c), i !== 0 ? (u = qe(i)) : e || ((e = c & ~l), e !== 0 && (u = qe(e))))) : ((c = a & ~n), c !== 0 ? (u = qe(c)) : i !== 0 ? (u = qe(i)) : e || ((e = a & ~l), e !== 0 && (u = qe(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && ((n = u & -u), (e = t & -t), n >= e || (n === 32 && (e & 4194048) !== 0)) ? t : u;
    }
    function lu(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function z0(l, t) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Wf() {
      var l = ca;
      return (ca <<= 1), (ca & 62914560) === 0 && (ca = 4194304), l;
    }
    function zi(l) {
      for (var t = [], e = 0; 31 > e; e++) t.push(l);
      return t;
    }
    function tu(l, t) {
      (l.pendingLanes |= t), t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
    }
    function T0(l, t, e, a, u, n) {
      var i = l.pendingLanes;
      (l.pendingLanes = e), (l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0), (l.expiredLanes &= e), (l.entangledLanes &= e), (l.errorRecoveryDisabledLanes &= e), (l.shellSuspendCounter = 0);
      var c = l.entanglements,
        f = l.expirationTimes,
        h = l.hiddenUpdates;
      for (e = i & ~e; 0 < e; ) {
        var S = 31 - Sl(e),
          E = 1 << S;
        (c[S] = 0), (f[S] = -1);
        var m = h[S];
        if (m !== null)
          for (h[S] = null, S = 0; S < m.length; S++) {
            var v = m[S];
            v !== null && (v.lane &= -536870913);
          }
        e &= ~E;
      }
      a !== 0 && Ff(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
    }
    function Ff(l, t, e) {
      (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
      var a = 31 - Sl(t);
      (l.entangledLanes |= t), (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
    }
    function $f(l, t) {
      var e = (l.entangledLanes |= t);
      for (l = l.entanglements; e; ) {
        var a = 31 - Sl(e),
          u = 1 << a;
        (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
      }
    }
    function If(l, t) {
      var e = t & -t;
      return (e = (e & 42) !== 0 ? 1 : Ti(e)), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
    }
    function Ti(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function Ei(l) {
      return (l &= -l), 2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
    }
    function Pf() {
      var l = A.p;
      return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Gd(l.type));
    }
    function ls(l, t) {
      var e = A.p;
      try {
        return (A.p = l), t();
      } finally {
        A.p = e;
      }
    }
    var re = Math.random().toString(36).slice(2),
      Kl = "__reactFiber$" + re,
      ut = "__reactProps$" + re,
      fa = "__reactContainer$" + re,
      Ai = "__reactEvents$" + re,
      E0 = "__reactListeners$" + re,
      A0 = "__reactHandles$" + re,
      ts = "__reactResources$" + re,
      eu = "__reactMarker$" + re;
    function xi(l) {
      delete l[Kl], delete l[ut], delete l[Ai], delete l[E0], delete l[A0];
    }
    function sa(l) {
      var t = l[Kl];
      if (t) return t;
      for (var e = l.parentNode; e; ) {
        if ((t = e[fa] || e[Kl])) {
          if (((e = t.alternate), t.child !== null || (e !== null && e.child !== null)))
            for (l = Ed(l); l !== null; ) {
              if ((e = l[Kl])) return e;
              l = Ed(l);
            }
          return t;
        }
        (l = e), (e = l.parentNode);
      }
      return null;
    }
    function oa(l) {
      if ((l = l[Kl] || l[fa])) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function au(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(r(33));
    }
    function ra(l) {
      var t = l[ts];
      return t || (t = l[ts] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
    }
    function Ql(l) {
      l[eu] = !0;
    }
    var es = new Set(),
      as = {};
    function Ye(l, t) {
      da(l, t), da(l + "Capture", t);
    }
    function da(l, t) {
      for (as[l] = t, l = 0; l < t.length; l++) es.add(t[l]);
    }
    var x0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
      us = {},
      ns = {};
    function _0(l) {
      return ua.call(ns, l) ? !0 : ua.call(us, l) ? !1 : x0.test(l) ? (ns[l] = !0) : ((us[l] = !0), !1);
    }
    function $u(l, t, e) {
      if (_0(t))
        if (e === null) l.removeAttribute(t);
        else {
          switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
              l.removeAttribute(t);
              return;
            case "boolean":
              var a = t.toLowerCase().slice(0, 5);
              if (a !== "data-" && a !== "aria-") {
                l.removeAttribute(t);
                return;
              }
          }
          l.setAttribute(t, "" + e);
        }
    }
    function Iu(l, t, e) {
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, "" + e);
      }
    }
    function wt(l, t, e, a) {
      if (a === null) l.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(e);
            return;
        }
        l.setAttributeNS(t, e, "" + a);
      }
    }
    function zt(l) {
      switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return l;
        case "object":
          return l;
        default:
          return "";
      }
    }
    function is(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function O0(l, t, e) {
      var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
      if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var u = a.get,
          n = a.set;
        return (
          Object.defineProperty(l, t, {
            configurable: !0,
            get: function () {
              return u.call(this);
            },
            set: function (i) {
              (e = "" + i), n.call(this, i);
            },
          }),
          Object.defineProperty(l, t, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return e;
            },
            setValue: function (i) {
              e = "" + i;
            },
            stopTracking: function () {
              (l._valueTracker = null), delete l[t];
            },
          }
        );
      }
    }
    function _i(l) {
      if (!l._valueTracker) {
        var t = is(l) ? "checked" : "value";
        l._valueTracker = O0(l, t, "" + l[t]);
      }
    }
    function cs(l) {
      if (!l) return !1;
      var t = l._valueTracker;
      if (!t) return !0;
      var e = t.getValue(),
        a = "";
      return l && (a = is(l) ? (l.checked ? "true" : "false") : l.value), (l = a), l !== e ? (t.setValue(l), !0) : !1;
    }
    function Pu(l) {
      if (((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")) return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var M0 = /[\n"\\]/g;
    function Tt(l) {
      return l.replace(M0, function (t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Oi(l, t, e, a, u, n, i, c) {
      (l.name = ""),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? (l.type = i) : l.removeAttribute("type"),
        t != null ? (i === "number" ? ((t === 0 && l.value === "") || l.value != t) && (l.value = "" + zt(t)) : l.value !== "" + zt(t) && (l.value = "" + zt(t))) : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
        t != null ? Mi(l, i, zt(t)) : e != null ? Mi(l, i, zt(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? (l.name = "" + zt(c)) : l.removeAttribute("name");
    }
    function fs(l, t, e, a, u, n, i, c) {
      if ((n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null)) {
        if (!((n !== "submit" && n !== "reset") || t != null)) {
          _i(l);
          return;
        }
        (e = e != null ? "" + zt(e) : ""), (t = t != null ? "" + zt(t) : e), c || t === l.value || (l.value = t), (l.defaultValue = t);
      }
      (a = a ?? u), (a = typeof a != "function" && typeof a != "symbol" && !!a), (l.checked = c ? l.checked : !!a), (l.defaultChecked = !!a), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), _i(l);
    }
    function Mi(l, t, e) {
      (t === "number" && Pu(l.ownerDocument) === l) || l.defaultValue === "" + e || (l.defaultValue = "" + e);
    }
    function ya(l, t, e, a) {
      if (((l = l.options), t)) {
        t = {};
        for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
        for (e = 0; e < l.length; e++) (u = t.hasOwnProperty("$" + l[e].value)), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
      } else {
        for (e = "" + zt(e), t = null, u = 0; u < l.length; u++) {
          if (l[u].value === e) {
            (l[u].selected = !0), a && (l[u].defaultSelected = !0);
            return;
          }
          t !== null || l[u].disabled || (t = l[u]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ss(l, t, e) {
      if (t != null && ((t = "" + zt(t)), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = e != null ? "" + zt(e) : "";
    }
    function os(l, t, e, a) {
      if (t == null) {
        if (a != null) {
          if (e != null) throw Error(r(92));
          if (El(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), (t = e);
      }
      (e = zt(t)), (l.defaultValue = e), (a = l.textContent), a === e && a !== "" && a !== null && (l.value = a), _i(l);
    }
    function ha(l, t) {
      if (t) {
        var e = l.firstChild;
        if (e && e === l.lastChild && e.nodeType === 3) {
          e.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var D0 = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function rs(l, t, e) {
      var a = t.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? (a ? l.setProperty(t, "") : t === "float" ? (l.cssFloat = "") : (l[t] = "")) : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || D0.has(t) ? (t === "float" ? (l.cssFloat = e) : (l[t] = ("" + e).trim())) : (l[t] = e + "px");
    }
    function ds(l, t, e) {
      if (t != null && typeof t != "object") throw Error(r(62));
      if (((l = l.style), e != null)) {
        for (var a in e) !e.hasOwnProperty(a) || (t != null && t.hasOwnProperty(a)) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? (l.cssFloat = "") : (l[a] = ""));
        for (var u in t) (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && rs(l, u, a);
      } else for (var n in t) t.hasOwnProperty(n) && rs(l, n, t[n]);
    }
    function Di(l) {
      if (l.indexOf("-") === -1) return !1;
      switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var C0 = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      U0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ln(l) {
      return U0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function kt() {}
    var Ci = null;
    function Ui(l) {
      return (l = l.target || l.srcElement || window), l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var ma = null,
      va = null;
    function ys(l) {
      var t = oa(l);
      if (t && (l = t.stateNode)) {
        var e = l[ut] || null;
        l: switch (((l = t.stateNode), t.type)) {
          case "input":
            if ((Oi(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), (t = e.name), e.type === "radio" && t != null)) {
              for (e = l; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + Tt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                var a = e[t];
                if (a !== l && a.form === l.form) {
                  var u = a[ut] || null;
                  if (!u) throw Error(r(90));
                  Oi(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (t = 0; t < e.length; t++) (a = e[t]), a.form === l.form && cs(a);
            }
            break l;
          case "textarea":
            ss(l, e.value, e.defaultValue);
            break l;
          case "select":
            (t = e.value), t != null && ya(l, !!e.multiple, t, !1);
        }
      }
    }
    var Ri = !1;
    function hs(l, t, e) {
      if (Ri) return l(t, e);
      Ri = !0;
      try {
        var a = l(t);
        return a;
      } finally {
        if (((Ri = !1), (ma !== null || va !== null) && (Ln(), ma && ((t = ma), (l = va), (va = ma = null), ys(t), l)))) for (t = 0; t < l.length; t++) ys(l[t]);
      }
    }
    function uu(l, t) {
      var e = l.stateNode;
      if (e === null) return null;
      var a = e[ut] || null;
      if (a === null) return null;
      e = a[t];
      l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || ((l = l.type), (a = !(l === "button" || l === "input" || l === "select" || l === "textarea"))), (l = !a);
          break l;
        default:
          l = !1;
      }
      if (l) return null;
      if (e && typeof e != "function") throw Error(r(231, t, typeof e));
      return e;
    }
    var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
      Hi = !1;
    if (Wt)
      try {
        var nu = {};
        Object.defineProperty(nu, "passive", {
          get: function () {
            Hi = !0;
          },
        }),
          window.addEventListener("test", nu, nu),
          window.removeEventListener("test", nu, nu);
      } catch {
        Hi = !1;
      }
    var de = null,
      Ni = null,
      tn = null;
    function ms() {
      if (tn) return tn;
      var l,
        t = Ni,
        e = t.length,
        a,
        u = "value" in de ? de.value : de.textContent,
        n = u.length;
      for (l = 0; l < e && t[l] === u[l]; l++);
      var i = e - l;
      for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
      return (tn = u.slice(l, 1 < a ? 1 - a : void 0));
    }
    function en(l) {
      var t = l.keyCode;
      return "charCode" in l ? ((l = l.charCode), l === 0 && t === 13 && (l = 13)) : (l = t), l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function an() {
      return !0;
    }
    function vs() {
      return !1;
    }
    function nt(l) {
      function t(e, a, u, n, i) {
        (this._reactName = e), (this._targetInst = u), (this.type = a), (this.nativeEvent = n), (this.target = i), (this.currentTarget = null);
        for (var c in l) l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
        return (this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? an : vs), (this.isPropagationStopped = vs), this;
      }
      return (
        q(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), (this.isDefaultPrevented = an));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), (this.isPropagationStopped = an));
          },
          persist: function () {},
          isPersistent: an,
        }),
        t
      );
    }
    var Ge = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (l) {
          return l.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      un = nt(Ge),
      iu = q({}, Ge, { view: 0, detail: 0 }),
      R0 = nt(iu),
      Bi,
      ji,
      cu,
      nn = q({}, iu, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Yi,
        button: 0,
        buttons: 0,
        relatedTarget: function (l) {
          return l.relatedTarget === void 0 ? (l.fromElement === l.srcElement ? l.toElement : l.fromElement) : l.relatedTarget;
        },
        movementX: function (l) {
          return "movementX" in l ? l.movementX : (l !== cu && (cu && l.type === "mousemove" ? ((Bi = l.screenX - cu.screenX), (ji = l.screenY - cu.screenY)) : (ji = Bi = 0), (cu = l)), Bi);
        },
        movementY: function (l) {
          return "movementY" in l ? l.movementY : ji;
        },
      }),
      gs = nt(nn),
      H0 = q({}, nn, { dataTransfer: 0 }),
      N0 = nt(H0),
      B0 = q({}, iu, { relatedTarget: 0 }),
      qi = nt(B0),
      j0 = q({}, Ge, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      q0 = nt(j0),
      Y0 = q({}, Ge, {
        clipboardData: function (l) {
          return "clipboardData" in l ? l.clipboardData : window.clipboardData;
        },
      }),
      G0 = nt(Y0),
      X0 = q({}, Ge, { data: 0 }),
      Ss = nt(X0),
      Q0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
      L0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
      Z0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function V0(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = Z0[l]) ? !!t[l] : !1;
    }
    function Yi() {
      return V0;
    }
    var K0 = q({}, iu, {
        key: function (l) {
          if (l.key) {
            var t = Q0[l.key] || l.key;
            if (t !== "Unidentified") return t;
          }
          return l.type === "keypress" ? ((l = en(l)), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? L0[l.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Yi,
        charCode: function (l) {
          return l.type === "keypress" ? en(l) : 0;
        },
        keyCode: function (l) {
          return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
        },
        which: function (l) {
          return l.type === "keypress" ? en(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
        },
      }),
      J0 = nt(K0),
      w0 = q({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
      ps = nt(w0),
      k0 = q({}, iu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yi }),
      W0 = nt(k0),
      F0 = q({}, Ge, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      $0 = nt(F0),
      I0 = q({}, nn, {
        deltaX: function (l) {
          return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
        },
        deltaY: function (l) {
          return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      P0 = nt(I0),
      ly = q({}, Ge, { newState: 0, oldState: 0 }),
      ty = nt(ly),
      ey = [9, 13, 27, 32],
      Gi = Wt && "CompositionEvent" in window,
      fu = null;
    Wt && "documentMode" in document && (fu = document.documentMode);
    var ay = Wt && "TextEvent" in window && !fu,
      bs = Wt && (!Gi || (fu && 8 < fu && 11 >= fu)),
      zs = " ",
      Ts = !1;
    function Es(l, t) {
      switch (l) {
        case "keyup":
          return ey.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function As(l) {
      return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
    }
    var ga = !1;
    function uy(l, t) {
      switch (l) {
        case "compositionend":
          return As(t);
        case "keypress":
          return t.which !== 32 ? null : ((Ts = !0), zs);
        case "textInput":
          return (l = t.data), l === zs && Ts ? null : l;
        default:
          return null;
      }
    }
    function ny(l, t) {
      if (ga) return l === "compositionend" || (!Gi && Es(l, t)) ? ((l = ms()), (tn = Ni = de = null), (ga = !1), l) : null;
      switch (l) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bs && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var iy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function xs(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!iy[l.type] : t === "textarea";
    }
    function _s(l, t, e, a) {
      ma ? (va ? va.push(a) : (va = [a])) : (ma = a), (t = Wn(t, "onChange")), 0 < t.length && ((e = new un("onChange", "change", null, e, a)), l.push({ event: e, listeners: t }));
    }
    var su = null,
      ou = null;
    function cy(l) {
      sd(l, 0);
    }
    function cn(l) {
      var t = au(l);
      if (cs(t)) return l;
    }
    function Os(l, t) {
      if (l === "change") return t;
    }
    var Ms = !1;
    if (Wt) {
      var Xi;
      if (Wt) {
        var Qi = "oninput" in document;
        if (!Qi) {
          var Ds = document.createElement("div");
          Ds.setAttribute("oninput", "return;"), (Qi = typeof Ds.oninput == "function");
        }
        Xi = Qi;
      } else Xi = !1;
      Ms = Xi && (!document.documentMode || 9 < document.documentMode);
    }
    function Cs() {
      su && (su.detachEvent("onpropertychange", Us), (ou = su = null));
    }
    function Us(l) {
      if (l.propertyName === "value" && cn(ou)) {
        var t = [];
        _s(t, ou, l, Ui(l)), hs(cy, t);
      }
    }
    function fy(l, t, e) {
      l === "focusin" ? (Cs(), (su = t), (ou = e), su.attachEvent("onpropertychange", Us)) : l === "focusout" && Cs();
    }
    function sy(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return cn(ou);
    }
    function oy(l, t) {
      if (l === "click") return cn(t);
    }
    function ry(l, t) {
      if (l === "input" || l === "change") return cn(t);
    }
    function dy(l, t) {
      return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
    }
    var dt = typeof Object.is == "function" ? Object.is : dy;
    function ru(l, t) {
      if (dt(l, t)) return !0;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
      var e = Object.keys(l),
        a = Object.keys(t);
      if (e.length !== a.length) return !1;
      for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!ua.call(t, u) || !dt(l[u], t[u])) return !1;
      }
      return !0;
    }
    function Rs(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function Hs(l, t) {
      var e = Rs(l);
      l = 0;
      for (var a; e; ) {
        if (e.nodeType === 3) {
          if (((a = l + e.textContent.length), l <= t && a >= t)) return { node: e, offset: t - l };
          l = a;
        }
        l: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break l;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = Rs(e);
      }
    }
    function Ns(l, t) {
      return l && t ? (l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ns(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1) : !1;
    }
    function Bs(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = Pu(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var e = typeof t.contentWindow.location.href == "string";
        } catch {
          e = !1;
        }
        if (e) l = t.contentWindow;
        else break;
        t = Pu(l.document);
      }
      return t;
    }
    function Li(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && ((t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password")) || t === "textarea" || l.contentEditable === "true");
    }
    var yy = Wt && "documentMode" in document && 11 >= document.documentMode,
      Sa = null,
      Zi = null,
      du = null,
      Vi = !1;
    function js(l, t, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Vi ||
        Sa == null ||
        Sa !== Pu(a) ||
        ((a = Sa), "selectionStart" in a && Li(a) ? (a = { start: a.selectionStart, end: a.selectionEnd }) : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()), (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })), (du && ru(du, a)) || ((du = a), (a = Wn(Zi, "onSelect")), 0 < a.length && ((t = new un("onSelect", "select", null, t, e)), l.push({ event: t, listeners: a }), (t.target = Sa))));
    }
    function Xe(l, t) {
      var e = {};
      return (e[l.toLowerCase()] = t.toLowerCase()), (e["Webkit" + l] = "webkit" + t), (e["Moz" + l] = "moz" + t), e;
    }
    var pa = { animationend: Xe("Animation", "AnimationEnd"), animationiteration: Xe("Animation", "AnimationIteration"), animationstart: Xe("Animation", "AnimationStart"), transitionrun: Xe("Transition", "TransitionRun"), transitionstart: Xe("Transition", "TransitionStart"), transitioncancel: Xe("Transition", "TransitionCancel"), transitionend: Xe("Transition", "TransitionEnd") },
      Ki = {},
      qs = {};
    Wt && ((qs = document.createElement("div").style), "AnimationEvent" in window || (delete pa.animationend.animation, delete pa.animationiteration.animation, delete pa.animationstart.animation), "TransitionEvent" in window || delete pa.transitionend.transition);
    function Qe(l) {
      if (Ki[l]) return Ki[l];
      if (!pa[l]) return l;
      var t = pa[l],
        e;
      for (e in t) if (t.hasOwnProperty(e) && e in qs) return (Ki[l] = t[e]);
      return l;
    }
    var Ys = Qe("animationend"),
      Gs = Qe("animationiteration"),
      Xs = Qe("animationstart"),
      hy = Qe("transitionrun"),
      my = Qe("transitionstart"),
      vy = Qe("transitioncancel"),
      Qs = Qe("transitionend"),
      Ls = new Map(),
      Ji =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    Ji.push("scrollEnd");
    function jt(l, t) {
      Ls.set(l, t), Ye(t, [l]);
    }
    var fn =
        typeof reportError == "function"
          ? reportError
          : function (l) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", l);
                return;
              }
              console.error(l);
            },
      Et = [],
      ba = 0,
      wi = 0;
    function sn() {
      for (var l = ba, t = (wi = ba = 0); t < l; ) {
        var e = Et[t];
        Et[t++] = null;
        var a = Et[t];
        Et[t++] = null;
        var u = Et[t];
        Et[t++] = null;
        var n = Et[t];
        if (((Et[t++] = null), a !== null && u !== null)) {
          var i = a.pending;
          i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u);
        }
        n !== 0 && Zs(e, u, n);
      }
    }
    function on(l, t, e, a) {
      (Et[ba++] = l), (Et[ba++] = t), (Et[ba++] = e), (Et[ba++] = a), (wi |= a), (l.lanes |= a), (l = l.alternate), l !== null && (l.lanes |= a);
    }
    function ki(l, t, e, a) {
      return on(l, t, e, a), rn(l);
    }
    function Le(l, t) {
      return on(l, null, null, t), rn(l);
    }
    function Zs(l, t, e) {
      l.lanes |= e;
      var a = l.alternate;
      a !== null && (a.lanes |= e);
      for (var u = !1, n = l.return; n !== null; ) (n.childLanes |= e), (a = n.alternate), a !== null && (a.childLanes |= e), n.tag === 22 && ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)), (l = n), (n = n.return);
      return l.tag === 3 ? ((n = l.stateNode), u && t !== null && ((u = 31 - Sl(e)), (l = n.hiddenUpdates), (a = l[u]), a === null ? (l[u] = [t]) : a.push(t), (t.lane = e | 536870912)), n) : null;
    }
    function rn(l) {
      if (50 < Nu) throw ((Nu = 0), (af = null), Error(r(185)));
      for (var t = l.return; t !== null; ) (l = t), (t = l.return);
      return l.tag === 3 ? l.stateNode : null;
    }
    var za = {};
    function gy(l, t, e, a) {
      (this.tag = l), (this.key = e), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.refCleanup = this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = a), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
    }
    function yt(l, t, e, a) {
      return new gy(l, t, e, a);
    }
    function Wi(l) {
      return (l = l.prototype), !(!l || !l.isReactComponent);
    }
    function Ft(l, t) {
      var e = l.alternate;
      return (
        e === null ? ((e = yt(l.tag, t, l.key, l.mode)), (e.elementType = l.elementType), (e.type = l.type), (e.stateNode = l.stateNode), (e.alternate = l), (l.alternate = e)) : ((e.pendingProps = t), (e.type = l.type), (e.flags = 0), (e.subtreeFlags = 0), (e.deletions = null)),
        (e.flags = l.flags & 65011712),
        (e.childLanes = l.childLanes),
        (e.lanes = l.lanes),
        (e.child = l.child),
        (e.memoizedProps = l.memoizedProps),
        (e.memoizedState = l.memoizedState),
        (e.updateQueue = l.updateQueue),
        (t = l.dependencies),
        (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (e.sibling = l.sibling),
        (e.index = l.index),
        (e.ref = l.ref),
        (e.refCleanup = l.refCleanup),
        e
      );
    }
    function Vs(l, t) {
      l.flags &= 65011714;
      var e = l.alternate;
      return (
        e === null
          ? ((l.childLanes = 0), (l.lanes = t), (l.child = null), (l.subtreeFlags = 0), (l.memoizedProps = null), (l.memoizedState = null), (l.updateQueue = null), (l.dependencies = null), (l.stateNode = null))
          : ((l.childLanes = e.childLanes), (l.lanes = e.lanes), (l.child = e.child), (l.subtreeFlags = 0), (l.deletions = null), (l.memoizedProps = e.memoizedProps), (l.memoizedState = e.memoizedState), (l.updateQueue = e.updateQueue), (l.type = e.type), (t = e.dependencies), (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        l
      );
    }
    function dn(l, t, e, a, u, n) {
      var i = 0;
      if (((a = l), typeof l == "function")) Wi(l) && (i = 1);
      else if (typeof l == "string") i = Th(l, e, D.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else
        l: switch (l) {
          case tt:
            return (l = yt(31, e, t, u)), (l.elementType = tt), (l.lanes = n), l;
          case Yl:
            return Ze(e.children, u, n, t);
          case lt:
            (i = 8), (u |= 24);
            break;
          case Gl:
            return (l = yt(12, e, t, u | 2)), (l.elementType = Gl), (l.lanes = n), l;
          case rt:
            return (l = yt(13, e, t, u)), (l.elementType = rt), (l.lanes = n), l;
          case _l:
            return (l = yt(19, e, t, u)), (l.elementType = _l), (l.lanes = n), l;
          default:
            if (typeof l == "object" && l !== null)
              switch (l.$$typeof) {
                case jl:
                  i = 10;
                  break l;
                case Ut:
                  i = 9;
                  break l;
                case $l:
                  i = 11;
                  break l;
                case ll:
                  i = 14;
                  break l;
                case Il:
                  (i = 16), (a = null);
                  break l;
              }
            (i = 29), (e = Error(r(130, l === null ? "null" : typeof l, ""))), (a = null);
        }
      return (t = yt(i, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t;
    }
    function Ze(l, t, e, a) {
      return (l = yt(7, l, a, t)), (l.lanes = e), l;
    }
    function Fi(l, t, e) {
      return (l = yt(6, l, null, t)), (l.lanes = e), l;
    }
    function Ks(l) {
      var t = yt(18, null, null, 0);
      return (t.stateNode = l), t;
    }
    function $i(l, t, e) {
      return (t = yt(4, l.children !== null ? l.children : [], l.key, t)), (t.lanes = e), (t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }), t;
    }
    var Js = new WeakMap();
    function At(l, t) {
      if (typeof l == "object" && l !== null) {
        var e = Js.get(l);
        return e !== void 0 ? e : ((t = { value: l, source: t, stack: Nt(t) }), Js.set(l, t), t);
      }
      return { value: l, source: t, stack: Nt(t) };
    }
    var Ta = [],
      Ea = 0,
      yn = null,
      yu = 0,
      xt = [],
      _t = 0,
      ye = null,
      Gt = 1,
      Xt = "";
    function $t(l, t) {
      (Ta[Ea++] = yu), (Ta[Ea++] = yn), (yn = l), (yu = t);
    }
    function ws(l, t, e) {
      (xt[_t++] = Gt), (xt[_t++] = Xt), (xt[_t++] = ye), (ye = l);
      var a = Gt;
      l = Xt;
      var u = 32 - Sl(a) - 1;
      (a &= ~(1 << u)), (e += 1);
      var n = 32 - Sl(t) + u;
      if (30 < n) {
        var i = u - (u % 5);
        (n = (a & ((1 << i) - 1)).toString(32)), (a >>= i), (u -= i), (Gt = (1 << (32 - Sl(t) + u)) | (e << u) | a), (Xt = n + l);
      } else (Gt = (1 << n) | (e << u) | a), (Xt = l);
    }
    function Ii(l) {
      l.return !== null && ($t(l, 1), ws(l, 1, 0));
    }
    function Pi(l) {
      for (; l === yn; ) (yn = Ta[--Ea]), (Ta[Ea] = null), (yu = Ta[--Ea]), (Ta[Ea] = null);
      for (; l === ye; ) (ye = xt[--_t]), (xt[_t] = null), (Xt = xt[--_t]), (xt[_t] = null), (Gt = xt[--_t]), (xt[_t] = null);
    }
    function ks(l, t) {
      (xt[_t++] = Gt), (xt[_t++] = Xt), (xt[_t++] = ye), (Gt = t.id), (Xt = t.overflow), (ye = l);
    }
    var Jl = null,
      bl = null,
      nl = !1,
      he = null,
      Ot = !1,
      lc = Error(r(519));
    function me(l) {
      var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw (hu(At(t, l)), lc);
    }
    function Ws(l) {
      var t = l.stateNode,
        e = l.type,
        a = l.memoizedProps;
      switch (((t[Kl] = l), (t[ut] = a), e)) {
        case "dialog":
          el("cancel", t), el("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          el("load", t);
          break;
        case "video":
        case "audio":
          for (e = 0; e < ju.length; e++) el(ju[e], t);
          break;
        case "source":
          el("error", t);
          break;
        case "img":
        case "image":
        case "link":
          el("error", t), el("load", t);
          break;
        case "details":
          el("toggle", t);
          break;
        case "input":
          el("invalid", t), fs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
          break;
        case "select":
          el("invalid", t);
          break;
        case "textarea":
          el("invalid", t), os(t, a.value, a.defaultValue, a.children);
      }
      (e = a.children), (typeof e != "string" && typeof e != "number" && typeof e != "bigint") || t.textContent === "" + e || a.suppressHydrationWarning === !0 || yd(t.textContent, e) ? (a.popover != null && (el("beforetoggle", t), el("toggle", t)), a.onScroll != null && el("scroll", t), a.onScrollEnd != null && el("scrollend", t), a.onClick != null && (t.onclick = kt), (t = !0)) : (t = !1), t || me(l, !0);
    }
    function Fs(l) {
      for (Jl = l.return; Jl; )
        switch (Jl.tag) {
          case 5:
          case 31:
          case 13:
            Ot = !1;
            return;
          case 27:
          case 3:
            Ot = !0;
            return;
          default:
            Jl = Jl.return;
        }
    }
    function Aa(l) {
      if (l !== Jl) return !1;
      if (!nl) return Fs(l), (nl = !0), !1;
      var t = l.tag,
        e;
      if (((e = t !== 3 && t !== 27) && ((e = t === 5) && ((e = l.type), (e = !(e !== "form" && e !== "button") || pf(l.type, l.memoizedProps))), (e = !e)), e && bl && me(l), Fs(l), t === 13)) {
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(r(317));
        bl = Td(l);
      } else if (t === 31) {
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(r(317));
        bl = Td(l);
      } else t === 27 ? ((t = bl), De(l.type) ? ((l = Af), (Af = null), (bl = l)) : (bl = t)) : (bl = Jl ? Dt(l.stateNode.nextSibling) : null);
      return !0;
    }
    function Ve() {
      (bl = Jl = null), (nl = !1);
    }
    function tc() {
      var l = he;
      return l !== null && (st === null ? (st = l) : st.push.apply(st, l), (he = null)), l;
    }
    function hu(l) {
      he === null ? (he = [l]) : he.push(l);
    }
    var ec = o(null),
      Ke = null,
      It = null;
    function ve(l, t, e) {
      _(ec, t._currentValue), (t._currentValue = e);
    }
    function Pt(l) {
      (l._currentValue = ec.current), T(ec);
    }
    function ac(l, t, e) {
      for (; l !== null; ) {
        var a = l.alternate;
        if (((l.childLanes & t) !== t ? ((l.childLanes |= t), a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e)) break;
        l = l.return;
      }
    }
    function uc(l, t, e, a) {
      var u = l.child;
      for (u !== null && (u.return = l); u !== null; ) {
        var n = u.dependencies;
        if (n !== null) {
          var i = u.child;
          n = n.firstContext;
          l: for (; n !== null; ) {
            var c = n;
            n = u;
            for (var f = 0; f < t.length; f++)
              if (c.context === t[f]) {
                (n.lanes |= e), (c = n.alternate), c !== null && (c.lanes |= e), ac(n.return, e, l), a || (i = null);
                break l;
              }
            n = c.next;
          }
        } else if (u.tag === 18) {
          if (((i = u.return), i === null)) throw Error(r(341));
          (i.lanes |= e), (n = i.alternate), n !== null && (n.lanes |= e), ac(i, e, l), (i = null);
        } else i = u.child;
        if (i !== null) i.return = u;
        else
          for (i = u; i !== null; ) {
            if (i === l) {
              i = null;
              break;
            }
            if (((u = i.sibling), u !== null)) {
              (u.return = i.return), (i = u);
              break;
            }
            i = i.return;
          }
        u = i;
      }
    }
    function xa(l, t, e, a) {
      l = null;
      for (var u = t, n = !1; u !== null; ) {
        if (!n) {
          if ((u.flags & 524288) !== 0) n = !0;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var i = u.alternate;
          if (i === null) throw Error(r(387));
          if (((i = i.memoizedProps), i !== null)) {
            var c = u.type;
            dt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : (l = [c]));
          }
        } else if (u === P.current) {
          if (((i = u.alternate), i === null)) throw Error(r(387));
          i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Qu) : (l = [Qu]));
        }
        u = u.return;
      }
      l !== null && uc(t, l, e, a), (t.flags |= 262144);
    }
    function hn(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!dt(l.context._currentValue, l.memoizedValue)) return !0;
        l = l.next;
      }
      return !1;
    }
    function Je(l) {
      (Ke = l), (It = null), (l = l.dependencies), l !== null && (l.firstContext = null);
    }
    function wl(l) {
      return $s(Ke, l);
    }
    function mn(l, t) {
      return Ke === null && Je(l), $s(l, t);
    }
    function $s(l, t) {
      var e = t._currentValue;
      if (((t = { context: t, memoizedValue: e, next: null }), It === null)) {
        if (l === null) throw Error(r(308));
        (It = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288);
      } else It = It.next = t;
      return e;
    }
    var Sy =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var l = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (e, a) {
                    l.push(a);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  l.forEach(function (e) {
                    return e();
                  });
              };
            },
      py = g.unstable_scheduleCallback,
      by = g.unstable_NormalPriority,
      Rl = { $$typeof: jl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function nc() {
      return { controller: new Sy(), data: new Map(), refCount: 0 };
    }
    function mu(l) {
      l.refCount--,
        l.refCount === 0 &&
          py(by, function () {
            l.controller.abort();
          });
    }
    var vu = null,
      ic = 0,
      _a = 0,
      Oa = null;
    function zy(l, t) {
      if (vu === null) {
        var e = (vu = []);
        (ic = 0),
          (_a = of()),
          (Oa = {
            status: "pending",
            value: void 0,
            then: function (a) {
              e.push(a);
            },
          });
      }
      return ic++, t.then(Is, Is), t;
    }
    function Is() {
      if (--ic === 0 && vu !== null) {
        Oa !== null && (Oa.status = "fulfilled");
        var l = vu;
        (vu = null), (_a = 0), (Oa = null);
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function Ty(l, t) {
      var e = [],
        a = {
          status: "pending",
          value: null,
          reason: null,
          then: function (u) {
            e.push(u);
          },
        };
      return (
        l.then(
          function () {
            (a.status = "fulfilled"), (a.value = t);
            for (var u = 0; u < e.length; u++) (0, e[u])(t);
          },
          function (u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
          }
        ),
        a
      );
    }
    var Ps = p.S;
    p.S = function (l, t) {
      (qr = Vl()), typeof t == "object" && t !== null && typeof t.then == "function" && zy(l, t), Ps !== null && Ps(l, t);
    };
    var we = o(null);
    function cc() {
      var l = we.current;
      return l !== null ? l : pl.pooledCache;
    }
    function vn(l, t) {
      t === null ? _(we, we.current) : _(we, t.pool);
    }
    function lo() {
      var l = cc();
      return l === null ? null : { parent: Rl._currentValue, pool: l };
    }
    var Ma = Error(r(460)),
      fc = Error(r(474)),
      gn = Error(r(542)),
      Sn = { then: function () {} };
    function to(l) {
      return (l = l.status), l === "fulfilled" || l === "rejected";
    }
    function eo(l, t, e) {
      switch (((e = l[e]), e === void 0 ? l.push(t) : e !== t && (t.then(kt, kt), (t = e)), t.status)) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((l = t.reason), uo(l), l);
        default:
          if (typeof t.status == "string") t.then(kt, kt);
          else {
            if (((l = pl), l !== null && 100 < l.shellSuspendCounter)) throw Error(r(482));
            (l = t),
              (l.status = "pending"),
              l.then(
                function (a) {
                  if (t.status === "pending") {
                    var u = t;
                    (u.status = "fulfilled"), (u.value = a);
                  }
                },
                function (a) {
                  if (t.status === "pending") {
                    var u = t;
                    (u.status = "rejected"), (u.reason = a);
                  }
                }
              );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw ((l = t.reason), uo(l), l);
          }
          throw ((We = t), Ma);
      }
    }
    function ke(l) {
      try {
        var t = l._init;
        return t(l._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? ((We = e), Ma) : e;
      }
    }
    var We = null;
    function ao() {
      if (We === null) throw Error(r(459));
      var l = We;
      return (We = null), l;
    }
    function uo(l) {
      if (l === Ma || l === gn) throw Error(r(483));
    }
    var Da = null,
      gu = 0;
    function pn(l) {
      var t = gu;
      return (gu += 1), Da === null && (Da = []), eo(Da, l, t);
    }
    function Su(l, t) {
      (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
    }
    function bn(l, t) {
      throw t.$$typeof === k ? Error(r(525)) : ((l = Object.prototype.toString.call(t)), Error(r(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function no(l) {
      function t(d, s) {
        if (l) {
          var y = d.deletions;
          y === null ? ((d.deletions = [s]), (d.flags |= 16)) : y.push(s);
        }
      }
      function e(d, s) {
        if (!l) return null;
        for (; s !== null; ) t(d, s), (s = s.sibling);
        return null;
      }
      function a(d) {
        for (var s = new Map(); d !== null; ) d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling);
        return s;
      }
      function u(d, s) {
        return (d = Ft(d, s)), (d.index = 0), (d.sibling = null), d;
      }
      function n(d, s, y) {
        return (d.index = y), l ? ((y = d.alternate), y !== null ? ((y = y.index), y < s ? ((d.flags |= 67108866), s) : y) : ((d.flags |= 67108866), s)) : ((d.flags |= 1048576), s);
      }
      function i(d) {
        return l && d.alternate === null && (d.flags |= 67108866), d;
      }
      function c(d, s, y, b) {
        return s === null || s.tag !== 6 ? ((s = Fi(y, d.mode, b)), (s.return = d), s) : ((s = u(s, y)), (s.return = d), s);
      }
      function f(d, s, y, b) {
        var X = y.type;
        return X === Yl ? S(d, s, y.props.children, b, y.key) : s !== null && (s.elementType === X || (typeof X == "object" && X !== null && X.$$typeof === Il && ke(X) === s.type)) ? ((s = u(s, y.props)), Su(s, y), (s.return = d), s) : ((s = dn(y.type, y.key, y.props, null, d.mode, b)), Su(s, y), (s.return = d), s);
      }
      function h(d, s, y, b) {
        return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? ((s = $i(y, d.mode, b)), (s.return = d), s) : ((s = u(s, y.children || [])), (s.return = d), s);
      }
      function S(d, s, y, b, X) {
        return s === null || s.tag !== 7 ? ((s = Ze(y, d.mode, b, X)), (s.return = d), s) : ((s = u(s, y)), (s.return = d), s);
      }
      function E(d, s, y) {
        if ((typeof s == "string" && s !== "") || typeof s == "number" || typeof s == "bigint") return (s = Fi("" + s, d.mode, y)), (s.return = d), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case I:
              return (y = dn(s.type, s.key, s.props, null, d.mode, y)), Su(y, s), (y.return = d), y;
            case cl:
              return (s = $i(s, d.mode, y)), (s.return = d), s;
            case Il:
              return (s = ke(s)), E(d, s, y);
          }
          if (El(s) || Ul(s)) return (s = Ze(s, d.mode, y, null)), (s.return = d), s;
          if (typeof s.then == "function") return E(d, pn(s), y);
          if (s.$$typeof === jl) return E(d, mn(d, s), y);
          bn(d, s);
        }
        return null;
      }
      function m(d, s, y, b) {
        var X = s !== null ? s.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint") return X !== null ? null : c(d, s, "" + y, b);
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case I:
              return y.key === X ? f(d, s, y, b) : null;
            case cl:
              return y.key === X ? h(d, s, y, b) : null;
            case Il:
              return (y = ke(y)), m(d, s, y, b);
          }
          if (El(y) || Ul(y)) return X !== null ? null : S(d, s, y, b, null);
          if (typeof y.then == "function") return m(d, s, pn(y), b);
          if (y.$$typeof === jl) return m(d, s, mn(d, y), b);
          bn(d, y);
        }
        return null;
      }
      function v(d, s, y, b, X) {
        if ((typeof b == "string" && b !== "") || typeof b == "number" || typeof b == "bigint") return (d = d.get(y) || null), c(s, d, "" + b, X);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case I:
              return (d = d.get(b.key === null ? y : b.key) || null), f(s, d, b, X);
            case cl:
              return (d = d.get(b.key === null ? y : b.key) || null), h(s, d, b, X);
            case Il:
              return (b = ke(b)), v(d, s, y, b, X);
          }
          if (El(b) || Ul(b)) return (d = d.get(y) || null), S(s, d, b, X, null);
          if (typeof b.then == "function") return v(d, s, y, pn(b), X);
          if (b.$$typeof === jl) return v(d, s, y, mn(s, b), X);
          bn(s, b);
        }
        return null;
      }
      function H(d, s, y, b) {
        for (var X = null, sl = null, N = s, F = (s = 0), ul = null; N !== null && F < y.length; F++) {
          N.index > F ? ((ul = N), (N = null)) : (ul = N.sibling);
          var ol = m(d, N, y[F], b);
          if (ol === null) {
            N === null && (N = ul);
            break;
          }
          l && N && ol.alternate === null && t(d, N), (s = n(ol, s, F)), sl === null ? (X = ol) : (sl.sibling = ol), (sl = ol), (N = ul);
        }
        if (F === y.length) return e(d, N), nl && $t(d, F), X;
        if (N === null) {
          for (; F < y.length; F++) (N = E(d, y[F], b)), N !== null && ((s = n(N, s, F)), sl === null ? (X = N) : (sl.sibling = N), (sl = N));
          return nl && $t(d, F), X;
        }
        for (N = a(N); F < y.length; F++) (ul = v(N, d, F, y[F], b)), ul !== null && (l && ul.alternate !== null && N.delete(ul.key === null ? F : ul.key), (s = n(ul, s, F)), sl === null ? (X = ul) : (sl.sibling = ul), (sl = ul));
        return (
          l &&
            N.forEach(function (Ne) {
              return t(d, Ne);
            }),
          nl && $t(d, F),
          X
        );
      }
      function L(d, s, y, b) {
        if (y == null) throw Error(r(151));
        for (var X = null, sl = null, N = s, F = (s = 0), ul = null, ol = y.next(); N !== null && !ol.done; F++, ol = y.next()) {
          N.index > F ? ((ul = N), (N = null)) : (ul = N.sibling);
          var Ne = m(d, N, ol.value, b);
          if (Ne === null) {
            N === null && (N = ul);
            break;
          }
          l && N && Ne.alternate === null && t(d, N), (s = n(Ne, s, F)), sl === null ? (X = Ne) : (sl.sibling = Ne), (sl = Ne), (N = ul);
        }
        if (ol.done) return e(d, N), nl && $t(d, F), X;
        if (N === null) {
          for (; !ol.done; F++, ol = y.next()) (ol = E(d, ol.value, b)), ol !== null && ((s = n(ol, s, F)), sl === null ? (X = ol) : (sl.sibling = ol), (sl = ol));
          return nl && $t(d, F), X;
        }
        for (N = a(N); !ol.done; F++, ol = y.next()) (ol = v(N, d, F, ol.value, b)), ol !== null && (l && ol.alternate !== null && N.delete(ol.key === null ? F : ol.key), (s = n(ol, s, F)), sl === null ? (X = ol) : (sl.sibling = ol), (sl = ol));
        return (
          l &&
            N.forEach(function (Hh) {
              return t(d, Hh);
            }),
          nl && $t(d, F),
          X
        );
      }
      function gl(d, s, y, b) {
        if ((typeof y == "object" && y !== null && y.type === Yl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
          switch (y.$$typeof) {
            case I:
              l: {
                for (var X = y.key; s !== null; ) {
                  if (s.key === X) {
                    if (((X = y.type), X === Yl)) {
                      if (s.tag === 7) {
                        e(d, s.sibling), (b = u(s, y.props.children)), (b.return = d), (d = b);
                        break l;
                      }
                    } else if (s.elementType === X || (typeof X == "object" && X !== null && X.$$typeof === Il && ke(X) === s.type)) {
                      e(d, s.sibling), (b = u(s, y.props)), Su(b, y), (b.return = d), (d = b);
                      break l;
                    }
                    e(d, s);
                    break;
                  } else t(d, s);
                  s = s.sibling;
                }
                y.type === Yl ? ((b = Ze(y.props.children, d.mode, b, y.key)), (b.return = d), (d = b)) : ((b = dn(y.type, y.key, y.props, null, d.mode, b)), Su(b, y), (b.return = d), (d = b));
              }
              return i(d);
            case cl:
              l: {
                for (X = y.key; s !== null; ) {
                  if (s.key === X)
                    if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                      e(d, s.sibling), (b = u(s, y.children || [])), (b.return = d), (d = b);
                      break l;
                    } else {
                      e(d, s);
                      break;
                    }
                  else t(d, s);
                  s = s.sibling;
                }
                (b = $i(y, d.mode, b)), (b.return = d), (d = b);
              }
              return i(d);
            case Il:
              return (y = ke(y)), gl(d, s, y, b);
          }
          if (El(y)) return H(d, s, y, b);
          if (Ul(y)) {
            if (((X = Ul(y)), typeof X != "function")) throw Error(r(150));
            return (y = X.call(y)), L(d, s, y, b);
          }
          if (typeof y.then == "function") return gl(d, s, pn(y), b);
          if (y.$$typeof === jl) return gl(d, s, mn(d, y), b);
          bn(d, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint" ? ((y = "" + y), s !== null && s.tag === 6 ? (e(d, s.sibling), (b = u(s, y)), (b.return = d), (d = b)) : (e(d, s), (b = Fi(y, d.mode, b)), (b.return = d), (d = b)), i(d)) : e(d, s);
      }
      return function (d, s, y, b) {
        try {
          gu = 0;
          var X = gl(d, s, y, b);
          return (Da = null), X;
        } catch (N) {
          if (N === Ma || N === gn) throw N;
          var sl = yt(29, N, null, d.mode);
          return (sl.lanes = b), (sl.return = d), sl;
        } finally {
        }
      };
    }
    var Fe = no(!0),
      io = no(!1),
      ge = !1;
    function sc(l) {
      l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function oc(l, t) {
      (l = l.updateQueue), t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
    }
    function Se(l) {
      return { lane: l, tag: 0, payload: null, callback: null, next: null };
    }
    function pe(l, t, e) {
      var a = l.updateQueue;
      if (a === null) return null;
      if (((a = a.shared), (rl & 2) !== 0)) {
        var u = a.pending;
        return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (a.pending = t), (t = rn(l)), Zs(l, null, e), t;
      }
      return on(l, a, t, e), rn(l);
    }
    function pu(l, t, e) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))) {
        var a = t.lanes;
        (a &= l.pendingLanes), (e |= a), (t.lanes = e), $f(l, e);
      }
    }
    function rc(l, t) {
      var e = l.updateQueue,
        a = l.alternate;
      if (a !== null && ((a = a.updateQueue), e === a)) {
        var u = null,
          n = null;
        if (((e = e.firstBaseUpdate), e !== null)) {
          do {
            var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
            n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
          } while (e !== null);
          n === null ? (u = n = t) : (n = n.next = t);
        } else u = n = t;
        (e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }), (l.updateQueue = e);
        return;
      }
      (l = e.lastBaseUpdate), l === null ? (e.firstBaseUpdate = t) : (l.next = t), (e.lastBaseUpdate = t);
    }
    var dc = !1;
    function bu() {
      if (dc) {
        var l = Oa;
        if (l !== null) throw l;
      }
    }
    function zu(l, t, e, a) {
      dc = !1;
      var u = l.updateQueue;
      ge = !1;
      var n = u.firstBaseUpdate,
        i = u.lastBaseUpdate,
        c = u.shared.pending;
      if (c !== null) {
        u.shared.pending = null;
        var f = c,
          h = f.next;
        (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
        var S = l.alternate;
        S !== null && ((S = S.updateQueue), (c = S.lastBaseUpdate), c !== i && (c === null ? (S.firstBaseUpdate = h) : (c.next = h), (S.lastBaseUpdate = f)));
      }
      if (n !== null) {
        var E = u.baseState;
        (i = 0), (S = h = f = null), (c = n);
        do {
          var m = c.lane & -536870913,
            v = m !== c.lane;
          if (v ? (al & m) === m : (a & m) === m) {
            m !== 0 && m === _a && (dc = !0), S !== null && (S = S.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
            l: {
              var H = l,
                L = c;
              m = t;
              var gl = e;
              switch (L.tag) {
                case 1:
                  if (((H = L.payload), typeof H == "function")) {
                    E = H.call(gl, E, m);
                    break l;
                  }
                  E = H;
                  break l;
                case 3:
                  H.flags = (H.flags & -65537) | 128;
                case 0:
                  if (((H = L.payload), (m = typeof H == "function" ? H.call(gl, E, m) : H), m == null)) break l;
                  E = q({}, E, m);
                  break l;
                case 2:
                  ge = !0;
              }
            }
            (m = c.callback), m !== null && ((l.flags |= 64), v && (l.flags |= 8192), (v = u.callbacks), v === null ? (u.callbacks = [m]) : v.push(m));
          } else (v = { lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }), S === null ? ((h = S = v), (f = E)) : (S = S.next = v), (i |= m);
          if (((c = c.next), c === null)) {
            if (((c = u.shared.pending), c === null)) break;
            (v = c), (c = v.next), (v.next = null), (u.lastBaseUpdate = v), (u.shared.pending = null);
          }
        } while (!0);
        S === null && (f = E), (u.baseState = f), (u.firstBaseUpdate = h), (u.lastBaseUpdate = S), n === null && (u.shared.lanes = 0), (Ae |= i), (l.lanes = i), (l.memoizedState = E);
      }
    }
    function co(l, t) {
      if (typeof l != "function") throw Error(r(191, l));
      l.call(t);
    }
    function fo(l, t) {
      var e = l.callbacks;
      if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) co(e[l], t);
    }
    var Ca = o(null),
      zn = o(0);
    function so(l, t) {
      (l = fe), _(zn, l), _(Ca, t), (fe = l | t.baseLanes);
    }
    function yc() {
      _(zn, fe), _(Ca, Ca.current);
    }
    function hc() {
      (fe = zn.current), T(Ca), T(zn);
    }
    var ht = o(null),
      Mt = null;
    function be(l) {
      var t = l.alternate;
      _(Dl, Dl.current & 1), _(ht, l), Mt === null && (t === null || Ca.current !== null || t.memoizedState !== null) && (Mt = l);
    }
    function mc(l) {
      _(Dl, Dl.current), _(ht, l), Mt === null && (Mt = l);
    }
    function oo(l) {
      l.tag === 22 ? (_(Dl, Dl.current), _(ht, l), Mt === null && (Mt = l)) : ze();
    }
    function ze() {
      _(Dl, Dl.current), _(ht, ht.current);
    }
    function mt(l) {
      T(ht), Mt === l && (Mt = null), T(Dl);
    }
    var Dl = o(0);
    function Tn(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var e = t.memoizedState;
          if (e !== null && ((e = e.dehydrated), e === null || Tf(e) || Ef(e))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var le = 0,
      w = null,
      ml = null,
      Hl = null,
      En = !1,
      Ua = !1,
      $e = !1,
      An = 0,
      Tu = 0,
      Ra = null,
      Ey = 0;
    function Ol() {
      throw Error(r(321));
    }
    function vc(l, t) {
      if (t === null) return !1;
      for (var e = 0; e < t.length && e < l.length; e++) if (!dt(l[e], t[e])) return !1;
      return !0;
    }
    function gc(l, t, e, a, u, n) {
      return (le = n), (w = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (p.H = l === null || l.memoizedState === null ? ko : Rc), ($e = !1), (n = e(a, u)), ($e = !1), Ua && (n = yo(t, e, a, u)), ro(l), n;
    }
    function ro(l) {
      p.H = xu;
      var t = ml !== null && ml.next !== null;
      if (((le = 0), (Hl = ml = w = null), (En = !1), (Tu = 0), (Ra = null), t)) throw Error(r(300));
      l === null || Nl || ((l = l.dependencies), l !== null && hn(l) && (Nl = !0));
    }
    function yo(l, t, e, a) {
      w = l;
      var u = 0;
      do {
        if ((Ua && (Ra = null), (Tu = 0), (Ua = !1), 25 <= u)) throw Error(r(301));
        if (((u += 1), (Hl = ml = null), l.updateQueue != null)) {
          var n = l.updateQueue;
          (n.lastEffect = null), (n.events = null), (n.stores = null), n.memoCache != null && (n.memoCache.index = 0);
        }
        (p.H = Wo), (n = t(e, a));
      } while (Ua);
      return n;
    }
    function Ay() {
      var l = p.H,
        t = l.useState()[0];
      return (t = typeof t.then == "function" ? Eu(t) : t), (l = l.useState()[0]), (ml !== null ? ml.memoizedState : null) !== l && (w.flags |= 1024), t;
    }
    function Sc() {
      var l = An !== 0;
      return (An = 0), l;
    }
    function pc(l, t, e) {
      (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
    }
    function bc(l) {
      if (En) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), (l = l.next);
        }
        En = !1;
      }
      (le = 0), (Hl = ml = w = null), (Ua = !1), (Tu = An = 0), (Ra = null);
    }
    function Pl() {
      var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Hl === null ? (w.memoizedState = Hl = l) : (Hl = Hl.next = l), Hl;
    }
    function Cl() {
      if (ml === null) {
        var l = w.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = ml.next;
      var t = Hl === null ? w.memoizedState : Hl.next;
      if (t !== null) (Hl = t), (ml = l);
      else {
        if (l === null) throw w.alternate === null ? Error(r(467)) : Error(r(310));
        (ml = l), (l = { memoizedState: ml.memoizedState, baseState: ml.baseState, baseQueue: ml.baseQueue, queue: ml.queue, next: null }), Hl === null ? (w.memoizedState = Hl = l) : (Hl = Hl.next = l);
      }
      return Hl;
    }
    function xn() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Eu(l) {
      var t = Tu;
      return (Tu += 1), Ra === null && (Ra = []), (l = eo(Ra, l, t)), (t = w), (Hl === null ? t.memoizedState : Hl.next) === null && ((t = t.alternate), (p.H = t === null || t.memoizedState === null ? ko : Rc)), l;
    }
    function _n(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return Eu(l);
        if (l.$$typeof === jl) return wl(l);
      }
      throw Error(r(438, String(l)));
    }
    function zc(l) {
      var t = null,
        e = w.updateQueue;
      if ((e !== null && (t = e.memoCache), t == null)) {
        var a = w.alternate;
        a !== null &&
          ((a = a.updateQueue),
          a !== null &&
            ((a = a.memoCache),
            a != null &&
              (t = {
                data: a.data.map(function (u) {
                  return u.slice();
                }),
                index: 0,
              })));
      }
      if ((t == null && (t = { data: [], index: 0 }), e === null && ((e = xn()), (w.updateQueue = e)), (e.memoCache = t), (e = t.data[t.index]), e === void 0)) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Vt;
      return t.index++, e;
    }
    function te(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function On(l) {
      var t = Cl();
      return Tc(t, ml, l);
    }
    function Tc(l, t, e) {
      var a = l.queue;
      if (a === null) throw Error(r(311));
      a.lastRenderedReducer = e;
      var u = l.baseQueue,
        n = a.pending;
      if (n !== null) {
        if (u !== null) {
          var i = u.next;
          (u.next = n.next), (n.next = i);
        }
        (t.baseQueue = u = n), (a.pending = null);
      }
      if (((n = l.baseState), u === null)) l.memoizedState = n;
      else {
        t = u.next;
        var c = (i = null),
          f = null,
          h = t,
          S = !1;
        do {
          var E = h.lane & -536870913;
          if (E !== h.lane ? (al & E) === E : (le & E) === E) {
            var m = h.revertLane;
            if (m === 0) f !== null && (f = f.next = { lane: 0, revertLane: 0, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), E === _a && (S = !0);
            else if ((le & m) === m) {
              (h = h.next), m === _a && (S = !0);
              continue;
            } else (E = { lane: 0, revertLane: h.revertLane, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), f === null ? ((c = f = E), (i = n)) : (f = f.next = E), (w.lanes |= m), (Ae |= m);
            (E = h.action), $e && e(n, E), (n = h.hasEagerState ? h.eagerState : e(n, E));
          } else (m = { lane: E, revertLane: h.revertLane, gesture: h.gesture, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), f === null ? ((c = f = m), (i = n)) : (f = f.next = m), (w.lanes |= E), (Ae |= E);
          h = h.next;
        } while (h !== null && h !== t);
        if ((f === null ? (i = n) : (f.next = c), !dt(n, l.memoizedState) && ((Nl = !0), S && ((e = Oa), e !== null)))) throw e;
        (l.memoizedState = n), (l.baseState = i), (l.baseQueue = f), (a.lastRenderedState = n);
      }
      return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
    }
    function Ec(l) {
      var t = Cl(),
        e = t.queue;
      if (e === null) throw Error(r(311));
      e.lastRenderedReducer = l;
      var a = e.dispatch,
        u = e.pending,
        n = t.memoizedState;
      if (u !== null) {
        e.pending = null;
        var i = (u = u.next);
        do (n = l(n, i.action)), (i = i.next);
        while (i !== u);
        dt(n, t.memoizedState) || (Nl = !0), (t.memoizedState = n), t.baseQueue === null && (t.baseState = n), (e.lastRenderedState = n);
      }
      return [n, a];
    }
    function ho(l, t, e) {
      var a = w,
        u = Cl(),
        n = nl;
      if (n) {
        if (e === void 0) throw Error(r(407));
        e = e();
      } else e = t();
      var i = !dt((ml || u).memoizedState, e);
      if ((i && ((u.memoizedState = e), (Nl = !0)), (u = u.queue), _c(go.bind(null, a, u, l), [l]), u.getSnapshot !== t || i || (Hl !== null && Hl.memoizedState.tag & 1))) {
        if (((a.flags |= 2048), Ha(9, { destroy: void 0 }, vo.bind(null, a, u, e, t), null), pl === null)) throw Error(r(349));
        n || (le & 127) !== 0 || mo(a, t, e);
      }
      return e;
    }
    function mo(l, t, e) {
      (l.flags |= 16384), (l = { getSnapshot: t, value: e }), (t = w.updateQueue), t === null ? ((t = xn()), (w.updateQueue = t), (t.stores = [l])) : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
    }
    function vo(l, t, e, a) {
      (t.value = e), (t.getSnapshot = a), So(t) && po(l);
    }
    function go(l, t, e) {
      return e(function () {
        So(t) && po(l);
      });
    }
    function So(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var e = t();
        return !dt(l, e);
      } catch {
        return !0;
      }
    }
    function po(l) {
      var t = Le(l, 2);
      t !== null && ot(t, l, 2);
    }
    function Ac(l) {
      var t = Pl();
      if (typeof l == "function") {
        var e = l;
        if (((l = e()), $e)) {
          at(!0);
          try {
            e();
          } finally {
            at(!1);
          }
        }
      }
      return (t.memoizedState = t.baseState = l), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: te, lastRenderedState: l }), t;
    }
    function bo(l, t, e, a) {
      return (l.baseState = e), Tc(l, ml, typeof a == "function" ? a : te);
    }
    function xy(l, t, e, a, u) {
      if (Cn(l)) throw Error(r(485));
      if (((l = t.action), l !== null)) {
        var n = {
          payload: u,
          action: l,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (i) {
            n.listeners.push(i);
          },
        };
        p.T !== null ? e(!0) : (n.isTransition = !1), a(n), (e = t.pending), e === null ? ((n.next = t.pending = n), zo(t, n)) : ((n.next = e.next), (t.pending = e.next = n));
      }
    }
    function zo(l, t) {
      var e = t.action,
        a = t.payload,
        u = l.state;
      if (t.isTransition) {
        var n = p.T,
          i = {};
        p.T = i;
        try {
          var c = e(u, a),
            f = p.S;
          f !== null && f(i, c), To(l, t, c);
        } catch (h) {
          xc(l, t, h);
        } finally {
          n !== null && i.types !== null && (n.types = i.types), (p.T = n);
        }
      } else
        try {
          (n = e(u, a)), To(l, t, n);
        } catch (h) {
          xc(l, t, h);
        }
    }
    function To(l, t, e) {
      e !== null && typeof e == "object" && typeof e.then == "function"
        ? e.then(
            function (a) {
              Eo(l, t, a);
            },
            function (a) {
              return xc(l, t, a);
            }
          )
        : Eo(l, t, e);
    }
    function Eo(l, t, e) {
      (t.status = "fulfilled"), (t.value = e), Ao(t), (l.state = e), (t = l.pending), t !== null && ((e = t.next), e === t ? (l.pending = null) : ((e = e.next), (t.next = e), zo(l, e)));
    }
    function xc(l, t, e) {
      var a = l.pending;
      if (((l.pending = null), a !== null)) {
        a = a.next;
        do (t.status = "rejected"), (t.reason = e), Ao(t), (t = t.next);
        while (t !== a);
      }
      l.action = null;
    }
    function Ao(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function xo(l, t) {
      return t;
    }
    function _o(l, t) {
      if (nl) {
        var e = pl.formState;
        if (e !== null) {
          l: {
            var a = w;
            if (nl) {
              if (bl) {
                t: {
                  for (var u = bl, n = Ot; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break t;
                    }
                    if (((u = Dt(u.nextSibling)), u === null)) {
                      u = null;
                      break t;
                    }
                  }
                  (n = u.data), (u = n === "F!" || n === "F" ? u : null);
                }
                if (u) {
                  (bl = Dt(u.nextSibling)), (a = u.data === "F!");
                  break l;
                }
              }
              me(a);
            }
            a = !1;
          }
          a && (t = e[0]);
        }
      }
      return (e = Pl()), (e.memoizedState = e.baseState = t), (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xo, lastRenderedState: t }), (e.queue = a), (e = Ko.bind(null, w, a)), (a.dispatch = e), (a = Ac(!1)), (n = Uc.bind(null, w, !1, a.queue)), (a = Pl()), (u = { state: t, dispatch: null, action: l, pending: null }), (a.queue = u), (e = xy.bind(null, w, u, n, e)), (u.dispatch = e), (a.memoizedState = l), [t, e, !1];
    }
    function Oo(l) {
      var t = Cl();
      return Mo(t, ml, l);
    }
    function Mo(l, t, e) {
      if (((t = Tc(l, t, xo)[0]), (l = On(te)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
        try {
          var a = Eu(t);
        } catch (i) {
          throw i === Ma ? gn : i;
        }
      else a = t;
      t = Cl();
      var u = t.queue,
        n = u.dispatch;
      return e !== t.memoizedState && ((w.flags |= 2048), Ha(9, { destroy: void 0 }, _y.bind(null, u, e), null)), [a, n, l];
    }
    function _y(l, t) {
      l.action = t;
    }
    function Do(l) {
      var t = Cl(),
        e = ml;
      if (e !== null) return Mo(t, e, l);
      Cl(), (t = t.memoizedState), (e = Cl());
      var a = e.queue.dispatch;
      return (e.memoizedState = l), [t, a, !1];
    }
    function Ha(l, t, e, a) {
      return (l = { tag: l, create: e, deps: a, inst: t, next: null }), (t = w.updateQueue), t === null && ((t = xn()), (w.updateQueue = t)), (e = t.lastEffect), e === null ? (t.lastEffect = l.next = l) : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)), l;
    }
    function Co() {
      return Cl().memoizedState;
    }
    function Mn(l, t, e, a) {
      var u = Pl();
      (w.flags |= l), (u.memoizedState = Ha(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a));
    }
    function Dn(l, t, e, a) {
      var u = Cl();
      a = a === void 0 ? null : a;
      var n = u.memoizedState.inst;
      ml !== null && a !== null && vc(a, ml.memoizedState.deps) ? (u.memoizedState = Ha(t, n, e, a)) : ((w.flags |= l), (u.memoizedState = Ha(1 | t, n, e, a)));
    }
    function Uo(l, t) {
      Mn(8390656, 8, l, t);
    }
    function _c(l, t) {
      Dn(2048, 8, l, t);
    }
    function Oy(l) {
      w.flags |= 4;
      var t = w.updateQueue;
      if (t === null) (t = xn()), (w.updateQueue = t), (t.events = [l]);
      else {
        var e = t.events;
        e === null ? (t.events = [l]) : e.push(l);
      }
    }
    function Ro(l) {
      var t = Cl().memoizedState;
      return (
        Oy({ ref: t, nextImpl: l }),
        function () {
          if ((rl & 2) !== 0) throw Error(r(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function Ho(l, t) {
      return Dn(4, 2, l, t);
    }
    function No(l, t) {
      return Dn(4, 4, l, t);
    }
    function Bo(l, t) {
      if (typeof t == "function") {
        l = l();
        var e = t(l);
        return function () {
          typeof e == "function" ? e() : t(null);
        };
      }
      if (t != null)
        return (
          (l = l()),
          (t.current = l),
          function () {
            t.current = null;
          }
        );
    }
    function jo(l, t, e) {
      (e = e != null ? e.concat([l]) : null), Dn(4, 4, Bo.bind(null, t, l), e);
    }
    function Oc() {}
    function qo(l, t) {
      var e = Cl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      return t !== null && vc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
    }
    function Yo(l, t) {
      var e = Cl();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      if (t !== null && vc(t, a[1])) return a[0];
      if (((a = l()), $e)) {
        at(!0);
        try {
          l();
        } finally {
          at(!1);
        }
      }
      return (e.memoizedState = [a, t]), a;
    }
    function Mc(l, t, e) {
      return e === void 0 || ((le & 1073741824) !== 0 && (al & 261930) === 0) ? (l.memoizedState = t) : ((l.memoizedState = e), (l = Gr()), (w.lanes |= l), (Ae |= l), e);
    }
    function Go(l, t, e, a) {
      return dt(e, t) ? e : Ca.current !== null ? ((l = Mc(l, e, a)), dt(l, t) || (Nl = !0), l) : (le & 42) === 0 || ((le & 1073741824) !== 0 && (al & 261930) === 0) ? ((Nl = !0), (l.memoizedState = e)) : ((l = Gr()), (w.lanes |= l), (Ae |= l), t);
    }
    function Xo(l, t, e, a, u) {
      var n = A.p;
      A.p = n !== 0 && 8 > n ? n : 8;
      var i = p.T,
        c = {};
      (p.T = c), Uc(l, !1, t, e);
      try {
        var f = u(),
          h = p.S;
        if ((h !== null && h(c, f), f !== null && typeof f == "object" && typeof f.then == "function")) {
          var S = Ty(f, a);
          Au(l, t, S, St(l));
        } else Au(l, t, a, St(l));
      } catch (E) {
        Au(l, t, { then: function () {}, status: "rejected", reason: E }, St());
      } finally {
        (A.p = n), i !== null && c.types !== null && (i.types = c.types), (p.T = i);
      }
    }
    function My() {}
    function Dc(l, t, e, a) {
      if (l.tag !== 5) throw Error(r(476));
      var u = Qo(l).queue;
      Xo(
        l,
        u,
        t,
        Y,
        e === null
          ? My
          : function () {
              return Lo(l), e(a);
            }
      );
    }
    function Qo(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = { memoizedState: Y, baseState: Y, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: te, lastRenderedState: Y }, next: null };
      var e = {};
      return (t.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: te, lastRenderedState: e }, next: null }), (l.memoizedState = t), (l = l.alternate), l !== null && (l.memoizedState = t), t;
    }
    function Lo(l) {
      var t = Qo(l);
      t.next === null && (t = l.alternate.memoizedState), Au(l, t.next.queue, {}, St());
    }
    function Cc() {
      return wl(Qu);
    }
    function Zo() {
      return Cl().memoizedState;
    }
    function Vo() {
      return Cl().memoizedState;
    }
    function Dy(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var e = St();
            l = Se(e);
            var a = pe(t, l, e);
            a !== null && (ot(a, t, e), pu(a, t, e)), (t = { cache: nc() }), (l.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function Cy(l, t, e) {
      var a = St();
      (e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null }), Cn(l) ? Jo(t, e) : ((e = ki(l, t, e, a)), e !== null && (ot(e, l, a), wo(e, t, a)));
    }
    function Ko(l, t, e) {
      var a = St();
      Au(l, t, e, a);
    }
    function Au(l, t, e, a) {
      var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null };
      if (Cn(l)) Jo(t, u);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && ((n = t.lastRenderedReducer), n !== null))
          try {
            var i = t.lastRenderedState,
              c = n(i, e);
            if (((u.hasEagerState = !0), (u.eagerState = c), dt(c, i))) return on(l, t, u, 0), pl === null && sn(), !1;
          } catch {
          } finally {
          }
        if (((e = ki(l, t, u, a)), e !== null)) return ot(e, l, a), wo(e, t, a), !0;
      }
      return !1;
    }
    function Uc(l, t, e, a) {
      if (((a = { lane: 2, revertLane: of(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), Cn(l))) {
        if (t) throw Error(r(479));
      } else (t = ki(l, e, a, 2)), t !== null && ot(t, l, 2);
    }
    function Cn(l) {
      var t = l.alternate;
      return l === w || (t !== null && t === w);
    }
    function Jo(l, t) {
      Ua = En = !0;
      var e = l.pending;
      e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)), (l.pending = t);
    }
    function wo(l, t, e) {
      if ((e & 4194048) !== 0) {
        var a = t.lanes;
        (a &= l.pendingLanes), (e |= a), (t.lanes = e), $f(l, e);
      }
    }
    var xu = { readContext: wl, use: _n, useCallback: Ol, useContext: Ol, useEffect: Ol, useImperativeHandle: Ol, useLayoutEffect: Ol, useInsertionEffect: Ol, useMemo: Ol, useReducer: Ol, useRef: Ol, useState: Ol, useDebugValue: Ol, useDeferredValue: Ol, useTransition: Ol, useSyncExternalStore: Ol, useId: Ol, useHostTransitionStatus: Ol, useFormState: Ol, useActionState: Ol, useOptimistic: Ol, useMemoCache: Ol, useCacheRefresh: Ol };
    xu.useEffectEvent = Ol;
    var ko = {
        readContext: wl,
        use: _n,
        useCallback: function (l, t) {
          return (Pl().memoizedState = [l, t === void 0 ? null : t]), l;
        },
        useContext: wl,
        useEffect: Uo,
        useImperativeHandle: function (l, t, e) {
          (e = e != null ? e.concat([l]) : null), Mn(4194308, 4, Bo.bind(null, t, l), e);
        },
        useLayoutEffect: function (l, t) {
          return Mn(4194308, 4, l, t);
        },
        useInsertionEffect: function (l, t) {
          Mn(4, 2, l, t);
        },
        useMemo: function (l, t) {
          var e = Pl();
          t = t === void 0 ? null : t;
          var a = l();
          if ($e) {
            at(!0);
            try {
              l();
            } finally {
              at(!1);
            }
          }
          return (e.memoizedState = [a, t]), a;
        },
        useReducer: function (l, t, e) {
          var a = Pl();
          if (e !== void 0) {
            var u = e(t);
            if ($e) {
              at(!0);
              try {
                e(t);
              } finally {
                at(!1);
              }
            }
          } else u = t;
          return (a.memoizedState = a.baseState = u), (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }), (a.queue = l), (l = l.dispatch = Cy.bind(null, w, l)), [a.memoizedState, l];
        },
        useRef: function (l) {
          var t = Pl();
          return (l = { current: l }), (t.memoizedState = l);
        },
        useState: function (l) {
          l = Ac(l);
          var t = l.queue,
            e = Ko.bind(null, w, t);
          return (t.dispatch = e), [l.memoizedState, e];
        },
        useDebugValue: Oc,
        useDeferredValue: function (l, t) {
          var e = Pl();
          return Mc(e, l, t);
        },
        useTransition: function () {
          var l = Ac(!1);
          return (l = Xo.bind(null, w, l.queue, !0, !1)), (Pl().memoizedState = l), [!1, l];
        },
        useSyncExternalStore: function (l, t, e) {
          var a = w,
            u = Pl();
          if (nl) {
            if (e === void 0) throw Error(r(407));
            e = e();
          } else {
            if (((e = t()), pl === null)) throw Error(r(349));
            (al & 127) !== 0 || mo(a, t, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: t };
          return (u.queue = n), Uo(go.bind(null, a, n, l), [l]), (a.flags |= 2048), Ha(9, { destroy: void 0 }, vo.bind(null, a, n, e, t), null), e;
        },
        useId: function () {
          var l = Pl(),
            t = pl.identifierPrefix;
          if (nl) {
            var e = Xt,
              a = Gt;
            (e = (a & ~(1 << (32 - Sl(a) - 1))).toString(32) + e), (t = "_" + t + "R_" + e), (e = An++), 0 < e && (t += "H" + e.toString(32)), (t += "_");
          } else (e = Ey++), (t = "_" + t + "r_" + e.toString(32) + "_");
          return (l.memoizedState = t);
        },
        useHostTransitionStatus: Cc,
        useFormState: _o,
        useActionState: _o,
        useOptimistic: function (l) {
          var t = Pl();
          t.memoizedState = t.baseState = l;
          var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return (t.queue = e), (t = Uc.bind(null, w, !0, e)), (e.dispatch = t), [l, t];
        },
        useMemoCache: zc,
        useCacheRefresh: function () {
          return (Pl().memoizedState = Dy.bind(null, w));
        },
        useEffectEvent: function (l) {
          var t = Pl(),
            e = { impl: l };
          return (
            (t.memoizedState = e),
            function () {
              if ((rl & 2) !== 0) throw Error(r(440));
              return e.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Rc = {
        readContext: wl,
        use: _n,
        useCallback: qo,
        useContext: wl,
        useEffect: _c,
        useImperativeHandle: jo,
        useInsertionEffect: Ho,
        useLayoutEffect: No,
        useMemo: Yo,
        useReducer: On,
        useRef: Co,
        useState: function () {
          return On(te);
        },
        useDebugValue: Oc,
        useDeferredValue: function (l, t) {
          var e = Cl();
          return Go(e, ml.memoizedState, l, t);
        },
        useTransition: function () {
          var l = On(te)[0],
            t = Cl().memoizedState;
          return [typeof l == "boolean" ? l : Eu(l), t];
        },
        useSyncExternalStore: ho,
        useId: Zo,
        useHostTransitionStatus: Cc,
        useFormState: Oo,
        useActionState: Oo,
        useOptimistic: function (l, t) {
          var e = Cl();
          return bo(e, ml, l, t);
        },
        useMemoCache: zc,
        useCacheRefresh: Vo,
      };
    Rc.useEffectEvent = Ro;
    var Wo = {
      readContext: wl,
      use: _n,
      useCallback: qo,
      useContext: wl,
      useEffect: _c,
      useImperativeHandle: jo,
      useInsertionEffect: Ho,
      useLayoutEffect: No,
      useMemo: Yo,
      useReducer: Ec,
      useRef: Co,
      useState: function () {
        return Ec(te);
      },
      useDebugValue: Oc,
      useDeferredValue: function (l, t) {
        var e = Cl();
        return ml === null ? Mc(e, l, t) : Go(e, ml.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Ec(te)[0],
          t = Cl().memoizedState;
        return [typeof l == "boolean" ? l : Eu(l), t];
      },
      useSyncExternalStore: ho,
      useId: Zo,
      useHostTransitionStatus: Cc,
      useFormState: Do,
      useActionState: Do,
      useOptimistic: function (l, t) {
        var e = Cl();
        return ml !== null ? bo(e, ml, l, t) : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: zc,
      useCacheRefresh: Vo,
    };
    Wo.useEffectEvent = Ro;
    function Hc(l, t, e, a) {
      (t = l.memoizedState), (e = e(a, t)), (e = e == null ? t : q({}, t, e)), (l.memoizedState = e), l.lanes === 0 && (l.updateQueue.baseState = e);
    }
    var Nc = {
      enqueueSetState: function (l, t, e) {
        l = l._reactInternals;
        var a = St(),
          u = Se(a);
        (u.payload = t), e != null && (u.callback = e), (t = pe(l, u, a)), t !== null && (ot(t, l, a), pu(t, l, a));
      },
      enqueueReplaceState: function (l, t, e) {
        l = l._reactInternals;
        var a = St(),
          u = Se(a);
        (u.tag = 1), (u.payload = t), e != null && (u.callback = e), (t = pe(l, u, a)), t !== null && (ot(t, l, a), pu(t, l, a));
      },
      enqueueForceUpdate: function (l, t) {
        l = l._reactInternals;
        var e = St(),
          a = Se(e);
        (a.tag = 2), t != null && (a.callback = t), (t = pe(l, a, e)), t !== null && (ot(t, l, e), pu(t, l, e));
      },
    };
    function Fo(l, t, e, a, u, n, i) {
      return (l = l.stateNode), typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !ru(e, a) || !ru(u, n) : !0;
    }
    function $o(l, t, e, a) {
      (l = t.state), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Nc.enqueueReplaceState(t, t.state, null);
    }
    function Ie(l, t) {
      var e = t;
      if ("ref" in t) {
        e = {};
        for (var a in t) a !== "ref" && (e[a] = t[a]);
      }
      if ((l = l.defaultProps)) {
        e === t && (e = q({}, e));
        for (var u in l) e[u] === void 0 && (e[u] = l[u]);
      }
      return e;
    }
    function Io(l) {
      fn(l);
    }
    function Po(l) {
      console.error(l);
    }
    function lr(l) {
      fn(l);
    }
    function Un(l, t) {
      try {
        var e = l.onUncaughtError;
        e(t.value, { componentStack: t.stack });
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }
    function tr(l, t, e) {
      try {
        var a = l.onCaughtError;
        a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (u) {
        setTimeout(function () {
          throw u;
        });
      }
    }
    function Bc(l, t, e) {
      return (
        (e = Se(e)),
        (e.tag = 3),
        (e.payload = { element: null }),
        (e.callback = function () {
          Un(l, t);
        }),
        e
      );
    }
    function er(l) {
      return (l = Se(l)), (l.tag = 3), l;
    }
    function ar(l, t, e, a) {
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var n = a.value;
        (l.payload = function () {
          return u(n);
        }),
          (l.callback = function () {
            tr(t, e, a);
          });
      }
      var i = e.stateNode;
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (l.callback = function () {
          tr(t, e, a), typeof u != "function" && (xe === null ? (xe = new Set([this])) : xe.add(this));
          var c = a.stack;
          this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
        });
    }
    function Uy(l, t, e, a, u) {
      if (((e.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
        if (((t = e.alternate), t !== null && xa(t, e, u, !0), (e = ht.current), e !== null)) {
          switch (e.tag) {
            case 31:
            case 13:
              return Mt === null ? Zn() : e.alternate === null && Ml === 0 && (Ml = 3), (e.flags &= -257), (e.flags |= 65536), (e.lanes = u), a === Sn ? (e.flags |= 16384) : ((t = e.updateQueue), t === null ? (e.updateQueue = new Set([a])) : t.add(a), cf(l, a, u)), !1;
            case 22:
              return (e.flags |= 65536), a === Sn ? (e.flags |= 16384) : ((t = e.updateQueue), t === null ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (e.updateQueue = t)) : ((e = t.retryQueue), e === null ? (t.retryQueue = new Set([a])) : e.add(a)), cf(l, a, u)), !1;
          }
          throw Error(r(435, e.tag));
        }
        return cf(l, a, u), Zn(), !1;
      }
      if (nl) return (t = ht.current), t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), (t.flags |= 65536), (t.lanes = u), a !== lc && ((l = Error(r(422), { cause: a })), hu(At(l, e)))) : (a !== lc && ((t = Error(r(423), { cause: a })), hu(At(t, e))), (l = l.current.alternate), (l.flags |= 65536), (u &= -u), (l.lanes |= u), (a = At(a, e)), (u = Bc(l.stateNode, a, u)), rc(l, u), Ml !== 4 && (Ml = 2)), !1;
      var n = Error(r(520), { cause: a });
      if (((n = At(n, e)), Hu === null ? (Hu = [n]) : Hu.push(n), Ml !== 4 && (Ml = 2), t === null)) return !0;
      (a = At(a, e)), (e = t);
      do {
        switch (e.tag) {
          case 3:
            return (e.flags |= 65536), (l = u & -u), (e.lanes |= l), (l = Bc(e.stateNode, a, l)), rc(e, l), !1;
          case 1:
            if (((t = e.type), (n = e.stateNode), (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || (n !== null && typeof n.componentDidCatch == "function" && (xe === null || !xe.has(n)))))) return (e.flags |= 65536), (u &= -u), (e.lanes |= u), (u = er(u)), ar(u, l, e, a), rc(e, u), !1;
        }
        e = e.return;
      } while (e !== null);
      return !1;
    }
    var jc = Error(r(461)),
      Nl = !1;
    function kl(l, t, e, a) {
      t.child = l === null ? io(t, null, e, a) : Fe(t, l.child, e, a);
    }
    function ur(l, t, e, a, u) {
      e = e.render;
      var n = t.ref;
      if ("ref" in a) {
        var i = {};
        for (var c in a) c !== "ref" && (i[c] = a[c]);
      } else i = a;
      return Je(t), (a = gc(l, t, e, i, n, u)), (c = Sc()), l !== null && !Nl ? (pc(l, t, u), ee(l, t, u)) : (nl && c && Ii(t), (t.flags |= 1), kl(l, t, a, u), t.child);
    }
    function nr(l, t, e, a, u) {
      if (l === null) {
        var n = e.type;
        return typeof n == "function" && !Wi(n) && n.defaultProps === void 0 && e.compare === null ? ((t.tag = 15), (t.type = n), ir(l, t, n, a, u)) : ((l = dn(e.type, null, a, t, t.mode, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
      }
      if (((n = l.child), !Vc(l, u))) {
        var i = n.memoizedProps;
        if (((e = e.compare), (e = e !== null ? e : ru), e(i, a) && l.ref === t.ref)) return ee(l, t, u);
      }
      return (t.flags |= 1), (l = Ft(n, a)), (l.ref = t.ref), (l.return = t), (t.child = l);
    }
    function ir(l, t, e, a, u) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (ru(n, a) && l.ref === t.ref)
          if (((Nl = !1), (t.pendingProps = a = n), Vc(l, u))) (l.flags & 131072) !== 0 && (Nl = !0);
          else return (t.lanes = l.lanes), ee(l, t, u);
      }
      return qc(l, t, e, a, u);
    }
    function cr(l, t, e, a) {
      var u = a.children,
        n = l !== null ? l.memoizedState : null;
      if ((l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden")) {
        if ((t.flags & 128) !== 0) {
          if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
            for (a = t.child = l.child, u = 0; a !== null; ) (u = u | a.lanes | a.childLanes), (a = a.sibling);
            a = u & ~n;
          } else (a = 0), (t.child = null);
          return fr(l, t, n, e, a);
        }
        if ((e & 536870912) !== 0) (t.memoizedState = { baseLanes: 0, cachePool: null }), l !== null && vn(t, n !== null ? n.cachePool : null), n !== null ? so(t, n) : yc(), oo(t);
        else return (a = t.lanes = 536870912), fr(l, t, n !== null ? n.baseLanes | e : e, e, a);
      } else n !== null ? (vn(t, n.cachePool), so(t, n), ze(), (t.memoizedState = null)) : (l !== null && vn(t, null), yc(), ze());
      return kl(l, t, u, e), t.child;
    }
    function _u(l, t) {
      return (l !== null && l.tag === 22) || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
    }
    function fr(l, t, e, a, u) {
      var n = cc();
      return (n = n === null ? null : { parent: Rl._currentValue, pool: n }), (t.memoizedState = { baseLanes: e, cachePool: n }), l !== null && vn(t, null), yc(), oo(t), l !== null && xa(l, t, a, !0), (t.childLanes = u), null;
    }
    function Rn(l, t) {
      return (t = Nn({ mode: t.mode, children: t.children }, l.mode)), (t.ref = l.ref), (l.child = t), (t.return = l), t;
    }
    function sr(l, t, e) {
      return Fe(t, l.child, null, e), (l = Rn(t, t.pendingProps)), (l.flags |= 2), mt(t), (t.memoizedState = null), l;
    }
    function Ry(l, t, e) {
      var a = t.pendingProps,
        u = (t.flags & 128) !== 0;
      if (((t.flags &= -129), l === null)) {
        if (nl) {
          if (a.mode === "hidden") return (l = Rn(t, a)), (t.lanes = 536870912), _u(null, l);
          if ((mc(t), (l = bl) ? ((l = zd(l, Ot)), (l = l !== null && l.data === "&" ? l : null), l !== null && ((t.memoizedState = { dehydrated: l, treeContext: ye !== null ? { id: Gt, overflow: Xt } : null, retryLane: 536870912, hydrationErrors: null }), (e = Ks(l)), (e.return = t), (t.child = e), (Jl = t), (bl = null))) : (l = null), l === null)) throw me(t);
          return (t.lanes = 536870912), null;
        }
        return Rn(t, a);
      }
      var n = l.memoizedState;
      if (n !== null) {
        var i = n.dehydrated;
        if ((mc(t), u))
          if (t.flags & 256) (t.flags &= -257), (t = sr(l, t, e));
          else if (t.memoizedState !== null) (t.child = l.child), (t.flags |= 128), (t = null);
          else throw Error(r(558));
        else if ((Nl || xa(l, t, e, !1), (u = (e & l.childLanes) !== 0), Nl || u)) {
          if (((a = pl), a !== null && ((i = If(a, e)), i !== 0 && i !== n.retryLane))) throw ((n.retryLane = i), Le(l, i), ot(a, l, i), jc);
          Zn(), (t = sr(l, t, e));
        } else (l = n.treeContext), (bl = Dt(i.nextSibling)), (Jl = t), (nl = !0), (he = null), (Ot = !1), l !== null && ks(t, l), (t = Rn(t, a)), (t.flags |= 4096);
        return t;
      }
      return (l = Ft(l.child, { mode: a.mode, children: a.children })), (l.ref = t.ref), (t.child = l), (l.return = t), l;
    }
    function Hn(l, t) {
      var e = t.ref;
      if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(r(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
      }
    }
    function qc(l, t, e, a, u) {
      return Je(t), (e = gc(l, t, e, a, void 0, u)), (a = Sc()), l !== null && !Nl ? (pc(l, t, u), ee(l, t, u)) : (nl && a && Ii(t), (t.flags |= 1), kl(l, t, e, u), t.child);
    }
    function or(l, t, e, a, u, n) {
      return Je(t), (t.updateQueue = null), (e = yo(t, a, e, u)), ro(l), (a = Sc()), l !== null && !Nl ? (pc(l, t, n), ee(l, t, n)) : (nl && a && Ii(t), (t.flags |= 1), kl(l, t, e, n), t.child);
    }
    function rr(l, t, e, a, u) {
      if ((Je(t), t.stateNode === null)) {
        var n = za,
          i = e.contextType;
        typeof i == "object" && i !== null && (n = wl(i)),
          (n = new e(a, n)),
          (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
          (n.updater = Nc),
          (t.stateNode = n),
          (n._reactInternals = t),
          (n = t.stateNode),
          (n.props = a),
          (n.state = t.memoizedState),
          (n.refs = {}),
          sc(t),
          (i = e.contextType),
          (n.context = typeof i == "object" && i !== null ? wl(i) : za),
          (n.state = t.memoizedState),
          (i = e.getDerivedStateFromProps),
          typeof i == "function" && (Hc(t, e, i, a), (n.state = t.memoizedState)),
          typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || (typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function") || ((i = n.state), typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Nc.enqueueReplaceState(n, n.state, null), zu(t, a, n, u), bu(), (n.state = t.memoizedState)),
          typeof n.componentDidMount == "function" && (t.flags |= 4194308),
          (a = !0);
      } else if (l === null) {
        n = t.stateNode;
        var c = t.memoizedProps,
          f = Ie(e, c);
        n.props = f;
        var h = n.context,
          S = e.contextType;
        (i = za), typeof S == "object" && S !== null && (i = wl(S));
        var E = e.getDerivedStateFromProps;
        (S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function"), (c = t.pendingProps !== c), S || (typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function") || ((c || h !== i) && $o(t, n, a, i)), (ge = !1);
        var m = t.memoizedState;
        (n.state = m),
          zu(t, a, n, u),
          bu(),
          (h = t.memoizedState),
          c || m !== h || ge
            ? (typeof E == "function" && (Hc(t, e, E, a), (h = t.memoizedState)),
              (f = ge || Fo(t, e, f, a, m, h, i)) ? (S || (typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function") || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = h)),
              (n.props = a),
              (n.state = h),
              (n.context = i),
              (a = f))
            : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
      } else {
        (n = t.stateNode),
          oc(l, t),
          (i = t.memoizedProps),
          (S = Ie(e, i)),
          (n.props = S),
          (E = t.pendingProps),
          (m = n.context),
          (h = e.contextType),
          (f = za),
          typeof h == "object" && h !== null && (f = wl(h)),
          (c = e.getDerivedStateFromProps),
          (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || (typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function") || ((i !== E || m !== f) && $o(t, n, a, f)),
          (ge = !1),
          (m = t.memoizedState),
          (n.state = m),
          zu(t, a, n, u),
          bu();
        var v = t.memoizedState;
        i !== E || m !== v || ge || (l !== null && l.dependencies !== null && hn(l.dependencies))
          ? (typeof c == "function" && (Hc(t, e, c, a), (v = t.memoizedState)),
            (S = ge || Fo(t, e, S, a, m, v, f) || (l !== null && l.dependencies !== null && hn(l.dependencies)))
              ? (h || (typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function") || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, v, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, v, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
              : (typeof n.componentDidUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 1024), (t.memoizedProps = a), (t.memoizedState = v)),
            (n.props = a),
            (n.state = v),
            (n.context = f),
            (a = S))
          : (typeof n.componentDidUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 1024), (a = !1));
      }
      return (n = a), Hn(l, t), (a = (t.flags & 128) !== 0), n || a ? ((n = t.stateNode), (e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render()), (t.flags |= 1), l !== null && a ? ((t.child = Fe(t, l.child, null, u)), (t.child = Fe(t, null, e, u))) : kl(l, t, e, u), (t.memoizedState = n.state), (l = t.child)) : (l = ee(l, t, u)), l;
    }
    function dr(l, t, e, a) {
      return Ve(), (t.flags |= 256), kl(l, t, e, a), t.child;
    }
    var Yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Gc(l) {
      return { baseLanes: l, cachePool: lo() };
    }
    function Xc(l, t, e) {
      return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= gt), l;
    }
    function yr(l, t, e) {
      var a = t.pendingProps,
        u = !1,
        n = (t.flags & 128) !== 0,
        i;
      if (((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), i && ((u = !0), (t.flags &= -129)), (i = (t.flags & 32) !== 0), (t.flags &= -33), l === null)) {
        if (nl) {
          if ((u ? be(t) : ze(), (l = bl) ? ((l = zd(l, Ot)), (l = l !== null && l.data !== "&" ? l : null), l !== null && ((t.memoizedState = { dehydrated: l, treeContext: ye !== null ? { id: Gt, overflow: Xt } : null, retryLane: 536870912, hydrationErrors: null }), (e = Ks(l)), (e.return = t), (t.child = e), (Jl = t), (bl = null))) : (l = null), l === null)) throw me(t);
          return Ef(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = a.children;
        return (a = a.fallback), u ? (ze(), (u = t.mode), (c = Nn({ mode: "hidden", children: c }, u)), (a = Ze(a, u, e, null)), (c.return = t), (a.return = t), (c.sibling = a), (t.child = c), (a = t.child), (a.memoizedState = Gc(e)), (a.childLanes = Xc(l, i, e)), (t.memoizedState = Yc), _u(null, a)) : (be(t), Qc(t, c));
      }
      var f = l.memoizedState;
      if (f !== null && ((c = f.dehydrated), c !== null)) {
        if (n)
          t.flags & 256
            ? (be(t), (t.flags &= -257), (t = Lc(l, t, e)))
            : t.memoizedState !== null
            ? (ze(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ze(), (c = a.fallback), (u = t.mode), (a = Nn({ mode: "visible", children: a.children }, u)), (c = Ze(c, u, e, null)), (c.flags |= 2), (a.return = t), (c.return = t), (a.sibling = c), (t.child = a), Fe(t, l.child, null, e), (a = t.child), (a.memoizedState = Gc(e)), (a.childLanes = Xc(l, i, e)), (t.memoizedState = Yc), (t = _u(null, a)));
        else if ((be(t), Ef(c))) {
          if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
          (i = h), (a = Error(r(419))), (a.stack = ""), (a.digest = i), hu({ value: a, source: null, stack: null }), (t = Lc(l, t, e));
        } else if ((Nl || xa(l, t, e, !1), (i = (e & l.childLanes) !== 0), Nl || i)) {
          if (((i = pl), i !== null && ((a = If(i, e)), a !== 0 && a !== f.retryLane))) throw ((f.retryLane = a), Le(l, a), ot(i, l, a), jc);
          Tf(c) || Zn(), (t = Lc(l, t, e));
        } else Tf(c) ? ((t.flags |= 192), (t.child = l.child), (t = null)) : ((l = f.treeContext), (bl = Dt(c.nextSibling)), (Jl = t), (nl = !0), (he = null), (Ot = !1), l !== null && ks(t, l), (t = Qc(t, a.children)), (t.flags |= 4096));
        return t;
      }
      return u
        ? (ze(),
          (c = a.fallback),
          (u = t.mode),
          (f = l.child),
          (h = f.sibling),
          (a = Ft(f, { mode: "hidden", children: a.children })),
          (a.subtreeFlags = f.subtreeFlags & 65011712),
          h !== null ? (c = Ft(h, c)) : ((c = Ze(c, u, e, null)), (c.flags |= 2)),
          (c.return = t),
          (a.return = t),
          (a.sibling = c),
          (t.child = a),
          _u(null, a),
          (a = t.child),
          (c = l.child.memoizedState),
          c === null ? (c = Gc(e)) : ((u = c.cachePool), u !== null ? ((f = Rl._currentValue), (u = u.parent !== f ? { parent: f, pool: f } : u)) : (u = lo()), (c = { baseLanes: c.baseLanes | e, cachePool: u })),
          (a.memoizedState = c),
          (a.childLanes = Xc(l, i, e)),
          (t.memoizedState = Yc),
          _u(l.child, a))
        : (be(t), (e = l.child), (l = e.sibling), (e = Ft(e, { mode: "visible", children: a.children })), (e.return = t), (e.sibling = null), l !== null && ((i = t.deletions), i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)), (t.child = e), (t.memoizedState = null), e);
    }
    function Qc(l, t) {
      return (t = Nn({ mode: "visible", children: t }, l.mode)), (t.return = l), (l.child = t);
    }
    function Nn(l, t) {
      return (l = yt(22, l, null, t)), (l.lanes = 0), l;
    }
    function Lc(l, t, e) {
      return Fe(t, l.child, null, e), (l = Qc(t, t.pendingProps.children)), (l.flags |= 2), (t.memoizedState = null), l;
    }
    function hr(l, t, e) {
      l.lanes |= t;
      var a = l.alternate;
      a !== null && (a.lanes |= t), ac(l.return, t, e);
    }
    function Zc(l, t, e, a, u, n) {
      var i = l.memoizedState;
      i === null ? (l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = a), (i.tail = e), (i.tailMode = u), (i.treeForkCount = n));
    }
    function mr(l, t, e) {
      var a = t.pendingProps,
        u = a.revealOrder,
        n = a.tail;
      a = a.children;
      var i = Dl.current,
        c = (i & 2) !== 0;
      if ((c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1), _(Dl, i), kl(l, t, a, e), (a = nl ? yu : 0), !c && l !== null && (l.flags & 128) !== 0))
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && hr(l, e, t);
          else if (l.tag === 19) hr(l, e, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      switch (u) {
        case "forwards":
          for (e = t.child, u = null; e !== null; ) (l = e.alternate), l !== null && Tn(l) === null && (u = e), (e = e.sibling);
          (e = u), e === null ? ((u = t.child), (t.child = null)) : ((u = e.sibling), (e.sibling = null)), Zc(t, !1, u, e, n, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, u = t.child, t.child = null; u !== null; ) {
            if (((l = u.alternate), l !== null && Tn(l) === null)) {
              t.child = u;
              break;
            }
            (l = u.sibling), (u.sibling = e), (e = u), (u = l);
          }
          Zc(t, !0, e, null, n, a);
          break;
        case "together":
          Zc(t, !1, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function ee(l, t, e) {
      if ((l !== null && (t.dependencies = l.dependencies), (Ae |= t.lanes), (e & t.childLanes) === 0))
        if (l !== null) {
          if ((xa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
        } else return null;
      if (l !== null && t.child !== l.child) throw Error(r(153));
      if (t.child !== null) {
        for (l = t.child, e = Ft(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) (l = l.sibling), (e = e.sibling = Ft(l, l.pendingProps)), (e.return = t);
        e.sibling = null;
      }
      return t.child;
    }
    function Vc(l, t) {
      return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && hn(l)));
    }
    function Hy(l, t, e) {
      switch (t.tag) {
        case 3:
          Al(t, t.stateNode.containerInfo), ve(t, Rl, l.memoizedState.cache), Ve();
          break;
        case 27:
        case 5:
          Be(t);
          break;
        case 4:
          Al(t, t.stateNode.containerInfo);
          break;
        case 10:
          ve(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), mc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (be(t), (t.flags |= 128), null) : (e & t.child.childLanes) !== 0 ? yr(l, t, e) : (be(t), (l = ee(l, t, e)), l !== null ? l.sibling : null);
          be(t);
          break;
        case 19:
          var u = (l.flags & 128) !== 0;
          if (((a = (e & t.childLanes) !== 0), a || (xa(l, t, e, !1), (a = (e & t.childLanes) !== 0)), u)) {
            if (a) return mr(l, t, e);
            t.flags |= 128;
          }
          if (((u = t.memoizedState), u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)), _(Dl, Dl.current), a)) break;
          return null;
        case 22:
          return (t.lanes = 0), cr(l, t, e, t.pendingProps);
        case 24:
          ve(t, Rl, l.memoizedState.cache);
      }
      return ee(l, t, e);
    }
    function vr(l, t, e) {
      if (l !== null)
        if (l.memoizedProps !== t.pendingProps) Nl = !0;
        else {
          if (!Vc(l, e) && (t.flags & 128) === 0) return (Nl = !1), Hy(l, t, e);
          Nl = (l.flags & 131072) !== 0;
        }
      else (Nl = !1), nl && (t.flags & 1048576) !== 0 && ws(t, yu, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          l: {
            var a = t.pendingProps;
            if (((l = ke(t.elementType)), (t.type = l), typeof l == "function")) Wi(l) ? ((a = Ie(l, a)), (t.tag = 1), (t = rr(null, t, l, a, e))) : ((t.tag = 0), (t = qc(null, t, l, a, e)));
            else {
              if (l != null) {
                var u = l.$$typeof;
                if (u === $l) {
                  (t.tag = 11), (t = ur(null, t, l, a, e));
                  break l;
                } else if (u === ll) {
                  (t.tag = 14), (t = nr(null, t, l, a, e));
                  break l;
                }
              }
              throw ((t = Rt(l) || l), Error(r(306, t, "")));
            }
          }
          return t;
        case 0:
          return qc(l, t, t.type, t.pendingProps, e);
        case 1:
          return (a = t.type), (u = Ie(a, t.pendingProps)), rr(l, t, a, u, e);
        case 3:
          l: {
            if ((Al(t, t.stateNode.containerInfo), l === null)) throw Error(r(387));
            a = t.pendingProps;
            var n = t.memoizedState;
            (u = n.element), oc(l, t), zu(t, a, null, e);
            var i = t.memoizedState;
            if (((a = i.cache), ve(t, Rl, a), a !== n.cache && uc(t, [Rl], e, !0), bu(), (a = i.element), n.isDehydrated))
              if (((n = { element: a, isDehydrated: !1, cache: i.cache }), (t.updateQueue.baseState = n), (t.memoizedState = n), t.flags & 256)) {
                t = dr(l, t, a, e);
                break l;
              } else if (a !== u) {
                (u = At(Error(r(424)), t)), hu(u), (t = dr(l, t, a, e));
                break l;
              } else {
                switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                  case 9:
                    l = l.body;
                    break;
                  default:
                    l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
                }
                for (bl = Dt(l.firstChild), Jl = t, nl = !0, he = null, Ot = !0, e = io(t, null, a, e), t.child = e; e; ) (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
              }
            else {
              if ((Ve(), a === u)) {
                t = ee(l, t, e);
                break l;
              }
              kl(l, t, a, e);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Hn(l, t), l === null ? ((e = Od(t.type, null, t.pendingProps, null)) ? (t.memoizedState = e) : nl || ((e = t.type), (l = t.pendingProps), (a = Fn(B.current).createElement(e)), (a[Kl] = t), (a[ut] = l), Wl(a, e, l), Ql(a), (t.stateNode = a))) : (t.memoizedState = Od(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)), null;
        case 27:
          return Be(t), l === null && nl && ((a = t.stateNode = Ad(t.type, t.pendingProps, B.current)), (Jl = t), (Ot = !0), (u = bl), De(t.type) ? ((Af = u), (bl = Dt(a.firstChild))) : (bl = u)), kl(l, t, t.pendingProps.children, e), Hn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return (
            l === null && nl && ((u = a = bl) && ((a = sh(a, t.type, t.pendingProps, Ot)), a !== null ? ((t.stateNode = a), (Jl = t), (bl = Dt(a.firstChild)), (Ot = !1), (u = !0)) : (u = !1)), u || me(t)), Be(t), (u = t.type), (n = t.pendingProps), (i = l !== null ? l.memoizedProps : null), (a = n.children), pf(u, n) ? (a = null) : i !== null && pf(u, i) && (t.flags |= 32), t.memoizedState !== null && ((u = gc(l, t, Ay, null, null, e)), (Qu._currentValue = u)), Hn(l, t), kl(l, t, a, e), t.child
          );
        case 6:
          return l === null && nl && ((l = e = bl) && ((e = oh(e, t.pendingProps, Ot)), e !== null ? ((t.stateNode = e), (Jl = t), (bl = null), (l = !0)) : (l = !1)), l || me(t)), null;
        case 13:
          return yr(l, t, e);
        case 4:
          return Al(t, t.stateNode.containerInfo), (a = t.pendingProps), l === null ? (t.child = Fe(t, null, a, e)) : kl(l, t, a, e), t.child;
        case 11:
          return ur(l, t, t.type, t.pendingProps, e);
        case 7:
          return kl(l, t, t.pendingProps, e), t.child;
        case 8:
          return kl(l, t, t.pendingProps.children, e), t.child;
        case 12:
          return kl(l, t, t.pendingProps.children, e), t.child;
        case 10:
          return (a = t.pendingProps), ve(t, t.type, a.value), kl(l, t, a.children, e), t.child;
        case 9:
          return (u = t.type._context), (a = t.pendingProps.children), Je(t), (u = wl(u)), (a = a(u)), (t.flags |= 1), kl(l, t, a, e), t.child;
        case 14:
          return nr(l, t, t.type, t.pendingProps, e);
        case 15:
          return ir(l, t, t.type, t.pendingProps, e);
        case 19:
          return mr(l, t, e);
        case 31:
          return Ry(l, t, e);
        case 22:
          return cr(l, t, e, t.pendingProps);
        case 24:
          return (
            Je(t),
            (a = wl(Rl)),
            l === null
              ? ((u = cc()), u === null && ((u = pl), (n = nc()), (u.pooledCache = n), n.refCount++, n !== null && (u.pooledCacheLanes |= e), (u = n)), (t.memoizedState = { parent: a, cache: u }), sc(t), ve(t, Rl, u))
              : ((l.lanes & e) !== 0 && (oc(l, t), zu(t, null, null, e), bu()), (u = l.memoizedState), (n = t.memoizedState), u.parent !== a ? ((u = { parent: a, cache: a }), (t.memoizedState = u), t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ve(t, Rl, a)) : ((a = n.cache), ve(t, Rl, a), a !== u.cache && uc(t, [Rl], e, !0))),
            kl(l, t, t.pendingProps.children, e),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function ae(l) {
      l.flags |= 4;
    }
    function Kc(l, t, e, a, u) {
      if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
        if (((l.flags |= 16777216), (u & 335544128) === u))
          if (l.stateNode.complete) l.flags |= 8192;
          else if (Zr()) l.flags |= 8192;
          else throw ((We = Sn), fc);
      } else l.flags &= -16777217;
    }
    function gr(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (((l.flags |= 16777216), !Rd(t)))
        if (Zr()) l.flags |= 8192;
        else throw ((We = Sn), fc);
    }
    function Bn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && ((t = l.tag !== 22 ? Wf() : 536870912), (l.lanes |= t), (qa |= t));
    }
    function Ou(l, t) {
      if (!nl)
        switch (l.tailMode) {
          case "hidden":
            t = l.tail;
            for (var e = null; t !== null; ) t.alternate !== null && (e = t), (t = t.sibling);
            e === null ? (l.tail = null) : (e.sibling = null);
            break;
          case "collapsed":
            e = l.tail;
            for (var a = null; e !== null; ) e.alternate !== null && (a = e), (e = e.sibling);
            a === null ? (t || l.tail === null ? (l.tail = null) : (l.tail.sibling = null)) : (a.sibling = null);
        }
    }
    function zl(l) {
      var t = l.alternate !== null && l.alternate.child === l.child,
        e = 0,
        a = 0;
      if (t) for (var u = l.child; u !== null; ) (e |= u.lanes | u.childLanes), (a |= u.subtreeFlags & 65011712), (a |= u.flags & 65011712), (u.return = l), (u = u.sibling);
      else for (u = l.child; u !== null; ) (e |= u.lanes | u.childLanes), (a |= u.subtreeFlags), (a |= u.flags), (u.return = l), (u = u.sibling);
      return (l.subtreeFlags |= a), (l.childLanes = e), t;
    }
    function Ny(l, t, e) {
      var a = t.pendingProps;
      switch ((Pi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return zl(t), null;
        case 1:
          return zl(t), null;
        case 3:
          return (e = t.stateNode), (a = null), l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Pt(Rl), xl(), e.pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)), (l === null || l.child === null) && (Aa(t) ? ae(t) : l === null || (l.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), tc())), zl(t), null;
        case 26:
          var u = t.type,
            n = t.memoizedState;
          return l === null ? (ae(t), n !== null ? (zl(t), gr(t, n)) : (zl(t), Kc(t, u, null, a, e))) : n ? (n !== l.memoizedState ? (ae(t), zl(t), gr(t, n)) : (zl(t), (t.flags &= -16777217))) : ((l = l.memoizedProps), l !== a && ae(t), zl(t), Kc(t, u, l, a, e)), null;
        case 27:
          if ((ea(t), (e = B.current), (u = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && ae(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return zl(t), null;
            }
            (l = D.current), Aa(t) ? Ws(t) : ((l = Ad(u, a, e)), (t.stateNode = l), ae(t));
          }
          return zl(t), null;
        case 5:
          if ((ea(t), (u = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && ae(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return zl(t), null;
            }
            if (((n = D.current), Aa(t))) Ws(t);
            else {
              var i = Fn(B.current);
              switch (n) {
                case 1:
                  n = i.createElementNS("http://www.w3.org/2000/svg", u);
                  break;
                case 2:
                  n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                  break;
                default:
                  switch (u) {
                    case "svg":
                      n = i.createElementNS("http://www.w3.org/2000/svg", u);
                      break;
                    case "math":
                      n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                      break;
                    case "script":
                      (n = i.createElement("div")), (n.innerHTML = "<script></script>"), (n = n.removeChild(n.firstChild));
                      break;
                    case "select":
                      (n = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select")), a.multiple ? (n.multiple = !0) : a.size && (n.size = a.size);
                      break;
                    default:
                      n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                  }
              }
              (n[Kl] = t), (n[ut] = a);
              l: for (i = t.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  (i.child.return = i), (i = i.child);
                  continue;
                }
                if (i === t) break l;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === t) break l;
                  i = i.return;
                }
                (i.sibling.return = i.return), (i = i.sibling);
              }
              t.stateNode = n;
              l: switch ((Wl(n, u, a), u)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break l;
                case "img":
                  a = !0;
                  break l;
                default:
                  a = !1;
              }
              a && ae(t);
            }
          }
          return zl(t), Kc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== a && ae(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
            if (((l = B.current), Aa(t))) {
              if (((l = t.stateNode), (e = t.memoizedProps), (a = null), (u = Jl), u !== null))
                switch (u.tag) {
                  case 27:
                  case 5:
                    a = u.memoizedProps;
                }
              (l[Kl] = t), (l = !!(l.nodeValue === e || (a !== null && a.suppressHydrationWarning === !0) || yd(l.nodeValue, e))), l || me(t, !0);
            } else (l = Fn(l).createTextNode(a)), (l[Kl] = t), (t.stateNode = l);
          }
          return zl(t), null;
        case 31:
          if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
            if (((a = Aa(t)), e !== null)) {
              if (l === null) {
                if (!a) throw Error(r(318));
                if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(r(557));
                l[Kl] = t;
              } else Ve(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
              zl(t), (l = !1);
            } else (e = tc()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), (l = !0);
            if (!l) return t.flags & 256 ? (mt(t), t) : (mt(t), null);
            if ((t.flags & 128) !== 0) throw Error(r(558));
          }
          return zl(t), null;
        case 13:
          if (((a = t.memoizedState), l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))) {
            if (((u = Aa(t)), a !== null && a.dehydrated !== null)) {
              if (l === null) {
                if (!u) throw Error(r(318));
                if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(r(317));
                u[Kl] = t;
              } else Ve(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
              zl(t), (u = !1);
            } else (u = tc()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), (u = !0);
            if (!u) return t.flags & 256 ? (mt(t), t) : (mt(t), null);
          }
          return (
            mt(t),
            (t.flags & 128) !== 0
              ? ((t.lanes = e), t)
              : ((e = a !== null), (l = l !== null && l.memoizedState !== null), e && ((a = t.child), (u = null), a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), (n = null), a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), Bn(t, t.updateQueue), zl(t), null)
          );
        case 4:
          return xl(), l === null && hf(t.stateNode.containerInfo), zl(t), null;
        case 10:
          return Pt(t.type), zl(t), null;
        case 19:
          if ((T(Dl), (a = t.memoizedState), a === null)) return zl(t), null;
          if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
            if (u) Ou(a, !1);
            else {
              if (Ml !== 0 || (l !== null && (l.flags & 128) !== 0))
                for (l = t.child; l !== null; ) {
                  if (((n = Tn(l)), n !== null)) {
                    for (t.flags |= 128, Ou(a, !1), l = n.updateQueue, t.updateQueue = l, Bn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) Vs(e, l), (e = e.sibling);
                    return _(Dl, (Dl.current & 1) | 2), nl && $t(t, a.treeForkCount), t.child;
                  }
                  l = l.sibling;
                }
              a.tail !== null && Vl() > Xn && ((t.flags |= 128), (u = !0), Ou(a, !1), (t.lanes = 4194304));
            }
          else {
            if (!u)
              if (((l = Tn(n)), l !== null)) {
                if (((t.flags |= 128), (u = !0), (l = l.updateQueue), (t.updateQueue = l), Bn(t, l), Ou(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !nl)) return zl(t), null;
              } else 2 * Vl() - a.renderingStartTime > Xn && e !== 536870912 && ((t.flags |= 128), (u = !0), Ou(a, !1), (t.lanes = 4194304));
            a.isBackwards ? ((n.sibling = t.child), (t.child = n)) : ((l = a.last), l !== null ? (l.sibling = n) : (t.child = n), (a.last = n));
          }
          return a.tail !== null ? ((l = a.tail), (a.rendering = l), (a.tail = l.sibling), (a.renderingStartTime = Vl()), (l.sibling = null), (e = Dl.current), _(Dl, u ? (e & 1) | 2 : e & 1), nl && $t(t, a.treeForkCount), l) : (zl(t), null);
        case 22:
        case 23:
          return (
            mt(t),
            hc(),
            (a = t.memoizedState !== null),
            l !== null ? (l.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (zl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : zl(t),
            (e = t.updateQueue),
            e !== null && Bn(t, e.retryQueue),
            (e = null),
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            (a = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && T(we),
            null
          );
        case 24:
          return (e = null), l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Pt(Rl), zl(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function By(l, t) {
      switch ((Pi(t), t.tag)) {
        case 1:
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 3:
          return Pt(Rl), xl(), (l = t.flags), (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 26:
        case 27:
        case 5:
          return ea(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((mt(t), t.alternate === null)) throw Error(r(340));
            Ve();
          }
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 13:
          if ((mt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
            if (t.alternate === null) throw Error(r(340));
            Ve();
          }
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 19:
          return T(Dl), null;
        case 4:
          return xl(), null;
        case 10:
          return Pt(t.type), null;
        case 22:
        case 23:
          return mt(t), hc(), l !== null && T(we), (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 24:
          return Pt(Rl), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Sr(l, t) {
      switch ((Pi(t), t.tag)) {
        case 3:
          Pt(Rl), xl();
          break;
        case 26:
        case 27:
        case 5:
          ea(t);
          break;
        case 4:
          xl();
          break;
        case 31:
          t.memoizedState !== null && mt(t);
          break;
        case 13:
          mt(t);
          break;
        case 19:
          T(Dl);
          break;
        case 10:
          Pt(t.type);
          break;
        case 22:
        case 23:
          mt(t), hc(), l !== null && T(we);
          break;
        case 24:
          Pt(Rl);
      }
    }
    function Mu(l, t) {
      try {
        var e = t.updateQueue,
          a = e !== null ? e.lastEffect : null;
        if (a !== null) {
          var u = a.next;
          e = u;
          do {
            if ((e.tag & l) === l) {
              a = void 0;
              var n = e.create,
                i = e.inst;
              (a = n()), (i.destroy = a);
            }
            e = e.next;
          } while (e !== u);
        }
      } catch (c) {
        hl(t, t.return, c);
      }
    }
    function Te(l, t, e) {
      try {
        var a = t.updateQueue,
          u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var n = u.next;
          a = n;
          do {
            if ((a.tag & l) === l) {
              var i = a.inst,
                c = i.destroy;
              if (c !== void 0) {
                (i.destroy = void 0), (u = t);
                var f = e,
                  h = c;
                try {
                  h();
                } catch (S) {
                  hl(u, f, S);
                }
              }
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (S) {
        hl(t, t.return, S);
      }
    }
    function pr(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var e = l.stateNode;
        try {
          fo(t, e);
        } catch (a) {
          hl(l, l.return, a);
        }
      }
    }
    function br(l, t, e) {
      (e.props = Ie(l.type, l.memoizedProps)), (e.state = l.memoizedState);
      try {
        e.componentWillUnmount();
      } catch (a) {
        hl(l, t, a);
      }
    }
    function Du(l, t) {
      try {
        var e = l.ref;
        if (e !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var a = l.stateNode;
              break;
            case 30:
              a = l.stateNode;
              break;
            default:
              a = l.stateNode;
          }
          typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
        }
      } catch (u) {
        hl(l, t, u);
      }
    }
    function Qt(l, t) {
      var e = l.ref,
        a = l.refCleanup;
      if (e !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (u) {
            hl(l, t, u);
          } finally {
            (l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null);
          }
        else if (typeof e == "function")
          try {
            e(null);
          } catch (u) {
            hl(l, t, u);
          }
        else e.current = null;
    }
    function zr(l) {
      var t = l.type,
        e = l.memoizedProps,
        a = l.stateNode;
      try {
        l: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && a.focus();
            break l;
          case "img":
            e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
        }
      } catch (u) {
        hl(l, l.return, u);
      }
    }
    function Jc(l, t, e) {
      try {
        var a = l.stateNode;
        ah(a, l.type, e, t), (a[ut] = t);
      } catch (u) {
        hl(l, l.return, u);
      }
    }
    function Tr(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && De(l.type)) || l.tag === 4;
    }
    function wc(l) {
      l: for (;;) {
        for (; l.sibling === null; ) {
          if (l.return === null || Tr(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if ((l.tag === 27 && De(l.type)) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          (l.child.return = l), (l = l.child);
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function kc(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) (l = l.stateNode), t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : ((t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e), t.appendChild(l), (e = e._reactRootContainer), e != null || t.onclick !== null || (t.onclick = kt));
      else if (a !== 4 && (a === 27 && De(l.type) && ((e = l.stateNode), (t = null)), (l = l.child), l !== null)) for (kc(l, t, e), l = l.sibling; l !== null; ) kc(l, t, e), (l = l.sibling);
    }
    function jn(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
      else if (a !== 4 && (a === 27 && De(l.type) && (e = l.stateNode), (l = l.child), l !== null)) for (jn(l, t, e), l = l.sibling; l !== null; ) jn(l, t, e), (l = l.sibling);
    }
    function Er(l) {
      var t = l.stateNode,
        e = l.memoizedProps;
      try {
        for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
        Wl(t, a, e), (t[Kl] = l), (t[ut] = e);
      } catch (n) {
        hl(l, l.return, n);
      }
    }
    var ue = !1,
      Bl = !1,
      Wc = !1,
      Ar = typeof WeakSet == "function" ? WeakSet : Set,
      Ll = null;
    function jy(l, t) {
      if (((l = l.containerInfo), (gf = ai), (l = Bs(l)), Li(l))) {
        if ("selectionStart" in l) var e = { start: l.selectionStart, end: l.selectionEnd };
        else
          l: {
            e = ((e = l.ownerDocument) && e.defaultView) || window;
            var a = e.getSelection && e.getSelection();
            if (a && a.rangeCount !== 0) {
              e = a.anchorNode;
              var u = a.anchorOffset,
                n = a.focusNode;
              a = a.focusOffset;
              try {
                e.nodeType, n.nodeType;
              } catch {
                e = null;
                break l;
              }
              var i = 0,
                c = -1,
                f = -1,
                h = 0,
                S = 0,
                E = l,
                m = null;
              t: for (;;) {
                for (var v; E !== e || (u !== 0 && E.nodeType !== 3) || (c = i + u), E !== n || (a !== 0 && E.nodeType !== 3) || (f = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (v = E.firstChild) !== null; ) (m = E), (E = v);
                for (;;) {
                  if (E === l) break t;
                  if ((m === e && ++h === u && (c = i), m === n && ++S === a && (f = i), (v = E.nextSibling) !== null)) break;
                  (E = m), (m = E.parentNode);
                }
                E = v;
              }
              e = c === -1 || f === -1 ? null : { start: c, end: f };
            } else e = null;
          }
        e = e || { start: 0, end: 0 };
      } else e = null;
      for (Sf = { focusedElem: l, selectionRange: e }, ai = !1, Ll = t; Ll !== null; )
        if (((t = Ll), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)) (l.return = t), (Ll = l);
        else
          for (; Ll !== null; ) {
            switch (((t = Ll), (n = t.alternate), (l = t.flags), t.tag)) {
              case 0:
                if ((l & 4) !== 0 && ((l = t.updateQueue), (l = l !== null ? l.events : null), l !== null)) for (e = 0; e < l.length; e++) (u = l[e]), (u.ref.impl = u.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((l & 1024) !== 0 && n !== null) {
                  (l = void 0), (e = t), (u = n.memoizedProps), (n = n.memoizedState), (a = e.stateNode);
                  try {
                    var H = Ie(e.type, u);
                    (l = a.getSnapshotBeforeUpdate(H, n)), (a.__reactInternalSnapshotBeforeUpdate = l);
                  } catch (L) {
                    hl(e, e.return, L);
                  }
                }
                break;
              case 3:
                if ((l & 1024) !== 0) {
                  if (((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)) zf(l);
                  else if (e === 1)
                    switch (l.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zf(l);
                        break;
                      default:
                        l.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((l & 1024) !== 0) throw Error(r(163));
            }
            if (((l = t.sibling), l !== null)) {
              (l.return = t.return), (Ll = l);
              break;
            }
            Ll = t.return;
          }
    }
    function xr(l, t, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ie(l, e), a & 4 && Mu(5, e);
          break;
        case 1:
          if ((ie(l, e), a & 4))
            if (((l = e.stateNode), t === null))
              try {
                l.componentDidMount();
              } catch (i) {
                hl(e, e.return, i);
              }
            else {
              var u = Ie(e.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
              } catch (i) {
                hl(e, e.return, i);
              }
            }
          a & 64 && pr(e), a & 512 && Du(e, e.return);
          break;
        case 3:
          if ((ie(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
            if (((t = null), e.child !== null))
              switch (e.child.tag) {
                case 27:
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
            try {
              fo(l, t);
            } catch (i) {
              hl(e, e.return, i);
            }
          }
          break;
        case 27:
          t === null && a & 4 && Er(e);
        case 26:
        case 5:
          ie(l, e), t === null && a & 4 && zr(e), a & 512 && Du(e, e.return);
          break;
        case 12:
          ie(l, e);
          break;
        case 31:
          ie(l, e), a & 4 && Mr(l, e);
          break;
        case 13:
          ie(l, e), a & 4 && Dr(l, e), a & 64 && ((l = e.memoizedState), l !== null && ((l = l.dehydrated), l !== null && ((e = Ky.bind(null, e)), rh(l, e))));
          break;
        case 22:
          if (((a = e.memoizedState !== null || ue), !a)) {
            (t = (t !== null && t.memoizedState !== null) || Bl), (u = ue);
            var n = Bl;
            (ue = a), (Bl = t) && !n ? ce(l, e, (e.subtreeFlags & 8772) !== 0) : ie(l, e), (ue = u), (Bl = n);
          }
          break;
        case 30:
          break;
        default:
          ie(l, e);
      }
    }
    function _r(l) {
      var t = l.alternate;
      t !== null && ((l.alternate = null), _r(t)), (l.child = null), (l.deletions = null), (l.sibling = null), l.tag === 5 && ((t = l.stateNode), t !== null && xi(t)), (l.stateNode = null), (l.return = null), (l.dependencies = null), (l.memoizedProps = null), (l.memoizedState = null), (l.pendingProps = null), (l.stateNode = null), (l.updateQueue = null);
    }
    var Tl = null,
      it = !1;
    function ne(l, t, e) {
      for (e = e.child; e !== null; ) Or(l, t, e), (e = e.sibling);
    }
    function Or(l, t, e) {
      if (fl && typeof fl.onCommitFiberUnmount == "function")
        try {
          fl.onCommitFiberUnmount(dl, e);
        } catch {}
      switch (e.tag) {
        case 26:
          Bl || Qt(e, t), ne(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
          break;
        case 27:
          Bl || Qt(e, t);
          var a = Tl,
            u = it;
          De(e.type) && ((Tl = e.stateNode), (it = !1)), ne(l, t, e), Yu(e.stateNode), (Tl = a), (it = u);
          break;
        case 5:
          Bl || Qt(e, t);
        case 6:
          if (((a = Tl), (u = it), (Tl = null), ne(l, t, e), (Tl = a), (it = u), Tl !== null))
            if (it)
              try {
                (Tl.nodeType === 9 ? Tl.body : Tl.nodeName === "HTML" ? Tl.ownerDocument.body : Tl).removeChild(e.stateNode);
              } catch (n) {
                hl(e, t, n);
              }
            else
              try {
                Tl.removeChild(e.stateNode);
              } catch (n) {
                hl(e, t, n);
              }
          break;
        case 18:
          Tl !== null && (it ? ((l = Tl), pd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Ka(l)) : pd(Tl, e.stateNode));
          break;
        case 4:
          (a = Tl), (u = it), (Tl = e.stateNode.containerInfo), (it = !0), ne(l, t, e), (Tl = a), (it = u);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Te(2, e, t), Bl || Te(4, e, t), ne(l, t, e);
          break;
        case 1:
          Bl || (Qt(e, t), (a = e.stateNode), typeof a.componentWillUnmount == "function" && br(e, t, a)), ne(l, t, e);
          break;
        case 21:
          ne(l, t, e);
          break;
        case 22:
          (Bl = (a = Bl) || e.memoizedState !== null), ne(l, t, e), (Bl = a);
          break;
        default:
          ne(l, t, e);
      }
    }
    function Mr(l, t) {
      if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))) {
        l = l.dehydrated;
        try {
          Ka(l);
        } catch (e) {
          hl(t, t.return, e);
        }
      }
    }
    function Dr(l, t) {
      if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null))))
        try {
          Ka(l);
        } catch (e) {
          hl(t, t.return, e);
        }
    }
    function qy(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new Ar()), t;
        case 22:
          return (l = l.stateNode), (t = l._retryCache), t === null && (t = l._retryCache = new Ar()), t;
        default:
          throw Error(r(435, l.tag));
      }
    }
    function qn(l, t) {
      var e = qy(l);
      t.forEach(function (a) {
        if (!e.has(a)) {
          e.add(a);
          var u = Jy.bind(null, l, a);
          a.then(u, u);
        }
      });
    }
    function ct(l, t) {
      var e = t.deletions;
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = l,
            i = t,
            c = i;
          l: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (De(c.type)) {
                  (Tl = c.stateNode), (it = !1);
                  break l;
                }
                break;
              case 5:
                (Tl = c.stateNode), (it = !1);
                break l;
              case 3:
              case 4:
                (Tl = c.stateNode.containerInfo), (it = !0);
                break l;
            }
            c = c.return;
          }
          if (Tl === null) throw Error(r(160));
          Or(n, i, u), (Tl = null), (it = !1), (n = u.alternate), n !== null && (n.return = null), (u.return = null);
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Cr(t, l), (t = t.sibling);
    }
    var qt = null;
    function Cr(l, t) {
      var e = l.alternate,
        a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ct(t, l), ft(l), a & 4 && (Te(3, l, l.return), Mu(3, l), Te(5, l, l.return));
          break;
        case 1:
          ct(t, l), ft(l), a & 512 && (Bl || e === null || Qt(e, e.return)), a & 64 && ue && ((l = l.updateQueue), l !== null && ((a = l.callbacks), a !== null && ((e = l.shared.hiddenCallbacks), (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
          break;
        case 26:
          var u = qt;
          if ((ct(t, l), ft(l), a & 512 && (Bl || e === null || Qt(e, e.return)), a & 4)) {
            var n = e !== null ? e.memoizedState : null;
            if (((a = l.memoizedState), e === null))
              if (a === null)
                if (l.stateNode === null) {
                  l: {
                    (a = l.type), (e = l.memoizedProps), (u = u.ownerDocument || u);
                    t: switch (a) {
                      case "title":
                        (n = u.getElementsByTagName("title")[0]), (!n || n[eu] || n[Kl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && ((n = u.createElement(a)), u.head.insertBefore(n, u.querySelector("head > title"))), Wl(n, a, e), (n[Kl] = l), Ql(n), (a = n);
                        break l;
                      case "link":
                        var i = Cd("link", "href", u).get(a + (e.href || ""));
                        if (i) {
                          for (var c = 0; c < i.length; c++)
                            if (((n = i[c]), n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin))) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(a)), Wl(n, a, e), u.head.appendChild(n);
                        break;
                      case "meta":
                        if ((i = Cd("meta", "content", u).get(a + (e.content || "")))) {
                          for (c = 0; c < i.length; c++)
                            if (((n = i[c]), n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet))) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(a)), Wl(n, a, e), u.head.appendChild(n);
                        break;
                      default:
                        throw Error(r(468, a));
                    }
                    (n[Kl] = l), Ql(n), (a = n);
                  }
                  l.stateNode = a;
                } else Ud(u, l.type, l.stateNode);
              else l.stateNode = Dd(u, a, l.memoizedProps);
            else n !== a ? (n === null ? e.stateNode !== null && ((e = e.stateNode), e.parentNode.removeChild(e)) : n.count--, a === null ? Ud(u, l.type, l.stateNode) : Dd(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Jc(l, l.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          ct(t, l), ft(l), a & 512 && (Bl || e === null || Qt(e, e.return)), e !== null && a & 4 && Jc(l, l.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if ((ct(t, l), ft(l), a & 512 && (Bl || e === null || Qt(e, e.return)), l.flags & 32)) {
            u = l.stateNode;
            try {
              ha(u, "");
            } catch (H) {
              hl(l, l.return, H);
            }
          }
          a & 4 && l.stateNode != null && ((u = l.memoizedProps), Jc(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Wc = !0);
          break;
        case 6:
          if ((ct(t, l), ft(l), a & 4)) {
            if (l.stateNode === null) throw Error(r(162));
            (a = l.memoizedProps), (e = l.stateNode);
            try {
              e.nodeValue = a;
            } catch (H) {
              hl(l, l.return, H);
            }
          }
          break;
        case 3:
          if (((Pn = null), (u = qt), (qt = $n(t.containerInfo)), ct(t, l), (qt = u), ft(l), a & 4 && e !== null && e.memoizedState.isDehydrated))
            try {
              Ka(t.containerInfo);
            } catch (H) {
              hl(l, l.return, H);
            }
          Wc && ((Wc = !1), Ur(l));
          break;
        case 4:
          (a = qt), (qt = $n(l.stateNode.containerInfo)), ct(t, l), ft(l), (qt = a);
          break;
        case 12:
          ct(t, l), ft(l);
          break;
        case 31:
          ct(t, l), ft(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), qn(l, a)));
          break;
        case 13:
          ct(t, l), ft(l), l.child.flags & 8192 && (l.memoizedState !== null) != (e !== null && e.memoizedState !== null) && (Gn = Vl()), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), qn(l, a)));
          break;
        case 22:
          u = l.memoizedState !== null;
          var f = e !== null && e.memoizedState !== null,
            h = ue,
            S = Bl;
          if (((ue = h || u), (Bl = S || f), ct(t, l), (Bl = S), (ue = h), ft(l), a & 8192))
            l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || ue || Bl || Pe(l)), e = null, t = l; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (e === null) {
                  f = e = t;
                  try {
                    if (((n = f.stateNode), u)) (i = n.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none");
                    else {
                      c = f.stateNode;
                      var E = f.memoizedProps.style,
                        m = E != null && E.hasOwnProperty("display") ? E.display : null;
                      c.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                    }
                  } catch (H) {
                    hl(f, f.return, H);
                  }
                }
              } else if (t.tag === 6) {
                if (e === null) {
                  f = t;
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (H) {
                    hl(f, f.return, H);
                  }
                }
              } else if (t.tag === 18) {
                if (e === null) {
                  f = t;
                  try {
                    var v = f.stateNode;
                    u ? bd(v, !0) : bd(f.stateNode, !1);
                  } catch (H) {
                    hl(f, f.return, H);
                  }
                }
              } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === l) && t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === l) break l;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) break l;
                e === t && (e = null), (t = t.return);
              }
              e === t && (e = null), (t.sibling.return = t.return), (t = t.sibling);
            }
          a & 4 && ((a = l.updateQueue), a !== null && ((e = a.retryQueue), e !== null && ((a.retryQueue = null), qn(l, e))));
          break;
        case 19:
          ct(t, l), ft(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), qn(l, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ct(t, l), ft(l);
      }
    }
    function ft(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var e, a = l.return; a !== null; ) {
            if (Tr(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(r(160));
          switch (e.tag) {
            case 27:
              var u = e.stateNode,
                n = wc(l);
              jn(l, n, u);
              break;
            case 5:
              var i = e.stateNode;
              e.flags & 32 && (ha(i, ""), (e.flags &= -33));
              var c = wc(l);
              jn(l, c, i);
              break;
            case 3:
            case 4:
              var f = e.stateNode.containerInfo,
                h = wc(l);
              kc(l, h, f);
              break;
            default:
              throw Error(r(161));
          }
        } catch (S) {
          hl(l, l.return, S);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function Ur(l) {
      if (l.subtreeFlags & 1024)
        for (l = l.child; l !== null; ) {
          var t = l;
          Ur(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling);
        }
    }
    function ie(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) xr(l, t.alternate, t), (t = t.sibling);
    }
    function Pe(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Te(4, t, t.return), Pe(t);
            break;
          case 1:
            Qt(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && br(t, t.return, e), Pe(t);
            break;
          case 27:
            Yu(t.stateNode);
          case 26:
          case 5:
            Qt(t, t.return), Pe(t);
            break;
          case 22:
            t.memoizedState === null && Pe(t);
            break;
          case 30:
            Pe(t);
            break;
          default:
            Pe(t);
        }
        l = l.sibling;
      }
    }
    function ce(l, t, e) {
      for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate,
          u = l,
          n = t,
          i = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ce(u, n, e), Mu(4, n);
            break;
          case 1:
            if ((ce(u, n, e), (a = n), (u = a.stateNode), typeof u.componentDidMount == "function"))
              try {
                u.componentDidMount();
              } catch (h) {
                hl(a, a.return, h);
              }
            if (((a = n), (u = a.updateQueue), u !== null)) {
              var c = a.stateNode;
              try {
                var f = u.shared.hiddenCallbacks;
                if (f !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) co(f[u], c);
              } catch (h) {
                hl(a, a.return, h);
              }
            }
            e && i & 64 && pr(n), Du(n, n.return);
            break;
          case 27:
            Er(n);
          case 26:
          case 5:
            ce(u, n, e), e && a === null && i & 4 && zr(n), Du(n, n.return);
            break;
          case 12:
            ce(u, n, e);
            break;
          case 31:
            ce(u, n, e), e && i & 4 && Mr(u, n);
            break;
          case 13:
            ce(u, n, e), e && i & 4 && Dr(u, n);
            break;
          case 22:
            n.memoizedState === null && ce(u, n, e), Du(n, n.return);
            break;
          case 30:
            break;
          default:
            ce(u, n, e);
        }
        t = t.sibling;
      }
    }
    function Fc(l, t) {
      var e = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), (l = null), t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && mu(e));
    }
    function $c(l, t) {
      (l = null), t.alternate !== null && (l = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== l && (t.refCount++, l != null && mu(l));
    }
    function Yt(l, t, e, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Rr(l, t, e, a), (t = t.sibling);
    }
    function Rr(l, t, e, a) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Yt(l, t, e, a), u & 2048 && Mu(9, t);
          break;
        case 1:
          Yt(l, t, e, a);
          break;
        case 3:
          Yt(l, t, e, a), u & 2048 && ((l = null), t.alternate !== null && (l = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== l && (t.refCount++, l != null && mu(l)));
          break;
        case 12:
          if (u & 2048) {
            Yt(l, t, e, a), (l = t.stateNode);
            try {
              var n = t.memoizedProps,
                i = n.id,
                c = n.onPostCommit;
              typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (f) {
              hl(t, t.return, f);
            }
          } else Yt(l, t, e, a);
          break;
        case 31:
          Yt(l, t, e, a);
          break;
        case 13:
          Yt(l, t, e, a);
          break;
        case 23:
          break;
        case 22:
          (n = t.stateNode), (i = t.alternate), t.memoizedState !== null ? (n._visibility & 2 ? Yt(l, t, e, a) : Cu(l, t)) : n._visibility & 2 ? Yt(l, t, e, a) : ((n._visibility |= 2), Na(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Fc(i, t);
          break;
        case 24:
          Yt(l, t, e, a), u & 2048 && $c(t.alternate, t);
          break;
        default:
          Yt(l, t, e, a);
      }
    }
    function Na(l, t, e, a, u) {
      for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
        var n = l,
          i = t,
          c = e,
          f = a,
          h = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Na(n, i, c, f, u), Mu(8, i);
            break;
          case 23:
            break;
          case 22:
            var S = i.stateNode;
            i.memoizedState !== null ? (S._visibility & 2 ? Na(n, i, c, f, u) : Cu(n, i)) : ((S._visibility |= 2), Na(n, i, c, f, u)), u && h & 2048 && Fc(i.alternate, i);
            break;
          case 24:
            Na(n, i, c, f, u), u && h & 2048 && $c(i.alternate, i);
            break;
          default:
            Na(n, i, c, f, u);
        }
        t = t.sibling;
      }
    }
    function Cu(l, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var e = l,
            a = t,
            u = a.flags;
          switch (a.tag) {
            case 22:
              Cu(e, a), u & 2048 && Fc(a.alternate, a);
              break;
            case 24:
              Cu(e, a), u & 2048 && $c(a.alternate, a);
              break;
            default:
              Cu(e, a);
          }
          t = t.sibling;
        }
    }
    var Uu = 8192;
    function Ba(l, t, e) {
      if (l.subtreeFlags & Uu) for (l = l.child; l !== null; ) Hr(l, t, e), (l = l.sibling);
    }
    function Hr(l, t, e) {
      switch (l.tag) {
        case 26:
          Ba(l, t, e), l.flags & Uu && l.memoizedState !== null && Eh(e, qt, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          Ba(l, t, e);
          break;
        case 3:
        case 4:
          var a = qt;
          (qt = $n(l.stateNode.containerInfo)), Ba(l, t, e), (qt = a);
          break;
        case 22:
          l.memoizedState === null && ((a = l.alternate), a !== null && a.memoizedState !== null ? ((a = Uu), (Uu = 16777216), Ba(l, t, e), (Uu = a)) : Ba(l, t, e));
          break;
        default:
          Ba(l, t, e);
      }
    }
    function Nr(l) {
      var t = l.alternate;
      if (t !== null && ((l = t.child), l !== null)) {
        t.child = null;
        do (t = l.sibling), (l.sibling = null), (l = t);
        while (l !== null);
      }
    }
    function Ru(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var e = 0; e < t.length; e++) {
            var a = t[e];
            (Ll = a), jr(a, l);
          }
        Nr(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) Br(l), (l = l.sibling);
    }
    function Br(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ru(l), l.flags & 2048 && Te(9, l, l.return);
          break;
        case 3:
          Ru(l);
          break;
        case 12:
          Ru(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? ((t._visibility &= -3), Yn(l)) : Ru(l);
          break;
        default:
          Ru(l);
      }
    }
    function Yn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var e = 0; e < t.length; e++) {
            var a = t[e];
            (Ll = a), jr(a, l);
          }
        Nr(l);
      }
      for (l = l.child; l !== null; ) {
        switch (((t = l), t.tag)) {
          case 0:
          case 11:
          case 15:
            Te(8, t, t.return), Yn(t);
            break;
          case 22:
            (e = t.stateNode), e._visibility & 2 && ((e._visibility &= -3), Yn(t));
            break;
          default:
            Yn(t);
        }
        l = l.sibling;
      }
    }
    function jr(l, t) {
      for (; Ll !== null; ) {
        var e = Ll;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Te(8, e, t);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            mu(e.memoizedState.cache);
        }
        if (((a = e.child), a !== null)) (a.return = e), (Ll = a);
        else
          l: for (e = l; Ll !== null; ) {
            a = Ll;
            var u = a.sibling,
              n = a.return;
            if ((_r(a), a === e)) {
              Ll = null;
              break l;
            }
            if (u !== null) {
              (u.return = n), (Ll = u);
              break l;
            }
            Ll = n;
          }
      }
    }
    var Yy = {
        getCacheForType: function (l) {
          var t = wl(Rl),
            e = t.data.get(l);
          return e === void 0 && ((e = l()), t.data.set(l, e)), e;
        },
        cacheSignal: function () {
          return wl(Rl).controller.signal;
        },
      },
      Gy = typeof WeakMap == "function" ? WeakMap : Map,
      rl = 0,
      pl = null,
      tl = null,
      al = 0,
      yl = 0,
      vt = null,
      Ee = !1,
      ja = !1,
      Ic = !1,
      fe = 0,
      Ml = 0,
      Ae = 0,
      la = 0,
      Pc = 0,
      gt = 0,
      qa = 0,
      Hu = null,
      st = null,
      lf = !1,
      Gn = 0,
      qr = 0,
      Xn = 1 / 0,
      Qn = null,
      xe = null,
      ql = 0,
      _e = null,
      Ya = null,
      se = 0,
      tf = 0,
      ef = null,
      Yr = null,
      Nu = 0,
      af = null;
    function St() {
      return (rl & 2) !== 0 && al !== 0 ? al & -al : p.T !== null ? of() : Pf();
    }
    function Gr() {
      if (gt === 0)
        if ((al & 536870912) === 0 || nl) {
          var l = Bt;
          (Bt <<= 1), (Bt & 3932160) === 0 && (Bt = 262144), (gt = l);
        } else gt = 536870912;
      return (l = ht.current), l !== null && (l.flags |= 32), gt;
    }
    function ot(l, t, e) {
      ((l === pl && (yl === 2 || yl === 9)) || l.cancelPendingCommit !== null) && (Ga(l, 0), Oe(l, al, gt, !1)), tu(l, e), ((rl & 2) === 0 || l !== pl) && (l === pl && ((rl & 2) === 0 && (la |= e), Ml === 4 && Oe(l, al, gt, !1)), Lt(l));
    }
    function Xr(l, t, e) {
      if ((rl & 6) !== 0) throw Error(r(327));
      var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || lu(l, t),
        u = a ? Ly(l, t) : nf(l, t, !0),
        n = a;
      do {
        if (u === 0) {
          ja && !a && Oe(l, t, 0, !1);
          break;
        } else {
          if (((e = l.current.alternate), n && !Xy(e))) {
            (u = nf(l, t, !1)), (n = !1);
            continue;
          }
          if (u === 2) {
            if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
            else (i = l.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
            if (i !== 0) {
              t = i;
              l: {
                var c = l;
                u = Hu;
                var f = c.current.memoizedState.isDehydrated;
                if ((f && (Ga(c, i).flags |= 256), (i = nf(c, i, !1)), i !== 2)) {
                  if (Ic && !f) {
                    (c.errorRecoveryDisabledLanes |= n), (la |= n), (u = 4);
                    break l;
                  }
                  (n = st), (st = u), n !== null && (st === null ? (st = n) : st.push.apply(st, n));
                }
                u = i;
              }
              if (((n = !1), u !== 2)) continue;
            }
          }
          if (u === 1) {
            Ga(l, 0), Oe(l, t, 0, !0);
            break;
          }
          l: {
            switch (((a = l), (n = u), n)) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Oe(a, t, gt, !Ee);
                break l;
              case 2:
                st = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((t & 62914560) === t && ((u = Gn + 300 - Vl()), 10 < u)) {
              if ((Oe(a, t, gt, !Ee), Fu(a, 0, !0) !== 0)) break l;
              (se = t), (a.timeoutHandle = gd(Qr.bind(null, a, e, st, Qn, lf, t, gt, la, qa, Ee, n, "Throttled", -0, 0), u));
              break l;
            }
            Qr(a, e, st, Qn, lf, t, gt, la, qa, Ee, n, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Lt(l);
    }
    function Qr(l, t, e, a, u, n, i, c, f, h, S, E, m, v) {
      if (((l.timeoutHandle = -1), (E = t.subtreeFlags), E & 8192 || (E & 16785408) === 16785408)) {
        (E = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: kt }), Hr(t, n, E);
        var H = (n & 62914560) === n ? Gn - Vl() : (n & 4194048) === n ? qr - Vl() : 0;
        if (((H = Ah(E, H)), H !== null)) {
          (se = n), (l.cancelPendingCommit = H(Wr.bind(null, l, t, n, e, a, u, i, c, f, S, E, null, m, v))), Oe(l, n, i, !h);
          return;
        }
      }
      Wr(l, t, n, e, a, u, i, c, f);
    }
    function Xy(l) {
      for (var t = l; ; ) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null)))
          for (var a = 0; a < e.length; a++) {
            var u = e[a],
              n = u.getSnapshot;
            u = u.value;
            try {
              if (!dt(n(), u)) return !1;
            } catch {
              return !1;
            }
          }
        if (((e = t.child), t.subtreeFlags & 16384 && e !== null)) (e.return = t), (t = e);
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function Oe(l, t, e, a) {
      (t &= ~Pc), (t &= ~la), (l.suspendedLanes |= t), (l.pingedLanes &= ~t), a && (l.warmLanes |= t), (a = l.expirationTimes);
      for (var u = t; 0 < u; ) {
        var n = 31 - Sl(u),
          i = 1 << n;
        (a[n] = -1), (u &= ~i);
      }
      e !== 0 && Ff(l, e, t);
    }
    function Ln() {
      return (rl & 6) === 0 ? (Bu(0), !1) : !0;
    }
    function uf() {
      if (tl !== null) {
        if (yl === 0) var l = tl.return;
        else (l = tl), (It = Ke = null), bc(l), (Da = null), (gu = 0), (l = tl);
        for (; l !== null; ) Sr(l.alternate, l), (l = l.return);
        tl = null;
      }
    }
    function Ga(l, t) {
      var e = l.timeoutHandle;
      e !== -1 && ((l.timeoutHandle = -1), ih(e)), (e = l.cancelPendingCommit), e !== null && ((l.cancelPendingCommit = null), e()), (se = 0), uf(), (pl = l), (tl = e = Ft(l.current, null)), (al = t), (yl = 0), (vt = null), (Ee = !1), (ja = lu(l, t)), (Ic = !1), (qa = gt = Pc = la = Ae = Ml = 0), (st = Hu = null), (lf = !1), (t & 8) !== 0 && (t |= t & 32);
      var a = l.entangledLanes;
      if (a !== 0)
        for (l = l.entanglements, a &= t; 0 < a; ) {
          var u = 31 - Sl(a),
            n = 1 << u;
          (t |= l[u]), (a &= ~n);
        }
      return (fe = t), sn(), e;
    }
    function Lr(l, t) {
      (w = null), (p.H = xu), t === Ma || t === gn ? ((t = ao()), (yl = 3)) : t === fc ? ((t = ao()), (yl = 4)) : (yl = t === jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1), (vt = t), tl === null && ((Ml = 1), Un(l, At(t, l.current)));
    }
    function Zr() {
      var l = ht.current;
      return l === null ? !0 : (al & 4194048) === al ? Mt === null : (al & 62914560) === al || (al & 536870912) !== 0 ? l === Mt : !1;
    }
    function Vr() {
      var l = p.H;
      return (p.H = xu), l === null ? xu : l;
    }
    function Kr() {
      var l = p.A;
      return (p.A = Yy), l;
    }
    function Zn() {
      (Ml = 4), Ee || ((al & 4194048) !== al && ht.current !== null) || (ja = !0), ((Ae & 134217727) === 0 && (la & 134217727) === 0) || pl === null || Oe(pl, al, gt, !1);
    }
    function nf(l, t, e) {
      var a = rl;
      rl |= 2;
      var u = Vr(),
        n = Kr();
      (pl !== l || al !== t) && ((Qn = null), Ga(l, t)), (t = !1);
      var i = Ml;
      l: do
        try {
          if (yl !== 0 && tl !== null) {
            var c = tl,
              f = vt;
            switch (yl) {
              case 8:
                uf(), (i = 6);
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                ht.current === null && (t = !0);
                var h = yl;
                if (((yl = 0), (vt = null), Xa(l, c, f, h), e && ja)) {
                  i = 0;
                  break l;
                }
                break;
              default:
                (h = yl), (yl = 0), (vt = null), Xa(l, c, f, h);
            }
          }
          Qy(), (i = Ml);
          break;
        } catch (S) {
          Lr(l, S);
        }
      while (!0);
      return t && l.shellSuspendCounter++, (It = Ke = null), (rl = a), (p.H = u), (p.A = n), tl === null && ((pl = null), (al = 0), sn()), i;
    }
    function Qy() {
      for (; tl !== null; ) Jr(tl);
    }
    function Ly(l, t) {
      var e = rl;
      rl |= 2;
      var a = Vr(),
        u = Kr();
      pl !== l || al !== t ? ((Qn = null), (Xn = Vl() + 500), Ga(l, t)) : (ja = lu(l, t));
      l: do
        try {
          if (yl !== 0 && tl !== null) {
            t = tl;
            var n = vt;
            t: switch (yl) {
              case 1:
                (yl = 0), (vt = null), Xa(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (to(n)) {
                  (yl = 0), (vt = null), wr(t);
                  break;
                }
                (t = function () {
                  (yl !== 2 && yl !== 9) || pl !== l || (yl = 7), Lt(l);
                }),
                  n.then(t, t);
                break l;
              case 3:
                yl = 7;
                break l;
              case 4:
                yl = 5;
                break l;
              case 7:
                to(n) ? ((yl = 0), (vt = null), wr(t)) : ((yl = 0), (vt = null), Xa(l, t, n, 7));
                break;
              case 5:
                var i = null;
                switch (tl.tag) {
                  case 26:
                    i = tl.memoizedState;
                  case 5:
                  case 27:
                    var c = tl;
                    if (i ? Rd(i) : c.stateNode.complete) {
                      (yl = 0), (vt = null);
                      var f = c.sibling;
                      if (f !== null) tl = f;
                      else {
                        var h = c.return;
                        h !== null ? ((tl = h), Vn(h)) : (tl = null);
                      }
                      break t;
                    }
                }
                (yl = 0), (vt = null), Xa(l, t, n, 5);
                break;
              case 6:
                (yl = 0), (vt = null), Xa(l, t, n, 6);
                break;
              case 8:
                uf(), (Ml = 6);
                break l;
              default:
                throw Error(r(462));
            }
          }
          Zy();
          break;
        } catch (S) {
          Lr(l, S);
        }
      while (!0);
      return (It = Ke = null), (p.H = a), (p.A = u), (rl = e), tl !== null ? 0 : ((pl = null), (al = 0), sn(), Ml);
    }
    function Zy() {
      for (; tl !== null && !Si(); ) Jr(tl);
    }
    function Jr(l) {
      var t = vr(l.alternate, l, fe);
      (l.memoizedProps = l.pendingProps), t === null ? Vn(l) : (tl = t);
    }
    function wr(l) {
      var t = l,
        e = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = or(e, t, t.pendingProps, t.type, void 0, al);
          break;
        case 11:
          t = or(e, t, t.pendingProps, t.type.render, t.ref, al);
          break;
        case 5:
          bc(t);
        default:
          Sr(e, t), (t = tl = Vs(t, fe)), (t = vr(e, t, fe));
      }
      (l.memoizedProps = l.pendingProps), t === null ? Vn(l) : (tl = t);
    }
    function Xa(l, t, e, a) {
      (It = Ke = null), bc(t), (Da = null), (gu = 0);
      var u = t.return;
      try {
        if (Uy(l, u, t, e, al)) {
          (Ml = 1), Un(l, At(e, l.current)), (tl = null);
          return;
        }
      } catch (n) {
        if (u !== null) throw ((tl = u), n);
        (Ml = 1), Un(l, At(e, l.current)), (tl = null);
        return;
      }
      t.flags & 32768 ? (nl || a === 1 ? (l = !0) : ja || (al & 536870912) !== 0 ? (l = !1) : ((Ee = l = !0), (a === 2 || a === 9 || a === 3 || a === 6) && ((a = ht.current), a !== null && a.tag === 13 && (a.flags |= 16384))), kr(t, l)) : Vn(t);
    }
    function Vn(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          kr(t, Ee);
          return;
        }
        l = t.return;
        var e = Ny(t.alternate, t, fe);
        if (e !== null) {
          tl = e;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          tl = t;
          return;
        }
        tl = t = l;
      } while (t !== null);
      Ml === 0 && (Ml = 5);
    }
    function kr(l, t) {
      do {
        var e = By(l.alternate, l);
        if (e !== null) {
          (e.flags &= 32767), (tl = e);
          return;
        }
        if (((e = l.return), e !== null && ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)), !t && ((l = l.sibling), l !== null))) {
          tl = l;
          return;
        }
        tl = l = e;
      } while (l !== null);
      (Ml = 6), (tl = null);
    }
    function Wr(l, t, e, a, u, n, i, c, f) {
      l.cancelPendingCommit = null;
      do Kn();
      while (ql !== 0);
      if ((rl & 6) !== 0) throw Error(r(327));
      if (t !== null) {
        if (t === l.current) throw Error(r(177));
        if (
          ((n = t.lanes | t.childLanes),
          (n |= wi),
          T0(l, e, n, i, c, f),
          l === pl && ((tl = pl = null), (al = 0)),
          (Ya = t),
          (_e = l),
          (se = e),
          (tf = n),
          (ef = u),
          (Yr = a),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((l.callbackNode = null),
              (l.callbackPriority = 0),
              wy(je, function () {
                return ld(), null;
              }))
            : ((l.callbackNode = null), (l.callbackPriority = 0)),
          (a = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || a)
        ) {
          (a = p.T), (p.T = null), (u = A.p), (A.p = 2), (i = rl), (rl |= 4);
          try {
            jy(l, t, e);
          } finally {
            (rl = i), (A.p = u), (p.T = a);
          }
        }
        (ql = 1), Fr(), $r(), Ir();
      }
    }
    function Fr() {
      if (ql === 1) {
        ql = 0;
        var l = _e,
          t = Ya,
          e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
          (e = p.T), (p.T = null);
          var a = A.p;
          A.p = 2;
          var u = rl;
          rl |= 4;
          try {
            Cr(t, l);
            var n = Sf,
              i = Bs(l.containerInfo),
              c = n.focusedElem,
              f = n.selectionRange;
            if (i !== c && c && c.ownerDocument && Ns(c.ownerDocument.documentElement, c)) {
              if (f !== null && Li(c)) {
                var h = f.start,
                  S = f.end;
                if ((S === void 0 && (S = h), "selectionStart" in c)) (c.selectionStart = h), (c.selectionEnd = Math.min(S, c.value.length));
                else {
                  var E = c.ownerDocument || document,
                    m = (E && E.defaultView) || window;
                  if (m.getSelection) {
                    var v = m.getSelection(),
                      H = c.textContent.length,
                      L = Math.min(f.start, H),
                      gl = f.end === void 0 ? L : Math.min(f.end, H);
                    !v.extend && L > gl && ((i = gl), (gl = L), (L = i));
                    var d = Hs(c, L),
                      s = Hs(c, gl);
                    if (d && s && (v.rangeCount !== 1 || v.anchorNode !== d.node || v.anchorOffset !== d.offset || v.focusNode !== s.node || v.focusOffset !== s.offset)) {
                      var y = E.createRange();
                      y.setStart(d.node, d.offset), v.removeAllRanges(), L > gl ? (v.addRange(y), v.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), v.addRange(y));
                    }
                  }
                }
              }
              for (E = [], v = c; (v = v.parentNode); ) v.nodeType === 1 && E.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
                var b = E[c];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (ai = !!gf), (Sf = gf = null);
          } finally {
            (rl = u), (A.p = a), (p.T = e);
          }
        }
        (l.current = t), (ql = 2);
      }
    }
    function $r() {
      if (ql === 2) {
        ql = 0;
        var l = _e,
          t = Ya,
          e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
          (e = p.T), (p.T = null);
          var a = A.p;
          A.p = 2;
          var u = rl;
          rl |= 4;
          try {
            xr(l, t.alternate, t);
          } finally {
            (rl = u), (A.p = a), (p.T = e);
          }
        }
        ql = 3;
      }
    }
    function Ir() {
      if (ql === 4 || ql === 3) {
        (ql = 0), pi();
        var l = _e,
          t = Ya,
          e = se,
          a = Yr;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (ql = 5) : ((ql = 0), (Ya = _e = null), Pr(l, l.pendingLanes));
        var u = l.pendingLanes;
        if ((u === 0 && (xe = null), Ei(e), (t = t.stateNode), fl && typeof fl.onCommitFiberRoot == "function"))
          try {
            fl.onCommitFiberRoot(dl, t, void 0, (t.current.flags & 128) === 128);
          } catch {}
        if (a !== null) {
          (t = p.T), (u = A.p), (A.p = 2), (p.T = null);
          try {
            for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
              var c = a[i];
              n(c.value, { componentStack: c.stack });
            }
          } finally {
            (p.T = t), (A.p = u);
          }
        }
        (se & 3) !== 0 && Kn(), Lt(l), (u = l.pendingLanes), (e & 261930) !== 0 && (u & 42) !== 0 ? (l === af ? Nu++ : ((Nu = 0), (af = l))) : (Nu = 0), Bu(0);
      }
    }
    function Pr(l, t) {
      (l.pooledCacheLanes &= t) === 0 && ((t = l.pooledCache), t != null && ((l.pooledCache = null), mu(t)));
    }
    function Kn() {
      return Fr(), $r(), Ir(), ld();
    }
    function ld() {
      if (ql !== 5) return !1;
      var l = _e,
        t = tf;
      tf = 0;
      var e = Ei(se),
        a = p.T,
        u = A.p;
      try {
        (A.p = 32 > e ? 32 : e), (p.T = null), (e = ef), (ef = null);
        var n = _e,
          i = se;
        if (((ql = 0), (Ya = _e = null), (se = 0), (rl & 6) !== 0)) throw Error(r(331));
        var c = rl;
        if (((rl |= 4), Br(n.current), Rr(n, n.current, i, e), (rl = c), Bu(0, !1), fl && typeof fl.onPostCommitFiberRoot == "function"))
          try {
            fl.onPostCommitFiberRoot(dl, n);
          } catch {}
        return !0;
      } finally {
        (A.p = u), (p.T = a), Pr(l, t);
      }
    }
    function td(l, t, e) {
      (t = At(e, t)), (t = Bc(l.stateNode, t, 2)), (l = pe(l, t, 2)), l !== null && (tu(l, 2), Lt(l));
    }
    function hl(l, t, e) {
      if (l.tag === 3) td(l, l, e);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            td(t, l, e);
            break;
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || (typeof a.componentDidCatch == "function" && (xe === null || !xe.has(a)))) {
              (l = At(e, l)), (e = er(2)), (a = pe(t, e, 2)), a !== null && (ar(e, a, t, l), tu(a, 2), Lt(a));
              break;
            }
          }
          t = t.return;
        }
    }
    function cf(l, t, e) {
      var a = l.pingCache;
      if (a === null) {
        a = l.pingCache = new Gy();
        var u = new Set();
        a.set(t, u);
      } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
      u.has(e) || ((Ic = !0), u.add(e), (l = Vy.bind(null, l, t, e)), t.then(l, l));
    }
    function Vy(l, t, e) {
      var a = l.pingCache;
      a !== null && a.delete(t), (l.pingedLanes |= l.suspendedLanes & e), (l.warmLanes &= ~e), pl === l && (al & e) === e && (Ml === 4 || (Ml === 3 && (al & 62914560) === al && 300 > Vl() - Gn) ? (rl & 2) === 0 && Ga(l, 0) : (Pc |= e), qa === al && (qa = 0)), Lt(l);
    }
    function ed(l, t) {
      t === 0 && (t = Wf()), (l = Le(l, t)), l !== null && (tu(l, t), Lt(l));
    }
    function Ky(l) {
      var t = l.memoizedState,
        e = 0;
      t !== null && (e = t.retryLane), ed(l, e);
    }
    function Jy(l, t) {
      var e = 0;
      switch (l.tag) {
        case 31:
        case 13:
          var a = l.stateNode,
            u = l.memoizedState;
          u !== null && (e = u.retryLane);
          break;
        case 19:
          a = l.stateNode;
          break;
        case 22:
          a = l.stateNode._retryCache;
          break;
        default:
          throw Error(r(314));
      }
      a !== null && a.delete(t), ed(l, e);
    }
    function wy(l, t) {
      return Ia(l, t);
    }
    var Jn = null,
      Qa = null,
      ff = !1,
      wn = !1,
      sf = !1,
      Me = 0;
    function Lt(l) {
      l !== Qa && l.next === null && (Qa === null ? (Jn = Qa = l) : (Qa = Qa.next = l)), (wn = !0), ff || ((ff = !0), Wy());
    }
    function Bu(l, t) {
      if (!sf && wn) {
        sf = !0;
        do
          for (var e = !1, a = Jn; a !== null; ) {
            if (l !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var i = a.suspendedLanes,
                  c = a.pingedLanes;
                (n = (1 << (31 - Sl(42 | l) + 1)) - 1), (n &= u & ~(i & ~c)), (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
              }
              n !== 0 && ((e = !0), id(a, n));
            } else (n = al), (n = Fu(a, a === pl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)), (n & 3) === 0 || lu(a, n) || ((e = !0), id(a, n));
            a = a.next;
          }
        while (e);
        sf = !1;
      }
    }
    function ky() {
      ad();
    }
    function ad() {
      wn = ff = !1;
      var l = 0;
      Me !== 0 && nh() && (l = Me);
      for (var t = Vl(), e = null, a = Jn; a !== null; ) {
        var u = a.next,
          n = ud(a, t);
        n === 0 ? ((a.next = null), e === null ? (Jn = u) : (e.next = u), u === null && (Qa = e)) : ((e = a), (l !== 0 || (n & 3) !== 0) && (wn = !0)), (a = u);
      }
      (ql !== 0 && ql !== 5) || Bu(l), Me !== 0 && (Me = 0);
    }
    function ud(l, t) {
      for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var i = 31 - Sl(n),
          c = 1 << i,
          f = u[i];
        f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = z0(c, t)) : f <= t && (l.expiredLanes |= c), (n &= ~c);
      }
      if (((t = pl), (e = al), (e = Fu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)), (a = l.callbackNode), e === 0 || (l === t && (yl === 2 || yl === 9)) || l.cancelPendingCommit !== null)) return a !== null && a !== null && na(a), (l.callbackNode = null), (l.callbackPriority = 0);
      if ((e & 3) === 0 || lu(l, e)) {
        if (((t = e & -e), t === l.callbackPriority)) return t;
        switch ((a !== null && na(a), Ei(e))) {
          case 2:
          case 8:
            e = Wu;
            break;
          case 32:
            e = je;
            break;
          case 268435456:
            e = ia;
            break;
          default:
            e = je;
        }
        return (a = nd.bind(null, l)), (e = Ia(e, a)), (l.callbackPriority = t), (l.callbackNode = e), t;
      }
      return a !== null && a !== null && na(a), (l.callbackPriority = 2), (l.callbackNode = null), 2;
    }
    function nd(l, t) {
      if (ql !== 0 && ql !== 5) return (l.callbackNode = null), (l.callbackPriority = 0), null;
      var e = l.callbackNode;
      if (Kn() && l.callbackNode !== e) return null;
      var a = al;
      return (a = Fu(l, l === pl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)), a === 0 ? null : (Xr(l, a, t), ud(l, Vl()), l.callbackNode != null && l.callbackNode === e ? nd.bind(null, l) : null);
    }
    function id(l, t) {
      if (Kn()) return null;
      Xr(l, t, !0);
    }
    function Wy() {
      ch(function () {
        (rl & 6) !== 0 ? Ia(ku, ky) : ad();
      });
    }
    function of() {
      if (Me === 0) {
        var l = _a;
        l === 0 && ((l = bt), (bt <<= 1), (bt & 261888) === 0 && (bt = 256)), (Me = l);
      }
      return Me;
    }
    function cd(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ln("" + l);
    }
    function fd(l, t) {
      var e = t.ownerDocument.createElement("input");
      return (e.name = t.name), (e.value = t.value), l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), (l = new FormData(l)), e.parentNode.removeChild(e), l;
    }
    function Fy(l, t, e, a, u) {
      if (t === "submit" && e && e.stateNode === u) {
        var n = cd((u[ut] || null).action),
          i = a.submitter;
        i && ((t = (t = i[ut] || null) ? cd(t.formAction) : i.getAttribute("formAction")), t !== null && ((n = t), (i = null)));
        var c = new un("action", "action", null, a, u);
        l.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (a.defaultPrevented) {
                  if (Me !== 0) {
                    var f = i ? fd(u, i) : new FormData(u);
                    Dc(e, { pending: !0, data: f, method: u.method, action: n }, null, f);
                  }
                } else typeof n == "function" && (c.preventDefault(), (f = i ? fd(u, i) : new FormData(u)), Dc(e, { pending: !0, data: f, method: u.method, action: n }, n, f));
              },
              currentTarget: u,
            },
          ],
        });
      }
    }
    for (var rf = 0; rf < Ji.length; rf++) {
      var df = Ji[rf],
        $y = df.toLowerCase(),
        Iy = df[0].toUpperCase() + df.slice(1);
      jt($y, "on" + Iy);
    }
    jt(Ys, "onAnimationEnd"),
      jt(Gs, "onAnimationIteration"),
      jt(Xs, "onAnimationStart"),
      jt("dblclick", "onDoubleClick"),
      jt("focusin", "onFocus"),
      jt("focusout", "onBlur"),
      jt(hy, "onTransitionRun"),
      jt(my, "onTransitionStart"),
      jt(vy, "onTransitionCancel"),
      jt(Qs, "onTransitionEnd"),
      da("onMouseEnter", ["mouseout", "mouseover"]),
      da("onMouseLeave", ["mouseout", "mouseover"]),
      da("onPointerEnter", ["pointerout", "pointerover"]),
      da("onPointerLeave", ["pointerout", "pointerover"]),
      Ye("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      Ye("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      Ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      Ye("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      Ye("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      Ye("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ju = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      Py = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ju));
    function sd(l, t) {
      t = (t & 4) !== 0;
      for (var e = 0; e < l.length; e++) {
        var a = l[e],
          u = a.event;
        a = a.listeners;
        l: {
          var n = void 0;
          if (t)
            for (var i = a.length - 1; 0 <= i; i--) {
              var c = a[i],
                f = c.instance,
                h = c.currentTarget;
              if (((c = c.listener), f !== n && u.isPropagationStopped())) break l;
              (n = c), (u.currentTarget = h);
              try {
                n(u);
              } catch (S) {
                fn(S);
              }
              (u.currentTarget = null), (n = f);
            }
          else
            for (i = 0; i < a.length; i++) {
              if (((c = a[i]), (f = c.instance), (h = c.currentTarget), (c = c.listener), f !== n && u.isPropagationStopped())) break l;
              (n = c), (u.currentTarget = h);
              try {
                n(u);
              } catch (S) {
                fn(S);
              }
              (u.currentTarget = null), (n = f);
            }
        }
      }
    }
    function el(l, t) {
      var e = t[Ai];
      e === void 0 && (e = t[Ai] = new Set());
      var a = l + "__bubble";
      e.has(a) || (od(t, l, 2, !1), e.add(a));
    }
    function yf(l, t, e) {
      var a = 0;
      t && (a |= 4), od(e, l, a, t);
    }
    var kn = "_reactListening" + Math.random().toString(36).slice(2);
    function hf(l) {
      if (!l[kn]) {
        (l[kn] = !0),
          es.forEach(function (e) {
            e !== "selectionchange" && (Py.has(e) || yf(e, !1, l), yf(e, !0, l));
          });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[kn] || ((t[kn] = !0), yf("selectionchange", !1, t));
      }
    }
    function od(l, t, e, a) {
      switch (Gd(t)) {
        case 2:
          var u = Oh;
          break;
        case 8:
          u = Mh;
          break;
        default:
          u = Df;
      }
      (e = u.bind(null, t, e, l)), (u = void 0), !Hi || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0), a ? (u !== void 0 ? l.addEventListener(t, e, { capture: !0, passive: u }) : l.addEventListener(t, e, !0)) : u !== void 0 ? l.addEventListener(t, e, { passive: u }) : l.addEventListener(t, e, !1);
    }
    function mf(l, t, e, a, u) {
      var n = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
        l: for (;;) {
          if (a === null) return;
          var i = a.tag;
          if (i === 3 || i === 4) {
            var c = a.stateNode.containerInfo;
            if (c === u) break;
            if (i === 4)
              for (i = a.return; i !== null; ) {
                var f = i.tag;
                if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
                i = i.return;
              }
            for (; c !== null; ) {
              if (((i = sa(c)), i === null)) return;
              if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
                a = n = i;
                continue l;
              }
              c = c.parentNode;
            }
          }
          a = a.return;
        }
      hs(function () {
        var h = n,
          S = Ui(e),
          E = [];
        l: {
          var m = Ls.get(l);
          if (m !== void 0) {
            var v = un,
              H = l;
            switch (l) {
              case "keypress":
                if (en(e) === 0) break l;
              case "keydown":
              case "keyup":
                v = J0;
                break;
              case "focusin":
                (H = "focus"), (v = qi);
                break;
              case "focusout":
                (H = "blur"), (v = qi);
                break;
              case "beforeblur":
              case "afterblur":
                v = qi;
                break;
              case "click":
                if (e.button === 2) break l;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                v = gs;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                v = N0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                v = W0;
                break;
              case Ys:
              case Gs:
              case Xs:
                v = q0;
                break;
              case Qs:
                v = $0;
                break;
              case "scroll":
              case "scrollend":
                v = R0;
                break;
              case "wheel":
                v = P0;
                break;
              case "copy":
              case "cut":
              case "paste":
                v = G0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                v = ps;
                break;
              case "toggle":
              case "beforetoggle":
                v = ty;
            }
            var L = (t & 4) !== 0,
              gl = !L && (l === "scroll" || l === "scrollend"),
              d = L ? (m !== null ? m + "Capture" : null) : m;
            L = [];
            for (var s = h, y; s !== null; ) {
              var b = s;
              if (((y = b.stateNode), (b = b.tag), (b !== 5 && b !== 26 && b !== 27) || y === null || d === null || ((b = uu(s, d)), b != null && L.push(qu(s, b, y))), gl)) break;
              s = s.return;
            }
            0 < L.length && ((m = new v(m, H, null, e, S)), E.push({ event: m, listeners: L }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (((m = l === "mouseover" || l === "pointerover"), (v = l === "mouseout" || l === "pointerout"), m && e !== Ci && (H = e.relatedTarget || e.fromElement) && (sa(H) || H[fa]))) break l;
            if ((v || m) && ((m = S.window === S ? S : (m = S.ownerDocument) ? m.defaultView || m.parentWindow : window), v ? ((H = e.relatedTarget || e.toElement), (v = h), (H = H ? sa(H) : null), H !== null && ((gl = Z(H)), (L = H.tag), H !== gl || (L !== 5 && L !== 27 && L !== 6)) && (H = null)) : ((v = null), (H = h)), v !== H)) {
              if (((L = gs), (b = "onMouseLeave"), (d = "onMouseEnter"), (s = "mouse"), (l === "pointerout" || l === "pointerover") && ((L = ps), (b = "onPointerLeave"), (d = "onPointerEnter"), (s = "pointer")), (gl = v == null ? m : au(v)), (y = H == null ? m : au(H)), (m = new L(b, s + "leave", v, e, S)), (m.target = gl), (m.relatedTarget = y), (b = null), sa(S) === h && ((L = new L(d, s + "enter", H, e, S)), (L.target = y), (L.relatedTarget = gl), (b = L)), (gl = b), v && H))
                t: {
                  for (L = lh, d = v, s = H, y = 0, b = d; b; b = L(b)) y++;
                  b = 0;
                  for (var X = s; X; X = L(X)) b++;
                  for (; 0 < y - b; ) (d = L(d)), y--;
                  for (; 0 < b - y; ) (s = L(s)), b--;
                  for (; y--; ) {
                    if (d === s || (s !== null && d === s.alternate)) {
                      L = d;
                      break t;
                    }
                    (d = L(d)), (s = L(s));
                  }
                  L = null;
                }
              else L = null;
              v !== null && rd(E, m, v, L, !1), H !== null && gl !== null && rd(E, gl, H, L, !0);
            }
          }
          l: {
            if (((m = h ? au(h) : window), (v = m.nodeName && m.nodeName.toLowerCase()), v === "select" || (v === "input" && m.type === "file"))) var sl = Os;
            else if (xs(m))
              if (Ms) sl = ry;
              else {
                sl = sy;
                var N = fy;
              }
            else (v = m.nodeName), !v || v.toLowerCase() !== "input" || (m.type !== "checkbox" && m.type !== "radio") ? h && Di(h.elementType) && (sl = Os) : (sl = oy);
            if (sl && (sl = sl(l, h))) {
              _s(E, sl, e, S);
              break l;
            }
            N && N(l, m, h), l === "focusout" && h && m.type === "number" && h.memoizedProps.value != null && Mi(m, "number", m.value);
          }
          switch (((N = h ? au(h) : window), l)) {
            case "focusin":
              (xs(N) || N.contentEditable === "true") && ((Sa = N), (Zi = h), (du = null));
              break;
            case "focusout":
              du = Zi = Sa = null;
              break;
            case "mousedown":
              Vi = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Vi = !1), js(E, e, S);
              break;
            case "selectionchange":
              if (yy) break;
            case "keydown":
            case "keyup":
              js(E, e, S);
          }
          var F;
          if (Gi)
            l: {
              switch (l) {
                case "compositionstart":
                  var ul = "onCompositionStart";
                  break l;
                case "compositionend":
                  ul = "onCompositionEnd";
                  break l;
                case "compositionupdate":
                  ul = "onCompositionUpdate";
                  break l;
              }
              ul = void 0;
            }
          else ga ? Es(l, e) && (ul = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (ul = "onCompositionStart");
          ul && (bs && e.locale !== "ko" && (ga || ul !== "onCompositionStart" ? ul === "onCompositionEnd" && ga && (F = ms()) : ((de = S), (Ni = "value" in de ? de.value : de.textContent), (ga = !0))), (N = Wn(h, ul)), 0 < N.length && ((ul = new Ss(ul, l, null, e, S)), E.push({ event: ul, listeners: N }), F ? (ul.data = F) : ((F = As(e)), F !== null && (ul.data = F)))),
            (F = ay ? uy(l, e) : ny(l, e)) && ((ul = Wn(h, "onBeforeInput")), 0 < ul.length && ((N = new Ss("onBeforeInput", "beforeinput", null, e, S)), E.push({ event: N, listeners: ul }), (N.data = F))),
            Fy(E, l, h, e, S);
        }
        sd(E, t);
      });
    }
    function qu(l, t, e) {
      return { instance: l, listener: t, currentTarget: e };
    }
    function Wn(l, t) {
      for (var e = t + "Capture", a = []; l !== null; ) {
        var u = l,
          n = u.stateNode;
        if (((u = u.tag), (u !== 5 && u !== 26 && u !== 27) || n === null || ((u = uu(l, e)), u != null && a.unshift(qu(l, u, n)), (u = uu(l, t)), u != null && a.push(qu(l, u, n))), l.tag === 3)) return a;
        l = l.return;
      }
      return [];
    }
    function lh(l) {
      if (l === null) return null;
      do l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function rd(l, t, e, a, u) {
      for (var n = t._reactName, i = []; e !== null && e !== a; ) {
        var c = e,
          f = c.alternate,
          h = c.stateNode;
        if (((c = c.tag), f !== null && f === a)) break;
        (c !== 5 && c !== 26 && c !== 27) || h === null || ((f = h), u ? ((h = uu(e, n)), h != null && i.unshift(qu(e, h, f))) : u || ((h = uu(e, n)), h != null && i.push(qu(e, h, f)))), (e = e.return);
      }
      i.length !== 0 && l.push({ event: t, listeners: i });
    }
    var th = /\r\n?/g,
      eh = /\u0000|\uFFFD/g;
    function dd(l) {
      return (typeof l == "string" ? l : "" + l)
        .replace(
          th,
          `
`
        )
        .replace(eh, "");
    }
    function yd(l, t) {
      return (t = dd(t)), dd(l) === t;
    }
    function vl(l, t, e, a, u, n) {
      switch (e) {
        case "children":
          typeof a == "string" ? t === "body" || (t === "textarea" && a === "") || ha(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ha(l, "" + a);
          break;
        case "className":
          Iu(l, "class", a);
          break;
        case "tabIndex":
          Iu(l, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Iu(l, e, a);
          break;
        case "style":
          ds(l, a, n);
          break;
        case "data":
          if (t !== "object") {
            Iu(l, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || e !== "href")) {
            l.removeAttribute(e);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          (a = ln("" + a)), l.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (e === "formAction" ? (t !== "input" && vl(l, t, "name", u.name, u, null), vl(l, t, "formEncType", u.formEncType, u, null), vl(l, t, "formMethod", u.formMethod, u, null), vl(l, t, "formTarget", u.formTarget, u, null)) : (vl(l, t, "encType", u.encType, u, null), vl(l, t, "method", u.method, u, null), vl(l, t, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          (a = ln("" + a)), l.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (l.onclick = kt);
          break;
        case "onScroll":
          a != null && el("scroll", l);
          break;
        case "onScrollEnd":
          a != null && el("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (((e = a.__html), e != null)) {
              if (u.children != null) throw Error(r(60));
              l.innerHTML = e;
            }
          }
          break;
        case "multiple":
          l.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          l.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            l.removeAttribute("xlink:href");
            break;
          }
          (e = ln("" + a)), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
          break;
        case "capture":
        case "download":
          a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
          break;
        case "popover":
          el("beforetoggle", l), el("toggle", l), $u(l, "popover", a);
          break;
        case "xlinkActuate":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          wt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          wt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          wt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          wt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          $u(l, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || (e[0] !== "o" && e[0] !== "O") || (e[1] !== "n" && e[1] !== "N")) && ((e = C0.get(e) || e), $u(l, e, a));
      }
    }
    function vf(l, t, e, a, u, n) {
      switch (e) {
        case "style":
          ds(l, a, n);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (((e = a.__html), e != null)) {
              if (u.children != null) throw Error(r(60));
              l.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ha(l, a) : (typeof a == "number" || typeof a == "bigint") && ha(l, "" + a);
          break;
        case "onScroll":
          a != null && el("scroll", l);
          break;
        case "onScrollEnd":
          a != null && el("scrollend", l);
          break;
        case "onClick":
          a != null && (l.onclick = kt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!as.hasOwnProperty(e))
            l: {
              if (e[0] === "o" && e[1] === "n" && ((u = e.endsWith("Capture")), (t = e.slice(2, u ? e.length - 7 : void 0)), (n = l[ut] || null), (n = n != null ? n[e] : null), typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
                typeof n != "function" && n !== null && (e in l ? (l[e] = null) : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
                break l;
              }
              e in l ? (l[e] = a) : a === !0 ? l.setAttribute(e, "") : $u(l, e, a);
            }
      }
    }
    function Wl(l, t, e) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          el("error", l), el("load", l);
          var a = !1,
            u = !1,
            n;
          for (n in e)
            if (e.hasOwnProperty(n)) {
              var i = e[n];
              if (i != null)
                switch (n) {
                  case "src":
                    a = !0;
                    break;
                  case "srcSet":
                    u = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(r(137, t));
                  default:
                    vl(l, t, n, i, e, null);
                }
            }
          u && vl(l, t, "srcSet", e.srcSet, e, null), a && vl(l, t, "src", e.src, e, null);
          return;
        case "input":
          el("invalid", l);
          var c = (n = i = u = null),
            f = null,
            h = null;
          for (a in e)
            if (e.hasOwnProperty(a)) {
              var S = e[a];
              if (S != null)
                switch (a) {
                  case "name":
                    u = S;
                    break;
                  case "type":
                    i = S;
                    break;
                  case "checked":
                    f = S;
                    break;
                  case "defaultChecked":
                    h = S;
                    break;
                  case "value":
                    n = S;
                    break;
                  case "defaultValue":
                    c = S;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (S != null) throw Error(r(137, t));
                    break;
                  default:
                    vl(l, t, a, S, e, null);
                }
            }
          fs(l, n, c, f, h, i, u, !1);
          return;
        case "select":
          el("invalid", l), (a = i = n = null);
          for (u in e)
            if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
              switch (u) {
                case "value":
                  n = c;
                  break;
                case "defaultValue":
                  i = c;
                  break;
                case "multiple":
                  a = c;
                default:
                  vl(l, t, u, c, e, null);
              }
          (t = n), (e = i), (l.multiple = !!a), t != null ? ya(l, !!a, t, !1) : e != null && ya(l, !!a, e, !0);
          return;
        case "textarea":
          el("invalid", l), (n = u = a = null);
          for (i in e)
            if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
              switch (i) {
                case "value":
                  a = c;
                  break;
                case "defaultValue":
                  u = c;
                  break;
                case "children":
                  n = c;
                  break;
                case "dangerouslySetInnerHTML":
                  if (c != null) throw Error(r(91));
                  break;
                default:
                  vl(l, t, i, c, e, null);
              }
          os(l, a, u, n);
          return;
        case "option":
          for (f in e)
            if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
              switch (f) {
                case "selected":
                  l.selected = a && typeof a != "function" && typeof a != "symbol";
                  break;
                default:
                  vl(l, t, f, a, e, null);
              }
          return;
        case "dialog":
          el("beforetoggle", l), el("toggle", l), el("cancel", l), el("close", l);
          break;
        case "iframe":
        case "object":
          el("load", l);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ju.length; a++) el(ju[a], l);
          break;
        case "image":
          el("error", l), el("load", l);
          break;
        case "details":
          el("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          el("error", l), el("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (h in e)
            if (e.hasOwnProperty(h) && ((a = e[h]), a != null))
              switch (h) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  vl(l, t, h, a, e, null);
              }
          return;
        default:
          if (Di(t)) {
            for (S in e) e.hasOwnProperty(S) && ((a = e[S]), a !== void 0 && vf(l, t, S, a, e, void 0));
            return;
          }
      }
      for (c in e) e.hasOwnProperty(c) && ((a = e[c]), a != null && vl(l, t, c, a, e, null));
    }
    function ah(l, t, e, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var u = null,
            n = null,
            i = null,
            c = null,
            f = null,
            h = null,
            S = null;
          for (v in e) {
            var E = e[v];
            if (e.hasOwnProperty(v) && E != null)
              switch (v) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  f = E;
                default:
                  a.hasOwnProperty(v) || vl(l, t, v, null, a, E);
              }
          }
          for (var m in a) {
            var v = a[m];
            if (((E = e[m]), a.hasOwnProperty(m) && (v != null || E != null)))
              switch (m) {
                case "type":
                  n = v;
                  break;
                case "name":
                  u = v;
                  break;
                case "checked":
                  h = v;
                  break;
                case "defaultChecked":
                  S = v;
                  break;
                case "value":
                  i = v;
                  break;
                case "defaultValue":
                  c = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null) throw Error(r(137, t));
                  break;
                default:
                  v !== E && vl(l, t, m, v, a, E);
              }
          }
          Oi(l, i, c, f, h, S, n, u);
          return;
        case "select":
          v = i = c = m = null;
          for (n in e)
            if (((f = e[n]), e.hasOwnProperty(n) && f != null))
              switch (n) {
                case "value":
                  break;
                case "multiple":
                  v = f;
                default:
                  a.hasOwnProperty(n) || vl(l, t, n, null, a, f);
              }
          for (u in a)
            if (((n = a[u]), (f = e[u]), a.hasOwnProperty(u) && (n != null || f != null)))
              switch (u) {
                case "value":
                  m = n;
                  break;
                case "defaultValue":
                  c = n;
                  break;
                case "multiple":
                  i = n;
                default:
                  n !== f && vl(l, t, u, n, a, f);
              }
          (t = c), (e = i), (a = v), m != null ? ya(l, !!e, m, !1) : !!a != !!e && (t != null ? ya(l, !!e, t, !0) : ya(l, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          v = m = null;
          for (c in e)
            if (((u = e[c]), e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)))
              switch (c) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  vl(l, t, c, null, a, u);
              }
          for (i in a)
            if (((u = a[i]), (n = e[i]), a.hasOwnProperty(i) && (u != null || n != null)))
              switch (i) {
                case "value":
                  m = u;
                  break;
                case "defaultValue":
                  v = u;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (u != null) throw Error(r(91));
                  break;
                default:
                  u !== n && vl(l, t, i, u, a, n);
              }
          ss(l, m, v);
          return;
        case "option":
          for (var H in e)
            if (((m = e[H]), e.hasOwnProperty(H) && m != null && !a.hasOwnProperty(H)))
              switch (H) {
                case "selected":
                  l.selected = !1;
                  break;
                default:
                  vl(l, t, H, null, a, m);
              }
          for (f in a)
            if (((m = a[f]), (v = e[f]), a.hasOwnProperty(f) && m !== v && (m != null || v != null)))
              switch (f) {
                case "selected":
                  l.selected = m && typeof m != "function" && typeof m != "symbol";
                  break;
                default:
                  vl(l, t, f, m, a, v);
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var L in e) (m = e[L]), e.hasOwnProperty(L) && m != null && !a.hasOwnProperty(L) && vl(l, t, L, null, a, m);
          for (h in a)
            if (((m = a[h]), (v = e[h]), a.hasOwnProperty(h) && m !== v && (m != null || v != null)))
              switch (h) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (m != null) throw Error(r(137, t));
                  break;
                default:
                  vl(l, t, h, m, a, v);
              }
          return;
        default:
          if (Di(t)) {
            for (var gl in e) (m = e[gl]), e.hasOwnProperty(gl) && m !== void 0 && !a.hasOwnProperty(gl) && vf(l, t, gl, void 0, a, m);
            for (S in a) (m = a[S]), (v = e[S]), !a.hasOwnProperty(S) || m === v || (m === void 0 && v === void 0) || vf(l, t, S, m, a, v);
            return;
          }
      }
      for (var d in e) (m = e[d]), e.hasOwnProperty(d) && m != null && !a.hasOwnProperty(d) && vl(l, t, d, null, a, m);
      for (E in a) (m = a[E]), (v = e[E]), !a.hasOwnProperty(E) || m === v || (m == null && v == null) || vl(l, t, E, m, a, v);
    }
    function hd(l) {
      switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function uh() {
      if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.transferSize,
            i = u.initiatorType,
            c = u.duration;
          if (n && c && hd(i)) {
            for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
              var f = e[a],
                h = f.startTime;
              if (h > c) break;
              var S = f.transferSize,
                E = f.initiatorType;
              S && hd(E) && ((f = f.responseEnd), (i += S * (f < c ? 1 : (c - h) / (f - h))));
            }
            if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l)) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && ((l = navigator.connection.downlink), typeof l == "number") ? l : 5;
    }
    var gf = null,
      Sf = null;
    function Fn(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function md(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function vd(l, t) {
      if (l === 0)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function pf(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
    }
    var bf = null;
    function nh() {
      var l = window.event;
      return l && l.type === "popstate" ? (l === bf ? !1 : ((bf = l), !0)) : ((bf = null), !1);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0,
      ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Sd = typeof Promise == "function" ? Promise : void 0,
      ch =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Sd < "u"
          ? function (l) {
              return Sd.resolve(null).then(l).catch(fh);
            }
          : gd;
    function fh(l) {
      setTimeout(function () {
        throw l;
      });
    }
    function De(l) {
      return l === "head";
    }
    function pd(l, t) {
      var e = t,
        a = 0;
      do {
        var u = e.nextSibling;
        if ((l.removeChild(e), u && u.nodeType === 8))
          if (((e = u.data), e === "/$" || e === "/&")) {
            if (a === 0) {
              l.removeChild(u), Ka(t);
              return;
            }
            a--;
          } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
          else if (e === "html") Yu(l.ownerDocument.documentElement);
          else if (e === "head") {
            (e = l.ownerDocument.head), Yu(e);
            for (var n = e.firstChild; n; ) {
              var i = n.nextSibling,
                c = n.nodeName;
              n[eu] || c === "SCRIPT" || c === "STYLE" || (c === "LINK" && n.rel.toLowerCase() === "stylesheet") || e.removeChild(n), (n = i);
            }
          } else e === "body" && Yu(l.ownerDocument.body);
        e = u;
      } while (e);
      Ka(t);
    }
    function bd(l, t) {
      var e = l;
      l = 0;
      do {
        var a = e.nextSibling;
        if ((e.nodeType === 1 ? (t ? ((e._stashedDisplay = e.style.display), (e.style.display = "none")) : ((e.style.display = e._stashedDisplay || ""), e.getAttribute("style") === "" && e.removeAttribute("style"))) : e.nodeType === 3 && (t ? ((e._stashedText = e.nodeValue), (e.nodeValue = "")) : (e.nodeValue = e._stashedText || "")), a && a.nodeType === 8))
          if (((e = a.data), e === "/$")) {
            if (l === 0) break;
            l--;
          } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
        e = a;
      } while (e);
    }
    function zf(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var e = t;
        switch (((t = t.nextSibling), e.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zf(e), xi(e);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (e.rel.toLowerCase() === "stylesheet") continue;
        }
        l.removeChild(e);
      }
    }
    function sh(l, t, e, a) {
      for (; l.nodeType === 1; ) {
        var u = e;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (a) {
          if (!l[eu])
            switch (t) {
              case "meta":
                if (!l.hasAttribute("itemprop")) break;
                return l;
              case "link":
                if (((n = l.getAttribute("rel")), n === "stylesheet" && l.hasAttribute("data-precedence"))) break;
                if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                return l;
              case "style":
                if (l.hasAttribute("data-precedence")) break;
                return l;
              case "script":
                if (((n = l.getAttribute("src")), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))) break;
                return l;
              default:
                return l;
            }
        } else if (t === "input" && l.type === "hidden") {
          var n = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && l.getAttribute("name") === n) return l;
        } else return l;
        if (((l = Dt(l.nextSibling)), l === null)) break;
      }
      return null;
    }
    function oh(l, t, e) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e) || ((l = Dt(l.nextSibling)), l === null)) return null;
      return l;
    }
    function zd(l, t) {
      for (; l.nodeType !== 8; ) if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) || ((l = Dt(l.nextSibling)), l === null)) return null;
      return l;
    }
    function Tf(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function Ef(l) {
      return l.data === "$!" || (l.data === "$?" && l.ownerDocument.readyState !== "loading");
    }
    function rh(l, t) {
      var e = l.ownerDocument;
      if (l.data === "$~") l._reactRetry = t;
      else if (l.data !== "$?" || e.readyState !== "loading") t();
      else {
        var a = function () {
          t(), e.removeEventListener("DOMContentLoaded", a);
        };
        e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
      }
    }
    function Dt(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = l.data), t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")) break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return l;
    }
    var Af = null;
    function Td(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "/$" || e === "/&") {
            if (t === 0) return Dt(l.nextSibling);
            t--;
          } else (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") || t++;
        }
        l = l.nextSibling;
      }
      return null;
    }
    function Ed(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
            if (t === 0) return l;
            t--;
          } else (e !== "/$" && e !== "/&") || t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function Ad(l, t, e) {
      switch (((t = Fn(e)), l)) {
        case "html":
          if (((l = t.documentElement), !l)) throw Error(r(452));
          return l;
        case "head":
          if (((l = t.head), !l)) throw Error(r(453));
          return l;
        case "body":
          if (((l = t.body), !l)) throw Error(r(454));
          return l;
        default:
          throw Error(r(451));
      }
    }
    function Yu(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      xi(l);
    }
    var Ct = new Map(),
      xd = new Set();
    function $n(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var oe = A.d;
    A.d = { f: dh, r: yh, D: hh, C: mh, L: vh, m: gh, X: ph, S: Sh, M: bh };
    function dh() {
      var l = oe.f(),
        t = Ln();
      return l || t;
    }
    function yh(l) {
      var t = oa(l);
      t !== null && t.tag === 5 && t.type === "form" ? Lo(t) : oe.r(l);
    }
    var La = typeof document > "u" ? null : document;
    function _d(l, t, e) {
      var a = La;
      if (a && typeof t == "string" && t) {
        var u = Tt(t);
        (u = 'link[rel="' + l + '"][href="' + u + '"]'), typeof e == "string" && (u += '[crossorigin="' + e + '"]'), xd.has(u) || (xd.add(u), (l = { rel: l, crossOrigin: e, href: t }), a.querySelector(u) === null && ((t = a.createElement("link")), Wl(t, "link", l), Ql(t), a.head.appendChild(t)));
      }
    }
    function hh(l) {
      oe.D(l), _d("dns-prefetch", l, null);
    }
    function mh(l, t) {
      oe.C(l, t), _d("preconnect", l, t);
    }
    function vh(l, t, e) {
      oe.L(l, t, e);
      var a = La;
      if (a && l && t) {
        var u = 'link[rel="preload"][as="' + Tt(t) + '"]';
        t === "image" && e && e.imageSrcSet ? ((u += '[imagesrcset="' + Tt(e.imageSrcSet) + '"]'), typeof e.imageSizes == "string" && (u += '[imagesizes="' + Tt(e.imageSizes) + '"]')) : (u += '[href="' + Tt(l) + '"]');
        var n = u;
        switch (t) {
          case "style":
            n = Za(l);
            break;
          case "script":
            n = Va(l);
        }
        Ct.has(n) || ((l = q({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e)), Ct.set(n, l), a.querySelector(u) !== null || (t === "style" && a.querySelector(Gu(n))) || (t === "script" && a.querySelector(Xu(n))) || ((t = a.createElement("link")), Wl(t, "link", l), Ql(t), a.head.appendChild(t)));
      }
    }
    function gh(l, t) {
      oe.m(l, t);
      var e = La;
      if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script",
          u = 'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(l) + '"]',
          n = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Va(l);
        }
        if (!Ct.has(n) && ((l = q({ rel: "modulepreload", href: l }, t)), Ct.set(n, l), e.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(Xu(n))) return;
          }
          (a = e.createElement("link")), Wl(a, "link", l), Ql(a), e.head.appendChild(a);
        }
      }
    }
    function Sh(l, t, e) {
      oe.S(l, t, e);
      var a = La;
      if (a && l) {
        var u = ra(a).hoistableStyles,
          n = Za(l);
        t = t || "default";
        var i = u.get(n);
        if (!i) {
          var c = { loading: 0, preload: null };
          if ((i = a.querySelector(Gu(n)))) c.loading = 5;
          else {
            (l = q({ rel: "stylesheet", href: l, "data-precedence": t }, e)), (e = Ct.get(n)) && xf(l, e);
            var f = (i = a.createElement("link"));
            Ql(f),
              Wl(f, "link", l),
              (f._p = new Promise(function (h, S) {
                (f.onload = h), (f.onerror = S);
              })),
              f.addEventListener("load", function () {
                c.loading |= 1;
              }),
              f.addEventListener("error", function () {
                c.loading |= 2;
              }),
              (c.loading |= 4),
              In(i, t, a);
          }
          (i = { type: "stylesheet", instance: i, count: 1, state: c }), u.set(n, i);
        }
      }
    }
    function ph(l, t) {
      oe.X(l, t);
      var e = La;
      if (e && l) {
        var a = ra(e).hoistableScripts,
          u = Va(l),
          n = a.get(u);
        n || ((n = e.querySelector(Xu(u))), n || ((l = q({ src: l, async: !0 }, t)), (t = Ct.get(u)) && _f(l, t), (n = e.createElement("script")), Ql(n), Wl(n, "link", l), e.head.appendChild(n)), (n = { type: "script", instance: n, count: 1, state: null }), a.set(u, n));
      }
    }
    function bh(l, t) {
      oe.M(l, t);
      var e = La;
      if (e && l) {
        var a = ra(e).hoistableScripts,
          u = Va(l),
          n = a.get(u);
        n || ((n = e.querySelector(Xu(u))), n || ((l = q({ src: l, async: !0, type: "module" }, t)), (t = Ct.get(u)) && _f(l, t), (n = e.createElement("script")), Ql(n), Wl(n, "link", l), e.head.appendChild(n)), (n = { type: "script", instance: n, count: 1, state: null }), a.set(u, n));
      }
    }
    function Od(l, t, e, a) {
      var u = (u = B.current) ? $n(u) : null;
      if (!u) throw Error(r(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string" ? ((t = Za(e.href)), (e = ra(u).hoistableStyles), (a = e.get(t)), a || ((a = { type: "style", instance: null, count: 0, state: null }), e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            l = Za(e.href);
            var n = ra(u).hoistableStyles,
              i = n.get(l);
            if ((i || ((u = u.ownerDocument || u), (i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }), n.set(l, i), (n = u.querySelector(Gu(l))) && !n._p && ((i.instance = n), (i.state.loading = 5)), Ct.has(l) || ((e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }), Ct.set(l, e), n || zh(u, l, e, i.state))), t && a === null))
              throw Error(r(528, ""));
            return i;
          }
          if (t && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return (t = e.async), (e = e.src), typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? ((t = Va(e)), (e = ra(u).hoistableScripts), (a = e.get(t)), a || ((a = { type: "script", instance: null, count: 0, state: null }), e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(r(444, l));
      }
    }
    function Za(l) {
      return 'href="' + Tt(l) + '"';
    }
    function Gu(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function Md(l) {
      return q({}, l, { "data-precedence": l.precedence, precedence: null });
    }
    function zh(l, t, e, a) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (a.loading = 1)
        : ((t = l.createElement("link")),
          (a.preload = t),
          t.addEventListener("load", function () {
            return (a.loading |= 1);
          }),
          t.addEventListener("error", function () {
            return (a.loading |= 2);
          }),
          Wl(t, "link", e),
          Ql(t),
          l.head.appendChild(t));
    }
    function Va(l) {
      return '[src="' + Tt(l) + '"]';
    }
    function Xu(l) {
      return "script[async]" + l;
    }
    function Dd(l, t, e) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case "style":
            var a = l.querySelector('style[data-href~="' + Tt(e.href) + '"]');
            if (a) return (t.instance = a), Ql(a), a;
            var u = q({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
            return (a = (l.ownerDocument || l).createElement("style")), Ql(a), Wl(a, "style", u), In(a, e.precedence, l), (t.instance = a);
          case "stylesheet":
            u = Za(e.href);
            var n = l.querySelector(Gu(u));
            if (n) return (t.state.loading |= 4), (t.instance = n), Ql(n), n;
            (a = Md(e)), (u = Ct.get(u)) && xf(a, u), (n = (l.ownerDocument || l).createElement("link")), Ql(n);
            var i = n;
            return (
              (i._p = new Promise(function (c, f) {
                (i.onload = c), (i.onerror = f);
              })),
              Wl(n, "link", a),
              (t.state.loading |= 4),
              In(n, e.precedence, l),
              (t.instance = n)
            );
          case "script":
            return (n = Va(e.src)), (u = l.querySelector(Xu(n))) ? ((t.instance = u), Ql(u), u) : ((a = e), (u = Ct.get(n)) && ((a = q({}, e)), _f(a, u)), (l = l.ownerDocument || l), (u = l.createElement("script")), Ql(u), Wl(u, "link", a), l.head.appendChild(u), (t.instance = u));
          case "void":
            return null;
          default:
            throw Error(r(443, t.type));
        }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), In(a, e.precedence, l));
      return t.instance;
    }
    function In(l, t, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
        var c = a[i];
        if (c.dataset.precedence === t) n = c;
        else if (n !== u) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
    }
    function xf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function _f(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var Pn = null;
    function Cd(l, t, e) {
      if (Pn === null) {
        var a = new Map(),
          u = (Pn = new Map());
        u.set(e, a);
      } else (u = Pn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
      if (a.has(l)) return a;
      for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[eu] || n[Kl] || (l === "link" && n.getAttribute("rel") === "stylesheet")) && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = n.getAttribute(t) || "";
          i = l + i;
          var c = a.get(i);
          c ? c.push(n) : a.set(i, [n]);
        }
      }
      return a;
    }
    function Ud(l, t, e) {
      (l = l.ownerDocument || l), l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
    }
    function Th(l, t, e) {
      if (e === 1 || t.itemProp != null) return !1;
      switch (l) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          switch (t.rel) {
            case "stylesheet":
              return (l = t.disabled), typeof t.precedence == "string" && l == null;
            default:
              return !0;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
      }
      return !1;
    }
    function Rd(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function Eh(l, t, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var u = Za(a.href),
            n = t.querySelector(Gu(u));
          if (n) {
            (t = n._p), t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, (l = li.bind(l)), t.then(l, l)), (e.state.loading |= 4), (e.instance = n), Ql(n);
            return;
          }
          (n = t.ownerDocument || t), (a = Md(a)), (u = Ct.get(u)) && xf(a, u), (n = n.createElement("link")), Ql(n);
          var i = n;
          (i._p = new Promise(function (c, f) {
            (i.onload = c), (i.onerror = f);
          })),
            Wl(n, "link", a),
            (e.instance = n);
        }
        l.stylesheets === null && (l.stylesheets = new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, (e = li.bind(l)), t.addEventListener("load", e), t.addEventListener("error", e));
      }
    }
    var Of = 0;
    function Ah(l, t) {
      return (
        l.stylesheets && l.count === 0 && ei(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount
          ? function (e) {
              var a = setTimeout(function () {
                if ((l.stylesheets && ei(l, l.stylesheets), l.unsuspend)) {
                  var n = l.unsuspend;
                  (l.unsuspend = null), n();
                }
              }, 6e4 + t);
              0 < l.imgBytes && Of === 0 && (Of = 62500 * uh());
              var u = setTimeout(function () {
                if (((l.waitingForImages = !1), l.count === 0 && (l.stylesheets && ei(l, l.stylesheets), l.unsuspend))) {
                  var n = l.unsuspend;
                  (l.unsuspend = null), n();
                }
              }, (l.imgBytes > Of ? 50 : 800) + t);
              return (
                (l.unsuspend = e),
                function () {
                  (l.unsuspend = null), clearTimeout(a), clearTimeout(u);
                }
              );
            }
          : null
      );
    }
    function li() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) ei(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          (this.unsuspend = null), l();
        }
      }
    }
    var ti = null;
    function ei(l, t) {
      (l.stylesheets = null), l.unsuspend !== null && (l.count++, (ti = new Map()), t.forEach(xh, l), (ti = null), li.call(l));
    }
    function xh(l, t) {
      if (!(t.state.loading & 4)) {
        var e = ti.get(l);
        if (e) var a = e.get(null);
        else {
          (e = new Map()), ti.set(l, e);
          for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
            var i = u[n];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), (a = i));
          }
          a && e.set(null, a);
        }
        (u = t.instance), (i = u.getAttribute("data-precedence")), (n = e.get(i) || a), n === a && e.set(null, u), e.set(i, u), this.count++, (a = li.bind(this)), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(u, l.firstChild)), (t.state.loading |= 4);
      }
    }
    var Qu = { $$typeof: jl, Provider: null, Consumer: null, _currentValue: Y, _currentValue2: Y, _threadCount: 0 };
    function _h(l, t, e, a, u, n, i, c, f) {
      (this.tag = 1),
        (this.containerInfo = l),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = zi(-1)),
        (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = zi(0)),
        (this.hiddenUpdates = zi(null)),
        (this.identifierPrefix = a),
        (this.onUncaughtError = u),
        (this.onCaughtError = n),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = f),
        (this.incompleteTransitions = new Map());
    }
    function Hd(l, t, e, a, u, n, i, c, f, h, S, E) {
      return (l = new _h(l, t, e, i, f, h, S, E, c)), (t = 1), n === !0 && (t |= 24), (n = yt(3, null, null, t)), (l.current = n), (n.stateNode = l), (t = nc()), t.refCount++, (l.pooledCache = t), t.refCount++, (n.memoizedState = { element: a, isDehydrated: e, cache: t }), sc(n), l;
    }
    function Nd(l) {
      return l ? ((l = za), l) : za;
    }
    function Bd(l, t, e, a, u, n) {
      (u = Nd(u)), a.context === null ? (a.context = u) : (a.pendingContext = u), (a = Se(t)), (a.payload = { element: e }), (n = n === void 0 ? null : n), n !== null && (a.callback = n), (e = pe(l, a, t)), e !== null && (ot(e, l, t), pu(e, l, t));
    }
    function jd(l, t) {
      if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
      }
    }
    function Mf(l, t) {
      jd(l, t), (l = l.alternate) && jd(l, t);
    }
    function qd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = Le(l, 67108864);
        t !== null && ot(t, l, 67108864), Mf(l, 67108864);
      }
    }
    function Yd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = St();
        t = Ti(t);
        var e = Le(l, t);
        e !== null && ot(e, l, t), Mf(l, t);
      }
    }
    var ai = !0;
    function Oh(l, t, e, a) {
      var u = p.T;
      p.T = null;
      var n = A.p;
      try {
        (A.p = 2), Df(l, t, e, a);
      } finally {
        (A.p = n), (p.T = u);
      }
    }
    function Mh(l, t, e, a) {
      var u = p.T;
      p.T = null;
      var n = A.p;
      try {
        (A.p = 8), Df(l, t, e, a);
      } finally {
        (A.p = n), (p.T = u);
      }
    }
    function Df(l, t, e, a) {
      if (ai) {
        var u = Cf(a);
        if (u === null) mf(l, t, a, ui, e), Xd(l, a);
        else if (Ch(u, l, t, e, a)) a.stopPropagation();
        else if ((Xd(l, a), t & 4 && -1 < Dh.indexOf(l))) {
          for (; u !== null; ) {
            var n = oa(u);
            if (n !== null)
              switch (n.tag) {
                case 3:
                  if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                    var i = qe(n.pendingLanes);
                    if (i !== 0) {
                      var c = n;
                      for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                        var f = 1 << (31 - Sl(i));
                        (c.entanglements[1] |= f), (i &= ~f);
                      }
                      Lt(n), (rl & 6) === 0 && ((Xn = Vl() + 500), Bu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (c = Le(n, 2)), c !== null && ot(c, n, 2), Ln(), Mf(n, 2);
              }
            if (((n = Cf(a)), n === null && mf(l, t, a, ui, e), n === u)) break;
            u = n;
          }
          u !== null && a.stopPropagation();
        } else mf(l, t, a, null, e);
      }
    }
    function Cf(l) {
      return (l = Ui(l)), Uf(l);
    }
    var ui = null;
    function Uf(l) {
      if (((ui = null), (l = sa(l)), l !== null)) {
        var t = Z(l);
        if (t === null) l = null;
        else {
          var e = t.tag;
          if (e === 13) {
            if (((l = J(t)), l !== null)) return l;
            l = null;
          } else if (e === 31) {
            if (((l = $(t)), l !== null)) return l;
            l = null;
          } else if (e === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return (ui = l), null;
    }
    function Gd(l) {
      switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (bi()) {
            case ku:
              return 2;
            case Wu:
              return 8;
            case je:
            case Pa:
              return 32;
            case ia:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Rf = !1,
      Ce = null,
      Ue = null,
      Re = null,
      Lu = new Map(),
      Zu = new Map(),
      He = [],
      Dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Xd(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          Ce = null;
          break;
        case "dragenter":
        case "dragleave":
          Ue = null;
          break;
        case "mouseover":
        case "mouseout":
          Re = null;
          break;
        case "pointerover":
        case "pointerout":
          Lu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Zu.delete(t.pointerId);
      }
    }
    function Vu(l, t, e, a, u, n) {
      return l === null || l.nativeEvent !== n ? ((l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }), t !== null && ((t = oa(t)), t !== null && qd(t)), l) : ((l.eventSystemFlags |= a), (t = l.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), l);
    }
    function Ch(l, t, e, a, u) {
      switch (t) {
        case "focusin":
          return (Ce = Vu(Ce, l, t, e, a, u)), !0;
        case "dragenter":
          return (Ue = Vu(Ue, l, t, e, a, u)), !0;
        case "mouseover":
          return (Re = Vu(Re, l, t, e, a, u)), !0;
        case "pointerover":
          var n = u.pointerId;
          return Lu.set(n, Vu(Lu.get(n) || null, l, t, e, a, u)), !0;
        case "gotpointercapture":
          return (n = u.pointerId), Zu.set(n, Vu(Zu.get(n) || null, l, t, e, a, u)), !0;
      }
      return !1;
    }
    function Qd(l) {
      var t = sa(l.target);
      if (t !== null) {
        var e = Z(t);
        if (e !== null) {
          if (((t = e.tag), t === 13)) {
            if (((t = J(e)), t !== null)) {
              (l.blockedOn = t),
                ls(l.priority, function () {
                  Yd(e);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = $(e)), t !== null)) {
              (l.blockedOn = t),
                ls(l.priority, function () {
                  Yd(e);
                });
              return;
            }
          } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
            l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function ni(l) {
      if (l.blockedOn !== null) return !1;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var e = Cf(l.nativeEvent);
        if (e === null) {
          e = l.nativeEvent;
          var a = new e.constructor(e.type, e);
          (Ci = a), e.target.dispatchEvent(a), (Ci = null);
        } else return (t = oa(e)), t !== null && qd(t), (l.blockedOn = e), !1;
        t.shift();
      }
      return !0;
    }
    function Ld(l, t, e) {
      ni(l) && e.delete(t);
    }
    function Uh() {
      (Rf = !1), Ce !== null && ni(Ce) && (Ce = null), Ue !== null && ni(Ue) && (Ue = null), Re !== null && ni(Re) && (Re = null), Lu.forEach(Ld), Zu.forEach(Ld);
    }
    function ii(l, t) {
      l.blockedOn === t && ((l.blockedOn = null), Rf || ((Rf = !0), g.unstable_scheduleCallback(g.unstable_NormalPriority, Uh)));
    }
    var ci = null;
    function Zd(l) {
      ci !== l &&
        ((ci = l),
        g.unstable_scheduleCallback(g.unstable_NormalPriority, function () {
          ci === l && (ci = null);
          for (var t = 0; t < l.length; t += 3) {
            var e = l[t],
              a = l[t + 1],
              u = l[t + 2];
            if (typeof a != "function") {
              if (Uf(a || e) === null) continue;
              break;
            }
            var n = oa(e);
            n !== null && (l.splice(t, 3), (t -= 3), Dc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
          }
        }));
    }
    function Ka(l) {
      function t(f) {
        return ii(f, l);
      }
      Ce !== null && ii(Ce, l), Ue !== null && ii(Ue, l), Re !== null && ii(Re, l), Lu.forEach(t), Zu.forEach(t);
      for (var e = 0; e < He.length; e++) {
        var a = He[e];
        a.blockedOn === l && (a.blockedOn = null);
      }
      for (; 0 < He.length && ((e = He[0]), e.blockedOn === null); ) Qd(e), e.blockedOn === null && He.shift();
      if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
        for (a = 0; a < e.length; a += 3) {
          var u = e[a],
            n = e[a + 1],
            i = u[ut] || null;
          if (typeof n == "function") i || Zd(e);
          else if (i) {
            var c = null;
            if (n && n.hasAttribute("formAction")) {
              if (((u = n), (i = n[ut] || null))) c = i.formAction;
              else if (Uf(u) !== null) continue;
            } else c = i.action;
            typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)), Zd(e);
          }
        }
    }
    function Vd() {
      function l(n) {
        n.canIntercept &&
          n.info === "react-transition" &&
          n.intercept({
            handler: function () {
              return new Promise(function (i) {
                return (u = i);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function t() {
        u !== null && (u(), (u = null)), a || setTimeout(e, 20);
      }
      function e() {
        if (!a && !navigation.transition) {
          var n = navigation.currentEntry;
          n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var a = !1,
          u = null;
        return (
          navigation.addEventListener("navigate", l),
          navigation.addEventListener("navigatesuccess", t),
          navigation.addEventListener("navigateerror", t),
          setTimeout(e, 100),
          function () {
            (a = !0), navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), (u = null));
          }
        );
      }
    }
    function Hf(l) {
      this._internalRoot = l;
    }
    (fi.prototype.render = Hf.prototype.render =
      function (l) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        var e = t.current,
          a = St();
        Bd(e, a, l, t, null, null);
      }),
      (fi.prototype.unmount = Hf.prototype.unmount =
        function () {
          var l = this._internalRoot;
          if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Bd(l.current, 2, null, l, null, null), Ln(), (t[fa] = null);
          }
        });
    function fi(l) {
      this._internalRoot = l;
    }
    fi.prototype.unstable_scheduleHydration = function (l) {
      if (l) {
        var t = Pf();
        l = { blockedOn: null, target: l, priority: t };
        for (var e = 0; e < He.length && t !== 0 && t < He[e].priority; e++);
        He.splice(e, 0, l), e === 0 && Qd(l);
      }
    };
    var Kd = R.version;
    if (Kd !== "19.2.0") throw Error(r(527, Kd, "19.2.0"));
    A.findDOMNode = function (l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(r(188)) : ((l = Object.keys(l).join(",")), Error(r(268, l)));
      return (l = z(t)), (l = l !== null ? V(l) : null), (l = l === null ? null : l.stateNode), l;
    };
    var Rh = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: p, reconcilerVersion: "19.2.0" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!si.isDisabled && si.supportsFiber)
        try {
          (dl = si.inject(Rh)), (fl = si);
        } catch {}
    }
    return (
      (wa.createRoot = function (l, t) {
        if (!G(l)) throw Error(r(299));
        var e = !1,
          a = "",
          u = Io,
          n = Po,
          i = lr;
        return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), (t = Hd(l, 1, !1, null, null, e, a, null, u, n, i, Vd)), (l[fa] = t.current), hf(l), new Hf(t);
      }),
      (wa.hydrateRoot = function (l, t, e) {
        if (!G(l)) throw Error(r(299));
        var a = !1,
          u = "",
          n = Io,
          i = Po,
          c = lr,
          f = null;
        return (
          e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)),
          (t = Hd(l, 1, !0, t, e ?? null, a, u, f, n, i, c, Vd)),
          (t.context = Nd(null)),
          (e = t.current),
          (a = St()),
          (a = Ti(a)),
          (u = Se(a)),
          (u.callback = null),
          pe(e, u, a),
          (e = a),
          (t.current.lanes = e),
          tu(t, e),
          Lt(t),
          (l[fa] = t.current),
          hf(l),
          new fi(t)
        );
      }),
      (wa.version = "19.2.0"),
      wa
    );
  }
  var Kf;
  function l0() {
    if (Kf) return yi.exports;
    Kf = 1;
    function g() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
        } catch (R) {
          console.error(R);
        }
    }
    return g(), (yi.exports = Pd()), yi.exports;
  }
  var t0 = l0();
  const e0 = Nf(t0);
  var a0 = Zf();
  function u0({ isRegistered: g, userName: R, onLogin: x, onRegister: r, onLogout: G, onGuestLogout: Z }) {
    return O.jsxs("div", {
      style: { background: "#e8e8e8", borderBottom: "1px solid #ccc" },
      children: [
        O.jsx("div", { style: { padding: "6px", textAlign: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px", color: "#555" }, children: "TROLLBOX" }),
        O.jsx("div", {
          style: { display: "flex", gap: "4px", padding: "6px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" },
          children: g
            ? O.jsxs(O.Fragment, { children: [O.jsxs("span", { style: { fontSize: "11px", color: "#1976d2", fontWeight: "600", padding: "4px 8px", background: "#e3f2fd", borderRadius: "4px", border: "1px solid #90caf9" }, children: ["👤 ", R] }), O.jsx("button", { onClick: G, style: { padding: "4px 8px", fontSize: "11px", border: "1px solid #d32f2f", borderRadius: "4px", background: "#d32f2f", color: "#fff", cursor: "pointer" }, children: "Logout" })] })
            : O.jsxs(O.Fragment, {
                children: [
                  O.jsx("button", { onClick: r, style: { padding: "4px 8px", fontSize: "11px", border: "1px solid #1976d2", borderRadius: "4px", background: "#1976d2", color: "#fff", cursor: "pointer" }, children: "Create Account" }),
                  O.jsx("button", { onClick: x, style: { padding: "4px 8px", fontSize: "11px", border: "1px solid #1976d2", borderRadius: "4px", background: "#fff", color: "#1976d2", cursor: "pointer" }, children: "Login" }),
                  R && O.jsxs(O.Fragment, { children: [O.jsxs("span", { style: { fontSize: "11px", color: "#666", fontWeight: "500", padding: "4px 8px", background: "#f5f5f5", borderRadius: "4px", border: "1px solid #ddd" }, children: ["👤 ", R] }), O.jsx("button", { onClick: Z, style: { padding: "4px 8px", fontSize: "11px", border: "1px solid #999", borderRadius: "4px", background: "#fff", color: "#555", cursor: "pointer" }, children: "Logout Guest" })] }),
                ],
              }),
        }),
      ],
    });
  }
  const Jf = (g) => (g ? g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "'") : ""),
    n0 = (g) => ({ __html: g }),
    i0 = (g) => {
      const R = new Date(g),
        x = new Date(),
        r = new Date(x.getFullYear(), x.getMonth(), x.getDate()),
        G = new Date(r);
      G.setDate(G.getDate() - 1);
      const Z = String(R.getHours()).padStart(2, "0"),
        J = String(R.getMinutes()).padStart(2, "0"),
        $ = `${Z}:${J}`;
      if (R >= r) return $;
      if (R >= G) return `Yesterday ${$}`;
      {
        const M = String(R.getDate()).padStart(2, "0"),
          z = String(R.getMonth() + 1).padStart(2, "0");
        return `${M}/${z} ${$}`;
      }
    },
    c0 = (g) => {
      if (g === "#e0e0e0") return "#000";
      const R = g.replace("#", ""),
        x = parseInt(R.substr(0, 2), 16),
        r = parseInt(R.substr(2, 2), 16),
        G = parseInt(R.substr(4, 2), 16);
      return (0.299 * x + 0.587 * r + 0.114 * G) / 255 > 0.5 ? "#000" : "#fff";
    };
  function f0({ message: g, currentUser: R, userLatestColor: x }) {
    const r = g.user === R,
      G = g.isRegistered === !0,
      Z = x || g.color || "#e0e0e0",
      J = c0(Z);
    return O.jsxs("div", {
      "data-msg-id": g.id,
      style: { display: "flex", flexDirection: "column", marginBottom: "8px", maxWidth: "80%", minWidth: "100px", alignSelf: r ? "flex-end" : "flex-start" },
      children: [
        O.jsx("div", { style: { fontSize: "12px", marginBottom: "2px", textAlign: r ? "right" : "left", color: G ? "#1976d2" : "#555", fontWeight: G ? "bold" : "normal" }, children: Jf(g.user) }),
        O.jsxs("div", { style: { padding: "6px 10px", borderRadius: "12px", fontSize: "14px", wordWrap: "break-word", whiteSpace: "pre-wrap", backgroundColor: Z, color: J, position: "relative", paddingBottom: "18px" }, children: [g.isHtml ? O.jsx("div", { dangerouslySetInnerHTML: n0(g.text) }) : O.jsx("div", { children: Jf(g.text) }), O.jsx("div", { style: { position: "absolute", bottom: "3px", right: "8px", fontSize: "10px", opacity: 0.7, color: J }, children: i0(g.timestamp) })] }),
      ],
    });
  }
  const s0 = "https://user.ucbg.online/chat-api";
  function o0({ onSave: g, onLogin: R, onRegister: x }) {
    const [r, G] = j.useState(""),
      [Z, J] = j.useState(!1),
      [$, M] = j.useState(""),
      z = async () => {
        const V = r.trim();
        if ((M(""), !V)) {
          M("Please enter a nickname to join the chat.");
          return;
        }
        J(!0);
        try {
          const k = await (await fetch(`${s0}/check-username.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: V }) })).json();
          if (k.success && k.isRegistered) {
            M("This username is registered. Please login or choose another name."), J(!1);
            return;
          }
          g(V);
        } catch (q) {
          console.error("Username check error:", q), g(V);
        } finally {
          J(!1);
        }
      };
    return O.jsx("div", {
      style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(255,255,255,0.98)", zIndex: 2e3, padding: "20px" },
      children: O.jsxs("div", {
        style: { width: "100%", maxWidth: "280px", display: "flex", flexDirection: "column", gap: "16px" },
        children: [
          O.jsxs("div", {
            style: { textAlign: "center", marginBottom: "8px" },
            children: [
              O.jsx("h3", { style: { margin: "0 0 8px 0", fontSize: "20px", color: "#333", fontWeight: "600" }, children: "Welcome to Chat! 💬" }),
              O.jsx("p", { style: { margin: "0 0 12px 0", fontSize: "13px", color: "#666", lineHeight: "1.4" }, children: "Choose an available nickname to join the conversation" }),
              O.jsx("div", { style: { padding: "10px 12px", fontSize: "12px", color: "#d97706", backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "8px", textAlign: "center", lineHeight: "1.5" }, children: "⚠️ Chat and have fun, but please don't share personal information." }),
            ],
          }),
          O.jsx("input", {
            type: "text",
            placeholder: "Enter your nickname...",
            value: r,
            onChange: (V) => {
              G(V.target.value), M("");
            },
            onKeyPress: (V) => V.key === "Enter" && !Z && z(),
            disabled: Z,
            maxLength: 32,
            style: { padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", opacity: Z ? 0.6 : 1 },
          }),
          $ && O.jsx("div", { style: { padding: "10px 12px", fontSize: "12px", color: "#b40000", backgroundColor: "#ffecec", border: "1px solid #ffb5b5", borderRadius: "8px", textAlign: "center", lineHeight: "1.4" }, children: $ }),
          O.jsx("button", { onClick: z, disabled: Z, style: { padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#1976d2", color: "#fff", fontSize: "15px", fontWeight: "600", cursor: Z ? "not-allowed" : "pointer", opacity: Z ? 0.6 : 1, transition: "all 0.2s" }, children: Z ? "Checking..." : "Join Chat" }),
          O.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px", margin: "8px 0" }, children: [O.jsx("div", { style: { flex: 1, height: "1px", background: "#ddd" } }), O.jsx("span", { style: { fontSize: "12px", color: "#999" }, children: "or" }), O.jsx("div", { style: { flex: 1, height: "1px", background: "#ddd" } })] }),
          O.jsxs("div", {
            style: { display: "flex", gap: "8px" },
            children: [
              O.jsx("button", { onClick: R, disabled: Z, style: { flex: 1, padding: "10px", border: "1px solid #1976d2", borderRadius: "8px", backgroundColor: "#fff", color: "#1976d2", fontSize: "13px", fontWeight: "500", cursor: Z ? "not-allowed" : "pointer", transition: "all 0.2s" }, children: "Login" }),
              O.jsx("button", { onClick: x, disabled: Z, style: { flex: 1, padding: "10px", border: "1px solid #1976d2", borderRadius: "8px", backgroundColor: "#1976d2", color: "#fff", fontSize: "13px", fontWeight: "500", cursor: Z ? "not-allowed" : "pointer", transition: "all 0.2s" }, children: "Create Account" }),
            ],
          }),
          O.jsx("p", { style: { margin: "8px 0 0 0", fontSize: "11px", color: "#999", textAlign: "center", lineHeight: "1.4" }, children: "Guest nicknames are temporary. Create an account to secure your username and unlock more message color options! 🎨" }),
        ],
      }),
    });
  }
  function r0({ mode: g, onClose: R, onSubmit: x, isLoading: r, errorMessage: G, onForgotPassword: Z, successMessage: J }) {
    const [$, M] = j.useState({ name: "", email: "", password: "", confirmPassword: "" }),
      [z, V] = j.useState(""),
      q = (I) => {
        if ((I.preventDefault(), V(""), g === "register" && $.password !== $.confirmPassword)) {
          V("Passwords do not match");
          return;
        }
        x($);
      },
      k = { login: "Login", register: "Create Account", forgotPassword: "Forgot Password" };
    return O.jsx("div", {
      style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(255,255,255,0.98)", zIndex: 3e3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" },
      children: O.jsxs("div", {
        style: { width: "100%", maxWidth: "280px" },
        children: [
          O.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: "18px", color: "#333", textAlign: "center" }, children: k[g] }),
          O.jsxs("form", {
            onSubmit: q,
            style: { display: "flex", flexDirection: "column", gap: "12px" },
            children: [
              g === "register" && O.jsx("input", { type: "text", placeholder: "Name", value: $.name, onChange: (I) => M({ ...$, name: I.target.value }), required: !0, maxLength: 32, style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" } }),
              (g === "login" || g === "register" || g === "forgotPassword") && O.jsx("input", { type: "email", placeholder: "Email", value: $.email, onChange: (I) => M({ ...$, email: I.target.value }), required: !0, style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" } }),
              (g === "login" || g === "register") &&
                O.jsxs(O.Fragment, {
                  children: [
                    O.jsx("input", {
                      type: "password",
                      placeholder: "Password (min 6 characters)",
                      value: $.password,
                      onChange: (I) => {
                        M({ ...$, password: I.target.value }), V("");
                      },
                      required: !0,
                      minLength: 6,
                      style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                    }),
                    g === "register" &&
                      O.jsx("input", {
                        type: "password",
                        placeholder: "Confirm Password",
                        value: $.confirmPassword,
                        onChange: (I) => {
                          M({ ...$, confirmPassword: I.target.value }), V("");
                        },
                        required: !0,
                        minLength: 6,
                        style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                      }),
                  ],
                }),
              g === "login" && Z && O.jsx("div", { style: { textAlign: "right" }, children: O.jsx("button", { type: "button", onClick: Z, style: { background: "none", border: "none", color: "#1976d2", fontSize: "12px", cursor: "pointer", textDecoration: "underline", padding: 0 }, children: "Forgot password?" }) }),
              g === "register" && !G && !z && O.jsx("div", { style: { padding: "8px 10px", fontSize: "11px", color: "#0b63c8", backgroundColor: "#eef5ff", border: "1px solid #bcd8ff", borderRadius: "8px", lineHeight: "1.4" }, children: "After registration, please login with your credentials. No confirmation email will be sent." }),
              g === "forgotPassword" && !G && !z && O.jsx("div", { style: { padding: "8px 10px", fontSize: "11px", color: "#0b63c8", backgroundColor: "#eef5ff", border: "1px solid #bcd8ff", borderRadius: "8px", lineHeight: "1.4" }, children: "Enter your email address and we'll send you a link to reset your password." }),
              J && O.jsx("div", { style: { padding: "10px 12px", fontSize: "12px", color: "#0f7a3a", backgroundColor: "#ecfff2", border: "1px solid #b9f0cf", borderRadius: "8px", textAlign: "center", lineHeight: "1.4" }, children: J }),
              (G || z) && !J && O.jsx("div", { style: { padding: "8px 10px", fontSize: "12px", color: "#b40000", backgroundColor: "#ffecec", border: "1px solid #ffb5b5", borderRadius: "8px", textAlign: "center" }, children: G || z }),
              J
                ? O.jsx("button", {
                    type: "button",
                    onClick: () => {
                      R();
                    },
                    style: { width: "100%", padding: "10px", border: "none", borderRadius: "8px", backgroundColor: "#1976d2", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "500", marginTop: "8px" },
                    children: "Back to Login",
                  })
                : O.jsxs("div", {
                    style: { display: "flex", gap: "8px", marginTop: "8px" },
                    children: [
                      O.jsx("button", { type: "submit", disabled: r, style: { flex: 1, padding: "10px", border: "none", borderRadius: "8px", backgroundColor: "#1976d2", color: "#fff", cursor: r ? "not-allowed" : "pointer", opacity: r ? 0.6 : 1, fontSize: "14px", fontWeight: "500" }, children: r ? "Please wait..." : g === "forgotPassword" ? "Send Reset Link" : "Submit" }),
                      O.jsx("button", { type: "button", onClick: R, disabled: r, style: { flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff", color: "#666", cursor: r ? "not-allowed" : "pointer", fontSize: "14px" }, children: g === "forgotPassword" ? "Back" : "Cancel" }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  }
  const d0 = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E0BBE4"];
  function y0({ isRegistered: g, selectedColor: R, onColorChange: x }) {
    return g
      ? O.jsxs("div", {
          style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "6px", gap: "8px", borderTop: "1px solid #ddd", background: "#f9f9f9" },
          children: [O.jsx("label", { style: { fontSize: "11px", color: "#555", fontWeight: "500" }, children: "Message Color:" }), O.jsx("input", { type: "color", value: R || "#e0e0e0", onChange: (r) => x(r.target.value), style: { width: "40px", height: "24px", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer" } })],
        })
      : O.jsx("div", {
          style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "6px", gap: "6px", borderTop: "1px solid #ddd", background: "#f9f9f9" },
          children: d0.map((r) => O.jsx("button", { onClick: () => x(r), style: { width: "28px", height: "28px", borderRadius: "50%", backgroundColor: r, border: R === r ? "3px solid #1976d2" : "2px solid #ccc", cursor: "pointer", transition: "all 0.2s", boxShadow: R === r ? "0 0 8px rgba(25, 118, 210, 0.5)" : "none" }, title: r }, r)),
        });
  }
  const ka = "https://user.ucbg.online/chat-api",
    Wa = (g, R, x = 365) => {
      const r = new Date(Date.now() + x * 864e5).toUTCString();
      document.cookie = `${g}=${encodeURIComponent(R)}; expires=${r}; path=/`;
    },
    h0 = (g) =>
      document.cookie.split("; ").reduce((R, x) => {
        const r = x.split("=");
        return r[0] === g ? decodeURIComponent(r[1]) : R;
      }, "");
  function m0(g) {
    const [R, x] = j.useState(h0("chatAuthToken") || ""),
      [r, G] = j.useState(!1),
      [Z, J] = j.useState(!1);
    j.useEffect(() => {
      R && $();
    }, []);
    const $ = async () => {
      try {
        const I = await (await fetch(`${ka}/verify-session.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: R }) })).json();
        return I.success && I.valid ? (G(!0), Wa("chatNick", I.user.name), I.user) : (x(""), Wa("chatAuthToken", ""), G(!1), null);
      } catch (k) {
        return console.error("Session verify error:", k), null;
      }
    };
    return {
      authToken: R,
      isRegistered: r,
      isLoading: Z,
      handleRegister: async (k) => {
        J(!0);
        try {
          const cl = await (await fetch(`${ka}/register.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(k) })).json();
          return cl.success ? (g("Registration successful! Please login with your credentials.", "ok", 4e3), { success: !0 }) : { success: !1, error: cl.error || "Registration failed" };
        } catch (I) {
          return console.error("Register error:", I), { success: !1, error: "Network error. Please try again." };
        } finally {
          J(!1);
        }
      },
      handleLogin: async (k) => {
        J(!0);
        try {
          const cl = await (await fetch(`${ka}/login.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(k) })).json();
          return cl.success ? (x(cl.token), Wa("chatAuthToken", cl.token), Wa("chatNick", cl.user.name), G(!0), g("Login successful!", "ok", 2e3), { success: !0, user: cl.user }) : { success: !1, error: cl.error || "Login failed" };
        } catch (I) {
          return console.error("Login error:", I), { success: !1, error: "Network error. Please try again." };
        } finally {
          J(!1);
        }
      },
      handleLogout: async () => {
        J(!0);
        try {
          return await fetch(`${ka}/logout.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: R }) }), x(""), Wa("chatAuthToken", ""), G(!1), g("Logged out successfully", "ok", 2e3), { success: !0 };
        } catch (k) {
          return console.error("Logout error:", k), g("Logout failed", "error", 3e3), { success: !1 };
        } finally {
          J(!1);
        }
      },
      handleForgotPassword: async (k) => {
        J(!0);
        try {
          const cl = await (await fetch(`${ka}/forgot-password.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: k.email }) })).json();
          return cl.success ? { success: !0, message: cl.message || "If this email is registered, you will receive a password reset link." } : { success: !1, error: cl.error || "Failed to send reset link" };
        } catch (I) {
          return console.error("Forgot password error:", I), { success: !1, error: "Network error. Please try again." };
        } finally {
          J(!1);
        }
      },
      verifySession: $,
    };
  }
  const Fa = "https://user.ucbg.online/chat-api",
    v0 = 8e3,
    g0 = 2e4,
    Ku = 30,
    S0 = 100,
    p0 = 250,
    Zt = (g, R, x = 365) => {
      const r = new Date(Date.now() + x * 864e5).toUTCString();
      document.cookie = `${g}=${encodeURIComponent(R)}; expires=${r}; path=/`;
    },
    gi = (g) =>
      document.cookie.split("; ").reduce((R, x) => {
        const r = x.split("=");
        return r[0] === g ? decodeURIComponent(r[1]) : R;
      }, ""),
    ta = (g, R, x = 365) => {
      Zt(g, String(R), x);
    },
    wf = (g, R = 0) => {
      const x = parseInt(gi(g), 10);
      return Number.isFinite(x) ? x : R;
    };
  function b0() {
    const [g, R] = j.useState(!1),
      [x, r] = j.useState(gi("chatNick") || ""),
      [G, Z] = j.useState([]),
      [J, $] = j.useState(""),
      [M, z] = j.useState(wf("chatUnread", 0)),
      [V, q] = j.useState(wf("lastTimestamp", 0)),
      [k, I] = j.useState(0),
      [cl, Yl] = j.useState(!1),
      [lt, Gl] = j.useState(!0),
      [Ut, jl] = j.useState(!0),
      [$l, rt] = j.useState({ text: "", type: "info", visible: !1 }),
      [_l, ll] = j.useState(0),
      [Il, tt] = j.useState("Send"),
      [Vt, Zl] = j.useState(!1),
      [Ul, et] = j.useState("login"),
      [Rt, El] = j.useState(""),
      [p, A] = j.useState(""),
      [Y, il] = j.useState(() => gi("chatColor") || ""),
      W = j.useRef(null),
      o = j.useRef(null),
      T = j.useRef(null),
      _ = j.useRef(null),
      D = j.useRef(null),
      Q = j.useRef([]),
      B = j.useCallback((C, U = "info", dl = 4e3) => {
        rt({ text: C, type: U, visible: !0 }),
          _.current && clearTimeout(_.current),
          (_.current = setTimeout(() => {
            rt((fl) => ({ ...fl, visible: !1 }));
          }, dl));
      }, []),
      { authToken: P, isRegistered: Al, isLoading: xl, handleRegister: Be, handleLogin: ea, handleLogout: $a, handleForgotPassword: Ju, verifySession: Kt } = m0(B);
    j.useEffect(() => {
      const C = document.querySelectorAll("#chat-button");
      (Q.current = Array.from(C)), Q.current.length === 0 ? console.error("No chat buttons found") : console.log(`Found ${Q.current.length} chat button(s)`);
    }, []),
      j.useEffect(() => {
        P &&
          Kt().then((C) => {
            C && r(C.name);
          });
      }, []),
      j.useEffect(() => {
        !Al && Y && (["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E0BBE4"].includes(Y.toUpperCase()) || (il(""), Zt("chatColor", "")));
      }, [Al, Y]);
    const aa = j.useCallback(() => {
        if (!W.current) return !1;
        const { scrollHeight: C, scrollTop: U, clientHeight: dl } = W.current;
        return C - U <= dl + 50;
      }, []),
      Ht = j.useCallback((C = !1) => {
        W.current &&
          requestAnimationFrame(() => {
            W.current?.scrollTo({ top: W.current.scrollHeight, behavior: C ? "smooth" : "auto" });
          });
      }, []),
      wu = j.useCallback(() => (G.length === 0 ? 0 : Math.min(...G.map((C) => C.id))), [G]),
      Nt = j.useCallback(
        async (C = !1) => {
          try {
            const U = C ? `${Fa}/fetch.php?limit=${Ku}` : `${Fa}/fetch.php?since=${V}&limit=50`,
              fl = await (await fetch(U)).json();
            if (!fl.success) {
              console.error("Fetch error:", fl.error), B("Could not load messages.", "error", 3e3);
              return;
            }
            const at = aa();
            if (C) {
              if (fl.messages.length > 0) {
                Z(fl.messages);
                const Sl = Math.max(...fl.messages.map((pt) => pt.timestamp)),
                  Jt = Math.min(...fl.messages.map((pt) => pt.id));
                q(Sl), ta("lastTimestamp", Sl), I(Jt), Gl(Jt !== 1);
              } else Gl(!1);
              setTimeout(() => Ht(!1), 0);
            } else if (fl.messages.length > 0) {
              let Sl = 0;
              const Jt = new Set(G.map((Xl) => Xl.id));
              fl.messages.forEach((Xl) => {
                Jt.has(Xl.id) || (!g && Xl.user !== x && Sl++);
              }),
                Z((Xl) => {
                  const bt = fl.messages.filter((Bt) => !Jt.has(Bt.id));
                  return [...Xl, ...bt];
                });
              const pt = Math.max(...fl.messages.map((Xl) => Xl.timestamp));
              q(pt),
                ta("lastTimestamp", pt),
                Sl > 0 &&
                  z((Xl) => {
                    const bt = Xl + Sl;
                    return ta("chatUnread", bt), bt;
                  }),
                at && setTimeout(() => Ht(!0), 0);
            }
          } catch (U) {
            console.error("Fetch error:", U), B("Network error: failed to load messages.", "error", 3e3);
          }
        },
        [V, G, g, x, aa, Ht, B]
      ),
      ua = j.useCallback(async () => {
        const C = wu();
        if (cl || !lt || C <= 1) return;
        Yl(!0);
        const U = W.current?.scrollTop || 0;
        try {
          const fl = await (await fetch(`${Fa}/fetch-older.php?before_id=${C}&limit=${Ku}`)).json();
          if (!fl.success) {
            console.error("Load older error:", fl.error), B("Could not load older messages.", "error", 3e3);
            return;
          }
          const Sl = (Array.isArray(fl.messages) ? fl.messages : []).slice(0, Ku);
          if (Sl.length > 0) {
            const Jt = new Set(G.map((Xl) => Xl.id)),
              pt = Sl.filter((Xl) => !Jt.has(Xl.id));
            if (pt.length > 0) {
              const Xl = W.current?.scrollHeight || 0;
              Z((Bt) => [...pt, ...Bt]),
                setTimeout(() => {
                  const ca = (W.current?.scrollHeight || 0) - Xl;
                  W.current && (W.current.scrollTop = U + ca);
                }, 0);
              const bt = Math.min(...pt.map((Bt) => Bt.id));
              I(bt), (Sl.length < Ku || bt === 1) && Gl(!1);
            }
          } else Gl(!1);
        } catch (dl) {
          console.error("Load older error:", dl), B("Network error: failed to load older messages.", "error", 3e3);
        } finally {
          Yl(!1);
        }
      }, [cl, lt, G, wu, B]),
      Ia = j.useCallback(() => {
        if (!W.current) return;
        const C = W.current.scrollTop;
        C < S0 && !cl && lt && Ut ? (jl(!1), ua()) : C > p0 && jl(!0);
      }, [cl, lt, Ut, ua]);
    j.useEffect(() => {
      Nt(!0);
    }, []),
      j.useEffect(
        () => (
          (T.current = setInterval(() => {
            g || Nt(!1);
          }, g0)),
          () => {
            T.current && clearInterval(T.current);
          }
        ),
        [g, Nt]
      ),
      j.useEffect(
        () => (
          g ? (Nt(!1), (o.current = setInterval(() => Nt(!1), v0))) : o.current && (clearInterval(o.current), (o.current = null)),
          () => {
            o.current && clearInterval(o.current);
          }
        ),
        [g, Nt]
      ),
      j.useEffect(() => {
        Q.current.length !== 0 &&
          Q.current.forEach((C) => {
            let U = C.querySelector("#chat-badge");
            U ||
              ((U = document.createElement("span")),
              (U.id = "chat-badge"),
              (U.className = "nav-badge"),
              (U.style.cssText = `
          position: relative;
          top: -11px;
          right: 13px;
          background: red;
          color: white;
          border-radius: 50%;
          padding: 1px 7px;
          font-size: 12px;
          display: none;
        `),
              C.appendChild(U)),
              x ? (M > 0 ? ((U.textContent = String(M)), (U.style.display = "block")) : (U.style.display = "none")) : ((U.textContent = "1"), (U.style.display = "block"));
          });
      }, [M, x]),
      j.useEffect(() => {
        if (_l > Date.now()) {
          const C = () => {
            const U = Math.max(0, _l - Date.now());
            if (U <= 0) tt("Send"), D.current && (clearInterval(D.current), (D.current = null));
            else {
              const dl = Math.ceil(U / 1e3);
              tt(`Wait ${dl}s`);
            }
          };
          return (
            C(),
            (D.current = setInterval(C, 250)),
            () => {
              D.current && clearInterval(D.current);
            }
          );
        } else tt("Send");
      }, [_l]);
    const na = j.useCallback(() => {
        R((C) => {
          const U = !C;
          return U && (z(0), ta("chatUnread", 0), setTimeout(() => Ht(!0), 100)), U;
        });
      }, [Ht]),
      Si = j.useCallback(
        (C) => {
          if (!C || !C.trim()) {
            B("Please enter a nickname.", "warn", 2500);
            return;
          }
          r(C.trim()), Zt("chatNick", C.trim()), z(0), ta("chatUnread", 0), B("Nickname saved.", "ok", 2e3);
        },
        [B]
      ),
      pi = j.useCallback(
        async (C) => {
          if (!(!Al && !["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E0BBE4"].includes(C.toUpperCase())) && (il(C), Zt("chatColor", C), P))
            try {
              (await (await fetch(`${Fa}/set-color.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: P, color: C }) })).json()).success && B("Color saved.", "ok", 1500);
            } catch (dl) {
              console.error("Error saving color:", dl);
            }
        },
        [P, Al, B]
      ),
      Vl = j.useCallback(async () => {
        if (!x) {
          B("Please save a nickname first.", "warn", 2500);
          return;
        }
        const C = J.trim();
        if (!C) {
          B("Empty messages cannot be sent.", "warn", 2e3);
          return;
        }
        const U = Date.now();
        if (_l && U < _l) {
          B("Please wait, rate limit in effect.", "warn", 2e3);
          return;
        }
        ll(U + 15e3);
        try {
          const dl = { user: x, text: C };
          P && (dl.token = P), Y && (Al || ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E0BBE4"].includes(Y.toUpperCase()) ? (dl.color = Y) : (il(""), Zt("chatColor", "")));
          const at = await (await fetch(`${Fa}/send.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(dl) })).json();
          if (!at.success) {
            const Sl = at.error || "Could not send.";
            B(Sl, "error", 4e3);
            return;
          }
          $(""), await Nt(!1), Ht(!0), B("Message sent.", "ok", 1200);
        } catch (dl) {
          console.error("Error sending message:", dl), B("Network error: message not sent. Try again.", "error", 4e3);
        }
      }, [x, J, _l, P, Y, B, Nt, Ht]),
      bi = j.useCallback(
        (C) => {
          C.key === "Enter" && !C.shiftKey && (C.preventDefault(), Vl());
        },
        [Vl]
      ),
      ku = j.useCallback(() => {
        r(""), Zt("chatNick", ""), il(""), Zt("chatColor", ""), z(0), ta("chatUnread", 0), B("Logged out. Enter a nickname to join again.", "ok", 2e3);
      }, [B]),
      Wu = async (C) => {
        let U;
        if ((El(""), A(""), Ul === "register")) (U = await Be(C)), !U.success && U.error && El(U.error);
        else if (Ul === "login") (U = await ea(C)), U.success && U.user ? r(U.user.name) : !U.success && U.error && El(U.error);
        else if (Ul === "forgotPassword")
          if (((U = await Ju(C)), U.success && U.message)) {
            A(U.message);
            return;
          } else !U.success && U.error && El(U.error);
        U.success && (Zl(!1), El(""), A(""));
      };
    j.useEffect(() => {
      if (Q.current.length === 0) return;
      const C = (U) => {
        U.stopPropagation(), na();
      };
      return (
        Q.current.forEach((U) => {
          U.addEventListener("click", C);
        }),
        () => {
          Q.current.forEach((U) => {
            U.removeEventListener("click", C);
          });
        }
      );
    }, [na]),
      j.useEffect(() => {
        const C = () => {
          g && R(!1);
        };
        return (
          document.addEventListener("click", C),
          () => {
            document.removeEventListener("click", C);
          }
        );
      }, [g]);
    const je = { info: { bg: "#eef5ff", fg: "#0b63c8", bd: "#bcd8ff" }, warn: { bg: "#fff6e5", fg: "#9a6b00", bd: "#ffdfaa" }, error: { bg: "#ffecec", fg: "#b40000", bd: "#ffb5b5" }, ok: { bg: "#ecfff2", fg: "#0f7a3a", bd: "#b9f0cf" } },
      Pa = je[$l.type] || je.info,
      ia = _l > Date.now();
    return a0.createPortal(
      O.jsxs("div", {
        style: { position: "fixed", top: "80px", bottom: "0px", right: "0", width: "320px", backgroundColor: "#fff", boxShadow: "-4px 0 12px rgba(0,0,0,0.2)", borderRadius: "10px 0 0 0", transform: g ? "translateX(0)" : "translateX(100%)", transition: "transform 0.3s ease-in-out", zIndex: 7e4, display: "flex", flexDirection: "column", overflow: "hidden" },
        onClick: (C) => C.stopPropagation(),
        children: [
          O.jsx(u0, {
            isRegistered: Al,
            userName: x,
            onLogin: () => {
              et("login"), El(""), A(""), Zl(!0);
            },
            onRegister: () => {
              et("register"), El(""), A(""), Zl(!0);
            },
            onLogout: async () => {
              (await $a()).success && (r(""), Zt("chatNick", ""), il(""), Zt("chatColor", ""));
            },
            onGuestLogout: ku,
          }),
          x && O.jsx(y0, { isRegistered: Al, selectedColor: Y, onColorChange: pi }),
          Vt &&
            O.jsx(r0, {
              mode: Ul,
              onClose: () => {
                Zl(!1), El(""), A(""), Ul === "forgotPassword" && p && et("login");
              },
              onSubmit: Wu,
              isLoading: xl,
              errorMessage: Rt,
              successMessage: p,
              onForgotPassword: () => {
                et("forgotPassword"), El(""), A("");
              },
            }),
          !x &&
            !Vt &&
            O.jsx(o0, {
              onSave: Si,
              onLogin: () => {
                et("login"), El(""), Zl(!0);
              },
              onRegister: () => {
                et("register"), El(""), Zl(!0);
              },
            }),
          O.jsx("div", {
            ref: W,
            onScroll: Ia,
            style: { flex: 1, overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", filter: x ? "none" : "blur(5px)", opacity: x ? "1" : "0.3", pointerEvents: x ? "auto" : "none" },
            children: (() => {
              const C = {};
              for (let U = G.length - 1; U >= 0; U--) {
                const dl = G[U];
                dl.color && !C[dl.user] && (C[dl.user] = dl.color);
              }
              return G.map((U) => O.jsx(f0, { message: U, currentUser: x, userLatestColor: C[U.user] }, U.id));
            })(),
          }),
          O.jsxs("div", {
            style: { display: "flex", flexDirection: "column", padding: "10px", gap: "5px", filter: x ? "none" : "blur(5px)", opacity: x ? "1" : "0.3", pointerEvents: x ? "auto" : "none" },
            children: [
              O.jsx("textarea", { placeholder: "Message… (Shift+Enter = new line)", rows: 1, value: J, onChange: (C) => $(C.target.value), onKeyDown: bi, style: { padding: "8px", border: "1px solid #ccc", borderRadius: "8px", resize: "none", fontFamily: "inherit", fontSize: "14px", maxHeight: "120px", overflowY: "auto" } }),
              O.jsx("button", { onClick: Vl, disabled: ia, style: { padding: "8px", border: "none", borderRadius: "8px", backgroundColor: "#1976d2", color: "#fff", cursor: ia ? "not-allowed" : "pointer", opacity: ia ? "0.6" : "1" }, children: Il }),
              $l.visible && O.jsx("div", { style: { fontSize: "12px", padding: "6px 8px", borderRadius: "8px", border: "1px solid", background: Pa.bg, color: Pa.fg, borderColor: Pa.bd }, children: $l.text }),
            ],
          }),
        ],
      }),
      document.body
    );
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", kf) : kf();
  function kf() {
    const g = document.createElement("div");
    (g.id = "chat-widget-root"), document.body.appendChild(g), e0.createRoot(g).render(O.jsx(Wd.StrictMode, { children: O.jsx(b0, {}) }));
  }
})();
