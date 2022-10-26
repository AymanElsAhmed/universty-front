!(function ($) {
  var kc;
  (jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
      def: "easeOutQuad",
      swing: function (e, t, s, i, n) {
        return jQuery.easing[jQuery.easing.def](e, t, s, i, n);
      },
      easeInQuad: function (e, t, s, i, n) {
        return i * (t /= n) * t + s;
      },
      easeOutQuad: function (e, t, s, i, n) {
        return -i * (t /= n) * (t - 2) + s;
      },
      easeInOutQuad: function (e, t, s, i, n) {
        return (t /= n / 2) < 1
          ? (i / 2) * t * t + s
          : (-i / 2) * (--t * (t - 2) - 1) + s;
      },
      easeInCubic: function (e, t, s, i, n) {
        return i * (t /= n) * t * t + s;
      },
      easeOutCubic: function (e, t, s, i, n) {
        return i * ((t = t / n - 1) * t * t + 1) + s;
      },
      easeInOutCubic: function (e, t, s, i, n) {
        return (t /= n / 2) < 1
          ? (i / 2) * t * t * t + s
          : (i / 2) * ((t -= 2) * t * t + 2) + s;
      },
      easeInQuart: function (e, t, s, i, n) {
        return i * (t /= n) * t * t * t + s;
      },
      easeOutQuart: function (e, t, s, i, n) {
        return -i * ((t = t / n - 1) * t * t * t - 1) + s;
      },
      easeInOutQuart: function (e, t, s, i, n) {
        return (t /= n / 2) < 1
          ? (i / 2) * t * t * t * t + s
          : (-i / 2) * ((t -= 2) * t * t * t - 2) + s;
      },
      easeInQuint: function (e, t, s, i, n) {
        return i * (t /= n) * t * t * t * t + s;
      },
      easeOutQuint: function (e, t, s, i, n) {
        return i * ((t = t / n - 1) * t * t * t * t + 1) + s;
      },
      easeInOutQuint: function (e, t, s, i, n) {
        return (t /= n / 2) < 1
          ? (i / 2) * t * t * t * t * t + s
          : (i / 2) * ((t -= 2) * t * t * t * t + 2) + s;
      },
      easeInSine: function (e, t, s, i, n) {
        return -i * Math.cos((t / n) * (Math.PI / 2)) + i + s;
      },
      easeOutSine: function (e, t, s, i, n) {
        return i * Math.sin((t / n) * (Math.PI / 2)) + s;
      },
      easeInOutSine: function (e, t, s, i, n) {
        return (-i / 2) * (Math.cos((Math.PI * t) / n) - 1) + s;
      },
      easeInExpo: function (e, t, s, i, n) {
        return 0 == t ? s : i * Math.pow(2, 10 * (t / n - 1)) + s;
      },
      easeOutExpo: function (e, t, s, i, n) {
        return t == n ? s + i : i * (1 - Math.pow(2, (-10 * t) / n)) + s;
      },
      easeInOutExpo: function (e, t, s, i, n) {
        return 0 == t
          ? s
          : t == n
          ? s + i
          : (t /= n / 2) < 1
          ? (i / 2) * Math.pow(2, 10 * (t - 1)) + s
          : (i / 2) * (2 - Math.pow(2, -10 * --t)) + s;
      },
      easeInCirc: function (e, t, s, i, n) {
        return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + s;
      },
      easeOutCirc: function (e, t, s, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + s;
      },
      easeInOutCirc: function (e, t, s, i, n) {
        return (t /= n / 2) < 1
          ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + s
          : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + s;
      },
      easeInElastic: function (e, t, s, i, n) {
        var o = 1.70158,
          r = 0,
          a = i;
        if (0 == t) return s;
        if (1 == (t /= n)) return s + i;
        if (((r = r || 0.3 * n), a < Math.abs(i))) {
          a = i;
          o = r / 4;
        } else o = (r / (2 * Math.PI)) * Math.asin(i / a);
        return (
          -a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * n - o) * (2 * Math.PI)) / r) +
          s
        );
      },
      easeOutElastic: function (e, t, s, i, n) {
        var o = 1.70158,
          r = 0,
          a = i;
        if (0 == t) return s;
        if (1 == (t /= n)) return s + i;
        if (((r = r || 0.3 * n), a < Math.abs(i))) {
          a = i;
          o = r / 4;
        } else o = (r / (2 * Math.PI)) * Math.asin(i / a);
        return (
          a *
            Math.pow(2, -10 * t) *
            Math.sin(((t * n - o) * (2 * Math.PI)) / r) +
          i +
          s
        );
      },
      easeInOutElastic: function (e, t, s, i, n) {
        var o = 1.70158,
          r = 0,
          a = i;
        if (0 == t) return s;
        if (2 == (t /= n / 2)) return s + i;
        if (((r = r || n * (0.3 * 1.5)), a < Math.abs(i))) {
          a = i;
          o = r / 4;
        } else o = (r / (2 * Math.PI)) * Math.asin(i / a);
        return t < 1
          ? a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * n - o) * (2 * Math.PI)) / r) *
              -0.5 +
              s
          : a *
              Math.pow(2, -10 * (t -= 1)) *
              Math.sin(((t * n - o) * (2 * Math.PI)) / r) *
              0.5 +
              i +
              s;
      },
      easeInBack: function (e, t, s, i, n, o) {
        return (
          null == o && (o = 1.70158), i * (t /= n) * t * ((o + 1) * t - o) + s
        );
      },
      easeOutBack: function (e, t, s, i, n, o) {
        return (
          null == o && (o = 1.70158),
          i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + s
        );
      },
      easeInOutBack: function (e, t, s, i, n, o) {
        return (
          null == o && (o = 1.70158),
          (t /= n / 2) < 1
            ? (i / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + s
            : (i / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + s
        );
      },
      easeInBounce: function (e, t, s, i, n) {
        return i - jQuery.easing.easeOutBounce(e, n - t, 0, i, n) + s;
      },
      easeOutBounce: function (e, t, s, i, n) {
        return (t /= n) < 1 / 2.75
          ? i * (7.5625 * t * t) + s
          : t < 2 / 2.75
          ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + s
          : t < 2.5 / 2.75
          ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + s
          : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + s;
      },
      easeInOutBounce: function (e, t, s, i, n) {
        return t < n / 2
          ? 0.5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, n) + s
          : 0.5 * jQuery.easing.easeOutBounce(e, 2 * t - n, 0, i, n) +
              0.5 * i +
              s;
      },
    }),
    (kc = function (j) {
      "use strict";
      var y = "tinyscrollbar",
        w = {
          axis: "y",
          wheel: !0,
          wheelSpeed: 40,
          wheelLock: !0,
          scrollInvert: !1,
          trackSize: !1,
          thumbSize: !1,
        };
      function t(n, e) {
        (this.options = j.extend({}, w, e)),
          (this._defaults = w),
          (this._name = y);
        var o = this,
          s = n.find(".viewport"),
          r = n.find(".overview"),
          i = n.find(".scrollbar"),
          a = i.find(".track"),
          l = i.find(".thumb"),
          c = 0,
          u = "x" === this.options.axis,
          h = "ontouchstart" in document.documentElement,
          t =
            "onwheel" in document || 9 <= document.documentMode
              ? "wheel"
              : void 0 !== document.onmousewheel
              ? "mousewheel"
              : "DOMMouseScroll",
          d = u ? "width" : "height",
          p = u ? "left" : "top";
        function v(e) {
          j("body").addClass("noSelect"),
            (c = u ? e.pageX : e.pageY),
            (o.thumbPosition = parseInt(l.css(p), 10) || 0),
            h
              ? ((document.ontouchmove = function (e) {
                  e.preventDefault(), f(e.touches[0]);
                }),
                (document.ontouchend = g))
              : (j(document).bind("mousemove", f),
                j(document).bind("mouseup", g),
                l.bind("mouseup", g));
        }
        function m(e) {
          if (o.contentRatio < 1) {
            var t = e || window.event,
              s =
                -(
                  t["delta" + o.options.axis.toUpperCase()] ||
                  t.detail ||
                  (-1 / 3) * t.wheelDelta
                ) / 40;
            (o.contentPosition -= s * o.options.wheelSpeed),
              (o.contentPosition = Math.min(
                o.contentSize - o.viewportSize,
                Math.max(0, o.contentPosition)
              )),
              n.trigger("move"),
              l.css(p, o.contentPosition / o.trackRatio),
              r.css(p, -o.contentPosition),
              (o.options.wheelLock ||
                (o.contentPosition !== o.contentSize - o.viewportSize &&
                  0 !== o.contentPosition)) &&
                (t = j.event.fix(t)).preventDefault();
          }
        }
        function f(e) {
          if (o.contentRatio < 1) {
            var t = u ? e.pageX : e.pageY,
              s = t - c;
            o.options.scrollInvert && h && (s = c - t);
            var i = Math.min(
              o.trackSize - o.thumbSize,
              Math.max(0, o.thumbPosition + s)
            );
            (o.contentPosition = i * o.trackRatio),
              n.trigger("move"),
              l.css(p, i),
              r.css(p, -o.contentPosition);
          }
        }
        function g() {
          j("body").removeClass("noSelect"),
            j(document).unbind("mousemove", f),
            j(document).unbind("mouseup", g),
            l.unbind("mouseup", g),
            (document.ontouchmove = document.ontouchend = null);
        }
        return (
          (this.contentPosition = 0),
          (this.viewportSize = 0),
          (this.contentSize = 0),
          (this.contentRatio = 0),
          (this.trackSize = 0),
          (this.trackRatio = 0),
          (this.thumbSize = 0),
          (this.thumbPosition = 0),
          (this.update = function (e) {
            var t = d.charAt(0).toUpperCase() + d.slice(1).toLowerCase();
            switch (
              ((this.viewportSize = s[0]["offset" + t]),
              (this.contentSize = r[0]["scroll" + t]),
              (this.contentRatio = this.viewportSize / this.contentSize),
              (this.trackSize = this.options.trackSize || this.viewportSize),
              (this.thumbSize = Math.min(
                this.trackSize,
                Math.max(
                  0,
                  this.options.thumbSize || this.trackSize * this.contentRatio
                )
              )),
              (this.trackRatio = this.options.thumbSize
                ? (this.contentSize - this.viewportSize) /
                  (this.trackSize - this.thumbSize)
                : this.contentSize / this.trackSize),
              (c = a.offset().top),
              i.toggleClass("disable", 1 <= this.contentRatio),
              e)
            ) {
              case "bottom":
                this.contentPosition = this.contentSize - this.viewportSize;
                break;
              case "relative":
                this.contentPosition = Math.min(
                  Math.max(this.contentSize - this.viewportSize, 0),
                  Math.max(0, this.contentPosition)
                );
                break;
              default:
                this.contentPosition = parseInt(e, 10) || 0;
            }
            return (
              l.css(p, o.contentPosition / o.trackRatio),
              r.css(p, -o.contentPosition),
              i.css(d, o.trackSize),
              a.css(d, o.trackSize),
              l.css(d, o.thumbSize),
              o
            );
          }),
          o.update(),
          h
            ? (s[0].ontouchstart = function (e) {
                1 === e.touches.length &&
                  (e.stopPropagation(), v(e.touches[0]));
              })
            : (l.bind("mousedown", v), a.bind("mousedown", f)),
          j(window).resize(function () {
            o.update("relative");
          }),
          o.options.wheel && window.addEventListener
            ? n[0].addEventListener(t, m, !1)
            : o.options.wheel && (n[0].onmousewheel = m),
          o
        );
      }
      j.fn[y] = function (e) {
        return this.each(function () {
          j.data(this, "plugin_" + y) ||
            j.data(this, "plugin_" + y, new t(j(this), e));
        });
      };
    }),
    "function" == typeof define && define.amd
      ? define(["jquery"], kc)
      : "object" == typeof exports
      ? kc(require("jquery"))
      : kc(jQuery),
    document.createElement("video"),
    document.createElement("audio"),
    document.createElement("track");
  var vjs = function (e, t, s) {
      var i;
      if ("string" == typeof e) {
        if ((0 === e.indexOf("#") && (e = e.slice(1)), vjs.players[e]))
          return vjs.players[e];
        i = vjs.el(e);
      } else i = e;
      if (!i || !i.nodeName)
        throw new TypeError(
          "The element or ID supplied is not valid. (videojs)"
        );
      return i.player || new vjs.Player(i, t, s);
    },
    videojs = vjs;
  (window.videojs = window.vjs = vjs),
    (vjs.CDN_VERSION = "4.6"),
    (vjs.ACCESS_PROTOCOL =
      "https:" == document.location.protocol ? "https://" : "http://"),
    (vjs.options = {
      techOrder: ["html5", "flash"],
      html5: {},
      flash: {},
      width: 300,
      height: 150,
      defaultVolume: 0,
      playbackRates: [],
      children: {
        mediaLoader: {},
        posterImage: {},
        textTrackDisplay: {},
        loadingSpinner: {},
        bigPlayButton: {},
        controlBar: {},
        errorDisplay: {},
      },
      notSupportedMessage: "No compatible source was found for this video.",
    }),
    "GENERATED_CDN_VSN" !== vjs.CDN_VERSION &&
      (videojs.options.flash.swf =
        vjs.ACCESS_PROTOCOL +
        "vjs.zencdn.net/" +
        vjs.CDN_VERSION +
        "/video-js.swf"),
    (vjs.players = {}),
    "function" == typeof define && define.amd
      ? define([], function () {
          return videojs;
        })
      : "object" == typeof exports &&
        "object" == typeof module &&
        (module.exports = videojs),
    (vjs.CoreObject = vjs.CoreObject = function () {}),
    (vjs.CoreObject.extend = function (e) {
      var t, s;
      for (var i in ((t =
        (e = e || {}).init ||
        e.init ||
        this.prototype.init ||
        this.prototype.init ||
        function () {}),
      ((((s = function () {
        t.apply(this, arguments);
      }).prototype = vjs.obj.create(this.prototype)).constructor = s).extend =
        vjs.CoreObject.extend),
      (s.create = vjs.CoreObject.create),
      e))
        e.hasOwnProperty(i) && (s.prototype[i] = e[i]);
      return s;
    }),
    (vjs.CoreObject.create = function () {
      var e = vjs.obj.create(this.prototype);
      return this.apply(e, arguments), e;
    }),
    (vjs.on = function (o, e, t) {
      var r = vjs.getData(o);
      r.handlers || (r.handlers = {}),
        r.handlers[e] || (r.handlers[e] = []),
        t.guid || (t.guid = vjs.guid++),
        r.handlers[e].push(t),
        r.dispatcher ||
          ((r.disabled = !1),
          (r.dispatcher = function (e) {
            if (!r.disabled) {
              e = vjs.fixEvent(e);
              var t = r.handlers[e.type];
              if (t)
                for (
                  var s = t.slice(0), i = 0, n = s.length;
                  i < n && !e.isImmediatePropagationStopped();
                  i++
                )
                  s[i].call(o, e);
            }
          })),
        1 == r.handlers[e].length &&
          (document.addEventListener
            ? o.addEventListener(e, r.dispatcher, !1)
            : document.attachEvent && o.attachEvent("on" + e, r.dispatcher));
    }),
    (vjs.off = function (t, e, s) {
      if (vjs.hasData(t)) {
        var i = vjs.getData(t);
        if (i.handlers) {
          function n(e) {
            (i.handlers[e] = []), vjs.cleanUpEvents(t, e);
          }
          if (e) {
            var o = i.handlers[e];
            if (o)
              if (s) {
                if (s.guid)
                  for (var r = 0; r < o.length; r++)
                    o[r].guid === s.guid && o.splice(r--, 1);
                vjs.cleanUpEvents(t, e);
              } else n(e);
          } else for (var a in i.handlers) n(a);
        }
      }
    }),
    (vjs.cleanUpEvents = function (e, t) {
      var s = vjs.getData(e);
      0 === s.handlers[t].length &&
        (delete s.handlers[t],
        document.removeEventListener
          ? e.removeEventListener(t, s.dispatcher, !1)
          : document.detachEvent && e.detachEvent("on" + t, s.dispatcher)),
        vjs.isEmpty(s.handlers) &&
          (delete s.handlers, delete s.dispatcher, delete s.disabled),
        vjs.isEmpty(s) && vjs.removeData(e);
    }),
    (vjs.fixEvent = function (e) {
      function t() {
        return !0;
      }
      function s() {
        return !1;
      }
      if (!e || !e.isPropagationStopped) {
        var i = e || window.event;
        for (var n in ((e = {}), i))
          "layerX" !== n &&
            "layerY" !== n &&
            "keyboardEvent.keyLocation" !== n &&
            (("returnValue" == n && i.preventDefault) || (e[n] = i[n]));
        if (
          (e.target || (e.target = e.srcElement || document),
          (e.relatedTarget =
            e.fromElement === e.target ? e.toElement : e.fromElement),
          (e.preventDefault = function () {
            i.preventDefault && i.preventDefault(),
              (e.returnValue = !1),
              (e.isDefaultPrevented = t),
              (e.defaultPrevented = !0);
          }),
          (e.isDefaultPrevented = s),
          (e.defaultPrevented = !1),
          (e.stopPropagation = function () {
            i.stopPropagation && i.stopPropagation(),
              (e.cancelBubble = !0),
              (e.isPropagationStopped = t);
          }),
          (e.isPropagationStopped = s),
          (e.stopImmediatePropagation = function () {
            i.stopImmediatePropagation && i.stopImmediatePropagation(),
              (e.isImmediatePropagationStopped = t),
              e.stopPropagation();
          }),
          (e.isImmediatePropagationStopped = s),
          null != e.clientX)
        ) {
          var o = document.documentElement,
            r = document.body;
          (e.pageX =
            e.clientX +
            ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
            ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              e.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0));
        }
        (e.which = e.charCode || e.keyCode),
          null != e.button &&
            (e.button =
              1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0);
      }
      return e;
    }),
    (vjs.trigger = function (e, t) {
      var s = vjs.hasData(e) ? vjs.getData(e) : {},
        i = e.parentNode || e.ownerDocument;
      if (
        ("string" == typeof t && (t = { type: t, target: e }),
        (t = vjs.fixEvent(t)),
        s.dispatcher && s.dispatcher.call(e, t),
        i && !t.isPropagationStopped() && !1 !== t.bubbles)
      )
        vjs.trigger(i, t);
      else if (!i && !t.defaultPrevented) {
        var n = vjs.getData(t.target);
        t.target[t.type] &&
          ((n.disabled = !0),
          "function" == typeof t.target[t.type] && t.target[t.type](),
          (n.disabled = !1));
      }
      return !t.defaultPrevented;
    }),
    (vjs.one = function (e, t, s) {
      var i = function () {
        vjs.off(e, t, i), s.apply(this, arguments);
      };
      (i.guid = s.guid = s.guid || vjs.guid++), vjs.on(e, t, i);
    });
  var hasOwnProp = Object.prototype.hasOwnProperty,
    Ee,
    Fe,
    De;
  (vjs.createEl = function (e, t) {
    var s, i;
    for (i in ((s = document.createElement(e || "div")), t))
      hasOwnProp.call(t, i) &&
        (-1 !== i.indexOf("aria-") || "role" == i
          ? s.setAttribute(i, t[i])
          : (s[i] = t[i]));
    return s;
  }),
    (vjs.capitalize = function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
    (vjs.obj = {}),
    (vjs.obj.create =
      Object.create ||
      function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    (vjs.obj.each = function (e, t, s) {
      for (var i in e) hasOwnProp.call(e, i) && t.call(s || this, i, e[i]);
    }),
    (vjs.obj.merge = function (e, t) {
      if (!t) return e;
      for (var s in t) hasOwnProp.call(t, s) && (e[s] = t[s]);
      return e;
    }),
    (vjs.obj.deepMerge = function (e, t) {
      var s, i, n;
      for (s in ((e = vjs.obj.copy(e)), t))
        hasOwnProp.call(t, s) &&
          ((i = e[s]),
          (n = t[s]),
          vjs.obj.isPlain(i) && vjs.obj.isPlain(n)
            ? (e[s] = vjs.obj.deepMerge(i, n))
            : (e[s] = t[s]));
      return e;
    }),
    (vjs.obj.copy = function (e) {
      return vjs.obj.merge({}, e);
    }),
    (vjs.obj.isPlain = function (e) {
      return (
        !!e &&
        "object" == typeof e &&
        "[object Object]" === e.toString() &&
        e.constructor === Object
      );
    }),
    (vjs.bind = function (e, t, s) {
      t.guid || (t.guid = vjs.guid++);
      function i() {
        return t.apply(e, arguments);
      }
      return (i.guid = s ? s + "_" + t.guid : t.guid), i;
    }),
    (vjs.cache = {}),
    (vjs.guid = 1),
    (vjs.expando = "vdata" + new Date().getTime()),
    (vjs.getData = function (e) {
      var t = e[vjs.expando];
      return (
        t || ((t = e[vjs.expando] = vjs.guid++), (vjs.cache[t] = {})),
        vjs.cache[t]
      );
    }),
    (vjs.hasData = function (e) {
      var t = e[vjs.expando];
      return !(!t || vjs.isEmpty(vjs.cache[t]));
    }),
    (vjs.removeData = function (t) {
      var e = t[vjs.expando];
      if (e) {
        delete vjs.cache[e];
        try {
          delete t[vjs.expando];
        } catch (e) {
          t.removeAttribute
            ? t.removeAttribute(vjs.expando)
            : (t[vjs.expando] = null);
        }
      }
    }),
    (vjs.isEmpty = function (e) {
      for (var t in e) if (null !== e[t]) return !1;
      return !0;
    }),
    (vjs.addClass = function (e, t) {
      -1 == (" " + e.className + " ").indexOf(" " + t + " ") &&
        (e.className = "" === e.className ? t : e.className + " " + t);
    }),
    (vjs.removeClass = function (e, t) {
      var s, i;
      if (-1 != e.className.indexOf(t)) {
        for (i = (s = e.className.split(" ")).length - 1; 0 <= i; i--)
          s[i] === t && s.splice(i, 1);
        e.className = s.join(" ");
      }
    }),
    (vjs.TEST_VID = vjs.createEl("video")),
    (vjs.USER_AGENT = navigator.userAgent),
    (vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT)),
    (vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT)),
    (vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT)),
    (vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD),
    (vjs.IOS_VERSION = (function () {
      var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
      if (e && e[1]) return e[1];
    })()),
    (vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT)),
    (vjs.ANDROID_VERSION =
      ((De = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)),
      De
        ? ((Ee = De[1] && parseFloat(De[1])),
          (Fe = De[2] && parseFloat(De[2])),
          Ee && Fe ? parseFloat(De[1] + "." + De[2]) : Ee || null)
        : null)),
    (vjs.IS_OLD_ANDROID =
      vjs.IS_ANDROID &&
      /webkit/i.test(vjs.USER_AGENT) &&
      vjs.ANDROID_VERSION < 2.3),
    (vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT)),
    (vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT)),
    (vjs.TOUCH_ENABLED = !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    )),
    (vjs.getAttributeValues = function (e) {
      var t, s, i, n, o;
      if (
        ((t = {}),
        (s = ",autoplay,controls,loop,muted,default,"),
        e && e.attributes && 0 < e.attributes.length)
      )
        for (var r = (i = e.attributes).length - 1; 0 <= r; r--)
          (n = i[r].name),
            (o = i[r].value),
            ("boolean" != typeof e[n] && -1 === s.indexOf("," + n + ",")) ||
              (o = null !== o),
            (t[n] = o);
      return t;
    }),
    (vjs.getComputedDimension = function (e, t) {
      var s = "";
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (s = document.defaultView
              .getComputedStyle(e, "")
              .getPropertyValue(t))
          : e.currentStyle &&
            (s =
              e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"),
        s
      );
    }),
    (vjs.insertFirst = function (e, t) {
      t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
    }),
    (vjs.browser = {}),
    (vjs.el = function (e) {
      return (
        0 === e.indexOf("#") && (e = e.slice(1)), document.getElementById(e)
      );
    }),
    (vjs.formatTime = function (e, t) {
      t = t || e;
      var s = Math.floor(e % 60),
        i = Math.floor((e / 60) % 60),
        n = Math.floor(e / 3600),
        o = Math.floor((t / 60) % 60),
        r = Math.floor(t / 3600);
      return (
        (!isNaN(e) && e !== 1 / 0) || (n = i = s = "-"),
        (n = 0 < n || 0 < r ? n + ":" : "") +
          (i = ((n || 10 <= o) && i < 10 ? "0" + i : i) + ":") +
          (s = s < 10 ? "0" + s : s)
      );
    }),
    (vjs.blockTextSelection = function () {
      document.body.focus(),
        (document.onselectstart = function () {
          return !1;
        });
    }),
    (vjs.unblockTextSelection = function () {
      document.onselectstart = function () {
        return !0;
      };
    }),
    (vjs.trim = function (e) {
      return (e + "").replace(/^\s+|\s+$/g, "");
    }),
    (vjs.round = function (e, t) {
      return (t = t || 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
    }),
    (vjs.createTimeRange = function (e, t) {
      return {
        length: 1,
        start: function () {
          return e;
        },
        end: function () {
          return t;
        },
      };
    }),
    (vjs.get = function (e, t, s, i) {
      var n, o, r, a;
      (s = s || function () {}),
        "undefined" == typeof XMLHttpRequest &&
          (window.XMLHttpRequest = function () {
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
              return new window.ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw new Error("This browser does not support XMLHttpRequest.");
          }),
        (o = new XMLHttpRequest()),
        (r = vjs.parseUrl(e)),
        (a = window.location),
        !(r.protocol + r.host !== a.protocol + a.host) ||
        !window.XDomainRequest ||
        "withCredentials" in o
          ? ((n = "file:" == r.protocol || "file:" == a.protocol),
            (o.onreadystatechange = function () {
              4 === o.readyState &&
                (200 === o.status || (n && 0 === o.status)
                  ? t(o.responseText)
                  : s(o.responseText));
            }))
          : (((o = new window.XDomainRequest()).onload = function () {
              t(o.responseText);
            }),
            (o.onerror = s),
            (o.onprogress = function () {}),
            (o.ontimeout = s));
      try {
        o.open("GET", e, !0), i && (o.withCredentials = !0);
      } catch (e) {
        return void s(e);
      }
      try {
        o.send();
      } catch (e) {
        s(e);
      }
    }),
    (vjs.setLocalStorage = function (e, t) {
      try {
        var s = window.localStorage || !1;
        if (!s) return;
        s[e] = t;
      } catch (e) {
        22 == e.code || 1014 == e.code
          ? vjs.log("LocalStorage Full (VideoJS)", e)
          : 18 == e.code
          ? vjs.log("LocalStorage not allowed (VideoJS)", e)
          : vjs.log("LocalStorage Error (VideoJS)", e);
      }
    }),
    (vjs.getAbsoluteURL = function (e) {
      return (
        e.match(/^https?:\/\//) ||
          (e = vjs.createEl("div", { innerHTML: '<a href="' + e + '">x</a>' })
            .firstChild.href),
        e
      );
    }),
    (vjs.parseUrl = function (e) {
      var t, s, i, n, o;
      (n = [
        "protocol",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash",
        "host",
      ]),
        (i =
          "" === (s = vjs.createEl("a", { href: e })).host &&
          "file:" !== s.protocol) &&
          (((t = vjs.createEl("div")).innerHTML = '<a href="' + e + '"></a>'),
          (s = t.firstChild),
          t.setAttribute("style", "display:none; position:absolute;"),
          document.body.appendChild(t)),
        (o = {});
      for (var r = 0; r < n.length; r++) o[n[r]] = s[n[r]];
      return i && document.body.removeChild(t), o;
    });
  var _noop = function () {},
    _console = window.console || { log: _noop, warn: _noop, error: _noop };
  function _logType(e, t) {
    var s = Array.prototype.slice.call(t);
    e ? s.unshift(e.toUpperCase() + ":") : (e = "log"),
      vjs.log.history.push(s),
      s.unshift("VIDEOJS:"),
      _console[e].apply
        ? _console[e].apply(_console, s)
        : _console[e](s.join(" "));
  }
  (vjs.log = function () {
    _logType(null, arguments);
  }),
    (vjs.log.history = []),
    (vjs.log.error = function () {
      _logType("error", arguments);
    }),
    (vjs.log.warn = function () {
      _logType("warn", arguments);
    }),
    (vjs.findPosition = function (e) {
      var t, s, i, n, o, r, a, l, c;
      return (
        e.getBoundingClientRect &&
          e.parentNode &&
          (t = e.getBoundingClientRect()),
        t
          ? ((s = document.documentElement),
            (i = document.body),
            (n = s.clientLeft || i.clientLeft || 0),
            (o = window.pageXOffset || i.scrollLeft),
            (r = t.left + o - n),
            (a = s.clientTop || i.clientTop || 0),
            (l = window.pageYOffset || i.scrollTop),
            (c = t.top + l - a),
            { left: vjs.round(r), top: vjs.round(c) })
          : { left: 0, top: 0 }
      );
    }),
    (vjs.util = {}),
    (vjs.util.mergeOptions = function (e, t) {
      var s, i, n;
      for (s in ((e = vjs.obj.copy(e)), t))
        t.hasOwnProperty(s) &&
          ((i = e[s]),
          (n = t[s]),
          vjs.obj.isPlain(i) && vjs.obj.isPlain(n)
            ? (e[s] = vjs.util.mergeOptions(i, n))
            : (e[s] = t[s]));
      return e;
    }),
    (vjs.Component = vjs.CoreObject.extend({
      init: function (e, t, s) {
        (this.player_ = e),
          (this.options_ = vjs.obj.copy(this.options_)),
          (t = this.options(t)),
          (this.id_ =
            t.id ||
            (t.el && t.el.id ? t.el.id : e.id() + "_component_" + vjs.guid++)),
          (this.name_ = t.name || null),
          (this.el_ = t.el || this.createEl()),
          (this.children_ = []),
          (this.childIndex_ = {}),
          (this.childNameIndex_ = {}),
          this.initChildren(),
          this.ready(s),
          !1 !== t.reportTouchActivity && this.enableTouchActivity();
      },
    })),
    (vjs.Component.prototype.dispose = function () {
      if ((this.trigger({ type: "dispose", bubbles: !1 }), this.children_))
        for (var e = this.children_.length - 1; 0 <= e; e--)
          this.children_[e].dispose && this.children_[e].dispose();
      (this.children_ = null),
        (this.childIndex_ = null),
        (this.childNameIndex_ = null),
        this.off(),
        this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
        vjs.removeData(this.el_),
        (this.el_ = null);
    }),
    (vjs.Component.prototype.player_ = !0),
    (vjs.Component.prototype.player = function () {
      return this.player_;
    }),
    vjs.Component.prototype.options_,
    (vjs.Component.prototype.options = function (e) {
      return void 0 === e
        ? this.options_
        : (this.options_ = vjs.util.mergeOptions(this.options_, e));
    }),
    vjs.Component.prototype.el_,
    (vjs.Component.prototype.createEl = function (e, t) {
      return vjs.createEl(e, t);
    }),
    (vjs.Component.prototype.el = function () {
      return this.el_;
    }),
    vjs.Component.prototype.contentEl_,
    (vjs.Component.prototype.contentEl = function () {
      return this.contentEl_ || this.el_;
    }),
    vjs.Component.prototype.id_,
    (vjs.Component.prototype.id = function () {
      return this.id_;
    }),
    vjs.Component.prototype.name_,
    (vjs.Component.prototype.name = function () {
      return this.name_;
    }),
    vjs.Component.prototype.children_,
    (vjs.Component.prototype.children = function () {
      return this.children_;
    }),
    vjs.Component.prototype.childIndex_,
    (vjs.Component.prototype.getChildById = function (e) {
      return this.childIndex_[e];
    }),
    vjs.Component.prototype.childNameIndex_,
    (vjs.Component.prototype.getChild = function (e) {
      return this.childNameIndex_[e];
    }),
    (vjs.Component.prototype.addChild = function (e, t) {
      var s, i, n;
      return (
        (s =
          "string" == typeof e
            ? ((n = e),
              (i = (t = t || {}).componentClass || vjs.capitalize(n)),
              (t.name = n),
              new window.videojs[i](this.player_ || this, t))
            : e),
        this.children_.push(s),
        "function" == typeof s.id && (this.childIndex_[s.id()] = s),
        (n = n || (s.name && s.name())) && (this.childNameIndex_[n] = s),
        "function" == typeof s.el &&
          s.el() &&
          this.contentEl().appendChild(s.el()),
        s
      );
    }),
    (vjs.Component.prototype.removeChild = function (e) {
      if (
        ("string" == typeof e && (e = this.getChild(e)), e && this.children_)
      ) {
        for (var t = !1, s = this.children_.length - 1; 0 <= s; s--)
          if (this.children_[s] === e) {
            (t = !0), this.children_.splice(s, 1);
            break;
          }
        if (t) {
          (this.childIndex_[e.id] = null),
            (this.childNameIndex_[e.name] = null);
          var i = e.el();
          i &&
            i.parentNode === this.contentEl() &&
            this.contentEl().removeChild(e.el());
        }
      }
    }),
    (vjs.Component.prototype.initChildren = function () {
      var s, e, t, i, n;
      if ((e = (s = this).options().children))
        if (e instanceof Array)
          for (var o = 0; o < e.length; o++)
            (n =
              "string" == typeof (t = e[o])
                ? ((i = t), {})
                : ((i = t.name), t)),
              (s[i] = s.addChild(i, n));
        else
          vjs.obj.each(e, function (e, t) {
            !1 !== t && (s[e] = s.addChild(e, t));
          });
    }),
    (vjs.Component.prototype.buildCSSClass = function () {
      return "";
    }),
    (vjs.Component.prototype.on = function (e, t) {
      return vjs.on(this.el_, e, vjs.bind(this, t)), this;
    }),
    (vjs.Component.prototype.off = function (e, t) {
      return vjs.off(this.el_, e, t), this;
    }),
    (vjs.Component.prototype.one = function (e, t) {
      return vjs.one(this.el_, e, vjs.bind(this, t)), this;
    }),
    (vjs.Component.prototype.trigger = function (e, t) {
      return vjs.trigger(this.el_, e, t), this;
    }),
    vjs.Component.prototype.isReady_,
    (vjs.Component.prototype.isReadyOnInitFinish_ = !0),
    vjs.Component.prototype.readyQueue_,
    (vjs.Component.prototype.ready = function (e) {
      return (
        e &&
          (this.isReady_
            ? e.call(this)
            : (void 0 === this.readyQueue_ && (this.readyQueue_ = []),
              this.readyQueue_.push(e))),
        this
      );
    }),
    (vjs.Component.prototype.triggerReady = function () {
      this.isReady_ = !0;
      var e = this.readyQueue_;
      if (e && 0 < e.length) {
        for (var t = 0, s = e.length; t < s; t++) e[t].call(this);
        (this.readyQueue_ = []), this.trigger("ready");
      }
    }),
    (vjs.Component.prototype.addClass = function (e) {
      return vjs.addClass(this.el_, e), this;
    }),
    (vjs.Component.prototype.removeClass = function (e) {
      return vjs.removeClass(this.el_, e), this;
    }),
    (vjs.Component.prototype.show = function () {
      return (this.el_.style.display = "block"), this;
    }),
    (vjs.Component.prototype.hide = function () {
      return (this.el_.style.display = "none"), this;
    }),
    (vjs.Component.prototype.lockShowing = function () {
      return this.addClass("vjs-lock-showing"), this;
    }),
    (vjs.Component.prototype.unlockShowing = function () {
      return this.removeClass("vjs-lock-showing"), this;
    }),
    (vjs.Component.prototype.disable = function () {
      this.hide(), (this.show = function () {});
    }),
    (vjs.Component.prototype.width = function (e, t) {
      return this.dimension("width", e, t);
    }),
    (vjs.Component.prototype.height = function (e, t) {
      return this.dimension("height", e, t);
    }),
    (vjs.Component.prototype.dimensions = function (e, t) {
      return this.width(e, !0).height(t);
    }),
    (vjs.Component.prototype.dimension = function (e, t, s) {
      if (void 0 !== t)
        return (
          -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px")
            ? (this.el_.style[e] = t)
            : (this.el_.style[e] = "auto" === t ? "" : t + "px"),
          s || this.trigger("resize"),
          this
        );
      if (!this.el_) return 0;
      var i = this.el_.style[e],
        n = i.indexOf("px");
      return -1 !== n
        ? parseInt(i.slice(0, n), 10)
        : parseInt(this.el_["offset" + vjs.capitalize(e)], 10);
    }),
    vjs.Component.prototype.onResize,
    (vjs.Component.prototype.emitTapEvents = function () {
      var t, s, i, e, n, o;
      (t = 0),
        (s = null),
        this.on("touchstart", function (e) {
          1 === e.touches.length &&
            ((s = e.touches[0]), (t = new Date().getTime()), (i = !0));
        }),
        this.on("touchmove", function (e) {
          1 < e.touches.length
            ? (i = !1)
            : s &&
              ((n = e.touches[0].pageX - s.pageX),
              (o = e.touches[0].pageY - s.pageY),
              22 < Math.sqrt(n * n + o * o) && (i = !1));
        }),
        (e = function () {
          i = !1;
        }),
        this.on("touchleave", e),
        this.on("touchcancel", e),
        this.on("touchend", function (e) {
          !(s = null) === i &&
            new Date().getTime() - t < 250 &&
            (e.preventDefault(), this.trigger("tap"));
        });
    }),
    (vjs.Component.prototype.enableTouchActivity = function () {
      var t, s, e;
      (t = vjs.bind(this.player(), this.player().reportUserActivity)),
        this.on("touchstart", function () {
          t(), clearInterval(s), (s = setInterval(t, 250));
        }),
        (e = function (e) {
          t(), clearInterval(s);
        }),
        this.on("touchmove", t),
        this.on("touchend", e),
        this.on("touchcancel", e);
    }),
    (vjs.Button = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          this.emitTapEvents(),
          this.on("tap", this.onClick),
          this.on("click", this.onClick),
          this.on("focus", this.onFocus),
          this.on("blur", this.onBlur);
      },
    })),
    (vjs.Button.prototype.createEl = function (e, t) {
      var s;
      return (
        (t = vjs.obj.merge(
          {
            className: this.buildCSSClass(),
            role: "button",
            "aria-live": "polite",
            tabIndex: 0,
          },
          t
        )),
        (s = vjs.Component.prototype.createEl.call(this, e, t)),
        t.innerHTML ||
          ((this.contentEl_ = vjs.createEl("div", {
            className: "vjs-control-content",
          })),
          (this.controlText_ = vjs.createEl("span", {
            className: "vjs-control-text",
            innerHTML: this.buttonText || "Need Text",
          })),
          this.contentEl_.appendChild(this.controlText_),
          s.appendChild(this.contentEl_)),
        s
      );
    }),
    (vjs.Button.prototype.buildCSSClass = function () {
      return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this);
    }),
    (vjs.Button.prototype.onClick = function () {}),
    (vjs.Button.prototype.onFocus = function () {
      vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
    }),
    (vjs.Button.prototype.onKeyPress = function (e) {
      (32 != e.which && 13 != e.which) || (e.preventDefault(), this.onClick());
    }),
    (vjs.Button.prototype.onBlur = function () {
      vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
    }),
    (vjs.Slider = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          (this.bar = this.getChild(this.options_.barName)),
          (this.handle = this.getChild(this.options_.handleName)),
          this.on("mousedown", this.onMouseDown),
          this.on("touchstart", this.onMouseDown),
          this.on("focus", this.onFocus),
          this.on("blur", this.onBlur),
          this.on("click", this.onClick),
          this.player_.on("controlsvisible", vjs.bind(this, this.update)),
          e.on(this.playerEvent, vjs.bind(this, this.update)),
          (this.boundEvents = {});
      },
    })),
    (vjs.Slider.prototype.createEl = function (e, t) {
      return (
        ((t = t || {}).className = t.className + " vjs-slider"),
        (t = vjs.obj.merge(
          {
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0,
          },
          t
        )),
        vjs.Component.prototype.createEl.call(this, e, t)
      );
    }),
    (vjs.Slider.prototype.onMouseDown = function (e) {
      e.preventDefault(),
        vjs.blockTextSelection(),
        (this.boundEvents.move = vjs.bind(this, this.onMouseMove)),
        (this.boundEvents.end = vjs.bind(this, this.onMouseUp)),
        vjs.on(document, "mousemove", this.boundEvents.move),
        vjs.on(document, "mouseup", this.boundEvents.end),
        vjs.on(document, "touchmove", this.boundEvents.move),
        vjs.on(document, "touchend", this.boundEvents.end),
        this.onMouseMove(e);
    }),
    (vjs.Slider.prototype.onMouseUp = function () {
      vjs.unblockTextSelection(),
        vjs.off(document, "mousemove", this.boundEvents.move, !1),
        vjs.off(document, "mouseup", this.boundEvents.end, !1),
        vjs.off(document, "touchmove", this.boundEvents.move, !1),
        vjs.off(document, "touchend", this.boundEvents.end, !1),
        this.update();
    }),
    (vjs.Slider.prototype.update = function () {
      if (this.el_) {
        var e,
          t = this.getPercent(),
          s = this.handle,
          i = this.bar;
        if ((isNaN(t) && (t = 0), (e = t), s)) {
          var n = this.el_.offsetWidth,
            o = s.el().offsetWidth,
            r = o ? o / n : 0,
            a = t * (1 - r);
          (e = a + r / 2), (s.el().style.left = vjs.round(100 * a, 2) + "%");
        }
        i.el().style.width = vjs.round(100 * e, 2) + "%";
      }
    }),
    (vjs.Slider.prototype.calculateDistance = function (e) {
      var t, s, i, n, o, r, a, l, c;
      if (
        ((t = this.el_),
        (s = vjs.findPosition(t)),
        (o = r = t.offsetWidth),
        (a = this.handle),
        this.options_.vertical)
      ) {
        if (
          ((n = s.top),
          (c = e.changedTouches ? e.changedTouches[0].pageY : e.pageY),
          a)
        ) {
          var u = a.el().offsetHeight;
          (n += u / 2), (r -= u);
        }
        return Math.max(0, Math.min(1, (n - c + r) / r));
      }
      if (
        ((i = s.left),
        (l = e.changedTouches ? e.changedTouches[0].pageX : e.pageX),
        a)
      ) {
        var h = a.el().offsetWidth;
        (i += h / 2), (o -= h);
      }
      return Math.max(0, Math.min(1, (l - i) / o));
    }),
    (vjs.Slider.prototype.onFocus = function () {
      vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
    }),
    (vjs.Slider.prototype.onKeyPress = function (e) {
      37 == e.which
        ? (e.preventDefault(), this.stepBack())
        : 39 == e.which && (e.preventDefault(), this.stepForward());
    }),
    (vjs.Slider.prototype.onBlur = function () {
      vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
    }),
    (vjs.Slider.prototype.onClick = function (e) {
      e.stopImmediatePropagation(), e.preventDefault();
    }),
    (vjs.SliderHandle = vjs.Component.extend()),
    (vjs.SliderHandle.prototype.defaultValue = 0),
    (vjs.SliderHandle.prototype.createEl = function (e, t) {
      return (
        ((t = t || {}).className = t.className + " vjs-slider-handle"),
        (t = vjs.obj.merge(
          {
            innerHTML:
              '<span class="vjs-control-text">' + this.defaultValue + "</span>",
          },
          t
        )),
        vjs.Component.prototype.createEl.call(this, "div", t)
      );
    }),
    (vjs.Menu = vjs.Component.extend()),
    (vjs.Menu.prototype.addItem = function (e) {
      this.addChild(e),
        e.on(
          "click",
          vjs.bind(this, function () {
            this.unlockShowing();
          })
        );
    }),
    (vjs.Menu.prototype.createEl = function () {
      var e = this.options().contentElType || "ul";
      this.contentEl_ = vjs.createEl(e, { className: "vjs-menu-content" });
      var t = vjs.Component.prototype.createEl.call(this, "div", {
        append: this.contentEl_,
        className: "vjs-menu",
      });
      return (
        t.appendChild(this.contentEl_),
        vjs.on(t, "click", function (e) {
          e.preventDefault(), e.stopImmediatePropagation();
        }),
        t
      );
    }),
    (vjs.MenuItem = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t), this.selected(t.selected);
      },
    })),
    (vjs.MenuItem.prototype.createEl = function (e, t) {
      return vjs.Button.prototype.createEl.call(
        this,
        "li",
        vjs.obj.merge(
          { className: "vjs-menu-item", innerHTML: this.options_.label },
          t
        )
      );
    }),
    (vjs.MenuItem.prototype.onClick = function () {
      this.selected(!0);
    }),
    (vjs.MenuItem.prototype.selected = function (e) {
      e
        ? (this.addClass("vjs-selected"),
          this.el_.setAttribute("aria-selected", !0))
        : (this.removeClass("vjs-selected"),
          this.el_.setAttribute("aria-selected", !1));
    }),
    (vjs.MenuButton = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t),
          (this.menu = this.createMenu()),
          this.addChild(this.menu),
          this.items && 0 === this.items.length && this.hide(),
          this.on("keyup", this.onKeyPress),
          this.el_.setAttribute("aria-haspopup", !0),
          this.el_.setAttribute("role", "button");
      },
    })),
    (vjs.MenuButton.prototype.buttonPressed_ = !1),
    (vjs.MenuButton.prototype.createMenu = function () {
      var e = new vjs.Menu(this.player_);
      if (
        (this.options().title &&
          e
            .contentEl()
            .appendChild(
              vjs.createEl("li", {
                className: "vjs-menu-title",
                innerHTML: vjs.capitalize(this.options().title),
                tabindex: -1,
              })
            ),
        (this.items = this.createItems()),
        this.items)
      )
        for (var t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
      return e;
    }),
    (vjs.MenuButton.prototype.createItems = function () {}),
    (vjs.MenuButton.prototype.buildCSSClass = function () {
      return (
        this.className +
        " vjs-menu-button " +
        vjs.Button.prototype.buildCSSClass.call(this)
      );
    }),
    (vjs.MenuButton.prototype.onFocus = function () {}),
    (vjs.MenuButton.prototype.onBlur = function () {}),
    (vjs.MenuButton.prototype.onClick = function () {
      this.one(
        "mouseout",
        vjs.bind(this, function () {
          this.menu.unlockShowing(), this.el_.blur();
        })
      ),
        this.buttonPressed_ ? this.unpressButton() : this.pressButton();
    }),
    (vjs.MenuButton.prototype.onKeyPress = function (e) {
      e.preventDefault(),
        32 == e.which || 13 == e.which
          ? this.buttonPressed_
            ? this.unpressButton()
            : this.pressButton()
          : 27 == e.which && this.buttonPressed_ && this.unpressButton();
    }),
    (vjs.MenuButton.prototype.pressButton = function () {
      (this.buttonPressed_ = !0),
        this.menu.lockShowing(),
        this.el_.setAttribute("aria-pressed", !0),
        this.items && 0 < this.items.length && this.items[0].el().focus();
    }),
    (vjs.MenuButton.prototype.unpressButton = function () {
      (this.buttonPressed_ = !1),
        this.menu.unlockShowing(),
        this.el_.setAttribute("aria-pressed", !1);
    }),
    (vjs.MediaError = function (e) {
      "number" == typeof e
        ? (this.code = e)
        : "string" == typeof e
        ? (this.message = e)
        : "object" == typeof e && vjs.obj.merge(this, e),
        this.message ||
          (this.message = vjs.MediaError.defaultMessages[this.code] || "");
    }),
    (vjs.MediaError.prototype.code = 0),
    (vjs.MediaError.prototype.message = ""),
    (vjs.MediaError.prototype.status = null),
    (vjs.MediaError.errorTypes = [
      "MEDIA_ERR_CUSTOM",
      "MEDIA_ERR_ABORTED",
      "MEDIA_ERR_NETWORK",
      "MEDIA_ERR_DECODE",
      "MEDIA_ERR_SRC_NOT_SUPPORTED",
      "MEDIA_ERR_ENCRYPTED",
    ]),
    (vjs.MediaError.defaultMessages = {
      1: "You aborted the video playback",
      2: "A network error caused the video download to fail part-way.",
      3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
      4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
      5: "The video is encrypted and we do not have the keys to decrypt it.",
    });
  for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++)
    (vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum),
      (vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum);
  !(function () {
    var e, t, s, i;
    for (
      vjs.browser.fullscreenAPI,
        t = (e = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ])[0],
        i = 0;
      i < e.length;
      i++
    )
      if (e[i][1] in document) {
        s = e[i];
        break;
      }
    if (s)
      for (vjs.browser.fullscreenAPI = {}, i = 0; i < s.length; i++)
        vjs.browser.fullscreenAPI[t[i]] = s[i];
  })(),
    (vjs.Player = vjs.Component.extend({
      init: function (e, t, s) {
        ((this.tag = e).id = e.id || "vjs_video_" + vjs.guid++),
          (t = vjs.obj.merge(this.getTagSettings(e), t)),
          (this.cache_ = {}),
          (this.poster_ = t.poster),
          (this.controls_ = t.controls),
          (e.controls = !1),
          (t.reportTouchActivity = !1),
          vjs.Component.call(this, this, t, s),
          this.controls()
            ? this.addClass("vjs-controls-enabled")
            : this.addClass("vjs-controls-disabled"),
          (vjs.players[this.id_] = this),
          t.plugins &&
            vjs.obj.each(
              t.plugins,
              function (e, t) {
                this[e](t);
              },
              this
            ),
          this.listenForUserActivity();
      },
    })),
    (vjs.Player.prototype.options_ = vjs.options),
    (vjs.Player.prototype.dispose = function () {
      this.trigger("dispose"),
        this.off("dispose"),
        (vjs.players[this.id_] = null),
        this.tag && this.tag.player && (this.tag.player = null),
        this.el_ && this.el_.player && (this.el_.player = null),
        this.stopTrackingProgress(),
        this.stopTrackingCurrentTime(),
        this.tech && this.tech.dispose(),
        vjs.Component.prototype.dispose.call(this);
    }),
    (vjs.Player.prototype.getTagSettings = function (e) {
      var t,
        s,
        i,
        n,
        o,
        r = { sources: [], tracks: [] };
      if ((vjs.obj.merge(r, vjs.getAttributeValues(e)), e.hasChildNodes()))
        for (n = 0, o = (t = e.childNodes).length; n < o; n++)
          "source" === (i = (s = t[n]).nodeName.toLowerCase())
            ? r.sources.push(vjs.getAttributeValues(s))
            : "track" === i && r.tracks.push(vjs.getAttributeValues(s));
      return r;
    }),
    (vjs.Player.prototype.createEl = function () {
      var e = (this.el_ = vjs.Component.prototype.createEl.call(this, "div")),
        t = this.tag;
      if (
        (t.removeAttribute("width"),
        t.removeAttribute("height"),
        t.hasChildNodes())
      ) {
        var s, i, n, o, r;
        for (i = (s = t.childNodes).length, r = []; i--; )
          "track" === (o = s[i]).nodeName.toLowerCase() && r.push(o);
        for (n = 0; n < r.length; n++) t.removeChild(r[n]);
      }
      return (
        (e.id = t.id),
        (e.className = t.className),
        (t.id += "_html5_api"),
        (t.className = "vjs-tech"),
        (t.player = e.player = this),
        this.addClass("vjs-paused"),
        this.width(this.options_.width, !0),
        this.height(this.options_.height, !0),
        t.parentNode && t.parentNode.insertBefore(e, t),
        vjs.insertFirst(t, e),
        (this.el_ = e),
        this.on("loadstart", this.onLoadStart),
        this.on("ended", this.onEnded),
        this.on("play", this.onPlay),
        this.on("firstplay", this.onFirstPlay),
        this.on("pause", this.onPause),
        this.on("progress", this.onProgress),
        this.on("durationchange", this.onDurationChange),
        this.on("fullscreenchange", this.onFullscreenChange),
        e
      );
    }),
    (vjs.Player.prototype.loadTech = function (e, t) {
      this.tech && this.unloadTech(),
        "Html5" !== e &&
          this.tag &&
          (vjs.Html5.disposeMediaElement(this.tag), (this.tag = null)),
        (this.techName = e),
        (this.isReady_ = !1);
      var s = vjs.obj.merge(
        { source: t, parentEl: this.el_ },
        this.options_[e.toLowerCase()]
      );
      t &&
        (t.src == this.cache_.src &&
          0 < this.cache_.currentTime &&
          (s.startTime = this.cache_.currentTime),
        (this.cache_.src = t.src)),
        (this.tech = new window.videojs[e](this, s)),
        this.tech.ready(function () {
          this.player_.triggerReady(),
            this.features.progressEvents || this.player_.manualProgressOn(),
            this.features.timeupdateEvents ||
              this.player_.manualTimeUpdatesOn();
        });
    }),
    (vjs.Player.prototype.unloadTech = function () {
      (this.isReady_ = !1),
        this.tech.dispose(),
        this.manualProgress && this.manualProgressOff(),
        this.manualTimeUpdates && this.manualTimeUpdatesOff(),
        (this.tech = !1);
    }),
    (vjs.Player.prototype.manualProgressOn = function () {
      (this.manualProgress = !0),
        this.trackProgress(),
        this.tech &&
          this.tech.one("progress", function () {
            (this.features.progressEvents = !0),
              this.player_.manualProgressOff();
          });
    }),
    (vjs.Player.prototype.manualProgressOff = function () {
      (this.manualProgress = !1), this.stopTrackingProgress();
    }),
    (vjs.Player.prototype.trackProgress = function () {
      this.progressInterval = setInterval(
        vjs.bind(this, function () {
          this.cache_.bufferEnd < this.buffered().end(0)
            ? this.trigger("progress")
            : 1 == this.bufferedPercent() &&
              (this.stopTrackingProgress(), this.trigger("progress"));
        }),
        500
      );
    }),
    (vjs.Player.prototype.stopTrackingProgress = function () {
      clearInterval(this.progressInterval);
    }),
    (vjs.Player.prototype.manualTimeUpdatesOn = function () {
      (this.manualTimeUpdates = !0),
        this.on("play", this.trackCurrentTime),
        this.on("pause", this.stopTrackingCurrentTime),
        this.tech &&
          this.tech.one("timeupdate", function () {
            (this.features.timeupdateEvents = !0),
              this.player_.manualTimeUpdatesOff();
          });
    }),
    (vjs.Player.prototype.manualTimeUpdatesOff = function () {
      (this.manualTimeUpdates = !1),
        this.stopTrackingCurrentTime(),
        this.off("play", this.trackCurrentTime),
        this.off("pause", this.stopTrackingCurrentTime);
    }),
    (vjs.Player.prototype.trackCurrentTime = function () {
      this.currentTimeInterval && this.stopTrackingCurrentTime(),
        (this.currentTimeInterval = setInterval(
          vjs.bind(this, function () {
            this.trigger("timeupdate");
          }),
          250
        ));
    }),
    (vjs.Player.prototype.stopTrackingCurrentTime = function () {
      clearInterval(this.currentTimeInterval), this.trigger("timeupdate");
    }),
    (vjs.Player.prototype.onLoadStart = function () {
      this.error(null),
        this.paused()
          ? (this.hasStarted(!1),
            this.one("play", function () {
              this.hasStarted(!0);
            }))
          : this.trigger("firstplay");
    }),
    (vjs.Player.prototype.hasStarted_ = !1),
    (vjs.Player.prototype.hasStarted = function (e) {
      return void 0 !== e
        ? (this.hasStarted_ !== e &&
            ((this.hasStarted_ = e)
              ? (this.addClass("vjs-has-started"), this.trigger("firstplay"))
              : this.removeClass("vjs-has-started")),
          this)
        : this.hasStarted_;
    }),
    vjs.Player.prototype.onLoadedMetaData,
    vjs.Player.prototype.onLoadedData,
    vjs.Player.prototype.onLoadedAllData,
    (vjs.Player.prototype.onPlay = function () {
      vjs.removeClass(this.el_, "vjs-paused"),
        vjs.addClass(this.el_, "vjs-playing");
    }),
    (vjs.Player.prototype.onFirstPlay = function () {
      this.options_.starttime && this.currentTime(this.options_.starttime),
        this.addClass("vjs-has-started");
    }),
    (vjs.Player.prototype.onPause = function () {
      vjs.removeClass(this.el_, "vjs-playing"),
        vjs.addClass(this.el_, "vjs-paused");
    }),
    vjs.Player.prototype.onTimeUpdate,
    (vjs.Player.prototype.onProgress = function () {
      1 == this.bufferedPercent() && this.trigger("loadedalldata");
    }),
    (vjs.Player.prototype.onEnded = function () {
      this.options_.loop && (this.currentTime(0), this.play());
    }),
    (vjs.Player.prototype.onDurationChange = function () {
      var e = this.techGet("duration");
      e &&
        (e < 0 && (e = 1 / 0),
        this.duration(e),
        e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"));
    }),
    vjs.Player.prototype.onVolumeChange,
    (vjs.Player.prototype.onFullscreenChange = function () {
      this.isFullscreen()
        ? this.addClass("vjs-fullscreen")
        : this.removeClass("vjs-fullscreen");
    }),
    vjs.Player.prototype.cache_,
    (vjs.Player.prototype.getCache = function () {
      return this.cache_;
    }),
    (vjs.Player.prototype.techCall = function (e, t) {
      if (this.tech && !this.tech.isReady_)
        this.tech.ready(function () {
          this[e](t);
        });
      else
        try {
          this.tech[e](t);
        } catch (e) {
          throw (vjs.log(e), e);
        }
    }),
    (vjs.Player.prototype.techGet = function (t) {
      if (this.tech && this.tech.isReady_)
        try {
          return this.tech[t]();
        } catch (e) {
          throw (
            (void 0 === this.tech[t]
              ? vjs.log(
                  "Video.js: " +
                    t +
                    " method not defined for " +
                    this.techName +
                    " playback technology.",
                  e
                )
              : "TypeError" == e.name
              ? (vjs.log(
                  "Video.js: " +
                    t +
                    " unavailable on " +
                    this.techName +
                    " playback technology element.",
                  e
                ),
                (this.tech.isReady_ = !1))
              : vjs.log(e),
            e)
          );
        }
    }),
    (vjs.Player.prototype.play = function () {
      return this.techCall("play"), this;
    }),
    (vjs.Player.prototype.pause = function () {
      return this.techCall("pause"), this;
    }),
    (vjs.Player.prototype.paused = function () {
      return !1 !== this.techGet("paused");
    }),
    (vjs.Player.prototype.currentTime = function (e) {
      return void 0 !== e
        ? (this.techCall("setCurrentTime", e),
          this.manualTimeUpdates && this.trigger("timeupdate"),
          this)
        : (this.cache_.currentTime = this.techGet("currentTime") || 0);
    }),
    (vjs.Player.prototype.duration = function (e) {
      return void 0 !== e
        ? ((this.cache_.duration = parseFloat(e)), this)
        : (void 0 === this.cache_.duration && this.onDurationChange(),
          this.cache_.duration || 0);
    }),
    (vjs.Player.prototype.remainingTime = function () {
      return this.duration() - this.currentTime();
    }),
    (vjs.Player.prototype.buffered = function () {
      var e = this.techGet("buffered"),
        t = e.length - 1,
        s = (this.cache_.bufferEnd = this.cache_.bufferEnd || 0);
      return (
        e &&
          0 <= t &&
          e.end(t) !== s &&
          ((s = e.end(t)), (this.cache_.bufferEnd = s)),
        vjs.createTimeRange(0, s)
      );
    }),
    (vjs.Player.prototype.bufferedPercent = function () {
      return this.duration() ? this.buffered().end(0) / this.duration() : 0;
    }),
    (vjs.Player.prototype.volume = function (e) {
      var t;
      return void 0 !== e
        ? ((t = Math.max(0, Math.min(1, parseFloat(e)))),
          (this.cache_.volume = t),
          this.techCall("setVolume", t),
          vjs.setLocalStorage("volume", t),
          this)
        : ((t = parseFloat(this.techGet("volume"))), isNaN(t) ? 1 : t);
    }),
    (vjs.Player.prototype.muted = function (e) {
      return void 0 !== e
        ? (this.techCall("setMuted", e), this)
        : this.techGet("muted") || !1;
    }),
    (vjs.Player.prototype.supportsFullScreen = function () {
      return this.techGet("supportsFullScreen") || !1;
    }),
    (vjs.Player.prototype.isFullscreen_ = !1),
    (vjs.Player.prototype.isFullscreen = function (e) {
      return void 0 !== e
        ? ((this.isFullscreen_ = !!e), this)
        : this.isFullscreen_;
    }),
    (vjs.Player.prototype.isFullScreen = function (e) {
      return (
        vjs.log.warn(
          'player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'
        ),
        this.isFullscreen(e)
      );
    }),
    (vjs.Player.prototype.requestFullscreen = function () {
      var t = vjs.browser.fullscreenAPI;
      return (
        this.isFullscreen(!0),
        t
          ? (vjs.on(
              document,
              t.fullscreenchange,
              vjs.bind(this, function (e) {
                this.isFullscreen(document[t.fullscreenElement]),
                  !1 === this.isFullscreen() &&
                    vjs.off(document, t.fullscreenchange, arguments.callee),
                  this.trigger("fullscreenchange");
              })
            ),
            this.el_[t.requestFullscreen]())
          : this.tech.supportsFullScreen()
          ? this.techCall("enterFullScreen")
          : (this.enterFullWindow(), this.trigger("fullscreenchange")),
        this
      );
    }),
    (vjs.Player.prototype.requestFullScreen = function () {
      return (
        vjs.log.warn(
          'player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'
        ),
        this.requestFullscreen()
      );
    }),
    (vjs.Player.prototype.exitFullscreen = function () {
      var e = vjs.browser.fullscreenAPI;
      return (
        this.isFullscreen(!1),
        e
          ? document[e.exitFullscreen]()
          : this.tech.supportsFullScreen()
          ? this.techCall("exitFullScreen")
          : (this.exitFullWindow(), this.trigger("fullscreenchange")),
        this
      );
    }),
    (vjs.Player.prototype.cancelFullScreen = function () {
      return (
        vjs.log.warn(
          "player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"
        ),
        this.exitFullscreen()
      );
    }),
    (vjs.Player.prototype.enterFullWindow = function () {
      (this.isFullWindow = !0),
        (this.docOrigOverflow = document.documentElement.style.overflow),
        vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)),
        (document.documentElement.style.overflow = "hidden"),
        vjs.addClass(document.body, "vjs-full-window"),
        this.trigger("enterFullWindow");
    }),
    (vjs.Player.prototype.fullWindowOnEscKey = function (e) {
      27 === e.keyCode &&
        (!0 === this.isFullscreen()
          ? this.exitFullscreen()
          : this.exitFullWindow());
    }),
    (vjs.Player.prototype.exitFullWindow = function () {
      (this.isFullWindow = !1),
        vjs.off(document, "keydown", this.fullWindowOnEscKey),
        (document.documentElement.style.overflow = this.docOrigOverflow),
        vjs.removeClass(document.body, "vjs-full-window"),
        this.trigger("exitFullWindow");
    }),
    (vjs.Player.prototype.selectSource = function (e) {
      for (var t = 0, s = this.options_.techOrder; t < s.length; t++) {
        var i = vjs.capitalize(s[t]),
          n = window.videojs[i];
        if (n) {
          if (n.isSupported())
            for (var o = 0, r = e; o < r.length; o++) {
              var a = r[o];
              if (n.canPlaySource(a)) return { source: a, tech: i };
            }
        } else
          vjs.log.error(
            'The "' +
              i +
              '" tech is undefined. Skipped browser support check for that tech.'
          );
      }
      return !1;
    }),
    (vjs.Player.prototype.src = function (e) {
      if (void 0 === e) return this.techGet("src");
      if (e instanceof Array) {
        var t,
          s = this.selectSource(e);
        s
          ? ((e = s.source),
            (t = s.tech) == this.techName ? this.src(e) : this.loadTech(t, e))
          : (this.error({
              code: 4,
              message: this.options().notSupportedMessage,
            }),
            this.triggerReady());
      } else
        e instanceof Object
          ? window.videojs[this.techName].canPlaySource(e)
            ? this.src(e.src)
            : this.src([e])
          : ((this.cache_.src = e),
            this.isReady_
              ? (this.techCall("src", e),
                "auto" == this.options_.preload && this.load(),
                this.options_.autoplay && this.play())
              : this.ready(function () {
                  this.src(e);
                }));
      return this;
    }),
    (vjs.Player.prototype.load = function () {
      return this.techCall("load"), this;
    }),
    (vjs.Player.prototype.currentSrc = function () {
      return this.techGet("currentSrc") || this.cache_.src || "";
    }),
    (vjs.Player.prototype.preload = function (e) {
      return void 0 !== e
        ? (this.techCall("setPreload", e), (this.options_.preload = e), this)
        : this.techGet("preload");
    }),
    (vjs.Player.prototype.autoplay = function (e) {
      return void 0 !== e
        ? (this.techCall("setAutoplay", e), (this.options_.autoplay = e), this)
        : this.techGet("autoplay", e);
    }),
    (vjs.Player.prototype.loop = function (e) {
      return void 0 !== e
        ? (this.techCall("setLoop", e), (this.options_.loop = e), this)
        : this.techGet("loop");
    }),
    vjs.Player.prototype.poster_,
    (vjs.Player.prototype.poster = function (e) {
      if (void 0 === e) return this.poster_;
      (this.poster_ = e),
        this.techCall("setPoster", e),
        this.trigger("posterchange");
    }),
    vjs.Player.prototype.controls_,
    (vjs.Player.prototype.controls = function (e) {
      return void 0 !== e
        ? ((e = !!e),
          this.controls_ !== e &&
            ((this.controls_ = e)
              ? (this.removeClass("vjs-controls-disabled"),
                this.addClass("vjs-controls-enabled"),
                this.trigger("controlsenabled"))
              : (this.removeClass("vjs-controls-enabled"),
                this.addClass("vjs-controls-disabled"),
                this.trigger("controlsdisabled"))),
          this)
        : this.controls_;
    }),
    vjs.Player.prototype.usingNativeControls_,
    (vjs.Player.prototype.usingNativeControls = function (e) {
      return void 0 !== e
        ? ((e = !!e),
          this.usingNativeControls_ !== e &&
            ((this.usingNativeControls_ = e)
              ? (this.addClass("vjs-using-native-controls"),
                this.trigger("usingnativecontrols"))
              : (this.removeClass("vjs-using-native-controls"),
                this.trigger("usingcustomcontrols"))),
          this)
        : this.usingNativeControls_;
    }),
    (vjs.Player.prototype.error_ = null),
    (vjs.Player.prototype.error = function (e) {
      return void 0 === e
        ? this.error_
        : (null === e
            ? ((this.error_ = e), this.removeClass("vjs-error"))
            : (e instanceof vjs.MediaError
                ? (this.error_ = e)
                : (this.error_ = new vjs.MediaError(e)),
              this.trigger("error"),
              this.addClass("vjs-error"),
              vjs.log.error(
                "(CODE:" +
                  this.error_.code +
                  " " +
                  vjs.MediaError.errorTypes[this.error_.code] +
                  ")",
                this.error_.message,
                this.error_
              )),
          this);
    }),
    (vjs.Player.prototype.ended = function () {
      return this.techGet("ended");
    }),
    (vjs.Player.prototype.seeking = function () {
      return this.techGet("seeking");
    }),
    (vjs.Player.prototype.userActivity_ = !0),
    (vjs.Player.prototype.reportUserActivity = function (e) {
      this.userActivity_ = !0;
    }),
    (vjs.Player.prototype.userActive_ = !0),
    (vjs.Player.prototype.userActive = function (e) {
      return void 0 !== e
        ? ((e = !!e) !== this.userActive_ &&
            ((this.userActive_ = e)
              ? ((this.userActivity_ = !0),
                this.removeClass("vjs-user-inactive"),
                this.addClass("vjs-user-active"),
                this.trigger("useractive"))
              : ((this.userActivity_ = !1),
                this.tech &&
                  this.tech.one("mousemove", function (e) {
                    e.stopPropagation(), e.preventDefault();
                  }),
                this.removeClass("vjs-user-active"),
                this.addClass("vjs-user-inactive"),
                this.trigger("userinactive"))),
          this)
        : this.userActive_;
    }),
    (vjs.Player.prototype.listenForUserActivity = function () {
      var t, e, s, i, n, o, r, a, l;
      (t = vjs.bind(this, this.reportUserActivity)),
        (e = function (e) {
          (e.screenX == a && e.screenY == l) ||
            ((a = e.screenX), (l = e.screenY), t());
        }),
        (s = function () {
          t(), clearInterval(i), (i = setInterval(t, 250));
        }),
        (n = function (e) {
          t(), clearInterval(i);
        }),
        this.on("mousedown", s),
        this.on("mousemove", e),
        this.on("mouseup", n),
        this.on("keydown", t),
        this.on("keyup", t),
        (o = setInterval(
          vjs.bind(this, function () {
            this.userActivity_ &&
              ((this.userActivity_ = !1),
              this.userActive(!0),
              clearTimeout(r),
              (r = setTimeout(
                vjs.bind(this, function () {
                  this.userActivity_ || this.userActive(!1);
                }),
                2e3
              )));
          }),
          250
        )),
        this.on("dispose", function () {
          clearInterval(o), clearTimeout(r);
        });
    }),
    (vjs.Player.prototype.playbackRate = function (e) {
      return void 0 !== e
        ? (this.techCall("setPlaybackRate", e), this)
        : this.tech && this.tech.features && this.tech.features.playbackRate
        ? this.techGet("playbackRate")
        : 1;
    }),
    (vjs.ControlBar = vjs.Component.extend()),
    (vjs.ControlBar.prototype.options_ = {
      loadEvent: "play",
      children: {
        playToggle: {},
        currentTimeDisplay: {},
        timeDivider: {},
        durationDisplay: {},
        remainingTimeDisplay: {},
        liveDisplay: {},
        progressControl: {},
        fullscreenToggle: {},
        volumeControl: {},
        muteToggle: {},
        playbackRateMenuButton: {},
      },
    }),
    (vjs.ControlBar.prototype.createEl = function () {
      return vjs.createEl("div", { className: "vjs-control-bar" });
    }),
    (vjs.LiveDisplay = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t);
      },
    })),
    (vjs.LiveDisplay.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-live-controls vjs-control",
      });
      return (
        (this.contentEl_ = vjs.createEl("div", {
          className: "vjs-live-display",
          innerHTML: '<span class="vjs-control-text">Stream Type </span>LIVE',
          "aria-live": "off",
        })),
        e.appendChild(this.contentEl_),
        e
      );
    }),
    (vjs.PlayToggle = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t),
          e.on("play", vjs.bind(this, this.onPlay)),
          e.on("pause", vjs.bind(this, this.onPause));
      },
    })),
    (vjs.PlayToggle.prototype.buttonText = "Play"),
    (vjs.PlayToggle.prototype.buildCSSClass = function () {
      return (
        "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
      );
    }),
    (vjs.PlayToggle.prototype.onClick = function () {
      this.player_.paused() ? this.player_.play() : this.player_.pause();
    }),
    (vjs.PlayToggle.prototype.onPlay = function () {
      vjs.removeClass(this.el_, "vjs-paused"),
        vjs.addClass(this.el_, "vjs-playing"),
        (this.el_.children[0].children[0].innerHTML = "Pause");
    }),
    (vjs.PlayToggle.prototype.onPause = function () {
      vjs.removeClass(this.el_, "vjs-playing"),
        vjs.addClass(this.el_, "vjs-paused"),
        (this.el_.children[0].children[0].innerHTML = "Play");
    }),
    (vjs.CurrentTimeDisplay = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.on("timeupdate", vjs.bind(this, this.updateContent));
      },
    })),
    (vjs.CurrentTimeDisplay.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-current-time vjs-time-controls vjs-control",
      });
      return (
        (this.contentEl_ = vjs.createEl("div", {
          className: "vjs-current-time-display",
          innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
          "aria-live": "off",
        })),
        e.appendChild(this.contentEl_),
        e
      );
    }),
    (vjs.CurrentTimeDisplay.prototype.updateContent = function () {
      var e = this.player_.scrubbing
        ? this.player_.getCache().currentTime
        : this.player_.currentTime();
      this.contentEl_.innerHTML =
        '<span class="vjs-control-text">Current Time </span>' +
        vjs.formatTime(e, this.player_.duration());
    }),
    (vjs.DurationDisplay = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.on("timeupdate", vjs.bind(this, this.updateContent));
      },
    })),
    (vjs.DurationDisplay.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-duration vjs-time-controls vjs-control",
      });
      return (
        (this.contentEl_ = vjs.createEl("div", {
          className: "vjs-duration-display",
          innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
          "aria-live": "off",
        })),
        e.appendChild(this.contentEl_),
        e
      );
    }),
    (vjs.DurationDisplay.prototype.updateContent = function () {
      var e = this.player_.duration();
      e &&
        (this.contentEl_.innerHTML =
          '<span class="vjs-control-text">Duration Time </span>' +
          vjs.formatTime(e));
    }),
    (vjs.TimeDivider = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t);
      },
    })),
    (vjs.TimeDivider.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-time-divider",
        innerHTML: "<div><span>/</span></div>",
      });
    }),
    (vjs.RemainingTimeDisplay = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.on("timeupdate", vjs.bind(this, this.updateContent));
      },
    })),
    (vjs.RemainingTimeDisplay.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-remaining-time vjs-time-controls vjs-control",
      });
      return (
        (this.contentEl_ = vjs.createEl("div", {
          className: "vjs-remaining-time-display",
          innerHTML:
            '<span class="vjs-control-text">Remaining Time </span>-0:00',
          "aria-live": "off",
        })),
        e.appendChild(this.contentEl_),
        e
      );
    }),
    (vjs.RemainingTimeDisplay.prototype.updateContent = function () {
      this.player_.duration() &&
        (this.contentEl_.innerHTML =
          '<span class="vjs-control-text">Remaining Time </span>-' +
          vjs.formatTime(this.player_.remainingTime()));
    }),
    (vjs.FullscreenToggle = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t);
      },
    })),
    (vjs.FullscreenToggle.prototype.buttonText = "Fullscreen"),
    (vjs.FullscreenToggle.prototype.buildCSSClass = function () {
      return (
        "vjs-fullscreen-control " +
        vjs.Button.prototype.buildCSSClass.call(this)
      );
    }),
    (vjs.FullscreenToggle.prototype.onClick = function () {
      this.player_.isFullscreen()
        ? (this.player_.exitFullscreen(),
          (this.controlText_.innerHTML = "Fullscreen"))
        : (this.player_.requestFullscreen(),
          (this.controlText_.innerHTML = "Non-Fullscreen"));
    }),
    (vjs.ProgressControl = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t);
      },
    })),
    (vjs.ProgressControl.prototype.options_ = { children: { seekBar: {} } }),
    (vjs.ProgressControl.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-progress-control vjs-control",
      });
    }),
    (vjs.SeekBar = vjs.Slider.extend({
      init: function (e, t) {
        vjs.Slider.call(this, e, t),
          e.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)),
          e.ready(vjs.bind(this, this.updateARIAAttributes));
      },
    })),
    (vjs.SeekBar.prototype.options_ = {
      children: { loadProgressBar: {}, playProgressBar: {}, seekHandle: {} },
      barName: "playProgressBar",
      handleName: "seekHandle",
    }),
    (vjs.SeekBar.prototype.playerEvent = "timeupdate"),
    (vjs.SeekBar.prototype.createEl = function () {
      return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-progress-holder",
        "aria-label": "video progress bar",
      });
    }),
    (vjs.SeekBar.prototype.updateARIAAttributes = function () {
      var e = this.player_.scrubbing
        ? this.player_.getCache().currentTime
        : this.player_.currentTime();
      this.el_.setAttribute(
        "aria-valuenow",
        vjs.round(100 * this.getPercent(), 2)
      ),
        this.el_.setAttribute(
          "aria-valuetext",
          vjs.formatTime(e, this.player_.duration())
        );
    }),
    (vjs.SeekBar.prototype.getPercent = function () {
      return this.player_.currentTime() / this.player_.duration();
    }),
    (vjs.SeekBar.prototype.onMouseDown = function (e) {
      vjs.Slider.prototype.onMouseDown.call(this, e),
        (this.player_.scrubbing = !0),
        (this.videoWasPlaying = !this.player_.paused()),
        this.player_.pause();
    }),
    (vjs.SeekBar.prototype.onMouseMove = function (e) {
      var t = this.calculateDistance(e) * this.player_.duration();
      t == this.player_.duration() && (t -= 0.1), this.player_.currentTime(t);
    }),
    (vjs.SeekBar.prototype.onMouseUp = function (e) {
      vjs.Slider.prototype.onMouseUp.call(this, e),
        (this.player_.scrubbing = !1),
        this.videoWasPlaying && this.player_.play();
    }),
    (vjs.SeekBar.prototype.stepForward = function () {
      this.player_.currentTime(this.player_.currentTime() + 5);
    }),
    (vjs.SeekBar.prototype.stepBack = function () {
      this.player_.currentTime(this.player_.currentTime() - 5);
    }),
    (vjs.LoadProgressBar = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.on("progress", vjs.bind(this, this.update));
      },
    })),
    (vjs.LoadProgressBar.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-load-progress",
        innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>',
      });
    }),
    (vjs.LoadProgressBar.prototype.update = function () {
      this.el_.style &&
        (this.el_.style.width =
          vjs.round(100 * this.player_.bufferedPercent(), 2) + "%");
    }),
    (vjs.PlayProgressBar = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t);
      },
    })),
    (vjs.PlayProgressBar.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-play-progress",
        innerHTML: '<span class="vjs-control-text">Progress: 0%</span>',
      });
    }),
    (vjs.SeekHandle = vjs.SliderHandle.extend({
      init: function (e, t) {
        vjs.SliderHandle.call(this, e, t),
          e.on("timeupdate", vjs.bind(this, this.updateContent));
      },
    })),
    (vjs.SeekHandle.prototype.defaultValue = "00:00"),
    (vjs.SeekHandle.prototype.createEl = function () {
      return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-seek-handle",
        "aria-live": "off",
      });
    }),
    (vjs.SeekHandle.prototype.updateContent = function () {
      var e = this.player_.scrubbing
        ? this.player_.getCache().currentTime
        : this.player_.currentTime();
      this.el_.innerHTML =
        '<span class="vjs-control-text">' +
        vjs.formatTime(e, this.player_.duration()) +
        "</span>";
    }),
    (vjs.VolumeControl = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.tech &&
            e.tech.features &&
            !1 === e.tech.features.volumeControl &&
            this.addClass("vjs-hidden"),
          e.on(
            "loadstart",
            vjs.bind(this, function () {
              e.tech.features && !1 === e.tech.features.volumeControl
                ? this.addClass("vjs-hidden")
                : this.removeClass("vjs-hidden");
            })
          );
      },
    })),
    (vjs.VolumeControl.prototype.options_ = { children: { volumeBar: {} } }),
    (vjs.VolumeControl.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-control vjs-control",
      });
    }),
    (vjs.VolumeBar = vjs.Slider.extend({
      init: function (e, t) {
        vjs.Slider.call(this, e, t),
          e.on("volumechange", vjs.bind(this, this.updateARIAAttributes)),
          e.ready(vjs.bind(this, this.updateARIAAttributes));
      },
    })),
    (vjs.VolumeBar.prototype.updateARIAAttributes = function () {
      this.el_.setAttribute(
        "aria-valuenow",
        vjs.round(100 * this.player_.volume(), 2)
      ),
        this.el_.setAttribute(
          "aria-valuetext",
          vjs.round(100 * this.player_.volume(), 2) + "%"
        );
    }),
    (vjs.VolumeBar.prototype.options_ = {
      children: { volumeLevel: {}, volumeHandle: {} },
      barName: "volumeLevel",
      handleName: "volumeHandle",
    }),
    (vjs.VolumeBar.prototype.playerEvent = "volumechange"),
    (vjs.VolumeBar.prototype.createEl = function () {
      return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-volume-bar",
        "aria-label": "volume level",
      });
    }),
    (vjs.VolumeBar.prototype.onMouseMove = function (e) {
      this.player_.muted() && this.player_.muted(!1),
        this.player_.volume(this.calculateDistance(e));
    }),
    (vjs.VolumeBar.prototype.getPercent = function () {
      return this.player_.muted() ? 0 : this.player_.volume();
    }),
    (vjs.VolumeBar.prototype.stepForward = function () {
      this.player_.volume(this.player_.volume() + 0.1);
    }),
    (vjs.VolumeBar.prototype.stepBack = function () {
      this.player_.volume(this.player_.volume() - 0.1);
    }),
    (vjs.VolumeLevel = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t);
      },
    })),
    (vjs.VolumeLevel.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-level",
        innerHTML: '<span class="vjs-control-text"></span>',
      });
    }),
    (vjs.VolumeHandle = vjs.SliderHandle.extend()),
    (vjs.VolumeHandle.prototype.defaultValue = "00:00"),
    (vjs.VolumeHandle.prototype.createEl = function () {
      return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-volume-handle",
      });
    }),
    (vjs.MuteToggle = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t),
          e.on("volumechange", vjs.bind(this, this.update)),
          e.tech &&
            e.tech.features &&
            !1 === e.tech.features.volumeControl &&
            this.addClass("vjs-hidden"),
          e.on(
            "loadstart",
            vjs.bind(this, function () {
              e.tech.features && !1 === e.tech.features.volumeControl
                ? this.addClass("vjs-hidden")
                : this.removeClass("vjs-hidden");
            })
          );
      },
    })),
    (vjs.MuteToggle.prototype.createEl = function () {
      return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-mute-control vjs-control",
        innerHTML: '<div><span class="vjs-control-text">Mute</span></div>',
      });
    }),
    (vjs.MuteToggle.prototype.onClick = function () {
      this.player_.muted(!this.player_.muted());
    }),
    (vjs.MuteToggle.prototype.update = function () {
      var e = this.player_.volume(),
        t = 3;
      0 === e || this.player_.muted()
        ? (t = 0)
        : e < 0.33
        ? (t = 1)
        : e < 0.67 && (t = 2),
        this.player_.muted()
          ? "Unmute" != this.el_.children[0].children[0].innerHTML &&
            (this.el_.children[0].children[0].innerHTML = "Unmute")
          : "Mute" != this.el_.children[0].children[0].innerHTML &&
            (this.el_.children[0].children[0].innerHTML = "Mute");
      for (var s = 0; s < 4; s++) vjs.removeClass(this.el_, "vjs-vol-" + s);
      vjs.addClass(this.el_, "vjs-vol-" + t);
    }),
    (vjs.VolumeMenuButton = vjs.MenuButton.extend({
      init: function (e, t) {
        vjs.MenuButton.call(this, e, t),
          e.on("volumechange", vjs.bind(this, this.update)),
          e.tech &&
            e.tech.features &&
            !1 === e.tech.features.volumeControl &&
            this.addClass("vjs-hidden"),
          e.on(
            "loadstart",
            vjs.bind(this, function () {
              e.tech.features && !1 === e.tech.features.volumeControl
                ? this.addClass("vjs-hidden")
                : this.removeClass("vjs-hidden");
            })
          ),
          this.addClass("vjs-menu-button");
      },
    })),
    (vjs.VolumeMenuButton.prototype.createMenu = function () {
      var e = new vjs.Menu(this.player_, { contentElType: "div" }),
        t = new vjs.VolumeBar(
          this.player_,
          vjs.obj.merge({ vertical: !0 }, this.options_.volumeBar)
        );
      return e.addChild(t), e;
    }),
    (vjs.VolumeMenuButton.prototype.onClick = function () {
      vjs.MuteToggle.prototype.onClick.call(this),
        vjs.MenuButton.prototype.onClick.call(this);
    }),
    (vjs.VolumeMenuButton.prototype.createEl = function () {
      return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-volume-menu-button vjs-menu-button vjs-control",
        innerHTML: '<div><span class="vjs-control-text">Mute</span></div>',
      });
    }),
    (vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update),
    (vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
      init: function (e, t) {
        vjs.MenuButton.call(this, e, t),
          this.updateVisibility(),
          this.updateLabel(),
          e.on("loadstart", vjs.bind(this, this.updateVisibility)),
          e.on("ratechange", vjs.bind(this, this.updateLabel));
      },
    })),
    (vjs.PlaybackRateMenuButton.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-playback-rate vjs-menu-button vjs-control",
        innerHTML:
          '<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>',
      });
      return (
        (this.labelEl_ = vjs.createEl("div", {
          className: "vjs-playback-rate-value",
          innerHTML: 1,
        })),
        e.appendChild(this.labelEl_),
        e
      );
    }),
    (vjs.PlaybackRateMenuButton.prototype.createMenu = function () {
      var e = new vjs.Menu(this.player()),
        t = this.player().options().playbackRates;
      if (t)
        for (var s = t.length - 1; 0 <= s; s--)
          e.addChild(
            new vjs.PlaybackRateMenuItem(this.player(), { rate: t[s] + "x" })
          );
      return e;
    }),
    (vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function () {
      this.el().setAttribute("aria-valuenow", this.player().playbackRate());
    }),
    (vjs.PlaybackRateMenuButton.prototype.onClick = function () {
      for (
        var e = this.player().playbackRate(),
          t = this.player().options().playbackRates,
          s = t[0],
          i = 0;
        i < t.length;
        i++
      )
        if (t[i] > e) {
          s = t[i];
          break;
        }
      this.player().playbackRate(s);
    }),
    (vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function () {
      return (
        this.player().tech &&
        this.player().tech.features.playbackRate &&
        this.player().options().playbackRates &&
        0 < this.player().options().playbackRates.length
      );
    }),
    (vjs.PlaybackRateMenuButton.prototype.updateVisibility = function () {
      this.playbackRateSupported()
        ? this.removeClass("vjs-hidden")
        : this.addClass("vjs-hidden");
    }),
    (vjs.PlaybackRateMenuButton.prototype.updateLabel = function () {
      this.playbackRateSupported() &&
        (this.labelEl_.innerHTML = this.player().playbackRate() + "x");
    }),
    (vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
      contentElType: "button",
      init: function (e, t) {
        var s = (this.label = t.rate),
          i = (this.rate = parseFloat(s, 10));
        (t.label = s),
          (t.selected = 1 === i),
          vjs.MenuItem.call(this, e, t),
          this.player().on("ratechange", vjs.bind(this, this.update));
      },
    })),
    (vjs.PlaybackRateMenuItem.prototype.onClick = function () {
      vjs.MenuItem.prototype.onClick.call(this),
        this.player().playbackRate(this.rate);
    }),
    (vjs.PlaybackRateMenuItem.prototype.update = function () {
      this.selected(this.player().playbackRate() == this.rate);
    }),
    (vjs.PosterImage = vjs.Button.extend({
      init: function (e, t) {
        vjs.Button.call(this, e, t),
          e.poster() && this.src(e.poster()),
          (e.poster() && e.controls()) || this.hide(),
          e.on(
            "posterchange",
            vjs.bind(this, function () {
              this.src(e.poster());
            })
          ),
          e.on("play", vjs.bind(this, this.hide));
      },
    }));
  var _backgroundSizeSupported = "backgroundSize" in vjs.TEST_VID.style,
    Xl,
    Yl,
    Zl;
  (vjs.PosterImage.prototype.createEl = function () {
    var e = vjs.createEl("div", { className: "vjs-poster", tabIndex: -1 });
    return _backgroundSizeSupported || e.appendChild(vjs.createEl("img")), e;
  }),
    (vjs.PosterImage.prototype.src = function (e) {
      var t = this.el();
      void 0 !== e &&
        (_backgroundSizeSupported
          ? (t.style.backgroundImage = 'url("' + e + '")')
          : (t.firstChild.src = e));
    }),
    (vjs.PosterImage.prototype.onClick = function () {
      this.player().controls() && this.player_.play();
    }),
    (vjs.LoadingSpinner = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          e.on("canplay", vjs.bind(this, this.hide)),
          e.on("canplaythrough", vjs.bind(this, this.hide)),
          e.on("playing", vjs.bind(this, this.hide)),
          e.on("seeking", vjs.bind(this, this.show)),
          e.on("seeked", vjs.bind(this, this.hide)),
          e.on("ended", vjs.bind(this, this.hide)),
          e.on("waiting", vjs.bind(this, this.show));
      },
    })),
    (vjs.LoadingSpinner.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-loading-spinner",
      });
    }),
    (vjs.BigPlayButton = vjs.Button.extend()),
    (vjs.BigPlayButton.prototype.createEl = function () {
      return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-big-play-button",
        innerHTML: '<span aria-hidden="true"></span>',
        "aria-label": "play video",
      });
    }),
    (vjs.BigPlayButton.prototype.onClick = function () {
      this.player_.play();
    }),
    (vjs.ErrorDisplay = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          this.update(),
          e.on("error", vjs.bind(this, this.update));
      },
    })),
    (vjs.ErrorDisplay.prototype.createEl = function () {
      var e = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-error-display",
      });
      return (
        (this.contentEl_ = vjs.createEl("div")),
        e.appendChild(this.contentEl_),
        e
      );
    }),
    (vjs.ErrorDisplay.prototype.update = function () {
      this.player().error() &&
        (this.contentEl_.innerHTML = this.player().error().message);
    }),
    (vjs.MediaTechController = vjs.Component.extend({
      init: function (e, t, s) {
        ((t = t || {}).reportTouchActivity = !1),
          vjs.Component.call(this, e, t, s),
          this.initControlsListeners();
      },
    })),
    (vjs.MediaTechController.prototype.initControlsListeners = function () {
      var e, t, s;
      e = (t = this).player();
      function i() {
        e.controls() && !e.usingNativeControls() && t.addControlsListeners();
      }
      (s = vjs.bind(t, t.removeControlsListeners)),
        this.ready(i),
        e.on("controlsenabled", i),
        e.on("controlsdisabled", s),
        this.ready(function () {
          this.networkState &&
            0 < this.networkState() &&
            this.player().trigger("loadstart");
        });
    }),
    (vjs.MediaTechController.prototype.addControlsListeners = function () {
      var t;
      this.on("mousedown", this.onClick),
        this.on("touchstart", function (e) {
          e.preventDefault(), (t = this.player_.userActive());
        }),
        this.on("touchmove", function (e) {
          t && this.player().reportUserActivity();
        }),
        this.emitTapEvents(),
        this.on("tap", this.onTap);
    }),
    (vjs.MediaTechController.prototype.removeControlsListeners = function () {
      this.off("tap"),
        this.off("touchstart"),
        this.off("touchmove"),
        this.off("touchleave"),
        this.off("touchcancel"),
        this.off("touchend"),
        this.off("click"),
        this.off("mousedown");
    }),
    (vjs.MediaTechController.prototype.onClick = function (e) {
      0 === e.button &&
        this.player().controls() &&
        (this.player().paused() ? this.player().play() : this.player().pause());
    }),
    (vjs.MediaTechController.prototype.onTap = function () {
      this.player().userActive(!this.player().userActive());
    }),
    (vjs.MediaTechController.prototype.setPoster = function () {}),
    (vjs.MediaTechController.prototype.features = {
      volumeControl: !0,
      fullscreenResize: !1,
      playbackRate: !1,
      progressEvents: !1,
      timeupdateEvents: !1,
    }),
    (vjs.media = {}),
    (vjs.Html5 = vjs.MediaTechController.extend({
      init: function (e, t, s) {
        (this.features.volumeControl = vjs.Html5.canControlVolume()),
          (this.features.playbackRate = vjs.Html5.canControlPlaybackRate()),
          (this.features.movingMediaElementInDOM = !vjs.IS_IOS),
          (this.features.fullscreenResize = !0),
          vjs.MediaTechController.call(this, e, t, s),
          this.setupTriggers();
        var i = t.source;
        i && this.el_.currentSrc !== i.src && (this.el_.src = i.src),
          vjs.TOUCH_ENABLED &&
            !1 !== e.options().nativeControlsForTouch &&
            this.useNativeControls(),
          e.ready(function () {
            this.tag &&
              this.options_.autoplay &&
              this.paused() &&
              (delete this.tag.poster, this.play());
          }),
          this.triggerReady();
      },
    })),
    (vjs.Html5.prototype.dispose = function () {
      vjs.MediaTechController.prototype.dispose.call(this);
    }),
    (vjs.Html5.prototype.createEl = function () {
      var e,
        t = this.player_,
        s = t.tag;
      (s && !1 !== this.features.movingMediaElementInDOM) ||
        (s
          ? ((e = s.cloneNode(!1)),
            vjs.Html5.disposeMediaElement(s),
            (s = e),
            (t.tag = null))
          : (s = vjs.createEl("video", {
              id: t.id() + "_html5_api",
              className: "vjs-tech",
            })),
        (s.player = t),
        vjs.insertFirst(s, t.el()));
      for (
        var i = ["autoplay", "preload", "loop", "muted"], n = i.length - 1;
        0 <= n;
        n--
      ) {
        var o = i[n];
        null !== t.options_[o] && (s[o] = t.options_[o]);
      }
      return s;
    }),
    (vjs.Html5.prototype.setupTriggers = function () {
      for (var e = vjs.Html5.Events.length - 1; 0 <= e; e--)
        vjs.on(
          this.el_,
          vjs.Html5.Events[e],
          vjs.bind(this, this.eventHandler)
        );
    }),
    (vjs.Html5.prototype.eventHandler = function (e) {
      "error" == e.type
        ? this.player().error(this.error().code)
        : ((e.bubbles = !1), this.player().trigger(e));
    }),
    (vjs.Html5.prototype.useNativeControls = function () {
      var e, t, s, i, n;
      (t = (e = this).player()),
        e.setControls(t.controls()),
        (s = function () {
          e.setControls(!0);
        }),
        (i = function () {
          e.setControls(!1);
        }),
        t.on("controlsenabled", s),
        t.on("controlsdisabled", i),
        (n = function () {
          t.off("controlsenabled", s), t.off("controlsdisabled", i);
        }),
        e.on("dispose", n),
        t.on("usingcustomcontrols", n),
        t.usingNativeControls(!0);
    }),
    (vjs.Html5.prototype.play = function () {
      this.el_.play();
    }),
    (vjs.Html5.prototype.pause = function () {
      this.el_.pause();
    }),
    (vjs.Html5.prototype.paused = function () {
      return this.el_.paused;
    }),
    (vjs.Html5.prototype.currentTime = function () {
      return this.el_.currentTime;
    }),
    (vjs.Html5.prototype.setCurrentTime = function (e) {
      try {
        this.el_.currentTime = e;
      } catch (e) {
        vjs.log(e, "Video is not ready. (Video.js)");
      }
    }),
    (vjs.Html5.prototype.duration = function () {
      return this.el_.duration || 0;
    }),
    (vjs.Html5.prototype.buffered = function () {
      return this.el_.buffered;
    }),
    (vjs.Html5.prototype.volume = function () {
      return this.el_.volume;
    }),
    (vjs.Html5.prototype.setVolume = function (e) {
      this.el_.volume = e;
    }),
    (vjs.Html5.prototype.muted = function () {
      return this.el_.muted;
    }),
    (vjs.Html5.prototype.setMuted = function (e) {
      this.el_.muted = e;
    }),
    (vjs.Html5.prototype.width = function () {
      return this.el_.offsetWidth;
    }),
    (vjs.Html5.prototype.height = function () {
      return this.el_.offsetHeight;
    }),
    (vjs.Html5.prototype.supportsFullScreen = function () {
      return !(
        "function" != typeof this.el_.webkitEnterFullScreen ||
        (!/Android/.test(vjs.USER_AGENT) &&
          /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
      );
    }),
    (vjs.Html5.prototype.enterFullScreen = function () {
      var e = this.el_;
      e.paused && e.networkState <= e.HAVE_METADATA
        ? (this.el_.play(),
          setTimeout(function () {
            e.pause(), e.webkitEnterFullScreen();
          }, 0))
        : e.webkitEnterFullScreen();
    }),
    (vjs.Html5.prototype.exitFullScreen = function () {
      this.el_.webkitExitFullScreen();
    }),
    (vjs.Html5.prototype.src = function (e) {
      this.el_.src = e;
    }),
    (vjs.Html5.prototype.load = function () {
      this.el_.load();
    }),
    (vjs.Html5.prototype.currentSrc = function () {
      return this.el_.currentSrc;
    }),
    (vjs.Html5.prototype.poster = function () {
      return this.el_.poster;
    }),
    (vjs.Html5.prototype.setPoster = function (e) {
      this.el_.poster = e;
    }),
    (vjs.Html5.prototype.preload = function () {
      return this.el_.preload;
    }),
    (vjs.Html5.prototype.setPreload = function (e) {
      this.el_.preload = e;
    }),
    (vjs.Html5.prototype.autoplay = function () {
      return this.el_.autoplay;
    }),
    (vjs.Html5.prototype.setAutoplay = function (e) {
      this.el_.autoplay = e;
    }),
    (vjs.Html5.prototype.controls = function () {
      return this.el_.controls;
    }),
    (vjs.Html5.prototype.setControls = function (e) {
      this.el_.controls = !!e;
    }),
    (vjs.Html5.prototype.loop = function () {
      return this.el_.loop;
    }),
    (vjs.Html5.prototype.setLoop = function (e) {
      this.el_.loop = e;
    }),
    (vjs.Html5.prototype.error = function () {
      return this.el_.error;
    }),
    (vjs.Html5.prototype.seeking = function () {
      return this.el_.seeking;
    }),
    (vjs.Html5.prototype.ended = function () {
      return this.el_.ended;
    }),
    (vjs.Html5.prototype.defaultMuted = function () {
      return this.el_.defaultMuted;
    }),
    (vjs.Html5.prototype.playbackRate = function () {
      return this.el_.playbackRate;
    }),
    (vjs.Html5.prototype.setPlaybackRate = function (e) {
      this.el_.playbackRate = e;
    }),
    (vjs.Html5.prototype.networkState = function () {
      return this.el_.networkState;
    }),
    (vjs.Html5.isSupported = function () {
      try {
        vjs.TEST_VID.volume = 0.5;
      } catch (e) {
        return !1;
      }
      return !!vjs.TEST_VID.canPlayType;
    }),
    (vjs.Html5.canPlaySource = function (e) {
      try {
        return !!vjs.TEST_VID.canPlayType(e.type);
      } catch (e) {
        return "";
      }
    }),
    (vjs.Html5.canControlVolume = function () {
      var e = vjs.TEST_VID.volume;
      return (vjs.TEST_VID.volume = e / 2 + 0.1), e !== vjs.TEST_VID.volume;
    }),
    (vjs.Html5.canControlPlaybackRate = function () {
      var e = vjs.TEST_VID.playbackRate;
      return (
        (vjs.TEST_VID.playbackRate = e / 2 + 0.1),
        e !== vjs.TEST_VID.playbackRate
      );
    }),
    (Yl = /^application\/(?:x-|vnd\.apple\.)mpegurl/i),
    (Zl = /^video\/mp4/i),
    (vjs.Html5.patchCanPlayType = function () {
      4 <= vjs.ANDROID_VERSION &&
        ((Xl = Xl || vjs.TEST_VID.constructor.prototype.canPlayType),
        (vjs.TEST_VID.constructor.prototype.canPlayType = function (e) {
          return e && Yl.test(e) ? "maybe" : Xl.call(this, e);
        })),
        vjs.IS_OLD_ANDROID &&
          ((Xl = Xl || vjs.TEST_VID.constructor.prototype.canPlayType),
          (vjs.TEST_VID.constructor.prototype.canPlayType = function (e) {
            return e && Zl.test(e) ? "maybe" : Xl.call(this, e);
          }));
    }),
    (vjs.Html5.unpatchCanPlayType = function () {
      var e = vjs.TEST_VID.constructor.prototype.canPlayType;
      return (
        (vjs.TEST_VID.constructor.prototype.canPlayType = Xl), (Xl = null), e
      );
    }),
    vjs.Html5.patchCanPlayType(),
    (vjs.Html5.Events =
      "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(
        ","
      )),
    (vjs.Html5.disposeMediaElement = function (e) {
      if (e) {
        for (
          e.player = null, e.parentNode && e.parentNode.removeChild(e);
          e.hasChildNodes();

        )
          e.removeChild(e.firstChild);
        e.removeAttribute("src"),
          "function" == typeof e.load &&
            (function () {
              try {
                e.load();
              } catch (e) {}
            })();
      }
    }),
    (vjs.Flash = vjs.MediaTechController.extend({
      init: function (e, t, s) {
        vjs.MediaTechController.call(this, e, t, s);
        var i,
          n = t.source,
          o = t.parentEl,
          r = (this.el_ = vjs.createEl("div", { id: e.id() + "_temp_flash" })),
          a = e.id() + "_flash_api",
          l = e.options_,
          c = vjs.obj.merge(
            {
              readyFunction: "videojs.Flash.onReady",
              eventProxyFunction: "videojs.Flash.onEvent",
              errorEventProxyFunction: "videojs.Flash.onError",
              autoplay: l.autoplay,
              preload: l.preload,
              loop: l.loop,
              muted: l.muted,
            },
            t.flashVars
          ),
          u = vjs.obj.merge({ wmode: "opaque", bgcolor: "#000000" }, t.params),
          h = vjs.obj.merge(
            { id: a, name: a, class: "vjs-tech" },
            t.attributes
          );
        if (n)
          if (n.type && vjs.Flash.isStreamingType(n.type)) {
            var d = vjs.Flash.streamToParts(n.src);
            (c.rtmpConnection = encodeURIComponent(d.connection)),
              (c.rtmpStream = encodeURIComponent(d.stream));
          } else c.src = encodeURIComponent(vjs.getAbsoluteURL(n.src));
        if (
          ((this.setCurrentTime = function (e) {
            (i = e), this.el_.vjs_setProperty("currentTime", e);
          }),
          (this.currentTime = function (e) {
            return this.seeking() ? i : this.el_.vjs_getProperty("currentTime");
          }),
          vjs.insertFirst(r, o),
          t.startTime &&
            this.ready(function () {
              this.load(), this.play(), this.currentTime(t.startTime);
            }),
          vjs.IS_FIREFOX &&
            this.ready(function () {
              vjs.on(
                this.el(),
                "mousemove",
                vjs.bind(this, function () {
                  this.player().trigger({ type: "mousemove", bubbles: !1 });
                })
              );
            }),
          !0 !== t.iFrameMode || vjs.IS_FIREFOX)
        )
          vjs.Flash.embed(t.swf, r, c, u, h);
        else {
          var p = vjs.createEl("iframe", {
            id: a + "_iframe",
            name: a + "_iframe",
            className: "vjs-tech",
            scrolling: "no",
            marginWidth: 0,
            marginHeight: 0,
            style: "border: 0",
          });
          (c.readyFunction = "ready"),
            (c.eventProxyFunction = "events"),
            (c.errorEventProxyFunction = "errors"),
            vjs.on(
              p,
              "load",
              vjs.bind(this, function () {
                var i,
                  e = p.contentWindow;
                (i = p.contentDocument
                  ? p.contentDocument
                  : p.contentWindow.document).write(
                  vjs.Flash.getEmbedCode(t.swf, c, u, h)
                ),
                  (e.player = this.player_),
                  (e.ready = vjs.bind(this.player_, function (e) {
                    var t = i.getElementById(e),
                      s = this.tech;
                    (s.el_ = t), vjs.Flash.checkReady(s);
                  })),
                  (e.events = vjs.bind(this.player_, function (e, t) {
                    this && "flash" === this.techName && this.trigger(t);
                  })),
                  (e.errors = vjs.bind(this.player_, function (e, t) {
                    vjs.log("Flash Error", t);
                  }));
              })
            ),
            r.parentNode.replaceChild(p, r);
        }
      },
    })),
    (vjs.Flash.prototype.dispose = function () {
      vjs.MediaTechController.prototype.dispose.call(this);
    }),
    (vjs.Flash.prototype.play = function () {
      this.el_.vjs_play();
    }),
    (vjs.Flash.prototype.pause = function () {
      this.el_.vjs_pause();
    }),
    (vjs.Flash.prototype.src = function (e) {
      if (void 0 === e) return this.currentSrc();
      if (
        (vjs.Flash.isStreamingSrc(e)
          ? ((e = vjs.Flash.streamToParts(e)),
            this.setRtmpConnection(e.connection),
            this.setRtmpStream(e.stream))
          : ((e = vjs.getAbsoluteURL(e)), this.el_.vjs_src(e)),
        this.player_.autoplay())
      ) {
        var t = this;
        setTimeout(function () {
          t.play();
        }, 0);
      }
    }),
    (vjs.Flash.prototype.currentSrc = function () {
      var e = this.el_.vjs_getProperty("currentSrc");
      if (null == e) {
        var t = this.rtmpConnection(),
          s = this.rtmpStream();
        t && s && (e = vjs.Flash.streamFromParts(t, s));
      }
      return e;
    }),
    (vjs.Flash.prototype.load = function () {
      this.el_.vjs_load();
    }),
    (vjs.Flash.prototype.poster = function () {
      this.el_.vjs_getProperty("poster");
    }),
    (vjs.Flash.prototype.setPoster = function () {}),
    (vjs.Flash.prototype.buffered = function () {
      return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"));
    }),
    (vjs.Flash.prototype.supportsFullScreen = function () {
      return !1;
    }),
    (vjs.Flash.prototype.enterFullScreen = function () {
      return !1;
    });
  var api = vjs.Flash.prototype,
    readWrite =
      "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(
        ","
      ),
    readOnly =
      "error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(
        ","
      ),
    createSetter = function (t) {
      var e = t.charAt(0).toUpperCase() + t.slice(1);
      api["set" + e] = function (e) {
        return this.el_.vjs_setProperty(t, e);
      };
    },
    createGetter = function (e) {
      api[e] = function () {
        return this.el_.vjs_getProperty(e);
      };
    },
    Yp,
    Zp,
    Iv;
  if (
    ((function () {
      var e;
      for (e = 0; e < readWrite.length; e++)
        createGetter(readWrite[e]), createSetter(readWrite[e]);
      for (e = 0; e < readOnly.length; e++) createGetter(readOnly[e]);
    })(),
    (vjs.Flash.isSupported = function () {
      return 10 <= vjs.Flash.version()[0];
    }),
    (vjs.Flash.canPlaySource = function (e) {
      var t;
      return e.type
        ? (t = e.type.replace(/;.*/, "").toLowerCase()) in vjs.Flash.formats ||
          t in vjs.Flash.streamingFormats
          ? "maybe"
          : void 0
        : "";
    }),
    (vjs.Flash.formats = {
      "video/flv": "FLV",
      "video/x-flv": "FLV",
      "video/mp4": "MP4",
      "video/m4v": "MP4",
    }),
    (vjs.Flash.streamingFormats = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" }),
    (vjs.Flash.onReady = function (e) {
      var t = vjs.el(e),
        s = t.player || t.parentNode.player,
        i = s.tech;
      (t.player = s), (i.el_ = t), vjs.Flash.checkReady(i);
    }),
    (vjs.Flash.checkReady = function (e) {
      e.el().vjs_getProperty
        ? e.triggerReady()
        : setTimeout(function () {
            vjs.Flash.checkReady(e);
          }, 50);
    }),
    (vjs.Flash.onEvent = function (e, t) {
      vjs.el(e).player.trigger(t);
    }),
    (vjs.Flash.onError = function (e, t) {
      var s = vjs.el(e).player,
        i = "FLASH: " + t;
      "srcnotfound" == t ? s.error({ code: 4, message: i }) : s.error(i);
    }),
    (vjs.Flash.version = function () {
      var t = "0,0,0";
      try {
        t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
          .GetVariable("$version")
          .replace(/\D+/g, ",")
          .match(/^,?(.+),?$/)[1];
      } catch (e) {
        try {
          navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin &&
            (t = (
              navigator.plugins["Shockwave Flash 2.0"] ||
              navigator.plugins["Shockwave Flash"]
            ).description
              .replace(/\D+/g, ",")
              .match(/^,?(.+),?$/)[1]);
        } catch (e) {}
      }
      return t.split(",");
    }),
    (vjs.Flash.embed = function (e, t, s, i, n) {
      var o = vjs.Flash.getEmbedCode(e, s, i, n),
        r = vjs.createEl("div", { innerHTML: o }).childNodes[0],
        a = t.parentNode;
      t.parentNode.replaceChild(r, t);
      var l = a.childNodes[0];
      return (
        setTimeout(function () {
          l.style.display = "block";
        }, 1e3),
        r
      );
    }),
    (vjs.Flash.getEmbedCode = function (e, t, s, i) {
      var n = "",
        o = "",
        r = "";
      return (
        t &&
          vjs.obj.each(t, function (e, t) {
            n += e + "=" + t + "&amp;";
          }),
        (s = vjs.obj.merge(
          {
            movie: e,
            flashvars: n,
            allowScriptAccess: "always",
            allowNetworking: "all",
          },
          s
        )),
        vjs.obj.each(s, function (e, t) {
          o += '<param name="' + e + '" value="' + t + '" />';
        }),
        (i = vjs.obj.merge({ data: e, width: "100%", height: "100%" }, i)),
        vjs.obj.each(i, function (e, t) {
          r += e + '="' + t + '" ';
        }),
        '<object type="application/x-shockwave-flash"' +
          r +
          ">" +
          o +
          "</object>"
      );
    }),
    (vjs.Flash.streamFromParts = function (e, t) {
      return e + "&" + t;
    }),
    (vjs.Flash.streamToParts = function (e) {
      var t = { connection: "", stream: "" };
      if (!e) return t;
      var s,
        i = e.indexOf("&");
      return (
        -1 !== i
          ? (s = i + 1)
          : 0 === (i = s = e.lastIndexOf("/") + 1) && (i = s = e.length),
        (t.connection = e.substring(0, i)),
        (t.stream = e.substring(s, e.length)),
        t
      );
    }),
    (vjs.Flash.isStreamingType = function (e) {
      return e in vjs.Flash.streamingFormats;
    }),
    (vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i),
    (vjs.Flash.isStreamingSrc = function (e) {
      return vjs.Flash.RTMP_RE.test(e);
    }),
    (vjs.MediaLoader = vjs.Component.extend({
      init: function (e, t, s) {
        if (
          (vjs.Component.call(this, e, t, s),
          e.options_.sources && 0 !== e.options_.sources.length)
        )
          e.src(e.options_.sources);
        else
          for (var i = 0, n = e.options_.techOrder; i < n.length; i++) {
            var o = vjs.capitalize(n[i]),
              r = window.videojs[o];
            if (r && r.isSupported()) {
              e.loadTech(o);
              break;
            }
          }
      },
    })),
    vjs.Player.prototype.textTracks_,
    (vjs.Player.prototype.textTracks = function () {
      return (this.textTracks_ = this.textTracks_ || []), this.textTracks_;
    }),
    (vjs.Player.prototype.addTextTrack = function (e, t, s, i) {
      var n = (this.textTracks_ = this.textTracks_ || []);
      ((i = i || {}).kind = e), (i.label = t), (i.language = s);
      var o = vjs.capitalize(e || "subtitles"),
        r = new window.videojs[o + "Track"](this, i);
      return (
        n.push(r),
        r.dflt() &&
          this.ready(function () {
            setTimeout(function () {
              r.show();
            }, 0);
          }),
        r
      );
    }),
    (vjs.Player.prototype.addTextTracks = function (e) {
      for (var t, s = 0; s < e.length; s++)
        (t = e[s]), this.addTextTrack(t.kind, t.label, t.language, t);
      return this;
    }),
    (vjs.Player.prototype.showTextTrack = function (e, t) {
      for (var s, i, n, o = this.textTracks_, r = 0, a = o.length; r < a; r++)
        (s = o[r]).id() === e
          ? (s.show(), (i = s))
          : t && s.kind() == t && 0 < s.mode() && s.disable();
      return (
        (n = i ? i.kind() : t || !1) && this.trigger(n + "trackchange"), this
      );
    }),
    (vjs.TextTrack = vjs.Component.extend({
      init: function (e, t) {
        vjs.Component.call(this, e, t),
          (this.id_ =
            t.id || "vjs_" + t.kind + "_" + t.language + "_" + vjs.guid++),
          (this.src_ = t.src),
          (this.dflt_ = t.default || t.dflt),
          (this.title_ = t.title),
          (this.language_ = t.srclang),
          (this.label_ = t.label),
          (this.cues_ = []),
          (this.activeCues_ = []),
          (this.readyState_ = 0),
          (this.mode_ = 0),
          this.player_.on(
            "fullscreenchange",
            vjs.bind(this, this.adjustFontSize)
          );
      },
    })),
    vjs.TextTrack.prototype.kind_,
    (vjs.TextTrack.prototype.kind = function () {
      return this.kind_;
    }),
    vjs.TextTrack.prototype.src_,
    (vjs.TextTrack.prototype.src = function () {
      return this.src_;
    }),
    vjs.TextTrack.prototype.dflt_,
    (vjs.TextTrack.prototype.dflt = function () {
      return this.dflt_;
    }),
    vjs.TextTrack.prototype.title_,
    (vjs.TextTrack.prototype.title = function () {
      return this.title_;
    }),
    vjs.TextTrack.prototype.language_,
    (vjs.TextTrack.prototype.language = function () {
      return this.language_;
    }),
    vjs.TextTrack.prototype.label_,
    (vjs.TextTrack.prototype.label = function () {
      return this.label_;
    }),
    vjs.TextTrack.prototype.cues_,
    (vjs.TextTrack.prototype.cues = function () {
      return this.cues_;
    }),
    vjs.TextTrack.prototype.activeCues_,
    (vjs.TextTrack.prototype.activeCues = function () {
      return this.activeCues_;
    }),
    vjs.TextTrack.prototype.readyState_,
    (vjs.TextTrack.prototype.readyState = function () {
      return this.readyState_;
    }),
    vjs.TextTrack.prototype.mode_,
    (vjs.TextTrack.prototype.mode = function () {
      return this.mode_;
    }),
    (vjs.TextTrack.prototype.adjustFontSize = function () {
      this.player_.isFullScreen()
        ? (this.el_.style.fontSize =
            (screen.width / this.player_.width()) * 1.4 * 100 + "%")
        : (this.el_.style.fontSize = "");
    }),
    (vjs.TextTrack.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-" + this.kind_ + " vjs-text-track",
      });
    }),
    (vjs.TextTrack.prototype.show = function () {
      this.activate(),
        (this.mode_ = 2),
        vjs.Component.prototype.show.call(this);
    }),
    (vjs.TextTrack.prototype.hide = function () {
      this.activate(),
        (this.mode_ = 1),
        vjs.Component.prototype.hide.call(this);
    }),
    (vjs.TextTrack.prototype.disable = function () {
      2 == this.mode_ && this.hide(), this.deactivate(), (this.mode_ = 0);
    }),
    (vjs.TextTrack.prototype.activate = function () {
      0 === this.readyState_ && this.load(),
        0 === this.mode_ &&
          (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)),
          this.player_.on("ended", vjs.bind(this, this.reset, this.id_)),
          ("captions" !== this.kind_ && "subtitles" !== this.kind_) ||
            this.player_.getChild("textTrackDisplay").addChild(this));
    }),
    (vjs.TextTrack.prototype.deactivate = function () {
      this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)),
        this.player_.off("ended", vjs.bind(this, this.reset, this.id_)),
        this.reset(),
        this.player_.getChild("textTrackDisplay").removeChild(this);
    }),
    (vjs.TextTrack.prototype.load = function () {
      0 === this.readyState_ &&
        ((this.readyState_ = 1),
        vjs.get(
          this.src_,
          vjs.bind(this, this.parseCues),
          vjs.bind(this, this.onError)
        ));
    }),
    (vjs.TextTrack.prototype.onError = function (e) {
      (this.error = e), (this.readyState_ = 3), this.trigger("error");
    }),
    (vjs.TextTrack.prototype.parseCues = function (e) {
      for (
        var t, s, i, n, o = e.split("\n"), r = "", a = 1, l = o.length;
        a < l;
        a++
      )
        if ((r = vjs.trim(o[a]))) {
          for (
            -1 == r.indexOf("--\x3e")
              ? ((n = r), (r = vjs.trim(o[++a])))
              : (n = this.cues_.length),
              t = { id: n, index: this.cues_.length },
              s = r.split(" --\x3e "),
              t.startTime = this.parseCueTime(s[0]),
              t.endTime = this.parseCueTime(s[1]),
              i = [];
            o[++a] && (r = vjs.trim(o[a]));

          )
            i.push(r);
          (t.text = i.join("<br/>")), this.cues_.push(t);
        }
      (this.readyState_ = 2), this.trigger("loaded");
    }),
    (vjs.TextTrack.prototype.parseCueTime = function (e) {
      var t,
        s,
        i,
        n,
        o = e.split(":"),
        r = 0;
      return (
        (i = (i = (
          3 == o.length
            ? ((t = o[0]), (s = o[1]), o[2])
            : ((s = o[(t = 0)]), o[1])
        )
          .split(/\s+/)
          .splice(0, 1)[0]).split(/\.|,/)),
        (n = parseFloat(i[1])),
        (i = i[0]),
        (r += 3600 * parseFloat(t)),
        (r += 60 * parseFloat(s)),
        (r += parseFloat(i)),
        n && (r += n / 1e3),
        r
      );
    }),
    (vjs.TextTrack.prototype.update = function () {
      if (0 < this.cues_.length) {
        var e = this.player_.options().trackTimeOffset || 0,
          t = this.player_.currentTime() + e;
        if (
          void 0 === this.prevChange ||
          t < this.prevChange ||
          this.nextChange <= t
        ) {
          var s,
            i,
            n,
            o,
            r = this.cues_,
            a = this.player_.duration(),
            l = 0,
            c = !1,
            u = [];
          for (
            o =
              t >= this.nextChange || void 0 === this.nextChange
                ? void 0 !== this.firstActiveIndex
                  ? this.firstActiveIndex
                  : 0
                : ((c = !0),
                  void 0 !== this.lastActiveIndex
                    ? this.lastActiveIndex
                    : r.length - 1);
            ;

          ) {
            if ((n = r[o]).endTime <= t)
              (l = Math.max(l, n.endTime)), n.active && (n.active = !1);
            else if (t < n.startTime) {
              if (
                ((a = Math.min(a, n.startTime)),
                n.active && (n.active = !1),
                !c)
              )
                break;
            } else
              c
                ? (u.splice(0, 0, n), void 0 === i && (i = o), (s = o))
                : (u.push(n), void 0 === s && (s = o), (i = o)),
                (a = Math.min(a, n.endTime)),
                (l = Math.max(l, n.startTime)),
                (n.active = !0);
            if (c) {
              if (0 === o) break;
              o--;
            } else {
              if (o === r.length - 1) break;
              o++;
            }
          }
          (this.activeCues_ = u),
            (this.nextChange = a),
            (this.prevChange = l),
            (this.firstActiveIndex = s),
            (this.lastActiveIndex = i),
            this.updateDisplay(),
            this.trigger("cuechange");
        }
      }
    }),
    (vjs.TextTrack.prototype.updateDisplay = function () {
      for (var e = this.activeCues_, t = "", s = 0, i = e.length; s < i; s++)
        t += '<span class="vjs-tt-cue">' + e[s].text + "</span>";
      this.el_.innerHTML = t;
    }),
    (vjs.TextTrack.prototype.reset = function () {
      (this.nextChange = 0),
        (this.prevChange = this.player_.duration()),
        (this.firstActiveIndex = 0),
        (this.lastActiveIndex = 0);
    }),
    (vjs.CaptionsTrack = vjs.TextTrack.extend()),
    (vjs.CaptionsTrack.prototype.kind_ = "captions"),
    (vjs.SubtitlesTrack = vjs.TextTrack.extend()),
    (vjs.SubtitlesTrack.prototype.kind_ = "subtitles"),
    (vjs.ChaptersTrack = vjs.TextTrack.extend()),
    (vjs.ChaptersTrack.prototype.kind_ = "chapters"),
    (vjs.TextTrackDisplay = vjs.Component.extend({
      init: function (e, t, s) {
        vjs.Component.call(this, e, t, s),
          e.options_.tracks &&
            0 < e.options_.tracks.length &&
            this.player_.addTextTracks(e.options_.tracks);
      },
    })),
    (vjs.TextTrackDisplay.prototype.createEl = function () {
      return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-text-track-display",
      });
    }),
    (vjs.TextTrackMenuItem = vjs.MenuItem.extend({
      init: function (e, t) {
        var s = (this.track = t.track);
        (t.label = s.label()),
          (t.selected = s.dflt()),
          vjs.MenuItem.call(this, e, t),
          this.player_.on(
            s.kind() + "trackchange",
            vjs.bind(this, this.update)
          );
      },
    })),
    (vjs.TextTrackMenuItem.prototype.onClick = function () {
      vjs.MenuItem.prototype.onClick.call(this),
        this.player_.showTextTrack(this.track.id_, this.track.kind());
    }),
    (vjs.TextTrackMenuItem.prototype.update = function () {
      this.selected(2 == this.track.mode());
    }),
    (vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
      init: function (e, t) {
        (t.track = {
          kind: function () {
            return t.kind;
          },
          player: e,
          label: function () {
            return t.kind + " off";
          },
          dflt: function () {
            return !1;
          },
          mode: function () {
            return !1;
          },
        }),
          vjs.TextTrackMenuItem.call(this, e, t),
          this.selected(!0);
      },
    })),
    (vjs.OffTextTrackMenuItem.prototype.onClick = function () {
      vjs.TextTrackMenuItem.prototype.onClick.call(this),
        this.player_.showTextTrack(this.track.id_, this.track.kind());
    }),
    (vjs.OffTextTrackMenuItem.prototype.update = function () {
      for (
        var e, t = this.player_.textTracks(), s = 0, i = t.length, n = !0;
        s < i;
        s++
      )
        (e = t[s]).kind() == this.track.kind() && 2 == e.mode() && (n = !1);
      this.selected(n);
    }),
    (vjs.TextTrackButton = vjs.MenuButton.extend({
      init: function (e, t) {
        vjs.MenuButton.call(this, e, t), this.items.length <= 1 && this.hide();
      },
    })),
    (vjs.TextTrackButton.prototype.createItems = function () {
      var e,
        t = [];
      t.push(new vjs.OffTextTrackMenuItem(this.player_, { kind: this.kind_ }));
      for (var s = 0; s < this.player_.textTracks().length; s++)
        (e = this.player_.textTracks()[s]).kind() === this.kind_ &&
          t.push(new vjs.TextTrackMenuItem(this.player_, { track: e }));
      return t;
    }),
    (vjs.CaptionsButton = vjs.TextTrackButton.extend({
      init: function (e, t, s) {
        vjs.TextTrackButton.call(this, e, t, s),
          this.el_.setAttribute("aria-label", "Captions Menu");
      },
    })),
    (vjs.CaptionsButton.prototype.kind_ = "captions"),
    (vjs.CaptionsButton.prototype.buttonText = "Captions"),
    (vjs.CaptionsButton.prototype.className = "vjs-captions-button"),
    (vjs.SubtitlesButton = vjs.TextTrackButton.extend({
      init: function (e, t, s) {
        vjs.TextTrackButton.call(this, e, t, s),
          this.el_.setAttribute("aria-label", "Subtitles Menu");
      },
    })),
    (vjs.SubtitlesButton.prototype.kind_ = "subtitles"),
    (vjs.SubtitlesButton.prototype.buttonText = "Subtitles"),
    (vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button"),
    (vjs.ChaptersButton = vjs.TextTrackButton.extend({
      init: function (e, t, s) {
        vjs.TextTrackButton.call(this, e, t, s),
          this.el_.setAttribute("aria-label", "Chapters Menu");
      },
    })),
    (vjs.ChaptersButton.prototype.kind_ = "chapters"),
    (vjs.ChaptersButton.prototype.buttonText = "Chapters"),
    (vjs.ChaptersButton.prototype.className = "vjs-chapters-button"),
    (vjs.ChaptersButton.prototype.createItems = function () {
      for (var e, t = [], s = 0; s < this.player_.textTracks().length; s++)
        (e = this.player_.textTracks()[s]).kind() === this.kind_ &&
          t.push(new vjs.TextTrackMenuItem(this.player_, { track: e }));
      return t;
    }),
    (vjs.ChaptersButton.prototype.createMenu = function () {
      for (
        var e,
          t,
          s = this.player_.textTracks(),
          i = 0,
          n = s.length,
          o = (this.items = []);
        i < n;
        i++
      )
        if ((e = s[i]).kind() == this.kind_ && e.dflt()) {
          if (e.readyState() < 2)
            return void (this.chaptersTrack = e).on(
              "loaded",
              vjs.bind(this, this.createMenu)
            );
          t = e;
          break;
        }
      var r = (this.menu = new vjs.Menu(this.player_));
      if (
        (r
          .contentEl()
          .appendChild(
            vjs.createEl("li", {
              className: "vjs-menu-title",
              innerHTML: vjs.capitalize(this.kind_),
              tabindex: -1,
            })
          ),
        t)
      ) {
        var a,
          l,
          c = t.cues_;
        for (i = 0, n = c.length; i < n; i++)
          (a = c[i]),
            (l = new vjs.ChaptersTrackMenuItem(this.player_, {
              track: t,
              cue: a,
            })),
            o.push(l),
            r.addChild(l);
      }
      return 0 < this.items.length && this.show(), r;
    }),
    (vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
      init: function (e, t) {
        var s = (this.track = t.track),
          i = (this.cue = t.cue),
          n = e.currentTime();
        (t.label = i.text),
          (t.selected = i.startTime <= n && n < i.endTime),
          vjs.MenuItem.call(this, e, t),
          s.on("cuechange", vjs.bind(this, this.update));
      },
    })),
    (vjs.ChaptersTrackMenuItem.prototype.onClick = function () {
      vjs.MenuItem.prototype.onClick.call(this),
        this.player_.currentTime(this.cue.startTime),
        this.update(this.cue.startTime);
    }),
    (vjs.ChaptersTrackMenuItem.prototype.update = function () {
      var e = this.cue,
        t = this.player_.currentTime();
      this.selected(e.startTime <= t && t < e.endTime);
    }),
    vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
      subtitlesButton: {},
      captionsButton: {},
      chaptersButton: {},
    }),
    vjs.JSON,
    void 0 !== window.JSON && "function" === window.JSON.parse)
  )
    vjs.JSON = window.JSON;
  else {
    vjs.JSON = {};
    var cx =
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function (text, reviver) {
      var j;
      function walk(e, t) {
        var s,
          i,
          n = e[t];
        if (n && "object" == typeof n)
          for (s in n)
            Object.prototype.hasOwnProperty.call(n, s) &&
              (void 0 !== (i = walk(n, s)) ? (n[s] = i) : delete n[s]);
        return reviver.call(e, t, n);
      }
      if (
        ((text = String(text)),
        (cx.lastIndex = 0),
        cx.test(text) &&
          (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
          })),
        /^[\],:{}\s]*$/.test(
          text
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        ))
      )
        return (
          (j = eval("(" + text + ")")),
          "function" == typeof reviver ? walk({ "": j }, "") : j
        );
      throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
    };
  }
  (vjs.autoSetup = function () {
    var e,
      t,
      s = document.getElementsByTagName("video");
    if (s && 0 < s.length)
      for (var i = 0, n = s.length; i < n; i++) {
        if (!(t = s[i]) || !t.getAttribute) {
          vjs.autoSetupTimeout(1);
          break;
        }
        void 0 === t.player &&
          null !== (e = t.getAttribute("data-setup")) &&
          ((e = vjs.JSON.parse(e || "{}")), videojs(t, e));
      }
    else vjs.windowLoaded || vjs.autoSetupTimeout(1);
  }),
    (vjs.autoSetupTimeout = function (e) {
      setTimeout(vjs.autoSetup, e);
    }),
    "complete" === document.readyState
      ? (vjs.windowLoaded = !0)
      : vjs.one(window, "load", function () {
          vjs.windowLoaded = !0;
        }),
    vjs.autoSetupTimeout(1),
    (vjs.plugin = function (e, t) {
      vjs.Player.prototype[e] = t;
    }),
    (Yp = "undefined" != typeof window ? window : this),
    (Zp = function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.on = function (e, t) {
          if (e && t) {
            var s = (this._events = this._events || {}),
              i = (s[e] = s[e] || []);
            return -1 == i.indexOf(t) && i.push(t), this;
          }
        }),
        (t.once = function (e, t) {
          if (e && t) {
            this.on(e, t);
            var s = (this._onceEvents = this._onceEvents || {});
            return ((s[e] = s[e] || {})[t] = !0), this;
          }
        }),
        (t.off = function (e, t) {
          var s = this._events && this._events[e];
          if (s && s.length) {
            var i = s.indexOf(t);
            return -1 != i && s.splice(i, 1), this;
          }
        }),
        (t.emitEvent = function (e, t) {
          var s = this._events && this._events[e];
          if (s && s.length) {
            (s = s.slice(0)), (t = t || []);
            for (
              var i = this._onceEvents && this._onceEvents[e], n = 0;
              n < s.length;
              n++
            ) {
              var o = s[n];
              i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t);
            }
            return this;
          }
        }),
        (t.allOff = function () {
          delete this._events, delete this._onceEvents;
        }),
        e
      );
    }),
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", Zp)
      : "object" == typeof module && module.exports
      ? (module.exports = Zp())
      : (Yp.EvEmitter = Zp()),
    (function (t, s) {
      "use strict";
      "function" == typeof define && define.amd
        ? define(["ev-emitter/ev-emitter"], function (e) {
            return s(t, e);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = s(t, require("ev-emitter")))
        : (t.imagesLoaded = s(t, t.EvEmitter));
    })("undefined" != typeof window ? window : this, function (t, e) {
      var n = t.jQuery,
        o = t.console;
      function r(e, t) {
        for (var s in t) e[s] = t[s];
        return e;
      }
      var a = Array.prototype.slice;
      function l(e, t, s) {
        if (!(this instanceof l)) return new l(e, t, s);
        var i = e;
        "string" == typeof e && (i = document.querySelectorAll(e)),
          i
            ? ((this.elements = (function (e) {
                return Array.isArray(e)
                  ? e
                  : "object" == typeof e && "number" == typeof e.length
                  ? a.call(e)
                  : [e];
              })(i)),
              (this.options = r({}, this.options)),
              "function" == typeof t ? (s = t) : r(this.options, t),
              s && this.on("always", s),
              this.getImages(),
              n && (this.jqDeferred = new n.Deferred()),
              setTimeout(this.check.bind(this)))
            : o.error("Bad element for imagesLoaded " + (i || e));
      }
      ((l.prototype = Object.create(e.prototype)).options = {}),
        (l.prototype.getImages = function () {
          (this.images = []),
            this.elements.forEach(this.addElementImages, this);
        }),
        (l.prototype.addElementImages = function (e) {
          "IMG" == e.nodeName && this.addImage(e),
            !0 === this.options.background &&
              this.addElementBackgroundImages(e);
          var t = e.nodeType;
          if (t && c[t]) {
            for (var s = e.querySelectorAll("img"), i = 0; i < s.length; i++) {
              var n = s[i];
              this.addImage(n);
            }
            if ("string" == typeof this.options.background) {
              var o = e.querySelectorAll(this.options.background);
              for (i = 0; i < o.length; i++) {
                var r = o[i];
                this.addElementBackgroundImages(r);
              }
            }
          }
        });
      var c = { 1: !0, 9: !0, 11: !0 };
      function s(e) {
        this.img = e;
      }
      function i(e, t) {
        (this.url = e), (this.element = t), (this.img = new Image());
      }
      return (
        (l.prototype.addElementBackgroundImages = function (e) {
          var t = getComputedStyle(e);
          if (t)
            for (
              var s = /url\((['"])?(.*?)\1\)/gi, i = s.exec(t.backgroundImage);
              null !== i;

            ) {
              var n = i && i[2];
              n && this.addBackground(n, e), (i = s.exec(t.backgroundImage));
            }
        }),
        (l.prototype.addImage = function (e) {
          var t = new s(e);
          this.images.push(t);
        }),
        (l.prototype.addBackground = function (e, t) {
          var s = new i(e, t);
          this.images.push(s);
        }),
        (l.prototype.check = function () {
          var i = this;
          function t(e, t, s) {
            setTimeout(function () {
              i.progress(e, t, s);
            });
          }
          (this.progressedCount = 0),
            (this.hasAnyBroken = !1),
            this.images.length
              ? this.images.forEach(function (e) {
                  e.once("progress", t), e.check();
                })
              : this.complete();
        }),
        (l.prototype.progress = function (e, t, s) {
          this.progressedCount++,
            (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
            this.emitEvent("progress", [this, e, t]),
            this.jqDeferred &&
              this.jqDeferred.notify &&
              this.jqDeferred.notify(this, e),
            this.progressedCount == this.images.length && this.complete(),
            this.options.debug && o && o.log("progress: " + s, e, t);
        }),
        (l.prototype.complete = function () {
          var e = this.hasAnyBroken ? "fail" : "done";
          if (
            ((this.isComplete = !0),
            this.emitEvent(e, [this]),
            this.emitEvent("always", [this]),
            this.jqDeferred)
          ) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this);
          }
        }),
        ((s.prototype = Object.create(e.prototype)).check = function () {
          this.getIsImageComplete()
            ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
            : ((this.proxyImage = new Image()),
              this.proxyImage.addEventListener("load", this),
              this.proxyImage.addEventListener("error", this),
              this.img.addEventListener("load", this),
              this.img.addEventListener("error", this),
              (this.proxyImage.src = this.img.src));
        }),
        (s.prototype.getIsImageComplete = function () {
          return this.img.complete && this.img.naturalWidth;
        }),
        (s.prototype.confirm = function (e, t) {
          (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
        }),
        (s.prototype.handleEvent = function (e) {
          var t = "on" + e.type;
          this[t] && this[t](e);
        }),
        (s.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindEvents();
        }),
        (s.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }),
        (s.prototype.unbindEvents = function () {
          this.proxyImage.removeEventListener("load", this),
            this.proxyImage.removeEventListener("error", this),
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        ((i.prototype = Object.create(s.prototype)).check = function () {
          this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.img.src = this.url),
            this.getIsImageComplete() &&
              (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
              this.unbindEvents());
        }),
        (i.prototype.unbindEvents = function () {
          this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        (i.prototype.confirm = function (e, t) {
          (this.isLoaded = e),
            this.emitEvent("progress", [this, this.element, t]);
        }),
        (l.makeJQueryPlugin = function (e) {
          (e = e || t.jQuery) &&
            ((n = e).fn.imagesLoaded = function (e, t) {
              return new l(this, e, t).jqDeferred.promise(n(this));
            });
        }),
        l.makeJQueryPlugin(),
        l
      );
    }),
    jQuery(document).ready(function (y) {
      var i,
        n,
        w,
        d,
        o,
        r,
        h,
        a,
        p,
        t,
        l,
        v,
        m,
        c = 110,
        u = y("body").css("overflow"),
        f = y("html").css("overflow"),
        g = "";
      window.innerWidth <= 760 &&
        (c = Math.round((window.innerWidth / 760) * 110)) < 40 &&
        ("ontouchstart" in window ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        (c = 0);
      function j(e) {
        switch (e.which) {
          case 38:
            e.preventDefault(), d.scrollTop(d.scrollTop() - 100);
            break;
          case 40:
            e.preventDefault(), d.scrollTop(d.scrollTop() + 100);
            break;
          case 39:
            e.preventDefault(),
              w.jp_carousel("clearCommentTextAreaValue"),
              w.jp_carousel("next");
            break;
          case 37:
          case 8:
            e.preventDefault(),
              w.jp_carousel("clearCommentTextAreaValue"),
              w.jp_carousel("previous");
            break;
          case 27:
            e.preventDefault(),
              w.jp_carousel("clearCommentTextAreaValue"),
              d.jp_carousel("close");
        }
      }
      function b(e) {
        clearTimeout(t),
          (t = setTimeout(function () {
            w.jp_carousel("slides").jp_carousel("fitSlide", !0),
              w.jp_carousel("updateSlidePositions", !0),
              w.jp_carousel("fitMeta", !0);
          }, 200));
      }
      var s = {
        testForData: function (e) {
          return !(!(e = y(e)).length || null == e.data("carousel-extra"));
        },
        testIfOpened: function () {
          return void 0 !== w && void 0 !== w.opened && 1 == w.opened;
        },
        openOrSelectSlide: function (e) {
          y(this).jp_carousel("testIfOpened")
            ? w.jp_carousel("selectSlideAtIndex", e)
            : y(this).jp_carousel("open", { start_index: e });
        },
        open: function (t) {
          var s = {
              items_selector:
                ".gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id]",
              start_index: 0,
            },
            e = y(this).data("carousel-extra");
          if (
            e &&
            ((function () {
              if (!i) {
                i = y("<div></div>")
                  .addClass("jp-carousel-overlay")
                  .css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  });
                var e =
                  '<a class="jp-carousel-commentlink" href="#">' +
                  jetpackCarouselStrings.comment +
                  "</a>";
                jetpackCarouselStrings.is_logged_in,
                  (e = y('<div class="jp-carousel-buttons">' + e + "</div>")),
                  (p = y("<h2></h2>")),
                  (l = y('<div class="jp-carousel-photo-info"></div>').append(
                    p
                  )),
                  (imageMeta = y("<div></div>")
                    .addClass("jp-carousel-image-meta")
                    .css({
                      float: "right",
                      "margin-top": "20px",
                      width: "250px",
                    })),
                  imageMeta
                    .append(e)
                    .append(
                      "<ul class='jp-carousel-image-exif' style='display:none;'></ul>"
                    )
                    .append(
                      "<a class='jp-carousel-image-download' style='display:none;'></a>"
                    )
                    .append(
                      "<div class='jp-carousel-image-map' style='display:none;'></div>"
                    ),
                  (titleAndDescription = y("<div></div>")
                    .addClass("jp-carousel-titleanddesc")
                    .css({
                      width: "100%",
                      "margin-top": imageMeta.css("margin-top"),
                    }));
                var t = '<div id="jp-carousel-comment-form-container">';
                jetpackCarouselStrings.local_comments_commenting_as &&
                  jetpackCarouselStrings.local_comments_commenting_as.length &&
                  (1 != jetpackCarouselStrings.is_logged_in &&
                  1 == jetpackCarouselStrings.comment_registration
                    ? (t +=
                        '<div id="jp-carousel-comment-form-commenting-as">' +
                        jetpackCarouselStrings.local_comments_commenting_as +
                        "</div>")
                    : ((t += '<form id="jp-carousel-comment-form">'),
                      (t +=
                        '<textarea name="comment" class="jp-carousel-comment-form-field jp-carousel-comment-form-textarea" id="jp-carousel-comment-form-comment-field" placeholder="' +
                        jetpackCarouselStrings.write_comment +
                        '"></textarea>'),
                      (t +=
                        '<div id="jp-carousel-comment-form-submit-and-info-wrapper">'),
                      (t +=
                        '<div id="jp-carousel-comment-form-commenting-as">' +
                        jetpackCarouselStrings.local_comments_commenting_as +
                        "</div>"),
                      (t +=
                        '<input type="submit" name="submit" class="jp-carousel-comment-form-button" id="jp-carousel-comment-form-button-submit" value="' +
                        jetpackCarouselStrings.post_comment +
                        '" />'),
                      (t +=
                        '<span id="jp-carousel-comment-form-spinner">&nbsp;</span>'),
                      (t +=
                        '<div id="jp-carousel-comment-post-results"></div>'),
                      (t += "</div>"),
                      (t += "</form>"))),
                  (commentForm = y((t += "</div>")).css({
                    width: "100%",
                    "margin-top": "20px",
                    color: "#999",
                  })),
                  (n = y("<div></div>")
                    .addClass("jp-carousel-comments")
                    .css({
                      width: "100%",
                      bottom: "10px",
                      "margin-top": "20px",
                    })),
                  (commentsLoading = y(
                    '<div id="jp-carousel-comments-loading"><span>' +
                      jetpackCarouselStrings.loading_comments +
                      "</span></div>"
                  ).css({
                    width: "100%",
                    bottom: "10px",
                    "margin-top": "20px",
                  })),
                  (leftWidth =
                    y(window).width() - 2 * c - (imageMeta.width() + 40)),
                  (leftWidth += "px"),
                  (leftColWrapper = y("<div></div>")
                    .addClass("jp-carousel-left-column-wrapper")
                    .css({ width: Math.floor(leftWidth) })
                    .append(titleAndDescription)
                    .append(commentForm)
                    .append(n)
                    .append(commentsLoading)),
                  (fadeaway = y("<div></div>").addClass(
                    "jp-carousel-fadeaway"
                  )),
                  (h = y("<div></div>")
                    .addClass("jp-carousel-info")
                    .css({
                      top: Math.floor((y(window).height() / 100) * 85),
                      left: c,
                      right: c,
                    })
                    .append(l)
                    .append(imageMeta)),
                  window.innerWidth <= 760
                    ? (l.remove().insertAfter(titleAndDescription),
                      h.prepend(leftColWrapper))
                    : h.append(leftColWrapper),
                  (targetBottomPos =
                    y(window).height() - parseInt(h.css("top"), 10) + "px"),
                  (o = y("<div><span></span></div>")
                    .addClass("jp-carousel-next-button")
                    .css({ right: "15px" })),
                  (r = y("<div><span></span></div>")
                    .addClass("jp-carousel-previous-button")
                    .css({ left: 0 })),
                  o
                    .add(r)
                    .css({
                      position: "fixed",
                      top: "40px",
                      bottom: targetBottomPos,
                      width: c,
                    }),
                  (w = y("<div></div>")
                    .addClass("jp-carousel")
                    .css({
                      position: "absolute",
                      top: 0,
                      bottom: targetBottomPos,
                      left: 0,
                      right: 0,
                    })),
                  (v = y(
                    '<div class="jp-carousel-close-hint"><span>&times;</span></div>'
                  ).css({ position: "fixed" })),
                  (d = y("<div></div>")
                    .addClass("jp-carousel-wrap")
                    .addClass("jp-carousel-transitions")),
                  "white" == jetpackCarouselStrings.background_color &&
                    d.addClass("jp-carousel-light"),
                  d
                    .css({
                      position: "fixed",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      "z-index": 2147483647,
                      "overflow-x": "hidden",
                      "overflow-y": "auto",
                      direction: "ltr",
                    })
                    .hide()
                    .append(i)
                    .append(w)
                    .append(fadeaway)
                    .append(h)
                    .append(o)
                    .append(r)
                    .append(v)
                    .appendTo(y("body"))
                    .click(function (e) {
                      var t = y(e.target),
                        s = t.parents("div.jp-carousel-wrap"),
                        i = s.data("carousel-extra"),
                        n = s.find("div.selected").data("attachment-id");
                      if (((i = i || []), t.is(w) || t.parents().add(t).is(v)))
                        d.jp_carousel("close");
                      else if (t.hasClass("jp-carousel-commentlink"))
                        e.preventDefault(),
                          e.stopPropagation(),
                          y(window).unbind("keydown", j),
                          d.animate(
                            { scrollTop: parseInt(h.position().top, 10) },
                            "fast"
                          ),
                          y(
                            "#jp-carousel-comment-form-submit-and-info-wrapper"
                          ).slideDown("fast"),
                          y("#jp-carousel-comment-form-comment-field").focus();
                      else if (t.hasClass("jp-carousel-comment-login")) {
                        var o =
                          jetpackCarouselStrings.login_url +
                          "%23jp-carousel-" +
                          n;
                        window.location.href = o;
                      } else if (
                        t.parents("#jp-carousel-comment-form-container").length
                      ) {
                        var r = y("#jp-carousel-comment-form-comment-field")
                            .blur(function () {
                              y(window).bind("keydown", j);
                            })
                            .focus(function () {
                              y(window).unbind("keydown", j);
                            }),
                          a = y("#jp-carousel-comment-form-email-field")
                            .blur(function () {
                              y(window).bind("keydown", j);
                            })
                            .focus(function () {
                              y(window).unbind("keydown", j);
                            }),
                          l = y("#jp-carousel-comment-form-author-field")
                            .blur(function () {
                              y(window).bind("keydown", j);
                            })
                            .focus(function () {
                              y(window).unbind("keydown", j);
                            }),
                          c = y("#jp-carousel-comment-form-url-field")
                            .blur(function () {
                              y(window).bind("keydown", j);
                            })
                            .focus(function () {
                              y(window).unbind("keydown", j);
                            });
                        if (r && r.attr("id") == t.attr("id"))
                          y(window).unbind("keydown", j),
                            y(
                              "#jp-carousel-comment-form-submit-and-info-wrapper"
                            ).slideDown("fast");
                        else if (t.is('input[type="submit"]')) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            y("#jp-carousel-comment-form-spinner").spin(
                              "small",
                              "white"
                            );
                          var u = {
                            action: "post_attachment_comment",
                            nonce: jetpackCarouselStrings.nonce,
                            blog_id: i.blog_id,
                            id: n,
                            comment: r.val(),
                          };
                          if (!u.comment.length)
                            return void w.jp_carousel("postCommentError", {
                              field: "jp-carousel-comment-form-comment-field",
                              error: jetpackCarouselStrings.no_comment_text,
                            });
                          if (
                            1 != jetpackCarouselStrings.is_logged_in &&
                            ((u.email = a.val()),
                            (u.author = l.val()),
                            (u.url = c.val()),
                            1 == jetpackCarouselStrings.require_name_email)
                          ) {
                            if (!u.email.length || !u.email.match("@"))
                              return void w.jp_carousel("postCommentError", {
                                field: "jp-carousel-comment-form-email-field",
                                error: jetpackCarouselStrings.no_comment_email,
                              });
                            if (!u.author.length)
                              return void w.jp_carousel("postCommentError", {
                                field: "jp-carousel-comment-form-author-field",
                                error: jetpackCarouselStrings.no_comment_author,
                              });
                          }
                          y.ajax({
                            type: "POST",
                            url: jetpackCarouselStrings.ajaxurl,
                            data: u,
                            dataType: "json",
                            success: function (e, t, s) {
                              "approved" == e.comment_status
                                ? y("#jp-carousel-comment-post-results")
                                    .slideUp("fast")
                                    .html(
                                      '<span class="jp-carousel-comment-post-success">' +
                                        jetpackCarouselStrings.comment_approved +
                                        "</span>"
                                    )
                                    .slideDown("fast")
                                : "unapproved" == e.comment_status
                                ? y("#jp-carousel-comment-post-results")
                                    .slideUp("fast")
                                    .html(
                                      '<span class="jp-carousel-comment-post-success">' +
                                        jetpackCarouselStrings.comment_unapproved +
                                        "</span>"
                                    )
                                    .slideDown("fast")
                                : y("#jp-carousel-comment-post-results")
                                    .slideUp("fast")
                                    .html(
                                      '<span class="jp-carousel-comment-post-error">' +
                                        jetpackCarouselStrings.comment_post_error +
                                        "</span>"
                                    )
                                    .slideDown("fast"),
                                w.jp_carousel("clearCommentTextAreaValue"),
                                w.jp_carousel("getComments", {
                                  attachment_id: n,
                                  offset: 0,
                                  clear: !0,
                                }),
                                y(
                                  "#jp-carousel-comment-form-button-submit"
                                ).val(jetpackCarouselStrings.post_comment),
                                y("#jp-carousel-comment-form-spinner").spin(!1);
                            },
                            error: function (e, t, s) {
                              w.jp_carousel("postCommentError", {
                                field: "jp-carousel-comment-form-comment-field",
                                error:
                                  jetpackCarouselStrings.comment_post_error,
                              });
                            },
                          });
                        }
                      } else
                        t.parents(".jp-carousel-info").length ||
                          d.jp_carousel("next");
                    })
                    .bind("jp_carousel.afterOpen", function () {
                      y(window).bind("keydown", j),
                        y(window).bind("resize", b),
                        (w.opened = !0),
                        b();
                    })
                    .bind("jp_carousel.beforeClose", function () {
                      var e = y(window).scrollTop();
                      y(window).unbind("keydown", j),
                        y(window).unbind("resize", b),
                        y(window).scrollTop(e);
                    })
                    .bind("jp_carousel.afterClose", function () {
                      history.pushState
                        ? history.pushState(
                            "",
                            document.title,
                            window.location.pathname + window.location.search
                          )
                        : ((g = ""), (window.location.hash = "")),
                        (w.opened = !1);
                    })
                    .on(
                      "transitionend.jp-carousel ",
                      ".jp-carousel-slide",
                      function (e) {
                        if ("transform" == e.originalEvent.propertyName) {
                          var t =
                            (Date.now() - a) /
                            1e3 /
                            e.originalEvent.elapsedTime;
                          d.off("transitionend.jp-carousel"),
                            2 <= t &&
                              y(".jp-carousel-transitions").removeClass(
                                "jp-carousel-transitions"
                              );
                        }
                      }
                    ),
                  y(".jp-carousel-wrap").touchwipe({
                    wipeLeft: function (e) {
                      e.preventDefault(), w.jp_carousel("next");
                    },
                    wipeRight: function (e) {
                      e.preventDefault(), w.jp_carousel("previous");
                    },
                    preventDefaultEvents: !1,
                  }),
                  y(".jetpack-likes-widget-unloaded").each(function () {
                    jetpackLikesWidgetQueue.push(this.id);
                  }),
                  o.add(r).click(function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      o.is(this)
                        ? w.jp_carousel("next")
                        : w.jp_carousel("previous");
                  });
              }
            })(),
            !w.jp_carousel("testIfOpened"))
          )
            return (
              (u = y("body").css("overflow")),
              y("body").css("overflow", "hidden"),
              (f = y("html").css("overflow")),
              y("html").css("overflow", "hidden"),
              jQuery(".slim-likes-widget")
                .find("iframe")
                .css("display", "inline-block")
                .css("width", "60px"),
              d.data("carousel-extra", e),
              this.each(function () {
                var e = y(this);
                t && y.extend(s, t),
                  -1 == s.start_index && (s.start_index = 0),
                  d
                    .trigger("jp_carousel.beforeOpen")
                    .fadeIn("fast", function () {
                      d.trigger("jp_carousel.afterOpen"),
                        w
                          .jp_carousel(
                            "initSlides",
                            e.find(s.items_selector),
                            s.start_index
                          )
                          .jp_carousel("selectSlideAtIndex", s.start_index);
                    }),
                  w.html("");
              })
            );
        },
        selectSlideAtIndex: function (e) {
          var t = this.jp_carousel("slides"),
            s = t.eq(e);
          return (
            0 === s.length && (s = t.eq(0)),
            w.jp_carousel("selectSlide", s, !1),
            this
          );
        },
        close: function () {
          return (
            y("body").css("overflow", u),
            y("html").css("overflow", f),
            d.trigger("jp_carousel.beforeClose").fadeOut("fast", function () {
              d.trigger("jp_carousel.afterClose");
            })
          );
        },
        next: function () {
          var e = w.jp_carousel("nextSlide");
          d.animate({ scrollTop: 0 }, "fast"),
            e && this.jp_carousel("selectSlide", e);
        },
        previous: function () {
          var e = w.jp_carousel("prevSlide");
          d.animate({ scrollTop: 0 }, "fast"),
            e && this.jp_carousel("selectSlide", e);
        },
        resetButtons: function (e) {
          e.data("liked")
            ? y(".jp-carousel-buttons a.jp-carousel-like")
                .addClass("liked")
                .text(jetpackCarouselStrings.unlike)
            : y(".jp-carousel-buttons a.jp-carousel-like")
                .removeClass("liked")
                .text(jetpackCarouselStrings.like);
        },
        selectedSlide: function () {
          return this.find(".selected");
        },
        setSlidePosition: function (e) {
          return (
            (a = Date.now()),
            this.css({
              "-webkit-transform": "translate3d(" + e + "px,0,0)",
              "-moz-transform": "translate3d(" + e + "px,0,0)",
              "-ms-transform": "translate(" + e + "px,0)",
              "-o-transform": "translate(" + e + "px,0)",
              transform: "translate3d(" + e + "px,0,0)",
            })
          );
        },
        updateSlidePositions: function (e) {
          var t = this.jp_carousel("selectedSlide"),
            s = w.width(),
            i = t.width(),
            n = w.jp_carousel("prevSlide"),
            o = w.jp_carousel("nextSlide"),
            r = n.prev(),
            a = o.next(),
            l = Math.floor(0.5 * (s - i));
          t.jp_carousel("setSlidePosition", l).show(),
            w.jp_carousel("fitInfo", e),
            1 == (m.is(t.prevAll()) ? 1 : -1)
              ? (a.is(n) ||
                  a.jp_carousel("setSlidePosition", s + o.width()).show(),
                r.is(o) ||
                  r.jp_carousel("setSlidePosition", -r.width() - i).show())
              : a.is(n) || a.jp_carousel("setSlidePosition", s + i).show(),
            n
              .jp_carousel(
                "setSlidePosition",
                Math.floor(-n.width() + 0.75 * c)
              )
              .show(),
            o.jp_carousel("setSlidePosition", Math.ceil(s - 0.75 * c)).show();
        },
        selectSlide: function (e, t) {
          m = this.find(".selected").removeClass("selected");
          var s,
            i,
            n = w.jp_carousel("slides").css({ position: "fixed" }),
            o = y(e).addClass("selected").css({ position: "relative" }),
            r = o.data("attachment-id"),
            a = w.jp_carousel("prevSlide"),
            l = w.jp_carousel("nextSlide"),
            c = a.prev(),
            u = l.next();
          w.jp_carousel("loadFullImage", o),
            p.hide(),
            0 == l.length && n.length <= 2
              ? y(".jp-carousel-next-button").hide()
              : y(".jp-carousel-next-button").show(),
            0 == a.length && n.length <= 2
              ? y(".jp-carousel-previous-button").hide()
              : y(".jp-carousel-previous-button").show(),
            (s = o.add(a).add(c).add(l).add(u).jp_carousel("loadSlide")),
            n.not(s).hide(),
            w.jp_carousel("updateSlidePositions", t),
            w.jp_carousel("resetButtons", o),
            d.trigger("jp_carousel.selectSlide", [o]),
            w.jp_carousel("getTitleDesc", {
              title: o.data("title"),
              desc: o.data("desc"),
            }),
            w.jp_carousel("loadLikes", r),
            w.jp_carousel("updateLikesWidgetVisibility", r),
            0 < l.length && w.jp_carousel("loadLikes", l.data("attachment-id")),
            0 < a.length && w.jp_carousel("loadLikes", a.data("attachment-id"));
          var h = o.data("image-meta");
          w.jp_carousel("updateExif", h),
            w.jp_carousel("updateFullSizeLink", o),
            w.jp_carousel("updateMap", h),
            w.jp_carousel("testCommentsOpened", o.data("comments-opened")),
            w.jp_carousel("getComments", {
              attachment_id: r,
              offset: 0,
              clear: !0,
            }),
            y("#jp-carousel-comment-post-results").slideUp(),
            o.data("caption")
              ? ((i = y("<div />").text(o.data("caption")).html()) ==
                  y("<div />").text(o.data("title")).html() &&
                  y(".jp-carousel-titleanddesc-title").fadeOut("fast").empty(),
                i == y("<div />").text(o.data("desc")).html() &&
                  y(".jp-carousel-titleanddesc-desc").fadeOut("fast").empty(),
                p.html(o.data("caption")).fadeIn("slow"))
              : p.fadeOut("fast").empty(),
            y(l)
              .add(a)
              .each(function () {
                w.jp_carousel("loadFullImage", y(this));
              }),
            (window.location.hash = g = "#jp-carousel-" + r);
        },
        slides: function () {
          return this.find(".jp-carousel-slide");
        },
        slideDimensions: function () {
          return {
            width: y(window).width() - 2 * c,
            height: Math.floor((y(window).height() / 100) * 85 - 60),
          };
        },
        loadSlide: function () {
          return this.each(function () {
            var e = y(this);
            e.find("img").one("load", function () {
              e.jp_carousel("fitSlide", !1);
            });
          });
        },
        bestFit: function () {
          var e = w.jp_carousel("slideDimensions"),
            t = this.jp_carousel("originalDimensions"),
            s = t.width / t.height,
            i = 1,
            n = 1;
          return (
            t.width > e.width && (i = e.width / t.width),
            t.height > e.height && (n = e.height / t.height),
            i < n
              ? ((width = e.width), (height = Math.floor(width / s)))
              : n < i
              ? ((height = e.height), (width = Math.floor(height * s)))
              : ((width = t.width), (height = t.height)),
            { width: width, height: height }
          );
        },
        fitInfo: function (e) {
          var t = this.jp_carousel("selectedSlide").jp_carousel("bestFit");
          return (
            l.css({
              left: Math.floor(0.5 * (h.width() - t.width)),
              width: Math.floor(t.width),
            }),
            this
          );
        },
        fitMeta: function (e) {
          var t = {
              top: Math.floor((y(window).height() / 100) * 85 + 5) + "px",
            },
            s = { width: h.width() - (imageMeta.width() + 80) + "px" };
          e
            ? (h.animate(t), leftColWrapper.animate(s))
            : (h.animate(t), leftColWrapper.css(s));
        },
        fitSlide: function (e) {
          return this.each(function () {
            w.jp_carousel("selectedSlide");
            var e = y(this),
              t = e.jp_carousel("bestFit"),
              s = w.jp_carousel("slideDimensions");
            (t.left = 0),
              (t.top = Math.floor(0.5 * (s.height - t.height)) + 40),
              e.css(t);
          });
        },
        texturize: function (e) {
          return (
            (e = (e = (e = (e = new String(e))
              .replace(/'/g, "&#8217;")
              .replace(/&#039;/g, "&#8217;")
              .replace(/[\u2019]/g, "&#8217;"))
              .replace(/"/g, "&#8221;")
              .replace(/&#034;/g, "&#8221;")
              .replace(/&quot;/g, "&#8221;")
              .replace(/[\u201D]/g, "&#8221;")).replace(
              /([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g,
              '$1="$2"'
            )),
            y.trim(e)
          );
        },
        initSlides: function (e, g) {
          this.jp_carousel("slideDimensions").width;
          e.length < 2
            ? y(".jp-carousel-next-button, .jp-carousel-previous-button").hide()
            : y(
                ".jp-carousel-next-button, .jp-carousel-previous-button"
              ).show(),
            e.each(function (e) {
              var t = y(this),
                s = t.data("orig-size") || "",
                i = w.jp_carousel("slideDimensions"),
                n = s.split(",");
              (s = { width: parseInt(n[0], 10), height: parseInt(n[1], 10) }),
                (medium_file = t.data("medium-file") || ""),
                (large_file = t.data("large-file") || ""),
                (src = t.data("orig-file")),
                (src = w.jp_carousel("selectBestImageSize", {
                  orig_file: src,
                  orig_width: s.width,
                  orig_height: s.height,
                  max_width: i.width,
                  max_height: i.height,
                  medium_file: medium_file,
                  large_file: large_file,
                })),
                y(this).data("gallery-src", src);
            }),
            0 !== g && (y("<img/>")[0].src = y(e[g]).data("gallery-src"));
          var j =
            0 < e.first().closest(".tiled-gallery.type-rectangular").length;
          return (
            e.each(function (e) {
              var t = y(this),
                s = t.data("attachment-id") || 0,
                i = t.data("comments-opened") || 0,
                n = t.data("image-meta") || {},
                o = t.data("orig-size") || "",
                r = { width: t[0].naturalWidth, height: t[0].naturalHeight },
                a = t.data("image-title") || "",
                l = t.data("image-description") || "",
                c = t.parents("dl").find("dd.gallery-caption").html() || "",
                u = t.data("gallery-src") || "",
                h = t.data("medium-file") || "",
                d = t.data("large-file") || "",
                p = t.data("orig-file") || "",
                v = t
                  .parents("div.tiled-gallery-item")
                  .find("div.tiled-gallery-caption")
                  .html();
              if ((v && (c = v), s && o.length)) {
                (a = w.jp_carousel("texturize", a)),
                  (l = w.jp_carousel("texturize", l)),
                  (c = w.jp_carousel("texturize", c));
                var m = y("<img/>")
                    .attr(
                      "src",
                      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    )
                    .css("width", "100%")
                    .css("height", "100%"),
                  f = y('<div class="jp-carousel-slide"></div>')
                    .hide()
                    .css({ left: e < g ? -1e3 : w.width() })
                    .append(m)
                    .appendTo(w)
                    .data("src", u)
                    .data("title", a)
                    .data("desc", l)
                    .data("caption", c)
                    .data("attachment-id", s)
                    .data("permalink", t.parents("a").attr("href"))
                    .data("orig-size", o)
                    .data("comments-opened", i)
                    .data("image-meta", n)
                    .data("medium-file", h)
                    .data("large-file", d)
                    .data("orig-file", p)
                    .data("thumb-size", r);
                j &&
                  f
                    .data("preview-image", t.attr("src"))
                    .css({
                      "background-image": 'url("' + t.attr("src") + '")',
                      "background-size": "100% 100%",
                      "background-position": "center center",
                    }),
                  f.jp_carousel("fitSlide", !1);
              }
            }),
            this
          );
        },
        selectBestImageSize: function (e) {
          if (("object" != typeof e && (e = {}), void 0 === e.orig_file))
            return "";
          if (void 0 === e.orig_width || void 0 === e.max_width)
            return e.orig_file;
          if (void 0 === e.medium_file || void 0 === e.large_file)
            return e.orig_file;
          var t = e.medium_file.replace(/-([\d]+x[\d]+)\..+$/, "$1"),
            s = t != e.medium_file ? t.split("x") : [e.orig_width, 0],
            i = parseInt(s[0], 10),
            n = parseInt(s[1], 10),
            o = e.large_file.replace(/-([\d]+x[\d]+)\..+$/, "$1"),
            r = o != e.large_file ? o.split("x") : [e.orig_width, 0],
            a = parseInt(r[0], 10),
            l = parseInt(r[1], 10);
          return (
            void 0 !== window.devicePixelRatio &&
              1 < window.devicePixelRatio &&
              ((e.max_width = e.max_width * window.devicePixelRatio),
              (e.max_height = e.max_height * window.devicePixelRatio)),
            a >= e.max_width || l >= e.max_height
              ? e.large_file
              : i >= e.max_width || n >= e.max_height
              ? e.medium_file
              : e.orig_file
          );
        },
        originalDimensions: function () {
          var e = y(this).data("orig-size").split(",");
          return { width: parseInt(e[0], 10), height: parseInt(e[1], 10) };
        },
        format: function (s) {
          if (("object" != typeof s && (s = {}), s.text && void 0 !== s.text))
            return s.replacements && void 0 !== s.replacements
              ? s.text.replace(/{(\d+)}/g, function (e, t) {
                  return void 0 !== s.replacements[t] ? s.replacements[t] : e;
                })
              : s.text;
        },
        shutterSpeed: function (e) {
          if (1 <= e) return Math.round(e) + "s";
          for (var t = 1, s = 1, i = 1, n = 1e3; t != e && 0 < n--; )
            t < e ? (s += 1) : ((i += 1), (s = parseInt(e * i, 10))),
              (t = s / i);
          return (
            1 < s && ((i = Math.round(i / s)), (s = 1)),
            i <= 1 ? "1s" : s + "/" + i + "s"
          );
        },
        parseTitleDesc: function (s) {
          if (!s.match(" ") && s.match("_")) return "";
          y([
            "CIMG",
            "DSC_",
            "DSCF",
            "DSCN",
            "DUW",
            "GEDC",
            "IMG",
            "JD",
            "MGP",
            "PICT",
            "Imagen",
            "Foto",
            "DSC",
            "Scan",
            "SANY",
            "SAM",
            "Screen Shot [0-9]+",
          ]).each(function (e, t) {
            (regex = new RegExp("^" + t)), regex.test(s) && (s = "");
          });
          return s;
        },
        getTitleDesc: function (e) {
          var t,
            s,
            i = "",
            n = "";
          (s = y(
            "div.jp-carousel-titleanddesc",
            "div.jp-carousel-wrap"
          )).hide(),
            (i = w.jp_carousel("parseTitleDesc", e.title) || ""),
            (t = w.jp_carousel("parseTitleDesc", e.desc) || ""),
            (i.length || t.length) &&
              (y("<div />").text(i).html() == y("<div />").text(t).html() &&
                (i = ""),
              (n = i.length
                ? '<div class="jp-carousel-titleanddesc-title">' + i + "</div>"
                : ""),
              (n += t.length
                ? '<div class="jp-carousel-titleanddesc-desc">' + t + "</div>"
                : ""),
              s.html(n).fadeIn("slow")),
            y("div#jp-carousel-comment-form-container").css(
              "margin-top",
              "20px"
            ),
            y("div#jp-carousel-comments-loading").css("margin-top", "20px");
        },
        updateLikesWidgetVisibility: function (t) {
          "undefined" != typeof jetpackLikesWidgetQueue &&
            y(".jp-carousel-buttons .jetpack-likes-widget-wrapper")
              .css("display", "none")
              .each(function () {
                var e = y(this);
                if (e.attr("data-attachment-id") == t)
                  return e.css("display", "inline-block"), !1;
              });
        },
        loadLikes: function (e) {
          var t = y(".jp-carousel-wrap").data("carousel-extra"),
            s = t.likes_blog_id;
          if (0 == y("#like-post-wrapper-" + s + "-" + e).length) {
            var i = "http",
              n = "http://wordpress.com";
            if (t.permalink.length) {
              "http" != (i = t.permalink.split(":")[0]) &&
                "https" != i &&
                (i = "http");
              var o = t.permalink.split("/");
              2 <= o.length && (n = i + "://" + o[2]);
            }
            var r =
              i +
              "://widgets.wp.com/likes/#blog_id=" +
              encodeURIComponent(s) +
              "&post_id=" +
              encodeURIComponent(e) +
              "&slim=1&origin=" +
              encodeURIComponent(n);
            "en" !== jetpackCarouselStrings.lang &&
              (r += "&lang=" + encodeURIComponent(jetpackCarouselStrings.lang));
            var a = y(
                "<iframe class='post-likes-widget jetpack-likes-widget jetpack-resizeable'></iframe>"
              )
                .attr("name", "like-post-frame-" + s + "-" + e)
                .attr("src", r)
                .css("display", "inline-block"),
              l = y("<div/>")
                .addClass(
                  "jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded slim-likes-widget"
                )
                .attr("id", "like-post-wrapper-" + s + "-" + e)
                .attr("data-src", r)
                .attr("data-name", "like-post-frame-" + s + "-" + e)
                .attr("data-attachment-id", e)
                .css("display", "none")
                .css("vertical-align", "middle")
                .append(a)
                .append("<div class='post-likes-widget-placeholder'></div>");
            y(".jp-carousel-buttons").append(l);
          }
        },
        updateExif: function (e) {
          if (!e || 1 != jetpackCarouselStrings.display_exif) return !1;
          var s = y("<ul class='jp-carousel-image-exif'></ul>");
          y.each(e, function (e, t) {
            if (
              0 !== parseFloat(t) &&
              t.length &&
              -1 !==
                y.inArray(e, [
                  "camera",
                  "aperture",
                  "shutter_speed",
                  "focal_length",
                ])
            ) {
              switch (e) {
                case "focal_length":
                  t += "mm";
                  break;
                case "shutter_speed":
                  t = w.jp_carousel("shutterSpeed", t);
                  break;
                case "aperture":
                  t = "f/" + t;
              }
              s.append(
                "<li><h5>" + jetpackCarouselStrings[e] + "</h5>" + t + "</li>"
              );
            }
          }),
            y(
              "div.jp-carousel-image-meta ul.jp-carousel-image-exif"
            ).replaceWith(s);
        },
        updateFullSizeLink: function (e) {
          if (!e || !e.data) return !1;
          var t = e.data("orig-file").replace(/\?.+$/, ""),
            s = e.data("orig-size").split(","),
            i = y(
              "<a>" +
                w.jp_carousel("format", {
                  text: jetpackCarouselStrings.download_original,
                  replacements: s,
                }) +
                "</a>"
            )
              .addClass("jp-carousel-image-download")
              .attr("href", t)
              .attr("target", "_blank");
          y(
            "div.jp-carousel-image-meta a.jp-carousel-image-download"
          ).replaceWith(i);
        },
        updateMap: function (e) {
          if (
            e.latitude &&
            e.longitude &&
            1 == jetpackCarouselStrings.display_geo
          ) {
            var t = e.latitude,
              s = e.longitude,
              i = y("div.jp-carousel-image-meta", "div.jp-carousel-wrap"),
              n =
                "&scale=2&style=feature:all|element:all|invert_lightness:true|hue:0x0077FF|saturation:-50|lightness:-5|gamma:0.91";
            y("<div></div>")
              .addClass("jp-carousel-image-map")
              .html(
                '<img width="154" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter=' +
                  t +
                  "," +
                  s +
                  "&\t\t\t\t\t\t\tzoom=8&\t\t\t\t\t\t\tsize=154x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:medium%7Ccolor:blue%7C" +
                  t +
                  "," +
                  s +
                  n +
                  '" class="gmap-main" />\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="gmap-topright"><div class="imgclip"><img width="175" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\t\t\t\t\t\t\tcenter=' +
                  t +
                  "," +
                  s +
                  "&\t\t\t\t\t\t\tzoom=3&\t\t\t\t\t\t\tsize=175x154&\t\t\t\t\t\t\tsensor=false&\t\t\t\t\t\t\tmarkers=size:small%7Ccolor:blue%7C" +
                  t +
                  "," +
                  s +
                  n +
                  '"c /></div></div>\t\t\t\t\t\t\t\t\t\t\t\t\t'
              )
              .prependTo(i);
          }
        },
        testCommentsOpened: function (e) {
          1 == parseInt(e, 10)
            ? (y(".jp-carousel-buttons").fadeIn("fast"),
              commentForm.fadeIn("fast"))
            : (y(".jp-carousel-buttons").fadeOut("fast"),
              commentForm.fadeOut("fast"));
        },
        getComments: function (e) {
          return !1;
        },
        postCommentError: function (e) {
          "object" != typeof e && (e = {}),
            e.field &&
              void 0 !== e.field &&
              e.error &&
              void 0 !== e.error &&
              (y("#jp-carousel-comment-post-results")
                .slideUp("fast")
                .html(
                  '<span class="jp-carousel-comment-post-error">' +
                    e.error +
                    "</span>"
                )
                .slideDown("fast"),
              y("#jp-carousel-comment-form-spinner").spin(!1));
        },
        setCommentIframeSrc: function (e) {
          var t = y("#jp-carousel-comment-iframe");
          t &&
            t.length &&
            (t.attr("src", t.attr("src").replace(/(postid=)\d+/, "$1" + e)),
            t.attr(
              "src",
              t.attr("src").replace(/(%23.+)?$/, "%23jp-carousel-" + e)
            ));
        },
        clearCommentTextAreaValue: function () {
          var e = y("#jp-carousel-comment-form-comment-field");
          e && e.val("");
        },
        nextSlide: function () {
          var e = this.jp_carousel("slides"),
            t = this.jp_carousel("selectedSlide");
          return 0 == t.length || (2 < e.length && t.is(e.last()))
            ? e.first()
            : t.next();
        },
        prevSlide: function () {
          var e = this.jp_carousel("slides"),
            t = this.jp_carousel("selectedSlide");
          return 0 == t.length || (2 < e.length && t.is(e.first()))
            ? e.last()
            : t.prev();
        },
        loadFullImage: function (e) {
          var t = e.find("img:first");
          t.data("loaded") ||
            (t.on("load.jetpack", function () {
              t.off("load.jetpack"),
                y(this)
                  .closest(".jp-carousel-slide")
                  .css("background-image", "");
            }),
            !e.data("preview-image") ||
            (e.data("thumb-size") && e.width() > e.data("thumb-size").width)
              ? t.attr("src", t.closest(".jp-carousel-slide").data("src"))
              : t.attr("src", e.data("preview-image")),
            t.data("loaded", 1));
        },
      };
      (y.fn.jp_carousel = function (e) {
        return s[e]
          ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void y.error(
              "Method " + e + " does not exist on jQuery.jp_carousel"
            )
          : s.open.apply(this, arguments);
      }),
        y(document.body).on(
          "click",
          "div.gallery,div.tiled-gallery",
          function (e) {
            y(this).jp_carousel("testForData", e.currentTarget) &&
              (y(e.target).parent().hasClass("gallery-caption") ||
                (e.preventDefault(),
                y(this).jp_carousel("open", {
                  start_index: y(this)
                    .find(".gallery-item, .tiled-gallery-item")
                    .index(
                      y(e.target).parents(".gallery-item, .tiled-gallery-item")
                    ),
                })));
          }
        ),
        y(window).on("hashchange", function () {
          if (
            window.location.hash &&
            window.location.hash.match(/jp-carousel-(\d+)/) &&
            window.location.hash != g
          ) {
            g = window.location.hash;
            var e = y("div.gallery, div.tiled-gallery"),
              s = -1,
              i = window.location.hash.match(/jp-carousel-(\d+)/);
            y(this).jp_carousel("testForData", e) &&
              ((i = parseInt(i[1], 10)),
              e.find("img").each(function (e, t) {
                if (i && y(t).data("attachment-id") == i) return (s = e), !1;
              }),
              -1 != s && e.jp_carousel("openOrSelectSlide", s));
          }
        }),
        window.location.hash && y(window).trigger("hashchange");
    }),
    (Iv = jQuery),
    (Iv.fn.touchwipe = function (e) {
      var c = {
        min_move_x: 20,
        min_move_y: 20,
        wipeLeft: function (e) {},
        wipeRight: function (e) {},
        wipeUp: function (e) {},
        wipeDown: function (e) {},
        preventDefaultEvents: !0,
      };
      return (
        e && Iv.extend(c, e),
        this.each(function () {
          var o,
            r,
            a = !1;
          function l() {
            this.removeEventListener("touchmove", t), (o = null), (a = !1);
          }
          function t(e) {
            if ((c.preventDefaultEvents && e.preventDefault(), a)) {
              var t = e.touches[0].pageX,
                s = e.touches[0].pageY,
                i = o - t,
                n = r - s;
              Math.abs(i) >= c.min_move_x
                ? (l(), 0 < i ? c.wipeLeft(e) : c.wipeRight(e))
                : Math.abs(n) >= c.min_move_y &&
                  (l(), 0 < n ? c.wipeDown(e) : c.wipeUp(e));
            }
          }
          "ontouchstart" in document.documentElement &&
            this.addEventListener(
              "touchstart",
              function (e) {
                1 == e.touches.length &&
                  ((o = e.touches[0].pageX),
                  (r = e.touches[0].pageY),
                  (a = !0),
                  this.addEventListener("touchmove", t, !1));
              },
              !1
            );
        }),
        this
      );
    });
  var q = null,
    jw,
    iw,
    kw,
    lw,
    mw,
    nw,
    ow,
    pw,
    qw,
    rw,
    sw;
  function bw(e, t, s, i) {
    t && (s((e = { a: t, d: e })), i.push.apply(i, e.e));
  }
  function cw(l, f) {
    var g,
      j = {};
    !(function () {
      for (
        var e = l.concat(f), t = [], s = {}, i = 0, n = e.length;
        i < n;
        ++i
      ) {
        var o = e[i],
          r = o[3];
        if (r) for (var a = r.length; 0 <= --a; ) j[r.charAt(a)] = o;
        (r = "" + (o = o[1])), s.hasOwnProperty(r) || (t.push(o), (s[r] = q));
      }
      t.push(/[\S\s]/),
        (g = (function (e) {
          function l(e) {
            var t = e.charCodeAt(0);
            if (92 !== t) return t;
            var s = e.charAt(1);
            return (t = r[s])
              ? t
              : "0" <= s && s <= "7"
              ? parseInt(e.substring(1), 8)
              : "u" === s || "x" === s
              ? parseInt(e.substring(2), 16)
              : e.charCodeAt(1);
          }
          function c(e) {
            return e < 32
              ? (e < 16 ? "\\x0" : "\\x") + e.toString(16)
              : (("\\" !== (e = String.fromCharCode(e)) &&
                  "-" !== e &&
                  "[" !== e &&
                  "]" !== e) ||
                  (e = "\\" + e),
                e);
          }
          function a(e) {
            for (
              var t = e
                  .substring(1, e.length - 1)
                  .match(
                    /\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g
                  ),
                s = ((e = []), []),
                i = "^" === t[0],
                n = i ? 1 : 0,
                o = t.length;
              n < o;
              ++n
            ) {
              var r = t[n];
              if (/\\[bdsw]/i.test(r)) e.push(r);
              else {
                var a;
                r = l(r);
                n + 2 < o && "-" === t[n + 1]
                  ? ((a = l(t[n + 2])), (n += 2))
                  : (a = r),
                  s.push([r, a]),
                  a < 65 ||
                    122 < r ||
                    (a < 65 ||
                      90 < r ||
                      s.push([32 | Math.max(65, r), 32 | Math.min(a, 90)]),
                    a < 97 ||
                      122 < r ||
                      s.push([-33 & Math.max(97, r), -33 & Math.min(a, 122)]));
              }
            }
            for (
              s.sort(function (e, t) {
                return e[0] - t[0] || t[1] - e[1];
              }),
                t = [],
                r = [NaN, NaN],
                n = 0;
              n < s.length;
              ++n
            )
              (o = s[n])[0] <= r[1] + 1
                ? (r[1] = Math.max(r[1], o[1]))
                : t.push((r = o));
            for (
              s = ["["], i && s.push("^"), s.push.apply(s, e), n = 0;
              n < t.length;
              ++n
            )
              (o = t[n]),
                s.push(c(o[0])),
                o[1] > o[0] &&
                  (o[1] + 1 > o[0] && s.push("-"), s.push(c(o[1])));
            return s.push("]"), s.join("");
          }
          function t(e) {
            for (
              var t = e.source.match(
                  /\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g
                ),
                s = t.length,
                i = [],
                n = 0,
                o = 0;
              n < s;
              ++n
            ) {
              var r = t[n];
              "(" === r
                ? ++o
                : "\\" === r.charAt(0) &&
                  (r = +r.substring(1)) &&
                  r <= o &&
                  (i[r] = -1);
            }
            for (n = 1; n < i.length; ++n) -1 === i[n] && (i[n] = ++u);
            for (o = n = 0; n < s; ++n)
              "(" === (r = t[n])
                ? void 0 === i[++o] && (t[n] = "(?:")
                : "\\" === r.charAt(0) &&
                  (r = +r.substring(1)) &&
                  r <= o &&
                  (t[n] = "\\" + i[o]);
            for (o = n = 0; n < s; ++n)
              "^" === t[n] && "^" !== t[n + 1] && (t[n] = "");
            if (e.ignoreCase && h)
              for (n = 0; n < s; ++n)
                (e = (r = t[n]).charAt(0)),
                  2 <= r.length && "[" === e
                    ? (t[n] = a(r))
                    : "\\" !== e &&
                      (t[n] = r.replace(/[A-Za-z]/g, function (e) {
                        return (
                          (e = e.charCodeAt(0)),
                          "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                        );
                      }));
            return t.join("");
          }
          for (var u = 0, h = !1, s = !1, i = 0, n = e.length; i < n; ++i) {
            var o = e[i];
            if (o.ignoreCase) s = !0;
            else if (
              /[a-z]/i.test(
                o.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, "")
              )
            ) {
              s = !(h = !0);
              break;
            }
          }
          var r = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 },
            d = [];
          for (i = 0, n = e.length; i < n; ++i) {
            if ((o = e[i]).global || o.multiline) throw Error("" + o);
            d.push("(?:" + t(o) + ")");
          }
          return RegExp(d.join("|"), s ? "gi" : "g");
        })(t));
    })();
    var y = f.length;
    return function e(t) {
      for (
        var s = t.d,
          i = [s, "pln"],
          n = 0,
          o = t.a.match(g) || [],
          r = {},
          a = 0,
          l = o.length;
        a < l;
        ++a
      ) {
        var c,
          u = o[a],
          h = r[u],
          d = void 0;
        if ("string" == typeof h) c = !1;
        else {
          var p = j[u.charAt(0)];
          if (p) (d = u.match(p[1])), (h = p[0]);
          else {
            for (c = 0; c < y; ++c)
              if (((p = f[c]), (d = u.match(p[1])))) {
                h = p[0];
                break;
              }
            d || (h = "pln");
          }
          !(c = 5 <= h.length && "lang-" === h.substring(0, 5)) ||
            (d && "string" == typeof d[1]) ||
            ((c = !1), (h = "src")),
            c || (r[u] = h);
        }
        if (((p = n), (n += u.length), c)) {
          c = d[1];
          var v = u.indexOf(c),
            m = v + c.length;
          d[2] && (v = (m = u.length - d[2].length) - c.length),
            (h = h.substring(5)),
            bw(s + p, u.substring(0, v), e, i),
            bw(s + p + v, c, gw(h, c), i),
            bw(s + p + m, u.substring(m), e, i);
        } else i.push(s + p, h);
      }
      t.e = i;
    };
  }
  function dw(e) {
    var t = [],
      s = [];
    e.tripleQuotedStrings
      ? t.push([
          "str",
          /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,
          q,
          "'\"",
        ])
      : e.multiLineStrings
      ? t.push([
          "str",
          /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
          q,
          "'\"`",
        ])
      : t.push([
          "str",
          /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,
          q,
          "\"'",
        ]),
      e.verbatimStrings && s.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
    var i = e.hashComments;
    return (
      i &&
        (e.cStyleComments
          ? (1 < i
              ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"])
              : t.push([
                  "com",
                  /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,
                  q,
                  "#",
                ]),
            s.push([
              "str",
              /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,
              q,
            ]))
          : t.push(["com", /^#[^\n\r]*/, q, "#"])),
      e.cStyleComments &&
        (s.push(["com", /^\/\/[^\n\r]*/, q]),
        s.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])),
      e.regexLiterals &&
        s.push([
          "lang-regex",
          /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/,
        ]),
      (i = e.types) && s.push(["typ", i]),
      (e = ("" + e.keywords).replace(/^ | $/g, "")).length &&
        s.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]),
      t.push(["pln", /^\s+/, q, " \r\n\tÂ "]),
      s.push(
        ["lit", /^@[$_a-z][\w$@]*/i, q],
        ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q],
        ["pln", /^[$_a-z][\w$@]*/i, q],
        [
          "lit",
          /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,
          q,
          "0123456789",
        ],
        ["pln", /^\\[\S\s]?/, q],
        ["pun", /^.[^\s\w"-$'./@\\`]*/, q]
      ),
      cw(t, s)
    );
  }
  function ew(e, t) {
    function n(e) {
      switch (e.nodeType) {
        case 1:
          if (r.test(e.className)) break;
          if ("BR" === e.nodeName)
            o(e), e.parentNode && e.parentNode.removeChild(e);
          else for (e = e.firstChild; e; e = e.nextSibling) n(e);
          break;
        case 3:
        case 4:
          if (c) {
            var t = e.nodeValue,
              s = t.match(a);
            if (s) {
              var i = t.substring(0, s.index);
              (e.nodeValue = i),
                (t = t.substring(s.index + s[0].length)) &&
                  e.parentNode.insertBefore(l.createTextNode(t), e.nextSibling),
                o(e),
                i || e.parentNode.removeChild(e);
            }
          }
      }
    }
    function o(e) {
      for (; !e.nextSibling; ) if (!(e = e.parentNode)) return;
      var t;
      for (
        e = (function e(t, s) {
          var i = s ? t.cloneNode(!1) : t;
          if ((n = t.parentNode)) {
            var n = e(n, 1),
              o = t.nextSibling;
            n.appendChild(i);
            for (var r = o; r; r = o) (o = r.nextSibling), n.appendChild(r);
          }
          return i;
        })(e.nextSibling, 0);
        (t = e.parentNode) && 1 === t.nodeType;

      )
        e = t;
      i.push(e);
    }
    var s,
      r = /(?:^|\s)nocode(?:\s|$)/,
      a = /\r\n?|\n/,
      l = e.ownerDocument;
    e.currentStyle
      ? (s = e.currentStyle.whiteSpace)
      : window.getComputedStyle &&
        (s = l.defaultView
          .getComputedStyle(e, q)
          .getPropertyValue("white-space"));
    var c = s && "pre" === s.substring(0, 3);
    for (s = l.createElement("LI"); e.firstChild; ) s.appendChild(e.firstChild);
    for (var i = [s], u = 0; u < i.length; ++u) n(i[u]);
    t === (0 | t) && i[0].setAttribute("value", t);
    var h = l.createElement("OL");
    h.className = "linenums";
    for (
      var d = Math.max(0, (t - 1) | 0) || 0, p = ((u = 0), i.length);
      u < p;
      ++u
    )
      ((s = i[u]).className = "L" + ((u + d) % 10)),
        s.firstChild || s.appendChild(l.createTextNode("Â ")),
        h.appendChild(s);
    e.appendChild(h);
  }
  function fw(e, t) {
    for (var s = t.length; 0 <= --s; ) {
      var i = t[s];
      sw.hasOwnProperty(i)
        ? window.console &&
          console.warn("cannot override language handler %s", i)
        : (sw[i] = e);
    }
  }
  function gw(e, t) {
    return (
      (e && sw.hasOwnProperty(e)) ||
        (e = /^\s*</.test(t) ? "default-markup" : "default-code"),
      sw[e]
    );
  }
  function hw(e) {
    var t = e.g;
    try {
      var s = (l = (function (e) {
        var t,
          i = /(?:^|\s)nocode(?:\s|$)/,
          n = [],
          o = 0,
          r = [],
          a = 0;
        e.currentStyle
          ? (t = e.currentStyle.whiteSpace)
          : window.getComputedStyle &&
            (t = document.defaultView
              .getComputedStyle(e, q)
              .getPropertyValue("white-space"));
        var l = t && "pre" === t.substring(0, 3);
        return (
          (function e(t) {
            switch (t.nodeType) {
              case 1:
                if (i.test(t.className)) break;
                for (var s = t.firstChild; s; s = s.nextSibling) e(s);
                ("BR" !== (s = t.nodeName) && "LI" !== s) ||
                  ((n[a] = "\n"), (r[a << 1] = o++), (r[(a++ << 1) | 1] = t));
                break;
              case 3:
              case 4:
                (s = t.nodeValue).length &&
                  ((s = l
                    ? s.replace(/\r\n?/g, "\n")
                    : s.replace(/[\t\n\r ]+/g, " ")),
                  (n[a] = s),
                  (r[a << 1] = o),
                  (o += s.length),
                  (r[(a++ << 1) | 1] = t));
            }
          })(e),
          { a: n.join("").replace(/\n$/, ""), c: r }
        );
      })(e.h)).a;
      (e.a = s), (e.c = l.c), (e.d = 0), gw(t, s)(e);
      var i,
        n,
        o = /\bMSIE\b/.test(navigator.userAgent),
        r = ((t = /\n/g), e.a),
        a = r.length,
        l = 0,
        c = e.c,
        u = c.length,
        h = ((s = 0), e.e),
        d = h.length;
      e = 0;
      for (h[d] = a, n = i = 0; n < d; )
        h[n] !== h[n + 2] ? ((h[i++] = h[n++]), (h[i++] = h[n++])) : (n += 2);
      for (d = i, n = i = 0; n < d; ) {
        for (
          var p = h[n], v = h[n + 1], m = n + 2;
          m + 2 <= d && h[m + 1] === v;

        )
          m += 2;
        (h[i++] = p), (h[i++] = v), (n = m);
      }
      for (h.length = i; s < u; ) {
        var f,
          g = c[s + 2] || a,
          j = h[e + 2] || a,
          y = ((m = Math.min(g, j)), c[s + 1]);
        if (1 !== y.nodeType && (f = r.substring(l, m))) {
          o && (f = f.replace(t, "\r")), (y.nodeValue = f);
          var w = y.ownerDocument,
            b = w.createElement("SPAN");
          b.className = h[e + 1];
          var _ = y.parentNode;
          _.replaceChild(b, y),
            b.appendChild(y),
            l < g &&
              ((c[s + 1] = y = w.createTextNode(r.substring(m, g))),
              _.insertBefore(y, b.nextSibling));
        }
        g <= (l = m) && (s += 2), j <= l && (e += 2);
      }
    } catch (e) {
      "console" in window && console.log(e && e.stack ? e.stack : e);
    }
  }
  (window.PR_SHOULD_USE_CONTINUATION = !0),
    (kw = [
      (jw = [
        [
          (iw = ["break,continue,do,else,for,if,return,while"]),
          "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile",
        ],
        "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof",
      ]),
      "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where",
    ]),
    (lw = [
      jw,
      "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient",
    ]),
    (mw = [
      lw,
      "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var",
    ]),
    (nw = [
      iw,
      "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None",
    ]),
    (ow = [
      iw,
      "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END",
    ]),
    (pw =
      /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/),
    (qw = /\S/),
    (rw = dw({
      keywords: [
        kw,
        mw,
        (jw = [
          jw,
          "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN",
        ]),
        "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" +
          nw,
        ow,
        (iw = [
          iw,
          "case,done,elif,esac,eval,fi,function,in,local,set,then,until",
        ]),
      ],
      hashComments: !0,
      cStyleComments: !0,
      multiLineStrings: !0,
      regexLiterals: !0,
    })),
    (sw = {}),
    fw(rw, ["default-code"]),
    fw(
      cw(
        [],
        [
          ["pln", /^[^<?]+/],
          ["dec", /^<!\w[^>]*(?:>|$)/],
          ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
          ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
          ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
          ["pun", /^(?:<[%?]|[%?]>)/],
          ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
          ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
          ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
          ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i],
        ]
      ),
      ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]
    ),
    fw(
      cw(
        [
          ["pln", /^\s+/, q, " \t\r\n"],
          ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"],
        ],
        [
          ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
          ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
          ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
          ["pun", /^[/<->]+/],
          ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
          ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
          ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
          ["lang-css", /^style\s*=\s*"([^"]+)"/i],
          ["lang-css", /^style\s*=\s*'([^']+)'/i],
          ["lang-css", /^style\s*=\s*([^\s"'>]+)/i],
        ]
      ),
      ["in.tag"]
    ),
    fw(cw([], [["atv", /^[\S\s]+/]]), ["uq.val"]),
    fw(dw({ keywords: kw, hashComments: !0, cStyleComments: !0, types: pw }), [
      "c",
      "cc",
      "cpp",
      "cxx",
      "cyc",
      "m",
    ]),
    fw(dw({ keywords: "null,true,false" }), ["json"]),
    fw(
      dw({
        keywords: mw,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: pw,
      }),
      ["cs"]
    ),
    fw(dw({ keywords: lw, cStyleComments: !0 }), ["java"]),
    fw(dw({ keywords: iw, hashComments: !0, multiLineStrings: !0 }), [
      "bsh",
      "csh",
      "sh",
    ]),
    fw(
      dw({
        keywords: nw,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0,
      }),
      ["cv", "py"]
    ),
    fw(
      dw({
        keywords:
          "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0,
      }),
      ["perl", "pl", "pm"]
    ),
    fw(
      dw({
        keywords: ow,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0,
      }),
      ["rb"]
    ),
    fw(dw({ keywords: jw, cStyleComments: !0, regexLiterals: !0 }), ["js"]),
    fw(
      dw({
        keywords:
          "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0,
      }),
      ["coffee"]
    ),
    fw(cw([], [["str", /^[\S\s]+/]]), ["regex"]),
    (window.prettyPrintOne = function (e, t, s) {
      var i = document.createElement("PRE");
      return (
        (i.innerHTML = e), s && ew(i, s), hw({ g: t, i: s, h: i }), i.innerHTML
      );
    }),
    (window.prettyPrint = function (c) {
      for (
        var e = [
            document.getElementsByTagName("pre"),
            document.getElementsByTagName("code"),
            document.getElementsByTagName("xmp"),
          ],
          u = [],
          t = 0;
        t < e.length;
        ++t
      )
        for (var s = 0, i = e[t].length; s < i; ++s) u.push(e[t][s]);
      e = q;
      var h = Date;
      h.now ||
        (h = {
          now: function () {
            return +new Date();
          },
        });
      var d = 0,
        p = /\blang(?:uage)?-([\w.]+)(?!\S)/;
      !(function e() {
        for (
          var t = window.PR_SHOULD_USE_CONTINUATION ? h.now() + 250 : 1 / 0;
          d < u.length && h.now() < t;
          d++
        ) {
          var s = u[d];
          if (0 <= (i = s.className).indexOf("prettyprint")) {
            var i, n, o;
            if ((o = !(i = i.match(p)))) {
              for (
                var r = void 0, a = (o = s).firstChild;
                a;
                a = a.nextSibling
              ) {
                var l = a.nodeType;
                r =
                  1 === l
                    ? r
                      ? o
                      : a
                    : 3 === l && qw.test(a.nodeValue)
                    ? o
                    : r;
              }
              o = (n = r === o ? void 0 : r) && "CODE" === n.tagName;
            }
            for (
              o && (i = n.className.match(p)),
                i = i && i[1],
                o = !1,
                r = s.parentNode;
              r;
              r = r.parentNode
            )
              if (
                ("pre" === r.tagName ||
                  "code" === r.tagName ||
                  "xmp" === r.tagName) &&
                r.className &&
                0 <= r.className.indexOf("prettyprint")
              ) {
                o = !0;
                break;
              }
            o ||
              ((o =
                !!(o = s.className.match(/\blinenums\b(?::(\d+))?/)) &&
                (!o[1] || !o[1].length || +o[1])) && ew(s, o),
              hw({ g: i, h: s, i: o }));
          }
        }
        d < u.length ? setTimeout(e, 250) : c && c();
      })();
    }),
    (window.PR = {
      createSimpleLexer: cw,
      registerLangHandler: fw,
      sourceDecorator: dw,
      PR_ATTRIB_NAME: "atn",
      PR_ATTRIB_VALUE: "atv",
      PR_COMMENT: "com",
      PR_DECLARATION: "dec",
      PR_KEYWORD: "kwd",
      PR_LITERAL: "lit",
      PR_NOCODE: "nocode",
      PR_PLAIN: "pln",
      PR_PUNCTUATION: "pun",
      PR_SOURCE: "src",
      PR_STRING: "str",
      PR_TAG: "tag",
      PR_TYPE: "typ",
    });
  var root = this,
    UW = function (e) {
      return e instanceof UW
        ? e
        : this instanceof UW
        ? void (this._wrapped = e)
        : new UW(e);
    };
  (root.UW = UW),
    (UW.VERSION = "0.1"),
    (UW.KEYCODES = { TAB: 9, ENTER: 13, ESC: 27 }),
    (UW.elements = {
      alert: ".uw-thinstrip",
      accordion: ".uw-accordion",
      dropdowns: "#dawgdrops",
      images: "a > img",
      mobilemenu: "#mobile-relative",
      togglemobile: "#mobile-sidebar",
      radio: ":radio",
      checkbox: ":checkbox",
      search: "#uwsearcharea",
      select: ".uw-select",
      quicklinks: ".uw-quicklinks",
      slideshow: ".uw-slideshow",
      social: ".uw-social",
      vimeo: ".uw-vimeo",
    }),
    (UW.getBaseUrl = function () {
      var e = _.first(_.compact(Backbone.history.location.pathname.split("/")));
      return (
        Backbone.history.location.origin ||
          (Backbone.history.location.origin =
            Backbone.history.location.protocol +
            "//" +
            Backbone.history.location.hostname +
            (Backbone.history.location.port
              ? ":" + Backbone.history.location.port
              : "")),
        -1 != Backbone.history.location.origin.indexOf("www.washington.edu")
          ? Backbone.history.location.origin + (e ? "/" + e : "") + "/"
          : -1 !=
            Backbone.history.location.origin.indexOf("depts.washington.edu")
          ? Backbone.history.location.origin + (e ? "/" + e : "") + "/"
          : Backbone.history.location.origin + "/"
      );
    }),
    (UW.wpinstance = function () {
      return Backbone.history.location.pathname
        ? Backbone.history.location.pathname
        : "";
    }),
    (UW.sources = { search: UW.getBaseUrl() + "wp-admin/admin-ajax.php" }),
    (UW.initialize = function (e) {
      (UW.$body = e("body")),
        (UW.$window = e(window)),
        (UW.baseUrl = UW.getBaseUrl()),
        (UW.dropdowns = _.map(e(UW.elements.dropdowns), function (e) {
          return new UW.Dropdowns({ el: e });
        })),
        (UW.mobilemenu = _.map(e(UW.elements.mobilemenu), function (e) {
          return new UW.MobileMenu({ el: e });
        })),
        (UW.quicklinks = _.map(e(UW.elements.quicklinks), function (e) {
          return new UW.QuickLinks({ el: e });
        })),
        (UW.search = _.map(e(UW.elements.search), function (e) {
          return new UW.Search({ el: e });
        })),
        (UW.images = _.map(e(UW.elements.images), function (e) {
          return new UW.Image({ el: e });
        })),
        (UW.togglemobile = _.map(e(UW.elements.togglemobile), function (e) {
          return new UW.ToggleSidebarMenu({ el: e });
        })),
        (UW.slideshows = _.map(e(UW.elements.slideshow), function (e) {
          return new UW.Slideshow({ el: e });
        })),
        (UW.social = _.map(e(UW.elements.social), function (e) {
          return new UW.Social({ el: e });
        })),
        (UW.vimeo = _.map(e(UW.elements.vimeo), function (e) {
          return new UW.Vimeo({ el: e });
        })),
        (UW.accordion = _.map(e(UW.elements.accordion), function (e) {
          return new UW.Accordion({ el: e });
        })),
        (UW.radio = _.map(e(UW.elements.radio), function (e) {
          return new UW.Radio({ el: e });
        })),
        (UW.checkbox = _.map(e(UW.elements.checkbox), function (e) {
          return new UW.Radio({ el: e });
        })),
        (UW.select = _.map(e(UW.elements.select), function (e) {
          return new UW.Select({ el: e });
        })),
        (UW.alert = new UW.Alert({
          after: UW.elements.alert,
          model: new UW.Alert.Model(),
        })),
        e("table").addClass("table table-striped").attr("border", 1),
        e("pre").addClass("prettyprint"),
        window.prettyPrint && prettyPrint();
    }),
    jQuery(document).ready(function () {
      UW.initialize(jQuery);
    }),
    (UW.Alert = Backbone.View.extend({
      alert: "#uwalert-alert-message",
      events: { "click .close": "hide" },
      template:
        '<div id="uwalert-alert-message" class="<% _.each( categories, function( category ) { %> <%= category.slug %> <% }) %>"><div class="container"><span class="close">Close</span><h1><%= title %></h1><p><%= excerpt %><a class="more" href="http://emergency.uw.edu" title="<%= title %>">More info</a></p></div></div>',
      initialize: function (e) {
        _.bindAll(this, "render", "hide"),
          (this.options = _.extend({}, e)),
          this.model.on("sync", this.render);
      },
      render: function () {
        this.model.get("title") &&
          ($(this.options.after).after(
            _.template(this.template)(this.model.toJSON())
          ),
          this.setElement($(this.alert)));
      },
      hide: function () {
        this.$el.remove();
      },
    })),
    (UW.Alert.Model = Backbone.Model.extend({
      alerts: ["red-alert-urgent", "orange-alert", "steel-alert-fyis"],
      data: {
        c: "?",
        test: !0,
        number: 1,
        type: "post",
        status: "publish",
        dataType: "json",
      },
      url: "https://public-api.wordpress.com/rest/v1/sites/uwemergency.wordpress.com/posts/",
      initialize: function () {
        this.fetch({ data: this.data });
      },
      parse: function (e) {
        var t = _.first(e.posts);
        if (
          (_.extend(t.categories, {
            alert: { slug: window.location.hash.replace("#", "") },
          }),
          _.intersection(_.pluck(t.categories, "slug"), this.alerts).length ||
            -1 !== t.categories.alert.slug.indexOf("uwalert"))
        )
          return t;
      },
    })),
    (UW.SearchToggle = Backbone.View.extend({
      el: "button.uw-search",
      events: { click: "toggleSearchBar" },
      settings: { isOpen: !1 },
      initialize: function () {},
      toggleSearchBar: function () {
        return (
          (this.settings.isOpen = !this.settings.isOpen),
          this.trigger("open"),
          UW.$body.toggleClass("search-open"),
          this.settings.isOpen
            ? (this.$el.attr("aria-label", "close search area"),
              this.$el.attr("aria-expanded", "true"))
            : (this.$el.attr("aria-label", "open search area"),
              this.$el.attr("aria-expanded", "false")),
          !1
        );
      },
    })),
    (UW.Search = Backbone.View.extend({
      searchFeatures: { uw: "uw", site: "site" },
      searchbar:
        '<div class="container no-height" role="search"><div class="center-block uw-search-wrapper"><form class="uw-search" action="<%= UW.baseUrl %>"><div class="search-form-wrapper"><label class="screen-reader" for="uw-search-bar">Search UW</label><input id="uw-search-bar" type="search" name="s" value="" autocomplete="off" placeholder="Search" /></div><select id="mobile-search-select" class="visible-xs" aria-label="Search scope"><option value="uw" selected>All the UW</option><option value="site">Current site</option></select><input type="submit" value="search" class="search" tabindex="0"/><fieldset style="margin: 0; padding: 0; border: 1px; solid #ffffff;"><legend id="uw-search-label">Search scope</legend><div id="search-labels" class="labels hidden-xs"><label class="radio"><input class="radiobtn" type="radio" name="search" value="uw" data-toggle="radio" checked />All the UW</label><label class="radio"><input class="radiobtn" type="radio" name="search" value="site" data-toggle="radio" />Current site</label></form></div></fieldset></div></div>',
      defaults: {},
      events: {
        "click label.radio": "toggleSearchFeature",
        "change select": "toggleSearchFeature",
        "click .search": "submitForm",
        "submit form": "submitSearch",
        keydown: "handleKeyDown",
        "focus input": "skipToContentIfHidden",
      },
      initialize: function (e) {
        (this.settings = _.extend({}, this.defaults, this.$el.data(), e)),
          this.render(),
          (this.toggle = new UW.SearchToggle()),
          this.toggle.on("open", this.toggleBlur, this),
          (this.searchFeature = this.$el.find(":radio:checked").val());
      },
      render: function () {
        this.$el.html(_.template(this.searchbar)(this.settings));
      },
      toggleBlur: function () {
        this.toggle.settings.isOpen
          ? (this.$el.find("#uw-search-bar").focus(),
            this.$el.attr("aria-hidden", "false").attr("role", "search"))
          : this.$el.attr("aria-hidden", "true").removeAttr("role");
      },
      handleKeyDown: function (e) {
        switch (e.keyCode) {
          case UW.KEYCODES.TAB:
            return (
              $(e.target)[0] != $("input.search")[0] ||
                $(e)[0].shiftKey ||
                $("#search-labels").addClass("focused"),
              $(e.target)[0] != $("input.search")[0] &&
                $("#search-labels").hasClass("focused") &&
                $("#search-labels").removeClass("focused"),
              !(
                $(e.target)[0] == $("input.radiobtn")[0] && !$(e)[0].shiftKey
              ) || (this.toggle.$el.focus(), !1)
            );
          case UW.KEYCODES.ESC:
            return (
              e.stopPropagation(),
              this.toggle.toggleSearchBar(),
              this.toggle.$el.focus(),
              !1
            );
          default:
            return !0;
        }
      },
      toggleSearchFeature: function (e) {
        var t = "";
        (t =
          "none" == $("#mobile-search-select.visible-xs").css("display")
            ? $(e.currentTarget).find("input").val()
            : $(e.currentTarget).val()),
          (this.searchFeature = t);
      },
      skipToContentIfHidden: function () {
        this.toggle.settings.isOpen || $("#main-content").focus();
      },
      submitSearch: function (e) {
        switch (
          (this.$el.find("input.radiobtn").attr("disabled", "disabled"),
          this.searchFeature)
        ) {
          case this.searchFeatures.uw:
            return (
              this.$el.find("#uw-search-bar").attr("name", "q"),
              this.$el
                .find("form")
                .attr(
                  "action",
                  Backbone.history.location.protocol + "//uw.edu/search/"
                ),
              !0
            );
          case this.searchFeatures.site:
            return !0;
          default:
            return !1;
        }
      },
      submitForm: function () {
        return this.$el.find("form").submit(), !1;
      },
    })),
    (UW.QuickLinks = Backbone.View.extend({
      container: "#uw-container",
      events: {
        click: "animate",
        touchstart: "animate",
        keyup: "animate",
        blur: "loop",
      },
      initialize: function (e) {
        _.bindAll(
          this,
          "inner_keydown",
          "render",
          "animate",
          "accessible",
          "loop",
          "transitionEnd"
        ),
          this.render();
      },
      render: function () {
        (this.quicklinks = $("#quicklinks")),
          (this.$container = $(this.container)),
          this.$el
            .attr("aria-controls", "quicklinks")
            .attr("aria-owns", "quicklinks"),
          UW.$body.on("keydown", "#quicklinks a:first", this.inner_keydown),
          UW.$body.on("keyup", "#quicklinks a", this.animate),
          this.quicklinks.on(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            this.transitionEnd
          );
      },
      transitionEnd: function (e) {
        this.open && e.target == this.quicklinks[0] && this.accessible();
      },
      inner_keydown: function (e) {
        if (9 == e.keyCode && e.shiftKey) return this.$el.focus(), !1;
      },
      animate: function (e) {
        if (
          (e.preventDefault(),
          e.keyCode &&
            27 != e.keyCode &&
            ((e.keyCode && 13 != e.keyCode) || (e.keyCode && 32 != e.keyCode)))
        )
          return !1;
        this.$container.toggleClass("open"),
          this.quicklinks.toggleClass("open"),
          (this.open = this.quicklinks.hasClass("open")),
          this.open || this.accessible();
      },
      accessible: function (e) {
        this.$el.attr("aria-expanded", this.open),
          this.quicklinks.attr("aria-hidden", (!this.open).toString()),
          this.open
            ? (this.$el.attr("aria-label", "Close quick links"),
              this.quicklinks.find("a").attr("tabindex", 0).first().focus(),
              $("#uw-container-inner").attr("aria-hidden", !0),
              $(".screen-reader-shortcut").attr("aria-hidden", !0))
            : (this.$el.attr("aria-label", "Open quick links"),
              this.quicklinks.find("a").attr("tabindex", -1),
              this.$el.focus(),
              $("#uw-container-inner").attr("aria-hidden", !1),
              $(".screen-reader-shortcut").attr("aria-hidden", !1));
      },
      loop: function (e) {
        this.open && this.quicklinks.find("li a").first().focus();
      },
    })),
    (UW.Slideshow = Backbone.View.extend({
      el: ".uw-slideshow",
      current: 0,
      controls:
        '<a tabIndex="-1" href="#" class="<%= classname %> next"></a><a tabIndex="-1" href="#" class="<%= classname %> previous"></a>',
      animation: {},
      settings: {
        slideclass: ".slide",
        controlclasses: {
          base: "uw-slideshow-controls",
          lastNext: "last-next",
          lastPrev: "last-previous",
        },
        animationOptions: { easing: "easeOutQuint", duration: 1200, queue: !1 },
      },
      events: {
        "click .previous": "animateIn",
        "click .next": "animateOut",
        "click .slider-dots li": "dotsAnimate",
        "click .fullscreen": "goFullscreen",
      },
      initialize: function (e) {
        (this.options = _.extend({}, this.settings, e)),
          _.bindAll(
            this,
            "animateIn",
            "animateOut",
            "addControls",
            "zIndex",
            "moveDots",
            "goFullscreen"
          ),
          (this.controls = _.template(this.controls)({
            classname: this.options.controlclasses.base,
          })),
          (this.numberOfSlides = this.$el.find(".slide").length - 1),
          (this.photoSlider = this.$el.hasClass("photo-slider")),
          this.organizeSlideshow(),
          this.addControls(),
          this.photoSlideshow(),
          this.mobileSizing(),
          this.focusControls(this);
      },
      organizeSlideshow: function () {
        _.each(this.$(".slide").get(), this.zIndex);
      },
      mobileSizing: function () {
        function e() {
          var e = $(".uw-slideshow"),
            t = $(".uw-slideshow img:first").height() + 50,
            s = e.find(".slider-dots");
          (windowsize = $(window).width()),
            windowsize < 768 &&
              (e.css("height", t), s.css("marginTop", t - 40));
        }
        this.photoSlider && (e(), $(window).resize(e));
      },
      photoSlideshow: function () {
        if (this.photoSlider) {
          for (
            $("." + this.el.classList[2]).append(
              '<ul class="slider-dots slider-dots-' +
                this.el.classList[2] +
                '"></ul>',
              '<a tabIndex="-1" class="fullscreen" href="#">Fullscreen</a>'
            ),
              i = 0;
            i < this.numberOfSlides + 1;
            i++
          )
            $(".slider-dots-" + this.el.classList[2]).append("<li></li>");
          $(
            ".slider-dots-" + this.el.classList[2] + " li:nth-child(1)"
          ).addClass("select-dot");
        }
      },
      goFullscreen: function (e) {
        $("body").toggleClass("activeFullscreen"), event.preventDefault();
      },
      moveDots: function () {
        $(".slider-dots-" + this.el.classList[2] + " li").removeClass(
          "select-dot"
        ),
          $(
            ".slider-dots-" +
              this.el.classList[2] +
              " li:nth-child(" +
              (this.current + 1) +
              ")"
          ).addClass("select-dot");
      },
      dotsAnimate: function (e) {
        var t = $(".slider-dots-" + this.el.classList[2] + " li").index(
          e.target
        );
        if ((this.moveDots(), t > this.current))
          for (i = this.current + 1; i <= t; i++) this.animateOut();
        else if (t < this.current) {
          var s = this.current - 1;
          for (i = t; i <= s; i++) this.animateIn();
        }
      },
      addControls: function () {
        0 < this.numberOfSlides &&
          (this.$el.append(this.controls),
          this.$el.find(this.options.controlclass),
          this.$el.addClass(this.options.controlclasses.lastPrev));
      },
      animateIn: function (e) {
        return (
          (this.direction = "in"),
          (this.current = this.current < 0 ? -1 : this.current - 1),
          (this.animation.textLeft = 0),
          (this.animation.imageLeft = 0),
          this.animate(),
          (this.current = this.current < 0 ? 0 : this.current),
          this.toggleClasses(),
          this.moveDots(),
          !1
        );
      },
      animateOut: function (e) {
        return (
          (this.direction = "out"),
          (this.animation.textLeft = "-200%"),
          (this.animation.imageLeft = "100%"),
          this.animate(),
          (this.current =
            this.current === this.numberOfSlides
              ? this.numberOfSlides
              : this.current + 1),
          this.toggleClasses(),
          this.moveDots(),
          !1
        );
      },
      animate: function () {
        this.nextSlideExists() &&
          this.$(this.options.slideclass)
            .eq(this.current)
            .animate(
              { left: this.animation.imageLeft },
              this.options.animationOptions
            )
            .find("div")
            .animate(
              { left: this.animation.textLeft },
              this.options.animationOptions
            );
      },
      toggleClasses: function () {
        if (
          (this.$el.removeClass(
            this.options.controlclasses.lastNext +
              " " +
              this.options.controlclasses.lastPrev
          ),
          0 === this.current || this.current === this.numberOfSlides)
        )
          return this.$el.addClass(
            "out" === this.direction
              ? this.options.controlclasses.lastNext
              : this.options.controlclasses.lastPrev
          );
      },
      nextSlideExists: function () {
        return !(
          (this.current < 0 && "in" === this.direction) ||
          (this.current === this.numberOfSlides && "out" === this.direction)
        );
      },
      zIndex: function (e) {
        var t = this.$(e);
        t.css({ zIndex: -1 * t.index() + this.numberOfSlides });
      },
      focusControls: function (i) {
        var n = $(".uw-slideshow");
        n.keydown(function (e) {
          if (9 == e.keyCode) return !0;
          if (39 == e.keyCode) return i.animateOut(e), !1;
          if (37 == e.keyCode) return i.animateIn(e), !1;
          if (13 == e.keyCode) {
            var t = (function (e) {
              for (
                var t,
                  s = (function (e) {
                    for (
                      var t,
                        s = e.context.activeElement.children,
                        i = [],
                        n = 0;
                      n < s.length;
                      n++
                    )
                      0 === (t = s[n]).className.indexOf("slide") && i.push(t);
                    return i;
                  })(e),
                  i = 0;
                i < s.length;
                i++
              )
                if ("100%" != (t = s[i]).style.left) return t;
              return !1;
            })(n);
            if (t) {
              var s = (function (e) {
                return e.children[0].href;
              })(t);
              window.location.href = s;
            }
          }
          return !1;
        });
      },
    })),
    (UW.Vimeo = Backbone.View.extend({
      el: ".uw-vimeo",
      events: { "click .preview": "loadVideo" },
      templates: {
        video:
          '<iframe id="test" src="https://player.vimeo.com/video/<%= video %>/?<%= $.param( defaults ) %>" width=<%= width %> height=<%= height %> title="<%= video.title %>" style=border:0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        playlist:
          '<div class="playlist"><% _.each( videos, function( video ) { %><div class="preview" data-id=<%= video.id %>><img src="<%= video.thumbnail_small %>" height=75 width=100 title="<%= video.title %>"/></div><% }) %></div>',
      },
      settings: { width: 580, height: 350 },
      defaults: { api: 1, title: 0, portrait: 0, byline: 0, color: "4B2E82" },
      initialize: function (e) {
        _.bindAll(this, "single", "playlist", "loadVideo"),
          (this.options = _.extend({}, this.settings, this.$el.data(), e)),
          (this.options.defaults = this.defaults),
          this.$el.width(this.options.width),
          this.options.video &&
            ((this.video = new UW.Vimeo.Video(this.options.video)),
            this.video.on("sync", this.single)),
          this.options.username &&
            ((this.videos = new UW.Vimeo.Playlist({
              username: this.options.username,
            })),
            this.videos.on("sync", this.playlist));
      },
      single: function () {
        (this.player = _.template(this.templates.video)(this.options)),
          this.$el.html(this.player);
      },
      playlist: function () {
        _.extend(this.options, { video: this.videos.first().get("id") }),
          (this.player = _.template(this.templates.video)(this.options)),
          (this.videoList = _.template(this.templates.playlist)({
            videos: this.videos.toJSON(),
          })),
          this.$el.html(this.player),
          this.$el.append(this.videoList);
      },
      loadVideo: function (e) {
        var t = this.$el.find("iframe"),
          s = _.last(t.attr("src").split("?")),
          i =
            "https://player.vimeo.com/video/" +
            $(e.currentTarget).data().id +
            "/?" +
            s;
        t.attr("src", i);
      },
    })),
    (UW.Vimeo.Video = Backbone.Model.extend({
      url: function () {
        return "https://vimeo.com/api/v2/video/" + this.video + ".json";
      },
      parse: function (e) {
        return _.first(e);
      },
      initialize: function (e) {
        (this.video = e), this.fetch();
      },
    })),
    (UW.Vimeo.Playlist = Backbone.Collection.extend({
      url: function () {
        return "https://vimeo.com/api/v2/" + this.username + "/videos.json";
      },
      initialize: function (e) {
        (this.username = e.username), this.fetch();
      },
      parse: function (e) {
        return _.where(e, { embed_privacy: "anywhere" });
      },
    })),
    (UW.Radio = Backbone.View.extend({
      states: { checked: "checked", disabled: "disabled" },
      events: { "click input": "toggle" },
      template:
        '<span class="icons"><span class="first-icon fui-radio-unchecked"></span><span class="second-icon fui-radio-checked"></span></span>',
      initialize: function (e) {
        _.bindAll(this, "toggle", "getGroup", "toggleCheckBox"),
          (this.settings = _.extend({}, this.defaults, this.$el.data(), e)),
          this.$el.after(this.template),
          (this.$input = this.$el),
          (this.name = this.$el.attr("name")),
          this.setElement(this.$el.closest("label")),
          this.setState();
      },
      setState: function () {
        this.$input.prop(this.states.disabled) &&
          this.$el.addClass(this.states.disabled),
          this.$input.prop(this.states.checked) &&
            this.$el.addClass(this.states.checked);
      },
      getGroup: function () {
        return "radio" === this.$input.attr("type")
          ? _.where(UW.radio, { name: this.name })
          : "checkbox" === this.$input.attr("type")
          ? _.where(UW.checkbox, { name: this.name })
          : void 0;
      },
      toggle: function (e) {
        _.each(this.getGroup(), this.toggleCheckBox);
      },
      toggleCheckBox: function (e) {
        var t = e.$input.prop(this.states.checked),
          s = e.$input.prop(this.states.disabled);
        !s &&
          e.$el.removeClass(this.states.checked) &&
          e.$el.removeAttr(this.states.checked).trigger("change"),
          s ||
            (t &&
              e.$el.addClass(this.states.checked) &&
              e.$el.trigger($.Event("toggle")),
            t !== e.$el.prop(this.states.checked) && e.$el.trigger("change"));
      },
    })),
    (UW.Dropdowns = Backbone.View.extend({
      chunkSize: 8,
      menuWidth: 1170,
      menuBlock: '<div class="menu-block"></div>',
      menuBlockWidth: 230,
      index: { topmenu: 0, submenu: 0 },
      elements: { toplevel: ".dawgdrops-item", document: document },
      keys: {
        enter: 13,
        esc: 27,
        tab: 9,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
      },
      events: {
        "keydown .dawgdrops-menu a": "moveFocusInSubMenu",
        "keydown .dawgdrops-item > button": "toggleSubMenu",
        "click .dawgdrops-item > button": "clickSubMenu",
        "focus .dawgdrops-item > button": "positionSubmenu",
        "mouseenter .dawgdrops-item": "positionSubmenu",
        "mouseleave .dawgdrops-item": "removeAria",
        "keydown .dawgdrops-item": "currentDawg",
      },
      initialize: function (e) {
        _.bindAll(
          this,
          "render",
          "chunk",
          "wrap",
          "wrapChildren",
          "positionSubmenu",
          "toggleSubMenu"
        ),
          (this.settings = _.extend({}, this.defaults, this.$el.data(), e)),
          (this.$topLevelNav = this.$el.find(this.elements.toplevel)),
          this.render(),
          $(document).bind("keydown", this.keyAction);
      },
      render: function () {
        _.each(this.$topLevelNav, this.wrapChildren);
      },
      chunk: function (e, t) {
        return Math.floor(t / this.chunkSize);
      },
      wrapChildren: function (e) {
        _.each(_.groupBy($(e).find("li"), this.chunk), this.wrap);
      },
      wrap: function (e) {
        $(e).wrapAll(this.menuBlock);
      },
      positionSubmenu: function (e) {
        $(".dawgdrops-item.current").trigger("mouseleave");
        var t = $(e.currentTarget),
          s = t.position(),
          i = t.find(".menu-block");
        this.menuBlockWidth * i.length + s.left > UW.$window.width()
          ? (t.outerWidth(), s.left, i.length, this.menuBlockWidth)
          : s.left;
        t.find("a").siblings("ul").removeAttr("style"),
          t.find("button").attr("aria-expanded", "true"),
          t.addClass("current");
      },
      removeAria: function (e) {
        var t = $(e.currentTarget);
        t.find("button").attr("aria-expanded", "false"),
          t.removeClass("current");
      },
      currentDawg: function (e) {
        $(e.currentTarget).addClass("current");
      },
      clickSubMenu: function (e) {
        (this.currentSubMenu = $(e.currentTarget).siblings("ul")),
          (this.currentSubMenuAnchors = this.currentSubMenu.find("a")),
          this.currentSubMenu.show(),
          this.currentSubMenuAnchors.eq(0).focus(),
          $(e.currentTarget).attr("aria-expanded", "true"),
          this.currentSubMenu.css("display", "flex");
      },
      toggleSubMenu: function (e) {
        switch (e.keyCode) {
          case this.keys.spacebar:
          case this.keys.enter:
            return (
              $(".dawgdrops-item").trigger("mouseleave"),
              (this.currentSubMenu = $(e.currentTarget).siblings("ul")),
              (this.currentSubMenuAnchors = this.currentSubMenu.find("a")),
              this.currentSubMenu.show().find("a").eq(0).focus(),
              $(e.currentTarget).attr("aria-expanded", "true"),
              this.currentSubMenu.css("display", "flex"),
              !1
            );
          case this.keys.left:
            return (
              $(e.currentTarget).parent().prev().children("a").first().focus(),
              !1
            );
          case this.keys.right:
            return (
              $(e.currentTarget).parent().next().children("a").first().focus(),
              !1
            );
        }
      },
      moveFocusInSubMenu: function (e) {
        switch (e.keyCode) {
          case this.keys.tab:
            this.currentSubMenu &&
              (this.currentSubMenu.hide(),
              (this.currentSubMenu = null),
              (this.index.submenu = 0));
            break;
          case this.keys.down:
            return (
              (this.index.submenu =
                this.index.submenu === this.currentSubMenuAnchors.length - 1
                  ? 0
                  : this.index.submenu + 1),
              this.currentSubMenuAnchors.eq(this.index.submenu).focus(),
              !1
            );
          case this.keys.up:
            return (
              (this.index.submenu =
                0 === this.index.submenu
                  ? this.currentSubMenuAnchors.length - 1
                  : this.index.submenu - 1),
              this.currentSubMenuAnchors.eq(this.index.submenu).focus(),
              !1
            );
          case this.keys.left:
            return (
              this.currentSubMenu
                .hide()
                .parent()
                .prev()
                .children("button")
                .first()
                .focus(),
              (this.index.submenu = 0),
              this.currentSubMenu
                .parent()
                .children("button")
                .attr("aria-expanded", "false"),
              !1
            );
          case this.keys.right:
            return (
              this.currentSubMenu
                .hide()
                .parent()
                .next()
                .children("button")
                .first()
                .focus(),
              (this.index.submenu = 0),
              this.currentSubMenu
                .parent()
                .children("button")
                .attr("aria-expanded", "false"),
              !1
            );
          case this.keys.spacebar:
          case this.keys.enter:
            return (window.location.href = $(e.currentTarget).attr("href")), !1;
          case this.keys.esc:
            return (
              this.currentSubMenu.hide(),
              (this.index.submenu = 0),
              this.currentSubMenu
                .parent()
                .children("button")
                .attr("aria-expanded", "false")
                .focus(),
              !1
            );
          default:
            var t = String.fromCharCode(e.which),
              s = !1;
            return (
              this.currentSubMenuAnchors
                .filter(function () {
                  return (s = this.innerHTML.charAt(0) === t);
                })
                .first()
                .focus(),
              !s
            );
        }
      },
      keyAction: function (e) {
        switch (e.keyCode) {
          case 27:
            return (
              (this.currentSubMenu = $(".dawgdrops-item.current ul")),
              (this.currentButton = $(".dawgdrops-item.current button")),
              this.currentSubMenu.hide(),
              this.currentButton.attr("aria-expanded", "false").focus(),
              !1
            );
        }
      },
    })),
    (UW.MobileMenu = Backbone.View.extend({
      events: { "click button": "toggle", "click a": "openmenu" },
      initialize: function (e) {
        _.bindAll(this, "toggle", "reset_li", "openmenu", "cloneMenuAnchors"),
          (this.settings = _.extend({}, this.defaults, this.$el.data(), e)),
          (this.$mobilemenu_ul = this.$el.find("ul.uw-mobile-menu"));
      },
      cloneMenuAnchors: _.once(function () {
        this.$el.find(".menu-item-has-children > a").each(function () {
          var e = $(this),
            t = e.next("ul");
          e
            .next("ul")
            .first()
            .prepend("<li>" + e[0].outerHTML + "</li>"),
            e.attr("aria-expanded", !1),
            t.attr("aria-hidden", !0);
        });
      }),
      openmenu: function (e) {
        var t = $(e.target),
          s = t.next();
        0 < s.length &&
          (e.preventDefault(),
          s.attr("aria-hidden", function (e, t) {
            return "true" === t ? "false" : "true";
          }),
          t.attr("aria-expanded", function (e, t) {
            return "true" === t ? "false" : "true";
          }),
          t.parent().toggleClass("active-menu"));
      },
      toggle: function (e) {
        this.$mobilemenu_ul.toggle(),
          this.$el.addClass("active_nav"),
          this.cloneMenuAnchors();
      },
      reset_li: function () {
        this.$mobilemenu.find("li").removeAttr("style");
      },
    })),
    (UW.ToggleSidebarMenu = Backbone.View.extend({
      events: { "click button": "toggleContent" },
      initialize: function () {
        console.log(this.el), this.toggleContent();
      },
      toggleContent: function (e) {
        !0 === this.showmeState ? this.hideLinks() : this.showLinks();
      },
      hideLinks: function () {
        this.$el.find("#mobile-sidebar-links").removeClass("visible-xs"),
          this.$el.find("#mobile-sidebar-menu").removeClass("open"),
          this.$el.find("#mobile-sidebar-title").html("Open Menu"),
          (this.showmeState = !1);
      },
      showLinks: function () {
        this.$el.find("#mobile-sidebar-links").addClass("visible-xs"),
          this.$el.find("#mobile-sidebar-menu").addClass("open"),
          this.$el.find("#mobile-sidebar-title").html("Close Menu"),
          (this.showmeState = !0);
      },
    })),
    (UW.Accordion = Backbone.View.extend({
      el: ".uw-accordion",
      events: { "click h3": "animate" },
      initialize: function () {
        _.bindAll(this, "animate"),
          this.$el.find("h3").addClass("inactive"),
          this.$el.find("div").addClass("inactive");
      },
      animate: function (e) {
        var t = $(e.target);
        if (t.hasClass("inactive")) {
          this.$el.find("h3.active").removeClass("active").addClass("inactive"),
            this.$el
              .find("div.active")
              .animate({ height: "0px" }, 500, function () {
                var e = $(this);
                e.removeClass("active").addClass("inactive"),
                  e.removeAttr("style");
              }),
            t.removeClass("inactive").addClass("active");
          var s = t.next("div.inactive");
          s.removeClass("inactive").addClass("active");
          var i = s.outerHeight(!0);
          s.removeClass("active"),
            s.animate({ height: i }, 500, function () {
              s.addClass("active"), s.removeAttr("style");
            });
        } else
          t.removeClass("active").addClass("inactive"),
            t.next("div.active").animate({ height: "0px" }, 500, function () {
              var e = $(this);
              e.removeClass("active").addClass("inactive"),
                e.removeAttr("style");
            });
      },
    })),
    (UW.Select = Backbone.View.extend({
      el: ".uw-select",
      submit: !1,
      current: 0,
      keyCodes: { enter: 13, spacebar: 32, tab: 9, up: 38, down: 40 },
      events: {
        "keydown li": "openMenuOnKeydown",
        "click li.active": "open",
        "click li.inactive": "close",
        "click .uw-select-arrow": "open",
        "click .uw-select-arrow.open": "closeWithoutAnimating",
        click: "closeWithoutAnimating",
      },
      template:
        '<div class="uw-select-mask"><ul class="uw-select"><% _.each( lis, function( title, value ) { %><li data-value="<%= value %>"><a href="#"><%= title %></a></li><% }) %></ul><span class="uw-select-arrow"></span></div>',
      initialize: function (e) {
        _.bindAll(
          this,
          "open",
          "close",
          "addOpenClass",
          "removeOpenClass",
          "closeWithoutAnimating"
        ),
          (this.options = _.extend({}, this.settings, this.$el.data(), e)),
          this.parseSelect(),
          this.render(),
          $("body").click(this.closeWithoutAnimating);
      },
      open: function (e) {
        return (
          this.isOpen() ? this.closeWithoutAnimating() : this.addOpenClass(), !1
        );
      },
      close: function (e) {
        this.$target = $(e.currentTarget);
        var t = this.$target.index();
        return (
          this.isDisabled(t) ||
            ((this.clicked = !0),
            (this.current = t),
            this.animate(),
            this.toggleLIClasses()),
          !1
        );
      },
      isDisabled: function (e) {
        var t = this.$el.find("li").eq(e).data().value;
        return this.$select.find('option[value="' + t + '"]').prop("disabled");
      },
      closeWithoutAnimating: function () {
        this.$el.removeClass("open"), this.$el.children().removeClass("open");
      },
      animate: function () {
        (this.scroll =
          this.$target.offset().top - this.$el.find("li").first().offset().top),
          this.$el
            .children("ul")
            .animate(
              { scrollTop: this.scroll },
              { queue: !1, complete: this.removeOpenClass }
            );
      },
      cloneSelectEvents: function () {
        var e = this.$el.find("li").eq(this.current).data().value;
        this.$select.val(e),
          this.$select.find('option[value="' + e + '"]').prop("selected", !0),
          this.submit && this.$select.parent("form").submit(),
          this.trigger_link && (window.location = e),
          this.$select.hasClass("uw-select-wp") &&
            (window.location = UW.baseUrl + "?cat=" + e);
      },
      render: function () {
        (this.html = _.template(this.template)({ lis: this.LIs })),
          this.$el.hide().after(this.html),
          (this.$select = this.$el),
          this.setElement(this.$el.next()),
          this.toggleLIClasses(),
          this.$el.find("li").length < 7 &&
            this.$el.children("ul").height("auto");
      },
      parseSelect: function () {
        var e = _.map(this.$el.find("option"), this.getValue),
          t = _.map(this.$el.find("option"), this.getText);
        this.$el.data("submit") && (this.submit = !0),
          "links" == this.$el.data("type") && (this.trigger_link = !0),
          (this.current = this.$el.find(":selected").index()),
          (this.LIs = _.object(e, t));
      },
      toggleLIClasses: function () {
        this.$el.find("li").removeClass().addClass("inactive"),
          this.$el.find("li").eq(this.current).removeClass().addClass("active");
      },
      addOpenClass: function () {
        this.$el.addClass("open"),
          this.$el.children().addClass("open"),
          this.$el.children("ul").scrollTop(this.scroll);
      },
      removeOpenClass: function (e) {
        this.cloneSelectEvents(),
          (this.clicked || e) &&
            (this.$el.removeClass("open"),
            this.$el.children().removeClass("open"),
            (this.clicked = !1));
      },
      getText: function (e) {
        return $(e).text();
      },
      getValue: function (e) {
        return e.value;
      },
      openMenuOnKeydown: function (e) {
        if (e.keyCode == this.keyCodes.tab && !this.isOpen()) return !0;
        if (_.contains(this.keyCodes, e.keyCode)) {
          switch ((this.isOpen() || this.open(), e.keyCode)) {
            case this.keyCodes.down:
              this.down();
              break;
            case this.keyCodes.up:
              this.up();
              break;
            case this.keyCodes.enter:
            case this.keyCodes.spacebar:
              this.current != this.$select.val() &&
                (this.removeOpenClass(!0),
                this.toggleLIClasses(),
                this.cloneSelectEvents());
          }
          return !1;
        }
      },
      up: function () {
        this.atEdge("up") || ((this.current -= 1), this.move());
      },
      down: function () {
        this.atEdge("down") || ((this.current += 1), this.move());
      },
      move: function () {
        (this.$target = this.$el.find("li").eq(this.current)),
          this.$target.find("a").focus(),
          this.animate();
      },
      atEdge: function (e) {
        return (
          (0 === this.current && "up" === e) ||
          (this.current === this.$el.find("li").length - 1 && "down" === e)
        );
      },
      isOpen: function () {
        return this.$el.hasClass("open");
      },
    })),
    (UW.Image = Backbone.View.extend({
      RATIO: 0.8,
      template:
        '<div class="uw-overlay"><div></div><div class="wrapper" style="width:<%= width %>px; margin-top:-<%= height/2 %>px; margin-left:-<%= width/2 %>px;"><span class="close"> Close</span><img src="<%= src %>" alt="<%=alt %>" style="width:100%;" /><p><%= caption %></p></div></div>',
      templateVideo:
        '<div class="uw-overlay"><div></div><div class="wrapper" style="width:<%= width %>px; margin-top:-<%= height/2 %>px; margin-left:-<%= width/2 %>px;"><span class="close"> Close</span><iframe width="<%= width %>" height="<%= height %>" src="<%= src %>" style="border:0" allowfullscreen="" title="<%= caption %>"></iframe><p><%= caption %></p><p><%= credit %></p></div></div>',
      events: {
        click: function (e) {
          if (((this.attrs = this.getAttributes(e)), this.attrs.src))
            return this.fetchImage(), !1;
        },
      },
      initialize: function () {
        _.bindAll(this, "fetchImage", "overlay", "render");
      },
      fetchImage: function (e) {
        return (
          $('<img src="' + this.attrs.src + '"/>').imagesLoaded(this.overlay),
          !1
        );
      },
      overlay: function (e) {
        var t,
          s = -1 < this.attrs.rel.indexOf("uw-lightbox-video");
        if (s || !e.hasAnyBroken)
          return (
            (this.image = _.first(e.images)),
            (t = this.image.img.width / this.image.img.height),
            (this.attrs.height = this.image.img.height),
            (this.attrs.width = this.image.img.width),
            s &&
              ((t = 560 / 315),
              (this.attrs.height = 630),
              (this.attrs.width = 1120)),
            this.attrs.height > this.RATIO * UW.$window.height() &&
              ((this.attrs.height = this.RATIO * UW.$window.height()),
              (this.attrs.width = t * this.attrs.height)),
            this.attrs.width > this.RATIO * UW.$window.width() &&
              ((this.attrs.width = this.RATIO * UW.$window.width()),
              (this.attrs.height = this.attrs.width / t)),
            this.render(),
            !1
          );
        this.attrs.src && (window.location = this.attrs.src);
      },
      render: function () {
        return (
          UW.$body.one("click", this.remove),
          "uw-lightbox-video" == this.attrs.rel
            ? UW.$body.append(_.template(this.templateVideo)(this.attrs))
            : UW.$body.append(_.template(this.template)(this.attrs))
        );
      },
      remove: function () {
        return UW.$body.find(".uw-overlay").remove(), !1;
      },
      getAttributes: function (e) {
        var t = $(e.currentTarget),
          s = t.parent("a").siblings(".wp-caption-text").html();
        if (!s) {
          var i = t.parent("a").parent(".gallery-icon");
          i && (s = i.siblings(".wp-caption-text").text());
        }
        return {
          src: t.parent("a").attr("href") ? t.parent("a").attr("href") : "",
          alt: t.attr("alt"),
          rel: t.parent("a").attr("rel") ? t.parent("a").attr("rel") : "",
          caption: s,
        };
      },
    })),
    (UW.Player = Backbone.View.extend({
      defaults: {},
      initialize: function (e) {},
    })),
    (UW.Social = Backbone.View.extend({
      el: ".uw-social",
      template:
        '<ul><% if ( _.isString( facebook ) ) { %> <li><a class="uw-social-facebook" href="http://www.facebook.com/sharer.php?u=<%= url %>">Facebook</a></li> <% } %><% if ( _.isString( twitter ) ) { %> <li><a class="uw-social-twitter" href="http://twitter.com/?status=<%= url %>">Twitter</a></li> <% } %><% if ( _.isString( reddit ) ) { %> <li><a class="uw-social-reddit" href="http://reddit.com/submit?url=<%= url %>">Reddit</a></li> <% } %><% if ( _.isString( digg ) ) { %> <li><a class="uw-social-reddit" href="http://digg.com/submit?url=<%= url %>">Digg</a></li> <% } %><% if ( _.isString( stumbleupon ) ) { %> <li><a class="uw-social-reddit" href="http://www.stumbleupon.com/submit?url=<%= url %>">StumbleUpon</a></li> <% } %></ul>',
      settings: {
        facebook: !1,
        twitter: !1,
        reddit: !1,
        digg: !1,
        stumbleupon: !1,
        url: document.URL,
      },
      initialize: function (e) {
        (this.options = _.extend({}, this.settings, this.$el.data(), e)),
          (this.buttons = _.template(this.template)(this.options)),
          this.$el.html(this.buttons);
      },
    })),
    jQuery(document).ready(function (e) {
      e("a.uw-custom-link").addClass("disable_a_href");
    });
})(jQuery);
