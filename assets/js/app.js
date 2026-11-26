/* Renderiza el portfolio a partir de content/content.js. No necesitas editar este archivo. */
(function () {
  var ALL = window.CONTENT;
  var params = new URLSearchParams(location.search);
  var lang = "en";
  if (ALL.es && params.get("lang") === "es") lang = "es";
  try { if (ALL.es && !params.get("lang")) { var sv = localStorage.getItem("lang"); if (sv === "es" || sv === "en") lang = sv; } } catch (e) {}
  var C = ALL[lang];
  var TABS = ["overview", "skills", "projects"];

  var S = function (d) { return '<svg viewBox="0 0 24 24">' + d + '</svg>'; };
  var I = {
    dl: S('<path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/>'),
    li: S('<path d="M6.5 9.5V18M6.5 6v.01M11 18V9.5m0 3.5c0-2 1.3-3.5 3.2-3.5S17.5 11 17.5 13v5"/>'),
    mail: S('<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4 8l8 5.5L20 8"/>'),
    overview: S('<rect x="4" y="4" width="7" height="9" rx="2"/><rect x="13" y="4" width="7" height="5" rx="2"/><rect x="13" y="11" width="7" height="9" rx="2"/><rect x="4" y="15" width="7" height="5" rx="2"/>'),
    cap: S('<path d="M12 4l10 5-10 5-10-5z"/><path d="M6 11.5v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4M22 9v5"/>'),
    projects: S('<path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>'),
    background: S('<rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M9 8V6.5A1.5 1.5 0 0110.5 5h3A1.5 1.5 0 0115 6.5V8M4 13h16"/>'),
    check: S('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    plus: S('<path d="M12 5v14M5 12h14"/>'),
    chev: S('<path d="M7 10l5 5 5-5"/>'),
    medal: S('<circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.5 20l4.5-2.5 4.5 2.5-1.5-6.5"/>'),
    users: S('<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c.5-3 2.7-4.5 5.5-4.5s5 1.5 5.5 4.5M16 6a3 3 0 010 5.5M17.5 14.7c1.9.5 3 1.9 3.3 4.3"/>'),
    book: S('<path d="M5 5.5A1.5 1.5 0 016.5 4H19v14H6.5A1.5 1.5 0 005 19.5v-14zM5 19.5A1.5 1.5 0 006.5 21H19"/>'),
    rocket: S('<path d="M14 4c3 0 6 3 6 6-2 4-5 6-8 7l-5-5c1-3 3-6 7-8zM8 16l-3 3M9.5 19.5L8 21M5 14.5L3.5 16"/><circle cx="14.5" cy="9.5" r="1.5"/>'),
    spark: S('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM18.5 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"/>'),
    globe: S('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.3 3.7 5.1 3.7 8.5S14.5 18.2 12 20.5C9.5 18.2 8.3 15.4 8.3 12S9.5 5.8 12 3.5z"/>'),
    plane: S('<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" stroke="none"/>'),
    bridge: S('<path d="M3 17h18M5 17c1-8 5-11 7-11s6 3 7 11M8 17v-6M12 17V6M16 17v-6"/>'),
    trophy: S('<path d="M8 4h8v5a4 4 0 01-8 0V4zM8 6H5a3 3 0 003 3M16 6h3a3 3 0 01-3 3M12 13v4M9 20h6M10 17h4"/>'),
    arrow: '<svg viewBox="0 0 24 24" class="s14"><path d="M5 12h14m-5-5l5 5-5 5"/></svg>',
    ext: '<svg viewBox="0 0 24 24" class="s14"><path d="M7 17L17 7M9 7h8v8"/></svg>'
  };
  window.logoFallback = function (img) {
    if (!img.dataset.t) { img.dataset.t = "1"; img.src = img.src.replace(/\.png$/, ".svg"); } else img.parentNode.classList.remove("has"), img.remove();
  };

  var LN = {
    sql: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    ml: '<circle cx="5" cy="7" r="1.8"/><circle cx="5" cy="17" r="1.8"/><circle cx="12" cy="4.5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19.5" r="1.8"/><circle cx="19" cy="12" r="1.8"/><path d="M6.7 7.5L10.4 5M6.7 7.5L10.3 11.3M6.7 16.5L10.3 12.7M6.7 16.5l3.7 2.5M13.7 5l3.6 6M13.8 12h3.4M13.7 19l3.6-6"/>',
    genai: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
    agile: '<path d="M20 11a8 8 0 0 0-14.3-4.5L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.5l1.7-2M20 20v-4.5h-4.5"/>'
  };
  function techIcon(name) {
    if (LN[name]) return '<svg class="lg ln" viewBox="0 0 24 24" aria-hidden="true">' + LN[name] + '</svg>';
    if (!name || !window.ICONS || !window.ICONS[name]) return "";
    return '<svg class="lg" viewBox="0 0 24 24" aria-hidden="true"><path d="' + window.ICONS[name] + '"/></svg>';
  }
  var TI = {
    overview: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="9" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="5" rx="1.6"/><rect x="4" y="16" width="6.5" height="4" rx="1.6"/><rect x="13.5" y="12" width="6.5" height="8" rx="1.6"/></svg>',
    skills: '<svg viewBox="0 0 24 24" aria-hidden="true">' + LN.ml + '</svg>',
    projects: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2.2h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><path d="M9 16v-3M12 16v-5M15 16v-2"/></svg>'
  };
  var RET = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 6 6v1"/></svg>';
  var ARR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  function endnav(t) {
    var e = C.ui.end[t], i = TABS.indexOf(t), n = "0" + (i + 1) + " / 03";
    return '<div class="endnav"><div class="elines" aria-hidden="true">' + TABS.map(function (x) { return '<i' + (x === t ? ' class="on"' : '') + '></i>'; }).join("") + '</div>' +
      '<div class="ecnt"><b>' + n + '</b> — ' + C.ui.tabs[t] + '</div>' +
      '<button class="ebtn" data-end="' + e.to + '">' + (t === "projects" ? RET : "") + '<span>' + e.b + '</span>' + (t === "projects" ? "" : ARR) + '</button></div>';
  }
  function logo(key, cls) {
    var txt = (C.logos && C.logos[key]) || key;
    return '<span class="lt ' + (cls || "") + ' lt-' + key + '"><span class="lw">' + txt + '</span><img src="assets/logos/' + key + '.png" alt="' + txt + '" onload="this.parentNode.classList.add(\'has\')" onerror="logoFallback(this)"></span>';
  }
  function badge(kind, label) { return '<span class="badge ' + kind + '">' + label + '</span>'; }
  function track(name) { try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: name, event: true }); } catch (e) {} }
  function mailto() { return "mailto:" + C.contact.email + "?subject=" + encodeURIComponent(C.contact.emailSubject); }
  function eyebrow(t) { return '<div class="eyebrow">' + t + '</div>'; }

  /* ---------- THE BRIDGE (arco hacia arriba, animado) ---------- */
  function bridgeSVG(b) {
    var W = 340, deckY = 86, x1 = 62, x2 = 278, peak = 12, ctrl = 2 * peak - deckY, mid = (x1 + x2) / 2;
    var arch = "M" + x1 + " " + deckY + " Q " + mid + " " + ctrl + " " + x2 + " " + deckY;
    var hang = "";
    for (var i = 1; i <= 9; i++) { var t = i / 10, x = x1 + (x2 - x1) * t, y = (1 - t) * (1 - t) * deckY + 2 * t * (1 - t) * ctrl + t * t * deckY; hang += "M" + x.toFixed(1) + " " + y.toFixed(1) + " V" + deckY + " "; }
    var L = [[14, 50], [38, 42], [28, 68], [10, 88], [44, 100], [22, 106]], Ll = [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]], ln = "", ll = "";
    Ll.forEach(function (l) { ll += "M" + L[l[0]][0] + " " + L[l[0]][1] + " L" + L[l[1]][0] + " " + L[l[1]][1] + " "; });
    L.forEach(function (n) { ln += '<circle cx="' + n[0] + '" cy="' + n[1] + '" r="2.5" fill="#93C5FD"/>'; });
    var R = [[298, 104, 16], [312, 104, 32], [326, 104, 50]], bars = "";
    R.forEach(function (r) { bars += '<rect x="' + (r[0] - 4.5) + '" y="' + (r[1] - r[2]) + '" width="9" height="' + r[2] + '" rx="2" fill="rgba(59,130,246,.22)" stroke="rgba(147,197,253,.55)" stroke-width=".8"/>'; });
    var route = "M44 100 L" + x1 + " " + deckY + " H" + x2 + " L298 84 L312 70 L326 54";
    var p = [];
    p.push('<svg viewBox="0 0 ' + W + ' 122" role="img" aria-label="' + b.left + ' — ' + b.center + ' — ' + b.right + '"><defs><linearGradient id="gb" gradientUnits="userSpaceOnUse" x1="44" y1="0" x2="326" y2="0"><stop offset="0" stop-color="#93C5FD"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs>');
    p.push('<g class="fadein"><path d="' + ll + '" stroke="rgba(147,197,253,.45)" stroke-width=".9" fill="none"/>' + ln + '<path d="M44 100 L' + x1 + ' ' + deckY + '" stroke="rgba(147,197,253,.45)" stroke-width=".9"/></g>');
    p.push('<path class="draw" pathLength="1" d="M' + x1 + ' ' + deckY + ' H' + x2 + '" stroke="url(#gb)" stroke-width="1.8" fill="none"/>');
    p.push('<path class="fadein" d="M' + x1 + ' ' + (deckY + 5) + ' H' + x2 + '" stroke="rgba(147,197,253,.22)" stroke-width="1" fill="none"/>');
    p.push('<path class="draw" pathLength="1" d="' + arch + '" stroke="url(#gb)" stroke-width="1.5" fill="none"/>');
    p.push('<path class="fadein" d="' + hang + '" stroke="rgba(147,197,253,.38)" stroke-width=".8" fill="none"/>');
    p.push('<g class="fadein">' + bars + '<path d="M' + x2 + ' ' + deckY + ' L298 84 L312 70 L326 54" stroke="#93C5FD" stroke-width="1.2" fill="none"/><circle cx="326" cy="54" r="2.8" fill="#3B82F6"/></g>');
    if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [0, 1.3, 2.6].forEach(function (d) { p.push('<circle r="2.3" fill="#93C5FD" opacity="0"><animateMotion dur="3.9s" begin="' + (1.2 + d) + 's" repeatCount="indefinite" path="' + route + '"/><animate attributeName="opacity" values="0;1;1;0" dur="3.9s" begin="' + (1.2 + d) + 's" repeatCount="indefinite"/></circle>'); });
      p.push('<circle r="2" fill="#F4F4F5" opacity="0"><animateMotion dur="5.5s" begin="1.6s" repeatCount="indefinite" path="' + arch + '"/><animate attributeName="opacity" values="0;.9;.9;0" dur="5.5s" begin="1.6s" repeatCount="indefinite"/></circle>');
    }
    p.push('<text x="4" y="119">' + b.left + '</text><text x="170" y="119" text-anchor="middle" style="fill:#93C5FD">' + b.center + '</text><text x="336" y="119" text-anchor="end">' + b.right + '</text></svg>');
    return p.join("");
  }

  /* ---------- GLOBO Madrid–París ---------- */
  function globeSVG(g) {
    var G = window.GLOBE; if (!G) return "";
    return '<svg viewBox="0 0 240 240" role="img" aria-label="' + g.from + ' – ' + g.to + '">' +
      '<defs><radialGradient id="sph" cx="38%" cy="32%" r="85%"><stop offset="0" stop-color="#1E3A66"/><stop offset=".6" stop-color="#0B1120"/><stop offset="1" stop-color="#070B16"/></radialGradient>' +
      '<clipPath id="gc"><circle cx="120" cy="120" r="104"/></clipPath><linearGradient id="ga" x1="0" x2="1"><stop offset="0" stop-color="#93C5FD"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs>' +
      '<circle cx="120" cy="120" r="112" fill="none" stroke="rgba(59,130,246,.25)" stroke-width="1"/>' +
      '<circle cx="120" cy="120" r="104" fill="url(#sph)" stroke="rgba(147,197,253,.5)" stroke-width="1.2"/>' +
      '<g clip-path="url(#gc)"><path d="' + G.grat + '" fill="none" stroke="rgba(147,197,253,.16)" stroke-width=".6"/>' +
      '<path d="' + G.land + '" fill="rgba(147,197,253,.20)" stroke="rgba(147,197,253,.55)" stroke-width=".7" stroke-linejoin="round"/>' +
      '<path class="garc" d="' + G.arc + '" fill="none" stroke="url(#ga)" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="3 4"/></g>' +
      '<circle cx="' + G.madrid[0] + '" cy="' + G.madrid[1] + '" r="9" fill="rgba(59,130,246,.25)"/><circle cx="' + G.madrid[0] + '" cy="' + G.madrid[1] + '" r="4" fill="#F4F4F5" stroke="#3B82F6" stroke-width="2"/>' +
      '<circle cx="' + G.paris[0] + '" cy="' + G.paris[1] + '" r="9" fill="rgba(59,130,246,.25)"/><circle cx="' + G.paris[0] + '" cy="' + G.paris[1] + '" r="4" fill="#F4F4F5" stroke="#3B82F6" stroke-width="2"/>' +
      '<text x="' + (G.madrid[0] + 8) + '" y="' + (G.madrid[1] + 14) + '" class="gl">' + g.from.toUpperCase() + '</text>' +
      '<text x="' + (G.paris[0] - 8) + '" y="' + (G.paris[1] - 10) + '" text-anchor="end" class="gl">' + g.to.toUpperCase() + '</text></svg>';
  }

  /* ---------- helpers ---------- */
  function routeLine() { return '<span class="route"><i class="ln"></i><span class="pl">' + I.plane + '</span></span>'; }
  function ico(k) { return '<span class="fi">' + I[k] + '</span>'; }

  /* ---------- HERO ---------- */
