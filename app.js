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

  // ---------- Ættarnetið ----------

  var stak = [];
  G.personur.forEach(function (p) {
    stak.push({
      group: "nodes",
      data: { id: p.id, label: p.nafn, litur: stadaLitur(p.stadur) },
      position: { x: p.x, y: p.y },
      classes: p.tengipersona ? "tengi" : ""
    });
  });
  G.tengsl.forEach(function (t, i) {
    stak.push({
      group: "edges",
      data: {
        id: "t" + i, source: t.fra, target: t.til,
        label: t.merki || "", litur: G.tegundir[t.tegund].litur
      },
      classes: t.tegund
    });
  });

  var texti = litur("texti");
  var flotur = litur("flotur");

  var cy = cytoscape({
    container: document.getElementById("net"),
    elements: stak,
    layout: { name: "preset", padding: 30 },
    minZoom: 0.3,
    maxZoom: 2.5,
    wheelSensitivity: 0.3,
    style: [
      { selector: "node", style: {
        "shape": "round-rectangle",
        "width": function (n) { return n.data("label").length * 11 + 28; }, "height": 40,
        "background-color": flotur,
        "border-width": 3, "border-color": "data(litur)",
        "label": "data(label)", "color": texti,
        "font-family": "'Source Sans 3', sans-serif", "font-size": 22, "font-weight": 600,
        "text-valign": "center", "text-halign": "center"
      }},
      { selector: "node.tengi", style: { "font-style": "italic" } },
      { selector: "edge", style: {
        "width": 2, "line-color": "data(litur)", "target-arrow-color": "data(litur)",
        "curve-style": "bezier", "opacity": 0.85,
        "label": "data(label)", "font-size": 15, "color": texti,
        "text-background-color": flotur, "text-background-opacity": 0.85, "text-background-padding": "2px",
        "text-rotation": "autorotate"
      }},
      { selector: "edge.foreldri", style: { "target-arrow-shape": "triangle" } },
      { selector: "edge.hjon", style: { "width": 4 } },
      { selector: "edge.systkini", style: { "line-style": "solid", "width": 3 } },
      { selector: "edge.stjup", style: { "line-style": "dashed", "target-arrow-shape": "triangle" } },
      { selector: "edge.afkomandi", style: { "line-style": "dotted", "target-arrow-shape": "triangle", "curve-style": "unbundled-bezier", "control-point-distances": 60 } },
      { selector: "edge.saga", style: { "line-style": "dashed", "target-arrow-shape": "vee", "width": 2.5 } },
      { selector: ".dauft", style: { "opacity": 0.12 } },
      { selector: "node.valid", style: { "border-width": 5, "background-color": "data(litur)", "color": "#fff" } },
      { selector: ".falid", style: { "display": "none" } }
    ]
  });

  // Fela fjarlæga afkomendur í byrjun til að netið sé læsilegra.
  var faldarTegundir = { afkomandi: true };

  function uppfaeraSiu() {
    cy.edges().forEach(function (e) {
      var tegund = e.classes().filter(function (c) { return G.tegundir[c]; })[0];
      e.toggleClass("falid", !!faldarTegundir[tegund]);
    });
  }

  var sia = document.getElementById("sia");
  Object.keys(G.tegundir).forEach(function (k) {
    var t = G.tegundir[k];
    var lbl = document.createElement("label");
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !faldarTegundir[k];
    cb.addEventListener("change", function () {
      faldarTegundir[k] = !cb.checked;
      uppfaeraSiu();
    });
    var strik = document.createElement("span");
    strik.className = "strik";
    strik.style.background = t.litur;
    lbl.appendChild(cb);
    lbl.appendChild(strik);
    lbl.appendChild(document.createTextNode(t.nafn));
    sia.appendChild(lbl);
  });
  uppfaeraSiu();

  // Litaskýring staða
  var stadaLitir = document.getElementById("stada-litir");
  G.stadir.forEach(function (s) {
    var li = document.createElement("li");
    li.innerHTML = '<span class="punktur" style="background:' + stadaLitur(s.id) + '"></span>' + s.nafn;
    stadaLitir.appendChild(li);
  });

  // Lýsing á einu tengslum frá sjónarhóli persónu
  function lysaTengslum(t, fra) {
    var annar = personurEftirId[t.fra === fra ? t.til : t.fra].nafn;
    var ut = t.fra === fra;
    switch (t.tegund) {
      case "foreldri": return (ut ? "Foreldri " : "Barn ") + annar + (t.merki ? " (" + t.merki + ")" : "");
      case "hjon": return "Gift(ur) " + annar + (t.merki ? " (" + t.merki + ")" : "");
      case "systkini": return "Systkini " + annar + (t.merki ? " – " + t.merki : "");
      case "stjup": return ut ? (t.merki.charAt(0).toUpperCase() + t.merki.slice(1)) + " " + annar
                              : annar + " er " + t.merki;
      case "maegdir": return ut ? "Mægðir við " + annar + " (" + t.merki + ")"
                                : "Mægðir við " + annar + " (" + annar + " er " + t.merki + ")";
      case "afkomandi": return ut ? "Forfaðir " + annar : "Afkomandi " + annar + " (" + t.merki + ")";
      case "saga": return ut ? t.merki.charAt(0).toUpperCase() + t.merki.slice(1) + ": " + annar
                             : annar + " – " + t.merki;
    }
    return annar;
  }

  var personaSpjald = document.getElementById("persona-upplysingar");
  var upphafsSpjald = personaSpjald.innerHTML;

  function veljaPersonu(id) {
    var p = personurEftirId[id];
    var hnutur = cy.getElementById(id);
    var hverfi = hnutur.closedNeighborhood();
    cy.elements().removeClass("valid").addClass("dauft");
    hverfi.removeClass("dauft");
    hnutur.addClass("valid");

    var s = stadirEftirId[p.stadur];
    var tengsl = G.tengsl.filter(function (t) { return t.fra === id || t.til === id; });
    var html = '<span class="stadur-merki" style="color:' + stadaLitur(p.stadur) + '">' + s.nafn + "</span>" +
      "<h3>" + (p.tengipersona ? "<em>" + p.nafn + "</em>" : p.nafn) + "</h3>" +
      "<p>" + p.lysing + "</p>";
    if (p.aett) html += '<p class="aett">' + p.aett + "</p>";
    html += "<strong>Tengsl á kortinu</strong><ul class=\"tengsl-listi\">" +
      tengsl.map(function (t) { return "<li>" + lysaTengslum(t, id) + "</li>"; }).join("") + "</ul>" +
      '<p><button class="flis" id="hreinsa">Sýna alla</button></p>';
    personaSpjald.innerHTML = html;
    document.getElementById("hreinsa").addEventListener("click", hreinsa);
  }

  function hreinsa() {
    cy.elements().removeClass("dauft valid");
    personaSpjald.innerHTML = upphafsSpjald;
  }

  cy.on("tap", "node", function (e) { veljaPersonu(e.target.id()); });
  cy.on("tap", function (e) { if (e.target === cy) hreinsa(); });

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
    cy.resize();
    cy.fit(undefined, 30);
    // Á mjóum skjá yrðu nöfnin ólæsileg; þysja frekar inn og leyfa að draga netið til.
    if (cy.zoom() < 0.5) cy.zoom({ level: 0.5, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
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
      '<ul class="personulisti">' + folk.map(function (p) {
        return '<li><button data-id="' + p.id + '">' + (p.tengipersona ? "<em>" + p.nafn + "</em>" : p.nafn) + "</button></li>";
      }).join("") + "</ul>";
    stadurSpjald.querySelectorAll("button[data-id]").forEach(function (b) {
      b.addEventListener("click", function () {
        veljaPersonu(b.getAttribute("data-id"));
        document.getElementById("net-titill").scrollIntoView({ behavior: "smooth" });
      });
    });
    // Draga fram fólk staðarins í netinu
    cy.elements().removeClass("valid").addClass("dauft");
    folk.forEach(function (p) { cy.getElementById(p.id).removeClass("dauft"); });
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
