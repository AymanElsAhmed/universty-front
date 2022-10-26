(UW = UW || { elements: {} }),
  _.extend(UW.elements, {
    homepage_slider: ".uw-homepage-slider-container",
    facts: ".uw-charts",
  }),
  (function () {
    function a(a) {
      b(a),
        a(UW.elements.homepage_slider).find(".uw-homepage-slider").length > 1 &&
          (UW.homepage_slider = _.map(
            a(UW.elements.homepage_slider),
            function (a) {
              return new UW.HomepageSlider({ el: a });
            }
          )),
        (UW.facts = _.map(a(UW.elements.facts), function (a) {
          return new UW.Facts({ el: a });
        }));
    }
    var b = UW.initialize;
    UW.initialize = a;
  })(),
  (UW = UW || {}),
  (UW.baseUrl =
    Backbone.history.location.protocol + "//www.washington.edu/home/"),
  (UW.sources = {
    quicklinks: UW.baseUrl + "wp-admin/admin-ajax.php?action=quicklinks",
    search: UW.baseUrl + "wp-admin/admin-ajax.php",
  }),
  (UW.HomepageSlider = Backbone.View.extend({
    slides: ".uw-homepage-slider",
    headline: ".next-headline",
    template:
      '<button class="next-headline slide-<%= slide %>" style="display:block;"><span>NEXT</span><%= title %></button>',
    events: {
      "click .next-headline": "nextSlide",
      "click #pause": "pauseVideo",
    },
    initialize: function (a) {
      _.bindAll(this, "render", "nextSlide", "changeNextArticle"),
        (this.count = this.$el.children(this.slides).length),
        this.prep_slides(),
        this.showNextHeadline(),
        this.changeNextArticle(!1);
    },
    prep_slides: function () {
      for (var a, b = $(this.slides), c = 0; c < b.length; c++)
        (a = b.eq(c)),
          a.find("a.uw-btn").attr("aria-describedby", a.find("h3").attr("id"));
      b.hide(), b.last().show();
    },
    nextSlide: function (a) {
      var b = this.$el.children(this.slides).last();
      b.fadeOut(),
        this.rotateSlides(b),
        this.$el.children(this.slides).last().fadeIn().find("a").focus(),
        $(window).width() > 767 &&
          $(".uw-homepage-slider-container video").each(function (a) {
            "none" != this.parentElement.style.display && this.play();
          });
    },
    rotateSlides: function (a) {
      a.insertBefore(a.siblings(this.slides).first()),
        this.changeNextArticle(!0);
    },
    showNextHeadline: function () {
      this.$el.find(this.headline).show();
    },
    changeNextArticle: function (a) {
      this.$el.find(this.headline).replaceWith(this.render),
        a && this.$el.find("button").focus();
    },
    pauseVideo: function () {
      var a = $("#bgVideo"),
        b = $("#pause");
      a.get(0).paused
        ? (a.get(0).play(), b.html("Pause moving background"))
        : (a.get(0).pause(), b.html("Play moving background")),
        this.$el.toggleClass("paused");
    },
    render: function () {
      var a = this.$el.children(this.slides).eq(this.count - 2);
      return _.template(this.template)({
        title: a.find("h3").text(),
        slide: a.data().id,
      });
    },
    testBrowser: function () {
      var a = navigator.userAgent.toLowerCase();
      if (-1 != a.indexOf("safari") && -1 == a.indexOf("chrome"));
    },
  })),
  (UW = UW || {}),
  (UW.Facts = Backbone.View.extend({
    ACTIVATE: "factive",
    el: ".people",
    charts: ".uw-charts",
    window: $(window),
    delay: 40,
    initialize: function () {
      _.bindAll(this, "inview", "render"),
        this.window.scroll(this.inview),
        (this.charts = $(this.charts)),
        (this.chartposition =
          this.charts.position().top + this.charts.height() / 4),
        (this.height = this.window.height());
    },
    render: _.once(function () {
      UW.$body.addClass(this.ACTIVATE);
    }),
    inview: _.throttle(function () {
      this.window.scrollTop() + this.height > this.chartposition &&
        this.render();
    }, 200),
  }));
