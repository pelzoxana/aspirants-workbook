function dE(e, a) { for (var s = 0; s < a.length; s++) { const o = a[s]; if (typeof o != "string" && !Array.isArray(o)) { for (const l in o) if (l !== "default" && !(l in e)) { const u = Object.getOwnPropertyDescriptor(o, l); u && Object.defineProperty(e, l, u.get ? u : { enumerable: !0, get: () => o[l] }) } } } return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })) } (function () { const a = document.createElement("link").relList; if (a && a.supports && a.supports("modulepreload")) return; for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l); new MutationObserver(l => { for (const u of l) if (u.type === "childList") for (const f of u.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f) }).observe(document, { childList: !0, subtree: !0 }); function s(l) { const u = {}; return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u } function o(l) { if (l.ep) return; l.ep = !0; const u = s(l); fetch(l.href, u) } })(); function ux(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e } var Lf = { exports: {} }, yo = {}; var Iy; function hE() { if (Iy) return yo; Iy = 1; var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment"); function s(o, l, u) { var f = null; if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) { u = {}; for (var h in l) h !== "key" && (u[h] = l[h]) } else u = l; return l = u.ref, { $$typeof: e, type: o, key: f, ref: l !== void 0 ? l : null, props: u } } return yo.Fragment = a, yo.jsx = s, yo.jsxs = s, yo } var $y; function mE() { return $y || ($y = 1, Lf.exports = hE()), Lf.exports } var S = mE(), kf = { exports: {} }, yt = {}; var Jy; function pE() { if (Jy) return yt; Jy = 1; var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), b = Symbol.iterator; function w(O) { return O === null || typeof O != "object" ? null : (O = b && O[b] || O["@@iterator"], typeof O == "function" ? O : null) } var T = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, C = Object.assign, A = {}; function R(O, X, $) { this.props = O, this.context = X, this.refs = A, this.updater = $ || T } R.prototype.isReactComponent = {}, R.prototype.setState = function (O, X) { if (typeof O != "object" && typeof O != "function" && O != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, O, X, "setState") }, R.prototype.forceUpdate = function (O) { this.updater.enqueueForceUpdate(this, O, "forceUpdate") }; function M() { } M.prototype = R.prototype; function D(O, X, $) { this.props = O, this.context = X, this.refs = A, this.updater = $ || T } var _ = D.prototype = new M; _.constructor = D, C(_, R.prototype), _.isPureReactComponent = !0; var q = Array.isArray; function K() { } var U = { H: null, A: null, T: null, S: null }, H = Object.prototype.hasOwnProperty; function J(O, X, $) { var tt = $.ref; return { $$typeof: e, type: O, key: X, ref: tt !== void 0 ? tt : null, props: $ } } function W(O, X) { return J(O.type, X, O.props) } function et(O) { return typeof O == "object" && O !== null && O.$$typeof === e } function at(O) { var X = { "=": "=0", ":": "=2" }; return "$" + O.replace(/[=:]/g, function ($) { return X[$] }) } var mt = /\/+/g; function ut(O, X) { return typeof O == "object" && O !== null && O.key != null ? at("" + O.key) : X.toString(36) } function lt(O) { switch (O.status) { case "fulfilled": return O.value; case "rejected": throw O.reason; default: switch (typeof O.status == "string" ? O.then(K, K) : (O.status = "pending", O.then(function (X) { O.status === "pending" && (O.status = "fulfilled", O.value = X) }, function (X) { O.status === "pending" && (O.status = "rejected", O.reason = X) })), O.status) { case "fulfilled": return O.value; case "rejected": throw O.reason } }throw O } function z(O, X, $, tt, dt) { var gt = typeof O; (gt === "undefined" || gt === "boolean") && (O = null); var I = !1; if (O === null) I = !0; else switch (gt) { case "bigint": case "string": case "number": I = !0; break; case "object": switch (O.$$typeof) { case e: case a: I = !0; break; case g: return I = O._init, z(I(O._payload), X, $, tt, dt) } }if (I) return dt = dt(O), I = tt === "" ? "." + ut(O, 0) : tt, q(dt) ? ($ = "", I != null && ($ = I.replace(mt, "$&/") + "/"), z(dt, X, $, "", function (At) { return At })) : dt != null && (et(dt) && (dt = W(dt, $ + (dt.key == null || O && O.key === dt.key ? "" : ("" + dt.key).replace(mt, "$&/") + "/") + I)), X.push(dt)), 1; I = 0; var bt = tt === "" ? "." : tt + ":"; if (q(O)) for (var vt = 0; vt < O.length; vt++)tt = O[vt], gt = bt + ut(tt, vt), I += z(tt, X, $, gt, dt); else if (vt = w(O), typeof vt == "function") for (O = vt.call(O), vt = 0; !(tt = O.next()).done;)tt = tt.value, gt = bt + ut(tt, vt++), I += z(tt, X, $, gt, dt); else if (gt === "object") { if (typeof O.then == "function") return z(lt(O), X, $, tt, dt); throw X = String(O), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.") } return I } function Q(O, X, $) { if (O == null) return O; var tt = [], dt = 0; return z(O, tt, "", "", function (gt) { return X.call($, gt, dt++) }), tt } function L(O) { if (O._status === -1) { var X = O._result; X = X(), X.then(function ($) { (O._status === 0 || O._status === -1) && (O._status = 1, O._result = $) }, function ($) { (O._status === 0 || O._status === -1) && (O._status = 2, O._result = $) }), O._status === -1 && (O._status = 0, O._result = X) } if (O._status === 1) return O._result.default; throw O._result } var nt = typeof reportError == "function" ? reportError : function (O) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var X = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O), error: O }); if (!window.dispatchEvent(X)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", O); return } console.error(O) }, ht = { map: Q, forEach: function (O, X, $) { Q(O, function () { X.apply(this, arguments) }, $) }, count: function (O) { var X = 0; return Q(O, function () { X++ }), X }, toArray: function (O) { return Q(O, function (X) { return X }) || [] }, only: function (O) { if (!et(O)) throw Error("React.Children.only expected to receive a single React element child."); return O } }; return yt.Activity = y, yt.Children = ht, yt.Component = R, yt.Fragment = s, yt.Profiler = l, yt.PureComponent = D, yt.StrictMode = o, yt.Suspense = m, yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, yt.__COMPILER_RUNTIME = { __proto__: null, c: function (O) { return U.H.useMemoCache(O) } }, yt.cache = function (O) { return function () { return O.apply(null, arguments) } }, yt.cacheSignal = function () { return null }, yt.cloneElement = function (O, X, $) { if (O == null) throw Error("The argument must be a React element, but you passed " + O + "."); var tt = C({}, O.props), dt = O.key; if (X != null) for (gt in X.key !== void 0 && (dt = "" + X.key), X) !H.call(X, gt) || gt === "key" || gt === "__self" || gt === "__source" || gt === "ref" && X.ref === void 0 || (tt[gt] = X[gt]); var gt = arguments.length - 2; if (gt === 1) tt.children = $; else if (1 < gt) { for (var I = Array(gt), bt = 0; bt < gt; bt++)I[bt] = arguments[bt + 2]; tt.children = I } return J(O.type, dt, tt) }, yt.createContext = function (O) { return O = { $$typeof: f, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null }, O.Provider = O, O.Consumer = { $$typeof: u, _context: O }, O }, yt.createElement = function (O, X, $) { var tt, dt = {}, gt = null; if (X != null) for (tt in X.key !== void 0 && (gt = "" + X.key), X) H.call(X, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (dt[tt] = X[tt]); var I = arguments.length - 2; if (I === 1) dt.children = $; else if (1 < I) { for (var bt = Array(I), vt = 0; vt < I; vt++)bt[vt] = arguments[vt + 2]; dt.children = bt } if (O && O.defaultProps) for (tt in I = O.defaultProps, I) dt[tt] === void 0 && (dt[tt] = I[tt]); return J(O, gt, dt) }, yt.createRef = function () { return { current: null } }, yt.forwardRef = function (O) { return { $$typeof: h, render: O } }, yt.isValidElement = et, yt.lazy = function (O) { return { $$typeof: g, _payload: { _status: -1, _result: O }, _init: L } }, yt.memo = function (O, X) { return { $$typeof: p, type: O, compare: X === void 0 ? null : X } }, yt.startTransition = function (O) { var X = U.T, $ = {}; U.T = $; try { var tt = O(), dt = U.S; dt !== null && dt($, tt), typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(K, nt) } catch (gt) { nt(gt) } finally { X !== null && $.types !== null && (X.types = $.types), U.T = X } }, yt.unstable_useCacheRefresh = function () { return U.H.useCacheRefresh() }, yt.use = function (O) { return U.H.use(O) }, yt.useActionState = function (O, X, $) { return U.H.useActionState(O, X, $) }, yt.useCallback = function (O, X) { return U.H.useCallback(O, X) }, yt.useContext = function (O) { return U.H.useContext(O) }, yt.useDebugValue = function () { }, yt.useDeferredValue = function (O, X) { return U.H.useDeferredValue(O, X) }, yt.useEffect = function (O, X) { return U.H.useEffect(O, X) }, yt.useEffectEvent = function (O) { return U.H.useEffectEvent(O) }, yt.useId = function () { return U.H.useId() }, yt.useImperativeHandle = function (O, X, $) { return U.H.useImperativeHandle(O, X, $) }, yt.useInsertionEffect = function (O, X) { return U.H.useInsertionEffect(O, X) }, yt.useLayoutEffect = function (O, X) { return U.H.useLayoutEffect(O, X) }, yt.useMemo = function (O, X) { return U.H.useMemo(O, X) }, yt.useOptimistic = function (O, X) { return U.H.useOptimistic(O, X) }, yt.useReducer = function (O, X, $) { return U.H.useReducer(O, X, $) }, yt.useRef = function (O) { return U.H.useRef(O) }, yt.useState = function (O) { return U.H.useState(O) }, yt.useSyncExternalStore = function (O, X, $) { return U.H.useSyncExternalStore(O, X, $) }, yt.useTransition = function () { return U.H.useTransition() }, yt.version = "19.2.3", yt } var tv; function eh() { return tv || (tv = 1, kf.exports = pE()), kf.exports } var x = eh(); const Ra = ux(x), fx = dE({ __proto__: null, default: Ra }, [x]); var Bf = { exports: {} }, vo = {}, Uf = { exports: {} }, Hf = {}; var ev; function gE() { return ev || (ev = 1, (function (e) { function a(z, Q) { var L = z.length; z.push(Q); t: for (; 0 < L;) { var nt = L - 1 >>> 1, ht = z[nt]; if (0 < l(ht, Q)) z[nt] = Q, z[L] = ht, L = nt; else break t } } function s(z) { return z.length === 0 ? null : z[0] } function o(z) { if (z.length === 0) return null; var Q = z[0], L = z.pop(); if (L !== Q) { z[0] = L; t: for (var nt = 0, ht = z.length, O = ht >>> 1; nt < O;) { var X = 2 * (nt + 1) - 1, $ = z[X], tt = X + 1, dt = z[tt]; if (0 > l($, L)) tt < ht && 0 > l(dt, $) ? (z[nt] = dt, z[tt] = L, nt = tt) : (z[nt] = $, z[X] = L, nt = X); else if (tt < ht && 0 > l(dt, L)) z[nt] = dt, z[tt] = L, nt = tt; else break t } } return Q } function l(z, Q) { var L = z.sortIndex - Q.sortIndex; return L !== 0 ? L : z.id - Q.id } if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var u = performance; e.unstable_now = function () { return u.now() } } else { var f = Date, h = f.now(); e.unstable_now = function () { return f.now() - h } } var m = [], p = [], g = 1, y = null, b = 3, w = !1, T = !1, C = !1, A = !1, R = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null; function _(z) { for (var Q = s(p); Q !== null;) { if (Q.callback === null) o(p); else if (Q.startTime <= z) o(p), Q.sortIndex = Q.expirationTime, a(m, Q); else break; Q = s(p) } } function q(z) { if (C = !1, _(z), !T) if (s(m) !== null) T = !0, K || (K = !0, at()); else { var Q = s(p); Q !== null && lt(q, Q.startTime - z) } } var K = !1, U = -1, H = 5, J = -1; function W() { return A ? !0 : !(e.unstable_now() - J < H) } function et() { if (A = !1, K) { var z = e.unstable_now(); J = z; var Q = !0; try { t: { T = !1, C && (C = !1, M(U), U = -1), w = !0; var L = b; try { e: { for (_(z), y = s(m); y !== null && !(y.expirationTime > z && W());) { var nt = y.callback; if (typeof nt == "function") { y.callback = null, b = y.priorityLevel; var ht = nt(y.expirationTime <= z); if (z = e.unstable_now(), typeof ht == "function") { y.callback = ht, _(z), Q = !0; break e } y === s(m) && o(m), _(z) } else o(m); y = s(m) } if (y !== null) Q = !0; else { var O = s(p); O !== null && lt(q, O.startTime - z), Q = !1 } } break t } finally { y = null, b = L, w = !1 } Q = void 0 } } finally { Q ? at() : K = !1 } } } var at; if (typeof D == "function") at = function () { D(et) }; else if (typeof MessageChannel < "u") { var mt = new MessageChannel, ut = mt.port2; mt.port1.onmessage = et, at = function () { ut.postMessage(null) } } else at = function () { R(et, 0) }; function lt(z, Q) { U = R(function () { z(e.unstable_now()) }, Q) } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (z) { z.callback = null }, e.unstable_forceFrameRate = function (z) { 0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < z ? Math.floor(1e3 / z) : 5 }, e.unstable_getCurrentPriorityLevel = function () { return b }, e.unstable_next = function (z) { switch (b) { case 1: case 2: case 3: var Q = 3; break; default: Q = b }var L = b; b = Q; try { return z() } finally { b = L } }, e.unstable_requestPaint = function () { A = !0 }, e.unstable_runWithPriority = function (z, Q) { switch (z) { case 1: case 2: case 3: case 4: case 5: break; default: z = 3 }var L = b; b = z; try { return Q() } finally { b = L } }, e.unstable_scheduleCallback = function (z, Q, L) { var nt = e.unstable_now(); switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? nt + L : nt) : L = nt, z) { case 1: var ht = -1; break; case 2: ht = 250; break; case 5: ht = 1073741823; break; case 4: ht = 1e4; break; default: ht = 5e3 }return ht = L + ht, z = { id: g++, callback: Q, priorityLevel: z, startTime: L, expirationTime: ht, sortIndex: -1 }, L > nt ? (z.sortIndex = L, a(p, z), s(m) === null && z === s(p) && (C ? (M(U), U = -1) : C = !0, lt(q, L - nt))) : (z.sortIndex = ht, a(m, z), T || w || (T = !0, K || (K = !0, at()))), z }, e.unstable_shouldYield = W, e.unstable_wrapCallback = function (z) { var Q = b; return function () { var L = b; b = Q; try { return z.apply(this, arguments) } finally { b = L } } } })(Hf)), Hf } var nv; function yE() { return nv || (nv = 1, Uf.exports = gE()), Uf.exports } var Pf = { exports: {} }, xe = {}; var av; function vE() { if (av) return xe; av = 1; var e = eh(); function a(m) { var p = "https://react.dev/errors/" + m; if (1 < arguments.length) { p += "?args[]=" + encodeURIComponent(arguments[1]); for (var g = 2; g < arguments.length; g++)p += "&args[]=" + encodeURIComponent(arguments[g]) } return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function s() { } var o = { d: { f: s, r: function () { throw Error(a(522)) }, D: s, C: s, L: s, m: s, X: s, S: s, M: s }, p: 0, findDOMNode: null }, l = Symbol.for("react.portal"); function u(m, p, g) { var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: l, key: y == null ? null : "" + y, children: m, containerInfo: p, implementation: g } } var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function h(m, p) { if (m === "font") return ""; if (typeof p == "string") return p === "use-credentials" ? p : "" } return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, xe.createPortal = function (m, p) { var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(a(299)); return u(m, p, null, g) }, xe.flushSync = function (m) { var p = f.T, g = o.p; try { if (f.T = null, o.p = 2, m) return m() } finally { f.T = p, o.p = g, o.d.f() } }, xe.preconnect = function (m, p) { typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(m, p)) }, xe.prefetchDNS = function (m) { typeof m == "string" && o.d.D(m) }, xe.preinit = function (m, p) { if (typeof m == "string" && p && typeof p.as == "string") { var g = p.as, y = h(g, p.crossOrigin), b = typeof p.integrity == "string" ? p.integrity : void 0, w = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0; g === "style" ? o.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: y, integrity: b, fetchPriority: w }) : g === "script" && o.d.X(m, { crossOrigin: y, integrity: b, fetchPriority: w, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } }, xe.preinitModule = function (m, p) { if (typeof m == "string") if (typeof p == "object" && p !== null) { if (p.as == null || p.as === "script") { var g = h(p.as, p.crossOrigin); o.d.M(m, { crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } } else p == null && o.d.M(m) }, xe.preload = function (m, p) { if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") { var g = p.as, y = h(g, p.crossOrigin); o.d.L(m, g, { crossOrigin: y, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 }) } }, xe.preloadModule = function (m, p) { if (typeof m == "string") if (p) { var g = h(p.as, p.crossOrigin); o.d.m(m, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0 }) } else o.d.m(m) }, xe.requestFormReset = function (m) { o.d.r(m) }, xe.unstable_batchedUpdates = function (m, p) { return m(p) }, xe.useFormState = function (m, p, g) { return f.H.useFormState(m, p, g) }, xe.useFormStatus = function () { return f.H.useHostTransitionStatus() }, xe.version = "19.2.3", xe } var iv; function dx() { if (iv) return Pf.exports; iv = 1; function e() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (a) { console.error(a) } } return e(), Pf.exports = vE(), Pf.exports } var sv; function xE() {
  if (sv) return vo; sv = 1; var e = yE(), a = eh(), s = dx(); function o(t) { var n = "https://react.dev/errors/" + t; if (1 < arguments.length) { n += "?args[]=" + encodeURIComponent(arguments[1]); for (var i = 2; i < arguments.length; i++)n += "&args[]=" + encodeURIComponent(arguments[i]) } return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function l(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) } function u(t) { var n = t, i = t; if (t.alternate) for (; n.return;)n = n.return; else { t = n; do n = t, (n.flags & 4098) !== 0 && (i = n.return), t = n.return; while (t) } return n.tag === 3 ? i : null } function f(t) { if (t.tag === 13) { var n = t.memoizedState; if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated } return null } function h(t) { if (t.tag === 31) { var n = t.memoizedState; if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated } return null } function m(t) { if (u(t) !== t) throw Error(o(188)) } function p(t) { var n = t.alternate; if (!n) { if (n = u(t), n === null) throw Error(o(188)); return n !== t ? null : t } for (var i = t, r = n; ;) { var c = i.return; if (c === null) break; var d = c.alternate; if (d === null) { if (r = c.return, r !== null) { i = r; continue } break } if (c.child === d.child) { for (d = c.child; d;) { if (d === i) return m(c), t; if (d === r) return m(c), n; d = d.sibling } throw Error(o(188)) } if (i.return !== r.return) i = c, r = d; else { for (var v = !1, E = c.child; E;) { if (E === i) { v = !0, i = c, r = d; break } if (E === r) { v = !0, r = c, i = d; break } E = E.sibling } if (!v) { for (E = d.child; E;) { if (E === i) { v = !0, i = d, r = c; break } if (E === r) { v = !0, r = d, i = c; break } E = E.sibling } if (!v) throw Error(o(189)) } } if (i.alternate !== r) throw Error(o(190)) } if (i.tag !== 3) throw Error(o(188)); return i.stateNode.current === i ? t : n } function g(t) { var n = t.tag; if (n === 5 || n === 26 || n === 27 || n === 6) return t; for (t = t.child; t !== null;) { if (n = g(t), n !== null) return n; t = t.sibling } return null } var y = Object.assign, b = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), D = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), W = Symbol.for("react.memo_cache_sentinel"), et = Symbol.iterator; function at(t) { return t === null || typeof t != "object" ? null : (t = et && t[et] || t["@@iterator"], typeof t == "function" ? t : null) } var mt = Symbol.for("react.client.reference"); function ut(t) { if (t == null) return null; if (typeof t == "function") return t.$$typeof === mt ? null : t.displayName || t.name || null; if (typeof t == "string") return t; switch (t) { case C: return "Fragment"; case R: return "Profiler"; case A: return "StrictMode"; case q: return "Suspense"; case K: return "SuspenseList"; case J: return "Activity" }if (typeof t == "object") switch (t.$$typeof) { case T: return "Portal"; case D: return t.displayName || "Context"; case M: return (t._context.displayName || "Context") + ".Consumer"; case _: var n = t.render; return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t; case U: return n = t.displayName || null, n !== null ? n : ut(t.type) || "Memo"; case H: n = t._payload, t = t._init; try { return ut(t(n)) } catch { } }return null } var lt = Array.isArray, z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = { pending: !1, data: null, method: null, action: null }, nt = [], ht = -1; function O(t) { return { current: t } } function X(t) { 0 > ht || (t.current = nt[ht], nt[ht] = null, ht--) } function $(t, n) { ht++, nt[ht] = t.current, t.current = n } var tt = O(null), dt = O(null), gt = O(null), I = O(null); function bt(t, n) { switch ($(gt, n), $(dt, t), $(tt, null), n.nodeType) { case 9: case 11: t = (t = n.documentElement) && (t = t.namespaceURI) ? by(t) : 0; break; default: if (t = n.tagName, n = n.namespaceURI) n = by(n), t = Sy(n, t); else switch (t) { case "svg": t = 1; break; case "math": t = 2; break; default: t = 0 } }X(tt), $(tt, t) } function vt() { X(tt), X(dt), X(gt) } function At(t) { t.memoizedState !== null && $(I, t); var n = tt.current, i = Sy(n, t.type); n !== i && ($(dt, t), $(tt, i)) } function Nt(t) { dt.current === t && (X(tt), X(dt)), I.current === t && (X(I), ho._currentValue = L) } var _t, be; function Se(t) {
    if (_t === void 0) try { throw Error() } catch (i) {
      var n = i.stack.trim().match(/\n( *(at )?)/); _t = n && n[1] || "", be = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : ""
    } return `
`+ _t + t + be
  } var Ba = !1; function Ua(t, n) {
    if (!t || Ba) return ""; Ba = !0; var i = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
      var r = { DetermineComponentFrameRoot: function () { try { if (n) { var Z = function () { throw Error() }; if (Object.defineProperty(Z.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(Z, []) } catch (G) { var P = G } Reflect.construct(t, [], Z) } else { try { Z.call() } catch (G) { P = G } t.call(Z.prototype) } } else { try { throw Error() } catch (G) { P = G } (Z = t()) && typeof Z.catch == "function" && Z.catch(function () { }) } } catch (G) { if (G && P && typeof G.stack == "string") return [G.stack, P.stack] } return [null, null] } }; r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var c = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name"); c && c.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var d = r.DetermineComponentFrameRoot(), v = d[0], E = d[1]; if (v && E) {
        var N = v.split(`
`), B = E.split(`
`); for (c = r = 0; r < N.length && !N[r].includes("DetermineComponentFrameRoot");)r++; for (; c < B.length && !B[c].includes("DetermineComponentFrameRoot");)c++; if (r === N.length || c === B.length) for (r = N.length - 1, c = B.length - 1; 1 <= r && 0 <= c && N[r] !== B[c];)c--; for (; 1 <= r && 0 <= c; r--, c--)if (N[r] !== B[c]) {
          if (r !== 1 || c !== 1) do if (r--, c--, 0 > c || N[r] !== B[c]) {
            var Y = `
`+ N[r].replace(" at new ", " at "); return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y
          } while (1 <= r && 0 <= c); break
        }
      }
    } finally { Ba = !1, Error.prepareStackTrace = i } return (i = t ? t.displayName || t.name : "") ? Se(i) : ""
  } function ws(t, n) { switch (t.tag) { case 26: case 27: case 5: return Se(t.type); case 16: return Se("Lazy"); case 13: return t.child !== n && n !== null ? Se("Suspense Fallback") : Se("Suspense"); case 19: return Se("SuspenseList"); case 0: case 15: return Ua(t.type, !1); case 11: return Ua(t.type.render, !1); case 1: return Ua(t.type, !0); case 31: return Se("Activity"); default: return "" } } function Ih(t) {
    try { var n = "", i = null; do n += ws(t, i), i = t, t = t.return; while (t); return n } catch (r) {
      return `
Error generating stack: `+ r.message + `
`+ r.stack
    }
  } var bc = Object.prototype.hasOwnProperty, Sc = e.unstable_scheduleCallback, Cc = e.unstable_cancelCallback, YS = e.unstable_shouldYield, XS = e.unstable_requestPaint, _e = e.unstable_now, FS = e.unstable_getCurrentPriorityLevel, $h = e.unstable_ImmediatePriority, Jh = e.unstable_UserBlockingPriority, Xo = e.unstable_NormalPriority, KS = e.unstable_LowPriority, tm = e.unstable_IdlePriority, ZS = e.log, QS = e.unstable_setDisableYieldValue, Es = null, ze = null; function ea(t) { if (typeof ZS == "function" && QS(t), ze && typeof ze.setStrictMode == "function") try { ze.setStrictMode(Es, t) } catch { } } var Ve = Math.clz32 ? Math.clz32 : $S, WS = Math.log, IS = Math.LN2; function $S(t) { return t >>>= 0, t === 0 ? 32 : 31 - (WS(t) / IS | 0) | 0 } var Fo = 256, Ko = 262144, Zo = 4194304; function Ha(t) { var n = t & 42; if (n !== 0) return n; switch (t & -t) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: return 64; case 128: return 128; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: return t & 261888; case 262144: case 524288: case 1048576: case 2097152: return t & 3932160; case 4194304: case 8388608: case 16777216: case 33554432: return t & 62914560; case 67108864: return 67108864; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 0; default: return t } } function Qo(t, n, i) { var r = t.pendingLanes; if (r === 0) return 0; var c = 0, d = t.suspendedLanes, v = t.pingedLanes; t = t.warmLanes; var E = r & 134217727; return E !== 0 ? (r = E & ~d, r !== 0 ? c = Ha(r) : (v &= E, v !== 0 ? c = Ha(v) : i || (i = E & ~t, i !== 0 && (c = Ha(i))))) : (E = r & ~d, E !== 0 ? c = Ha(E) : v !== 0 ? c = Ha(v) : i || (i = r & ~t, i !== 0 && (c = Ha(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & d) === 0 && (d = c & -c, i = n & -n, d >= i || d === 32 && (i & 4194048) !== 0) ? n : c } function As(t, n) { return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0 } function JS(t, n) { switch (t) { case 1: case 2: case 4: case 8: case 64: return n + 250; case 16: case 32: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return n + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: return -1; case 67108864: case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function em() { var t = Zo; return Zo <<= 1, (Zo & 62914560) === 0 && (Zo = 4194304), t } function wc(t) { for (var n = [], i = 0; 31 > i; i++)n.push(t); return n } function Ts(t, n) { t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0) } function tC(t, n, i, r, c, d) { var v = t.pendingLanes; t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0; var E = t.entanglements, N = t.expirationTimes, B = t.hiddenUpdates; for (i = v & ~i; 0 < i;) { var Y = 31 - Ve(i), Z = 1 << Y; E[Y] = 0, N[Y] = -1; var P = B[Y]; if (P !== null) for (B[Y] = null, Y = 0; Y < P.length; Y++) { var G = P[Y]; G !== null && (G.lane &= -536870913) } i &= ~Z } r !== 0 && nm(t, r, 0), d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(v & ~n)) } function nm(t, n, i) { t.pendingLanes |= n, t.suspendedLanes &= ~n; var r = 31 - Ve(n); t.entangledLanes |= n, t.entanglements[r] = t.entanglements[r] | 1073741824 | i & 261930 } function am(t, n) { var i = t.entangledLanes |= n; for (t = t.entanglements; i;) { var r = 31 - Ve(i), c = 1 << r; c & n | t[r] & n && (t[r] |= n), i &= ~c } } function im(t, n) { var i = n & -n; return i = (i & 42) !== 0 ? 1 : Ec(i), (i & (t.suspendedLanes | n)) !== 0 ? 0 : i } function Ec(t) { switch (t) { case 2: t = 1; break; case 8: t = 4; break; case 32: t = 16; break; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: t = 128; break; case 268435456: t = 134217728; break; default: t = 0 }return t } function Ac(t) { return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 } function sm() { var t = Q.p; return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Yy(t.type)) } function om(t, n) { var i = Q.p; try { return Q.p = t, n() } finally { Q.p = i } } var na = Math.random().toString(36).slice(2), fe = "__reactFiber$" + na, Ae = "__reactProps$" + na, yi = "__reactContainer$" + na, Tc = "__reactEvents$" + na, eC = "__reactListeners$" + na, nC = "__reactHandles$" + na, rm = "__reactResources$" + na, Rs = "__reactMarker$" + na; function Rc(t) { delete t[fe], delete t[Ae], delete t[Tc], delete t[eC], delete t[nC] } function vi(t) { var n = t[fe]; if (n) return n; for (var i = t.parentNode; i;) { if (n = i[yi] || i[fe]) { if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (t = My(t); t !== null;) { if (i = t[fe]) return i; t = My(t) } return n } t = i, i = t.parentNode } return null } function xi(t) { if (t = t[fe] || t[yi]) { var n = t.tag; if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t } return null } function Ms(t) { var n = t.tag; if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode; throw Error(o(33)) } function bi(t) { var n = t[rm]; return n || (n = t[rm] = { hoistableStyles: new Map, hoistableScripts: new Map }), n } function ce(t) { t[Rs] = !0 } var lm = new Set, cm = {}; function Pa(t, n) { Si(t, n), Si(t + "Capture", n) } function Si(t, n) { for (cm[t] = n, t = 0; t < n.length; t++)lm.add(n[t]) } var aC = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), um = {}, fm = {}; function iC(t) { return bc.call(fm, t) ? !0 : bc.call(um, t) ? !1 : aC.test(t) ? fm[t] = !0 : (um[t] = !0, !1) } function Wo(t, n, i) { if (iC(n)) if (i === null) t.removeAttribute(n); else { switch (typeof i) { case "undefined": case "function": case "symbol": t.removeAttribute(n); return; case "boolean": var r = n.toLowerCase().slice(0, 5); if (r !== "data-" && r !== "aria-") { t.removeAttribute(n); return } }t.setAttribute(n, "" + i) } } function Io(t, n, i) { if (i === null) t.removeAttribute(n); else { switch (typeof i) { case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(n); return }t.setAttribute(n, "" + i) } } function Dn(t, n, i, r) { if (r === null) t.removeAttribute(i); else { switch (typeof r) { case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(i); return }t.setAttributeNS(n, i, "" + r) } } function Fe(t) { switch (typeof t) { case "bigint": case "boolean": case "number": case "string": case "undefined": return t; case "object": return t; default: return "" } } function dm(t) { var n = t.type; return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio") } function sC(t, n, i) { var r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n); if (!t.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") { var c = r.get, d = r.set; return Object.defineProperty(t, n, { configurable: !0, get: function () { return c.call(this) }, set: function (v) { i = "" + v, d.call(this, v) } }), Object.defineProperty(t, n, { enumerable: r.enumerable }), { getValue: function () { return i }, setValue: function (v) { i = "" + v }, stopTracking: function () { t._valueTracker = null, delete t[n] } } } } function Mc(t) { if (!t._valueTracker) { var n = dm(t) ? "checked" : "value"; t._valueTracker = sC(t, n, "" + t[n]) } } function hm(t) { if (!t) return !1; var n = t._valueTracker; if (!n) return !0; var i = n.getValue(), r = ""; return t && (r = dm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== i ? (n.setValue(t), !0) : !1 } function $o(t) { if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null; try { return t.activeElement || t.body } catch { return t.body } } var oC = /[\n"\\]/g; function Ke(t) { return t.replace(oC, function (n) { return "\\" + n.charCodeAt(0).toString(16) + " " }) } function Nc(t, n, i, r, c, d, v, E) { t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Fe(n)) : t.value !== "" + Fe(n) && (t.value = "" + Fe(n)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), n != null ? Dc(t, v, Fe(n)) : i != null ? Dc(t, v, Fe(i)) : r != null && t.removeAttribute("value"), c == null && d != null && (t.defaultChecked = !!d), c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? t.name = "" + Fe(E) : t.removeAttribute("name") } function mm(t, n, i, r, c, d, v, E) { if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), n != null || i != null) { if (!(d !== "submit" && d !== "reset" || n != null)) { Mc(t); return } i = i != null ? "" + Fe(i) : "", n = n != null ? "" + Fe(n) : i, E || n === t.value || (t.value = n), t.defaultValue = n } r = r ?? c, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = E ? t.checked : !!r, t.defaultChecked = !!r, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), Mc(t) } function Dc(t, n, i) { n === "number" && $o(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i) } function Ci(t, n, i, r) { if (t = t.options, n) { n = {}; for (var c = 0; c < i.length; c++)n["$" + i[c]] = !0; for (i = 0; i < t.length; i++)c = n.hasOwnProperty("$" + t[i].value), t[i].selected !== c && (t[i].selected = c), c && r && (t[i].defaultSelected = !0) } else { for (i = "" + Fe(i), n = null, c = 0; c < t.length; c++) { if (t[c].value === i) { t[c].selected = !0, r && (t[c].defaultSelected = !0); return } n !== null || t[c].disabled || (n = t[c]) } n !== null && (n.selected = !0) } } function pm(t, n, i) { if (n != null && (n = "" + Fe(n), n !== t.value && (t.value = n), i == null)) { t.defaultValue !== n && (t.defaultValue = n); return } t.defaultValue = i != null ? "" + Fe(i) : "" } function gm(t, n, i, r) { if (n == null) { if (r != null) { if (i != null) throw Error(o(92)); if (lt(r)) { if (1 < r.length) throw Error(o(93)); r = r[0] } i = r } i == null && (i = ""), n = i } i = Fe(n), t.defaultValue = i, r = t.textContent, r === i && r !== "" && r !== null && (t.value = r), Mc(t) } function wi(t, n) { if (n) { var i = t.firstChild; if (i && i === t.lastChild && i.nodeType === 3) { i.nodeValue = n; return } } t.textContent = n } var rC = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function ym(t, n, i) { var r = n.indexOf("--") === 0; i == null || typeof i == "boolean" || i === "" ? r ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : r ? t.setProperty(n, i) : typeof i != "number" || i === 0 || rC.has(n) ? n === "float" ? t.cssFloat = i : t[n] = ("" + i).trim() : t[n] = i + "px" } function vm(t, n, i) { if (n != null && typeof n != "object") throw Error(o(62)); if (t = t.style, i != null) { for (var r in i) !i.hasOwnProperty(r) || n != null && n.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = ""); for (var c in n) r = n[c], n.hasOwnProperty(c) && i[c] !== r && ym(t, c, r) } else for (var d in n) n.hasOwnProperty(d) && ym(t, d, n[d]) } function Oc(t) { if (t.indexOf("-") === -1) return !1; switch (t) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var lC = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), cC = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function Jo(t) { return cC.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t } function On() { } var jc = null; function _c(t) { return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t } var Ei = null, Ai = null; function xm(t) { var n = xi(t); if (n && (t = n.stateNode)) { var i = t[Ae] || null; t: switch (t = n.stateNode, n.type) { case "input": if (Nc(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), n = i.name, i.type === "radio" && n != null) { for (i = t; i.parentNode;)i = i.parentNode; for (i = i.querySelectorAll('input[name="' + Ke("" + n) + '"][type="radio"]'), n = 0; n < i.length; n++) { var r = i[n]; if (r !== t && r.form === t.form) { var c = r[Ae] || null; if (!c) throw Error(o(90)); Nc(r, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name) } } for (n = 0; n < i.length; n++)r = i[n], r.form === t.form && hm(r) } break t; case "textarea": pm(t, i.value, i.defaultValue); break t; case "select": n = i.value, n != null && Ci(t, !!i.multiple, n, !1) } } } var zc = !1; function bm(t, n, i) { if (zc) return t(n, i); zc = !0; try { var r = t(n); return r } finally { if (zc = !1, (Ei !== null || Ai !== null) && (Hr(), Ei && (n = Ei, t = Ai, Ai = Ei = null, xm(n), t))) for (n = 0; n < t.length; n++)xm(t[n]) } } function Ns(t, n) { var i = t.stateNode; if (i === null) return null; var r = i[Ae] || null; if (r === null) return null; i = r[n]; t: switch (n) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r; break t; default: t = !1 }if (t) return null; if (i && typeof i != "function") throw Error(o(231, n, typeof i)); return i } var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vc = !1; if (jn) try { var Ds = {}; Object.defineProperty(Ds, "passive", { get: function () { Vc = !0 } }), window.addEventListener("test", Ds, Ds), window.removeEventListener("test", Ds, Ds) } catch { Vc = !1 } var aa = null, Lc = null, tr = null; function Sm() { if (tr) return tr; var t, n = Lc, i = n.length, r, c = "value" in aa ? aa.value : aa.textContent, d = c.length; for (t = 0; t < i && n[t] === c[t]; t++); var v = i - t; for (r = 1; r <= v && n[i - r] === c[d - r]; r++); return tr = c.slice(t, 1 < r ? 1 - r : void 0) } function er(t) { var n = t.keyCode; return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0 } function nr() { return !0 } function Cm() { return !1 } function Te(t) { function n(i, r, c, d, v) { this._reactName = i, this._targetInst = c, this.type = r, this.nativeEvent = d, this.target = v, this.currentTarget = null; for (var E in t) t.hasOwnProperty(E) && (i = t[E], this[E] = i ? i(d) : d[E]); return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? nr : Cm, this.isPropagationStopped = Cm, this } return y(n.prototype, { preventDefault: function () { this.defaultPrevented = !0; var i = this.nativeEvent; i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = nr) }, stopPropagation: function () { var i = this.nativeEvent; i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = nr) }, persist: function () { }, isPersistent: nr }), n } var qa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) { return t.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, ar = Te(qa), Os = y({}, qa, { view: 0, detail: 0 }), uC = Te(Os), kc, Bc, js, ir = y({}, Os, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hc, button: 0, buttons: 0, relatedTarget: function (t) { return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget }, movementX: function (t) { return "movementX" in t ? t.movementX : (t !== js && (js && t.type === "mousemove" ? (kc = t.screenX - js.screenX, Bc = t.screenY - js.screenY) : Bc = kc = 0, js = t), kc) }, movementY: function (t) { return "movementY" in t ? t.movementY : Bc } }), wm = Te(ir), fC = y({}, ir, { dataTransfer: 0 }), dC = Te(fC), hC = y({}, Os, { relatedTarget: 0 }), Uc = Te(hC), mC = y({}, qa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pC = Te(mC), gC = y({}, qa, { clipboardData: function (t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData } }), yC = Te(gC), vC = y({}, qa, { data: 0 }), Em = Te(vC), xC = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bC = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, SC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function CC(t) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(t) : (t = SC[t]) ? !!n[t] : !1 } function Hc() { return CC } var wC = y({}, Os, { key: function (t) { if (t.key) { var n = xC[t.key] || t.key; if (n !== "Unidentified") return n } return t.type === "keypress" ? (t = er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bC[t.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hc, charCode: function (t) { return t.type === "keypress" ? er(t) : 0 }, keyCode: function (t) { return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 }, which: function (t) { return t.type === "keypress" ? er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 } }), EC = Te(wC), AC = y({}, ir, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Am = Te(AC), TC = y({}, Os, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hc }), RC = Te(TC), MC = y({}, qa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), NC = Te(MC), DC = y({}, ir, { deltaX: function (t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0 }, deltaY: function (t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), OC = Te(DC), jC = y({}, qa, { newState: 0, oldState: 0 }), _C = Te(jC), zC = [9, 13, 27, 32], Pc = jn && "CompositionEvent" in window, _s = null; jn && "documentMode" in document && (_s = document.documentMode); var VC = jn && "TextEvent" in window && !_s, Tm = jn && (!Pc || _s && 8 < _s && 11 >= _s), Rm = " ", Mm = !1; function Nm(t, n) { switch (t) { case "keyup": return zC.indexOf(n.keyCode) !== -1; case "keydown": return n.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function Dm(t) { return t = t.detail, typeof t == "object" && "data" in t ? t.data : null } var Ti = !1; function LC(t, n) { switch (t) { case "compositionend": return Dm(n); case "keypress": return n.which !== 32 ? null : (Mm = !0, Rm); case "textInput": return t = n.data, t === Rm && Mm ? null : t; default: return null } } function kC(t, n) { if (Ti) return t === "compositionend" || !Pc && Nm(t, n) ? (t = Sm(), tr = Lc = aa = null, Ti = !1, t) : null; switch (t) { case "paste": return null; case "keypress": if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) { if (n.char && 1 < n.char.length) return n.char; if (n.which) return String.fromCharCode(n.which) } return null; case "compositionend": return Tm && n.locale !== "ko" ? null : n.data; default: return null } } var BC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Om(t) { var n = t && t.nodeName && t.nodeName.toLowerCase(); return n === "input" ? !!BC[t.type] : n === "textarea" } function jm(t, n, i, r) { Ei ? Ai ? Ai.push(r) : Ai = [r] : Ei = r, n = Kr(n, "onChange"), 0 < n.length && (i = new ar("onChange", "change", null, i, r), t.push({ event: i, listeners: n })) } var zs = null, Vs = null; function UC(t) { my(t, 0) } function sr(t) { var n = Ms(t); if (hm(n)) return t } function _m(t, n) { if (t === "change") return n } var zm = !1; if (jn) { var qc; if (jn) { var Gc = "oninput" in document; if (!Gc) { var Vm = document.createElement("div"); Vm.setAttribute("oninput", "return;"), Gc = typeof Vm.oninput == "function" } qc = Gc } else qc = !1; zm = qc && (!document.documentMode || 9 < document.documentMode) } function Lm() { zs && (zs.detachEvent("onpropertychange", km), Vs = zs = null) } function km(t) { if (t.propertyName === "value" && sr(Vs)) { var n = []; jm(n, Vs, t, _c(t)), bm(UC, n) } } function HC(t, n, i) { t === "focusin" ? (Lm(), zs = n, Vs = i, zs.attachEvent("onpropertychange", km)) : t === "focusout" && Lm() } function PC(t) { if (t === "selectionchange" || t === "keyup" || t === "keydown") return sr(Vs) } function qC(t, n) { if (t === "click") return sr(n) } function GC(t, n) { if (t === "input" || t === "change") return sr(n) } function YC(t, n) { return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n } var Le = typeof Object.is == "function" ? Object.is : YC; function Ls(t, n) { if (Le(t, n)) return !0; if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1; var i = Object.keys(t), r = Object.keys(n); if (i.length !== r.length) return !1; for (r = 0; r < i.length; r++) { var c = i[r]; if (!bc.call(n, c) || !Le(t[c], n[c])) return !1 } return !0 } function Bm(t) { for (; t && t.firstChild;)t = t.firstChild; return t } function Um(t, n) { var i = Bm(t); t = 0; for (var r; i;) { if (i.nodeType === 3) { if (r = t + i.textContent.length, t <= n && r >= n) return { node: i, offset: n - t }; t = r } t: { for (; i;) { if (i.nextSibling) { i = i.nextSibling; break t } i = i.parentNode } i = void 0 } i = Bm(i) } } function Hm(t, n) { return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Hm(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1 } function Pm(t) { t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window; for (var n = $o(t.document); n instanceof t.HTMLIFrameElement;) { try { var i = typeof n.contentWindow.location.href == "string" } catch { i = !1 } if (i) t = n.contentWindow; else break; n = $o(t.document) } return n } function Yc(t) { var n = t && t.nodeName && t.nodeName.toLowerCase(); return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true") } var XC = jn && "documentMode" in document && 11 >= document.documentMode, Ri = null, Xc = null, ks = null, Fc = !1; function qm(t, n, i) { var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument; Fc || Ri == null || Ri !== $o(r) || (r = Ri, "selectionStart" in r && Yc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ks && Ls(ks, r) || (ks = r, r = Kr(Xc, "onSelect"), 0 < r.length && (n = new ar("onSelect", "select", null, n, i), t.push({ event: n, listeners: r }), n.target = Ri))) } function Ga(t, n) { var i = {}; return i[t.toLowerCase()] = n.toLowerCase(), i["Webkit" + t] = "webkit" + n, i["Moz" + t] = "moz" + n, i } var Mi = { animationend: Ga("Animation", "AnimationEnd"), animationiteration: Ga("Animation", "AnimationIteration"), animationstart: Ga("Animation", "AnimationStart"), transitionrun: Ga("Transition", "TransitionRun"), transitionstart: Ga("Transition", "TransitionStart"), transitioncancel: Ga("Transition", "TransitionCancel"), transitionend: Ga("Transition", "TransitionEnd") }, Kc = {}, Gm = {}; jn && (Gm = document.createElement("div").style, "AnimationEvent" in window || (delete Mi.animationend.animation, delete Mi.animationiteration.animation, delete Mi.animationstart.animation), "TransitionEvent" in window || delete Mi.transitionend.transition); function Ya(t) { if (Kc[t]) return Kc[t]; if (!Mi[t]) return t; var n = Mi[t], i; for (i in n) if (n.hasOwnProperty(i) && i in Gm) return Kc[t] = n[i]; return t } var Ym = Ya("animationend"), Xm = Ya("animationiteration"), Fm = Ya("animationstart"), FC = Ya("transitionrun"), KC = Ya("transitionstart"), ZC = Ya("transitioncancel"), Km = Ya("transitionend"), Zm = new Map, Zc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); Zc.push("scrollEnd"); function on(t, n) { Zm.set(t, n), Pa(n, [t]) } var or = typeof reportError == "function" ? reportError : function (t) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var n = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t }); if (!window.dispatchEvent(n)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", t); return } console.error(t) }, Ze = [], Ni = 0, Qc = 0; function rr() { for (var t = Ni, n = Qc = Ni = 0; n < t;) { var i = Ze[n]; Ze[n++] = null; var r = Ze[n]; Ze[n++] = null; var c = Ze[n]; Ze[n++] = null; var d = Ze[n]; if (Ze[n++] = null, r !== null && c !== null) { var v = r.pending; v === null ? c.next = c : (c.next = v.next, v.next = c), r.pending = c } d !== 0 && Qm(i, c, d) } } function lr(t, n, i, r) { Ze[Ni++] = t, Ze[Ni++] = n, Ze[Ni++] = i, Ze[Ni++] = r, Qc |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r) } function Wc(t, n, i, r) { return lr(t, n, i, r), cr(t) } function Xa(t, n) { return lr(t, null, null, n), cr(t) } function Qm(t, n, i) { t.lanes |= i; var r = t.alternate; r !== null && (r.lanes |= i); for (var c = !1, d = t.return; d !== null;)d.childLanes |= i, r = d.alternate, r !== null && (r.childLanes |= i), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (c = !0)), t = d, d = d.return; return t.tag === 3 ? (d = t.stateNode, c && n !== null && (c = 31 - Ve(i), t = d.hiddenUpdates, r = t[c], r === null ? t[c] = [n] : r.push(n), n.lane = i | 536870912), d) : null } function cr(t) { if (50 < so) throw so = 0, of = null, Error(o(185)); for (var n = t.return; n !== null;)t = n, n = t.return; return t.tag === 3 ? t.stateNode : null } var Di = {}; function QC(t, n, i, r) { this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function ke(t, n, i, r) { return new QC(t, n, i, r) } function Ic(t) { return t = t.prototype, !(!t || !t.isReactComponent) } function _n(t, n) { var i = t.alternate; return i === null ? (i = ke(t.tag, n, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = n, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, n = t.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i } function Wm(t, n) { t.flags &= 65011714; var i = t.alternate; return i === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, n = i.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), t } function ur(t, n, i, r, c, d) { var v = 0; if (r = t, typeof t == "function") Ic(t) && (v = 1); else if (typeof t == "string") v = tE(t, i, tt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5; else t: switch (t) { case J: return t = ke(31, i, n, c), t.elementType = J, t.lanes = d, t; case C: return Fa(i.children, c, d, n); case A: v = 8, c |= 24; break; case R: return t = ke(12, i, n, c | 2), t.elementType = R, t.lanes = d, t; case q: return t = ke(13, i, n, c), t.elementType = q, t.lanes = d, t; case K: return t = ke(19, i, n, c), t.elementType = K, t.lanes = d, t; default: if (typeof t == "object" && t !== null) switch (t.$$typeof) { case D: v = 10; break t; case M: v = 9; break t; case _: v = 11; break t; case U: v = 14; break t; case H: v = 16, r = null; break t }v = 29, i = Error(o(130, t === null ? "null" : typeof t, "")), r = null }return n = ke(v, i, n, c), n.elementType = t, n.type = r, n.lanes = d, n } function Fa(t, n, i, r) { return t = ke(7, t, r, n), t.lanes = i, t } function $c(t, n, i) { return t = ke(6, t, null, n), t.lanes = i, t } function Im(t) { var n = ke(18, null, null, 0); return n.stateNode = t, n } function Jc(t, n, i) { return n = ke(4, t.children !== null ? t.children : [], t.key, n), n.lanes = i, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n } var $m = new WeakMap; function Qe(t, n) { if (typeof t == "object" && t !== null) { var i = $m.get(t); return i !== void 0 ? i : (n = { value: t, source: n, stack: Ih(n) }, $m.set(t, n), n) } return { value: t, source: n, stack: Ih(n) } } var Oi = [], ji = 0, fr = null, Bs = 0, We = [], Ie = 0, ia = null, gn = 1, yn = ""; function zn(t, n) { Oi[ji++] = Bs, Oi[ji++] = fr, fr = t, Bs = n } function Jm(t, n, i) { We[Ie++] = gn, We[Ie++] = yn, We[Ie++] = ia, ia = t; var r = gn; t = yn; var c = 32 - Ve(r) - 1; r &= ~(1 << c), i += 1; var d = 32 - Ve(n) + c; if (30 < d) { var v = c - c % 5; d = (r & (1 << v) - 1).toString(32), r >>= v, c -= v, gn = 1 << 32 - Ve(n) + c | i << c | r, yn = d + t } else gn = 1 << d | i << c | r, yn = t } function tu(t) { t.return !== null && (zn(t, 1), Jm(t, 1, 0)) } function eu(t) { for (; t === fr;)fr = Oi[--ji], Oi[ji] = null, Bs = Oi[--ji], Oi[ji] = null; for (; t === ia;)ia = We[--Ie], We[Ie] = null, yn = We[--Ie], We[Ie] = null, gn = We[--Ie], We[Ie] = null } function tp(t, n) { We[Ie++] = gn, We[Ie++] = yn, We[Ie++] = ia, gn = n.id, yn = n.overflow, ia = t } var de = null, qt = null, Mt = !1, sa = null, $e = !1, nu = Error(o(519)); function oa(t) { var n = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw Us(Qe(n, t)), nu } function ep(t) { var n = t.stateNode, i = t.type, r = t.memoizedProps; switch (n[fe] = t, n[Ae] = r, i) { case "dialog": Et("cancel", n), Et("close", n); break; case "iframe": case "object": case "embed": Et("load", n); break; case "video": case "audio": for (i = 0; i < ro.length; i++)Et(ro[i], n); break; case "source": Et("error", n); break; case "img": case "image": case "link": Et("error", n), Et("load", n); break; case "details": Et("toggle", n); break; case "input": Et("invalid", n), mm(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0); break; case "select": Et("invalid", n); break; case "textarea": Et("invalid", n), gm(n, r.value, r.defaultValue, r.children) }i = r.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || r.suppressHydrationWarning === !0 || vy(n.textContent, i) ? (r.popover != null && (Et("beforetoggle", n), Et("toggle", n)), r.onScroll != null && Et("scroll", n), r.onScrollEnd != null && Et("scrollend", n), r.onClick != null && (n.onclick = On), n = !0) : n = !1, n || oa(t, !0) } function np(t) { for (de = t.return; de;)switch (de.tag) { case 5: case 31: case 13: $e = !1; return; case 27: case 3: $e = !0; return; default: de = de.return } } function _i(t) { if (t !== de) return !1; if (!Mt) return np(t), Mt = !0, !1; var n = t.tag, i; if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || Sf(t.type, t.memoizedProps)), i = !i), i && qt && oa(t), np(t), n === 13) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317)); qt = Ry(t) } else if (n === 31) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317)); qt = Ry(t) } else n === 27 ? (n = qt, ba(t.type) ? (t = Tf, Tf = null, qt = t) : qt = n) : qt = de ? tn(t.stateNode.nextSibling) : null; return !0 } function Ka() { qt = de = null, Mt = !1 } function au() { var t = sa; return t !== null && (De === null ? De = t : De.push.apply(De, t), sa = null), t } function Us(t) { sa === null ? sa = [t] : sa.push(t) } var iu = O(null), Za = null, Vn = null; function ra(t, n, i) { $(iu, n._currentValue), n._currentValue = i } function Ln(t) { t._currentValue = iu.current, X(iu) } function su(t, n, i) { for (; t !== null;) { var r = t.alternate; if ((t.childLanes & n) !== n ? (t.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), t === i) break; t = t.return } } function ou(t, n, i, r) { var c = t.child; for (c !== null && (c.return = t); c !== null;) { var d = c.dependencies; if (d !== null) { var v = c.child; d = d.firstContext; t: for (; d !== null;) { var E = d; d = c; for (var N = 0; N < n.length; N++)if (E.context === n[N]) { d.lanes |= i, E = d.alternate, E !== null && (E.lanes |= i), su(d.return, i, t), r || (v = null); break t } d = E.next } } else if (c.tag === 18) { if (v = c.return, v === null) throw Error(o(341)); v.lanes |= i, d = v.alternate, d !== null && (d.lanes |= i), su(v, i, t), v = null } else v = c.child; if (v !== null) v.return = c; else for (v = c; v !== null;) { if (v === t) { v = null; break } if (c = v.sibling, c !== null) { c.return = v.return, v = c; break } v = v.return } c = v } } function zi(t, n, i, r) { t = null; for (var c = n, d = !1; c !== null;) { if (!d) { if ((c.flags & 524288) !== 0) d = !0; else if ((c.flags & 262144) !== 0) break } if (c.tag === 10) { var v = c.alternate; if (v === null) throw Error(o(387)); if (v = v.memoizedProps, v !== null) { var E = c.type; Le(c.pendingProps.value, v.value) || (t !== null ? t.push(E) : t = [E]) } } else if (c === I.current) { if (v = c.alternate, v === null) throw Error(o(387)); v.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(ho) : t = [ho]) } c = c.return } t !== null && ou(n, t, i, r), n.flags |= 262144 } function dr(t) { for (t = t.firstContext; t !== null;) { if (!Le(t.context._currentValue, t.memoizedValue)) return !0; t = t.next } return !1 } function Qa(t) { Za = t, Vn = null, t = t.dependencies, t !== null && (t.firstContext = null) } function he(t) { return ap(Za, t) } function hr(t, n) { return Za === null && Qa(t), ap(t, n) } function ap(t, n) { var i = n._currentValue; if (n = { context: n, memoizedValue: i, next: null }, Vn === null) { if (t === null) throw Error(o(308)); Vn = n, t.dependencies = { lanes: 0, firstContext: n }, t.flags |= 524288 } else Vn = Vn.next = n; return i } var WC = typeof AbortController < "u" ? AbortController : function () { var t = [], n = this.signal = { aborted: !1, addEventListener: function (i, r) { t.push(r) } }; this.abort = function () { n.aborted = !0, t.forEach(function (i) { return i() }) } }, IC = e.unstable_scheduleCallback, $C = e.unstable_NormalPriority, It = { $$typeof: D, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function ru() { return { controller: new WC, data: new Map, refCount: 0 } } function Hs(t) { t.refCount--, t.refCount === 0 && IC($C, function () { t.controller.abort() }) } var Ps = null, lu = 0, Vi = 0, Li = null; function JC(t, n) { if (Ps === null) { var i = Ps = []; lu = 0, Vi = df(), Li = { status: "pending", value: void 0, then: function (r) { i.push(r) } } } return lu++, n.then(ip, ip), n } function ip() { if (--lu === 0 && Ps !== null) { Li !== null && (Li.status = "fulfilled"); var t = Ps; Ps = null, Vi = 0, Li = null; for (var n = 0; n < t.length; n++)(0, t[n])() } } function tw(t, n) { var i = [], r = { status: "pending", value: null, reason: null, then: function (c) { i.push(c) } }; return t.then(function () { r.status = "fulfilled", r.value = n; for (var c = 0; c < i.length; c++)(0, i[c])(n) }, function (c) { for (r.status = "rejected", r.reason = c, c = 0; c < i.length; c++)(0, i[c])(void 0) }), r } var sp = z.S; z.S = function (t, n) { qg = _e(), typeof n == "object" && n !== null && typeof n.then == "function" && JC(t, n), sp !== null && sp(t, n) }; var Wa = O(null); function cu() { var t = Wa.current; return t !== null ? t : Ut.pooledCache } function mr(t, n) { n === null ? $(Wa, Wa.current) : $(Wa, n.pool) } function op() { var t = cu(); return t === null ? null : { parent: It._currentValue, pool: t } } var ki = Error(o(460)), uu = Error(o(474)), pr = Error(o(542)), gr = { then: function () { } }; function rp(t) { return t = t.status, t === "fulfilled" || t === "rejected" } function lp(t, n, i) { switch (i = t[i], i === void 0 ? t.push(n) : i !== n && (n.then(On, On), n = i), n.status) { case "fulfilled": return n.value; case "rejected": throw t = n.reason, up(t), t; default: if (typeof n.status == "string") n.then(On, On); else { if (t = Ut, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482)); t = n, t.status = "pending", t.then(function (r) { if (n.status === "pending") { var c = n; c.status = "fulfilled", c.value = r } }, function (r) { if (n.status === "pending") { var c = n; c.status = "rejected", c.reason = r } }) } switch (n.status) { case "fulfilled": return n.value; case "rejected": throw t = n.reason, up(t), t }throw $a = n, ki } } function Ia(t) { try { var n = t._init; return n(t._payload) } catch (i) { throw i !== null && typeof i == "object" && typeof i.then == "function" ? ($a = i, ki) : i } } var $a = null; function cp() { if ($a === null) throw Error(o(459)); var t = $a; return $a = null, t } function up(t) { if (t === ki || t === pr) throw Error(o(483)) } var Bi = null, qs = 0; function yr(t) { var n = qs; return qs += 1, Bi === null && (Bi = []), lp(Bi, t, n) } function Gs(t, n) { n = n.props.ref, t.ref = n !== void 0 ? n : null } function vr(t, n) { throw n.$$typeof === b ? Error(o(525)) : (t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t))) } function fp(t) { function n(V, j) { if (t) { var k = V.deletions; k === null ? (V.deletions = [j], V.flags |= 16) : k.push(j) } } function i(V, j) { if (!t) return null; for (; j !== null;)n(V, j), j = j.sibling; return null } function r(V) { for (var j = new Map; V !== null;)V.key !== null ? j.set(V.key, V) : j.set(V.index, V), V = V.sibling; return j } function c(V, j) { return V = _n(V, j), V.index = 0, V.sibling = null, V } function d(V, j, k) { return V.index = k, t ? (k = V.alternate, k !== null ? (k = k.index, k < j ? (V.flags |= 67108866, j) : k) : (V.flags |= 67108866, j)) : (V.flags |= 1048576, j) } function v(V) { return t && V.alternate === null && (V.flags |= 67108866), V } function E(V, j, k, F) { return j === null || j.tag !== 6 ? (j = $c(k, V.mode, F), j.return = V, j) : (j = c(j, k), j.return = V, j) } function N(V, j, k, F) { var ft = k.type; return ft === C ? Y(V, j, k.props.children, F, k.key) : j !== null && (j.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === H && Ia(ft) === j.type) ? (j = c(j, k.props), Gs(j, k), j.return = V, j) : (j = ur(k.type, k.key, k.props, null, V.mode, F), Gs(j, k), j.return = V, j) } function B(V, j, k, F) { return j === null || j.tag !== 4 || j.stateNode.containerInfo !== k.containerInfo || j.stateNode.implementation !== k.implementation ? (j = Jc(k, V.mode, F), j.return = V, j) : (j = c(j, k.children || []), j.return = V, j) } function Y(V, j, k, F, ft) { return j === null || j.tag !== 7 ? (j = Fa(k, V.mode, F, ft), j.return = V, j) : (j = c(j, k), j.return = V, j) } function Z(V, j, k) { if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return j = $c("" + j, V.mode, k), j.return = V, j; if (typeof j == "object" && j !== null) { switch (j.$$typeof) { case w: return k = ur(j.type, j.key, j.props, null, V.mode, k), Gs(k, j), k.return = V, k; case T: return j = Jc(j, V.mode, k), j.return = V, j; case H: return j = Ia(j), Z(V, j, k) }if (lt(j) || at(j)) return j = Fa(j, V.mode, k, null), j.return = V, j; if (typeof j.then == "function") return Z(V, yr(j), k); if (j.$$typeof === D) return Z(V, hr(V, j), k); vr(V, j) } return null } function P(V, j, k, F) { var ft = j !== null ? j.key : null; if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return ft !== null ? null : E(V, j, "" + k, F); if (typeof k == "object" && k !== null) { switch (k.$$typeof) { case w: return k.key === ft ? N(V, j, k, F) : null; case T: return k.key === ft ? B(V, j, k, F) : null; case H: return k = Ia(k), P(V, j, k, F) }if (lt(k) || at(k)) return ft !== null ? null : Y(V, j, k, F, null); if (typeof k.then == "function") return P(V, j, yr(k), F); if (k.$$typeof === D) return P(V, j, hr(V, k), F); vr(V, k) } return null } function G(V, j, k, F, ft) { if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return V = V.get(k) || null, E(j, V, "" + F, ft); if (typeof F == "object" && F !== null) { switch (F.$$typeof) { case w: return V = V.get(F.key === null ? k : F.key) || null, N(j, V, F, ft); case T: return V = V.get(F.key === null ? k : F.key) || null, B(j, V, F, ft); case H: return F = Ia(F), G(V, j, k, F, ft) }if (lt(F) || at(F)) return V = V.get(k) || null, Y(j, V, F, ft, null); if (typeof F.then == "function") return G(V, j, k, yr(F), ft); if (F.$$typeof === D) return G(V, j, k, hr(j, F), ft); vr(j, F) } return null } function it(V, j, k, F) { for (var ft = null, Dt = null, ct = j, St = j = 0, Rt = null; ct !== null && St < k.length; St++) { ct.index > St ? (Rt = ct, ct = null) : Rt = ct.sibling; var Ot = P(V, ct, k[St], F); if (Ot === null) { ct === null && (ct = Rt); break } t && ct && Ot.alternate === null && n(V, ct), j = d(Ot, j, St), Dt === null ? ft = Ot : Dt.sibling = Ot, Dt = Ot, ct = Rt } if (St === k.length) return i(V, ct), Mt && zn(V, St), ft; if (ct === null) { for (; St < k.length; St++)ct = Z(V, k[St], F), ct !== null && (j = d(ct, j, St), Dt === null ? ft = ct : Dt.sibling = ct, Dt = ct); return Mt && zn(V, St), ft } for (ct = r(ct); St < k.length; St++)Rt = G(ct, V, St, k[St], F), Rt !== null && (t && Rt.alternate !== null && ct.delete(Rt.key === null ? St : Rt.key), j = d(Rt, j, St), Dt === null ? ft = Rt : Dt.sibling = Rt, Dt = Rt); return t && ct.forEach(function (Aa) { return n(V, Aa) }), Mt && zn(V, St), ft } function pt(V, j, k, F) { if (k == null) throw Error(o(151)); for (var ft = null, Dt = null, ct = j, St = j = 0, Rt = null, Ot = k.next(); ct !== null && !Ot.done; St++, Ot = k.next()) { ct.index > St ? (Rt = ct, ct = null) : Rt = ct.sibling; var Aa = P(V, ct, Ot.value, F); if (Aa === null) { ct === null && (ct = Rt); break } t && ct && Aa.alternate === null && n(V, ct), j = d(Aa, j, St), Dt === null ? ft = Aa : Dt.sibling = Aa, Dt = Aa, ct = Rt } if (Ot.done) return i(V, ct), Mt && zn(V, St), ft; if (ct === null) { for (; !Ot.done; St++, Ot = k.next())Ot = Z(V, Ot.value, F), Ot !== null && (j = d(Ot, j, St), Dt === null ? ft = Ot : Dt.sibling = Ot, Dt = Ot); return Mt && zn(V, St), ft } for (ct = r(ct); !Ot.done; St++, Ot = k.next())Ot = G(ct, V, St, Ot.value, F), Ot !== null && (t && Ot.alternate !== null && ct.delete(Ot.key === null ? St : Ot.key), j = d(Ot, j, St), Dt === null ? ft = Ot : Dt.sibling = Ot, Dt = Ot); return t && ct.forEach(function (fE) { return n(V, fE) }), Mt && zn(V, St), ft } function Bt(V, j, k, F) { if (typeof k == "object" && k !== null && k.type === C && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) { switch (k.$$typeof) { case w: t: { for (var ft = k.key; j !== null;) { if (j.key === ft) { if (ft = k.type, ft === C) { if (j.tag === 7) { i(V, j.sibling), F = c(j, k.props.children), F.return = V, V = F; break t } } else if (j.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === H && Ia(ft) === j.type) { i(V, j.sibling), F = c(j, k.props), Gs(F, k), F.return = V, V = F; break t } i(V, j); break } else n(V, j); j = j.sibling } k.type === C ? (F = Fa(k.props.children, V.mode, F, k.key), F.return = V, V = F) : (F = ur(k.type, k.key, k.props, null, V.mode, F), Gs(F, k), F.return = V, V = F) } return v(V); case T: t: { for (ft = k.key; j !== null;) { if (j.key === ft) if (j.tag === 4 && j.stateNode.containerInfo === k.containerInfo && j.stateNode.implementation === k.implementation) { i(V, j.sibling), F = c(j, k.children || []), F.return = V, V = F; break t } else { i(V, j); break } else n(V, j); j = j.sibling } F = Jc(k, V.mode, F), F.return = V, V = F } return v(V); case H: return k = Ia(k), Bt(V, j, k, F) }if (lt(k)) return it(V, j, k, F); if (at(k)) { if (ft = at(k), typeof ft != "function") throw Error(o(150)); return k = ft.call(k), pt(V, j, k, F) } if (typeof k.then == "function") return Bt(V, j, yr(k), F); if (k.$$typeof === D) return Bt(V, j, hr(V, k), F); vr(V, k) } return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, j !== null && j.tag === 6 ? (i(V, j.sibling), F = c(j, k), F.return = V, V = F) : (i(V, j), F = $c(k, V.mode, F), F.return = V, V = F), v(V)) : i(V, j) } return function (V, j, k, F) { try { qs = 0; var ft = Bt(V, j, k, F); return Bi = null, ft } catch (ct) { if (ct === ki || ct === pr) throw ct; var Dt = ke(29, ct, null, V.mode); return Dt.lanes = F, Dt.return = V, Dt } } } var Ja = fp(!0), dp = fp(!1), la = !1; function fu(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } } function du(t, n) { t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null }) } function ca(t) { return { lane: t, tag: 0, payload: null, callback: null, next: null } } function ua(t, n, i) { var r = t.updateQueue; if (r === null) return null; if (r = r.shared, (jt & 2) !== 0) { var c = r.pending; return c === null ? n.next = n : (n.next = c.next, c.next = n), r.pending = n, n = cr(t), Qm(t, null, i), n } return lr(t, r, n, i), cr(t) } function Ys(t, n, i) { if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) { var r = n.lanes; r &= t.pendingLanes, i |= r, n.lanes = i, am(t, i) } } function hu(t, n) { var i = t.updateQueue, r = t.alternate; if (r !== null && (r = r.updateQueue, i === r)) { var c = null, d = null; if (i = i.firstBaseUpdate, i !== null) { do { var v = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null }; d === null ? c = d = v : d = d.next = v, i = i.next } while (i !== null); d === null ? c = d = n : d = d.next = n } else c = d = n; i = { baseState: r.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: r.shared, callbacks: r.callbacks }, t.updateQueue = i; return } t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = n : t.next = n, i.lastBaseUpdate = n } var mu = !1; function Xs() { if (mu) { var t = Li; if (t !== null) throw t } } function Fs(t, n, i, r) { mu = !1; var c = t.updateQueue; la = !1; var d = c.firstBaseUpdate, v = c.lastBaseUpdate, E = c.shared.pending; if (E !== null) { c.shared.pending = null; var N = E, B = N.next; N.next = null, v === null ? d = B : v.next = B, v = N; var Y = t.alternate; Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== v && (E === null ? Y.firstBaseUpdate = B : E.next = B, Y.lastBaseUpdate = N)) } if (d !== null) { var Z = c.baseState; v = 0, Y = B = N = null, E = d; do { var P = E.lane & -536870913, G = P !== E.lane; if (G ? (Tt & P) === P : (r & P) === P) { P !== 0 && P === Vi && (mu = !0), Y !== null && (Y = Y.next = { lane: 0, tag: E.tag, payload: E.payload, callback: null, next: null }); t: { var it = t, pt = E; P = n; var Bt = i; switch (pt.tag) { case 1: if (it = pt.payload, typeof it == "function") { Z = it.call(Bt, Z, P); break t } Z = it; break t; case 3: it.flags = it.flags & -65537 | 128; case 0: if (it = pt.payload, P = typeof it == "function" ? it.call(Bt, Z, P) : it, P == null) break t; Z = y({}, Z, P); break t; case 2: la = !0 } } P = E.callback, P !== null && (t.flags |= 64, G && (t.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [P] : G.push(P)) } else G = { lane: P, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (B = Y = G, N = Z) : Y = Y.next = G, v |= P; if (E = E.next, E === null) { if (E = c.shared.pending, E === null) break; G = E, E = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null } } while (!0); Y === null && (N = Z), c.baseState = N, c.firstBaseUpdate = B, c.lastBaseUpdate = Y, d === null && (c.shared.lanes = 0), pa |= v, t.lanes = v, t.memoizedState = Z } } function hp(t, n) { if (typeof t != "function") throw Error(o(191, t)); t.call(n) } function mp(t, n) { var i = t.callbacks; if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++)hp(i[t], n) } var Ui = O(null), xr = O(0); function pp(t, n) { t = Xn, $(xr, t), $(Ui, n), Xn = t | n.baseLanes } function pu() { $(xr, Xn), $(Ui, Ui.current) } function gu() { Xn = xr.current, X(Ui), X(xr) } var Be = O(null), Je = null; function fa(t) { var n = t.alternate; $(Zt, Zt.current & 1), $(Be, t), Je === null && (n === null || Ui.current !== null || n.memoizedState !== null) && (Je = t) } function yu(t) { $(Zt, Zt.current), $(Be, t), Je === null && (Je = t) } function gp(t) { t.tag === 22 ? ($(Zt, Zt.current), $(Be, t), Je === null && (Je = t)) : da() } function da() { $(Zt, Zt.current), $(Be, Be.current) } function Ue(t) { X(Be), Je === t && (Je = null), X(Zt) } var Zt = O(0); function br(t) { for (var n = t; n !== null;) { if (n.tag === 13) { var i = n.memoizedState; if (i !== null && (i = i.dehydrated, i === null || Ef(i) || Af(i))) return n } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) { if ((n.flags & 128) !== 0) return n } else if (n.child !== null) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; n.sibling === null;) { if (n.return === null || n.return === t) return null; n = n.return } n.sibling.return = n.return, n = n.sibling } return null } var kn = 0, xt = null, Lt = null, $t = null, Sr = !1, Hi = !1, ti = !1, Cr = 0, Ks = 0, Pi = null, ew = 0; function Xt() { throw Error(o(321)) } function vu(t, n) { if (n === null) return !1; for (var i = 0; i < n.length && i < t.length; i++)if (!Le(t[i], n[i])) return !1; return !0 } function xu(t, n, i, r, c, d) { return kn = d, xt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, z.H = t === null || t.memoizedState === null ? Jp : zu, ti = !1, d = i(r, c), ti = !1, Hi && (d = vp(n, i, r, c)), yp(t), d } function yp(t) { z.H = Ws; var n = Lt !== null && Lt.next !== null; if (kn = 0, $t = Lt = xt = null, Sr = !1, Ks = 0, Pi = null, n) throw Error(o(300)); t === null || Jt || (t = t.dependencies, t !== null && dr(t) && (Jt = !0)) } function vp(t, n, i, r) { xt = t; var c = 0; do { if (Hi && (Pi = null), Ks = 0, Hi = !1, 25 <= c) throw Error(o(301)); if (c += 1, $t = Lt = null, t.updateQueue != null) { var d = t.updateQueue; d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0) } z.H = tg, d = n(i, r) } while (Hi); return d } function nw() { var t = z.H, n = t.useState()[0]; return n = typeof n.then == "function" ? Zs(n) : n, t = t.useState()[0], (Lt !== null ? Lt.memoizedState : null) !== t && (xt.flags |= 1024), n } function bu() { var t = Cr !== 0; return Cr = 0, t } function Su(t, n, i) { n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~i } function Cu(t) { if (Sr) { for (t = t.memoizedState; t !== null;) { var n = t.queue; n !== null && (n.pending = null), t = t.next } Sr = !1 } kn = 0, $t = Lt = xt = null, Hi = !1, Ks = Cr = 0, Pi = null } function Ce() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return $t === null ? xt.memoizedState = $t = t : $t = $t.next = t, $t } function Qt() { if (Lt === null) { var t = xt.alternate; t = t !== null ? t.memoizedState : null } else t = Lt.next; var n = $t === null ? xt.memoizedState : $t.next; if (n !== null) $t = n, Lt = t; else { if (t === null) throw xt.alternate === null ? Error(o(467)) : Error(o(310)); Lt = t, t = { memoizedState: Lt.memoizedState, baseState: Lt.baseState, baseQueue: Lt.baseQueue, queue: Lt.queue, next: null }, $t === null ? xt.memoizedState = $t = t : $t = $t.next = t } return $t } function wr() { return { lastEffect: null, events: null, stores: null, memoCache: null } } function Zs(t) { var n = Ks; return Ks += 1, Pi === null && (Pi = []), t = lp(Pi, t, n), n = xt, ($t === null ? n.memoizedState : $t.next) === null && (n = n.alternate, z.H = n === null || n.memoizedState === null ? Jp : zu), t } function Er(t) { if (t !== null && typeof t == "object") { if (typeof t.then == "function") return Zs(t); if (t.$$typeof === D) return he(t) } throw Error(o(438, String(t))) } function wu(t) { var n = null, i = xt.updateQueue; if (i !== null && (n = i.memoCache), n == null) { var r = xt.alternate; r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (n = { data: r.data.map(function (c) { return c.slice() }), index: 0 }))) } if (n == null && (n = { data: [], index: 0 }), i === null && (i = wr(), xt.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0) for (i = n.data[n.index] = Array(t), r = 0; r < t; r++)i[r] = W; return n.index++, i } function Bn(t, n) { return typeof n == "function" ? n(t) : n } function Ar(t) { var n = Qt(); return Eu(n, Lt, t) } function Eu(t, n, i) { var r = t.queue; if (r === null) throw Error(o(311)); r.lastRenderedReducer = i; var c = t.baseQueue, d = r.pending; if (d !== null) { if (c !== null) { var v = c.next; c.next = d.next, d.next = v } n.baseQueue = c = d, r.pending = null } if (d = t.baseState, c === null) t.memoizedState = d; else { n = c.next; var E = v = null, N = null, B = n, Y = !1; do { var Z = B.lane & -536870913; if (Z !== B.lane ? (Tt & Z) === Z : (kn & Z) === Z) { var P = B.revertLane; if (P === 0) N !== null && (N = N.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), Z === Vi && (Y = !0); else if ((kn & P) === P) { B = B.next, P === Vi && (Y = !0); continue } else Z = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, N === null ? (E = N = Z, v = d) : N = N.next = Z, xt.lanes |= P, pa |= P; Z = B.action, ti && i(d, Z), d = B.hasEagerState ? B.eagerState : i(d, Z) } else P = { lane: Z, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, N === null ? (E = N = P, v = d) : N = N.next = P, xt.lanes |= Z, pa |= Z; B = B.next } while (B !== null && B !== n); if (N === null ? v = d : N.next = E, !Le(d, t.memoizedState) && (Jt = !0, Y && (i = Li, i !== null))) throw i; t.memoizedState = d, t.baseState = v, t.baseQueue = N, r.lastRenderedState = d } return c === null && (r.lanes = 0), [t.memoizedState, r.dispatch] } function Au(t) { var n = Qt(), i = n.queue; if (i === null) throw Error(o(311)); i.lastRenderedReducer = t; var r = i.dispatch, c = i.pending, d = n.memoizedState; if (c !== null) { i.pending = null; var v = c = c.next; do d = t(d, v.action), v = v.next; while (v !== c); Le(d, n.memoizedState) || (Jt = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), i.lastRenderedState = d } return [d, r] } function xp(t, n, i) { var r = xt, c = Qt(), d = Mt; if (d) { if (i === void 0) throw Error(o(407)); i = i() } else i = n(); var v = !Le((Lt || c).memoizedState, i); if (v && (c.memoizedState = i, Jt = !0), c = c.queue, Mu(Cp.bind(null, r, c, t), [t]), c.getSnapshot !== n || v || $t !== null && $t.memoizedState.tag & 1) { if (r.flags |= 2048, qi(9, { destroy: void 0 }, Sp.bind(null, r, c, i, n), null), Ut === null) throw Error(o(349)); d || (kn & 127) !== 0 || bp(r, n, i) } return i } function bp(t, n, i) { t.flags |= 16384, t = { getSnapshot: n, value: i }, n = xt.updateQueue, n === null ? (n = wr(), xt.updateQueue = n, n.stores = [t]) : (i = n.stores, i === null ? n.stores = [t] : i.push(t)) } function Sp(t, n, i, r) { n.value = i, n.getSnapshot = r, wp(n) && Ep(t) } function Cp(t, n, i) { return i(function () { wp(n) && Ep(t) }) } function wp(t) { var n = t.getSnapshot; t = t.value; try { var i = n(); return !Le(t, i) } catch { return !0 } } function Ep(t) { var n = Xa(t, 2); n !== null && Oe(n, t, 2) } function Tu(t) { var n = Ce(); if (typeof t == "function") { var i = t; if (t = i(), ti) { ea(!0); try { i() } finally { ea(!1) } } } return n.memoizedState = n.baseState = t, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bn, lastRenderedState: t }, n } function Ap(t, n, i, r) { return t.baseState = i, Eu(t, Lt, typeof r == "function" ? r : Bn) } function aw(t, n, i, r, c) { if (Mr(t)) throw Error(o(485)); if (t = n.action, t !== null) { var d = { payload: c, action: t, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (v) { d.listeners.push(v) } }; z.T !== null ? i(!0) : d.isTransition = !1, r(d), i = n.pending, i === null ? (d.next = n.pending = d, Tp(n, d)) : (d.next = i.next, n.pending = i.next = d) } } function Tp(t, n) { var i = n.action, r = n.payload, c = t.state; if (n.isTransition) { var d = z.T, v = {}; z.T = v; try { var E = i(c, r), N = z.S; N !== null && N(v, E), Rp(t, n, E) } catch (B) { Ru(t, n, B) } finally { d !== null && v.types !== null && (d.types = v.types), z.T = d } } else try { d = i(c, r), Rp(t, n, d) } catch (B) { Ru(t, n, B) } } function Rp(t, n, i) { i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function (r) { Mp(t, n, r) }, function (r) { return Ru(t, n, r) }) : Mp(t, n, i) } function Mp(t, n, i) { n.status = "fulfilled", n.value = i, Np(n), t.state = i, n = t.pending, n !== null && (i = n.next, i === n ? t.pending = null : (i = i.next, n.next = i, Tp(t, i))) } function Ru(t, n, i) { var r = t.pending; if (t.pending = null, r !== null) { r = r.next; do n.status = "rejected", n.reason = i, Np(n), n = n.next; while (n !== r) } t.action = null } function Np(t) { t = t.listeners; for (var n = 0; n < t.length; n++)(0, t[n])() } function Dp(t, n) { return n } function Op(t, n) { if (Mt) { var i = Ut.formState; if (i !== null) { t: { var r = xt; if (Mt) { if (qt) { e: { for (var c = qt, d = $e; c.nodeType !== 8;) { if (!d) { c = null; break e } if (c = tn(c.nextSibling), c === null) { c = null; break e } } d = c.data, c = d === "F!" || d === "F" ? c : null } if (c) { qt = tn(c.nextSibling), r = c.data === "F!"; break t } } oa(r) } r = !1 } r && (n = i[0]) } } return i = Ce(), i.memoizedState = i.baseState = n, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Dp, lastRenderedState: n }, i.queue = r, i = Wp.bind(null, xt, r), r.dispatch = i, r = Tu(!1), d = _u.bind(null, xt, !1, r.queue), r = Ce(), c = { state: n, dispatch: null, action: t, pending: null }, r.queue = c, i = aw.bind(null, xt, c, d, i), c.dispatch = i, r.memoizedState = t, [n, i, !1] } function jp(t) { var n = Qt(); return _p(n, Lt, t) } function _p(t, n, i) { if (n = Eu(t, n, Dp)[0], t = Ar(Bn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try { var r = Zs(n) } catch (v) { throw v === ki ? pr : v } else r = n; n = Qt(); var c = n.queue, d = c.dispatch; return i !== n.memoizedState && (xt.flags |= 2048, qi(9, { destroy: void 0 }, iw.bind(null, c, i), null)), [r, d, t] } function iw(t, n) { t.action = n } function zp(t) { var n = Qt(), i = Lt; if (i !== null) return _p(n, i, t); Qt(), n = n.memoizedState, i = Qt(); var r = i.queue.dispatch; return i.memoizedState = t, [n, r, !1] } function qi(t, n, i, r) { return t = { tag: t, create: i, deps: r, inst: n, next: null }, n = xt.updateQueue, n === null && (n = wr(), xt.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = t.next = t : (r = i.next, i.next = t, t.next = r, n.lastEffect = t), t } function Vp() { return Qt().memoizedState } function Tr(t, n, i, r) { var c = Ce(); xt.flags |= t, c.memoizedState = qi(1 | n, { destroy: void 0 }, i, r === void 0 ? null : r) } function Rr(t, n, i, r) { var c = Qt(); r = r === void 0 ? null : r; var d = c.memoizedState.inst; Lt !== null && r !== null && vu(r, Lt.memoizedState.deps) ? c.memoizedState = qi(n, d, i, r) : (xt.flags |= t, c.memoizedState = qi(1 | n, d, i, r)) } function Lp(t, n) { Tr(8390656, 8, t, n) } function Mu(t, n) { Rr(2048, 8, t, n) } function sw(t) { xt.flags |= 4; var n = xt.updateQueue; if (n === null) n = wr(), xt.updateQueue = n, n.events = [t]; else { var i = n.events; i === null ? n.events = [t] : i.push(t) } } function kp(t) { var n = Qt().memoizedState; return sw({ ref: n, nextImpl: t }), function () { if ((jt & 2) !== 0) throw Error(o(440)); return n.impl.apply(void 0, arguments) } } function Bp(t, n) { return Rr(4, 2, t, n) } function Up(t, n) { return Rr(4, 4, t, n) } function Hp(t, n) { if (typeof n == "function") { t = t(); var i = n(t); return function () { typeof i == "function" ? i() : n(null) } } if (n != null) return t = t(), n.current = t, function () { n.current = null } } function Pp(t, n, i) { i = i != null ? i.concat([t]) : null, Rr(4, 4, Hp.bind(null, n, t), i) } function Nu() { } function qp(t, n) { var i = Qt(); n = n === void 0 ? null : n; var r = i.memoizedState; return n !== null && vu(n, r[1]) ? r[0] : (i.memoizedState = [t, n], t) } function Gp(t, n) { var i = Qt(); n = n === void 0 ? null : n; var r = i.memoizedState; if (n !== null && vu(n, r[1])) return r[0]; if (r = t(), ti) { ea(!0); try { t() } finally { ea(!1) } } return i.memoizedState = [r, n], r } function Du(t, n, i) { return i === void 0 || (kn & 1073741824) !== 0 && (Tt & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = i, t = Yg(), xt.lanes |= t, pa |= t, i) } function Yp(t, n, i, r) { return Le(i, n) ? i : Ui.current !== null ? (t = Du(t, i, r), Le(t, n) || (Jt = !0), t) : (kn & 42) === 0 || (kn & 1073741824) !== 0 && (Tt & 261930) === 0 ? (Jt = !0, t.memoizedState = i) : (t = Yg(), xt.lanes |= t, pa |= t, n) } function Xp(t, n, i, r, c) { var d = Q.p; Q.p = d !== 0 && 8 > d ? d : 8; var v = z.T, E = {}; z.T = E, _u(t, !1, n, i); try { var N = c(), B = z.S; if (B !== null && B(E, N), N !== null && typeof N == "object" && typeof N.then == "function") { var Y = tw(N, r); Qs(t, n, Y, qe(t)) } else Qs(t, n, r, qe(t)) } catch (Z) { Qs(t, n, { then: function () { }, status: "rejected", reason: Z }, qe()) } finally { Q.p = d, v !== null && E.types !== null && (v.types = E.types), z.T = v } } function ow() { } function Ou(t, n, i, r) { if (t.tag !== 5) throw Error(o(476)); var c = Fp(t).queue; Xp(t, c, n, L, i === null ? ow : function () { return Kp(t), i(r) }) } function Fp(t) { var n = t.memoizedState; if (n !== null) return n; n = { memoizedState: L, baseState: L, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bn, lastRenderedState: L }, next: null }; var i = {}; return n.next = { memoizedState: i, baseState: i, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bn, lastRenderedState: i }, next: null }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n } function Kp(t) { var n = Fp(t); n.next === null && (n = t.alternate.memoizedState), Qs(t, n.next.queue, {}, qe()) } function ju() { return he(ho) } function Zp() { return Qt().memoizedState } function Qp() { return Qt().memoizedState } function rw(t) { for (var n = t.return; n !== null;) { switch (n.tag) { case 24: case 3: var i = qe(); t = ca(i); var r = ua(n, t, i); r !== null && (Oe(r, n, i), Ys(r, n, i)), n = { cache: ru() }, t.payload = n; return }n = n.return } } function lw(t, n, i) { var r = qe(); i = { lane: r, revertLane: 0, gesture: null, action: i, hasEagerState: !1, eagerState: null, next: null }, Mr(t) ? Ip(n, i) : (i = Wc(t, n, i, r), i !== null && (Oe(i, t, r), $p(i, n, r))) } function Wp(t, n, i) { var r = qe(); Qs(t, n, i, r) } function Qs(t, n, i, r) { var c = { lane: r, revertLane: 0, gesture: null, action: i, hasEagerState: !1, eagerState: null, next: null }; if (Mr(t)) Ip(n, c); else { var d = t.alternate; if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null)) try { var v = n.lastRenderedState, E = d(v, i); if (c.hasEagerState = !0, c.eagerState = E, Le(E, v)) return lr(t, n, c, 0), Ut === null && rr(), !1 } catch { } if (i = Wc(t, n, c, r), i !== null) return Oe(i, t, r), $p(i, n, r), !0 } return !1 } function _u(t, n, i, r) { if (r = { lane: 2, revertLane: df(), gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, Mr(t)) { if (n) throw Error(o(479)) } else n = Wc(t, i, r, 2), n !== null && Oe(n, t, 2) } function Mr(t) { var n = t.alternate; return t === xt || n !== null && n === xt } function Ip(t, n) { Hi = Sr = !0; var i = t.pending; i === null ? n.next = n : (n.next = i.next, i.next = n), t.pending = n } function $p(t, n, i) { if ((i & 4194048) !== 0) { var r = n.lanes; r &= t.pendingLanes, i |= r, n.lanes = i, am(t, i) } } var Ws = { readContext: he, use: Er, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useLayoutEffect: Xt, useInsertionEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useSyncExternalStore: Xt, useId: Xt, useHostTransitionStatus: Xt, useFormState: Xt, useActionState: Xt, useOptimistic: Xt, useMemoCache: Xt, useCacheRefresh: Xt }; Ws.useEffectEvent = Xt; var Jp = { readContext: he, use: Er, useCallback: function (t, n) { return Ce().memoizedState = [t, n === void 0 ? null : n], t }, useContext: he, useEffect: Lp, useImperativeHandle: function (t, n, i) { i = i != null ? i.concat([t]) : null, Tr(4194308, 4, Hp.bind(null, n, t), i) }, useLayoutEffect: function (t, n) { return Tr(4194308, 4, t, n) }, useInsertionEffect: function (t, n) { Tr(4, 2, t, n) }, useMemo: function (t, n) { var i = Ce(); n = n === void 0 ? null : n; var r = t(); if (ti) { ea(!0); try { t() } finally { ea(!1) } } return i.memoizedState = [r, n], r }, useReducer: function (t, n, i) { var r = Ce(); if (i !== void 0) { var c = i(n); if (ti) { ea(!0); try { i(n) } finally { ea(!1) } } } else c = n; return r.memoizedState = r.baseState = c, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: c }, r.queue = t, t = t.dispatch = lw.bind(null, xt, t), [r.memoizedState, t] }, useRef: function (t) { var n = Ce(); return t = { current: t }, n.memoizedState = t }, useState: function (t) { t = Tu(t); var n = t.queue, i = Wp.bind(null, xt, n); return n.dispatch = i, [t.memoizedState, i] }, useDebugValue: Nu, useDeferredValue: function (t, n) { var i = Ce(); return Du(i, t, n) }, useTransition: function () { var t = Tu(!1); return t = Xp.bind(null, xt, t.queue, !0, !1), Ce().memoizedState = t, [!1, t] }, useSyncExternalStore: function (t, n, i) { var r = xt, c = Ce(); if (Mt) { if (i === void 0) throw Error(o(407)); i = i() } else { if (i = n(), Ut === null) throw Error(o(349)); (Tt & 127) !== 0 || bp(r, n, i) } c.memoizedState = i; var d = { value: i, getSnapshot: n }; return c.queue = d, Lp(Cp.bind(null, r, d, t), [t]), r.flags |= 2048, qi(9, { destroy: void 0 }, Sp.bind(null, r, d, i, n), null), i }, useId: function () { var t = Ce(), n = Ut.identifierPrefix; if (Mt) { var i = yn, r = gn; i = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + i, n = "_" + n + "R_" + i, i = Cr++, 0 < i && (n += "H" + i.toString(32)), n += "_" } else i = ew++, n = "_" + n + "r_" + i.toString(32) + "_"; return t.memoizedState = n }, useHostTransitionStatus: ju, useFormState: Op, useActionState: Op, useOptimistic: function (t) { var n = Ce(); n.memoizedState = n.baseState = t; var i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return n.queue = i, n = _u.bind(null, xt, !0, i), i.dispatch = n, [t, n] }, useMemoCache: wu, useCacheRefresh: function () { return Ce().memoizedState = rw.bind(null, xt) }, useEffectEvent: function (t) { var n = Ce(), i = { impl: t }; return n.memoizedState = i, function () { if ((jt & 2) !== 0) throw Error(o(440)); return i.impl.apply(void 0, arguments) } } }, zu = { readContext: he, use: Er, useCallback: qp, useContext: he, useEffect: Mu, useImperativeHandle: Pp, useInsertionEffect: Bp, useLayoutEffect: Up, useMemo: Gp, useReducer: Ar, useRef: Vp, useState: function () { return Ar(Bn) }, useDebugValue: Nu, useDeferredValue: function (t, n) { var i = Qt(); return Yp(i, Lt.memoizedState, t, n) }, useTransition: function () { var t = Ar(Bn)[0], n = Qt().memoizedState; return [typeof t == "boolean" ? t : Zs(t), n] }, useSyncExternalStore: xp, useId: Zp, useHostTransitionStatus: ju, useFormState: jp, useActionState: jp, useOptimistic: function (t, n) { var i = Qt(); return Ap(i, Lt, t, n) }, useMemoCache: wu, useCacheRefresh: Qp }; zu.useEffectEvent = kp; var tg = { readContext: he, use: Er, useCallback: qp, useContext: he, useEffect: Mu, useImperativeHandle: Pp, useInsertionEffect: Bp, useLayoutEffect: Up, useMemo: Gp, useReducer: Au, useRef: Vp, useState: function () { return Au(Bn) }, useDebugValue: Nu, useDeferredValue: function (t, n) { var i = Qt(); return Lt === null ? Du(i, t, n) : Yp(i, Lt.memoizedState, t, n) }, useTransition: function () { var t = Au(Bn)[0], n = Qt().memoizedState; return [typeof t == "boolean" ? t : Zs(t), n] }, useSyncExternalStore: xp, useId: Zp, useHostTransitionStatus: ju, useFormState: zp, useActionState: zp, useOptimistic: function (t, n) { var i = Qt(); return Lt !== null ? Ap(i, Lt, t, n) : (i.baseState = t, [t, i.queue.dispatch]) }, useMemoCache: wu, useCacheRefresh: Qp }; tg.useEffectEvent = kp; function Vu(t, n, i, r) { n = t.memoizedState, i = i(r, n), i = i == null ? n : y({}, n, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i) } var Lu = { enqueueSetState: function (t, n, i) { t = t._reactInternals; var r = qe(), c = ca(r); c.payload = n, i != null && (c.callback = i), n = ua(t, c, r), n !== null && (Oe(n, t, r), Ys(n, t, r)) }, enqueueReplaceState: function (t, n, i) { t = t._reactInternals; var r = qe(), c = ca(r); c.tag = 1, c.payload = n, i != null && (c.callback = i), n = ua(t, c, r), n !== null && (Oe(n, t, r), Ys(n, t, r)) }, enqueueForceUpdate: function (t, n) { t = t._reactInternals; var i = qe(), r = ca(i); r.tag = 2, n != null && (r.callback = n), n = ua(t, r, i), n !== null && (Oe(n, t, i), Ys(n, t, i)) } }; function eg(t, n, i, r, c, d, v) { return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, d, v) : n.prototype && n.prototype.isPureReactComponent ? !Ls(i, r) || !Ls(c, d) : !0 } function ng(t, n, i, r) { t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, r), n.state !== t && Lu.enqueueReplaceState(n, n.state, null) } function ei(t, n) { var i = n; if ("ref" in n) { i = {}; for (var r in n) r !== "ref" && (i[r] = n[r]) } if (t = t.defaultProps) { i === n && (i = y({}, i)); for (var c in t) i[c] === void 0 && (i[c] = t[c]) } return i } function ag(t) { or(t) } function ig(t) { console.error(t) } function sg(t) { or(t) } function Nr(t, n) { try { var i = t.onUncaughtError; i(n.value, { componentStack: n.stack }) } catch (r) { setTimeout(function () { throw r }) } } function og(t, n, i) { try { var r = t.onCaughtError; r(i.value, { componentStack: i.stack, errorBoundary: n.tag === 1 ? n.stateNode : null }) } catch (c) { setTimeout(function () { throw c }) } } function ku(t, n, i) { return i = ca(i), i.tag = 3, i.payload = { element: null }, i.callback = function () { Nr(t, n) }, i } function rg(t) { return t = ca(t), t.tag = 3, t } function lg(t, n, i, r) { var c = i.type.getDerivedStateFromError; if (typeof c == "function") { var d = r.value; t.payload = function () { return c(d) }, t.callback = function () { og(n, i, r) } } var v = i.stateNode; v !== null && typeof v.componentDidCatch == "function" && (t.callback = function () { og(n, i, r), typeof c != "function" && (ga === null ? ga = new Set([this]) : ga.add(this)); var E = r.stack; this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" }) }) } function cw(t, n, i, r, c) { if (i.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") { if (n = i.alternate, n !== null && zi(n, i, c, !0), i = Be.current, i !== null) { switch (i.tag) { case 31: case 13: return Je === null ? Pr() : i.alternate === null && Ft === 0 && (Ft = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, r === gr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = new Set([r]) : n.add(r), cf(t, r, c)), !1; case 22: return i.flags |= 65536, r === gr ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = new Set([r]) : i.add(r)), cf(t, r, c)), !1 }throw Error(o(435, i.tag)) } return cf(t, r, c), Pr(), !1 } if (Mt) return n = Be.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, r !== nu && (t = Error(o(422), { cause: r }), Us(Qe(t, i)))) : (r !== nu && (n = Error(o(423), { cause: r }), Us(Qe(n, i))), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, r = Qe(r, i), c = ku(t.stateNode, r, c), hu(t, c), Ft !== 4 && (Ft = 2)), !1; var d = Error(o(520), { cause: r }); if (d = Qe(d, i), io === null ? io = [d] : io.push(d), Ft !== 4 && (Ft = 2), n === null) return !0; r = Qe(r, i), i = n; do { switch (i.tag) { case 3: return i.flags |= 65536, t = c & -c, i.lanes |= t, t = ku(i.stateNode, r, t), hu(i, t), !1; case 1: if (n = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ga === null || !ga.has(d)))) return i.flags |= 65536, c &= -c, i.lanes |= c, c = rg(c), lg(c, t, i, r), hu(i, c), !1 }i = i.return } while (i !== null); return !1 } var Bu = Error(o(461)), Jt = !1; function me(t, n, i, r) { n.child = t === null ? dp(n, null, i, r) : Ja(n, t.child, i, r) } function cg(t, n, i, r, c) { i = i.render; var d = n.ref; if ("ref" in r) { var v = {}; for (var E in r) E !== "ref" && (v[E] = r[E]) } else v = r; return Qa(n), r = xu(t, n, i, v, d, c), E = bu(), t !== null && !Jt ? (Su(t, n, c), Un(t, n, c)) : (Mt && E && tu(n), n.flags |= 1, me(t, n, r, c), n.child) } function ug(t, n, i, r, c) { if (t === null) { var d = i.type; return typeof d == "function" && !Ic(d) && d.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = d, fg(t, n, d, r, c)) : (t = ur(i.type, null, r, n, n.mode, c), t.ref = n.ref, t.return = n, n.child = t) } if (d = t.child, !Fu(t, c)) { var v = d.memoizedProps; if (i = i.compare, i = i !== null ? i : Ls, i(v, r) && t.ref === n.ref) return Un(t, n, c) } return n.flags |= 1, t = _n(d, r), t.ref = n.ref, t.return = n, n.child = t } function fg(t, n, i, r, c) { if (t !== null) { var d = t.memoizedProps; if (Ls(d, r) && t.ref === n.ref) if (Jt = !1, n.pendingProps = r = d, Fu(t, c)) (t.flags & 131072) !== 0 && (Jt = !0); else return n.lanes = t.lanes, Un(t, n, c) } return Uu(t, n, i, r, c) } function dg(t, n, i, r) { var c = r.children, d = t !== null ? t.memoizedState : null; if (t === null && n.stateNode === null && (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === "hidden") { if ((n.flags & 128) !== 0) { if (d = d !== null ? d.baseLanes | i : i, t !== null) { for (r = n.child = t.child, c = 0; r !== null;)c = c | r.lanes | r.childLanes, r = r.sibling; r = c & ~d } else r = 0, n.child = null; return hg(t, n, d, i, r) } if ((i & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mr(n, d !== null ? d.cachePool : null), d !== null ? pp(n, d) : pu(), gp(n); else return r = n.lanes = 536870912, hg(t, n, d !== null ? d.baseLanes | i : i, i, r) } else d !== null ? (mr(n, d.cachePool), pp(n, d), da(), n.memoizedState = null) : (t !== null && mr(n, null), pu(), da()); return me(t, n, c, i), n.child } function Is(t, n) { return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.sibling } function hg(t, n, i, r, c) { var d = cu(); return d = d === null ? null : { parent: It._currentValue, pool: d }, n.memoizedState = { baseLanes: i, cachePool: d }, t !== null && mr(n, null), pu(), gp(n), t !== null && zi(t, n, r, !0), n.childLanes = c, null } function Dr(t, n) { return n = jr({ mode: n.mode, children: n.children }, t.mode), n.ref = t.ref, t.child = n, n.return = t, n } function mg(t, n, i) { return Ja(n, t.child, null, i), t = Dr(n, n.pendingProps), t.flags |= 2, Ue(n), n.memoizedState = null, t } function uw(t, n, i) { var r = n.pendingProps, c = (n.flags & 128) !== 0; if (n.flags &= -129, t === null) { if (Mt) { if (r.mode === "hidden") return t = Dr(n, r), n.lanes = 536870912, Is(null, t); if (yu(n), (t = qt) ? (t = Ty(t, $e), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = { dehydrated: t, treeContext: ia !== null ? { id: gn, overflow: yn } : null, retryLane: 536870912, hydrationErrors: null }, i = Im(t), i.return = n, n.child = i, de = n, qt = null)) : t = null, t === null) throw oa(n); return n.lanes = 536870912, null } return Dr(n, r) } var d = t.memoizedState; if (d !== null) { var v = d.dehydrated; if (yu(n), c) if (n.flags & 256) n.flags &= -257, n = mg(t, n, i); else if (n.memoizedState !== null) n.child = t.child, n.flags |= 128, n = null; else throw Error(o(558)); else if (Jt || zi(t, n, i, !1), c = (i & t.childLanes) !== 0, Jt || c) { if (r = Ut, r !== null && (v = im(r, i), v !== 0 && v !== d.retryLane)) throw d.retryLane = v, Xa(t, v), Oe(r, t, v), Bu; Pr(), n = mg(t, n, i) } else t = d.treeContext, qt = tn(v.nextSibling), de = n, Mt = !0, sa = null, $e = !1, t !== null && tp(n, t), n = Dr(n, r), n.flags |= 4096; return n } return t = _n(t.child, { mode: r.mode, children: r.children }), t.ref = n.ref, n.child = t, t.return = n, t } function Or(t, n) { var i = n.ref; if (i === null) t !== null && t.ref !== null && (n.flags |= 4194816); else { if (typeof i != "function" && typeof i != "object") throw Error(o(284)); (t === null || t.ref !== i) && (n.flags |= 4194816) } } function Uu(t, n, i, r, c) { return Qa(n), i = xu(t, n, i, r, void 0, c), r = bu(), t !== null && !Jt ? (Su(t, n, c), Un(t, n, c)) : (Mt && r && tu(n), n.flags |= 1, me(t, n, i, c), n.child) } function pg(t, n, i, r, c, d) { return Qa(n), n.updateQueue = null, i = vp(n, r, i, c), yp(t), r = bu(), t !== null && !Jt ? (Su(t, n, d), Un(t, n, d)) : (Mt && r && tu(n), n.flags |= 1, me(t, n, i, d), n.child) } function gg(t, n, i, r, c) { if (Qa(n), n.stateNode === null) { var d = Di, v = i.contextType; typeof v == "object" && v !== null && (d = he(v)), d = new i(r, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Lu, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = r, d.state = n.memoizedState, d.refs = {}, fu(n), v = i.contextType, d.context = typeof v == "object" && v !== null ? he(v) : Di, d.state = n.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (Vu(n, i, v, r), d.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), v !== d.state && Lu.enqueueReplaceState(d, d.state, null), Fs(n, r, d, c), Xs(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), r = !0 } else if (t === null) { d = n.stateNode; var E = n.memoizedProps, N = ei(i, E); d.props = N; var B = d.context, Y = i.contextType; v = Di, typeof Y == "object" && Y !== null && (v = he(Y)); var Z = i.getDerivedStateFromProps; Y = typeof Z == "function" || typeof d.getSnapshotBeforeUpdate == "function", E = n.pendingProps !== E, Y || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (E || B !== v) && ng(n, d, r, v), la = !1; var P = n.memoizedState; d.state = P, Fs(n, r, d, c), Xs(), B = n.memoizedState, E || P !== B || la ? (typeof Z == "function" && (Vu(n, i, Z, r), B = n.memoizedState), (N = la || eg(n, i, N, r, P, B, v)) ? (Y || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = B), d.props = r, d.state = B, d.context = v, r = N) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), r = !1) } else { d = n.stateNode, du(t, n), v = n.memoizedProps, Y = ei(i, v), d.props = Y, Z = n.pendingProps, P = d.context, B = i.contextType, N = Di, typeof B == "object" && B !== null && (N = he(B)), E = i.getDerivedStateFromProps, (B = typeof E == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== Z || P !== N) && ng(n, d, r, N), la = !1, P = n.memoizedState, d.state = P, Fs(n, r, d, c), Xs(); var G = n.memoizedState; v !== Z || P !== G || la || t !== null && t.dependencies !== null && dr(t.dependencies) ? (typeof E == "function" && (Vu(n, i, E, r), G = n.memoizedState), (Y = la || eg(n, i, Y, r, P, G, N) || t !== null && t.dependencies !== null && dr(t.dependencies)) ? (B || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, G, N), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, G, N)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = G), d.props = r, d.state = G, d.context = N, r = Y) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && P === t.memoizedState || (n.flags |= 1024), r = !1) } return d = r, Or(t, n), r = (n.flags & 128) !== 0, d || r ? (d = n.stateNode, i = r && typeof i.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, t !== null && r ? (n.child = Ja(n, t.child, null, c), n.child = Ja(n, null, i, c)) : me(t, n, i, c), n.memoizedState = d.state, t = n.child) : t = Un(t, n, c), t } function yg(t, n, i, r) { return Ka(), n.flags |= 256, me(t, n, i, r), n.child } var Hu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }; function Pu(t) { return { baseLanes: t, cachePool: op() } } function qu(t, n, i) { return t = t !== null ? t.childLanes & ~i : 0, n && (t |= Pe), t } function vg(t, n, i) { var r = n.pendingProps, c = !1, d = (n.flags & 128) !== 0, v; if ((v = d) || (v = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), v && (c = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, t === null) { if (Mt) { if (c ? fa(n) : da(), (t = qt) ? (t = Ty(t, $e), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = { dehydrated: t, treeContext: ia !== null ? { id: gn, overflow: yn } : null, retryLane: 536870912, hydrationErrors: null }, i = Im(t), i.return = n, n.child = i, de = n, qt = null)) : t = null, t === null) throw oa(n); return Af(t) ? n.lanes = 32 : n.lanes = 536870912, null } var E = r.children; return r = r.fallback, c ? (da(), c = n.mode, E = jr({ mode: "hidden", children: E }, c), r = Fa(r, c, i, null), E.return = n, r.return = n, E.sibling = r, n.child = E, r = n.child, r.memoizedState = Pu(i), r.childLanes = qu(t, v, i), n.memoizedState = Hu, Is(null, r)) : (fa(n), Gu(n, E)) } var N = t.memoizedState; if (N !== null && (E = N.dehydrated, E !== null)) { if (d) n.flags & 256 ? (fa(n), n.flags &= -257, n = Yu(t, n, i)) : n.memoizedState !== null ? (da(), n.child = t.child, n.flags |= 128, n = null) : (da(), E = r.fallback, c = n.mode, r = jr({ mode: "visible", children: r.children }, c), E = Fa(E, c, i, null), E.flags |= 2, r.return = n, E.return = n, r.sibling = E, n.child = r, Ja(n, t.child, null, i), r = n.child, r.memoizedState = Pu(i), r.childLanes = qu(t, v, i), n.memoizedState = Hu, n = Is(null, r)); else if (fa(n), Af(E)) { if (v = E.nextSibling && E.nextSibling.dataset, v) var B = v.dgst; v = B, r = Error(o(419)), r.stack = "", r.digest = v, Us({ value: r, source: null, stack: null }), n = Yu(t, n, i) } else if (Jt || zi(t, n, i, !1), v = (i & t.childLanes) !== 0, Jt || v) { if (v = Ut, v !== null && (r = im(v, i), r !== 0 && r !== N.retryLane)) throw N.retryLane = r, Xa(t, r), Oe(v, t, r), Bu; Ef(E) || Pr(), n = Yu(t, n, i) } else Ef(E) ? (n.flags |= 192, n.child = t.child, n = null) : (t = N.treeContext, qt = tn(E.nextSibling), de = n, Mt = !0, sa = null, $e = !1, t !== null && tp(n, t), n = Gu(n, r.children), n.flags |= 4096); return n } return c ? (da(), E = r.fallback, c = n.mode, N = t.child, B = N.sibling, r = _n(N, { mode: "hidden", children: r.children }), r.subtreeFlags = N.subtreeFlags & 65011712, B !== null ? E = _n(B, E) : (E = Fa(E, c, i, null), E.flags |= 2), E.return = n, r.return = n, r.sibling = E, n.child = r, Is(null, r), r = n.child, E = t.child.memoizedState, E === null ? E = Pu(i) : (c = E.cachePool, c !== null ? (N = It._currentValue, c = c.parent !== N ? { parent: N, pool: N } : c) : c = op(), E = { baseLanes: E.baseLanes | i, cachePool: c }), r.memoizedState = E, r.childLanes = qu(t, v, i), n.memoizedState = Hu, Is(t.child, r)) : (fa(n), i = t.child, t = i.sibling, i = _n(i, { mode: "visible", children: r.children }), i.return = n, i.sibling = null, t !== null && (v = n.deletions, v === null ? (n.deletions = [t], n.flags |= 16) : v.push(t)), n.child = i, n.memoizedState = null, i) } function Gu(t, n) { return n = jr({ mode: "visible", children: n }, t.mode), n.return = t, t.child = n } function jr(t, n) { return t = ke(22, t, null, n), t.lanes = 0, t } function Yu(t, n, i) { return Ja(n, t.child, null, i), t = Gu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t } function xg(t, n, i) { t.lanes |= n; var r = t.alternate; r !== null && (r.lanes |= n), su(t.return, n, i) } function Xu(t, n, i, r, c, d) { var v = t.memoizedState; v === null ? t.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: i, tailMode: c, treeForkCount: d } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = r, v.tail = i, v.tailMode = c, v.treeForkCount = d) } function bg(t, n, i) { var r = n.pendingProps, c = r.revealOrder, d = r.tail; r = r.children; var v = Zt.current, E = (v & 2) !== 0; if (E ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, $(Zt, v), me(t, n, r, i), r = Mt ? Bs : 0, !E && t !== null && (t.flags & 128) !== 0) t: for (t = n.child; t !== null;) { if (t.tag === 13) t.memoizedState !== null && xg(t, i, n); else if (t.tag === 19) xg(t, i, n); else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === n) break t; for (; t.sibling === null;) { if (t.return === null || t.return === n) break t; t = t.return } t.sibling.return = t.return, t = t.sibling } switch (c) { case "forwards": for (i = n.child, c = null; i !== null;)t = i.alternate, t !== null && br(t) === null && (c = i), i = i.sibling; i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), Xu(n, !1, c, i, d, r); break; case "backwards": case "unstable_legacy-backwards": for (i = null, c = n.child, n.child = null; c !== null;) { if (t = c.alternate, t !== null && br(t) === null) { n.child = c; break } t = c.sibling, c.sibling = i, i = c, c = t } Xu(n, !0, i, null, d, r); break; case "together": Xu(n, !1, null, null, void 0, r); break; default: n.memoizedState = null }return n.child } function Un(t, n, i) { if (t !== null && (n.dependencies = t.dependencies), pa |= n.lanes, (i & n.childLanes) === 0) if (t !== null) { if (zi(t, n, i, !1), (i & n.childLanes) === 0) return null } else return null; if (t !== null && n.child !== t.child) throw Error(o(153)); if (n.child !== null) { for (t = n.child, i = _n(t, t.pendingProps), n.child = i, i.return = n; t.sibling !== null;)t = t.sibling, i = i.sibling = _n(t, t.pendingProps), i.return = n; i.sibling = null } return n.child } function Fu(t, n) { return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && dr(t))) } function fw(t, n, i) { switch (n.tag) { case 3: bt(n, n.stateNode.containerInfo), ra(n, It, t.memoizedState.cache), Ka(); break; case 27: case 5: At(n); break; case 4: bt(n, n.stateNode.containerInfo); break; case 10: ra(n, n.type, n.memoizedProps.value); break; case 31: if (n.memoizedState !== null) return n.flags |= 128, yu(n), null; break; case 13: var r = n.memoizedState; if (r !== null) return r.dehydrated !== null ? (fa(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? vg(t, n, i) : (fa(n), t = Un(t, n, i), t !== null ? t.sibling : null); fa(n); break; case 19: var c = (t.flags & 128) !== 0; if (r = (i & n.childLanes) !== 0, r || (zi(t, n, i, !1), r = (i & n.childLanes) !== 0), c) { if (r) return bg(t, n, i); n.flags |= 128 } if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $(Zt, Zt.current), r) break; return null; case 22: return n.lanes = 0, dg(t, n, i, n.pendingProps); case 24: ra(n, It, t.memoizedState.cache) }return Un(t, n, i) } function Sg(t, n, i) { if (t !== null) if (t.memoizedProps !== n.pendingProps) Jt = !0; else { if (!Fu(t, i) && (n.flags & 128) === 0) return Jt = !1, fw(t, n, i); Jt = (t.flags & 131072) !== 0 } else Jt = !1, Mt && (n.flags & 1048576) !== 0 && Jm(n, Bs, n.index); switch (n.lanes = 0, n.tag) { case 16: t: { var r = n.pendingProps; if (t = Ia(n.elementType), n.type = t, typeof t == "function") Ic(t) ? (r = ei(t, r), n.tag = 1, n = gg(null, n, t, r, i)) : (n.tag = 0, n = Uu(null, n, t, r, i)); else { if (t != null) { var c = t.$$typeof; if (c === _) { n.tag = 11, n = cg(null, n, t, r, i); break t } else if (c === U) { n.tag = 14, n = ug(null, n, t, r, i); break t } } throw n = ut(t) || t, Error(o(306, n, "")) } } return n; case 0: return Uu(t, n, n.type, n.pendingProps, i); case 1: return r = n.type, c = ei(r, n.pendingProps), gg(t, n, r, c, i); case 3: t: { if (bt(n, n.stateNode.containerInfo), t === null) throw Error(o(387)); r = n.pendingProps; var d = n.memoizedState; c = d.element, du(t, n), Fs(n, r, null, i); var v = n.memoizedState; if (r = v.cache, ra(n, It, r), r !== d.cache && ou(n, [It], i, !0), Xs(), r = v.element, d.isDehydrated) if (d = { element: r, isDehydrated: !1, cache: v.cache }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) { n = yg(t, n, r, i); break t } else if (r !== c) { c = Qe(Error(o(424)), n), Us(c), n = yg(t, n, r, i); break t } else for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, qt = tn(t.firstChild), de = n, Mt = !0, sa = null, $e = !0, i = dp(n, null, r, i), n.child = i; i;)i.flags = i.flags & -3 | 4096, i = i.sibling; else { if (Ka(), r === c) { n = Un(t, n, i); break t } me(t, n, r, i) } n = n.child } return n; case 26: return Or(t, n), t === null ? (i = jy(n.type, null, n.pendingProps, null)) ? n.memoizedState = i : Mt || (i = n.type, t = n.pendingProps, r = Zr(gt.current).createElement(i), r[fe] = n, r[Ae] = t, pe(r, i, t), ce(r), n.stateNode = r) : n.memoizedState = jy(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null; case 27: return At(n), t === null && Mt && (r = n.stateNode = Ny(n.type, n.pendingProps, gt.current), de = n, $e = !0, c = qt, ba(n.type) ? (Tf = c, qt = tn(r.firstChild)) : qt = c), me(t, n, n.pendingProps.children, i), Or(t, n), t === null && (n.flags |= 4194304), n.child; case 5: return t === null && Mt && ((c = r = qt) && (r = Pw(r, n.type, n.pendingProps, $e), r !== null ? (n.stateNode = r, de = n, qt = tn(r.firstChild), $e = !1, c = !0) : c = !1), c || oa(n)), At(n), c = n.type, d = n.pendingProps, v = t !== null ? t.memoizedProps : null, r = d.children, Sf(c, d) ? r = null : v !== null && Sf(c, v) && (n.flags |= 32), n.memoizedState !== null && (c = xu(t, n, nw, null, null, i), ho._currentValue = c), Or(t, n), me(t, n, r, i), n.child; case 6: return t === null && Mt && ((t = i = qt) && (i = qw(i, n.pendingProps, $e), i !== null ? (n.stateNode = i, de = n, qt = null, t = !0) : t = !1), t || oa(n)), null; case 13: return vg(t, n, i); case 4: return bt(n, n.stateNode.containerInfo), r = n.pendingProps, t === null ? n.child = Ja(n, null, r, i) : me(t, n, r, i), n.child; case 11: return cg(t, n, n.type, n.pendingProps, i); case 7: return me(t, n, n.pendingProps, i), n.child; case 8: return me(t, n, n.pendingProps.children, i), n.child; case 12: return me(t, n, n.pendingProps.children, i), n.child; case 10: return r = n.pendingProps, ra(n, n.type, r.value), me(t, n, r.children, i), n.child; case 9: return c = n.type._context, r = n.pendingProps.children, Qa(n), c = he(c), r = r(c), n.flags |= 1, me(t, n, r, i), n.child; case 14: return ug(t, n, n.type, n.pendingProps, i); case 15: return fg(t, n, n.type, n.pendingProps, i); case 19: return bg(t, n, i); case 31: return uw(t, n, i); case 22: return dg(t, n, i, n.pendingProps); case 24: return Qa(n), r = he(It), t === null ? (c = cu(), c === null && (c = Ut, d = ru(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= i), c = d), n.memoizedState = { parent: r, cache: c }, fu(n), ra(n, It, c)) : ((t.lanes & i) !== 0 && (du(t, n), Fs(n, null, null, i), Xs()), c = t.memoizedState, d = n.memoizedState, c.parent !== r ? (c = { parent: r, cache: r }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), ra(n, It, r)) : (r = d.cache, ra(n, It, r), r !== c.cache && ou(n, [It], i, !0))), me(t, n, n.pendingProps.children, i), n.child; case 29: throw n.pendingProps }throw Error(o(156, n.tag)) } function Hn(t) { t.flags |= 4 } function Ku(t, n, i, r, c) { if ((n = (t.mode & 32) !== 0) && (n = !1), n) { if (t.flags |= 16777216, (c & 335544128) === c) if (t.stateNode.complete) t.flags |= 8192; else if (Zg()) t.flags |= 8192; else throw $a = gr, uu } else t.flags &= -16777217 } function Cg(t, n) { if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217; else if (t.flags |= 16777216, !ky(n)) if (Zg()) t.flags |= 8192; else throw $a = gr, uu } function _r(t, n) { n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? em() : 536870912, t.lanes |= n, Fi |= n) } function $s(t, n) { if (!Mt) switch (t.tailMode) { case "hidden": n = t.tail; for (var i = null; n !== null;)n.alternate !== null && (i = n), n = n.sibling; i === null ? t.tail = null : i.sibling = null; break; case "collapsed": i = t.tail; for (var r = null; i !== null;)i.alternate !== null && (r = i), i = i.sibling; r === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null } } function Gt(t) { var n = t.alternate !== null && t.alternate.child === t.child, i = 0, r = 0; if (n) for (var c = t.child; c !== null;)i |= c.lanes | c.childLanes, r |= c.subtreeFlags & 65011712, r |= c.flags & 65011712, c.return = t, c = c.sibling; else for (c = t.child; c !== null;)i |= c.lanes | c.childLanes, r |= c.subtreeFlags, r |= c.flags, c.return = t, c = c.sibling; return t.subtreeFlags |= r, t.childLanes = i, n } function dw(t, n, i) { var r = n.pendingProps; switch (eu(n), n.tag) { case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return Gt(n), null; case 1: return Gt(n), null; case 3: return i = n.stateNode, r = null, t !== null && (r = t.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Ln(It), vt(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (_i(n) ? Hn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, au())), Gt(n), null; case 26: var c = n.type, d = n.memoizedState; return t === null ? (Hn(n), d !== null ? (Gt(n), Cg(n, d)) : (Gt(n), Ku(n, c, null, r, i))) : d ? d !== t.memoizedState ? (Hn(n), Gt(n), Cg(n, d)) : (Gt(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== r && Hn(n), Gt(n), Ku(n, c, t, r, i)), null; case 27: if (Nt(n), i = gt.current, c = n.type, t !== null && n.stateNode != null) t.memoizedProps !== r && Hn(n); else { if (!r) { if (n.stateNode === null) throw Error(o(166)); return Gt(n), null } t = tt.current, _i(n) ? ep(n) : (t = Ny(c, r, i), n.stateNode = t, Hn(n)) } return Gt(n), null; case 5: if (Nt(n), c = n.type, t !== null && n.stateNode != null) t.memoizedProps !== r && Hn(n); else { if (!r) { if (n.stateNode === null) throw Error(o(166)); return Gt(n), null } if (d = tt.current, _i(n)) ep(n); else { var v = Zr(gt.current); switch (d) { case 1: d = v.createElementNS("http://www.w3.org/2000/svg", c); break; case 2: d = v.createElementNS("http://www.w3.org/1998/Math/MathML", c); break; default: switch (c) { case "svg": d = v.createElementNS("http://www.w3.org/2000/svg", c); break; case "math": d = v.createElementNS("http://www.w3.org/1998/Math/MathML", c); break; case "script": d = v.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(d.firstChild); break; case "select": d = typeof r.is == "string" ? v.createElement("select", { is: r.is }) : v.createElement("select"), r.multiple ? d.multiple = !0 : r.size && (d.size = r.size); break; default: d = typeof r.is == "string" ? v.createElement(c, { is: r.is }) : v.createElement(c) } }d[fe] = n, d[Ae] = r; t: for (v = n.child; v !== null;) { if (v.tag === 5 || v.tag === 6) d.appendChild(v.stateNode); else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) { v.child.return = v, v = v.child; continue } if (v === n) break t; for (; v.sibling === null;) { if (v.return === null || v.return === n) break t; v = v.return } v.sibling.return = v.return, v = v.sibling } n.stateNode = d; t: switch (pe(d, c, r), c) { case "button": case "input": case "select": case "textarea": r = !!r.autoFocus; break t; case "img": r = !0; break t; default: r = !1 }r && Hn(n) } } return Gt(n), Ku(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, i), null; case 6: if (t && n.stateNode != null) t.memoizedProps !== r && Hn(n); else { if (typeof r != "string" && n.stateNode === null) throw Error(o(166)); if (t = gt.current, _i(n)) { if (t = n.stateNode, i = n.memoizedProps, r = null, c = de, c !== null) switch (c.tag) { case 27: case 5: r = c.memoizedProps }t[fe] = n, t = !!(t.nodeValue === i || r !== null && r.suppressHydrationWarning === !0 || vy(t.nodeValue, i)), t || oa(n, !0) } else t = Zr(t).createTextNode(r), t[fe] = n, n.stateNode = t } return Gt(n), null; case 31: if (i = n.memoizedState, t === null || t.memoizedState !== null) { if (r = _i(n), i !== null) { if (t === null) { if (!r) throw Error(o(318)); if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557)); t[fe] = n } else Ka(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4; Gt(n), t = !1 } else i = au(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), t = !0; if (!t) return n.flags & 256 ? (Ue(n), n) : (Ue(n), null); if ((n.flags & 128) !== 0) throw Error(o(558)) } return Gt(n), null; case 13: if (r = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) { if (c = _i(n), r !== null && r.dehydrated !== null) { if (t === null) { if (!c) throw Error(o(318)); if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317)); c[fe] = n } else Ka(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4; Gt(n), c = !1 } else c = au(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0; if (!c) return n.flags & 256 ? (Ue(n), n) : (Ue(n), null) } return Ue(n), (n.flags & 128) !== 0 ? (n.lanes = i, n) : (i = r !== null, t = t !== null && t.memoizedState !== null, i && (r = n.child, c = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (c = r.alternate.memoizedState.cachePool.pool), d = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (d = r.memoizedState.cachePool.pool), d !== c && (r.flags |= 2048)), i !== t && i && (n.child.flags |= 8192), _r(n, n.updateQueue), Gt(n), null); case 4: return vt(), t === null && gf(n.stateNode.containerInfo), Gt(n), null; case 10: return Ln(n.type), Gt(n), null; case 19: if (X(Zt), r = n.memoizedState, r === null) return Gt(n), null; if (c = (n.flags & 128) !== 0, d = r.rendering, d === null) if (c) $s(r, !1); else { if (Ft !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null;) { if (d = br(t), d !== null) { for (n.flags |= 128, $s(r, !1), t = d.updateQueue, n.updateQueue = t, _r(n, t), n.subtreeFlags = 0, t = i, i = n.child; i !== null;)Wm(i, t), i = i.sibling; return $(Zt, Zt.current & 1 | 2), Mt && zn(n, r.treeForkCount), n.child } t = t.sibling } r.tail !== null && _e() > Br && (n.flags |= 128, c = !0, $s(r, !1), n.lanes = 4194304) } else { if (!c) if (t = br(d), t !== null) { if (n.flags |= 128, c = !0, t = t.updateQueue, n.updateQueue = t, _r(n, t), $s(r, !0), r.tail === null && r.tailMode === "hidden" && !d.alternate && !Mt) return Gt(n), null } else 2 * _e() - r.renderingStartTime > Br && i !== 536870912 && (n.flags |= 128, c = !0, $s(r, !1), n.lanes = 4194304); r.isBackwards ? (d.sibling = n.child, n.child = d) : (t = r.last, t !== null ? t.sibling = d : n.child = d, r.last = d) } return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = _e(), t.sibling = null, i = Zt.current, $(Zt, c ? i & 1 | 2 : i & 1), Mt && zn(n, r.treeForkCount), t) : (Gt(n), null); case 22: case 23: return Ue(n), gu(), r = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (n.flags |= 8192) : r && (n.flags |= 8192), r ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (Gt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Gt(n), i = n.updateQueue, i !== null && _r(n, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== i && (n.flags |= 2048), t !== null && X(Wa), null; case 24: return i = null, t !== null && (i = t.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), Ln(It), Gt(n), null; case 25: return null; case 30: return null }throw Error(o(156, n.tag)) } function hw(t, n) { switch (eu(n), n.tag) { case 1: return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null; case 3: return Ln(It), vt(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null; case 26: case 27: case 5: return Nt(n), null; case 31: if (n.memoizedState !== null) { if (Ue(n), n.alternate === null) throw Error(o(340)); Ka() } return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null; case 13: if (Ue(n), t = n.memoizedState, t !== null && t.dehydrated !== null) { if (n.alternate === null) throw Error(o(340)); Ka() } return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null; case 19: return X(Zt), null; case 4: return vt(), null; case 10: return Ln(n.type), null; case 22: case 23: return Ue(n), gu(), t !== null && X(Wa), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null; case 24: return Ln(It), null; case 25: return null; default: return null } } function wg(t, n) { switch (eu(n), n.tag) { case 3: Ln(It), vt(); break; case 26: case 27: case 5: Nt(n); break; case 4: vt(); break; case 31: n.memoizedState !== null && Ue(n); break; case 13: Ue(n); break; case 19: X(Zt); break; case 10: Ln(n.type); break; case 22: case 23: Ue(n), gu(), t !== null && X(Wa); break; case 24: Ln(It) } } function Js(t, n) { try { var i = n.updateQueue, r = i !== null ? i.lastEffect : null; if (r !== null) { var c = r.next; i = c; do { if ((i.tag & t) === t) { r = void 0; var d = i.create, v = i.inst; r = d(), v.destroy = r } i = i.next } while (i !== c) } } catch (E) { Vt(n, n.return, E) } } function ha(t, n, i) { try { var r = n.updateQueue, c = r !== null ? r.lastEffect : null; if (c !== null) { var d = c.next; r = d; do { if ((r.tag & t) === t) { var v = r.inst, E = v.destroy; if (E !== void 0) { v.destroy = void 0, c = n; var N = i, B = E; try { B() } catch (Y) { Vt(c, N, Y) } } } r = r.next } while (r !== d) } } catch (Y) { Vt(n, n.return, Y) } } function Eg(t) { var n = t.updateQueue; if (n !== null) { var i = t.stateNode; try { mp(n, i) } catch (r) { Vt(t, t.return, r) } } } function Ag(t, n, i) { i.props = ei(t.type, t.memoizedProps), i.state = t.memoizedState; try { i.componentWillUnmount() } catch (r) { Vt(t, n, r) } } function to(t, n) { try { var i = t.ref; if (i !== null) { switch (t.tag) { case 26: case 27: case 5: var r = t.stateNode; break; case 30: r = t.stateNode; break; default: r = t.stateNode }typeof i == "function" ? t.refCleanup = i(r) : i.current = r } } catch (c) { Vt(t, n, c) } } function vn(t, n) { var i = t.ref, r = t.refCleanup; if (i !== null) if (typeof r == "function") try { r() } catch (c) { Vt(t, n, c) } finally { t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null) } else if (typeof i == "function") try { i(null) } catch (c) { Vt(t, n, c) } else i.current = null } function Tg(t) { var n = t.type, i = t.memoizedProps, r = t.stateNode; try { t: switch (n) { case "button": case "input": case "select": case "textarea": i.autoFocus && r.focus(); break t; case "img": i.src ? r.src = i.src : i.srcSet && (r.srcset = i.srcSet) } } catch (c) { Vt(t, t.return, c) } } function Zu(t, n, i) { try { var r = t.stateNode; Vw(r, t.type, i, n), r[Ae] = n } catch (c) { Vt(t, t.return, c) } } function Rg(t) { return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ba(t.type) || t.tag === 4 } function Qu(t) { t: for (; ;) { for (; t.sibling === null;) { if (t.return === null || Rg(t.return)) return null; t = t.return } for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) { if (t.tag === 27 && ba(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t; t.child.return = t, t = t.child } if (!(t.flags & 2)) return t.stateNode } } function Wu(t, n, i) { var r = t.tag; if (r === 5 || r === 6) t = t.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(t), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = On)); else if (r !== 4 && (r === 27 && ba(t.type) && (i = t.stateNode, n = null), t = t.child, t !== null)) for (Wu(t, n, i), t = t.sibling; t !== null;)Wu(t, n, i), t = t.sibling } function zr(t, n, i) { var r = t.tag; if (r === 5 || r === 6) t = t.stateNode, n ? i.insertBefore(t, n) : i.appendChild(t); else if (r !== 4 && (r === 27 && ba(t.type) && (i = t.stateNode), t = t.child, t !== null)) for (zr(t, n, i), t = t.sibling; t !== null;)zr(t, n, i), t = t.sibling } function Mg(t) { var n = t.stateNode, i = t.memoizedProps; try { for (var r = t.type, c = n.attributes; c.length;)n.removeAttributeNode(c[0]); pe(n, r, i), n[fe] = t, n[Ae] = i } catch (d) { Vt(t, t.return, d) } } var Pn = !1, te = !1, Iu = !1, Ng = typeof WeakSet == "function" ? WeakSet : Set, ue = null; function mw(t, n) { if (t = t.containerInfo, xf = el, t = Pm(t), Yc(t)) { if ("selectionStart" in t) var i = { start: t.selectionStart, end: t.selectionEnd }; else t: { i = (i = t.ownerDocument) && i.defaultView || window; var r = i.getSelection && i.getSelection(); if (r && r.rangeCount !== 0) { i = r.anchorNode; var c = r.anchorOffset, d = r.focusNode; r = r.focusOffset; try { i.nodeType, d.nodeType } catch { i = null; break t } var v = 0, E = -1, N = -1, B = 0, Y = 0, Z = t, P = null; e: for (; ;) { for (var G; Z !== i || c !== 0 && Z.nodeType !== 3 || (E = v + c), Z !== d || r !== 0 && Z.nodeType !== 3 || (N = v + r), Z.nodeType === 3 && (v += Z.nodeValue.length), (G = Z.firstChild) !== null;)P = Z, Z = G; for (; ;) { if (Z === t) break e; if (P === i && ++B === c && (E = v), P === d && ++Y === r && (N = v), (G = Z.nextSibling) !== null) break; Z = P, P = Z.parentNode } Z = G } i = E === -1 || N === -1 ? null : { start: E, end: N } } else i = null } i = i || { start: 0, end: 0 } } else i = null; for (bf = { focusedElem: t, selectionRange: i }, el = !1, ue = n; ue !== null;)if (n = ue, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ue = t; else for (; ue !== null;) { switch (n = ue, d = n.alternate, t = n.flags, n.tag) { case 0: if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null)) for (i = 0; i < t.length; i++)c = t[i], c.ref.impl = c.nextImpl; break; case 11: case 15: break; case 1: if ((t & 1024) !== 0 && d !== null) { t = void 0, i = n, c = d.memoizedProps, d = d.memoizedState, r = i.stateNode; try { var it = ei(i.type, c); t = r.getSnapshotBeforeUpdate(it, d), r.__reactInternalSnapshotBeforeUpdate = t } catch (pt) { Vt(i, i.return, pt) } } break; case 3: if ((t & 1024) !== 0) { if (t = n.stateNode.containerInfo, i = t.nodeType, i === 9) wf(t); else if (i === 1) switch (t.nodeName) { case "HEAD": case "HTML": case "BODY": wf(t); break; default: t.textContent = "" } } break; case 5: case 26: case 27: case 6: case 4: case 17: break; default: if ((t & 1024) !== 0) throw Error(o(163)) }if (t = n.sibling, t !== null) { t.return = n.return, ue = t; break } ue = n.return } } function Dg(t, n, i) { var r = i.flags; switch (i.tag) { case 0: case 11: case 15: Gn(t, i), r & 4 && Js(5, i); break; case 1: if (Gn(t, i), r & 4) if (t = i.stateNode, n === null) try { t.componentDidMount() } catch (v) { Vt(i, i.return, v) } else { var c = ei(i.type, n.memoizedProps); n = n.memoizedState; try { t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate) } catch (v) { Vt(i, i.return, v) } } r & 64 && Eg(i), r & 512 && to(i, i.return); break; case 3: if (Gn(t, i), r & 64 && (t = i.updateQueue, t !== null)) { if (n = null, i.child !== null) switch (i.child.tag) { case 27: case 5: n = i.child.stateNode; break; case 1: n = i.child.stateNode }try { mp(t, n) } catch (v) { Vt(i, i.return, v) } } break; case 27: n === null && r & 4 && Mg(i); case 26: case 5: Gn(t, i), n === null && r & 4 && Tg(i), r & 512 && to(i, i.return); break; case 12: Gn(t, i); break; case 31: Gn(t, i), r & 4 && _g(t, i); break; case 13: Gn(t, i), r & 4 && zg(t, i), r & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = ww.bind(null, i), Gw(t, i)))); break; case 22: if (r = i.memoizedState !== null || Pn, !r) { n = n !== null && n.memoizedState !== null || te, c = Pn; var d = te; Pn = r, (te = n) && !d ? Yn(t, i, (i.subtreeFlags & 8772) !== 0) : Gn(t, i), Pn = c, te = d } break; case 30: break; default: Gn(t, i) } } function Og(t) { var n = t.alternate; n !== null && (t.alternate = null, Og(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && Rc(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null } var Yt = null, Re = !1; function qn(t, n, i) { for (i = i.child; i !== null;)jg(t, n, i), i = i.sibling } function jg(t, n, i) { if (ze && typeof ze.onCommitFiberUnmount == "function") try { ze.onCommitFiberUnmount(Es, i) } catch { } switch (i.tag) { case 26: te || vn(i, n), qn(t, n, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i)); break; case 27: te || vn(i, n); var r = Yt, c = Re; ba(i.type) && (Yt = i.stateNode, Re = !1), qn(t, n, i), co(i.stateNode), Yt = r, Re = c; break; case 5: te || vn(i, n); case 6: if (r = Yt, c = Re, Yt = null, qn(t, n, i), Yt = r, Re = c, Yt !== null) if (Re) try { (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(i.stateNode) } catch (d) { Vt(i, n, d) } else try { Yt.removeChild(i.stateNode) } catch (d) { Vt(i, n, d) } break; case 18: Yt !== null && (Re ? (t = Yt, Ey(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), ts(t)) : Ey(Yt, i.stateNode)); break; case 4: r = Yt, c = Re, Yt = i.stateNode.containerInfo, Re = !0, qn(t, n, i), Yt = r, Re = c; break; case 0: case 11: case 14: case 15: ha(2, i, n), te || ha(4, i, n), qn(t, n, i); break; case 1: te || (vn(i, n), r = i.stateNode, typeof r.componentWillUnmount == "function" && Ag(i, n, r)), qn(t, n, i); break; case 21: qn(t, n, i); break; case 22: te = (r = te) || i.memoizedState !== null, qn(t, n, i), te = r; break; default: qn(t, n, i) } } function _g(t, n) { if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) { t = t.dehydrated; try { ts(t) } catch (i) { Vt(n, n.return, i) } } } function zg(t, n) { if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try { ts(t) } catch (i) { Vt(n, n.return, i) } } function pw(t) { switch (t.tag) { case 31: case 13: case 19: var n = t.stateNode; return n === null && (n = t.stateNode = new Ng), n; case 22: return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Ng), n; default: throw Error(o(435, t.tag)) } } function Vr(t, n) { var i = pw(t); n.forEach(function (r) { if (!i.has(r)) { i.add(r); var c = Ew.bind(null, t, r); r.then(c, c) } }) } function Me(t, n) { var i = n.deletions; if (i !== null) for (var r = 0; r < i.length; r++) { var c = i[r], d = t, v = n, E = v; t: for (; E !== null;) { switch (E.tag) { case 27: if (ba(E.type)) { Yt = E.stateNode, Re = !1; break t } break; case 5: Yt = E.stateNode, Re = !1; break t; case 3: case 4: Yt = E.stateNode.containerInfo, Re = !0; break t }E = E.return } if (Yt === null) throw Error(o(160)); jg(d, v, c), Yt = null, Re = !1, d = c.alternate, d !== null && (d.return = null), c.return = null } if (n.subtreeFlags & 13886) for (n = n.child; n !== null;)Vg(n, t), n = n.sibling } var rn = null; function Vg(t, n) { var i = t.alternate, r = t.flags; switch (t.tag) { case 0: case 11: case 14: case 15: Me(n, t), Ne(t), r & 4 && (ha(3, t, t.return), Js(3, t), ha(5, t, t.return)); break; case 1: Me(n, t), Ne(t), r & 512 && (te || i === null || vn(i, i.return)), r & 64 && Pn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? r : i.concat(r)))); break; case 26: var c = rn; if (Me(n, t), Ne(t), r & 512 && (te || i === null || vn(i, i.return)), r & 4) { var d = i !== null ? i.memoizedState : null; if (r = t.memoizedState, i === null) if (r === null) if (t.stateNode === null) { t: { r = t.type, i = t.memoizedProps, c = c.ownerDocument || c; e: switch (r) { case "title": d = c.getElementsByTagName("title")[0], (!d || d[Rs] || d[fe] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = c.createElement(r), c.head.insertBefore(d, c.querySelector("head > title"))), pe(d, r, i), d[fe] = t, ce(d), r = d; break t; case "link": var v = Vy("link", "href", c).get(r + (i.href || "")); if (v) { for (var E = 0; E < v.length; E++)if (d = v[E], d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) { v.splice(E, 1); break e } } d = c.createElement(r), pe(d, r, i), c.head.appendChild(d); break; case "meta": if (v = Vy("meta", "content", c).get(r + (i.content || ""))) { for (E = 0; E < v.length; E++)if (d = v[E], d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) { v.splice(E, 1); break e } } d = c.createElement(r), pe(d, r, i), c.head.appendChild(d); break; default: throw Error(o(468, r)) }d[fe] = t, ce(d), r = d } t.stateNode = r } else Ly(c, t.type, t.stateNode); else t.stateNode = zy(c, r, t.memoizedProps); else d !== r ? (d === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : d.count--, r === null ? Ly(c, t.type, t.stateNode) : zy(c, r, t.memoizedProps)) : r === null && t.stateNode !== null && Zu(t, t.memoizedProps, i.memoizedProps) } break; case 27: Me(n, t), Ne(t), r & 512 && (te || i === null || vn(i, i.return)), i !== null && r & 4 && Zu(t, t.memoizedProps, i.memoizedProps); break; case 5: if (Me(n, t), Ne(t), r & 512 && (te || i === null || vn(i, i.return)), t.flags & 32) { c = t.stateNode; try { wi(c, "") } catch (it) { Vt(t, t.return, it) } } r & 4 && t.stateNode != null && (c = t.memoizedProps, Zu(t, c, i !== null ? i.memoizedProps : c)), r & 1024 && (Iu = !0); break; case 6: if (Me(n, t), Ne(t), r & 4) { if (t.stateNode === null) throw Error(o(162)); r = t.memoizedProps, i = t.stateNode; try { i.nodeValue = r } catch (it) { Vt(t, t.return, it) } } break; case 3: if (Ir = null, c = rn, rn = Qr(n.containerInfo), Me(n, t), rn = c, Ne(t), r & 4 && i !== null && i.memoizedState.isDehydrated) try { ts(n.containerInfo) } catch (it) { Vt(t, t.return, it) } Iu && (Iu = !1, Lg(t)); break; case 4: r = rn, rn = Qr(t.stateNode.containerInfo), Me(n, t), Ne(t), rn = r; break; case 12: Me(n, t), Ne(t); break; case 31: Me(n, t), Ne(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Vr(t, r))); break; case 13: Me(n, t), Ne(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (kr = _e()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Vr(t, r))); break; case 22: c = t.memoizedState !== null; var N = i !== null && i.memoizedState !== null, B = Pn, Y = te; if (Pn = B || c, te = Y || N, Me(n, t), te = Y, Pn = B, Ne(t), r & 8192) t: for (n = t.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (i === null || N || Pn || te || ni(t)), i = null, n = t; ;) { if (n.tag === 5 || n.tag === 26) { if (i === null) { N = i = n; try { if (d = N.stateNode, c) v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none"; else { E = N.stateNode; var Z = N.memoizedProps.style, P = Z != null && Z.hasOwnProperty("display") ? Z.display : null; E.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim() } } catch (it) { Vt(N, N.return, it) } } } else if (n.tag === 6) { if (i === null) { N = n; try { N.stateNode.nodeValue = c ? "" : N.memoizedProps } catch (it) { Vt(N, N.return, it) } } } else if (n.tag === 18) { if (i === null) { N = n; try { var G = N.stateNode; c ? Ay(G, !0) : Ay(N.stateNode, !1) } catch (it) { Vt(N, N.return, it) } } } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) { n.child.return = n, n = n.child; continue } if (n === t) break t; for (; n.sibling === null;) { if (n.return === null || n.return === t) break t; i === n && (i = null), n = n.return } i === n && (i = null), n.sibling.return = n.return, n = n.sibling } r & 4 && (r = t.updateQueue, r !== null && (i = r.retryQueue, i !== null && (r.retryQueue = null, Vr(t, i)))); break; case 19: Me(n, t), Ne(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, Vr(t, r))); break; case 30: break; case 21: break; default: Me(n, t), Ne(t) } } function Ne(t) { var n = t.flags; if (n & 2) { try { for (var i, r = t.return; r !== null;) { if (Rg(r)) { i = r; break } r = r.return } if (i == null) throw Error(o(160)); switch (i.tag) { case 27: var c = i.stateNode, d = Qu(t); zr(t, d, c); break; case 5: var v = i.stateNode; i.flags & 32 && (wi(v, ""), i.flags &= -33); var E = Qu(t); zr(t, E, v); break; case 3: case 4: var N = i.stateNode.containerInfo, B = Qu(t); Wu(t, B, N); break; default: throw Error(o(161)) } } catch (Y) { Vt(t, t.return, Y) } t.flags &= -3 } n & 4096 && (t.flags &= -4097) } function Lg(t) { if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) { var n = t; Lg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling } } function Gn(t, n) { if (n.subtreeFlags & 8772) for (n = n.child; n !== null;)Dg(t, n.alternate, n), n = n.sibling } function ni(t) { for (t = t.child; t !== null;) { var n = t; switch (n.tag) { case 0: case 11: case 14: case 15: ha(4, n, n.return), ni(n); break; case 1: vn(n, n.return); var i = n.stateNode; typeof i.componentWillUnmount == "function" && Ag(n, n.return, i), ni(n); break; case 27: co(n.stateNode); case 26: case 5: vn(n, n.return), ni(n); break; case 22: n.memoizedState === null && ni(n); break; case 30: ni(n); break; default: ni(n) }t = t.sibling } } function Yn(t, n, i) { for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) { var r = n.alternate, c = t, d = n, v = d.flags; switch (d.tag) { case 0: case 11: case 15: Yn(c, d, i), Js(4, d); break; case 1: if (Yn(c, d, i), r = d, c = r.stateNode, typeof c.componentDidMount == "function") try { c.componentDidMount() } catch (B) { Vt(r, r.return, B) } if (r = d, c = r.updateQueue, c !== null) { var E = r.stateNode; try { var N = c.shared.hiddenCallbacks; if (N !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++)hp(N[c], E) } catch (B) { Vt(r, r.return, B) } } i && v & 64 && Eg(d), to(d, d.return); break; case 27: Mg(d); case 26: case 5: Yn(c, d, i), i && r === null && v & 4 && Tg(d), to(d, d.return); break; case 12: Yn(c, d, i); break; case 31: Yn(c, d, i), i && v & 4 && _g(c, d); break; case 13: Yn(c, d, i), i && v & 4 && zg(c, d); break; case 22: d.memoizedState === null && Yn(c, d, i), to(d, d.return); break; case 30: break; default: Yn(c, d, i) }n = n.sibling } } function $u(t, n) { var i = null; t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && Hs(i)) } function Ju(t, n) { t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Hs(t)) } function ln(t, n, i, r) { if (n.subtreeFlags & 10256) for (n = n.child; n !== null;)kg(t, n, i, r), n = n.sibling } function kg(t, n, i, r) { var c = n.flags; switch (n.tag) { case 0: case 11: case 15: ln(t, n, i, r), c & 2048 && Js(9, n); break; case 1: ln(t, n, i, r); break; case 3: ln(t, n, i, r), c & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Hs(t))); break; case 12: if (c & 2048) { ln(t, n, i, r), t = n.stateNode; try { var d = n.memoizedProps, v = d.id, E = d.onPostCommit; typeof E == "function" && E(v, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0) } catch (N) { Vt(n, n.return, N) } } else ln(t, n, i, r); break; case 31: ln(t, n, i, r); break; case 13: ln(t, n, i, r); break; case 23: break; case 22: d = n.stateNode, v = n.alternate, n.memoizedState !== null ? d._visibility & 2 ? ln(t, n, i, r) : eo(t, n) : d._visibility & 2 ? ln(t, n, i, r) : (d._visibility |= 2, Gi(t, n, i, r, (n.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && $u(v, n); break; case 24: ln(t, n, i, r), c & 2048 && Ju(n.alternate, n); break; default: ln(t, n, i, r) } } function Gi(t, n, i, r, c) { for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) { var d = t, v = n, E = i, N = r, B = v.flags; switch (v.tag) { case 0: case 11: case 15: Gi(d, v, E, N, c), Js(8, v); break; case 23: break; case 22: var Y = v.stateNode; v.memoizedState !== null ? Y._visibility & 2 ? Gi(d, v, E, N, c) : eo(d, v) : (Y._visibility |= 2, Gi(d, v, E, N, c)), c && B & 2048 && $u(v.alternate, v); break; case 24: Gi(d, v, E, N, c), c && B & 2048 && Ju(v.alternate, v); break; default: Gi(d, v, E, N, c) }n = n.sibling } } function eo(t, n) { if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) { var i = t, r = n, c = r.flags; switch (r.tag) { case 22: eo(i, r), c & 2048 && $u(r.alternate, r); break; case 24: eo(i, r), c & 2048 && Ju(r.alternate, r); break; default: eo(i, r) }n = n.sibling } } var no = 8192; function Yi(t, n, i) { if (t.subtreeFlags & no) for (t = t.child; t !== null;)Bg(t, n, i), t = t.sibling } function Bg(t, n, i) { switch (t.tag) { case 26: Yi(t, n, i), t.flags & no && t.memoizedState !== null && eE(i, rn, t.memoizedState, t.memoizedProps); break; case 5: Yi(t, n, i); break; case 3: case 4: var r = rn; rn = Qr(t.stateNode.containerInfo), Yi(t, n, i), rn = r; break; case 22: t.memoizedState === null && (r = t.alternate, r !== null && r.memoizedState !== null ? (r = no, no = 16777216, Yi(t, n, i), no = r) : Yi(t, n, i)); break; default: Yi(t, n, i) } } function Ug(t) { var n = t.alternate; if (n !== null && (t = n.child, t !== null)) { n.child = null; do n = t.sibling, t.sibling = null, t = n; while (t !== null) } } function ao(t) { var n = t.deletions; if ((t.flags & 16) !== 0) { if (n !== null) for (var i = 0; i < n.length; i++) { var r = n[i]; ue = r, Pg(r, t) } Ug(t) } if (t.subtreeFlags & 10256) for (t = t.child; t !== null;)Hg(t), t = t.sibling } function Hg(t) { switch (t.tag) { case 0: case 11: case 15: ao(t), t.flags & 2048 && ha(9, t, t.return); break; case 3: ao(t); break; case 12: ao(t); break; case 22: var n = t.stateNode; t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, Lr(t)) : ao(t); break; default: ao(t) } } function Lr(t) { var n = t.deletions; if ((t.flags & 16) !== 0) { if (n !== null) for (var i = 0; i < n.length; i++) { var r = n[i]; ue = r, Pg(r, t) } Ug(t) } for (t = t.child; t !== null;) { switch (n = t, n.tag) { case 0: case 11: case 15: ha(8, n, n.return), Lr(n); break; case 22: i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, Lr(n)); break; default: Lr(n) }t = t.sibling } } function Pg(t, n) { for (; ue !== null;) { var i = ue; switch (i.tag) { case 0: case 11: case 15: ha(8, i, n); break; case 23: case 22: if (i.memoizedState !== null && i.memoizedState.cachePool !== null) { var r = i.memoizedState.cachePool.pool; r != null && r.refCount++ } break; case 24: Hs(i.memoizedState.cache) }if (r = i.child, r !== null) r.return = i, ue = r; else t: for (i = t; ue !== null;) { r = ue; var c = r.sibling, d = r.return; if (Og(r), r === i) { ue = null; break t } if (c !== null) { c.return = d, ue = c; break t } ue = d } } } var gw = { getCacheForType: function (t) { var n = he(It), i = n.data.get(t); return i === void 0 && (i = t(), n.data.set(t, i)), i }, cacheSignal: function () { return he(It).controller.signal } }, yw = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, Ut = null, wt = null, Tt = 0, zt = 0, He = null, ma = !1, Xi = !1, tf = !1, Xn = 0, Ft = 0, pa = 0, ai = 0, ef = 0, Pe = 0, Fi = 0, io = null, De = null, nf = !1, kr = 0, qg = 0, Br = 1 / 0, Ur = null, ga = null, ie = 0, ya = null, Ki = null, Fn = 0, af = 0, sf = null, Gg = null, so = 0, of = null; function qe() { return (jt & 2) !== 0 && Tt !== 0 ? Tt & -Tt : z.T !== null ? df() : sm() } function Yg() { if (Pe === 0) if ((Tt & 536870912) === 0 || Mt) { var t = Ko; Ko <<= 1, (Ko & 3932160) === 0 && (Ko = 262144), Pe = t } else Pe = 536870912; return t = Be.current, t !== null && (t.flags |= 32), Pe } function Oe(t, n, i) { (t === Ut && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Zi(t, 0), va(t, Tt, Pe, !1)), Ts(t, i), ((jt & 2) === 0 || t !== Ut) && (t === Ut && ((jt & 2) === 0 && (ai |= i), Ft === 4 && va(t, Tt, Pe, !1)), xn(t)) } function Xg(t, n, i) { if ((jt & 6) !== 0) throw Error(o(327)); var r = !i && (n & 127) === 0 && (n & t.expiredLanes) === 0 || As(t, n), c = r ? bw(t, n) : lf(t, n, !0), d = r; do { if (c === 0) { Xi && !r && va(t, n, 0, !1); break } else { if (i = t.current.alternate, d && !vw(i)) { c = lf(t, n, !1), d = !1; continue } if (c === 2) { if (d = n, t.errorRecoveryDisabledLanes & d) var v = 0; else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0; if (v !== 0) { n = v; t: { var E = t; c = io; var N = E.current.memoizedState.isDehydrated; if (N && (Zi(E, v).flags |= 256), v = lf(E, v, !1), v !== 2) { if (tf && !N) { E.errorRecoveryDisabledLanes |= d, ai |= d, c = 4; break t } d = De, De = c, d !== null && (De === null ? De = d : De.push.apply(De, d)) } c = v } if (d = !1, c !== 2) continue } } if (c === 1) { Zi(t, 0), va(t, n, 0, !0); break } t: { switch (r = t, d = c, d) { case 0: case 1: throw Error(o(345)); case 4: if ((n & 4194048) !== n) break; case 6: va(r, n, Pe, !ma); break t; case 2: De = null; break; case 3: case 5: break; default: throw Error(o(329)) }if ((n & 62914560) === n && (c = kr + 300 - _e(), 10 < c)) { if (va(r, n, Pe, !ma), Qo(r, 0, !0) !== 0) break t; Fn = n, r.timeoutHandle = Cy(Fg.bind(null, r, i, De, Ur, nf, n, Pe, ai, Fi, ma, d, "Throttled", -0, 0), c); break t } Fg(r, i, De, Ur, nf, n, Pe, ai, Fi, ma, d, null, -0, 0) } } break } while (!0); xn(t) } function Fg(t, n, i, r, c, d, v, E, N, B, Y, Z, P, G) { if (t.timeoutHandle = -1, Z = n.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) { Z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: On }, Bg(n, d, Z); var it = (d & 62914560) === d ? kr - _e() : (d & 4194048) === d ? qg - _e() : 0; if (it = nE(Z, it), it !== null) { Fn = d, t.cancelPendingCommit = it(ty.bind(null, t, n, d, i, r, c, v, E, N, Y, Z, null, P, G)), va(t, d, v, !B); return } } ty(t, n, d, i, r, c, v, E, N) } function vw(t) { for (var n = t; ;) { var i = n.tag; if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null))) for (var r = 0; r < i.length; r++) { var c = i[r], d = c.getSnapshot; c = c.value; try { if (!Le(d(), c)) return !1 } catch { return !1 } } if (i = n.child, n.subtreeFlags & 16384 && i !== null) i.return = n, n = i; else { if (n === t) break; for (; n.sibling === null;) { if (n.return === null || n.return === t) return !0; n = n.return } n.sibling.return = n.return, n = n.sibling } } return !0 } function va(t, n, i, r) { n &= ~ef, n &= ~ai, t.suspendedLanes |= n, t.pingedLanes &= ~n, r && (t.warmLanes |= n), r = t.expirationTimes; for (var c = n; 0 < c;) { var d = 31 - Ve(c), v = 1 << d; r[d] = -1, c &= ~v } i !== 0 && nm(t, i, n) } function Hr() { return (jt & 6) === 0 ? (oo(0), !1) : !0 } function rf() { if (wt !== null) { if (zt === 0) var t = wt.return; else t = wt, Vn = Za = null, Cu(t), Bi = null, qs = 0, t = wt; for (; t !== null;)wg(t.alternate, t), t = t.return; wt = null } } function Zi(t, n) { var i = t.timeoutHandle; i !== -1 && (t.timeoutHandle = -1, Bw(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), Fn = 0, rf(), Ut = t, wt = i = _n(t.current, null), Tt = n, zt = 0, He = null, ma = !1, Xi = As(t, n), tf = !1, Fi = Pe = ef = ai = pa = Ft = 0, De = io = null, nf = !1, (n & 8) !== 0 && (n |= n & 32); var r = t.entangledLanes; if (r !== 0) for (t = t.entanglements, r &= n; 0 < r;) { var c = 31 - Ve(r), d = 1 << c; n |= t[c], r &= ~d } return Xn = n, rr(), i } function Kg(t, n) { xt = null, z.H = Ws, n === ki || n === pr ? (n = cp(), zt = 3) : n === uu ? (n = cp(), zt = 4) : zt = n === Bu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, He = n, wt === null && (Ft = 1, Nr(t, Qe(n, t.current))) } function Zg() { var t = Be.current; return t === null ? !0 : (Tt & 4194048) === Tt ? Je === null : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0 ? t === Je : !1 } function Qg() { var t = z.H; return z.H = Ws, t === null ? Ws : t } function Wg() { var t = z.A; return z.A = gw, t } function Pr() { Ft = 4, ma || (Tt & 4194048) !== Tt && Be.current !== null || (Xi = !0), (pa & 134217727) === 0 && (ai & 134217727) === 0 || Ut === null || va(Ut, Tt, Pe, !1) } function lf(t, n, i) { var r = jt; jt |= 2; var c = Qg(), d = Wg(); (Ut !== t || Tt !== n) && (Ur = null, Zi(t, n)), n = !1; var v = Ft; t: do try { if (zt !== 0 && wt !== null) { var E = wt, N = He; switch (zt) { case 8: rf(), v = 6; break t; case 3: case 2: case 9: case 6: Be.current === null && (n = !0); var B = zt; if (zt = 0, He = null, Qi(t, E, N, B), i && Xi) { v = 0; break t } break; default: B = zt, zt = 0, He = null, Qi(t, E, N, B) } } xw(), v = Ft; break } catch (Y) { Kg(t, Y) } while (!0); return n && t.shellSuspendCounter++, Vn = Za = null, jt = r, z.H = c, z.A = d, wt === null && (Ut = null, Tt = 0, rr()), v } function xw() { for (; wt !== null;)Ig(wt) } function bw(t, n) { var i = jt; jt |= 2; var r = Qg(), c = Wg(); Ut !== t || Tt !== n ? (Ur = null, Br = _e() + 500, Zi(t, n)) : Xi = As(t, n); t: do try { if (zt !== 0 && wt !== null) { n = wt; var d = He; e: switch (zt) { case 1: zt = 0, He = null, Qi(t, n, d, 1); break; case 2: case 9: if (rp(d)) { zt = 0, He = null, $g(n); break } n = function () { zt !== 2 && zt !== 9 || Ut !== t || (zt = 7), xn(t) }, d.then(n, n); break t; case 3: zt = 7; break t; case 4: zt = 5; break t; case 7: rp(d) ? (zt = 0, He = null, $g(n)) : (zt = 0, He = null, Qi(t, n, d, 7)); break; case 5: var v = null; switch (wt.tag) { case 26: v = wt.memoizedState; case 5: case 27: var E = wt; if (v ? ky(v) : E.stateNode.complete) { zt = 0, He = null; var N = E.sibling; if (N !== null) wt = N; else { var B = E.return; B !== null ? (wt = B, qr(B)) : wt = null } break e } }zt = 0, He = null, Qi(t, n, d, 5); break; case 6: zt = 0, He = null, Qi(t, n, d, 6); break; case 8: rf(), Ft = 6; break t; default: throw Error(o(462)) } } Sw(); break } catch (Y) { Kg(t, Y) } while (!0); return Vn = Za = null, z.H = r, z.A = c, jt = i, wt !== null ? 0 : (Ut = null, Tt = 0, rr(), Ft) } function Sw() { for (; wt !== null && !YS();)Ig(wt) } function Ig(t) { var n = Sg(t.alternate, t, Xn); t.memoizedProps = t.pendingProps, n === null ? qr(t) : wt = n } function $g(t) { var n = t, i = n.alternate; switch (n.tag) { case 15: case 0: n = pg(i, n, n.pendingProps, n.type, void 0, Tt); break; case 11: n = pg(i, n, n.pendingProps, n.type.render, n.ref, Tt); break; case 5: Cu(n); default: wg(i, n), n = wt = Wm(n, Xn), n = Sg(i, n, Xn) }t.memoizedProps = t.pendingProps, n === null ? qr(t) : wt = n } function Qi(t, n, i, r) { Vn = Za = null, Cu(n), Bi = null, qs = 0; var c = n.return; try { if (cw(t, c, n, i, Tt)) { Ft = 1, Nr(t, Qe(i, t.current)), wt = null; return } } catch (d) { if (c !== null) throw wt = c, d; Ft = 1, Nr(t, Qe(i, t.current)), wt = null; return } n.flags & 32768 ? (Mt || r === 1 ? t = !0 : Xi || (Tt & 536870912) !== 0 ? t = !1 : (ma = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Be.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Jg(n, t)) : qr(n) } function qr(t) { var n = t; do { if ((n.flags & 32768) !== 0) { Jg(n, ma); return } t = n.return; var i = dw(n.alternate, n, Xn); if (i !== null) { wt = i; return } if (n = n.sibling, n !== null) { wt = n; return } wt = n = t } while (n !== null); Ft === 0 && (Ft = 5) } function Jg(t, n) { do { var i = hw(t.alternate, t); if (i !== null) { i.flags &= 32767, wt = i; return } if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (t = t.sibling, t !== null)) { wt = t; return } wt = t = i } while (t !== null); Ft = 6, wt = null } function ty(t, n, i, r, c, d, v, E, N) { t.cancelPendingCommit = null; do Gr(); while (ie !== 0); if ((jt & 6) !== 0) throw Error(o(327)); if (n !== null) { if (n === t.current) throw Error(o(177)); if (d = n.lanes | n.childLanes, d |= Qc, tC(t, i, d, v, E, N), t === Ut && (wt = Ut = null, Tt = 0), Ki = n, ya = t, Fn = i, af = d, sf = c, Gg = r, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Aw(Xo, function () { return sy(), null })) : (t.callbackNode = null, t.callbackPriority = 0), r = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || r) { r = z.T, z.T = null, c = Q.p, Q.p = 2, v = jt, jt |= 4; try { mw(t, n, i) } finally { jt = v, Q.p = c, z.T = r } } ie = 1, ey(), ny(), ay() } } function ey() { if (ie === 1) { ie = 0; var t = ya, n = Ki, i = (n.flags & 13878) !== 0; if ((n.subtreeFlags & 13878) !== 0 || i) { i = z.T, z.T = null; var r = Q.p; Q.p = 2; var c = jt; jt |= 4; try { Vg(n, t); var d = bf, v = Pm(t.containerInfo), E = d.focusedElem, N = d.selectionRange; if (v !== E && E && E.ownerDocument && Hm(E.ownerDocument.documentElement, E)) { if (N !== null && Yc(E)) { var B = N.start, Y = N.end; if (Y === void 0 && (Y = B), "selectionStart" in E) E.selectionStart = B, E.selectionEnd = Math.min(Y, E.value.length); else { var Z = E.ownerDocument || document, P = Z && Z.defaultView || window; if (P.getSelection) { var G = P.getSelection(), it = E.textContent.length, pt = Math.min(N.start, it), Bt = N.end === void 0 ? pt : Math.min(N.end, it); !G.extend && pt > Bt && (v = Bt, Bt = pt, pt = v); var V = Um(E, pt), j = Um(E, Bt); if (V && j && (G.rangeCount !== 1 || G.anchorNode !== V.node || G.anchorOffset !== V.offset || G.focusNode !== j.node || G.focusOffset !== j.offset)) { var k = Z.createRange(); k.setStart(V.node, V.offset), G.removeAllRanges(), pt > Bt ? (G.addRange(k), G.extend(j.node, j.offset)) : (k.setEnd(j.node, j.offset), G.addRange(k)) } } } } for (Z = [], G = E; G = G.parentNode;)G.nodeType === 1 && Z.push({ element: G, left: G.scrollLeft, top: G.scrollTop }); for (typeof E.focus == "function" && E.focus(), E = 0; E < Z.length; E++) { var F = Z[E]; F.element.scrollLeft = F.left, F.element.scrollTop = F.top } } el = !!xf, bf = xf = null } finally { jt = c, Q.p = r, z.T = i } } t.current = n, ie = 2 } } function ny() { if (ie === 2) { ie = 0; var t = ya, n = Ki, i = (n.flags & 8772) !== 0; if ((n.subtreeFlags & 8772) !== 0 || i) { i = z.T, z.T = null; var r = Q.p; Q.p = 2; var c = jt; jt |= 4; try { Dg(t, n.alternate, n) } finally { jt = c, Q.p = r, z.T = i } } ie = 3 } } function ay() { if (ie === 4 || ie === 3) { ie = 0, XS(); var t = ya, n = Ki, i = Fn, r = Gg; (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ie = 5 : (ie = 0, Ki = ya = null, iy(t, t.pendingLanes)); var c = t.pendingLanes; if (c === 0 && (ga = null), Ac(i), n = n.stateNode, ze && typeof ze.onCommitFiberRoot == "function") try { ze.onCommitFiberRoot(Es, n, void 0, (n.current.flags & 128) === 128) } catch { } if (r !== null) { n = z.T, c = Q.p, Q.p = 2, z.T = null; try { for (var d = t.onRecoverableError, v = 0; v < r.length; v++) { var E = r[v]; d(E.value, { componentStack: E.stack }) } } finally { z.T = n, Q.p = c } } (Fn & 3) !== 0 && Gr(), xn(t), c = t.pendingLanes, (i & 261930) !== 0 && (c & 42) !== 0 ? t === of ? so++ : (so = 0, of = t) : so = 0, oo(0) } } function iy(t, n) { (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, Hs(n))) } function Gr() { return ey(), ny(), ay(), sy() } function sy() { if (ie !== 5) return !1; var t = ya, n = af; af = 0; var i = Ac(Fn), r = z.T, c = Q.p; try { Q.p = 32 > i ? 32 : i, z.T = null, i = sf, sf = null; var d = ya, v = Fn; if (ie = 0, Ki = ya = null, Fn = 0, (jt & 6) !== 0) throw Error(o(331)); var E = jt; if (jt |= 4, Hg(d.current), kg(d, d.current, v, i), jt = E, oo(0, !1), ze && typeof ze.onPostCommitFiberRoot == "function") try { ze.onPostCommitFiberRoot(Es, d) } catch { } return !0 } finally { Q.p = c, z.T = r, iy(t, n) } } function oy(t, n, i) { n = Qe(i, n), n = ku(t.stateNode, n, 2), t = ua(t, n, 2), t !== null && (Ts(t, 2), xn(t)) } function Vt(t, n, i) { if (t.tag === 3) oy(t, t, i); else for (; n !== null;) { if (n.tag === 3) { oy(n, t, i); break } else if (n.tag === 1) { var r = n.stateNode; if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ga === null || !ga.has(r))) { t = Qe(i, t), i = rg(2), r = ua(n, i, 2), r !== null && (lg(i, r, n, t), Ts(r, 2), xn(r)); break } } n = n.return } } function cf(t, n, i) { var r = t.pingCache; if (r === null) { r = t.pingCache = new yw; var c = new Set; r.set(n, c) } else c = r.get(n), c === void 0 && (c = new Set, r.set(n, c)); c.has(i) || (tf = !0, c.add(i), t = Cw.bind(null, t, n, i), n.then(t, t)) } function Cw(t, n, i) { var r = t.pingCache; r !== null && r.delete(n), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Ut === t && (Tt & i) === i && (Ft === 4 || Ft === 3 && (Tt & 62914560) === Tt && 300 > _e() - kr ? (jt & 2) === 0 && Zi(t, 0) : ef |= i, Fi === Tt && (Fi = 0)), xn(t) } function ry(t, n) { n === 0 && (n = em()), t = Xa(t, n), t !== null && (Ts(t, n), xn(t)) } function ww(t) { var n = t.memoizedState, i = 0; n !== null && (i = n.retryLane), ry(t, i) } function Ew(t, n) { var i = 0; switch (t.tag) { case 31: case 13: var r = t.stateNode, c = t.memoizedState; c !== null && (i = c.retryLane); break; case 19: r = t.stateNode; break; case 22: r = t.stateNode._retryCache; break; default: throw Error(o(314)) }r !== null && r.delete(n), ry(t, i) } function Aw(t, n) { return Sc(t, n) } var Yr = null, Wi = null, uf = !1, Xr = !1, ff = !1, xa = 0; function xn(t) { t !== Wi && t.next === null && (Wi === null ? Yr = Wi = t : Wi = Wi.next = t), Xr = !0, uf || (uf = !0, Rw()) } function oo(t, n) { if (!ff && Xr) { ff = !0; do for (var i = !1, r = Yr; r !== null;) { if (t !== 0) { var c = r.pendingLanes; if (c === 0) var d = 0; else { var v = r.suspendedLanes, E = r.pingedLanes; d = (1 << 31 - Ve(42 | t) + 1) - 1, d &= c & ~(v & ~E), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0 } d !== 0 && (i = !0, fy(r, d)) } else d = Tt, d = Qo(r, r === Ut ? d : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (d & 3) === 0 || As(r, d) || (i = !0, fy(r, d)); r = r.next } while (i); ff = !1 } } function Tw() { ly() } function ly() { Xr = uf = !1; var t = 0; xa !== 0 && kw() && (t = xa); for (var n = _e(), i = null, r = Yr; r !== null;) { var c = r.next, d = cy(r, n); d === 0 ? (r.next = null, i === null ? Yr = c : i.next = c, c === null && (Wi = i)) : (i = r, (t !== 0 || (d & 3) !== 0) && (Xr = !0)), r = c } ie !== 0 && ie !== 5 || oo(t), xa !== 0 && (xa = 0) } function cy(t, n) { for (var i = t.suspendedLanes, r = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) { var v = 31 - Ve(d), E = 1 << v, N = c[v]; N === -1 ? ((E & i) === 0 || (E & r) !== 0) && (c[v] = JS(E, n)) : N <= n && (t.expiredLanes |= E), d &= ~E } if (n = Ut, i = Tt, i = Qo(t, t === n ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r = t.callbackNode, i === 0 || t === n && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) return r !== null && r !== null && Cc(r), t.callbackNode = null, t.callbackPriority = 0; if ((i & 3) === 0 || As(t, i)) { if (n = i & -i, n === t.callbackPriority) return n; switch (r !== null && Cc(r), Ac(i)) { case 2: case 8: i = Jh; break; case 32: i = Xo; break; case 268435456: i = tm; break; default: i = Xo }return r = uy.bind(null, t), i = Sc(i, r), t.callbackPriority = n, t.callbackNode = i, n } return r !== null && r !== null && Cc(r), t.callbackPriority = 2, t.callbackNode = null, 2 } function uy(t, n) { if (ie !== 0 && ie !== 5) return t.callbackNode = null, t.callbackPriority = 0, null; var i = t.callbackNode; if (Gr() && t.callbackNode !== i) return null; var r = Tt; return r = Qo(t, t === Ut ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r === 0 ? null : (Xg(t, r, n), cy(t, _e()), t.callbackNode != null && t.callbackNode === i ? uy.bind(null, t) : null) } function fy(t, n) { if (Gr()) return null; Xg(t, n, !0) } function Rw() { Uw(function () { (jt & 6) !== 0 ? Sc($h, Tw) : ly() }) } function df() { if (xa === 0) { var t = Vi; t === 0 && (t = Fo, Fo <<= 1, (Fo & 261888) === 0 && (Fo = 256)), xa = t } return xa } function dy(t) { return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Jo("" + t) } function hy(t, n) { var i = n.ownerDocument.createElement("input"); return i.name = n.name, i.value = n.value, t.id && i.setAttribute("form", t.id), n.parentNode.insertBefore(i, n), t = new FormData(t), i.parentNode.removeChild(i), t } function Mw(t, n, i, r, c) { if (n === "submit" && i && i.stateNode === c) { var d = dy((c[Ae] || null).action), v = r.submitter; v && (n = (n = v[Ae] || null) ? dy(n.formAction) : v.getAttribute("formAction"), n !== null && (d = n, v = null)); var E = new ar("action", "action", null, r, c); t.push({ event: E, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) { if (xa !== 0) { var N = v ? hy(c, v) : new FormData(c); Ou(i, { pending: !0, data: N, method: c.method, action: d }, null, N) } } else typeof d == "function" && (E.preventDefault(), N = v ? hy(c, v) : new FormData(c), Ou(i, { pending: !0, data: N, method: c.method, action: d }, d, N)) }, currentTarget: c }] }) } } for (var hf = 0; hf < Zc.length; hf++) { var mf = Zc[hf], Nw = mf.toLowerCase(), Dw = mf[0].toUpperCase() + mf.slice(1); on(Nw, "on" + Dw) } on(Ym, "onAnimationEnd"), on(Xm, "onAnimationIteration"), on(Fm, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(FC, "onTransitionRun"), on(KC, "onTransitionStart"), on(ZC, "onTransitionCancel"), on(Km, "onTransitionEnd"), Si("onMouseEnter", ["mouseout", "mouseover"]), Si("onMouseLeave", ["mouseout", "mouseover"]), Si("onPointerEnter", ["pointerout", "pointerover"]), Si("onPointerLeave", ["pointerout", "pointerover"]), Pa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ow = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro)); function my(t, n) { n = (n & 4) !== 0; for (var i = 0; i < t.length; i++) { var r = t[i], c = r.event; r = r.listeners; t: { var d = void 0; if (n) for (var v = r.length - 1; 0 <= v; v--) { var E = r[v], N = E.instance, B = E.currentTarget; if (E = E.listener, N !== d && c.isPropagationStopped()) break t; d = E, c.currentTarget = B; try { d(c) } catch (Y) { or(Y) } c.currentTarget = null, d = N } else for (v = 0; v < r.length; v++) { if (E = r[v], N = E.instance, B = E.currentTarget, E = E.listener, N !== d && c.isPropagationStopped()) break t; d = E, c.currentTarget = B; try { d(c) } catch (Y) { or(Y) } c.currentTarget = null, d = N } } } } function Et(t, n) { var i = n[Tc]; i === void 0 && (i = n[Tc] = new Set); var r = t + "__bubble"; i.has(r) || (py(n, t, 2, !1), i.add(r)) } function pf(t, n, i) { var r = 0; n && (r |= 4), py(i, t, r, n) } var Fr = "_reactListening" + Math.random().toString(36).slice(2); function gf(t) { if (!t[Fr]) { t[Fr] = !0, lm.forEach(function (i) { i !== "selectionchange" && (Ow.has(i) || pf(i, !1, t), pf(i, !0, t)) }); var n = t.nodeType === 9 ? t : t.ownerDocument; n === null || n[Fr] || (n[Fr] = !0, pf("selectionchange", !1, n)) } } function py(t, n, i, r) { switch (Yy(n)) { case 2: var c = sE; break; case 8: c = oE; break; default: c = Of }i = c.bind(null, n, i, t), c = void 0, !Vc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), r ? c !== void 0 ? t.addEventListener(n, i, { capture: !0, passive: c }) : t.addEventListener(n, i, !0) : c !== void 0 ? t.addEventListener(n, i, { passive: c }) : t.addEventListener(n, i, !1) } function yf(t, n, i, r, c) { var d = r; if ((n & 1) === 0 && (n & 2) === 0 && r !== null) t: for (; ;) { if (r === null) return; var v = r.tag; if (v === 3 || v === 4) { var E = r.stateNode.containerInfo; if (E === c) break; if (v === 4) for (v = r.return; v !== null;) { var N = v.tag; if ((N === 3 || N === 4) && v.stateNode.containerInfo === c) return; v = v.return } for (; E !== null;) { if (v = vi(E), v === null) return; if (N = v.tag, N === 5 || N === 6 || N === 26 || N === 27) { r = d = v; continue t } E = E.parentNode } } r = r.return } bm(function () { var B = d, Y = _c(i), Z = []; t: { var P = Zm.get(t); if (P !== void 0) { var G = ar, it = t; switch (t) { case "keypress": if (er(i) === 0) break t; case "keydown": case "keyup": G = EC; break; case "focusin": it = "focus", G = Uc; break; case "focusout": it = "blur", G = Uc; break; case "beforeblur": case "afterblur": G = Uc; break; case "click": if (i.button === 2) break t; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": G = wm; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": G = dC; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": G = RC; break; case Ym: case Xm: case Fm: G = pC; break; case Km: G = NC; break; case "scroll": case "scrollend": G = uC; break; case "wheel": G = OC; break; case "copy": case "cut": case "paste": G = yC; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": G = Am; break; case "toggle": case "beforetoggle": G = _C }var pt = (n & 4) !== 0, Bt = !pt && (t === "scroll" || t === "scrollend"), V = pt ? P !== null ? P + "Capture" : null : P; pt = []; for (var j = B, k; j !== null;) { var F = j; if (k = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || k === null || V === null || (F = Ns(j, V), F != null && pt.push(lo(j, F, k))), Bt) break; j = j.return } 0 < pt.length && (P = new G(P, it, null, i, Y), Z.push({ event: P, listeners: pt })) } } if ((n & 7) === 0) { t: { if (P = t === "mouseover" || t === "pointerover", G = t === "mouseout" || t === "pointerout", P && i !== jc && (it = i.relatedTarget || i.fromElement) && (vi(it) || it[yi])) break t; if ((G || P) && (P = Y.window === Y ? Y : (P = Y.ownerDocument) ? P.defaultView || P.parentWindow : window, G ? (it = i.relatedTarget || i.toElement, G = B, it = it ? vi(it) : null, it !== null && (Bt = u(it), pt = it.tag, it !== Bt || pt !== 5 && pt !== 27 && pt !== 6) && (it = null)) : (G = null, it = B), G !== it)) { if (pt = wm, F = "onMouseLeave", V = "onMouseEnter", j = "mouse", (t === "pointerout" || t === "pointerover") && (pt = Am, F = "onPointerLeave", V = "onPointerEnter", j = "pointer"), Bt = G == null ? P : Ms(G), k = it == null ? P : Ms(it), P = new pt(F, j + "leave", G, i, Y), P.target = Bt, P.relatedTarget = k, F = null, vi(Y) === B && (pt = new pt(V, j + "enter", it, i, Y), pt.target = k, pt.relatedTarget = Bt, F = pt), Bt = F, G && it) e: { for (pt = jw, V = G, j = it, k = 0, F = V; F; F = pt(F))k++; F = 0; for (var ft = j; ft; ft = pt(ft))F++; for (; 0 < k - F;)V = pt(V), k--; for (; 0 < F - k;)j = pt(j), F--; for (; k--;) { if (V === j || j !== null && V === j.alternate) { pt = V; break e } V = pt(V), j = pt(j) } pt = null } else pt = null; G !== null && gy(Z, P, G, pt, !1), it !== null && Bt !== null && gy(Z, Bt, it, pt, !0) } } t: { if (P = B ? Ms(B) : window, G = P.nodeName && P.nodeName.toLowerCase(), G === "select" || G === "input" && P.type === "file") var Dt = _m; else if (Om(P)) if (zm) Dt = GC; else { Dt = PC; var ct = HC } else G = P.nodeName, !G || G.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? B && Oc(B.elementType) && (Dt = _m) : Dt = qC; if (Dt && (Dt = Dt(t, B))) { jm(Z, Dt, i, Y); break t } ct && ct(t, P, B), t === "focusout" && B && P.type === "number" && B.memoizedProps.value != null && Dc(P, "number", P.value) } switch (ct = B ? Ms(B) : window, t) { case "focusin": (Om(ct) || ct.contentEditable === "true") && (Ri = ct, Xc = B, ks = null); break; case "focusout": ks = Xc = Ri = null; break; case "mousedown": Fc = !0; break; case "contextmenu": case "mouseup": case "dragend": Fc = !1, qm(Z, i, Y); break; case "selectionchange": if (XC) break; case "keydown": case "keyup": qm(Z, i, Y) }var St; if (Pc) t: { switch (t) { case "compositionstart": var Rt = "onCompositionStart"; break t; case "compositionend": Rt = "onCompositionEnd"; break t; case "compositionupdate": Rt = "onCompositionUpdate"; break t }Rt = void 0 } else Ti ? Nm(t, i) && (Rt = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Rt = "onCompositionStart"); Rt && (Tm && i.locale !== "ko" && (Ti || Rt !== "onCompositionStart" ? Rt === "onCompositionEnd" && Ti && (St = Sm()) : (aa = Y, Lc = "value" in aa ? aa.value : aa.textContent, Ti = !0)), ct = Kr(B, Rt), 0 < ct.length && (Rt = new Em(Rt, t, null, i, Y), Z.push({ event: Rt, listeners: ct }), St ? Rt.data = St : (St = Dm(i), St !== null && (Rt.data = St)))), (St = VC ? LC(t, i) : kC(t, i)) && (Rt = Kr(B, "onBeforeInput"), 0 < Rt.length && (ct = new Em("onBeforeInput", "beforeinput", null, i, Y), Z.push({ event: ct, listeners: Rt }), ct.data = St)), Mw(Z, t, B, i, Y) } my(Z, n) }) } function lo(t, n, i) { return { instance: t, listener: n, currentTarget: i } } function Kr(t, n) { for (var i = n + "Capture", r = []; t !== null;) { var c = t, d = c.stateNode; if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || d === null || (c = Ns(t, i), c != null && r.unshift(lo(t, c, d)), c = Ns(t, n), c != null && r.push(lo(t, c, d))), t.tag === 3) return r; t = t.return } return [] } function jw(t) { if (t === null) return null; do t = t.return; while (t && t.tag !== 5 && t.tag !== 27); return t || null } function gy(t, n, i, r, c) { for (var d = n._reactName, v = []; i !== null && i !== r;) { var E = i, N = E.alternate, B = E.stateNode; if (E = E.tag, N !== null && N === r) break; E !== 5 && E !== 26 && E !== 27 || B === null || (N = B, c ? (B = Ns(i, d), B != null && v.unshift(lo(i, B, N))) : c || (B = Ns(i, d), B != null && v.push(lo(i, B, N)))), i = i.return } v.length !== 0 && t.push({ event: n, listeners: v }) } var _w = /\r\n?/g, zw = /\u0000|\uFFFD/g; function yy(t) {
    return (typeof t == "string" ? t : "" + t).replace(_w, `
`).replace(zw, "")
  } function vy(t, n) { return n = yy(n), yy(t) === n } function kt(t, n, i, r, c, d) { switch (i) { case "children": typeof r == "string" ? n === "body" || n === "textarea" && r === "" || wi(t, r) : (typeof r == "number" || typeof r == "bigint") && n !== "body" && wi(t, "" + r); break; case "className": Io(t, "class", r); break; case "tabIndex": Io(t, "tabindex", r); break; case "dir": case "role": case "viewBox": case "width": case "height": Io(t, i, r); break; case "style": vm(t, r, d); break; case "data": if (n !== "object") { Io(t, "data", r); break } case "src": case "href": if (r === "" && (n !== "a" || i !== "href")) { t.removeAttribute(i); break } if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") { t.removeAttribute(i); break } r = Jo("" + r), t.setAttribute(i, r); break; case "action": case "formAction": if (typeof r == "function") { t.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof d == "function" && (i === "formAction" ? (n !== "input" && kt(t, n, "name", c.name, c, null), kt(t, n, "formEncType", c.formEncType, c, null), kt(t, n, "formMethod", c.formMethod, c, null), kt(t, n, "formTarget", c.formTarget, c, null)) : (kt(t, n, "encType", c.encType, c, null), kt(t, n, "method", c.method, c, null), kt(t, n, "target", c.target, c, null))); if (r == null || typeof r == "symbol" || typeof r == "boolean") { t.removeAttribute(i); break } r = Jo("" + r), t.setAttribute(i, r); break; case "onClick": r != null && (t.onclick = On); break; case "onScroll": r != null && Et("scroll", t); break; case "onScrollEnd": r != null && Et("scrollend", t); break; case "dangerouslySetInnerHTML": if (r != null) { if (typeof r != "object" || !("__html" in r)) throw Error(o(61)); if (i = r.__html, i != null) { if (c.children != null) throw Error(o(60)); t.innerHTML = i } } break; case "multiple": t.multiple = r && typeof r != "function" && typeof r != "symbol"; break; case "muted": t.muted = r && typeof r != "function" && typeof r != "symbol"; break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "defaultValue": case "defaultChecked": case "innerHTML": case "ref": break; case "autoFocus": break; case "xlinkHref": if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") { t.removeAttribute("xlink:href"); break } i = Jo("" + r), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i); break; case "contentEditable": case "spellCheck": case "draggable": case "value": case "autoReverse": case "externalResourcesRequired": case "focusable": case "preserveAlpha": r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "" + r) : t.removeAttribute(i); break; case "inert": case "allowFullScreen": case "async": case "autoPlay": case "controls": case "default": case "defer": case "disabled": case "disablePictureInPicture": case "disableRemotePlayback": case "formNoValidate": case "hidden": case "loop": case "noModule": case "noValidate": case "open": case "playsInline": case "readOnly": case "required": case "reversed": case "scoped": case "seamless": case "itemScope": r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i); break; case "capture": case "download": r === !0 ? t.setAttribute(i, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, r) : t.removeAttribute(i); break; case "cols": case "rows": case "size": case "span": r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(i, r) : t.removeAttribute(i); break; case "rowSpan": case "start": r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(i) : t.setAttribute(i, r); break; case "popover": Et("beforetoggle", t), Et("toggle", t), Wo(t, "popover", r); break; case "xlinkActuate": Dn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r); break; case "xlinkArcrole": Dn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r); break; case "xlinkRole": Dn(t, "http://www.w3.org/1999/xlink", "xlink:role", r); break; case "xlinkShow": Dn(t, "http://www.w3.org/1999/xlink", "xlink:show", r); break; case "xlinkTitle": Dn(t, "http://www.w3.org/1999/xlink", "xlink:title", r); break; case "xlinkType": Dn(t, "http://www.w3.org/1999/xlink", "xlink:type", r); break; case "xmlBase": Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r); break; case "xmlLang": Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r); break; case "xmlSpace": Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r); break; case "is": Wo(t, "is", r); break; case "innerText": case "textContent": break; default: (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = lC.get(i) || i, Wo(t, i, r)) } } function vf(t, n, i, r, c, d) { switch (i) { case "style": vm(t, r, d); break; case "dangerouslySetInnerHTML": if (r != null) { if (typeof r != "object" || !("__html" in r)) throw Error(o(61)); if (i = r.__html, i != null) { if (c.children != null) throw Error(o(60)); t.innerHTML = i } } break; case "children": typeof r == "string" ? wi(t, r) : (typeof r == "number" || typeof r == "bigint") && wi(t, "" + r); break; case "onScroll": r != null && Et("scroll", t); break; case "onScrollEnd": r != null && Et("scrollend", t); break; case "onClick": r != null && (t.onclick = On); break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "innerHTML": case "ref": break; case "innerText": case "textContent": break; default: if (!cm.hasOwnProperty(i)) t: { if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), d = t[Ae] || null, d = d != null ? d[i] : null, typeof d == "function" && t.removeEventListener(n, d, c), typeof r == "function")) { typeof d != "function" && d !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(n, r, c); break t } i in t ? t[i] = r : r === !0 ? t.setAttribute(i, "") : Wo(t, i, r) } } } function pe(t, n, i) { switch (n) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "img": Et("error", t), Et("load", t); var r = !1, c = !1, d; for (d in i) if (i.hasOwnProperty(d)) { var v = i[d]; if (v != null) switch (d) { case "src": r = !0; break; case "srcSet": c = !0; break; case "children": case "dangerouslySetInnerHTML": throw Error(o(137, n)); default: kt(t, n, d, v, i, null) } } c && kt(t, n, "srcSet", i.srcSet, i, null), r && kt(t, n, "src", i.src, i, null); return; case "input": Et("invalid", t); var E = d = v = c = null, N = null, B = null; for (r in i) if (i.hasOwnProperty(r)) { var Y = i[r]; if (Y != null) switch (r) { case "name": c = Y; break; case "type": v = Y; break; case "checked": N = Y; break; case "defaultChecked": B = Y; break; case "value": d = Y; break; case "defaultValue": E = Y; break; case "children": case "dangerouslySetInnerHTML": if (Y != null) throw Error(o(137, n)); break; default: kt(t, n, r, Y, i, null) } } mm(t, d, E, N, B, v, c, !1); return; case "select": Et("invalid", t), r = v = d = null; for (c in i) if (i.hasOwnProperty(c) && (E = i[c], E != null)) switch (c) { case "value": d = E; break; case "defaultValue": v = E; break; case "multiple": r = E; default: kt(t, n, c, E, i, null) }n = d, i = v, t.multiple = !!r, n != null ? Ci(t, !!r, n, !1) : i != null && Ci(t, !!r, i, !0); return; case "textarea": Et("invalid", t), d = c = r = null; for (v in i) if (i.hasOwnProperty(v) && (E = i[v], E != null)) switch (v) { case "value": r = E; break; case "defaultValue": c = E; break; case "children": d = E; break; case "dangerouslySetInnerHTML": if (E != null) throw Error(o(91)); break; default: kt(t, n, v, E, i, null) }gm(t, r, c, d); return; case "option": for (N in i) i.hasOwnProperty(N) && (r = i[N], r != null) && (N === "selected" ? t.selected = r && typeof r != "function" && typeof r != "symbol" : kt(t, n, N, r, i, null)); return; case "dialog": Et("beforetoggle", t), Et("toggle", t), Et("cancel", t), Et("close", t); break; case "iframe": case "object": Et("load", t); break; case "video": case "audio": for (r = 0; r < ro.length; r++)Et(ro[r], t); break; case "image": Et("error", t), Et("load", t); break; case "details": Et("toggle", t); break; case "embed": case "source": case "link": Et("error", t), Et("load", t); case "area": case "base": case "br": case "col": case "hr": case "keygen": case "meta": case "param": case "track": case "wbr": case "menuitem": for (B in i) if (i.hasOwnProperty(B) && (r = i[B], r != null)) switch (B) { case "children": case "dangerouslySetInnerHTML": throw Error(o(137, n)); default: kt(t, n, B, r, i, null) }return; default: if (Oc(n)) { for (Y in i) i.hasOwnProperty(Y) && (r = i[Y], r !== void 0 && vf(t, n, Y, r, i, void 0)); return } }for (E in i) i.hasOwnProperty(E) && (r = i[E], r != null && kt(t, n, E, r, i, null)) } function Vw(t, n, i, r) { switch (n) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "input": var c = null, d = null, v = null, E = null, N = null, B = null, Y = null; for (G in i) { var Z = i[G]; if (i.hasOwnProperty(G) && Z != null) switch (G) { case "checked": break; case "value": break; case "defaultValue": N = Z; default: r.hasOwnProperty(G) || kt(t, n, G, null, r, Z) } } for (var P in r) { var G = r[P]; if (Z = i[P], r.hasOwnProperty(P) && (G != null || Z != null)) switch (P) { case "type": d = G; break; case "name": c = G; break; case "checked": B = G; break; case "defaultChecked": Y = G; break; case "value": v = G; break; case "defaultValue": E = G; break; case "children": case "dangerouslySetInnerHTML": if (G != null) throw Error(o(137, n)); break; default: G !== Z && kt(t, n, P, G, r, Z) } } Nc(t, v, E, N, B, Y, d, c); return; case "select": G = v = E = P = null; for (d in i) if (N = i[d], i.hasOwnProperty(d) && N != null) switch (d) { case "value": break; case "multiple": G = N; default: r.hasOwnProperty(d) || kt(t, n, d, null, r, N) }for (c in r) if (d = r[c], N = i[c], r.hasOwnProperty(c) && (d != null || N != null)) switch (c) { case "value": P = d; break; case "defaultValue": E = d; break; case "multiple": v = d; default: d !== N && kt(t, n, c, d, r, N) }n = E, i = v, r = G, P != null ? Ci(t, !!i, P, !1) : !!r != !!i && (n != null ? Ci(t, !!i, n, !0) : Ci(t, !!i, i ? [] : "", !1)); return; case "textarea": G = P = null; for (E in i) if (c = i[E], i.hasOwnProperty(E) && c != null && !r.hasOwnProperty(E)) switch (E) { case "value": break; case "children": break; default: kt(t, n, E, null, r, c) }for (v in r) if (c = r[v], d = i[v], r.hasOwnProperty(v) && (c != null || d != null)) switch (v) { case "value": P = c; break; case "defaultValue": G = c; break; case "children": break; case "dangerouslySetInnerHTML": if (c != null) throw Error(o(91)); break; default: c !== d && kt(t, n, v, c, r, d) }pm(t, P, G); return; case "option": for (var it in i) P = i[it], i.hasOwnProperty(it) && P != null && !r.hasOwnProperty(it) && (it === "selected" ? t.selected = !1 : kt(t, n, it, null, r, P)); for (N in r) P = r[N], G = i[N], r.hasOwnProperty(N) && P !== G && (P != null || G != null) && (N === "selected" ? t.selected = P && typeof P != "function" && typeof P != "symbol" : kt(t, n, N, P, r, G)); return; case "img": case "link": case "area": case "base": case "br": case "col": case "embed": case "hr": case "keygen": case "meta": case "param": case "source": case "track": case "wbr": case "menuitem": for (var pt in i) P = i[pt], i.hasOwnProperty(pt) && P != null && !r.hasOwnProperty(pt) && kt(t, n, pt, null, r, P); for (B in r) if (P = r[B], G = i[B], r.hasOwnProperty(B) && P !== G && (P != null || G != null)) switch (B) { case "children": case "dangerouslySetInnerHTML": if (P != null) throw Error(o(137, n)); break; default: kt(t, n, B, P, r, G) }return; default: if (Oc(n)) { for (var Bt in i) P = i[Bt], i.hasOwnProperty(Bt) && P !== void 0 && !r.hasOwnProperty(Bt) && vf(t, n, Bt, void 0, r, P); for (Y in r) P = r[Y], G = i[Y], !r.hasOwnProperty(Y) || P === G || P === void 0 && G === void 0 || vf(t, n, Y, P, r, G); return } }for (var V in i) P = i[V], i.hasOwnProperty(V) && P != null && !r.hasOwnProperty(V) && kt(t, n, V, null, r, P); for (Z in r) P = r[Z], G = i[Z], !r.hasOwnProperty(Z) || P === G || P == null && G == null || kt(t, n, Z, P, r, G) } function xy(t) { switch (t) { case "css": case "script": case "font": case "img": case "image": case "input": case "link": return !0; default: return !1 } } function Lw() { if (typeof performance.getEntriesByType == "function") { for (var t = 0, n = 0, i = performance.getEntriesByType("resource"), r = 0; r < i.length; r++) { var c = i[r], d = c.transferSize, v = c.initiatorType, E = c.duration; if (d && E && xy(v)) { for (v = 0, E = c.responseEnd, r += 1; r < i.length; r++) { var N = i[r], B = N.startTime; if (B > E) break; var Y = N.transferSize, Z = N.initiatorType; Y && xy(Z) && (N = N.responseEnd, v += Y * (N < E ? 1 : (E - B) / (N - B))) } if (--r, n += 8 * (d + v) / (c.duration / 1e3), t++, 10 < t) break } } if (0 < t) return n / t / 1e6 } return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5 } var xf = null, bf = null; function Zr(t) { return t.nodeType === 9 ? t : t.ownerDocument } function by(t) { switch (t) { case "http://www.w3.org/2000/svg": return 1; case "http://www.w3.org/1998/Math/MathML": return 2; default: return 0 } } function Sy(t, n) { if (t === 0) switch (n) { case "svg": return 1; case "math": return 2; default: return 0 }return t === 1 && n === "foreignObject" ? 0 : t } function Sf(t, n) { return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null } var Cf = null; function kw() { var t = window.event; return t && t.type === "popstate" ? t === Cf ? !1 : (Cf = t, !0) : (Cf = null, !1) } var Cy = typeof setTimeout == "function" ? setTimeout : void 0, Bw = typeof clearTimeout == "function" ? clearTimeout : void 0, wy = typeof Promise == "function" ? Promise : void 0, Uw = typeof queueMicrotask == "function" ? queueMicrotask : typeof wy < "u" ? function (t) { return wy.resolve(null).then(t).catch(Hw) } : Cy; function Hw(t) { setTimeout(function () { throw t }) } function ba(t) { return t === "head" } function Ey(t, n) { var i = n, r = 0; do { var c = i.nextSibling; if (t.removeChild(i), c && c.nodeType === 8) if (i = c.data, i === "/$" || i === "/&") { if (r === 0) { t.removeChild(c), ts(n); return } r-- } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") r++; else if (i === "html") co(t.ownerDocument.documentElement); else if (i === "head") { i = t.ownerDocument.head, co(i); for (var d = i.firstChild; d;) { var v = d.nextSibling, E = d.nodeName; d[Rs] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && d.rel.toLowerCase() === "stylesheet" || i.removeChild(d), d = v } } else i === "body" && co(t.ownerDocument.body); i = c } while (i); ts(n) } function Ay(t, n) { var i = t; t = 0; do { var r = i.nextSibling; if (i.nodeType === 1 ? n ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (n ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), r && r.nodeType === 8) if (i = r.data, i === "/$") { if (t === 0) break; t-- } else i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || t++; i = r } while (i) } function wf(t) { var n = t.firstChild; for (n && n.nodeType === 10 && (n = n.nextSibling); n;) { var i = n; switch (n = n.nextSibling, i.nodeName) { case "HTML": case "HEAD": case "BODY": wf(i), Rc(i); continue; case "SCRIPT": case "STYLE": continue; case "LINK": if (i.rel.toLowerCase() === "stylesheet") continue }t.removeChild(i) } } function Pw(t, n, i, r) { for (; t.nodeType === 1;) { var c = i; if (t.nodeName.toLowerCase() !== n.toLowerCase()) { if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break } else if (r) { if (!t[Rs]) switch (n) { case "meta": if (!t.hasAttribute("itemprop")) break; return t; case "link": if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence")) break; if (d !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null : c.title)) break; return t; case "style": if (t.hasAttribute("data-precedence")) break; return t; case "script": if (d = t.getAttribute("src"), (d !== (c.src == null ? null : c.src) || t.getAttribute("type") !== (c.type == null ? null : c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break; return t; default: return t } } else if (n === "input" && t.type === "hidden") { var d = c.name == null ? null : "" + c.name; if (c.type === "hidden" && t.getAttribute("name") === d) return t } else return t; if (t = tn(t.nextSibling), t === null) break } return null } function qw(t, n, i) { if (n === "") return null; for (; t.nodeType !== 3;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = tn(t.nextSibling), t === null)) return null; return t } function Ty(t, n) { for (; t.nodeType !== 8;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = tn(t.nextSibling), t === null)) return null; return t } function Ef(t) { return t.data === "$?" || t.data === "$~" } function Af(t) { return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading" } function Gw(t, n) { var i = t.ownerDocument; if (t.data === "$~") t._reactRetry = n; else if (t.data !== "$?" || i.readyState !== "loading") n(); else { var r = function () { n(), i.removeEventListener("DOMContentLoaded", r) }; i.addEventListener("DOMContentLoaded", r), t._reactRetry = r } } function tn(t) { for (; t != null; t = t.nextSibling) { var n = t.nodeType; if (n === 1 || n === 3) break; if (n === 8) { if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break; if (n === "/$" || n === "/&") return null } } return t } var Tf = null; function Ry(t) { t = t.nextSibling; for (var n = 0; t;) { if (t.nodeType === 8) { var i = t.data; if (i === "/$" || i === "/&") { if (n === 0) return tn(t.nextSibling); n-- } else i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || n++ } t = t.nextSibling } return null } function My(t) { t = t.previousSibling; for (var n = 0; t;) { if (t.nodeType === 8) { var i = t.data; if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") { if (n === 0) return t; n-- } else i !== "/$" && i !== "/&" || n++ } t = t.previousSibling } return null } function Ny(t, n, i) { switch (n = Zr(i), t) { case "html": if (t = n.documentElement, !t) throw Error(o(452)); return t; case "head": if (t = n.head, !t) throw Error(o(453)); return t; case "body": if (t = n.body, !t) throw Error(o(454)); return t; default: throw Error(o(451)) } } function co(t) { for (var n = t.attributes; n.length;)t.removeAttributeNode(n[0]); Rc(t) } var en = new Map, Dy = new Set; function Qr(t) { return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument } var Kn = Q.d; Q.d = { f: Yw, r: Xw, D: Fw, C: Kw, L: Zw, m: Qw, X: Iw, S: Ww, M: $w }; function Yw() { var t = Kn.f(), n = Hr(); return t || n } function Xw(t) { var n = xi(t); n !== null && n.tag === 5 && n.type === "form" ? Kp(n) : Kn.r(t) } var Ii = typeof document > "u" ? null : document; function Oy(t, n, i) { var r = Ii; if (r && typeof n == "string" && n) { var c = Ke(n); c = 'link[rel="' + t + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Dy.has(c) || (Dy.add(c), t = { rel: t, crossOrigin: i, href: n }, r.querySelector(c) === null && (n = r.createElement("link"), pe(n, "link", t), ce(n), r.head.appendChild(n))) } } function Fw(t) { Kn.D(t), Oy("dns-prefetch", t, null) } function Kw(t, n) { Kn.C(t, n), Oy("preconnect", t, n) } function Zw(t, n, i) { Kn.L(t, n, i); var r = Ii; if (r && t && n) { var c = 'link[rel="preload"][as="' + Ke(n) + '"]'; n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + Ke(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + Ke(i.imageSizes) + '"]')) : c += '[href="' + Ke(t) + '"]'; var d = c; switch (n) { case "style": d = $i(t); break; case "script": d = Ji(t) }en.has(d) || (t = y({ rel: "preload", href: n === "image" && i && i.imageSrcSet ? void 0 : t, as: n }, i), en.set(d, t), r.querySelector(c) !== null || n === "style" && r.querySelector(uo(d)) || n === "script" && r.querySelector(fo(d)) || (n = r.createElement("link"), pe(n, "link", t), ce(n), r.head.appendChild(n))) } } function Qw(t, n) { Kn.m(t, n); var i = Ii; if (i && t) { var r = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Ke(r) + '"][href="' + Ke(t) + '"]', d = c; switch (r) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": d = Ji(t) }if (!en.has(d) && (t = y({ rel: "modulepreload", href: t }, n), en.set(d, t), i.querySelector(c) === null)) { switch (r) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": if (i.querySelector(fo(d))) return }r = i.createElement("link"), pe(r, "link", t), ce(r), i.head.appendChild(r) } } } function Ww(t, n, i) { Kn.S(t, n, i); var r = Ii; if (r && t) { var c = bi(r).hoistableStyles, d = $i(t); n = n || "default"; var v = c.get(d); if (!v) { var E = { loading: 0, preload: null }; if (v = r.querySelector(uo(d))) E.loading = 5; else { t = y({ rel: "stylesheet", href: t, "data-precedence": n }, i), (i = en.get(d)) && Rf(t, i); var N = v = r.createElement("link"); ce(N), pe(N, "link", t), N._p = new Promise(function (B, Y) { N.onload = B, N.onerror = Y }), N.addEventListener("load", function () { E.loading |= 1 }), N.addEventListener("error", function () { E.loading |= 2 }), E.loading |= 4, Wr(v, n, r) } v = { type: "stylesheet", instance: v, count: 1, state: E }, c.set(d, v) } } } function Iw(t, n) { Kn.X(t, n); var i = Ii; if (i && t) { var r = bi(i).hoistableScripts, c = Ji(t), d = r.get(c); d || (d = i.querySelector(fo(c)), d || (t = y({ src: t, async: !0 }, n), (n = en.get(c)) && Mf(t, n), d = i.createElement("script"), ce(d), pe(d, "link", t), i.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(c, d)) } } function $w(t, n) { Kn.M(t, n); var i = Ii; if (i && t) { var r = bi(i).hoistableScripts, c = Ji(t), d = r.get(c); d || (d = i.querySelector(fo(c)), d || (t = y({ src: t, async: !0, type: "module" }, n), (n = en.get(c)) && Mf(t, n), d = i.createElement("script"), ce(d), pe(d, "link", t), i.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(c, d)) } } function jy(t, n, i, r) { var c = (c = gt.current) ? Qr(c) : null; if (!c) throw Error(o(446)); switch (t) { case "meta": case "title": return null; case "style": return typeof i.precedence == "string" && typeof i.href == "string" ? (n = $i(i.href), i = bi(c).hoistableStyles, r = i.get(n), r || (r = { type: "style", instance: null, count: 0, state: null }, i.set(n, r)), r) : { type: "void", instance: null, count: 0, state: null }; case "link": if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") { t = $i(i.href); var d = bi(c).hoistableStyles, v = d.get(t); if (v || (c = c.ownerDocument || c, v = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(t, v), (d = c.querySelector(uo(t))) && !d._p && (v.instance = d, v.state.loading = 5), en.has(t) || (i = { rel: "preload", as: "style", href: i.href, crossOrigin: i.crossOrigin, integrity: i.integrity, media: i.media, hrefLang: i.hrefLang, referrerPolicy: i.referrerPolicy }, en.set(t, i), d || Jw(c, t, i, v.state))), n && r === null) throw Error(o(528, "")); return v } if (n && r !== null) throw Error(o(529, "")); return null; case "script": return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ji(i), i = bi(c).hoistableScripts, r = i.get(n), r || (r = { type: "script", instance: null, count: 0, state: null }, i.set(n, r)), r) : { type: "void", instance: null, count: 0, state: null }; default: throw Error(o(444, t)) } } function $i(t) { return 'href="' + Ke(t) + '"' } function uo(t) { return 'link[rel="stylesheet"][' + t + "]" } function _y(t) { return y({}, t, { "data-precedence": t.precedence, precedence: null }) } function Jw(t, n, i, r) { t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? r.loading = 1 : (n = t.createElement("link"), r.preload = n, n.addEventListener("load", function () { return r.loading |= 1 }), n.addEventListener("error", function () { return r.loading |= 2 }), pe(n, "link", i), ce(n), t.head.appendChild(n)) } function Ji(t) { return '[src="' + Ke(t) + '"]' } function fo(t) { return "script[async]" + t } function zy(t, n, i) { if (n.count++, n.instance === null) switch (n.type) { case "style": var r = t.querySelector('style[data-href~="' + Ke(i.href) + '"]'); if (r) return n.instance = r, ce(r), r; var c = y({}, i, { "data-href": i.href, "data-precedence": i.precedence, href: null, precedence: null }); return r = (t.ownerDocument || t).createElement("style"), ce(r), pe(r, "style", c), Wr(r, i.precedence, t), n.instance = r; case "stylesheet": c = $i(i.href); var d = t.querySelector(uo(c)); if (d) return n.state.loading |= 4, n.instance = d, ce(d), d; r = _y(i), (c = en.get(c)) && Rf(r, c), d = (t.ownerDocument || t).createElement("link"), ce(d); var v = d; return v._p = new Promise(function (E, N) { v.onload = E, v.onerror = N }), pe(d, "link", r), n.state.loading |= 4, Wr(d, i.precedence, t), n.instance = d; case "script": return d = Ji(i.src), (c = t.querySelector(fo(d))) ? (n.instance = c, ce(c), c) : (r = i, (c = en.get(d)) && (r = y({}, i), Mf(r, c)), t = t.ownerDocument || t, c = t.createElement("script"), ce(c), pe(c, "link", r), t.head.appendChild(c), n.instance = c); case "void": return null; default: throw Error(o(443, n.type)) } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (r = n.instance, n.state.loading |= 4, Wr(r, i.precedence, t)); return n.instance } function Wr(t, n, i) { for (var r = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = r.length ? r[r.length - 1] : null, d = c, v = 0; v < r.length; v++) { var E = r[v]; if (E.dataset.precedence === n) d = E; else if (d !== c) break } d ? d.parentNode.insertBefore(t, d.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(t, n.firstChild)) } function Rf(t, n) { t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title) } function Mf(t, n) { t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity) } var Ir = null; function Vy(t, n, i) { if (Ir === null) { var r = new Map, c = Ir = new Map; c.set(i, r) } else c = Ir, r = c.get(i), r || (r = new Map, c.set(i, r)); if (r.has(t)) return r; for (r.set(t, null), i = i.getElementsByTagName(t), c = 0; c < i.length; c++) { var d = i[c]; if (!(d[Rs] || d[fe] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") { var v = d.getAttribute(n) || ""; v = t + v; var E = r.get(v); E ? E.push(d) : r.set(v, [d]) } } return r } function Ly(t, n, i) { t = t.ownerDocument || t, t.head.insertBefore(i, n === "title" ? t.querySelector("head > title") : null) } function tE(t, n, i) { if (i === 1 || n.itemProp != null) return !1; switch (t) { case "meta": case "title": return !0; case "style": if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break; return !0; case "link": if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break; return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0; case "script": if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0 }return !1 } function ky(t) { return !(t.type === "stylesheet" && (t.state.loading & 3) === 0) } function eE(t, n, i, r) { if (i.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (i.state.loading & 4) === 0) { if (i.instance === null) { var c = $i(r.href), d = n.querySelector(uo(c)); if (d) { n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = $r.bind(t), n.then(t, t)), i.state.loading |= 4, i.instance = d, ce(d); return } d = n.ownerDocument || n, r = _y(r), (c = en.get(c)) && Rf(r, c), d = d.createElement("link"), ce(d); var v = d; v._p = new Promise(function (E, N) { v.onload = E, v.onerror = N }), pe(d, "link", r), i.instance = d } t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(i, n), (n = i.state.preload) && (i.state.loading & 3) === 0 && (t.count++, i = $r.bind(t), n.addEventListener("load", i), n.addEventListener("error", i)) } } var Nf = 0; function nE(t, n) { return t.stylesheets && t.count === 0 && tl(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (i) { var r = setTimeout(function () { if (t.stylesheets && tl(t, t.stylesheets), t.unsuspend) { var d = t.unsuspend; t.unsuspend = null, d() } }, 6e4 + n); 0 < t.imgBytes && Nf === 0 && (Nf = 62500 * Lw()); var c = setTimeout(function () { if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tl(t, t.stylesheets), t.unsuspend)) { var d = t.unsuspend; t.unsuspend = null, d() } }, (t.imgBytes > Nf ? 50 : 800) + n); return t.unsuspend = i, function () { t.unsuspend = null, clearTimeout(r), clearTimeout(c) } } : null } function $r() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) { if (this.stylesheets) tl(this, this.stylesheets); else if (this.unsuspend) { var t = this.unsuspend; this.unsuspend = null, t() } } } var Jr = null; function tl(t, n) { t.stylesheets = null, t.unsuspend !== null && (t.count++, Jr = new Map, n.forEach(aE, t), Jr = null, $r.call(t)) } function aE(t, n) { if (!(n.state.loading & 4)) { var i = Jr.get(t); if (i) var r = i.get(null); else { i = new Map, Jr.set(t, i); for (var c = t.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < c.length; d++) { var v = c[d]; (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (i.set(v.dataset.precedence, v), r = v) } r && i.set(null, r) } c = n.instance, v = c.getAttribute("data-precedence"), d = i.get(v) || r, d === r && i.set(null, c), i.set(v, c), this.count++, r = $r.bind(this), c.addEventListener("load", r), c.addEventListener("error", r), d ? d.parentNode.insertBefore(c, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(c, t.firstChild)), n.state.loading |= 4 } } var ho = { $$typeof: D, Provider: null, Consumer: null, _currentValue: L, _currentValue2: L, _threadCount: 0 }; function iE(t, n, i, r, c, d, v, E, N) { this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wc(0), this.hiddenUpdates = wc(null), this.identifierPrefix = r, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = new Map } function By(t, n, i, r, c, d, v, E, N, B, Y, Z) { return t = new iE(t, n, i, v, N, B, Y, Z, E), n = 1, d === !0 && (n |= 24), d = ke(3, null, null, n), t.current = d, d.stateNode = t, n = ru(), n.refCount++, t.pooledCache = n, n.refCount++, d.memoizedState = { element: r, isDehydrated: i, cache: n }, fu(d), t } function Uy(t) { return t ? (t = Di, t) : Di } function Hy(t, n, i, r, c, d) { c = Uy(c), r.context === null ? r.context = c : r.pendingContext = c, r = ca(n), r.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (r.callback = d), i = ua(t, r, n), i !== null && (Oe(i, t, n), Ys(i, t, n)) } function Py(t, n) { if (t = t.memoizedState, t !== null && t.dehydrated !== null) { var i = t.retryLane; t.retryLane = i !== 0 && i < n ? i : n } } function Df(t, n) { Py(t, n), (t = t.alternate) && Py(t, n) } function qy(t) { if (t.tag === 13 || t.tag === 31) { var n = Xa(t, 67108864); n !== null && Oe(n, t, 67108864), Df(t, 67108864) } } function Gy(t) { if (t.tag === 13 || t.tag === 31) { var n = qe(); n = Ec(n); var i = Xa(t, n); i !== null && Oe(i, t, n), Df(t, n) } } var el = !0; function sE(t, n, i, r) { var c = z.T; z.T = null; var d = Q.p; try { Q.p = 2, Of(t, n, i, r) } finally { Q.p = d, z.T = c } } function oE(t, n, i, r) { var c = z.T; z.T = null; var d = Q.p; try { Q.p = 8, Of(t, n, i, r) } finally { Q.p = d, z.T = c } } function Of(t, n, i, r) { if (el) { var c = jf(r); if (c === null) yf(t, n, r, nl, i), Xy(t, r); else if (lE(c, t, n, i, r)) r.stopPropagation(); else if (Xy(t, r), n & 4 && -1 < rE.indexOf(t)) { for (; c !== null;) { var d = xi(c); if (d !== null) switch (d.tag) { case 3: if (d = d.stateNode, d.current.memoizedState.isDehydrated) { var v = Ha(d.pendingLanes); if (v !== 0) { var E = d; for (E.pendingLanes |= 2, E.entangledLanes |= 2; v;) { var N = 1 << 31 - Ve(v); E.entanglements[1] |= N, v &= ~N } xn(d), (jt & 6) === 0 && (Br = _e() + 500, oo(0)) } } break; case 31: case 13: E = Xa(d, 2), E !== null && Oe(E, d, 2), Hr(), Df(d, 2) }if (d = jf(r), d === null && yf(t, n, r, nl, i), d === c) break; c = d } c !== null && r.stopPropagation() } else yf(t, n, r, null, i) } } function jf(t) { return t = _c(t), _f(t) } var nl = null; function _f(t) { if (nl = null, t = vi(t), t !== null) { var n = u(t); if (n === null) t = null; else { var i = n.tag; if (i === 13) { if (t = f(n), t !== null) return t; t = null } else if (i === 31) { if (t = h(n), t !== null) return t; t = null } else if (i === 3) { if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null; t = null } else n !== t && (t = null) } } return nl = t, null } function Yy(t) { switch (t) { case "beforetoggle": case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "toggle": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 2; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 8; case "message": switch (FS()) { case $h: return 2; case Jh: return 8; case Xo: case KS: return 32; case tm: return 268435456; default: return 32 }default: return 32 } } var zf = !1, Sa = null, Ca = null, wa = null, mo = new Map, po = new Map, Ea = [], rE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function Xy(t, n) { switch (t) { case "focusin": case "focusout": Sa = null; break; case "dragenter": case "dragleave": Ca = null; break; case "mouseover": case "mouseout": wa = null; break; case "pointerover": case "pointerout": mo.delete(n.pointerId); break; case "gotpointercapture": case "lostpointercapture": po.delete(n.pointerId) } } function go(t, n, i, r, c, d) { return t === null || t.nativeEvent !== d ? (t = { blockedOn: n, domEventName: i, eventSystemFlags: r, nativeEvent: d, targetContainers: [c] }, n !== null && (n = xi(n), n !== null && qy(n)), t) : (t.eventSystemFlags |= r, n = t.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), t) } function lE(t, n, i, r, c) { switch (n) { case "focusin": return Sa = go(Sa, t, n, i, r, c), !0; case "dragenter": return Ca = go(Ca, t, n, i, r, c), !0; case "mouseover": return wa = go(wa, t, n, i, r, c), !0; case "pointerover": var d = c.pointerId; return mo.set(d, go(mo.get(d) || null, t, n, i, r, c)), !0; case "gotpointercapture": return d = c.pointerId, po.set(d, go(po.get(d) || null, t, n, i, r, c)), !0 }return !1 } function Fy(t) { var n = vi(t.target); if (n !== null) { var i = u(n); if (i !== null) { if (n = i.tag, n === 13) { if (n = f(i), n !== null) { t.blockedOn = n, om(t.priority, function () { Gy(i) }); return } } else if (n === 31) { if (n = h(i), n !== null) { t.blockedOn = n, om(t.priority, function () { Gy(i) }); return } } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) { t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null; return } } } t.blockedOn = null } function al(t) { if (t.blockedOn !== null) return !1; for (var n = t.targetContainers; 0 < n.length;) { var i = jf(t.nativeEvent); if (i === null) { i = t.nativeEvent; var r = new i.constructor(i.type, i); jc = r, i.target.dispatchEvent(r), jc = null } else return n = xi(i), n !== null && qy(n), t.blockedOn = i, !1; n.shift() } return !0 } function Ky(t, n, i) { al(t) && i.delete(n) } function cE() { zf = !1, Sa !== null && al(Sa) && (Sa = null), Ca !== null && al(Ca) && (Ca = null), wa !== null && al(wa) && (wa = null), mo.forEach(Ky), po.forEach(Ky) } function il(t, n) { t.blockedOn === n && (t.blockedOn = null, zf || (zf = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, cE))) } var sl = null; function Zy(t) { sl !== t && (sl = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function () { sl === t && (sl = null); for (var n = 0; n < t.length; n += 3) { var i = t[n], r = t[n + 1], c = t[n + 2]; if (typeof r != "function") { if (_f(r || i) === null) continue; break } var d = xi(i); d !== null && (t.splice(n, 3), n -= 3, Ou(d, { pending: !0, data: c, method: i.method, action: r }, r, c)) } })) } function ts(t) { function n(N) { return il(N, t) } Sa !== null && il(Sa, t), Ca !== null && il(Ca, t), wa !== null && il(wa, t), mo.forEach(n), po.forEach(n); for (var i = 0; i < Ea.length; i++) { var r = Ea[i]; r.blockedOn === t && (r.blockedOn = null) } for (; 0 < Ea.length && (i = Ea[0], i.blockedOn === null);)Fy(i), i.blockedOn === null && Ea.shift(); if (i = (t.ownerDocument || t).$$reactFormReplay, i != null) for (r = 0; r < i.length; r += 3) { var c = i[r], d = i[r + 1], v = c[Ae] || null; if (typeof d == "function") v || Zy(i); else if (v) { var E = null; if (d && d.hasAttribute("formAction")) { if (c = d, v = d[Ae] || null) E = v.formAction; else if (_f(c) !== null) continue } else E = v.action; typeof E == "function" ? i[r + 1] = E : (i.splice(r, 3), r -= 3), Zy(i) } } } function Qy() { function t(d) { d.canIntercept && d.info === "react-transition" && d.intercept({ handler: function () { return new Promise(function (v) { return c = v }) }, focusReset: "manual", scroll: "manual" }) } function n() { c !== null && (c(), c = null), r || setTimeout(i, 20) } function i() { if (!r && !navigation.transition) { var d = navigation.currentEntry; d && d.url != null && navigation.navigate(d.url, { state: d.getState(), info: "react-transition", history: "replace" }) } } if (typeof navigation == "object") { var r = !1, c = null; return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(i, 100), function () { r = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), c !== null && (c(), c = null) } } } function Vf(t) { this._internalRoot = t } ol.prototype.render = Vf.prototype.render = function (t) { var n = this._internalRoot; if (n === null) throw Error(o(409)); var i = n.current, r = qe(); Hy(i, r, t, n, null, null) }, ol.prototype.unmount = Vf.prototype.unmount = function () { var t = this._internalRoot; if (t !== null) { this._internalRoot = null; var n = t.containerInfo; Hy(t.current, 2, null, t, null, null), Hr(), n[yi] = null } }; function ol(t) { this._internalRoot = t } ol.prototype.unstable_scheduleHydration = function (t) { if (t) { var n = sm(); t = { blockedOn: null, target: t, priority: n }; for (var i = 0; i < Ea.length && n !== 0 && n < Ea[i].priority; i++); Ea.splice(i, 0, t), i === 0 && Fy(t) } }; var Wy = a.version; if (Wy !== "19.2.3") throw Error(o(527, Wy, "19.2.3")); Q.findDOMNode = function (t) { var n = t._reactInternals; if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t))); return t = p(n), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t }; var uE = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.3" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!rl.isDisabled && rl.supportsFiber) try { Es = rl.inject(uE), ze = rl } catch { } } return vo.createRoot = function (t, n) { if (!l(t)) throw Error(o(299)); var i = !1, r = "", c = ag, d = ig, v = sg; return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = By(t, 1, !1, null, null, i, r, null, c, d, v, Qy), t[yi] = n.current, gf(t), new Vf(n) }, vo.hydrateRoot = function (t, n, i) { if (!l(t)) throw Error(o(299)); var r = !1, c = "", d = ag, v = ig, E = sg, N = null; return i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (v = i.onCaughtError), i.onRecoverableError !== void 0 && (E = i.onRecoverableError), i.formState !== void 0 && (N = i.formState)), n = By(t, 1, !0, n, i ?? null, r, c, N, d, v, E, Qy), n.context = Uy(null), i = n.current, r = qe(), r = Ec(r), c = ca(r), c.callback = null, ua(i, c, r), i = r, n.current.lanes = i, Ts(n, i), xn(n), t[yi] = n.current, gf(t), new ol(n) }, vo.version = "19.2.3", vo
} var ov; function bE() { if (ov) return Bf.exports; ov = 1; function e() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (a) { console.error(a) } } return e(), Bf.exports = xE(), Bf.exports } var SE = bE(); var rv = "popstate"; function lv(e) { return typeof e == "object" && e != null && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e } function CE(e = {}) { function a(o, l) { let u = l.state?.masked, { pathname: f, search: h, hash: m } = u || o.location; return vd("", { pathname: f, search: h, hash: m }, l.state && l.state.usr || null, l.state && l.state.key || "default", u ? { pathname: o.location.pathname, search: o.location.search, hash: o.location.hash } : void 0) } function s(o, l) { return typeof l == "string" ? l : No(l) } return EE(a, s, null, e) } function re(e, a) { if (e === !1 || e === null || typeof e > "u") throw new Error(a) } function Tn(e, a) { if (!e) { typeof console < "u" && console.warn(a); try { throw new Error(a) } catch { } } } function wE() { return Math.random().toString(36).substring(2, 10) } function cv(e, a) { return { usr: e.state, key: e.key, idx: a, masked: e.mask ? { pathname: e.pathname, search: e.search, hash: e.hash } : void 0 } } function vd(e, a, s = null, o, l) { return { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "", ...typeof a == "string" ? Lo(a) : a, state: s, key: a && a.key || o || wE(), mask: l } } function No({ pathname: e = "/", search: a = "", hash: s = "" }) { return a && a !== "?" && (e += a.charAt(0) === "?" ? a : "?" + a), s && s !== "#" && (e += s.charAt(0) === "#" ? s : "#" + s), e } function Lo(e) { let a = {}; if (e) { let s = e.indexOf("#"); s >= 0 && (a.hash = e.substring(s), e = e.substring(0, s)); let o = e.indexOf("?"); o >= 0 && (a.search = e.substring(o), e = e.substring(0, o)), e && (a.pathname = e) } return a } function EE(e, a, s, o = {}) { let { window: l = document.defaultView, v5Compat: u = !1 } = o, f = l.history, h = "POP", m = null, p = g(); p == null && (p = 0, f.replaceState({ ...f.state, idx: p }, "")); function g() { return (f.state || { idx: null }).idx } function y() { h = "POP"; let A = g(), R = A == null ? null : A - p; p = A, m && m({ action: h, location: C.location, delta: R }) } function b(A, R) { h = "PUSH"; let M = lv(A) ? A : vd(C.location, A, R); p = g() + 1; let D = cv(M, p), _ = C.createHref(M.mask || M); try { f.pushState(D, "", _) } catch (q) { if (q instanceof DOMException && q.name === "DataCloneError") throw q; l.location.assign(_) } u && m && m({ action: h, location: C.location, delta: 1 }) } function w(A, R) { h = "REPLACE"; let M = lv(A) ? A : vd(C.location, A, R); p = g(); let D = cv(M, p), _ = C.createHref(M.mask || M); f.replaceState(D, "", _), u && m && m({ action: h, location: C.location, delta: 0 }) } function T(A) { return AE(A) } let C = { get action() { return h }, get location() { return e(l, f) }, listen(A) { if (m) throw new Error("A history only accepts one active listener"); return l.addEventListener(rv, y), m = A, () => { l.removeEventListener(rv, y), m = null } }, createHref(A) { return a(l, A) }, createURL: T, encodeLocation(A) { let R = T(A); return { pathname: R.pathname, search: R.search, hash: R.hash } }, push: b, replace: w, go(A) { return f.go(A) } }; return C } function AE(e, a = !1) { let s = "http://localhost"; typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), re(s, "No window.location.(origin|href) available to create URL"); let o = typeof e == "string" ? e : No(e); return o = o.replace(/ $/, "%20"), !a && o.startsWith("//") && (o = s + o), new URL(o, s) } function hx(e, a, s = "/") { return TE(e, a, s, !1) } function TE(e, a, s, o, l) { let u = typeof a == "string" ? Lo(a) : a, f = Wn(u.pathname || "/", s); if (f == null) return null; let h = RE(e), m = null, p = UE(f); for (let g = 0; m == null && g < h.length; ++g)m = kE(h[g], p, o); return m } function RE(e) { let a = mx(e); return ME(a), a } function mx(e, a = [], s = [], o = "", l = !1) { let u = (f, h, m = l, p) => { let g = { relativePath: p === void 0 ? f.path || "" : p, caseSensitive: f.caseSensitive === !0, childrenIndex: h, route: f }; if (g.relativePath.startsWith("/")) { if (!g.relativePath.startsWith(o) && m) return; re(g.relativePath.startsWith(o), `Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), g.relativePath = g.relativePath.slice(o.length) } let y = dn([o, g.relativePath]), b = s.concat(g); f.children && f.children.length > 0 && (re(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`), mx(f.children, a, b, y, m)), !(f.path == null && !f.index) && a.push({ path: y, score: VE(y, f.index), routesMeta: b }) }; return e.forEach((f, h) => { if (f.path === "" || !f.path?.includes("?")) u(f, h); else for (let m of px(f.path)) u(f, h, !0, m) }), a } function px(e) { let a = e.split("/"); if (a.length === 0) return []; let [s, ...o] = a, l = s.endsWith("?"), u = s.replace(/\?$/, ""); if (o.length === 0) return l ? [u, ""] : [u]; let f = px(o.join("/")), h = []; return h.push(...f.map(m => m === "" ? u : [u, m].join("/"))), l && h.push(...f), h.map(m => e.startsWith("/") && m === "" ? "/" : m) } function ME(e) { e.sort((a, s) => a.score !== s.score ? s.score - a.score : LE(a.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex))) } var NE = /^:[\w-]+$/, DE = 3, OE = 2, jE = 1, _E = 10, zE = -2, uv = e => e === "*"; function VE(e, a) { let s = e.split("/"), o = s.length; return s.some(uv) && (o += zE), a && (o += OE), s.filter(l => !uv(l)).reduce((l, u) => l + (NE.test(u) ? DE : u === "" ? jE : _E), o) } function LE(e, a) { return e.length === a.length && e.slice(0, -1).every((o, l) => o === a[l]) ? e[e.length - 1] - a[a.length - 1] : 0 } function kE(e, a, s = !1) { let { routesMeta: o } = e, l = {}, u = "/", f = []; for (let h = 0; h < o.length; ++h) { let m = o[h], p = h === o.length - 1, g = u === "/" ? a : a.slice(u.length) || "/", y = kl({ path: m.relativePath, caseSensitive: m.caseSensitive, end: p }, g), b = m.route; if (!y && p && s && !o[o.length - 1].route.index && (y = kl({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, g)), !y) return null; Object.assign(l, y.params), f.push({ params: l, pathname: dn([u, y.pathname]), pathnameBase: GE(dn([u, y.pathnameBase])), route: b }), y.pathnameBase !== "/" && (u = dn([u, y.pathnameBase])) } return f } function kl(e, a) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [s, o] = BE(e.path, e.caseSensitive, e.end), l = a.match(s); if (!l) return null; let u = l[0], f = u.replace(/(.)\/+$/, "$1"), h = l.slice(1); return { params: o.reduce((p, { paramName: g, isOptional: y }, b) => { if (g === "*") { let T = h[b] || ""; f = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1") } const w = h[b]; return y && !w ? p[g] = void 0 : p[g] = (w || "").replace(/%2F/g, "/"), p }, {}), pathname: u, pathnameBase: f, pattern: e } } function BE(e, a = !1, s = !0) { Tn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`); let o = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, h, m, p, g) => { if (o.push({ paramName: h, isOptional: m != null }), m) { let y = g.charAt(p + f.length); return y && y !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?" } return "/([^\\/]+)" }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2"); return e.endsWith("*") ? (o.push({ paramName: "*" }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, a ? void 0 : "i"), o] } function UE(e) { try { return e.split("/").map(a => decodeURIComponent(a).replace(/\//g, "%2F")).join("/") } catch (a) { return Tn(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`), e } } function Wn(e, a) { if (a === "/") return e; if (!e.toLowerCase().startsWith(a.toLowerCase())) return null; let s = a.endsWith("/") ? a.length - 1 : a.length, o = e.charAt(s); return o && o !== "/" ? null : e.slice(s) || "/" } var HE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i; function PE(e, a = "/") { let { pathname: s, search: o = "", hash: l = "" } = typeof e == "string" ? Lo(e) : e, u; return s ? (s = yx(s), s.startsWith("/") ? u = fv(s.substring(1), "/") : u = fv(s, a)) : u = a, { pathname: u, search: YE(o), hash: XE(l) } } function fv(e, a) { let s = Bl(a).split("/"); return e.split("/").forEach(l => { l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l) }), s.length > 1 ? s.join("/") : "/" } function qf(e, a, s, o) { return `Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.` } function qE(e) { return e.filter((a, s) => s === 0 || a.route.path && a.route.path.length > 0) } function gx(e) { let a = qE(e); return a.map((s, o) => o === a.length - 1 ? s.pathname : s.pathnameBase) } function nh(e, a, s, o = !1) { let l; typeof e == "string" ? l = Lo(e) : (l = { ...e }, re(!l.pathname || !l.pathname.includes("?"), qf("?", "pathname", "search", l)), re(!l.pathname || !l.pathname.includes("#"), qf("#", "pathname", "hash", l)), re(!l.search || !l.search.includes("#"), qf("#", "search", "hash", l))); let u = e === "" || l.pathname === "", f = u ? "/" : l.pathname, h; if (f == null) h = s; else { let y = a.length - 1; if (!o && f.startsWith("..")) { let b = f.split("/"); for (; b[0] === "..";)b.shift(), y -= 1; l.pathname = b.join("/") } h = y >= 0 ? a[y] : "/" } let m = PE(l, h), p = f && f !== "/" && f.endsWith("/"), g = (u || f === ".") && s.endsWith("/"); return !m.pathname.endsWith("/") && (p || g) && (m.pathname += "/"), m } var yx = e => e.replace(/\/\/+/g, "/"), dn = e => yx(e.join("/")), Bl = e => e.replace(/\/+$/, ""), GE = e => Bl(e).replace(/^\/*/, "/"), YE = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, XE = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, FE = class { constructor(e, a, s, o = !1) { this.status = e, this.statusText = a || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s } }; function KE(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e } function ZE(e) { let a = e.map(s => s.route.path).filter(Boolean); return dn(a) || "/" } var vx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"; function xx(e, a) { let s = e; if (typeof s != "string" || !HE.test(s)) return { absoluteURL: void 0, isExternal: !1, to: s }; let o = s, l = !1; if (vx) try { let u = new URL(window.location.href), f = s.startsWith("//") ? new URL(u.protocol + s) : new URL(s), h = Wn(f.pathname, a); f.origin === u.origin && h != null ? s = h + f.search + f.hash : l = !0 } catch { Tn(!1, `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`) } return { absoluteURL: o, isExternal: l, to: s } } Object.getOwnPropertyNames(Object.prototype).sort().join("\0"); var bx = ["POST", "PUT", "PATCH", "DELETE"]; new Set(bx); var QE = ["GET", ...bx]; new Set(QE); var ms = x.createContext(null); ms.displayName = "DataRouter"; var ec = x.createContext(null); ec.displayName = "DataRouterState"; var Sx = x.createContext(!1); function WE() { return x.useContext(Sx) } var Cx = x.createContext({ isTransitioning: !1 }); Cx.displayName = "ViewTransition"; var IE = x.createContext(new Map); IE.displayName = "Fetchers"; var $E = x.createContext(null); $E.displayName = "Await"; var sn = x.createContext(null); sn.displayName = "Navigation"; var nc = x.createContext(null); nc.displayName = "Location"; var Jn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }); Jn.displayName = "Route"; var ah = x.createContext(null); ah.displayName = "RouteError"; var wx = "REACT_ROUTER_ERROR", JE = "REDIRECT", tA = "ROUTE_ERROR_RESPONSE"; function eA(e) { if (e.startsWith(`${wx}:${JE}:{`)) try { let a = JSON.parse(e.slice(28)); if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean") return a } catch { } } function nA(e) { if (e.startsWith(`${wx}:${tA}:{`)) try { let a = JSON.parse(e.slice(40)); if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string") return new FE(a.status, a.statusText, a.data) } catch { } } function aA(e, { relative: a } = {}) { re(ko(), "useHref() may be used only in the context of a <Router> component."); let { basename: s, navigator: o } = x.useContext(sn), { hash: l, pathname: u, search: f } = Bo(e, { relative: a }), h = u; return s !== "/" && (h = u === "/" ? s : dn([s, u])), o.createHref({ pathname: h, search: f, hash: l }) } function ko() { return x.useContext(nc) != null } function ta() { return re(ko(), "useLocation() may be used only in the context of a <Router> component."), x.useContext(nc).location } var Ex = "You should call navigate() in a React.useEffect(), not when your component is first rendered."; function Ax(e) { x.useContext(sn).static || x.useLayoutEffect(e) } function iA() { let { isDataRoute: e } = x.useContext(Jn); return e ? yA() : sA() } function sA() { re(ko(), "useNavigate() may be used only in the context of a <Router> component."); let e = x.useContext(ms), { basename: a, navigator: s } = x.useContext(sn), { matches: o } = x.useContext(Jn), { pathname: l } = ta(), u = JSON.stringify(gx(o)), f = x.useRef(!1); return Ax(() => { f.current = !0 }), x.useCallback((m, p = {}) => { if (Tn(f.current, Ex), !f.current) return; if (typeof m == "number") { s.go(m); return } let g = nh(m, JSON.parse(u), l, p.relative === "path"); e == null && a !== "/" && (g.pathname = g.pathname === "/" ? a : dn([a, g.pathname])), (p.replace ? s.replace : s.push)(g, p.state, p) }, [a, s, u, l, e]) } x.createContext(null); function Bo(e, { relative: a } = {}) { let { matches: s } = x.useContext(Jn), { pathname: o } = ta(), l = JSON.stringify(gx(s)); return x.useMemo(() => nh(e, JSON.parse(l), o, a === "path"), [e, l, o, a]) } function oA(e, a, s) {
  re(ko(), "useRoutes() may be used only in the context of a <Router> component."); let { navigator: o } = x.useContext(sn), { matches: l } = x.useContext(Jn), u = l[l.length - 1], f = u ? u.params : {}, h = u ? u.pathname : "/", m = u ? u.pathnameBase : "/", p = u && u.route; {
    let A = p && p.path || ""; Rx(h, !p || A.endsWith("*") || A.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`)
  } let g = ta(), y; y = g; let b = y.pathname || "/", w = b; if (m !== "/") { let A = m.replace(/^\//, "").split("/"); w = "/" + b.replace(/^\//, "").split("/").slice(A.length).join("/") } let T = s && s.state.matches.length ? s.state.matches.map(A => Object.assign(A, { route: s.manifest[A.route.id] || A.route })) : hx(e, { pathname: w }); return Tn(p || T != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `), Tn(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), fA(T && T.map(A => Object.assign({}, A, { params: Object.assign({}, f, A.params), pathname: dn([m, o.encodeLocation ? o.encodeLocation(A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : A.pathname]), pathnameBase: A.pathnameBase === "/" ? m : dn([m, o.encodeLocation ? o.encodeLocation(A.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : A.pathnameBase]) })), l, s)
} function rA() { let e = gA(), a = KE(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), s = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: o }, u = { padding: "2px 4px", backgroundColor: o }, f = null; return console.error("Error handled by React Router default ErrorBoundary:", e), f = x.createElement(x.Fragment, null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", { style: u }, "ErrorBoundary"), " or", " ", x.createElement("code", { style: u }, "errorElement"), " prop on your route.")), x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", { style: { fontStyle: "italic" } }, a), s ? x.createElement("pre", { style: l }, s) : null, f) } var lA = x.createElement(rA, null), Tx = class extends x.Component { constructor(e) { super(e), this.state = { location: e.location, revalidation: e.revalidation, error: e.error } } static getDerivedStateFromError(e) { return { error: e } } static getDerivedStateFromProps(e, a) { return a.location !== e.location || a.revalidation !== "idle" && e.revalidation === "idle" ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error !== void 0 ? e.error : a.error, location: a.location, revalidation: e.revalidation || a.revalidation } } componentDidCatch(e, a) { this.props.onError ? this.props.onError(e, a) : console.error("React Router caught the following error during render", e) } render() { let e = this.state.error; if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") { const s = nA(e.digest); s && (e = s) } let a = e !== void 0 ? x.createElement(Jn.Provider, { value: this.props.routeContext }, x.createElement(ah.Provider, { value: e, children: this.props.component })) : this.props.children; return this.context ? x.createElement(cA, { error: e }, a) : a } }; Tx.contextType = Sx; var Gf = new WeakMap; function cA({ children: e, error: a }) { let { basename: s } = x.useContext(sn); if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") { let o = eA(a.digest); if (o) { let l = Gf.get(a); if (l) throw l; let u = xx(o.location, s); if (vx && !Gf.get(a)) if (u.isExternal || o.reloadDocument) window.location.href = u.absoluteURL || u.to; else { const f = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, { replace: o.replace })); throw Gf.set(a, f), f } return x.createElement("meta", { httpEquiv: "refresh", content: `0;url=${u.absoluteURL || u.to}` }) } } return e } function uA({ routeContext: e, match: a, children: s }) { let o = x.useContext(ms); return o && o.static && o.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = a.route.id), x.createElement(Jn.Provider, { value: e }, s) } function fA(e, a = [], s) { let o = s?.state; if (e == null) { if (!o) return null; if (o.errors) e = o.matches; else if (a.length === 0 && !o.initialized && o.matches.length > 0) e = o.matches; else return null } let l = e, u = o?.errors; if (u != null) { let g = l.findIndex(y => y.route.id && u?.[y.route.id] !== void 0); re(g >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), l = l.slice(0, Math.min(l.length, g + 1)) } let f = !1, h = -1; if (s && o) { f = o.renderFallback; for (let g = 0; g < l.length; g++) { let y = l[g]; if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = g), y.route.id) { let { loaderData: b, errors: w } = o, T = y.route.loader && !b.hasOwnProperty(y.route.id) && (!w || w[y.route.id] === void 0); if (y.route.lazy || T) { s.isStatic && (f = !0), h >= 0 ? l = l.slice(0, h + 1) : l = [l[0]]; break } } } } let m = s?.onError, p = o && m ? (g, y) => { m(g, { location: o.location, params: o.matches?.[0]?.params ?? {}, pattern: ZE(o.matches), errorInfo: y }) } : void 0; return l.reduceRight((g, y, b) => { let w, T = !1, C = null, A = null; o && (w = u && y.route.id ? u[y.route.id] : void 0, C = y.route.errorElement || lA, f && (h < 0 && b === 0 ? (Rx("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), T = !0, A = null) : h === b && (T = !0, A = y.route.hydrateFallbackElement || null))); let R = a.concat(l.slice(0, b + 1)), M = () => { let D; return w ? D = C : T ? D = A : y.route.Component ? D = x.createElement(y.route.Component, null) : y.route.element ? D = y.route.element : D = g, x.createElement(uA, { match: y, routeContext: { outlet: g, matches: R, isDataRoute: o != null }, children: D }) }; return o && (y.route.ErrorBoundary || y.route.errorElement || b === 0) ? x.createElement(Tx, { location: o.location, revalidation: o.revalidation, component: C, error: w, children: M(), routeContext: { outlet: null, matches: R, isDataRoute: !0 }, onError: p }) : M() }, null) } function ih(e) { return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.` } function dA(e) { let a = x.useContext(ms); return re(a, ih(e)), a } function hA(e) { let a = x.useContext(ec); return re(a, ih(e)), a } function mA(e) { let a = x.useContext(Jn); return re(a, ih(e)), a } function sh(e) { let a = mA(e), s = a.matches[a.matches.length - 1]; return re(s.route.id, `${e} can only be used on routes that contain a unique "id"`), s.route.id } function pA() { return sh("useRouteId") } function gA() { let e = x.useContext(ah), a = hA("useRouteError"), s = sh("useRouteError"); return e !== void 0 ? e : a.errors?.[s] } function yA() { let { router: e } = dA("useNavigate"), a = sh("useNavigate"), s = x.useRef(!1); return Ax(() => { s.current = !0 }), x.useCallback(async (l, u = {}) => { Tn(s.current, Ex), s.current && (typeof l == "number" ? await e.navigate(l) : await e.navigate(l, { fromRouteId: a, ...u })) }, [e, a]) } var dv = {}; function Rx(e, a, s) { !a && !dv[e] && (dv[e] = !0, Tn(!1, s)) } x.memo(vA); function vA({ routes: e, manifest: a, future: s, state: o, isStatic: l, onError: u }) { return oA(e, void 0, { manifest: a, state: o, isStatic: l, onError: u }) } function xA({ basename: e = "/", children: a = null, location: s, navigationType: o = "POP", navigator: l, static: u = !1, useTransitions: f }) { re(!ko(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."); let h = e.replace(/^\/*/, "/"), m = x.useMemo(() => ({ basename: h, navigator: l, static: u, useTransitions: f, future: {} }), [h, l, u, f]); typeof s == "string" && (s = Lo(s)); let { pathname: p = "/", search: g = "", hash: y = "", state: b = null, key: w = "default", mask: T } = s, C = x.useMemo(() => { let A = Wn(p, h); return A == null ? null : { location: { pathname: A, search: g, hash: y, state: b, key: w, mask: T }, navigationType: o } }, [h, p, g, y, b, w, o, T]); return Tn(C != null, `<Router basename="${h}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`), C == null ? null : x.createElement(sn.Provider, { value: m }, x.createElement(nc.Provider, { children: a, value: C })) } var wl = "get", El = "application/x-www-form-urlencoded"; function ac(e) { return typeof HTMLElement < "u" && e instanceof HTMLElement } function bA(e) { return ac(e) && e.tagName.toLowerCase() === "button" } function SA(e) { return ac(e) && e.tagName.toLowerCase() === "form" } function CA(e) { return ac(e) && e.tagName.toLowerCase() === "input" } function wA(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) } function EA(e, a) { return e.button === 0 && (!a || a === "_self") && !wA(e) } var ll = null; function AA() { if (ll === null) try { new FormData(document.createElement("form"), 0), ll = !1 } catch { ll = !0 } return ll } var TA = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); function Yf(e) { return e != null && !TA.has(e) ? (Tn(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${El}"`), null) : e } function RA(e, a) { let s, o, l, u, f; if (SA(e)) { let h = e.getAttribute("action"); o = h ? Wn(h, a) : null, s = e.getAttribute("method") || wl, l = Yf(e.getAttribute("enctype")) || El, u = new FormData(e) } else if (bA(e) || CA(e) && (e.type === "submit" || e.type === "image")) { let h = e.form; if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>'); let m = e.getAttribute("formaction") || h.getAttribute("action"); if (o = m ? Wn(m, a) : null, s = e.getAttribute("formmethod") || h.getAttribute("method") || wl, l = Yf(e.getAttribute("formenctype")) || Yf(h.getAttribute("enctype")) || El, u = new FormData(h, e), !AA()) { let { name: p, type: g, value: y } = e; if (g === "image") { let b = p ? `${p}.` : ""; u.append(`${b}x`, "0"), u.append(`${b}y`, "0") } else p && u.append(p, y) } } else { if (ac(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">'); s = wl, o = null, l = El, f = e } return u && l === "text/plain" && (f = u, u = void 0), { action: o, method: s.toLowerCase(), encType: l, formData: u, body: f } } Object.getOwnPropertyNames(Object.prototype).sort().join("\0"); function oh(e, a) { if (e === !1 || e === null || typeof e > "u") throw new Error(a) } function Mx(e, a, s, o) { let l = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e; return s ? l.pathname.endsWith("/") ? l.pathname = `${l.pathname}_.${o}` : l.pathname = `${l.pathname}.${o}` : l.pathname === "/" ? l.pathname = `_root.${o}` : a && Wn(l.pathname, a) === "/" ? l.pathname = `${Bl(a)}/_root.${o}` : l.pathname = `${Bl(l.pathname)}.${o}`, l } async function MA(e, a) { if (e.id in a) return a[e.id]; try { let s = await import(e.module); return a[e.id] = s, s } catch (s) { return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => { }) } } function NA(e) { return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string" } async function DA(e, a, s) { let o = await Promise.all(e.map(async l => { let u = a.routes[l.route.id]; if (u) { let f = await MA(u, s); return f.links ? f.links() : [] } return [] })); return zA(o.flat(1).filter(NA).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ? { ...l, rel: "prefetch", as: "style" } : { ...l, rel: "prefetch" })) } function hv(e, a, s, o, l, u) { let f = (m, p) => s[p] ? m.route.id !== s[p].route.id : !0, h = (m, p) => s[p].pathname !== m.pathname || s[p].route.path?.endsWith("*") && s[p].params["*"] !== m.params["*"]; return u === "assets" ? a.filter((m, p) => f(m, p) || h(m, p)) : u === "data" ? a.filter((m, p) => { let g = o.routes[m.route.id]; if (!g || !g.hasLoader) return !1; if (f(m, p) || h(m, p)) return !0; if (m.route.shouldRevalidate) { let y = m.route.shouldRevalidate({ currentUrl: new URL(l.pathname + l.search + l.hash, window.origin), currentParams: s[0]?.params || {}, nextUrl: new URL(e, window.origin), nextParams: m.params, defaultShouldRevalidate: !0 }); if (typeof y == "boolean") return y } return !0 }) : [] } function OA(e, a, { includeHydrateFallback: s } = {}) { return jA(e.map(o => { let l = a.routes[o.route.id]; if (!l) return []; let u = [l.module]; return l.clientActionModule && (u = u.concat(l.clientActionModule)), l.clientLoaderModule && (u = u.concat(l.clientLoaderModule)), s && l.hydrateFallbackModule && (u = u.concat(l.hydrateFallbackModule)), l.imports && (u = u.concat(l.imports)), u }).flat(1)) } function jA(e) { return [...new Set(e)] } function _A(e) { let a = {}, s = Object.keys(e).sort(); for (let o of s) a[o] = e[o]; return a } function zA(e, a) { let s = new Set; return new Set(a), e.reduce((o, l) => { let u = JSON.stringify(_A(l)); return s.has(u) || (s.add(u), o.push({ key: u, link: l })), o }, []) } function rh() { let e = x.useContext(ms); return oh(e, "You must render this element inside a <DataRouterContext.Provider> element"), e } function VA() { let e = x.useContext(ec); return oh(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e } var lh = x.createContext(void 0); lh.displayName = "FrameworkContext"; function ch() { let e = x.useContext(lh); return oh(e, "You must render this element inside a <HydratedRouter> element"), e } function LA(e, a) { let s = x.useContext(lh), [o, l] = x.useState(!1), [u, f] = x.useState(!1), { onFocus: h, onBlur: m, onMouseEnter: p, onMouseLeave: g, onTouchStart: y } = a, b = x.useRef(null); x.useEffect(() => { if (e === "render" && f(!0), e === "viewport") { let C = R => { R.forEach(M => { f(M.isIntersecting) }) }, A = new IntersectionObserver(C, { threshold: .5 }); return b.current && A.observe(b.current), () => { A.disconnect() } } }, [e]), x.useEffect(() => { if (o) { let C = setTimeout(() => { f(!0) }, 100); return () => { clearTimeout(C) } } }, [o]); let w = () => { l(!0) }, T = () => { l(!1), f(!1) }; return s ? e !== "intent" ? [u, b, {}] : [u, b, { onFocus: xo(h, w), onBlur: xo(m, T), onMouseEnter: xo(p, w), onMouseLeave: xo(g, T), onTouchStart: xo(y, w) }] : [!1, b, {}] } function xo(e, a) { return s => { e && e(s), s.defaultPrevented || a(s) } } function kA({ page: e, ...a }) { let s = WE(), { router: o } = rh(), l = x.useMemo(() => hx(o.routes, e, o.basename), [o.routes, e, o.basename]); return l ? s ? x.createElement(UA, { page: e, matches: l, ...a }) : x.createElement(HA, { page: e, matches: l, ...a }) : null } function BA(e) { let { manifest: a, routeModules: s } = ch(), [o, l] = x.useState([]); return x.useEffect(() => { let u = !1; return DA(e, a, s).then(f => { u || l(f) }), () => { u = !0 } }, [e, a, s]), o } function UA({ page: e, matches: a, ...s }) { let o = ta(), { future: l } = ch(), { basename: u } = rh(), f = x.useMemo(() => { if (e === o.pathname + o.search + o.hash) return []; let h = Mx(e, u, l.unstable_trailingSlashAwareDataRequests, "rsc"), m = !1, p = []; for (let g of a) typeof g.route.shouldRevalidate == "function" ? m = !0 : p.push(g.route.id); return m && p.length > 0 && h.searchParams.set("_routes", p.join(",")), [h.pathname + h.search] }, [u, l.unstable_trailingSlashAwareDataRequests, e, o, a]); return x.createElement(x.Fragment, null, f.map(h => x.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s }))) } function HA({ page: e, matches: a, ...s }) { let o = ta(), { future: l, manifest: u, routeModules: f } = ch(), { basename: h } = rh(), { loaderData: m, matches: p } = VA(), g = x.useMemo(() => hv(e, a, p, u, o, "data"), [e, a, p, u, o]), y = x.useMemo(() => hv(e, a, p, u, o, "assets"), [e, a, p, u, o]), b = x.useMemo(() => { if (e === o.pathname + o.search + o.hash) return []; let C = new Set, A = !1; if (a.forEach(M => { let D = u.routes[M.route.id]; !D || !D.hasLoader || (!g.some(_ => _.route.id === M.route.id) && M.route.id in m && f[M.route.id]?.shouldRevalidate || D.hasClientLoader ? A = !0 : C.add(M.route.id)) }), C.size === 0) return []; let R = Mx(e, h, l.unstable_trailingSlashAwareDataRequests, "data"); return A && C.size > 0 && R.searchParams.set("_routes", a.filter(M => C.has(M.route.id)).map(M => M.route.id).join(",")), [R.pathname + R.search] }, [h, l.unstable_trailingSlashAwareDataRequests, m, o, u, g, a, e, f]), w = x.useMemo(() => OA(y, u), [y, u]), T = BA(y); return x.createElement(x.Fragment, null, b.map(C => x.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), w.map(C => x.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), T.map(({ key: C, link: A }) => x.createElement("link", { key: C, nonce: s.nonce, ...A, crossOrigin: A.crossOrigin ?? s.crossOrigin }))) } function PA(...e) { return a => { e.forEach(s => { typeof s == "function" ? s(a) : s != null && (s.current = a) }) } } var qA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"; try { qA && (window.__reactRouterVersion = "7.15.1") } catch { } function GA({ basename: e, children: a, useTransitions: s, window: o }) { let l = x.useRef(); l.current == null && (l.current = CE({ window: o, v5Compat: !0 })); let u = l.current, [f, h] = x.useState({ action: u.action, location: u.location }), m = x.useCallback(p => { s === !1 ? h(p) : x.startTransition(() => h(p)) }, [s]); return x.useLayoutEffect(() => u.listen(m), [u, m]), x.createElement(xA, { basename: e, children: a, location: f.location, navigationType: f.action, navigator: u, useTransitions: s }) } var Nx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Dx = x.forwardRef(function ({ onClick: a, discover: s = "render", prefetch: o = "none", relative: l, reloadDocument: u, replace: f, mask: h, state: m, target: p, to: g, preventScrollReset: y, viewTransition: b, defaultShouldRevalidate: w, ...T }, C) { let { basename: A, navigator: R, useTransitions: M } = x.useContext(sn), D = typeof g == "string" && Nx.test(g), _ = xx(g, A); g = _.to; let q = aA(g, { relative: l }), K = ta(), U = null; if (h) { let lt = nh(h, [], K.mask ? K.mask.pathname : "/", !0); A !== "/" && (lt.pathname = lt.pathname === "/" ? A : dn([A, lt.pathname])), U = R.createHref(lt) } let [H, J, W] = LA(o, T), et = KA(g, { replace: f, mask: h, state: m, target: p, preventScrollReset: y, relative: l, viewTransition: b, defaultShouldRevalidate: w, useTransitions: M }); function at(lt) { a && a(lt), lt.defaultPrevented || et(lt) } let mt = !(_.isExternal || u), ut = x.createElement("a", { ...T, ...W, href: (mt ? U : void 0) || _.absoluteURL || q, onClick: mt ? at : a, ref: PA(C, J), target: p, "data-discover": !D && s === "render" ? "true" : void 0 }); return H && !D ? x.createElement(x.Fragment, null, ut, x.createElement(kA, { page: q })) : ut }); Dx.displayName = "Link"; var YA = x.forwardRef(function ({ "aria-current": a = "page", caseSensitive: s = !1, className: o = "", end: l = !1, style: u, to: f, viewTransition: h, children: m, ...p }, g) { let y = Bo(f, { relative: p.relative }), b = ta(), w = x.useContext(ec), { navigator: T, basename: C } = x.useContext(sn), A = w != null && $A(y) && h === !0, R = T.encodeLocation ? T.encodeLocation(y).pathname : y.pathname, M = b.pathname, D = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null; s || (M = M.toLowerCase(), D = D ? D.toLowerCase() : null, R = R.toLowerCase()), D && C && (D = Wn(D, C) || D); const _ = R !== "/" && R.endsWith("/") ? R.length - 1 : R.length; let q = M === R || !l && M.startsWith(R) && M.charAt(_) === "/", K = D != null && (D === R || !l && D.startsWith(R) && D.charAt(R.length) === "/"), U = { isActive: q, isPending: K, isTransitioning: A }, H = q ? a : void 0, J; typeof o == "function" ? J = o(U) : J = [o, q ? "active" : null, K ? "pending" : null, A ? "transitioning" : null].filter(Boolean).join(" "); let W = typeof u == "function" ? u(U) : u; return x.createElement(Dx, { ...p, "aria-current": H, className: J, ref: g, style: W, to: f, viewTransition: h }, typeof m == "function" ? m(U) : m) }); YA.displayName = "NavLink"; var XA = x.forwardRef(({ discover: e = "render", fetcherKey: a, navigate: s, reloadDocument: o, replace: l, state: u, method: f = wl, action: h, onSubmit: m, relative: p, preventScrollReset: g, viewTransition: y, defaultShouldRevalidate: b, ...w }, T) => { let { useTransitions: C } = x.useContext(sn), A = WA(), R = IA(h, { relative: p }), M = f.toLowerCase() === "get" ? "get" : "post", D = typeof h == "string" && Nx.test(h), _ = q => { if (m && m(q), q.defaultPrevented) return; q.preventDefault(); let K = q.nativeEvent.submitter, U = K?.getAttribute("formmethod") || f, H = () => A(K || q.currentTarget, { fetcherKey: a, method: U, navigate: s, replace: l, state: u, relative: p, preventScrollReset: g, viewTransition: y, defaultShouldRevalidate: b }); C && s !== !1 ? x.startTransition(() => H()) : H() }; return x.createElement("form", { ref: T, method: M, action: R, onSubmit: o ? m : _, ...w, "data-discover": !D && e === "render" ? "true" : void 0 }) }); XA.displayName = "Form"; function FA(e) { return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.` } function Ox(e) { let a = x.useContext(ms); return re(a, FA(e)), a } function KA(e, { target: a, replace: s, mask: o, state: l, preventScrollReset: u, relative: f, viewTransition: h, defaultShouldRevalidate: m, useTransitions: p } = {}) { let g = iA(), y = ta(), b = Bo(e, { relative: f }); return x.useCallback(w => { if (EA(w, a)) { w.preventDefault(); let T = s !== void 0 ? s : No(y) === No(b), C = () => g(e, { replace: T, mask: o, state: l, preventScrollReset: u, relative: f, viewTransition: h, defaultShouldRevalidate: m }); p ? x.startTransition(() => C()) : C() } }, [y, g, b, s, o, l, a, e, u, f, h, m, p]) } var ZA = 0, QA = () => `__${String(++ZA)}__`; function WA() { let { router: e } = Ox("useSubmit"), { basename: a } = x.useContext(sn), s = pA(), o = e.fetch, l = e.navigate; return x.useCallback(async (u, f = {}) => { let { action: h, method: m, encType: p, formData: g, body: y } = RA(u, a); if (f.navigate === !1) { let b = f.fetcherKey || QA(); await o(b, s, f.action || h, { defaultShouldRevalidate: f.defaultShouldRevalidate, preventScrollReset: f.preventScrollReset, formData: g, body: y, formMethod: f.method || m, formEncType: f.encType || p, flushSync: f.flushSync }) } else await l(f.action || h, { defaultShouldRevalidate: f.defaultShouldRevalidate, preventScrollReset: f.preventScrollReset, formData: g, body: y, formMethod: f.method || m, formEncType: f.encType || p, replace: f.replace, state: f.state, fromRouteId: s, flushSync: f.flushSync, viewTransition: f.viewTransition }) }, [o, l, a, s]) } function IA(e, { relative: a } = {}) { let { basename: s } = x.useContext(sn), o = x.useContext(Jn); re(o, "useFormAction must be used inside a RouteContext"); let [l] = o.matches.slice(-1), u = { ...Bo(e || ".", { relative: a }) }, f = ta(); if (e == null) { u.search = f.search; let h = new URLSearchParams(u.search), m = h.getAll("index"); if (m.some(g => g === "")) { h.delete("index"), m.filter(y => y).forEach(y => h.append("index", y)); let g = h.toString(); u.search = g ? `?${g}` : "" } } return (!e || e === ".") && l.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (u.pathname = u.pathname === "/" ? s : dn([s, u.pathname])), No(u) } function $A(e, { relative: a } = {}) { let s = x.useContext(Cx); re(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"); let { basename: o } = Ox("useViewTransitionState"), l = Bo(e, { relative: a }); if (!s.isTransitioning) return !1; let u = Wn(s.currentLocation.pathname, o) || s.currentLocation.pathname, f = Wn(s.nextLocation.pathname, o) || s.nextLocation.pathname; return kl(l.pathname, f) != null || kl(l.pathname, u) != null } const uh = x.createContext({}); function fh(e) { const a = x.useRef(null); return a.current === null && (a.current = e()), a.current } const JA = typeof window < "u", jx = JA ? x.useLayoutEffect : x.useEffect, ic = x.createContext(null); function dh(e, a) { e.indexOf(a) === -1 && e.push(a) } function Ul(e, a) { const s = e.indexOf(a); s > -1 && e.splice(s, 1) } const Rn = (e, a, s) => s > a ? a : s < e ? e : s; let hh = () => { }; const Da = {}, _x = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), zx = e => typeof e == "object" && e !== null, Vx = e => /^0[^.\s]+$/u.test(e); function Lx(e) { let a; return () => (a === void 0 && (a = e()), a) } const an = e => e, Uo = (...e) => e.reduce((a, s) => o => s(a(o))), Do = (e, a, s) => { const o = a - e; return o ? (s - e) / o : 1 }; class mh { constructor() { this.subscriptions = [] } add(a) { return dh(this.subscriptions, a), () => Ul(this.subscriptions, a) } notify(a, s, o) { const l = this.subscriptions.length; if (l) if (l === 1) this.subscriptions[0](a, s, o); else for (let u = 0; u < l; u++) { const f = this.subscriptions[u]; f && f(a, s, o) } } getSize() { return this.subscriptions.length } clear() { this.subscriptions.length = 0 } } const Ye = e => e * 1e3, nn = e => e / 1e3, kx = (e, a) => a ? e * (1e3 / a) : 0, Bx = (e, a, s) => (((1 - 3 * s + 3 * a) * e + (3 * s - 6 * a)) * e + 3 * a) * e, t2 = 1e-7, e2 = 12; function n2(e, a, s, o, l) { let u, f, h = 0; do f = a + (s - a) / 2, u = Bx(f, o, l) - e, u > 0 ? s = f : a = f; while (Math.abs(u) > t2 && ++h < e2); return f } function Ho(e, a, s, o) { if (e === a && s === o) return an; const l = u => n2(u, 0, 1, e, s); return u => u === 0 || u === 1 ? u : Bx(l(u), a, o) } const Ux = e => a => a <= .5 ? e(2 * a) / 2 : (2 - e(2 * (1 - a))) / 2, Hx = e => a => 1 - e(1 - a), Px = Ho(.33, 1.53, .69, .99), ph = Hx(Px), qx = Ux(ph), Gx = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * ph(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))), gh = e => 1 - Math.sin(Math.acos(e)), Yx = Hx(gh), Xx = Ux(gh), a2 = Ho(.42, 0, 1, 1), i2 = Ho(0, 0, .58, 1), Fx = Ho(.42, 0, .58, 1), s2 = e => Array.isArray(e) && typeof e[0] != "number", Kx = e => Array.isArray(e) && typeof e[0] == "number", o2 = { linear: an, easeIn: a2, easeInOut: Fx, easeOut: i2, circIn: gh, circInOut: Xx, circOut: Yx, backIn: ph, backInOut: qx, backOut: Px, anticipate: Gx }, r2 = e => typeof e == "string", mv = e => { if (Kx(e)) { hh(e.length === 4); const [a, s, o, l] = e; return Ho(a, s, o, l) } else if (r2(e)) return o2[e]; return e }, cl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]; function l2(e, a) { let s = new Set, o = new Set, l = !1, u = !1; const f = new WeakSet; let h = { delta: 0, timestamp: 0, isProcessing: !1 }; function m(g) { f.has(g) && (p.schedule(g), e()), g(h) } const p = { schedule: (g, y = !1, b = !1) => { const T = b && l ? s : o; return y && f.add(g), T.add(g), g }, cancel: g => { o.delete(g), f.delete(g) }, process: g => { if (h = g, l) { u = !0; return } l = !0; const y = s; s = o, o = y, s.forEach(m), s.clear(), l = !1, u && (u = !1, p.process(g)) } }; return p } const c2 = 40; function Zx(e, a) { let s = !1, o = !0; const l = { delta: 0, timestamp: 0, isProcessing: !1 }, u = () => s = !0, f = cl.reduce((D, _) => (D[_] = l2(u), D), {}), { setup: h, read: m, resolveKeyframes: p, preUpdate: g, update: y, preRender: b, render: w, postRender: T } = f, C = () => { const D = Da.useManualTiming, _ = D ? l.timestamp : performance.now(); s = !1, D || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(_ - l.timestamp, c2), 1)), l.timestamp = _, l.isProcessing = !0, h.process(l), m.process(l), p.process(l), g.process(l), y.process(l), b.process(l), w.process(l), T.process(l), l.isProcessing = !1, s && a && (o = !1, e(C)) }, A = () => { s = !0, o = !0, l.isProcessing || e(C) }; return { schedule: cl.reduce((D, _) => { const q = f[_]; return D[_] = (K, U = !1, H = !1) => (s || A(), q.schedule(K, U, H)), D }, {}), cancel: D => { for (let _ = 0; _ < cl.length; _++)f[cl[_]].cancel(D) }, state: l, steps: f } } const { schedule: Pt, cancel: Oa, state: ge, steps: Xf } = Zx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : an, !0); let Al; function u2() { Al = void 0 } const we = { now: () => (Al === void 0 && we.set(ge.isProcessing || Da.useManualTiming ? ge.timestamp : performance.now()), Al), set: e => { Al = e, queueMicrotask(u2) } }, Qx = e => a => typeof a == "string" && a.startsWith(e), Wx = Qx("--"), f2 = Qx("var(--"), yh = e => f2(e) ? d2.test(e.split("/*")[0].trim()) : !1, d2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu; function pv(e) { return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--") } const ps = { test: e => typeof e == "number", parse: parseFloat, transform: e => e }, Oo = { ...ps, transform: e => Rn(0, 1, e) }, ul = { ...ps, default: 1 }, Ao = e => Math.round(e * 1e5) / 1e5, vh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu; function h2(e) { return e == null } const m2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, xh = (e, a) => s => !!(typeof s == "string" && m2.test(s) && s.startsWith(e) || a && !h2(s) && Object.prototype.hasOwnProperty.call(s, a)), Ix = (e, a, s) => o => { if (typeof o != "string") return o; const [l, u, f, h] = o.match(vh); return { [e]: parseFloat(l), [a]: parseFloat(u), [s]: parseFloat(f), alpha: h !== void 0 ? parseFloat(h) : 1 } }, p2 = e => Rn(0, 255, e), Ff = { ...ps, transform: e => Math.round(p2(e)) }, ri = { test: xh("rgb", "red"), parse: Ix("red", "green", "blue"), transform: ({ red: e, green: a, blue: s, alpha: o = 1 }) => "rgba(" + Ff.transform(e) + ", " + Ff.transform(a) + ", " + Ff.transform(s) + ", " + Ao(Oo.transform(o)) + ")" }; function g2(e) { let a = "", s = "", o = "", l = ""; return e.length > 5 ? (a = e.substring(1, 3), s = e.substring(3, 5), o = e.substring(5, 7), l = e.substring(7, 9)) : (a = e.substring(1, 2), s = e.substring(2, 3), o = e.substring(3, 4), l = e.substring(4, 5), a += a, s += s, o += o, l += l), { red: parseInt(a, 16), green: parseInt(s, 16), blue: parseInt(o, 16), alpha: l ? parseInt(l, 16) / 255 : 1 } } const xd = { test: xh("#"), parse: g2, transform: ri.transform }, Po = e => ({ test: a => typeof a == "string" && a.endsWith(e) && a.split(" ").length === 1, parse: parseFloat, transform: a => `${a}${e}` }), Qn = Po("deg"), En = Po("%"), rt = Po("px"), y2 = Po("vh"), v2 = Po("vw"), gv = { ...En, parse: e => En.parse(e) / 100, transform: e => En.transform(e * 100) }, os = { test: xh("hsl", "hue"), parse: Ix("hue", "saturation", "lightness"), transform: ({ hue: e, saturation: a, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + En.transform(Ao(a)) + ", " + En.transform(Ao(s)) + ", " + Ao(Oo.transform(o)) + ")" }, ee = { test: e => ri.test(e) || xd.test(e) || os.test(e), parse: e => ri.test(e) ? ri.parse(e) : os.test(e) ? os.parse(e) : xd.parse(e), transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? ri.transform(e) : os.transform(e), getAnimatableNone: e => { const a = ee.parse(e); return a.alpha = 0, ee.transform(a) } }, x2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu; function b2(e) { return isNaN(e) && typeof e == "string" && (e.match(vh)?.length || 0) + (e.match(x2)?.length || 0) > 0 } const $x = "number", Jx = "color", S2 = "var", C2 = "var(", yv = "${}", w2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu; function fs(e) { const a = e.toString(), s = [], o = { color: [], number: [], var: [] }, l = []; let u = 0; const h = a.replace(w2, m => (ee.test(m) ? (o.color.push(u), l.push(Jx), s.push(ee.parse(m))) : m.startsWith(C2) ? (o.var.push(u), l.push(S2), s.push(m)) : (o.number.push(u), l.push($x), s.push(parseFloat(m))), ++u, yv)).split(yv); return { values: s, split: h, indexes: o, types: l } } function E2(e) { return fs(e).values } function tb({ split: e, types: a }) { const s = e.length; return o => { let l = ""; for (let u = 0; u < s; u++)if (l += e[u], o[u] !== void 0) { const f = a[u]; f === $x ? l += Ao(o[u]) : f === Jx ? l += ee.transform(o[u]) : l += o[u] } return l } } function A2(e) { return tb(fs(e)) } const T2 = e => typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e, R2 = (e, a) => typeof e == "number" ? a?.trim().endsWith("/") ? e : 0 : T2(e); function M2(e) { const a = fs(e); return tb(a)(a.values.map((o, l) => R2(o, a.split[l]))) } const hn = { test: b2, parse: E2, createTransformer: A2, getAnimatableNone: M2 }; function Kf(e, a, s) { return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? e + (a - e) * 6 * s : s < 1 / 2 ? a : s < 2 / 3 ? e + (a - e) * (2 / 3 - s) * 6 : e } function N2({ hue: e, saturation: a, lightness: s, alpha: o }) { e /= 360, a /= 100, s /= 100; let l = 0, u = 0, f = 0; if (!a) l = u = f = s; else { const h = s < .5 ? s * (1 + a) : s + a - s * a, m = 2 * s - h; l = Kf(m, h, e + 1 / 3), u = Kf(m, h, e), f = Kf(m, h, e - 1 / 3) } return { red: Math.round(l * 255), green: Math.round(u * 255), blue: Math.round(f * 255), alpha: o } } function Hl(e, a) { return s => s > 0 ? a : e } const Ht = (e, a, s) => e + (a - e) * s, Zf = (e, a, s) => { const o = e * e, l = s * (a * a - o) + o; return l < 0 ? 0 : Math.sqrt(l) }, D2 = [xd, ri, os], O2 = e => D2.find(a => a.test(e)); function vv(e) { const a = O2(e); if (!a) return !1; let s = a.parse(e); return a === os && (s = N2(s)), s } const xv = (e, a) => { const s = vv(e), o = vv(a); if (!s || !o) return Hl(e, a); const l = { ...s }; return u => (l.red = Zf(s.red, o.red, u), l.green = Zf(s.green, o.green, u), l.blue = Zf(s.blue, o.blue, u), l.alpha = Ht(s.alpha, o.alpha, u), ri.transform(l)) }, bd = new Set(["none", "hidden"]); function j2(e, a) { return bd.has(e) ? s => s <= 0 ? e : a : s => s >= 1 ? a : e } function _2(e, a) { return s => Ht(e, a, s) } function bh(e) { return typeof e == "number" ? _2 : typeof e == "string" ? yh(e) ? Hl : ee.test(e) ? xv : L2 : Array.isArray(e) ? eb : typeof e == "object" ? ee.test(e) ? xv : z2 : Hl } function eb(e, a) { const s = [...e], o = s.length, l = e.map((u, f) => bh(u)(u, a[f])); return u => { for (let f = 0; f < o; f++)s[f] = l[f](u); return s } } function z2(e, a) { const s = { ...e, ...a }, o = {}; for (const l in s) e[l] !== void 0 && a[l] !== void 0 && (o[l] = bh(e[l])(e[l], a[l])); return l => { for (const u in o) s[u] = o[u](l); return s } } function V2(e, a) { const s = [], o = { color: 0, var: 0, number: 0 }; for (let l = 0; l < a.values.length; l++) { const u = a.types[l], f = e.indexes[u][o[u]], h = e.values[f] ?? 0; s[l] = h, o[u]++ } return s } const L2 = (e, a) => { const s = hn.createTransformer(a), o = fs(e), l = fs(a); return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? bd.has(e) && !l.values.length || bd.has(a) && !o.values.length ? j2(e, a) : Uo(eb(V2(o, l), l.values), s) : Hl(e, a) }; function nb(e, a, s) { return typeof e == "number" && typeof a == "number" && typeof s == "number" ? Ht(e, a, s) : bh(e)(e, a) } const k2 = e => { const a = ({ timestamp: s }) => e(s); return { start: (s = !0) => Pt.update(a, s), stop: () => Oa(a), now: () => ge.isProcessing ? ge.timestamp : we.now() } }, ab = (e, a, s = 10) => { let o = ""; const l = Math.max(Math.round(a / s), 2); for (let u = 0; u < l; u++)o += Math.round(e(u / (l - 1)) * 1e4) / 1e4 + ", "; return `linear(${o.substring(0, o.length - 2)})` }, Pl = 2e4; function Sh(e) { let a = 0; const s = 50; let o = e.next(a); for (; !o.done && a < Pl;)a += s, o = e.next(a); return a >= Pl ? 1 / 0 : a } function B2(e, a = 100, s) { const o = s({ ...e, keyframes: [0, a] }), l = Math.min(Sh(o), Pl); return { type: "keyframes", ease: u => o.next(l * u).value / a, duration: nn(l) } } const Kt = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: .3, visualDuration: .3, restSpeed: { granular: .01, default: 2 }, restDelta: { granular: .005, default: .5 }, minDuration: .01, maxDuration: 10, minDamping: .05, maxDamping: 1 }; function Sd(e, a) { return e * Math.sqrt(1 - a * a) } const U2 = 12; function H2(e, a, s) { let o = s; for (let l = 1; l < U2; l++)o = o - e(o) / a(o); return o } const Qf = .001; function P2({ duration: e = Kt.duration, bounce: a = Kt.bounce, velocity: s = Kt.velocity, mass: o = Kt.mass }) { let l, u, f = 1 - a; f = Rn(Kt.minDamping, Kt.maxDamping, f), e = Rn(Kt.minDuration, Kt.maxDuration, nn(e)), f < 1 ? (l = p => { const g = p * f, y = g * e, b = g - s, w = Sd(p, f), T = Math.exp(-y); return Qf - b / w * T }, u = p => { const y = p * f * e, b = y * s + s, w = Math.pow(f, 2) * Math.pow(p, 2) * e, T = Math.exp(-y), C = Sd(Math.pow(p, 2), f); return (-l(p) + Qf > 0 ? -1 : 1) * ((b - w) * T) / C }) : (l = p => { const g = Math.exp(-p * e), y = (p - s) * e + 1; return -Qf + g * y }, u = p => { const g = Math.exp(-p * e), y = (s - p) * (e * e); return g * y }); const h = 5 / e, m = H2(l, u, h); if (e = Ye(e), isNaN(m)) return { stiffness: Kt.stiffness, damping: Kt.damping, duration: e }; { const p = Math.pow(m, 2) * o; return { stiffness: p, damping: f * 2 * Math.sqrt(o * p), duration: e } } } const q2 = ["duration", "bounce"], G2 = ["stiffness", "damping", "mass"]; function bv(e, a) { return a.some(s => e[s] !== void 0) } function Y2(e) { let a = { velocity: Kt.velocity, stiffness: Kt.stiffness, damping: Kt.damping, mass: Kt.mass, isResolvedFromDuration: !1, ...e }; if (!bv(e, G2) && bv(e, q2)) if (a.velocity = 0, e.visualDuration) { const s = e.visualDuration, o = 2 * Math.PI / (s * 1.2), l = o * o, u = 2 * Rn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l); a = { ...a, mass: Kt.mass, stiffness: l, damping: u } } else { const s = P2({ ...e, velocity: 0 }); a = { ...a, ...s, mass: Kt.mass }, a.isResolvedFromDuration = !0 } return a } function ql(e = Kt.visualDuration, a = Kt.bounce) { const s = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: a } : e; let { restSpeed: o, restDelta: l } = s; const u = s.keyframes[0], f = s.keyframes[s.keyframes.length - 1], h = { done: !1, value: u }, { stiffness: m, damping: p, mass: g, duration: y, velocity: b, isResolvedFromDuration: w } = Y2({ ...s, velocity: -nn(s.velocity || 0) }), T = b || 0, C = p / (2 * Math.sqrt(m * g)), A = f - u, R = nn(Math.sqrt(m / g)), M = Math.abs(A) < 5; o || (o = M ? Kt.restSpeed.granular : Kt.restSpeed.default), l || (l = M ? Kt.restDelta.granular : Kt.restDelta.default); let D, _, q, K, U, H; if (C < 1) q = Sd(R, C), K = (T + C * R * A) / q, D = W => { const et = Math.exp(-C * R * W); return f - et * (K * Math.sin(q * W) + A * Math.cos(q * W)) }, U = C * R * K + A * q, H = C * R * A - K * q, _ = W => Math.exp(-C * R * W) * (U * Math.sin(q * W) + H * Math.cos(q * W)); else if (C === 1) { D = et => f - Math.exp(-R * et) * (A + (T + R * A) * et); const W = T + R * A; _ = et => Math.exp(-R * et) * (R * W * et - T) } else { const W = R * Math.sqrt(C * C - 1); D = ut => { const lt = Math.exp(-C * R * ut), z = Math.min(W * ut, 300); return f - lt * ((T + C * R * A) * Math.sinh(z) + W * A * Math.cosh(z)) / W }; const et = (T + C * R * A) / W, at = C * R * et - A * W, mt = C * R * A - et * W; _ = ut => { const lt = Math.exp(-C * R * ut), z = Math.min(W * ut, 300); return lt * (at * Math.sinh(z) + mt * Math.cosh(z)) } } const J = { calculatedDuration: w && y || null, velocity: W => Ye(_(W)), next: W => { if (!w && C < 1) { const at = Math.exp(-C * R * W), mt = Math.sin(q * W), ut = Math.cos(q * W), lt = f - at * (K * mt + A * ut), z = Ye(at * (U * mt + H * ut)); return h.done = Math.abs(z) <= o && Math.abs(f - lt) <= l, h.value = h.done ? f : lt, h } const et = D(W); if (w) h.done = W >= y; else { const at = Ye(_(W)); h.done = Math.abs(at) <= o && Math.abs(f - et) <= l } return h.value = h.done ? f : et, h }, toString: () => { const W = Math.min(Sh(J), Pl), et = ab(at => J.next(W * at).value, W, 30); return W + "ms " + et }, toTransition: () => { } }; return J } ql.applyToOptions = e => { const a = B2(e, 100, ql); return e.ease = a.ease, e.duration = Ye(a.duration), e.type = "keyframes", e }; const X2 = 5; function ib(e, a, s) { const o = Math.max(a - X2, 0); return kx(s - e(o), a - o) } function Cd({ keyframes: e, velocity: a = 0, power: s = .8, timeConstant: o = 325, bounceDamping: l = 10, bounceStiffness: u = 500, modifyTarget: f, min: h, max: m, restDelta: p = .5, restSpeed: g }) { const y = e[0], b = { done: !1, value: y }, w = H => h !== void 0 && H < h || m !== void 0 && H > m, T = H => h === void 0 ? m : m === void 0 || Math.abs(h - H) < Math.abs(m - H) ? h : m; let C = s * a; const A = y + C, R = f === void 0 ? A : f(A); R !== A && (C = R - y); const M = H => -C * Math.exp(-H / o), D = H => R + M(H), _ = H => { const J = M(H), W = D(H); b.done = Math.abs(J) <= p, b.value = b.done ? R : W }; let q, K; const U = H => { w(b.value) && (q = H, K = ql({ keyframes: [b.value, T(b.value)], velocity: ib(D, H, b.value), damping: l, stiffness: u, restDelta: p, restSpeed: g })) }; return U(0), { calculatedDuration: null, next: H => { let J = !1; return !K && q === void 0 && (J = !0, _(H), U(H)), q !== void 0 && H >= q ? K.next(H - q) : (!J && _(H), b) } } } function F2(e, a, s) { const o = [], l = s || Da.mix || nb, u = e.length - 1; for (let f = 0; f < u; f++) { let h = l(e[f], e[f + 1]); if (a) { const m = Array.isArray(a) ? a[f] || an : a; h = Uo(m, h) } o.push(h) } return o } function K2(e, a, { clamp: s = !0, ease: o, mixer: l } = {}) { const u = e.length; if (hh(u === a.length), u === 1) return () => a[0]; if (u === 2 && a[0] === a[1]) return () => a[1]; const f = e[0] === e[1]; e[0] > e[u - 1] && (e = [...e].reverse(), a = [...a].reverse()); const h = F2(a, o, l), m = h.length, p = g => { if (f && g < e[0]) return a[0]; let y = 0; if (m > 1) for (; y < e.length - 2 && !(g < e[y + 1]); y++); const b = Do(e[y], e[y + 1], g); return h[y](b) }; return s ? g => p(Rn(e[0], e[u - 1], g)) : p } function Z2(e, a) { const s = e[e.length - 1]; for (let o = 1; o <= a; o++) { const l = Do(0, a, o); e.push(Ht(s, 1, l)) } } function Q2(e) { const a = [0]; return Z2(a, e.length - 1), a } function W2(e, a) { return e.map(s => s * a) } function I2(e, a) { return e.map(() => a || Fx).splice(0, e.length - 1) } function To({ duration: e = 300, keyframes: a, times: s, ease: o = "easeInOut" }) { const l = s2(o) ? o.map(mv) : mv(o), u = { done: !1, value: a[0] }, f = W2(s && s.length === a.length ? s : Q2(a), e), h = K2(f, a, { ease: Array.isArray(l) ? l : I2(a, l) }); return { calculatedDuration: e, next: m => (u.value = h(m), u.done = m >= e, u) } } const $2 = e => e !== null; function sc(e, { repeat: a, repeatType: s = "loop" }, o, l = 1) { const u = e.filter($2), h = l < 0 || a && s !== "loop" && a % 2 === 1 ? 0 : u.length - 1; return !h || o === void 0 ? u[h] : o } const J2 = { decay: Cd, inertia: Cd, tween: To, keyframes: To, spring: ql }; function sb(e) { typeof e.type == "string" && (e.type = J2[e.type]) } class Ch { constructor() { this.updateFinished() } get finished() { return this._finished } updateFinished() { this._finished = new Promise(a => { this.resolve = a }) } notifyFinished() { this.resolve() } then(a, s) { return this.finished.then(a, s) } } const tT = e => e / 100; class Gl extends Ch { constructor(a) { super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: !1, value: void 0 }, this.stop = () => { const { motionValue: s } = this.options; s && s.updatedAt !== we.now() && this.tick(we.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.()) }, this.options = a, this.initAnimation(), this.play(), a.autoplay === !1 && this.pause() } initAnimation() { const { options: a } = this; sb(a); const { type: s = To, repeat: o = 0, repeatDelay: l = 0, repeatType: u, velocity: f = 0 } = a; let { keyframes: h } = a; const m = s || To; m !== To && typeof h[0] != "number" && (this.mixKeyframes = Uo(tT, nb(h[0], h[1])), h = [0, 100]); const p = m({ ...a, keyframes: h }); u === "mirror" && (this.mirroredGenerator = m({ ...a, keyframes: [...h].reverse(), velocity: -f })), p.calculatedDuration === null && (p.calculatedDuration = Sh(p)); const { calculatedDuration: g } = p; this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (o + 1) - l, this.generator = p } updateTime(a) { const s = Math.round(a - this.startTime) * this.playbackSpeed; this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s } tick(a, s = !1) { const { generator: o, totalDuration: l, mixKeyframes: u, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: m } = this; if (this.startTime === null) return o.next(0); const { delay: p = 0, keyframes: g, repeat: y, repeatType: b, repeatDelay: w, type: T, onUpdate: C, finalKeyframe: A } = this.options; this.speed > 0 ? this.startTime = Math.min(this.startTime, a) : this.speed < 0 && (this.startTime = Math.min(a - l / this.speed, this.startTime)), s ? this.currentTime = a : this.updateTime(a); const R = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), M = this.playbackSpeed >= 0 ? R < 0 : R > l; this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l); let D = this.currentTime, _ = o; if (y) { const H = Math.min(this.currentTime, l) / h; let J = Math.floor(H), W = H % 1; !W && H >= 1 && (W = 1), W === 1 && J--, J = Math.min(J, y + 1), J % 2 && (b === "reverse" ? (W = 1 - W, w && (W -= w / h)) : b === "mirror" && (_ = f)), D = Rn(0, 1, W) * h } let q; M ? (this.delayState.value = g[0], q = this.delayState) : q = _.next(D), u && !M && (q.value = u(q.value)); let { done: K } = q; !M && m !== null && (K = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0); const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && K); return U && T !== Cd && (q.value = sc(g, this.options, A, this.speed)), C && C(q.value), U && this.finish(), q } then(a, s) { return this.finished.then(a, s) } get duration() { return nn(this.calculatedDuration) } get iterationDuration() { const { delay: a = 0 } = this.options || {}; return this.duration + nn(a) } get time() { return nn(this.currentTime) } set time(a) { a = Ye(a), this.currentTime = a, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = a : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = a, this.tick(a)) } getGeneratorVelocity() { const a = this.currentTime; if (a <= 0) return this.options.velocity || 0; if (this.generator.velocity) return this.generator.velocity(a); const s = this.generator.next(a).value; return ib(o => this.generator.next(o).value, a, s) } get speed() { return this.playbackSpeed } set speed(a) { const s = this.playbackSpeed !== a; s && this.driver && this.updateTime(we.now()), this.playbackSpeed = a, s && this.driver && (this.time = nn(this.currentTime)) } play() { if (this.isStopped) return; const { driver: a = k2, startTime: s } = this.options; this.driver || (this.driver = a(l => this.tick(l))), this.options.onPlay?.(); const o = this.driver.now(); this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = s ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start() } pause() { this.state = "paused", this.updateTime(we.now()), this.holdTime = this.currentTime } complete() { this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null } finish() { this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.() } cancel() { this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.() } teardown() { this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null } stopDriver() { this.driver && (this.driver.stop(), this.driver = void 0) } sample(a) { return this.startTime = 0, this.tick(a, !0) } attachTimeline(a) { return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), a.observe(this) } } function eT(e) { for (let a = 1; a < e.length; a++)e[a] ?? (e[a] = e[a - 1]) } const li = e => e * 180 / Math.PI, wd = e => { const a = li(Math.atan2(e[1], e[0])); return Ed(a) }, nT = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2, rotate: wd, rotateZ: wd, skewX: e => li(Math.atan(e[1])), skewY: e => li(Math.atan(e[2])), skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2 }, Ed = e => (e = e % 360, e < 0 && (e += 360), e), Sv = wd, Cv = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]), wv = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]), aT = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Cv, scaleY: wv, scale: e => (Cv(e) + wv(e)) / 2, rotateX: e => Ed(li(Math.atan2(e[6], e[5]))), rotateY: e => Ed(li(Math.atan2(-e[2], e[0]))), rotateZ: Sv, rotate: Sv, skewX: e => li(Math.atan(e[4])), skewY: e => li(Math.atan(e[1])), skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2 }; function Ad(e) { return e.includes("scale") ? 1 : 0 } function Td(e, a) { if (!e || e === "none") return Ad(a); const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u); let o, l; if (s) o = aT, l = s; else { const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u); o = nT, l = h } if (!l) return Ad(a); const u = o[a], f = l[1].split(",").map(sT); return typeof u == "function" ? u(f) : f[u] } const iT = (e, a) => { const { transform: s = "none" } = getComputedStyle(e); return Td(s, a) }; function sT(e) { return parseFloat(e.trim()) } const gs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], ys = new Set([...gs, "pathRotation"]), Ev = e => e === ps || e === rt, oT = new Set(["x", "y", "z"]), rT = gs.filter(e => !oT.has(e)); function lT(e) { const a = []; return rT.forEach(s => { const o = e.getValue(s); o !== void 0 && (a.push([s, o.get()]), o.set(s.startsWith("scale") ? 1 : 0)) }), a } const Na = { width: ({ x: e }, { paddingLeft: a = "0", paddingRight: s = "0", boxSizing: o }) => { const l = e.max - e.min; return o === "border-box" ? l : l - parseFloat(a) - parseFloat(s) }, height: ({ y: e }, { paddingTop: a = "0", paddingBottom: s = "0", boxSizing: o }) => { const l = e.max - e.min; return o === "border-box" ? l : l - parseFloat(a) - parseFloat(s) }, top: (e, { top: a }) => parseFloat(a), left: (e, { left: a }) => parseFloat(a), bottom: ({ y: e }, { top: a }) => parseFloat(a) + (e.max - e.min), right: ({ x: e }, { left: a }) => parseFloat(a) + (e.max - e.min), x: (e, { transform: a }) => Td(a, "x"), y: (e, { transform: a }) => Td(a, "y") }; Na.translateX = Na.x; Na.translateY = Na.y; const ci = new Set; let Rd = !1, Md = !1, Nd = !1; function ob() { if (Md) { const e = Array.from(ci).filter(o => o.needsMeasurement), a = new Set(e.map(o => o.element)), s = new Map; a.forEach(o => { const l = lT(o); l.length && (s.set(o, l), o.render()) }), e.forEach(o => o.measureInitialState()), a.forEach(o => { o.render(); const l = s.get(o); l && l.forEach(([u, f]) => { o.getValue(u)?.set(f) }) }), e.forEach(o => o.measureEndState()), e.forEach(o => { o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY) }) } Md = !1, Rd = !1, ci.forEach(e => e.complete(Nd)), ci.clear() } function rb() { ci.forEach(e => { e.readKeyframes(), e.needsMeasurement && (Md = !0) }) } function cT() { Nd = !0, rb(), ob(), Nd = !1 } class wh { constructor(a, s, o, l, u, f = !1) { this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...a], this.onComplete = s, this.name = o, this.motionValue = l, this.element = u, this.isAsync = f } scheduleResolve() { this.state = "scheduled", this.isAsync ? (ci.add(this), Rd || (Rd = !0, Pt.read(rb), Pt.resolveKeyframes(ob))) : (this.readKeyframes(), this.complete()) } readKeyframes() { const { unresolvedKeyframes: a, name: s, element: o, motionValue: l } = this; if (a[0] === null) { const u = l?.get(), f = a[a.length - 1]; if (u !== void 0) a[0] = u; else if (o && s) { const h = o.readValue(s, f); h != null && (a[0] = h) } a[0] === void 0 && (a[0] = f), l && u === void 0 && l.set(a[0]) } eT(a) } setFinalKeyframe() { } measureInitialState() { } renderEndStyles() { } measureEndState() { } complete(a = !1) { this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a), ci.delete(this) } cancel() { this.state === "scheduled" && (ci.delete(this), this.state = "pending") } resume() { this.state === "pending" && this.scheduleResolve() } } const uT = e => e.startsWith("--"); function lb(e, a, s) { uT(a) ? e.style.setProperty(a, s) : e.style[a] = s } const fT = {}; function cb(e, a) { const s = Lx(e); return () => fT[a] ?? s() } const dT = cb(() => window.ScrollTimeline !== void 0, "scrollTimeline"), ub = cb(() => { try { document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" }) } catch { return !1 } return !0 }, "linearEasing"), wo = ([e, a, s, o]) => `cubic-bezier(${e}, ${a}, ${s}, ${o})`, Av = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: wo([0, .65, .55, 1]), circOut: wo([.55, 0, 1, .45]), backIn: wo([.31, .01, .66, -.59]), backOut: wo([.33, 1.53, .69, .99]) }; function fb(e, a) { if (e) return typeof e == "function" ? ub() ? ab(e, a) : "ease-out" : Kx(e) ? wo(e) : Array.isArray(e) ? e.map(s => fb(s, a) || Av.easeOut) : Av[e] } function hT(e, a, s, { delay: o = 0, duration: l = 300, repeat: u = 0, repeatType: f = "loop", ease: h = "easeOut", times: m } = {}, p = void 0) { const g = { [a]: s }; m && (g.offset = m); const y = fb(h, l); Array.isArray(y) && (g.easing = y); const b = { delay: o, duration: l, easing: Array.isArray(y) ? "linear" : y, fill: "both", iterations: u + 1, direction: f === "reverse" ? "alternate" : "normal" }; return p && (b.pseudoElement = p), e.animate(g, b) } function db(e) { return typeof e == "function" && "applyToOptions" in e } function mT({ type: e, ...a }) { return db(e) && ub() ? e.applyToOptions(a) : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = "easeOut"), a) } class hb extends Ch { constructor(a) { if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !a) return; const { element: s, name: o, keyframes: l, pseudoElement: u, allowFlatten: f = !1, finalKeyframe: h, onComplete: m } = a; this.isPseudoElement = !!u, this.allowFlatten = f, this.options = a, hh(typeof a.type != "string"); const p = mT(a); this.animation = hT(s, o, l, p, u), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => { if (this.finishedTime = this.time, !u) { const g = sc(l, this.options, h, this.speed); this.updateMotionValue && this.updateMotionValue(g), lb(s, o, g), this.animation.cancel() } m?.(), this.notifyFinished() } } play() { this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished()) } pause() { this.animation.pause() } complete() { this.animation.finish?.() } cancel() { try { this.animation.cancel() } catch { } } stop() { if (this.isStopped) return; this.isStopped = !0; const { state: a } = this; a === "idle" || a === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel()) } commitStyles() { const a = this.options?.element; !this.isPseudoElement && a?.isConnected && this.animation.commitStyles?.() } get duration() { const a = this.animation.effect?.getComputedTiming?.().duration || 0; return nn(Number(a)) } get iterationDuration() { const { delay: a = 0 } = this.options || {}; return this.duration + nn(a) } get time() { return nn(Number(this.animation.currentTime) || 0) } set time(a) { const s = this.finishedTime !== null; this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Ye(a), s && this.animation.pause() } get speed() { return this.animation.playbackRate } set speed(a) { a < 0 && (this.finishedTime = null), this.animation.playbackRate = a } get state() { return this.finishedTime !== null ? "finished" : this.animation.playState } get startTime() { return this.manualStartTime ?? Number(this.animation.startTime) } set startTime(a) { this.manualStartTime = this.animation.startTime = a } attachTimeline({ timeline: a, rangeStart: s, rangeEnd: o, observe: l }) { return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, a && dT() ? (this.animation.timeline = a, s && (this.animation.rangeStart = s), o && (this.animation.rangeEnd = o), an) : l(this) } } const mb = { anticipate: Gx, backInOut: qx, circInOut: Xx }; function pT(e) { return e in mb } function gT(e) { typeof e.ease == "string" && pT(e.ease) && (e.ease = mb[e.ease]) } const Wf = 10; class yT extends hb { constructor(a) { gT(a), sb(a), super(a), a.startTime !== void 0 && a.autoplay !== !1 && (this.startTime = a.startTime), this.options = a } updateMotionValue(a) { const { motionValue: s, onUpdate: o, onComplete: l, element: u, ...f } = this.options; if (!s) return; if (a !== void 0) { s.set(a); return } const h = new Gl({ ...f, autoplay: !1 }), m = Math.max(Wf, we.now() - this.startTime), p = Rn(0, Wf, m - Wf), g = h.sample(m).value, { name: y } = this.options; u && y && lb(u, y, g), s.setWithVelocity(h.sample(Math.max(0, m - p)).value, g, p), h.stop() } } const Tv = (e, a) => a === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (hn.test(e) || e === "0") && !e.startsWith("url(")); function vT(e) { const a = e[0]; if (e.length === 1) return !0; for (let s = 0; s < e.length; s++)if (e[s] !== a) return !0 } function xT(e, a, s, o) { const l = e[0]; if (l === null) return !1; if (a === "display" || a === "visibility") return !0; const u = e[e.length - 1], f = Tv(l, a), h = Tv(u, a); return !f || !h ? !1 : vT(e) || (s === "spring" || db(s)) && o } function Dd(e) { e.duration = 0, e.type = "keyframes" } const pb = new Set(["opacity", "clipPath", "filter", "transform"]), bT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/; function ST(e) { for (let a = 0; a < e.length; a++)if (typeof e[a] == "string" && bT.test(e[a])) return !0; return !1 } const CT = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]), wT = Lx(() => Object.hasOwnProperty.call(Element.prototype, "animate")); function ET(e) { const { motionValue: a, name: s, repeatDelay: o, repeatType: l, damping: u, type: f, keyframes: h } = e; if (!(a?.owner?.current instanceof HTMLElement)) return !1; const { onUpdate: p, transformTemplate: g } = a.owner.getProps(); return wT() && s && (pb.has(s) || CT.has(s) && ST(h)) && (s !== "transform" || !g) && !p && !o && l !== "mirror" && u !== 0 && f !== "inertia" } const AT = 40; class TT extends Ch { constructor({ autoplay: a = !0, delay: s = 0, type: o = "keyframes", repeat: l = 0, repeatDelay: u = 0, repeatType: f = "loop", keyframes: h, name: m, motionValue: p, element: g, ...y }) { super(), this.stop = () => { this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel() }, this.createdAt = we.now(); const b = { autoplay: a, delay: s, type: o, repeat: l, repeatDelay: u, repeatType: f, name: m, motionValue: p, element: g, ...y }, w = g?.KeyframeResolver || wh; this.keyframeResolver = new w(h, (T, C, A) => this.onKeyframesResolved(T, C, b, !A), m, p, g), this.keyframeResolver?.scheduleResolve() } onKeyframesResolved(a, s, o, l) { this.keyframeResolver = void 0; const { name: u, type: f, velocity: h, delay: m, isHandoff: p, onUpdate: g } = o; this.resolvedAt = we.now(); let y = !0; xT(a, u, f, h) || (y = !1, (Da.instantAnimations || !m) && g?.(sc(a, o, s)), a[0] = a[a.length - 1], Dd(o), o.repeat = 0); const w = { startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > AT ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: s, ...o, keyframes: a }, T = y && !p && ET(w), C = w.motionValue?.owner?.current; let A; if (T) try { A = new yT({ ...w, element: C }) } catch { A = new Gl(w) } else A = new Gl(w); A.finished.then(() => { this.notifyFinished() }).catch(an), this.pendingTimeline && (this.stopTimeline = A.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = A } get finished() { return this._animation ? this.animation.finished : this._finished } then(a, s) { return this.finished.finally(a).then(() => { }) } get animation() { return this._animation || (this.keyframeResolver?.resume(), cT()), this._animation } get duration() { return this.animation.duration } get iterationDuration() { return this.animation.iterationDuration } get time() { return this.animation.time } set time(a) { this.animation.time = a } get speed() { return this.animation.speed } get state() { return this.animation.state } set speed(a) { this.animation.speed = a } get startTime() { return this.animation.startTime } attachTimeline(a) { return this._animation ? this.stopTimeline = this.animation.attachTimeline(a) : this.pendingTimeline = a, () => this.stop() } play() { this.animation.play() } pause() { this.animation.pause() } complete() { this.animation.complete() } cancel() { this._animation && this.animation.cancel(), this.keyframeResolver?.cancel() } } function gb(e, a, s, o = 0, l = 1) { const u = Array.from(e).sort((p, g) => p.sortNodePosition(g)).indexOf(a), f = e.size, h = (f - 1) * o; return typeof s == "function" ? s(u, f) : l === 1 ? u * o : h - u * o } const Rv = 30, RT = e => !isNaN(parseFloat(e)); class MT { constructor(a, s = {}) { this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = o => { const l = we.now(); if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (const u of this.dependents) u.dirty() }, this.hasAnimated = !1, this.setCurrent(a), this.owner = s.owner } setCurrent(a) { this.current = a, this.updatedAt = we.now(), this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = RT(this.current)) } setPrevFrameValue(a = this.current) { this.prevFrameValue = a, this.prevUpdatedAt = this.updatedAt } onChange(a) { return this.on("change", a) } on(a, s) { this.events[a] || (this.events[a] = new mh); const o = this.events[a].add(s); return a === "change" ? () => { o(), Pt.read(() => { this.events.change.getSize() || this.stop() }) } : o } clearListeners() { for (const a in this.events) this.events[a].clear() } attach(a, s) { this.passiveEffect = a, this.stopPassiveEffect = s } set(a) { this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a) } setWithVelocity(a, s, o) { this.set(s), this.prev = void 0, this.prevFrameValue = a, this.prevUpdatedAt = this.updatedAt - o } jump(a, s = !0) { this.updateAndNotify(a), this.prev = a, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } dirty() { this.events.change?.notify(this.current) } addDependent(a) { this.dependents || (this.dependents = new Set), this.dependents.add(a) } removeDependent(a) { this.dependents && this.dependents.delete(a) } get() { return this.current } getPrevious() { return this.prev } getVelocity() { const a = we.now(); if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > Rv) return 0; const s = Math.min(this.updatedAt - this.prevUpdatedAt, Rv); return kx(parseFloat(this.current) - parseFloat(this.prevFrameValue), s) } start(a) { return this.stop(), new Promise(s => { this.hasAnimated = !0, this.animation = a(s), this.events.animationStart && this.events.animationStart.notify() }).then(() => { this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation() }) } stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation() } isAnimating() { return !!this.animation } clearAnimation() { delete this.animation } destroy() { this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } } function ds(e, a) { return new MT(e, a) } function yb(e, a) { if (e?.inherit && a) { const { inherit: s, ...o } = e; return { ...a, ...o } } return e } function Eh(e, a) { const s = e?.[a] ?? e?.default ?? e; return s !== e ? yb(s, e) : s } const NT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, DT = e => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), OT = { type: "keyframes", duration: .8 }, jT = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 }, _T = (e, { keyframes: a }) => a.length > 2 ? OT : ys.has(e) ? e.startsWith("scale") ? DT(a[1]) : NT : jT, zT = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]); function VT(e) { for (const a in e) if (!zT.has(a)) return !0; return !1 } const Ah = (e, a, s, o = {}, l, u) => f => { const h = Eh(o, e) || {}, m = h.delay || o.delay || 0; let { elapsed: p = 0 } = o; p = p - Ye(m); const g = { keyframes: Array.isArray(s) ? s : [null, s], ease: "easeOut", velocity: a.getVelocity(), ...h, delay: -p, onUpdate: b => { a.set(b), h.onUpdate && h.onUpdate(b) }, onComplete: () => { f(), h.onComplete && h.onComplete() }, name: e, motionValue: a, element: u ? void 0 : l }; VT(h) || Object.assign(g, _T(e, g)), g.duration && (g.duration = Ye(g.duration)), g.repeatDelay && (g.repeatDelay = Ye(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from); let y = !1; if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Dd(g), g.delay === 0 && (y = !0)), (Da.instantAnimations || Da.skipAnimations || l?.shouldSkipAnimations || h.skipAnimations) && (y = !0, Dd(g), g.delay = 0), g.allowFlatten = !h.type && !h.ease, y && !u && a.get() !== void 0) { const b = sc(g.keyframes, h); if (b !== void 0) { Pt.update(() => { g.onUpdate(b), g.onComplete() }); return } } return h.isSync ? new Gl(g) : new TT(g) }, LT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u; function kT(e) { const a = LT.exec(e); if (!a) return [,]; const [, s, o, l] = a; return [`--${s ?? o}`, l] } function vb(e, a, s = 1) { const [o, l] = kT(e); if (!o) return; const u = window.getComputedStyle(a).getPropertyValue(o); if (u) { const f = u.trim(); return _x(f) ? parseFloat(f) : f } return yh(l) ? vb(l, a, s + 1) : l } function Mv(e) { const a = [{}, {}]; return e?.values.forEach((s, o) => { a[0][o] = s.get(), a[1][o] = s.getVelocity() }), a } function Th(e, a, s, o) { if (typeof a == "function") { const [l, u] = Mv(o); a = a(s !== void 0 ? s : e.custom, l, u) } if (typeof a == "string" && (a = e.variants && e.variants[a]), typeof a == "function") { const [l, u] = Mv(o); a = a(s !== void 0 ? s : e.custom, l, u) } return a } function ui(e, a, s) { const o = e.getProps(); return Th(o, a, s !== void 0 ? s : o.custom, e) } const xb = new Set(["width", "height", "top", "left", "right", "bottom", ...gs]), Od = e => Array.isArray(e); function BT(e, a, s) { e.hasValue(a) ? e.getValue(a).set(s) : e.addValue(a, ds(s)) } function UT(e) { return Od(e) ? e[e.length - 1] || 0 : e } function HT(e, a) { const s = ui(e, a); let { transitionEnd: o = {}, transition: l = {}, ...u } = s || {}; u = { ...u, ...o }; for (const f in u) { const h = UT(u[f]); BT(e, f, h) } } const ye = e => !!(e && e.getVelocity); function PT(e) { return !!(ye(e) && e.add) } function jd(e, a) { const s = e.getValue("willChange"); if (PT(s)) return s.add(a); if (!s && Da.WillChange) { const o = new Da.WillChange("auto"); e.addValue("willChange", o), o.add(a) } } function Rh(e) { return e.replace(/([A-Z])/g, a => `-${a.toLowerCase()}`) } const qT = "framerAppearId", bb = "data-" + Rh(qT); function Sb(e) { return e.props[bb] } function GT({ protectedKeys: e, needsAnimating: a }, s) { const o = e.hasOwnProperty(s) && a[s] !== !0; return a[s] = !1, o } function Cb(e, a, { delay: s = 0, transitionOverride: o, type: l } = {}) { let { transition: u, transitionEnd: f, ...h } = a; const m = e.getDefaultTransition(); u = u ? yb(u, m) : m; const p = u?.reduceMotion, g = u?.skipAnimations; o && (u = o); const y = [], b = l && e.animationState && e.animationState.getState()[l], w = u?.path; w && w.animateVisualElement(e, h, u, s, y); for (const T in h) { const C = e.getValue(T, e.latestValues[T] ?? null), A = h[T]; if (A === void 0 || b && GT(b, T)) continue; const R = { delay: s, ...Eh(u || {}, T) }; g && (R.skipAnimations = !0); const M = C.get(); if (M !== void 0 && !C.isAnimating() && !Array.isArray(A) && A === M && !R.velocity) { Pt.update(() => C.set(A)); continue } let D = !1; if (window.MotionHandoffAnimation) { const K = Sb(e); if (K) { const U = window.MotionHandoffAnimation(K, T, Pt); U !== null && (R.startTime = U, D = !0) } } jd(e, T); const _ = p ?? e.shouldReduceMotion; C.start(Ah(T, C, A, _ && xb.has(T) ? { type: !1 } : R, e, D)); const q = C.animation; q && y.push(q) } if (f) { const T = () => Pt.update(() => { f && HT(e, f) }); y.length ? Promise.all(y).then(T) : T() } return y } function _d(e, a, s = {}) { const o = ui(e, a, s.type === "exit" ? e.presenceContext?.custom : void 0); let { transition: l = e.getDefaultTransition() || {} } = o || {}; s.transitionOverride && (l = s.transitionOverride); const u = o ? () => Promise.all(Cb(e, o, s)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (m = 0) => { const { delayChildren: p = 0, staggerChildren: g, staggerDirection: y } = l; return YT(e, a, m, p, g, y, s) } : () => Promise.resolve(), { when: h } = l; if (h) { const [m, p] = h === "beforeChildren" ? [u, f] : [f, u]; return m().then(() => p()) } else return Promise.all([u(), f(s.delay)]) } function YT(e, a, s = 0, o = 0, l = 0, u = 1, f) { const h = []; for (const m of e.variantChildren) m.notify("AnimationStart", a), h.push(_d(m, a, { ...f, delay: s + (typeof o == "function" ? 0 : o) + gb(e.variantChildren, m, o, l, u) }).then(() => m.notify("AnimationComplete", a))); return Promise.all(h) } function XT(e, a, s = {}) { e.notify("AnimationStart", a); let o; if (Array.isArray(a)) { const l = a.map(u => _d(e, u, s)); o = Promise.all(l) } else if (typeof a == "string") o = _d(e, a, s); else { const l = typeof a == "function" ? ui(e, a, s.custom) : a; o = Promise.all(Cb(e, l, s)) } return o.then(() => { e.notify("AnimationComplete", a) }) } const FT = { test: e => e === "auto", parse: e => e }, wb = e => a => a.test(e), Eb = [ps, rt, En, Qn, v2, y2, FT], Nv = e => Eb.find(wb(e)); function KT(e) { return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Vx(e) : !0 } const ZT = new Set(["brightness", "contrast", "saturate", "opacity"]); function QT(e) { const [a, s] = e.slice(0, -1).split("("); if (a === "drop-shadow") return e; const [o] = s.match(vh) || []; if (!o) return e; const l = s.replace(o, ""); let u = ZT.has(a) ? 1 : 0; return o !== s && (u *= 100), a + "(" + u + l + ")" } const WT = /\b([a-z-]*)\(.*?\)/gu, zd = { ...hn, getAnimatableNone: e => { const a = e.match(WT); return a ? a.map(QT).join(" ") : e } }, Vd = { ...hn, getAnimatableNone: e => { const a = hn.parse(e); return hn.createTransformer(e)(a.map(o => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o)) } }, Dv = { ...ps, transform: Math.round }, IT = { rotate: Qn, pathRotation: Qn, rotateX: Qn, rotateY: Qn, rotateZ: Qn, scale: ul, scaleX: ul, scaleY: ul, scaleZ: ul, skew: Qn, skewX: Qn, skewY: Qn, distance: rt, translateX: rt, translateY: rt, translateZ: rt, x: rt, y: rt, z: rt, perspective: rt, transformPerspective: rt, opacity: Oo, originX: gv, originY: gv, originZ: rt }, Yl = { borderWidth: rt, borderTopWidth: rt, borderRightWidth: rt, borderBottomWidth: rt, borderLeftWidth: rt, borderRadius: rt, borderTopLeftRadius: rt, borderTopRightRadius: rt, borderBottomRightRadius: rt, borderBottomLeftRadius: rt, width: rt, maxWidth: rt, height: rt, maxHeight: rt, top: rt, right: rt, bottom: rt, left: rt, inset: rt, insetBlock: rt, insetBlockStart: rt, insetBlockEnd: rt, insetInline: rt, insetInlineStart: rt, insetInlineEnd: rt, padding: rt, paddingTop: rt, paddingRight: rt, paddingBottom: rt, paddingLeft: rt, paddingBlock: rt, paddingBlockStart: rt, paddingBlockEnd: rt, paddingInline: rt, paddingInlineStart: rt, paddingInlineEnd: rt, margin: rt, marginTop: rt, marginRight: rt, marginBottom: rt, marginLeft: rt, marginBlock: rt, marginBlockStart: rt, marginBlockEnd: rt, marginInline: rt, marginInlineStart: rt, marginInlineEnd: rt, fontSize: rt, backgroundPositionX: rt, backgroundPositionY: rt, ...IT, zIndex: Dv, fillOpacity: Oo, strokeOpacity: Oo, numOctaves: Dv }, $T = { ...Yl, color: ee, backgroundColor: ee, outlineColor: ee, fill: ee, stroke: ee, borderColor: ee, borderTopColor: ee, borderRightColor: ee, borderBottomColor: ee, borderLeftColor: ee, filter: zd, WebkitFilter: zd, mask: Vd, WebkitMask: Vd }, Ab = e => $T[e], JT = new Set([zd, Vd]); function Tb(e, a) { let s = Ab(e); return JT.has(s) || (s = hn), s.getAnimatableNone ? s.getAnimatableNone(a) : void 0 } const tR = new Set(["auto", "none", "0"]); function eR(e, a, s) { let o = 0, l; for (; o < e.length && !l;) { const u = e[o]; typeof u == "string" && !tR.has(u) && fs(u).values.length && (l = e[o]), o++ } if (l && s) for (const u of a) e[u] = Tb(s, l) } class nR extends wh { constructor(a, s, o, l, u) { super(a, s, o, l, u, !0) } readKeyframes() { const { unresolvedKeyframes: a, element: s, name: o } = this; if (!s || !s.current) return; super.readKeyframes(); for (let g = 0; g < a.length; g++) { let y = a[g]; if (typeof y == "string" && (y = y.trim(), yh(y))) { const b = vb(y, s.current); b !== void 0 && (a[g] = b), g === a.length - 1 && (this.finalKeyframe = y) } } if (this.resolveNoneKeyframes(), !xb.has(o) || a.length !== 2) return; const [l, u] = a, f = Nv(l), h = Nv(u), m = pv(l), p = pv(u); if (m !== p && Na[o]) { this.needsMeasurement = !0; return } if (f !== h) if (Ev(f) && Ev(h)) for (let g = 0; g < a.length; g++) { const y = a[g]; typeof y == "string" && (a[g] = parseFloat(y)) } else Na[o] && (this.needsMeasurement = !0) } resolveNoneKeyframes() { const { unresolvedKeyframes: a, name: s } = this, o = []; for (let l = 0; l < a.length; l++)(a[l] === null || KT(a[l])) && o.push(l); o.length && eR(a, o, s) } measureInitialState() { const { element: a, unresolvedKeyframes: s, name: o } = this; if (!a || !a.current) return; o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Na[o](a.measureViewportBox(), window.getComputedStyle(a.current)), s[0] = this.measuredOrigin; const l = s[s.length - 1]; l !== void 0 && a.getValue(o, l).jump(l, !1) } measureEndState() { const { element: a, name: s, unresolvedKeyframes: o } = this; if (!a || !a.current) return; const l = a.getValue(s); l && l.jump(this.measuredOrigin, !1); const u = o.length - 1, f = o[u]; o[u] = Na[s](a.measureViewportBox(), window.getComputedStyle(a.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h, m]) => { a.getValue(h).set(m) }), this.resolveNoneKeyframes() } } function Rb(e, a, s) { if (e == null) return []; if (e instanceof EventTarget) return [e]; if (typeof e == "string") { let o = document; const l = s?.[e] ?? o.querySelectorAll(e); return l ? Array.from(l) : [] } return Array.from(e).filter(o => o != null) } const Ld = (e, a) => a && typeof e == "number" ? a.transform(e) : e; function Tl(e) { return zx(e) && "offsetHeight" in e && !("ownerSVGElement" in e) } const { schedule: Mh } = Zx(queueMicrotask, !1), un = { x: !1, y: !1 }; function Mb() { return un.x || un.y } function aR(e) { return e === "x" || e === "y" ? un[e] ? null : (un[e] = !0, () => { un[e] = !1 }) : un.x || un.y ? null : (un.x = un.y = !0, () => { un.x = un.y = !1 }) } function Nb(e, a) { const s = Rb(e), o = new AbortController, l = { passive: !0, ...a, signal: o.signal }; return [s, l, () => o.abort()] } function iR(e) { return !(e.pointerType === "touch" || Mb()) } function sR(e, a, s = {}) { const [o, l, u] = Nb(e, s); return o.forEach(f => { let h = !1, m = !1, p; const g = () => { f.removeEventListener("pointerleave", T) }, y = A => { p && (p(A), p = void 0), g() }, b = A => { h = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), m && (m = !1, y(A)) }, w = () => { h = !0, window.addEventListener("pointerup", b, l), window.addEventListener("pointercancel", b, l) }, T = A => { if (A.pointerType !== "touch") { if (h) { m = !0; return } y(A) } }, C = A => { if (!iR(A)) return; m = !1; const R = a(f, A); typeof R == "function" && (p = R, f.addEventListener("pointerleave", T, l)) }; f.addEventListener("pointerenter", C, l), f.addEventListener("pointerdown", w, l) }), u } const Db = (e, a) => a ? e === a ? !0 : Db(e, a.parentElement) : !1, Nh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, oR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]); function rR(e) { return oR.has(e.tagName) || e.isContentEditable === !0 } const lR = new Set(["INPUT", "SELECT", "TEXTAREA"]); function cR(e) { return lR.has(e.tagName) || e.isContentEditable === !0 } const Rl = new WeakSet; function Ov(e) { return a => { a.key === "Enter" && e(a) } } function If(e, a) { e.dispatchEvent(new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })) } const uR = (e, a) => { const s = e.currentTarget; if (!s) return; const o = Ov(() => { if (Rl.has(s)) return; If(s, "down"); const l = Ov(() => { If(s, "up") }), u = () => If(s, "cancel"); s.addEventListener("keyup", l, a), s.addEventListener("blur", u, a) }); s.addEventListener("keydown", o, a), s.addEventListener("blur", () => s.removeEventListener("keydown", o), a) }; function jv(e) { return Nh(e) && !Mb() } const _v = new WeakSet; function fR(e, a, s = {}) { const [o, l, u] = Nb(e, s), f = h => { const m = h.currentTarget; if (!jv(h) || _v.has(h)) return; Rl.add(m), s.stopPropagation && _v.add(h); const p = a(m, h), g = (w, T) => { window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", b), Rl.has(m) && Rl.delete(m), jv(w) && typeof p == "function" && p(w, { success: T }) }, y = w => { g(w, m === window || m === document || s.useGlobalTarget || Db(m, w.target)) }, b = w => { g(w, !1) }; window.addEventListener("pointerup", y, l), window.addEventListener("pointercancel", b, l) }; return o.forEach(h => { (s.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), Tl(h) && (h.addEventListener("focus", p => uR(p, l)), !rR(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)) }), u } function Dh(e) { return zx(e) && "ownerSVGElement" in e } const Ml = new WeakMap; let Nl; const Ob = (e, a, s) => (o, l) => l && l[0] ? l[0][e + "Size"] : Dh(o) && "getBBox" in o ? o.getBBox()[a] : o[s], dR = Ob("inline", "width", "offsetWidth"), hR = Ob("block", "height", "offsetHeight"); function mR({ target: e, borderBoxSize: a }) { Ml.get(e)?.forEach(s => { s(e, { get width() { return dR(e, a) }, get height() { return hR(e, a) } }) }) } function pR(e) { e.forEach(mR) } function gR() { typeof ResizeObserver > "u" || (Nl = new ResizeObserver(pR)) } function yR(e, a) { Nl || gR(); const s = Rb(e); return s.forEach(o => { let l = Ml.get(o); l || (l = new Set, Ml.set(o, l)), l.add(a), Nl?.observe(o) }), () => { s.forEach(o => { const l = Ml.get(o); l?.delete(a), l?.size || Nl?.unobserve(o) }) } } const Dl = new Set; let rs; function vR() { rs = () => { const e = { get width() { return window.innerWidth }, get height() { return window.innerHeight } }; Dl.forEach(a => a(e)) }, window.addEventListener("resize", rs) } function xR(e) { return Dl.add(e), rs || vR(), () => { Dl.delete(e), !Dl.size && typeof rs == "function" && (window.removeEventListener("resize", rs), rs = void 0) } } function zv(e, a) { return typeof e == "function" ? xR(e) : yR(e, a) } function bR(e) { return Dh(e) && e.tagName === "svg" } const SR = [...Eb, ee, hn], CR = e => SR.find(wb(e)), Vv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), ls = () => ({ x: Vv(), y: Vv() }), Lv = () => ({ min: 0, max: 0 }), oe = () => ({ x: Lv(), y: Lv() }), wR = new WeakMap; function oc(e) { return e !== null && typeof e == "object" && typeof e.start == "function" } function jo(e) { return typeof e == "string" || Array.isArray(e) } const Oh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], jh = ["initial", ...Oh]; function rc(e) { return oc(e.animate) || jh.some(a => jo(e[a])) } function jb(e) { return !!(rc(e) || e.variants) } function ER(e, a, s) { for (const o in a) { const l = a[o], u = s[o]; if (ye(l)) e.addValue(o, l); else if (ye(u)) e.addValue(o, ds(l, { owner: e })); else if (u !== l) if (e.hasValue(o)) { const f = e.getValue(o); f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l) } else { const f = e.getStaticValue(o); e.addValue(o, ds(f !== void 0 ? f : l, { owner: e })) } } for (const o in s) a[o] === void 0 && e.removeValue(o); return a } const kd = { current: null }, _b = { current: !1 }, AR = typeof window < "u"; function TR() { if (_b.current = !0, !!AR) if (window.matchMedia) { const e = window.matchMedia("(prefers-reduced-motion)"), a = () => kd.current = e.matches; e.addEventListener("change", a), a() } else kd.current = !1 } const kv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]; let Xl = {}; function zb(e) { Xl = e } function RR() { return Xl } class MR { scrapeMotionValuesFromProps(a, s, o) { return {} } constructor({ parent: a, props: s, presenceContext: o, reducedMotionConfig: l, skipAnimations: u, blockInitialAnimation: f, visualState: h }, m = {}) { this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = wh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)) }, this.renderScheduledAt = 0, this.scheduleRender = () => { const w = we.now(); this.renderScheduledAt < w && (this.renderScheduledAt = w, Pt.render(this.render, !1, !0)) }; const { latestValues: p, renderState: g } = h; this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = s.initial ? { ...p } : {}, this.renderState = g, this.parent = a, this.props = s, this.presenceContext = o, this.depth = a ? a.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = u, this.options = m, this.blockInitialAnimation = !!f, this.isControllingVariants = rc(s), this.isVariantNode = jb(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(a && a.current); const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(s, {}, this); for (const w in b) { const T = b[w]; p[w] !== void 0 && ye(T) && T.set(p[w]) } } mount(a) { if (this.hasBeenMounted) for (const s in this.initialValues) this.values.get(s)?.jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s]; this.current = a, wR.set(a, this), this.projection && !this.projection.instance && this.projection.mount(a), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, o) => this.bindToMotionValue(o, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (_b.current || TR(), this.shouldReduceMotion = kd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0 } unmount() { this.projection && this.projection.unmount(), Oa(this.notifyUpdate), Oa(this.render), this.valueSubscriptions.forEach(a => a()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this); for (const a in this.events) this.events[a].clear(); for (const a in this.features) { const s = this.features[a]; s && (s.unmount(), s.isMounted = !1) } this.current = null } addChild(a) { this.children.add(a), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(a) } removeChild(a) { this.children.delete(a), this.enteringChildren && this.enteringChildren.delete(a) } bindToMotionValue(a, s) { if (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(), s.accelerate && pb.has(a) && this.current instanceof HTMLElement) { const { factory: f, keyframes: h, times: m, ease: p, duration: g } = s.accelerate, y = new hb({ element: this.current, name: a, keyframes: h, times: m, ease: p, duration: Ye(g) }), b = f(y); this.valueSubscriptions.set(a, () => { b(), y.cancel() }); return } const o = ys.has(a); o && this.onBindTransform && this.onBindTransform(); const l = s.on("change", f => { this.latestValues[a] = f, this.props.onUpdate && Pt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender() }); let u; typeof window < "u" && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, a, s)), this.valueSubscriptions.set(a, () => { l(), u && u() }) } sortNodePosition(a) { return !this.current || !this.sortInstanceNodePosition || this.type !== a.type ? 0 : this.sortInstanceNodePosition(this.current, a.current) } updateFeatures() { let a = "animation"; for (a in Xl) { const s = Xl[a]; if (!s) continue; const { isEnabled: o, Feature: l } = s; if (!this.features[a] && l && o(this.props) && (this.features[a] = new l(this)), this.features[a]) { const u = this.features[a]; u.isMounted ? u.update() : (u.mount(), u.isMounted = !0) } } } triggerBuild() { this.build(this.renderState, this.latestValues, this.props) } measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : oe() } getStaticValue(a) { return this.latestValues[a] } setStaticValue(a, s) { this.latestValues[a] = s } update(a, s) { (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = a, this.prevPresenceContext = this.presenceContext, this.presenceContext = s; for (let o = 0; o < kv.length; o++) { const l = kv[o]; this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]); const u = "on" + l, f = a[u]; f && (this.propEventSubscriptions[l] = this.on(l, f)) } this.prevMotionValues = ER(this, this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue() } getProps() { return this.props } getVariant(a) { return this.props.variants ? this.props.variants[a] : void 0 } getDefaultTransition() { return this.props.transition } getTransformPagePoint() { return this.props.transformPagePoint } getClosestVariantNode() { return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0 } addVariantChild(a) { const s = this.getClosestVariantNode(); if (s) return s.variantChildren && s.variantChildren.add(a), () => s.variantChildren.delete(a) } addValue(a, s) { const o = this.values.get(a); s !== o && (o && this.removeValue(a), this.bindToMotionValue(a, s), this.values.set(a, s), this.latestValues[a] = s.get()) } removeValue(a) { this.values.delete(a); const s = this.valueSubscriptions.get(a); s && (s(), this.valueSubscriptions.delete(a)), delete this.latestValues[a], this.removeValueFromRenderState(a, this.renderState) } hasValue(a) { return this.values.has(a) } getValue(a, s) { if (this.props.values && this.props.values[a]) return this.props.values[a]; let o = this.values.get(a); return o === void 0 && s !== void 0 && (o = ds(s === null ? void 0 : s, { owner: this }), this.addValue(a, o)), o } readValue(a, s) { let o = this.latestValues[a] !== void 0 || !this.current ? this.latestValues[a] : this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options); return o != null && (typeof o == "string" && (_x(o) || Vx(o)) ? o = parseFloat(o) : !CR(o) && hn.test(s) && (o = Tb(a, s)), this.setBaseTarget(a, ye(o) ? o.get() : o)), ye(o) ? o.get() : o } setBaseTarget(a, s) { this.baseTarget[a] = s } getBaseTarget(a) { const { initial: s } = this.props; let o; if (typeof s == "string" || typeof s == "object") { const u = Th(this.props, s, this.presenceContext?.custom); u && (o = u[a]) } if (s && o !== void 0) return o; const l = this.getBaseTargetFromProps(this.props, a); return l !== void 0 && !ye(l) ? l : this.initialValues[a] !== void 0 && o === void 0 ? void 0 : this.baseTarget[a] } on(a, s) { return this.events[a] || (this.events[a] = new mh), this.events[a].add(s) } notify(a, ...s) { this.events[a] && this.events[a].notify(...s) } scheduleRenderMicrotask() { Mh.render(this.render) } } class Vb extends MR { constructor() { super(...arguments), this.KeyframeResolver = nR } sortInstanceNodePosition(a, s) { return a.compareDocumentPosition(s) & 2 ? 1 : -1 } getBaseTargetFromProps(a, s) { const o = a.style; return o ? o[s] : void 0 } removeValueFromRenderState(a, { vars: s, style: o }) { delete s[a], delete o[a] } handleChildMotionValue() { this.childSubscription && (this.childSubscription(), delete this.childSubscription); const { children: a } = this.props; ye(a) && (this.childSubscription = a.on("change", s => { this.current && (this.current.textContent = `${s}`) })) } } class Va { constructor(a) { this.isMounted = !1, this.node = a } update() { } } function Lb({ top: e, left: a, right: s, bottom: o }) { return { x: { min: a, max: s }, y: { min: e, max: o } } } function NR({ x: e, y: a }) { return { top: a.min, right: e.max, bottom: a.max, left: e.min } } function DR(e, a) { if (!a) return e; const s = a({ x: e.left, y: e.top }), o = a({ x: e.right, y: e.bottom }); return { top: s.y, left: s.x, bottom: o.y, right: o.x } } function $f(e) { return e === void 0 || e === 1 } function Bd({ scale: e, scaleX: a, scaleY: s }) { return !$f(e) || !$f(a) || !$f(s) } function oi(e) { return Bd(e) || kb(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY } function kb(e) { return Bv(e.x) || Bv(e.y) } function Bv(e) { return e && e !== "0%" } function Fl(e, a, s) { const o = e - s, l = a * o; return s + l } function Uv(e, a, s, o, l) { return l !== void 0 && (e = Fl(e, l, o)), Fl(e, s, o) + a } function Ud(e, a = 0, s = 1, o, l) { e.min = Uv(e.min, a, s, o, l), e.max = Uv(e.max, a, s, o, l) } function Bb(e, { x: a, y: s }) { Ud(e.x, a.translate, a.scale, a.originPoint), Ud(e.y, s.translate, s.scale, s.originPoint) } const Hv = .999999999999, Pv = 1.0000000000001; function OR(e, a, s, o = !1) { const l = s.length; if (!l) return; a.x = a.y = 1; let u, f; for (let h = 0; h < l; h++) { u = s[h], f = u.projectionDelta; const { visualElement: m } = u.options; m && m.props.style && m.props.style.display === "contents" || (o && u.options.layoutScroll && u.scroll && u !== u.root && (Sn(e.x, -u.scroll.offset.x), Sn(e.y, -u.scroll.offset.y)), f && (a.x *= f.x.scale, a.y *= f.y.scale, Bb(e, f)), o && oi(u.latestValues) && Ol(e, u.latestValues, u.layout?.layoutBox)) } a.x < Pv && a.x > Hv && (a.x = 1), a.y < Pv && a.y > Hv && (a.y = 1) } function Sn(e, a) { e.min += a, e.max += a } function qv(e, a, s, o, l = .5) { const u = Ht(e.min, e.max, l); Ud(e, a, s, u, o) } function Gv(e, a) { return typeof e == "string" ? parseFloat(e) / 100 * (a.max - a.min) : e } function Ol(e, a, s) { const o = s ?? e; qv(e.x, Gv(a.x, o.x), a.scaleX, a.scale, a.originX), qv(e.y, Gv(a.y, o.y), a.scaleY, a.scale, a.originY) } function Ub(e, a) { return Lb(DR(e.getBoundingClientRect(), a)) } function jR(e, a, s) { const o = Ub(e, s), { scroll: l } = a; return l && (Sn(o.x, l.offset.x), Sn(o.y, l.offset.y)), o } const _R = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, zR = gs.length; function VR(e, a, s) { let o = "", l = !0; for (let f = 0; f < zR; f++) { const h = gs[f], m = e[h]; if (m === void 0) continue; let p = !0; if (typeof m == "number") p = m === (h.startsWith("scale") ? 1 : 0); else { const g = parseFloat(m); p = h.startsWith("scale") ? g === 1 : g === 0 } if (!p || s) { const g = Ld(m, Yl[h]); if (!p) { l = !1; const y = _R[h] || h; o += `${y}(${g}) ` } s && (a[h] = g) } } const u = e.pathRotation; return u && (l = !1, o += `rotate(${Ld(u, Yl.pathRotation)}) `), o = o.trim(), s ? o = s(a, l ? "" : o) : l && (o = "none"), o } function _h(e, a, s) { const { style: o, vars: l, transformOrigin: u } = e; let f = !1, h = !1; for (const m in a) { const p = a[m]; if (ys.has(m)) { f = !0; continue } else if (Wx(m)) { l[m] = p; continue } else { const g = Ld(p, Yl[m]); m.startsWith("origin") ? (h = !0, u[m] = g) : o[m] = g } } if (a.transform || (f || s ? o.transform = VR(a, e.transform, s) : o.transform && (o.transform = "none")), h) { const { originX: m = "50%", originY: p = "50%", originZ: g = 0 } = u; o.transformOrigin = `${m} ${p} ${g}` } } function Hb(e, { style: a, vars: s }, o, l) { const u = e.style; let f; for (f in a) u[f] = a[f]; l?.applyProjectionStyles(u, o); for (f in s) u.setProperty(f, s[f]) } function Yv(e, a) { return a.max === a.min ? 0 : e / (a.max - a.min) * 100 } const bo = { correct: (e, a) => { if (!a.target) return e; if (typeof e == "string") if (rt.test(e)) e = parseFloat(e); else return e; const s = Yv(e, a.target.x), o = Yv(e, a.target.y); return `${s}% ${o}%` } }, LR = { correct: (e, { treeScale: a, projectionDelta: s }) => { const o = e, l = hn.parse(e); if (l.length > 5) return o; const u = hn.createTransformer(e), f = typeof l[0] != "number" ? 1 : 0, h = s.x.scale * a.x, m = s.y.scale * a.y; l[0 + f] /= h, l[1 + f] /= m; const p = Ht(h, m, .5); return typeof l[2 + f] == "number" && (l[2 + f] /= p), typeof l[3 + f] == "number" && (l[3 + f] /= p), u(l) } }, Hd = { borderRadius: { ...bo, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: bo, borderTopRightRadius: bo, borderBottomLeftRadius: bo, borderBottomRightRadius: bo, boxShadow: LR }; function Pb(e, { layout: a, layoutId: s }) { return ys.has(e) || e.startsWith("origin") || (a || s !== void 0) && (!!Hd[e] || e === "opacity") } function zh(e, a, s) { const o = e.style, l = a?.style, u = {}; if (!o) return u; for (const f in o) (ye(o[f]) || l && ye(l[f]) || Pb(f, e) || s?.getValue(f)?.liveStyle !== void 0) && (u[f] = o[f]); return u } function kR(e) { return window.getComputedStyle(e) } class BR extends Vb { constructor() { super(...arguments), this.type = "html", this.renderInstance = Hb } readValueFromInstance(a, s) { if (ys.has(s)) return this.projection?.isProjecting ? Ad(s) : iT(a, s); { const o = kR(a), l = (Wx(s) ? o.getPropertyValue(s) : o[s]) || 0; return typeof l == "string" ? l.trim() : l } } measureInstanceViewportBox(a, { transformPagePoint: s }) { return Ub(a, s) } build(a, s, o) { _h(a, s, o.transformTemplate) } scrapeMotionValuesFromProps(a, s, o) { return zh(a, s, o) } } const UR = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, HR = { offset: "strokeDashoffset", array: "strokeDasharray" }; function PR(e, a, s = 1, o = 0, l = !0) { e.pathLength = 1; const u = l ? UR : HR; e[u.offset] = `${-o}`, e[u.array] = `${a} ${s}` } const qR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"]; function qb(e, { attrX: a, attrY: s, attrScale: o, pathLength: l, pathSpacing: u = 1, pathOffset: f = 0, ...h }, m, p, g) { if (_h(e, h, p), m) { e.style.viewBox && (e.attrs.viewBox = e.style.viewBox); return } e.attrs = e.style, e.style = {}; const { attrs: y, style: b } = e; y.transform && (b.transform = y.transform, delete y.transform), (b.transform || y.transformOrigin) && (b.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), b.transform && (b.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox); for (const w of qR) y[w] !== void 0 && (b[w] = y[w], delete y[w]); a !== void 0 && (y.x = a), s !== void 0 && (y.y = s), o !== void 0 && (y.scale = o), l !== void 0 && PR(y, l, u, f, !1) } const Gb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), Yb = e => typeof e == "string" && e.toLowerCase() === "svg"; function GR(e, a, s, o) { Hb(e, a, void 0, o); for (const l in a.attrs) e.setAttribute(Gb.has(l) ? l : Rh(l), a.attrs[l]) } function Xb(e, a, s) { const o = zh(e, a, s); for (const l in e) if (ye(e[l]) || ye(a[l])) { const u = gs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l; o[u] = e[l] } return o } class YR extends Vb { constructor() { super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = oe } getBaseTargetFromProps(a, s) { return a[s] } readValueFromInstance(a, s) { if (ys.has(s)) { const o = Ab(s); return o && o.default || 0 } return s = Gb.has(s) ? s : Rh(s), a.getAttribute(s) } scrapeMotionValuesFromProps(a, s, o) { return Xb(a, s, o) } build(a, s, o) { qb(a, s, this.isSVGTag, o.transformTemplate, o.style) } renderInstance(a, s, o, l) { GR(a, s, o, l) } mount(a) { this.isSVGTag = Yb(a.tagName), super.mount(a) } } const XR = jh.length; function Fb(e) { if (!e) return; if (!e.isControllingVariants) { const s = e.parent ? Fb(e.parent) || {} : {}; return e.props.initial !== void 0 && (s.initial = e.props.initial), s } const a = {}; for (let s = 0; s < XR; s++) { const o = jh[s], l = e.props[o]; (jo(l) || l === !1) && (a[o] = l) } return a } function Kb(e, a) { if (!Array.isArray(a)) return !1; const s = a.length; if (s !== e.length) return !1; for (let o = 0; o < s; o++)if (a[o] !== e[o]) return !1; return !0 } const FR = [...Oh].reverse(), KR = Oh.length; function ZR(e) { return a => Promise.all(a.map(({ animation: s, options: o }) => XT(e, s, o))) } function QR(e) { let a = ZR(e), s = Xv(), o = !0, l = !1; const u = p => (g, y) => { const b = ui(e, y, p === "exit" ? e.presenceContext?.custom : void 0); if (b) { const { transition: w, transitionEnd: T, ...C } = b; g = { ...g, ...C, ...T } } return g }; function f(p) { a = p(e) } function h(p) { const { props: g } = e, y = Fb(e.parent) || {}, b = [], w = new Set; let T = {}, C = 1 / 0; for (let R = 0; R < KR; R++) { const M = FR[R], D = s[M], _ = g[M] !== void 0 ? g[M] : y[M], q = jo(_), K = M === p ? D.isActive : null; K === !1 && (C = R); let U = _ === y[M] && _ !== g[M] && q; if (U && (o || l) && e.manuallyAnimateOnMount && (U = !1), D.protectedKeys = { ...T }, !D.isActive && K === null || !_ && !D.prevProp || oc(_) || typeof _ == "boolean") continue; if (M === "exit" && D.isActive && K !== !0) { D.prevResolvedValues && (T = { ...T, ...D.prevResolvedValues }); continue } const H = WR(D.prevProp, _); let J = H || M === p && D.isActive && !U && q || R > C && q, W = !1; const et = Array.isArray(_) ? _ : [_]; let at = et.reduce(u(M), {}); K === !1 && (at = {}); const { prevResolvedValues: mt = {} } = D, ut = { ...mt, ...at }, lt = L => { J = !0, w.has(L) && (W = !0, w.delete(L)), D.needsAnimating[L] = !0; const nt = e.getValue(L); nt && (nt.liveStyle = !1) }; for (const L in ut) { const nt = at[L], ht = mt[L]; if (T.hasOwnProperty(L)) continue; let O = !1; Od(nt) && Od(ht) ? O = !Kb(nt, ht) || H : O = nt !== ht, O ? nt != null ? lt(L) : w.add(L) : nt !== void 0 && w.has(L) ? lt(L) : D.protectedKeys[L] = !0 } D.prevProp = _, D.prevResolvedValues = at, D.isActive && (T = { ...T, ...at }), (o || l) && e.blockInitialAnimation && (J = !1); const z = U && H; J && (!z || W) && b.push(...et.map(L => { const nt = { type: M }; if (typeof L == "string" && (o || l) && !z && e.manuallyAnimateOnMount && e.parent) { const { parent: ht } = e, O = ui(ht, L); if (ht.enteringChildren && O) { const { delayChildren: X } = O.transition || {}; nt.delay = gb(ht.enteringChildren, e, X) } } return { animation: L, options: nt } })) } if (w.size) { const R = {}; if (typeof g.initial != "boolean") { const M = ui(e, Array.isArray(g.initial) ? g.initial[0] : g.initial); M && M.transition && (R.transition = M.transition) } w.forEach(M => { const D = e.getBaseTarget(M), _ = e.getValue(M); _ && (_.liveStyle = !0), R[M] = D ?? null }), b.push({ animation: R }) } let A = !!b.length; return o && (g.initial === !1 || g.initial === g.animate) && !e.manuallyAnimateOnMount && (A = !1), o = !1, l = !1, A ? a(b) : Promise.resolve() } function m(p, g) { if (s[p].isActive === g) return Promise.resolve(); e.variantChildren?.forEach(b => b.animationState?.setActive(p, g)), s[p].isActive = g; const y = h(p); for (const b in s) s[b].protectedKeys = {}; return y } return { animateChanges: h, setActive: m, setAnimateFunction: f, getState: () => s, reset: () => { s = Xv(), l = !0 } } } function WR(e, a) { return typeof a == "string" ? a !== e : Array.isArray(a) ? !Kb(a, e) : !1 } function ii(e = !1) { return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} } } function Xv() { return { animate: ii(!0), whileInView: ii(), whileHover: ii(), whileTap: ii(), whileDrag: ii(), whileFocus: ii(), exit: ii() } } function Pd(e, a) { e.min = a.min, e.max = a.max } function cn(e, a) { Pd(e.x, a.x), Pd(e.y, a.y) } function Fv(e, a) { e.translate = a.translate, e.scale = a.scale, e.originPoint = a.originPoint, e.origin = a.origin } const Zb = 1e-4, IR = 1 - Zb, $R = 1 + Zb, Qb = .01, JR = 0 - Qb, tM = 0 + Qb; function Ee(e) { return e.max - e.min } function eM(e, a, s) { return Math.abs(e - a) <= s } function Kv(e, a, s, o = .5) { e.origin = o, e.originPoint = Ht(a.min, a.max, e.origin), e.scale = Ee(s) / Ee(a), e.translate = Ht(s.min, s.max, e.origin) - e.originPoint, (e.scale >= IR && e.scale <= $R || isNaN(e.scale)) && (e.scale = 1), (e.translate >= JR && e.translate <= tM || isNaN(e.translate)) && (e.translate = 0) } function Ro(e, a, s, o) { Kv(e.x, a.x, s.x, o ? o.originX : void 0), Kv(e.y, a.y, s.y, o ? o.originY : void 0) } function Zv(e, a, s, o = 0) { const l = o ? Ht(s.min, s.max, o) : s.min; e.min = l + a.min, e.max = e.min + Ee(a) } function nM(e, a, s, o) { Zv(e.x, a.x, s.x, o?.x), Zv(e.y, a.y, s.y, o?.y) } function Qv(e, a, s, o = 0) { const l = o ? Ht(s.min, s.max, o) : s.min; e.min = a.min - l, e.max = e.min + Ee(a) } function Kl(e, a, s, o) { Qv(e.x, a.x, s.x, o?.x), Qv(e.y, a.y, s.y, o?.y) } function Wv(e, a, s, o, l) { return e -= a, e = Fl(e, 1 / s, o), l !== void 0 && (e = Fl(e, 1 / l, o)), e } function aM(e, a = 0, s = 1, o = .5, l, u = e, f = e) { if (En.test(a) && (a = parseFloat(a), a = Ht(f.min, f.max, a / 100) - f.min), typeof a != "number") return; let h = Ht(u.min, u.max, o); e === u && (h -= a), e.min = Wv(e.min, a, s, h, l), e.max = Wv(e.max, a, s, h, l) } function Iv(e, a, [s, o, l], u, f) { aM(e, a[s], a[o], a[l], a.scale, u, f) } const iM = ["x", "scaleX", "originX"], sM = ["y", "scaleY", "originY"]; function $v(e, a, s, o) { Iv(e.x, a, iM, s ? s.x : void 0, o ? o.x : void 0), Iv(e.y, a, sM, s ? s.y : void 0, o ? o.y : void 0) } function Jv(e) { return e.translate === 0 && e.scale === 1 } function Wb(e) { return Jv(e.x) && Jv(e.y) } function t0(e, a) { return e.min === a.min && e.max === a.max } function oM(e, a) { return t0(e.x, a.x) && t0(e.y, a.y) } function e0(e, a) { return Math.round(e.min) === Math.round(a.min) && Math.round(e.max) === Math.round(a.max) } function Ib(e, a) { return e0(e.x, a.x) && e0(e.y, a.y) } function n0(e) { return Ee(e.x) / Ee(e.y) } function a0(e, a) { return e.translate === a.translate && e.scale === a.scale && e.originPoint === a.originPoint } function bn(e) { return [e("x"), e("y")] } function rM(e, a, s) { let o = ""; const l = e.x.translate / a.x, u = e.y.translate / a.y, f = s?.z || 0; if ((l || u || f) && (o = `translate3d(${l}px, ${u}px, ${f}px) `), (a.x !== 1 || a.y !== 1) && (o += `scale(${1 / a.x}, ${1 / a.y}) `), s) { const { transformPerspective: p, rotate: g, pathRotation: y, rotateX: b, rotateY: w, skewX: T, skewY: C } = s; p && (o = `perspective(${p}px) ${o}`), g && (o += `rotate(${g}deg) `), y && (o += `rotate(${y}deg) `), b && (o += `rotateX(${b}deg) `), w && (o += `rotateY(${w}deg) `), T && (o += `skewX(${T}deg) `), C && (o += `skewY(${C}deg) `) } const h = e.x.scale * a.x, m = e.y.scale * a.y; return (h !== 1 || m !== 1) && (o += `scale(${h}, ${m})`), o || "none" } const $b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"], lM = $b.length, i0 = e => typeof e == "string" ? parseFloat(e) : e, s0 = e => typeof e == "number" || rt.test(e); function cM(e, a, s, o, l, u) { l ? (e.opacity = Ht(0, s.opacity ?? 1, uM(o)), e.opacityExit = Ht(a.opacity ?? 1, 0, fM(o))) : u && (e.opacity = Ht(a.opacity ?? 1, s.opacity ?? 1, o)); for (let f = 0; f < lM; f++) { const h = $b[f]; let m = o0(a, h), p = o0(s, h); if (m === void 0 && p === void 0) continue; m || (m = 0), p || (p = 0), m === 0 || p === 0 || s0(m) === s0(p) ? (e[h] = Math.max(Ht(i0(m), i0(p), o), 0), (En.test(p) || En.test(m)) && (e[h] += "%")) : e[h] = p } (a.rotate || s.rotate) && (e.rotate = Ht(a.rotate || 0, s.rotate || 0, o)) } function o0(e, a) { return e[a] !== void 0 ? e[a] : e.borderRadius } const uM = Jb(0, .5, Yx), fM = Jb(.5, .95, an); function Jb(e, a, s) { return o => o < e ? 0 : o > a ? 1 : s(Do(e, a, o)) } function dM(e, a, s) { const o = ye(e) ? e : ds(e); return o.start(Ah("", o, a, s)), o.animation } function _o(e, a, s, o = { passive: !0 }) { return e.addEventListener(a, s, o), () => e.removeEventListener(a, s) } const hM = (e, a) => e.depth - a.depth; class mM { constructor() { this.children = [], this.isDirty = !1 } add(a) { dh(this.children, a), this.isDirty = !0 } remove(a) { Ul(this.children, a), this.isDirty = !0 } forEach(a) { this.isDirty && this.children.sort(hM), this.isDirty = !1, this.children.forEach(a) } } function pM(e, a) { const s = we.now(), o = ({ timestamp: l }) => { const u = l - s; u >= a && (Oa(o), e(u - a)) }; return Pt.setup(o, !0), () => Oa(o) } function jl(e) { return ye(e) ? e.get() : e } class gM { constructor() { this.members = [] } add(a) { dh(this.members, a); for (let s = this.members.length - 1; s >= 0; s--) { const o = this.members[s]; if (o === a || o === this.lead || o === this.prevLead) continue; const l = o.instance; (!l || l.isConnected === !1) && !o.snapshot && (Ul(this.members, o), o.unmount()) } a.scheduleRender() } remove(a) { if (Ul(this.members, a), a === this.prevLead && (this.prevLead = void 0), a === this.lead) { const s = this.members[this.members.length - 1]; s && this.promote(s) } } relegate(a) { for (let s = this.members.indexOf(a) - 1; s >= 0; s--) { const o = this.members[s]; if (o.isPresent !== !1 && o.instance?.isConnected !== !1) return this.promote(o), !0 } return !1 } promote(a, s) { const o = this.lead; if (a !== o && (this.prevLead = o, this.lead = a, a.show(), o)) { o.updateSnapshot(), a.scheduleRender(); const { layoutDependency: l } = o.options, { layoutDependency: u } = a.options; (l === void 0 || l !== u) && (a.resumeFrom = o, s && (o.preserveOpacity = !0), o.snapshot && (a.snapshot = o.snapshot, a.snapshot.latestValues = o.animationValues || o.latestValues), a.root?.isUpdating && (a.isLayoutDirty = !0)), a.options.crossfade === !1 && o.hide() } } exitAnimationComplete() { this.members.forEach(a => { a.options.onExitComplete?.(), a.resumingFrom?.options.onExitComplete?.() }) } scheduleRender() { this.members.forEach(a => a.instance && a.scheduleRender(!1)) } removeLeadSnapshot() { this.lead?.snapshot && (this.lead.snapshot = void 0) } } const _l = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }, Jf = ["", "X", "Y", "Z"], yM = 1e3; let vM = 0; function td(e, a, s, o) { const { latestValues: l } = a; l[e] && (s[e] = l[e], a.setStaticValue(e, 0), o && (o[e] = 0)) } function t1(e) { if (e.hasCheckedOptimisedAppear = !0, e.root === e) return; const { visualElement: a } = e.options; if (!a) return; const s = Sb(a); if (window.MotionHasOptimisedAnimation(s, "transform")) { const { layout: l, layoutId: u } = e.options; window.MotionCancelOptimisedAnimation(s, "transform", Pt, !(l || u)) } const { parent: o } = e; o && !o.hasCheckedOptimisedAppear && t1(o) } function e1({ attachResizeListener: e, defaultParent: a, measureScroll: s, checkIsScrollRoot: o, resetTransform: l }) { return class { constructor(f = {}, h = a?.()) { this.id = vM++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()) }, this.updateProjection = () => { this.projectionUpdateScheduled = !1, this.nodes.forEach(SM), this.nodes.forEach(RM), this.nodes.forEach(MM), this.nodes.forEach(CM) }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0; for (let m = 0; m < this.path.length; m++)this.path[m].shouldResetTransform = !0; this.root === this && (this.nodes = new mM) } addEventListener(f, h) { return this.eventHandlers.has(f) || this.eventHandlers.set(f, new mh), this.eventHandlers.get(f).add(h) } notifyListeners(f, ...h) { const m = this.eventHandlers.get(f); m && m.notify(...h) } hasListeners(f) { return this.eventHandlers.has(f) } mount(f) { if (this.instance) return; this.isSVG = Dh(f) && !bR(f), this.instance = f; const { layoutId: h, layout: m, visualElement: p } = this.options; if (p && !p.current && p.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0), e) { let g, y = 0; const b = () => this.root.updateBlockedByResize = !1; Pt.read(() => { y = window.innerWidth }), e(f, () => { const w = window.innerWidth; w !== y && (y = w, this.root.updateBlockedByResize = !0, g && g(), g = pM(b, 250), _l.hasAnimatedSinceResize && (_l.hasAnimatedSinceResize = !1, this.nodes.forEach(c0))) }) } h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || m) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: b, layout: w }) => { if (this.isTreeAnimationBlocked()) { this.target = void 0, this.relativeTarget = void 0; return } const T = this.options.transition || p.getDefaultTransition() || _M, { onLayoutAnimationStart: C, onLayoutAnimationComplete: A } = p.getProps(), R = !this.targetLayout || !Ib(this.targetLayout, w), M = !y && b; if (this.options.layoutRoot || this.resumeFrom || M || y && (R || !this.currentAnimation)) { this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0); const D = { ...Eh(T, "layout"), onPlay: C, onComplete: A }; (p.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(D), this.setAnimationOrigin(g, M, D.path) } else y || c0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete(); this.targetLayout = w }) } unmount() { this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this); const f = this.getStack(); f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Oa(this.updateProjection) } blockUpdate() { this.updateManuallyBlocked = !0 } unblockUpdate() { this.updateManuallyBlocked = !1 } isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize } isTreeAnimationBlocked() { return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1 } startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(NM), this.animationId++) } getTransformTemplate() { const { visualElement: f } = this.options; return f && f.getProps().transformTemplate } willUpdate(f = !0) { if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) { this.options.onExitComplete && this.options.onExitComplete(); return } if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && t1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return; this.isLayoutDirty = !0; for (let g = 0; g < this.path.length; g++) { const y = this.path[g]; y.shouldResetTransform = !0, (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1) } const { layoutId: h, layout: m } = this.options; if (h === void 0 && !m) return; const p = this.getTransformTemplate(); this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate") } update() { if (this.updateScheduled = !1, this.isUpdateBlocked()) { const m = this.updateBlockedByResize; this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), m && this.nodes.forEach(EM), this.nodes.forEach(r0); return } if (this.animationId <= this.animationCommitId) { this.nodes.forEach(l0); return } this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(AM), this.nodes.forEach(TM), this.nodes.forEach(xM), this.nodes.forEach(bM)) : this.nodes.forEach(l0), this.clearAllSnapshots(); const h = we.now(); ge.delta = Rn(0, 1e3 / 60, h - ge.timestamp), ge.timestamp = h, ge.isProcessing = !0, Xf.update.process(ge), Xf.preRender.process(ge), Xf.render.process(ge), ge.isProcessing = !1 } didUpdate() { this.updateScheduled || (this.updateScheduled = !0, Mh.read(this.scheduleUpdate)) } clearAllSnapshots() { this.nodes.forEach(wM), this.sharedNodes.forEach(DM) } scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Pt.preRender(this.updateProjection, !1, !0)) } scheduleCheckAfterUnmount() { Pt.postRender(() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed() }) } updateSnapshot() { this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ee(this.snapshot.measuredBox.x) && !Ee(this.snapshot.measuredBox.y) && (this.snapshot = void 0)) } updateLayout() { if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return; if (this.resumeFrom && !this.resumeFrom.instance) for (let m = 0; m < this.path.length; m++)this.path[m].updateScroll(); const f = this.layout; this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = oe()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox); const { visualElement: h } = this.options; h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0) } updateScroll(f = "measure") { let h = !!(this.options.layoutScroll && this.instance); if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) { const m = o(this.instance); this.scroll = { animationId: this.root.animationId, phase: f, isRoot: m, offset: s(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : m } } } resetTransform() { if (!l) return; const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !Wb(this.projectionDelta), m = this.getTransformTemplate(), p = m ? m(this.latestValues, "") : void 0, g = p !== this.prevTransformTemplateValue; f && this.instance && (h || oi(this.latestValues) || g) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender()) } measure(f = !0) { const h = this.measurePageBox(); let m = this.removeElementScroll(h); return f && (m = this.removeTransform(m)), zM(m), { animationId: this.root.animationId, measuredBox: h, layoutBox: m, latestValues: {}, source: this.id } } measurePageBox() { const { visualElement: f } = this.options; if (!f) return oe(); const h = f.measureViewportBox(); if (!(this.scroll?.wasRoot || this.path.some(VM))) { const { scroll: p } = this.root; p && (Sn(h.x, p.offset.x), Sn(h.y, p.offset.y)) } return h } removeElementScroll(f) { const h = oe(); if (cn(h, f), this.scroll?.wasRoot) return h; for (let m = 0; m < this.path.length; m++) { const p = this.path[m], { scroll: g, options: y } = p; p !== this.root && g && y.layoutScroll && (g.wasRoot && cn(h, f), Sn(h.x, g.offset.x), Sn(h.y, g.offset.y)) } return h } applyTransform(f, h = !1, m) { const p = m || oe(); cn(p, f); for (let g = 0; g < this.path.length; g++) { const y = this.path[g]; !h && y.options.layoutScroll && y.scroll && y !== y.root && (Sn(p.x, -y.scroll.offset.x), Sn(p.y, -y.scroll.offset.y)), oi(y.latestValues) && Ol(p, y.latestValues, y.layout?.layoutBox) } return oi(this.latestValues) && Ol(p, this.latestValues, this.layout?.layoutBox), p } removeTransform(f) { const h = oe(); cn(h, f); for (let m = 0; m < this.path.length; m++) { const p = this.path[m]; if (!oi(p.latestValues)) continue; let g; p.instance && (Bd(p.latestValues) && p.updateSnapshot(), g = oe(), cn(g, p.measurePageBox())), $v(h, p.latestValues, p.snapshot?.layoutBox, g) } return oi(this.latestValues) && $v(h, this.latestValues), h } setTargetDelta(f) { this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0 } setOptions(f) { this.options = { ...this.options, ...f, crossfade: f.crossfade !== void 0 ? f.crossfade : !0 } } clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1 } forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0) } resolveTargetDelta(f = !1) { const h = this.getLead(); this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty); const m = !!this.resumingFrom || this !== h; if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return; const { layout: g, layoutId: y } = this.options; if (!this.layout || !(g || y)) return; this.resolvedRelativeTargetAt = ge.timestamp; const b = this.getClosestProjectingParent(); b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = oe(), this.targetWithTransforms = oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : cn(this.target, this.layout.layoutBox), Bb(this.target, this.targetDelta)) : cn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0)) } getClosestProjectingParent() { if (!(!this.parent || Bd(this.parent.latestValues) || kb(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent() } isProjecting() { return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout) } createRelativeTarget(f, h, m) { this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = oe(), this.relativeTargetOrigin = oe(), Kl(this.relativeTargetOrigin, h, m, this.options.layoutAnchor || void 0), cn(this.relativeTarget, this.relativeTargetOrigin) } removeRelativeTarget() { this.relativeParent = this.relativeTarget = void 0 } calcProjection() { const f = this.getLead(), h = !!this.resumingFrom || this !== f; let m = !0; if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === ge.timestamp && (m = !1), m) return; const { layout: p, layoutId: g } = this.options; if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g)) return; cn(this.layoutCorrected, this.layout.layoutBox); const y = this.treeScale.x, b = this.treeScale.y; OR(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = oe()); const { target: w } = f; if (!w) { this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender()); return } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fv(this.prevProjectionDelta.x, this.projectionDelta.x), Fv(this.prevProjectionDelta.y, this.projectionDelta.y)), Ro(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== b || !a0(this.projectionDelta.x, this.prevProjectionDelta.x) || !a0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)) } hide() { this.isVisible = !1 } show() { this.isVisible = !0 } scheduleRender(f = !0) { if (this.options.visualElement?.scheduleRender(), f) { const h = this.getStack(); h && h.scheduleRender() } this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0) } createProjectionDeltas() { this.prevProjectionDelta = ls(), this.projectionDelta = ls(), this.projectionDeltaWithTransform = ls() } setAnimationOrigin(f, h = !1, m) { const p = this.snapshot, g = p ? p.latestValues : {}, y = { ...this.latestValues }, b = ls(); (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h; const w = oe(), T = p ? p.source : void 0, C = this.layout ? this.layout.source : void 0, A = T !== C, R = this.getStack(), M = !R || R.members.length <= 1, D = !!(A && !M && this.options.crossfade === !0 && !this.path.some(jM)); this.animationProgress = 0; let _; const q = m?.interpolateProjection(f); this.mixTargetDelta = K => { const U = K / 1e3, H = q?.(U); H ? (b.x.translate = H.x, b.x.scale = Ht(f.x.scale, 1, U), b.x.origin = f.x.origin, b.x.originPoint = f.x.originPoint, b.y.translate = H.y, b.y.scale = Ht(f.y.scale, 1, U), b.y.origin = f.y.origin, b.y.originPoint = f.y.originPoint) : (u0(b.x, f.x, U), u0(b.y, f.y, U)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Kl(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), OM(this.relativeTarget, this.relativeTargetOrigin, w, U), _ && oM(this.relativeTarget, _) && (this.isProjectionDirty = !1), _ || (_ = oe()), cn(_, this.relativeTarget)), A && (this.animationValues = y, cM(y, g, this.latestValues, U, D, M)), H && H.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = H.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = U }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0) } startAnimation(f) { this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Oa(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Pt.update(() => { _l.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ds(0)), this.motionValue.jump(0, !1), this.currentAnimation = dM(this.motionValue, [0, 1e3], { ...f, velocity: 0, isSync: !0, onUpdate: h => { this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h) }, onStop: () => { }, onComplete: () => { f.onComplete && f.onComplete(), this.completeAnimation() } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0 }) } completeAnimation() { this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0); const f = this.getStack(); f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete") } finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(yM), this.currentAnimation.stop()), this.completeAnimation() } applyTransformsToTarget() { const f = this.getLead(); let { targetWithTransforms: h, target: m, layout: p, latestValues: g } = f; if (!(!h || !m || !p)) { if (this !== f && this.layout && p && n1(this.options.animationType, this.layout.layoutBox, p.layoutBox)) { m = this.target || oe(); const y = Ee(this.layout.layoutBox.x); m.x.min = f.target.x.min, m.x.max = m.x.min + y; const b = Ee(this.layout.layoutBox.y); m.y.min = f.target.y.min, m.y.max = m.y.min + b } cn(h, m), Ol(h, g), Ro(this.projectionDeltaWithTransform, this.layoutCorrected, h, g) } } registerSharedNode(f, h) { this.sharedNodes.has(f) || this.sharedNodes.set(f, new gM), this.sharedNodes.get(f).add(h); const p = h.options.initialPromotionConfig; h.promote({ transition: p ? p.transition : void 0, preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(h) : void 0 }) } isLead() { const f = this.getStack(); return f ? f.lead === this : !0 } getLead() { const { layoutId: f } = this.options; return f ? this.getStack()?.lead || this : this } getPrevLead() { const { layoutId: f } = this.options; return f ? this.getStack()?.prevLead : void 0 } getStack() { const { layoutId: f } = this.options; if (f) return this.root.sharedNodes.get(f) } promote({ needsReset: f, transition: h, preserveFollowOpacity: m } = {}) { const p = this.getStack(); p && p.promote(this, m), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h }) } relegate() { const f = this.getStack(); return f ? f.relegate(this) : !1 } resetSkewAndRotation() { const { visualElement: f } = this.options; if (!f) return; let h = !1; const { latestValues: m } = f; if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (h = !0), !h) return; const p = {}; m.z && td("z", f, p, this.animationValues); for (let g = 0; g < Jf.length; g++)td(`rotate${Jf[g]}`, f, p, this.animationValues), td(`skew${Jf[g]}`, f, p, this.animationValues); f.render(); for (const g in p) f.setStaticValue(g, p[g]), this.animationValues && (this.animationValues[g] = p[g]); f.scheduleRender() } applyProjectionStyles(f, h) { if (!this.instance || this.isSVG) return; if (!this.isVisible) { f.visibility = "hidden"; return } const m = this.getTransformTemplate(); if (this.needsReset) { this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = jl(h?.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none"; return } const p = this.getLead(); if (!this.projectionDelta || !this.layout || !p.target) { this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = jl(h?.pointerEvents) || ""), this.hasProjected && !oi(this.latestValues) && (f.transform = m ? m({}, "") : "none", this.hasProjected = !1); return } f.visibility = ""; const g = p.animationValues || p.latestValues; this.applyTransformsToTarget(); let y = rM(this.projectionDeltaWithTransform, this.treeScale, g); m && (y = m(g, y)), f.transform = y; const { x: b, y: w } = this.projectionDelta; f.transformOrigin = `${b.origin * 100}% ${w.origin * 100}% 0`, p.animationValues ? f.opacity = p === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = p === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0; for (const T in Hd) { if (g[T] === void 0) continue; const { correct: C, applyTo: A, isCSSVariable: R } = Hd[T], M = y === "none" ? g[T] : C(g[T], p); if (A) { const D = A.length; for (let _ = 0; _ < D; _++)f[A[_]] = M } else R ? this.options.visualElement.renderState.vars[T] = M : f[T] = M } this.options.layoutId && (f.pointerEvents = p === this ? jl(h?.pointerEvents) || "" : "none") } clearSnapshot() { this.resumeFrom = this.snapshot = void 0 } resetTree() { this.root.nodes.forEach(f => f.currentAnimation?.stop()), this.root.nodes.forEach(r0), this.root.sharedNodes.clear() } } } function xM(e) { e.updateLayout() } function bM(e) { const a = e.resumeFrom?.snapshot || e.snapshot; if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) { const { layoutBox: s, measuredBox: o } = e.layout, { animationType: l } = e.options, u = a.source !== e.layout.source; if (l === "size") bn(g => { const y = u ? a.measuredBox[g] : a.layoutBox[g], b = Ee(y); y.min = s[g].min, y.max = y.min + b }); else if (l === "x" || l === "y") { const g = l === "x" ? "y" : "x"; Pd(u ? a.measuredBox[g] : a.layoutBox[g], s[g]) } else n1(l, a.layoutBox, s) && bn(g => { const y = u ? a.measuredBox[g] : a.layoutBox[g], b = Ee(s[g]); y.max = y.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + b) }); const f = ls(); Ro(f, s, a.layoutBox); const h = ls(); u ? Ro(h, e.applyTransform(o, !0), a.measuredBox) : Ro(h, s, a.layoutBox); const m = !Wb(f); let p = !1; if (!e.resumeFrom) { const g = e.getClosestProjectingParent(); if (g && !g.resumeFrom) { const { snapshot: y, layout: b } = g; if (y && b) { const w = e.options.layoutAnchor || void 0, T = oe(); Kl(T, a.layoutBox, y.layoutBox, w); const C = oe(); Kl(C, s, b.layoutBox, w), Ib(T, C) || (p = !0), g.options.layoutRoot && (e.relativeTarget = C, e.relativeTargetOrigin = T, e.relativeParent = g) } } } e.notifyListeners("didUpdate", { layout: s, snapshot: a, delta: h, layoutDelta: f, hasLayoutChanged: m, hasRelativeLayoutChanged: p }) } else if (e.isLead()) { const { onExitComplete: s } = e.options; s && s() } e.options.transition = void 0 } function SM(e) { e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)) } function CM(e) { e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1 } function wM(e) { e.clearSnapshot() } function r0(e) { e.clearMeasurements() } function EM(e) { e.isLayoutDirty = !0, e.updateLayout() } function l0(e) { e.isLayoutDirty = !1 } function AM(e) { e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0) } function TM(e) { const { visualElement: a } = e.options; a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"), e.resetTransform() } function c0(e) { e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0 } function RM(e) { e.resolveTargetDelta() } function MM(e) { e.calcProjection() } function NM(e) { e.resetSkewAndRotation() } function DM(e) { e.removeLeadSnapshot() } function u0(e, a, s) { e.translate = Ht(a.translate, 0, s), e.scale = Ht(a.scale, 1, s), e.origin = a.origin, e.originPoint = a.originPoint } function f0(e, a, s, o) { e.min = Ht(a.min, s.min, o), e.max = Ht(a.max, s.max, o) } function OM(e, a, s, o) { f0(e.x, a.x, s.x, o), f0(e.y, a.y, s.y, o) } function jM(e) { return e.animationValues && e.animationValues.opacityExit !== void 0 } const _M = { duration: .45, ease: [.4, 0, .1, 1] }, d0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), h0 = d0("applewebkit/") && !d0("chrome/") ? Math.round : an; function m0(e) { e.min = h0(e.min), e.max = h0(e.max) } function zM(e) { m0(e.x), m0(e.y) } function n1(e, a, s) { return e === "position" || e === "preserve-aspect" && !eM(n0(a), n0(s), .2) } function VM(e) { return e !== e.root && e.scroll?.wasRoot } const LM = e1({ attachResizeListener: (e, a) => _o(e, "resize", a), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0, y: document.documentElement.scrollTop || document.body?.scrollTop || 0 }), checkIsScrollRoot: () => !0 }), ed = { current: void 0 }, a1 = e1({ measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }), defaultParent: () => { if (!ed.current) { const e = new LM({}); e.mount(window), e.setOptions({ layoutScroll: !0 }), ed.current = e } return ed.current }, resetTransform: (e, a) => { e.style.transform = a !== void 0 ? a : "none" }, checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed" }), Vh = x.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: "never" }); function p0(e, a) { if (typeof e == "function") return e(a); e != null && (e.current = a) } function kM(...e) { return a => { let s = !1; const o = e.map(l => { const u = p0(l, a); return !s && typeof u == "function" && (s = !0), u }); if (s) return () => { for (let l = 0; l < o.length; l++) { const u = o[l]; typeof u == "function" ? u() : p0(e[l], null) } } } } function BM(...e) { return x.useCallback(kM(...e), e) } class UM extends x.Component { getSnapshotBeforeUpdate(a) { const s = this.props.childRef.current; if (Tl(s) && a.isPresent && !this.props.isPresent && this.props.pop !== !1) { const o = s.offsetParent, l = Tl(o) && o.offsetWidth || 0, u = Tl(o) && o.offsetHeight || 0, f = getComputedStyle(s), h = this.props.sizeRef.current; h.height = parseFloat(f.height), h.width = parseFloat(f.width), h.top = s.offsetTop, h.left = s.offsetLeft, h.right = l - h.width - h.left, h.bottom = u - h.height - h.top, h.direction = f.direction } return null } componentDidUpdate() { } render() { return this.props.children } } function HM({ children: e, isPresent: a, anchorX: s, anchorY: o, root: l, pop: u }) {
  const f = x.useId(), h = x.useRef(null), m = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }), { nonce: p } = x.useContext(Vh), g = e.props?.ref ?? e?.ref, y = BM(h, g); return x.useInsertionEffect(() => {
    const { width: b, height: w, top: T, left: C, right: A, bottom: R, direction: M } = m.current; if (a || u === !1 || !h.current || !b || !w) return; const D = M === "rtl", _ = s === "left" ? D ? `right: ${A}` : `left: ${C}` : D ? `left: ${C}` : `right: ${A}`, q = o === "bottom" ? `bottom: ${R}` : `top: ${T}`; h.current.dataset.motionPopId = f; const K = document.createElement("style"); p && (K.nonce = p); const U = l ?? document.head; return U.appendChild(K), K.sheet && K.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${w}px !important;
            ${_}px !important;
            ${q}px !important;
          }
        `), () => { h.current?.removeAttribute("data-motion-pop-id"), U.contains(K) && U.removeChild(K) }
  }, [a]), S.jsx(UM, { isPresent: a, childRef: h, sizeRef: m, pop: u, children: u === !1 ? e : x.cloneElement(e, { ref: y }) })
} const PM = ({ children: e, initial: a, isPresent: s, onExitComplete: o, custom: l, presenceAffectsLayout: u, mode: f, anchorX: h, anchorY: m, root: p }) => { const g = fh(qM), y = x.useId(); let b = !0, w = x.useMemo(() => (b = !1, { id: y, initial: a, isPresent: s, custom: l, onExitComplete: T => { g.set(T, !0); for (const C of g.values()) if (!C) return; o && o() }, register: T => (g.set(T, !1), () => g.delete(T)) }), [s, g, o]); return u && b && (w = { ...w }), x.useMemo(() => { g.forEach((T, C) => g.set(C, !1)) }, [s]), x.useEffect(() => { !s && !g.size && o && o() }, [s]), e = S.jsx(HM, { pop: f === "popLayout", isPresent: s, anchorX: h, anchorY: m, root: p, children: e }), S.jsx(ic.Provider, { value: w, children: e }) }; function qM() { return new Map } function i1(e = !0) { const a = x.useContext(ic); if (a === null) return [!0, null]; const { isPresent: s, onExitComplete: o, register: l } = a, u = x.useId(); x.useEffect(() => { if (e) return l(u) }, [e]); const f = x.useCallback(() => e && o && o(u), [u, o, e]); return !s && o ? [!1, f] : [!0] } const fl = e => e.key || ""; function g0(e) { const a = []; return x.Children.forEach(e, s => { x.isValidElement(s) && a.push(s) }), a } const s1 = ({ children: e, custom: a, initial: s = !0, onExitComplete: o, presenceAffectsLayout: l = !0, mode: u = "sync", propagate: f = !1, anchorX: h = "left", anchorY: m = "top", root: p }) => { const [g, y] = i1(f), b = x.useMemo(() => g0(e), [e]), w = f && !g ? [] : b.map(fl), T = x.useRef(!0), C = x.useRef(b), A = fh(() => new Map), R = x.useRef(new Set), [M, D] = x.useState(b), [_, q] = x.useState(b); jx(() => { T.current = !1, C.current = b; for (let H = 0; H < _.length; H++) { const J = fl(_[H]); w.includes(J) ? (A.delete(J), R.current.delete(J)) : A.get(J) !== !0 && A.set(J, !1) } }, [_, w.length, w.join("-")]); const K = []; if (b !== M) { let H = [...b]; for (let J = 0; J < _.length; J++) { const W = _[J], et = fl(W); w.includes(et) || (H.splice(J, 0, W), K.push(W)) } return u === "wait" && K.length && (H = K), q(g0(H)), D(b), null } const { forceRender: U } = x.useContext(uh); return S.jsx(S.Fragment, { children: _.map(H => { const J = fl(H), W = f && !g ? !1 : b === _ || w.includes(J), et = () => { if (R.current.has(J)) return; if (A.has(J)) R.current.add(J), A.set(J, !0); else return; let at = !0; A.forEach(mt => { mt || (at = !1) }), at && (U?.(), q(C.current), f && y?.(), o && o()) }; return S.jsx(PM, { isPresent: W, initial: !T.current || s ? void 0 : !1, custom: a, presenceAffectsLayout: l, mode: u, root: p, onExitComplete: W ? void 0 : et, anchorX: h, anchorY: m, children: H }, J) }) }) }, o1 = x.createContext({ strict: !1 }), y0 = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }; let v0 = !1; function GM() { if (v0) return; const e = {}; for (const a in y0) e[a] = { isEnabled: s => y0[a].some(o => !!s[o]) }; zb(e), v0 = !0 } function r1() { return GM(), RR() } function YM(e) { const a = r1(); for (const s in e) a[s] = { ...a[s], ...e[s] }; zb(a) } const XM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]); function Zl(e) { return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || XM.has(e) } let l1 = e => !Zl(e); function FM(e) { typeof e == "function" && (l1 = a => a.startsWith("on") ? !Zl(a) : e(a)) } try { FM(require("@emotion/is-prop-valid").default) } catch { } function KM(e, a, s) { const o = {}; for (const l in e) l === "values" && typeof e.values == "object" || ye(e[l]) || (l1(l) || s === !0 && Zl(l) || !a && !Zl(l) || e.draggable && l.startsWith("onDrag")) && (o[l] = e[l]); return o } const lc = x.createContext({}); function ZM(e, a) { if (rc(e)) { const { initial: s, animate: o } = e; return { initial: s === !1 || jo(s) ? s : void 0, animate: jo(o) ? o : void 0 } } return e.inherit !== !1 ? a : {} } function QM(e) { const { initial: a, animate: s } = ZM(e, x.useContext(lc)); return x.useMemo(() => ({ initial: a, animate: s }), [x0(a), x0(s)]) } function x0(e) { return Array.isArray(e) ? e.join(" ") : e } const Lh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }); function c1(e, a, s) { for (const o in a) !ye(a[o]) && !Pb(o, s) && (e[o] = a[o]) } function WM({ transformTemplate: e }, a) { return x.useMemo(() => { const s = Lh(); return _h(s, a, e), Object.assign({}, s.vars, s.style) }, [a]) } function IM(e, a) { const s = e.style || {}, o = {}; return c1(o, s, e), Object.assign(o, WM(e, a)), o } function $M(e, a) { const s = {}, o = IM(e, a); return e.drag && e.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0), s.style = o, s } const u1 = () => ({ ...Lh(), attrs: {} }); function JM(e, a, s, o) { const l = x.useMemo(() => { const u = u1(); return qb(u, a, Yb(o), e.transformTemplate, e.style), { ...u.attrs, style: { ...u.style } } }, [a]); if (e.style) { const u = {}; c1(u, e.style, e), l.style = { ...u, ...l.style } } return l } const t3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"]; function kh(e) { return typeof e != "string" || e.includes("-") ? !1 : !!(t3.indexOf(e) > -1 || /[A-Z]/u.test(e)) } function e3(e, a, s, { latestValues: o }, l, u = !1, f) { const m = (f ?? kh(e) ? JM : $M)(a, o, l, e), p = KM(a, typeof e == "string", u), g = e !== x.Fragment ? { ...p, ...m, ref: s } : {}, { children: y } = a, b = x.useMemo(() => ye(y) ? y.get() : y, [y]); return x.createElement(e, { ...g, children: b }) } function n3({ scrapeMotionValuesFromProps: e, createRenderState: a }, s, o, l) { return { latestValues: a3(s, o, l, e), renderState: a() } } function a3(e, a, s, o) { const l = {}, u = o(e, {}); for (const b in u) l[b] = jl(u[b]); let { initial: f, animate: h } = e; const m = rc(e), p = jb(e); a && p && !m && e.inherit !== !1 && (f === void 0 && (f = a.initial), h === void 0 && (h = a.animate)); let g = s ? s.initial === !1 : !1; g = g || f === !1; const y = g ? h : f; if (y && typeof y != "boolean" && !oc(y)) { const b = Array.isArray(y) ? y : [y]; for (let w = 0; w < b.length; w++) { const T = Th(e, b[w]); if (T) { const { transitionEnd: C, transition: A, ...R } = T; for (const M in R) { let D = R[M]; if (Array.isArray(D)) { const _ = g ? D.length - 1 : 0; D = D[_] } D !== null && (l[M] = D) } for (const M in C) l[M] = C[M] } } } return l } const f1 = e => (a, s) => { const o = x.useContext(lc), l = x.useContext(ic), u = () => n3(e, a, o, l); return s ? u() : fh(u) }, i3 = f1({ scrapeMotionValuesFromProps: zh, createRenderState: Lh }), s3 = f1({ scrapeMotionValuesFromProps: Xb, createRenderState: u1 }), o3 = Symbol.for("motionComponentSymbol"); function r3(e, a, s) { const o = x.useRef(s); x.useInsertionEffect(() => { o.current = s }); const l = x.useRef(null); return x.useCallback(u => { u && e.onMount?.(u), a && (u ? a.mount(u) : a.unmount()); const f = o.current; if (typeof f == "function") if (u) { const h = f(u); typeof h == "function" && (l.current = h) } else l.current ? (l.current(), l.current = null) : f(u); else f && (f.current = u) }, [a]) } const d1 = x.createContext({}); function ss(e) { return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current") } function l3(e, a, s, o, l, u) { const { visualElement: f } = x.useContext(lc), h = x.useContext(o1), m = x.useContext(ic), p = x.useContext(Vh), g = p.reducedMotion, y = p.skipAnimations, b = x.useRef(null), w = x.useRef(!1); o = o || h.renderer, !b.current && o && (b.current = o(e, { visualState: a, parent: f, props: s, presenceContext: m, blockInitialAnimation: m ? m.initial === !1 : !1, reducedMotionConfig: g, skipAnimations: y, isSVG: u }), w.current && b.current && (b.current.manuallyAnimateOnMount = !0)); const T = b.current, C = x.useContext(d1); T && !T.projection && l && (T.type === "html" || T.type === "svg") && c3(b.current, s, l, C); const A = x.useRef(!1); x.useInsertionEffect(() => { T && A.current && T.update(s, m) }); const R = s[bb], M = x.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R)); return jx(() => { w.current = !0, T && (A.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), M.current && T.animationState && T.animationState.animateChanges()) }), x.useEffect(() => { T && (!M.current && T.animationState && T.animationState.animateChanges(), M.current && (queueMicrotask(() => { window.MotionHandoffMarkAsComplete?.(R) }), M.current = !1), T.enteringChildren = void 0) }), T } function c3(e, a, s, o) { const { layoutId: l, layout: u, drag: f, dragConstraints: h, layoutScroll: m, layoutRoot: p, layoutAnchor: g, layoutCrossfade: y } = a; e.projection = new s(e.latestValues, a["data-framer-portal-id"] ? void 0 : h1(e.parent)), e.projection.setOptions({ layoutId: l, layout: u, alwaysMeasureLayout: !!f || h && ss(h), visualElement: e, animationType: typeof u == "string" ? u : "both", initialPromotionConfig: o, crossfade: y, layoutScroll: m, layoutRoot: p, layoutAnchor: g }) } function h1(e) { if (e) return e.options.allowProjection !== !1 ? e.projection : h1(e.parent) } function nd(e, { forwardMotionProps: a = !1, type: s } = {}, o, l) { o && YM(o); const u = s ? s === "svg" : kh(e), f = u ? s3 : i3; function h(p, g) { let y; const b = { ...x.useContext(Vh), ...p, layoutId: u3(p) }, { isStatic: w } = b, T = QM(p), C = f(p, w); if (!w && typeof window < "u") { f3(); const A = d3(b); y = A.MeasureLayout, T.visualElement = l3(e, C, b, l, A.ProjectionNode, u) } return S.jsxs(lc.Provider, { value: T, children: [y && T.visualElement ? S.jsx(y, { visualElement: T.visualElement, ...b }) : null, e3(e, p, r3(C, T.visualElement, g), C, w, a, u)] }) } h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`; const m = x.forwardRef(h); return m[o3] = e, m } function u3({ layoutId: e }) { const a = x.useContext(uh).id; return a && e !== void 0 ? a + "-" + e : e } function f3(e, a) { x.useContext(o1).strict } function d3(e) { const a = r1(), { drag: s, layout: o } = a; if (!s && !o) return {}; const l = { ...s, ...o }; return { MeasureLayout: s?.isEnabled(e) || o?.isEnabled(e) ? l.MeasureLayout : void 0, ProjectionNode: l.ProjectionNode } } function h3(e, a) { if (typeof Proxy > "u") return nd; const s = new Map, o = (u, f) => nd(u, f, e, a), l = (u, f) => o(u, f); return new Proxy(l, { get: (u, f) => f === "create" ? o : (s.has(f) || s.set(f, nd(f, void 0, e, a)), s.get(f)) }) } const m3 = (e, a) => a.isSVG ?? kh(e) ? new YR(a) : new BR(a, { allowProjection: e !== x.Fragment }); class p3 extends Va { constructor(a) { super(a), a.animationState || (a.animationState = QR(a)) } updateAnimationControlsSubscription() { const { animate: a } = this.node.getProps(); oc(a) && (this.unmountControls = a.subscribe(this.node)) } mount() { this.updateAnimationControlsSubscription() } update() { const { animate: a } = this.node.getProps(), { animate: s } = this.node.prevProps || {}; a !== s && this.updateAnimationControlsSubscription() } unmount() { this.node.animationState.reset(), this.unmountControls?.() } } let g3 = 0; class y3 extends Va { constructor() { super(...arguments), this.id = g3++, this.isExitComplete = !1 } update() { if (!this.node.presenceContext) return; const { isPresent: a, onExitComplete: s } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {}; if (!this.node.animationState || a === o) return; if (a && o === !1) { if (this.isExitComplete) { const { initial: u, custom: f } = this.node.getProps(); if (typeof u == "string" || typeof u == "object" && u !== null && !Array.isArray(u)) { const h = ui(this.node, u, f); if (h) { const { transition: m, transitionEnd: p, ...g } = h; for (const y in g) this.node.getValue(y)?.jump(g[y]) } } this.node.animationState.reset(), this.node.animationState.animateChanges() } else this.node.animationState.setActive("exit", !1); this.isExitComplete = !1; return } const l = this.node.animationState.setActive("exit", !a); s && !a && l.then(() => { this.isExitComplete = !0, s(this.id) }) } mount() { const { register: a, onExitComplete: s } = this.node.presenceContext || {}; s && s(this.id), a && (this.unmount = a(this.id)) } unmount() { } } const v3 = { animation: { Feature: p3 }, exit: { Feature: y3 } }; function qo(e) { return { point: { x: e.pageX, y: e.pageY } } } const x3 = e => a => Nh(a) && e(a, qo(a)); function Mo(e, a, s, o) { return _o(e, a, x3(s), o) } const m1 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, b0 = (e, a) => Math.abs(e - a); function b3(e, a) { const s = b0(e.x, a.x), o = b0(e.y, a.y); return Math.sqrt(s ** 2 + o ** 2) } const S0 = new Set(["auto", "scroll"]); class p1 { constructor(a, s, { transformPagePoint: o, contextWindow: l = window, dragSnapToOrigin: u = !1, distanceThreshold: f = 3, element: h } = {}) { if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = w => { this.handleScroll(w.target) }, this.onWindowScroll = () => { this.handleScroll(window) }, this.updatePoint = () => { if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return; this.lastRawMoveEventInfo && (this.lastMoveEventInfo = dl(this.lastRawMoveEventInfo, this.transformPagePoint)); const w = ad(this.lastMoveEventInfo, this.history), T = this.startEvent !== null, C = b3(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold; if (!T && !C) return; const { point: A } = w, { timestamp: R } = ge; this.history.push({ ...A, timestamp: R }); const { onStart: M, onMove: D } = this.handlers; T || (M && M(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, w) }, this.handlePointerMove = (w, T) => { this.lastMoveEvent = w, this.lastRawMoveEventInfo = T, this.lastMoveEventInfo = dl(T, this.transformPagePoint), Pt.update(this.updatePoint, !0) }, this.handlePointerUp = (w, T) => { this.end(); const { onEnd: C, onSessionEnd: A, resumeAnimation: R } = this.handlers; if ((this.dragSnapToOrigin || !this.startEvent) && R && R(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return; const M = ad(w.type === "pointercancel" ? this.lastMoveEventInfo : dl(T, this.transformPagePoint), this.history); this.startEvent && C && C(w, M), A && A(w, M) }, !Nh(a)) return; this.dragSnapToOrigin = u, this.handlers = s, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = l || window; const m = qo(a), p = dl(m, this.transformPagePoint), { point: g } = p, { timestamp: y } = ge; this.history = [{ ...g, timestamp: y }]; const { onSessionStart: b } = s; b && b(a, ad(p, this.history)), this.removeListeners = Uo(Mo(this.contextWindow, "pointermove", this.handlePointerMove), Mo(this.contextWindow, "pointerup", this.handlePointerUp), Mo(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h) } startScrollTracking(a) { let s = a.parentElement; for (; s;) { const o = getComputedStyle(s); (S0.has(o.overflowX) || S0.has(o.overflowY)) && this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }), s = s.parentElement } this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => { window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll) } } handleScroll(a) { const s = this.scrollPositions.get(a); if (!s) return; const o = a === window, l = o ? { x: window.scrollX, y: window.scrollY } : { x: a.scrollLeft, y: a.scrollTop }, u = { x: l.x - s.x, y: l.y - s.y }; u.x === 0 && u.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += u.x, this.lastMoveEventInfo.point.y += u.y) : this.history.length > 0 && (this.history[0].x -= u.x, this.history[0].y -= u.y), this.scrollPositions.set(a, l), Pt.update(this.updatePoint, !0)) } updateHandlers(a) { this.handlers = a } end() { this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Oa(this.updatePoint) } } function dl(e, a) { return a ? { point: a(e.point) } : e } function C0(e, a) { return { x: e.x - a.x, y: e.y - a.y } } function ad({ point: e }, a) { return { point: e, delta: C0(e, g1(a)), offset: C0(e, S3(a)), velocity: C3(a, .1) } } function S3(e) { return e[0] } function g1(e) { return e[e.length - 1] } function C3(e, a) { if (e.length < 2) return { x: 0, y: 0 }; let s = e.length - 1, o = null; const l = g1(e); for (; s >= 0 && (o = e[s], !(l.timestamp - o.timestamp > Ye(a)));)s--; if (!o) return { x: 0, y: 0 }; o === e[0] && e.length > 2 && l.timestamp - o.timestamp > Ye(a) * 2 && (o = e[1]); const u = nn(l.timestamp - o.timestamp); if (u === 0) return { x: 0, y: 0 }; const f = { x: (l.x - o.x) / u, y: (l.y - o.y) / u }; return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f } function w3(e, { min: a, max: s }, o) { return a !== void 0 && e < a ? e = o ? Ht(a, e, o.min) : Math.max(e, a) : s !== void 0 && e > s && (e = o ? Ht(s, e, o.max) : Math.min(e, s)), e } function w0(e, a, s) { return { min: a !== void 0 ? e.min + a : void 0, max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0 } } function E3(e, { top: a, left: s, bottom: o, right: l }) { return { x: w0(e.x, s, l), y: w0(e.y, a, o) } } function E0(e, a) { let s = a.min - e.min, o = a.max - e.max; return a.max - a.min < e.max - e.min && ([s, o] = [o, s]), { min: s, max: o } } function A3(e, a) { return { x: E0(e.x, a.x), y: E0(e.y, a.y) } } function T3(e, a) { let s = .5; const o = Ee(e), l = Ee(a); return l > o ? s = Do(a.min, a.max - o, e.min) : o > l && (s = Do(e.min, e.max - l, a.min)), Rn(0, 1, s) } function R3(e, a) { const s = {}; return a.min !== void 0 && (s.min = a.min - e.min), a.max !== void 0 && (s.max = a.max - e.min), s } const qd = .35; function M3(e = qd) { return e === !1 ? e = 0 : e === !0 && (e = qd), { x: A0(e, "left", "right"), y: A0(e, "top", "bottom") } } function A0(e, a, s) { return { min: T0(e, a), max: T0(e, s) } } function T0(e, a) { return typeof e == "number" ? e : e[a] || 0 } const N3 = new WeakMap; class D3 { constructor(a) { this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = oe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = a } start(a, { snapToCursor: s = !1, distanceThreshold: o } = {}) { const { presenceContext: l } = this.visualElement; if (l && l.isPresent === !1) return; const u = y => { s && this.snapToCursor(qo(y).point), this.stopAnimation() }, f = (y, b) => { const { drag: w, dragPropagation: T, onDragStart: C } = this.getProps(); if (w && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = aR(w), !this.openDragLock)) return; this.latestPointerEvent = y, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), bn(R => { let M = this.getAxisMotionValue(R).get() || 0; if (En.test(M)) { const { projection: D } = this.visualElement; if (D && D.layout) { const _ = D.layout.layoutBox[R]; _ && (M = Ee(_) * (parseFloat(M) / 100)) } } this.originPoint[R] = M }), C && Pt.update(() => C(y, b), !1, !0), jd(this.visualElement, "transform"); const { animationState: A } = this.visualElement; A && A.setActive("whileDrag", !0) }, h = (y, b) => { this.latestPointerEvent = y, this.latestPanInfo = b; const { dragPropagation: w, dragDirectionLock: T, onDirectionLock: C, onDrag: A } = this.getProps(); if (!w && !this.openDragLock) return; const { offset: R } = b; if (T && this.currentDirection === null) { this.currentDirection = j3(R), this.currentDirection !== null && C && C(this.currentDirection); return } this.updateAxis("x", b.point, R), this.updateAxis("y", b.point, R), this.visualElement.render(), A && Pt.update(() => A(y, b), !1, !0) }, m = (y, b) => { this.latestPointerEvent = y, this.latestPanInfo = b, this.stop(y, b), this.latestPointerEvent = null, this.latestPanInfo = null }, p = () => { const { dragSnapToOrigin: y } = this.getProps(); (y || this.constraints) && this.startAnimation({ x: 0, y: 0 }) }, { dragSnapToOrigin: g } = this.getProps(); this.panSession = new p1(a, { onSessionStart: u, onStart: f, onMove: h, onSessionEnd: m, resumeAnimation: p }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: g, distanceThreshold: o, contextWindow: m1(this.visualElement), element: this.visualElement.current }) } stop(a, s) { const o = a || this.latestPointerEvent, l = s || this.latestPanInfo, u = this.isDragging; if (this.cancel(), !u || !l || !o) return; const { velocity: f } = l; this.startAnimation(f); const { onDragEnd: h } = this.getProps(); h && Pt.postRender(() => h(o, l)) } cancel() { this.isDragging = !1; const { projection: a, animationState: s } = this.visualElement; a && (a.isAnimationBlocked = !1), this.endPanSession(); const { dragPropagation: o } = this.getProps(); !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1) } endPanSession() { this.panSession && this.panSession.end(), this.panSession = void 0 } updateAxis(a, s, o) { const { drag: l } = this.getProps(); if (!o || !hl(a, l, this.currentDirection)) return; const u = this.getAxisMotionValue(a); let f = this.originPoint[a] + o[a]; this.constraints && this.constraints[a] && (f = w3(f, this.constraints[a], this.elastic[a])), u.set(f) } resolveConstraints() { const { dragConstraints: a, dragElastic: s } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints; a && ss(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : a && o ? this.constraints = E3(o.layoutBox, a) : this.constraints = !1, this.elastic = M3(s), l !== this.constraints && !ss(a) && o && this.constraints && !this.hasMutatedConstraints && bn(u => { this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = R3(o.layoutBox[u], this.constraints[u])) }) } resolveRefConstraints() { const { dragConstraints: a, onMeasureDragConstraints: s } = this.getProps(); if (!a || !ss(a)) return !1; const o = a.current, { projection: l } = this.visualElement; if (!l || !l.layout) return !1; l.root && (l.root.scroll = void 0, l.root.updateScroll()); const u = jR(o, l.root, this.visualElement.getTransformPagePoint()); let f = A3(l.layout.layoutBox, u); if (s) { const h = s(NR(f)); this.hasMutatedConstraints = !!h, h && (f = Lb(h)) } return f } startAnimation(a) { const { drag: s, dragMomentum: o, dragElastic: l, dragTransition: u, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), m = this.constraints || {}, p = bn(g => { if (!hl(g, s, this.currentDirection)) return; let y = m && m[g] || {}; (f === !0 || f === g) && (y = { min: 0, max: 0 }); const b = l ? 200 : 1e6, w = l ? 40 : 1e7, T = { type: "inertia", velocity: o ? a[g] : 0, bounceStiffness: b, bounceDamping: w, timeConstant: 750, restDelta: 1, restSpeed: 10, ...u, ...y }; return this.startAxisValueAnimation(g, T) }); return Promise.all(p).then(h) } startAxisValueAnimation(a, s) { const o = this.getAxisMotionValue(a); return jd(this.visualElement, a), o.start(Ah(a, o, 0, s, this.visualElement, !1)) } stopAnimation() { bn(a => this.getAxisMotionValue(a).stop()) } getAxisMotionValue(a) { const s = `_drag${a.toUpperCase()}`, l = this.visualElement.getProps()[s]; return l || this.visualElement.getValue(a, this.visualElement.latestValues[a] ?? 0) } snapToCursor(a) { bn(s => { const { drag: o } = this.getProps(); if (!hl(s, o, this.currentDirection)) return; const { projection: l } = this.visualElement, u = this.getAxisMotionValue(s); if (l && l.layout) { const { min: f, max: h } = l.layout.layoutBox[s], m = u.get() || 0; u.set(a[s] - Ht(f, h, .5) + m) } }) } scalePositionWithinConstraints() { if (!this.visualElement.current) return; const { drag: a, dragConstraints: s } = this.getProps(), { projection: o } = this.visualElement; if (!ss(s) || !o || !this.constraints) return; this.stopAnimation(); const l = { x: 0, y: 0 }; bn(f => { const h = this.getAxisMotionValue(f); if (h && this.constraints !== !1) { const m = h.get(); l[f] = T3({ min: m, max: m }, this.constraints[f]) } }); const { transformTemplate: u } = this.visualElement.getProps(); this.visualElement.current.style.transform = u ? u({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), bn(f => { if (!hl(f, a, null)) return; const h = this.getAxisMotionValue(f), { min: m, max: p } = this.constraints[f]; h.set(Ht(m, p, l[f])) }), this.visualElement.render() } addListeners() { if (!this.visualElement.current) return; N3.set(this.visualElement, this); const a = this.visualElement.current, s = Mo(a, "pointerdown", p => { const { drag: g, dragListener: y = !0 } = this.getProps(), b = p.target, w = b !== a && cR(b); g && y && !w && this.start(p) }); let o; const l = () => { const { dragConstraints: p } = this.getProps(); ss(p) && p.current && (this.constraints = this.resolveRefConstraints(), o || (o = O3(a, p.current, () => this.scalePositionWithinConstraints()))) }, { projection: u } = this.visualElement, f = u.addEventListener("measure", l); u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), Pt.read(l); const h = _o(window, "resize", () => this.scalePositionWithinConstraints()), m = u.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: g }) => { this.isDragging && g && (bn(y => { const b = this.getAxisMotionValue(y); b && (this.originPoint[y] += p[y].translate, b.set(b.get() + p[y].translate)) }), this.visualElement.render()) })); return () => { h(), s(), f(), m && m(), o && o() } } getProps() { const a = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: l = !1, dragConstraints: u = !1, dragElastic: f = qd, dragMomentum: h = !0 } = a; return { ...a, drag: s, dragDirectionLock: o, dragPropagation: l, dragConstraints: u, dragElastic: f, dragMomentum: h } } } function R0(e) { let a = !0; return () => { if (a) { a = !1; return } e() } } function O3(e, a, s) { const o = zv(e, R0(s)), l = zv(a, R0(s)); return () => { o(), l() } } function hl(e, a, s) { return (a === !0 || a === e) && (s === null || s === e) } function j3(e, a = 10) { let s = null; return Math.abs(e.y) > a ? s = "y" : Math.abs(e.x) > a && (s = "x"), s } class _3 extends Va { constructor(a) { super(a), this.removeGroupControls = an, this.removeListeners = an, this.controls = new D3(a) } mount() { const { dragControls: a } = this.node.getProps(); a && (this.removeGroupControls = a.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || an } update() { const { dragControls: a } = this.node.getProps(), { dragControls: s } = this.node.prevProps || {}; a !== s && (this.removeGroupControls(), a && (this.removeGroupControls = a.subscribe(this.controls))) } unmount() { this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession() } } const id = e => (a, s) => { e && Pt.update(() => e(a, s), !1, !0) }; class z3 extends Va { constructor() { super(...arguments), this.removePointerDownListener = an } onPointerDown(a) { this.session = new p1(a, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: m1(this.node) }) } createPanHandlers() { const { onPanSessionStart: a, onPanStart: s, onPan: o, onPanEnd: l } = this.node.getProps(); return { onSessionStart: id(a), onStart: id(s), onMove: id(o), onEnd: (u, f) => { delete this.session, l && Pt.postRender(() => l(u, f)) } } } mount() { this.removePointerDownListener = Mo(this.node.current, "pointerdown", a => this.onPointerDown(a)) } update() { this.session && this.session.updateHandlers(this.createPanHandlers()) } unmount() { this.removePointerDownListener(), this.session && this.session.end() } } let sd = !1; class V3 extends x.Component { componentDidMount() { const { visualElement: a, layoutGroup: s, switchLayoutGroup: o, layoutId: l } = this.props, { projection: u } = a; u && (s.group && s.group.add(u), o && o.register && l && o.register(u), sd && u.root.didUpdate(), u.addEventListener("animationComplete", () => { this.safeToRemove() }), u.setOptions({ ...u.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), _l.hasEverUpdated = !0 } getSnapshotBeforeUpdate(a) { const { layoutDependency: s, visualElement: o, drag: l, isPresent: u } = this.props, { projection: f } = o; return f && (f.isPresent = u, a.layoutDependency !== s && f.setOptions({ ...f.options, layoutDependency: s }), sd = !0, l || a.layoutDependency !== s || s === void 0 || a.isPresent !== u ? f.willUpdate() : this.safeToRemove(), a.isPresent !== u && (u ? f.promote() : f.relegate() || Pt.postRender(() => { const h = f.getStack(); (!h || !h.members.length) && this.safeToRemove() }))), null } componentDidUpdate() { const { visualElement: a, layoutAnchor: s } = this.props, { projection: o } = a; o && (o.options.layoutAnchor = s, o.root.didUpdate(), Mh.postRender(() => { !o.currentAnimation && o.isLead() && this.safeToRemove() })) } componentWillUnmount() { const { visualElement: a, layoutGroup: s, switchLayoutGroup: o } = this.props, { projection: l } = a; sd = !0, l && (l.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(l), o && o.deregister && o.deregister(l)) } safeToRemove() { const { safeToRemove: a } = this.props; a && a() } render() { return null } } function y1(e) { const [a, s] = i1(), o = x.useContext(uh); return S.jsx(V3, { ...e, layoutGroup: o, switchLayoutGroup: x.useContext(d1), isPresent: a, safeToRemove: s }) } const L3 = { pan: { Feature: z3 }, drag: { Feature: _3, ProjectionNode: a1, MeasureLayout: y1 } }; function M0(e, a, s) { const { props: o } = e; e.animationState && o.whileHover && e.animationState.setActive("whileHover", s === "Start"); const l = "onHover" + s, u = o[l]; u && Pt.postRender(() => u(a, qo(a))) } class k3 extends Va { mount() { const { current: a } = this.node; a && (this.unmount = sR(a, (s, o) => (M0(this.node, o, "Start"), l => M0(this.node, l, "End")))) } unmount() { } } class B3 extends Va { constructor() { super(...arguments), this.isActive = !1 } onFocus() { let a = !1; try { a = this.node.current.matches(":focus-visible") } catch { a = !0 } !a || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0) } onBlur() { !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1) } mount() { this.unmount = Uo(_o(this.node.current, "focus", () => this.onFocus()), _o(this.node.current, "blur", () => this.onBlur())) } unmount() { } } function N0(e, a, s) { const { props: o } = e; if (e.current instanceof HTMLButtonElement && e.current.disabled) return; e.animationState && o.whileTap && e.animationState.setActive("whileTap", s === "Start"); const l = "onTap" + (s === "End" ? "" : s), u = o[l]; u && Pt.postRender(() => u(a, qo(a))) } class U3 extends Va { mount() { const { current: a } = this.node; if (!a) return; const { globalTapTarget: s, propagate: o } = this.node.props; this.unmount = fR(a, (l, u) => (N0(this.node, u, "Start"), (f, { success: h }) => N0(this.node, f, h ? "End" : "Cancel")), { useGlobalTarget: s, stopPropagation: o?.tap === !1 }) } unmount() { } } const Gd = new WeakMap, od = new WeakMap, H3 = e => { const a = Gd.get(e.target); a && a(e) }, P3 = e => { e.forEach(H3) }; function q3({ root: e, ...a }) { const s = e || document; od.has(s) || od.set(s, {}); const o = od.get(s), l = JSON.stringify(a); return o[l] || (o[l] = new IntersectionObserver(P3, { root: e, ...a })), o[l] } function G3(e, a, s) { const o = q3(a); return Gd.set(e, s), o.observe(e), () => { Gd.delete(e), o.unobserve(e) } } const Y3 = { some: 0, all: 1 }; class X3 extends Va { constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1 } startObserver() { this.stopObserver?.(); const { viewport: a = {} } = this.node.getProps(), { root: s, margin: o, amount: l = "some", once: u } = a, f = { root: s ? s.current : void 0, rootMargin: o, threshold: typeof l == "number" ? l : Y3[l] }, h = m => { const { isIntersecting: p } = m; if (this.isInView === p || (this.isInView = p, u && !p && this.hasEnteredView)) return; p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p); const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), b = p ? g : y; b && b(m) }; this.stopObserver = G3(this.node.current, f, h) } mount() { this.startObserver() } update() { if (typeof IntersectionObserver > "u") return; const { props: a, prevProps: s } = this.node;["amount", "margin", "root"].some(F3(a, s)) && this.startObserver() } unmount() { this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1 } } function F3({ viewport: e = {} }, { viewport: a = {} } = {}) { return s => e[s] !== a[s] } const K3 = { inView: { Feature: X3 }, tap: { Feature: U3 }, focus: { Feature: B3 }, hover: { Feature: k3 } }, Z3 = { layout: { ProjectionNode: a1, MeasureLayout: y1 } }, Q3 = { ...v3, ...K3, ...L3, ...Z3 }, le = h3(Q3, m3); const W3 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), I3 = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, o) => o ? o.toUpperCase() : s.toLowerCase()), D0 = e => { const a = I3(e); return a.charAt(0).toUpperCase() + a.slice(1) }, v1 = (...e) => e.filter((a, s, o) => !!a && a.trim() !== "" && o.indexOf(a) === s).join(" ").trim(), $3 = e => { for (const a in e) if (a.startsWith("aria-") || a === "role" || a === "title") return !0 }; var J3 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }; const tN = x.forwardRef(({ color: e = "currentColor", size: a = 24, strokeWidth: s = 2, absoluteStrokeWidth: o, className: l = "", children: u, iconNode: f, ...h }, m) => x.createElement("svg", { ref: m, ...J3, width: a, height: a, stroke: e, strokeWidth: o ? Number(s) * 24 / Number(a) : s, className: v1("lucide", l), ...!u && !$3(h) && { "aria-hidden": "true" }, ...h }, [...f.map(([p, g]) => x.createElement(p, g)), ...Array.isArray(u) ? u : [u]])); const ae = (e, a) => { const s = x.forwardRef(({ className: o, ...l }, u) => x.createElement(tN, { ref: u, iconNode: a, className: v1(`lucide-${W3(D0(e))}`, `lucide-${e}`, o), ...l })); return s.displayName = D0(e), s }; const eN = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], nN = ae("arrow-right", eN); const aN = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], cc = ae("book-open", aN); const iN = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]], sN = ae("chart-column", iN); const oN = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], rN = ae("check", oN); const lN = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Bh = ae("chevron-down", lN); const cN = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], So = ae("chevron-right", cN); const uN = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], x1 = ae("chevron-up", uN); const fN = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], dN = ae("circle-alert", fN); const hN = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], uc = ae("circle-check", hN); const mN = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "M12 11h4", key: "1jrz19" }], ["path", { d: "M12 16h4", key: "n85exb" }], ["path", { d: "M8 11h.01", key: "1dfujw" }], ["path", { d: "M8 16h.01", key: "18s6g9" }]], pN = ae("clipboard-list", mN); const gN = [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], yN = ae("eye", gN); const vN = [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]], xN = ae("graduation-cap", vN); const bN = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], SN = ae("grid-3x3", bN); const CN = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], wN = ae("image", CN); const EN = [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", key: "1gvzjb" }], ["path", { d: "M9 18h6", key: "x1upvd" }], ["path", { d: "M10 22h4", key: "ceow96" }]], fi = ae("lightbulb", EN); const AN = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]], TN = ae("list-checks", AN); const RN = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }]], MN = ae("message-square", RN); const NN = [["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], O0 = ae("square-check-big", NN); const DN = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], b1 = ae("target", DN); const ON = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], jN = ae("triangle-alert", ON); function _N({ activeTopic: e, totalTopics: a }) { return S.jsx("header", { "code-path": "src/components/Header.tsx:10:5", className: "sticky top-0 z-50 bg-white border-b border-[#E0E0E0]", children: S.jsx("div", { "code-path": "src/components/Header.tsx:11:7", className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8", children: S.jsxs("div", { "code-path": "src/components/Header.tsx:12:9", className: "flex items-center justify-between h-16", children: [S.jsxs("div", { "code-path": "src/components/Header.tsx:14:11", className: "flex items-center gap-3", children: [S.jsx("div", { "code-path": "src/components/Header.tsx:15:13", className: "w-10 h-10 bg-[#1A1A1A] flex items-center justify-center", children: S.jsx(xN, { "code-path": "src/components/Header.tsx:16:15", className: "w-6 h-6 text-white" }) }), S.jsxs("div", { "code-path": "src/components/Header.tsx:18:13", className: "hidden sm:block", children: [S.jsx("p", { "code-path": "src/components/Header.tsx:19:15", className: "text-xs font-semibold text-[#666666] uppercase tracking-wider", children: "НУ «Львівська Політехніка»" }), S.jsx("p", { "code-path": "src/components/Header.tsx:22:15", className: "text-sm font-bold text-[#1A1A1A] font-display leading-tight", children: "ІАРД • Кафедра ВДМ" })] })] }), S.jsxs("div", { "code-path": "src/components/Header.tsx:29:11", className: "hidden md:flex items-center gap-2", children: [S.jsx(cc, { "code-path": "src/components/Header.tsx:30:13", className: "w-5 h-5 text-[#E84A2C]" }), S.jsx("h1", { "code-path": "src/components/Header.tsx:31:13", className: "text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide font-display", children: "Робочий зошит" })] }), S.jsxs("div", { "code-path": "src/components/Header.tsx:37:11", className: "flex items-center gap-3", children: [S.jsxs("div", { "code-path": "src/components/Header.tsx:38:13", className: "hidden sm:flex flex-col items-end", children: [S.jsx("span", { "code-path": "src/components/Header.tsx:39:15", className: "text-xs text-[#666666] uppercase tracking-wider font-semibold", children: "Активна тема" }), S.jsxs("span", { "code-path": "src/components/Header.tsx:42:15", className: "text-sm font-bold text-[#E84A2C] font-display", children: [e, " з ", a] })] }), S.jsx("div", { "code-path": "src/components/Header.tsx:46:13", className: "w-12 h-12 bg-[#F5F5F5] flex items-center justify-center", children: S.jsx("span", { "code-path": "src/components/Header.tsx:47:15", className: "text-lg font-bold text-[#1A1A1A] font-display", children: String(e).padStart(2, "0") }) })] })] }) }) }) } function zN({ topics: e, activeTopic: a, onSelectTopic: s }) {
  return S.jsx("nav", {
    "code-path": "src/components/TabNavigation.tsx:12:5", className: "sticky top-16 z-40 bg-white border-b border-[#E0E0E0]", children: S.jsx("div", {
      "code-path": "src/components/TabNavigation.tsx:13:7", className: "max-w-[1400px] mx-auto", children: S.jsx("div", {
        "code-path": "src/components/TabNavigation.tsx:14:9", className: "flex overflow-x-auto scrollbar-hide", children: e.map(o => S.jsxs("button", {
          "code-path": "src/components/TabNavigation.tsx:16:13", onClick: () => s(o.id), className: `
                relative flex-shrink-0 px-4 py-4 text-sm font-semibold uppercase tracking-wider
                transition-colors duration-200 font-display whitespace-nowrap
                ${a === o.id ? "text-[#1A1A1A]" : "text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]"}
              `, children: [S.jsxs("span", { "code-path": "src/components/TabNavigation.tsx:28:15", className: "hidden sm:inline", children: ["Тема ", o.id] }), S.jsxs("span", { "code-path": "src/components/TabNavigation.tsx:29:15", className: "sm:hidden", children: ["Т", o.id] }), a === o.id && S.jsx(le.div, { "code-path": "src/components/TabNavigation.tsx:31:17", layoutId: "activeTab", className: "absolute bottom-0 left-0 right-0 h-[3px] bg-[#E84A2C]", transition: { type: "spring", stiffness: 500, damping: 30 } })]
        }, o.id))
      })
    })
  })
} function S1(e) { var a, s, o = ""; if (typeof e == "string" || typeof e == "number") o += e; else if (typeof e == "object") if (Array.isArray(e)) { var l = e.length; for (a = 0; a < l; a++)e[a] && (s = S1(e[a])) && (o && (o += " "), o += s) } else for (s in e) e[s] && (o && (o += " "), o += s); return o } function VN() { for (var e, a, s = 0, o = "", l = arguments.length; s < l; s++)(e = arguments[s]) && (a = S1(e)) && (o && (o += " "), o += a); return o } const LN = (e, a) => { const s = new Array(e.length + a.length); for (let o = 0; o < e.length; o++)s[o] = e[o]; for (let o = 0; o < a.length; o++)s[e.length + o] = a[o]; return s }, kN = (e, a) => ({ classGroupId: e, validator: a }), C1 = (e = new Map, a = null, s) => ({ nextPart: e, validators: a, classGroupId: s }), Ql = "-", j0 = [], BN = "arbitrary..", UN = e => { const a = PN(e), { conflictingClassGroups: s, conflictingClassGroupModifiers: o } = e; return { getClassGroupId: f => { if (f.startsWith("[") && f.endsWith("]")) return HN(f); const h = f.split(Ql), m = h[0] === "" && h.length > 1 ? 1 : 0; return w1(h, m, a) }, getConflictingClassGroupIds: (f, h) => { if (h) { const m = o[f], p = s[f]; return m ? p ? LN(p, m) : m : p || j0 } return s[f] || j0 } } }, w1 = (e, a, s) => { if (e.length - a === 0) return s.classGroupId; const l = e[a], u = s.nextPart.get(l); if (u) { const p = w1(e, a + 1, u); if (p) return p } const f = s.validators; if (f === null) return; const h = a === 0 ? e.join(Ql) : e.slice(a).join(Ql), m = f.length; for (let p = 0; p < m; p++) { const g = f[p]; if (g.validator(h)) return g.classGroupId } }, HN = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => { const a = e.slice(1, -1), s = a.indexOf(":"), o = a.slice(0, s); return o ? BN + o : void 0 })(), PN = e => { const { theme: a, classGroups: s } = e; return qN(s, a) }, qN = (e, a) => { const s = C1(); for (const o in e) { const l = e[o]; Uh(l, s, o, a) } return s }, Uh = (e, a, s, o) => { const l = e.length; for (let u = 0; u < l; u++) { const f = e[u]; GN(f, a, s, o) } }, GN = (e, a, s, o) => { if (typeof e == "string") { YN(e, a, s); return } if (typeof e == "function") { XN(e, a, s, o); return } FN(e, a, s, o) }, YN = (e, a, s) => { const o = e === "" ? a : E1(a, e); o.classGroupId = s }, XN = (e, a, s, o) => { if (KN(e)) { Uh(e(o), a, s, o); return } a.validators === null && (a.validators = []), a.validators.push(kN(s, e)) }, FN = (e, a, s, o) => { const l = Object.entries(e), u = l.length; for (let f = 0; f < u; f++) { const [h, m] = l[f]; Uh(m, E1(a, h), s, o) } }, E1 = (e, a) => { let s = e; const o = a.split(Ql), l = o.length; for (let u = 0; u < l; u++) { const f = o[u]; let h = s.nextPart.get(f); h || (h = C1(), s.nextPart.set(f, h)), s = h } return s }, KN = e => "isThemeGetter" in e && e.isThemeGetter === !0, ZN = e => { if (e < 1) return { get: () => { }, set: () => { } }; let a = 0, s = Object.create(null), o = Object.create(null); const l = (u, f) => { s[u] = f, a++, a > e && (a = 0, o = s, s = Object.create(null)) }; return { get(u) { let f = s[u]; if (f !== void 0) return f; if ((f = o[u]) !== void 0) return l(u, f), f }, set(u, f) { u in s ? s[u] = f : l(u, f) } } }, Yd = "!", _0 = ":", QN = [], z0 = (e, a, s, o, l) => ({ modifiers: e, hasImportantModifier: a, baseClassName: s, maybePostfixModifierPosition: o, isExternal: l }), WN = e => { const { prefix: a, experimentalParseClassName: s } = e; let o = l => { const u = []; let f = 0, h = 0, m = 0, p; const g = l.length; for (let C = 0; C < g; C++) { const A = l[C]; if (f === 0 && h === 0) { if (A === _0) { u.push(l.slice(m, C)), m = C + 1; continue } if (A === "/") { p = C; continue } } A === "[" ? f++ : A === "]" ? f-- : A === "(" ? h++ : A === ")" && h-- } const y = u.length === 0 ? l : l.slice(m); let b = y, w = !1; y.endsWith(Yd) ? (b = y.slice(0, -1), w = !0) : y.startsWith(Yd) && (b = y.slice(1), w = !0); const T = p && p > m ? p - m : void 0; return z0(u, w, b, T) }; if (a) { const l = a + _0, u = o; o = f => f.startsWith(l) ? u(f.slice(l.length)) : z0(QN, !1, f, void 0, !0) } if (s) { const l = o; o = u => s({ className: u, parseClassName: l }) } return o }, IN = e => { const a = new Map; return e.orderSensitiveModifiers.forEach((s, o) => { a.set(s, 1e6 + o) }), s => { const o = []; let l = []; for (let u = 0; u < s.length; u++) { const f = s[u], h = f[0] === "[", m = a.has(f); h || m ? (l.length > 0 && (l.sort(), o.push(...l), l = []), o.push(f)) : l.push(f) } return l.length > 0 && (l.sort(), o.push(...l)), o } }, $N = e => ({ cache: ZN(e.cacheSize), parseClassName: WN(e), sortModifiers: IN(e), ...UN(e) }), JN = /\s+/, tD = (e, a) => { const { parseClassName: s, getClassGroupId: o, getConflictingClassGroupIds: l, sortModifiers: u } = a, f = [], h = e.trim().split(JN); let m = ""; for (let p = h.length - 1; p >= 0; p -= 1) { const g = h[p], { isExternal: y, modifiers: b, hasImportantModifier: w, baseClassName: T, maybePostfixModifierPosition: C } = s(g); if (y) { m = g + (m.length > 0 ? " " + m : m); continue } let A = !!C, R = o(A ? T.substring(0, C) : T); if (!R) { if (!A) { m = g + (m.length > 0 ? " " + m : m); continue } if (R = o(T), !R) { m = g + (m.length > 0 ? " " + m : m); continue } A = !1 } const M = b.length === 0 ? "" : b.length === 1 ? b[0] : u(b).join(":"), D = w ? M + Yd : M, _ = D + R; if (f.indexOf(_) > -1) continue; f.push(_); const q = l(R, A); for (let K = 0; K < q.length; ++K) { const U = q[K]; f.push(D + U) } m = g + (m.length > 0 ? " " + m : m) } return m }, eD = (...e) => { let a = 0, s, o, l = ""; for (; a < e.length;)(s = e[a++]) && (o = A1(s)) && (l && (l += " "), l += o); return l }, A1 = e => { if (typeof e == "string") return e; let a, s = ""; for (let o = 0; o < e.length; o++)e[o] && (a = A1(e[o])) && (s && (s += " "), s += a); return s }, nD = (e, ...a) => { let s, o, l, u; const f = m => { const p = a.reduce((g, y) => y(g), e()); return s = $N(p), o = s.cache.get, l = s.cache.set, u = h, h(m) }, h = m => { const p = o(m); if (p) return p; const g = tD(m, s); return l(m, g), g }; return u = f, (...m) => u(eD(...m)) }, aD = [], se = e => { const a = s => s[e] || aD; return a.isThemeGetter = !0, a }, T1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, R1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iD = /^\d+\/\d+$/, sD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oD = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rD = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lD = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cD = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, es = e => iD.test(e), Ct = e => !!e && !Number.isNaN(Number(e)), Ta = e => !!e && Number.isInteger(Number(e)), rd = e => e.endsWith("%") && Ct(e.slice(0, -1)), Zn = e => sD.test(e), uD = () => !0, fD = e => oD.test(e) && !rD.test(e), M1 = () => !1, dD = e => lD.test(e), hD = e => cD.test(e), mD = e => !st(e) && !ot(e), pD = e => vs(e, O1, M1), st = e => T1.test(e), si = e => vs(e, j1, fD), ld = e => vs(e, bD, Ct), V0 = e => vs(e, N1, M1), gD = e => vs(e, D1, hD), ml = e => vs(e, _1, dD), ot = e => R1.test(e), Co = e => xs(e, j1), yD = e => xs(e, SD), L0 = e => xs(e, N1), vD = e => xs(e, O1), xD = e => xs(e, D1), pl = e => xs(e, _1, !0), vs = (e, a, s) => { const o = T1.exec(e); return o ? o[1] ? a(o[1]) : s(o[2]) : !1 }, xs = (e, a, s = !1) => { const o = R1.exec(e); return o ? o[1] ? a(o[1]) : s : !1 }, N1 = e => e === "position" || e === "percentage", D1 = e => e === "image" || e === "url", O1 = e => e === "length" || e === "size" || e === "bg-size", j1 = e => e === "length", bD = e => e === "number", SD = e => e === "family-name", _1 = e => e === "shadow", CD = () => { const e = se("color"), a = se("font"), s = se("text"), o = se("font-weight"), l = se("tracking"), u = se("leading"), f = se("breakpoint"), h = se("container"), m = se("spacing"), p = se("radius"), g = se("shadow"), y = se("inset-shadow"), b = se("text-shadow"), w = se("drop-shadow"), T = se("blur"), C = se("perspective"), A = se("aspect"), R = se("ease"), M = se("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], q = () => [..._(), ot, st], K = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], H = () => [ot, st, m], J = () => [es, "full", "auto", ...H()], W = () => [Ta, "none", "subgrid", ot, st], et = () => ["auto", { span: ["full", Ta, ot, st] }, Ta, ot, st], at = () => [Ta, "auto", ot, st], mt = () => ["auto", "min", "max", "fr", ot, st], ut = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], lt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...H()], Q = () => [es, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()], L = () => [e, ot, st], nt = () => [..._(), L0, V0, { position: [ot, st] }], ht = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], O = () => ["auto", "cover", "contain", vD, pD, { size: [ot, st] }], X = () => [rd, Co, si], $ = () => ["", "none", "full", p, ot, st], tt = () => ["", Ct, Co, si], dt = () => ["solid", "dashed", "dotted", "double"], gt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [Ct, rd, L0, V0], bt = () => ["", "none", T, ot, st], vt = () => ["none", Ct, ot, st], At = () => ["none", Ct, ot, st], Nt = () => [Ct, ot, st], _t = () => [es, "full", ...H()]; return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Zn], breakpoint: [Zn], color: [uD], container: [Zn], "drop-shadow": [Zn], ease: ["in", "out", "in-out"], font: [mD], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Zn], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Zn], shadow: [Zn], spacing: ["px", Ct], text: [Zn], "text-shadow": [Zn], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", es, st, ot, A] }], container: ["container"], columns: [{ columns: [Ct, st, ot, h] }], "break-after": [{ "break-after": D() }], "break-before": [{ "break-before": D() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: q() }], overflow: [{ overflow: K() }], "overflow-x": [{ "overflow-x": K() }], "overflow-y": [{ "overflow-y": K() }], overscroll: [{ overscroll: U() }], "overscroll-x": [{ "overscroll-x": U() }], "overscroll-y": [{ "overscroll-y": U() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: J() }], "inset-x": [{ "inset-x": J() }], "inset-y": [{ "inset-y": J() }], start: [{ start: J() }], end: [{ end: J() }], top: [{ top: J() }], right: [{ right: J() }], bottom: [{ bottom: J() }], left: [{ left: J() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [Ta, "auto", ot, st] }], basis: [{ basis: [es, "full", "auto", h, ...H()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [Ct, es, "auto", "initial", "none", st] }], grow: [{ grow: ["", Ct, ot, st] }], shrink: [{ shrink: ["", Ct, ot, st] }], order: [{ order: [Ta, "first", "last", "none", ot, st] }], "grid-cols": [{ "grid-cols": W() }], "col-start-end": [{ col: et() }], "col-start": [{ "col-start": at() }], "col-end": [{ "col-end": at() }], "grid-rows": [{ "grid-rows": W() }], "row-start-end": [{ row: et() }], "row-start": [{ "row-start": at() }], "row-end": [{ "row-end": at() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": mt() }], "auto-rows": [{ "auto-rows": mt() }], gap: [{ gap: H() }], "gap-x": [{ "gap-x": H() }], "gap-y": [{ "gap-y": H() }], "justify-content": [{ justify: [...ut(), "normal"] }], "justify-items": [{ "justify-items": [...lt(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...lt()] }], "align-content": [{ content: ["normal", ...ut()] }], "align-items": [{ items: [...lt(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...lt(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": ut() }], "place-items": [{ "place-items": [...lt(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...lt()] }], p: [{ p: H() }], px: [{ px: H() }], py: [{ py: H() }], ps: [{ ps: H() }], pe: [{ pe: H() }], pt: [{ pt: H() }], pr: [{ pr: H() }], pb: [{ pb: H() }], pl: [{ pl: H() }], m: [{ m: z() }], mx: [{ mx: z() }], my: [{ my: z() }], ms: [{ ms: z() }], me: [{ me: z() }], mt: [{ mt: z() }], mr: [{ mr: z() }], mb: [{ mb: z() }], ml: [{ ml: z() }], "space-x": [{ "space-x": H() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": H() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: Q() }], w: [{ w: [h, "screen", ...Q()] }], "min-w": [{ "min-w": [h, "screen", "none", ...Q()] }], "max-w": [{ "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...Q()] }], h: [{ h: ["screen", "lh", ...Q()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }], "max-h": [{ "max-h": ["screen", "lh", ...Q()] }], "font-size": [{ text: ["base", s, Co, si] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [o, ot, ld] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rd, st] }], "font-family": [{ font: [yD, st, a] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [l, ot, st] }], "line-clamp": [{ "line-clamp": [Ct, "none", ot, ld] }], leading: [{ leading: [u, ...H()] }], "list-image": [{ "list-image": ["none", ot, st] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", ot, st] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: L() }], "text-color": [{ text: L() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...dt(), "wavy"] }], "text-decoration-thickness": [{ decoration: [Ct, "from-font", "auto", ot, si] }], "text-decoration-color": [{ decoration: L() }], "underline-offset": [{ "underline-offset": [Ct, "auto", ot, st] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: H() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ot, st] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", ot, st] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: nt() }], "bg-repeat": [{ bg: ht() }], "bg-size": [{ bg: O() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ta, ot, st], radial: ["", ot, st], conic: [Ta, ot, st] }, xD, gD] }], "bg-color": [{ bg: L() }], "gradient-from-pos": [{ from: X() }], "gradient-via-pos": [{ via: X() }], "gradient-to-pos": [{ to: X() }], "gradient-from": [{ from: L() }], "gradient-via": [{ via: L() }], "gradient-to": [{ to: L() }], rounded: [{ rounded: $() }], "rounded-s": [{ "rounded-s": $() }], "rounded-e": [{ "rounded-e": $() }], "rounded-t": [{ "rounded-t": $() }], "rounded-r": [{ "rounded-r": $() }], "rounded-b": [{ "rounded-b": $() }], "rounded-l": [{ "rounded-l": $() }], "rounded-ss": [{ "rounded-ss": $() }], "rounded-se": [{ "rounded-se": $() }], "rounded-ee": [{ "rounded-ee": $() }], "rounded-es": [{ "rounded-es": $() }], "rounded-tl": [{ "rounded-tl": $() }], "rounded-tr": [{ "rounded-tr": $() }], "rounded-br": [{ "rounded-br": $() }], "rounded-bl": [{ "rounded-bl": $() }], "border-w": [{ border: tt() }], "border-w-x": [{ "border-x": tt() }], "border-w-y": [{ "border-y": tt() }], "border-w-s": [{ "border-s": tt() }], "border-w-e": [{ "border-e": tt() }], "border-w-t": [{ "border-t": tt() }], "border-w-r": [{ "border-r": tt() }], "border-w-b": [{ "border-b": tt() }], "border-w-l": [{ "border-l": tt() }], "divide-x": [{ "divide-x": tt() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": tt() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...dt(), "hidden", "none"] }], "divide-style": [{ divide: [...dt(), "hidden", "none"] }], "border-color": [{ border: L() }], "border-color-x": [{ "border-x": L() }], "border-color-y": [{ "border-y": L() }], "border-color-s": [{ "border-s": L() }], "border-color-e": [{ "border-e": L() }], "border-color-t": [{ "border-t": L() }], "border-color-r": [{ "border-r": L() }], "border-color-b": [{ "border-b": L() }], "border-color-l": [{ "border-l": L() }], "divide-color": [{ divide: L() }], "outline-style": [{ outline: [...dt(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [Ct, ot, st] }], "outline-w": [{ outline: ["", Ct, Co, si] }], "outline-color": [{ outline: L() }], shadow: [{ shadow: ["", "none", g, pl, ml] }], "shadow-color": [{ shadow: L() }], "inset-shadow": [{ "inset-shadow": ["none", y, pl, ml] }], "inset-shadow-color": [{ "inset-shadow": L() }], "ring-w": [{ ring: tt() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: L() }], "ring-offset-w": [{ "ring-offset": [Ct, si] }], "ring-offset-color": [{ "ring-offset": L() }], "inset-ring-w": [{ "inset-ring": tt() }], "inset-ring-color": [{ "inset-ring": L() }], "text-shadow": [{ "text-shadow": ["none", b, pl, ml] }], "text-shadow-color": [{ "text-shadow": L() }], opacity: [{ opacity: [Ct, ot, st] }], "mix-blend": [{ "mix-blend": [...gt(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": gt() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [Ct] }], "mask-image-linear-from-pos": [{ "mask-linear-from": I() }], "mask-image-linear-to-pos": [{ "mask-linear-to": I() }], "mask-image-linear-from-color": [{ "mask-linear-from": L() }], "mask-image-linear-to-color": [{ "mask-linear-to": L() }], "mask-image-t-from-pos": [{ "mask-t-from": I() }], "mask-image-t-to-pos": [{ "mask-t-to": I() }], "mask-image-t-from-color": [{ "mask-t-from": L() }], "mask-image-t-to-color": [{ "mask-t-to": L() }], "mask-image-r-from-pos": [{ "mask-r-from": I() }], "mask-image-r-to-pos": [{ "mask-r-to": I() }], "mask-image-r-from-color": [{ "mask-r-from": L() }], "mask-image-r-to-color": [{ "mask-r-to": L() }], "mask-image-b-from-pos": [{ "mask-b-from": I() }], "mask-image-b-to-pos": [{ "mask-b-to": I() }], "mask-image-b-from-color": [{ "mask-b-from": L() }], "mask-image-b-to-color": [{ "mask-b-to": L() }], "mask-image-l-from-pos": [{ "mask-l-from": I() }], "mask-image-l-to-pos": [{ "mask-l-to": I() }], "mask-image-l-from-color": [{ "mask-l-from": L() }], "mask-image-l-to-color": [{ "mask-l-to": L() }], "mask-image-x-from-pos": [{ "mask-x-from": I() }], "mask-image-x-to-pos": [{ "mask-x-to": I() }], "mask-image-x-from-color": [{ "mask-x-from": L() }], "mask-image-x-to-color": [{ "mask-x-to": L() }], "mask-image-y-from-pos": [{ "mask-y-from": I() }], "mask-image-y-to-pos": [{ "mask-y-to": I() }], "mask-image-y-from-color": [{ "mask-y-from": L() }], "mask-image-y-to-color": [{ "mask-y-to": L() }], "mask-image-radial": [{ "mask-radial": [ot, st] }], "mask-image-radial-from-pos": [{ "mask-radial-from": I() }], "mask-image-radial-to-pos": [{ "mask-radial-to": I() }], "mask-image-radial-from-color": [{ "mask-radial-from": L() }], "mask-image-radial-to-color": [{ "mask-radial-to": L() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": _() }], "mask-image-conic-pos": [{ "mask-conic": [Ct] }], "mask-image-conic-from-pos": [{ "mask-conic-from": I() }], "mask-image-conic-to-pos": [{ "mask-conic-to": I() }], "mask-image-conic-from-color": [{ "mask-conic-from": L() }], "mask-image-conic-to-color": [{ "mask-conic-to": L() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: nt() }], "mask-repeat": [{ mask: ht() }], "mask-size": [{ mask: O() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", ot, st] }], filter: [{ filter: ["", "none", ot, st] }], blur: [{ blur: bt() }], brightness: [{ brightness: [Ct, ot, st] }], contrast: [{ contrast: [Ct, ot, st] }], "drop-shadow": [{ "drop-shadow": ["", "none", w, pl, ml] }], "drop-shadow-color": [{ "drop-shadow": L() }], grayscale: [{ grayscale: ["", Ct, ot, st] }], "hue-rotate": [{ "hue-rotate": [Ct, ot, st] }], invert: [{ invert: ["", Ct, ot, st] }], saturate: [{ saturate: [Ct, ot, st] }], sepia: [{ sepia: ["", Ct, ot, st] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", ot, st] }], "backdrop-blur": [{ "backdrop-blur": bt() }], "backdrop-brightness": [{ "backdrop-brightness": [Ct, ot, st] }], "backdrop-contrast": [{ "backdrop-contrast": [Ct, ot, st] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", Ct, ot, st] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Ct, ot, st] }], "backdrop-invert": [{ "backdrop-invert": ["", Ct, ot, st] }], "backdrop-opacity": [{ "backdrop-opacity": [Ct, ot, st] }], "backdrop-saturate": [{ "backdrop-saturate": [Ct, ot, st] }], "backdrop-sepia": [{ "backdrop-sepia": ["", Ct, ot, st] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": H() }], "border-spacing-x": [{ "border-spacing-x": H() }], "border-spacing-y": [{ "border-spacing-y": H() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ot, st] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [Ct, "initial", ot, st] }], ease: [{ ease: ["linear", "initial", R, ot, st] }], delay: [{ delay: [Ct, ot, st] }], animate: [{ animate: ["none", M, ot, st] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [C, ot, st] }], "perspective-origin": [{ "perspective-origin": q() }], rotate: [{ rotate: vt() }], "rotate-x": [{ "rotate-x": vt() }], "rotate-y": [{ "rotate-y": vt() }], "rotate-z": [{ "rotate-z": vt() }], scale: [{ scale: At() }], "scale-x": [{ "scale-x": At() }], "scale-y": [{ "scale-y": At() }], "scale-z": [{ "scale-z": At() }], "scale-3d": ["scale-3d"], skew: [{ skew: Nt() }], "skew-x": [{ "skew-x": Nt() }], "skew-y": [{ "skew-y": Nt() }], transform: [{ transform: [ot, st, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: q() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: _t() }], "translate-x": [{ "translate-x": _t() }], "translate-y": [{ "translate-y": _t() }], "translate-z": [{ "translate-z": _t() }], "translate-none": ["translate-none"], accent: [{ accent: L() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: L() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ot, st] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": H() }], "scroll-mx": [{ "scroll-mx": H() }], "scroll-my": [{ "scroll-my": H() }], "scroll-ms": [{ "scroll-ms": H() }], "scroll-me": [{ "scroll-me": H() }], "scroll-mt": [{ "scroll-mt": H() }], "scroll-mr": [{ "scroll-mr": H() }], "scroll-mb": [{ "scroll-mb": H() }], "scroll-ml": [{ "scroll-ml": H() }], "scroll-p": [{ "scroll-p": H() }], "scroll-px": [{ "scroll-px": H() }], "scroll-py": [{ "scroll-py": H() }], "scroll-ps": [{ "scroll-ps": H() }], "scroll-pe": [{ "scroll-pe": H() }], "scroll-pt": [{ "scroll-pt": H() }], "scroll-pr": [{ "scroll-pr": H() }], "scroll-pb": [{ "scroll-pb": H() }], "scroll-pl": [{ "scroll-pl": H() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", ot, st] }], fill: [{ fill: ["none", ...L()] }], "stroke-w": [{ stroke: [Ct, Co, si, ld] }], stroke: [{ stroke: ["none", ...L()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] } }, wD = nD(CD); function ja(...e) { return wD(VN(e)) } function di({ className: e, ...a }) { return S.jsx("textarea", { "code-path": "src/components/ui/textarea.tsx:7:5", "data-slot": "textarea", className: ja("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ...a }) } function ED({ className: e, type: a, ...s }) { return S.jsx("input", { "code-path": "src/components/ui/input.tsx:7:5", type: a, "data-slot": "input", className: ja("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e), ...s }) } var Go = dx(); const AD = ux(Go); function k0(e, [a, s]) { return Math.min(s, Math.max(a, e)) } function ne(e, a, { checkForDefaultPrevented: s = !0 } = {}) { return function (l) { if (e?.(l), s === !1 || !l.defaultPrevented) return a?.(l) } } function Hh(e, a = []) { let s = []; function o(u, f) { const h = x.createContext(f), m = s.length; s = [...s, f]; const p = y => { const { scope: b, children: w, ...T } = y, C = b?.[e]?.[m] || h, A = x.useMemo(() => T, Object.values(T)); return S.jsx(C.Provider, { value: A, children: w }) }; p.displayName = u + "Provider"; function g(y, b) { const w = b?.[e]?.[m] || h, T = x.useContext(w); if (T) return T; if (f !== void 0) return f; throw new Error(`\`${y}\` must be used within \`${u}\``) } return [p, g] } const l = () => { const u = s.map(f => x.createContext(f)); return function (h) { const m = h?.[e] || u; return x.useMemo(() => ({ [`__scope${e}`]: { ...h, [e]: m } }), [h, m]) } }; return l.scopeName = e, [o, TD(l, ...a)] } function TD(...e) { const a = e[0]; if (e.length === 1) return a; const s = () => { const o = e.map(l => ({ useScope: l(), scopeName: l.scopeName })); return function (u) { const f = o.reduce((h, { useScope: m, scopeName: p }) => { const y = m(u)[`__scope${p}`]; return { ...h, ...y } }, {}); return x.useMemo(() => ({ [`__scope${a.scopeName}`]: f }), [f]) } }; return s.scopeName = a.scopeName, s } function B0(e, a) { if (typeof e == "function") return e(a); e != null && (e.current = a) } function fc(...e) { return a => { let s = !1; const o = e.map(l => { const u = B0(l, a); return !s && typeof u == "function" && (s = !0), u }); if (s) return () => { for (let l = 0; l < o.length; l++) { const u = o[l]; typeof u == "function" ? u() : B0(e[l], null) } } } } function ve(...e) { return x.useCallback(fc(...e), e) } function U0(e) { const a = RD(e), s = x.forwardRef((o, l) => { const { children: u, ...f } = o, h = x.Children.toArray(u), m = h.find(ND); if (m) { const p = m.props.children, g = h.map(y => y === m ? x.Children.count(p) > 1 ? x.Children.only(null) : x.isValidElement(p) ? p.props.children : null : y); return S.jsx(a, { ...f, ref: l, children: x.isValidElement(p) ? x.cloneElement(p, void 0, g) : null }) } return S.jsx(a, { ...f, ref: l, children: u }) }); return s.displayName = `${e}.Slot`, s } function RD(e) { const a = x.forwardRef((s, o) => { const { children: l, ...u } = s; if (x.isValidElement(l)) { const f = OD(l), h = DD(u, l.props); return l.type !== x.Fragment && (h.ref = o ? fc(o, f) : f), x.cloneElement(l, h) } return x.Children.count(l) > 1 ? x.Children.only(null) : null }); return a.displayName = `${e}.SlotClone`, a } var MD = Symbol("radix.slottable"); function ND(e) { return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === MD } function DD(e, a) { const s = { ...a }; for (const o in a) { const l = e[o], u = a[o]; /^on[A-Z]/.test(o) ? l && u ? s[o] = (...h) => { const m = u(...h); return l(...h), m } : l && (s[o] = l) : o === "style" ? s[o] = { ...l, ...u } : o === "className" && (s[o] = [l, u].filter(Boolean).join(" ")) } return { ...e, ...s } } function OD(e) { let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning; return s ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning, s ? e.props.ref : e.props.ref || e.ref) } function jD(e) { const a = e + "CollectionProvider", [s, o] = Hh(a), [l, u] = s(a, { collectionRef: { current: null }, itemMap: new Map }), f = C => { const { scope: A, children: R } = C, M = Ra.useRef(null), D = Ra.useRef(new Map).current; return S.jsx(l, { scope: A, itemMap: D, collectionRef: M, children: R }) }; f.displayName = a; const h = e + "CollectionSlot", m = U0(h), p = Ra.forwardRef((C, A) => { const { scope: R, children: M } = C, D = u(h, R), _ = ve(A, D.collectionRef); return S.jsx(m, { ref: _, children: M }) }); p.displayName = h; const g = e + "CollectionItemSlot", y = "data-radix-collection-item", b = U0(g), w = Ra.forwardRef((C, A) => { const { scope: R, children: M, ...D } = C, _ = Ra.useRef(null), q = ve(A, _), K = u(g, R); return Ra.useEffect(() => (K.itemMap.set(_, { ref: _, ...D }), () => { K.itemMap.delete(_) })), S.jsx(b, { [y]: "", ref: q, children: M }) }); w.displayName = g; function T(C) { const A = u(e + "CollectionConsumer", C); return Ra.useCallback(() => { const M = A.collectionRef.current; if (!M) return []; const D = Array.from(M.querySelectorAll(`[${y}]`)); return Array.from(A.itemMap.values()).sort((K, U) => D.indexOf(K.ref.current) - D.indexOf(U.ref.current)) }, [A.collectionRef, A.itemMap]) } return [{ Provider: f, Slot: p, ItemSlot: w }, T, o] } var _D = x.createContext(void 0); function zD(e) { const a = x.useContext(_D); return e || a || "ltr" } function VD(e) { const a = LD(e), s = x.forwardRef((o, l) => { const { children: u, ...f } = o, h = x.Children.toArray(u), m = h.find(BD); if (m) { const p = m.props.children, g = h.map(y => y === m ? x.Children.count(p) > 1 ? x.Children.only(null) : x.isValidElement(p) ? p.props.children : null : y); return S.jsx(a, { ...f, ref: l, children: x.isValidElement(p) ? x.cloneElement(p, void 0, g) : null }) } return S.jsx(a, { ...f, ref: l, children: u }) }); return s.displayName = `${e}.Slot`, s } function LD(e) { const a = x.forwardRef((s, o) => { const { children: l, ...u } = s; if (x.isValidElement(l)) { const f = HD(l), h = UD(u, l.props); return l.type !== x.Fragment && (h.ref = o ? fc(o, f) : f), x.cloneElement(l, h) } return x.Children.count(l) > 1 ? x.Children.only(null) : null }); return a.displayName = `${e}.SlotClone`, a } var kD = Symbol("radix.slottable"); function BD(e) { return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kD } function UD(e, a) { const s = { ...a }; for (const o in a) { const l = e[o], u = a[o]; /^on[A-Z]/.test(o) ? l && u ? s[o] = (...h) => { const m = u(...h); return l(...h), m } : l && (s[o] = l) : o === "style" ? s[o] = { ...l, ...u } : o === "className" && (s[o] = [l, u].filter(Boolean).join(" ")) } return { ...e, ...s } } function HD(e) { let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning; return s ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning, s ? e.props.ref : e.props.ref || e.ref) } var PD = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Wt = PD.reduce((e, a) => { const s = VD(`Primitive.${a}`), o = x.forwardRef((l, u) => { const { asChild: f, ...h } = l, m = f ? s : a; return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(m, { ...h, ref: u }) }); return o.displayName = `Primitive.${a}`, { ...e, [a]: o } }, {}); function qD(e, a) { e && Go.flushSync(() => e.dispatchEvent(a)) } function hi(e) { const a = x.useRef(e); return x.useEffect(() => { a.current = e }), x.useMemo(() => (...s) => a.current?.(...s), []) } function GD(e, a = globalThis?.document) { const s = hi(e); x.useEffect(() => { const o = l => { l.key === "Escape" && s(l) }; return a.addEventListener("keydown", o, { capture: !0 }), () => a.removeEventListener("keydown", o, { capture: !0 }) }, [s, a]) } var YD = "DismissableLayer", Xd = "dismissableLayer.update", XD = "dismissableLayer.pointerDownOutside", FD = "dismissableLayer.focusOutside", H0, z1 = x.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set }), V1 = x.forwardRef((e, a) => { const { disableOutsidePointerEvents: s = !1, onEscapeKeyDown: o, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: f, onDismiss: h, ...m } = e, p = x.useContext(z1), [g, y] = x.useState(null), b = g?.ownerDocument ?? globalThis?.document, [, w] = x.useState({}), T = ve(a, U => y(U)), C = Array.from(p.layers), [A] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), R = C.indexOf(A), M = g ? C.indexOf(g) : -1, D = p.layersWithOutsidePointerEventsDisabled.size > 0, _ = M >= R, q = QD(U => { const H = U.target, J = [...p.branches].some(W => W.contains(H)); !_ || J || (l?.(U), f?.(U), U.defaultPrevented || h?.()) }, b), K = WD(U => { const H = U.target;[...p.branches].some(W => W.contains(H)) || (u?.(U), f?.(U), U.defaultPrevented || h?.()) }, b); return GD(U => { M === p.layers.size - 1 && (o?.(U), !U.defaultPrevented && h && (U.preventDefault(), h())) }, b), x.useEffect(() => { if (g) return s && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (H0 = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(g)), p.layers.add(g), P0(), () => { s && p.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = H0) } }, [g, b, s, p]), x.useEffect(() => () => { g && (p.layers.delete(g), p.layersWithOutsidePointerEventsDisabled.delete(g), P0()) }, [g, p]), x.useEffect(() => { const U = () => w({}); return document.addEventListener(Xd, U), () => document.removeEventListener(Xd, U) }, []), S.jsx(Wt.div, { ...m, ref: T, style: { pointerEvents: D ? _ ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: ne(e.onFocusCapture, K.onFocusCapture), onBlurCapture: ne(e.onBlurCapture, K.onBlurCapture), onPointerDownCapture: ne(e.onPointerDownCapture, q.onPointerDownCapture) }) }); V1.displayName = YD; var KD = "DismissableLayerBranch", ZD = x.forwardRef((e, a) => { const s = x.useContext(z1), o = x.useRef(null), l = ve(a, o); return x.useEffect(() => { const u = o.current; if (u) return s.branches.add(u), () => { s.branches.delete(u) } }, [s.branches]), S.jsx(Wt.div, { ...e, ref: l }) }); ZD.displayName = KD; function QD(e, a = globalThis?.document) { const s = hi(e), o = x.useRef(!1), l = x.useRef(() => { }); return x.useEffect(() => { const u = h => { if (h.target && !o.current) { let m = function () { L1(XD, s, p, { discrete: !0 }) }; const p = { originalEvent: h }; h.pointerType === "touch" ? (a.removeEventListener("click", l.current), l.current = m, a.addEventListener("click", l.current, { once: !0 })) : m() } else a.removeEventListener("click", l.current); o.current = !1 }, f = window.setTimeout(() => { a.addEventListener("pointerdown", u) }, 0); return () => { window.clearTimeout(f), a.removeEventListener("pointerdown", u), a.removeEventListener("click", l.current) } }, [a, s]), { onPointerDownCapture: () => o.current = !0 } } function WD(e, a = globalThis?.document) { const s = hi(e), o = x.useRef(!1); return x.useEffect(() => { const l = u => { u.target && !o.current && L1(FD, s, { originalEvent: u }, { discrete: !1 }) }; return a.addEventListener("focusin", l), () => a.removeEventListener("focusin", l) }, [a, s]), { onFocusCapture: () => o.current = !0, onBlurCapture: () => o.current = !1 } } function P0() { const e = new CustomEvent(Xd); document.dispatchEvent(e) } function L1(e, a, s, { discrete: o }) { const l = s.originalEvent.target, u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: s }); a && l.addEventListener(e, a, { once: !0 }), o ? qD(l, u) : l.dispatchEvent(u) } var cd = 0; function ID() { x.useEffect(() => { const e = document.querySelectorAll("[data-radix-focus-guard]"); return document.body.insertAdjacentElement("afterbegin", e[0] ?? q0()), document.body.insertAdjacentElement("beforeend", e[1] ?? q0()), cd++, () => { cd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(a => a.remove()), cd-- } }, []) } function q0() { const e = document.createElement("span"); return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e } var ud = "focusScope.autoFocusOnMount", fd = "focusScope.autoFocusOnUnmount", G0 = { bubbles: !1, cancelable: !0 }, $D = "FocusScope", k1 = x.forwardRef((e, a) => { const { loop: s = !1, trapped: o = !1, onMountAutoFocus: l, onUnmountAutoFocus: u, ...f } = e, [h, m] = x.useState(null), p = hi(l), g = hi(u), y = x.useRef(null), b = ve(a, C => m(C)), w = x.useRef({ paused: !1, pause() { this.paused = !0 }, resume() { this.paused = !1 } }).current; x.useEffect(() => { if (o) { let C = function (D) { if (w.paused || !h) return; const _ = D.target; h.contains(_) ? y.current = _ : Ma(y.current, { select: !0 }) }, A = function (D) { if (w.paused || !h) return; const _ = D.relatedTarget; _ !== null && (h.contains(_) || Ma(y.current, { select: !0 })) }, R = function (D) { if (document.activeElement === document.body) for (const q of D) q.removedNodes.length > 0 && Ma(h) }; document.addEventListener("focusin", C), document.addEventListener("focusout", A); const M = new MutationObserver(R); return h && M.observe(h, { childList: !0, subtree: !0 }), () => { document.removeEventListener("focusin", C), document.removeEventListener("focusout", A), M.disconnect() } } }, [o, h, w.paused]), x.useEffect(() => { if (h) { X0.add(w); const C = document.activeElement; if (!h.contains(C)) { const R = new CustomEvent(ud, G0); h.addEventListener(ud, p), h.dispatchEvent(R), R.defaultPrevented || (JD(iO(B1(h)), { select: !0 }), document.activeElement === C && Ma(h)) } return () => { h.removeEventListener(ud, p), setTimeout(() => { const R = new CustomEvent(fd, G0); h.addEventListener(fd, g), h.dispatchEvent(R), R.defaultPrevented || Ma(C ?? document.body, { select: !0 }), h.removeEventListener(fd, g), X0.remove(w) }, 0) } } }, [h, p, g, w]); const T = x.useCallback(C => { if (!s && !o || w.paused) return; const A = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, R = document.activeElement; if (A && R) { const M = C.currentTarget, [D, _] = tO(M); D && _ ? !C.shiftKey && R === _ ? (C.preventDefault(), s && Ma(D, { select: !0 })) : C.shiftKey && R === D && (C.preventDefault(), s && Ma(_, { select: !0 })) : R === M && C.preventDefault() } }, [s, o, w.paused]); return S.jsx(Wt.div, { tabIndex: -1, ...f, ref: b, onKeyDown: T }) }); k1.displayName = $D; function JD(e, { select: a = !1 } = {}) { const s = document.activeElement; for (const o of e) if (Ma(o, { select: a }), document.activeElement !== s) return } function tO(e) { const a = B1(e), s = Y0(a, e), o = Y0(a.reverse(), e); return [s, o] } function B1(e) { const a = [], s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: o => { const l = o.tagName === "INPUT" && o.type === "hidden"; return o.disabled || o.hidden || l ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP } }); for (; s.nextNode();)a.push(s.currentNode); return a } function Y0(e, a) { for (const s of e) if (!eO(s, { upTo: a })) return s } function eO(e, { upTo: a }) { if (getComputedStyle(e).visibility === "hidden") return !0; for (; e;) { if (a !== void 0 && e === a) return !1; if (getComputedStyle(e).display === "none") return !0; e = e.parentElement } return !1 } function nO(e) { return e instanceof HTMLInputElement && "select" in e } function Ma(e, { select: a = !1 } = {}) { if (e && e.focus) { const s = document.activeElement; e.focus({ preventScroll: !0 }), e !== s && nO(e) && a && e.select() } } var X0 = aO(); function aO() { let e = []; return { add(a) { const s = e[0]; a !== s && s?.pause(), e = F0(e, a), e.unshift(a) }, remove(a) { e = F0(e, a), e[0]?.resume() } } } function F0(e, a) { const s = [...e], o = s.indexOf(a); return o !== -1 && s.splice(o, 1), s } function iO(e) { return e.filter(a => a.tagName !== "A") } var je = globalThis?.document ? x.useLayoutEffect : () => { }, sO = fx[" useId ".trim().toString()] || (() => { }), oO = 0; function Ph(e) { const [a, s] = x.useState(sO()); return je(() => { s(o => o ?? String(oO++)) }, [e]), e || (a ? `radix-${a}` : "") } const rO = ["top", "right", "bottom", "left"], _a = Math.min, Ge = Math.max, Wl = Math.round, gl = Math.floor, An = e => ({ x: e, y: e }), lO = { left: "right", right: "left", bottom: "top", top: "bottom" }, cO = { start: "end", end: "start" }; function Fd(e, a, s) { return Ge(e, _a(a, s)) } function In(e, a) { return typeof e == "function" ? e(a) : e } function $n(e) { return e.split("-")[0] } function bs(e) { return e.split("-")[1] } function qh(e) { return e === "x" ? "y" : "x" } function Gh(e) { return e === "y" ? "height" : "width" } const uO = new Set(["top", "bottom"]); function wn(e) { return uO.has($n(e)) ? "y" : "x" } function Yh(e) { return qh(wn(e)) } function fO(e, a, s) { s === void 0 && (s = !1); const o = bs(e), l = Yh(e), u = Gh(l); let f = l === "x" ? o === (s ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top"; return a.reference[u] > a.floating[u] && (f = Il(f)), [f, Il(f)] } function dO(e) { const a = Il(e); return [Kd(e), a, Kd(a)] } function Kd(e) { return e.replace(/start|end/g, a => cO[a]) } const K0 = ["left", "right"], Z0 = ["right", "left"], hO = ["top", "bottom"], mO = ["bottom", "top"]; function pO(e, a, s) { switch (e) { case "top": case "bottom": return s ? a ? Z0 : K0 : a ? K0 : Z0; case "left": case "right": return a ? hO : mO; default: return [] } } function gO(e, a, s, o) { const l = bs(e); let u = pO($n(e), s === "start", o); return l && (u = u.map(f => f + "-" + l), a && (u = u.concat(u.map(Kd)))), u } function Il(e) { return e.replace(/left|right|bottom|top/g, a => lO[a]) } function yO(e) { return { top: 0, right: 0, bottom: 0, left: 0, ...e } } function U1(e) { return typeof e != "number" ? yO(e) : { top: e, right: e, bottom: e, left: e } } function $l(e) { const { x: a, y: s, width: o, height: l } = e; return { width: o, height: l, top: s, left: a, right: a + o, bottom: s + l, x: a, y: s } } function Q0(e, a, s) { let { reference: o, floating: l } = e; const u = wn(a), f = Yh(a), h = Gh(f), m = $n(a), p = u === "y", g = o.x + o.width / 2 - l.width / 2, y = o.y + o.height / 2 - l.height / 2, b = o[h] / 2 - l[h] / 2; let w; switch (m) { case "top": w = { x: g, y: o.y - l.height }; break; case "bottom": w = { x: g, y: o.y + o.height }; break; case "right": w = { x: o.x + o.width, y }; break; case "left": w = { x: o.x - l.width, y }; break; default: w = { x: o.x, y: o.y } }switch (bs(a)) { case "start": w[f] -= b * (s && p ? -1 : 1); break; case "end": w[f] += b * (s && p ? -1 : 1); break }return w } const vO = async (e, a, s) => { const { placement: o = "bottom", strategy: l = "absolute", middleware: u = [], platform: f } = s, h = u.filter(Boolean), m = await (f.isRTL == null ? void 0 : f.isRTL(a)); let p = await f.getElementRects({ reference: e, floating: a, strategy: l }), { x: g, y } = Q0(p, o, m), b = o, w = {}, T = 0; for (let C = 0; C < h.length; C++) { const { name: A, fn: R } = h[C], { x: M, y: D, data: _, reset: q } = await R({ x: g, y, initialPlacement: o, placement: b, strategy: l, middlewareData: w, rects: p, platform: f, elements: { reference: e, floating: a } }); g = M ?? g, y = D ?? y, w = { ...w, [A]: { ...w[A], ..._ } }, q && T <= 50 && (T++, typeof q == "object" && (q.placement && (b = q.placement), q.rects && (p = q.rects === !0 ? await f.getElementRects({ reference: e, floating: a, strategy: l }) : q.rects), { x: g, y } = Q0(p, b, m)), C = -1) } return { x: g, y, placement: b, strategy: l, middlewareData: w } }; async function zo(e, a) { var s; a === void 0 && (a = {}); const { x: o, y: l, platform: u, rects: f, elements: h, strategy: m } = e, { boundary: p = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: b = !1, padding: w = 0 } = In(a, e), T = U1(w), A = h[b ? y === "floating" ? "reference" : "floating" : y], R = $l(await u.getClippingRect({ element: (s = await (u.isElement == null ? void 0 : u.isElement(A))) == null || s ? A : A.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)), boundary: p, rootBoundary: g, strategy: m })), M = y === "floating" ? { x: o, y: l, width: f.floating.width, height: f.floating.height } : f.reference, D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), _ = await (u.isElement == null ? void 0 : u.isElement(D)) ? await (u.getScale == null ? void 0 : u.getScale(D)) || { x: 1, y: 1 } : { x: 1, y: 1 }, q = $l(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: h, rect: M, offsetParent: D, strategy: m }) : M); return { top: (R.top - q.top + T.top) / _.y, bottom: (q.bottom - R.bottom + T.bottom) / _.y, left: (R.left - q.left + T.left) / _.x, right: (q.right - R.right + T.right) / _.x } } const xO = e => ({ name: "arrow", options: e, async fn(a) { const { x: s, y: o, placement: l, rects: u, platform: f, elements: h, middlewareData: m } = a, { element: p, padding: g = 0 } = In(e, a) || {}; if (p == null) return {}; const y = U1(g), b = { x: s, y: o }, w = Yh(l), T = Gh(w), C = await f.getDimensions(p), A = w === "y", R = A ? "top" : "left", M = A ? "bottom" : "right", D = A ? "clientHeight" : "clientWidth", _ = u.reference[T] + u.reference[w] - b[w] - u.floating[T], q = b[w] - u.reference[w], K = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p)); let U = K ? K[D] : 0; (!U || !await (f.isElement == null ? void 0 : f.isElement(K))) && (U = h.floating[D] || u.floating[T]); const H = _ / 2 - q / 2, J = U / 2 - C[T] / 2 - 1, W = _a(y[R], J), et = _a(y[M], J), at = W, mt = U - C[T] - et, ut = U / 2 - C[T] / 2 + H, lt = Fd(at, ut, mt), z = !m.arrow && bs(l) != null && ut !== lt && u.reference[T] / 2 - (ut < at ? W : et) - C[T] / 2 < 0, Q = z ? ut < at ? ut - at : ut - mt : 0; return { [w]: b[w] + Q, data: { [w]: lt, centerOffset: ut - lt - Q, ...z && { alignmentOffset: Q } }, reset: z } } }), bO = function (e) { return e === void 0 && (e = {}), { name: "flip", options: e, async fn(a) { var s, o; const { placement: l, middlewareData: u, rects: f, initialPlacement: h, platform: m, elements: p } = a, { mainAxis: g = !0, crossAxis: y = !0, fallbackPlacements: b, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: T = "none", flipAlignment: C = !0, ...A } = In(e, a); if ((s = u.arrow) != null && s.alignmentOffset) return {}; const R = $n(l), M = wn(h), D = $n(h) === h, _ = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)), q = b || (D || !C ? [Il(h)] : dO(h)), K = T !== "none"; !b && K && q.push(...gO(h, C, T, _)); const U = [h, ...q], H = await zo(a, A), J = []; let W = ((o = u.flip) == null ? void 0 : o.overflows) || []; if (g && J.push(H[R]), y) { const ut = fO(l, f, _); J.push(H[ut[0]], H[ut[1]]) } if (W = [...W, { placement: l, overflows: J }], !J.every(ut => ut <= 0)) { var et, at; const ut = (((et = u.flip) == null ? void 0 : et.index) || 0) + 1, lt = U[ut]; if (lt && (!(y === "alignment" ? M !== wn(lt) : !1) || W.every(L => wn(L.placement) === M ? L.overflows[0] > 0 : !0))) return { data: { index: ut, overflows: W }, reset: { placement: lt } }; let z = (at = W.filter(Q => Q.overflows[0] <= 0).sort((Q, L) => Q.overflows[1] - L.overflows[1])[0]) == null ? void 0 : at.placement; if (!z) switch (w) { case "bestFit": { var mt; const Q = (mt = W.filter(L => { if (K) { const nt = wn(L.placement); return nt === M || nt === "y" } return !0 }).map(L => [L.placement, L.overflows.filter(nt => nt > 0).reduce((nt, ht) => nt + ht, 0)]).sort((L, nt) => L[1] - nt[1])[0]) == null ? void 0 : mt[0]; Q && (z = Q); break } case "initialPlacement": z = h; break }if (l !== z) return { reset: { placement: z } } } return {} } } }; function W0(e, a) { return { top: e.top - a.height, right: e.right - a.width, bottom: e.bottom - a.height, left: e.left - a.width } } function I0(e) { return rO.some(a => e[a] >= 0) } const SO = function (e) { return e === void 0 && (e = {}), { name: "hide", options: e, async fn(a) { const { rects: s } = a, { strategy: o = "referenceHidden", ...l } = In(e, a); switch (o) { case "referenceHidden": { const u = await zo(a, { ...l, elementContext: "reference" }), f = W0(u, s.reference); return { data: { referenceHiddenOffsets: f, referenceHidden: I0(f) } } } case "escaped": { const u = await zo(a, { ...l, altBoundary: !0 }), f = W0(u, s.floating); return { data: { escapedOffsets: f, escaped: I0(f) } } } default: return {} } } } }, H1 = new Set(["left", "top"]); async function CO(e, a) { const { placement: s, platform: o, elements: l } = e, u = await (o.isRTL == null ? void 0 : o.isRTL(l.floating)), f = $n(s), h = bs(s), m = wn(s) === "y", p = H1.has(f) ? -1 : 1, g = u && m ? -1 : 1, y = In(a, e); let { mainAxis: b, crossAxis: w, alignmentAxis: T } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: y.mainAxis || 0, crossAxis: y.crossAxis || 0, alignmentAxis: y.alignmentAxis }; return h && typeof T == "number" && (w = h === "end" ? T * -1 : T), m ? { x: w * g, y: b * p } : { x: b * p, y: w * g } } const wO = function (e) { return e === void 0 && (e = 0), { name: "offset", options: e, async fn(a) { var s, o; const { x: l, y: u, placement: f, middlewareData: h } = a, m = await CO(a, e); return f === ((s = h.offset) == null ? void 0 : s.placement) && (o = h.arrow) != null && o.alignmentOffset ? {} : { x: l + m.x, y: u + m.y, data: { ...m, placement: f } } } } }, EO = function (e) { return e === void 0 && (e = {}), { name: "shift", options: e, async fn(a) { const { x: s, y: o, placement: l } = a, { mainAxis: u = !0, crossAxis: f = !1, limiter: h = { fn: A => { let { x: R, y: M } = A; return { x: R, y: M } } }, ...m } = In(e, a), p = { x: s, y: o }, g = await zo(a, m), y = wn($n(l)), b = qh(y); let w = p[b], T = p[y]; if (u) { const A = b === "y" ? "top" : "left", R = b === "y" ? "bottom" : "right", M = w + g[A], D = w - g[R]; w = Fd(M, w, D) } if (f) { const A = y === "y" ? "top" : "left", R = y === "y" ? "bottom" : "right", M = T + g[A], D = T - g[R]; T = Fd(M, T, D) } const C = h.fn({ ...a, [b]: w, [y]: T }); return { ...C, data: { x: C.x - s, y: C.y - o, enabled: { [b]: u, [y]: f } } } } } }, AO = function (e) { return e === void 0 && (e = {}), { options: e, fn(a) { const { x: s, y: o, placement: l, rects: u, middlewareData: f } = a, { offset: h = 0, mainAxis: m = !0, crossAxis: p = !0 } = In(e, a), g = { x: s, y: o }, y = wn(l), b = qh(y); let w = g[b], T = g[y]; const C = In(h, a), A = typeof C == "number" ? { mainAxis: C, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...C }; if (m) { const D = b === "y" ? "height" : "width", _ = u.reference[b] - u.floating[D] + A.mainAxis, q = u.reference[b] + u.reference[D] - A.mainAxis; w < _ ? w = _ : w > q && (w = q) } if (p) { var R, M; const D = b === "y" ? "width" : "height", _ = H1.has($n(l)), q = u.reference[y] - u.floating[D] + (_ && ((R = f.offset) == null ? void 0 : R[y]) || 0) + (_ ? 0 : A.crossAxis), K = u.reference[y] + u.reference[D] + (_ ? 0 : ((M = f.offset) == null ? void 0 : M[y]) || 0) - (_ ? A.crossAxis : 0); T < q ? T = q : T > K && (T = K) } return { [b]: w, [y]: T } } } }, TO = function (e) { return e === void 0 && (e = {}), { name: "size", options: e, async fn(a) { var s, o; const { placement: l, rects: u, platform: f, elements: h } = a, { apply: m = () => { }, ...p } = In(e, a), g = await zo(a, p), y = $n(l), b = bs(l), w = wn(l) === "y", { width: T, height: C } = u.floating; let A, R; y === "top" || y === "bottom" ? (A = y, R = b === (await (f.isRTL == null ? void 0 : f.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (R = y, A = b === "end" ? "top" : "bottom"); const M = C - g.top - g.bottom, D = T - g.left - g.right, _ = _a(C - g[A], M), q = _a(T - g[R], D), K = !a.middlewareData.shift; let U = _, H = q; if ((s = a.middlewareData.shift) != null && s.enabled.x && (H = D), (o = a.middlewareData.shift) != null && o.enabled.y && (U = M), K && !b) { const W = Ge(g.left, 0), et = Ge(g.right, 0), at = Ge(g.top, 0), mt = Ge(g.bottom, 0); w ? H = T - 2 * (W !== 0 || et !== 0 ? W + et : Ge(g.left, g.right)) : U = C - 2 * (at !== 0 || mt !== 0 ? at + mt : Ge(g.top, g.bottom)) } await m({ ...a, availableWidth: H, availableHeight: U }); const J = await f.getDimensions(h.floating); return T !== J.width || C !== J.height ? { reset: { rects: !0 } } : {} } } }; function dc() { return typeof window < "u" } function Ss(e) { return P1(e) ? (e.nodeName || "").toLowerCase() : "#document" } function Xe(e) { var a; return (e == null || (a = e.ownerDocument) == null ? void 0 : a.defaultView) || window } function Nn(e) { var a; return (a = (P1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : a.documentElement } function P1(e) { return dc() ? e instanceof Node || e instanceof Xe(e).Node : !1 } function mn(e) { return dc() ? e instanceof Element || e instanceof Xe(e).Element : !1 } function Mn(e) { return dc() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1 } function $0(e) { return !dc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot } const RO = new Set(["inline", "contents"]); function Yo(e) { const { overflow: a, overflowX: s, overflowY: o, display: l } = pn(e); return /auto|scroll|overlay|hidden|clip/.test(a + o + s) && !RO.has(l) } const MO = new Set(["table", "td", "th"]); function NO(e) { return MO.has(Ss(e)) } const DO = [":popover-open", ":modal"]; function hc(e) { return DO.some(a => { try { return e.matches(a) } catch { return !1 } }) } const OO = ["transform", "translate", "scale", "rotate", "perspective"], jO = ["transform", "translate", "scale", "rotate", "perspective", "filter"], _O = ["paint", "layout", "strict", "content"]; function Xh(e) { const a = Fh(), s = mn(e) ? pn(e) : e; return OO.some(o => s[o] ? s[o] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !a && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !a && (s.filter ? s.filter !== "none" : !1) || jO.some(o => (s.willChange || "").includes(o)) || _O.some(o => (s.contain || "").includes(o)) } function zO(e) { let a = za(e); for (; Mn(a) && !hs(a);) { if (Xh(a)) return a; if (hc(a)) return null; a = za(a) } return null } function Fh() { return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none") } const VO = new Set(["html", "body", "#document"]); function hs(e) { return VO.has(Ss(e)) } function pn(e) { return Xe(e).getComputedStyle(e) } function mc(e) { return mn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY } } function za(e) { if (Ss(e) === "html") return e; const a = e.assignedSlot || e.parentNode || $0(e) && e.host || Nn(e); return $0(a) ? a.host : a } function q1(e) { const a = za(e); return hs(a) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mn(a) && Yo(a) ? a : q1(a) } function Vo(e, a, s) { var o; a === void 0 && (a = []), s === void 0 && (s = !0); const l = q1(e), u = l === ((o = e.ownerDocument) == null ? void 0 : o.body), f = Xe(l); if (u) { const h = Zd(f); return a.concat(f, f.visualViewport || [], Yo(l) ? l : [], h && s ? Vo(h) : []) } return a.concat(l, Vo(l, [], s)) } function Zd(e) { return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null } function G1(e) { const a = pn(e); let s = parseFloat(a.width) || 0, o = parseFloat(a.height) || 0; const l = Mn(e), u = l ? e.offsetWidth : s, f = l ? e.offsetHeight : o, h = Wl(s) !== u || Wl(o) !== f; return h && (s = u, o = f), { width: s, height: o, $: h } } function Kh(e) { return mn(e) ? e : e.contextElement } function cs(e) { const a = Kh(e); if (!Mn(a)) return An(1); const s = a.getBoundingClientRect(), { width: o, height: l, $: u } = G1(a); let f = (u ? Wl(s.width) : s.width) / o, h = (u ? Wl(s.height) : s.height) / l; return (!f || !Number.isFinite(f)) && (f = 1), (!h || !Number.isFinite(h)) && (h = 1), { x: f, y: h } } const LO = An(0); function Y1(e) { const a = Xe(e); return !Fh() || !a.visualViewport ? LO : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop } } function kO(e, a, s) { return a === void 0 && (a = !1), !s || a && s !== Xe(e) ? !1 : a } function mi(e, a, s, o) { a === void 0 && (a = !1), s === void 0 && (s = !1); const l = e.getBoundingClientRect(), u = Kh(e); let f = An(1); a && (o ? mn(o) && (f = cs(o)) : f = cs(e)); const h = kO(u, s, o) ? Y1(u) : An(0); let m = (l.left + h.x) / f.x, p = (l.top + h.y) / f.y, g = l.width / f.x, y = l.height / f.y; if (u) { const b = Xe(u), w = o && mn(o) ? Xe(o) : o; let T = b, C = Zd(T); for (; C && o && w !== T;) { const A = cs(C), R = C.getBoundingClientRect(), M = pn(C), D = R.left + (C.clientLeft + parseFloat(M.paddingLeft)) * A.x, _ = R.top + (C.clientTop + parseFloat(M.paddingTop)) * A.y; m *= A.x, p *= A.y, g *= A.x, y *= A.y, m += D, p += _, T = Xe(C), C = Zd(T) } } return $l({ width: g, height: y, x: m, y: p }) } function pc(e, a) { const s = mc(e).scrollLeft; return a ? a.left + s : mi(Nn(e)).left + s } function X1(e, a) { const s = e.getBoundingClientRect(), o = s.left + a.scrollLeft - pc(e, s), l = s.top + a.scrollTop; return { x: o, y: l } } function BO(e) { let { elements: a, rect: s, offsetParent: o, strategy: l } = e; const u = l === "fixed", f = Nn(o), h = a ? hc(a.floating) : !1; if (o === f || h && u) return s; let m = { scrollLeft: 0, scrollTop: 0 }, p = An(1); const g = An(0), y = Mn(o); if ((y || !y && !u) && ((Ss(o) !== "body" || Yo(f)) && (m = mc(o)), Mn(o))) { const w = mi(o); p = cs(o), g.x = w.x + o.clientLeft, g.y = w.y + o.clientTop } const b = f && !y && !u ? X1(f, m) : An(0); return { width: s.width * p.x, height: s.height * p.y, x: s.x * p.x - m.scrollLeft * p.x + g.x + b.x, y: s.y * p.y - m.scrollTop * p.y + g.y + b.y } } function UO(e) { return Array.from(e.getClientRects()) } function HO(e) { const a = Nn(e), s = mc(e), o = e.ownerDocument.body, l = Ge(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Ge(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight); let f = -s.scrollLeft + pc(e); const h = -s.scrollTop; return pn(o).direction === "rtl" && (f += Ge(a.clientWidth, o.clientWidth) - l), { width: l, height: u, x: f, y: h } } const J0 = 25; function PO(e, a) { const s = Xe(e), o = Nn(e), l = s.visualViewport; let u = o.clientWidth, f = o.clientHeight, h = 0, m = 0; if (l) { u = l.width, f = l.height; const g = Fh(); (!g || g && a === "fixed") && (h = l.offsetLeft, m = l.offsetTop) } const p = pc(o); if (p <= 0) { const g = o.ownerDocument, y = g.body, b = getComputedStyle(y), w = g.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, T = Math.abs(o.clientWidth - y.clientWidth - w); T <= J0 && (u -= T) } else p <= J0 && (u += p); return { width: u, height: f, x: h, y: m } } const qO = new Set(["absolute", "fixed"]); function GO(e, a) { const s = mi(e, !0, a === "fixed"), o = s.top + e.clientTop, l = s.left + e.clientLeft, u = Mn(e) ? cs(e) : An(1), f = e.clientWidth * u.x, h = e.clientHeight * u.y, m = l * u.x, p = o * u.y; return { width: f, height: h, x: m, y: p } } function tx(e, a, s) { let o; if (a === "viewport") o = PO(e, s); else if (a === "document") o = HO(Nn(e)); else if (mn(a)) o = GO(a, s); else { const l = Y1(e); o = { x: a.x - l.x, y: a.y - l.y, width: a.width, height: a.height } } return $l(o) } function F1(e, a) { const s = za(e); return s === a || !mn(s) || hs(s) ? !1 : pn(s).position === "fixed" || F1(s, a) } function YO(e, a) { const s = a.get(e); if (s) return s; let o = Vo(e, [], !1).filter(h => mn(h) && Ss(h) !== "body"), l = null; const u = pn(e).position === "fixed"; let f = u ? za(e) : e; for (; mn(f) && !hs(f);) { const h = pn(f), m = Xh(f); !m && h.position === "fixed" && (l = null), (u ? !m && !l : !m && h.position === "static" && !!l && qO.has(l.position) || Yo(f) && !m && F1(e, f)) ? o = o.filter(g => g !== f) : l = h, f = za(f) } return a.set(e, o), o } function XO(e) { let { element: a, boundary: s, rootBoundary: o, strategy: l } = e; const f = [...s === "clippingAncestors" ? hc(a) ? [] : YO(a, this._c) : [].concat(s), o], h = f[0], m = f.reduce((p, g) => { const y = tx(a, g, l); return p.top = Ge(y.top, p.top), p.right = _a(y.right, p.right), p.bottom = _a(y.bottom, p.bottom), p.left = Ge(y.left, p.left), p }, tx(a, h, l)); return { width: m.right - m.left, height: m.bottom - m.top, x: m.left, y: m.top } } function FO(e) { const { width: a, height: s } = G1(e); return { width: a, height: s } } function KO(e, a, s) { const o = Mn(a), l = Nn(a), u = s === "fixed", f = mi(e, !0, u, a); let h = { scrollLeft: 0, scrollTop: 0 }; const m = An(0); function p() { m.x = pc(l) } if (o || !o && !u) if ((Ss(a) !== "body" || Yo(l)) && (h = mc(a)), o) { const w = mi(a, !0, u, a); m.x = w.x + a.clientLeft, m.y = w.y + a.clientTop } else l && p(); u && !o && l && p(); const g = l && !o && !u ? X1(l, h) : An(0), y = f.left + h.scrollLeft - m.x - g.x, b = f.top + h.scrollTop - m.y - g.y; return { x: y, y: b, width: f.width, height: f.height } } function dd(e) { return pn(e).position === "static" } function ex(e, a) { if (!Mn(e) || pn(e).position === "fixed") return null; if (a) return a(e); let s = e.offsetParent; return Nn(e) === s && (s = s.ownerDocument.body), s } function K1(e, a) { const s = Xe(e); if (hc(e)) return s; if (!Mn(e)) { let l = za(e); for (; l && !hs(l);) { if (mn(l) && !dd(l)) return l; l = za(l) } return s } let o = ex(e, a); for (; o && NO(o) && dd(o);)o = ex(o, a); return o && hs(o) && dd(o) && !Xh(o) ? s : o || zO(e) || s } const ZO = async function (e) { const a = this.getOffsetParent || K1, s = this.getDimensions, o = await s(e.floating); return { reference: KO(e.reference, await a(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } } }; function QO(e) { return pn(e).direction === "rtl" } const WO = { convertOffsetParentRelativeRectToViewportRelativeRect: BO, getDocumentElement: Nn, getClippingRect: XO, getOffsetParent: K1, getElementRects: ZO, getClientRects: UO, getDimensions: FO, getScale: cs, isElement: mn, isRTL: QO }; function Z1(e, a) { return e.x === a.x && e.y === a.y && e.width === a.width && e.height === a.height } function IO(e, a) { let s = null, o; const l = Nn(e); function u() { var h; clearTimeout(o), (h = s) == null || h.disconnect(), s = null } function f(h, m) { h === void 0 && (h = !1), m === void 0 && (m = 1), u(); const p = e.getBoundingClientRect(), { left: g, top: y, width: b, height: w } = p; if (h || a(), !b || !w) return; const T = gl(y), C = gl(l.clientWidth - (g + b)), A = gl(l.clientHeight - (y + w)), R = gl(g), D = { rootMargin: -T + "px " + -C + "px " + -A + "px " + -R + "px", threshold: Ge(0, _a(1, m)) || 1 }; let _ = !0; function q(K) { const U = K[0].intersectionRatio; if (U !== m) { if (!_) return f(); U ? f(!1, U) : o = setTimeout(() => { f(!1, 1e-7) }, 1e3) } U === 1 && !Z1(p, e.getBoundingClientRect()) && f(), _ = !1 } try { s = new IntersectionObserver(q, { ...D, root: l.ownerDocument }) } catch { s = new IntersectionObserver(q, D) } s.observe(e) } return f(!0), u } function $O(e, a, s, o) { o === void 0 && (o = {}); const { ancestorScroll: l = !0, ancestorResize: u = !0, elementResize: f = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: m = !1 } = o, p = Kh(e), g = l || u ? [...p ? Vo(p) : [], ...Vo(a)] : []; g.forEach(R => { l && R.addEventListener("scroll", s, { passive: !0 }), u && R.addEventListener("resize", s) }); const y = p && h ? IO(p, s) : null; let b = -1, w = null; f && (w = new ResizeObserver(R => { let [M] = R; M && M.target === p && w && (w.unobserve(a), cancelAnimationFrame(b), b = requestAnimationFrame(() => { var D; (D = w) == null || D.observe(a) })), s() }), p && !m && w.observe(p), w.observe(a)); let T, C = m ? mi(e) : null; m && A(); function A() { const R = mi(e); C && !Z1(C, R) && s(), C = R, T = requestAnimationFrame(A) } return s(), () => { var R; g.forEach(M => { l && M.removeEventListener("scroll", s), u && M.removeEventListener("resize", s) }), y?.(), (R = w) == null || R.disconnect(), w = null, m && cancelAnimationFrame(T) } } const JO = wO, t6 = EO, e6 = bO, n6 = TO, a6 = SO, nx = xO, i6 = AO, s6 = (e, a, s) => { const o = new Map, l = { platform: WO, ...s }, u = { ...l.platform, _c: o }; return vO(e, a, { ...l, platform: u }) }; var o6 = typeof document < "u", r6 = function () { }, zl = o6 ? x.useLayoutEffect : r6; function Jl(e, a) { if (e === a) return !0; if (typeof e != typeof a) return !1; if (typeof e == "function" && e.toString() === a.toString()) return !0; let s, o, l; if (e && a && typeof e == "object") { if (Array.isArray(e)) { if (s = e.length, s !== a.length) return !1; for (o = s; o-- !== 0;)if (!Jl(e[o], a[o])) return !1; return !0 } if (l = Object.keys(e), s = l.length, s !== Object.keys(a).length) return !1; for (o = s; o-- !== 0;)if (!{}.hasOwnProperty.call(a, l[o])) return !1; for (o = s; o-- !== 0;) { const u = l[o]; if (!(u === "_owner" && e.$$typeof) && !Jl(e[u], a[u])) return !1 } return !0 } return e !== e && a !== a } function Q1(e) { return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1 } function ax(e, a) { const s = Q1(e); return Math.round(a * s) / s } function hd(e) { const a = x.useRef(e); return zl(() => { a.current = e }), a } function l6(e) { e === void 0 && (e = {}); const { placement: a = "bottom", strategy: s = "absolute", middleware: o = [], platform: l, elements: { reference: u, floating: f } = {}, transform: h = !0, whileElementsMounted: m, open: p } = e, [g, y] = x.useState({ x: 0, y: 0, strategy: s, placement: a, middlewareData: {}, isPositioned: !1 }), [b, w] = x.useState(o); Jl(b, o) || w(o); const [T, C] = x.useState(null), [A, R] = x.useState(null), M = x.useCallback(L => { L !== K.current && (K.current = L, C(L)) }, []), D = x.useCallback(L => { L !== U.current && (U.current = L, R(L)) }, []), _ = u || T, q = f || A, K = x.useRef(null), U = x.useRef(null), H = x.useRef(g), J = m != null, W = hd(m), et = hd(l), at = hd(p), mt = x.useCallback(() => { if (!K.current || !U.current) return; const L = { placement: a, strategy: s, middleware: b }; et.current && (L.platform = et.current), s6(K.current, U.current, L).then(nt => { const ht = { ...nt, isPositioned: at.current !== !1 }; ut.current && !Jl(H.current, ht) && (H.current = ht, Go.flushSync(() => { y(ht) })) }) }, [b, a, s, et, at]); zl(() => { p === !1 && H.current.isPositioned && (H.current.isPositioned = !1, y(L => ({ ...L, isPositioned: !1 }))) }, [p]); const ut = x.useRef(!1); zl(() => (ut.current = !0, () => { ut.current = !1 }), []), zl(() => { if (_ && (K.current = _), q && (U.current = q), _ && q) { if (W.current) return W.current(_, q, mt); mt() } }, [_, q, mt, W, J]); const lt = x.useMemo(() => ({ reference: K, floating: U, setReference: M, setFloating: D }), [M, D]), z = x.useMemo(() => ({ reference: _, floating: q }), [_, q]), Q = x.useMemo(() => { const L = { position: s, left: 0, top: 0 }; if (!z.floating) return L; const nt = ax(z.floating, g.x), ht = ax(z.floating, g.y); return h ? { ...L, transform: "translate(" + nt + "px, " + ht + "px)", ...Q1(z.floating) >= 1.5 && { willChange: "transform" } } : { position: s, left: nt, top: ht } }, [s, h, z.floating, g.x, g.y]); return x.useMemo(() => ({ ...g, update: mt, refs: lt, elements: z, floatingStyles: Q }), [g, mt, lt, z, Q]) } const c6 = e => { function a(s) { return {}.hasOwnProperty.call(s, "current") } return { name: "arrow", options: e, fn(s) { const { element: o, padding: l } = typeof e == "function" ? e(s) : e; return o && a(o) ? o.current != null ? nx({ element: o.current, padding: l }).fn(s) : {} : o ? nx({ element: o, padding: l }).fn(s) : {} } } }, u6 = (e, a) => ({ ...JO(e), options: [e, a] }), f6 = (e, a) => ({ ...t6(e), options: [e, a] }), d6 = (e, a) => ({ ...i6(e), options: [e, a] }), h6 = (e, a) => ({ ...e6(e), options: [e, a] }), m6 = (e, a) => ({ ...n6(e), options: [e, a] }), p6 = (e, a) => ({ ...a6(e), options: [e, a] }), g6 = (e, a) => ({ ...c6(e), options: [e, a] }); var y6 = "Arrow", W1 = x.forwardRef((e, a) => { const { children: s, width: o = 10, height: l = 5, ...u } = e; return S.jsx(Wt.svg, { ...u, ref: a, width: o, height: l, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? s : S.jsx("polygon", { points: "0,0 30,0 15,10" }) }) }); W1.displayName = y6; var v6 = W1; function x6(e) { const [a, s] = x.useState(void 0); return je(() => { if (e) { s({ width: e.offsetWidth, height: e.offsetHeight }); const o = new ResizeObserver(l => { if (!Array.isArray(l) || !l.length) return; const u = l[0]; let f, h; if ("borderBoxSize" in u) { const m = u.borderBoxSize, p = Array.isArray(m) ? m[0] : m; f = p.inlineSize, h = p.blockSize } else f = e.offsetWidth, h = e.offsetHeight; s({ width: f, height: h }) }); return o.observe(e, { box: "border-box" }), () => o.unobserve(e) } else s(void 0) }, [e]), a } var Zh = "Popper", [I1, $1] = Hh(Zh), [b6, J1] = I1(Zh), tS = e => { const { __scopePopper: a, children: s } = e, [o, l] = x.useState(null); return S.jsx(b6, { scope: a, anchor: o, onAnchorChange: l, children: s }) }; tS.displayName = Zh; var eS = "PopperAnchor", nS = x.forwardRef((e, a) => { const { __scopePopper: s, virtualRef: o, ...l } = e, u = J1(eS, s), f = x.useRef(null), h = ve(a, f), m = x.useRef(null); return x.useEffect(() => { const p = m.current; m.current = o?.current || f.current, p !== m.current && u.onAnchorChange(m.current) }), o ? null : S.jsx(Wt.div, { ...l, ref: h }) }); nS.displayName = eS; var Qh = "PopperContent", [S6, C6] = I1(Qh), aS = x.forwardRef((e, a) => { const { __scopePopper: s, side: o = "bottom", sideOffset: l = 0, align: u = "center", alignOffset: f = 0, arrowPadding: h = 0, avoidCollisions: m = !0, collisionBoundary: p = [], collisionPadding: g = 0, sticky: y = "partial", hideWhenDetached: b = !1, updatePositionStrategy: w = "optimized", onPlaced: T, ...C } = e, A = J1(Qh, s), [R, M] = x.useState(null), D = ve(a, I => M(I)), [_, q] = x.useState(null), K = x6(_), U = K?.width ?? 0, H = K?.height ?? 0, J = o + (u !== "center" ? "-" + u : ""), W = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, et = Array.isArray(p) ? p : [p], at = et.length > 0, mt = { padding: W, boundary: et.filter(E6), altBoundary: at }, { refs: ut, floatingStyles: lt, placement: z, isPositioned: Q, middlewareData: L } = l6({ strategy: "fixed", placement: J, whileElementsMounted: (...I) => $O(...I, { animationFrame: w === "always" }), elements: { reference: A.anchor }, middleware: [u6({ mainAxis: l + H, alignmentAxis: f }), m && f6({ mainAxis: !0, crossAxis: !1, limiter: y === "partial" ? d6() : void 0, ...mt }), m && h6({ ...mt }), m6({ ...mt, apply: ({ elements: I, rects: bt, availableWidth: vt, availableHeight: At }) => { const { width: Nt, height: _t } = bt.reference, be = I.floating.style; be.setProperty("--radix-popper-available-width", `${vt}px`), be.setProperty("--radix-popper-available-height", `${At}px`), be.setProperty("--radix-popper-anchor-width", `${Nt}px`), be.setProperty("--radix-popper-anchor-height", `${_t}px`) } }), _ && g6({ element: _, padding: h }), A6({ arrowWidth: U, arrowHeight: H }), b && p6({ strategy: "referenceHidden", ...mt })] }), [nt, ht] = oS(z), O = hi(T); je(() => { Q && O?.() }, [Q, O]); const X = L.arrow?.x, $ = L.arrow?.y, tt = L.arrow?.centerOffset !== 0, [dt, gt] = x.useState(); return je(() => { R && gt(window.getComputedStyle(R).zIndex) }, [R]), S.jsx("div", { ref: ut.setFloating, "data-radix-popper-content-wrapper": "", style: { ...lt, transform: Q ? lt.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: dt, "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "), ...L.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: S.jsx(S6, { scope: s, placedSide: nt, onArrowChange: q, arrowX: X, arrowY: $, shouldHideArrow: tt, children: S.jsx(Wt.div, { "data-side": nt, "data-align": ht, ...C, ref: D, style: { ...C.style, animation: Q ? void 0 : "none" } }) }) }) }); aS.displayName = Qh; var iS = "PopperArrow", w6 = { top: "bottom", right: "left", bottom: "top", left: "right" }, sS = x.forwardRef(function (a, s) { const { __scopePopper: o, ...l } = a, u = C6(iS, o), f = w6[u.placedSide]; return S.jsx("span", { ref: u.onArrowChange, style: { position: "absolute", left: u.arrowX, top: u.arrowY, [f]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[u.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[u.placedSide], visibility: u.shouldHideArrow ? "hidden" : void 0 }, children: S.jsx(v6, { ...l, ref: s, style: { ...l.style, display: "block" } }) }) }); sS.displayName = iS; function E6(e) { return e !== null } var A6 = e => ({ name: "transformOrigin", options: e, fn(a) { const { placement: s, rects: o, middlewareData: l } = a, f = l.arrow?.centerOffset !== 0, h = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [p, g] = oS(s), y = { start: "0%", center: "50%", end: "100%" }[g], b = (l.arrow?.x ?? 0) + h / 2, w = (l.arrow?.y ?? 0) + m / 2; let T = "", C = ""; return p === "bottom" ? (T = f ? y : `${b}px`, C = `${-m}px`) : p === "top" ? (T = f ? y : `${b}px`, C = `${o.floating.height + m}px`) : p === "right" ? (T = `${-m}px`, C = f ? y : `${w}px`) : p === "left" && (T = `${o.floating.width + m}px`, C = f ? y : `${w}px`), { data: { x: T, y: C } } } }); function oS(e) { const [a, s = "center"] = e.split("-"); return [a, s] } var T6 = tS, R6 = nS, M6 = aS, N6 = sS, D6 = "Portal", rS = x.forwardRef((e, a) => { const { container: s, ...o } = e, [l, u] = x.useState(!1); je(() => u(!0), []); const f = s || l && globalThis?.document?.body; return f ? AD.createPortal(S.jsx(Wt.div, { ...o, ref: a }), f) : null }); rS.displayName = D6; function O6(e) { const a = j6(e), s = x.forwardRef((o, l) => { const { children: u, ...f } = o, h = x.Children.toArray(u), m = h.find(z6); if (m) { const p = m.props.children, g = h.map(y => y === m ? x.Children.count(p) > 1 ? x.Children.only(null) : x.isValidElement(p) ? p.props.children : null : y); return S.jsx(a, { ...f, ref: l, children: x.isValidElement(p) ? x.cloneElement(p, void 0, g) : null }) } return S.jsx(a, { ...f, ref: l, children: u }) }); return s.displayName = `${e}.Slot`, s } function j6(e) { const a = x.forwardRef((s, o) => { const { children: l, ...u } = s; if (x.isValidElement(l)) { const f = L6(l), h = V6(u, l.props); return l.type !== x.Fragment && (h.ref = o ? fc(o, f) : f), x.cloneElement(l, h) } return x.Children.count(l) > 1 ? x.Children.only(null) : null }); return a.displayName = `${e}.SlotClone`, a } var _6 = Symbol("radix.slottable"); function z6(e) { return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _6 } function V6(e, a) { const s = { ...a }; for (const o in a) { const l = e[o], u = a[o]; /^on[A-Z]/.test(o) ? l && u ? s[o] = (...h) => { const m = u(...h); return l(...h), m } : l && (s[o] = l) : o === "style" ? s[o] = { ...l, ...u } : o === "className" && (s[o] = [l, u].filter(Boolean).join(" ")) } return { ...e, ...s } } function L6(e) { let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning; return s ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = a && "isReactWarning" in a && a.isReactWarning, s ? e.props.ref : e.props.ref || e.ref) } var k6 = fx[" useInsertionEffect ".trim().toString()] || je; function ix({ prop: e, defaultProp: a, onChange: s = () => { }, caller: o }) { const [l, u, f] = B6({ defaultProp: a, onChange: s }), h = e !== void 0, m = h ? e : l; { const g = x.useRef(e !== void 0); x.useEffect(() => { const y = g.current; y !== h && console.warn(`${o} is changing from ${y ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), g.current = h }, [h, o]) } const p = x.useCallback(g => { if (h) { const y = U6(g) ? g(e) : g; y !== e && f.current?.(y) } else u(g) }, [h, e, u, f]); return [m, p] } function B6({ defaultProp: e, onChange: a }) { const [s, o] = x.useState(e), l = x.useRef(s), u = x.useRef(a); return k6(() => { u.current = a }, [a]), x.useEffect(() => { l.current !== s && (u.current?.(s), l.current = s) }, [s, l]), [s, o, u] } function U6(e) { return typeof e == "function" } function H6(e) { const a = x.useRef({ value: e, previous: e }); return x.useMemo(() => (a.current.value !== e && (a.current.previous = a.current.value, a.current.value = e), a.current.previous), [e]) } var lS = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), P6 = "VisuallyHidden", q6 = x.forwardRef((e, a) => S.jsx(Wt.span, { ...e, ref: a, style: { ...lS, ...e.style } })); q6.displayName = P6; var G6 = function (e) { if (typeof document > "u") return null; var a = Array.isArray(e) ? e[0] : e; return a.ownerDocument.body }, ns = new WeakMap, yl = new WeakMap, vl = {}, md = 0, cS = function (e) { return e && (e.host || cS(e.parentNode)) }, Y6 = function (e, a) { return a.map(function (s) { if (e.contains(s)) return s; var o = cS(s); return o && e.contains(o) ? o : (console.error("aria-hidden", s, "in not contained inside", e, ". Doing nothing"), null) }).filter(function (s) { return !!s }) }, X6 = function (e, a, s, o) { var l = Y6(a, Array.isArray(e) ? e : [e]); vl[s] || (vl[s] = new WeakMap); var u = vl[s], f = [], h = new Set, m = new Set(l), p = function (y) { !y || h.has(y) || (h.add(y), p(y.parentNode)) }; l.forEach(p); var g = function (y) { !y || m.has(y) || Array.prototype.forEach.call(y.children, function (b) { if (h.has(b)) g(b); else try { var w = b.getAttribute(o), T = w !== null && w !== "false", C = (ns.get(b) || 0) + 1, A = (u.get(b) || 0) + 1; ns.set(b, C), u.set(b, A), f.push(b), C === 1 && T && yl.set(b, !0), A === 1 && b.setAttribute(s, "true"), T || b.setAttribute(o, "true") } catch (R) { console.error("aria-hidden: cannot operate on ", b, R) } }) }; return g(a), h.clear(), md++, function () { f.forEach(function (y) { var b = ns.get(y) - 1, w = u.get(y) - 1; ns.set(y, b), u.set(y, w), b || (yl.has(y) || y.removeAttribute(o), yl.delete(y)), w || y.removeAttribute(s) }), md--, md || (ns = new WeakMap, ns = new WeakMap, yl = new WeakMap, vl = {}) } }, F6 = function (e, a, s) { s === void 0 && (s = "data-aria-hidden"); var o = Array.from(Array.isArray(e) ? e : [e]), l = G6(e); return l ? (o.push.apply(o, Array.from(l.querySelectorAll("[aria-live], script"))), X6(o, l, s, "aria-hidden")) : function () { return null } }, Cn = function () { return Cn = Object.assign || function (a) { for (var s, o = 1, l = arguments.length; o < l; o++) { s = arguments[o]; for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (a[u] = s[u]) } return a }, Cn.apply(this, arguments) }; function uS(e, a) { var s = {}; for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && a.indexOf(o) < 0 && (s[o] = e[o]); if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)a.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[l]) && (s[o[l]] = e[o[l]]); return s } function K6(e, a, s) { if (s || arguments.length === 2) for (var o = 0, l = a.length, u; o < l; o++)(u || !(o in a)) && (u || (u = Array.prototype.slice.call(a, 0, o)), u[o] = a[o]); return e.concat(u || Array.prototype.slice.call(a)) } var Vl = "right-scroll-bar-position", Ll = "width-before-scroll-bar", Z6 = "with-scroll-bars-hidden", Q6 = "--removed-body-scroll-bar-size"; function pd(e, a) { return typeof e == "function" ? e(a) : e && (e.current = a), e } function W6(e, a) { var s = x.useState(function () { return { value: e, callback: a, facade: { get current() { return s.value }, set current(o) { var l = s.value; l !== o && (s.value = o, s.callback(o, l)) } } } })[0]; return s.callback = a, s.facade } var I6 = typeof window < "u" ? x.useLayoutEffect : x.useEffect, sx = new WeakMap; function $6(e, a) { var s = W6(null, function (o) { return e.forEach(function (l) { return pd(l, o) }) }); return I6(function () { var o = sx.get(s); if (o) { var l = new Set(o), u = new Set(e), f = s.current; l.forEach(function (h) { u.has(h) || pd(h, null) }), u.forEach(function (h) { l.has(h) || pd(h, f) }) } sx.set(s, e) }, [e]), s } function J6(e) { return e } function t4(e, a) { a === void 0 && (a = J6); var s = [], o = !1, l = { read: function () { if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return s.length ? s[s.length - 1] : e }, useMedium: function (u) { var f = a(u, o); return s.push(f), function () { s = s.filter(function (h) { return h !== f }) } }, assignSyncMedium: function (u) { for (o = !0; s.length;) { var f = s; s = [], f.forEach(u) } s = { push: function (h) { return u(h) }, filter: function () { return s } } }, assignMedium: function (u) { o = !0; var f = []; if (s.length) { var h = s; s = [], h.forEach(u), f = s } var m = function () { var g = f; f = [], g.forEach(u) }, p = function () { return Promise.resolve().then(m) }; p(), s = { push: function (g) { f.push(g), p() }, filter: function (g) { return f = f.filter(g), s } } } }; return l } function e4(e) { e === void 0 && (e = {}); var a = t4(null); return a.options = Cn({ async: !0, ssr: !1 }, e), a } var fS = function (e) { var a = e.sideCar, s = uS(e, ["sideCar"]); if (!a) throw new Error("Sidecar: please provide `sideCar` property to import the right car"); var o = a.read(); if (!o) throw new Error("Sidecar medium not found"); return x.createElement(o, Cn({}, s)) }; fS.isSideCarExport = !0; function n4(e, a) { return e.useMedium(a), fS } var dS = e4(), gd = function () { }, gc = x.forwardRef(function (e, a) { var s = x.useRef(null), o = x.useState({ onScrollCapture: gd, onWheelCapture: gd, onTouchMoveCapture: gd }), l = o[0], u = o[1], f = e.forwardProps, h = e.children, m = e.className, p = e.removeScrollBar, g = e.enabled, y = e.shards, b = e.sideCar, w = e.noRelative, T = e.noIsolation, C = e.inert, A = e.allowPinchZoom, R = e.as, M = R === void 0 ? "div" : R, D = e.gapMode, _ = uS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), q = b, K = $6([s, a]), U = Cn(Cn({}, _), l); return x.createElement(x.Fragment, null, g && x.createElement(q, { sideCar: dS, removeScrollBar: p, shards: y, noRelative: w, noIsolation: T, inert: C, setCallbacks: u, allowPinchZoom: !!A, lockRef: s, gapMode: D }), f ? x.cloneElement(x.Children.only(h), Cn(Cn({}, U), { ref: K })) : x.createElement(M, Cn({}, U, { className: m, ref: K }), h)) }); gc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }; gc.classNames = { fullWidth: Ll, zeroRight: Vl }; var a4 = function () { if (typeof __webpack_nonce__ < "u") return __webpack_nonce__ }; function i4() { if (!document) return null; var e = document.createElement("style"); e.type = "text/css"; var a = a4(); return a && e.setAttribute("nonce", a), e } function s4(e, a) { e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a)) } function o4(e) { var a = document.head || document.getElementsByTagName("head")[0]; a.appendChild(e) } var r4 = function () { var e = 0, a = null; return { add: function (s) { e == 0 && (a = i4()) && (s4(a, s), o4(a)), e++ }, remove: function () { e--, !e && a && (a.parentNode && a.parentNode.removeChild(a), a = null) } } }, l4 = function () { var e = r4(); return function (a, s) { x.useEffect(function () { return e.add(a), function () { e.remove() } }, [a && s]) } }, hS = function () { var e = l4(), a = function (s) { var o = s.styles, l = s.dynamic; return e(o, l), null }; return a }, c4 = { left: 0, top: 0, right: 0, gap: 0 }, yd = function (e) { return parseInt(e || "", 10) || 0 }, u4 = function (e) { var a = window.getComputedStyle(document.body), s = a[e === "padding" ? "paddingLeft" : "marginLeft"], o = a[e === "padding" ? "paddingTop" : "marginTop"], l = a[e === "padding" ? "paddingRight" : "marginRight"]; return [yd(s), yd(o), yd(l)] }, f4 = function (e) { if (e === void 0 && (e = "margin"), typeof window > "u") return c4; var a = u4(e), s = document.documentElement.clientWidth, o = window.innerWidth; return { left: a[0], top: a[1], right: a[2], gap: Math.max(0, o - s + a[2] - a[0]) } }, d4 = hS(), us = "data-scroll-locked", h4 = function (e, a, s, o) {
  var l = e.left, u = e.top, f = e.right, h = e.gap; return s === void 0 && (s = "margin"), `
  .`.concat(Z6, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(h, "px ").concat(o, `;
  }
  body[`).concat(us, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([a && "position: relative ".concat(o, ";"), s === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(o, `;
    `), s === "padding" && "padding-right: ".concat(h, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Vl, ` {
    right: `).concat(h, "px ").concat(o, `;
  }
  
  .`).concat(Ll, ` {
    margin-right: `).concat(h, "px ").concat(o, `;
  }
  
  .`).concat(Vl, " .").concat(Vl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ll, " .").concat(Ll, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(us, `] {
    `).concat(Q6, ": ").concat(h, `px;
  }
`)
}, ox = function () { var e = parseInt(document.body.getAttribute(us) || "0", 10); return isFinite(e) ? e : 0 }, m4 = function () { x.useEffect(function () { return document.body.setAttribute(us, (ox() + 1).toString()), function () { var e = ox() - 1; e <= 0 ? document.body.removeAttribute(us) : document.body.setAttribute(us, e.toString()) } }, []) }, p4 = function (e) { var a = e.noRelative, s = e.noImportant, o = e.gapMode, l = o === void 0 ? "margin" : o; m4(); var u = x.useMemo(function () { return f4(l) }, [l]); return x.createElement(d4, { styles: h4(u, !a, l, s ? "" : "!important") }) }, Qd = !1; if (typeof window < "u") try { var xl = Object.defineProperty({}, "passive", { get: function () { return Qd = !0, !0 } }); window.addEventListener("test", xl, xl), window.removeEventListener("test", xl, xl) } catch { Qd = !1 } var as = Qd ? { passive: !1 } : !1, g4 = function (e) { return e.tagName === "TEXTAREA" }, mS = function (e, a) { if (!(e instanceof Element)) return !1; var s = window.getComputedStyle(e); return s[a] !== "hidden" && !(s.overflowY === s.overflowX && !g4(e) && s[a] === "visible") }, y4 = function (e) { return mS(e, "overflowY") }, v4 = function (e) { return mS(e, "overflowX") }, rx = function (e, a) { var s = a.ownerDocument, o = a; do { typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host); var l = pS(e, o); if (l) { var u = gS(e, o), f = u[1], h = u[2]; if (f > h) return !0 } o = o.parentNode } while (o && o !== s.body); return !1 }, x4 = function (e) { var a = e.scrollTop, s = e.scrollHeight, o = e.clientHeight; return [a, s, o] }, b4 = function (e) { var a = e.scrollLeft, s = e.scrollWidth, o = e.clientWidth; return [a, s, o] }, pS = function (e, a) { return e === "v" ? y4(a) : v4(a) }, gS = function (e, a) { return e === "v" ? x4(a) : b4(a) }, S4 = function (e, a) { return e === "h" && a === "rtl" ? -1 : 1 }, C4 = function (e, a, s, o, l) { var u = S4(e, window.getComputedStyle(a).direction), f = u * o, h = s.target, m = a.contains(h), p = !1, g = f > 0, y = 0, b = 0; do { if (!h) break; var w = gS(e, h), T = w[0], C = w[1], A = w[2], R = C - A - u * T; (T || R) && pS(e, h) && (y += R, b += T); var M = h.parentNode; h = M && M.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? M.host : M } while (!m && h !== document.body || m && (a.contains(h) || a === h)); return (g && Math.abs(y) < 1 || !g && Math.abs(b) < 1) && (p = !0), p }, bl = function (e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0] }, lx = function (e) { return [e.deltaX, e.deltaY] }, cx = function (e) { return e && "current" in e ? e.current : e }, w4 = function (e, a) { return e[0] === a[0] && e[1] === a[1] }, E4 = function (e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}, A4 = 0, is = []; function T4(e) { var a = x.useRef([]), s = x.useRef([0, 0]), o = x.useRef(), l = x.useState(A4++)[0], u = x.useState(hS)[0], f = x.useRef(e); x.useEffect(function () { f.current = e }, [e]), x.useEffect(function () { if (e.inert) { document.body.classList.add("block-interactivity-".concat(l)); var C = K6([e.lockRef.current], (e.shards || []).map(cx), !0).filter(Boolean); return C.forEach(function (A) { return A.classList.add("allow-interactivity-".concat(l)) }), function () { document.body.classList.remove("block-interactivity-".concat(l)), C.forEach(function (A) { return A.classList.remove("allow-interactivity-".concat(l)) }) } } }, [e.inert, e.lockRef.current, e.shards]); var h = x.useCallback(function (C, A) { if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey) return !f.current.allowPinchZoom; var R = bl(C), M = s.current, D = "deltaX" in C ? C.deltaX : M[0] - R[0], _ = "deltaY" in C ? C.deltaY : M[1] - R[1], q, K = C.target, U = Math.abs(D) > Math.abs(_) ? "h" : "v"; if ("touches" in C && U === "h" && K.type === "range") return !1; var H = window.getSelection(), J = H && H.anchorNode, W = J ? J === K || J.contains(K) : !1; if (W) return !1; var et = rx(U, K); if (!et) return !0; if (et ? q = U : (q = U === "v" ? "h" : "v", et = rx(U, K)), !et) return !1; if (!o.current && "changedTouches" in C && (D || _) && (o.current = q), !q) return !0; var at = o.current || q; return C4(at, A, C, at === "h" ? D : _) }, []), m = x.useCallback(function (C) { var A = C; if (!(!is.length || is[is.length - 1] !== u)) { var R = "deltaY" in A ? lx(A) : bl(A), M = a.current.filter(function (q) { return q.name === A.type && (q.target === A.target || A.target === q.shadowParent) && w4(q.delta, R) })[0]; if (M && M.should) { A.cancelable && A.preventDefault(); return } if (!M) { var D = (f.current.shards || []).map(cx).filter(Boolean).filter(function (q) { return q.contains(A.target) }), _ = D.length > 0 ? h(A, D[0]) : !f.current.noIsolation; _ && A.cancelable && A.preventDefault() } } }, []), p = x.useCallback(function (C, A, R, M) { var D = { name: C, delta: A, target: R, should: M, shadowParent: R4(R) }; a.current.push(D), setTimeout(function () { a.current = a.current.filter(function (_) { return _ !== D }) }, 1) }, []), g = x.useCallback(function (C) { s.current = bl(C), o.current = void 0 }, []), y = x.useCallback(function (C) { p(C.type, lx(C), C.target, h(C, e.lockRef.current)) }, []), b = x.useCallback(function (C) { p(C.type, bl(C), C.target, h(C, e.lockRef.current)) }, []); x.useEffect(function () { return is.push(u), e.setCallbacks({ onScrollCapture: y, onWheelCapture: y, onTouchMoveCapture: b }), document.addEventListener("wheel", m, as), document.addEventListener("touchmove", m, as), document.addEventListener("touchstart", g, as), function () { is = is.filter(function (C) { return C !== u }), document.removeEventListener("wheel", m, as), document.removeEventListener("touchmove", m, as), document.removeEventListener("touchstart", g, as) } }, []); var w = e.removeScrollBar, T = e.inert; return x.createElement(x.Fragment, null, T ? x.createElement(u, { styles: E4(l) }) : null, w ? x.createElement(p4, { noRelative: e.noRelative, gapMode: e.gapMode }) : null) } function R4(e) { for (var a = null; e !== null;)e instanceof ShadowRoot && (a = e.host, e = e.host), e = e.parentNode; return a } const M4 = n4(dS, T4); var yS = x.forwardRef(function (e, a) { return x.createElement(gc, Cn({}, e, { ref: a, sideCar: M4 })) }); yS.classNames = gc.classNames; var N4 = [" ", "Enter", "ArrowUp", "ArrowDown"], D4 = [" ", "Enter"], pi = "Select", [yc, vc, O4] = jD(pi), [Cs] = Hh(pi, [O4, $1]), xc = $1(), [j4, La] = Cs(pi), [_4, z4] = Cs(pi), vS = e => { const { __scopeSelect: a, children: s, open: o, defaultOpen: l, onOpenChange: u, value: f, defaultValue: h, onValueChange: m, dir: p, name: g, autoComplete: y, disabled: b, required: w, form: T } = e, C = xc(a), [A, R] = x.useState(null), [M, D] = x.useState(null), [_, q] = x.useState(!1), K = zD(p), [U, H] = ix({ prop: o, defaultProp: l ?? !1, onChange: u, caller: pi }), [J, W] = ix({ prop: f, defaultProp: h, onChange: m, caller: pi }), et = x.useRef(null), at = A ? T || !!A.closest("form") : !0, [mt, ut] = x.useState(new Set), lt = Array.from(mt).map(z => z.props.value).join(";"); return S.jsx(T6, { ...C, children: S.jsxs(j4, { required: w, scope: a, trigger: A, onTriggerChange: R, valueNode: M, onValueNodeChange: D, valueNodeHasChildren: _, onValueNodeHasChildrenChange: q, contentId: Ph(), value: J, onValueChange: W, open: U, onOpenChange: H, dir: K, triggerPointerDownPosRef: et, disabled: b, children: [S.jsx(yc.Provider, { scope: a, children: S.jsx(_4, { scope: e.__scopeSelect, onNativeOptionAdd: x.useCallback(z => { ut(Q => new Set(Q).add(z)) }, []), onNativeOptionRemove: x.useCallback(z => { ut(Q => { const L = new Set(Q); return L.delete(z), L }) }, []), children: s }) }), at ? S.jsxs(HS, { "aria-hidden": !0, required: w, tabIndex: -1, name: g, autoComplete: y, value: J, onChange: z => W(z.target.value), disabled: b, form: T, children: [J === void 0 ? S.jsx("option", { value: "" }) : null, Array.from(mt)] }, lt) : null] }) }) }; vS.displayName = pi; var xS = "SelectTrigger", bS = x.forwardRef((e, a) => { const { __scopeSelect: s, disabled: o = !1, ...l } = e, u = xc(s), f = La(xS, s), h = f.disabled || o, m = ve(a, f.onTriggerChange), p = vc(s), g = x.useRef("touch"), [y, b, w] = qS(C => { const A = p().filter(D => !D.disabled), R = A.find(D => D.value === f.value), M = GS(A, C, R); M !== void 0 && f.onValueChange(M.value) }), T = C => { h || (f.onOpenChange(!0), w()), C && (f.triggerPointerDownPosRef.current = { x: Math.round(C.pageX), y: Math.round(C.pageY) }) }; return S.jsx(R6, { asChild: !0, ...u, children: S.jsx(Wt.button, { type: "button", role: "combobox", "aria-controls": f.contentId, "aria-expanded": f.open, "aria-required": f.required, "aria-autocomplete": "none", dir: f.dir, "data-state": f.open ? "open" : "closed", disabled: h, "data-disabled": h ? "" : void 0, "data-placeholder": PS(f.value) ? "" : void 0, ...l, ref: m, onClick: ne(l.onClick, C => { C.currentTarget.focus(), g.current !== "mouse" && T(C) }), onPointerDown: ne(l.onPointerDown, C => { g.current = C.pointerType; const A = C.target; A.hasPointerCapture(C.pointerId) && A.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (T(C), C.preventDefault()) }), onKeyDown: ne(l.onKeyDown, C => { const A = y.current !== ""; !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && b(C.key), !(A && C.key === " ") && N4.includes(C.key) && (T(), C.preventDefault()) }) }) }) }); bS.displayName = xS; var SS = "SelectValue", CS = x.forwardRef((e, a) => { const { __scopeSelect: s, className: o, style: l, children: u, placeholder: f = "", ...h } = e, m = La(SS, s), { onValueNodeHasChildrenChange: p } = m, g = u !== void 0, y = ve(a, m.onValueNodeChange); return je(() => { p(g) }, [p, g]), S.jsx(Wt.span, { ...h, ref: y, style: { pointerEvents: "none" }, children: PS(m.value) ? S.jsx(S.Fragment, { children: f }) : u }) }); CS.displayName = SS; var V4 = "SelectIcon", wS = x.forwardRef((e, a) => { const { __scopeSelect: s, children: o, ...l } = e; return S.jsx(Wt.span, { "aria-hidden": !0, ...l, ref: a, children: o || "▼" }) }); wS.displayName = V4; var L4 = "SelectPortal", ES = e => S.jsx(rS, { asChild: !0, ...e }); ES.displayName = L4; var gi = "SelectContent", AS = x.forwardRef((e, a) => { const s = La(gi, e.__scopeSelect), [o, l] = x.useState(); if (je(() => { l(new DocumentFragment) }, []), !s.open) { const u = o; return u ? Go.createPortal(S.jsx(TS, { scope: e.__scopeSelect, children: S.jsx(yc.Slot, { scope: e.__scopeSelect, children: S.jsx("div", { children: e.children }) }) }), u) : null } return S.jsx(RS, { ...e, ref: a }) }); AS.displayName = gi; var fn = 10, [TS, ka] = Cs(gi), k4 = "SelectContentImpl", B4 = O6("SelectContent.RemoveScroll"), RS = x.forwardRef((e, a) => { const { __scopeSelect: s, position: o = "item-aligned", onCloseAutoFocus: l, onEscapeKeyDown: u, onPointerDownOutside: f, side: h, sideOffset: m, align: p, alignOffset: g, arrowPadding: y, collisionBoundary: b, collisionPadding: w, sticky: T, hideWhenDetached: C, avoidCollisions: A, ...R } = e, M = La(gi, s), [D, _] = x.useState(null), [q, K] = x.useState(null), U = ve(a, I => _(I)), [H, J] = x.useState(null), [W, et] = x.useState(null), at = vc(s), [mt, ut] = x.useState(!1), lt = x.useRef(!1); x.useEffect(() => { if (D) return F6(D) }, [D]), ID(); const z = x.useCallback(I => { const [bt, ...vt] = at().map(_t => _t.ref.current), [At] = vt.slice(-1), Nt = document.activeElement; for (const _t of I) if (_t === Nt || (_t?.scrollIntoView({ block: "nearest" }), _t === bt && q && (q.scrollTop = 0), _t === At && q && (q.scrollTop = q.scrollHeight), _t?.focus(), document.activeElement !== Nt)) return }, [at, q]), Q = x.useCallback(() => z([H, D]), [z, H, D]); x.useEffect(() => { mt && Q() }, [mt, Q]); const { onOpenChange: L, triggerPointerDownPosRef: nt } = M; x.useEffect(() => { if (D) { let I = { x: 0, y: 0 }; const bt = At => { I = { x: Math.abs(Math.round(At.pageX) - (nt.current?.x ?? 0)), y: Math.abs(Math.round(At.pageY) - (nt.current?.y ?? 0)) } }, vt = At => { I.x <= 10 && I.y <= 10 ? At.preventDefault() : D.contains(At.target) || L(!1), document.removeEventListener("pointermove", bt), nt.current = null }; return nt.current !== null && (document.addEventListener("pointermove", bt), document.addEventListener("pointerup", vt, { capture: !0, once: !0 })), () => { document.removeEventListener("pointermove", bt), document.removeEventListener("pointerup", vt, { capture: !0 }) } } }, [D, L, nt]), x.useEffect(() => { const I = () => L(!1); return window.addEventListener("blur", I), window.addEventListener("resize", I), () => { window.removeEventListener("blur", I), window.removeEventListener("resize", I) } }, [L]); const [ht, O] = qS(I => { const bt = at().filter(Nt => !Nt.disabled), vt = bt.find(Nt => Nt.ref.current === document.activeElement), At = GS(bt, I, vt); At && setTimeout(() => At.ref.current.focus()) }), X = x.useCallback((I, bt, vt) => { const At = !lt.current && !vt; (M.value !== void 0 && M.value === bt || At) && (J(I), At && (lt.current = !0)) }, [M.value]), $ = x.useCallback(() => D?.focus(), [D]), tt = x.useCallback((I, bt, vt) => { const At = !lt.current && !vt; (M.value !== void 0 && M.value === bt || At) && et(I) }, [M.value]), dt = o === "popper" ? Wd : MS, gt = dt === Wd ? { side: h, sideOffset: m, align: p, alignOffset: g, arrowPadding: y, collisionBoundary: b, collisionPadding: w, sticky: T, hideWhenDetached: C, avoidCollisions: A } : {}; return S.jsx(TS, { scope: s, content: D, viewport: q, onViewportChange: K, itemRefCallback: X, selectedItem: H, onItemLeave: $, itemTextRefCallback: tt, focusSelectedItem: Q, selectedItemText: W, position: o, isPositioned: mt, searchRef: ht, children: S.jsx(yS, { as: B4, allowPinchZoom: !0, children: S.jsx(k1, { asChild: !0, trapped: M.open, onMountAutoFocus: I => { I.preventDefault() }, onUnmountAutoFocus: ne(l, I => { M.trigger?.focus({ preventScroll: !0 }), I.preventDefault() }), children: S.jsx(V1, { asChild: !0, disableOutsidePointerEvents: !0, onEscapeKeyDown: u, onPointerDownOutside: f, onFocusOutside: I => I.preventDefault(), onDismiss: () => M.onOpenChange(!1), children: S.jsx(dt, { role: "listbox", id: M.contentId, "data-state": M.open ? "open" : "closed", dir: M.dir, onContextMenu: I => I.preventDefault(), ...R, ...gt, onPlaced: () => ut(!0), ref: U, style: { display: "flex", flexDirection: "column", outline: "none", ...R.style }, onKeyDown: ne(R.onKeyDown, I => { const bt = I.ctrlKey || I.altKey || I.metaKey; if (I.key === "Tab" && I.preventDefault(), !bt && I.key.length === 1 && O(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) { let At = at().filter(Nt => !Nt.disabled).map(Nt => Nt.ref.current); if (["ArrowUp", "End"].includes(I.key) && (At = At.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) { const Nt = I.target, _t = At.indexOf(Nt); At = At.slice(_t + 1) } setTimeout(() => z(At)), I.preventDefault() } }) }) }) }) }) }) }); RS.displayName = k4; var U4 = "SelectItemAlignedPosition", MS = x.forwardRef((e, a) => { const { __scopeSelect: s, onPlaced: o, ...l } = e, u = La(gi, s), f = ka(gi, s), [h, m] = x.useState(null), [p, g] = x.useState(null), y = ve(a, U => g(U)), b = vc(s), w = x.useRef(!1), T = x.useRef(!0), { viewport: C, selectedItem: A, selectedItemText: R, focusSelectedItem: M } = f, D = x.useCallback(() => { if (u.trigger && u.valueNode && h && p && C && A && R) { const U = u.trigger.getBoundingClientRect(), H = p.getBoundingClientRect(), J = u.valueNode.getBoundingClientRect(), W = R.getBoundingClientRect(); if (u.dir !== "rtl") { const Nt = W.left - H.left, _t = J.left - Nt, be = U.left - _t, Se = U.width + be, Ba = Math.max(Se, H.width), Ua = window.innerWidth - fn, ws = k0(_t, [fn, Math.max(fn, Ua - Ba)]); h.style.minWidth = Se + "px", h.style.left = ws + "px" } else { const Nt = H.right - W.right, _t = window.innerWidth - J.right - Nt, be = window.innerWidth - U.right - _t, Se = U.width + be, Ba = Math.max(Se, H.width), Ua = window.innerWidth - fn, ws = k0(_t, [fn, Math.max(fn, Ua - Ba)]); h.style.minWidth = Se + "px", h.style.right = ws + "px" } const et = b(), at = window.innerHeight - fn * 2, mt = C.scrollHeight, ut = window.getComputedStyle(p), lt = parseInt(ut.borderTopWidth, 10), z = parseInt(ut.paddingTop, 10), Q = parseInt(ut.borderBottomWidth, 10), L = parseInt(ut.paddingBottom, 10), nt = lt + z + mt + L + Q, ht = Math.min(A.offsetHeight * 5, nt), O = window.getComputedStyle(C), X = parseInt(O.paddingTop, 10), $ = parseInt(O.paddingBottom, 10), tt = U.top + U.height / 2 - fn, dt = at - tt, gt = A.offsetHeight / 2, I = A.offsetTop + gt, bt = lt + z + I, vt = nt - bt; if (bt <= tt) { const Nt = et.length > 0 && A === et[et.length - 1].ref.current; h.style.bottom = "0px"; const _t = p.clientHeight - C.offsetTop - C.offsetHeight, be = Math.max(dt, gt + (Nt ? $ : 0) + _t + Q), Se = bt + be; h.style.height = Se + "px" } else { const Nt = et.length > 0 && A === et[0].ref.current; h.style.top = "0px"; const be = Math.max(tt, lt + C.offsetTop + (Nt ? X : 0) + gt) + vt; h.style.height = be + "px", C.scrollTop = bt - tt + C.offsetTop } h.style.margin = `${fn}px 0`, h.style.minHeight = ht + "px", h.style.maxHeight = at + "px", o?.(), requestAnimationFrame(() => w.current = !0) } }, [b, u.trigger, u.valueNode, h, p, C, A, R, u.dir, o]); je(() => D(), [D]); const [_, q] = x.useState(); je(() => { p && q(window.getComputedStyle(p).zIndex) }, [p]); const K = x.useCallback(U => { U && T.current === !0 && (D(), M?.(), T.current = !1) }, [D, M]); return S.jsx(P4, { scope: s, contentWrapper: h, shouldExpandOnScrollRef: w, onScrollButtonChange: K, children: S.jsx("div", { ref: m, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: _ }, children: S.jsx(Wt.div, { ...l, ref: y, style: { boxSizing: "border-box", maxHeight: "100%", ...l.style } }) }) }) }); MS.displayName = U4; var H4 = "SelectPopperPosition", Wd = x.forwardRef((e, a) => { const { __scopeSelect: s, align: o = "start", collisionPadding: l = fn, ...u } = e, f = xc(s); return S.jsx(M6, { ...f, ...u, ref: a, align: o, collisionPadding: l, style: { boxSizing: "border-box", ...u.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } }) }); Wd.displayName = H4; var [P4, Wh] = Cs(gi, {}), Id = "SelectViewport", NS = x.forwardRef((e, a) => { const { __scopeSelect: s, nonce: o, ...l } = e, u = ka(Id, s), f = Wh(Id, s), h = ve(a, u.onViewportChange), m = x.useRef(0); return S.jsxs(S.Fragment, { children: [S.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: o }), S.jsx(yc.Slot, { scope: s, children: S.jsx(Wt.div, { "data-radix-select-viewport": "", role: "presentation", ...l, ref: h, style: { position: "relative", flex: 1, overflow: "hidden auto", ...l.style }, onScroll: ne(l.onScroll, p => { const g = p.currentTarget, { contentWrapper: y, shouldExpandOnScrollRef: b } = f; if (b?.current && y) { const w = Math.abs(m.current - g.scrollTop); if (w > 0) { const T = window.innerHeight - fn * 2, C = parseFloat(y.style.minHeight), A = parseFloat(y.style.height), R = Math.max(C, A); if (R < T) { const M = R + w, D = Math.min(T, M), _ = M - D; y.style.height = D + "px", y.style.bottom === "0px" && (g.scrollTop = _ > 0 ? _ : 0, y.style.justifyContent = "flex-end") } } } m.current = g.scrollTop }) }) })] }) }); NS.displayName = Id; var DS = "SelectGroup", [q4, G4] = Cs(DS), Y4 = x.forwardRef((e, a) => { const { __scopeSelect: s, ...o } = e, l = Ph(); return S.jsx(q4, { scope: s, id: l, children: S.jsx(Wt.div, { role: "group", "aria-labelledby": l, ...o, ref: a }) }) }); Y4.displayName = DS; var OS = "SelectLabel", X4 = x.forwardRef((e, a) => { const { __scopeSelect: s, ...o } = e, l = G4(OS, s); return S.jsx(Wt.div, { id: l.id, ...o, ref: a }) }); X4.displayName = OS; var tc = "SelectItem", [F4, jS] = Cs(tc), _S = x.forwardRef((e, a) => { const { __scopeSelect: s, value: o, disabled: l = !1, textValue: u, ...f } = e, h = La(tc, s), m = ka(tc, s), p = h.value === o, [g, y] = x.useState(u ?? ""), [b, w] = x.useState(!1), T = ve(a, M => m.itemRefCallback?.(M, o, l)), C = Ph(), A = x.useRef("touch"), R = () => { l || (h.onValueChange(o), h.onOpenChange(!1)) }; if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."); return S.jsx(F4, { scope: s, value: o, disabled: l, textId: C, isSelected: p, onItemTextChange: x.useCallback(M => { y(D => D || (M?.textContent ?? "").trim()) }, []), children: S.jsx(yc.ItemSlot, { scope: s, value: o, disabled: l, textValue: g, children: S.jsx(Wt.div, { role: "option", "aria-labelledby": C, "data-highlighted": b ? "" : void 0, "aria-selected": p && b, "data-state": p ? "checked" : "unchecked", "aria-disabled": l || void 0, "data-disabled": l ? "" : void 0, tabIndex: l ? void 0 : -1, ...f, ref: T, onFocus: ne(f.onFocus, () => w(!0)), onBlur: ne(f.onBlur, () => w(!1)), onClick: ne(f.onClick, () => { A.current !== "mouse" && R() }), onPointerUp: ne(f.onPointerUp, () => { A.current === "mouse" && R() }), onPointerDown: ne(f.onPointerDown, M => { A.current = M.pointerType }), onPointerMove: ne(f.onPointerMove, M => { A.current = M.pointerType, l ? m.onItemLeave?.() : A.current === "mouse" && M.currentTarget.focus({ preventScroll: !0 }) }), onPointerLeave: ne(f.onPointerLeave, M => { M.currentTarget === document.activeElement && m.onItemLeave?.() }), onKeyDown: ne(f.onKeyDown, M => { m.searchRef?.current !== "" && M.key === " " || (D4.includes(M.key) && R(), M.key === " " && M.preventDefault()) }) }) }) }) }); _S.displayName = tc; var Eo = "SelectItemText", zS = x.forwardRef((e, a) => { const { __scopeSelect: s, className: o, style: l, ...u } = e, f = La(Eo, s), h = ka(Eo, s), m = jS(Eo, s), p = z4(Eo, s), [g, y] = x.useState(null), b = ve(a, R => y(R), m.onItemTextChange, R => h.itemTextRefCallback?.(R, m.value, m.disabled)), w = g?.textContent, T = x.useMemo(() => S.jsx("option", { value: m.value, disabled: m.disabled, children: w }, m.value), [m.disabled, m.value, w]), { onNativeOptionAdd: C, onNativeOptionRemove: A } = p; return je(() => (C(T), () => A(T)), [C, A, T]), S.jsxs(S.Fragment, { children: [S.jsx(Wt.span, { id: m.textId, ...u, ref: b }), m.isSelected && f.valueNode && !f.valueNodeHasChildren ? Go.createPortal(u.children, f.valueNode) : null] }) }); zS.displayName = Eo; var VS = "SelectItemIndicator", LS = x.forwardRef((e, a) => { const { __scopeSelect: s, ...o } = e; return jS(VS, s).isSelected ? S.jsx(Wt.span, { "aria-hidden": !0, ...o, ref: a }) : null }); LS.displayName = VS; var $d = "SelectScrollUpButton", kS = x.forwardRef((e, a) => { const s = ka($d, e.__scopeSelect), o = Wh($d, e.__scopeSelect), [l, u] = x.useState(!1), f = ve(a, o.onScrollButtonChange); return je(() => { if (s.viewport && s.isPositioned) { let h = function () { const p = m.scrollTop > 0; u(p) }; const m = s.viewport; return h(), m.addEventListener("scroll", h), () => m.removeEventListener("scroll", h) } }, [s.viewport, s.isPositioned]), l ? S.jsx(US, { ...e, ref: f, onAutoScroll: () => { const { viewport: h, selectedItem: m } = s; h && m && (h.scrollTop = h.scrollTop - m.offsetHeight) } }) : null }); kS.displayName = $d; var Jd = "SelectScrollDownButton", BS = x.forwardRef((e, a) => { const s = ka(Jd, e.__scopeSelect), o = Wh(Jd, e.__scopeSelect), [l, u] = x.useState(!1), f = ve(a, o.onScrollButtonChange); return je(() => { if (s.viewport && s.isPositioned) { let h = function () { const p = m.scrollHeight - m.clientHeight, g = Math.ceil(m.scrollTop) < p; u(g) }; const m = s.viewport; return h(), m.addEventListener("scroll", h), () => m.removeEventListener("scroll", h) } }, [s.viewport, s.isPositioned]), l ? S.jsx(US, { ...e, ref: f, onAutoScroll: () => { const { viewport: h, selectedItem: m } = s; h && m && (h.scrollTop = h.scrollTop + m.offsetHeight) } }) : null }); BS.displayName = Jd; var US = x.forwardRef((e, a) => { const { __scopeSelect: s, onAutoScroll: o, ...l } = e, u = ka("SelectScrollButton", s), f = x.useRef(null), h = vc(s), m = x.useCallback(() => { f.current !== null && (window.clearInterval(f.current), f.current = null) }, []); return x.useEffect(() => () => m(), [m]), je(() => { h().find(g => g.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" }) }, [h]), S.jsx(Wt.div, { "aria-hidden": !0, ...l, ref: a, style: { flexShrink: 0, ...l.style }, onPointerDown: ne(l.onPointerDown, () => { f.current === null && (f.current = window.setInterval(o, 50)) }), onPointerMove: ne(l.onPointerMove, () => { u.onItemLeave?.(), f.current === null && (f.current = window.setInterval(o, 50)) }), onPointerLeave: ne(l.onPointerLeave, () => { m() }) }) }), K4 = "SelectSeparator", Z4 = x.forwardRef((e, a) => { const { __scopeSelect: s, ...o } = e; return S.jsx(Wt.div, { "aria-hidden": !0, ...o, ref: a }) }); Z4.displayName = K4; var th = "SelectArrow", Q4 = x.forwardRef((e, a) => { const { __scopeSelect: s, ...o } = e, l = xc(s), u = La(th, s), f = ka(th, s); return u.open && f.position === "popper" ? S.jsx(N6, { ...l, ...o, ref: a }) : null }); Q4.displayName = th; var W4 = "SelectBubbleInput", HS = x.forwardRef(({ __scopeSelect: e, value: a, ...s }, o) => { const l = x.useRef(null), u = ve(o, l), f = H6(a); return x.useEffect(() => { const h = l.current; if (!h) return; const m = window.HTMLSelectElement.prototype, g = Object.getOwnPropertyDescriptor(m, "value").set; if (f !== a && g) { const y = new Event("change", { bubbles: !0 }); g.call(h, a), h.dispatchEvent(y) } }, [f, a]), S.jsx(Wt.select, { ...s, style: { ...lS, ...s.style }, ref: u, defaultValue: a }) }); HS.displayName = W4; function PS(e) { return e === "" || e === void 0 } function qS(e) { const a = hi(e), s = x.useRef(""), o = x.useRef(0), l = x.useCallback(f => { const h = s.current + f; a(h), (function m(p) { s.current = p, window.clearTimeout(o.current), p !== "" && (o.current = window.setTimeout(() => m(""), 1e3)) })(h) }, [a]), u = x.useCallback(() => { s.current = "", window.clearTimeout(o.current) }, []); return x.useEffect(() => () => window.clearTimeout(o.current), []), [s, l, u] } function GS(e, a, s) { const l = a.length > 1 && Array.from(a).every(p => p === a[0]) ? a[0] : a, u = s ? e.indexOf(s) : -1; let f = I4(e, Math.max(u, 0)); l.length === 1 && (f = f.filter(p => p !== s)); const m = f.find(p => p.textValue.toLowerCase().startsWith(l.toLowerCase())); return m !== s ? m : void 0 } function I4(e, a) { return e.map((s, o) => e[(a + o) % e.length]) } var $4 = vS, J4 = bS, t5 = CS, e5 = wS, n5 = ES, a5 = AS, i5 = NS, s5 = _S, o5 = zS, r5 = LS, l5 = kS, c5 = BS; function u5({ ...e }) { return S.jsx($4, { "code-path": "src/components/ui/select.tsx:10:10", "data-slot": "select", ...e }) } function f5({ ...e }) { return S.jsx(t5, { "code-path": "src/components/ui/select.tsx:22:10", "data-slot": "select-value", ...e }) } function d5({ className: e, size: a = "default", children: s, ...o }) { return S.jsxs(J4, { "code-path": "src/components/ui/select.tsx:34:5", "data-slot": "select-trigger", "data-size": a, className: ja("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...o, children: [s, S.jsx(e5, { "code-path": "src/components/ui/select.tsx:44:7", asChild: !0, children: S.jsx(Bh, { "code-path": "src/components/ui/select.tsx:45:9", className: "size-4 opacity-50" }) })] }) } function h5({ className: e, children: a, position: s = "item-aligned", align: o = "center", ...l }) { return S.jsx(n5, { "code-path": "src/components/ui/select.tsx:59:5", children: S.jsxs(a5, { "code-path": "src/components/ui/select.tsx:60:7", "data-slot": "select-content", className: ja("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: s, align: o, ...l, children: [S.jsx(p5, { "code-path": "src/components/ui/select.tsx:72:9" }), S.jsx(i5, { "code-path": "src/components/ui/select.tsx:73:9", className: ja("p-1", s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: a }), S.jsx(g5, { "code-path": "src/components/ui/select.tsx:82:9" })] }) }) } function m5({ className: e, children: a, ...s }) { return S.jsxs(s5, { "code-path": "src/components/ui/select.tsx:107:5", "data-slot": "select-item", className: ja("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e), ...s, children: [S.jsx("span", { "code-path": "src/components/ui/select.tsx:115:7", "data-slot": "select-item-indicator", className: "absolute right-2 flex size-3.5 items-center justify-center", children: S.jsx(r5, { "code-path": "src/components/ui/select.tsx:119:9", children: S.jsx(rN, { "code-path": "src/components/ui/select.tsx:120:11", className: "size-4" }) }) }), S.jsx(o5, { "code-path": "src/components/ui/select.tsx:123:7", children: a })] }) } function p5({ className: e, ...a }) { return S.jsx(l5, { "code-path": "src/components/ui/select.tsx:146:5", "data-slot": "select-scroll-up-button", className: ja("flex cursor-default items-center justify-center py-1", e), ...a, children: S.jsx(x1, { "code-path": "src/components/ui/select.tsx:154:7", className: "size-4" }) }) } function g5({ className: e, ...a }) { return S.jsx(c5, { "code-path": "src/components/ui/select.tsx:164:5", "data-slot": "select-scroll-down-button", className: ja("flex cursor-default items-center justify-center py-1", e), ...a, children: S.jsx(Bh, { "code-path": "src/components/ui/select.tsx:172:7", className: "size-4" }) }) } function y5({ task: e, value: a, onChange: s }) { const [o, l] = x.useState(new Set), u = e.comparisonPairs || [], f = h => { l(m => { const p = new Set(m); return p.has(h) ? p.delete(h) : p.add(h), p }) }; return S.jsxs(le.div, { "code-path": "src/components/ComparisonCard.tsx:30:5", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .3 }, className: "task-card p-6 sm:p-8", children: [S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:36:7", className: "mb-6", children: [S.jsx("span", { "code-path": "src/components/ComparisonCard.tsx:37:9", className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider", children: e.id.toUpperCase() }), S.jsx("h3", { "code-path": "src/components/ComparisonCard.tsx:40:9", className: "text-xl font-bold text-[#1A1A1A] font-display mt-2", children: e.title }), e.description && S.jsx("p", { "code-path": "src/components/ComparisonCard.tsx:44:11", className: "text-[#666666] mt-2", children: e.description })] }), S.jsx("div", { "code-path": "src/components/ComparisonCard.tsx:48:7", className: "space-y-6", children: u.map((h, m) => S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:50:11", className: "border border-[#E0E0E0]", children: [S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:51:13", className: "bg-[#1A1A1A] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider", children: ["Приклад ", m + 1, ": ", h.label] }), S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:54:13", className: "grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E0E0E0]", children: [S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:56:15", className: "p-4 bg-red-50/50", children: [S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:57:17", className: "flex items-center gap-2 mb-3", children: [S.jsx(jN, { "code-path": "src/components/ComparisonCard.tsx:58:19", className: "w-4 h-4 text-red-500" }), S.jsx("span", { "code-path": "src/components/ComparisonCard.tsx:59:19", className: "text-sm font-bold text-red-600 uppercase", children: "Аналітично обмежене" })] }), S.jsxs("p", { "code-path": "src/components/ComparisonCard.tsx:61:17", className: "text-sm text-[#1A1A1A] leading-relaxed italic", children: ["«", h.bad, "»"] })] }), S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:66:15", className: "p-4 bg-green-50/50", children: [S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:67:17", className: "flex items-center gap-2 mb-3", children: [S.jsx(uc, { "code-path": "src/components/ComparisonCard.tsx:68:19", className: "w-4 h-4 text-[#2E7D32]" }), S.jsx("span", { "code-path": "src/components/ComparisonCard.tsx:69:19", className: "text-sm font-bold text-[#2E7D32] uppercase", children: "Операційно придатне" })] }), S.jsxs("p", { "code-path": "src/components/ComparisonCard.tsx:71:17", className: "text-sm text-[#1A1A1A] leading-relaxed italic", children: ["«", h.good, "»"] })] })] }), S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:78:13", className: "border-t border-[#E0E0E0]", children: [S.jsx("button", { "code-path": "src/components/ComparisonCard.tsx:79:15", onClick: () => f(h.id), className: "w-full flex items-center justify-center gap-2 py-2 text-sm text-[#666666] hover:text-[#E84A2C] hover:bg-[#F5F5F5] transition-colors", children: o.has(h.id) ? S.jsxs(S.Fragment, { children: [S.jsx(yN, { "code-path": "src/components/ComparisonCard.tsx:85:21", className: "w-4 h-4" }), " Приховати пояснення"] }) : S.jsxs(S.Fragment, { children: [S.jsx(fi, { "code-path": "src/components/ComparisonCard.tsx:89:21", className: "w-4 h-4" }), " Чому так? Показати пояснення"] }) }), S.jsx(s1, { "code-path": "src/components/ComparisonCard.tsx:93:15", children: o.has(h.id) && S.jsx(le.div, { "code-path": "src/components/ComparisonCard.tsx:95:19", initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "overflow-hidden", children: S.jsx("div", { "code-path": "src/components/ComparisonCard.tsx:101:21", className: "bg-[#F5F5F5] p-4 text-sm text-[#1A1A1A] leading-relaxed border-t border-[#E0E0E0]", children: h.explanation }) }) })] })] }, h.id)) }), S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:113:7", className: "mt-6 pt-6 border-t border-[#E0E0E0]", children: [S.jsx("label", { "code-path": "src/components/ComparisonCard.tsx:114:9", className: "text-sm font-semibold text-[#1A1A1A] mb-3 block", children: "Ваш аналіз: в чому ключова відмінність між Аналітично обмеженим та  Операційно придатним формулюваннями?" }), S.jsx(di, { "code-path": "src/components/ComparisonCard.tsx:117:9", value: a, onChange: h => s(h.target.value), placeholder: "Проаналізуйте, чому вдалі формулювання кращі: конкретність, вимірюваність, зв'язок із реальністю...", className: "min-h-[100px] border-[#E0E0E0] rounded-none input-focus" })] }), e.hint && S.jsxs("div", { "code-path": "src/components/ComparisonCard.tsx:126:9", className: "flex items-start gap-2 bg-[#F5F5F5] p-3 mt-4", children: [S.jsx(fi, { "code-path": "src/components/ComparisonCard.tsx:127:11", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsx("p", { "code-path": "src/components/ComparisonCard.tsx:128:11", className: "text-sm text-[#666666]", children: e.hint })] })] }) } function v5({ task: e, value: a = "", onChange: s }) {
  const [o, l] = x.useState(""),
    [u, f] = x.useState(!1),
    [h, m] = x.useState(""),
    [D, _] = x.useState(null),
    p = e.caseStudy,
    g = p.cases || [],
    b = g.find(E => E.id === h) || g[0] || p,
    w = p.options || b.options || [],
    T = E => {
      m(E);
      l("");
      _(null);
      s("")
    },
    C = E => {
      if (o === E.id) {
        l("");
        s("");
        return
      }
      l(E.id);
      const N = `[Кейс: ${b.title || b.id}]
[Вибір: ${E.label}]
${E.description || ""}`;
      s(N)
    },
    R = o && b.correctOptionId ? o === b.correctOptionId : null;

  return S.jsxs(le.div, {
    "code-path": "src/components/CaseStudyCard.tsx:28:5",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .3 },
    className: "task-card p-6 sm:p-8",
    children: [
      S.jsxs("div", {
        "code-path": "src/components/CaseStudyCard.tsx:34:7",
        className: "mb-6",
        children: [
          S.jsx("span", {
            "code-path": "src/components/CaseStudyCard.tsx:35:9",
            className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider",
            children: e.id.toUpperCase()
          }),
          S.jsx("h3", {
            "code-path": "src/components/CaseStudyCard.tsx:38:9",
            className: "text-xl font-bold text-[#1A1A1A] font-display mt-2",
            children: e.title
          })
        ]
      }),

      g.length > 1 && S.jsxs("div", {
        className: "mb-6",
        children: [
          S.jsx("p", {
            className: "text-sm font-semibold text-[#1A1A1A] mb-3",
            children: "Оберіть кейс:"
          }),
          S.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: g.map(E => S.jsx("button", {
              type: "button",
              onClick: () => T(E.id),
              className: `
                text-left p-3 border-2 transition-all duration-200
                ${b.id === E.id ? "border-[#E84A2C] bg-[#E84A2C]/5" : "border-[#E0E0E0] hover:border-[#999]"}
              `,
              children: S.jsx("span", {
                className: "font-semibold text-sm text-[#1A1A1A]",
                children: E.title
              })
            }, E.id))
          })
        ]
      }),

      S.jsxs("div", {
        "code-path": "src/components/CaseStudyCard.tsx:44:7",
        className: "bg-[#1A1A1A] text-white p-5 mb-6",
        children: [
          S.jsxs("div", {
            "code-path": "src/components/CaseStudyCard.tsx:45:9",
            className: "flex items-center gap-2 mb-3",
            children: [
              S.jsx(pN, {
                "code-path": "src/components/CaseStudyCard.tsx:46:11",
                className: "w-5 h-5 text-[#E84A2C]"
              }),
              S.jsx("span", {
                "code-path": "src/components/CaseStudyCard.tsx:47:11",
                className: "text-sm font-bold uppercase tracking-wider",
                children: "Кейс"
              })
            ]
          }),

          S.jsx("p", {
            "code-path": "src/components/CaseStudyCard.tsx:49:9",
            className: "text-[#E0E0E0] leading-relaxed",
            children: b.scenario
          }),

          b.image && S.jsxs("div", {
            className: "mt-4 border border-white/20 bg-[#F5F5F5]",
            children: [
              S.jsxs("div", {
                className: "flex items-center gap-2 px-4 py-2 border-b border-[#E0E0E0] bg-white",
                children: [
                  S.jsx("span", {
                    className: "text-xs font-semibold text-[#666666] uppercase tracking-wider",
                    children: b.title
                  }),
                  S.jsx("button", {
                    type: "button",
                    onClick: () => _(D === b.id ? null : b.id),
                    className: "ml-auto text-xs font-semibold text-[#666666] hover:text-[#E84A2C]",
                    children: D === b.id ? "Згорнути" : "Розгорнути"
                  })
                ]
              }),
              S.jsx("div", {
                className: `overflow-hidden transition-all duration-300 ${D === b.id ? "max-h-[800px]" : "max-h-[300px]"}`,
                children: S.jsx("img", {
                  src: b.image,
                  alt: b.title,
                  className: "w-full h-auto object-contain bg-white"
                })
              }),
              b.imageCaption && S.jsx("p", {
                className: "px-3 py-2 text-xs leading-relaxed text-[#666666] bg-white border-t border-[#E0E0E0]",
                children: b.imageCaption
              })
            ]
          }),

          b.questions && b.questions.length > 0 && S.jsxs("div", {
            className: "mt-5 space-y-4",
            children: [
              S.jsx("p", {
                className: "text-sm font-bold uppercase tracking-wider text-white",
                children: "Питання для інтерпретації"
              }),
              b.questions.map((E, N) => S.jsxs("div", {
                className: "bg-white text-[#1A1A1A] border border-[#E0E0E0] p-4",
                children: [
                  S.jsxs("label", {
                    className: "block text-sm font-semibold mb-2",
                    children: [N + 1, ". ", E.question]
                  }),
                  S.jsx("textarea", {
                    className: "w-full min-h-[90px] border border-[#E0E0E0] p-3 text-sm outline-none focus:border-[#E84A2C]",
                    placeholder: "Ваша інтерпретація..."
                  }),
                  E.hint && S.jsx("p", {
                    className: "text-xs text-[#666666] mt-2",
                    children: E.hint
                  })
                ]
              }, E.id))
            ]
          })
        ]
      }),

      S.jsxs("div", {
        "code-path": "src/components/CaseStudyCard.tsx:53:7",
        className: "space-y-3 mb-6",
        children: [
          S.jsx("p", {
            "code-path": "src/components/CaseStudyCard.tsx:54:9",
            className: "text-sm font-semibold text-[#1A1A1A] mb-3",
            children: p.selectionLabel || "Оберіть найбільш доречний підхід:"
          }),
          w.map(E => S.jsx("button", {
            "code-path": "src/components/CaseStudyCard.tsx:56:11",
            type: "button",
            onClick: () => C(E),
            className: `
              w-full text-left p-4 border-2 transition-all duration-200
              ${o === E.id ? "border-[#E84A2C] bg-[#E84A2C]/5" : "border-[#E0E0E0] hover:border-[#999] hover:bg-[#F5F5F5]"}
            `,
            children: S.jsxs("div", {
              "code-path": "src/components/CaseStudyCard.tsx:67:13",
              className: "flex items-start gap-3",
              children: [
                S.jsx("div", {
                  "code-path": "src/components/CaseStudyCard.tsx:68:15",
                  className: `
                    w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center mt-0.5
                    ${o === E.id ? "border-[#E84A2C] bg-[#E84A2C]" : "border-[#999]"}
                  `,
                  children: o === E.id && S.jsx(uc, {
                    "code-path": "src/components/CaseStudyCard.tsx:73:19",
                    className: "w-3 h-3 text-white"
                  })
                }),
                S.jsxs("div", {
                  "code-path": "src/components/CaseStudyCard.tsx:76:15",
                  children: [
                    S.jsx("span", {
                      "code-path": "src/components/CaseStudyCard.tsx:77:17",
                      className: "font-semibold text-[#1A1A1A] text-sm",
                      children: E.label
                    }),
                    S.jsx("p", {
                      "code-path": "src/components/CaseStudyCard.tsx:78:17",
                      className: "text-sm text-[#666666] mt-1",
                      children: E.description
                    })
                  ]
                })
              ]
            })
          }, E.id))
        ]
      }),

      o && S.jsx("div", {
        className: `p-4 mb-6 text-sm ${R ? "bg-[#E8F5E9] text-[#2E7D32]" : "bg-[#FFF3E0] text-[#8A4B00]"}`,
        children: R ? `Правильно. ${b.explanation || ""}` : `Цей варіант не є найкращим для обраного кейсу. ${b.explanation || ""}`
      }),

      p.correctHint && S.jsxs("button", {
        "code-path": "src/components/CaseStudyCard.tsx:102:7",
        onClick: () => f(!u),
        className: "flex items-center gap-2 text-sm text-[#666666] hover:text-[#E84A2C] transition-colors mb-4",
        children: [
          S.jsx(dN, {
            "code-path": "src/components/CaseStudyCard.tsx:106:9",
            className: "w-4 h-4"
          }),
          u ? "Приховати підказку" : "Показати підказку"
        ]
      }),

      p.correctHint && u && S.jsx(le.div, {
        "code-path": "src/components/CaseStudyCard.tsx:110:9",
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "bg-[#F5F5F5] p-4 text-sm text-[#666666] mb-4",
        children: p.correctHint
      }),

      e.hint && S.jsxs("div", {
        "code-path": "src/components/CaseStudyCard.tsx:120:9",
        className: "flex items-start gap-2 bg-[#F5F5F5] p-3",
        children: [
          S.jsx(fi, {
            "code-path": "src/components/CaseStudyCard.tsx:121:11",
            className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
          }),
          S.jsx("p", {
            "code-path": "src/components/CaseStudyCard.tsx:122:11",
            className: "text-sm text-[#666666]",
            children: e.hint
          })
        ]
      })
    ]
  })
} function x5({ task: e, value: a, onChange: s }) {
  const [o, l] = x.useState(!1), u = e.chartAnalysis; return S.jsxs(le.div, {
    "code-path": "src/components/ChartAnalysisCard.tsx:18:5", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .3 }, className: "task-card p-6 sm:p-8", children: [S.jsxs("div", { "code-path": "src/components/ChartAnalysisCard.tsx:24:7", className: "mb-6", children: [S.jsx("span", { "code-path": "src/components/ChartAnalysisCard.tsx:25:9", className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider", children: e.id.toUpperCase() }), S.jsx("h3", { "code-path": "src/components/ChartAnalysisCard.tsx:28:9", className: "text-xl font-bold text-[#1A1A1A] font-display mt-2", children: e.title }), e.description && S.jsx("p", { "code-path": "src/components/ChartAnalysisCard.tsx:32:11", className: "text-[#666666] mt-2", children: e.description })] }), S.jsx("div", { "code-path": "src/components/ChartAnalysisCard.tsx:37:7", className: "mb-6", children: S.jsxs("div", { "code-path": "src/components/ChartAnalysisCard.tsx:38:9", className: "border border-[#E0E0E0] bg-[#F5F5F5]", children: [S.jsxs("div", { "code-path": "src/components/ChartAnalysisCard.tsx:39:11", className: "flex items-center gap-2 px-4 py-2 border-b border-[#E0E0E0] bg-white", children: [S.jsx(wN, { "code-path": "src/components/ChartAnalysisCard.tsx:40:13", className: "w-4 h-4 text-[#666666]" }), S.jsx("span", { "code-path": "src/components/ChartAnalysisCard.tsx:41:13", className: "text-xs font-semibold text-[#666666] uppercase tracking-wider", children: u.title }), S.jsx("button", { "code-path": "src/components/ChartAnalysisCard.tsx:44:13", onClick: () => l(!o), className: "ml-auto text-[#666666] hover:text-[#E84A2C]", children: o ? S.jsx(x1, { "code-path": "src/components/ChartAnalysisCard.tsx:48:32", className: "w-4 h-4" }) : S.jsx(Bh, { "code-path": "src/components/ChartAnalysisCard.tsx:48:68", className: "w-4 h-4" }) })] }), S.jsx("div", { "code-path": "src/components/ChartAnalysisCard.tsx:51:11", className: `overflow-hidden transition-all duration-300 ${o ? "max-h-[800px]" : "max-h-[300px]"}`, children: S.jsx("img", { "code-path": "src/components/ChartAnalysisCard.tsx:52:13", src: u.image, alt: u.title, className: "w-full h-auto object-contain" }) }), u.description && S.jsx("div", { "code-path": "src/components/ChartAnalysisCard.tsx:59:13", className: "px-4 py-3 bg-white border-t border-[#E0E0E0]", children: S.jsx("p", { "code-path": "src/components/ChartAnalysisCard.tsx:60:15", className: "text-sm text-[#666666]", children: u.description }) })] }) }), S.jsx("div", {
      "code-path": "src/components/ChartAnalysisCard.tsx:67:7", className: "space-y-5", children: u.questions.map((f, h) => {
        const m = a.split("---Q").filter(Boolean).map(w => w.replace(/^\d+\n?/, "")), p = m[h] || ""; return S.jsxs("div", {
          "code-path": "src/components/ChartAnalysisCard.tsx:73:13", className: "border-l-2 border-[#E84A2C] pl-4", children: [S.jsxs("div", { "code-path": "src/components/ChartAnalysisCard.tsx:74:15", className: "flex items-start gap-2 mb-2", children: [S.jsx(MN, { "code-path": "src/components/ChartAnalysisCard.tsx:75:17", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsxs("span", { "code-path": "src/components/ChartAnalysisCard.tsx:76:17", className: "text-sm font-semibold text-[#1A1A1A]", children: [h + 1, ". ", f.question] })] }), S.jsx(di, {
            "code-path": "src/components/ChartAnalysisCard.tsx:80:15", value: p, onChange: g => {
              const y = [...m]; y[h] = g.target.value; const b = y.map((w, T) => w ? `---Q${T + 1}
${w}` : "").join(""); s(b)
            }, placeholder: "Ваша інтерпретація...", className: "min-h-[80px] border-[#E0E0E0] rounded-none input-focus text-sm"
          }), f.hint && S.jsx("p", { "code-path": "src/components/ChartAnalysisCard.tsx:92:17", className: "text-xs text-[#999] mt-1 ml-1", children: f.hint })]
        }, f.id)
      })
    }), e.hint && S.jsxs("div", { "code-path": "src/components/ChartAnalysisCard.tsx:100:9", className: "flex items-start gap-2 bg-[#F5F5F5] p-3 mt-6", children: [S.jsx(fi, { "code-path": "src/components/ChartAnalysisCard.tsx:101:11", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsx("p", { "code-path": "src/components/ChartAnalysisCard.tsx:102:11", className: "text-sm text-[#666666]", children: e.hint })] })]
  })
} function b5({ task: e, value: a, onChange: s }) { const o = [{ key: "s", label: "Strengths", title: "Сильні сторони", color: "bg-green-50 border-[#2E7D32]", headerColor: "bg-[#2E7D32] text-white" }, { key: "w", label: "Weaknesses", title: "Слабкі сторони", color: "bg-orange-50 border-orange-400", headerColor: "bg-orange-500 text-white" }, { key: "o", label: "Opportunities", title: "Можливості", color: "bg-blue-50 border-blue-400", headerColor: "bg-blue-500 text-white" }, { key: "t", label: "Threats", title: "Загрози", color: "bg-red-50 border-red-400", headerColor: "bg-red-500 text-white" }], l = f => { try { return JSON.parse(a || "{}")[f] || "" } catch { return "" } }, u = (f, h) => { try { const m = JSON.parse(a || "{}"); m[f] = h, s(JSON.stringify(m)) } catch { const m = {}; m[f] = h, s(JSON.stringify(m)) } }; return S.jsxs(le.div, { "code-path": "src/components/SWOTCard.tsx:42:5", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .3 }, className: "task-card p-6 sm:p-8", children: [S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:48:7", className: "mb-6", children: [S.jsx("span", { "code-path": "src/components/SWOTCard.tsx:49:9", className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider", children: e.id.toUpperCase() }), S.jsx("h3", { "code-path": "src/components/SWOTCard.tsx:52:9", className: "text-xl font-bold text-[#1A1A1A] font-display mt-2", children: e.title }), e.description && S.jsx("p", { "code-path": "src/components/SWOTCard.tsx:56:11", className: "text-[#666666] mt-2", children: e.description })] }), e.swotContext && S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:62:9", className: "bg-[#1A1A1A] text-white p-5 mb-6", children: [S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:63:11", className: "flex items-center gap-2 mb-3", children: [S.jsx(SN, { "code-path": "src/components/SWOTCard.tsx:64:13", className: "w-5 h-5 text-[#E84A2C]" }), S.jsx("span", { "code-path": "src/components/SWOTCard.tsx:65:13", className: "text-sm font-bold uppercase tracking-wider", children: "Контекст" })] }), S.jsx("p", { "code-path": "src/components/SWOTCard.tsx:67:11", className: "text-[#E0E0E0] leading-relaxed", children: e.swotContext })] }), S.jsx("div", { "code-path": "src/components/SWOTCard.tsx:72:7", className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: o.map(f => S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:74:11", className: `border ${f.color}`, children: [S.jsx("div", { "code-path": "src/components/SWOTCard.tsx:75:13", className: `${f.headerColor} px-4 py-2 text-sm font-bold uppercase tracking-wider`, children: f.title }), S.jsx("div", { "code-path": "src/components/SWOTCard.tsx:78:13", className: "p-4", children: S.jsx(di, { "code-path": "src/components/SWOTCard.tsx:79:15", value: l(f.key), onChange: h => u(f.key, h.target.value), placeholder: `Запишіть ${f.title.toLowerCase()}...`, className: "min-h-[100px] border-[#E0E0E0] rounded-none input-focus bg-white text-sm" }) })] }, f.key)) }), S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:91:7", className: "mt-6 border-t border-[#E0E0E0] pt-6", children: [S.jsx("label", { "code-path": "src/components/SWOTCard.tsx:92:9", className: "text-sm font-semibold text-[#1A1A1A] mb-3 block", children: "Синтез: Яку стратегію рекомендували б на основі SWOT-аналізу?" }), S.jsx(di, { "code-path": "src/components/SWOTCard.tsx:95:9", value: l("strategy"), onChange: f => u("strategy", f.target.value), placeholder: "Сформулюйте стратегічні напрями (SO, WO, ST, WT)...", className: "min-h-[80px] border-[#E0E0E0] rounded-none input-focus" })] }), e.hint && S.jsxs("div", { "code-path": "src/components/SWOTCard.tsx:104:9", className: "flex items-start gap-2 bg-[#F5F5F5] p-3 mt-4", children: [S.jsx(fi, { "code-path": "src/components/SWOTCard.tsx:105:11", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsx("p", { "code-path": "src/components/SWOTCard.tsx:106:11", className: "text-sm text-[#666666]", children: e.hint })] })] }) } function S5({ task: e, value: a, onChange: s }) {
  const [o, l] = x.useState([]), u = e.options || [], f = m => {
    const p = o.includes(m) ? o.filter(T => T !== m) : [...o, m]; l(p); const b = (a || "").split(`

[МЕТОДИ:]`)[0] || "", w = p.length > 0 ? `

[МЕТОДИ:] `+ p.join(", ") : ""; s(b + w)
  }, h = () => a.split(`

[МЕТОДИ:]`)[0] || ""; return S.jsxs(le.div, {
    "code-path": "src/components/MethodSelectionCard.tsx:35:5", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .3 }, className: "task-card p-6 sm:p-8", children: [S.jsxs("div", { "code-path": "src/components/MethodSelectionCard.tsx:41:7", className: "mb-6", children: [S.jsx("span", { "code-path": "src/components/MethodSelectionCard.tsx:42:9", className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider", children: e.id.toUpperCase() }), S.jsx("h3", { "code-path": "src/components/MethodSelectionCard.tsx:45:9", className: "text-xl font-bold text-[#1A1A1A] font-display mt-2", children: e.title }), e.description && S.jsx("p", { "code-path": "src/components/MethodSelectionCard.tsx:49:11", className: "text-[#666666] mt-2", children: e.description })] }), S.jsxs("div", {
      "code-path": "src/components/MethodSelectionCard.tsx:54:7", className: "mb-6", children: [S.jsxs("div", { "code-path": "src/components/MethodSelectionCard.tsx:55:9", className: "flex items-center gap-2 mb-4", children: [S.jsx(TN, { "code-path": "src/components/MethodSelectionCard.tsx:56:11", className: "w-4 h-4 text-[#1A1A1A]" }), S.jsx("span", { "code-path": "src/components/MethodSelectionCard.tsx:57:11", className: "text-sm font-semibold text-[#1A1A1A]", children: "Оберіть методи, які найкраще підходять для вашого дослідження (можна кілька):" })] }), S.jsx("div", {
        "code-path": "src/components/MethodSelectionCard.tsx:61:9", className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: u.map(m => S.jsxs("button", {
          "code-path": "src/components/MethodSelectionCard.tsx:63:13", onClick: () => f(m), className: `
                flex items-center gap-2 p-3 border-2 text-left transition-all duration-200
                ${o.includes(m) ? "border-[#E84A2C] bg-[#E84A2C]/5" : "border-[#E0E0E0] hover:border-[#999] hover:bg-[#F5F5F5]"}
              `, children: [S.jsx("div", {
            "code-path": "src/components/MethodSelectionCard.tsx:74:15", className: `
                w-4 h-4 border flex-shrink-0 flex items-center justify-center
                ${o.includes(m) ? "border-[#E84A2C] bg-[#E84A2C]" : "border-[#999]"}
              `, children: o.includes(m) && S.jsx(uc, { "code-path": "src/components/MethodSelectionCard.tsx:79:19", className: "w-3 h-3 text-white" })
          }), S.jsx("span", { "code-path": "src/components/MethodSelectionCard.tsx:82:15", className: `text-sm ${o.includes(m) ? "font-semibold text-[#1A1A1A]" : "text-[#666666]"}`, children: m })]
        }, m))
      })]
    }), o.length > 0 && S.jsxs(le.div, { "code-path": "src/components/MethodSelectionCard.tsx:92:9", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "bg-[#E84A2C]/5 border border-[#E84A2C] p-4 mb-6", children: [S.jsx("p", { "code-path": "src/components/MethodSelectionCard.tsx:97:11", className: "text-sm font-semibold text-[#1A1A1A] mb-2", children: "Обрані методи:" }), S.jsx("div", { "code-path": "src/components/MethodSelectionCard.tsx:98:11", className: "flex flex-wrap gap-2", children: o.map(m => S.jsx("span", { "code-path": "src/components/MethodSelectionCard.tsx:100:15", className: "bg-[#E84A2C] text-white text-xs px-2 py-1 font-semibold", children: m }, m)) })] }), S.jsxs("div", {
      "code-path": "src/components/MethodSelectionCard.tsx:109:7", className: "mb-4", children: [S.jsxs("div", { "code-path": "src/components/MethodSelectionCard.tsx:110:9", className: "flex items-center gap-2 mb-3", children: [S.jsx(cc, { "code-path": "src/components/MethodSelectionCard.tsx:111:11", className: "w-4 h-4 text-[#1A1A1A]" }), S.jsx("label", { "code-path": "src/components/MethodSelectionCard.tsx:112:11", className: "text-sm font-semibold text-[#1A1A1A]", children: "Обґрунтування вибору методів: чому саме ці методи відповідають вашій темі?" })] }), S.jsx(di, {
        "code-path": "src/components/MethodSelectionCard.tsx:116:9", value: h(), onChange: m => {
          const p = o.length > 0 ? `

[МЕТОДИ:] `+ o.join(", ") : ""; s(m.target.value + p)
        }, placeholder: "Поясніть, як кожен обраний метод допоможе вирішити конкретні завдання дослідження...", className: "min-h-[120px] border-[#E0E0E0] rounded-none input-focus"
      })]
    }), e.hint && S.jsxs("div", { "code-path": "src/components/MethodSelectionCard.tsx:128:9", className: "flex items-start gap-2 bg-[#F5F5F5] p-3", children: [S.jsx(fi, { "code-path": "src/components/MethodSelectionCard.tsx:129:11", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsx("p", { "code-path": "src/components/MethodSelectionCard.tsx:130:11", className: "text-sm text-[#666666]", children: e.hint })] })]
  })
}
  function SourceMatrixTable({ task: e, value: a = "", onChange: s }) {
  const [o, l] = x.useState(!1);

  const u = [
    { key: "authorYear", label: "Автор / рік", placeholder: "Напр.: Gehl, 2010" },
    { key: "title", label: "Назва праці", placeholder: "Коротка назва джерела" },
    { key: "group", label: "Тематична група", placeholder: "До якої групи належить" },
    { key: "focus", label: "Що досліджує", placeholder: "Предмет / проблема джерела" },
    { key: "method", label: "Метод / підхід", placeholder: "Метод, підхід, тип аналізу" },
    { key: "contribution", label: "Що дає для моєї теми", placeholder: "Як джерело працює у вашому огляді" },
    { key: "limits", label: "Обмеження джерела", placeholder: "Чого джерело не пояснює" }
  ];

  const f = e.maxRows || 5;

  function h() {
    return Array.from({ length: f }, () => {
      const T = {};
      u.forEach(C => T[C.key] = "");
      return T;
    });
  }

  function m() {
    try {
      const T = JSON.parse(a || "[]");
      if (Array.isArray(T)) {
        const C = h();
        T.slice(0, f).forEach((A, R) => {
          C[R] = { ...C[R], ...A };
        });
        return C;
      }
    } catch (T) {}
    return h();
  }

  const p = m();

  const g = p.some(T =>
    Object.values(T).some(C => String(C || "").trim().length > 0)
  );

  function y(T, C, A) {
    const R = p.map((M, D) => D === T ? { ...M, [C]: A } : M);
    const q = R.some(M =>
      Object.values(M).some(K => String(K || "").trim().length > 0)
    );

    s(q ? JSON.stringify(R) : "");
  }

  return S.jsxs("div", {
    className: `
      task-card p-6 sm:p-8 transition-all duration-300
      ${g ? "task-card-completed" : ""}
      ${o ? "shadow-md" : ""}
    `,
    children: [
      S.jsx("div", {
        className: "flex items-start justify-between mb-4",
        children: S.jsxs("div", {
          className: "flex-1",
          children: [
            S.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                S.jsx("span", {
                  className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider",
                  children: e.id.toUpperCase()
                }),
                g && S.jsx("span", {
                  className: "text-xs font-semibold uppercase tracking-wider text-[#2E7D32]",
                  children: "Виконано"
                })
              ]
            }),
            S.jsx("h3", {
              className: "text-xl font-bold text-[#1A1A1A] font-display leading-tight",
              children: e.title
            })
          ]
        })
      }),

      e.description && S.jsx("p", {
        className: "text-[#666666] mb-4 leading-relaxed",
        children: e.description
      }),

      S.jsx("div", {
        className: "mb-4 overflow-x-auto border border-[#E0E0E0]",
        children: S.jsxs("table", {
          className: "w-full min-w-[1300px] border-collapse bg-white text-sm",
          children: [
            S.jsx("thead", {
              children: S.jsxs("tr", {
                className: "bg-[#F5F5F5]",
                children: [
                  S.jsx("th", {
                    className: "w-[60px] border border-[#E0E0E0] p-3 text-left font-semibold text-[#1A1A1A]",
                    children: "№"
                  }),
                  ...u.map(T => S.jsx("th", {
                    className: "border border-[#E0E0E0] p-3 text-left font-semibold text-[#1A1A1A]",
                    children: T.label
                  }, T.key))
                ]
              })
            }),

            S.jsx("tbody", {
              children: p.map((T, C) => S.jsxs("tr", {
                className: "align-top",
                children: [
                  S.jsx("td", {
                    className: "border border-[#E0E0E0] p-3 font-semibold text-[#E84A2C]",
                    children: C + 1
                  }),
                  ...u.map(A => S.jsx("td", {
                    className: "border border-[#E0E0E0] p-2",
                    children: A.key === "title" || A.key === "focus" || A.key === "contribution" || A.key === "limits"
                      ? S.jsx("textarea", {
                          value: T[A.key] || "",
                          onChange: R => y(C, A.key, R.target.value),
                          onFocus: () => l(!0),
                          onBlur: () => l(!1),
                          placeholder: A.placeholder,
                          className: "w-full min-h-[74px] resize-vertical border border-transparent bg-transparent p-2 text-sm leading-relaxed outline-none focus:border-[#E84A2C]"
                        })
                      : S.jsx("input", {
                          value: T[A.key] || "",
                          onChange: R => y(C, A.key, R.target.value),
                          onFocus: () => l(!0),
                          onBlur: () => l(!1),
                          placeholder: A.placeholder,
                          className: "w-full border border-transparent bg-transparent p-2 text-sm outline-none focus:border-[#E84A2C]"
                        })
                  }, A.key))
                ]
              }, C))
            })
          ]
        })
      }),

      e.hint && S.jsx("div", {
        className: "bg-[#F5F5F5] p-3",
        children: S.jsx("p", {
          className: "text-sm text-[#666666]",
          children: e.hint
        })
      })
    ]
  });
} function parseWorkbookCSV(e) {
  const a = String(e || "").trim();
  if (!a) return { headers: [], rows: [] };

  const s = a.split(/\r?\n/).filter(Boolean);
  if (!s.length) return { headers: [], rows: [] };

  const o = s[0].includes(";") ? ";" : ",";
  const l = s[0].split(o).map(u => u.trim());

  const u = s.slice(1).map(f => {
    const h = f.split(o).map(m => m.trim());
    const p = {};
    l.forEach((m, g) => {
      p[m] = h[g] ?? "";
    });
    return p;
  });

  return { headers: l, rows: u };
}

function workbookNumber(e) {
  const a = String(e ?? "").replace(",", ".").trim();
  if (!a) return NaN;
  const s = Number(a);
  return Number.isFinite(s) ? s : NaN;
}

function workbookStats(e) {
  const a = e.map(workbookNumber).filter(Number.isFinite).sort((s, o) => s - o);
  if (!a.length) return null;

  const s = a.reduce((o, l) => o + l, 0);
  const o = s / a.length;
  const l = a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
  const u = Math.sqrt(a.reduce((f, h) => f + Math.pow(h - o, 2), 0) / a.length);

  return {
    count: a.length,
    min: a[0],
    max: a[a.length - 1],
    mean: o,
    median: l,
    std: u
  };
}

function workbookRound(e) {
  return Number.isFinite(e) ? Math.round(e * 100) / 100 : "";
}

function workbookDistanceKm(e, a, s, o) {
  const l = 6371;
  const u = h => h * Math.PI / 180;
  const f = u(s - e);
  const h = u(o - a);
  const m = Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(u(e)) * Math.cos(u(s)) * Math.sin(h / 2) * Math.sin(h / 2);
  return 2 * l * Math.atan2(Math.sqrt(m), Math.sqrt(1 - m));
}

function workbookParseJsonValue(e, a) {
  try {
    const s = JSON.parse(e || "{}");
    return { ...a, ...s };
  } catch {
    return { ...a, csv: e || "" };
  }
}

function workbookSaveJsonValue(e, a, s) {
  e(JSON.stringify({ ...a, ...s }));
}

function workbookReadCSVFile(e, a, s) {
  const o = e.target.files && e.target.files[0];

  if (!o) return;

  const l = new FileReader();

  l.onload = () => {
    workbookSaveJsonValue(s, a, {
      csv: String(l.result || ""),
      fileName: o.name,
      fileKey: String(Date.now())
    });
  };

  l.readAsText(o, "UTF-8");
}

function workbookClearCSV(e, a) {
  workbookSaveJsonValue(a, e, {
    csv: "",
    fileName: "",
    selectedColumn: "",
    fileKey: String(Date.now())
  });
}

function CSVFileControls({ data: e, onChange: a }) {
  return S.jsxs("div", {
    className: "grid gap-2",
    children: [
      S.jsxs("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
          S.jsx("input", {
            key: e.fileKey || "file-empty",
            type: "file",
            accept: ".csv,text/csv,.txt",
            onChange: s => workbookReadCSVFile(s, e, a),
            className: "block text-sm border border-[#DDDDDD] bg-white p-3"
          }),
          S.jsx("button", {
            type: "button",
            onClick: () => workbookClearCSV(e, a),
            className: "border border-[#DDDDDD] bg-[#F5F5F5] px-4 py-3 text-sm hover:bg-white",
            children: "Очистити дані"
          })
        ]
      }),
      e.fileName ? S.jsxs("div", {
        className: "text-xs text-[#666666]",
        children: [
          "Завантажено: ",
          e.fileName
        ]
      }) : null
    ]
  });
}

function DataTableAnalysisTask({ task: e, value: a, onChange: s }) {
  const o = workbookParseJsonValue(a, { csv: "", selectedColumn: "" });
  const l = parseWorkbookCSV(o.csv);
  const u = l.headers.filter(m => l.rows.some(p => Number.isFinite(workbookNumber(p[m]))));
  const f = o.selectedColumn || u[0] || "";
  const h = workbookStats(l.rows.map(m => m[f]));

  return S.jsxs("div", {
    className: "task-card p-6 sm:p-8",
    children: [
      S.jsxs("div", {
        className: "mb-4",
        children: [
          S.jsx("p", { className: "text-sm text-[#666666] mb-3", children: e.description || "Вставте CSV-таблицю для аналізу." }),
          S.jsxs("div", {
  className: "grid gap-3",
  children: [
    S.jsx(CSVFileControls, {
      data: o,
      onChange: s
    }),
    S.jsx("textarea", {
      value: o.csv,
      onChange: m => workbookSaveJsonValue(s, o, { csv: m.target.value }),
      placeholder: e.placeholder || "district,population,density,green_area,public_space_area\nРайон A,12000,8500,14,2.4\nРайон B,18000,9600,9,1.8\nРайон C,9000,6100,22,3.1",
      className: "w-full min-h-[180px] border border-[#DDDDDD] bg-white p-4 text-sm outline-none focus:border-[#E84A2C]"
    })
  ]
})
        ]
      }),

      l.headers.length > 0 && S.jsxs("div", {
        className: "grid gap-4",
        children: [
          S.jsxs("div", {
            className: "overflow-x-auto border border-[#DDDDDD]",
            children: [
              S.jsx("table", {
                className: "w-full text-sm",
                children: S.jsxs("tbody", {
                  children: [
                    S.jsx("tr", {
                      className: "bg-[#F5F5F5]",
                      children: l.headers.map(m => S.jsx("th", { className: "p-2 text-left border border-[#DDDDDD]", children: m }, m))
                    }),
                    ...l.rows.slice(0, 8).map((m, p) => S.jsx("tr", {
                      children: l.headers.map(g => S.jsx("td", { className: "p-2 border border-[#DDDDDD]", children: m[g] }, g))
                    }, p))
                  ]
                })
              })
            ]
          }),

          u.length > 0 && S.jsxs("div", {
            className: "bg-[#F5F5F5] p-4",
            children: [
              S.jsx("label", { className: "block text-sm font-semibold mb-2", children: "Оберіть числову колонку для описової статистики:" }),
              S.jsx("select", {
                value: f,
                onChange: m => workbookSaveJsonValue(s, o, { selectedColumn: m.target.value }),
                className: "border border-[#DDDDDD] bg-white p-2 text-sm",
                children: u.map(m => S.jsx("option", { value: m, children: m }, m))
              })
            ]
          }),

          h && S.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-6 gap-3",
            children: [
              ["N", h.count],
              ["Min", workbookRound(h.min)],
              ["Max", workbookRound(h.max)],
              ["Mean", workbookRound(h.mean)],
              ["Median", workbookRound(h.median)],
              ["Std", workbookRound(h.std)]
            ].map(m => S.jsxs("div", {
              className: "bg-white border border-[#DDDDDD] p-3",
              children: [
                S.jsx("div", { className: "text-xs uppercase text-[#666666]", children: m[0] }),
                S.jsx("div", { className: "text-xl font-semibold", children: m[1] })
              ]
            }, m[0]))
          }),

          h && S.jsx("div", {
            className: "flex items-end gap-1 h-36 border border-[#DDDDDD] p-3 bg-white",
            children: l.rows.map((m, p) => {
              const g = workbookNumber(m[f]);
              const y = h.max === h.min ? 20 : Math.max(4, ((g - h.min) / (h.max - h.min)) * 120);
              return Number.isFinite(g) ? S.jsx("div", {
                title: String(g),
                className: "bg-[#E84A2C] flex-1 min-w-[8px]",
                style: { height: `${y}px` }
              }, p) : null;
            })
          })
        ]
      })
    ]
  });
}

function GisPointAnalysisTask({ task: e, value: a, onChange: s }) {
  const o = workbookParseJsonValue(a, { csv: "" });
  const l = parseWorkbookCSV(o.csv);
  const u = l.headers.find(g => ["lat", "latitude", "широта"].includes(String(g).toLowerCase()));
  const f = l.headers.find(g => ["lon", "lng", "longitude", "довгота"].includes(String(g).toLowerCase()));
  const h = l.headers.find(g => ["name", "назва", "id"].includes(String(g).toLowerCase())) || l.headers[0];

  const m = u && f ? l.rows.map(g => ({
    name: g[h] || "point",
    lat: workbookNumber(g[u]),
    lon: workbookNumber(g[f])
  })).filter(g => Number.isFinite(g.lat) && Number.isFinite(g.lon)) : [];

  const p = m.map(g => g.lat);
  const y = m.map(g => g.lon);
  const b = Math.min(...p), w = Math.max(...p), T = Math.min(...y), C = Math.max(...y);
  const A = g => 30 + ((g.lon - T) / ((C - T) || 1)) * 540;
  const R = g => 270 - ((g.lat - b) / ((w - b) || 1)) * 240;

  return S.jsxs("div", {
    className: "task-card p-6 sm:p-8",
    children: [
      S.jsx("p", { className: "text-sm text-[#666666] mb-3", children: e.description || "Вставте таблицю з координатами lat/lon." }),
      S.jsxs("div", {
  className: "grid gap-3",
  children: [
    S.jsx(CSVFileControls, {
  data: o,
  onChange: s
}),
    S.jsx("textarea", {
      value: o.csv,
      onChange: g => workbookSaveJsonValue(s, o, { csv: g.target.value }),
      placeholder: e.placeholder || "name,lat,lon\nПлоща А,49.841,24.031\nПарк B,49.850,24.020",
      className: "w-full min-h-[160px] border border-[#DDDDDD] bg-white p-4 text-sm outline-none focus:border-[#E84A2C]"
    })
  ]
}),

      S.jsxs("div", {
        className: "mt-4 grid md:grid-cols-[1fr_260px] gap-4",
        children: [
          S.jsx("div", {
            className: "border border-[#DDDDDD] bg-white p-3",
            children: m.length ? S.jsx("svg", {
              viewBox: "0 0 600 300",
              className: "w-full h-[300px] bg-[#F5F5F5]",
              children: m.map((g, I) => S.jsxs("g", {
                children: [
                  S.jsx("circle", { cx: A(g), cy: R(g), r: 6, fill: "#E84A2C" }),
                  S.jsx("text", { x: A(g) + 8, y: R(g) - 8, fontSize: "11", fill: "#333333", children: g.name })
                ]
              }, I))
            }) : S.jsx("div", { className: "p-6 text-sm text-[#666666]", children: "Поки немає коректних координат. Потрібні колонки lat і lon." })
          }),

          S.jsxs("div", {
            className: "bg-[#F5F5F5] p-4 text-sm",
            children: [
              S.jsx("div", { className: "font-semibold mb-2", children: "Попередній просторовий підсумок" }),
              S.jsx("p", { children: `Кількість точок: ${m.length}` }),
              m.length ? S.jsxs("div", {
                children: [
                  S.jsx("p", { children: `Lat: ${workbookRound(b)} — ${workbookRound(w)}` }),
                  S.jsx("p", { children: `Lon: ${workbookRound(T)} — ${workbookRound(C)}` })
                ]
              }) : null
            ]
          })
        ]
      })
    ]
  });
}

function AccessibilityAnalysisTask({ task: e, value: a, onChange: s }) {
  const o = workbookParseJsonValue(a, { csv: "", radius: "500" });
  const l = parseWorkbookCSV(o.csv);
  const u = l.headers.find(A => ["type", "тип"].includes(String(A).toLowerCase()));
  const f = l.headers.find(A => ["lat", "latitude", "широта"].includes(String(A).toLowerCase()));
  const h = l.headers.find(A => ["lon", "lng", "longitude", "довгота"].includes(String(A).toLowerCase()));
  const m = l.headers.find(A => ["name", "назва", "id"].includes(String(A).toLowerCase())) || l.headers[0];

  const p = Number(o.radius) || 500;
  const g = u && f && h ? l.rows.map(A => ({
    name: A[m] || "point",
    type: String(A[u] || "").toLowerCase(),
    lat: workbookNumber(A[f]),
    lon: workbookNumber(A[h])
  })).filter(A => Number.isFinite(A.lat) && Number.isFinite(A.lon)) : [];

  const y = g.filter(A => A.type === "origin");
  const b = g.filter(A => A.type === "service");

  const w = y.map(A => {
    const R = b.map(M => workbookDistanceKm(A.lat, A.lon, M.lat, M.lon) * 1000);
    const D = R.length ? Math.min(...R) : null;
    return { ...A, nearest: D, covered: D !== null && D <= p };
  });

  const T = w.length ? Math.round(w.filter(A => A.covered).length / w.length * 100) : 0;

  return S.jsxs("div", {
    className: "task-card p-6 sm:p-8",
    children: [
      S.jsxs("div", {
  className: "grid gap-3",
  children: [
    S.jsx(CSVFileControls, {
      data: o,
      onChange: s
    }),
    S.jsx("textarea", {
      value: o.csv,
      onChange: A => workbookSaveJsonValue(s, o, { csv: A.target.value }),
      placeholder: e.placeholder || "name,type,lat,lon\nКвартал 1,origin,49.841,24.031\nКвартал 2,origin,49.846,24.021\nШкола 1,service,49.843,24.029",
      className: "w-full min-h-[160px] border border-[#DDDDDD] bg-white p-4 text-sm outline-none focus:border-[#E84A2C]"
    })
  ]
}),

      S.jsxs("div", {
        className: "mt-4 bg-[#F5F5F5] p-4",
        children: [
          S.jsx("label", { className: "block text-sm font-semibold mb-2", children: "Радіус доступності, м:" }),
          S.jsx("input", {
            value: o.radius,
            onChange: A => workbookSaveJsonValue(s, o, { radius: A.target.value }),
            className: "border border-[#DDDDDD] bg-white p-2 text-sm",
            placeholder: "500"
          })
        ]
      }),

      S.jsxs("div", {
        className: "mt-4 grid md:grid-cols-4 gap-3",
        children: [
          ["Origin", y.length],
          ["Service", b.length],
          ["Радіус, м", p],
          ["Забезпеченість", `${T}%`]
        ].map(A => S.jsxs("div", {
          className: "bg-white border border-[#DDDDDD] p-3",
          children: [
            S.jsx("div", { className: "text-xs uppercase text-[#666666]", children: A[0] }),
            S.jsx("div", { className: "text-xl font-semibold", children: A[1] })
          ]
        }, A[0]))
      }),

      w.length ? S.jsx("div", {
        className: "mt-4 overflow-x-auto border border-[#DDDDDD]",
        children: S.jsx("table", {
          className: "w-full text-sm",
          children: S.jsxs("tbody", {
            children: [
              S.jsxs("tr", {
                className: "bg-[#F5F5F5]",
                children: [
                  S.jsx("th", { className: "p-2 border border-[#DDDDDD] text-left", children: "Origin" }),
                  S.jsx("th", { className: "p-2 border border-[#DDDDDD] text-left", children: "Найближчий сервіс, м" }),
                  S.jsx("th", { className: "p-2 border border-[#DDDDDD] text-left", children: "Статус" })
                ]
              }),
              ...w.map(A => S.jsxs("tr", {
                children: [
                  S.jsx("td", { className: "p-2 border border-[#DDDDDD]", children: A.name }),
                  S.jsx("td", { className: "p-2 border border-[#DDDDDD]", children: A.nearest === null ? "-" : workbookRound(A.nearest) }),
                  S.jsx("td", { className: "p-2 border border-[#DDDDDD]", children: A.covered ? "доступно" : "поза радіусом" })
                ]
              }, A.name))
            ]
          })
        })
      }) : null
    ]
  });
}function C5({ task: e, value: a, onChange: s }) {
  const [o, l] = x.useState(!1), u = a.trim().length > 0 && a !== "{}"; return e.type === "data-table-analysis" ? S.jsx(DataTableAnalysisTask, { task: e, value: a, onChange: s }) : e.type === "gis-point-analysis" ? S.jsx(GisPointAnalysisTask, { task: e, value: a, onChange: s }) : e.type === "accessibility-analysis" ? S.jsx(AccessibilityAnalysisTask, { task: e, value: a, onChange: s }) : e.type === "comparison" ? S.jsx(y5, { "code-path": "src/components/TaskCard.tsx:33:12", task: e, value: a, onChange: s }) : e.type === "case-study" ? S.jsx(v5, { "code-path": "src/components/TaskCard.tsx:36:12", task: e, value: a, onChange: s }) : e.type === "chart-analysis" ? S.jsx(x5, { "code-path": "src/components/TaskCard.tsx:39:12", task: e, value: a, onChange: s }) : e.type === "swot" ? S.jsx(b5, { "code-path": "src/components/TaskCard.tsx:42:12", task: e, value: a, onChange: s }) : e.type === "method-selection" ? S.jsx(S5, { "code-path": "src/components/TaskCard.tsx:45:12", task: e, value: a, onChange: s }) : e.type === "source-table" ? S.jsx(SourceMatrixTable, { task: e, value: a, onChange: s }) : S.jsxs(le.div, {
    "code-path": "src/components/TaskCard.tsx:50:5", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .3 }, className: `
        task-card p-6 sm:p-8 transition-all duration-300
        ${u ? "task-card-completed" : ""}
        ${o ? "shadow-md" : ""}
      `, children: [S.jsx("div", { "code-path": "src/components/TaskCard.tsx:61:7", className: "flex items-start justify-between mb-4", children: S.jsxs("div", { "code-path": "src/components/TaskCard.tsx:62:9", className: "flex-1", children: [S.jsxs("div", { "code-path": "src/components/TaskCard.tsx:63:11", className: "flex items-center gap-2 mb-2", children: [S.jsx("span", { "code-path": "src/components/TaskCard.tsx:64:13", className: "text-xs font-semibold text-[#E84A2C] uppercase tracking-wider", children: e.id.toUpperCase() }), u && S.jsxs(le.div, { "code-path": "src/components/TaskCard.tsx:68:15", initial: { scale: 0 }, animate: { scale: 1 }, className: "flex items-center gap-1 text-[#2E7D32]", children: [S.jsx(uc, { "code-path": "src/components/TaskCard.tsx:73:17", className: "w-4 h-4" }), S.jsx("span", { "code-path": "src/components/TaskCard.tsx:74:17", className: "text-xs font-semibold uppercase tracking-wider", children: "Виконано" })] })] }), S.jsx("h3", { "code-path": "src/components/TaskCard.tsx:78:11", className: "text-xl font-bold text-[#1A1A1A] font-display leading-tight", children: e.title })] }) }), e.description && S.jsx("p", { "code-path": "src/components/TaskCard.tsx:86:9", className: "text-[#666666] mb-4 leading-relaxed", children: e.description }), S.jsxs("div", { "code-path": "src/components/TaskCard.tsx:92:7", className: "mb-4", children: [e.type === "textarea" && S.jsx(di, { "code-path": "src/components/TaskCard.tsx:94:11", value: a, onChange: f => s(f.target.value), onFocus: () => l(!0), onBlur: () => l(!1), placeholder: e.placeholder, className: "min-h-[120px] border-[#E0E0E0] rounded-none input-focus resize-vertical font-body" }), e.type === "text" && S.jsx(ED, { "code-path": "src/components/TaskCard.tsx:104:11", value: a, onChange: f => s(f.target.value), onFocus: () => l(!0), onBlur: () => l(!1), placeholder: e.placeholder, className: "border-[#E0E0E0] rounded-none input-focus font-body" }), e.type === "select" && S.jsxs(u5, { "code-path": "src/components/TaskCard.tsx:114:11", value: a, onValueChange: s, children: [S.jsx(d5, { "code-path": "src/components/TaskCard.tsx:115:13", className: "border-[#E0E0E0] rounded-none input-focus font-body", children: S.jsx(f5, { "code-path": "src/components/TaskCard.tsx:116:15", placeholder: e.placeholder || "Оберіть варіант" }) }), S.jsx(h5, { "code-path": "src/components/TaskCard.tsx:118:13", children: e.options?.map(f => S.jsx(m5, { "code-path": "src/components/TaskCard.tsx:120:17", value: f, children: f }, f)) })] })] }), e.hint && S.jsxs("div", { "code-path": "src/components/TaskCard.tsx:131:9", className: "flex items-start gap-2 bg-[#F5F5F5] p-3", children: [S.jsx(fi, { "code-path": "src/components/TaskCard.tsx:132:11", className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5" }), S.jsx("p", { "code-path": "src/components/TaskCard.tsx:133:11", className: "text-sm text-[#666666]", children: e.hint })] })]
  })
} function w5({ fieldProgress: e, checklistProgress: a, checklist: s, checklistState: o, onToggleChecklist: l }) {
  const u = Object.values(o).filter(Boolean).length; return S.jsxs("div", {
    "code-path": "src/components/ProgressPanel.tsx:23:5", className: "bg-[#F5F5F5] border border-[#E0E0E0] p-6", children: [S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:25:7", className: "flex items-center gap-2 mb-6", children: [S.jsx(sN, { "code-path": "src/components/ProgressPanel.tsx:26:9", className: "w-5 h-5 text-[#E84A2C]" }), S.jsx("h3", { "code-path": "src/components/ProgressPanel.tsx:27:9", className: "text-lg font-bold text-[#1A1A1A] uppercase font-display", children: "Прогрес теми" })] }), S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:33:7", className: "hidden", children: [S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:34:9", className: "flex items-center justify-between mb-2", children: [S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:35:11", className: "flex items-center gap-2", children: [S.jsx(b1, { "code-path": "src/components/ProgressPanel.tsx:36:13", className: "w-4 h-4 text-[#666666]" }), S.jsx("span", { "code-path": "src/components/ProgressPanel.tsx:37:13", className: "text-sm font-semibold text-[#1A1A1A]", children: "Заповнення завдань" })] }), S.jsxs("span", { "code-path": "src/components/ProgressPanel.tsx:39:11", className: "text-sm font-bold text-[#E84A2C]", children: [e, "%"] })] }), S.jsx("div", { "code-path": "src/components/ProgressPanel.tsx:41:9", className: "h-2 bg-[#E0E0E0] overflow-hidden", children: S.jsx(le.div, { "code-path": "src/components/ProgressPanel.tsx:42:11", className: "h-full bg-[#E84A2C]", initial: { width: 0 }, animate: { width: `${e}%` }, transition: { duration: .5, ease: "easeOut" } }) })] }), S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:52:7", className: "mb-6", children: [S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:53:9", className: "flex items-center justify-between mb-2", children: [S.jsxs("div", { "code-path": "src/components/ProgressPanel.tsx:54:11", className: "flex items-center gap-2", children: [S.jsx(O0, { "code-path": "src/components/ProgressPanel.tsx:55:13", className: "w-4 h-4 text-[#666666]" }), S.jsx("span", { "code-path": "src/components/ProgressPanel.tsx:56:13", className: "text-sm font-semibold text-[#1A1A1A]", children: "Самоперевірка" })] }), S.jsxs("span", { "code-path": "src/components/ProgressPanel.tsx:58:11", className: "text-sm font-bold text-[#2E7D32]", children: [a, "%"] })] }), S.jsx("div", { "code-path": "src/components/ProgressPanel.tsx:60:9", className: "h-2 bg-[#E0E0E0] overflow-hidden", children: S.jsx(le.div, { "code-path": "src/components/ProgressPanel.tsx:61:11", className: "h-full bg-[#2E7D32]", initial: { width: 0 }, animate: { width: `${a}%` }, transition: { duration: .5, ease: "easeOut" } }) }), S.jsxs("p", { "code-path": "src/components/ProgressPanel.tsx:68:9", className: "text-xs text-[#666666] mt-2", children: [u, " з ", s.length, " пунктів виконано"] })] }), S.jsxs("div", {
      "code-path": "src/components/ProgressPanel.tsx:74:7", className: "border-t border-[#E0E0E0] pt-4", children: [S.jsx("h4", { "code-path": "src/components/ProgressPanel.tsx:75:9", className: "text-xs font-semibold text-[#666666] uppercase tracking-wider mb-3", children: "Контрольний список" }), S.jsx("div", {
        "code-path": "src/components/ProgressPanel.tsx:78:9", className: "space-y-2", children: s.map(f => {
          const h = o[f.id] || !1; return S.jsxs("button", {
            "code-path": "src/components/ProgressPanel.tsx:82:15", onClick: () => l(f.id), className: `
                  flex items-start gap-3 w-full text-left p-2 transition-colors duration-200
                  ${h ? "bg-[#2E7D32]/10" : "hover:bg-white"}
                `, children: [S.jsx("div", {
              "code-path": "src/components/ProgressPanel.tsx:90:17", className: `
                  w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors
                  ${h ? "bg-[#2E7D32] border-[#2E7D32]" : "border-[#666666]"}
                `, children: h && S.jsx("svg", { "code-path": "src/components/ProgressPanel.tsx:95:21", className: "w-3 h-3 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: S.jsx("path", { "code-path": "src/components/ProgressPanel.tsx:96:23", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) })
            }), S.jsx("span", {
              "code-path": "src/components/ProgressPanel.tsx:100:17", className: `
                  text-sm leading-snug
                  ${h ? "text-[#2E7D32] line-through" : "text-[#1A1A1A]"}
                `, children: f.label
            })]
          }, f.id)
        })
      })]
    }), e === 100 && a === 100 && S.jsxs(le.div, { "code-path": "src/components/ProgressPanel.tsx:114:9", initial: { opacity: 0, scale: .9 }, animate: { opacity: 1, scale: 1 }, className: "mt-4 bg-[#2E7D32] text-white p-4 text-center", children: [S.jsx(O0, { "code-path": "src/components/ProgressPanel.tsx:119:11", className: "w-6 h-6 mx-auto mb-2" }), S.jsx("p", { "code-path": "src/components/ProgressPanel.tsx:120:11", className: "text-sm font-bold uppercase tracking-wider", children: "Тему завершено!" })] })]
  })
} function E5({ topic: e, getField: a, saveField: s, getChecklistItem: o, toggleChecklistItem: l, getTopicProgress: u, getTopicChecklistProgress: f }) {
  const [h, m] = x.useState({}); x.useEffect(() => { const b = {}; e.checklist.forEach(w => { b[w.id] = o(String(e.id), w.id) }), m(b) }, [e.id, e.checklist, o]); const p = b => { l(String(e.id), b), m(w => ({ ...w, [b]: !w[b] })) }, g = u(String(e.id), e.totalFields), y = f(String(e.id), e.checklist.length); return S.jsx(s1, {
    "code-path": "src/components/TopicView.tsx:46:5", mode: "wait", children: S.jsxs(le.div, {
      "code-path": "src/components/TopicView.tsx:47:7", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: .3 }, children: [S.jsxs("section", { "code-path": "src/components/TopicView.tsx:55:9", className: "relative h-[280px] sm:h-[320px] bg-[#1A1A1A] overflow-hidden", children: [S.jsx("img", { "code-path": "src/components/TopicView.tsx:56:11", src: e.heroImage, alt: e.title, className: "absolute inset-0 w-full h-full object-cover opacity-30" }), S.jsx("div", { "code-path": "src/components/TopicView.tsx:61:11", className: "absolute inset-0 hero-overlay" }), S.jsxs("div", { "code-path": "src/components/TopicView.tsx:62:11", className: "relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center", children: [S.jsxs(le.div, { "code-path": "src/components/TopicView.tsx:63:13", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .5 }, children: [S.jsx("span", { "code-path": "src/components/TopicView.tsx:68:15", className: "text-[#E84A2C] text-xs font-bold uppercase tracking-[0.2em] mb-3 block", children: e.subtitle }), S.jsx("h2", { "code-path": "src/components/TopicView.tsx:71:15", className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase font-display leading-tight max-w-3xl", children: e.title }), S.jsx("div", { "code-path": "src/components/TopicView.tsx:74:15", className: "flex items-center gap-6 mt-6", children: S.jsxs("div", { "code-path": "src/components/TopicView.tsx:75:17", className: "flex items-center gap-2", children: [S.jsx(b1, { "code-path": "src/components/TopicView.tsx:76:19", className: "w-4 h-4 text-[#E84A2C]" }), S.jsx("span", { "code-path": "src/components/TopicView.tsx:77:19", className: "text-sm text-[#E0E0E0]", children: e.objective })] }) })] }), S.jsx("span", { "code-path": "src/components/TopicView.tsx:81:13", className: "absolute right-4 sm:right-8 bottom-0 text-[150px] sm:text-[200px] font-bold text-white opacity-[0.05] font-display leading-none select-none", children: String(e.id).padStart(2, "0") })] })] }), S.jsx("div", {
        "code-path": "src/components/TopicView.tsx:88:9", className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12", children: S.jsxs("div", {
          "code-path": "src/components/TopicView.tsx:89:11", className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [S.jsxs("div", {
            "code-path": "src/components/TopicView.tsx:91:13", className: "lg:col-span-8 space-y-8", children: [S.jsxs("section", {
              "code-path": "src/components/TopicView.tsx:93:15", className: "bg-[#F5F5F5] p-6 sm:p-8 border-l-4 border-[#1A1A1A]", children: [S.jsxs("div", { "code-path": "src/components/TopicView.tsx:94:17", className: "flex items-center gap-2 mb-4", children: [S.jsx(cc, { "code-path": "src/components/TopicView.tsx:95:19", className: "w-5 h-5 text-[#1A1A1A]" }), S.jsx("h3", { "code-path": "src/components/TopicView.tsx:96:19", className: "text-lg font-bold text-[#1A1A1A] uppercase font-display", children: "Теоретичні засади" })] }), S.jsx("div", {
                "code-path": "src/components/TopicView.tsx:100:17", className: "prose prose-sm max-w-none", children: e.theory.split(`

`).map((b, w) => S.jsx("p", { "code-path": "src/components/TopicView.tsx:102:21", className: "text-[#1A1A1A] leading-relaxed mb-4 last:mb-0", children: b }, w))
              })]
            }), e.exercises.map((b, w) => S.jsxs(le.section, { "code-path": "src/components/TopicView.tsx:111:17", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: .1 * w }, children: [S.jsxs("div", { "code-path": "src/components/TopicView.tsx:117:19", className: "flex items-center gap-3 mb-6", children: [S.jsx("div", { "code-path": "src/components/TopicView.tsx:118:21", className: "w-10 h-10 bg-[#E84A2C] flex items-center justify-center flex-shrink-0", children: S.jsx("span", { "code-path": "src/components/TopicView.tsx:119:23", className: "text-white font-bold text-sm font-display", children: w + 1 }) }), S.jsx("h3", { "code-path": "src/components/TopicView.tsx:123:21", className: "text-2xl font-bold text-[#1A1A1A] uppercase font-display", children: b.title })] }), S.jsx("div", { "code-path": "src/components/TopicView.tsx:128:19", className: "space-y-6", children: b.tasks.map(T => S.jsx(C5, { "code-path": "src/components/TopicView.tsx:130:23", task: T, value: a(String(e.id), T.id), onChange: C => s(String(e.id), T.id, C) }, T.id)) })] }, b.id)), S.jsx("div", { "code-path": "src/components/TopicView.tsx:142:15", className: "flex justify-center pt-8 pb-4", children: S.jsxs("button", { "code-path": "src/components/TopicView.tsx:143:17", onClick: () => {
  const b = prompt("Введіть прізвище аспіранта:", "");

  if (!b || !b.trim()) return;

  const w = b.trim();
  const T = w
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "_");

  const C = new Date().toLocaleString("uk-UA");

  const A = R => String(R ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const R = I => {
    const B = a(String(e.id), I.id);

    if (!B || String(B).trim().length === 0) {
      return `<p class="empty">Не заповнено</p>`;
    }

    if (I.type === "source-table") {
      try {
        const U = JSON.parse(B);
        const H = Array.isArray(U)
          ? U.filter(J => Object.values(J).some(W => String(W || "").trim().length > 0))
          : [];

        if (H.length === 0) {
          return `<p class="empty">Не заповнено</p>`;
        }

        return `
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Автор / рік</th>
                <th>Назва праці</th>
                <th>Тематична група</th>
                <th>Що досліджує</th>
                <th>Метод / підхід</th>
                <th>Що дає для моєї теми</th>
                <th>Обмеження джерела</th>
              </tr>
            </thead>
            <tbody>
              ${H.map((J, W) => `
                <tr>
                  <td>${W + 1}</td>
                  <td>${A(J.authorYear)}</td>
                  <td>${A(J.title)}</td>
                  <td>${A(J.group)}</td>
                  <td>${A(J.focus)}</td>
                  <td>${A(J.method)}</td>
                  <td>${A(J.contribution)}</td>
                  <td>${A(J.limits)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `;
      } catch (U) {
        return `<p>${A(B).replace(/\n/g, "<br>")}</p>`;
      }
    }

    return `<p>${A(B).replace(/\n/g, "<br>")}</p>`;
  };

  const M = e.exercises.map(I => `
    <h2>${A(I.title)}</h2>
    ${I.tasks.map(B => `
      <div class="task">
        <h3>${A(B.title)}</h3>
        ${R(B)}
      </div>
    `).join("")}
  `).join("");

  const D = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${A(w)} — відповіді до теми ${A(e.id)}</title>
  <style>
    body {
      font-family: "Times New Roman", serif;
      font-size: 14pt;
      line-height: 1.45;
      color: #111;
    }

    h1 {
      font-size: 20pt;
      text-align: center;
      margin-bottom: 24px;
    }

    h2 {
      font-size: 16pt;
      margin-top: 28px;
      border-bottom: 1px solid #999;
      padding-bottom: 6px;
    }

    h3 {
      font-size: 14pt;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    .meta {
      margin-bottom: 24px;
    }

    .task {
      margin-bottom: 18px;
    }

    .empty {
      color: #777;
      font-style: italic;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 18px;
      font-size: 10pt;
    }

    th, td {
      border: 1px solid #777;
      padding: 6px;
      vertical-align: top;
    }

    th {
      background: #eeeeee;
      font-weight: bold;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Відповіді до теми ${A(e.id)}</h1>

  <div class="meta">
    <p><strong>Прізвище аспіранта:</strong> ${A(w)}</p>
    <p><strong>Дата експорту:</strong> ${A(C)}</p>
  </div>

  ${M}
</body>
</html>`;

  const _ = new Blob(["\ufeff", D], { type: "application/msword" });
  const q = URL.createObjectURL(_);
  const K = document.createElement("a");

  K.href = q;
  K.download = `${T}_topic-${e.id}-answers.doc`;
  K.click();

  URL.revokeObjectURL(q);
}, className: "btn-secondary flex items-center gap-2", children: [S.jsx(nN, { "code-path": "src/components/TopicView.tsx:162:19", className: "w-4 h-4" }), "Експортувати відповіді"] }) })]
          }), S.jsx("div", { "code-path": "src/components/TopicView.tsx:169:13", className: "lg:col-span-4", children: S.jsx("div", { "code-path": "src/components/TopicView.tsx:170:15", className: "lg:sticky lg:top-[140px]", children: S.jsx(w5, { "code-path": "src/components/TopicView.tsx:171:17", fieldProgress: g, checklistProgress: y, checklist: e.checklist, checklistState: h, onToggleChecklist: p }) }) })]
        })
      })]
    }, e.id)
  })
} const Sl = "analytical-methods-workbook-v2"; function A5() { const [e, a] = x.useState({}), [s, o] = x.useState({}), [l, u] = x.useState(!1); x.useEffect(() => { try { const b = localStorage.getItem(`${Sl}-data`), w = localStorage.getItem(`${Sl}-checklist`); b && a(JSON.parse(b)), w && o(JSON.parse(w)) } catch (b) { console.error("Failed to load workbook data:", b) } u(!0) }, []); const f = x.useCallback((b, w, T) => { a(C => { const A = { ...C, [b]: { ...C[b], [w]: T } }; return localStorage.setItem(`${Sl}-data`, JSON.stringify(A)), A }) }, []), h = x.useCallback((b, w) => e[b]?.[w] || "", [e]), m = x.useCallback((b, w) => { o(T => { const C = { ...T, [b]: { ...T[b], [w]: !T[b]?.[w] } }; return localStorage.setItem(`${Sl}-checklist`, JSON.stringify(C)), C }) }, []), p = x.useCallback((b, w) => s[b]?.[w] || !1, [s]), g = x.useCallback((b, w) => { const T = e[b] || {}, C = Object.values(T).filter(A => A.trim().length > 0).length; return Math.min(100, Math.round(C / w * 100)) }, [e]), y = x.useCallback((b, w) => { const T = s[b] || {}, C = Object.values(T).filter(Boolean).length; return Math.min(100, Math.round(C / w * 100)) }, [s]); return { isLoaded: l, saveField: f, getField: h, toggleChecklistItem: m, getChecklistItem: p, getTopicProgress: g, getTopicChecklistProgress: y } } const Cl = [
    {
    id: 1,
    title: "ФОРМУЛЮВАННЯ ДОСЛІДНИЦЬКОЇ ПРОБЛЕМИ ТА АНАЛІТИЧНОГО ФОКУСУ",
    subtitle: "Тема 1 • Проблема, питання, об’єкт, предмет, гіпотеза, завдання, доказова база",
    objective: "Навчитися формулювати наукову проблему, дослідницьке питання, об’єкт, предмет, гіпотезу, завдання та первинний тип доказової бази для власної дисертаційної теми.",
    heroImage: "/images/hero-topic1.jpg",
    theory: `Початковий етап дисертаційного дослідження полягає не лише у виборі теми, а у побудові її дослідницької логіки. Практична проблема описує небажаний стан або потребу змін у середовищі. Наукова проблема фіксує те, що ще недостатньо пояснено, виміряно, систематизовано або перевірено в межах наявних досліджень.

Аналітичний фокус визначає, через яку дослідницьку рамку буде розглядатися архітектурно-містобудівний об’єкт: морфологічну, функціонально-просторову, соціально-поведінкову, історико-культурну, екологічну, перцептивну, параметричну або іншу. Саме фокус допомагає відрізнити загальний опис теми від конкретного способу її аналізу.

Об’єкт відповідає на питання, яке явище або тип середовища досліджується. Предмет уточнює, які властивості, зв’язки, процеси або закономірності в межах цього об’єкта аналізуються. Гіпотеза має бути перевірюваною: вона повинна містити припущення про зв’язок між параметрами, чинниками або процесами. Завдання дослідження мають послідовно вести до перевірки гіпотези й отримання наукового результату.

У цій темі аспірант формує первинний каркас дисертації: від проблеми та питання до доказової бази. Результатом є не остаточний текст вступу, а робоча структура, яку можна уточнювати в наступних темах.`,
    totalFields: 11,
    exercises: [
      {
        id: "topic1-ex1",
        title: "Блок 1. Практична проблема, наукова проблема і дослідницьке питання",
        tasks: [
          {
            id: "topic1-comparison-problem",
            title: "Порівняння слабкого і сильного формулювання",
            type: "comparison",
            description: "Проаналізуйте, чим практична проблема або загальна тема відрізняється від наукової проблеми та дослідницького питання.",
            hint: "Сильне формулювання має показувати, що саме буде досліджено, через які параметри і який тип зв’язку або невизначеності потрібно пояснити.",
            comparisonPairs: [
              {
                id: "topic1-pair-problem",
                label: "Практична проблема / наукова проблема",
                bad: "У місті поганий стан громадських просторів, тому їх потрібно реконструювати.",
                good: "Існує невизначеність щодо того, які просторові, функціональні та поведінкові характеристики громадських просторів визначають інтенсивність і різноманітність їх використання в житлових районах.",
                explanation: "Слабкий варіант описує потребу практичної дії. Сильний варіант формулює дослідницьку невизначеність, яку можна перевіряти через показники, дані та методи."
              },
              {
                id: "topic1-pair-question",
                label: "Загальне питання / дослідницьке питання",
                bad: "Як зробити міське середовище комфортним і якісним?",
                good: "Які морфологічні та функціональні параметри житлового середовища найбільше впливають на пішохідну доступність, сценарії використання та просторову активність мешканців?",
                explanation: "Слабке питання є надто широким. Сильне питання окреслює параметри, тип середовища і зв’язки, які можна аналізувати."
              },
              {
                id: "topic1-pair-focus",
                label: "Опис теми / аналітичний фокус",
                bad: "Дослідження присвячене розвитку історичного центру міста.",
                good: "Дослідження аналізує, як зміна функцій перших поверхів, пішохідних зв’язків і режимів використання громадських просторів впливає на активність історичного центру міста.",
                explanation: "Сильне формулювання не просто називає територію, а визначає аналітичну рамку та зв’язок між просторовими характеристиками і процесами використання."
              }
            ]
          },
          {
            id: "topic1-text-problem",
            title: "Власна наукова проблема",
            type: "textarea",
            description: "Сформулюйте проблему власного дослідження як наукову суперечність, прогалину або невизначеність, а не як практичну потребу щось покращити чи реконструювати.",
            placeholder: `Практична ситуація, з якої виходить тема:
...

Наукова проблема полягає у тому, що:
...

Наявні підходи не дають змоги:
...

Для архітектури та містобудування це важливо, оскільки:
...`
          },
          {
            id: "topic1-text-question",
            title: "Дослідницьке питання",
            type: "textarea",
            description: "Сформулюйте одне головне дослідницьке питання. Воно має бути конкретним і придатним до перевірки через дані, методи або модель.",
            placeholder: `Головне дослідницьке питання:
...

Додаткові уточнювальні питання:
1. ...
2. ...
3. ...`
          }
        ]
      },
      {
        id: "topic1-ex2",
        title: "Блок 2. Аналітичний фокус дисертації",
        tasks: [
          {
            id: "topic1-case-focus",
            title: "Вибір аналітичного фокусу",
            type: "case-study",
            description: "Оберіть фокус, який найкраще відповідає дослідницькій ситуації.",
            caseStudy: {
              id: "topic1-case-study-focus",
              title: "Аналітичний фокус дослідження",
              cases: [
                {
                  id: "topic1-case-historic-center",
                  title: "Історичний центр",
                  scenario: "Історичний центр міста має цінну забудову, але втрачає активність: частина будівель недовантажена, перші поверхи функціонально слабкі, громадські простори використовуються нерівномірно.",
                  correctOptionId: "topic1-option-morph-functional",
                  explanation: "У цьому випадку важливо аналізувати не лише спадщину як цінність, а зв’язок між морфологією, функціями, пішохідними зв’язками та використанням середовища."
                },
                {
                  id: "topic1-case-transport-node",
                  title: "Транспортний вузол",
                  scenario: "Біля транспортного вузла накопичуються конфлікти між пішоходами, громадським транспортом, паркуванням, пересадками та комерційними функціями.",
                  correctOptionId: "topic1-option-network-access",
                  explanation: "Тут центральним є мережево-просторовий фокус: доступність, потоки, конфлікти руху, пересадкові зв’язки та організація вузлової території."
                },
                {
                  id: "topic1-case-housing-area",
                  title: "Новий житловий район",
                  scenario: "Новий житловий район має високу щільність забудови, але бракує локальних сервісів, громадських просторів, пішохідної зв’язності та сценаріїв повсякденного використання.",
                  correctOptionId: "topic1-option-daily-life",
                  explanation: "У цьому випадку доречно досліджувати повсякденну доступність, локальні сервіси, соціальну інфраструктуру і якість житлового середовища."
                }
              ],
              options: [
                {
                  id: "topic1-option-morph-functional",
                  label: "A. Морфологічно-функціональний фокус",
                  description: "Аналіз структури забудови, функцій перших поверхів, пішохідної зв’язності, громадських просторів і режимів використання середовища."
                },
                {
                  id: "topic1-option-network-access",
                  label: "B. Мережево-просторовий фокус",
                  description: "Аналіз доступності, потоків, вузлів, бар’єрів, пересадкових зв’язків і конфліктів руху."
                },
                {
                  id: "topic1-option-daily-life",
                  label: "C. Фокус повсякденної доступності",
                  description: "Аналіз доступності соціальної інфраструктури, локальних сервісів, маршрутів, дворів і громадських просторів житлового району."
                },
                {
                  id: "topic1-option-style",
                  label: "D. Стилістично-образний фокус",
                  description: "Аналіз композиційних, стилістичних і візуально-образних характеристик без прямого зв’язку з функціонуванням середовища."
                }
              ],
              correctHint: "Фокус має відповідати не лише темі, а й тому, які дані можна зібрати та який зв’язок потрібно пояснити."
            }
          },
          {
            id: "topic1-text-focus",
            title: "Аналітичний фокус власної теми",
            type: "textarea",
            description: "Визначте, через яку аналітичну рамку буде розглядатися ваша тема.",
            placeholder: `Мій аналітичний фокус:
морфологічний / функціонально-просторовий / соціально-поведінковий / історико-культурний / екологічний / перцептивний / параметричний / інший

Чому саме цей фокус є доречним:
...

Які характеристики середовища він дозволяє аналізувати:
...`
          }
        ]
      },
      {
        id: "topic1-ex3",
        title: "Блок 3. Об’єкт, предмет і межі дослідження",
        tasks: [
          {
            id: "topic1-text-object-subject",
            title: "Об’єкт і предмет дослідження",
            type: "textarea",
            description: "Запишіть об’єкт і предмет так, щоб вони не дублювали одне одного. Об’єкт — це ширше явище або тип середовища; предмет — конкретні властивості, зв’язки або процеси, які в ньому аналізуються.",
            placeholder: `Об’єкт дослідження:
...

Предмет дослідження:
...

Чим предмет відрізняється від об’єкта:
...`
          },
          {
            id: "topic1-text-boundaries",
            title: "Межі дослідження",
            type: "textarea",
            description: "Окресліть просторові, часові, типологічні та методичні межі дослідження.",
            placeholder: `Просторові межі:
...

Часові межі:
...

Типологічні межі:
...

Методичні межі:
...`
          }
        ]
      },
      {
        id: "topic1-ex4",
        title: "Блок 4. Гіпотеза і завдання дослідження",
        tasks: [
          {
            id: "topic1-comparison-hypothesis",
            title: "Перевірювана і неперевірювана гіпотеза",
            type: "comparison",
            description: "Проаналізуйте, чим перевірювана гіпотеза відрізняється від загального нормативного твердження.",
            hint: "Гіпотеза має містити припущення про зв’язок, який можна перевірити через показники, кейси, просторовий аналіз, якісні дані або модель.",
            comparisonPairs: [
              {
                id: "topic1-pair-hypothesis",
                label: "Гіпотеза",
                bad: "Якісне міське середовище позитивно впливає на життя людей.",
                good: "Передбачається, що підвищення просторової зв’язності, функціональної змішаності та видимості громадських просторів пов’язане зі зростанням інтенсивності й різноманітності їх використання.",
                explanation: "Слабка гіпотеза є загальною і нормативною. Сильна гіпотеза містить змінні та очікуваний зв’язок між ними."
              },
              {
                id: "topic1-pair-tasks",
                label: "Завдання дослідження",
                bad: "Вивчити тему, проаналізувати матеріали, зробити висновки.",
                good: "Визначити критерії просторової зв’язності; зібрати дані про функціональне наповнення; проаналізувати сценарії використання; зіставити показники між кейсами; перевірити відповідність результатів робочій гіпотезі.",
                explanation: "Сильні завдання показують послідовність дослідницьких дій і прямо пов’язані з гіпотезою."
              }
            ]
          },
          {
            id: "topic1-text-hypothesis",
            title: "Робоча гіпотеза",
            type: "textarea",
            description: "Сформулюйте робочу гіпотезу власного дослідження. Вона може бути уточнена пізніше, але вже зараз має бути перевірюваною.",
            placeholder: `Робоча гіпотеза:
Передбачається, що ...

Які параметри або чинники пов’язані між собою:
...

Як це можна перевірити:
...`
          },
          {
            id: "topic1-text-tasks",
            title: "Завдання дослідження",
            type: "textarea",
            description: "Сформулюйте 4–6 завдань дослідження так, щоб вони послідовно вели до перевірки гіпотези та отримання наукового результату.",
            placeholder: `1. Проаналізувати ...
2. Визначити ...
3. Систематизувати ...
4. Побудувати / розробити ...
5. Перевірити / зіставити ...
6. Обґрунтувати ...`
          }
        ]
      },
      {
        id: "topic1-ex5",
        title: "Блок 5. Тип доказової бази",
        tasks: [
          {
            id: "topic1-method-evidence",
            title: "Вибір типів доказової бази",
            type: "method-selection",
            description: "Оберіть, які типи доказів потрібні для перевірки вашої гіпотези. Це ще не остаточний вибір методів, а первинне розуміння доказової основи дослідження.",
            options: [
              "Літературно-теоретичні докази",
              "Картографічні матеріали",
              "Статистичні дані",
              "Морфологічний аналіз середовища",
              "Функціонально-просторовий аналіз",
              "Натурне обстеження",
              "Фотофіксація",
              "Структуроване спостереження",
              "Інтерв’ю або експертне опитування",
              "Порівняльний аналіз кейсів",
              "Нормативно-документальний аналіз",
              "Концептуальне, параметричне або просторове моделювання"
            ],
            hint: "Обирайте тільки ті типи доказів, які справді допомагають перевірити гіпотезу. Надмірний перелік без зв’язку з питанням дослідження послаблює логіку роботи."
          }
        ]
      },
      {
        id: "topic1-ex6",
        title: "Блок 6. Підсумкова рамка дисертаційного дослідження",
        tasks: [
          {
            id: "topic1-text-final-frame",
            title: "Підсумкова рамка теми 1",
            type: "textarea",
            description: "Зберіть усі елементи в один стислий каркас. Цей блок можна використати як основу для подальшого уточнення вступу або презентації теми.",
            placeholder: `Тема дослідження:
...

Наукова проблема:
...

Дослідницьке питання:
...

Аналітичний фокус:
...

Об’єкт:
...

Предмет:
...

Гіпотеза:
...

Завдання:
1. ...
2. ...
3. ...

Тип доказової бази:
...

Очікуваний науковий результат:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic1-check-1", label: "Сформульовано саме наукову проблему, а не лише практичну потребу" },
      { id: "topic1-check-2", label: "Дослідницьке питання має аналітичний, а не декларативний характер" },
      { id: "topic1-check-3", label: "Об’єкт і предмет не дублюють одне одного" },
      { id: "topic1-check-4", label: "Визначено просторові, часові, типологічні або методичні межі" },
      { id: "topic1-check-5", label: "Гіпотеза містить перевірюваний зв’язок" },
      { id: "topic1-check-6", label: "Завдання дослідження пов’язані з гіпотезою" },
      { id: "topic1-check-7", label: "Визначено типи доказової бази" }
    ]
  },

    {
    id: 2,
    title: "АНАЛІТИЧНА МАТРИЦЯ ДЖЕРЕЛ І МЕТОДОЛОГІЧНЕ ПОЗИЦІОНУВАННЯ ДОСЛІДЖЕННЯ",
    subtitle: "Тема 2 • Наукометричні бази, джерела, підходи, прогалина, методи",
    objective: "Навчитися формувати корпус джерел для дисертаційного дослідження, працювати з наукометричними базами, групувати джерела за теоретичними підходами, визначати наукову прогалину та встановлювати зв’язок між джерелами, методами і власною дослідницькою позицією.",
    heroImage: "/images/hero-topic2.jpg",
    theory: `Аналітичний огляд джерел у дисертаційному дослідженні не зводиться до переліку авторів або коротких анотацій. Його завдання полягає у тому, щоб показати, які теоретичні підходи вже сформувалися в дослідницькому полі, які методи застосовувалися, які типи об’єктів аналізувалися, які дані використовувалися і які питання залишаються недостатньо поясненими.

Робота з наукометричними базами потрібна не лише для пошуку літератури, а й для формування контрольованого корпусу джерел. Пошукові запити, фільтри за роками, типами документів, галузями знань, ключовими словами та цитованістю мають бути обґрунтованими. Інакше огляд стає випадковим і не може виконувати методологічну функцію.

Аналітична матриця джерел допомагає перейти від опису літератури до методологічного позиціонування. Для кожного джерела важливо визначити не лише тему, а й підхід, метод, тип доказів, внесок у власне дослідження та обмеження. На основі такої матриці аспірант може сформулювати наукову прогалину, обґрунтувати релевантні методи та показати, чим його дослідження відрізняється від уже наявних праць.

Результатом цієї теми має бути не список джерел, а попередня карта дослідницького поля: ключові групи джерел, теоретичні підходи, методичні лінії, наукова прогалина і власна позиція дослідника.`,
    totalFields: 12,
    exercises: [
      {
        id: "topic2-ex1",
        title: "Блок 1. Пошук і відбір джерел у наукометричних базах",
        tasks: [
          {
            id: "topic2-comparison-review",
            title: "Описовий і аналітичний огляд джерел",
            type: "comparison",
            description: "Проаналізуйте, чим відрізняється механічний перелік авторів від аналітичного огляду, який працює на методологію дисертації.",
            hint: "Аналітичний огляд має показувати не лише хто і про що писав, а які підходи, методи, докази та обмеження є в дослідницькому полі.",
            comparisonPairs: [
              {
                id: "topic2-pair-descriptive-review",
                label: "Описовий огляд / аналітичний огляд",
                bad: "Ян Гейл досліджує громадські простори. Джейн Джейкобс пише про життя міст. Крістофер Александер розглядає шаблони середовища.",
                good: "Джерела про якість міського середовища можна згрупувати за поведінковим, морфологічним і патерновим підходами. Для мого дослідження вони важливі як основа для формування критеріїв аналізу громадських просторів, а не як перелік авторитетних праць.",
                explanation: "Слабкий варіант лише називає авторів. Сильний варіант групує підходи, показує їхню роль у власній темі та готує перехід до визначення наукової прогалини."
              },
              {
                id: "topic2-pair-search-query",
                label: "Випадковий пошук / контрольована пошукова стратегія",
                bad: "Я знайшла кілька статей у Google Scholar за ключовими словами, які приблизно відповідають темі.",
                good: "Пошук джерел здійснюється через Scopus, Web of Science, Google Scholar та профільні репозитарії за комбінаціями ключових слів, часовими межами, типами документів і предметними галузями; результати додатково перевіряються за релевантністю до об’єкта, методу й дослідницького питання.",
                explanation: "Сильна стратегія пошуку є відтворюваною: можна пояснити, де, як і за якими критеріями були відібрані джерела."
              },
              {
                id: "topic2-pair-gap",
                label: "Загальна нестача досліджень / наукова прогалина",
                bad: "Тема недостатньо досліджена в українській науці.",
                good: "У наявних дослідженнях просторової якості громадських просторів недостатньо пояснено зв’язок між морфологічними характеристиками середовища, сценаріями повсякденного використання та кількісними показниками просторової доступності.",
                explanation: "Слабке формулювання лише декларує нестачу досліджень. Сильне формулювання показує, який саме зв’язок не пояснено і чому потрібне нове дослідження."
              }
            ]
          },
          {
            id: "topic2-case-search-strategy",
            title: "Кейс: вибір стратегії пошуку джерел",
            type: "case-study",
            description: "Оберіть стратегію пошуку джерел для різних дослідницьких ситуацій.",
            caseStudy: {
              id: "topic2-case-study-search",
              title: "Пошук і відбір джерел",
              cases: [
                {
                  id: "topic2-case-many-results",
                  title: "Занадто багато результатів",
                  scenario: "Пошук у Scopus за темою громадських просторів дав понад 600 результатів. Потрібно сформувати компактний корпус актуальних публікацій за останні 5–10 років для первинного огляду сучасного стану проблеми.",
                  correctOptionId: "topic2-option-filtered-search",
                  explanation: "У цьому випадку потрібне звуження корпусу через часові межі, предметні галузі, типи документів, ключові слова та змістову релевантність."
                },
                {
                  id: "topic2-case-classic-theory",
                  title: "Пошук теоретичної основи",
                  scenario: "Тема стосується якості міського середовища, але аспірант має зрозуміти, які теоретичні підходи сформували основу сучасних досліджень.",
                  correctOptionId: "topic2-option-snowball-theory",
                  explanation: "Для теоретичної основи доцільно поєднати пошук у базах із аналізом цитованих класичних праць та бібліографій ключових статей."
                },
                {
                  id: "topic2-case-method-gap",
                  title: "Пошук методів",
                  scenario: "У темі вже визначено об’єкт дослідження, але незрозуміло, які методи найчастіше застосовуються для аналізу подібних об’єктів.",
                  correctOptionId: "topic2-option-method-review",
                  explanation: "Тут потрібно аналізувати не лише тематику джерел, а й методичні розділи статей: які дані, інструменти, показники та процедури застосовувалися."
                }
              ],
              options: [
                {
                  id: "topic2-option-filtered-search",
                  label: "A. Фільтрований пошук у наукометричних базах",
                  description: "Застосування фільтрів за роками, типами документів, предметною галуззю, мовою, ключовими словами та змістовою релевантністю."
                },
                {
                  id: "topic2-option-snowball-theory",
                  label: "B. Теоретичний snowball-пошук",
                  description: "Пошук через бібліографії ключових праць, цитування, класичні джерела та авторів, які формують теоретичну рамку теми."
                },
                {
                  id: "topic2-option-method-review",
                  label: "C. Методологічний огляд джерел",
                  description: "Відбір джерел за тим, які методи, дані, показники, моделі або інструменти в них застосовано."
                },
                {
                  id: "topic2-option-random-search",
                  label: "D. Випадковий добір кількох зручних статей",
                  description: "Пошук без фіксації запитів, критеріїв відбору, баз даних і процедури перевірки релевантності."
                }
              ],
              correctHint: "Стратегія пошуку має відповідати меті: актуальний зріз, теоретична рамка або методологічний аналіз джерел."
            }
          },
          {
            id: "topic2-text-search-strategy",
            title: "Пошукова стратегія для власної теми",
            type: "textarea",
            description: "Опишіть, як ви будете шукати й відбирати джерела для власного дослідження.",
            placeholder: `Бази та платформи пошуку:
Scopus / Web of Science / Google Scholar / Dimensions / DOAJ / інституційні репозитарії / профільні видання / інше

Ключові слова українською:
1. ...
2. ...
3. ...

Ключові слова англійською:
1. ...
2. ...
3. ...

Комбінації пошукових запитів:
1. ...
2. ...
3. ...

Фільтри:
- роки: ...
- типи документів: ...
- предметні галузі: ...
- мова: ...
- географічний або типологічний контекст: ...

Критерії включення джерел:
...

Критерії виключення джерел:
...`
          }
        ]
      },
      {
        id: "topic2-ex2",
        title: "Блок 2. Бібліометрична карта і групування джерел",
        tasks: [
          {
            id: "topic2-chart-bibliometric",
            title: "Аналіз бібліометричної карти або карти ключових слів",
            type: "chart-analysis",
            chartAnalysis: {
              id: "topic2-bibliometric-map",
              title: "Бібліометрична карта ключових слів",
              image: "/images/topic2-bibliometric-map.jpg",
              description: "Цей блок призначений для аналізу карти ключових слів, кластерів тематики або візуалізації зв’язків між джерелами. Якщо окреме зображення ще не додано, його можна замінити пізніше.",
              questions: [
                {
                  id: "q1",
                  question: "Які тематичні кластери можна виділити на основі карти ключових слів або результатів пошуку?",
                  hint: "Кластери мають допомогти сформувати групи джерел, а не просто повторювати ключові слова."
                },
                {
                  id: "q2",
                  question: "Які підходи або методи найчастіше повторюються в джерелах?",
                  hint: "Звертайте увагу на методи, типи даних, просторові інструменти, моделі та об’єкти аналізу."
                },
                {
                  id: "q3",
                  question: "Яка зона карти або група джерел може вказувати на наукову прогалину?",
                  hint: "Прогалина може бути пов’язана з відсутністю зв’язку між темами, браком локального контексту або недостатнім використанням певного методу."
                }
              ]
            }
          },
          {
            id: "topic2-method-grouping",
            title: "Принцип систематизації джерел",
            type: "method-selection",
            description: "Оберіть принципи, за якими доцільно структурувати джерела у вашому огляді літератури.",
            selectionLabel: "Оберіть принципи систематизації джерел:",
            selectedLabel: "Обрані принципи:",
            justificationLabel: "Обґрунтування вибору: чому саме ці принципи відповідають вашій темі?",
            justificationPlaceholder: `Поясніть, як обраний принцип допоможе розкрити логіку вашого дослідження.

Наприклад:
Комбінований принцип доцільний, оскільки основні групи джерел будуть сформовані тематично, а всередині кожної групи можна простежити розвиток підходів і методів.

Важливо показати не лише спосіб упорядкування джерел, а й те, як цей спосіб допомагає виявити наукову прогалину.`,
            options: [
              "Тематичний принцип",
              "Хронологічний принцип",
              "Методологічний принцип",
              "Просторово-типологічний принцип",
              "Географічний / контекстуальний принцип",
              "За типом об’єкта дослідження",
              "За типом даних",
              "Комбінований принцип"
            ],
            hint: "Не потрібно обирати всі принципи. Оберіть той принцип або комбінацію принципів, які справді відповідають структурі вашої теми, корпусу джерел і логіці майбутнього огляду літератури."
          },
          {
            id: "topic2-text-source-groups",
            title: "Тематичні групи джерел власного дослідження",
            type: "textarea",
            description: "Сформуйте 4–6 попередніх груп джерел. Для кожної групи вкажіть, що її об’єднує і яку функцію вона виконує у вашій дисертації.",
            placeholder: `Група 1:
Назва групи: ...
Що об’єднує джерела: ...
Ключові автори / праці: ...
Яку роль група відіграє в моєму дослідженні: ...

Група 2:
Назва групи: ...
Що об’єднує джерела: ...
Ключові автори / праці: ...
Яку роль група відіграє в моєму дослідженні: ...

Група 3:
Назва групи: ...
Що об’єднує джерела: ...
Ключові автори / праці: ...
Яку роль група відіграє в моєму дослідженні: ...`
          }
        ]
      },
      {
        id: "topic2-ex3",
        title: "Блок 3. Аналітична матриця джерел",
        tasks: [
          {
            id: "topic2-source-table-1",
            title: "Аналітична матриця джерел",
            type: "source-table",
            description: "Заповніть матрицю для 5–7 ключових джерел за темою дисертації. Для кожного джерела важливо визначити не тільки зміст, а й підхід, метод, внесок і обмеження.",
            maxRows: 7,
            hint: "Добре джерело в матриці має методологічну функцію: воно може давати поняття, критерій, метод, приклад аналізу, тип даних або пояснювати обмеження наявних підходів."
          },
          {
            id: "topic2-text-matrix-summary",
            title: "Підсумок матриці джерел",
            type: "textarea",
            description: "На основі матриці сформулюйте, які теоретичні підходи, методи та обмеження повторюються у відібраних джерелах.",
            placeholder: `Матриця показує, що у джерелах переважають такі підходи:
1. ...
2. ...
3. ...

Найчастіше застосовуються такі методи:
1. ...
2. ...
3. ...

Основні обмеження джерел:
1. ...
2. ...
3. ...

Для мого дослідження це означає, що:
...`
          }
        ]
      },
      {
        id: "topic2-ex4",
        title: "Блок 4. Методологічне позиціонування і наукова прогалина",
        tasks: [
          {
            id: "topic2-comparison-gap-position",
            title: "Прогалина і методологічна позиція",
            type: "comparison",
            description: "Проаналізуйте різницю між загальним посиланням на літературу і чітким методологічним позиціонуванням.",
            comparisonPairs: [
              {
                id: "topic2-pair-position",
                label: "Методологічна позиція",
                bad: "У роботі будуть використані праці українських і зарубіжних авторів.",
                good: "Дослідження спирається на поєднання морфологічного аналізу міського середовища, підходів до вивчення повсякденного використання простору та інструментів просторової аналітики.",
                explanation: "Сильна позиція показує, які підходи формують основу роботи і як вони поєднуються між собою."
              },
              {
                id: "topic2-pair-methods",
                label: "Релевантні методи",
                bad: "У роботі буде використано аналіз літератури, порівняння, узагальнення і графічний метод.",
                good: "Для перевірки зв’язку між просторовою зв’язністю, функціональним наповненням і сценаріями використання доцільно поєднати морфологічний аналіз, картування функцій, спостереження та порівняльний аналіз кейсів.",
                explanation: "Слабкий варіант перелічує загальні методи. Сильний варіант пов’язує методи з дослідницьким питанням, змінними та типами доказів."
              }
            ]
          },
          {
            id: "topic2-text-position",
            title: "Методологічне позиціонування власного дослідження",
            type: "textarea",
            description: "Визначте, до яких теоретичних підходів належить ваше дослідження і які методи є релевантними для його виконання.",
            placeholder: `Моє дослідження спирається на такі теоретичні підходи:
1. ...
2. ...
3. ...

Ці підходи поєднуються так:
...

Для дослідження релевантні такі методи:
1. ...
2. ...
3. ...

Чому саме ці методи відповідають темі:
...`
          },
          {
            id: "topic2-text-gap",
            title: "Формулювання наукової прогалини",
            type: "textarea",
            description: "Сформулюйте наукову прогалину власного дослідження на основі аналізу джерел, а не як загальну фразу про недостатню вивченість теми.",
            placeholder: `Наявні дослідження пояснюють:
...

Водночас недостатньо з’ясовано:
...

Особливо не вистачає:
- зв’язку між ...
- даних про ...
- методів для ...
- локального / типологічного / просторового контексту ...

Саме тому моє дослідження спрямоване на:
...`
          },
          {
            id: "topic2-text-final-summary",
            title: "Підсумкова рамка теми 2",
            type: "textarea",
            description: "Зберіть результати теми 2 в один короткий підсумок: корпус джерел, групи, підходи, прогалина, релевантні методи.",
            placeholder: `Корпус джерел сформовано за такими критеріями:
...

Основні групи джерел:
1. ...
2. ...
3. ...

Ключові теоретичні підходи:
1. ...
2. ...

Наукова прогалина:
...

Релевантні методи:
1. ...
2. ...
3. ...

Як це уточнює мою дисертаційну тему:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic2-check-1", label: "Сформульовано стратегію пошуку джерел у наукометричних базах" },
      { id: "topic2-check-2", label: "Визначено ключові слова, фільтри та критерії добору джерел" },
      { id: "topic2-check-3", label: "Проаналізовано або підготовлено місце для бібліометричної карти / карти ключових слів" },
      { id: "topic2-check-4", label: "Сформовано тематичні або методологічні групи джерел" },
      { id: "topic2-check-5", label: "Заповнено аналітичну матрицю джерел" },
      { id: "topic2-check-6", label: "Визначено теоретичні підходи та релевантні методи" },
      { id: "topic2-check-7", label: "Сформульовано наукову прогалину дослідження" }
    ]
  },

    {
    id: 3,
    title: "ОПЕРАЦІОНАЛІЗАЦІЯ ПОНЯТЬ АРХІТЕКТУРНО-МІСТОБУДІВНОГО ДОСЛІДЖЕННЯ",
    subtitle: "Тема 3 • Поняття, критерії, індикатори, змінні, дані, одиниці аналізу",
    objective: "Навчитися перетворювати ключові поняття дисертаційного дослідження на систему критеріїв, індикаторів, змінних, джерел даних та одиниць аналізу.",
    heroImage: "/images/hero-topic3.jpg",
    theory: `Операціоналізація потрібна для того, щоб ключові поняття дослідження стали придатними до аналізу. У дисертації з архітектури та містобудування поняття на зразок «якість середовища», «доступність», «просторова зв’язність», «ідентичність», «комфорт», «стійкість», «людський масштаб» або «функціональна змішаність» не можуть залишатися лише загальними словами. Їх потрібно перевести в систему критеріїв, індикаторів, змінних і джерел даних.

Критерій визначає аналітичний вимір оцінювання. Індикатор показує, через що цей критерій може бути виявлений. Змінна або показник уточнює, що саме буде вимірюватися, порівнюватися або інтерпретуватися. Джерело даних показує, звідки буде отримано матеріал для аналізу. Одиниця аналізу визначає, що саме порівнюється: будівля, квартал, вулиця, громадський простір, маршрут, функція, ділянка, район, населений пункт або група користувачів.

Операціоналізація пов’язує теорію з методами. Якщо поняття не розкладене на критерії та індикатори, неможливо коректно обрати метод, побудувати карту, провести спостереження, порівняти кейси або сформувати модель. Тому результатом цієї теми має бути робоча схема: поняття → критерій → індикатор → змінна → джерело даних → одиниця аналізу → метод.`,
    totalFields: 12,
    exercises: [
      {
        id: "topic3-ex1",
        title: "Блок 1. Від поняття до операційного визначення",
        tasks: [
          {
            id: "topic3-comparison-operationalization",
            title: "Порівняння загального і операційного формулювання",
            type: "comparison",
            description: "Проаналізуйте, чому загальні поняття потрібно переводити в систему критеріїв, індикаторів і даних.",
            hint: "Операційне формулювання має показувати, через які ознаки, дані або показники поняття можна досліджувати.",
            comparisonPairs: [
              {
                id: "topic3-pair-quality",
                label: "Якість міського середовища",
                bad: "Якість середовища визначається комфортом, зручністю і привабливістю.",
                good: "Якість середовища аналізується через функціональну доступність, просторову зв’язність, різноманітність використання, людський масштаб, візуальну читабельність, безбар’єрність та екологічний комфорт.",
                explanation: "Слабке формулювання лишається оціночним. Сильне формулювання задає аналітичні виміри, які можна деталізувати через індикатори, дані та методи."
              },
              {
                id: "topic3-pair-accessibility",
                label: "Доступність",
                bad: "Доступність означає, що об’єктом зручно користуватися.",
                good: "Доступність визначається через пішохідну відстань, часову досяжність, кількість бар’єрів маршруту, щільність мережі шляхів, наявність функцій у радіусі повсякденного користування та доступність для маломобільних груп.",
                explanation: "Операційне формулювання дозволяє працювати з маршрутами, картами, польовим обстеженням, GIS-даними та порівнянням територій."
              },
              {
                id: "topic3-pair-identity",
                label: "Ідентичність середовища",
                bad: "Ідентичність середовища — це його унікальний характер.",
                good: "Ідентичність середовища може аналізуватися через історичну тяглість планувальної структури, збереженість морфології забудови, локальні символічні маркери, характер використання простору та сприйняття користувачів.",
                explanation: "Сильний варіант не обмежується загальною оцінкою, а визначає, які характеристики можуть бути виявлені через карти, архівні матеріали, фотофіксацію, спостереження або інтерв’ю."
              },
              {
                id: "topic3-pair-density",
                label: "Щільність забудови",
                bad: "Щільність забудови показує, наскільки територія забудована.",
                good: "Щільність забудови може аналізуватися через коефіцієнт забудови ділянки, поверховість, FAR / FSI, інтенсивність використання території, співвідношення відкритих і забудованих просторів та забезпеченість громадськими просторами.",
                explanation: "Операційне визначення показує, що щільність є не одним загальним враженням, а групою вимірюваних параметрів."
              }
            ]
          },
          {
            id: "topic3-text-key-concepts",
            title: "Ключові поняття власного дослідження",
            type: "textarea",
            description: "Визначте 3–5 ключових понять вашої дисертаційної теми та сформулюйте для кожного робоче визначення.",
            placeholder: `Поняття 1:
...

Робоче визначення:
...

Чому це поняття важливе для моєї теми:
...

Поняття 2:
...

Робоче визначення:
...

Чому це поняття важливе для моєї теми:
...

Поняття 3:
...`
          }
        ]
      },
      {
        id: "topic3-ex2",
        title: "Блок 2. Критерії, індикатори і змінні",
        tasks: [
          {
            id: "topic3-case-indicators",
            title: "Кейс: вибір системи індикаторів",
            type: "case-study",
            description: "Оберіть систему індикаторів, яка найкраще відповідає дослідницькій ситуації.",
            caseStudy: {
              id: "topic3-case-study-indicators",
              title: "Операціоналізація архітектурно-містобудівних понять",
              cases: [
                {
                  id: "topic3-case-public-space",
                  title: "Якість громадського простору",
                  scenario: "Потрібно оцінити якість громадського простору у житловому районі. Дослідник має уникнути загального опису «зручно / незручно» і сформувати систему показників.",
                  correctOptionId: "topic3-option-public-space-mixed",
                  explanation: "Для громадського простору потрібне поєднання просторових, функціональних, поведінкових і перцептивних індикаторів."
                },
                {
                  id: "topic3-case-heritage-quarter",
                  title: "Ідентичність історичного кварталу",
                  scenario: "Дослідження має пояснити, як збереження морфологічної структури, функціональні зміни та сприйняття користувачів впливають на ідентичність історичного кварталу.",
                  correctOptionId: "topic3-option-heritage-identity",
                  explanation: "У цьому випадку потрібні морфологічні, історико-культурні, функціональні та перцептивні індикатори."
                },
                {
                  id: "topic3-case-transport-access",
                  title: "Доступність транспортного вузла",
                  scenario: "Потрібно оцінити доступність транспортного вузла для пішоходів, громадського транспорту та пересадок між різними видами мобільності.",
                  correctOptionId: "topic3-option-network-access",
                  explanation: "Для транспортного вузла ключовими є мережеві, часові, бар’єрні та функціонально-просторові показники."
                }
              ],
              options: [
                {
                  id: "topic3-option-public-space-mixed",
                  label: "A. Просторові, функціональні, поведінкові та перцептивні індикатори",
                  description: "Пішохідна доступність, зв’язність, функціональна різноманітність, активність користувачів, тривалість перебування, сценарії використання, відчуття безпеки."
                },
                {
                  id: "topic3-option-heritage-identity",
                  label: "B. Морфологічні, історико-культурні, функціональні та перцептивні індикатори",
                  description: "Планувальна структура, історична тяглість, характер забудови, локальні символічні маркери, функціональні зміни, сприйняття користувачів."
                },
                {
                  id: "topic3-option-network-access",
                  label: "C. Мережеві, часові, бар’єрні та функціонально-просторові показники",
                  description: "Часова досяжність, кількість пересадок, бар’єри руху, щільність пішохідної мережі, конфлікти потоків, зв’язок із функціями навколишньої території."
                },
                {
                  id: "topic3-option-general-impression",
                  label: "D. Загальна оцінка зручності, краси та сучасності",
                  description: "Опис враження від об’єкта без визначення критеріїв, джерел даних, одиниць аналізу та способу перевірки."
                }
              ],
              correctHint: "Система індикаторів має відповідати поняттю, об’єкту, дослідницькому питанню і реальним джерелам даних."
            }
          },
          {
            id: "topic3-text-criteria-indicators",
            title: "Система критеріїв, індикаторів і змінних",
            type: "textarea",
            description: "Побудуйте попередню систему критеріїв, індикаторів і змінних для власного дослідження.",
            placeholder: `Ключове поняття:
...

Критерій 1:
...

Індикатори:
1. ...
2. ...
3. ...

Змінні / показники:
1. ...
2. ...
3. ...

Як це можна виміряти або інтерпретувати:
...

Критерій 2:
...

Індикатори:
1. ...
2. ...
3. ...

Змінні / показники:
1. ...
2. ...
3. ...`
          },
          {
            id: "topic3-method-indicator-type",
            title: "Типи індикаторів у власному дослідженні",
            type: "method-selection",
            description: "Оберіть типи індикаторів, які можуть бути релевантними для вашої теми.",
            selectionLabel: "Оберіть типи індикаторів:",
            selectedLabel: "Обрані типи індикаторів:",
            justificationLabel: "Обґрунтування вибору: чому ці індикатори відповідають вашій темі?",
            justificationPlaceholder: `Поясніть, які індикатори потрібні для перевірки вашої гіпотези.

Наприклад:
Для теми про якість громадських просторів потрібні просторові, функціональні та поведінкові індикатори, тому що дослідження має зіставити структуру середовища з реальними сценаріями його використання.`,
            options: [
              "Морфологічні індикатори",
              "Функціонально-просторові індикатори",
              "Поведінкові індикатори",
              "Перцептивні індикатори",
              "Соціально-демографічні індикатори",
              "Екологічні / кліматичні індикатори",
              "Історико-культурні індикатори",
              "Нормативні індикатори",
              "Економічні індикатори",
              "Параметричні / обчислювальні індикатори"
            ],
            hint: "Не обирайте всі типи індикаторів. Оберіть тільки ті, які реально потрібні для вашого дослідницького питання."
          }
        ]
      },
      {
        id: "topic3-ex3",
        title: "Блок 3. Джерела даних і одиниці аналізу",
        tasks: [
          {
            id: "topic3-comparison-units",
            title: "Показник, джерело даних і одиниця аналізу",
            type: "comparison",
            description: "Проаналізуйте, чому показник має бути пов’язаний із конкретним джерелом даних і одиницею аналізу.",
            comparisonPairs: [
              {
                id: "topic3-pair-data-source",
                label: "Джерело даних",
                bad: "Для аналізу доступності будуть використані карти і статистика.",
                good: "Для аналізу доступності будуть використані GIS-шари вулично-дорожньої мережі, розташування зупинок громадського транспорту, межі житлових кварталів, польова фіксація бар’єрів руху та розрахунок пішохідної досяжності у хвилинах.",
                explanation: "Сильне формулювання уточнює не лише тип даних, а й їхній зміст, формат і функцію в аналізі."
              },
              {
                id: "topic3-pair-unit-analysis",
                label: "Одиниця аналізу",
                bad: "Дослідження аналізує міське середовище.",
                good: "Одиницею аналізу є житловий квартал; для кожного кварталу порівнюються пішохідна доступність громадських просторів, щільність вуличної мережі, функціональна змішаність і наявність бар’єрів руху.",
                explanation: "Одиниця аналізу має бути конкретною. Саме вона визначає, що буде порівнюватися між собою."
              }
            ]
          },
          {
            id: "topic3-text-data-sources",
            title: "Джерела даних для власних індикаторів",
            type: "textarea",
            description: "Для кожного індикатора визначте джерело даних, формат матеріалу та обмеження.",
            placeholder: `Індикатор 1:
...

Джерело даних:
open data / GIS-шари / кадастр / генеральний план / ДБН / статистика / польове обстеження / фотофіксація / спостереження / інтерв’ю / архівні матеріали / власне моделювання / інше

Формат даних:
таблиця / карта / shapefile / geojson / csv / фото / текстовий документ / схема / модель / інше

Обмеження джерела:
...

Індикатор 2:
...

Джерело даних:
...

Формат даних:
...

Обмеження джерела:
...`
          },
          {
            id: "topic3-text-units-analysis",
            title: "Одиниці аналізу",
            type: "textarea",
            description: "Визначте одиниці аналізу для власного дослідження. Вони мають відповідати об’єкту, предмету, індикаторам і методу.",
            placeholder: `Основна одиниця аналізу:
будівля / квартал / вулиця / громадський простір / маршрут / функція / ділянка / район / населений пункт / група користувачів / інше

Чому саме ця одиниця аналізу:
...

Що буде порівнюватися між одиницями аналізу:
...

Який масштаб аналізу:
мікро / мезо / макро

Ризики неправильного вибору одиниці аналізу:
...`
          }
        ]
      },
      {
        id: "topic3-ex4",
        title: "Блок 4. Операційна схема дослідження",
        tasks: [
          {
            id: "topic3-text-operational-matrix",
            title: "Операційна матриця дослідження",
            type: "textarea",
            description: "Складіть підсумкову матрицю: поняття → критерій → індикатор → змінна → джерело даних → одиниця аналізу → метод.",
            placeholder: `Поняття 1:
...

Критерій:
...

Індикатор:
...

Змінна / показник:
...

Джерело даних:
...

Одиниця аналізу:
...

Метод:
...

Очікуваний результат аналізу:
...

---

Поняття 2:
...

Критерій:
...

Індикатор:
...

Змінна / показник:
...

Джерело даних:
...

Одиниця аналізу:
...

Метод:
...`
          },
          {
            id: "topic3-text-limits",
            title: "Межі вимірювання та інтерпретації",
            type: "textarea",
            description: "Визначте, які показники можна виміряти кількісно, які потребують якісної інтерпретації, а які можуть бути спірними.",
            placeholder: `Кількісно можна оцінити:
1. ...
2. ...
3. ...

Якісної інтерпретації потребує:
1. ...
2. ...
3. ...

Показники, які можуть бути спірними:
1. ...
2. ...

Ризик спрощення полягає у тому, що:
...

Як цей ризик можна зменшити:
...`
          },
          {
            id: "topic3-text-final-summary",
            title: "Підсумкова рамка теми 3",
            type: "textarea",
            description: "Зберіть результати теми 3 в один короткий підсумок.",
            placeholder: `У моєму дослідженні ключовими є такі поняття:
1. ...
2. ...
3. ...

Вони операціоналізуються через такі критерії:
1. ...
2. ...
3. ...

Основні індикатори:
1. ...
2. ...
3. ...

Основні джерела даних:
1. ...
2. ...
3. ...

Одиниці аналізу:
...

Ця операційна схема допоможе перейти до наступного етапу дослідження, тому що:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic3-check-1", label: "Визначено ключові поняття дослідження" },
      { id: "topic3-check-2", label: "Для кожного ключового поняття сформульовано робоче визначення" },
      { id: "topic3-check-3", label: "Поняття переведено у критерії" },
      { id: "topic3-check-4", label: "Для критеріїв визначено індикатори та змінні" },
      { id: "topic3-check-5", label: "Визначено джерела даних для основних індикаторів" },
      { id: "topic3-check-6", label: "Окреслено одиниці аналізу" },
      { id: "topic3-check-7", label: "Сформовано операційну матрицю дослідження" }
    ]
  },

    {
    id: 4,
    title: "КІЛЬКІСНИЙ І ПРОСТОРОВИЙ АНАЛІЗ АРХІТЕКТУРНО-МІСТОБУДІВНОГО ОБ’ЄКТА",
    subtitle: "Тема 4 • Відкриті дані, описова статистика, карти, діаграми, інтерпретація",
    objective: "Навчитися опрацьовувати відкриті табличні та просторові дані, виконувати базову описову статистику, аналізувати точкові координатні дані, оцінювати просторову доступність і формулювати попередню інтерпретацію результатів для архітектурно-містобудівного дослідження.",
    heroImage: "/images/hero-topic4.jpg",
    theory: `Кількісний і просторовий аналіз потрібні для того, щоб дослідницьке твердження спиралося не лише на опис, а й на перевірювані дані. В архітектурно-містобудівному дослідженні такими даними можуть бути демографічні показники, щільність забудови, площі озеленення, пішохідна доступність, розміщення громадських просторів, функціональна структура, транспортні вузли, об’єкти соціальної інфраструктури або результати польового обстеження.

Описова статистика дозволяє побачити базові характеристики набору даних: кількість спостережень, мінімальні та максимальні значення, середнє, медіану, розкид значень. Ці показники не замінюють інтерпретацію, але допомагають виявити нерівномірність, відмінності між територіями, аномальні значення або потенційні проблемні зони.

Просторовий аналіз пов’язує показники з територією. Навіть проста таблиця з координатами може бути використана для попереднього GIS-аналізу: побудови точкової схеми, оцінки просторової концентрації, визначення меж поширення об’єктів або перевірки доступності до сервісів у заданому радіусі.

У цій темі аспірант працює з відкритими або умовними даними без переходу до повноцінного GIS-ПЗ. Мета заняття — зрозуміти логіку: дані → таблиця → показники → карта / схема → попередній висновок → межі інтерпретації.`,
    totalFields: 10,
    exercises: [
      {
        id: "topic4-ex1",
        title: "Блок 1. Підготовка набору даних",
        tasks: [
          {
            id: "topic4-comparison-data",
            title: "Порівняння описового і доказового використання даних",
            type: "comparison",
            description: "Проаналізуйте, чим відрізняється декоративне використання цифр або карт від доказового використання даних у дослідженні.",
            hint: "Кількісні або просторові дані мають відповідати дослідницькому питанню, одиниці аналізу та гіпотезі.",
            comparisonPairs: [
              {
                id: "topic4-pair-data-purpose",
                label: "Дані як ілюстрація / дані як доказ",
                bad: "У роботі буде наведено статистику населення і карту району для наочності.",
                good: "Статистичні дані про щільність населення, площу громадських просторів і доступність соціальної інфраструктури будуть використані для порівняння житлових кварталів і перевірки гіпотези про нерівномірність забезпечення середовища.",
                explanation: "Слабкий варіант використовує дані як додаток до тексту. Сильний варіант пояснює, яке твердження перевіряється за допомогою даних."
              },
              {
                id: "topic4-pair-map-purpose",
                label: "Карта як ілюстрація / карта як аналітичний інструмент",
                bad: "Карта показує розташування об’єктів на території.",
                good: "Карта дозволяє порівняти просторову концентрацію сервісів, виявити зони недостатньої доступності та зіставити їх із межами житлових кварталів.",
                explanation: "Аналітична карта має відповідати на дослідницьке питання або допомагати перевіряти конкретний просторовий зв’язок."
              },
              {
                id: "topic4-pair-limits",
                label: "Висновок без меж / коректна інтерпретація",
                bad: "Оскільки в районі мало зелених зон, середовище є неякісним.",
                good: "Низька площа зелених зон на одного мешканця може свідчити про дефіцит рекреаційної інфраструктури, але для оцінки якості середовища потрібно додатково врахувати доступність, стан просторів, сценарії використання та бар’єри руху.",
                explanation: "Кількісний показник не повинен автоматично підміняти комплексну інтерпретацію."
              }
            ]
          },
          {
            id: "topic4-text-object-data",
            title: "Об’єкт аналізу, одиниця спостереження і набір даних",
            type: "textarea",
            description: "Визначте, який об’єкт або фрагмент середовища буде аналізуватися, які одиниці порівнюються і які дані потрібні.",
            placeholder: `Об’єкт аналізу:
...

Територіальні межі:
...

Одиниця аналізу:
квартал / вулиця / громадський простір / будівля / ділянка / маршрут / транспортний вузол / район / інше

Що буде порівнюватися між одиницями аналізу:
...

Потрібні дані:
1. ...
2. ...
3. ...

Джерела даних:
open data / GIS-шари / кадастр / статистика / польове обстеження / фотофіксація / власна таблиця / інше`
          }
        ]
      },
      {
        id: "topic4-ex2",
        title: "Блок 2. Табличний аналіз і описова статистика",
        tasks: [
          {
            id: "topic4-data-table-analysis",
            title: "Описова статистика відкритих або умовних даних",
            type: "data-table-analysis",
            description: "Вставте CSV-таблицю з відкритими або умовними даними. Оберіть числову колонку й проаналізуйте базові статистичні показники: кількість спостережень, мінімум, максимум, середнє, медіану та стандартне відхилення.",
            placeholder: `district,population,density,green_area,public_space_area
Район A,12000,8500,14,2.4
Район B,18000,9600,9,1.8
Район C,9000,6100,22,3.1
Район D,15000,7200,16,2.7`
          },
          {
            id: "topic4-text-stat-interpretation",
            title: "Інтерпретація описової статистики",
            type: "textarea",
            description: "На основі отриманих статистичних показників сформулюйте попередній висновок. Вкажіть, що саме показують значення і які висновки ще не можна робити без додаткових даних.",
            placeholder: `Обрана колонка для аналізу:
...

Що показують мінімальне і максимальне значення:
...

Що показує середнє значення:
...

Чи є помітна нерівномірність між територіями:
...

Які висновки можна зробити:
...

Які висновки не можна робити лише на основі цієї таблиці:
...`
          }
        ]
      },
      {
        id: "topic4-ex3",
        title: "Блок 3. Просторовий аналіз точкових даних",
        tasks: [
          {
            id: "topic4-gis-point-analysis",
            title: "Побудова просторової схеми за координатами",
            type: "gis-point-analysis",
            description: "Вставте CSV-таблицю з координатами об’єктів. Обов’язкові колонки: name, lat, lon. Компонент побудує просту точкову схему та покаже межі координат.",
            placeholder: `name,lat,lon
Площа А,49.841,24.031
Парк B,49.850,24.020
Зупинка C,49.845,24.027
Школа D,49.848,24.034
Сквер E,49.839,24.025`
          },
          {
            id: "topic4-text-spatial-interpretation",
            title: "Попередня просторова інтерпретація",
            type: "textarea",
            description: "Опишіть, що показує розміщення точок. Зверніть увагу на концентрацію, розриви, периферійні положення, можливі просторові конфлікти або потребу в додаткових шарах.",
            placeholder: `Точки розміщені:
рівномірно / концентровано / фрагментовано / вздовж осі / на периферії / інше

Можливі просторові закономірності:
...

Можливі проблемні зони:
...

Яких даних бракує для повнішого GIS-аналізу:
межі кварталів / вулична мережа / населення / функції / бар’єри / рельєф / інше

Попередній висновок:
...`
          }
        ]
      },
      {
        id: "topic4-ex4",
        title: "Блок 4. Аналіз доступності до сервісів",
        tasks: [
          {
            id: "topic4-accessibility-analysis",
            title: "Оцінка доступності до сервісів у заданому радіусі",
            type: "accessibility-analysis",
            description: "Вставте точки двох типів: origin і service. Origin — це житлові квартали, будинки або точки попиту. Service — школи, парки, зупинки, громадські простори або інші об’єкти забезпечення. Компонент порахує, які origin-точки мають service у заданому радіусі.",
            placeholder: `name,type,lat,lon
Квартал 1,origin,49.841,24.031
Квартал 2,origin,49.846,24.021
Квартал 3,origin,49.852,24.018
Школа 1,service,49.843,24.029
Парк 1,service,49.850,24.025
Зупинка 1,service,49.840,24.036`
          },
          {
            id: "topic4-text-accessibility-interpretation",
            title: "Інтерпретація результатів доступності",
            type: "textarea",
            description: "Проаналізуйте, що означає отриманий відсоток забезпеченості. Вкажіть, які території є доступними, які залишаються поза радіусом і які обмеження має такий розрахунок.",
            placeholder: `Радіус доступності:
...

Частка забезпечених origin-точок:
...

Які точки або території мають доступ до сервісу:
...

Які точки або території залишаються поза радіусом:
...

Що цей результат може означати для архітектурно-містобудівного аналізу:
...

Обмеження такого розрахунку:
- відстань рахується приблизно;
- не враховується реальна пішохідна мережа;
- не враховуються бар’єри;
- не враховується якість сервісу;
- інше: ...`
          }
        ]
      },
      {
        id: "topic4-ex5",
        title: "Блок 5. Карта, діаграма і доказова функція візуалізації",
        tasks: [
          {
            id: "topic4-chart-analysis",
            title: "Аналіз картографічного або діаграмного матеріалу",
            type: "chart-analysis",
            chartAnalysis: {
              id: "topic4-spatial-chart",
              title: "Карта / діаграма просторового аналізу",
              image: "/images/topic4-spatial-analysis.jpg",
              description: "Карта демонструє приклад просторової візуалізації міських даних. Вона показує, як окремі показники міського середовища можуть бути подані у вигляді зрозумілого візуального аргументу для аналізу території. Джерело: https://lun.ua/misto/shkola",
              questions: [
                {
                  id: "q1",
                  question: "Яке дослідницьке твердження може підтверджувати ця карта або діаграма?",
                  hint: "Візуальний матеріал має виконувати доказову функцію, а не бути лише ілюстрацією."
                },
                {
                  id: "q2",
                  question: "Які дані потрібні для побудови такого матеріалу?",
                  hint: "Вкажіть джерела, формат і можливі обмеження даних."
                },
                {
                  id: "q3",
                  question: "Які висновки не можна робити лише на основі цієї карти або діаграми?",
                  hint: "Визначте межі інтерпретації."
                }
              ]
            }
          },
          {
            id: "topic4-text-visual-function",
            title: "Доказова функція власної карти або діаграми",
            type: "textarea",
            description: "Опишіть, яку карту, діаграму або просторову схему потрібно побудувати для вашої теми і яке твердження вона має підтверджувати.",
            placeholder: `Тип візуалізації:
карта точок / карта доступності / діаграма порівняння / гістограма / схема розподілу / інше

Яке твердження вона має підтвердити:
...

Які дані потрібні:
...

Який метод обробки потрібен:
...

Як ця візуалізація буде використана в дисертації:
...`
          }
        ]
      },
      {
        id: "topic4-ex6",
        title: "Блок 6. Підсумкова інтерпретація кількісного і просторового аналізу",
        tasks: [
          {
            id: "topic4-text-final-summary",
            title: "Підсумкова рамка теми 4",
            type: "textarea",
            description: "Зберіть результати теми 4 в один короткий підсумок: дані, показники, статистика, просторова схема, доступність, межі інтерпретації.",
            placeholder: `Набір даних, який я використовую або планую використати:
...

Основні показники:
1. ...
2. ...
3. ...

Результати описової статистики показують:
...

Просторовий аналіз показує:
...

Аналіз доступності показує:
...

Це допомагає перевірити мою гіпотезу, тому що:
...

Основні обмеження аналізу:
1. ...
2. ...
3. ...

Що потрібно уточнити на наступному етапі:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic4-check-1", label: "Визначено об’єкт, територіальні межі та одиницю аналізу" },
      { id: "topic4-check-2", label: "Підготовлено або описано набір відкритих / умовних табличних даних" },
      { id: "topic4-check-3", label: "Виконано базову описову статистику для числового показника" },
      { id: "topic4-check-4", label: "Побудовано просторову схему за координатами" },
      { id: "topic4-check-5", label: "Виконано попередній аналіз доступності до сервісів" },
      { id: "topic4-check-6", label: "Сформульовано доказову функцію карти або діаграми" },
      { id: "topic4-check-7", label: "Окреслено межі інтерпретації кількісного і просторового аналізу" }
    ]
  },

    {
    id: 5,
    title: "ЯКІСНІ ТА ЗМІШАНІ МЕТОДИ ДОСЛІДЖЕННЯ МІСЬКОГО СЕРЕДОВИЩА",
    subtitle: "Тема 5 • Спостереження, картування поведінки, досвід користувачів, інтерв’ю, документи, інтеграція даних",
    objective: "Навчитися обирати якісні та змішані методи дослідження міського середовища, планувати спостереження, картування поведінки, інтерв’ю, аналіз документів і пояснювати, як якісні дані інтегруються з кількісними та просторовими результатами.",
    heroImage: "/images/hero-topic5.jpg",
    theory: `Якісні методи потрібні тоді, коли архітектурно-містобудівне дослідження має пояснити не лише кількісні показники, а й поведінку, досвід, мотиви, практики використання простору, конфлікти, сприйняття та управлінські рішення. Карта або статистика можуть показати просторову нерівномірність, але не завжди пояснюють, чому люди уникають певного простору, як саме вони ним користуються або які бар’єри вважають суттєвими.

Спостереження дозволяє фіксувати поведінку користувачів у конкретному місці й часі. Картування поведінки переводить ці спостереження у просторову форму: маршрути, місця зупинки, зони конфліктів, точки тяжіння, неформальні сценарії використання. Інтерв’ю та аналіз користувацького досвіду дають змогу з’ясувати причини поведінки, оцінки, очікування, проблеми доступності, безпеки або комфорту. Аналіз документів потрібний для вивчення нормативних, стратегічних, проєктних або управлінських рамок, у яких формується міське середовище.

Змішані методи поєднують кількісні, просторові та якісні дані. Наприклад, аналіз доступності може показати, що парк формально розташований у радіусі 500 метрів, але спостереження й інтерв’ю можуть виявити бар’єри, небезпечні переходи, слабке освітлення або відсутність сценаріїв використання. Тому результатом цієї теми має бути не перелік методів, а обґрунтований план збору якісних даних і пояснення, як вони працюють разом із кількісною та просторовою доказовою базою.`,
    totalFields: 12,
    exercises: [
      {
        id: "topic5-ex1",
        title: "Блок 1. Роль якісних методів у дослідженні міського середовища",
        tasks: [
          {
            id: "topic5-comparison-qualitative",
            title: "Порівняння слабкого і сильного застосування якісних методів",
            type: "comparison",
            description: "Проаналізуйте, чому якісний метод має бути пов’язаний із дослідницьким питанням, а не додаватися до роботи формально.",
            hint: "Сильне формулювання має вказувати, що саме фіксується, у кого або де збираються дані, як вони будуть інтерпретовані і яку роль відіграють у перевірці гіпотези.",
            comparisonPairs: [
              {
                id: "topic5-pair-observation",
                label: "Спостереження",
                bad: "Потрібно провести спостереження, щоб краще зрозуміти простір.",
                good: "Структуроване спостереження використовується для фіксації інтенсивності, тривалості та типів поведінки користувачів у різних зонах громадського простору протягом ранкового, денного та вечірнього часових інтервалів.",
                explanation: "Слабкий варіант не пояснює процедуру збору даних. Сильний варіант визначає, що саме фіксується, де, коли і для якого аналітичного результату."
              },
              {
                id: "topic5-pair-behavior-map",
                label: "Картування поведінки",
                bad: "На схемі буде показано, як люди користуються простором.",
                good: "Картування поведінки фіксує маршрути руху, місця зупинки, зони тривалого перебування, конфлікти між пішоходами й транспортом та просторові точки, які притягують або відштовхують користувачів.",
                explanation: "Сильний варіант перетворює спостереження на просторові дані, які можна зіставити з планувальною структурою, функціями та доступністю."
              },
              {
                id: "topic5-pair-interview",
                label: "Інтерв’ю",
                bad: "Потрібно поговорити з мешканцями про їхню думку.",
                good: "Напівструктуровані інтерв’ю з мешканцями використовуються для виявлення причин незадоволення доступністю, безпекою, комфортом і сценаріями використання громадських просторів житлового району.",
                explanation: "Сильний варіант визначає групу респондентів, предмет розмови та аналітичну функцію інтерв’ю."
              },
              {
                id: "topic5-pair-documents",
                label: "Аналіз документів",
                bad: "Потрібно переглянути стратегії, нормативи і програми розвитку.",
                good: "Аналіз документів використовується для зіставлення задекларованих цілей просторового розвитку з фактичними інструментами реалізації, нормативними обмеженнями та результатами польового аналізу середовища.",
                explanation: "Сильний варіант показує, як документи працюють у доказовій логіці дослідження, а не просто додаються до списку джерел."
              }
            ]
          },
          {
            id: "topic5-text-qualitative-role",
            title: "Роль якісних методів у власному дослідженні",
            type: "textarea",
            description: "Поясніть, що саме у вашій темі неможливо повністю з’ясувати лише через статистику, GIS або кількісні показники.",
            placeholder: `Кількісні або просторові дані в моєму дослідженні можуть показати:
...

Але вони не пояснюють:
...

Для цього потрібні якісні методи, тому що:
...

Якісні дані допоможуть уточнити:
- поведінку користувачів;
- сценарії використання;
- причини конфліктів;
- сприйняття середовища;
- управлінські або нормативні обмеження;
- інше: ...`
          }
        ]
      },
      {
        id: "topic5-ex2",
        title: "Блок 2. Вибір якісного або змішаного методу",
        tasks: [
          {
            id: "topic5-method-selection",
            title: "Вибір методів для власної теми",
            type: "method-selection",
            description: "Оберіть якісні або змішані методи, які відповідають вашому дослідницькому питанню.",
            methods: [
              {
                id: "topic5-method-observation",
                name: "Структуроване спостереження",
                description: "Фіксація дій користувачів, інтенсивності активності, часу перебування, маршрутів, конфліктів і способів використання простору за попередньо визначеною схемою.",
                bestFor: "Громадські простори, вулиці, двори, транспортні вузли, парки, пішохідні зони."
              },
              {
                id: "topic5-method-behavior-map",
                name: "Картування поведінки",
                description: "Нанесення поведінкових сценаріїв на план або карту: маршрути, точки зупинки, зони активності, місця конфліктів, неформальні траєкторії.",
                bestFor: "Аналіз реального використання простору, порівняння планувальної структури і поведінки користувачів."
              },
              {
                id: "topic5-method-user-experience",
                name: "Аналіз користувацького досвіду",
                description: "Дослідження того, як користувачі сприймають доступність, безпеку, комфорт, орієнтацію, бар’єри та якість середовища.",
                bestFor: "Теми, пов’язані з доступністю, інклюзивністю, комфортом, безпекою, сприйняттям і повсякденним використанням простору."
              },
              {
                id: "topic5-method-interview",
                name: "Напівструктуроване інтерв’ю",
                description: "Збір пояснень, оцінок, мотивів, досвіду та проблем користувачів, мешканців, експертів або представників управлінських інституцій.",
                bestFor: "Пояснення причин поведінки, конфліктів, оцінок середовища, управлінських рішень або професійних підходів."
              },
              {
                id: "topic5-method-document-analysis",
                name: "Аналіз документів",
                description: "Вивчення стратегій, програм, нормативів, планів, конкурсної документації, проєктних матеріалів, історичних джерел або управлінських рішень.",
                bestFor: "Містобудівна політика, історичні центри, регіональні стратегії, нормативні рамки, планувальні рішення."
              },
              {
                id: "topic5-method-photo",
                name: "Фотофіксація і візуальний аудит",
                description: "Системна фіксація стану середовища, бар’єрів, активностей, ознак занедбаності, візуальної доступності, елементів благоустрою або конфліктів використання.",
                bestFor: "Натурне обстеження, аналіз стану простору, візуальна доказова база, порівняння до / після або між кейсами."
              },
              {
                id: "topic5-method-mixed",
                name: "Змішана методична схема",
                description: "Поєднання кількісних, просторових і якісних даних для перевірки одного дослідницького зв’язку або пояснення результатів аналізу.",
                bestFor: "Теми, де статистика або GIS показують закономірність, але потрібне якісне пояснення причин."
              }
            ]
          },
          {
            id: "topic5-case-method-choice",
            title: "Кейс: вибір методу за дослідницькою ситуацією",
            type: "case-study",
            description: "Оберіть метод або методичну схему, яка найкраще відповідає дослідницькій ситуації.",
            caseStudy: {
              id: "topic5-case-study-method-choice",
              title: "Вибір якісного або змішаного методу",
              cases: [
                {
                  id: "topic5-case-low-use",
                  title: "Громадський простір формально доступний, але мало використовується",
                  scenario: "GIS-аналіз показує, що громадський простір розташований у межах 10-хвилинної пішохідної доступності для більшості мешканців району. Однак під час натурного огляду видно, що простір використовується слабо.",
                  correctOptionId: "topic5-option-observation-interview",
                  explanation: "Тут потрібно поєднати спостереження з інтерв’ю: спостереження покаже реальні сценарії, а інтерв’ю допоможе пояснити причини низького використання."
                },
                {
                  id: "topic5-case-conflict-node",
                  title: "Конфлікти біля транспортного вузла",
                  scenario: "Біля транспортного вузла пішоходи, громадський транспорт, паркування і комерційні функції створюють конфлікти руху. Потрібно зрозуміти, де саме виникають проблеми і як люди реально рухаються.",
                  correctOptionId: "topic5-option-behavior-map",
                  explanation: "Найдоречнішим є картування поведінки й потоків, бо воно дозволяє просторово зафіксувати маршрути, конфліктні точки і зони концентрації."
                },
                {
                  id: "topic5-case-policy",
                  title: "Розрив між стратегією і фактичним середовищем",
                  scenario: "У міській стратегії задекларовано розвиток пішохідності й локальних сервісів, але в нових житлових районах бракує соціальної інфраструктури та громадських просторів.",
                  correctOptionId: "topic5-option-document-field",
                  explanation: "Тут доцільно поєднати аналіз документів із польовим обстеженням, щоб зіставити задекларовані цілі з фактичним станом середовища."
                }
              ],
              options: [
                {
                  id: "topic5-option-observation-interview",
                  label: "A. Спостереження + інтерв’ю",
                  description: "Дає змогу зафіксувати реальні сценарії використання простору й пояснити причини поведінки користувачів."
                },
                {
                  id: "topic5-option-behavior-map",
                  label: "B. Картування поведінки і потоків",
                  description: "Доречне для аналізу маршрутів, конфліктів руху, точок тяжіння, місць зупинки і просторової організації активності."
                },
                {
                  id: "topic5-option-document-field",
                  label: "C. Аналіз документів + польове обстеження",
                  description: "Дозволяє зіставити нормативні, стратегічні або проєктні положення з фактичним станом середовища."
                },
                {
                  id: "topic5-option-only-opinion",
                  label: "D. Неформальна розмова без структури",
                  description: "Не забезпечує відтворюваності, не має критеріїв відбору респондентів і не дає надійної доказової бази."
                }
              ],
              correctHint: "Метод має відповідати не загальній темі, а конкретному типу даних, які потрібні для пояснення дослідницької проблеми."
            }
          }
        ]
      },
      {
        id: "topic5-ex3",
        title: "Блок 3. План спостереження і картування поведінки",
        tasks: [
          {
            id: "topic5-text-observation-plan",
            title: "План структурованого спостереження",
            type: "textarea",
            description: "Складіть план спостереження для власної теми. Він має містити місце, час, одиниці фіксації, категорії поведінки та форму запису даних.",
            placeholder: `Мета спостереження:
...

Місце / територія:
...

Одиниця спостереження:
людина / група користувачів / маршрут / дія / зона простору / конфлікт / інше

Часові інтервали:
ранок / день / вечір / будній день / вихідний / сезон / інше

Що саме фіксується:
1. ...
2. ...
3. ...

Категорії поведінки:
прохід / зупинка / очікування / відпочинок / торгівля / гра / конфлікт руху / інше

Форма запису:
таблиця / карта / схема / фотофіксація / відеофіксація / польовий щоденник

Очікуваний результат:
...`
          },
          {
            id: "topic5-text-behavior-map-plan",
            title: "План картування поведінки",
            type: "textarea",
            description: "Опишіть, як поведінкові дані будуть нанесені на план, карту або схему.",
            placeholder: `Базова карта / план:
...

Що буде наноситися на карту:
- маршрути руху;
- місця зупинки;
- зони тривалого перебування;
- конфлікти;
- точки тяжіння;
- зони уникання;
- інше: ...

Умовні позначення:
...

Як часто буде повторюватися фіксація:
...

Як карта поведінки буде зіставлена з просторовими або кількісними даними:
...`
          },
          {
            id: "topic5-text-observation-limits",
            title: "Обмеження спостереження",
            type: "textarea",
            description: "Визначте, які обмеження має спостереження і як їх можна зменшити.",
            placeholder: `Можливі обмеження:
- короткий час спостереження;
- сезонність;
- погодні умови;
- суб’єктивність фіксації;
- невидимі причини поведінки;
- інше: ...

Як зменшити ці обмеження:
1. ...
2. ...
3. ...`
          }
        ]
      },
      {
        id: "topic5-ex4",
        title: "Блок 4. Інтерв’ю та аналіз користувацького досвіду",
        tasks: [
          {
            id: "topic5-comparison-interview",
            title: "Слабке і сильне інтерв’ю у дослідженні середовища",
            type: "comparison",
            description: "Проаналізуйте, чим дослідницьке інтерв’ю відрізняється від загальної розмови або збору думок.",
            comparisonPairs: [
              {
                id: "topic5-pair-interview-structure",
                label: "Структура інтерв’ю",
                bad: "Я запитаю мешканців, чи їм подобається район.",
                good: "Інтерв’ю буде побудоване навколо блоків: щоденні маршрути, доступність сервісів, відчуття безпеки, бар’єри руху, сценарії використання громадських просторів і пропозиції користувачів.",
                explanation: "Сильне інтерв’ю має тематичні блоки, пов’язані з дослідницьким питанням."
              },
              {
                id: "topic5-pair-sample",
                label: "Вибір респондентів",
                bad: "Я опитаю кількох людей, яких вдасться знайти на місці.",
                good: "Респонденти будуть відібрані за ролями користувачів: мешканці, відвідувачі, працівники локальних сервісів, маломобільні користувачі або експерти, залежно від дослідницького питання.",
                explanation: "Сильний варіант пояснює, чому саме ці групи потрібні для аналізу."
              }
            ]
          },
          {
            id: "topic5-text-interview-plan",
            title: "План інтерв’ю або експертного опитування",
            type: "textarea",
            description: "Сформулюйте цільову групу респондентів, критерії відбору і базові питання.",
            placeholder: `Цільова група респондентів:
...

Критерії відбору:
...

Кількість інтерв’ю / орієнтовна вибірка:
...

Блок 1. Досвід користування простором:
1. ...
2. ...

Блок 2. Доступність і бар’єри:
1. ...
2. ...

Блок 3. Безпека, комфорт, сприйняття:
1. ...
2. ...

Блок 4. Проблеми і пропозиції:
1. ...
2. ...`
          },
          {
            id: "topic5-text-user-experience",
            title: "Критерії аналізу користувацького досвіду",
            type: "textarea",
            description: "Визначте, які аспекти користувацького досвіду будуть аналізуватися у вашій темі.",
            placeholder: `Користувацький досвід буде аналізуватися через:
- доступність;
- безпеку;
- комфорт;
- зрозумілість навігації;
- бар’єри руху;
- сценарії використання;
- соціальну взаємодію;
- відчуття приналежності;
- інше: ...

Які дані це дасть для дослідження:
...

Як ці дані будуть зіставлені з просторовим або кількісним аналізом:
...`
          }
        ]
      },
      {
        id: "topic5-ex5",
        title: "Блок 5. Аналіз документів",
        tasks: [
          {
            id: "topic5-text-document-analysis",
            title: "План аналізу документів",
            type: "textarea",
            description: "Визначте, які документи потрібні для вашої теми і що саме в них буде аналізуватися.",
            placeholder: `Типи документів:
- стратегія розвитку;
- генеральний план;
- ДПТ;
- місцева програма;
- ДБН / нормативний документ;
- конкурсна документація;
- історичні матеріали;
- проєктні матеріали;
- інше: ...

Які питання аналізуються в документах:
1. ...
2. ...
3. ...

Що буде зіставлятися з фактичним станом середовища:
...

Які обмеження має аналіз документів:
...`
          },
          {
            id: "topic5-case-documents",
            title: "Кейс: що може показати аналіз документів",
            type: "case-study",
            description: "Оберіть, яку аналітичну функцію виконує аналіз документів у конкретній ситуації.",
            caseStudy: {
              id: "topic5-case-study-documents",
              title: "Аналітична функція документів",
              cases: [
                {
                  id: "topic5-case-normative-gap",
                  title: "Нормативна вимога і фактичний стан",
                  scenario: "У нормативних документах передбачено певний рівень доступності соціальної інфраструктури, але фактична карта сервісів показує нерівномірне забезпечення житлових районів.",
                  correctOptionId: "topic5-option-normative-comparison",
                  explanation: "Тут документи потрібні для порівняння нормативної рамки з фактичною просторовою ситуацією."
                },
                {
                  id: "topic5-case-strategy",
                  title: "Стратегія розвитку і реальні інструменти",
                  scenario: "Міська стратегія декларує розвиток пішохідності, але проєктні рішення в нових районах орієнтовані переважно на автомобільну мобільність.",
                  correctOptionId: "topic5-option-policy-gap",
                  explanation: "Документи дозволяють виявити розрив між деклараціями, інструментами реалізації та фактичною просторовою практикою."
                }
              ],
              options: [
                {
                  id: "topic5-option-normative-comparison",
                  label: "A. Порівняння нормативної рамки з фактичним станом",
                  description: "Документи дають критерії або вимоги, які можна зіставити з картами, польовими даними або статистикою."
                },
                {
                  id: "topic5-option-policy-gap",
                  label: "B. Виявлення розриву між політикою і реалізацією",
                  description: "Документи показують задекларовані цілі, а аналіз середовища дозволяє перевірити, як вони реалізовані."
                },
                {
                  id: "topic5-option-citation-only",
                  label: "C. Використання документа лише як формального посилання",
                  description: "Документ згадується в роботі, але не виконує аналітичної функції."
                }
              ],
              correctHint: "Документ має бути джерелом критеріїв, обмежень, цілей або управлінських рішень, які можна аналізувати."
            }
          }
        ]
      },
      {
        id: "topic5-ex6",
        title: "Блок 6. Інтеграція якісних і кількісних даних",
        tasks: [
          {
            id: "topic5-comparison-mixed",
            title: "Порівняння слабкої і сильної інтеграції даних",
            type: "comparison",
            description: "Проаналізуйте, як якісні дані мають поєднуватися з кількісними й просторовими результатами.",
            comparisonPairs: [
              {
                id: "topic5-pair-mixed",
                label: "Інтеграція даних",
                bad: "У дослідженні будуть карти, статистика й інтерв’ю.",
                good: "Карта доступності виявляє території з недостатнім забезпеченням сервісами; спостереження показує, як ці території реально використовуються; інтерв’ю пояснюють, які бар’єри користувачі вважають головними.",
                explanation: "Сильна інтеграція показує, як різні типи даних відповідають на одне дослідницьке питання."
              },
              {
                id: "topic5-pair-sequence",
                label: "Послідовність методів",
                bad: "Спочатку буде зібрано всі дані, а потім зроблено висновки.",
                good: "Спочатку просторовий аналіз визначає проблемні зони, потім спостереження фіксує сценарії використання цих зон, а інтерв’ю пояснюють причини виявлених поведінкових патернів.",
                explanation: "Сильна схема має зрозумілу послідовність: один метод уточнює або пояснює результат іншого."
              }
            ]
          },
          {
            id: "topic5-text-mixed-integration",
            title: "Схема інтеграції даних у власному дослідженні",
            type: "textarea",
            description: "Поясніть, як якісні дані будуть інтегровані з кількісними, просторовими або документальними джерелами.",
            placeholder: `Кількісні / просторові дані в моєму дослідженні показують:
...

Якісні дані допоможуть пояснити:
...

Аналіз документів дозволить перевірити:
...

Послідовність інтеграції методів:
1. Спочатку ...
2. Потім ...
3. Після цього ...
4. У підсумку ...

Який висновок можна буде обґрунтувати завдяки поєднанню даних:
...`
          },
          {
            id: "topic5-text-final-summary",
            title: "Підсумкова рамка теми 5",
            type: "textarea",
            description: "Зберіть результати теми 5 в один короткий план якісного або змішаного дослідження.",
            placeholder: `Якісні методи, які потрібні для моєї теми:
1. ...
2. ...
3. ...

Що саме вони мають з’ясувати:
...

План спостереження / картування:
...

План інтерв’ю або аналізу користувацького досвіду:
...

Документи для аналізу:
...

Як якісні дані інтегруються з кількісними та просторовими:
...

Основні обмеження якісної частини дослідження:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic5-check-1", label: "Визначено, які аспекти теми потребують якісного аналізу" },
      { id: "topic5-check-2", label: "Обрано якісні або змішані методи відповідно до дослідницького питання" },
      { id: "topic5-check-3", label: "Сформовано план структурованого спостереження" },
      { id: "topic5-check-4", label: "Описано логіку картування поведінки" },
      { id: "topic5-check-5", label: "Сформовано план інтерв’ю або аналізу користувацького досвіду" },
      { id: "topic5-check-6", label: "Визначено документи для аналізу та їхню аналітичну функцію" },
      { id: "topic5-check-7", label: "Пояснено інтеграцію якісних, кількісних і просторових даних" }
    ]
  },

    {
    id: 6,
    title: "ПОБУДОВА КОНЦЕПТУАЛЬНОЇ, ПРОСТОРОВО-АНАЛІТИЧНОЇ АБО ПАРАМЕТРИЧНОЇ МОДЕЛІ ДОСЛІДЖЕННЯ",
    subtitle: "Тема 6 • Модель, структура, вхідні дані, припущення, перевірка, обмеження",
    objective: "Навчитися будувати концептуальну, просторово-аналітичну або параметричну модель дисертаційного дослідження, визначати її структуру, вхідні дані, припущення, очікувані результати, способи перевірки та межі застосування.",
    heroImage: "/images/hero-topic6.jpg",
    theory: `Модель у дисертаційному дослідженні не є декоративною схемою і не повинна лише повторювати структуру роботи. Її функція полягає у тому, щоб показати, як організовано наукове пояснення: які елементи враховуються, які зв’язки між ними передбачаються, які дані входять у модель, які методи підтримують аналіз і яким способом перевіряється результат.

Концептуальна модель пояснює зв’язки між поняттями, чинниками, процесами та очікуваними результатами. Просторово-аналітична модель працює з територією, показниками, картами, просторовими зв’язками, доступністю, щільністю, функціональною структурою або іншими параметрами середовища. Параметрична модель задає змінні, правила, обмеження, сценарії та залежності між параметрами, які можуть впливати на архітектурно-просторовий результат.

Для побудови моделі потрібно визначити її вхідні дані, ключові припущення, логіку перетворення даних у результат, очікувані вихідні продукти, спосіб перевірки та обмеження. Модель не повинна претендувати на універсальність, якщо її доказова база охоплює лише окремі кейси, території або типи об’єктів.

Результатом цієї теми має бути не просто схема, а робочий опис моделі дисертаційного дослідження: що входить у модель, як між собою пов’язані елементи, що модель дозволяє пояснити, як її можна перевірити і де проходять межі її застосування.`,
    totalFields: 12,
    exercises: [
      {
        id: "topic6-ex1",
        title: "Блок 1. Модель як дослідницький інструмент",
        tasks: [
          {
            id: "topic6-comparison-model",
            title: "Порівняння схеми і дослідницької моделі",
            type: "comparison",
            description: "Проаналізуйте, чим відрізняється декоративна схема від моделі, яка має наукову функцію.",
            hint: "Модель має показувати не перелік розділів, а логіку зв’язку між проблемою, даними, методами, аналізом, перевіркою і результатом.",
            comparisonPairs: [
              {
                id: "topic6-pair-scheme-model",
                label: "Схема / дослідницька модель",
                bad: "Модель показує, що дослідження складається з актуальності, мети, завдань, методів, результатів і висновків.",
                good: "Модель показує зв’язок між дослідницькою проблемою, гіпотезою, системою показників, джерелами даних, методами аналізу, процедурою перевірки та очікуваним науковим результатом.",
                explanation: "Слабкий варіант повторює формальну структуру дисертації. Сильний варіант пояснює, як саме працює доказова логіка дослідження."
              },
              {
                id: "topic6-pair-input-output",
                label: "Вхідні дані і результат",
                bad: "У модель входять різні дані про місто, після чого формуються висновки.",
                good: "У модель входять показники просторової зв’язності, функціонального наповнення, доступності та поведінкової активності; результатом є типологія громадських просторів за рівнем використання і просторової якості.",
                explanation: "Сильне формулювання визначає, які саме дані входять у модель і який конкретний результат вона має дати."
              },
              {
                id: "topic6-pair-validation",
                label: "Перевірка моделі",
                bad: "Модель буде перевірена через аналіз отриманих результатів.",
                good: "Модель перевіряється через зіставлення розрахованих показників із польовими спостереженнями, порівняння кейсів і оцінку відповідності результатів робочій гіпотезі.",
                explanation: "Коректне формулювання має вказувати конкретний спосіб перевірки, а не загальну фразу про аналіз."
              }
            ]
          },
          {
            id: "topic6-text-model-role",
            title: "Роль моделі у власному дослідженні",
            type: "textarea",
            description: "Поясніть, навіщо у вашому дослідженні потрібна модель і яку наукову функцію вона має виконувати.",
            placeholder: `Модель у моєму дослідженні потрібна для того, щоб:
...

Вона має пояснити зв’язок між:
...

Вона не є просто схемою, тому що:
...

Очікувана функція моделі:
- пояснювальна;
- аналітична;
- прогностична;
- типологічна;
- методична;
- параметрична;
- інша: ...`
          }
        ]
      },
      {
        id: "topic6-ex2",
        title: "Блок 2. Вибір типу моделі",
        tasks: [
          {
            id: "topic6-method-model-type",
            title: "Вибір типу моделі для власної теми",
            type: "method-selection",
            description: "Оберіть тип моделі, який відповідає вашій темі, дослідницькому питанню, типам даних і очікуваному результату.",
            methods: [
              {
                id: "topic6-method-conceptual",
                name: "Концептуальна модель",
                description: "Пояснює зв’язки між поняттями, чинниками, процесами, критеріями та очікуваними результатами. Не обов’язково працює з числовими розрахунками.",
                bestFor: "Теоретичні, методологічні, типологічні, історико-культурні або міждисциплінарні дослідження."
              },
              {
                id: "topic6-method-spatial-analytical",
                name: "Просторово-аналітична модель",
                description: "Пов’язує територію, показники, карти, просторові зв’язки, доступність, щільність, функціональну структуру та результати аналізу.",
                bestFor: "Містобудівні, урбаністичні, морфологічні, GIS-орієнтовані дослідження, аналіз доступності або просторової якості."
              },
              {
                id: "topic6-method-parametric",
                name: "Параметрична модель",
                description: "Працює зі змінними, параметрами, обмеженнями, сценаріями та правилами зміни архітектурної або містобудівної структури.",
                bestFor: "Дослідження формоутворення, щільності, інсоляції, варіативності забудови, сценарного аналізу або оптимізації."
              },
              {
                id: "topic6-method-algorithmic",
                name: "Алгоритмічна або обчислювальна модель",
                description: "Описує послідовність обробки даних, правил, процедур, розрахунків і перевірки результату.",
                bestFor: "Дослідження з цифровими інструментами, симуляціями, агентними моделями, автоматизованим аналізом або процедурним моделюванням."
              },
              {
                id: "topic6-method-hybrid",
                name: "Комбінована модель",
                description: "Поєднує концептуальний, просторово-аналітичний, параметричний або якісний рівні в одній дослідницькій логіці.",
                bestFor: "Дисертації, де потрібно поєднати теорію, просторові дані, польове дослідження, інтерпретацію і модельний результат."
              }
            ]
          },
          {
            id: "topic6-case-model-type",
            title: "Кейс: вибір моделі за типом дослідницької ситуації",
            type: "case-study",
            description: "Оберіть тип моделі, який найкраще відповідає описаній дослідницькій ситуації.",
            caseStudy: {
              id: "topic6-case-study-model-type",
              title: "Тип моделі для PhD-дослідження",
              cases: [
                {
                  id: "topic6-case-accessibility",
                  title: "Доступність громадських просторів",
                  scenario: "Дослідження перевіряє, як пішохідна доступність, просторові бар’єри, функціональна структура та поведінкова активність впливають на використання громадських просторів у житлових районах.",
                  correctOptionId: "topic6-option-spatial-model",
                  explanation: "Тут потрібна просторово-аналітична модель, бо ключову роль відіграють територія, мережа, показники доступності, карти і порівняння просторових одиниць."
                },
                {
                  id: "topic6-case-form-variation",
                  title: "Варіативність архітектурної форми",
                  scenario: "Дослідження аналізує, як зміна параметрів ділянки, інсоляції, щільності, поверховості та функціональної програми впливає на варіанти об’ємно-просторового рішення.",
                  correctOptionId: "topic6-option-parametric-model",
                  explanation: "Тут доречна параметрична модель, бо результат залежить від керованих параметрів і сценаріїв їх зміни."
                },
                {
                  id: "topic6-case-identity",
                  title: "Ідентичність історичного середовища",
                  scenario: "Дослідження має пояснити, як історична тяглість, морфологічна структура, символічні маркери, функціональні зміни та практики використання формують ідентичність міського середовища.",
                  correctOptionId: "topic6-option-conceptual-model",
                  explanation: "Тут потрібна концептуальна модель, бо основним результатом є пояснення зв’язків між поняттями та чинниками."
                }
              ],
              options: [
                {
                  id: "topic6-option-conceptual-model",
                  label: "A. Концептуальна модель",
                  description: "Пояснює зв’язки між поняттями, чинниками, процесами та очікуваними результатами."
                },
                {
                  id: "topic6-option-spatial-model",
                  label: "B. Просторово-аналітична модель",
                  description: "Пов’язує територію, показники, карти, просторові зв’язки та результати аналізу."
                },
                {
                  id: "topic6-option-parametric-model",
                  label: "C. Параметрична модель",
                  description: "Працює зі змінними, параметрами, сценаріями та правилами зміни форми або структури."
                },
                {
                  id: "topic6-option-summary-scheme",
                  label: "D. Схема змісту дисертації",
                  description: "Показує розділи роботи, але не пояснює дослідницький механізм і спосіб перевірки гіпотези."
                }
              ],
              correctHint: "Тип моделі має відповідати типу даних, методу аналізу і характеру очікуваного наукового результату."
            }
          },
          {
            id: "topic6-text-model-type",
            title: "Обґрунтування типу моделі для власної теми",
            type: "textarea",
            description: "Поясніть, який тип моделі відповідає вашій дисертаційній темі та чому.",
            placeholder: `Для моєї теми найбільш доречним є тип моделі:
концептуальна / просторово-аналітична / параметрична / алгоритмічна / комбінована

Чому саме цей тип:
...

Які елементи дослідження він дозволяє пов’язати:
...

Який результат він має дати:
...`
          }
        ]
      },
      {
        id: "topic6-ex3",
        title: "Блок 3. Структура моделі, вхідні дані та припущення",
        tasks: [
          {
            id: "topic6-text-model-structure",
            title: "Структура моделі",
            type: "textarea",
            description: "Опишіть основні блоки моделі та зв’язки між ними.",
            placeholder: `Основні блоки моделі:
1. ...
2. ...
3. ...
4. ...

Ключові зв’язки між блоками:
1. ...
2. ...
3. ...

Який блок є центральним:
...

Які блоки залежать від вхідних даних:
...

Які блоки формують вихідний результат:
...`
          },
          {
            id: "topic6-text-model-inputs",
            title: "Вхідні дані моделі",
            type: "textarea",
            description: "Визначте, які дані входять у модель і яку роль вони виконують.",
            placeholder: `Вхідні дані моделі:
1. ...
2. ...
3. ...
4. ...

Типи даних:
- літературні / теоретичні;
- статистичні;
- просторові / GIS;
- картографічні;
- польові;
- інтерв’ю;
- спостереження;
- нормативні документи;
- параметричні змінні;
- інше: ...

Для чого потрібен кожен тип даних:
...

Які дані є обов’язковими:
...

Які дані є допоміжними:
...`
          },
          {
            id: "topic6-text-model-assumptions",
            title: "Припущення моделі",
            type: "textarea",
            description: "Сформулюйте ключові припущення, на яких ґрунтується модель. Припущення мають бути явними, інакше модель виглядатиме як необґрунтована схема.",
            placeholder: `Ключові припущення моделі:
1. ...
2. ...
3. ...

Наприклад:
- передбачається, що ...
- модель виходить із того, що ...
- аналіз обмежується припущенням про ...

Які припущення можуть бути спірними:
...

Як ці припущення можна перевірити або уточнити:
...`
          }
        ]
      },
      {
        id: "topic6-ex4",
        title: "Блок 4. Логіка роботи моделі",
        tasks: [
          {
            id: "topic6-chart-model",
            title: "Аналіз схеми дослідницької моделі",
            type: "chart-analysis",
            chartAnalysis: {
              id: "topic6-model-chart",
              title: "Умовна схема дослідницької моделі",
              image: "/images/topic7-model.jpg",
              description: "Схема використовується як приклад для аналізу зв’язків між проблемою, гіпотезою, даними, методами, моделлю, перевіркою та висновками.",
              questions: [
                {
                  id: "q1",
                  question: "Які блоки моделі мають бути прямо пов’язані з гіпотезою дослідження?",
                  hint: "Гіпотеза не може існувати окремо від показників, даних і методів перевірки."
                },
                {
                  id: "q2",
                  question: "Де в моделі має бути місце для перевірки або валідації результатів?",
                  hint: "Подумайте про порівняння з емпіричними даними, кейсами, спостереженням, інтерв’ю або експертною оцінкою."
                },
                {
                  id: "q3",
                  question: "Які зворотні зв’язки потрібні у вашій моделі?",
                  hint: "Модель може уточнювати показники, методи, інтерпретацію, припущення або межі висновків."
                }
              ]
            }
          },
          {
            id: "topic6-text-model-logic",
            title: "Логіка роботи моделі",
            type: "textarea",
            description: "Опишіть послідовність роботи моделі: від проблеми і даних до інтерпретації та результату.",
            placeholder: `Проблема:
...

Гіпотеза:
...

Вхідні дані:
...

Показники / змінні:
...

Методи аналізу:
...

Проміжні результати:
...

Інтерпретація:
...

Вихідний результат моделі:
...

Зворотний зв’язок або уточнення:
...`
          },
          {
            id: "topic6-text-model-relationships",
            title: "Зв’язки між елементами моделі",
            type: "textarea",
            description: "Визначте, які зв’язки між елементами моделі є причинними, кореляційними, просторовими, логічними або інтерпретаційними.",
            placeholder: `Причинні або гіпотетичні зв’язки:
1. ...
2. ...

Просторові зв’язки:
1. ...
2. ...

Кількісні / статистичні зв’язки:
1. ...
2. ...

Якісні / інтерпретаційні зв’язки:
1. ...
2. ...

Які зв’язки потребують перевірки:
...`
          }
        ]
      },
      {
        id: "topic6-ex5",
        title: "Блок 5. Очікувані результати, перевірка та обмеження",
        tasks: [
          {
            id: "topic6-comparison-results",
            title: "Науковий результат і практична рекомендація",
            type: "comparison",
            description: "Проаналізуйте, чим науковий результат моделі відрізняється від практичної рекомендації.",
            comparisonPairs: [
              {
                id: "topic6-pair-result",
                label: "Очікуваний результат",
                bad: "Результатом моделі будуть рекомендації щодо покращення міського середовища.",
                good: "Результатом моделі є система критеріїв оцінювання просторової якості громадських просторів, яка поєднує морфологічні, функціональні, поведінкові та перцептивні індикатори.",
                explanation: "Практичні рекомендації можуть бути наслідком дослідження, але науковий результат має мати форму моделі, методики, типології, принципів, критеріїв, алгоритму або пояснювальної схеми."
              },
              {
                id: "topic6-pair-limits",
                label: "Обмеження моделі",
                bad: "Модель можна застосовувати для всіх міських територій.",
                good: "Модель застосовна для житлових районів із подібною морфологічною структурою та доступною просторовою доказовою базою; її використання для історичних центрів або промислових територій потребує адаптації критеріїв.",
                explanation: "Коректна модель має чіткі межі застосування. Це підвищує наукову достовірність, а не послаблює результат."
              }
            ]
          },
          {
            id: "topic6-text-model-outputs",
            title: "Очікувані результати моделі",
            type: "textarea",
            description: "Визначте, що саме модель має дати як науковий результат.",
            placeholder: `Очікуваний результат моделі:
- концептуальна модель;
- просторово-аналітична модель;
- параметрична модель;
- система критеріїв;
- типологія;
- методика оцінювання;
- сценарії;
- алгоритм;
- карта / набір карт;
- інше: ...

Що саме буде новим у цьому результаті:
...

Як цей результат пов’язаний із гіпотезою:
...

Як він може бути використаний у дисертації:
...`
          },
          {
            id: "topic6-text-model-validation",
            title: "Перевірка моделі",
            type: "textarea",
            description: "Опишіть, як буде перевірятися коректність моделі.",
            placeholder: `Способи перевірки моделі:
1. Зіставлення з емпіричними даними: ...
2. Порівняння кейсів: ...
3. Перевірка через GIS / статистику: ...
4. Перевірка через спостереження або інтерв’ю: ...
5. Експертна оцінка: ...
6. Повторне застосування моделі до іншої території: ...

Що вважатиметься підтвердженням моделі:
...

Що може спростувати або уточнити модель:
...`
          },
          {
            id: "topic6-text-model-limits",
            title: "Обмеження моделі",
            type: "textarea",
            description: "Окресліть межі застосування моделі. Обмеження можуть бути просторовими, часовими, типологічними, методичними або пов’язаними з даними.",
            placeholder: `Просторові обмеження:
...

Часові обмеження:
...

Типологічні обмеження:
...

Обмеження даних:
...

Методичні обмеження:
...

Які висновки модель дозволяє робити:
...

Які висновки модель не дозволяє робити:
...`
          }
        ]
      },
      {
        id: "topic6-ex6",
        title: "Блок 6. Підсумкова рамка моделі дослідження",
        tasks: [
          {
            id: "topic6-text-final-model-frame",
            title: "Підсумкова рамка теми 6",
            type: "textarea",
            description: "Зберіть результати теми 6 в один структурований опис моделі дисертаційного дослідження.",
            placeholder: `Назва / тип моделі:
...

Дослідницька проблема, яку пояснює модель:
...

Гіпотеза, з якою пов’язана модель:
...

Основні блоки моделі:
1. ...
2. ...
3. ...

Вхідні дані:
1. ...
2. ...
3. ...

Ключові припущення:
1. ...
2. ...

Логіка роботи моделі:
дані → показники → аналіз → інтерпретація → результат

Очікуваний науковий результат:
...

Способи перевірки:
1. ...
2. ...
3. ...

Обмеження моделі:
...

Як ця модель буде використана у дисертації:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic6-check-1", label: "Визначено тип моделі відповідно до теми дослідження" },
      { id: "topic6-check-2", label: "Описано структуру моделі та основні блоки" },
      { id: "topic6-check-3", label: "Визначено вхідні дані моделі" },
      { id: "topic6-check-4", label: "Сформульовано ключові припущення моделі" },
      { id: "topic6-check-5", label: "Описано логіку роботи моделі" },
      { id: "topic6-check-6", label: "Визначено очікуваний науковий результат" },
      { id: "topic6-check-7", label: "Окреслено способи перевірки та обмеження моделі" }
    ]
  },

    {
    id: 7,
    title: "ПРЕЗЕНТАЦІЯ ТА КРИТИЧНЕ ОБГОВОРЕННЯ АНАЛІТИЧНОЇ МОДЕЛІ ДИСЕРТАЦІЇ",
    subtitle: "Тема 7 • Захист міні-проєкту, аргументація, візуальні докази, критичні питання",
    objective: "Навчитися презентувати аналітичну модель дисертаційного дослідження, пояснювати зв’язок між проблемою, гіпотезою, джерелами, даними, методами, моделлю і висновками, а також готуватися до критичного обговорення результатів.",
    heroImage: "/images/hero-topic7.jpg",
    theory: `Фінальна презентація дисертаційної моделі має показувати не просто тему дослідження, а логіку наукового доведення. Вона повинна пояснювати, яка проблема досліджується, яка прогалина виявлена, яке дослідницьке питання поставлено, яка гіпотеза перевіряється, які дані використовуються, які методи застосовано, яку модель побудовано і як отримані результати можуть бути перевірені.

Слабка презентація складається з окремих слайдів: актуальність, мета, завдання, методи, кілька карт і висновки. Сильна презентація має доказову послідовність. Кожен елемент має виконувати функцію: проблема обґрунтовує потребу дослідження, джерела показують прогалину, операціоналізація формує показники, дані забезпечують доказову базу, методи пояснюють процедуру аналізу, модель узагальнює зв’язки, а обмеження визначають межі достовірності висновків.

Критичне обговорення потрібне для перевірки стійкості дослідницької логіки. Аспірант має бути готовим пояснити, чому обрано саме ці методи, чому дані є достатніми або обмеженими, як перевіряється модель, які висновки можна робити на основі результатів, а які виходять за межі доказової бази.

Результатом теми має бути структура 10-хвилинної презентації, набір ключових аргументів, перелік можливих критичних запитань і фінальна рамка аналітичної моделі дисертаційного дослідження.`,
    totalFields: 12,
    exercises: [
      {
        id: "topic7-ex1",
        title: "Блок 1. Логіка фінальної презентації",
        tasks: [
          {
            id: "topic7-comparison-presentation",
            title: "Порівняння слабкої та сильної презентації моделі",
            type: "comparison",
            description: "Проаналізуйте, чому фінальна презентація має показувати дослідницьку логіку, а не лише перелік виконаних етапів.",
            hint: "Сильна презентація має відповідати на питання: що доводиться, якими даними, якими методами, через яку модель і з якими обмеженнями.",
            comparisonPairs: [
              {
                id: "topic7-pair-structure",
                label: "Структура презентації",
                bad: "У презентації я покажу актуальність, мету, завдання, методи, кілька карт і висновки.",
                good: "Презентація побудована як доказова послідовність: проблема → прогалина → гіпотеза → показники → дані → методи → результати аналізу → модель → перевірка → межі висновків.",
                explanation: "Слабкий варіант повторює формальну структуру вступу. Сильний варіант показує логіку доведення."
              },
              {
                id: "topic7-pair-visuals",
                label: "Графічні матеріали",
                bad: "Карти, схеми й діаграми додані, щоб зробити презентацію наочною.",
                good: "Кожна карта, схема або діаграма виконує конкретну доказову функцію: показує просторову нерівномірність, підтверджує відмінність між кейсами, демонструє зв’язок між показниками або пояснює обмеження моделі.",
                explanation: "Візуальні матеріали мають не прикрашати презентацію, а підтримувати аргументацію."
              },
              {
                id: "topic7-pair-result",
                label: "Науковий результат",
                bad: "Результатом дослідження будуть рекомендації щодо покращення міського середовища.",
                good: "Результатом дослідження є аналітична модель оцінювання просторової якості громадських просторів, яка поєднує морфологічні, функціональні, поведінкові та перцептивні індикатори.",
                explanation: "Практичні рекомендації можуть бути наслідком дослідження, але науковий результат має бути сформульований як модель, методика, типологія, система критеріїв, принципи, алгоритм або пояснювальна схема."
              },
              {
                id: "topic7-pair-limits",
                label: "Обмеження висновків",
                bad: "Отримані результати можна застосовувати для всіх міських територій.",
                good: "Отримані результати можуть бути застосовані до житлових районів із подібною морфологічною структурою; для історичних центрів, промислових територій або малих міст модель потребує адаптації критеріїв.",
                explanation: "Чітке визначення меж застосування підвищує наукову коректність результату."
              }
            ]
          },
          {
            id: "topic7-text-presentation-logic",
            title: "Доказова логіка презентації",
            type: "textarea",
            description: "Опишіть, яку основну дослідницьку логіку має показати ваша фінальна презентація.",
            placeholder: `Головна проблема дослідження:
...

Наукова прогалина:
...

Гіпотеза:
...

Що саме потрібно довести:
...

Які дані це підтверджують:
...

Які методи забезпечують перевірку:
...

Яка модель узагальнює результати:
...

Які межі висновків потрібно зазначити:
...`
          }
        ]
      },
      {
        id: "topic7-ex2",
        title: "Блок 2. Структура 10-хвилинної презентації",
        tasks: [
          {
            id: "topic7-method-presentation-structure",
            title: "Вибір логіки структурування презентації",
            type: "method-selection",
            description: "Оберіть принцип структурування фінальної презентації, який найкраще відповідає вашій темі.",
            methods: [
              {
                id: "topic7-method-proof",
                name: "Доказова послідовність",
                description: "Презентація рухається від проблеми й прогалини до гіпотези, даних, методів, результатів, моделі та перевірки.",
                bestFor: "Більшість PhD-презентацій, де потрібно показати повну логіку наукового доведення."
              },
              {
                id: "topic7-method-model-centered",
                name: "Модель-центрична структура",
                description: "На початку коротко вводиться проблема, після чого основний акцент робиться на структурі моделі, її блоках, даних, перевірці й результатах.",
                bestFor: "Дослідження, у яких головним науковим результатом є модель, методика, алгоритм або система критеріїв."
              },
              {
                id: "topic7-method-case-comparison",
                name: "Порівняльна структура за кейсами",
                description: "Презентація організована через порівняння кількох територій, об’єктів або сценаріїв, які демонструють роботу моделі.",
                bestFor: "Дослідження з кількома кейсами, територіями, типами середовища або порівняльним аналізом."
              },
              {
                id: "topic7-method-data-driven",
                name: "Структура від даних до висновків",
                description: "Презентація починається з корпусу даних і поступово показує, як через аналіз, карти, діаграми й інтерпретацію формується модель.",
                bestFor: "Дослідження з сильним кількісним, GIS, статистичним або цифровим компонентом."
              }
            ]
          },
          {
            id: "topic7-text-10min-structure",
            title: "Структура 10-хвилинної презентації",
            type: "textarea",
            description: "Складіть план презентації аналітичної моделі дисертації з приблизним розподілом часу.",
            placeholder: `1. Назва, проблема і контекст — ... хв
Що показати:
...

2. Наукова прогалина і дослідницьке питання — ... хв
Що показати:
...

3. Гіпотеза, об’єкт, предмет і межі — ... хв
Що показати:
...

4. Поняття, критерії, індикатори — ... хв
Що показати:
...

5. Дані та методи — ... хв
Що показати:
...

6. Кількісний / просторовий / якісний аналіз — ... хв
Що показати:
...

7. Модель дослідження — ... хв
Що показати:
...

8. Перевірка, обмеження і науковий результат — ... хв
Що показати:
...`
          },
          {
            id: "topic7-case-presentation-problem",
            title: "Кейс: діагностика слабкого місця презентації",
            type: "case-study",
            description: "Визначте, яка проблема найбільше послаблює презентацію в кожній ситуації.",
            caseStudy: {
              id: "topic7-case-study-presentation",
              title: "Критична перевірка структури презентації",
              cases: [
                {
                  id: "topic7-case-many-slides",
                  title: "Багато матеріалу, але немає логіки",
                  scenario: "У презентації є 30 слайдів із картами, діаграмами, цитатами й фотографіями, але слухачеві незрозуміло, яку саме гіпотезу вони підтверджують.",
                  correctOptionId: "topic7-option-no-proof-logic",
                  explanation: "Проблема полягає не в кількості матеріалу, а у відсутності доказової послідовності."
                },
                {
                  id: "topic7-case-good-map-weak-interpretation",
                  title: "Є карти, але слабка інтерпретація",
                  scenario: "Аспірант демонструє карти доступності й щільності, але не пояснює, які висновки можна робити на їхній основі, а які — ні.",
                  correctOptionId: "topic7-option-weak-interpretation",
                  explanation: "Карта має виконувати доказову функцію. Без інтерпретації вона залишається лише ілюстрацією."
                },
                {
                  id: "topic7-case-methods-list",
                  title: "Методи подані списком",
                  scenario: "У презентації є слайд зі списком методів: аналіз, синтез, порівняння, узагальнення, графічний метод, але не пояснено, як ці методи перевіряють гіпотезу.",
                  correctOptionId: "topic7-option-methods-not-linked",
                  explanation: "Методи мають бути пов’язані з даними, показниками, дослідницьким питанням і процедурою перевірки."
                }
              ],
              options: [
                {
                  id: "topic7-option-no-proof-logic",
                  label: "A. Відсутня доказова послідовність",
                  description: "Матеріали є, але вони не зібрані в логіку: проблема → дані → аналіз → модель → висновок."
                },
                {
                  id: "topic7-option-weak-interpretation",
                  label: "B. Візуальні матеріали не інтерпретовані",
                  description: "Карти й діаграми показані, але не пояснено, яке дослідницьке твердження вони підтверджують."
                },
                {
                  id: "topic7-option-methods-not-linked",
                  label: "C. Методи не пов’язані з гіпотезою",
                  description: "Методи перелічені формально, але не показано, як вони працюють у дослідженні."
                },
                {
                  id: "topic7-option-too-short-title",
                  label: "D. Назва презентації занадто коротка",
                  description: "Це може бути стилістичною проблемою, але вона не є головним методологічним недоліком."
                }
              ],
              correctHint: "Шукайте не стилістичну проблему, а збій у науковій логіці презентації."
            }
          }
        ]
      },
      {
        id: "topic7-ex3",
        title: "Блок 3. Візуальні матеріали як доказ",
        tasks: [
          {
            id: "topic7-chart-final-model",
            title: "Аналіз фінальної схеми аналітичної моделі",
            type: "chart-analysis",
            chartAnalysis: {
              id: "topic7-final-model-chart",
              title: "Фінальна схема аналітичної моделі",
              image: "/images/topic7-model.jpg",
              description: "Схема використовується для перевірки того, чи пов’язані проблема, гіпотеза, дані, методи, модель і висновки в одну доказову послідовність.",
              questions: [
                {
                  id: "q1",
                  question: "Який елемент моделі є головним для доведення гіпотези?",
                  hint: "Назвіть не загальний блок, а конкретний зв’язок між даними, методом і висновком."
                },
                {
                  id: "q2",
                  question: "Який елемент моделі потребує уточнення перед презентацією?",
                  hint: "Це може бути показник, джерело даних, метод перевірки, припущення або межа застосування."
                },
                {
                  id: "q3",
                  question: "Який підсумковий науковий результат показує модель?",
                  hint: "Відрізніть науковий результат від практичної рекомендації."
                }
              ]
            }
          },
          {
            id: "topic7-text-visual-evidence",
            title: "Доказова функція карт, діаграм і схем",
            type: "textarea",
            description: "Для кожного графічного матеріалу презентації поясніть, яке твердження він підтверджує.",
            placeholder: `Графічний матеріал 1:
карта / діаграма / схема / фотофіксація / матриця / модель

Що показує:
...

Яке дослідницьке твердження підтверджує:
...

Які дані використані:
...

Яке обмеження має цей матеріал:
...

---

Графічний матеріал 2:
...

Що показує:
...

Яке дослідницьке твердження підтверджує:
...

Обмеження:
...`
          },
          {
            id: "topic7-comparison-visuals",
            title: "Ілюстрація, візуалізація і доказ",
            type: "comparison",
            description: "Проаналізуйте різницю між зображенням, яке просто ілюструє тему, і зображенням, яке виконує доказову функцію.",
            comparisonPairs: [
              {
                id: "topic7-pair-map-proof",
                label: "Карта в презентації",
                bad: "Карта показує територію дослідження.",
                good: "Карта показує, що периферійні житлові квартали мають нижчу доступність до громадських просторів у радіусі 500 метрів, ніж центральні квартали; це використовується для перевірки гіпотези про просторову нерівномірність забезпечення.",
                explanation: "Сильний варіант пояснює, яке твердження карта підтверджує."
              },
              {
                id: "topic7-pair-diagram-proof",
                label: "Діаграма в презентації",
                bad: "Діаграма робить результати більш наочними.",
                good: "Діаграма порівнює значення індикаторів між кейсами й показує, які параметри найбільше відрізняють простори з високою і низькою інтенсивністю використання.",
                explanation: "Діаграма має показувати різницю, зв’язок або закономірність, а не лише оформлювати слайд."
              }
            ]
          }
        ]
      },
      {
        id: "topic7-ex4",
        title: "Блок 4. Аргументи захисту і критичні запитання",
        tasks: [
          {
            id: "topic7-text-defense-arguments",
            title: "Ключові аргументи захисту",
            type: "textarea",
            description: "Сформулюйте 4–6 головних аргументів, які пояснюють наукову логіку вашої моделі.",
            placeholder: `Аргумент 1. Чому проблема є науковою:
...

Аргумент 2. Чому обрана гіпотеза є перевірюваною:
...

Аргумент 3. Чому обрані показники відповідають поняттям:
...

Аргумент 4. Чому дані є достатніми для первинної перевірки:
...

Аргумент 5. Чому обрані методи релевантні:
...

Аргумент 6. Чому модель має науковий результат:
...`
          },
          {
            id: "topic7-text-critical-questions",
            title: "Потенційні критичні запитання і відповіді",
            type: "textarea",
            description: "Передбачте запитання щодо проблеми, джерел, даних, методів, моделі, перевірки та обмежень.",
            placeholder: `Запитання 1. Чому це саме наукова проблема, а не практичне завдання?
Відповідь:
...

Запитання 2. Чому обрано саме ці джерела?
Відповідь:
...

Запитання 3. Чому ці показники достатні?
Відповідь:
...

Запитання 4. Які обмеження мають дані?
Відповідь:
...

Запитання 5. Як перевіряється модель?
Відповідь:
...

Запитання 6. Де межі застосування результатів?
Відповідь:
...`
          },
          {
            id: "topic7-case-critical-response",
            title: "Кейс: відповідь на критичне питання",
            type: "case-study",
            description: "Оберіть найсильнішу відповідь на критичне питання під час обговорення.",
            caseStudy: {
              id: "topic7-case-study-critical-response",
              title: "Критичне обговорення моделі",
              cases: [
                {
                  id: "topic7-case-data-limits",
                  title: "Запитання про обмеженість даних",
                  scenario: "Під час обговорення запитують: «Чому ви робите висновки на основі трьох кейсів? Чи можна поширювати модель на всі міські території?»",
                  correctOptionId: "topic7-option-limits-answer",
                  explanation: "Сильна відповідь не заперечує обмеження, а чітко визначає межі застосування моделі."
                },
                {
                  id: "topic7-case-method-choice",
                  title: "Запитання про вибір методів",
                  scenario: "Під час обговорення запитують: «Чому ви обрали саме спостереження і просторовий аналіз, а не лише анкетування мешканців?»",
                  correctOptionId: "topic7-option-method-logic",
                  explanation: "Сильна відповідь пояснює зв’язок між методом, типом даних і дослідницьким питанням."
                }
              ],
              options: [
                {
                  id: "topic7-option-limits-answer",
                  label: "A. Визначити межі застосування",
                  description: "Модель перевіряється на конкретних кейсах і може застосовуватися до подібних типів середовища; для інших територій потрібна адаптація критеріїв і повторна перевірка."
                },
                {
                  id: "topic7-option-method-logic",
                  label: "B. Пояснити зв’язок між методом і питанням",
                  description: "Просторовий аналіз показує розміщення і доступність, спостереження фіксує реальне використання, а інтерв’ю або анкетування можуть додатково пояснити причини поведінки."
                },
                {
                  id: "topic7-option-defensive",
                  label: "C. Відповісти, що це буде уточнено пізніше",
                  description: "Така відповідь не пояснює наявну логіку дослідження і послаблює аргументацію."
                },
                {
                  id: "topic7-option-ignore",
                  label: "D. Перейти до наступного слайду",
                  description: "Уникнення критичного питання не є коректною дослідницькою позицією."
                }
              ],
              correctHint: "Сильна відповідь визнає межі дослідження і пояснює логіку прийнятого рішення."
            }
          }
        ]
      },
      {
        id: "topic7-ex5",
        title: "Блок 5. Науковий результат, новизна і межі висновків",
        tasks: [
          {
            id: "topic7-text-scientific-result",
            title: "Формулювання наукового результату",
            type: "textarea",
            description: "Сформулюйте, що саме є науковим результатом вашої аналітичної моделі.",
            placeholder: `Науковий результат мого дослідження:
модель / методика / типологія / система критеріїв / принципи / алгоритм / сценарії / карта / інше

Стислий опис результату:
...

У чому полягає новизна:
...

Чим результат відрізняється від практичної рекомендації:
...

Як результат пов’язаний із дослідницькою проблемою:
...`
          },
          {
            id: "topic7-text-conclusions-limits",
            title: "Межі висновків",
            type: "textarea",
            description: "Окресліть, які висновки можна робити на основі вашої моделі, а які виходять за межі доказової бази.",
            placeholder: `На основі моделі можна обґрунтувати:
1. ...
2. ...
3. ...

На основі моделі не можна прямо стверджувати:
1. ...
2. ...

Межі застосування результатів:
- просторові: ...
- часові: ...
- типологічні: ...
- методичні: ...
- пов’язані з даними: ...

Що потрібно для подальшої перевірки:
...`
          }
        ]
      },
      {
        id: "topic7-ex6",
        title: "Блок 6. Фінальна рамка презентації аналітичної моделі",
        tasks: [
          {
            id: "topic7-text-final-frame",
            title: "Підсумкова рамка теми 7",
            type: "textarea",
            description: "Зберіть усі елементи фінальної презентації в один стислий план.",
            placeholder: `Назва презентації:
...

Головна дослідницька проблема:
...

Наукова прогалина:
...

Гіпотеза:
...

Об’єкт і предмет:
...

Ключові поняття та індикатори:
...

Джерела даних:
...

Методи:
...

Основні результати аналізу:
...

Модель дослідження:
...

Способи перевірки:
...

Науковий результат:
...

Обмеження:
...

Фінальне твердження, яким завершується презентація:
...`
          }
        ]
      }
    ],
    checklist: [
      { id: "topic7-check-1", label: "Підготовлено доказову структуру фінальної презентації" },
      { id: "topic7-check-2", label: "Сформовано 10-хвилинний план презентації" },
      { id: "topic7-check-3", label: "Пояснено доказову функцію карт, діаграм і схем" },
      { id: "topic7-check-4", label: "Сформульовано ключові аргументи захисту" },
      { id: "topic7-check-5", label: "Підготовлено відповіді на критичні запитання" },
      { id: "topic7-check-6", label: "Сформульовано науковий результат і його новизну" },
      { id: "topic7-check-7", label: "Окреслено межі висновків і застосування моделі" }
    ]
  }
]; function T5() {
  const [e, a] = x.useState(1),
    [s, o] = x.useState(!1),
    {
      isLoaded: l,
      getField: u,
      saveField: f,
      getChecklistItem: h,
      toggleChecklistItem: m,
      getTopicProgress: p,
      getTopicChecklistProgress: g
    } = A5();

  const INTRO_KEY = "workbook-intro-seen-v2";

  x.useEffect(() => {
    localStorage.getItem(INTRO_KEY) || o(!0);
  }, []);

  const y = () => {
    localStorage.setItem(INTRO_KEY, "true");
    o(!1);
  };

  const b = Cl.find(w => w.id === e) || Cl[0];

  return l
    ? S.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [
          s &&
            S.jsx(le.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "fixed inset-0 z-[100] bg-[#1A1A1A]/90 flex items-center justify-center p-4",
              children: S.jsxs(le.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.1 },
                className: "bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                children: [
                  S.jsxs("div", {
                    className: "bg-[#1A1A1A] p-8 text-white",
                    children: [
                      S.jsx(cc, {
                        className: "w-10 h-10 text-[#E84A2C] mb-4"
                      }),
                      S.jsx("h2", {
                        className: "text-3xl font-bold uppercase font-display mb-2",
                        children: "Робочий зошит"
                      }),
                      S.jsx("p", {
                        className: "text-lg text-[#E0E0E0]",
                        children: "Аналітичні методи дослідження та теоретичні моделі в архітектурі та містобудуванні"
                      })
                    ]
                  }),

                  S.jsxs("div", {
                    className: "p-8",
                    children: [
                      S.jsxs("div", {
                        className: "space-y-4 text-[#1A1A1A] mb-8",
                        children: [
                          S.jsxs("p", {
                            className: "leading-relaxed",
                            children: [
                              "Цей інтерактивний робочий зошит розроблено для аспірантів спеціальності",
                              S.jsx("strong", {
                                children: " G17 «Архітектура та містобудування»"
                              }),
                              " у межах дисципліни ОК2.2 «Аналітичні методи дослідження та теоретичні моделі в архітектурі та містобудуванні». Зошит веде від постановки дослідницької проблеми до побудови, перевірки й презентації аналітичної моделі дисертації."
                            ]
                          }),

                          S.jsxs("div", {
                            className: "bg-[#F5F5F5] p-4 border-l-4 border-[#E84A2C]",
                            children: [
                              S.jsx("p", {
                                className: "text-sm font-semibold uppercase tracking-wider mb-3",
                                children: "Що містить зошит:"
                              }),

                              S.jsxs("ul", {
                                className: "space-y-2 text-sm",
                                children: [
                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Постановка дослідження:"
                                      }),
                                      " формулювання проблеми, дослідницького питання, об’єкта, предмета, гіпотези, завдань і доказової бази"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Джерела і методологічне позиціонування:"
                                      }),
                                      " робота з наукометричними базами, групування джерел, аналітична матриця, наукова прогалина і релевантні методи"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Операціоналізація понять:"
                                      }),
                                      " формування критеріїв, індикаторів, змінних, джерел даних та одиниць аналізу"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Кількісний і просторовий аналіз:"
                                      }),
                                      " CSV-дані, описова статистика, просторові точки, аналіз доступності, карти й діаграми"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Якісні та змішані методи:"
                                      }),
                                      " спостереження, картування поведінки, інтерв’ю, аналіз користувацького досвіду, аналіз документів та інтеграція даних"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Модель дослідження:"
                                      }),
                                      " побудова концептуальної, просторово-аналітичної або параметричної моделі, визначення вхідних даних, припущень, перевірки та обмежень"
                                    ]
                                  }),

                                  S.jsxs("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                      S.jsx(So, {
                                        className: "w-4 h-4 text-[#E84A2C] flex-shrink-0 mt-0.5"
                                      }),
                                      S.jsx("strong", {
                                        children: "Презентація і критичне обговорення:"
                                      }),
                                      " підготовка структури захисту, аргументів, візуальних доказів, відповідей на критичні запитання і фінального підсумку моделі"
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),

                          S.jsxs("p", {
                            className: "text-sm text-[#666666]",
                            children: [
                              "Ваш прогрес ",
                              S.jsx("strong", {
                                children: "автоматично зберігається"
                              }),
                              " у браузері. Це вікно можна відкрити повторно кнопкою ",
                              S.jsx("strong", {
                                children: "«Про зошит»"
                              }),
                              " над робочою областю."
                            ]
                          })
                        ]
                      }),

                      S.jsx("button", {
                        onClick: y,
                        className: "btn-primary w-full",
                        children: "Розпочати роботу"
                      })
                    ]
                  })
                ]
              })
            }),

          S.jsx(_N, {
            activeTopic: e,
            totalTopics: Cl.length
          }),

          S.jsx(zN, {
            topics: Cl,
            activeTopic: e,
            onSelectTopic: a
          }),

          S.jsx("div", {
            className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-end",
            children: S.jsx("button", {
              type: "button",
              onClick: () => o(!0),
              className: "border border-[#DDDDDD] bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:border-[#E84A2C] hover:text-[#E84A2C]",
              children: "Про зошит"
            })
          }),

          S.jsx("main", {
            children: S.jsx(E5, {
              topic: b,
              getField: u,
              saveField: f,
              getChecklistItem: h,
              toggleChecklistItem: m,
              getTopicProgress: p,
              getTopicChecklistProgress: g
            })
          }),

          S.jsx("footer", {
            className: "bg-[#1A1A1A] text-white py-8",
            children: S.jsx("div", {
              className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
              children: S.jsxs("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [
                  S.jsxs("div", {
                    className: "text-center sm:text-left",
                    children: [
                      S.jsx("p", {
                        className: "text-sm font-semibold uppercase tracking-wider",
                        children: "НУ «Львівська Політехніка»"
                      }),
                      S.jsx("p", {
                        className: "text-xs text-[#999999] mt-1",
                        children: "Інститут архітектури та дизайну • Кафедра візуального дизайну та мистецтва"
                      })
                    ]
                  }),

                  S.jsxs("div", {
                    className: "text-center sm:text-right",
                    children: [
                      S.jsx("p", {
                        className: "text-xs text-[#999999]",
                        children: "Робочий зошит для аспірантів • Дисципліна ОК2.2"
                      }),
                      S.jsx("p", {
                        className: "text-xs text-[#666666] mt-1",
                        children: "Аналітичні методи дослідження та теоретичні моделі"
                      })
                    ]
                  })
                ]
              })
            })
          })
        ]
      })
    : S.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-white",
        children: S.jsxs("div", {
          className: "text-center",
          children: [
            S.jsx("div", {
              className: "w-12 h-12 border-4 border-[#E84A2C] border-t-transparent rounded-full animate-spin mx-auto mb-4"
            }),
            S.jsx("p", {
              className: "text-sm text-[#666666] uppercase tracking-wider font-semibold",
              children: "Завантаження зошита..."
            })
          ]
        })
      });
}

SE.createRoot(document.getElementById("root")).render(
  S.jsx(x.StrictMode, {
    children: S.jsx(GA, {
      children: S.jsx(T5, {})
    })
  })
);

/* === WORKBOOK PUBLICATION PATCH: about, copyright, resources, footer === */
(function () {
  const PATCH_VERSION = "workbook-publication-patch-2026-05-31";

  const meta = {
    institution: "Національний університет «Львівська політехніка»",
    institute: "Інститут архітектури та дизайну",
    department: "Кафедра візуального дизайну та мистецтва",
    discipline: "ОК2.2 «Аналітичні методи дослідження та теоретичні моделі в архітектурі та містобудуванні»",
    speciality: "G17 «Архітектура та містобудування»",
    version: "1.0",
    year: "2026",

    authors: [
      "Черкес Богдан Степанович",
      "Юрчишин Оксана Михайлівна",
     ],

    developers: [
      "Юрчишин Оксана Михайлівна"
    ],

    contacts: {
      methodological: "iarx.dept@lpnu.ua",
      technical: "iarx.dept@lpnu.ua"
    },

    citation:
      "Черкес Б.С., Юрчишин О.М. Робочий зошит до дисципліни ОК2.2 «Аналітичні методи дослідження та теоретичні моделі в архітектурі та містобудуванні». Львів: Національний університет «Львівська політехніка», 2026.",

    copyright:
      "© 2026 Національний університет «Львівська політехніка» / автори робочого зошита. Усі права застережено."
  };

  const topicTitles = {
    1: "ФОРМУЛЮВАННЯ ДОСЛІДНИЦЬКОЇ ПРОБЛЕМИ ТА АНАЛІТИЧНОГО ФОКУСУ",
    2: "АНАЛІТИЧНА МАТРИЦЯ ДЖЕРЕЛ І МЕТОДОЛОГІЧНЕ ПОЗИЦІОНУВАННЯ ДОСЛІДЖЕННЯ",
    3: "ОПЕРАЦІОНАЛІЗАЦІЯ ПОНЯТЬ АРХІТЕКТУРНО-МІСТОБУДІВНОГО ДОСЛІДЖЕННЯ",
    4: "КІЛЬКІСНИЙ І ПРОСТОРОВИЙ АНАЛІЗ АРХІТЕКТУРНО-МІСТОБУДІВНОГО ОБ’ЄКТА",
    5: "ЯКІСНІ ТА ЗМІШАНІ МЕТОДИ ДОСЛІДЖЕННЯ МІСЬКОГО СЕРЕДОВИЩА",
    6: "ПОБУДОВА КОНЦЕПТУАЛЬНОЇ, ПРОСТОРОВО-АНАЛІТИЧНОЇ АБО ПАРАМЕТРИЧНОЇ МОДЕЛІ ДОСЛІДЖЕННЯ",
    7: "ПРЕЗЕНТАЦІЯ ТА КРИТИЧНЕ ОБГОВОРЕННЯ АНАЛІТИЧНОЇ МОДЕЛІ ДИСЕРТАЦІЇ"
  };

  const topicResources = {
  1: [
    {
      label: "Вихрущ В. та ін. Методологія та методика наукового дослідження. Львів : Видавництво Львівської політехніки, 2016."
    },
    {
      label: "Дзьобань О. П. Методологія, організація та технологія наукових досліджень. Київ ; Одеса : Фенікс, 2025."
    },
    {
      label: "Creswell J., Creswell D. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage, 2022."
    },
    {
      label: ""
    }
  ],

  2: [
    {
      label: "Бачинська М. Наукова комунікація в архітектурі: академічне письмо, презентація, візуалізація. Львів : Видавництво ЛНТУ, 2022."
    },
    {
      label: "Creswell J., Creswell D. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage, 2022."
    },
    {
      label: "Zotero",
      url: "https://www.zotero.org/"
    },
    {
      label: "Mendeley",
      url: "https://www.mendeley.com/"
    },
    {
      label: "VOSviewer Online",
      url: "https://app.vosviewer.com/"
    }
  ],

  3: [
    {
      label: "Creswell J., Creswell D. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage, 2022."
    },
    {
      label: ""
    },
    {
      label: "Lynch K. The Image of the City. MIT Press, 1964."
    },
    {
      label: "Гейл Я. Міста для людей. Київ : Основи, 2018."
    },
    {
      label: "Александер К. Мова шаблонів. Київ : Основи, 2025."
    }
  ],

  4: [
    {
      label: ""
    },
    {
      label: "Шпігельгальтер Д. Мистецтво статистики. Київ : КМ-БУКС, 2025."
    },
    {
      label: "Brunsdon C., Comber L. An Introduction to R for Spatial Analysis and Mapping. SAGE Publications, 2025."
    },
    {
      label: "QGIS",
      url: "https://qgis.org/"
    },
    {
      label: "Tableau",
      url: "https://www.tableau.com/"
    }
  ],

  5: [
    {
      label: "Creswell J., Creswell D. Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. Sage, 2022."
    },
    {
      label: ""
    },
    {
      label: "Muhammad R. The Mixed Methods Research Workbook. Research Made Practical, 2026."
    },
    {
      label: "Ritchie J., Lewis J., McNaughton Nicholls C., Ormston R. Qualitative Research Practice. SAGE Publications, 2013."
    },
    {
      label: "Гейл Я. Міста для людей. Київ : Основи, 2018."
    }
  ],

  6: [
    {
      label: "Shane D. G. Recombinant Urbanism: Conceptual Modeling in Architecture, Urban Design and City Theory. Wiley, 2005."
    },
    {
      label: "Александер К. Мова шаблонів. Київ : Основи, 2025."
    },
    {
      label: "Carta S. Machine Learning and the City: Applications in Architecture and Urban Design. Wiley-Blackwell, 2022."
    },
    {
      label: "Hudson-Smith A., Wilson D., Signorelli V. Cities in the Metaverse: Spatial Computing, Digital Twins, Avatars, Economics, and Digital Habitation on the New Frontier. CRC, 2024."
    },
    {
      label: "QGIS",
      url: "https://qgis.org/"
    }
  ],

  7: [
    {
      label: "Бачинська М. Наукова комунікація в архітектурі: академічне письмо, презентація, візуалізація. Львів : Видавництво ЛНТУ, 2022."
    },
    {
      label: "Kirk A. Data Visualisation: A Handbook for Data Driven Design. SAGE Publications, 2024."
    },
    {
      label: "Нуссбаумер Нафлік К. Ефективна розповідь за допомогою даних. Київ : ArtHuss, 2026."
    },
    {
      label: "Tableau",
      url: "https://www.tableau.com/"
    },
    {
      label: "QGIS",
      url: "https://qgis.org/"
    }
  ]
};

  function injectStyles() {
    if (document.getElementById("workbook-publication-patch-styles")) return;

    const style = document.createElement("style");
    style.id = "workbook-publication-patch-styles";
    style.textContent = `
      .wb-extra {
        border-top: 1px solid #E0E0E0;
        padding-top: 20px;
        margin-top: 20px;
        
            .wb-resource-list {
        margin: 0;
        padding-left: 18px;
      }

      .wb-resource-list li {
        margin: 0 0 7px 0;
        padding-left: 2px;
        color: #555555;
        font-size: 13px;
        line-height: 1.45;
      }

      .wb-resource-list a,
      .wb-resource-list span {
        color: #555555 !important;
        text-decoration: none !important;
        font-weight: 400 !important;
        font-style: italic !important;
        font-size: 13px !important;
        line-height: 1.45;
      }

      .wb-resource-list a:hover {
        color: #E84A2C !important;
        text-decoration: none !important;
      }

      .wb-resource-item a,
      .wb-resource-item strong {
        text-decoration: none !important;
      }

      .wb-extra h3 {
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin: 0 0 12px 0;
        color: #1A1A1A;
      }

      .wb-extra p,
      .wb-extra li {
        font-size: 14px;
        line-height: 1.65;
        color: #666666;
      }

      .wb-extra ul {
        margin: 0;
        padding-left: 18px;
      }

      .wb-extra a {
        color: #1A1A1A;
        text-decoration: underline;
        text-underline-offset: 4px;
        font-weight: 700;
      }

      .wb-extra a:hover {
        color: #E84A2C;
      }

      .wb-meta-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
      }

      @media (min-width: 640px) {
        .wb-meta-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .wb-label {
        display: block;
        font-size: 11px;
        line-height: 1.3;
        font-weight: 800;
        color: #777777;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 4px;
      }

      .wb-topic-resources {
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        padding: 28px;
        margin: 32px 0 24px 0;
      }

      .wb-topic-resources-kicker {
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        color: #E84A2C;
        margin-bottom: 8px;
      }

      .wb-topic-resources h3 {
        font-size: 22px;
        font-weight: 900;
        text-transform: uppercase;
        color: #1A1A1A;
        margin: 0 0 20px 0;
      }

      .wb-resource-item {
        border-left: 4px solid #1A1A1A;
        padding-left: 14px;
        margin: 0 0 16px 0;
      }

      .wb-resource-item a,
      .wb-resource-item strong {
        color: #1A1A1A;
        font-size: 14px;
        font-weight: 800;
        text-decoration: underline;
        text-underline-offset: 4px;
      }

      .wb-resource-item a:hover {
        color: #E84A2C;
      }

      .wb-resource-item p {
        margin: 5px 0 0 0;
        font-size: 14px;
        line-height: 1.6;
        color: #666666;
      }

      .wb-footer-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }

      @media (min-width: 1024px) {
        .wb-footer-grid {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .wb-footer-right {
          text-align: right;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function makeResourceHtml(resources) {
  return `
    <ul class="wb-resource-list">
      ${resources
        .slice(0, 5)
        .map((resource) => {
          const title = resource.url
            ? `<a href="${resource.url}" target="_blank" rel="noreferrer"><em>${resource.label}</em></a>`
            : `<span><em>${resource.label}</em></span>`;

          return `<li>${title}</li>`;
        })
        .join("")}
    </ul>
  `;
}

  function patchAboutModal() {
    const modalTitle = Array.from(document.querySelectorAll("h2")).find((node) => {
      return node.textContent && node.textContent.trim() === "Робочий зошит";
    });

    if (!modalTitle) return;

    let modalBox = modalTitle.parentElement;
    while (modalBox && !String(modalBox.className || "").includes("max-w-2xl")) {
      modalBox = modalBox.parentElement;
    }

    if (!modalBox) return;

    const startButton = Array.from(modalBox.querySelectorAll("button")).find((button) => {
      return button.textContent && button.textContent.includes("Розпочати роботу");
    });

    if (!startButton || !startButton.parentElement) return;

    const body = startButton.parentElement;

    if (body.querySelector("[data-wb-about-extra]")) return;

    const extra = document.createElement("div");
    extra.dataset.wbAboutExtra = PATCH_VERSION;
    extra.className = "wb-about-extra";

    extra.innerHTML = `
      <section class="wb-extra">
        <h3>Авторство і статус матеріалу</h3>

        <div class="wb-meta-grid">
          <div>
            <span class="wb-label">Установа</span>
            <p>${meta.institution}<br>${meta.institute}<br>${meta.department}</p>
          </div>

          <div>
            <span class="wb-label">Версія</span>
            <p>Версія ${meta.version}, ${meta.year}</p>
          </div>

          <div>
            <span class="wb-label">Автори навчально-методичного змісту</span>
            <p>${meta.authors.join("<br>")}</p>
          </div>

          <div>
            <span class="wb-label">Цифрова реалізація</span>
            <p>${meta.developers.join("<br>")}</p>
          </div>
        </div>
      </section>

      <section class="wb-extra">
        <h3>Збереження та експорт</h3>
        <p>
          Відповіді зберігаються локально у браузері користувача. Якщо очистити кеш,
          змінити браузер або працювати з іншого пристрою, попередньо введені відповіді
          можуть бути недоступними.
        </p>
        <p>
          Експорт створює Word-сумісний файл із відповідями до поточної теми.
          
        </p>
      </section>

      <section class="wb-extra">
        <h3>Умови використання</h3>
        <ul>
          <li>Матеріали робочого зошита призначені для навчального використання в межах дисципліни ОК2.2.</li>
          <li>Публічне розміщення, комерційне використання, адаптація, переклад або передавання матеріалів третім особам без письмової згоди правовласника не допускаються.</li>
          <li>Допускається коротке цитування фрагментів із коректним посиланням на авторів, назву зошита, установу та рік.</li>
          <li>Відповіді, які аспірант вводить у зошит, належать автору цих відповідей.</li>
        </ul>
        <p style="font-size:12px;color:#999999;margin-top:12px;">${meta.copyright}</p>
      </section>

      <section class="wb-extra">
        <h3>Як цитувати</h3>
        <p>${meta.citation}</p>
      </section>

      <section class="wb-extra">
        <h3>Контакти</h3>
        <div class="wb-meta-grid">
          <div>
            <span class="wb-label">Методичні питання</span>
            <p><a href="mailto:${meta.contacts.methodological}">${meta.contacts.methodological}</a></p>
          </div>

          <div>
            <span class="wb-label">Технічні питання</span>
            <p><a href="mailto:${meta.contacts.technical}">${meta.contacts.technical}</a></p>
          </div>
        </div>
      </section>
    `;

    startButton.before(extra);
  }

  function getActiveTopicId() {
    const main = document.querySelector("main");
    if (!main) return null;

    const text = main.textContent || "";

    for (const [id, title] of Object.entries(topicTitles)) {
      if (text.includes(title)) {
        return Number(id);
      }
    }

    return null;
  }

  function patchTopicResources() {
    const main = document.querySelector("main");
    if (!main) return;

    const activeTopicId = getActiveTopicId();
    if (!activeTopicId || !topicResources[activeTopicId]) return;

    const oldBlocks = Array.from(main.querySelectorAll("[data-wb-topic-resources]"));
    const currentBlock = oldBlocks.find((block) => Number(block.dataset.topicId) === activeTopicId);

    if (currentBlock) return;

    oldBlocks.forEach((block) => block.remove());

    const exportButton = Array.from(main.querySelectorAll("button")).find((button) => {
      return button.textContent && button.textContent.includes("Експортувати");
    });

    if (!exportButton) return;

    const insertionTarget = exportButton.closest("div") || exportButton;

    const section = document.createElement("section");
    section.className = "wb-topic-resources";
    section.dataset.wbTopicResources = PATCH_VERSION;
    section.dataset.topicId = String(activeTopicId);

    section.innerHTML = `
  <p class="wb-topic-resources-kicker">Рекомендовані джерела</p>
  ${makeResourceHtml(topicResources[activeTopicId])}
`;

    insertionTarget.before(section);
  }

  function patchExportButtonText() {
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach((button) => {
      if (!button.textContent || !button.textContent.includes("Експортувати відповіді")) return;

      button.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("Експортувати відповіді")) {
          node.nodeValue = "Експортувати у Word-сумісний файл";
        }
      });
    });
  }

  function patchFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    if (
      footer.dataset.wbFooterPatch === PATCH_VERSION &&
      footer.textContent &&
      footer.textContent.includes("Усі права застережено")
    ) {
      return;
    }

    footer.dataset.wbFooterPatch = PATCH_VERSION;

    footer.innerHTML = `
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="wb-footer-grid">
          <div>
            <p style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">
              ${meta.institution}
            </p>
            <p style="font-size:12px;color:#999999;margin-top:4px;">
              ${meta.institute} • ${meta.department}
            </p>
          </div>

          <div>
            <p style="font-size:12px;color:#999999;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">
              Навчальний ресурс
            </p>
            <p style="font-size:12px;color:#999999;margin-top:4px;">
              Робочий зошит для аспірантів спеціальності ${meta.speciality}
            </p>
            <p style="font-size:12px;color:#666666;margin-top:4px;">
              ${meta.discipline}
            </p>
          </div>

          <div class="wb-footer-right">
            <p style="font-size:12px;color:#999999;">
              ${meta.copyright}
            </p>
            <p style="font-size:12px;color:#666666;margin-top:8px;">
              Версія ${meta.version}, ${meta.year}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  function runPatch() {
    injectStyles();
    patchAboutModal();
    patchTopicResources();
    patchExportButtonText();
    patchFooter();
  }

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(runPatch);
  });

  function startPatch() {
    runPatch();

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startPatch);
  } else {
    startPatch();
  }
})();