function idBlock() {
    var p = C.person;
    return '<section class="idb"><div class="id"><div class="photo"><span>' + p.initials + '</span><img src="' + p.photo + '" alt="' + p.name + '" onerror="this.remove()"></div>' +
      '<div><div class="mono eb">' + p.eyebrow + '</div><h1>' + p.name + '</h1><div class="role">' + p.role + ' <span class="rtg">' + p.roleTag + '</span></div><div class="sub">' + p.sub + ' <span class="rtg">' + p.subTag + '</span></div></div></div></section>';
  }
  function hero() {
    var h = C.hero;
    return '<section class="hero2"><div class="card bcard glow"><h2 class="tag">' + h.tagline + '</h2><div class="bridge">' + bridgeSVG(h.bridge) + '</div>' +
      '<p class="pline">' + h.line + '</p></div></section>';
  }

  /* ---------- OVERVIEW ---------- */
  function focusCard() {
    var f = C.focus, y = f.mawdy, k = C.skills, u = C.ui;
    return eyebrow(f.eyebrow) + '<section class="card focus glow">' +
      '<div class="fh">' + logo(f.logo, "lg") + '<div class="fs"><span class="badge ip">' + f.status + '</span><span class="mono fsub">' + f.statusSub + '</span></div></div>' +
      '<h3>' + f.title + '</h3><p class="fl">' + f.line + '</p>' +
      '<div class="grp"><h4>' + f.developing + '</h4><div class="chips" data-g="focus">' + chips(f.skills, "dev") + '</div><div class="ev" id="ev-focus" aria-live="polite"></div></div>' +
      '<p class="hint">' + u.tapHint + '</p>' +
      '<button class="btn learnbtn" data-go="skills" data-scroll="learning">' + f.more + ' ' + I.arrow + '</button>' +
      '<div class="inner mw">' + logo(y.logo, "md") + '<div class="mwb"><div class="row2">' + badge("tl", y.tag) + '<span class="mwst">' + y.status + '</span></div><h4>' + y.title + ' <span>/ ' + y.client + '</span></h4><p>' + y.line + '</p>' +
      '<button class="link" data-go="' + y.goto + '">' + u.seeProject + ' ' + I.arrow + '</button></div></div></section>';
  }

  function communityCard() {
    var c = C.community;
    return eyebrow(c.eyebrow) + '<a class="community cm" href="' + c.url + '" target="_blank" rel="noopener" data-goatcounter-click="aimpacto-website">' +
      '<div class="cmt"><div class="cmb"><div class="mono kind">' + c.kind + '</div><h3>' + c.name + '</h3></div>' +
      '<img class="cmimg" src="' + c.img + '" alt="AImpacto" onerror="this.remove()"></div>' +
      '<div class="cfacts">' + c.facts.map(function (f) { return '<div>' + I[f.icon] + '<span>' + f.t + '</span></div>'; }).join("") + '</div>' +
      '<span class="go">' + c.cta + ' ' + I.ext + '</span></a>';
  }

  function educationCard() {
    var e = C.highlights.education, g = e.globe;
    return '<section class="card edu2 glow"><h2 class="dd">' + e.title + '</h2>' +
      '<div class="globe">' + globeSVG(g) + '</div>' +
      '<div class="pres"><span class="fi">' + I.medal + '</span><b>' + e.prestige + '</b></div>' +
      '<div class="legs">' + e.legs.map(function (l) {
        return '<div class="leg"><div class="lgh">' + logo(l.logo, "md") + '<b class="ln">' + l.org + '</b><span class="lr"><span class="y">' + l.y + '</span><span class="mono">' + l.tag + '</span></span></div>' + routeLine() + '<p><em>' + l.b + '</em>' + l.d + '</p></div>';
      }).join("") + '</div>' +
      '<div class="chips" style="margin-top:14px">' + e.langs.map(function (l) { return '<span class="chip static">' + l + '</span>'; }).join("") + '</div></section>';
  }

  function highlights() {
    var h = C.highlights;
    var rows = '<div class="tree"><i class="stem"></i><i class="hb"></i>' + h.rows.map(function (r) {
      return '<div class="hc"><span class="hi">' + I[r.icon] + '</span><b>' + r.t + (r.hl ? ' <em>' + r.hl + '</em>' : '') + '</b><small>' + r.d + '</small></div>';
    }).join("") + '</div>';
    return eyebrow(h.eyebrow) + educationCard() + rows;
  }

  function experience() {
    var x = C.experience, m = x.main;
    return eyebrow(x.eyebrow) + '<section class="card job glow"><div class="fjh"><div class="fjl">' + logo(m.logo, "lg") + '<div><h3>' + m.org + '</h3><div class="mono pd">' + m.period + '</div></div></div>' +
      '<div class="fjr"><b>' + m.big + '</b><span>' + m.sub + '</span></div></div>' +
      '<div class="pts">' + m.points.map(function (p) { return '<div class="pt2"><span class="ficon">' + I[p.icon] + '</span><div><b>' + p.t + '</b><p>' + p.d + '</p></div></div>'; }).join("") + '</div></section>' +
      '<div class="tl2"><i class="rail" aria-hidden="true"></i><div class="trs">' + x.earlier.map(function (r) {
        return '<div class="tr2">' + logo(r.logo, "md") + '<div class="tb"><div class="trh"><b>' + r.org + '</b><span>' + r.role + ' · ' + r.period + '</span></div><p>' + r.d + '</p></div></div>';
      }).join("") + '</div></div>';
  }

  function overview() { return focusCard() + communityCard() + experience() + highlights(); }

  /* ---------- SKILLS ---------- */
  function chips(list, cls) {
    return list.map(function (s, i) {
      return '<button class="chip ' + cls + '" data-i="' + i + '" aria-pressed="false">' + techIcon(s.icon) + s.n + '</button>';
    }).join("");
  }

  function skills() {
    var c = C.certs, u = C.ui, m = C.curriculum;
    var h = '<div id="learning" class="anchor">' + eyebrow(m.eyebrow) + '</div><h2 class="t">' + m.title + '</h2><div class="stack">' +
      m.blocks.map(function (b) {
        return '<div class="card ac" data-open="false"><button class="ach" aria-expanded="false"><span class="n">' + b.n + '</span><b>' + b.t + '</b><span class="clk">Click</span><span class="cv">' + I.chev + '</span></button>' +
          '<div class="det"><div><div class="chips pad">' + b.topics.map(function (t) { return '<span class="chip dev static">' + t + '</span>'; }).join("") + '</div></div></div></div>';
      }).join("") + '</div>' +
      '<div class="tk"><span class="mono">' + m.toolsLabel + '</span><div class="chips">' + m.tools.map(function (t) { return '<span class="chip dev static">' + techIcon(t.icon) + t.n + '</span>'; }).join("") + '</div></div>';
    function row(x) { return '<div class="crow"><b>' + x.n + '</b><span class="tg">' + x.skill + '</span></div>'; }
    h += eyebrow(c.eyebrow) + '<section class="card certc"><div class="mono ch">' + u.completedH + '</div>' + c.items.filter(function (x) { return x.done; }).map(row).join("") +
      '<div class="mono ch">' + u.inProgressH + '</div>' + c.items.filter(function (x) { return !x.done; }).map(row).join("") + '</section>';
    return h;
  }

  /* ---------- PROJECTS ---------- */
  var B = "#94C5FC";
  var GI = {
    bottle: '<path d="M-5 -2h10v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM-3 -2v-4h6v4M-3.5 -8.5h7"/>',
    neural: '<path d="M-8 -5L0 -7M-8 -5L0 0M-8 5L0 0M-8 5L0 7M0 -7L8 0M0 0L8 0M0 7L8 0"/><circle cx="-8" cy="-5" r="1.7"/><circle cx="-8" cy="5" r="1.7"/><circle cx="0" cy="-7" r="1.7"/><circle cx="0" cy="0" r="1.7"/><circle cx="0" cy="7" r="1.7"/><circle cx="8" cy="0" r="1.7"/>',
    trophy: '<path d="M-5 -8h10v5a5 5 0 0 1-10 0zM-5 -6h-3v2a3 3 0 0 0 3 3M5 -6h3v2a3 3 0 0 1-3 3M0 2v4M-4 9h8M-2 6h4"/>',
    bag: '<path d="M-8 -3h16l-1.5 12h-13zM-4 -3v-2a4 4 0 0 1 8 0v2"/>',
    trend: '<path d="M-9 8l6-6 4 3 8-10M3 -7h6v6"/>',
    person: '<circle cx="0" cy="-4.5" r="3.6"/><path d="M-7 9a7 7 0 0 1 14 0"/>'
  };
  function node(cx, cy, key, label) {
    return '<g class="gn"><circle cx="' + cx + '" cy="' + cy + '" r="30" class="gc"/><g transform="translate(' + cx + ' ' + cy + ') scale(1.45)" class="gi">' + GI[key] + '</g>' +
      '<text x="' + cx + '" y="' + (cy + 52) + '" class="gt">' + label + '</text></g>';
  }
  function arrow(x1, x2, y) { return '<path d="M' + x1 + ' ' + y + 'H' + x2 + '" class="gf"/><path d="M' + (x2 - 5) + ' ' + (y - 5) + 'L' + x2 + ' ' + y + 'L' + (x2 - 5) + ' ' + (y + 5) + '" class="ga"/>'; }
  function trio(a, b, c) {
    return '<svg viewBox="0 0 320 98" role="img" aria-hidden="true">' + node(50, 38, a[0], a[1]) + node(160, 38, b[0], b[1]) + node(270, 38, c[0], c[1]) + arrow(88, 122, 38) + arrow(198, 232, 38) + '</svg>';
  }
  function gfx(k) {
    if (k === "mawdy") {
      var hs = [30, 44, 38, 58, 50, 72, 64], ys = [70, 58, 64, 44, 50, 30, 36], bars = "", pts = [], dots = "", i;
      for (i = 0; i < 7; i++) {
        var x = 34 + i * 42;
        bars += '<rect x="' + (x - 11) + '" y="' + (104 - hs[i]) + '" width="22" height="' + hs[i] + '" rx="3" class="gbar" style="animation-delay:' + (i * 0.08) + 's"/>';
        pts.push(x + "," + ys[i]);
        dots += '<circle cx="' + x + '" cy="' + ys[i] + '" r="3.6" class="gdot"/>';
      }
      var grid = ""; for (i = 0; i < 4; i++) grid += '<path d="M12 ' + (24 + i * 27) + 'H308"/>'; for (i = 0; i < 8; i++) grid += '<path d="M' + (13 + i * 42) + ' 14V104"/>';
      return '<svg viewBox="0 0 320 112" aria-hidden="true"><g class="ggrid">' + grid + '</g><path d="M12 104H308" class="gbase"/>' + bars + '<polyline points="' + pts.join(" ") + '" pathLength="1" class="gl"/>' + dots + '</svg>';
    }
    if (k === "brandstorm") return trio(["bottle", "SUSTAINABILITY"], ["neural", "PREDICTIVE AI"], ["trophy", "INNOVATION"]);
    if (k === "loewe") return trio(["bag", "LUXURY RETAIL"], ["neural", "AI STRATEGY"], ["trend", "BUSINESS VALUE"]);
    if (k === "thesis") {
      var d = [[24, 18], [46, 30], [70, 16], [30, 48], [58, 54], [78, 40], [22, 76], [48, 80], [72, 72]], l = "", c = "";
      d.forEach(function (q) { l += '<path d="M' + q[0] + ' ' + q[1] + 'L132 50" class="gw"/>'; c += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="3.4" class="gdot2"/>'; });
      return '<svg viewBox="0 0 320 120" aria-hidden="true">' + l + c +
        '<circle cx="160" cy="50" r="26" class="gpulse"/><circle cx="160" cy="50" r="26" class="gc gai"/><text x="160" y="56" class="gaitx">AI</text>' +
        '<path d="M196 50H226" class="gf"/><path d="M221 45L226 50L221 55" class="ga"/>' +
        '<circle cx="262" cy="50" r="24" class="gc"/><g transform="translate(262 50) scale(1.5)" class="gi">' + GI.person + '</g>' +
        '<text x="50" y="108" class="gt">MASS MARKET</text><text x="262" y="108" class="gt">SEGMENT OF ONE</text></svg>';
    }
    if (k === "lbm") {
      var hb = [22, 34, 28, 46, 40], bb = "";
      for (var j = 0; j < 5; j++) bb += '<rect x="' + (96 + j * 28) + '" y="' + (98 - hb[j]) + '" width="16" height="' + hb[j] + '" rx="3" class="gbar" style="animation-delay:' + (j * 0.1) + 's"/>';
      return '<svg viewBox="0 0 320 116" aria-hidden="true"><rect x="70" y="8" width="180" height="100" rx="10" class="gwin"/><path d="M70 28H250" class="gwl"/>' +
        '<circle cx="84" cy="18" r="2.4" class="gdot2"/><circle cx="94" cy="18" r="2.4" class="gdot2"/><circle cx="104" cy="18" r="2.4" class="gdot2"/><rect x="122" y="13" width="112" height="10" rx="5" class="gwl2"/>' +
        '<path d="M88 40h46M88 50h30" class="gwl3"/><path d="M84 98H236" class="gbase"/>' + bb + '</svg>';
    }
    return "";
  }
  function projects() {
    var P = C.projects, h = '<h2 class="t pt0">' + P.title + '</h2>', u = C.ui;
    P.groups.forEach(function (g) {
      h += eyebrow(g.eyebrow) + '<div class="stack">';
      g.items.forEach(function (x) {
        var st = x.status === "In progress" ? '<span class="pst"><i></i>' + x.status + '</span>' : '<span class="pst">' + x.status + '</span>';
        var aw = x.award ? '<div class="paw"><span class="pab">' + (x.award.icon === "medal" ? I.medal : '<svg viewBox="-12 -12 24 24">' + GI.trophy + '</svg>') + '<span>' + x.award.t + '</span></span>' + (x.award.s ? '<small>' + x.award.s + '</small>' : '') + '</div>' : '';
        var det = '<dl><div><dt>' + u.problem + '</dt><dd>' + x.problem + '</dd></div><div><dt>' + u.approach + '</dt><dd>' + x.approach + '</dd></div><div><dt>' + u.application + '</dt><dd>' + x.application + '</dd></div>' +
          (x.result ? '<div><dt>' + u.result + '</dt><dd>' + x.result + '</dd></div>' : '') + '</dl>';
        h += '<article class="card proj" data-open="false"><div class="pin">' +
          '<div class="p1"><span class="ptype">' + x.type + '</span>' + st + '</div>' +
          '<div class="p2">' + (x.logo ? logo(x.logo, "lg") : '<span class="lt lg ico">' + I[x.icon] + '</span>') +
          '<div class="ptt"><h3>' + x.title + '</h3>' + (x.sub ? '<div class="psub">' + x.sub + '</div>' : '') + '</div>' + aw + '</div>' +
          '<p class="pdesc">' + x.desc + '</p>' +
          '<div class="pg">' + gfx(x.gfx) + '</div>' +
          (x.caption ? '<div class="pcap">' + I.users + '<span>' + x.caption + '</span></div>' : '') +
          '<div class="ptags">' + x.tags.map(function (t) { return '<span class="tg">' + t + '</span>'; }).join("") + '</div></div>' +
          '<button class="pdt" data-p="' + x.id + '" aria-expanded="false"><span>' + P.detailsLabel + '</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path class="pv" d="M12 5v14"/></svg></button>' +
          '<div class="det"><div>' + det + '</div></div></article>';
      });
      h += '</div>';
    });
    return h;
  }

  /* ---------- Montaje ---------- */
  function mount() {
    var p = C.person, c = C.contact, u = C.ui;
    document.documentElement.lang = lang;
    document.title = C.meta.title;
    document.getElementById("app").innerHTML =
      (params.has("r") ? '<div class="hello">' + C.fromCard + '</div>' : '') +
      '<header class="top"><div class="wrap"><div class="brand"><b>' + p.name + '</b></div>' +
      (ALL.es ? '<button class="lang" id="lang">' + u.langSwitch + '</button>' : '') +
      '<div class="acts"><a class="ic p cvb" href="' + c.cv + '" download data-goatcounter-click="cv-download-top">' + I.dl + '<span>' + u.cv + '</span></a>' +
      '<a class="ic" href="' + c.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn" data-goatcounter-click="linkedin-top">' + I.li + '</a>' +
      '<a class="ic" href="' + mailto() + '" aria-label="Email" data-goatcounter-click="email-top">' + I.mail + '</a></div></div></header>' +
      '<main class="wrap">' + idBlock() + '<div id="heroWrap">' + hero() + '</div>' +
      '<div class="tsent"></div><div class="tabsw" id="tabsw"><div class="thead"><span class="tlab">' + u.explore + '</span><span class="tcnt" id="tcnt">01 / 03</span></div><nav class="tabs" role="tablist">' + TABS.map(function (t) { return '<button class="tab" role="tab" data-t="' + t + '" aria-selected="false">' + TI[t] + '<span>' + u.tabs[t] + '</span></button>'; }).join("") + '</nav></div>' +
      '<div class="view" id="v-overview">' + overview() + endnav("overview") + '</div><div class="view" id="v-skills">' + skills() + endnav("skills") + '</div><div class="view" id="v-projects">' + projects() + endnav("projects") + '</div></main>';

    (function () {
      var sent = document.querySelector(".tsent"), w = document.getElementById("tabsw"), tk = false, cur = false, diff = 0;
      function measure() {
        w.style.marginBottom = ""; w.classList.remove("cmp"); var f = w.offsetHeight; w.classList.add("cmp"); var c = w.offsetHeight;
        diff = Math.max(0, f - c); w.classList.toggle("cmp", cur); w.style.marginBottom = cur ? "calc(24px + " + diff + "px)" : "";
      }
      function upd() {
        tk = false; var mini = sent.getBoundingClientRect().top < 18;
        if (mini !== cur) { cur = mini; w.classList.toggle("cmp", mini); w.style.marginBottom = mini ? "calc(24px + " + diff + "px)" : ""; }
      }
      window.addEventListener("scroll", function () { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
      window.addEventListener("resize", function () { measure(); upd(); });
      measure(); upd();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); upd(); });
    })();
    function goStart(t) {
      show(t, true);
      requestAnimationFrame(function () {
        var se = document.querySelector(".tsent");
        window.scrollTo({ top: t === "overview" ? 0 : Math.max(0, se.getBoundingClientRect().top + window.pageYOffset - 10), behavior: "auto" });
      });
    }
    document.querySelectorAll(".ebtn").forEach(function (b) { b.addEventListener("click", function () { track("end-" + b.getAttribute("data-end")); goStart(b.getAttribute("data-end")); }); });
    function show(t, push, scroll) {
      if (TABS.indexOf(t) < 0) t = "overview";
      TABS.forEach(function (x) {
        document.getElementById("v-" + x).classList.toggle("on", x === t);
        document.querySelector('.tab[data-t="' + x + '"]').setAttribute("aria-selected", x === t ? "true" : "false");
      });
      document.getElementById("heroWrap").style.display = t === "overview" ? "" : "none";
      var cn = document.getElementById("tcnt"); if (cn) cn.textContent = "0" + (TABS.indexOf(t) + 1) + " / 03";
      if (push) { try { history.replaceState(null, "", "#" + t); } catch (e) {} track("tab-" + t); }
      if (scroll) { var el = document.getElementById(scroll); if (el) { setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 30); return; } }
      if (push) window.scrollTo({ top: 0, behavior: "auto" });
    }
    document.querySelectorAll(".tab").forEach(function (b) { b.onclick = function () { show(b.dataset.t, true); }; });
    document.querySelectorAll("[data-go]").forEach(function (b) { b.onclick = function () { show(b.dataset.go, true, b.dataset.scroll); }; });
    show((location.hash || "").replace("#", "") || "overview", false);

    document.querySelectorAll(".chips[data-g] .chip").forEach(function (b) {
      b.onclick = function () {
        var g = b.parentNode.dataset.g, i = +b.dataset.i, on = b.getAttribute("aria-pressed") === "true";
        b.parentNode.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        var ev = document.getElementById("ev-" + g);
        if (on) { ev.textContent = ""; return; }
        b.setAttribute("aria-pressed", "true"); ev.textContent = (g === "focus" ? C.focus.skills : C.skills[g])[i].ev; track("skill-" + (g === "focus" ? C.focus.skills : C.skills[g])[i].n);
      };
    });
    function toggle(card, btn, name) {
      var open = card.dataset.open !== "true"; card.dataset.open = open ? "true" : "false"; btn.setAttribute("aria-expanded", open ? "true" : "false"); if (open && name) track(name);
    }
    document.querySelectorAll(".proj > .pdt").forEach(function (b) { b.onclick = function () { toggle(b.parentNode, b, "project-" + b.dataset.p); }; });
    document.querySelectorAll(".ac > .ach").forEach(function (b) {
      b.onclick = function () { document.querySelectorAll(".ac").forEach(function (o) { if (o !== b.parentNode) { o.dataset.open = "false"; o.firstChild.setAttribute("aria-expanded", "false"); } }); toggle(b.parentNode, b, "curriculum"); };
    });
    var lb = document.getElementById("lang");
    if (lb) lb.onclick = function () { lang = lang === "en" ? "es" : "en"; try { localStorage.setItem("lang", lang); } catch (e) {} C = ALL[lang]; mount(); };
  }

  if (C.analytics && C.analytics.goatcounter) {
    var s = document.createElement("script"); s.async = true; s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + C.analytics.goatcounter + ".goatcounter.com/count"); document.head.appendChild(s);
  }
  mount();
})();
