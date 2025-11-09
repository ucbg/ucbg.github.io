(function () {
  "use strict";
  function Hf(b) {
    return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
  }
  var oi = { exports: {} },
    Za = {};
  var Nf;
  function Jd() {
    if (Nf) return Za;
    Nf = 1;
    var b = Symbol.for("react.transitional.element"),
      Y = Symbol.for("react.fragment");
    function O(d, L, Z) {
      var W = null;
      if ((Z !== void 0 && (W = "" + Z), L.key !== void 0 && (W = "" + L.key), "key" in L)) {
        Z = {};
        for (var ll in L) ll !== "key" && (Z[ll] = L[ll]);
      } else Z = L;
      return (L = Z.ref), { $$typeof: b, type: d, key: W, ref: L !== void 0 ? L : null, props: Z };
    }
    return (Za.Fragment = Y), (Za.jsx = O), (Za.jsxs = O), Za;
  }
  var jf;
  function wd() {
    return jf || ((jf = 1), (oi.exports = Jd())), oi.exports;
  }
  var U = wd(),
    ri = { exports: {} },
    Q = {};
  var qf;
  function kd() {
    if (qf) return Q;
    qf = 1;
    var b = Symbol.for("react.transitional.element"),
      Y = Symbol.for("react.portal"),
      O = Symbol.for("react.fragment"),
      d = Symbol.for("react.strict_mode"),
      L = Symbol.for("react.profiler"),
      Z = Symbol.for("react.consumer"),
      W = Symbol.for("react.context"),
      ll = Symbol.for("react.forward_ref"),
      D = Symbol.for("react.suspense"),
      E = Symbol.for("react.memo"),
      G = Symbol.for("react.lazy"),
      N = Symbol.for("react.activity"),
      J = Symbol.iterator;
    function k(o) {
      return o === null || typeof o != "object" ? null : ((o = (J && o[J]) || o["@@iterator"]), typeof o == "function" ? o : null);
    }
    var nl = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Yl = Object.assign,
      at = {};
    function Gl(o, z, x) {
      (this.props = o), (this.context = z), (this.refs = at), (this.updater = x || nl);
    }
    (Gl.prototype.isReactComponent = {}),
      (Gl.prototype.setState = function (o, z) {
        if (typeof o != "object" && typeof o != "function" && o != null)
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, z, "setState");
      }),
      (Gl.prototype.forceUpdate = function (o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      });
    function Rt() {}
    Rt.prototype = Gl.prototype;
    function jl(o, z, x) {
      (this.props = o), (this.context = z), (this.refs = at), (this.updater = x || nl);
    }
    var Il = (jl.prototype = new Rt());
    (Il.constructor = jl), Yl(Il, Gl.prototype), (Il.isPureReactComponent = !0);
    var yt = Array.isArray;
    function El() {}
    var F = { H: null, A: null, T: null, S: null },
      Pl = Object.prototype.hasOwnProperty;
    function ut(o, z, x) {
      var _ = x.ref;
      return { $$typeof: b, type: o, key: z, ref: _ !== void 0 ? _ : null, props: x };
    }
    function Qt(o, z) {
      return ut(o.type, z, o.props);
    }
    function Zl(o) {
      return typeof o == "object" && o !== null && o.$$typeof === b;
    }
    function Dl(o) {
      var z = { "=": "=0", ":": "=2" };
      return (
        "$" +
        o.replace(/[=:]/g, function (x) {
          return z[x];
        })
      );
    }
    var nt = /\/+/g;
    function Ht(o, z) {
      return typeof o == "object" && o !== null && o.key != null ? Dl("" + o.key) : z.toString(36);
    }
    function zl(o) {
      switch (o.status) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw o.reason;
        default:
          switch (
            (typeof o.status == "string"
              ? o.then(El, El)
              : ((o.status = "pending"),
                o.then(
                  function (z) {
                    o.status === "pending" && ((o.status = "fulfilled"), (o.value = z));
                  },
                  function (z) {
                    o.status === "pending" && ((o.status = "rejected"), (o.reason = z));
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
    function S(o, z, x, _, X) {
      var $ = typeof o;
      ($ === "undefined" || $ === "boolean") && (o = null);
      var il = !1;
      if (o === null) il = !0;
      else
        switch ($) {
          case "bigint":
          case "string":
          case "number":
            il = !0;
            break;
          case "object":
            switch (o.$$typeof) {
              case b:
              case Y:
                il = !0;
                break;
              case G:
                return (il = o._init), S(il(o._payload), z, x, _, X);
            }
        }
      if (il)
        return (
          (X = X(o)),
          (il = _ === "" ? "." + Ht(o, 0) : _),
          yt(X)
            ? ((x = ""),
              il != null && (x = il.replace(nt, "$&/") + "/"),
              S(X, z, x, "", function (Re) {
                return Re;
              }))
            : X != null &&
              (Zl(X) && (X = Qt(X, x + (X.key == null || (o && o.key === X.key) ? "" : ("" + X.key).replace(nt, "$&/") + "/") + il)), z.push(X)),
          1
        );
      il = 0;
      var Vl = _ === "" ? "." : _ + ":";
      if (yt(o)) for (var Tl = 0; Tl < o.length; Tl++) (_ = o[Tl]), ($ = Vl + Ht(_, Tl)), (il += S(_, z, x, $, X));
      else if (((Tl = k(o)), typeof Tl == "function"))
        for (o = Tl.call(o), Tl = 0; !(_ = o.next()).done; ) (_ = _.value), ($ = Vl + Ht(_, Tl++)), (il += S(_, z, x, $, X));
      else if ($ === "object") {
        if (typeof o.then == "function") return S(zl(o), z, x, _, X);
        throw (
          ((z = String(o)),
          Error(
            "Objects are not valid as a React child (found: " +
              (z === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : z) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      }
      return il;
    }
    function A(o, z, x) {
      if (o == null) return o;
      var _ = [],
        X = 0;
      return (
        S(o, _, "", "", function ($) {
          return z.call(x, $, X++);
        }),
        _
      );
    }
    function R(o) {
      if (o._status === -1) {
        var z = o._result;
        (z = z()),
          z.then(
            function (x) {
              (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = x));
            },
            function (x) {
              (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = x));
            }
          ),
          o._status === -1 && ((o._status = 0), (o._result = z));
      }
      if (o._status === 1) return o._result.default;
      throw o._result;
    }
    var al =
        typeof reportError == "function"
          ? reportError
          : function (o) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var z = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
                  error: o,
                });
                if (!window.dispatchEvent(z)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", o);
                return;
              }
              console.error(o);
            },
      sl = {
        map: A,
        forEach: function (o, z, x) {
          A(
            o,
            function () {
              z.apply(this, arguments);
            },
            x
          );
        },
        count: function (o) {
          var z = 0;
          return (
            A(o, function () {
              z++;
            }),
            z
          );
        },
        toArray: function (o) {
          return (
            A(o, function (z) {
              return z;
            }) || []
          );
        },
        only: function (o) {
          if (!Zl(o)) throw Error("React.Children.only expected to receive a single React element child.");
          return o;
        },
      };
    return (
      (Q.Activity = N),
      (Q.Children = sl),
      (Q.Component = Gl),
      (Q.Fragment = O),
      (Q.Profiler = L),
      (Q.PureComponent = jl),
      (Q.StrictMode = d),
      (Q.Suspense = D),
      (Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
      (Q.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (o) {
          return F.H.useMemoCache(o);
        },
      }),
      (Q.cache = function (o) {
        return function () {
          return o.apply(null, arguments);
        };
      }),
      (Q.cacheSignal = function () {
        return null;
      }),
      (Q.cloneElement = function (o, z, x) {
        if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
        var _ = Yl({}, o.props),
          X = o.key;
        if (z != null)
          for ($ in (z.key !== void 0 && (X = "" + z.key), z))
            !Pl.call(z, $) || $ === "key" || $ === "__self" || $ === "__source" || ($ === "ref" && z.ref === void 0) || (_[$] = z[$]);
        var $ = arguments.length - 2;
        if ($ === 1) _.children = x;
        else if (1 < $) {
          for (var il = Array($), Vl = 0; Vl < $; Vl++) il[Vl] = arguments[Vl + 2];
          _.children = il;
        }
        return ut(o.type, X, _);
      }),
      (Q.createContext = function (o) {
        return (
          (o = { $$typeof: W, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null }),
          (o.Provider = o),
          (o.Consumer = { $$typeof: Z, _context: o }),
          o
        );
      }),
      (Q.createElement = function (o, z, x) {
        var _,
          X = {},
          $ = null;
        if (z != null)
          for (_ in (z.key !== void 0 && ($ = "" + z.key), z)) Pl.call(z, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (X[_] = z[_]);
        var il = arguments.length - 2;
        if (il === 1) X.children = x;
        else if (1 < il) {
          for (var Vl = Array(il), Tl = 0; Tl < il; Tl++) Vl[Tl] = arguments[Tl + 2];
          X.children = Vl;
        }
        if (o && o.defaultProps) for (_ in ((il = o.defaultProps), il)) X[_] === void 0 && (X[_] = il[_]);
        return ut(o, $, X);
      }),
      (Q.createRef = function () {
        return { current: null };
      }),
      (Q.forwardRef = function (o) {
        return { $$typeof: ll, render: o };
      }),
      (Q.isValidElement = Zl),
      (Q.lazy = function (o) {
        return { $$typeof: G, _payload: { _status: -1, _result: o }, _init: R };
      }),
      (Q.memo = function (o, z) {
        return { $$typeof: E, type: o, compare: z === void 0 ? null : z };
      }),
      (Q.startTransition = function (o) {
        var z = F.T,
          x = {};
        F.T = x;
        try {
          var _ = o(),
            X = F.S;
          X !== null && X(x, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(El, al);
        } catch ($) {
          al($);
        } finally {
          z !== null && x.types !== null && (z.types = x.types), (F.T = z);
        }
      }),
      (Q.unstable_useCacheRefresh = function () {
        return F.H.useCacheRefresh();
      }),
      (Q.use = function (o) {
        return F.H.use(o);
      }),
      (Q.useActionState = function (o, z, x) {
        return F.H.useActionState(o, z, x);
      }),
      (Q.useCallback = function (o, z) {
        return F.H.useCallback(o, z);
      }),
      (Q.useContext = function (o) {
        return F.H.useContext(o);
      }),
      (Q.useDebugValue = function () {}),
      (Q.useDeferredValue = function (o, z) {
        return F.H.useDeferredValue(o, z);
      }),
      (Q.useEffect = function (o, z) {
        return F.H.useEffect(o, z);
      }),
      (Q.useEffectEvent = function (o) {
        return F.H.useEffectEvent(o);
      }),
      (Q.useId = function () {
        return F.H.useId();
      }),
      (Q.useImperativeHandle = function (o, z, x) {
        return F.H.useImperativeHandle(o, z, x);
      }),
      (Q.useInsertionEffect = function (o, z) {
        return F.H.useInsertionEffect(o, z);
      }),
      (Q.useLayoutEffect = function (o, z) {
        return F.H.useLayoutEffect(o, z);
      }),
      (Q.useMemo = function (o, z) {
        return F.H.useMemo(o, z);
      }),
      (Q.useOptimistic = function (o, z) {
        return F.H.useOptimistic(o, z);
      }),
      (Q.useReducer = function (o, z, x) {
        return F.H.useReducer(o, z, x);
      }),
      (Q.useRef = function (o) {
        return F.H.useRef(o);
      }),
      (Q.useState = function (o) {
        return F.H.useState(o);
      }),
      (Q.useSyncExternalStore = function (o, z, x) {
        return F.H.useSyncExternalStore(o, z, x);
      }),
      (Q.useTransition = function () {
        return F.H.useTransition();
      }),
      (Q.version = "19.2.0"),
      Q
    );
  }
  var Bf;
  function di() {
    return Bf || ((Bf = 1), (ri.exports = kd())), ri.exports;
  }
  var q = di();
  const Wd = Hf(q);
  var yi = { exports: {} },
    Va = {},
    hi = { exports: {} },
    mi = {};
  var Yf;
  function $d() {
    return (
      Yf ||
        ((Yf = 1),
        (function (b) {
          function Y(S, A) {
            var R = S.length;
            S.push(A);
            l: for (; 0 < R; ) {
              var al = (R - 1) >>> 1,
                sl = S[al];
              if (0 < L(sl, A)) (S[al] = A), (S[R] = sl), (R = al);
              else break l;
            }
          }
          function O(S) {
            return S.length === 0 ? null : S[0];
          }
          function d(S) {
            if (S.length === 0) return null;
            var A = S[0],
              R = S.pop();
            if (R !== A) {
              S[0] = R;
              l: for (var al = 0, sl = S.length, o = sl >>> 1; al < o; ) {
                var z = 2 * (al + 1) - 1,
                  x = S[z],
                  _ = z + 1,
                  X = S[_];
                if (0 > L(x, R)) _ < sl && 0 > L(X, x) ? ((S[al] = X), (S[_] = R), (al = _)) : ((S[al] = x), (S[z] = R), (al = z));
                else if (_ < sl && 0 > L(X, R)) (S[al] = X), (S[_] = R), (al = _);
                else break l;
              }
            }
            return A;
          }
          function L(S, A) {
            var R = S.sortIndex - A.sortIndex;
            return R !== 0 ? R : S.id - A.id;
          }
          if (((b.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
            var Z = performance;
            b.unstable_now = function () {
              return Z.now();
            };
          } else {
            var W = Date,
              ll = W.now();
            b.unstable_now = function () {
              return W.now() - ll;
            };
          }
          var D = [],
            E = [],
            G = 1,
            N = null,
            J = 3,
            k = !1,
            nl = !1,
            Yl = !1,
            at = !1,
            Gl = typeof setTimeout == "function" ? setTimeout : null,
            Rt = typeof clearTimeout == "function" ? clearTimeout : null,
            jl = typeof setImmediate < "u" ? setImmediate : null;
          function Il(S) {
            for (var A = O(E); A !== null; ) {
              if (A.callback === null) d(E);
              else if (A.startTime <= S) d(E), (A.sortIndex = A.expirationTime), Y(D, A);
              else break;
              A = O(E);
            }
          }
          function yt(S) {
            if (((Yl = !1), Il(S), !nl))
              if (O(D) !== null) (nl = !0), El || ((El = !0), Dl());
              else {
                var A = O(E);
                A !== null && zl(yt, A.startTime - S);
              }
          }
          var El = !1,
            F = -1,
            Pl = 5,
            ut = -1;
          function Qt() {
            return at ? !0 : !(b.unstable_now() - ut < Pl);
          }
          function Zl() {
            if (((at = !1), El)) {
              var S = b.unstable_now();
              ut = S;
              var A = !0;
              try {
                l: {
                  (nl = !1), Yl && ((Yl = !1), Rt(F), (F = -1)), (k = !0);
                  var R = J;
                  try {
                    t: {
                      for (Il(S), N = O(D); N !== null && !(N.expirationTime > S && Qt()); ) {
                        var al = N.callback;
                        if (typeof al == "function") {
                          (N.callback = null), (J = N.priorityLevel);
                          var sl = al(N.expirationTime <= S);
                          if (((S = b.unstable_now()), typeof sl == "function")) {
                            (N.callback = sl), Il(S), (A = !0);
                            break t;
                          }
                          N === O(D) && d(D), Il(S);
                        } else d(D);
                        N = O(D);
                      }
                      if (N !== null) A = !0;
                      else {
                        var o = O(E);
                        o !== null && zl(yt, o.startTime - S), (A = !1);
                      }
                    }
                    break l;
                  } finally {
                    (N = null), (J = R), (k = !1);
                  }
                  A = void 0;
                }
              } finally {
                A ? Dl() : (El = !1);
              }
            }
          }
          var Dl;
          if (typeof jl == "function")
            Dl = function () {
              jl(Zl);
            };
          else if (typeof MessageChannel < "u") {
            var nt = new MessageChannel(),
              Ht = nt.port2;
            (nt.port1.onmessage = Zl),
              (Dl = function () {
                Ht.postMessage(null);
              });
          } else
            Dl = function () {
              Gl(Zl, 0);
            };
          function zl(S, A) {
            F = Gl(function () {
              S(b.unstable_now());
            }, A);
          }
          (b.unstable_IdlePriority = 5),
            (b.unstable_ImmediatePriority = 1),
            (b.unstable_LowPriority = 4),
            (b.unstable_NormalPriority = 3),
            (b.unstable_Profiling = null),
            (b.unstable_UserBlockingPriority = 2),
            (b.unstable_cancelCallback = function (S) {
              S.callback = null;
            }),
            (b.unstable_forceFrameRate = function (S) {
              0 > S || 125 < S
                ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
                : (Pl = 0 < S ? Math.floor(1e3 / S) : 5);
            }),
            (b.unstable_getCurrentPriorityLevel = function () {
              return J;
            }),
            (b.unstable_next = function (S) {
              switch (J) {
                case 1:
                case 2:
                case 3:
                  var A = 3;
                  break;
                default:
                  A = J;
              }
              var R = J;
              J = A;
              try {
                return S();
              } finally {
                J = R;
              }
            }),
            (b.unstable_requestPaint = function () {
              at = !0;
            }),
            (b.unstable_runWithPriority = function (S, A) {
              switch (S) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  S = 3;
              }
              var R = J;
              J = S;
              try {
                return A();
              } finally {
                J = R;
              }
            }),
            (b.unstable_scheduleCallback = function (S, A, R) {
              var al = b.unstable_now();
              switch ((typeof R == "object" && R !== null ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? al + R : al)) : (R = al), S)) {
                case 1:
                  var sl = -1;
                  break;
                case 2:
                  sl = 250;
                  break;
                case 5:
                  sl = 1073741823;
                  break;
                case 4:
                  sl = 1e4;
                  break;
                default:
                  sl = 5e3;
              }
              return (
                (sl = R + sl),
                (S = { id: G++, callback: A, priorityLevel: S, startTime: R, expirationTime: sl, sortIndex: -1 }),
                R > al
                  ? ((S.sortIndex = R), Y(E, S), O(D) === null && S === O(E) && (Yl ? (Rt(F), (F = -1)) : (Yl = !0), zl(yt, R - al)))
                  : ((S.sortIndex = sl), Y(D, S), nl || k || ((nl = !0), El || ((El = !0), Dl()))),
                S
              );
            }),
            (b.unstable_shouldYield = Qt),
            (b.unstable_wrapCallback = function (S) {
              var A = J;
              return function () {
                var R = J;
                J = A;
                try {
                  return S.apply(this, arguments);
                } finally {
                  J = R;
                }
              };
            });
        })(mi)),
      mi
    );
  }
  var Gf;
  function Fd() {
    return Gf || ((Gf = 1), (hi.exports = $d())), hi.exports;
  }
  var vi = { exports: {} },
    Fl = {};
  var Xf;
  function Id() {
    if (Xf) return Fl;
    Xf = 1;
    var b = di();
    function Y(D) {
      var E = "https://react.dev/errors/" + D;
      if (1 < arguments.length) {
        E += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var G = 2; G < arguments.length; G++) E += "&args[]=" + encodeURIComponent(arguments[G]);
      }
      return (
        "Minified React error #" +
        D +
        "; visit " +
        E +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function O() {}
    var d = {
        d: {
          f: O,
          r: function () {
            throw Error(Y(522));
          },
          D: O,
          C: O,
          L: O,
          m: O,
          X: O,
          S: O,
          M: O,
        },
        p: 0,
        findDOMNode: null,
      },
      L = Symbol.for("react.portal");
    function Z(D, E, G) {
      var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: L, key: N == null ? null : "" + N, children: D, containerInfo: E, implementation: G };
    }
    var W = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function ll(D, E) {
      if (D === "font") return "";
      if (typeof E == "string") return E === "use-credentials" ? E : "";
    }
    return (
      (Fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
      (Fl.createPortal = function (D, E) {
        var G = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)) throw Error(Y(299));
        return Z(D, E, null, G);
      }),
      (Fl.flushSync = function (D) {
        var E = W.T,
          G = d.p;
        try {
          if (((W.T = null), (d.p = 2), D)) return D();
        } finally {
          (W.T = E), (d.p = G), d.d.f();
        }
      }),
      (Fl.preconnect = function (D, E) {
        typeof D == "string" &&
          (E ? ((E = E.crossOrigin), (E = typeof E == "string" ? (E === "use-credentials" ? E : "") : void 0)) : (E = null), d.d.C(D, E));
      }),
      (Fl.prefetchDNS = function (D) {
        typeof D == "string" && d.d.D(D);
      }),
      (Fl.preinit = function (D, E) {
        if (typeof D == "string" && E && typeof E.as == "string") {
          var G = E.as,
            N = ll(G, E.crossOrigin),
            J = typeof E.integrity == "string" ? E.integrity : void 0,
            k = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
          G === "style"
            ? d.d.S(D, typeof E.precedence == "string" ? E.precedence : void 0, { crossOrigin: N, integrity: J, fetchPriority: k })
            : G === "script" && d.d.X(D, { crossOrigin: N, integrity: J, fetchPriority: k, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
        }
      }),
      (Fl.preinitModule = function (D, E) {
        if (typeof D == "string")
          if (typeof E == "object" && E !== null) {
            if (E.as == null || E.as === "script") {
              var G = ll(E.as, E.crossOrigin);
              d.d.M(D, {
                crossOrigin: G,
                integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0,
              });
            }
          } else E == null && d.d.M(D);
      }),
      (Fl.preload = function (D, E) {
        if (typeof D == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
          var G = E.as,
            N = ll(G, E.crossOrigin);
          d.d.L(D, G, {
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            type: typeof E.type == "string" ? E.type : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
            referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
            imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
            imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
            media: typeof E.media == "string" ? E.media : void 0,
          });
        }
      }),
      (Fl.preloadModule = function (D, E) {
        if (typeof D == "string")
          if (E) {
            var G = ll(E.as, E.crossOrigin);
            d.d.m(D, {
              as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
              crossOrigin: G,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            });
          } else d.d.m(D);
      }),
      (Fl.requestFormReset = function (D) {
        d.d.r(D);
      }),
      (Fl.unstable_batchedUpdates = function (D, E) {
        return D(E);
      }),
      (Fl.useFormState = function (D, E, G) {
        return W.H.useFormState(D, E, G);
      }),
      (Fl.useFormStatus = function () {
        return W.H.useHostTransitionStatus();
      }),
      (Fl.version = "19.2.0"),
      Fl
    );
  }
  var Qf;
  function Lf() {
    if (Qf) return vi.exports;
    Qf = 1;
    function b() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
        } catch (Y) {
          console.error(Y);
        }
    }
    return b(), (vi.exports = Id()), vi.exports;
  }
  var Zf;
  function Pd() {
    if (Zf) return Va;
    Zf = 1;
    var b = Fd(),
      Y = di(),
      O = Lf();
    function d(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return (
        "Minified React error #" +
        l +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function L(l) {
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
    function W(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function ll(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function D(l) {
      if (Z(l) !== l) throw Error(d(188));
    }
    function E(l) {
      var t = l.alternate;
      if (!t) {
        if (((t = Z(l)), t === null)) throw Error(d(188));
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
            if (n === e) return D(u), l;
            if (n === a) return D(u), t;
            n = n.sibling;
          }
          throw Error(d(188));
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
            if (!i) throw Error(d(189));
          }
        }
        if (e.alternate !== a) throw Error(d(190));
      }
      if (e.tag !== 3) throw Error(d(188));
      return e.stateNode.current === e ? l : t;
    }
    function G(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (((t = G(l)), t !== null)) return t;
        l = l.sibling;
      }
      return null;
    }
    var N = Object.assign,
      J = Symbol.for("react.element"),
      k = Symbol.for("react.transitional.element"),
      nl = Symbol.for("react.portal"),
      Yl = Symbol.for("react.fragment"),
      at = Symbol.for("react.strict_mode"),
      Gl = Symbol.for("react.profiler"),
      Rt = Symbol.for("react.consumer"),
      jl = Symbol.for("react.context"),
      Il = Symbol.for("react.forward_ref"),
      yt = Symbol.for("react.suspense"),
      El = Symbol.for("react.suspense_list"),
      F = Symbol.for("react.memo"),
      Pl = Symbol.for("react.lazy"),
      ut = Symbol.for("react.activity"),
      Qt = Symbol.for("react.memo_cache_sentinel"),
      Zl = Symbol.iterator;
    function Dl(l) {
      return l === null || typeof l != "object" ? null : ((l = (Zl && l[Zl]) || l["@@iterator"]), typeof l == "function" ? l : null);
    }
    var nt = Symbol.for("react.client.reference");
    function Ht(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === nt ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case Yl:
          return "Fragment";
        case Gl:
          return "Profiler";
        case at:
          return "StrictMode";
        case yt:
          return "Suspense";
        case El:
          return "SuspenseList";
        case ut:
          return "Activity";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case nl:
            return "Portal";
          case jl:
            return l.displayName || "Context";
          case Rt:
            return (l._context.displayName || "Context") + ".Consumer";
          case Il:
            var t = l.render;
            return (l = l.displayName), l || ((l = t.displayName || t.name || ""), (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")), l;
          case F:
            return (t = l.displayName || null), t !== null ? t : Ht(l.type) || "Memo";
          case Pl:
            (t = l._payload), (l = l._init);
            try {
              return Ht(l(t));
            } catch {}
        }
      return null;
    }
    var zl = Array.isArray,
      S = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      R = { pending: !1, data: null, method: null, action: null },
      al = [],
      sl = -1;
    function o(l) {
      return { current: l };
    }
    function z(l) {
      0 > sl || ((l.current = al[sl]), (al[sl] = null), sl--);
    }
    function x(l, t) {
      sl++, (al[sl] = l.current), (l.current = t);
    }
    var _ = o(null),
      X = o(null),
      $ = o(null),
      il = o(null);
    function Vl(l, t) {
      switch ((x($, t), x(X, l), x(_, null), t.nodeType)) {
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
      z(_), x(_, l);
    }
    function Tl() {
      z(_), z(X), z($);
    }
    function Re(l) {
      l.memoizedState !== null && x(il, l);
      var t = _.current,
        e = vd(t, l.type);
      t !== e && (x(X, l), x(_, e));
    }
    function la(l) {
      X.current === l && (z(_), z(X)), il.current === l && (z(il), (Bu._currentValue = R));
    }
    var wa, ka;
    function lt(l) {
      if (wa === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (wa = (t && t[1]) || ""),
            (ka =
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
        wa +
        l +
        ka
      );
    }
    var ta = !1;
    function zt(l, t) {
      if (!l || ta) return "";
      ta = !0;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var T = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(T.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(T, []);
                  } catch (v) {
                    var m = v;
                  }
                  Reflect.construct(l, [], T);
                } else {
                  try {
                    T.call();
                  } catch (v) {
                    m = v;
                  }
                  l.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  m = v;
                }
                (T = l()) && typeof T.catch == "function" && T.catch(function () {});
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
                    var g =
                      `
` + f[a].replace(" at new ", " at ");
                    return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                  }
                while (1 <= a && 0 <= u);
              break;
            }
        }
      } finally {
        (ta = !1), (Error.prepareStackTrace = e);
      }
      return (e = l ? l.displayName || l.name : "") ? lt(e) : "";
    }
    function Vu(l, t) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return lt(l.type);
        case 16:
          return lt("Lazy");
        case 13:
          return l.child !== t && t !== null ? lt("Suspense Fallback") : lt("Suspense");
        case 19:
          return lt("SuspenseList");
        case 0:
        case 15:
          return zt(l.type, !1);
        case 11:
          return zt(l.type.render, !1);
        case 1:
          return zt(l.type, !0);
        case 31:
          return lt("Activity");
        default:
          return "";
      }
    }
    function Ku(l) {
      try {
        var t = "",
          e = null;
        do (t += Vu(l, e)), (e = l), (l = l.return);
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
    var ea = Object.prototype.hasOwnProperty,
      Wa = b.unstable_scheduleCallback,
      He = b.unstable_cancelCallback,
      gi = b.unstable_shouldYield,
      Si = b.unstable_requestPaint,
      tt = b.unstable_now,
      Ju = b.unstable_getCurrentPriorityLevel,
      aa = b.unstable_ImmediatePriority,
      ua = b.unstable_UserBlockingPriority,
      M = b.unstable_NormalPriority,
      V = b.unstable_LowPriority,
      Kl = b.unstable_IdlePriority,
      Ul = b.log,
      Ne = b.unstable_setDisableYieldValue,
      Xl = null,
      _l = null;
    function ql(l) {
      if ((typeof Ul == "function" && Ne(l), _l && typeof _l.setStrictMode == "function"))
        try {
          _l.setStrictMode(Xl, l);
        } catch {}
    }
    var rl = Math.clz32 ? Math.clz32 : bi,
      Lt = Math.log,
      ce = Math.LN2;
    function bi(l) {
      return (l >>>= 0), l === 0 ? 32 : (31 - ((Lt(l) / ce) | 0)) | 0;
    }
    var wu = 256,
      ku = 262144,
      Wu = 4194304;
    function je(l) {
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
    function $u(l, t, e) {
      var a = l.pendingLanes;
      if (a === 0) return 0;
      var u = 0,
        n = l.suspendedLanes,
        i = l.pingedLanes;
      l = l.warmLanes;
      var c = a & 134217727;
      return (
        c !== 0
          ? ((a = c & ~n), a !== 0 ? (u = je(a)) : ((i &= c), i !== 0 ? (u = je(i)) : e || ((e = c & ~l), e !== 0 && (u = je(e)))))
          : ((c = a & ~n), c !== 0 ? (u = je(c)) : i !== 0 ? (u = je(i)) : e || ((e = a & ~l), e !== 0 && (u = je(e)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && ((n = u & -u), (e = t & -t), n >= e || (n === 32 && (e & 4194048) !== 0)) ? t : u
      );
    }
    function $a(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function v0(l, t) {
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
      var l = Wu;
      return (Wu <<= 1), (Wu & 62914560) === 0 && (Wu = 4194304), l;
    }
    function pi(l) {
      for (var t = [], e = 0; 31 > e; e++) t.push(l);
      return t;
    }
    function Fa(l, t) {
      (l.pendingLanes |= t), t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
    }
    function g0(l, t, e, a, u, n) {
      var i = l.pendingLanes;
      (l.pendingLanes = e),
        (l.suspendedLanes = 0),
        (l.pingedLanes = 0),
        (l.warmLanes = 0),
        (l.expiredLanes &= e),
        (l.entangledLanes &= e),
        (l.errorRecoveryDisabledLanes &= e),
        (l.shellSuspendCounter = 0);
      var c = l.entanglements,
        f = l.expirationTimes,
        h = l.hiddenUpdates;
      for (e = i & ~e; 0 < e; ) {
        var g = 31 - rl(e),
          T = 1 << g;
        (c[g] = 0), (f[g] = -1);
        var m = h[g];
        if (m !== null)
          for (h[g] = null, g = 0; g < m.length; g++) {
            var v = m[g];
            v !== null && (v.lane &= -536870913);
          }
        e &= ~T;
      }
      a !== 0 && $f(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
    }
    function $f(l, t, e) {
      (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
      var a = 31 - rl(t);
      (l.entangledLanes |= t), (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
    }
    function Ff(l, t) {
      var e = (l.entangledLanes |= t);
      for (l = l.entanglements; e; ) {
        var a = 31 - rl(e),
          u = 1 << a;
        (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
      }
    }
    function If(l, t) {
      var e = t & -t;
      return (e = (e & 42) !== 0 ? 1 : zi(e)), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
    }
    function zi(l) {
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
    function Ti(l) {
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
    var fe = Math.random().toString(36).slice(2),
      Jl = "__reactFiber$" + fe,
      it = "__reactProps$" + fe,
      na = "__reactContainer$" + fe,
      Ei = "__reactEvents$" + fe,
      S0 = "__reactListeners$" + fe,
      b0 = "__reactHandles$" + fe,
      ts = "__reactResources$" + fe,
      Ia = "__reactMarker$" + fe;
    function Ai(l) {
      delete l[Jl], delete l[it], delete l[Ei], delete l[S0], delete l[b0];
    }
    function ia(l) {
      var t = l[Jl];
      if (t) return t;
      for (var e = l.parentNode; e; ) {
        if ((t = e[na] || e[Jl])) {
          if (((e = t.alternate), t.child !== null || (e !== null && e.child !== null)))
            for (l = Ed(l); l !== null; ) {
              if ((e = l[Jl])) return e;
              l = Ed(l);
            }
          return t;
        }
        (l = e), (e = l.parentNode);
      }
      return null;
    }
    function ca(l) {
      if ((l = l[Jl] || l[na])) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function Pa(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(d(33));
    }
    function fa(l) {
      var t = l[ts];
      return t || (t = l[ts] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
    }
    function Ql(l) {
      l[Ia] = !0;
    }
    var es = new Set(),
      as = {};
    function qe(l, t) {
      sa(l, t), sa(l + "Capture", t);
    }
    function sa(l, t) {
      for (as[l] = t, l = 0; l < t.length; l++) es.add(t[l]);
    }
    var p0 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
      ),
      us = {},
      ns = {};
    function z0(l) {
      return ea.call(ns, l) ? !0 : ea.call(us, l) ? !1 : p0.test(l) ? (ns[l] = !0) : ((us[l] = !0), !1);
    }
    function Fu(l, t, e) {
      if (z0(t))
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
    function Zt(l, t, e, a) {
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
    function Tt(l) {
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
    function T0(l, t, e) {
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
    function xi(l) {
      if (!l._valueTracker) {
        var t = is(l) ? "checked" : "value";
        l._valueTracker = T0(l, t, "" + l[t]);
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
    var E0 = /[\n"\\]/g;
    function Et(l) {
      return l.replace(E0, function (t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function _i(l, t, e, a, u, n, i, c) {
      (l.name = ""),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? (l.type = i) : l.removeAttribute("type"),
        t != null
          ? i === "number"
            ? ((t === 0 && l.value === "") || l.value != t) && (l.value = "" + Tt(t))
            : l.value !== "" + Tt(t) && (l.value = "" + Tt(t))
          : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
        t != null ? Oi(l, i, Tt(t)) : e != null ? Oi(l, i, Tt(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? (l.name = "" + Tt(c)) : l.removeAttribute("name");
    }
    function fs(l, t, e, a, u, n, i, c) {
      if ((n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null)) {
        if (!((n !== "submit" && n !== "reset") || t != null)) {
          xi(l);
          return;
        }
        (e = e != null ? "" + Tt(e) : ""), (t = t != null ? "" + Tt(t) : e), c || t === l.value || (l.value = t), (l.defaultValue = t);
      }
      (a = a ?? u),
        (a = typeof a != "function" && typeof a != "symbol" && !!a),
        (l.checked = c ? l.checked : !!a),
        (l.defaultChecked = !!a),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i),
        xi(l);
    }
    function Oi(l, t, e) {
      (t === "number" && Pu(l.ownerDocument) === l) || l.defaultValue === "" + e || (l.defaultValue = "" + e);
    }
    function oa(l, t, e, a) {
      if (((l = l.options), t)) {
        t = {};
        for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
        for (e = 0; e < l.length; e++)
          (u = t.hasOwnProperty("$" + l[e].value)), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
      } else {
        for (e = "" + Tt(e), t = null, u = 0; u < l.length; u++) {
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
      if (t != null && ((t = "" + Tt(t)), t !== l.value && (l.value = t), e == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = e != null ? "" + Tt(e) : "";
    }
    function os(l, t, e, a) {
      if (t == null) {
        if (a != null) {
          if (e != null) throw Error(d(92));
          if (zl(a)) {
            if (1 < a.length) throw Error(d(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), (t = e);
      }
      (e = Tt(t)), (l.defaultValue = e), (a = l.textContent), a === e && a !== "" && a !== null && (l.value = a), xi(l);
    }
    function ra(l, t) {
      if (t) {
        var e = l.firstChild;
        if (e && e === l.lastChild && e.nodeType === 3) {
          e.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var A0 = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function rs(l, t, e) {
      var a = t.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === ""
        ? a
          ? l.setProperty(t, "")
          : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
        : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || A0.has(t)
        ? t === "float"
          ? (l.cssFloat = e)
          : (l[t] = ("" + e).trim())
        : (l[t] = e + "px");
    }
    function ds(l, t, e) {
      if (t != null && typeof t != "object") throw Error(d(62));
      if (((l = l.style), e != null)) {
        for (var a in e)
          !e.hasOwnProperty(a) ||
            (t != null && t.hasOwnProperty(a)) ||
            (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? (l.cssFloat = "") : (l[a] = ""));
        for (var u in t) (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && rs(l, u, a);
      } else for (var n in t) t.hasOwnProperty(n) && rs(l, n, t[n]);
    }
    function Mi(l) {
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
    var x0 = new Map([
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
      _0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ln(l) {
      return _0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function Vt() {}
    var Di = null;
    function Ui(l) {
      return (
        (l = l.target || l.srcElement || window), l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
      );
    }
    var da = null,
      ya = null;
    function ys(l) {
      var t = ca(l);
      if (t && (l = t.stateNode)) {
        var e = l[it] || null;
        l: switch (((l = t.stateNode), t.type)) {
          case "input":
            if (
              (_i(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
              (t = e.name),
              e.type === "radio" && t != null)
            ) {
              for (e = l; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                var a = e[t];
                if (a !== l && a.form === l.form) {
                  var u = a[it] || null;
                  if (!u) throw Error(d(90));
                  _i(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (t = 0; t < e.length; t++) (a = e[t]), a.form === l.form && cs(a);
            }
            break l;
          case "textarea":
            ss(l, e.value, e.defaultValue);
            break l;
          case "select":
            (t = e.value), t != null && oa(l, !!e.multiple, t, !1);
        }
      }
    }
    var Ci = !1;
    function hs(l, t, e) {
      if (Ci) return l(t, e);
      Ci = !0;
      try {
        var a = l(t);
        return a;
      } finally {
        if (((Ci = !1), (da !== null || ya !== null) && (Ln(), da && ((t = da), (l = ya), (ya = da = null), ys(t), l))))
          for (t = 0; t < l.length; t++) ys(l[t]);
      }
    }
    function lu(l, t) {
      var e = l.stateNode;
      if (e === null) return null;
      var a = e[it] || null;
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
      if (e && typeof e != "function") throw Error(d(231, t, typeof e));
      return e;
    }
    var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
      Ri = !1;
    if (Kt)
      try {
        var tu = {};
        Object.defineProperty(tu, "passive", {
          get: function () {
            Ri = !0;
          },
        }),
          window.addEventListener("test", tu, tu),
          window.removeEventListener("test", tu, tu);
      } catch {
        Ri = !1;
      }
    var se = null,
      Hi = null,
      tn = null;
    function ms() {
      if (tn) return tn;
      var l,
        t = Hi,
        e = t.length,
        a,
        u = "value" in se ? se.value : se.textContent,
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
    function ct(l) {
      function t(e, a, u, n, i) {
        (this._reactName = e), (this._targetInst = u), (this.type = a), (this.nativeEvent = n), (this.target = i), (this.currentTarget = null);
        for (var c in l) l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
        return (
          (this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? an : vs),
          (this.isPropagationStopped = vs),
          this
        );
      }
      return (
        N(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), (this.isDefaultPrevented = an));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
              (this.isPropagationStopped = an));
          },
          persist: function () {},
          isPersistent: an,
        }),
        t
      );
    }
    var Be = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (l) {
          return l.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      un = ct(Be),
      eu = N({}, Be, { view: 0, detail: 0 }),
      O0 = ct(eu),
      Ni,
      ji,
      au,
      nn = N({}, eu, {
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
        getModifierState: Bi,
        button: 0,
        buttons: 0,
        relatedTarget: function (l) {
          return l.relatedTarget === void 0 ? (l.fromElement === l.srcElement ? l.toElement : l.fromElement) : l.relatedTarget;
        },
        movementX: function (l) {
          return "movementX" in l
            ? l.movementX
            : (l !== au && (au && l.type === "mousemove" ? ((Ni = l.screenX - au.screenX), (ji = l.screenY - au.screenY)) : (ji = Ni = 0), (au = l)),
              Ni);
        },
        movementY: function (l) {
          return "movementY" in l ? l.movementY : ji;
        },
      }),
      gs = ct(nn),
      M0 = N({}, nn, { dataTransfer: 0 }),
      D0 = ct(M0),
      U0 = N({}, eu, { relatedTarget: 0 }),
      qi = ct(U0),
      C0 = N({}, Be, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      R0 = ct(C0),
      H0 = N({}, Be, {
        clipboardData: function (l) {
          return "clipboardData" in l ? l.clipboardData : window.clipboardData;
        },
      }),
      N0 = ct(H0),
      j0 = N({}, Be, { data: 0 }),
      Ss = ct(j0),
      q0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      B0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Y0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function G0(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = Y0[l]) ? !!t[l] : !1;
    }
    function Bi() {
      return G0;
    }
    var X0 = N({}, eu, {
        key: function (l) {
          if (l.key) {
            var t = q0[l.key] || l.key;
            if (t !== "Unidentified") return t;
          }
          return l.type === "keypress"
            ? ((l = en(l)), l === 13 ? "Enter" : String.fromCharCode(l))
            : l.type === "keydown" || l.type === "keyup"
            ? B0[l.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bi,
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
      Q0 = ct(X0),
      L0 = N({}, nn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      bs = ct(L0),
      Z0 = N({}, eu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bi }),
      V0 = ct(Z0),
      K0 = N({}, Be, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      J0 = ct(K0),
      w0 = N({}, nn, {
        deltaX: function (l) {
          return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
        },
        deltaY: function (l) {
          return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      k0 = ct(w0),
      W0 = N({}, Be, { newState: 0, oldState: 0 }),
      $0 = ct(W0),
      F0 = [9, 13, 27, 32],
      Yi = Kt && "CompositionEvent" in window,
      uu = null;
    Kt && "documentMode" in document && (uu = document.documentMode);
    var I0 = Kt && "TextEvent" in window && !uu,
      ps = Kt && (!Yi || (uu && 8 < uu && 11 >= uu)),
      zs = " ",
      Ts = !1;
    function Es(l, t) {
      switch (l) {
        case "keyup":
          return F0.indexOf(t.keyCode) !== -1;
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
    var ha = !1;
    function P0(l, t) {
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
    function ly(l, t) {
      if (ha) return l === "compositionend" || (!Yi && Es(l, t)) ? ((l = ms()), (tn = Hi = se = null), (ha = !1), l) : null;
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
          return ps && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var ty = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function xs(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!ty[l.type] : t === "textarea";
    }
    function _s(l, t, e, a) {
      da ? (ya ? ya.push(a) : (ya = [a])) : (da = a),
        (t = Wn(t, "onChange")),
        0 < t.length && ((e = new un("onChange", "change", null, e, a)), l.push({ event: e, listeners: t }));
    }
    var nu = null,
      iu = null;
    function ey(l) {
      sd(l, 0);
    }
    function cn(l) {
      var t = Pa(l);
      if (cs(t)) return l;
    }
    function Os(l, t) {
      if (l === "change") return t;
    }
    var Ms = !1;
    if (Kt) {
      var Gi;
      if (Kt) {
        var Xi = "oninput" in document;
        if (!Xi) {
          var Ds = document.createElement("div");
          Ds.setAttribute("oninput", "return;"), (Xi = typeof Ds.oninput == "function");
        }
        Gi = Xi;
      } else Gi = !1;
      Ms = Gi && (!document.documentMode || 9 < document.documentMode);
    }
    function Us() {
      nu && (nu.detachEvent("onpropertychange", Cs), (iu = nu = null));
    }
    function Cs(l) {
      if (l.propertyName === "value" && cn(iu)) {
        var t = [];
        _s(t, iu, l, Ui(l)), hs(ey, t);
      }
    }
    function ay(l, t, e) {
      l === "focusin" ? (Us(), (nu = t), (iu = e), nu.attachEvent("onpropertychange", Cs)) : l === "focusout" && Us();
    }
    function uy(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return cn(iu);
    }
    function ny(l, t) {
      if (l === "click") return cn(t);
    }
    function iy(l, t) {
      if (l === "input" || l === "change") return cn(t);
    }
    function cy(l, t) {
      return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
    }
    var ht = typeof Object.is == "function" ? Object.is : cy;
    function cu(l, t) {
      if (ht(l, t)) return !0;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
      var e = Object.keys(l),
        a = Object.keys(t);
      if (e.length !== a.length) return !1;
      for (a = 0; a < e.length; a++) {
        var u = e[a];
        if (!ea.call(t, u) || !ht(l[u], t[u])) return !1;
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
      return l && t
        ? l === t
          ? !0
          : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? Ns(l, t.parentNode)
          : "contains" in l
          ? l.contains(t)
          : l.compareDocumentPosition
          ? !!(l.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function js(l) {
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
    function Qi(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password")) ||
          t === "textarea" ||
          l.contentEditable === "true")
      );
    }
    var fy = Kt && "documentMode" in document && 11 >= document.documentMode,
      ma = null,
      Li = null,
      fu = null,
      Zi = !1;
    function qs(l, t, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Zi ||
        ma == null ||
        ma !== Pu(a) ||
        ((a = ma),
        "selectionStart" in a && Qi(a)
          ? (a = { start: a.selectionStart, end: a.selectionEnd })
          : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
            (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
        (fu && cu(fu, a)) ||
          ((fu = a),
          (a = Wn(Li, "onSelect")),
          0 < a.length && ((t = new un("onSelect", "select", null, t, e)), l.push({ event: t, listeners: a }), (t.target = ma))));
    }
    function Ye(l, t) {
      var e = {};
      return (e[l.toLowerCase()] = t.toLowerCase()), (e["Webkit" + l] = "webkit" + t), (e["Moz" + l] = "moz" + t), e;
    }
    var va = {
        animationend: Ye("Animation", "AnimationEnd"),
        animationiteration: Ye("Animation", "AnimationIteration"),
        animationstart: Ye("Animation", "AnimationStart"),
        transitionrun: Ye("Transition", "TransitionRun"),
        transitionstart: Ye("Transition", "TransitionStart"),
        transitioncancel: Ye("Transition", "TransitionCancel"),
        transitionend: Ye("Transition", "TransitionEnd"),
      },
      Vi = {},
      Bs = {};
    Kt &&
      ((Bs = document.createElement("div").style),
      "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation),
      "TransitionEvent" in window || delete va.transitionend.transition);
    function Ge(l) {
      if (Vi[l]) return Vi[l];
      if (!va[l]) return l;
      var t = va[l],
        e;
      for (e in t) if (t.hasOwnProperty(e) && e in Bs) return (Vi[l] = t[e]);
      return l;
    }
    var Ys = Ge("animationend"),
      Gs = Ge("animationiteration"),
      Xs = Ge("animationstart"),
      sy = Ge("transitionrun"),
      oy = Ge("transitionstart"),
      ry = Ge("transitioncancel"),
      Qs = Ge("transitionend"),
      Ls = new Map(),
      Ki =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    Ki.push("scrollEnd");
    function Nt(l, t) {
      Ls.set(l, t), qe(t, [l]);
    }
    var fn =
        typeof reportError == "function"
          ? reportError
          : function (l) {
              if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                  error: l,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", l);
                return;
              }
              console.error(l);
            },
      At = [],
      ga = 0,
      Ji = 0;
    function sn() {
      for (var l = ga, t = (Ji = ga = 0); t < l; ) {
        var e = At[t];
        At[t++] = null;
        var a = At[t];
        At[t++] = null;
        var u = At[t];
        At[t++] = null;
        var n = At[t];
        if (((At[t++] = null), a !== null && u !== null)) {
          var i = a.pending;
          i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u);
        }
        n !== 0 && Zs(e, u, n);
      }
    }
    function on(l, t, e, a) {
      (At[ga++] = l), (At[ga++] = t), (At[ga++] = e), (At[ga++] = a), (Ji |= a), (l.lanes |= a), (l = l.alternate), l !== null && (l.lanes |= a);
    }
    function wi(l, t, e, a) {
      return on(l, t, e, a), rn(l);
    }
    function Xe(l, t) {
      return on(l, null, null, t), rn(l);
    }
    function Zs(l, t, e) {
      l.lanes |= e;
      var a = l.alternate;
      a !== null && (a.lanes |= e);
      for (var u = !1, n = l.return; n !== null; )
        (n.childLanes |= e),
          (a = n.alternate),
          a !== null && (a.childLanes |= e),
          n.tag === 22 && ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
          (l = n),
          (n = n.return);
      return l.tag === 3
        ? ((n = l.stateNode),
          u && t !== null && ((u = 31 - rl(e)), (l = n.hiddenUpdates), (a = l[u]), a === null ? (l[u] = [t]) : a.push(t), (t.lane = e | 536870912)),
          n)
        : null;
    }
    function rn(l) {
      if (50 < Uu) throw ((Uu = 0), (ef = null), Error(d(185)));
      for (var t = l.return; t !== null; ) (l = t), (t = l.return);
      return l.tag === 3 ? l.stateNode : null;
    }
    var Sa = {};
    function dy(l, t, e, a) {
      (this.tag = l),
        (this.key = e),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function mt(l, t, e, a) {
      return new dy(l, t, e, a);
    }
    function ki(l) {
      return (l = l.prototype), !(!l || !l.isReactComponent);
    }
    function Jt(l, t) {
      var e = l.alternate;
      return (
        e === null
          ? ((e = mt(l.tag, t, l.key, l.mode)),
            (e.elementType = l.elementType),
            (e.type = l.type),
            (e.stateNode = l.stateNode),
            (e.alternate = l),
            (l.alternate = e))
          : ((e.pendingProps = t), (e.type = l.type), (e.flags = 0), (e.subtreeFlags = 0), (e.deletions = null)),
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
          ? ((l.childLanes = 0),
            (l.lanes = t),
            (l.child = null),
            (l.subtreeFlags = 0),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.updateQueue = null),
            (l.dependencies = null),
            (l.stateNode = null))
          : ((l.childLanes = e.childLanes),
            (l.lanes = e.lanes),
            (l.child = e.child),
            (l.subtreeFlags = 0),
            (l.deletions = null),
            (l.memoizedProps = e.memoizedProps),
            (l.memoizedState = e.memoizedState),
            (l.updateQueue = e.updateQueue),
            (l.type = e.type),
            (t = e.dependencies),
            (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        l
      );
    }
    function dn(l, t, e, a, u, n) {
      var i = 0;
      if (((a = l), typeof l == "function")) ki(l) && (i = 1);
      else if (typeof l == "string") i = gh(l, e, _.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else
        l: switch (l) {
          case ut:
            return (l = mt(31, e, t, u)), (l.elementType = ut), (l.lanes = n), l;
          case Yl:
            return Qe(e.children, u, n, t);
          case at:
            (i = 8), (u |= 24);
            break;
          case Gl:
            return (l = mt(12, e, t, u | 2)), (l.elementType = Gl), (l.lanes = n), l;
          case yt:
            return (l = mt(13, e, t, u)), (l.elementType = yt), (l.lanes = n), l;
          case El:
            return (l = mt(19, e, t, u)), (l.elementType = El), (l.lanes = n), l;
          default:
            if (typeof l == "object" && l !== null)
              switch (l.$$typeof) {
                case jl:
                  i = 10;
                  break l;
                case Rt:
                  i = 9;
                  break l;
                case Il:
                  i = 11;
                  break l;
                case F:
                  i = 14;
                  break l;
                case Pl:
                  (i = 16), (a = null);
                  break l;
              }
            (i = 29), (e = Error(d(130, l === null ? "null" : typeof l, ""))), (a = null);
        }
      return (t = mt(i, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t;
    }
    function Qe(l, t, e, a) {
      return (l = mt(7, l, a, t)), (l.lanes = e), l;
    }
    function Wi(l, t, e) {
      return (l = mt(6, l, null, t)), (l.lanes = e), l;
    }
    function Ks(l) {
      var t = mt(18, null, null, 0);
      return (t.stateNode = l), t;
    }
    function $i(l, t, e) {
      return (
        (t = mt(4, l.children !== null ? l.children : [], l.key, t)),
        (t.lanes = e),
        (t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }),
        t
      );
    }
    var Js = new WeakMap();
    function xt(l, t) {
      if (typeof l == "object" && l !== null) {
        var e = Js.get(l);
        return e !== void 0 ? e : ((t = { value: l, source: t, stack: Ku(t) }), Js.set(l, t), t);
      }
      return { value: l, source: t, stack: Ku(t) };
    }
    var ba = [],
      pa = 0,
      yn = null,
      su = 0,
      _t = [],
      Ot = 0,
      oe = null,
      Bt = 1,
      Yt = "";
    function wt(l, t) {
      (ba[pa++] = su), (ba[pa++] = yn), (yn = l), (su = t);
    }
    function ws(l, t, e) {
      (_t[Ot++] = Bt), (_t[Ot++] = Yt), (_t[Ot++] = oe), (oe = l);
      var a = Bt;
      l = Yt;
      var u = 32 - rl(a) - 1;
      (a &= ~(1 << u)), (e += 1);
      var n = 32 - rl(t) + u;
      if (30 < n) {
        var i = u - (u % 5);
        (n = (a & ((1 << i) - 1)).toString(32)), (a >>= i), (u -= i), (Bt = (1 << (32 - rl(t) + u)) | (e << u) | a), (Yt = n + l);
      } else (Bt = (1 << n) | (e << u) | a), (Yt = l);
    }
    function Fi(l) {
      l.return !== null && (wt(l, 1), ws(l, 1, 0));
    }
    function Ii(l) {
      for (; l === yn; ) (yn = ba[--pa]), (ba[pa] = null), (su = ba[--pa]), (ba[pa] = null);
      for (; l === oe; ) (oe = _t[--Ot]), (_t[Ot] = null), (Yt = _t[--Ot]), (_t[Ot] = null), (Bt = _t[--Ot]), (_t[Ot] = null);
    }
    function ks(l, t) {
      (_t[Ot++] = Bt), (_t[Ot++] = Yt), (_t[Ot++] = oe), (Bt = t.id), (Yt = t.overflow), (oe = l);
    }
    var wl = null,
      Sl = null,
      ul = !1,
      re = null,
      Mt = !1,
      Pi = Error(d(519));
    function de(l) {
      var t = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw (ou(xt(t, l)), Pi);
    }
    function Ws(l) {
      var t = l.stateNode,
        e = l.type,
        a = l.memoizedProps;
      switch (((t[Jl] = l), (t[it] = a), e)) {
        case "dialog":
          P("cancel", t), P("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          P("load", t);
          break;
        case "video":
        case "audio":
          for (e = 0; e < Ru.length; e++) P(Ru[e], t);
          break;
        case "source":
          P("error", t);
          break;
        case "img":
        case "image":
        case "link":
          P("error", t), P("load", t);
          break;
        case "details":
          P("toggle", t);
          break;
        case "input":
          P("invalid", t), fs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
          break;
        case "select":
          P("invalid", t);
          break;
        case "textarea":
          P("invalid", t), os(t, a.value, a.defaultValue, a.children);
      }
      (e = a.children),
        (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
        t.textContent === "" + e ||
        a.suppressHydrationWarning === !0 ||
        yd(t.textContent, e)
          ? (a.popover != null && (P("beforetoggle", t), P("toggle", t)),
            a.onScroll != null && P("scroll", t),
            a.onScrollEnd != null && P("scrollend", t),
            a.onClick != null && (t.onclick = Vt),
            (t = !0))
          : (t = !1),
        t || de(l, !0);
    }
    function $s(l) {
      for (wl = l.return; wl; )
        switch (wl.tag) {
          case 5:
          case 31:
          case 13:
            Mt = !1;
            return;
          case 27:
          case 3:
            Mt = !0;
            return;
          default:
            wl = wl.return;
        }
    }
    function za(l) {
      if (l !== wl) return !1;
      if (!ul) return $s(l), (ul = !0), !1;
      var t = l.tag,
        e;
      if (
        ((e = t !== 3 && t !== 27) &&
          ((e = t === 5) && ((e = l.type), (e = !(e !== "form" && e !== "button") || Sf(l.type, l.memoizedProps))), (e = !e)),
        e && Sl && de(l),
        $s(l),
        t === 13)
      ) {
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(d(317));
        Sl = Td(l);
      } else if (t === 31) {
        if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(d(317));
        Sl = Td(l);
      } else t === 27 ? ((t = Sl), _e(l.type) ? ((l = Ef), (Ef = null), (Sl = l)) : (Sl = t)) : (Sl = wl ? Ut(l.stateNode.nextSibling) : null);
      return !0;
    }
    function Le() {
      (Sl = wl = null), (ul = !1);
    }
    function lc() {
      var l = re;
      return l !== null && (rt === null ? (rt = l) : rt.push.apply(rt, l), (re = null)), l;
    }
    function ou(l) {
      re === null ? (re = [l]) : re.push(l);
    }
    var tc = o(null),
      Ze = null,
      kt = null;
    function ye(l, t, e) {
      x(tc, t._currentValue), (t._currentValue = e);
    }
    function Wt(l) {
      (l._currentValue = tc.current), z(tc);
    }
    function ec(l, t, e) {
      for (; l !== null; ) {
        var a = l.alternate;
        if (
          ((l.childLanes & t) !== t
            ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
            : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
          l === e)
        )
          break;
        l = l.return;
      }
    }
    function ac(l, t, e, a) {
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
                (n.lanes |= e), (c = n.alternate), c !== null && (c.lanes |= e), ec(n.return, e, l), a || (i = null);
                break l;
              }
            n = c.next;
          }
        } else if (u.tag === 18) {
          if (((i = u.return), i === null)) throw Error(d(341));
          (i.lanes |= e), (n = i.alternate), n !== null && (n.lanes |= e), ec(i, e, l), (i = null);
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
    function Ta(l, t, e, a) {
      l = null;
      for (var u = t, n = !1; u !== null; ) {
        if (!n) {
          if ((u.flags & 524288) !== 0) n = !0;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var i = u.alternate;
          if (i === null) throw Error(d(387));
          if (((i = i.memoizedProps), i !== null)) {
            var c = u.type;
            ht(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : (l = [c]));
          }
        } else if (u === il.current) {
          if (((i = u.alternate), i === null)) throw Error(d(387));
          i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Bu) : (l = [Bu]));
        }
        u = u.return;
      }
      l !== null && ac(t, l, e, a), (t.flags |= 262144);
    }
    function hn(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!ht(l.context._currentValue, l.memoizedValue)) return !0;
        l = l.next;
      }
      return !1;
    }
    function Ve(l) {
      (Ze = l), (kt = null), (l = l.dependencies), l !== null && (l.firstContext = null);
    }
    function kl(l) {
      return Fs(Ze, l);
    }
    function mn(l, t) {
      return Ze === null && Ve(l), Fs(l, t);
    }
    function Fs(l, t) {
      var e = t._currentValue;
      if (((t = { context: t, memoizedValue: e, next: null }), kt === null)) {
        if (l === null) throw Error(d(308));
        (kt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288);
      } else kt = kt.next = t;
      return e;
    }
    var yy =
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
      hy = b.unstable_scheduleCallback,
      my = b.unstable_NormalPriority,
      Cl = { $$typeof: jl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function uc() {
      return { controller: new yy(), data: new Map(), refCount: 0 };
    }
    function ru(l) {
      l.refCount--,
        l.refCount === 0 &&
          hy(my, function () {
            l.controller.abort();
          });
    }
    var du = null,
      nc = 0,
      Ea = 0,
      Aa = null;
    function vy(l, t) {
      if (du === null) {
        var e = (du = []);
        (nc = 0),
          (Ea = sf()),
          (Aa = {
            status: "pending",
            value: void 0,
            then: function (a) {
              e.push(a);
            },
          });
      }
      return nc++, t.then(Is, Is), t;
    }
    function Is() {
      if (--nc === 0 && du !== null) {
        Aa !== null && (Aa.status = "fulfilled");
        var l = du;
        (du = null), (Ea = 0), (Aa = null);
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function gy(l, t) {
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
    var Ps = S.S;
    S.S = function (l, t) {
      (Br = tt()), typeof t == "object" && t !== null && typeof t.then == "function" && vy(l, t), Ps !== null && Ps(l, t);
    };
    var Ke = o(null);
    function ic() {
      var l = Ke.current;
      return l !== null ? l : gl.pooledCache;
    }
    function vn(l, t) {
      t === null ? x(Ke, Ke.current) : x(Ke, t.pool);
    }
    function lo() {
      var l = ic();
      return l === null ? null : { parent: Cl._currentValue, pool: l };
    }
    var xa = Error(d(460)),
      cc = Error(d(474)),
      gn = Error(d(542)),
      Sn = { then: function () {} };
    function to(l) {
      return (l = l.status), l === "fulfilled" || l === "rejected";
    }
    function eo(l, t, e) {
      switch (((e = l[e]), e === void 0 ? l.push(t) : e !== t && (t.then(Vt, Vt), (t = e)), t.status)) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((l = t.reason), uo(l), l);
        default:
          if (typeof t.status == "string") t.then(Vt, Vt);
          else {
            if (((l = gl), l !== null && 100 < l.shellSuspendCounter)) throw Error(d(482));
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
          throw ((we = t), xa);
      }
    }
    function Je(l) {
      try {
        var t = l._init;
        return t(l._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? ((we = e), xa) : e;
      }
    }
    var we = null;
    function ao() {
      if (we === null) throw Error(d(459));
      var l = we;
      return (we = null), l;
    }
    function uo(l) {
      if (l === xa || l === gn) throw Error(d(483));
    }
    var _a = null,
      yu = 0;
    function bn(l) {
      var t = yu;
      return (yu += 1), _a === null && (_a = []), eo(_a, l, t);
    }
    function hu(l, t) {
      (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
    }
    function pn(l, t) {
      throw t.$$typeof === J
        ? Error(d(525))
        : ((l = Object.prototype.toString.call(t)),
          Error(d(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function no(l) {
      function t(r, s) {
        if (l) {
          var y = r.deletions;
          y === null ? ((r.deletions = [s]), (r.flags |= 16)) : y.push(s);
        }
      }
      function e(r, s) {
        if (!l) return null;
        for (; s !== null; ) t(r, s), (s = s.sibling);
        return null;
      }
      function a(r) {
        for (var s = new Map(); r !== null; ) r.key !== null ? s.set(r.key, r) : s.set(r.index, r), (r = r.sibling);
        return s;
      }
      function u(r, s) {
        return (r = Jt(r, s)), (r.index = 0), (r.sibling = null), r;
      }
      function n(r, s, y) {
        return (
          (r.index = y),
          l
            ? ((y = r.alternate), y !== null ? ((y = y.index), y < s ? ((r.flags |= 67108866), s) : y) : ((r.flags |= 67108866), s))
            : ((r.flags |= 1048576), s)
        );
      }
      function i(r) {
        return l && r.alternate === null && (r.flags |= 67108866), r;
      }
      function c(r, s, y, p) {
        return s === null || s.tag !== 6 ? ((s = Wi(y, r.mode, p)), (s.return = r), s) : ((s = u(s, y)), (s.return = r), s);
      }
      function f(r, s, y, p) {
        var j = y.type;
        return j === Yl
          ? g(r, s, y.props.children, p, y.key)
          : s !== null && (s.elementType === j || (typeof j == "object" && j !== null && j.$$typeof === Pl && Je(j) === s.type))
          ? ((s = u(s, y.props)), hu(s, y), (s.return = r), s)
          : ((s = dn(y.type, y.key, y.props, null, r.mode, p)), hu(s, y), (s.return = r), s);
      }
      function h(r, s, y, p) {
        return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation
          ? ((s = $i(y, r.mode, p)), (s.return = r), s)
          : ((s = u(s, y.children || [])), (s.return = r), s);
      }
      function g(r, s, y, p, j) {
        return s === null || s.tag !== 7 ? ((s = Qe(y, r.mode, p, j)), (s.return = r), s) : ((s = u(s, y)), (s.return = r), s);
      }
      function T(r, s, y) {
        if ((typeof s == "string" && s !== "") || typeof s == "number" || typeof s == "bigint") return (s = Wi("" + s, r.mode, y)), (s.return = r), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case k:
              return (y = dn(s.type, s.key, s.props, null, r.mode, y)), hu(y, s), (y.return = r), y;
            case nl:
              return (s = $i(s, r.mode, y)), (s.return = r), s;
            case Pl:
              return (s = Je(s)), T(r, s, y);
          }
          if (zl(s) || Dl(s)) return (s = Qe(s, r.mode, y, null)), (s.return = r), s;
          if (typeof s.then == "function") return T(r, bn(s), y);
          if (s.$$typeof === jl) return T(r, mn(r, s), y);
          pn(r, s);
        }
        return null;
      }
      function m(r, s, y, p) {
        var j = s !== null ? s.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint") return j !== null ? null : c(r, s, "" + y, p);
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case k:
              return y.key === j ? f(r, s, y, p) : null;
            case nl:
              return y.key === j ? h(r, s, y, p) : null;
            case Pl:
              return (y = Je(y)), m(r, s, y, p);
          }
          if (zl(y) || Dl(y)) return j !== null ? null : g(r, s, y, p, null);
          if (typeof y.then == "function") return m(r, s, bn(y), p);
          if (y.$$typeof === jl) return m(r, s, mn(r, y), p);
          pn(r, y);
        }
        return null;
      }
      function v(r, s, y, p, j) {
        if ((typeof p == "string" && p !== "") || typeof p == "number" || typeof p == "bigint") return (r = r.get(y) || null), c(s, r, "" + p, j);
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case k:
              return (r = r.get(p.key === null ? y : p.key) || null), f(s, r, p, j);
            case nl:
              return (r = r.get(p.key === null ? y : p.key) || null), h(s, r, p, j);
            case Pl:
              return (p = Je(p)), v(r, s, y, p, j);
          }
          if (zl(p) || Dl(p)) return (r = r.get(y) || null), g(s, r, p, j, null);
          if (typeof p.then == "function") return v(r, s, y, bn(p), j);
          if (p.$$typeof === jl) return v(r, s, y, mn(s, p), j);
          pn(s, p);
        }
        return null;
      }
      function C(r, s, y, p) {
        for (var j = null, cl = null, H = s, w = (s = 0), el = null; H !== null && w < y.length; w++) {
          H.index > w ? ((el = H), (H = null)) : (el = H.sibling);
          var fl = m(r, H, y[w], p);
          if (fl === null) {
            H === null && (H = el);
            break;
          }
          l && H && fl.alternate === null && t(r, H), (s = n(fl, s, w)), cl === null ? (j = fl) : (cl.sibling = fl), (cl = fl), (H = el);
        }
        if (w === y.length) return e(r, H), ul && wt(r, w), j;
        if (H === null) {
          for (; w < y.length; w++) (H = T(r, y[w], p)), H !== null && ((s = n(H, s, w)), cl === null ? (j = H) : (cl.sibling = H), (cl = H));
          return ul && wt(r, w), j;
        }
        for (H = a(H); w < y.length; w++)
          (el = v(H, r, w, y[w], p)),
            el !== null &&
              (l && el.alternate !== null && H.delete(el.key === null ? w : el.key),
              (s = n(el, s, w)),
              cl === null ? (j = el) : (cl.sibling = el),
              (cl = el));
        return (
          l &&
            H.forEach(function (Ce) {
              return t(r, Ce);
            }),
          ul && wt(r, w),
          j
        );
      }
      function B(r, s, y, p) {
        if (y == null) throw Error(d(151));
        for (var j = null, cl = null, H = s, w = (s = 0), el = null, fl = y.next(); H !== null && !fl.done; w++, fl = y.next()) {
          H.index > w ? ((el = H), (H = null)) : (el = H.sibling);
          var Ce = m(r, H, fl.value, p);
          if (Ce === null) {
            H === null && (H = el);
            break;
          }
          l && H && Ce.alternate === null && t(r, H), (s = n(Ce, s, w)), cl === null ? (j = Ce) : (cl.sibling = Ce), (cl = Ce), (H = el);
        }
        if (fl.done) return e(r, H), ul && wt(r, w), j;
        if (H === null) {
          for (; !fl.done; w++, fl = y.next())
            (fl = T(r, fl.value, p)), fl !== null && ((s = n(fl, s, w)), cl === null ? (j = fl) : (cl.sibling = fl), (cl = fl));
          return ul && wt(r, w), j;
        }
        for (H = a(H); !fl.done; w++, fl = y.next())
          (fl = v(H, r, w, fl.value, p)),
            fl !== null &&
              (l && fl.alternate !== null && H.delete(fl.key === null ? w : fl.key),
              (s = n(fl, s, w)),
              cl === null ? (j = fl) : (cl.sibling = fl),
              (cl = fl));
        return (
          l &&
            H.forEach(function (Mh) {
              return t(r, Mh);
            }),
          ul && wt(r, w),
          j
        );
      }
      function vl(r, s, y, p) {
        if ((typeof y == "object" && y !== null && y.type === Yl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
          switch (y.$$typeof) {
            case k:
              l: {
                for (var j = y.key; s !== null; ) {
                  if (s.key === j) {
                    if (((j = y.type), j === Yl)) {
                      if (s.tag === 7) {
                        e(r, s.sibling), (p = u(s, y.props.children)), (p.return = r), (r = p);
                        break l;
                      }
                    } else if (s.elementType === j || (typeof j == "object" && j !== null && j.$$typeof === Pl && Je(j) === s.type)) {
                      e(r, s.sibling), (p = u(s, y.props)), hu(p, y), (p.return = r), (r = p);
                      break l;
                    }
                    e(r, s);
                    break;
                  } else t(r, s);
                  s = s.sibling;
                }
                y.type === Yl
                  ? ((p = Qe(y.props.children, r.mode, p, y.key)), (p.return = r), (r = p))
                  : ((p = dn(y.type, y.key, y.props, null, r.mode, p)), hu(p, y), (p.return = r), (r = p));
              }
              return i(r);
            case nl:
              l: {
                for (j = y.key; s !== null; ) {
                  if (s.key === j)
                    if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                      e(r, s.sibling), (p = u(s, y.children || [])), (p.return = r), (r = p);
                      break l;
                    } else {
                      e(r, s);
                      break;
                    }
                  else t(r, s);
                  s = s.sibling;
                }
                (p = $i(y, r.mode, p)), (p.return = r), (r = p);
              }
              return i(r);
            case Pl:
              return (y = Je(y)), vl(r, s, y, p);
          }
          if (zl(y)) return C(r, s, y, p);
          if (Dl(y)) {
            if (((j = Dl(y)), typeof j != "function")) throw Error(d(150));
            return (y = j.call(y)), B(r, s, y, p);
          }
          if (typeof y.then == "function") return vl(r, s, bn(y), p);
          if (y.$$typeof === jl) return vl(r, s, mn(r, y), p);
          pn(r, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint"
          ? ((y = "" + y),
            s !== null && s.tag === 6
              ? (e(r, s.sibling), (p = u(s, y)), (p.return = r), (r = p))
              : (e(r, s), (p = Wi(y, r.mode, p)), (p.return = r), (r = p)),
            i(r))
          : e(r, s);
      }
      return function (r, s, y, p) {
        try {
          yu = 0;
          var j = vl(r, s, y, p);
          return (_a = null), j;
        } catch (H) {
          if (H === xa || H === gn) throw H;
          var cl = mt(29, H, null, r.mode);
          return (cl.lanes = p), (cl.return = r), cl;
        } finally {
        }
      };
    }
    var ke = no(!0),
      io = no(!1),
      he = !1;
    function fc(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function sc(l, t) {
      (l = l.updateQueue),
        t.updateQueue === l &&
          (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null,
          });
    }
    function me(l) {
      return { lane: l, tag: 0, payload: null, callback: null, next: null };
    }
    function ve(l, t, e) {
      var a = l.updateQueue;
      if (a === null) return null;
      if (((a = a.shared), (ol & 2) !== 0)) {
        var u = a.pending;
        return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (a.pending = t), (t = rn(l)), Zs(l, null, e), t;
      }
      return on(l, a, t, e), rn(l);
    }
    function mu(l, t, e) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))) {
        var a = t.lanes;
        (a &= l.pendingLanes), (e |= a), (t.lanes = e), Ff(l, e);
      }
    }
    function oc(l, t) {
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
    var rc = !1;
    function vu() {
      if (rc) {
        var l = Aa;
        if (l !== null) throw l;
      }
    }
    function gu(l, t, e, a) {
      rc = !1;
      var u = l.updateQueue;
      he = !1;
      var n = u.firstBaseUpdate,
        i = u.lastBaseUpdate,
        c = u.shared.pending;
      if (c !== null) {
        u.shared.pending = null;
        var f = c,
          h = f.next;
        (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
        var g = l.alternate;
        g !== null &&
          ((g = g.updateQueue), (c = g.lastBaseUpdate), c !== i && (c === null ? (g.firstBaseUpdate = h) : (c.next = h), (g.lastBaseUpdate = f)));
      }
      if (n !== null) {
        var T = u.baseState;
        (i = 0), (g = h = f = null), (c = n);
        do {
          var m = c.lane & -536870913,
            v = m !== c.lane;
          if (v ? (tl & m) === m : (a & m) === m) {
            m !== 0 && m === Ea && (rc = !0), g !== null && (g = g.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
            l: {
              var C = l,
                B = c;
              m = t;
              var vl = e;
              switch (B.tag) {
                case 1:
                  if (((C = B.payload), typeof C == "function")) {
                    T = C.call(vl, T, m);
                    break l;
                  }
                  T = C;
                  break l;
                case 3:
                  C.flags = (C.flags & -65537) | 128;
                case 0:
                  if (((C = B.payload), (m = typeof C == "function" ? C.call(vl, T, m) : C), m == null)) break l;
                  T = N({}, T, m);
                  break l;
                case 2:
                  he = !0;
              }
            }
            (m = c.callback),
              m !== null && ((l.flags |= 64), v && (l.flags |= 8192), (v = u.callbacks), v === null ? (u.callbacks = [m]) : v.push(m));
          } else
            (v = { lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
              g === null ? ((h = g = v), (f = T)) : (g = g.next = v),
              (i |= m);
          if (((c = c.next), c === null)) {
            if (((c = u.shared.pending), c === null)) break;
            (v = c), (c = v.next), (v.next = null), (u.lastBaseUpdate = v), (u.shared.pending = null);
          }
        } while (!0);
        g === null && (f = T),
          (u.baseState = f),
          (u.firstBaseUpdate = h),
          (u.lastBaseUpdate = g),
          n === null && (u.shared.lanes = 0),
          (ze |= i),
          (l.lanes = i),
          (l.memoizedState = T);
      }
    }
    function co(l, t) {
      if (typeof l != "function") throw Error(d(191, l));
      l.call(t);
    }
    function fo(l, t) {
      var e = l.callbacks;
      if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) co(e[l], t);
    }
    var Oa = o(null),
      zn = o(0);
    function so(l, t) {
      (l = ue), x(zn, l), x(Oa, t), (ue = l | t.baseLanes);
    }
    function dc() {
      x(zn, ue), x(Oa, Oa.current);
    }
    function yc() {
      (ue = zn.current), z(Oa), z(zn);
    }
    var vt = o(null),
      Dt = null;
    function ge(l) {
      var t = l.alternate;
      x(Ol, Ol.current & 1), x(vt, l), Dt === null && (t === null || Oa.current !== null || t.memoizedState !== null) && (Dt = l);
    }
    function hc(l) {
      x(Ol, Ol.current), x(vt, l), Dt === null && (Dt = l);
    }
    function oo(l) {
      l.tag === 22 ? (x(Ol, Ol.current), x(vt, l), Dt === null && (Dt = l)) : Se();
    }
    function Se() {
      x(Ol, Ol.current), x(vt, vt.current);
    }
    function gt(l) {
      z(vt), Dt === l && (Dt = null), z(Ol);
    }
    var Ol = o(0);
    function Tn(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var e = t.memoizedState;
          if (e !== null && ((e = e.dehydrated), e === null || zf(e) || Tf(e))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === "forwards" ||
            t.memoizedProps.revealOrder === "backwards" ||
            t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
            t.memoizedProps.revealOrder === "together")
        ) {
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
    var $t = 0,
      K = null,
      hl = null,
      Rl = null,
      En = !1,
      Ma = !1,
      We = !1,
      An = 0,
      Su = 0,
      Da = null,
      Sy = 0;
    function Al() {
      throw Error(d(321));
    }
    function mc(l, t) {
      if (t === null) return !1;
      for (var e = 0; e < t.length && e < l.length; e++) if (!ht(l[e], t[e])) return !1;
      return !0;
    }
    function vc(l, t, e, a, u, n) {
      return (
        ($t = n),
        (K = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (S.H = l === null || l.memoizedState === null ? ko : Cc),
        (We = !1),
        (n = e(a, u)),
        (We = !1),
        Ma && (n = yo(t, e, a, u)),
        ro(l),
        n
      );
    }
    function ro(l) {
      S.H = zu;
      var t = hl !== null && hl.next !== null;
      if ((($t = 0), (Rl = hl = K = null), (En = !1), (Su = 0), (Da = null), t)) throw Error(d(300));
      l === null || Hl || ((l = l.dependencies), l !== null && hn(l) && (Hl = !0));
    }
    function yo(l, t, e, a) {
      K = l;
      var u = 0;
      do {
        if ((Ma && (Da = null), (Su = 0), (Ma = !1), 25 <= u)) throw Error(d(301));
        if (((u += 1), (Rl = hl = null), l.updateQueue != null)) {
          var n = l.updateQueue;
          (n.lastEffect = null), (n.events = null), (n.stores = null), n.memoCache != null && (n.memoCache.index = 0);
        }
        (S.H = Wo), (n = t(e, a));
      } while (Ma);
      return n;
    }
    function by() {
      var l = S.H,
        t = l.useState()[0];
      return (
        (t = typeof t.then == "function" ? bu(t) : t), (l = l.useState()[0]), (hl !== null ? hl.memoizedState : null) !== l && (K.flags |= 1024), t
      );
    }
    function gc() {
      var l = An !== 0;
      return (An = 0), l;
    }
    function Sc(l, t, e) {
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
      ($t = 0), (Rl = hl = K = null), (Ma = !1), (Su = An = 0), (Da = null);
    }
    function et() {
      var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Rl === null ? (K.memoizedState = Rl = l) : (Rl = Rl.next = l), Rl;
    }
    function Ml() {
      if (hl === null) {
        var l = K.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = hl.next;
      var t = Rl === null ? K.memoizedState : Rl.next;
      if (t !== null) (Rl = t), (hl = l);
      else {
        if (l === null) throw K.alternate === null ? Error(d(467)) : Error(d(310));
        (hl = l),
          (l = { memoizedState: hl.memoizedState, baseState: hl.baseState, baseQueue: hl.baseQueue, queue: hl.queue, next: null }),
          Rl === null ? (K.memoizedState = Rl = l) : (Rl = Rl.next = l);
      }
      return Rl;
    }
    function xn() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function bu(l) {
      var t = Su;
      return (
        (Su += 1),
        Da === null && (Da = []),
        (l = eo(Da, l, t)),
        (t = K),
        (Rl === null ? t.memoizedState : Rl.next) === null && ((t = t.alternate), (S.H = t === null || t.memoizedState === null ? ko : Cc)),
        l
      );
    }
    function _n(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return bu(l);
        if (l.$$typeof === jl) return kl(l);
      }
      throw Error(d(438, String(l)));
    }
    function pc(l) {
      var t = null,
        e = K.updateQueue;
      if ((e !== null && (t = e.memoCache), t == null)) {
        var a = K.alternate;
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
      if (
        (t == null && (t = { data: [], index: 0 }),
        e === null && ((e = xn()), (K.updateQueue = e)),
        (e.memoCache = t),
        (e = t.data[t.index]),
        e === void 0)
      )
        for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Qt;
      return t.index++, e;
    }
    function Ft(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function On(l) {
      var t = Ml();
      return zc(t, hl, l);
    }
    function zc(l, t, e) {
      var a = l.queue;
      if (a === null) throw Error(d(311));
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
          g = !1;
        do {
          var T = h.lane & -536870913;
          if (T !== h.lane ? (tl & T) === T : ($t & T) === T) {
            var m = h.revertLane;
            if (m === 0)
              f !== null &&
                (f = f.next =
                  { lane: 0, revertLane: 0, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }),
                T === Ea && (g = !0);
            else if (($t & m) === m) {
              (h = h.next), m === Ea && (g = !0);
              continue;
            } else
              (T = {
                lane: 0,
                revertLane: h.revertLane,
                gesture: null,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
                f === null ? ((c = f = T), (i = n)) : (f = f.next = T),
                (K.lanes |= m),
                (ze |= m);
            (T = h.action), We && e(n, T), (n = h.hasEagerState ? h.eagerState : e(n, T));
          } else
            (m = {
              lane: T,
              revertLane: h.revertLane,
              gesture: h.gesture,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((c = f = m), (i = n)) : (f = f.next = m),
              (K.lanes |= T),
              (ze |= T);
          h = h.next;
        } while (h !== null && h !== t);
        if ((f === null ? (i = n) : (f.next = c), !ht(n, l.memoizedState) && ((Hl = !0), g && ((e = Aa), e !== null)))) throw e;
        (l.memoizedState = n), (l.baseState = i), (l.baseQueue = f), (a.lastRenderedState = n);
      }
      return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
    }
    function Tc(l) {
      var t = Ml(),
        e = t.queue;
      if (e === null) throw Error(d(311));
      e.lastRenderedReducer = l;
      var a = e.dispatch,
        u = e.pending,
        n = t.memoizedState;
      if (u !== null) {
        e.pending = null;
        var i = (u = u.next);
        do (n = l(n, i.action)), (i = i.next);
        while (i !== u);
        ht(n, t.memoizedState) || (Hl = !0), (t.memoizedState = n), t.baseQueue === null && (t.baseState = n), (e.lastRenderedState = n);
      }
      return [n, a];
    }
    function ho(l, t, e) {
      var a = K,
        u = Ml(),
        n = ul;
      if (n) {
        if (e === void 0) throw Error(d(407));
        e = e();
      } else e = t();
      var i = !ht((hl || u).memoizedState, e);
      if (
        (i && ((u.memoizedState = e), (Hl = !0)),
        (u = u.queue),
        xc(go.bind(null, a, u, l), [l]),
        u.getSnapshot !== t || i || (Rl !== null && Rl.memoizedState.tag & 1))
      ) {
        if (((a.flags |= 2048), Ua(9, { destroy: void 0 }, vo.bind(null, a, u, e, t), null), gl === null)) throw Error(d(349));
        n || ($t & 127) !== 0 || mo(a, t, e);
      }
      return e;
    }
    function mo(l, t, e) {
      (l.flags |= 16384),
        (l = { getSnapshot: t, value: e }),
        (t = K.updateQueue),
        t === null ? ((t = xn()), (K.updateQueue = t), (t.stores = [l])) : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
    }
    function vo(l, t, e, a) {
      (t.value = e), (t.getSnapshot = a), So(t) && bo(l);
    }
    function go(l, t, e) {
      return e(function () {
        So(t) && bo(l);
      });
    }
    function So(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var e = t();
        return !ht(l, e);
      } catch {
        return !0;
      }
    }
    function bo(l) {
      var t = Xe(l, 2);
      t !== null && dt(t, l, 2);
    }
    function Ec(l) {
      var t = et();
      if (typeof l == "function") {
        var e = l;
        if (((l = e()), We)) {
          ql(!0);
          try {
            e();
          } finally {
            ql(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = l), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: l }), t
      );
    }
    function po(l, t, e, a) {
      return (l.baseState = e), zc(l, hl, typeof a == "function" ? a : Ft);
    }
    function py(l, t, e, a, u) {
      if (Un(l)) throw Error(d(485));
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
        S.T !== null ? e(!0) : (n.isTransition = !1),
          a(n),
          (e = t.pending),
          e === null ? ((n.next = t.pending = n), zo(t, n)) : ((n.next = e.next), (t.pending = e.next = n));
      }
    }
    function zo(l, t) {
      var e = t.action,
        a = t.payload,
        u = l.state;
      if (t.isTransition) {
        var n = S.T,
          i = {};
        S.T = i;
        try {
          var c = e(u, a),
            f = S.S;
          f !== null && f(i, c), To(l, t, c);
        } catch (h) {
          Ac(l, t, h);
        } finally {
          n !== null && i.types !== null && (n.types = i.types), (S.T = n);
        }
      } else
        try {
          (n = e(u, a)), To(l, t, n);
        } catch (h) {
          Ac(l, t, h);
        }
    }
    function To(l, t, e) {
      e !== null && typeof e == "object" && typeof e.then == "function"
        ? e.then(
            function (a) {
              Eo(l, t, a);
            },
            function (a) {
              return Ac(l, t, a);
            }
          )
        : Eo(l, t, e);
    }
    function Eo(l, t, e) {
      (t.status = "fulfilled"),
        (t.value = e),
        Ao(t),
        (l.state = e),
        (t = l.pending),
        t !== null && ((e = t.next), e === t ? (l.pending = null) : ((e = e.next), (t.next = e), zo(l, e)));
    }
    function Ac(l, t, e) {
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
      if (ul) {
        var e = gl.formState;
        if (e !== null) {
          l: {
            var a = K;
            if (ul) {
              if (Sl) {
                t: {
                  for (var u = Sl, n = Mt; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break t;
                    }
                    if (((u = Ut(u.nextSibling)), u === null)) {
                      u = null;
                      break t;
                    }
                  }
                  (n = u.data), (u = n === "F!" || n === "F" ? u : null);
                }
                if (u) {
                  (Sl = Ut(u.nextSibling)), (a = u.data === "F!");
                  break l;
                }
              }
              de(a);
            }
            a = !1;
          }
          a && (t = e[0]);
        }
      }
      return (
        (e = et()),
        (e.memoizedState = e.baseState = t),
        (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xo, lastRenderedState: t }),
        (e.queue = a),
        (e = Ko.bind(null, K, a)),
        (a.dispatch = e),
        (a = Ec(!1)),
        (n = Uc.bind(null, K, !1, a.queue)),
        (a = et()),
        (u = { state: t, dispatch: null, action: l, pending: null }),
        (a.queue = u),
        (e = py.bind(null, K, u, n, e)),
        (u.dispatch = e),
        (a.memoizedState = l),
        [t, e, !1]
      );
    }
    function Oo(l) {
      var t = Ml();
      return Mo(t, hl, l);
    }
    function Mo(l, t, e) {
      if (((t = zc(l, t, xo)[0]), (l = On(Ft)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
        try {
          var a = bu(t);
        } catch (i) {
          throw i === xa ? gn : i;
        }
      else a = t;
      t = Ml();
      var u = t.queue,
        n = u.dispatch;
      return e !== t.memoizedState && ((K.flags |= 2048), Ua(9, { destroy: void 0 }, zy.bind(null, u, e), null)), [a, n, l];
    }
    function zy(l, t) {
      l.action = t;
    }
    function Do(l) {
      var t = Ml(),
        e = hl;
      if (e !== null) return Mo(t, e, l);
      Ml(), (t = t.memoizedState), (e = Ml());
      var a = e.queue.dispatch;
      return (e.memoizedState = l), [t, a, !1];
    }
    function Ua(l, t, e, a) {
      return (
        (l = { tag: l, create: e, deps: a, inst: t, next: null }),
        (t = K.updateQueue),
        t === null && ((t = xn()), (K.updateQueue = t)),
        (e = t.lastEffect),
        e === null ? (t.lastEffect = l.next = l) : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
        l
      );
    }
    function Uo() {
      return Ml().memoizedState;
    }
    function Mn(l, t, e, a) {
      var u = et();
      (K.flags |= l), (u.memoizedState = Ua(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a));
    }
    function Dn(l, t, e, a) {
      var u = Ml();
      a = a === void 0 ? null : a;
      var n = u.memoizedState.inst;
      hl !== null && a !== null && mc(a, hl.memoizedState.deps)
        ? (u.memoizedState = Ua(t, n, e, a))
        : ((K.flags |= l), (u.memoizedState = Ua(1 | t, n, e, a)));
    }
    function Co(l, t) {
      Mn(8390656, 8, l, t);
    }
    function xc(l, t) {
      Dn(2048, 8, l, t);
    }
    function Ty(l) {
      K.flags |= 4;
      var t = K.updateQueue;
      if (t === null) (t = xn()), (K.updateQueue = t), (t.events = [l]);
      else {
        var e = t.events;
        e === null ? (t.events = [l]) : e.push(l);
      }
    }
    function Ro(l) {
      var t = Ml().memoizedState;
      return (
        Ty({ ref: t, nextImpl: l }),
        function () {
          if ((ol & 2) !== 0) throw Error(d(440));
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
    function jo(l, t) {
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
    function qo(l, t, e) {
      (e = e != null ? e.concat([l]) : null), Dn(4, 4, jo.bind(null, t, l), e);
    }
    function _c() {}
    function Bo(l, t) {
      var e = Ml();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      return t !== null && mc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
    }
    function Yo(l, t) {
      var e = Ml();
      t = t === void 0 ? null : t;
      var a = e.memoizedState;
      if (t !== null && mc(t, a[1])) return a[0];
      if (((a = l()), We)) {
        ql(!0);
        try {
          l();
        } finally {
          ql(!1);
        }
      }
      return (e.memoizedState = [a, t]), a;
    }
    function Oc(l, t, e) {
      return e === void 0 || (($t & 1073741824) !== 0 && (tl & 261930) === 0)
        ? (l.memoizedState = t)
        : ((l.memoizedState = e), (l = Gr()), (K.lanes |= l), (ze |= l), e);
    }
    function Go(l, t, e, a) {
      return ht(e, t)
        ? e
        : Oa.current !== null
        ? ((l = Oc(l, e, a)), ht(l, t) || (Hl = !0), l)
        : ($t & 42) === 0 || (($t & 1073741824) !== 0 && (tl & 261930) === 0)
        ? ((Hl = !0), (l.memoizedState = e))
        : ((l = Gr()), (K.lanes |= l), (ze |= l), t);
    }
    function Xo(l, t, e, a, u) {
      var n = A.p;
      A.p = n !== 0 && 8 > n ? n : 8;
      var i = S.T,
        c = {};
      (S.T = c), Uc(l, !1, t, e);
      try {
        var f = u(),
          h = S.S;
        if ((h !== null && h(c, f), f !== null && typeof f == "object" && typeof f.then == "function")) {
          var g = gy(f, a);
          pu(l, t, g, pt(l));
        } else pu(l, t, a, pt(l));
      } catch (T) {
        pu(l, t, { then: function () {}, status: "rejected", reason: T }, pt());
      } finally {
        (A.p = n), i !== null && c.types !== null && (i.types = c.types), (S.T = i);
      }
    }
    function Ey() {}
    function Mc(l, t, e, a) {
      if (l.tag !== 5) throw Error(d(476));
      var u = Qo(l).queue;
      Xo(
        l,
        u,
        t,
        R,
        e === null
          ? Ey
          : function () {
              return Lo(l), e(a);
            }
      );
    }
    function Qo(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: R,
        baseState: R,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: R },
        next: null,
      };
      var e = {};
      return (
        (t.next = {
          memoizedState: e,
          baseState: e,
          baseQueue: null,
          queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: e },
          next: null,
        }),
        (l.memoizedState = t),
        (l = l.alternate),
        l !== null && (l.memoizedState = t),
        t
      );
    }
    function Lo(l) {
      var t = Qo(l);
      t.next === null && (t = l.alternate.memoizedState), pu(l, t.next.queue, {}, pt());
    }
    function Dc() {
      return kl(Bu);
    }
    function Zo() {
      return Ml().memoizedState;
    }
    function Vo() {
      return Ml().memoizedState;
    }
    function Ay(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var e = pt();
            l = me(e);
            var a = ve(t, l, e);
            a !== null && (dt(a, t, e), mu(a, t, e)), (t = { cache: uc() }), (l.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function xy(l, t, e) {
      var a = pt();
      (e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null }),
        Un(l) ? Jo(t, e) : ((e = wi(l, t, e, a)), e !== null && (dt(e, l, a), wo(e, t, a)));
    }
    function Ko(l, t, e) {
      var a = pt();
      pu(l, t, e, a);
    }
    function pu(l, t, e, a) {
      var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: !1, eagerState: null, next: null };
      if (Un(l)) Jo(t, u);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && ((n = t.lastRenderedReducer), n !== null))
          try {
            var i = t.lastRenderedState,
              c = n(i, e);
            if (((u.hasEagerState = !0), (u.eagerState = c), ht(c, i))) return on(l, t, u, 0), gl === null && sn(), !1;
          } catch {
          } finally {
          }
        if (((e = wi(l, t, u, a)), e !== null)) return dt(e, l, a), wo(e, t, a), !0;
      }
      return !1;
    }
    function Uc(l, t, e, a) {
      if (((a = { lane: 2, revertLane: sf(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), Un(l))) {
        if (t) throw Error(d(479));
      } else (t = wi(l, e, a, 2)), t !== null && dt(t, l, 2);
    }
    function Un(l) {
      var t = l.alternate;
      return l === K || (t !== null && t === K);
    }
    function Jo(l, t) {
      Ma = En = !0;
      var e = l.pending;
      e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)), (l.pending = t);
    }
    function wo(l, t, e) {
      if ((e & 4194048) !== 0) {
        var a = t.lanes;
        (a &= l.pendingLanes), (e |= a), (t.lanes = e), Ff(l, e);
      }
    }
    var zu = {
      readContext: kl,
      use: _n,
      useCallback: Al,
      useContext: Al,
      useEffect: Al,
      useImperativeHandle: Al,
      useLayoutEffect: Al,
      useInsertionEffect: Al,
      useMemo: Al,
      useReducer: Al,
      useRef: Al,
      useState: Al,
      useDebugValue: Al,
      useDeferredValue: Al,
      useTransition: Al,
      useSyncExternalStore: Al,
      useId: Al,
      useHostTransitionStatus: Al,
      useFormState: Al,
      useActionState: Al,
      useOptimistic: Al,
      useMemoCache: Al,
      useCacheRefresh: Al,
    };
    zu.useEffectEvent = Al;
    var ko = {
        readContext: kl,
        use: _n,
        useCallback: function (l, t) {
          return (et().memoizedState = [l, t === void 0 ? null : t]), l;
        },
        useContext: kl,
        useEffect: Co,
        useImperativeHandle: function (l, t, e) {
          (e = e != null ? e.concat([l]) : null), Mn(4194308, 4, jo.bind(null, t, l), e);
        },
        useLayoutEffect: function (l, t) {
          return Mn(4194308, 4, l, t);
        },
        useInsertionEffect: function (l, t) {
          Mn(4, 2, l, t);
        },
        useMemo: function (l, t) {
          var e = et();
          t = t === void 0 ? null : t;
          var a = l();
          if (We) {
            ql(!0);
            try {
              l();
            } finally {
              ql(!1);
            }
          }
          return (e.memoizedState = [a, t]), a;
        },
        useReducer: function (l, t, e) {
          var a = et();
          if (e !== void 0) {
            var u = e(t);
            if (We) {
              ql(!0);
              try {
                e(t);
              } finally {
                ql(!1);
              }
            }
          } else u = t;
          return (
            (a.memoizedState = a.baseState = u),
            (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }),
            (a.queue = l),
            (l = l.dispatch = xy.bind(null, K, l)),
            [a.memoizedState, l]
          );
        },
        useRef: function (l) {
          var t = et();
          return (l = { current: l }), (t.memoizedState = l);
        },
        useState: function (l) {
          l = Ec(l);
          var t = l.queue,
            e = Ko.bind(null, K, t);
          return (t.dispatch = e), [l.memoizedState, e];
        },
        useDebugValue: _c,
        useDeferredValue: function (l, t) {
          var e = et();
          return Oc(e, l, t);
        },
        useTransition: function () {
          var l = Ec(!1);
          return (l = Xo.bind(null, K, l.queue, !0, !1)), (et().memoizedState = l), [!1, l];
        },
        useSyncExternalStore: function (l, t, e) {
          var a = K,
            u = et();
          if (ul) {
            if (e === void 0) throw Error(d(407));
            e = e();
          } else {
            if (((e = t()), gl === null)) throw Error(d(349));
            (tl & 127) !== 0 || mo(a, t, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: t };
          return (u.queue = n), Co(go.bind(null, a, n, l), [l]), (a.flags |= 2048), Ua(9, { destroy: void 0 }, vo.bind(null, a, n, e, t), null), e;
        },
        useId: function () {
          var l = et(),
            t = gl.identifierPrefix;
          if (ul) {
            var e = Yt,
              a = Bt;
            (e = (a & ~(1 << (32 - rl(a) - 1))).toString(32) + e),
              (t = "_" + t + "R_" + e),
              (e = An++),
              0 < e && (t += "H" + e.toString(32)),
              (t += "_");
          } else (e = Sy++), (t = "_" + t + "r_" + e.toString(32) + "_");
          return (l.memoizedState = t);
        },
        useHostTransitionStatus: Dc,
        useFormState: _o,
        useActionState: _o,
        useOptimistic: function (l) {
          var t = et();
          t.memoizedState = t.baseState = l;
          var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return (t.queue = e), (t = Uc.bind(null, K, !0, e)), (e.dispatch = t), [l, t];
        },
        useMemoCache: pc,
        useCacheRefresh: function () {
          return (et().memoizedState = Ay.bind(null, K));
        },
        useEffectEvent: function (l) {
          var t = et(),
            e = { impl: l };
          return (
            (t.memoizedState = e),
            function () {
              if ((ol & 2) !== 0) throw Error(d(440));
              return e.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Cc = {
        readContext: kl,
        use: _n,
        useCallback: Bo,
        useContext: kl,
        useEffect: xc,
        useImperativeHandle: qo,
        useInsertionEffect: Ho,
        useLayoutEffect: No,
        useMemo: Yo,
        useReducer: On,
        useRef: Uo,
        useState: function () {
          return On(Ft);
        },
        useDebugValue: _c,
        useDeferredValue: function (l, t) {
          var e = Ml();
          return Go(e, hl.memoizedState, l, t);
        },
        useTransition: function () {
          var l = On(Ft)[0],
            t = Ml().memoizedState;
          return [typeof l == "boolean" ? l : bu(l), t];
        },
        useSyncExternalStore: ho,
        useId: Zo,
        useHostTransitionStatus: Dc,
        useFormState: Oo,
        useActionState: Oo,
        useOptimistic: function (l, t) {
          var e = Ml();
          return po(e, hl, l, t);
        },
        useMemoCache: pc,
        useCacheRefresh: Vo,
      };
    Cc.useEffectEvent = Ro;
    var Wo = {
      readContext: kl,
      use: _n,
      useCallback: Bo,
      useContext: kl,
      useEffect: xc,
      useImperativeHandle: qo,
      useInsertionEffect: Ho,
      useLayoutEffect: No,
      useMemo: Yo,
      useReducer: Tc,
      useRef: Uo,
      useState: function () {
        return Tc(Ft);
      },
      useDebugValue: _c,
      useDeferredValue: function (l, t) {
        var e = Ml();
        return hl === null ? Oc(e, l, t) : Go(e, hl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Tc(Ft)[0],
          t = Ml().memoizedState;
        return [typeof l == "boolean" ? l : bu(l), t];
      },
      useSyncExternalStore: ho,
      useId: Zo,
      useHostTransitionStatus: Dc,
      useFormState: Do,
      useActionState: Do,
      useOptimistic: function (l, t) {
        var e = Ml();
        return hl !== null ? po(e, hl, l, t) : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: pc,
      useCacheRefresh: Vo,
    };
    Wo.useEffectEvent = Ro;
    function Rc(l, t, e, a) {
      (t = l.memoizedState), (e = e(a, t)), (e = e == null ? t : N({}, t, e)), (l.memoizedState = e), l.lanes === 0 && (l.updateQueue.baseState = e);
    }
    var Hc = {
      enqueueSetState: function (l, t, e) {
        l = l._reactInternals;
        var a = pt(),
          u = me(a);
        (u.payload = t), e != null && (u.callback = e), (t = ve(l, u, a)), t !== null && (dt(t, l, a), mu(t, l, a));
      },
      enqueueReplaceState: function (l, t, e) {
        l = l._reactInternals;
        var a = pt(),
          u = me(a);
        (u.tag = 1), (u.payload = t), e != null && (u.callback = e), (t = ve(l, u, a)), t !== null && (dt(t, l, a), mu(t, l, a));
      },
      enqueueForceUpdate: function (l, t) {
        l = l._reactInternals;
        var e = pt(),
          a = me(e);
        (a.tag = 2), t != null && (a.callback = t), (t = ve(l, a, e)), t !== null && (dt(t, l, e), mu(t, l, e));
      },
    };
    function $o(l, t, e, a, u, n, i) {
      return (
        (l = l.stateNode),
        typeof l.shouldComponentUpdate == "function"
          ? l.shouldComponentUpdate(a, n, i)
          : t.prototype && t.prototype.isPureReactComponent
          ? !cu(e, a) || !cu(u, n)
          : !0
      );
    }
    function Fo(l, t, e, a) {
      (l = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && Hc.enqueueReplaceState(t, t.state, null);
    }
    function $e(l, t) {
      var e = t;
      if ("ref" in t) {
        e = {};
        for (var a in t) a !== "ref" && (e[a] = t[a]);
      }
      if ((l = l.defaultProps)) {
        e === t && (e = N({}, e));
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
    function Cn(l, t) {
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
    function Nc(l, t, e) {
      return (
        (e = me(e)),
        (e.tag = 3),
        (e.payload = { element: null }),
        (e.callback = function () {
          Cn(l, t);
        }),
        e
      );
    }
    function er(l) {
      return (l = me(l)), (l.tag = 3), l;
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
          tr(t, e, a), typeof u != "function" && (Te === null ? (Te = new Set([this])) : Te.add(this));
          var c = a.stack;
          this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
        });
    }
    function _y(l, t, e, a, u) {
      if (((e.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
        if (((t = e.alternate), t !== null && Ta(t, e, u, !0), (e = vt.current), e !== null)) {
          switch (e.tag) {
            case 31:
            case 13:
              return (
                Dt === null ? Zn() : e.alternate === null && xl === 0 && (xl = 3),
                (e.flags &= -257),
                (e.flags |= 65536),
                (e.lanes = u),
                a === Sn ? (e.flags |= 16384) : ((t = e.updateQueue), t === null ? (e.updateQueue = new Set([a])) : t.add(a), nf(l, a, u)),
                !1
              );
            case 22:
              return (
                (e.flags |= 65536),
                a === Sn
                  ? (e.flags |= 16384)
                  : ((t = e.updateQueue),
                    t === null
                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (e.updateQueue = t))
                      : ((e = t.retryQueue), e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                    nf(l, a, u)),
                !1
              );
          }
          throw Error(d(435, e.tag));
        }
        return nf(l, a, u), Zn(), !1;
      }
      if (ul)
        return (
          (t = vt.current),
          t !== null
            ? ((t.flags & 65536) === 0 && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = u),
              a !== Pi && ((l = Error(d(422), { cause: a })), ou(xt(l, e))))
            : (a !== Pi && ((t = Error(d(423), { cause: a })), ou(xt(t, e))),
              (l = l.current.alternate),
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (a = xt(a, e)),
              (u = Nc(l.stateNode, a, u)),
              oc(l, u),
              xl !== 4 && (xl = 2)),
          !1
        );
      var n = Error(d(520), { cause: a });
      if (((n = xt(n, e)), Du === null ? (Du = [n]) : Du.push(n), xl !== 4 && (xl = 2), t === null)) return !0;
      (a = xt(a, e)), (e = t);
      do {
        switch (e.tag) {
          case 3:
            return (e.flags |= 65536), (l = u & -u), (e.lanes |= l), (l = Nc(e.stateNode, a, l)), oc(e, l), !1;
          case 1:
            if (
              ((t = e.type),
              (n = e.stateNode),
              (e.flags & 128) === 0 &&
                (typeof t.getDerivedStateFromError == "function" ||
                  (n !== null && typeof n.componentDidCatch == "function" && (Te === null || !Te.has(n)))))
            )
              return (e.flags |= 65536), (u &= -u), (e.lanes |= u), (u = er(u)), ar(u, l, e, a), oc(e, u), !1;
        }
        e = e.return;
      } while (e !== null);
      return !1;
    }
    var jc = Error(d(461)),
      Hl = !1;
    function Wl(l, t, e, a) {
      t.child = l === null ? io(t, null, e, a) : ke(t, l.child, e, a);
    }
    function ur(l, t, e, a, u) {
      e = e.render;
      var n = t.ref;
      if ("ref" in a) {
        var i = {};
        for (var c in a) c !== "ref" && (i[c] = a[c]);
      } else i = a;
      return (
        Ve(t),
        (a = vc(l, t, e, i, n, u)),
        (c = gc()),
        l !== null && !Hl ? (Sc(l, t, u), It(l, t, u)) : (ul && c && Fi(t), (t.flags |= 1), Wl(l, t, a, u), t.child)
      );
    }
    function nr(l, t, e, a, u) {
      if (l === null) {
        var n = e.type;
        return typeof n == "function" && !ki(n) && n.defaultProps === void 0 && e.compare === null
          ? ((t.tag = 15), (t.type = n), ir(l, t, n, a, u))
          : ((l = dn(e.type, null, a, t, t.mode, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
      }
      if (((n = l.child), !Zc(l, u))) {
        var i = n.memoizedProps;
        if (((e = e.compare), (e = e !== null ? e : cu), e(i, a) && l.ref === t.ref)) return It(l, t, u);
      }
      return (t.flags |= 1), (l = Jt(n, a)), (l.ref = t.ref), (l.return = t), (t.child = l);
    }
    function ir(l, t, e, a, u) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (cu(n, a) && l.ref === t.ref)
          if (((Hl = !1), (t.pendingProps = a = n), Zc(l, u))) (l.flags & 131072) !== 0 && (Hl = !0);
          else return (t.lanes = l.lanes), It(l, t, u);
      }
      return qc(l, t, e, a, u);
    }
    function cr(l, t, e, a) {
      var u = a.children,
        n = l !== null ? l.memoizedState : null;
      if (
        (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        a.mode === "hidden")
      ) {
        if ((t.flags & 128) !== 0) {
          if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
            for (a = t.child = l.child, u = 0; a !== null; ) (u = u | a.lanes | a.childLanes), (a = a.sibling);
            a = u & ~n;
          } else (a = 0), (t.child = null);
          return fr(l, t, n, e, a);
        }
        if ((e & 536870912) !== 0)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            l !== null && vn(t, n !== null ? n.cachePool : null),
            n !== null ? so(t, n) : dc(),
            oo(t);
        else return (a = t.lanes = 536870912), fr(l, t, n !== null ? n.baseLanes | e : e, e, a);
      } else n !== null ? (vn(t, n.cachePool), so(t, n), Se(), (t.memoizedState = null)) : (l !== null && vn(t, null), dc(), Se());
      return Wl(l, t, u, e), t.child;
    }
    function Tu(l, t) {
      return (
        (l !== null && l.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        t.sibling
      );
    }
    function fr(l, t, e, a, u) {
      var n = ic();
      return (
        (n = n === null ? null : { parent: Cl._currentValue, pool: n }),
        (t.memoizedState = { baseLanes: e, cachePool: n }),
        l !== null && vn(t, null),
        dc(),
        oo(t),
        l !== null && Ta(l, t, a, !0),
        (t.childLanes = u),
        null
      );
    }
    function Rn(l, t) {
      return (t = Nn({ mode: t.mode, children: t.children }, l.mode)), (t.ref = l.ref), (l.child = t), (t.return = l), t;
    }
    function sr(l, t, e) {
      return ke(t, l.child, null, e), (l = Rn(t, t.pendingProps)), (l.flags |= 2), gt(t), (t.memoizedState = null), l;
    }
    function Oy(l, t, e) {
      var a = t.pendingProps,
        u = (t.flags & 128) !== 0;
      if (((t.flags &= -129), l === null)) {
        if (ul) {
          if (a.mode === "hidden") return (l = Rn(t, a)), (t.lanes = 536870912), Tu(null, l);
          if (
            (hc(t),
            (l = Sl)
              ? ((l = zd(l, Mt)),
                (l = l !== null && l.data === "&" ? l : null),
                l !== null &&
                  ((t.memoizedState = {
                    dehydrated: l,
                    treeContext: oe !== null ? { id: Bt, overflow: Yt } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (e = Ks(l)),
                  (e.return = t),
                  (t.child = e),
                  (wl = t),
                  (Sl = null)))
              : (l = null),
            l === null)
          )
            throw de(t);
          return (t.lanes = 536870912), null;
        }
        return Rn(t, a);
      }
      var n = l.memoizedState;
      if (n !== null) {
        var i = n.dehydrated;
        if ((hc(t), u))
          if (t.flags & 256) (t.flags &= -257), (t = sr(l, t, e));
          else if (t.memoizedState !== null) (t.child = l.child), (t.flags |= 128), (t = null);
          else throw Error(d(558));
        else if ((Hl || Ta(l, t, e, !1), (u = (e & l.childLanes) !== 0), Hl || u)) {
          if (((a = gl), a !== null && ((i = If(a, e)), i !== 0 && i !== n.retryLane))) throw ((n.retryLane = i), Xe(l, i), dt(a, l, i), jc);
          Zn(), (t = sr(l, t, e));
        } else
          (l = n.treeContext),
            (Sl = Ut(i.nextSibling)),
            (wl = t),
            (ul = !0),
            (re = null),
            (Mt = !1),
            l !== null && ks(t, l),
            (t = Rn(t, a)),
            (t.flags |= 4096);
        return t;
      }
      return (l = Jt(l.child, { mode: a.mode, children: a.children })), (l.ref = t.ref), (t.child = l), (l.return = t), l;
    }
    function Hn(l, t) {
      var e = t.ref;
      if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(d(284));
        (l === null || l.ref !== e) && (t.flags |= 4194816);
      }
    }
    function qc(l, t, e, a, u) {
      return (
        Ve(t),
        (e = vc(l, t, e, a, void 0, u)),
        (a = gc()),
        l !== null && !Hl ? (Sc(l, t, u), It(l, t, u)) : (ul && a && Fi(t), (t.flags |= 1), Wl(l, t, e, u), t.child)
      );
    }
    function or(l, t, e, a, u, n) {
      return (
        Ve(t),
        (t.updateQueue = null),
        (e = yo(t, a, e, u)),
        ro(l),
        (a = gc()),
        l !== null && !Hl ? (Sc(l, t, n), It(l, t, n)) : (ul && a && Fi(t), (t.flags |= 1), Wl(l, t, e, n), t.child)
      );
    }
    function rr(l, t, e, a, u) {
      if ((Ve(t), t.stateNode === null)) {
        var n = Sa,
          i = e.contextType;
        typeof i == "object" && i !== null && (n = kl(i)),
          (n = new e(a, n)),
          (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
          (n.updater = Hc),
          (t.stateNode = n),
          (n._reactInternals = t),
          (n = t.stateNode),
          (n.props = a),
          (n.state = t.memoizedState),
          (n.refs = {}),
          fc(t),
          (i = e.contextType),
          (n.context = typeof i == "object" && i !== null ? kl(i) : Sa),
          (n.state = t.memoizedState),
          (i = e.getDerivedStateFromProps),
          typeof i == "function" && (Rc(t, e, i, a), (n.state = t.memoizedState)),
          typeof e.getDerivedStateFromProps == "function" ||
            typeof n.getSnapshotBeforeUpdate == "function" ||
            (typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function") ||
            ((i = n.state),
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            i !== n.state && Hc.enqueueReplaceState(n, n.state, null),
            gu(t, a, n, u),
            vu(),
            (n.state = t.memoizedState)),
          typeof n.componentDidMount == "function" && (t.flags |= 4194308),
          (a = !0);
      } else if (l === null) {
        n = t.stateNode;
        var c = t.memoizedProps,
          f = $e(e, c);
        n.props = f;
        var h = n.context,
          g = e.contextType;
        (i = Sa), typeof g == "object" && g !== null && (i = kl(g));
        var T = e.getDerivedStateFromProps;
        (g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
          (c = t.pendingProps !== c),
          g ||
            (typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function") ||
            ((c || h !== i) && Fo(t, n, a, i)),
          (he = !1);
        var m = t.memoizedState;
        (n.state = m),
          gu(t, a, n, u),
          vu(),
          (h = t.memoizedState),
          c || m !== h || he
            ? (typeof T == "function" && (Rc(t, e, T, a), (h = t.memoizedState)),
              (f = he || $o(t, e, f, a, m, h, i))
                ? (g ||
                    (typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function") ||
                    (typeof n.componentWillMount == "function" && n.componentWillMount(),
                    typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
                  typeof n.componentDidMount == "function" && (t.flags |= 4194308))
                : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = h)),
              (n.props = a),
              (n.state = h),
              (n.context = i),
              (a = f))
            : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
      } else {
        (n = t.stateNode),
          sc(l, t),
          (i = t.memoizedProps),
          (g = $e(e, i)),
          (n.props = g),
          (T = t.pendingProps),
          (m = n.context),
          (h = e.contextType),
          (f = Sa),
          typeof h == "object" && h !== null && (f = kl(h)),
          (c = e.getDerivedStateFromProps),
          (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") ||
            (typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function") ||
            ((i !== T || m !== f) && Fo(t, n, a, f)),
          (he = !1),
          (m = t.memoizedState),
          (n.state = m),
          gu(t, a, n, u),
          vu();
        var v = t.memoizedState;
        i !== T || m !== v || he || (l !== null && l.dependencies !== null && hn(l.dependencies))
          ? (typeof c == "function" && (Rc(t, e, c, a), (v = t.memoizedState)),
            (g = he || $o(t, e, g, a, m, v, f) || (l !== null && l.dependencies !== null && hn(l.dependencies)))
              ? (h ||
                  (typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function") ||
                  (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, v, f),
                  typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, v, f)),
                typeof n.componentDidUpdate == "function" && (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
              : (typeof n.componentDidUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 1024),
                (t.memoizedProps = a),
                (t.memoizedState = v)),
            (n.props = a),
            (n.state = v),
            (n.context = f),
            (a = g))
          : (typeof n.componentDidUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || (i === l.memoizedProps && m === l.memoizedState) || (t.flags |= 1024),
            (a = !1));
      }
      return (
        (n = a),
        Hn(l, t),
        (a = (t.flags & 128) !== 0),
        n || a
          ? ((n = t.stateNode),
            (e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render()),
            (t.flags |= 1),
            l !== null && a ? ((t.child = ke(t, l.child, null, u)), (t.child = ke(t, null, e, u))) : Wl(l, t, e, u),
            (t.memoizedState = n.state),
            (l = t.child))
          : (l = It(l, t, u)),
        l
      );
    }
    function dr(l, t, e, a) {
      return Le(), (t.flags |= 256), Wl(l, t, e, a), t.child;
    }
    var Bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Yc(l) {
      return { baseLanes: l, cachePool: lo() };
    }
    function Gc(l, t, e) {
      return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= bt), l;
    }
    function yr(l, t, e) {
      var a = t.pendingProps,
        u = !1,
        n = (t.flags & 128) !== 0,
        i;
      if (
        ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0),
        i && ((u = !0), (t.flags &= -129)),
        (i = (t.flags & 32) !== 0),
        (t.flags &= -33),
        l === null)
      ) {
        if (ul) {
          if (
            (u ? ge(t) : Se(),
            (l = Sl)
              ? ((l = zd(l, Mt)),
                (l = l !== null && l.data !== "&" ? l : null),
                l !== null &&
                  ((t.memoizedState = {
                    dehydrated: l,
                    treeContext: oe !== null ? { id: Bt, overflow: Yt } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (e = Ks(l)),
                  (e.return = t),
                  (t.child = e),
                  (wl = t),
                  (Sl = null)))
              : (l = null),
            l === null)
          )
            throw de(t);
          return Tf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = a.children;
        return (
          (a = a.fallback),
          u
            ? (Se(),
              (u = t.mode),
              (c = Nn({ mode: "hidden", children: c }, u)),
              (a = Qe(a, u, e, null)),
              (c.return = t),
              (a.return = t),
              (c.sibling = a),
              (t.child = c),
              (a = t.child),
              (a.memoizedState = Yc(e)),
              (a.childLanes = Gc(l, i, e)),
              (t.memoizedState = Bc),
              Tu(null, a))
            : (ge(t), Xc(t, c))
        );
      }
      var f = l.memoizedState;
      if (f !== null && ((c = f.dehydrated), c !== null)) {
        if (n)
          t.flags & 256
            ? (ge(t), (t.flags &= -257), (t = Qc(l, t, e)))
            : t.memoizedState !== null
            ? (Se(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (Se(),
              (c = a.fallback),
              (u = t.mode),
              (a = Nn({ mode: "visible", children: a.children }, u)),
              (c = Qe(c, u, e, null)),
              (c.flags |= 2),
              (a.return = t),
              (c.return = t),
              (a.sibling = c),
              (t.child = a),
              ke(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = Yc(e)),
              (a.childLanes = Gc(l, i, e)),
              (t.memoizedState = Bc),
              (t = Tu(null, a)));
        else if ((ge(t), Tf(c))) {
          if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
          (i = h), (a = Error(d(419))), (a.stack = ""), (a.digest = i), ou({ value: a, source: null, stack: null }), (t = Qc(l, t, e));
        } else if ((Hl || Ta(l, t, e, !1), (i = (e & l.childLanes) !== 0), Hl || i)) {
          if (((i = gl), i !== null && ((a = If(i, e)), a !== 0 && a !== f.retryLane))) throw ((f.retryLane = a), Xe(l, a), dt(i, l, a), jc);
          zf(c) || Zn(), (t = Qc(l, t, e));
        } else
          zf(c)
            ? ((t.flags |= 192), (t.child = l.child), (t = null))
            : ((l = f.treeContext),
              (Sl = Ut(c.nextSibling)),
              (wl = t),
              (ul = !0),
              (re = null),
              (Mt = !1),
              l !== null && ks(t, l),
              (t = Xc(t, a.children)),
              (t.flags |= 4096));
        return t;
      }
      return u
        ? (Se(),
          (c = a.fallback),
          (u = t.mode),
          (f = l.child),
          (h = f.sibling),
          (a = Jt(f, { mode: "hidden", children: a.children })),
          (a.subtreeFlags = f.subtreeFlags & 65011712),
          h !== null ? (c = Jt(h, c)) : ((c = Qe(c, u, e, null)), (c.flags |= 2)),
          (c.return = t),
          (a.return = t),
          (a.sibling = c),
          (t.child = a),
          Tu(null, a),
          (a = t.child),
          (c = l.child.memoizedState),
          c === null
            ? (c = Yc(e))
            : ((u = c.cachePool),
              u !== null ? ((f = Cl._currentValue), (u = u.parent !== f ? { parent: f, pool: f } : u)) : (u = lo()),
              (c = { baseLanes: c.baseLanes | e, cachePool: u })),
          (a.memoizedState = c),
          (a.childLanes = Gc(l, i, e)),
          (t.memoizedState = Bc),
          Tu(l.child, a))
        : (ge(t),
          (e = l.child),
          (l = e.sibling),
          (e = Jt(e, { mode: "visible", children: a.children })),
          (e.return = t),
          (e.sibling = null),
          l !== null && ((i = t.deletions), i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
          (t.child = e),
          (t.memoizedState = null),
          e);
    }
    function Xc(l, t) {
      return (t = Nn({ mode: "visible", children: t }, l.mode)), (t.return = l), (l.child = t);
    }
    function Nn(l, t) {
      return (l = mt(22, l, null, t)), (l.lanes = 0), l;
    }
    function Qc(l, t, e) {
      return ke(t, l.child, null, e), (l = Xc(t, t.pendingProps.children)), (l.flags |= 2), (t.memoizedState = null), l;
    }
    function hr(l, t, e) {
      l.lanes |= t;
      var a = l.alternate;
      a !== null && (a.lanes |= t), ec(l.return, t, e);
    }
    function Lc(l, t, e, a, u, n) {
      var i = l.memoizedState;
      i === null
        ? (l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = a),
          (i.tail = e),
          (i.tailMode = u),
          (i.treeForkCount = n));
    }
    function mr(l, t, e) {
      var a = t.pendingProps,
        u = a.revealOrder,
        n = a.tail;
      a = a.children;
      var i = Ol.current,
        c = (i & 2) !== 0;
      if (
        (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1), x(Ol, i), Wl(l, t, a, e), (a = ul ? su : 0), !c && l !== null && (l.flags & 128) !== 0)
      )
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
          (e = u), e === null ? ((u = t.child), (t.child = null)) : ((u = e.sibling), (e.sibling = null)), Lc(t, !1, u, e, n, a);
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
          Lc(t, !0, e, null, n, a);
          break;
        case "together":
          Lc(t, !1, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function It(l, t, e) {
      if ((l !== null && (t.dependencies = l.dependencies), (ze |= t.lanes), (e & t.childLanes) === 0))
        if (l !== null) {
          if ((Ta(l, t, e, !1), (e & t.childLanes) === 0)) return null;
        } else return null;
      if (l !== null && t.child !== l.child) throw Error(d(153));
      if (t.child !== null) {
        for (l = t.child, e = Jt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
          (l = l.sibling), (e = e.sibling = Jt(l, l.pendingProps)), (e.return = t);
        e.sibling = null;
      }
      return t.child;
    }
    function Zc(l, t) {
      return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && hn(l)));
    }
    function My(l, t, e) {
      switch (t.tag) {
        case 3:
          Vl(t, t.stateNode.containerInfo), ye(t, Cl, l.memoizedState.cache), Le();
          break;
        case 27:
        case 5:
          Re(t);
          break;
        case 4:
          Vl(t, t.stateNode.containerInfo);
          break;
        case 10:
          ye(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), hc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null)
            return a.dehydrated !== null
              ? (ge(t), (t.flags |= 128), null)
              : (e & t.child.childLanes) !== 0
              ? yr(l, t, e)
              : (ge(t), (l = It(l, t, e)), l !== null ? l.sibling : null);
          ge(t);
          break;
        case 19:
          var u = (l.flags & 128) !== 0;
          if (((a = (e & t.childLanes) !== 0), a || (Ta(l, t, e, !1), (a = (e & t.childLanes) !== 0)), u)) {
            if (a) return mr(l, t, e);
            t.flags |= 128;
          }
          if (((u = t.memoizedState), u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)), x(Ol, Ol.current), a)) break;
          return null;
        case 22:
          return (t.lanes = 0), cr(l, t, e, t.pendingProps);
        case 24:
          ye(t, Cl, l.memoizedState.cache);
      }
      return It(l, t, e);
    }
    function vr(l, t, e) {
      if (l !== null)
        if (l.memoizedProps !== t.pendingProps) Hl = !0;
        else {
          if (!Zc(l, e) && (t.flags & 128) === 0) return (Hl = !1), My(l, t, e);
          Hl = (l.flags & 131072) !== 0;
        }
      else (Hl = !1), ul && (t.flags & 1048576) !== 0 && ws(t, su, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          l: {
            var a = t.pendingProps;
            if (((l = Je(t.elementType)), (t.type = l), typeof l == "function"))
              ki(l) ? ((a = $e(l, a)), (t.tag = 1), (t = rr(null, t, l, a, e))) : ((t.tag = 0), (t = qc(null, t, l, a, e)));
            else {
              if (l != null) {
                var u = l.$$typeof;
                if (u === Il) {
                  (t.tag = 11), (t = ur(null, t, l, a, e));
                  break l;
                } else if (u === F) {
                  (t.tag = 14), (t = nr(null, t, l, a, e));
                  break l;
                }
              }
              throw ((t = Ht(l) || l), Error(d(306, t, "")));
            }
          }
          return t;
        case 0:
          return qc(l, t, t.type, t.pendingProps, e);
        case 1:
          return (a = t.type), (u = $e(a, t.pendingProps)), rr(l, t, a, u, e);
        case 3:
          l: {
            if ((Vl(t, t.stateNode.containerInfo), l === null)) throw Error(d(387));
            a = t.pendingProps;
            var n = t.memoizedState;
            (u = n.element), sc(l, t), gu(t, a, null, e);
            var i = t.memoizedState;
            if (((a = i.cache), ye(t, Cl, a), a !== n.cache && ac(t, [Cl], e, !0), vu(), (a = i.element), n.isDehydrated))
              if (((n = { element: a, isDehydrated: !1, cache: i.cache }), (t.updateQueue.baseState = n), (t.memoizedState = n), t.flags & 256)) {
                t = dr(l, t, a, e);
                break l;
              } else if (a !== u) {
                (u = xt(Error(d(424)), t)), ou(u), (t = dr(l, t, a, e));
                break l;
              } else {
                switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                  case 9:
                    l = l.body;
                    break;
                  default:
                    l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
                }
                for (Sl = Ut(l.firstChild), wl = t, ul = !0, re = null, Mt = !0, e = io(t, null, a, e), t.child = e; e; )
                  (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
              }
            else {
              if ((Le(), a === u)) {
                t = It(l, t, e);
                break l;
              }
              Wl(l, t, a, e);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            Hn(l, t),
            l === null
              ? (e = Od(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = e)
                : ul ||
                  ((e = t.type),
                  (l = t.pendingProps),
                  (a = $n($.current).createElement(e)),
                  (a[Jl] = t),
                  (a[it] = l),
                  $l(a, e, l),
                  Ql(a),
                  (t.stateNode = a))
              : (t.memoizedState = Od(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
            null
          );
        case 27:
          return (
            Re(t),
            l === null &&
              ul &&
              ((a = t.stateNode = Ad(t.type, t.pendingProps, $.current)),
              (wl = t),
              (Mt = !0),
              (u = Sl),
              _e(t.type) ? ((Ef = u), (Sl = Ut(a.firstChild))) : (Sl = u)),
            Wl(l, t, t.pendingProps.children, e),
            Hn(l, t),
            l === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            l === null &&
              ul &&
              ((u = a = Sl) &&
                ((a = uh(a, t.type, t.pendingProps, Mt)),
                a !== null ? ((t.stateNode = a), (wl = t), (Sl = Ut(a.firstChild)), (Mt = !1), (u = !0)) : (u = !1)),
              u || de(t)),
            Re(t),
            (u = t.type),
            (n = t.pendingProps),
            (i = l !== null ? l.memoizedProps : null),
            (a = n.children),
            Sf(u, n) ? (a = null) : i !== null && Sf(u, i) && (t.flags |= 32),
            t.memoizedState !== null && ((u = vc(l, t, by, null, null, e)), (Bu._currentValue = u)),
            Hn(l, t),
            Wl(l, t, a, e),
            t.child
          );
        case 6:
          return (
            l === null &&
              ul &&
              ((l = e = Sl) && ((e = nh(e, t.pendingProps, Mt)), e !== null ? ((t.stateNode = e), (wl = t), (Sl = null), (l = !0)) : (l = !1)),
              l || de(t)),
            null
          );
        case 13:
          return yr(l, t, e);
        case 4:
          return Vl(t, t.stateNode.containerInfo), (a = t.pendingProps), l === null ? (t.child = ke(t, null, a, e)) : Wl(l, t, a, e), t.child;
        case 11:
          return ur(l, t, t.type, t.pendingProps, e);
        case 7:
          return Wl(l, t, t.pendingProps, e), t.child;
        case 8:
          return Wl(l, t, t.pendingProps.children, e), t.child;
        case 12:
          return Wl(l, t, t.pendingProps.children, e), t.child;
        case 10:
          return (a = t.pendingProps), ye(t, t.type, a.value), Wl(l, t, a.children, e), t.child;
        case 9:
          return (u = t.type._context), (a = t.pendingProps.children), Ve(t), (u = kl(u)), (a = a(u)), (t.flags |= 1), Wl(l, t, a, e), t.child;
        case 14:
          return nr(l, t, t.type, t.pendingProps, e);
        case 15:
          return ir(l, t, t.type, t.pendingProps, e);
        case 19:
          return mr(l, t, e);
        case 31:
          return Oy(l, t, e);
        case 22:
          return cr(l, t, e, t.pendingProps);
        case 24:
          return (
            Ve(t),
            (a = kl(Cl)),
            l === null
              ? ((u = ic()),
                u === null && ((u = gl), (n = uc()), (u.pooledCache = n), n.refCount++, n !== null && (u.pooledCacheLanes |= e), (u = n)),
                (t.memoizedState = { parent: a, cache: u }),
                fc(t),
                ye(t, Cl, u))
              : ((l.lanes & e) !== 0 && (sc(l, t), gu(t, null, null, e), vu()),
                (u = l.memoizedState),
                (n = t.memoizedState),
                u.parent !== a
                  ? ((u = { parent: a, cache: a }),
                    (t.memoizedState = u),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                    ye(t, Cl, a))
                  : ((a = n.cache), ye(t, Cl, a), a !== u.cache && ac(t, [Cl], e, !0))),
            Wl(l, t, t.pendingProps.children, e),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(d(156, t.tag));
    }
    function Pt(l) {
      l.flags |= 4;
    }
    function Vc(l, t, e, a, u) {
      if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
        if (((l.flags |= 16777216), (u & 335544128) === u))
          if (l.stateNode.complete) l.flags |= 8192;
          else if (Zr()) l.flags |= 8192;
          else throw ((we = Sn), cc);
      } else l.flags &= -16777217;
    }
    function gr(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (((l.flags |= 16777216), !Rd(t)))
        if (Zr()) l.flags |= 8192;
        else throw ((we = Sn), cc);
    }
    function jn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && ((t = l.tag !== 22 ? Wf() : 536870912), (l.lanes |= t), (Na |= t));
    }
    function Eu(l, t) {
      if (!ul)
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
    function bl(l) {
      var t = l.alternate !== null && l.alternate.child === l.child,
        e = 0,
        a = 0;
      if (t)
        for (var u = l.child; u !== null; )
          (e |= u.lanes | u.childLanes), (a |= u.subtreeFlags & 65011712), (a |= u.flags & 65011712), (u.return = l), (u = u.sibling);
      else for (u = l.child; u !== null; ) (e |= u.lanes | u.childLanes), (a |= u.subtreeFlags), (a |= u.flags), (u.return = l), (u = u.sibling);
      return (l.subtreeFlags |= a), (l.childLanes = e), t;
    }
    function Dy(l, t, e) {
      var a = t.pendingProps;
      switch ((Ii(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bl(t), null;
        case 1:
          return bl(t), null;
        case 3:
          return (
            (e = t.stateNode),
            (a = null),
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Wt(Cl),
            Tl(),
            e.pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)),
            (l === null || l.child === null) &&
              (za(t) ? Pt(t) : l === null || (l.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), lc())),
            bl(t),
            null
          );
        case 26:
          var u = t.type,
            n = t.memoizedState;
          return (
            l === null
              ? (Pt(t), n !== null ? (bl(t), gr(t, n)) : (bl(t), Vc(t, u, null, a, e)))
              : n
              ? n !== l.memoizedState
                ? (Pt(t), bl(t), gr(t, n))
                : (bl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps), l !== a && Pt(t), bl(t), Vc(t, u, l, a, e)),
            null
          );
        case 27:
          if ((la(t), (e = $.current), (u = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && Pt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(d(166));
              return bl(t), null;
            }
            (l = _.current), za(t) ? Ws(t) : ((l = Ad(u, a, e)), (t.stateNode = l), Pt(t));
          }
          return bl(t), null;
        case 5:
          if ((la(t), (u = t.type), l !== null && t.stateNode != null)) l.memoizedProps !== a && Pt(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(d(166));
              return bl(t), null;
            }
            if (((n = _.current), za(t))) Ws(t);
            else {
              var i = $n($.current);
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
                      (n = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select")),
                        a.multiple ? (n.multiple = !0) : a.size && (n.size = a.size);
                      break;
                    default:
                      n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                  }
              }
              (n[Jl] = t), (n[it] = a);
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
              l: switch (($l(n, u, a), u)) {
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
              a && Pt(t);
            }
          }
          return bl(t), Vc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== a && Pt(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
            if (((l = $.current), za(t))) {
              if (((l = t.stateNode), (e = t.memoizedProps), (a = null), (u = wl), u !== null))
                switch (u.tag) {
                  case 27:
                  case 5:
                    a = u.memoizedProps;
                }
              (l[Jl] = t), (l = !!(l.nodeValue === e || (a !== null && a.suppressHydrationWarning === !0) || yd(l.nodeValue, e))), l || de(t, !0);
            } else (l = $n(l).createTextNode(a)), (l[Jl] = t), (t.stateNode = l);
          }
          return bl(t), null;
        case 31:
          if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
            if (((a = za(t)), e !== null)) {
              if (l === null) {
                if (!a) throw Error(d(318));
                if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(d(557));
                l[Jl] = t;
              } else Le(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
              bl(t), (l = !1);
            } else (e = lc()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), (l = !0);
            if (!l) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
            if ((t.flags & 128) !== 0) throw Error(d(558));
          }
          return bl(t), null;
        case 13:
          if (((a = t.memoizedState), l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))) {
            if (((u = za(t)), a !== null && a.dehydrated !== null)) {
              if (l === null) {
                if (!u) throw Error(d(318));
                if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(d(317));
                u[Jl] = t;
              } else Le(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
              bl(t), (u = !1);
            } else (u = lc()), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), (u = !0);
            if (!u) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
          }
          return (
            gt(t),
            (t.flags & 128) !== 0
              ? ((t.lanes = e), t)
              : ((e = a !== null),
                (l = l !== null && l.memoizedState !== null),
                e &&
                  ((a = t.child),
                  (u = null),
                  a.alternate !== null &&
                    a.alternate.memoizedState !== null &&
                    a.alternate.memoizedState.cachePool !== null &&
                    (u = a.alternate.memoizedState.cachePool.pool),
                  (n = null),
                  a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
                  n !== u && (a.flags |= 2048)),
                e !== l && e && (t.child.flags |= 8192),
                jn(t, t.updateQueue),
                bl(t),
                null)
          );
        case 4:
          return Tl(), l === null && yf(t.stateNode.containerInfo), bl(t), null;
        case 10:
          return Wt(t.type), bl(t), null;
        case 19:
          if ((z(Ol), (a = t.memoizedState), a === null)) return bl(t), null;
          if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
            if (u) Eu(a, !1);
            else {
              if (xl !== 0 || (l !== null && (l.flags & 128) !== 0))
                for (l = t.child; l !== null; ) {
                  if (((n = Tn(l)), n !== null)) {
                    for (
                      t.flags |= 128, Eu(a, !1), l = n.updateQueue, t.updateQueue = l, jn(t, l), t.subtreeFlags = 0, l = e, e = t.child;
                      e !== null;

                    )
                      Vs(e, l), (e = e.sibling);
                    return x(Ol, (Ol.current & 1) | 2), ul && wt(t, a.treeForkCount), t.child;
                  }
                  l = l.sibling;
                }
              a.tail !== null && tt() > Xn && ((t.flags |= 128), (u = !0), Eu(a, !1), (t.lanes = 4194304));
            }
          else {
            if (!u)
              if (((l = Tn(n)), l !== null)) {
                if (
                  ((t.flags |= 128),
                  (u = !0),
                  (l = l.updateQueue),
                  (t.updateQueue = l),
                  jn(t, l),
                  Eu(a, !0),
                  a.tail === null && a.tailMode === "hidden" && !n.alternate && !ul)
                )
                  return bl(t), null;
              } else 2 * tt() - a.renderingStartTime > Xn && e !== 536870912 && ((t.flags |= 128), (u = !0), Eu(a, !1), (t.lanes = 4194304));
            a.isBackwards ? ((n.sibling = t.child), (t.child = n)) : ((l = a.last), l !== null ? (l.sibling = n) : (t.child = n), (a.last = n));
          }
          return a.tail !== null
            ? ((l = a.tail),
              (a.rendering = l),
              (a.tail = l.sibling),
              (a.renderingStartTime = tt()),
              (l.sibling = null),
              (e = Ol.current),
              x(Ol, u ? (e & 1) | 2 : e & 1),
              ul && wt(t, a.treeForkCount),
              l)
            : (bl(t), null);
        case 22:
        case 23:
          return (
            gt(t),
            yc(),
            (a = t.memoizedState !== null),
            l !== null ? (l.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t),
            (e = t.updateQueue),
            e !== null && jn(t, e.retryQueue),
            (e = null),
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            (a = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && z(Ke),
            null
          );
        case 24:
          return (e = null), l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Wt(Cl), bl(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(d(156, t.tag));
    }
    function Uy(l, t) {
      switch ((Ii(t), t.tag)) {
        case 1:
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 3:
          return Wt(Cl), Tl(), (l = t.flags), (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 26:
        case 27:
        case 5:
          return la(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((gt(t), t.alternate === null)) throw Error(d(340));
            Le();
          }
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 13:
          if ((gt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
            if (t.alternate === null) throw Error(d(340));
            Le();
          }
          return (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 19:
          return z(Ol), null;
        case 4:
          return Tl(), null;
        case 10:
          return Wt(t.type), null;
        case 22:
        case 23:
          return gt(t), yc(), l !== null && z(Ke), (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null;
        case 24:
          return Wt(Cl), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Sr(l, t) {
      switch ((Ii(t), t.tag)) {
        case 3:
          Wt(Cl), Tl();
          break;
        case 26:
        case 27:
        case 5:
          la(t);
          break;
        case 4:
          Tl();
          break;
        case 31:
          t.memoizedState !== null && gt(t);
          break;
        case 13:
          gt(t);
          break;
        case 19:
          z(Ol);
          break;
        case 10:
          Wt(t.type);
          break;
        case 22:
        case 23:
          gt(t), yc(), l !== null && z(Ke);
          break;
        case 24:
          Wt(Cl);
      }
    }
    function Au(l, t) {
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
        yl(t, t.return, c);
      }
    }
    function be(l, t, e) {
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
                } catch (g) {
                  yl(u, f, g);
                }
              }
            }
            a = a.next;
          } while (a !== n);
        }
      } catch (g) {
        yl(t, t.return, g);
      }
    }
    function br(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var e = l.stateNode;
        try {
          fo(t, e);
        } catch (a) {
          yl(l, l.return, a);
        }
      }
    }
    function pr(l, t, e) {
      (e.props = $e(l.type, l.memoizedProps)), (e.state = l.memoizedState);
      try {
        e.componentWillUnmount();
      } catch (a) {
        yl(l, t, a);
      }
    }
    function xu(l, t) {
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
        yl(l, t, u);
      }
    }
    function Gt(l, t) {
      var e = l.ref,
        a = l.refCleanup;
      if (e !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (u) {
            yl(l, t, u);
          } finally {
            (l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null);
          }
        else if (typeof e == "function")
          try {
            e(null);
          } catch (u) {
            yl(l, t, u);
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
        yl(l, l.return, u);
      }
    }
    function Kc(l, t, e) {
      try {
        var a = l.stateNode;
        Iy(a, l.type, e, t), (a[it] = t);
      } catch (u) {
        yl(l, l.return, u);
      }
    }
    function Tr(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && _e(l.type)) || l.tag === 4;
    }
    function Jc(l) {
      l: for (;;) {
        for (; l.sibling === null; ) {
          if (l.return === null || Tr(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if ((l.tag === 27 && _e(l.type)) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          (l.child.return = l), (l = l.child);
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function wc(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6)
        (l = l.stateNode),
          t
            ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t)
            : ((t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e),
              t.appendChild(l),
              (e = e._reactRootContainer),
              e != null || t.onclick !== null || (t.onclick = Vt));
      else if (a !== 4 && (a === 27 && _e(l.type) && ((e = l.stateNode), (t = null)), (l = l.child), l !== null))
        for (wc(l, t, e), l = l.sibling; l !== null; ) wc(l, t, e), (l = l.sibling);
    }
    function qn(l, t, e) {
      var a = l.tag;
      if (a === 5 || a === 6) (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
      else if (a !== 4 && (a === 27 && _e(l.type) && (e = l.stateNode), (l = l.child), l !== null))
        for (qn(l, t, e), l = l.sibling; l !== null; ) qn(l, t, e), (l = l.sibling);
    }
    function Er(l) {
      var t = l.stateNode,
        e = l.memoizedProps;
      try {
        for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
        $l(t, a, e), (t[Jl] = l), (t[it] = e);
      } catch (n) {
        yl(l, l.return, n);
      }
    }
    var le = !1,
      Nl = !1,
      kc = !1,
      Ar = typeof WeakSet == "function" ? WeakSet : Set,
      Ll = null;
    function Cy(l, t) {
      if (((l = l.containerInfo), (vf = ai), (l = js(l)), Qi(l))) {
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
                g = 0,
                T = l,
                m = null;
              t: for (;;) {
                for (
                  var v;
                  T !== e || (u !== 0 && T.nodeType !== 3) || (c = i + u),
                    T !== n || (a !== 0 && T.nodeType !== 3) || (f = i + a),
                    T.nodeType === 3 && (i += T.nodeValue.length),
                    (v = T.firstChild) !== null;

                )
                  (m = T), (T = v);
                for (;;) {
                  if (T === l) break t;
                  if ((m === e && ++h === u && (c = i), m === n && ++g === a && (f = i), (v = T.nextSibling) !== null)) break;
                  (T = m), (m = T.parentNode);
                }
                T = v;
              }
              e = c === -1 || f === -1 ? null : { start: c, end: f };
            } else e = null;
          }
        e = e || { start: 0, end: 0 };
      } else e = null;
      for (gf = { focusedElem: l, selectionRange: e }, ai = !1, Ll = t; Ll !== null; )
        if (((t = Ll), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)) (l.return = t), (Ll = l);
        else
          for (; Ll !== null; ) {
            switch (((t = Ll), (n = t.alternate), (l = t.flags), t.tag)) {
              case 0:
                if ((l & 4) !== 0 && ((l = t.updateQueue), (l = l !== null ? l.events : null), l !== null))
                  for (e = 0; e < l.length; e++) (u = l[e]), (u.ref.impl = u.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((l & 1024) !== 0 && n !== null) {
                  (l = void 0), (e = t), (u = n.memoizedProps), (n = n.memoizedState), (a = e.stateNode);
                  try {
                    var C = $e(e.type, u);
                    (l = a.getSnapshotBeforeUpdate(C, n)), (a.__reactInternalSnapshotBeforeUpdate = l);
                  } catch (B) {
                    yl(e, e.return, B);
                  }
                }
                break;
              case 3:
                if ((l & 1024) !== 0) {
                  if (((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)) pf(l);
                  else if (e === 1)
                    switch (l.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        pf(l);
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
                if ((l & 1024) !== 0) throw Error(d(163));
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
          ee(l, e), a & 4 && Au(5, e);
          break;
        case 1:
          if ((ee(l, e), a & 4))
            if (((l = e.stateNode), t === null))
              try {
                l.componentDidMount();
              } catch (i) {
                yl(e, e.return, i);
              }
            else {
              var u = $e(e.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
              } catch (i) {
                yl(e, e.return, i);
              }
            }
          a & 64 && br(e), a & 512 && xu(e, e.return);
          break;
        case 3:
          if ((ee(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
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
              yl(e, e.return, i);
            }
          }
          break;
        case 27:
          t === null && a & 4 && Er(e);
        case 26:
        case 5:
          ee(l, e), t === null && a & 4 && zr(e), a & 512 && xu(e, e.return);
          break;
        case 12:
          ee(l, e);
          break;
        case 31:
          ee(l, e), a & 4 && Mr(l, e);
          break;
        case 13:
          ee(l, e),
            a & 4 && Dr(l, e),
            a & 64 && ((l = e.memoizedState), l !== null && ((l = l.dehydrated), l !== null && ((e = Xy.bind(null, e)), ih(l, e))));
          break;
        case 22:
          if (((a = e.memoizedState !== null || le), !a)) {
            (t = (t !== null && t.memoizedState !== null) || Nl), (u = le);
            var n = Nl;
            (le = a), (Nl = t) && !n ? ae(l, e, (e.subtreeFlags & 8772) !== 0) : ee(l, e), (le = u), (Nl = n);
          }
          break;
        case 30:
          break;
        default:
          ee(l, e);
      }
    }
    function _r(l) {
      var t = l.alternate;
      t !== null && ((l.alternate = null), _r(t)),
        (l.child = null),
        (l.deletions = null),
        (l.sibling = null),
        l.tag === 5 && ((t = l.stateNode), t !== null && Ai(t)),
        (l.stateNode = null),
        (l.return = null),
        (l.dependencies = null),
        (l.memoizedProps = null),
        (l.memoizedState = null),
        (l.pendingProps = null),
        (l.stateNode = null),
        (l.updateQueue = null);
    }
    var pl = null,
      ft = !1;
    function te(l, t, e) {
      for (e = e.child; e !== null; ) Or(l, t, e), (e = e.sibling);
    }
    function Or(l, t, e) {
      if (_l && typeof _l.onCommitFiberUnmount == "function")
        try {
          _l.onCommitFiberUnmount(Xl, e);
        } catch {}
      switch (e.tag) {
        case 26:
          Nl || Gt(e, t), te(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
          break;
        case 27:
          Nl || Gt(e, t);
          var a = pl,
            u = ft;
          _e(e.type) && ((pl = e.stateNode), (ft = !1)), te(l, t, e), Nu(e.stateNode), (pl = a), (ft = u);
          break;
        case 5:
          Nl || Gt(e, t);
        case 6:
          if (((a = pl), (u = ft), (pl = null), te(l, t, e), (pl = a), (ft = u), pl !== null))
            if (ft)
              try {
                (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(e.stateNode);
              } catch (n) {
                yl(e, t, n);
              }
            else
              try {
                pl.removeChild(e.stateNode);
              } catch (n) {
                yl(e, t, n);
              }
          break;
        case 18:
          pl !== null &&
            (ft
              ? ((l = pl), bd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), La(l))
              : bd(pl, e.stateNode));
          break;
        case 4:
          (a = pl), (u = ft), (pl = e.stateNode.containerInfo), (ft = !0), te(l, t, e), (pl = a), (ft = u);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          be(2, e, t), Nl || be(4, e, t), te(l, t, e);
          break;
        case 1:
          Nl || (Gt(e, t), (a = e.stateNode), typeof a.componentWillUnmount == "function" && pr(e, t, a)), te(l, t, e);
          break;
        case 21:
          te(l, t, e);
          break;
        case 22:
          (Nl = (a = Nl) || e.memoizedState !== null), te(l, t, e), (Nl = a);
          break;
        default:
          te(l, t, e);
      }
    }
    function Mr(l, t) {
      if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))) {
        l = l.dehydrated;
        try {
          La(l);
        } catch (e) {
          yl(t, t.return, e);
        }
      }
    }
    function Dr(l, t) {
      if (t.memoizedState === null && ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null))))
        try {
          La(l);
        } catch (e) {
          yl(t, t.return, e);
        }
    }
    function Ry(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new Ar()), t;
        case 22:
          return (l = l.stateNode), (t = l._retryCache), t === null && (t = l._retryCache = new Ar()), t;
        default:
          throw Error(d(435, l.tag));
      }
    }
    function Bn(l, t) {
      var e = Ry(l);
      t.forEach(function (a) {
        if (!e.has(a)) {
          e.add(a);
          var u = Qy.bind(null, l, a);
          a.then(u, u);
        }
      });
    }
    function st(l, t) {
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
                if (_e(c.type)) {
                  (pl = c.stateNode), (ft = !1);
                  break l;
                }
                break;
              case 5:
                (pl = c.stateNode), (ft = !1);
                break l;
              case 3:
              case 4:
                (pl = c.stateNode.containerInfo), (ft = !0);
                break l;
            }
            c = c.return;
          }
          if (pl === null) throw Error(d(160));
          Or(n, i, u), (pl = null), (ft = !1), (n = u.alternate), n !== null && (n.return = null), (u.return = null);
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Ur(t, l), (t = t.sibling);
    }
    var jt = null;
    function Ur(l, t) {
      var e = l.alternate,
        a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          st(t, l), ot(l), a & 4 && (be(3, l, l.return), Au(3, l), be(5, l, l.return));
          break;
        case 1:
          st(t, l),
            ot(l),
            a & 512 && (Nl || e === null || Gt(e, e.return)),
            a & 64 &&
              le &&
              ((l = l.updateQueue),
              l !== null &&
                ((a = l.callbacks), a !== null && ((e = l.shared.hiddenCallbacks), (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
          break;
        case 26:
          var u = jt;
          if ((st(t, l), ot(l), a & 512 && (Nl || e === null || Gt(e, e.return)), a & 4)) {
            var n = e !== null ? e.memoizedState : null;
            if (((a = l.memoizedState), e === null))
              if (a === null)
                if (l.stateNode === null) {
                  l: {
                    (a = l.type), (e = l.memoizedProps), (u = u.ownerDocument || u);
                    t: switch (a) {
                      case "title":
                        (n = u.getElementsByTagName("title")[0]),
                          (!n || n[Ia] || n[Jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) &&
                            ((n = u.createElement(a)), u.head.insertBefore(n, u.querySelector("head > title"))),
                          $l(n, a, e),
                          (n[Jl] = l),
                          Ql(n),
                          (a = n);
                        break l;
                      case "link":
                        var i = Ud("link", "href", u).get(a + (e.href || ""));
                        if (i) {
                          for (var c = 0; c < i.length; c++)
                            if (
                              ((n = i[c]),
                              n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) &&
                                n.getAttribute("rel") === (e.rel == null ? null : e.rel) &&
                                n.getAttribute("title") === (e.title == null ? null : e.title) &&
                                n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin))
                            ) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(a)), $l(n, a, e), u.head.appendChild(n);
                        break;
                      case "meta":
                        if ((i = Ud("meta", "content", u).get(a + (e.content || "")))) {
                          for (c = 0; c < i.length; c++)
                            if (
                              ((n = i[c]),
                              n.getAttribute("content") === (e.content == null ? null : "" + e.content) &&
                                n.getAttribute("name") === (e.name == null ? null : e.name) &&
                                n.getAttribute("property") === (e.property == null ? null : e.property) &&
                                n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) &&
                                n.getAttribute("charset") === (e.charSet == null ? null : e.charSet))
                            ) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(a)), $l(n, a, e), u.head.appendChild(n);
                        break;
                      default:
                        throw Error(d(468, a));
                    }
                    (n[Jl] = l), Ql(n), (a = n);
                  }
                  l.stateNode = a;
                } else Cd(u, l.type, l.stateNode);
              else l.stateNode = Dd(u, a, l.memoizedProps);
            else
              n !== a
                ? (n === null ? e.stateNode !== null && ((e = e.stateNode), e.parentNode.removeChild(e)) : n.count--,
                  a === null ? Cd(u, l.type, l.stateNode) : Dd(u, a, l.memoizedProps))
                : a === null && l.stateNode !== null && Kc(l, l.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          st(t, l), ot(l), a & 512 && (Nl || e === null || Gt(e, e.return)), e !== null && a & 4 && Kc(l, l.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if ((st(t, l), ot(l), a & 512 && (Nl || e === null || Gt(e, e.return)), l.flags & 32)) {
            u = l.stateNode;
            try {
              ra(u, "");
            } catch (C) {
              yl(l, l.return, C);
            }
          }
          a & 4 && l.stateNode != null && ((u = l.memoizedProps), Kc(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (kc = !0);
          break;
        case 6:
          if ((st(t, l), ot(l), a & 4)) {
            if (l.stateNode === null) throw Error(d(162));
            (a = l.memoizedProps), (e = l.stateNode);
            try {
              e.nodeValue = a;
            } catch (C) {
              yl(l, l.return, C);
            }
          }
          break;
        case 3:
          if (((Pn = null), (u = jt), (jt = Fn(t.containerInfo)), st(t, l), (jt = u), ot(l), a & 4 && e !== null && e.memoizedState.isDehydrated))
            try {
              La(t.containerInfo);
            } catch (C) {
              yl(l, l.return, C);
            }
          kc && ((kc = !1), Cr(l));
          break;
        case 4:
          (a = jt), (jt = Fn(l.stateNode.containerInfo)), st(t, l), ot(l), (jt = a);
          break;
        case 12:
          st(t, l), ot(l);
          break;
        case 31:
          st(t, l), ot(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Bn(l, a)));
          break;
        case 13:
          st(t, l),
            ot(l),
            l.child.flags & 8192 && (l.memoizedState !== null) != (e !== null && e.memoizedState !== null) && (Gn = tt()),
            a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Bn(l, a)));
          break;
        case 22:
          u = l.memoizedState !== null;
          var f = e !== null && e.memoizedState !== null,
            h = le,
            g = Nl;
          if (((le = h || u), (Nl = g || f), st(t, l), (Nl = g), (le = h), ot(l), a & 8192))
            l: for (
              t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (e === null || f || le || Nl || Fe(l)),
                e = null,
                t = l;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (e === null) {
                  f = e = t;
                  try {
                    if (((n = f.stateNode), u))
                      (i = n.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none");
                    else {
                      c = f.stateNode;
                      var T = f.memoizedProps.style,
                        m = T != null && T.hasOwnProperty("display") ? T.display : null;
                      c.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                    }
                  } catch (C) {
                    yl(f, f.return, C);
                  }
                }
              } else if (t.tag === 6) {
                if (e === null) {
                  f = t;
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (C) {
                    yl(f, f.return, C);
                  }
                }
              } else if (t.tag === 18) {
                if (e === null) {
                  f = t;
                  try {
                    var v = f.stateNode;
                    u ? pd(v, !0) : pd(f.stateNode, !1);
                  } catch (C) {
                    yl(f, f.return, C);
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
          a & 4 && ((a = l.updateQueue), a !== null && ((e = a.retryQueue), e !== null && ((a.retryQueue = null), Bn(l, e))));
          break;
        case 19:
          st(t, l), ot(l), a & 4 && ((a = l.updateQueue), a !== null && ((l.updateQueue = null), Bn(l, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          st(t, l), ot(l);
      }
    }
    function ot(l) {
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
          if (e == null) throw Error(d(160));
          switch (e.tag) {
            case 27:
              var u = e.stateNode,
                n = Jc(l);
              qn(l, n, u);
              break;
            case 5:
              var i = e.stateNode;
              e.flags & 32 && (ra(i, ""), (e.flags &= -33));
              var c = Jc(l);
              qn(l, c, i);
              break;
            case 3:
            case 4:
              var f = e.stateNode.containerInfo,
                h = Jc(l);
              wc(l, h, f);
              break;
            default:
              throw Error(d(161));
          }
        } catch (g) {
          yl(l, l.return, g);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function Cr(l) {
      if (l.subtreeFlags & 1024)
        for (l = l.child; l !== null; ) {
          var t = l;
          Cr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling);
        }
    }
    function ee(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) xr(l, t.alternate, t), (t = t.sibling);
    }
    function Fe(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            be(4, t, t.return), Fe(t);
            break;
          case 1:
            Gt(t, t.return);
            var e = t.stateNode;
            typeof e.componentWillUnmount == "function" && pr(t, t.return, e), Fe(t);
            break;
          case 27:
            Nu(t.stateNode);
          case 26:
          case 5:
            Gt(t, t.return), Fe(t);
            break;
          case 22:
            t.memoizedState === null && Fe(t);
            break;
          case 30:
            Fe(t);
            break;
          default:
            Fe(t);
        }
        l = l.sibling;
      }
    }
    function ae(l, t, e) {
      for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate,
          u = l,
          n = t,
          i = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ae(u, n, e), Au(4, n);
            break;
          case 1:
            if ((ae(u, n, e), (a = n), (u = a.stateNode), typeof u.componentDidMount == "function"))
              try {
                u.componentDidMount();
              } catch (h) {
                yl(a, a.return, h);
              }
            if (((a = n), (u = a.updateQueue), u !== null)) {
              var c = a.stateNode;
              try {
                var f = u.shared.hiddenCallbacks;
                if (f !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) co(f[u], c);
              } catch (h) {
                yl(a, a.return, h);
              }
            }
            e && i & 64 && br(n), xu(n, n.return);
            break;
          case 27:
            Er(n);
          case 26:
          case 5:
            ae(u, n, e), e && a === null && i & 4 && zr(n), xu(n, n.return);
            break;
          case 12:
            ae(u, n, e);
            break;
          case 31:
            ae(u, n, e), e && i & 4 && Mr(u, n);
            break;
          case 13:
            ae(u, n, e), e && i & 4 && Dr(u, n);
            break;
          case 22:
            n.memoizedState === null && ae(u, n, e), xu(n, n.return);
            break;
          case 30:
            break;
          default:
            ae(u, n, e);
        }
        t = t.sibling;
      }
    }
    function Wc(l, t) {
      var e = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        (l = null),
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++, e != null && ru(e));
    }
    function $c(l, t) {
      (l = null),
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== l && (t.refCount++, l != null && ru(l));
    }
    function qt(l, t, e, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Rr(l, t, e, a), (t = t.sibling);
    }
    function Rr(l, t, e, a) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qt(l, t, e, a), u & 2048 && Au(9, t);
          break;
        case 1:
          qt(l, t, e, a);
          break;
        case 3:
          qt(l, t, e, a),
            u & 2048 &&
              ((l = null),
              t.alternate !== null && (l = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== l && (t.refCount++, l != null && ru(l)));
          break;
        case 12:
          if (u & 2048) {
            qt(l, t, e, a), (l = t.stateNode);
            try {
              var n = t.memoizedProps,
                i = n.id,
                c = n.onPostCommit;
              typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (f) {
              yl(t, t.return, f);
            }
          } else qt(l, t, e, a);
          break;
        case 31:
          qt(l, t, e, a);
          break;
        case 13:
          qt(l, t, e, a);
          break;
        case 23:
          break;
        case 22:
          (n = t.stateNode),
            (i = t.alternate),
            t.memoizedState !== null
              ? n._visibility & 2
                ? qt(l, t, e, a)
                : _u(l, t)
              : n._visibility & 2
              ? qt(l, t, e, a)
              : ((n._visibility |= 2), Ca(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Wc(i, t);
          break;
        case 24:
          qt(l, t, e, a), u & 2048 && $c(t.alternate, t);
          break;
        default:
          qt(l, t, e, a);
      }
    }
    function Ca(l, t, e, a, u) {
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
            Ca(n, i, c, f, u), Au(8, i);
            break;
          case 23:
            break;
          case 22:
            var g = i.stateNode;
            i.memoizedState !== null ? (g._visibility & 2 ? Ca(n, i, c, f, u) : _u(n, i)) : ((g._visibility |= 2), Ca(n, i, c, f, u)),
              u && h & 2048 && Wc(i.alternate, i);
            break;
          case 24:
            Ca(n, i, c, f, u), u && h & 2048 && $c(i.alternate, i);
            break;
          default:
            Ca(n, i, c, f, u);
        }
        t = t.sibling;
      }
    }
    function _u(l, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var e = l,
            a = t,
            u = a.flags;
          switch (a.tag) {
            case 22:
              _u(e, a), u & 2048 && Wc(a.alternate, a);
              break;
            case 24:
              _u(e, a), u & 2048 && $c(a.alternate, a);
              break;
            default:
              _u(e, a);
          }
          t = t.sibling;
        }
    }
    var Ou = 8192;
    function Ra(l, t, e) {
      if (l.subtreeFlags & Ou) for (l = l.child; l !== null; ) Hr(l, t, e), (l = l.sibling);
    }
    function Hr(l, t, e) {
      switch (l.tag) {
        case 26:
          Ra(l, t, e), l.flags & Ou && l.memoizedState !== null && Sh(e, jt, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          Ra(l, t, e);
          break;
        case 3:
        case 4:
          var a = jt;
          (jt = Fn(l.stateNode.containerInfo)), Ra(l, t, e), (jt = a);
          break;
        case 22:
          l.memoizedState === null &&
            ((a = l.alternate), a !== null && a.memoizedState !== null ? ((a = Ou), (Ou = 16777216), Ra(l, t, e), (Ou = a)) : Ra(l, t, e));
          break;
        default:
          Ra(l, t, e);
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
    function Mu(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var e = 0; e < t.length; e++) {
            var a = t[e];
            (Ll = a), qr(a, l);
          }
        Nr(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) jr(l), (l = l.sibling);
    }
    function jr(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Mu(l), l.flags & 2048 && be(9, l, l.return);
          break;
        case 3:
          Mu(l);
          break;
        case 12:
          Mu(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? ((t._visibility &= -3), Yn(l)) : Mu(l);
          break;
        default:
          Mu(l);
      }
    }
    function Yn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var e = 0; e < t.length; e++) {
            var a = t[e];
            (Ll = a), qr(a, l);
          }
        Nr(l);
      }
      for (l = l.child; l !== null; ) {
        switch (((t = l), t.tag)) {
          case 0:
          case 11:
          case 15:
            be(8, t, t.return), Yn(t);
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
    function qr(l, t) {
      for (; Ll !== null; ) {
        var e = Ll;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            be(8, e, t);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            ru(e.memoizedState.cache);
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
    var Hy = {
        getCacheForType: function (l) {
          var t = kl(Cl),
            e = t.data.get(l);
          return e === void 0 && ((e = l()), t.data.set(l, e)), e;
        },
        cacheSignal: function () {
          return kl(Cl).controller.signal;
        },
      },
      Ny = typeof WeakMap == "function" ? WeakMap : Map,
      ol = 0,
      gl = null,
      I = null,
      tl = 0,
      dl = 0,
      St = null,
      pe = !1,
      Ha = !1,
      Fc = !1,
      ue = 0,
      xl = 0,
      ze = 0,
      Ie = 0,
      Ic = 0,
      bt = 0,
      Na = 0,
      Du = null,
      rt = null,
      Pc = !1,
      Gn = 0,
      Br = 0,
      Xn = 1 / 0,
      Qn = null,
      Te = null,
      Bl = 0,
      Ee = null,
      ja = null,
      ne = 0,
      lf = 0,
      tf = null,
      Yr = null,
      Uu = 0,
      ef = null;
    function pt() {
      return (ol & 2) !== 0 && tl !== 0 ? tl & -tl : S.T !== null ? sf() : Pf();
    }
    function Gr() {
      if (bt === 0)
        if ((tl & 536870912) === 0 || ul) {
          var l = ku;
          (ku <<= 1), (ku & 3932160) === 0 && (ku = 262144), (bt = l);
        } else bt = 536870912;
      return (l = vt.current), l !== null && (l.flags |= 32), bt;
    }
    function dt(l, t, e) {
      ((l === gl && (dl === 2 || dl === 9)) || l.cancelPendingCommit !== null) && (qa(l, 0), Ae(l, tl, bt, !1)),
        Fa(l, e),
        ((ol & 2) === 0 || l !== gl) && (l === gl && ((ol & 2) === 0 && (Ie |= e), xl === 4 && Ae(l, tl, bt, !1)), Xt(l));
    }
    function Xr(l, t, e) {
      if ((ol & 6) !== 0) throw Error(d(327));
      var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || $a(l, t),
        u = a ? By(l, t) : uf(l, t, !0),
        n = a;
      do {
        if (u === 0) {
          Ha && !a && Ae(l, t, 0, !1);
          break;
        } else {
          if (((e = l.current.alternate), n && !jy(e))) {
            (u = uf(l, t, !1)), (n = !1);
            continue;
          }
          if (u === 2) {
            if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
            else (i = l.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
            if (i !== 0) {
              t = i;
              l: {
                var c = l;
                u = Du;
                var f = c.current.memoizedState.isDehydrated;
                if ((f && (qa(c, i).flags |= 256), (i = uf(c, i, !1)), i !== 2)) {
                  if (Fc && !f) {
                    (c.errorRecoveryDisabledLanes |= n), (Ie |= n), (u = 4);
                    break l;
                  }
                  (n = rt), (rt = u), n !== null && (rt === null ? (rt = n) : rt.push.apply(rt, n));
                }
                u = i;
              }
              if (((n = !1), u !== 2)) continue;
            }
          }
          if (u === 1) {
            qa(l, 0), Ae(l, t, 0, !0);
            break;
          }
          l: {
            switch (((a = l), (n = u), n)) {
              case 0:
              case 1:
                throw Error(d(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Ae(a, t, bt, !pe);
                break l;
              case 2:
                rt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(d(329));
            }
            if ((t & 62914560) === t && ((u = Gn + 300 - tt()), 10 < u)) {
              if ((Ae(a, t, bt, !pe), $u(a, 0, !0) !== 0)) break l;
              (ne = t), (a.timeoutHandle = gd(Qr.bind(null, a, e, rt, Qn, Pc, t, bt, Ie, Na, pe, n, "Throttled", -0, 0), u));
              break l;
            }
            Qr(a, e, rt, Qn, Pc, t, bt, Ie, Na, pe, n, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Xt(l);
    }
    function Qr(l, t, e, a, u, n, i, c, f, h, g, T, m, v) {
      if (((l.timeoutHandle = -1), (T = t.subtreeFlags), T & 8192 || (T & 16785408) === 16785408)) {
        (T = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Vt,
        }),
          Hr(t, n, T);
        var C = (n & 62914560) === n ? Gn - tt() : (n & 4194048) === n ? Br - tt() : 0;
        if (((C = bh(T, C)), C !== null)) {
          (ne = n), (l.cancelPendingCommit = C(Wr.bind(null, l, t, n, e, a, u, i, c, f, g, T, null, m, v))), Ae(l, n, i, !h);
          return;
        }
      }
      Wr(l, t, n, e, a, u, i, c, f);
    }
    function jy(l) {
      for (var t = l; ; ) {
        var e = t.tag;
        if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null)))
          for (var a = 0; a < e.length; a++) {
            var u = e[a],
              n = u.getSnapshot;
            u = u.value;
            try {
              if (!ht(n(), u)) return !1;
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
    function Ae(l, t, e, a) {
      (t &= ~Ic), (t &= ~Ie), (l.suspendedLanes |= t), (l.pingedLanes &= ~t), a && (l.warmLanes |= t), (a = l.expirationTimes);
      for (var u = t; 0 < u; ) {
        var n = 31 - rl(u),
          i = 1 << n;
        (a[n] = -1), (u &= ~i);
      }
      e !== 0 && $f(l, e, t);
    }
    function Ln() {
      return (ol & 6) === 0 ? (Cu(0), !1) : !0;
    }
    function af() {
      if (I !== null) {
        if (dl === 0) var l = I.return;
        else (l = I), (kt = Ze = null), bc(l), (_a = null), (yu = 0), (l = I);
        for (; l !== null; ) Sr(l.alternate, l), (l = l.return);
        I = null;
      }
    }
    function qa(l, t) {
      var e = l.timeoutHandle;
      e !== -1 && ((l.timeoutHandle = -1), th(e)),
        (e = l.cancelPendingCommit),
        e !== null && ((l.cancelPendingCommit = null), e()),
        (ne = 0),
        af(),
        (gl = l),
        (I = e = Jt(l.current, null)),
        (tl = t),
        (dl = 0),
        (St = null),
        (pe = !1),
        (Ha = $a(l, t)),
        (Fc = !1),
        (Na = bt = Ic = Ie = ze = xl = 0),
        (rt = Du = null),
        (Pc = !1),
        (t & 8) !== 0 && (t |= t & 32);
      var a = l.entangledLanes;
      if (a !== 0)
        for (l = l.entanglements, a &= t; 0 < a; ) {
          var u = 31 - rl(a),
            n = 1 << u;
          (t |= l[u]), (a &= ~n);
        }
      return (ue = t), sn(), e;
    }
    function Lr(l, t) {
      (K = null),
        (S.H = zu),
        t === xa || t === gn
          ? ((t = ao()), (dl = 3))
          : t === cc
          ? ((t = ao()), (dl = 4))
          : (dl = t === jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1),
        (St = t),
        I === null && ((xl = 1), Cn(l, xt(t, l.current)));
    }
    function Zr() {
      var l = vt.current;
      return l === null ? !0 : (tl & 4194048) === tl ? Dt === null : (tl & 62914560) === tl || (tl & 536870912) !== 0 ? l === Dt : !1;
    }
    function Vr() {
      var l = S.H;
      return (S.H = zu), l === null ? zu : l;
    }
    function Kr() {
      var l = S.A;
      return (S.A = Hy), l;
    }
    function Zn() {
      (xl = 4),
        pe || ((tl & 4194048) !== tl && vt.current !== null) || (Ha = !0),
        ((ze & 134217727) === 0 && (Ie & 134217727) === 0) || gl === null || Ae(gl, tl, bt, !1);
    }
    function uf(l, t, e) {
      var a = ol;
      ol |= 2;
      var u = Vr(),
        n = Kr();
      (gl !== l || tl !== t) && ((Qn = null), qa(l, t)), (t = !1);
      var i = xl;
      l: do
        try {
          if (dl !== 0 && I !== null) {
            var c = I,
              f = St;
            switch (dl) {
              case 8:
                af(), (i = 6);
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                vt.current === null && (t = !0);
                var h = dl;
                if (((dl = 0), (St = null), Ba(l, c, f, h), e && Ha)) {
                  i = 0;
                  break l;
                }
                break;
              default:
                (h = dl), (dl = 0), (St = null), Ba(l, c, f, h);
            }
          }
          qy(), (i = xl);
          break;
        } catch (g) {
          Lr(l, g);
        }
      while (!0);
      return t && l.shellSuspendCounter++, (kt = Ze = null), (ol = a), (S.H = u), (S.A = n), I === null && ((gl = null), (tl = 0), sn()), i;
    }
    function qy() {
      for (; I !== null; ) Jr(I);
    }
    function By(l, t) {
      var e = ol;
      ol |= 2;
      var a = Vr(),
        u = Kr();
      gl !== l || tl !== t ? ((Qn = null), (Xn = tt() + 500), qa(l, t)) : (Ha = $a(l, t));
      l: do
        try {
          if (dl !== 0 && I !== null) {
            t = I;
            var n = St;
            t: switch (dl) {
              case 1:
                (dl = 0), (St = null), Ba(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (to(n)) {
                  (dl = 0), (St = null), wr(t);
                  break;
                }
                (t = function () {
                  (dl !== 2 && dl !== 9) || gl !== l || (dl = 7), Xt(l);
                }),
                  n.then(t, t);
                break l;
              case 3:
                dl = 7;
                break l;
              case 4:
                dl = 5;
                break l;
              case 7:
                to(n) ? ((dl = 0), (St = null), wr(t)) : ((dl = 0), (St = null), Ba(l, t, n, 7));
                break;
              case 5:
                var i = null;
                switch (I.tag) {
                  case 26:
                    i = I.memoizedState;
                  case 5:
                  case 27:
                    var c = I;
                    if (i ? Rd(i) : c.stateNode.complete) {
                      (dl = 0), (St = null);
                      var f = c.sibling;
                      if (f !== null) I = f;
                      else {
                        var h = c.return;
                        h !== null ? ((I = h), Vn(h)) : (I = null);
                      }
                      break t;
                    }
                }
                (dl = 0), (St = null), Ba(l, t, n, 5);
                break;
              case 6:
                (dl = 0), (St = null), Ba(l, t, n, 6);
                break;
              case 8:
                af(), (xl = 6);
                break l;
              default:
                throw Error(d(462));
            }
          }
          Yy();
          break;
        } catch (g) {
          Lr(l, g);
        }
      while (!0);
      return (kt = Ze = null), (S.H = a), (S.A = u), (ol = e), I !== null ? 0 : ((gl = null), (tl = 0), sn(), xl);
    }
    function Yy() {
      for (; I !== null && !gi(); ) Jr(I);
    }
    function Jr(l) {
      var t = vr(l.alternate, l, ue);
      (l.memoizedProps = l.pendingProps), t === null ? Vn(l) : (I = t);
    }
    function wr(l) {
      var t = l,
        e = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = or(e, t, t.pendingProps, t.type, void 0, tl);
          break;
        case 11:
          t = or(e, t, t.pendingProps, t.type.render, t.ref, tl);
          break;
        case 5:
          bc(t);
        default:
          Sr(e, t), (t = I = Vs(t, ue)), (t = vr(e, t, ue));
      }
      (l.memoizedProps = l.pendingProps), t === null ? Vn(l) : (I = t);
    }
    function Ba(l, t, e, a) {
      (kt = Ze = null), bc(t), (_a = null), (yu = 0);
      var u = t.return;
      try {
        if (_y(l, u, t, e, tl)) {
          (xl = 1), Cn(l, xt(e, l.current)), (I = null);
          return;
        }
      } catch (n) {
        if (u !== null) throw ((I = u), n);
        (xl = 1), Cn(l, xt(e, l.current)), (I = null);
        return;
      }
      t.flags & 32768
        ? (ul || a === 1
            ? (l = !0)
            : Ha || (tl & 536870912) !== 0
            ? (l = !1)
            : ((pe = l = !0), (a === 2 || a === 9 || a === 3 || a === 6) && ((a = vt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
          kr(t, l))
        : Vn(t);
    }
    function Vn(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          kr(t, pe);
          return;
        }
        l = t.return;
        var e = Dy(t.alternate, t, ue);
        if (e !== null) {
          I = e;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          I = t;
          return;
        }
        I = t = l;
      } while (t !== null);
      xl === 0 && (xl = 5);
    }
    function kr(l, t) {
      do {
        var e = Uy(l.alternate, l);
        if (e !== null) {
          (e.flags &= 32767), (I = e);
          return;
        }
        if (((e = l.return), e !== null && ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)), !t && ((l = l.sibling), l !== null))) {
          I = l;
          return;
        }
        I = l = e;
      } while (l !== null);
      (xl = 6), (I = null);
    }
    function Wr(l, t, e, a, u, n, i, c, f) {
      l.cancelPendingCommit = null;
      do Kn();
      while (Bl !== 0);
      if ((ol & 6) !== 0) throw Error(d(327));
      if (t !== null) {
        if (t === l.current) throw Error(d(177));
        if (
          ((n = t.lanes | t.childLanes),
          (n |= Ji),
          g0(l, e, n, i, c, f),
          l === gl && ((I = gl = null), (tl = 0)),
          (ja = t),
          (Ee = l),
          (ne = e),
          (lf = n),
          (tf = u),
          (Yr = a),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((l.callbackNode = null),
              (l.callbackPriority = 0),
              Ly(M, function () {
                return ld(), null;
              }))
            : ((l.callbackNode = null), (l.callbackPriority = 0)),
          (a = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || a)
        ) {
          (a = S.T), (S.T = null), (u = A.p), (A.p = 2), (i = ol), (ol |= 4);
          try {
            Cy(l, t, e);
          } finally {
            (ol = i), (A.p = u), (S.T = a);
          }
        }
        (Bl = 1), $r(), Fr(), Ir();
      }
    }
    function $r() {
      if (Bl === 1) {
        Bl = 0;
        var l = Ee,
          t = ja,
          e = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || e) {
          (e = S.T), (S.T = null);
          var a = A.p;
          A.p = 2;
          var u = ol;
          ol |= 4;
          try {
            Ur(t, l);
            var n = gf,
              i = js(l.containerInfo),
              c = n.focusedElem,
              f = n.selectionRange;
            if (i !== c && c && c.ownerDocument && Ns(c.ownerDocument.documentElement, c)) {
              if (f !== null && Qi(c)) {
                var h = f.start,
                  g = f.end;
                if ((g === void 0 && (g = h), "selectionStart" in c)) (c.selectionStart = h), (c.selectionEnd = Math.min(g, c.value.length));
                else {
                  var T = c.ownerDocument || document,
                    m = (T && T.defaultView) || window;
                  if (m.getSelection) {
                    var v = m.getSelection(),
                      C = c.textContent.length,
                      B = Math.min(f.start, C),
                      vl = f.end === void 0 ? B : Math.min(f.end, C);
                    !v.extend && B > vl && ((i = vl), (vl = B), (B = i));
                    var r = Hs(c, B),
                      s = Hs(c, vl);
                    if (
                      r &&
                      s &&
                      (v.rangeCount !== 1 ||
                        v.anchorNode !== r.node ||
                        v.anchorOffset !== r.offset ||
                        v.focusNode !== s.node ||
                        v.focusOffset !== s.offset)
                    ) {
                      var y = T.createRange();
                      y.setStart(r.node, r.offset),
                        v.removeAllRanges(),
                        B > vl ? (v.addRange(y), v.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), v.addRange(y));
                    }
                  }
                }
              }
              for (T = [], v = c; (v = v.parentNode); ) v.nodeType === 1 && T.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
                var p = T[c];
                (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
              }
            }
            (ai = !!vf), (gf = vf = null);
          } finally {
            (ol = u), (A.p = a), (S.T = e);
          }
        }
        (l.current = t), (Bl = 2);
      }
    }
    function Fr() {
      if (Bl === 2) {
        Bl = 0;
        var l = Ee,
          t = ja,
          e = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || e) {
          (e = S.T), (S.T = null);
          var a = A.p;
          A.p = 2;
          var u = ol;
          ol |= 4;
          try {
            xr(l, t.alternate, t);
          } finally {
            (ol = u), (A.p = a), (S.T = e);
          }
        }
        Bl = 3;
      }
    }
    function Ir() {
      if (Bl === 4 || Bl === 3) {
        (Bl = 0), Si();
        var l = Ee,
          t = ja,
          e = ne,
          a = Yr;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (Bl = 5) : ((Bl = 0), (ja = Ee = null), Pr(l, l.pendingLanes));
        var u = l.pendingLanes;
        if ((u === 0 && (Te = null), Ti(e), (t = t.stateNode), _l && typeof _l.onCommitFiberRoot == "function"))
          try {
            _l.onCommitFiberRoot(Xl, t, void 0, (t.current.flags & 128) === 128);
          } catch {}
        if (a !== null) {
          (t = S.T), (u = A.p), (A.p = 2), (S.T = null);
          try {
            for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
              var c = a[i];
              n(c.value, { componentStack: c.stack });
            }
          } finally {
            (S.T = t), (A.p = u);
          }
        }
        (ne & 3) !== 0 && Kn(),
          Xt(l),
          (u = l.pendingLanes),
          (e & 261930) !== 0 && (u & 42) !== 0 ? (l === ef ? Uu++ : ((Uu = 0), (ef = l))) : (Uu = 0),
          Cu(0);
      }
    }
    function Pr(l, t) {
      (l.pooledCacheLanes &= t) === 0 && ((t = l.pooledCache), t != null && ((l.pooledCache = null), ru(t)));
    }
    function Kn() {
      return $r(), Fr(), Ir(), ld();
    }
    function ld() {
      if (Bl !== 5) return !1;
      var l = Ee,
        t = lf;
      lf = 0;
      var e = Ti(ne),
        a = S.T,
        u = A.p;
      try {
        (A.p = 32 > e ? 32 : e), (S.T = null), (e = tf), (tf = null);
        var n = Ee,
          i = ne;
        if (((Bl = 0), (ja = Ee = null), (ne = 0), (ol & 6) !== 0)) throw Error(d(331));
        var c = ol;
        if (((ol |= 4), jr(n.current), Rr(n, n.current, i, e), (ol = c), Cu(0, !1), _l && typeof _l.onPostCommitFiberRoot == "function"))
          try {
            _l.onPostCommitFiberRoot(Xl, n);
          } catch {}
        return !0;
      } finally {
        (A.p = u), (S.T = a), Pr(l, t);
      }
    }
    function td(l, t, e) {
      (t = xt(e, t)), (t = Nc(l.stateNode, t, 2)), (l = ve(l, t, 2)), l !== null && (Fa(l, 2), Xt(l));
    }
    function yl(l, t, e) {
      if (l.tag === 3) td(l, l, e);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            td(t, l, e);
            break;
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || (typeof a.componentDidCatch == "function" && (Te === null || !Te.has(a)))) {
              (l = xt(e, l)), (e = er(2)), (a = ve(t, e, 2)), a !== null && (ar(e, a, t, l), Fa(a, 2), Xt(a));
              break;
            }
          }
          t = t.return;
        }
    }
    function nf(l, t, e) {
      var a = l.pingCache;
      if (a === null) {
        a = l.pingCache = new Ny();
        var u = new Set();
        a.set(t, u);
      } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
      u.has(e) || ((Fc = !0), u.add(e), (l = Gy.bind(null, l, t, e)), t.then(l, l));
    }
    function Gy(l, t, e) {
      var a = l.pingCache;
      a !== null && a.delete(t),
        (l.pingedLanes |= l.suspendedLanes & e),
        (l.warmLanes &= ~e),
        gl === l &&
          (tl & e) === e &&
          (xl === 4 || (xl === 3 && (tl & 62914560) === tl && 300 > tt() - Gn) ? (ol & 2) === 0 && qa(l, 0) : (Ic |= e), Na === tl && (Na = 0)),
        Xt(l);
    }
    function ed(l, t) {
      t === 0 && (t = Wf()), (l = Xe(l, t)), l !== null && (Fa(l, t), Xt(l));
    }
    function Xy(l) {
      var t = l.memoizedState,
        e = 0;
      t !== null && (e = t.retryLane), ed(l, e);
    }
    function Qy(l, t) {
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
          throw Error(d(314));
      }
      a !== null && a.delete(t), ed(l, e);
    }
    function Ly(l, t) {
      return Wa(l, t);
    }
    var Jn = null,
      Ya = null,
      cf = !1,
      wn = !1,
      ff = !1,
      xe = 0;
    function Xt(l) {
      l !== Ya && l.next === null && (Ya === null ? (Jn = Ya = l) : (Ya = Ya.next = l)), (wn = !0), cf || ((cf = !0), Vy());
    }
    function Cu(l, t) {
      if (!ff && wn) {
        ff = !0;
        do
          for (var e = !1, a = Jn; a !== null; ) {
            if (l !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var i = a.suspendedLanes,
                  c = a.pingedLanes;
                (n = (1 << (31 - rl(42 | l) + 1)) - 1), (n &= u & ~(i & ~c)), (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
              }
              n !== 0 && ((e = !0), id(a, n));
            } else
              (n = tl),
                (n = $u(a, a === gl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
                (n & 3) === 0 || $a(a, n) || ((e = !0), id(a, n));
            a = a.next;
          }
        while (e);
        ff = !1;
      }
    }
    function Zy() {
      ad();
    }
    function ad() {
      wn = cf = !1;
      var l = 0;
      xe !== 0 && lh() && (l = xe);
      for (var t = tt(), e = null, a = Jn; a !== null; ) {
        var u = a.next,
          n = ud(a, t);
        n === 0
          ? ((a.next = null), e === null ? (Jn = u) : (e.next = u), u === null && (Ya = e))
          : ((e = a), (l !== 0 || (n & 3) !== 0) && (wn = !0)),
          (a = u);
      }
      (Bl !== 0 && Bl !== 5) || Cu(l), xe !== 0 && (xe = 0);
    }
    function ud(l, t) {
      for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var i = 31 - rl(n),
          c = 1 << i,
          f = u[i];
        f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = v0(c, t)) : f <= t && (l.expiredLanes |= c), (n &= ~c);
      }
      if (
        ((t = gl),
        (e = tl),
        (e = $u(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
        (a = l.callbackNode),
        e === 0 || (l === t && (dl === 2 || dl === 9)) || l.cancelPendingCommit !== null)
      )
        return a !== null && a !== null && He(a), (l.callbackNode = null), (l.callbackPriority = 0);
      if ((e & 3) === 0 || $a(l, e)) {
        if (((t = e & -e), t === l.callbackPriority)) return t;
        switch ((a !== null && He(a), Ti(e))) {
          case 2:
          case 8:
            e = ua;
            break;
          case 32:
            e = M;
            break;
          case 268435456:
            e = Kl;
            break;
          default:
            e = M;
        }
        return (a = nd.bind(null, l)), (e = Wa(e, a)), (l.callbackPriority = t), (l.callbackNode = e), t;
      }
      return a !== null && a !== null && He(a), (l.callbackPriority = 2), (l.callbackNode = null), 2;
    }
    function nd(l, t) {
      if (Bl !== 0 && Bl !== 5) return (l.callbackNode = null), (l.callbackPriority = 0), null;
      var e = l.callbackNode;
      if (Kn() && l.callbackNode !== e) return null;
      var a = tl;
      return (
        (a = $u(l, l === gl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
        a === 0 ? null : (Xr(l, a, t), ud(l, tt()), l.callbackNode != null && l.callbackNode === e ? nd.bind(null, l) : null)
      );
    }
    function id(l, t) {
      if (Kn()) return null;
      Xr(l, t, !0);
    }
    function Vy() {
      eh(function () {
        (ol & 6) !== 0 ? Wa(aa, Zy) : ad();
      });
    }
    function sf() {
      if (xe === 0) {
        var l = Ea;
        l === 0 && ((l = wu), (wu <<= 1), (wu & 261888) === 0 && (wu = 256)), (xe = l);
      }
      return xe;
    }
    function cd(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ln("" + l);
    }
    function fd(l, t) {
      var e = t.ownerDocument.createElement("input");
      return (
        (e.name = t.name),
        (e.value = t.value),
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        (l = new FormData(l)),
        e.parentNode.removeChild(e),
        l
      );
    }
    function Ky(l, t, e, a, u) {
      if (t === "submit" && e && e.stateNode === u) {
        var n = cd((u[it] || null).action),
          i = a.submitter;
        i && ((t = (t = i[it] || null) ? cd(t.formAction) : i.getAttribute("formAction")), t !== null && ((n = t), (i = null)));
        var c = new un("action", "action", null, a, u);
        l.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (a.defaultPrevented) {
                  if (xe !== 0) {
                    var f = i ? fd(u, i) : new FormData(u);
                    Mc(e, { pending: !0, data: f, method: u.method, action: n }, null, f);
                  }
                } else
                  typeof n == "function" &&
                    (c.preventDefault(), (f = i ? fd(u, i) : new FormData(u)), Mc(e, { pending: !0, data: f, method: u.method, action: n }, n, f));
              },
              currentTarget: u,
            },
          ],
        });
      }
    }
    for (var of = 0; of < Ki.length; of++) {
      var rf = Ki[of],
        Jy = rf.toLowerCase(),
        wy = rf[0].toUpperCase() + rf.slice(1);
      Nt(Jy, "on" + wy);
    }
    Nt(Ys, "onAnimationEnd"),
      Nt(Gs, "onAnimationIteration"),
      Nt(Xs, "onAnimationStart"),
      Nt("dblclick", "onDoubleClick"),
      Nt("focusin", "onFocus"),
      Nt("focusout", "onBlur"),
      Nt(sy, "onTransitionRun"),
      Nt(oy, "onTransitionStart"),
      Nt(ry, "onTransitionCancel"),
      Nt(Qs, "onTransitionEnd"),
      sa("onMouseEnter", ["mouseout", "mouseover"]),
      sa("onMouseLeave", ["mouseout", "mouseover"]),
      sa("onPointerEnter", ["pointerout", "pointerover"]),
      sa("onPointerLeave", ["pointerout", "pointerover"]),
      qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ru =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      ky = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ru));
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
              } catch (g) {
                fn(g);
              }
              (u.currentTarget = null), (n = f);
            }
          else
            for (i = 0; i < a.length; i++) {
              if (((c = a[i]), (f = c.instance), (h = c.currentTarget), (c = c.listener), f !== n && u.isPropagationStopped())) break l;
              (n = c), (u.currentTarget = h);
              try {
                n(u);
              } catch (g) {
                fn(g);
              }
              (u.currentTarget = null), (n = f);
            }
        }
      }
    }
    function P(l, t) {
      var e = t[Ei];
      e === void 0 && (e = t[Ei] = new Set());
      var a = l + "__bubble";
      e.has(a) || (od(t, l, 2, !1), e.add(a));
    }
    function df(l, t, e) {
      var a = 0;
      t && (a |= 4), od(e, l, a, t);
    }
    var kn = "_reactListening" + Math.random().toString(36).slice(2);
    function yf(l) {
      if (!l[kn]) {
        (l[kn] = !0),
          es.forEach(function (e) {
            e !== "selectionchange" && (ky.has(e) || df(e, !1, l), df(e, !0, l));
          });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[kn] || ((t[kn] = !0), df("selectionchange", !1, t));
      }
    }
    function od(l, t, e, a) {
      switch (Gd(t)) {
        case 2:
          var u = Th;
          break;
        case 8:
          u = Eh;
          break;
        default:
          u = Mf;
      }
      (e = u.bind(null, t, e, l)),
        (u = void 0),
        !Ri || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
        a
          ? u !== void 0
            ? l.addEventListener(t, e, { capture: !0, passive: u })
            : l.addEventListener(t, e, !0)
          : u !== void 0
          ? l.addEventListener(t, e, { passive: u })
          : l.addEventListener(t, e, !1);
    }
    function hf(l, t, e, a, u) {
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
              if (((i = ia(c)), i === null)) return;
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
          g = Ui(e),
          T = [];
        l: {
          var m = Ls.get(l);
          if (m !== void 0) {
            var v = un,
              C = l;
            switch (l) {
              case "keypress":
                if (en(e) === 0) break l;
              case "keydown":
              case "keyup":
                v = Q0;
                break;
              case "focusin":
                (C = "focus"), (v = qi);
                break;
              case "focusout":
                (C = "blur"), (v = qi);
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
                v = D0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                v = V0;
                break;
              case Ys:
              case Gs:
              case Xs:
                v = R0;
                break;
              case Qs:
                v = J0;
                break;
              case "scroll":
              case "scrollend":
                v = O0;
                break;
              case "wheel":
                v = k0;
                break;
              case "copy":
              case "cut":
              case "paste":
                v = N0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                v = bs;
                break;
              case "toggle":
              case "beforetoggle":
                v = $0;
            }
            var B = (t & 4) !== 0,
              vl = !B && (l === "scroll" || l === "scrollend"),
              r = B ? (m !== null ? m + "Capture" : null) : m;
            B = [];
            for (var s = h, y; s !== null; ) {
              var p = s;
              if (
                ((y = p.stateNode),
                (p = p.tag),
                (p !== 5 && p !== 26 && p !== 27) || y === null || r === null || ((p = lu(s, r)), p != null && B.push(Hu(s, p, y))),
                vl)
              )
                break;
              s = s.return;
            }
            0 < B.length && ((m = new v(m, C, null, e, g)), T.push({ event: m, listeners: B }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (
              ((m = l === "mouseover" || l === "pointerover"),
              (v = l === "mouseout" || l === "pointerout"),
              m && e !== Di && (C = e.relatedTarget || e.fromElement) && (ia(C) || C[na]))
            )
              break l;
            if (
              (v || m) &&
              ((m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window),
              v
                ? ((C = e.relatedTarget || e.toElement),
                  (v = h),
                  (C = C ? ia(C) : null),
                  C !== null && ((vl = Z(C)), (B = C.tag), C !== vl || (B !== 5 && B !== 27 && B !== 6)) && (C = null))
                : ((v = null), (C = h)),
              v !== C)
            ) {
              if (
                ((B = gs),
                (p = "onMouseLeave"),
                (r = "onMouseEnter"),
                (s = "mouse"),
                (l === "pointerout" || l === "pointerover") && ((B = bs), (p = "onPointerLeave"), (r = "onPointerEnter"), (s = "pointer")),
                (vl = v == null ? m : Pa(v)),
                (y = C == null ? m : Pa(C)),
                (m = new B(p, s + "leave", v, e, g)),
                (m.target = vl),
                (m.relatedTarget = y),
                (p = null),
                ia(g) === h && ((B = new B(r, s + "enter", C, e, g)), (B.target = y), (B.relatedTarget = vl), (p = B)),
                (vl = p),
                v && C)
              )
                t: {
                  for (B = Wy, r = v, s = C, y = 0, p = r; p; p = B(p)) y++;
                  p = 0;
                  for (var j = s; j; j = B(j)) p++;
                  for (; 0 < y - p; ) (r = B(r)), y--;
                  for (; 0 < p - y; ) (s = B(s)), p--;
                  for (; y--; ) {
                    if (r === s || (s !== null && r === s.alternate)) {
                      B = r;
                      break t;
                    }
                    (r = B(r)), (s = B(s));
                  }
                  B = null;
                }
              else B = null;
              v !== null && rd(T, m, v, B, !1), C !== null && vl !== null && rd(T, vl, C, B, !0);
            }
          }
          l: {
            if (((m = h ? Pa(h) : window), (v = m.nodeName && m.nodeName.toLowerCase()), v === "select" || (v === "input" && m.type === "file")))
              var cl = Os;
            else if (xs(m))
              if (Ms) cl = iy;
              else {
                cl = uy;
                var H = ay;
              }
            else
              (v = m.nodeName),
                !v || v.toLowerCase() !== "input" || (m.type !== "checkbox" && m.type !== "radio") ? h && Mi(h.elementType) && (cl = Os) : (cl = ny);
            if (cl && (cl = cl(l, h))) {
              _s(T, cl, e, g);
              break l;
            }
            H && H(l, m, h), l === "focusout" && h && m.type === "number" && h.memoizedProps.value != null && Oi(m, "number", m.value);
          }
          switch (((H = h ? Pa(h) : window), l)) {
            case "focusin":
              (xs(H) || H.contentEditable === "true") && ((ma = H), (Li = h), (fu = null));
              break;
            case "focusout":
              fu = Li = ma = null;
              break;
            case "mousedown":
              Zi = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Zi = !1), qs(T, e, g);
              break;
            case "selectionchange":
              if (fy) break;
            case "keydown":
            case "keyup":
              qs(T, e, g);
          }
          var w;
          if (Yi)
            l: {
              switch (l) {
                case "compositionstart":
                  var el = "onCompositionStart";
                  break l;
                case "compositionend":
                  el = "onCompositionEnd";
                  break l;
                case "compositionupdate":
                  el = "onCompositionUpdate";
                  break l;
              }
              el = void 0;
            }
          else ha ? Es(l, e) && (el = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (el = "onCompositionStart");
          el &&
            (ps &&
              e.locale !== "ko" &&
              (ha || el !== "onCompositionStart"
                ? el === "onCompositionEnd" && ha && (w = ms())
                : ((se = g), (Hi = "value" in se ? se.value : se.textContent), (ha = !0))),
            (H = Wn(h, el)),
            0 < H.length &&
              ((el = new Ss(el, l, null, e, g)),
              T.push({ event: el, listeners: H }),
              w ? (el.data = w) : ((w = As(e)), w !== null && (el.data = w)))),
            (w = I0 ? P0(l, e) : ly(l, e)) &&
              ((el = Wn(h, "onBeforeInput")),
              0 < el.length && ((H = new Ss("onBeforeInput", "beforeinput", null, e, g)), T.push({ event: H, listeners: el }), (H.data = w))),
            Ky(T, l, h, e, g);
        }
        sd(T, t);
      });
    }
    function Hu(l, t, e) {
      return { instance: l, listener: t, currentTarget: e };
    }
    function Wn(l, t) {
      for (var e = t + "Capture", a = []; l !== null; ) {
        var u = l,
          n = u.stateNode;
        if (
          ((u = u.tag),
          (u !== 5 && u !== 26 && u !== 27) ||
            n === null ||
            ((u = lu(l, e)), u != null && a.unshift(Hu(l, u, n)), (u = lu(l, t)), u != null && a.push(Hu(l, u, n))),
          l.tag === 3)
        )
          return a;
        l = l.return;
      }
      return [];
    }
    function Wy(l) {
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
        (c !== 5 && c !== 26 && c !== 27) ||
          h === null ||
          ((f = h), u ? ((h = lu(e, n)), h != null && i.unshift(Hu(e, h, f))) : u || ((h = lu(e, n)), h != null && i.push(Hu(e, h, f)))),
          (e = e.return);
      }
      i.length !== 0 && l.push({ event: t, listeners: i });
    }
    var $y = /\r\n?/g,
      Fy = /\u0000|\uFFFD/g;
    function dd(l) {
      return (typeof l == "string" ? l : "" + l)
        .replace(
          $y,
          `
`
        )
        .replace(Fy, "");
    }
    function yd(l, t) {
      return (t = dd(t)), dd(l) === t;
    }
    function ml(l, t, e, a, u, n) {
      switch (e) {
        case "children":
          typeof a == "string"
            ? t === "body" || (t === "textarea" && a === "") || ra(l, a)
            : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ra(l, "" + a);
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
            l.setAttribute(
              e,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof n == "function" &&
              (e === "formAction"
                ? (t !== "input" && ml(l, t, "name", u.name, u, null),
                  ml(l, t, "formEncType", u.formEncType, u, null),
                  ml(l, t, "formMethod", u.formMethod, u, null),
                  ml(l, t, "formTarget", u.formTarget, u, null))
                : (ml(l, t, "encType", u.encType, u, null), ml(l, t, "method", u.method, u, null), ml(l, t, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            l.removeAttribute(e);
            break;
          }
          (a = ln("" + a)), l.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (l.onclick = Vt);
          break;
        case "onScroll":
          a != null && P("scroll", l);
          break;
        case "onScrollEnd":
          a != null && P("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
            if (((e = a.__html), e != null)) {
              if (u.children != null) throw Error(d(60));
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
          a === !0
            ? l.setAttribute(e, "")
            : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
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
          P("beforetoggle", l), P("toggle", l), Fu(l, "popover", a);
          break;
        case "xlinkActuate":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Zt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Fu(l, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || (e[0] !== "o" && e[0] !== "O") || (e[1] !== "n" && e[1] !== "N")) && ((e = x0.get(e) || e), Fu(l, e, a));
      }
    }
    function mf(l, t, e, a, u, n) {
      switch (e) {
        case "style":
          ds(l, a, n);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
            if (((e = a.__html), e != null)) {
              if (u.children != null) throw Error(d(60));
              l.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ra(l, a) : (typeof a == "number" || typeof a == "bigint") && ra(l, "" + a);
          break;
        case "onScroll":
          a != null && P("scroll", l);
          break;
        case "onScrollEnd":
          a != null && P("scrollend", l);
          break;
        case "onClick":
          a != null && (l.onclick = Vt);
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
              if (
                e[0] === "o" &&
                e[1] === "n" &&
                ((u = e.endsWith("Capture")),
                (t = e.slice(2, u ? e.length - 7 : void 0)),
                (n = l[it] || null),
                (n = n != null ? n[e] : null),
                typeof n == "function" && l.removeEventListener(t, n, u),
                typeof a == "function")
              ) {
                typeof n != "function" && n !== null && (e in l ? (l[e] = null) : l.hasAttribute(e) && l.removeAttribute(e)),
                  l.addEventListener(t, a, u);
                break l;
              }
              e in l ? (l[e] = a) : a === !0 ? l.setAttribute(e, "") : Fu(l, e, a);
            }
      }
    }
    function $l(l, t, e) {
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
          P("error", l), P("load", l);
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
                    throw Error(d(137, t));
                  default:
                    ml(l, t, n, i, e, null);
                }
            }
          u && ml(l, t, "srcSet", e.srcSet, e, null), a && ml(l, t, "src", e.src, e, null);
          return;
        case "input":
          P("invalid", l);
          var c = (n = i = u = null),
            f = null,
            h = null;
          for (a in e)
            if (e.hasOwnProperty(a)) {
              var g = e[a];
              if (g != null)
                switch (a) {
                  case "name":
                    u = g;
                    break;
                  case "type":
                    i = g;
                    break;
                  case "checked":
                    f = g;
                    break;
                  case "defaultChecked":
                    h = g;
                    break;
                  case "value":
                    n = g;
                    break;
                  case "defaultValue":
                    c = g;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (g != null) throw Error(d(137, t));
                    break;
                  default:
                    ml(l, t, a, g, e, null);
                }
            }
          fs(l, n, c, f, h, i, u, !1);
          return;
        case "select":
          P("invalid", l), (a = i = n = null);
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
                  ml(l, t, u, c, e, null);
              }
          (t = n), (e = i), (l.multiple = !!a), t != null ? oa(l, !!a, t, !1) : e != null && oa(l, !!a, e, !0);
          return;
        case "textarea":
          P("invalid", l), (n = u = a = null);
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
                  if (c != null) throw Error(d(91));
                  break;
                default:
                  ml(l, t, i, c, e, null);
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
                  ml(l, t, f, a, e, null);
              }
          return;
        case "dialog":
          P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l);
          break;
        case "iframe":
        case "object":
          P("load", l);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Ru.length; a++) P(Ru[a], l);
          break;
        case "image":
          P("error", l), P("load", l);
          break;
        case "details":
          P("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          P("error", l), P("load", l);
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
                  throw Error(d(137, t));
                default:
                  ml(l, t, h, a, e, null);
              }
          return;
        default:
          if (Mi(t)) {
            for (g in e) e.hasOwnProperty(g) && ((a = e[g]), a !== void 0 && mf(l, t, g, a, e, void 0));
            return;
          }
      }
      for (c in e) e.hasOwnProperty(c) && ((a = e[c]), a != null && ml(l, t, c, a, e, null));
    }
    function Iy(l, t, e, a) {
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
            g = null;
          for (v in e) {
            var T = e[v];
            if (e.hasOwnProperty(v) && T != null)
              switch (v) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  f = T;
                default:
                  a.hasOwnProperty(v) || ml(l, t, v, null, a, T);
              }
          }
          for (var m in a) {
            var v = a[m];
            if (((T = e[m]), a.hasOwnProperty(m) && (v != null || T != null)))
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
                  g = v;
                  break;
                case "value":
                  i = v;
                  break;
                case "defaultValue":
                  c = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null) throw Error(d(137, t));
                  break;
                default:
                  v !== T && ml(l, t, m, v, a, T);
              }
          }
          _i(l, i, c, f, h, g, n, u);
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
                  a.hasOwnProperty(n) || ml(l, t, n, null, a, f);
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
                  n !== f && ml(l, t, u, n, a, f);
              }
          (t = c), (e = i), (a = v), m != null ? oa(l, !!e, m, !1) : !!a != !!e && (t != null ? oa(l, !!e, t, !0) : oa(l, !!e, e ? [] : "", !1));
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
                  ml(l, t, c, null, a, u);
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
                  if (u != null) throw Error(d(91));
                  break;
                default:
                  u !== n && ml(l, t, i, u, a, n);
              }
          ss(l, m, v);
          return;
        case "option":
          for (var C in e)
            if (((m = e[C]), e.hasOwnProperty(C) && m != null && !a.hasOwnProperty(C)))
              switch (C) {
                case "selected":
                  l.selected = !1;
                  break;
                default:
                  ml(l, t, C, null, a, m);
              }
          for (f in a)
            if (((m = a[f]), (v = e[f]), a.hasOwnProperty(f) && m !== v && (m != null || v != null)))
              switch (f) {
                case "selected":
                  l.selected = m && typeof m != "function" && typeof m != "symbol";
                  break;
                default:
                  ml(l, t, f, m, a, v);
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
          for (var B in e) (m = e[B]), e.hasOwnProperty(B) && m != null && !a.hasOwnProperty(B) && ml(l, t, B, null, a, m);
          for (h in a)
            if (((m = a[h]), (v = e[h]), a.hasOwnProperty(h) && m !== v && (m != null || v != null)))
              switch (h) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (m != null) throw Error(d(137, t));
                  break;
                default:
                  ml(l, t, h, m, a, v);
              }
          return;
        default:
          if (Mi(t)) {
            for (var vl in e) (m = e[vl]), e.hasOwnProperty(vl) && m !== void 0 && !a.hasOwnProperty(vl) && mf(l, t, vl, void 0, a, m);
            for (g in a) (m = a[g]), (v = e[g]), !a.hasOwnProperty(g) || m === v || (m === void 0 && v === void 0) || mf(l, t, g, m, a, v);
            return;
          }
      }
      for (var r in e) (m = e[r]), e.hasOwnProperty(r) && m != null && !a.hasOwnProperty(r) && ml(l, t, r, null, a, m);
      for (T in a) (m = a[T]), (v = e[T]), !a.hasOwnProperty(T) || m === v || (m == null && v == null) || ml(l, t, T, m, a, v);
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
    function Py() {
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
              var g = f.transferSize,
                T = f.initiatorType;
              g && hd(T) && ((f = f.responseEnd), (i += g * (f < c ? 1 : (c - h) / (f - h))));
            }
            if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l)) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && ((l = navigator.connection.downlink), typeof l == "number") ? l : 5;
    }
    var vf = null,
      gf = null;
    function $n(l) {
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
    function Sf(l, t) {
      return (
        l === "textarea" ||
        l === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        typeof t.children == "bigint" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var bf = null;
    function lh() {
      var l = window.event;
      return l && l.type === "popstate" ? (l === bf ? !1 : ((bf = l), !0)) : ((bf = null), !1);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0,
      th = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Sd = typeof Promise == "function" ? Promise : void 0,
      eh =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Sd < "u"
          ? function (l) {
              return Sd.resolve(null).then(l).catch(ah);
            }
          : gd;
    function ah(l) {
      setTimeout(function () {
        throw l;
      });
    }
    function _e(l) {
      return l === "head";
    }
    function bd(l, t) {
      var e = t,
        a = 0;
      do {
        var u = e.nextSibling;
        if ((l.removeChild(e), u && u.nodeType === 8))
          if (((e = u.data), e === "/$" || e === "/&")) {
            if (a === 0) {
              l.removeChild(u), La(t);
              return;
            }
            a--;
          } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
          else if (e === "html") Nu(l.ownerDocument.documentElement);
          else if (e === "head") {
            (e = l.ownerDocument.head), Nu(e);
            for (var n = e.firstChild; n; ) {
              var i = n.nextSibling,
                c = n.nodeName;
              n[Ia] || c === "SCRIPT" || c === "STYLE" || (c === "LINK" && n.rel.toLowerCase() === "stylesheet") || e.removeChild(n), (n = i);
            }
          } else e === "body" && Nu(l.ownerDocument.body);
        e = u;
      } while (e);
      La(t);
    }
    function pd(l, t) {
      var e = l;
      l = 0;
      do {
        var a = e.nextSibling;
        if (
          (e.nodeType === 1
            ? t
              ? ((e._stashedDisplay = e.style.display), (e.style.display = "none"))
              : ((e.style.display = e._stashedDisplay || ""), e.getAttribute("style") === "" && e.removeAttribute("style"))
            : e.nodeType === 3 && (t ? ((e._stashedText = e.nodeValue), (e.nodeValue = "")) : (e.nodeValue = e._stashedText || "")),
          a && a.nodeType === 8)
        )
          if (((e = a.data), e === "/$")) {
            if (l === 0) break;
            l--;
          } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
        e = a;
      } while (e);
    }
    function pf(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var e = t;
        switch (((t = t.nextSibling), e.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            pf(e), Ai(e);
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
    function uh(l, t, e, a) {
      for (; l.nodeType === 1; ) {
        var u = e;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (a) {
          if (!l[Ia])
            switch (t) {
              case "meta":
                if (!l.hasAttribute("itemprop")) break;
                return l;
              case "link":
                if (((n = l.getAttribute("rel")), n === "stylesheet" && l.hasAttribute("data-precedence"))) break;
                if (
                  n !== u.rel ||
                  l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                  l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                  l.getAttribute("title") !== (u.title == null ? null : u.title)
                )
                  break;
                return l;
              case "style":
                if (l.hasAttribute("data-precedence")) break;
                return l;
              case "script":
                if (
                  ((n = l.getAttribute("src")),
                  (n !== (u.src == null ? null : u.src) ||
                    l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                    l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) &&
                    n &&
                    l.hasAttribute("async") &&
                    !l.hasAttribute("itemprop"))
                )
                  break;
                return l;
              default:
                return l;
            }
        } else if (t === "input" && l.type === "hidden") {
          var n = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && l.getAttribute("name") === n) return l;
        } else return l;
        if (((l = Ut(l.nextSibling)), l === null)) break;
      }
      return null;
    }
    function nh(l, t, e) {
      if (t === "") return null;
      for (; l.nodeType !== 3; )
        if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e) || ((l = Ut(l.nextSibling)), l === null)) return null;
      return l;
    }
    function zd(l, t) {
      for (; l.nodeType !== 8; )
        if (((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) || ((l = Ut(l.nextSibling)), l === null)) return null;
      return l;
    }
    function zf(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function Tf(l) {
      return l.data === "$!" || (l.data === "$?" && l.ownerDocument.readyState !== "loading");
    }
    function ih(l, t) {
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
    function Ut(l) {
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
    var Ef = null;
    function Td(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var e = l.data;
          if (e === "/$" || e === "/&") {
            if (t === 0) return Ut(l.nextSibling);
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
      switch (((t = $n(e)), l)) {
        case "html":
          if (((l = t.documentElement), !l)) throw Error(d(452));
          return l;
        case "head":
          if (((l = t.head), !l)) throw Error(d(453));
          return l;
        case "body":
          if (((l = t.body), !l)) throw Error(d(454));
          return l;
        default:
          throw Error(d(451));
      }
    }
    function Nu(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      Ai(l);
    }
    var Ct = new Map(),
      xd = new Set();
    function Fn(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var ie = A.d;
    A.d = { f: ch, r: fh, D: sh, C: oh, L: rh, m: dh, X: hh, S: yh, M: mh };
    function ch() {
      var l = ie.f(),
        t = Ln();
      return l || t;
    }
    function fh(l) {
      var t = ca(l);
      t !== null && t.tag === 5 && t.type === "form" ? Lo(t) : ie.r(l);
    }
    var Ga = typeof document > "u" ? null : document;
    function _d(l, t, e) {
      var a = Ga;
      if (a && typeof t == "string" && t) {
        var u = Et(t);
        (u = 'link[rel="' + l + '"][href="' + u + '"]'),
          typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
          xd.has(u) ||
            (xd.add(u),
            (l = { rel: l, crossOrigin: e, href: t }),
            a.querySelector(u) === null && ((t = a.createElement("link")), $l(t, "link", l), Ql(t), a.head.appendChild(t)));
      }
    }
    function sh(l) {
      ie.D(l), _d("dns-prefetch", l, null);
    }
    function oh(l, t) {
      ie.C(l, t), _d("preconnect", l, t);
    }
    function rh(l, t, e) {
      ie.L(l, t, e);
      var a = Ga;
      if (a && l && t) {
        var u = 'link[rel="preload"][as="' + Et(t) + '"]';
        t === "image" && e && e.imageSrcSet
          ? ((u += '[imagesrcset="' + Et(e.imageSrcSet) + '"]'), typeof e.imageSizes == "string" && (u += '[imagesizes="' + Et(e.imageSizes) + '"]'))
          : (u += '[href="' + Et(l) + '"]');
        var n = u;
        switch (t) {
          case "style":
            n = Xa(l);
            break;
          case "script":
            n = Qa(l);
        }
        Ct.has(n) ||
          ((l = N({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e)),
          Ct.set(n, l),
          a.querySelector(u) !== null ||
            (t === "style" && a.querySelector(ju(n))) ||
            (t === "script" && a.querySelector(qu(n))) ||
            ((t = a.createElement("link")), $l(t, "link", l), Ql(t), a.head.appendChild(t)));
      }
    }
    function dh(l, t) {
      ie.m(l, t);
      var e = Ga;
      if (e && l) {
        var a = t && typeof t.as == "string" ? t.as : "script",
          u = 'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(l) + '"]',
          n = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Qa(l);
        }
        if (!Ct.has(n) && ((l = N({ rel: "modulepreload", href: l }, t)), Ct.set(n, l), e.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(qu(n))) return;
          }
          (a = e.createElement("link")), $l(a, "link", l), Ql(a), e.head.appendChild(a);
        }
      }
    }
    function yh(l, t, e) {
      ie.S(l, t, e);
      var a = Ga;
      if (a && l) {
        var u = fa(a).hoistableStyles,
          n = Xa(l);
        t = t || "default";
        var i = u.get(n);
        if (!i) {
          var c = { loading: 0, preload: null };
          if ((i = a.querySelector(ju(n)))) c.loading = 5;
          else {
            (l = N({ rel: "stylesheet", href: l, "data-precedence": t }, e)), (e = Ct.get(n)) && Af(l, e);
            var f = (i = a.createElement("link"));
            Ql(f),
              $l(f, "link", l),
              (f._p = new Promise(function (h, g) {
                (f.onload = h), (f.onerror = g);
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
    function hh(l, t) {
      ie.X(l, t);
      var e = Ga;
      if (e && l) {
        var a = fa(e).hoistableScripts,
          u = Qa(l),
          n = a.get(u);
        n ||
          ((n = e.querySelector(qu(u))),
          n ||
            ((l = N({ src: l, async: !0 }, t)),
            (t = Ct.get(u)) && xf(l, t),
            (n = e.createElement("script")),
            Ql(n),
            $l(n, "link", l),
            e.head.appendChild(n)),
          (n = { type: "script", instance: n, count: 1, state: null }),
          a.set(u, n));
      }
    }
    function mh(l, t) {
      ie.M(l, t);
      var e = Ga;
      if (e && l) {
        var a = fa(e).hoistableScripts,
          u = Qa(l),
          n = a.get(u);
        n ||
          ((n = e.querySelector(qu(u))),
          n ||
            ((l = N({ src: l, async: !0, type: "module" }, t)),
            (t = Ct.get(u)) && xf(l, t),
            (n = e.createElement("script")),
            Ql(n),
            $l(n, "link", l),
            e.head.appendChild(n)),
          (n = { type: "script", instance: n, count: 1, state: null }),
          a.set(u, n));
      }
    }
    function Od(l, t, e, a) {
      var u = (u = $.current) ? Fn(u) : null;
      if (!u) throw Error(d(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string"
            ? ((t = Xa(e.href)),
              (e = fa(u).hoistableStyles),
              (a = e.get(t)),
              a || ((a = { type: "style", instance: null, count: 0, state: null }), e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            l = Xa(e.href);
            var n = fa(u).hoistableStyles,
              i = n.get(l);
            if (
              (i ||
                ((u = u.ownerDocument || u),
                (i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
                n.set(l, i),
                (n = u.querySelector(ju(l))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
                Ct.has(l) ||
                  ((e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy,
                  }),
                  Ct.set(l, e),
                  n || vh(u, l, e, i.state))),
              t && a === null)
            )
              throw Error(d(528, ""));
            return i;
          }
          if (t && a !== null) throw Error(d(529, ""));
          return null;
        case "script":
          return (
            (t = e.async),
            (e = e.src),
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol"
              ? ((t = Qa(e)),
                (e = fa(u).hoistableScripts),
                (a = e.get(t)),
                a || ((a = { type: "script", instance: null, count: 0, state: null }), e.set(t, a)),
                a)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(d(444, l));
      }
    }
    function Xa(l) {
      return 'href="' + Et(l) + '"';
    }
    function ju(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function Md(l) {
      return N({}, l, { "data-precedence": l.precedence, precedence: null });
    }
    function vh(l, t, e, a) {
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
          $l(t, "link", e),
          Ql(t),
          l.head.appendChild(t));
    }
    function Qa(l) {
      return '[src="' + Et(l) + '"]';
    }
    function qu(l) {
      return "script[async]" + l;
    }
    function Dd(l, t, e) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case "style":
            var a = l.querySelector('style[data-href~="' + Et(e.href) + '"]');
            if (a) return (t.instance = a), Ql(a), a;
            var u = N({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
            return (a = (l.ownerDocument || l).createElement("style")), Ql(a), $l(a, "style", u), In(a, e.precedence, l), (t.instance = a);
          case "stylesheet":
            u = Xa(e.href);
            var n = l.querySelector(ju(u));
            if (n) return (t.state.loading |= 4), (t.instance = n), Ql(n), n;
            (a = Md(e)), (u = Ct.get(u)) && Af(a, u), (n = (l.ownerDocument || l).createElement("link")), Ql(n);
            var i = n;
            return (
              (i._p = new Promise(function (c, f) {
                (i.onload = c), (i.onerror = f);
              })),
              $l(n, "link", a),
              (t.state.loading |= 4),
              In(n, e.precedence, l),
              (t.instance = n)
            );
          case "script":
            return (
              (n = Qa(e.src)),
              (u = l.querySelector(qu(n)))
                ? ((t.instance = u), Ql(u), u)
                : ((a = e),
                  (u = Ct.get(n)) && ((a = N({}, e)), xf(a, u)),
                  (l = l.ownerDocument || l),
                  (u = l.createElement("script")),
                  Ql(u),
                  $l(u, "link", a),
                  l.head.appendChild(u),
                  (t.instance = u))
            );
          case "void":
            return null;
          default:
            throw Error(d(443, t.type));
        }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), In(a, e.precedence, l));
      return t.instance;
    }
    function In(l, t, e) {
      for (
        var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
          u = a.length ? a[a.length - 1] : null,
          n = u,
          i = 0;
        i < a.length;
        i++
      ) {
        var c = a[i];
        if (c.dataset.precedence === t) n = c;
        else if (n !== u) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
    }
    function Af(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title);
    }
    function xf(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity);
    }
    var Pn = null;
    function Ud(l, t, e) {
      if (Pn === null) {
        var a = new Map(),
          u = (Pn = new Map());
        u.set(e, a);
      } else (u = Pn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
      if (a.has(l)) return a;
      for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
        var n = e[u];
        if (!(n[Ia] || n[Jl] || (l === "link" && n.getAttribute("rel") === "stylesheet")) && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = n.getAttribute(t) || "";
          i = l + i;
          var c = a.get(i);
          c ? c.push(n) : a.set(i, [n]);
        }
      }
      return a;
    }
    function Cd(l, t, e) {
      (l = l.ownerDocument || l), l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
    }
    function gh(l, t, e) {
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
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
            return !0;
      }
      return !1;
    }
    function Rd(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function Sh(l, t, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var u = Xa(a.href),
            n = t.querySelector(ju(u));
          if (n) {
            (t = n._p),
              t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, (l = li.bind(l)), t.then(l, l)),
              (e.state.loading |= 4),
              (e.instance = n),
              Ql(n);
            return;
          }
          (n = t.ownerDocument || t), (a = Md(a)), (u = Ct.get(u)) && Af(a, u), (n = n.createElement("link")), Ql(n);
          var i = n;
          (i._p = new Promise(function (c, f) {
            (i.onload = c), (i.onerror = f);
          })),
            $l(n, "link", a),
            (e.instance = n);
        }
        l.stylesheets === null && (l.stylesheets = new Map()),
          l.stylesheets.set(e, t),
          (t = e.state.preload) &&
            (e.state.loading & 3) === 0 &&
            (l.count++, (e = li.bind(l)), t.addEventListener("load", e), t.addEventListener("error", e));
      }
    }
    var _f = 0;
    function bh(l, t) {
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
              0 < l.imgBytes && _f === 0 && (_f = 62500 * Py());
              var u = setTimeout(function () {
                if (((l.waitingForImages = !1), l.count === 0 && (l.stylesheets && ei(l, l.stylesheets), l.unsuspend))) {
                  var n = l.unsuspend;
                  (l.unsuspend = null), n();
                }
              }, (l.imgBytes > _f ? 50 : 800) + t);
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
      (l.stylesheets = null), l.unsuspend !== null && (l.count++, (ti = new Map()), t.forEach(ph, l), (ti = null), li.call(l));
    }
    function ph(l, t) {
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
        (u = t.instance),
          (i = u.getAttribute("data-precedence")),
          (n = e.get(i) || a),
          n === a && e.set(null, u),
          e.set(i, u),
          this.count++,
          (a = li.bind(this)),
          u.addEventListener("load", a),
          u.addEventListener("error", a),
          n ? n.parentNode.insertBefore(u, n.nextSibling) : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(u, l.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Bu = { $$typeof: jl, Provider: null, Consumer: null, _currentValue: R, _currentValue2: R, _threadCount: 0 };
    function zh(l, t, e, a, u, n, i, c, f) {
      (this.tag = 1),
        (this.containerInfo = l),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = pi(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = pi(0)),
        (this.hiddenUpdates = pi(null)),
        (this.identifierPrefix = a),
        (this.onUncaughtError = u),
        (this.onCaughtError = n),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = f),
        (this.incompleteTransitions = new Map());
    }
    function Hd(l, t, e, a, u, n, i, c, f, h, g, T) {
      return (
        (l = new zh(l, t, e, i, f, h, g, T, c)),
        (t = 1),
        n === !0 && (t |= 24),
        (n = mt(3, null, null, t)),
        (l.current = n),
        (n.stateNode = l),
        (t = uc()),
        t.refCount++,
        (l.pooledCache = t),
        t.refCount++,
        (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
        fc(n),
        l
      );
    }
    function Nd(l) {
      return l ? ((l = Sa), l) : Sa;
    }
    function jd(l, t, e, a, u, n) {
      (u = Nd(u)),
        a.context === null ? (a.context = u) : (a.pendingContext = u),
        (a = me(t)),
        (a.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (a.callback = n),
        (e = ve(l, a, t)),
        e !== null && (dt(e, l, t), mu(e, l, t));
    }
    function qd(l, t) {
      if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
        var e = l.retryLane;
        l.retryLane = e !== 0 && e < t ? e : t;
      }
    }
    function Of(l, t) {
      qd(l, t), (l = l.alternate) && qd(l, t);
    }
    function Bd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = Xe(l, 67108864);
        t !== null && dt(t, l, 67108864), Of(l, 67108864);
      }
    }
    function Yd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = pt();
        t = zi(t);
        var e = Xe(l, t);
        e !== null && dt(e, l, t), Of(l, t);
      }
    }
    var ai = !0;
    function Th(l, t, e, a) {
      var u = S.T;
      S.T = null;
      var n = A.p;
      try {
        (A.p = 2), Mf(l, t, e, a);
      } finally {
        (A.p = n), (S.T = u);
      }
    }
    function Eh(l, t, e, a) {
      var u = S.T;
      S.T = null;
      var n = A.p;
      try {
        (A.p = 8), Mf(l, t, e, a);
      } finally {
        (A.p = n), (S.T = u);
      }
    }
    function Mf(l, t, e, a) {
      if (ai) {
        var u = Df(a);
        if (u === null) hf(l, t, a, ui, e), Xd(l, a);
        else if (xh(u, l, t, e, a)) a.stopPropagation();
        else if ((Xd(l, a), t & 4 && -1 < Ah.indexOf(l))) {
          for (; u !== null; ) {
            var n = ca(u);
            if (n !== null)
              switch (n.tag) {
                case 3:
                  if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                    var i = je(n.pendingLanes);
                    if (i !== 0) {
                      var c = n;
                      for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                        var f = 1 << (31 - rl(i));
                        (c.entanglements[1] |= f), (i &= ~f);
                      }
                      Xt(n), (ol & 6) === 0 && ((Xn = tt() + 500), Cu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (c = Xe(n, 2)), c !== null && dt(c, n, 2), Ln(), Of(n, 2);
              }
            if (((n = Df(a)), n === null && hf(l, t, a, ui, e), n === u)) break;
            u = n;
          }
          u !== null && a.stopPropagation();
        } else hf(l, t, a, null, e);
      }
    }
    function Df(l) {
      return (l = Ui(l)), Uf(l);
    }
    var ui = null;
    function Uf(l) {
      if (((ui = null), (l = ia(l)), l !== null)) {
        var t = Z(l);
        if (t === null) l = null;
        else {
          var e = t.tag;
          if (e === 13) {
            if (((l = W(t)), l !== null)) return l;
            l = null;
          } else if (e === 31) {
            if (((l = ll(t)), l !== null)) return l;
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
          switch (Ju()) {
            case aa:
              return 2;
            case ua:
              return 8;
            case M:
            case V:
              return 32;
            case Kl:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Cf = !1,
      Oe = null,
      Me = null,
      De = null,
      Yu = new Map(),
      Gu = new Map(),
      Ue = [],
      Ah =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " "
        );
    function Xd(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          Oe = null;
          break;
        case "dragenter":
        case "dragleave":
          Me = null;
          break;
        case "mouseover":
        case "mouseout":
          De = null;
          break;
        case "pointerover":
        case "pointerout":
          Yu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Gu.delete(t.pointerId);
      }
    }
    function Xu(l, t, e, a, u, n) {
      return l === null || l.nativeEvent !== n
        ? ((l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }),
          t !== null && ((t = ca(t)), t !== null && Bd(t)),
          l)
        : ((l.eventSystemFlags |= a), (t = l.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), l);
    }
    function xh(l, t, e, a, u) {
      switch (t) {
        case "focusin":
          return (Oe = Xu(Oe, l, t, e, a, u)), !0;
        case "dragenter":
          return (Me = Xu(Me, l, t, e, a, u)), !0;
        case "mouseover":
          return (De = Xu(De, l, t, e, a, u)), !0;
        case "pointerover":
          var n = u.pointerId;
          return Yu.set(n, Xu(Yu.get(n) || null, l, t, e, a, u)), !0;
        case "gotpointercapture":
          return (n = u.pointerId), Gu.set(n, Xu(Gu.get(n) || null, l, t, e, a, u)), !0;
      }
      return !1;
    }
    function Qd(l) {
      var t = ia(l.target);
      if (t !== null) {
        var e = Z(t);
        if (e !== null) {
          if (((t = e.tag), t === 13)) {
            if (((t = W(e)), t !== null)) {
              (l.blockedOn = t),
                ls(l.priority, function () {
                  Yd(e);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = ll(e)), t !== null)) {
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
        var e = Df(l.nativeEvent);
        if (e === null) {
          e = l.nativeEvent;
          var a = new e.constructor(e.type, e);
          (Di = a), e.target.dispatchEvent(a), (Di = null);
        } else return (t = ca(e)), t !== null && Bd(t), (l.blockedOn = e), !1;
        t.shift();
      }
      return !0;
    }
    function Ld(l, t, e) {
      ni(l) && e.delete(t);
    }
    function _h() {
      (Cf = !1),
        Oe !== null && ni(Oe) && (Oe = null),
        Me !== null && ni(Me) && (Me = null),
        De !== null && ni(De) && (De = null),
        Yu.forEach(Ld),
        Gu.forEach(Ld);
    }
    function ii(l, t) {
      l.blockedOn === t && ((l.blockedOn = null), Cf || ((Cf = !0), b.unstable_scheduleCallback(b.unstable_NormalPriority, _h)));
    }
    var ci = null;
    function Zd(l) {
      ci !== l &&
        ((ci = l),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
          ci === l && (ci = null);
          for (var t = 0; t < l.length; t += 3) {
            var e = l[t],
              a = l[t + 1],
              u = l[t + 2];
            if (typeof a != "function") {
              if (Uf(a || e) === null) continue;
              break;
            }
            var n = ca(e);
            n !== null && (l.splice(t, 3), (t -= 3), Mc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
          }
        }));
    }
    function La(l) {
      function t(f) {
        return ii(f, l);
      }
      Oe !== null && ii(Oe, l), Me !== null && ii(Me, l), De !== null && ii(De, l), Yu.forEach(t), Gu.forEach(t);
      for (var e = 0; e < Ue.length; e++) {
        var a = Ue[e];
        a.blockedOn === l && (a.blockedOn = null);
      }
      for (; 0 < Ue.length && ((e = Ue[0]), e.blockedOn === null); ) Qd(e), e.blockedOn === null && Ue.shift();
      if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
        for (a = 0; a < e.length; a += 3) {
          var u = e[a],
            n = e[a + 1],
            i = u[it] || null;
          if (typeof n == "function") i || Zd(e);
          else if (i) {
            var c = null;
            if (n && n.hasAttribute("formAction")) {
              if (((u = n), (i = n[it] || null))) c = i.formAction;
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
            (a = !0),
              navigation.removeEventListener("navigate", l),
              navigation.removeEventListener("navigatesuccess", t),
              navigation.removeEventListener("navigateerror", t),
              u !== null && (u(), (u = null));
          }
        );
      }
    }
    function Rf(l) {
      this._internalRoot = l;
    }
    (fi.prototype.render = Rf.prototype.render =
      function (l) {
        var t = this._internalRoot;
        if (t === null) throw Error(d(409));
        var e = t.current,
          a = pt();
        jd(e, a, l, t, null, null);
      }),
      (fi.prototype.unmount = Rf.prototype.unmount =
        function () {
          var l = this._internalRoot;
          if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            jd(l.current, 2, null, l, null, null), Ln(), (t[na] = null);
          }
        });
    function fi(l) {
      this._internalRoot = l;
    }
    fi.prototype.unstable_scheduleHydration = function (l) {
      if (l) {
        var t = Pf();
        l = { blockedOn: null, target: l, priority: t };
        for (var e = 0; e < Ue.length && t !== 0 && t < Ue[e].priority; e++);
        Ue.splice(e, 0, l), e === 0 && Qd(l);
      }
    };
    var Kd = Y.version;
    if (Kd !== "19.2.0") throw Error(d(527, Kd, "19.2.0"));
    A.findDOMNode = function (l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(d(188)) : ((l = Object.keys(l).join(",")), Error(d(268, l)));
      return (l = E(t)), (l = l !== null ? G(l) : null), (l = l === null ? null : l.stateNode), l;
    };
    var Oh = { bundleType: 0, version: "19.2.0", rendererPackageName: "react-dom", currentDispatcherRef: S, reconcilerVersion: "19.2.0" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!si.isDisabled && si.supportsFiber)
        try {
          (Xl = si.inject(Oh)), (_l = si);
        } catch {}
    }
    return (
      (Va.createRoot = function (l, t) {
        if (!L(l)) throw Error(d(299));
        var e = !1,
          a = "",
          u = Io,
          n = Po,
          i = lr;
        return (
          t != null &&
            (t.unstable_strictMode === !0 && (e = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
            t.onCaughtError !== void 0 && (n = t.onCaughtError),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
          (t = Hd(l, 1, !1, null, null, e, a, null, u, n, i, Vd)),
          (l[na] = t.current),
          yf(l),
          new Rf(t)
        );
      }),
      (Va.hydrateRoot = function (l, t, e) {
        if (!L(l)) throw Error(d(299));
        var a = !1,
          u = "",
          n = Io,
          i = Po,
          c = lr,
          f = null;
        return (
          e != null &&
            (e.unstable_strictMode === !0 && (a = !0),
            e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
            e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
            e.onCaughtError !== void 0 && (i = e.onCaughtError),
            e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
            e.formState !== void 0 && (f = e.formState)),
          (t = Hd(l, 1, !0, t, e ?? null, a, u, f, n, i, c, Vd)),
          (t.context = Nd(null)),
          (e = t.current),
          (a = pt()),
          (a = zi(a)),
          (u = me(a)),
          (u.callback = null),
          ve(e, u, a),
          (e = a),
          (t.current.lanes = e),
          Fa(t, e),
          Xt(t),
          (l[na] = t.current),
          yf(l),
          new fi(t)
        );
      }),
      (Va.version = "19.2.0"),
      Va
    );
  }
  var Vf;
  function l0() {
    if (Vf) return yi.exports;
    Vf = 1;
    function b() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
        } catch (Y) {
          console.error(Y);
        }
    }
    return b(), (yi.exports = Pd()), yi.exports;
  }
  var t0 = l0();
  const e0 = Hf(t0);
  var a0 = Lf();
  function u0({ isRegistered: b, userName: Y, onLogin: O, onRegister: d, onLogout: L, onGuestLogout: Z }) {
    return U.jsxs("div", {
      style: { background: "#e8e8e8", borderBottom: "1px solid #ccc" },
      children: [
        U.jsx("div", {
          style: { padding: "6px", textAlign: "center", fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px", color: "#555" },
          children: "TROLLBOX",
        }),
        U.jsx("div", {
          style: { display: "flex", gap: "4px", padding: "6px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" },
          children: b
            ? U.jsxs(U.Fragment, {
                children: [
                  U.jsxs("span", {
                    style: {
                      fontSize: "11px",
                      color: "#1976d2",
                      fontWeight: "600",
                      padding: "4px 8px",
                      background: "#e3f2fd",
                      borderRadius: "4px",
                      border: "1px solid #90caf9",
                    },
                    children: ["👤 ", Y],
                  }),
                  U.jsx("button", {
                    onClick: L,
                    style: {
                      padding: "4px 8px",
                      fontSize: "11px",
                      border: "1px solid #d32f2f",
                      borderRadius: "4px",
                      background: "#d32f2f",
                      color: "#fff",
                      cursor: "pointer",
                    },
                    children: "Logout",
                  }),
                ],
              })
            : U.jsxs(U.Fragment, {
                children: [
                  U.jsx("button", {
                    onClick: d,
                    style: {
                      padding: "4px 8px",
                      fontSize: "11px",
                      border: "1px solid #1976d2",
                      borderRadius: "4px",
                      background: "#1976d2",
                      color: "#fff",
                      cursor: "pointer",
                    },
                    children: "Create Account",
                  }),
                  U.jsx("button", {
                    onClick: O,
                    style: {
                      padding: "4px 8px",
                      fontSize: "11px",
                      border: "1px solid #1976d2",
                      borderRadius: "4px",
                      background: "#fff",
                      color: "#1976d2",
                      cursor: "pointer",
                    },
                    children: "Login",
                  }),
                  Y &&
                    U.jsxs(U.Fragment, {
                      children: [
                        U.jsxs("span", {
                          style: {
                            fontSize: "11px",
                            color: "#666",
                            fontWeight: "500",
                            padding: "4px 8px",
                            background: "#f5f5f5",
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                          },
                          children: ["👤 ", Y],
                        }),
                        U.jsx("button", {
                          onClick: Z,
                          style: {
                            padding: "4px 8px",
                            fontSize: "11px",
                            border: "1px solid #999",
                            borderRadius: "4px",
                            background: "#fff",
                            color: "#555",
                            cursor: "pointer",
                          },
                          children: "Logout Guest",
                        }),
                      ],
                    }),
                ],
              }),
        }),
      ],
    });
  }
  const Kf = (b) => (b ? b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "'") : "");
  function n0({ message: b, currentUser: Y }) {
    const O = b.user === Y,
      d = b.isRegistered === !0;
    return U.jsxs("div", {
      "data-msg-id": b.id,
      style: { display: "flex", flexDirection: "column", marginBottom: "8px", maxWidth: "80%", alignSelf: O ? "flex-end" : "flex-start" },
      children: [
        U.jsx("div", {
          style: {
            fontSize: "12px",
            marginBottom: "2px",
            textAlign: O ? "right" : "left",
            color: d ? "#1976d2" : "#555",
            fontWeight: d ? "bold" : "normal",
          },
          children: Kf(b.user),
        }),
        U.jsx("div", {
          style: {
            padding: "6px 10px",
            borderRadius: "12px",
            fontSize: "14px",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            backgroundColor: O ? "#1976d2" : "#e0e0e0",
            color: O ? "#fff" : "#000",
          },
          children: Kf(b.text),
        }),
      ],
    });
  }
  const i0 = "https://user.ucbg.github.io/chat-api";
  function c0({ onSave: b, onLogin: Y, onRegister: O }) {
    const [d, L] = q.useState(""),
      [Z, W] = q.useState(!1),
      [ll, D] = q.useState(""),
      E = async () => {
        const G = d.trim();
        if ((D(""), !G)) {
          D("Please enter a nickname to join the chat.");
          return;
        }
        W(!0);
        try {
          const J = await (
            await fetch(`${i0}/check-username.php`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: G }),
            })
          ).json();
          if (J.success && J.isRegistered) {
            D("This username is registered. Please login or choose another name."), W(!1);
            return;
          }
          b(G);
        } catch (N) {
          console.error("Username check error:", N), b(G);
        } finally {
          W(!1);
        }
      };
    return U.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.98)",
        zIndex: 2e3,
        padding: "20px",
      },
      children: U.jsxs("div", {
        style: { width: "100%", maxWidth: "280px", display: "flex", flexDirection: "column", gap: "16px" },
        children: [
          U.jsxs("div", {
            style: { textAlign: "center", marginBottom: "8px" },
            children: [
              U.jsx("h3", { style: { margin: "0 0 8px 0", fontSize: "20px", color: "#333", fontWeight: "600" }, children: "Welcome to Chat! 💬" }),
              U.jsx("p", {
                style: { margin: "0 0 12px 0", fontSize: "13px", color: "#666", lineHeight: "1.4" },
                children: "Choose an available nickname to join the conversation",
              }),
              U.jsx("div", {
                style: {
                  padding: "10px 12px",
                  fontSize: "12px",
                  color: "#d97706",
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fde68a",
                  borderRadius: "8px",
                  textAlign: "center",
                  lineHeight: "1.5",
                },
                children: "⚠️ Chat and have fun, but please don't share personal information.",
              }),
            ],
          }),
          U.jsx("input", {
            type: "text",
            placeholder: "Enter your nickname...",
            value: d,
            onChange: (G) => {
              L(G.target.value), D("");
            },
            onKeyPress: (G) => G.key === "Enter" && !Z && E(),
            disabled: Z,
            maxLength: 32,
            style: { padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", opacity: Z ? 0.6 : 1 },
          }),
          ll &&
            U.jsx("div", {
              style: {
                padding: "10px 12px",
                fontSize: "12px",
                color: "#b40000",
                backgroundColor: "#ffecec",
                border: "1px solid #ffb5b5",
                borderRadius: "8px",
                textAlign: "center",
                lineHeight: "1.4",
              },
              children: ll,
            }),
          U.jsx("button", {
            onClick: E,
            disabled: Z,
            style: {
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: Z ? "not-allowed" : "pointer",
              opacity: Z ? 0.6 : 1,
              transition: "all 0.2s",
            },
            children: Z ? "Checking..." : "Join Chat",
          }),
          U.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "12px", margin: "8px 0" },
            children: [
              U.jsx("div", { style: { flex: 1, height: "1px", background: "#ddd" } }),
              U.jsx("span", { style: { fontSize: "12px", color: "#999" }, children: "or" }),
              U.jsx("div", { style: { flex: 1, height: "1px", background: "#ddd" } }),
            ],
          }),
          U.jsxs("div", {
            style: { display: "flex", gap: "8px" },
            children: [
              U.jsx("button", {
                onClick: Y,
                disabled: Z,
                style: {
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #1976d2",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  color: "#1976d2",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: Z ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                },
                children: "Login",
              }),
              U.jsx("button", {
                onClick: O,
                disabled: Z,
                style: {
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #1976d2",
                  borderRadius: "8px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "500",
                  cursor: Z ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                },
                children: "Create Account",
              }),
            ],
          }),
          U.jsx("p", {
            style: { margin: "8px 0 0 0", fontSize: "11px", color: "#999", textAlign: "center", lineHeight: "1.4" },
            children: "Guest nicknames are temporary. Create an account to secure your username.",
          }),
        ],
      }),
    });
  }
  function f0({ mode: b, onClose: Y, onSubmit: O, isLoading: d, errorMessage: L, onForgotPassword: Z, successMessage: W }) {
    const [ll, D] = q.useState({ name: "", email: "", password: "", confirmPassword: "" }),
      [E, G] = q.useState(""),
      N = (k) => {
        if ((k.preventDefault(), G(""), b === "register" && ll.password !== ll.confirmPassword)) {
          G("Passwords do not match");
          return;
        }
        O(ll);
      },
      J = { login: "Login", register: "Create Account", forgotPassword: "Forgot Password" };
    return U.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255,255,255,0.98)",
        zIndex: 3e3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      },
      children: U.jsxs("div", {
        style: { width: "100%", maxWidth: "280px" },
        children: [
          U.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: "18px", color: "#333", textAlign: "center" }, children: J[b] }),
          U.jsxs("form", {
            onSubmit: N,
            style: { display: "flex", flexDirection: "column", gap: "12px" },
            children: [
              b === "register" &&
                U.jsx("input", {
                  type: "text",
                  placeholder: "Name",
                  value: ll.name,
                  onChange: (k) => D({ ...ll, name: k.target.value }),
                  required: !0,
                  maxLength: 32,
                  style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                }),
              (b === "login" || b === "register" || b === "forgotPassword") &&
                U.jsx("input", {
                  type: "email",
                  placeholder: "Email",
                  value: ll.email,
                  onChange: (k) => D({ ...ll, email: k.target.value }),
                  required: !0,
                  style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                }),
              (b === "login" || b === "register") &&
                U.jsxs(U.Fragment, {
                  children: [
                    U.jsx("input", {
                      type: "password",
                      placeholder: "Password (min 6 characters)",
                      value: ll.password,
                      onChange: (k) => {
                        D({ ...ll, password: k.target.value }), G("");
                      },
                      required: !0,
                      minLength: 6,
                      style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                    }),
                    b === "register" &&
                      U.jsx("input", {
                        type: "password",
                        placeholder: "Confirm Password",
                        value: ll.confirmPassword,
                        onChange: (k) => {
                          D({ ...ll, confirmPassword: k.target.value }), G("");
                        },
                        required: !0,
                        minLength: 6,
                        style: { padding: "10px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" },
                      }),
                  ],
                }),
              b === "login" &&
                Z &&
                U.jsx("div", {
                  style: { textAlign: "right" },
                  children: U.jsx("button", {
                    type: "button",
                    onClick: Z,
                    style: {
                      background: "none",
                      border: "none",
                      color: "#1976d2",
                      fontSize: "12px",
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: 0,
                    },
                    children: "Forgot password?",
                  }),
                }),
              b === "register" &&
                !L &&
                !E &&
                U.jsx("div", {
                  style: {
                    padding: "8px 10px",
                    fontSize: "11px",
                    color: "#0b63c8",
                    backgroundColor: "#eef5ff",
                    border: "1px solid #bcd8ff",
                    borderRadius: "8px",
                    lineHeight: "1.4",
                  },
                  children: "After registration, please login with your credentials. No confirmation email will be sent.",
                }),
              b === "forgotPassword" &&
                !L &&
                !E &&
                U.jsx("div", {
                  style: {
                    padding: "8px 10px",
                    fontSize: "11px",
                    color: "#0b63c8",
                    backgroundColor: "#eef5ff",
                    border: "1px solid #bcd8ff",
                    borderRadius: "8px",
                    lineHeight: "1.4",
                  },
                  children: "Enter your email address and we'll send you a link to reset your password.",
                }),
              W &&
                U.jsx("div", {
                  style: {
                    padding: "10px 12px",
                    fontSize: "12px",
                    color: "#0f7a3a",
                    backgroundColor: "#ecfff2",
                    border: "1px solid #b9f0cf",
                    borderRadius: "8px",
                    textAlign: "center",
                    lineHeight: "1.4",
                  },
                  children: W,
                }),
              (L || E) &&
                !W &&
                U.jsx("div", {
                  style: {
                    padding: "8px 10px",
                    fontSize: "12px",
                    color: "#b40000",
                    backgroundColor: "#ffecec",
                    border: "1px solid #ffb5b5",
                    borderRadius: "8px",
                    textAlign: "center",
                  },
                  children: L || E,
                }),
              W
                ? U.jsx("button", {
                    type: "button",
                    onClick: () => {
                      Y();
                    },
                    style: {
                      width: "100%",
                      padding: "10px",
                      border: "none",
                      borderRadius: "8px",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "8px",
                    },
                    children: "Back to Login",
                  })
                : U.jsxs("div", {
                    style: { display: "flex", gap: "8px", marginTop: "8px" },
                    children: [
                      U.jsx("button", {
                        type: "submit",
                        disabled: d,
                        style: {
                          flex: 1,
                          padding: "10px",
                          border: "none",
                          borderRadius: "8px",
                          backgroundColor: "#1976d2",
                          color: "#fff",
                          cursor: d ? "not-allowed" : "pointer",
                          opacity: d ? 0.6 : 1,
                          fontSize: "14px",
                          fontWeight: "500",
                        },
                        children: d ? "Please wait..." : b === "forgotPassword" ? "Send Reset Link" : "Submit",
                      }),
                      U.jsx("button", {
                        type: "button",
                        onClick: Y,
                        disabled: d,
                        style: {
                          flex: 1,
                          padding: "10px",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                          backgroundColor: "#fff",
                          color: "#666",
                          cursor: d ? "not-allowed" : "pointer",
                          fontSize: "14px",
                        },
                        children: b === "forgotPassword" ? "Back" : "Cancel",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  }
  const Ka = "https://user.ucbg.github.io/chat-api",
    Ja = (b, Y, O = 365) => {
      const d = new Date(Date.now() + O * 864e5).toUTCString();
      document.cookie = `${b}=${encodeURIComponent(Y)}; expires=${d}; path=/`;
    },
    s0 = (b) =>
      document.cookie.split("; ").reduce((Y, O) => {
        const d = O.split("=");
        return d[0] === b ? decodeURIComponent(d[1]) : Y;
      }, "");
  function o0(b) {
    const [Y, O] = q.useState(s0("chatAuthToken") || ""),
      [d, L] = q.useState(!1),
      [Z, W] = q.useState(!1);
    q.useEffect(() => {
      Y && ll();
    }, []);
    const ll = async () => {
      try {
        const k = await (
          await fetch(`${Ka}/verify-session.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: Y }),
          })
        ).json();
        return k.success && k.valid ? (L(!0), Ja("chatNick", k.user.name), k.user) : (O(""), Ja("chatAuthToken", ""), L(!1), null);
      } catch (J) {
        return console.error("Session verify error:", J), null;
      }
    };
    return {
      authToken: Y,
      isRegistered: d,
      isLoading: Z,
      handleRegister: async (J) => {
        W(!0);
        try {
          const nl = await (
            await fetch(`${Ka}/register.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(J) })
          ).json();
          return nl.success
            ? (b("Registration successful! Please login with your credentials.", "ok", 4e3), { success: !0 })
            : { success: !1, error: nl.error || "Registration failed" };
        } catch (k) {
          return console.error("Register error:", k), { success: !1, error: "Network error. Please try again." };
        } finally {
          W(!1);
        }
      },
      handleLogin: async (J) => {
        W(!0);
        try {
          const nl = await (
            await fetch(`${Ka}/login.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(J) })
          ).json();
          return nl.success
            ? (O(nl.token),
              Ja("chatAuthToken", nl.token),
              Ja("chatNick", nl.user.name),
              L(!0),
              b("Login successful!", "ok", 2e3),
              { success: !0, user: nl.user })
            : { success: !1, error: nl.error || "Login failed" };
        } catch (k) {
          return console.error("Login error:", k), { success: !1, error: "Network error. Please try again." };
        } finally {
          W(!1);
        }
      },
      handleLogout: async () => {
        W(!0);
        try {
          return (
            await fetch(`${Ka}/logout.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token: Y }) }),
            O(""),
            Ja("chatAuthToken", ""),
            L(!1),
            b("Logged out successfully", "ok", 2e3),
            { success: !0 }
          );
        } catch (J) {
          return console.error("Logout error:", J), b("Logout failed", "error", 3e3), { success: !1 };
        } finally {
          W(!1);
        }
      },
      handleForgotPassword: async (J) => {
        W(!0);
        try {
          const nl = await (
            await fetch(`${Ka}/forgot-password.php`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: J.email }),
            })
          ).json();
          return nl.success
            ? { success: !0, message: nl.message || "If this email is registered, you will receive a password reset link." }
            : { success: !1, error: nl.error || "Failed to send reset link" };
        } catch (k) {
          return console.error("Forgot password error:", k), { success: !1, error: "Network error. Please try again." };
        } finally {
          W(!1);
        }
      },
      verifySession: ll,
    };
  }
  const Qu = "https://user.ucbg.github.io/chat-api",
    r0 = 8e3,
    d0 = 2e4,
    Lu = 30,
    y0 = 100,
    h0 = 250,
    Zu = (b, Y, O = 365) => {
      const d = new Date(Date.now() + O * 864e5).toUTCString();
      document.cookie = `${b}=${encodeURIComponent(Y)}; expires=${d}; path=/`;
    },
    Jf = (b) =>
      document.cookie.split("; ").reduce((Y, O) => {
        const d = O.split("=");
        return d[0] === b ? decodeURIComponent(d[1]) : Y;
      }, ""),
    Pe = (b, Y, O = 365) => {
      Zu(b, String(Y), O);
    },
    wf = (b, Y = 0) => {
      const O = parseInt(Jf(b), 10);
      return Number.isFinite(O) ? O : Y;
    };
  function m0() {
    const [b, Y] = q.useState(!1),
      [O, d] = q.useState(Jf("chatNick") || ""),
      [L, Z] = q.useState([]),
      [W, ll] = q.useState(""),
      [D, E] = q.useState(wf("chatUnread", 0)),
      [G, N] = q.useState(wf("lastTimestamp", 0)),
      [J, k] = q.useState(0),
      [nl, Yl] = q.useState(!1),
      [at, Gl] = q.useState(!0),
      [Rt, jl] = q.useState(!0),
      [Il, yt] = q.useState({ text: "", type: "info", visible: !1 }),
      [El, F] = q.useState(0),
      [Pl, ut] = q.useState("Send"),
      [Qt, Zl] = q.useState(!1),
      [Dl, nt] = q.useState("login"),
      [Ht, zl] = q.useState(""),
      [S, A] = q.useState(""),
      R = q.useRef(null),
      al = q.useRef(null),
      sl = q.useRef(null),
      o = q.useRef(null),
      z = q.useRef(null),
      x = q.useRef(null),
      _ = q.useCallback((M, V = "info", Kl = 4e3) => {
        yt({ text: M, type: V, visible: !0 }),
          o.current && clearTimeout(o.current),
          (o.current = setTimeout(() => {
            yt((Ul) => ({ ...Ul, visible: !1 }));
          }, Kl));
      }, []),
      {
        authToken: X,
        isRegistered: $,
        isLoading: il,
        handleRegister: Vl,
        handleLogin: Tl,
        handleLogout: Re,
        handleForgotPassword: la,
        verifySession: wa,
      } = o0(_);
    q.useEffect(() => {
      (x.current = document.getElementById("chat-button")), x.current || console.error("Chat button not found");
    }, []),
      q.useEffect(() => {
        X &&
          wa().then((M) => {
            M && d(M.name);
          });
      }, []);
    const ka = q.useCallback(() => {
        if (!R.current) return !1;
        const { scrollHeight: M, scrollTop: V, clientHeight: Kl } = R.current;
        return M - V <= Kl + 50;
      }, []),
      lt = q.useCallback((M = !1) => {
        R.current &&
          requestAnimationFrame(() => {
            R.current?.scrollTo({ top: R.current.scrollHeight, behavior: M ? "smooth" : "auto" });
          });
      }, []),
      ta = q.useCallback(() => (L.length === 0 ? 0 : Math.min(...L.map((M) => M.id))), [L]),
      zt = q.useCallback(
        async (M = !1) => {
          try {
            const V = M ? `${Qu}/fetch.php?limit=${Lu}` : `${Qu}/fetch.php?since=${G}&limit=50`,
              Ul = await (await fetch(V)).json();
            if (!Ul.success) {
              console.error("Fetch error:", Ul.error), _("Could not load messages.", "error", 3e3);
              return;
            }
            const Ne = ka();
            if (M) {
              if (Ul.messages.length > 0) {
                Z(Ul.messages);
                const Xl = Math.max(...Ul.messages.map((ql) => ql.timestamp)),
                  _l = Math.min(...Ul.messages.map((ql) => ql.id));
                N(Xl), Pe("lastTimestamp", Xl), k(_l), Gl(_l !== 1);
              } else Gl(!1);
              setTimeout(() => lt(!1), 0);
            } else if (Ul.messages.length > 0) {
              let Xl = 0;
              const _l = new Set(L.map((rl) => rl.id));
              Ul.messages.forEach((rl) => {
                _l.has(rl.id) || (!b && rl.user !== O && Xl++);
              }),
                Z((rl) => {
                  const Lt = Ul.messages.filter((ce) => !_l.has(ce.id));
                  return [...rl, ...Lt];
                });
              const ql = Math.max(...Ul.messages.map((rl) => rl.timestamp));
              N(ql),
                Pe("lastTimestamp", ql),
                Xl > 0 &&
                  E((rl) => {
                    const Lt = rl + Xl;
                    return Pe("chatUnread", Lt), Lt;
                  }),
                Ne && setTimeout(() => lt(!0), 0);
            }
          } catch (V) {
            console.error("Fetch error:", V), _("Network error: failed to load messages.", "error", 3e3);
          }
        },
        [G, L, b, O, ka, lt, _]
      ),
      Vu = q.useCallback(async () => {
        const M = ta();
        if (nl || !at || M <= 1) return;
        Yl(!0);
        const V = R.current?.scrollTop || 0;
        try {
          const Ul = await (await fetch(`${Qu}/fetch-older.php?before_id=${M}&limit=${Lu}`)).json();
          if (!Ul.success) {
            console.error("Load older error:", Ul.error), _("Could not load older messages.", "error", 3e3);
            return;
          }
          const Xl = (Array.isArray(Ul.messages) ? Ul.messages : []).slice(0, Lu);
          if (Xl.length > 0) {
            const _l = new Set(L.map((rl) => rl.id)),
              ql = Xl.filter((rl) => !_l.has(rl.id));
            if (ql.length > 0) {
              const rl = R.current?.scrollHeight || 0;
              Z((ce) => [...ql, ...ce]),
                setTimeout(() => {
                  const bi = (R.current?.scrollHeight || 0) - rl;
                  R.current && (R.current.scrollTop = V + bi);
                }, 0);
              const Lt = Math.min(...ql.map((ce) => ce.id));
              k(Lt), (Xl.length < Lu || Lt === 1) && Gl(!1);
            }
          } else Gl(!1);
        } catch (Kl) {
          console.error("Load older error:", Kl), _("Network error: failed to load older messages.", "error", 3e3);
        } finally {
          Yl(!1);
        }
      }, [nl, at, L, ta, _]),
      Ku = q.useCallback(() => {
        if (!R.current) return;
        const M = R.current.scrollTop;
        M < y0 && !nl && at && Rt ? (jl(!1), Vu()) : M > h0 && jl(!0);
      }, [nl, at, Rt, Vu]);
    q.useEffect(() => {
      zt(!0);
    }, []),
      q.useEffect(
        () => (
          (sl.current = setInterval(() => {
            b || zt(!1);
          }, d0)),
          () => {
            sl.current && clearInterval(sl.current);
          }
        ),
        [b, zt]
      ),
      q.useEffect(
        () => (
          b ? (zt(!1), (al.current = setInterval(() => zt(!1), r0))) : al.current && (clearInterval(al.current), (al.current = null)),
          () => {
            al.current && clearInterval(al.current);
          }
        ),
        [b, zt]
      ),
      q.useEffect(() => {
        if (!x.current) return;
        let M = x.current.querySelector("#chat-badge");
        M ||
          ((M = document.createElement("span")),
          (M.id = "chat-badge"),
          (M.style.cssText = `
        position: absolute;
        top: 0px;
        right: 0px;
        background: red;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        display: none;
      `),
          x.current.appendChild(M)),
          O
            ? D > 0
              ? ((M.textContent = String(D)), (M.style.display = "block"))
              : (M.style.display = "none")
            : ((M.textContent = "1"), (M.style.display = "block"));
      }, [D, O]),
      q.useEffect(() => {
        if (El > Date.now()) {
          const M = () => {
            const V = Math.max(0, El - Date.now());
            if (V <= 0) ut("Send"), z.current && (clearInterval(z.current), (z.current = null));
            else {
              const Kl = Math.ceil(V / 1e3);
              ut(`Wait ${Kl}s`);
            }
          };
          return (
            M(),
            (z.current = setInterval(M, 250)),
            () => {
              z.current && clearInterval(z.current);
            }
          );
        } else ut("Send");
      }, [El]);
    const ea = q.useCallback(() => {
        Y((M) => {
          const V = !M;
          return V && (E(0), Pe("chatUnread", 0), setTimeout(() => lt(!0), 100)), V;
        });
      }, [lt]),
      Wa = q.useCallback(
        (M) => {
          if (!M || !M.trim()) {
            _("Please enter a nickname.", "warn", 2500);
            return;
          }
          d(M.trim()), Zu("chatNick", M.trim()), E(0), Pe("chatUnread", 0), _("Nickname saved.", "ok", 2e3);
        },
        [_]
      ),
      He = q.useCallback(async () => {
        if (!O) {
          _("Please save a nickname first.", "warn", 2500);
          return;
        }
        const M = W.trim();
        if (!M) {
          _("Empty messages cannot be sent.", "warn", 2e3);
          return;
        }
        const V = Date.now();
        if (El && V < El) {
          _("Please wait, rate limit in effect.", "warn", 2e3);
          return;
        }
        F(V + 15e3);
        try {
          const Kl = { user: O, text: M };
          X && (Kl.token = X);
          const Ne = await (
            await fetch(`${Qu}/send.php`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Kl) })
          ).json();
          if (!Ne.success) {
            const Xl = Ne.error || "Could not send.";
            _(Xl, "error", 4e3);
            return;
          }
          ll(""), await zt(!1), lt(!0), _("Message sent.", "ok", 1200);
        } catch (Kl) {
          console.error("Error sending message:", Kl), _("Network error: message not sent. Try again.", "error", 4e3);
        }
      }, [O, W, El, X, _, zt, lt]),
      gi = q.useCallback(
        (M) => {
          M.key === "Enter" && !M.shiftKey && (M.preventDefault(), He());
        },
        [He]
      ),
      Si = q.useCallback(() => {
        d(""), Zu("chatNick", ""), E(0), Pe("chatUnread", 0), _("Logged out. Enter a nickname to join again.", "ok", 2e3);
      }, [_]),
      tt = async (M) => {
        let V;
        if ((zl(""), A(""), Dl === "register")) (V = await Vl(M)), !V.success && V.error && zl(V.error);
        else if (Dl === "login") (V = await Tl(M)), V.success && V.user ? d(V.user.name) : !V.success && V.error && zl(V.error);
        else if (Dl === "forgotPassword")
          if (((V = await la(M)), V.success && V.message)) {
            A(V.message);
            return;
          } else !V.success && V.error && zl(V.error);
        V.success && (Zl(!1), zl(""), A(""));
      };
    q.useEffect(() => {
      if (!x.current) return;
      const M = (V) => {
        V.stopPropagation(), ea();
      };
      return (
        x.current.addEventListener("click", M),
        () => {
          x.current?.removeEventListener("click", M);
        }
      );
    }, [ea]),
      q.useEffect(() => {
        const M = () => {
          b && Y(!1);
        };
        return (
          document.addEventListener("click", M),
          () => {
            document.removeEventListener("click", M);
          }
        );
      }, [b]);
    const Ju = {
        info: { bg: "#eef5ff", fg: "#0b63c8", bd: "#bcd8ff" },
        warn: { bg: "#fff6e5", fg: "#9a6b00", bd: "#ffdfaa" },
        error: { bg: "#ffecec", fg: "#b40000", bd: "#ffb5b5" },
        ok: { bg: "#ecfff2", fg: "#0f7a3a", bd: "#b9f0cf" },
      },
      aa = Ju[Il.type] || Ju.info,
      ua = El > Date.now();
    return a0.createPortal(
      U.jsxs("div", {
        style: {
          position: "fixed",
          top: "80px",
          bottom: "0px",
          right: "0",
          width: "320px",
          backgroundColor: "#fff",
          boxShadow: "-4px 0 12px rgba(0,0,0,0.2)",
          borderRadius: "10px 0 0 0",
          transform: b ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1e3,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
        onClick: (M) => M.stopPropagation(),
        children: [
          U.jsx(u0, {
            isRegistered: $,
            userName: O,
            onLogin: () => {
              nt("login"), zl(""), A(""), Zl(!0);
            },
            onRegister: () => {
              nt("register"), zl(""), A(""), Zl(!0);
            },
            onLogout: async () => {
              (await Re()).success && (d(""), Zu("chatNick", ""));
            },
            onGuestLogout: Si,
          }),
          Qt &&
            U.jsx(f0, {
              mode: Dl,
              onClose: () => {
                Zl(!1), zl(""), A(""), Dl === "forgotPassword" && S && nt("login");
              },
              onSubmit: tt,
              isLoading: il,
              errorMessage: Ht,
              successMessage: S,
              onForgotPassword: () => {
                nt("forgotPassword"), zl(""), A("");
              },
            }),
          !O &&
            !Qt &&
            U.jsx(c0, {
              onSave: Wa,
              onLogin: () => {
                nt("login"), zl(""), Zl(!0);
              },
              onRegister: () => {
                nt("register"), zl(""), Zl(!0);
              },
            }),
          U.jsx("div", {
            ref: R,
            onScroll: Ku,
            style: {
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              filter: O ? "none" : "blur(5px)",
              opacity: O ? "1" : "0.3",
              pointerEvents: O ? "auto" : "none",
            },
            children: L.map((M) => U.jsx(n0, { message: M, currentUser: O }, M.id)),
          }),
          U.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              gap: "5px",
              filter: O ? "none" : "blur(5px)",
              opacity: O ? "1" : "0.3",
              pointerEvents: O ? "auto" : "none",
            },
            children: [
              U.jsx("textarea", {
                placeholder: "Message… (Shift+Enter = new line)",
                rows: 1,
                value: W,
                onChange: (M) => ll(M.target.value),
                onKeyDown: gi,
                style: {
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  resize: "none",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  maxHeight: "120px",
                  overflowY: "auto",
                },
              }),
              U.jsx("button", {
                onClick: He,
                disabled: ua,
                style: {
                  padding: "8px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  cursor: ua ? "not-allowed" : "pointer",
                  opacity: ua ? "0.6" : "1",
                },
                children: Pl,
              }),
              Il.visible &&
                U.jsx("div", {
                  style: {
                    fontSize: "12px",
                    padding: "6px 8px",
                    borderRadius: "8px",
                    border: "1px solid",
                    background: aa.bg,
                    color: aa.fg,
                    borderColor: aa.bd,
                  },
                  children: Il.text,
                }),
            ],
          }),
        ],
      }),
      document.body
    );
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", kf) : kf();
  function kf() {
    const b = document.createElement("div");
    (b.id = "chat-widget-root"), document.body.appendChild(b), e0.createRoot(b).render(U.jsx(Wd.StrictMode, { children: U.jsx(m0, {}) }));
  }
})();
