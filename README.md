# Persónur Trójustríðsins

Gagnvirkur vefur um persónur og ættartengsl í sögnunum um Trójustríðið.

- `index.html` – inngangssíða með korti (Ólympsfjall, Sparta, Mýkena, Íþaka, Trója) og gagnvirku ættarneti.
- `framhald.html` – staðgengill fyrir næsta hluta (Phþía), opnast með lykilorði.
- `gogn.js` – allar persónur, staðir og tengsl. Bættu við eða breyttu hér.
- `app.js` – kort (Leaflet) og ættarnet (Cytoscape.js).

## Birting
Kveiktu á GitHub Pages (Settings → Pages → Deploy from branch) og veldu greinina og `/ (root)`.

## Lykilorð
Lykilorðið er geymt sem SHA-256 tætigildi í `app.js` (`LYKIL_TAETI`). Til að breyta því:

```sh
printf 'nyttlykilord' | sha256sum
```

Athugið: þetta er aðeins hindrun í vafranum. Allar skrár á GitHub Pages eru opinberar,
þannig að efni sem á að vera raunverulega leynt má ekki liggja í þessu repoi.
