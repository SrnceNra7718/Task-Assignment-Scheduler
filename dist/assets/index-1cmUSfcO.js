function ly(r, e) {
  for (var s = 0; s < e.length; s++) {
    const i = e[s];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in r)) {
          const l = Object.getOwnPropertyDescriptor(i, o);
          l &&
            Object.defineProperty(
              r,
              o,
              l.get ? l : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const c of l.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = s(o);
    fetch(o.href, l);
  }
})();
function xp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Au = { exports: {} },
  Vi = {},
  Du = { exports: {} },
  Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf;
function uy() {
  if (nf) return Ie;
  nf = 1;
  var r = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function b(R) {
    return R === null || typeof R != "object"
      ? null
      : ((R = (g && R[g]) || R["@@iterator"]),
        typeof R == "function" ? R : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    j = {};
  function k(R, z, re) {
    ((this.props = R),
      (this.context = z),
      (this.refs = j),
      (this.updater = re || x));
  }
  ((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (R, z) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, R, z, "setState");
    }),
    (k.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    }));
  function P() {}
  P.prototype = k.prototype;
  function T(R, z, re) {
    ((this.props = R),
      (this.context = z),
      (this.refs = j),
      (this.updater = re || x));
  }
  var O = (T.prototype = new P());
  ((O.constructor = T), _(O, k.prototype), (O.isPureReactComponent = !0));
  var F = Array.isArray,
    q = Object.prototype.hasOwnProperty,
    Q = { current: null },
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(R, z, re) {
    var le,
      xe = {},
      ae = null,
      $e = null;
    if (z != null)
      for (le in (z.ref !== void 0 && ($e = z.ref),
      z.key !== void 0 && (ae = "" + z.key),
      z))
        q.call(z, le) && !I.hasOwnProperty(le) && (xe[le] = z[le]);
    var Oe = arguments.length - 2;
    if (Oe === 1) xe.children = re;
    else if (1 < Oe) {
      for (var Be = Array(Oe), dt = 0; dt < Oe; dt++)
        Be[dt] = arguments[dt + 2];
      xe.children = Be;
    }
    if (R && R.defaultProps)
      for (le in ((Oe = R.defaultProps), Oe))
        xe[le] === void 0 && (xe[le] = Oe[le]);
    return {
      $$typeof: r,
      type: R,
      key: ae,
      ref: $e,
      props: xe,
      _owner: Q.current,
    };
  }
  function ne(R, z) {
    return {
      $$typeof: r,
      type: R.type,
      key: z,
      ref: R.ref,
      props: R.props,
      _owner: R._owner,
    };
  }
  function fe(R) {
    return typeof R == "object" && R !== null && R.$$typeof === r;
  }
  function ke(R) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      R.replace(/[=:]/g, function (re) {
        return z[re];
      })
    );
  }
  var Pe = /\/+/g;
  function pe(R, z) {
    return typeof R == "object" && R !== null && R.key != null
      ? ke("" + R.key)
      : z.toString(36);
  }
  function be(R, z, re, le, xe) {
    var ae = typeof R;
    (ae === "undefined" || ae === "boolean") && (R = null);
    var $e = !1;
    if (R === null) $e = !0;
    else
      switch (ae) {
        case "string":
        case "number":
          $e = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case r:
            case e:
              $e = !0;
          }
      }
    if ($e)
      return (
        ($e = R),
        (xe = xe($e)),
        (R = le === "" ? "." + pe($e, 0) : le),
        F(xe)
          ? ((re = ""),
            R != null && (re = R.replace(Pe, "$&/") + "/"),
            be(xe, z, re, "", function (dt) {
              return dt;
            }))
          : xe != null &&
            (fe(xe) &&
              (xe = ne(
                xe,
                re +
                  (!xe.key || ($e && $e.key === xe.key)
                    ? ""
                    : ("" + xe.key).replace(Pe, "$&/") + "/") +
                  R
              )),
            z.push(xe)),
        1
      );
    if ((($e = 0), (le = le === "" ? "." : le + ":"), F(R)))
      for (var Oe = 0; Oe < R.length; Oe++) {
        ae = R[Oe];
        var Be = le + pe(ae, Oe);
        $e += be(ae, z, re, Be, xe);
      }
    else if (((Be = b(R)), typeof Be == "function"))
      for (R = Be.call(R), Oe = 0; !(ae = R.next()).done; )
        ((ae = ae.value),
          (Be = le + pe(ae, Oe++)),
          ($e += be(ae, z, re, Be, xe)));
    else if (ae === "object")
      throw (
        (z = String(R)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(R).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    return $e;
  }
  function De(R, z, re) {
    if (R == null) return R;
    var le = [],
      xe = 0;
    return (
      be(R, le, "", "", function (ae) {
        return z.call(re, ae, xe++);
      }),
      le
    );
  }
  function ee(R) {
    if (R._status === -1) {
      var z = R._result;
      ((z = z()),
        z.then(
          function (re) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = re));
          },
          function (re) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = re));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = z)));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var me = { current: null },
    B = { transition: null },
    X = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: Q,
    };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ie.Children = {
      map: De,
      forEach: function (R, z, re) {
        De(
          R,
          function () {
            z.apply(this, arguments);
          },
          re
        );
      },
      count: function (R) {
        var z = 0;
        return (
          De(R, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (R) {
        return (
          De(R, function (z) {
            return z;
          }) || []
        );
      },
      only: function (R) {
        if (!fe(R))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return R;
      },
    }),
    (Ie.Component = k),
    (Ie.Fragment = s),
    (Ie.Profiler = o),
    (Ie.PureComponent = T),
    (Ie.StrictMode = i),
    (Ie.Suspense = f),
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (Ie.act = Y),
    (Ie.cloneElement = function (R, z, re) {
      if (R == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            R +
            "."
        );
      var le = _({}, R.props),
        xe = R.key,
        ae = R.ref,
        $e = R._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((ae = z.ref), ($e = Q.current)),
          z.key !== void 0 && (xe = "" + z.key),
          R.type && R.type.defaultProps)
        )
          var Oe = R.type.defaultProps;
        for (Be in z)
          q.call(z, Be) &&
            !I.hasOwnProperty(Be) &&
            (le[Be] = z[Be] === void 0 && Oe !== void 0 ? Oe[Be] : z[Be]);
      }
      var Be = arguments.length - 2;
      if (Be === 1) le.children = re;
      else if (1 < Be) {
        Oe = Array(Be);
        for (var dt = 0; dt < Be; dt++) Oe[dt] = arguments[dt + 2];
        le.children = Oe;
      }
      return {
        $$typeof: r,
        type: R.type,
        key: xe,
        ref: ae,
        props: le,
        _owner: $e,
      };
    }),
    (Ie.createContext = function (R) {
      return (
        (R = {
          $$typeof: c,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (R.Provider = { $$typeof: l, _context: R }),
        (R.Consumer = R)
      );
    }),
    (Ie.createElement = Z),
    (Ie.createFactory = function (R) {
      var z = Z.bind(null, R);
      return ((z.type = R), z);
    }),
    (Ie.createRef = function () {
      return { current: null };
    }),
    (Ie.forwardRef = function (R) {
      return { $$typeof: h, render: R };
    }),
    (Ie.isValidElement = fe),
    (Ie.lazy = function (R) {
      return { $$typeof: v, _payload: { _status: -1, _result: R }, _init: ee };
    }),
    (Ie.memo = function (R, z) {
      return { $$typeof: m, type: R, compare: z === void 0 ? null : z };
    }),
    (Ie.startTransition = function (R) {
      var z = B.transition;
      B.transition = {};
      try {
        R();
      } finally {
        B.transition = z;
      }
    }),
    (Ie.unstable_act = Y),
    (Ie.useCallback = function (R, z) {
      return me.current.useCallback(R, z);
    }),
    (Ie.useContext = function (R) {
      return me.current.useContext(R);
    }),
    (Ie.useDebugValue = function () {}),
    (Ie.useDeferredValue = function (R) {
      return me.current.useDeferredValue(R);
    }),
    (Ie.useEffect = function (R, z) {
      return me.current.useEffect(R, z);
    }),
    (Ie.useId = function () {
      return me.current.useId();
    }),
    (Ie.useImperativeHandle = function (R, z, re) {
      return me.current.useImperativeHandle(R, z, re);
    }),
    (Ie.useInsertionEffect = function (R, z) {
      return me.current.useInsertionEffect(R, z);
    }),
    (Ie.useLayoutEffect = function (R, z) {
      return me.current.useLayoutEffect(R, z);
    }),
    (Ie.useMemo = function (R, z) {
      return me.current.useMemo(R, z);
    }),
    (Ie.useReducer = function (R, z, re) {
      return me.current.useReducer(R, z, re);
    }),
    (Ie.useRef = function (R) {
      return me.current.useRef(R);
    }),
    (Ie.useState = function (R) {
      return me.current.useState(R);
    }),
    (Ie.useSyncExternalStore = function (R, z, re) {
      return me.current.useSyncExternalStore(R, z, re);
    }),
    (Ie.useTransition = function () {
      return me.current.useTransition();
    }),
    (Ie.version = "18.3.1"),
    Ie
  );
}
var sf;
function mc() {
  return (sf || ((sf = 1), (Du.exports = uy())), Du.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var af;
function cy() {
  if (af) return Vi;
  af = 1;
  var r = mc(),
    e = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(h, f, m) {
    var v,
      g = {},
      b = null,
      x = null;
    (m !== void 0 && (b = "" + m),
      f.key !== void 0 && (b = "" + f.key),
      f.ref !== void 0 && (x = f.ref));
    for (v in f) i.call(f, v) && !l.hasOwnProperty(v) && (g[v] = f[v]);
    if (h && h.defaultProps)
      for (v in ((f = h.defaultProps), f)) g[v] === void 0 && (g[v] = f[v]);
    return {
      $$typeof: e,
      type: h,
      key: b,
      ref: x,
      props: g,
      _owner: o.current,
    };
  }
  return ((Vi.Fragment = s), (Vi.jsx = c), (Vi.jsxs = c), Vi);
}
var of;
function dy() {
  return (of || ((of = 1), (Au.exports = cy())), Au.exports);
}
var y = dy(),
  So = {},
  Iu = { exports: {} },
  er = {},
  Lu = { exports: {} },
  Mu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lf;
function hy() {
  return (
    lf ||
      ((lf = 1),
      (function (r) {
        function e(B, X) {
          var Y = B.length;
          B.push(X);
          e: for (; 0 < Y; ) {
            var R = (Y - 1) >>> 1,
              z = B[R];
            if (0 < o(z, X)) ((B[R] = X), (B[Y] = z), (Y = R));
            else break e;
          }
        }
        function s(B) {
          return B.length === 0 ? null : B[0];
        }
        function i(B) {
          if (B.length === 0) return null;
          var X = B[0],
            Y = B.pop();
          if (Y !== X) {
            B[0] = Y;
            e: for (var R = 0, z = B.length, re = z >>> 1; R < re; ) {
              var le = 2 * (R + 1) - 1,
                xe = B[le],
                ae = le + 1,
                $e = B[ae];
              if (0 > o(xe, Y))
                ae < z && 0 > o($e, xe)
                  ? ((B[R] = $e), (B[ae] = Y), (R = ae))
                  : ((B[R] = xe), (B[le] = Y), (R = le));
              else if (ae < z && 0 > o($e, Y))
                ((B[R] = $e), (B[ae] = Y), (R = ae));
              else break e;
            }
          }
          return X;
        }
        function o(B, X) {
          var Y = B.sortIndex - X.sortIndex;
          return Y !== 0 ? Y : B.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var l = performance;
          r.unstable_now = function () {
            return l.now();
          };
        } else {
          var c = Date,
            h = c.now();
          r.unstable_now = function () {
            return c.now() - h;
          };
        }
        var f = [],
          m = [],
          v = 1,
          g = null,
          b = 3,
          x = !1,
          _ = !1,
          j = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(B) {
          for (var X = s(m); X !== null; ) {
            if (X.callback === null) i(m);
            else if (X.startTime <= B)
              (i(m), (X.sortIndex = X.expirationTime), e(f, X));
            else break;
            X = s(m);
          }
        }
        function F(B) {
          if (((j = !1), O(B), !_))
            if (s(f) !== null) ((_ = !0), ee(q));
            else {
              var X = s(m);
              X !== null && me(F, X.startTime - B);
            }
        }
        function q(B, X) {
          ((_ = !1), j && ((j = !1), P(Z), (Z = -1)), (x = !0));
          var Y = b;
          try {
            for (
              O(X), g = s(f);
              g !== null && (!(g.expirationTime > X) || (B && !ke()));
            ) {
              var R = g.callback;
              if (typeof R == "function") {
                ((g.callback = null), (b = g.priorityLevel));
                var z = R(g.expirationTime <= X);
                ((X = r.unstable_now()),
                  typeof z == "function"
                    ? (g.callback = z)
                    : g === s(f) && i(f),
                  O(X));
              } else i(f);
              g = s(f);
            }
            if (g !== null) var re = !0;
            else {
              var le = s(m);
              (le !== null && me(F, le.startTime - X), (re = !1));
            }
            return re;
          } finally {
            ((g = null), (b = Y), (x = !1));
          }
        }
        var Q = !1,
          I = null,
          Z = -1,
          ne = 5,
          fe = -1;
        function ke() {
          return !(r.unstable_now() - fe < ne);
        }
        function Pe() {
          if (I !== null) {
            var B = r.unstable_now();
            fe = B;
            var X = !0;
            try {
              X = I(!0, B);
            } finally {
              X ? pe() : ((Q = !1), (I = null));
            }
          } else Q = !1;
        }
        var pe;
        if (typeof T == "function")
          pe = function () {
            T(Pe);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            De = be.port2;
          ((be.port1.onmessage = Pe),
            (pe = function () {
              De.postMessage(null);
            }));
        } else
          pe = function () {
            k(Pe, 0);
          };
        function ee(B) {
          ((I = B), Q || ((Q = !0), pe()));
        }
        function me(B, X) {
          Z = k(function () {
            B(r.unstable_now());
          }, X);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            _ || x || ((_ = !0), ee(q));
          }),
          (r.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ne = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return s(f);
          }),
          (r.unstable_next = function (B) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = b;
            }
            var Y = b;
            b = X;
            try {
              return B();
            } finally {
              b = Y;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (B, X) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var Y = b;
            b = B;
            try {
              return X();
            } finally {
              b = Y;
            }
          }),
          (r.unstable_scheduleCallback = function (B, X, Y) {
            var R = r.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? R + Y : R))
                : (Y = R),
              B)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = Y + z),
              (B = {
                id: v++,
                callback: X,
                priorityLevel: B,
                startTime: Y,
                expirationTime: z,
                sortIndex: -1,
              }),
              Y > R
                ? ((B.sortIndex = Y),
                  e(m, B),
                  s(f) === null &&
                    B === s(m) &&
                    (j ? (P(Z), (Z = -1)) : (j = !0), me(F, Y - R)))
                : ((B.sortIndex = z), e(f, B), _ || x || ((_ = !0), ee(q))),
              B
            );
          }),
          (r.unstable_shouldYield = ke),
          (r.unstable_wrapCallback = function (B) {
            var X = b;
            return function () {
              var Y = b;
              b = X;
              try {
                return B.apply(this, arguments);
              } finally {
                b = Y;
              }
            };
          }));
      })(Mu)),
    Mu
  );
}
var uf;
function fy() {
  return (uf || ((uf = 1), (Lu.exports = hy())), Lu.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf;
function py() {
  if (cf) return er;
  cf = 1;
  var r = mc(),
    e = fy();
  function s(t) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
        a = 1;
      a < arguments.length;
      a++
    )
      n += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    o = {};
  function l(t, n) {
    (c(t, n), c(t + "Capture", n));
  }
  function c(t, n) {
    for (o[t] = n, t = 0; t < n.length; t++) i.add(n[t]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    g = {};
  function b(t) {
    return f.call(g, t)
      ? !0
      : f.call(v, t)
        ? !1
        : m.test(t)
          ? (g[t] = !0)
          : ((v[t] = !0), !1);
  }
  function x(t, n, a, u) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u
          ? !1
          : a !== null
            ? !a.acceptsBooleans
            : ((t = t.toLowerCase().slice(0, 5)),
              t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function _(t, n, a, u) {
    if (n === null || typeof n > "u" || x(t, n, a, u)) return !0;
    if (u) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function j(t, n, a, u, d, p, w) {
    ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = u),
      (this.attributeNamespace = d),
      (this.mustUseProperty = a),
      (this.propertyName = t),
      (this.type = n),
      (this.sanitizeURL = p),
      (this.removeEmptyString = w));
  }
  var k = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
      k[t] = new j(t, 0, !1, t, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (t) {
      var n = t[0];
      k[n] = new j(n, 1, !1, t[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (t) {
        k[t] = new j(t, 2, !1, t.toLowerCase(), null, !1, !1);
      }
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (t) {
      k[t] = new j(t, 2, !1, t, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (t) {
        k[t] = new j(t, 3, !1, t.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (t) {
      k[t] = new j(t, 3, !0, t, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (t) {
      k[t] = new j(t, 4, !1, t, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (t) {
      k[t] = new j(t, 6, !1, t, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (t) {
      k[t] = new j(t, 5, !1, t.toLowerCase(), null, !1, !1);
    }));
  var P = /[\-:]([a-z])/g;
  function T(t) {
    return t[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
      var n = t.replace(P, T);
      k[n] = new j(n, 1, !1, t, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (t) {
        var n = t.replace(P, T);
        k[n] = new j(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
      var n = t.replace(P, T);
      k[n] = new j(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (t) {
      k[t] = new j(t, 1, !1, t.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new j(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (t) {
      k[t] = new j(t, 1, !1, t.toLowerCase(), null, !0, !0);
    }));
  function O(t, n, a, u) {
    var d = k.hasOwnProperty(n) ? k[n] : null;
    (d !== null
      ? d.type !== 0
      : u ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (_(n, a, d, u) && (a = null),
      u || d === null
        ? b(n) &&
          (a === null ? t.removeAttribute(n) : t.setAttribute(n, "" + a))
        : d.mustUseProperty
          ? (t[d.propertyName] = a === null ? (d.type === 3 ? !1 : "") : a)
          : ((n = d.attributeName),
            (u = d.attributeNamespace),
            a === null
              ? t.removeAttribute(n)
              : ((d = d.type),
                (a = d === 3 || (d === 4 && a === !0) ? "" : "" + a),
                u ? t.setAttributeNS(u, n, a) : t.setAttribute(n, a))));
  }
  var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    q = Symbol.for("react.element"),
    Q = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    ne = Symbol.for("react.profiler"),
    fe = Symbol.for("react.provider"),
    ke = Symbol.for("react.context"),
    Pe = Symbol.for("react.forward_ref"),
    pe = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    De = Symbol.for("react.memo"),
    ee = Symbol.for("react.lazy"),
    me = Symbol.for("react.offscreen"),
    B = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (B && t[B]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Y = Object.assign,
    R;
  function z(t) {
    if (R === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        R = (n && n[1]) || "";
      }
    return (
      `
` +
      R +
      t
    );
  }
  var re = !1;
  function le(t, n) {
    if (!t || re) return "";
    re = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (U) {
            var u = U;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (U) {
            u = U;
          }
          t.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          u = U;
        }
        t();
      }
    } catch (U) {
      if (U && u && typeof U.stack == "string") {
        for (
          var d = U.stack.split(`
`),
            p = u.stack.split(`
`),
            w = d.length - 1,
            S = p.length - 1;
          1 <= w && 0 <= S && d[w] !== p[S];
        )
          S--;
        for (; 1 <= w && 0 <= S; w--, S--)
          if (d[w] !== p[S]) {
            if (w !== 1 || S !== 1)
              do
                if ((w--, S--, 0 > S || d[w] !== p[S])) {
                  var N =
                    `
` + d[w].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", t.displayName)),
                    N
                  );
                }
              while (1 <= w && 0 <= S);
            break;
          }
      }
    } finally {
      ((re = !1), (Error.prepareStackTrace = a));
    }
    return (t = t ? t.displayName || t.name : "") ? z(t) : "";
  }
  function xe(t) {
    switch (t.tag) {
      case 5:
        return z(t.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((t = le(t.type, !1)), t);
      case 11:
        return ((t = le(t.type.render, !1)), t);
      case 1:
        return ((t = le(t.type, !0)), t);
      default:
        return "";
    }
  }
  function ae(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case I:
        return "Fragment";
      case Q:
        return "Portal";
      case ne:
        return "Profiler";
      case Z:
        return "StrictMode";
      case pe:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ke:
          return (t.displayName || "Context") + ".Consumer";
        case fe:
          return (t._context.displayName || "Context") + ".Provider";
        case Pe:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case De:
          return (
            (n = t.displayName || null),
            n !== null ? n : ae(t.type) || "Memo"
          );
        case ee:
          ((n = t._payload), (t = t._init));
          try {
            return ae(t(n));
          } catch {}
      }
    return null;
  }
  function $e(t) {
    var n = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (t = n.render),
          (t = t.displayName || t.name || ""),
          n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(n);
      case 8:
        return n === Z ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function Oe(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Be(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function dt(t) {
    var n = Be(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      u = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var d = a.get,
        p = a.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (w) {
            ((u = "" + w), p.call(this, w));
          },
        }),
        Object.defineProperty(t, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (w) {
            u = "" + w;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function wn(t) {
    t._valueTracker || (t._valueTracker = dt(t));
  }
  function at(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      u = "";
    return (
      t && (u = Be(t) ? (t.checked ? "true" : "false") : t.value),
      (t = u),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function rr(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function $r(t, n) {
    var a = n.checked;
    return Y({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? t._wrapperState.initialChecked,
    });
  }
  function Ts(t, n) {
    var a = n.defaultValue == null ? "" : n.defaultValue,
      u = n.checked != null ? n.checked : n.defaultChecked;
    ((a = Oe(n.value != null ? n.value : a)),
      (t._wrapperState = {
        initialChecked: u,
        initialValue: a,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      }));
  }
  function nr(t, n) {
    ((n = n.checked), n != null && O(t, "checked", n, !1));
  }
  function Tr(t, n) {
    nr(t, n);
    var a = Oe(n.value),
      u = n.type;
    if (a != null)
      u === "number"
        ? ((a === 0 && t.value === "") || t.value != a) && (t.value = "" + a)
        : t.value !== "" + a && (t.value = "" + a);
    else if (u === "submit" || u === "reset") {
      t.removeAttribute("value");
      return;
    }
    (n.hasOwnProperty("value")
      ? Dt(t, n.type, a)
      : n.hasOwnProperty("defaultValue") && Dt(t, n.type, Oe(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (t.defaultChecked = !!n.defaultChecked));
  }
  function Qn(t, n, a) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var u = n.type;
      if (
        !(
          (u !== "submit" && u !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      ((n = "" + t._wrapperState.initialValue),
        a || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((a = t.name),
      a !== "" && (t.name = ""),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      a !== "" && (t.name = a));
  }
  function Dt(t, n, a) {
    (n !== "number" || rr(t.ownerDocument) !== t) &&
      (a == null
        ? (t.defaultValue = "" + t._wrapperState.initialValue)
        : t.defaultValue !== "" + a && (t.defaultValue = "" + a));
  }
  var en = Array.isArray;
  function Ur(t, n, a, u) {
    if (((t = t.options), n)) {
      n = {};
      for (var d = 0; d < a.length; d++) n["$" + a[d]] = !0;
      for (a = 0; a < t.length; a++)
        ((d = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== d && (t[a].selected = d),
          d && u && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + Oe(a), n = null, d = 0; d < t.length; d++) {
        if (t[d].value === a) {
          ((t[d].selected = !0), u && (t[d].defaultSelected = !0));
          return;
        }
        n !== null || t[d].disabled || (n = t[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function bt(t, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(s(91));
    return Y({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + t._wrapperState.initialValue,
    });
  }
  function Cr(t, n) {
    var a = n.value;
    if (a == null) {
      if (((a = n.children), (n = n.defaultValue), a != null)) {
        if (n != null) throw Error(s(92));
        if (en(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (a = n));
    }
    t._wrapperState = { initialValue: Oe(a) };
  }
  function pr(t, n) {
    var a = Oe(n.value),
      u = Oe(n.defaultValue);
    (a != null &&
      ((a = "" + a),
      a !== t.value && (t.value = a),
      n.defaultValue == null && t.defaultValue !== a && (t.defaultValue = a)),
      u != null && (t.defaultValue = "" + u));
  }
  function Fr(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (t.value = n);
  }
  function zr(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function tn(t, n) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
      ? zr(n)
      : t === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : t;
  }
  var jt,
    It = (function (t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, a, u, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(n, a, u, d);
            });
          }
        : t;
    })(function (t, n) {
      if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
        t.innerHTML = n;
      else {
        for (
          jt = jt || document.createElement("div"),
            jt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = jt.firstChild;
          t.firstChild;
        )
          t.removeChild(t.firstChild);
        for (; n.firstChild; ) t.appendChild(n.firstChild);
      }
    });
  function zt(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Br = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    mr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Br).forEach(function (t) {
    mr.forEach(function (n) {
      ((n = n + t.charAt(0).toUpperCase() + t.substring(1)), (Br[n] = Br[t]));
    });
  });
  function Cs(t, n, a) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : a || typeof n != "number" || n === 0 || (Br.hasOwnProperty(t) && Br[t])
        ? ("" + n).trim()
        : n + "px";
  }
  function Kt(t, n) {
    t = t.style;
    for (var a in n)
      if (n.hasOwnProperty(a)) {
        var u = a.indexOf("--") === 0,
          d = Cs(a, n[a], u);
        (a === "float" && (a = "cssFloat"),
          u ? t.setProperty(a, d) : (t[a] = d));
      }
  }
  var Xn = Y(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function rn(t, n) {
    if (n) {
      if (Xn[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(s(137, t));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(s(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(s(62));
    }
  }
  function xn(t, n) {
    if (t.indexOf("-") === -1) return typeof n.is == "string";
    switch (t) {
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
  var nn = null;
  function Bt(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Wr = null,
    Rr = null,
    sr = null;
  function Zn(t) {
    if ((t = Ni(t))) {
      if (typeof Wr != "function") throw Error(s(280));
      var n = t.stateNode;
      n && ((n = $a(n)), Wr(t.stateNode, t.type, n));
    }
  }
  function je(t) {
    Rr ? (sr ? sr.push(t) : (sr = [t])) : (Rr = t);
  }
  function rt() {
    if (Rr) {
      var t = Rr,
        n = sr;
      if (((sr = Rr = null), Zn(t), n)) for (t = 0; t < n.length; t++) Zn(n[t]);
    }
  }
  function ot(t, n) {
    return t(n);
  }
  function ht() {}
  var ir = !1;
  function nt(t, n, a) {
    if (ir) return t(n, a);
    ir = !0;
    try {
      return ot(t, n, a);
    } finally {
      ((ir = !1), (Rr !== null || sr !== null) && (ht(), rt()));
    }
  }
  function mt(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var u = $a(a);
    if (u === null) return null;
    a = u[n];
    e: switch (n) {
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
        ((u = !u.disabled) ||
          ((t = t.type),
          (u = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !u));
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(s(231, n, typeof a));
    return a;
  }
  var Hr = !1;
  if (h)
    try {
      var E = {};
      (Object.defineProperty(E, "passive", {
        get: function () {
          Hr = !0;
        },
      }),
        window.addEventListener("test", E, E),
        window.removeEventListener("test", E, E));
    } catch {
      Hr = !1;
    }
  function A(t, n, a, u, d, p, w, S, N) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(a, U);
    } catch (V) {
      this.onError(V);
    }
  }
  var $ = !1,
    W = null,
    J = !1,
    ge = null,
    _e = {
      onError: function (t) {
        (($ = !0), (W = t));
      },
    };
  function ie(t, n, a, u, d, p, w, S, N) {
    (($ = !1), (W = null), A.apply(_e, arguments));
  }
  function ue(t, n, a, u, d, p, w, S, N) {
    if ((ie.apply(this, arguments), $)) {
      if ($) {
        var U = W;
        (($ = !1), (W = null));
      } else throw Error(s(198));
      J || ((J = !0), (ge = U));
    }
  }
  function de(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function Ne(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function ve(t) {
    if (de(t) !== t) throw Error(s(188));
  }
  function Ae(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = de(t)), n === null)) throw Error(s(188));
      return n !== t ? null : t;
    }
    for (var a = t, u = n; ; ) {
      var d = a.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((u = d.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === a) return (ve(d), t);
          if (p === u) return (ve(d), n);
          p = p.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== u.return) ((a = d), (u = p));
      else {
        for (var w = !1, S = d.child; S; ) {
          if (S === a) {
            ((w = !0), (a = d), (u = p));
            break;
          }
          if (S === u) {
            ((w = !0), (u = d), (a = p));
            break;
          }
          S = S.sibling;
        }
        if (!w) {
          for (S = p.child; S; ) {
            if (S === a) {
              ((w = !0), (a = p), (u = d));
              break;
            }
            if (S === u) {
              ((w = !0), (u = p), (a = d));
              break;
            }
            S = S.sibling;
          }
          if (!w) throw Error(s(189));
        }
      }
      if (a.alternate !== u) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? t : n;
  }
  function Ue(t) {
    return ((t = Ae(t)), t !== null ? gt(t) : null);
  }
  function gt(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var n = gt(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var ft = e.unstable_scheduleCallback,
    Et = e.unstable_cancelCallback,
    He = e.unstable_shouldYield,
    Yt = e.unstable_requestPaint,
    qe = e.unstable_now,
    es = e.unstable_getCurrentPriorityLevel,
    gr = e.unstable_ImmediatePriority,
    ar = e.unstable_UserBlockingPriority,
    bn = e.unstable_NormalPriority,
    ts = e.unstable_LowPriority,
    Vr = e.unstable_IdlePriority,
    sn = null,
    Wt = null;
  function Fe(t) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function")
      try {
        Wt.onCommitFiberRoot(sn, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  var Ge = Math.clz32 ? Math.clz32 : et,
    _n = Math.log,
    an = Math.LN2;
  function et(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((_n(t) / an) | 0)) | 0);
  }
  var on = 64,
    rs = 4194304;
  function ns(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function _a(t, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      d = t.suspendedLanes,
      p = t.pingedLanes,
      w = a & 268435455;
    if (w !== 0) {
      var S = w & ~d;
      S !== 0 ? (u = ns(S)) : ((p &= w), p !== 0 && (u = ns(p)));
    } else ((w = a & ~d), w !== 0 ? (u = ns(w)) : p !== 0 && (u = ns(p)));
    if (u === 0) return 0;
    if (
      n !== 0 &&
      n !== u &&
      (n & d) === 0 &&
      ((d = u & -u), (p = n & -n), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return n;
    if (((u & 4) !== 0 && (u |= a & 16), (n = t.entangledLanes), n !== 0))
      for (t = t.entanglements, n &= u; 0 < n; )
        ((a = 31 - Ge(n)), (d = 1 << a), (u |= t[a]), (n &= ~d));
    return u;
  }
  function Cm(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rm(t, n) {
    for (
      var a = t.suspendedLanes,
        u = t.pingedLanes,
        d = t.expirationTimes,
        p = t.pendingLanes;
      0 < p;
    ) {
      var w = 31 - Ge(p),
        S = 1 << w,
        N = d[w];
      (N === -1
        ? ((S & a) === 0 || (S & u) !== 0) && (d[w] = Cm(S, n))
        : N <= n && (t.expiredLanes |= S),
        (p &= ~S));
    }
  }
  function el(t) {
    return (
      (t = t.pendingLanes & -1073741825),
      t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
  }
  function Dc() {
    var t = on;
    return ((on <<= 1), (on & 4194240) === 0 && (on = 64), t);
  }
  function tl(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function fi(t, n, a) {
    ((t.pendingLanes |= n),
      n !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
      (t = t.eventTimes),
      (n = 31 - Ge(n)),
      (t[n] = a));
  }
  function jm(t, n) {
    var a = t.pendingLanes & ~n;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= n),
      (t.mutableReadLanes &= n),
      (t.entangledLanes &= n),
      (n = t.entanglements));
    var u = t.eventTimes;
    for (t = t.expirationTimes; 0 < a; ) {
      var d = 31 - Ge(a),
        p = 1 << d;
      ((n[d] = 0), (u[d] = -1), (t[d] = -1), (a &= ~p));
    }
  }
  function rl(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var u = 31 - Ge(a),
        d = 1 << u;
      ((d & n) | (t[u] & n) && (t[u] |= n), (a &= ~d));
    }
  }
  var Ke = 0;
  function Ic(t) {
    return (
      (t &= -t),
      1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Lc,
    nl,
    Mc,
    $c,
    Uc,
    sl = !1,
    ka = [],
    kn = null,
    Sn = null,
    En = null,
    pi = new Map(),
    mi = new Map(),
    Tn = [],
    Nm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Fc(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Sn = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
        break;
      case "pointerover":
      case "pointerout":
        pi.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mi.delete(n.pointerId);
    }
  }
  function gi(t, n, a, u, d, p) {
    return t === null || t.nativeEvent !== p
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: p,
          targetContainers: [d],
        }),
        n !== null && ((n = Ni(n)), n !== null && nl(n)),
        t)
      : ((t.eventSystemFlags |= u),
        (n = t.targetContainers),
        d !== null && n.indexOf(d) === -1 && n.push(d),
        t);
  }
  function Pm(t, n, a, u, d) {
    switch (n) {
      case "focusin":
        return ((kn = gi(kn, t, n, a, u, d)), !0);
      case "dragenter":
        return ((Sn = gi(Sn, t, n, a, u, d)), !0);
      case "mouseover":
        return ((En = gi(En, t, n, a, u, d)), !0);
      case "pointerover":
        var p = d.pointerId;
        return (pi.set(p, gi(pi.get(p) || null, t, n, a, u, d)), !0);
      case "gotpointercapture":
        return (
          (p = d.pointerId),
          mi.set(p, gi(mi.get(p) || null, t, n, a, u, d)),
          !0
        );
    }
    return !1;
  }
  function zc(t) {
    var n = ss(t.target);
    if (n !== null) {
      var a = de(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = Ne(a)), n !== null)) {
            ((t.blockedOn = n),
              Uc(t.priority, function () {
                Mc(a);
              }));
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Sa(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = al(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((nn = u), a.target.dispatchEvent(u), (nn = null));
      } else return ((n = Ni(a)), n !== null && nl(n), (t.blockedOn = a), !1);
      n.shift();
    }
    return !0;
  }
  function Bc(t, n, a) {
    Sa(t) && a.delete(n);
  }
  function Om() {
    ((sl = !1),
      kn !== null && Sa(kn) && (kn = null),
      Sn !== null && Sa(Sn) && (Sn = null),
      En !== null && Sa(En) && (En = null),
      pi.forEach(Bc),
      mi.forEach(Bc));
  }
  function yi(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      sl ||
        ((sl = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, Om)));
  }
  function vi(t) {
    function n(d) {
      return yi(d, t);
    }
    if (0 < ka.length) {
      yi(ka[0], t);
      for (var a = 1; a < ka.length; a++) {
        var u = ka[a];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (
      kn !== null && yi(kn, t),
        Sn !== null && yi(Sn, t),
        En !== null && yi(En, t),
        pi.forEach(n),
        mi.forEach(n),
        a = 0;
      a < Tn.length;
      a++
    )
      ((u = Tn[a]), u.blockedOn === t && (u.blockedOn = null));
    for (; 0 < Tn.length && ((a = Tn[0]), a.blockedOn === null); )
      (zc(a), a.blockedOn === null && Tn.shift());
  }
  var Rs = F.ReactCurrentBatchConfig,
    Ea = !0;
  function Am(t, n, a, u) {
    var d = Ke,
      p = Rs.transition;
    Rs.transition = null;
    try {
      ((Ke = 1), il(t, n, a, u));
    } finally {
      ((Ke = d), (Rs.transition = p));
    }
  }
  function Dm(t, n, a, u) {
    var d = Ke,
      p = Rs.transition;
    Rs.transition = null;
    try {
      ((Ke = 4), il(t, n, a, u));
    } finally {
      ((Ke = d), (Rs.transition = p));
    }
  }
  function il(t, n, a, u) {
    if (Ea) {
      var d = al(t, n, a, u);
      if (d === null) (kl(t, n, u, Ta, a), Fc(t, u));
      else if (Pm(d, t, n, a, u)) u.stopPropagation();
      else if ((Fc(t, u), n & 4 && -1 < Nm.indexOf(t))) {
        for (; d !== null; ) {
          var p = Ni(d);
          if (
            (p !== null && Lc(p),
            (p = al(t, n, a, u)),
            p === null && kl(t, n, u, Ta, a),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && u.stopPropagation();
      } else kl(t, n, u, null, a);
    }
  }
  var Ta = null;
  function al(t, n, a, u) {
    if (((Ta = null), (t = Bt(u)), (t = ss(t)), t !== null))
      if (((n = de(t)), n === null)) t = null;
      else if (((a = n.tag), a === 13)) {
        if (((t = Ne(n)), t !== null)) return t;
        t = null;
      } else if (a === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
    return ((Ta = t), null);
  }
  function Wc(t) {
    switch (t) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (es()) {
          case gr:
            return 1;
          case ar:
            return 4;
          case bn:
          case ts:
            return 16;
          case Vr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Cn = null,
    ol = null,
    Ca = null;
  function Hc() {
    if (Ca) return Ca;
    var t,
      n = ol,
      a = n.length,
      u,
      d = "value" in Cn ? Cn.value : Cn.textContent,
      p = d.length;
    for (t = 0; t < a && n[t] === d[t]; t++);
    var w = a - t;
    for (u = 1; u <= w && n[a - u] === d[p - u]; u++);
    return (Ca = d.slice(t, 1 < u ? 1 - u : void 0));
  }
  function Ra(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ja() {
    return !0;
  }
  function Vc() {
    return !1;
  }
  function or(t) {
    function n(a, u, d, p, w) {
      ((this._reactName = a),
        (this._targetInst = d),
        (this.type = u),
        (this.nativeEvent = p),
        (this.target = w),
        (this.currentTarget = null));
      for (var S in t)
        t.hasOwnProperty(S) && ((a = t[S]), (this[S] = a ? a(p) : p[S]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? ja
          : Vc),
        (this.isPropagationStopped = Vc),
        this
      );
    }
    return (
      Y(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = ja));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = ja));
        },
        persist: function () {},
        isPersistent: ja,
      }),
      n
    );
  }
  var js = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ll = or(js),
    wi = Y({}, js, { view: 0, detail: 0 }),
    Im = or(wi),
    ul,
    cl,
    xi,
    Na = Y({}, wi, {
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
      getModifierState: hl,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== xi &&
              (xi && t.type === "mousemove"
                ? ((ul = t.screenX - xi.screenX), (cl = t.screenY - xi.screenY))
                : (cl = ul = 0),
              (xi = t)),
            ul);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : cl;
      },
    }),
    qc = or(Na),
    Lm = Y({}, Na, { dataTransfer: 0 }),
    Mm = or(Lm),
    $m = Y({}, wi, { relatedTarget: 0 }),
    dl = or($m),
    Um = Y({}, js, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fm = or(Um),
    zm = Y({}, js, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Bm = or(zm),
    Wm = Y({}, js, { data: 0 }),
    Kc = or(Wm),
    Hm = {
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
    Vm = {
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
    qm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Km(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = qm[t])
        ? !!n[t]
        : !1;
  }
  function hl() {
    return Km;
  }
  var Ym = Y({}, wi, {
      key: function (t) {
        if (t.key) {
          var n = Hm[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = Ra(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Vm[t.keyCode] || "Unidentified"
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
      getModifierState: hl,
      charCode: function (t) {
        return t.type === "keypress" ? Ra(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ra(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Gm = or(Ym),
    Jm = Y({}, Na, {
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
    Yc = or(Jm),
    Qm = Y({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hl,
    }),
    Xm = or(Qm),
    Zm = Y({}, js, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = or(Zm),
    tg = Y({}, Na, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rg = or(tg),
    ng = [9, 13, 27, 32],
    fl = h && "CompositionEvent" in window,
    bi = null;
  h && "documentMode" in document && (bi = document.documentMode);
  var sg = h && "TextEvent" in window && !bi,
    Gc = h && (!fl || (bi && 8 < bi && 11 >= bi)),
    Jc = " ",
    Qc = !1;
  function Xc(t, n) {
    switch (t) {
      case "keyup":
        return ng.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zc(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Ns = !1;
  function ig(t, n) {
    switch (t) {
      case "compositionend":
        return Zc(n);
      case "keypress":
        return n.which !== 32 ? null : ((Qc = !0), Jc);
      case "textInput":
        return ((t = n.data), t === Jc && Qc ? null : t);
      default:
        return null;
    }
  }
  function ag(t, n) {
    if (Ns)
      return t === "compositionend" || (!fl && Xc(t, n))
        ? ((t = Hc()), (Ca = ol = Cn = null), (Ns = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Gc && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var og = {
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
  function ed(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!og[t.type] : n === "textarea";
  }
  function td(t, n, a, u) {
    (je(u),
      (n = Ia(n, "onChange")),
      0 < n.length &&
        ((a = new ll("onChange", "change", null, a, u)),
        t.push({ event: a, listeners: n })));
  }
  var _i = null,
    ki = null;
  function lg(t) {
    wd(t, 0);
  }
  function Pa(t) {
    var n = Is(t);
    if (at(n)) return t;
  }
  function ug(t, n) {
    if (t === "change") return n;
  }
  var rd = !1;
  if (h) {
    var pl;
    if (h) {
      var ml = "oninput" in document;
      if (!ml) {
        var nd = document.createElement("div");
        (nd.setAttribute("oninput", "return;"),
          (ml = typeof nd.oninput == "function"));
      }
      pl = ml;
    } else pl = !1;
    rd = pl && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    _i && (_i.detachEvent("onpropertychange", id), (ki = _i = null));
  }
  function id(t) {
    if (t.propertyName === "value" && Pa(ki)) {
      var n = [];
      (td(n, ki, t, Bt(t)), nt(lg, n));
    }
  }
  function cg(t, n, a) {
    t === "focusin"
      ? (sd(), (_i = n), (ki = a), _i.attachEvent("onpropertychange", id))
      : t === "focusout" && sd();
  }
  function dg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pa(ki);
  }
  function hg(t, n) {
    if (t === "click") return Pa(n);
  }
  function fg(t, n) {
    if (t === "input" || t === "change") return Pa(n);
  }
  function pg(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var jr = typeof Object.is == "function" ? Object.is : pg;
  function Si(t, n) {
    if (jr(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(t),
      u = Object.keys(n);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var d = a[u];
      if (!f.call(n, d) || !jr(t[d], n[d])) return !1;
    }
    return !0;
  }
  function ad(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function od(t, n) {
    var a = ad(t);
    t = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = t + a.textContent.length), t <= n && u >= n))
          return { node: a, offset: n - t };
        t = u;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ad(a);
    }
  }
  function ld(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? ld(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function ud() {
    for (var t = window, n = rr(); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = rr(t.document);
    }
    return n;
  }
  function gl(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function mg(t) {
    var n = ud(),
      a = t.focusedElem,
      u = t.selectionRange;
    if (
      n !== a &&
      a &&
      a.ownerDocument &&
      ld(a.ownerDocument.documentElement, a)
    ) {
      if (u !== null && gl(a)) {
        if (
          ((n = u.start),
          (t = u.end),
          t === void 0 && (t = n),
          "selectionStart" in a)
        )
          ((a.selectionStart = n),
            (a.selectionEnd = Math.min(t, a.value.length)));
        else if (
          ((t = ((n = a.ownerDocument || document) && n.defaultView) || window),
          t.getSelection)
        ) {
          t = t.getSelection();
          var d = a.textContent.length,
            p = Math.min(u.start, d);
          ((u = u.end === void 0 ? p : Math.min(u.end, d)),
            !t.extend && p > u && ((d = u), (u = p), (p = d)),
            (d = od(a, p)));
          var w = od(a, u);
          d &&
            w &&
            (t.rangeCount !== 1 ||
              t.anchorNode !== d.node ||
              t.anchorOffset !== d.offset ||
              t.focusNode !== w.node ||
              t.focusOffset !== w.offset) &&
            ((n = n.createRange()),
            n.setStart(d.node, d.offset),
            t.removeAllRanges(),
            p > u
              ? (t.addRange(n), t.extend(w.node, w.offset))
              : (n.setEnd(w.node, w.offset), t.addRange(n)));
        }
      }
      for (n = [], t = a; (t = t.parentNode); )
        t.nodeType === 1 &&
          n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < n.length; a++)
        ((t = n[a]),
          (t.element.scrollLeft = t.left),
          (t.element.scrollTop = t.top));
    }
  }
  var gg = h && "documentMode" in document && 11 >= document.documentMode,
    Ps = null,
    yl = null,
    Ei = null,
    vl = !1;
  function cd(t, n, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    vl ||
      Ps == null ||
      Ps !== rr(u) ||
      ((u = Ps),
      "selectionStart" in u && gl(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Ei && Si(Ei, u)) ||
        ((Ei = u),
        (u = Ia(yl, "onSelect")),
        0 < u.length &&
          ((n = new ll("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: u }),
          (n.target = Ps))));
  }
  function Oa(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var Os = {
      animationend: Oa("Animation", "AnimationEnd"),
      animationiteration: Oa("Animation", "AnimationIteration"),
      animationstart: Oa("Animation", "AnimationStart"),
      transitionend: Oa("Transition", "TransitionEnd"),
    },
    wl = {},
    dd = {};
  h &&
    ((dd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Os.animationend.animation,
      delete Os.animationiteration.animation,
      delete Os.animationstart.animation),
    "TransitionEvent" in window || delete Os.transitionend.transition);
  function Aa(t) {
    if (wl[t]) return wl[t];
    if (!Os[t]) return t;
    var n = Os[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in dd) return (wl[t] = n[a]);
    return t;
  }
  var hd = Aa("animationend"),
    fd = Aa("animationiteration"),
    pd = Aa("animationstart"),
    md = Aa("transitionend"),
    gd = new Map(),
    yd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Rn(t, n) {
    (gd.set(t, n), l(n, [t]));
  }
  for (var xl = 0; xl < yd.length; xl++) {
    var bl = yd[xl],
      yg = bl.toLowerCase(),
      vg = bl[0].toUpperCase() + bl.slice(1);
    Rn(yg, "on" + vg);
  }
  (Rn(hd, "onAnimationEnd"),
    Rn(fd, "onAnimationIteration"),
    Rn(pd, "onAnimationStart"),
    Rn("dblclick", "onDoubleClick"),
    Rn("focusin", "onFocus"),
    Rn("focusout", "onBlur"),
    Rn(md, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var Ti =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    wg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ti)
    );
  function vd(t, n, a) {
    var u = t.type || "unknown-event";
    ((t.currentTarget = a), ue(u, n, void 0, t), (t.currentTarget = null));
  }
  function wd(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var u = t[a],
        d = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var w = u.length - 1; 0 <= w; w--) {
            var S = u[w],
              N = S.instance,
              U = S.currentTarget;
            if (((S = S.listener), N !== p && d.isPropagationStopped()))
              break e;
            (vd(d, S, U), (p = N));
          }
        else
          for (w = 0; w < u.length; w++) {
            if (
              ((S = u[w]),
              (N = S.instance),
              (U = S.currentTarget),
              (S = S.listener),
              N !== p && d.isPropagationStopped())
            )
              break e;
            (vd(d, S, U), (p = N));
          }
      }
    }
    if (J) throw ((t = ge), (J = !1), (ge = null), t);
  }
  function Xe(t, n) {
    var a = n[jl];
    a === void 0 && (a = n[jl] = new Set());
    var u = t + "__bubble";
    a.has(u) || (xd(n, t, 2, !1), a.add(u));
  }
  function _l(t, n, a) {
    var u = 0;
    (n && (u |= 4), xd(a, t, u, n));
  }
  var Da = "_reactListening" + Math.random().toString(36).slice(2);
  function Ci(t) {
    if (!t[Da]) {
      ((t[Da] = !0),
        i.forEach(function (a) {
          a !== "selectionchange" && (wg.has(a) || _l(a, !1, t), _l(a, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Da] || ((n[Da] = !0), _l("selectionchange", !1, n));
    }
  }
  function xd(t, n, a, u) {
    switch (Wc(n)) {
      case 1:
        var d = Am;
        break;
      case 4:
        d = Dm;
        break;
      default:
        d = il;
    }
    ((a = d.bind(null, n, a, t)),
      (d = void 0),
      !Hr ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (d = !0),
      u
        ? d !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: d })
          : t.addEventListener(n, a, !0)
        : d !== void 0
          ? t.addEventListener(n, a, { passive: d })
          : t.addEventListener(n, a, !1));
  }
  function kl(t, n, a, u, d) {
    var p = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var w = u.tag;
        if (w === 3 || w === 4) {
          var S = u.stateNode.containerInfo;
          if (S === d || (S.nodeType === 8 && S.parentNode === d)) break;
          if (w === 4)
            for (w = u.return; w !== null; ) {
              var N = w.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = w.stateNode.containerInfo),
                N === d || (N.nodeType === 8 && N.parentNode === d))
              )
                return;
              w = w.return;
            }
          for (; S !== null; ) {
            if (((w = ss(S)), w === null)) return;
            if (((N = w.tag), N === 5 || N === 6)) {
              u = p = w;
              continue e;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    nt(function () {
      var U = p,
        V = Bt(a),
        K = [];
      e: {
        var H = gd.get(t);
        if (H !== void 0) {
          var se = ll,
            ce = t;
          switch (t) {
            case "keypress":
              if (Ra(a) === 0) break e;
            case "keydown":
            case "keyup":
              se = Gm;
              break;
            case "focusin":
              ((ce = "focus"), (se = dl));
              break;
            case "focusout":
              ((ce = "blur"), (se = dl));
              break;
            case "beforeblur":
            case "afterblur":
              se = dl;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = qc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Mm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Xm;
              break;
            case hd:
            case fd:
            case pd:
              se = Fm;
              break;
            case md:
              se = eg;
              break;
            case "scroll":
              se = Im;
              break;
            case "wheel":
              se = rg;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Yc;
          }
          var he = (n & 4) !== 0,
            pt = !he && t === "scroll",
            L = he ? (H !== null ? H + "Capture" : null) : H;
          he = [];
          for (var D = U, M; D !== null; ) {
            M = D;
            var G = M.stateNode;
            if (
              (M.tag === 5 &&
                G !== null &&
                ((M = G),
                L !== null &&
                  ((G = mt(D, L)), G != null && he.push(Ri(D, G, M)))),
              pt)
            )
              break;
            D = D.return;
          }
          0 < he.length &&
            ((H = new se(H, ce, null, a, V)),
            K.push({ event: H, listeners: he }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((H = t === "mouseover" || t === "pointerover"),
            (se = t === "mouseout" || t === "pointerout"),
            H &&
              a !== nn &&
              (ce = a.relatedTarget || a.fromElement) &&
              (ss(ce) || ce[ln]))
          )
            break e;
          if (
            (se || H) &&
            ((H =
              V.window === V
                ? V
                : (H = V.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            se
              ? ((ce = a.relatedTarget || a.toElement),
                (se = U),
                (ce = ce ? ss(ce) : null),
                ce !== null &&
                  ((pt = de(ce)),
                  ce !== pt || (ce.tag !== 5 && ce.tag !== 6)) &&
                  (ce = null))
              : ((se = null), (ce = U)),
            se !== ce)
          ) {
            if (
              ((he = qc),
              (G = "onMouseLeave"),
              (L = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((he = Yc),
                (G = "onPointerLeave"),
                (L = "onPointerEnter"),
                (D = "pointer")),
              (pt = se == null ? H : Is(se)),
              (M = ce == null ? H : Is(ce)),
              (H = new he(G, D + "leave", se, a, V)),
              (H.target = pt),
              (H.relatedTarget = M),
              (G = null),
              ss(V) === U &&
                ((he = new he(L, D + "enter", ce, a, V)),
                (he.target = M),
                (he.relatedTarget = pt),
                (G = he)),
              (pt = G),
              se && ce)
            )
              t: {
                for (he = se, L = ce, D = 0, M = he; M; M = As(M)) D++;
                for (M = 0, G = L; G; G = As(G)) M++;
                for (; 0 < D - M; ) ((he = As(he)), D--);
                for (; 0 < M - D; ) ((L = As(L)), M--);
                for (; D--; ) {
                  if (he === L || (L !== null && he === L.alternate)) break t;
                  ((he = As(he)), (L = As(L)));
                }
                he = null;
              }
            else he = null;
            (se !== null && bd(K, H, se, he, !1),
              ce !== null && pt !== null && bd(K, pt, ce, he, !0));
          }
        }
        e: {
          if (
            ((H = U ? Is(U) : window),
            (se = H.nodeName && H.nodeName.toLowerCase()),
            se === "select" || (se === "input" && H.type === "file"))
          )
            var ye = ug;
          else if (ed(H))
            if (rd) ye = fg;
            else {
              ye = dg;
              var Se = cg;
            }
          else
            (se = H.nodeName) &&
              se.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (ye = hg);
          if (ye && (ye = ye(t, U))) {
            td(K, ye, a, V);
            break e;
          }
          (Se && Se(t, H, U),
            t === "focusout" &&
              (Se = H._wrapperState) &&
              Se.controlled &&
              H.type === "number" &&
              Dt(H, "number", H.value));
        }
        switch (((Se = U ? Is(U) : window), t)) {
          case "focusin":
            (ed(Se) || Se.contentEditable === "true") &&
              ((Ps = Se), (yl = U), (Ei = null));
            break;
          case "focusout":
            Ei = yl = Ps = null;
            break;
          case "mousedown":
            vl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((vl = !1), cd(K, a, V));
            break;
          case "selectionchange":
            if (gg) break;
          case "keydown":
          case "keyup":
            cd(K, a, V);
        }
        var Ee;
        if (fl)
          e: {
            switch (t) {
              case "compositionstart":
                var Re = "onCompositionStart";
                break e;
              case "compositionend":
                Re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Re = "onCompositionUpdate";
                break e;
            }
            Re = void 0;
          }
        else
          Ns
            ? Xc(t, a) && (Re = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (Re = "onCompositionStart");
        (Re &&
          (Gc &&
            a.locale !== "ko" &&
            (Ns || Re !== "onCompositionStart"
              ? Re === "onCompositionEnd" && Ns && (Ee = Hc())
              : ((Cn = V),
                (ol = "value" in Cn ? Cn.value : Cn.textContent),
                (Ns = !0))),
          (Se = Ia(U, Re)),
          0 < Se.length &&
            ((Re = new Kc(Re, t, null, a, V)),
            K.push({ event: Re, listeners: Se }),
            Ee
              ? (Re.data = Ee)
              : ((Ee = Zc(a)), Ee !== null && (Re.data = Ee)))),
          (Ee = sg ? ig(t, a) : ag(t, a)) &&
            ((U = Ia(U, "onBeforeInput")),
            0 < U.length &&
              ((V = new Kc("onBeforeInput", "beforeinput", null, a, V)),
              K.push({ event: V, listeners: U }),
              (V.data = Ee))));
      }
      wd(K, n);
    });
  }
  function Ri(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function Ia(t, n) {
    for (var a = n + "Capture", u = []; t !== null; ) {
      var d = t,
        p = d.stateNode;
      (d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = mt(t, a)),
        p != null && u.unshift(Ri(t, p, d)),
        (p = mt(t, n)),
        p != null && u.push(Ri(t, p, d))),
        (t = t.return));
    }
    return u;
  }
  function As(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function bd(t, n, a, u, d) {
    for (var p = n._reactName, w = []; a !== null && a !== u; ) {
      var S = a,
        N = S.alternate,
        U = S.stateNode;
      if (N !== null && N === u) break;
      (S.tag === 5 &&
        U !== null &&
        ((S = U),
        d
          ? ((N = mt(a, p)), N != null && w.unshift(Ri(a, N, S)))
          : d || ((N = mt(a, p)), N != null && w.push(Ri(a, N, S)))),
        (a = a.return));
    }
    w.length !== 0 && t.push({ event: n, listeners: w });
  }
  var xg = /\r\n?/g,
    bg = /\u0000|\uFFFD/g;
  function _d(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xg,
        `
`
      )
      .replace(bg, "");
  }
  function La(t, n, a) {
    if (((n = _d(n)), _d(t) !== n && a)) throw Error(s(425));
  }
  function Ma() {}
  var Sl = null,
    El = null;
  function Tl(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0,
    _g = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kd = typeof Promise == "function" ? Promise : void 0,
    kg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kd < "u"
          ? function (t) {
              return kd.resolve(null).then(t).catch(Sg);
            }
          : Cl;
  function Sg(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Rl(t, n) {
    var a = n,
      u = 0;
    do {
      var d = a.nextSibling;
      if ((t.removeChild(a), d && d.nodeType === 8))
        if (((a = d.data), a === "/$")) {
          if (u === 0) {
            (t.removeChild(d), vi(n));
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = d;
    } while (a);
    vi(n);
  }
  function jn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = t.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  function Sd(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return t;
          n--;
        } else a === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Ds = Math.random().toString(36).slice(2),
    qr = "__reactFiber$" + Ds,
    ji = "__reactProps$" + Ds,
    ln = "__reactContainer$" + Ds,
    jl = "__reactEvents$" + Ds,
    Eg = "__reactListeners$" + Ds,
    Tg = "__reactHandles$" + Ds;
  function ss(t) {
    var n = t[qr];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[ln] || a[qr])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (t = Sd(t); t !== null; ) {
            if ((a = t[qr])) return a;
            t = Sd(t);
          }
        return n;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function Ni(t) {
    return (
      (t = t[qr] || t[ln]),
      !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
        ? null
        : t
    );
  }
  function Is(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(s(33));
  }
  function $a(t) {
    return t[ji] || null;
  }
  var Nl = [],
    Ls = -1;
  function Nn(t) {
    return { current: t };
  }
  function Ze(t) {
    0 > Ls || ((t.current = Nl[Ls]), (Nl[Ls] = null), Ls--);
  }
  function Je(t, n) {
    (Ls++, (Nl[Ls] = t.current), (t.current = n));
  }
  var Pn = {},
    Lt = Nn(Pn),
    Gt = Nn(!1),
    is = Pn;
  function Ms(t, n) {
    var a = t.type.contextTypes;
    if (!a) return Pn;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === n)
      return u.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in a) d[p] = n[p];
    return (
      u &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = n),
        (t.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function Jt(t) {
    return ((t = t.childContextTypes), t != null);
  }
  function Ua() {
    (Ze(Gt), Ze(Lt));
  }
  function Ed(t, n, a) {
    if (Lt.current !== Pn) throw Error(s(168));
    (Je(Lt, n), Je(Gt, a));
  }
  function Td(t, n, a) {
    var u = t.stateNode;
    if (((n = n.childContextTypes), typeof u.getChildContext != "function"))
      return a;
    u = u.getChildContext();
    for (var d in u) if (!(d in n)) throw Error(s(108, $e(t) || "Unknown", d));
    return Y({}, a, u);
  }
  function Fa(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        Pn),
      (is = Lt.current),
      Je(Lt, t),
      Je(Gt, Gt.current),
      !0
    );
  }
  function Cd(t, n, a) {
    var u = t.stateNode;
    if (!u) throw Error(s(169));
    (a
      ? ((t = Td(t, n, is)),
        (u.__reactInternalMemoizedMergedChildContext = t),
        Ze(Gt),
        Ze(Lt),
        Je(Lt, t))
      : Ze(Gt),
      Je(Gt, a));
  }
  var un = null,
    za = !1,
    Pl = !1;
  function Rd(t) {
    un === null ? (un = [t]) : un.push(t);
  }
  function Cg(t) {
    ((za = !0), Rd(t));
  }
  function On() {
    if (!Pl && un !== null) {
      Pl = !0;
      var t = 0,
        n = Ke;
      try {
        var a = un;
        for (Ke = 1; t < a.length; t++) {
          var u = a[t];
          do u = u(!0);
          while (u !== null);
        }
        ((un = null), (za = !1));
      } catch (d) {
        throw (un !== null && (un = un.slice(t + 1)), ft(gr, On), d);
      } finally {
        ((Ke = n), (Pl = !1));
      }
    }
    return null;
  }
  var $s = [],
    Us = 0,
    Ba = null,
    Wa = 0,
    yr = [],
    vr = 0,
    as = null,
    cn = 1,
    dn = "";
  function os(t, n) {
    (($s[Us++] = Wa), ($s[Us++] = Ba), (Ba = t), (Wa = n));
  }
  function jd(t, n, a) {
    ((yr[vr++] = cn), (yr[vr++] = dn), (yr[vr++] = as), (as = t));
    var u = cn;
    t = dn;
    var d = 32 - Ge(u) - 1;
    ((u &= ~(1 << d)), (a += 1));
    var p = 32 - Ge(n) + d;
    if (30 < p) {
      var w = d - (d % 5);
      ((p = (u & ((1 << w) - 1)).toString(32)),
        (u >>= w),
        (d -= w),
        (cn = (1 << (32 - Ge(n) + d)) | (a << d) | u),
        (dn = p + t));
    } else ((cn = (1 << p) | (a << d) | u), (dn = t));
  }
  function Ol(t) {
    t.return !== null && (os(t, 1), jd(t, 1, 0));
  }
  function Al(t) {
    for (; t === Ba; )
      ((Ba = $s[--Us]), ($s[Us] = null), (Wa = $s[--Us]), ($s[Us] = null));
    for (; t === as; )
      ((as = yr[--vr]),
        (yr[vr] = null),
        (dn = yr[--vr]),
        (yr[vr] = null),
        (cn = yr[--vr]),
        (yr[vr] = null));
  }
  var lr = null,
    ur = null,
    tt = !1,
    Nr = null;
  function Nd(t, n) {
    var a = _r(5, null, null, 0);
    ((a.elementType = "DELETED"),
      (a.stateNode = n),
      (a.return = t),
      (n = t.deletions),
      n === null ? ((t.deletions = [a]), (t.flags |= 16)) : n.push(a));
  }
  function Pd(t, n) {
    switch (t.tag) {
      case 5:
        var a = t.type;
        return (
          (n =
            n.nodeType !== 1 || a.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((t.stateNode = n), (lr = t), (ur = jn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = t.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((t.stateNode = n), (lr = t), (ur = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((a = as !== null ? { id: cn, overflow: dn } : null),
              (t.memoizedState = {
                dehydrated: n,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = _r(18, null, null, 0)),
              (a.stateNode = n),
              (a.return = t),
              (t.child = a),
              (lr = t),
              (ur = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Dl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Il(t) {
    if (tt) {
      var n = ur;
      if (n) {
        var a = n;
        if (!Pd(t, n)) {
          if (Dl(t)) throw Error(s(418));
          n = jn(a.nextSibling);
          var u = lr;
          n && Pd(t, n)
            ? Nd(u, a)
            : ((t.flags = (t.flags & -4097) | 2), (tt = !1), (lr = t));
        }
      } else {
        if (Dl(t)) throw Error(s(418));
        ((t.flags = (t.flags & -4097) | 2), (tt = !1), (lr = t));
      }
    }
  }
  function Od(t) {
    for (
      t = t.return;
      t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;
    )
      t = t.return;
    lr = t;
  }
  function Ha(t) {
    if (t !== lr) return !1;
    if (!tt) return (Od(t), (tt = !0), !1);
    var n;
    if (
      ((n = t.tag !== 3) &&
        !(n = t.tag !== 5) &&
        ((n = t.type),
        (n = n !== "head" && n !== "body" && !Tl(t.type, t.memoizedProps))),
      n && (n = ur))
    ) {
      if (Dl(t)) throw (Ad(), Error(s(418)));
      for (; n; ) (Nd(t, n), (n = jn(n.nextSibling)));
    }
    if ((Od(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var a = t.data;
            if (a === "/$") {
              if (n === 0) {
                ur = jn(t.nextSibling);
                break e;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          }
          t = t.nextSibling;
        }
        ur = null;
      }
    } else ur = lr ? jn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ad() {
    for (var t = ur; t; ) t = jn(t.nextSibling);
  }
  function Fs() {
    ((ur = lr = null), (tt = !1));
  }
  function Ll(t) {
    Nr === null ? (Nr = [t]) : Nr.push(t);
  }
  var Rg = F.ReactCurrentBatchConfig;
  function Pi(t, n, a) {
    if (
      ((t = a.ref),
      t !== null && typeof t != "function" && typeof t != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(s(309));
          var u = a.stateNode;
        }
        if (!u) throw Error(s(147, t));
        var d = u,
          p = "" + t;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === p
          ? n.ref
          : ((n = function (w) {
              var S = d.refs;
              w === null ? delete S[p] : (S[p] = w);
            }),
            (n._stringRef = p),
            n);
      }
      if (typeof t != "string") throw Error(s(284));
      if (!a._owner) throw Error(s(290, t));
    }
    return t;
  }
  function Va(t, n) {
    throw (
      (t = Object.prototype.toString.call(n)),
      Error(
        s(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : t
        )
      )
    );
  }
  function Dd(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Id(t) {
    function n(L, D) {
      if (t) {
        var M = L.deletions;
        M === null ? ((L.deletions = [D]), (L.flags |= 16)) : M.push(D);
      }
    }
    function a(L, D) {
      if (!t) return null;
      for (; D !== null; ) (n(L, D), (D = D.sibling));
      return null;
    }
    function u(L, D) {
      for (L = new Map(); D !== null; )
        (D.key !== null ? L.set(D.key, D) : L.set(D.index, D), (D = D.sibling));
      return L;
    }
    function d(L, D) {
      return ((L = Fn(L, D)), (L.index = 0), (L.sibling = null), L);
    }
    function p(L, D, M) {
      return (
        (L.index = M),
        t
          ? ((M = L.alternate),
            M !== null
              ? ((M = M.index), M < D ? ((L.flags |= 2), D) : M)
              : ((L.flags |= 2), D))
          : ((L.flags |= 1048576), D)
      );
    }
    function w(L) {
      return (t && L.alternate === null && (L.flags |= 2), L);
    }
    function S(L, D, M, G) {
      return D === null || D.tag !== 6
        ? ((D = Cu(M, L.mode, G)), (D.return = L), D)
        : ((D = d(D, M)), (D.return = L), D);
    }
    function N(L, D, M, G) {
      var ye = M.type;
      return ye === I
        ? V(L, D, M.props.children, G, M.key)
        : D !== null &&
            (D.elementType === ye ||
              (typeof ye == "object" &&
                ye !== null &&
                ye.$$typeof === ee &&
                Dd(ye) === D.type))
          ? ((G = d(D, M.props)), (G.ref = Pi(L, D, M)), (G.return = L), G)
          : ((G = go(M.type, M.key, M.props, null, L.mode, G)),
            (G.ref = Pi(L, D, M)),
            (G.return = L),
            G);
    }
    function U(L, D, M, G) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== M.containerInfo ||
        D.stateNode.implementation !== M.implementation
        ? ((D = Ru(M, L.mode, G)), (D.return = L), D)
        : ((D = d(D, M.children || [])), (D.return = L), D);
    }
    function V(L, D, M, G, ye) {
      return D === null || D.tag !== 7
        ? ((D = ms(M, L.mode, G, ye)), (D.return = L), D)
        : ((D = d(D, M)), (D.return = L), D);
    }
    function K(L, D, M) {
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return ((D = Cu("" + D, L.mode, M)), (D.return = L), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case q:
            return (
              (M = go(D.type, D.key, D.props, null, L.mode, M)),
              (M.ref = Pi(L, null, D)),
              (M.return = L),
              M
            );
          case Q:
            return ((D = Ru(D, L.mode, M)), (D.return = L), D);
          case ee:
            var G = D._init;
            return K(L, G(D._payload), M);
        }
        if (en(D) || X(D))
          return ((D = ms(D, L.mode, M, null)), (D.return = L), D);
        Va(L, D);
      }
      return null;
    }
    function H(L, D, M, G) {
      var ye = D !== null ? D.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return ye !== null ? null : S(L, D, "" + M, G);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case q:
            return M.key === ye ? N(L, D, M, G) : null;
          case Q:
            return M.key === ye ? U(L, D, M, G) : null;
          case ee:
            return ((ye = M._init), H(L, D, ye(M._payload), G));
        }
        if (en(M) || X(M)) return ye !== null ? null : V(L, D, M, G, null);
        Va(L, M);
      }
      return null;
    }
    function se(L, D, M, G, ye) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return ((L = L.get(M) || null), S(D, L, "" + G, ye));
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case q:
            return (
              (L = L.get(G.key === null ? M : G.key) || null),
              N(D, L, G, ye)
            );
          case Q:
            return (
              (L = L.get(G.key === null ? M : G.key) || null),
              U(D, L, G, ye)
            );
          case ee:
            var Se = G._init;
            return se(L, D, M, Se(G._payload), ye);
        }
        if (en(G) || X(G))
          return ((L = L.get(M) || null), V(D, L, G, ye, null));
        Va(D, G);
      }
      return null;
    }
    function ce(L, D, M, G) {
      for (
        var ye = null, Se = null, Ee = D, Re = (D = 0), Rt = null;
        Ee !== null && Re < M.length;
        Re++
      ) {
        Ee.index > Re ? ((Rt = Ee), (Ee = null)) : (Rt = Ee.sibling);
        var We = H(L, Ee, M[Re], G);
        if (We === null) {
          Ee === null && (Ee = Rt);
          break;
        }
        (t && Ee && We.alternate === null && n(L, Ee),
          (D = p(We, D, Re)),
          Se === null ? (ye = We) : (Se.sibling = We),
          (Se = We),
          (Ee = Rt));
      }
      if (Re === M.length) return (a(L, Ee), tt && os(L, Re), ye);
      if (Ee === null) {
        for (; Re < M.length; Re++)
          ((Ee = K(L, M[Re], G)),
            Ee !== null &&
              ((D = p(Ee, D, Re)),
              Se === null ? (ye = Ee) : (Se.sibling = Ee),
              (Se = Ee)));
        return (tt && os(L, Re), ye);
      }
      for (Ee = u(L, Ee); Re < M.length; Re++)
        ((Rt = se(Ee, L, Re, M[Re], G)),
          Rt !== null &&
            (t &&
              Rt.alternate !== null &&
              Ee.delete(Rt.key === null ? Re : Rt.key),
            (D = p(Rt, D, Re)),
            Se === null ? (ye = Rt) : (Se.sibling = Rt),
            (Se = Rt)));
      return (
        t &&
          Ee.forEach(function (zn) {
            return n(L, zn);
          }),
        tt && os(L, Re),
        ye
      );
    }
    function he(L, D, M, G) {
      var ye = X(M);
      if (typeof ye != "function") throw Error(s(150));
      if (((M = ye.call(M)), M == null)) throw Error(s(151));
      for (
        var Se = (ye = null), Ee = D, Re = (D = 0), Rt = null, We = M.next();
        Ee !== null && !We.done;
        Re++, We = M.next()
      ) {
        Ee.index > Re ? ((Rt = Ee), (Ee = null)) : (Rt = Ee.sibling);
        var zn = H(L, Ee, We.value, G);
        if (zn === null) {
          Ee === null && (Ee = Rt);
          break;
        }
        (t && Ee && zn.alternate === null && n(L, Ee),
          (D = p(zn, D, Re)),
          Se === null ? (ye = zn) : (Se.sibling = zn),
          (Se = zn),
          (Ee = Rt));
      }
      if (We.done) return (a(L, Ee), tt && os(L, Re), ye);
      if (Ee === null) {
        for (; !We.done; Re++, We = M.next())
          ((We = K(L, We.value, G)),
            We !== null &&
              ((D = p(We, D, Re)),
              Se === null ? (ye = We) : (Se.sibling = We),
              (Se = We)));
        return (tt && os(L, Re), ye);
      }
      for (Ee = u(L, Ee); !We.done; Re++, We = M.next())
        ((We = se(Ee, L, Re, We.value, G)),
          We !== null &&
            (t &&
              We.alternate !== null &&
              Ee.delete(We.key === null ? Re : We.key),
            (D = p(We, D, Re)),
            Se === null ? (ye = We) : (Se.sibling = We),
            (Se = We)));
      return (
        t &&
          Ee.forEach(function (oy) {
            return n(L, oy);
          }),
        tt && os(L, Re),
        ye
      );
    }
    function pt(L, D, M, G) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === I &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case q:
            e: {
              for (var ye = M.key, Se = D; Se !== null; ) {
                if (Se.key === ye) {
                  if (((ye = M.type), ye === I)) {
                    if (Se.tag === 7) {
                      (a(L, Se.sibling),
                        (D = d(Se, M.props.children)),
                        (D.return = L),
                        (L = D));
                      break e;
                    }
                  } else if (
                    Se.elementType === ye ||
                    (typeof ye == "object" &&
                      ye !== null &&
                      ye.$$typeof === ee &&
                      Dd(ye) === Se.type)
                  ) {
                    (a(L, Se.sibling),
                      (D = d(Se, M.props)),
                      (D.ref = Pi(L, Se, M)),
                      (D.return = L),
                      (L = D));
                    break e;
                  }
                  a(L, Se);
                  break;
                } else n(L, Se);
                Se = Se.sibling;
              }
              M.type === I
                ? ((D = ms(M.props.children, L.mode, G, M.key)),
                  (D.return = L),
                  (L = D))
                : ((G = go(M.type, M.key, M.props, null, L.mode, G)),
                  (G.ref = Pi(L, D, M)),
                  (G.return = L),
                  (L = G));
            }
            return w(L);
          case Q:
            e: {
              for (Se = M.key; D !== null; ) {
                if (D.key === Se)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === M.containerInfo &&
                    D.stateNode.implementation === M.implementation
                  ) {
                    (a(L, D.sibling),
                      (D = d(D, M.children || [])),
                      (D.return = L),
                      (L = D));
                    break e;
                  } else {
                    a(L, D);
                    break;
                  }
                else n(L, D);
                D = D.sibling;
              }
              ((D = Ru(M, L.mode, G)), (D.return = L), (L = D));
            }
            return w(L);
          case ee:
            return ((Se = M._init), pt(L, D, Se(M._payload), G));
        }
        if (en(M)) return ce(L, D, M, G);
        if (X(M)) return he(L, D, M, G);
        Va(L, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          D !== null && D.tag === 6
            ? (a(L, D.sibling), (D = d(D, M)), (D.return = L), (L = D))
            : (a(L, D), (D = Cu(M, L.mode, G)), (D.return = L), (L = D)),
          w(L))
        : a(L, D);
    }
    return pt;
  }
  var zs = Id(!0),
    Ld = Id(!1),
    qa = Nn(null),
    Ka = null,
    Bs = null,
    Ml = null;
  function $l() {
    Ml = Bs = Ka = null;
  }
  function Ul(t) {
    var n = qa.current;
    (Ze(qa), (t._currentValue = n));
  }
  function Fl(t, n, a) {
    for (; t !== null; ) {
      var u = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), u !== null && (u.childLanes |= n))
          : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Ws(t, n) {
    ((Ka = t),
      (Ml = Bs = null),
      (t = t.dependencies),
      t !== null &&
        t.firstContext !== null &&
        ((t.lanes & n) !== 0 && (Qt = !0), (t.firstContext = null)));
  }
  function wr(t) {
    var n = t._currentValue;
    if (Ml !== t)
      if (((t = { context: t, memoizedValue: n, next: null }), Bs === null)) {
        if (Ka === null) throw Error(s(308));
        ((Bs = t), (Ka.dependencies = { lanes: 0, firstContext: t }));
      } else Bs = Bs.next = t;
    return n;
  }
  var ls = null;
  function zl(t) {
    ls === null ? (ls = [t]) : ls.push(t);
  }
  function Md(t, n, a, u) {
    var d = n.interleaved;
    return (
      d === null ? ((a.next = a), zl(n)) : ((a.next = d.next), (d.next = a)),
      (n.interleaved = a),
      hn(t, u)
    );
  }
  function hn(t, n) {
    t.lanes |= n;
    var a = t.alternate;
    for (a !== null && (a.lanes |= n), a = t, t = t.return; t !== null; )
      ((t.childLanes |= n),
        (a = t.alternate),
        a !== null && (a.childLanes |= n),
        (a = t),
        (t = t.return));
    return a.tag === 3 ? a.stateNode : null;
  }
  var An = !1;
  function Bl(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $d(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        }));
  }
  function fn(t, n) {
    return {
      eventTime: t,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Dn(t, n, a) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (ze & 2) !== 0)) {
      var d = u.pending;
      return (
        d === null ? (n.next = n) : ((n.next = d.next), (d.next = n)),
        (u.pending = n),
        hn(t, a)
      );
    }
    return (
      (d = u.interleaved),
      d === null ? ((n.next = n), zl(u)) : ((n.next = d.next), (d.next = n)),
      (u.interleaved = n),
      hn(t, a)
    );
  }
  function Ya(t, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194240) !== 0))
    ) {
      var u = n.lanes;
      ((u &= t.pendingLanes), (a |= u), (n.lanes = a), rl(t, a));
    }
  }
  function Ud(t, n) {
    var a = t.updateQueue,
      u = t.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var d = null,
        p = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var w = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          (p === null ? (d = p = w) : (p = p.next = w), (a = a.next));
        } while (a !== null);
        p === null ? (d = p = n) : (p = p.next = n);
      } else d = p = n;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: u.shared,
        effects: u.effects,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n));
  }
  function Ga(t, n, a, u) {
    var d = t.updateQueue;
    An = !1;
    var p = d.firstBaseUpdate,
      w = d.lastBaseUpdate,
      S = d.shared.pending;
    if (S !== null) {
      d.shared.pending = null;
      var N = S,
        U = N.next;
      ((N.next = null), w === null ? (p = U) : (w.next = U), (w = N));
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (S = V.lastBaseUpdate),
        S !== w &&
          (S === null ? (V.firstBaseUpdate = U) : (S.next = U),
          (V.lastBaseUpdate = N)));
    }
    if (p !== null) {
      var K = d.baseState;
      ((w = 0), (V = U = N = null), (S = p));
      do {
        var H = S.lane,
          se = S.eventTime;
        if ((u & H) === H) {
          V !== null &&
            (V = V.next =
              {
                eventTime: se,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var ce = t,
              he = S;
            switch (((H = n), (se = a), he.tag)) {
              case 1:
                if (((ce = he.payload), typeof ce == "function")) {
                  K = ce.call(se, K, H);
                  break e;
                }
                K = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = he.payload),
                  (H = typeof ce == "function" ? ce.call(se, K, H) : ce),
                  H == null)
                )
                  break e;
                K = Y({}, K, H);
                break e;
              case 2:
                An = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((t.flags |= 64),
            (H = d.effects),
            H === null ? (d.effects = [S]) : H.push(S));
        } else
          ((se = {
            eventTime: se,
            lane: H,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            V === null ? ((U = V = se), (N = K)) : (V = V.next = se),
            (w |= H));
        if (((S = S.next), S === null)) {
          if (((S = d.shared.pending), S === null)) break;
          ((H = S),
            (S = H.next),
            (H.next = null),
            (d.lastBaseUpdate = H),
            (d.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (N = K),
        (d.baseState = N),
        (d.firstBaseUpdate = U),
        (d.lastBaseUpdate = V),
        (n = d.shared.interleaved),
        n !== null)
      ) {
        d = n;
        do ((w |= d.lane), (d = d.next));
        while (d !== n);
      } else p === null && (d.shared.lanes = 0);
      ((ds |= w), (t.lanes = w), (t.memoizedState = K));
    }
  }
  function Fd(t, n, a) {
    if (((t = n.effects), (n.effects = null), t !== null))
      for (n = 0; n < t.length; n++) {
        var u = t[n],
          d = u.callback;
        if (d !== null) {
          if (((u.callback = null), (u = a), typeof d != "function"))
            throw Error(s(191, d));
          d.call(u);
        }
      }
  }
  var Oi = {},
    Kr = Nn(Oi),
    Ai = Nn(Oi),
    Di = Nn(Oi);
  function us(t) {
    if (t === Oi) throw Error(s(174));
    return t;
  }
  function Wl(t, n) {
    switch ((Je(Di, n), Je(Ai, t), Je(Kr, Oi), (t = n.nodeType), t)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : tn(null, "");
        break;
      default:
        ((t = t === 8 ? n.parentNode : n),
          (n = t.namespaceURI || null),
          (t = t.tagName),
          (n = tn(n, t)));
    }
    (Ze(Kr), Je(Kr, n));
  }
  function Hs() {
    (Ze(Kr), Ze(Ai), Ze(Di));
  }
  function zd(t) {
    us(Di.current);
    var n = us(Kr.current),
      a = tn(n, t.type);
    n !== a && (Je(Ai, t), Je(Kr, a));
  }
  function Hl(t) {
    Ai.current === t && (Ze(Kr), Ze(Ai));
  }
  var st = Nn(0);
  function Ja(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Vl = [];
  function ql() {
    for (var t = 0; t < Vl.length; t++)
      Vl[t]._workInProgressVersionPrimary = null;
    Vl.length = 0;
  }
  var Qa = F.ReactCurrentDispatcher,
    Kl = F.ReactCurrentBatchConfig,
    cs = 0,
    it = null,
    _t = null,
    Tt = null,
    Xa = !1,
    Ii = !1,
    Li = 0,
    jg = 0;
  function Mt() {
    throw Error(s(321));
  }
  function Yl(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++)
      if (!jr(t[a], n[a])) return !1;
    return !0;
  }
  function Gl(t, n, a, u, d, p) {
    if (
      ((cs = p),
      (it = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Qa.current = t === null || t.memoizedState === null ? Ag : Dg),
      (t = a(u, d)),
      Ii)
    ) {
      p = 0;
      do {
        if (((Ii = !1), (Li = 0), 25 <= p)) throw Error(s(301));
        ((p += 1),
          (Tt = _t = null),
          (n.updateQueue = null),
          (Qa.current = Ig),
          (t = a(u, d)));
      } while (Ii);
    }
    if (
      ((Qa.current = to),
      (n = _t !== null && _t.next !== null),
      (cs = 0),
      (Tt = _t = it = null),
      (Xa = !1),
      n)
    )
      throw Error(s(300));
    return t;
  }
  function Jl() {
    var t = Li !== 0;
    return ((Li = 0), t);
  }
  function Yr() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Tt === null ? (it.memoizedState = Tt = t) : (Tt = Tt.next = t), Tt);
  }
  function xr() {
    if (_t === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = _t.next;
    var n = Tt === null ? it.memoizedState : Tt.next;
    if (n !== null) ((Tt = n), (_t = t));
    else {
      if (t === null) throw Error(s(310));
      ((_t = t),
        (t = {
          memoizedState: _t.memoizedState,
          baseState: _t.baseState,
          baseQueue: _t.baseQueue,
          queue: _t.queue,
          next: null,
        }),
        Tt === null ? (it.memoizedState = Tt = t) : (Tt = Tt.next = t));
    }
    return Tt;
  }
  function Mi(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Ql(t) {
    var n = xr(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = t;
    var u = _t,
      d = u.baseQueue,
      p = a.pending;
    if (p !== null) {
      if (d !== null) {
        var w = d.next;
        ((d.next = p.next), (p.next = w));
      }
      ((u.baseQueue = d = p), (a.pending = null));
    }
    if (d !== null) {
      ((p = d.next), (u = u.baseState));
      var S = (w = null),
        N = null,
        U = p;
      do {
        var V = U.lane;
        if ((cs & V) === V)
          (N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null,
              }),
            (u = U.hasEagerState ? U.eagerState : t(u, U.action)));
        else {
          var K = {
            lane: V,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          };
          (N === null ? ((S = N = K), (w = u)) : (N = N.next = K),
            (it.lanes |= V),
            (ds |= V));
        }
        U = U.next;
      } while (U !== null && U !== p);
      (N === null ? (w = u) : (N.next = S),
        jr(u, n.memoizedState) || (Qt = !0),
        (n.memoizedState = u),
        (n.baseState = w),
        (n.baseQueue = N),
        (a.lastRenderedState = u));
    }
    if (((t = a.interleaved), t !== null)) {
      d = t;
      do ((p = d.lane), (it.lanes |= p), (ds |= p), (d = d.next));
      while (d !== t);
    } else d === null && (a.lanes = 0);
    return [n.memoizedState, a.dispatch];
  }
  function Xl(t) {
    var n = xr(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = t;
    var u = a.dispatch,
      d = a.pending,
      p = n.memoizedState;
    if (d !== null) {
      a.pending = null;
      var w = (d = d.next);
      do ((p = t(p, w.action)), (w = w.next));
      while (w !== d);
      (jr(p, n.memoizedState) || (Qt = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (a.lastRenderedState = p));
    }
    return [p, u];
  }
  function Bd() {}
  function Wd(t, n) {
    var a = it,
      u = xr(),
      d = n(),
      p = !jr(u.memoizedState, d);
    if (
      (p && ((u.memoizedState = d), (Qt = !0)),
      (u = u.queue),
      Zl(qd.bind(null, a, u, t), [t]),
      u.getSnapshot !== n || p || (Tt !== null && Tt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        $i(9, Vd.bind(null, a, u, d, n), void 0, null),
        Ct === null)
      )
        throw Error(s(349));
      (cs & 30) !== 0 || Hd(a, n, d);
    }
    return d;
  }
  function Hd(t, n, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = it.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (it.updateQueue = n),
          (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t)));
  }
  function Vd(t, n, a, u) {
    ((n.value = a), (n.getSnapshot = u), Kd(n) && Yd(t));
  }
  function qd(t, n, a) {
    return a(function () {
      Kd(n) && Yd(t);
    });
  }
  function Kd(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !jr(t, a);
    } catch {
      return !0;
    }
  }
  function Yd(t) {
    var n = hn(t, 1);
    n !== null && Dr(n, t, 1, -1);
  }
  function Gd(t) {
    var n = Yr();
    return (
      typeof t == "function" && (t = t()),
      (n.memoizedState = n.baseState = t),
      (t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mi,
        lastRenderedState: t,
      }),
      (n.queue = t),
      (t = t.dispatch = Og.bind(null, it, t)),
      [n.memoizedState, t]
    );
  }
  function $i(t, n, a, u) {
    return (
      (t = { tag: t, create: n, destroy: a, deps: u, next: null }),
      (n = it.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (it.updateQueue = n),
          (n.lastEffect = t.next = t))
        : ((a = n.lastEffect),
          a === null
            ? (n.lastEffect = t.next = t)
            : ((u = a.next), (a.next = t), (t.next = u), (n.lastEffect = t))),
      t
    );
  }
  function Jd() {
    return xr().memoizedState;
  }
  function Za(t, n, a, u) {
    var d = Yr();
    ((it.flags |= t),
      (d.memoizedState = $i(1 | n, a, void 0, u === void 0 ? null : u)));
  }
  function eo(t, n, a, u) {
    var d = xr();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (_t !== null) {
      var w = _t.memoizedState;
      if (((p = w.destroy), u !== null && Yl(u, w.deps))) {
        d.memoizedState = $i(n, a, p, u);
        return;
      }
    }
    ((it.flags |= t), (d.memoizedState = $i(1 | n, a, p, u)));
  }
  function Qd(t, n) {
    return Za(8390656, 8, t, n);
  }
  function Zl(t, n) {
    return eo(2048, 8, t, n);
  }
  function Xd(t, n) {
    return eo(4, 2, t, n);
  }
  function Zd(t, n) {
    return eo(4, 4, t, n);
  }
  function eh(t, n) {
    if (typeof n == "function")
      return (
        (t = t()),
        n(t),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function th(t, n, a) {
    return (
      (a = a != null ? a.concat([t]) : null),
      eo(4, 4, eh.bind(null, n, t), a)
    );
  }
  function eu() {}
  function rh(t, n) {
    var a = xr();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return u !== null && n !== null && Yl(n, u[1])
      ? u[0]
      : ((a.memoizedState = [t, n]), t);
  }
  function nh(t, n) {
    var a = xr();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return u !== null && n !== null && Yl(n, u[1])
      ? u[0]
      : ((t = t()), (a.memoizedState = [t, n]), t);
  }
  function sh(t, n, a) {
    return (cs & 21) === 0
      ? (t.baseState && ((t.baseState = !1), (Qt = !0)), (t.memoizedState = a))
      : (jr(a, n) ||
          ((a = Dc()), (it.lanes |= a), (ds |= a), (t.baseState = !0)),
        n);
  }
  function Ng(t, n) {
    var a = Ke;
    ((Ke = a !== 0 && 4 > a ? a : 4), t(!0));
    var u = Kl.transition;
    Kl.transition = {};
    try {
      (t(!1), n());
    } finally {
      ((Ke = a), (Kl.transition = u));
    }
  }
  function ih() {
    return xr().memoizedState;
  }
  function Pg(t, n, a) {
    var u = $n(t);
    if (
      ((a = {
        lane: u,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ah(t))
    )
      oh(n, a);
    else if (((a = Md(t, n, a, u)), a !== null)) {
      var d = Vt();
      (Dr(a, t, u, d), lh(a, n, u));
    }
  }
  function Og(t, n, a) {
    var u = $n(t),
      d = {
        lane: u,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ah(t)) oh(n, d);
    else {
      var p = t.alternate;
      if (
        t.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var w = n.lastRenderedState,
            S = p(w, a);
          if (((d.hasEagerState = !0), (d.eagerState = S), jr(S, w))) {
            var N = n.interleaved;
            (N === null
              ? ((d.next = d), zl(n))
              : ((d.next = N.next), (N.next = d)),
              (n.interleaved = d));
            return;
          }
        } catch {
        } finally {
        }
      ((a = Md(t, n, d, u)),
        a !== null && ((d = Vt()), Dr(a, t, u, d), lh(a, n, u)));
    }
  }
  function ah(t) {
    var n = t.alternate;
    return t === it || (n !== null && n === it);
  }
  function oh(t, n) {
    Ii = Xa = !0;
    var a = t.pending;
    (a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n));
  }
  function lh(t, n, a) {
    if ((a & 4194240) !== 0) {
      var u = n.lanes;
      ((u &= t.pendingLanes), (a |= u), (n.lanes = a), rl(t, a));
    }
  }
  var to = {
      readContext: wr,
      useCallback: Mt,
      useContext: Mt,
      useEffect: Mt,
      useImperativeHandle: Mt,
      useInsertionEffect: Mt,
      useLayoutEffect: Mt,
      useMemo: Mt,
      useReducer: Mt,
      useRef: Mt,
      useState: Mt,
      useDebugValue: Mt,
      useDeferredValue: Mt,
      useTransition: Mt,
      useMutableSource: Mt,
      useSyncExternalStore: Mt,
      useId: Mt,
      unstable_isNewReconciler: !1,
    },
    Ag = {
      readContext: wr,
      useCallback: function (t, n) {
        return ((Yr().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: wr,
      useEffect: Qd,
      useImperativeHandle: function (t, n, a) {
        return (
          (a = a != null ? a.concat([t]) : null),
          Za(4194308, 4, eh.bind(null, n, t), a)
        );
      },
      useLayoutEffect: function (t, n) {
        return Za(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        return Za(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var a = Yr();
        return (
          (n = n === void 0 ? null : n),
          (t = t()),
          (a.memoizedState = [t, n]),
          t
        );
      },
      useReducer: function (t, n, a) {
        var u = Yr();
        return (
          (n = a !== void 0 ? a(n) : n),
          (u.memoizedState = u.baseState = n),
          (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (u.queue = t),
          (t = t.dispatch = Pg.bind(null, it, t)),
          [u.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = Yr();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: Gd,
      useDebugValue: eu,
      useDeferredValue: function (t) {
        return (Yr().memoizedState = t);
      },
      useTransition: function () {
        var t = Gd(!1),
          n = t[0];
        return ((t = Ng.bind(null, t[1])), (Yr().memoizedState = t), [n, t]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (t, n, a) {
        var u = it,
          d = Yr();
        if (tt) {
          if (a === void 0) throw Error(s(407));
          a = a();
        } else {
          if (((a = n()), Ct === null)) throw Error(s(349));
          (cs & 30) !== 0 || Hd(u, n, a);
        }
        d.memoizedState = a;
        var p = { value: a, getSnapshot: n };
        return (
          (d.queue = p),
          Qd(qd.bind(null, u, p, t), [t]),
          (u.flags |= 2048),
          $i(9, Vd.bind(null, u, p, a, n), void 0, null),
          a
        );
      },
      useId: function () {
        var t = Yr(),
          n = Ct.identifierPrefix;
        if (tt) {
          var a = dn,
            u = cn;
          ((a = (u & ~(1 << (32 - Ge(u) - 1))).toString(32) + a),
            (n = ":" + n + "R" + a),
            (a = Li++),
            0 < a && (n += "H" + a.toString(32)),
            (n += ":"));
        } else ((a = jg++), (n = ":" + n + "r" + a.toString(32) + ":"));
        return (t.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Dg = {
      readContext: wr,
      useCallback: rh,
      useContext: wr,
      useEffect: Zl,
      useImperativeHandle: th,
      useInsertionEffect: Xd,
      useLayoutEffect: Zd,
      useMemo: nh,
      useReducer: Ql,
      useRef: Jd,
      useState: function () {
        return Ql(Mi);
      },
      useDebugValue: eu,
      useDeferredValue: function (t) {
        var n = xr();
        return sh(n, _t.memoizedState, t);
      },
      useTransition: function () {
        var t = Ql(Mi)[0],
          n = xr().memoizedState;
        return [t, n];
      },
      useMutableSource: Bd,
      useSyncExternalStore: Wd,
      useId: ih,
      unstable_isNewReconciler: !1,
    },
    Ig = {
      readContext: wr,
      useCallback: rh,
      useContext: wr,
      useEffect: Zl,
      useImperativeHandle: th,
      useInsertionEffect: Xd,
      useLayoutEffect: Zd,
      useMemo: nh,
      useReducer: Xl,
      useRef: Jd,
      useState: function () {
        return Xl(Mi);
      },
      useDebugValue: eu,
      useDeferredValue: function (t) {
        var n = xr();
        return _t === null ? (n.memoizedState = t) : sh(n, _t.memoizedState, t);
      },
      useTransition: function () {
        var t = Xl(Mi)[0],
          n = xr().memoizedState;
        return [t, n];
      },
      useMutableSource: Bd,
      useSyncExternalStore: Wd,
      useId: ih,
      unstable_isNewReconciler: !1,
    };
  function Pr(t, n) {
    if (t && t.defaultProps) {
      ((n = Y({}, n)), (t = t.defaultProps));
      for (var a in t) n[a] === void 0 && (n[a] = t[a]);
      return n;
    }
    return n;
  }
  function tu(t, n, a, u) {
    ((n = t.memoizedState),
      (a = a(u, n)),
      (a = a == null ? n : Y({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var ro = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? de(t) === t : !1;
    },
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var u = Vt(),
        d = $n(t),
        p = fn(u, d);
      ((p.payload = n),
        a != null && (p.callback = a),
        (n = Dn(t, p, d)),
        n !== null && (Dr(n, t, d, u), Ya(n, t, d)));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var u = Vt(),
        d = $n(t),
        p = fn(u, d);
      ((p.tag = 1),
        (p.payload = n),
        a != null && (p.callback = a),
        (n = Dn(t, p, d)),
        n !== null && (Dr(n, t, d, u), Ya(n, t, d)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = Vt(),
        u = $n(t),
        d = fn(a, u);
      ((d.tag = 2),
        n != null && (d.callback = n),
        (n = Dn(t, d, u)),
        n !== null && (Dr(n, t, u, a), Ya(n, t, u)));
    },
  };
  function uh(t, n, a, u, d, p, w) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, p, w)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Si(a, u) || !Si(d, p)
          : !0
    );
  }
  function ch(t, n, a) {
    var u = !1,
      d = Pn,
      p = n.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = wr(p))
        : ((d = Jt(n) ? is : Lt.current),
          (u = n.contextTypes),
          (p = (u = u != null) ? Ms(t, d) : Pn)),
      (n = new n(a, p)),
      (t.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = ro),
      (t.stateNode = n),
      (n._reactInternals = t),
      u &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = d),
        (t.__reactInternalMemoizedMaskedChildContext = p)),
      n
    );
  }
  function dh(t, n, a, u) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, u),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, u),
      n.state !== t && ro.enqueueReplaceState(n, n.state, null));
  }
  function ru(t, n, a, u) {
    var d = t.stateNode;
    ((d.props = a), (d.state = t.memoizedState), (d.refs = {}), Bl(t));
    var p = n.contextType;
    (typeof p == "object" && p !== null
      ? (d.context = wr(p))
      : ((p = Jt(n) ? is : Lt.current), (d.context = Ms(t, p))),
      (d.state = t.memoizedState),
      (p = n.getDerivedStateFromProps),
      typeof p == "function" && (tu(t, n, p, a), (d.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((n = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        n !== d.state && ro.enqueueReplaceState(d, d.state, null),
        Ga(t, a, d, u),
        (d.state = t.memoizedState)),
      typeof d.componentDidMount == "function" && (t.flags |= 4194308));
  }
  function Vs(t, n) {
    try {
      var a = "",
        u = n;
      do ((a += xe(u)), (u = u.return));
      while (u);
      var d = a;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: t, source: n, stack: d, digest: null };
  }
  function nu(t, n, a) {
    return { value: t, source: null, stack: a ?? null, digest: n ?? null };
  }
  function su(t, n) {
    try {
      console.error(n.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var Lg = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(t, n, a) {
    ((a = fn(-1, a)), (a.tag = 3), (a.payload = { element: null }));
    var u = n.value;
    return (
      (a.callback = function () {
        (uo || ((uo = !0), (wu = u)), su(t, n));
      }),
      a
    );
  }
  function fh(t, n, a) {
    ((a = fn(-1, a)), (a.tag = 3));
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = n.value;
      ((a.payload = function () {
        return u(d);
      }),
        (a.callback = function () {
          su(t, n);
        }));
    }
    var p = t.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (a.callback = function () {
          (su(t, n),
            typeof u != "function" &&
              (Ln === null ? (Ln = new Set([this])) : Ln.add(this)));
          var w = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: w !== null ? w : "",
          });
        }),
      a
    );
  }
  function ph(t, n, a) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Lg();
      var d = new Set();
      u.set(n, d);
    } else ((d = u.get(n)), d === void 0 && ((d = new Set()), u.set(n, d)));
    d.has(a) || (d.add(a), (t = Jg.bind(null, t, n, a)), n.then(t, t));
  }
  function mh(t) {
    do {
      var n;
      if (
        ((n = t.tag === 13) &&
          ((n = t.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function gh(t, n, a, u, d) {
    return (t.mode & 1) === 0
      ? (t === n
          ? (t.flags |= 65536)
          : ((t.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((n = fn(-1, 1)), (n.tag = 2), Dn(a, n, 1))),
            (a.lanes |= 1)),
        t)
      : ((t.flags |= 65536), (t.lanes = d), t);
  }
  var Mg = F.ReactCurrentOwner,
    Qt = !1;
  function Ht(t, n, a, u) {
    n.child = t === null ? Ld(n, null, a, u) : zs(n, t.child, a, u);
  }
  function yh(t, n, a, u, d) {
    a = a.render;
    var p = n.ref;
    return (
      Ws(n, d),
      (u = Gl(t, n, a, u, p, d)),
      (a = Jl()),
      t !== null && !Qt
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~d),
          pn(t, n, d))
        : (tt && a && Ol(n), (n.flags |= 1), Ht(t, n, u, d), n.child)
    );
  }
  function vh(t, n, a, u, d) {
    if (t === null) {
      var p = a.type;
      return typeof p == "function" &&
        !Tu(p) &&
        p.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((n.tag = 15), (n.type = p), wh(t, n, p, u, d))
        : ((t = go(a.type, null, u, n, n.mode, d)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((p = t.child), (t.lanes & d) === 0)) {
      var w = p.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Si), a(w, u) && t.ref === n.ref)
      )
        return pn(t, n, d);
    }
    return (
      (n.flags |= 1),
      (t = Fn(p, u)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function wh(t, n, a, u, d) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (Si(p, u) && t.ref === n.ref)
        if (((Qt = !1), (n.pendingProps = u = p), (t.lanes & d) !== 0))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return ((n.lanes = t.lanes), pn(t, n, d));
    }
    return iu(t, n, a, u, d);
  }
  function xh(t, n, a) {
    var u = n.pendingProps,
      d = u.children,
      p = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden")
      if ((n.mode & 1) === 0)
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Je(Ks, cr),
          (cr |= a));
      else {
        if ((a & 1073741824) === 0)
          return (
            (t = p !== null ? p.baseLanes | a : a),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: t,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Je(Ks, cr),
            (cr |= t),
            null
          );
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (u = p !== null ? p.baseLanes : a),
          Je(Ks, cr),
          (cr |= u));
      }
    else
      (p !== null ? ((u = p.baseLanes | a), (n.memoizedState = null)) : (u = a),
        Je(Ks, cr),
        (cr |= u));
    return (Ht(t, n, d, a), n.child);
  }
  function bh(t, n) {
    var a = n.ref;
    ((t === null && a !== null) || (t !== null && t.ref !== a)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function iu(t, n, a, u, d) {
    var p = Jt(a) ? is : Lt.current;
    return (
      (p = Ms(n, p)),
      Ws(n, d),
      (a = Gl(t, n, a, u, p, d)),
      (u = Jl()),
      t !== null && !Qt
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~d),
          pn(t, n, d))
        : (tt && u && Ol(n), (n.flags |= 1), Ht(t, n, a, d), n.child)
    );
  }
  function _h(t, n, a, u, d) {
    if (Jt(a)) {
      var p = !0;
      Fa(n);
    } else p = !1;
    if ((Ws(n, d), n.stateNode === null))
      (so(t, n), ch(n, a, u), ru(n, a, u, d), (u = !0));
    else if (t === null) {
      var w = n.stateNode,
        S = n.memoizedProps;
      w.props = S;
      var N = w.context,
        U = a.contextType;
      typeof U == "object" && U !== null
        ? (U = wr(U))
        : ((U = Jt(a) ? is : Lt.current), (U = Ms(n, U)));
      var V = a.getDerivedStateFromProps,
        K =
          typeof V == "function" ||
          typeof w.getSnapshotBeforeUpdate == "function";
      (K ||
        (typeof w.UNSAFE_componentWillReceiveProps != "function" &&
          typeof w.componentWillReceiveProps != "function") ||
        ((S !== u || N !== U) && dh(n, w, u, U)),
        (An = !1));
      var H = n.memoizedState;
      ((w.state = H),
        Ga(n, u, w, d),
        (N = n.memoizedState),
        S !== u || H !== N || Gt.current || An
          ? (typeof V == "function" && (tu(n, a, V, u), (N = n.memoizedState)),
            (S = An || uh(n, a, S, u, H, N, U))
              ? (K ||
                  (typeof w.UNSAFE_componentWillMount != "function" &&
                    typeof w.componentWillMount != "function") ||
                  (typeof w.componentWillMount == "function" &&
                    w.componentWillMount(),
                  typeof w.UNSAFE_componentWillMount == "function" &&
                    w.UNSAFE_componentWillMount()),
                typeof w.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof w.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = u),
                (n.memoizedState = N)),
            (w.props = u),
            (w.state = N),
            (w.context = U),
            (u = S))
          : (typeof w.componentDidMount == "function" && (n.flags |= 4194308),
            (u = !1)));
    } else {
      ((w = n.stateNode),
        $d(t, n),
        (S = n.memoizedProps),
        (U = n.type === n.elementType ? S : Pr(n.type, S)),
        (w.props = U),
        (K = n.pendingProps),
        (H = w.context),
        (N = a.contextType),
        typeof N == "object" && N !== null
          ? (N = wr(N))
          : ((N = Jt(a) ? is : Lt.current), (N = Ms(n, N))));
      var se = a.getDerivedStateFromProps;
      ((V =
        typeof se == "function" ||
        typeof w.getSnapshotBeforeUpdate == "function") ||
        (typeof w.UNSAFE_componentWillReceiveProps != "function" &&
          typeof w.componentWillReceiveProps != "function") ||
        ((S !== K || H !== N) && dh(n, w, u, N)),
        (An = !1),
        (H = n.memoizedState),
        (w.state = H),
        Ga(n, u, w, d));
      var ce = n.memoizedState;
      S !== K || H !== ce || Gt.current || An
        ? (typeof se == "function" && (tu(n, a, se, u), (ce = n.memoizedState)),
          (U = An || uh(n, a, U, u, H, ce, N) || !1)
            ? (V ||
                (typeof w.UNSAFE_componentWillUpdate != "function" &&
                  typeof w.componentWillUpdate != "function") ||
                (typeof w.componentWillUpdate == "function" &&
                  w.componentWillUpdate(u, ce, N),
                typeof w.UNSAFE_componentWillUpdate == "function" &&
                  w.UNSAFE_componentWillUpdate(u, ce, N)),
              typeof w.componentDidUpdate == "function" && (n.flags |= 4),
              typeof w.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof w.componentDidUpdate != "function" ||
                (S === t.memoizedProps && H === t.memoizedState) ||
                (n.flags |= 4),
              typeof w.getSnapshotBeforeUpdate != "function" ||
                (S === t.memoizedProps && H === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = u),
              (n.memoizedState = ce)),
          (w.props = u),
          (w.state = ce),
          (w.context = N),
          (u = U))
        : (typeof w.componentDidUpdate != "function" ||
            (S === t.memoizedProps && H === t.memoizedState) ||
            (n.flags |= 4),
          typeof w.getSnapshotBeforeUpdate != "function" ||
            (S === t.memoizedProps && H === t.memoizedState) ||
            (n.flags |= 1024),
          (u = !1));
    }
    return au(t, n, a, u, p, d);
  }
  function au(t, n, a, u, d, p) {
    bh(t, n);
    var w = (n.flags & 128) !== 0;
    if (!u && !w) return (d && Cd(n, a, !1), pn(t, n, p));
    ((u = n.stateNode), (Mg.current = n));
    var S =
      w && typeof a.getDerivedStateFromError != "function" ? null : u.render();
    return (
      (n.flags |= 1),
      t !== null && w
        ? ((n.child = zs(n, t.child, null, p)), (n.child = zs(n, null, S, p)))
        : Ht(t, n, S, p),
      (n.memoizedState = u.state),
      d && Cd(n, a, !0),
      n.child
    );
  }
  function kh(t) {
    var n = t.stateNode;
    (n.pendingContext
      ? Ed(t, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ed(t, n.context, !1),
      Wl(t, n.containerInfo));
  }
  function Sh(t, n, a, u, d) {
    return (Fs(), Ll(d), (n.flags |= 256), Ht(t, n, a, u), n.child);
  }
  var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lu(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Eh(t, n, a) {
    var u = n.pendingProps,
      d = st.current,
      p = !1,
      w = (n.flags & 128) !== 0,
      S;
    if (
      ((S = w) ||
        (S = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0),
      S
        ? ((p = !0), (n.flags &= -129))
        : (t === null || t.memoizedState !== null) && (d |= 1),
      Je(st, d & 1),
      t === null)
    )
      return (
        Il(n),
        (t = n.memoizedState),
        t !== null && ((t = t.dehydrated), t !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : t.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((w = u.children),
            (t = u.fallback),
            p
              ? ((u = n.mode),
                (p = n.child),
                (w = { mode: "hidden", children: w }),
                (u & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = w))
                  : (p = yo(w, u, 0, null)),
                (t = ms(t, u, a, null)),
                (p.return = n),
                (t.return = n),
                (p.sibling = t),
                (n.child = p),
                (n.child.memoizedState = lu(a)),
                (n.memoizedState = ou),
                t)
              : uu(n, w))
      );
    if (((d = t.memoizedState), d !== null && ((S = d.dehydrated), S !== null)))
      return $g(t, n, w, u, S, d, a);
    if (p) {
      ((p = u.fallback), (w = n.mode), (d = t.child), (S = d.sibling));
      var N = { mode: "hidden", children: u.children };
      return (
        (w & 1) === 0 && n.child !== d
          ? ((u = n.child),
            (u.childLanes = 0),
            (u.pendingProps = N),
            (n.deletions = null))
          : ((u = Fn(d, N)), (u.subtreeFlags = d.subtreeFlags & 14680064)),
        S !== null ? (p = Fn(S, p)) : ((p = ms(p, w, a, null)), (p.flags |= 2)),
        (p.return = n),
        (u.return = n),
        (u.sibling = p),
        (n.child = u),
        (u = p),
        (p = n.child),
        (w = t.child.memoizedState),
        (w =
          w === null
            ? lu(a)
            : {
                baseLanes: w.baseLanes | a,
                cachePool: null,
                transitions: w.transitions,
              }),
        (p.memoizedState = w),
        (p.childLanes = t.childLanes & ~a),
        (n.memoizedState = ou),
        u
      );
    }
    return (
      (p = t.child),
      (t = p.sibling),
      (u = Fn(p, { mode: "visible", children: u.children })),
      (n.mode & 1) === 0 && (u.lanes = a),
      (u.return = n),
      (u.sibling = null),
      t !== null &&
        ((a = n.deletions),
        a === null ? ((n.deletions = [t]), (n.flags |= 16)) : a.push(t)),
      (n.child = u),
      (n.memoizedState = null),
      u
    );
  }
  function uu(t, n) {
    return (
      (n = yo({ mode: "visible", children: n }, t.mode, 0, null)),
      (n.return = t),
      (t.child = n)
    );
  }
  function no(t, n, a, u) {
    return (
      u !== null && Ll(u),
      zs(n, t.child, null, a),
      (t = uu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function $g(t, n, a, u, d, p, w) {
    if (a)
      return n.flags & 256
        ? ((n.flags &= -257), (u = nu(Error(s(422)))), no(t, n, w, u))
        : n.memoizedState !== null
          ? ((n.child = t.child), (n.flags |= 128), null)
          : ((p = u.fallback),
            (d = n.mode),
            (u = yo({ mode: "visible", children: u.children }, d, 0, null)),
            (p = ms(p, d, w, null)),
            (p.flags |= 2),
            (u.return = n),
            (p.return = n),
            (u.sibling = p),
            (n.child = u),
            (n.mode & 1) !== 0 && zs(n, t.child, null, w),
            (n.child.memoizedState = lu(w)),
            (n.memoizedState = ou),
            p);
    if ((n.mode & 1) === 0) return no(t, n, w, null);
    if (d.data === "$!") {
      if (((u = d.nextSibling && d.nextSibling.dataset), u)) var S = u.dgst;
      return (
        (u = S),
        (p = Error(s(419))),
        (u = nu(p, u, void 0)),
        no(t, n, w, u)
      );
    }
    if (((S = (w & t.childLanes) !== 0), Qt || S)) {
      if (((u = Ct), u !== null)) {
        switch (w & -w) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        ((d = (d & (u.suspendedLanes | w)) !== 0 ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), hn(t, d), Dr(u, t, d, -1)));
      }
      return (Eu(), (u = nu(Error(s(421)))), no(t, n, w, u));
    }
    return d.data === "$?"
      ? ((n.flags |= 128),
        (n.child = t.child),
        (n = Qg.bind(null, t)),
        (d._reactRetry = n),
        null)
      : ((t = p.treeContext),
        (ur = jn(d.nextSibling)),
        (lr = n),
        (tt = !0),
        (Nr = null),
        t !== null &&
          ((yr[vr++] = cn),
          (yr[vr++] = dn),
          (yr[vr++] = as),
          (cn = t.id),
          (dn = t.overflow),
          (as = n)),
        (n = uu(n, u.children)),
        (n.flags |= 4096),
        n);
  }
  function Th(t, n, a) {
    t.lanes |= n;
    var u = t.alternate;
    (u !== null && (u.lanes |= n), Fl(t.return, n, a));
  }
  function cu(t, n, a, u, d) {
    var p = t.memoizedState;
    p === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: d,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = u),
        (p.tail = a),
        (p.tailMode = d));
  }
  function Ch(t, n, a) {
    var u = n.pendingProps,
      d = u.revealOrder,
      p = u.tail;
    if ((Ht(t, n, u.children, a), (u = st.current), (u & 2) !== 0))
      ((u = (u & 1) | 2), (n.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Th(t, a, n);
          else if (t.tag === 19) Th(t, a, n);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      u &= 1;
    }
    if ((Je(st, u), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (a = n.child, d = null; a !== null; )
            ((t = a.alternate),
              t !== null && Ja(t) === null && (d = a),
              (a = a.sibling));
          ((a = d),
            a === null
              ? ((d = n.child), (n.child = null))
              : ((d = a.sibling), (a.sibling = null)),
            cu(n, !1, d, a, p));
          break;
        case "backwards":
          for (a = null, d = n.child, n.child = null; d !== null; ) {
            if (((t = d.alternate), t !== null && Ja(t) === null)) {
              n.child = d;
              break;
            }
            ((t = d.sibling), (d.sibling = a), (a = d), (d = t));
          }
          cu(n, !0, a, null, p);
          break;
        case "together":
          cu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function so(t, n) {
    (n.mode & 1) === 0 &&
      t !== null &&
      ((t.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function pn(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (ds |= n.lanes),
      (a & n.childLanes) === 0)
    )
      return null;
    if (t !== null && n.child !== t.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        t = n.child, a = Fn(t, t.pendingProps), n.child = a, a.return = n;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (a = a.sibling = Fn(t, t.pendingProps)),
          (a.return = n));
      a.sibling = null;
    }
    return n.child;
  }
  function Ug(t, n, a) {
    switch (n.tag) {
      case 3:
        (kh(n), Fs());
        break;
      case 5:
        zd(n);
        break;
      case 1:
        Jt(n.type) && Fa(n);
        break;
      case 4:
        Wl(n, n.stateNode.containerInfo);
        break;
      case 10:
        var u = n.type._context,
          d = n.memoizedProps.value;
        (Je(qa, u._currentValue), (u._currentValue = d));
        break;
      case 13:
        if (((u = n.memoizedState), u !== null))
          return u.dehydrated !== null
            ? (Je(st, st.current & 1), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? Eh(t, n, a)
              : (Je(st, st.current & 1),
                (t = pn(t, n, a)),
                t !== null ? t.sibling : null);
        Je(st, st.current & 1);
        break;
      case 19:
        if (((u = (a & n.childLanes) !== 0), (t.flags & 128) !== 0)) {
          if (u) return Ch(t, n, a);
          n.flags |= 128;
        }
        if (
          ((d = n.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Je(st, st.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), xh(t, n, a));
    }
    return pn(t, n, a);
  }
  var Rh, du, jh, Nh;
  ((Rh = function (t, n) {
    for (var a = n.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === n) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n) return;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
  }),
    (du = function () {}),
    (jh = function (t, n, a, u) {
      var d = t.memoizedProps;
      if (d !== u) {
        ((t = n.stateNode), us(Kr.current));
        var p = null;
        switch (a) {
          case "input":
            ((d = $r(t, d)), (u = $r(t, u)), (p = []));
            break;
          case "select":
            ((d = Y({}, d, { value: void 0 })),
              (u = Y({}, u, { value: void 0 })),
              (p = []));
            break;
          case "textarea":
            ((d = bt(t, d)), (u = bt(t, u)), (p = []));
            break;
          default:
            typeof d.onClick != "function" &&
              typeof u.onClick == "function" &&
              (t.onclick = Ma);
        }
        rn(a, u);
        var w;
        a = null;
        for (U in d)
          if (!u.hasOwnProperty(U) && d.hasOwnProperty(U) && d[U] != null)
            if (U === "style") {
              var S = d[U];
              for (w in S) S.hasOwnProperty(w) && (a || (a = {}), (a[w] = ""));
            } else
              U !== "dangerouslySetInnerHTML" &&
                U !== "children" &&
                U !== "suppressContentEditableWarning" &&
                U !== "suppressHydrationWarning" &&
                U !== "autoFocus" &&
                (o.hasOwnProperty(U)
                  ? p || (p = [])
                  : (p = p || []).push(U, null));
        for (U in u) {
          var N = u[U];
          if (
            ((S = d != null ? d[U] : void 0),
            u.hasOwnProperty(U) && N !== S && (N != null || S != null))
          )
            if (U === "style")
              if (S) {
                for (w in S)
                  !S.hasOwnProperty(w) ||
                    (N && N.hasOwnProperty(w)) ||
                    (a || (a = {}), (a[w] = ""));
                for (w in N)
                  N.hasOwnProperty(w) &&
                    S[w] !== N[w] &&
                    (a || (a = {}), (a[w] = N[w]));
              } else (a || (p || (p = []), p.push(U, a)), (a = N));
            else
              U === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (S = S ? S.__html : void 0),
                  N != null && S !== N && (p = p || []).push(U, N))
                : U === "children"
                  ? (typeof N != "string" && typeof N != "number") ||
                    (p = p || []).push(U, "" + N)
                  : U !== "suppressContentEditableWarning" &&
                    U !== "suppressHydrationWarning" &&
                    (o.hasOwnProperty(U)
                      ? (N != null && U === "onScroll" && Xe("scroll", t),
                        p || S === N || (p = []))
                      : (p = p || []).push(U, N));
        }
        a && (p = p || []).push("style", a);
        var U = p;
        (n.updateQueue = U) && (n.flags |= 4);
      }
    }),
    (Nh = function (t, n, a, u) {
      a !== u && (n.flags |= 4);
    }));
  function Ui(t, n) {
    if (!tt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var u = null; a !== null; )
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function $t(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      u = 0;
    if (n)
      for (var d = t.child; d !== null; )
        ((a |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags & 14680064),
          (u |= d.flags & 14680064),
          (d.return = t),
          (d = d.sibling));
    else
      for (d = t.child; d !== null; )
        ((a |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags),
          (u |= d.flags),
          (d.return = t),
          (d = d.sibling));
    return ((t.subtreeFlags |= u), (t.childLanes = a), n);
  }
  function Fg(t, n, a) {
    var u = n.pendingProps;
    switch ((Al(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ($t(n), null);
      case 1:
        return (Jt(n.type) && Ua(), $t(n), null);
      case 3:
        return (
          (u = n.stateNode),
          Hs(),
          Ze(Gt),
          Ze(Lt),
          ql(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ha(n)
              ? (n.flags |= 4)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Nr !== null && (_u(Nr), (Nr = null)))),
          du(t, n),
          $t(n),
          null
        );
      case 5:
        Hl(n);
        var d = us(Di.current);
        if (((a = n.type), t !== null && n.stateNode != null))
          (jh(t, n, a, u, d),
            t.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return ($t(n), null);
          }
          if (((t = us(Kr.current)), Ha(n))) {
            ((u = n.stateNode), (a = n.type));
            var p = n.memoizedProps;
            switch (((u[qr] = n), (u[ji] = p), (t = (n.mode & 1) !== 0), a)) {
              case "dialog":
                (Xe("cancel", u), Xe("close", u));
                break;
              case "iframe":
              case "object":
              case "embed":
                Xe("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Ti.length; d++) Xe(Ti[d], u);
                break;
              case "source":
                Xe("error", u);
                break;
              case "img":
              case "image":
              case "link":
                (Xe("error", u), Xe("load", u));
                break;
              case "details":
                Xe("toggle", u);
                break;
              case "input":
                (Ts(u, p), Xe("invalid", u));
                break;
              case "select":
                ((u._wrapperState = { wasMultiple: !!p.multiple }),
                  Xe("invalid", u));
                break;
              case "textarea":
                (Cr(u, p), Xe("invalid", u));
            }
            (rn(a, p), (d = null));
            for (var w in p)
              if (p.hasOwnProperty(w)) {
                var S = p[w];
                w === "children"
                  ? typeof S == "string"
                    ? u.textContent !== S &&
                      (p.suppressHydrationWarning !== !0 &&
                        La(u.textContent, S, t),
                      (d = ["children", S]))
                    : typeof S == "number" &&
                      u.textContent !== "" + S &&
                      (p.suppressHydrationWarning !== !0 &&
                        La(u.textContent, S, t),
                      (d = ["children", "" + S]))
                  : o.hasOwnProperty(w) &&
                    S != null &&
                    w === "onScroll" &&
                    Xe("scroll", u);
              }
            switch (a) {
              case "input":
                (wn(u), Qn(u, p, !0));
                break;
              case "textarea":
                (wn(u), Fr(u));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Ma);
            }
            ((u = d), (n.updateQueue = u), u !== null && (n.flags |= 4));
          } else {
            ((w = d.nodeType === 9 ? d : d.ownerDocument),
              t === "http://www.w3.org/1999/xhtml" && (t = zr(a)),
              t === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((t = w.createElement("div")),
                    (t.innerHTML = "<script><\/script>"),
                    (t = t.removeChild(t.firstChild)))
                  : typeof u.is == "string"
                    ? (t = w.createElement(a, { is: u.is }))
                    : ((t = w.createElement(a)),
                      a === "select" &&
                        ((w = t),
                        u.multiple
                          ? (w.multiple = !0)
                          : u.size && (w.size = u.size)))
                : (t = w.createElementNS(t, a)),
              (t[qr] = n),
              (t[ji] = u),
              Rh(t, n, !1, !1),
              (n.stateNode = t));
            e: {
              switch (((w = xn(a, u)), a)) {
                case "dialog":
                  (Xe("cancel", t), Xe("close", t), (d = u));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Xe("load", t), (d = u));
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Ti.length; d++) Xe(Ti[d], t);
                  d = u;
                  break;
                case "source":
                  (Xe("error", t), (d = u));
                  break;
                case "img":
                case "image":
                case "link":
                  (Xe("error", t), Xe("load", t), (d = u));
                  break;
                case "details":
                  (Xe("toggle", t), (d = u));
                  break;
                case "input":
                  (Ts(t, u), (d = $r(t, u)), Xe("invalid", t));
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  ((t._wrapperState = { wasMultiple: !!u.multiple }),
                    (d = Y({}, u, { value: void 0 })),
                    Xe("invalid", t));
                  break;
                case "textarea":
                  (Cr(t, u), (d = bt(t, u)), Xe("invalid", t));
                  break;
                default:
                  d = u;
              }
              (rn(a, d), (S = d));
              for (p in S)
                if (S.hasOwnProperty(p)) {
                  var N = S[p];
                  p === "style"
                    ? Kt(t, N)
                    : p === "dangerouslySetInnerHTML"
                      ? ((N = N ? N.__html : void 0), N != null && It(t, N))
                      : p === "children"
                        ? typeof N == "string"
                          ? (a !== "textarea" || N !== "") && zt(t, N)
                          : typeof N == "number" && zt(t, "" + N)
                        : p !== "suppressContentEditableWarning" &&
                          p !== "suppressHydrationWarning" &&
                          p !== "autoFocus" &&
                          (o.hasOwnProperty(p)
                            ? N != null && p === "onScroll" && Xe("scroll", t)
                            : N != null && O(t, p, N, w));
                }
              switch (a) {
                case "input":
                  (wn(t), Qn(t, u, !1));
                  break;
                case "textarea":
                  (wn(t), Fr(t));
                  break;
                case "option":
                  u.value != null && t.setAttribute("value", "" + Oe(u.value));
                  break;
                case "select":
                  ((t.multiple = !!u.multiple),
                    (p = u.value),
                    p != null
                      ? Ur(t, !!u.multiple, p, !1)
                      : u.defaultValue != null &&
                        Ur(t, !!u.multiple, u.defaultValue, !0));
                  break;
                default:
                  typeof d.onClick == "function" && (t.onclick = Ma);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return ($t(n), null);
      case 6:
        if (t && n.stateNode != null) Nh(t, n, t.memoizedProps, u);
        else {
          if (typeof u != "string" && n.stateNode === null) throw Error(s(166));
          if (((a = us(Di.current)), us(Kr.current), Ha(n))) {
            if (
              ((u = n.stateNode),
              (a = n.memoizedProps),
              (u[qr] = n),
              (p = u.nodeValue !== a) && ((t = lr), t !== null))
            )
              switch (t.tag) {
                case 3:
                  La(u.nodeValue, a, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 &&
                    La(u.nodeValue, a, (t.mode & 1) !== 0);
              }
            p && (n.flags |= 4);
          } else
            ((u = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(u)),
              (u[qr] = n),
              (n.stateNode = u));
        }
        return ($t(n), null);
      case 13:
        if (
          (Ze(st),
          (u = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (tt && ur !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            (Ad(), Fs(), (n.flags |= 98560), (p = !1));
          else if (((p = Ha(n)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!p) throw Error(s(318));
              if (
                ((p = n.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(s(317));
              p[qr] = n;
            } else
              (Fs(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            ($t(n), (p = !1));
          } else (Nr !== null && (_u(Nr), (Nr = null)), (p = !0));
          if (!p) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = a), n)
          : ((u = u !== null),
            u !== (t !== null && t.memoizedState !== null) &&
              u &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (t === null || (st.current & 1) !== 0
                  ? kt === 0 && (kt = 3)
                  : Eu())),
            n.updateQueue !== null && (n.flags |= 4),
            $t(n),
            null);
      case 4:
        return (
          Hs(),
          du(t, n),
          t === null && Ci(n.stateNode.containerInfo),
          $t(n),
          null
        );
      case 10:
        return (Ul(n.type._context), $t(n), null);
      case 17:
        return (Jt(n.type) && Ua(), $t(n), null);
      case 19:
        if ((Ze(st), (p = n.memoizedState), p === null)) return ($t(n), null);
        if (((u = (n.flags & 128) !== 0), (w = p.rendering), w === null))
          if (u) Ui(p, !1);
          else {
            if (kt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((w = Ja(t)), w !== null)) {
                  for (
                    n.flags |= 128,
                      Ui(p, !1),
                      u = w.updateQueue,
                      u !== null && ((n.updateQueue = u), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      u = a,
                      a = n.child;
                    a !== null;
                  )
                    ((p = a),
                      (t = u),
                      (p.flags &= 14680066),
                      (w = p.alternate),
                      w === null
                        ? ((p.childLanes = 0),
                          (p.lanes = t),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = w.childLanes),
                          (p.lanes = w.lanes),
                          (p.child = w.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = w.memoizedProps),
                          (p.memoizedState = w.memoizedState),
                          (p.updateQueue = w.updateQueue),
                          (p.type = w.type),
                          (t = w.dependencies),
                          (p.dependencies =
                            t === null
                              ? null
                              : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                })),
                      (a = a.sibling));
                  return (Je(st, (st.current & 1) | 2), n.child);
                }
                t = t.sibling;
              }
            p.tail !== null &&
              qe() > Ys &&
              ((n.flags |= 128), (u = !0), Ui(p, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Ja(w)), t !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (a = t.updateQueue),
                a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                Ui(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !w.alternate &&
                  !tt)
              )
                return ($t(n), null);
            } else
              2 * qe() - p.renderingStartTime > Ys &&
                a !== 1073741824 &&
                ((n.flags |= 128), (u = !0), Ui(p, !1), (n.lanes = 4194304));
          p.isBackwards
            ? ((w.sibling = n.child), (n.child = w))
            : ((a = p.last),
              a !== null ? (a.sibling = w) : (n.child = w),
              (p.last = w));
        }
        return p.tail !== null
          ? ((n = p.tail),
            (p.rendering = n),
            (p.tail = n.sibling),
            (p.renderingStartTime = qe()),
            (n.sibling = null),
            (a = st.current),
            Je(st, u ? (a & 1) | 2 : a & 1),
            n)
          : ($t(n), null);
      case 22:
      case 23:
        return (
          Su(),
          (u = n.memoizedState !== null),
          t !== null && (t.memoizedState !== null) !== u && (n.flags |= 8192),
          u && (n.mode & 1) !== 0
            ? (cr & 1073741824) !== 0 &&
              ($t(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : $t(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function zg(t, n) {
    switch ((Al(n), n.tag)) {
      case 1:
        return (
          Jt(n.type) && Ua(),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Hs(),
          Ze(Gt),
          Ze(Lt),
          ql(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 5:
        return (Hl(n), null);
      case 13:
        if (
          (Ze(st), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          Fs();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return (Ze(st), null);
      case 4:
        return (Hs(), null);
      case 10:
        return (Ul(n.type._context), null);
      case 22:
      case 23:
        return (Su(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var io = !1,
    Ut = !1,
    Bg = typeof WeakSet == "function" ? WeakSet : Set,
    oe = null;
  function qs(t, n) {
    var a = t.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          lt(t, n, u);
        }
      else a.current = null;
  }
  function hu(t, n, a) {
    try {
      a();
    } catch (u) {
      lt(t, n, u);
    }
  }
  var Ph = !1;
  function Wg(t, n) {
    if (((Sl = Ea), (t = ud()), gl(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var d = u.anchorOffset,
              p = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, p.nodeType);
            } catch {
              a = null;
              break e;
            }
            var w = 0,
              S = -1,
              N = -1,
              U = 0,
              V = 0,
              K = t,
              H = null;
            t: for (;;) {
              for (
                var se;
                K !== a || (d !== 0 && K.nodeType !== 3) || (S = w + d),
                  K !== p || (u !== 0 && K.nodeType !== 3) || (N = w + u),
                  K.nodeType === 3 && (w += K.nodeValue.length),
                  (se = K.firstChild) !== null;
              )
                ((H = K), (K = se));
              for (;;) {
                if (K === t) break t;
                if (
                  (H === a && ++U === d && (S = w),
                  H === p && ++V === u && (N = w),
                  (se = K.nextSibling) !== null)
                )
                  break;
                ((K = H), (H = K.parentNode));
              }
              K = se;
            }
            a = S === -1 || N === -1 ? null : { start: S, end: N };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      El = { focusedElem: t, selectionRange: a }, Ea = !1, oe = n;
      oe !== null;
    )
      if (
        ((n = oe), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = n), (oe = t));
      else
        for (; oe !== null; ) {
          n = oe;
          try {
            var ce = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var he = ce.memoizedProps,
                      pt = ce.memoizedState,
                      L = n.stateNode,
                      D = L.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? he : Pr(n.type, he),
                        pt
                      );
                    L.__reactInternalSnapshotBeforeUpdate = D;
                  }
                  break;
                case 3:
                  var M = n.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (G) {
            lt(n, n.return, G);
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (oe = t));
            break;
          }
          oe = n.return;
        }
    return ((ce = Ph), (Ph = !1), ce);
  }
  function Fi(t, n, a) {
    var u = n.updateQueue;
    if (((u = u !== null ? u.lastEffect : null), u !== null)) {
      var d = (u = u.next);
      do {
        if ((d.tag & t) === t) {
          var p = d.destroy;
          ((d.destroy = void 0), p !== void 0 && hu(n, a, p));
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function ao(t, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var a = (n = n.next);
      do {
        if ((a.tag & t) === t) {
          var u = a.create;
          a.destroy = u();
        }
        a = a.next;
      } while (a !== n);
    }
  }
  function fu(t) {
    var n = t.ref;
    if (n !== null) {
      var a = t.stateNode;
      switch (t.tag) {
        case 5:
          t = a;
          break;
        default:
          t = a;
      }
      typeof n == "function" ? n(t) : (n.current = t);
    }
  }
  function Oh(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), Oh(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 &&
        ((n = t.stateNode),
        n !== null &&
          (delete n[qr],
          delete n[ji],
          delete n[jl],
          delete n[Eg],
          delete n[Tg])),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  function Ah(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Dh(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ah(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function pu(t, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      ((t = t.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(t, n)
            : a.insertBefore(t, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(t, a))
              : ((n = a), n.appendChild(t)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Ma)));
    else if (u !== 4 && ((t = t.child), t !== null))
      for (pu(t, n, a), t = t.sibling; t !== null; )
        (pu(t, n, a), (t = t.sibling));
  }
  function mu(t, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      ((t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t));
    else if (u !== 4 && ((t = t.child), t !== null))
      for (mu(t, n, a), t = t.sibling; t !== null; )
        (mu(t, n, a), (t = t.sibling));
  }
  var Nt = null,
    Or = !1;
  function In(t, n, a) {
    for (a = a.child; a !== null; ) (Ih(t, n, a), (a = a.sibling));
  }
  function Ih(t, n, a) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function")
      try {
        Wt.onCommitFiberUnmount(sn, a);
      } catch {}
    switch (a.tag) {
      case 5:
        Ut || qs(a, n);
      case 6:
        var u = Nt,
          d = Or;
        ((Nt = null),
          In(t, n, a),
          (Nt = u),
          (Or = d),
          Nt !== null &&
            (Or
              ? ((t = Nt),
                (a = a.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(a)
                  : t.removeChild(a))
              : Nt.removeChild(a.stateNode)));
        break;
      case 18:
        Nt !== null &&
          (Or
            ? ((t = Nt),
              (a = a.stateNode),
              t.nodeType === 8
                ? Rl(t.parentNode, a)
                : t.nodeType === 1 && Rl(t, a),
              vi(t))
            : Rl(Nt, a.stateNode));
        break;
      case 4:
        ((u = Nt),
          (d = Or),
          (Nt = a.stateNode.containerInfo),
          (Or = !0),
          In(t, n, a),
          (Nt = u),
          (Or = d));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ut &&
          ((u = a.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
        ) {
          d = u = u.next;
          do {
            var p = d,
              w = p.destroy;
            ((p = p.tag),
              w !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && hu(a, n, w),
              (d = d.next));
          } while (d !== u);
        }
        In(t, n, a);
        break;
      case 1:
        if (
          !Ut &&
          (qs(a, n),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function")
        )
          try {
            ((u.props = a.memoizedProps),
              (u.state = a.memoizedState),
              u.componentWillUnmount());
          } catch (S) {
            lt(a, n, S);
          }
        In(t, n, a);
        break;
      case 21:
        In(t, n, a);
        break;
      case 22:
        a.mode & 1
          ? ((Ut = (u = Ut) || a.memoizedState !== null), In(t, n, a), (Ut = u))
          : In(t, n, a);
        break;
      default:
        In(t, n, a);
    }
  }
  function Lh(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var a = t.stateNode;
      (a === null && (a = t.stateNode = new Bg()),
        n.forEach(function (u) {
          var d = Xg.bind(null, t, u);
          a.has(u) || (a.add(u), u.then(d, d));
        }));
    }
  }
  function Ar(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        try {
          var p = t,
            w = n,
            S = w;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                ((Nt = S.stateNode), (Or = !1));
                break e;
              case 3:
                ((Nt = S.stateNode.containerInfo), (Or = !0));
                break e;
              case 4:
                ((Nt = S.stateNode.containerInfo), (Or = !0));
                break e;
            }
            S = S.return;
          }
          if (Nt === null) throw Error(s(160));
          (Ih(p, w, d), (Nt = null), (Or = !1));
          var N = d.alternate;
          (N !== null && (N.return = null), (d.return = null));
        } catch (U) {
          lt(d, n, U);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) (Mh(n, t), (n = n.sibling));
  }
  function Mh(t, n) {
    var a = t.alternate,
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ar(n, t), Gr(t), u & 4)) {
          try {
            (Fi(3, t, t.return), ao(3, t));
          } catch (he) {
            lt(t, t.return, he);
          }
          try {
            Fi(5, t, t.return);
          } catch (he) {
            lt(t, t.return, he);
          }
        }
        break;
      case 1:
        (Ar(n, t), Gr(t), u & 512 && a !== null && qs(a, a.return));
        break;
      case 5:
        if (
          (Ar(n, t),
          Gr(t),
          u & 512 && a !== null && qs(a, a.return),
          t.flags & 32)
        ) {
          var d = t.stateNode;
          try {
            zt(d, "");
          } catch (he) {
            lt(t, t.return, he);
          }
        }
        if (u & 4 && ((d = t.stateNode), d != null)) {
          var p = t.memoizedProps,
            w = a !== null ? a.memoizedProps : p,
            S = t.type,
            N = t.updateQueue;
          if (((t.updateQueue = null), N !== null))
            try {
              (S === "input" &&
                p.type === "radio" &&
                p.name != null &&
                nr(d, p),
                xn(S, w));
              var U = xn(S, p);
              for (w = 0; w < N.length; w += 2) {
                var V = N[w],
                  K = N[w + 1];
                V === "style"
                  ? Kt(d, K)
                  : V === "dangerouslySetInnerHTML"
                    ? It(d, K)
                    : V === "children"
                      ? zt(d, K)
                      : O(d, V, K, U);
              }
              switch (S) {
                case "input":
                  Tr(d, p);
                  break;
                case "textarea":
                  pr(d, p);
                  break;
                case "select":
                  var H = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var se = p.value;
                  se != null
                    ? Ur(d, !!p.multiple, se, !1)
                    : H !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Ur(d, !!p.multiple, p.defaultValue, !0)
                        : Ur(d, !!p.multiple, p.multiple ? [] : "", !1));
              }
              d[ji] = p;
            } catch (he) {
              lt(t, t.return, he);
            }
        }
        break;
      case 6:
        if ((Ar(n, t), Gr(t), u & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((d = t.stateNode), (p = t.memoizedProps));
          try {
            d.nodeValue = p;
          } catch (he) {
            lt(t, t.return, he);
          }
        }
        break;
      case 3:
        if (
          (Ar(n, t), Gr(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            vi(n.containerInfo);
          } catch (he) {
            lt(t, t.return, he);
          }
        break;
      case 4:
        (Ar(n, t), Gr(t));
        break;
      case 13:
        (Ar(n, t),
          Gr(t),
          (d = t.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (vu = qe())),
          u & 4 && Lh(t));
        break;
      case 22:
        if (
          ((V = a !== null && a.memoizedState !== null),
          t.mode & 1 ? ((Ut = (U = Ut) || V), Ar(n, t), (Ut = U)) : Ar(n, t),
          Gr(t),
          u & 8192)
        ) {
          if (
            ((U = t.memoizedState !== null),
            (t.stateNode.isHidden = U) && !V && (t.mode & 1) !== 0)
          )
            for (oe = t, V = t.child; V !== null; ) {
              for (K = oe = V; oe !== null; ) {
                switch (((H = oe), (se = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Fi(4, H, H.return);
                    break;
                  case 1:
                    qs(H, H.return);
                    var ce = H.stateNode;
                    if (typeof ce.componentWillUnmount == "function") {
                      ((u = H), (a = H.return));
                      try {
                        ((n = u),
                          (ce.props = n.memoizedProps),
                          (ce.state = n.memoizedState),
                          ce.componentWillUnmount());
                      } catch (he) {
                        lt(u, a, he);
                      }
                    }
                    break;
                  case 5:
                    qs(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Fh(K);
                      continue;
                    }
                }
                se !== null ? ((se.return = H), (oe = se)) : Fh(K);
              }
              V = V.sibling;
            }
          e: for (V = null, K = t; ; ) {
            if (K.tag === 5) {
              if (V === null) {
                V = K;
                try {
                  ((d = K.stateNode),
                    U
                      ? ((p = d.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((S = K.stateNode),
                        (N = K.memoizedProps.style),
                        (w =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (S.style.display = Cs("display", w))));
                } catch (he) {
                  lt(t, t.return, he);
                }
              }
            } else if (K.tag === 6) {
              if (V === null)
                try {
                  K.stateNode.nodeValue = U ? "" : K.memoizedProps;
                } catch (he) {
                  lt(t, t.return, he);
                }
            } else if (
              ((K.tag !== 22 && K.tag !== 23) ||
                K.memoizedState === null ||
                K === t) &&
              K.child !== null
            ) {
              ((K.child.return = K), (K = K.child));
              continue;
            }
            if (K === t) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === t) break e;
              (V === K && (V = null), (K = K.return));
            }
            (V === K && (V = null),
              (K.sibling.return = K.return),
              (K = K.sibling));
          }
        }
        break;
      case 19:
        (Ar(n, t), Gr(t), u & 4 && Lh(t));
        break;
      case 21:
        break;
      default:
        (Ar(n, t), Gr(t));
    }
  }
  function Gr(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        e: {
          for (var a = t.return; a !== null; ) {
            if (Ah(a)) {
              var u = a;
              break e;
            }
            a = a.return;
          }
          throw Error(s(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (zt(d, ""), (u.flags &= -33));
            var p = Dh(t);
            mu(t, p, d);
            break;
          case 3:
          case 4:
            var w = u.stateNode.containerInfo,
              S = Dh(t);
            pu(t, S, w);
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        lt(t, t.return, N);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function Hg(t, n, a) {
    ((oe = t), $h(t));
  }
  function $h(t, n, a) {
    for (var u = (t.mode & 1) !== 0; oe !== null; ) {
      var d = oe,
        p = d.child;
      if (d.tag === 22 && u) {
        var w = d.memoizedState !== null || io;
        if (!w) {
          var S = d.alternate,
            N = (S !== null && S.memoizedState !== null) || Ut;
          S = io;
          var U = Ut;
          if (((io = w), (Ut = N) && !U))
            for (oe = d; oe !== null; )
              ((w = oe),
                (N = w.child),
                w.tag === 22 && w.memoizedState !== null
                  ? zh(d)
                  : N !== null
                    ? ((N.return = w), (oe = N))
                    : zh(d));
          for (; p !== null; ) ((oe = p), $h(p), (p = p.sibling));
          ((oe = d), (io = S), (Ut = U));
        }
        Uh(t);
      } else
        (d.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = d), (oe = p))
          : Uh(t);
    }
  }
  function Uh(t) {
    for (; oe !== null; ) {
      var n = oe;
      if ((n.flags & 8772) !== 0) {
        var a = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ut || ao(5, n);
                break;
              case 1:
                var u = n.stateNode;
                if (n.flags & 4 && !Ut)
                  if (a === null) u.componentDidMount();
                  else {
                    var d =
                      n.elementType === n.type
                        ? a.memoizedProps
                        : Pr(n.type, a.memoizedProps);
                    u.componentDidUpdate(
                      d,
                      a.memoizedState,
                      u.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = n.updateQueue;
                p !== null && Fd(n, p, u);
                break;
              case 3:
                var w = n.updateQueue;
                if (w !== null) {
                  if (((a = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        a = n.child.stateNode;
                        break;
                      case 1:
                        a = n.child.stateNode;
                    }
                  Fd(n, w, a);
                }
                break;
              case 5:
                var S = n.stateNode;
                if (a === null && n.flags & 4) {
                  a = S;
                  var N = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && a.focus();
                      break;
                    case "img":
                      N.src && (a.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var U = n.alternate;
                  if (U !== null) {
                    var V = U.memoizedState;
                    if (V !== null) {
                      var K = V.dehydrated;
                      K !== null && vi(K);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Ut || (n.flags & 512 && fu(n));
        } catch (H) {
          lt(n, n.return, H);
        }
      }
      if (n === t) {
        oe = null;
        break;
      }
      if (((a = n.sibling), a !== null)) {
        ((a.return = n.return), (oe = a));
        break;
      }
      oe = n.return;
    }
  }
  function Fh(t) {
    for (; oe !== null; ) {
      var n = oe;
      if (n === t) {
        oe = null;
        break;
      }
      var a = n.sibling;
      if (a !== null) {
        ((a.return = n.return), (oe = a));
        break;
      }
      oe = n.return;
    }
  }
  function zh(t) {
    for (; oe !== null; ) {
      var n = oe;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var a = n.return;
            try {
              ao(4, n);
            } catch (N) {
              lt(n, a, N);
            }
            break;
          case 1:
            var u = n.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = n.return;
              try {
                u.componentDidMount();
              } catch (N) {
                lt(n, d, N);
              }
            }
            var p = n.return;
            try {
              fu(n);
            } catch (N) {
              lt(n, p, N);
            }
            break;
          case 5:
            var w = n.return;
            try {
              fu(n);
            } catch (N) {
              lt(n, w, N);
            }
        }
      } catch (N) {
        lt(n, n.return, N);
      }
      if (n === t) {
        oe = null;
        break;
      }
      var S = n.sibling;
      if (S !== null) {
        ((S.return = n.return), (oe = S));
        break;
      }
      oe = n.return;
    }
  }
  var Vg = Math.ceil,
    oo = F.ReactCurrentDispatcher,
    gu = F.ReactCurrentOwner,
    br = F.ReactCurrentBatchConfig,
    ze = 0,
    Ct = null,
    yt = null,
    Pt = 0,
    cr = 0,
    Ks = Nn(0),
    kt = 0,
    zi = null,
    ds = 0,
    lo = 0,
    yu = 0,
    Bi = null,
    Xt = null,
    vu = 0,
    Ys = 1 / 0,
    mn = null,
    uo = !1,
    wu = null,
    Ln = null,
    co = !1,
    Mn = null,
    ho = 0,
    Wi = 0,
    xu = null,
    fo = -1,
    po = 0;
  function Vt() {
    return (ze & 6) !== 0 ? qe() : fo !== -1 ? fo : (fo = qe());
  }
  function $n(t) {
    return (t.mode & 1) === 0
      ? 1
      : (ze & 2) !== 0 && Pt !== 0
        ? Pt & -Pt
        : Rg.transition !== null
          ? (po === 0 && (po = Dc()), po)
          : ((t = Ke),
            t !== 0 ||
              ((t = window.event), (t = t === void 0 ? 16 : Wc(t.type))),
            t);
  }
  function Dr(t, n, a, u) {
    if (50 < Wi) throw ((Wi = 0), (xu = null), Error(s(185)));
    (fi(t, a, u),
      ((ze & 2) === 0 || t !== Ct) &&
        (t === Ct && ((ze & 2) === 0 && (lo |= a), kt === 4 && Un(t, Pt)),
        Zt(t, u),
        a === 1 &&
          ze === 0 &&
          (n.mode & 1) === 0 &&
          ((Ys = qe() + 500), za && On())));
  }
  function Zt(t, n) {
    var a = t.callbackNode;
    Rm(t, n);
    var u = _a(t, t === Ct ? Pt : 0);
    if (u === 0)
      (a !== null && Et(a), (t.callbackNode = null), (t.callbackPriority = 0));
    else if (((n = u & -u), t.callbackPriority !== n)) {
      if ((a != null && Et(a), n === 1))
        (t.tag === 0 ? Cg(Wh.bind(null, t)) : Rd(Wh.bind(null, t)),
          kg(function () {
            (ze & 6) === 0 && On();
          }),
          (a = null));
      else {
        switch (Ic(u)) {
          case 1:
            a = gr;
            break;
          case 4:
            a = ar;
            break;
          case 16:
            a = bn;
            break;
          case 536870912:
            a = Vr;
            break;
          default:
            a = bn;
        }
        a = Qh(a, Bh.bind(null, t));
      }
      ((t.callbackPriority = n), (t.callbackNode = a));
    }
  }
  function Bh(t, n) {
    if (((fo = -1), (po = 0), (ze & 6) !== 0)) throw Error(s(327));
    var a = t.callbackNode;
    if (Gs() && t.callbackNode !== a) return null;
    var u = _a(t, t === Ct ? Pt : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & t.expiredLanes) !== 0 || n) n = mo(t, u);
    else {
      n = u;
      var d = ze;
      ze |= 2;
      var p = Vh();
      (Ct !== t || Pt !== n) && ((mn = null), (Ys = qe() + 500), fs(t, n));
      do
        try {
          Yg();
          break;
        } catch (S) {
          Hh(t, S);
        }
      while (!0);
      ($l(),
        (oo.current = p),
        (ze = d),
        yt !== null ? (n = 0) : ((Ct = null), (Pt = 0), (n = kt)));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((d = el(t)), d !== 0 && ((u = d), (n = bu(t, d)))),
        n === 1)
      )
        throw ((a = zi), fs(t, 0), Un(t, u), Zt(t, qe()), a);
      if (n === 6) Un(t, u);
      else {
        if (
          ((d = t.current.alternate),
          (u & 30) === 0 &&
            !qg(d) &&
            ((n = mo(t, u)),
            n === 2 && ((p = el(t)), p !== 0 && ((u = p), (n = bu(t, p)))),
            n === 1))
        )
          throw ((a = zi), fs(t, 0), Un(t, u), Zt(t, qe()), a);
        switch (((t.finishedWork = d), (t.finishedLanes = u), n)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            ps(t, Xt, mn);
            break;
          case 3:
            if (
              (Un(t, u),
              (u & 130023424) === u && ((n = vu + 500 - qe()), 10 < n))
            ) {
              if (_a(t, 0) !== 0) break;
              if (((d = t.suspendedLanes), (d & u) !== u)) {
                (Vt(), (t.pingedLanes |= t.suspendedLanes & d));
                break;
              }
              t.timeoutHandle = Cl(ps.bind(null, t, Xt, mn), n);
              break;
            }
            ps(t, Xt, mn);
            break;
          case 4:
            if ((Un(t, u), (u & 4194240) === u)) break;
            for (n = t.eventTimes, d = -1; 0 < u; ) {
              var w = 31 - Ge(u);
              ((p = 1 << w), (w = n[w]), w > d && (d = w), (u &= ~p));
            }
            if (
              ((u = d),
              (u = qe() - u),
              (u =
                (120 > u
                  ? 120
                  : 480 > u
                    ? 480
                    : 1080 > u
                      ? 1080
                      : 1920 > u
                        ? 1920
                        : 3e3 > u
                          ? 3e3
                          : 4320 > u
                            ? 4320
                            : 1960 * Vg(u / 1960)) - u),
              10 < u)
            ) {
              t.timeoutHandle = Cl(ps.bind(null, t, Xt, mn), u);
              break;
            }
            ps(t, Xt, mn);
            break;
          case 5:
            ps(t, Xt, mn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (Zt(t, qe()), t.callbackNode === a ? Bh.bind(null, t) : null);
  }
  function bu(t, n) {
    var a = Bi;
    return (
      t.current.memoizedState.isDehydrated && (fs(t, n).flags |= 256),
      (t = mo(t, n)),
      t !== 2 && ((n = Xt), (Xt = a), n !== null && _u(n)),
      t
    );
  }
  function _u(t) {
    Xt === null ? (Xt = t) : Xt.push.apply(Xt, t);
  }
  function qg(t) {
    for (var n = t; ; ) {
      if (n.flags & 16384) {
        var a = n.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var u = 0; u < a.length; u++) {
            var d = a[u],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!jr(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        ((a.return = n), (n = a));
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Un(t, n) {
    for (
      n &= ~yu,
        n &= ~lo,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        t = t.expirationTimes;
      0 < n;
    ) {
      var a = 31 - Ge(n),
        u = 1 << a;
      ((t[a] = -1), (n &= ~u));
    }
  }
  function Wh(t) {
    if ((ze & 6) !== 0) throw Error(s(327));
    Gs();
    var n = _a(t, 0);
    if ((n & 1) === 0) return (Zt(t, qe()), null);
    var a = mo(t, n);
    if (t.tag !== 0 && a === 2) {
      var u = el(t);
      u !== 0 && ((n = u), (a = bu(t, u)));
    }
    if (a === 1) throw ((a = zi), fs(t, 0), Un(t, n), Zt(t, qe()), a);
    if (a === 6) throw Error(s(345));
    return (
      (t.finishedWork = t.current.alternate),
      (t.finishedLanes = n),
      ps(t, Xt, mn),
      Zt(t, qe()),
      null
    );
  }
  function ku(t, n) {
    var a = ze;
    ze |= 1;
    try {
      return t(n);
    } finally {
      ((ze = a), ze === 0 && ((Ys = qe() + 500), za && On()));
    }
  }
  function hs(t) {
    Mn !== null && Mn.tag === 0 && (ze & 6) === 0 && Gs();
    var n = ze;
    ze |= 1;
    var a = br.transition,
      u = Ke;
    try {
      if (((br.transition = null), (Ke = 1), t)) return t();
    } finally {
      ((Ke = u), (br.transition = a), (ze = n), (ze & 6) === 0 && On());
    }
  }
  function Su() {
    ((cr = Ks.current), Ze(Ks));
  }
  function fs(t, n) {
    ((t.finishedWork = null), (t.finishedLanes = 0));
    var a = t.timeoutHandle;
    if ((a !== -1 && ((t.timeoutHandle = -1), _g(a)), yt !== null))
      for (a = yt.return; a !== null; ) {
        var u = a;
        switch ((Al(u), u.tag)) {
          case 1:
            ((u = u.type.childContextTypes), u != null && Ua());
            break;
          case 3:
            (Hs(), Ze(Gt), Ze(Lt), ql());
            break;
          case 5:
            Hl(u);
            break;
          case 4:
            Hs();
            break;
          case 13:
            Ze(st);
            break;
          case 19:
            Ze(st);
            break;
          case 10:
            Ul(u.type._context);
            break;
          case 22:
          case 23:
            Su();
        }
        a = a.return;
      }
    if (
      ((Ct = t),
      (yt = t = Fn(t.current, null)),
      (Pt = cr = n),
      (kt = 0),
      (zi = null),
      (yu = lo = ds = 0),
      (Xt = Bi = null),
      ls !== null)
    ) {
      for (n = 0; n < ls.length; n++)
        if (((a = ls[n]), (u = a.interleaved), u !== null)) {
          a.interleaved = null;
          var d = u.next,
            p = a.pending;
          if (p !== null) {
            var w = p.next;
            ((p.next = d), (u.next = w));
          }
          a.pending = u;
        }
      ls = null;
    }
    return t;
  }
  function Hh(t, n) {
    do {
      var a = yt;
      try {
        if (($l(), (Qa.current = to), Xa)) {
          for (var u = it.memoizedState; u !== null; ) {
            var d = u.queue;
            (d !== null && (d.pending = null), (u = u.next));
          }
          Xa = !1;
        }
        if (
          ((cs = 0),
          (Tt = _t = it = null),
          (Ii = !1),
          (Li = 0),
          (gu.current = null),
          a === null || a.return === null)
        ) {
          ((kt = 1), (zi = n), (yt = null));
          break;
        }
        e: {
          var p = t,
            w = a.return,
            S = a,
            N = n;
          if (
            ((n = Pt),
            (S.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var U = N,
              V = S,
              K = V.tag;
            if ((V.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
              var H = V.alternate;
              H
                ? ((V.updateQueue = H.updateQueue),
                  (V.memoizedState = H.memoizedState),
                  (V.lanes = H.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var se = mh(w);
            if (se !== null) {
              ((se.flags &= -257),
                gh(se, w, S, p, n),
                se.mode & 1 && ph(p, U, n),
                (n = se),
                (N = U));
              var ce = n.updateQueue;
              if (ce === null) {
                var he = new Set();
                (he.add(N), (n.updateQueue = he));
              } else ce.add(N);
              break e;
            } else {
              if ((n & 1) === 0) {
                (ph(p, U, n), Eu());
                break e;
              }
              N = Error(s(426));
            }
          } else if (tt && S.mode & 1) {
            var pt = mh(w);
            if (pt !== null) {
              ((pt.flags & 65536) === 0 && (pt.flags |= 256),
                gh(pt, w, S, p, n),
                Ll(Vs(N, S)));
              break e;
            }
          }
          ((p = N = Vs(N, S)),
            kt !== 4 && (kt = 2),
            Bi === null ? (Bi = [p]) : Bi.push(p),
            (p = w));
          do {
            switch (p.tag) {
              case 3:
                ((p.flags |= 65536), (n &= -n), (p.lanes |= n));
                var L = hh(p, N, n);
                Ud(p, L);
                break e;
              case 1:
                S = N;
                var D = p.type,
                  M = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof D.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (Ln === null || !Ln.has(M))))
                ) {
                  ((p.flags |= 65536), (n &= -n), (p.lanes |= n));
                  var G = fh(p, S, n);
                  Ud(p, G);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Kh(a);
      } catch (ye) {
        ((n = ye), yt === a && a !== null && (yt = a = a.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Vh() {
    var t = oo.current;
    return ((oo.current = to), t === null ? to : t);
  }
  function Eu() {
    ((kt === 0 || kt === 3 || kt === 2) && (kt = 4),
      Ct === null ||
        ((ds & 268435455) === 0 && (lo & 268435455) === 0) ||
        Un(Ct, Pt));
  }
  function mo(t, n) {
    var a = ze;
    ze |= 2;
    var u = Vh();
    (Ct !== t || Pt !== n) && ((mn = null), fs(t, n));
    do
      try {
        Kg();
        break;
      } catch (d) {
        Hh(t, d);
      }
    while (!0);
    if (($l(), (ze = a), (oo.current = u), yt !== null)) throw Error(s(261));
    return ((Ct = null), (Pt = 0), kt);
  }
  function Kg() {
    for (; yt !== null; ) qh(yt);
  }
  function Yg() {
    for (; yt !== null && !He(); ) qh(yt);
  }
  function qh(t) {
    var n = Jh(t.alternate, t, cr);
    ((t.memoizedProps = t.pendingProps),
      n === null ? Kh(t) : (yt = n),
      (gu.current = null));
  }
  function Kh(t) {
    var n = t;
    do {
      var a = n.alternate;
      if (((t = n.return), (n.flags & 32768) === 0)) {
        if (((a = Fg(a, n, cr)), a !== null)) {
          yt = a;
          return;
        }
      } else {
        if (((a = zg(a, n)), a !== null)) {
          ((a.flags &= 32767), (yt = a));
          return;
        }
        if (t !== null)
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
        else {
          ((kt = 6), (yt = null));
          return;
        }
      }
      if (((n = n.sibling), n !== null)) {
        yt = n;
        return;
      }
      yt = n = t;
    } while (n !== null);
    kt === 0 && (kt = 5);
  }
  function ps(t, n, a) {
    var u = Ke,
      d = br.transition;
    try {
      ((br.transition = null), (Ke = 1), Gg(t, n, a, u));
    } finally {
      ((br.transition = d), (Ke = u));
    }
    return null;
  }
  function Gg(t, n, a, u) {
    do Gs();
    while (Mn !== null);
    if ((ze & 6) !== 0) throw Error(s(327));
    a = t.finishedWork;
    var d = t.finishedLanes;
    if (a === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), a === t.current))
      throw Error(s(177));
    ((t.callbackNode = null), (t.callbackPriority = 0));
    var p = a.lanes | a.childLanes;
    if (
      (jm(t, p),
      t === Ct && ((yt = Ct = null), (Pt = 0)),
      ((a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0) ||
        co ||
        ((co = !0),
        Qh(bn, function () {
          return (Gs(), null);
        })),
      (p = (a.flags & 15990) !== 0),
      (a.subtreeFlags & 15990) !== 0 || p)
    ) {
      ((p = br.transition), (br.transition = null));
      var w = Ke;
      Ke = 1;
      var S = ze;
      ((ze |= 4),
        (gu.current = null),
        Wg(t, a),
        Mh(a, t),
        mg(El),
        (Ea = !!Sl),
        (El = Sl = null),
        (t.current = a),
        Hg(a),
        Yt(),
        (ze = S),
        (Ke = w),
        (br.transition = p));
    } else t.current = a;
    if (
      (co && ((co = !1), (Mn = t), (ho = d)),
      (p = t.pendingLanes),
      p === 0 && (Ln = null),
      Fe(a.stateNode),
      Zt(t, qe()),
      n !== null)
    )
      for (u = t.onRecoverableError, a = 0; a < n.length; a++)
        ((d = n[a]), u(d.value, { componentStack: d.stack, digest: d.digest }));
    if (uo) throw ((uo = !1), (t = wu), (wu = null), t);
    return (
      (ho & 1) !== 0 && t.tag !== 0 && Gs(),
      (p = t.pendingLanes),
      (p & 1) !== 0 ? (t === xu ? Wi++ : ((Wi = 0), (xu = t))) : (Wi = 0),
      On(),
      null
    );
  }
  function Gs() {
    if (Mn !== null) {
      var t = Ic(ho),
        n = br.transition,
        a = Ke;
      try {
        if (((br.transition = null), (Ke = 16 > t ? 16 : t), Mn === null))
          var u = !1;
        else {
          if (((t = Mn), (Mn = null), (ho = 0), (ze & 6) !== 0))
            throw Error(s(331));
          var d = ze;
          for (ze |= 4, oe = t.current; oe !== null; ) {
            var p = oe,
              w = p.child;
            if ((oe.flags & 16) !== 0) {
              var S = p.deletions;
              if (S !== null) {
                for (var N = 0; N < S.length; N++) {
                  var U = S[N];
                  for (oe = U; oe !== null; ) {
                    var V = oe;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fi(8, V, p);
                    }
                    var K = V.child;
                    if (K !== null) ((K.return = V), (oe = K));
                    else
                      for (; oe !== null; ) {
                        V = oe;
                        var H = V.sibling,
                          se = V.return;
                        if ((Oh(V), V === U)) {
                          oe = null;
                          break;
                        }
                        if (H !== null) {
                          ((H.return = se), (oe = H));
                          break;
                        }
                        oe = se;
                      }
                  }
                }
                var ce = p.alternate;
                if (ce !== null) {
                  var he = ce.child;
                  if (he !== null) {
                    ce.child = null;
                    do {
                      var pt = he.sibling;
                      ((he.sibling = null), (he = pt));
                    } while (he !== null);
                  }
                }
                oe = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && w !== null)
              ((w.return = p), (oe = w));
            else
              e: for (; oe !== null; ) {
                if (((p = oe), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fi(9, p, p.return);
                  }
                var L = p.sibling;
                if (L !== null) {
                  ((L.return = p.return), (oe = L));
                  break e;
                }
                oe = p.return;
              }
          }
          var D = t.current;
          for (oe = D; oe !== null; ) {
            w = oe;
            var M = w.child;
            if ((w.subtreeFlags & 2064) !== 0 && M !== null)
              ((M.return = w), (oe = M));
            else
              e: for (w = D; oe !== null; ) {
                if (((S = oe), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ao(9, S);
                    }
                  } catch (ye) {
                    lt(S, S.return, ye);
                  }
                if (S === w) {
                  oe = null;
                  break e;
                }
                var G = S.sibling;
                if (G !== null) {
                  ((G.return = S.return), (oe = G));
                  break e;
                }
                oe = S.return;
              }
          }
          if (
            ((ze = d),
            On(),
            Wt && typeof Wt.onPostCommitFiberRoot == "function")
          )
            try {
              Wt.onPostCommitFiberRoot(sn, t);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        ((Ke = a), (br.transition = n));
      }
    }
    return !1;
  }
  function Yh(t, n, a) {
    ((n = Vs(a, n)),
      (n = hh(t, n, 1)),
      (t = Dn(t, n, 1)),
      (n = Vt()),
      t !== null && (fi(t, 1, n), Zt(t, n)));
  }
  function lt(t, n, a) {
    if (t.tag === 3) Yh(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Yh(n, t, a);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Ln === null || !Ln.has(u)))
          ) {
            ((t = Vs(a, t)),
              (t = fh(n, t, 1)),
              (n = Dn(n, t, 1)),
              (t = Vt()),
              n !== null && (fi(n, 1, t), Zt(n, t)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Jg(t, n, a) {
    var u = t.pingCache;
    (u !== null && u.delete(n),
      (n = Vt()),
      (t.pingedLanes |= t.suspendedLanes & a),
      Ct === t &&
        (Pt & a) === a &&
        (kt === 4 || (kt === 3 && (Pt & 130023424) === Pt && 500 > qe() - vu)
          ? fs(t, 0)
          : (yu |= a)),
      Zt(t, n));
  }
  function Gh(t, n) {
    n === 0 &&
      ((t.mode & 1) === 0
        ? (n = 1)
        : ((n = rs), (rs <<= 1), (rs & 130023424) === 0 && (rs = 4194304)));
    var a = Vt();
    ((t = hn(t, n)), t !== null && (fi(t, n, a), Zt(t, a)));
  }
  function Qg(t) {
    var n = t.memoizedState,
      a = 0;
    (n !== null && (a = n.retryLane), Gh(t, a));
  }
  function Xg(t, n) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode,
          d = t.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (u !== null && u.delete(n), Gh(t, a));
  }
  var Jh;
  Jh = function (t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || Gt.current) Qt = !0;
      else {
        if ((t.lanes & a) === 0 && (n.flags & 128) === 0)
          return ((Qt = !1), Ug(t, n, a));
        Qt = (t.flags & 131072) !== 0;
      }
    else ((Qt = !1), tt && (n.flags & 1048576) !== 0 && jd(n, Wa, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var u = n.type;
        (so(t, n), (t = n.pendingProps));
        var d = Ms(n, Lt.current);
        (Ws(n, a), (d = Gl(null, n, u, t, d, a)));
        var p = Jl();
        return (
          (n.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Jt(u) ? ((p = !0), Fa(n)) : (p = !1),
              (n.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Bl(n),
              (d.updater = ro),
              (n.stateNode = d),
              (d._reactInternals = n),
              ru(n, u, t, a),
              (n = au(null, n, u, !0, p, a)))
            : ((n.tag = 0), tt && p && Ol(n), Ht(null, n, d, a), (n = n.child)),
          n
        );
      case 16:
        u = n.elementType;
        e: {
          switch (
            (so(t, n),
            (t = n.pendingProps),
            (d = u._init),
            (u = d(u._payload)),
            (n.type = u),
            (d = n.tag = ey(u)),
            (t = Pr(u, t)),
            d)
          ) {
            case 0:
              n = iu(null, n, u, t, a);
              break e;
            case 1:
              n = _h(null, n, u, t, a);
              break e;
            case 11:
              n = yh(null, n, u, t, a);
              break e;
            case 14:
              n = vh(null, n, u, Pr(u.type, t), a);
              break e;
          }
          throw Error(s(306, u, ""));
        }
        return n;
      case 0:
        return (
          (u = n.type),
          (d = n.pendingProps),
          (d = n.elementType === u ? d : Pr(u, d)),
          iu(t, n, u, d, a)
        );
      case 1:
        return (
          (u = n.type),
          (d = n.pendingProps),
          (d = n.elementType === u ? d : Pr(u, d)),
          _h(t, n, u, d, a)
        );
      case 3:
        e: {
          if ((kh(n), t === null)) throw Error(s(387));
          ((u = n.pendingProps),
            (p = n.memoizedState),
            (d = p.element),
            $d(t, n),
            Ga(n, u, null, a));
          var w = n.memoizedState;
          if (((u = w.element), p.isDehydrated))
            if (
              ((p = {
                element: u,
                isDehydrated: !1,
                cache: w.cache,
                pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
                transitions: w.transitions,
              }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              ((d = Vs(Error(s(423)), n)), (n = Sh(t, n, u, a, d)));
              break e;
            } else if (u !== d) {
              ((d = Vs(Error(s(424)), n)), (n = Sh(t, n, u, a, d)));
              break e;
            } else
              for (
                ur = jn(n.stateNode.containerInfo.firstChild),
                  lr = n,
                  tt = !0,
                  Nr = null,
                  a = Ld(n, null, u, a),
                  n.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Fs(), u === d)) {
              n = pn(t, n, a);
              break e;
            }
            Ht(t, n, u, a);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          zd(n),
          t === null && Il(n),
          (u = n.type),
          (d = n.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (w = d.children),
          Tl(u, d) ? (w = null) : p !== null && Tl(u, p) && (n.flags |= 32),
          bh(t, n),
          Ht(t, n, w, a),
          n.child
        );
      case 6:
        return (t === null && Il(n), null);
      case 13:
        return Eh(t, n, a);
      case 4:
        return (
          Wl(n, n.stateNode.containerInfo),
          (u = n.pendingProps),
          t === null ? (n.child = zs(n, null, u, a)) : Ht(t, n, u, a),
          n.child
        );
      case 11:
        return (
          (u = n.type),
          (d = n.pendingProps),
          (d = n.elementType === u ? d : Pr(u, d)),
          yh(t, n, u, d, a)
        );
      case 7:
        return (Ht(t, n, n.pendingProps, a), n.child);
      case 8:
        return (Ht(t, n, n.pendingProps.children, a), n.child);
      case 12:
        return (Ht(t, n, n.pendingProps.children, a), n.child);
      case 10:
        e: {
          if (
            ((u = n.type._context),
            (d = n.pendingProps),
            (p = n.memoizedProps),
            (w = d.value),
            Je(qa, u._currentValue),
            (u._currentValue = w),
            p !== null)
          )
            if (jr(p.value, w)) {
              if (p.children === d.children && !Gt.current) {
                n = pn(t, n, a);
                break e;
              }
            } else
              for (p = n.child, p !== null && (p.return = n); p !== null; ) {
                var S = p.dependencies;
                if (S !== null) {
                  w = p.child;
                  for (var N = S.firstContext; N !== null; ) {
                    if (N.context === u) {
                      if (p.tag === 1) {
                        ((N = fn(-1, a & -a)), (N.tag = 2));
                        var U = p.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var V = U.pending;
                          (V === null
                            ? (N.next = N)
                            : ((N.next = V.next), (V.next = N)),
                            (U.pending = N));
                        }
                      }
                      ((p.lanes |= a),
                        (N = p.alternate),
                        N !== null && (N.lanes |= a),
                        Fl(p.return, a, n),
                        (S.lanes |= a));
                      break;
                    }
                    N = N.next;
                  }
                } else if (p.tag === 10) w = p.type === n.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((w = p.return), w === null)) throw Error(s(341));
                  ((w.lanes |= a),
                    (S = w.alternate),
                    S !== null && (S.lanes |= a),
                    Fl(w, a, n),
                    (w = p.sibling));
                } else w = p.child;
                if (w !== null) w.return = p;
                else
                  for (w = p; w !== null; ) {
                    if (w === n) {
                      w = null;
                      break;
                    }
                    if (((p = w.sibling), p !== null)) {
                      ((p.return = w.return), (w = p));
                      break;
                    }
                    w = w.return;
                  }
                p = w;
              }
          (Ht(t, n, d.children, a), (n = n.child));
        }
        return n;
      case 9:
        return (
          (d = n.type),
          (u = n.pendingProps.children),
          Ws(n, a),
          (d = wr(d)),
          (u = u(d)),
          (n.flags |= 1),
          Ht(t, n, u, a),
          n.child
        );
      case 14:
        return (
          (u = n.type),
          (d = Pr(u, n.pendingProps)),
          (d = Pr(u.type, d)),
          vh(t, n, u, d, a)
        );
      case 15:
        return wh(t, n, n.type, n.pendingProps, a);
      case 17:
        return (
          (u = n.type),
          (d = n.pendingProps),
          (d = n.elementType === u ? d : Pr(u, d)),
          so(t, n),
          (n.tag = 1),
          Jt(u) ? ((t = !0), Fa(n)) : (t = !1),
          Ws(n, a),
          ch(n, u, d),
          ru(n, u, d, a),
          au(null, n, u, !0, t, a)
        );
      case 19:
        return Ch(t, n, a);
      case 22:
        return xh(t, n, a);
    }
    throw Error(s(156, n.tag));
  };
  function Qh(t, n) {
    return ft(t, n);
  }
  function Zg(t, n, a, u) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function _r(t, n, a, u) {
    return new Zg(t, n, a, u);
  }
  function Tu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ey(t) {
    if (typeof t == "function") return Tu(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === Pe)) return 11;
      if (t === De) return 14;
    }
    return 2;
  }
  function Fn(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = _r(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 14680064),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      a
    );
  }
  function go(t, n, a, u, d, p) {
    var w = 2;
    if (((u = t), typeof t == "function")) Tu(t) && (w = 1);
    else if (typeof t == "string") w = 5;
    else
      e: switch (t) {
        case I:
          return ms(a.children, d, p, n);
        case Z:
          ((w = 8), (d |= 8));
          break;
        case ne:
          return (
            (t = _r(12, a, n, d | 2)),
            (t.elementType = ne),
            (t.lanes = p),
            t
          );
        case pe:
          return (
            (t = _r(13, a, n, d)),
            (t.elementType = pe),
            (t.lanes = p),
            t
          );
        case be:
          return (
            (t = _r(19, a, n, d)),
            (t.elementType = be),
            (t.lanes = p),
            t
          );
        case me:
          return yo(a, d, p, n);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case fe:
                w = 10;
                break e;
              case ke:
                w = 9;
                break e;
              case Pe:
                w = 11;
                break e;
              case De:
                w = 14;
                break e;
              case ee:
                ((w = 16), (u = null));
                break e;
            }
          throw Error(s(130, t == null ? t : typeof t, ""));
      }
    return (
      (n = _r(w, a, n, d)),
      (n.elementType = t),
      (n.type = u),
      (n.lanes = p),
      n
    );
  }
  function ms(t, n, a, u) {
    return ((t = _r(7, t, u, n)), (t.lanes = a), t);
  }
  function yo(t, n, a, u) {
    return (
      (t = _r(22, t, u, n)),
      (t.elementType = me),
      (t.lanes = a),
      (t.stateNode = { isHidden: !1 }),
      t
    );
  }
  function Cu(t, n, a) {
    return ((t = _r(6, t, null, n)), (t.lanes = a), t);
  }
  function Ru(t, n, a) {
    return (
      (n = _r(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  function ty(t, n, a, u, d) {
    ((this.tag = n),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = tl(0)),
      (this.expirationTimes = tl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = tl(0)),
      (this.identifierPrefix = u),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ju(t, n, a, u, d, p, w, S, N) {
    return (
      (t = new ty(t, n, a, S, N)),
      n === 1 ? ((n = 1), p === !0 && (n |= 8)) : (n = 0),
      (p = _r(3, null, null, n)),
      (t.current = p),
      (p.stateNode = t),
      (p.memoizedState = {
        element: u,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Bl(p),
      t
    );
  }
  function ry(t, n, a) {
    var u =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: u == null ? null : "" + u,
      children: t,
      containerInfo: n,
      implementation: a,
    };
  }
  function Xh(t) {
    if (!t) return Pn;
    t = t._reactInternals;
    e: {
      if (de(t) !== t || t.tag !== 1) throw Error(s(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Jt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(s(171));
    }
    if (t.tag === 1) {
      var a = t.type;
      if (Jt(a)) return Td(t, a, n);
    }
    return n;
  }
  function Zh(t, n, a, u, d, p, w, S, N) {
    return (
      (t = ju(a, u, !0, t, d, p, w, S, N)),
      (t.context = Xh(null)),
      (a = t.current),
      (u = Vt()),
      (d = $n(a)),
      (p = fn(u, d)),
      (p.callback = n ?? null),
      Dn(a, p, d),
      (t.current.lanes = d),
      fi(t, d, u),
      Zt(t, u),
      t
    );
  }
  function vo(t, n, a, u) {
    var d = n.current,
      p = Vt(),
      w = $n(d);
    return (
      (a = Xh(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = fn(p, w)),
      (n.payload = { element: t }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (t = Dn(d, n, w)),
      t !== null && (Dr(t, d, w, p), Ya(t, d, w)),
      w
    );
  }
  function wo(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function ef(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Nu(t, n) {
    (ef(t, n), (t = t.alternate) && ef(t, n));
  }
  function ny() {
    return null;
  }
  var tf =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          console.error(t);
        };
  function Pu(t) {
    this._internalRoot = t;
  }
  ((xo.prototype.render = Pu.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      vo(t, n, null, null);
    }),
    (xo.prototype.unmount = Pu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (hs(function () {
            vo(null, t, null, null);
          }),
            (n[ln] = null));
        }
      }));
  function xo(t) {
    this._internalRoot = t;
  }
  xo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = $c();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < Tn.length && n !== 0 && n < Tn[a].priority; a++);
      (Tn.splice(a, 0, t), a === 0 && zc(t));
    }
  };
  function Ou(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function bo(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rf() {}
  function sy(t, n, a, u, d) {
    if (d) {
      if (typeof u == "function") {
        var p = u;
        u = function () {
          var U = wo(w);
          p.call(U);
        };
      }
      var w = Zh(n, u, t, 0, null, !1, !1, "", rf);
      return (
        (t._reactRootContainer = w),
        (t[ln] = w.current),
        Ci(t.nodeType === 8 ? t.parentNode : t),
        hs(),
        w
      );
    }
    for (; (d = t.lastChild); ) t.removeChild(d);
    if (typeof u == "function") {
      var S = u;
      u = function () {
        var U = wo(N);
        S.call(U);
      };
    }
    var N = ju(t, 0, !1, null, null, !1, !1, "", rf);
    return (
      (t._reactRootContainer = N),
      (t[ln] = N.current),
      Ci(t.nodeType === 8 ? t.parentNode : t),
      hs(function () {
        vo(n, N, a, u);
      }),
      N
    );
  }
  function _o(t, n, a, u, d) {
    var p = a._reactRootContainer;
    if (p) {
      var w = p;
      if (typeof d == "function") {
        var S = d;
        d = function () {
          var N = wo(w);
          S.call(N);
        };
      }
      vo(n, w, t, d);
    } else w = sy(a, n, t, d, u);
    return wo(w);
  }
  ((Lc = function (t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var a = ns(n.pendingLanes);
          a !== 0 &&
            (rl(n, a | 1),
            Zt(n, qe()),
            (ze & 6) === 0 && ((Ys = qe() + 500), On()));
        }
        break;
      case 13:
        (hs(function () {
          var u = hn(t, 1);
          if (u !== null) {
            var d = Vt();
            Dr(u, t, 1, d);
          }
        }),
          Nu(t, 1));
    }
  }),
    (nl = function (t) {
      if (t.tag === 13) {
        var n = hn(t, 134217728);
        if (n !== null) {
          var a = Vt();
          Dr(n, t, 134217728, a);
        }
        Nu(t, 134217728);
      }
    }),
    (Mc = function (t) {
      if (t.tag === 13) {
        var n = $n(t),
          a = hn(t, n);
        if (a !== null) {
          var u = Vt();
          Dr(a, t, n, u);
        }
        Nu(t, n);
      }
    }),
    ($c = function () {
      return Ke;
    }),
    (Uc = function (t, n) {
      var a = Ke;
      try {
        return ((Ke = t), n());
      } finally {
        Ke = a;
      }
    }),
    (Wr = function (t, n, a) {
      switch (n) {
        case "input":
          if ((Tr(t, a), (n = a.name), a.type === "radio" && n != null)) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var u = a[n];
              if (u !== t && u.form === t.form) {
                var d = $a(u);
                if (!d) throw Error(s(90));
                (at(u), Tr(u, d));
              }
            }
          }
          break;
        case "textarea":
          pr(t, a);
          break;
        case "select":
          ((n = a.value), n != null && Ur(t, !!a.multiple, n, !1));
      }
    }),
    (ot = ku),
    (ht = hs));
  var iy = { usingClientEntryPoint: !1, Events: [Ni, Is, $a, je, rt, ku] },
    Hi = {
      findFiberByHostInstance: ss,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ay = {
      bundleType: Hi.bundleType,
      version: Hi.version,
      rendererPackageName: Hi.rendererPackageName,
      rendererConfig: Hi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: F.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return ((t = Ue(t)), t === null ? null : t.stateNode);
      },
      findFiberByHostInstance: Hi.findFiberByHostInstance || ny,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ko.isDisabled && ko.supportsFiber)
      try {
        ((sn = ko.inject(ay)), (Wt = ko));
      } catch {}
  }
  return (
    (er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy),
    (er.createPortal = function (t, n) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ou(n)) throw Error(s(200));
      return ry(t, n, null, a);
    }),
    (er.createRoot = function (t, n) {
      if (!Ou(t)) throw Error(s(299));
      var a = !1,
        u = "",
        d = tf;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (n = ju(t, 1, !1, null, null, a, !1, u, d)),
        (t[ln] = n.current),
        Ci(t.nodeType === 8 ? t.parentNode : t),
        new Pu(n)
      );
    }),
    (er.findDOMNode = function (t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0)
        throw typeof t.render == "function"
          ? Error(s(188))
          : ((t = Object.keys(t).join(",")), Error(s(268, t)));
      return ((t = Ue(n)), (t = t === null ? null : t.stateNode), t);
    }),
    (er.flushSync = function (t) {
      return hs(t);
    }),
    (er.hydrate = function (t, n, a) {
      if (!bo(n)) throw Error(s(200));
      return _o(null, t, n, !0, a);
    }),
    (er.hydrateRoot = function (t, n, a) {
      if (!Ou(t)) throw Error(s(405));
      var u = (a != null && a.hydratedSources) || null,
        d = !1,
        p = "",
        w = tf;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (d = !0),
          a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (w = a.onRecoverableError)),
        (n = Zh(n, null, t, 1, a ?? null, d, !1, p, w)),
        (t[ln] = n.current),
        Ci(t),
        u)
      )
        for (t = 0; t < u.length; t++)
          ((a = u[t]),
            (d = a._getVersion),
            (d = d(a._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [a, d])
              : n.mutableSourceEagerHydrationData.push(a, d));
      return new xo(n);
    }),
    (er.render = function (t, n, a) {
      if (!bo(n)) throw Error(s(200));
      return _o(null, t, n, !1, a);
    }),
    (er.unmountComponentAtNode = function (t) {
      if (!bo(t)) throw Error(s(40));
      return t._reactRootContainer
        ? (hs(function () {
            _o(null, null, t, !1, function () {
              ((t._reactRootContainer = null), (t[ln] = null));
            });
          }),
          !0)
        : !1;
    }),
    (er.unstable_batchedUpdates = ku),
    (er.unstable_renderSubtreeIntoContainer = function (t, n, a, u) {
      if (!bo(a)) throw Error(s(200));
      if (t == null || t._reactInternals === void 0) throw Error(s(38));
      return _o(t, n, a, !1, u);
    }),
    (er.version = "18.3.1-next-f1338f8080-20240426"),
    er
  );
}
var df;
function bp() {
  if (df) return Iu.exports;
  df = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (e) {
        console.error(e);
      }
  }
  return (r(), (Iu.exports = py()), Iu.exports);
}
var hf;
function my() {
  if (hf) return So;
  hf = 1;
  var r = bp();
  return ((So.createRoot = r.createRoot), (So.hydrateRoot = r.hydrateRoot), So);
}
var gy = my(),
  C = mc();
const te = xp(C),
  yy = ly({ __proto__: null, default: te }, [C]);
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _p = (r) => {
    throw TypeError(r);
  },
  vy = (r, e, s) => e.has(r) || _p("Cannot " + s),
  $u = (r, e, s) => (
    vy(r, e, "read from private field"),
    s ? s.call(r) : e.get(r)
  ),
  wy = (r, e, s) =>
    e.has(r)
      ? _p("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(r)
        : e.set(r, s),
  ff = "popstate";
function xy(r = {}) {
  function e(i, o) {
    let { pathname: l, search: c, hash: h } = i.location;
    return ia(
      "",
      { pathname: l, search: c, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function s(i, o) {
    return typeof o == "string" ? o : Xr(o);
  }
  return _y(e, s, null, r);
}
function Me(r, e) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(e);
}
function wt(r, e) {
  if (!r) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function by() {
  return Math.random().toString(36).substring(2, 10);
}
function pf(r, e) {
  return { usr: r.state, key: r.key, idx: e };
}
function ia(r, e, s = null, i) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof e == "string" ? Gn(e) : e),
    state: s,
    key: (e && e.key) || i || by(),
  };
}
function Xr({ pathname: r = "/", search: e = "", hash: s = "" }) {
  return (
    e && e !== "?" && (r += e.charAt(0) === "?" ? e : "?" + e),
    s && s !== "#" && (r += s.charAt(0) === "#" ? s : "#" + s),
    r
  );
}
function Gn(r) {
  let e = {};
  if (r) {
    let s = r.indexOf("#");
    s >= 0 && ((e.hash = r.substring(s)), (r = r.substring(0, s)));
    let i = r.indexOf("?");
    (i >= 0 && ((e.search = r.substring(i)), (r = r.substring(0, i))),
      r && (e.pathname = r));
  }
  return e;
}
function _y(r, e, s, i = {}) {
  let { window: o = document.defaultView, v5Compat: l = !1 } = i,
    c = o.history,
    h = "POP",
    f = null,
    m = v();
  m == null && ((m = 0), c.replaceState({ ...c.state, idx: m }, ""));
  function v() {
    return (c.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let k = v(),
      P = k == null ? null : k - m;
    ((m = k), f && f({ action: h, location: j.location, delta: P }));
  }
  function b(k, P) {
    h = "PUSH";
    let T = ia(j.location, k, P);
    m = v() + 1;
    let O = pf(T, m),
      F = j.createHref(T);
    try {
      c.pushState(O, "", F);
    } catch (q) {
      if (q instanceof DOMException && q.name === "DataCloneError") throw q;
      o.location.assign(F);
    }
    l && f && f({ action: h, location: j.location, delta: 1 });
  }
  function x(k, P) {
    h = "REPLACE";
    let T = ia(j.location, k, P);
    m = v();
    let O = pf(T, m),
      F = j.createHref(T);
    (c.replaceState(O, "", F),
      l && f && f({ action: h, location: j.location, delta: 0 }));
  }
  function _(k) {
    return kp(k);
  }
  let j = {
    get action() {
      return h;
    },
    get location() {
      return r(o, c);
    },
    listen(k) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(ff, g),
        (f = k),
        () => {
          (o.removeEventListener(ff, g), (f = null));
        }
      );
    },
    createHref(k) {
      return e(o, k);
    },
    createURL: _,
    encodeLocation(k) {
      let P = _(k);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: b,
    replace: x,
    go(k) {
      return c.go(k);
    },
  };
  return j;
}
function kp(r, e = !1) {
  let s = "http://localhost";
  (typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Me(s, "No window.location.(origin|href) available to create URL"));
  let i = typeof r == "string" ? r : Xr(r);
  return (
    (i = i.replace(/ $/, "%20")),
    !e && i.startsWith("//") && (i = s + i),
    new URL(i, s)
  );
}
var Zi,
  mf = class {
    constructor(r) {
      if ((wy(this, Zi, new Map()), r)) for (let [e, s] of r) this.set(e, s);
    }
    get(r) {
      if ($u(this, Zi).has(r)) return $u(this, Zi).get(r);
      if (r.defaultValue !== void 0) return r.defaultValue;
      throw new Error("No value found for context");
    }
    set(r, e) {
      $u(this, Zi).set(r, e);
    }
  };
Zi = new WeakMap();
var ky = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Sy(r) {
  return ky.has(r);
}
var Ey = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function Ty(r) {
  return Ey.has(r);
}
function Cy(r) {
  return r.index === !0;
}
function aa(r, e, s = [], i = {}, o = !1) {
  return r.map((l, c) => {
    let h = [...s, String(c)],
      f = typeof l.id == "string" ? l.id : h.join("-");
    if (
      (Me(
        l.index !== !0 || !l.children,
        "Cannot specify children on an index route"
      ),
      Me(
        o || !i[f],
        `Found a route id collision on id "${f}".  Route id's must be globally unique within Data Router usages`
      ),
      Cy(l))
    ) {
      let m = { ...l, id: f };
      return ((i[f] = gf(m, e(m))), m);
    } else {
      let m = { ...l, id: f, children: void 0 };
      return (
        (i[f] = gf(m, e(m))),
        l.children && (m.children = aa(l.children, e, h, i, o)),
        m
      );
    }
  });
}
function gf(r, e) {
  return Object.assign(r, {
    ...e,
    ...(typeof e.lazy == "object" && e.lazy != null
      ? { lazy: { ...r.lazy, ...e.lazy } }
      : {}),
  });
}
function Hn(r, e, s = "/") {
  return ea(r, e, s, !1);
}
function ea(r, e, s, i) {
  let o = typeof e == "string" ? Gn(e) : e,
    l = Sr(o.pathname || "/", s);
  if (l == null) return null;
  let c = Sp(r);
  jy(c);
  let h = null;
  for (let f = 0; h == null && f < c.length; ++f) {
    let m = Fy(l);
    h = $y(c[f], m, i);
  }
  return h;
}
function Ry(r, e) {
  let { route: s, pathname: i, params: o } = r;
  return {
    id: s.id,
    pathname: i,
    params: o,
    data: e[s.id],
    loaderData: e[s.id],
    handle: s.handle,
  };
}
function Sp(r, e = [], s = [], i = "", o = !1) {
  let l = (c, h, f = o, m) => {
    let v = {
      relativePath: m === void 0 ? c.path || "" : m,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: h,
      route: c,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(i) && f) return;
      (Me(
        v.relativePath.startsWith(i),
        `Absolute route path "${v.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (v.relativePath = v.relativePath.slice(i.length)));
    }
    let g = Qr([i, v.relativePath]),
      b = s.concat(v);
    (c.children &&
      c.children.length > 0 &&
      (Me(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Sp(c.children, e, b, g, f)),
      !(c.path == null && !c.index) &&
        e.push({ path: g, score: Ly(g, c.index), routesMeta: b }));
  };
  return (
    r.forEach((c, h) => {
      var f;
      if (c.path === "" || !((f = c.path) != null && f.includes("?"))) l(c, h);
      else for (let m of Ep(c.path)) l(c, h, !0, m);
    }),
    e
  );
}
function Ep(r) {
  let e = r.split("/");
  if (e.length === 0) return [];
  let [s, ...i] = e,
    o = s.endsWith("?"),
    l = s.replace(/\?$/, "");
  if (i.length === 0) return o ? [l, ""] : [l];
  let c = Ep(i.join("/")),
    h = [];
  return (
    h.push(...c.map((f) => (f === "" ? l : [l, f].join("/")))),
    o && h.push(...c),
    h.map((f) => (r.startsWith("/") && f === "" ? "/" : f))
  );
}
function jy(r) {
  r.sort((e, s) =>
    e.score !== s.score
      ? s.score - e.score
      : My(
          e.routesMeta.map((i) => i.childrenIndex),
          s.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var Ny = /^:[\w-]+$/,
  Py = 3,
  Oy = 2,
  Ay = 1,
  Dy = 10,
  Iy = -2,
  yf = (r) => r === "*";
function Ly(r, e) {
  let s = r.split("/"),
    i = s.length;
  return (
    s.some(yf) && (i += Iy),
    e && (i += Oy),
    s
      .filter((o) => !yf(o))
      .reduce((o, l) => o + (Ny.test(l) ? Py : l === "" ? Ay : Dy), i)
  );
}
function My(r, e) {
  return r.length === e.length && r.slice(0, -1).every((i, o) => i === e[o])
    ? r[r.length - 1] - e[e.length - 1]
    : 0;
}
function $y(r, e, s = !1) {
  let { routesMeta: i } = r,
    o = {},
    l = "/",
    c = [];
  for (let h = 0; h < i.length; ++h) {
    let f = i[h],
      m = h === i.length - 1,
      v = l === "/" ? e : e.slice(l.length) || "/",
      g = Fo(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: m },
        v
      ),
      b = f.route;
    if (
      (!g &&
        m &&
        s &&
        !i[i.length - 1].route.index &&
        (g = Fo(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          v
        )),
      !g)
    )
      return null;
    (Object.assign(o, g.params),
      c.push({
        params: o,
        pathname: Qr([l, g.pathname]),
        pathnameBase: Wy(Qr([l, g.pathnameBase])),
        route: b,
      }),
      g.pathnameBase !== "/" && (l = Qr([l, g.pathnameBase])));
  }
  return c;
}
function Fo(r, e) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [s, i] = Uy(r.path, r.caseSensitive, r.end),
    o = e.match(s);
  if (!o) return null;
  let l = o[0],
    c = l.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: i.reduce((m, { paramName: v, isOptional: g }, b) => {
      if (v === "*") {
        let _ = h[b] || "";
        c = l.slice(0, l.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const x = h[b];
      return (
        g && !x ? (m[v] = void 0) : (m[v] = (x || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: l,
    pathnameBase: c,
    pattern: r,
  };
}
function Uy(r, e = !1, s = !0) {
  wt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let i = [],
    o =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, h, f) => (
            i.push({ paramName: h, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    r.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (o += "\\/*$")
        : r !== "" && r !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, e ? void 0 : "i"), i]
  );
}
function Fy(r) {
  try {
    return r
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      wt(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
      ),
      r
    );
  }
}
function Sr(r, e) {
  if (e === "/") return r;
  if (!r.toLowerCase().startsWith(e.toLowerCase())) return null;
  let s = e.endsWith("/") ? e.length - 1 : e.length,
    i = r.charAt(s);
  return i && i !== "/" ? null : r.slice(s) || "/";
}
function zy({ basename: r, pathname: e }) {
  return e === "/" ? r : Qr([r, e]);
}
var Tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gc = (r) => Tp.test(r);
function By(r, e = "/") {
  let {
      pathname: s,
      search: i = "",
      hash: o = "",
    } = typeof r == "string" ? Gn(r) : r,
    l;
  return (
    s
      ? ((s = s.replace(/\/\/+/g, "/")),
        s.startsWith("/") ? (l = vf(s.substring(1), "/")) : (l = vf(s, e)))
      : (l = e),
    { pathname: l, search: Hy(i), hash: Vy(o) }
  );
}
function vf(r, e) {
  let s = e.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((o) => {
      o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Uu(r, e, s, i) {
  return `Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Cp(r) {
  return r.filter(
    (e, s) => s === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function yc(r) {
  let e = Cp(r);
  return e.map((s, i) => (i === e.length - 1 ? s.pathname : s.pathnameBase));
}
function vc(r, e, s, i = !1) {
  let o;
  typeof r == "string"
    ? (o = Gn(r))
    : ((o = { ...r }),
      Me(
        !o.pathname || !o.pathname.includes("?"),
        Uu("?", "pathname", "search", o)
      ),
      Me(
        !o.pathname || !o.pathname.includes("#"),
        Uu("#", "pathname", "hash", o)
      ),
      Me(!o.search || !o.search.includes("#"), Uu("#", "search", "hash", o)));
  let l = r === "" || o.pathname === "",
    c = l ? "/" : o.pathname,
    h;
  if (c == null) h = s;
  else {
    let g = e.length - 1;
    if (!i && c.startsWith("..")) {
      let b = c.split("/");
      for (; b[0] === ".."; ) (b.shift(), (g -= 1));
      o.pathname = b.join("/");
    }
    h = g >= 0 ? e[g] : "/";
  }
  let f = By(o, h),
    m = c && c !== "/" && c.endsWith("/"),
    v = (l || c === ".") && s.endsWith("/");
  return (!f.pathname.endsWith("/") && (m || v) && (f.pathname += "/"), f);
}
var Qr = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Wy = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hy = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Vy = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r),
  ga = class {
    constructor(r, e, s, i = !1) {
      ((this.status = r),
        (this.statusText = e || ""),
        (this.internal = i),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s));
    }
  };
function oa(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
function ya(r) {
  return (
    r
      .map((e) => e.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Rp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function jp(r, e) {
  let s = r;
  if (typeof s != "string" || !Tp.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let i = s,
    o = !1;
  if (Rp)
    try {
      let l = new URL(window.location.href),
        c = s.startsWith("//") ? new URL(l.protocol + s) : new URL(s),
        h = Sr(c.pathname, e);
      c.origin === l.origin && h != null
        ? (s = h + c.search + c.hash)
        : (o = !0);
    } catch {
      wt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: i, isExternal: o, to: s };
}
var Kn = Symbol("Uninstrumented");
function qy(r, e) {
  let s = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: [],
  };
  r.forEach((o) =>
    o({
      id: e.id,
      index: e.index,
      path: e.path,
      instrument(l) {
        let c = Object.keys(s);
        for (let h of c) l[h] && s[h].push(l[h]);
      },
    })
  );
  let i = {};
  if (typeof e.lazy == "function" && s.lazy.length > 0) {
    let o = oi(s.lazy, e.lazy, () => {});
    o && (i.lazy = o);
  }
  if (typeof e.lazy == "object") {
    let o = e.lazy;
    ["middleware", "loader", "action"].forEach((l) => {
      let c = o[l],
        h = s[`lazy.${l}`];
      if (typeof c == "function" && h.length > 0) {
        let f = oi(h, c, () => {});
        f && (i.lazy = Object.assign(i.lazy || {}, { [l]: f }));
      }
    });
  }
  return (
    ["loader", "action"].forEach((o) => {
      let l = e[o];
      if (typeof l == "function" && s[o].length > 0) {
        let c = l[Kn] ?? l,
          h = oi(s[o], c, (...f) => wf(f[0]));
        h &&
          (o === "loader" && c.hydrate === !0 && (h.hydrate = !0),
          (h[Kn] = c),
          (i[o] = h));
      }
    }),
    e.middleware &&
      e.middleware.length > 0 &&
      s.middleware.length > 0 &&
      (i.middleware = e.middleware.map((o) => {
        let l = o[Kn] ?? o,
          c = oi(s.middleware, l, (...h) => wf(h[0]));
        return c ? ((c[Kn] = l), c) : o;
      })),
    i
  );
}
function Ky(r, e) {
  let s = { navigate: [], fetch: [] };
  if (
    (e.forEach((i) =>
      i({
        instrument(o) {
          let l = Object.keys(o);
          for (let c of l) o[c] && s[c].push(o[c]);
        },
      })
    ),
    s.navigate.length > 0)
  ) {
    let i = r.navigate[Kn] ?? r.navigate,
      o = oi(s.navigate, i, (...l) => {
        let [c, h] = l;
        return {
          to:
            typeof c == "number" || typeof c == "string" ? c : c ? Xr(c) : ".",
          ...xf(r, h ?? {}),
        };
      });
    o && ((o[Kn] = i), (r.navigate = o));
  }
  if (s.fetch.length > 0) {
    let i = r.fetch[Kn] ?? r.fetch,
      o = oi(s.fetch, i, (...l) => {
        let [c, , h, f] = l;
        return { href: h ?? ".", fetcherKey: c, ...xf(r, f ?? {}) };
      });
    o && ((o[Kn] = i), (r.fetch = o));
  }
  return r;
}
function oi(r, e, s) {
  return r.length === 0
    ? null
    : async (...i) => {
        let o = await Np(r, s(...i), () => e(...i), r.length - 1);
        if (o.type === "error") throw o.value;
        return o.value;
      };
}
async function Np(r, e, s, i) {
  let o = r[i],
    l;
  if (o) {
    let c,
      h = async () => (
        c
          ? console.error(
              "You cannot call instrumented handlers more than once"
            )
          : (c = Np(r, e, s, i - 1)),
        (l = await c),
        Me(l, "Expected a result"),
        l.type === "error" && l.value instanceof Error
          ? { status: "error", error: l.value }
          : { status: "success", error: void 0 }
      );
    try {
      await o(h, e);
    } catch (f) {
      console.error("An instrumentation function threw an error:", f);
    }
    (c || (await h()), await c);
  } else
    try {
      l = { type: "success", value: await s() };
    } catch (c) {
      l = { type: "error", value: c };
    }
  return (
    l || {
      type: "error",
      value: new Error("No result assigned in instrumentation chain."),
    }
  );
}
function wf(r) {
  let { request: e, context: s, params: i, unstable_pattern: o } = r;
  return {
    request: Yy(e),
    params: { ...i },
    unstable_pattern: o,
    context: Gy(s),
  };
}
function xf(r, e) {
  return {
    currentUrl: Xr(r.state.location),
    ...("formMethod" in e ? { formMethod: e.formMethod } : {}),
    ...("formEncType" in e ? { formEncType: e.formEncType } : {}),
    ...("formData" in e ? { formData: e.formData } : {}),
    ...("body" in e ? { body: e.body } : {}),
  };
}
function Yy(r) {
  return {
    method: r.method,
    url: r.url,
    headers: { get: (...e) => r.headers.get(...e) },
  };
}
function Gy(r) {
  if (Qy(r)) {
    let e = { ...r };
    return (Object.freeze(e), e);
  } else return { get: (e) => r.get(e) };
}
var Jy = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Qy(r) {
  if (r === null || typeof r != "object") return !1;
  const e = Object.getPrototypeOf(r);
  return (
    e === Object.prototype ||
    e === null ||
    Object.getOwnPropertyNames(e).sort().join("\0") === Jy
  );
}
var Pp = ["POST", "PUT", "PATCH", "DELETE"],
  Xy = new Set(Pp),
  Zy = ["GET", ...Pp],
  ev = new Set(Zy),
  Op = new Set([301, 302, 303, 307, 308]),
  tv = new Set([307, 308]),
  Fu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  nv = (r) => ({ hasErrorBoundary: !!r.hasErrorBoundary }),
  Ap = "remix-router-transitions",
  Dp = Symbol("ResetLoaderData");
function sv(r) {
  const e = r.window ? r.window : typeof window < "u" ? window : void 0,
    s =
      typeof e < "u" &&
      typeof e.document < "u" &&
      typeof e.document.createElement < "u";
  Me(
    r.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i = r.hydrationRouteProperties || [],
    o = r.mapRouteProperties || nv,
    l = o;
  if (r.unstable_instrumentations) {
    let E = r.unstable_instrumentations;
    l = (A) => ({ ...o(A), ...qy(E.map(($) => $.route).filter(Boolean), A) });
  }
  let c = {},
    h = aa(r.routes, l, void 0, c),
    f,
    m = r.basename || "/";
  m.startsWith("/") || (m = `/${m}`);
  let v = r.dataStrategy || uv,
    g = { ...r.future },
    b = null,
    x = new Set(),
    _ = null,
    j = null,
    k = null,
    P = r.hydrationData != null,
    T = Hn(h, r.history.location, m),
    O = !1,
    F = null,
    q;
  if (T == null && !r.patchRoutesOnNavigation) {
    let E = kr(404, { pathname: r.history.location.pathname }),
      { matches: A, route: $ } = Eo(h);
    ((q = !0), (T = A), (F = { [$.id]: E }));
  } else if (
    (T &&
      !r.hydrationData &&
      ht(T, h, r.history.location.pathname).active &&
      (T = null),
    T)
  )
    if (T.some((E) => E.route.lazy)) q = !1;
    else if (!T.some((E) => wc(E.route))) q = !0;
    else {
      let E = r.hydrationData ? r.hydrationData.loaderData : null,
        A = r.hydrationData ? r.hydrationData.errors : null;
      if (A) {
        let $ = T.findIndex((W) => A[W.route.id] !== void 0);
        q = T.slice(0, $ + 1).every((W) => !ec(W.route, E, A));
      } else q = T.every(($) => !ec($.route, E, A));
    }
  else {
    ((q = !1), (T = []));
    let E = ht(null, h, r.history.location.pathname);
    E.active && E.matches && ((O = !0), (T = E.matches));
  }
  let Q,
    I = {
      historyAction: r.history.action,
      location: r.history.location,
      matches: T,
      initialized: q,
      navigation: Fu,
      restoreScrollPosition: r.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (r.hydrationData && r.hydrationData.loaderData) || {},
      actionData: (r.hydrationData && r.hydrationData.actionData) || null,
      errors: (r.hydrationData && r.hydrationData.errors) || F,
      fetchers: new Map(),
      blockers: new Map(),
    },
    Z = "POP",
    ne = null,
    fe = !1,
    ke,
    Pe = !1,
    pe = new Map(),
    be = null,
    De = !1,
    ee = !1,
    me = new Set(),
    B = new Map(),
    X = 0,
    Y = -1,
    R = new Map(),
    z = new Set(),
    re = new Map(),
    le = new Map(),
    xe = new Set(),
    ae = new Map(),
    $e,
    Oe = null;
  function Be() {
    if (
      ((b = r.history.listen(({ action: E, location: A, delta: $ }) => {
        if ($e) {
          ($e(), ($e = void 0));
          return;
        }
        wt(
          ae.size === 0 || $ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let W = Rr({
          currentLocation: I.location,
          nextLocation: A,
          historyAction: E,
        });
        if (W && $ != null) {
          let J = new Promise((ge) => {
            $e = ge;
          });
          (r.history.go($ * -1),
            Wr(W, {
              state: "blocked",
              location: A,
              proceed() {
                (Wr(W, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: A,
                }),
                  J.then(() => r.history.go($)));
              },
              reset() {
                let ge = new Map(I.blockers);
                (ge.set(W, qi), at({ blockers: ge }));
              },
            }),
            ne == null || ne.resolve(),
            (ne = null));
          return;
        }
        return nr(E, A);
      })),
      s)
    ) {
      Cv(e, pe);
      let E = () => Rv(e, pe);
      (e.addEventListener("pagehide", E),
        (be = () => e.removeEventListener("pagehide", E)));
    }
    return (
      I.initialized || nr("POP", I.location, { initialHydration: !0 }),
      Q
    );
  }
  function dt() {
    (b && b(),
      be && be(),
      x.clear(),
      ke && ke.abort(),
      I.fetchers.forEach((E, A) => mr(A)),
      I.blockers.forEach((E, A) => Bt(A)));
  }
  function wn(E) {
    return (x.add(E), () => x.delete(E));
  }
  function at(E, A = {}) {
    (E.matches &&
      (E.matches = E.matches.map((J) => {
        let ge = c[J.route.id],
          _e = J.route;
        return _e.element !== ge.element ||
          _e.errorElement !== ge.errorElement ||
          _e.hydrateFallbackElement !== ge.hydrateFallbackElement
          ? { ...J, route: ge }
          : J;
      })),
      (I = { ...I, ...E }));
    let $ = [],
      W = [];
    (I.fetchers.forEach((J, ge) => {
      J.state === "idle" && (xe.has(ge) ? $.push(ge) : W.push(ge));
    }),
      xe.forEach((J) => {
        !I.fetchers.has(J) && !B.has(J) && $.push(J);
      }),
      [...x].forEach((J) =>
        J(I, {
          deletedFetchers: $,
          newErrors: E.errors ?? null,
          viewTransitionOpts: A.viewTransitionOpts,
          flushSync: A.flushSync === !0,
        })
      ),
      $.forEach((J) => mr(J)),
      W.forEach((J) => I.fetchers.delete(J)));
  }
  function rr(E, A, { flushSync: $ } = {}) {
    var Ne, ve;
    let W =
        I.actionData != null &&
        I.navigation.formMethod != null &&
        Ft(I.navigation.formMethod) &&
        I.navigation.state === "loading" &&
        ((Ne = E.state) == null ? void 0 : Ne._isRedirect) !== !0,
      J;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (J = A.actionData)
        : (J = null)
      : W
        ? (J = I.actionData)
        : (J = null);
    let ge = A.loaderData
        ? Nf(I.loaderData, A.loaderData, A.matches || [], A.errors)
        : I.loaderData,
      _e = I.blockers;
    _e.size > 0 && ((_e = new Map(_e)), _e.forEach((Ae, Ue) => _e.set(Ue, qi)));
    let ie = De ? !1 : ot(E, A.matches || I.matches),
      ue =
        fe === !0 ||
        (I.navigation.formMethod != null &&
          Ft(I.navigation.formMethod) &&
          ((ve = E.state) == null ? void 0 : ve._isRedirect) !== !0);
    (f && ((h = f), (f = void 0)),
      De ||
        Z === "POP" ||
        (Z === "PUSH"
          ? r.history.push(E, E.state)
          : Z === "REPLACE" && r.history.replace(E, E.state)));
    let de;
    if (Z === "POP") {
      let Ae = pe.get(I.location.pathname);
      Ae && Ae.has(E.pathname)
        ? (de = { currentLocation: I.location, nextLocation: E })
        : pe.has(E.pathname) &&
          (de = { currentLocation: E, nextLocation: I.location });
    } else if (Pe) {
      let Ae = pe.get(I.location.pathname);
      (Ae
        ? Ae.add(E.pathname)
        : ((Ae = new Set([E.pathname])), pe.set(I.location.pathname, Ae)),
        (de = { currentLocation: I.location, nextLocation: E }));
    }
    (at(
      {
        ...A,
        actionData: J,
        loaderData: ge,
        historyAction: Z,
        location: E,
        initialized: !0,
        navigation: Fu,
        revalidation: "idle",
        restoreScrollPosition: ie,
        preventScrollReset: ue,
        blockers: _e,
      },
      { viewTransitionOpts: de, flushSync: $ === !0 }
    ),
      (Z = "POP"),
      (fe = !1),
      (Pe = !1),
      (De = !1),
      (ee = !1),
      ne == null || ne.resolve(),
      (ne = null),
      Oe == null || Oe.resolve(),
      (Oe = null));
  }
  async function $r(E, A) {
    if ((ne == null || ne.resolve(), (ne = null), typeof E == "number")) {
      ne || (ne = Df());
      let Ue = ne.promise;
      return (r.history.go(E), Ue);
    }
    let $ = Zu(
        I.location,
        I.matches,
        m,
        E,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative
      ),
      { path: W, submission: J, error: ge } = bf(!1, $, A),
      _e = I.location,
      ie = ia(I.location, W, A && A.state);
    ie = { ...ie, ...r.history.encodeLocation(ie) };
    let ue = A && A.replace != null ? A.replace : void 0,
      de = "PUSH";
    ue === !0
      ? (de = "REPLACE")
      : ue === !1 ||
        (J != null &&
          Ft(J.formMethod) &&
          J.formAction === I.location.pathname + I.location.search &&
          (de = "REPLACE"));
    let Ne =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      ve = (A && A.flushSync) === !0,
      Ae = Rr({ currentLocation: _e, nextLocation: ie, historyAction: de });
    if (Ae) {
      Wr(Ae, {
        state: "blocked",
        location: ie,
        proceed() {
          (Wr(Ae, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ie,
          }),
            $r(E, A));
        },
        reset() {
          let Ue = new Map(I.blockers);
          (Ue.set(Ae, qi), at({ blockers: Ue }));
        },
      });
      return;
    }
    await nr(de, ie, {
      submission: J,
      pendingError: ge,
      preventScrollReset: Ne,
      replace: A && A.replace,
      enableViewTransition: A && A.viewTransition,
      flushSync: ve,
      callSiteDefaultShouldRevalidate: A && A.unstable_defaultShouldRevalidate,
    });
  }
  function Ts() {
    (Oe || (Oe = Df()), tn(), at({ revalidation: "loading" }));
    let E = Oe.promise;
    return I.navigation.state === "submitting"
      ? E
      : I.navigation.state === "idle"
        ? (nr(I.historyAction, I.location, {
            startUninterruptedRevalidation: !0,
          }),
          E)
        : (nr(Z || I.historyAction, I.navigation.location, {
            overrideNavigation: I.navigation,
            enableViewTransition: Pe === !0,
          }),
          E);
  }
  async function nr(E, A, $) {
    (ke && ke.abort(),
      (ke = null),
      (Z = E),
      (De = ($ && $.startUninterruptedRevalidation) === !0),
      rt(I.location, I.matches),
      (fe = ($ && $.preventScrollReset) === !0),
      (Pe = ($ && $.enableViewTransition) === !0));
    let W = f || h,
      J = $ && $.overrideNavigation,
      ge =
        $ != null &&
        $.initialHydration &&
        I.matches &&
        I.matches.length > 0 &&
        !O
          ? I.matches
          : Hn(W, A, m),
      _e = ($ && $.flushSync) === !0;
    if (
      ge &&
      I.initialized &&
      !ee &&
      yv(I.location, A) &&
      !($ && $.submission && Ft($.submission.formMethod))
    ) {
      rr(A, { matches: ge }, { flushSync: _e });
      return;
    }
    let ie = ht(ge, W, A.pathname);
    if ((ie.active && ie.matches && (ge = ie.matches), !ge)) {
      let { error: ft, notFoundMatches: Et, route: He } = sr(A.pathname);
      rr(
        A,
        { matches: Et, loaderData: {}, errors: { [He.id]: ft } },
        { flushSync: _e }
      );
      return;
    }
    ke = new AbortController();
    let ue = ni(r.history, A, ke.signal, $ && $.submission),
      de = r.getContext ? await r.getContext() : new mf(),
      Ne;
    if ($ && $.pendingError)
      Ne = [Vn(ge).route.id, { type: "error", error: $.pendingError }];
    else if ($ && $.submission && Ft($.submission.formMethod)) {
      let ft = await Tr(
        ue,
        A,
        $.submission,
        ge,
        de,
        ie.active,
        $ && $.initialHydration === !0,
        { replace: $.replace, flushSync: _e }
      );
      if (ft.shortCircuited) return;
      if (ft.pendingActionResult) {
        let [Et, He] = ft.pendingActionResult;
        if (hr(He) && oa(He.error) && He.error.status === 404) {
          ((ke = null),
            rr(A, {
              matches: ft.matches,
              loaderData: {},
              errors: { [Et]: He.error },
            }));
          return;
        }
      }
      ((ge = ft.matches || ge),
        (Ne = ft.pendingActionResult),
        (J = zu(A, $.submission)),
        (_e = !1),
        (ie.active = !1),
        (ue = ni(r.history, ue.url, ue.signal)));
    }
    let {
      shortCircuited: ve,
      matches: Ae,
      loaderData: Ue,
      errors: gt,
    } = await Qn(
      ue,
      A,
      ge,
      de,
      ie.active,
      J,
      $ && $.submission,
      $ && $.fetcherSubmission,
      $ && $.replace,
      $ && $.initialHydration === !0,
      _e,
      Ne,
      $ && $.callSiteDefaultShouldRevalidate
    );
    ve ||
      ((ke = null),
      rr(A, { matches: Ae || ge, ...Pf(Ne), loaderData: Ue, errors: gt }));
  }
  async function Tr(E, A, $, W, J, ge, _e, ie = {}) {
    tn();
    let ue = Ev(A, $);
    if ((at({ navigation: ue }, { flushSync: ie.flushSync === !0 }), ge)) {
      let ve = await ir(W, A.pathname, E.signal);
      if (ve.type === "aborted") return { shortCircuited: !0 };
      if (ve.type === "error") {
        if (ve.partialMatches.length === 0) {
          let { matches: Ue, route: gt } = Eo(h);
          return {
            matches: Ue,
            pendingActionResult: [gt.id, { type: "error", error: ve.error }],
          };
        }
        let Ae = Vn(ve.partialMatches).route.id;
        return {
          matches: ve.partialMatches,
          pendingActionResult: [Ae, { type: "error", error: ve.error }],
        };
      } else if (ve.matches) W = ve.matches;
      else {
        let { notFoundMatches: Ae, error: Ue, route: gt } = sr(A.pathname);
        return {
          matches: Ae,
          pendingActionResult: [gt.id, { type: "error", error: Ue }],
        };
      }
    }
    let de,
      Ne = Mo(W, A);
    if (!Ne.route.action && !Ne.route.lazy)
      de = {
        type: "error",
        error: kr(405, {
          method: E.method,
          pathname: A.pathname,
          routeId: Ne.route.id,
        }),
      };
    else {
      let ve = ui(l, c, E, W, Ne, _e ? [] : i, J),
        Ae = await Fr(E, ve, J, null);
      if (((de = Ae[Ne.route.id]), !de)) {
        for (let Ue of W)
          if (Ae[Ue.route.id]) {
            de = Ae[Ue.route.id];
            break;
          }
      }
      if (E.signal.aborted) return { shortCircuited: !0 };
    }
    if (_s(de)) {
      let ve;
      return (
        ie && ie.replace != null
          ? (ve = ie.replace)
          : (ve =
              Cf(
                de.response.headers.get("Location"),
                new URL(E.url),
                m,
                r.history
              ) ===
              I.location.pathname + I.location.search),
        await pr(E, de, !0, { submission: $, replace: ve }),
        { shortCircuited: !0 }
      );
    }
    if (hr(de)) {
      let ve = Vn(W, Ne.route.id);
      return (
        (ie && ie.replace) !== !0 && (Z = "PUSH"),
        { matches: W, pendingActionResult: [ve.route.id, de, Ne.route.id] }
      );
    }
    return { matches: W, pendingActionResult: [Ne.route.id, de] };
  }
  async function Qn(E, A, $, W, J, ge, _e, ie, ue, de, Ne, ve, Ae) {
    let Ue = ge || zu(A, _e),
      gt = _e || ie || Af(Ue),
      ft = !De && !de;
    if (J) {
      if (ft) {
        let Ge = Dt(ve);
        at(
          { navigation: Ue, ...(Ge !== void 0 ? { actionData: Ge } : {}) },
          { flushSync: Ne }
        );
      }
      let Fe = await ir($, A.pathname, E.signal);
      if (Fe.type === "aborted") return { shortCircuited: !0 };
      if (Fe.type === "error") {
        if (Fe.partialMatches.length === 0) {
          let { matches: _n, route: an } = Eo(h);
          return { matches: _n, loaderData: {}, errors: { [an.id]: Fe.error } };
        }
        let Ge = Vn(Fe.partialMatches).route.id;
        return {
          matches: Fe.partialMatches,
          loaderData: {},
          errors: { [Ge]: Fe.error },
        };
      } else if (Fe.matches) $ = Fe.matches;
      else {
        let { error: Ge, notFoundMatches: _n, route: an } = sr(A.pathname);
        return { matches: _n, loaderData: {}, errors: { [an.id]: Ge } };
      }
    }
    let Et = f || h,
      { dsMatches: He, revalidatingFetchers: Yt } = _f(
        E,
        W,
        l,
        c,
        r.history,
        I,
        $,
        gt,
        A,
        de ? [] : i,
        de === !0,
        ee,
        me,
        xe,
        re,
        z,
        Et,
        m,
        r.patchRoutesOnNavigation != null,
        ve,
        Ae
      );
    if (
      ((Y = ++X),
      !r.dataStrategy &&
        !He.some((Fe) => Fe.shouldLoad) &&
        !He.some(
          (Fe) => Fe.route.middleware && Fe.route.middleware.length > 0
        ) &&
        Yt.length === 0)
    ) {
      let Fe = rn();
      return (
        rr(
          A,
          {
            matches: $,
            loaderData: {},
            errors: ve && hr(ve[1]) ? { [ve[0]]: ve[1].error } : null,
            ...Pf(ve),
            ...(Fe ? { fetchers: new Map(I.fetchers) } : {}),
          },
          { flushSync: Ne }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ft) {
      let Fe = {};
      if (!J) {
        Fe.navigation = Ue;
        let Ge = Dt(ve);
        Ge !== void 0 && (Fe.actionData = Ge);
      }
      (Yt.length > 0 && (Fe.fetchers = en(Yt)), at(Fe, { flushSync: Ne }));
    }
    Yt.forEach((Fe) => {
      (Kt(Fe.key), Fe.controller && B.set(Fe.key, Fe.controller));
    });
    let qe = () => Yt.forEach((Fe) => Kt(Fe.key));
    ke && ke.signal.addEventListener("abort", qe);
    let { loaderResults: es, fetcherResults: gr } = await zr(He, Yt, E, W);
    if (E.signal.aborted) return { shortCircuited: !0 };
    (ke && ke.signal.removeEventListener("abort", qe),
      Yt.forEach((Fe) => B.delete(Fe.key)));
    let ar = To(es);
    if (ar)
      return (
        await pr(E, ar.result, !0, { replace: ue }),
        { shortCircuited: !0 }
      );
    if (((ar = To(gr)), ar))
      return (
        z.add(ar.key),
        await pr(E, ar.result, !0, { replace: ue }),
        { shortCircuited: !0 }
      );
    let { loaderData: bn, errors: ts } = jf(I, $, es, ve, Yt, gr);
    de && I.errors && (ts = { ...I.errors, ...ts });
    let Vr = rn(),
      sn = xn(Y),
      Wt = Vr || sn || Yt.length > 0;
    return {
      matches: $,
      loaderData: bn,
      errors: ts,
      ...(Wt ? { fetchers: new Map(I.fetchers) } : {}),
    };
  }
  function Dt(E) {
    if (E && !hr(E[1])) return { [E[0]]: E[1].data };
    if (I.actionData)
      return Object.keys(I.actionData).length === 0 ? null : I.actionData;
  }
  function en(E) {
    return (
      E.forEach((A) => {
        let $ = I.fetchers.get(A.key),
          W = Ki(void 0, $ ? $.data : void 0);
        I.fetchers.set(A.key, W);
      }),
      new Map(I.fetchers)
    );
  }
  async function Ur(E, A, $, W) {
    Kt(E);
    let J = (W && W.flushSync) === !0,
      ge = f || h,
      _e = Zu(I.location, I.matches, m, $, A, W == null ? void 0 : W.relative),
      ie = Hn(ge, _e, m),
      ue = ht(ie, ge, _e);
    if ((ue.active && ue.matches && (ie = ue.matches), !ie)) {
      It(E, A, kr(404, { pathname: _e }), { flushSync: J });
      return;
    }
    let { path: de, submission: Ne, error: ve } = bf(!0, _e, W);
    if (ve) {
      It(E, A, ve, { flushSync: J });
      return;
    }
    let Ae = r.getContext ? await r.getContext() : new mf(),
      Ue = (W && W.preventScrollReset) === !0;
    if (Ne && Ft(Ne.formMethod)) {
      await bt(
        E,
        A,
        de,
        ie,
        Ae,
        ue.active,
        J,
        Ue,
        Ne,
        W && W.unstable_defaultShouldRevalidate
      );
      return;
    }
    (re.set(E, { routeId: A, path: de }),
      await Cr(E, A, de, ie, Ae, ue.active, J, Ue, Ne));
  }
  async function bt(E, A, $, W, J, ge, _e, ie, ue, de) {
    (tn(), re.delete(E));
    let Ne = I.fetchers.get(E);
    jt(E, Tv(ue, Ne), { flushSync: _e });
    let ve = new AbortController(),
      Ae = ni(r.history, $, ve.signal, ue);
    if (ge) {
      let et = await ir(W, new URL(Ae.url).pathname, Ae.signal, E);
      if (et.type === "aborted") return;
      if (et.type === "error") {
        It(E, A, et.error, { flushSync: _e });
        return;
      } else if (et.matches) W = et.matches;
      else {
        It(E, A, kr(404, { pathname: $ }), { flushSync: _e });
        return;
      }
    }
    let Ue = Mo(W, $);
    if (!Ue.route.action && !Ue.route.lazy) {
      let et = kr(405, { method: ue.formMethod, pathname: $, routeId: A });
      It(E, A, et, { flushSync: _e });
      return;
    }
    B.set(E, ve);
    let gt = X,
      ft = ui(l, c, Ae, W, Ue, i, J),
      Et = await Fr(Ae, ft, J, E),
      He = Et[Ue.route.id];
    if (!He) {
      for (let et of ft)
        if (Et[et.route.id]) {
          He = Et[et.route.id];
          break;
        }
    }
    if (Ae.signal.aborted) {
      B.get(E) === ve && B.delete(E);
      return;
    }
    if (xe.has(E)) {
      if (_s(He) || hr(He)) {
        jt(E, gn(void 0));
        return;
      }
    } else {
      if (_s(He))
        if ((B.delete(E), Y > gt)) {
          jt(E, gn(void 0));
          return;
        } else
          return (
            z.add(E),
            jt(E, Ki(ue)),
            pr(Ae, He, !1, { fetcherSubmission: ue, preventScrollReset: ie })
          );
      if (hr(He)) {
        It(E, A, He.error);
        return;
      }
    }
    let Yt = I.navigation.location || I.location,
      qe = ni(r.history, Yt, ve.signal),
      es = f || h,
      gr =
        I.navigation.state !== "idle"
          ? Hn(es, I.navigation.location, m)
          : I.matches;
    Me(gr, "Didn't find any matches after fetcher action");
    let ar = ++X;
    R.set(E, ar);
    let bn = Ki(ue, He.data);
    I.fetchers.set(E, bn);
    let { dsMatches: ts, revalidatingFetchers: Vr } = _f(
      qe,
      J,
      l,
      c,
      r.history,
      I,
      gr,
      ue,
      Yt,
      i,
      !1,
      ee,
      me,
      xe,
      re,
      z,
      es,
      m,
      r.patchRoutesOnNavigation != null,
      [Ue.route.id, He],
      de
    );
    (Vr.filter((et) => et.key !== E).forEach((et) => {
      let on = et.key,
        rs = I.fetchers.get(on),
        ns = Ki(void 0, rs ? rs.data : void 0);
      (I.fetchers.set(on, ns),
        Kt(on),
        et.controller && B.set(on, et.controller));
    }),
      at({ fetchers: new Map(I.fetchers) }));
    let sn = () => Vr.forEach((et) => Kt(et.key));
    ve.signal.addEventListener("abort", sn);
    let { loaderResults: Wt, fetcherResults: Fe } = await zr(ts, Vr, qe, J);
    if (ve.signal.aborted) return;
    if (
      (ve.signal.removeEventListener("abort", sn),
      R.delete(E),
      B.delete(E),
      Vr.forEach((et) => B.delete(et.key)),
      I.fetchers.has(E))
    ) {
      let et = gn(He.data);
      I.fetchers.set(E, et);
    }
    let Ge = To(Wt);
    if (Ge) return pr(qe, Ge.result, !1, { preventScrollReset: ie });
    if (((Ge = To(Fe)), Ge))
      return (z.add(Ge.key), pr(qe, Ge.result, !1, { preventScrollReset: ie }));
    let { loaderData: _n, errors: an } = jf(I, gr, Wt, void 0, Vr, Fe);
    (xn(ar),
      I.navigation.state === "loading" && ar > Y
        ? (Me(Z, "Expected pending action"),
          ke && ke.abort(),
          rr(I.navigation.location, {
            matches: gr,
            loaderData: _n,
            errors: an,
            fetchers: new Map(I.fetchers),
          }))
        : (at({
            errors: an,
            loaderData: Nf(I.loaderData, _n, gr, an),
            fetchers: new Map(I.fetchers),
          }),
          (ee = !1)));
  }
  async function Cr(E, A, $, W, J, ge, _e, ie, ue) {
    let de = I.fetchers.get(E);
    jt(E, Ki(ue, de ? de.data : void 0), { flushSync: _e });
    let Ne = new AbortController(),
      ve = ni(r.history, $, Ne.signal);
    if (ge) {
      let He = await ir(W, new URL(ve.url).pathname, ve.signal, E);
      if (He.type === "aborted") return;
      if (He.type === "error") {
        It(E, A, He.error, { flushSync: _e });
        return;
      } else if (He.matches) W = He.matches;
      else {
        It(E, A, kr(404, { pathname: $ }), { flushSync: _e });
        return;
      }
    }
    let Ae = Mo(W, $);
    B.set(E, Ne);
    let Ue = X,
      gt = ui(l, c, ve, W, Ae, i, J),
      Et = (await Fr(ve, gt, J, E))[Ae.route.id];
    if ((B.get(E) === Ne && B.delete(E), !ve.signal.aborted)) {
      if (xe.has(E)) {
        jt(E, gn(void 0));
        return;
      }
      if (_s(Et))
        if (Y > Ue) {
          jt(E, gn(void 0));
          return;
        } else {
          (z.add(E), await pr(ve, Et, !1, { preventScrollReset: ie }));
          return;
        }
      if (hr(Et)) {
        It(E, A, Et.error);
        return;
      }
      jt(E, gn(Et.data));
    }
  }
  async function pr(
    E,
    A,
    $,
    {
      submission: W,
      fetcherSubmission: J,
      preventScrollReset: ge,
      replace: _e,
    } = {}
  ) {
    ($ || (ne == null || ne.resolve(), (ne = null)),
      A.response.headers.has("X-Remix-Revalidate") && (ee = !0));
    let ie = A.response.headers.get("Location");
    (Me(ie, "Expected a Location header on the redirect Response"),
      (ie = Cf(ie, new URL(E.url), m, r.history)));
    let ue = ia(I.location, ie, { _isRedirect: !0 });
    if (s) {
      let gt = !1;
      if (A.response.headers.has("X-Remix-Reload-Document")) gt = !0;
      else if (gc(ie)) {
        const ft = kp(ie, !0);
        gt = ft.origin !== e.location.origin || Sr(ft.pathname, m) == null;
      }
      if (gt) {
        _e ? e.location.replace(ie) : e.location.assign(ie);
        return;
      }
    }
    ke = null;
    let de =
        _e === !0 || A.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Ne, formAction: ve, formEncType: Ae } = I.navigation;
    !W && !J && Ne && ve && Ae && (W = Af(I.navigation));
    let Ue = W || J;
    if (tv.has(A.response.status) && Ue && Ft(Ue.formMethod))
      await nr(de, ue, {
        submission: { ...Ue, formAction: ie },
        preventScrollReset: ge || fe,
        enableViewTransition: $ ? Pe : void 0,
      });
    else {
      let gt = zu(ue, W);
      await nr(de, ue, {
        overrideNavigation: gt,
        fetcherSubmission: J,
        preventScrollReset: ge || fe,
        enableViewTransition: $ ? Pe : void 0,
      });
    }
  }
  async function Fr(E, A, $, W) {
    var _e;
    let J,
      ge = {};
    try {
      J = await dv(v, E, A, W, $, !1);
    } catch (ie) {
      return (
        A.filter((ue) => ue.shouldLoad).forEach((ue) => {
          ge[ue.route.id] = { type: "error", error: ie };
        }),
        ge
      );
    }
    if (E.signal.aborted) return ge;
    if (!Ft(E.method))
      for (let ie of A) {
        if (((_e = J[ie.route.id]) == null ? void 0 : _e.type) === "error")
          break;
        !J.hasOwnProperty(ie.route.id) &&
          !I.loaderData.hasOwnProperty(ie.route.id) &&
          (!I.errors || !I.errors.hasOwnProperty(ie.route.id)) &&
          ie.shouldCallHandler() &&
          (J[ie.route.id] = {
            type: "error",
            result: new Error(
              `No result returned from dataStrategy for route ${ie.route.id}`
            ),
          });
      }
    for (let [ie, ue] of Object.entries(J))
      if (bv(ue)) {
        let de = ue.result;
        ge[ie] = { type: "redirect", response: mv(de, E, ie, A, m) };
      } else ge[ie] = await pv(ue);
    return ge;
  }
  async function zr(E, A, $, W) {
    let J = Fr($, E, W, null),
      ge = Promise.all(
        A.map(async (ue) => {
          if (ue.matches && ue.match && ue.request && ue.controller) {
            let Ne = (await Fr(ue.request, ue.matches, W, ue.key))[
              ue.match.route.id
            ];
            return { [ue.key]: Ne };
          } else
            return Promise.resolve({
              [ue.key]: {
                type: "error",
                error: kr(404, { pathname: ue.path }),
              },
            });
        })
      ),
      _e = await J,
      ie = (await ge).reduce((ue, de) => Object.assign(ue, de), {});
    return { loaderResults: _e, fetcherResults: ie };
  }
  function tn() {
    ((ee = !0),
      re.forEach((E, A) => {
        (B.has(A) && me.add(A), Kt(A));
      }));
  }
  function jt(E, A, $ = {}) {
    (I.fetchers.set(E, A),
      at(
        { fetchers: new Map(I.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 }
      ));
  }
  function It(E, A, $, W = {}) {
    let J = Vn(I.matches, A);
    (mr(E),
      at(
        { errors: { [J.route.id]: $ }, fetchers: new Map(I.fetchers) },
        { flushSync: (W && W.flushSync) === !0 }
      ));
  }
  function zt(E) {
    return (
      le.set(E, (le.get(E) || 0) + 1),
      xe.has(E) && xe.delete(E),
      I.fetchers.get(E) || rv
    );
  }
  function Br(E, A) {
    (Kt(E, A == null ? void 0 : A.reason), jt(E, gn(null)));
  }
  function mr(E) {
    let A = I.fetchers.get(E);
    (B.has(E) && !(A && A.state === "loading" && R.has(E)) && Kt(E),
      re.delete(E),
      R.delete(E),
      z.delete(E),
      xe.delete(E),
      me.delete(E),
      I.fetchers.delete(E));
  }
  function Cs(E) {
    let A = (le.get(E) || 0) - 1;
    (A <= 0 ? (le.delete(E), xe.add(E)) : le.set(E, A),
      at({ fetchers: new Map(I.fetchers) }));
  }
  function Kt(E, A) {
    let $ = B.get(E);
    $ && ($.abort(A), B.delete(E));
  }
  function Xn(E) {
    for (let A of E) {
      let $ = zt(A),
        W = gn($.data);
      I.fetchers.set(A, W);
    }
  }
  function rn() {
    let E = [],
      A = !1;
    for (let $ of z) {
      let W = I.fetchers.get($);
      (Me(W, `Expected fetcher: ${$}`),
        W.state === "loading" && (z.delete($), E.push($), (A = !0)));
    }
    return (Xn(E), A);
  }
  function xn(E) {
    let A = [];
    for (let [$, W] of R)
      if (W < E) {
        let J = I.fetchers.get($);
        (Me(J, `Expected fetcher: ${$}`),
          J.state === "loading" && (Kt($), R.delete($), A.push($)));
      }
    return (Xn(A), A.length > 0);
  }
  function nn(E, A) {
    let $ = I.blockers.get(E) || qi;
    return (ae.get(E) !== A && ae.set(E, A), $);
  }
  function Bt(E) {
    (I.blockers.delete(E), ae.delete(E));
  }
  function Wr(E, A) {
    let $ = I.blockers.get(E) || qi;
    Me(
      ($.state === "unblocked" && A.state === "blocked") ||
        ($.state === "blocked" && A.state === "blocked") ||
        ($.state === "blocked" && A.state === "proceeding") ||
        ($.state === "blocked" && A.state === "unblocked") ||
        ($.state === "proceeding" && A.state === "unblocked"),
      `Invalid blocker state transition: ${$.state} -> ${A.state}`
    );
    let W = new Map(I.blockers);
    (W.set(E, A), at({ blockers: W }));
  }
  function Rr({ currentLocation: E, nextLocation: A, historyAction: $ }) {
    if (ae.size === 0) return;
    ae.size > 1 && wt(!1, "A router only supports one blocker at a time");
    let W = Array.from(ae.entries()),
      [J, ge] = W[W.length - 1],
      _e = I.blockers.get(J);
    if (
      !(_e && _e.state === "proceeding") &&
      ge({ currentLocation: E, nextLocation: A, historyAction: $ })
    )
      return J;
  }
  function sr(E) {
    let A = kr(404, { pathname: E }),
      $ = f || h,
      { matches: W, route: J } = Eo($);
    return { notFoundMatches: W, route: J, error: A };
  }
  function Zn(E, A, $) {
    if (((_ = E), (k = A), (j = $ || null), !P && I.navigation === Fu)) {
      P = !0;
      let W = ot(I.location, I.matches);
      W != null && at({ restoreScrollPosition: W });
    }
    return () => {
      ((_ = null), (k = null), (j = null));
    };
  }
  function je(E, A) {
    return (
      (j &&
        j(
          E,
          A.map((W) => Ry(W, I.loaderData))
        )) ||
      E.key
    );
  }
  function rt(E, A) {
    if (_ && k) {
      let $ = je(E, A);
      _[$] = k();
    }
  }
  function ot(E, A) {
    if (_) {
      let $ = je(E, A),
        W = _[$];
      if (typeof W == "number") return W;
    }
    return null;
  }
  function ht(E, A, $) {
    if (r.patchRoutesOnNavigation)
      if (E) {
        if (Object.keys(E[0].params).length > 0)
          return { active: !0, matches: ea(A, $, m, !0) };
      } else return { active: !0, matches: ea(A, $, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ir(E, A, $, W) {
    if (!r.patchRoutesOnNavigation) return { type: "success", matches: E };
    let J = E;
    for (;;) {
      let ge = f == null,
        _e = f || h,
        ie = c;
      try {
        await r.patchRoutesOnNavigation({
          signal: $,
          path: A,
          matches: J,
          fetcherKey: W,
          patch: (Ne, ve) => {
            $.aborted || kf(Ne, ve, _e, ie, l, !1);
          },
        });
      } catch (Ne) {
        return { type: "error", error: Ne, partialMatches: J };
      } finally {
        ge && !$.aborted && (h = [...h]);
      }
      if ($.aborted) return { type: "aborted" };
      let ue = Hn(_e, A, m),
        de = null;
      if (ue) {
        if (Object.keys(ue[0].params).length === 0)
          return { type: "success", matches: ue };
        if (
          ((de = ea(_e, A, m, !0)),
          !(de && J.length < de.length && nt(J, de.slice(0, J.length))))
        )
          return { type: "success", matches: ue };
      }
      if ((de || (de = ea(_e, A, m, !0)), !de || nt(J, de)))
        return { type: "success", matches: null };
      J = de;
    }
  }
  function nt(E, A) {
    return (
      E.length === A.length && E.every(($, W) => $.route.id === A[W].route.id)
    );
  }
  function mt(E) {
    ((c = {}), (f = aa(E, l, void 0, c)));
  }
  function Hr(E, A, $ = !1) {
    let W = f == null;
    (kf(E, A, f || h, c, l, $), W && ((h = [...h]), at({})));
  }
  return (
    (Q = {
      get basename() {
        return m;
      },
      get future() {
        return g;
      },
      get state() {
        return I;
      },
      get routes() {
        return h;
      },
      get window() {
        return e;
      },
      initialize: Be,
      subscribe: wn,
      enableScrollRestoration: Zn,
      navigate: $r,
      fetch: Ur,
      revalidate: Ts,
      createHref: (E) => r.history.createHref(E),
      encodeLocation: (E) => r.history.encodeLocation(E),
      getFetcher: zt,
      resetFetcher: Br,
      deleteFetcher: Cs,
      dispose: dt,
      getBlocker: nn,
      deleteBlocker: Bt,
      patchRoutes: Hr,
      _internalFetchControllers: B,
      _internalSetRoutes: mt,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(E) {
        at(E);
      },
    }),
    r.unstable_instrumentations &&
      (Q = Ky(
        Q,
        r.unstable_instrumentations.map((E) => E.router).filter(Boolean)
      )),
    Q
  );
}
function iv(r) {
  return (
    r != null &&
    (("formData" in r && r.formData != null) ||
      ("body" in r && r.body !== void 0))
  );
}
function Zu(r, e, s, i, o, l) {
  let c, h;
  if (o) {
    c = [];
    for (let m of e)
      if ((c.push(m), m.route.id === o)) {
        h = m;
        break;
      }
  } else ((c = e), (h = e[e.length - 1]));
  let f = vc(i || ".", yc(c), Sr(r.pathname, s) || r.pathname, l === "path");
  if (
    (i == null && ((f.search = r.search), (f.hash = r.hash)),
    (i == null || i === "" || i === ".") && h)
  ) {
    let m = bc(f.search);
    if (h.route.index && !m)
      f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && m) {
      let v = new URLSearchParams(f.search),
        g = v.getAll("index");
      (v.delete("index"),
        g.filter((x) => x).forEach((x) => v.append("index", x)));
      let b = v.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (
    s !== "/" && (f.pathname = zy({ basename: s, pathname: f.pathname })),
    Xr(f)
  );
}
function bf(r, e, s) {
  if (!s || !iv(s)) return { path: e };
  if (s.formMethod && !Sv(s.formMethod))
    return { path: e, error: kr(405, { method: s.formMethod }) };
  let i = () => ({ path: e, error: kr(400, { type: "invalid-body" }) }),
    l = (s.formMethod || "get").toUpperCase(),
    c = Fp(e);
  if (s.body !== void 0) {
    if (s.formEncType === "text/plain") {
      if (!Ft(l)) return i();
      let g =
        typeof s.body == "string"
          ? s.body
          : s.body instanceof FormData || s.body instanceof URLSearchParams
            ? Array.from(s.body.entries()).reduce(
                (b, [x, _]) => `${b}${x}=${_}
`,
                ""
              )
            : String(s.body);
      return {
        path: e,
        submission: {
          formMethod: l,
          formAction: c,
          formEncType: s.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (s.formEncType === "application/json") {
      if (!Ft(l)) return i();
      try {
        let g = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
        return {
          path: e,
          submission: {
            formMethod: l,
            formAction: c,
            formEncType: s.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Me(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let h, f;
  if (s.formData) ((h = rc(s.formData)), (f = s.formData));
  else if (s.body instanceof FormData) ((h = rc(s.body)), (f = s.body));
  else if (s.body instanceof URLSearchParams) ((h = s.body), (f = Rf(h)));
  else if (s.body == null) ((h = new URLSearchParams()), (f = new FormData()));
  else
    try {
      ((h = new URLSearchParams(s.body)), (f = Rf(h)));
    } catch {
      return i();
    }
  let m = {
    formMethod: l,
    formAction: c,
    formEncType: (s && s.formEncType) || "application/x-www-form-urlencoded",
    formData: f,
    json: void 0,
    text: void 0,
  };
  if (Ft(m.formMethod)) return { path: e, submission: m };
  let v = Gn(e);
  return (
    r && v.search && bc(v.search) && h.append("index", ""),
    (v.search = `?${h}`),
    { path: Xr(v), submission: m }
  );
}
function _f(r, e, s, i, o, l, c, h, f, m, v, g, b, x, _, j, k, P, T, O, F) {
  var De;
  let q = O ? (hr(O[1]) ? O[1].error : O[1].data) : void 0,
    Q = o.createURL(l.location),
    I = o.createURL(f),
    Z;
  if (v && l.errors) {
    let ee = Object.keys(l.errors)[0];
    Z = c.findIndex((me) => me.route.id === ee);
  } else if (O && hr(O[1])) {
    let ee = O[0];
    Z = c.findIndex((me) => me.route.id === ee) - 1;
  }
  let ne = O ? O[1].statusCode : void 0,
    fe = ne && ne >= 400,
    ke = {
      currentUrl: Q,
      currentParams: ((De = l.matches[0]) == null ? void 0 : De.params) || {},
      nextUrl: I,
      nextParams: c[0].params,
      ...h,
      actionResult: q,
      actionStatus: ne,
    },
    Pe = ya(c),
    pe = c.map((ee, me) => {
      let { route: B } = ee,
        X = null;
      if (
        (Z != null && me > Z
          ? (X = !1)
          : B.lazy
            ? (X = !0)
            : wc(B)
              ? v
                ? (X = ec(B, l.loaderData, l.errors))
                : av(l.loaderData, l.matches[me], ee) && (X = !0)
              : (X = !1),
        X !== null)
      )
        return tc(s, i, r, Pe, ee, m, e, X);
      let Y = !1;
      typeof F == "boolean"
        ? (Y = F)
        : fe
          ? (Y = !1)
          : (g ||
              Q.pathname + Q.search === I.pathname + I.search ||
              Q.search !== I.search ||
              ov(l.matches[me], ee)) &&
            (Y = !0);
      let R = { ...ke, defaultShouldRevalidate: Y },
        z = ra(ee, R);
      return tc(s, i, r, Pe, ee, m, e, z, R, F);
    }),
    be = [];
  return (
    _.forEach((ee, me) => {
      if (v || !c.some((xe) => xe.route.id === ee.routeId) || x.has(me)) return;
      let B = l.fetchers.get(me),
        X = B && B.state !== "idle" && B.data === void 0,
        Y = Hn(k, ee.path, P);
      if (!Y) {
        if (T && X) return;
        be.push({
          key: me,
          routeId: ee.routeId,
          path: ee.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (j.has(me)) return;
      let R = Mo(Y, ee.path),
        z = new AbortController(),
        re = ni(o, ee.path, z.signal),
        le = null;
      if (b.has(me)) (b.delete(me), (le = ui(s, i, re, Y, R, m, e)));
      else if (X) g && (le = ui(s, i, re, Y, R, m, e));
      else {
        let xe;
        typeof F == "boolean" ? (xe = F) : fe ? (xe = !1) : (xe = g);
        let ae = { ...ke, defaultShouldRevalidate: xe };
        ra(R, ae) && (le = ui(s, i, re, Y, R, m, e, ae));
      }
      le &&
        be.push({
          key: me,
          routeId: ee.routeId,
          path: ee.path,
          matches: le,
          match: R,
          request: re,
          controller: z,
        });
    }),
    { dsMatches: pe, revalidatingFetchers: be }
  );
}
function wc(r) {
  return r.loader != null || (r.middleware != null && r.middleware.length > 0);
}
function ec(r, e, s) {
  if (r.lazy) return !0;
  if (!wc(r)) return !1;
  let i = e != null && r.id in e,
    o = s != null && s[r.id] !== void 0;
  return !i && o
    ? !1
    : typeof r.loader == "function" && r.loader.hydrate === !0
      ? !0
      : !i && !o;
}
function av(r, e, s) {
  let i = !e || s.route.id !== e.route.id,
    o = !r.hasOwnProperty(s.route.id);
  return i || o;
}
function ov(r, e) {
  let s = r.route.path;
  return (
    r.pathname !== e.pathname ||
    (s != null && s.endsWith("*") && r.params["*"] !== e.params["*"])
  );
}
function ra(r, e) {
  if (r.route.shouldRevalidate) {
    let s = r.route.shouldRevalidate(e);
    if (typeof s == "boolean") return s;
  }
  return e.defaultShouldRevalidate;
}
function kf(r, e, s, i, o, l) {
  let c;
  if (r) {
    let m = i[r];
    (Me(m, `No route found to patch children into: routeId = ${r}`),
      m.children || (m.children = []),
      (c = m.children));
  } else c = s;
  let h = [],
    f = [];
  if (
    (e.forEach((m) => {
      let v = c.find((g) => Ip(m, g));
      v ? f.push({ existingRoute: v, newRoute: m }) : h.push(m);
    }),
    h.length > 0)
  ) {
    let m = aa(
      h,
      o,
      [r || "_", "patch", String((c == null ? void 0 : c.length) || "0")],
      i
    );
    c.push(...m);
  }
  if (l && f.length > 0)
    for (let m = 0; m < f.length; m++) {
      let { existingRoute: v, newRoute: g } = f[m],
        b = v,
        [x] = aa([g], o, [], {}, !0);
      Object.assign(b, {
        element: x.element ? x.element : b.element,
        errorElement: x.errorElement ? x.errorElement : b.errorElement,
        hydrateFallbackElement: x.hydrateFallbackElement
          ? x.hydrateFallbackElement
          : b.hydrateFallbackElement,
      });
    }
}
function Ip(r, e) {
  return "id" in r && "id" in e && r.id === e.id
    ? !0
    : r.index === e.index &&
        r.path === e.path &&
        r.caseSensitive === e.caseSensitive
      ? (!r.children || r.children.length === 0) &&
        (!e.children || e.children.length === 0)
        ? !0
        : r.children.every((s, i) => {
            var o;
            return (o = e.children) == null ? void 0 : o.some((l) => Ip(s, l));
          })
      : !1;
}
var Sf = new WeakMap(),
  Lp = ({ key: r, route: e, manifest: s, mapRouteProperties: i }) => {
    let o = s[e.id];
    if (
      (Me(o, "No route found in manifest"),
      !o.lazy || typeof o.lazy != "object")
    )
      return;
    let l = o.lazy[r];
    if (!l) return;
    let c = Sf.get(o);
    c || ((c = {}), Sf.set(o, c));
    let h = c[r];
    if (h) return h;
    let f = (async () => {
      let m = Sy(r),
        g = o[r] !== void 0 && r !== "hasErrorBoundary";
      if (m)
        (wt(
          !m,
          "Route property " +
            r +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (c[r] = Promise.resolve()));
      else if (g)
        wt(
          !1,
          `Route "${o.id}" has a static property "${r}" defined. The lazy property will be ignored.`
        );
      else {
        let b = await l();
        b != null && (Object.assign(o, { [r]: b }), Object.assign(o, i(o)));
      }
      typeof o.lazy == "object" &&
        ((o.lazy[r] = void 0),
        Object.values(o.lazy).every((b) => b === void 0) && (o.lazy = void 0));
    })();
    return ((c[r] = f), f);
  },
  Ef = new WeakMap();
function lv(r, e, s, i, o) {
  let l = s[r.id];
  if ((Me(l, "No route found in manifest"), !r.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof r.lazy == "function") {
    let v = Ef.get(l);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let g = (async () => {
      Me(typeof r.lazy == "function", "No lazy route function found");
      let b = await r.lazy(),
        x = {};
      for (let _ in b) {
        let j = b[_];
        if (j === void 0) continue;
        let k = Ty(_),
          T = l[_] !== void 0 && _ !== "hasErrorBoundary";
        k
          ? wt(
              !k,
              "Route property " +
                _ +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : T
            ? wt(
                !T,
                `Route "${l.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`
              )
            : (x[_] = j);
      }
      (Object.assign(l, x), Object.assign(l, { ...i(l), lazy: void 0 }));
    })();
    return (
      Ef.set(l, g),
      g.catch(() => {}),
      { lazyRoutePromise: g, lazyHandlerPromise: g }
    );
  }
  let c = Object.keys(r.lazy),
    h = [],
    f;
  for (let v of c) {
    if (o && o.includes(v)) continue;
    let g = Lp({ key: v, route: r, manifest: s, mapRouteProperties: i });
    g && (h.push(g), v === e && (f = g));
  }
  let m = h.length > 0 ? Promise.all(h).then(() => {}) : void 0;
  return (
    m == null || m.catch(() => {}),
    f == null || f.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: f }
  );
}
async function Tf(r) {
  let e = r.matches.filter((o) => o.shouldLoad),
    s = {};
  return (
    (await Promise.all(e.map((o) => o.resolve()))).forEach((o, l) => {
      s[e[l].route.id] = o;
    }),
    s
  );
}
async function uv(r) {
  return r.matches.some((e) => e.route.middleware) ? Mp(r, () => Tf(r)) : Tf(r);
}
function Mp(r, e) {
  return cv(
    r,
    e,
    (i) => {
      if (kv(i)) throw i;
      return i;
    },
    wv,
    s
  );
  function s(i, o, l) {
    if (l)
      return Promise.resolve(
        Object.assign(l.value, { [o]: { type: "error", result: i } })
      );
    {
      let { matches: c } = r,
        h = Math.min(
          Math.max(
            c.findIndex((m) => m.route.id === o),
            0
          ),
          Math.max(
            c.findIndex((m) => m.shouldCallHandler()),
            0
          )
        ),
        f = Vn(c, c[h].route.id).route.id;
      return Promise.resolve({ [f]: { type: "error", result: i } });
    }
  }
}
async function cv(r, e, s, i, o) {
  let {
      matches: l,
      request: c,
      params: h,
      context: f,
      unstable_pattern: m,
    } = r,
    v = l.flatMap((b) =>
      b.route.middleware ? b.route.middleware.map((x) => [b.route.id, x]) : []
    );
  return await $p(
    { request: c, params: h, context: f, unstable_pattern: m },
    v,
    e,
    s,
    i,
    o
  );
}
async function $p(r, e, s, i, o, l, c = 0) {
  let { request: h } = r;
  if (h.signal.aborted)
    throw h.signal.reason ?? new Error(`Request aborted: ${h.method} ${h.url}`);
  let f = e[c];
  if (!f) return await s();
  let [m, v] = f,
    g,
    b = async () => {
      if (g) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((g = { value: await $p(r, e, s, i, o, l, c + 1) }), g.value);
      } catch (x) {
        return ((g = { value: await l(x, m, g) }), g.value);
      }
    };
  try {
    let x = await v(r, b),
      _ = x != null ? i(x) : void 0;
    return o(_)
      ? _
      : g
        ? (_ ?? g.value)
        : ((g = { value: await b() }), g.value);
  } catch (x) {
    return await l(x, m, g);
  }
}
function Up(r, e, s, i, o) {
  let l = Lp({
      key: "middleware",
      route: i.route,
      manifest: e,
      mapRouteProperties: r,
    }),
    c = lv(i.route, Ft(s.method) ? "action" : "loader", e, r, o);
  return {
    middleware: l,
    route: c.lazyRoutePromise,
    handler: c.lazyHandlerPromise,
  };
}
function tc(r, e, s, i, o, l, c, h, f = null, m) {
  let v = !1,
    g = Up(r, e, s, o, l);
  return {
    ...o,
    _lazyPromises: g,
    shouldLoad: h,
    shouldRevalidateArgs: f,
    shouldCallHandler(b) {
      return (
        (v = !0),
        f
          ? typeof m == "boolean"
            ? ra(o, { ...f, defaultShouldRevalidate: m })
            : typeof b == "boolean"
              ? ra(o, { ...f, defaultShouldRevalidate: b })
              : ra(o, f)
          : h
      );
    },
    resolve(b) {
      let { lazy: x, loader: _, middleware: j } = o.route,
        k = v || h || (b && !Ft(s.method) && (x || _)),
        P = j && j.length > 0 && !_ && !x;
      return k && (Ft(s.method) || !P)
        ? hv({
            request: s,
            unstable_pattern: i,
            match: o,
            lazyHandlerPromise: g == null ? void 0 : g.handler,
            lazyRoutePromise: g == null ? void 0 : g.route,
            handlerOverride: b,
            scopedContext: c,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function ui(r, e, s, i, o, l, c, h = null) {
  return i.map((f) =>
    f.route.id !== o.route.id
      ? {
          ...f,
          shouldLoad: !1,
          shouldRevalidateArgs: h,
          shouldCallHandler: () => !1,
          _lazyPromises: Up(r, e, s, f, l),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : tc(r, e, s, ya(i), f, l, c, !0, h)
  );
}
async function dv(r, e, s, i, o, l) {
  s.some((m) => {
    var v;
    return (v = m._lazyPromises) == null ? void 0 : v.middleware;
  }) &&
    (await Promise.all(
      s.map((m) => {
        var v;
        return (v = m._lazyPromises) == null ? void 0 : v.middleware;
      })
    ));
  let c = {
      request: e,
      unstable_pattern: ya(s),
      params: s[0].params,
      context: o,
      matches: s,
    },
    f = await r({
      ...c,
      fetcherKey: i,
      runClientMiddleware: (m) => {
        let v = c;
        return Mp(v, () =>
          m({
            ...v,
            fetcherKey: i,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
              );
            },
          })
        );
      },
    });
  try {
    await Promise.all(
      s.flatMap((m) => {
        var v, g;
        return [
          (v = m._lazyPromises) == null ? void 0 : v.handler,
          (g = m._lazyPromises) == null ? void 0 : g.route,
        ];
      })
    );
  } catch {}
  return f;
}
async function hv({
  request: r,
  unstable_pattern: e,
  match: s,
  lazyHandlerPromise: i,
  lazyRoutePromise: o,
  handlerOverride: l,
  scopedContext: c,
}) {
  let h,
    f,
    m = Ft(r.method),
    v = m ? "action" : "loader",
    g = (b) => {
      let x,
        _ = new Promise((P, T) => (x = T));
      ((f = () => x()), r.signal.addEventListener("abort", f));
      let j = (P) =>
          typeof b != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${s.route.id}]`
                )
              )
            : b(
                {
                  request: r,
                  unstable_pattern: e,
                  params: s.params,
                  context: c,
                },
                ...(P !== void 0 ? [P] : [])
              ),
        k = (async () => {
          try {
            return { type: "data", result: await (l ? l((T) => j(T)) : j()) };
          } catch (P) {
            return { type: "error", result: P };
          }
        })();
      return Promise.race([k, _]);
    };
  try {
    let b = m ? s.route.action : s.route.loader;
    if (i || o)
      if (b) {
        let x,
          [_] = await Promise.all([
            g(b).catch((j) => {
              x = j;
            }),
            i,
            o,
          ]);
        if (x !== void 0) throw x;
        h = _;
      } else {
        await i;
        let x = m ? s.route.action : s.route.loader;
        if (x) [h] = await Promise.all([g(x), o]);
        else if (v === "action") {
          let _ = new URL(r.url),
            j = _.pathname + _.search;
          throw kr(405, { method: r.method, pathname: j, routeId: s.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (b) h = await g(b);
    else {
      let x = new URL(r.url),
        _ = x.pathname + x.search;
      throw kr(404, { pathname: _ });
    }
  } catch (b) {
    return { type: "error", result: b };
  } finally {
    f && r.signal.removeEventListener("abort", f);
  }
  return h;
}
async function fv(r) {
  let e = r.headers.get("Content-Type");
  return e && /\bapplication\/json\b/.test(e)
    ? r.body == null
      ? null
      : r.json()
    : r.text();
}
async function pv(r) {
  var i, o, l, c, h;
  let { result: e, type: s } = r;
  if (xc(e)) {
    let f;
    try {
      f = await fv(e);
    } catch (m) {
      return { type: "error", error: m };
    }
    return s === "error"
      ? {
          type: "error",
          error: new ga(e.status, e.statusText, f),
          statusCode: e.status,
          headers: e.headers,
        }
      : { type: "data", data: f, statusCode: e.status, headers: e.headers };
  }
  return s === "error"
    ? Of(e)
      ? e.data instanceof Error
        ? {
            type: "error",
            error: e.data,
            statusCode: (i = e.init) == null ? void 0 : i.status,
            headers:
              (o = e.init) != null && o.headers
                ? new Headers(e.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: vv(e),
            statusCode: oa(e) ? e.status : void 0,
            headers:
              (l = e.init) != null && l.headers
                ? new Headers(e.init.headers)
                : void 0,
          }
      : { type: "error", error: e, statusCode: oa(e) ? e.status : void 0 }
    : Of(e)
      ? {
          type: "data",
          data: e.data,
          statusCode: (c = e.init) == null ? void 0 : c.status,
          headers:
            (h = e.init) != null && h.headers
              ? new Headers(e.init.headers)
              : void 0,
        }
      : { type: "data", data: e };
}
function mv(r, e, s, i, o) {
  let l = r.headers.get("Location");
  if (
    (Me(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !gc(l))
  ) {
    let c = i.slice(0, i.findIndex((h) => h.route.id === s) + 1);
    ((l = Zu(new URL(e.url), c, o, l)), r.headers.set("Location", l));
  }
  return r;
}
function Cf(r, e, s, i) {
  let o = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    "javascript:",
  ];
  if (gc(r)) {
    let l = r,
      c = l.startsWith("//") ? new URL(e.protocol + l) : new URL(l);
    if (o.includes(c.protocol)) throw new Error("Invalid redirect location");
    let h = Sr(c.pathname, s) != null;
    if (c.origin === e.origin && h) return c.pathname + c.search + c.hash;
  }
  try {
    let l = i.createURL(r);
    if (o.includes(l.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return r;
}
function ni(r, e, s, i) {
  let o = r.createURL(Fp(e)).toString(),
    l = { signal: s };
  if (i && Ft(i.formMethod)) {
    let { formMethod: c, formEncType: h } = i;
    ((l.method = c.toUpperCase()),
      h === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": h })),
          (l.body = JSON.stringify(i.json)))
        : h === "text/plain"
          ? (l.body = i.text)
          : h === "application/x-www-form-urlencoded" && i.formData
            ? (l.body = rc(i.formData))
            : (l.body = i.formData));
  }
  return new Request(o, l);
}
function rc(r) {
  let e = new URLSearchParams();
  for (let [s, i] of r.entries())
    e.append(s, typeof i == "string" ? i : i.name);
  return e;
}
function Rf(r) {
  let e = new FormData();
  for (let [s, i] of r.entries()) e.append(s, i);
  return e;
}
function gv(r, e, s, i = !1, o = !1) {
  let l = {},
    c = null,
    h,
    f = !1,
    m = {},
    v = s && hr(s[1]) ? s[1].error : void 0;
  return (
    r.forEach((g) => {
      if (!(g.route.id in e)) return;
      let b = g.route.id,
        x = e[b];
      if (
        (Me(!_s(x), "Cannot handle redirect results in processLoaderData"),
        hr(x))
      ) {
        let _ = x.error;
        if ((v !== void 0 && ((_ = v), (v = void 0)), (c = c || {}), o))
          c[b] = _;
        else {
          let j = Vn(r, b);
          c[j.route.id] == null && (c[j.route.id] = _);
        }
        (i || (l[b] = Dp),
          f || ((f = !0), (h = oa(x.error) ? x.error.status : 500)),
          x.headers && (m[b] = x.headers));
      } else
        ((l[b] = x.data),
          x.statusCode && x.statusCode !== 200 && !f && (h = x.statusCode),
          x.headers && (m[b] = x.headers));
    }),
    v !== void 0 && s && ((c = { [s[0]]: v }), s[2] && (l[s[2]] = void 0)),
    { loaderData: l, errors: c, statusCode: h || 200, loaderHeaders: m }
  );
}
function jf(r, e, s, i, o, l) {
  let { loaderData: c, errors: h } = gv(e, s, i);
  return (
    o
      .filter((f) => !f.matches || f.matches.some((m) => m.shouldLoad))
      .forEach((f) => {
        let { key: m, match: v, controller: g } = f;
        if (g && g.signal.aborted) return;
        let b = l[m];
        if ((Me(b, "Did not find corresponding fetcher result"), hr(b))) {
          let x = Vn(r.matches, v == null ? void 0 : v.route.id);
          ((h && h[x.route.id]) || (h = { ...h, [x.route.id]: b.error }),
            r.fetchers.delete(m));
        } else if (_s(b)) Me(!1, "Unhandled fetcher revalidation redirect");
        else {
          let x = gn(b.data);
          r.fetchers.set(m, x);
        }
      }),
    { loaderData: c, errors: h }
  );
}
function Nf(r, e, s, i) {
  let o = Object.entries(e)
    .filter(([, l]) => l !== Dp)
    .reduce((l, [c, h]) => ((l[c] = h), l), {});
  for (let l of s) {
    let c = l.route.id;
    if (
      (!e.hasOwnProperty(c) &&
        r.hasOwnProperty(c) &&
        l.route.loader &&
        (o[c] = r[c]),
      i && i.hasOwnProperty(c))
    )
      break;
  }
  return o;
}
function Pf(r) {
  return r
    ? hr(r[1])
      ? { actionData: {} }
      : { actionData: { [r[0]]: r[1].data } }
    : {};
}
function Vn(r, e) {
  return (
    (e ? r.slice(0, r.findIndex((i) => i.route.id === e) + 1) : [...r])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || r[0]
  );
}
function Eo(r) {
  let e =
    r.length === 1
      ? r[0]
      : r.find((s) => s.index || !s.path || s.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
    route: e,
  };
}
function kr(
  r,
  { pathname: e, routeId: s, method: i, type: o, message: l } = {}
) {
  let c = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    r === 400
      ? ((c = "Bad Request"),
        i && e && s
          ? (h = `You made a ${i} request to "${e}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`)
          : o === "invalid-body" && (h = "Unable to encode submission body"))
      : r === 403
        ? ((c = "Forbidden"), (h = `Route "${s}" does not match URL "${e}"`))
        : r === 404
          ? ((c = "Not Found"), (h = `No route matches URL "${e}"`))
          : r === 405 &&
            ((c = "Method Not Allowed"),
            i && e && s
              ? (h = `You made a ${i.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`)
              : i && (h = `Invalid request method "${i.toUpperCase()}"`)),
    new ga(r || 500, c, new Error(h), !0)
  );
}
function To(r) {
  let e = Object.entries(r);
  for (let s = e.length - 1; s >= 0; s--) {
    let [i, o] = e[s];
    if (_s(o)) return { key: i, result: o };
  }
}
function Fp(r) {
  let e = typeof r == "string" ? Gn(r) : r;
  return Xr({ ...e, hash: "" });
}
function yv(r, e) {
  return r.pathname !== e.pathname || r.search !== e.search
    ? !1
    : r.hash === ""
      ? e.hash !== ""
      : r.hash === e.hash
        ? !0
        : e.hash !== "";
}
function vv(r) {
  var e, s;
  return new ga(
    ((e = r.init) == null ? void 0 : e.status) ?? 500,
    ((s = r.init) == null ? void 0 : s.statusText) ?? "Internal Server Error",
    r.data
  );
}
function wv(r) {
  return (
    r != null &&
    typeof r == "object" &&
    Object.entries(r).every(([e, s]) => typeof e == "string" && xv(s))
  );
}
function xv(r) {
  return (
    r != null &&
    typeof r == "object" &&
    "type" in r &&
    "result" in r &&
    (r.type === "data" || r.type === "error")
  );
}
function bv(r) {
  return xc(r.result) && Op.has(r.result.status);
}
function hr(r) {
  return r.type === "error";
}
function _s(r) {
  return (r && r.type) === "redirect";
}
function Of(r) {
  return (
    typeof r == "object" &&
    r != null &&
    "type" in r &&
    "data" in r &&
    "init" in r &&
    r.type === "DataWithResponseInit"
  );
}
function xc(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.headers == "object" &&
    typeof r.body < "u"
  );
}
function _v(r) {
  return Op.has(r);
}
function kv(r) {
  return xc(r) && _v(r.status) && r.headers.has("Location");
}
function Sv(r) {
  return ev.has(r.toUpperCase());
}
function Ft(r) {
  return Xy.has(r.toUpperCase());
}
function bc(r) {
  return new URLSearchParams(r).getAll("index").some((e) => e === "");
}
function Mo(r, e) {
  let s = typeof e == "string" ? Gn(e).search : e.search;
  if (r[r.length - 1].route.index && bc(s || "")) return r[r.length - 1];
  let i = Cp(r);
  return i[i.length - 1];
}
function Af(r) {
  let {
    formMethod: e,
    formAction: s,
    formEncType: i,
    text: o,
    formData: l,
    json: c,
  } = r;
  if (!(!e || !s || !i)) {
    if (o != null)
      return {
        formMethod: e,
        formAction: s,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: e,
        formAction: s,
        formEncType: i,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (c !== void 0)
      return {
        formMethod: e,
        formAction: s,
        formEncType: i,
        formData: void 0,
        json: c,
        text: void 0,
      };
  }
}
function zu(r, e) {
  return e
    ? {
        state: "loading",
        location: r,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
      }
    : {
        state: "loading",
        location: r,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ev(r, e) {
  return {
    state: "submitting",
    location: r,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
  };
}
function Ki(r, e) {
  return r
    ? {
        state: "loading",
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
        data: e,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
      };
}
function Tv(r, e) {
  return {
    state: "submitting",
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
    data: e ? e.data : void 0,
  };
}
function gn(r) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: r,
  };
}
function Cv(r, e) {
  try {
    let s = r.sessionStorage.getItem(Ap);
    if (s) {
      let i = JSON.parse(s);
      for (let [o, l] of Object.entries(i || {}))
        l && Array.isArray(l) && e.set(o, new Set(l || []));
    }
  } catch {}
}
function Rv(r, e) {
  if (e.size > 0) {
    let s = {};
    for (let [i, o] of e) s[i] = [...o];
    try {
      r.sessionStorage.setItem(Ap, JSON.stringify(s));
    } catch (i) {
      wt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function Df() {
  let r,
    e,
    s = new Promise((i, o) => {
      ((r = async (l) => {
        i(l);
        try {
          await s;
        } catch {}
      }),
        (e = async (l) => {
          o(l);
          try {
            await s;
          } catch {}
        }));
    });
  return { promise: s, resolve: r, reject: e };
}
var Es = C.createContext(null);
Es.displayName = "DataRouter";
var va = C.createContext(null);
va.displayName = "DataRouterState";
var zp = C.createContext(!1);
function jv() {
  return C.useContext(zp);
}
var _c = C.createContext({ isTransitioning: !1 });
_c.displayName = "ViewTransition";
var Bp = C.createContext(new Map());
Bp.displayName = "Fetchers";
var Nv = C.createContext(null);
Nv.displayName = "Await";
var Er = C.createContext(null);
Er.displayName = "Navigation";
var qo = C.createContext(null);
qo.displayName = "Location";
var Zr = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Zr.displayName = "Route";
var kc = C.createContext(null);
kc.displayName = "RouteError";
var Wp = "REACT_ROUTER_ERROR",
  Pv = "REDIRECT",
  Ov = "ROUTE_ERROR_RESPONSE";
function Av(r) {
  if (r.startsWith(`${Wp}:${Pv}:{`))
    try {
      let e = JSON.parse(r.slice(28));
      if (
        typeof e == "object" &&
        e &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.location == "string" &&
        typeof e.reloadDocument == "boolean" &&
        typeof e.replace == "boolean"
      )
        return e;
    } catch {}
}
function Dv(r) {
  if (r.startsWith(`${Wp}:${Ov}:{`))
    try {
      let e = JSON.parse(r.slice(40));
      if (
        typeof e == "object" &&
        e &&
        typeof e.status == "number" &&
        typeof e.statusText == "string"
      )
        return new ga(e.status, e.statusText, e.data);
    } catch {}
}
function Iv(r, { relative: e } = {}) {
  Me(
    wa(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: i } = C.useContext(Er),
    { hash: o, pathname: l, search: c } = xa(r, { relative: e }),
    h = l;
  return (
    s !== "/" && (h = l === "/" ? s : Qr([s, l])),
    i.createHref({ pathname: h, search: c, hash: o })
  );
}
function wa() {
  return C.useContext(qo) != null;
}
function Jn() {
  return (
    Me(
      wa(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(qo).location
  );
}
var Hp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Vp(r) {
  C.useContext(Er).static || C.useLayoutEffect(r);
}
function Lv() {
  let { isDataRoute: r } = C.useContext(Zr);
  return r ? Qv() : Mv();
}
function Mv() {
  Me(
    wa(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = C.useContext(Es),
    { basename: e, navigator: s } = C.useContext(Er),
    { matches: i } = C.useContext(Zr),
    { pathname: o } = Jn(),
    l = JSON.stringify(yc(i)),
    c = C.useRef(!1);
  return (
    Vp(() => {
      c.current = !0;
    }),
    C.useCallback(
      (f, m = {}) => {
        if ((wt(c.current, Hp), !c.current)) return;
        if (typeof f == "number") {
          s.go(f);
          return;
        }
        let v = vc(f, JSON.parse(l), o, m.relative === "path");
        (r == null &&
          e !== "/" &&
          (v.pathname = v.pathname === "/" ? e : Qr([e, v.pathname])),
          (m.replace ? s.replace : s.push)(v, m.state, m));
      },
      [e, s, l, o, r]
    )
  );
}
var $v = C.createContext(null);
function Uv(r) {
  let e = C.useContext(Zr).outlet;
  return C.useMemo(
    () => e && C.createElement($v.Provider, { value: r }, e),
    [e, r]
  );
}
function xa(r, { relative: e } = {}) {
  let { matches: s } = C.useContext(Zr),
    { pathname: i } = Jn(),
    o = JSON.stringify(yc(s));
  return C.useMemo(() => vc(r, JSON.parse(o), i, e === "path"), [r, o, i, e]);
}
function Fv(r, e, s, i, o) {
  Me(
    wa(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = C.useContext(Er),
    { matches: c } = C.useContext(Zr),
    h = c[c.length - 1],
    f = h ? h.params : {},
    m = h ? h.pathname : "/",
    v = h ? h.pathnameBase : "/",
    g = h && h.route;
  {
    let T = (g && g.path) || "";
    Kp(
      m,
      !g || T.endsWith("*") || T.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T === "/" ? "*" : `${T}/*`}">.`
    );
  }
  let b = Jn(),
    x;
  x = b;
  let _ = x.pathname || "/",
    j = _;
  if (v !== "/") {
    let T = v.replace(/^\//, "").split("/");
    j = "/" + _.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let k = Hn(r, { pathname: j });
  return (
    wt(
      g || k != null,
      `No routes matched location "${x.pathname}${x.search}${x.hash}" `
    ),
    wt(
      k == null ||
        k[k.length - 1].route.element !== void 0 ||
        k[k.length - 1].route.Component !== void 0 ||
        k[k.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Vv(
      k &&
        k.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, f, T.params),
            pathname: Qr([
              v,
              l.encodeLocation
                ? l.encodeLocation(
                    T.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                  ).pathname
                : T.pathname,
            ]),
            pathnameBase:
              T.pathnameBase === "/"
                ? v
                : Qr([
                    v,
                    l.encodeLocation
                      ? l.encodeLocation(
                          T.pathnameBase
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23")
                        ).pathname
                      : T.pathnameBase,
                  ]),
          })
        ),
      c,
      s,
      i,
      o
    )
  );
}
function zv() {
  let r = Jv(),
    e = oa(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    s = r instanceof Error ? r.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    l = { padding: "2px 4px", backgroundColor: i },
    c = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (c = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: l }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: l }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, e),
      s ? C.createElement("pre", { style: o }, s) : null,
      c
    )
  );
}
var Bv = C.createElement(zv, null),
  qp = class extends C.Component {
    constructor(r) {
      (super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        }));
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, e) {
      return e.location !== r.location ||
        (e.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : e.error,
            location: e.location,
            revalidation: r.revalidation || e.revalidation,
          };
    }
    componentDidCatch(r, e) {
      this.props.onError
        ? this.props.onError(r, e)
        : console.error(
            "React Router caught the following error during render",
            r
          );
    }
    render() {
      let r = this.state.error;
      if (
        this.context &&
        typeof r == "object" &&
        r &&
        "digest" in r &&
        typeof r.digest == "string"
      ) {
        const s = Dv(r.digest);
        s && (r = s);
      }
      let e =
        r !== void 0
          ? C.createElement(
              Zr.Provider,
              { value: this.props.routeContext },
              C.createElement(kc.Provider, {
                value: r,
                children: this.props.component,
              })
            )
          : this.props.children;
      return this.context ? C.createElement(Wv, { error: r }, e) : e;
    }
  };
qp.contextType = zp;
var Bu = new WeakMap();
function Wv({ children: r, error: e }) {
  let { basename: s } = C.useContext(Er);
  if (
    typeof e == "object" &&
    e &&
    "digest" in e &&
    typeof e.digest == "string"
  ) {
    let i = Av(e.digest);
    if (i) {
      let o = Bu.get(e);
      if (o) throw o;
      let l = jp(i.location, s);
      if (Rp && !Bu.get(e))
        if (l.isExternal || i.reloadDocument)
          window.location.href = l.absoluteURL || l.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, {
              replace: i.replace,
            })
          );
          throw (Bu.set(e, c), c);
        }
      return C.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${l.absoluteURL || l.to}`,
      });
    }
  }
  return r;
}
function Hv({ routeContext: r, match: e, children: s }) {
  let i = C.useContext(Es);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = e.route.id),
    C.createElement(Zr.Provider, { value: r }, s)
  );
}
function Vv(r, e = [], s = null, i = null, o = null) {
  if (r == null) {
    if (!s) return null;
    if (s.errors) r = s.matches;
    else if (e.length === 0 && !s.initialized && s.matches.length > 0)
      r = s.matches;
    else return null;
  }
  let l = r,
    c = s == null ? void 0 : s.errors;
  if (c != null) {
    let v = l.findIndex(
      (g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0
    );
    (Me(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, v + 1))));
  }
  let h = !1,
    f = -1;
  if (s)
    for (let v = 0; v < l.length; v++) {
      let g = l[v];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = v),
        g.route.id)
      ) {
        let { loaderData: b, errors: x } = s,
          _ =
            g.route.loader &&
            !b.hasOwnProperty(g.route.id) &&
            (!x || x[g.route.id] === void 0);
        if (g.route.lazy || _) {
          ((h = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  let m =
    s && i
      ? (v, g) => {
          var b, x;
          i(v, {
            location: s.location,
            params:
              ((x = (b = s.matches) == null ? void 0 : b[0]) == null
                ? void 0
                : x.params) ?? {},
            unstable_pattern: ya(s.matches),
            errorInfo: g,
          });
        }
      : void 0;
  return l.reduceRight((v, g, b) => {
    let x,
      _ = !1,
      j = null,
      k = null;
    s &&
      ((x = c && g.route.id ? c[g.route.id] : void 0),
      (j = g.route.errorElement || Bv),
      h &&
        (f < 0 && b === 0
          ? (Kp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (_ = !0),
            (k = null))
          : f === b &&
            ((_ = !0), (k = g.route.hydrateFallbackElement || null))));
    let P = e.concat(l.slice(0, b + 1)),
      T = () => {
        let O;
        return (
          x
            ? (O = j)
            : _
              ? (O = k)
              : g.route.Component
                ? (O = C.createElement(g.route.Component, null))
                : g.route.element
                  ? (O = g.route.element)
                  : (O = v),
          C.createElement(Hv, {
            match: g,
            routeContext: { outlet: v, matches: P, isDataRoute: s != null },
            children: O,
          })
        );
      };
    return s && (g.route.ErrorBoundary || g.route.errorElement || b === 0)
      ? C.createElement(qp, {
          location: s.location,
          revalidation: s.revalidation,
          component: j,
          error: x,
          children: T(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: m,
        })
      : T();
  }, null);
}
function Sc(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qv(r) {
  let e = C.useContext(Es);
  return (Me(e, Sc(r)), e);
}
function Kv(r) {
  let e = C.useContext(va);
  return (Me(e, Sc(r)), e);
}
function Yv(r) {
  let e = C.useContext(Zr);
  return (Me(e, Sc(r)), e);
}
function Ec(r) {
  let e = Yv(r),
    s = e.matches[e.matches.length - 1];
  return (
    Me(
      s.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function Gv() {
  return Ec("useRouteId");
}
function Jv() {
  var i;
  let r = C.useContext(kc),
    e = Kv("useRouteError"),
    s = Ec("useRouteError");
  return r !== void 0 ? r : (i = e.errors) == null ? void 0 : i[s];
}
function Qv() {
  let { router: r } = qv("useNavigate"),
    e = Ec("useNavigate"),
    s = C.useRef(!1);
  return (
    Vp(() => {
      s.current = !0;
    }),
    C.useCallback(
      async (o, l = {}) => {
        (wt(s.current, Hp),
          s.current &&
            (typeof o == "number"
              ? await r.navigate(o)
              : await r.navigate(o, { fromRouteId: e, ...l })));
      },
      [r, e]
    )
  );
}
var If = {};
function Kp(r, e, s) {
  !e && !If[r] && ((If[r] = !0), wt(!1, s));
}
var Lf = {};
function Mf(r, e) {
  !r && !Lf[e] && ((Lf[e] = !0), console.warn(e));
}
var Xv = "useOptimistic",
  $f = yy[Xv],
  Zv = () => {};
function e0(r) {
  return $f ? $f(r) : [r, Zv];
}
function t0(r) {
  let e = {
    hasErrorBoundary:
      r.hasErrorBoundary || r.ErrorBoundary != null || r.errorElement != null,
  };
  return (
    r.Component &&
      (r.element &&
        wt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(e, {
        element: C.createElement(r.Component),
        Component: void 0,
      })),
    r.HydrateFallback &&
      (r.hydrateFallbackElement &&
        wt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(e, {
        hydrateFallbackElement: C.createElement(r.HydrateFallback),
        HydrateFallback: void 0,
      })),
    r.ErrorBoundary &&
      (r.errorElement &&
        wt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(e, {
        errorElement: C.createElement(r.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    e
  );
}
var r0 = ["HydrateFallback", "hydrateFallbackElement"],
  n0 = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((e, s) => {
          ((this.resolve = (i) => {
            this.status === "pending" && ((this.status = "resolved"), e(i));
          }),
            (this.reject = (i) => {
              this.status === "pending" && ((this.status = "rejected"), s(i));
            }));
        })));
    }
  };
function s0({
  router: r,
  flushSync: e,
  onError: s,
  unstable_useTransitions: i,
}) {
  i = jv() || i;
  let [l, c] = C.useState(r.state),
    [h, f] = e0(l),
    [m, v] = C.useState(),
    [g, b] = C.useState({ isTransitioning: !1 }),
    [x, _] = C.useState(),
    [j, k] = C.useState(),
    [P, T] = C.useState(),
    O = C.useRef(new Map()),
    F = C.useCallback(
      (
        Z,
        {
          deletedFetchers: ne,
          newErrors: fe,
          flushSync: ke,
          viewTransitionOpts: Pe,
        }
      ) => {
        (fe &&
          s &&
          Object.values(fe).forEach((be) => {
            var De;
            return s(be, {
              location: Z.location,
              params: ((De = Z.matches[0]) == null ? void 0 : De.params) ?? {},
              unstable_pattern: ya(Z.matches),
            });
          }),
          Z.fetchers.forEach((be, De) => {
            be.data !== void 0 && O.current.set(De, be.data);
          }),
          ne.forEach((be) => O.current.delete(be)),
          Mf(
            ke === !1 || e != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let pe =
          r.window != null &&
          r.window.document != null &&
          typeof r.window.document.startViewTransition == "function";
        if (
          (Mf(
            Pe == null || pe,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !Pe || !pe)
        ) {
          e && ke
            ? e(() => c(Z))
            : i === !1
              ? c(Z)
              : C.startTransition(() => {
                  (i === !0 && f((be) => Uf(be, Z)), c(Z));
                });
          return;
        }
        if (e && ke) {
          e(() => {
            (j && (x == null || x.resolve(), j.skipTransition()),
              b({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Pe.currentLocation,
                nextLocation: Pe.nextLocation,
              }));
          });
          let be = r.window.document.startViewTransition(() => {
            e(() => c(Z));
          });
          (be.finished.finally(() => {
            e(() => {
              (_(void 0), k(void 0), v(void 0), b({ isTransitioning: !1 }));
            });
          }),
            e(() => k(be)));
          return;
        }
        j
          ? (x == null || x.resolve(),
            j.skipTransition(),
            T({
              state: Z,
              currentLocation: Pe.currentLocation,
              nextLocation: Pe.nextLocation,
            }))
          : (v(Z),
            b({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Pe.currentLocation,
              nextLocation: Pe.nextLocation,
            }));
      },
      [r.window, e, j, x, i, f, s]
    );
  (C.useLayoutEffect(() => r.subscribe(F), [r, F]),
    C.useEffect(() => {
      g.isTransitioning && !g.flushSync && _(new n0());
    }, [g]),
    C.useEffect(() => {
      if (x && m && r.window) {
        let Z = m,
          ne = x.promise,
          fe = r.window.document.startViewTransition(async () => {
            (i === !1
              ? c(Z)
              : C.startTransition(() => {
                  (i === !0 && f((ke) => Uf(ke, Z)), c(Z));
                }),
              await ne);
          });
        (fe.finished.finally(() => {
          (_(void 0), k(void 0), v(void 0), b({ isTransitioning: !1 }));
        }),
          k(fe));
      }
    }, [m, x, r.window, i, f]),
    C.useEffect(() => {
      x && m && h.location.key === m.location.key && x.resolve();
    }, [x, j, h.location, m]),
    C.useEffect(() => {
      !g.isTransitioning &&
        P &&
        (v(P.state),
        b({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: P.currentLocation,
          nextLocation: P.nextLocation,
        }),
        T(void 0));
    }, [g.isTransitioning, P]));
  let q = C.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (Z) => r.navigate(Z),
        push: (Z, ne, fe) =>
          r.navigate(Z, {
            state: ne,
            preventScrollReset: fe == null ? void 0 : fe.preventScrollReset,
          }),
        replace: (Z, ne, fe) =>
          r.navigate(Z, {
            replace: !0,
            state: ne,
            preventScrollReset: fe == null ? void 0 : fe.preventScrollReset,
          }),
      }),
      [r]
    ),
    Q = r.basename || "/",
    I = C.useMemo(
      () => ({ router: r, navigator: q, static: !1, basename: Q, onError: s }),
      [r, q, Q, s]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Es.Provider,
      { value: I },
      C.createElement(
        va.Provider,
        { value: h },
        C.createElement(
          Bp.Provider,
          { value: O.current },
          C.createElement(
            _c.Provider,
            { value: g },
            C.createElement(
              l0,
              {
                basename: Q,
                location: h.location,
                navigationType: h.historyAction,
                navigator: q,
                unstable_useTransitions: i,
              },
              C.createElement(i0, {
                routes: r.routes,
                future: r.future,
                state: h,
                onError: s,
              })
            )
          )
        )
      )
    ),
    null
  );
}
function Uf(r, e) {
  return {
    ...r,
    navigation: e.navigation.state !== "idle" ? e.navigation : r.navigation,
    revalidation: e.revalidation !== "idle" ? e.revalidation : r.revalidation,
    actionData:
      e.navigation.state !== "submitting" ? e.actionData : r.actionData,
    fetchers: e.fetchers,
  };
}
var i0 = C.memo(a0);
function a0({ routes: r, future: e, state: s, onError: i }) {
  return Fv(r, void 0, s, i, e);
}
function o0(r) {
  return Uv(r.context);
}
function l0({
  basename: r = "/",
  children: e = null,
  location: s,
  navigationType: i = "POP",
  navigator: o,
  static: l = !1,
  unstable_useTransitions: c,
}) {
  Me(
    !wa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = r.replace(/^\/*/, "/"),
    f = C.useMemo(
      () => ({
        basename: h,
        navigator: o,
        static: l,
        unstable_useTransitions: c,
        future: {},
      }),
      [h, o, l, c]
    );
  typeof s == "string" && (s = Gn(s));
  let {
      pathname: m = "/",
      search: v = "",
      hash: g = "",
      state: b = null,
      key: x = "default",
    } = s,
    _ = C.useMemo(() => {
      let j = Sr(m, h);
      return j == null
        ? null
        : {
            location: { pathname: j, search: v, hash: g, state: b, key: x },
            navigationType: i,
          };
    }, [h, m, v, g, b, x, i]);
  return (
    wt(
      _ != null,
      `<Router basename="${h}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    _ == null
      ? null
      : C.createElement(
          Er.Provider,
          { value: f },
          C.createElement(qo.Provider, { children: e, value: _ })
        )
  );
}
var $o = "get",
  Uo = "application/x-www-form-urlencoded";
function Ko(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function u0(r) {
  return Ko(r) && r.tagName.toLowerCase() === "button";
}
function c0(r) {
  return Ko(r) && r.tagName.toLowerCase() === "form";
}
function d0(r) {
  return Ko(r) && r.tagName.toLowerCase() === "input";
}
function h0(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function f0(r, e) {
  return r.button === 0 && (!e || e === "_self") && !h0(r);
}
var Co = null;
function p0() {
  if (Co === null)
    try {
      (new FormData(document.createElement("form"), 0), (Co = !1));
    } catch {
      Co = !0;
    }
  return Co;
}
var m0 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Wu(r) {
  return r != null && !m0.has(r)
    ? (wt(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uo}"`
      ),
      null)
    : r;
}
function g0(r, e) {
  let s, i, o, l, c;
  if (c0(r)) {
    let h = r.getAttribute("action");
    ((i = h ? Sr(h, e) : null),
      (s = r.getAttribute("method") || $o),
      (o = Wu(r.getAttribute("enctype")) || Uo),
      (l = new FormData(r)));
  } else if (u0(r) || (d0(r) && (r.type === "submit" || r.type === "image"))) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let f = r.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((i = f ? Sr(f, e) : null),
      (s = r.getAttribute("formmethod") || h.getAttribute("method") || $o),
      (o =
        Wu(r.getAttribute("formenctype")) ||
        Wu(h.getAttribute("enctype")) ||
        Uo),
      (l = new FormData(h, r)),
      !p0())
    ) {
      let { name: m, type: v, value: g } = r;
      if (v === "image") {
        let b = m ? `${m}.` : "";
        (l.append(`${b}x`, "0"), l.append(`${b}y`, "0"));
      } else m && l.append(m, g);
    }
  } else {
    if (Ko(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((s = $o), (i = null), (o = Uo), (c = r));
  }
  return (
    l && o === "text/plain" && ((c = l), (l = void 0)),
    { action: i, method: s.toLowerCase(), encType: o, formData: l, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Tc(r, e) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(e);
}
function y0(r, e, s, i) {
  let o =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : r;
  return (
    s
      ? o.pathname.endsWith("/")
        ? (o.pathname = `${o.pathname}_.${i}`)
        : (o.pathname = `${o.pathname}.${i}`)
      : o.pathname === "/"
        ? (o.pathname = `_root.${i}`)
        : e && Sr(o.pathname, e) === "/"
          ? (o.pathname = `${e.replace(/\/$/, "")}/_root.${i}`)
          : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${i}`),
    o
  );
}
async function v0(r, e) {
  if (r.id in e) return e[r.id];
  try {
    let s = await import(r.module);
    return ((e[r.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function w0(r) {
  return r == null
    ? !1
    : r.href == null
      ? r.rel === "preload" &&
        typeof r.imageSrcSet == "string" &&
        typeof r.imageSizes == "string"
      : typeof r.rel == "string" && typeof r.href == "string";
}
async function x0(r, e, s) {
  let i = await Promise.all(
    r.map(async (o) => {
      let l = e.routes[o.route.id];
      if (l) {
        let c = await v0(l, s);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return S0(
    i
      .flat(1)
      .filter(w0)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Ff(r, e, s, i, o, l) {
  let c = (f, m) => (s[m] ? f.route.id !== s[m].route.id : !0),
    h = (f, m) => {
      var v;
      return (
        s[m].pathname !== f.pathname ||
        (((v = s[m].route.path) == null ? void 0 : v.endsWith("*")) &&
          s[m].params["*"] !== f.params["*"])
      );
    };
  return l === "assets"
    ? e.filter((f, m) => c(f, m) || h(f, m))
    : l === "data"
      ? e.filter((f, m) => {
          var g;
          let v = i.routes[f.route.id];
          if (!v || !v.hasLoader) return !1;
          if (c(f, m) || h(f, m)) return !0;
          if (f.route.shouldRevalidate) {
            let b = f.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: ((g = s[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(r, window.origin),
              nextParams: f.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function b0(r, e, { includeHydrateFallback: s } = {}) {
  return _0(
    r
      .map((i) => {
        let o = e.routes[i.route.id];
        if (!o) return [];
        let l = [o.module];
        return (
          o.clientActionModule && (l = l.concat(o.clientActionModule)),
          o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)),
          s &&
            o.hydrateFallbackModule &&
            (l = l.concat(o.hydrateFallbackModule)),
          o.imports && (l = l.concat(o.imports)),
          l
        );
      })
      .flat(1)
  );
}
function _0(r) {
  return [...new Set(r)];
}
function k0(r) {
  let e = {},
    s = Object.keys(r).sort();
  for (let i of s) e[i] = r[i];
  return e;
}
function S0(r, e) {
  let s = new Set();
  return (
    new Set(e),
    r.reduce((i, o) => {
      let l = JSON.stringify(k0(o));
      return (s.has(l) || (s.add(l), i.push({ key: l, link: o })), i);
    }, [])
  );
}
function Yp() {
  let r = C.useContext(Es);
  return (
    Tc(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  );
}
function E0() {
  let r = C.useContext(va);
  return (
    Tc(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  );
}
var Cc = C.createContext(void 0);
Cc.displayName = "FrameworkContext";
function Gp() {
  let r = C.useContext(Cc);
  return (
    Tc(r, "You must render this element inside a <HydratedRouter> element"),
    r
  );
}
function T0(r, e) {
  let s = C.useContext(Cc),
    [i, o] = C.useState(!1),
    [l, c] = C.useState(!1),
    {
      onFocus: h,
      onBlur: f,
      onMouseEnter: m,
      onMouseLeave: v,
      onTouchStart: g,
    } = e,
    b = C.useRef(null);
  (C.useEffect(() => {
    if ((r === "render" && c(!0), r === "viewport")) {
      let j = (P) => {
          P.forEach((T) => {
            c(T.isIntersecting);
          });
        },
        k = new IntersectionObserver(j, { threshold: 0.5 });
      return (
        b.current && k.observe(b.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [r]),
    C.useEffect(() => {
      if (i) {
        let j = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(j);
        };
      }
    }, [i]));
  let x = () => {
      o(!0);
    },
    _ = () => {
      (o(!1), c(!1));
    };
  return s
    ? r !== "intent"
      ? [l, b, {}]
      : [
          l,
          b,
          {
            onFocus: Yi(h, x),
            onBlur: Yi(f, _),
            onMouseEnter: Yi(m, x),
            onMouseLeave: Yi(v, _),
            onTouchStart: Yi(g, x),
          },
        ]
    : [!1, b, {}];
}
function Yi(r, e) {
  return (s) => {
    (r && r(s), s.defaultPrevented || e(s));
  };
}
function C0({ page: r, ...e }) {
  let { router: s } = Yp(),
    i = C.useMemo(() => Hn(s.routes, r, s.basename), [s.routes, r, s.basename]);
  return i ? C.createElement(j0, { page: r, matches: i, ...e }) : null;
}
function R0(r) {
  let { manifest: e, routeModules: s } = Gp(),
    [i, o] = C.useState([]);
  return (
    C.useEffect(() => {
      let l = !1;
      return (
        x0(r, e, s).then((c) => {
          l || o(c);
        }),
        () => {
          l = !0;
        }
      );
    }, [r, e, s]),
    i
  );
}
function j0({ page: r, matches: e, ...s }) {
  let i = Jn(),
    { future: o, manifest: l, routeModules: c } = Gp(),
    { basename: h } = Yp(),
    { loaderData: f, matches: m } = E0(),
    v = C.useMemo(() => Ff(r, e, m, l, i, "data"), [r, e, m, l, i]),
    g = C.useMemo(() => Ff(r, e, m, l, i, "assets"), [r, e, m, l, i]),
    b = C.useMemo(() => {
      if (r === i.pathname + i.search + i.hash) return [];
      let j = new Set(),
        k = !1;
      if (
        (e.forEach((T) => {
          var F;
          let O = l.routes[T.route.id];
          !O ||
            !O.hasLoader ||
            ((!v.some((q) => q.route.id === T.route.id) &&
              T.route.id in f &&
              (F = c[T.route.id]) != null &&
              F.shouldRevalidate) ||
            O.hasClientLoader
              ? (k = !0)
              : j.add(T.route.id));
        }),
        j.size === 0)
      )
        return [];
      let P = y0(r, h, o.unstable_trailingSlashAwareDataRequests, "data");
      return (
        k &&
          j.size > 0 &&
          P.searchParams.set(
            "_routes",
            e
              .filter((T) => j.has(T.route.id))
              .map((T) => T.route.id)
              .join(",")
          ),
        [P.pathname + P.search]
      );
    }, [h, o.unstable_trailingSlashAwareDataRequests, f, i, l, v, e, r, c]),
    x = C.useMemo(() => b0(g, l), [g, l]),
    _ = R0(g);
  return C.createElement(
    C.Fragment,
    null,
    b.map((j) =>
      C.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...s,
      })
    ),
    x.map((j) =>
      C.createElement("link", { key: j, rel: "modulepreload", href: j, ...s })
    ),
    _.map(({ key: j, link: k }) =>
      C.createElement("link", {
        key: j,
        nonce: s.nonce,
        ...k,
        crossOrigin: k.crossOrigin ?? s.crossOrigin,
      })
    )
  );
}
function N0(...r) {
  return (e) => {
    r.forEach((s) => {
      typeof s == "function" ? s(e) : s != null && (s.current = e);
    });
  };
}
var P0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  P0 && (window.__reactRouterVersion = "7.13.0");
} catch {}
function O0(r, e) {
  return sv({
    basename: e == null ? void 0 : e.basename,
    getContext: e == null ? void 0 : e.getContext,
    future: e == null ? void 0 : e.future,
    history: xy({ window: e == null ? void 0 : e.window }),
    hydrationData: A0(),
    routes: r,
    mapRouteProperties: t0,
    hydrationRouteProperties: r0,
    dataStrategy: e == null ? void 0 : e.dataStrategy,
    patchRoutesOnNavigation: e == null ? void 0 : e.patchRoutesOnNavigation,
    window: e == null ? void 0 : e.window,
    unstable_instrumentations: e == null ? void 0 : e.unstable_instrumentations,
  }).initialize();
}
function A0() {
  let r = window == null ? void 0 : window.__staticRouterHydrationData;
  return (r && r.errors && (r = { ...r, errors: D0(r.errors) }), r);
}
function D0(r) {
  if (!r) return null;
  let e = Object.entries(r),
    s = {};
  for (let [i, o] of e)
    if (o && o.__type === "RouteErrorResponse")
      s[i] = new ga(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let c = new l(o.message);
            ((c.stack = ""), (s[i] = c));
          } catch {}
      }
      if (s[i] == null) {
        let l = new Error(o.message);
        ((l.stack = ""), (s[i] = l));
      }
    } else s[i] = o;
  return s;
}
var Jp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yo = C.forwardRef(function (
    {
      onClick: e,
      discover: s = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: l,
      replace: c,
      state: h,
      target: f,
      to: m,
      preventScrollReset: v,
      viewTransition: g,
      unstable_defaultShouldRevalidate: b,
      ...x
    },
    _
  ) {
    let { basename: j, unstable_useTransitions: k } = C.useContext(Er),
      P = typeof m == "string" && Jp.test(m),
      T = jp(m, j);
    m = T.to;
    let O = Iv(m, { relative: o }),
      [F, q, Q] = T0(i, x),
      I = $0(m, {
        replace: c,
        state: h,
        target: f,
        preventScrollReset: v,
        relative: o,
        viewTransition: g,
        unstable_defaultShouldRevalidate: b,
        unstable_useTransitions: k,
      });
    function Z(fe) {
      (e && e(fe), fe.defaultPrevented || I(fe));
    }
    let ne = C.createElement("a", {
      ...x,
      ...Q,
      href: T.absoluteURL || O,
      onClick: T.isExternal || l ? e : Z,
      ref: N0(_, q),
      target: f,
      "data-discover": !P && s === "render" ? "true" : void 0,
    });
    return F && !P
      ? C.createElement(C.Fragment, null, ne, C.createElement(C0, { page: O }))
      : ne;
  });
Yo.displayName = "Link";
var I0 = C.forwardRef(function (
  {
    "aria-current": e = "page",
    caseSensitive: s = !1,
    className: i = "",
    end: o = !1,
    style: l,
    to: c,
    viewTransition: h,
    children: f,
    ...m
  },
  v
) {
  let g = xa(c, { relative: m.relative }),
    b = Jn(),
    x = C.useContext(va),
    { navigator: _, basename: j } = C.useContext(Er),
    k = x != null && W0(g) && h === !0,
    P = _.encodeLocation ? _.encodeLocation(g).pathname : g.pathname,
    T = b.pathname,
    O =
      x && x.navigation && x.navigation.location
        ? x.navigation.location.pathname
        : null;
  (s ||
    ((T = T.toLowerCase()),
    (O = O ? O.toLowerCase() : null),
    (P = P.toLowerCase())),
    O && j && (O = Sr(O, j) || O));
  const F = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
  let q = T === P || (!o && T.startsWith(P) && T.charAt(F) === "/"),
    Q =
      O != null &&
      (O === P || (!o && O.startsWith(P) && O.charAt(P.length) === "/")),
    I = { isActive: q, isPending: Q, isTransitioning: k },
    Z = q ? e : void 0,
    ne;
  typeof i == "function"
    ? (ne = i(I))
    : (ne = [
        i,
        q ? "active" : null,
        Q ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let fe = typeof l == "function" ? l(I) : l;
  return C.createElement(
    Yo,
    {
      ...m,
      "aria-current": Z,
      className: ne,
      ref: v,
      style: fe,
      to: c,
      viewTransition: h,
    },
    typeof f == "function" ? f(I) : f
  );
});
I0.displayName = "NavLink";
var L0 = C.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: e,
      navigate: s,
      reloadDocument: i,
      replace: o,
      state: l,
      method: c = $o,
      action: h,
      onSubmit: f,
      relative: m,
      preventScrollReset: v,
      viewTransition: g,
      unstable_defaultShouldRevalidate: b,
      ...x
    },
    _
  ) => {
    let { unstable_useTransitions: j } = C.useContext(Er),
      k = z0(),
      P = B0(h, { relative: m }),
      T = c.toLowerCase() === "get" ? "get" : "post",
      O = typeof h == "string" && Jp.test(h),
      F = (q) => {
        if ((f && f(q), q.defaultPrevented)) return;
        q.preventDefault();
        let Q = q.nativeEvent.submitter,
          I = (Q == null ? void 0 : Q.getAttribute("formmethod")) || c,
          Z = () =>
            k(Q || q.currentTarget, {
              fetcherKey: e,
              method: I,
              navigate: s,
              replace: o,
              state: l,
              relative: m,
              preventScrollReset: v,
              viewTransition: g,
              unstable_defaultShouldRevalidate: b,
            });
        j && s !== !1 ? C.startTransition(() => Z()) : Z();
      };
    return C.createElement("form", {
      ref: _,
      method: T,
      action: P,
      onSubmit: i ? f : F,
      ...x,
      "data-discover": !O && r === "render" ? "true" : void 0,
    });
  }
);
L0.displayName = "Form";
function M0(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qp(r) {
  let e = C.useContext(Es);
  return (Me(e, M0(r)), e);
}
function $0(
  r,
  {
    target: e,
    replace: s,
    state: i,
    preventScrollReset: o,
    relative: l,
    viewTransition: c,
    unstable_defaultShouldRevalidate: h,
    unstable_useTransitions: f,
  } = {}
) {
  let m = Lv(),
    v = Jn(),
    g = xa(r, { relative: l });
  return C.useCallback(
    (b) => {
      if (f0(b, e)) {
        b.preventDefault();
        let x = s !== void 0 ? s : Xr(v) === Xr(g),
          _ = () =>
            m(r, {
              replace: x,
              state: i,
              preventScrollReset: o,
              relative: l,
              viewTransition: c,
              unstable_defaultShouldRevalidate: h,
            });
        f ? C.startTransition(() => _()) : _();
      }
    },
    [v, m, g, s, i, e, r, o, l, c, h, f]
  );
}
var U0 = 0,
  F0 = () => `__${String(++U0)}__`;
function z0() {
  let { router: r } = Qp("useSubmit"),
    { basename: e } = C.useContext(Er),
    s = Gv(),
    i = r.fetch,
    o = r.navigate;
  return C.useCallback(
    async (l, c = {}) => {
      let { action: h, method: f, encType: m, formData: v, body: g } = g0(l, e);
      if (c.navigate === !1) {
        let b = c.fetcherKey || F0();
        await i(b, s, c.action || h, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: v,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || m,
          flushSync: c.flushSync,
        });
      } else
        await o(c.action || h, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: v,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || m,
          replace: c.replace,
          state: c.state,
          fromRouteId: s,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [i, o, e, s]
  );
}
function B0(r, { relative: e } = {}) {
  let { basename: s } = C.useContext(Er),
    i = C.useContext(Zr);
  Me(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    l = { ...xa(r || ".", { relative: e }) },
    c = Jn();
  if (r == null) {
    l.search = c.search;
    let h = new URLSearchParams(l.search),
      f = h.getAll("index");
    if (f.some((v) => v === "")) {
      (h.delete("index"),
        f.filter((g) => g).forEach((g) => h.append("index", g)));
      let v = h.toString();
      l.search = v ? `?${v}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      o.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (l.pathname = l.pathname === "/" ? s : Qr([s, l.pathname])),
    Xr(l)
  );
}
function W0(r, { relative: e } = {}) {
  let s = C.useContext(_c);
  Me(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = Qp("useViewTransitionState"),
    o = xa(r, { relative: e });
  if (!s.isTransitioning) return !1;
  let l = Sr(s.currentLocation.pathname, i) || s.currentLocation.pathname,
    c = Sr(s.nextLocation.pathname, i) || s.nextLocation.pathname;
  return Fo(o.pathname, c) != null || Fo(o.pathname, l) != null;
}
function Go(r, e) {
  var s = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (s[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[o]) &&
        (s[i[o]] = r[i[o]]);
  return s;
}
function H0(r, e, s, i) {
  function o(l) {
    return l instanceof s
      ? l
      : new s(function (c) {
          c(l);
        });
  }
  return new (s || (s = Promise))(function (l, c) {
    function h(v) {
      try {
        m(i.next(v));
      } catch (g) {
        c(g);
      }
    }
    function f(v) {
      try {
        m(i.throw(v));
      } catch (g) {
        c(g);
      }
    }
    function m(v) {
      v.done ? l(v.value) : o(v.value).then(h, f);
    }
    m((i = i.apply(r, e || [])).next());
  });
}
const V0 = (r) => (r ? (...e) => r(...e) : (...e) => fetch(...e));
class Rc extends Error {
  constructor(e, s = "FunctionsError", i) {
    (super(e), (this.name = s), (this.context = i));
  }
}
class q0 extends Rc {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e
    );
  }
}
class zf extends Rc {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Bf extends Rc {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e
    );
  }
}
var nc;
(function (r) {
  ((r.Any = "any"),
    (r.ApNortheast1 = "ap-northeast-1"),
    (r.ApNortheast2 = "ap-northeast-2"),
    (r.ApSouth1 = "ap-south-1"),
    (r.ApSoutheast1 = "ap-southeast-1"),
    (r.ApSoutheast2 = "ap-southeast-2"),
    (r.CaCentral1 = "ca-central-1"),
    (r.EuCentral1 = "eu-central-1"),
    (r.EuWest1 = "eu-west-1"),
    (r.EuWest2 = "eu-west-2"),
    (r.EuWest3 = "eu-west-3"),
    (r.SaEast1 = "sa-east-1"),
    (r.UsEast1 = "us-east-1"),
    (r.UsWest1 = "us-west-1"),
    (r.UsWest2 = "us-west-2"));
})(nc || (nc = {}));
class K0 {
  constructor(e, { headers: s = {}, customFetch: i, region: o = nc.Any } = {}) {
    ((this.url = e),
      (this.headers = s),
      (this.region = o),
      (this.fetch = V0(i)));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return H0(this, arguments, void 0, function* (s, i = {}) {
      var o;
      let l, c;
      try {
        const { headers: h, method: f, body: m, signal: v, timeout: g } = i;
        let b = {},
          { region: x } = i;
        x || (x = this.region);
        const _ = new URL(`${this.url}/${s}`);
        x &&
          x !== "any" &&
          ((b["x-region"] = x), _.searchParams.set("forceFunctionRegion", x));
        let j;
        m &&
        ((h && !Object.prototype.hasOwnProperty.call(h, "Content-Type")) || !h)
          ? (typeof Blob < "u" && m instanceof Blob) || m instanceof ArrayBuffer
            ? ((b["Content-Type"] = "application/octet-stream"), (j = m))
            : typeof m == "string"
              ? ((b["Content-Type"] = "text/plain"), (j = m))
              : typeof FormData < "u" && m instanceof FormData
                ? (j = m)
                : ((b["Content-Type"] = "application/json"),
                  (j = JSON.stringify(m)))
          : m &&
              typeof m != "string" &&
              !(typeof Blob < "u" && m instanceof Blob) &&
              !(m instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && m instanceof FormData)
            ? (j = JSON.stringify(m))
            : (j = m);
        let k = v;
        g &&
          ((c = new AbortController()),
          (l = setTimeout(() => c.abort(), g)),
          v
            ? ((k = c.signal), v.addEventListener("abort", () => c.abort()))
            : (k = c.signal));
        const P = yield this.fetch(_.toString(), {
            method: f || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, b), this.headers),
              h
            ),
            body: j,
            signal: k,
          }).catch((q) => {
            throw new q0(q);
          }),
          T = P.headers.get("x-relay-error");
        if (T && T === "true") throw new zf(P);
        if (!P.ok) throw new Bf(P);
        let O = (
            (o = P.headers.get("Content-Type")) !== null && o !== void 0
              ? o
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          F;
        return (
          O === "application/json"
            ? (F = yield P.json())
            : O === "application/octet-stream" || O === "application/pdf"
              ? (F = yield P.blob())
              : O === "text/event-stream"
                ? (F = P)
                : O === "multipart/form-data"
                  ? (F = yield P.formData())
                  : (F = yield P.text()),
          { data: F, error: null, response: P }
        );
      } catch (h) {
        return {
          data: null,
          error: h,
          response: h instanceof Bf || h instanceof zf ? h.context : void 0,
        };
      } finally {
        l && clearTimeout(l);
      }
    });
  }
}
var Y0 = class extends Error {
    constructor(r) {
      (super(r.message),
        (this.name = "PostgrestError"),
        (this.details = r.details),
        (this.hint = r.hint),
        (this.code = r.code));
    }
  },
  G0 = class {
    constructor(r) {
      var e, s, i;
      ((this.shouldThrowOnError = !1),
        (this.method = r.method),
        (this.url = r.url),
        (this.headers = new Headers(r.headers)),
        (this.schema = r.schema),
        (this.body = r.body),
        (this.shouldThrowOnError =
          (e = r.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
        (this.signal = r.signal),
        (this.isMaybeSingle =
          (s = r.isMaybeSingle) !== null && s !== void 0 ? s : !1),
        (this.urlLengthLimit =
          (i = r.urlLengthLimit) !== null && i !== void 0 ? i : 8e3),
        r.fetch ? (this.fetch = r.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(r, e) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(r, e),
        this
      );
    }
    then(r, e) {
      var s = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const i = this.fetch;
      let o = i(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (l) => {
        let c = null,
          h = null,
          f = null,
          m = l.status,
          v = l.statusText;
        if (l.ok) {
          var g, b;
          if (s.method !== "HEAD") {
            var x;
            const P = await l.text();
            P === "" ||
              (s.headers.get("Accept") === "text/csv" ||
              (s.headers.get("Accept") &&
                !((x = s.headers.get("Accept")) === null || x === void 0) &&
                x.includes("application/vnd.pgrst.plan+text"))
                ? (h = P)
                : (h = JSON.parse(P)));
          }
          const j =
              (g = s.headers.get("Prefer")) === null || g === void 0
                ? void 0
                : g.match(/count=(exact|planned|estimated)/),
            k =
              (b = l.headers.get("content-range")) === null || b === void 0
                ? void 0
                : b.split("/");
          (j && k && k.length > 1 && (f = parseInt(k[1])),
            s.isMaybeSingle &&
              s.method === "GET" &&
              Array.isArray(h) &&
              (h.length > 1
                ? ((c = {
                    code: "PGRST116",
                    details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (h = null),
                  (f = null),
                  (m = 406),
                  (v = "Not Acceptable"))
                : h.length === 1
                  ? (h = h[0])
                  : (h = null)));
        } else {
          var _;
          const j = await l.text();
          try {
            ((c = JSON.parse(j)),
              Array.isArray(c) &&
                l.status === 404 &&
                ((h = []), (c = null), (m = 200), (v = "OK")));
          } catch {
            l.status === 404 && j === ""
              ? ((m = 204), (v = "No Content"))
              : (c = { message: j });
          }
          if (
            (c &&
              s.isMaybeSingle &&
              !(c == null || (_ = c.details) === null || _ === void 0) &&
              _.includes("0 rows") &&
              ((c = null), (m = 200), (v = "OK")),
            c && s.shouldThrowOnError)
          )
            throw new Y0(c);
        }
        return { error: c, data: h, count: f, status: m, statusText: v };
      });
      return (
        this.shouldThrowOnError ||
          (o = o.catch((l) => {
            var c;
            let h = "",
              f = "",
              m = "";
            const v = l == null ? void 0 : l.cause;
            if (v) {
              var g, b, x, _;
              const P =
                  (g = v == null ? void 0 : v.message) !== null && g !== void 0
                    ? g
                    : "",
                T =
                  (b = v == null ? void 0 : v.code) !== null && b !== void 0
                    ? b
                    : "";
              ((h = `${(x = l == null ? void 0 : l.name) !== null && x !== void 0 ? x : "FetchError"}: ${l == null ? void 0 : l.message}`),
                (h += `

Caused by: ${(_ = v == null ? void 0 : v.name) !== null && _ !== void 0 ? _ : "Error"}: ${P}`),
                T && (h += ` (${T})`),
                v != null &&
                  v.stack &&
                  (h += `
${v.stack}`));
            } else {
              var j;
              h =
                (j = l == null ? void 0 : l.stack) !== null && j !== void 0
                  ? j
                  : "";
            }
            const k = this.url.toString().length;
            return (
              (l == null ? void 0 : l.name) === "AbortError" ||
              (l == null ? void 0 : l.code) === "ABORT_ERR"
                ? ((m = ""),
                  (f = "Request was aborted (timeout or manual cancellation)"),
                  k > this.urlLengthLimit &&
                    (f += `. Note: Your request URL is ${k} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((v == null ? void 0 : v.name) === "HeadersOverflowError" ||
                    (v == null ? void 0 : v.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((m = ""),
                  (f = "HTTP headers exceeded server limits (typically 16KB)"),
                  k > this.urlLengthLimit &&
                    (f += `. Your request URL is ${k} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${(c = l == null ? void 0 : l.name) !== null && c !== void 0 ? c : "FetchError"}: ${l == null ? void 0 : l.message}`,
                  details: h,
                  hint: f,
                  code: m,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        o.then(r, e)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  J0 = class extends G0 {
    select(r) {
      let e = !1;
      const s = (r ?? "*")
        .split("")
        .map((i) => (/\s/.test(i) && !e ? "" : (i === '"' && (e = !e), i)))
        .join("");
      return (
        this.url.searchParams.set("select", s),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      r,
      {
        ascending: e = !0,
        nullsFirst: s,
        foreignTable: i,
        referencedTable: o = i,
      } = {}
    ) {
      const l = o ? `${o}.order` : "order",
        c = this.url.searchParams.get(l);
      return (
        this.url.searchParams.set(
          l,
          `${c ? `${c},` : ""}${r}.${e ? "asc" : "desc"}${s === void 0 ? "" : s ? ".nullsfirst" : ".nullslast"}`
        ),
        this
      );
    }
    limit(r, { foreignTable: e, referencedTable: s = e } = {}) {
      const i = typeof s > "u" ? "limit" : `${s}.limit`;
      return (this.url.searchParams.set(i, `${r}`), this);
    }
    range(r, e, { foreignTable: s, referencedTable: i = s } = {}) {
      const o = typeof i > "u" ? "offset" : `${i}.offset`,
        l = typeof i > "u" ? "limit" : `${i}.limit`;
      return (
        this.url.searchParams.set(o, `${r}`),
        this.url.searchParams.set(l, `${e - r + 1}`),
        this
      );
    }
    abortSignal(r) {
      return ((this.signal = r), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: r = !1,
      verbose: e = !1,
      settings: s = !1,
      buffers: i = !1,
      wal: o = !1,
      format: l = "text",
    } = {}) {
      var c;
      const h = [
          r ? "analyze" : null,
          e ? "verbose" : null,
          s ? "settings" : null,
          i ? "buffers" : null,
          o ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        f =
          (c = this.headers.get("Accept")) !== null && c !== void 0
            ? c
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${l}; for="${f}"; options=${h};`
        ),
        l === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(r) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${r}`),
        this
      );
    }
  };
const Wf = new RegExp("[,()]");
var si = class extends J0 {
    eq(r, e) {
      return (this.url.searchParams.append(r, `eq.${e}`), this);
    }
    neq(r, e) {
      return (this.url.searchParams.append(r, `neq.${e}`), this);
    }
    gt(r, e) {
      return (this.url.searchParams.append(r, `gt.${e}`), this);
    }
    gte(r, e) {
      return (this.url.searchParams.append(r, `gte.${e}`), this);
    }
    lt(r, e) {
      return (this.url.searchParams.append(r, `lt.${e}`), this);
    }
    lte(r, e) {
      return (this.url.searchParams.append(r, `lte.${e}`), this);
    }
    like(r, e) {
      return (this.url.searchParams.append(r, `like.${e}`), this);
    }
    likeAllOf(r, e) {
      return (
        this.url.searchParams.append(r, `like(all).{${e.join(",")}}`),
        this
      );
    }
    likeAnyOf(r, e) {
      return (
        this.url.searchParams.append(r, `like(any).{${e.join(",")}}`),
        this
      );
    }
    ilike(r, e) {
      return (this.url.searchParams.append(r, `ilike.${e}`), this);
    }
    ilikeAllOf(r, e) {
      return (
        this.url.searchParams.append(r, `ilike(all).{${e.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(r, e) {
      return (
        this.url.searchParams.append(r, `ilike(any).{${e.join(",")}}`),
        this
      );
    }
    regexMatch(r, e) {
      return (this.url.searchParams.append(r, `match.${e}`), this);
    }
    regexIMatch(r, e) {
      return (this.url.searchParams.append(r, `imatch.${e}`), this);
    }
    is(r, e) {
      return (this.url.searchParams.append(r, `is.${e}`), this);
    }
    isDistinct(r, e) {
      return (this.url.searchParams.append(r, `isdistinct.${e}`), this);
    }
    in(r, e) {
      const s = Array.from(new Set(e))
        .map((i) => (typeof i == "string" && Wf.test(i) ? `"${i}"` : `${i}`))
        .join(",");
      return (this.url.searchParams.append(r, `in.(${s})`), this);
    }
    notIn(r, e) {
      const s = Array.from(new Set(e))
        .map((i) => (typeof i == "string" && Wf.test(i) ? `"${i}"` : `${i}`))
        .join(",");
      return (this.url.searchParams.append(r, `not.in.(${s})`), this);
    }
    contains(r, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(r, `cs.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(r, `cs.{${e.join(",")}}`)
            : this.url.searchParams.append(r, `cs.${JSON.stringify(e)}`),
        this
      );
    }
    containedBy(r, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(r, `cd.${e}`)
          : Array.isArray(e)
            ? this.url.searchParams.append(r, `cd.{${e.join(",")}}`)
            : this.url.searchParams.append(r, `cd.${JSON.stringify(e)}`),
        this
      );
    }
    rangeGt(r, e) {
      return (this.url.searchParams.append(r, `sr.${e}`), this);
    }
    rangeGte(r, e) {
      return (this.url.searchParams.append(r, `nxl.${e}`), this);
    }
    rangeLt(r, e) {
      return (this.url.searchParams.append(r, `sl.${e}`), this);
    }
    rangeLte(r, e) {
      return (this.url.searchParams.append(r, `nxr.${e}`), this);
    }
    rangeAdjacent(r, e) {
      return (this.url.searchParams.append(r, `adj.${e}`), this);
    }
    overlaps(r, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(r, `ov.${e}`)
          : this.url.searchParams.append(r, `ov.{${e.join(",")}}`),
        this
      );
    }
    textSearch(r, e, { config: s, type: i } = {}) {
      let o = "";
      i === "plain"
        ? (o = "pl")
        : i === "phrase"
          ? (o = "ph")
          : i === "websearch" && (o = "w");
      const l = s === void 0 ? "" : `(${s})`;
      return (this.url.searchParams.append(r, `${o}fts${l}.${e}`), this);
    }
    match(r) {
      return (
        Object.entries(r).forEach(([e, s]) => {
          this.url.searchParams.append(e, `eq.${s}`);
        }),
        this
      );
    }
    not(r, e, s) {
      return (this.url.searchParams.append(r, `not.${e}.${s}`), this);
    }
    or(r, { foreignTable: e, referencedTable: s = e } = {}) {
      const i = s ? `${s}.or` : "or";
      return (this.url.searchParams.append(i, `(${r})`), this);
    }
    filter(r, e, s) {
      return (this.url.searchParams.append(r, `${e}.${s}`), this);
    }
  },
  Q0 = class {
    constructor(
      r,
      { headers: e = {}, schema: s, fetch: i, urlLengthLimit: o = 8e3 }
    ) {
      ((this.url = r),
        (this.headers = new Headers(e)),
        (this.schema = s),
        (this.fetch = i),
        (this.urlLengthLimit = o));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(r, e) {
      const { head: s = !1, count: i } = e ?? {},
        o = s ? "HEAD" : "GET";
      let l = !1;
      const c = (r ?? "*")
          .split("")
          .map((m) => (/\s/.test(m) && !l ? "" : (m === '"' && (l = !l), m)))
          .join(""),
        { url: h, headers: f } = this.cloneRequestState();
      return (
        h.searchParams.set("select", c),
        i && f.append("Prefer", `count=${i}`),
        new si({
          method: o,
          url: h,
          headers: f,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(r, { count: e, defaultToNull: s = !0 } = {}) {
      var i;
      const o = "POST",
        { url: l, headers: c } = this.cloneRequestState();
      if (
        (e && c.append("Prefer", `count=${e}`),
        s || c.append("Prefer", "missing=default"),
        Array.isArray(r))
      ) {
        const h = r.reduce((f, m) => f.concat(Object.keys(m)), []);
        if (h.length > 0) {
          const f = [...new Set(h)].map((m) => `"${m}"`);
          l.searchParams.set("columns", f.join(","));
        }
      }
      return new si({
        method: o,
        url: l,
        headers: c,
        schema: this.schema,
        body: r,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      r,
      {
        onConflict: e,
        ignoreDuplicates: s = !1,
        count: i,
        defaultToNull: o = !0,
      } = {}
    ) {
      var l;
      const c = "POST",
        { url: h, headers: f } = this.cloneRequestState();
      if (
        (f.append("Prefer", `resolution=${s ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && h.searchParams.set("on_conflict", e),
        i && f.append("Prefer", `count=${i}`),
        o || f.append("Prefer", "missing=default"),
        Array.isArray(r))
      ) {
        const m = r.reduce((v, g) => v.concat(Object.keys(g)), []);
        if (m.length > 0) {
          const v = [...new Set(m)].map((g) => `"${g}"`);
          h.searchParams.set("columns", v.join(","));
        }
      }
      return new si({
        method: c,
        url: h,
        headers: f,
        schema: this.schema,
        body: r,
        fetch: (l = this.fetch) !== null && l !== void 0 ? l : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(r, { count: e } = {}) {
      var s;
      const i = "PATCH",
        { url: o, headers: l } = this.cloneRequestState();
      return (
        e && l.append("Prefer", `count=${e}`),
        new si({
          method: i,
          url: o,
          headers: l,
          schema: this.schema,
          body: r,
          fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: r } = {}) {
      var e;
      const s = "DELETE",
        { url: i, headers: o } = this.cloneRequestState();
      return (
        r && o.append("Prefer", `count=${r}`),
        new si({
          method: s,
          url: i,
          headers: o,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function la(r) {
  "@babel/helpers - typeof";
  return (
    (la =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    la(r)
  );
}
function X0(r, e) {
  if (la(r) != "object" || !r) return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var i = s.call(r, e);
    if (la(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Z0(r) {
  var e = X0(r, "string");
  return la(e) == "symbol" ? e : e + "";
}
function ew(r, e, s) {
  return (
    (e = Z0(e)) in r
      ? Object.defineProperty(r, e, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = s),
    r
  );
}
function Hf(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    (e &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(r, o).enumerable;
      })),
      s.push.apply(s, i));
  }
  return s;
}
function Ro(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Hf(Object(s), !0).forEach(function (i) {
          ew(r, i, s[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
        : Hf(Object(s)).forEach(function (i) {
            Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(s, i));
          });
  }
  return r;
}
var tw = class Xp {
  constructor(
    e,
    {
      headers: s = {},
      schema: i,
      fetch: o,
      timeout: l,
      urlLengthLimit: c = 8e3,
    } = {}
  ) {
    ((this.url = e),
      (this.headers = new Headers(s)),
      (this.schemaName = i),
      (this.urlLengthLimit = c));
    const h = o ?? globalThis.fetch;
    l !== void 0 && l > 0
      ? (this.fetch = (f, m) => {
          const v = new AbortController(),
            g = setTimeout(() => v.abort(), l),
            b = m == null ? void 0 : m.signal;
          if (b) {
            if (b.aborted) return (clearTimeout(g), h(f, m));
            const x = () => {
              (clearTimeout(g), v.abort());
            };
            return (
              b.addEventListener("abort", x, { once: !0 }),
              h(f, Ro(Ro({}, m), {}, { signal: v.signal })).finally(() => {
                (clearTimeout(g), b.removeEventListener("abort", x));
              })
            );
          }
          return h(f, Ro(Ro({}, m), {}, { signal: v.signal })).finally(() =>
            clearTimeout(g)
          );
        })
      : (this.fetch = h);
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string."
      );
    return new Q0(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(e) {
    return new Xp(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(e, s = {}, { head: i = !1, get: o = !1, count: l } = {}) {
    var c;
    let h;
    const f = new URL(`${this.url}/rpc/${e}`);
    let m;
    const v = (x) =>
        x !== null && typeof x == "object" && (!Array.isArray(x) || x.some(v)),
      g = i && Object.values(s).some(v);
    g
      ? ((h = "POST"), (m = s))
      : i || o
        ? ((h = i ? "HEAD" : "GET"),
          Object.entries(s)
            .filter(([x, _]) => _ !== void 0)
            .map(([x, _]) => [
              x,
              Array.isArray(_) ? `{${_.join(",")}}` : `${_}`,
            ])
            .forEach(([x, _]) => {
              f.searchParams.append(x, _);
            }))
        : ((h = "POST"), (m = s));
    const b = new Headers(this.headers);
    return (
      g
        ? b.set("Prefer", l ? `count=${l},return=minimal` : "return=minimal")
        : l && b.set("Prefer", `count=${l}`),
      new si({
        method: h,
        url: f,
        headers: b,
        schema: this.schemaName,
        body: m,
        fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class rw {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((e = navigator.userAgent) === null || e === void 0) &&
        e.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const s = globalThis.process;
    if (s) {
      const i = s.versions;
      if (i && i.node) {
        const o = i.node,
          l = parseInt(o.replace(/^v/, "").split(".")[0]);
        return l >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${l} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${l} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor) return e.constructor;
    let s = e.error || "WebSocket not supported in this environment.";
    throw (
      e.workaround &&
        (s += `

Suggested solution: ${e.workaround}`),
      new Error(s)
    );
  }
  static createWebSocket(e, s) {
    const i = this.getWebSocketConstructor();
    return new i(e, s);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const nw = "2.97.0",
  sw = `realtime-js/${nw}`,
  iw = "1.0.0",
  Zp = "2.0.0",
  Vf = Zp,
  sc = 1e4,
  aw = 1e3,
  ow = 100;
var Wn;
(function (r) {
  ((r[(r.connecting = 0)] = "connecting"),
    (r[(r.open = 1)] = "open"),
    (r[(r.closing = 2)] = "closing"),
    (r[(r.closed = 3)] = "closed"));
})(Wn || (Wn = {}));
var St;
(function (r) {
  ((r.closed = "closed"),
    (r.errored = "errored"),
    (r.joined = "joined"),
    (r.joining = "joining"),
    (r.leaving = "leaving"));
})(St || (St = {}));
var Mr;
(function (r) {
  ((r.close = "phx_close"),
    (r.error = "phx_error"),
    (r.join = "phx_join"),
    (r.reply = "phx_reply"),
    (r.leave = "phx_leave"),
    (r.access_token = "access_token"));
})(Mr || (Mr = {}));
var ic;
(function (r) {
  r.websocket = "websocket";
})(ic || (ic = {}));
var xs;
(function (r) {
  ((r.Connecting = "connecting"),
    (r.Open = "open"),
    (r.Closing = "closing"),
    (r.Closed = "closed"));
})(xs || (xs = {}));
class lw {
  constructor(e) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = e ?? []));
  }
  encode(e, s) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return s(this._binaryEncodeUserBroadcastPush(e));
    let i = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return s(JSON.stringify(i));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var s;
    return this._isArrayBuffer(
      (s = e.payload) === null || s === void 0 ? void 0 : s.payload
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var s, i;
    const o =
      (i = (s = e.payload) === null || s === void 0 ? void 0 : s.payload) !==
        null && i !== void 0
        ? i
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, o);
  }
  _encodeJsonUserBroadcastPush(e) {
    var s, i;
    const o =
        (i = (s = e.payload) === null || s === void 0 ? void 0 : s.payload) !==
          null && i !== void 0
          ? i
          : {},
      c = new TextEncoder().encode(JSON.stringify(o)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, c);
  }
  _encodeUserBroadcastPush(e, s, i) {
    var o, l;
    const c = e.topic,
      h = (o = e.ref) !== null && o !== void 0 ? o : "",
      f = (l = e.join_ref) !== null && l !== void 0 ? l : "",
      m = e.payload.event,
      v = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      g = Object.keys(v).length === 0 ? "" : JSON.stringify(v);
    if (f.length > 255)
      throw new Error(`joinRef length ${f.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`ref length ${h.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`topic length ${c.length} exceeds maximum of 255`);
    if (m.length > 255)
      throw new Error(`userEvent length ${m.length} exceeds maximum of 255`);
    if (g.length > 255)
      throw new Error(`metadata length ${g.length} exceeds maximum of 255`);
    const b =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        f.length +
        h.length +
        c.length +
        m.length +
        g.length,
      x = new ArrayBuffer(this.HEADER_LENGTH + b);
    let _ = new DataView(x),
      j = 0;
    (_.setUint8(j++, this.KINDS.userBroadcastPush),
      _.setUint8(j++, f.length),
      _.setUint8(j++, h.length),
      _.setUint8(j++, c.length),
      _.setUint8(j++, m.length),
      _.setUint8(j++, g.length),
      _.setUint8(j++, s),
      Array.from(f, (P) => _.setUint8(j++, P.charCodeAt(0))),
      Array.from(h, (P) => _.setUint8(j++, P.charCodeAt(0))),
      Array.from(c, (P) => _.setUint8(j++, P.charCodeAt(0))),
      Array.from(m, (P) => _.setUint8(j++, P.charCodeAt(0))),
      Array.from(g, (P) => _.setUint8(j++, P.charCodeAt(0))));
    var k = new Uint8Array(x.byteLength + i.byteLength);
    return (
      k.set(new Uint8Array(x), 0),
      k.set(new Uint8Array(i), x.byteLength),
      k.buffer
    );
  }
  decode(e, s) {
    if (this._isArrayBuffer(e)) {
      let i = this._binaryDecode(e);
      return s(i);
    }
    if (typeof e == "string") {
      const i = JSON.parse(e),
        [o, l, c, h, f] = i;
      return s({ join_ref: o, ref: l, topic: c, event: h, payload: f });
    }
    return s({});
  }
  _binaryDecode(e) {
    const s = new DataView(e),
      i = s.getUint8(0),
      o = new TextDecoder();
    switch (i) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, s, o);
    }
  }
  _decodeUserBroadcast(e, s, i) {
    const o = s.getUint8(1),
      l = s.getUint8(2),
      c = s.getUint8(3),
      h = s.getUint8(4);
    let f = this.HEADER_LENGTH + 4;
    const m = i.decode(e.slice(f, f + o));
    f = f + o;
    const v = i.decode(e.slice(f, f + l));
    f = f + l;
    const g = i.decode(e.slice(f, f + c));
    f = f + c;
    const b = e.slice(f, e.byteLength),
      x = h === this.JSON_ENCODING ? JSON.parse(i.decode(b)) : b,
      _ = { type: this.BROADCAST_EVENT, event: v, payload: x };
    return (
      c > 0 && (_.meta = JSON.parse(g)),
      {
        join_ref: null,
        ref: null,
        topic: m,
        event: this.BROADCAST_EVENT,
        payload: _,
      }
    );
  }
  _isArrayBuffer(e) {
    var s;
    return (
      e instanceof ArrayBuffer ||
      ((s = e == null ? void 0 : e.constructor) === null || s === void 0
        ? void 0
        : s.name) === "ArrayBuffer"
    );
  }
  _pick(e, s) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([i]) => s.includes(i)));
  }
}
class em {
  constructor(e, s) {
    ((this.callback = e),
      (this.timerCalc = s),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = s));
  }
  reset() {
    ((this.tries = 0), clearTimeout(this.timer), (this.timer = void 0));
  }
  scheduleTimeout() {
    (clearTimeout(this.timer),
      (this.timer = setTimeout(
        () => {
          ((this.tries = this.tries + 1), this.callback());
        },
        this.timerCalc(this.tries + 1)
      )));
  }
}
var Qe;
(function (r) {
  ((r.abstime = "abstime"),
    (r.bool = "bool"),
    (r.date = "date"),
    (r.daterange = "daterange"),
    (r.float4 = "float4"),
    (r.float8 = "float8"),
    (r.int2 = "int2"),
    (r.int4 = "int4"),
    (r.int4range = "int4range"),
    (r.int8 = "int8"),
    (r.int8range = "int8range"),
    (r.json = "json"),
    (r.jsonb = "jsonb"),
    (r.money = "money"),
    (r.numeric = "numeric"),
    (r.oid = "oid"),
    (r.reltime = "reltime"),
    (r.text = "text"),
    (r.time = "time"),
    (r.timestamp = "timestamp"),
    (r.timestamptz = "timestamptz"),
    (r.timetz = "timetz"),
    (r.tsrange = "tsrange"),
    (r.tstzrange = "tstzrange"));
})(Qe || (Qe = {}));
const qf = (r, e, s = {}) => {
    var i;
    const o = (i = s.skipTypes) !== null && i !== void 0 ? i : [];
    return e
      ? Object.keys(e).reduce((l, c) => ((l[c] = uw(c, r, e, o)), l), {})
      : {};
  },
  uw = (r, e, s, i) => {
    const o = e.find((h) => h.name === r),
      l = o == null ? void 0 : o.type,
      c = s[r];
    return l && !i.includes(l) ? tm(l, c) : ac(c);
  },
  tm = (r, e) => {
    if (r.charAt(0) === "_") {
      const s = r.slice(1, r.length);
      return fw(e, s);
    }
    switch (r) {
      case Qe.bool:
        return cw(e);
      case Qe.float4:
      case Qe.float8:
      case Qe.int2:
      case Qe.int4:
      case Qe.int8:
      case Qe.numeric:
      case Qe.oid:
        return dw(e);
      case Qe.json:
      case Qe.jsonb:
        return hw(e);
      case Qe.timestamp:
        return pw(e);
      case Qe.abstime:
      case Qe.date:
      case Qe.daterange:
      case Qe.int4range:
      case Qe.int8range:
      case Qe.money:
      case Qe.reltime:
      case Qe.text:
      case Qe.time:
      case Qe.timestamptz:
      case Qe.timetz:
      case Qe.tsrange:
      case Qe.tstzrange:
        return ac(e);
      default:
        return ac(e);
    }
  },
  ac = (r) => r,
  cw = (r) => {
    switch (r) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return r;
    }
  },
  dw = (r) => {
    if (typeof r == "string") {
      const e = parseFloat(r);
      if (!Number.isNaN(e)) return e;
    }
    return r;
  },
  hw = (r) => {
    if (typeof r == "string")
      try {
        return JSON.parse(r);
      } catch {
        return r;
      }
    return r;
  },
  fw = (r, e) => {
    if (typeof r != "string") return r;
    const s = r.length - 1,
      i = r[s];
    if (r[0] === "{" && i === "}") {
      let l;
      const c = r.slice(1, s);
      try {
        l = JSON.parse("[" + c + "]");
      } catch {
        l = c ? c.split(",") : [];
      }
      return l.map((h) => tm(e, h));
    }
    return r;
  },
  pw = (r) => (typeof r == "string" ? r.replace(" ", "T") : r),
  rm = (r) => {
    const e = new URL(r);
    return (
      (e.protocol = e.protocol.replace(/^ws/i, "http")),
      (e.pathname = e.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      e.pathname === "" || e.pathname === "/"
        ? (e.pathname = "/api/broadcast")
        : (e.pathname = e.pathname + "/api/broadcast"),
      e.href
    );
  };
class Hu {
  constructor(e, s, i = {}, o = sc) {
    ((this.channel = e),
      (this.event = s),
      (this.payload = i),
      (this.timeout = o),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null));
  }
  resend(e) {
    ((this.timeout = e),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send());
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, s) {
    var i;
    return (
      this._hasReceived(e) &&
        s(
          (i = this.receivedResp) === null || i === void 0 ? void 0 : i.response
        ),
      this.recHooks.push({ status: e, callback: s }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const e = (s) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = s),
        this._matchReceive(s));
    };
    (this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(e, s) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: s });
  }
  destroy() {
    (this._cancelRefEvent(), this._cancelTimeout());
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    (clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0));
  }
  _matchReceive({ status: e, response: s }) {
    this.recHooks.filter((i) => i.status === e).forEach((i) => i.callback(s));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Kf;
(function (r) {
  ((r.SYNC = "sync"), (r.JOIN = "join"), (r.LEAVE = "leave"));
})(Kf || (Kf = {}));
class na {
  constructor(e, s) {
    ((this.channel = e),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = {
        onJoin: () => {},
        onLeave: () => {},
        onSync: () => {},
      }));
    const i = (s == null ? void 0 : s.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(i.state, {}, (o) => {
      const { onJoin: l, onLeave: c, onSync: h } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = na.syncState(this.state, o, l, c)),
        this.pendingDiffs.forEach((f) => {
          this.state = na.syncDiff(this.state, f, l, c);
        }),
        (this.pendingDiffs = []),
        h());
    }),
      this.channel._on(i.diff, {}, (o) => {
        const { onJoin: l, onLeave: c, onSync: h } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(o)
          : ((this.state = na.syncDiff(this.state, o, l, c)), h());
      }),
      this.onJoin((o, l, c) => {
        this.channel._trigger("presence", {
          event: "join",
          key: o,
          currentPresences: l,
          newPresences: c,
        });
      }),
      this.onLeave((o, l, c) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: o,
          currentPresences: l,
          leftPresences: c,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(e, s, i, o) {
    const l = this.cloneDeep(e),
      c = this.transformState(s),
      h = {},
      f = {};
    return (
      this.map(l, (m, v) => {
        c[m] || (f[m] = v);
      }),
      this.map(c, (m, v) => {
        const g = l[m];
        if (g) {
          const b = v.map((k) => k.presence_ref),
            x = g.map((k) => k.presence_ref),
            _ = v.filter((k) => x.indexOf(k.presence_ref) < 0),
            j = g.filter((k) => b.indexOf(k.presence_ref) < 0);
          (_.length > 0 && (h[m] = _), j.length > 0 && (f[m] = j));
        } else h[m] = v;
      }),
      this.syncDiff(l, { joins: h, leaves: f }, i, o)
    );
  }
  static syncDiff(e, s, i, o) {
    const { joins: l, leaves: c } = {
      joins: this.transformState(s.joins),
      leaves: this.transformState(s.leaves),
    };
    return (
      i || (i = () => {}),
      o || (o = () => {}),
      this.map(l, (h, f) => {
        var m;
        const v = (m = e[h]) !== null && m !== void 0 ? m : [];
        if (((e[h] = this.cloneDeep(f)), v.length > 0)) {
          const g = e[h].map((x) => x.presence_ref),
            b = v.filter((x) => g.indexOf(x.presence_ref) < 0);
          e[h].unshift(...b);
        }
        i(h, v, f);
      }),
      this.map(c, (h, f) => {
        let m = e[h];
        if (!m) return;
        const v = f.map((g) => g.presence_ref);
        ((m = m.filter((g) => v.indexOf(g.presence_ref) < 0)),
          (e[h] = m),
          o(h, m, f),
          m.length === 0 && delete e[h]);
      }),
      e
    );
  }
  static map(e, s) {
    return Object.getOwnPropertyNames(e).map((i) => s(i, e[i]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((s, i) => {
        const o = e[i];
        return (
          "metas" in o
            ? (s[i] = o.metas.map(
                (l) => (
                  (l.presence_ref = l.phx_ref),
                  delete l.phx_ref,
                  delete l.phx_ref_prev,
                  l
                )
              ))
            : (s[i] = o),
          s
        );
      }, {})
    );
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Yf;
(function (r) {
  ((r.ALL = "*"),
    (r.INSERT = "INSERT"),
    (r.UPDATE = "UPDATE"),
    (r.DELETE = "DELETE"));
})(Yf || (Yf = {}));
var sa;
(function (r) {
  ((r.BROADCAST = "broadcast"),
    (r.PRESENCE = "presence"),
    (r.POSTGRES_CHANGES = "postgres_changes"),
    (r.SYSTEM = "system"));
})(sa || (sa = {}));
var yn;
(function (r) {
  ((r.SUBSCRIBED = "SUBSCRIBED"),
    (r.TIMED_OUT = "TIMED_OUT"),
    (r.CLOSED = "CLOSED"),
    (r.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(yn || (yn = {}));
class li {
  constructor(e, s = { config: {} }, i) {
    var o, l;
    if (
      ((this.topic = e),
      (this.params = s),
      (this.socket = i),
      (this.bindings = {}),
      (this.state = St.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = e.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        s.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Hu(this, Mr.join, this.params, this.timeout)),
      (this.rejoinTimer = new em(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        ((this.state = St.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((c) => c.send()),
          (this.pushBuffer = []));
      }),
      this._onClose(() => {
        (this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = St.closed),
          this.socket._remove(this));
      }),
      this._onError((c) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, c),
          (this.state = St.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = St.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (c) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, c),
          (this.state = St.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Mr.reply, {}, (c, h) => {
        this._trigger(this._replyEventName(h), c);
      }),
      (this.presence = new na(this)),
      (this.broadcastEndpointURL = rm(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (l =
            (o = this.params.config) === null || o === void 0
              ? void 0
              : o.broadcast) === null || l === void 0
        ) &&
        l.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(e, s = this.timeout) {
    var i, o, l;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == St.closed)
    ) {
      const {
          config: { broadcast: c, presence: h, private: f },
        } = this.params,
        m =
          (o =
            (i = this.bindings.postgres_changes) === null || i === void 0
              ? void 0
              : i.map((x) => x.filter)) !== null && o !== void 0
            ? o
            : [],
        v =
          (!!this.bindings[sa.PRESENCE] &&
            this.bindings[sa.PRESENCE].length > 0) ||
          ((l = this.params.config.presence) === null || l === void 0
            ? void 0
            : l.enabled) === !0,
        g = {},
        b = {
          broadcast: c,
          presence: Object.assign(Object.assign({}, h), { enabled: v }),
          postgres_changes: m,
          private: f,
        };
      (this.socket.accessTokenValue &&
        (g.access_token = this.socket.accessTokenValue),
        this._onError((x) => (e == null ? void 0 : e(yn.CHANNEL_ERROR, x))),
        this._onClose(() => (e == null ? void 0 : e(yn.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: b }, g)),
        (this.joinedOnce = !0),
        this._rejoin(s),
        this.joinPush
          .receive("ok", async ({ postgres_changes: x }) => {
            var _;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              x === void 0)
            ) {
              e == null || e(yn.SUBSCRIBED);
              return;
            } else {
              const j = this.bindings.postgres_changes,
                k =
                  (_ = j == null ? void 0 : j.length) !== null && _ !== void 0
                    ? _
                    : 0,
                P = [];
              for (let T = 0; T < k; T++) {
                const O = j[T],
                  {
                    filter: { event: F, schema: q, table: Q, filter: I },
                  } = O,
                  Z = x && x[T];
                if (
                  Z &&
                  Z.event === F &&
                  li.isFilterValueEqual(Z.schema, q) &&
                  li.isFilterValueEqual(Z.table, Q) &&
                  li.isFilterValueEqual(Z.filter, I)
                )
                  P.push(Object.assign(Object.assign({}, O), { id: Z.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = St.errored),
                    e == null ||
                      e(
                        yn.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = P), e && e(yn.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (x) => {
            ((this.state = St.errored),
              e == null ||
                e(
                  yn.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(x).join(", ") || "error")
                  )
                ));
          })
          .receive("timeout", () => {
            e == null || e(yn.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, s = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: e },
      s.timeout || this.timeout
    );
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, s, i) {
    return (
      this.state === St.joined &&
        e === sa.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(e, s, i)
    );
  }
  async httpSend(e, s, i = {}) {
    var o;
    if (s == null) return Promise.reject("Payload is required for httpSend()");
    const l = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (l.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const c = {
        method: "POST",
        headers: l,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: e,
              payload: s,
              private: this.private,
            },
          ],
        }),
      },
      h = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        c,
        (o = i.timeout) !== null && o !== void 0 ? o : this.timeout
      );
    if (h.status === 202) return { success: !0 };
    let f = h.statusText;
    try {
      const m = await h.json();
      f = m.error || m.message || f;
    } catch {}
    return Promise.reject(new Error(f));
  }
  async send(e, s = {}) {
    var i, o;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery."
      );
      const { event: l, payload: c } = e,
        h = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (h.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const f = {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: l,
              payload: c,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const m = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          f,
          (i = s.timeout) !== null && i !== void 0 ? i : this.timeout
        );
        return (
          await ((o = m.body) === null || o === void 0 ? void 0 : o.cancel()),
          m.ok ? "ok" : "error"
        );
      } catch (m) {
        return m.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((l) => {
        var c, h, f;
        const m = this._push(e.type, e, s.timeout || this.timeout);
        (e.type === "broadcast" &&
          !(
            !(
              (f =
                (h =
                  (c = this.params) === null || c === void 0
                    ? void 0
                    : c.config) === null || h === void 0
                  ? void 0
                  : h.broadcast) === null || f === void 0
            ) && f.ack
          ) &&
          l("ok"),
          m.receive("ok", () => l("ok")),
          m.receive("error", () => l("error")),
          m.receive("timeout", () => l("timed out")));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = St.leaving;
    const s = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Mr.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let i = null;
    return new Promise((o) => {
      ((i = new Hu(this, Mr.leave, {}, e)),
        i
          .receive("ok", () => {
            (s(), o("ok"));
          })
          .receive("timeout", () => {
            (s(), o("timed out"));
          })
          .receive("error", () => {
            o("error");
          }),
        i.send(),
        this._canPush() || i.trigger("ok", {}));
    }).finally(() => {
      i == null || i.destroy();
    });
  }
  teardown() {
    (this.pushBuffer.forEach((e) => e.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = St.closed),
      (this.bindings = {}));
  }
  async _fetchWithTimeout(e, s, i) {
    const o = new AbortController(),
      l = setTimeout(() => o.abort(), i),
      c = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, s), { signal: o.signal })
      );
    return (clearTimeout(l), c);
  }
  _push(e, s, i = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let o = new Hu(this, e, s, i);
    return (this._canPush() ? o.send() : this._addToPushBuffer(o), o);
  }
  _addToPushBuffer(e) {
    if (
      (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > ow)
    ) {
      const s = this.pushBuffer.shift();
      s &&
        (s.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${s.event}`,
          s.payload
        ));
    }
  }
  _onMessage(e, s, i) {
    return s;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, s, i) {
    var o, l;
    const c = e.toLocaleLowerCase(),
      { close: h, error: f, leave: m, join: v } = Mr;
    if (i && [h, f, m, v].indexOf(c) >= 0 && i !== this._joinRef()) return;
    let b = this._onMessage(c, s, i);
    if (s && !b)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(c)
      ? (o = this.bindings.postgres_changes) === null ||
        o === void 0 ||
        o
          .filter((x) => {
            var _, j, k;
            return (
              ((_ = x.filter) === null || _ === void 0 ? void 0 : _.event) ===
                "*" ||
              ((k =
                (j = x.filter) === null || j === void 0 ? void 0 : j.event) ===
                null || k === void 0
                ? void 0
                : k.toLocaleLowerCase()) === c
            );
          })
          .map((x) => x.callback(b, i))
      : (l = this.bindings[c]) === null ||
        l === void 0 ||
        l
          .filter((x) => {
            var _, j, k, P, T, O;
            if (["broadcast", "presence", "postgres_changes"].includes(c))
              if ("id" in x) {
                const F = x.id,
                  q =
                    (_ = x.filter) === null || _ === void 0 ? void 0 : _.event;
                return (
                  F &&
                  ((j = s.ids) === null || j === void 0
                    ? void 0
                    : j.includes(F)) &&
                  (q === "*" ||
                    (q == null ? void 0 : q.toLocaleLowerCase()) ===
                      ((k = s.data) === null || k === void 0
                        ? void 0
                        : k.type.toLocaleLowerCase()))
                );
              } else {
                const F =
                  (T =
                    (P = x == null ? void 0 : x.filter) === null || P === void 0
                      ? void 0
                      : P.event) === null || T === void 0
                    ? void 0
                    : T.toLocaleLowerCase();
                return (
                  F === "*" ||
                  F ===
                    ((O = s == null ? void 0 : s.event) === null || O === void 0
                      ? void 0
                      : O.toLocaleLowerCase())
                );
              }
            else return x.type.toLocaleLowerCase() === c;
          })
          .map((x) => {
            if (typeof b == "object" && "ids" in b) {
              const _ = b.data,
                {
                  schema: j,
                  table: k,
                  commit_timestamp: P,
                  type: T,
                  errors: O,
                } = _;
              b = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: j,
                    table: k,
                    commit_timestamp: P,
                    eventType: T,
                    new: {},
                    old: {},
                    errors: O,
                  }
                ),
                this._getPayloadRecords(_)
              );
            }
            x.callback(b, i);
          });
  }
  _isClosed() {
    return this.state === St.closed;
  }
  _isJoined() {
    return this.state === St.joined;
  }
  _isJoining() {
    return this.state === St.joining;
  }
  _isLeaving() {
    return this.state === St.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, s, i) {
    const o = e.toLocaleLowerCase(),
      l = { type: o, filter: s, callback: i };
    return (
      this.bindings[o] ? this.bindings[o].push(l) : (this.bindings[o] = [l]),
      this
    );
  }
  _off(e, s) {
    const i = e.toLocaleLowerCase();
    return (
      this.bindings[i] &&
        (this.bindings[i] = this.bindings[i].filter((o) => {
          var l;
          return !(
            ((l = o.type) === null || l === void 0
              ? void 0
              : l.toLocaleLowerCase()) === i && li.isEqual(o.filter, s)
          );
        })),
      this
    );
  }
  static isEqual(e, s) {
    if (Object.keys(e).length !== Object.keys(s).length) return !1;
    for (const i in e) if (e[i] !== s[i]) return !1;
    return !0;
  }
  static isFilterValueEqual(e, s) {
    return (e ?? void 0) === (s ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(e) {
    this._on(Mr.close, {}, e);
  }
  _onError(e) {
    this._on(Mr.error, {}, (s) => e(s));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = St.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const s = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (s.new = qf(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (s.old = qf(e.columns, e.old_record)),
      s
    );
  }
}
const Vu = () => {},
  jo = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  mw = [1e3, 2e3, 5e3, 1e4],
  gw = 1e4,
  yw = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class vw {
  constructor(e, s) {
    var i;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = sc),
      (this.transport = null),
      (this.heartbeatIntervalMs = jo.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = Vu),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = Vf),
      (this.logger = Vu),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new lw()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (o) =>
        o ? (...l) => o(...l) : (...l) => fetch(...l)),
      !(
        !((i = s == null ? void 0 : s.params) === null || i === void 0) &&
        i.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = s.params.apikey),
      (this.endPoint = `${e}/${ic.websocket}`),
      (this.httpEndpoint = rm(e)),
      this._initializeOptions(s),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(s == null ? void 0 : s.fetch)));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = rw.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const s = e.message;
          throw s.includes("Node.js")
            ? new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${s}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn })
    );
  }
  disconnect(e, s) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const i = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(i), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (e ? this.conn.close(e, s ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const s = await e.unsubscribe();
    return (this.channels.length === 0 && this.disconnect(), s);
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((s) => s.unsubscribe()));
    return ((this.channels = []), this.disconnect(), e);
  }
  log(e, s, i) {
    this.logger(e, s, i);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Wn.connecting:
        return xs.Connecting;
      case Wn.open:
        return xs.Open;
      case Wn.closing:
        return xs.Closing;
      default:
        return xs.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === xs.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, s = { config: {} }) {
    const i = `realtime:${e}`,
      o = this.getChannels().find((l) => l.topic === i);
    if (o) return o;
    {
      const l = new li(`realtime:${e}`, s, this);
      return (this.channels.push(l), l);
    }
  }
  push(e) {
    const { topic: s, event: i, payload: o, ref: l } = e,
      c = () => {
        this.encode(e, (h) => {
          var f;
          (f = this.conn) === null || f === void 0 || f.send(h);
        });
      };
    (this.log("push", `${s} ${i} (${l})`, o),
      this.isConnected() ? c() : this.sendBuffer.push(c));
  }
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (s) {
        this.log("error", "error in heartbeat callback", s);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      ((this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        ));
      try {
        this.heartbeatCallback("timeout");
      } catch (s) {
        this.log("error", "error in heartbeat callback", s);
      }
      ((this._wasManualDisconnect = !1),
        (e = this.conn) === null ||
          e === void 0 ||
          e.close(aw, "heartbeat timeout"),
        setTimeout(() => {
          var s;
          this.isConnected() ||
            (s = this.reconnectTimer) === null ||
            s === void 0 ||
            s.scheduleTimeout();
        }, jo.HEARTBEAT_TIMEOUT_FALLBACK));
      return;
    }
    ((this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }));
    try {
      this.heartbeatCallback("sent");
    } catch (s) {
      this.log("error", "error in heartbeat callback", s);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
  }
  _makeRef() {
    let e = this.ref + 1;
    return (
      e === this.ref ? (this.ref = 0) : (this.ref = e),
      this.ref.toString()
    );
  }
  _leaveOpenTopic(e) {
    let s = this.channels.find(
      (i) => i.topic === e && (i._isJoined() || i._isJoining())
    );
    s &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      s.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((s) => s.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, (s) => {
      if (
        s.topic === "phoenix" &&
        s.event === "phx_reply" &&
        s.ref &&
        s.ref === this.pendingHeartbeatRef
      ) {
        const m = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(s.payload.status === "ok" ? "ok" : "error", m);
        } catch (v) {
          this.log("error", "error in heartbeat callback", v);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: i, event: o, payload: l, ref: c } = s,
        h = c ? `(${c})` : "",
        f = l.status || "";
      (this.log("receive", `${f} ${i} ${o} ${h}`.trim(), l),
        this.channels
          .filter((m) => m._isMember(i))
          .forEach((m) => m._trigger(o, l, c)),
        this._triggerStateCallbacks("message", s));
    });
  }
  _clearTimer(e) {
    var s;
    e === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : e === "reconnect" &&
        ((s = this.reconnectTimer) === null || s === void 0 || s.reset());
  }
  _clearAllTimers() {
    (this._clearTimer("heartbeat"), this._clearTimer("reconnect"));
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (e) => this._onConnError(e)),
      (this.conn.onmessage = (e) => this._onConnMessage(e)),
      (this.conn.onclose = (e) => this._onConnClose(e)),
      this.conn.readyState === Wn.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Wn.open ||
        this.conn.readyState === Wn.connecting
      )
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      ((this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null));
    }
    (this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((e) => e.teardown()));
  }
  _onConnOpen() {
    (this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          this.flushSendBuffer();
        })
        .catch((s) => {
          (this.log("error", "error waiting for auth on connect", s),
            this.flushSendBuffer());
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open"));
  }
  _startHeartbeat() {
    (this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs
      )));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(e)),
      (this.workerRef.onerror = (s) => {
        (this.log("worker", "worker error", s.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (s) => {
        s.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(e) {
    var s;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", e),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (s = this.reconnectTimer) === null ||
        s === void 0 ||
        s.scheduleTimeout(),
      this._triggerStateCallbacks("close", e));
  }
  _onConnError(e) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${e}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", e));
    try {
      this.heartbeatCallback("error");
    } catch (s) {
      this.log("error", "error in heartbeat callback", s);
    }
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Mr.error));
  }
  _appendParams(e, s) {
    if (Object.keys(s).length === 0) return e;
    const i = e.match(/\?/) ? "&" : "?",
      o = new URLSearchParams(s);
    return `${e}${i}${o}`;
  }
  _workerObjectUrl(e) {
    let s;
    if (e) s = e;
    else {
      const i = new Blob([yw], { type: "application/javascript" });
      s = URL.createObjectURL(i);
    }
    return s;
  }
  _setConnectionState(e, s = !1) {
    ((this._connectionState = e),
      e === "connecting"
        ? (this._wasManualDisconnect = !1)
        : e === "disconnecting" && (this._wasManualDisconnect = s));
  }
  async _performAuth(e = null) {
    let s,
      i = !1;
    if (e) ((s = e), (i = !0));
    else if (this.accessToken)
      try {
        s = await this.accessToken();
      } catch (o) {
        (this.log("error", "Error fetching access token from callback", o),
          (s = this.accessTokenValue));
      }
    else s = this.accessTokenValue;
    (i
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != s &&
        ((this.accessTokenValue = s),
        this.channels.forEach((o) => {
          const l = { access_token: s, version: sw };
          (s && o.updateJoinPayload(l),
            o.joinedOnce &&
              o._isJoined() &&
              o._push(Mr.access_token, { access_token: s }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((s) => {
        this.log("error", `Error setting auth in ${e}`, s);
      });
  }
  _triggerStateCallbacks(e, s) {
    try {
      this.stateChangeCallbacks[e].forEach((i) => {
        try {
          i(s);
        } catch (o) {
          this.log("error", `error in ${e} callback`, o);
        }
      });
    } catch (i) {
      this.log("error", `error triggering ${e} callbacks`, i);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new em(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, jo.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var s, i, o, l, c, h, f, m, v, g, b, x;
    switch (
      ((this.transport =
        (s = e == null ? void 0 : e.transport) !== null && s !== void 0
          ? s
          : null),
      (this.timeout =
        (i = e == null ? void 0 : e.timeout) !== null && i !== void 0 ? i : sc),
      (this.heartbeatIntervalMs =
        (o = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        o !== void 0
          ? o
          : jo.HEARTBEAT_INTERVAL),
      (this.worker =
        (l = e == null ? void 0 : e.worker) !== null && l !== void 0 ? l : !1),
      (this.accessToken =
        (c = e == null ? void 0 : e.accessToken) !== null && c !== void 0
          ? c
          : null),
      (this.heartbeatCallback =
        (h = e == null ? void 0 : e.heartbeatCallback) !== null && h !== void 0
          ? h
          : Vu),
      (this.vsn =
        (f = e == null ? void 0 : e.vsn) !== null && f !== void 0 ? f : Vf),
      e != null && e.params && (this.params = e.params),
      e != null && e.logger && (this.logger = e.logger),
      ((e != null && e.logLevel) || (e != null && e.log_level)) &&
        ((this.logLevel = e.logLevel || e.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (m = e == null ? void 0 : e.reconnectAfterMs) !== null && m !== void 0
          ? m
          : (_) => mw[_ - 1] || gw),
      this.vsn)
    ) {
      case iw:
        ((this.encode =
          (v = e == null ? void 0 : e.encode) !== null && v !== void 0
            ? v
            : (_, j) => j(JSON.stringify(_))),
          (this.decode =
            (g = e == null ? void 0 : e.decode) !== null && g !== void 0
              ? g
              : (_, j) => j(JSON.parse(_))));
        break;
      case Zp:
        ((this.encode =
          (b = e == null ? void 0 : e.encode) !== null && b !== void 0
            ? b
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (x = e == null ? void 0 : e.decode) !== null && x !== void 0
              ? x
              : this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
var ua = class extends Error {
  constructor(r, e) {
    var s;
    (super(r),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((s = e.icebergType) == null ? void 0 : s.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function ww(r, e, s) {
  const i = new URL(e, r);
  if (s)
    for (const [o, l] of Object.entries(s))
      l !== void 0 && i.searchParams.set(o, l);
  return i.toString();
}
async function xw(r) {
  return !r || r.type === "none"
    ? {}
    : r.type === "bearer"
      ? { Authorization: `Bearer ${r.token}` }
      : r.type === "header"
        ? { [r.name]: r.value }
        : r.type === "custom"
          ? await r.getHeaders()
          : {};
}
function bw(r) {
  const e = r.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: s, path: i, query: o, body: l, headers: c }) {
      const h = ww(r.baseUrl, i, o),
        f = await xw(r.auth),
        m = await e(h, {
          method: s,
          headers: {
            ...(l ? { "Content-Type": "application/json" } : {}),
            ...f,
            ...c,
          },
          body: l ? JSON.stringify(l) : void 0,
        }),
        v = await m.text(),
        g = (m.headers.get("content-type") || "").includes("application/json"),
        b = g && v ? JSON.parse(v) : v;
      if (!m.ok) {
        const x = g ? b : void 0,
          _ = x == null ? void 0 : x.error;
        throw new ua(
          (_ == null ? void 0 : _.message) ??
            `Request failed with status ${m.status}`,
          {
            status: m.status,
            icebergType: _ == null ? void 0 : _.type,
            icebergCode: _ == null ? void 0 : _.code,
            details: x,
          }
        );
      }
      return { status: m.status, headers: m.headers, data: b };
    },
  };
}
function No(r) {
  return r.join("");
}
var _w = class {
  constructor(r, e = "") {
    ((this.client = r), (this.prefix = e));
  }
  async listNamespaces(r) {
    const e = r ? { parent: No(r.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((i) => ({ namespace: i }));
  }
  async createNamespace(r, e) {
    const s = {
      namespace: r.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: s,
      })
    ).data;
  }
  async dropNamespace(r) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${No(r.namespace)}`,
    });
  }
  async loadNamespaceMetadata(r) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${No(r.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(r) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${No(r.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof ua && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(r, e) {
    try {
      return await this.createNamespace(r, e);
    } catch (s) {
      if (s instanceof ua && s.status === 409) return;
      throw s;
    }
  }
};
function Js(r) {
  return r.join("");
}
var kw = class {
    constructor(r, e = "", s) {
      ((this.client = r), (this.prefix = e), (this.accessDelegation = s));
    }
    async listTables(r) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(r, e) {
      const s = {};
      return (
        this.accessDelegation &&
          (s["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables`,
            body: e,
            headers: s,
          })
        ).data.metadata
      );
    }
    async updateTable(r, e) {
      const s = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables/${r.name}`,
        body: e,
      });
      return {
        "metadata-location": s.data["metadata-location"],
        metadata: s.data.metadata,
      };
    }
    async dropTable(r, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables/${r.name}`,
        query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) },
      });
    }
    async loadTable(r) {
      const e = {};
      return (
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables/${r.name}`,
            headers: e,
          })
        ).data.metadata
      );
    }
    async tableExists(r) {
      const e = {};
      this.accessDelegation &&
        (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Js(r.namespace)}/tables/${r.name}`,
            headers: e,
          }),
          !0
        );
      } catch (s) {
        if (s instanceof ua && s.status === 404) return !1;
        throw s;
      }
    }
    async createTableIfNotExists(r, e) {
      try {
        return await this.createTable(r, e);
      } catch (s) {
        if (s instanceof ua && s.status === 409)
          return await this.loadTable({ namespace: r.namespace, name: e.name });
        throw s;
      }
    }
  },
  Sw = class {
    constructor(r) {
      var i;
      let e = "v1";
      r.catalogName && (e += `/${r.catalogName}`);
      const s = r.baseUrl.endsWith("/") ? r.baseUrl : `${r.baseUrl}/`;
      ((this.client = bw({ baseUrl: s, auth: r.auth, fetchImpl: r.fetch })),
        (this.accessDelegation =
          (i = r.accessDelegation) == null ? void 0 : i.join(",")),
        (this.namespaceOps = new _w(this.client, e)),
        (this.tableOps = new kw(this.client, e, this.accessDelegation)));
    }
    async listNamespaces(r) {
      return this.namespaceOps.listNamespaces(r);
    }
    async createNamespace(r, e) {
      return this.namespaceOps.createNamespace(r, e);
    }
    async dropNamespace(r) {
      await this.namespaceOps.dropNamespace(r);
    }
    async loadNamespaceMetadata(r) {
      return this.namespaceOps.loadNamespaceMetadata(r);
    }
    async listTables(r) {
      return this.tableOps.listTables(r);
    }
    async createTable(r, e) {
      return this.tableOps.createTable(r, e);
    }
    async updateTable(r, e) {
      return this.tableOps.updateTable(r, e);
    }
    async dropTable(r, e) {
      await this.tableOps.dropTable(r, e);
    }
    async loadTable(r) {
      return this.tableOps.loadTable(r);
    }
    async namespaceExists(r) {
      return this.namespaceOps.namespaceExists(r);
    }
    async tableExists(r) {
      return this.tableOps.tableExists(r);
    }
    async createNamespaceIfNotExists(r, e) {
      return this.namespaceOps.createNamespaceIfNotExists(r, e);
    }
    async createTableIfNotExists(r, e) {
      return this.tableOps.createTableIfNotExists(r, e);
    }
  },
  Jo = class extends Error {
    constructor(r, e = "storage", s, i) {
      (super(r),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = s),
        (this.statusCode = i));
    }
  };
function Qo(r) {
  return typeof r == "object" && r !== null && "__isStorageError" in r;
}
var Po = class extends Jo {
    constructor(r, e, s, i = "storage") {
      (super(r, i, e, s),
        (this.name =
          i === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = s));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  nm = class extends Jo {
    constructor(r, e, s = "storage") {
      (super(r, s),
        (this.name =
          s === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e));
    }
  };
const Ew = (r) => (r ? (...e) => r(...e) : (...e) => fetch(...e)),
  Tw = (r) => {
    if (typeof r != "object" || r === null) return !1;
    const e = Object.getPrototypeOf(r);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  oc = (r) => {
    if (Array.isArray(r)) return r.map((s) => oc(s));
    if (typeof r == "function" || r !== Object(r)) return r;
    const e = {};
    return (
      Object.entries(r).forEach(([s, i]) => {
        const o = s.replace(/([-_][a-z])/gi, (l) =>
          l.toUpperCase().replace(/[-_]/g, "")
        );
        e[o] = oc(i);
      }),
      e
    );
  },
  Cw = (r) =>
    !r ||
    typeof r != "string" ||
    r.length === 0 ||
    r.length > 100 ||
    r.trim() !== r ||
    r.includes("/") ||
    r.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(r);
function ca(r) {
  "@babel/helpers - typeof";
  return (
    (ca =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    ca(r)
  );
}
function Rw(r, e) {
  if (ca(r) != "object" || !r) return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var i = s.call(r, e);
    if (ca(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function jw(r) {
  var e = Rw(r, "string");
  return ca(e) == "symbol" ? e : e + "";
}
function Nw(r, e, s) {
  return (
    (e = jw(e)) in r
      ? Object.defineProperty(r, e, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = s),
    r
  );
}
function Gf(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    (e &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(r, o).enumerable;
      })),
      s.push.apply(s, i));
  }
  return s;
}
function Te(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gf(Object(s), !0).forEach(function (i) {
          Nw(r, i, s[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
        : Gf(Object(s)).forEach(function (i) {
            Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(s, i));
          });
  }
  return r;
}
const Jf = (r) => {
    var e;
    return (
      r.msg ||
      r.message ||
      r.error_description ||
      (typeof r.error == "string"
        ? r.error
        : (e = r.error) === null || e === void 0
          ? void 0
          : e.message) ||
      JSON.stringify(r)
    );
  },
  Pw = async (r, e, s, i) => {
    if (
      r &&
      typeof r == "object" &&
      "status" in r &&
      "ok" in r &&
      typeof r.status == "number" &&
      !(s != null && s.noResolveJson)
    ) {
      const o = r,
        l = o.status || 500;
      if (typeof o.json == "function")
        o.json()
          .then((c) => {
            const h =
              (c == null ? void 0 : c.statusCode) ||
              (c == null ? void 0 : c.code) ||
              l + "";
            e(new Po(Jf(c), l, h, i));
          })
          .catch(() => {
            if (i === "vectors") {
              const c = l + "";
              e(new Po(o.statusText || `HTTP ${l} error`, l, c, i));
            } else {
              const c = l + "";
              e(new Po(o.statusText || `HTTP ${l} error`, l, c, i));
            }
          });
      else {
        const c = l + "";
        e(new Po(o.statusText || `HTTP ${l} error`, l, c, i));
      }
    } else e(new nm(Jf(r), r, i));
  },
  Ow = (r, e, s, i) => {
    const o = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
    return r === "GET" || r === "HEAD" || !i
      ? Te(Te({}, o), s)
      : (Tw(i)
          ? ((o.headers = Te(
              { "Content-Type": "application/json" },
              e == null ? void 0 : e.headers
            )),
            (o.body = JSON.stringify(i)))
          : (o.body = i),
        e != null && e.duplex && (o.duplex = e.duplex),
        Te(Te({}, o), s));
  };
async function Gi(r, e, s, i, o, l, c) {
  return new Promise((h, f) => {
    r(s, Ow(e, i, o, l))
      .then((m) => {
        if (!m.ok) throw m;
        if (i != null && i.noResolveJson) return m;
        if (c === "vectors") {
          const v = m.headers.get("content-type");
          if (m.headers.get("content-length") === "0" || m.status === 204)
            return {};
          if (!v || !v.includes("application/json")) return {};
        }
        return m.json();
      })
      .then((m) => h(m))
      .catch((m) => Pw(m, f, i, c));
  });
}
function sm(r = "storage") {
  return {
    get: async (e, s, i, o) => Gi(e, "GET", s, i, o, void 0, r),
    post: async (e, s, i, o, l) => Gi(e, "POST", s, o, l, i, r),
    put: async (e, s, i, o, l) => Gi(e, "PUT", s, o, l, i, r),
    head: async (e, s, i, o) =>
      Gi(e, "HEAD", s, Te(Te({}, i), {}, { noResolveJson: !0 }), o, void 0, r),
    remove: async (e, s, i, o, l) => Gi(e, "DELETE", s, o, l, i, r),
  };
}
const Aw = sm("storage"),
  { get: da, post: Lr, put: lc, head: Dw, remove: jc } = Aw,
  fr = sm("vectors");
var di = class {
    constructor(r, e = {}, s, i = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = r),
        (this.headers = e),
        (this.fetch = Ew(s)),
        (this.namespace = i));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(r, e) {
      return ((this.headers = Te(Te({}, this.headers), {}, { [r]: e })), this);
    }
    async handleOperation(r) {
      var e = this;
      try {
        return { data: await r(), error: null };
      } catch (s) {
        if (e.shouldThrowOnError) throw s;
        if (Qo(s)) return { data: null, error: s };
        throw s;
      }
    }
  },
  Iw = class {
    constructor(r, e) {
      ((this.downloadFn = r), (this.shouldThrowOnError = e));
    }
    then(r, e) {
      return this.execute().then(r, e);
    }
    async execute() {
      var r = this;
      try {
        return { data: (await r.downloadFn()).body, error: null };
      } catch (e) {
        if (r.shouldThrowOnError) throw e;
        if (Qo(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
let im;
im = Symbol.toStringTag;
var Lw = class {
  constructor(r, e) {
    ((this.downloadFn = r),
      (this.shouldThrowOnError = e),
      (this[im] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new Iw(this.downloadFn, this.shouldThrowOnError);
  }
  then(r, e) {
    return this.getPromise().then(r, e);
  }
  catch(r) {
    return this.getPromise().catch(r);
  }
  finally(r) {
    return this.getPromise().finally(r);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var r = this;
    try {
      return { data: await (await r.downloadFn()).blob(), error: null };
    } catch (e) {
      if (r.shouldThrowOnError) throw e;
      if (Qo(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const Mw = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Qf = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var $w = class extends di {
  constructor(r, e = {}, s, i) {
    (super(r, e, i, "storage"), (this.bucketId = s));
  }
  async uploadOrUpdate(r, e, s, i) {
    var o = this;
    return o.handleOperation(async () => {
      let l;
      const c = Te(Te({}, Qf), i);
      let h = Te(
        Te({}, o.headers),
        r === "POST" && { "x-upsert": String(c.upsert) }
      );
      const f = c.metadata;
      (typeof Blob < "u" && s instanceof Blob
        ? ((l = new FormData()),
          l.append("cacheControl", c.cacheControl),
          f && l.append("metadata", o.encodeMetadata(f)),
          l.append("", s))
        : typeof FormData < "u" && s instanceof FormData
          ? ((l = s),
            l.has("cacheControl") || l.append("cacheControl", c.cacheControl),
            f &&
              !l.has("metadata") &&
              l.append("metadata", o.encodeMetadata(f)))
          : ((l = s),
            (h["cache-control"] = `max-age=${c.cacheControl}`),
            (h["content-type"] = c.contentType),
            f && (h["x-metadata"] = o.toBase64(o.encodeMetadata(f))),
            ((typeof ReadableStream < "u" && l instanceof ReadableStream) ||
              (l &&
                typeof l == "object" &&
                "pipe" in l &&
                typeof l.pipe == "function")) &&
              !c.duplex &&
              (c.duplex = "half")),
        i != null && i.headers && (h = Te(Te({}, h), i.headers)));
      const m = o._removeEmptyFolders(e),
        v = o._getFinalPath(m),
        g = await (r == "PUT" ? lc : Lr)(
          o.fetch,
          `${o.url}/object/${v}`,
          l,
          Te({ headers: h }, c != null && c.duplex ? { duplex: c.duplex } : {})
        );
      return { path: m, id: g.Id, fullPath: g.Key };
    });
  }
  async upload(r, e, s) {
    return this.uploadOrUpdate("POST", r, e, s);
  }
  async uploadToSignedUrl(r, e, s, i) {
    var o = this;
    const l = o._removeEmptyFolders(r),
      c = o._getFinalPath(l),
      h = new URL(o.url + `/object/upload/sign/${c}`);
    return (
      h.searchParams.set("token", e),
      o.handleOperation(async () => {
        let f;
        const m = Te({ upsert: Qf.upsert }, i),
          v = Te(Te({}, o.headers), { "x-upsert": String(m.upsert) });
        return (
          typeof Blob < "u" && s instanceof Blob
            ? ((f = new FormData()),
              f.append("cacheControl", m.cacheControl),
              f.append("", s))
            : typeof FormData < "u" && s instanceof FormData
              ? ((f = s), f.append("cacheControl", m.cacheControl))
              : ((f = s),
                (v["cache-control"] = `max-age=${m.cacheControl}`),
                (v["content-type"] = m.contentType)),
          {
            path: l,
            fullPath: (await lc(o.fetch, h.toString(), f, { headers: v })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(r, e) {
    var s = this;
    return s.handleOperation(async () => {
      let i = s._getFinalPath(r);
      const o = Te({}, s.headers);
      e != null && e.upsert && (o["x-upsert"] = "true");
      const l = await Lr(
          s.fetch,
          `${s.url}/object/upload/sign/${i}`,
          {},
          { headers: o }
        ),
        c = new URL(s.url + l.url),
        h = c.searchParams.get("token");
      if (!h) throw new Jo("No token returned by API");
      return { signedUrl: c.toString(), path: r, token: h };
    });
  }
  async update(r, e, s) {
    return this.uploadOrUpdate("PUT", r, e, s);
  }
  async move(r, e, s) {
    var i = this;
    return i.handleOperation(
      async () =>
        await Lr(
          i.fetch,
          `${i.url}/object/move`,
          {
            bucketId: i.bucketId,
            sourceKey: r,
            destinationKey: e,
            destinationBucket: s == null ? void 0 : s.destinationBucket,
          },
          { headers: i.headers }
        )
    );
  }
  async copy(r, e, s) {
    var i = this;
    return i.handleOperation(async () => ({
      path: (
        await Lr(
          i.fetch,
          `${i.url}/object/copy`,
          {
            bucketId: i.bucketId,
            sourceKey: r,
            destinationKey: e,
            destinationBucket: s == null ? void 0 : s.destinationBucket,
          },
          { headers: i.headers }
        )
      ).Key,
    }));
  }
  async createSignedUrl(r, e, s) {
    var i = this;
    return i.handleOperation(async () => {
      let o = i._getFinalPath(r),
        l = await Lr(
          i.fetch,
          `${i.url}/object/sign/${o}`,
          Te(
            { expiresIn: e },
            s != null && s.transform ? { transform: s.transform } : {}
          ),
          { headers: i.headers }
        );
      const c =
        s != null && s.download
          ? `&download=${s.download === !0 ? "" : s.download}`
          : "";
      return { signedUrl: encodeURI(`${i.url}${l.signedURL}${c}`) };
    });
  }
  async createSignedUrls(r, e, s) {
    var i = this;
    return i.handleOperation(async () => {
      const o = await Lr(
          i.fetch,
          `${i.url}/object/sign/${i.bucketId}`,
          { expiresIn: e, paths: r },
          { headers: i.headers }
        ),
        l =
          s != null && s.download
            ? `&download=${s.download === !0 ? "" : s.download}`
            : "";
      return o.map((c) =>
        Te(
          Te({}, c),
          {},
          {
            signedUrl: c.signedURL
              ? encodeURI(`${i.url}${c.signedURL}${l}`)
              : null,
          }
        )
      );
    });
  }
  download(r, e, s) {
    const i =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      o = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {}
      ),
      l = o ? `?${o}` : "",
      c = this._getFinalPath(r),
      h = () =>
        da(
          this.fetch,
          `${this.url}/${i}/${c}${l}`,
          { headers: this.headers, noResolveJson: !0 },
          s
        );
    return new Lw(h, this.shouldThrowOnError);
  }
  async info(r) {
    var e = this;
    const s = e._getFinalPath(r);
    return e.handleOperation(async () =>
      oc(await da(e.fetch, `${e.url}/object/info/${s}`, { headers: e.headers }))
    );
  }
  async exists(r) {
    var e = this;
    const s = e._getFinalPath(r);
    try {
      return (
        await Dw(e.fetch, `${e.url}/object/${s}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (i) {
      if (e.shouldThrowOnError) throw i;
      if (Qo(i) && i instanceof nm) {
        const o = i.originalError;
        if ([400, 404].includes(o == null ? void 0 : o.status))
          return { data: !1, error: i };
      }
      throw i;
    }
  }
  getPublicUrl(r, e) {
    const s = this._getFinalPath(r),
      i = [],
      o =
        e != null && e.download
          ? `download=${e.download === !0 ? "" : e.download}`
          : "";
    o !== "" && i.push(o);
    const l =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image"
          : "object",
      c = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {}
      );
    c !== "" && i.push(c);
    let h = i.join("&");
    return (
      h !== "" && (h = `?${h}`),
      { data: { publicUrl: encodeURI(`${this.url}/${l}/public/${s}${h}`) } }
    );
  }
  async remove(r) {
    var e = this;
    return e.handleOperation(
      async () =>
        await jc(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: r },
          { headers: e.headers }
        )
    );
  }
  async list(r, e, s) {
    var i = this;
    return i.handleOperation(async () => {
      const o = Te(Te(Te({}, Mw), e), {}, { prefix: r || "" });
      return await Lr(
        i.fetch,
        `${i.url}/object/list/${i.bucketId}`,
        o,
        { headers: i.headers },
        s
      );
    });
  }
  async listV2(r, e) {
    var s = this;
    return s.handleOperation(async () => {
      const i = Te({}, r);
      return await Lr(
        s.fetch,
        `${s.url}/object/list-v2/${s.bucketId}`,
        i,
        { headers: s.headers },
        e
      );
    });
  }
  encodeMetadata(r) {
    return JSON.stringify(r);
  }
  toBase64(r) {
    return typeof Buffer < "u" ? Buffer.from(r).toString("base64") : btoa(r);
  }
  _getFinalPath(r) {
    return `${this.bucketId}/${r.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(r) {
    return r.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(r) {
    const e = [];
    return (
      r.width && e.push(`width=${r.width}`),
      r.height && e.push(`height=${r.height}`),
      r.resize && e.push(`resize=${r.resize}`),
      r.format && e.push(`format=${r.format}`),
      r.quality && e.push(`quality=${r.quality}`),
      e.join("&")
    );
  }
};
const Uw = "2.97.0",
  ba = { "X-Client-Info": `storage-js/${Uw}` };
var Fw = class extends di {
    constructor(r, e = {}, s, i) {
      const o = new URL(r);
      i != null &&
        i.useNewHostname &&
        /supabase\.(co|in|red)$/.test(o.hostname) &&
        !o.hostname.includes("storage.supabase.") &&
        (o.hostname = o.hostname.replace("supabase.", "storage.supabase."));
      const l = o.href.replace(/\/$/, ""),
        c = Te(Te({}, ba), e);
      super(l, c, s, "storage");
    }
    async listBuckets(r) {
      var e = this;
      return e.handleOperation(async () => {
        const s = e.listBucketOptionsToQueryString(r);
        return await da(e.fetch, `${e.url}/bucket${s}`, { headers: e.headers });
      });
    }
    async getBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await da(e.fetch, `${e.url}/bucket/${r}`, { headers: e.headers })
      );
    }
    async createBucket(r, e = { public: !1 }) {
      var s = this;
      return s.handleOperation(
        async () =>
          await Lr(
            s.fetch,
            `${s.url}/bucket`,
            {
              id: r,
              name: r,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: s.headers }
          )
      );
    }
    async updateBucket(r, e) {
      var s = this;
      return s.handleOperation(
        async () =>
          await lc(
            s.fetch,
            `${s.url}/bucket/${r}`,
            {
              id: r,
              name: r,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: s.headers }
          )
      );
    }
    async emptyBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Lr(
            e.fetch,
            `${e.url}/bucket/${r}/empty`,
            {},
            { headers: e.headers }
          )
      );
    }
    async deleteBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await jc(e.fetch, `${e.url}/bucket/${r}`, {}, { headers: e.headers })
      );
    }
    listBucketOptionsToQueryString(r) {
      const e = {};
      return (
        r &&
          ("limit" in r && (e.limit = String(r.limit)),
          "offset" in r && (e.offset = String(r.offset)),
          r.search && (e.search = r.search),
          r.sortColumn && (e.sortColumn = r.sortColumn),
          r.sortOrder && (e.sortOrder = r.sortOrder)),
        Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
      );
    }
  },
  zw = class extends di {
    constructor(r, e = {}, s) {
      const i = r.replace(/\/$/, ""),
        o = Te(Te({}, ba), e);
      super(i, o, s, "storage");
    }
    async createBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Lr(
            e.fetch,
            `${e.url}/bucket`,
            { name: r },
            { headers: e.headers }
          )
      );
    }
    async listBuckets(r) {
      var e = this;
      return e.handleOperation(async () => {
        const s = new URLSearchParams();
        ((r == null ? void 0 : r.limit) !== void 0 &&
          s.set("limit", r.limit.toString()),
          (r == null ? void 0 : r.offset) !== void 0 &&
            s.set("offset", r.offset.toString()),
          r != null && r.sortColumn && s.set("sortColumn", r.sortColumn),
          r != null && r.sortOrder && s.set("sortOrder", r.sortOrder),
          r != null && r.search && s.set("search", r.search));
        const i = s.toString(),
          o = i ? `${e.url}/bucket?${i}` : `${e.url}/bucket`;
        return await da(e.fetch, o, { headers: e.headers });
      });
    }
    async deleteBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await jc(e.fetch, `${e.url}/bucket/${r}`, {}, { headers: e.headers })
      );
    }
    from(r) {
      var e = this;
      if (!Cw(r))
        throw new Jo(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters."
        );
      const s = new Sw({
          baseUrl: this.url,
          catalogName: r,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        i = this.shouldThrowOnError;
      return new Proxy(s, {
        get(o, l) {
          const c = o[l];
          return typeof c != "function"
            ? c
            : async (...h) => {
                try {
                  return { data: await c.apply(o, h), error: null };
                } catch (f) {
                  if (i) throw f;
                  return { data: null, error: f };
                }
              };
        },
      });
    }
  },
  Bw = class extends di {
    constructor(r, e = {}, s) {
      const i = r.replace(/\/$/, ""),
        o = Te(Te({}, ba), {}, { "Content-Type": "application/json" }, e);
      super(i, o, s, "vectors");
    }
    async createIndex(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await fr.post(e.fetch, `${e.url}/CreateIndex`, r, {
            headers: e.headers,
          })) || {}
      );
    }
    async getIndex(r, e) {
      var s = this;
      return s.handleOperation(
        async () =>
          await fr.post(
            s.fetch,
            `${s.url}/GetIndex`,
            { vectorBucketName: r, indexName: e },
            { headers: s.headers }
          )
      );
    }
    async listIndexes(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await fr.post(e.fetch, `${e.url}/ListIndexes`, r, {
            headers: e.headers,
          })
      );
    }
    async deleteIndex(r, e) {
      var s = this;
      return s.handleOperation(
        async () =>
          (await fr.post(
            s.fetch,
            `${s.url}/DeleteIndex`,
            { vectorBucketName: r, indexName: e },
            { headers: s.headers }
          )) || {}
      );
    }
  },
  Ww = class extends di {
    constructor(r, e = {}, s) {
      const i = r.replace(/\/$/, ""),
        o = Te(Te({}, ba), {}, { "Content-Type": "application/json" }, e);
      super(i, o, s, "vectors");
    }
    async putVectors(r) {
      var e = this;
      if (r.vectors.length < 1 || r.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await fr.post(e.fetch, `${e.url}/PutVectors`, r, {
            headers: e.headers,
          })) || {}
      );
    }
    async getVectors(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await fr.post(e.fetch, `${e.url}/GetVectors`, r, {
            headers: e.headers,
          })
      );
    }
    async listVectors(r) {
      var e = this;
      if (r.segmentCount !== void 0) {
        if (r.segmentCount < 1 || r.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          r.segmentIndex !== void 0 &&
          (r.segmentIndex < 0 || r.segmentIndex >= r.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${r.segmentCount - 1}`
          );
      }
      return e.handleOperation(
        async () =>
          await fr.post(e.fetch, `${e.url}/ListVectors`, r, {
            headers: e.headers,
          })
      );
    }
    async queryVectors(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await fr.post(e.fetch, `${e.url}/QueryVectors`, r, {
            headers: e.headers,
          })
      );
    }
    async deleteVectors(r) {
      var e = this;
      if (r.keys.length < 1 || r.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await fr.post(e.fetch, `${e.url}/DeleteVectors`, r, {
            headers: e.headers,
          })) || {}
      );
    }
  },
  Hw = class extends di {
    constructor(r, e = {}, s) {
      const i = r.replace(/\/$/, ""),
        o = Te(Te({}, ba), {}, { "Content-Type": "application/json" }, e);
      super(i, o, s, "vectors");
    }
    async createBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await fr.post(
            e.fetch,
            `${e.url}/CreateVectorBucket`,
            { vectorBucketName: r },
            { headers: e.headers }
          )) || {}
      );
    }
    async getBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          await fr.post(
            e.fetch,
            `${e.url}/GetVectorBucket`,
            { vectorBucketName: r },
            { headers: e.headers }
          )
      );
    }
    async listBuckets(r = {}) {
      var e = this;
      return e.handleOperation(
        async () =>
          await fr.post(e.fetch, `${e.url}/ListVectorBuckets`, r, {
            headers: e.headers,
          })
      );
    }
    async deleteBucket(r) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await fr.post(
            e.fetch,
            `${e.url}/DeleteVectorBucket`,
            { vectorBucketName: r },
            { headers: e.headers }
          )) || {}
      );
    }
  },
  Vw = class extends Hw {
    constructor(r, e = {}) {
      super(r, e.headers || {}, e.fetch);
    }
    from(r) {
      return new qw(this.url, this.headers, r, this.fetch);
    }
    async createBucket(r) {
      var e = () => super.createBucket,
        s = this;
      return e().call(s, r);
    }
    async getBucket(r) {
      var e = () => super.getBucket,
        s = this;
      return e().call(s, r);
    }
    async listBuckets(r = {}) {
      var e = () => super.listBuckets,
        s = this;
      return e().call(s, r);
    }
    async deleteBucket(r) {
      var e = () => super.deleteBucket,
        s = this;
      return e().call(s, r);
    }
  },
  qw = class extends Bw {
    constructor(r, e, s, i) {
      (super(r, e, i), (this.vectorBucketName = s));
    }
    async createIndex(r) {
      var e = () => super.createIndex,
        s = this;
      return e().call(
        s,
        Te(Te({}, r), {}, { vectorBucketName: s.vectorBucketName })
      );
    }
    async listIndexes(r = {}) {
      var e = () => super.listIndexes,
        s = this;
      return e().call(
        s,
        Te(Te({}, r), {}, { vectorBucketName: s.vectorBucketName })
      );
    }
    async getIndex(r) {
      var e = () => super.getIndex,
        s = this;
      return e().call(s, s.vectorBucketName, r);
    }
    async deleteIndex(r) {
      var e = () => super.deleteIndex,
        s = this;
      return e().call(s, s.vectorBucketName, r);
    }
    index(r) {
      return new Kw(
        this.url,
        this.headers,
        this.vectorBucketName,
        r,
        this.fetch
      );
    }
  },
  Kw = class extends Ww {
    constructor(r, e, s, i, o) {
      (super(r, e, o), (this.vectorBucketName = s), (this.indexName = i));
    }
    async putVectors(r) {
      var e = () => super.putVectors,
        s = this;
      return e().call(
        s,
        Te(
          Te({}, r),
          {},
          { vectorBucketName: s.vectorBucketName, indexName: s.indexName }
        )
      );
    }
    async getVectors(r) {
      var e = () => super.getVectors,
        s = this;
      return e().call(
        s,
        Te(
          Te({}, r),
          {},
          { vectorBucketName: s.vectorBucketName, indexName: s.indexName }
        )
      );
    }
    async listVectors(r = {}) {
      var e = () => super.listVectors,
        s = this;
      return e().call(
        s,
        Te(
          Te({}, r),
          {},
          { vectorBucketName: s.vectorBucketName, indexName: s.indexName }
        )
      );
    }
    async queryVectors(r) {
      var e = () => super.queryVectors,
        s = this;
      return e().call(
        s,
        Te(
          Te({}, r),
          {},
          { vectorBucketName: s.vectorBucketName, indexName: s.indexName }
        )
      );
    }
    async deleteVectors(r) {
      var e = () => super.deleteVectors,
        s = this;
      return e().call(
        s,
        Te(
          Te({}, r),
          {},
          { vectorBucketName: s.vectorBucketName, indexName: s.indexName }
        )
      );
    }
  },
  Yw = class extends Fw {
    constructor(r, e = {}, s, i) {
      super(r, e, s, i);
    }
    from(r) {
      return new $w(this.url, this.headers, r, this.fetch);
    }
    get vectors() {
      return new Vw(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new zw(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const am = "2.97.0",
  ii = 30 * 1e3,
  uc = 3,
  qu = uc * ii,
  Gw = "http://localhost:9999",
  Jw = "supabase.auth.token",
  Qw = { "X-Client-Info": `gotrue-js/${am}` },
  cc = "X-Supabase-Api-Version",
  om = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  Xw = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Zw = 600 * 1e3;
class ha extends Error {
  constructor(e, s, i) {
    (super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = s),
      (this.code = i));
  }
}
function we(r) {
  return typeof r == "object" && r !== null && "__isAuthError" in r;
}
class ex extends ha {
  constructor(e, s, i) {
    (super(e, s, i),
      (this.name = "AuthApiError"),
      (this.status = s),
      (this.code = i));
  }
}
function tx(r) {
  return we(r) && r.name === "AuthApiError";
}
class bs extends ha {
  constructor(e, s) {
    (super(e), (this.name = "AuthUnknownError"), (this.originalError = s));
  }
}
class vn extends ha {
  constructor(e, s, i, o) {
    (super(e, i, o), (this.name = s), (this.status = i));
  }
}
class dr extends vn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Ku(r) {
  return we(r) && r.name === "AuthSessionMissingError";
}
class Qs extends vn {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class Oo extends vn {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ao extends vn {
  constructor(e, s = null) {
    (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = s));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function rx(r) {
  return we(r) && r.name === "AuthImplicitGrantRedirectError";
}
class Xf extends vn {
  constructor(e, s = null) {
    (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = s));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class nx extends vn {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found"
    );
  }
}
class dc extends vn {
  constructor(e, s) {
    super(e, "AuthRetryableFetchError", s, void 0);
  }
}
function Yu(r) {
  return we(r) && r.name === "AuthRetryableFetchError";
}
class Zf extends vn {
  constructor(e, s, i) {
    (super(e, "AuthWeakPasswordError", s, "weak_password"), (this.reasons = i));
  }
}
class hc extends vn {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const zo =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  ep = ` 	
\r=`.split(""),
  sx = (() => {
    const r = new Array(128);
    for (let e = 0; e < r.length; e += 1) r[e] = -1;
    for (let e = 0; e < ep.length; e += 1) r[ep[e].charCodeAt(0)] = -2;
    for (let e = 0; e < zo.length; e += 1) r[zo[e].charCodeAt(0)] = e;
    return r;
  })();
function tp(r, e, s) {
  if (r !== null)
    for (e.queue = (e.queue << 8) | r, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const i = (e.queue >> (e.queuedBits - 6)) & 63;
      (s(zo[i]), (e.queuedBits -= 6));
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;
    ) {
      const i = (e.queue >> (e.queuedBits - 6)) & 63;
      (s(zo[i]), (e.queuedBits -= 6));
    }
}
function lm(r, e, s) {
  const i = sx[r];
  if (i > -1)
    for (e.queue = (e.queue << 6) | i, e.queuedBits += 6; e.queuedBits >= 8; )
      (s((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
  else {
    if (i === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`);
  }
}
function rp(r) {
  const e = [],
    s = (c) => {
      e.push(String.fromCodePoint(c));
    },
    i = { utf8seq: 0, codepoint: 0 },
    o = { queue: 0, queuedBits: 0 },
    l = (c) => {
      ox(c, i, s);
    };
  for (let c = 0; c < r.length; c += 1) lm(r.charCodeAt(c), o, l);
  return e.join("");
}
function ix(r, e) {
  if (r <= 127) {
    e(r);
    return;
  } else if (r <= 2047) {
    (e(192 | (r >> 6)), e(128 | (r & 63)));
    return;
  } else if (r <= 65535) {
    (e(224 | (r >> 12)), e(128 | ((r >> 6) & 63)), e(128 | (r & 63)));
    return;
  } else if (r <= 1114111) {
    (e(240 | (r >> 18)),
      e(128 | ((r >> 12) & 63)),
      e(128 | ((r >> 6) & 63)),
      e(128 | (r & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`);
}
function ax(r, e) {
  for (let s = 0; s < r.length; s += 1) {
    let i = r.charCodeAt(s);
    if (i > 55295 && i <= 56319) {
      const o = ((i - 55296) * 1024) & 65535;
      ((i = (((r.charCodeAt(s + 1) - 56320) & 65535) | o) + 65536), (s += 1));
    }
    ix(i, e);
  }
}
function ox(r, e, s) {
  if (e.utf8seq === 0) {
    if (r <= 127) {
      s(r);
      return;
    }
    for (let i = 1; i < 6; i += 1)
      if (((r >> (7 - i)) & 1) === 0) {
        e.utf8seq = i;
        break;
      }
    if (e.utf8seq === 2) e.codepoint = r & 31;
    else if (e.utf8seq === 3) e.codepoint = r & 15;
    else if (e.utf8seq === 4) e.codepoint = r & 7;
    else throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (r <= 127) throw new Error("Invalid UTF-8 sequence");
    ((e.codepoint = (e.codepoint << 6) | (r & 63)),
      (e.utf8seq -= 1),
      e.utf8seq === 0 && s(e.codepoint));
  }
}
function ci(r) {
  const e = [],
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      e.push(o);
    };
  for (let o = 0; o < r.length; o += 1) lm(r.charCodeAt(o), s, i);
  return new Uint8Array(e);
}
function lx(r) {
  const e = [];
  return (ax(r, (s) => e.push(s)), new Uint8Array(e));
}
function ks(r) {
  const e = [],
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      e.push(o);
    };
  return (r.forEach((o) => tp(o, s, i)), tp(null, s, i), e.join(""));
}
function ux(r) {
  return Math.round(Date.now() / 1e3) + r;
}
function cx() {
  return Symbol("auth-callback");
}
const At = () => typeof window < "u" && typeof document < "u",
  gs = { tested: !1, writable: !1 },
  um = () => {
    if (!At()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (gs.tested) return gs.writable;
    const r = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(r, r),
        globalThis.localStorage.removeItem(r),
        (gs.tested = !0),
        (gs.writable = !0));
    } catch {
      ((gs.tested = !0), (gs.writable = !1));
    }
    return gs.writable;
  };
function dx(r) {
  const e = {},
    s = new URL(r);
  if (s.hash && s.hash[0] === "#")
    try {
      new URLSearchParams(s.hash.substring(1)).forEach((o, l) => {
        e[l] = o;
      });
    } catch {}
  return (
    s.searchParams.forEach((i, o) => {
      e[o] = i;
    }),
    e
  );
}
const cm = (r) => (r ? (...e) => r(...e) : (...e) => fetch(...e)),
  hx = (r) =>
    typeof r == "object" &&
    r !== null &&
    "status" in r &&
    "ok" in r &&
    "json" in r &&
    typeof r.json == "function",
  ai = async (r, e, s) => {
    await r.setItem(e, JSON.stringify(s));
  },
  ys = async (r, e) => {
    const s = await r.getItem(e);
    if (!s) return null;
    try {
      return JSON.parse(s);
    } catch {
      return s;
    }
  },
  Ot = async (r, e) => {
    await r.removeItem(e);
  };
class Xo {
  constructor() {
    this.promise = new Xo.promiseConstructor((e, s) => {
      ((this.resolve = e), (this.reject = s));
    });
  }
}
Xo.promiseConstructor = Promise;
function Do(r) {
  const e = r.split(".");
  if (e.length !== 3) throw new hc("Invalid JWT structure");
  for (let i = 0; i < e.length; i++)
    if (!Xw.test(e[i])) throw new hc("JWT not in base64url format");
  return {
    header: JSON.parse(rp(e[0])),
    payload: JSON.parse(rp(e[1])),
    signature: ci(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function fx(r) {
  return await new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
function px(r, e) {
  return new Promise((i, o) => {
    (async () => {
      for (let l = 0; l < 1 / 0; l++)
        try {
          const c = await r(l);
          if (!e(l, null, c)) {
            i(c);
            return;
          }
        } catch (c) {
          if (!e(l, c)) {
            o(c);
            return;
          }
        }
    })();
  });
}
function mx(r) {
  return ("0" + r.toString(16)).substr(-2);
}
function gx() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      i = s.length;
    let o = "";
    for (let l = 0; l < 56; l++) o += s.charAt(Math.floor(Math.random() * i));
    return o;
  }
  return (crypto.getRandomValues(e), Array.from(e, mx).join(""));
}
async function yx(r) {
  const s = new TextEncoder().encode(r),
    i = await crypto.subtle.digest("SHA-256", s),
    o = new Uint8Array(i);
  return Array.from(o)
    .map((l) => String.fromCharCode(l))
    .join("");
}
async function vx(r) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      r
    );
  const s = await yx(r);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Xs(r, e, s = !1) {
  const i = gx();
  let o = i;
  (s && (o += "/PASSWORD_RECOVERY"), await ai(r, `${e}-code-verifier`, o));
  const l = await vx(i);
  return [l, i === l ? "plain" : "s256"];
}
const wx = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function xx(r) {
  const e = r.headers.get(cc);
  if (!e || !e.match(wx)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function bx(r) {
  if (!r) throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (r <= e) throw new Error("JWT has expired");
}
function _x(r) {
  switch (r) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const kx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Zs(r) {
  if (!kx.test(r))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function Gu() {
  const r = {};
  return new Proxy(r, {
    get: (e, s) => {
      if (s === "__isUserNotAvailableProxy") return !0;
      if (typeof s == "symbol") {
        const i = s.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (e, s) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (e, s) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function Sx(r, e) {
  return new Proxy(r, {
    get: (s, i, o) => {
      if (i === "__isInsecureUserWarningProxy") return !0;
      if (typeof i == "symbol") {
        const l = i.toString();
        if (
          l === "Symbol(Symbol.toPrimitive)" ||
          l === "Symbol(Symbol.toStringTag)" ||
          l === "Symbol(util.inspect.custom)" ||
          l === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(s, i, o);
      }
      return (
        !e.value &&
          typeof i == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
          ),
          (e.value = !0)),
        Reflect.get(s, i, o)
      );
    },
  });
}
function np(r) {
  return JSON.parse(JSON.stringify(r));
}
const vs = (r) =>
    r.msg || r.message || r.error_description || r.error || JSON.stringify(r),
  Ex = [502, 503, 504];
async function sp(r) {
  var e;
  if (!hx(r)) throw new dc(vs(r), 0);
  if (Ex.includes(r.status)) throw new dc(vs(r), r.status);
  let s;
  try {
    s = await r.json();
  } catch (l) {
    throw new bs(vs(l), l);
  }
  let i;
  const o = xx(r);
  if (
    (o &&
    o.getTime() >= om["2024-01-01"].timestamp &&
    typeof s == "object" &&
    s &&
    typeof s.code == "string"
      ? (i = s.code)
      : typeof s == "object" &&
        s &&
        typeof s.error_code == "string" &&
        (i = s.error_code),
    i)
  ) {
    if (i === "weak_password")
      throw new Zf(
        vs(s),
        r.status,
        ((e = s.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          []
      );
    if (i === "session_not_found") throw new dr();
  } else if (
    typeof s == "object" &&
    s &&
    typeof s.weak_password == "object" &&
    s.weak_password &&
    Array.isArray(s.weak_password.reasons) &&
    s.weak_password.reasons.length &&
    s.weak_password.reasons.reduce((l, c) => l && typeof c == "string", !0)
  )
    throw new Zf(vs(s), r.status, s.weak_password.reasons);
  throw new ex(vs(s), r.status || 500, i);
}
const Tx = (r, e, s, i) => {
  const o = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
  return r === "GET"
    ? o
    : ((o.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers
      )),
      (o.body = JSON.stringify(i)),
      Object.assign(Object.assign({}, o), s));
};
async function Ce(r, e, s, i) {
  var o;
  const l = Object.assign({}, i == null ? void 0 : i.headers);
  (l[cc] || (l[cc] = om["2024-01-01"].name),
    i != null && i.jwt && (l.Authorization = `Bearer ${i.jwt}`));
  const c =
    (o = i == null ? void 0 : i.query) !== null && o !== void 0 ? o : {};
  i != null && i.redirectTo && (c.redirect_to = i.redirectTo);
  const h = Object.keys(c).length
      ? "?" + new URLSearchParams(c).toString()
      : "",
    f = await Cx(
      r,
      e,
      s + h,
      { headers: l, noResolveJson: i == null ? void 0 : i.noResolveJson },
      {},
      i == null ? void 0 : i.body
    );
  return i != null && i.xform
    ? i == null
      ? void 0
      : i.xform(f)
    : { data: Object.assign({}, f), error: null };
}
async function Cx(r, e, s, i, o, l) {
  const c = Tx(e, i, o, l);
  let h;
  try {
    h = await r(s, Object.assign({}, c));
  } catch (f) {
    throw (console.error(f), new dc(vs(f), 0));
  }
  if ((h.ok || (await sp(h)), i != null && i.noResolveJson)) return h;
  try {
    return await h.json();
  } catch (f) {
    await sp(f);
  }
}
function Ir(r) {
  var e;
  let s = null;
  Nx(r) &&
    ((s = Object.assign({}, r)),
    r.expires_at || (s.expires_at = ux(r.expires_in)));
  const i = (e = r.user) !== null && e !== void 0 ? e : r;
  return { data: { session: s, user: i }, error: null };
}
function ip(r) {
  const e = Ir(r);
  return (
    !e.error &&
      r.weak_password &&
      typeof r.weak_password == "object" &&
      Array.isArray(r.weak_password.reasons) &&
      r.weak_password.reasons.length &&
      r.weak_password.message &&
      typeof r.weak_password.message == "string" &&
      r.weak_password.reasons.reduce((s, i) => s && typeof i == "string", !0) &&
      (e.data.weak_password = r.weak_password),
    e
  );
}
function qn(r) {
  var e;
  return {
    data: { user: (e = r.user) !== null && e !== void 0 ? e : r },
    error: null,
  };
}
function Rx(r) {
  return { data: r, error: null };
}
function jx(r) {
  const {
      action_link: e,
      email_otp: s,
      hashed_token: i,
      redirect_to: o,
      verification_type: l,
    } = r,
    c = Go(r, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    h = {
      action_link: e,
      email_otp: s,
      hashed_token: i,
      redirect_to: o,
      verification_type: l,
    },
    f = Object.assign({}, c);
  return { data: { properties: h, user: f }, error: null };
}
function ap(r) {
  return r;
}
function Nx(r) {
  return r.access_token && r.refresh_token && r.expires_in;
}
const Ju = ["global", "local", "others"];
class Px {
  constructor({ url: e = "", headers: s = {}, fetch: i }) {
    ((this.url = e),
      (this.headers = s),
      (this.fetch = cm(i)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }));
  }
  async signOut(e, s = Ju[0]) {
    if (Ju.indexOf(s) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Ju.join(", ")}`
      );
    try {
      return (
        await Ce(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (i) {
      if (we(i)) return { data: null, error: i };
      throw i;
    }
  }
  async inviteUserByEmail(e, s = {}) {
    try {
      return await Ce(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: qn,
      });
    } catch (i) {
      if (we(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async generateLink(e) {
    try {
      const { options: s } = e,
        i = Go(e, ["options"]),
        o = Object.assign(Object.assign({}, i), s);
      return (
        "newEmail" in i &&
          ((o.new_email = i == null ? void 0 : i.newEmail), delete o.newEmail),
        await Ce(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: o,
          headers: this.headers,
          xform: jx,
          redirectTo: s == null ? void 0 : s.redirectTo,
        })
      );
    } catch (s) {
      if (we(s)) return { data: { properties: null, user: null }, error: s };
      throw s;
    }
  }
  async createUser(e) {
    try {
      return await Ce(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: qn,
      });
    } catch (s) {
      if (we(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async listUsers(e) {
    var s, i, o, l, c, h, f;
    try {
      const m = { nextPage: null, lastPage: 0, total: 0 },
        v = await Ce(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (i =
                (s = e == null ? void 0 : e.page) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
            per_page:
              (l =
                (o = e == null ? void 0 : e.perPage) === null || o === void 0
                  ? void 0
                  : o.toString()) !== null && l !== void 0
                ? l
                : "",
          },
          xform: ap,
        });
      if (v.error) throw v.error;
      const g = await v.json(),
        b =
          (c = v.headers.get("x-total-count")) !== null && c !== void 0 ? c : 0,
        x =
          (f =
            (h = v.headers.get("link")) === null || h === void 0
              ? void 0
              : h.split(",")) !== null && f !== void 0
            ? f
            : [];
      return (
        x.length > 0 &&
          (x.forEach((_) => {
            const j = parseInt(_.split(";")[0].split("=")[1].substring(0, 1)),
              k = JSON.parse(_.split(";")[1].split("=")[1]);
            m[`${k}Page`] = j;
          }),
          (m.total = parseInt(b))),
        { data: Object.assign(Object.assign({}, g), m), error: null }
      );
    } catch (m) {
      if (we(m)) return { data: { users: [] }, error: m };
      throw m;
    }
  }
  async getUserById(e) {
    Zs(e);
    try {
      return await Ce(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: qn,
      });
    } catch (s) {
      if (we(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async updateUserById(e, s) {
    Zs(e);
    try {
      return await Ce(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: s,
        headers: this.headers,
        xform: qn,
      });
    } catch (i) {
      if (we(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async deleteUser(e, s = !1) {
    Zs(e);
    try {
      return await Ce(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: s },
        xform: qn,
      });
    } catch (i) {
      if (we(i)) return { data: { user: null }, error: i };
      throw i;
    }
  }
  async _listFactors(e) {
    Zs(e.userId);
    try {
      const { data: s, error: i } = await Ce(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (o) => ({ data: { factors: o }, error: null }),
        }
      );
      return { data: s, error: i };
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(e) {
    (Zs(e.userId), Zs(e.id));
    try {
      return {
        data: await Ce(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _listOAuthClients(e) {
    var s, i, o, l, c, h, f;
    try {
      const m = { nextPage: null, lastPage: 0, total: 0 },
        v = await Ce(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (i =
                (s = e == null ? void 0 : e.page) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
            per_page:
              (l =
                (o = e == null ? void 0 : e.perPage) === null || o === void 0
                  ? void 0
                  : o.toString()) !== null && l !== void 0
                ? l
                : "",
          },
          xform: ap,
        });
      if (v.error) throw v.error;
      const g = await v.json(),
        b =
          (c = v.headers.get("x-total-count")) !== null && c !== void 0 ? c : 0,
        x =
          (f =
            (h = v.headers.get("link")) === null || h === void 0
              ? void 0
              : h.split(",")) !== null && f !== void 0
            ? f
            : [];
      return (
        x.length > 0 &&
          (x.forEach((_) => {
            const j = parseInt(_.split(";")[0].split("=")[1].substring(0, 1)),
              k = JSON.parse(_.split(";")[1].split("=")[1]);
            m[`${k}Page`] = j;
          }),
          (m.total = parseInt(b))),
        { data: Object.assign(Object.assign({}, g), m), error: null }
      );
    } catch (m) {
      if (we(m)) return { data: { clients: [] }, error: m };
      throw m;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await Ce(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await Ce(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (s) => ({ data: s, error: null }) }
      );
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _updateOAuthClient(e, s) {
    try {
      return await Ce(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: s,
          headers: this.headers,
          xform: (i) => ({ data: i, error: null }),
        }
      );
    } catch (i) {
      if (we(i)) return { data: null, error: i };
      throw i;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await Ce(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await Ce(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (s) => ({ data: s, error: null }) }
      );
    } catch (s) {
      if (we(s)) return { data: null, error: s };
      throw s;
    }
  }
}
function op(r = {}) {
  return {
    getItem: (e) => r[e] || null,
    setItem: (e, s) => {
      r[e] = s;
    },
    removeItem: (e) => {
      delete r[e];
    },
  };
}
const ei = {
  debug: !!(
    globalThis &&
    um() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class dm extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
}
class lp extends dm {}
async function Ox(r, e, s) {
  ei.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", r, e);
  const i = new globalThis.AbortController();
  (e > 0 &&
    setTimeout(() => {
      (i.abort(),
        ei.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            r
          ));
    }, e),
    await Promise.resolve());
  try {
    return await globalThis.navigator.locks.request(
      r,
      e === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: i.signal },
      async (o) => {
        if (o) {
          ei.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              r,
              o.name
            );
          try {
            return await s();
          } finally {
            ei.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                r,
                o.name
              );
          }
        } else {
          if (e === 0)
            throw (
              ei.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  r
                ),
              new lp(
                `Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`
              )
            );
          if (ei.debug)
            try {
              const l = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(l, null, "  ")
              );
            } catch (l) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                l
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
            ),
            await s()
          );
        }
      }
    );
  } catch (o) {
    throw (o == null ? void 0 : o.name) === "AbortError"
      ? new lp(
          `Acquiring an exclusive Navigator LockManager lock "${r}" timed out waiting ${e}ms`
        )
      : o;
  }
}
function Ax() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function hm(r) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(r))
    throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);
  return r.toLowerCase();
}
function Dx(r) {
  return parseInt(r, 16);
}
function Ix(r) {
  const e = new TextEncoder().encode(r);
  return "0x" + Array.from(e, (i) => i.toString(16).padStart(2, "0")).join("");
}
function Lx(r) {
  var e;
  const {
    chainId: s,
    domain: i,
    expirationTime: o,
    issuedAt: l = new Date(),
    nonce: c,
    notBefore: h,
    requestId: f,
    resources: m,
    scheme: v,
    uri: g,
    version: b,
  } = r;
  {
    if (!Number.isInteger(s))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`
      );
    if (!i)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.'
      );
    if (c && c.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${c}`
      );
    if (!g)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.'
      );
    if (b !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`
      );
    if (
      !((e = r.statement) === null || e === void 0) &&
      e.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`
      );
  }
  const x = hm(r.address),
    _ = v ? `${v}://${i}` : i,
    j = r.statement
      ? `${r.statement}
`
      : "",
    k = `${_} wants you to sign in with your Ethereum account:
${x}

${j}`;
  let P = `URI: ${g}
Version: ${b}
Chain ID: ${s}${
    c
      ? `
Nonce: ${c}`
      : ""
  }
Issued At: ${l.toISOString()}`;
  if (
    (o &&
      (P += `
Expiration Time: ${o.toISOString()}`),
    h &&
      (P += `
Not Before: ${h.toISOString()}`),
    f &&
      (P += `
Request ID: ${f}`),
    m)
  ) {
    let T = `
Resources:`;
    for (const O of m) {
      if (!O || typeof O != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${O}`
        );
      T += `
- ${O}`;
    }
    P += T;
  }
  return `${k}
${P}`;
}
class vt extends Error {
  constructor({ message: e, code: s, cause: i, name: o }) {
    var l;
    (super(e, { cause: i }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (l = o ?? (i instanceof Error ? i.name : void 0)) !== null &&
        l !== void 0
          ? l
          : "Unknown Error"),
      (this.code = s));
  }
}
class Bo extends vt {
  constructor(e, s) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: s,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = s));
  }
}
function Mx({ error: r, options: e }) {
  var s, i, o;
  const { publicKey: l } = e;
  if (!l) throw Error("options was missing required publicKey property");
  if (r.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new vt({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: r,
      });
  } else if (r.name === "ConstraintError") {
    if (
      ((s = l.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.requireResidentKey) === !0
    )
      return new vt({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: r,
      });
    if (
      e.mediation === "conditional" &&
      ((i = l.authenticatorSelection) === null || i === void 0
        ? void 0
        : i.userVerification) === "required"
    )
      return new vt({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: r,
      });
    if (
      ((o = l.authenticatorSelection) === null || o === void 0
        ? void 0
        : o.userVerification) === "required"
    )
      return new vt({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: r,
      });
  } else {
    if (r.name === "InvalidStateError")
      return new vt({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: r,
      });
    if (r.name === "NotAllowedError")
      return new vt({
        message: r.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: r,
      });
    if (r.name === "NotSupportedError")
      return l.pubKeyCredParams.filter((h) => h.type === "public-key")
        .length === 0
        ? new vt({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: r,
          })
        : new vt({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: r,
          });
    if (r.name === "SecurityError") {
      const c = window.location.hostname;
      if (fm(c)) {
        if (l.rp.id !== c)
          return new vt({
            message: `The RP ID "${l.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: r,
          });
      } else
        return new vt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: r,
        });
    } else if (r.name === "TypeError") {
      if (l.user.id.byteLength < 1 || l.user.id.byteLength > 64)
        return new vt({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: r,
        });
    } else if (r.name === "UnknownError")
      return new vt({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: r,
      });
  }
  return new vt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: r,
  });
}
function $x({ error: r, options: e }) {
  const { publicKey: s } = e;
  if (!s) throw Error("options was missing required publicKey property");
  if (r.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new vt({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: r,
      });
  } else {
    if (r.name === "NotAllowedError")
      return new vt({
        message: r.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: r,
      });
    if (r.name === "SecurityError") {
      const i = window.location.hostname;
      if (fm(i)) {
        if (s.rpId !== i)
          return new vt({
            message: `The RP ID "${s.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: r,
          });
      } else
        return new vt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: r,
        });
    } else if (r.name === "UnknownError")
      return new vt({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: r,
      });
  }
  return new vt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: r,
  });
}
class Ux {
  createNewAbortSignal() {
    if (this.controller) {
      const s = new Error("Cancelling existing WebAuthn API call for new one");
      ((s.name = "AbortError"), this.controller.abort(s));
    }
    const e = new AbortController();
    return ((this.controller = e), e.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      ((e.name = "AbortError"),
        this.controller.abort(e),
        (this.controller = void 0));
    }
  }
}
const Fx = new Ux();
function zx(r) {
  if (!r) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(r);
  const { challenge: e, user: s, excludeCredentials: i } = r,
    o = Go(r, ["challenge", "user", "excludeCredentials"]),
    l = ci(e).buffer,
    c = Object.assign(Object.assign({}, s), { id: ci(s.id).buffer }),
    h = Object.assign(Object.assign({}, o), { challenge: l, user: c });
  if (i && i.length > 0) {
    h.excludeCredentials = new Array(i.length);
    for (let f = 0; f < i.length; f++) {
      const m = i[f];
      h.excludeCredentials[f] = Object.assign(Object.assign({}, m), {
        id: ci(m.id).buffer,
        type: m.type || "public-key",
        transports: m.transports,
      });
    }
  }
  return h;
}
function Bx(r) {
  if (!r) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(r);
  const { challenge: e, allowCredentials: s } = r,
    i = Go(r, ["challenge", "allowCredentials"]),
    o = ci(e).buffer,
    l = Object.assign(Object.assign({}, i), { challenge: o });
  if (s && s.length > 0) {
    l.allowCredentials = new Array(s.length);
    for (let c = 0; c < s.length; c++) {
      const h = s[c];
      l.allowCredentials[c] = Object.assign(Object.assign({}, h), {
        id: ci(h.id).buffer,
        type: h.type || "public-key",
        transports: h.transports,
      });
    }
  }
  return l;
}
function Wx(r) {
  var e;
  if ("toJSON" in r && typeof r.toJSON == "function") return r.toJSON();
  const s = r;
  return {
    id: r.id,
    rawId: r.id,
    response: {
      attestationObject: ks(new Uint8Array(r.response.attestationObject)),
      clientDataJSON: ks(new Uint8Array(r.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: r.getClientExtensionResults(),
    authenticatorAttachment:
      (e = s.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function Hx(r) {
  var e;
  if ("toJSON" in r && typeof r.toJSON == "function") return r.toJSON();
  const s = r,
    i = r.getClientExtensionResults(),
    o = r.response;
  return {
    id: r.id,
    rawId: r.id,
    response: {
      authenticatorData: ks(new Uint8Array(o.authenticatorData)),
      clientDataJSON: ks(new Uint8Array(o.clientDataJSON)),
      signature: ks(new Uint8Array(o.signature)),
      userHandle: o.userHandle ? ks(new Uint8Array(o.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: i,
    authenticatorAttachment:
      (e = s.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function fm(r) {
  return r === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r);
}
function up() {
  var r, e;
  return !!(
    At() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((r = navigator == null ? void 0 : navigator.credentials) === null ||
    r === void 0
      ? void 0
      : r.create) == "function" &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.get) == "function"
  );
}
async function Vx(r) {
  try {
    const e = await navigator.credentials.create(r);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Bo("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Bo("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: Mx({ error: e, options: r }) };
  }
}
async function qx(r) {
  try {
    const e = await navigator.credentials.get(r);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new Bo("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new Bo("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: $x({ error: e, options: r }) };
  }
}
const Kx = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  Yx = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Wo(...r) {
  const e = (o) => o !== null && typeof o == "object" && !Array.isArray(o),
    s = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o),
    i = {};
  for (const o of r)
    if (o)
      for (const l in o) {
        const c = o[l];
        if (c !== void 0)
          if (Array.isArray(c)) i[l] = c;
          else if (s(c)) i[l] = c;
          else if (e(c)) {
            const h = i[l];
            e(h) ? (i[l] = Wo(h, c)) : (i[l] = Wo(c));
          } else i[l] = c;
      }
  return i;
}
function Gx(r, e) {
  return Wo(Kx, r, e || {});
}
function Jx(r, e) {
  return Wo(Yx, r, e || {});
}
class Qx {
  constructor(e) {
    ((this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: "webauthn" })
    );
  }
  async _challenge(
    { factorId: e, webauthn: s, friendlyName: i, signal: o },
    l
  ) {
    var c;
    try {
      const { data: h, error: f } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: s,
      });
      if (!h) return { data: null, error: f };
      const m = o ?? Fx.createNewAbortSignal();
      if (h.webauthn.type === "create") {
        const { user: v } = h.webauthn.credential_options.publicKey;
        if (!v.name) {
          const g = i;
          if (g) v.name = `${v.id}:${g}`;
          else {
            const x = (await this.client.getUser()).data.user,
              _ =
                ((c = x == null ? void 0 : x.user_metadata) === null ||
                c === void 0
                  ? void 0
                  : c.name) ||
                (x == null ? void 0 : x.email) ||
                (x == null ? void 0 : x.id) ||
                "User";
            v.name = `${v.id}:${_}`;
          }
        }
        v.displayName || (v.displayName = v.name);
      }
      switch (h.webauthn.type) {
        case "create": {
          const v = Gx(
              h.webauthn.credential_options.publicKey,
              l == null ? void 0 : l.create
            ),
            { data: g, error: b } = await Vx({ publicKey: v, signal: m });
          return g
            ? {
                data: {
                  factorId: e,
                  challengeId: h.id,
                  webauthn: { type: h.webauthn.type, credential_response: g },
                },
                error: null,
              }
            : { data: null, error: b };
        }
        case "request": {
          const v = Jx(
              h.webauthn.credential_options.publicKey,
              l == null ? void 0 : l.request
            ),
            { data: g, error: b } = await qx(
              Object.assign(Object.assign({}, h.webauthn.credential_options), {
                publicKey: v,
                signal: m,
              })
            );
          return g
            ? {
                data: {
                  factorId: e,
                  challengeId: h.id,
                  webauthn: { type: h.webauthn.type, credential_response: g },
                },
                error: null,
              }
            : { data: null, error: b };
        }
      }
    } catch (h) {
      return we(h)
        ? { data: null, error: h }
        : { data: null, error: new bs("Unexpected error in challenge", h) };
    }
  }
  async _verify({ challengeId: e, factorId: s, webauthn: i }) {
    return this.client.mfa.verify({ factorId: s, challengeId: e, webauthn: i });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: s = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: i = typeof window < "u" ? [window.location.origin] : void 0,
        signal: o,
      } = {},
    },
    l
  ) {
    if (!s)
      return {
        data: null,
        error: new ha("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!up())
        return {
          data: null,
          error: new bs("Browser does not support WebAuthn", null),
        };
      const { data: c, error: h } = await this.challenge(
        { factorId: e, webauthn: { rpId: s, rpOrigins: i }, signal: o },
        { request: l }
      );
      if (!c) return { data: null, error: h };
      const { webauthn: f } = c;
      return this._verify({
        factorId: e,
        challengeId: c.challengeId,
        webauthn: {
          type: f.type,
          rpId: s,
          rpOrigins: i,
          credential_response: f.credential_response,
        },
      });
    } catch (c) {
      return we(c)
        ? { data: null, error: c }
        : { data: null, error: new bs("Unexpected error in authenticate", c) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: s = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: i = typeof window < "u" ? [window.location.origin] : void 0,
        signal: o,
      } = {},
    },
    l
  ) {
    if (!s)
      return {
        data: null,
        error: new ha("rpId is required for WebAuthn registration"),
      };
    try {
      if (!up())
        return {
          data: null,
          error: new bs("Browser does not support WebAuthn", null),
        };
      const { data: c, error: h } = await this._enroll({ friendlyName: e });
      if (!c)
        return (
          await this.client.mfa
            .listFactors()
            .then((v) => {
              var g;
              return (g = v.data) === null || g === void 0
                ? void 0
                : g.all.find(
                    (b) =>
                      b.factor_type === "webauthn" &&
                      b.friendly_name === e &&
                      b.status !== "unverified"
                  );
            })
            .then((v) =>
              v
                ? this.client.mfa.unenroll({
                    factorId: v == null ? void 0 : v.id,
                  })
                : void 0
            ),
          { data: null, error: h }
        );
      const { data: f, error: m } = await this._challenge(
        {
          factorId: c.id,
          friendlyName: c.friendly_name,
          webauthn: { rpId: s, rpOrigins: i },
          signal: o,
        },
        { create: l }
      );
      return f
        ? this._verify({
            factorId: c.id,
            challengeId: f.challengeId,
            webauthn: {
              rpId: s,
              rpOrigins: i,
              type: f.webauthn.type,
              credential_response: f.webauthn.credential_response,
            },
          })
        : { data: null, error: m };
    } catch (c) {
      return we(c)
        ? { data: null, error: c }
        : { data: null, error: new bs("Unexpected error in register", c) };
    }
  }
}
Ax();
const Xx = {
  url: Gw,
  storageKey: Jw,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Qw,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4,
  skipAutoInitialize: !1,
};
async function cp(r, e, s) {
  return await s();
}
const ti = {};
class fa {
  get jwks() {
    var e, s;
    return (s =
      (e = ti[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && s !== void 0
      ? s
      : { keys: [] };
  }
  set jwks(e) {
    ti[this.storageKey] = Object.assign(
      Object.assign({}, ti[this.storageKey]),
      { jwks: e }
    );
  }
  get jwks_cached_at() {
    var e, s;
    return (s =
      (e = ti[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && s !== void 0
      ? s
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    ti[this.storageKey] = Object.assign(
      Object.assign({}, ti[this.storageKey]),
      { cachedAt: e }
    );
  }
  constructor(e) {
    var s, i, o;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const l = Object.assign(Object.assign({}, Xx), e);
    if (
      ((this.storageKey = l.storageKey),
      (this.instanceID =
        (s = fa.nextInstanceID[this.storageKey]) !== null && s !== void 0
          ? s
          : 0),
      (fa.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!l.debug),
      typeof l.debug == "function" && (this.logger = l.debug),
      this.instanceID > 0 && At())
    ) {
      const c = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(c), this.logDebugMessages && console.trace(c));
    }
    if (
      ((this.persistSession = l.persistSession),
      (this.autoRefreshToken = l.autoRefreshToken),
      (this.admin = new Px({ url: l.url, headers: l.headers, fetch: l.fetch })),
      (this.url = l.url),
      (this.headers = l.headers),
      (this.fetch = cm(l.fetch)),
      (this.lock = l.lock || cp),
      (this.detectSessionInUrl = l.detectSessionInUrl),
      (this.flowType = l.flowType),
      (this.hasCustomAuthorizationHeader = l.hasCustomAuthorizationHeader),
      (this.throwOnError = l.throwOnError),
      (this.lockAcquireTimeout = l.lockAcquireTimeout),
      l.lock
        ? (this.lock = l.lock)
        : this.persistSession &&
            At() &&
            !(
              (i = globalThis == null ? void 0 : globalThis.navigator) ===
                null || i === void 0
            ) &&
            i.locks
          ? (this.lock = Ox)
          : (this.lock = cp),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new Qx(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (l.storage
            ? (this.storage = l.storage)
            : um()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = op(this.memoryStorage))),
          l.userStorage && (this.userStorage = l.userStorage))
        : ((this.memoryStorage = {}), (this.storage = op(this.memoryStorage))),
      At() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (c) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          c
        );
      }
      (o = this.broadcastChannel) === null ||
        o === void 0 ||
        o.addEventListener("message", async (c) => {
          this._debug(
            "received broadcast notification from other tab or client",
            c
          );
          try {
            await this._notifyAllSubscribers(c.data.event, c.data.session, !1);
          } catch (h) {
            this._debug("#broadcastChannel", "error", h);
          }
        });
    }
    l.skipAutoInitialize ||
      this.initialize().catch((c) => {
        this._debug("#initialize()", "error", c);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${am}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...e),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize()
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var e;
    try {
      let s = {},
        i = "none";
      if (
        (At() &&
          ((s = dx(window.location.href)),
          this._isImplicitGrantCallback(s)
            ? (i = "implicit")
            : (await this._isPKCECallback(s)) && (i = "pkce")),
        At() && this.detectSessionInUrl && i !== "none")
      ) {
        const { data: o, error: l } = await this._getSessionFromURL(s, i);
        if (l) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              l
            ),
            rx(l))
          ) {
            const f =
              (e = l.details) === null || e === void 0 ? void 0 : e.code;
            if (
              f === "identity_already_exists" ||
              f === "identity_not_found" ||
              f === "single_identity_not_deletable"
            )
              return { error: l };
          }
          return { error: l };
        }
        const { session: c, redirectType: h } = o;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            c,
            "redirect type",
            h
          ),
          await this._saveSession(c),
          setTimeout(async () => {
            h === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", c)
              : await this._notifyAllSubscribers("SIGNED_IN", c);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (s) {
      return we(s)
        ? this._returnResult({ error: s })
        : this._returnResult({
            error: new bs("Unexpected error during initialization", s),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(e) {
    var s, i, o;
    try {
      const l = await Ce(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (i =
                (s = e == null ? void 0 : e.options) === null || s === void 0
                  ? void 0
                  : s.data) !== null && i !== void 0
                ? i
                : {},
            gotrue_meta_security: {
              captcha_token:
                (o = e == null ? void 0 : e.options) === null || o === void 0
                  ? void 0
                  : o.captchaToken,
            },
          },
          xform: Ir,
        }),
        { data: c, error: h } = l;
      if (h || !c)
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      const f = c.session,
        m = c.user;
      return (
        c.session &&
          (await this._saveSession(c.session),
          await this._notifyAllSubscribers("SIGNED_IN", f)),
        this._returnResult({ data: { user: m, session: f }, error: null })
      );
    } catch (l) {
      if (we(l))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async signUp(e) {
    var s, i, o;
    try {
      let l;
      if ("email" in e) {
        const { email: v, password: g, options: b } = e;
        let x = null,
          _ = null;
        (this.flowType === "pkce" &&
          ([x, _] = await Xs(this.storage, this.storageKey)),
          (l = await Ce(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: b == null ? void 0 : b.emailRedirectTo,
            body: {
              email: v,
              password: g,
              data:
                (s = b == null ? void 0 : b.data) !== null && s !== void 0
                  ? s
                  : {},
              gotrue_meta_security: {
                captcha_token: b == null ? void 0 : b.captchaToken,
              },
              code_challenge: x,
              code_challenge_method: _,
            },
            xform: Ir,
          })));
      } else if ("phone" in e) {
        const { phone: v, password: g, options: b } = e;
        l = await Ce(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: v,
            password: g,
            data:
              (i = b == null ? void 0 : b.data) !== null && i !== void 0
                ? i
                : {},
            channel:
              (o = b == null ? void 0 : b.channel) !== null && o !== void 0
                ? o
                : "sms",
            gotrue_meta_security: {
              captcha_token: b == null ? void 0 : b.captchaToken,
            },
          },
          xform: Ir,
        });
      } else
        throw new Oo(
          "You must provide either an email or phone number and a password"
        );
      const { data: c, error: h } = l;
      if (h || !c)
        return (
          await Ot(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: h })
        );
      const f = c.session,
        m = c.user;
      return (
        c.session &&
          (await this._saveSession(c.session),
          await this._notifyAllSubscribers("SIGNED_IN", f)),
        this._returnResult({ data: { user: m, session: f }, error: null })
      );
    } catch (l) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(l)))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async signInWithPassword(e) {
    try {
      let s;
      if ("email" in e) {
        const { email: l, password: c, options: h } = e;
        s = await Ce(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: l,
              password: c,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            xform: ip,
          }
        );
      } else if ("phone" in e) {
        const { phone: l, password: c, options: h } = e;
        s = await Ce(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: l,
              password: c,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            xform: ip,
          }
        );
      } else
        throw new Oo(
          "You must provide either an email or phone number and a password"
        );
      const { data: i, error: o } = s;
      if (o)
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      if (!i || !i.session || !i.user) {
        const l = new Qs();
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", i.session)),
        this._returnResult({
          data: Object.assign(
            { user: i.user, session: i.session },
            i.weak_password ? { weakPassword: i.weak_password } : null
          ),
          error: o,
        })
      );
    } catch (s) {
      if (we(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithOAuth(e) {
    var s, i, o, l;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo,
      scopes: (i = e.options) === null || i === void 0 ? void 0 : i.scopes,
      queryParams:
        (o = e.options) === null || o === void 0 ? void 0 : o.queryParams,
      skipBrowserRedirect:
        (l = e.options) === null || l === void 0
          ? void 0
          : l.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(e) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(e)
      )
    );
  }
  async signInWithWeb3(e) {
    const { chain: s } = e;
    switch (s) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`);
    }
  }
  async signInWithEthereum(e) {
    var s, i, o, l, c, h, f, m, v, g, b;
    let x, _;
    if ("message" in e) ((x = e.message), (_ = e.signature));
    else {
      const { chain: j, wallet: k, statement: P, options: T } = e;
      let O;
      if (At())
        if (typeof k == "object") O = k;
        else {
          const ne = window;
          if (
            "ethereum" in ne &&
            typeof ne.ethereum == "object" &&
            "request" in ne.ethereum &&
            typeof ne.ethereum.request == "function"
          )
            O = ne.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof k != "object" || !(T != null && T.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        O = k;
      }
      const F = new URL(
          (s = T == null ? void 0 : T.url) !== null && s !== void 0
            ? s
            : window.location.href
        ),
        q = await O.request({ method: "eth_requestAccounts" })
          .then((ne) => ne)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid"
            );
          });
      if (!q || q.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected."
        );
      const Q = hm(q[0]);
      let I =
        (i = T == null ? void 0 : T.signInWithEthereum) === null || i === void 0
          ? void 0
          : i.chainId;
      if (!I) {
        const ne = await O.request({ method: "eth_chainId" });
        I = Dx(ne);
      }
      const Z = {
        domain: F.host,
        address: Q,
        statement: P,
        uri: F.href,
        version: "1",
        chainId: I,
        nonce:
          (o = T == null ? void 0 : T.signInWithEthereum) === null ||
          o === void 0
            ? void 0
            : o.nonce,
        issuedAt:
          (c =
            (l = T == null ? void 0 : T.signInWithEthereum) === null ||
            l === void 0
              ? void 0
              : l.issuedAt) !== null && c !== void 0
            ? c
            : new Date(),
        expirationTime:
          (h = T == null ? void 0 : T.signInWithEthereum) === null ||
          h === void 0
            ? void 0
            : h.expirationTime,
        notBefore:
          (f = T == null ? void 0 : T.signInWithEthereum) === null ||
          f === void 0
            ? void 0
            : f.notBefore,
        requestId:
          (m = T == null ? void 0 : T.signInWithEthereum) === null ||
          m === void 0
            ? void 0
            : m.requestId,
        resources:
          (v = T == null ? void 0 : T.signInWithEthereum) === null ||
          v === void 0
            ? void 0
            : v.resources,
      };
      ((x = Lx(Z)),
        (_ = await O.request({ method: "personal_sign", params: [Ix(x), Q] })));
    }
    try {
      const { data: j, error: k } = await Ce(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: x, signature: _ },
            !((g = e.options) === null || g === void 0) && g.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (b = e.options) === null || b === void 0
                        ? void 0
                        : b.captchaToken,
                  },
                }
              : null
          ),
          xform: Ir,
        }
      );
      if (k) throw k;
      if (!j || !j.session || !j.user) {
        const P = new Qs();
        return this._returnResult({
          data: { user: null, session: null },
          error: P,
        });
      }
      return (
        j.session &&
          (await this._saveSession(j.session),
          await this._notifyAllSubscribers("SIGNED_IN", j.session)),
        this._returnResult({ data: Object.assign({}, j), error: k })
      );
    } catch (j) {
      if (we(j))
        return this._returnResult({
          data: { user: null, session: null },
          error: j,
        });
      throw j;
    }
  }
  async signInWithSolana(e) {
    var s, i, o, l, c, h, f, m, v, g, b, x;
    let _, j;
    if ("message" in e) ((_ = e.message), (j = e.signature));
    else {
      const { chain: k, wallet: P, statement: T, options: O } = e;
      let F;
      if (At())
        if (typeof P == "object") F = P;
        else {
          const Q = window;
          if (
            "solana" in Q &&
            typeof Q.solana == "object" &&
            (("signIn" in Q.solana && typeof Q.solana.signIn == "function") ||
              ("signMessage" in Q.solana &&
                typeof Q.solana.signMessage == "function"))
          )
            F = Q.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof P != "object" || !(O != null && O.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        F = P;
      }
      const q = new URL(
        (s = O == null ? void 0 : O.url) !== null && s !== void 0
          ? s
          : window.location.href
      );
      if ("signIn" in F && F.signIn) {
        const Q = await F.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                O == null ? void 0 : O.signInWithSolana
              ),
              { version: "1", domain: q.host, uri: q.href }
            ),
            T ? { statement: T } : null
          )
        );
        let I;
        if (Array.isArray(Q) && Q[0] && typeof Q[0] == "object") I = Q[0];
        else if (
          Q &&
          typeof Q == "object" &&
          "signedMessage" in Q &&
          "signature" in Q
        )
          I = Q;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in I &&
          "signature" in I &&
          (typeof I.signedMessage == "string" ||
            I.signedMessage instanceof Uint8Array) &&
          I.signature instanceof Uint8Array
        )
          ((_ =
            typeof I.signedMessage == "string"
              ? I.signedMessage
              : new TextDecoder().decode(I.signedMessage)),
            (j = I.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in F) ||
          typeof F.signMessage != "function" ||
          !("publicKey" in F) ||
          typeof F != "object" ||
          !F.publicKey ||
          !("toBase58" in F.publicKey) ||
          typeof F.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        _ = [
          `${q.host} wants you to sign in with your Solana account:`,
          F.publicKey.toBase58(),
          ...(T ? ["", T, ""] : [""]),
          "Version: 1",
          `URI: ${q.href}`,
          `Issued At: ${(o = (i = O == null ? void 0 : O.signInWithSolana) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : new Date().toISOString()}`,
          ...(!(
            (l = O == null ? void 0 : O.signInWithSolana) === null ||
            l === void 0
          ) && l.notBefore
            ? [`Not Before: ${O.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (c = O == null ? void 0 : O.signInWithSolana) === null ||
            c === void 0
          ) && c.expirationTime
            ? [`Expiration Time: ${O.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (h = O == null ? void 0 : O.signInWithSolana) === null ||
            h === void 0
          ) && h.chainId
            ? [`Chain ID: ${O.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (f = O == null ? void 0 : O.signInWithSolana) === null ||
            f === void 0
          ) && f.nonce
            ? [`Nonce: ${O.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (m = O == null ? void 0 : O.signInWithSolana) === null ||
            m === void 0
          ) && m.requestId
            ? [`Request ID: ${O.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (g =
              (v = O == null ? void 0 : O.signInWithSolana) === null ||
              v === void 0
                ? void 0
                : v.resources) === null || g === void 0
          ) && g.length
            ? [
                "Resources",
                ...O.signInWithSolana.resources.map((I) => `- ${I}`),
              ]
            : []),
        ].join(`
`);
        const Q = await F.signMessage(new TextEncoder().encode(_), "utf8");
        if (!Q || !(Q instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        j = Q;
      }
    }
    try {
      const { data: k, error: P } = await Ce(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: _, signature: ks(j) },
            !((b = e.options) === null || b === void 0) && b.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (x = e.options) === null || x === void 0
                        ? void 0
                        : x.captchaToken,
                  },
                }
              : null
          ),
          xform: Ir,
        }
      );
      if (P) throw P;
      if (!k || !k.session || !k.user) {
        const T = new Qs();
        return this._returnResult({
          data: { user: null, session: null },
          error: T,
        });
      }
      return (
        k.session &&
          (await this._saveSession(k.session),
          await this._notifyAllSubscribers("SIGNED_IN", k.session)),
        this._returnResult({ data: Object.assign({}, k), error: P })
      );
    } catch (k) {
      if (we(k))
        return this._returnResult({
          data: { user: null, session: null },
          error: k,
        });
      throw k;
    }
  }
  async _exchangeCodeForSession(e) {
    const s = await ys(this.storage, `${this.storageKey}-code-verifier`),
      [i, o] = (s ?? "").split("/");
    try {
      if (!i && this.flowType === "pkce") throw new nx();
      const { data: l, error: c } = await Ce(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: i },
          xform: Ir,
        }
      );
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), c))
        throw c;
      if (!l || !l.session || !l.user) {
        const h = new Qs();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: h,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, l), {
            redirectType: o ?? null,
          }),
          error: c,
        })
      );
    } catch (l) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(l)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: l,
        });
      throw l;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
          options: s,
          provider: i,
          token: o,
          access_token: l,
          nonce: c,
        } = e,
        h = await Ce(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: i,
              id_token: o,
              access_token: l,
              nonce: c,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
            xform: Ir,
          }
        ),
        { data: f, error: m } = h;
      if (m)
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      if (!f || !f.session || !f.user) {
        const v = new Qs();
        return this._returnResult({
          data: { user: null, session: null },
          error: v,
        });
      }
      return (
        f.session &&
          (await this._saveSession(f.session),
          await this._notifyAllSubscribers("SIGNED_IN", f.session)),
        this._returnResult({ data: f, error: m })
      );
    } catch (s) {
      if (we(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithOtp(e) {
    var s, i, o, l, c;
    try {
      if ("email" in e) {
        const { email: h, options: f } = e;
        let m = null,
          v = null;
        this.flowType === "pkce" &&
          ([m, v] = await Xs(this.storage, this.storageKey));
        const { error: g } = await Ce(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: h,
            data:
              (s = f == null ? void 0 : f.data) !== null && s !== void 0
                ? s
                : {},
            create_user:
              (i = f == null ? void 0 : f.shouldCreateUser) !== null &&
              i !== void 0
                ? i
                : !0,
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
            code_challenge: m,
            code_challenge_method: v,
          },
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      if ("phone" in e) {
        const { phone: h, options: f } = e,
          { data: m, error: v } = await Ce(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: h,
                data:
                  (o = f == null ? void 0 : f.data) !== null && o !== void 0
                    ? o
                    : {},
                create_user:
                  (l = f == null ? void 0 : f.shouldCreateUser) !== null &&
                  l !== void 0
                    ? l
                    : !0,
                gotrue_meta_security: {
                  captcha_token: f == null ? void 0 : f.captchaToken,
                },
                channel:
                  (c = f == null ? void 0 : f.channel) !== null && c !== void 0
                    ? c
                    : "sms",
              },
            }
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: m == null ? void 0 : m.message_id,
          },
          error: v,
        });
      }
      throw new Oo("You must provide either an email or phone number.");
    } catch (h) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(h)))
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      throw h;
    }
  }
  async verifyOtp(e) {
    var s, i;
    try {
      let o, l;
      "options" in e &&
        ((o = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo),
        (l =
          (i = e.options) === null || i === void 0 ? void 0 : i.captchaToken));
      const { data: c, error: h } = await Ce(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: l },
          }),
          redirectTo: o,
          xform: Ir,
        }
      );
      if (h) throw h;
      if (!c) throw new Error("An error occurred on token verification.");
      const f = c.session,
        m = c.user;
      return (
        f != null &&
          f.access_token &&
          (await this._saveSession(f),
          await this._notifyAllSubscribers(
            e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            f
          )),
        this._returnResult({ data: { user: m, session: f }, error: null })
      );
    } catch (o) {
      if (we(o))
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      throw o;
    }
  }
  async signInWithSSO(e) {
    var s, i, o, l, c;
    try {
      let h = null,
        f = null;
      this.flowType === "pkce" &&
        ([h, f] = await Xs(this.storage, this.storageKey));
      const m = await Ce(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in e ? { provider_id: e.providerId } : null
                ),
                "domain" in e ? { domain: e.domain } : null
              ),
              {
                redirect_to:
                  (i =
                    (s = e.options) === null || s === void 0
                      ? void 0
                      : s.redirectTo) !== null && i !== void 0
                    ? i
                    : void 0,
              }
            ),
            !((o = e == null ? void 0 : e.options) === null || o === void 0) &&
              o.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: e.options.captchaToken,
                  },
                }
              : null
          ),
          {
            skip_http_redirect: !0,
            code_challenge: h,
            code_challenge_method: f,
          }
        ),
        headers: this.headers,
        xform: Rx,
      });
      return (
        !((l = m.data) === null || l === void 0) &&
          l.url &&
          At() &&
          !(
            !((c = e.options) === null || c === void 0) && c.skipBrowserRedirect
          ) &&
          window.location.assign(m.data.url),
        this._returnResult(m)
      );
    } catch (h) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(h)))
        return this._returnResult({ data: null, error: h });
      throw h;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate()
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: s },
          error: i,
        } = e;
        if (i) throw i;
        if (!s) throw new dr();
        const { error: o } = await Ce(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: s.access_token }
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      });
    } catch (e) {
      if (we(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    try {
      const s = `${this.url}/resend`;
      if ("email" in e) {
        const { email: i, type: o, options: l } = e,
          { error: c } = await Ce(this.fetch, "POST", s, {
            headers: this.headers,
            body: {
              email: i,
              type: o,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      } else if ("phone" in e) {
        const { phone: i, type: o, options: l } = e,
          { data: c, error: h } = await Ce(this.fetch, "POST", s, {
            headers: this.headers,
            body: {
              phone: i,
              type: o,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: c == null ? void 0 : c.message_id,
          },
          error: h,
        });
      }
      throw new Oo(
        "You must provide either an email or phone number and a type"
      );
    } catch (s) {
      if (we(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (s) => s)
      )
    );
  }
  async _acquireLock(e, s) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const i = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          o = (async () => (await i, await s()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await o;
              } catch {}
            })()
          ),
          o
        );
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const i = s();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await i;
                } catch {}
              })()
            ),
              await i;
            this.pendingInLock.length;
          ) {
            const o = [...this.pendingInLock];
            (await Promise.all(o), this.pendingInLock.splice(0, o.length));
          }
          return await i;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const s = await this.__loadSession();
      return await e(s);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        ));
    try {
      let e = null;
      const s = await ys(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", s),
        s !== null &&
          (this._isValidSession(s)
            ? (e = s)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const i = e.expires_at ? e.expires_at * 1e3 - Date.now() < qu : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${i ? "" : " not"} expired`,
          "expires_at",
          e.expires_at
        ),
        !i)
      ) {
        if (this.userStorage) {
          const c = await ys(this.userStorage, this.storageKey + "-user");
          c != null && c.user ? (e.user = c.user) : (e.user = Gu());
        }
        if (
          this.storage.isServer &&
          e.user &&
          !e.user.__isUserNotAvailableProxy
        ) {
          const c = { value: this.suppressGetSessionWarning };
          ((e.user = Sx(e.user, c)),
            c.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: e }, error: null };
      }
      const { data: o, error: l } = await this._callRefreshToken(
        e.refresh_token
      );
      return l
        ? this._returnResult({ data: { session: null }, error: l })
        : this._returnResult({ data: { session: o }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) return await this._getUser(e);
    await this.initializePromise;
    const s = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser()
    );
    return (s.data.user && (this.suppressGetSessionWarning = !0), s);
  }
  async _getUser(e) {
    try {
      return e
        ? await Ce(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: qn,
          })
        : await this._useSession(async (s) => {
            var i, o, l;
            const { data: c, error: h } = s;
            if (h) throw h;
            return !(
              !((i = c.session) === null || i === void 0) && i.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new dr() }
              : await Ce(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (l =
                      (o = c.session) === null || o === void 0
                        ? void 0
                        : o.access_token) !== null && l !== void 0
                      ? l
                      : void 0,
                  xform: qn,
                });
          });
    } catch (s) {
      if (we(s))
        return (
          Ku(s) &&
            (await this._removeSession(),
            await Ot(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: s })
        );
      throw s;
    }
  }
  async updateUser(e, s = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(e, s)
      )
    );
  }
  async _updateUser(e, s = {}) {
    try {
      return await this._useSession(async (i) => {
        const { data: o, error: l } = i;
        if (l) throw l;
        if (!o.session) throw new dr();
        const c = o.session;
        let h = null,
          f = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([h, f] = await Xs(this.storage, this.storageKey));
        const { data: m, error: v } = await Ce(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: s == null ? void 0 : s.emailRedirectTo,
            body: Object.assign(Object.assign({}, e), {
              code_challenge: h,
              code_challenge_method: f,
            }),
            jwt: c.access_token,
            xform: qn,
          }
        );
        if (v) throw v;
        return (
          (c.user = m.user),
          await this._saveSession(c),
          await this._notifyAllSubscribers("USER_UPDATED", c),
          this._returnResult({ data: { user: c.user }, error: null })
        );
      });
    } catch (i) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(i)))
        return this._returnResult({ data: { user: null }, error: i });
      throw i;
    }
  }
  async setSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(e)
      )
    );
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) throw new dr();
      const s = Date.now() / 1e3;
      let i = s,
        o = !0,
        l = null;
      const { payload: c } = Do(e.access_token);
      if ((c.exp && ((i = c.exp), (o = i <= s)), o)) {
        const { data: h, error: f } = await this._callRefreshToken(
          e.refresh_token
        );
        if (f)
          return this._returnResult({
            data: { user: null, session: null },
            error: f,
          });
        if (!h) return { data: { user: null, session: null }, error: null };
        l = h;
      } else {
        const { data: h, error: f } = await this._getUser(e.access_token);
        if (f)
          return this._returnResult({
            data: { user: null, session: null },
            error: f,
          });
        ((l = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: h.user,
          token_type: "bearer",
          expires_in: i - s,
          expires_at: i,
        }),
          await this._saveSession(l),
          await this._notifyAllSubscribers("SIGNED_IN", l));
      }
      return this._returnResult({
        data: { user: l.user, session: l },
        error: null,
      });
    } catch (s) {
      if (we(s))
        return this._returnResult({
          data: { session: null, user: null },
          error: s,
        });
      throw s;
    }
  }
  async refreshSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(e)
      )
    );
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (s) => {
        var i;
        if (!e) {
          const { data: c, error: h } = s;
          if (h) throw h;
          e = (i = c.session) !== null && i !== void 0 ? i : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new dr();
        const { data: o, error: l } = await this._callRefreshToken(
          e.refresh_token
        );
        return l
          ? this._returnResult({
              data: { user: null, session: null },
              error: l,
            })
          : o
            ? this._returnResult({
                data: { user: o.user, session: o },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (s) {
      if (we(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async _getSessionFromURL(e, s) {
    try {
      if (!At()) throw new Ao("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Ao(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          }
        );
      switch (s) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Xf("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Ao("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new Xf("No code detected.");
        const { data: T, error: O } = await this._exchangeCodeForSession(
          e.code
        );
        if (O) throw O;
        const F = new URL(window.location.href);
        return (
          F.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", F.toString()),
          { data: { session: T.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: i,
        provider_refresh_token: o,
        access_token: l,
        refresh_token: c,
        expires_in: h,
        expires_at: f,
        token_type: m,
      } = e;
      if (!l || !h || !c || !m) throw new Ao("No session defined in URL");
      const v = Math.round(Date.now() / 1e3),
        g = parseInt(h);
      let b = v + g;
      f && (b = parseInt(f));
      const x = b - v;
      x * 1e3 <= ii &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${x}s, should have been closer to ${g}s`
        );
      const _ = b - g;
      v - _ >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            _,
            b,
            v
          )
        : v - _ < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            _,
            b,
            v
          );
      const { data: j, error: k } = await this._getUser(l);
      if (k) throw k;
      const P = {
        provider_token: i,
        provider_refresh_token: o,
        access_token: l,
        expires_in: g,
        expires_at: b,
        refresh_token: c,
        token_type: m,
        user: j.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: P, redirectType: e.type },
          error: null,
        })
      );
    } catch (i) {
      if (we(i))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), e)
      : !!(e.access_token || e.error_description);
  }
  async _isPKCECallback(e) {
    const s = await ys(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && s);
  }
  async signOut(e = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(e)
      )
    );
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (s) => {
      var i;
      const { data: o, error: l } = s;
      if (l && !Ku(l)) return this._returnResult({ error: l });
      const c =
        (i = o.session) === null || i === void 0 ? void 0 : i.access_token;
      if (c) {
        const { error: h } = await this.admin.signOut(c, e);
        if (
          h &&
          !(
            (tx(h) &&
              (h.status === 404 || h.status === 401 || h.status === 403)) ||
            Ku(h)
          )
        )
          return this._returnResult({ error: h });
      }
      return (
        e !== "others" &&
          (await this._removeSession(),
          await Ot(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const s = cx(),
      i = {
        id: s,
        callback: e,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            s
          ),
            this.stateChangeEmitters.delete(s));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", s),
      this.stateChangeEmitters.set(s, i),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(s);
        })
      ))(),
      { data: { subscription: i } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (s) => {
      var i, o;
      try {
        const {
          data: { session: l },
          error: c,
        } = s;
        if (c) throw c;
        (await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", l)),
          this._debug("INITIAL_SESSION", "callback id", e, "session", l));
      } catch (l) {
        (await ((o = this.stateChangeEmitters.get(e)) === null || o === void 0
          ? void 0
          : o.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", e, "error", l),
          console.error(l));
      }
    });
  }
  async resetPasswordForEmail(e, s = {}) {
    let i = null,
      o = null;
    this.flowType === "pkce" &&
      ([i, o] = await Xs(this.storage, this.storageKey, !0));
    try {
      return await Ce(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: i,
          code_challenge_method: o,
          gotrue_meta_security: { captcha_token: s.captchaToken },
        },
        headers: this.headers,
        redirectTo: s.redirectTo,
      });
    } catch (l) {
      if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(l)))
        return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: s, error: i } = await this.getUser();
      if (i) throw i;
      return this._returnResult({
        data: {
          identities: (e = s.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var s;
    try {
      const { data: i, error: o } = await this._useSession(async (l) => {
        var c, h, f, m, v;
        const { data: g, error: b } = l;
        if (b) throw b;
        const x = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (c = e.options) === null || c === void 0 ? void 0 : c.redirectTo,
            scopes:
              (h = e.options) === null || h === void 0 ? void 0 : h.scopes,
            queryParams:
              (f = e.options) === null || f === void 0 ? void 0 : f.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await Ce(this.fetch, "GET", x, {
          headers: this.headers,
          jwt:
            (v =
              (m = g.session) === null || m === void 0
                ? void 0
                : m.access_token) !== null && v !== void 0
              ? v
              : void 0,
        });
      });
      if (o) throw o;
      return (
        At() &&
          !(
            !((s = e.options) === null || s === void 0) && s.skipBrowserRedirect
          ) &&
          window.location.assign(i == null ? void 0 : i.url),
        this._returnResult({
          data: { provider: e.provider, url: i == null ? void 0 : i.url },
          error: null,
        })
      );
    } catch (i) {
      if (we(i))
        return this._returnResult({
          data: { provider: e.provider, url: null },
          error: i,
        });
      throw i;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (s) => {
      var i;
      try {
        const {
          error: o,
          data: { session: l },
        } = s;
        if (o) throw o;
        const {
            options: c,
            provider: h,
            token: f,
            access_token: m,
            nonce: v,
          } = e,
          g = await Ce(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (i = l == null ? void 0 : l.access_token) !== null &&
                i !== void 0
                  ? i
                  : void 0,
              body: {
                provider: h,
                id_token: f,
                access_token: m,
                nonce: v,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: c == null ? void 0 : c.captchaToken,
                },
              },
              xform: Ir,
            }
          ),
          { data: b, error: x } = g;
        return x
          ? this._returnResult({
              data: { user: null, session: null },
              error: x,
            })
          : !b || !b.session || !b.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Qs(),
              })
            : (b.session &&
                (await this._saveSession(b.session),
                await this._notifyAllSubscribers("USER_UPDATED", b.session)),
              this._returnResult({ data: b, error: x }));
      } catch (o) {
        if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), we(o)))
          return this._returnResult({
            data: { user: null, session: null },
            error: o,
          });
        throw o;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (s) => {
        var i, o;
        const { data: l, error: c } = s;
        if (c) throw c;
        return await Ce(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (o =
                (i = l.session) === null || i === void 0
                  ? void 0
                  : i.access_token) !== null && o !== void 0
                ? o
                : void 0,
          }
        );
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _refreshAccessToken(e) {
    const s = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      const i = Date.now();
      return await px(
        async (o) => (
          o > 0 && (await fx(200 * Math.pow(2, o - 1))),
          this._debug(s, "refreshing attempt", o),
          await Ce(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: Ir }
          )
        ),
        (o, l) => {
          const c = 200 * Math.pow(2, o);
          return l && Yu(l) && Date.now() + c - i < ii;
        }
      );
    } catch (i) {
      if ((this._debug(s, "error", i), we(i)))
        return this._returnResult({
          data: { session: null, user: null },
          error: i,
        });
      throw i;
    } finally {
      this._debug(s, "end");
    }
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  async _handleProviderSignIn(e, s) {
    const i = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: s.redirectTo,
      scopes: s.scopes,
      queryParams: s.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        s,
        "url",
        i
      ),
      At() && !s.skipBrowserRedirect && window.location.assign(i),
      { data: { provider: e, url: i }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, s;
    const i = "#_recoverAndRefresh()";
    this._debug(i, "begin");
    try {
      const o = await ys(this.storage, this.storageKey);
      if (o && this.userStorage) {
        let c = await ys(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !c &&
          ((c = { user: o.user }),
          await ai(this.userStorage, this.storageKey + "-user", c)),
          (o.user =
            (e = c == null ? void 0 : c.user) !== null && e !== void 0
              ? e
              : Gu()));
      } else if (o && !o.user && !o.user) {
        const c = await ys(this.storage, this.storageKey + "-user");
        c && c != null && c.user
          ? ((o.user = c.user),
            await Ot(this.storage, this.storageKey + "-user"),
            await ai(this.storage, this.storageKey, o))
          : (o.user = Gu());
      }
      if (
        (this._debug(i, "session from storage", o), !this._isValidSession(o))
      ) {
        (this._debug(i, "session is not valid"),
          o !== null && (await this._removeSession()));
        return;
      }
      const l =
        ((s = o.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 -
          Date.now() <
        qu;
      if (
        (this._debug(
          i,
          `session has${l ? "" : " not"} expired with margin of ${qu}s`
        ),
        l)
      ) {
        if (this.autoRefreshToken && o.refresh_token) {
          const { error: c } = await this._callRefreshToken(o.refresh_token);
          c &&
            (console.error(c),
            Yu(c) ||
              (this._debug(
                i,
                "refresh failed with a non-retryable error, removing the session",
                c
              ),
              await this._removeSession()));
        }
      } else if (o.user && o.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: c, error: h } = await this._getUser(o.access_token);
          !h && c != null && c.user
            ? ((o.user = c.user),
              await this._saveSession(o),
              await this._notifyAllSubscribers("SIGNED_IN", o))
            : this._debug(
                i,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (c) {
          (console.error("Error getting user data:", c),
            this._debug(
              i,
              "error getting user data, skipping SIGNED_IN notification",
              c
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", o);
    } catch (o) {
      (this._debug(i, "error", o), console.error(o));
      return;
    } finally {
      this._debug(i, "end");
    }
  }
  async _callRefreshToken(e) {
    var s, i;
    if (!e) throw new dr();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const o = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(o, "begin");
    try {
      this.refreshingDeferred = new Xo();
      const { data: l, error: c } = await this._refreshAccessToken(e);
      if (c) throw c;
      if (!l.session) throw new dr();
      (await this._saveSession(l.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", l.session));
      const h = { data: l.session, error: null };
      return (this.refreshingDeferred.resolve(h), h);
    } catch (l) {
      if ((this._debug(o, "error", l), we(l))) {
        const c = { data: null, error: l };
        return (
          Yu(l) || (await this._removeSession()),
          (s = this.refreshingDeferred) === null ||
            s === void 0 ||
            s.resolve(c),
          c
        );
      }
      throw (
        (i = this.refreshingDeferred) === null || i === void 0 || i.reject(l),
        l
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(o, "end"));
    }
  }
  async _notifyAllSubscribers(e, s, i = !0) {
    const o = `#_notifyAllSubscribers(${e})`;
    this._debug(o, "begin", s, `broadcast = ${i}`);
    try {
      this.broadcastChannel &&
        i &&
        this.broadcastChannel.postMessage({ event: e, session: s });
      const l = [],
        c = Array.from(this.stateChangeEmitters.values()).map(async (h) => {
          try {
            await h.callback(e, s);
          } catch (f) {
            l.push(f);
          }
        });
      if ((await Promise.all(c), l.length > 0)) {
        for (let h = 0; h < l.length; h += 1) console.error(l[h]);
        throw l[0];
      }
    } finally {
      this._debug(o, "end");
    }
  }
  async _saveSession(e) {
    (this._debug("#_saveSession()", e),
      (this.suppressGetSessionWarning = !0),
      await Ot(this.storage, `${this.storageKey}-code-verifier`));
    const s = Object.assign({}, e),
      i = s.user && s.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !i &&
        s.user &&
        (await ai(this.userStorage, this.storageKey + "-user", {
          user: s.user,
        }));
      const o = Object.assign({}, s);
      delete o.user;
      const l = np(o);
      await ai(this.storage, this.storageKey, l);
    } else {
      const o = np(s);
      await ai(this.storage, this.storageKey, o);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await Ot(this.storage, this.storageKey),
      await Ot(this.storage, this.storageKey + "-code-verifier"),
      await Ot(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Ot(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        At() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (s) {
      console.error("removing visibilitychange callback failed", s);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const e = setInterval(() => this._autoRefreshTokenTick(), ii);
    ((this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e));
    const s = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = s),
      s && typeof s == "object" && typeof s.unref == "function"
        ? s.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(s));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), e && clearInterval(e));
    const s = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), s && clearTimeout(s));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (s) => {
              const {
                data: { session: i },
              } = s;
              if (!i || !i.refresh_token || !i.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const o = Math.floor((i.expires_at * 1e3 - e) / ii);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${o} ticks, a tick lasts ${ii}ms, refresh threshold is ${uc} ticks`
              ),
                o <= uc && (await this._callRefreshToken(i.refresh_token)));
            });
          } catch (s) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              s
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof dm)
        this._debug("auto refresh token tick lock not available");
      else throw e;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !At() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0));
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const s = `#_onVisibilityChanged(${e})`;
    (this._debug(s, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          e ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  s,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(e, s, i) {
    const o = [`provider=${encodeURIComponent(s)}`];
    if (
      (i != null &&
        i.redirectTo &&
        o.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),
      i != null && i.scopes && o.push(`scopes=${encodeURIComponent(i.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [l, c] = await Xs(this.storage, this.storageKey),
        h = new URLSearchParams({
          code_challenge: `${encodeURIComponent(l)}`,
          code_challenge_method: `${encodeURIComponent(c)}`,
        });
      o.push(h.toString());
    }
    if (i != null && i.queryParams) {
      const l = new URLSearchParams(i.queryParams);
      o.push(l.toString());
    }
    return (
      i != null &&
        i.skipBrowserRedirect &&
        o.push(`skip_http_redirect=${i.skipBrowserRedirect}`),
      `${e}?${o.join("&")}`
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (s) => {
        var i;
        const { data: o, error: l } = s;
        return l
          ? this._returnResult({ data: null, error: l })
          : await Ce(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${e.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (i = o == null ? void 0 : o.session) === null || i === void 0
                    ? void 0
                    : i.access_token,
              }
            );
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (s) => {
        var i, o;
        const { data: l, error: c } = s;
        if (c) return this._returnResult({ data: null, error: c });
        const h = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
                ? { issuer: e.issuer }
                : {}
          ),
          { data: f, error: m } = await Ce(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: h,
              headers: this.headers,
              jwt:
                (i = l == null ? void 0 : l.session) === null || i === void 0
                  ? void 0
                  : i.access_token,
            }
          );
        return m
          ? this._returnResult({ data: null, error: m })
          : (e.factorType === "totp" &&
              f.type === "totp" &&
              !((o = f == null ? void 0 : f.totp) === null || o === void 0) &&
              o.qr_code &&
              (f.totp.qr_code = `data:image/svg+xml;utf-8,${f.totp.qr_code}`),
            this._returnResult({ data: f, error: null }));
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (s) => {
          var i;
          const { data: o, error: l } = s;
          if (l) return this._returnResult({ data: null, error: l });
          const c = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? Wx(e.webauthn.credential_response)
                          : Hx(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code }
            ),
            { data: h, error: f } = await Ce(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: c,
                headers: this.headers,
                jwt:
                  (i = o == null ? void 0 : o.session) === null || i === void 0
                    ? void 0
                    : i.access_token,
              }
            );
          return f
            ? this._returnResult({ data: null, error: f })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + h.expires_in },
                  h
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", h),
              this._returnResult({ data: h, error: f }));
        });
      } catch (s) {
        if (we(s)) return this._returnResult({ data: null, error: s });
        throw s;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (s) => {
          var i;
          const { data: o, error: l } = s;
          if (l) return this._returnResult({ data: null, error: l });
          const c = await Ce(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (i = o == null ? void 0 : o.session) === null || i === void 0
                  ? void 0
                  : i.access_token,
            }
          );
          if (c.error) return c;
          const { data: h } = c;
          if (h.type !== "webauthn") return { data: h, error: null };
          switch (h.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, h), {
                  webauthn: Object.assign(Object.assign({}, h.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, h.webauthn.credential_options),
                      { publicKey: zx(h.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, h), {
                  webauthn: Object.assign(Object.assign({}, h.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, h.webauthn.credential_options),
                      { publicKey: Bx(h.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (s) {
        if (we(s)) return this._returnResult({ data: null, error: s });
        throw s;
      }
    });
  }
  async _challengeAndVerify(e) {
    const { data: s, error: i } = await this._challenge({
      factorId: e.factorId,
    });
    return i
      ? this._returnResult({ data: null, error: i })
      : await this._verify({
          factorId: e.factorId,
          challengeId: s.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: s },
      error: i,
    } = await this.getUser();
    if (i) return { data: null, error: i };
    const o = { all: [], phone: [], totp: [], webauthn: [] };
    for (const l of (e = s == null ? void 0 : s.factors) !== null &&
    e !== void 0
      ? e
      : [])
      (o.all.push(l), l.status === "verified" && o[l.factor_type].push(l));
    return { data: o, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var s, i, o, l;
    if (e)
      try {
        const { payload: x } = Do(e);
        let _ = null;
        x.aal && (_ = x.aal);
        let j = _;
        const {
          data: { user: k },
          error: P,
        } = await this.getUser(e);
        if (P) return this._returnResult({ data: null, error: P });
        ((i =
          (s = k == null ? void 0 : k.factors) === null || s === void 0
            ? void 0
            : s.filter((F) => F.status === "verified")) !== null && i !== void 0
          ? i
          : []
        ).length > 0 && (j = "aal2");
        const O = x.amr || [];
        return {
          data: {
            currentLevel: _,
            nextLevel: j,
            currentAuthenticationMethods: O,
          },
          error: null,
        };
      } catch (x) {
        if (we(x)) return this._returnResult({ data: null, error: x });
        throw x;
      }
    const {
      data: { session: c },
      error: h,
    } = await this.getSession();
    if (h) return this._returnResult({ data: null, error: h });
    if (!c)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: f } = Do(c.access_token);
    let m = null;
    f.aal && (m = f.aal);
    let v = m;
    ((l =
      (o = c.user.factors) === null || o === void 0
        ? void 0
        : o.filter((x) => x.status === "verified")) !== null && l !== void 0
      ? l
      : []
    ).length > 0 && (v = "aal2");
    const b = f.amr || [];
    return {
      data: { currentLevel: m, nextLevel: v, currentAuthenticationMethods: b },
      error: null,
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: i },
          error: o,
        } = s;
        return o
          ? this._returnResult({ data: null, error: o })
          : i
            ? await Ce(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${e}`,
                {
                  headers: this.headers,
                  jwt: i.access_token,
                  xform: (l) => ({ data: l, error: null }),
                }
              )
            : this._returnResult({ data: null, error: new dr() });
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _approveAuthorization(e, s) {
    try {
      return await this._useSession(async (i) => {
        const {
          data: { session: o },
          error: l,
        } = i;
        if (l) return this._returnResult({ data: null, error: l });
        if (!o) return this._returnResult({ data: null, error: new dr() });
        const c = await Ce(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: o.access_token,
            body: { action: "approve" },
            xform: (h) => ({ data: h, error: null }),
          }
        );
        return (
          c.data &&
            c.data.redirect_url &&
            At() &&
            !(s != null && s.skipBrowserRedirect) &&
            window.location.assign(c.data.redirect_url),
          c
        );
      });
    } catch (i) {
      if (we(i)) return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _denyAuthorization(e, s) {
    try {
      return await this._useSession(async (i) => {
        const {
          data: { session: o },
          error: l,
        } = i;
        if (l) return this._returnResult({ data: null, error: l });
        if (!o) return this._returnResult({ data: null, error: new dr() });
        const c = await Ce(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: o.access_token,
            body: { action: "deny" },
            xform: (h) => ({ data: h, error: null }),
          }
        );
        return (
          c.data &&
            c.data.redirect_url &&
            At() &&
            !(s != null && s.skipBrowserRedirect) &&
            window.location.assign(c.data.redirect_url),
          c
        );
      });
    } catch (i) {
      if (we(i)) return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: s },
          error: i,
        } = e;
        return i
          ? this._returnResult({ data: null, error: i })
          : s
            ? await Ce(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: s.access_token,
                xform: (o) => ({ data: o, error: null }),
              })
            : this._returnResult({ data: null, error: new dr() });
      });
    } catch (e) {
      if (we(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: i },
          error: o,
        } = s;
        return o
          ? this._returnResult({ data: null, error: o })
          : i
            ? (await Ce(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: i.access_token,
                query: { client_id: e.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new dr() });
      });
    } catch (s) {
      if (we(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async fetchJwk(e, s = { keys: [] }) {
    let i = s.keys.find((h) => h.kid === e);
    if (i) return i;
    const o = Date.now();
    if (
      ((i = this.jwks.keys.find((h) => h.kid === e)),
      i && this.jwks_cached_at + Zw > o)
    )
      return i;
    const { data: l, error: c } = await Ce(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (c) throw c;
    return !l.keys ||
      l.keys.length === 0 ||
      ((this.jwks = l),
      (this.jwks_cached_at = o),
      (i = l.keys.find((h) => h.kid === e)),
      !i)
      ? null
      : i;
  }
  async getClaims(e, s = {}) {
    try {
      let i = e;
      if (!i) {
        const { data: x, error: _ } = await this.getSession();
        if (_ || !x.session)
          return this._returnResult({ data: null, error: _ });
        i = x.session.access_token;
      }
      const {
        header: o,
        payload: l,
        signature: c,
        raw: { header: h, payload: f },
      } = Do(i);
      (s != null && s.allowExpired) || bx(l.exp);
      const m =
        !o.alg ||
        o.alg.startsWith("HS") ||
        !o.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              o.kid,
              s != null && s.keys
                ? { keys: s.keys }
                : s == null
                  ? void 0
                  : s.jwks
            );
      if (!m) {
        const { error: x } = await this.getUser(i);
        if (x) throw x;
        return { data: { claims: l, header: o, signature: c }, error: null };
      }
      const v = _x(o.alg),
        g = await crypto.subtle.importKey("jwk", m, v, !0, ["verify"]);
      if (!(await crypto.subtle.verify(v, g, c, lx(`${h}.${f}`))))
        throw new hc("Invalid JWT signature");
      return { data: { claims: l, header: o, signature: c }, error: null };
    } catch (i) {
      if (we(i)) return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
}
fa.nextInstanceID = {};
const Zx = fa,
  eb = "2.97.0";
let ta = "";
typeof Deno < "u"
  ? (ta = "deno")
  : typeof document < "u"
    ? (ta = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (ta = "react-native")
      : (ta = "node");
const tb = { "X-Client-Info": `supabase-js-${ta}/${eb}` },
  rb = { headers: tb },
  nb = { schema: "public" },
  sb = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  ib = {};
function pa(r) {
  "@babel/helpers - typeof";
  return (
    (pa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    pa(r)
  );
}
function ab(r, e) {
  if (pa(r) != "object" || !r) return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var i = s.call(r, e);
    if (pa(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ob(r) {
  var e = ab(r, "string");
  return pa(e) == "symbol" ? e : e + "";
}
function lb(r, e, s) {
  return (
    (e = ob(e)) in r
      ? Object.defineProperty(r, e, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = s),
    r
  );
}
function dp(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    (e &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(r, o).enumerable;
      })),
      s.push.apply(s, i));
  }
  return s;
}
function ut(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? dp(Object(s), !0).forEach(function (i) {
          lb(r, i, s[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
        : dp(Object(s)).forEach(function (i) {
            Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(s, i));
          });
  }
  return r;
}
const ub = (r) => (r ? (...e) => r(...e) : (...e) => fetch(...e)),
  cb = () => Headers,
  db = (r, e, s) => {
    const i = ub(s),
      o = cb();
    return async (l, c) => {
      var h;
      const f = (h = await e()) !== null && h !== void 0 ? h : r;
      let m = new o(c == null ? void 0 : c.headers);
      return (
        m.has("apikey") || m.set("apikey", r),
        m.has("Authorization") || m.set("Authorization", `Bearer ${f}`),
        i(l, ut(ut({}, c), {}, { headers: m }))
      );
    };
  };
function hb(r) {
  return r.endsWith("/") ? r : r + "/";
}
function fb(r, e) {
  var s, i;
  const { db: o, auth: l, realtime: c, global: h } = r,
    { db: f, auth: m, realtime: v, global: g } = e,
    b = {
      db: ut(ut({}, f), o),
      auth: ut(ut({}, m), l),
      realtime: ut(ut({}, v), c),
      storage: {},
      global: ut(
        ut(ut({}, g), h),
        {},
        {
          headers: ut(
            ut(
              {},
              (s = g == null ? void 0 : g.headers) !== null && s !== void 0
                ? s
                : {}
            ),
            (i = h == null ? void 0 : h.headers) !== null && i !== void 0
              ? i
              : {}
          ),
        }
      ),
      accessToken: async () => "",
    };
  return (
    r.accessToken ? (b.accessToken = r.accessToken) : delete b.accessToken,
    b
  );
}
function pb(r) {
  const e = r == null ? void 0 : r.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(hb(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var mb = class extends Zx {
    constructor(r) {
      super(r);
    }
  },
  gb = class {
    constructor(r, e, s) {
      var i, o;
      ((this.supabaseUrl = r), (this.supabaseKey = e));
      const l = pb(r);
      if (!e) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", l)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws"
        )),
        (this.authUrl = new URL("auth/v1", l)),
        (this.storageUrl = new URL("storage/v1", l)),
        (this.functionsUrl = new URL("functions/v1", l)));
      const c = `sb-${l.hostname.split(".")[0]}-auth-token`,
        h = {
          db: nb,
          realtime: ib,
          auth: ut(ut({}, sb), {}, { storageKey: c }),
          global: rb,
        },
        f = fb(s ?? {}, h);
      if (
        ((this.storageKey =
          (i = f.auth.storageKey) !== null && i !== void 0 ? i : ""),
        (this.headers =
          (o = f.global.headers) !== null && o !== void 0 ? o : {}),
        f.accessToken)
      )
        ((this.accessToken = f.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (v, g) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(g)} is not possible`
                );
              },
            }
          )));
      else {
        var m;
        this.auth = this._initSupabaseAuthClient(
          (m = f.auth) !== null && m !== void 0 ? m : {},
          this.headers,
          f.global.fetch
        );
      }
      ((this.fetch = db(e, this._getAccessToken.bind(this), f.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          ut(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            f.realtime
          )
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((v) => this.realtime.setAuth(v))
            .catch((v) =>
              console.warn("Failed to set initial Realtime auth token:", v)
            ),
        (this.rest = new tw(new URL("rest/v1", l).href, {
          headers: this.headers,
          schema: f.db.schema,
          fetch: this.fetch,
          timeout: f.db.timeout,
          urlLengthLimit: f.db.urlLengthLimit,
        })),
        (this.storage = new Yw(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          s == null ? void 0 : s.storage
        )),
        f.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new K0(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(r) {
      return this.rest.from(r);
    }
    schema(r) {
      return this.rest.schema(r);
    }
    rpc(r, e = {}, s = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(r, e, s);
    }
    channel(r, e = { config: {} }) {
      return this.realtime.channel(r, e);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(r) {
      return this.realtime.removeChannel(r);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var r = this,
        e,
        s;
      if (r.accessToken) return await r.accessToken();
      const { data: i } = await r.auth.getSession();
      return (e =
        (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !==
        null && e !== void 0
        ? e
        : r.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: r,
        persistSession: e,
        detectSessionInUrl: s,
        storage: i,
        userStorage: o,
        storageKey: l,
        flowType: c,
        lock: h,
        debug: f,
        throwOnError: m,
      },
      v,
      g
    ) {
      const b = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new mb({
        url: this.authUrl.href,
        headers: ut(ut({}, b), v),
        storageKey: l,
        autoRefreshToken: r,
        persistSession: e,
        detectSessionInUrl: s,
        storage: i,
        userStorage: o,
        flowType: c,
        lock: h,
        debug: f,
        throwOnError: m,
        fetch: g,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (x) => x.toLowerCase() === "authorization"
        ),
      });
    }
    _initRealtimeClient(r) {
      return new vw(
        this.realtimeUrl.href,
        ut(
          ut({}, r),
          {},
          {
            params: ut(
              ut({}, { apikey: this.supabaseKey }),
              r == null ? void 0 : r.params
            ),
          }
        )
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((r, e) => {
        this._handleTokenChanged(
          r,
          "CLIENT",
          e == null ? void 0 : e.access_token
        );
      });
    }
    _handleTokenChanged(r, e, s) {
      (r === "TOKEN_REFRESHED" || r === "SIGNED_IN") &&
      this.changedAccessToken !== s
        ? ((this.changedAccessToken = s), this.realtime.setAuth(s))
        : r === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const yb = (r, e, s) => new gb(r, e, s);
function vb() {
  if (typeof window < "u") return !1;
  const r = globalThis.process;
  if (!r) return !1;
  const e = r.version;
  if (e == null) return !1;
  const s = e.match(/^v(\d+)\./);
  return s ? parseInt(s[1], 10) <= 18 : !1;
}
vb() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const pm = "ouvgqhkvedqvmijjxxyg",
  mm =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91dmdxaGt2ZWRxdm1pamp4eHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MTc3MDUsImV4cCI6MjA4NzQ5MzcwNX0.8QBKTMK4zEF8VuLXwYcra1MLWW-4VRICEL8blBEY9mA",
  wb = `https://${pm}.supabase.co`,
  Ve = yb(wb, mm);
function xt(r) {
  const e = Object.prototype.toString.call(r);
  return r instanceof Date || (typeof r == "object" && e === "[object Date]")
    ? new r.constructor(+r)
    : typeof r == "number" ||
        e === "[object Number]" ||
        typeof r == "string" ||
        e === "[object String]"
      ? new Date(r)
      : new Date(NaN);
}
function Yn(r, e) {
  return r instanceof Date ? new r.constructor(e) : new Date(e);
}
const gm = 6048e5,
  xb = 864e5,
  ym = 6e4,
  vm = 36e5;
let bb = {};
function Zo() {
  return bb;
}
function ma(r, e) {
  var h, f, m, v;
  const s = Zo(),
    i =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((f = (h = e == null ? void 0 : e.locale) == null ? void 0 : h.options) ==
      null
        ? void 0
        : f.weekStartsOn) ??
      s.weekStartsOn ??
      ((v = (m = s.locale) == null ? void 0 : m.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    o = xt(r),
    l = o.getDay(),
    c = (l < i ? 7 : 0) + l - i;
  return (o.setDate(o.getDate() - c), o.setHours(0, 0, 0, 0), o);
}
function Ho(r) {
  return ma(r, { weekStartsOn: 1 });
}
function wm(r) {
  const e = xt(r),
    s = e.getFullYear(),
    i = Yn(r, 0);
  (i.setFullYear(s + 1, 0, 4), i.setHours(0, 0, 0, 0));
  const o = Ho(i),
    l = Yn(r, 0);
  (l.setFullYear(s, 0, 4), l.setHours(0, 0, 0, 0));
  const c = Ho(l);
  return e.getTime() >= o.getTime()
    ? s + 1
    : e.getTime() >= c.getTime()
      ? s
      : s - 1;
}
function Vo(r) {
  const e = xt(r);
  return (e.setHours(0, 0, 0, 0), e);
}
function hp(r) {
  const e = xt(r),
    s = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds()
      )
    );
  return (s.setUTCFullYear(e.getFullYear()), +r - +s);
}
function _b(r, e) {
  const s = Vo(r),
    i = Vo(e),
    o = +s - hp(s),
    l = +i - hp(i);
  return Math.round((o - l) / xb);
}
function kb(r) {
  const e = wm(r),
    s = Yn(r, 0);
  return (s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0), Ho(s));
}
function Sb(r, e) {
  const s = Vo(r),
    i = Vo(e);
  return +s == +i;
}
function Eb(r) {
  return (
    r instanceof Date ||
    (typeof r == "object" &&
      Object.prototype.toString.call(r) === "[object Date]")
  );
}
function Tb(r) {
  if (!Eb(r) && typeof r != "number") return !1;
  const e = xt(r);
  return !isNaN(Number(e));
}
function Cb(r) {
  const e = xt(r),
    s = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), s + 1, 0),
    e.setHours(23, 59, 59, 999),
    e
  );
}
function Rb(r, e) {
  const s = xt(r.start),
    i = xt(r.end);
  let o = +s > +i;
  const l = o ? +s : +i,
    c = o ? i : s;
  c.setHours(0, 0, 0, 0);
  let h = 1;
  const f = [];
  for (; +c <= l; )
    (f.push(xt(c)), c.setDate(c.getDate() + h), c.setHours(0, 0, 0, 0));
  return o ? f.reverse() : f;
}
function jb(r) {
  const e = xt(r);
  return (e.setDate(1), e.setHours(0, 0, 0, 0), e);
}
function Nb(r) {
  const e = xt(r),
    s = Yn(r, 0);
  return (s.setFullYear(e.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s);
}
const Pb = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  Ob = (r, e, s) => {
    let i;
    const o = Pb[r];
    return (
      typeof o == "string"
        ? (i = o)
        : e === 1
          ? (i = o.one)
          : (i = o.other.replace("{{count}}", e.toString())),
      s != null && s.addSuffix
        ? s.comparison && s.comparison > 0
          ? "in " + i
          : i + " ago"
        : i
    );
  };
function Qu(r) {
  return (e = {}) => {
    const s = e.width ? String(e.width) : r.defaultWidth;
    return r.formats[s] || r.formats[r.defaultWidth];
  };
}
const Ab = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Db = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Ib = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Lb = {
    date: Qu({ formats: Ab, defaultWidth: "full" }),
    time: Qu({ formats: Db, defaultWidth: "full" }),
    dateTime: Qu({ formats: Ib, defaultWidth: "full" }),
  },
  Mb = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  $b = (r, e, s, i) => Mb[r];
function Ji(r) {
  return (e, s) => {
    const i = s != null && s.context ? String(s.context) : "standalone";
    let o;
    if (i === "formatting" && r.formattingValues) {
      const c = r.defaultFormattingWidth || r.defaultWidth,
        h = s != null && s.width ? String(s.width) : c;
      o = r.formattingValues[h] || r.formattingValues[c];
    } else {
      const c = r.defaultWidth,
        h = s != null && s.width ? String(s.width) : r.defaultWidth;
      o = r.values[h] || r.values[c];
    }
    const l = r.argumentCallback ? r.argumentCallback(e) : e;
    return o[l];
  };
}
const Ub = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Fb = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  zb = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Bb = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Wb = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Hb = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Vb = (r, e) => {
    const s = Number(r),
      i = s % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return s + "st";
        case 2:
          return s + "nd";
        case 3:
          return s + "rd";
      }
    return s + "th";
  },
  qb = {
    ordinalNumber: Vb,
    era: Ji({ values: Ub, defaultWidth: "wide" }),
    quarter: Ji({
      values: Fb,
      defaultWidth: "wide",
      argumentCallback: (r) => r - 1,
    }),
    month: Ji({ values: zb, defaultWidth: "wide" }),
    day: Ji({ values: Bb, defaultWidth: "wide" }),
    dayPeriod: Ji({
      values: Wb,
      defaultWidth: "wide",
      formattingValues: Hb,
      defaultFormattingWidth: "wide",
    }),
  };
function Qi(r) {
  return (e, s = {}) => {
    const i = s.width,
      o = (i && r.matchPatterns[i]) || r.matchPatterns[r.defaultMatchWidth],
      l = e.match(o);
    if (!l) return null;
    const c = l[0],
      h = (i && r.parsePatterns[i]) || r.parsePatterns[r.defaultParseWidth],
      f = Array.isArray(h) ? Yb(h, (g) => g.test(c)) : Kb(h, (g) => g.test(c));
    let m;
    ((m = r.valueCallback ? r.valueCallback(f) : f),
      (m = s.valueCallback ? s.valueCallback(m) : m));
    const v = e.slice(c.length);
    return { value: m, rest: v };
  };
}
function Kb(r, e) {
  for (const s in r)
    if (Object.prototype.hasOwnProperty.call(r, s) && e(r[s])) return s;
}
function Yb(r, e) {
  for (let s = 0; s < r.length; s++) if (e(r[s])) return s;
}
function Gb(r) {
  return (e, s = {}) => {
    const i = e.match(r.matchPattern);
    if (!i) return null;
    const o = i[0],
      l = e.match(r.parsePattern);
    if (!l) return null;
    let c = r.valueCallback ? r.valueCallback(l[0]) : l[0];
    c = s.valueCallback ? s.valueCallback(c) : c;
    const h = e.slice(o.length);
    return { value: c, rest: h };
  };
}
const Jb = /^(\d+)(th|st|nd|rd)?/i,
  Qb = /\d+/i,
  Xb = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Zb = { any: [/^b/i, /^(a|c)/i] },
  e_ = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  t_ = { any: [/1/i, /2/i, /3/i, /4/i] },
  r_ = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  n_ = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  s_ = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  i_ = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  a_ = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  o_ = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  l_ = {
    ordinalNumber: Gb({
      matchPattern: Jb,
      parsePattern: Qb,
      valueCallback: (r) => parseInt(r, 10),
    }),
    era: Qi({
      matchPatterns: Xb,
      defaultMatchWidth: "wide",
      parsePatterns: Zb,
      defaultParseWidth: "any",
    }),
    quarter: Qi({
      matchPatterns: e_,
      defaultMatchWidth: "wide",
      parsePatterns: t_,
      defaultParseWidth: "any",
      valueCallback: (r) => r + 1,
    }),
    month: Qi({
      matchPatterns: r_,
      defaultMatchWidth: "wide",
      parsePatterns: n_,
      defaultParseWidth: "any",
    }),
    day: Qi({
      matchPatterns: s_,
      defaultMatchWidth: "wide",
      parsePatterns: i_,
      defaultParseWidth: "any",
    }),
    dayPeriod: Qi({
      matchPatterns: a_,
      defaultMatchWidth: "any",
      parsePatterns: o_,
      defaultParseWidth: "any",
    }),
  },
  u_ = {
    code: "en-US",
    formatDistance: Ob,
    formatLong: Lb,
    formatRelative: $b,
    localize: qb,
    match: l_,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function c_(r) {
  const e = xt(r);
  return _b(e, Nb(e)) + 1;
}
function d_(r) {
  const e = xt(r),
    s = +Ho(e) - +kb(e);
  return Math.round(s / gm) + 1;
}
function xm(r, e) {
  var v, g, b, x;
  const s = xt(r),
    i = s.getFullYear(),
    o = Zo(),
    l =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((g = (v = e == null ? void 0 : e.locale) == null ? void 0 : v.options) ==
      null
        ? void 0
        : g.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((x = (b = o.locale) == null ? void 0 : b.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    c = Yn(r, 0);
  (c.setFullYear(i + 1, 0, l), c.setHours(0, 0, 0, 0));
  const h = ma(c, e),
    f = Yn(r, 0);
  (f.setFullYear(i, 0, l), f.setHours(0, 0, 0, 0));
  const m = ma(f, e);
  return s.getTime() >= h.getTime()
    ? i + 1
    : s.getTime() >= m.getTime()
      ? i
      : i - 1;
}
function h_(r, e) {
  var h, f, m, v;
  const s = Zo(),
    i =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((f = (h = e == null ? void 0 : e.locale) == null ? void 0 : h.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((v = (m = s.locale) == null ? void 0 : m.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    o = xm(r, e),
    l = Yn(r, 0);
  return (l.setFullYear(o, 0, i), l.setHours(0, 0, 0, 0), ma(l, e));
}
function f_(r, e) {
  const s = xt(r),
    i = +ma(s, e) - +h_(s, e);
  return Math.round(i / gm) + 1;
}
function Ye(r, e) {
  const s = r < 0 ? "-" : "",
    i = Math.abs(r).toString().padStart(e, "0");
  return s + i;
}
const Bn = {
    y(r, e) {
      const s = r.getFullYear(),
        i = s > 0 ? s : 1 - s;
      return Ye(e === "yy" ? i % 100 : i, e.length);
    },
    M(r, e) {
      const s = r.getMonth();
      return e === "M" ? String(s + 1) : Ye(s + 1, 2);
    },
    d(r, e) {
      return Ye(r.getDate(), e.length);
    },
    a(r, e) {
      const s = r.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return s.toUpperCase();
        case "aaa":
          return s;
        case "aaaaa":
          return s[0];
        case "aaaa":
        default:
          return s === "am" ? "a.m." : "p.m.";
      }
    },
    h(r, e) {
      return Ye(r.getHours() % 12 || 12, e.length);
    },
    H(r, e) {
      return Ye(r.getHours(), e.length);
    },
    m(r, e) {
      return Ye(r.getMinutes(), e.length);
    },
    s(r, e) {
      return Ye(r.getSeconds(), e.length);
    },
    S(r, e) {
      const s = e.length,
        i = r.getMilliseconds(),
        o = Math.trunc(i * Math.pow(10, s - 3));
      return Ye(o, e.length);
    },
  },
  ri = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  fp = {
    G: function (r, e, s) {
      const i = r.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return s.era(i, { width: "abbreviated" });
        case "GGGGG":
          return s.era(i, { width: "narrow" });
        case "GGGG":
        default:
          return s.era(i, { width: "wide" });
      }
    },
    y: function (r, e, s) {
      if (e === "yo") {
        const i = r.getFullYear(),
          o = i > 0 ? i : 1 - i;
        return s.ordinalNumber(o, { unit: "year" });
      }
      return Bn.y(r, e);
    },
    Y: function (r, e, s, i) {
      const o = xm(r, i),
        l = o > 0 ? o : 1 - o;
      if (e === "YY") {
        const c = l % 100;
        return Ye(c, 2);
      }
      return e === "Yo"
        ? s.ordinalNumber(l, { unit: "year" })
        : Ye(l, e.length);
    },
    R: function (r, e) {
      const s = wm(r);
      return Ye(s, e.length);
    },
    u: function (r, e) {
      const s = r.getFullYear();
      return Ye(s, e.length);
    },
    Q: function (r, e, s) {
      const i = Math.ceil((r.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(i);
        case "QQ":
          return Ye(i, 2);
        case "Qo":
          return s.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return s.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return s.quarter(i, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return s.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (r, e, s) {
      const i = Math.ceil((r.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(i);
        case "qq":
          return Ye(i, 2);
        case "qo":
          return s.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return s.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return s.quarter(i, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return s.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (r, e, s) {
      const i = r.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return Bn.M(r, e);
        case "Mo":
          return s.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return s.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return s.month(i, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return s.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (r, e, s) {
      const i = r.getMonth();
      switch (e) {
        case "L":
          return String(i + 1);
        case "LL":
          return Ye(i + 1, 2);
        case "Lo":
          return s.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return s.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return s.month(i, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return s.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (r, e, s, i) {
      const o = f_(r, i);
      return e === "wo"
        ? s.ordinalNumber(o, { unit: "week" })
        : Ye(o, e.length);
    },
    I: function (r, e, s) {
      const i = d_(r);
      return e === "Io"
        ? s.ordinalNumber(i, { unit: "week" })
        : Ye(i, e.length);
    },
    d: function (r, e, s) {
      return e === "do"
        ? s.ordinalNumber(r.getDate(), { unit: "date" })
        : Bn.d(r, e);
    },
    D: function (r, e, s) {
      const i = c_(r);
      return e === "Do"
        ? s.ordinalNumber(i, { unit: "dayOfYear" })
        : Ye(i, e.length);
    },
    E: function (r, e, s) {
      const i = r.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return s.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return s.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return s.day(i, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return s.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (r, e, s, i) {
      const o = r.getDay(),
        l = (o - i.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(l);
        case "ee":
          return Ye(l, 2);
        case "eo":
          return s.ordinalNumber(l, { unit: "day" });
        case "eee":
          return s.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return s.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return s.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return s.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (r, e, s, i) {
      const o = r.getDay(),
        l = (o - i.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(l);
        case "cc":
          return Ye(l, e.length);
        case "co":
          return s.ordinalNumber(l, { unit: "day" });
        case "ccc":
          return s.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return s.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return s.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return s.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (r, e, s) {
      const i = r.getDay(),
        o = i === 0 ? 7 : i;
      switch (e) {
        case "i":
          return String(o);
        case "ii":
          return Ye(o, e.length);
        case "io":
          return s.ordinalNumber(o, { unit: "day" });
        case "iii":
          return s.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return s.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return s.day(i, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return s.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (r, e, s) {
      const o = r.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return s.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return s
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return s.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return s.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (r, e, s) {
      const i = r.getHours();
      let o;
      switch (
        (i === 12
          ? (o = ri.noon)
          : i === 0
            ? (o = ri.midnight)
            : (o = i / 12 >= 1 ? "pm" : "am"),
        e)
      ) {
        case "b":
        case "bb":
          return s.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return s
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return s.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return s.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (r, e, s) {
      const i = r.getHours();
      let o;
      switch (
        (i >= 17
          ? (o = ri.evening)
          : i >= 12
            ? (o = ri.afternoon)
            : i >= 4
              ? (o = ri.morning)
              : (o = ri.night),
        e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return s.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return s.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return s.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (r, e, s) {
      if (e === "ho") {
        let i = r.getHours() % 12;
        return (i === 0 && (i = 12), s.ordinalNumber(i, { unit: "hour" }));
      }
      return Bn.h(r, e);
    },
    H: function (r, e, s) {
      return e === "Ho"
        ? s.ordinalNumber(r.getHours(), { unit: "hour" })
        : Bn.H(r, e);
    },
    K: function (r, e, s) {
      const i = r.getHours() % 12;
      return e === "Ko"
        ? s.ordinalNumber(i, { unit: "hour" })
        : Ye(i, e.length);
    },
    k: function (r, e, s) {
      let i = r.getHours();
      return (
        i === 0 && (i = 24),
        e === "ko" ? s.ordinalNumber(i, { unit: "hour" }) : Ye(i, e.length)
      );
    },
    m: function (r, e, s) {
      return e === "mo"
        ? s.ordinalNumber(r.getMinutes(), { unit: "minute" })
        : Bn.m(r, e);
    },
    s: function (r, e, s) {
      return e === "so"
        ? s.ordinalNumber(r.getSeconds(), { unit: "second" })
        : Bn.s(r, e);
    },
    S: function (r, e) {
      return Bn.S(r, e);
    },
    X: function (r, e, s) {
      const i = r.getTimezoneOffset();
      if (i === 0) return "Z";
      switch (e) {
        case "X":
          return mp(i);
        case "XXXX":
        case "XX":
          return ws(i);
        case "XXXXX":
        case "XXX":
        default:
          return ws(i, ":");
      }
    },
    x: function (r, e, s) {
      const i = r.getTimezoneOffset();
      switch (e) {
        case "x":
          return mp(i);
        case "xxxx":
        case "xx":
          return ws(i);
        case "xxxxx":
        case "xxx":
        default:
          return ws(i, ":");
      }
    },
    O: function (r, e, s) {
      const i = r.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + pp(i, ":");
        case "OOOO":
        default:
          return "GMT" + ws(i, ":");
      }
    },
    z: function (r, e, s) {
      const i = r.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + pp(i, ":");
        case "zzzz":
        default:
          return "GMT" + ws(i, ":");
      }
    },
    t: function (r, e, s) {
      const i = Math.trunc(r.getTime() / 1e3);
      return Ye(i, e.length);
    },
    T: function (r, e, s) {
      const i = r.getTime();
      return Ye(i, e.length);
    },
  };
function pp(r, e = "") {
  const s = r > 0 ? "-" : "+",
    i = Math.abs(r),
    o = Math.trunc(i / 60),
    l = i % 60;
  return l === 0 ? s + String(o) : s + String(o) + e + Ye(l, 2);
}
function mp(r, e) {
  return r % 60 === 0
    ? (r > 0 ? "-" : "+") + Ye(Math.abs(r) / 60, 2)
    : ws(r, e);
}
function ws(r, e = "") {
  const s = r > 0 ? "-" : "+",
    i = Math.abs(r),
    o = Ye(Math.trunc(i / 60), 2),
    l = Ye(i % 60, 2);
  return s + o + e + l;
}
const gp = (r, e) => {
    switch (r) {
      case "P":
        return e.date({ width: "short" });
      case "PP":
        return e.date({ width: "medium" });
      case "PPP":
        return e.date({ width: "long" });
      case "PPPP":
      default:
        return e.date({ width: "full" });
    }
  },
  bm = (r, e) => {
    switch (r) {
      case "p":
        return e.time({ width: "short" });
      case "pp":
        return e.time({ width: "medium" });
      case "ppp":
        return e.time({ width: "long" });
      case "pppp":
      default:
        return e.time({ width: "full" });
    }
  },
  p_ = (r, e) => {
    const s = r.match(/(P+)(p+)?/) || [],
      i = s[1],
      o = s[2];
    if (!o) return gp(r, e);
    let l;
    switch (i) {
      case "P":
        l = e.dateTime({ width: "short" });
        break;
      case "PP":
        l = e.dateTime({ width: "medium" });
        break;
      case "PPP":
        l = e.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        l = e.dateTime({ width: "full" });
        break;
    }
    return l.replace("{{date}}", gp(i, e)).replace("{{time}}", bm(o, e));
  },
  m_ = { p: bm, P: p_ },
  g_ = /^D+$/,
  y_ = /^Y+$/,
  v_ = ["D", "DD", "YY", "YYYY"];
function w_(r) {
  return g_.test(r);
}
function x_(r) {
  return y_.test(r);
}
function b_(r, e, s) {
  const i = __(r, e, s);
  if ((console.warn(i), v_.includes(r))) throw new RangeError(i);
}
function __(r, e, s) {
  const i = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const k_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  S_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  E_ = /^'([^]*?)'?$/,
  T_ = /''/g,
  C_ = /[a-zA-Z]/;
function qt(r, e, s) {
  var v, g, b, x;
  const i = Zo(),
    o = i.locale ?? u_,
    l =
      i.firstWeekContainsDate ??
      ((g = (v = i.locale) == null ? void 0 : v.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    c =
      i.weekStartsOn ??
      ((x = (b = i.locale) == null ? void 0 : b.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    h = xt(r);
  if (!Tb(h)) throw new RangeError("Invalid time value");
  let f = e
    .match(S_)
    .map((_) => {
      const j = _[0];
      if (j === "p" || j === "P") {
        const k = m_[j];
        return k(_, o.formatLong);
      }
      return _;
    })
    .join("")
    .match(k_)
    .map((_) => {
      if (_ === "''") return { isToken: !1, value: "'" };
      const j = _[0];
      if (j === "'") return { isToken: !1, value: R_(_) };
      if (fp[j]) return { isToken: !0, value: _ };
      if (j.match(C_))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            j +
            "`"
        );
      return { isToken: !1, value: _ };
    });
  o.localize.preprocessor && (f = o.localize.preprocessor(h, f));
  const m = { firstWeekContainsDate: l, weekStartsOn: c, locale: o };
  return f
    .map((_) => {
      if (!_.isToken) return _.value;
      const j = _.value;
      (x_(j) || w_(j)) && b_(j, e, String(r));
      const k = fp[j[0]];
      return k(h, j, o.localize, m);
    })
    .join("");
}
function R_(r) {
  const e = r.match(E_);
  return e ? e[1].replace(T_, "'") : r;
}
function j_(r) {
  return xt(r).getDay();
}
function N_(r) {
  const e = xt(r),
    s = e.getFullYear(),
    i = e.getMonth(),
    o = Yn(r, 0);
  return (o.setFullYear(s, i + 1, 0), o.setHours(0, 0, 0, 0), o.getDate());
}
function P_(r, e) {
  const s = xt(r),
    i = xt(e);
  return s.getFullYear() === i.getFullYear() && s.getMonth() === i.getMonth();
}
function Ss(r, e) {
  const i = I_(r);
  let o;
  if (i.date) {
    const f = L_(i.date, 2);
    o = M_(f.restDateString, f.year);
  }
  if (!o || isNaN(o.getTime())) return new Date(NaN);
  const l = o.getTime();
  let c = 0,
    h;
  if (i.time && ((c = $_(i.time)), isNaN(c))) return new Date(NaN);
  if (i.timezone) {
    if (((h = U_(i.timezone)), isNaN(h))) return new Date(NaN);
  } else {
    const f = new Date(l + c),
      m = new Date(0);
    return (
      m.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()),
      m.setHours(
        f.getUTCHours(),
        f.getUTCMinutes(),
        f.getUTCSeconds(),
        f.getUTCMilliseconds()
      ),
      m
    );
  }
  return new Date(l + c + h);
}
const Io = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  O_ = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  A_ =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  D_ = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function I_(r) {
  const e = {},
    s = r.split(Io.dateTimeDelimiter);
  let i;
  if (s.length > 2) return e;
  if (
    (/:/.test(s[0])
      ? (i = s[0])
      : ((e.date = s[0]),
        (i = s[1]),
        Io.timeZoneDelimiter.test(e.date) &&
          ((e.date = r.split(Io.timeZoneDelimiter)[0]),
          (i = r.substr(e.date.length, r.length)))),
    i)
  ) {
    const o = Io.timezone.exec(i);
    o ? ((e.time = i.replace(o[1], "")), (e.timezone = o[1])) : (e.time = i);
  }
  return e;
}
function L_(r, e) {
  const s = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + e) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + e) +
        "})$)"
    ),
    i = r.match(s);
  if (!i) return { year: NaN, restDateString: "" };
  const o = i[1] ? parseInt(i[1]) : null,
    l = i[2] ? parseInt(i[2]) : null;
  return {
    year: l === null ? o : l * 100,
    restDateString: r.slice((i[1] || i[2]).length),
  };
}
function M_(r, e) {
  if (e === null) return new Date(NaN);
  const s = r.match(O_);
  if (!s) return new Date(NaN);
  const i = !!s[4],
    o = Xi(s[1]),
    l = Xi(s[2]) - 1,
    c = Xi(s[3]),
    h = Xi(s[4]),
    f = Xi(s[5]) - 1;
  if (i) return H_(e, h, f) ? F_(e, h, f) : new Date(NaN);
  {
    const m = new Date(0);
    return !B_(e, l, c) || !W_(e, o)
      ? new Date(NaN)
      : (m.setUTCFullYear(e, l, Math.max(o, c)), m);
  }
}
function Xi(r) {
  return r ? parseInt(r) : 1;
}
function $_(r) {
  const e = r.match(A_);
  if (!e) return NaN;
  const s = Xu(e[1]),
    i = Xu(e[2]),
    o = Xu(e[3]);
  return V_(s, i, o) ? s * vm + i * ym + o * 1e3 : NaN;
}
function Xu(r) {
  return (r && parseFloat(r.replace(",", "."))) || 0;
}
function U_(r) {
  if (r === "Z") return 0;
  const e = r.match(D_);
  if (!e) return 0;
  const s = e[1] === "+" ? -1 : 1,
    i = parseInt(e[2]),
    o = (e[3] && parseInt(e[3])) || 0;
  return q_(i, o) ? s * (i * vm + o * ym) : NaN;
}
function F_(r, e, s) {
  const i = new Date(0);
  i.setUTCFullYear(r, 0, 4);
  const o = i.getUTCDay() || 7,
    l = (e - 1) * 7 + s + 1 - o;
  return (i.setUTCDate(i.getUTCDate() + l), i);
}
const z_ = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function _m(r) {
  return r % 400 === 0 || (r % 4 === 0 && r % 100 !== 0);
}
function B_(r, e, s) {
  return e >= 0 && e <= 11 && s >= 1 && s <= (z_[e] || (_m(r) ? 29 : 28));
}
function W_(r, e) {
  return e >= 1 && e <= (_m(r) ? 366 : 365);
}
function H_(r, e, s) {
  return e >= 1 && e <= 53 && s >= 0 && s <= 6;
}
function V_(r, e, s) {
  return r === 24
    ? e === 0 && s === 0
    : s >= 0 && s < 60 && e >= 0 && e < 60 && r >= 0 && r < 25;
}
function q_(r, e) {
  return e >= 0 && e <= 59;
}
var Nc = bp();
const K_ = xp(Nc);
function Y_(r) {
  if (typeof document > "u") return;
  let e = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  ((s.type = "text/css"),
    e.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = r)
      : s.appendChild(document.createTextNode(r)));
}
const G_ = (r) => {
    switch (r) {
      case "success":
        return X_;
      case "info":
        return e1;
      case "warning":
        return Z_;
      case "error":
        return t1;
      default:
        return null;
    }
  },
  J_ = Array(12).fill(0),
  Q_ = ({ visible: r, className: e }) =>
    te.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
        "data-visible": r,
      },
      te.createElement(
        "div",
        { className: "sonner-spinner" },
        J_.map((s, i) =>
          te.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`,
          })
        )
      )
    ),
  X_ = te.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    te.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Z_ = te.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    te.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  e1 = te.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    te.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  t1 = te.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    te.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  r1 = te.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    te.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    te.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  n1 = () => {
    const [r, e] = te.useState(document.hidden);
    return (
      te.useEffect(() => {
        const s = () => {
          e(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      r
    );
  };
let fc = 1;
class s1 {
  constructor() {
    ((this.subscribe = (e) => (
      this.subscribers.push(e),
      () => {
        const s = this.subscribers.indexOf(e);
        this.subscribers.splice(s, 1);
      }
    )),
      (this.publish = (e) => {
        this.subscribers.forEach((s) => s(e));
      }),
      (this.addToast = (e) => {
        (this.publish(e), (this.toasts = [...this.toasts, e]));
      }),
      (this.create = (e) => {
        var s;
        const { message: i, ...o } = e,
          l =
            typeof (e == null ? void 0 : e.id) == "number" ||
            ((s = e.id) == null ? void 0 : s.length) > 0
              ? e.id
              : fc++,
          c = this.toasts.find((f) => f.id === l),
          h = e.dismissible === void 0 ? !0 : e.dismissible;
        return (
          this.dismissedToasts.has(l) && this.dismissedToasts.delete(l),
          c
            ? (this.toasts = this.toasts.map((f) =>
                f.id === l
                  ? (this.publish({ ...f, ...e, id: l, title: i }),
                    { ...f, ...e, id: l, dismissible: h, title: i })
                  : f
              ))
            : this.addToast({ title: i, ...o, dismissible: h, id: l }),
          l
        );
      }),
      (this.dismiss = (e) => (
        e
          ? (this.dismissedToasts.add(e),
            requestAnimationFrame(() =>
              this.subscribers.forEach((s) => s({ id: e, dismiss: !0 }))
            ))
          : this.toasts.forEach((s) => {
              this.subscribers.forEach((i) => i({ id: s.id, dismiss: !0 }));
            }),
        e
      )),
      (this.message = (e, s) => this.create({ ...s, message: e })),
      (this.error = (e, s) => this.create({ ...s, message: e, type: "error" })),
      (this.success = (e, s) =>
        this.create({ ...s, type: "success", message: e })),
      (this.info = (e, s) => this.create({ ...s, type: "info", message: e })),
      (this.warning = (e, s) =>
        this.create({ ...s, type: "warning", message: e })),
      (this.loading = (e, s) =>
        this.create({ ...s, type: "loading", message: e })),
      (this.promise = (e, s) => {
        if (!s) return;
        let i;
        s.loading !== void 0 &&
          (i = this.create({
            ...s,
            promise: e,
            type: "loading",
            message: s.loading,
            description:
              typeof s.description != "function" ? s.description : void 0,
          }));
        const o = Promise.resolve(e instanceof Function ? e() : e);
        let l = i !== void 0,
          c;
        const h = o
            .then(async (m) => {
              if (((c = ["resolve", m]), te.isValidElement(m)))
                ((l = !1), this.create({ id: i, type: "default", message: m }));
              else if (a1(m) && !m.ok) {
                l = !1;
                const g =
                    typeof s.error == "function"
                      ? await s.error(`HTTP error! status: ${m.status}`)
                      : s.error,
                  b =
                    typeof s.description == "function"
                      ? await s.description(`HTTP error! status: ${m.status}`)
                      : s.description,
                  _ =
                    typeof g == "object" && !te.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: i, type: "error", description: b, ..._ });
              } else if (m instanceof Error) {
                l = !1;
                const g =
                    typeof s.error == "function" ? await s.error(m) : s.error,
                  b =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  _ =
                    typeof g == "object" && !te.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: i, type: "error", description: b, ..._ });
              } else if (s.success !== void 0) {
                l = !1;
                const g =
                    typeof s.success == "function"
                      ? await s.success(m)
                      : s.success,
                  b =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  _ =
                    typeof g == "object" && !te.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: i, type: "success", description: b, ..._ });
              }
            })
            .catch(async (m) => {
              if (((c = ["reject", m]), s.error !== void 0)) {
                l = !1;
                const v =
                    typeof s.error == "function" ? await s.error(m) : s.error,
                  g =
                    typeof s.description == "function"
                      ? await s.description(m)
                      : s.description,
                  x =
                    typeof v == "object" && !te.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: i, type: "error", description: g, ...x });
              }
            })
            .finally(() => {
              (l && (this.dismiss(i), (i = void 0)),
                s.finally == null || s.finally.call(s));
            }),
          f = () =>
            new Promise((m, v) =>
              h.then(() => (c[0] === "reject" ? v(c[1]) : m(c[1]))).catch(v)
            );
        return typeof i != "string" && typeof i != "number"
          ? { unwrap: f }
          : Object.assign(i, { unwrap: f });
      }),
      (this.custom = (e, s) => {
        const i = (s == null ? void 0 : s.id) || fc++;
        return (this.create({ jsx: e(i), id: i, ...s }), i);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const tr = new s1(),
  i1 = (r, e) => {
    const s = (e == null ? void 0 : e.id) || fc++;
    return (tr.addToast({ title: r, ...e, id: s }), s);
  },
  a1 = (r) =>
    r &&
    typeof r == "object" &&
    "ok" in r &&
    typeof r.ok == "boolean" &&
    "status" in r &&
    typeof r.status == "number",
  o1 = i1,
  l1 = () => tr.toasts,
  u1 = () => tr.getActiveToasts(),
  Le = Object.assign(
    o1,
    {
      success: tr.success,
      info: tr.info,
      warning: tr.warning,
      error: tr.error,
      custom: tr.custom,
      message: tr.message,
      promise: tr.promise,
      dismiss: tr.dismiss,
      loading: tr.loading,
    },
    { getHistory: l1, getToasts: u1 }
  );
Y_(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function Lo(r) {
  return r.label !== void 0;
}
const c1 = 3,
  d1 = "24px",
  h1 = "16px",
  yp = 4e3,
  f1 = 356,
  p1 = 14,
  m1 = 45,
  g1 = 200;
function Jr(...r) {
  return r.filter(Boolean).join(" ");
}
function y1(r) {
  const [e, s] = r.split("-"),
    i = [];
  return (e && i.push(e), s && i.push(s), i);
}
const v1 = (r) => {
  var e, s, i, o, l, c, h, f, m;
  const {
      invert: v,
      toast: g,
      unstyled: b,
      interacting: x,
      setHeights: _,
      visibleToasts: j,
      heights: k,
      index: P,
      toasts: T,
      expanded: O,
      removeToast: F,
      defaultRichColors: q,
      closeButton: Q,
      style: I,
      cancelButtonStyle: Z,
      actionButtonStyle: ne,
      className: fe = "",
      descriptionClassName: ke = "",
      duration: Pe,
      position: pe,
      gap: be,
      expandByDefault: De,
      classNames: ee,
      icons: me,
      closeButtonAriaLabel: B = "Close toast",
    } = r,
    [X, Y] = te.useState(null),
    [R, z] = te.useState(null),
    [re, le] = te.useState(!1),
    [xe, ae] = te.useState(!1),
    [$e, Oe] = te.useState(!1),
    [Be, dt] = te.useState(!1),
    [wn, at] = te.useState(!1),
    [rr, $r] = te.useState(0),
    [Ts, nr] = te.useState(0),
    Tr = te.useRef(g.duration || Pe || yp),
    Qn = te.useRef(null),
    Dt = te.useRef(null),
    en = P === 0,
    Ur = P + 1 <= j,
    bt = g.type,
    Cr = g.dismissible !== !1,
    pr = g.className || "",
    Fr = g.descriptionClassName || "",
    zr = te.useMemo(
      () => k.findIndex((je) => je.toastId === g.id) || 0,
      [k, g.id]
    ),
    tn = te.useMemo(() => {
      var je;
      return (je = g.closeButton) != null ? je : Q;
    }, [g.closeButton, Q]),
    jt = te.useMemo(() => g.duration || Pe || yp, [g.duration, Pe]),
    It = te.useRef(0),
    zt = te.useRef(0),
    Br = te.useRef(0),
    mr = te.useRef(null),
    [Cs, Kt] = pe.split("-"),
    Xn = te.useMemo(
      () => k.reduce((je, rt, ot) => (ot >= zr ? je : je + rt.height), 0),
      [k, zr]
    ),
    rn = n1(),
    xn = g.invert || v,
    nn = bt === "loading";
  ((zt.current = te.useMemo(() => zr * be + Xn, [zr, Xn])),
    te.useEffect(() => {
      Tr.current = jt;
    }, [jt]),
    te.useEffect(() => {
      le(!0);
    }, []),
    te.useEffect(() => {
      const je = Dt.current;
      if (je) {
        const rt = je.getBoundingClientRect().height;
        return (
          nr(rt),
          _((ot) => [
            { toastId: g.id, height: rt, position: g.position },
            ...ot,
          ]),
          () => _((ot) => ot.filter((ht) => ht.toastId !== g.id))
        );
      }
    }, [_, g.id]),
    te.useLayoutEffect(() => {
      if (!re) return;
      const je = Dt.current,
        rt = je.style.height;
      je.style.height = "auto";
      const ot = je.getBoundingClientRect().height;
      ((je.style.height = rt),
        nr(ot),
        _((ht) =>
          ht.find((nt) => nt.toastId === g.id)
            ? ht.map((nt) => (nt.toastId === g.id ? { ...nt, height: ot } : nt))
            : [{ toastId: g.id, height: ot, position: g.position }, ...ht]
        ));
    }, [re, g.title, g.description, _, g.id]));
  const Bt = te.useCallback(() => {
    (ae(!0),
      $r(zt.current),
      _((je) => je.filter((rt) => rt.toastId !== g.id)),
      setTimeout(() => {
        F(g);
      }, g1));
  }, [g, F, _, zt]);
  (te.useEffect(() => {
    if (
      (g.promise && bt === "loading") ||
      g.duration === 1 / 0 ||
      g.type === "loading"
    )
      return;
    let je;
    return (
      O || x || rn
        ? (() => {
            if (Br.current < It.current) {
              const ht = new Date().getTime() - It.current;
              Tr.current = Tr.current - ht;
            }
            Br.current = new Date().getTime();
          })()
        : (() => {
            Tr.current !== 1 / 0 &&
              ((It.current = new Date().getTime()),
              (je = setTimeout(() => {
                (g.onAutoClose == null || g.onAutoClose.call(g, g), Bt());
              }, Tr.current)));
          })(),
      () => clearTimeout(je)
    );
  }, [O, x, g, bt, rn, Bt]),
    te.useEffect(() => {
      g.delete && Bt();
    }, [Bt, g.delete]));
  function Wr() {
    var je;
    if (me != null && me.loading) {
      var rt;
      return te.createElement(
        "div",
        {
          className: Jr(
            ee == null ? void 0 : ee.loader,
            g == null || (rt = g.classNames) == null ? void 0 : rt.loader,
            "sonner-loader"
          ),
          "data-visible": bt === "loading",
        },
        me.loading
      );
    }
    return te.createElement(Q_, {
      className: Jr(
        ee == null ? void 0 : ee.loader,
        g == null || (je = g.classNames) == null ? void 0 : je.loader
      ),
      visible: bt === "loading",
    });
  }
  const Rr = g.icon || (me == null ? void 0 : me[bt]) || G_(bt);
  var sr, Zn;
  return te.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Dt,
      className: Jr(
        fe,
        pr,
        ee == null ? void 0 : ee.toast,
        g == null || (e = g.classNames) == null ? void 0 : e.toast,
        ee == null ? void 0 : ee.default,
        ee == null ? void 0 : ee[bt],
        g == null || (s = g.classNames) == null ? void 0 : s[bt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (sr = g.richColors) != null ? sr : q,
      "data-styled": !(g.jsx || g.unstyled || b),
      "data-mounted": re,
      "data-promise": !!g.promise,
      "data-swiped": wn,
      "data-removed": xe,
      "data-visible": Ur,
      "data-y-position": Cs,
      "data-x-position": Kt,
      "data-index": P,
      "data-front": en,
      "data-swiping": $e,
      "data-dismissible": Cr,
      "data-type": bt,
      "data-invert": xn,
      "data-swipe-out": Be,
      "data-swipe-direction": R,
      "data-expanded": !!(O || (De && re)),
      style: {
        "--index": P,
        "--toasts-before": P,
        "--z-index": T.length - P,
        "--offset": `${xe ? rr : zt.current}px`,
        "--initial-height": De ? "auto" : `${Ts}px`,
        ...I,
        ...g.style,
      },
      onDragEnd: () => {
        (Oe(!1), Y(null), (mr.current = null));
      },
      onPointerDown: (je) => {
        nn ||
          !Cr ||
          ((Qn.current = new Date()),
          $r(zt.current),
          je.target.setPointerCapture(je.pointerId),
          je.target.tagName !== "BUTTON" &&
            (Oe(!0), (mr.current = { x: je.clientX, y: je.clientY })));
      },
      onPointerUp: () => {
        var je, rt, ot;
        if (Be || !Cr) return;
        mr.current = null;
        const ht = Number(
            ((je = Dt.current) == null
              ? void 0
              : je.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          ir = Number(
            ((rt = Dt.current) == null
              ? void 0
              : rt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          nt =
            new Date().getTime() -
            ((ot = Qn.current) == null ? void 0 : ot.getTime()),
          mt = X === "x" ? ht : ir,
          Hr = Math.abs(mt) / nt;
        if (Math.abs(mt) >= m1 || Hr > 0.11) {
          ($r(zt.current),
            g.onDismiss == null || g.onDismiss.call(g, g),
            z(X === "x" ? (ht > 0 ? "right" : "left") : ir > 0 ? "down" : "up"),
            Bt(),
            dt(!0));
          return;
        } else {
          var E, A;
          ((E = Dt.current) == null ||
            E.style.setProperty("--swipe-amount-x", "0px"),
            (A = Dt.current) == null ||
              A.style.setProperty("--swipe-amount-y", "0px"));
        }
        (at(!1), Oe(!1), Y(null));
      },
      onPointerMove: (je) => {
        var rt, ot, ht;
        if (
          !mr.current ||
          !Cr ||
          ((rt = window.getSelection()) == null
            ? void 0
            : rt.toString().length) > 0
        )
          return;
        const nt = je.clientY - mr.current.y,
          mt = je.clientX - mr.current.x;
        var Hr;
        const E = (Hr = r.swipeDirections) != null ? Hr : y1(pe);
        !X &&
          (Math.abs(mt) > 1 || Math.abs(nt) > 1) &&
          Y(Math.abs(mt) > Math.abs(nt) ? "x" : "y");
        let A = { x: 0, y: 0 };
        const $ = (W) => 1 / (1.5 + Math.abs(W) / 20);
        if (X === "y") {
          if (E.includes("top") || E.includes("bottom"))
            if (
              (E.includes("top") && nt < 0) ||
              (E.includes("bottom") && nt > 0)
            )
              A.y = nt;
            else {
              const W = nt * $(nt);
              A.y = Math.abs(W) < Math.abs(nt) ? W : nt;
            }
        } else if (X === "x" && (E.includes("left") || E.includes("right")))
          if ((E.includes("left") && mt < 0) || (E.includes("right") && mt > 0))
            A.x = mt;
          else {
            const W = mt * $(mt);
            A.x = Math.abs(W) < Math.abs(mt) ? W : mt;
          }
        ((Math.abs(A.x) > 0 || Math.abs(A.y) > 0) && at(!0),
          (ot = Dt.current) == null ||
            ot.style.setProperty("--swipe-amount-x", `${A.x}px`),
          (ht = Dt.current) == null ||
            ht.style.setProperty("--swipe-amount-y", `${A.y}px`));
      },
    },
    tn && !g.jsx && bt !== "loading"
      ? te.createElement(
          "button",
          {
            "aria-label": B,
            "data-disabled": nn,
            "data-close-button": !0,
            onClick:
              nn || !Cr
                ? () => {}
                : () => {
                    (Bt(), g.onDismiss == null || g.onDismiss.call(g, g));
                  },
            className: Jr(
              ee == null ? void 0 : ee.closeButton,
              g == null || (i = g.classNames) == null ? void 0 : i.closeButton
            ),
          },
          (Zn = me == null ? void 0 : me.close) != null ? Zn : r1
        )
      : null,
    (bt || g.icon || g.promise) &&
      g.icon !== null &&
      ((me == null ? void 0 : me[bt]) !== null || g.icon)
      ? te.createElement(
          "div",
          {
            "data-icon": "",
            className: Jr(
              ee == null ? void 0 : ee.icon,
              g == null || (o = g.classNames) == null ? void 0 : o.icon
            ),
          },
          g.promise || (g.type === "loading" && !g.icon)
            ? g.icon || Wr()
            : null,
          g.type !== "loading" ? Rr : null
        )
      : null,
    te.createElement(
      "div",
      {
        "data-content": "",
        className: Jr(
          ee == null ? void 0 : ee.content,
          g == null || (l = g.classNames) == null ? void 0 : l.content
        ),
      },
      te.createElement(
        "div",
        {
          "data-title": "",
          className: Jr(
            ee == null ? void 0 : ee.title,
            g == null || (c = g.classNames) == null ? void 0 : c.title
          ),
        },
        g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title
      ),
      g.description
        ? te.createElement(
            "div",
            {
              "data-description": "",
              className: Jr(
                ke,
                Fr,
                ee == null ? void 0 : ee.description,
                g == null || (h = g.classNames) == null ? void 0 : h.description
              ),
            },
            typeof g.description == "function" ? g.description() : g.description
          )
        : null
    ),
    te.isValidElement(g.cancel)
      ? g.cancel
      : g.cancel && Lo(g.cancel)
        ? te.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: g.cancelButtonStyle || Z,
              onClick: (je) => {
                Lo(g.cancel) &&
                  Cr &&
                  (g.cancel.onClick == null ||
                    g.cancel.onClick.call(g.cancel, je),
                  Bt());
              },
              className: Jr(
                ee == null ? void 0 : ee.cancelButton,
                g == null || (f = g.classNames) == null
                  ? void 0
                  : f.cancelButton
              ),
            },
            g.cancel.label
          )
        : null,
    te.isValidElement(g.action)
      ? g.action
      : g.action && Lo(g.action)
        ? te.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: g.actionButtonStyle || ne,
              onClick: (je) => {
                Lo(g.action) &&
                  (g.action.onClick == null ||
                    g.action.onClick.call(g.action, je),
                  !je.defaultPrevented && Bt());
              },
              className: Jr(
                ee == null ? void 0 : ee.actionButton,
                g == null || (m = g.classNames) == null
                  ? void 0
                  : m.actionButton
              ),
            },
            g.action.label
          )
        : null
  );
};
function vp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r
    ? window.getComputedStyle(document.documentElement).direction
    : r;
}
function w1(r, e) {
  const s = {};
  return (
    [r, e].forEach((i, o) => {
      const l = o === 1,
        c = l ? "--mobile-offset" : "--offset",
        h = l ? h1 : d1;
      function f(m) {
        ["top", "right", "bottom", "left"].forEach((v) => {
          s[`${c}-${v}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof i == "number" || typeof i == "string"
        ? f(i)
        : typeof i == "object"
          ? ["top", "right", "bottom", "left"].forEach((m) => {
              i[m] === void 0
                ? (s[`${c}-${m}`] = h)
                : (s[`${c}-${m}`] =
                    typeof i[m] == "number" ? `${i[m]}px` : i[m]);
            })
          : f(h);
    }),
    s
  );
}
const x1 = te.forwardRef(function (e, s) {
  const {
      invert: i,
      position: o = "bottom-right",
      hotkey: l = ["altKey", "KeyT"],
      expand: c,
      closeButton: h,
      className: f,
      offset: m,
      mobileOffset: v,
      theme: g = "light",
      richColors: b,
      duration: x,
      style: _,
      visibleToasts: j = c1,
      toastOptions: k,
      dir: P = vp(),
      gap: T = p1,
      icons: O,
      containerAriaLabel: F = "Notifications",
    } = e,
    [q, Q] = te.useState([]),
    I = te.useMemo(
      () =>
        Array.from(
          new Set(
            [o].concat(q.filter((R) => R.position).map((R) => R.position))
          )
        ),
      [q, o]
    ),
    [Z, ne] = te.useState([]),
    [fe, ke] = te.useState(!1),
    [Pe, pe] = te.useState(!1),
    [be, De] = te.useState(
      g !== "system"
        ? g
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
    ),
    ee = te.useRef(null),
    me = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    B = te.useRef(null),
    X = te.useRef(!1),
    Y = te.useCallback((R) => {
      Q((z) => {
        var re;
        return (
          ((re = z.find((le) => le.id === R.id)) != null && re.delete) ||
            tr.dismiss(R.id),
          z.filter(({ id: le }) => le !== R.id)
        );
      });
    }, []);
  return (
    te.useEffect(
      () =>
        tr.subscribe((R) => {
          if (R.dismiss) {
            requestAnimationFrame(() => {
              Q((z) =>
                z.map((re) => (re.id === R.id ? { ...re, delete: !0 } : re))
              );
            });
            return;
          }
          setTimeout(() => {
            K_.flushSync(() => {
              Q((z) => {
                const re = z.findIndex((le) => le.id === R.id);
                return re !== -1
                  ? [...z.slice(0, re), { ...z[re], ...R }, ...z.slice(re + 1)]
                  : [R, ...z];
              });
            });
          });
        }),
      [q]
    ),
    te.useEffect(() => {
      if (g !== "system") {
        De(g);
        return;
      }
      if (
        (g === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? De("dark")
            : De("light")),
        typeof window > "u")
      )
        return;
      const R = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        R.addEventListener("change", ({ matches: z }) => {
          De(z ? "dark" : "light");
        });
      } catch {
        R.addListener(({ matches: re }) => {
          try {
            De(re ? "dark" : "light");
          } catch (le) {
            console.error(le);
          }
        });
      }
    }, [g]),
    te.useEffect(() => {
      q.length <= 1 && ke(!1);
    }, [q]),
    te.useEffect(() => {
      const R = (z) => {
        var re;
        if (l.every((ae) => z[ae] || z.code === ae)) {
          var xe;
          (ke(!0), (xe = ee.current) == null || xe.focus());
        }
        z.code === "Escape" &&
          (document.activeElement === ee.current ||
            ((re = ee.current) != null &&
              re.contains(document.activeElement))) &&
          ke(!1);
      };
      return (
        document.addEventListener("keydown", R),
        () => document.removeEventListener("keydown", R)
      );
    }, [l]),
    te.useEffect(() => {
      if (ee.current)
        return () => {
          B.current &&
            (B.current.focus({ preventScroll: !0 }),
            (B.current = null),
            (X.current = !1));
        };
    }, [ee.current]),
    te.createElement(
      "section",
      {
        ref: s,
        "aria-label": `${F} ${me}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      I.map((R, z) => {
        var re;
        const [le, xe] = R.split("-");
        return q.length
          ? te.createElement(
              "ol",
              {
                key: R,
                dir: P === "auto" ? vp() : P,
                tabIndex: -1,
                ref: ee,
                className: f,
                "data-sonner-toaster": !0,
                "data-sonner-theme": be,
                "data-y-position": le,
                "data-lifted": fe && q.length > 1 && !c,
                "data-x-position": xe,
                style: {
                  "--front-toast-height": `${((re = Z[0]) == null ? void 0 : re.height) || 0}px`,
                  "--width": `${f1}px`,
                  "--gap": `${T}px`,
                  ..._,
                  ...w1(m, v),
                },
                onBlur: (ae) => {
                  X.current &&
                    !ae.currentTarget.contains(ae.relatedTarget) &&
                    ((X.current = !1),
                    B.current &&
                      (B.current.focus({ preventScroll: !0 }),
                      (B.current = null)));
                },
                onFocus: (ae) => {
                  (ae.target instanceof HTMLElement &&
                    ae.target.dataset.dismissible === "false") ||
                    X.current ||
                    ((X.current = !0), (B.current = ae.relatedTarget));
                },
                onMouseEnter: () => ke(!0),
                onMouseMove: () => ke(!0),
                onMouseLeave: () => {
                  Pe || ke(!1);
                },
                onDragEnd: () => ke(!1),
                onPointerDown: (ae) => {
                  (ae.target instanceof HTMLElement &&
                    ae.target.dataset.dismissible === "false") ||
                    pe(!0);
                },
                onPointerUp: () => pe(!1),
              },
              q
                .filter((ae) => (!ae.position && z === 0) || ae.position === R)
                .map((ae, $e) => {
                  var Oe, Be;
                  return te.createElement(v1, {
                    key: ae.id,
                    icons: O,
                    index: $e,
                    toast: ae,
                    defaultRichColors: b,
                    duration:
                      (Oe = k == null ? void 0 : k.duration) != null ? Oe : x,
                    className: k == null ? void 0 : k.className,
                    descriptionClassName:
                      k == null ? void 0 : k.descriptionClassName,
                    invert: i,
                    visibleToasts: j,
                    closeButton:
                      (Be = k == null ? void 0 : k.closeButton) != null
                        ? Be
                        : h,
                    interacting: Pe,
                    position: R,
                    style: k == null ? void 0 : k.style,
                    unstyled: k == null ? void 0 : k.unstyled,
                    classNames: k == null ? void 0 : k.classNames,
                    cancelButtonStyle: k == null ? void 0 : k.cancelButtonStyle,
                    actionButtonStyle: k == null ? void 0 : k.actionButtonStyle,
                    closeButtonAriaLabel:
                      k == null ? void 0 : k.closeButtonAriaLabel,
                    removeToast: Y,
                    toasts: q.filter((dt) => dt.position == ae.position),
                    heights: Z.filter((dt) => dt.position == ae.position),
                    setHeights: ne,
                    expandByDefault: c,
                    gap: T,
                    expanded: fe,
                    swipeDirections: e.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _1 = (r) =>
    r.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, s, i) =>
      i ? i.toUpperCase() : s.toLowerCase()
    ),
  wp = (r) => {
    const e = _1(r);
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
  km = (...r) =>
    r
      .filter((e, s, i) => !!e && e.trim() !== "" && i.indexOf(e) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var k1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = C.forwardRef(
  (
    {
      color: r = "currentColor",
      size: e = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: l,
      iconNode: c,
      ...h
    },
    f
  ) =>
    C.createElement(
      "svg",
      {
        ref: f,
        ...k1,
        width: e,
        height: e,
        stroke: r,
        strokeWidth: i ? (Number(s) * 24) / Number(e) : s,
        className: km("lucide", o),
        ...h,
      },
      [
        ...c.map(([m, v]) => C.createElement(m, v)),
        ...(Array.isArray(l) ? l : [l]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ct = (r, e) => {
  const s = C.forwardRef(({ className: i, ...o }, l) =>
    C.createElement(S1, {
      ref: l,
      iconNode: e,
      className: km(`lucide-${b1(wp(r))}`, `lucide-${r}`, i),
      ...o,
    })
  );
  return ((s.displayName = wp(r)), s);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  T1 = ct("bell", E1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "path",
      {
        d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
        key: "3spt84",
      },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "M16 19h6", key: "xwg31i" }],
    ["path", { d: "M19 16v6", key: "tddt3s" }],
  ],
  R1 = ct("calendar-plus", C1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  Sm = ct("calendar", j1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  P1 = ct("chevron-left", N1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  A1 = ct("chevron-right", O1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  I1 = ct("layout-dashboard", D1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = [
    ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
    ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
    ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
    ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
  ],
  M1 = ct("maximize-2", L1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  U1 = ct("menu", $1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  Pc = ct("pencil", F1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Em = ct("plus", z1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  W1 = ct("search", B1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  V1 = ct("settings", H1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  K1 = ct("shield", q1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  G1 = ct("sparkles", Y1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = [
    [
      "path",
      {
        d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
        key: "1uzm8b",
      },
    ],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  pc = ct("square-check-big", J1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = [
    [
      "rect",
      {
        width: "20",
        height: "12",
        x: "2",
        y: "6",
        rx: "6",
        ry: "6",
        key: "f2vt7d",
      },
    ],
    ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }],
  ],
  X1 = ct("toggle-left", Q1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = [
    [
      "rect",
      {
        width: "20",
        height: "12",
        x: "2",
        y: "6",
        rx: "6",
        ry: "6",
        key: "f2vt7d",
      },
    ],
    ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }],
  ],
  ek = ct("toggle-right", Z1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tk = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ],
  Oc = ct("trash-2", tk);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rk = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  nk = ct("triangle-alert", rk);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sk = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  ik = ct("users", sk);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ak = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  hi = ct("x", ak);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ok = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  lk = ct("zap", ok),
  uk = (r) =>
    ({
      "AV-1": "bg-blue-100 text-blue-700 border-blue-200",
      "AV-2": "bg-purple-100 text-purple-700 border-purple-200",
      CAMERA: "bg-pink-100 text-pink-700 border-pink-200",
      "ATTENDANCE/AUDITORIUM":
        "bg-indigo-100 text-indigo-700 border-indigo-200",
      "ENTRANCE-1": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "ENTRANCE-2": "bg-teal-100 text-teal-700 border-teal-200",
      "ENTRANCE-3": "bg-cyan-100 text-cyan-700 border-cyan-200",
    })[r] || "bg-gray-100 text-gray-700 border-gray-200",
  Tm = (r) =>
    r === "MIDWEEK"
      ? "bg-yellow-100 text-yellow-700 border-yellow-200"
      : "bg-green-100 text-green-700 border-green-200";
function ck({ event: r, tasks: e, onClose: s }) {
  var c;
  C.useEffect(() => {
    const h = document.body.style.overflow;
    return (
      (document.body.style.overflow = "hidden"),
      () => {
        document.body.style.overflow = h;
      }
    );
  }, []);
  const i = 8,
    o = e.slice(0, i).map((h) => {
      const f = r.assignments.find((m) => {
        var v;
        return ((v = m.tasks) == null ? void 0 : v.id) === h.id;
      });
      return { task: h, assignment: f };
    }),
    l =
      r.assignments.length - i > 0 ? Math.max(0, r.assignments.length - i) : 0;
  return Nc.createPortal(
    y.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50",
      children: y.jsxs("div", {
        className:
          "bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col",
        children: [
          y.jsxs("div", {
            className:
              "flex items-center justify-between p-3 border-b border-gray-200 flex-shrink-0",
            children: [
              y.jsxs("div", {
                className: "flex-1 text-center",
                children: [
                  y.jsx("h2", {
                    className: "text-2xl font-semibold text-gray-900",
                    children: qt(Ss(r.event_date), "MMMM d, yyyy"),
                  }),
                  y.jsx("p", {
                    className: "text-base text-gray-500 mt-0.5",
                    children: y.jsx("span", {
                      className: "font-bold",
                      children:
                        ((c = r.event_type) == null ? void 0 : c.name) ||
                        "No Type",
                    }),
                  }),
                ],
              }),
              y.jsx("button", {
                onClick: s,
                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                "aria-label": "Close",
                children: y.jsx(hi, { className: "w-5 h-5 text-gray-500" }),
              }),
            ],
          }),
          y.jsx("div", {
            className: "flex-1 overflow-hidden p-3",
            children:
              r.assignments.length === 0
                ? y.jsx("p", {
                    className:
                      "text-center text-gray-500 italic py-2 text-base",
                    children: "No brothers assigned",
                  })
                : y.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      o.map(({ task: h, assignment: f }) => {
                        var v, g;
                        const m = f;
                        return y.jsxs(
                          "div",
                          {
                            className:
                              "flex flex-col items-center py-3 px-4 border border-gray-200 rounded-lg bg-gray-50",
                            children: [
                              y.jsx("p", {
                                className:
                                  "text-base text-gray-700 text-center truncate w-full",
                                title: h.name,
                                children: h.name,
                              }),
                              y.jsx("p", {
                                className:
                                  "font-bold text-lg text-gray-900 text-center truncate w-full mt-0.5",
                                title:
                                  ((v = m == null ? void 0 : m.brothers) == null
                                    ? void 0
                                    : v.full_name) || "",
                                children:
                                  ((g = m == null ? void 0 : m.brothers) == null
                                    ? void 0
                                    : g.full_name) || "Unassigned",
                              }),
                            ],
                          },
                          h.id
                        );
                      }),
                      l > 0 &&
                        y.jsxs("p", {
                          className:
                            "text-sm text-gray-500 italic text-center py-1",
                          children: ["+ ", l, " more"],
                        }),
                    ],
                  }),
          }),
        ],
      }),
    }),
    document.body
  );
}
function Ac({ events: r, tasks: e, showEditColumn: s, onEditEvent: i }) {
  const [o, l] = C.useState(null),
    [c, h] = C.useState(!1),
    f = (v) => {
      (l(v), h(!0));
    },
    m = () => {
      h(!1);
    };
  return r.length === 0
    ? y.jsx("div", {
        className: "text-center py-8 text-gray-500",
        children: "No events scheduled for this month",
      })
    : y.jsxs(y.Fragment, {
        children: [
          y.jsx("div", {
            className: "overflow-x-auto",
            children: y.jsxs("table", {
              className: "w-full border-collapse",
              children: [
                y.jsx("thead", {
                  className:
                    "bg-gray-50 border-b border-gray-200 sticky top-0 z-10",
                  children: y.jsxs("tr", {
                    children: [
                      y.jsx("th", {
                        className:
                          "px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-24",
                        children: "Date",
                      }),
                      y.jsx("th", {
                        className:
                          "px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-32",
                        children: "Meeting",
                      }),
                      e.map((v) =>
                        y.jsx(
                          "th",
                          {
                            className:
                              "px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                            children: v.name,
                          },
                          v.id
                        )
                      ),
                      s &&
                        y.jsx("th", {
                          className:
                            "px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-10",
                          children: "Edit",
                        }),
                    ],
                  }),
                }),
                y.jsx("tbody", {
                  className: "bg-white divide-y divide-gray-200",
                  children: r.map((v) => {
                    var g, b;
                    return y.jsxs(
                      "tr",
                      {
                        className: "hover:bg-gray-50 cursor-pointer",
                        onClick: () => f(v),
                        children: [
                          y.jsx("td", {
                            className:
                              "px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                            children: qt(Ss(v.event_date), "MMM d"),
                          }),
                          y.jsx("td", {
                            className: "px-4 py-4 whitespace-nowrap",
                            children: y.jsx("span", {
                              className: `inline-flex px-3 py-1 text-xs font-medium rounded-full border ${Tm(((g = v.event_type) == null ? void 0 : g.name) || "")}`,
                              children:
                                (b = v.event_type) == null ? void 0 : b.name,
                            }),
                          }),
                          e.map((x) => {
                            var j;
                            const _ = v.assignments.find((k) => {
                              var P;
                              return (
                                ((P = k.tasks) == null ? void 0 : P.id) === x.id
                              );
                            });
                            return y.jsx(
                              "td",
                              {
                                className: "px-4 py-4 text-sm text-gray-600",
                                children: _
                                  ? y.jsx("span", {
                                      className: "font-medium",
                                      children:
                                        ((j = _.brothers) == null
                                          ? void 0
                                          : j.full_name) || "-",
                                    })
                                  : y.jsx("span", {
                                      className: "text-gray-400",
                                      children: "Unassigned",
                                    }),
                              },
                              x.id
                            );
                          }),
                          s &&
                            y.jsx("td", {
                              className: "px-4 py-4 whitespace-nowrap text-sm",
                              children: y.jsx("button", {
                                onClick: (x) => {
                                  (x.stopPropagation(), i == null || i(v));
                                },
                                className:
                                  "text-indigo-600 hover:text-indigo-900 transition-colors",
                                title: "Edit assignments",
                                "aria-label": "Edit assignments",
                                children: y.jsx(Pc, { className: "w-4 h-4" }),
                              }),
                            }),
                        ],
                      },
                      v.id
                    );
                  }),
                }),
              ],
            }),
          }),
          c && o && y.jsx(ck, { event: o, tasks: e, onClose: m }),
        ],
      });
}
function dk({}) {
  const [r] = C.useState(new Date()),
    [e, s] = C.useState([]),
    [i, o] = C.useState([]),
    [l, c] = C.useState(!0),
    h = async () => {
      try {
        c(!0);
        const { data: f } = await Ve.from("tasks")
            .select("*")
            .eq("is_active", !0)
            .order("id"),
          { data: m } = await Ve.from("events")
            .select("*, event_types(*)")
            .eq("month", r.getMonth() + 1)
            .eq("year", r.getFullYear())
            .order("event_date");
        if (m != null && m.length) {
          const v = m.map((x) => x.id),
            { data: g } = await Ve.from("assignments")
              .select("*, brothers(*), tasks(*)")
              .in("event_id", v),
            b = m.map((x) => ({
              ...x,
              event_type: x.event_types,
              assignments:
                (g == null ? void 0 : g.filter((_) => _.event_id === x.id)) ||
                [],
            }));
          s(b);
        } else s([]);
        o(f || []);
      } catch (f) {
        (console.error("Error fetching data:", f),
          Le.error("Failed to load schedule data"));
      } finally {
        c(!1);
      }
    };
  return (
    C.useEffect(
      () => (
        h(),
        (document.body.style.overflow = "hidden"),
        () => {
          document.body.style.overflow = "";
        }
      ),
      []
    ),
    l
      ? y.jsx("div", {
          className: "flex items-center justify-center h-screen",
          children: y.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600",
          }),
        })
      : y.jsxs("div", {
          className: "fixed inset-0 flex flex-col bg-white",
          children: [
            y.jsxs("div", {
              className:
                "flex-shrink-0 border-b border-gray-200 px-6 py-4 flex items-center justify-center bg-white",
              children: [
                y.jsxs("div", {
                  className: "flex flex-col items-center justify-center",
                  children: [
                    y.jsx("h1", {
                      className: "text-3xl font-semibold text-gray-900",
                      children: qt(r, "MMMM yyyy"),
                    }),
                    y.jsx("p", {
                      className: "text-sm text-gray-500 mt-1 text-center",
                      children: "Task assignments for the month",
                    }),
                  ],
                }),
                y.jsx(Yo, {
                  to: "/dashboard",
                  className:
                    "p-2 hover:bg-gray-100 rounded-lg transition-colors absolute right-4 top-4",
                  "aria-label": "Back to dashboard",
                  children: y.jsx(hi, { className: "w-5 h-5 text-gray-600" }),
                }),
              ],
            }),
            y.jsx("div", {
              className: "flex-1 p-6 overflow-auto",
              children: y.jsx("div", {
                className: "max-w-full",
                children: y.jsx(Ac, {
                  events: e,
                  tasks: i,
                  showEditColumn: !1,
                }),
              }),
            }),
          ],
        })
  );
}
function hk({ event: r, tasks: e, onClose: s, onSave: i }) {
  var j;
  const [o, l] = C.useState({}),
    [c, h] = C.useState({}),
    [f, m] = C.useState(!1);
  C.useEffect(() => {
    const k = {};
    (r.assignments.forEach((P) => {
      var T;
      k[(T = P.tasks) == null ? void 0 : T.id] = P.brother_id;
    }),
      l(k),
      v());
  }, [r]);
  async function v() {
    const k = {};
    for (const P of e) {
      const { data: T } = await Ve.from("brother_task_eligibility")
        .select(
          `
          brother_id,
          brothers (*)
        `
        )
        .eq("task_id", P.id)
        .eq("event_type_id", r.event_type_id);
      T &&
        (k[P.id] = T.map((O) => O.brothers).filter((O) =>
          O == null ? void 0 : O.is_active
        ));
    }
    h(k);
  }
  function g(k, P) {
    l({ ...o, [k]: P ? parseInt(P) : null });
  }
  function b() {
    const k = Object.values(o).filter((T) => T !== null),
      P = k.filter((T, O) => k.indexOf(T) !== O);
    return [...new Set(P)];
  }
  async function x() {
    if (b().length > 0) {
      Le.error(
        "Cannot assign the same brother to multiple tasks on the same day"
      );
      return;
    }
    try {
      (m(!0), await Ve.from("assignments").delete().eq("event_id", r.id));
      const P = Object.entries(o)
        .filter(([T, O]) => O !== null)
        .map(([T, O]) => ({ event_id: r.id, task_id: T, brother_id: O }));
      if (P.length > 0) {
        const { error: T } = await Ve.from("assignments").insert(P);
        if (T) throw T;
      }
      (Le.success("Assignments saved successfully!"), i());
    } catch (P) {
      (console.error("Error saving assignments:", P),
        Le.error("Failed to save assignments"));
    } finally {
      m(!1);
    }
  }
  const _ = b();
  return y.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50",
    children: y.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col",
      children: [
        y.jsxs("div", {
          className:
            "flex items-center justify-between p-6 border-b border-gray-200",
          children: [
            y.jsxs("div", {
              children: [
                y.jsx("h2", {
                  className: "text-xl font-semibold text-gray-900",
                  children: "Edit Assignments",
                }),
                y.jsxs("p", {
                  className: "text-sm text-gray-500 mt-1",
                  children: [
                    qt(Ss(r.event_date), "MMMM d, yyyy"),
                    " -",
                    " ",
                    (j = r.event_type) == null ? void 0 : j.name,
                  ],
                }),
              ],
            }),
            y.jsx("button", {
              onClick: s,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: y.jsx(hi, { className: "w-5 h-5 text-gray-500" }),
            }),
          ],
        }),
        y.jsxs("div", {
          className: "flex-1 overflow-y-auto p-6",
          children: [
            _.length > 0 &&
              y.jsxs("div", {
                className:
                  "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3",
                children: [
                  y.jsx(nk, {
                    className: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5",
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("p", {
                        className: "text-sm font-medium text-red-800",
                        children: "Conflict Detected",
                      }),
                      y.jsx("p", {
                        className: "text-sm text-red-700 mt-1",
                        children:
                          "The same brother is assigned to multiple tasks. Please review your selections.",
                      }),
                    ],
                  }),
                ],
              }),
            y.jsx("div", {
              className: "space-y-4",
              children: e.map((k) => {
                const P = c[k.id] || [],
                  T = o[k.id],
                  O = T && _.includes(T);
                return y.jsxs(
                  "div",
                  {
                    children: [
                      y.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: k.name,
                      }),
                      y.jsxs("select", {
                        value: T || "",
                        onChange: (F) => g(k.id, F.target.value),
                        className: `w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${O ? "border-red-300 bg-red-50" : "border-gray-300"}`,
                        children: [
                          y.jsx("option", {
                            value: "",
                            children: "-- Select Brother --",
                          }),
                          P.map((F) =>
                            y.jsx(
                              "option",
                              { value: F.id, children: F.full_name },
                              F.id
                            )
                          ),
                        ],
                      }),
                      P.length === 0 &&
                        y.jsx("p", {
                          className: "text-xs text-gray-500 mt-1",
                          children: "No eligible brothers for this task",
                        }),
                    ],
                  },
                  k.id
                );
              }),
            }),
          ],
        }),
        y.jsxs("div", {
          className:
            "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
          children: [
            y.jsx("button", {
              onClick: s,
              className:
                "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
              children: "Cancel",
            }),
            y.jsx("button", {
              onClick: x,
              disabled: f || _.length > 0,
              className:
                "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              children: f ? "Saving..." : "Save Assignments",
            }),
          ],
        }),
      ],
    }),
  });
}
function fk({ isOpen: r, onClose: e, events: s, tasks: i, currentDate: o }) {
  return (
    C.useEffect(
      () => (
        r
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [r]
    ),
    r
      ? Nc.createPortal(
          y.jsxs("div", {
            className: "fixed inset-0 z-50 flex flex-col bg-white",
            style: {
              width: "100vw",
              height: "100vh",
              margin: 0,
              padding: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            "aria-modal": "true",
            "aria-label": "Full screen table view",
            children: [
              y.jsxs("div", {
                className:
                  "flex-shrink-0 border-b border-gray-200 px-6 py-4 flex items-center justify-center bg-white",
                children: [
                  y.jsxs("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      y.jsx("h1", {
                        className: "text-3xl font-semibold text-gray-900",
                        children: qt(o, "MMMM yyyy"),
                      }),
                      y.jsx("p", {
                        className: "text-sm text-gray-500 mt-1 text-center",
                        children: "Task assignments for the month",
                      }),
                    ],
                  }),
                  y.jsx("button", {
                    onClick: e,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors justify-end absolute right-4 top-4",
                    "aria-label": "Close full screen view",
                    children: y.jsx(hi, { className: "w-5 h-5 text-gray-600" }),
                  }),
                ],
              }),
              y.jsx("div", {
                className: "flex-1 p-6 overflow-auto",
                children: y.jsx("div", {
                  className: "max-w-full",
                  children: y.jsx(Ac, {
                    events: s,
                    tasks: i,
                    showEditColumn: !1,
                  }),
                }),
              }),
            ],
          }),
          document.body
        )
      : null
  );
}
function pk() {
  const [r, e] = C.useState(new Date()),
    [s, i] = C.useState([]),
    [o, l] = C.useState([]),
    [c, h] = C.useState(!0),
    [f, m] = C.useState("table"),
    [v, g] = C.useState(null),
    [b, x] = C.useState(!1),
    [_, j] = C.useState(!1),
    k = C.useMemo(() => jb(r), [r]),
    P = C.useMemo(() => Cb(r), [r]),
    T = C.useMemo(() => Rb({ start: k, end: P }), [k, P]),
    O = C.useMemo(() => {
      const pe = new Map();
      return (
        s.forEach((be) => {
          const De = qt(Ss(be.event_date), "yyyy-MM-dd");
          pe.set(De, be);
        }),
        pe
      );
    }, [s]),
    F = C.useCallback(
      (pe) => {
        const be = qt(pe, "yyyy-MM-dd");
        return O.get(be);
      },
      [O]
    ),
    q = C.useCallback(async () => {
      try {
        h(!0);
        const { data: pe } = await Ve.from("tasks")
            .select("*")
            .eq("is_active", !0)
            .order("id"),
          { data: be } = await Ve.from("events")
            .select("*, event_types(*)")
            .eq("month", r.getMonth() + 1)
            .eq("year", r.getFullYear())
            .order("event_date");
        if (be != null && be.length) {
          const De = be.map((B) => B.id),
            { data: ee } = await Ve.from("assignments")
              .select("*, brothers(*), tasks(*)")
              .in("event_id", De),
            me = be.map((B) => ({
              ...B,
              event_type: B.event_types,
              assignments:
                (ee == null ? void 0 : ee.filter((X) => X.event_id === B.id)) ||
                [],
            }));
          i(me);
        } else i([]);
        l(pe || []);
      } catch (pe) {
        (console.error("Error fetching data:", pe),
          Le.error("Failed to load dashboard data"));
      } finally {
        h(!1);
      }
    }, [r]);
  C.useEffect(() => {
    q();
  }, [q]);
  const Q = C.useCallback(async () => {
      try {
        if (
          (Le.loading("Generating monthly schedule...", { id: "generate" }),
          !(
            await fetch(
              `https://${pm}.supabase.co/functions/v1/make-server-cf56d43f/generate-schedule`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${mm}`,
                },
                body: JSON.stringify({
                  month: r.getMonth() + 1,
                  year: r.getFullYear(),
                }),
              }
            )
          ).ok)
        )
          throw new Error("Failed to generate schedule");
        (Le.success("Schedule generated successfully!", { id: "generate" }),
          q());
      } catch (pe) {
        (console.error("Error generating schedule:", pe),
          Le.error("Failed to generate schedule", { id: "generate" }));
      }
    }, [r, q]),
    I = C.useCallback(() => {
      e(new Date(r.getFullYear(), r.getMonth() - 1, 1));
    }, [r]),
    Z = C.useCallback(() => {
      e(new Date(r.getFullYear(), r.getMonth() + 1, 1));
    }, [r]),
    ne = C.useCallback((pe) => {
      (g(pe), x(!0));
    }, []),
    fe = C.useCallback(() => {
      (x(!1), g(null));
    }, []),
    ke = C.useCallback(() => {
      (q(), x(!1), g(null));
    }, [q]),
    Pe = C.useCallback(() => {
      j(!1);
    }, []);
  return c
    ? y.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: y.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600",
        }),
      })
    : y.jsxs("div", {
        className: "max-w-8xl mx-auto space-y-4",
        children: [
          y.jsxs("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
            children: [
              y.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Monthly Task Assignment",
                      }),
                      y.jsx("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Manage and assign tasks for meetings",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      y.jsxs("button", {
                        onClick: () =>
                          m(f === "calendar" ? "table" : "calendar"),
                        className:
                          "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium",
                        children: [
                          y.jsx(Sm, { className: "w-4 h-4 inline-block mr-2" }),
                          f === "calendar" ? "Table View" : "Calendar View",
                        ],
                      }),
                      y.jsxs("button", {
                        onClick: Q,
                        className:
                          "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm",
                        children: [
                          y.jsx(G1, { className: "w-4 h-4 inline-block mr-2" }),
                          "Generate Schedule",
                        ],
                      }),
                      f === "table" &&
                        y.jsxs("button", {
                          onClick: () => j(!0),
                          className:
                            "px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium shadow-sm",
                          children: [
                            y.jsx(M1, {
                              className: "w-4 h-4 inline-block mr-2",
                            }),
                            "Full Screen",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between mt-6 pt-6 border-t border-gray-200",
                children: [
                  y.jsx("button", {
                    onClick: I,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    "aria-label": "Previous month",
                    children: y.jsx(P1, { className: "w-5 h-5 text-gray-600" }),
                  }),
                  y.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900",
                    children: qt(r, "MMMM yyyy"),
                  }),
                  y.jsx("button", {
                    onClick: Z,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    "aria-label": "Next month",
                    children: y.jsx(A1, { className: "w-5 h-5 text-gray-600" }),
                  }),
                ],
              }),
            ],
          }),
          f === "calendar" &&
            y.jsx("div", {
              className:
                "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
              children: y.jsxs("div", {
                className: "grid grid-cols-7 gap-2",
                children: [
                  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((pe) =>
                    y.jsx(
                      "div",
                      {
                        className:
                          "text-center text-xs font-semibold text-gray-500 py-2",
                        children: pe,
                      },
                      pe
                    )
                  ),
                  T.map((pe) => {
                    var X, Y;
                    const be = F(pe),
                      De = Sb(pe, new Date()),
                      ee = P_(pe, r),
                      me = `min-h-32 border border-gray-200 rounded-lg p-2 ${ee ? (be ? "bg-white cursor-pointer hover:shadow-md transition-shadow" : "bg-gray-50/50") : "bg-gray-50"} ${De ? "ring-2 ring-indigo-600" : ""}`,
                      B = y.jsxs(y.Fragment, {
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              y.jsx("span", {
                                className: `text-sm font-medium ${De ? "text-indigo-600" : ee ? "text-gray-900" : "text-gray-400"}`,
                                children: qt(pe, "d"),
                              }),
                              be &&
                                y.jsx("span", {
                                  className: `text-xs px-2 py-0.5 rounded border ${Tm(((X = be.event_type) == null ? void 0 : X.name) || "")}`,
                                  children:
                                    (Y = be.event_type) == null
                                      ? void 0
                                      : Y.name,
                                }),
                            ],
                          }),
                          be &&
                            y.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                be.assignments.slice(0, 3).map((R) => {
                                  var z, re, le;
                                  return y.jsxs(
                                    "div",
                                    {
                                      className: `text-xs px-2 py-1 rounded border ${uk(((z = R.tasks) == null ? void 0 : z.name) || "")}`,
                                      children: [
                                        y.jsx("div", {
                                          className: "font-medium truncate",
                                          children:
                                            (re = R.tasks) == null
                                              ? void 0
                                              : re.name,
                                        }),
                                        y.jsx("div", {
                                          className: "truncate opacity-75",
                                          children:
                                            (le = R.brothers) == null
                                              ? void 0
                                              : le.full_name,
                                        }),
                                      ],
                                    },
                                    R.id
                                  );
                                }),
                                be.assignments.length > 3 &&
                                  y.jsxs("div", {
                                    className: "text-xs text-gray-500 px-2",
                                    children: [
                                      "+",
                                      be.assignments.length - 3,
                                      " more",
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      });
                    return be
                      ? y.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => ne(be),
                            className: me,
                            children: B,
                          },
                          pe.toString()
                        )
                      : y.jsx(
                          "div",
                          { className: me, children: B },
                          pe.toString()
                        );
                  }),
                ],
              }),
            }),
          f === "table" &&
            y.jsx("div", {
              className:
                "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
              children: y.jsx(Ac, {
                events: s,
                tasks: o,
                showEditColumn: !0,
                onEditEvent: ne,
              }),
            }),
          b && v && y.jsx(hk, { event: v, tasks: o, onClose: fe, onSave: ke }),
          y.jsx(fk, {
            isOpen: _,
            onClose: Pe,
            events: s,
            tasks: o,
            currentDate: r,
          }),
        ],
      });
}
function mk({ brother: r, tasks: e, eventTypes: s, onClose: i, onSave: o }) {
  const [l, c] = C.useState((r == null ? void 0 : r.id) || 0),
    [h, f] = C.useState((r == null ? void 0 : r.full_name) || ""),
    [m, v] = C.useState((r == null ? void 0 : r.is_active) ?? !0),
    [g, b] = C.useState({}),
    [x, _] = C.useState(!1);
  C.useEffect(() => {
    if (r) j();
    else {
      const T = {};
      (e.forEach((O) => {
        T[O.id] = s.map((F) => F.id);
      }),
        b(T));
    }
  }, [r]);
  async function j() {
    if (!r) return;
    const { data: T } = await Ve.from("brother_task_eligibility")
        .select("*")
        .eq("brother_id", r.id),
      O = {};
    (e.forEach((F) => {
      O[F.id] = [];
    }),
      T == null ||
        T.forEach((F) => {
          (O[F.task_id] || (O[F.task_id] = []),
            O[F.task_id].push(F.event_type_id));
        }),
      b(O));
  }
  function k(T, O) {
    b((F) => {
      const q = F[T] || [],
        Q = q.includes(O) ? q.filter((I) => I !== O) : [...q, O];
      return { ...F, [T]: Q };
    });
  }
  async function P() {
    if (!h.trim()) {
      Le.error("Please enter a name");
      return;
    }
    if (!l || l <= 0) {
      Le.error("Please enter a valid brother ID");
      return;
    }
    try {
      if ((_(!0), r)) {
        const { error: O } = await Ve.from("brothers")
          .update({ full_name: h, is_active: m })
          .eq("id", r.id);
        if (O) throw O;
        await Ve.from("brother_task_eligibility")
          .delete()
          .eq("brother_id", r.id);
      } else {
        const { error: O } = await Ve.from("brothers").insert({
          id: l,
          full_name: h,
          is_active: m,
        });
        if (O) throw O;
      }
      const T = Object.entries(g).flatMap(([O, F]) =>
        F.map((q) => ({
          brother_id: (r == null ? void 0 : r.id) || l,
          task_id: O,
          event_type_id: q,
        }))
      );
      if (T.length > 0) {
        const { error: O } = await Ve.from("brother_task_eligibility").insert(
          T
        );
        if (O) throw O;
      }
      (Le.success(
        r ? "Brother updated successfully!" : "Brother added successfully!"
      ),
        o());
    } catch (T) {
      (console.error("Error saving brother:", T),
        T.code === "23505"
          ? Le.error("A brother with this ID already exists")
          : Le.error("Failed to save brother"));
    } finally {
      _(!1);
    }
  }
  return y.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50",
    children: y.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col",
      children: [
        y.jsxs("div", {
          className:
            "flex items-center justify-between p-6 border-b border-gray-200",
          children: [
            y.jsx("h2", {
              className: "text-xl font-semibold text-gray-900",
              children: r ? "Edit Brother" : "Add New Brother",
            }),
            y.jsx("button", {
              onClick: i,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: y.jsx(hi, { className: "w-5 h-5 text-gray-500" }),
            }),
          ],
        }),
        y.jsx("div", {
          className: "flex-1 overflow-y-auto p-6",
          children: y.jsxs("div", {
            className: "space-y-6",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("h3", {
                    className: "text-sm font-semibold text-gray-900 mb-4",
                    children: "Basic Information",
                  }),
                  y.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      y.jsxs("div", {
                        children: [
                          y.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Brother ID",
                          }),
                          y.jsx("input", {
                            type: "number",
                            value: l,
                            onChange: (T) => c(parseInt(T.target.value)),
                            disabled: !!r,
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100",
                            placeholder: "Enter brother ID",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Full Name",
                          }),
                          y.jsx("input", {
                            type: "text",
                            value: h,
                            onChange: (T) => f(T.target.value),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                            placeholder: "Enter full name",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          y.jsx("input", {
                            type: "checkbox",
                            id: "is-active",
                            checked: m,
                            onChange: (T) => v(T.target.checked),
                            className:
                              "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500",
                          }),
                          y.jsx("label", {
                            htmlFor: "is-active",
                            className: "text-sm font-medium text-gray-700",
                            children: "Active",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                children: [
                  y.jsx("h3", {
                    className: "text-sm font-semibold text-gray-900 mb-4",
                    children: "Task Eligibility",
                  }),
                  y.jsx("div", {
                    className: "space-y-4",
                    children: e.map((T) =>
                      y.jsxs(
                        "div",
                        {
                          className: "p-4 border border-gray-200 rounded-lg",
                          children: [
                            y.jsx("h4", {
                              className:
                                "text-sm font-medium text-gray-900 mb-3",
                              children: T.name,
                            }),
                            y.jsx("div", {
                              className: "flex flex-wrap gap-3",
                              children: s.map((O) => {
                                const F = (g[T.id] || []).includes(O.id);
                                return y.jsxs(
                                  "label",
                                  {
                                    className:
                                      "flex items-center space-x-2 cursor-pointer",
                                    children: [
                                      y.jsx("input", {
                                        type: "checkbox",
                                        checked: F,
                                        onChange: () => k(T.id, O.id),
                                        className:
                                          "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500",
                                      }),
                                      y.jsx("span", {
                                        className: "text-sm text-gray-700",
                                        children: O.name,
                                      }),
                                    ],
                                  },
                                  O.id
                                );
                              }),
                            }),
                          ],
                        },
                        T.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsxs("div", {
          className:
            "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
          children: [
            y.jsx("button", {
              onClick: i,
              className:
                "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
              children: "Cancel",
            }),
            y.jsx("button", {
              onClick: P,
              disabled: x,
              className:
                "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              children: x ? "Saving..." : r ? "Update Brother" : "Add Brother",
            }),
          ],
        }),
      ],
    }),
  });
}
function gk() {
  const [r, e] = C.useState([]),
    [s, i] = C.useState([]),
    [o, l] = C.useState([]),
    [c, h] = C.useState(!0),
    [f, m] = C.useState(""),
    [v, g] = C.useState(!1),
    [b, x] = C.useState(null),
    [_, j] = C.useState({});
  C.useEffect(() => {
    k();
  }, []);
  async function k() {
    try {
      h(!0);
      const [F, q, Q] = await Promise.all([
        Ve.from("brothers").select("*").order("id"),
        Ve.from("tasks").select("*").eq("is_active", !0).order("id"),
        Ve.from("event_types").select("*"),
      ]);
      (e(F.data || []), i(q.data || []), l(Q.data || []));
      const I = new Date(),
        { data: Z } = await Ve.from("monthly_assignment_count")
          .select("*")
          .eq("month", I.getMonth() + 1)
          .eq("year", I.getFullYear()),
        ne = {};
      (Z == null ||
        Z.forEach((fe) => {
          ne[fe.brother_id] = fe.total_assignments;
        }),
        j(ne));
    } catch (F) {
      (console.error("Error fetching brothers:", F),
        Le.error("Failed to load brothers"));
    } finally {
      h(!1);
    }
  }
  async function P(F) {
    try {
      const { error: q } = await Ve.from("brothers")
        .update({ is_active: !F.is_active })
        .eq("id", F.id);
      if (q) throw q;
      (Le.success(
        `${F.full_name} is now ${F.is_active ? "inactive" : "active"}`
      ),
        k());
    } catch (q) {
      (console.error("Error toggling brother status:", q),
        Le.error("Failed to update status"));
    }
  }
  async function T(F) {
    if (
      confirm(
        `Are you sure you want to delete ${F.full_name}? This will remove all their assignments and eligibility records.`
      )
    )
      try {
        const { error: q } = await Ve.from("brothers").delete().eq("id", F.id);
        if (q) throw q;
        (Le.success(`${F.full_name} has been deleted`), k());
      } catch (q) {
        (console.error("Error deleting brother:", q),
          Le.error("Failed to delete brother"));
      }
  }
  const O = r.filter((F) =>
    F.full_name.toLowerCase().includes(f.toLowerCase())
  );
  return c
    ? y.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: y.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600",
        }),
      })
    : y.jsxs("div", {
        className: "max-w-7xl mx-auto space-y-6",
        children: [
          y.jsxs("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
            children: [
              y.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Brothers Management",
                      }),
                      y.jsx("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children:
                          "Manage brother profiles and task eligibility",
                      }),
                    ],
                  }),
                  y.jsxs("button", {
                    onClick: () => {
                      (x(null), g(!0));
                    },
                    className:
                      "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center",
                    children: [
                      y.jsx(Em, { className: "w-4 h-4 mr-2" }),
                      "Add Brother",
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "mt-6 relative",
                children: [
                  y.jsx(W1, {
                    className:
                      "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                  }),
                  y.jsx("input", {
                    type: "text",
                    placeholder: "Search brothers...",
                    value: f,
                    onChange: (F) => m(F.target.value),
                    className:
                      "w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                  }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
            children: y.jsx("div", {
              className: "overflow-x-auto",
              children: y.jsxs("table", {
                className: "w-full",
                children: [
                  y.jsx("thead", {
                    className: "bg-gray-50 border-b border-gray-200",
                    children: y.jsxs("tr", {
                      children: [
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "ID",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Full Name",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Assignments This Month",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Status",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  y.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children:
                      O.length === 0
                        ? y.jsx("tr", {
                            children: y.jsx("td", {
                              colSpan: 5,
                              className: "px-6 py-8 text-center text-gray-500",
                              children: f
                                ? "No brothers found matching your search"
                                : "No brothers added yet",
                            }),
                          })
                        : O.map((F) =>
                            y.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  y.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                    children: F.id,
                                  }),
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: F.full_name,
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsx("span", {
                                      className:
                                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700",
                                      children: _[F.id] || 0,
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsx("button", {
                                      onClick: () => P(F),
                                      className: "inline-flex items-center",
                                      children: y.jsx("span", {
                                        className: `inline-flex px-3 py-1 text-xs font-medium rounded-full border ${F.is_active ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-gray-100 text-gray-700 border-gray-200"}`,
                                        children: F.is_active
                                          ? "Active"
                                          : "Inactive",
                                      }),
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                    children: y.jsxs("div", {
                                      className:
                                        "flex items-center justify-end space-x-2",
                                      children: [
                                        y.jsx("button", {
                                          onClick: () => {
                                            (x(F), g(!0));
                                          },
                                          className:
                                            "p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
                                          title: "Edit",
                                          children: y.jsx(Pc, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                        y.jsx("button", {
                                          onClick: () => T(F),
                                          className:
                                            "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                          title: "Delete",
                                          children: y.jsx(Oc, {
                                            className: "w-4 h-4",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              F.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
          v &&
            y.jsx(mk, {
              brother: b,
              tasks: s,
              eventTypes: o,
              onClose: () => {
                (g(!1), x(null));
              },
              onSave: () => {
                (k(), g(!1), x(null));
              },
            }),
        ],
      });
}
function yk() {
  const [r, e] = C.useState([]),
    [s, i] = C.useState(!0),
    [o, l] = C.useState(null),
    [c, h] = C.useState("");
  C.useEffect(() => {
    f();
  }, []);
  async function f() {
    try {
      i(!0);
      const { data: b, error: x } = await Ve.from("tasks")
        .select("*")
        .order("id");
      if (x) throw x;
      e(b || []);
    } catch (b) {
      (console.error("Error fetching tasks:", b),
        Le.error("Failed to load tasks"));
    } finally {
      i(!1);
    }
  }
  async function m(b) {
    try {
      const { error: x } = await Ve.from("tasks")
        .update({ is_active: !b.is_active })
        .eq("id", b.id);
      if (x) throw x;
      (Le.success(`${b.name} is now ${b.is_active ? "inactive" : "active"}`),
        f());
    } catch (x) {
      (console.error("Error toggling task status:", x),
        Le.error("Failed to update status"));
    }
  }
  async function v(b) {
    if (
      confirm(
        `Are you sure you want to delete ${b.name}? This will remove all related assignments and eligibility records.`
      )
    )
      try {
        const { error: x } = await Ve.from("tasks").delete().eq("id", b.id);
        if (x) throw x;
        (Le.success(`${b.name} has been deleted`), f());
      } catch (x) {
        (console.error("Error deleting task:", x),
          Le.error("Failed to delete task"));
      }
  }
  async function g(b) {
    if (!c.trim()) {
      Le.error("Please enter a task name");
      return;
    }
    try {
      const { error: x } = await Ve.from("tasks")
        .update({ name: c })
        .eq("id", b.id);
      if (x) throw x;
      (Le.success("Task updated successfully!"), l(null), h(""), f());
    } catch (x) {
      (console.error("Error updating task:", x),
        Le.error("Failed to update task"));
    }
  }
  return s
    ? y.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: y.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600",
        }),
      })
    : y.jsxs("div", {
        className: "max-w-5xl mx-auto space-y-6",
        children: [
          y.jsx("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
            children: y.jsx("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: y.jsxs("div", {
                children: [
                  y.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Tasks Management",
                  }),
                  y.jsx("p", {
                    className: "text-sm text-gray-500 mt-1",
                    children: "Configure available tasks for assignment",
                  }),
                ],
              }),
            }),
          }),
          y.jsx("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
            children: y.jsx("div", {
              className: "overflow-x-auto",
              children: y.jsxs("table", {
                className: "w-full",
                children: [
                  y.jsx("thead", {
                    className: "bg-gray-50 border-b border-gray-200",
                    children: y.jsxs("tr", {
                      children: [
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Task Name",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Status",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  y.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children:
                      r.length === 0
                        ? y.jsx("tr", {
                            children: y.jsx("td", {
                              colSpan: 3,
                              className: "px-6 py-8 text-center text-gray-500",
                              children: "No tasks configured yet",
                            }),
                          })
                        : r.map((b) =>
                            y.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children:
                                      (o == null ? void 0 : o.id) === b.id
                                        ? y.jsx("input", {
                                            type: "text",
                                            value: c,
                                            onChange: (x) => h(x.target.value),
                                            onKeyDown: (x) => {
                                              (x.key === "Enter" && g(b),
                                                x.key === "Escape" &&
                                                  (l(null), h("")));
                                            },
                                            className:
                                              "px-3 py-1.5 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm",
                                            autoFocus: !0,
                                          })
                                        : y.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: b.name,
                                          }),
                                  }),
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsxs("button", {
                                      onClick: () => m(b),
                                      className:
                                        "inline-flex items-center space-x-2",
                                      children: [
                                        b.is_active
                                          ? y.jsx(ek, {
                                              className:
                                                "w-8 h-8 text-emerald-600",
                                            })
                                          : y.jsx(X1, {
                                              className:
                                                "w-8 h-8 text-gray-400",
                                            }),
                                        y.jsx("span", {
                                          className: `text-sm font-medium ${b.is_active ? "text-emerald-600" : "text-gray-500"}`,
                                          children: b.is_active
                                            ? "Active"
                                            : "Inactive",
                                        }),
                                      ],
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                    children: y.jsx("div", {
                                      className:
                                        "flex items-center justify-end space-x-2",
                                      children:
                                        (o == null ? void 0 : o.id) === b.id
                                          ? y.jsxs(y.Fragment, {
                                              children: [
                                                y.jsx("button", {
                                                  onClick: () => g(b),
                                                  className:
                                                    "px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-700 transition-colors",
                                                  children: "Save",
                                                }),
                                                y.jsx("button", {
                                                  onClick: () => {
                                                    (l(null), h(""));
                                                  },
                                                  className:
                                                    "px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors",
                                                  children: "Cancel",
                                                }),
                                              ],
                                            })
                                          : y.jsxs(y.Fragment, {
                                              children: [
                                                y.jsx("button", {
                                                  onClick: () => {
                                                    (l(b), h(b.name));
                                                  },
                                                  className:
                                                    "p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
                                                  title: "Edit",
                                                  children: y.jsx(Pc, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                                y.jsx("button", {
                                                  onClick: () => v(b),
                                                  className:
                                                    "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                                  title: "Delete",
                                                  children: y.jsx(Oc, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                    }),
                                  }),
                                ],
                              },
                              b.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
          y.jsxs("div", {
            className: "bg-blue-50 border border-blue-200 rounded-xl p-6",
            children: [
              y.jsx("h3", {
                className: "text-sm font-semibold text-blue-900 mb-2",
                children: "About Task Management",
              }),
              y.jsx("p", {
                className: "text-sm text-blue-700",
                children:
                  "Tasks represent the different roles that brothers can be assigned to during meetings. You can activate/deactivate tasks as needed. Inactive tasks won't appear in the assignment system but their historical data is preserved.",
              }),
            ],
          }),
        ],
      });
}
function vk({ isOpen: r, onClose: e, onSuccess: s, eventTypes: i }) {
  const [o, l] = C.useState(new Date().getFullYear()),
    [c, h] = C.useState(new Date().getMonth() + 1),
    [f, m] = C.useState(3),
    [v, g] = C.useState(0),
    [b, x] = C.useState(!1),
    _ = C.useCallback(
      (k) => {
        const P = i.find((T) => T.name === k);
        return P == null ? void 0 : P.id;
      },
      [i]
    ),
    j = C.useCallback(async () => {
      const k = _("MIDWEEK"),
        P = _("WEEKEND");
      if (!k || !P) {
        Le.error(
          'Event types "MIDWEEK" and "WEEKEND" must exist in the database'
        );
        return;
      }
      x(!0);
      const T = N_(new Date(o, c - 1)),
        O = [];
      for (let fe = 1; fe <= T; fe++) {
        const ke = new Date(o, c - 1, fe),
          Pe = j_(ke);
        let pe = null;
        (Pe === v ? (pe = P) : Pe === f && (pe = k),
          pe &&
            O.push({
              event_date: qt(ke, "yyyy-MM-dd"),
              event_type_id: pe,
              month: c,
              year: o,
            }));
      }
      if (O.length === 0) {
        (Le.info("No dates matched the selected weekdays for this month"),
          x(!1),
          e());
        return;
      }
      const { data: F } = await Ve.from("events")
          .select("event_date")
          .eq("month", c)
          .eq("year", o),
        q = new Set(
          (F == null
            ? void 0
            : F.map((fe) => qt(new Date(fe.event_date), "yyyy-MM-dd"))) || []
        ),
        Q = O.filter((fe) => !q.has(fe.event_date));
      if (Q.length === 0) {
        (Le.info("All generated events already exist for this month"),
          x(!1),
          e());
        return;
      }
      const I = 20;
      let Z = 0,
        ne = 0;
      for (let fe = 0; fe < Q.length; fe += I) {
        const ke = Q.slice(fe, fe + I),
          { error: Pe } = await Ve.from("events").insert(ke);
        Pe
          ? (console.error("Batch insert error:", Pe), (ne += ke.length))
          : (Z += ke.length);
      }
      (ne > 0
        ? Le.warning(
            `Added ${Z} events, but ${ne} failed due to conflicts or errors.`
          )
        : Le.success(
            `Successfully added ${Z} events for ${qt(new Date(o, c - 1), "MMMM yyyy")}`
          ),
        x(!1),
        s(),
        e());
    }, [o, c, f, v, _, s, e]);
  return r
    ? y.jsx("div", {
        className:
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50",
        children: y.jsxs("div", {
          className: "bg-white rounded-xl shadow-2xl max-w-md w-full",
          children: [
            y.jsxs("div", {
              className:
                "flex items-center justify-between p-6 border-b border-gray-200",
              children: [
                y.jsx("h2", {
                  className: "text-xl font-semibold text-gray-900",
                  children: "Generate Monthly Events",
                }),
                y.jsx("button", {
                  onClick: e,
                  className:
                    "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                  "aria-label": "Close",
                  children: y.jsx("span", {
                    className: "text-gray-500 text-xl",
                    children: "×",
                  }),
                }),
              ],
            }),
            y.jsxs("div", {
              className: "p-6 space-y-4",
              children: [
                y.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    y.jsxs("div", {
                      children: [
                        y.jsx("label", {
                          htmlFor: "year",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Year",
                        }),
                        y.jsx("input", {
                          id: "year",
                          type: "number",
                          min: 2e3,
                          max: 2100,
                          value: o,
                          onChange: (k) =>
                            l(
                              Number.parseInt(k.target.value) ||
                                new Date().getFullYear()
                            ),
                          className:
                            "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                        }),
                      ],
                    }),
                    y.jsxs("div", {
                      children: [
                        y.jsx("label", {
                          htmlFor: "month",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Month",
                        }),
                        y.jsx("select", {
                          id: "month",
                          value: c,
                          onChange: (k) => h(Number.parseInt(k.target.value)),
                          className:
                            "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                          children: Array.from(
                            { length: 12 },
                            (k, P) => P + 1
                          ).map((k) =>
                            y.jsx(
                              "option",
                              {
                                value: k,
                                children: new Date(
                                  2e3,
                                  k - 1,
                                  1
                                ).toLocaleString("default", { month: "long" }),
                              },
                              k
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      htmlFor: "midweek",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Midweek Day (Monday–Friday)",
                    }),
                    y.jsxs("select", {
                      id: "midweek",
                      value: f,
                      onChange: (k) => m(Number.parseInt(k.target.value)),
                      className:
                        "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                      children: [
                        y.jsx("option", { value: 1, children: "Monday" }),
                        y.jsx("option", { value: 2, children: "Tuesday" }),
                        y.jsx("option", { value: 3, children: "Wednesday" }),
                        y.jsx("option", { value: 4, children: "Thursday" }),
                        y.jsx("option", { value: 5, children: "Friday" }),
                      ],
                    }),
                  ],
                }),
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      htmlFor: "weekend",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "Weekend Day (Saturday or Sunday)",
                    }),
                    y.jsxs("select", {
                      id: "weekend",
                      value: v,
                      onChange: (k) => g(Number.parseInt(k.target.value)),
                      className:
                        "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                      children: [
                        y.jsx("option", { value: 0, children: "Sunday" }),
                        y.jsx("option", { value: 6, children: "Saturday" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("div", {
              className:
                "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
              children: [
                y.jsx("button", {
                  onClick: e,
                  className:
                    "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                  children: "Cancel",
                }),
                y.jsx("button", {
                  onClick: j,
                  disabled: b,
                  className:
                    "px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: b
                    ? y.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          y.jsx("div", {
                            className:
                              "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                          }),
                          "Generating...",
                        ],
                      })
                    : "Generate Events",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function wk() {
  const [r, e] = C.useState([]),
    [s, i] = C.useState([]),
    [o, l] = C.useState(!0),
    [c, h] = C.useState(!1),
    [f, m] = C.useState(""),
    [v, g] = C.useState(""),
    [b, x] = C.useState(!1),
    _ = C.useCallback(async () => {
      var P;
      try {
        l(!0);
        const [T, O] = await Promise.all([
          Ve.from("events")
            .select("*, event_types(*)")
            .order("event_date", { ascending: !1 })
            .limit(100),
          Ve.from("event_types").select("*"),
        ]);
        (e(T.data || []),
          i(O.data || []),
          (P = O.data) != null && P.length && g(O.data[0].id));
      } catch (T) {
        (console.error("Error fetching data:", T),
          Le.error("Failed to load calendar data"));
      } finally {
        l(!1);
      }
    }, []);
  C.useEffect(() => {
    _();
  }, [_]);
  const j = C.useCallback(async () => {
      if (!f || !v) {
        Le.error("Please fill in all fields");
        return;
      }
      try {
        const P = new Date(f),
          { error: T } = await Ve.from("events").insert({
            event_date: f,
            event_type_id: v,
            month: P.getMonth() + 1,
            year: P.getFullYear(),
          });
        if (T) {
          if (T.code === "23505")
            Le.error("An event already exists for this date");
          else throw T;
          return;
        }
        (Le.success("Meeting added successfully!"), h(!1), m(""), _());
      } catch (P) {
        (console.error("Error adding event:", P),
          Le.error("Failed to add event"));
      }
    }, [f, v, _]),
    k = C.useCallback(
      async (P) => {
        if (
          confirm(
            `Are you sure you want to delete the event on ${qt(Ss(P.event_date), "MMMM d, yyyy")}? All assignments will be removed.`
          )
        )
          try {
            const { error: T } = await Ve.from("events")
              .delete()
              .eq("id", P.id);
            if (T) throw T;
            (Le.success("Meeting deleted successfully!"), _());
          } catch (T) {
            (console.error("Error deleting event:", T),
              Le.error("Failed to delete event"));
          }
      },
      [_]
    );
  return o
    ? y.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: y.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600",
        }),
      })
    : y.jsxs("div", {
        className: "max-w-5xl mx-auto space-y-6",
        children: [
          y.jsx("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
            children: y.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                y.jsxs("div", {
                  children: [
                    y.jsx("h1", {
                      className: "text-2xl font-bold text-gray-900",
                      children: "Meeting Calendar",
                    }),
                    y.jsx("p", {
                      className: "text-sm text-gray-500 mt-1",
                      children: "Manage meeting dates and event types",
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    y.jsxs("button", {
                      onClick: () => x(!0),
                      className:
                        "px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center",
                      children: [
                        y.jsx(R1, { className: "w-4 h-4 mr-2" }),
                        "Generate Monthly Events",
                      ],
                    }),
                    y.jsxs("button", {
                      onClick: () => h(!0),
                      className:
                        "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm inline-flex items-center",
                      children: [
                        y.jsx(Em, { className: "w-4 h-4 mr-2" }),
                        "Add Meeting",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          y.jsx("div", {
            className:
              "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
            children: y.jsx("div", {
              className: "overflow-x-auto",
              children: y.jsxs("table", {
                className: "w-full",
                children: [
                  y.jsx("thead", {
                    className: "bg-gray-50 border-b border-gray-200",
                    children: y.jsxs("tr", {
                      children: [
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Date",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Day",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Meeting Type",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Month/Year",
                        }),
                        y.jsx("th", {
                          className:
                            "px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  y.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children:
                      r.length === 0
                        ? y.jsx("tr", {
                            children: y.jsx("td", {
                              colSpan: 5,
                              className: "px-6 py-8 text-center text-gray-500",
                              children: "No events scheduled yet",
                            }),
                          })
                        : r.map((P) => {
                            var T, O;
                            return y.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: qt(
                                        Ss(P.event_date),
                                        "MMMM d, yyyy"
                                      ),
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                    children: qt(Ss(P.event_date), "EEEE"),
                                  }),
                                  y.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: y.jsx("span", {
                                      className: `inline-flex px-3 py-1 text-xs font-medium rounded-full border ${((T = P.event_types) == null ? void 0 : T.name) === "MIDWEEK" ? "bg-yellow-100 text-yellow-700 border-yellow-200" : "bg-green-100 text-green-700 border-green-200"}`,
                                      children:
                                        ((O = P.event_types) == null
                                          ? void 0
                                          : O.name) || "Unknown",
                                    }),
                                  }),
                                  y.jsxs("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                    children: [P.month, "/", P.year],
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                    children: y.jsx("button", {
                                      onClick: () => k(P),
                                      className:
                                        "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                      title: "Delete",
                                      "aria-label": "Delete event",
                                      children: y.jsx(Oc, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              P.id
                            );
                          }),
                  }),
                ],
              }),
            }),
          }),
          c &&
            y.jsx("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50",
              children: y.jsxs("div", {
                className: "bg-white rounded-xl shadow-2xl max-w-md w-full",
                children: [
                  y.jsxs("div", {
                    className:
                      "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                      y.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: "Add Meeting",
                      }),
                      y.jsx("button", {
                        onClick: () => h(!1),
                        className:
                          "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                        "aria-label": "Close",
                        children: y.jsx("span", {
                          className: "text-gray-500 text-xl",
                          children: "×",
                        }),
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "p-6 space-y-4",
                    children: [
                      y.jsxs("div", {
                        children: [
                          y.jsx("label", {
                            htmlFor: "eventDate",
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Meeting Date",
                          }),
                          y.jsx("input", {
                            id: "eventDate",
                            type: "date",
                            value: f,
                            onChange: (P) => m(P.target.value),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("label", {
                            htmlFor: "eventType",
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "Meeting Type",
                          }),
                          y.jsx("select", {
                            id: "eventType",
                            value: v,
                            onChange: (P) => g(P.target.value),
                            className:
                              "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                            children: s.map((P) =>
                              y.jsx(
                                "option",
                                { value: P.id, children: P.name },
                                P.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className:
                      "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
                    children: [
                      y.jsx("button", {
                        onClick: () => h(!1),
                        className:
                          "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                        children: "Cancel",
                      }),
                      y.jsx("button", {
                        onClick: j,
                        className:
                          "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",
                        children: "Add Meeting",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          y.jsx(vk, {
            isOpen: b,
            onClose: () => x(!1),
            onSuccess: _,
            eventTypes: s,
          }),
        ],
      });
}
function xk() {
  return y.jsxs("div", {
    className: "max-w-5xl mx-auto space-y-6",
    children: [
      y.jsx("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
        children: y.jsxs("div", {
          children: [
            y.jsx("h1", {
              className: "text-2xl font-bold text-gray-900",
              children: "Settings",
            }),
            y.jsx("p", {
              className: "text-sm text-gray-500 mt-1",
              children: "Configure system preferences and automation rules",
            }),
          ],
        }),
      }),
      y.jsxs("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
        children: [
          y.jsxs("div", {
            className: "flex items-center space-x-3 mb-6",
            children: [
              y.jsx("div", {
                className:
                  "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",
                children: y.jsx(lk, { className: "w-5 h-5 text-indigo-600" }),
              }),
              y.jsxs("div", {
                children: [
                  y.jsx("h2", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "Automated Distribution Rules",
                  }),
                  y.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Configure how tasks are automatically assigned",
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("div", {
            className: "space-y-4",
            children: [
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: "Smart Rotation",
                      }),
                      y.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "Automatically rotate assignments to balance workload",
                      }),
                    ],
                  }),
                  y.jsxs("label", {
                    className:
                      "relative inline-flex items-center cursor-pointer",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        defaultChecked: !0,
                      }),
                      y.jsx("div", {
                        className:
                          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: "Avoid Consecutive Assignments",
                      }),
                      y.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "Prevent assigning the same brother to consecutive events",
                      }),
                    ],
                  }),
                  y.jsxs("label", {
                    className:
                      "relative inline-flex items-center cursor-pointer",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        defaultChecked: !0,
                      }),
                      y.jsx("div", {
                        className:
                          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: "Balance Total Assignments",
                      }),
                      y.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "Ensure each brother gets similar number of assignments per month",
                      }),
                    ],
                  }),
                  y.jsxs("label", {
                    className:
                      "relative inline-flex items-center cursor-pointer",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        defaultChecked: !0,
                      }),
                      y.jsx("div", {
                        className:
                          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: "Only Assign Eligible Brothers",
                      }),
                      y.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "Only assign brothers who are eligible for specific tasks",
                      }),
                    ],
                  }),
                  y.jsxs("label", {
                    className:
                      "relative inline-flex items-center cursor-pointer",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        defaultChecked: !0,
                        disabled: !0,
                      }),
                      y.jsx("div", {
                        className:
                          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 opacity-50",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: "Prevent Duplicate Assignment Per Day",
                      }),
                      y.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "Never assign same brother to multiple tasks on the same day",
                      }),
                    ],
                  }),
                  y.jsxs("label", {
                    className:
                      "relative inline-flex items-center cursor-pointer",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        defaultChecked: !0,
                        disabled: !0,
                      }),
                      y.jsx("div", {
                        className:
                          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 opacity-50",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      y.jsxs("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
        children: [
          y.jsxs("div", {
            className: "flex items-center space-x-3 mb-6",
            children: [
              y.jsx("div", {
                className:
                  "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center",
                children: y.jsx(K1, { className: "w-5 h-5 text-emerald-600" }),
              }),
              y.jsxs("div", {
                children: [
                  y.jsx("h2", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "System Information",
                  }),
                  y.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Application details and status",
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("div", {
            className: "space-y-3",
            children: [
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                children: [
                  y.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: "Version",
                  }),
                  y.jsx("span", {
                    className: "text-sm font-medium text-gray-900",
                    children: "1.0.0",
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                children: [
                  y.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: "Database Status",
                  }),
                  y.jsx("span", {
                    className:
                      "inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full",
                    children: "Connected",
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                children: [
                  y.jsx("span", {
                    className: "text-sm text-gray-600",
                    children: "Last Backup",
                  }),
                  y.jsx("span", {
                    className: "text-sm font-medium text-gray-900",
                    children: "N/A",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      y.jsx("div", {
        className: "bg-blue-50 border border-blue-200 rounded-xl p-6",
        children: y.jsxs("div", {
          className: "flex items-start space-x-3",
          children: [
            y.jsx(T1, {
              className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5",
            }),
            y.jsxs("div", {
              children: [
                y.jsx("h3", {
                  className: "text-sm font-semibold text-blue-900 mb-2",
                  children: "Future Enhancements",
                }),
                y.jsxs("ul", {
                  className:
                    "text-sm text-blue-700 space-y-1 list-disc list-inside",
                  children: [
                    y.jsx("li", { children: "PDF export functionality" }),
                    y.jsx("li", {
                      children: "Email notifications for assignments",
                    }),
                    y.jsx("li", { children: "Mobile app integration" }),
                    y.jsx("li", {
                      children: "Advanced analytics and reporting",
                    }),
                    y.jsx("li", {
                      children: "Drag-and-drop calendar scheduling",
                    }),
                    y.jsx("li", { children: "Multi-congregation support" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const bk = [
  { name: "Dashboard", href: "/dashboard", icon: I1 },
  { name: "Brothers Management", href: "/brothers", icon: ik },
  { name: "Tasks Management", href: "/tasks", icon: pc },
  { name: "Monthly Calendar", href: "/calendar", icon: Sm },
  { name: "Settings", href: "/settings", icon: V1 },
];
function _k() {
  const r = Jn(),
    [e, s] = C.useState(!1),
    i = r.pathname === "/";
  return y.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      !i &&
        e &&
        y.jsx("div", {
          className: "fixed inset-0 bg-gray-900/50 z-40",
          onClick: () => s(!1),
        }),
      !i &&
        y.jsx("aside", {
          className: `fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${e ? "translate-x-0" : "-translate-x-full"}`,
          children: y.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              y.jsxs("div", {
                className:
                  "flex items-center justify-between h-16 px-6 border-b border-gray-200",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      y.jsx("div", {
                        className:
                          "w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center",
                        children: y.jsx(pc, {
                          className: "w-5 h-5 text-white",
                        }),
                      }),
                      y.jsx("h1", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "KH Tasks",
                      }),
                    ],
                  }),
                  y.jsx("button", {
                    onClick: () => s(!1),
                    className: "text-gray-500 hover:text-gray-700",
                    children: y.jsx(hi, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              y.jsx("nav", {
                className: "flex-1 px-4 py-6 space-y-1",
                children: bk.map((o) => {
                  const l = r.pathname.startsWith(o.href);
                  return y.jsxs(
                    Yo,
                    {
                      to: o.href,
                      onClick: () => s(!1),
                      className: `flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${l ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100"}`,
                      children: [
                        y.jsx(o.icon, { className: "w-5 h-5" }),
                        y.jsx("span", { children: o.name }),
                      ],
                    },
                    o.name
                  );
                }),
              }),
              y.jsx("div", {
                className: "px-6 py-4 border-t border-gray-200",
                children: y.jsx("p", {
                  className: "text-xs text-gray-500",
                  children: "KH Tasks System v1.0",
                }),
              }),
            ],
          }),
        }),
      y.jsxs("div", {
        children: [
          !i &&
            y.jsxs("header", {
              className:
                "sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-4",
              children: [
                y.jsx("button", {
                  onClick: () => s(!0),
                  className: "text-gray-500 hover:text-gray-700",
                  children: y.jsx(U1, { className: "w-6 h-6" }),
                }),
                y.jsxs("div", {
                  className: "ml-4 flex items-center space-x-2",
                  children: [
                    y.jsx("div", {
                      className:
                        "w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center",
                      children: y.jsx(pc, { className: "w-5 h-5 text-white" }),
                    }),
                    y.jsx("h1", {
                      className: "text-lg font-semibold text-gray-900",
                      children: "KH Tasks",
                    }),
                  ],
                }),
              ],
            }),
          y.jsx("main", {
            className: i ? "min-h-screen p-0" : "min-h-screen p-6 lg:p-8",
            children: y.jsx(o0, {}),
          }),
        ],
      }),
    ],
  });
}
const kk = O0([
  {
    path: "/",
    Component: _k,
    children: [
      { index: !0, Component: dk },
      { path: "dashboard", Component: pk },
      { path: "brothers", Component: gk },
      { path: "tasks", Component: yk },
      { path: "calendar", Component: wk },
      { path: "settings", Component: xk },
    ],
  },
]);
function Sk() {
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx(s0, { router: kk }),
      y.jsx(x1, { position: "top-right", richColors: !0 }),
    ],
  });
}
gy.createRoot(document.getElementById("root")).render(y.jsx(Sk, {}));
