let currentSlide = 0;

const imageTexts = [
    ["  Die East Blue Saga ist die Einführungsserie der One Piece Welt, in der wir Monkey D. Luffy und seine ersten Crewmitglieder kennenlernen. Diese Saga deckt Luffys Kindheit ab und zeigt, wie er seine ersten Gefährten  Zoro, Nami, Usopp und Sanji  trifft. Die Crew stellt sich einer Vielzahl von Herausforderungen, die ihnen helfen, sich als Piraten zu etablieren, darunter Kämpfe gegen andere Piraten wie Buggy, Kuro und den tyrannischen Fischmenschen Arlong.", "Die Alabasta Saga konzentriert sich auf die Bemühungen der Strohhutpiraten, eine Rebellion in der Wüsteninsel Alabasta zu verhindern. Der Hauptgegner, Sir Crocodile, ein Mitglied der Shichibukai, plant, das Königreich zu stürzen, um an eine mächtige antike Waffe zu gelangen. Diese Saga ist entscheidend für die Entwicklung der Charaktere und zeigt das erste große Aufeinandertreffen mit der Weltregierung und ihren Agenten.", "Die Skypia Saga führt die Strohhutpiraten in den Himmel, wo sie eine Insel in den Wolken entdecken. Diese Saga ist voller Abenteuer und Mystik, da die Crew die Geschichte der Himmelsinsel und ihrer Bewohner erforscht. Der zentrale Konflikt dreht sich um den Konflikt mit Enel, einem machtvollen Gegner, der mit seinen Blitzkräften beinahe göttlich wirkt. Die Saga ist auch bedeutsam für ihre Einblicke in die verlorene Geschichte der Welt.", "In der Water 7 Saga besuchen die Strohhutpiraten die wasserreiche Stadt Water 7, nur um sich bald in einem Netz aus Intrigen und Verrat verstrickt zu finden. Diese Saga ist entscheidend für die Entwicklung der Crew, insbesondere durch die Herausforderungen und Veränderungen innerhalb der Gruppe, einschließlich Usopps temporärem Austritt aus der Crew und Robins Konflikt mit ihrer dunklen Vergangenheit. Der Höhepunkt ist der dramatische Showdown in Enies Lobby, wo die Crew alles daransetzt, Robin zu retten.", "Die Wano Kuni Saga ist eine der bisher umfangreichsten und dramatischsten Arcs in One Piece. Sie spielt in einem isolierten, von einer Samurai-Kultur beherrschten Land, das von dem tyrannischen Shogun Orochi und dem mächtigen Piraten Kaido unterdrückt wird. Die Saga ist reich an kulturellen Anspielungen auf das feudale Japan und beinhaltet mehrere Schlüsselmomente der Serie, einschließlich intensiver Kämpfe und tiefgreifender Enthüllungen über die Geschichte der Welt und die Natur der Piraterie. Luffy und die Allianz kämpfen darum, das Land von der Tyrannei zu befreien und die geheime Geschichte von Wano zu enthüllen."], // One Piece
    ["Im Hunter Exam Arc tritt Gon Freecss der Hunter-Prüfung bei, in der Hoffnung, ein professioneller Hunter zu werden und seinem verschwundenen Vater nachzueifern. Während der Prüfung trifft Gon auf seine zukünftigen Freunde und Verbündeten: den rachsüchtigen Kurapika, den ehrgeizigen Leorio und den mysteriösen Killua. Die Teilnehmer müssen eine Reihe von gefährlichen und oft tödlichen Tests bestehen, die ihre körperlichen, geistigen und moralischen Grenzen auf die Probe stellen.", "Im Zoldyck Family Arc reisen Gon, Leorio und Kurapika zum Wohnsitz der Zoldyck-Familie auf dem Kukuru Mountain, um Killua zu befreien, der nach dem Ende der Hunter-Prüfung von seiner Familie festgehalten wird. Dieser kurze, aber aufschlussreiche Arc gibt Einblicke in die strenge und gefährliche Welt von Killuas Familie, die aus professionellen Assassinen besteht.", "Der Heavens Arena Arc folgt Gon und Killua, die an Kämpfen in einem riesigen Turm teilnehmen, der Himmelsarena, wo Kämpfer unterschiedlicher Stärken aufsteigen, um Ruhm und Geld zu gewinnen. Hier werden sie in die Grundlagen von Nen eingeführt, einer fundamentalen Kraft, die für zukünftige Konflikte in der Serie entscheidend ist.", "Im Greed Island Arc betreten Gon und Killua ein vollständig in einem Videospiel simuliertes Ökosystem, um ihre Nen-Fähigkeiten weiter zu trainieren und Hinweise auf Gons Vater zu finden. Der Arc kombiniert klassische RPG-Elemente mit der einzigartigen Welt von Hunter x Hunter und stellt neue Verbündete und Feinde vor.", "Der Chimera Ant Arc ist einer der längsten und intensivsten Arcs. Eine neue Spezies, die Chimera Ants, bedroht die Menschheit durch ihre Fähigkeit, die Eigenschaften der Wesen zu absorbieren, die sie verzehren. Die Ants entwickeln eine komplexe Gesellschaft, angeführt von der Königin und später ihrem Sohn, dem König Meruem. Dieser Arc ist geprägt von epischen Schlachten, philosophischen Fragen über die Natur des Menschen und tiefgreifenden Charakterentwicklungen."], // HunterxHunter
  ];
    

