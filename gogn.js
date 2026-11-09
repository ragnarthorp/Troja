// Gögn fyrir síðuna: staðir, persónur og tengsl.

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
    { id: "ida", nafn: "Ídafjall", lat: 39.70, lng: 26.85, merkiAtt: "bottom",
      lysing: "Skógi vaxið fjall suðaustan við Tróju. Þar ólst París upp sem hirðir hjá Agelási, og þangað leiddi Hermes gyðjurnar þrjár til að París dæmdi á milli þeirra.",
      tengist: ["paris", "agelas", "hermes"] },
    { id: "krit", nafn: "Krít", lat: 35.30, lng: 25.16,
      lysing: "Stærsta eyja Grikklands. Í frásögn Stephens Fry fer Menelás þangað í útför – og skilur Helenu eftir í Spörtu þegar París er gestur hans.",
      tengist: ["menelas", "helena", "paris"] },
    { id: "ithaka", nafn: "Íþaka", lat: 38.37, lng: 20.72,
      lysing: "Lítil eyja í Jónahafi, ríki Laertesar og síðar Ódysseifs." }
  ],

  // Höf, sund og lönd – merkt á kortið án smells
  heiti: [
    { nafn: "Eyjahaf", lat: 38.4, lng: 25.0, haf: true },
    { nafn: "Miðjarðarhaf", lat: 35.4, lng: 21.4, haf: true },
    { nafn: "Marmarahaf", lat: 40.62, lng: 28.0, haf: true },
    { nafn: "Svartahaf", lat: 42.05, lng: 30.6, haf: true },
    { nafn: "Hellusund<br>(Dardanellasund)", lat: 40.62, lng: 25.75, haf: true, sund: true },
    { nafn: "Bospórussund", lat: 41.42, lng: 28.35, haf: true, sund: true },
    { nafn: "Grikkland", lat: 39.75, lng: 21.3 },
    { nafn: "Litla-Asía (Anatólía)<br>– nú Tyrkland", lat: 38.4, lng: 28.6 }
  ],
  // Siglingaleiðin úr Eyjahafi upp í Svartahaf
  siglingaleid: [
    [39.3, 25.6], [39.98, 26.15], [40.25, 26.55], [40.42, 26.75],
    [40.7, 27.6], [40.85, 28.6], [41.0, 29.0], [41.12, 29.06], [41.22, 29.12], [41.45, 29.4], [41.9, 30.0]
  ],


  personur: [
    // Guðirnir
    { id: "seifur", nafn: "Seifur", stadur: "olympos", x: 605, y: 50,
      lysing: "Sonur títananna Krónosar og Reu. Bróðir og eiginmaður Heru. Faðir Aþenu, Helenu og Polídefkesar, og Afródítu samkvæmt Hómer. Faðir Hermesar. Forfaðir Príamosar, Hektors, Agamemnons, Menelásar, Ódysseifs, Peleifs og Akkillesar." },
    { id: "hera", nafn: "Hera", stadur: "olympos", x: 760, y: 50,
      lysing: "Dóttir Krónosar og Reu. Systir og eiginkona Seifs. Stjúpmóðir Aþenu. Ól upp sædísina Þetisi." },
    { id: "eris", nafn: "Eris", stadur: "olympos", x: 1262, y: 50,
      lysing: "Gyðja sundrungar. Hún var ein guðanna ekki boðin í brúðkaup Þetisar og Peleifs og kastaði þangað gullepli með áletruninni „Te kalliste“ – „handa þeirri fegurstu“. Þaðan kemur orðið þrætuepli." },
    { id: "hermes", nafn: "Hermes", stadur: "olympos", x: 480, y: 180,
      aett: "Seifur → Hermes → Átólýkos → Antíkleia → Ódysseifur",
      lysing: "Sonur Seifs og dísarinnar Maíu. Sendiboði guðanna. Hann leiddi Heru, Aþenu og Afródítu til Parísar á Ídafjalli svo hann gæti dæmt á milli þeirra. Langafi Ódysseifs í gegnum Átólýkos." },
    { id: "athena", nafn: "Aþena", stadur: "olympos", x: 605, y: 180,
      lysing: "Dóttir Seifs og Metisar. Stökk fullvopnuð úr höfði Seifs. Hálfsystir Helenu og Polídefkesar." },
    { id: "afrodita", nafn: "Afródíta", stadur: "olympos", x: 730, y: 180,
      lysing: "Til eru tvær gerðir. Hjá Hesíódosi er hún fædd úr froðunni kringum Úranos og því af sömu kynslóð og Krónos. Hjá Hómer er hún dóttir Seifs og Díónu og þá hálfsystir Aþenu og Helenu. Gift Hefæstosi, syni Heru." },

    // Sparta
    { id: "leda", nafn: "Leda", stadur: "sparta", x: 345, y: 180,
      lysing: "Eiginkona Tindareifs. Móðir Helenu, Polídefkesar, Klítemnestru og Kastors." },
    { id: "tindareifur", nafn: "Tindareifur", stadur: "sparta", x: 215, y: 180,
      lysing: "Konungur í Spörtu, eiginmaður Ledu. Faðir Klítemnestru og Kastors, stjúpfaðir Helenu og Polídefkesar. Tengdafaðir Agamemnons og Menelásar. Bróðir Íkaríosar." },
    { id: "helena", nafn: "Helena", stadur: "sparta", x: 540, y: 310,
      lysing: "Dóttir Seifs og Ledu. Eiginkona Menelásar. Móðir Hermíónu. Systir Klítemnestru, Kastors og Polídefkesar. Fegursta kona heims – sú sem Afródíta lofaði París." },
    { id: "polidefkes", nafn: "Polídefkes", stadur: "sparta", x: 300, y: 310,
      lysing: "Sonur Seifs og Ledu, ódauðlegur. Tvíburabróðir Kastors – saman kallaðir Díoskúrarnir." },
    { id: "klitemnestra", nafn: "Klítemnestra", stadur: "sparta", x: 420, y: 310,
      lysing: "Dóttir Tindareifs og Ledu. Eiginkona Agamemnons. Móðir Ífigeníu, Elektru og Órestesar. Mágkona Helenu tvöfalt – bæði systir hennar og kona mágs hennar." },
    { id: "kastor", nafn: "Kastor", stadur: "sparta", x: 180, y: 310,
      lysing: "Sonur Tindareifs og Ledu, dauðlegur. Tvíburabróðir Polídefkesar." },

    { id: "ikarios", nafn: "Íkaríos", stadur: "sparta", x: 60, y: 180, aukapersona: true,
      lysing: "Bróðir Tindareifs og faðir Penelópu. Ekki á upphaflega listanum – sýndur til að skýra hvernig Ódysseifur tengist Spartverjum." },

    // Mýkena
    { id: "agamemnon", nafn: "Agamemnon", stadur: "mykena", x: 420, y: 440,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Agamemnon",
      lysing: "Sonur Atreifs. Bróðir Menelásar. Eiginmaður Klítemnestru. Faðir Ífigeníu, Elektru og Órestesar. Myrtur af Klítemnestru og Ægistosi, frænda sínum." },
    { id: "menelas", nafn: "Menelás", stadur: "mykena", x: 540, y: 440,
      aett: "Seifur → Tantalos → Pelops → Atreifur → Menelás",
      lysing: "Sonur Atreifs, bróðir Agamemnons. Eiginmaður Helenu og konungur í Spörtu í gegnum hjónabandið. Faðir Hermíónu." },

    // Íþaka
    { id: "odysseifur", nafn: "Ódysseifur", stadur: "ithaka", x: 60, y: 440,
      aett: "Seifur → Hermes → Átólýkos → Antíkleia → Ódysseifur",
      lysing: "Sonur Laertesar og Antíkleiu (í annarri gerð Sísýfosar). Barnabarnabarn Hermesar í gegnum Átólýkos, móðurafa sinn, og þar með afkomandi Seifs. Eiginmaður Penelópu, dóttur Íkaríosar, og þar með tengdur Helenu og Klítemnestru – Penelópa er bræðrungur þeirra. Faðir Telemakkosar. Einn biðla Helenu og upphafsmaður biðlaeiðsins." },

    { id: "penelopa", nafn: "Penelópa", stadur: "ithaka", x: 60, y: 310, aukapersona: true,
      lysing: "Dóttir Íkaríosar og eiginkona Ódysseifs. Bræðrungur Helenu, Klítemnestru, Kastors og Polídefkesar. Móðir Telemakkosar. Ekki á upphaflega listanum – sýnd til skýringar." },

    // Þessalía
    { id: "peleifur", nafn: "Peleifur", stadur: "thessalia", x: 1195, y: 180,
      aett: "Seifur → Ajakos → Peleifur",
      lysing: "Sonur Ajakosar og sonarsonur Seifs. Konungur í Phþíu í Þessalíu og eiginmaður Þetisar – einn fárra dauðlegra manna sem fékk gyðju fyrir konu. Allir guðirnir mættu í brúðkaupið, nema einn. Faðir Akkillesar." },
    { id: "thetis", nafn: "Þetis", stadur: "thessalia", x: 1330, y: 180,
      lysing: "Sædís, dóttir sjávarguðsins Nereifs. Alin upp af Heru. Seifur og Póseidon girntust hana báðir, en spáð var að hún myndi ala son sem yrði meiri en faðir hans. Því var hún gefin dauðlegum manni, Peleifi. Í brúðkaupi þeirra kastaði Eris gulleplinu. Hún dýfði syni sínum Akkillesi í ána Stýx til að gera hann ódauðlegan, en hællinn sem hún hélt um varð ekki fyrir vatninu. Bað Seif um að hjálpa Trójumönnum svo heiður Akkillesar yrði endurreistur." },

    { id: "akkilles", nafn: "Akkilles", stadur: "thessalia", x: 1262, y: 310, tengipersona: true,
      aett: "Seifur → Ajakos → Peleifur → Akkilles",
      lysing: "Sonur Þetisar og Peleifs, barnabarnabarn Seifs. Mesta hetja Grikkja. Nær ósæranlegur eftir að móðir hans dýfði honum í Stýx – nema á hælnum. Alinn upp af kentárnum Kíroni. Valdi stutt líf með eilífri frægð fremur en langa ævi. Reiði hans við Agamemnon er meginefni Ilíonskviðu. Drap Hektor til að hefna Patróklosar, vinar síns, en afhenti Príamosi líkið. Felldur af París með ör í hælinn. Faðir Neoptólemosar, sem kvæntist Hermíónu, dóttur Helenu." },

    // Trója
    { id: "priamos", nafn: "Príamos", stadur: "troja", x: 880, y: 180,
      aett: "Seifur → Dardanos → Erikþóníos → Trós → Ílos → Laómedon → Príamos",
      lysing: "Konungur í Tróju. Eiginmaður Hekúbu. Faðir Hektors og Parísar." },
    { id: "hekuba", nafn: "Hekúba", stadur: "troja", x: 1015, y: 180,
      lysing: "Drottning í Tróju, eiginkona Príamosar. Móðir Hektors og Parísar. Dreymdi að hún fæddi logandi kyndil." },
    { id: "hektor", nafn: "Hektor", stadur: "troja", x: 885, y: 310,
      lysing: "Sonur Príamosar og Hekúbu, bróðir Parísar. Fjarlægur afkomandi Seifs. Mesta hetja Trójumanna." },
    { id: "paris", nafn: "París", stadur: "troja", x: 760, y: 310, tengipersona: true,
      lysing: "Sonur Príamosar og Hekúbu. Borinn út sem ungbarn vegna draums Hekúbu og alinn upp af Agelási hjarðmanni. Dæmdi milli gyðjanna og tók Helenu til Tróju." },
    { id: "kassandra", nafn: "Kassandra", stadur: "troja", x: 1010, y: 310,
      lysing: "Dóttir Príamosar og Hekúbu, systir Hektors og Parísar. Apollon gaf henni spádómsgáfu en lagði á hana þá bölvun að enginn tryði henni. Þegar París birtist óvænt í Tróju sá hún strax hvert hann myndi leiða borgina." },
    { id: "deifobos", nafn: "Deífóbos", stadur: "troja", x: 1135, y: 310,
      lysing: "Sonur Príamosar og Hekúbu, bróðir Hektors, Parísar og Kassöndru – einn af fimmtíu sonum Príamosar. Reiddist þegar óþekktur hirðir, París, sigraði í leikjunum." },
    { id: "ojona", nafn: "Ójóna", stadur: "ida", x: 760, y: 440,
      lysing: "Fjalladís á Ídafjalli, dóttir fljótaguðs. Eiginkona Parísar meðan hann var enn hirðir. Hún hafði sjálf spádómsgáfu og vissi að hann myndi yfirgefa hana." },
    { id: "agelas", nafn: "Agelás", stadur: "troja", x: 885, y: 440,
      lysing: "Hjarðmaður á Ídafjalli. Átti að bera París út sem ungbarn en bjargaði honum og ól hann upp. Ekki blóðskyldur neinum á listanum. Sagði síðar frá uppruna Parísar." }
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
    { fra: "seifur", til: "hermes", tegund: "foreldri" },
    { fra: "priamos", til: "kassandra", tegund: "foreldri" },
    { fra: "priamos", til: "deifobos", tegund: "foreldri" },
    { fra: "hekuba", til: "kassandra", tegund: "foreldri" },
    { fra: "hekuba", til: "deifobos", tegund: "foreldri" },

    // Hjónabönd
    { fra: "seifur", til: "hera", tegund: "hjon" },
    { fra: "tindareifur", til: "leda", tegund: "hjon" },
    { fra: "agamemnon", til: "klitemnestra", tegund: "hjon" },
    { fra: "menelas", til: "helena", tegund: "hjon" },
    { fra: "afrodita", til: "paris", tegund: "saga", merki: "lofar Helenu" },
    { fra: "helena", til: "paris", tegund: "saga", merki: "Loforð Afródítu", samhverft: true },
    { fra: "priamos", til: "hekuba", tegund: "hjon" },
    { fra: "odysseifur", til: "penelopa", tegund: "hjon" },
    { fra: "peleifur", til: "thetis", tegund: "hjon" },
    { fra: "paris", til: "ojona", tegund: "hjon", merki: "meðan hann var hirðir" },
    { fra: "peleifur", til: "akkilles", tegund: "foreldri" },
    { fra: "thetis", til: "akkilles", tegund: "foreldri" },

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
    { fra: "hermes", til: "odysseifur", tegund: "afkomandi", merki: "um Átólýkos og Antíkleiu" },
    { fra: "seifur", til: "peleifur", tegund: "afkomandi", merki: "um Ajakos" },

    // Atburðir sögunnar
    { fra: "paris", til: "hera", tegund: "saga", merki: "dæmir" },
    { fra: "paris", til: "athena", tegund: "saga", merki: "dæmir" },
    { fra: "paris", til: "afrodita", tegund: "saga", merki: "velur" },
    { fra: "afrodita", til: "helena", tegund: "saga", merki: "lofar París" },
    { fra: "eris", til: "thetis", tegund: "saga", merki: "kastar gulleplinu í brúðkaup" },
    { fra: "eris", til: "peleifur", tegund: "saga", merki: "kastar gulleplinu í brúðkaup" },
    { fra: "hermes", til: "paris", tegund: "saga", merki: "leiðir gyðjurnar til" },
    { fra: "kassandra", til: "paris", tegund: "saga", merki: "spáir um" },
    { fra: "akkilles", til: "hektor", tegund: "saga", merki: "drepur" },
    { fra: "paris", til: "akkilles", tegund: "saga", merki: "drepur með ör í hælinn" },
    { fra: "agamemnon", til: "akkilles", tegund: "saga", merki: "tekur Bríseis frá" },
    { fra: "odysseifur", til: "helena", tegund: "saga", merki: "biðlar til" },
    { fra: "odysseifur", til: "menelas", tegund: "saga", merki: "leggur biðlaeiðinn fyrir" },
    { fra: "odysseifur", til: "agamemnon", tegund: "saga", merki: "leggur biðlaeiðinn fyrir" }
  ],

  // Uppsetning ættartrésins. Hnit persóna eru x/y hér að ofan (y = kynslóðaröð).
  tre: {
    // Foreldrar og börn þeirra – börnin raðast hlið við hlið undir einni línu.
    // "annarFadir" merkir börn sem eiga annan föður en þann sem sýndur er (Seifur).
    fjolskyldur: [
      { foreldrar: ["seifur"], born: ["hermes", "athena", "afrodita"], ovisst: ["afrodita"] },
      { foreldrar: ["tindareifur", "leda"], born: ["kastor", "polidefkes", "klitemnestra", "helena"],
        annarFadir: ["polidefkes", "helena"] },
      { foreldrar: ["priamos", "hekuba"], born: ["paris", "hektor", "kassandra", "deifobos"] },
      { foreldrar: ["ikarios"], born: ["penelopa"] },
      { foreldrar: ["peleifur", "thetis"], born: ["akkilles"] }
    ],
    hjon: [
      ["seifur", "hera"], ["tindareifur", "leda"], ["priamos", "hekuba"],
      ["klitemnestra", "agamemnon"], ["helena", "menelas"],
      ["penelopa", "odysseifur"], ["peleifur", "thetis"], ["paris", "ojona"]
    ],
    // Systkinahópar án foreldris á myndinni (sviga undir)
    hopar: [
      { born: ["kastor", "polidefkes"], merki: "tvíburar · Díoskúrarnir" },
      { born: ["agamemnon", "menelas"], merki: "synir Atreifs" }
    ],
    systkini: [["ikarios", "tindareifur", "bræður"]],
    // Punktalína milli persóna sem tengjast í sögunni, án þess að segja meira
    loford: [["helena", "paris", "Loforð Afródítu"]],
    // Lína frá persónu niður að hjónabandi (Eris og brúðkaupið)
    brudkaup: [{ fra: "eris", hjon: ["peleifur", "thetis"], merki: "gulleplið" }],
    fostur: [["agelas", "paris", "fóstri"], ["hera", "thetis", "ól upp"]],
    // Línur sem kveikt er á með hnöppum (eða birtast þegar persóna er valin)
    aukalinur: [
      { fra: "seifur", til: "polidefkes", tegund: "seifsborn", merki: "faðir" },
      { fra: "seifur", til: "helena", tegund: "seifsborn", merki: "faðir" },
      { fra: "seifur", til: "priamos", tegund: "afkomandi", merki: "um Dardanos" },
      { fra: "seifur", til: "agamemnon", tegund: "afkomandi", merki: "um Tantalos" },
      { fra: "seifur", til: "menelas", tegund: "afkomandi", merki: "um Tantalos" },
      { fra: "hermes", til: "odysseifur", tegund: "afkomandi", merki: "um Átólýkos" },
      { fra: "seifur", til: "peleifur", tegund: "afkomandi", merki: "um Ajakos" },
      { fra: "paris", til: "afrodita", tegund: "saga", merki: "dómur" },
      { fra: "afrodita", til: "helena", tegund: "saga", merki: "lofar París" },
      { fra: "hermes", til: "paris", tegund: "saga", merki: "leiðir gyðjurnar" },
      { fra: "akkilles", til: "hektor", tegund: "saga", merki: "drepur" },
      { fra: "paris", til: "akkilles", tegund: "saga", merki: "ör í hælinn" },
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
