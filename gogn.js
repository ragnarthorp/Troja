// Gögn fyrir inngangssíðuna: staðir, persónur og tengsl.
// Persónur frá Phþíu (Þetis, Peleifur, Akkilles) eru
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
    { id: "ithaka", nafn: "Íþaka", lat: 38.37, lng: 20.72,
      lysing: "Lítil eyja í Jónahafi, ríki Laertesar og síðar Ódysseifs." }
  ],

  // Staðir sem verða opnaðir síðar – sýndir sem læstir á kortinu.
  laestirStadir: [
    { id: "fthia", nafn: "Phþía", lat: 39.29, lng: 22.38 }
  ],

  personur: [
    // Guðirnir
    { id: "seifur", nafn: "Seifur", stadur: "olympos", x: 470, y: 0,
      lysing: "Sonur títananna Krónosar og Reu. Bróðir og eiginmaður Heru. Faðir Aþenu, Helenu og Polídefkesar, og Afródítu samkvæmt Hómer. Forfaðir Príamosar, Hektors, Agamemnons, Menelásar og Ódysseifs – og fleiri sem enn eru huldir." },
    { id: "hera", nafn: "Hera", stadur: "olympos", x: 680, y: 0,
      lysing: "Dóttir Krónosar og Reu. Systir og eiginkona Seifs. Stjúpmóðir Aþenu." },
    { id: "athena", nafn: "Aþena", stadur: "olympos", x: 200, y: 0,
      lysing: "Dóttir Seifs og Metisar. Stökk fullvopnuð úr höfði Seifs. Hálfsystir Helenu og Polídefkesar." },
    { id: "afrodita", nafn: "Afródíta", stadur: "olympos", x: 900, y: 0,
      lysing: "Til eru tvær gerðir. Hjá Hesíódosi er hún fædd úr froðunni kringum Úranos og því af sömu kynslóð og Krónos. Hjá Hómer er hún dóttir Seifs og Díónu og þá hálfsystir Aþenu og Helenu. Gift Hefæstosi, syni Heru." },

    // Sparta
    { id: "leda", nafn: "Leda", stadur: "sparta", x: 290, y: 150,
      lysing: "Eiginkona Tindareifs. Móðir Helenu, Polídefkesar, Klítemnestru og Kastors." },
    { id: "tindareifur", nafn: "Tindareifur", stadur: "sparta", x: 60, y: 150,
      lysing: "Konungur í Spörtu, eiginmaður Ledu. Faðir Klítemnestru og Kastors, stjúpfaðir Helenu og Polídefkesar. Tengdafaðir Agamemnons og Menelásar. Bróðir Íkaríosar." },
    { id: "helena", nafn: "Helena", stadur: "sparta", x: 800, y: 300,
      lysing: "Dóttir Seifs og Ledu. Eiginkona Menelásar, síðar Parísar. Móðir Hermíónu. Systir Klítemnestru, Kastors og Polídefkesar. Tengdadóttir Príamosar og Hekúbu, mágkona Hektors." },
    { id: "polidefkes", nafn: "Polídefkes", stadur: "sparta", x: 110, y: 300,
      lysing: "Sonur Seifs og Ledu, ódauðlegur. Tvíburabróðir Kastors – saman kallaðir Díoskúrarnir." },
    { id: "klitemnestra", nafn: "Klítemnestra", stadur: "sparta", x: 300, y: 300,
      lysing: "Dóttir Tindareifs og Ledu. Eiginkona Agamemnons. Móðir Ífigeníu, Elektru og Órestesar. Mágkona Helenu tvöfalt – bæði systir hennar og kona mágs hennar." },
    { id: "kastor", nafn: "Kastor", stadur: "sparta", x: -60, y: 300,
      lysing: "Sonur Tindareifs og Ledu, dauðlegur. Tvíburabróðir Polídefkesar." },

    // Mýkena
    { id: "agamemnon", nafn: "Agamemnon", stadur: "mykena", x: 480, y: 300,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Agamemnon",
      lysing: "Sonur Atreifs. Bróðir Menelásar. Eiginmaður Klítemnestru. Faðir Ífigeníu, Elektru og Órestesar. Myrtur af Klítemnestru og Ægistosi, frænda sínum." },
    { id: "menelas", nafn: "Menelás", stadur: "mykena", x: 650, y: 300,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Menelás",
      lysing: "Sonur Atreifs, bróðir Agamemnons. Eiginmaður Helenu og konungur í Spörtu í gegnum hjónabandið. Faðir Hermíónu." },

    // Íþaka
    { id: "odysseifur", nafn: "Ódysseifur", stadur: "ithaka", x: -170, y: 150,
      aett: "Seifur → Hermes → Átólýkos → Antíkleia → Ódysseifur",
      lysing: "Sonur Laertesar og Antíkleiu (í annarri gerð Sísýfosar). Barnabarnabarn Hermesar í gegnum Átólýkos, móðurafa sinn, og þar með afkomandi Seifs. Eiginmaður Penelópu, dóttur Íkaríosar, og þar með tengdur Helenu og Klítemnestru – Penelópa er bræðrungur þeirra. Faðir Telemakkosar. Einn biðla Helenu og upphafsmaður biðlaeiðsins." },

    // Trója
    { id: "priamos", nafn: "Príamos", stadur: "troja", x: 940, y: 150,
      aett: "Seifur → Dardanos → Erikþóníos → Trós → Ílos → Laómedon → Príamos",
      lysing: "Konungur í Tróju. Eiginmaður Hekúbu. Faðir Hektors og Parísar." },
    { id: "hekuba", nafn: "Hekúba", stadur: "troja", x: 1110, y: 150,
      lysing: "Drottning í Tróju, eiginkona Príamosar. Móðir Hektors og Parísar. Dreymdi að hún fæddi logandi kyndil." },
    { id: "hektor", nafn: "Hektor", stadur: "troja", x: 1100, y: 300,
      lysing: "Sonur Príamosar og Hekúbu, bróðir Parísar. Mágur Helenu. Fjarlægur afkomandi Seifs. Mesta hetja Trójumanna." },
    { id: "paris", nafn: "París", stadur: "troja", x: 950, y: 300, tengipersona: true,
      lysing: "Sonur Príamosar og Hekúbu. Borinn út sem ungbarn vegna draums Hekúbu og alinn upp af Agelási hjarðmanni. Dæmdi milli gyðjanna og tók Helenu til Tróju." },
    { id: "agelas", nafn: "Agelás", stadur: "troja", x: 1250, y: 220,
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

    // Hjónabönd
    { fra: "seifur", til: "hera", tegund: "hjon" },
    { fra: "tindareifur", til: "leda", tegund: "hjon" },
    { fra: "agamemnon", til: "klitemnestra", tegund: "hjon" },
    { fra: "menelas", til: "helena", tegund: "hjon" },
    { fra: "helena", til: "paris", tegund: "hjon", merki: "síðar" },
    { fra: "priamos", til: "hekuba", tegund: "hjon" },

    // Systkini sem ekki sjást í gegnum sameiginlegt foreldri á kortinu
    { fra: "kastor", til: "polidefkes", tegund: "systkini", merki: "tvíburar" },
    { fra: "agamemnon", til: "menelas", tegund: "systkini", merki: "Atreifssynir" },

    // Stjúp- og fósturtengsl
    { fra: "tindareifur", til: "helena", tegund: "stjup", merki: "stjúpfaðir" },
    { fra: "tindareifur", til: "polidefkes", tegund: "stjup", merki: "stjúpfaðir" },
    { fra: "hera", til: "athena", tegund: "stjup", merki: "stjúpmóðir" },
    { fra: "agelas", til: "paris", tegund: "stjup", merki: "fóstri" },

    // Fjarlæg ætt frá Seifi
    { fra: "seifur", til: "agamemnon", tegund: "afkomandi", merki: "um Tantalos, Pelops, Atreif" },
    { fra: "seifur", til: "menelas", tegund: "afkomandi", merki: "um Tantalos, Pelops, Atreif" },
    { fra: "seifur", til: "priamos", tegund: "afkomandi", merki: "um Dardanos … Laómedon" },
    { fra: "seifur", til: "odysseifur", tegund: "afkomandi", merki: "um Hermes og Átólýkos" },

    // Mægðir í gegnum Penelópu, dóttur Íkaríosar bróður Tindareifs
    { fra: "tindareifur", til: "odysseifur", tegund: "maegdir", merki: "föðurbróðir Penelópu" },

    // Atburðir sögunnar
    { fra: "paris", til: "hera", tegund: "saga", merki: "dómur" },
    { fra: "paris", til: "athena", tegund: "saga", merki: "dómur" },
    { fra: "paris", til: "afrodita", tegund: "saga", merki: "velur" },
    { fra: "afrodita", til: "helena", tegund: "saga", merki: "lofar París" },
    { fra: "odysseifur", til: "helena", tegund: "saga", merki: "biðill" },
    { fra: "odysseifur", til: "menelas", tegund: "saga", merki: "biðlaeiðurinn" },
    { fra: "odysseifur", til: "agamemnon", tegund: "saga", merki: "biðlaeiðurinn" }
  ],

  tegundir: {
    foreldri: { nafn: "Foreldri → barn", litur: "#8a5a2b" },
    hjon:     { nafn: "Hjónaband", litur: "#b23a48" },
    systkini: { nafn: "Systkini", litur: "#2f7a6b" },
    stjup:    { nafn: "Stjúp / fóstur", litur: "#7a6aa8" },
    maegdir:  { nafn: "Mægðir", litur: "#c26a8a" },
    afkomandi:{ nafn: "Fjarlægur afkomandi", litur: "#9a8f7a" },
    saga:     { nafn: "Atburður í sögunni", litur: "#c98a00" }
  }
};