function showSlides() {
  const slides = document.querySelectorAll(".carousel .slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("center", "hidden-left", "hidden-right", "active");
    if (index === currentSlide) {
      slide.classList.add("center", "active");
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add("hidden-right", "active");
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add("hidden-left", "active");
    }
  });
}

function nextSlide() {
  currentSlide =
    (currentSlide + 1) % document.querySelectorAll(".carousel .slide").length;
  showSlides();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + document.querySelectorAll(".carousel .slide").length) %
    document.querySelectorAll(".carousel .slide").length;
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  document.querySelector(".carousel-container").classList.remove("move-up");
  document.body.style.overflow = "hidden";

  document.getElementById("slide1").addEventListener("click", revealContent);

  const categories = document.querySelectorAll(".container");
  categories.forEach((category) => addEventListenerToImages(category));
});

function addEventListenerToImages(_category) {
  // Zugriff auf alle img-Elemente innerhalb des div-Elements mit der ID 'image-container'
  const images = _category.querySelectorAll("img");

  // Hinzufügen des Eventlisteners zu jedem img-Element
  images.forEach((image) => {
    image.addEventListener("click", handleImageClick);
  });
}

// Funktion, die aufgerufen wird, wenn auf ein Bild geklickt wird
function handleImageClick(event) {
  const categoryNode = event.target.parentNode.parentNode.parentNode;
  const eventTarget = event.target;
  const paragraph = categoryNode.querySelector('.cartridge-text p');
  console.log(categoryNode);

  if (event.target.tagName === 'IMG') {
    // Alle img-Elemente im Container holen
    const categories = Array.from(document.querySelectorAll(".container"));
    const images = Array.from(categoryNode.querySelectorAll('img'));
    // Den Index des geklickten Bildes finden
    const categoryIndex = categories.indexOf(categoryNode);
    const imageIndex = images.indexOf(event.target);
    // Index ausgeben (beachte, dass die Zählung bei 0 beginnt)
    console.log('Geklicktes Bild ist Nummer:', imageIndex + 1);
    paragraph.innerText = imageTexts[categoryIndex][imageIndex];
}
//   console.log("Bild wurde geklickt:", event.target.src);
}

function revealContent() {
  document.querySelector(".carousel-container").classList.add("move-up");
  document.body.style.overflow = "auto";
}
