//zad 1
var data = new Date();
document.write("Dzień tygodnia to: " + data.getDay()+ "<br>");
//zad 2
document.write("Miesiąc to: " + data.getMonth() + "<br>");
//zad 3
const dzisiaj = new Date();

const dniTyg = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
const miesiace = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'październik', 'listopad', 'grudzień'];

const DzienTyg = dzisiaj.getDay();
const miesiac = dzisiaj.getMonth();

const dzienTygNazwa = dniTyg[DzienTyg];
const miesiacNazw = miesiace[miesiac];

document.write(" Dzisiaj jest: " + dzienTygNazwa + " <br>");
// zad 4
/* 
const motto = [
    'Poniedziałek - czas na nowe wyzwania!',
    'Wtorek - pracuj z uśmiechem na twarzy!',
    'Środa - połowa tygodnia, czas na mały odpoczynek!',
    'Czwartek - blisko weekendu!',
    'Piątek - weekend już niedługo!',
    'Sobota - dzień wolny, ciesz się nim!',
    'Niedziela - dzień odpoczynku, zrelaksuj się!'
  ];
  const dzisiajj = new Date();
  const dzienTygodniaa = dzisiajj.getDay();
  
  // Wyświetlenie motto dla dzisiejszego dnia tygodnia w konsoli
  document.write(`Motto na dziś: ${motto[dzienTygodniaa]}<br>`);
*/
  


//zad 5
const koniecRS = new Date("2024-06-23");
const dzisiaj1 = new Date();
const roznicaCzasu = koniecRS.getTime() - dzisiaj1.getTime();
const wynik = (roznicaCzasu / (1000* 60 * 60 * 24));
document.write("Do końca roku szkolnego zostało: " + wynik +" dni.");


//zad 6
function wyswietl() {
    const dniTygodnia = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Śierpień', 'Październik', 'Listopad', 'Grudzień'];
    const dzis1= new Date();   
    const dzienTygodnia = dniTygodnia[dzis1.getDay()];
    const dzienMiesiaca = miesiace [dzis1.getMonth()];
    const rok = dzis1.getFullYear();
    let godzina = dzis1.getHours();
    let minuty = dzis1.getMinutes();
    let sekundy = dzis1.getSeconds();
    if (godzina < 10)
    {
        godzina = '0' + godzina;
    }
    if (minuty <10){
        minuty = '0' + minuty;
    }
    if (sekundy <10){
        sekundy = '0' + sekundy;
    }
    document.write("<br>" + "Godzina: " + godzina + ":" + minuty + ":" + sekundy);
}
wyswietl();