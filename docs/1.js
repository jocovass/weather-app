(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  Array(337).concat([
    function(e, t, en) {
      (function(Qa) {
        Qa.exports = (function() {
          'use strict';
          var t, i;
          function l() {
            return t.apply(null, arguments);
          }
          function s(e) {
            return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
          }
          function o(e) {
            return null != e && '[object Object]' === Object.prototype.toString.call(e);
          }
          function r(e) {
            return void 0 === e;
          }
          function d(e) {
            return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
          }
          function u(e) {
            return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
          }
          function n(e, t) {
            var a,
              n = [];
            for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
            return n;
          }
          function _(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function h(e, t) {
            for (var a in t) _(t, a) && (e[a] = t[a]);
            return (
              _(t, 'toString') && (e.toString = t.toString),
              _(t, 'valueOf') && (e.valueOf = t.valueOf),
              e
            );
          }
          function m(e, t, a, n) {
            return jt(e, t, a, n, !0).utc();
          }
          function c(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function f(e) {
            if (null == e._isValid) {
              var t = c(e),
                a = i.call(t.parsedDateParts, function(e) {
                  return null != e;
                }),
                n =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && a));
              if (
                (e._strict &&
                  (n =
                    n &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return n;
              e._isValid = n;
            }
            return e._isValid;
          }
          function M(e) {
            var t = m(NaN);
            return null != e ? h(c(t), e) : (c(t).userInvalidated = !0), t;
          }
          i = Array.prototype.some
            ? Array.prototype.some
            : function(e) {
                for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                  if (n in t && e.call(this, t[n], n, t)) return !0;
                return !1;
              };
          var p = (l.momentProperties = []);
          function y(e, t) {
            var a, n, i;
            if (
              (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
              r(t._i) || (e._i = t._i),
              r(t._f) || (e._f = t._f),
              r(t._l) || (e._l = t._l),
              r(t._strict) || (e._strict = t._strict),
              r(t._tzm) || (e._tzm = t._tzm),
              r(t._isUTC) || (e._isUTC = t._isUTC),
              r(t._offset) || (e._offset = t._offset),
              r(t._pf) || (e._pf = c(t)),
              r(t._locale) || (e._locale = t._locale),
              0 < p.length)
            )
              for (a = 0; a < p.length; a++) (n = p[a]), r((i = t[n])) || (e[n] = i);
            return e;
          }
          var a = !1;
          function g(e) {
            y(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === a && ((a = !0), l.updateOffset(this), (a = !1));
          }
          function L(e) {
            return e instanceof g || (null != e && null != e._isAMomentObject);
          }
          function Y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function v(e) {
            var t = +e,
              a = 0;
            return 0 != t && isFinite(t) && (a = Y(t)), a;
          }
          function k(e, t, a) {
            var n,
              i = Math.min(e.length, t.length),
              r = Math.abs(e.length - t.length),
              s = 0;
            for (n = 0; n < i; n++) ((a && e[n] !== t[n]) || (!a && v(e[n]) !== v(t[n]))) && s++;
            return s + r;
          }
          function b(e) {
            !1 === l.suppressDeprecationWarnings &&
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Deprecation warning: ' + e);
          }
          function e(i, r) {
            var s = !0;
            return h(function() {
              if ((null != l.deprecationHandler && l.deprecationHandler(null, i), s)) {
                for (var e, t = [], a = 0; a < arguments.length; a++) {
                  if (((e = ''), 'object' == typeof arguments[a])) {
                    for (var n in ((e += '\n[' + a + '] '), arguments[0]))
                      e += n + ': ' + arguments[0][n] + ', ';
                    e = e.slice(0, -2);
                  } else e = arguments[a];
                  t.push(e);
                }
                b(
                  i +
                    '\nArguments: ' +
                    Array.prototype.slice.call(t).join('') +
                    '\n' +
                    new Error().stack,
                ),
                  (s = !1);
              }
              return r.apply(this, arguments);
            }, r);
          }
          var D,
            w = {};
          function T(e, t) {
            null != l.deprecationHandler && l.deprecationHandler(e, t), w[e] || (b(t), (w[e] = !0));
          }
          function x(e) {
            return (
              e instanceof Function || '[object Function]' === Object.prototype.toString.call(e)
            );
          }
          function S(e, t) {
            var a,
              n = h({}, e);
            for (a in t)
              _(t, a) &&
                (o(e[a]) && o(t[a])
                  ? ((n[a] = {}), h(n[a], e[a]), h(n[a], t[a]))
                  : null != t[a]
                  ? (n[a] = t[a])
                  : delete n[a]);
            for (a in e) _(e, a) && !_(t, a) && o(e[a]) && (n[a] = h({}, n[a]));
            return n;
          }
          function H(e) {
            null != e && this.set(e);
          }
          (l.suppressDeprecationWarnings = !1),
            (l.deprecationHandler = null),
            (D = Object.keys
              ? Object.keys
              : function(e) {
                  var t,
                    a = [];
                  for (t in e) _(e, t) && a.push(t);
                  return a;
                });
          var P = {};
          function j(e, t) {
            var a = e.toLowerCase();
            P[a] = P[a + 's'] = P[t] = e;
          }
          function O(e) {
            return 'string' == typeof e ? P[e] || P[e.toLowerCase()] : void 0;
          }
          function A(e) {
            var t,
              a,
              n = {};
            for (a in e) _(e, a) && (t = O(a)) && (n[t] = e[a]);
            return n;
          }
          var W = {};
          function F(e, t) {
            W[e] = t;
          }
          function C(e) {
            var t = [];
            for (var a in e) t.push({ unit: a, priority: W[a] });
            return (
              t.sort(function(e, t) {
                return e.priority - t.priority;
              }),
              t
            );
          }
          function I(e, t, a) {
            var n = '' + Math.abs(e),
              i = t - n.length,
              r = 0 <= e;
            return (
              (r ? (a ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, i))
                .toString()
                .substr(1) +
              n
            );
          }
          var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            R = {},
            N = {};
          function V(e, t, a, n) {
            var i = n;
            'string' == typeof n &&
              (i = function() {
                return this[n]();
              }),
              e && (N[e] = i),
              t &&
                (N[t[0]] = function() {
                  return I(i.apply(this, arguments), t[1], t[2]);
                }),
              a &&
                (N[a] = function() {
                  return this.localeData().ordinal(i.apply(this, arguments), e);
                });
          }
          function B(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
          }
          function J(e, t) {
            return e.isValid()
              ? ((t = U(t, e.localeData())),
                (R[t] =
                  R[t] ||
                  (function(n) {
                    var e,
                      i,
                      r = n.match(E);
                    for (e = 0, i = r.length; e < i; e++)
                      N[r[e]] ? (r[e] = N[r[e]]) : (r[e] = B(r[e]));
                    return function(e) {
                      var t,
                        a = '';
                      for (t = 0; t < i; t++) a += x(r[t]) ? r[t].call(e, n) : r[t];
                      return a;
                    };
                  })(t)),
                R[t](e))
              : e.localeData().invalidDate();
          }
          function U(e, t) {
            var a = 5;
            function n(e) {
              return t.longDateFormat(e) || e;
            }
            for (z.lastIndex = 0; 0 <= a && z.test(e); )
              (e = e.replace(z, n)), (z.lastIndex = 0), (a -= 1);
            return e;
          }
          var G = /\d/,
            q = /\d\d/,
            K = /\d{3}/,
            Z = /\d{4}/,
            $ = /[+-]?\d{6}/,
            X = /\d\d?/,
            Q = /\d\d\d\d?/,
            ee = /\d\d\d\d\d\d?/,
            te = /\d{1,3}/,
            ae = /\d{1,4}/,
            ne = /[+-]?\d{1,6}/,
            ie = /\d+/,
            re = /[+-]?\d+/,
            se = /Z|[+-]\d\d:?\d\d/gi,
            oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            le = {};
          function ue(e, a, n) {
            le[e] = x(a)
              ? a
              : function(e, t) {
                  return e && n ? n : a;
                };
          }
          function _e(e, t) {
            return _(le, e)
              ? le[e](t._strict, t._locale)
              : new RegExp(
                  (function(e) {
                    return he(
                      e
                        .replace('\\', '')
                        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, i) {
                          return t || a || n || i;
                        }),
                    );
                  })(e),
                );
          }
          function he(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          }
          var me = {};
          function ce(e, a) {
            var t,
              n = a;
            for (
              'string' == typeof e && (e = [e]),
                d(a) &&
                  (n = function(e, t) {
                    t[a] = v(e);
                  }),
                t = 0;
              t < e.length;
              t++
            )
              me[e[t]] = n;
          }
          function fe(e, i) {
            ce(e, function(e, t, a, n) {
              (a._w = a._w || {}), i(e, a._w, a, n);
            });
          }
          function Me(e, t, a) {
            null != t && _(me, e) && me[e](t, a._a, a, e);
          }
          var pe = 0,
            ye = 1,
            ge = 2,
            Le = 3,
            Ye = 4,
            ve = 5,
            ke = 6,
            be = 7,
            De = 8;
          function we(e) {
            return Te(e) ? 366 : 365;
          }
          function Te(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          V('Y', 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? '' + e : '+' + e;
          }),
            V(0, ['YY', 2], 0, function() {
              return this.year() % 100;
            }),
            V(0, ['YYYY', 4], 0, 'year'),
            V(0, ['YYYYY', 5], 0, 'year'),
            V(0, ['YYYYYY', 6, !0], 0, 'year'),
            j('year', 'y'),
            F('year', 1),
            ue('Y', re),
            ue('YY', X, q),
            ue('YYYY', ae, Z),
            ue('YYYYY', ne, $),
            ue('YYYYYY', ne, $),
            ce(['YYYYY', 'YYYYYY'], pe),
            ce('YYYY', function(e, t) {
              t[pe] = 2 === e.length ? l.parseTwoDigitYear(e) : v(e);
            }),
            ce('YY', function(e, t) {
              t[pe] = l.parseTwoDigitYear(e);
            }),
            ce('Y', function(e, t) {
              t[pe] = parseInt(e, 10);
            }),
            (l.parseTwoDigitYear = function(e) {
              return v(e) + (68 < v(e) ? 1900 : 2e3);
            });
          var xe,
            Se = He('FullYear', !0);
          function He(t, a) {
            return function(e) {
              return null != e ? (je(this, t, e), l.updateOffset(this, a), this) : Pe(this, t);
            };
          }
          function Pe(e, t) {
            return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
          }
          function je(e, t, a) {
            e.isValid() &&
              !isNaN(a) &&
              ('FullYear' === t && Te(e.year()) && 1 === e.month() && 29 === e.date()
                ? e._d['set' + (e._isUTC ? 'UTC' : '') + t](a, e.month(), Oe(a, e.month()))
                : e._d['set' + (e._isUTC ? 'UTC' : '') + t](a));
          }
          function Oe(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var a = (function(e, t) {
              return ((e % t) + t) % t;
            })(t, 12);
            return (e += (t - a) / 12), 1 === a ? (Te(e) ? 29 : 28) : 31 - ((a % 7) % 2);
          }
          (xe = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function(e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            V('M', ['MM', 2], 'Mo', function() {
              return this.month() + 1;
            }),
            V('MMM', 0, 0, function(e) {
              return this.localeData().monthsShort(this, e);
            }),
            V('MMMM', 0, 0, function(e) {
              return this.localeData().months(this, e);
            }),
            j('month', 'M'),
            F('month', 8),
            ue('M', X),
            ue('MM', X, q),
            ue('MMM', function(e, t) {
              return t.monthsShortRegex(e);
            }),
            ue('MMMM', function(e, t) {
              return t.monthsRegex(e);
            }),
            ce(['M', 'MM'], function(e, t) {
              t[ye] = v(e) - 1;
            }),
            ce(['MMM', 'MMMM'], function(e, t, a, n) {
              var i = a._locale.monthsParse(e, n, a._strict);
              null != i ? (t[ye] = i) : (c(a).invalidMonth = e);
            });
          var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            We = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_',
            );
          var Fe = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
          function Ce(e, t, a) {
            var n,
              i,
              r,
              s = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  n = 0;
                n < 12;
                ++n
              )
                (r = m([2e3, n])),
                  (this._shortMonthsParse[n] = this.monthsShort(r, '').toLocaleLowerCase()),
                  (this._longMonthsParse[n] = this.months(r, '').toLocaleLowerCase());
            return a
              ? 'MMM' === t
                ? -1 !== (i = xe.call(this._shortMonthsParse, s))
                  ? i
                  : null
                : -1 !== (i = xe.call(this._longMonthsParse, s))
                ? i
                : null
              : 'MMM' === t
              ? -1 !== (i = xe.call(this._shortMonthsParse, s))
                ? i
                : -1 !== (i = xe.call(this._longMonthsParse, s))
                ? i
                : null
              : -1 !== (i = xe.call(this._longMonthsParse, s))
              ? i
              : -1 !== (i = xe.call(this._shortMonthsParse, s))
              ? i
              : null;
          }
          function Ie(e, t) {
            var a;
            if (!e.isValid()) return e;
            if ('string' == typeof t)
              if (/^\d+$/.test(t)) t = v(t);
              else if (!d((t = e.localeData().monthsParse(t)))) return e;
            return (
              (a = Math.min(e.date(), Oe(e.year(), t))),
              e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, a),
              e
            );
          }
          function Ee(e) {
            return null != e ? (Ie(this, e), l.updateOffset(this, !0), this) : Pe(this, 'Month');
          }
          var ze = de;
          var Re = de;
          function Ne() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              a,
              n = [],
              i = [],
              r = [];
            for (t = 0; t < 12; t++)
              (a = m([2e3, t])),
                n.push(this.monthsShort(a, '')),
                i.push(this.months(a, '')),
                r.push(this.months(a, '')),
                r.push(this.monthsShort(a, ''));
            for (n.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
              (n[t] = he(n[t])), (i[t] = he(i[t]));
            for (t = 0; t < 24; t++) r[t] = he(r[t]);
            (this._monthsRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
              (this._monthsShortStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i'));
          }
          function Ve(e) {
            var t;
            if (e < 100 && 0 <= e) {
              var a = Array.prototype.slice.call(arguments);
              (a[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, a))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
            } else t = new Date(Date.UTC.apply(null, arguments));
            return t;
          }
          function Be(e, t, a) {
            var n = 7 + t - a,
              i = (7 + Ve(e, 0, n).getUTCDay() - t) % 7;
            return n - i - 1;
          }
          function Je(e, t, a, n, i) {
            var r,
              s,
              o = (7 + a - n) % 7,
              d = Be(e, n, i),
              l = 1 + 7 * (t - 1) + o + d;
            return (
              (s =
                l <= 0 ? we((r = e - 1)) + l : l > we(e) ? ((r = e + 1), l - we(e)) : ((r = e), l)),
              { year: r, dayOfYear: s }
            );
          }
          function Ue(e, t, a) {
            var n,
              i,
              r = Be(e.year(), t, a),
              s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return (
              s < 1
                ? ((i = e.year() - 1), (n = s + Ge(i, t, a)))
                : s > Ge(e.year(), t, a)
                ? ((n = s - Ge(e.year(), t, a)), (i = e.year() + 1))
                : ((i = e.year()), (n = s)),
              { week: n, year: i }
            );
          }
          function Ge(e, t, a) {
            var n = Be(e, t, a),
              i = Be(e + 1, t, a);
            return (we(e) - n + i) / 7;
          }
          V('w', ['ww', 2], 'wo', 'week'),
            V('W', ['WW', 2], 'Wo', 'isoWeek'),
            j('week', 'w'),
            j('isoWeek', 'W'),
            F('week', 5),
            F('isoWeek', 5),
            ue('w', X),
            ue('ww', X, q),
            ue('W', X),
            ue('WW', X, q),
            fe(['w', 'ww', 'W', 'WW'], function(e, t, a, n) {
              t[n.substr(0, 1)] = v(e);
            });
          function qe(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          V('d', 0, 'do', 'day'),
            V('dd', 0, 0, function(e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            V('ddd', 0, 0, function(e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            V('dddd', 0, 0, function(e) {
              return this.localeData().weekdays(this, e);
            }),
            V('e', 0, 0, 'weekday'),
            V('E', 0, 0, 'isoWeekday'),
            j('day', 'd'),
            j('weekday', 'e'),
            j('isoWeekday', 'E'),
            F('day', 11),
            F('weekday', 11),
            F('isoWeekday', 11),
            ue('d', X),
            ue('e', X),
            ue('E', X),
            ue('dd', function(e, t) {
              return t.weekdaysMinRegex(e);
            }),
            ue('ddd', function(e, t) {
              return t.weekdaysShortRegex(e);
            }),
            ue('dddd', function(e, t) {
              return t.weekdaysRegex(e);
            }),
            fe(['dd', 'ddd', 'dddd'], function(e, t, a, n) {
              var i = a._locale.weekdaysParse(e, n, a._strict);
              null != i ? (t.d = i) : (c(a).invalidWeekday = e);
            }),
            fe(['d', 'e', 'E'], function(e, t, a, n) {
              t[n] = v(e);
            });
          var Ke = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
          var Ze = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
          var $e = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
          function Xe(e, t, a) {
            var n,
              i,
              r,
              s = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  n = 0;
                n < 7;
                ++n
              )
                (r = m([2e3, 1]).day(n)),
                  (this._minWeekdaysParse[n] = this.weekdaysMin(r, '').toLocaleLowerCase()),
                  (this._shortWeekdaysParse[n] = this.weekdaysShort(r, '').toLocaleLowerCase()),
                  (this._weekdaysParse[n] = this.weekdays(r, '').toLocaleLowerCase());
            return a
              ? 'dddd' === t
                ? -1 !== (i = xe.call(this._weekdaysParse, s))
                  ? i
                  : null
                : 'ddd' === t
                ? -1 !== (i = xe.call(this._shortWeekdaysParse, s))
                  ? i
                  : null
                : -1 !== (i = xe.call(this._minWeekdaysParse, s))
                ? i
                : null
              : 'dddd' === t
              ? -1 !== (i = xe.call(this._weekdaysParse, s))
                ? i
                : -1 !== (i = xe.call(this._shortWeekdaysParse, s))
                ? i
                : -1 !== (i = xe.call(this._minWeekdaysParse, s))
                ? i
                : null
              : 'ddd' === t
              ? -1 !== (i = xe.call(this._shortWeekdaysParse, s))
                ? i
                : -1 !== (i = xe.call(this._weekdaysParse, s))
                ? i
                : -1 !== (i = xe.call(this._minWeekdaysParse, s))
                ? i
                : null
              : -1 !== (i = xe.call(this._minWeekdaysParse, s))
              ? i
              : -1 !== (i = xe.call(this._weekdaysParse, s))
              ? i
              : -1 !== (i = xe.call(this._shortWeekdaysParse, s))
              ? i
              : null;
          }
          var Qe = de;
          var et = de;
          var tt = de;
          function at() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              a,
              n,
              i,
              r,
              s = [],
              o = [],
              d = [],
              l = [];
            for (t = 0; t < 7; t++)
              (a = m([2e3, 1]).day(t)),
                (n = this.weekdaysMin(a, '')),
                (i = this.weekdaysShort(a, '')),
                (r = this.weekdays(a, '')),
                s.push(n),
                o.push(i),
                d.push(r),
                l.push(n),
                l.push(i),
                l.push(r);
            for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++)
              (o[t] = he(o[t])), (d[t] = he(d[t])), (l[t] = he(l[t]));
            (this._weekdaysRegex = new RegExp('^(' + l.join('|') + ')', 'i')),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp('^(' + d.join('|') + ')', 'i')),
              (this._weekdaysShortStrictRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
              (this._weekdaysMinStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i'));
          }
          function nt() {
            return this.hours() % 12 || 12;
          }
          function it(e, t) {
            V(e, 0, 0, function() {
              return this.localeData().meridiem(this.hours(), this.minutes(), t);
            });
          }
          function rt(e, t) {
            return t._meridiemParse;
          }
          V('H', ['HH', 2], 0, 'hour'),
            V('h', ['hh', 2], 0, nt),
            V('k', ['kk', 2], 0, function() {
              return this.hours() || 24;
            }),
            V('hmm', 0, 0, function() {
              return '' + nt.apply(this) + I(this.minutes(), 2);
            }),
            V('hmmss', 0, 0, function() {
              return '' + nt.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2);
            }),
            V('Hmm', 0, 0, function() {
              return '' + this.hours() + I(this.minutes(), 2);
            }),
            V('Hmmss', 0, 0, function() {
              return '' + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2);
            }),
            it('a', !0),
            it('A', !1),
            j('hour', 'h'),
            F('hour', 13),
            ue('a', rt),
            ue('A', rt),
            ue('H', X),
            ue('h', X),
            ue('k', X),
            ue('HH', X, q),
            ue('hh', X, q),
            ue('kk', X, q),
            ue('hmm', Q),
            ue('hmmss', ee),
            ue('Hmm', Q),
            ue('Hmmss', ee),
            ce(['H', 'HH'], Le),
            ce(['k', 'kk'], function(e, t, a) {
              var n = v(e);
              t[Le] = 24 === n ? 0 : n;
            }),
            ce(['a', 'A'], function(e, t, a) {
              (a._isPm = a._locale.isPM(e)), (a._meridiem = e);
            }),
            ce(['h', 'hh'], function(e, t, a) {
              (t[Le] = v(e)), (c(a).bigHour = !0);
            }),
            ce('hmm', function(e, t, a) {
              var n = e.length - 2;
              (t[Le] = v(e.substr(0, n))), (t[Ye] = v(e.substr(n))), (c(a).bigHour = !0);
            }),
            ce('hmmss', function(e, t, a) {
              var n = e.length - 4,
                i = e.length - 2;
              (t[Le] = v(e.substr(0, n))),
                (t[Ye] = v(e.substr(n, 2))),
                (t[ve] = v(e.substr(i))),
                (c(a).bigHour = !0);
            }),
            ce('Hmm', function(e, t, a) {
              var n = e.length - 2;
              (t[Le] = v(e.substr(0, n))), (t[Ye] = v(e.substr(n)));
            }),
            ce('Hmmss', function(e, t, a) {
              var n = e.length - 4,
                i = e.length - 2;
              (t[Le] = v(e.substr(0, n))), (t[Ye] = v(e.substr(n, 2))), (t[ve] = v(e.substr(i)));
            });
          var st,
            ot = He('Hours', !0),
            dt = {
              calendar: {
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                nextWeek: 'dddd [at] LT',
                lastDay: '[Yesterday at] LT',
                lastWeek: '[Last] dddd [at] LT',
                sameElse: 'L',
              },
              longDateFormat: {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A',
              },
              invalidDate: 'Invalid date',
              ordinal: '%d',
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'a few seconds',
                ss: '%d seconds',
                m: 'a minute',
                mm: '%d minutes',
                h: 'an hour',
                hh: '%d hours',
                d: 'a day',
                dd: '%d days',
                M: 'a month',
                MM: '%d months',
                y: 'a year',
                yy: '%d years',
              },
              months: We,
              monthsShort: Fe,
              week: { dow: 0, doy: 6 },
              weekdays: Ke,
              weekdaysMin: $e,
              weekdaysShort: Ze,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            lt = {},
            ut = {};
          function _t(e) {
            return e ? e.toLowerCase().replace('_', '-') : e;
          }
          function ht(e) {
            var t = null;
            if (!lt[e] && void 0 !== Qa && Qa && Qa.exports)
              try {
                t = st._abbr;
                en(467)('./' + e), mt(t);
              } catch (e) {}
            return lt[e];
          }
          function mt(e, t) {
            var a;
            return (
              e &&
                ((a = r(t) ? ft(e) : ct(e, t))
                  ? (st = a)
                  : 'undefined' != typeof console &&
                    console.warn &&
                    console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
              st._abbr
            );
          }
          function ct(e, t) {
            if (null === t) return delete lt[e], null;
            var a,
              n = dt;
            if (((t.abbr = e), null != lt[e]))
              T(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
              ),
                (n = lt[e]._config);
            else if (null != t.parentLocale)
              if (null != lt[t.parentLocale]) n = lt[t.parentLocale]._config;
              else {
                if (null == (a = ht(t.parentLocale)))
                  return (
                    ut[t.parentLocale] || (ut[t.parentLocale] = []),
                    ut[t.parentLocale].push({ name: e, config: t }),
                    null
                  );
                n = a._config;
              }
            return (
              (lt[e] = new H(S(n, t))),
              ut[e] &&
                ut[e].forEach(function(e) {
                  ct(e.name, e.config);
                }),
              mt(e),
              lt[e]
            );
          }
          function ft(e) {
            var t;
            if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return st;
            if (!s(e)) {
              if ((t = ht(e))) return t;
              e = [e];
            }
            return (function(e) {
              var t,
                a,
                n,
                i,
                r = 0;
              for (; r < e.length; ) {
                for (
                  i = _t(e[r]).split('-'),
                    t = i.length,
                    a = (a = _t(e[r + 1])) ? a.split('-') : null;
                  0 < t;

                ) {
                  if ((n = ht(i.slice(0, t).join('-')))) return n;
                  if (a && a.length >= t && k(i, a, !0) >= t - 1) break;
                  t--;
                }
                r++;
              }
              return st;
            })(e);
          }
          function Mt(e) {
            var t,
              a = e._a;
            return (
              a &&
                -2 === c(e).overflow &&
                ((t =
                  a[ye] < 0 || 11 < a[ye]
                    ? ye
                    : a[ge] < 1 || a[ge] > Oe(a[pe], a[ye])
                    ? ge
                    : a[Le] < 0 ||
                      24 < a[Le] ||
                      (24 === a[Le] && (0 !== a[Ye] || 0 !== a[ve] || 0 !== a[ke]))
                    ? Le
                    : a[Ye] < 0 || 59 < a[Ye]
                    ? Ye
                    : a[ve] < 0 || 59 < a[ve]
                    ? ve
                    : a[ke] < 0 || 999 < a[ke]
                    ? ke
                    : -1),
                c(e)._overflowDayOfYear && (t < pe || ge < t) && (t = ge),
                c(e)._overflowWeeks && -1 === t && (t = be),
                c(e)._overflowWeekday && -1 === t && (t = De),
                (c(e).overflow = t)),
              e
            );
          }
          function pt(e, t, a) {
            return null != e ? e : null != t ? t : a;
          }
          function yt(e) {
            var t,
              a,
              n,
              i,
              r,
              s = [];
            if (!e._d) {
              for (
                n = (function(e) {
                  var t = new Date(l.now());
                  if (e._useUTC) return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()];
                  return [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                  e._w &&
                    null == e._a[ge] &&
                    null == e._a[ye] &&
                    (function(e) {
                      var t, a, n, i, r, s, o, d;
                      if (null != (t = e._w).GG || null != t.W || null != t.E)
                        (r = 1),
                          (s = 4),
                          (a = pt(t.GG, e._a[pe], Ue(Ot(), 1, 4).year)),
                          (n = pt(t.W, 1)),
                          ((i = pt(t.E, 1)) < 1 || 7 < i) && (d = !0);
                      else {
                        (r = e._locale._week.dow), (s = e._locale._week.doy);
                        var l = Ue(Ot(), r, s);
                        (a = pt(t.gg, e._a[pe], l.year)),
                          (n = pt(t.w, l.week)),
                          null != t.d
                            ? ((i = t.d) < 0 || 6 < i) && (d = !0)
                            : null != t.e
                            ? ((i = t.e + r), (t.e < 0 || 6 < t.e) && (d = !0))
                            : (i = r);
                      }
                      n < 1 || n > Ge(a, r, s)
                        ? (c(e)._overflowWeeks = !0)
                        : null != d
                        ? (c(e)._overflowWeekday = !0)
                        : ((o = Je(a, n, i, r, s)),
                          (e._a[pe] = o.year),
                          (e._dayOfYear = o.dayOfYear));
                    })(e),
                  null != e._dayOfYear &&
                    ((r = pt(e._a[pe], n[pe])),
                    (e._dayOfYear > we(r) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0),
                    (a = Ve(r, 0, e._dayOfYear)),
                    (e._a[ye] = a.getUTCMonth()),
                    (e._a[ge] = a.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = s[t] = n[t];
              for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Le] &&
                0 === e._a[Ye] &&
                0 === e._a[ve] &&
                0 === e._a[ke] &&
                ((e._nextDay = !0), (e._a[Le] = 0)),
                (e._d = (e._useUTC
                  ? Ve
                  : function(e, t, a, n, i, r, s) {
                      var o;
                      e < 100 && 0 <= e
                        ? ((o = new Date(e + 400, t, a, n, i, r, s)),
                          isFinite(o.getFullYear()) && o.setFullYear(e))
                        : (o = new Date(e, t, a, n, i, r, s));
                      return o;
                    }
                ).apply(null, s)),
                (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Le] = 24),
                e._w && void 0 !== e._w.d && e._w.d !== i && (c(e).weekdayMismatch = !0);
            }
          }
          var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Lt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Yt = /Z|[+-]\d\d(?::?\d\d)?/,
            vt = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, !1],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
              ['YYYYDDD', /\d{7}/],
            ],
            kt = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
            ],
            bt = /^\/?Date\((\-?\d+)/i;
          function Dt(e) {
            var t,
              a,
              n,
              i,
              r,
              s,
              o = e._i,
              d = gt.exec(o) || Lt.exec(o);
            if (d) {
              for (c(e).iso = !0, t = 0, a = vt.length; t < a; t++)
                if (vt[t][1].exec(d[1])) {
                  (i = vt[t][0]), (n = !1 !== vt[t][2]);
                  break;
                }
              if (null == i) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, a = kt.length; t < a; t++)
                  if (kt[t][1].exec(d[3])) {
                    r = (d[2] || ' ') + kt[t][0];
                    break;
                  }
                if (null == r) return void (e._isValid = !1);
              }
              if (!n && null != r) return void (e._isValid = !1);
              if (d[4]) {
                if (!Yt.exec(d[4])) return void (e._isValid = !1);
                s = 'Z';
              }
              (e._f = i + (r || '') + (s || '')), Ht(e);
            } else e._isValid = !1;
          }
          var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
          function Tt(e, t, a, n, i, r) {
            var s = [
              (function(e) {
                var t = parseInt(e, 10);
                {
                  if (t <= 49) return 2e3 + t;
                  if (t <= 999) return 1900 + t;
                }
                return t;
              })(e),
              Fe.indexOf(t),
              parseInt(a, 10),
              parseInt(n, 10),
              parseInt(i, 10),
            ];
            return r && s.push(parseInt(r, 10)), s;
          }
          var xt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function St(e) {
            var t = wt.exec(
              (function(e) {
                return e
                  .replace(/\([^)]*\)|[\n\t]/g, ' ')
                  .replace(/(\s\s+)/g, ' ')
                  .replace(/^\s\s*/, '')
                  .replace(/\s\s*$/, '');
              })(e._i),
            );
            if (t) {
              var a = Tt(t[4], t[3], t[2], t[5], t[6], t[7]);
              if (
                !(function(e, t, a) {
                  if (e) {
                    var n = Ze.indexOf(e),
                      i = new Date(t[0], t[1], t[2]).getDay();
                    if (n !== i) return (c(a).weekdayMismatch = !0), (a._isValid = !1);
                  }
                  return !0;
                })(t[1], a, e)
              )
                return;
              (e._a = a),
                (e._tzm = (function(e, t, a) {
                  {
                    if (e) return xt[e];
                    if (t) return 0;
                    var n = parseInt(a, 10),
                      i = n % 100;
                    return 60 * ((n - i) / 100) + i;
                  }
                })(t[8], t[9], t[10])),
                (e._d = Ve.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (c(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function Ht(e) {
            if (e._f !== l.ISO_8601)
              if (e._f !== l.RFC_2822) {
                (e._a = []), (c(e).empty = !0);
                var t,
                  a,
                  n,
                  i,
                  r,
                  s = '' + e._i,
                  o = s.length,
                  d = 0;
                for (n = U(e._f, e._locale).match(E) || [], t = 0; t < n.length; t++)
                  (i = n[t]),
                    (a = (s.match(_e(i, e)) || [])[0]) &&
                      (0 < (r = s.substr(0, s.indexOf(a))).length && c(e).unusedInput.push(r),
                      (s = s.slice(s.indexOf(a) + a.length)),
                      (d += a.length)),
                    N[i]
                      ? (a ? (c(e).empty = !1) : c(e).unusedTokens.push(i), Me(i, a, e))
                      : e._strict && !a && c(e).unusedTokens.push(i);
                (c(e).charsLeftOver = o - d),
                  0 < s.length && c(e).unusedInput.push(s),
                  e._a[Le] <= 12 && !0 === c(e).bigHour && 0 < e._a[Le] && (c(e).bigHour = void 0),
                  (c(e).parsedDateParts = e._a.slice(0)),
                  (c(e).meridiem = e._meridiem),
                  (e._a[Le] = (function(e, t, a) {
                    var n;
                    if (null == a) return t;
                    return null != e.meridiemHour
                      ? e.meridiemHour(t, a)
                      : (null != e.isPM &&
                          ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0)),
                        t);
                  })(e._locale, e._a[Le], e._meridiem)),
                  yt(e),
                  Mt(e);
              } else St(e);
            else Dt(e);
          }
          function Pt(e) {
            var t = e._i,
              a = e._f;
            return (
              (e._locale = e._locale || ft(e._l)),
              null === t || (void 0 === a && '' === t)
                ? M({ nullInput: !0 })
                : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                  L(t)
                    ? new g(Mt(t))
                    : (u(t)
                        ? (e._d = t)
                        : s(a)
                        ? (function(e) {
                            var t, a, n, i, r;
                            if (0 === e._f.length)
                              return (c(e).invalidFormat = !0), (e._d = new Date(NaN));
                            for (i = 0; i < e._f.length; i++)
                              (r = 0),
                                (t = y({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[i]),
                                Ht(t),
                                f(t) &&
                                  ((r += c(t).charsLeftOver),
                                  (r += 10 * c(t).unusedTokens.length),
                                  (c(t).score = r),
                                  (null == n || r < n) && ((n = r), (a = t)));
                            h(e, a || t);
                          })(e)
                        : a
                        ? Ht(e)
                        : (function(e) {
                            var t = e._i;
                            r(t)
                              ? (e._d = new Date(l.now()))
                              : u(t)
                              ? (e._d = new Date(t.valueOf()))
                              : 'string' == typeof t
                              ? (function(e) {
                                  var t = bt.exec(e._i);
                                  if (null !== t) return (e._d = new Date(+t[1]));
                                  {
                                    if ((Dt(e), !1 !== e._isValid)) return;
                                    delete e._isValid;
                                  }
                                  {
                                    if ((St(e), !1 !== e._isValid)) return;
                                    delete e._isValid;
                                  }
                                  l.createFromInputFallback(e);
                                })(e)
                              : s(t)
                              ? ((e._a = n(t.slice(0), function(e) {
                                  return parseInt(e, 10);
                                })),
                                yt(e))
                              : o(t)
                              ? (function(e) {
                                  if (e._d) return;
                                  var t = A(e._i);
                                  (e._a = n(
                                    [
                                      t.year,
                                      t.month,
                                      t.day || t.date,
                                      t.hour,
                                      t.minute,
                                      t.second,
                                      t.millisecond,
                                    ],
                                    function(e) {
                                      return e && parseInt(e, 10);
                                    },
                                  )),
                                    yt(e);
                                })(e)
                              : d(t)
                              ? (e._d = new Date(t))
                              : l.createFromInputFallback(e);
                          })(e),
                      f(e) || (e._d = null),
                      e))
            );
          }
          function jt(e, t, a, n, i) {
            var r = {};
            return (
              (!0 !== a && !1 !== a) || ((n = a), (a = void 0)),
              ((o(e) &&
                (function(e) {
                  {
                    if (Object.getOwnPropertyNames)
                      return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                  }
                })(e)) ||
                (s(e) && 0 === e.length)) &&
                (e = void 0),
              (r._isAMomentObject = !0),
              (r._useUTC = r._isUTC = i),
              (r._l = a),
              (r._i = e),
              (r._f = t),
              (r._strict = n),
              (function(e) {
                var t = new g(Mt(Pt(e)));
                t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0));
                return t;
              })(r)
            );
          }
          function Ot(e, t, a, n) {
            return jt(e, t, a, n, !1);
          }
          (l.createFromInputFallback = e(
            'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            function(e) {
              e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
            },
          )),
            (l.ISO_8601 = function() {}),
            (l.RFC_2822 = function() {});
          var At = e(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function() {
                var e = Ot.apply(null, arguments);
                return this.isValid() && e.isValid() ? (e < this ? this : e) : M();
              },
            ),
            Wt = e(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function() {
                var e = Ot.apply(null, arguments);
                return this.isValid() && e.isValid() ? (this < e ? this : e) : M();
              },
            );
          function Ft(e, t) {
            var a, n;
            if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return Ot();
            for (a = t[0], n = 1; n < t.length; ++n) (t[n].isValid() && !t[n][e](a)) || (a = t[n]);
            return a;
          }
          var Ct = [
            'year',
            'quarter',
            'month',
            'week',
            'day',
            'hour',
            'minute',
            'second',
            'millisecond',
          ];
          function It(e) {
            var t = A(e),
              a = t.year || 0,
              n = t.quarter || 0,
              i = t.month || 0,
              r = t.week || t.isoWeek || 0,
              s = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              l = t.second || 0,
              u = t.millisecond || 0;
            (this._isValid = (function(e) {
              for (var t in e)
                if (-1 === xe.call(Ct, t) || (null != e[t] && isNaN(e[t]))) return !1;
              for (var a = !1, n = 0; n < Ct.length; ++n)
                if (e[Ct[n]]) {
                  if (a) return !1;
                  parseFloat(e[Ct[n]]) !== v(e[Ct[n]]) && (a = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60),
              (this._days = +s + 7 * r),
              (this._months = +i + 3 * n + 12 * a),
              (this._data = {}),
              (this._locale = ft()),
              this._bubble();
          }
          function Et(e) {
            return e instanceof It;
          }
          function zt(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function Rt(e, a) {
            V(e, 0, 0, function() {
              var e = this.utcOffset(),
                t = '+';
              return e < 0 && ((e = -e), (t = '-')), t + I(~~(e / 60), 2) + a + I(~~e % 60, 2);
            });
          }
          Rt('Z', ':'),
            Rt('ZZ', ''),
            ue('Z', oe),
            ue('ZZ', oe),
            ce(['Z', 'ZZ'], function(e, t, a) {
              (a._useUTC = !0), (a._tzm = Vt(oe, e));
            });
          var Nt = /([\+\-]|\d\d)/gi;
          function Vt(e, t) {
            var a = (t || '').match(e);
            if (null === a) return null;
            var n = a[a.length - 1] || [],
              i = (n + '').match(Nt) || ['-', 0, 0],
              r = 60 * i[1] + v(i[2]);
            return 0 === r ? 0 : '+' === i[0] ? r : -r;
          }
          function Bt(e, t) {
            var a, n;
            return t._isUTC
              ? ((a = t.clone()),
                (n = (L(e) || u(e) ? e.valueOf() : Ot(e).valueOf()) - a.valueOf()),
                a._d.setTime(a._d.valueOf() + n),
                l.updateOffset(a, !1),
                a)
              : Ot(e).local();
          }
          function Jt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function Ut() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset);
          }
          l.updateOffset = function() {};
          var Gt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            qt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Kt(e, t) {
            var a,
              n,
              i,
              r = e,
              s = null;
            return (
              Et(e)
                ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
                : d(e)
                ? ((r = {}), t ? (r[t] = e) : (r.milliseconds = e))
                : (s = Gt.exec(e))
                ? ((a = '-' === s[1] ? -1 : 1),
                  (r = {
                    y: 0,
                    d: v(s[ge]) * a,
                    h: v(s[Le]) * a,
                    m: v(s[Ye]) * a,
                    s: v(s[ve]) * a,
                    ms: v(zt(1e3 * s[ke])) * a,
                  }))
                : (s = qt.exec(e))
                ? ((a = '-' === s[1] ? -1 : 1),
                  (r = {
                    y: Zt(s[2], a),
                    M: Zt(s[3], a),
                    w: Zt(s[4], a),
                    d: Zt(s[5], a),
                    h: Zt(s[6], a),
                    m: Zt(s[7], a),
                    s: Zt(s[8], a),
                  }))
                : null == r
                ? (r = {})
                : 'object' == typeof r &&
                  ('from' in r || 'to' in r) &&
                  ((i = (function(e, t) {
                    var a;
                    if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };
                    (t = Bt(t, e)),
                      e.isBefore(t)
                        ? (a = $t(e, t))
                        : (((a = $t(t, e)).milliseconds = -a.milliseconds), (a.months = -a.months));
                    return a;
                  })(Ot(r.from), Ot(r.to))),
                  ((r = {}).ms = i.milliseconds),
                  (r.M = i.months)),
              (n = new It(r)),
              Et(e) && _(e, '_locale') && (n._locale = e._locale),
              n
            );
          }
          function Zt(e, t) {
            var a = e && parseFloat(e.replace(',', '.'));
            return (isNaN(a) ? 0 : a) * t;
          }
          function $t(e, t) {
            var a = {};
            return (
              (a.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e
                .clone()
                .add(a.months, 'M')
                .isAfter(t) && --a.months,
              (a.milliseconds = +t - +e.clone().add(a.months, 'M')),
              a
            );
          }
          function Xt(n, i) {
            return function(e, t) {
              var a;
              return (
                null === t ||
                  isNaN(+t) ||
                  (T(
                    i,
                    'moment().' +
                      i +
                      '(period, number) is deprecated. Please use moment().' +
                      i +
                      '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
                  ),
                  (a = e),
                  (e = t),
                  (t = a)),
                Qt(this, Kt((e = 'string' == typeof e ? +e : e), t), n),
                this
              );
            };
          }
          function Qt(e, t, a, n) {
            var i = t._milliseconds,
              r = zt(t._days),
              s = zt(t._months);
            e.isValid() &&
              ((n = null == n || n),
              s && Ie(e, Pe(e, 'Month') + s * a),
              r && je(e, 'Date', Pe(e, 'Date') + r * a),
              i && e._d.setTime(e._d.valueOf() + i * a),
              n && l.updateOffset(e, r || s));
          }
          (Kt.fn = It.prototype),
            (Kt.invalid = function() {
              return Kt(NaN);
            });
          var ea = Xt(1, 'add'),
            ta = Xt(-1, 'subtract');
          function aa(e, t) {
            var a,
              n,
              i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(i, 'months');
            return (
              (n =
                t - r < 0
                  ? ((a = e.clone().add(i - 1, 'months')), (t - r) / (r - a))
                  : ((a = e.clone().add(1 + i, 'months')), (t - r) / (a - r))),
              -(i + n) || 0
            );
          }
          function na(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = ft(e)) && (this._locale = t), this);
          }
          (l.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
            (l.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
          var ia = e(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function(e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            },
          );
          function ra() {
            return this._locale;
          }
          var sa = 126227808e5;
          function oa(e, t) {
            return ((e % t) + t) % t;
          }
          function da(e, t, a) {
            return e < 100 && 0 <= e ? new Date(e + 400, t, a) - sa : new Date(e, t, a).valueOf();
          }
          function la(e, t, a) {
            return e < 100 && 0 <= e ? Date.UTC(e + 400, t, a) - sa : Date.UTC(e, t, a);
          }
          function ua(e, t) {
            V(0, [e, e.length], 0, t);
          }
          function _a(e, t, a, n, i) {
            var r;
            return null == e
              ? Ue(this, n, i).year
              : ((r = Ge(e, n, i)) < t && (t = r),
                function(e, t, a, n, i) {
                  var r = Je(e, t, a, n, i),
                    s = Ve(r.year, 0, r.dayOfYear);
                  return (
                    this.year(s.getUTCFullYear()),
                    this.month(s.getUTCMonth()),
                    this.date(s.getUTCDate()),
                    this
                  );
                }.call(this, e, t, a, n, i));
          }
          V(0, ['gg', 2], 0, function() {
            return this.weekYear() % 100;
          }),
            V(0, ['GG', 2], 0, function() {
              return this.isoWeekYear() % 100;
            }),
            ua('gggg', 'weekYear'),
            ua('ggggg', 'weekYear'),
            ua('GGGG', 'isoWeekYear'),
            ua('GGGGG', 'isoWeekYear'),
            j('weekYear', 'gg'),
            j('isoWeekYear', 'GG'),
            F('weekYear', 1),
            F('isoWeekYear', 1),
            ue('G', re),
            ue('g', re),
            ue('GG', X, q),
            ue('gg', X, q),
            ue('GGGG', ae, Z),
            ue('gggg', ae, Z),
            ue('GGGGG', ne, $),
            ue('ggggg', ne, $),
            fe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(e, t, a, n) {
              t[n.substr(0, 2)] = v(e);
            }),
            fe(['gg', 'GG'], function(e, t, a, n) {
              t[n] = l.parseTwoDigitYear(e);
            }),
            V('Q', 0, 'Qo', 'quarter'),
            j('quarter', 'Q'),
            F('quarter', 7),
            ue('Q', G),
            ce('Q', function(e, t) {
              t[ye] = 3 * (v(e) - 1);
            }),
            V('D', ['DD', 2], 'Do', 'date'),
            j('date', 'D'),
            F('date', 9),
            ue('D', X),
            ue('DD', X, q),
            ue('Do', function(e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            ce(['D', 'DD'], ge),
            ce('Do', function(e, t) {
              t[ge] = v(e.match(X)[0]);
            });
          var ha = He('Date', !0);
          V('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
            j('dayOfYear', 'DDD'),
            F('dayOfYear', 4),
            ue('DDD', te),
            ue('DDDD', K),
            ce(['DDD', 'DDDD'], function(e, t, a) {
              a._dayOfYear = v(e);
            }),
            V('m', ['mm', 2], 0, 'minute'),
            j('minute', 'm'),
            F('minute', 14),
            ue('m', X),
            ue('mm', X, q),
            ce(['m', 'mm'], Ye);
          var ma = He('Minutes', !1);
          V('s', ['ss', 2], 0, 'second'),
            j('second', 's'),
            F('second', 15),
            ue('s', X),
            ue('ss', X, q),
            ce(['s', 'ss'], ve);
          var ca,
            fa = He('Seconds', !1);
          for (
            V('S', 0, 0, function() {
              return ~~(this.millisecond() / 100);
            }),
              V(0, ['SS', 2], 0, function() {
                return ~~(this.millisecond() / 10);
              }),
              V(0, ['SSS', 3], 0, 'millisecond'),
              V(0, ['SSSS', 4], 0, function() {
                return 10 * this.millisecond();
              }),
              V(0, ['SSSSS', 5], 0, function() {
                return 100 * this.millisecond();
              }),
              V(0, ['SSSSSS', 6], 0, function() {
                return 1e3 * this.millisecond();
              }),
              V(0, ['SSSSSSS', 7], 0, function() {
                return 1e4 * this.millisecond();
              }),
              V(0, ['SSSSSSSS', 8], 0, function() {
                return 1e5 * this.millisecond();
              }),
              V(0, ['SSSSSSSSS', 9], 0, function() {
                return 1e6 * this.millisecond();
              }),
              j('millisecond', 'ms'),
              F('millisecond', 16),
              ue('S', te, G),
              ue('SS', te, q),
              ue('SSS', te, K),
              ca = 'SSSS';
            ca.length <= 9;
            ca += 'S'
          )
            ue(ca, ie);
          function Ma(e, t) {
            t[ke] = v(1e3 * ('0.' + e));
          }
          for (ca = 'S'; ca.length <= 9; ca += 'S') ce(ca, Ma);
          var pa = He('Milliseconds', !1);
          V('z', 0, 0, 'zoneAbbr'), V('zz', 0, 0, 'zoneName');
          var ya = g.prototype;
          function ga(e) {
            return e;
          }
          (ya.add = ea),
            (ya.calendar = function(e, t) {
              var a = e || Ot(),
                n = Bt(a, this).startOf('day'),
                i = l.calendarFormat(this, n) || 'sameElse',
                r = t && (x(t[i]) ? t[i].call(this, a) : t[i]);
              return this.format(r || this.localeData().calendar(i, this, Ot(a)));
            }),
            (ya.clone = function() {
              return new g(this);
            }),
            (ya.diff = function(e, t, a) {
              var n, i, r;
              if (!this.isValid()) return NaN;
              if (!(n = Bt(e, this)).isValid()) return NaN;
              switch (((i = 6e4 * (n.utcOffset() - this.utcOffset())), (t = O(t)))) {
                case 'year':
                  r = aa(this, n) / 12;
                  break;
                case 'month':
                  r = aa(this, n);
                  break;
                case 'quarter':
                  r = aa(this, n) / 3;
                  break;
                case 'second':
                  r = (this - n) / 1e3;
                  break;
                case 'minute':
                  r = (this - n) / 6e4;
                  break;
                case 'hour':
                  r = (this - n) / 36e5;
                  break;
                case 'day':
                  r = (this - n - i) / 864e5;
                  break;
                case 'week':
                  r = (this - n - i) / 6048e5;
                  break;
                default:
                  r = this - n;
              }
              return a ? r : Y(r);
            }),
            (ya.endOf = function(e) {
              var t;
              if (void 0 === (e = O(e)) || 'millisecond' === e || !this.isValid()) return this;
              var a = this._isUTC ? la : da;
              switch (e) {
                case 'year':
                  t = a(this.year() + 1, 0, 1) - 1;
                  break;
                case 'quarter':
                  t = a(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                  break;
                case 'month':
                  t = a(this.year(), this.month() + 1, 1) - 1;
                  break;
                case 'week':
                  t = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                  break;
                case 'isoWeek':
                  t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                  break;
                case 'day':
                case 'date':
                  t = a(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case 'hour':
                  (t = this._d.valueOf()),
                    (t += 36e5 - oa(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1);
                  break;
                case 'minute':
                  (t = this._d.valueOf()), (t += 6e4 - oa(t, 6e4) - 1);
                  break;
                case 'second':
                  (t = this._d.valueOf()), (t += 1e3 - oa(t, 1e3) - 1);
              }
              return this._d.setTime(t), l.updateOffset(this, !0), this;
            }),
            (ya.format = function(e) {
              e = e || (this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
              var t = J(this, e);
              return this.localeData().postformat(t);
            }),
            (ya.from = function(e, t) {
              return this.isValid() && ((L(e) && e.isValid()) || Ot(e).isValid())
                ? Kt({ to: this, from: e })
                    .locale(this.locale())
                    .humanize(!t)
                : this.localeData().invalidDate();
            }),
            (ya.fromNow = function(e) {
              return this.from(Ot(), e);
            }),
            (ya.to = function(e, t) {
              return this.isValid() && ((L(e) && e.isValid()) || Ot(e).isValid())
                ? Kt({ from: this, to: e })
                    .locale(this.locale())
                    .humanize(!t)
                : this.localeData().invalidDate();
            }),
            (ya.toNow = function(e) {
              return this.to(Ot(), e);
            }),
            (ya.get = function(e) {
              if (x(this[(e = O(e))])) return this[e]();
              return this;
            }),
            (ya.invalidAt = function() {
              return c(this).overflow;
            }),
            (ya.isAfter = function(e, t) {
              var a = L(e) ? e : Ot(e);
              if (!this.isValid() || !a.isValid()) return !1;
              return 'millisecond' === (t = O(t) || 'millisecond')
                ? this.valueOf() > a.valueOf()
                : a.valueOf() <
                    this.clone()
                      .startOf(t)
                      .valueOf();
            }),
            (ya.isBefore = function(e, t) {
              var a = L(e) ? e : Ot(e);
              if (!this.isValid() || !a.isValid()) return !1;
              return 'millisecond' === (t = O(t) || 'millisecond')
                ? this.valueOf() < a.valueOf()
                : this.clone()
                    .endOf(t)
                    .valueOf() < a.valueOf();
            }),
            (ya.isBetween = function(e, t, a, n) {
              var i = L(e) ? e : Ot(e),
                r = L(t) ? t : Ot(t);
              return (
                !!(this.isValid() && i.isValid() && r.isValid()) &&
                (('(' === (n = n || '()')[0] ? this.isAfter(i, a) : !this.isBefore(i, a)) &&
                  (')' === n[1] ? this.isBefore(r, a) : !this.isAfter(r, a)))
              );
            }),
            (ya.isSame = function(e, t) {
              var a,
                n = L(e) ? e : Ot(e);
              if (!this.isValid() || !n.isValid()) return !1;
              return 'millisecond' === (t = O(t) || 'millisecond')
                ? this.valueOf() === n.valueOf()
                : ((a = n.valueOf()),
                  this.clone()
                    .startOf(t)
                    .valueOf() <= a &&
                    a <=
                      this.clone()
                        .endOf(t)
                        .valueOf());
            }),
            (ya.isSameOrAfter = function(e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (ya.isSameOrBefore = function(e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (ya.isValid = function() {
              return f(this);
            }),
            (ya.lang = ia),
            (ya.locale = na),
            (ya.localeData = ra),
            (ya.max = Wt),
            (ya.min = At),
            (ya.parsingFlags = function() {
              return h({}, c(this));
            }),
            (ya.set = function(e, t) {
              if ('object' == typeof e)
                for (var a = C((e = A(e))), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
              else if (x(this[(e = O(e))])) return this[e](t);
              return this;
            }),
            (ya.startOf = function(e) {
              var t;
              if (void 0 === (e = O(e)) || 'millisecond' === e || !this.isValid()) return this;
              var a = this._isUTC ? la : da;
              switch (e) {
                case 'year':
                  t = a(this.year(), 0, 1);
                  break;
                case 'quarter':
                  t = a(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case 'month':
                  t = a(this.year(), this.month(), 1);
                  break;
                case 'week':
                  t = a(this.year(), this.month(), this.date() - this.weekday());
                  break;
                case 'isoWeek':
                  t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                  break;
                case 'day':
                case 'date':
                  t = a(this.year(), this.month(), this.date());
                  break;
                case 'hour':
                  (t = this._d.valueOf()),
                    (t -= oa(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
                  break;
                case 'minute':
                  (t = this._d.valueOf()), (t -= oa(t, 6e4));
                  break;
                case 'second':
                  (t = this._d.valueOf()), (t -= oa(t, 1e3));
              }
              return this._d.setTime(t), l.updateOffset(this, !0), this;
            }),
            (ya.subtract = ta),
            (ya.toArray = function() {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
              ];
            }),
            (ya.toObject = function() {
              var e = this;
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              };
            }),
            (ya.toDate = function() {
              return new Date(this.valueOf());
            }),
            (ya.toISOString = function(e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                a = t ? this.clone().utc() : this;
              if (a.year() < 0 || 9999 < a.year())
                return J(a, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
              if (x(Date.prototype.toISOString))
                return t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace('Z', J(a, 'Z'));
              return J(a, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
            }),
            (ya.inspect = function() {
              if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
              var e = 'moment',
                t = '';
              this.isLocal() ||
                ((e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (t = 'Z'));
              var a = '[' + e + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
                i = t + '[")]';
              return this.format(a + n + '-MM-DD[T]HH:mm:ss.SSS' + i);
            }),
            (ya.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }),
            (ya.toString = function() {
              return this.clone()
                .locale('en')
                .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            }),
            (ya.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (ya.valueOf = function() {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (ya.creationData = function() {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (ya.year = Se),
            (ya.isLeapYear = function() {
              return Te(this.year());
            }),
            (ya.weekYear = function(e) {
              return _a.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy,
              );
            }),
            (ya.isoWeekYear = function(e) {
              return _a.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (ya.quarter = ya.quarters = function(e) {
              return null == e
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (e - 1) + (this.month() % 3));
            }),
            (ya.month = Ee),
            (ya.daysInMonth = function() {
              return Oe(this.year(), this.month());
            }),
            (ya.week = ya.weeks = function(e) {
              var t = this.localeData().week(this);
              return null == e ? t : this.add(7 * (e - t), 'd');
            }),
            (ya.isoWeek = ya.isoWeeks = function(e) {
              var t = Ue(this, 1, 4).week;
              return null == e ? t : this.add(7 * (e - t), 'd');
            }),
            (ya.weeksInYear = function() {
              var e = this.localeData()._week;
              return Ge(this.year(), e.dow, e.doy);
            }),
            (ya.isoWeeksInYear = function() {
              return Ge(this.year(), 1, 4);
            }),
            (ya.date = ha),
            (ya.day = ya.days = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != e
                ? ((a = e),
                  (n = this.localeData()),
                  (e =
                    'string' == typeof a
                      ? isNaN(a)
                        ? 'number' != typeof (a = n.weekdaysParse(a))
                          ? null
                          : a
                        : parseInt(a, 10)
                      : a),
                  this.add(e - t, 'd'))
                : t;
              var a, n;
            }),
            (ya.weekday = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (ya.isoWeekday = function(e) {
              if (!this.isValid()) return null != e ? this : NaN;
              {
                if (null == e) return this.day() || 7;
                var t =
                  ((a = e),
                  (n = this.localeData()),
                  'string' != typeof a ? (isNaN(a) ? null : a) : n.weekdaysParse(a) % 7 || 7);
                return this.day(this.day() % 7 ? t : t - 7);
              }
              var a, n;
            }),
            (ya.dayOfYear = function(e) {
              var t =
                Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) +
                1;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (ya.hour = ya.hours = ot),
            (ya.minute = ya.minutes = ma),
            (ya.second = ya.seconds = fa),
            (ya.millisecond = ya.milliseconds = pa),
            (ya.utcOffset = function(e, t, a) {
              var n,
                i = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              {
                if (null == e) return this._isUTC ? i : Jt(this);
                if ('string' == typeof e) {
                  if (null === (e = Vt(oe, e))) return this;
                } else Math.abs(e) < 16 && !a && (e *= 60);
                return (
                  !this._isUTC && t && (n = Jt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != n && this.add(n, 'm'),
                  i !== e &&
                    (!t || this._changeInProgress
                      ? Qt(this, Kt(e - i, 'm'), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        l.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
            }),
            (ya.utc = function(e) {
              return this.utcOffset(0, e);
            }),
            (ya.local = function(e) {
              this._isUTC &&
                (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Jt(this), 'm'));
              return this;
            }),
            (ya.parseZone = function() {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ('string' == typeof this._i) {
                var e = Vt(se, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (ya.hasAlignedHourOffset = function(e) {
              return (
                !!this.isValid() &&
                ((e = e ? Ot(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
              );
            }),
            (ya.isDST = function() {
              return (
                this.utcOffset() >
                  this.clone()
                    .month(0)
                    .utcOffset() ||
                this.utcOffset() >
                  this.clone()
                    .month(5)
                    .utcOffset()
              );
            }),
            (ya.isLocal = function() {
              return !!this.isValid() && !this._isUTC;
            }),
            (ya.isUtcOffset = function() {
              return !!this.isValid() && this._isUTC;
            }),
            (ya.isUtc = Ut),
            (ya.isUTC = Ut),
            (ya.zoneAbbr = function() {
              return this._isUTC ? 'UTC' : '';
            }),
            (ya.zoneName = function() {
              return this._isUTC ? 'Coordinated Universal Time' : '';
            }),
            (ya.dates = e('dates accessor is deprecated. Use date instead.', ha)),
            (ya.months = e('months accessor is deprecated. Use month instead', Ee)),
            (ya.years = e('years accessor is deprecated. Use year instead', Se)),
            (ya.zone = e(
              'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
              function(e, t) {
                return null != e
                  ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this)
                  : -this.utcOffset();
              },
            )),
            (ya.isDSTShifted = e(
              'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
              function() {
                if (!r(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if ((y(e, this), (e = Pt(e))._a)) {
                  var t = e._isUTC ? m(e._a) : Ot(e._a);
                  this._isDSTShifted = this.isValid() && 0 < k(e._a, t.toArray());
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
              },
            ));
          var La = H.prototype;
          function Ya(e, t, a, n) {
            var i = ft(),
              r = m().set(n, t);
            return i[a](r, e);
          }
          function va(e, t, a) {
            if ((d(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
              return Ya(e, t, a, 'month');
            var n,
              i = [];
            for (n = 0; n < 12; n++) i[n] = Ya(e, n, a, 'month');
            return i;
          }
          function ka(e, t, a, n) {
            t =
              ('boolean' == typeof e
                ? d(t) && ((a = t), (t = void 0))
                : ((t = e), (e = !1), d((a = t)) && ((a = t), (t = void 0))),
              t || '');
            var i,
              r = ft(),
              s = e ? r._week.dow : 0;
            if (null != a) return Ya(t, (a + s) % 7, n, 'day');
            var o = [];
            for (i = 0; i < 7; i++) o[i] = Ya(t, (i + s) % 7, n, 'day');
            return o;
          }
          (La.calendar = function(e, t, a) {
            var n = this._calendar[e] || this._calendar.sameElse;
            return x(n) ? n.call(t, a) : n;
          }),
            (La.longDateFormat = function(e) {
              var t = this._longDateFormat[e],
                a = this._longDateFormat[e.toUpperCase()];
              return !t && a
                ? ((this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1);
                  })),
                  this._longDateFormat[e])
                : t;
            }),
            (La.invalidDate = function() {
              return this._invalidDate;
            }),
            (La.ordinal = function(e) {
              return this._ordinal.replace('%d', e);
            }),
            (La.preparse = ga),
            (La.postformat = ga),
            (La.relativeTime = function(e, t, a, n) {
              var i = this._relativeTime[a];
              return x(i) ? i(e, t, a, n) : i.replace(/%d/i, e);
            }),
            (La.pastFuture = function(e, t) {
              var a = this._relativeTime[0 < e ? 'future' : 'past'];
              return x(a) ? a(t) : a.replace(/%s/i, t);
            }),
            (La.set = function(e) {
              var t, a;
              for (a in e) x((t = e[a])) ? (this[a] = t) : (this['_' + a] = t);
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                    '|' +
                    /\d{1,2}/.source,
                ));
            }),
            (La.months = function(e, t) {
              return e
                ? s(this._months)
                  ? this._months[e.month()]
                  : this._months[(this._months.isFormat || Ae).test(t) ? 'format' : 'standalone'][
                      e.month()
                    ]
                : s(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (La.monthsShort = function(e, t) {
              return e
                ? s(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[Ae.test(t) ? 'format' : 'standalone'][e.month()]
                : s(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (La.monthsParse = function(e, t, a) {
              var n, i, r;
              if (this._monthsParseExact) return Ce.call(this, e, t, a);
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = []));
              for (n = 0; n < 12; n++) {
                if (
                  ((i = m([2e3, n])),
                  a &&
                    !this._longMonthsParse[n] &&
                    ((this._longMonthsParse[n] = new RegExp(
                      '^' + this.months(i, '').replace('.', '') + '$',
                      'i',
                    )),
                    (this._shortMonthsParse[n] = new RegExp(
                      '^' + this.monthsShort(i, '').replace('.', '') + '$',
                      'i',
                    ))),
                  a ||
                    this._monthsParse[n] ||
                    ((r = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
                    (this._monthsParse[n] = new RegExp(r.replace('.', ''), 'i'))),
                  a && 'MMMM' === t && this._longMonthsParse[n].test(e))
                )
                  return n;
                if (a && 'MMM' === t && this._shortMonthsParse[n].test(e)) return n;
                if (!a && this._monthsParse[n].test(e)) return n;
              }
            }),
            (La.monthsRegex = function(e) {
              return this._monthsParseExact
                ? (_(this, '_monthsRegex') || Ne.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (_(this, '_monthsRegex') || (this._monthsRegex = Re),
                  this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
            }),
            (La.monthsShortRegex = function(e) {
              return this._monthsParseExact
                ? (_(this, '_monthsRegex') || Ne.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (_(this, '_monthsShortRegex') || (this._monthsShortRegex = ze),
                  this._monthsShortStrictRegex && e
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (La.week = function(e) {
              return Ue(e, this._week.dow, this._week.doy).week;
            }),
            (La.firstDayOfYear = function() {
              return this._week.doy;
            }),
            (La.firstDayOfWeek = function() {
              return this._week.dow;
            }),
            (La.weekdays = function(e, t) {
              var a = s(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    e && !0 !== e && this._weekdays.isFormat.test(t) ? 'format' : 'standalone'
                  ];
              return !0 === e ? qe(a, this._week.dow) : e ? a[e.day()] : a;
            }),
            (La.weekdaysMin = function(e) {
              return !0 === e
                ? qe(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
            }),
            (La.weekdaysShort = function(e) {
              return !0 === e
                ? qe(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
            }),
            (La.weekdaysParse = function(e, t, a) {
              var n, i, r;
              if (this._weekdaysParseExact) return Xe.call(this, e, t, a);
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = []));
              for (n = 0; n < 7; n++) {
                if (
                  ((i = m([2e3, 1]).day(n)),
                  a &&
                    !this._fullWeekdaysParse[n] &&
                    ((this._fullWeekdaysParse[n] = new RegExp(
                      '^' + this.weekdays(i, '').replace('.', '\\.?') + '$',
                      'i',
                    )),
                    (this._shortWeekdaysParse[n] = new RegExp(
                      '^' + this.weekdaysShort(i, '').replace('.', '\\.?') + '$',
                      'i',
                    )),
                    (this._minWeekdaysParse[n] = new RegExp(
                      '^' + this.weekdaysMin(i, '').replace('.', '\\.?') + '$',
                      'i',
                    ))),
                  this._weekdaysParse[n] ||
                    ((r =
                      '^' +
                      this.weekdays(i, '') +
                      '|^' +
                      this.weekdaysShort(i, '') +
                      '|^' +
                      this.weekdaysMin(i, '')),
                    (this._weekdaysParse[n] = new RegExp(r.replace('.', ''), 'i'))),
                  a && 'dddd' === t && this._fullWeekdaysParse[n].test(e))
                )
                  return n;
                if (a && 'ddd' === t && this._shortWeekdaysParse[n].test(e)) return n;
                if (a && 'dd' === t && this._minWeekdaysParse[n].test(e)) return n;
                if (!a && this._weekdaysParse[n].test(e)) return n;
              }
            }),
            (La.weekdaysRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || at.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (_(this, '_weekdaysRegex') || (this._weekdaysRegex = Qe),
                  this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
            }),
            (La.weekdaysShortRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || at.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (_(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = et),
                  this._weekdaysShortStrictRegex && e
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (La.weekdaysMinRegex = function(e) {
              return this._weekdaysParseExact
                ? (_(this, '_weekdaysRegex') || at.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (_(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = tt),
                  this._weekdaysMinStrictRegex && e
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (La.isPM = function(e) {
              return 'p' === (e + '').toLowerCase().charAt(0);
            }),
            (La.meridiem = function(e, t, a) {
              return 11 < e ? (a ? 'pm' : 'PM') : a ? 'am' : 'AM';
            }),
            mt('en', {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function(e) {
                var t = e % 10,
                  a =
                    1 === v((e % 100) / 10)
                      ? 'th'
                      : 1 == t
                      ? 'st'
                      : 2 == t
                      ? 'nd'
                      : 3 == t
                      ? 'rd'
                      : 'th';
                return e + a;
              },
            }),
            (l.lang = e('moment.lang is deprecated. Use moment.locale instead.', mt)),
            (l.langData = e('moment.langData is deprecated. Use moment.localeData instead.', ft));
          var ba = Math.abs;
          function Da(e, t, a, n) {
            var i = Kt(t, a);
            return (
              (e._milliseconds += n * i._milliseconds),
              (e._days += n * i._days),
              (e._months += n * i._months),
              e._bubble()
            );
          }
          function wa(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function Ta(e) {
            return (4800 * e) / 146097;
          }
          function xa(e) {
            return (146097 * e) / 4800;
          }
          function Sa(e) {
            return function() {
              return this.as(e);
            };
          }
          var Ha = Sa('ms'),
            Pa = Sa('s'),
            ja = Sa('m'),
            Oa = Sa('h'),
            Aa = Sa('d'),
            Wa = Sa('w'),
            Fa = Sa('M'),
            Ca = Sa('Q'),
            Ia = Sa('y');
          function Ea(e) {
            return function() {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var za = Ea('milliseconds'),
            Ra = Ea('seconds'),
            Na = Ea('minutes'),
            Va = Ea('hours'),
            Ba = Ea('days'),
            Ja = Ea('months'),
            Ua = Ea('years');
          var Ga = Math.round,
            qa = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
          var Ka = Math.abs;
          function Za(e) {
            return (0 < e) - (e < 0) || +e;
          }
          function $a() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              a = Ka(this._milliseconds) / 1e3,
              n = Ka(this._days),
              i = Ka(this._months);
            (e = Y(a / 60)), (t = Y(e / 60)), (a %= 60), (e %= 60);
            var r = Y(i / 12),
              s = (i %= 12),
              o = n,
              d = t,
              l = e,
              u = a ? a.toFixed(3).replace(/\.?0+$/, '') : '',
              _ = this.asSeconds();
            if (!_) return 'P0D';
            var h = _ < 0 ? '-' : '',
              m = Za(this._months) !== Za(_) ? '-' : '',
              c = Za(this._days) !== Za(_) ? '-' : '',
              f = Za(this._milliseconds) !== Za(_) ? '-' : '';
            return (
              h +
              'P' +
              (r ? m + r + 'Y' : '') +
              (s ? m + s + 'M' : '') +
              (o ? c + o + 'D' : '') +
              (d || l || u ? 'T' : '') +
              (d ? f + d + 'H' : '') +
              (l ? f + l + 'M' : '') +
              (u ? f + u + 'S' : '')
            );
          }
          var Xa = It.prototype;
          return (
            (Xa.isValid = function() {
              return this._isValid;
            }),
            (Xa.abs = function() {
              var e = this._data;
              return (
                (this._milliseconds = ba(this._milliseconds)),
                (this._days = ba(this._days)),
                (this._months = ba(this._months)),
                (e.milliseconds = ba(e.milliseconds)),
                (e.seconds = ba(e.seconds)),
                (e.minutes = ba(e.minutes)),
                (e.hours = ba(e.hours)),
                (e.months = ba(e.months)),
                (e.years = ba(e.years)),
                this
              );
            }),
            (Xa.add = function(e, t) {
              return Da(this, e, t, 1);
            }),
            (Xa.subtract = function(e, t) {
              return Da(this, e, t, -1);
            }),
            (Xa.as = function(e) {
              if (!this.isValid()) return NaN;
              var t,
                a,
                n = this._milliseconds;
              if ('month' === (e = O(e)) || 'quarter' === e || 'year' === e)
                switch (((t = this._days + n / 864e5), (a = this._months + Ta(t)), e)) {
                  case 'month':
                    return a;
                  case 'quarter':
                    return a / 3;
                  case 'year':
                    return a / 12;
                }
              else
                switch (((t = this._days + Math.round(xa(this._months))), e)) {
                  case 'week':
                    return t / 7 + n / 6048e5;
                  case 'day':
                    return t + n / 864e5;
                  case 'hour':
                    return 24 * t + n / 36e5;
                  case 'minute':
                    return 1440 * t + n / 6e4;
                  case 'second':
                    return 86400 * t + n / 1e3;
                  case 'millisecond':
                    return Math.floor(864e5 * t) + n;
                  default:
                    throw new Error('Unknown unit ' + e);
                }
            }),
            (Xa.asMilliseconds = Ha),
            (Xa.asSeconds = Pa),
            (Xa.asMinutes = ja),
            (Xa.asHours = Oa),
            (Xa.asDays = Aa),
            (Xa.asWeeks = Wa),
            (Xa.asMonths = Fa),
            (Xa.asQuarters = Ca),
            (Xa.asYears = Ia),
            (Xa.valueOf = function() {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * v(this._months / 12)
                : NaN;
            }),
            (Xa._bubble = function() {
              var e,
                t,
                a,
                n,
                i,
                r = this._milliseconds,
                s = this._days,
                o = this._months,
                d = this._data;
              return (
                (0 <= r && 0 <= s && 0 <= o) ||
                  (r <= 0 && s <= 0 && o <= 0) ||
                  ((r += 864e5 * wa(xa(o) + s)), (o = s = 0)),
                (d.milliseconds = r % 1e3),
                (e = Y(r / 1e3)),
                (d.seconds = e % 60),
                (t = Y(e / 60)),
                (d.minutes = t % 60),
                (a = Y(t / 60)),
                (d.hours = a % 24),
                (s += Y(a / 24)),
                (i = Y(Ta(s))),
                (o += i),
                (s -= wa(xa(i))),
                (n = Y(o / 12)),
                (o %= 12),
                (d.days = s),
                (d.months = o),
                (d.years = n),
                this
              );
            }),
            (Xa.clone = function() {
              return Kt(this);
            }),
            (Xa.get = function(e) {
              return (e = O(e)), this.isValid() ? this[e + 's']() : NaN;
            }),
            (Xa.milliseconds = za),
            (Xa.seconds = Ra),
            (Xa.minutes = Na),
            (Xa.hours = Va),
            (Xa.days = Ba),
            (Xa.weeks = function() {
              return Y(this.days() / 7);
            }),
            (Xa.months = Ja),
            (Xa.years = Ua),
            (Xa.humanize = function(e) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var t = this.localeData(),
                a = (function(e, t, a) {
                  var n = Kt(e).abs(),
                    i = Ga(n.as('s')),
                    r = Ga(n.as('m')),
                    s = Ga(n.as('h')),
                    o = Ga(n.as('d')),
                    d = Ga(n.as('M')),
                    l = Ga(n.as('y')),
                    u = (i <= qa.ss && ['s', i]) ||
                      (i < qa.s && ['ss', i]) ||
                      (r <= 1 && ['m']) ||
                      (r < qa.m && ['mm', r]) ||
                      (s <= 1 && ['h']) ||
                      (s < qa.h && ['hh', s]) ||
                      (o <= 1 && ['d']) ||
                      (o < qa.d && ['dd', o]) ||
                      (d <= 1 && ['M']) ||
                      (d < qa.M && ['MM', d]) ||
                      (l <= 1 && ['y']) || ['yy', l];
                  return (
                    (u[2] = t),
                    (u[3] = 0 < +e),
                    (u[4] = a),
                    function(e, t, a, n, i) {
                      return i.relativeTime(t || 1, !!a, e, n);
                    }.apply(null, u)
                  );
                })(this, !e, t);
              return e && (a = t.pastFuture(+this, a)), t.postformat(a);
            }),
            (Xa.toISOString = $a),
            (Xa.toString = $a),
            (Xa.toJSON = $a),
            (Xa.locale = na),
            (Xa.localeData = ra),
            (Xa.toIsoString = e(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              $a,
            )),
            (Xa.lang = ia),
            V('X', 0, 0, 'unix'),
            V('x', 0, 0, 'valueOf'),
            ue('x', re),
            ue('X', /[+-]?\d+(\.\d{1,3})?/),
            ce('X', function(e, t, a) {
              a._d = new Date(1e3 * parseFloat(e, 10));
            }),
            ce('x', function(e, t, a) {
              a._d = new Date(v(e));
            }),
            (l.version = '2.24.0'),
            (function(e) {
              t = e;
            })(Ot),
            (l.fn = ya),
            (l.min = function() {
              return Ft('isBefore', [].slice.call(arguments, 0));
            }),
            (l.max = function() {
              return Ft('isAfter', [].slice.call(arguments, 0));
            }),
            (l.now = function() {
              return Date.now ? Date.now() : +new Date();
            }),
            (l.utc = m),
            (l.unix = function(e) {
              return Ot(1e3 * e);
            }),
            (l.months = function(e, t) {
              return va(e, t, 'months');
            }),
            (l.isDate = u),
            (l.locale = mt),
            (l.invalid = M),
            (l.duration = Kt),
            (l.isMoment = L),
            (l.weekdays = function(e, t, a) {
              return ka(e, t, a, 'weekdays');
            }),
            (l.parseZone = function() {
              return Ot.apply(null, arguments).parseZone();
            }),
            (l.localeData = ft),
            (l.isDuration = Et),
            (l.monthsShort = function(e, t) {
              return va(e, t, 'monthsShort');
            }),
            (l.weekdaysMin = function(e, t, a) {
              return ka(e, t, a, 'weekdaysMin');
            }),
            (l.defineLocale = ct),
            (l.updateLocale = function(e, t) {
              if (null != t) {
                var a,
                  n,
                  i = dt;
                null != (n = ht(e)) && (i = n._config),
                  (t = S(i, t)),
                  ((a = new H(t)).parentLocale = lt[e]),
                  (lt[e] = a),
                  mt(e);
              } else
                null != lt[e] &&
                  (null != lt[e].parentLocale
                    ? (lt[e] = lt[e].parentLocale)
                    : null != lt[e] && delete lt[e]);
              return lt[e];
            }),
            (l.locales = function() {
              return D(lt);
            }),
            (l.weekdaysShort = function(e, t, a) {
              return ka(e, t, a, 'weekdaysShort');
            }),
            (l.normalizeUnits = O),
            (l.relativeTimeRounding = function(e) {
              return void 0 !== e ? 'function' == typeof e && ((Ga = e), !0) : Ga;
            }),
            (l.relativeTimeThreshold = function(e, t) {
              return (
                void 0 !== qa[e] &&
                (void 0 === t ? qa[e] : ((qa[e] = t), 's' === e && (qa.ss = t - 1), !0))
              );
            }),
            (l.calendarFormat = function(e, t) {
              var a = e.diff(t, 'days', !0);
              return a < -6
                ? 'sameElse'
                : a < -1
                ? 'lastWeek'
                : a < 0
                ? 'lastDay'
                : a < 1
                ? 'sameDay'
                : a < 2
                ? 'nextDay'
                : a < 7
                ? 'nextWeek'
                : 'sameElse';
            }),
            (l.prototype = ya),
            (l.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
              DATE: 'YYYY-MM-DD',
              TIME: 'HH:mm',
              TIME_SECONDS: 'HH:mm:ss',
              TIME_MS: 'HH:mm:ss.SSS',
              WEEK: 'GGGG-[W]WW',
              MONTH: 'YYYY-MM',
            }),
            l
          );
        })();
      }.call(this, en(466)(e)));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('af', {
          months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
          weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
          weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
          meridiemParse: /vm|nm/i,
          isPM: function(e) {
            return /^nm$/i.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 12 ? (a ? 'vm' : 'VM') : a ? 'nm' : 'NM';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Vandag om] LT',
            nextDay: '[Môre om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[Gister om] LT',
            lastWeek: '[Laas] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'oor %s',
            past: '%s gelede',
            s: "'n paar sekondes",
            ss: '%d sekondes',
            m: "'n minuut",
            mm: '%d minute',
            h: "'n uur",
            hh: '%d ure',
            d: "'n dag",
            dd: '%d dae',
            M: "'n maand",
            MM: '%d maande',
            y: "'n jaar",
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
          a = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          },
          o = function(e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : 2 === e
              ? 2
              : 3 <= e % 100 && e % 100 <= 10
              ? 3
              : 11 <= e % 100
              ? 4
              : 5;
          },
          d = {
            s: [
              'أقل من ثانية',
              'ثانية واحدة',
              ['ثانيتان', 'ثانيتين'],
              '%d ثوان',
              '%d ثانية',
              '%d ثانية',
            ],
            m: [
              'أقل من دقيقة',
              'دقيقة واحدة',
              ['دقيقتان', 'دقيقتين'],
              '%d دقائق',
              '%d دقيقة',
              '%d دقيقة',
            ],
            h: [
              'أقل من ساعة',
              'ساعة واحدة',
              ['ساعتان', 'ساعتين'],
              '%d ساعات',
              '%d ساعة',
              '%d ساعة',
            ],
            d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
            M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
            y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
          },
          n = function(s) {
            return function(e, t, a, n) {
              var i = o(e),
                r = d[s][o(e)];
              return 2 === i && (r = r[t ? 0 : 1]), r.replace(/%d/i, e);
            };
          },
          i = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ];
        e.defineLocale('ar', {
          months: i,
          monthsShort: i,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/‏M/‏YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: n('s'),
            ss: n('s'),
            m: n('m'),
            mm: n('m'),
            h: n('h'),
            hh: n('h'),
            d: n('d'),
            dd: n('d'),
            M: n('M'),
            MM: n('M'),
            y: n('y'),
            yy: n('y'),
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return a[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-dz', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 0, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-kw', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_',
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_',
          ),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 0, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0' },
          o = function(e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : 2 === e
              ? 2
              : 3 <= e % 100 && e % 100 <= 10
              ? 3
              : 11 <= e % 100
              ? 4
              : 5;
          },
          d = {
            s: [
              'أقل من ثانية',
              'ثانية واحدة',
              ['ثانيتان', 'ثانيتين'],
              '%d ثوان',
              '%d ثانية',
              '%d ثانية',
            ],
            m: [
              'أقل من دقيقة',
              'دقيقة واحدة',
              ['دقيقتان', 'دقيقتين'],
              '%d دقائق',
              '%d دقيقة',
              '%d دقيقة',
            ],
            h: [
              'أقل من ساعة',
              'ساعة واحدة',
              ['ساعتان', 'ساعتين'],
              '%d ساعات',
              '%d ساعة',
              '%d ساعة',
            ],
            d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
            M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
            y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
          },
          a = function(s) {
            return function(e, t, a, n) {
              var i = o(e),
                r = d[s][o(e)];
              return 2 === i && (r = r[t ? 0 : 1]), r.replace(/%d/i, e);
            };
          },
          n = [
            'يناير',
            'فبراير',
            'مارس',
            'أبريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر',
          ];
        e.defineLocale('ar-ly', {
          months: n,
          monthsShort: n,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/‏M/‏YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: a('s'),
            ss: a('s'),
            m: a('m'),
            mm: a('m'),
            h: a('h'),
            hh: a('h'),
            d: a('d'),
            dd: a('d'),
            M: a('M'),
            MM: a('M'),
            y: a('y'),
            yy: a('y'),
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-ma', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_',
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
            '_',
          ),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
          a = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          };
        e.defineLocale('ar-sa', {
          months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ص|م/,
          isPM: function(e) {
            return 'م' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ص' : 'م';
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return a[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ar-tn', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_',
          ),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات',
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var i = {
          1: '-inci',
          5: '-inci',
          8: '-inci',
          70: '-inci',
          80: '-inci',
          2: '-nci',
          7: '-nci',
          20: '-nci',
          50: '-nci',
          3: '-üncü',
          4: '-üncü',
          100: '-üncü',
          6: '-ncı',
          9: '-uncu',
          10: '-uncu',
          30: '-uncu',
          60: '-ıncı',
          90: '-ıncı',
        };
        e.defineLocale('az', {
          months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
            '_',
          ),
          monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
          weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
          weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
          weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[sabah saat] LT',
            nextWeek: '[gələn həftə] dddd [saat] LT',
            lastDay: '[dünən] LT',
            lastWeek: '[keçən həftə] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s əvvəl',
            s: 'birneçə saniyə',
            ss: '%d saniyə',
            m: 'bir dəqiqə',
            mm: '%d dəqiqə',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir il',
            yy: '%d il',
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function(e) {
            return /^(gündüz|axşam)$/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function(e) {
            if (0 === e) return e + '-ıncı';
            var t = e % 10,
              a = (e % 100) - t,
              n = 100 <= e ? 100 : null;
            return e + (i[t] || i[a] || i[n]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = {
            ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: t ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            hh: t ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            dd: 'дзень_дні_дзён',
            MM: 'месяц_месяцы_месяцаў',
            yy: 'год_гады_гадоў',
          };
          return 'm' === a
            ? t
              ? 'хвіліна'
              : 'хвіліну'
            : 'h' === a
            ? t
              ? 'гадзіна'
              : 'гадзіну'
            : e +
              ' ' +
              (function(e, t) {
                var a = e.split('_');
                return t % 10 == 1 && t % 100 != 11
                  ? a[0]
                  : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100)
                  ? a[1]
                  : a[2];
              })(n[a], +e);
        }
        e.defineLocale('be', {
          months: {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
              '_',
            ),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
              '_',
            ),
          },
          monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
          weekdays: {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
          },
          weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm',
          },
          calendar: {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function() {
              return '[У] dddd [ў] LT';
            },
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                  return '[У мінулы] dddd [ў] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'праз %s',
            past: '%s таму',
            s: 'некалькі секунд',
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'дзень',
            dd: t,
            M: 'месяц',
            MM: t,
            y: 'год',
            yy: t,
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function(e) {
            return /^(дня|вечара)$/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return (e % 10 != 2 && e % 10 != 3) || e % 100 == 12 || e % 100 == 13
                  ? e + '-ы'
                  : e + '-і';
              case 'D':
                return e + '-га';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('bg', {
          months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
            '_',
          ),
          monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
          weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
          weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[В изминалия] dddd [в] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              a = e % 100;
            return 0 === e
              ? e + '-ев'
              : 0 == a
              ? e + '-ен'
              : 10 < a && a < 20
              ? e + '-ти'
              : 1 == t
              ? e + '-ви'
              : 2 == t
              ? e + '-ри'
              : 7 == t || 8 == t
              ? e + '-ми'
              : e + '-ти';
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('bm', {
          months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split(
            '_',
          ),
          monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
          weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
          weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
          weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'MMMM [tile] D [san] YYYY',
            LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          },
          calendar: {
            sameDay: '[Bi lɛrɛ] LT',
            nextDay: '[Sini lɛrɛ] LT',
            nextWeek: 'dddd [don lɛrɛ] LT',
            lastDay: '[Kunu lɛrɛ] LT',
            lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s kɔnɔ',
            past: 'a bɛ %s bɔ',
            s: 'sanga dama dama',
            ss: 'sekondi %d',
            m: 'miniti kelen',
            mm: 'miniti %d',
            h: 'lɛrɛ kelen',
            hh: 'lɛrɛ %d',
            d: 'tile kelen',
            dd: 'tile %d',
            M: 'kalo kelen',
            MM: 'kalo %d',
            y: 'san kelen',
            yy: 'san %d',
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯', 0: '০' },
          a = {
            '১': '1',
            '২': '2',
            '৩': '3',
            '৪': '4',
            '৫': '5',
            '৬': '6',
            '৭': '7',
            '৮': '8',
            '৯': '9',
            '০': '0',
          };
        e.defineLocale('bn', {
          months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split(
            '_',
          ),
          monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
          weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
          weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
          weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
          longDateFormat: {
            LT: 'A h:mm সময়',
            LTS: 'A h:mm:ss সময়',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm সময়',
            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
          },
          calendar: {
            sameDay: '[আজ] LT',
            nextDay: '[আগামীকাল] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[গতকাল] LT',
            lastWeek: '[গত] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s পরে',
            past: '%s আগে',
            s: 'কয়েক সেকেন্ড',
            ss: '%d সেকেন্ড',
            m: 'এক মিনিট',
            mm: '%d মিনিট',
            h: 'এক ঘন্টা',
            hh: '%d ঘন্টা',
            d: 'এক দিন',
            dd: '%d দিন',
            M: 'এক মাস',
            MM: '%d মাস',
            y: 'এক বছর',
            yy: '%d বছর',
          },
          preparse: function(e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('রাত' === t && 4 <= e) || ('দুপুর' === t && e < 5) || 'বিকাল' === t ? e + 12 : e
            );
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '༡', 2: '༢', 3: '༣', 4: '༤', 5: '༥', 6: '༦', 7: '༧', 8: '༨', 9: '༩', 0: '༠' },
          a = {
            '༡': '1',
            '༢': '2',
            '༣': '3',
            '༤': '4',
            '༥': '5',
            '༦': '6',
            '༧': '7',
            '༨': '8',
            '༩': '9',
            '༠': '0',
          };
        e.defineLocale('bo', {
          months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_',
          ),
          monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_',
          ),
          weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split(
            '_',
          ),
          weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
          weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[དི་རིང] LT',
            nextDay: '[སང་ཉིན] LT',
            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay: '[ཁ་སང] LT',
            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ལ་',
            past: '%s སྔན་ལ',
            s: 'ལམ་སང',
            ss: '%d སྐར་ཆ།',
            m: 'སྐར་མ་གཅིག',
            mm: '%d སྐར་མ',
            h: 'ཆུ་ཚོད་གཅིག',
            hh: '%d ཆུ་ཚོད',
            d: 'ཉིན་གཅིག',
            dd: '%d ཉིན་',
            M: 'ཟླ་བ་གཅིག',
            MM: '%d ཟླ་བ',
            y: 'ལོ་གཅིག',
            yy: '%d ལོ',
          },
          preparse: function(e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('མཚན་མོ' === t && 4 <= e) || ('ཉིན་གུང' === t && e < 5) || 'དགོང་དག' === t
                ? e + 12
                : e
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'མཚན་མོ'
              : e < 10
              ? 'ཞོགས་ཀས'
              : e < 17
              ? 'ཉིན་གུང'
              : e < 20
              ? 'དགོང་དག'
              : 'མཚན་མོ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          return (
            e +
            ' ' +
            (function(e, t) {
              return 2 !== t
                ? e
                : (function(e) {
                    var t = { m: 'v', b: 'v', d: 'z' };
                    return void 0 !== t[e.charAt(0)] ? t[e.charAt(0)] + e.substring(1) : e;
                  })(e);
            })({ mm: 'munutenn', MM: 'miz', dd: 'devezh' }[a], e)
          );
        }
        function a(e) {
          return 9 < e ? a(e % 10) : e;
        }
        e.defineLocale('br', {
          months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            '_',
          ),
          monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split('_'),
          weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split('_'),
          weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h[e]mm A',
            LTS: 'h[e]mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [a viz] MMMM YYYY',
            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
          },
          calendar: {
            sameDay: '[Hiziv da] LT',
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: 'dddd [da] LT',
            lastDay: "[Dec'h da] LT",
            lastWeek: 'dddd [paset da] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'a-benn %s',
            past: "%s 'zo",
            s: 'un nebeud segondennoù',
            ss: '%d eilenn',
            m: 'ur vunutenn',
            mm: t,
            h: 'un eur',
            hh: '%d eur',
            d: 'un devezh',
            dd: t,
            M: 'ur miz',
            MM: t,
            y: 'ur bloaz',
            yy: function(e) {
              switch (a(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                  return e + ' bloaz';
                default:
                  return e + ' vloaz';
              }
            },
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function(e) {
            var t = 1 === e ? 'añ' : 'vet';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = e + ' ';
          switch (a) {
            case 'ss':
              return (n +=
                1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi');
            case 'm':
              return t ? 'jedna minuta' : 'jedne minute';
            case 'mm':
              return (n +=
                1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
            case 'h':
              return t ? 'jedan sat' : 'jednog sata';
            case 'hh':
              return (n += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
            case 'dd':
              return (n += 1 === e ? 'dan' : 'dana');
            case 'MM':
              return (n +=
                1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
            case 'yy':
              return (n +=
                1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
          }
        }
        e.defineLocale('bs', {
          months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
            '_',
          ),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';
                case 6:
                  return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'dan',
            dd: t,
            M: 'mjesec',
            MM: t,
            y: 'godinu',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ca', {
          months: {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split(
              '_',
            ),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              '_',
            ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
          weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
          weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [de] YYYY',
            ll: 'D MMM YYYY',
            LLL: 'D MMMM [de] YYYY [a les] H:mm',
            lll: 'D MMM YYYY, H:mm',
            LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll: 'ddd D MMM YYYY, H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextDay: function() {
              return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastDay: function() {
              return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            lastWeek: function() {
              return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: "d'aquí %s",
            past: 'fa %s',
            s: 'uns segons',
            ss: '%d segons',
            m: 'un minut',
            mm: '%d minuts',
            h: 'una hora',
            hh: '%d hores',
            d: 'un dia',
            dd: '%d dies',
            M: 'un mes',
            MM: '%d mesos',
            y: 'un any',
            yy: '%d anys',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function(e, t) {
            var a = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
            return ('w' !== t && 'W' !== t) || (a = 'a'), e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split(
            '_',
          ),
          a = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
          n = [
            /^led/i,
            /^úno/i,
            /^bře/i,
            /^dub/i,
            /^kvě/i,
            /^(čvn|červen$|června)/i,
            /^(čvc|červenec|července)/i,
            /^srp/i,
            /^zář/i,
            /^říj/i,
            /^lis/i,
            /^pro/i,
          ],
          i = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function r(e) {
          return 1 < e && e < 5 && 1 != ~~(e / 10);
        }
        function s(e, t, a, n) {
          var i = e + ' ';
          switch (a) {
            case 's':
              return t || n ? 'pár sekund' : 'pár sekundami';
            case 'ss':
              return t || n ? i + (r(e) ? 'sekundy' : 'sekund') : i + 'sekundami';
            case 'm':
              return t ? 'minuta' : n ? 'minutu' : 'minutou';
            case 'mm':
              return t || n ? i + (r(e) ? 'minuty' : 'minut') : i + 'minutami';
            case 'h':
              return t ? 'hodina' : n ? 'hodinu' : 'hodinou';
            case 'hh':
              return t || n ? i + (r(e) ? 'hodiny' : 'hodin') : i + 'hodinami';
            case 'd':
              return t || n ? 'den' : 'dnem';
            case 'dd':
              return t || n ? i + (r(e) ? 'dny' : 'dní') : i + 'dny';
            case 'M':
              return t || n ? 'měsíc' : 'měsícem';
            case 'MM':
              return t || n ? i + (r(e) ? 'měsíce' : 'měsíců') : i + 'měsíci';
            case 'y':
              return t || n ? 'rok' : 'rokem';
            case 'yy':
              return t || n ? i + (r(e) ? 'roky' : 'let') : i + 'lety';
          }
        }
        e.defineLocale('cs', {
          months: t,
          monthsShort: a,
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
          weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
          weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY',
          },
          calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v neděli v] LT';
                case 1:
                case 2:
                  return '[v] dddd [v] LT';
                case 3:
                  return '[ve středu v] LT';
                case 4:
                  return '[ve čtvrtek v] LT';
                case 5:
                  return '[v pátek v] LT';
                case 6:
                  return '[v sobotu v] LT';
              }
            },
            lastDay: '[včera v] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[minulou neděli v] LT';
                case 1:
                case 2:
                  return '[minulé] dddd [v] LT';
                case 3:
                  return '[minulou středu v] LT';
                case 4:
                case 5:
                  return '[minulý] dddd [v] LT';
                case 6:
                  return '[minulou sobotu v] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('cv', {
          months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
          monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
          weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
          weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
          weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          },
          calendar: {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              var t = /сехет$/i.exec(e) ? 'рен' : /ҫул$/i.exec(e) ? 'тан' : 'ран';
              return e + t;
            },
            past: '%s каялла',
            s: 'пӗр-ик ҫеккунт',
            ss: '%d ҫеккунт',
            m: 'пӗр минут',
            mm: '%d минут',
            h: 'пӗр сехет',
            hh: '%d сехет',
            d: 'пӗр кун',
            dd: '%d кун',
            M: 'пӗр уйӑх',
            MM: '%d уйӑх',
            y: 'пӗр ҫул',
            yy: '%d ҫул',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: '%d-мӗш',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('cy', {
          months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split(
            '_',
          ),
          monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
          weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split(
            '_',
          ),
          weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function(e) {
            var t = e,
              a = '';
            return (
              20 < t
                ? (a = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? 'fed' : 'ain')
                : 0 < t &&
                  (a = [
                    '',
                    'af',
                    'il',
                    'ydd',
                    'ydd',
                    'ed',
                    'ed',
                    'ed',
                    'fed',
                    'fed',
                    'fed',
                    'eg',
                    'fed',
                    'eg',
                    'eg',
                    'fed',
                    'eg',
                    'eg',
                    'fed',
                    'eg',
                    'fed',
                  ][t]),
              e + a
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('da', {
          months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
          weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            ss: '%d sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? i[a][0] : i[a][1];
        }
        e.defineLocale('de', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_',
          ),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? i[a][0] : i[a][1];
        }
        e.defineLocale('de-at', {
          months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_',
          ),
          monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            m: ['eine Minute', 'einer Minute'],
            h: ['eine Stunde', 'einer Stunde'],
            d: ['ein Tag', 'einem Tag'],
            dd: [e + ' Tage', e + ' Tagen'],
            M: ['ein Monat', 'einem Monat'],
            MM: [e + ' Monate', e + ' Monaten'],
            y: ['ein Jahr', 'einem Jahr'],
            yy: [e + ' Jahre', e + ' Jahren'],
          };
          return t ? i[a][0] : i[a][1];
        }
        e.defineLocale('de-ch', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_',
          ),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]',
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: t,
            mm: '%d Minuten',
            h: t,
            hh: '%d Stunden',
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = [
            'ޖެނުއަރީ',
            'ފެބްރުއަރީ',
            'މާރިޗު',
            'އޭޕްރީލު',
            'މޭ',
            'ޖޫން',
            'ޖުލައި',
            'އޯގަސްޓު',
            'ސެޕްޓެމްބަރު',
            'އޮކްޓޯބަރު',
            'ނޮވެމްބަރު',
            'ޑިސެމްބަރު',
          ],
          a = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
        e.defineLocale('dv', {
          months: t,
          monthsShort: t,
          weekdays: a,
          weekdaysShort: a,
          weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/M/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /މކ|މފ/,
          isPM: function(e) {
            return 'މފ' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'މކ' : 'މފ';
          },
          calendar: {
            sameDay: '[މިއަދު] LT',
            nextDay: '[މާދަމާ] LT',
            nextWeek: 'dddd LT',
            lastDay: '[އިއްޔެ] LT',
            lastWeek: '[ފާއިތުވި] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ތެރޭގައި %s',
            past: 'ކުރިން %s',
            s: 'ސިކުންތުކޮޅެއް',
            ss: 'd% ސިކުންތު',
            m: 'މިނިޓެއް',
            mm: 'މިނިޓު %d',
            h: 'ގަޑިއިރެއް',
            hh: 'ގަޑިއިރު %d',
            d: 'ދުވަހެއް',
            dd: 'ދުވަސް %d',
            M: 'މަހެއް',
            MM: 'މަސް %d',
            y: 'އަހަރެއް',
            yy: 'އަހަރު %d',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 7, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('el', {
          monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
            '_',
          ),
          monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
            '_',
          ),
          months: function(e, t) {
            return e
              ? 'string' == typeof t && /D/.test(t.substring(0, t.indexOf('MMMM')))
                ? this._monthsGenitiveEl[e.month()]
                : this._monthsNominativeEl[e.month()]
              : this._monthsNominativeEl;
          },
          monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
          weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
          weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
          weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
          meridiem: function(e, t, a) {
            return 11 < e ? (a ? 'μμ' : 'ΜΜ') : a ? 'πμ' : 'ΠΜ';
          },
          isPM: function(e) {
            return 'μ' === (e + '').toLowerCase()[0];
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendarEl: {
            sameDay: '[Σήμερα {}] LT',
            nextDay: '[Αύριο {}] LT',
            nextWeek: 'dddd [{}] LT',
            lastDay: '[Χθες {}] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 6:
                  return '[το προηγούμενο] dddd [{}] LT';
                default:
                  return '[την προηγούμενη] dddd [{}] LT';
              }
            },
            sameElse: 'L',
          },
          calendar: function(e, t) {
            var a = this._calendarEl[e],
              n = t && t.hours();
            return (
              (function(e) {
                return (
                  e instanceof Function || '[object Function]' === Object.prototype.toString.call(e)
                );
              })(a) && (a = a.apply(t)),
              a.replace('{}', n % 12 == 1 ? 'στη' : 'στις')
            );
          },
          relativeTime: {
            future: 'σε %s',
            past: '%s πριν',
            s: 'λίγα δευτερόλεπτα',
            ss: '%d δευτερόλεπτα',
            m: 'ένα λεπτό',
            mm: '%d λεπτά',
            h: 'μία ώρα',
            hh: '%d ώρες',
            d: 'μία μέρα',
            dd: '%d μέρες',
            M: 'ένας μήνας',
            MM: '%d μήνες',
            y: 'ένας χρόνος',
            yy: '%d χρόνια',
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: '%dη',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-SG', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-au', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-ca', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'YYYY-MM-DD',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-gb', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-ie', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-il', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('en-nz', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('eo', {
          months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
          weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
          weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
          weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D[-a de] MMMM, YYYY',
            LLL: 'D[-a de] MMMM, YYYY HH:mm',
            LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function(e) {
            return 'p' === e.charAt(0).toLowerCase();
          },
          meridiem: function(e, t, a) {
            return 11 < e ? (a ? 'p.t.m.' : 'P.T.M.') : a ? 'a.t.m.' : 'A.T.M.';
          },
          calendar: {
            sameDay: '[Hodiaŭ je] LT',
            nextDay: '[Morgaŭ je] LT',
            nextWeek: 'dddd [je] LT',
            lastDay: '[Hieraŭ je] LT',
            lastWeek: '[pasinta] dddd [je] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'post %s',
            past: 'antaŭ %s',
            s: 'sekundoj',
            ss: '%d sekundoj',
            m: 'minuto',
            mm: '%d minutoj',
            h: 'horo',
            hh: '%d horoj',
            d: 'tago',
            dd: '%d tagoj',
            M: 'monato',
            MM: '%d monatoj',
            y: 'jaro',
            yy: '%d jaroj',
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: '%da',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          t = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: t,
          longMonthsParse: t,
          shortMonthsParse: t,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          t = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es-do', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: t,
          longMonthsParse: t,
          shortMonthsParse: t,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          t = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale('es-us', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: t,
          longMonthsParse: t,
          shortMonthsParse: t,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
          },
          calendar: {
            sameDay: function() {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextDay: function() {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastDay: function() {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            lastWeek: function() {
              return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            ss: [e + 'sekundi', e + 'sekundit'],
            m: ['ühe minuti', 'üks minut'],
            mm: [e + ' minuti', e + ' minutit'],
            h: ['ühe tunni', 'tund aega', 'üks tund'],
            hh: [e + ' tunni', e + ' tundi'],
            d: ['ühe päeva', 'üks päev'],
            M: ['kuu aja', 'kuu aega', 'üks kuu'],
            MM: [e + ' kuu', e + ' kuud'],
            y: ['ühe aasta', 'aasta', 'üks aasta'],
            yy: [e + ' aasta', e + ' aastat'],
          };
          return t ? (i[a][2] ? i[a][2] : i[a][1]) : n ? i[a][0] : i[a][1];
        }
        e.defineLocale('et', {
          months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split(
            '_',
          ),
          monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
          weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
          weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
          weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Täna,] LT',
            nextDay: '[Homme,] LT',
            nextWeek: '[Järgmine] dddd LT',
            lastDay: '[Eile,] LT',
            lastWeek: '[Eelmine] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s pärast',
            past: '%s tagasi',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: '%d päeva',
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('eu', {
          months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
            '_',
          ),
          monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split(
            '_',
          ),
          weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
          weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY[ko] MMMM[ren] D[a]',
            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l: 'YYYY-M-D',
            ll: 'YYYY[ko] MMM D[a]',
            lll: 'YYYY[ko] MMM D[a] HH:mm',
            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
          },
          calendar: {
            sameDay: '[gaur] LT[etan]',
            nextDay: '[bihar] LT[etan]',
            nextWeek: 'dddd LT[etan]',
            lastDay: '[atzo] LT[etan]',
            lastWeek: '[aurreko] dddd LT[etan]',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s barru',
            past: 'duela %s',
            s: 'segundo batzuk',
            ss: '%d segundo',
            m: 'minutu bat',
            mm: '%d minutu',
            h: 'ordu bat',
            hh: '%d ordu',
            d: 'egun bat',
            dd: '%d egun',
            M: 'hilabete bat',
            MM: '%d hilabete',
            y: 'urte bat',
            yy: '%d urte',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹', 0: '۰' },
          a = {
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
            '۰': '0',
          };
        e.defineLocale('fa', {
          months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
            '_',
          ),
          monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
            '_',
          ),
          weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
          weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
          weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function(e) {
            return /بعد از ظهر/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
          },
          calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [پیش] [ساعت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            ss: 'ثانیه d%',
            m: 'یک دقیقه',
            mm: '%d دقیقه',
            h: 'یک ساعت',
            hh: '%d ساعت',
            d: 'یک روز',
            dd: '%d روز',
            M: 'یک ماه',
            MM: '%d ماه',
            y: 'یک سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e
              .replace(/[۰-۹]/g, function(e) {
                return a[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: '%dم',
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var r = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
          s = [
            'nolla',
            'yhden',
            'kahden',
            'kolmen',
            'neljän',
            'viiden',
            'kuuden',
            r[7],
            r[8],
            r[9],
          ];
        function t(e, t, a, n) {
          var i = '';
          switch (a) {
            case 's':
              return n ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
              return n ? 'sekunnin' : 'sekuntia';
            case 'm':
              return n ? 'minuutin' : 'minuutti';
            case 'mm':
              i = n ? 'minuutin' : 'minuuttia';
              break;
            case 'h':
              return n ? 'tunnin' : 'tunti';
            case 'hh':
              i = n ? 'tunnin' : 'tuntia';
              break;
            case 'd':
              return n ? 'päivän' : 'päivä';
            case 'dd':
              i = n ? 'päivän' : 'päivää';
              break;
            case 'M':
              return n ? 'kuukauden' : 'kuukausi';
            case 'MM':
              i = n ? 'kuukauden' : 'kuukautta';
              break;
            case 'y':
              return n ? 'vuoden' : 'vuosi';
            case 'yy':
              i = n ? 'vuoden' : 'vuotta';
          }
          return (i =
            (function(e, t) {
              return e < 10 ? (t ? s[e] : r[e]) : e;
            })(e, n) +
            ' ' +
            i);
        }
        e.defineLocale('fi', {
          months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
            '_',
          ),
          monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split(
            '_',
          ),
          weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
          weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
          weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
          },
          calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('fo', {
          months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
          weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split(
            '_',
          ),
          weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
          weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D. MMMM, YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Í dag kl.] LT',
            nextDay: '[Í morgin kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[Í gjár kl.] LT',
            lastWeek: '[síðstu] dddd [kl] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'um %s',
            past: '%s síðani',
            s: 'fá sekund',
            ss: '%d sekundir',
            m: 'ein minuttur',
            mm: '%d minuttir',
            h: 'ein tími',
            hh: '%d tímar',
            d: 'ein dagur',
            dd: '%d dagar',
            M: 'ein mánaður',
            MM: '%d mánaðir',
            y: 'eitt ár',
            yy: '%d ár',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'D':
                return e + (1 === e ? 'er' : '');
              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr-ca', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('fr-ch', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
            '_',
          ),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function(e, t) {
            switch (t) {
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return e + (1 === e ? 'er' : 'e');
              case 'w':
              case 'W':
                return e + (1 === e ? 're' : 'e');
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
          n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
        e.defineLocale('fy', {
          months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsParseExact: !0,
          weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
          weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
          weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'oer %s',
            past: '%s lyn',
            s: 'in pear sekonden',
            ss: '%d sekonden',
            m: 'ien minút',
            mm: '%d minuten',
            h: 'ien oere',
            hh: '%d oeren',
            d: 'ien dei',
            dd: '%d dagen',
            M: 'ien moanne',
            MM: '%d moannen',
            y: 'ien jier',
            yy: '%d jierren',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ga', {
          months: [
            'Eanáir',
            'Feabhra',
            'Márta',
            'Aibreán',
            'Bealtaine',
            'Méitheamh',
            'Iúil',
            'Lúnasa',
            'Meán Fómhair',
            'Deaireadh Fómhair',
            'Samhain',
            'Nollaig',
          ],
          monthsShort: [
            'Eaná',
            'Feab',
            'Márt',
            'Aibr',
            'Beal',
            'Méit',
            'Iúil',
            'Lúna',
            'Meán',
            'Deai',
            'Samh',
            'Noll',
          ],
          monthsParseExact: !0,
          weekdays: [
            'Dé Domhnaigh',
            'Dé Luain',
            'Dé Máirt',
            'Dé Céadaoin',
            'Déardaoin',
            'Dé hAoine',
            'Dé Satharn',
          ],
          weekdaysShort: ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'],
          weekdaysMin: ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Inniu ag] LT',
            nextDay: '[Amárach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[Inné aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'i %s',
            past: '%s ó shin',
            s: 'cúpla soicind',
            ss: '%d soicind',
            m: 'nóiméad',
            mm: '%d nóiméad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lá',
            dd: '%d lá',
            M: 'mí',
            MM: '%d mí',
            y: 'bliain',
            yy: '%d bliain',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function(e) {
            var t = 1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('gd', {
          months: [
            'Am Faoilleach',
            'An Gearran',
            'Am Màrt',
            'An Giblean',
            'An Cèitean',
            'An t-Ògmhios',
            'An t-Iuchar',
            'An Lùnastal',
            'An t-Sultain',
            'An Dàmhair',
            'An t-Samhain',
            'An Dùbhlachd',
          ],
          monthsShort: [
            'Faoi',
            'Gear',
            'Màrt',
            'Gibl',
            'Cèit',
            'Ògmh',
            'Iuch',
            'Lùn',
            'Sult',
            'Dàmh',
            'Samh',
            'Dùbh',
          ],
          monthsParseExact: !0,
          weekdays: [
            'Didòmhnaich',
            'Diluain',
            'Dimàirt',
            'Diciadain',
            'Diardaoin',
            'Dihaoine',
            'Disathairne',
          ],
          weekdaysShort: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
          weekdaysMin: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[An-diugh aig] LT',
            nextDay: '[A-màireach aig] LT',
            nextWeek: 'dddd [aig] LT',
            lastDay: '[An-dè aig] LT',
            lastWeek: 'dddd [seo chaidh] [aig] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ann an %s',
            past: 'bho chionn %s',
            s: 'beagan diogan',
            ss: '%d diogan',
            m: 'mionaid',
            mm: '%d mionaidean',
            h: 'uair',
            hh: '%d uairean',
            d: 'latha',
            dd: '%d latha',
            M: 'mìos',
            MM: '%d mìosan',
            y: 'bliadhna',
            yy: '%d bliadhna',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function(e) {
            var t = 1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh';
            return e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('gl', {
          months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split(
            '_',
          ),
          monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
          },
          calendar: {
            sameDay: function() {
              return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextDay: function() {
              return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
            },
            nextWeek: function() {
              return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
            },
            lastDay: function() {
              return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
            },
            lastWeek: function() {
              return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
            },
            past: 'hai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            s: ['thodde secondanim', 'thodde second'],
            ss: [e + ' secondanim', e + ' second'],
            m: ['eka mintan', 'ek minute'],
            mm: [e + ' mintanim', e + ' mintam'],
            h: ['eka voran', 'ek vor'],
            hh: [e + ' voranim', e + ' voram'],
            d: ['eka disan', 'ek dis'],
            dd: [e + ' disanim', e + ' dis'],
            M: ['eka mhoinean', 'ek mhoino'],
            MM: [e + ' mhoineanim', e + ' mhoine'],
            y: ['eka vorsan', 'ek voros'],
            yy: [e + ' vorsanim', e + ' vorsam'],
          };
          return t ? i[a][0] : i[a][1];
        }
        e.defineLocale('gom-latn', {
          months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split(
            '_',
          ),
          monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
          monthsParseExact: !0,
          weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split('_'),
          weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
          weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'A h:mm [vazta]',
            LTS: 'A h:mm:ss [vazta]',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY A h:mm [vazta]',
            LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
          },
          calendar: {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s',
            past: '%s adim',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'D':
                return e + 'er';
              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
              case 'w':
              case 'W':
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /rati|sokalli|donparam|sanje/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'rati' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'sokalli' === t
                ? e
                : 'donparam' === t
                ? 12 < e
                  ? e
                  : e + 12
                : 'sanje' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'rati'
              : e < 12
              ? 'sokalli'
              : e < 16
              ? 'donparam'
              : e < 20
              ? 'sanje'
              : 'rati';
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '૧', 2: '૨', 3: '૩', 4: '૪', 5: '૫', 6: '૬', 7: '૭', 8: '૮', 9: '૯', 0: '૦' },
          a = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0',
          };
        e.defineLocale('gu', {
          months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split(
            '_',
          ),
          monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
          weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
          weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
          },
          calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ',
          },
          preparse: function(e) {
            return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'રાત' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'સવાર' === t
                ? e
                : 'બપોર' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'સાંજ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'રાત' : e < 10 ? 'સવાર' : e < 17 ? 'બપોર' : e < 20 ? 'સાંજ' : 'રાત';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('he', {
          months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split(
            '_',
          ),
          monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
          weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
          weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
          weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: function(e) {
              return 2 === e ? 'שעתיים' : e + ' שעות';
            },
            d: 'יום',
            dd: function(e) {
              return 2 === e ? 'יומיים' : e + ' ימים';
            },
            M: 'חודש',
            MM: function(e) {
              return 2 === e ? 'חודשיים' : e + ' חודשים';
            },
            y: 'שנה',
            yy: function(e) {
              return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
            },
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function(e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 5
              ? 'לפנות בוקר'
              : e < 10
              ? 'בבוקר'
              : e < 12
              ? a
                ? 'לפנה"צ'
                : 'לפני הצהריים'
              : e < 18
              ? a
                ? 'אחה"צ'
                : 'אחרי הצהריים'
              : 'בערב';
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
          a = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        e.defineLocale('hi', {
          months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split(
            '_',
          ),
          monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
          weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष',
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'रात' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'सुबह' === t
                ? e
                : 'दोपहर' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'शाम' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = e + ' ';
          switch (a) {
            case 'ss':
              return (n +=
                1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi');
            case 'm':
              return t ? 'jedna minuta' : 'jedne minute';
            case 'mm':
              return (n +=
                1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
            case 'h':
              return t ? 'jedan sat' : 'jednog sata';
            case 'hh':
              return (n += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
            case 'dd':
              return (n += 1 === e ? 'dan' : 'dana');
            case 'MM':
              return (n +=
                1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
            case 'yy':
              return (n +=
                1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
          }
        }
        e.defineLocale('hr', {
          months: {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
              '_',
            ),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
              '_',
            ),
          },
          monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';
                case 6:
                  return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'dan',
            dd: t,
            M: 'mjesec',
            MM: t,
            y: 'godinu',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
        function a(e, t, a, n) {
          var i = e;
          switch (a) {
            case 's':
              return n || t ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
              return i + (n || t) ? ' másodperc' : ' másodperce';
            case 'm':
              return 'egy' + (n || t ? ' perc' : ' perce');
            case 'mm':
              return i + (n || t ? ' perc' : ' perce');
            case 'h':
              return 'egy' + (n || t ? ' óra' : ' órája');
            case 'hh':
              return i + (n || t ? ' óra' : ' órája');
            case 'd':
              return 'egy' + (n || t ? ' nap' : ' napja');
            case 'dd':
              return i + (n || t ? ' nap' : ' napja');
            case 'M':
              return 'egy' + (n || t ? ' hónap' : ' hónapja');
            case 'MM':
              return i + (n || t ? ' hónap' : ' hónapja');
            case 'y':
              return 'egy' + (n || t ? ' év' : ' éve');
            case 'yy':
              return i + (n || t ? ' év' : ' éve');
          }
          return '';
        }
        function n(e) {
          return (e ? '' : '[múlt] ') + '[' + t[this.day()] + '] LT[-kor]';
        }
        e.defineLocale('hu', {
          months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split(
            '_',
          ),
          monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
          weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
          weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
          weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm',
          },
          meridiemParse: /de|du/i,
          isPM: function(e) {
            return 'u' === e.charAt(1).toLowerCase();
          },
          meridiem: function(e, t, a) {
            return e < 12 ? (!0 === a ? 'de' : 'DE') : !0 === a ? 'du' : 'DU';
          },
          calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function() {
              return n.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function() {
              return n.call(this, !1);
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('hy-am', {
          months: {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split(
              '_',
            ),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split(
              '_',
            ),
          },
          monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
          weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
          weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY թ.',
            LLL: 'D MMMM YYYY թ., HH:mm',
            LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
          },
          calendar: {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function() {
              return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function() {
              return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s հետո',
            past: '%s առաջ',
            s: 'մի քանի վայրկյան',
            ss: '%d վայրկյան',
            m: 'րոպե',
            mm: '%d րոպե',
            h: 'ժամ',
            hh: '%d ժամ',
            d: 'օր',
            dd: '%d օր',
            M: 'ամիս',
            MM: '%d ամիս',
            y: 'տարի',
            yy: '%d տարի',
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function(e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e);
          },
          meridiem: function(e) {
            return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան';
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'DDD':
              case 'w':
              case 'W':
              case 'DDDo':
                return 1 === e ? e + '-ին' : e + '-րդ';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('id', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'siang' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'sore' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function r(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function t(e, t, a, n) {
          var i = e + ' ';
          switch (a) {
            case 's':
              return t || n ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
              return r(e) ? i + (t || n ? 'sekúndur' : 'sekúndum') : i + 'sekúnda';
            case 'm':
              return t ? 'mínúta' : 'mínútu';
            case 'mm':
              return r(e) ? i + (t || n ? 'mínútur' : 'mínútum') : t ? i + 'mínúta' : i + 'mínútu';
            case 'hh':
              return r(e) ? i + (t || n ? 'klukkustundir' : 'klukkustundum') : i + 'klukkustund';
            case 'd':
              return t ? 'dagur' : n ? 'dag' : 'degi';
            case 'dd':
              return r(e)
                ? t
                  ? i + 'dagar'
                  : i + (n ? 'daga' : 'dögum')
                : t
                ? i + 'dagur'
                : i + (n ? 'dag' : 'degi');
            case 'M':
              return t ? 'mánuður' : n ? 'mánuð' : 'mánuði';
            case 'MM':
              return r(e)
                ? t
                  ? i + 'mánuðir'
                  : i + (n ? 'mánuði' : 'mánuðum')
                : t
                ? i + 'mánuður'
                : i + (n ? 'mánuð' : 'mánuði');
            case 'y':
              return t || n ? 'ár' : 'ári';
            case 'yy':
              return r(e) ? i + (t || n ? 'ár' : 'árum') : i + (t || n ? 'ár' : 'ári');
          }
        }
        e.defineLocale('is', {
          months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
          weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split(
            '_',
          ),
          weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
          weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
          },
          calendar: {
            sameDay: '[í dag kl.] LT',
            nextDay: '[á morgun kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[í gær kl.] LT',
            lastWeek: '[síðasta] dddd [kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'eftir %s',
            past: 'fyrir %s síðan',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: 'klukkustund',
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('it', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
            '_',
          ),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
          weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
          weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
          weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT';
                default:
                  return '[lo scorso] dddd [alle] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: "un'ora",
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('it-ch', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
            '_',
          ),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
          weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
          weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
          weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT';
                default:
                  return '[lo scorso] dddd [alle] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: "un'ora",
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ja', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
          weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
          weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 dddd HH:mm',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日(ddd) HH:mm',
          },
          meridiemParse: /午前|午後/i,
          isPM: function(e) {
            return '午後' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? '午前' : '午後';
          },
          calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: function(e) {
              return e.week() < this.week() ? '[来週]dddd LT' : 'dddd LT';
            },
            lastDay: '[昨日] LT',
            lastWeek: function(e) {
              return this.week() < e.week() ? '[先週]dddd LT' : 'dddd LT';
            },
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年',
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('jv', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
          weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'enjing' === t
                ? e
                : 'siyang' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'sonten' === t || 'ndalu' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu';
          },
          calendar: {
            sameDay: '[Dinten puniko pukul] LT',
            nextDay: '[Mbenjang pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kala wingi pukul] LT',
            lastWeek: 'dddd [kepengker pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'wonten ing %s',
            past: '%s ingkang kepengker',
            s: 'sawetawis detik',
            ss: '%d detik',
            m: 'setunggal menit',
            mm: '%d menit',
            h: 'setunggal jam',
            hh: '%d jam',
            d: 'sedinten',
            dd: '%d dinten',
            M: 'sewulan',
            MM: '%d wulan',
            y: 'setaun',
            yy: '%d taun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ka', {
          months: {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
              '_',
            ),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split(
              '_',
            ),
          },
          monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
          weekdays: {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/,
          },
          weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
          weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[დღეს] LT[-ზე]',
            nextDay: '[ხვალ] LT[-ზე]',
            lastDay: '[გუშინ] LT[-ზე]',
            nextWeek: '[შემდეგ] dddd LT[-ზე]',
            lastWeek: '[წინა] dddd LT-ზე',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, 'ში') : e + 'ში';
            },
            past: function(e) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                ? e.replace(/(ი|ე)$/, 'ის წინ')
                : /წელი/.test(e)
                ? e.replace(/წელი$/, 'წლის წინ')
                : void 0;
            },
            s: 'რამდენიმე წამი',
            ss: '%d წამი',
            m: 'წუთი',
            mm: '%d წუთი',
            h: 'საათი',
            hh: '%d საათი',
            d: 'დღე',
            dd: '%d დღე',
            M: 'თვე',
            MM: '%d თვე',
            y: 'წელი',
            yy: '%d წელი',
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function(e) {
            return 0 === e
              ? e
              : 1 === e
              ? e + '-ლი'
              : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
              ? 'მე-' + e
              : e + '-ე';
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var n = {
          0: '-ші',
          1: '-ші',
          2: '-ші',
          3: '-ші',
          4: '-ші',
          5: '-ші',
          6: '-шы',
          7: '-ші',
          8: '-ші',
          9: '-шы',
          10: '-шы',
          20: '-шы',
          30: '-шы',
          40: '-шы',
          50: '-ші',
          60: '-шы',
          70: '-ші',
          80: '-ші',
          90: '-шы',
          100: '-ші',
        };
        e.defineLocale('kk', {
          months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split(
            '_',
          ),
          monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
          weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
          weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
          weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Бүгін сағат] LT',
            nextDay: '[Ертең сағат] LT',
            nextWeek: 'dddd [сағат] LT',
            lastDay: '[Кеше сағат] LT',
            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ішінде',
            past: '%s бұрын',
            s: 'бірнеше секунд',
            ss: '%d секунд',
            m: 'бір минут',
            mm: '%d минут',
            h: 'бір сағат',
            hh: '%d сағат',
            d: 'бір күн',
            dd: '%d күн',
            M: 'бір ай',
            MM: '%d ай',
            y: 'бір жыл',
            yy: '%d жыл',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function(e) {
            var t = e % 10,
              a = 100 <= e ? 100 : null;
            return e + (n[e] || n[t] || n[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '១', 2: '២', 3: '៣', 4: '៤', 5: '៥', 6: '៦', 7: '៧', 8: '៨', 9: '៩', 0: '០' },
          a = {
            '១': '1',
            '២': '2',
            '៣': '3',
            '៤': '4',
            '៥': '5',
            '៦': '6',
            '៧': '7',
            '៨': '8',
            '៩': '9',
            '០': '0',
          };
        e.defineLocale('km', {
          months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_',
          ),
          monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_',
          ),
          weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
          weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /ព្រឹក|ល្ងាច/,
          isPM: function(e) {
            return 'ល្ងាច' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ព្រឹក' : 'ល្ងាច';
          },
          calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ',
          },
          dayOfMonthOrdinalParse: /ទី\d{1,2}/,
          ordinal: 'ទី%d',
          preparse: function(e) {
            return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '೧', 2: '೨', 3: '೩', 4: '೪', 5: '೫', 6: '೬', 7: '೭', 8: '೮', 9: '೯', 0: '೦' },
          a = {
            '೧': '1',
            '೨': '2',
            '೩': '3',
            '೪': '4',
            '೫': '5',
            '೬': '6',
            '೭': '7',
            '೮': '8',
            '೯': '9',
            '೦': '0',
          };
        e.defineLocale('kn', {
          months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split(
            '_',
          ),
          monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
          weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
          weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[ಇಂದು] LT',
            nextDay: '[ನಾಳೆ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ನಿನ್ನೆ] LT',
            lastWeek: '[ಕೊನೆಯ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ನಂತರ',
            past: '%s ಹಿಂದೆ',
            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss: '%d ಸೆಕೆಂಡುಗಳು',
            m: 'ಒಂದು ನಿಮಿಷ',
            mm: '%d ನಿಮಿಷ',
            h: 'ಒಂದು ಗಂಟೆ',
            hh: '%d ಗಂಟೆ',
            d: 'ಒಂದು ದಿನ',
            dd: '%d ದಿನ',
            M: 'ಒಂದು ತಿಂಗಳು',
            MM: '%d ತಿಂಗಳು',
            y: 'ಒಂದು ವರ್ಷ',
            yy: '%d ವರ್ಷ',
          },
          preparse: function(e) {
            return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ರಾತ್ರಿ' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ಬೆಳಿಗ್ಗೆ' === t
                ? e
                : 'ಮಧ್ಯಾಹ್ನ' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'ಸಂಜೆ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'ರಾತ್ರಿ'
              : e < 10
              ? 'ಬೆಳಿಗ್ಗೆ'
              : e < 17
              ? 'ಮಧ್ಯಾಹ್ನ'
              : e < 20
              ? 'ಸಂಜೆ'
              : 'ರಾತ್ರಿ';
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function(e) {
            return e + 'ನೇ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ko', {
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
          weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD.',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm',
          },
          calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '일';
              case 'M':
                return e + '월';
              case 'w':
              case 'W':
                return e + '주';
              default:
                return e;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function(e) {
            return '오후' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? '오전' : '오후';
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
          a = {
            '١': '1',
            '٢': '2',
            '٣': '3',
            '٤': '4',
            '٥': '5',
            '٦': '6',
            '٧': '7',
            '٨': '8',
            '٩': '9',
            '٠': '0',
          },
          n = [
            'کانونی دووەم',
            'شوبات',
            'ئازار',
            'نیسان',
            'ئایار',
            'حوزەیران',
            'تەمموز',
            'ئاب',
            'ئەیلوول',
            'تشرینی یەكەم',
            'تشرینی دووەم',
            'كانونی یەکەم',
          ];
        e.defineLocale('ku', {
          months: n,
          monthsShort: n,
          weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split(
            '_',
          ),
          weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
          weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          meridiemParse: /ئێواره‌|به‌یانی/,
          isPM: function(e) {
            return /ئێواره‌/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'به‌یانی' : 'ئێواره‌';
          },
          calendar: {
            sameDay: '[ئه‌مرۆ كاتژمێر] LT',
            nextDay: '[به‌یانی كاتژمێر] LT',
            nextWeek: 'dddd [كاتژمێر] LT',
            lastDay: '[دوێنێ كاتژمێر] LT',
            lastWeek: 'dddd [كاتژمێر] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'له‌ %s',
            past: '%s',
            s: 'چه‌ند چركه‌یه‌ك',
            ss: 'چركه‌ %d',
            m: 'یه‌ك خوله‌ك',
            mm: '%d خوله‌ك',
            h: 'یه‌ك كاتژمێر',
            hh: '%d كاتژمێر',
            d: 'یه‌ك ڕۆژ',
            dd: '%d ڕۆژ',
            M: 'یه‌ك مانگ',
            MM: '%d مانگ',
            y: 'یه‌ك ساڵ',
            yy: '%d ساڵ',
          },
          preparse: function(e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return a[e];
              })
              .replace(/،/g, ',');
          },
          postformat: function(e) {
            return e
              .replace(/\d/g, function(e) {
                return t[e];
              })
              .replace(/,/g, '،');
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var n = {
          0: '-чү',
          1: '-чи',
          2: '-чи',
          3: '-чү',
          4: '-чү',
          5: '-чи',
          6: '-чы',
          7: '-чи',
          8: '-чи',
          9: '-чу',
          10: '-чу',
          20: '-чы',
          30: '-чу',
          40: '-чы',
          50: '-чү',
          60: '-чы',
          70: '-чи',
          80: '-чи',
          90: '-чу',
          100: '-чү',
        };
        e.defineLocale('ky', {
          months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
            '_',
          ),
          monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
          weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
          weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Бүгүн саат] LT',
            nextDay: '[Эртең саат] LT',
            nextWeek: 'dddd [саат] LT',
            lastDay: '[Кечээ саат] LT',
            lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ичинде',
            past: '%s мурун',
            s: 'бирнече секунд',
            ss: '%d секунд',
            m: 'бир мүнөт',
            mm: '%d мүнөт',
            h: 'бир саат',
            hh: '%d саат',
            d: 'бир күн',
            dd: '%d күн',
            M: 'бир ай',
            MM: '%d ай',
            y: 'бир жыл',
            yy: '%d жыл',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function(e) {
            var t = e % 10,
              a = 100 <= e ? 100 : null;
            return e + (n[e] || n[t] || n[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            m: ['eng Minutt', 'enger Minutt'],
            h: ['eng Stonn', 'enger Stonn'],
            d: ['een Dag', 'engem Dag'],
            M: ['ee Mount', 'engem Mount'],
            y: ['ee Joer', 'engem Joer'],
          };
          return t ? i[a][0] : i[a][1];
        }
        function n(e) {
          if (((e = parseInt(e, 10)), isNaN(e))) return !1;
          if (e < 0) return !0;
          if (e < 10) return 4 <= e && e <= 7;
          if (e < 100) {
            var t = e % 10,
              a = e / 10;
            return n(0 == t ? a : t);
          }
          if (e < 1e4) {
            for (; 10 <= e; ) e /= 10;
            return n(e);
          }
          return n((e /= 1e3));
        }
        e.defineLocale('lb', {
          months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(
            '_',
          ),
          monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
          weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
          },
          calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 2:
                case 4:
                  return '[Leschten] dddd [um] LT';
                default:
                  return '[Leschte] dddd [um] LT';
              }
            },
          },
          relativeTime: {
            future: function(e) {
              if (n(e.substr(0, e.indexOf(' ')))) return 'a ' + e;
              return 'an ' + e;
            },
            past: function(e) {
              if (n(e.substr(0, e.indexOf(' ')))) return 'viru ' + e;
              return 'virun ' + e;
            },
            s: 'e puer Sekonnen',
            ss: '%d Sekonnen',
            m: t,
            mm: '%d Minutten',
            h: t,
            hh: '%d Stonnen',
            d: t,
            dd: '%d Deeg',
            M: t,
            MM: '%d Méint',
            y: t,
            yy: '%d Joer',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('lo', {
          months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
            '_',
          ),
          monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
            '_',
          ),
          weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function(e) {
            return 'ຕອນແລງ' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
          },
          calendar: {
            sameDay: '[ມື້ນີ້ເວລາ] LT',
            nextDay: '[ມື້ອື່ນເວລາ] LT',
            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ອີກ %s',
            past: '%sຜ່ານມາ',
            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss: '%d ວິນາທີ',
            m: '1 ນາທີ',
            mm: '%d ນາທີ',
            h: '1 ຊົ່ວໂມງ',
            hh: '%d ຊົ່ວໂມງ',
            d: '1 ມື້',
            dd: '%d ມື້',
            M: '1 ເດືອນ',
            MM: '%d ເດືອນ',
            y: '1 ປີ',
            yy: '%d ປີ',
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function(e) {
            return 'ທີ່' + e;
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = {
          ss: 'sekundė_sekundžių_sekundes',
          m: 'minutė_minutės_minutę',
          mm: 'minutės_minučių_minutes',
          h: 'valanda_valandos_valandą',
          hh: 'valandos_valandų_valandas',
          d: 'diena_dienos_dieną',
          dd: 'dienos_dienų_dienas',
          M: 'mėnuo_mėnesio_mėnesį',
          MM: 'mėnesiai_mėnesių_mėnesius',
          y: 'metai_metų_metus',
          yy: 'metai_metų_metus',
        };
        function r(e, t, a, n) {
          return t ? o(a)[0] : n ? o(a)[1] : o(a)[2];
        }
        function s(e) {
          return e % 10 == 0 || (10 < e && e < 20);
        }
        function o(e) {
          return t[e].split('_');
        }
        function a(e, t, a, n) {
          var i = e + ' ';
          return 1 === e
            ? i + r(e, t, a[0], n)
            : t
            ? i + (s(e) ? o(a)[1] : o(a)[0])
            : n
            ? i + o(a)[1]
            : i + (s(e) ? o(a)[1] : o(a)[2]);
        }
        e.defineLocale('lt', {
          months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
              '_',
            ),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
              '_',
            ),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          },
          monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
          weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split(
              '_',
            ),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
              '_',
            ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
          weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
          },
          calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: function(e, t, a, n) {
              return t ? 'kelios sekundės' : n ? 'kelių sekundžių' : 'kelias sekundes';
            },
            ss: a,
            m: r,
            mm: a,
            h: r,
            hh: a,
            d: r,
            dd: a,
            M: r,
            MM: a,
            y: r,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function(e) {
            return e + '-oji';
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var n = {
          ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
          m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          h: 'stundas_stundām_stunda_stundas'.split('_'),
          hh: 'stundas_stundām_stunda_stundas'.split('_'),
          d: 'dienas_dienām_diena_dienas'.split('_'),
          dd: 'dienas_dienām_diena_dienas'.split('_'),
          M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          y: 'gada_gadiem_gads_gadi'.split('_'),
          yy: 'gada_gadiem_gads_gadi'.split('_'),
        };
        function i(e, t, a) {
          return a
            ? t % 10 == 1 && t % 100 != 11
              ? e[2]
              : e[3]
            : t % 10 == 1 && t % 100 != 11
            ? e[0]
            : e[1];
        }
        function t(e, t, a) {
          return e + ' ' + i(n[a], e, t);
        }
        function a(e, t, a) {
          return i(n[a], e, t);
        }
        e.defineLocale('lv', {
          months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split(
            '_',
          ),
          weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY.',
            LL: 'YYYY. [gada] D. MMMM',
            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
          },
          calendar: {
            sameDay: '[Šodien pulksten] LT',
            nextDay: '[Rīt pulksten] LT',
            nextWeek: 'dddd [pulksten] LT',
            lastDay: '[Vakar pulksten] LT',
            lastWeek: '[Pagājušā] dddd [pulksten] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'pēc %s',
            past: 'pirms %s',
            s: function(e, t) {
              return t ? 'dažas sekundes' : 'dažām sekundēm';
            },
            ss: t,
            m: a,
            mm: t,
            h: a,
            hh: t,
            d: a,
            dd: t,
            M: a,
            MM: t,
            y: a,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var i = {
          words: {
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, t, a) {
            var n = i.words[a];
            return 1 === a.length ? (t ? n[0] : n[1]) : e + ' ' + i.correctGrammaticalCase(e, n);
          },
        };
        e.defineLocale('me', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
            '_',
          ),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';
                case 3:
                  return '[u] [srijedu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function() {
              return [
                '[prošle] [nedjelje] [u] LT',
                '[prošlog] [ponedjeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srijede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'nekoliko sekundi',
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: 'dan',
            dd: i.translate,
            M: 'mjesec',
            MM: i.translate,
            y: 'godinu',
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('mi', {
          months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split(
            '_',
          ),
          monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
          weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
          },
          calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('mk', {
          months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split(
            '_',
          ),
          monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
          weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
          weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
          weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[Денес во] LT',
            nextDay: '[Утре во] LT',
            nextWeek: '[Во] dddd [во] LT',
            lastDay: '[Вчера во] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[Изминатиот] dddd [во] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'после %s',
            past: 'пред %s',
            s: 'неколку секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дена',
            M: 'месец',
            MM: '%d месеци',
            y: 'година',
            yy: '%d години',
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function(e) {
            var t = e % 10,
              a = e % 100;
            return 0 === e
              ? e + '-ев'
              : 0 == a
              ? e + '-ен'
              : 10 < a && a < 20
              ? e + '-ти'
              : 1 == t
              ? e + '-ви'
              : 2 == t
              ? e + '-ри'
              : 7 == t || 8 == t
              ? e + '-ми'
              : e + '-ти';
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ml', {
          months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split(
            '_',
          ),
          monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split(
            '_',
          ),
          weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
          weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm -നു',
            LTS: 'A h:mm:ss -നു',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm -നു',
            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
          },
          calendar: {
            sameDay: '[ഇന്ന്] LT',
            nextDay: '[നാളെ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ഇന്നലെ] LT',
            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s കഴിഞ്ഞ്',
            past: '%s മുൻപ്',
            s: 'അൽപ നിമിഷങ്ങൾ',
            ss: '%d സെക്കൻഡ്',
            m: 'ഒരു മിനിറ്റ്',
            mm: '%d മിനിറ്റ്',
            h: 'ഒരു മണിക്കൂർ',
            hh: '%d മണിക്കൂർ',
            d: 'ഒരു ദിവസം',
            dd: '%d ദിവസം',
            M: 'ഒരു മാസം',
            MM: '%d മാസം',
            y: 'ഒരു വർഷം',
            yy: '%d വർഷം',
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              ('രാത്രി' === t && 4 <= e) || 'ഉച്ച കഴിഞ്ഞ്' === t || 'വൈകുന്നേരം' === t ? e + 12 : e
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'രാത്രി'
              : e < 12
              ? 'രാവിലെ'
              : e < 17
              ? 'ഉച്ച കഴിഞ്ഞ്'
              : e < 20
              ? 'വൈകുന്നേരം'
              : 'രാത്രി';
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          switch (a) {
            case 's':
              return t ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
              return e + (t ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
              return e + (t ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
              return e + (t ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
              return e + (t ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
              return e + (t ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
              return e + (t ? ' жил' : ' жилийн');
            default:
              return e;
          }
        }
        e.defineLocale('mn', {
          months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split(
            '_',
          ),
          monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
          weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
          weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm',
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function(e) {
            return 'ҮХ' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ҮӨ' : 'ҮХ';
          },
          calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + ' өдөр';
              default:
                return e;
            }
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
          a = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        function n(e, t, a, n) {
          var i = '';
          if (t)
            switch (a) {
              case 's':
                i = 'काही सेकंद';
                break;
              case 'ss':
                i = '%d सेकंद';
                break;
              case 'm':
                i = 'एक मिनिट';
                break;
              case 'mm':
                i = '%d मिनिटे';
                break;
              case 'h':
                i = 'एक तास';
                break;
              case 'hh':
                i = '%d तास';
                break;
              case 'd':
                i = 'एक दिवस';
                break;
              case 'dd':
                i = '%d दिवस';
                break;
              case 'M':
                i = 'एक महिना';
                break;
              case 'MM':
                i = '%d महिने';
                break;
              case 'y':
                i = 'एक वर्ष';
                break;
              case 'yy':
                i = '%d वर्षे';
            }
          else
            switch (a) {
              case 's':
                i = 'काही सेकंदां';
                break;
              case 'ss':
                i = '%d सेकंदां';
                break;
              case 'm':
                i = 'एका मिनिटा';
                break;
              case 'mm':
                i = '%d मिनिटां';
                break;
              case 'h':
                i = 'एका तासा';
                break;
              case 'hh':
                i = '%d तासां';
                break;
              case 'd':
                i = 'एका दिवसा';
                break;
              case 'dd':
                i = '%d दिवसां';
                break;
              case 'M':
                i = 'एका महिन्या';
                break;
              case 'MM':
                i = '%d महिन्यां';
                break;
              case 'y':
                i = 'एका वर्षा';
                break;
              case 'yy':
                i = '%d वर्षां';
            }
          return i.replace(/%d/i, e);
        }
        e.defineLocale('mr', {
          months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split(
            '_',
          ),
          monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
          weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm वाजता',
            LTS: 'A h:mm:ss वाजता',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm वाजता',
            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[उद्या] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'रात्री' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'सकाळी' === t
                ? e
                : 'दुपारी' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'सायंकाळी' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'रात्री'
              : e < 10
              ? 'सकाळी'
              : e < 17
              ? 'दुपारी'
              : e < 20
              ? 'सायंकाळी'
              : 'रात्री';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ms', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'tengahari' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ms-my', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'pagi' === t
                ? e
                : 'tengahari' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('mt', {
          months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split(
            '_',
          ),
          monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
          weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
          weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
          weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Illum fil-]LT',
            nextDay: '[Għada fil-]LT',
            nextWeek: 'dddd [fil-]LT',
            lastDay: '[Il-bieraħ fil-]LT',
            lastWeek: 'dddd [li għadda] [fil-]LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'f’ %s',
            past: '%s ilu',
            s: 'ftit sekondi',
            ss: '%d sekondi',
            m: 'minuta',
            mm: '%d minuti',
            h: 'siegħa',
            hh: '%d siegħat',
            d: 'ġurnata',
            dd: '%d ġranet',
            M: 'xahar',
            MM: '%d xhur',
            y: 'sena',
            yy: '%d sni',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '၁', 2: '၂', 3: '၃', 4: '၄', 5: '၅', 6: '၆', 7: '၇', 8: '၈', 9: '၉', 0: '၀' },
          a = {
            '၁': '1',
            '၂': '2',
            '၃': '3',
            '၄': '4',
            '၅': '5',
            '၆': '6',
            '၇': '7',
            '၈': '8',
            '၉': '9',
            '၀': '0',
          };
        e.defineLocale('my', {
          months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split(
            '_',
          ),
          monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
          weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
          weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss: '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်',
          },
          preparse: function(e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('nb', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_',
          ),
          monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
          weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
          a = {
            '१': '1',
            '२': '2',
            '३': '3',
            '४': '4',
            '५': '5',
            '६': '6',
            '७': '7',
            '८': '8',
            '९': '9',
            '०': '0',
          };
        e.defineLocale('ne', {
          months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split(
            '_',
          ),
          monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
          weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
          weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'Aको h:mm बजे',
            LTS: 'Aको h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, Aको h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
          },
          preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'राति' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'बिहान' === t
                ? e
                : 'दिउँसो' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'साँझ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति';
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[भोलि] LT',
            nextWeek: '[आउँदो] dddd[,] LT',
            lastDay: '[हिजो] LT',
            lastWeek: '[गएको] dddd[,] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sमा',
            past: '%s अगाडि',
            s: 'केही क्षण',
            ss: '%d सेकेण्ड',
            m: 'एक मिनेट',
            mm: '%d मिनेट',
            h: 'एक घण्टा',
            hh: '%d घण्टा',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महिना',
            MM: '%d महिना',
            y: 'एक बर्ष',
            yy: '%d बर्ष',
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          t = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale('nl', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: t,
          longMonthsParse: t,
          shortMonthsParse: t,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          t = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale('nl-be', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
            '_',
          ),
          monthsShort: function(e, t) {
            return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: t,
          longMonthsParse: t,
          shortMonthsParse: t,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? 'ste' : 'de');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('nn', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
          weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
          weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
          weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
          },
          calendar: {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: '%s sidan',
            s: 'nokre sekund',
            ss: '%d sekund',
            m: 'eit minutt',
            mm: '%d minutt',
            h: 'ein time',
            hh: '%d timar',
            d: 'ein dag',
            dd: '%d dagar',
            M: 'ein månad',
            MM: '%d månader',
            y: 'eit år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '੧', 2: '੨', 3: '੩', 4: '੪', 5: '੫', 6: '੬', 7: '੭', 8: '੮', 9: '੯', 0: '੦' },
          a = {
            '੧': '1',
            '੨': '2',
            '੩': '3',
            '੪': '4',
            '੫': '5',
            '੬': '6',
            '੭': '7',
            '੮': '8',
            '੯': '9',
            '੦': '0',
          };
        e.defineLocale('pa-in', {
          months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
          monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split(
            '_',
          ),
          weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
          weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm ਵਜੇ',
            LTS: 'A h:mm:ss ਵਜੇ',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
          },
          calendar: {
            sameDay: '[ਅਜ] LT',
            nextDay: '[ਕਲ] LT',
            nextWeek: '[ਅਗਲਾ] dddd, LT',
            lastDay: '[ਕਲ] LT',
            lastWeek: '[ਪਿਛਲੇ] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s ਵਿੱਚ',
            past: '%s ਪਿਛਲੇ',
            s: 'ਕੁਝ ਸਕਿੰਟ',
            ss: '%d ਸਕਿੰਟ',
            m: 'ਇਕ ਮਿੰਟ',
            mm: '%d ਮਿੰਟ',
            h: 'ਇੱਕ ਘੰਟਾ',
            hh: '%d ਘੰਟੇ',
            d: 'ਇੱਕ ਦਿਨ',
            dd: '%d ਦਿਨ',
            M: 'ਇੱਕ ਮਹੀਨਾ',
            MM: '%d ਮਹੀਨੇ',
            y: 'ਇੱਕ ਸਾਲ',
            yy: '%d ਸਾਲ',
          },
          preparse: function(e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ਰਾਤ' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ਸਵੇਰ' === t
                ? e
                : 'ਦੁਪਹਿਰ' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'ਸ਼ਾਮ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var a = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
            '_',
          ),
          n = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
            '_',
          );
        function i(e) {
          return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1;
        }
        function t(e, t, a) {
          var n = e + ' ';
          switch (a) {
            case 'ss':
              return n + (i(e) ? 'sekundy' : 'sekund');
            case 'm':
              return t ? 'minuta' : 'minutę';
            case 'mm':
              return n + (i(e) ? 'minuty' : 'minut');
            case 'h':
              return t ? 'godzina' : 'godzinę';
            case 'hh':
              return n + (i(e) ? 'godziny' : 'godzin');
            case 'MM':
              return n + (i(e) ? 'miesiące' : 'miesięcy');
            case 'yy':
              return n + (i(e) ? 'lata' : 'lat');
          }
        }
        e.defineLocale('pl', {
          months: function(e, t) {
            return e
              ? '' === t
                ? '(' + n[e.month()] + '|' + a[e.month()] + ')'
                : /D MMMM/.test(t)
                ? n[e.month()]
                : a[e.month()]
              : a;
          },
          monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
          weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
          weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
          weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[W niedzielę o] LT';
                case 2:
                  return '[We wtorek o] LT';
                case 3:
                  return '[W środę o] LT';
                case 6:
                  return '[W sobotę o] LT';
                default:
                  return '[W] dddd [o] LT';
              }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[W zeszłą niedzielę o] LT';
                case 3:
                  return '[W zeszłą środę o] LT';
                case 6:
                  return '[W zeszłą sobotę o] LT';
                default:
                  return '[W zeszły] dddd [o] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: t,
            y: 'rok',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('pt', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_',
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
            '_',
          ),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? '[Último] dddd [às] LT'
                : '[Última] dddd [às] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('pt-br', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_',
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
            '_',
          ),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day()
                ? '[Último] dddd [às] LT'
                : '[Última] dddd [às] LT';
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = ' ';
          return (
            (20 <= e % 100 || (100 <= e && e % 100 == 0)) && (n = ' de '),
            e + n + { ss: 'secunde', mm: 'minute', hh: 'ore', dd: 'zile', MM: 'luni', yy: 'ani' }[a]
          );
        }
        e.defineLocale('ro', {
          months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
            '_',
          ),
          monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
          weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
          weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: t,
            m: 'un minut',
            mm: t,
            h: 'o oră',
            hh: t,
            d: 'o zi',
            dd: t,
            M: 'o lună',
            MM: t,
            y: 'un an',
            yy: t,
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = {
            ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: t ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет',
          };
          return 'm' === a
            ? t
              ? 'минута'
              : 'минуту'
            : e +
                ' ' +
                (function(e, t) {
                  var a = e.split('_');
                  return t % 10 == 1 && t % 100 != 11
                    ? a[0]
                    : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100)
                    ? a[1]
                    : a[2];
                })(n[a], +e);
        }
        var a = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[йя]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i,
        ];
        e.defineLocale('ru', {
          months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
              '_',
            ),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
              '_',
            ),
          },
          monthsShort: {
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_'),
          },
          weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
          },
          weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          monthsParse: a,
          longMonthsParse: a,
          shortMonthsParse: a,
          monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm',
          },
          calendar: {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
              switch (this.day()) {
                case 0:
                  return '[В следующее] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                  return '[В следующий] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                  return '[В следующую] dddd, [в] LT';
              }
            },
            lastWeek: function(e) {
              if (e.week() === this.week())
                return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd, [в] LT';
                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd, [в] LT';
                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd, [в] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: t,
            m: t,
            mm: t,
            h: 'час',
            hh: t,
            d: 'день',
            dd: t,
            M: 'месяц',
            MM: t,
            y: 'год',
            yy: t,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function(e) {
            return /^(дня|вечера)$/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
                return e + '-й';
              case 'D':
                return e + '-го';
              case 'w':
              case 'W':
                return e + '-я';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = [
            'جنوري',
            'فيبروري',
            'مارچ',
            'اپريل',
            'مئي',
            'جون',
            'جولاءِ',
            'آگسٽ',
            'سيپٽمبر',
            'آڪٽوبر',
            'نومبر',
            'ڊسمبر',
          ],
          a = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
        e.defineLocale('sd', {
          months: t,
          monthsShort: t,
          weekdays: a,
          weekdaysShort: a,
          weekdaysMin: a,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm',
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return 'شام' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'صبح' : 'شام';
          },
          calendar: {
            sameDay: '[اڄ] LT',
            nextDay: '[سڀاڻي] LT',
            nextWeek: 'dddd [اڳين هفتي تي] LT',
            lastDay: '[ڪالهه] LT',
            lastWeek: '[گزريل هفتي] dddd [تي] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s پوء',
            past: '%s اڳ',
            s: 'چند سيڪنڊ',
            ss: '%d سيڪنڊ',
            m: 'هڪ منٽ',
            mm: '%d منٽ',
            h: 'هڪ ڪلاڪ',
            hh: '%d ڪلاڪ',
            d: 'هڪ ڏينهن',
            dd: '%d ڏينهن',
            M: 'هڪ مهينو',
            MM: '%d مهينا',
            y: 'هڪ سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('se', {
          months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split(
            '_',
          ),
          monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
          weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split(
            '_',
          ),
          weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
          weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'MMMM D. [b.] YYYY',
            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
          },
          calendar: {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s geažes',
            past: 'maŋit %s',
            s: 'moadde sekunddat',
            ss: '%d sekunddat',
            m: 'okta minuhta',
            mm: '%d minuhtat',
            h: 'okta diimmu',
            hh: '%d diimmut',
            d: 'okta beaivi',
            dd: '%d beaivvit',
            M: 'okta mánnu',
            MM: '%d mánut',
            y: 'okta jahki',
            yy: '%d jagit',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('si', {
          months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split(
            '_',
          ),
          monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
          weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
          weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
          weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'a h:mm',
            LTS: 'a h:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY MMMM D',
            LLL: 'YYYY MMMM D, a h:mm',
            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
          },
          calendar: {
            sameDay: '[අද] LT[ට]',
            nextDay: '[හෙට] LT[ට]',
            nextWeek: 'dddd LT[ට]',
            lastDay: '[ඊයේ] LT[ට]',
            lastWeek: '[පසුගිය] dddd LT[ට]',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%sකින්',
            past: '%sකට පෙර',
            s: 'තත්පර කිහිපය',
            ss: 'තත්පර %d',
            m: 'මිනිත්තුව',
            mm: 'මිනිත්තු %d',
            h: 'පැය',
            hh: 'පැය %d',
            d: 'දිනය',
            dd: 'දින %d',
            M: 'මාසය',
            MM: 'මාස %d',
            y: 'වසර',
            yy: 'වසර %d',
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function(e) {
            return e + ' වැනි';
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function(e) {
            return 'ප.ව.' === e || 'පස් වරු' === e;
          },
          meridiem: function(e, t, a) {
            return 11 < e ? (a ? 'ප.ව.' : 'පස් වරු') : a ? 'පෙ.ව.' : 'පෙර වරු';
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split(
            '_',
          ),
          a = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
        function r(e) {
          return 1 < e && e < 5;
        }
        function n(e, t, a, n) {
          var i = e + ' ';
          switch (a) {
            case 's':
              return t || n ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
              return t || n ? i + (r(e) ? 'sekundy' : 'sekúnd') : i + 'sekundami';
            case 'm':
              return t ? 'minúta' : n ? 'minútu' : 'minútou';
            case 'mm':
              return t || n ? i + (r(e) ? 'minúty' : 'minút') : i + 'minútami';
            case 'h':
              return t ? 'hodina' : n ? 'hodinu' : 'hodinou';
            case 'hh':
              return t || n ? i + (r(e) ? 'hodiny' : 'hodín') : i + 'hodinami';
            case 'd':
              return t || n ? 'deň' : 'dňom';
            case 'dd':
              return t || n ? i + (r(e) ? 'dni' : 'dní') : i + 'dňami';
            case 'M':
              return t || n ? 'mesiac' : 'mesiacom';
            case 'MM':
              return t || n ? i + (r(e) ? 'mesiace' : 'mesiacov') : i + 'mesiacmi';
            case 'y':
              return t || n ? 'rok' : 'rokom';
            case 'yy':
              return t || n ? i + (r(e) ? 'roky' : 'rokov') : i + 'rokmi';
          }
        }
        e.defineLocale('sk', {
          months: t,
          monthsShort: a,
          weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
          weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
          weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v nedeľu o] LT';
                case 1:
                case 2:
                  return '[v] dddd [o] LT';
                case 3:
                  return '[v stredu o] LT';
                case 4:
                  return '[vo štvrtok o] LT';
                case 5:
                  return '[v piatok o] LT';
                case 6:
                  return '[v sobotu o] LT';
              }
            },
            lastDay: '[včera o] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                  return '[minulý] dddd [o] LT';
                case 3:
                  return '[minulú stredu o] LT';
                case 4:
                case 5:
                  return '[minulý] dddd [o] LT';
                case 6:
                  return '[minulú sobotu o] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = e + ' ';
          switch (a) {
            case 's':
              return t || n ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
              return (i +=
                1 === e
                  ? t
                    ? 'sekundo'
                    : 'sekundi'
                  : 2 === e
                  ? t || n
                    ? 'sekundi'
                    : 'sekundah'
                  : e < 5
                  ? t || n
                    ? 'sekunde'
                    : 'sekundah'
                  : 'sekund');
            case 'm':
              return t ? 'ena minuta' : 'eno minuto';
            case 'mm':
              return (i +=
                1 === e
                  ? t
                    ? 'minuta'
                    : 'minuto'
                  : 2 === e
                  ? t || n
                    ? 'minuti'
                    : 'minutama'
                  : e < 5
                  ? t || n
                    ? 'minute'
                    : 'minutami'
                  : t || n
                  ? 'minut'
                  : 'minutami');
            case 'h':
              return t ? 'ena ura' : 'eno uro';
            case 'hh':
              return (i +=
                1 === e
                  ? t
                    ? 'ura'
                    : 'uro'
                  : 2 === e
                  ? t || n
                    ? 'uri'
                    : 'urama'
                  : e < 5
                  ? t || n
                    ? 'ure'
                    : 'urami'
                  : t || n
                  ? 'ur'
                  : 'urami');
            case 'd':
              return t || n ? 'en dan' : 'enim dnem';
            case 'dd':
              return (i +=
                1 === e
                  ? t || n
                    ? 'dan'
                    : 'dnem'
                  : 2 === e
                  ? t || n
                    ? 'dni'
                    : 'dnevoma'
                  : t || n
                  ? 'dni'
                  : 'dnevi');
            case 'M':
              return t || n ? 'en mesec' : 'enim mesecem';
            case 'MM':
              return (i +=
                1 === e
                  ? t || n
                    ? 'mesec'
                    : 'mesecem'
                  : 2 === e
                  ? t || n
                    ? 'meseca'
                    : 'mesecema'
                  : e < 5
                  ? t || n
                    ? 'mesece'
                    : 'meseci'
                  : t || n
                  ? 'mesecev'
                  : 'meseci');
            case 'y':
              return t || n ? 'eno leto' : 'enim letom';
            case 'yy':
              return (i +=
                1 === e
                  ? t || n
                    ? 'leto'
                    : 'letom'
                  : 2 === e
                  ? t || n
                    ? 'leti'
                    : 'letoma'
                  : e < 5
                  ? t || n
                    ? 'leta'
                    : 'leti'
                  : t || n
                  ? 'let'
                  : 'leti');
          }
        }
        e.defineLocale('sl', {
          months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
            '_',
          ),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
          weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
          weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[v] [nedeljo] [ob] LT';
                case 3:
                  return '[v] [sredo] [ob] LT';
                case 6:
                  return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[v] dddd [ob] LT';
              }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                  return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                  return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prejšnji] dddd [ob] LT';
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('sq', {
          months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split(
            '_',
          ),
          monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
          weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
          weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
          weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function(e) {
            return 'M' === e.charAt(0);
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'PD' : 'MD';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Sot në] LT',
            nextDay: '[Nesër në] LT',
            nextWeek: 'dddd [në] LT',
            lastDay: '[Dje në] LT',
            lastWeek: 'dddd [e kaluar në] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'në %s',
            past: '%s më parë',
            s: 'disa sekonda',
            ss: '%d sekonda',
            m: 'një minutë',
            mm: '%d minuta',
            h: 'një orë',
            hh: '%d orë',
            d: 'një ditë',
            dd: '%d ditë',
            M: 'një muaj',
            MM: '%d muaj',
            y: 'një vit',
            yy: '%d vite',
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var i = {
          words: {
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, t, a) {
            var n = i.words[a];
            return 1 === a.length ? (t ? n[0] : n[1]) : e + ' ' + i.correctGrammaticalCase(e, n);
          },
        };
        e.defineLocale('sr', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
            '_',
          ),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedelju] [u] LT';
                case 3:
                  return '[u] [sredu] [u] LT';
                case 6:
                  return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function() {
              return [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: 'pre %s',
            s: 'nekoliko sekundi',
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: 'dan',
            dd: i.translate,
            M: 'mesec',
            MM: i.translate,
            y: 'godinu',
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var i = {
          words: {
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година'],
          },
          correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
          },
          translate: function(e, t, a) {
            var n = i.words[a];
            return 1 === a.length ? (t ? n[0] : n[1]) : e + ' ' + i.correctGrammaticalCase(e, n);
          },
        };
        e.defineLocale('sr-cyrl', {
          months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split(
            '_',
          ),
          monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
          weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
          weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
          calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return '[у] [недељу] [у] LT';
                case 3:
                  return '[у] [среду] [у] LT';
                case 6:
                  return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                  return '[у] dddd [у] LT';
              }
            },
            lastDay: '[јуче у] LT',
            lastWeek: function() {
              return [
                '[прошле] [недеље] [у] LT',
                '[прошлог] [понедељка] [у] LT',
                '[прошлог] [уторка] [у] LT',
                '[прошле] [среде] [у] LT',
                '[прошлог] [четвртка] [у] LT',
                '[прошлог] [петка] [у] LT',
                '[прошле] [суботе] [у] LT',
              ][this.day()];
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'за %s',
            past: 'пре %s',
            s: 'неколико секунди',
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: 'дан',
            dd: i.translate,
            M: 'месец',
            MM: i.translate,
            y: 'годину',
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ss', {
          months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            '_',
          ),
          monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
          weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split(
            '_',
          ),
          weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
          weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Namuhla nga] LT',
            nextDay: '[Kusasa nga] LT',
            nextWeek: 'dddd [nga] LT',
            lastDay: '[Itolo nga] LT',
            lastWeek: 'dddd [leliphelile] [nga] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'nga %s',
            past: 'wenteka nga %s',
            s: 'emizuzwana lomcane',
            ss: '%d mzuzwana',
            m: 'umzuzu',
            mm: '%d emizuzu',
            h: 'lihora',
            hh: '%d emahora',
            d: 'lilanga',
            dd: '%d emalanga',
            M: 'inyanga',
            MM: '%d tinyanga',
            y: 'umnyaka',
            yy: '%d iminyaka',
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function(e, t, a) {
            return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku';
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'ekuseni' === t
                ? e
                : 'emini' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'entsambama' === t || 'ebusuku' === t
                ? 0 === e
                  ? 0
                  : e + 12
                : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: '%d',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('sv', {
          months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
            '_',
          ),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
          weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
          weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
          ordinal: function(e) {
            var t = e % 10,
              a = 1 == ~~((e % 100) / 10) ? 'e' : 1 == t ? 'a' : 2 == t ? 'a' : 'e';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('sw', {
          months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split(
            '_',
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
          weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
          weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[leo saa] LT',
            nextDay: '[kesho saa] LT',
            nextWeek: '[wiki ijayo] dddd [saat] LT',
            lastDay: '[jana] LT',
            lastWeek: '[wiki iliyopita] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s baadaye',
            past: 'tokea %s',
            s: 'hivi punde',
            ss: 'sekunde %d',
            m: 'dakika moja',
            mm: 'dakika %d',
            h: 'saa limoja',
            hh: 'masaa %d',
            d: 'siku moja',
            dd: 'masiku %d',
            M: 'mwezi mmoja',
            MM: 'miezi %d',
            y: 'mwaka mmoja',
            yy: 'miaka %d',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = { 1: '௧', 2: '௨', 3: '௩', 4: '௪', 5: '௫', 6: '௬', 7: '௭', 8: '௮', 9: '௯', 0: '௦' },
          a = {
            '௧': '1',
            '௨': '2',
            '௩': '3',
            '௪': '4',
            '௫': '5',
            '௬': '6',
            '௭': '7',
            '௮': '8',
            '௯': '9',
            '௦': '0',
          };
        e.defineLocale('ta', {
          months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
            '_',
          ),
          monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
            '_',
          ),
          weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split(
            '_',
          ),
          weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
          weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, HH:mm',
            LLLL: 'dddd, D MMMM YYYY, HH:mm',
          },
          calendar: {
            sameDay: '[இன்று] LT',
            nextDay: '[நாளை] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[நேற்று] LT',
            lastWeek: '[கடந்த வாரம்] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s இல்',
            past: '%s முன்',
            s: 'ஒரு சில விநாடிகள்',
            ss: '%d விநாடிகள்',
            m: 'ஒரு நிமிடம்',
            mm: '%d நிமிடங்கள்',
            h: 'ஒரு மணி நேரம்',
            hh: '%d மணி நேரம்',
            d: 'ஒரு நாள்',
            dd: '%d நாட்கள்',
            M: 'ஒரு மாதம்',
            MM: '%d மாதங்கள்',
            y: 'ஒரு வருடம்',
            yy: '%d ஆண்டுகள்',
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function(e) {
            return e + 'வது';
          },
          preparse: function(e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
              return a[e];
            });
          },
          postformat: function(e) {
            return e.replace(/\d/g, function(e) {
              return t[e];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function(e, t, a) {
            return e < 2
              ? ' யாமம்'
              : e < 6
              ? ' வைகறை'
              : e < 10
              ? ' காலை'
              : e < 14
              ? ' நண்பகல்'
              : e < 18
              ? ' எற்பாடு'
              : e < 22
              ? ' மாலை'
              : ' யாமம்';
          },
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'யாமம்' === t
                ? e < 2
                  ? e
                  : e + 12
                : 'வைகறை' === t || 'காலை' === t
                ? e
                : 'நண்பகல்' === t && 10 <= e
                ? e
                : e + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('te', {
          months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split(
            '_',
          ),
          monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
          weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
          weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm',
          },
          calendar: {
            sameDay: '[నేడు] LT',
            nextDay: '[రేపు] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[నిన్న] LT',
            lastWeek: '[గత] dddd, LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s లో',
            past: '%s క్రితం',
            s: 'కొన్ని క్షణాలు',
            ss: '%d సెకన్లు',
            m: 'ఒక నిమిషం',
            mm: '%d నిమిషాలు',
            h: 'ఒక గంట',
            hh: '%d గంటలు',
            d: 'ఒక రోజు',
            dd: '%d రోజులు',
            M: 'ఒక నెల',
            MM: '%d నెలలు',
            y: 'ఒక సంవత్సరం',
            yy: '%d సంవత్సరాలు',
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: '%dవ',
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'రాత్రి' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'ఉదయం' === t
                ? e
                : 'మధ్యాహ్నం' === t
                ? 10 <= e
                  ? e
                  : e + 12
                : 'సాయంత్రం' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4
              ? 'రాత్రి'
              : e < 10
              ? 'ఉదయం'
              : e < 17
              ? 'మధ్యాహ్నం'
              : e < 20
              ? 'సాయంత్రం'
              : 'రాత్రి';
          },
          week: { dow: 0, doy: 6 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('tet', {
          months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split(
            '_',
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
          weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
          weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'iha %s',
            past: '%s liuba',
            s: 'minutu balun',
            ss: 'minutu %d',
            m: 'minutu ida',
            mm: 'minutu %d',
            h: 'oras ida',
            hh: 'oras %d',
            d: 'loron ida',
            dd: 'loron %d',
            M: 'fulan ida',
            MM: 'fulan %d',
            y: 'tinan ida',
            yy: 'tinan %d',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var n = {
          0: '-ум',
          1: '-ум',
          2: '-юм',
          3: '-юм',
          4: '-ум',
          5: '-ум',
          6: '-ум',
          7: '-ум',
          8: '-ум',
          9: '-ум',
          10: '-ум',
          12: '-ум',
          13: '-ум',
          20: '-ум',
          30: '-юм',
          40: '-ум',
          50: '-ум',
          60: '-ум',
          70: '-ум',
          80: '-ум',
          90: '-ум',
          100: '-ум',
        };
        e.defineLocale('tg', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
            '_',
          ),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
          weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
          weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Имрӯз соати] LT',
            nextDay: '[Пагоҳ соати] LT',
            lastDay: '[Дирӯз соати] LT',
            nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'баъди %s',
            past: '%s пеш',
            s: 'якчанд сония',
            m: 'як дақиқа',
            mm: '%d дақиқа',
            h: 'як соат',
            hh: '%d соат',
            d: 'як рӯз',
            dd: '%d рӯз',
            M: 'як моҳ',
            MM: '%d моҳ',
            y: 'як сол',
            yy: '%d сол',
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'шаб' === t
                ? e < 4
                  ? e
                  : e + 12
                : 'субҳ' === t
                ? e
                : 'рӯз' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : 'бегоҳ' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'шаб' : e < 11 ? 'субҳ' : e < 16 ? 'рӯз' : e < 19 ? 'бегоҳ' : 'шаб';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function(e) {
            var t = e % 10,
              a = 100 <= e ? 100 : null;
            return e + (n[e] || n[t] || n[a]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('th', {
          months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
            '_',
          ),
          monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
          monthsParseExact: !0,
          weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
          weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
          weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function(e) {
            return 'หลังเที่ยง' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
          },
          calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี',
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('tl-ph', {
          months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
            '_',
          ),
          monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
          weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
          weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
          weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MM/D/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY HH:mm',
            LLLL: 'dddd, MMMM DD, YYYY HH:mm',
          },
          calendar: {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'sa loob ng %s',
            past: '%s ang nakalipas',
            s: 'ilang segundo',
            ss: '%d segundo',
            m: 'isang minuto',
            mm: '%d minuto',
            h: 'isang oras',
            hh: '%d oras',
            d: 'isang araw',
            dd: '%d araw',
            M: 'isang buwan',
            MM: '%d buwan',
            y: 'isang taon',
            yy: '%d taon',
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var r = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
        function t(e, t, a, n) {
          var i = (function(e) {
            var t = Math.floor((e % 1e3) / 100),
              a = Math.floor((e % 100) / 10),
              n = e % 10,
              i = '';
            0 < t && (i += r[t] + 'vatlh');
            0 < a && (i += ('' !== i ? ' ' : '') + r[a] + 'maH');
            0 < n && (i += ('' !== i ? ' ' : '') + r[n]);
            return '' === i ? 'pagh' : i;
          })(e);
          switch (a) {
            case 'ss':
              return i + ' lup';
            case 'mm':
              return i + ' tup';
            case 'hh':
              return i + ' rep';
            case 'dd':
              return i + ' jaj';
            case 'MM':
              return i + ' jar';
            case 'yy':
              return i + ' DIS';
          }
        }
        e.defineLocale('tlh', {
          months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split(
            '_',
          ),
          monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split(
            '_',
          ),
          monthsParseExact: !0,
          weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L',
          },
          relativeTime: {
            future: function(e) {
              var t = e;
              return (t =
                -1 !== e.indexOf('jaj')
                  ? t.slice(0, -3) + 'leS'
                  : -1 !== e.indexOf('jar')
                  ? t.slice(0, -3) + 'waQ'
                  : -1 !== e.indexOf('DIS')
                  ? t.slice(0, -3) + 'nem'
                  : t + ' pIq');
            },
            past: function(e) {
              var t = e;
              return (t =
                -1 !== e.indexOf('jaj')
                  ? t.slice(0, -3) + 'Hu’'
                  : -1 !== e.indexOf('jar')
                  ? t.slice(0, -3) + 'wen'
                  : -1 !== e.indexOf('DIS')
                  ? t.slice(0, -3) + 'ben'
                  : t + ' ret');
            },
            s: 'puS lup',
            ss: t,
            m: 'wa’ tup',
            mm: t,
            h: 'wa’ rep',
            hh: t,
            d: 'wa’ jaj',
            dd: t,
            M: 'wa’ jar',
            MM: t,
            y: 'wa’ DIS',
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var r = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        };
        e.defineLocale('tr', {
          months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
            '_',
          ),
          monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
          weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
          weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
          weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl',
          },
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'Do':
              case 'DD':
                return e;
              default:
                if (0 === e) return e + "'ıncı";
                var a = e % 10,
                  n = (e % 100) - a,
                  i = 100 <= e ? 100 : null;
                return e + (r[a] || r[n] || r[i]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a, n) {
          var i = {
            s: ['viensas secunds', "'iensas secunds"],
            ss: [e + ' secunds', e + ' secunds'],
            m: ["'n míut", "'iens míut"],
            mm: [e + ' míuts', e + ' míuts'],
            h: ["'n þora", "'iensa þora"],
            hh: [e + ' þoras', e + ' þoras'],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + ' ziuas', e + ' ziuas'],
            M: ["'n mes", "'iens mes"],
            MM: [e + ' mesen', e + ' mesen'],
            y: ["'n ar", "'iens ar"],
            yy: [e + ' ars', e + ' ars'],
          };
          return n ? i[a][0] : t ? i[a][0] : i[a][1];
        }
        e.defineLocale('tzl', {
          months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split(
            '_',
          ),
          monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
          weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
          weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
          weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM [dallas] YYYY',
            LLL: 'D. MMMM [dallas] YYYY HH.mm',
            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function(e) {
            return "d'o" === e.toLowerCase();
          },
          meridiem: function(e, t, a) {
            return 11 < e ? (a ? "d'o" : "D'O") : a ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: '[oxhi à] LT',
            nextDay: '[demà à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[ieiri à] LT',
            lastWeek: '[sür el] dddd [lasteu à] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'osprei %s',
            past: 'ja%s',
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('tzm', {
          months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
            '_',
          ),
          monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
            '_',
          ),
          weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past: 'ⵢⴰⵏ %s',
            s: 'ⵉⵎⵉⴽ',
            ss: '%d ⵉⵎⵉⴽ',
            m: 'ⵎⵉⵏⵓⴺ',
            mm: '%d ⵎⵉⵏⵓⴺ',
            h: 'ⵙⴰⵄⴰ',
            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d: 'ⴰⵙⵙ',
            dd: '%d oⵙⵙⴰⵏ',
            M: 'ⴰⵢoⵓⵔ',
            MM: '%d ⵉⵢⵢⵉⵔⵏ',
            y: 'ⴰⵙⴳⴰⵙ',
            yy: '%d ⵉⵙⴳⴰⵙⵏ',
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('tzm-latn', {
          months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
            '_',
          ),
          monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
            '_',
          ),
          weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'dadkh s yan %s',
            past: 'yan %s',
            s: 'imik',
            ss: '%d imik',
            m: 'minuḍ',
            mm: '%d minuḍ',
            h: 'saɛa',
            hh: '%d tassaɛin',
            d: 'ass',
            dd: '%d ossan',
            M: 'ayowr',
            MM: '%d iyyirn',
            y: 'asgas',
            yy: '%d isgasn',
          },
          week: { dow: 6, doy: 12 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('ug-cn', {
          months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_',
          ),
          monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_',
          ),
          weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
          weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              'يېرىم كېچە' === t || 'سەھەر' === t || 'چۈشتىن بۇرۇن' === t
                ? e
                : 'چۈشتىن كېيىن' === t || 'كەچ' === t
                ? e + 12
                : 11 <= e
                ? e
                : e + 12
            );
          },
          meridiem: function(e, t, a) {
            var n = 100 * e + t;
            return n < 600
              ? 'يېرىم كېچە'
              : n < 900
              ? 'سەھەر'
              : n < 1130
              ? 'چۈشتىن بۇرۇن'
              : n < 1230
              ? 'چۈش'
              : n < 1800
              ? 'چۈشتىن كېيىن'
              : 'كەچ';
          },
          calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '-كۈنى';
              case 'w':
              case 'W':
                return e + '-ھەپتە';
              default:
                return e;
            }
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        function t(e, t, a) {
          var n = {
            ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            hh: t ? 'година_години_годин' : 'годину_години_годин',
            dd: 'день_дні_днів',
            MM: 'місяць_місяці_місяців',
            yy: 'рік_роки_років',
          };
          return 'm' === a
            ? t
              ? 'хвилина'
              : 'хвилину'
            : 'h' === a
            ? t
              ? 'година'
              : 'годину'
            : e +
              ' ' +
              (function(e, t) {
                var a = e.split('_');
                return t % 10 == 1 && t % 100 != 11
                  ? a[0]
                  : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100)
                  ? a[1]
                  : a[2];
              })(n[a], +e);
        }
        function a(e) {
          return function() {
            return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
          };
        }
        e.defineLocale('uk', {
          months: {
            format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
              '_',
            ),
            standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
              '_',
            ),
          },
          monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
          weekdays: function(e, t) {
            var a = {
              nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
              accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
              genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_'),
            };
            if (!0 === e) return a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1));
            if (!e) return a.nominative;
            var n = /(\[[ВвУу]\]) ?dddd/.test(t)
              ? 'accusative'
              : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
              ? 'genitive'
              : 'nominative';
            return a[n][e.day()];
          },
          weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
          },
          calendar: {
            sameDay: a('[Сьогодні '),
            nextDay: a('[Завтра '),
            lastDay: a('[Вчора '),
            nextWeek: a('[У] dddd ['),
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return a('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                  return a('[Минулого] dddd [').call(this);
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            ss: t,
            m: t,
            mm: t,
            h: 'годину',
            hh: t,
            d: 'день',
            dd: t,
            M: 'місяць',
            MM: t,
            y: 'рік',
            yy: t,
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function(e) {
            return /^(дня|вечора)$/.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора';
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return e + '-й';
              case 'D':
                return e + '-го';
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        var t = [
            'جنوری',
            'فروری',
            'مارچ',
            'اپریل',
            'مئی',
            'جون',
            'جولائی',
            'اگست',
            'ستمبر',
            'اکتوبر',
            'نومبر',
            'دسمبر',
          ],
          a = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
        e.defineLocale('ur', {
          months: t,
          monthsShort: t,
          weekdays: a,
          weekdaysShort: a,
          weekdaysMin: a,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm',
          },
          meridiemParse: /صبح|شام/,
          isPM: function(e) {
            return 'شام' === e;
          },
          meridiem: function(e, t, a) {
            return e < 12 ? 'صبح' : 'شام';
          },
          calendar: {
            sameDay: '[آج بوقت] LT',
            nextDay: '[کل بوقت] LT',
            nextWeek: 'dddd [بوقت] LT',
            lastDay: '[گذشتہ روز بوقت] LT',
            lastWeek: '[گذشتہ] dddd [بوقت] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s بعد',
            past: '%s قبل',
            s: 'چند سیکنڈ',
            ss: '%d سیکنڈ',
            m: 'ایک منٹ',
            mm: '%d منٹ',
            h: 'ایک گھنٹہ',
            hh: '%d گھنٹے',
            d: 'ایک دن',
            dd: '%d دن',
            M: 'ایک ماہ',
            MM: '%d ماہ',
            y: 'ایک سال',
            yy: '%d سال',
          },
          preparse: function(e) {
            return e.replace(/،/g, ',');
          },
          postformat: function(e) {
            return e.replace(/,/g, '،');
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('uz', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
            '_',
          ),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
          weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
          weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm',
          },
          calendar: {
            sameDay: '[Бугун соат] LT [да]',
            nextDay: '[Эртага] LT [да]',
            nextWeek: 'dddd [куни соат] LT [да]',
            lastDay: '[Кеча соат] LT [да]',
            lastWeek: '[Утган] dddd [куни соат] LT [да]',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'Якин %s ичида',
            past: 'Бир неча %s олдин',
            s: 'фурсат',
            ss: '%d фурсат',
            m: 'бир дакика',
            mm: '%d дакика',
            h: 'бир соат',
            hh: '%d соат',
            d: 'бир кун',
            dd: '%d кун',
            M: 'бир ой',
            MM: '%d ой',
            y: 'бир йил',
            yy: '%d йил',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('uz-latn', {
          months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split(
            '_',
          ),
          monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
          weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
          weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
          weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm',
          },
          calendar: {
            sameDay: '[Bugun soat] LT [da]',
            nextDay: '[Ertaga] LT [da]',
            nextWeek: 'dddd [kuni soat] LT [da]',
            lastDay: '[Kecha soat] LT [da]',
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: 'L',
          },
          relativeTime: {
            future: 'Yaqin %s ichida',
            past: 'Bir necha %s oldin',
            s: 'soniya',
            ss: '%d soniya',
            m: 'bir daqiqa',
            mm: '%d daqiqa',
            h: 'bir soat',
            hh: '%d soat',
            d: 'bir kun',
            dd: '%d kun',
            M: 'bir oy',
            MM: '%d oy',
            y: 'bir yil',
            yy: '%d yil',
          },
          week: { dow: 1, doy: 7 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('vi', {
          months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
            '_',
          ),
          monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
          monthsParseExact: !0,
          weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
          weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function(e) {
            return /^ch$/i.test(e);
          },
          meridiem: function(e, t, a) {
            return e < 12 ? (a ? 'sa' : 'SA') : a ? 'ch' : 'CH';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [năm] YYYY',
            LLL: 'D MMMM [năm] YYYY HH:mm',
            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
            l: 'DD/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s tới',
            past: '%s trước',
            s: 'vài giây',
            ss: '%d giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm',
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function(e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('x-pseudo', {
          months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split(
            '_',
          ),
          monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
          monthsParseExact: !0,
          weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split(
            '_',
          ),
          weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
          weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: 'HH:mm',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[T~ódá~ý át] LT',
            nextDay: '[T~ómó~rró~w át] LT',
            nextWeek: 'dddd [át] LT',
            lastDay: '[Ý~ést~érdá~ý át] LT',
            lastWeek: '[L~ást] dddd [át] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'í~ñ %s',
            past: '%s á~gó',
            s: 'á ~féw ~sécó~ñds',
            ss: '%d s~écóñ~ds',
            m: 'á ~míñ~úté',
            mm: '%d m~íñú~tés',
            h: 'á~ñ hó~úr',
            hh: '%d h~óúrs',
            d: 'á ~dáý',
            dd: '%d d~áýs',
            M: 'á ~móñ~th',
            MM: '%d m~óñt~hs',
            y: 'á ~ýéár',
            yy: '%d ý~éárs',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(e) {
            var t = e % 10,
              a =
                1 == ~~((e % 100) / 10)
                  ? 'th'
                  : 1 == t
                  ? 'st'
                  : 2 == t
                  ? 'nd'
                  : 3 == t
                  ? 'rd'
                  : 'th';
            return e + a;
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('yo', {
          months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
          monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
          weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
          weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
          weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          calendar: {
            sameDay: '[Ònì ni] LT',
            nextDay: '[Ọ̀la ni] LT',
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: '[Àna ni] LT',
            lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'ní %s',
            past: '%s kọjá',
            s: 'ìsẹjú aayá die',
            ss: 'aayá %d',
            m: 'ìsẹjú kan',
            mm: 'ìsẹjú %d',
            h: 'wákati kan',
            hh: 'wákati %d',
            d: 'ọjọ́ kan',
            dd: 'ọjọ́ %d',
            M: 'osù kan',
            MM: 'osù %d',
            y: 'ọdún kan',
            yy: 'ọdún %d',
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: 'ọjọ́ %d',
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-cn', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '下午' === t || '晚上' === t
                ? e + 12
                : 11 <= e
                ? e
                : e + 12
            );
          },
          meridiem: function(e, t, a) {
            var n = 100 * e + t;
            return n < 600
              ? '凌晨'
              : n < 900
              ? '早上'
              : n < 1130
              ? '上午'
              : n < 1230
              ? '中午'
              : n < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '周';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
          },
          week: { dow: 1, doy: 4 },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-hk', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '中午' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            var n = 100 * e + t;
            return n < 600
              ? '凌晨'
              : n < 900
              ? '早上'
              : n < 1130
              ? '上午'
              : n < 1230
              ? '中午'
              : n < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '週';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年',
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      !(function(e) {
        'use strict';
        e.defineLocale('zh-tw', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function(e, t) {
            return (
              12 === e && (e = 0),
              '凌晨' === t || '早上' === t || '上午' === t
                ? e
                : '中午' === t
                ? 11 <= e
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                ? e + 12
                : void 0
            );
          },
          meridiem: function(e, t, a) {
            var n = 100 * e + t;
            return n < 600
              ? '凌晨'
              : n < 900
              ? '早上'
              : n < 1130
              ? '上午'
              : n < 1230
              ? '中午'
              : n < 1800
              ? '下午'
              : '晚上';
          },
          calendar: {
            sameDay: '[今天] LT',
            nextDay: '[明天] LT',
            nextWeek: '[下]dddd LT',
            lastDay: '[昨天] LT',
            lastWeek: '[上]dddd LT',
            sameElse: 'L',
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function(e, t) {
            switch (t) {
              case 'd':
              case 'D':
              case 'DDD':
                return e + '日';
              case 'M':
                return e + '月';
              case 'w':
              case 'W':
                return e + '週';
              default:
                return e;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年',
          },
        });
      })(a(337));
    },
    function(e, t, a) {
      /*!
       * Chart.js v2.8.0
       * https://www.chartjs.org
       * (c) 2019 Chart.js Contributors
       * Released under the MIT License
       */
      e.exports = (function(n) {
        'use strict';
        n = n && n.hasOwnProperty('default') ? n.default : n;
        var i = {
          rgb2hsl: s,
          rgb2hsv: t,
          rgb2hwb: a,
          rgb2cmyk: o,
          rgb2keyword: d,
          rgb2xyz: l,
          rgb2lab: u,
          rgb2lch: function(e) {
            return y(u(e));
          },
          hsl2rgb: _,
          hsl2hsv: function(e) {
            var t = e[0],
              a = e[1] / 100,
              n = e[2] / 100;
            return 0 !== n
              ? [t, 100 * ((2 * (a *= (n *= 2) <= 1 ? n : 2 - n)) / (n + a)), 100 * ((n + a) / 2)]
              : [0, 0, 0];
          },
          hsl2hwb: function(e) {
            return a(_(e));
          },
          hsl2cmyk: function(e) {
            return o(_(e));
          },
          hsl2keyword: function(e) {
            return d(_(e));
          },
          hsv2rgb: h,
          hsv2hsl: function(e) {
            var t,
              a,
              n = e[0],
              i = e[1] / 100,
              r = e[2] / 100;
            return (
              (t = i * r),
              [n, 100 * (t = (t /= (a = (2 - i) * r) <= 1 ? a : 2 - a) || 0), 100 * (a /= 2)]
            );
          },
          hsv2hwb: function(e) {
            return a(h(e));
          },
          hsv2cmyk: function(e) {
            return o(h(e));
          },
          hsv2keyword: function(e) {
            return d(h(e));
          },
          hwb2rgb: m,
          hwb2hsl: function(e) {
            return s(m(e));
          },
          hwb2hsv: function(e) {
            return t(m(e));
          },
          hwb2cmyk: function(e) {
            return o(m(e));
          },
          hwb2keyword: function(e) {
            return d(m(e));
          },
          cmyk2rgb: c,
          cmyk2hsl: function(e) {
            return s(c(e));
          },
          cmyk2hsv: function(e) {
            return t(c(e));
          },
          cmyk2hwb: function(e) {
            return a(c(e));
          },
          cmyk2keyword: function(e) {
            return d(c(e));
          },
          keyword2rgb: v,
          keyword2hsl: function(e) {
            return s(v(e));
          },
          keyword2hsv: function(e) {
            return t(v(e));
          },
          keyword2hwb: function(e) {
            return a(v(e));
          },
          keyword2cmyk: function(e) {
            return o(v(e));
          },
          keyword2lab: function(e) {
            return u(v(e));
          },
          keyword2xyz: function(e) {
            return l(v(e));
          },
          xyz2rgb: f,
          xyz2lab: M,
          xyz2lch: function(e) {
            return y(M(e));
          },
          lab2xyz: p,
          lab2rgb: L,
          lab2lch: y,
          lch2lab: Y,
          lch2xyz: function(e) {
            return p(Y(e));
          },
          lch2rgb: function(e) {
            return L(Y(e));
          },
        };
        function s(e) {
          var t,
            a,
            n = e[0] / 255,
            i = e[1] / 255,
            r = e[2] / 255,
            s = Math.min(n, i, r),
            o = Math.max(n, i, r),
            d = o - s;
          return (
            o == s
              ? (t = 0)
              : n == o
              ? (t = (i - r) / d)
              : i == o
              ? (t = 2 + (r - n) / d)
              : r == o && (t = 4 + (n - i) / d),
            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
            (a = (s + o) / 2),
            [t, 100 * (o == s ? 0 : a <= 0.5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
          );
        }
        function t(e) {
          var t,
            a,
            n = e[0],
            i = e[1],
            r = e[2],
            s = Math.min(n, i, r),
            o = Math.max(n, i, r),
            d = o - s;
          return (
            (a = 0 == o ? 0 : ((d / o) * 1e3) / 10),
            o == s
              ? (t = 0)
              : n == o
              ? (t = (i - r) / d)
              : i == o
              ? (t = 2 + (r - n) / d)
              : r == o && (t = 4 + (n - i) / d),
            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
            [t, a, ((o / 255) * 1e3) / 10]
          );
        }
        function a(e) {
          var t = e[0],
            a = e[1],
            n = e[2],
            i = s(e)[0],
            r = (1 / 255) * Math.min(t, Math.min(a, n)),
            n = 1 - (1 / 255) * Math.max(t, Math.max(a, n));
          return [i, 100 * r, 100 * n];
        }
        function o(e) {
          var t,
            a = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255;
          return (
            (t = Math.min(1 - a, 1 - n, 1 - i)),
            [
              100 * ((1 - a - t) / (1 - t) || 0),
              100 * ((1 - n - t) / (1 - t) || 0),
              100 * ((1 - i - t) / (1 - t) || 0),
              100 * t,
            ]
          );
        }
        function d(e) {
          return D[JSON.stringify(e)];
        }
        function l(e) {
          var t = e[0] / 255,
            a = e[1] / 255,
            n = e[2] / 255;
          (t = 0.04045 < t ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
            (a = 0.04045 < a ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92),
            (n = 0.04045 < n ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92);
          var i = 0.4124 * t + 0.3576 * a + 0.1805 * n,
            r = 0.2126 * t + 0.7152 * a + 0.0722 * n,
            s = 0.0193 * t + 0.1192 * a + 0.9505 * n;
          return [100 * i, 100 * r, 100 * s];
        }
        function u(e) {
          var t = l(e),
            a = t[0],
            n = t[1],
            i = t[2];
          return (
            (n /= 100),
            (i /= 108.883),
            (a = 0.008856 < (a /= 95.047) ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
            (n = 0.008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            (i = 0.008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
            [116 * n - 16, 500 * (a - n), 200 * (n - i)]
          );
        }
        function _(e) {
          var t,
            a,
            n,
            i,
            r,
            s = e[0] / 360,
            o = e[1] / 100,
            d = e[2] / 100;
          if (0 == o) return [(r = 255 * d), r, r];
          (t = 2 * d - (a = d < 0.5 ? d * (1 + o) : d + o - d * o)), (i = [0, 0, 0]);
          for (var l = 0; l < 3; l++)
            (n = s + (1 / 3) * -(l - 1)) < 0 && n++,
              1 < n && n--,
              (r =
                6 * n < 1
                  ? t + 6 * (a - t) * n
                  : 2 * n < 1
                  ? a
                  : 3 * n < 2
                  ? t + (a - t) * (2 / 3 - n) * 6
                  : t),
              (i[l] = 255 * r);
          return i;
        }
        function h(e) {
          var t = e[0] / 60,
            a = e[1] / 100,
            n = e[2] / 100,
            i = Math.floor(t) % 6,
            r = t - Math.floor(t),
            s = 255 * n * (1 - a),
            o = 255 * n * (1 - a * r),
            d = 255 * n * (1 - a * (1 - r)),
            n = 255 * n;
          switch (i) {
            case 0:
              return [n, d, s];
            case 1:
              return [o, n, s];
            case 2:
              return [s, n, d];
            case 3:
              return [s, o, n];
            case 4:
              return [d, s, n];
            case 5:
              return [n, s, o];
          }
        }
        function m(e) {
          var t,
            a,
            n,
            i,
            s = e[0] / 360,
            o = e[1] / 100,
            d = e[2] / 100,
            l = o + d;
          switch (
            (1 < l && ((o /= l), (d /= l)),
            (t = Math.floor(6 * s)),
            (n = 6 * s - t),
            0 != (1 & t) && (n = 1 - n),
            (i = o + n * ((a = 1 - d) - o)),
            t)
          ) {
            default:
            case 6:
            case 0:
              (r = a), (g = i), (b = o);
              break;
            case 1:
              (r = i), (g = a), (b = o);
              break;
            case 2:
              (r = o), (g = a), (b = i);
              break;
            case 3:
              (r = o), (g = i), (b = a);
              break;
            case 4:
              (r = i), (g = o), (b = a);
              break;
            case 5:
              (r = a), (g = o), (b = i);
          }
          return [255 * r, 255 * g, 255 * b];
        }
        function c(e) {
          var t,
            a,
            n,
            i = e[0] / 100,
            r = e[1] / 100,
            s = e[2] / 100,
            o = e[3] / 100;
          return (
            (t = 1 - Math.min(1, i * (1 - o) + o)),
            (a = 1 - Math.min(1, r * (1 - o) + o)),
            (n = 1 - Math.min(1, s * (1 - o) + o)),
            [255 * t, 255 * a, 255 * n]
          );
        }
        function f(e) {
          var t,
            a,
            n,
            i = e[0] / 100,
            r = e[1] / 100,
            s = e[2] / 100;
          return (
            (a = -0.9689 * i + 1.8758 * r + 0.0415 * s),
            (n = 0.0557 * i + -0.204 * r + 1.057 * s),
            (t =
              0.0031308 < (t = 3.2406 * i + -1.5372 * r + -0.4986 * s)
                ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
                : (t *= 12.92)),
            (a = 0.0031308 < a ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : (a *= 12.92)),
            (n = 0.0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)),
            (t = Math.min(Math.max(0, t), 1)),
            (a = Math.min(Math.max(0, a), 1)),
            (n = Math.min(Math.max(0, n), 1)),
            [255 * t, 255 * a, 255 * n]
          );
        }
        function M(e) {
          var t = e[0],
            a = e[1],
            n = e[2];
          return (
            (a /= 100),
            (n /= 108.883),
            (t = 0.008856 < (t /= 95.047) ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116),
            (a = 0.008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
            (n = 0.008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            [116 * a - 16, 500 * (t - a), 200 * (a - n)]
          );
        }
        function p(e) {
          var t,
            a,
            n,
            i,
            r = e[0],
            s = e[1],
            o = e[2];
          return (
            (i =
              r <= 8
                ? ((a = (100 * r) / 903.3) / 100) * 7.787 + 16 / 116
                : ((a = 100 * Math.pow((r + 16) / 116, 3)), Math.pow(a / 100, 1 / 3))),
            (t =
              t / 95.047 <= 0.008856
                ? (t = (95.047 * (s / 500 + i - 16 / 116)) / 7.787)
                : 95.047 * Math.pow(s / 500 + i, 3)),
            (n =
              n / 108.883 <= 0.008859
                ? (n = (108.883 * (i - o / 200 - 16 / 116)) / 7.787)
                : 108.883 * Math.pow(i - o / 200, 3)),
            [t, a, n]
          );
        }
        function y(e) {
          var t,
            a,
            n,
            i = e[0],
            r = e[1],
            s = e[2];
          return (
            (t = Math.atan2(s, r)),
            (a = (360 * t) / 2 / Math.PI) < 0 && (a += 360),
            (n = Math.sqrt(r * r + s * s)),
            [i, n, a]
          );
        }
        function L(e) {
          return f(p(e));
        }
        function Y(e) {
          var t,
            a,
            n,
            i = e[0],
            r = e[1],
            s = e[2];
          return (
            (n = (s / 360) * 2 * Math.PI), (t = r * Math.cos(n)), (a = r * Math.sin(n)), [i, t, a]
          );
        }
        function v(e) {
          return k[e];
        }
        var k = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          D = {};
        for (var e in k) D[JSON.stringify(k[e])] = e;
        var w = function() {
          return new P();
        };
        for (var T in i) {
          w[T + 'Raw'] = (function(t) {
            return function(e) {
              return 'number' == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
            };
          })(T);
          var x = /(\w+)2(\w+)/.exec(T),
            S = x[1],
            H = x[2];
          (w[S] = w[S] || {})[H] = w[T] = (function(n) {
            return function(e) {
              'number' == typeof e && (e = Array.prototype.slice.call(arguments));
              var t = i[n](e);
              if ('string' == typeof t || void 0 === t) return t;
              for (var a = 0; a < t.length; a++) t[a] = Math.round(t[a]);
              return t;
            };
          })(T);
        }
        var P = function() {
          this.convs = {};
        };
        (P.prototype.routeSpace = function(e, t) {
          var a = t[0];
          return void 0 === a
            ? this.getValues(e)
            : ('number' == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a));
        }),
          (P.prototype.setValues = function(e, t) {
            return (this.space = e), (this.convs = {}), (this.convs[e] = t), this;
          }),
          (P.prototype.getValues = function(e) {
            var t = this.convs[e];
            if (!t) {
              var a = this.space,
                n = this.convs[a];
              (t = w[a][e](n)), (this.convs[e] = t);
            }
            return t;
          }),
          ['rgb', 'hsl', 'hsv', 'cmyk', 'keyword'].forEach(function(t) {
            P.prototype[t] = function(e) {
              return this.routeSpace(t, arguments);
            };
          });
        var j = w,
          O = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          A = {
            getRgba: W,
            getHsla: F,
            getRgb: function(e) {
              var t = W(e);
              return t && t.slice(0, 3);
            },
            getHsl: function(e) {
              var t = F(e);
              return t && t.slice(0, 3);
            },
            getHwb: C,
            getAlpha: function(e) {
              var t = W(e);
              {
                if (t) return t[3];
                if ((t = F(e))) return t[3];
                if ((t = C(e))) return t[3];
              }
            },
            hexString: function(e, t) {
              t = void 0 !== t && 3 === e.length ? t : e[3];
              return (
                '#' + N(e[0]) + N(e[1]) + N(e[2]) + (0 <= t && t < 1 ? N(Math.round(255 * t)) : '')
              );
            },
            rgbString: function(e, t) {
              if (t < 1 || (e[3] && e[3] < 1)) return I(e, t);
              return 'rgb(' + e[0] + ', ' + e[1] + ', ' + e[2] + ')';
            },
            rgbaString: I,
            percentString: function(e, t) {
              if (t < 1 || (e[3] && e[3] < 1)) return E(e, t);
              var a = Math.round((e[0] / 255) * 100),
                n = Math.round((e[1] / 255) * 100),
                i = Math.round((e[2] / 255) * 100);
              return 'rgb(' + a + '%, ' + n + '%, ' + i + '%)';
            },
            percentaString: E,
            hslString: function(e, t) {
              if (t < 1 || (e[3] && e[3] < 1)) return z(e, t);
              return 'hsl(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%)';
            },
            hslaString: z,
            hwbString: function(e, t) {
              void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
              return (
                'hwb(' +
                e[0] +
                ', ' +
                e[1] +
                '%, ' +
                e[2] +
                '%' +
                (void 0 !== t && 1 !== t ? ', ' + t : '') +
                ')'
              );
            },
            keyword: function(e) {
              return V[e.slice(0, 3)];
            },
          };
        function W(e) {
          if (e) {
            var t = [0, 0, 0],
              a = 1,
              n = e.match(/^#([a-fA-F0-9]{3,4})$/i),
              i = '';
            if (n) {
              (n = n[1]), (i = n[3]);
              for (var r = 0; r < t.length; r++) t[r] = parseInt(n[r] + n[r], 16);
              i && (a = Math.round((parseInt(i + i, 16) / 255) * 100) / 100);
            } else if ((n = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
              (i = n[2]), (n = n[1]);
              for (var r = 0; r < t.length; r++) t[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
              i && (a = Math.round((parseInt(i, 16) / 255) * 100) / 100);
            } else if (
              (n = e.match(
                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              ))
            ) {
              for (var r = 0; r < t.length; r++) t[r] = parseInt(n[r + 1]);
              a = parseFloat(n[4]);
            } else if (
              (n = e.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              ))
            ) {
              for (var r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(n[r + 1]));
              a = parseFloat(n[4]);
            } else if ((n = e.match(/(\w+)/))) {
              if ('transparent' == n[1]) return [0, 0, 0, 0];
              if (!(t = O[n[1]])) return;
            }
            for (var r = 0; r < t.length; r++) t[r] = R(t[r], 0, 255);
            return (a = a || 0 == a ? R(a, 0, 1) : 1), (t[3] = a), t;
          }
        }
        function F(e) {
          if (e) {
            var t = e.match(
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            );
            if (t) {
              var a = parseFloat(t[4]),
                n = R(parseInt(t[1]), 0, 360),
                i = R(parseFloat(t[2]), 0, 100),
                r = R(parseFloat(t[3]), 0, 100),
                s = R(isNaN(a) ? 1 : a, 0, 1);
              return [n, i, r, s];
            }
          }
        }
        function C(e) {
          if (e) {
            var t = e.match(
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            );
            if (t) {
              var a = parseFloat(t[4]),
                n = R(parseInt(t[1]), 0, 360),
                i = R(parseFloat(t[2]), 0, 100),
                r = R(parseFloat(t[3]), 0, 100),
                s = R(isNaN(a) ? 1 : a, 0, 1);
              return [n, i, r, s];
            }
          }
        }
        function I(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            'rgba(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + t + ')'
          );
        }
        function E(e, t) {
          var a = Math.round((e[0] / 255) * 100),
            n = Math.round((e[1] / 255) * 100),
            i = Math.round((e[2] / 255) * 100);
          return 'rgba(' + a + '%, ' + n + '%, ' + i + '%, ' + (t || e[3] || 1) + ')';
        }
        function z(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            'hsla(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%, ' + t + ')'
          );
        }
        function R(e, t, a) {
          return Math.min(Math.max(t, e), a);
        }
        function N(e) {
          var t = e.toString(16).toUpperCase();
          return t.length < 2 ? '0' + t : t;
        }
        var V = {};
        for (var B in O) V[O[B]] = B;
        var J = function(e) {
          return e instanceof J
            ? e
            : this instanceof J
            ? ((this.valid = !1),
              (this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1,
              }),
              void ('string' == typeof e
                ? (t = A.getRgba(e))
                  ? this.setValues('rgb', t)
                  : (t = A.getHsla(e))
                  ? this.setValues('hsl', t)
                  : (t = A.getHwb(e)) && this.setValues('hwb', t)
                : 'object' == typeof e &&
                  (void 0 !== (t = e).r || void 0 !== t.red
                    ? this.setValues('rgb', t)
                    : void 0 !== t.l || void 0 !== t.lightness
                    ? this.setValues('hsl', t)
                    : void 0 !== t.v || void 0 !== t.value
                    ? this.setValues('hsv', t)
                    : void 0 !== t.w || void 0 !== t.whiteness
                    ? this.setValues('hwb', t)
                    : (void 0 === t.c && void 0 === t.cyan) || this.setValues('cmyk', t))))
            : new J(e);
          var t;
        };
        (J.prototype = {
          isValid: function() {
            return this.valid;
          },
          rgb: function() {
            return this.setSpace('rgb', arguments);
          },
          hsl: function() {
            return this.setSpace('hsl', arguments);
          },
          hsv: function() {
            return this.setSpace('hsv', arguments);
          },
          hwb: function() {
            return this.setSpace('hwb', arguments);
          },
          cmyk: function() {
            return this.setSpace('cmyk', arguments);
          },
          rgbArray: function() {
            return this.values.rgb;
          },
          hslArray: function() {
            return this.values.hsl;
          },
          hsvArray: function() {
            return this.values.hsv;
          },
          hwbArray: function() {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb;
          },
          cmykArray: function() {
            return this.values.cmyk;
          },
          rgbaArray: function() {
            var e = this.values;
            return e.rgb.concat([e.alpha]);
          },
          hslaArray: function() {
            var e = this.values;
            return e.hsl.concat([e.alpha]);
          },
          alpha: function(e) {
            return void 0 === e ? this.values.alpha : (this.setValues('alpha', e), this);
          },
          red: function(e) {
            return this.setChannel('rgb', 0, e);
          },
          green: function(e) {
            return this.setChannel('rgb', 1, e);
          },
          blue: function(e) {
            return this.setChannel('rgb', 2, e);
          },
          hue: function(e) {
            return (e = e && ((e %= 360) < 0 ? 360 + e : e)), this.setChannel('hsl', 0, e);
          },
          saturation: function(e) {
            return this.setChannel('hsl', 1, e);
          },
          lightness: function(e) {
            return this.setChannel('hsl', 2, e);
          },
          saturationv: function(e) {
            return this.setChannel('hsv', 1, e);
          },
          whiteness: function(e) {
            return this.setChannel('hwb', 1, e);
          },
          blackness: function(e) {
            return this.setChannel('hwb', 2, e);
          },
          value: function(e) {
            return this.setChannel('hsv', 2, e);
          },
          cyan: function(e) {
            return this.setChannel('cmyk', 0, e);
          },
          magenta: function(e) {
            return this.setChannel('cmyk', 1, e);
          },
          yellow: function(e) {
            return this.setChannel('cmyk', 2, e);
          },
          black: function(e) {
            return this.setChannel('cmyk', 3, e);
          },
          hexString: function() {
            return A.hexString(this.values.rgb);
          },
          rgbString: function() {
            return A.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function() {
            return A.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function() {
            return A.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function() {
            return A.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function() {
            return A.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function() {
            return A.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function() {
            return A.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function() {
            var e = this.values.rgb;
            return (e[0] << 16) | (e[1] << 8) | e[2];
          },
          luminosity: function() {
            for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
              var n = e[a] / 255;
              t[a] = n <= 0.03928 ? n / 12.92 : Math.pow((0.055 + n) / 1.055, 2.4);
            }
            return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
          },
          contrast: function(e) {
            var t = this.luminosity(),
              a = e.luminosity();
            return a < t ? (t + 0.05) / (a + 0.05) : (a + 0.05) / (t + 0.05);
          },
          level: function(e) {
            var t = this.contrast(e);
            return 7.1 <= t ? 'AAA' : 4.5 <= t ? 'AA' : '';
          },
          dark: function() {
            var e = this.values.rgb;
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
          },
          light: function() {
            return !this.dark();
          },
          negate: function() {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues('rgb', e), this;
          },
          lighten: function(e) {
            var t = this.values.hsl;
            return (t[2] += t[2] * e), this.setValues('hsl', t), this;
          },
          darken: function(e) {
            var t = this.values.hsl;
            return (t[2] -= t[2] * e), this.setValues('hsl', t), this;
          },
          saturate: function(e) {
            var t = this.values.hsl;
            return (t[1] += t[1] * e), this.setValues('hsl', t), this;
          },
          desaturate: function(e) {
            var t = this.values.hsl;
            return (t[1] -= t[1] * e), this.setValues('hsl', t), this;
          },
          whiten: function(e) {
            var t = this.values.hwb;
            return (t[1] += t[1] * e), this.setValues('hwb', t), this;
          },
          blacken: function(e) {
            var t = this.values.hwb;
            return (t[2] += t[2] * e), this.setValues('hwb', t), this;
          },
          greyscale: function() {
            var e = this.values.rgb,
              t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
            return this.setValues('rgb', [t, t, t]), this;
          },
          clearer: function(e) {
            var t = this.values.alpha;
            return this.setValues('alpha', t - t * e), this;
          },
          opaquer: function(e) {
            var t = this.values.alpha;
            return this.setValues('alpha', t + t * e), this;
          },
          rotate: function(e) {
            var t = this.values.hsl,
              a = (t[0] + e) % 360;
            return (t[0] = a < 0 ? 360 + a : a), this.setValues('hsl', t), this;
          },
          mix: function(e, t) {
            var a = e,
              n = void 0 === t ? 0.5 : t,
              i = 2 * n - 1,
              r = this.alpha() - a.alpha(),
              s = (1 + (i * r == -1 ? i : (i + r) / (1 + i * r))) / 2,
              o = 1 - s;
            return this.rgb(
              s * this.red() + o * a.red(),
              s * this.green() + o * a.green(),
              s * this.blue() + o * a.blue(),
            ).alpha(this.alpha() * n + a.alpha() * (1 - n));
          },
          toJSON: function() {
            return this.rgb();
          },
          clone: function() {
            var e,
              t,
              a = new J(),
              n = this.values,
              i = a.values;
            for (var r in n)
              n.hasOwnProperty(r) &&
                ((e = n[r]),
                '[object Array]' === (t = {}.toString.call(e))
                  ? (i[r] = e.slice(0))
                  : '[object Number]' === t
                  ? (i[r] = e)
                  : console.error('unexpected color value:', e));
            return a;
          },
        }),
          (J.prototype.spaces = {
            rgb: ['red', 'green', 'blue'],
            hsl: ['hue', 'saturation', 'lightness'],
            hsv: ['hue', 'saturation', 'value'],
            hwb: ['hue', 'whiteness', 'blackness'],
            cmyk: ['cyan', 'magenta', 'yellow', 'black'],
          }),
          (J.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (J.prototype.getValues = function(e) {
            for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n];
            return 1 !== t.alpha && (a.a = t.alpha), a;
          }),
          (J.prototype.setValues = function(e, t) {
            var a,
              n,
              i = this.values,
              r = this.spaces,
              s = this.maxes,
              o = 1;
            if (((this.valid = !0), 'alpha' === e)) o = t;
            else if (t.length) (i[e] = t.slice(0, e.length)), (o = t[e.length]);
            else if (void 0 !== t[e.charAt(0)]) {
              for (a = 0; a < e.length; a++) i[e][a] = t[e.charAt(a)];
              o = t.a;
            } else if (void 0 !== t[r[e][0]]) {
              var d = r[e];
              for (a = 0; a < e.length; a++) i[e][a] = t[d[a]];
              o = t.alpha;
            }
            if (((i.alpha = Math.max(0, Math.min(1, void 0 === o ? i.alpha : o))), 'alpha' === e))
              return !1;
            for (a = 0; a < e.length; a++)
              (n = Math.max(0, Math.min(s[e][a], i[e][a]))), (i[e][a] = Math.round(n));
            for (var l in r) l !== e && (i[l] = j[e][l](i[e]));
            return !0;
          }),
          (J.prototype.setSpace = function(e, t) {
            var a = t[0];
            return void 0 === a
              ? this.getValues(e)
              : ('number' == typeof a && (a = Array.prototype.slice.call(t)),
                this.setValues(e, a),
                this);
          }),
          (J.prototype.setChannel = function(e, t, a) {
            var n = this.values[e];
            return void 0 === a ? n[t] : (a === n[t] || ((n[t] = a), this.setValues(e, n)), this);
          }),
          'undefined' != typeof window && (window.Color = J);
        var U = J,
          G = {
            noop: function() {},
            uid: (function() {
              var e = 0;
              return function() {
                return e++;
              };
            })(),
            isNullOrUndef: function(e) {
              return null == e;
            },
            isArray: function(e) {
              if (Array.isArray && Array.isArray(e)) return !0;
              var t = Object.prototype.toString.call(e);
              return '[object' === t.substr(0, 7) && 'Array]' === t.substr(-6);
            },
            isObject: function(e) {
              return null !== e && '[object Object]' === Object.prototype.toString.call(e);
            },
            isFinite: function(e) {
              return ('number' == typeof e || e instanceof Number) && isFinite(e);
            },
            valueOrDefault: function(e, t) {
              return void 0 === e ? t : e;
            },
            valueAtIndexOrDefault: function(e, t, a) {
              return G.valueOrDefault(G.isArray(e) ? e[t] : e, a);
            },
            callback: function(e, t, a) {
              if (e && 'function' == typeof e.call) return e.apply(a, t);
            },
            each: function(e, t, a, n) {
              var i, r, s;
              if (G.isArray(e))
                if (((r = e.length), n)) for (i = r - 1; 0 <= i; i--) t.call(a, e[i], i);
                else for (i = 0; i < r; i++) t.call(a, e[i], i);
              else if (G.isObject(e))
                for (s = Object.keys(e), r = s.length, i = 0; i < r; i++) t.call(a, e[s[i]], s[i]);
            },
            arrayEquals: function(e, t) {
              var a, n, i, r;
              if (!e || !t || e.length !== t.length) return !1;
              for (a = 0, n = e.length; a < n; ++a)
                if (((i = e[a]), (r = t[a]), i instanceof Array && r instanceof Array)) {
                  if (!G.arrayEquals(i, r)) return !1;
                } else if (i !== r) return !1;
              return !0;
            },
            clone: function(e) {
              if (G.isArray(e)) return e.map(G.clone);
              if (G.isObject(e)) {
                for (var t = {}, a = Object.keys(e), n = a.length, i = 0; i < n; ++i)
                  t[a[i]] = G.clone(e[a[i]]);
                return t;
              }
              return e;
            },
            _merger: function(e, t, a, n) {
              var i = t[e],
                r = a[e];
              G.isObject(i) && G.isObject(r) ? G.merge(i, r, n) : (t[e] = G.clone(r));
            },
            _mergerIf: function(e, t, a) {
              var n = t[e],
                i = a[e];
              G.isObject(n) && G.isObject(i)
                ? G.mergeIf(n, i)
                : t.hasOwnProperty(e) || (t[e] = G.clone(i));
            },
            merge: function(e, t, a) {
              var n,
                i,
                r,
                s,
                o,
                d = G.isArray(t) ? t : [t],
                l = d.length;
              if (!G.isObject(e)) return e;
              for (n = (a = a || {}).merger || G._merger, i = 0; i < l; ++i)
                if (((t = d[i]), G.isObject(t)))
                  for (r = Object.keys(t), o = 0, s = r.length; o < s; ++o) n(r[o], e, t, a);
              return e;
            },
            mergeIf: function(e, t) {
              return G.merge(e, t, { merger: G._mergerIf });
            },
            extend: function(a) {
              for (
                var e = function(e, t) {
                    a[t] = e;
                  },
                  t = 1,
                  n = arguments.length;
                t < n;
                ++t
              )
                G.each(arguments[t], e);
              return a;
            },
            inherits: function(e) {
              var t = this,
                a =
                  e && e.hasOwnProperty('constructor')
                    ? e.constructor
                    : function() {
                        return t.apply(this, arguments);
                      },
                n = function() {
                  this.constructor = a;
                };
              return (
                (n.prototype = t.prototype),
                (a.prototype = new n()),
                (a.extend = G.inherits),
                e && G.extend(a.prototype, e),
                (a.__super__ = t.prototype),
                a
              );
            },
          },
          q = G;
        (G.callCallback = G.callback),
          (G.indexOf = function(e, t, a) {
            return Array.prototype.indexOf.call(e, t, a);
          }),
          (G.getValueOrDefault = G.valueOrDefault),
          (G.getValueAtIndexOrDefault = G.valueAtIndexOrDefault);
        var K = {
            linear: function(e) {
              return e;
            },
            easeInQuad: function(e) {
              return e * e;
            },
            easeOutQuad: function(e) {
              return -e * (e - 2);
            },
            easeInOutQuad: function(e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            },
            easeInCubic: function(e) {
              return e * e * e;
            },
            easeOutCubic: function(e) {
              return (e -= 1) * e * e + 1;
            },
            easeInOutCubic: function(e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
            },
            easeInQuart: function(e) {
              return e * e * e * e;
            },
            easeOutQuart: function(e) {
              return -((e -= 1) * e * e * e - 1);
            },
            easeInOutQuart: function(e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
            },
            easeInQuint: function(e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function(e) {
              return (e -= 1) * e * e * e * e + 1;
            },
            easeInOutQuint: function(e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            },
            easeInSine: function(e) {
              return 1 - Math.cos(e * (Math.PI / 2));
            },
            easeOutSine: function(e) {
              return Math.sin(e * (Math.PI / 2));
            },
            easeInOutSine: function(e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            },
            easeInExpo: function(e) {
              return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
            },
            easeOutExpo: function(e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            },
            easeInOutExpo: function(e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (e - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --e));
            },
            easeInCirc: function(e) {
              return 1 <= e ? e : -(Math.sqrt(1 - e * e) - 1);
            },
            easeOutCirc: function(e) {
              return Math.sqrt(1 - (e -= 1) * e);
            },
            easeInOutCirc: function(e) {
              return (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
            easeInElastic: function(e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : ((a = a || 0.3),
                  (t = n < 1 ? ((n = 1), a / 4) : (a / (2 * Math.PI)) * Math.asin(1 / n)),
                  -n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / a));
            },
            easeOutElastic: function(e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : ((a = a || 0.3),
                  (t = n < 1 ? ((n = 1), a / 4) : (a / (2 * Math.PI)) * Math.asin(1 / n)),
                  n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / a) + 1);
            },
            easeInOutElastic: function(e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e
                ? 0
                : 2 == (e /= 0.5)
                ? 1
                : ((a = a || 0.45),
                  (t = n < 1 ? ((n = 1), a / 4) : (a / (2 * Math.PI)) * Math.asin(1 / n)),
                  e < 1
                    ? n *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin(((e - t) * (2 * Math.PI)) / a) *
                      -0.5
                    : n *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / a) *
                        0.5 +
                      1);
            },
            easeInBack: function(e) {
              return e * e * (2.70158 * e - 1.70158);
            },
            easeOutBack: function(e) {
              return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
            },
            easeInOutBack: function(e) {
              var t = 1.70158;
              return (e /= 0.5) < 1
                ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
            },
            easeInBounce: function(e) {
              return 1 - K.easeOutBounce(1 - e);
            },
            easeOutBounce: function(e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            },
            easeInOutBounce: function(e) {
              return e < 0.5 ? 0.5 * K.easeInBounce(2 * e) : 0.5 * K.easeOutBounce(2 * e - 1) + 0.5;
            },
          },
          Z = { effects: K };
        q.easingEffects = K;
        var $ = Math.PI,
          X = $ / 180,
          Q = 2 * $,
          ee = $ / 2,
          te = $ / 4,
          ae = (2 * $) / 3,
          ne = {
            clear: function(e) {
              e.ctx.clearRect(0, 0, e.width, e.height);
            },
            roundedRect: function(e, t, a, n, i, r) {
              if (r) {
                var s = Math.min(r, i / 2, n / 2),
                  o = t + s,
                  d = a + s,
                  l = t + n - s,
                  u = a + i - s;
                e.moveTo(t, d),
                  o < l && d < u
                    ? (e.arc(o, d, s, -$, -ee),
                      e.arc(l, d, s, -ee, 0),
                      e.arc(l, u, s, 0, ee),
                      e.arc(o, u, s, ee, $))
                    : o < l
                    ? (e.moveTo(o, a), e.arc(l, d, s, -ee, ee), e.arc(o, d, s, ee, $ + ee))
                    : d < u
                    ? (e.arc(o, d, s, -$, 0), e.arc(o, u, s, 0, $))
                    : e.arc(o, d, s, -$, $),
                  e.closePath(),
                  e.moveTo(t, a);
              } else e.rect(t, a, n, i);
            },
            drawPoint: function(e, t, a, n, i, r) {
              var s,
                o,
                d,
                l,
                u,
                _ = (r || 0) * X;
              if (
                !t ||
                'object' != typeof t ||
                ('[object HTMLImageElement]' !== (s = t.toString()) &&
                  '[object HTMLCanvasElement]' !== s)
              ) {
                if (!(isNaN(a) || a <= 0)) {
                  switch ((e.beginPath(), t)) {
                    default:
                      e.arc(n, i, a, 0, Q), e.closePath();
                      break;
                    case 'triangle':
                      e.moveTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        (_ += ae),
                        e.lineTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        (_ += ae),
                        e.lineTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        e.closePath();
                      break;
                    case 'rectRounded':
                      (l = a - (u = 0.516 * a)),
                        (o = Math.cos(_ + te) * l),
                        (d = Math.sin(_ + te) * l),
                        e.arc(n - o, i - d, u, _ - $, _ - ee),
                        e.arc(n + d, i - o, u, _ - ee, _),
                        e.arc(n + o, i + d, u, _, _ + ee),
                        e.arc(n - d, i + o, u, _ + ee, _ + $),
                        e.closePath();
                      break;
                    case 'rect':
                      if (!r) {
                        (l = Math.SQRT1_2 * a), e.rect(n - l, i - l, 2 * l, 2 * l);
                        break;
                      }
                      _ += te;
                    case 'rectRot':
                      (o = Math.cos(_) * a),
                        (d = Math.sin(_) * a),
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + d, i - o),
                        e.lineTo(n + o, i + d),
                        e.lineTo(n - d, i + o),
                        e.closePath();
                      break;
                    case 'crossRot':
                      _ += te;
                    case 'cross':
                      (o = Math.cos(_) * a),
                        (d = Math.sin(_) * a),
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o);
                      break;
                    case 'star':
                      (o = Math.cos(_) * a),
                        (d = Math.sin(_) * a),
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o),
                        (_ += te),
                        (o = Math.cos(_) * a),
                        (d = Math.sin(_) * a),
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o);
                      break;
                    case 'line':
                      (o = Math.cos(_) * a),
                        (d = Math.sin(_) * a),
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d);
                      break;
                    case 'dash':
                      e.moveTo(n, i), e.lineTo(n + Math.cos(_) * a, i + Math.sin(_) * a);
                  }
                  e.fill(), e.stroke();
                }
              } else e.drawImage(t, n - t.width / 2, i - t.height / 2, t.width, t.height);
            },
            _isPointInArea: function(e, t) {
              return (
                e.x > t.left - 1e-6 &&
                e.x < t.right + 1e-6 &&
                e.y > t.top - 1e-6 &&
                e.y < t.bottom + 1e-6
              );
            },
            clipArea: function(e, t) {
              e.save(),
                e.beginPath(),
                e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
                e.clip();
            },
            unclipArea: function(e) {
              e.restore();
            },
            lineTo: function(e, t, a, n) {
              var i = a.steppedLine;
              if (i) {
                if ('middle' === i) {
                  var r = (t.x + a.x) / 2;
                  e.lineTo(r, n ? a.y : t.y), e.lineTo(r, n ? t.y : a.y);
                } else
                  ('after' === i && !n) || ('after' !== i && n)
                    ? e.lineTo(t.x, a.y)
                    : e.lineTo(a.x, t.y);
                e.lineTo(a.x, a.y);
              } else
                a.tension
                  ? e.bezierCurveTo(
                      n ? t.controlPointPreviousX : t.controlPointNextX,
                      n ? t.controlPointPreviousY : t.controlPointNextY,
                      n ? a.controlPointNextX : a.controlPointPreviousX,
                      n ? a.controlPointNextY : a.controlPointPreviousY,
                      a.x,
                      a.y,
                    )
                  : e.lineTo(a.x, a.y);
            },
          },
          ie = ne;
        (q.clear = ne.clear),
          (q.drawRoundedRectangle = function(e) {
            e.beginPath(), ne.roundedRect.apply(ne, arguments);
          });
        var re = {
          _set: function(e, t) {
            return q.merge(this[e] || (this[e] = {}), t);
          },
        };
        re._set('global', {
          defaultColor: 'rgba(0,0,0,0.1)',
          defaultFontColor: '#666',
          defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: 'normal',
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var se = re,
          oe = q.valueOrDefault;
        var de = {
            toLineHeight: function(e, t) {
              var a = ('' + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!a || 'normal' === a[1]) return 1.2 * t;
              switch (((e = +a[2]), a[3])) {
                case 'px':
                  return e;
                case '%':
                  e /= 100;
              }
              return t * e;
            },
            toPadding: function(e) {
              var t, a, n, i;
              return (
                q.isObject(e)
                  ? ((t = +e.top || 0),
                    (a = +e.right || 0),
                    (n = +e.bottom || 0),
                    (i = +e.left || 0))
                  : (t = a = n = i = +e || 0),
                { top: t, right: a, bottom: n, left: i, height: t + n, width: i + a }
              );
            },
            _parseFont: function(e) {
              var t = se.global,
                a = oe(e.fontSize, t.defaultFontSize),
                n = {
                  family: oe(e.fontFamily, t.defaultFontFamily),
                  lineHeight: q.options.toLineHeight(oe(e.lineHeight, t.defaultLineHeight), a),
                  size: a,
                  style: oe(e.fontStyle, t.defaultFontStyle),
                  weight: null,
                  string: '',
                };
              return (
                (n.string = (function(e) {
                  if (!e || q.isNullOrUndef(e.size) || q.isNullOrUndef(e.family)) return null;
                  return (
                    (e.style ? e.style + ' ' : '') +
                    (e.weight ? e.weight + ' ' : '') +
                    e.size +
                    'px ' +
                    e.family
                  );
                })(n)),
                n
              );
            },
            resolve: function(e, t, a) {
              var n, i, r;
              for (n = 0, i = e.length; n < i; ++n)
                if (
                  void 0 !== (r = e[n]) &&
                  (void 0 !== t && 'function' == typeof r && (r = r(t)),
                  void 0 !== a && q.isArray(r) && (r = r[a]),
                  void 0 !== r)
                )
                  return r;
            },
          },
          le = q,
          ue = Z,
          _e = ie,
          he = de;
        (le.easing = ue), (le.canvas = _e), (le.options = he);
        var me = function(e) {
          le.extend(this, e), this.initialize.apply(this, arguments);
        };
        le.extend(me.prototype, {
          initialize: function() {
            this.hidden = !1;
          },
          pivot: function() {
            return this._view || (this._view = le.clone(this._model)), (this._start = {}), this;
          },
          transition: function(e) {
            var t = this._model,
              a = this._start,
              n = this._view;
            return (
              t && 1 !== e
                ? ((n = n || (this._view = {})),
                  (function(e, t, a, n) {
                    var i,
                      r,
                      s,
                      o,
                      d,
                      l,
                      u,
                      _,
                      h,
                      m = Object.keys(a);
                    for (i = 0, r = m.length; i < r; ++i)
                      if (
                        ((s = m[i]),
                        (l = a[s]),
                        t.hasOwnProperty(s) || (t[s] = l),
                        (o = t[s]) !== l && '_' !== s[0])
                      ) {
                        if (
                          (e.hasOwnProperty(s) || (e[s] = o),
                          (d = e[s]),
                          (u = typeof l) == typeof d)
                        )
                          if ('string' == u) {
                            if ((_ = U(d)).valid && (h = U(l)).valid) {
                              t[s] = h.mix(_, n).rgbString();
                              continue;
                            }
                          } else if (le.isFinite(d) && le.isFinite(l)) {
                            t[s] = d + (l - d) * n;
                            continue;
                          }
                        t[s] = l;
                      }
                  })((a = a || (this._start = {})), n, t, e))
                : ((this._view = t), (this._start = null)),
              this
            );
          },
          tooltipPosition: function() {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function() {
            return le.isNumber(this._model.x) && le.isNumber(this._model.y);
          },
        }),
          (me.extend = le.inherits);
        var ce = me,
          fe = ce.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: '',
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          Me = fe;
        Object.defineProperty(fe.prototype, 'animationObject', {
          get: function() {
            return this;
          },
        }),
          Object.defineProperty(fe.prototype, 'chartInstance', {
            get: function() {
              return this.chart;
            },
            set: function(e) {
              this.chart = e;
            },
          }),
          se._set('global', {
            animation: {
              duration: 1e3,
              easing: 'easeOutQuart',
              onProgress: le.noop,
              onComplete: le.noop,
            },
          });
        var pe = {
            animations: [],
            request: null,
            addAnimation: function(e, t, a, n) {
              var i,
                r,
                s = this.animations;
              for (
                t.chart = e,
                  t.startTime = Date.now(),
                  t.duration = a,
                  n || (e.animating = !0),
                  i = 0,
                  r = s.length;
                i < r;
                ++i
              )
                if (s[i].chart === e) return void (s[i] = t);
              s.push(t), 1 === s.length && this.requestAnimationFrame();
            },
            cancelAnimation: function(t) {
              var e = le.findIndex(this.animations, function(e) {
                return e.chart === t;
              });
              -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            requestAnimationFrame: function() {
              var e = this;
              null === e.request &&
                (e.request = le.requestAnimFrame.call(window, function() {
                  (e.request = null), e.startDigest();
                }));
            },
            startDigest: function() {
              this.advance(), 0 < this.animations.length && this.requestAnimationFrame();
            },
            advance: function() {
              for (var e, t, a, n, i = this.animations, r = 0; r < i.length; )
                (e = i[r]),
                  (t = e.chart),
                  (a = e.numSteps),
                  (n = Math.floor(((Date.now() - e.startTime) / e.duration) * a) + 1),
                  (e.currentStep = Math.min(n, a)),
                  le.callback(e.render, [t, e], t),
                  le.callback(e.onAnimationProgress, [e], t),
                  e.currentStep >= a
                    ? (le.callback(e.onAnimationComplete, [e], t),
                      (t.animating = !1),
                      i.splice(r, 1))
                    : ++r;
            },
          },
          ye = le.options.resolve,
          ge = ['push', 'pop', 'shift', 'splice', 'unshift'];
        function Le(t, e) {
          var a = t._chartjs;
          if (a) {
            var n = a.listeners,
              i = n.indexOf(e);
            -1 !== i && n.splice(i, 1),
              0 < n.length ||
                (ge.forEach(function(e) {
                  delete t[e];
                }),
                delete t._chartjs);
          }
        }
        var Ye = function(e, t) {
          this.initialize(e, t);
        };
        le.extend(Ye.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function(e, t) {
            (this.chart = e), (this.index = t), this.linkScales(), this.addElements();
          },
          updateIndex: function(e) {
            this.index = e;
          },
          linkScales: function() {
            var e = this.getMeta(),
              t = this.getDataset();
            (null !== e.xAxisID && e.xAxisID in this.chart.scales) ||
              (e.xAxisID = t.xAxisID || this.chart.options.scales.xAxes[0].id),
              (null !== e.yAxisID && e.yAxisID in this.chart.scales) ||
                (e.yAxisID = t.yAxisID || this.chart.options.scales.yAxes[0].id);
          },
          getDataset: function() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function(e) {
            return this.chart.scales[e];
          },
          _getValueScaleId: function() {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function() {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function() {
            this.update(!0);
          },
          destroy: function() {
            this._data && Le(this._data, this);
          },
          createMetaDataset: function() {
            var e = this.datasetElementType;
            return e && new e({ _chart: this.chart, _datasetIndex: this.index });
          },
          createMetaData: function(e) {
            var t = this.dataElementType;
            return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e });
          },
          addElements: function() {
            var e,
              t,
              a = this.getMeta(),
              n = this.getDataset().data || [],
              i = a.data;
            for (e = 0, t = n.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
            a.dataset = a.dataset || this.createMetaDataset();
          },
          addElementAndReset: function(e) {
            var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
          },
          buildOrUpdateElements: function() {
            var e = this.getDataset(),
              t = e.data || (e.data = []);
            this._data !== t &&
              (this._data && Le(this._data, this),
              t &&
                Object.isExtensible(t) &&
                (function(i, e) {
                  if (i._chartjs) return i._chartjs.listeners.push(e);
                  Object.defineProperty(i, '_chartjs', {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [e] },
                  }),
                    ge.forEach(function(e) {
                      var a = 'onData' + e.charAt(0).toUpperCase() + e.slice(1),
                        n = i[e];
                      Object.defineProperty(i, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                          var t = Array.prototype.slice.call(arguments),
                            e = n.apply(this, t);
                          return (
                            le.each(i._chartjs.listeners, function(e) {
                              'function' == typeof e[a] && e[a].apply(e, t);
                            }),
                            e
                          );
                        },
                      });
                    });
                })(t, this),
              (this._data = t)),
              this.resyncElements();
          },
          update: le.noop,
          transition: function(e) {
            for (var t = this.getMeta(), a = t.data || [], n = a.length, i = 0; i < n; ++i)
              a[i].transition(e);
            t.dataset && t.dataset.transition(e);
          },
          draw: function() {
            var e = this.getMeta(),
              t = e.data || [],
              a = t.length,
              n = 0;
            for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw();
          },
          removeHoverStyle: function(e) {
            le.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle;
          },
          setHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex],
              a = e._index,
              n = e.custom || {},
              i = e._model,
              r = le.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: i.backgroundColor,
              borderColor: i.borderColor,
              borderWidth: i.borderWidth,
            }),
              (i.backgroundColor = ye(
                [n.hoverBackgroundColor, t.hoverBackgroundColor, r(i.backgroundColor)],
                void 0,
                a,
              )),
              (i.borderColor = ye(
                [n.hoverBorderColor, t.hoverBorderColor, r(i.borderColor)],
                void 0,
                a,
              )),
              (i.borderWidth = ye(
                [n.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth],
                void 0,
                a,
              ));
          },
          resyncElements: function() {
            var e = this.getMeta(),
              t = this.getDataset().data,
              a = e.data.length,
              n = t.length;
            n < a ? e.data.splice(n, a - n) : a < n && this.insertElements(a, n - a);
          },
          insertElements: function(e, t) {
            for (var a = 0; a < t; ++a) this.addElementAndReset(e + a);
          },
          onDataPush: function() {
            var e = arguments.length;
            this.insertElements(this.getDataset().data.length - e, e);
          },
          onDataPop: function() {
            this.getMeta().data.pop();
          },
          onDataShift: function() {
            this.getMeta().data.shift();
          },
          onDataSplice: function(e, t) {
            this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2);
          },
          onDataUnshift: function() {
            this.insertElements(0, arguments.length);
          },
        }),
          (Ye.extend = le.inherits);
        var ve = Ye;
        se._set('global', {
          elements: {
            arc: {
              backgroundColor: se.global.defaultColor,
              borderColor: '#fff',
              borderWidth: 2,
              borderAlign: 'center',
            },
          },
        });
        var ke = ce.extend({
            inLabelRange: function(e) {
              var t = this._view;
              return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2);
            },
            inRange: function(e, t) {
              var a = this._view;
              if (a) {
                for (
                  var n = le.getAngleFromPoint(a, { x: e, y: t }),
                    i = n.angle,
                    r = n.distance,
                    s = a.startAngle,
                    o = a.endAngle;
                  o < s;

                )
                  o += 2 * Math.PI;
                for (; o < i; ) i -= 2 * Math.PI;
                for (; i < s; ) i += 2 * Math.PI;
                var d = s <= i && i <= o,
                  l = r >= a.innerRadius && r <= a.outerRadius;
                return d && l;
              }
              return !1;
            },
            getCenterPoint: function() {
              var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                a = (e.innerRadius + e.outerRadius) / 2;
              return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a };
            },
            getArea: function() {
              var e = this._view;
              return (
                Math.PI *
                ((e.endAngle - e.startAngle) / (2 * Math.PI)) *
                (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
              );
            },
            tooltipPosition: function() {
              var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
              return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a };
            },
            draw: function() {
              var e,
                t = this._chart.ctx,
                a = this._view,
                n = a.startAngle,
                i = a.endAngle,
                r = 'inner' === a.borderAlign ? 0.33 : 0;
              t.save(),
                t.beginPath(),
                t.arc(a.x, a.y, Math.max(a.outerRadius - r, 0), n, i),
                t.arc(a.x, a.y, a.innerRadius, i, n, !0),
                t.closePath(),
                (t.fillStyle = a.backgroundColor),
                t.fill(),
                a.borderWidth &&
                  ('inner' === a.borderAlign
                    ? (t.beginPath(),
                      (e = r / a.outerRadius),
                      t.arc(a.x, a.y, a.outerRadius, n - e, i + e),
                      a.innerRadius > r
                        ? ((e = r / a.innerRadius),
                          t.arc(a.x, a.y, a.innerRadius - r, i + e, n - e, !0))
                        : t.arc(a.x, a.y, r, i + Math.PI / 2, n - Math.PI / 2),
                      t.closePath(),
                      t.clip(),
                      t.beginPath(),
                      t.arc(a.x, a.y, a.outerRadius, n, i),
                      t.arc(a.x, a.y, a.innerRadius, i, n, !0),
                      t.closePath(),
                      (t.lineWidth = 2 * a.borderWidth),
                      (t.lineJoin = 'round'))
                    : ((t.lineWidth = a.borderWidth), (t.lineJoin = 'bevel')),
                  (t.strokeStyle = a.borderColor),
                  t.stroke()),
                t.restore();
            },
          }),
          be = le.valueOrDefault,
          De = se.global.defaultColor;
        se._set('global', {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: De,
              borderWidth: 3,
              borderColor: De,
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'miter',
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var we = ce.extend({
            draw: function() {
              var e,
                t,
                a,
                n,
                i = this._view,
                r = this._chart.ctx,
                s = i.spanGaps,
                o = this._children.slice(),
                d = se.global,
                l = d.elements.line,
                u = -1;
              for (
                this._loop && o.length && o.push(o[0]),
                  r.save(),
                  r.lineCap = i.borderCapStyle || l.borderCapStyle,
                  r.setLineDash && r.setLineDash(i.borderDash || l.borderDash),
                  r.lineDashOffset = be(i.borderDashOffset, l.borderDashOffset),
                  r.lineJoin = i.borderJoinStyle || l.borderJoinStyle,
                  r.lineWidth = be(i.borderWidth, l.borderWidth),
                  r.strokeStyle = i.borderColor || d.defaultColor,
                  r.beginPath(),
                  u = -1,
                  e = 0;
                e < o.length;
                ++e
              )
                (t = o[e]),
                  (a = le.previousItem(o, e)),
                  (n = t._view),
                  0 === e
                    ? n.skip || (r.moveTo(n.x, n.y), (u = e))
                    : ((a = -1 === u ? a : o[u]),
                      n.skip ||
                        ((u !== e - 1 && !s) || -1 === u
                          ? r.moveTo(n.x, n.y)
                          : le.canvas.lineTo(r, a._view, t._view),
                        (u = e)));
              r.stroke(), r.restore();
            },
          }),
          Te = le.valueOrDefault,
          xe = se.global.defaultColor;
        function Se(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
        }
        se._set('global', {
          elements: {
            point: {
              radius: 3,
              pointStyle: 'circle',
              backgroundColor: xe,
              borderColor: xe,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var He = ce.extend({
            inRange: function(e, t) {
              var a = this._view;
              return (
                !!a &&
                Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
              );
            },
            inLabelRange: Se,
            inXRange: Se,
            inYRange: function(e) {
              var t = this._view;
              return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
            },
            getCenterPoint: function() {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
            getArea: function() {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function() {
              var e = this._view;
              return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
            },
            draw: function(e) {
              var t = this._view,
                a = this._chart.ctx,
                n = t.pointStyle,
                i = t.rotation,
                r = t.radius,
                s = t.x,
                o = t.y,
                d = se.global,
                l = d.defaultColor;
              t.skip ||
                (void 0 !== e && !le.canvas._isPointInArea(t, e)) ||
                ((a.strokeStyle = t.borderColor || l),
                (a.lineWidth = Te(t.borderWidth, d.elements.point.borderWidth)),
                (a.fillStyle = t.backgroundColor || l),
                le.canvas.drawPoint(a, n, r, s, o, i));
            },
          }),
          Pe = se.global.defaultColor;
        function je(e) {
          return e && void 0 !== e.width;
        }
        function Oe(e) {
          var t, a, n, i, r;
          return (
            (i = je(e)
              ? ((r = e.width / 2),
                (t = e.x - r),
                (a = e.x + r),
                (n = Math.min(e.y, e.base)),
                Math.max(e.y, e.base))
              : ((r = e.height / 2),
                (t = Math.min(e.x, e.base)),
                (a = Math.max(e.x, e.base)),
                (n = e.y - r),
                e.y + r)),
            { left: t, top: n, right: a, bottom: i }
          );
        }
        function Ae(e, t, a) {
          return e === t ? a : e === a ? t : e;
        }
        function We(e, t, a) {
          var n,
            i,
            r,
            s,
            o = e.borderWidth,
            d = (function(e) {
              var t = e.borderSkipped,
                a = {};
              if (!t) return a;
              e.horizontal
                ? e.base > e.x && (t = Ae(t, 'left', 'right'))
                : e.base < e.y && (t = Ae(t, 'bottom', 'top'));
              return (a[t] = !0), a;
            })(e);
          return (
            le.isObject(o)
              ? ((n = +o.top || 0), (i = +o.right || 0), (r = +o.bottom || 0), (s = +o.left || 0))
              : (n = i = r = s = +o || 0),
            {
              t: d.top || n < 0 ? 0 : a < n ? a : n,
              r: d.right || i < 0 ? 0 : t < i ? t : i,
              b: d.bottom || r < 0 ? 0 : a < r ? a : r,
              l: d.left || s < 0 ? 0 : t < s ? t : s,
            }
          );
        }
        function Fe(e, t, a) {
          var n = null === t,
            i = null === a,
            r = !(!e || (n && i)) && Oe(e);
          return r && (n || (t >= r.left && t <= r.right)) && (i || (a >= r.top && a <= r.bottom));
        }
        se._set('global', {
          elements: {
            rectangle: {
              backgroundColor: Pe,
              borderColor: Pe,
              borderSkipped: 'bottom',
              borderWidth: 0,
            },
          },
        });
        var Ce = ce.extend({
            draw: function() {
              var e = this._chart.ctx,
                t = this._view,
                a = (function(e) {
                  var t = Oe(e),
                    a = t.right - t.left,
                    n = t.bottom - t.top,
                    i = We(e, a / 2, n / 2);
                  return {
                    outer: { x: t.left, y: t.top, w: a, h: n },
                    inner: { x: t.left + i.l, y: t.top + i.t, w: a - i.l - i.r, h: n - i.t - i.b },
                  };
                })(t),
                n = a.outer,
                i = a.inner;
              (e.fillStyle = t.backgroundColor),
                e.fillRect(n.x, n.y, n.w, n.h),
                (n.w === i.w && n.h === i.h) ||
                  (e.save(),
                  e.beginPath(),
                  e.rect(n.x, n.y, n.w, n.h),
                  e.clip(),
                  (e.fillStyle = t.borderColor),
                  e.rect(i.x, i.y, i.w, i.h),
                  e.fill('evenodd'),
                  e.restore());
            },
            height: function() {
              var e = this._view;
              return e.base - e.y;
            },
            inRange: function(e, t) {
              return Fe(this._view, e, t);
            },
            inLabelRange: function(e, t) {
              var a = this._view;
              return je(a) ? Fe(a, e, null) : Fe(a, null, t);
            },
            inXRange: function(e) {
              return Fe(this._view, e, null);
            },
            inYRange: function(e) {
              return Fe(this._view, null, e);
            },
            getCenterPoint: function() {
              var e,
                t,
                a = this._view;
              return (
                (t = je(a) ? ((e = a.x), (a.y + a.base) / 2) : ((e = (a.x + a.base) / 2), a.y)),
                { x: e, y: t }
              );
            },
            getArea: function() {
              var e = this._view;
              return je(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base);
            },
            tooltipPosition: function() {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
          }),
          Ie = {},
          Ee = ke,
          ze = we,
          Re = He,
          Ne = Ce;
        (Ie.Arc = Ee), (Ie.Line = ze), (Ie.Point = Re), (Ie.Rectangle = Ne);
        var Ve = le.options.resolve;
        se._set('bar', {
          hover: { mode: 'label' },
          scales: {
            xAxes: [
              {
                type: 'category',
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: 'linear' }],
          },
        });
        var Be = ve.extend({
            dataElementType: Ie.Rectangle,
            initialize: function() {
              var e;
              ve.prototype.initialize.apply(this, arguments),
                ((e = this.getMeta()).stack = this.getDataset().stack),
                (e.bar = !0);
            },
            update: function(e) {
              var t,
                a,
                n = this.getMeta().data;
              for (this._ruler = this.getRuler(), t = 0, a = n.length; t < a; ++t)
                this.updateElement(n[t], t, e);
            },
            updateElement: function(e, t, a) {
              var n = this.getMeta(),
                i = this.getDataset(),
                r = this._resolveElementOptions(e, t);
              (e._xScale = this.getScaleForId(n.xAxisID)),
                (e._yScale = this.getScaleForId(n.yAxisID)),
                (e._datasetIndex = this.index),
                (e._index = t),
                (e._model = {
                  backgroundColor: r.backgroundColor,
                  borderColor: r.borderColor,
                  borderSkipped: r.borderSkipped,
                  borderWidth: r.borderWidth,
                  datasetLabel: i.label,
                  label: this.chart.data.labels[t],
                }),
                this._updateElementGeometry(e, t, a),
                e.pivot();
            },
            _updateElementGeometry: function(e, t, a) {
              var n = e._model,
                i = this._getValueScale(),
                r = i.getBasePixel(),
                s = i.isHorizontal(),
                o = this._ruler || this.getRuler(),
                d = this.calculateBarValuePixels(this.index, t),
                l = this.calculateBarIndexPixels(this.index, t, o);
              (n.horizontal = s),
                (n.base = a ? r : d.base),
                (n.x = s ? (a ? r : d.head) : l.center),
                (n.y = s ? l.center : a ? r : d.head),
                (n.height = s ? l.size : void 0),
                (n.width = s ? void 0 : l.size);
            },
            _getStacks: function(e) {
              var t,
                a,
                n = this.chart,
                i = this._getIndexScale(),
                r = i.options.stacked,
                s = void 0 === e ? n.data.datasets.length : e + 1,
                o = [];
              for (t = 0; t < s; ++t)
                (a = n.getDatasetMeta(t)).bar &&
                  n.isDatasetVisible(t) &&
                  (!1 === r ||
                    (!0 === r && -1 === o.indexOf(a.stack)) ||
                    (void 0 === r && (void 0 === a.stack || -1 === o.indexOf(a.stack)))) &&
                  o.push(a.stack);
              return o;
            },
            getStackCount: function() {
              return this._getStacks().length;
            },
            getStackIndex: function(e, t) {
              var a = this._getStacks(e),
                n = void 0 !== t ? a.indexOf(t) : -1;
              return -1 === n ? a.length - 1 : n;
            },
            getRuler: function() {
              var e,
                t,
                a = this._getIndexScale(),
                n = this.getStackCount(),
                i = this.index,
                r = a.isHorizontal(),
                s = r ? a.left : a.top,
                o = s + (r ? a.width : a.height),
                d = [];
              for (e = 0, t = this.getMeta().data.length; e < t; ++e)
                d.push(a.getPixelForValue(null, e, i));
              return {
                min: le.isNullOrUndef(a.options.barThickness)
                  ? (function(e, t) {
                      var a,
                        n,
                        i,
                        r,
                        s = e.isHorizontal() ? e.width : e.height,
                        o = e.getTicks();
                      for (i = 1, r = t.length; i < r; ++i)
                        s = Math.min(s, Math.abs(t[i] - t[i - 1]));
                      for (i = 0, r = o.length; i < r; ++i)
                        (n = e.getPixelForTick(i)), (s = 0 < i ? Math.min(s, n - a) : s), (a = n);
                      return s;
                    })(a, d)
                  : -1,
                pixels: d,
                start: s,
                end: o,
                stackCount: n,
                scale: a,
              };
            },
            calculateBarValuePixels: function(e, t) {
              var a,
                n,
                i,
                r,
                s,
                o,
                d = this.chart,
                l = this.getMeta(),
                u = this._getValueScale(),
                _ = u.isHorizontal(),
                h = d.data.datasets,
                m = +u.getRightValue(h[e].data[t]),
                c = u.options.minBarLength,
                f = u.options.stacked,
                M = l.stack,
                p = 0;
              if (f || (void 0 === f && void 0 !== M))
                for (a = 0; a < e; ++a)
                  (n = d.getDatasetMeta(a)).bar &&
                    n.stack === M &&
                    n.controller._getValueScaleId() === u.id &&
                    d.isDatasetVisible(a) &&
                    ((i = +u.getRightValue(h[a].data[t])),
                    ((m < 0 && i < 0) || (0 <= m && 0 < i)) && (p += i));
              return (
                (r = u.getPixelForValue(p)),
                (s = u.getPixelForValue(p + m)),
                (o = s - r),
                void 0 !== c &&
                  Math.abs(o) < c &&
                  ((o = c), (s = (0 <= m && !_) || (m < 0 && _) ? r - c : r + c)),
                { size: o, base: r, head: s, center: s + o / 2 }
              );
            },
            calculateBarIndexPixels: function(e, t, a) {
              var n = a.scale.options,
                i =
                  'flex' === n.barThickness
                    ? (function(e, t, a) {
                        var n,
                          i = t.pixels,
                          r = i[e],
                          s = 0 < e ? i[e - 1] : null,
                          o = e < i.length - 1 ? i[e + 1] : null,
                          d = a.categoryPercentage;
                        null === s && (s = r - (null === o ? t.end - t.start : o - r));
                        null === o && (o = r + r - s);
                        return (
                          (n = r - ((r - Math.min(s, o)) / 2) * d),
                          {
                            chunk: ((Math.abs(o - s) / 2) * d) / t.stackCount,
                            ratio: a.barPercentage,
                            start: n,
                          }
                        );
                      })(t, a, n)
                    : (function(e, t, a) {
                        var n,
                          i,
                          r = a.barThickness,
                          s = t.stackCount,
                          o = t.pixels[e];
                        i = le.isNullOrUndef(r)
                          ? ((n = t.min * a.categoryPercentage), a.barPercentage)
                          : ((n = r * s), 1);
                        return { chunk: n / s, ratio: i, start: o - n / 2 };
                      })(t, a, n),
                r = this.getStackIndex(e, this.getMeta().stack),
                s = i.start + i.chunk * r + i.chunk / 2,
                o = Math.min(le.valueOrDefault(n.maxBarThickness, 1 / 0), i.chunk * i.ratio);
              return { base: s - o / 2, head: s + o / 2, center: s, size: o };
            },
            draw: function() {
              var e = this.chart,
                t = this._getValueScale(),
                a = this.getMeta().data,
                n = this.getDataset(),
                i = a.length,
                r = 0;
              for (le.canvas.clipArea(e.ctx, e.chartArea); r < i; ++r)
                isNaN(t.getRightValue(n.data[r])) || a[r].draw();
              le.canvas.unclipArea(e.ctx);
            },
            _resolveElementOptions: function(e, t) {
              var a,
                n,
                i,
                r = this.chart,
                s = r.data.datasets,
                o = s[this.index],
                d = e.custom || {},
                l = r.options.elements.rectangle,
                u = {},
                _ = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                h = ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth'];
              for (a = 0, n = h.length; a < n; ++a) u[(i = h[a])] = Ve([d[i], o[i], l[i]], _, t);
              return u;
            },
          }),
          Je = le.valueOrDefault,
          Ue = le.options.resolve;
        se._set('bubble', {
          hover: { mode: 'single' },
          scales: {
            xAxes: [{ type: 'linear', position: 'bottom', id: 'x-axis-0' }],
            yAxes: [{ type: 'linear', position: 'left', id: 'y-axis-0' }],
          },
          tooltips: {
            callbacks: {
              title: function() {
                return '';
              },
              label: function(e, t) {
                var a = t.datasets[e.datasetIndex].label || '',
                  n = t.datasets[e.datasetIndex].data[e.index];
                return a + ': (' + e.xLabel + ', ' + e.yLabel + ', ' + n.r + ')';
              },
            },
          },
        });
        var Ge = ve.extend({
            dataElementType: Ie.Point,
            update: function(a) {
              var n = this,
                e = n.getMeta(),
                t = e.data;
              le.each(t, function(e, t) {
                n.updateElement(e, t, a);
              });
            },
            updateElement: function(e, t, a) {
              var n = this.getMeta(),
                i = e.custom || {},
                r = this.getScaleForId(n.xAxisID),
                s = this.getScaleForId(n.yAxisID),
                o = this._resolveElementOptions(e, t),
                d = this.getDataset().data[t],
                l = this.index,
                u = a
                  ? r.getPixelForDecimal(0.5)
                  : r.getPixelForValue('object' == typeof d ? d : NaN, t, l),
                _ = a ? s.getBasePixel() : s.getPixelForValue(d, t, l);
              (e._xScale = r),
                (e._yScale = s),
                (e._options = o),
                (e._datasetIndex = l),
                (e._index = t),
                (e._model = {
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  borderWidth: o.borderWidth,
                  hitRadius: o.hitRadius,
                  pointStyle: o.pointStyle,
                  rotation: o.rotation,
                  radius: a ? 0 : o.radius,
                  skip: i.skip || isNaN(u) || isNaN(_),
                  x: u,
                  y: _,
                }),
                e.pivot();
            },
            setHoverStyle: function(e) {
              var t = e._model,
                a = e._options,
                n = le.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = Je(a.hoverBackgroundColor, n(a.backgroundColor))),
                (t.borderColor = Je(a.hoverBorderColor, n(a.borderColor))),
                (t.borderWidth = Je(a.hoverBorderWidth, a.borderWidth)),
                (t.radius = a.radius + a.hoverRadius);
            },
            _resolveElementOptions: function(e, t) {
              var a,
                n,
                i,
                r = this.chart,
                s = r.data.datasets,
                o = s[this.index],
                d = e.custom || {},
                l = r.options.elements.point,
                u = o.data[t],
                _ = {},
                h = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                m = [
                  'backgroundColor',
                  'borderColor',
                  'borderWidth',
                  'hoverBackgroundColor',
                  'hoverBorderColor',
                  'hoverBorderWidth',
                  'hoverRadius',
                  'hitRadius',
                  'pointStyle',
                  'rotation',
                ];
              for (a = 0, n = m.length; a < n; ++a) _[(i = m[a])] = Ue([d[i], o[i], l[i]], h, t);
              return (_.radius = Ue([d.radius, u ? u.r : void 0, o.radius, l.radius], h, t)), _;
            },
          }),
          qe = le.options.resolve,
          Ke = le.valueOrDefault;
        se._set('doughnut', {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: 'single' },
          legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            var a = e.data,
              n = a.datasets,
              i = a.labels;
            if (n.length)
              for (var r = 0; r < n[0].data.length; ++r)
                t.push(
                  '<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>',
                ),
                  i[r] && t.push(i[r]),
                  t.push('</li>');
            return t.push('</ul>'), t.join('');
          },
          legend: {
            labels: {
              generateLabels: function(u) {
                var _ = u.data;
                return _.labels.length && _.datasets.length
                  ? _.labels.map(function(e, t) {
                      var a = u.getDatasetMeta(0),
                        n = _.datasets[0],
                        i = a.data[t],
                        r = (i && i.custom) || {},
                        s = u.options.elements.arc,
                        o = qe(
                          [r.backgroundColor, n.backgroundColor, s.backgroundColor],
                          void 0,
                          t,
                        ),
                        d = qe([r.borderColor, n.borderColor, s.borderColor], void 0, t),
                        l = qe([r.borderWidth, n.borderWidth, s.borderWidth], void 0, t);
                      return {
                        text: e,
                        fillStyle: o,
                        strokeStyle: d,
                        lineWidth: l,
                        hidden: isNaN(n.data[t]) || a.data[t].hidden,
                        index: t,
                      };
                    })
                  : [];
              },
            },
            onClick: function(e, t) {
              var a,
                n,
                i,
                r = t.index,
                s = this.chart;
              for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)
                (i = s.getDatasetMeta(a)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
              s.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -0.5 * Math.PI,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function() {
                return '';
              },
              label: function(e, t) {
                var a = t.labels[e.index],
                  n = ': ' + t.datasets[e.datasetIndex].data[e.index];
                return le.isArray(a) ? ((a = a.slice())[0] += n) : (a += n), a;
              },
            },
          },
        });
        var Ze = ve.extend({
          dataElementType: Ie.Arc,
          linkScales: le.noop,
          getRingIndex: function(e) {
            for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
            return t;
          },
          update: function(e) {
            var t,
              a,
              n = this,
              i = n.chart,
              r = i.chartArea,
              s = i.options,
              o = r.right - r.left,
              d = r.bottom - r.top,
              l = Math.min(o, d),
              u = { x: 0, y: 0 },
              _ = n.getMeta(),
              h = _.data,
              m = s.cutoutPercentage,
              c = s.circumference,
              f = n._getRingWeight(n.index);
            if (c < 2 * Math.PI) {
              var M = s.rotation % (2 * Math.PI),
                p = (M += 2 * Math.PI * (M >= Math.PI ? -1 : M < -Math.PI ? 1 : 0)) + c,
                y = { x: Math.cos(M), y: Math.sin(M) },
                g = { x: Math.cos(p), y: Math.sin(p) },
                L = (M <= 0 && 0 <= p) || (M <= 2 * Math.PI && 2 * Math.PI <= p),
                Y =
                  (M <= 0.5 * Math.PI && 0.5 * Math.PI <= p) ||
                  (M <= 2.5 * Math.PI && 2.5 * Math.PI <= p),
                v = (M <= -Math.PI && -Math.PI <= p) || (M <= Math.PI && Math.PI <= p),
                k =
                  (M <= 0.5 * -Math.PI && 0.5 * -Math.PI <= p) ||
                  (M <= 1.5 * Math.PI && 1.5 * Math.PI <= p),
                b = m / 100,
                D = {
                  x: v ? -1 : Math.min(y.x * (y.x < 0 ? 1 : b), g.x * (g.x < 0 ? 1 : b)),
                  y: k ? -1 : Math.min(y.y * (y.y < 0 ? 1 : b), g.y * (g.y < 0 ? 1 : b)),
                },
                w = {
                  x: L ? 1 : Math.max(y.x * (0 < y.x ? 1 : b), g.x * (0 < g.x ? 1 : b)),
                  y: Y ? 1 : Math.max(y.y * (0 < y.y ? 1 : b), g.y * (0 < g.y ? 1 : b)),
                },
                T = { width: 0.5 * (w.x - D.x), height: 0.5 * (w.y - D.y) };
              (l = Math.min(o / T.width, d / T.height)),
                (u = { x: -0.5 * (w.x + D.x), y: -0.5 * (w.y + D.y) });
            }
            for (t = 0, a = h.length; t < a; ++t) h[t]._options = n._resolveElementOptions(h[t], t);
            for (
              i.borderWidth = n.getMaxBorderWidth(),
                i.outerRadius = Math.max((l - i.borderWidth) / 2, 0),
                i.innerRadius = Math.max(m ? (i.outerRadius / 100) * m : 0, 0),
                i.radiusLength =
                  (i.outerRadius - i.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1),
                i.offsetX = u.x * i.outerRadius,
                i.offsetY = u.y * i.outerRadius,
                _.total = n.calculateTotal(),
                n.outerRadius = i.outerRadius - i.radiusLength * n._getRingWeightOffset(n.index),
                n.innerRadius = Math.max(n.outerRadius - i.radiusLength * f, 0),
                t = 0,
                a = h.length;
              t < a;
              ++t
            )
              n.updateElement(h[t], t, e);
          },
          updateElement: function(e, t, a) {
            var n = this.chart,
              i = n.chartArea,
              r = n.options,
              s = r.animation,
              o = (i.left + i.right) / 2,
              d = (i.top + i.bottom) / 2,
              l = r.rotation,
              u = r.rotation,
              _ = this.getDataset(),
              h =
                a && s.animateRotate
                  ? 0
                  : e.hidden
                  ? 0
                  : this.calculateCircumference(_.data[t]) * (r.circumference / (2 * Math.PI)),
              m = a && s.animateScale ? 0 : this.innerRadius,
              c = a && s.animateScale ? 0 : this.outerRadius,
              f = e._options || {};
            le.extend(e, {
              _datasetIndex: this.index,
              _index: t,
              _model: {
                backgroundColor: f.backgroundColor,
                borderColor: f.borderColor,
                borderWidth: f.borderWidth,
                borderAlign: f.borderAlign,
                x: o + n.offsetX,
                y: d + n.offsetY,
                startAngle: l,
                endAngle: u,
                circumference: h,
                outerRadius: c,
                innerRadius: m,
                label: le.valueAtIndexOrDefault(_.label, t, n.data.labels[t]),
              },
            });
            var M = e._model;
            (a && s.animateRotate) ||
              ((M.startAngle = 0 === t ? r.rotation : this.getMeta().data[t - 1]._model.endAngle),
              (M.endAngle = M.startAngle + M.circumference)),
              e.pivot();
          },
          calculateTotal: function() {
            var a,
              n = this.getDataset(),
              e = this.getMeta(),
              i = 0;
            return (
              le.each(e.data, function(e, t) {
                (a = n.data[t]), isNaN(a) || e.hidden || (i += Math.abs(a));
              }),
              i
            );
          },
          calculateCircumference: function(e) {
            var t = this.getMeta().total;
            return 0 < t && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0;
          },
          getMaxBorderWidth: function(e) {
            var t,
              a,
              n,
              i,
              r,
              s,
              o,
              d,
              l = 0,
              u = this.chart;
            if (!e)
              for (t = 0, a = u.data.datasets.length; t < a; ++t)
                if (u.isDatasetVisible(t)) {
                  (n = u.getDatasetMeta(t)), (e = n.data), t !== this.index && (r = n.controller);
                  break;
                }
            if (!e) return 0;
            for (t = 0, a = e.length; t < a; ++t)
              (i = e[t]),
                'inner' !== (s = r ? r._resolveElementOptions(i, t) : i._options).borderAlign &&
                  ((o = s.borderWidth),
                  (d = s.hoverBorderWidth),
                  (l = (l = l < o ? o : l) < d ? d : l));
            return l;
          },
          setHoverStyle: function(e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = Ke(a.hoverBackgroundColor, n(a.backgroundColor))),
              (t.borderColor = Ke(a.hoverBorderColor, n(a.borderColor))),
              (t.borderWidth = Ke(a.hoverBorderWidth, a.borderWidth));
          },
          _resolveElementOptions: function(e, t) {
            var a,
              n,
              i,
              r = this.chart,
              s = this.getDataset(),
              o = e.custom || {},
              d = r.options.elements.arc,
              l = {},
              u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
              _ = [
                'backgroundColor',
                'borderColor',
                'borderWidth',
                'borderAlign',
                'hoverBackgroundColor',
                'hoverBorderColor',
                'hoverBorderWidth',
              ];
            for (a = 0, n = _.length; a < n; ++a) l[(i = _[a])] = qe([o[i], s[i], d[i]], u, t);
            return l;
          },
          _getRingWeightOffset: function(e) {
            for (var t = 0, a = 0; a < e; ++a)
              this.chart.isDatasetVisible(a) && (t += this._getRingWeight(a));
            return t;
          },
          _getRingWeight: function(e) {
            return Math.max(Ke(this.chart.data.datasets[e].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        se._set('horizontalBar', {
          hover: { mode: 'index', axis: 'y' },
          scales: {
            xAxes: [{ type: 'linear', position: 'bottom' }],
            yAxes: [
              {
                type: 'category',
                position: 'left',
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: 'left' } },
          tooltips: { mode: 'index', axis: 'y' },
        });
        var $e = Be.extend({
            _getValueScaleId: function() {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function() {
              return this.getMeta().yAxisID;
            },
          }),
          Xe = le.valueOrDefault,
          Qe = le.options.resolve,
          et = le.canvas._isPointInArea;
        function tt(e, t) {
          return Xe(e.showLine, t.showLines);
        }
        se._set('line', {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: 'label' },
          scales: {
            xAxes: [{ type: 'category', id: 'x-axis-0' }],
            yAxes: [{ type: 'linear', id: 'y-axis-0' }],
          },
        });
        var at = ve.extend({
            datasetElementType: Ie.Line,
            dataElementType: Ie.Point,
            update: function(e) {
              var t,
                a,
                n = this.getMeta(),
                i = n.dataset,
                r = n.data || [],
                s = this.getScaleForId(n.yAxisID),
                o = this.getDataset(),
                d = tt(o, this.chart.options);
              for (
                d &&
                  (void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension),
                  (i._scale = s),
                  (i._datasetIndex = this.index),
                  (i._children = r),
                  (i._model = this._resolveLineOptions(i)),
                  i.pivot()),
                  t = 0,
                  a = r.length;
                t < a;
                ++t
              )
                this.updateElement(r[t], t, e);
              for (
                d && 0 !== i._model.tension && this.updateBezierControlPoints(),
                  t = 0,
                  a = r.length;
                t < a;
                ++t
              )
                r[t].pivot();
            },
            updateElement: function(e, t, a) {
              var n,
                i,
                r = this.getMeta(),
                s = e.custom || {},
                o = this.getDataset(),
                d = this.index,
                l = o.data[t],
                u = this.getScaleForId(r.yAxisID),
                _ = this.getScaleForId(r.xAxisID),
                h = r.dataset._model,
                m = this._resolvePointOptions(e, t);
              (n = _.getPixelForValue('object' == typeof l ? l : NaN, t, d)),
                (i = a ? u.getBasePixel() : this.calculatePointY(l, t, d)),
                (e._xScale = _),
                (e._yScale = u),
                (e._options = m),
                (e._datasetIndex = d),
                (e._index = t),
                (e._model = {
                  x: n,
                  y: i,
                  skip: s.skip || isNaN(n) || isNaN(i),
                  radius: m.radius,
                  pointStyle: m.pointStyle,
                  rotation: m.rotation,
                  backgroundColor: m.backgroundColor,
                  borderColor: m.borderColor,
                  borderWidth: m.borderWidth,
                  tension: Xe(s.tension, h ? h.tension : 0),
                  steppedLine: !!h && h.steppedLine,
                  hitRadius: m.hitRadius,
                });
            },
            _resolvePointOptions: function(e, t) {
              var a,
                n,
                i,
                r = this.chart,
                s = r.data.datasets[this.index],
                o = e.custom || {},
                d = r.options.elements.point,
                l = {},
                u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
                _ = {
                  backgroundColor: 'pointBackgroundColor',
                  borderColor: 'pointBorderColor',
                  borderWidth: 'pointBorderWidth',
                  hitRadius: 'pointHitRadius',
                  hoverBackgroundColor: 'pointHoverBackgroundColor',
                  hoverBorderColor: 'pointHoverBorderColor',
                  hoverBorderWidth: 'pointHoverBorderWidth',
                  hoverRadius: 'pointHoverRadius',
                  pointStyle: 'pointStyle',
                  radius: 'pointRadius',
                  rotation: 'pointRotation',
                },
                h = Object.keys(_);
              for (a = 0, n = h.length; a < n; ++a)
                (i = h[a]), (l[i] = Qe([o[i], s[_[i]], s[i], d[i]], u, t));
              return l;
            },
            _resolveLineOptions: function(e) {
              var t,
                a,
                n,
                i = this.chart,
                r = i.data.datasets[this.index],
                s = e.custom || {},
                o = i.options,
                d = o.elements.line,
                l = {},
                u = [
                  'backgroundColor',
                  'borderWidth',
                  'borderColor',
                  'borderCapStyle',
                  'borderDash',
                  'borderDashOffset',
                  'borderJoinStyle',
                  'fill',
                  'cubicInterpolationMode',
                ];
              for (t = 0, a = u.length; t < a; ++t) l[(n = u[t])] = Qe([s[n], r[n], d[n]]);
              return (
                (l.spanGaps = Xe(r.spanGaps, o.spanGaps)),
                (l.tension = Xe(r.lineTension, d.tension)),
                (l.steppedLine = Qe([s.steppedLine, r.steppedLine, d.stepped])),
                l
              );
            },
            calculatePointY: function(e, t, a) {
              var n,
                i,
                r,
                s = this.chart,
                o = this.getMeta(),
                d = this.getScaleForId(o.yAxisID),
                l = 0,
                u = 0;
              if (d.options.stacked) {
                for (n = 0; n < a; n++)
                  if (
                    ((i = s.data.datasets[n]),
                    'line' === (r = s.getDatasetMeta(n)).type &&
                      r.yAxisID === d.id &&
                      s.isDatasetVisible(n))
                  ) {
                    var _ = Number(d.getRightValue(i.data[t]));
                    _ < 0 ? (u += _ || 0) : (l += _ || 0);
                  }
                var h = Number(d.getRightValue(e));
                return h < 0 ? d.getPixelForValue(u + h) : d.getPixelForValue(l + h);
              }
              return d.getPixelForValue(e);
            },
            updateBezierControlPoints: function() {
              var e,
                t,
                a,
                n,
                i = this.chart,
                r = this.getMeta(),
                s = r.dataset._model,
                o = i.chartArea,
                d = r.data || [];
              function l(e, t, a) {
                return Math.max(Math.min(e, a), t);
              }
              if (
                (s.spanGaps &&
                  (d = d.filter(function(e) {
                    return !e._model.skip;
                  })),
                'monotone' === s.cubicInterpolationMode)
              )
                le.splineCurveMonotone(d);
              else
                for (e = 0, t = d.length; e < t; ++e)
                  (a = d[e]._model),
                    (n = le.splineCurve(
                      le.previousItem(d, e)._model,
                      a,
                      le.nextItem(d, e)._model,
                      s.tension,
                    )),
                    (a.controlPointPreviousX = n.previous.x),
                    (a.controlPointPreviousY = n.previous.y),
                    (a.controlPointNextX = n.next.x),
                    (a.controlPointNextY = n.next.y);
              if (i.options.elements.line.capBezierPoints)
                for (e = 0, t = d.length; e < t; ++e)
                  (a = d[e]._model),
                    et(a, o) &&
                      (0 < e &&
                        et(d[e - 1]._model, o) &&
                        ((a.controlPointPreviousX = l(a.controlPointPreviousX, o.left, o.right)),
                        (a.controlPointPreviousY = l(a.controlPointPreviousY, o.top, o.bottom))),
                      e < d.length - 1 &&
                        et(d[e + 1]._model, o) &&
                        ((a.controlPointNextX = l(a.controlPointNextX, o.left, o.right)),
                        (a.controlPointNextY = l(a.controlPointNextY, o.top, o.bottom))));
            },
            draw: function() {
              var e,
                t = this.chart,
                a = this.getMeta(),
                n = a.data || [],
                i = t.chartArea,
                r = n.length,
                s = 0;
              for (
                tt(this.getDataset(), t.options) &&
                ((e = (a.dataset._model.borderWidth || 0) / 2),
                le.canvas.clipArea(t.ctx, {
                  left: i.left,
                  right: i.right,
                  top: i.top - e,
                  bottom: i.bottom + e,
                }),
                a.dataset.draw(),
                le.canvas.unclipArea(t.ctx));
                s < r;
                ++s
              )
                n[s].draw(i);
            },
            setHoverStyle: function(e) {
              var t = e._model,
                a = e._options,
                n = le.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = Xe(a.hoverBackgroundColor, n(a.backgroundColor))),
                (t.borderColor = Xe(a.hoverBorderColor, n(a.borderColor))),
                (t.borderWidth = Xe(a.hoverBorderWidth, a.borderWidth)),
                (t.radius = Xe(a.hoverRadius, a.radius));
            },
          }),
          nt = le.options.resolve;
        se._set('polarArea', {
          scale: {
            type: 'radialLinear',
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            var a = e.data,
              n = a.datasets,
              i = a.labels;
            if (n.length)
              for (var r = 0; r < n[0].data.length; ++r)
                t.push(
                  '<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>',
                ),
                  i[r] && t.push(i[r]),
                  t.push('</li>');
            return t.push('</ul>'), t.join('');
          },
          legend: {
            labels: {
              generateLabels: function(u) {
                var _ = u.data;
                return _.labels.length && _.datasets.length
                  ? _.labels.map(function(e, t) {
                      var a = u.getDatasetMeta(0),
                        n = _.datasets[0],
                        i = a.data[t],
                        r = i.custom || {},
                        s = u.options.elements.arc,
                        o = nt(
                          [r.backgroundColor, n.backgroundColor, s.backgroundColor],
                          void 0,
                          t,
                        ),
                        d = nt([r.borderColor, n.borderColor, s.borderColor], void 0, t),
                        l = nt([r.borderWidth, n.borderWidth, s.borderWidth], void 0, t);
                      return {
                        text: e,
                        fillStyle: o,
                        strokeStyle: d,
                        lineWidth: l,
                        hidden: isNaN(n.data[t]) || a.data[t].hidden,
                        index: t,
                      };
                    })
                  : [];
              },
            },
            onClick: function(e, t) {
              var a,
                n,
                i,
                r = t.index,
                s = this.chart;
              for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)
                (i = s.getDatasetMeta(a)).data[r].hidden = !i.data[r].hidden;
              s.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function() {
                return '';
              },
              label: function(e, t) {
                return t.labels[e.index] + ': ' + e.yLabel;
              },
            },
          },
        });
        var it = ve.extend({
          dataElementType: Ie.Arc,
          linkScales: le.noop,
          update: function(e) {
            var t,
              a,
              n,
              i = this,
              r = i.getDataset(),
              s = i.getMeta(),
              o = i.chart.options.startAngle || 0,
              d = (i._starts = []),
              l = (i._angles = []),
              u = s.data;
            for (
              i._updateRadius(), s.count = i.countVisibleElements(), t = 0, a = r.data.length;
              t < a;
              t++
            )
              (d[t] = o), (n = i._computeAngle(t)), (l[t] = n), (o += n);
            for (t = 0, a = u.length; t < a; ++t)
              (u[t]._options = i._resolveElementOptions(u[t], t)), i.updateElement(u[t], t, e);
          },
          _updateRadius: function() {
            var e = this.chart,
              t = e.chartArea,
              a = e.options,
              n = Math.min(t.right - t.left, t.bottom - t.top);
            (e.outerRadius = Math.max(n / 2, 0)),
              (e.innerRadius = Math.max(
                a.cutoutPercentage ? (e.outerRadius / 100) * a.cutoutPercentage : 1,
                0,
              )),
              (e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
              (this.outerRadius = e.outerRadius - e.radiusLength * this.index),
              (this.innerRadius = this.outerRadius - e.radiusLength);
          },
          updateElement: function(e, t, a) {
            var n = this.chart,
              i = this.getDataset(),
              r = n.options,
              s = r.animation,
              o = n.scale,
              d = n.data.labels,
              l = o.xCenter,
              u = o.yCenter,
              _ = r.startAngle,
              h = e.hidden ? 0 : o.getDistanceFromCenterForValue(i.data[t]),
              m = this._starts[t],
              c = m + (e.hidden ? 0 : this._angles[t]),
              f = s.animateScale ? 0 : o.getDistanceFromCenterForValue(i.data[t]),
              M = e._options || {};
            le.extend(e, {
              _datasetIndex: this.index,
              _index: t,
              _scale: o,
              _model: {
                backgroundColor: M.backgroundColor,
                borderColor: M.borderColor,
                borderWidth: M.borderWidth,
                borderAlign: M.borderAlign,
                x: l,
                y: u,
                innerRadius: 0,
                outerRadius: a ? f : h,
                startAngle: a && s.animateRotate ? _ : m,
                endAngle: a && s.animateRotate ? _ : c,
                label: le.valueAtIndexOrDefault(d, t, d[t]),
              },
            }),
              e.pivot();
          },
          countVisibleElements: function() {
            var a = this.getDataset(),
              e = this.getMeta(),
              n = 0;
            return (
              le.each(e.data, function(e, t) {
                isNaN(a.data[t]) || e.hidden || n++;
              }),
              n
            );
          },
          setHoverStyle: function(e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor,
              i = le.valueOrDefault;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = i(a.hoverBackgroundColor, n(a.backgroundColor))),
              (t.borderColor = i(a.hoverBorderColor, n(a.borderColor))),
              (t.borderWidth = i(a.hoverBorderWidth, a.borderWidth));
          },
          _resolveElementOptions: function(e, t) {
            var a,
              n,
              i,
              r = this.chart,
              s = this.getDataset(),
              o = e.custom || {},
              d = r.options.elements.arc,
              l = {},
              u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
              _ = [
                'backgroundColor',
                'borderColor',
                'borderWidth',
                'borderAlign',
                'hoverBackgroundColor',
                'hoverBorderColor',
                'hoverBorderWidth',
              ];
            for (a = 0, n = _.length; a < n; ++a) l[(i = _[a])] = nt([o[i], s[i], d[i]], u, t);
            return l;
          },
          _computeAngle: function(e) {
            var t = this.getMeta().count,
              a = this.getDataset(),
              n = this.getMeta();
            if (isNaN(a.data[e]) || n.data[e].hidden) return 0;
            var i = { chart: this.chart, dataIndex: e, dataset: a, datasetIndex: this.index };
            return nt([this.chart.options.elements.arc.angle, (2 * Math.PI) / t], i, e);
          },
        });
        se._set('pie', le.clone(se.doughnut)), se._set('pie', { cutoutPercentage: 0 });
        var rt = Ze,
          st = le.valueOrDefault,
          ot = le.options.resolve;
        se._set('radar', { scale: { type: 'radialLinear' }, elements: { line: { tension: 0 } } });
        var dt = ve.extend({
          datasetElementType: Ie.Line,
          dataElementType: Ie.Point,
          linkScales: le.noop,
          update: function(e) {
            var t,
              a,
              n = this.getMeta(),
              i = n.dataset,
              r = n.data || [],
              s = this.chart.scale,
              o = this.getDataset();
            for (
              void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension),
                i._scale = s,
                i._datasetIndex = this.index,
                i._children = r,
                i._loop = !0,
                i._model = this._resolveLineOptions(i),
                i.pivot(),
                t = 0,
                a = r.length;
              t < a;
              ++t
            )
              this.updateElement(r[t], t, e);
            for (this.updateBezierControlPoints(), t = 0, a = r.length; t < a; ++t) r[t].pivot();
          },
          updateElement: function(e, t, a) {
            var n = e.custom || {},
              i = this.getDataset(),
              r = this.chart.scale,
              s = r.getPointPositionForValue(t, i.data[t]),
              o = this._resolvePointOptions(e, t),
              d = this.getMeta().dataset._model,
              l = a ? r.xCenter : s.x,
              u = a ? r.yCenter : s.y;
            (e._scale = r),
              (e._options = o),
              (e._datasetIndex = this.index),
              (e._index = t),
              (e._model = {
                x: l,
                y: u,
                skip: n.skip || isNaN(l) || isNaN(u),
                radius: o.radius,
                pointStyle: o.pointStyle,
                rotation: o.rotation,
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderWidth: o.borderWidth,
                tension: st(n.tension, d ? d.tension : 0),
                hitRadius: o.hitRadius,
              });
          },
          _resolvePointOptions: function(e, t) {
            var a,
              n,
              i,
              r = this.chart,
              s = r.data.datasets[this.index],
              o = e.custom || {},
              d = r.options.elements.point,
              l = {},
              u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
              _ = {
                backgroundColor: 'pointBackgroundColor',
                borderColor: 'pointBorderColor',
                borderWidth: 'pointBorderWidth',
                hitRadius: 'pointHitRadius',
                hoverBackgroundColor: 'pointHoverBackgroundColor',
                hoverBorderColor: 'pointHoverBorderColor',
                hoverBorderWidth: 'pointHoverBorderWidth',
                hoverRadius: 'pointHoverRadius',
                pointStyle: 'pointStyle',
                radius: 'pointRadius',
                rotation: 'pointRotation',
              },
              h = Object.keys(_);
            for (a = 0, n = h.length; a < n; ++a)
              (i = h[a]), (l[i] = ot([o[i], s[_[i]], s[i], d[i]], u, t));
            return l;
          },
          _resolveLineOptions: function(e) {
            var t,
              a,
              n,
              i = this.chart,
              r = i.data.datasets[this.index],
              s = e.custom || {},
              o = i.options.elements.line,
              d = {},
              l = [
                'backgroundColor',
                'borderWidth',
                'borderColor',
                'borderCapStyle',
                'borderDash',
                'borderDashOffset',
                'borderJoinStyle',
                'fill',
              ];
            for (t = 0, a = l.length; t < a; ++t) d[(n = l[t])] = ot([s[n], r[n], o[n]]);
            return (d.tension = st(r.lineTension, o.tension)), d;
          },
          updateBezierControlPoints: function() {
            var e,
              t,
              a,
              n,
              i = this.getMeta(),
              r = this.chart.chartArea,
              s = i.data || [];
            function o(e, t, a) {
              return Math.max(Math.min(e, a), t);
            }
            for (e = 0, t = s.length; e < t; ++e)
              (a = s[e]._model),
                (n = le.splineCurve(
                  le.previousItem(s, e, !0)._model,
                  a,
                  le.nextItem(s, e, !0)._model,
                  a.tension,
                )),
                (a.controlPointPreviousX = o(n.previous.x, r.left, r.right)),
                (a.controlPointPreviousY = o(n.previous.y, r.top, r.bottom)),
                (a.controlPointNextX = o(n.next.x, r.left, r.right)),
                (a.controlPointNextY = o(n.next.y, r.top, r.bottom));
          },
          setHoverStyle: function(e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius,
            }),
              (t.backgroundColor = st(a.hoverBackgroundColor, n(a.backgroundColor))),
              (t.borderColor = st(a.hoverBorderColor, n(a.borderColor))),
              (t.borderWidth = st(a.hoverBorderWidth, a.borderWidth)),
              (t.radius = st(a.hoverRadius, a.radius));
          },
        });
        se._set('scatter', {
          hover: { mode: 'single' },
          scales: {
            xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'bottom' }],
            yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left' }],
          },
          showLines: !1,
          tooltips: {
            callbacks: {
              title: function() {
                return '';
              },
              label: function(e) {
                return '(' + e.xLabel + ', ' + e.yLabel + ')';
              },
            },
          },
        });
        var lt = {
          bar: Be,
          bubble: Ge,
          doughnut: Ze,
          horizontalBar: $e,
          line: at,
          polarArea: it,
          pie: rt,
          radar: dt,
          scatter: at,
        };
        function ut(e, t) {
          return e.native ? { x: e.x, y: e.y } : le.getRelativePosition(e, t);
        }
        function _t(e, t) {
          var a,
            n,
            i,
            r,
            s,
            o = e.data.datasets;
          for (n = 0, r = o.length; n < r; ++n)
            if (e.isDatasetVisible(n))
              for (a = e.getDatasetMeta(n), i = 0, s = a.data.length; i < s; ++i) {
                var d = a.data[i];
                d._view.skip || t(d);
              }
        }
        function ht(e, t) {
          var a = [];
          return (
            _t(e, function(e) {
              e.inRange(t.x, t.y) && a.push(e);
            }),
            a
          );
        }
        function mt(e, n, i, r) {
          var s = Number.POSITIVE_INFINITY,
            o = [];
          return (
            _t(e, function(e) {
              if (!i || e.inRange(n.x, n.y)) {
                var t = e.getCenterPoint(),
                  a = r(n, t);
                a < s ? ((o = [e]), (s = a)) : a === s && o.push(e);
              }
            }),
            o
          );
        }
        function ct(e) {
          var i = -1 !== e.indexOf('x'),
            r = -1 !== e.indexOf('y');
          return function(e, t) {
            var a = i ? Math.abs(e.x - t.x) : 0,
              n = r ? Math.abs(e.y - t.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
          };
        }
        function ft(i, e, t) {
          var a = ut(e, i);
          t.axis = t.axis || 'x';
          var n = ct(t.axis),
            r = t.intersect ? ht(i, a) : mt(i, a, !1, n),
            s = [];
          return r.length
            ? (i.data.datasets.forEach(function(e, t) {
                if (i.isDatasetVisible(t)) {
                  var a = i.getDatasetMeta(t),
                    n = a.data[r[0]._index];
                  n && !n._view.skip && s.push(n);
                }
              }),
              s)
            : [];
        }
        var Mt = {
          modes: {
            single: function(e, t) {
              var a = ut(t, e),
                n = [];
              return (
                _t(e, function(e) {
                  if (e.inRange(a.x, a.y)) return n.push(e), n;
                }),
                n.slice(0, 1)
              );
            },
            label: ft,
            index: ft,
            dataset: function(e, t, a) {
              var n = ut(t, e);
              a.axis = a.axis || 'xy';
              var i = ct(a.axis),
                r = a.intersect ? ht(e, n) : mt(e, n, !1, i);
              return 0 < r.length && (r = e.getDatasetMeta(r[0]._datasetIndex).data), r;
            },
            'x-axis': function(e, t) {
              return ft(e, t, { intersect: !1 });
            },
            point: function(e, t) {
              var a = ut(t, e);
              return ht(e, a);
            },
            nearest: function(e, t, a) {
              var n = ut(t, e);
              a.axis = a.axis || 'xy';
              var i = ct(a.axis);
              return mt(e, n, a.intersect, i);
            },
            x: function(e, t, a) {
              var n = ut(t, e),
                i = [],
                r = !1;
              return (
                _t(e, function(e) {
                  e.inXRange(n.x) && i.push(e), e.inRange(n.x, n.y) && (r = !0);
                }),
                a.intersect && !r && (i = []),
                i
              );
            },
            y: function(e, t, a) {
              var n = ut(t, e),
                i = [],
                r = !1;
              return (
                _t(e, function(e) {
                  e.inYRange(n.y) && i.push(e), e.inRange(n.x, n.y) && (r = !0);
                }),
                a.intersect && !r && (i = []),
                i
              );
            },
          },
        };
        function pt(e, t) {
          return le.where(e, function(e) {
            return e.position === t;
          });
        }
        function yt(e, i) {
          e.forEach(function(e, t) {
            return (e._tmpIndex_ = t), e;
          }),
            e.sort(function(e, t) {
              var a = i ? t : e,
                n = i ? e : t;
              return a.weight === n.weight ? a._tmpIndex_ - n._tmpIndex_ : a.weight - n.weight;
            }),
            e.forEach(function(e) {
              delete e._tmpIndex_;
            });
        }
        function gt(e, t) {
          le.each(e, function(e) {
            t[e.position] += e.isHorizontal() ? e.height : e.width;
          });
        }
        se._set('global', { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });
        var Lt = {
          defaults: {},
          addBox: function(e, t) {
            e.boxes || (e.boxes = []),
              (t.fullWidth = t.fullWidth || !1),
              (t.position = t.position || 'top'),
              (t.weight = t.weight || 0),
              e.boxes.push(t);
          },
          removeBox: function(e, t) {
            var a = e.boxes ? e.boxes.indexOf(t) : -1;
            -1 !== a && e.boxes.splice(a, 1);
          },
          configure: function(e, t, a) {
            for (var n, i = ['fullWidth', 'position', 'weight'], r = i.length, s = 0; s < r; ++s)
              (n = i[s]), a.hasOwnProperty(n) && (t[n] = a[n]);
          },
          update: function(t, a, e) {
            if (t) {
              var n = t.options.layout || {},
                i = le.options.toPadding(n.padding),
                r = i.left,
                s = i.right,
                o = i.top,
                d = i.bottom,
                l = pt(t.boxes, 'left'),
                u = pt(t.boxes, 'right'),
                _ = pt(t.boxes, 'top'),
                h = pt(t.boxes, 'bottom'),
                m = pt(t.boxes, 'chartArea');
              yt(l, !0), yt(u, !1), yt(_, !0), yt(h, !1);
              var c,
                f = l.concat(u),
                M = _.concat(h),
                p = f.concat(M),
                y = a - r - s,
                g = e - o - d,
                L = y / 2,
                Y = (a - L) / f.length,
                v = y,
                k = g,
                b = { top: o, left: r, bottom: d, right: s },
                D = [];
              le.each(p, function(e) {
                var t,
                  a = e.isHorizontal();
                a
                  ? ((t = e.update(e.fullWidth ? y : v, g / 2)), (k -= t.height))
                  : ((t = e.update(Y, k)), (v -= t.width));
                D.push({ horizontal: a, width: t.width, box: e });
              }),
                (c = (function(e) {
                  var a = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                  return (
                    le.each(e, function(e) {
                      if (e.getPadding) {
                        var t = e.getPadding();
                        (a = Math.max(a, t.top)),
                          (n = Math.max(n, t.left)),
                          (i = Math.max(i, t.bottom)),
                          (r = Math.max(r, t.right));
                      }
                    }),
                    { top: a, left: n, bottom: i, right: r }
                  );
                })(p)),
                le.each(f, j),
                gt(f, b),
                le.each(M, j),
                gt(M, b),
                le.each(f, function(t) {
                  var e = le.findNextWhere(D, function(e) {
                      return e.box === t;
                    }),
                    a = { left: 0, right: 0, top: b.top, bottom: b.bottom };
                  e && t.update(e.width, k, a);
                }),
                gt(p, (b = { top: o, left: r, bottom: d, right: s }));
              var w = Math.max(c.left - b.left, 0);
              (b.left += w), (b.right += Math.max(c.right - b.right, 0));
              var T = Math.max(c.top - b.top, 0);
              (b.top += T), (b.bottom += Math.max(c.bottom - b.bottom, 0));
              var x = e - b.top - b.bottom,
                S = a - b.left - b.right;
              (S === v && x === k) ||
                (le.each(f, function(e) {
                  e.height = x;
                }),
                le.each(M, function(e) {
                  e.fullWidth || (e.width = S);
                }),
                (k = x),
                (v = S));
              var H = r + w,
                P = o + T;
              le.each(l.concat(_), O),
                (H += v),
                (P += k),
                le.each(u, O),
                le.each(h, O),
                (t.chartArea = { left: b.left, top: b.top, right: b.left + v, bottom: b.top + k }),
                le.each(m, function(e) {
                  (e.left = t.chartArea.left),
                    (e.top = t.chartArea.top),
                    (e.right = t.chartArea.right),
                    (e.bottom = t.chartArea.bottom),
                    e.update(v, k);
                });
            }
            function j(t) {
              var e = le.findNextWhere(D, function(e) {
                return e.box === t;
              });
              if (e)
                if (e.horizontal) {
                  var a = {
                    left: Math.max(b.left, c.left),
                    right: Math.max(b.right, c.right),
                    top: 0,
                    bottom: 0,
                  };
                  t.update(t.fullWidth ? y : v, g / 2, a);
                } else t.update(e.width, k);
            }
            function O(e) {
              e.isHorizontal()
                ? ((e.left = e.fullWidth ? r : b.left),
                  (e.right = e.fullWidth ? a - s : b.left + v),
                  (e.top = P),
                  (e.bottom = P + e.height),
                  (P = e.bottom))
                : ((e.left = H),
                  (e.right = H + e.width),
                  (e.top = b.top),
                  (e.bottom = b.top + k),
                  (H = e.right));
            }
          },
        };
        var Yt = (function(e) {
            return (e && e.default) || e;
          })(
            Object.freeze({
              default:
                '/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n',
            }),
          ),
          vt = '$chartjs',
          kt = 'chartjs-',
          bt = kt + 'size-monitor',
          Dt = kt + 'render-monitor',
          wt = kt + 'render-animation',
          Tt = ['animationstart', 'webkitAnimationStart'],
          xt = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            pointerenter: 'mouseenter',
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerleave: 'mouseout',
            pointerout: 'mouseout',
          };
        function St(e, t) {
          var a = le.getStyle(e, t),
            n = a && a.match(/^(\d+)(\.\d+)?px$/);
          return n ? Number(n[1]) : void 0;
        }
        var Ht = !!(function() {
          var e = !1;
          try {
            var t = Object.defineProperty({}, 'passive', {
              get: function() {
                e = !0;
              },
            });
            window.addEventListener('e', null, t);
          } catch (e) {}
          return e;
        })() && { passive: !0 };
        function Pt(e, t, a) {
          e.addEventListener(t, a, Ht);
        }
        function jt(e, t, a) {
          e.removeEventListener(t, a, Ht);
        }
        function Ot(e, t, a, n, i) {
          return {
            type: e,
            chart: t,
            native: i || null,
            x: void 0 !== a ? a : null,
            y: void 0 !== n ? n : null,
          };
        }
        function At(e) {
          var t = document.createElement('div');
          return (t.className = e || ''), t;
        }
        function Wt(a, n, i) {
          var r = a[vt] || (a[vt] = {}),
            t = (r.resizer = (function(e) {
              var t = At(bt),
                a = At(bt + '-expand'),
                n = At(bt + '-shrink');
              a.appendChild(At()),
                n.appendChild(At()),
                t.appendChild(a),
                t.appendChild(n),
                (t._reset = function() {
                  (a.scrollLeft = 1e6),
                    (a.scrollTop = 1e6),
                    (n.scrollLeft = 1e6),
                    (n.scrollTop = 1e6);
                });
              function i() {
                t._reset(), e();
              }
              return Pt(a, 'scroll', i.bind(a, 'expand')), Pt(n, 'scroll', i.bind(n, 'shrink')), t;
            })(
              (function(e, t) {
                var a = !1,
                  n = [];
                return function() {
                  (n = Array.prototype.slice.call(arguments)),
                    (t = t || this),
                    a ||
                      ((a = !0),
                      le.requestAnimFrame.call(window, function() {
                        (a = !1), e.apply(t, n);
                      }));
                };
              })(function() {
                if (r.resizer) {
                  var e = i.options.maintainAspectRatio && a.parentNode,
                    t = e ? e.clientWidth : 0;
                  n(Ot('resize', i)), e && e.clientWidth < t && i.canvas && n(Ot('resize', i));
                }
              }),
            ));
          !(function(t, a) {
            var e = t[vt] || (t[vt] = {}),
              n = (e.renderProxy = function(e) {
                e.animationName === wt && a();
              });
            le.each(Tt, function(e) {
              Pt(t, e, n);
            }),
              (e.reflow = !!t.offsetParent),
              t.classList.add(Dt);
          })(a, function() {
            if (r.resizer) {
              var e = a.parentNode;
              e && e !== t.parentNode && e.insertBefore(t, e.firstChild), t._reset();
            }
          });
        }
        function Ft(e) {
          var t = e[vt] || {},
            a = t.resizer;
          delete t.resizer,
            (function(t) {
              var e = t[vt] || {},
                a = e.renderProxy;
              a &&
                (le.each(Tt, function(e) {
                  jt(t, e, a);
                }),
                delete e.renderProxy);
              t.classList.remove(Dt);
            })(e),
            a && a.parentNode && a.parentNode.removeChild(a);
        }
        var Ct = {
          disableCSSInjection: !1,
          _enabled: 'undefined' != typeof window && 'undefined' != typeof document,
          _ensureLoaded: function() {
            this._loaded ||
              ((this._loaded = !0),
              this.disableCSSInjection ||
                (function(e, t) {
                  var a = e._style || document.createElement('style');
                  e._style ||
                    ((e._style = a),
                    (t = '/* Chart.js */\n' + t),
                    a.setAttribute('type', 'text/css'),
                    document.getElementsByTagName('head')[0].appendChild(a));
                  a.appendChild(document.createTextNode(t));
                })(this, Yt));
          },
          acquireContext: function(e, t) {
            'string' == typeof e ? (e = document.getElementById(e)) : e.length && (e = e[0]),
              e && e.canvas && (e = e.canvas);
            var a = e && e.getContext && e.getContext('2d');
            return (
              this._ensureLoaded(),
              a && a.canvas === e
                ? ((function(e, t) {
                    var a = e.style,
                      n = e.getAttribute('height'),
                      i = e.getAttribute('width');
                    if (
                      ((e[vt] = {
                        initial: {
                          height: n,
                          width: i,
                          style: { display: a.display, height: a.height, width: a.width },
                        },
                      }),
                      (a.display = a.display || 'block'),
                      null === i || '' === i)
                    ) {
                      var r = St(e, 'width');
                      void 0 !== r && (e.width = r);
                    }
                    if (null === n || '' === n)
                      if ('' === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                      else {
                        var s = St(e, 'height');
                        void 0 !== r && (e.height = s);
                      }
                  })(e, t),
                  a)
                : null
            );
          },
          releaseContext: function(e) {
            var a = e.canvas;
            if (a[vt]) {
              var n = a[vt].initial;
              ['height', 'width'].forEach(function(e) {
                var t = n[e];
                le.isNullOrUndef(t) ? a.removeAttribute(e) : a.setAttribute(e, t);
              }),
                le.each(n.style || {}, function(e, t) {
                  a.style[t] = e;
                }),
                (a.width = a.width),
                delete a[vt];
            }
          },
          addEventListener: function(t, e, a) {
            var n = t.canvas;
            if ('resize' !== e) {
              var i = a[vt] || (a[vt] = {}),
                r = i.proxies || (i.proxies = {}),
                s = (r[t.id + '_' + e] = function(e) {
                  a(
                    (function(e, t) {
                      var a = xt[e.type] || e.type,
                        n = le.getRelativePosition(e, t);
                      return Ot(a, t, n.x, n.y, e);
                    })(e, t),
                  );
                });
              Pt(n, e, s);
            } else Wt(n, a, t);
          },
          removeEventListener: function(e, t, a) {
            var n = e.canvas;
            if ('resize' !== t) {
              var i = a[vt] || {},
                r = i.proxies || {},
                s = r[e.id + '_' + t];
              s && jt(n, t, s);
            } else Ft(n);
          },
        };
        (le.addEvent = Pt), (le.removeEvent = jt);
        var It = Ct._enabled
            ? Ct
            : {
                acquireContext: function(e) {
                  if (e && e.canvas) {
                    e = e.canvas;
                  }
                  return (e && e.getContext('2d')) || null;
                },
              },
          Et = le.extend(
            {
              initialize: function() {},
              acquireContext: function() {},
              releaseContext: function() {},
              addEventListener: function() {},
              removeEventListener: function() {},
            },
            It,
          );
        se._set('global', { plugins: {} });
        var zt = {
            _plugins: [],
            _cacheId: 0,
            register: function(e) {
              var t = this._plugins;
              [].concat(e).forEach(function(e) {
                -1 === t.indexOf(e) && t.push(e);
              }),
                this._cacheId++;
            },
            unregister: function(e) {
              var a = this._plugins;
              [].concat(e).forEach(function(e) {
                var t = a.indexOf(e);
                -1 !== t && a.splice(t, 1);
              }),
                this._cacheId++;
            },
            clear: function() {
              (this._plugins = []), this._cacheId++;
            },
            count: function() {
              return this._plugins.length;
            },
            getAll: function() {
              return this._plugins;
            },
            notify: function(e, t, a) {
              var n,
                i,
                r,
                s,
                o,
                d = this.descriptors(e),
                l = d.length;
              for (n = 0; n < l; ++n)
                if (
                  ((i = d[n]),
                  (r = i.plugin),
                  'function' == typeof (o = r[t]) &&
                    ((s = [e].concat(a || [])).push(i.options), !1 === o.apply(r, s)))
                )
                  return !1;
              return !0;
            },
            descriptors: function(e) {
              var t = e.$plugins || (e.$plugins = {});
              if (t.id === this._cacheId) return t.descriptors;
              var i = [],
                r = [],
                a = (e && e.config) || {},
                s = (a.options && a.options.plugins) || {};
              return (
                this._plugins.concat(a.plugins || []).forEach(function(e) {
                  var t = i.indexOf(e);
                  if (-1 === t) {
                    var a = e.id,
                      n = s[a];
                    !1 !== n &&
                      (!0 === n && (n = le.clone(se.global.plugins[a])),
                      i.push(e),
                      r.push({ plugin: e, options: n || {} }));
                  }
                }),
                (t.descriptors = r),
                (t.id = this._cacheId),
                r
              );
            },
            _invalidate: function(e) {
              delete e.$plugins;
            },
          },
          Rt = {
            constructors: {},
            defaults: {},
            registerScaleType: function(e, t, a) {
              (this.constructors[e] = t), (this.defaults[e] = le.clone(a));
            },
            getScaleConstructor: function(e) {
              return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0;
            },
            getScaleDefaults: function(e) {
              return this.defaults.hasOwnProperty(e)
                ? le.merge({}, [se.scale, this.defaults[e]])
                : {};
            },
            updateScaleDefaults: function(e, t) {
              this.defaults.hasOwnProperty(e) &&
                (this.defaults[e] = le.extend(this.defaults[e], t));
            },
            addScalesToLayout: function(t) {
              le.each(t.scales, function(e) {
                (e.fullWidth = e.options.fullWidth),
                  (e.position = e.options.position),
                  (e.weight = e.options.weight),
                  Lt.addBox(t, e);
              });
            },
          },
          Nt = le.valueOrDefault;
        se._set('global', {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: 'nearest',
            position: 'average',
            intersect: !0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleFontStyle: 'bold',
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: '#fff',
            titleAlign: 'left',
            bodySpacing: 2,
            bodyFontColor: '#fff',
            bodyAlign: 'left',
            footerFontStyle: 'bold',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: '#fff',
            footerAlign: 'left',
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: '#fff',
            displayColors: !0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            callbacks: {
              beforeTitle: le.noop,
              title: function(e, t) {
                var a = '',
                  n = t.labels,
                  i = n ? n.length : 0;
                if (0 < e.length) {
                  var r = e[0];
                  r.label
                    ? (a = r.label)
                    : r.xLabel
                    ? (a = r.xLabel)
                    : 0 < i && r.index < i && (a = n[r.index]);
                }
                return a;
              },
              afterTitle: le.noop,
              beforeBody: le.noop,
              beforeLabel: le.noop,
              label: function(e, t) {
                var a = t.datasets[e.datasetIndex].label || '';
                return (
                  a && (a += ': '), le.isNullOrUndef(e.value) ? (a += e.yLabel) : (a += e.value), a
                );
              },
              labelColor: function(e, t) {
                var a = t.getDatasetMeta(e.datasetIndex),
                  n = a.data[e.index],
                  i = n._view;
                return { borderColor: i.borderColor, backgroundColor: i.backgroundColor };
              },
              labelTextColor: function() {
                return this._options.bodyFontColor;
              },
              afterLabel: le.noop,
              afterBody: le.noop,
              beforeFooter: le.noop,
              footer: le.noop,
              afterFooter: le.noop,
            },
          },
        });
        var Vt = {
          average: function(e) {
            if (!e.length) return !1;
            var t,
              a,
              n = 0,
              i = 0,
              r = 0;
            for (t = 0, a = e.length; t < a; ++t) {
              var s = e[t];
              if (s && s.hasValue()) {
                var o = s.tooltipPosition();
                (n += o.x), (i += o.y), ++r;
              }
            }
            return { x: n / r, y: i / r };
          },
          nearest: function(e, t) {
            var a,
              n,
              i,
              r = t.x,
              s = t.y,
              o = Number.POSITIVE_INFINITY;
            for (a = 0, n = e.length; a < n; ++a) {
              var d = e[a];
              if (d && d.hasValue()) {
                var l = d.getCenterPoint(),
                  u = le.distanceBetweenPoints(t, l);
                u < o && ((o = u), (i = d));
              }
            }
            if (i) {
              var _ = i.tooltipPosition();
              (r = _.x), (s = _.y);
            }
            return { x: r, y: s };
          },
        };
        function Bt(e, t) {
          return t && (le.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
        }
        function Jt(e) {
          return ('string' == typeof e || e instanceof String) && -1 < e.indexOf('\n')
            ? e.split('\n')
            : e;
        }
        function Ut(e) {
          var t = se.global;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: Nt(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: Nt(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: Nt(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: Nt(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: Nt(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: Nt(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: Nt(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: Nt(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: Nt(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          };
        }
        function Gt(e, t) {
          return 'center' === t
            ? e.x + e.width / 2
            : 'right' === t
            ? e.x + e.width - e.xPadding
            : e.x + e.xPadding;
        }
        function qt(e) {
          return Bt([], Jt(e));
        }
        var Kt = ce.extend({
            initialize: function() {
              (this._model = Ut(this._options)), (this._lastActive = []);
            },
            getTitle: function() {
              var e = this._options,
                t = e.callbacks,
                a = t.beforeTitle.apply(this, arguments),
                n = t.title.apply(this, arguments),
                i = t.afterTitle.apply(this, arguments),
                r = [];
              return (r = Bt((r = Bt((r = Bt(r, Jt(a))), Jt(n))), Jt(i)));
            },
            getBeforeBody: function() {
              return qt(this._options.callbacks.beforeBody.apply(this, arguments));
            },
            getBody: function(e, a) {
              var n = this,
                i = n._options.callbacks,
                r = [];
              return (
                le.each(e, function(e) {
                  var t = { before: [], lines: [], after: [] };
                  Bt(t.before, Jt(i.beforeLabel.call(n, e, a))),
                    Bt(t.lines, i.label.call(n, e, a)),
                    Bt(t.after, Jt(i.afterLabel.call(n, e, a))),
                    r.push(t);
                }),
                r
              );
            },
            getAfterBody: function() {
              return qt(this._options.callbacks.afterBody.apply(this, arguments));
            },
            getFooter: function() {
              var e = this._options.callbacks,
                t = e.beforeFooter.apply(this, arguments),
                a = e.footer.apply(this, arguments),
                n = e.afterFooter.apply(this, arguments),
                i = [];
              return (i = Bt((i = Bt((i = Bt(i, Jt(t))), Jt(a))), Jt(n)));
            },
            update: function(e) {
              var t,
                a,
                n,
                i,
                r,
                s,
                o,
                d,
                l,
                u,
                _ = this,
                h = _._options,
                m = _._model,
                c = (_._model = Ut(h)),
                f = _._active,
                M = _._data,
                p = { xAlign: m.xAlign, yAlign: m.yAlign },
                y = { x: m.x, y: m.y },
                g = { width: m.width, height: m.height },
                L = { x: m.caretX, y: m.caretY };
              if (f.length) {
                c.opacity = 1;
                var Y = [],
                  v = [];
                L = Vt[h.position].call(_, f, _._eventPosition);
                var k = [];
                for (t = 0, a = f.length; t < a; ++t)
                  k.push(
                    ((n = f[t]),
                    (u = l = d = r = i = void 0),
                    (i = n._xScale),
                    (r = n._yScale || n._scale),
                    (s = n._index),
                    (o = n._datasetIndex),
                    (d = n._chart.getDatasetMeta(o).controller),
                    (l = d._getIndexScale()),
                    (u = d._getValueScale()),
                    {
                      xLabel: i ? i.getLabelForIndex(s, o) : '',
                      yLabel: r ? r.getLabelForIndex(s, o) : '',
                      label: l ? '' + l.getLabelForIndex(s, o) : '',
                      value: u ? '' + u.getLabelForIndex(s, o) : '',
                      index: s,
                      datasetIndex: o,
                      x: n._model.x,
                      y: n._model.y,
                    }),
                  );
                h.filter &&
                  (k = k.filter(function(e) {
                    return h.filter(e, M);
                  })),
                  h.itemSort &&
                    (k = k.sort(function(e, t) {
                      return h.itemSort(e, t, M);
                    })),
                  le.each(k, function(e) {
                    Y.push(h.callbacks.labelColor.call(_, e, _._chart)),
                      v.push(h.callbacks.labelTextColor.call(_, e, _._chart));
                  }),
                  (c.title = _.getTitle(k, M)),
                  (c.beforeBody = _.getBeforeBody(k, M)),
                  (c.body = _.getBody(k, M)),
                  (c.afterBody = _.getAfterBody(k, M)),
                  (c.footer = _.getFooter(k, M)),
                  (c.x = L.x),
                  (c.y = L.y),
                  (c.caretPadding = h.caretPadding),
                  (c.labelColors = Y),
                  (c.labelTextColors = v),
                  (c.dataPoints = k),
                  (g = (function(e, t) {
                    var a = e._chart.ctx,
                      n = 2 * t.yPadding,
                      i = 0,
                      r = t.body,
                      s = r.reduce(function(e, t) {
                        return e + t.before.length + t.lines.length + t.after.length;
                      }, 0);
                    s += t.beforeBody.length + t.afterBody.length;
                    var o = t.title.length,
                      d = t.footer.length,
                      l = t.titleFontSize,
                      u = t.bodyFontSize,
                      _ = t.footerFontSize;
                    (n += o * l),
                      (n += o ? (o - 1) * t.titleSpacing : 0),
                      (n += o ? t.titleMarginBottom : 0),
                      (n += s * u),
                      (n += s ? (s - 1) * t.bodySpacing : 0),
                      (n += d ? t.footerMarginTop : 0),
                      (n += d * _),
                      (n += d ? (d - 1) * t.footerSpacing : 0);
                    function h(e) {
                      i = Math.max(i, a.measureText(e).width + m);
                    }
                    var m = 0;
                    return (
                      (a.font = le.fontString(l, t._titleFontStyle, t._titleFontFamily)),
                      le.each(t.title, h),
                      (a.font = le.fontString(u, t._bodyFontStyle, t._bodyFontFamily)),
                      le.each(t.beforeBody.concat(t.afterBody), h),
                      (m = t.displayColors ? u + 2 : 0),
                      le.each(r, function(e) {
                        le.each(e.before, h), le.each(e.lines, h), le.each(e.after, h);
                      }),
                      (m = 0),
                      (a.font = le.fontString(_, t._footerFontStyle, t._footerFontFamily)),
                      le.each(t.footer, h),
                      { width: (i += 2 * t.xPadding), height: n }
                    );
                  })(this, c)),
                  (p = (function(e, t) {
                    var a,
                      n,
                      i,
                      r,
                      s,
                      o = e._model,
                      d = e._chart,
                      l = e._chart.chartArea,
                      u = 'center',
                      _ = 'center';
                    o.y < t.height ? (_ = 'top') : o.y > d.height - t.height && (_ = 'bottom');
                    var h = (l.left + l.right) / 2,
                      m = (l.top + l.bottom) / 2;
                    n =
                      'center' === _
                        ? ((a = function(e) {
                            return e <= h;
                          }),
                          function(e) {
                            return h < e;
                          })
                        : ((a = function(e) {
                            return e <= t.width / 2;
                          }),
                          function(e) {
                            return e >= d.width - t.width / 2;
                          });
                    (i = function(e) {
                      return e + t.width + o.caretSize + o.caretPadding > d.width;
                    }),
                      (r = function(e) {
                        return e - t.width - o.caretSize - o.caretPadding < 0;
                      }),
                      (s = function(e) {
                        return e <= m ? 'top' : 'bottom';
                      }),
                      a(o.x)
                        ? ((u = 'left'), i(o.x) && ((u = 'center'), (_ = s(o.y))))
                        : n(o.x) && ((u = 'right'), r(o.x) && ((u = 'center'), (_ = s(o.y))));
                    var c = e._options;
                    return { xAlign: c.xAlign ? c.xAlign : u, yAlign: c.yAlign ? c.yAlign : _ };
                  })(this, g)),
                  (y = (function(e, t, a, n) {
                    var i = e.x,
                      r = e.y,
                      s = e.caretSize,
                      o = e.caretPadding,
                      d = e.cornerRadius,
                      l = a.xAlign,
                      u = a.yAlign,
                      _ = s + o,
                      h = d + o;
                    'right' === l
                      ? (i -= t.width)
                      : 'center' === l &&
                        ((i -= t.width / 2) + t.width > n.width && (i = n.width - t.width),
                        i < 0 && (i = 0));
                    'top' === u ? (r += _) : (r -= 'bottom' === u ? t.height + _ : t.height / 2);
                    'center' === u
                      ? 'left' === l
                        ? (i += _)
                        : 'right' === l && (i -= _)
                      : 'left' === l
                      ? (i -= h)
                      : 'right' === l && (i += h);
                    return { x: i, y: r };
                  })(c, g, p, _._chart));
              } else c.opacity = 0;
              return (
                (c.xAlign = p.xAlign),
                (c.yAlign = p.yAlign),
                (c.x = y.x),
                (c.y = y.y),
                (c.width = g.width),
                (c.height = g.height),
                (c.caretX = L.x),
                (c.caretY = L.y),
                (_._model = c),
                e && h.custom && h.custom.call(_, c),
                _
              );
            },
            drawCaret: function(e, t) {
              var a = this._chart.ctx,
                n = this._view,
                i = this.getCaretPosition(e, t, n);
              a.lineTo(i.x1, i.y1), a.lineTo(i.x2, i.y2), a.lineTo(i.x3, i.y3);
            },
            getCaretPosition: function(e, t, a) {
              var n,
                i,
                r,
                s,
                o,
                d,
                l = a.caretSize,
                u = a.cornerRadius,
                _ = a.xAlign,
                h = a.yAlign,
                m = e.x,
                c = e.y,
                f = t.width,
                M = t.height;
              if ('center' === h)
                (o = c + M / 2),
                  (d =
                    'left' === _
                      ? ((i = (n = m) - l), (r = n), (s = o + l), o - l)
                      : ((i = (n = m + f) + l), (r = n), (s = o - l), o + l));
              else if (
                ((r =
                  ((n =
                    'left' === _
                      ? (i = m + u + l) - l
                      : 'right' === _
                      ? (i = m + f - u - l) - l
                      : (i = a.caretX) - l),
                  i + l)),
                'top' === h)
              )
                (o = (s = c) - l), (d = s);
              else {
                (o = (s = c + M) + l), (d = s);
                var p = r;
                (r = n), (n = p);
              }
              return { x1: n, x2: i, x3: r, y1: s, y2: o, y3: d };
            },
            drawTitle: function(e, t, a) {
              var n = t.title;
              if (n.length) {
                (e.x = Gt(t, t._titleAlign)),
                  (a.textAlign = t._titleAlign),
                  (a.textBaseline = 'top');
                var i,
                  r,
                  s = t.titleFontSize,
                  o = t.titleSpacing;
                for (
                  a.fillStyle = t.titleFontColor,
                    a.font = le.fontString(s, t._titleFontStyle, t._titleFontFamily),
                    i = 0,
                    r = n.length;
                  i < r;
                  ++i
                )
                  a.fillText(n[i], e.x, e.y),
                    (e.y += s + o),
                    i + 1 === n.length && (e.y += t.titleMarginBottom - o);
              }
            },
            drawBody: function(a, n, i) {
              var r,
                s = n.bodyFontSize,
                t = n.bodySpacing,
                e = n._bodyAlign,
                o = n.body,
                d = n.displayColors,
                l = n.labelColors,
                u = 0,
                _ = d ? Gt(n, 'left') : 0;
              (i.textAlign = e),
                (i.textBaseline = 'top'),
                (i.font = le.fontString(s, n._bodyFontStyle, n._bodyFontFamily)),
                (a.x = Gt(n, e));
              var h = function(e) {
                i.fillText(e, a.x + u, a.y), (a.y += s + t);
              };
              (i.fillStyle = n.bodyFontColor),
                le.each(n.beforeBody, h),
                (u = d && 'right' !== e ? ('center' === e ? s / 2 + 1 : s + 2) : 0),
                le.each(o, function(e, t) {
                  (r = n.labelTextColors[t]),
                    (i.fillStyle = r),
                    le.each(e.before, h),
                    le.each(e.lines, function(e) {
                      d &&
                        ((i.fillStyle = n.legendColorBackground),
                        i.fillRect(_, a.y, s, s),
                        (i.lineWidth = 1),
                        (i.strokeStyle = l[t].borderColor),
                        i.strokeRect(_, a.y, s, s),
                        (i.fillStyle = l[t].backgroundColor),
                        i.fillRect(_ + 1, a.y + 1, s - 2, s - 2),
                        (i.fillStyle = r)),
                        h(e);
                    }),
                    le.each(e.after, h);
                }),
                (u = 0),
                le.each(n.afterBody, h),
                (a.y -= t);
            },
            drawFooter: function(t, a, n) {
              var e = a.footer;
              e.length &&
                ((t.x = Gt(a, a._footerAlign)),
                (t.y += a.footerMarginTop),
                (n.textAlign = a._footerAlign),
                (n.textBaseline = 'top'),
                (n.fillStyle = a.footerFontColor),
                (n.font = le.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily)),
                le.each(e, function(e) {
                  n.fillText(e, t.x, t.y), (t.y += a.footerFontSize + a.footerSpacing);
                }));
            },
            drawBackground: function(e, t, a, n) {
              (a.fillStyle = t.backgroundColor),
                (a.strokeStyle = t.borderColor),
                (a.lineWidth = t.borderWidth);
              var i = t.xAlign,
                r = t.yAlign,
                s = e.x,
                o = e.y,
                d = n.width,
                l = n.height,
                u = t.cornerRadius;
              a.beginPath(),
                a.moveTo(s + u, o),
                'top' === r && this.drawCaret(e, n),
                a.lineTo(s + d - u, o),
                a.quadraticCurveTo(s + d, o, s + d, o + u),
                'center' === r && 'right' === i && this.drawCaret(e, n),
                a.lineTo(s + d, o + l - u),
                a.quadraticCurveTo(s + d, o + l, s + d - u, o + l),
                'bottom' === r && this.drawCaret(e, n),
                a.lineTo(s + u, o + l),
                a.quadraticCurveTo(s, o + l, s, o + l - u),
                'center' === r && 'left' === i && this.drawCaret(e, n),
                a.lineTo(s, o + u),
                a.quadraticCurveTo(s, o, s + u, o),
                a.closePath(),
                a.fill(),
                0 < t.borderWidth && a.stroke();
            },
            draw: function() {
              var e = this._chart.ctx,
                t = this._view;
              if (0 !== t.opacity) {
                var a = { width: t.width, height: t.height },
                  n = { x: t.x, y: t.y },
                  i = Math.abs(t.opacity < 0.001) ? 0 : t.opacity,
                  r =
                    t.title.length ||
                    t.beforeBody.length ||
                    t.body.length ||
                    t.afterBody.length ||
                    t.footer.length;
                this._options.enabled &&
                  r &&
                  (e.save(),
                  (e.globalAlpha = i),
                  this.drawBackground(n, t, e, a),
                  (n.y += t.yPadding),
                  this.drawTitle(n, t, e),
                  this.drawBody(n, t, e),
                  this.drawFooter(n, t, e),
                  e.restore());
              }
            },
            handleEvent: function(e) {
              var t = this,
                a = t._options,
                n = !1;
              return (
                (t._lastActive = t._lastActive || []),
                'mouseout' === e.type
                  ? (t._active = [])
                  : (t._active = t._chart.getElementsAtEventForMode(e, a.mode, a)),
                (n = !le.arrayEquals(t._active, t._lastActive)) &&
                  ((t._lastActive = t._active),
                  (a.enabled || a.custom) &&
                    ((t._eventPosition = { x: e.x, y: e.y }), t.update(!0), t.pivot())),
                n
              );
            },
          }),
          Zt = Vt,
          $t = Kt;
        $t.positioners = Zt;
        var Xt = le.valueOrDefault;
        function Qt() {
          return le.merge({}, [].slice.call(arguments), {
            merger: function(e, t, a, n) {
              if ('xAxes' === e || 'yAxes' === e) {
                var i,
                  r,
                  s,
                  o = a[e].length;
                for (t[e] || (t[e] = []), i = 0; i < o; ++i)
                  (s = a[e][i]),
                    (r = Xt(s.type, 'xAxes' === e ? 'category' : 'linear')),
                    i >= t[e].length && t[e].push({}),
                    !t[e][i].type || (s.type && s.type !== t[e][i].type)
                      ? le.merge(t[e][i], [Rt.getScaleDefaults(r), s])
                      : le.merge(t[e][i], s);
              } else le._merger(e, t, a, n);
            },
          });
        }
        function ea() {
          return le.merge({}, [].slice.call(arguments), {
            merger: function(e, t, a, n) {
              var i = t[e] || {},
                r = a[e];
              'scales' === e
                ? (t[e] = Qt(i, r))
                : 'scale' === e
                ? (t[e] = le.merge(i, [Rt.getScaleDefaults(r.type), r]))
                : le._merger(e, t, a, n);
            },
          });
        }
        function ta(e) {
          return 'top' === e || 'bottom' === e;
        }
        se._set('global', {
          elements: {},
          events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
          hover: { onHover: null, mode: 'nearest', intersect: !0, animationDuration: 400 },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var aa = function(e, t) {
          return this.construct(e, t), this;
        };
        le.extend(aa.prototype, {
          construct: function(e, t) {
            var a = this;
            t = (function(e) {
              var t = ((e = e || {}).data = e.data || {});
              return (
                (t.datasets = t.datasets || []),
                (t.labels = t.labels || []),
                (e.options = ea(se.global, se[e.type], e.options || {})),
                e
              );
            })(t);
            var n = Et.acquireContext(e, t),
              i = n && n.canvas,
              r = i && i.height,
              s = i && i.width;
            (a.id = le.uid()),
              (a.ctx = n),
              (a.canvas = i),
              (a.config = t),
              (a.width = s),
              (a.height = r),
              (a.aspectRatio = r ? s / r : null),
              (a.options = t.options),
              (a._bufferedRender = !1),
              ((a.chart = a).controller = a),
              (aa.instances[a.id] = a),
              Object.defineProperty(a, 'data', {
                get: function() {
                  return a.config.data;
                },
                set: function(e) {
                  a.config.data = e;
                },
              }),
              n && i
                ? (a.initialize(), a.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item",
                  );
          },
          initialize: function() {
            var e = this;
            return (
              zt.notify(e, 'beforeInit'),
              le.retinaScale(e, e.options.devicePixelRatio),
              e.bindEvents(),
              e.options.responsive && e.resize(!0),
              e.ensureScalesHaveIDs(),
              e.buildOrUpdateScales(),
              e.initToolTip(),
              zt.notify(e, 'afterInit'),
              e
            );
          },
          clear: function() {
            return le.canvas.clear(this), this;
          },
          stop: function() {
            return pe.cancelAnimation(this), this;
          },
          resize: function(e) {
            var t = this,
              a = t.options,
              n = t.canvas,
              i = (a.maintainAspectRatio && t.aspectRatio) || null,
              r = Math.max(0, Math.floor(le.getMaximumWidth(n))),
              s = Math.max(0, Math.floor(i ? r / i : le.getMaximumHeight(n)));
            if (
              (t.width !== r || t.height !== s) &&
              ((n.width = t.width = r),
              (n.height = t.height = s),
              (n.style.width = r + 'px'),
              (n.style.height = s + 'px'),
              le.retinaScale(t, a.devicePixelRatio),
              !e)
            ) {
              var o = { width: r, height: s };
              zt.notify(t, 'resize', [o]),
                a.onResize && a.onResize(t, o),
                t.stop(),
                t.update({ duration: a.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function() {
            var e = this.options,
              t = e.scales || {},
              a = e.scale;
            le.each(t.xAxes, function(e, t) {
              e.id = e.id || 'x-axis-' + t;
            }),
              le.each(t.yAxes, function(e, t) {
                e.id = e.id || 'y-axis-' + t;
              }),
              a && (a.id = a.id || 'scale');
          },
          buildOrUpdateScales: function() {
            var s = this,
              e = s.options,
              o = s.scales || {},
              t = [],
              d = Object.keys(o).reduce(function(e, t) {
                return (e[t] = !1), e;
              }, {});
            e.scales &&
              (t = t.concat(
                (e.scales.xAxes || []).map(function(e) {
                  return { options: e, dtype: 'category', dposition: 'bottom' };
                }),
                (e.scales.yAxes || []).map(function(e) {
                  return { options: e, dtype: 'linear', dposition: 'left' };
                }),
              )),
              e.scale &&
                t.push({
                  options: e.scale,
                  dtype: 'radialLinear',
                  isDefault: !0,
                  dposition: 'chartArea',
                }),
              le.each(t, function(e) {
                var t = e.options,
                  a = t.id,
                  n = Xt(t.type, e.dtype);
                ta(t.position) !== ta(e.dposition) && (t.position = e.dposition), (d[a] = !0);
                var i = null;
                if (a in o && o[a].type === n)
                  ((i = o[a]).options = t), (i.ctx = s.ctx), (i.chart = s);
                else {
                  var r = Rt.getScaleConstructor(n);
                  if (!r) return;
                  (i = new r({ id: a, type: n, options: t, ctx: s.ctx, chart: s })), (o[i.id] = i);
                }
                i.mergeTicksOptions(), e.isDefault && (s.scale = i);
              }),
              le.each(d, function(e, t) {
                e || delete o[t];
              }),
              (s.scales = o),
              Rt.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function() {
            var r = this,
              s = [];
            return (
              le.each(
                r.data.datasets,
                function(e, t) {
                  var a = r.getDatasetMeta(t),
                    n = e.type || r.config.type;
                  if (
                    (a.type && a.type !== n && (r.destroyDatasetMeta(t), (a = r.getDatasetMeta(t))),
                    (a.type = n),
                    a.controller)
                  )
                    a.controller.updateIndex(t), a.controller.linkScales();
                  else {
                    var i = lt[a.type];
                    if (void 0 === i) throw new Error('"' + a.type + '" is not a chart type.');
                    (a.controller = new i(r, t)), s.push(a.controller);
                  }
                },
                r,
              ),
              s
            );
          },
          resetElements: function() {
            var a = this;
            le.each(
              a.data.datasets,
              function(e, t) {
                a.getDatasetMeta(t).controller.reset();
              },
              a,
            );
          },
          reset: function() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function(e) {
            var a = this;
            if (
              ((e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] }),
              (function(t) {
                var e = t.options;
                le.each(t.scales, function(e) {
                  Lt.removeBox(t, e);
                }),
                  (e = ea(se.global, se[t.config.type], e)),
                  (t.options = t.config.options = e),
                  t.ensureScalesHaveIDs(),
                  t.buildOrUpdateScales(),
                  (t.tooltip._options = e.tooltips),
                  t.tooltip.initialize();
              })(a),
              zt._invalidate(a),
              !1 !== zt.notify(a, 'beforeUpdate'))
            ) {
              a.tooltip._data = a.data;
              var t = a.buildOrUpdateControllers();
              le.each(
                a.data.datasets,
                function(e, t) {
                  a.getDatasetMeta(t).controller.buildOrUpdateElements();
                },
                a,
              ),
                a.updateLayout(),
                a.options.animation &&
                  a.options.animation.duration &&
                  le.each(t, function(e) {
                    e.reset();
                  }),
                a.updateDatasets(),
                a.tooltip.initialize(),
                (a.lastActive = []),
                zt.notify(a, 'afterUpdate'),
                a._bufferedRender
                  ? (a._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy })
                  : a.render(e);
            }
          },
          updateLayout: function() {
            !1 !== zt.notify(this, 'beforeLayout') &&
              (Lt.update(this, this.width, this.height),
              zt.notify(this, 'afterScaleUpdate'),
              zt.notify(this, 'afterLayout'));
          },
          updateDatasets: function() {
            if (!1 !== zt.notify(this, 'beforeDatasetsUpdate')) {
              for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
              zt.notify(this, 'afterDatasetsUpdate');
            }
          },
          updateDataset: function(e) {
            var t = this.getDatasetMeta(e),
              a = { meta: t, index: e };
            !1 !== zt.notify(this, 'beforeDatasetUpdate', [a]) &&
              (t.controller.update(), zt.notify(this, 'afterDatasetUpdate', [a]));
          },
          render: function(e) {
            var t = this;
            (e && 'object' == typeof e) || (e = { duration: e, lazy: arguments[1] });
            var a = t.options.animation,
              n = Xt(e.duration, a && a.duration),
              i = e.lazy;
            if (!1 !== zt.notify(t, 'beforeRender')) {
              var r = function(e) {
                zt.notify(t, 'afterRender'), le.callback(a && a.onComplete, [e], t);
              };
              if (a && n) {
                var s = new Me({
                  numSteps: n / 16.66,
                  easing: e.easing || a.easing,
                  render: function(e, t) {
                    var a = le.easing.effects[t.easing],
                      n = t.currentStep,
                      i = n / t.numSteps;
                    e.draw(a(i), i, n);
                  },
                  onAnimationProgress: a.onProgress,
                  onAnimationComplete: r,
                });
                pe.addAnimation(t, s, n, i);
              } else t.draw(), r(new Me({ numSteps: 0, chart: t }));
              return t;
            }
          },
          draw: function(e) {
            var t = this;
            t.clear(),
              le.isNullOrUndef(e) && (e = 1),
              t.transition(e),
              t.width <= 0 ||
                t.height <= 0 ||
                (!1 !== zt.notify(t, 'beforeDraw', [e]) &&
                  (le.each(
                    t.boxes,
                    function(e) {
                      e.draw(t.chartArea);
                    },
                    t,
                  ),
                  t.drawDatasets(e),
                  t._drawTooltip(e),
                  zt.notify(t, 'afterDraw', [e])));
          },
          transition: function(e) {
            for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t)
              this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
            this.tooltip.transition(e);
          },
          drawDatasets: function(e) {
            if (!1 !== zt.notify(this, 'beforeDatasetsDraw', [e])) {
              for (var t = (this.data.datasets || []).length - 1; 0 <= t; --t)
                this.isDatasetVisible(t) && this.drawDataset(t, e);
              zt.notify(this, 'afterDatasetsDraw', [e]);
            }
          },
          drawDataset: function(e, t) {
            var a = this.getDatasetMeta(e),
              n = { meta: a, index: e, easingValue: t };
            !1 !== zt.notify(this, 'beforeDatasetDraw', [n]) &&
              (a.controller.draw(t), zt.notify(this, 'afterDatasetDraw', [n]));
          },
          _drawTooltip: function(e) {
            var t = this.tooltip,
              a = { tooltip: t, easingValue: e };
            !1 !== zt.notify(this, 'beforeTooltipDraw', [a]) &&
              (t.draw(), zt.notify(this, 'afterTooltipDraw', [a]));
          },
          getElementAtEvent: function(e) {
            return Mt.modes.single(this, e);
          },
          getElementsAtEvent: function(e) {
            return Mt.modes.label(this, e, { intersect: !0 });
          },
          getElementsAtXAxis: function(e) {
            return Mt.modes['x-axis'](this, e, { intersect: !0 });
          },
          getElementsAtEventForMode: function(e, t, a) {
            var n = Mt.modes[t];
            return 'function' == typeof n ? n(this, e, a) : [];
          },
          getDatasetAtEvent: function(e) {
            return Mt.modes.dataset(this, e, { intersect: !0 });
          },
          getDatasetMeta: function(e) {
            var t = this.data.datasets[e];
            t._meta || (t._meta = {});
            var a = t._meta[this.id];
            return (a =
              a ||
              (t._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
              }));
          },
          getVisibleDatasetCount: function() {
            for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t)
              this.isDatasetVisible(t) && e++;
            return e;
          },
          isDatasetVisible: function(e) {
            var t = this.getDatasetMeta(e);
            return 'boolean' == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden;
          },
          generateLegend: function() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function(e) {
            var t = this.id,
              a = this.data.datasets[e],
              n = a._meta && a._meta[t];
            n && (n.controller.destroy(), delete a._meta[t]);
          },
          destroy: function() {
            var e,
              t,
              a = this,
              n = a.canvas;
            for (a.stop(), e = 0, t = a.data.datasets.length; e < t; ++e) a.destroyDatasetMeta(e);
            n &&
              (a.unbindEvents(),
              le.canvas.clear(a),
              Et.releaseContext(a.ctx),
              (a.canvas = null),
              (a.ctx = null)),
              zt.notify(a, 'destroy'),
              delete aa.instances[a.id];
          },
          toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function() {
            this.tooltip = new $t(
              {
                _chart: this,
                _chartInstance: this,
                _data: this.data,
                _options: this.options.tooltips,
              },
              this,
            );
          },
          bindEvents: function() {
            var t = this,
              a = (t._listeners = {}),
              n = function() {
                t.eventHandler.apply(t, arguments);
              };
            le.each(t.options.events, function(e) {
              Et.addEventListener(t, e, n), (a[e] = n);
            }),
              t.options.responsive &&
                ((n = function() {
                  t.resize();
                }),
                Et.addEventListener(t, 'resize', n),
                (a.resize = n));
          },
          unbindEvents: function() {
            var a = this,
              e = a._listeners;
            e &&
              (delete a._listeners,
              le.each(e, function(e, t) {
                Et.removeEventListener(a, t, e);
              }));
          },
          updateHoverStyle: function(e, t, a) {
            var n,
              i,
              r,
              s = a ? 'setHoverStyle' : 'removeHoverStyle';
            for (i = 0, r = e.length; i < r; ++i)
              (n = e[i]) && this.getDatasetMeta(n._datasetIndex).controller[s](n);
          },
          eventHandler: function(e) {
            var t = this,
              a = t.tooltip;
            if (!1 !== zt.notify(t, 'beforeEvent', [e])) {
              (t._bufferedRender = !0), (t._bufferedRequest = null);
              var n = t.handleEvent(e);
              a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)),
                zt.notify(t, 'afterEvent', [e]);
              var i = t._bufferedRequest;
              return (
                i
                  ? t.render(i)
                  : n &&
                    !t.animating &&
                    (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })),
                (t._bufferedRender = !1),
                (t._bufferedRequest = null),
                t
              );
            }
          },
          handleEvent: function(e) {
            var t = this,
              a = t.options || {},
              n = a.hover,
              i = !1;
            return (
              (t.lastActive = t.lastActive || []),
              'mouseout' === e.type
                ? (t.active = [])
                : (t.active = t.getElementsAtEventForMode(e, n.mode, n)),
              le.callback(a.onHover || a.hover.onHover, [e.native, t.active], t),
              ('mouseup' !== e.type && 'click' !== e.type) ||
                (a.onClick && a.onClick.call(t, e.native, t.active)),
              t.lastActive.length && t.updateHoverStyle(t.lastActive, n.mode, !1),
              t.active.length && n.mode && t.updateHoverStyle(t.active, n.mode, !0),
              (i = !le.arrayEquals(t.active, t.lastActive)),
              (t.lastActive = t.active),
              i
            );
          },
        }),
          (aa.instances = {});
        var na = aa;
        ((aa.Controller = aa).types = {}), (le.configMerge = ea), (le.scaleMerge = Qt);
        function ia() {
          throw new Error(
            'This method is not implemented: either no adapter can be found or an incomplete integration was provided.',
          );
        }
        function ra(e) {
          this.options = e || {};
        }
        le.extend(ra.prototype, {
          formats: ia,
          parse: ia,
          format: ia,
          add: ia,
          diff: ia,
          startOf: ia,
          endOf: ia,
          _create: function(e) {
            return e;
          },
        }),
          (ra.override = function(e) {
            le.extend(ra.prototype, e);
          });
        var sa = { _date: ra },
          oa = {
            formatters: {
              values: function(e) {
                return le.isArray(e) ? e : '' + e;
              },
              linear: function(e, t, a) {
                var n = 3 < a.length ? a[2] - a[1] : a[1] - a[0];
                1 < Math.abs(n) && e !== Math.floor(e) && (n = e - Math.floor(e));
                var i = le.log10(Math.abs(n)),
                  r = '';
                if (0 !== e) {
                  var s = Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1]));
                  if (s < 1e-4) {
                    var o = le.log10(Math.abs(e));
                    r = e.toExponential(Math.floor(o) - Math.floor(i));
                  } else {
                    var d = -1 * Math.floor(i);
                    (d = Math.max(Math.min(d, 20), 0)), (r = e.toFixed(d));
                  }
                } else r = '0';
                return r;
              },
              logarithmic: function(e, t, a) {
                var n = e / Math.pow(10, Math.floor(le.log10(e)));
                return 0 === e
                  ? '0'
                  : 1 == n || 2 == n || 5 == n || 0 === t || t === a.length - 1
                  ? e.toExponential()
                  : '';
              },
            },
          },
          da = le.valueOrDefault,
          la = le.valueAtIndexOrDefault;
        function ua(e) {
          var t,
            a,
            n = [];
          for (t = 0, a = e.length; t < a; ++t) n.push(e[t].label);
          return n;
        }
        function _a(e, t, a) {
          return le.isArray(t) ? le.longestText(e, a, t) : e.measureText(t).width;
        }
        se._set('scale', {
          display: !0,
          position: 'left',
          offset: !1,
          gridLines: {
            display: !0,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: 'rgba(0,0,0,0.25)',
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: { display: !1, labelString: '', padding: { top: 4, bottom: 4 } },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: oa.formatters.values,
            minor: {},
            major: {},
          },
        });
        var ha = ce.extend({
            getPadding: function() {
              return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
              };
            },
            getTicks: function() {
              return this._ticks;
            },
            mergeTicksOptions: function() {
              var e = this.options.ticks;
              for (var t in (!1 === e.minor && (e.minor = { display: !1 }),
              !1 === e.major && (e.major = { display: !1 }),
              e))
                'major' !== t &&
                  'minor' !== t &&
                  (void 0 === e.minor[t] && (e.minor[t] = e[t]),
                  void 0 === e.major[t] && (e.major[t] = e[t]));
            },
            beforeUpdate: function() {
              le.callback(this.options.beforeUpdate, [this]);
            },
            update: function(e, t, a) {
              var n,
                i,
                r,
                s,
                o,
                d,
                l = this;
              for (
                l.beforeUpdate(),
                  l.maxWidth = e,
                  l.maxHeight = t,
                  l.margins = le.extend({ left: 0, right: 0, top: 0, bottom: 0 }, a),
                  l._maxLabelLines = 0,
                  l.longestLabelWidth = 0,
                  l.longestTextCache = l.longestTextCache || {},
                  l.beforeSetDimensions(),
                  l.setDimensions(),
                  l.afterSetDimensions(),
                  l.beforeDataLimits(),
                  l.determineDataLimits(),
                  l.afterDataLimits(),
                  l.beforeBuildTicks(),
                  o = l.buildTicks() || [],
                  o = l.afterBuildTicks(o) || o,
                  l.beforeTickToLabelConversion(),
                  r = l.convertTicksToLabels(o) || l.ticks,
                  l.afterTickToLabelConversion(),
                  l.ticks = r,
                  n = 0,
                  i = r.length;
                n < i;
                ++n
              )
                (s = r[n]), (d = o[n]) ? (d.label = s) : o.push((d = { label: s, major: !1 }));
              return (
                (l._ticks = o),
                l.beforeCalculateTickRotation(),
                l.calculateTickRotation(),
                l.afterCalculateTickRotation(),
                l.beforeFit(),
                l.fit(),
                l.afterFit(),
                l.afterUpdate(),
                l.minSize
              );
            },
            afterUpdate: function() {
              le.callback(this.options.afterUpdate, [this]);
            },
            beforeSetDimensions: function() {
              le.callback(this.options.beforeSetDimensions, [this]);
            },
            setDimensions: function() {
              var e = this;
              e.isHorizontal()
                ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
                : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
                (e.paddingLeft = 0),
                (e.paddingTop = 0),
                (e.paddingRight = 0),
                (e.paddingBottom = 0);
            },
            afterSetDimensions: function() {
              le.callback(this.options.afterSetDimensions, [this]);
            },
            beforeDataLimits: function() {
              le.callback(this.options.beforeDataLimits, [this]);
            },
            determineDataLimits: le.noop,
            afterDataLimits: function() {
              le.callback(this.options.afterDataLimits, [this]);
            },
            beforeBuildTicks: function() {
              le.callback(this.options.beforeBuildTicks, [this]);
            },
            buildTicks: le.noop,
            afterBuildTicks: function(e) {
              return le.isArray(e) && e.length
                ? le.callback(this.options.afterBuildTicks, [this, e])
                : ((this.ticks =
                    le.callback(this.options.afterBuildTicks, [this, this.ticks]) || this.ticks),
                  e);
            },
            beforeTickToLabelConversion: function() {
              le.callback(this.options.beforeTickToLabelConversion, [this]);
            },
            convertTicksToLabels: function() {
              var e = this.options.ticks;
              this.ticks = this.ticks.map(e.userCallback || e.callback, this);
            },
            afterTickToLabelConversion: function() {
              le.callback(this.options.afterTickToLabelConversion, [this]);
            },
            beforeCalculateTickRotation: function() {
              le.callback(this.options.beforeCalculateTickRotation, [this]);
            },
            calculateTickRotation: function() {
              var e = this,
                t = e.ctx,
                a = e.options.ticks,
                n = ua(e._ticks),
                i = le.options._parseFont(a);
              t.font = i.string;
              var r = a.minRotation || 0;
              if (n.length && e.options.display && e.isHorizontal())
                for (
                  var s,
                    o = le.longestText(t, i.string, n, e.longestTextCache),
                    d = o,
                    l = e.getPixelForTick(1) - e.getPixelForTick(0) - 6;
                  l < d && r < a.maxRotation;

                ) {
                  var u = le.toRadians(r);
                  if (((s = Math.cos(u)), Math.sin(u) * o > e.maxHeight)) {
                    r--;
                    break;
                  }
                  r++, (d = s * o);
                }
              e.labelRotation = r;
            },
            afterCalculateTickRotation: function() {
              le.callback(this.options.afterCalculateTickRotation, [this]);
            },
            beforeFit: function() {
              le.callback(this.options.beforeFit, [this]);
            },
            fit: function() {
              var e = this,
                t = (e.minSize = { width: 0, height: 0 }),
                a = ua(e._ticks),
                n = e.options,
                i = n.ticks,
                r = n.scaleLabel,
                s = n.gridLines,
                o = e._isVisible(),
                d = n.position,
                l = e.isHorizontal(),
                u = le.options._parseFont,
                _ = u(i),
                h = n.gridLines.tickMarkLength;
              if (
                ((t.width = l
                  ? e.isFullWidth()
                    ? e.maxWidth - e.margins.left - e.margins.right
                    : e.maxWidth
                  : o && s.drawTicks
                  ? h
                  : 0),
                (t.height = l ? (o && s.drawTicks ? h : 0) : e.maxHeight),
                r.display && o)
              ) {
                var m = u(r),
                  c = le.options.toPadding(r.padding),
                  f = m.lineHeight + c.height;
                l ? (t.height += f) : (t.width += f);
              }
              if (i.display && o) {
                var M = le.longestText(e.ctx, _.string, a, e.longestTextCache),
                  p = le.numberOfLabelLines(a),
                  y = 0.5 * _.size,
                  g = e.options.ticks.padding;
                if (((e._maxLabelLines = p), (e.longestLabelWidth = M), l)) {
                  var L = le.toRadians(e.labelRotation),
                    Y = Math.cos(L),
                    v = Math.sin(L),
                    k = v * M + _.lineHeight * p + y;
                  (t.height = Math.min(e.maxHeight, t.height + k + g)), (e.ctx.font = _.string);
                  var b,
                    D,
                    w = _a(e.ctx, a[0], _.string),
                    T = _a(e.ctx, a[a.length - 1], _.string),
                    x = e.getPixelForTick(0) - e.left,
                    S = e.right - e.getPixelForTick(a.length - 1);
                  (D =
                    0 !== e.labelRotation
                      ? ((b = 'bottom' === d ? Y * w : Y * y), 'bottom' === d ? Y * y : Y * T)
                      : ((b = w / 2), T / 2)),
                    (e.paddingLeft = Math.max(b - x, 0) + 3),
                    (e.paddingRight = Math.max(D - S, 0) + 3);
                } else
                  i.mirror ? (M = 0) : (M += g + y),
                    (t.width = Math.min(e.maxWidth, t.width + M)),
                    (e.paddingTop = _.size / 2),
                    (e.paddingBottom = _.size / 2);
              }
              e.handleMargins(), (e.width = t.width), (e.height = t.height);
            },
            handleMargins: function() {
              var e = this;
              e.margins &&
                ((e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0)),
                (e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0)),
                (e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0)),
                (e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0)));
            },
            afterFit: function() {
              le.callback(this.options.afterFit, [this]);
            },
            isHorizontal: function() {
              return 'top' === this.options.position || 'bottom' === this.options.position;
            },
            isFullWidth: function() {
              return this.options.fullWidth;
            },
            getRightValue: function(e) {
              if (le.isNullOrUndef(e)) return NaN;
              if (('number' == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
              if (e)
                if (this.isHorizontal()) {
                  if (void 0 !== e.x) return this.getRightValue(e.x);
                } else if (void 0 !== e.y) return this.getRightValue(e.y);
              return e;
            },
            getLabelForIndex: le.noop,
            getPixelForValue: le.noop,
            getValueForPixel: le.noop,
            getPixelForTick: function(e) {
              var t = this,
                a = t.options.offset;
              if (t.isHorizontal()) {
                var n = t.width - (t.paddingLeft + t.paddingRight),
                  i = n / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                  r = i * e + t.paddingLeft;
                a && (r += i / 2);
                var s = t.left + r;
                return (s += t.isFullWidth() ? t.margins.left : 0);
              }
              var o = t.height - (t.paddingTop + t.paddingBottom);
              return t.top + e * (o / (t._ticks.length - 1));
            },
            getPixelForDecimal: function(e) {
              var t = this;
              if (t.isHorizontal()) {
                var a = t.width - (t.paddingLeft + t.paddingRight),
                  n = a * e + t.paddingLeft,
                  i = t.left + n;
                return (i += t.isFullWidth() ? t.margins.left : 0);
              }
              return t.top + e * t.height;
            },
            getBasePixel: function() {
              return this.getPixelForValue(this.getBaseValue());
            },
            getBaseValue: function() {
              var e = this.min,
                t = this.max;
              return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : 0 < e && 0 < t ? e : 0;
            },
            _autoSkip: function(e) {
              var t,
                a,
                n = this.isHorizontal(),
                i = this.options.ticks.minor,
                r = e.length,
                s = !1,
                o = i.maxTicksLimit,
                d = this._tickSize() * (r - 1),
                l = n
                  ? this.width - (this.paddingLeft + this.paddingRight)
                  : this.height - (this.paddingTop + this.PaddingBottom),
                u = [];
              for (
                l < d && (s = 1 + Math.floor(d / l)),
                  o < r && (s = Math.max(s, 1 + Math.floor(r / o))),
                  t = 0;
                t < r;
                t++
              )
                (a = e[t]), 1 < s && 0 < t % s && delete a.label, u.push(a);
              return u;
            },
            _tickSize: function() {
              var e = this.isHorizontal(),
                t = this.options.ticks.minor,
                a = le.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(a)),
                i = Math.abs(Math.sin(a)),
                r = t.autoSkipPadding || 0,
                s = this.longestLabelWidth + r || 0,
                o = le.options._parseFont(t),
                d = this._maxLabelLines * o.lineHeight + r || 0;
              return e ? (s * i < d * n ? s / n : d / i) : d * i < s * n ? d / n : s / i;
            },
            _isVisible: function() {
              var e,
                t,
                a,
                n = this.chart,
                i = this.options.display;
              if ('auto' !== i) return !!i;
              for (e = 0, t = n.data.datasets.length; e < t; ++e)
                if (
                  n.isDatasetVisible(e) &&
                  ((a = n.getDatasetMeta(e)).xAxisID === this.id || a.yAxisID === this.id)
                )
                  return !0;
              return !1;
            },
            draw: function(k) {
              var b = this,
                D = b.options;
              if (b._isVisible()) {
                var e,
                  w,
                  T,
                  x = b.chart,
                  s = b.ctx,
                  t = se.global,
                  a = t.defaultFontColor,
                  o = D.ticks.minor,
                  n = D.ticks.major || o,
                  S = D.gridLines,
                  i = D.scaleLabel,
                  H = D.position,
                  P = 0 !== b.labelRotation,
                  j = o.mirror,
                  O = b.isHorizontal(),
                  r = le.options._parseFont,
                  d = o.display && o.autoSkip ? b._autoSkip(b.getTicks()) : b.getTicks(),
                  l = da(o.fontColor, a),
                  u = r(o),
                  A = u.lineHeight,
                  _ = da(n.fontColor, a),
                  h = r(n),
                  W = o.padding,
                  F = o.labelOffset,
                  C = S.drawTicks ? S.tickMarkLength : 0,
                  m = da(i.fontColor, a),
                  c = r(i),
                  f = le.options.toPadding(i.padding),
                  I = le.toRadians(b.labelRotation),
                  E = [],
                  z = S.drawBorder ? la(S.lineWidth, 0, 0) : 0,
                  R = le._alignPixel;
                T =
                  'top' === H
                    ? ((e = R(x, b.bottom, z)), (w = b.bottom - C), e - z / 2)
                    : 'bottom' === H
                    ? ((e = R(x, b.top, z)), (w = e + z / 2), b.top + C)
                    : 'left' === H
                    ? ((e = R(x, b.right, z)), (w = b.right - C), e - z / 2)
                    : ((e = R(x, b.left, z)), (w = e + z / 2), b.left + C);
                if (
                  (le.each(d, function(e, t) {
                    if (!le.isNullOrUndef(e.label)) {
                      var a,
                        n,
                        i,
                        r,
                        s,
                        o,
                        d,
                        l,
                        u,
                        _,
                        h,
                        m,
                        c,
                        f,
                        M,
                        p,
                        y = e.label;
                      r =
                        t === b.zeroLineIndex && D.offset === S.offsetGridLines
                          ? ((a = S.zeroLineWidth),
                            (n = S.zeroLineColor),
                            (i = S.zeroLineBorderDash || []),
                            S.zeroLineBorderDashOffset || 0)
                          : ((a = la(S.lineWidth, t)),
                            (n = la(S.color, t)),
                            (i = S.borderDash || []),
                            S.borderDashOffset || 0);
                      var g = le.isArray(y) ? y.length : 1,
                        L = (function(e, t, a) {
                          var n = e.getPixelForTick(t);
                          a &&
                            (1 === e.getTicks().length
                              ? (n -= e.isHorizontal()
                                  ? Math.max(n - e.left, e.right - n)
                                  : Math.max(n - e.top, e.bottom - n))
                              : (n -=
                                  0 === t
                                    ? (e.getPixelForTick(1) - n) / 2
                                    : (n - e.getPixelForTick(t - 1)) / 2));
                          return n;
                        })(b, t, S.offsetGridLines);
                      if (O) {
                        var Y = C + W;
                        L < b.left - 1e-7 && (n = 'rgba(0,0,0,0)'),
                          (s = d = u = h = R(x, L, a)),
                          (o = w),
                          (l = T),
                          (c = b.getPixelForTick(t) + F),
                          (f =
                            'top' === H
                              ? ((_ = R(x, k.top, z) + z / 2),
                                (m = k.bottom),
                                (M = ((P ? 1 : 0.5) - g) * A),
                                (p = P ? 'left' : 'center'),
                                b.bottom - Y)
                              : ((_ = k.top),
                                (m = R(x, k.bottom, z) - z / 2),
                                (M = (P ? 0 : 0.5) * A),
                                (p = P ? 'right' : 'center'),
                                b.top + Y));
                      } else {
                        var v = (j ? 0 : C) + W;
                        L < b.top - 1e-7 && (n = 'rgba(0,0,0,0)'),
                          (s = w),
                          (d = T),
                          (o = l = _ = m = R(x, L, a)),
                          (f = b.getPixelForTick(t) + F),
                          (M = ((1 - g) * A) / 2),
                          (c =
                            'left' === H
                              ? ((u = R(x, k.left, z) + z / 2),
                                (h = k.right),
                                (p = j ? 'left' : 'right'),
                                b.right - v)
                              : ((u = k.left),
                                (h = R(x, k.right, z) - z / 2),
                                (p = j ? 'right' : 'left'),
                                b.left + v));
                      }
                      E.push({
                        tx1: s,
                        ty1: o,
                        tx2: d,
                        ty2: l,
                        x1: u,
                        y1: _,
                        x2: h,
                        y2: m,
                        labelX: c,
                        labelY: f,
                        glWidth: a,
                        glColor: n,
                        glBorderDash: i,
                        glBorderDashOffset: r,
                        rotation: -1 * I,
                        label: y,
                        major: e.major,
                        textOffset: M,
                        textAlign: p,
                      });
                    }
                  }),
                  le.each(E, function(e) {
                    var t = e.glWidth,
                      a = e.glColor;
                    if (
                      (S.display &&
                        t &&
                        a &&
                        (s.save(),
                        (s.lineWidth = t),
                        (s.strokeStyle = a),
                        s.setLineDash &&
                          (s.setLineDash(e.glBorderDash),
                          (s.lineDashOffset = e.glBorderDashOffset)),
                        s.beginPath(),
                        S.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)),
                        S.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)),
                        s.stroke(),
                        s.restore()),
                      o.display)
                    ) {
                      s.save(),
                        s.translate(e.labelX, e.labelY),
                        s.rotate(e.rotation),
                        (s.font = e.major ? h.string : u.string),
                        (s.fillStyle = e.major ? _ : l),
                        (s.textBaseline = 'middle'),
                        (s.textAlign = e.textAlign);
                      var n = e.label,
                        i = e.textOffset;
                      if (le.isArray(n))
                        for (var r = 0; r < n.length; ++r) s.fillText('' + n[r], 0, i), (i += A);
                      else s.fillText(n, 0, i);
                      s.restore();
                    }
                  }),
                  i.display)
                ) {
                  var M,
                    p,
                    y = 0,
                    g = c.lineHeight / 2;
                  if (O)
                    (M = b.left + (b.right - b.left) / 2),
                      (p = 'bottom' === H ? b.bottom - g - f.bottom : b.top + g + f.top);
                  else {
                    var L = 'left' === H;
                    (M = L ? b.left + g + f.top : b.right - g - f.top),
                      (p = b.top + (b.bottom - b.top) / 2),
                      (y = L ? -0.5 * Math.PI : 0.5 * Math.PI);
                  }
                  s.save(),
                    s.translate(M, p),
                    s.rotate(y),
                    (s.textAlign = 'center'),
                    (s.textBaseline = 'middle'),
                    (s.fillStyle = m),
                    (s.font = c.string),
                    s.fillText(i.labelString, 0, 0),
                    s.restore();
                }
                if (z) {
                  var Y,
                    v,
                    N,
                    V,
                    B = z,
                    J = la(S.lineWidth, d.length - 1, 0);
                  O
                    ? ((Y = R(x, b.left, B) - B / 2), (v = R(x, b.right, J) + J / 2), (N = V = e))
                    : ((N = R(x, b.top, B) - B / 2), (V = R(x, b.bottom, J) + J / 2), (Y = v = e)),
                    (s.lineWidth = z),
                    (s.strokeStyle = la(S.color, 0)),
                    s.beginPath(),
                    s.moveTo(Y, N),
                    s.lineTo(v, V),
                    s.stroke();
                }
              }
            },
          }),
          ma = ha.extend({
            getLabels: function() {
              var e = this.chart.data;
              return (
                this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
              );
            },
            determineDataLimits: function() {
              var e,
                t = this,
                a = t.getLabels();
              (t.minIndex = 0),
                (t.maxIndex = a.length - 1),
                void 0 !== t.options.ticks.min &&
                  ((e = a.indexOf(t.options.ticks.min)), (t.minIndex = -1 !== e ? e : t.minIndex)),
                void 0 !== t.options.ticks.max &&
                  ((e = a.indexOf(t.options.ticks.max)), (t.maxIndex = -1 !== e ? e : t.maxIndex)),
                (t.min = a[t.minIndex]),
                (t.max = a[t.maxIndex]);
            },
            buildTicks: function() {
              var e = this.getLabels();
              this.ticks =
                0 === this.minIndex && this.maxIndex === e.length - 1
                  ? e
                  : e.slice(this.minIndex, this.maxIndex + 1);
            },
            getLabelForIndex: function(e, t) {
              var a = this.chart;
              return a.getDatasetMeta(t).controller._getValueScaleId() === this.id
                ? this.getRightValue(a.data.datasets[t].data[e])
                : this.ticks[e - this.minIndex];
            },
            getPixelForValue: function(e, t) {
              var a,
                n = this,
                i = n.options.offset,
                r = Math.max(n.maxIndex + 1 - n.minIndex - (i ? 0 : 1), 1);
              if (
                (null != e && (a = n.isHorizontal() ? e.x : e.y),
                void 0 !== a || (void 0 !== e && isNaN(t)))
              ) {
                var s = n.getLabels();
                e = a || e;
                var o = s.indexOf(e);
                t = -1 !== o ? o : t;
              }
              if (n.isHorizontal()) {
                var d = n.width / r,
                  l = d * (t - n.minIndex);
                return i && (l += d / 2), n.left + l;
              }
              var u = n.height / r,
                _ = u * (t - n.minIndex);
              return i && (_ += u / 2), n.top + _;
            },
            getPixelForTick: function(e) {
              return this.getPixelForValue(this.ticks[e], e + this.minIndex, null);
            },
            getValueForPixel: function(e) {
              var t = this.options.offset,
                a = Math.max(this._ticks.length - (t ? 0 : 1), 1),
                n = this.isHorizontal(),
                i = (n ? this.width : this.height) / a;
              return (
                (e -= n ? this.left : this.top),
                t && (e -= i / 2),
                (e <= 0 ? 0 : Math.round(e / i)) + this.minIndex
              );
            },
            getBasePixel: function() {
              return this.bottom;
            },
          }),
          ca = { position: 'bottom' };
        ma._defaults = ca;
        var fa = le.noop,
          Ma = le.isNullOrUndef;
        var pa = ha.extend({
            getRightValue: function(e) {
              return 'string' == typeof e ? +e : ha.prototype.getRightValue.call(this, e);
            },
            handleTickRangeOptions: function() {
              var e = this,
                t = e.options,
                a = t.ticks;
              if (a.beginAtZero) {
                var n = le.sign(e.min),
                  i = le.sign(e.max);
                n < 0 && i < 0 ? (e.max = 0) : 0 < n && 0 < i && (e.min = 0);
              }
              var r = void 0 !== a.min || void 0 !== a.suggestedMin,
                s = void 0 !== a.max || void 0 !== a.suggestedMax;
              void 0 !== a.min
                ? (e.min = a.min)
                : void 0 !== a.suggestedMin &&
                  (null === e.min
                    ? (e.min = a.suggestedMin)
                    : (e.min = Math.min(e.min, a.suggestedMin))),
                void 0 !== a.max
                  ? (e.max = a.max)
                  : void 0 !== a.suggestedMax &&
                    (null === e.max
                      ? (e.max = a.suggestedMax)
                      : (e.max = Math.max(e.max, a.suggestedMax))),
                r != s && e.min >= e.max && (r ? (e.max = e.min + 1) : (e.min = e.max - 1)),
                e.min === e.max && (e.max++, a.beginAtZero || e.min--);
            },
            getTickLimit: function() {
              var e,
                t = this.options.ticks,
                a = t.stepSize,
                n = t.maxTicksLimit;
              return (
                a
                  ? (e = Math.ceil(this.max / a) - Math.floor(this.min / a) + 1)
                  : ((e = this._computeTickLimit()), (n = n || 11)),
                n && (e = Math.min(n, e)),
                e
              );
            },
            _computeTickLimit: function() {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: fa,
            buildTicks: function() {
              var e = this,
                t = e.options,
                a = t.ticks,
                n = e.getTickLimit(),
                i = {
                  maxTicks: (n = Math.max(2, n)),
                  min: a.min,
                  max: a.max,
                  precision: a.precision,
                  stepSize: le.valueOrDefault(a.fixedStepSize, a.stepSize),
                },
                r = (e.ticks = (function(e, t) {
                  var a,
                    n,
                    i,
                    r,
                    s = [],
                    o = e.stepSize,
                    d = o || 1,
                    l = e.maxTicks - 1,
                    u = e.min,
                    _ = e.max,
                    h = e.precision,
                    m = t.min,
                    c = t.max,
                    f = le.niceNum((c - m) / l / d) * d;
                  if (f < 1e-14 && Ma(u) && Ma(_)) return [m, c];
                  (r = Math.ceil(c / f) - Math.floor(m / f)),
                    l < r && (f = le.niceNum((r * f) / l / d) * d);
                  o || Ma(h)
                    ? (a = Math.pow(10, le._decimalPlaces(f)))
                    : ((a = Math.pow(10, h)), (f = Math.ceil(f * a) / a));
                  (n = Math.floor(m / f) * f),
                    (i = Math.ceil(c / f) * f),
                    o &&
                      (!Ma(u) && le.almostWhole(u / f, f / 1e3) && (n = u),
                      !Ma(_) && le.almostWhole(_ / f, f / 1e3) && (i = _));
                  (r = (i - n) / f),
                    (r = le.almostEquals(r, Math.round(r), f / 1e3) ? Math.round(r) : Math.ceil(r));
                  (n = Math.round(n * a) / a), (i = Math.round(i * a) / a), s.push(Ma(u) ? n : u);
                  for (var M = 1; M < r; ++M) s.push(Math.round((n + M * f) * a) / a);
                  return s.push(Ma(_) ? i : _), s;
                })(i, e));
              e.handleDirectionalChanges(),
                (e.max = le.max(r)),
                (e.min = le.min(r)),
                a.reverse
                  ? (r.reverse(), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max));
            },
            convertTicksToLabels: function() {
              (this.ticksAsNumbers = this.ticks.slice()),
                (this.zeroLineIndex = this.ticks.indexOf(0)),
                ha.prototype.convertTicksToLabels.call(this);
            },
          }),
          ya = { position: 'left', ticks: { callback: oa.formatters.linear } },
          ga = pa.extend({
            determineDataLimits: function() {
              var s = this,
                o = s.options,
                d = s.chart,
                e = d.data,
                t = e.datasets,
                a = s.isHorizontal();
              function l(e) {
                return a ? e.xAxisID === s.id : e.yAxisID === s.id;
              }
              (s.min = null), (s.max = null);
              var n = o.stacked;
              if (
                (void 0 === n &&
                  le.each(t, function(e, t) {
                    if (!n) {
                      var a = d.getDatasetMeta(t);
                      d.isDatasetVisible(t) && l(a) && void 0 !== a.stack && (n = !0);
                    }
                  }),
                o.stacked || n)
              ) {
                var u = {};
                le.each(t, function(e, t) {
                  var n = d.getDatasetMeta(t),
                    a = [n.type, void 0 === o.stacked && void 0 === n.stack ? t : '', n.stack].join(
                      '.',
                    );
                  void 0 === u[a] && (u[a] = { positiveValues: [], negativeValues: [] });
                  var i = u[a].positiveValues,
                    r = u[a].negativeValues;
                  d.isDatasetVisible(t) &&
                    l(n) &&
                    le.each(e.data, function(e, t) {
                      var a = +s.getRightValue(e);
                      isNaN(a) ||
                        n.data[t].hidden ||
                        ((i[t] = i[t] || 0),
                        (r[t] = r[t] || 0),
                        o.relativePoints ? (i[t] = 100) : a < 0 ? (r[t] += a) : (i[t] += a));
                    });
                }),
                  le.each(u, function(e) {
                    var t = e.positiveValues.concat(e.negativeValues),
                      a = le.min(t),
                      n = le.max(t);
                    (s.min = null === s.min ? a : Math.min(s.min, a)),
                      (s.max = null === s.max ? n : Math.max(s.max, n));
                  });
              } else
                le.each(t, function(e, t) {
                  var n = d.getDatasetMeta(t);
                  d.isDatasetVisible(t) &&
                    l(n) &&
                    le.each(e.data, function(e, t) {
                      var a = +s.getRightValue(e);
                      isNaN(a) ||
                        n.data[t].hidden ||
                        (null === s.min ? (s.min = a) : a < s.min && (s.min = a),
                        null === s.max ? (s.max = a) : a > s.max && (s.max = a));
                    });
                });
              (s.min = isFinite(s.min) && !isNaN(s.min) ? s.min : 0),
                (s.max = isFinite(s.max) && !isNaN(s.max) ? s.max : 1),
                this.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
              var e;
              return this.isHorizontal()
                ? Math.ceil(this.width / 40)
                : ((e = le.options._parseFont(this.options.ticks)),
                  Math.ceil(this.height / e.lineHeight));
            },
            handleDirectionalChanges: function() {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function(e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e]);
            },
            getPixelForValue: function(e) {
              var t = this.start,
                a = +this.getRightValue(e),
                n = this.end - t;
              return this.isHorizontal()
                ? this.left + (this.width / n) * (a - t)
                : this.bottom - (this.height / n) * (a - t);
            },
            getValueForPixel: function(e) {
              var t = this.isHorizontal(),
                a = t ? this.width : this.height,
                n = (t ? e - this.left : this.bottom - e) / a;
              return this.start + (this.end - this.start) * n;
            },
            getPixelForTick: function(e) {
              return this.getPixelForValue(this.ticksAsNumbers[e]);
            },
          }),
          La = ya;
        ga._defaults = La;
        var Ya = le.valueOrDefault;
        var va = { position: 'left', ticks: { callback: oa.formatters.logarithmic } };
        function ka(e, t) {
          return le.isFinite(e) && 0 <= e ? e : t;
        }
        var ba = ha.extend({
            determineDataLimits: function() {
              var s = this,
                a = s.options,
                o = s.chart,
                e = o.data,
                t = e.datasets,
                n = s.isHorizontal();
              function d(e) {
                return n ? e.xAxisID === s.id : e.yAxisID === s.id;
              }
              (s.min = null), (s.max = null), (s.minNotZero = null);
              var i = a.stacked;
              if (
                (void 0 === i &&
                  le.each(t, function(e, t) {
                    if (!i) {
                      var a = o.getDatasetMeta(t);
                      o.isDatasetVisible(t) && d(a) && void 0 !== a.stack && (i = !0);
                    }
                  }),
                a.stacked || i)
              ) {
                var l = {};
                le.each(t, function(e, t) {
                  var i = o.getDatasetMeta(t),
                    r = [i.type, void 0 === a.stacked && void 0 === i.stack ? t : '', i.stack].join(
                      '.',
                    );
                  o.isDatasetVisible(t) &&
                    d(i) &&
                    (void 0 === l[r] && (l[r] = []),
                    le.each(e.data, function(e, t) {
                      var a = l[r],
                        n = +s.getRightValue(e);
                      isNaN(n) || i.data[t].hidden || n < 0 || ((a[t] = a[t] || 0), (a[t] += n));
                    }));
                }),
                  le.each(l, function(e) {
                    if (0 < e.length) {
                      var t = le.min(e),
                        a = le.max(e);
                      (s.min = null === s.min ? t : Math.min(s.min, t)),
                        (s.max = null === s.max ? a : Math.max(s.max, a));
                    }
                  });
              } else
                le.each(t, function(e, t) {
                  var n = o.getDatasetMeta(t);
                  o.isDatasetVisible(t) &&
                    d(n) &&
                    le.each(e.data, function(e, t) {
                      var a = +s.getRightValue(e);
                      isNaN(a) ||
                        n.data[t].hidden ||
                        a < 0 ||
                        (null === s.min ? (s.min = a) : a < s.min && (s.min = a),
                        null === s.max ? (s.max = a) : a > s.max && (s.max = a),
                        0 != a &&
                          (null === s.minNotZero || a < s.minNotZero) &&
                          (s.minNotZero = a));
                    });
                });
              this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function() {
              var e = this,
                t = e.options.ticks;
              (e.min = ka(t.min, e.min)),
                (e.max = ka(t.max, e.max)),
                e.min === e.max &&
                  (0 !== e.min && null !== e.min
                    ? ((e.min = Math.pow(10, Math.floor(le.log10(e.min)) - 1)),
                      (e.max = Math.pow(10, Math.floor(le.log10(e.max)) + 1)))
                    : ((e.min = 1), (e.max = 10))),
                null === e.min && (e.min = Math.pow(10, Math.floor(le.log10(e.max)) - 1)),
                null === e.max &&
                  (e.max = 0 !== e.min ? Math.pow(10, Math.floor(le.log10(e.min)) + 1) : 10),
                null === e.minNotZero &&
                  (0 < e.min
                    ? (e.minNotZero = e.min)
                    : e.max < 1
                    ? (e.minNotZero = Math.pow(10, Math.floor(le.log10(e.max))))
                    : (e.minNotZero = 1));
            },
            buildTicks: function() {
              var e = this,
                t = e.options.ticks,
                a = !e.isHorizontal(),
                n = { min: ka(t.min), max: ka(t.max) },
                i = (e.ticks = (function(e, t) {
                  var a,
                    n,
                    i = [],
                    r = Ya(e.min, Math.pow(10, Math.floor(le.log10(t.min)))),
                    s = Math.floor(le.log10(t.max)),
                    o = Math.ceil(t.max / Math.pow(10, s));
                  0 === r
                    ? ((a = Math.floor(le.log10(t.minNotZero))),
                      (n = Math.floor(t.minNotZero / Math.pow(10, a))),
                      i.push(r),
                      (r = n * Math.pow(10, a)))
                    : ((a = Math.floor(le.log10(r))), (n = Math.floor(r / Math.pow(10, a))));
                  var d = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                  for (
                    ;
                    i.push(r),
                      10 === ++n && ((n = 1), (d = 0 <= ++a ? 1 : d)),
                      (r = Math.round(n * Math.pow(10, a) * d) / d),
                      a < s || (a === s && n < o);

                  );
                  var l = Ya(e.max, r);
                  return i.push(l), i;
                })(n, e));
              (e.max = le.max(i)),
                (e.min = le.min(i)),
                t.reverse
                  ? ((a = !a), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max)),
                a && i.reverse();
            },
            convertTicksToLabels: function() {
              (this.tickValues = this.ticks.slice()), ha.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function(e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e]);
            },
            getPixelForTick: function(e) {
              return this.getPixelForValue(this.tickValues[e]);
            },
            _getFirstTickValue: function(e) {
              var t = Math.floor(le.log10(e)),
                a = Math.floor(e / Math.pow(10, t));
              return a * Math.pow(10, t);
            },
            getPixelForValue: function(e) {
              var t,
                a,
                n,
                i,
                r,
                s = this,
                o = s.options.ticks,
                d = o.reverse,
                l = le.log10,
                u = s._getFirstTickValue(s.minNotZero),
                _ = 0;
              return (
                (e = +s.getRightValue(e)),
                (r = d ? ((n = s.end), (i = s.start), -1) : ((n = s.start), (i = s.end), 1)),
                (a = s.isHorizontal()
                  ? ((t = s.width), d ? s.right : s.left)
                  : ((t = s.height), (r *= -1), d ? s.top : s.bottom)),
                e !== n &&
                  (0 === n && ((_ = Ya(o.fontSize, se.global.defaultFontSize)), (t -= _), (n = u)),
                  0 !== e && (_ += (t / (l(i) - l(n))) * (l(e) - l(n))),
                  (a += r * _)),
                a
              );
            },
            getValueForPixel: function(e) {
              var t,
                a,
                n,
                i,
                r = this,
                s = r.options.ticks,
                o = s.reverse,
                d = le.log10,
                l = r._getFirstTickValue(r.minNotZero);
              if (
                ((n = o ? ((a = r.end), r.start) : ((a = r.start), r.end)),
                (i = r.isHorizontal()
                  ? ((t = r.width), o ? r.right - e : e - r.left)
                  : ((t = r.height), o ? e - r.top : r.bottom - e)) !== a)
              ) {
                if (0 === a) {
                  var u = Ya(s.fontSize, se.global.defaultFontSize);
                  (i -= u), (t -= u), (a = l);
                }
                (i *= d(n) - d(a)), (i /= t), (i = Math.pow(10, d(a) + i));
              }
              return i;
            },
          }),
          Da = va;
        ba._defaults = Da;
        var wa = le.valueOrDefault,
          Ta = le.valueAtIndexOrDefault,
          xa = le.options.resolve,
          Sa = {
            display: !0,
            animate: !0,
            position: 'chartArea',
            angleLines: {
              display: !0,
              color: 'rgba(0, 0, 0, 0.1)',
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: 'rgba(255,255,255,0.75)',
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: oa.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function(e) {
                return e;
              },
            },
          };
        function Ha(e) {
          var t = e.options;
          return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0;
        }
        function Pa(e) {
          var t = e.ticks;
          return t.display && e.display
            ? wa(t.fontSize, se.global.defaultFontSize) + 2 * t.backdropPaddingY
            : 0;
        }
        function ja(e, t, a) {
          return le.isArray(a)
            ? { w: le.longestText(e, e.font, a), h: a.length * t }
            : { w: e.measureText(a).width, h: t };
        }
        function Oa(e, t, a, n, i) {
          return e === n || e === i
            ? { start: t - a / 2, end: t + a / 2 }
            : e < n || i < e
            ? { start: t - a, end: t }
            : { start: t, end: t + a };
        }
        function Aa(e) {
          return 0 === e || 180 === e ? 'center' : e < 180 ? 'left' : 'right';
        }
        function Wa(e, t, a, n) {
          var i,
            r,
            s = a.y + n / 2;
          if (le.isArray(t))
            for (i = 0, r = t.length; i < r; ++i) e.fillText(t[i], a.x, s), (s += n);
          else e.fillText(t, a.x, s);
        }
        function Fa(e, t, a) {
          90 === e || 270 === e ? (a.y -= t.h / 2) : (270 < e || e < 90) && (a.y -= t.h);
        }
        function Ca(e) {
          return le.isNumber(e) ? e : 0;
        }
        var Ia = pa.extend({
            setDimensions: function() {
              var e = this;
              (e.width = e.maxWidth),
                (e.height = e.maxHeight),
                (e.paddingTop = Pa(e.options) / 2),
                (e.xCenter = Math.floor(e.width / 2)),
                (e.yCenter = Math.floor((e.height - e.paddingTop) / 2)),
                (e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2);
            },
            determineDataLimits: function() {
              var i = this,
                a = i.chart,
                r = Number.POSITIVE_INFINITY,
                s = Number.NEGATIVE_INFINITY;
              le.each(a.data.datasets, function(e, t) {
                if (a.isDatasetVisible(t)) {
                  var n = a.getDatasetMeta(t);
                  le.each(e.data, function(e, t) {
                    var a = +i.getRightValue(e);
                    isNaN(a) || n.data[t].hidden || ((r = Math.min(a, r)), (s = Math.max(a, s)));
                  });
                }
              }),
                (i.min = r === Number.POSITIVE_INFINITY ? 0 : r),
                (i.max = s === Number.NEGATIVE_INFINITY ? 0 : s),
                i.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
              return Math.ceil(this.drawingArea / Pa(this.options));
            },
            convertTicksToLabels: function() {
              pa.prototype.convertTicksToLabels.call(this),
                (this.pointLabels = this.chart.data.labels.map(
                  this.options.pointLabels.callback,
                  this,
                ));
            },
            getLabelForIndex: function(e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e]);
            },
            fit: function() {
              var e = this.options;
              e.display && e.pointLabels.display
                ? (function(e) {
                    var t,
                      a,
                      n,
                      i = le.options._parseFont(e.options.pointLabels),
                      r = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                      s = {};
                    (e.ctx.font = i.string), (e._pointLabelSizes = []);
                    var o = Ha(e);
                    for (t = 0; t < o; t++) {
                      (n = e.getPointPosition(t, e.drawingArea + 5)),
                        (a = ja(e.ctx, i.lineHeight, e.pointLabels[t] || '')),
                        (e._pointLabelSizes[t] = a);
                      var d = e.getIndexAngle(t),
                        l = le.toDegrees(d) % 360,
                        u = Oa(l, n.x, a.w, 0, 180),
                        _ = Oa(l, n.y, a.h, 90, 270);
                      u.start < r.l && ((r.l = u.start), (s.l = d)),
                        u.end > r.r && ((r.r = u.end), (s.r = d)),
                        _.start < r.t && ((r.t = _.start), (s.t = d)),
                        _.end > r.b && ((r.b = _.end), (s.b = d));
                    }
                    e.setReductions(e.drawingArea, r, s);
                  })(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function(e, t, a) {
              var n = t.l / Math.sin(a.l),
                i = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                r = -t.t / Math.cos(a.t),
                s = -Math.max(t.b - (this.height - this.paddingTop), 0) / Math.cos(a.b);
              (n = Ca(n)),
                (i = Ca(i)),
                (r = Ca(r)),
                (s = Ca(s)),
                (this.drawingArea = Math.min(
                  Math.floor(e - (n + i) / 2),
                  Math.floor(e - (r + s) / 2),
                )),
                this.setCenterPoint(n, i, r, s);
            },
            setCenterPoint: function(e, t, a, n) {
              var i = this,
                r = i.width - t - i.drawingArea,
                s = e + i.drawingArea,
                o = a + i.drawingArea,
                d = i.height - i.paddingTop - n - i.drawingArea;
              (i.xCenter = Math.floor((s + r) / 2 + i.left)),
                (i.yCenter = Math.floor((o + d) / 2 + i.top + i.paddingTop));
            },
            getIndexAngle: function(e) {
              var t = (2 * Math.PI) / Ha(this),
                a =
                  this.chart.options && this.chart.options.startAngle
                    ? this.chart.options.startAngle
                    : 0,
                n = (a * Math.PI * 2) / 360;
              return e * t + n;
            },
            getDistanceFromCenterForValue: function(e) {
              if (null === e) return 0;
              var t = this.drawingArea / (this.max - this.min);
              return this.options.ticks.reverse ? (this.max - e) * t : (e - this.min) * t;
            },
            getPointPosition: function(e, t) {
              var a = this.getIndexAngle(e) - Math.PI / 2;
              return { x: Math.cos(a) * t + this.xCenter, y: Math.sin(a) * t + this.yCenter };
            },
            getPointPositionForValue: function(e, t) {
              return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
            },
            getBasePosition: function() {
              var e = this.min,
                t = this.max;
              return this.getPointPositionForValue(
                0,
                this.beginAtZero ? 0 : e < 0 && t < 0 ? t : 0 < e && 0 < t ? e : 0,
              );
            },
            draw: function() {
              var r = this,
                e = r.options,
                s = e.gridLines,
                o = e.ticks;
              if (e.display) {
                var d = r.ctx,
                  l = this.getIndexAngle(0),
                  u = le.options._parseFont(o);
                (e.angleLines.display || e.pointLabels.display) &&
                  (function(e) {
                    var t = e.ctx,
                      a = e.options,
                      n = a.angleLines,
                      i = a.gridLines,
                      r = a.pointLabels,
                      s = wa(n.lineWidth, i.lineWidth),
                      o = wa(n.color, i.color),
                      d = Pa(a);
                    t.save(),
                      (t.lineWidth = s),
                      (t.strokeStyle = o),
                      t.setLineDash &&
                        (t.setLineDash(xa([n.borderDash, i.borderDash, []])),
                        (t.lineDashOffset = xa([n.borderDashOffset, i.borderDashOffset, 0])));
                    var l = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max),
                      u = le.options._parseFont(r);
                    (t.font = u.string), (t.textBaseline = 'middle');
                    for (var _ = Ha(e) - 1; 0 <= _; _--) {
                      if (n.display && s && o) {
                        var h = e.getPointPosition(_, l);
                        t.beginPath(),
                          t.moveTo(e.xCenter, e.yCenter),
                          t.lineTo(h.x, h.y),
                          t.stroke();
                      }
                      if (r.display) {
                        var m = 0 === _ ? d / 2 : 0,
                          c = e.getPointPosition(_, l + m + 5),
                          f = Ta(r.fontColor, _, se.global.defaultFontColor);
                        t.fillStyle = f;
                        var M = e.getIndexAngle(_),
                          p = le.toDegrees(M);
                        (t.textAlign = Aa(p)),
                          Fa(p, e._pointLabelSizes[_], c),
                          Wa(t, e.pointLabels[_] || '', c, u.lineHeight);
                      }
                    }
                    t.restore();
                  })(r),
                  le.each(r.ticks, function(e, t) {
                    if (0 < t || o.reverse) {
                      var a = r.getDistanceFromCenterForValue(r.ticksAsNumbers[t]);
                      if (
                        (s.display &&
                          0 !== t &&
                          (function(e, t, a, n) {
                            var i,
                              r = e.ctx,
                              s = t.circular,
                              o = Ha(e),
                              d = Ta(t.color, n - 1),
                              l = Ta(t.lineWidth, n - 1);
                            if ((!s && !o) || !d || !l) return;
                            r.save(),
                              (r.strokeStyle = d),
                              (r.lineWidth = l),
                              r.setLineDash &&
                                (r.setLineDash(t.borderDash || []),
                                (r.lineDashOffset = t.borderDashOffset || 0));
                            if ((r.beginPath(), s)) r.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI);
                            else {
                              (i = e.getPointPosition(0, a)), r.moveTo(i.x, i.y);
                              for (var u = 1; u < o; u++)
                                (i = e.getPointPosition(u, a)), r.lineTo(i.x, i.y);
                            }
                            r.closePath(), r.stroke(), r.restore();
                          })(r, s, a, t),
                        o.display)
                      ) {
                        var n = wa(o.fontColor, se.global.defaultFontColor);
                        if (
                          ((d.font = u.string),
                          d.save(),
                          d.translate(r.xCenter, r.yCenter),
                          d.rotate(l),
                          o.showLabelBackdrop)
                        ) {
                          var i = d.measureText(e).width;
                          (d.fillStyle = o.backdropColor),
                            d.fillRect(
                              -i / 2 - o.backdropPaddingX,
                              -a - u.size / 2 - o.backdropPaddingY,
                              i + 2 * o.backdropPaddingX,
                              u.size + 2 * o.backdropPaddingY,
                            );
                        }
                        (d.textAlign = 'center'),
                          (d.textBaseline = 'middle'),
                          (d.fillStyle = n),
                          d.fillText(e, 0, -a),
                          d.restore();
                      }
                    }
                  });
              }
            },
          }),
          Ea = Sa;
        Ia._defaults = Ea;
        var za = le.valueOrDefault,
          Ra = Number.MIN_SAFE_INTEGER || -9007199254740991,
          Na = Number.MAX_SAFE_INTEGER || 9007199254740991,
          Va = {
            millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] },
            second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] },
            minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] },
            hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
            day: { common: !0, size: 864e5, steps: [1, 2, 5] },
            week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
            month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
            quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
            year: { common: !0, size: 3154e7 },
          },
          Ba = Object.keys(Va);
        function Ja(e, t) {
          return e - t;
        }
        function Ua(e) {
          var t,
            a,
            n,
            i = {},
            r = [];
          for (t = 0, a = e.length; t < a; ++t) (n = e[t]), i[n] || ((i[n] = !0), r.push(n));
          return r;
        }
        function Ga(e, t, a, n) {
          var i = (function(e, t, a) {
              var n,
                i,
                r,
                s = 0,
                o = e.length - 1;
              for (; 0 <= s && s <= o; ) {
                if (((i = e[(n = (s + o) >> 1) - 1] || null), (r = e[n]), !i))
                  return { lo: null, hi: r };
                if (r[t] < a) s = 1 + n;
                else {
                  if (!(i[t] > a)) return { lo: i, hi: r };
                  o = n - 1;
                }
              }
              return { lo: r, hi: null };
            })(e, t, a),
            r = i.lo ? (i.hi ? i.lo : e[e.length - 2]) : e[0],
            s = i.lo ? (i.hi ? i.hi : e[e.length - 1]) : e[1],
            o = s[t] - r[t],
            d = o ? (a - r[t]) / o : 0,
            l = (s[n] - r[n]) * d;
          return r[n] + l;
        }
        function qa(e, t) {
          var a = e._adapter,
            n = e.options.time,
            i = n.parser,
            r = i || n.format,
            s = t;
          return (
            'function' == typeof i && (s = i(s)),
            le.isFinite(s) || (s = 'string' == typeof r ? a.parse(s, r) : a.parse(s)),
            null !== s
              ? +s
              : (i || 'function' != typeof r || ((s = r(t)), le.isFinite(s) || (s = a.parse(s))), s)
          );
        }
        function Ka(e, t) {
          if (le.isNullOrUndef(t)) return null;
          var a = e.options.time,
            n = qa(e, e.getRightValue(t));
          return null === n || (a.round && (n = +e._adapter.startOf(n, a.round))), n;
        }
        function Za(e) {
          for (var t = Ba.indexOf(e) + 1, a = Ba.length; t < a; ++t)
            if (Va[Ba[t]].common) return Ba[t];
        }
        function $a(e, t, a, n) {
          var i,
            r = e._adapter,
            s = e.options,
            o = s.time,
            d =
              o.unit ||
              (function(e, t, a, n) {
                var i,
                  r,
                  s,
                  o = Ba.length;
                for (i = Ba.indexOf(e); i < o - 1; ++i)
                  if (
                    ((r = Va[Ba[i]]),
                    (s = r.steps ? r.steps[r.steps.length - 1] : Na),
                    r.common && Math.ceil((a - t) / (s * r.size)) <= n)
                  )
                    return Ba[i];
                return Ba[o - 1];
              })(o.minUnit, t, a, n),
            l = Za(d),
            u = za(o.stepSize, o.unitStepSize),
            _ = 'week' === d && o.isoWeekday,
            h = s.ticks.major.enabled,
            m = Va[d],
            c = t,
            f = a,
            M = [];
          for (
            u =
              u ||
              (function(e, t, a, n) {
                var i,
                  r,
                  s,
                  o = t - e,
                  d = Va[a],
                  l = d.size,
                  u = d.steps;
                if (!u) return Math.ceil(o / (n * l));
                for (
                  i = 0, r = u.length;
                  i < r && ((s = u[i]), !(Math.ceil(o / (l * s)) <= n));
                  ++i
                );
                return s;
              })(t, a, d, n),
              _ && ((c = +r.startOf(c, 'isoWeek', _)), (f = +r.startOf(f, 'isoWeek', _))),
              c = +r.startOf(c, _ ? 'day' : d),
              (f = +r.startOf(f, _ ? 'day' : d)) < a && (f = +r.add(f, 1, d)),
              i = c,
              h &&
                l &&
                !_ &&
                !o.round &&
                ((i = +r.startOf(i, l)), (i = +r.add(i, ~~((c - i) / (m.size * u)) * u, d)));
            i < f;
            i = +r.add(i, u, d)
          )
            M.push(+i);
          return M.push(+i), M;
        }
        var Xa = ha.extend({
            initialize: function() {
              this.mergeTicksOptions(), ha.prototype.initialize.call(this);
            },
            update: function() {
              var e = this.options,
                t = e.time || (e.time = {}),
                a = (this._adapter = new sa._date(e.adapters.date));
              return (
                t.format &&
                  console.warn(
                    'options.time.format is deprecated and replaced by options.time.parser.',
                  ),
                le.mergeIf(t.displayFormats, a.formats()),
                ha.prototype.update.apply(this, arguments)
              );
            },
            getRightValue: function(e) {
              return e && void 0 !== e.t && (e = e.t), ha.prototype.getRightValue.call(this, e);
            },
            determineDataLimits: function() {
              var e,
                t,
                a,
                n,
                i,
                r,
                s = this,
                o = s.chart,
                d = s._adapter,
                l = s.options.time,
                u = l.unit || 'day',
                _ = Na,
                h = Ra,
                m = [],
                c = [],
                f = [],
                M = o.data.labels || [];
              for (e = 0, a = M.length; e < a; ++e) f.push(Ka(s, M[e]));
              for (e = 0, a = (o.data.datasets || []).length; e < a; ++e)
                if (o.isDatasetVisible(e))
                  if (((i = o.data.datasets[e].data), le.isObject(i[0])))
                    for (c[e] = [], t = 0, n = i.length; t < n; ++t)
                      (r = Ka(s, i[t])), m.push(r), (c[e][t] = r);
                  else {
                    for (t = 0, n = f.length; t < n; ++t) m.push(f[t]);
                    c[e] = f.slice(0);
                  }
                else c[e] = [];
              f.length &&
                ((f = Ua(f).sort(Ja)), (_ = Math.min(_, f[0])), (h = Math.max(h, f[f.length - 1]))),
                m.length &&
                  ((m = Ua(m).sort(Ja)),
                  (_ = Math.min(_, m[0])),
                  (h = Math.max(h, m[m.length - 1]))),
                (_ = Ka(s, l.min) || _),
                (h = Ka(s, l.max) || h),
                (_ = _ === Na ? +d.startOf(Date.now(), u) : _),
                (h = h === Ra ? +d.endOf(Date.now(), u) + 1 : h),
                (s.min = Math.min(_, h)),
                (s.max = Math.max(_ + 1, h)),
                (s._horizontal = s.isHorizontal()),
                (s._table = []),
                (s._timestamps = { data: m, datasets: c, labels: f });
            },
            buildTicks: function() {
              var e,
                t,
                a,
                n = this,
                i = n.min,
                r = n.max,
                s = n.options,
                o = s.time,
                d = [],
                l = [];
              switch (s.ticks.source) {
                case 'data':
                  d = n._timestamps.data;
                  break;
                case 'labels':
                  d = n._timestamps.labels;
                  break;
                case 'auto':
                default:
                  d = $a(n, i, r, n.getLabelCapacity(i));
              }
              for (
                'ticks' === s.bounds && d.length && ((i = d[0]), (r = d[d.length - 1])),
                  i = Ka(n, o.min) || i,
                  r = Ka(n, o.max) || r,
                  e = 0,
                  t = d.length;
                e < t;
                ++e
              )
                (a = d[e]), i <= a && a <= r && l.push(a);
              return (
                (n.min = i),
                (n.max = r),
                (n._unit =
                  o.unit ||
                  (function(e, t, a, n, i) {
                    var r,
                      s,
                      o = Ba.length;
                    for (r = o - 1; r >= Ba.indexOf(a); r--)
                      if (((s = Ba[r]), Va[s].common && e._adapter.diff(i, n, s) >= t.length))
                        return s;
                    return Ba[a ? Ba.indexOf(a) : 0];
                  })(n, l, o.minUnit, n.min, n.max)),
                (n._majorUnit = Za(n._unit)),
                (n._table = (function(e, t, a, n) {
                  if ('linear' === n || !e.length)
                    return [{ time: t, pos: 0 }, { time: a, pos: 1 }];
                  var i,
                    r,
                    s,
                    o,
                    d,
                    l = [],
                    u = [t];
                  for (i = 0, r = e.length; i < r; ++i) (o = e[i]), t < o && o < a && u.push(o);
                  for (u.push(a), i = 0, r = u.length; i < r; ++i)
                    (d = u[i + 1]),
                      (s = u[i - 1]),
                      (o = u[i]),
                      (void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o) ||
                        l.push({ time: o, pos: i / (r - 1) });
                  return l;
                })(n._timestamps.data, i, r, s.distribution)),
                (n._offsets = (function(e, t, a, n, i) {
                  var r,
                    s,
                    o = 0,
                    d = 0;
                  i.offset &&
                    t.length &&
                    (i.time.min ||
                      ((r = Ga(e, 'time', t[0], 'pos')),
                      (o = 1 === t.length ? 1 - r : (Ga(e, 'time', t[1], 'pos') - r) / 2)),
                    i.time.max ||
                      ((s = Ga(e, 'time', t[t.length - 1], 'pos')),
                      (d = 1 === t.length ? s : (s - Ga(e, 'time', t[t.length - 2], 'pos')) / 2)));
                  return { start: o, end: d };
                })(n._table, l, 0, 0, s)),
                s.ticks.reverse && l.reverse(),
                (function(e, t, a) {
                  var n,
                    i,
                    r,
                    s,
                    o = [];
                  for (n = 0, i = t.length; n < i; ++n)
                    (r = t[n]),
                      (s = !!a && r === +e._adapter.startOf(r, a)),
                      o.push({ value: r, major: s });
                  return o;
                })(n, l, n._majorUnit)
              );
            },
            getLabelForIndex: function(e, t) {
              var a = this._adapter,
                n = this.chart.data,
                i = this.options.time,
                r = n.labels && e < n.labels.length ? n.labels[e] : '',
                s = n.datasets[t].data[e];
              return (
                le.isObject(s) && (r = this.getRightValue(s)),
                i.tooltipFormat
                  ? a.format(qa(this, r), i.tooltipFormat)
                  : 'string' == typeof r
                  ? r
                  : a.format(qa(this, r), i.displayFormats.datetime)
              );
            },
            tickFormatFunction: function(e, t, a, n) {
              var i = this._adapter,
                r = this.options,
                s = r.time.displayFormats,
                o = s[this._unit],
                d = this._majorUnit,
                l = s[d],
                u = +i.startOf(e, d),
                _ = r.ticks.major,
                h = _.enabled && d && l && e === u,
                m = i.format(e, n || (h ? l : o)),
                c = h ? _ : r.ticks.minor,
                f = za(c.callback, c.userCallback);
              return f ? f(m, t, a) : m;
            },
            convertTicksToLabels: function(e) {
              var t,
                a,
                n = [];
              for (t = 0, a = e.length; t < a; ++t)
                n.push(this.tickFormatFunction(e[t].value, t, e));
              return n;
            },
            getPixelForOffset: function(e) {
              var t = this,
                a = t.options.ticks.reverse,
                n = t._horizontal ? t.width : t.height,
                i = t._horizontal ? (a ? t.right : t.left) : a ? t.bottom : t.top,
                r = Ga(t._table, 'time', e, 'pos'),
                s = (n * (t._offsets.start + r)) / (t._offsets.start + 1 + t._offsets.end);
              return a ? i - s : i + s;
            },
            getPixelForValue: function(e, t, a) {
              var n = null;
              if (
                (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]),
                null === n && (n = Ka(this, e)),
                null !== n)
              )
                return this.getPixelForOffset(n);
            },
            getPixelForTick: function(e) {
              var t = this.getTicks();
              return 0 <= e && e < t.length ? this.getPixelForOffset(t[e].value) : null;
            },
            getValueForPixel: function(e) {
              var t = this,
                a = t._horizontal ? t.width : t.height,
                n = t._horizontal ? t.left : t.top,
                i =
                  (a ? (e - n) / a : 0) * (t._offsets.start + 1 + t._offsets.start) -
                  t._offsets.end,
                r = Ga(t._table, 'pos', i, 'time');
              return t._adapter._create(r);
            },
            getLabelWidth: function(e) {
              var t = this.options.ticks,
                a = this.ctx.measureText(e).width,
                n = le.toRadians(t.maxRotation),
                i = Math.cos(n),
                r = Math.sin(n),
                s = za(t.fontSize, se.global.defaultFontSize);
              return a * i + s * r;
            },
            getLabelCapacity: function(e) {
              var t = this.options.time.displayFormats.millisecond,
                a = this.tickFormatFunction(e, 0, [], t),
                n = this.getLabelWidth(a),
                i = this.isHorizontal() ? this.width : this.height,
                r = Math.floor(i / n);
              return 0 < r ? r : 1;
            },
          }),
          Qa = {
            position: 'bottom',
            distribution: 'linear',
            bounds: 'data',
            adapters: {},
            time: {
              parser: false,
              format: false,
              unit: false,
              round: false,
              displayFormat: false,
              isoWeekday: false,
              minUnit: 'millisecond',
              displayFormats: {},
            },
            ticks: { autoSkip: false, source: 'auto', major: { enabled: false } },
          };
        Xa._defaults = Qa;
        var en = { category: ma, linear: ga, logarithmic: ba, radialLinear: Ia, time: Xa },
          tn = {
            datetime: 'MMM D, YYYY, h:mm:ss a',
            millisecond: 'h:mm:ss.SSS a',
            second: 'h:mm:ss a',
            minute: 'h:mm a',
            hour: 'hA',
            day: 'MMM D',
            week: 'll',
            month: 'MMM YYYY',
            quarter: '[Q]Q - YYYY',
            year: 'YYYY',
          };
        sa._date.override(
          'function' == typeof n
            ? {
                _id: 'moment',
                formats: function() {
                  return tn;
                },
                parse: function(e, t) {
                  return (
                    'string' == typeof e && 'string' == typeof t
                      ? (e = n(e, t))
                      : e instanceof n || (e = n(e)),
                    e.isValid() ? e.valueOf() : null
                  );
                },
                format: function(e, t) {
                  return n(e).format(t);
                },
                add: function(e, t, a) {
                  return n(e)
                    .add(t, a)
                    .valueOf();
                },
                diff: function(e, t, a) {
                  return n.duration(n(e).diff(n(t))).as(a);
                },
                startOf: function(e, t, a) {
                  return (
                    (e = n(e)), 'isoWeek' === t ? e.isoWeekday(a).valueOf() : e.startOf(t).valueOf()
                  );
                },
                endOf: function(e, t) {
                  return n(e)
                    .endOf(t)
                    .valueOf();
                },
                _create: function(e) {
                  return n(e);
                },
              }
            : {},
        ),
          se._set('global', { plugins: { filler: { propagate: !0 } } });
        var an = {
          dataset: function(e) {
            var t = e.fill,
              a = e.chart,
              n = a.getDatasetMeta(t),
              i = n && a.isDatasetVisible(t),
              r = (i && n.dataset._children) || [],
              s = r.length || 0;
            return s
              ? function(e, t) {
                  return (t < s && r[t]._view) || null;
                }
              : null;
          },
          boundary: function(e) {
            var t = e.boundary,
              a = t ? t.x : null,
              n = t ? t.y : null;
            return function(e) {
              return { x: null === a ? e.x : a, y: null === n ? e.y : n };
            };
          },
        };
        function nn(e, t, a) {
          var n,
            i = e._model || {},
            r = i.fill;
          if ((void 0 === r && (r = !!i.backgroundColor), !1 === r || null === r)) return !1;
          if (!0 === r) return 'origin';
          if (((n = parseFloat(r, 10)), isFinite(n) && Math.floor(n) === n))
            return (
              ('-' !== r[0] && '+' !== r[0]) || (n = t + n), !(n === t || n < 0 || a <= n) && n
            );
          switch (r) {
            case 'bottom':
              return 'start';
            case 'top':
              return 'end';
            case 'zero':
              return 'origin';
            case 'origin':
            case 'start':
            case 'end':
              return r;
            default:
              return !1;
          }
        }
        function rn(e) {
          var t,
            a = e.el._model || {},
            n = e.el._scale || {},
            i = e.fill,
            r = null;
          if (isFinite(i)) return null;
          if (
            ('start' === i
              ? (r = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom)
              : 'end' === i
              ? (r = void 0 === a.scaleTop ? n.top : a.scaleTop)
              : void 0 !== a.scaleZero
              ? (r = a.scaleZero)
              : n.getBasePosition
              ? (r = n.getBasePosition())
              : n.getBasePixel && (r = n.getBasePixel()),
            null != r)
          ) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if (le.isFinite(r)) return { x: (t = n.isHorizontal()) ? r : null, y: t ? null : r };
          }
          return null;
        }
        function sn(e, t, a) {
          var n,
            i = e[t],
            r = i.fill,
            s = [t];
          if (!a) return r;
          for (; !1 !== r && -1 === s.indexOf(r); ) {
            if (!isFinite(r)) return r;
            if (!(n = e[r])) return !1;
            if (n.visible) return r;
            s.push(r), (r = n.fill);
          }
          return !1;
        }
        function on(e) {
          var t = e.fill,
            a = 'dataset';
          return !1 === t ? null : (isFinite(t) || (a = 'boundary'), an[a](e));
        }
        function dn(e) {
          return e && !e.skip;
        }
        function ln(e, t, a, n, i) {
          var r;
          if (n && i) {
            for (e.moveTo(t[0].x, t[0].y), r = 1; r < n; ++r) le.canvas.lineTo(e, t[r - 1], t[r]);
            for (e.lineTo(a[i - 1].x, a[i - 1].y), r = i - 1; 0 < r; --r)
              le.canvas.lineTo(e, a[r], a[r - 1], !0);
          }
        }
        var un = {
            id: 'filler',
            afterDatasetsUpdate: function(e, t) {
              var a,
                n,
                i,
                r,
                s = (e.data.datasets || []).length,
                o = t.propagate,
                d = [];
              for (n = 0; n < s; ++n)
                (a = e.getDatasetMeta(n)),
                  (i = a.dataset),
                  (r = null),
                  i &&
                    i._model &&
                    i instanceof Ie.Line &&
                    (r = { visible: e.isDatasetVisible(n), fill: nn(i, n, s), chart: e, el: i }),
                  (a.$filler = r),
                  d.push(r);
              for (n = 0; n < s; ++n)
                (r = d[n]) && ((r.fill = sn(d, n, o)), (r.boundary = rn(r)), (r.mapper = on(r)));
            },
            beforeDatasetDraw: function(e, t) {
              var a = t.meta.$filler;
              if (a) {
                var n = e.ctx,
                  i = a.el,
                  r = i._view,
                  s = i._children || [],
                  o = a.mapper,
                  d = r.backgroundColor || se.global.defaultColor;
                o &&
                  d &&
                  s.length &&
                  (le.canvas.clipArea(n, e.chartArea),
                  (function(e, t, a, n, i, r) {
                    var s,
                      o,
                      d,
                      l,
                      u,
                      _,
                      h,
                      m = t.length,
                      c = n.spanGaps,
                      f = [],
                      M = [],
                      p = 0,
                      y = 0;
                    for (e.beginPath(), s = 0, o = m + !!r; s < o; ++s)
                      (l = t[(d = s % m)]._view),
                        (u = a(l, d, n)),
                        (_ = dn(l)),
                        (h = dn(u)),
                        _ && h
                          ? ((p = f.push(l)), (y = M.push(u)))
                          : p &&
                            y &&
                            (c
                              ? (_ && f.push(l), h && M.push(u))
                              : (ln(e, f, M, p, y), (p = y = 0), (f = []), (M = [])));
                    ln(e, f, M, p, y), e.closePath(), (e.fillStyle = i), e.fill();
                  })(n, s, o, r, d, i._loop),
                  le.canvas.unclipArea(n));
              }
            },
          },
          _n = le.noop,
          hn = le.valueOrDefault;
        function mn(e, t) {
          return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
        }
        se._set('global', {
          legend: {
            display: !0,
            position: 'top',
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(e, t) {
              var a = t.datasetIndex,
                n = this.chart,
                i = n.getDatasetMeta(a);
              (i.hidden = null === i.hidden ? !n.data.datasets[a].hidden : null), n.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function(a) {
                var e = a.data;
                return le.isArray(e.datasets)
                  ? e.datasets.map(function(e, t) {
                      return {
                        text: e.label,
                        fillStyle: le.isArray(e.backgroundColor)
                          ? e.backgroundColor[0]
                          : e.backgroundColor,
                        hidden: !a.isDatasetVisible(t),
                        lineCap: e.borderCapStyle,
                        lineDash: e.borderDash,
                        lineDashOffset: e.borderDashOffset,
                        lineJoin: e.borderJoinStyle,
                        lineWidth: e.borderWidth,
                        strokeStyle: e.borderColor,
                        pointStyle: e.pointStyle,
                        datasetIndex: t,
                      };
                    }, this)
                  : [];
              },
            },
          },
          legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            for (var a = 0; a < e.data.datasets.length; a++)
              t.push(
                '<li><span style="background-color:' +
                  e.data.datasets[a].backgroundColor +
                  '"></span>',
              ),
                e.data.datasets[a].label && t.push(e.data.datasets[a].label),
                t.push('</li>');
            return t.push('</ul>'), t.join('');
          },
        });
        var cn = ce.extend({
          initialize: function(e) {
            le.extend(this, e),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1);
          },
          beforeUpdate: _n,
          update: function(e, t, a) {
            var n = this;
            return (
              n.beforeUpdate(),
              (n.maxWidth = e),
              (n.maxHeight = t),
              (n.margins = a),
              n.beforeSetDimensions(),
              n.setDimensions(),
              n.afterSetDimensions(),
              n.beforeBuildLabels(),
              n.buildLabels(),
              n.afterBuildLabels(),
              n.beforeFit(),
              n.fit(),
              n.afterFit(),
              n.afterUpdate(),
              n.minSize
            );
          },
          afterUpdate: _n,
          beforeSetDimensions: _n,
          setDimensions: function() {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: _n,
          beforeBuildLabels: _n,
          buildLabels: function() {
            var t = this,
              a = t.options.labels || {},
              e = le.callback(a.generateLabels, [t.chart], t) || [];
            a.filter &&
              (e = e.filter(function(e) {
                return a.filter(e, t.chart.data);
              })),
              t.options.reverse && e.reverse(),
              (t.legendItems = e);
          },
          afterBuildLabels: _n,
          beforeFit: _n,
          fit: function() {
            var e = this,
              t = e.options,
              i = t.labels,
              a = t.display,
              r = e.ctx,
              n = le.options._parseFont(i),
              s = n.size,
              o = (e.legendHitBoxes = []),
              d = e.minSize,
              l = e.isHorizontal();
            if (
              (l
                ? ((d.width = e.maxWidth), (d.height = a ? 10 : 0))
                : ((d.width = a ? 10 : 0), (d.height = e.maxHeight)),
              a)
            )
              if (((r.font = n.string), l)) {
                var u = (e.lineWidths = [0]),
                  _ = 0;
                (r.textAlign = 'left'),
                  (r.textBaseline = 'top'),
                  le.each(e.legendItems, function(e, t) {
                    var a = mn(i, s),
                      n = a + s / 2 + r.measureText(e.text).width;
                    (0 === t || u[u.length - 1] + n + i.padding > d.width) &&
                      ((_ += s + i.padding), (u[u.length - (0 < t ? 0 : 1)] = i.padding)),
                      (o[t] = { left: 0, top: 0, width: n, height: s }),
                      (u[u.length - 1] += n + i.padding);
                  }),
                  (d.height += _);
              } else {
                var h = i.padding,
                  m = (e.columnWidths = []),
                  c = i.padding,
                  f = 0,
                  M = 0,
                  p = s + h;
                le.each(e.legendItems, function(e, t) {
                  var a = mn(i, s),
                    n = a + s / 2 + r.measureText(e.text).width;
                  0 < t && M + p > d.height - h && ((c += f + i.padding), m.push(f), (M = f = 0)),
                    (f = Math.max(f, n)),
                    (M += p),
                    (o[t] = { left: 0, top: 0, width: n, height: s });
                }),
                  (c += f),
                  m.push(f),
                  (d.width += c);
              }
            (e.width = d.width), (e.height = d.height);
          },
          afterFit: _n,
          isHorizontal: function() {
            return 'top' === this.options.position || 'bottom' === this.options.position;
          },
          draw: function() {
            var s = this,
              o = s.options,
              d = o.labels,
              e = se.global,
              l = e.defaultColor,
              u = e.elements.line,
              _ = s.width,
              h = s.lineWidths;
            if (o.display) {
              var m,
                c = s.ctx,
                t = hn(d.fontColor, e.defaultFontColor),
                a = le.options._parseFont(d),
                f = a.size;
              (c.textAlign = 'left'),
                (c.textBaseline = 'middle'),
                (c.lineWidth = 0.5),
                (c.strokeStyle = t),
                (c.fillStyle = t),
                (c.font = a.string);
              var M = mn(d, f),
                p = s.legendHitBoxes,
                y = s.isHorizontal();
              m = y
                ? { x: s.left + (_ - h[0]) / 2 + d.padding, y: s.top + d.padding, line: 0 }
                : { x: s.left + d.padding, y: s.top + d.padding, line: 0 };
              var g = f + d.padding;
              le.each(s.legendItems, function(e, t) {
                var a = c.measureText(e.text).width,
                  n = M + f / 2 + a,
                  i = m.x,
                  r = m.y;
                y
                  ? 0 < t &&
                    i + n + d.padding > s.left + s.minSize.width &&
                    ((r = m.y += g), m.line++, (i = m.x = s.left + (_ - h[m.line]) / 2 + d.padding))
                  : 0 < t &&
                    r + g > s.top + s.minSize.height &&
                    ((i = m.x = i + s.columnWidths[m.line] + d.padding),
                    (r = m.y = s.top + d.padding),
                    m.line++),
                  (function(e, t, a) {
                    if (isNaN(M) || M <= 0) {
                      return;
                    }
                    c.save();
                    var n = hn(a.lineWidth, u.borderWidth);
                    if (
                      ((c.fillStyle = hn(a.fillStyle, l)),
                      (c.lineCap = hn(a.lineCap, u.borderCapStyle)),
                      (c.lineDashOffset = hn(a.lineDashOffset, u.borderDashOffset)),
                      (c.lineJoin = hn(a.lineJoin, u.borderJoinStyle)),
                      (c.lineWidth = n),
                      (c.strokeStyle = hn(a.strokeStyle, l)),
                      c.setLineDash)
                    ) {
                      c.setLineDash(hn(a.lineDash, u.borderDash));
                    }
                    if (o.labels && o.labels.usePointStyle) {
                      var i = (M * Math.SQRT2) / 2;
                      var r = e + M / 2;
                      var s = t + f / 2;
                      le.canvas.drawPoint(c, a.pointStyle, i, r, s);
                    } else {
                      if (n !== 0) {
                        c.strokeRect(e, t, M, f);
                      }
                      c.fillRect(e, t, M, f);
                    }
                    c.restore();
                  })(i, r, e),
                  (p[t].left = i),
                  (p[t].top = r),
                  (function(e, t, a, n) {
                    var i = f / 2,
                      r = M + i + e,
                      s = t + i;
                    if ((c.fillText(a.text, r, s), a.hidden)) {
                      c.beginPath();
                      c.lineWidth = 2;
                      c.moveTo(r, s);
                      c.lineTo(r + n, s);
                      c.stroke();
                    }
                  })(i, r, e, a),
                  y ? (m.x += n + d.padding) : (m.y += g);
              });
            }
          },
          _getLegendItemAt: function(e, t) {
            var a, n, i;
            if (e >= this.left && e <= this.right && t >= this.top && t <= this.bottom)
              for (i = this.legendHitBoxes, a = 0; a < i.length; ++a)
                if (
                  ((n = i[a]),
                  e >= n.left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height)
                )
                  return this.legendItems[a];
            return null;
          },
          handleEvent: function(e) {
            var t,
              a = this.options,
              n = 'mouseup' === e.type ? 'click' : e.type;
            if ('mousemove' === n) {
              if (!a.onHover && !a.onLeave) return;
            } else {
              if ('click' !== n) return;
              if (!a.onClick) return;
            }
            (t = this._getLegendItemAt(e.x, e.y)),
              'click' === n
                ? t && a.onClick && a.onClick.call(this, e.native, t)
                : (a.onLeave &&
                    t !== this._hoveredItem &&
                    (this._hoveredItem && a.onLeave.call(this, e.native, this._hoveredItem),
                    (this._hoveredItem = t)),
                  a.onHover && t && a.onHover.call(this, e.native, t));
          },
        });
        function fn(e, t) {
          var a = new cn({ ctx: e.ctx, options: t, chart: e });
          Lt.configure(e, a, t), Lt.addBox(e, a), (e.legend = a);
        }
        var Mn = {
            id: 'legend',
            _element: cn,
            beforeInit: function(e) {
              var t = e.options.legend;
              t && fn(e, t);
            },
            beforeUpdate: function(e) {
              var t = e.options.legend,
                a = e.legend;
              t
                ? (le.mergeIf(t, se.global.legend),
                  a ? (Lt.configure(e, a, t), (a.options = t)) : fn(e, t))
                : a && (Lt.removeBox(e, a), delete e.legend);
            },
            afterEvent: function(e, t) {
              var a = e.legend;
              a && a.handleEvent(t);
            },
          },
          pn = le.noop;
        se._set('global', {
          title: {
            display: !1,
            fontStyle: 'bold',
            fullWidth: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
          },
        });
        var yn = ce.extend({
          initialize: function(e) {
            le.extend(this, e), (this.legendHitBoxes = []);
          },
          beforeUpdate: pn,
          update: function(e, t, a) {
            var n = this;
            return (
              n.beforeUpdate(),
              (n.maxWidth = e),
              (n.maxHeight = t),
              (n.margins = a),
              n.beforeSetDimensions(),
              n.setDimensions(),
              n.afterSetDimensions(),
              n.beforeBuildLabels(),
              n.buildLabels(),
              n.afterBuildLabels(),
              n.beforeFit(),
              n.fit(),
              n.afterFit(),
              n.afterUpdate(),
              n.minSize
            );
          },
          afterUpdate: pn,
          beforeSetDimensions: pn,
          setDimensions: function() {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: pn,
          beforeBuildLabels: pn,
          buildLabels: pn,
          afterBuildLabels: pn,
          beforeFit: pn,
          fit: function() {
            var e = this.options,
              t = e.display,
              a = this.minSize,
              n = le.isArray(e.text) ? e.text.length : 1,
              i = le.options._parseFont(e),
              r = t ? n * i.lineHeight + 2 * e.padding : 0;
            this.isHorizontal()
              ? ((a.width = this.maxWidth), (a.height = r))
              : ((a.width = r), (a.height = this.maxHeight)),
              (this.width = a.width),
              (this.height = a.height);
          },
          afterFit: pn,
          isHorizontal: function() {
            var e = this.options.position;
            return 'top' === e || 'bottom' === e;
          },
          draw: function() {
            var e = this.ctx,
              t = this.options;
            if (t.display) {
              var a,
                n,
                i,
                r = le.options._parseFont(t),
                s = r.lineHeight,
                o = s / 2 + t.padding,
                d = 0,
                l = this.top,
                u = this.left,
                _ = this.bottom,
                h = this.right;
              (e.fillStyle = le.valueOrDefault(t.fontColor, se.global.defaultFontColor)),
                (e.font = r.string),
                this.isHorizontal()
                  ? ((n = u + (h - u) / 2), (i = l + o), (a = h - u))
                  : ((n = 'left' === t.position ? u + o : h - o),
                    (i = l + (_ - l) / 2),
                    (a = _ - l),
                    (d = Math.PI * ('left' === t.position ? -0.5 : 0.5))),
                e.save(),
                e.translate(n, i),
                e.rotate(d),
                (e.textAlign = 'center'),
                (e.textBaseline = 'middle');
              var m = t.text;
              if (le.isArray(m))
                for (var c = 0, f = 0; f < m.length; ++f) e.fillText(m[f], 0, c, a), (c += s);
              else e.fillText(m, 0, 0, a);
              e.restore();
            }
          },
        });
        function gn(e, t) {
          var a = new yn({ ctx: e.ctx, options: t, chart: e });
          Lt.configure(e, a, t), Lt.addBox(e, a), (e.titleBlock = a);
        }
        var Ln = {},
          Yn = un,
          vn = Mn,
          kn = {
            id: 'title',
            _element: yn,
            beforeInit: function(e) {
              var t = e.options.title;
              t && gn(e, t);
            },
            beforeUpdate: function(e) {
              var t = e.options.title,
                a = e.titleBlock;
              t
                ? (le.mergeIf(t, se.global.title),
                  a ? (Lt.configure(e, a, t), (a.options = t)) : gn(e, t))
                : a && (Lt.removeBox(e, a), delete e.titleBlock);
            },
          };
        for (var bn in ((Ln.filler = Yn),
        (Ln.legend = vn),
        (Ln.title = kn),
        (na.helpers = le),
        (function() {
          function u(e, t, a) {
            var n;
            return (
              'string' == typeof e
                ? ((n = parseInt(e, 10)),
                  -1 !== e.indexOf('%') && (n = (n / 100) * t.parentNode[a]))
                : (n = e),
              n
            );
          }
          function _(e) {
            return null != e && 'none' !== e;
          }
          function t(e, t, a) {
            var n = document.defaultView,
              i = le._getParentNode(e),
              r = n.getComputedStyle(e)[t],
              s = n.getComputedStyle(i)[t],
              o = _(r),
              d = _(s),
              l = Number.POSITIVE_INFINITY;
            return o || d ? Math.min(o ? u(r, e, a) : l, d ? u(s, i, a) : l) : 'none';
          }
          (le.where = function(e, t) {
            if (le.isArray(e) && Array.prototype.filter) return e.filter(t);
            var a = [];
            return (
              le.each(e, function(e) {
                t(e) && a.push(e);
              }),
              a
            );
          }),
            (le.findIndex = Array.prototype.findIndex
              ? function(e, t, a) {
                  return e.findIndex(t, a);
                }
              : function(e, t, a) {
                  a = void 0 === a ? e : a;
                  for (var n = 0, i = e.length; n < i; ++n) if (t.call(a, e[n], n, e)) return n;
                  return -1;
                }),
            (le.findNextWhere = function(e, t, a) {
              le.isNullOrUndef(a) && (a = -1);
              for (var n = a + 1; n < e.length; n++) {
                var i = e[n];
                if (t(i)) return i;
              }
            }),
            (le.findPreviousWhere = function(e, t, a) {
              le.isNullOrUndef(a) && (a = e.length);
              for (var n = a - 1; 0 <= n; n--) {
                var i = e[n];
                if (t(i)) return i;
              }
            }),
            (le.isNumber = function(e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            }),
            (le.almostEquals = function(e, t, a) {
              return Math.abs(e - t) < a;
            }),
            (le.almostWhole = function(e, t) {
              var a = Math.round(e);
              return a - t < e && e < a + t;
            }),
            (le.max = function(e) {
              return e.reduce(function(e, t) {
                return isNaN(t) ? e : Math.max(e, t);
              }, Number.NEGATIVE_INFINITY);
            }),
            (le.min = function(e) {
              return e.reduce(function(e, t) {
                return isNaN(t) ? e : Math.min(e, t);
              }, Number.POSITIVE_INFINITY);
            }),
            (le.sign = Math.sign
              ? function(e) {
                  return Math.sign(e);
                }
              : function(e) {
                  return 0 === (e = +e) || isNaN(e) ? e : 0 < e ? 1 : -1;
                }),
            (le.log10 = Math.log10
              ? function(e) {
                  return Math.log10(e);
                }
              : function(e) {
                  var t = Math.log(e) * Math.LOG10E,
                    a = Math.round(t),
                    n = e === Math.pow(10, a);
                  return n ? a : t;
                }),
            (le.toRadians = function(e) {
              return e * (Math.PI / 180);
            }),
            (le.toDegrees = function(e) {
              return e * (180 / Math.PI);
            }),
            (le._decimalPlaces = function(e) {
              if (le.isFinite(e)) {
                for (var t = 1, a = 0; Math.round(e * t) / t !== e; ) (t *= 10), a++;
                return a;
              }
            }),
            (le.getAngleFromPoint = function(e, t) {
              var a = t.x - e.x,
                n = t.y - e.y,
                i = Math.sqrt(a * a + n * n),
                r = Math.atan2(n, a);
              return r < -0.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: i };
            }),
            (le.distanceBetweenPoints = function(e, t) {
              return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }),
            (le.aliasPixel = function(e) {
              return e % 2 == 0 ? 0 : 0.5;
            }),
            (le._alignPixel = function(e, t, a) {
              var n = e.currentDevicePixelRatio,
                i = a / 2;
              return Math.round((t - i) * n) / n + i;
            }),
            (le.splineCurve = function(e, t, a, n) {
              var i = e.skip ? t : e,
                r = t,
                s = a.skip ? t : a,
                o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                l = o / (o + d),
                u = d / (o + d);
              (l = isNaN(l) ? 0 : l), (u = isNaN(u) ? 0 : u);
              var _ = n * l,
                h = n * u;
              return {
                previous: { x: r.x - _ * (s.x - i.x), y: r.y - _ * (s.y - i.y) },
                next: { x: r.x + h * (s.x - i.x), y: r.y + h * (s.y - i.y) },
              };
            }),
            (le.EPSILON = Number.EPSILON || 1e-14),
            (le.splineCurveMonotone = function(e) {
              var t,
                a,
                n,
                i,
                r,
                s,
                o,
                d,
                l,
                u = (e || []).map(function(e) {
                  return { model: e._model, deltaK: 0, mK: 0 };
                }),
                _ = u.length;
              for (t = 0; t < _; ++t)
                if (!(n = u[t]).model.skip) {
                  if (
                    ((a = 0 < t ? u[t - 1] : null),
                    (i = t < _ - 1 ? u[t + 1] : null) && !i.model.skip)
                  ) {
                    var h = i.model.x - n.model.x;
                    n.deltaK = 0 != h ? (i.model.y - n.model.y) / h : 0;
                  }
                  !a || a.model.skip
                    ? (n.mK = n.deltaK)
                    : !i || i.model.skip
                    ? (n.mK = a.deltaK)
                    : this.sign(a.deltaK) !== this.sign(n.deltaK)
                    ? (n.mK = 0)
                    : (n.mK = (a.deltaK + n.deltaK) / 2);
                }
              for (t = 0; t < _ - 1; ++t)
                (n = u[t]),
                  (i = u[t + 1]),
                  n.model.skip ||
                    i.model.skip ||
                    (le.almostEquals(n.deltaK, 0, this.EPSILON)
                      ? (n.mK = i.mK = 0)
                      : ((r = n.mK / n.deltaK),
                        (s = i.mK / n.deltaK),
                        (d = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 ||
                          ((o = 3 / Math.sqrt(d)),
                          (n.mK = r * o * n.deltaK),
                          (i.mK = s * o * n.deltaK))));
              for (t = 0; t < _; ++t)
                (n = u[t]).model.skip ||
                  ((a = 0 < t ? u[t - 1] : null),
                  (i = t < _ - 1 ? u[t + 1] : null),
                  a &&
                    !a.model.skip &&
                    ((l = (n.model.x - a.model.x) / 3),
                    (n.model.controlPointPreviousX = n.model.x - l),
                    (n.model.controlPointPreviousY = n.model.y - l * n.mK)),
                  i &&
                    !i.model.skip &&
                    ((l = (i.model.x - n.model.x) / 3),
                    (n.model.controlPointNextX = n.model.x + l),
                    (n.model.controlPointNextY = n.model.y + l * n.mK)));
            }),
            (le.nextItem = function(e, t, a) {
              return a
                ? t >= e.length - 1
                  ? e[0]
                  : e[t + 1]
                : t >= e.length - 1
                ? e[e.length - 1]
                : e[t + 1];
            }),
            (le.previousItem = function(e, t, a) {
              return a ? (t <= 0 ? e[e.length - 1] : e[t - 1]) : t <= 0 ? e[0] : e[t - 1];
            }),
            (le.niceNum = function(e, t) {
              var a = Math.floor(le.log10(e)),
                n = e / Math.pow(10, a);
              return (
                (t
                  ? n < 1.5
                    ? 1
                    : n < 3
                    ? 2
                    : n < 7
                    ? 5
                    : 10
                  : n <= 1
                  ? 1
                  : n <= 2
                  ? 2
                  : n <= 5
                  ? 5
                  : 10) * Math.pow(10, a)
              );
            }),
            (le.requestAnimFrame =
              'undefined' == typeof window
                ? function(e) {
                    e();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(e) {
                    return window.setTimeout(e, 1e3 / 60);
                  }),
            (le.getRelativePosition = function(e, t) {
              var a,
                n,
                i = e.originalEvent || e,
                r = e.target || e.srcElement,
                s = r.getBoundingClientRect(),
                o = i.touches;
              n =
                o && 0 < o.length
                  ? ((a = o[0].clientX), o[0].clientY)
                  : ((a = i.clientX), i.clientY);
              var d = parseFloat(le.getStyle(r, 'padding-left')),
                l = parseFloat(le.getStyle(r, 'padding-top')),
                u = parseFloat(le.getStyle(r, 'padding-right')),
                _ = parseFloat(le.getStyle(r, 'padding-bottom')),
                h = s.right - s.left - d - u,
                m = s.bottom - s.top - l - _;
              return (
                (a = Math.round((((a - s.left - d) / h) * r.width) / t.currentDevicePixelRatio)),
                (n = Math.round((((n - s.top - l) / m) * r.height) / t.currentDevicePixelRatio)),
                { x: a, y: n }
              );
            }),
            (le.getConstraintWidth = function(e) {
              return t(e, 'max-width', 'clientWidth');
            }),
            (le.getConstraintHeight = function(e) {
              return t(e, 'max-height', 'clientHeight');
            }),
            (le._calculatePadding = function(e, t, a) {
              return -1 < (t = le.getStyle(e, t)).indexOf('%')
                ? (a * parseInt(t, 10)) / 100
                : parseInt(t, 10);
            }),
            (le._getParentNode = function(e) {
              var t = e.parentNode;
              return t && '[object ShadowRoot]' === t.toString() && (t = t.host), t;
            }),
            (le.getMaximumWidth = function(e) {
              var t = le._getParentNode(e);
              if (!t) return e.clientWidth;
              var a = t.clientWidth,
                n = le._calculatePadding(t, 'padding-left', a),
                i = le._calculatePadding(t, 'padding-right', a),
                r = a - n - i,
                s = le.getConstraintWidth(e);
              return isNaN(s) ? r : Math.min(r, s);
            }),
            (le.getMaximumHeight = function(e) {
              var t = le._getParentNode(e);
              if (!t) return e.clientHeight;
              var a = t.clientHeight,
                n = le._calculatePadding(t, 'padding-top', a),
                i = le._calculatePadding(t, 'padding-bottom', a),
                r = a - n - i,
                s = le.getConstraintHeight(e);
              return isNaN(s) ? r : Math.min(r, s);
            }),
            (le.getStyle = function(e, t) {
              return e.currentStyle
                ? e.currentStyle[t]
                : document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
            }),
            (le.retinaScale = function(e, t) {
              var a = (e.currentDevicePixelRatio =
                t || ('undefined' != typeof window && window.devicePixelRatio) || 1);
              if (1 !== a) {
                var n = e.canvas,
                  i = e.height,
                  r = e.width;
                (n.height = i * a),
                  (n.width = r * a),
                  e.ctx.scale(a, a),
                  n.style.height ||
                    n.style.width ||
                    ((n.style.height = i + 'px'), (n.style.width = r + 'px'));
              }
            }),
            (le.fontString = function(e, t, a) {
              return t + ' ' + e + 'px ' + a;
            }),
            (le.longestText = function(t, e, a, n) {
              var i = ((n = n || {}).data = n.data || {}),
                r = (n.garbageCollect = n.garbageCollect || []);
              n.font !== e && ((i = n.data = {}), (r = n.garbageCollect = []), (n.font = e)),
                (t.font = e);
              var s = 0;
              le.each(a, function(e) {
                null != e && !0 !== le.isArray(e)
                  ? (s = le.measureText(t, i, r, s, e))
                  : le.isArray(e) &&
                    le.each(e, function(e) {
                      null == e || le.isArray(e) || (s = le.measureText(t, i, r, s, e));
                    });
              });
              var o = r.length / 2;
              if (o > a.length) {
                for (var d = 0; d < o; d++) delete i[r[d]];
                r.splice(0, o);
              }
              return s;
            }),
            (le.measureText = function(e, t, a, n, i) {
              var r = t[i];
              return r || ((r = t[i] = e.measureText(i).width), a.push(i)), n < r && (n = r), n;
            }),
            (le.numberOfLabelLines = function(e) {
              var t = 1;
              return (
                le.each(e, function(e) {
                  le.isArray(e) && e.length > t && (t = e.length);
                }),
                t
              );
            }),
            (le.color = U
              ? function(e) {
                  return e instanceof CanvasGradient && (e = se.global.defaultColor), U(e);
                }
              : function(e) {
                  return console.error('Color.js not found!'), e;
                }),
            (le.getHoverColor = function(e) {
              return e instanceof CanvasPattern || e instanceof CanvasGradient
                ? e
                : le
                    .color(e)
                    .saturate(0.5)
                    .darken(0.1)
                    .rgbString();
            });
        })(),
        (na._adapters = sa),
        (na.Animation = Me),
        (na.animationService = pe),
        (na.controllers = lt),
        (na.DatasetController = ve),
        (na.defaults = se),
        (na.Element = ce),
        (na.elements = Ie),
        (na.Interaction = Mt),
        (na.layouts = Lt),
        (na.platform = Et),
        (na.plugins = zt),
        (na.Scale = ha),
        (na.scaleService = Rt),
        (na.Ticks = oa),
        (na.Tooltip = $t),
        na.helpers.each(en, function(e, t) {
          na.scaleService.registerScaleType(t, e, e._defaults);
        }),
        Ln))
          Ln.hasOwnProperty(bn) && na.plugins.register(Ln[bn]);
        na.platform.initialize();
        var Dn = na;
        return (
          'undefined' != typeof window && (window.Chart = na),
          ((na.Chart = na).Legend = Ln.legend._element),
          (na.Title = Ln.title._element),
          (na.pluginService = na.plugins),
          (na.PluginBase = na.Element.extend({})),
          (na.canvasHelpers = na.helpers.canvas),
          (na.layoutService = na.layouts),
          (na.LinearScaleBase = pa),
          na.helpers.each(
            ['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'],
            function(a) {
              na[a] = function(e, t) {
                return new na(
                  e,
                  na.helpers.merge(t || {}, { type: a.charAt(0).toLowerCase() + a.slice(1) }),
                );
              };
            },
          ),
          Dn
        );
      })(
        (function() {
          try {
            return a(337);
          } catch (e) {}
        })(),
      );
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
  ]),
]);
