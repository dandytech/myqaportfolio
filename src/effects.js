// Scroll, reveal, typing and card animations. Runs once after App mounts.

// Do not wrap <App/> in React.StrictMode: this file attaches listeners without cleanup.

export default function initPortfolio() {
  (function () {
    var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

    var $ = function (s, c) {
      return (c || document).querySelector(s);
    };

    var $$ = function (s, c) {
      return [].slice.call((c || document).querySelectorAll(s));
    };

    function split(el, step) {
      var t = el.textContent.trim().split(/\s+/);

      el.setAttribute("aria-label", el.textContent.trim());

      el.innerHTML = t
        .map(function (w, i) {
          return (
            '<span class="sw" aria-hidden="true"><span style="transition-delay:' +
            i * step +
            'ms">' +
            w +
            "</span></span>"
          );
        })
        .join(" ");
    }

    $$("#contact h2, #work h2, #about-me h2").forEach(function (h) {
      split(h, 70);
    });

    /* barcodes without gradients */

    var W = [
      2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 2, 1, 3, 1, 1,
      4, 2, 1,
    ];

    $$("[data-bar]").forEach(function (b) {
      b.innerHTML = W.map(function (w) {
        return '<i style="width:' + w * 1.5 + 'px"></i>';
      }).join("");
    });

    /* marquee */

    var tools = [
      "Selenium",
      "Playwright",
      "Appium",
      "Postman",
      "Apache JMeter",
      "Jira",
      "Java",
      "SQL",
    ];

    var one = tools
      .map(function (t) {
        return "<span>" + t + "</span><em>&#10022;</em>";
      })
      .join("");

    $("#mq").innerHTML =
      "<span>" +
      one +
      "</span>" +
      '<span aria-hidden="true">' +
      one +
      "</span>";

    /* projects */

    var P = [
      [
        "Seamsuite products, web & mobile",
        "NSX, TymeFlick, CRX, FSX, CSX, e.t.c ",
        "https://seamsuite.com",
      ],
      [
        "Cowris apps, web and mobile",
        "CowrisPay, SendCowris, Kiza, Ajo by Cowris, e.t.c",
        "https://www.cowris.com",
      ],
      [
        "EZTRAK",
        "PILOT, FLOW, VAULT: Oil and gas turnaround software",
        "https://eztraksoftware.com",
      ],
      [
        "AllDriveSOS",
        "Road assistance app: web and mobile",
        "https://alldrivesos.com",
      ],
      [
        "Abijan Exchange",
        "Crypto trading platform",
        "https://abijanexchange.com",
      ],
      [
        "Kudumart, web & mobile",
        "Marketplace, web and mobile",
        "https://kudumart.com",
      ],
    ];

    function card(c, p) {
      return (
        '<article class="' +
        c +
        '">' +
        '<div class="frame">' +
        '<div class="ph" role="img" aria-label="' +
        p[0] +
        ' product preview">' +
        p[0] +
        "</div>" +
        "</div>" +
        '<div class="cap">' +
        "<b>" +
        '<a href="' +
        p[2] +
        '" target="_blank" rel="noopener noreferrer">' +
        p[0] +
        "</a>" +
        "</b>" +
        "<span>" +
        p[1] +
        "</span>" +
        "</div>" +
        "</article>"
      );
    }

    $("#track").innerHTML = P.map(function (p) {
      return card("card", p);
    }).join("");

    $("#agrid").innerHTML = P.map(function (p) {
      return card("gcard", p);
    }).join("");

    var vb = $("#vaw"),
      aw = $("#allworks");

    vb.addEventListener("click", function () {
      var o = aw.hidden;

      aw.hidden = !o;

      vb.setAttribute("aria-expanded", o);

      $("span", vb).textContent = o ? "Hide all works" : "View all works";

      if (o) {
        aw.scrollIntoView({
          behavior: RM ? "auto" : "smooth",
        });
      }
    });

    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");

            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.18,
      },
    );

    $$(".rv,#contact h2,#work h2,#about-me h2,#me").forEach(function (e) {
      io.observe(e);
    });

    /* intro */

    requestAnimationFrame(function () {
      setTimeout(function () {
        $("#intro").classList.add("go");

        $$(".words .sw").forEach(function (s) {
          s.classList.add("in");
        });
      }, 60);
    });

    var f = $("#flip"),
      ft;

    function auto() {
      clearInterval(ft);

      ft = setInterval(function () {
        f.classList.toggle("back");
      }, 3600);
    }

    if (!RM) {
      setTimeout(function () {
        f.classList.add("back");

        auto();
      }, 3100);
    }

    f.addEventListener("click", function () {
      f.classList.toggle("back");

      if (!RM) {
        auto();
      }
    });

    var lines = [
      "Testing cross-border payment apps",
      "Automating with Selenium and Playwright",
      "Leading QA on critical payment releases",
      "Reporting risk to stakeholders daily",
      "Based in Lagos, working with global teams",
    ];

    var li = 0,
      ci = 0,
      del = false,
      tp = $("#typ");

    function tick() {
      var s = lines[li];

      if (RM) {
        tp.textContent = s;

        return;
      }

      ci += del ? -1 : 1;

      tp.textContent = s.slice(0, ci);

      var d = del ? 25 : 55;

      if (!del && ci === s.length) {
        del = true;

        d = 1500;
      } else if (del && ci === 0) {
        del = false;

        li = (li + 1) % lines.length;

        d = 300;
      }

      setTimeout(tick, d);
    }

    tick();

    var ty = $("#ty"),
      tdone = false;

    new IntersectionObserver(
      function (es, o) {
        if (es[0].isIntersecting && !tdone) {
          tdone = true;

          var t = ty.dataset.t,
            i = 0;

          if (RM) {
            ty.textContent = t;

            return;
          }

          (function n() {
            ty.textContent = t.slice(0, ++i);

            if (i < t.length) {
              setTimeout(n, 45);
            }
          })();

          o.disconnect();
        }
      },
      {
        threshold: 0.4,
      },
    ).observe(ty);

    var so = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) {
            return;
          }

          so.unobserve(e.target);

          var n = +e.target.dataset.n,
            s = e.target.dataset.s;

          if (RM) {
            e.target.textContent = n + s;

            return;
          }

          var t0 = performance.now();

          (function r(t) {
            var k = Math.min((t - t0) / 1800, 1),
              v = 1 - Math.pow(1 - k, 3);

            e.target.textContent = Math.round(n * v) + s;

            if (k < 1) {
              requestAnimationFrame(r);
            }
          })(t0);
        });
      },
      {
        threshold: 0.6,
      },
    );

    $$("[data-n]").forEach(function (b) {
      so.observe(b);
    });

    /* scroll */

    var hd = $("#hd"),
      wa = $("#wa"),
      words = $(".words"),
      work = $("#work"),
      track = $("#track"),
      pg = $("#pg"),
      cards = $$(".card"),
      tk = false;

    function upd() {
      tk = false;

      var y = scrollY,
        vh = innerHeight;

      hd.classList.toggle("show", y > vh * 0.7);

      if (y > vh * 0.5) {
        wa.classList.add("show");
      } else if (y < vh * 0.2) {
        wa.classList.remove("show");
      }

      if (!RM && y < vh * 1.2) {
        words.style.transform = "translateY(" + y * 0.25 + "px)";

        words.style.opacity = Math.max(0, 1 - y / (vh * 0.9));
      }

      if (!RM && getComputedStyle(work).height !== "auto") {
        var r = work.getBoundingClientRect(),
          max = work.offsetHeight - vh,
          p = Math.min(Math.max(-r.top / max, 0), 1),
          dist = track.scrollWidth - innerWidth;

        track.style.transform = "translateX(" + -dist * p + "px)";

        pg.style.transform = "scaleX(" + p + ")";

        var c = innerWidth / 2;

        cards.forEach(function (cd) {
          var b = cd.getBoundingClientRect(),
            m = b.left + b.width / 2,
            d = Math.min(Math.abs(m - c) / innerWidth, 1),
            dir = m < c ? -1 : 1;

          cd.style.transform =
            "scale(" + (1 - d * 0.22) + ") rotate(" + dir * d * 6 + "deg)";
        });
      }
    }

    function req() {
      if (!tk) {
        tk = true;

        requestAnimationFrame(upd);
      }
    }

    addEventListener("scroll", req, {
      passive: true,
    });

    addEventListener("resize", req);

    upd();

    if (!RM && matchMedia("(hover:hover)").matches) {
      $$(".mag").forEach(function (b) {
        b.addEventListener("mousemove", function (e) {
          var r = b.getBoundingClientRect();

          b.style.transform =
            "translate(" +
            (e.clientX - r.left - r.width / 2) * 0.25 +
            "px," +
            (e.clientY - r.top - r.height / 2) * 0.25 +
            "px)";
        });

        b.addEventListener("mouseleave", function () {
          b.style.transform = "";
        });
      });
    }
  })();
}
