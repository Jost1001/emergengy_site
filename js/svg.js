// Hotspot 1

document.querySelector("#Hotspot1").addEventListener("mouseover", mouseOver1);
function mouseOver1() {
  document.querySelector("#Hotspot1").style.opacity = 0.6;
}
document.querySelector("#Hotspot1").addEventListener("mouseout", mouseOut1);
function mouseOut1() {
  document.querySelector("#Hotspot1").style.opacity = 0.2;
}

document.querySelector("#Hotspot1").addEventListener("click", click1);
function click1() {
  document.querySelector(".info-text h2").textContent = "Siddepladser";
  document.querySelector(".info-text .placeholder").textContent =
    "Siddepladserne er med til at forme dynamikken og stemningen til din fest, middag eller dit selskab.Derfor kan det være en god idé at gøre sig nogle tanker om placering, komfort og hvem der sidder sammen. Og selvfølgelig skal man sørge for at alle har noget at sidde på.";
  document.querySelector("#efficiency").textContent =
    "Gæster: Når du planlægger siddepladser, bør du overveje, hvordan gæsterne passer sammen socialt.At placere folk strategisk kan skabe gode samtaler og en bedre stemning.Tænk også over relationer, så både nye og kendte ansigter får en god oplevelse.Sørg desuden for komfort og plads, så alle kan sidde godt under hele arrangementet.";
  document.querySelector("#requirement").textContent =
    "Tema: Når du vælger siddepladser og stole, bør du overveje, om de passer til det overordnede tema.Stil og materialer kan understøtte stemningen, hvad enten det er formelt, rustikt eller afslappet.Ensartede stole giver et gennemført udtryk, mens blandede kan skabe en mere uformel stemning.Tænk også over komfort, så temaet ikke går ud over gæsternes oplevelse.";
}

// Hotspot 2

document.querySelector("#Hotspot2").addEventListener("mouseover", mouseOver2);
function mouseOver2() {
  document.querySelector("#Hotspot2").style.opacity = 0.6;
}
document.querySelector("#Hotspot2").addEventListener("mouseout", mouseOut2);
function mouseOut2() {
  document.querySelector("#Hotspot2").style.opacity = 0.2;
}
document.querySelector("#Hotspot2").addEventListener("click", click2);
function click2() {
  document.querySelector(".info-text h2").textContent = "Mad og drikke";
  document.querySelector(".info-text .placeholder").textContent =
    "Mad og drikke er noget af det primære der er med til at danne rammerne omkring din fest, middag eller selskab. Derfor kan det være en god ide at gøre sig nogle tanker omkring dette.";
  document.querySelector("#efficiency").textContent =
    "Maden: Når du planlægger mad til et selskab, bør du overveje, om du vil stå for det hele selv eller lade gæsterne bidrage.    At lave alt selv giver kontrol, men kræver mere tid og overskud.En fælles løsning, hvor flere tager noget med, kan skabe variation og lette presset.Tænk også over gæsternes forventninger og hvilken stemning, du gerne vil skabe.";
  document.querySelector("#requirement").textContent =
    "Drikkelse: Når du planlægger drikkevarer til et selskab, bør du overveje, om du vil sørge for det hele selv eller lade gæsterne tage noget med.At stå for det selv giver overblik og ensartet udvalg, men kan være dyrt og krævende.Hvis gæsterne bidrager, kan det give større variation og aflaste dig som vært.Tænk også over mængde, præferencer og hvilken stemning, du ønsker at skabe.";
}

// Hotspot 3

document.querySelector("#Hotspot3").addEventListener("mouseover", mouseOver3);
function mouseOver3() {
  document.querySelector("#Hotspot3").style.opacity = 0.6;
}
document.querySelector("#Hotspot3").addEventListener("mouseout", mouseOut3);
function mouseOut3() {
  document.querySelector("#Hotspot3").style.opacity = 0.2;
}
document.querySelector("#Hotspot3").addEventListener("click", click3);
function click3() {
  document.querySelector(".info-text h2").textContent = "Borddækning";
  document.querySelector(".info-text .placeholder").textContent =
    "Borddækningen er med til at sætte scenen for din fest, middag eller dit selskab og skaber en helhedsoplevelse for dine gæster.Derfor kan det være en god idé at gøre sig nogle tanker om stil, service og detaljer.";
  document.querySelector("#efficiency").textContent =
    "Service: Når du planlægger service til et selskab, bør du overveje, om du bruger det, du allerede har, køber nyt eller låner.At bruge eget service er nemt og personligt, men passer måske ikke helt sammen.At købe nyt giver et ensartet udtryk, men kan være dyrt for én anledning.At låne fra andre kan være en god mellemvej, men kræver koordinering og omtanke.";
  document.querySelector("#requirement").textContent =
    "Pynt: Når du planlægger pynt til rum og bord, bør du overveje, om det skal passe til maden eller følge et bestemt tema.Et gennemført tema kan skabe en rød tråd, men kræver mere planlægning.Du kan hente inspiration fra årstid eller højtid for at gøre det stemningsfuldt og relevant.Alternativt kan du holde det enkelt og lade pynten understøtte helheden uden at fylde for meget. Og måske skal der slet ikke være noget pynt.";
}

// // Info-box
// document.querySelector("#Hotspot1").addEventListener("click", fadeIn);
// function fadeIn() {
//   document.querySelector("#info-text").classList.remove("info-text");
//   document.querySelector("#info-text").classList.add("fadeIn");
// }
