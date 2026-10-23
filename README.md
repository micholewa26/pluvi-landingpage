# PLUVI — strona internetowa

React, TypeScript i Vite. Podstrony: /, /o-nas, /system, /pompy, /konfigurator,
/kontakt, /polityka-prywatnosci i /regulamin.

## Lokalnie (PowerShell)

    npm.cmd install
    npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort

Otwórz http://127.0.0.1:5173/. Terminal musi pozostać otwarty.
npm.cmd działa również przy zablokowanych skryptach PowerShell.

## Publikacja

Push na main uruchamia .github/workflows/deploy.yml i wdraża GitHub Pages.
Workflow odczytuje bazową ścieżkę skonfigurowanej witryny, buduje aplikację
i uruchamia scripts/prepare-pages.mjs. Każda podstrona dostaje własny dokument
wejściowy, więc można ją otwierać bezpośrednio i odświeżać. 404.html jest fallbackiem.

Lokalna kontrola paczki dla domeny głównej:

    npm.cmd run build
    node scripts/prepare-pages.mjs
    npm.cmd run preview -- --host 127.0.0.1

## Edycja

- Treści i dane firmy: src/data/content.ts.
- Typy pomp, skład zestawów i wiadomość do kontaktu: src/data/configurator.ts.
- O nas: src/pages/About.tsx, src/about.css.
- Konfigurator: src/pages/Configurator.tsx, src/components/ProductStage.tsx, src/configurator.css.
- Film otwarcia: public/videos/hero.mp4.

Konfigurator zachowuje wybór w parametrach URL. GX 160/GX 270 obejmują zbiornik
25 l z pomiarem paliwa; wariant elektryczny pokazuje osobny sterownik między szafą
a pompą. Własne urządzenie ma indywidualny zakres integracji. Dodatkowe pomiary
do pomp: wilgotność gleby oraz termometr suchy i mokry.

Scena to kompozycja 2.5D z animowanymi grafikami, nie model CAD. Render pompy
spalinowej jest wspólny dla GX 160/GX 270. Grafiki są poglądowe.
Pochodzenie i prompty ImageGen zapisano w docs/configurator-assets.json
oraz docs/electric-pluvi-asset.json. Strona korzysta z plików WebP w
public/images/configurator/ i zdjęć w src/assets/.

Formularz wysyła dane dopiero po zatwierdzeniu przez użytkownika do istniejącego
endpointu PHP na home.pl. Konfigurator oraz prezentacja aplikacji nie łączą się
ze sprzętem i nie składają automatycznych zamówień. Testów nie należy wykonywać
przez wysyłanie zgłoszeń do produkcyjnego endpointu.

## Unicorn Hub — źródła

- Nagroda Publiczności: https://edycja2.unicornhub.pl/2026/06/21/zobacz-co-dzialo-sie-na-demo-day/
- Oficjalny pasek znaków: https://edycja2.unicornhub.pl/wp-content/uploads/2024/08/4_polska_wschodnia_kolor.jpg
- Opis programu: https://edycja2.unicornhub.pl/dokumenty/

Informacja o współfinansowaniu dotyczy udziału w inkubacji, nie przyznania spółce
odrębnej dotacji. Materiały robocze, wewnętrzny audyt treści i źródłowe duże PNG
pozostają lokalne; nie są potrzebne do zbudowania witryny.
