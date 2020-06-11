# Mapping

instances

* http://lod.squirrel.link/data/limes/
* http://lod.squirrel.link/data/itinerarium-antonini/

classes

prefix: archsq: http://archaeoinformatics.link/ontology#

**general**

* `name` => `rdfs:label "name"`
  * `limesobject` => `rdfs:label "limesobject"`
  * `city` => `rdfs:label "city"`
* `typ` => `rdf:type archsq:{typ}`
  * `limescategory` => `rdf:type archsq:{limescategory}`
* `typ2` => `rdfs:comment "typ2"`
* `id` => `archsq:hasID "id"`
* `limestown` => `archsq:relatedToLocation "limestown"`
    * `county` => `archsq:relatedToLocation "county"`
* `limestownpart` => `archsq:relatedToLocationPart "limestownpart"`
* `roman_name` => `archsq:romanName "roman_name"`
* `group_id` => `archsq:groupID "group_id"`

allgemein `rdf:type` {...}

* http://archaeoinformatics.link/ontology#ItinerariumProvinciarumAntoniniAugusti
* http://archaeoinformatics.link/ontology#LimesDacicus
* http://archaeoinformatics.link/ontology#LimesGermaniaInferior
* http://archaeoinformatics.link/ontology#LimesMidlandsWalesCornwall
* http://archaeoinformatics.link/ontology#LimesMoesica
* http://archaeoinformatics.link/ontology#LimesNoricum
* http://archaeoinformatics.link/ontology#LimesPannoniaInferior
* http://archaeoinformatics.link/ontology#LimesPannoniaSuperior
* http://archaeoinformatics.link/ontology#LimesUpperGermanicRhaetian

**Moesica / Noricum / Pannonia/Inferior/Superior / GermaniaInferior / Dacicus / ORL**

* `typ` => `rdf:type archsq:{typ}`
  * Kastell = #MillitaryCamp | Legionslager = #LegionaryCamp | Burgus = #Burgus | Wachturm/Turm = #Watchtower

**Midlands/Wales**

* `typ` => `rdf:type archsq:LimesPart`

**ORL**

* `limestown` => map to Wikidata
* `limestownpart` => map to Wikidata

**ItinerariumAntoniniAugusti**

* `city` => map to Wikidata

**_lines (alle bis auf ItinerariumAntoniniAugusti)**

* `typ` => `rdf:type archsq:LimesRoad`
* `label` => `individuell`

**_lines (ItinerariumAntoniniAugusti)**

* `typ` => `rdf:type archsq:RomanRoad`
* `label` => `Itinerarium Antonini Augusti`

# CSVs

## Obergermanisch-Raetischer Limes

* http://www.deutsche-limeskommission.de/index.php?id=6&L=0&sz=13&sr=48.786795&sh=9.777356&L=0

## POIs

* https://tools.wmflabs.org/limesmap/app/db/pois.py
* https://tools.wmflabs.org/limesmap/app/web/#

## Antonine Itinerary

* Antonine Itinerary ist eine Karte aus dem 3. Jh.
* https://web.archive.org/web/20131216035218/http://www.roman-britain.org/antonine-itinerary-map.htm
* keineswegs nur Kastelle oder Staedte, sondern eher einen Mix

## Midlands, Wales, Cornwall

* "Midlands, Wales, Cornwall"
* https://docs.google.com/spreadsheets/d/1SHD79Ko275BrigRa-cEcLyJ1lXE7GHQOvrX4E2px6Ec/edit#gid=0

## LimesGermaniaInferior

* https://docs.google.com/spreadsheets/d/1SHD79Ko275BrigRa-cEcLyJ1lXE7GHQOvrX4E2px6Ec/edit#gid=0
