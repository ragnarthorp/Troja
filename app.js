(function () {
  "use strict";

  var G = window.TROJA;
  var css = getComputedStyle(document.documentElement);
  function litur(nafn) { return css.getPropertyValue("--" + nafn).trim(); }

  var stadirEftirId = {};
  G.stadir.forEach(function (s) { stadirEftirId[s.id] = s; });
  var personurEftirId = {};
  G.personur.forEach(function (p) { personurEftirId[p.id] = p; });

  function stadaLitur(id) { return litur(id) || "#888"; }

  // ---------- Ættartréð ----------

  var SVGNS = "http://www.w3.org/2000/svg";
  var B = 112, H = 50; // breidd og hæð spjalda
  var T = G.tre;
  var svg = document.getElementById("tre");
  var lagLinur = svgStak("g", { "class": "lag-linur" });
  var lagAuka = svgStak("g", { "class": "lag-auka" });
  var lagSpjold = svgStak("g", { "class": "lag-spjold" });
  svg.appendChild(lagAuka);
  svg.appendChild(lagLinur);
  svg.appendChild(lagSpjold);

  function svgStak(nafn, eigindi, foreldri) {
    var el = document.createElementNS(SVGNS, nafn);
    Object.keys(eigindi || {}).forEach(function (k) { el.setAttribute(k, eigindi[k]); });
    if (foreldri) foreldri.appendChild(el);
    return el;
  }
  function p(id) { return personurEftirId[id]; }
  function teikna(lag, ids, klasi) {
    return svgStak("g", { "class": "tre-hluti " + (klasi || ""), "data-ids": ids.join(" ") }, lag);
  }
  function lina(g, x1, y1, x2, y2, klasi) {
    return svgStak("line", { x1: x1, y1: y1, x2: x2, y2: y2, "class": klasi || "" }, g);
  }
  function merkiTexti(g, x, y, texti, klasi) {
    var t = svgStak("text", { x: x, y: y, "class": "tre-merki " + (klasi || ""), "text-anchor": "middle" }, g);
    t.textContent = texti;
    return t;
  }

  // Hjónabönd: tvöföld lína milli maka (lárétt eða lóðrétt)
  T.hjon.forEach(function (h) {
    var a = p(h[0]), b = p(h[1]);
    var g = teikna(lagLinur, [h[0], h[1]], "hjon");
    if (a.y === b.y) {
      var v = a.x < b.x ? a : b, hg = a.x < b.x ? b : a;
      var x1 = v.x + B / 2, x2 = hg.x - B / 2;
      lina(g, x1, a.y - 3, x2, a.y - 3); lina(g, x1, a.y + 3, x2, a.y + 3);
      if (h[2]) merkiTexti(g, (x1 + x2) / 2, a.y - 9, h[2] + " hjónaband");
    } else {
      var e = a.y < b.y ? a : b, n = a.y < b.y ? b : a;
      var y1 = e.y + H / 2, y2 = n.y - H / 2;
      lina(g, a.x - 3, y1, a.x - 3, y2); lina(g, a.x + 3, y1, a.x + 3, y2);
      if (h[2]) merkiTexti(g, a.x + 10, (y1 + y2) / 2 + 4, h[2] + " hjónaband", "vinstri");
    }
  });

  // Fjölskyldur: lína niður frá foreldrum að einni slá, börnin hlið við hlið undir
  T.fjolskyldur.forEach(function (f) {
    var foreldrar = f.foreldrar.map(p), born = f.born.map(p);
    var g = teikna(lagLinur, f.foreldrar.concat(f.born), "fjolskylda");
    var mx, my;
    if (foreldrar.length === 2) {
      mx = (foreldrar[0].x + foreldrar[1].x) / 2; my = foreldrar[0].y + 3;
    } else {
      mx = foreldrar[0].x; my = foreldrar[0].y + H / 2;
    }
    var barnY = born[0].y - H / 2;
    var slaY = barnY - 22;
    lina(g, mx, my, mx, slaY);
    var xs = born.map(function (b) { return b.x; }).concat([mx]);
    lina(g, Math.min.apply(null, xs), slaY, Math.max.apply(null, xs), slaY);
    born.forEach(function (b) {
      var klasi = (f.annarFadir || []).indexOf(b.id) >= 0 ? "seifs" :
                  (f.ovisst || []).indexOf(b.id) >= 0 ? "ovisst" : "";
      lina(g, b.x, slaY, b.x, barnY, klasi);
    });
    if (f.ovisst) merkiTexti(g, p(f.ovisst[0]).x + 34, slaY + 14, "skv. Hómer");
  });

  // Systkinahópar án foreldris á myndinni: svigi undir spjöldunum
  T.hopar.forEach(function (h) {
    var born = h.born.map(p);
    var g = teikna(lagLinur, h.born, "hopur");
    var y0 = born[0].y + H / 2 + 2, y1 = y0 + 10;
    born.forEach(function (b) { lina(g, b.x, y0, b.x, y1); });
    lina(g, born[0].x, y1, born[born.length - 1].x, y1);
    merkiTexti(g, (born[0].x + born[born.length - 1].x) / 2, y1 + 15, h.merki);
  });

  T.systkini.forEach(function (s) {
    var a = p(s[0]), b = p(s[1]);
    var g = teikna(lagLinur, [s[0], s[1]], "systkini");
    var x1 = Math.min(a.x, b.x) + B / 2, x2 = Math.max(a.x, b.x) - B / 2;
    lina(g, x1, a.y, x2, a.y);
    merkiTexti(g, (x1 + x2) / 2, a.y - 7, s[2]);
  });

  T.fostur.forEach(function (s) {
    var a = p(s[0]), b = p(s[1]);
    var g = teikna(lagLinur, [s[0], s[1]], "fostur");
    var x1 = a.x, y1 = a.y + H / 2, x2 = b.x + B / 2 - 10, y2 = b.y - H / 2;
    svgStak("path", { d: "M" + x1 + " " + y1 + " C " + x1 + " " + (y1 + 60) + ", " + (x2 + 80) + " " + (y2 - 10) + ", " + x2 + " " + y2 }, g);
    merkiTexti(g, x1 - 8, y1 + 48, s[2], "haegri");
  });

  // Aukalínur (ætt frá Seifi, atburðir) – sveigðar línur á bak við spjöldin
  var aukalinur = T.aukalinur.map(function (t) {
    var a = p(t.fra), b = p(t.til);
    var g = teikna(lagAuka, [t.fra, t.til], "auka " + t.tegund);
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
    var bogi = Math.min(90, len * 0.25);
    var cx = mx - dy / len * bogi, cy = my + dx / len * bogi;
    svgStak("path", { d: "M" + a.x + " " + a.y + " Q " + cx + " " + cy + ", " + b.x + " " + b.y,
                      stroke: G.tegundir[t.tegund].litur }, g);
    var lx = 0.25 * a.x + 0.5 * cx + 0.25 * b.x, ly = 0.25 * a.y + 0.5 * cy + 0.25 * b.y;
    merkiTexti(g, lx, ly + 4, t.merki, "auka-merki");
    return { g: g, t: t };
  });

  // Spjöld persóna
  var annarFadir = {};
  T.fjolskyldur.forEach(function (f) { (f.annarFadir || []).forEach(function (id) { annarFadir[id] = true; }); });

  G.personur.forEach(function (per) {
    var g = teikna(lagSpjold, [per.id], "spjald-hnutur" + (per.aukapersona ? " aukapersona" : ""));
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", per.nafn);
    g.style.setProperty("--hus", stadaLitur(per.stadur));
    svgStak("rect", { x: per.x - B / 2, y: per.y - H / 2, width: B, height: H, rx: 9, "class": "kassi" }, g);
    svgStak("rect", { x: per.x - B / 2 + 1, y: per.y - H / 2 + 1, width: 6, height: H - 2, rx: 3, "class": "rond" }, g);
    var nafn = svgStak("text", { x: per.x + 3, y: per.y - 1, "text-anchor": "middle", "class": "nafn" + (per.tengipersona || per.aukapersona ? " skaletrad" : "") }, g);
    nafn.textContent = per.nafn;
    var hus = svgStak("text", { x: per.x + 3, y: per.y + 15, "text-anchor": "middle", "class": "hus" }, g);
    hus.textContent = per.aukapersona ? "til skýringar" : stadirEftirId[per.stadur].nafn;
    if (annarFadir[per.id]) {
      var st = svgStak("g", { "class": "stjarna" }, g);
      svgStak("circle", { cx: per.x + B / 2 - 4, cy: per.y - H / 2 + 4, r: 10 }, st);
      var tx = svgStak("text", { x: per.x + B / 2 - 4, y: per.y - H / 2 + 8, "text-anchor": "middle" }, st);
      tx.textContent = "★";
      svgStak("title", {}, st).textContent = "Faðir: Seifur";
    }
    g.addEventListener("click", function (e) { e.stopPropagation(); veljaPersonu(per.id); });
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); veljaPersonu(per.id); }
    });
  });
  svg.addEventListener("click", function () { hreinsa(); });

  // Hnappar fyrir aukalínur
  var kveikt = { seifsborn: false, afkomandi: false, saga: false };
  var hnappaNofn = { seifsborn: "Faðerni Seifs", afkomandi: "Ætt frá Seifi", saga: "Atburðir sögunnar" };
  var valinn = null;
  var sia = document.getElementById("sia");
  Object.keys(kveikt).forEach(function (k) {
    var lbl = document.createElement("label");
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.addEventListener("change", function () { kveikt[k] = cb.checked; uppfaeraAuka(); });
    var strik = document.createElement("span");
    strik.className = "strik";
    strik.style.background = G.tegundir[k].litur;
    lbl.appendChild(cb); lbl.appendChild(strik);
    lbl.appendChild(document.createTextNode(hnappaNofn[k]));
    sia.appendChild(lbl);
  });

  function uppfaeraAuka() {
    aukalinur.forEach(function (a) {
      var synd = kveikt[a.t.tegund] || (valinn && (a.t.fra === valinn || a.t.til === valinn));
      a.g.classList.toggle("falid", !synd);
    });
  }
  uppfaeraAuka();

  // Litaskýring staða
  var stadaLitir = document.getElementById("stada-litir");
  G.stadir.forEach(function (s) {
    var li = document.createElement("li");
    li.innerHTML = '<span class="punktur" style="background:' + stadaLitur(s.id) + '"></span>' + s.nafn;
    stadaLitir.appendChild(li);
  });

  // Draga fram hóp persóna; línur haldast skýrar ef þær snerta hópinn
  function dragaFram(hopur, adalId) {
    svg.classList.add("val");
    svg.querySelectorAll(".tre-hluti").forEach(function (el) {
      var ids = el.getAttribute("data-ids").split(" ");
      var inni = adalId ? ids.indexOf(adalId) >= 0 || (ids.length === 1 && hopur[ids[0]])
                        : ids.every(function (id) { return hopur[id]; });
      el.classList.toggle("dauft", !inni);
      el.classList.toggle("valid", ids.length === 1 && ids[0] === adalId);
    });
  }

  function lysaTengslum(t, fra) {
    var annar = p(t.fra === fra ? t.til : t.fra).nafn;
    var ut = t.fra === fra;
    function stor(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    switch (t.tegund) {
      case "foreldri": return (ut ? "Barn: " : "Foreldri: ") + annar + (t.merki ? " (" + t.merki + ")" : "");
      case "hjon": return "Maki: " + annar + (t.merki ? " (" + t.merki + ")" : "");
      case "systkini": return "Systkini: " + annar + (t.merki ? " – " + t.merki : "");
      case "stjup": return ut ? stor(t.merki) + " hjá: " + annar : stor(t.merki) + ": " + annar;
      case "afkomandi": return ut ? "Afkomandi: " + annar + " (" + t.merki + ")" : "Forfaðir: " + annar + " (" + t.merki + ")";
      case "saga": return ut ? stor(t.merki) + ": " + annar : stor(t.merki) + ": " + annar;
    }
    return annar;
  }

  var personaSpjald = document.getElementById("persona-upplysingar");
  var upphafsSpjald = personaSpjald.innerHTML;

  function veljaPersonu(id) {
    var per = p(id);
    valinn = id;
    var tengsl = G.tengsl.filter(function (t) { return t.fra === id || t.til === id; });
    var hopur = {}; hopur[id] = true;
    tengsl.forEach(function (t) { hopur[t.fra] = true; hopur[t.til] = true; });
    T.fjolskyldur.forEach(function (f) {
      if (f.born.indexOf(id) >= 0) f.born.forEach(function (b) { hopur[b] = true; });
    });
    dragaFram(hopur, id);
    uppfaeraAuka();

    var s = stadirEftirId[per.stadur];
    var html = '<span class="stadur-merki" style="color:' + stadaLitur(per.stadur) + '">' +
      s.nafn + (per.aukapersona ? " · til skýringar" : "") + "</span>" +
      "<h3>" + (per.tengipersona || per.aukapersona ? "<em>" + per.nafn + "</em>" : per.nafn) + "</h3>" +
      "<p>" + per.lysing + "</p>";
    if (per.aett) html += '<p class="aett">' + per.aett + "</p>";
    html += "<strong>Tengsl</strong><ul class=\"tengsl-listi\">" +
      tengsl.map(function (t) { return "<li>" + lysaTengslum(t, id) + "</li>"; }).join("") + "</ul>" +
      '<p><button class="flis" id="hreinsa">Sýna alla</button></p>';
    personaSpjald.innerHTML = html;
    document.getElementById("hreinsa").addEventListener("click", hreinsa);
  }

  function hreinsa() {
    valinn = null;
    svg.classList.remove("val");
    svg.querySelectorAll(".tre-hluti").forEach(function (el) { el.classList.remove("dauft", "valid"); });
    uppfaeraAuka();
    personaSpjald.innerHTML = upphafsSpjald;
  }

  // ---------- Kortið ----------

  var kort = L.map("kort", { scrollWheelZoom: false, zoomSnap: 0.25 });
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 8,
    attribution: "Tiles &copy; Esri &mdash; US National Park Service"
  }).addTo(kort);

  var allirPunktar = [];
  var stadurSpjald = document.getElementById("stadur-upplysingar");

  function merki(texti, bakgrunnur, laest) {
    return L.divIcon({
      className: "",
      html: '<div class="merki' + (laest ? " laest" : "") + '" style="' + (bakgrunnur ? "background:" + bakgrunnur : "") + '">' + texti + "</div>",
      iconSize: [30, 30], iconAnchor: [15, 15]
    });
  }

  G.stadir.forEach(function (s) {
    var m = L.marker([s.lat, s.lng], { icon: merki(s.nafn.charAt(0), stadaLitur(s.id)), title: s.nafn, keyboard: true })
      .addTo(kort)
      .bindTooltip(s.nafn, { permanent: true, direction: "right", offset: [16, 0], className: "merki-texti" });
    m.on("click", function () { synaStad(s); });
    allirPunktar.push([s.lat, s.lng]);
  });

  G.laestirStadir.forEach(function (s) {
    L.marker([s.lat, s.lng], { icon: merki("🔒", null, true), title: s.nafn + " (læst)" })
      .addTo(kort)
      .bindTooltip("?", { permanent: true, direction: "right", offset: [16, 0], className: "merki-texti" })
      .on("click", function () {
        stadurSpjald.innerHTML = "<h3>Læstur staður</h3><p>Þessi staður og fólkið sem honum tengist opnast í næsta hluta.</p>";
      });
    allirPunktar.push([s.lat, s.lng]);
  });

  function laga() {
    kort.invalidateSize();
    kort.fitBounds(allirPunktar, { paddingTopLeft: [30, 30], paddingBottomRight: [90, 30] });
  }
  laga();
  window.addEventListener("load", laga);
  var bidTimi;
  window.addEventListener("resize", function () { clearTimeout(bidTimi); bidTimi = setTimeout(laga, 200); });

  function synaStad(s) {
    var folk = G.personur.filter(function (p) { return p.stadur === s.id; });
    stadurSpjald.innerHTML =
      '<span class="stadur-merki" style="color:' + stadaLitur(s.id) + '">Staður</span>' +
      "<h3>" + s.nafn + "</h3><p>" + s.lysing + "</p>" +
      "<strong>Persónur</strong>" +
      '<ul class="personulisti">' + folk.map(function (per) {
        return '<li><button data-id="' + per.id + '">' + (per.tengipersona || per.aukapersona ? "<em>" + per.nafn + "</em>" : per.nafn) + "</button></li>";
      }).join("") + "</ul>";
    stadurSpjald.querySelectorAll("button[data-id]").forEach(function (b) {
      b.addEventListener("click", function () {
        veljaPersonu(b.getAttribute("data-id"));
        document.getElementById("net-titill").scrollIntoView({ behavior: "smooth" });
      });
    });
    // Draga fram fólk staðarins í ættartrénu
    var hopur = {};
    folk.forEach(function (per) { hopur[per.id] = true; });
    valinn = null;
    dragaFram(hopur, null);
    uppfaeraAuka();
  }

  // ---------- Lykilorð (staðgengill) ----------
  // ATH: Þetta er aðeins einföld hindrun í vafranum, ekki raunverulegt öryggi.
  // Allt efni á GitHub Pages er opinbert. Lykilorðið er geymt sem SHA-256 tætigildi.
  var LYKIL_TAETI = "8ac19add73ad824d6289af9231f5e18cba6fbf6724952d97f993c564661085c9";

  function taeta(str) {
    var gogn = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", gogn).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  document.getElementById("las-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var svar = document.getElementById("las-svar");
    var gildi = document.getElementById("lykilord").value.trim().toLowerCase();
    if (!window.crypto || !crypto.subtle) {
      svar.textContent = "Vafrinn styður ekki lykilorðsathugun (síðan þarf að vera á https).";
      return;
    }
    taeta(gildi).then(function (h) {
      if (h === LYKIL_TAETI) {
        try { sessionStorage.setItem("troja-opid", "1"); } catch (_) {}
        window.location.href = "framhald.html";
      } else {
        svar.textContent = "Rangt lykilorð. Reyndu aftur.";
      }
    });
  });
})();
