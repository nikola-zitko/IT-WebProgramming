# IT-WebProgramming
College tasks on HTML, CSS, JS, ...
____________________________
### HTML Laboratorijska vježba 1
____________________________
Izradite web stranicu prema slijedećim smjernicama:

   Web stranica bi trebala biti oblikovana prema HTML5 specifikaciji.
   Definirati zaglavlje html dokumenta sa pripadnim meta podacima, naslovom te kodnom stranicom.
   Oblikovati tekst korištenjem oznaka i atributa za:

    - oblikovanje naslova, odlomka, novog reda,
    - podebljanje i nakošenje teksta,
    - oblikovanje posebnih dijelova teksta (primjerice copyright)
    - dodati dva linka gdje je prvi obični link na web stranicu, a drugi link predstavlja korištenje sidrišta.
____________________________
### HTML/CSS Laboratorijska vježba 2
____________________________
Izradite web stranicu prema slijedećim smjernicama:

    - Oblikovati tekst korištenjem css svojstva font (font, veličine, stil...)
    - Za podlogu web stranice postaviti sliku po želji i pripadna svojstva
    - Stranica bi trebala sadržavati popis vaših kolegija, razvrstanih prema zimskom i ljetnom semestru,
      te prema odabranom smjeru studiranja
    - Stavke smjera prikazati sa modrom bojom (RGB zapis)
    - Korištenjem slike (slika.png) kao slikovne mape, prikažite prema pripadnim koordinatama prikazane likove
![slikovnamapa.png](https://github.com/nikola-zitko/IT-WebProgramming/blob/master/Assets/slikovnamapa.png)
____________________________
### HTML/CSS Laboratorijska vježba 3
____________________________
Izradite web stranicu prema sljedećim smjernicama:

    - Korištenjem SVG-a nacrtajte sljedeće likove i jedan po želji
![SVG.png](https://github.com/nikola-zitko/IT-WebProgramming/blob/master/Assets/SVG.png)

    - U središnjem dijelu stranice izraditi tablicu prema vašem trenutnom tjednom rasporedu
        - Potrebno je pripaziti kod definiranja rasporeda da većina predavanja
        i vježbi traju više od jednog sat (koristiti rowspan/colspan)
        - Oblikovati tablicu sa CSS-om
____________________________
### HTML/CSS Laboratorijska vježba 4
____________________________
Oblikovati web stranicu koja će prikazivati sadržaj i kontrole forme koje su potrebne za registraciju korisnika na web dućanu.
Forma bi trebala omogućiti i personalizaciju prema željenim proizvodima.
____________________________
### HTML/CSS Laboratorijska vježba 5
____________________________
Izradite web stranicu prema sljedećim smjernicama:

    - Temu web stranice odabrati po želji
    - Shemu web stranice definirajte svojstvima float i clear,
    a shema bi trebala  sadržavati uobičajena područja (zaglavlje, središnji dio i podnožje)
    - Oblikovati horizontalnu navigaciju
    - Oblikovati web stranicu sa CSS-om
    - CSS definirati u odvojenoj datoteci
____________________________
### JavaScript Laboratorijska vježba 1
____________________________

Korištenjem petlji for i while, omogućiti zbrajanje brojeva od 50 do 10 koji su djeljivi i sa brojem 2 i sa brojem 5,
a oni koji nisu ispisati ih. U jednoj od petlji, potrebno je uvjetni izraz definirati sa ternarnim operatorom.

Korištenjem switch strukture prikazati puni naziv studija za određene skraćene nazive (primjerice IT, RIF, KS, TP).

Definirati literal funkcije koji prima tri broja i koji računa opseg trokuta.
Dobiveni rezultat je povratna vrijednost funkcije koju je potrebno ispisati na stranici.
____________________________
### JavaScript Laboratorijska vježba 2
____________________________

Definirati funkciju koja za poslana dva broja, računa njihov zbroj i umnožak. Ispitati poslane vrijednosti sa funkcijom isFinite. Povratne vrijednosti funkcije su zbroj i umnožak. Povratne vrijednosti je potrebno ispisati u konzoli.

Napisati program gdje korištenjem naredbe prompt korisnik unosi željenu operaciju (+ - * /) i dva broja. Temeljem odabrane operacije poziva se funkcija kojoj se šalje callback funkcija i dva broja. Callback funkcija ispisuje rezultat odabrane operacije.

Napisati program koji ovisno o poslanom tekstu poruke i imenu osobe (šalju se odvojeno), oblikuje prigodni pozdrav. Koristiti closure funkciju.
____________________________
### JavaScript Laboratorijska vježba 3
____________________________

Korištenjem arrow funkcija definirati funkciju koja računa hipotenuzu trokuta i unutarnje funkcije koje računaju kvadrat i korijen broja.

Korištenjem currying i arrow funkcija, omogućite odvojeno definiranje pozdrava i njegovo ispisivanje u konzoli. 

Neka pozdrav ima fiksni dio koji prvotno definirate, a kasnije šaljete samo promjenjivi dio. Primjerice, const poruka = pozdrav("Kolegij i ects bodovi:"); poruka("MUP")("6");, a ispisati će "Kolegij i ects bodovi: MUP, 6". 

Za ispis koristiti string predloške ${}. 

Kreirati niz koji će sadržavati 20 slučajno generiranih brojeva u intervalu od 10 do 100, zaokruženih na najbliži cijeli broj. (koristiti metode niza) 

    - Potrebno je u novi niz izdvojiti brojeve između 50 i 90.
    - Elemente izdvojenog niza je potrebno sortirati od manjeg prema većem i ispisati ih.
    - Iz sortiranog niza je potrebno izbrisati najmanji i najveći broj.
    - Izračunati i ispisati zbroj elemenata.

____________________________
### JavaScript Laboratorijska vježba 4
____________________________
Metode stringa

    Pridijeliti stringu tekst „cascading style sheets“
    Izdvojiti prva slova svih riječi i pretvoriti ih u velika slova kako bi se dobila kratica (CSS)
    Dobivenu kraticu dodati na kraj stringa unutar zagrada primjerice "casdading style sheets (CSS)"
    Ispisati koliko novo dobiveni string ima ukupno slova s  

Regularni izrazi
    
    Napisati RI koji prepoznaje heksadecimalni zapis postavljene boje (primjer ispravnih zapisa su #aae31c, #abc).
    Napisati RI koji će testirati da li mail odgovara slijedećem uzorku ime_posiljatelja@nesto.com, odnosno prije znaka @ dozvoljeni su samo mala slova i znak _, a poslije znaka @ ime domene nesto.com, gdje je iza točke dozvoljeno 2 do 3 znaka, .hr, .edu, .gov i slično
    Napisati RI koji testira upisane brojeve, odnosno broj može biti pozitivan i negativan cijeli i decimalni broj. (primjeri ispravnih brojeva su 4, -4, 4.4, -4.4, a primjeri neispravnih brojeva su 04, -04, 04.4, -04.4.

