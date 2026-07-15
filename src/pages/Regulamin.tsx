import LegalLayout from "./LegalLayout";
import { company } from "../data/content";

const email = (
  <a href={`mailto:${company.email}`} className="text-primary hover:underline">
    {company.email}
  </a>
);

const Regulamin = () => (
  <LegalLayout title="Regulamin">
    <p>
      Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego
      pod adresem pluvi.pl, prowadzonego przez spółkę Pluvi sp. z o.o. z siedzibą w
      Lublinie, wpisaną do rejestru przedsiębiorców KRS pod numerem {company.krs}, NIP:
      {" "}{company.nip} (dalej: Usługodawca).
    </p>
    <p className="text-muted-foreground text-xs">Data wejścia w życie: 17 marca 2026 r.</p>

    <section>
      <h2>§ 1. Postanowienia ogólne</h2>
      <p>
        Serwis internetowy dostępny pod adresem pluvi.pl jest prowadzony przez Pluvi sp.
        z o.o. z siedzibą w Lublinie.
      </p>
      <p>
        Serwis ma charakter informacyjno-prezentacyjny i umożliwia zapoznanie się z
        ofertą Usługodawcy w zakresie sterowników, urządzeń pomiarowych oraz usług
        montażu i serwisu.
      </p>
      <p>Korzystanie z Serwisu jest dobrowolne i bezpłatne.</p>
      <p>
        Użytkownik przed rozpoczęciem korzystania z Serwisu zobowiązany jest do
        zapoznania się z niniejszym Regulaminem.
      </p>
    </section>

    <section>
      <h2>§ 2. Definicje</h2>
      <ul>
        <li>
          <strong>Usługodawca</strong> – Pluvi sp. z o.o., NIP: {company.nip}, KRS:
          {" "}{company.krs}, z siedzibą w Lublinie.
        </li>
        <li>
          <strong>Użytkownik</strong> – każda osoba fizyczna, prawna lub jednostka
          organizacyjna korzystająca z Serwisu.
        </li>
        <li>
          <strong>Serwis</strong> – serwis internetowy dostępny pod adresem pluvi.pl.
        </li>
        <li>
          <strong>Formularz kontaktowy</strong> – narzędzie dostępne w Serwisie
          umożliwiające przesłanie zapytania do Usługodawcy.
        </li>
      </ul>
    </section>

    <section>
      <h2>§ 3. Zakres usług</h2>
      <p>Za pośrednictwem Serwisu Usługodawca:</p>
      <ul>
        <li>
          prezentuje informacje o oferowanych produktach (sterowniki, urządzenia
          pomiarowe, moduły GSM i inne),
        </li>
        <li>
          prezentuje informacje o świadczonych usługach (montaż, serwis, konfiguracja
          urządzeń),
        </li>
        <li>udostępnia formularz kontaktowy umożliwiający przesłanie zapytania ofertowego,</li>
        <li>udostępnia dane kontaktowe firmy.</li>
      </ul>
      <p>
        Serwis nie prowadzi sprzedaży internetowej – zamówienia i zakupy realizowane są
        na podstawie indywidualnych ustaleń handlowych.
      </p>
    </section>

    <section>
      <h2>§ 4. Wymagania techniczne</h2>
      <p>Do korzystania z Serwisu niezbędne jest:</p>
      <ul>
        <li>urządzenie z dostępem do Internetu (komputer, tablet, smartfon),</li>
        <li>aktualna przeglądarka internetowa obsługująca JavaScript i pliki cookies.</li>
      </ul>
    </section>

    <section>
      <h2>§ 5. Formularz kontaktowy i zapytania ofertowe</h2>
      <p>
        Użytkownik może przesyłać zapytania ofertowe za pomocą formularza kontaktowego
        dostępnego w Serwisie.
      </p>
      <p>Przesłanie formularza nie stanowi zawarcia umowy ani złożenia zamówienia.</p>
      <p>
        Usługodawca zobowiązuje się do udzielenia odpowiedzi na zapytanie w terminie do 3
        dni roboczych.
      </p>
      <p>
        Usługodawca zastrzega sobie prawo do odmowy odpowiedzi na zapytania niezwiązane z
        jego działalnością.
      </p>
    </section>

    <section>
      <h2>§ 6. Prawa własności intelektualnej</h2>
      <p>
        Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, logotypy, zdjęcia
        i opisy produktów, stanowią własność Usługodawcy lub osób trzecich, które
        udzieliły Usługodawcy stosownych licencji.
      </p>
      <p>
        Zabronione jest kopiowanie, modyfikowanie lub rozpowszechnianie treści Serwisu
        bez pisemnej zgody Usługodawcy.
      </p>
      <p>
        Korzystanie z Serwisu nie oznacza nabycia przez Użytkownika jakichkolwiek praw do
        treści w nim zawartych.
      </p>
    </section>

    <section>
      <h2>§ 7. Odpowiedzialność</h2>
      <p>
        Usługodawca dokłada wszelkich starań, aby informacje zamieszczone w Serwisie były
        aktualne i rzetelne, jednak nie gwarantuje ich kompletności ani dokładności.
      </p>
      <p>
        Usługodawca nie ponosi odpowiedzialności za przerwy w dostępności Serwisu
        wynikające z przyczyn technicznych lub działań osób trzecich.
      </p>
      <p>
        Usługodawca nie ponosi odpowiedzialności za sposób korzystania z Serwisu przez
        Użytkownika niezgodny z niniejszym Regulaminem.
      </p>
    </section>

    <section>
      <h2>§ 8. Pliki cookies</h2>
      <p>
        Serwis może wykorzystywać pliki cookies w celu zapewnienia prawidłowego działania
        strony.
      </p>
      <p>
        Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w
        ustawieniach swojej przeglądarki.
      </p>
      <p>Wyłączenie plików cookies może ograniczyć funkcjonalność Serwisu.</p>
    </section>

    <section>
      <h2>§ 9. Zmiany Regulaminu</h2>
      <p>
        Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu w każdym
        czasie.
      </p>
      <p>
        Zmiany wchodzą w życie z chwilą opublikowania zaktualizowanej wersji Regulaminu w
        Serwisie.
      </p>
      <p>Dalsze korzystanie z Serwisu po wprowadzeniu zmian oznacza ich akceptację.</p>
    </section>

    <section>
      <h2>§ 10. Postanowienia końcowe</h2>
      <p>
        W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy
        prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o świadczeniu
        usług drogą elektroniczną.
      </p>
      <p>
        Wszelkie spory wynikające z korzystania z Serwisu będą rozstrzygane przez sądy
        powszechne właściwe dla siedziby Usługodawcy.
      </p>
      <p>Kontakt z Usługodawcą: {email}.</p>
      <p>Regulamin obowiązuje od dnia 17 marca 2026 r.</p>
    </section>
  </LegalLayout>
);

export default Regulamin;
