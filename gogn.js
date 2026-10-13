// Gögn fyrir inngangssíðuna: staðir, persónur og tengsl.
// Sonur Þetisar og Peleifs er
// viljandi ekki hér – þær bíða næsta hluta á bak við lykilorð.

window.TROJA = {
  stadir: [
    { id: "olympos", nafn: "Ólympsfjall", lat: 40.085, lng: 22.358,
      lysing: "Hæsta fjall Grikklands (2.918 m) og bústaður guðanna." },
    { id: "sparta", nafn: "Sparta", lat: 37.074, lng: 22.430,
      lysing: "Ríki Tindareifs í Lakóníu. Menelás varð þar konungur með því að kvænast Helenu." },
    { id: "mykena", nafn: "Mýkena", lat: 37.731, lng: 22.756,
      lysing: "Virkisborg Agamemnons í Argólis, voldugasta ríki Grikkja." },
    { id: "troja", nafn: "Trója", lat: 39.957, lng: 26.239,
      lysing: "Borg Príamosar við Hellusund, í norðvesturhluta Litlu-Asíu (nú Tyrkland)." },
    { id: "thessalia", nafn: "Þessalía", lat: 39.29, lng: 22.38,
      lysing: "Frjósöm slétta í Norður-Grikklandi, sunnan við Ólympsfjall. Þar ríkti Peleifur, í konungsríkinu Phþíu í suðurhluta Þessalíu." },
    { id: "ithaka", nafn: "Íþaka", lat: 38.37, lng: 20.72,
      lysing: "Lítil eyja í Jónahafi, ríki Laertesar og síðar Ódysseifs." }
  ],

  // Staðir sem verða opnaðir síðar – sýndir sem læstir á kortinu.
  laestirStadir: [
  ],

  personur: [
    // Guðirnir
    { id: "seifur", nafn: "Seifur", stadur: "olympos", x: 585, y: 50,
      lysing: "Sonur títananna Krónosar og Reu. Bróðir og eiginmaður Heru. Faðir Aþenu, Helenu og Polídefkesar, og Afródítu samkvæmt Hómer. Forfaðir Príamosar, Hektors, Agamemnons, Menelásar, Ódysseifs og Peleifs – og fleiri sem enn eru huldir." },
    { id: "hera", nafn: "Hera", stadur: "olympos", x: 735, y: 50,
      lysing: "Dóttir Krónosar og Reu. Systir og eiginkona Seifs. Stjúpmóðir Aþenu. Ól upp sædísina Þetisi." },
    { id: "athena", nafn: "Aþena", stadur: "olympos", x: 520, y: 180,
      lysing: "Dóttir Seifs og Metisar. Stökk fullvopnuð úr höfði Seifs. Hálfsystir Helenu og Polídefkesar." },
    { id: "afrodita", nafn: "Afródíta", stadur: "olympos", x: 650, y: 180,
      lysing: "Til eru tvær gerðir. Hjá Hesíódosi er hún fædd úr froðunni kringum Úranos og því af sömu kynslóð og Krónos. Hjá Hómer er hún dóttir Seifs og Díónu og þá hálfsystir Aþenu og Helenu. Gift Hefæstosi, syni Heru." },

    // Sparta
    { id: "leda", nafn: "Leda", stadur: "sparta", x: 370, y: 180,
      lysing: "Eiginkona Tindareifs. Móðir Helenu, Polídefkesar, Klítemnestru og Kastors." },
    { id: "tindareifur", nafn: "Tindareifur", stadur: "sparta", x: 230, y: 180,
      lysing: "Konungur í Spörtu, eiginmaður Ledu. Faðir Klítemnestru og Kastors, stjúpfaðir Helenu og Polídefkesar. Tengdafaðir Agamemnons og Menelásar. Bróðir Íkaríosar." },
    { id: "helena", nafn: "Helena", stadur: "sparta", x: 580, y: 310,
      lysing: "Dóttir Seifs og Ledu. Eiginkona Menelásar. Móðir Hermíónu. Systir Klítemnestru, Kastors og Polídefkesar. Fegursta kona heims – sú sem Afródíta lofaði París." },
    { id: "polidefkes", nafn: "Polídefkes", stadur: "sparta", x: 320, y: 310,
      lysing: "Sonur Seifs og Ledu, ódauðlegur. Tvíburabróðir Kastors – saman kallaðir Díoskúrarnir." },
    { id: "klitemnestra", nafn: "Klítemnestra", stadur: "sparta", x: 450, y: 310,
      lysing: "Dóttir Tindareifs og Ledu. Eiginkona Agamemnons. Móðir Ífigeníu, Elektru og Órestesar. Mágkona Helenu tvöfalt – bæði systir hennar og kona mágs hennar." },
    { id: "kastor", nafn: "Kastor", stadur: "sparta", x: 190, y: 310,
      lysing: "Sonur Tindareifs og Ledu, dauðlegur. Tvíburabróðir Polídefkesar." },

    { id: "ikarios", nafn: "Íkaríos", stadur: "sparta", x: 60, y: 180, aukapersona: true,
      lysing: "Bróðir Tindareifs og faðir Penelópu. Ekki á upphaflega listanum – sýndur til að skýra hvernig Ódysseifur tengist Spartverjum." },

    // Mýkena
    { id: "agamemnon", nafn: "Agamemnon", stadur: "mykena", x: 450, y: 440,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Agamemnon",
      lysing: "Sonur Atreifs. Bróðir Menelásar. Eiginmaður Klítemnestru. Faðir Ífigeníu, Elektru og Órestesar. Myrtur af Klítemnestru og Ægistosi, frænda sínum." },
    { id: "menelas", nafn: "Menelás", stadur: "mykena", x: 580, y: 440,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Menelás",
      lysing: "Sonur Atreifs, bróðir Agamemnons. Eiginmaður Helenu og konungur í Spörtu í gegnum hjónabandið. Faðir Hermíónu." },

    // Íþaka
    { id: "odysseifur", nafn: "Ódysseifur", stadur: "ithaka", x: 60, y: 440,
      aett: "Seifur → Hermes → Átólýkos → Antíkleia → Ódysseifur",
      lysing: "Sonur Laertesar og Antíkleiu (í annarri gerð Sísýfosar). Barnabarnabarn Hermesar í gegnum Átólýkos, móðurafa sinn, og þar með afkomandi Seifs. Eiginmaður Penelópu, dóttur Íkaríosar, og þar með tengdur Helenu og Klítemnestru – Penelópa er bræðrungur þeirra. Faðir Telemakkosar. Einn biðla Helenu og upphafsmaður biðlaeiðsins." },

    { id: "penelopa", nafn: "Penelópa", stadur: "ithaka", x: 60, y: 310, aukapersona: true,
      lysing: "Dóttir Íkaríosar og eiginkona Ódysseifs. Bræðrungur Helenu, Klítemnestru, Kastors og Polídefkesar. Móðir Telemakkosar. Ekki á upphaflega listanum – sýnd til skýringar." },

    // Þessalía
    { id: "peleifur", nafn: "Peleifur", stadur: "thessalia", x: 1110, y: 180,
      aett: "Seifur → Ajakos → Peleifur",
      lysing: "Sonur Ajakosar og sonarsonur Seifs. Konungur í Phþíu í Þessalíu og eiginmaður Þetisar – einn fárra dauðlegra manna sem fékk gyðju fyrir konu. Allir guðirnir mættu í brúðkaupið, nema einn." },
    { id: "thetis", nafn: "Þetis", stadur: "thessalia", x: 1250, y: 180,
      lysing: "Sædís, dóttir sjávarguðsins Nereifs. Alin upp af Heru. Seifur og Póseidon girntust hana báðir, en spáð var að hún myndi ala son sem yrði meiri en faðir hans. Því var hún gefin dauðlegum manni, Peleifi. Í brúðkaupi þeirra kastaði Eris gulleplinu." },

    // Trója
    { id: "priamos", nafn: "Príamos", stadur: "troja", x: 820, y: 180,
      aett: "Seifur → Dardanos → Erikþóníos → Trós → Ílos → Laómedon → Príamos",
      lysing: "Konungur í Tróju. Eiginmaður Hekúbu. Faðir Hektors og Parísar." },
    { id: "hekuba", nafn: "Hekúba", stadur: "troja", x: 960, y: 180,
      lysing: "Drottning í Tróju, eiginkona Príamosar. Móðir Hektors og Parísar. Dreymdi að hún fæddi logandi kyndil." },
    { id: "hektor", nafn: "Hektor", stadur: "troja", x: 960, y: 310,
      lysing: "Sonur Príamosar og Hekúbu, bróðir Parísar. Fjarlægur afkomandi Seifs. Mesta hetja Trójumanna." },
    { id: "paris", nafn: "París", stadur: "troja", x: 820, y: 310, tengipersona: true,
      lysing: "Sonur Príamosar og Hekúbu. Borinn út sem ungbarn vegna draums Hekúbu og alinn upp af Agelási hjarðmanni. Dæmdi milli gyðjanna og tók Helenu til Tróju." },
    { id: "agelas", nafn: "Agelás", stadur: "troja", x: 820, y: 440,
      lysing: "Hjarðmaður. Ekki blóðskyldur neinum á listanum. Fóstri Parísar." }
  ],

  // tegund: foreldri | hjon | systkini | stjup | afkomandi | saga
  tengsl: [
    // Foreldrar → börn
    { fra: "seifur", til: "athena", tegund: "foreldri" },
    { fra: "seifur", til: "helena", tegund: "foreldri" },
    { fra: "seifur", til: "polidefkes", tegund: "foreldri" },
    { fra: "seifur", til: "afrodita", tegund: "foreldri", merki: "skv. Hómer" },
    { fra: "leda", til: "helena", tegund: "foreldri" },
    { fra: "leda", til: "polidefkes", tegund: "foreldri" },
    { fra: "leda", til: "klitemnestra", tegund: "foreldri" },
    { fra: "leda", til: "kastor", tegund: "foreldri" },
    { fra: "tindareifur", til: "klitemnestra", tegund: "foreldri" },
    { fra: "tindareifur", til: "kastor", tegund: "foreldri" },
    { fra: "priamos", til: "hektor", tegund: "foreldri" },
    { fra: "priamos", til: "paris", tegund: "foreldri" },
    { fra: "hekuba", til: "hektor", tegund: "foreldri" },
    { fra: "hekuba", til: "paris", tegund: "foreldri" },
    { fra: "ikarios", til: "penelopa", tegund: "foreldri" },

    // Hjónabönd
    { fra: "seifur", til: "hera", tegund: "hjon" },
    { fra: "tindareifur", til: "leda", tegund: "hjon" },
    { fra: "agamemnon", til: "klitemnestra", tegund: "hjon" },
    { fra: "menelas", til: "helena", tegund: "hjon" },
    { fra: "afrodita", til: "paris", tegund: "saga", merki: "lofar Helenu" },
    { fra: "helena", til: "paris", tegund: "saga", merki: "loforð Afródítu" },
    { fra: "priamos", til: "hekuba", tegund: "hjon" },
    { fra: "odysseifur", til: "penelopa", tegund: "hjon" },
    { fra: "peleifur", til: "thetis", tegund: "hjon" },

    // Systkini sem ekki sjást í gegnum sameiginlegt foreldri á kortinu
    { fra: "kastor", til: "polidefkes", tegund: "systkini", merki: "tvíburar" },
    { fra: "agamemnon", til: "menelas", tegund: "systkini", merki: "synir Atreifs" },
    { fra: "ikarios", til: "tindareifur", tegund: "systkini", merki: "bræður" },

    // Stjúp- og fósturtengsl
    { fra: "tindareifur", til: "helena", tegund: "stjup", merki: "stjúpfaðir" },
    { fra: "tindareifur", til: "polidefkes", tegund: "stjup", merki: "stjúpfaðir" },
    { fra: "hera", til: "athena", tegund: "stjup", merki: "stjúpmóðir" },
    { fra: "agelas", til: "paris", tegund: "stjup", merki: "fóstri" },
    { fra: "hera", til: "thetis", tegund: "stjup", merki: "fóstra" },

    // Fjarlæg ætt frá Seifi
    { fra: "seifur", til: "agamemnon", tegund: "afkomandi", merki: "um Tantalos, Pelops, Atreif" },
    { fra: "seifur", til: "menelas", tegund: "afkomandi", merki: "um Tantalos, Pelops, Atreif" },
    { fra: "seifur", til: "priamos", tegund: "afkomandi", merki: "um Dardanos … Laómedon" },
    { fra: "seifur", til: "odysseifur", tegund: "afkomandi", merki: "um Hermes og Átólýkos" },
    { fra: "seifur", til: "peleifur", tegund: "afkomandi", merki: "um Ajakos" },

    // Atburðir sögunnar
    { fra: "paris", til: "hera", tegund: "saga", merki: "dómur" },
    { fra: "paris", til: "athena", tegund: "saga", merki: "dómur" },
    { fra: "paris", til: "afrodita", tegund: "saga", merki: "velur" },
    { fra: "afrodita", til: "helena", tegund: "saga", merki: "lofar París" },
    { fra: "odysseifur", til: "helena", tegund: "saga", merki: "biðill" },
    { fra: "odysseifur", til: "menelas", tegund: "saga", merki: "biðlaeiðurinn" },
    { fra: "odysseifur", til: "agamemnon", tegund: "saga", merki: "biðlaeiðurinn" }
  ],

  // Uppsetning ættartrésins. Hnit persóna eru x/y hér að ofan (y = kynslóðaröð).
  tre: {
    // Foreldrar og börn þeirra – börnin raðast hlið við hlið undir einni línu.
    // "annarFadir" merkir börn sem eiga annan föður en þann sem sýndur er (Seifur).
    fjolskyldur: [
      { foreldrar: ["seifur"], born: ["athena", "afrodita"], ovisst: ["afrodita"] },
      { foreldrar: ["tindareifur", "leda"], born: ["kastor", "polidefkes", "klitemnestra", "helena"],
        annarFadir: ["polidefkes", "helena"] },
      { foreldrar: ["priamos", "hekuba"], born: ["paris", "hektor"] },
      { foreldrar: ["ikarios"], born: ["penelopa"] }
    ],
    hjon: [
      ["seifur", "hera"], ["tindareifur", "leda"], ["priamos", "hekuba"],
      ["klitemnestra", "agamemnon"], ["helena", "menelas"],
      ["penelopa", "odysseifur"], ["peleifur", "thetis"]
    ],
    // Systkinahópar án foreldris á myndinni (sviga undir)
    hopar: [
      { born: ["kastor", "polidefkes"], merki: "tvíburar · Díoskúrarnir" },
      { born: ["agamemnon", "menelas"], merki: "synir Atreifs" }
    ],
    systkini: [["ikarios", "tindareifur", "bræður"]],
    // Punktalína milli persóna sem tengjast í sögunni, án þess að segja meira
    loford: [["helena", "paris", "Loforð Afródítu"]],
    fostur: [["agelas", "paris", "fóstri"], ["hera", "thetis", "ól upp"]],
    // Línur sem kveikt er á með hnöppum (eða birtast þegar persóna er valin)
    aukalinur: [
      { fra: "seifur", til: "polidefkes", tegund: "seifsborn", merki: "faðir" },
      { fra: "seifur", til: "helena", tegund: "seifsborn", merki: "faðir" },
      { fra: "seifur", til: "priamos", tegund: "afkomandi", merki: "um Dardanos" },
      { fra: "seifur", til: "agamemnon", tegund: "afkomandi", merki: "um Tantalos" },
      { fra: "seifur", til: "menelas", tegund: "afkomandi", merki: "um Tantalos" },
      { fra: "seifur", til: "odysseifur", tegund: "afkomandi", merki: "um Hermes" },
      { fra: "seifur", til: "peleifur", tegund: "afkomandi", merki: "um Ajakos" },
      { fra: "paris", til: "afrodita", tegund: "saga", merki: "dómur" },
      { fra: "afrodita", til: "helena", tegund: "saga", merki: "lofar París" },
      { fra: "odysseifur", til: "helena", tegund: "saga", merki: "biðill" },
      { fra: "odysseifur", til: "agamemnon", tegund: "saga", merki: "biðlaeiðurinn" }
    ]
  },

  tegundir: {
    foreldri: { nafn: "Foreldri → barn", litur: "#8a5a2b" },
    hjon:     { nafn: "Hjónaband", litur: "#b23a48" },
    systkini: { nafn: "Systkini", litur: "#2f7a6b" },
    stjup:    { nafn: "Stjúp / fóstur", litur: "#7a6aa8" },
    seifsborn:{ nafn: "Faðir er Seifur", litur: "#c79a1e" },
    afkomandi:{ nafn: "Fjarlægur afkomandi", litur: "#9a8f7a" },
    saga:     { nafn: "Atburður í sögunni", litur: "#c98a00" }
  }
};
