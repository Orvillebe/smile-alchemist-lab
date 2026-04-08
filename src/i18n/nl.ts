import type { Translations } from "./types";

const INDIGO_WHY =
  "Productie in de EU. De waarde van weten hoe je dingen maakt. Herstellen in plaats van vervangen. Producten die meegaan.";

export const nl: Translations = {
  nav: {
    who: "Wie",
    ourWork: "Ons werk",
    ourProcess: "Ons proces",
    contact: "Contact",
  },
  hero: {
    label: "Product Design & Engineering",
    line1: "Ontwerpkeuzes zijn nooit neutraal.",
    line2: "Wij zijn jouw co-piloot zodat je product deel wordt van de oplossing, niet het probleem.",
    body: "Twee ingenieurs uit België die modulaire, herstelbare fysieke producten ontwikkelen op het snijvlak van circulariteit en technische haalbaarheid. Van concept tot productie.",
  },
  intro: {
    label: "Wat je van ons kan verwachten",
    heading:
      "Wij ontwerpen en engineeren fysieke producten. Van eerste probleemstelling tot prototyping en productierijp ontwerp.",
    body: "Mechanische engineering, materiaalkeuze, design for manufacturing, functionele prototyping, 3D-modellering en CAD/CAM. Voor bedrijven waar circulariteit, modulariteit of technische haalbaarheid centraal staan in de opdracht.",
  },
  process: {
    label: "Hoe we werken",
    heading: "Drie fases, één methode.",
    steps: [
      {
        n: "01",
        title: "Ontleden",
        desc: "Elk project begint bij het kernprobleem. We pellen aannames weg tot we weten wat er echt opgelost moet worden. We hebben niet alles eerder gedaan, en dat is normaal. We ontwikkelen namelijk nieuwe producten. Als we het al eerder hadden gedaan, was er niks nieuws aan. Wat de klant ons kan uitleggen zou zot zijn om zelf te gaan uitzoeken. Dus daar beginnen we. Daarna doen we de rest.",
      },
      {
        n: "02",
        title: "Ontwerpen",
        desc: "Technisch, functioneel en esthetisch tegelijk. Niet na elkaar. De oplossing moet aan alle drie voldoen, of ze voldoet niet. Dat brengt trade-offs met zich mee, en die verzwijgen we niet. Mooi ontwerpen is belangrijk. Maar we maken zelf genoeg om te weten wat er gebeurt als vorm wint van techniek: het wordt duur, het wordt fragiel, of het wordt allebei.",
      },
      {
        n: "03",
        title: "Ontwikkelen",
        desc: "Van prototype tot productie. We blijven erbij tot het maakbaar en schaalbaar is. Een model dat werkt op een scherm is makkelijk. Wij gaan door een hele reeks tussentijdse prototypes, zoeken steeds een manier om te testen, en draaien het liefst zelf de nulserie mee. Pas als het van een lijn rolt en nog steeds klopt, zijn we klaar.",
      },
    ],
    methodLabel: "Methode",
    methodBody:
      "Binnen elke fase maken, testen en leren we iteratief. Het resultaat bepaalt de volgende stap.",
    methodLink: "Meer over ons proces →",
    cycleLabels: ["MAAK", "TEST", "LEER"],
  },
  collaboration: {
    label: "De samenwerking",
    heading:
      'We werken met jou zoals een <green>co-piloot</green> met een piloot. Je geeft ons geen probleem en krijgt om de drie weken een update. Jij zit in ons proces, en wij in dat van jou. Zo groeien zowel het project als jouw eigen inzicht in hetzelfde tempo.',
    copilot: "co-piloot",
    body: "Waar mogelijk een dag per week bij jou op locatie. Dit is geen beleefdheidsbezoek. Het versterkt de communicatie, verscherpt beslissingen en zorgt dat er niets verloren gaat tussen vergaderingen.",
  },
  people: {
    label: "De mensen",
    heading: "De mensen die de presentatie doen zijn de mensen die het probleem oplossen.",
    body: "Geen overdracht. Geen juniorteam achter de schermen. Gewoon twee mensen. Bewust maximaal vier projecten tegelijk. De ingenieurs waarmee je praat zijn de ingenieurs die het werk doen.",
  },
  studio: {
    label: "De mensen",
    heading: "De mensen die de presentatie doen zijn de mensen die het probleem oplossen.",
    subtitle: "Geen overdracht. Geen juniorteam achter de schermen.",
    an: {
      name: "An Pirlot",
      role: "Software-ingenieur die productietechnoloog werd",
      bio: "Ze studeerde software engineering aan de KU Leuven en ging daarna terug voor productontwerp en manufacturing, omdat software haar het analytisch kader gaf maar ze het fysieke product nodig had. Ze ontwerpt, modelleert, doet FEA en bouwt prototypes. Als een tool niet bestaat, maakt ze het. Als een oplossing niet bestaat in het domein waar ze in werkt, vindt ze er een in een ander domein en maakt ze het passend.",
      stuck: 'Als ze vastzit, vraagt ze zich af: "Wat zou the Doctor doen?"',
    },
    vincent: {
      name: "Vincent Ramaekers",
      role: "Werktuigkundig ingenieur met een decennium ervaring",
      bio: "Een decennium productontwerp, 3D-modellering, FEA-analyse, prototyping en design for manufacturing. Hij heeft de faalwijzen gezien, niet één keer, niet in theorie, maar herhaaldelijk doorheen jaren praktijk. Hij kan elke constraint, elke optie, elke onderlinge afhankelijkheid van een complex project in zijn hoofd houden en er direct mee werken.",
      stuck: 'Als hij vastzit, vraagt hij zich af: "Wat zou Captain Picard doen?"',
    },
    together:
      "Samen: zij ziet dwars door onderwerpen heen naar het patroon, hij ziet door een onderwerp heen naar de kern. Niets wordt gemist. Er wordt beslist.",
    founded: "Opgericht in 2019.",
  },
  cases: {
    label: "Cases",
    heading: "Projecten waar we ja zeiden met een reden.",
    coreProblem: "Het kernprobleem",
    whatWeDid: "Wat we deden",
    whyYes: "Waarom we ja zeiden",
    projects: [
      {
        tab: "Model 1",
        client: "FairVacuum",
        name: "Model 1",
        tags: ["circulair", "modulair", "e-waste", "universeel"],
        problem:
          "Stofzuigers sterven als geheel wanneer één onderdeel faalt. Het echte afval is niet het kapotte onderdeel, maar de perfect functionerende onderdelen die ermee worden weggegooid.",
        what: "Een modulaire stofzuigerbehuizing ontworpen waarbij elk onderdeel onafhankelijk vervangen kan worden. Voor we aan productie begonnen, bouwden we Model 1 als DIY-kit en verkochten het. Echte gebruikers, echte huizen, echte data over wat technisch, functioneel en als business werkt. Die kits worden nu geleverd. Alles wat we leren vloeit rechtstreeks door naar Model 2, de productieversie.",
        why: "Recht op reparatie. Een wereld opkuisen die door anderen is vervuild. Dat anderen winst maken uit vervuiling betekent niet dat wij dat ook moeten doen.",
        url: "https://www.fairvacuum.com",
      },
      {
        tab: "Multimedia Handset",
        client: "IndigoCare",
        name: "Multimedia Handset",
        tags: ["zorg", "waterdicht", "DFM"],
        problem:
          "Een verpleegoproephandset die in twee oriëntaties moest werken. Kabel bovenaan bij ophangen, kabel onderaan bij docken. Volledig waterdicht in beide gevallen, en de behuizing moet waterdicht blijven na elke wissel. Elke configuratiekeuze moest dagelijks gebruik in zorgomgevingen overleven.",
        what: "Een deels afgewerkt model genomen en omgezet naar een aanpasbaar, waterdicht, productierijp ontwerp. Volledige mechanische engineering, DFM, coördinatie met de fabrikant, en vele rondes waterdichte tests met functionele prototypes.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/multimedia-handset",
      },
      {
        tab: "PURE-D",
        client: "Denck",
        name: "PURE-D",
        tags: ["startup", "thermoset compressie", "consumentenproduct"],
        problem:
          "Hoe bouw je betrouwbare ventilatie in een toiletbril die mensen dagelijks gebruiken, zonder elektrische aansluiting, tegen een consumentenprijs?",
        what: "Volledige productontwikkeling van concept tot prototyping tot productierijp ontwerp. Mechanische engineering, luchtstromsimulatie, materiaalkeuze en DFM voor thermoset compressiemoulding.",
        why: "Dennis is eerlijk en fair. Hij gelooft in lokaal bouwen, met mensen die je kan vertrouwen. Hij maakt een product waar mensen van genieten, en hij maakt het goed. Geen hoeken afgesneden om de marge op te krikken.",
        url: "https://www.denck.eu",
      },
      {
        tab: "iTrack",
        client: "IndigoCare",
        name: "iTrack armband",
        tags: ["zorg", "wearable", "waterdicht", "gereedschapvrije batterijwissel"],
        problem:
          "Drie draadloze technologieën moeten samenleven in één behuizing die klein genoeg is voor om de pols, robuust genoeg voor dagelijks gebruik in de zorg, en waterdicht. Bovendien moet de batterij verwisselbaar zijn zonder gereedschap of kleefmiddelen, en de behuizing moet waterdicht blijven na elke wissel.",
        what: "Een compacte behuizing ontworpen met een gereedschapvrij batterijwisselmechanisme dat de waterdichte afdichting behoudt bij iedere wissel. Volledig mechanisch ontwerp, waterdichtheidsstrategie, comforttesting, waterdichtheidstesten met functionele prototypes en productierijpe CAD.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/itrack-wireless-nurse-call",
      },
      {
        tab: "iCall 2",
        client: "IndigoCare",
        name: "iCall 2",
        tags: ["zorg", "modulariteit", "open ontwerp", "upgradeerbaarheid"],
        problem:
          "Zorgapparatuur zit vandaag ingebouwd in de muur. Elke aanpassing of reparatie betekent de muur openbreken -- kostbaar, tijdrovend, en het systeem ligt plat. Het idee: in de muur zit alleen een gestandaardiseerd dockingpunt met voeding en data. De apparatuur zelf is een los doosje dat je er op- en afklikt. Upgrade nodig? Nieuw doosje opklikken. Defect? Vervangmodule opklikken, kapotte doosje wordt elders hersteld. Het systeem blijft altijd draaien, zonder gereedschap, zonder aannemer, zonder stilstand.",
        what: "De volledige productreeks herontworpen rond modulariteit en upgradeerbaarheid. Gedeelde behuizingen over modellen heen, minder onderdelen, ontworpen voor reparatie ter plaatse door ondersteuningspersoneel, en een open architectuur die toekomstige modules opvangt zonder herontwerp.",
        why: INDIGO_WHY,
        url: "https://www.indigocare.com/icall2",
      },
      {
        tab: "Foote",
        client: "Orville",
        name: "Foote",
        tags: ["eigen product", "ergonomisch", "bamboe", "draagbaar"],
        problem:
          "Een draagbaar scherm heeft een standaard nodig. Elke standaard is een apart stuk dat je vergeet, verliest of mee worstelt. Kan de standaard gewoon deel uitmaken van het scherm, en ergonomisch genoeg zijn voor dagelijks gebruik?",
        what: "Volledige productontwikkeling en go-to-market. Van eerste schets tot verzendlabel. Mechanisch ontwerp, ergonomische positionering, materiaalkeuze (bamboe), scharniertechniek, verpakking en productiecoördinatie.",
        why: "We wilden bewijzen dat we een product van concept tot markt konden brengen. Niet adviseren, doen. Van de eerste schets tot het verzendlabel.",
        url: "https://www.foote.be",
      },
    ],
  },
  expect: {
    label: "Nieuw terrein",
    heading: "We hebben niet alles eerder gedaan maar we zijn erg goed in dingen uitzoeken.",
    paragraphs: [
      "FairVacuum was een domein dat we niet kenden. De waterdichte behuizing zonder schroeven een probleem dat we nooit eerder hadden opgelost. Dat is het punt van innoveren.",
      "We ontwikkelen nieuwe producten. Als we het al eerder hadden gedaan, was er niks nieuws aan.",
    ],
    steps: [
      {
        n: "01",
        text: "De klant brengt domeinkennis mee. Regelgeving, productie-eisen, marktcontext. Wat de klant ons kan uitleggen zou zot zijn om zelf te gaan uitzoeken. Dus daar beginnen we.",
      },
      {
        n: "02",
        text: "Wij duiken erin. Papers, naslagwerk, normen, materiaaleigenschappen. Niet oppervlakkig, maar tot we het begrijpen en ermee kunnen werken.",
      },
      {
        n: "03",
        text: "Waar nodig (zoals bv bij specifieke wetgeving) gaan we op zoek naar de juiste specialist. Niet iemand die alles half weet, maar de juiste persoon voor het juiste deelprobleem.",
      },
      {
        n: "04",
        text: "Op een bepaald punt moet je iets maken. Pas dan weet je of je informatie klopt, of je aannames standhouden, en of je conclusies kloppen. Dat herhalen we tot het zeker is.",
      },
    ],
  },
  name: {
    label: "De naam",
    title: "Orville",
    subtitle: "Wright, 1871–1948",
    body1: "De naam is niet willekeurig gekozen. Het verwijst naar de gebroeders Wright, twee fietsenmakers die in 1903, met een bescheiden budget, de eerste gemotoriseerde vlucht realiseerden terwijl veel grotere spelers faalden.",
    body2: "Innovatie is niet voorbehouden aan de groten. Hun aanpak: iteratief werken, testen en leren van fouten. Dat is ook onze aanpak.",
  },
  contact: {
    label: "Contact",
    heading: "Laten we praten.",
    body: "Voor complete productontwikkeling waar circulariteit, herstelbaarheid of technische haalbaarheid centraal staan. Nog niet zeker waar je staat? Een gesprek verduidelijkt dat meestal snel.",
    expectLabel: "Wat te verwachten",
    expectBody: "Reken op een half uur. De meeste mensen blijven langer omdat het onderwerp interessant wordt. Geen verplichtingen, geen intakeprocedure.",
    footer: "Orville BV, Kortessem, België",
    copyright: "© 2026",
  },
  howWeWork: {
    label: "Hoe we werken",
    items: [
      {
        n: "01",
        title: "Probleem eerst",
        text: "We besteden de eerste fase aan het zeker stellen dat het juiste probleem op tafel ligt. De modulariteitsvraag die eigenlijk een herstelbaarrheidsvraag is. De materialenvraag die eigenlijk een businessmodelvraag is. Soms klopt de briefing en bevestigen we dat. Soms niet en zeggen we dat.",
      },
      {
        n: "02",
        title: "Maken, testen, leren, herhalen",
        text: "We ontwerpen niet in het abstracte. We bouwen iets, testen het, leren ervan en doen het opnieuw. Elke iteratie maakt het product scherper en de aannames minder. Dit is geen fase. Het is hoe elke fase werkt.",
      },
    ],
    link: "Lees meer over ons proces en onze methode",
  },
  processPage: {
    back: "Terug",
    heading: "Ons proces en onze methode",
    intro:
      "Elk project is anders. Maar de manier waarop we erover nadenken niet. Zo werken we, van eerste gesprek tot productie.",
    phasesLabel: "De fases",
    phases: [
      {
        n: "01",
        title: "Het probleem begrijpen",
        text: "Voor we één lijn trekken, zorgen we dat we het juiste probleem oplossen. We challengen de briefing, stellen oncomfortabele vragen en graven in wat er écht aan de hand is. De modulariteitsvraag die eigenlijk over herstelbaarheid gaat. De materialenvraag die eigenlijk over het businessmodel gaat. We slaan deze stap niet over: hierop is al de rest gebouwd.",
      },
      {
        n: "02",
        title: "Verkennen en definiëren",
        text: "Als het probleem helder is, verkennen we breed voor we versmallen. Concepten, schetsen, ruwe modellen, snel en goedkoop. We zoeken niet het eerste goede idee, we zoeken de beste richting. Deze fase eindigt met een heldere definitie van wat we bouwen en waarom.",
      },
      {
        n: "03",
        title: "Maken, testen, leren, herhalen",
        text: "We bouwen iets, testen het, leren ervan en doen het opnieuw. Ons eigen atelier, onze eigen machines: 3D-printers, lasersnijders, CNC, gieten. Elke iteratie maakt het product scherper en de aannames minder. Dit is geen fase. Het is hoe elke fase werkt.",
      },
      {
        n: "04",
        title: "Detailleren en engineeren",
        text: "Als het concept bewezen is, engineeren we het voor productie. Materiaalkeuze, toleranties, assemblagelogica, DFM. We denken na over wie het bouwt, hoe het wordt geassembleerd en wat er gebeurt als er iets misgaat in het veld. Elk detail is een beslissing, en we nemen ze bewust.",
      },
      {
        n: "05",
        title: "Productieondersteuning",
        text: "We geven geen bestand af en lopen weg. We blijven betrokken bij tooling, eerste samples en productie-opstart. We praten met je fabrikant, lossen problemen ter plaatse op en zorgen dat wat van de lijn komt overeenkomt met wat ontworpen is.",
      },
    ],
    principlesLabel: "Wat onze manier van werken drijft",
    principles: [
      {
        title: "Co-piloot, geen consultant",
        text: "We werken naast je, waar mogelijk een dag per week bij jou op locatie. Je blijft betrokken bij elke stap. Je kennis groeit mee met het project, zodat je onderweg beter geïnformeerde beslissingen kan nemen.",
      },
      {
        title: "Het sneeuwbaleffect",
        text: "We kijken altijd minstens één laag dieper dan het voor de hand liggende antwoord. Wat je ziet bepaalt wat je denkt. Wat je denkt bepaalt wat je doet. Over een heel project compound dat.",
      },
      {
        title: "Makers in hart en nieren",
        text: "Ons eigen atelier, onze eigen machines. We prototypen snel, testen vroeg en leren van onze fouten. Zo vangen we problemen op voor de productie dat doet.",
      },
      {
        title: "We hebben onze eigen producten verscheept",
        text: "We hebben onze eigen producten ontwikkeld en op de markt gebracht. We hebben de afwegingen gemaakt, het gewicht gevoeld van beslissingen die op papier simpel lijken maar dat niet zijn, en toch verscheept. Dat bepaalt hoe we met jou werken.",
      },
    ],
    ctaHeading: "Een project in gedachten?",
    ctaBody: "Laten we praten over waar je mee bezig bent.",
    ctaButton: "Neem contact op",
  },
};
